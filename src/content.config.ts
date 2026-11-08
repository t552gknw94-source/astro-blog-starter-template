import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string(),
	}),
});

const resources = defineCollection({
	loader: glob({ base: "./src/content/resources", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		categoryId: z.enum(["ap-seminar", "english", "web-literacy", "ai-tech"]),
		order: z.number(),
		audience: z.string(),
		useLabel: z.string(),
		updated: z.coerce.date(),
	}),
});

export const collections = { blog, resources };
