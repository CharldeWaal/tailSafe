'use client';

import React, { createContext, useCallback } from 'react';
import { TailSafe } from '../types';
import { construct } from '../utils/tailSafe.utils';
import { TailSafeContextState, TailSafeProviderProps } from '../types/provider.types';

export const TailSafeContext = createContext<TailSafeContextState>({} as TailSafeContextState);

export const TailSafeProvider: React.FC<TailSafeProviderProps> = ({
    children,
    userAliases = {},
    debug = false
}) => {

    const transformProps = useCallback(<T extends { className?: string }>(props: T & Partial<TailSafe>): T & { className: string } => {
        const { className: originalClassName, ...tailSafeProps } = props;

        const tailSafeClassName = construct(tailSafeProps as TailSafe, userAliases);
        const mergedClassName = [originalClassName, tailSafeClassName]
            .filter(Boolean)
            .join(' ');

        if (debug) {
            // eslint-disable-next-line no-console
            console.log('TailSafe transformed props:', {
                original: props,
                result: { ...props, className: mergedClassName },
                userAliases
            });
        }

        return {
            ...props,
            className: mergedClassName,
        };
    }, [userAliases, debug]);

    const contextValue: TailSafeContextState = {
        debug,
        userAliases,
        transformProps
    };

    return (
        <TailSafeContext.Provider value={contextValue}>
            {children}
        </TailSafeContext.Provider>
    );
};