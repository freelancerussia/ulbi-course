import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        plugins: {
            react: pluginReact,
            'react-hooks': reactHooks
        },
    },
    {
        ignores: ['node_modules', 'build', 'storybook-static', '.cache', 'scripts'],
    },
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: true,
                    argsIgnorePattern: '^_', // Игнорировать аргументы с префиксом "_"
                },
            ],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'i18next/no-literal-string': ['warn'],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error'
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    i18next.configs['flat/recommended'],
    // pluginReact.configs.flat.recommended,
];
