// @ts-check
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

const hasPortrait = existsSync(new URL("./public/akai-portrait.jpg", import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: "https://www.akaimilson.com",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	vite: {
		define: {
			__HAS_PORTRAIT__: JSON.stringify(hasPortrait),
		},
	},
});
