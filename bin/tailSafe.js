#!/usr/bin/env node
// The line above is the "shebang". It tells the system to execute this file with Node.js.

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// eslint-disable-next-line no-console
console.log('⏳ Generating tailSafe files...');

try {
    // Define the paths to your codegen scripts *relative to this file*.
    const codegenDir = path.resolve(__dirname, '../src/codegen');

    // Run the user alias script and generate module augmentation
    execSync(`node ${path.join(codegenDir, 'codegen.module.js')}`, { stdio: 'inherit' });
    // Add any other scripts here...

    // eslint-disable-next-line no-console
    console.log('🦈 tailSafe: All files have been generated successfully!');
    // eslint-disable-next-line no-console
    console.log('💡 You can now import: import { ProviderWrapper } from "tailsafe";');

} catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ tailSafe: An error occurred during post-install code generation.');
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
}