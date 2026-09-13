import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const nextRules = {
  ...nextPlugin.configs.recommended.rules,
  ...nextPlugin.configs["core-web-vitals"].rules,
};

export default tseslint.config(
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "standardize_padding.js", "**/._*", "**/.DS_Store", "server.js", "test-all-verticals.js"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      next: nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: { version: "19" },
      next: { rootDir: "." },
    },
    rules: {
      ...Object.fromEntries(
        Object.entries(nextRules).map(([key, value]) => [
          key.replace(/^@next\/next\//, "next/"),
          value,
        ])
      ),
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "next/no-html-link-for-pages": "off",
      "react-hooks/purity": "off",
      "react/react-in-jsx-scope": "off",
    },
  }
);