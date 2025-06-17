// Grid Utilities

// Grid Template Columns
export type GridCols = 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4' | 'grid-cols-5' | 'grid-cols-6' | 'grid-cols-7' | 'grid-cols-8' | 'grid-cols-9' | 'grid-cols-10' | 'grid-cols-11' | 'grid-cols-12' | 'grid-cols-none';

// Grid Template Rows
export type GridRows = 'grid-rows-1' | 'grid-rows-2' | 'grid-rows-3' | 'grid-rows-4' | 'grid-rows-5' | 'grid-rows-6' | 'grid-rows-none';

// Grid Auto Columns
export type AutoCols = 'auto-cols-auto' | 'auto-cols-min' | 'auto-cols-max' | 'auto-cols-fr';

// Grid Auto Rows
export type AutoRows = 'auto-rows-auto' | 'auto-rows-min' | 'auto-rows-max' | 'auto-rows-fr' | 'auto-rows-[290px]' | 'auto-rows-[240px]' | 'auto-rows-[120px]';

// Grid Column Span
export type ColumnSpan = 'col-span-1' | 'col-span-2' | 'col-span-3' | 'col-span-4' | 'col-span-5' | 'col-span-6' | 'col-span-7' | 'col-span-8' | 'col-span-9' | 'col-span-10' | 'col-span-11' | 'col-span-12' | 'col-span-auto' | 'col-span-full';

// Grid Row Span
export type RowSpan = 'row-span-1' | 'row-span-2' | 'row-span-3' | 'row-span-4' | 'row-span-5' | 'row-span-6' | 'row-span-7' | 'row-span-8' | 'row-span-9' | 'row-span-10' | 'row-span-11' | 'row-span-12' | 'row-span-auto' | 'row-span-full';

// Grid Column Start/End
export type ColStart = 'col-start-1' | 'col-start-2' | 'col-start-3' | 'col-start-4' | 'col-start-5' | 'col-start-6' | 'col-start-7' | 'col-start-8' | 'col-start-9' | 'col-start-10' | 'col-start-11' | 'col-start-12' | 'col-start-13' | 'col-start-auto';
export type ColEnd = 'col-end-1' | 'col-end-2' | 'col-end-3' | 'col-end-4' | 'col-end-5' | 'col-end-6' | 'col-end-7' | 'col-end-8' | 'col-end-9' | 'col-end-10' | 'col-end-11' | 'col-end-12' | 'col-end-13' | 'col-end-auto';

// Grid Row Start/End
export type RowStart = 'row-start-1' | 'row-start-2' | 'row-start-3' | 'row-start-4' | 'row-start-5' | 'row-start-6' | 'row-start-7' | 'row-start-auto';
export type RowEnd = 'row-end-1' | 'row-end-2' | 'row-end-3' | 'row-end-4' | 'row-end-5' | 'row-end-6' | 'row-end-7' | 'row-end-auto';

// Grid Flow
export type GridFlow = 'grid-flow-row' | 'grid-flow-col' | 'grid-flow-dense' | 'grid-flow-row-dense' | 'grid-flow-col-dense';

// Grid Gap
export type Gap = 'gap-0' | 'gap-1' | 'gap-2' | 'gap-3' | 'gap-4' | 'gap-5' | 'gap-6' | 'gap-7' | 'gap-8' | 'gap-9' | 'gap-10' | 'gap-11' | 'gap-12' | 'gap-14' | 'gap-16' | 'gap-20' | 'gap-24' | 'gap-28' | 'gap-32' | 'gap-36' | 'gap-40' | 'gap-44' | 'gap-48' | 'gap-52' | 'gap-56' | 'gap-60' | 'gap-64' | 'gap-72' | 'gap-80' | 'gap-96' | 'gap-px' | 'gap-0.5' | 'gap-1.5' | 'gap-2.5' | 'gap-3.5' | 'gap-[1.875rem]';

// Grid Column Gap
export type ColGap = 'col-gap-0' | 'col-gap-1' | 'col-gap-2' | 'col-gap-3' | 'col-gap-4' | 'col-gap-5' | 'col-gap-6' | 'col-gap-7' | 'col-gap-8' | 'col-gap-9' | 'col-gap-10' | 'col-gap-11' | 'col-gap-12' | 'col-gap-14' | 'col-gap-16' | 'col-gap-20' | 'col-gap-24' | 'col-gap-28' | 'col-gap-32' | 'col-gap-36' | 'col-gap-40' | 'col-gap-44' | 'col-gap-48' | 'col-gap-52' | 'col-gap-56' | 'col-gap-60' | 'col-gap-64' | 'col-gap-72' | 'col-gap-80' | 'col-gap-96' | 'col-gap-px' | 'col-gap-0.5' | 'col-gap-1.5' | 'col-gap-2.5' | 'col-gap-3.5';

// Grid Row Gap
export type RowGap = 'row-gap-0' | 'row-gap-1' | 'row-gap-2' | 'row-gap-3' | 'row-gap-4' | 'row-gap-5' | 'row-gap-6' | 'row-gap-7' | 'row-gap-8' | 'row-gap-9' | 'row-gap-10' | 'row-gap-11' | 'row-gap-12' | 'row-gap-14' | 'row-gap-16' | 'row-gap-20' | 'row-gap-24' | 'row-gap-28' | 'row-gap-32' | 'row-gap-36' | 'row-gap-40' | 'row-gap-44' | 'row-gap-48' | 'row-gap-52' | 'row-gap-56' | 'row-gap-60' | 'row-gap-64' | 'row-gap-72' | 'row-gap-80' | 'row-gap-96' | 'row-gap-px' | 'row-gap-0.5' | 'row-gap-1.5' | 'row-gap-2.5' | 'row-gap-3.5';

// Grid Auto Flow
export type AutoFlow = 'auto-flow-row' | 'auto-flow-col' | 'auto-flow-dense' | 'auto-flow-row-dense' | 'auto-flow-col-dense';

// Grid Place Items
export type PlaceItems = 'place-items-auto' | 'place-items-start' | 'place-items-end' | 'place-items-center' | 'place-items-stretch';

// Grid Place Content
export type PlaceContent = 'place-content-center' | 'place-content-start' | 'place-content-end' | 'place-content-between' | 'place-content-around' | 'place-content-evenly' | 'place-content-baseline' | 'place-content-stretch';

// Grid Place Self
export type PlaceSelf = 'place-self-auto' | 'place-self-start' | 'place-self-end' | 'place-self-center' | 'place-self-stretch';
