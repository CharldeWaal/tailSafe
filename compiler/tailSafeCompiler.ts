import { TailSafe } from '../types';
import { construct } from '../utils/tailSafe.utils';

export interface CompilerOptions {
    autoApply?: boolean;
    defaultProps?: Partial<TailSafe>;
    includePatterns?: string[];
    excludePatterns?: string[];
    mode?: 'development' | 'production';
}

export interface BuildToolConfig {
    framework?: 'webpack' | 'vite' | 'next' | 'rollup';
    outputPath?: string;
    sourceMap?: boolean;
}

export class TailSafeCompiler {
    private options: CompilerOptions;
    private buildConfig: BuildToolConfig;

    constructor(options: CompilerOptions = {}, buildConfig: BuildToolConfig = {}) {
        this.options = {
            autoApply: true,
            defaultProps: {},
            includePatterns: ['**/*.{tsx,jsx}'],
            excludePatterns: ['**/node_modules/**'],
            mode: 'development',
            ...options
        };

        this.buildConfig = {
            framework: 'webpack',
            outputPath: './dist',
            sourceMap: true,
            ...buildConfig
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

    /**
     * Webpack plugin for build-time compilation
     */
    createWebpackPlugin() {
        const compiler = this;
        return {
            name: 'tail-safe-webpack-plugin',
            apply(webpackCompiler: any) {
                webpackCompiler.hooks.compilation.tap('TailSafeWebpackPlugin', (compilation: any) => {
                    compilation.hooks.optimizeChunkModules.tap('TailSafeWebpackPlugin', (chunks: any, modules: any) => {
                        modules.forEach((module: any) => {
                            if (module.resource && module.resource.includes('.tsx')) {
                                compiler.processModule(module);
                            }
                        });
                    });
                });
            }
        };
    }

    /**
     * Vite plugin for build-time compilation
     */
    createVitePlugin() {
        const compiler = this;
        return {
            name: 'tail-safe-vite-plugin',
            transform(code: string, id: string): { code: string; map: null } | null {
                if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
                    return compiler.transformCode(code, id);
                }
                return null;
            }
        };
    }

    /**
     * Next.js plugin for build-time compilation
     */
    createNextPlugin() {
        const compiler = this;
        return {
            name: 'tail-safe-next-plugin',
            webpack: (config: any, { isServer }: any) => {
                config.plugins.push(compiler.createWebpackPlugin());
                return config;
            }
        };
    }

    private processModule(module: any) {
        // Implementation for processing webpack modules
        console.log('Processing module:', module.resource);
    }

    private transformCode(code: string, id: string): { code: string; map: null } {
        // Implementation for transforming code
        console.log('Transforming code:', id);
        return { code, map: null };
    }
} 