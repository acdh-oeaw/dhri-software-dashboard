import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
/* import typography from "tailwindcss/typography"; */

const config: Config = {
	content: [
		"./src/components/**/*.@(astro|css|ts|tsx)",
		"./src/content/**/*.@(md|mdoc|mdx)",
		"./src/layouts/**/*.@(astro|css|ts|tsx)",
		"./src/pages/**/*.@(astro|css|ts|tsx)",
	],
	plugins: [],
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
