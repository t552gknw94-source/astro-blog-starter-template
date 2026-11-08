# Akai Milson

Personal site for Akai Milson, 11th Grade English and AP Seminar teacher at Olympia High School. The site is built with [Astro](https://astro.build/) and can be deployed on Cloudflare Workers.

Public site: [https://www.akaimilson.com](https://www.akaimilson.com)

## Develop

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Build and preview locally |
| `npm run deploy` | Deploy the production build with Wrangler |

## Portrait

Add a photograph at `public/akai-portrait.jpg`. The framed portrait on the home and about pages uses that file when it is present and shows an editorial monogram illustration when it is not. Rebuild after adding or replacing the photo.

## Content

- Pages live in `src/pages/`.
- Essays live in `src/content/blog/`.
- Classroom handouts live in `src/content/resources/` and are linked from `/resources`. Downloadable Markdown copies are generated at `/downloads/[slug].md`.
