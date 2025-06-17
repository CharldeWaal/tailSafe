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
    | 'duration-75'
    | 'duration-100'
    | 'duration-150'
    | 'duration-200'
    | 'duration-300'
    | 'duration-500'
    | 'duration-700'
    | 'duration-1000'
    | `duration-[${string}]`;

export interface Transition {
    transitionProperty?: TransitionProperty;
    transitionDuration?: TransitionDuration;
}