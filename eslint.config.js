
const { defineConfig } = require('eslint');

module.exports = defineConfig({
  languageOptions: {
    globals: {
      // Define your global variables here
      browser: true,
      es2021: true,
    },
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Your custom rules can be added here
  },
});
