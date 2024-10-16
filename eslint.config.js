export default [
  {
    files: ["**/*.js"],  // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: 12,  // Still supports ES2021
      sourceType: 'script',  // Set to 'script' for CommonJS
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",  // Turn off no-undef rule for CommonJS
    },
  },
];
