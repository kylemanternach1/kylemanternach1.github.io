# personal-website

Personal site for experience and blog posts, built with [Astro](https://astro.build).

## Quick start

```sh
npm install
npm run dev
```

Site runs at [http://localhost:4321](http://localhost:4321).

The live site is [https://kylemanternach1.github.io/](https://kylemanternach1.github.io/). Pushes to `main` deploy it with GitHub Pages.

## Where to edit

| What | Where |
| --- | --- |
| Name, intro, jobs, projects | `src/data/site.ts` |
| Homepage layout | `src/pages/index.astro` |
| Blog posts | `src/content/blog/*.md` |
| Site name / description | `src/consts.ts` |
| Navigation | `src/components/SiteNav.astro` |
| Portfolio styles | `src/styles/portfolio.css` |

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
