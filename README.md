# TailSafe 🦈

Core Idea: To provide a type-safe and ergonomic way of using Tailwind CSS in React, replacing className strings with component props

"A clever way to get type-safe Tailwind props"

TailSafe is a React provider and hook system that transforms custom "TailSafe" props into valid Tailwind CSS classes at runtime, making it easier to use Tailwind in a type-safe, prop-driven way.

"🎉 Using custom props to generate class names and then filtering them out before reaching the DOM—is a powerful way to get type-safe, expressive, and scalable styling in React."

Lets users write expressive, type-safe custom props (e.g., flex-row, bg-primary, etc.).
Transforms those props into Tailwind class names at runtime (or potentially compile-time).
Filters out non-standard props so only valid HTML attributes reach the DOM.
Uses codegen to keep types, runtime logic, and prop lists in sync.

1. Install: npm install tailsafe
2. Configure: Create tailSafe.config.js with custom aliases
3. Use: Write clean JSX with custom props
4. Enjoy: Runtime alias support with perfect DX!

✅ Maintains Consistency: All user aliases flow through the same TailSafe context, ensuring uniform behavior across your entire app
⚡ Runtime Flexibility: Users can define aliases in their config and they work immediately - no package rebuilds needed for an npm package
🔥 Beautiful DX: Developers get the clean syntax they want:

```tsx
<Div card center />
```

🛡️ DOM Safety: Custom props are automatically filtered out, preventing React warnings

## Installation

```bash
yarn add tailSafe
```

## Quick Start

### 1. Wrap your Next.js app with TailSafeProvider

In your `app/layout.tsx` (Next.js 13+ App Router):

```tsx
import { TailSafeProvider } from "tailSafe";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TailSafeProvider>{children}</TailSafeProvider>
      </body>
    </html>
  );
}
```

For Next.js Pages Router, wrap in `_app.tsx`:

```tsx
import { TailSafeProvider } from "tailSafe";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TailSafeProvider>
      <Component {...pageProps} />
    </TailSafeProvider>
  );
}
```

### 2. Use TailSafe props in your components

```tsx
import { useTailSafe } from "tailSafe";

export const MyComponent = () => {
  const { transformProps } = useTailSafe();

  const buttonProps = transformProps({
    afterTransitionProperty: "transition-[width]",
    afterTransitionDuration: "duration-500",
    className: "text-blue-600 px-4 py-2 border border-blue-600 rounded",
  });

  return <button {...buttonProps}>Hover me for animated underline</button>;
};
```

## Configuration Options

### Provider Configuration

```tsx
<TailSafeProvider
  defaultProps={{
    afterPosition: "absolute",
    afterBottom: "bottom-[-1px]",
    afterLeft: "left-0",
    afterHeight: "h-[0.5px]",
    afterWidth: "w-0",
  }}
  config={{
    debug: true, // Enable debug logging
    autoApply: true, // Enable automatic prop transformation
  }}
>
  {children}
</TailSafeProvider>
```

### Available Props

TailSafe supports the following prop categories:

#### After Pseudo-element Props

- `afterContent` - Content for the after pseudo-element
- `afterPosition` - Position of the after pseudo-element
- `afterBottom` - Bottom positioning
- `afterLeft` - Left positioning
- `afterHeight` - Height of the after pseudo-element
- `afterWidth` - Width of the after pseudo-element
- `afterTransitionProperty` - Transition property
- `afterTransitionDuration` - Transition duration
- `afterOpacity` - Opacity of the after pseudo-element

#### Layout Props

- `position` - CSS position
- `display` - CSS display property
- `align` - Alignment properties
- `justify` - Justification properties

#### Sizing Props

- `height` - Element height
- `width` - Element width

#### Transition Props

- `transitionProperty` - Transition property
- `transitionDuration` - Transition duration

#### Effects Props

- `opacity` - Element opacity

## Examples

### Animated Underline on Hover

```tsx
const AnimatedButton = () => {
  const { transformProps } = useTailSafe();

  const buttonProps = transformProps({
    afterTransitionProperty: "transition-[width]",
    afterTransitionDuration: "duration-500",
    className: "text-blue-600 px-4 py-2 border border-blue-600 rounded",
  });

  return <button {...buttonProps}>Hover me</button>;
};
```

This transforms to:

```html
<button
  class="text-blue-600 px-4 py-2 border border-blue-600 rounded relative inline-block after:absolute after:bottom-[-0.5px] after:left-0 after:h-[0.5px] after:bg-gray-900 after:transition-[width] after:duration-500 after:w-0 hover:after:w-full"
>
  Hover me
</button>
```

### Custom After Element

```tsx
const CustomAfterElement = () => {
  const { transformProps } = useTailSafe();

  const divProps = transformProps({
    afterPosition: "absolute",
    afterBottom: "bottom-[-2px]",
    afterHeight: "h-[2px]",
    afterWidth: "w-0",
    afterTransitionProperty: "transition-[width]",
    afterTransitionDuration: "duration-300",
    className: "text-green-600 cursor-pointer",
  });

  return <div {...divProps}>Custom underline effect</div>;
};
```

## API Reference

### TailSafeProvider

The main provider component that enables TailSafe functionality.

#### Props

- `children: ReactNode` - The app content to wrap
- `defaultProps?: Partial<TailSafe>` - Default TailSafe properties to apply to all components
- `config?: { autoApply?: boolean; debug?: boolean }` - Configuration options

### useTailSafe

Hook for accessing TailSafe functionality in components.

#### Returns

- `transformProps: <T>(props: T & Partial<TailSafe>) => T & { className: string }` - Function to transform props

## Compatibility

- **Next.js**: 13+ (App Router) and 12+ (Pages Router)
- **React**: 18+
- **TypeScript**: 4.5+
- **Tailwind CSS**: 3.0+

## Development

This package is designed to work with the latest version of Next.js and Turbopack. It provides a runtime solution that doesn't require build-time plugins, making it compatible with modern Next.js features.

## License

MIT
