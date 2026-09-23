# personal-website

Personal site for experience and blog posts, built with [Astro](https://astro.build).

## Quick start

```sh
npm install
npm run dev
```

Site runs at [http://localhost:4321](http://localhost:4321).

## Where to edit

| What | Where |
| --- | --- |
| Home, About, Experience | `src/pages/` |
| Blog posts | `src/content/blog/*.md` |
| Site name / description | `src/consts.ts` |
| Nav & footer | `src/components/` |
| Global styles | `src/styles/global.css` |

## New blog post

1. Add a Markdown file under `src/content/blog/`
2. Include `title`, `description`, and `pubDate` in the frontmatter
3. Write the body in Markdown
4. Run `npm run dev` to preview

See `src/content/blog/how-to-write-a-post.md` for a full example.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |
