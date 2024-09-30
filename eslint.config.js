/** @typedef {import("typescript-eslint").Config} Config */

import baseConfig from "@acdh-oeaw/eslint-config";
import astroConfig from "@acdh-oeaw/eslint-config-astro";
import reactConfig from "@acdh-oeaw/eslint-config-react";
import tailwindcssConfig from "@acdh-oeaw/eslint-config-tailwindcss";
import gitignore from "eslint-config-flat-gitignore";

const reactFiles = [
	"keystatic.config.@(ts|tsx)",
	"**/content/**/*.@(ts|tsx)",
	"**/keystatic/**/*.@(ts|tsx)",
];

/** @type {Config} */
const config = [
	gitignore({ strict: false }),
	...baseConfig,
	...astroConfig,
	...reactConfig.map((config) => {
		return {
			...config,
			files: reactFiles,
		};
	}),
	...tailwindcssConfig,
	{
		rules: {
			"arrow-body-style": ["error", "always"],
			"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
			// "@typescript-eslint/explicit-module-boundary-types": "error",
			// "@typescript-eslint/require-array-sort-compare": "error",
			// "@typescript-eslint/strict-boolean-expressions": "error",
		},
	},
	{
		files: reactFiles,
		rules: {
			"react/jsx-sort-props": ["error", { reservedFirst: true }],
		},
	},
];

export default config;
