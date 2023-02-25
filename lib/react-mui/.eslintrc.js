const isLocal = process.env.NODE_ENV;

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    extraFileExtensions: [".json"],
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "typescript-sort-keys",
    "import",
    "react-hooks",
    "jsx-a11y",
  ],
  rules: {
    // import
    "import/newline-after-import": ["error"],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-duplicate-imports": "error",
    // react
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unused-prop-types": "off",
    "react/self-closing-comp": "error",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-boolean-value": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-wrap-multilines": [
      "off",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/jsx-key": "error",
    "react/no-array-index-key": "off",
    // typescript
    "@typescript-eslint/no-explicit-any": isLocal ? "warn" : "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/ban-types": ["error"],
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/comma-dangle": [
      "off",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
      },
    ],
    "@typescript-eslint/comma-spacing": [
      "off",
      {
        before: false,
        after: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/quotes": [
      0,
      "single",
      {
        avoidEscape: true,
      },
    ],
    "typescript-sort-keys/string-enum": [
      "warn",
      "asc",
      { caseSensitive: true },
    ],
    // file
    "no-console": isLocal ? "warn" : "error",
    "no-debugger": isLocal ? "warn" : "error",
    "no-restricted-exports": "off",
    "no-var": "error",
    "no-nested-ternary": "warn",
    "no-unneeded-ternary": "warn",
    "no-empty-pattern": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "object-shorthand": "error",
    "prefer-destructuring": "warn",
    camelcase: "warn",
    "max-lines": ["warn", { skipComments: true, skipBlankLines: true }],
    "max-params": ["error", 3],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "object-curly-newline": [
      "off",
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    "object-curly-spacing": ["off", "always"],
    "object-property-newline": [
      "off",
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],
    "operator-linebreak": ["off"],
    "implicit-arrow-linebreak": ["off", "beside"],

    // jsx-a11y
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",

    // comma
    "comma-dangle": [
      "off",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "comma-spacing": [
      "off",
      {
        before: false,
        after: true,
      },
    ],
  },
  settings: {
    "import/resolver": "node",
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
};
