module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-prettier"
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "at-rule-no-vendor-prefix": null,
    "max-nesting-depth": [
      8,
      {
        ignore: ["blockless-at-rules"],
        ignoreAtRules: ["/^include$/", "/^if$/", "/^each$/"]
      }
    ],
    "selector-class-pattern": "",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "export"]
      }
    ],
    "scss/selector-no-redundant-nesting-selector": null,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "no-descending-specificity": null,
    "length-zero-no-unit": null,
    "at-rule-no-unknown": null,
    "color-hex-length": null,
    "no-duplicate-selectors": null,
    "selector-pseudo-element-colon-notation": null,
    "media-feature-colon-space-after": null,
    "font-family-no-missing-generic-family-keyword": null,
    "custom-property-empty-line-before": null,
    "comment-empty-line-before": null,
    "block-no-empty": null,
    "declaration-block-no-duplicate-properties": null,
    "declaration-empty-line-before": null,
    "unit-no-unknown": null,
    "comment-whitespace-inside": null,
    "declaration-bang-space-before": null,
    "scss/at-extend-no-missing-placeholder": null,
    "at-rule-semicolon-space-before": null
  },
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss"
    }
  ],
  ignoreFiles: ["**/*.js"]
};
