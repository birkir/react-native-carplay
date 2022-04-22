module.exports = {
  root: true,
  extends: [
    '../../.eslintrc.base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  // By loading testing-library as a plugin, we can only enable it
  // on test files via overrides.
  // plugins: ['testing-library', 'storybook'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
