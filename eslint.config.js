import airbnbBase from "eslint-config-airbnb-base";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
        es6: true, 
      },
    },
    rules: {
      ...airbnbBase.rules,
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
    ],
  },
];
