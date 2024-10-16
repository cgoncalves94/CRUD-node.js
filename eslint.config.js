export default [
  {
    files: ["**/*.js"],  // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: 12,  // Equivalent to ES2021
      sourceType: 'module',
      globals: {
        browser: true,  // Example of global variables
      },
    },
    rules: {
      // ESLint's recommended rules
      "no-unused-vars": "warn",  // Example custom rule
      "no-undef": "error",
    },
  },
];
