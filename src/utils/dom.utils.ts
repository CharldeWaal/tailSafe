import { UserAliases } from "../types";

// Graceful import with fallback for generated props
let TAILSAFE_PROPS: Set<string> = new Set();
try {
    // eslint-disable-next-line
    const { allTailSafeProps } = require('../../generated/generatedAllProps');
    TAILSAFE_PROPS = new Set(allTailSafeProps || []);
    // eslint-disable-next-line
} catch (error) {
    // eslint-disable-next-line no-console
    console.warn('TailSafe: Generated props not found, relying on user aliases for filtering');
    TAILSAFE_PROPS = new Set();
}


// This function filters out non-DOM props
export function filterDomProps(props: Record<string, unknown>, userAliases: UserAliases = {}) {
    const domProps: Record<string, unknown> = {};

    // Create a combined set of props to filter out
    const userAliasKeys = userAliases ? globalThis.Object.keys(userAliases) : [];
    const propsToFilter = new Set([
        ...TAILSAFE_PROPS, // Generated TailSafe props (may be empty if codegen failed)
        ...userAliasKeys,  // User-defined aliases (always preserved)
    ]);

    for (const key in props) {
        // Filter out TailSafe props and user aliases, allow everything else
        if (!propsToFilter.has(key)) {
            domProps[key] = props[key];
        }
    }
    return domProps;
}