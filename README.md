# TailSafe 🦈

Tailsafe provides an ergonomic way of using Tailwind CSS in React, replacing className strings with component props

🔥 Beautiful DX: Developers get the clean syntax they want:

```tsx
<Div flex-center />
```

## Installation

```bash
yarn add tailsafe
```

or

```bash
npm install tailsafe
```

## Setup

Add the following to your tsconfig.json paths aliases

```ts
    "paths": {
      "tailsafe/provider": [
        "./.tailSafe/ProviderWrapper.tsx"
      ]
    }
```

## Quick Start

### 1. Wrap your App with TailSafeProvider (Next.js 13+ App Router Example)

In your `app/layout.tsx` :

```tsx
import { TailSafeProvider } from "tailsafe/provider";

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

### 2. Add custom aliases

```tsx
    aliases: {
        // Example alias
        flex-row: ['flex', 'flex-row', 'items-center', 'justify-center', 'bg-red-500'],
    },
```

Run the following commmand to register your alias prop types

```bash
npx tailsafe
```

### 3. Import and use TailSafe components in your code

```tsx
import { Div } from "tailsafe";

<Div flex-center />;
```

## Compatibility

- **Next.js**: 13+ (App Router) and 12+ (Pages Router)
- **React**: 18+
- **TypeScript**: 4.5+
- **Tailwind CSS**: 3.0+

## License

- MIT
