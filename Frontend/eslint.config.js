// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
// Runs Prettier as an ESLint rule, so `ng lint` reports formatting issues and `ng lint --fix`
// formats the code - no separate prettier command needed.
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  {
    // index.html is a plain HTML document, not an Angular template - the template parser
    // used for **/*.html below chokes on its doctype.
    ignores: ["dist/**", ".angular/**", "node_modules/**", "src/index.html"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
      prettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
      prettierRecommended,
    ],
    rules: {},
  },
]);
