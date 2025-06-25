import { useMemo } from 'react';

export const useConfig = (): Record<string, string[]> => {

  const userAliases: Record<string, string[]> = useMemo(() => {
    try {
      // eslint-disable-next-line no-console
      console.log('🔍 useConfig: Attempting to load tailSafe.config.js');

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const userConfig = require('tailSafe.config.js');
      const config = userConfig.default || userConfig;
      // eslint-disable-next-line no-console
      console.log('✅ useConfig: Loaded config:', config);
      return config.aliases || {};

    } catch (error) {
      // No config found - that's fine
      // eslint-disable-next-line no-console
      console.log('❌ useConfig: Failed to load config:', (error as Error).message);
      return {};
    }
  }, []);

  return userAliases;
}; 
