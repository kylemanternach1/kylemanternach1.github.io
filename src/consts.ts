// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Kyle Manternach';
export const SITE_DESCRIPTION = 'Portfolio, work, projects, and writing.';

/** Prefix a root-relative path with the GitHub Pages base. */
export function withBase(path: string) {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\//, '')}`;
}
