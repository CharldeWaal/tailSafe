import { TailSafe } from '../types';
import { construct } from '../utils/underline.utils';

interface SwcPluginOptions {
    defaultProps?: Partial<TailSafe>;
    includePatterns?: string[];
    excludePatterns?: string[];
}

// Next.js SWC Plugin format
export function tailSafeSwcPlugin(options: SwcPluginOptions = {}) {
    const {
        defaultProps = {},
        includePatterns = ['**/*.{tsx,jsx}'],
        excludePatterns = ['**/node_modules/**']
    } = options;

    return () => {
        return {
            name: 'tail-safe-swc-plugin',
            // Next.js SWC plugin format
            transform: (source: string, id: string) => {
                // Only process .tsx and .jsx files
                if (!id.endsWith('.tsx') && !id.endsWith('.jsx')) {
                    return null;
                }

                // Check if file should be excluded
                if (excludePatterns.some(pattern => id.includes(pattern))) {
                    return null;
                }

                // Transform the source code
                const transformed = transformSource(source, defaultProps);

                return {
                    code: transformed,
                    map: null
                };
            }
        };
    };
}

// Default export for Next.js SWC plugin
export default function (options: SwcPluginOptions = {}) {
    return tailSafeSwcPlugin(options)();
}

function transformSource(source: string, defaultProps: Partial<TailSafe>): string {
    // More robust JSX transformation that handles multi-line attributes
    const jsxElementRegex = /<(\w+)([^>]*?)>/g;
    let transformed = source;
    let match;

    // Reset regex state
    jsxElementRegex.lastIndex = 0;

    while ((match = jsxElementRegex.exec(source)) !== null) {
        const [fullMatch, tagName, attributes] = match;

        // Skip if attributes is undefined
        if (!attributes) {
            continue;
        }

        const tailSafeProps = extractTailSafeProps(attributes);

        if (Object.keys(tailSafeProps).length === 0) {
            continue; // No TailSafe props, skip
        }

        // Compile TailSafe props to className
        const mergedProps = { ...defaultProps, ...tailSafeProps };
        const tailSafeClassName = construct(mergedProps as TailSafe);

        // Remove TailSafe props and add/update className
        const cleanedAttributes = removeTailSafeProps(attributes);
        const updatedAttributes = addOrUpdateClassName(cleanedAttributes, tailSafeClassName);

        const replacement = `<${tagName}${updatedAttributes}>`;
        transformed = transformed.replace(fullMatch, replacement);
    }

    return transformed;
}

function extractTailSafeProps(attributes: string): Record<string, string> {
    const tailSafeProps: Record<string, string> = {};
    const tailSafePropNames = [
        'afterTransitionProperty',
        'afterTransitionDuration',
        'afterPosition',
        'afterBottom',
        'afterLeft',
        'afterHeight',
        'afterWidth',
        'afterOpacity',
        'position',
        'display',
        'align',
        'justify',
        'height'
    ];

    tailSafePropNames.forEach(propName => {
        // Handle both single and double quotes, and multi-line attributes
        const regex = new RegExp(`${propName}=["']([^"']*)["']`, 'g');
        const match = regex.exec(attributes);
        if (match && match[1]) {
            tailSafeProps[propName] = match[1];
        }
    });

    return tailSafeProps;
}

function removeTailSafeProps(attributes: string): string {
    const tailSafePropNames = [
        'afterTransitionProperty',
        'afterTransitionDuration',
        'afterPosition',
        'afterBottom',
        'afterLeft',
        'afterHeight',
        'afterWidth',
        'afterOpacity',
        'position',
        'display',
        'align',
        'justify',
        'height'
    ];

    let cleaned = attributes;
    tailSafePropNames.forEach(propName => {
        // Remove the prop and any surrounding whitespace
        const regex = new RegExp(`\\s*${propName}=["'][^"']*["']\\s*`, 'g');
        cleaned = cleaned.replace(regex, ' ');
    });

    // Clean up extra spaces
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned;
}

function addOrUpdateClassName(attributes: string, newClassName: string): string {
    const classNameRegex = /className=["']([^"']*)["']/;
    const match = classNameRegex.exec(attributes);

    if (match) {
        // Update existing className
        const existingClassName = match[1];
        const mergedClassName = [existingClassName, newClassName]
            .filter(Boolean)
            .join(' ');

        return attributes.replace(classNameRegex, `className="${mergedClassName}"`);
    } else {
        // Add new className with proper spacing
        const hasAttributes = attributes.trim().length > 0;
        const space = hasAttributes ? ' ' : '';
        return `${attributes}${space}className="${newClassName}"`;
    }
} 