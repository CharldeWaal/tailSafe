export type TransitionProperty =
    | 'transition'
    | 'transition-all'
    | 'transition-colors'
    | 'transition-opacity'
    | 'transition-shadow'
    | 'transition-transform'
    | 'transition-none'
    | `transition-[${string}]`;

export type TransitionDuration =
    | 'duration-300'

export interface Transition {
    transitionProperty?: TransitionProperty;
    transitionDuration?: TransitionDuration;
}