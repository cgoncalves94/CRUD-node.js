
// eslint.config.js (Flat Config)
import eslintRecommended from 'eslint/conf/eslint-recommended'; // Importing the ESLint recommended rules

export default [
  eslintRecommended,  // Directly including the recommended config object
  {
    languageOptions: {
      ecmaVersion: 'latest', // Set ECMAScript version
      sourceType: 'module',  // Use 'module' for ES Modules
      globals: {
        browser: true,       // Define global variables
        es2021: true,
      },
    },
    rules: {
      // Add your custom rules here
    },
  },
];
