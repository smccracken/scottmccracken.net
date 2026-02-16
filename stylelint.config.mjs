/** @type {import('stylelint').Config} */

const config = {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  ignoreFiles: ["dist/**/*", "node_modules/**/*"],
  rules: {
    "custom-property-pattern": null,
    "font-family-no-missing-generic-family-keyword": true,
    "keyframes-name-pattern": null,
    "property-no-unknown": true,
    "property-no-vendor-prefix": null,
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": null,
  },
};

export default config;
