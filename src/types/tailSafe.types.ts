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
type GeneratedTailSafe = import('../generated/generatedTailSafeInterface').TailSafe extends infer T
  ? T extends Record<string, any>
    ? T
    : {}
  : {};

// Merge generated interface with base - user aliases can extend this via module augmentation
export interface TailSafe extends TailSafeBase, GeneratedTailSafe {
  // The generated props will be merged here if available
  // User aliases can be added via module augmentation
}