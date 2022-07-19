module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            // https://prettier.io/docs/en/options.html
            {
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                printWidth: 120,
                tabWidth: 4,
                semi: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
