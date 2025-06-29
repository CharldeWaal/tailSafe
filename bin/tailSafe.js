#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// eslint-disable-next-line no-console
console.log('⏳ Generating tailsafe alias types...');

try {
    const codegenDir = path.resolve(__dirname, '../src/codegen');

    // Run the user alias script and generate module augmentation
    execSync(`node ${path.join(codegenDir, 'codegen.module.js')}`, { stdio: 'inherit' });

    // eslint-disable-next-line no-console
    console.log('🦈 tailsafe: All aliases have been generated successfully!');

} catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ tailSafe: An error occurred during post-install code generation.');
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
}