# Portfolio implementation review

Reviewed on 11 October 2026. Scope: only `Tadiwanashe-Joshua-Mabharani_dev-personal-portfolio`. No other project was edited, pushed, or deployed. In particular, OAK remains unchanged.

## Result

The old source was replaced with a focused React/Vite portfolio built around the existing GitHub Button, AnimatedBorderButton, and ThemeToggle components, copied from `origin/main` at `4fae6e9c4633de8a695b0b82ebe4eab1f51ee85c`. The visual direction uses navy, blue, local fonts, original project screenshots, a restored original photographic background and subtle entry transitions, and a responsive editorial layout.

The site includes project filtering/search, detailed case-study dialogs, a keyboard command menu, a work history, credential links, a compact animated real-logo toolkit, all 11 original certificates, footer navigation, CV downloads, persistent themes, animation controls, and a contact form that creates an email draft.

## Issues addressed

| Area                 | Finding and resolution                                                                                                                                                                                                                                          |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Existing work        | Numerous uncommitted changes existed. A filesystem backup and Git patch were saved before replacing source. Old files were moved to the backup. Git history was preserved.                                                                                      |
| Content accuracy     | The previous Muwoni description claimed POS functionality. The public README supports task CRUD and calendar scheduling; the new case study reflects those features and separates planned improvements.                                                         |
| Recent projects      | OAK was the newest public repository. It is linked and showcased using an actual screenshot of its deployed theme. No OAK app files or services were changed.                                                                                                      |
| Dead-end links       | Placeholder source/demo links were removed. Harare Skate Club has a live link and no invented GitHub repository.                                                                                                                                                |
| Dependencies         | Three high-severity transitive advisories were resolved with compatible updates. Unused Lucide and Tailwind packages were removed. The final audit reports zero vulnerabilities.                                                                                |
| Build compatibility  | Current Lucide no longer exports the GitHub/LinkedIn brand icons used during implementation. These are now local SVG components adapted from the previous portfolio.                                                                                            |
| Mobile layout        | Navigation adapts to mobile. Small-screen overlap, a clipped project preview, and narrow-screen horizontal overflow were fixed.                                                                                                                                 |
| Keyboard behavior    | Native modal dialogs handle focus containment and Escape. Focus returns without scrolling the page. The command search receives focus after the dialog opens. Ctrl+K is shown; the keyboard handler also accepts Meta+K.                                                                          |
| Motion and rendering | Device reduced-motion preferences take precedence. A stored pause preference is supported. Rendering stops off-screen and in hidden tabs. Pixel ratio is capped and WebGL resources are disposed on cleanup. A CSS sculpture remains when WebGL is unavailable. |
| Contact expectations | Required fields and trimmed message validation are implemented. Draft subject/body are encoded. The form explicitly states that it opens an email app and does not claim delivery. No submitted form sends data to an external API.                             |
| Failure handling     | A rendering error boundary and a no-JavaScript fallback retain GitHub, email, and CV access. Theme and motion controls tolerate unavailable local storage.                                                                                                      |
| Performance          | Original screenshot assets were moved outside `public/`. The two project screenshots now total 81,560 bytes, compared with 4,816,707 bytes. Three.js is lazy-loaded and limited to the primitives used. Fonts are self-hosted.                                  |
| SEO                  | A real social image, concise metadata, Person structured data, and a one-page sitemap replace missing social assets and fragment sitemap entries. The existing canonical domain and Google verification file are retained.                                      |
| Maintainability      | Curated content is centralized, public repository data is checked in, and a safe GitHub snapshot refresh script is provided. CI runs lint, tests, and build.                                                                                                    |

## Verification

- A clean `npm ci` completed successfully with the committed lockfile. On Windows, stop preview servers before reinstalling to avoid locked native build modules.
- Production build passed.
- ESLint passed.
- Six Node tests passed: combined project filtering, mailto encoding, required assets, HTTPS destinations, GitHub snapshot integrity, and SEO/sitemap consistency.
- `npm audit` reports zero vulnerabilities.
- Browser QA covered dark/light themes, persistent preferences, 3D rendering and pause/play, project dialogs and Escape, combined filters and empty states, Ctrl+K navigation, mobile menu, contact validation, and labelled form fields.
- Responsive layouts were inspected at 320, 390, 768, and 1440 pixel viewport settings. The final 320-pixel check had equal page/client widths, no broken images, and no unnamed buttons.
- The production preview had no captured browser console errors or warnings.
- The portfolio page, CV, all optimized images, social image, and sitemap returned HTTP 200 with expected content types from the production preview.
- All three existing project homepages returned HTTP 200. Muwoni first timed out on a HEAD request and then returned HTTP 200 on a subsequent GET, consistent with a waking Render service. This checks reachability, not each external app's workflows.

## Practical limits

The contact experience requires a configured email app; the visible email address and copy control are alternatives. There is no server-side mail-delivery integration. External projects and their infrastructure are outside this change's scope.

The Three.js chunk is approximately 528 KB minified / 131 KB gzip and still triggers Vite's 500 KB advisory. It is loaded separately from the approximately 238 KB / 75 KB gzip application bundle. All emitted production files total approximately 1.35 MB before compression. This is acceptable for the requested real-time 3D feature, with fallback and motion controls; no measured Lighthouse score or full screen-reader/device certification is claimed.

The professional history and credentials came from the supplied portfolio. Public project data was checked against GitHub; it does not imply independent verification of employment or credentials. The existing CV was preserved and not rewritten. The canonical Render domain must be changed consistently in metadata and sitemap if the deployment domain changes.

No GitHub push or public deployment was performed. Run `npm run dev` to reopen the local site; deploy the built `dist/` when ready.

## Recovery

Backup: `C:\Dev Apps\portfolio-backup-2026-10-11-140638`.

It contains the original files, the original source, removed legacy files, and `working-tree.patch`. It excludes replaceable `node_modules` and `dist` artifacts. The initial bulk-delete command was blocked by automatic approval review; the rebuild used recoverable moves instead.

## Source references

- [Original portfolio](https://github.com/big21josh/Tadiwanashe-Joshua-Mabharani_dev-personal-portfolio)
- [OAK repository](https://github.com/big21josh/oak_foudation)
- [Muwoni README](https://github.com/big21josh/muwoni-completed-project/blob/main/README.md)
- Harare Skate Club details and screenshots: supplied previous portfolio.



## Portfolio refinements - 11 October 2026

Blue TJM TextGeometry hero replaces the knot, with gentle pointer tilt, pause support, off-screen suspension and a text fallback. Full name and original portrait restored. Removed numbered labels, ornamental home arrows and Build Log. Added eight curated project previews using actual screenshots and expanded animated real-logo toolkit. Primary actions use the blue filled button; downloads use outline styling. Ctrl K labels replace the Mac shortcut glyph. OAK source remains untouched. To-Dos uses a local capture of its existing GitHub source because no public deployment was verified.

Final validation: ESLint passed; all five tests passed; production build passed. Browser checks confirmed desktop and 320px/375px layouts without horizontal overflow, all six Muwoni image assets loaded, Ctrl K navigation, project dialogs, light/dark themes and shared animation pause. Preview remains available on 127.0.0.1:4177.


## Latest visual refinements

Removed the 3D hero and ornamental diagonal arrows. Restored the original room photograph and softened light mode to slate surfaces with dark readable text. Added subtle entry motion and a global pause control, respecting OS reduced motion. The toolkit is a compact horizontal logo strip that pauses on hover/focus, with optional expansion. Restored all 11 original certificates; only the three original Coursera entries expose verification links. Added direct footer navigation and CV download. Hero action buttons now share dimensions; paired project actions also share dimensions. GitHub and LinkedIn use the official legacy Lucide React brand icons.

Latest validation: lint and production build passed, with all five data/asset tests passing. Browser verified zero diagonal-arrow icons, zero 3D panels, 11 certificate cards, real Lucide GitHub/LinkedIn icons, equal hero button dimensions, original room photograph and a collapsed toolkit height of approximately 126px. No OAK or Harare Skate Club source was edited in this refinement.
