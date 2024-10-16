
const eslintConfig = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Your custom rules can be added here
    },
  },
  // Include ESLint recommended configuration directly
  {
    extends: 'eslint:recommended',
  },
];

export default eslintConfig;
