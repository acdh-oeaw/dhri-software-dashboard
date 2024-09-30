/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Anchor from "@/components/link.astro";

const components = {
	a: Anchor,
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
