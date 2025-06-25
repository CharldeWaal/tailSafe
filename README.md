# TailSafe 🦈

TailSafe is a TypeScript-first library that provides type-safe, aliased Tailwind CSS for React applications. It bridges the gap between design systems and Tailwind by allowing developers to create reusable, semantic component props.

### ✨ What it does:

1. Type-Safe Tailwind: Converts custom semantic props into Tailwind classes with full TypeScript support
2. Design System Aliases: Define reusable aliases for common Tailwind class combinations
3. Auto-Generated Types: Automatically generates TypeScript interfaces from your Tailwind config
4. Provider System: Centralized configuration management for your entire app
5. Multiple Integration Patterns: HOC-based, and pre-built HTML elements

## Installation

```bash
yarn add tailsafe
# Auto-creates tailSafe.config.ts in your project root
```

or

```bash
npm install tailsafe
# Auto-creates tailSafe.config.ts in your project root
```

## Configuration

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

### 2. Define Aliases (in tailSafe.config.ts)

```tsx
const tailSafeConfig: TailSafeConfig = {
  aliases: {
    // Semantic design aliases
    "btn-primary": [
      "bg-blue-500",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "hover:bg-blue-600",
    ],
    card: ["bg-white", "rounded-lg", "shadow-md", "p-6"],
    center: ["flex", "items-center", "justify-center"],

    // Complex layouts made simple
    "hero-section": [
      "min-h-screen",
      "bg-gradient-to-r",
      "from-blue-600",
      "to-purple-600",
      "flex",
      "items-center",
    ],
  },
};
```

🛠 CLI Integration:

After adding custom aliases, run the following commmand to register your alias prop types

```bash
npx tailsafe # Generates client side provider and type definitions
```

### 🎯 Two Ways to Use TailSafe:

## Method 1: Pre-built HTML Elements

Best for: Quick prototyping and common HTML elements

```tsx
import { Button, Div, Input, Form } from "tailsafe";

function LoginForm() {
  return (
    <Form card center>
      <Input
        type="email"
        placeholder="Email"
        input-field // Your custom alias
        className="mb-4"
      />
      <Input
        type="password"
        placeholder="Password"
        input-field
        className="mb-4"
      />
      <Button btn-primary type="submit">
        Login
      </Button>
    </Form>
  );
}
```

Available Elements: All intrinsic HTML elements come with built-in TailSafe support!

## Method 2: Higher-Order Component (withTailSafe)

Best for: Wrapping existing components or third-party libraries

```tsx
import { withTailSafe } from "tailsafe";
import { MyExistingButton } from "./components";

// Enhance any existing component
const TailSafeButton = withTailSafe(MyExistingButton);

function MyComponent() {
  return (
    <TailSafeButton btn-primary center onClick={handleClick}>
      Enhanced Button
    </TailSafeButton>
  );
}

// Works with third-party components too
import { Button as ChakraButton } from "@chakra-ui/react";
const TailSafeChakraButton = withTailSafe(ChakraButton);
```

### 🎯 Key Benefits:

- 🔒 Type Safety: Full TypeScript support for all your aliases
- ♻️ Reusability: Define once, use everywhere
- 🎨 Design Consistency: Enforce design system patterns
- ⚡ Developer Experience: IntelliSense for your custom design tokens
- 🔧 Build-Time Generation: No runtime overhead, everything is pre-compiled
- 🧩 Flexible Integration: Choose the pattern that works best for your use case
- 📦 Pre-built Components: Ready-to-use HTML elements with TailSafe support

### 🚀 Use Cases:

- Design Systems: Standardize component styling across teams
- Rapid Prototyping: Use pre-built elements with semantic props
- Legacy Integration: Enhance existing components with withTailSafe
- Type-Safe Styling: Catch styling errors at compile time
- Team Collaboration: Share design tokens through TypeScript interfaces
- Perfect for: Teams wanting to bridge design systems with Tailwind CSS while maintaining type safety, flexibility, and developer productivity across different integration patterns.

## Compatibility

- **Next.js**: 13+ (App Router) and 12+ (Pages Router)
- **React**: 18+
- **TypeScript**: 4.5+
- **Tailwind CSS**: 3.0+

## License

- MIT
