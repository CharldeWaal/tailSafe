### SWC Plugin (Next.js)

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

**Usage** (Zero component changes):
```tsx
// This gets automatically transformed at build time
<div afterTransitionProperty="transition-[width]">
  Content
</div>

// Becomes:
<div className="after:transition-[width]">
  Content
</div>
```