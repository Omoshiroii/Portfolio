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

On Windows, `pnpm dev` first clears only the generated `.next-dev` folder using PowerShell. This avoids Next.js 14's `EINVAL readlink` error with OneDrive cloud files. Source files, dependencies, and production output are untouched. Stop the previous dev server before starting another in the same folder. The first compilation after startup will be fresh. Other platforms skip this step.

## Static preview and GitHub Pages

```sh
pnpm sync:static
```

Open `index.html` in a browser, or serve this repository with your editor's static server. Keep `public/` beside `index.html` when publishing: paths are relative so the page also works beneath a GitHub Pages repository URL.

The existing GitHub Actions workflow publishes the repository's static files on pushes to `main`. Commit the regenerated `index.html` alongside source changes. `pnpm build` regenerates it automatically before building Next.js.

## Source files

- `app/page.tsx` is the shared content and markup source. Edit this file, then regenerate the static edition; avoid editing `index.html` directly.
- `style.css` contains the shared design. `app/globals.css` imports it for Next.js.
- `styles/night.css` styles the dark portfolio below the newspaper hero; `styles/sections.css` provides the shared section layouts.
- `styles/chapters.css` adds the image-led skyline, project rows, personal profile, milestones, and responsive chapter navigation.
- `public/newspaper.js` contains browser interactions for both editions.
- `public/translations.js` contains English/French/Spanish copy and the language switcher. It also translates accessible labels and dynamic controls, remembers the selection locally, and updates the document language. Add translations here when adding copy to the page. Names, technology names, and text embedded in supplied images remain original.
- `public/cv/Taha-Zerrad-CV.pdf` is the original French CV, downloaded from the navigation, profile, and contact sections. Replace this file to update the download; the website language does not change the PDF.
- `public/assets/` holds images and fonts. The page uses relative `public/assets/` paths; the Next.js configuration maps those paths to its public assets.
- `scripts/export-static.cjs` compiles the page in memory with the installed TypeScript compiler and renders it with React. It writes only `index.html`; CSS and assets remain shared.

The shared page is a synchronous server component. Keep browser behavior in `public/newspaper.js` so it also works in the standalone edition.

The masthead prefers Engravers' Old English BT when it is installed on the viewer's device, followed by Old English Text MT and the bundled open-source UnifrakturCook. The exact Engravers face is not included in this repository; a licensed webfont is needed to make it consistent across devices. Barlow Condensed and DM Sans support the headlines and labels. Bundled font licenses are included in `public/assets/fonts/`.

The front edition uses the supplied Gotham newspaper artwork in SVG viewports for the headline texture and photograph. Gray paper, folds, scratches, crimson handwriting, and compact article columns are styled in `style.css`; `public/assets/press-distress.svg` supplies the surface wear. Pointer movement gently tilts the sheet and shifts the photograph and light. The effects control pauses motion, and device reduced-motion preferences are respected automatically. Artwork and portfolio images come from the supplied references and existing project assets.

The newspaper is confined to the hero. An original SVG skyline and a moving searchlight introduce the dark portfolio. Below are large project previews, a personal profile using the portrait extracted from the supplied CV, native expandable milestones, a short toolkit, and contact options. A sticky chapter menu gives direct access to projects, the profile, milestones, contact, and the CV. Native milestones, navigation, and download links work without JavaScript; JavaScript adds language switching, project filtering and dialogs, and motion controls. Reduced-motion preferences disable scenery animation. The shared `Bat` component in `app/page.tsx` supplies the same scalable silhouette throughout the site.

The nine project entries are defined in the typed `projects` array in `app/page.tsx`. Each has optional `repo` and `live` destinations; `contribution` marks collaborative work, and `privateRepo` marks a repository that was not publicly accessible when checked. LILOOK uses its repository-confirmed `https://lilook.vercel.app` address and a fresh homepage capture. Library, Adsum-B, and projet-emploi returned public 404s when checked; their supplied URLs remain, with access limitations stated. Remove `privateRepo` when they become public. ADSUM and Projet emploi are labelled as contributions. Filters cover web, data, systems, and contributions, with translated counts for any number of projects.

To add a screenshot, save it under `public/assets/`, set that project's `image` filename and meaningful `alt` text, and add translations of the alt text in `public/translations.js`. Empty image values deliberately render a styled image space in both cards and dialogs. Then run `pnpm sync:static`. Dates and education in the personal timeline follow the supplied CV; future interests are labelled as aspirations.

Uploaded project screenshots are copied from `projects/` into `public/assets/projects/` for both Next.js and the static site. Recruitment Engine replaces the sample data dashboard: an internship application developed with colleagues, with Taha's contribution described as the administration dashboard. Its seven-image `gallery` supports native touch scrolling, keyboard arrows/Home/End, previous/next buttons, numbered selectors, and full-image links. It never auto-advances and has separate card/dialog controls. Screenshot captions and controls are translated; original text inside screenshots remains unchanged.

Library uses two locally stored Unsplash photos: [Priscilla Du Preez](https://unsplash.com/photos/ggeZ9oyI-PE) as the main image and [Isaac Smith](https://unsplash.com/photos/f7fsz-4U0PA) as the backup, under the [Unsplash License](https://unsplash.com/license). The photos are illustrative, not screenshots of the app. If the main image fails to load, `data-image-fallback` swaps it to the backup once. Keeping both files locally avoids dependence on external image URLs.
