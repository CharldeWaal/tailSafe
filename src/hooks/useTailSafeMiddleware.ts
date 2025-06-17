import { useMemo } from 'react';
import { TailSafe } from '../types';
import { construct } from '../utils/tailSafe.utils';

export function useTailSafeMiddleware<T extends { className?: string }>(
    props: T & Partial<TailSafe>
): T & { className: string } {
    const { className: originalClassName, ...tailSafeProps } = props;

    const tailSafeClassName = useMemo(() => {
        return construct(tailSafeProps as TailSafe);
    }, [tailSafeProps]);

    const mergedClassName = useMemo(() => {
        return [originalClassName, tailSafeClassName]
            .filter(Boolean)
            .join(' ');
    }, [originalClassName, tailSafeClassName]);

    return {
        ...props,
        className: mergedClassName
    };
} 