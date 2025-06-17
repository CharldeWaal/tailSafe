export type Width =
    | 'w-0'
    | 'w-full'
    | 'w-screen'

export type Height =
    | 'h-full'
    | 'h-screen'
    | 'h-0.5'
    | 'h-[0.5px]';

export interface Sizing {
    height?: Height;
    width?: Width;
}