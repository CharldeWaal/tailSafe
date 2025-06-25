// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// The source template file inside your package
const templatePath = path.resolve(__dirname, '../config/tailSafe.config.template.ts');

// The destination for the config file in the user's project root
// process.env.INIT_CWD is the reliable way to get the user's project directory
const destPath = path.resolve(process.env.INIT_CWD, 'tailSafe.config.ts');

// Only create the file if it doesn't already exist
if (!fs.existsSync(destPath)) {
    fs.copyFileSync(templatePath, destPath);
    // eslint-disable-next-line no-console
    console.log('✅ Created tailSafe.config.js in your project root.');
    // eslint-disable-next-line no-console
    console.log('   You can now customize your aliases!');
}