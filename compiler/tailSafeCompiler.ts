import { TailSafe } from '../types';
import { construct } from '../utils/underline.utils';

export interface CompilerOptions {
    autoApply?: boolean;
    defaultProps?: Partial<TailSafe>;
    includePatterns?: string[];
    excludePatterns?: string[];
}

export class TailSafeCompiler {
    private options: CompilerOptions;

    constructor(options: CompilerOptions = {}) {
        this.options = {
            autoApply: true,
            defaultProps: {},
            includePatterns: ['**/*.{tsx,jsx}'],
            excludePatterns: ['**/node_modules/**'],
            ...options
        };
    }

    /**
     * Compiles TailSafe props into Tailwind classes
     */
    compile(props: Partial<TailSafe>): string {
        const mergedProps = { ...this.options.defaultProps, ...props };
        return construct(mergedProps as TailSafe);
    }

    /**
     * Processes a component's props and returns the compiled className
     */
    processComponentProps(props: any): { className: string;[key: string]: any } {
        const { className: originalClassName, ...tailSafeProps } = props;
        const compiledClassName = this.compile(tailSafeProps);

        const mergedClassName = [originalClassName, compiledClassName]
            .filter(Boolean)
            .join(' ');

        return {
            ...props,
            className: mergedClassName
        };
    }

    /**
     * Creates a middleware function for use in build tools
     */
    createMiddleware() {
        return (props: any) => this.processComponentProps(props);
    }
} 