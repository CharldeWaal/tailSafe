import { TailSafe } from '../types';
import { construct } from '../utils/underline.utils';

interface BabelPluginOptions {
    defaultProps?: Partial<TailSafe>;
    includePatterns?: string[];
    excludePatterns?: string[];
}

// Simplified Babel plugin that doesn't require @babel/core dependency
export function tailSafeBabelPlugin(options: BabelPluginOptions = {}) {
    const {
        defaultProps = {},
        includePatterns = ['**/*.{tsx,jsx}'],
        excludePatterns = ['**/node_modules/**']
    } = options;

    return {
        name: 'tail-safe-babel-plugin',
        visitor: {
            JSXElement(path: any) {
                const openingElement = path.node.openingElement;
                const attributes = openingElement.attributes;

                // Check if element has TailSafe props
                const tailSafeProps: any = {};
                let hasTailSafeProps = false;
                let classNameAttr: any = null;

                attributes.forEach((attr: any) => {
                    if (attr.type === 'JSXAttribute') {
                        const name = attr.name.name;

                        // Check if it's a TailSafe prop
                        if (isTailSafeProp(name)) {
                            hasTailSafeProps = true;
                            tailSafeProps[name] = getAttributeValue(attr.value);
                        }

                        // Find existing className
                        if (name === 'className') {
                            classNameAttr = attr;
                        }
                    }
                });

                if (hasTailSafeProps) {
                    // Compile TailSafe props to className
                    const mergedProps = { ...defaultProps, ...tailSafeProps };
                    const tailSafeClassName = construct(mergedProps as TailSafe);

                    // Remove TailSafe props from JSX
                    openingElement.attributes = attributes.filter((attr: any) => {
                        if (attr.type === 'JSXAttribute') {
                            return !isTailSafeProp(attr.name.name);
                        }
                        return true;
                    });

                    // Update or add className
                    if (classNameAttr) {
                        // Merge with existing className
                        const existingValue = getAttributeValue(classNameAttr.value);
                        const mergedClassName = [existingValue, tailSafeClassName]
                            .filter(Boolean)
                            .join(' ');

                        classNameAttr.value = {
                            type: 'StringLiteral',
                            value: mergedClassName
                        };
                    } else {
                        // Add new className attribute
                        openingElement.attributes.push({
                            type: 'JSXAttribute',
                            name: {
                                type: 'JSXIdentifier',
                                name: 'className'
                            },
                            value: {
                                type: 'StringLiteral',
                                value: tailSafeClassName
                            }
                        });
                    }
                }
            }
        }
    };
}

function isTailSafeProp(name: string): boolean {
    const tailSafeProps = [
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
    return tailSafeProps.includes(name);
}

function getAttributeValue(value: any): string {
    if (value.type === 'StringLiteral') {
        return value.value;
    }
    if (value.type === 'JSXExpressionContainer') {
        if (value.expression.type === 'StringLiteral') {
            return value.expression.value;
        }
    }
    return '';
} 