# Joshua Mabharani — Portfolio

A React + Vite portfolio with an restored photographic background and subtle page motion, project case studies, searchable work, dark/light themes, keyboard navigation, an experience timeline, credentials, CV downloads, and an email-draft contact form.

## Run

Use Node.js 24 LTS (minimum 22.12) and npm.

```sh
npm ci
npm run dev
```

Vite prints the local URL. Production:

```sh
npm run lint
npm test
npm run build
npm run preview
```

Deploy `dist/` to a static host. The existing Render configuration uses `npm ci` and `npm run build`. This work has not pushed to GitHub or changed the hosted portfolio.

## Update content

- `src/data/portfolio.js`: profile, curated project case studies, experience, credential links.
- `src/components/Toolkit.jsx`: verified technology logos from Simple Icons. The Build Log and public repository listing have been removed.
- `public/Tadiwanashe_Joshua_Mabharani_CV.pdf`: existing downloadable CV.
- `src/index.css`: layout, themes, responsive rules, reduced-motion support.
- `src/hooks/useRevealMotion.js`: subtle scroll-entry transitions with reduced-motion support. The 3D scene is no longer rendered or shipped in the production bundle.
- `src/sections/Certificates.jsx`: all 11 entries restored from the previous portfolio. Entries without verification URLs show Completed.
- `src/components/SocialIcons.jsx`: official GitHub and LinkedIn icons from the legacy Lucide React release, which retains brand icons.
- `public/projects/room.jpg`: restored original background photograph.

`Ctrl+K` opens quick navigation. Theme and motion preferences are stored locally when storage is available. OS reduced-motion preference takes precedence.

## Assets

Original screenshots and portrait are retained under `scripts/asset-sources/`, outside the deployment directory. Optimized WebP images are committed in `public/projects/`. To regenerate assets, install Python Pillow (`python -m pip install Pillow`) and run `python scripts/prepare-assets.py`. The social-card generator uses Windows Arial fonts; on another OS set its font paths to installed equivalents. Asset generation is optional; a normal build uses the committed files.

## Contact

The form validates input and opens the visitor's email client with an encoded draft. It does not send mail or claim that a message was delivered. Email and copy-address links provide alternatives. To support server-side delivery, connect a mail provider through a server endpoint with secrets kept server-side, then add rate limiting and abuse protection.

## Source provenance

`Button`, `AnimatedBorderButton`, and `ThemeToggle` were copied from this portfolio's `origin/main` and adapted. Professional history and credential links were preserved from the previous local portfolio. Muwoni and OAK descriptions were checked against public GitHub READMEs on 11 October 2026. Harare Skate Club retains its supplied screenshot and existing live link; no public source link was invented.

OAK appears only as a project showcase with a link to its existing site/repository. All project previews use actual screenshots; see `public/projects/CAPTURES.md`. No OAK files, repository, services, or deployments were modified.

## Deployment details

The canonical URL, robots sitemap URL, structured data, and social image URL retain the portfolio's existing Render domain. If the public domain changes, update `index.html`, `public/robots.txt`, and `public/sitemap.xml` together. The social image now exists at `public/og-image.png`. The Google verification file is preserved.

GitHub Actions runs lint, tests, and production build. See `REVIEW.md` for verification and remaining limitations.

## Backup

The pre-rebuild files and uncommitted changes were preserved at `C:\Dev Apps\portfolio-backup-2026-10-11-140638`, including the original source, public assets, and a Git patch. Git history remains in this repository. Obsolete files were moved into the backup instead of discarded.
