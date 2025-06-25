'use client';

import React, { useMemo } from 'react';
import { TailSafeProvider } from './TailSafeProvider';
import { TailSafeProviderProps } from '../types';

// Dynamic import with fallback
let tailSafeConfig = { aliases: {} };
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  tailSafeConfig = require('../config/tailSafe.config.js');
} catch (error) {
  // eslint-disable-next-line no-console
  console.warn('TailSafe: Config loading error:', (error as Error).message);
}

export const AutoTailSafeProvider: React.FC<TailSafeProviderProps> = ({
  children,
  userAliases,
  ...props
}) => {

  const finalAliases = useMemo(() => ({
    ...tailSafeConfig.aliases,
    ...userAliases,
  }), [userAliases]);

  if (props.debug) {
    // 🔍 DEBUG: Let's see what's being loaded
    // eslint-disable-next-line no-console
    console.log('🐛 AutoProvider:', {
      internal: Object.keys(tailSafeConfig.aliases),
      user: Object.keys(userAliases || {}),
      final: Object.keys(finalAliases),
      userConfigPath: process.cwd() + 'tailSafe.config.mjs'
    });
  }

  return (
    <TailSafeProvider {...props} userAliases={finalAliases}>
      {children}
    </TailSafeProvider>
  );
}; 