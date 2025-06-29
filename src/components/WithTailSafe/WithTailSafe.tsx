import React from "react";
import { TailSafe } from "../../types";
import { useTailSafe } from "../../hooks";
import { filterDomProps } from "../../utils";

export function withTailSafe<P extends object, R = unknown>(
    Component: React.ComponentType<P>
) {
    const Wrapped = React.forwardRef<R, P & Partial<TailSafe>>((props, ref) => {
        const { transformProps, userAliases = {} } = useTailSafe();
        // transformProps returns all original props, plus 'className'
        const { className, ...rest } = transformProps(props);

        // Filter out tailSafe props and user aliases - these should not be passed to the dom
        const domProps = filterDomProps(rest, userAliases);
        return <Component {...(domProps as P)} ref={ref} />;
    });

    // Set a display name for easier debugging
    Wrapped.displayName = `withTailSafe(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};