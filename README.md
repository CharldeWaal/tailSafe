# TailSafe 🦈

Tailsafe provides an ergonomic way of using Tailwind CSS in React, replacing className strings with component props

🔥 Beautiful DX: Developers get the clean syntax they want:

```tsx
<Div flex-center />
```

🛡️ DOM Safety: Custom props are automatically filtered out, preventing React warnings

## Installation

```bash
yarn add tailsafe
```

or

```bash
npm install tailsafe
```

## Quick Start

### 1. Wrap your Next.js or React app with TailSafeProvider

In your `app/layout.tsx` (Next.js 13+ App Router):

```tsx
import { TailSafeProvider } from "tailsafe";

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

## Compatibility

- **Next.js**: 13+ (App Router) and 12+ (Pages Router)
- **React**: 18+
- **TypeScript**: 4.5+
- **Tailwind CSS**: 3.0+

## License

- MIT
