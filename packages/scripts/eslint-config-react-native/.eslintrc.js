module.exports = {
  extends: [
    'universe/native',
    '@react-native',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['unused-imports', 'react-native', 'jsx-expressions', '@tanstack/query'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
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
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'unused-imports/no-unused-imports': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.jsx'],
      excludedFiles: ['*.d.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react-native/no-unused-styles': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'jsx-expressions/strict-logical-expressions': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'warn',
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
        'block-scoped-var': 'error',
        complexity: 'warn',
        'guard-for-in': 'error',
        'no-constructor-return': 'error',
        'no-useless-concat': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        radix: 'error',
      },
    },
    {
      files: ['*.ts'],
      excludedFiles: ['*.d.ts'],
      rules: {
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
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
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
  ],
};
