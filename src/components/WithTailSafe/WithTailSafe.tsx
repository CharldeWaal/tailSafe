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
        const { domProps, className } = transformProps(props);

        // Filter out tailSafe props and user aliases - these should not be passed to the dom
        return <Component {...(domProps as P)} className={className} ref={ref} />;
    });

    // Set a display name for easier debugging
    Wrapped.displayName = `withTailSafe(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};