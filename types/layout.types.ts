import { Polarity } from "./util.types";

export type Display =
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'flow-root'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'hidden'
    | 'sr-only';

export type Position =
    | 'static'
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'sticky';

export type Top =
    | '';

export type Bottom =
    | `bottom-[-0.5px]`
    | 'bottom-[-1px]';

export type Left =
    | 'left-0';

export type Right =
    | 'right-0';

export type PlacementTop = `${Polarity}${Top}`;
export type PlacementBottom = Bottom;
export type PlacementLeft = `${Polarity}${Left}`;

export interface Layout {
    display?: Display;
    position?: Position;
    top?: Top;
    bottom?: Bottom;
    left?: Left;
    right?: Right;
}