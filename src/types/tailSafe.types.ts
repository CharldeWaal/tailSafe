// Fallback base interface - ensures TailSafe always has at least these core props
export interface TailSafeBase {
  className?: string;
}

export interface UserConfig {
  aliases?: Record<string, string[]>;
}

export type UserAliases = Record<string, string | string[]>;
export interface TailSafeConfig {
  aliases?: UserAliases;
  theme?: Record<string, string>;
}

// Graceful import with fallback
let GeneratedTailSafe: Record<string, string> = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const generated = require('../generated/generatedTailSafeInterface');
  GeneratedTailSafe = generated.TailSafe || {};
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn('TailSafe: Generated interface not found, using minimal fallback');
  GeneratedTailSafe = {};
}

// Merge generated interface with base - user aliases can extend this via module augmentation
export interface TailSafe extends TailSafeBase {
  // The generated props will be merged here if available
  // User aliases can be added via module augmentation
}