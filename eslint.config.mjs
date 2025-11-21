import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // 👇 Add this override to disable the img rule
  {
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
