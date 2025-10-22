import pluginNext from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'

export default [
    {
        name: 'Next Core',
        plugins: { '@next/next': pluginNext },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        },
    },
    {
        name: 'TypeScript typed rules',
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                allowDefaultProject: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: { '@typescript-eslint': tseslint.plugin },
        rules: {
            '@typescript-eslint/no-deprecated': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        name: 'Global Ignore',
        ignores: [
            'node_modules/',
            '.next/',
            'out/',
            'dist/',
            'coverage/',
            '.turbo/',
            'next-env.d.ts',
        ],
    },
    {
        name: 'Config files',
        files: [
            'eslint.config.mjs',
            'next.config.mjs',
            'postcss.config.mjs',
            '**/*.config.{js,mjs,cjs,ts,mts,cts}',
        ],
        rules: {
            '@typescript-eslint/no-deprecated': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
]
