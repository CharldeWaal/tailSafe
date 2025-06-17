import React, { createContext, useContext, ReactNode } from 'react';
import { TailSafe } from '../types';
import { useTailSafeMiddleware } from '../hooks/useTailSafeMiddleware';

interface TailSafeContextType {
    applyTailSafe: <T extends { className?: string }>(props: T & Partial<TailSafe>) => T & { className: string };
}

const TailSafeContext = createContext<TailSafeContextType | null>(null);

interface TailSafeProviderProps {
    children: ReactNode;
    defaultProps?: Partial<TailSafe>;
}

export const TailSafeProvider: React.FC<TailSafeProviderProps> = ({
    children,
    defaultProps = {}
}) => {
    const applyTailSafe = <T extends { className?: string }>(props: T & Partial<TailSafe>) => {
        const mergedProps = { ...defaultProps, ...props };
        return useTailSafeMiddleware(mergedProps);
    };

    return (
        <TailSafeContext.Provider value={{ applyTailSafe }}>
            {children}
        </TailSafeContext.Provider>
    );
};

export const useTailSafeContext = () => {
    const context = useContext(TailSafeContext);
    if (!context) {
        throw new Error('useTailSafeContext must be used within a TailSafeProvider');
    }
    return context;
}; 