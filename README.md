# Senior Full-Stack Engineer Portfolio (React)

This repository contains a React + Vite portfolio website ready for GitHub Pages deployment.

## Local development


```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` and wait for the **Deploy Portfolio** workflow to finish.
5. Your site will be available at:
   - `https://<username>.github.io/` (if repo is `<username>.github.io`)
   - or `https://<username>.github.io/<repo-name>/` (for project repos)

## Customize content

Edit these files:

- `src/App.jsx` for profile text, links, projects, and experience
- `src/index.css` for colors, layout, and style
- `index.html` for title and SEO description

## Notes for project repos (optional)

If this is not your `<username>.github.io` root repo, add a `base` value in `vite.config.js`:

```js
export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()],
});
```
