# TailSafe 🦈

TailSafe is a TypeScript-first library that provides type-safe, aliased Tailwind CSS for React applications. It bridges the gap between design systems and Tailwind by offering both _individual type-safe Tailwind class props and custom semantic aliases_, with multiple integration patterns and full TypeScript intellisense.

### ✨ What it does:

1. 🔒 Type-Safe Individual Tailwind Props: Auto-generates TypeScript interfaces for every Tailwind class as component props
2. 🎨 Design System Aliases: Define reusable aliases for common Tailwind class combinations
3. ⚡ Auto-Generated Types: Automatically generates TypeScript interfaces from your Tailwind config via codegen
4. 🎯 Provider System: Centralized configuration management for your entire app
5. 🧩 Multiple Integration Patterns: HOC-based and pre-built HTML elements

## Installation

```bash
yarn add tailsafe # or npm install tailsafe
# Auto-creates tailSafe.config.ts in your project root

npx tailsafe  # Generates client side provider component (NextJS) and user custom alias types
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

_In your `app/layout.tsx`:_

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

### 2. Type-Safe Individual Tailwind Classes

_Use any Tailwind class as a typed prop with full intellisense_

```tsx
import { Button, Div } from "tailsafe";

function MyComponent() {
  return (
    <Div
      bg="bg-blue-500" // Type-safe background prop
      p="p-4" // Type-safe padding prop
      rounded="rounded-lg" // Type-safe border radius prop
      shadow="shadow-md" // Type-safe shadow prop
      text="text-white" // Type-safe text color prop
      className="hover:scale-105" // Still works with regular className
    >
      <Button
        bg="bg-green-600"
        px="px-6"
        py="py-2"
        rounded="rounded"
        text="text-white"
        border="border-2"
        transition="transition-all"
      >
        Click me
      </Button>
    </Div>
  );
}
```

### 3. Define Custom Aliases (in tailSafe.config.ts)

```tsx
const tailSafeConfig: TailSafeConfig = {
  aliases: {
    // Semantic design aliases
    btn-primary: [
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
_After adding custom aliases, run the following commmand to register your alias prop types_

```bash
npx tailsafe # Generates type definitions
```

### 🎯 Two Ways to Use TailSafe:

### Method 1: Pre-built HTML Elements

_Best for: Quick prototyping and common HTML elements_

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

**Available Elements**: All intrinsic HTML elements come with built-in TailSafe support!

### Method 2: Higher-Order Component (withTailSafe)

_Best for: Wrapping existing components or third-party libraries_

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

- 🔒 Type Safety: TypeScript support for both individual Tailwind classes AND custom aliases
- ⚡ Incredible DX: IntelliSense for 1000+ Tailwind classes as component props
- ♻️ Ultimate Flexibility: Use individual classes, custom aliases, or mix both freely
- 🎨 Design System Ready: Create semantic aliases while keeping individual class access
- ⚡ Developer Experience: IntelliSense for your custom design tokens
- 🔧 Build-Time Generation: No runtime overhead, everything is pre-compiled
- 🧩 Multiple Integration Patterns: Choose the approach that fits your project
- 📦 Pre-built Components: 80+ HTML elements ready to use with TailSafe props
- 📈 Scalable: Works for small projects and large design systems

### 🚀 Use Cases:

- Type-Safe Styling: Catch Tailwind typos at compile time
- Design Systems: Combine semantic aliases with type-safe individual classes
- Rapid Prototyping: Use pre-built elements with full Tailwind class intellisense
- Legacy Integration: Enhance existing components with withTailSafe
- Type-Safe Styling: Catch styling errors at compile time
- Team Collaboration: Share design tokens AND maintain access to all Tailwind utilities
- Progressive Enhancement: Start with individual classes, gradually build aliases

**Perfect for:** Teams wanting the **best of both worlds** - the convenience and type safety of individual Tailwind class props **PLUS** the power of custom semantic aliases, all with full TypeScript support and multiple integration patterns.

## Compatibility

- **Next.js**: 13+ (App Router) and 12+ (Pages Router)
- **React**: 18+
- **TypeScript**: 4.5+
- **Tailwind CSS**: 3.0+

## License

- MIT
