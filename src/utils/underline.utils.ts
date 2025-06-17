import { TailSafe } from "../types";

export const construct = ({
    className,
    position,
    display,
    align,
    justify,
    height,
    afterPosition,
    afterBottom,
    afterLeft,
    afterHeight,
    afterWidth,
    afterTransitionProperty,
    afterTransitionDuration,
    afterOpacity
}: TailSafe): string => {
    return `
    ${className ? className : ''} 
    ${position ? position : 'relative'} 
    ${display ? display : 'inline-block'} 
    ${align ? align : ''} 
    ${justify ? justify : ''} 
    ${height ? height : ''} 
    ${afterPosition ? `after:${afterPosition}` : 'after:absolute'} 
    ${afterBottom ? `after:${afterBottom}` : 'after:bottom-[-0.5px]'} 
    ${afterLeft ? `after:${afterLeft}` : 'after:left-0'} 
    ${afterHeight ? `after:${afterHeight}` : 'after:h-[0.5px]'} 
    after:bg-gray-900 
    ${afterTransitionProperty ? `after:${afterTransitionProperty}` : 'after:transition-opacity'} 
    ${afterTransitionDuration ? `after:${afterTransitionDuration}` : 'after:duration-300'} 
    ${afterWidth ? `after:${afterWidth}` : ''} 
    ${afterOpacity ? `after:${afterOpacity}` : ''} 
    hover:after:w-full 
    ${afterOpacity ? 'hover:after:opacity-100' : ''}`;
}; 