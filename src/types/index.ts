export * from './tailSafe.types';
export { TailSafeProviderProps } from './provider.types';

import type { TailwindClass } from '../generated/generatedTailwindTypes';
import type { TailwindColorClass } from '../generated/generatedTailwindColors';
import type { VariantClass } from '../generated/generatedTailwindTypes';

export type TailwindAllClass = TailwindClass | TailwindColorClass;

export type VariantAllClass = VariantClass<TailwindAllClass>;
export { VariantClass };