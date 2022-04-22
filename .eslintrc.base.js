module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['**/node_modules', '**/dist', '**/build', '**/lib'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ".mjs"
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['sonarjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:regexp/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    context: 'readonly',
    cy: 'readonly',
    assert: 'readonly',
    Cypress: 'readonly',
  },
  rules: {
    'regexp/no-unused-capturing-group': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors'] },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'classProperty',
        format: ['camelCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: [
          'camelCase',
          // Some external libraries use snake_case for params
          'snake_case',
          // Env variables are generally uppercase
          'UPPER_CASE',
          'PascalCase'
        ],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['typeAlias', 'interface'],
        format: ['PascalCase'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['typeParameter'],
        format: ['PascalCase'],
      },
      {
        selector: ['enumMember'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      // For performance run sonarjs/recommended on regular code, not test files.
      files: ['**/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{spec,stories,res}.{js,jsx,ts,tsx}'],
      extends: ['plugin:sonarjs/recommended'],
      rules: {
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/cognitive-complexity': 'warn',
        'sonarjs/no-small-switch': 'warn',
        'sonarjs/no-identical-expressions': 'off',
        'sonarjs/no-identical-functions': 'warn',
        'sonarjs/no-duplicate-string': ["error", 5]
      },
    },
    {
      files: ['*.js', '*.mjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-all-duplicated-branches': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/order': 'off',
      },
    },
  ],
};
