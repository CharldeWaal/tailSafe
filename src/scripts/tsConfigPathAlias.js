// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

function updateTsConfig() {
    const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json');
    if (!fs.existsSync(tsconfigPath)) {
        // eslint-disable-next-line no-console
        console.warn('⚠️ Could not find tsconfig.json to update paths.');
        return;
    }

    try {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

        // Ensure compilerOptions and paths exist
        tsconfig.compilerOptions = tsconfig.compilerOptions || {};
        tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};

        // Define our new alias
        const alias = 'tailsafe/provider';
        const aliasPath = ['./.tailSafe/ProviderWrapper']; // Path relative to project root

        // Add the alias
        tsconfig.compilerOptions.paths[alias] = aliasPath;

        // Write the updated config back
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
        // eslint-disable-next-line no-console
        console.log(`✅ Updated tsconfig.json with alias for '${alias}'.`);
        // eslint-disable-next-line no-console
        console.log("💡 You may need to restart your editor's TypeScript server for changes to apply.");

    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ Failed to update tsconfig.json:', error);
    }
}

// Run this function after generating the ProviderWrapper.tsx file
updateTsConfig();