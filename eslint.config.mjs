import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add rules you want to disable here
      // For example:
      // "react-hooks/exhaustive-deps": "off",
      // "@typescript-eslint/no-explicit-any": "off",
      // "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;
