'use client';

import React, { createContext, useCallback } from 'react';
import { TailSafe } from '../types';
import { construct } from '../utils/tailSafe.utils';
import { TailSafeContextState, TailSafeProviderProps } from '../types/provider.types';
import { filterDomProps } from '../utils';

export const TailSafeContext = createContext<TailSafeContextState>({} as TailSafeContextState);

export const TailSafeProvider: React.FC<TailSafeProviderProps> = ({
    children,
    userAliases = {},
    debug = false
}) => {

    const transformProps = useCallback(<T extends { className?: string }>(props: T & Partial<TailSafe>): { domProps: Partial<T>, className: string } => {

        // Filter out tailSafe props and user aliases - these should not be passed to the dom
        const { tailSafeProps, domProps } = filterDomProps(props, userAliases);

        const tailSafeClassName = construct(tailSafeProps as TailSafe, userAliases);
        const { className: originalClassName, ...restDomProps } = domProps as { className?: string; } & Record<string, unknown>;
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
            domProps: restDomProps as Partial<T>,
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