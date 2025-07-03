import { ReactNode } from "react";
import { TailSafe, UserAliases } from "./tailSafe.types";

export interface TailSafeProviderProps {
    children: ReactNode;
    userAliases?: UserAliases;
    debug?: boolean;
}

export interface TailSafeContextState {
    debug: Required<boolean>;
    userAliases?: UserAliases;
    transformProps: <T extends { className?: string }>(props: T & Partial<TailSafe>) => { domProps: Partial<T>, className: string };
}