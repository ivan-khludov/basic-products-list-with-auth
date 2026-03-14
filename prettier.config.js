/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/app/(.*)$",
    "^@/pages/(.*)$",
    "^@/features/(.*)$",
    "^@/shared/(.*)$",
    "^@/styles/(.*)$",
    "",
    "^[./](?!.*\\.css$).*",
    "",
    "\\.css$",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
  importOrderSafeSideEffects: ["\\.css$"],
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
  ],
};

export default config;
