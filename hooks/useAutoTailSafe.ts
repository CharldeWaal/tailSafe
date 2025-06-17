import { useEffect, useRef } from 'react';
import { TailSafe } from '../types';
import { useTailSafeMiddleware } from './useTailSafeMiddleware';

interface AutoTailSafeConfig {
    enabled: boolean;
    defaultProps?: Partial<TailSafe>;
    selector?: string;
}

const defaultConfig: AutoTailSafeConfig = {
    enabled: false,
    defaultProps: {},
    selector: '[data-tailsafe]'
};

let globalConfig = { ...defaultConfig };

export const configureAutoTailSafe = (config: Partial<AutoTailSafeConfig>) => {
    globalConfig = { ...globalConfig, ...config };
};

export const useAutoTailSafe = <T extends { className?: string }>(
    props: T & Partial<TailSafe>,
    config?: Partial<AutoTailSafeConfig>
) => {
    const localConfig = { ...globalConfig, ...config };

    if (!localConfig.enabled) {
        return props;
    }

    return useTailSafeMiddleware(props);
};

// Automatic application hook for components
export const useAutoTailSafeComponent = <T extends { className?: string }>(
    props: T & Partial<TailSafe>
) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!globalConfig.enabled || !ref.current) return;

        const element = ref.current;
        const hasTailSafeData = element.hasAttribute('data-tailsafe');

        if (hasTailSafeData) {
            const { className } = useTailSafeMiddleware(props);
            element.className = className;
        }
    }, [props]);

    return ref;
}; 