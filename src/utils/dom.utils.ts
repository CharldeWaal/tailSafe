import { UserAliases } from "../types";
import { allTailSafeProps as TAILSAFE_PROPS } from "../generated/generatedAllProps";


// This function filters out non-DOM props
export function filterDomProps<T extends Record<string, unknown>>(
    props: T,
    userAliases: UserAliases = {}
): { tailSafeProps: Partial<T>; domProps: Partial<T> } {
    const tailSafeProps: Partial<T> = {};
    const domProps: Partial<T> = {};

    // Create a combined set of props to filter out
    const userAliasKeys = userAliases ? Object.keys(userAliases) : [];
    const tailSafePropsToFilter = new Set([
        ...TAILSAFE_PROPS, // Generated TailSafe props (may be empty if codegen failed)
        ...userAliasKeys,
    ]);

    for (const key in props) {
        // Filter out TailSafe props and user aliases, allow everything else
        if (!tailSafePropsToFilter.has(key)) {
            domProps[key] = props[key];
        } else {
            tailSafeProps[key] = props[key];
        }
    }
    return { domProps, tailSafeProps };
}