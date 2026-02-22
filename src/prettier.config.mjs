import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  tabWidth: 2,
  useTabs: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript"
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)", "^./(.*)"],
  plugins: [""]
};

export default config;