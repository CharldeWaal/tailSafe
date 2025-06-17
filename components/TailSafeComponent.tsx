import React, { ReactElement, cloneElement, isValidElement } from 'react';
import { TailSafe } from '../types';
import { useTailSafeMiddleware } from '../hooks/useTailSafeMiddleware';

interface TailSafeComponentProps {
    children: ReactElement<{ className?: string }>;
    tailSafeProps?: Partial<TailSafe>;
}

export const TailSafeComponent: React.FC<TailSafeComponentProps> = ({
    children,
    tailSafeProps = {}
}) => {
    if (!isValidElement(children)) {
        throw new Error('TailSafeComponent expects a single React element as children');
    }

    const { className: originalClassName, ...originalProps } = children.props as { className?: string;[key: string]: any };
    const mergedProps = { ...originalProps, ...tailSafeProps };

    const { className } = useTailSafeMiddleware(mergedProps);

    return cloneElement(children, {
        ...originalProps,
        className
    });
}; 