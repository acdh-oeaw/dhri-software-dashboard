import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./src/components/**/*.@(astro|css|ts|tsx)",
		"./src/content/**/*.@(md|mdoc|mdx)",
		"./src/layouts/**/*.@(astro|css|ts|tsx)",
		"./src/pages/**/*.@(astro|css|ts|tsx)",
	],
	plugins: [typography],
	theme: {
		extend: {
			borderWidth: {
				"5": "5px",
				"3": "3px",
			},
			colors: {
				neutral: colors.slate,
				brand: colors.sky,
			},
		},
	},
};

export default config;
