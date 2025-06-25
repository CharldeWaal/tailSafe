import React from "react";
import { TailSafe } from "../../types";
import { useTailSafe } from "../../hooks";

export function withTailSafe<P extends object, R = unknown>(
    Component: React.ComponentType<P>
) {
    const Wrapped = React.forwardRef<R, P & Partial<TailSafe>>((props, ref) => {
        const { transformProps } = useTailSafe();
        const transformedProps = transformProps(props);
        return <Component {...(transformedProps as P)} ref={ref} />;
    });

    // Set a display name for easier debugging
    Wrapped.displayName = `withTailSafe(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};