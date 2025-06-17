# TailSafe 🦈

TypeScript-first utility for building Tailwind CSS classes with type safety and automatic compilation.

[![npm version](https://badge.fury.io/js/tailsafe.svg)](https://badge.fury.io/js/tailsafe)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Type Safety** - Full TypeScript support with autocomplete for all Tailwind classes
- 🎯 **React Hooks** - Easy-to-use hooks for component styling
- 🔧 **Build Plugins** - Babel and SWC plugins for build-time compilation
- 🎨 **Tailwind Integration** - Seamless Tailwind CSS compatibility
- 📦 **Provider Pattern** - Context-based styling with default props
- ⚡ **Performance Optimized** - Memoized class generation

## 🚀 Quick Start

### Installation

```bash
npm install tailsafe
# or
yarn add tailsafe
```

### Peer Dependencies

```bash
npm install react tailwindcss
# or
yarn add react tailwindcss
```

## 📚 Usage Examples

### 1. Using the Hook Pattern

```tsx
import { useTailSafe } from 'tailsafe';

function MyComponent() {
  const { className } = useTailSafe({
    position: 'relative',
    display: 'flex',
    align: 'items-center',
    justify: 'justify-center',
    height: 'h-12',
    className: 'bg-blue-500 text-white'
  });

  return <div className={className}>Styled Content</div>;
}
```

### 2. Using the Middleware Hook

```tsx
import { useTailSafeMiddleware } from 'tailsafe';

function Button({ children, ...props }) {
  const buttonProps = useTailSafeMiddleware({
    ...props,
    display: 'inline-flex',
    align: 'items-center',
    justify: 'justify-center',
    height: 'h-10',
    className: 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600'
  });

  return <button {...buttonProps}>{children}</button>;
}
```

### 3. Using the Provider Pattern

```tsx
import { TailSafeProvider, useTailSafeContext } from 'tailsafe';

function App() {
  return (
    <TailSafeProvider defaultProps={{ 
      display: 'flex',
      align: 'items-center'
    }}>
      <MyComponent />
    </TailSafeProvider>
  );
}

function MyComponent() {
  const { applyTailSafe } = useTailSafeContext();
  
  const buttonProps = applyTailSafe({
    justify: 'justify-center',
    height: 'h-10',
    className: 'bg-blue-500 text-white'
  });

  return <button {...buttonProps}>Click me</button>;
}
```

### 4. Build-time Compilation with Babel

```javascript
// babel.config.js
module.exports = {
  plugins: [
    ['tailsafe/babel', {
      defaultProps: {
        display: 'flex',
        align: 'items-center'
      }
    }]
  ]
};
```

### 5. Build-time Compilation with SWC

```javascript
// next.config.js
const { tailSafeSwcPlugin } = require('tailsafe/swc');

module.exports = {
  experimental: {
    swcPlugins: [
      tailSafeSwcPlugin({
        defaultProps: { 
          display: 'flex',
          align: 'items-center'
        }
      })
    ]
  }
};
```

## 🎯 Available Properties

TailSafe provides type-safe access to common Tailwind CSS properties:

### Layout Properties
- `position` - Position utilities (`relative`, `absolute`, `fixed`, etc.)
- `display` - Display utilities (`block`, `flex`, `grid`, `inline-block`, etc.)
- `top`, `bottom`, `left`, `right` - Positioning utilities

### Flex Properties
- `align` - Align items (`items-center`, `items-start`, `items-end`, etc.)
- `justify` - Justify content (`justify-center`, `justify-between`, `justify-start`, etc.)
- `flexDirection` - Flex direction (`flex-row`, `flex-col`, etc.)

### Sizing Properties
- `width` - Width utilities (`w-full`, `w-1/2`, `w-auto`, etc.)
- `height` - Height utilities (`h-full`, `h-screen`, `h-12`, etc.)
- `objectFit` - Object fit utilities (`object-cover`, `object-contain`, etc.)

### After Pseudo-element Properties
- `afterPosition` - After element position
- `afterBottom`, `afterLeft` - After element positioning
- `afterHeight`, `afterWidth` - After element sizing
- `afterTransitionProperty` - After element transition property
- `afterTransitionDuration` - After element transition duration
- `afterOpacity` - After element opacity

### Transition Properties
- `transitionProperty` - Transition property utilities
- `transitionDuration` - Transition duration utilities

### Effects Properties
- `opacity` - Opacity utilities

## 📦 Package Exports

```javascript
// Main exports
import { 
  useTailSafe, 
  useTailSafeMiddleware, 
  TailSafeProvider, 
  useTailSafeContext,
  configureTailSafe,
  useTailSafeRuntime 
} from 'tailsafe';

// Build plugins
import { tailSafeBabelPlugin } from 'tailsafe/babel';
import { tailSafeSwcPlugin } from 'tailsafe/swc';

// Types
import type { TailSafe } from 'tailsafe';
```

## 🔧 Configuration

### Runtime Configuration

```tsx
import { configureTailSafe } from 'tailsafe';

configureTailSafe({
  defaultProps: {
    display: 'flex',
    align: 'items-center'
  }
});
```

### Build Plugin Options

```javascript
{
  defaultProps: {
    display: 'flex',
    align: 'items-center',
    justify: 'justify-center'
  },
  includePatterns: ['**/*.{tsx,jsx}'],
  excludePatterns: ['**/node_modules/**']
}
```

## 🎨 Advanced Examples

### Custom Button Component

```tsx
import { useTailSafeMiddleware } from 'tailsafe';

function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseStyles = {
    display: 'inline-flex',
    align: 'items-center',
    justify: 'justify-center',
    className: 'font-medium rounded-lg transition-colors'
  };

  const variantStyles = {
    primary: { className: 'bg-blue-500 text-white hover:bg-blue-600' },
    secondary: { className: 'bg-gray-200 text-gray-900 hover:bg-gray-300' },
    outline: { className: 'border border-blue-500 text-blue-500 hover:bg-blue-50' }
  };

  const sizeStyles = {
    sm: { height: 'h-8', className: 'px-3 text-sm' },
    md: { height: 'h-10', className: 'px-4 text-base' },
    lg: { height: 'h-12', className: 'px-6 text-lg' }
  };

  const buttonProps = useTailSafeMiddleware({
    ...props,
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size]
  });

  return <button {...buttonProps}>{children}</button>;
}
```

### Animated Underline Effect

```tsx
import { useTailSafe } from 'tailsafe';

function AnimatedLink({ children, href }) {
  const { className } = useTailSafe({
    position: 'relative',
    display: 'inline-block',
    className: 'text-blue-600 hover:text-blue-800',
    afterPosition: 'absolute',
    afterBottom: 'bottom-[-2px]',
    afterLeft: 'left-0',
    afterHeight: 'h-[2px]',
    afterWidth: 'w-0',
    afterTransitionProperty: 'transition-[width]',
    afterTransitionDuration: 'duration-300',
    afterOpacity: 'bg-blue-600',
    className: 'hover:after:w-full'
  });

  return <a href={href} className={className}>{children}</a>;
}
```

## 🚀 Migration Guide

### From Manual Tailwind Classes

**Before:**
```tsx
<div className="relative flex items-center justify-center h-12 bg-blue-500 text-white">
  Content
</div>
```

**After:**
```tsx
import { useTailSafe } from 'tailsafe';

function MyComponent() {
  const { className } = useTailSafe({
    position: 'relative',
    display: 'flex',
    align: 'items-center',
    justify: 'justify-center',
    height: 'h-12',
    className: 'bg-blue-500 text-white'
  });

  return <div className={className}>Content</div>;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the simplicity of Tailwind CSS
- Built with TypeScript for better developer experience
- Compatible with React and modern build systems

---

Made with ❤️ by Charl de Waal
