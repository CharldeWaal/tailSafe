// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// Function to find the template file in different possible locations
function findTemplatePath() {
    const possiblePaths = [
        // Development scenario (when working on the package itself)
        path.resolve(__dirname, '../config/tailSafe.config.template.ts'),
        // Published package scenario (when installed as dependency)
        path.resolve(__dirname, '../../src/config/tailSafe.config.template.ts'),
        // Alternative published package scenario
        path.resolve(__dirname, '../../../src/config/tailSafe.config.template.ts')
    ];
    
    for (const templatePath of possiblePaths) {
        if (fs.existsSync(templatePath)) {
            return templatePath;
        }
    }
    
    // eslint-disable-next-line no-console
    console.error('❌ Could not find tailSafe.config.template.ts');
    return null;
}

// Function to determine the user's project root
function getUserProjectRoot() {
    // INIT_CWD is set by npm/yarn and represents the directory where the install command was run
    const initCwd = process.env.INIT_CWD;
    const cwd = process.cwd();
    
    // If INIT_CWD is available and different from current directory, use it
    if (initCwd && initCwd !== cwd) {
        return initCwd;
    }
    
    // Fallback: look for package.json to find project root
    let currentDir = cwd;
    while (currentDir !== path.dirname(currentDir)) {
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            // Check if this is the tailsafe package itself (to avoid self-installation)
            try {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                if (packageJson.name !== 'tailsafe') {
                    return currentDir;
                }
            } catch (error) {
                // If we can't read package.json, continue searching
            }
        }
        currentDir = path.dirname(currentDir);
    }
    
    // Final fallback
    return initCwd || cwd;
}

// Find the template file
const templatePath = findTemplatePath();

if (!templatePath) {
    process.exit(1);
}

// The destination for the config file in the user's project root
const userProjectRoot = getUserProjectRoot();
const destPath = path.resolve(userProjectRoot, 'tailSafe.config.ts');

// Debug info (only shown if not in the tailsafe package itself)
const currentPackageJson = path.join(process.cwd(), 'package.json');
let isInTailSafePackage = false;
try {
    if (fs.existsSync(currentPackageJson)) {
        const pkg = JSON.parse(fs.readFileSync(currentPackageJson, 'utf8'));
        isInTailSafePackage = pkg.name === 'tailsafe';
    }
} catch (error) {
    // Ignore error
}

if (!isInTailSafePackage) {
    // eslint-disable-next-line no-console
    console.log(`📁 TailSafe detected user project root: ${userProjectRoot}`);
}

// Only create the file if it doesn't already exist
if (!fs.existsSync(destPath)) {
    try {
        fs.copyFileSync(templatePath, destPath);
        // eslint-disable-next-line no-console
        console.log('✅ Created tailSafe.config.ts in your project root.');
        // eslint-disable-next-line no-console
        console.log('   You can now customize your TailSafe configuration!');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ Failed to create tailSafe.config.ts:', error.message);
        process.exit(1);
    }
} else {
    if (!isInTailSafePackage) {
        // eslint-disable-next-line no-console
        console.log('ℹ️  tailSafe.config.ts already exists, skipping creation.');
    }
}