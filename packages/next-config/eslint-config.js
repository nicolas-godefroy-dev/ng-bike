'use strict';

module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  plugins: ['unused-imports', 'jsx-expressions', '@tanstack/query'],
  overrides: [
    // Javascript rules
    {
      files: ['*.js?(x)'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
    },
    // Typescript rules
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'next/core-web-vitals',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      plugins: [
        'unused-imports',
        'jsx-expressions',
        '@tanstack/query',
        '@typescript-eslint/eslint-plugin',
      ],
      rules: {
        'jsx-expressions/strict-logical-expressions': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              // See https://github.com/typescript-eslint/typescript-eslint/issues/2063
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSEnumDeclaration',
            message: "Prefer union types (e.g. type Foo = 'bar' | 'baz') to TypeScript enums",
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'typeLike', format: ['PascalCase'] },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'method',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'accessor',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
    // Jest rules
    {
      files: ['**/*.test.ts?(x)'],
      parser: '@typescript-eslint/parser',
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/all',
        'plugin:testing-library/react',
        'prettier',
      ],
      plugins: ['unused-imports', 'jsx-expressions', '@typescript-eslint/eslint-plugin'],
    },
    // Storybook rules
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: [
        'plugin:storybook/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      plugins: ['unused-imports', 'jsx-expressions', '@typescript-eslint/eslint-plugin'],
    },
  ],
  rules: {
    // Generic rules
    'unused-imports/no-unused-imports': 'error',
    'import/no-cycle': 'error',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'object'],
        pathGroups: [
          {
            group: 'object',
            pattern: '*.@(jpg|png|svg)',
            patternOptions: { matchBase: true },
          },
          {
            group: 'external',
            pattern: '@ng-bike/**',
          },
          {
            group: 'internal',
            pattern: '@/**',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-console': 'error',
    'no-else-return': 'error',
    'no-nested-ternary': 'error',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'block-scoped-var': 'error',
    'guard-for-in': 'error',
    'no-constructor-return': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    radix: 'error',
    complexity: 'warn',
  },
};
