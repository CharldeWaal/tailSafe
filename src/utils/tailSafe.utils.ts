import { TailSafe, UserAliases, UserConfig } from "../types";

// Import with fallback
let baseTailSafeMap: Record<string, any> = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { tailSafeMap } = require("../generated/generatedTailSafeMap");
  baseTailSafeMap = tailSafeMap || {};
  // eslint-disable-next-line
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn('TailSafe: Base map not found, falling back to user-aliases-only');
  baseTailSafeMap = {};
}

// Cache for runtime map to avoid re-computation
let runtimeMapCache: Record<string, any> | null = null;
let lastConfigHash: string | null = null;

const loadUserConfig = (): UserConfig => {
  try {
    if (typeof window !== 'undefined') {
      // Browser environment - config should be passed via provider
      return {};
    }

    // Node.js environment
    const configPath = process.cwd() + '/tailSafe.config.js';
    delete require.cache[require.resolve(configPath)]; // Clear cache for hot reloading
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const userConfig = require(configPath);
    return userConfig.default || userConfig;
    // eslint-disable-next-line
  } catch (error) {
    // No user config found or error loading - that's okay
    return {};
  }
};

const createUserAliasMap = (aliases: UserAliases): Record<string, any> => {
  const aliasMap: Record<string, string | any> = {};

  for (const [aliasKey, classNames] of Object.entries(aliases)) {
    const classString = Array.isArray(classNames) ? classNames.join(' ') : String(classNames);
    aliasMap[aliasKey] = (v: boolean | string) => (v === true ? classString : v);
  }

  return aliasMap;
};

// Smart fallback: convert props to Tailwind classes
const createTailwindFallback = (key: string, value: any): string | null => {
  if (value === false || value === undefined || value === null) return null;

  if (typeof value === 'string') {
    // String value: check if it already contains the prop name
    if (value.startsWith(key + '-')) {
      // justify="justifycenter" -> "justify-center"
      return value;
    } else if (value.includes(key)) {
      // bg="bg-amber-200" -> "bg-amber-200" 
      return value;
    } else {
      // justify="center" -> "justify-center"
      return `${key}-${value}`;
    }
  }

  // Arrays or other types: convert to string
  return Array.isArray(value) ? value.join(' ') : String(value);
};

const createRuntimeMap = (userAliases?: UserAliases) => {
  // Load user config if not provided
  const userConfig = userAliases || loadUserConfig().aliases || {};

  // Create a hash of the config for caching
  const configHash = JSON.stringify(userConfig);

  // Return cached version if config hasn't changed
  if (runtimeMapCache && lastConfigHash === configHash) {
    return runtimeMapCache;
  }

  // Merge base map with user aliases - user aliases take precedence
  const runtimeMap = {
    ...baseTailSafeMap,
    ...createUserAliasMap(userConfig)
  };

  // Cache the result
  runtimeMapCache = runtimeMap;
  lastConfigHash = configHash;

  return runtimeMap;
};

export const construct = (props: TailSafe, userAliases?: UserAliases): string => {
  const runtimeMap = createRuntimeMap(userAliases);
  const totalKnownPropsLength = Object.keys(baseTailSafeMap).length + Object.keys(userAliases || {}).length;

  // Determine if we should use fallback mode
  const useFallbackMode = totalKnownPropsLength < 20; // If very few props available, assume broken state

  const classNames: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || key === 'className' || key === 'children') continue;

    const processor = runtimeMap[key];
    if (processor) {
      const result = processor(value);
      if (result) classNames.push(String(result));
    } else if (useFallbackMode) {
      // Fallback mode: treat unknown props as Tailwind classes
      const fallbackClass = createTailwindFallback(key, value);
      if (fallbackClass) {
        classNames.push(fallbackClass);
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn(`TailSafe: Fallback mode - converting "${key}=${value}" to "${fallbackClass}"`);
        }
      }
    } else if (process.env.NODE_ENV === 'development') {
      // Normal mode: warn about unknown props
      // eslint-disable-next-line no-console
      console.warn(`TailSafe: Unknown prop "${key}" with value "${value}"`);
    }
  }

  return classNames.filter(Boolean).join(' ');
};