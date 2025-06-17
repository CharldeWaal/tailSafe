import { Opacity } from "./effects.types";
import { PlacementBottom, PlacementLeft, Position } from "./layout.types";
import { Height, Width } from "./sizing.types";
import { TransitionDuration, TransitionProperty } from "./transition.types";

type AfterEmptyContent = "after:content-['']";

export interface After {
    afterContent?: AfterEmptyContent;
    afterPosition?: Extract<Position, 'absolute'>;
    afterBottom?: PlacementBottom;
    afterLeft?: PlacementLeft;
    afterHeight?: Height;
    afterWidth?: Width;
    afterTransitionProperty?: TransitionProperty;
    afterTransitionDuration?: TransitionDuration;
    afterOpacity?: Opacity;
}