import { Display } from "./layout.types";

export type JustifyContent =
    | 'justify-start'
    | 'justify-end'
    | 'justify-end-safe'
    | 'justify-center'
    | 'justify-center-safe'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'
    | 'justify-stretch'
    | 'justify-baseline'
    | 'justify-normal';

export type AlignItems =
    | 'items-start'
    | 'items-end'
    | 'items-end-safe'
    | 'items-center'
    | 'items-center-safe'
    | 'items-baseline'
    | 'items-baseline-last'
    | 'items-stretch';

export type FlexDirection =
    | 'flex-col'
    | 'flex-row';

export interface Flex {
    align?: AlignItems;
    justify?: JustifyContent;
    flexDirection?: FlexDirection;
}