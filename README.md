# The Gotham Times

Taha Zerrad's newspaper-inspired engineering portfolio, built with Next.js and a matching standalone HTML edition for GitHub Pages.

## Run locally

Install dependencies once with the repository's pnpm lockfile:

```sh
pnpm install
pnpm dev
```

If dependencies are already installed, run only `pnpm dev`. There is no need to reinstall them every time you open the project.

Open http://localhost:3000. If that port is already in use, Next.js selects another port; open the **Local** URL printed in the terminal. Keep that terminal running while previewing the site.

For a production build, run `pnpm build`, then `pnpm start`. Run `pnpm lint` to check the Next.js source.

On Windows PowerShell, use `pnpm.cmd dev` if script execution is disabled. With dependencies already installed, `npm.cmd run dev` is also supported; `npm.cmd run build` and `npm.cmd start` are the equivalent production commands.

Development and production use separate build folders (`.next-dev/` and `.next-production/`) so an editor preview can remain open during a production build.

## Static preview and GitHub Pages

```sh
pnpm sync:static
```

Open `index.html` in a browser, or serve this repository with your editor's static server. Keep `public/` beside `index.html` when publishing: paths are relative so the page also works beneath a GitHub Pages repository URL.

The existing GitHub Actions workflow publishes the repository's static files on pushes to `main`. Commit the regenerated `index.html` alongside source changes. `pnpm build` regenerates it automatically before building Next.js.

## Source files

- `app/page.tsx` is the shared content and markup source. Edit this file, then regenerate the static edition; avoid editing `index.html` directly.
- `style.css` contains the shared design. `app/globals.css` imports it for Next.js.
- `public/newspaper.js` contains browser interactions for both editions.
- `public/assets/` holds images and fonts. The page uses relative `public/assets/` paths; the Next.js configuration maps those paths to its public assets.
- `scripts/export-static.cjs` compiles the page in memory with the installed TypeScript compiler and renders it with React. It writes only `index.html`; CSS and assets remain shared.

The shared page is a synchronous server component. Keep browser behavior in `public/newspaper.js` so it also works in the standalone edition.

The masthead uses the open-source UnifrakturCook typeface for the Gothic newspaper look. Barlow Condensed and DM Sans support the headlines and labels. Fonts are served locally; their licenses are included in `public/assets/fonts/`. Artwork and portfolio images come from the supplied references and existing project assets.
