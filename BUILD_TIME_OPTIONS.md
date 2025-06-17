# Build-Time Injection Options for TailSafe

## Popular NPM Package Approaches

### 1. **Babel Plugin** ⭐⭐⭐⭐⭐ (Most Common)
**Used by**: styled-components, emotion, tailwindcss

**Setup**:
```javascript
// babel.config.js
module.exports = {
  plugins: [
    ['@your-package/tailsafe/babel', {
      defaultProps: {
        afterTransitionProperty: 'transition-opacity'
      }
    }]
  ]
};
```

**Usage** (Zero component changes):
```tsx
// This gets automatically transformed at build time
<div afterTransitionProperty="transition-[width]">
  Content
</div>

// Becomes:
<div className="relative inline-block after:content-[''] after:absolute after:bottom-[-0.5px] after:left-0 after:h-[0.5px] after:bg-gray-900 after:transition-[width] after:duration-300 after:w-0 hover:after:w-full">
  Content
</div>
```

**Pros**: ✅ Zero runtime overhead, ✅ No component changes, ✅ Industry standard
**Cons**: ❌ Requires Babel setup

---

### 2. **SWC Plugin** ⭐⭐⭐⭐ (Next.js Native)
**Used by**: Next.js 12+, Vite

**Setup**:
```javascript
// next.config.js
const { tailSafeSwcPlugin } = require('@your-package/tailsafe/swc');

module.exports = {
  experimental: {
    swcPlugins: [
      tailSafeSwcPlugin({
        defaultProps: { afterTransitionProperty: 'transition-opacity' }
      })
    ]
  }
};
```

**Usage**: Same as Babel plugin - zero component changes

**Pros**: ✅ Faster than Babel, ✅ Native Next.js support, ✅ Zero runtime overhead
**Cons**: ❌ Less ecosystem support than Babel

---

### 3. **PostCSS Plugin** ⭐⭐⭐ (CSS-based)
**Used by**: CSS Modules, styled-components

**Setup**:
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@your-package/tailsafe/postcss')({
      defaultProps: { afterTransitionProperty: 'transition-opacity' }
    })
  ]
};
```

**Usage**:
```css
.my-component {
  tail-safe: afterTransitionProperty: transition-opacity, afterTransitionDuration: duration-300;
}
```

**Pros**: ✅ Works with any build system, ✅ CSS-based approach
**Cons**: ❌ Requires CSS syntax, ❌ Less intuitive than JSX props

---

### 4. **Provider Pattern** ⭐⭐⭐⭐ (Runtime, but minimal)
**Used by**: React Context, Theme providers

**Setup**:
```tsx
// _app.tsx
import { TailSafeProvider } from '@your-package/tailsafe';

function App({ Component, pageProps }) {
  return (
    <TailSafeProvider defaultProps={{ afterTransitionProperty: 'transition-opacity' }}>
      <Component {...pageProps} />
    </TailSafeProvider>
  );
}
```

**Usage**:
```tsx
// Components automatically get TailSafe styling
<div afterTransitionProperty="transition-[width]">
  Content
</div>
```

**Pros**: ✅ No build config, ✅ Easy to understand, ✅ Works everywhere
**Cons**: ❌ Small runtime overhead, ❌ Requires provider wrapper

---

## **Recommendation: Babel Plugin**

**Why Babel Plugin is the best choice:**

1. **Industry Standard**: Used by the most popular CSS-in-JS libraries
2. **Zero Runtime Overhead**: Everything happens at build time
3. **Zero Component Changes**: Developers write natural JSX
4. **Best Developer Experience**: TypeScript support, autocomplete
5. **Wide Ecosystem Support**: Works with any build system

**Implementation Priority:**
1. **Babel Plugin** (Primary)
2. **Provider Pattern** (Fallback for non-Babel setups)
3. **SWC Plugin** (Next.js specific)
4. **PostCSS Plugin** (CSS-based alternative)

**Package Structure:**
```
@your-package/tailsafe/
├── babel/          # Babel plugin (primary)
├── swc/           # SWC plugin (Next.js)
├── postcss/       # PostCSS plugin (CSS)
├── runtime/       # Runtime hooks (fallback)
├── provider/      # React provider (fallback)
└── types/         # TypeScript types
```

This gives developers maximum flexibility while maintaining the best performance and developer experience. 