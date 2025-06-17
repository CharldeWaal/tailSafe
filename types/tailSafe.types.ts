import { After } from "./after.types";
import { Effects } from "./effects.types";
import { Flex } from "./flex.types";
import { Layout } from "./layout.types";
import { Sizing } from "./sizing.types";
import { Transition } from "./transition.types";

export interface TailSafe extends Layout, Sizing, Flex, After, Transition, Effects {
    className?: string;
}

export interface UseTailSafeProps {
    props: Partial<TailSafe>;
}

export interface UseTailSafeReturn {
    className: string | undefined;
}