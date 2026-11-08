import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const prerender = true;

function handoutBody(body: string | undefined, id: string) {
	if (!body) {
		throw new Error(`Resource ${id} is missing markdown body.`);
	}
	return body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").trim();
}

export async function getStaticPaths() {
	const resources = await getCollection("resources");
	return resources.map((resource) => {
		const body = handoutBody(resource.body, resource.id);
		const markdown = `# ${resource.data.title}\n\n${resource.data.description}\n\n${body}\n\n---\n\nAkai Milson · https://www.akaimilson.com · Classroom use welcome with attribution.\n`;
		return {
			params: { slug: resource.id },
			props: { markdown, filename: `${resource.id}.md` },
		};
	});
}

export const GET: APIRoute = ({ props }) => {
	const { markdown, filename } = props as { markdown: string; filename: string };
	return new Response(markdown, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Content-Disposition": `attachment; filename="${filename}"`,
		},
	});
};
