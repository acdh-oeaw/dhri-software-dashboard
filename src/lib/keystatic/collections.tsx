/* @jsxImportSource react */

import { createCollection } from "@acdh-oeaw/keystatic-lib";
import { collection, fields } from "@keystatic/core";

export const createSoftware = createCollection("/software/", (paths) => {
	return collection({
		label: "Software",
		path: paths.contentPath,
		format: { contentField: "content" },
		slugField: "title",
		columns: ["title"],
		entryLayout: "form",
		schema: {
			title: fields.slug({
				name: {
					label: "Title",
					description: "Project title",
					validation: { isRequired: true },
				},
			}),
			publicationDate: fields.date({
				label: "Publication date",
				validation: { isRequired: true },
				defaultValue: { kind: "today" },
			}),
			repo: fields.text({
				label: "Repo",
				description: "Code repository",
				validation: { isRequired: true },
			}),
			summary: fields.text({
				label: "Summary",
				description: "Short description",
				validation: { isRequired: true },
				multiline: true,
			}),
			url: fields.url({
				label: "URL",
				description: "Project website",
				validation: { isRequired: false },
			}),
			demo: fields.url({
				label: "Demo",
				description: "Demo website",
				validation: { isRequired: false },
			}),
			content: fields.mdx({
				label: "Content",
				description: "Project description",
			}),
		},
	});
});
