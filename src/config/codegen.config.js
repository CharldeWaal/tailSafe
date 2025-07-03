// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const generatedDir = path.resolve(__dirname, '../generated');
const configDir = path.resolve(__dirname, '../config');

module.exports = {
    paths: {
        generated: {
            outputCss: path.join(configDir, 'output.css'),
            types: path.join(generatedDir, 'generatedTailwindTypes.d.ts'),
            colors: path.join(generatedDir, 'generatedTailwindColors.d.ts'),
            groups: path.join(generatedDir, 'generatedTailwindGroups.d.ts'),
            map: path.join(generatedDir, 'generatedTailSafeMap.js'),
            allProps: path.join(generatedDir, 'generatedAllProps.ts'),
            tailSafeInterface: path.join(generatedDir, 'generatedTailSafeInterface.ts')
        },
        config: {
            tailwind: path.join(configDir, 'tailSafe.tailwind.config.js'),
            tailSafe: path.join(configDir, 'tailSafe.config.js'),
            inputCss: path.join(configDir, 'input.css'),
        },
    },
    // You could even centralize utility functions here if you prefer
};