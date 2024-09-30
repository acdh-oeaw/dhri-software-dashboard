import { createUrl } from "@acdh-oeaw/lib";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { defaultLocale } from "@/config/i18n.config";
import { createI18n } from "@/lib/i18n";
import { createCollectionResource } from "@/lib/keystatic/resources";
import { withBasePath } from "@/lib/with-base-path";

export async function GET(context: APIContext) {
	const locale = defaultLocale;
	const { t } = await createI18n(locale);

	const metadata = t("metadata");

	const software = await createCollectionResource("software", locale).all();

	return rss({
		title: metadata.title,
		description: metadata.description,
		site: context.site!,
		/** @see https://docs.astro.build/en/guides/rss/#generating-items */
		items: software.map((item) => {
			return {
				title: item.data.title,
				description: item.data.summary,
				pubDate: new Date(item.data.publicationDate),
				link: String(
					createUrl({
						baseUrl: import.meta.env.SITE,
						pathname: withBasePath(`/${item.id}`),
					}),
				),
			};
		}),
		customData: `<language>${locale}</language>`,
	});
}
