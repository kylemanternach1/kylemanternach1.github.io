---
title: 'How to write a blog post'
description: 'A quick guide to adding posts on this site.'
pubDate: 'Sep 22 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

New posts are just Markdown files in `src/content/blog/`.

## 1. Create a file

Add something like `src/content/blog/my-new-post.md`. The filename becomes part of the URL
(`/blog/my-new-post/`).

## 2. Add frontmatter

Every post needs a small header at the top:

```md
---
title: 'My new post'
description: 'One-line summary for listings and SEO.'
pubDate: 'Sep 22 2026'
# optional:
# updatedDate: 'Sep 23 2026'
# heroImage: '../../assets/blog-placeholder-1.jpg'
---
```

## 3. Write in Markdown

Use headings, lists, links, images, and code blocks as usual. MDX also works if you want
components inside a post.

## 4. Preview locally

```sh
npm run dev
```

Open the blog index, click your post, and edit until it looks right. When you're happy,
commit and push — that's the whole publishing flow if you deploy from this repo.
