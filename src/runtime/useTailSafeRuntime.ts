import { useMemo } from 'react';
import { TailSafe } from '../types';
import { construct } from '../utils/underline.utils';

export interface TailSafeRuntimeConfig {
    defaultProps?: Partial<TailSafe>;
    autoApply?: boolean;
}

let globalConfig: TailSafeRuntimeConfig = {
    defaultProps: {},
    autoApply: true
};

export const configureTailSafe = (config: TailSafeRuntimeConfig) => {
    globalConfig = { ...globalConfig, ...config };
};

export const useTailSafeRuntime = <T extends { className?: string }>(
    props: T & Partial<TailSafe>
): T & { className: string } => {
    const { className: originalClassName, ...tailSafeProps } = props;

    const className = useMemo(() => {
        const mergedProps = { ...globalConfig.defaultProps, ...tailSafeProps };
        const tailSafeClassName = construct(mergedProps as TailSafe);

        return [originalClassName, tailSafeClassName]
            .filter(Boolean)
            .join(' ');
    }, [originalClassName, tailSafeProps]);

    return {
        ...props,
        className
    };
}; 