import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">TailSafe SWC Plugin Test</h1>

        {/* Test 1: Basic TailSafe props */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test 1: Basic Layout Props</h2>
          <div
            position="relative"
            display="flex"
            align="items-center"
            justify="justify-center"
            height="h-32"
            className="bg-blue-500 text-white rounded-lg"
          >
            This div should have TailSafe classes applied
          </div>
        </div>

        {/* Test 2: After pseudo-element */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test 2: After Pseudo-element</h2>
          <div
            position="relative"
            display="inline-block"
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
            afterPosition="absolute"
            afterBottom="bottom-[-2px]"
            afterLeft="left-0"
            afterHeight="h-[2px]"
            afterWidth="w-0"
            afterTransitionProperty="transition-[width]"
            afterTransitionDuration="duration-300"
            afterOpacity="bg-blue-600"
          >
            Hover over this text to see the underline effect
          </div>
        </div>

        {/* Test 3: Complex layout */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test 3: Complex Layout</h2>
          <div
            position="relative"
            display="flex"
            align="items-center"
            justify="justify-between"
            height="h-16"
            className="bg-gray-100 p-4 rounded-lg"
          >
            <span>Left content</span>
            <span>Right content</span>
          </div>
        </div>

        {/* Test 4: Button with TailSafe */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test 4: Button Component</h2>
          <button
            display="inline-flex"
            align="items-center"
            justify="justify-center"
            height="h-10"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Click me
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">How to verify the plugin is working:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Open browser dev tools</li>
            <li>Inspect the elements above</li>
            <li>Check that the className attributes contain TailSafe-generated classes</li>
            <li>The TailSafe props (position, display, align, etc.) should be transformed into className values</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
