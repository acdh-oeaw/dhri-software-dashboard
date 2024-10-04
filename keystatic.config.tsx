/* @jsxImportSource react */

import { withI18nPrefix } from "@acdh-oeaw/keystatic-lib";
import { config } from "@keystatic/core";

import { env } from "@/config/env.config";
import { defaultLocale } from "@/config/i18n.config";
import { createSoftware } from "@/lib/keystatic/collections";
import { Logo } from "@/lib/keystatic/logo";
import { createIndexPage, createMetadata } from "@/lib/keystatic/singletons";

export default config({
	collections: {
		[withI18nPrefix("software", defaultLocale)]: createSoftware(defaultLocale),
	},
	singletons: {
		[withI18nPrefix("index-page", defaultLocale)]: createIndexPage(defaultLocale),
		[withI18nPrefix("metadata", defaultLocale)]: createMetadata(defaultLocale),
	},
	storage:
		env.PUBLIC_KEYSTATIC_MODE === "github" &&
		env.PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER &&
		env.PUBLIC_KEYSTATIC_GITHUB_REPO_NAME
			? {
					kind: "github",
					repo: {
						owner: env.PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER,
						name: env.PUBLIC_KEYSTATIC_GITHUB_REPO_NAME,
					},
					branchPrefix: "content/",
				}
			: {
					kind: "local",
				},
	ui: {
		brand: {
			mark() {
				return <Logo />;
			},
			name: "Website",
		},
		navigation: {
			HomePage: [withI18nPrefix("index-page", defaultLocale)],
			Software: [withI18nPrefix("software", defaultLocale)],
			Metadata: [withI18nPrefix("metadata", defaultLocale)],
		},
	},
});
