# Repomix reference implementation specification

Reference: supplied `C:/Users/BIG21/Downloads/projectX/repomix-output.xml`, exported Visuvate files, and https://visuvate.com inspected on 11 October 2026 at 1440 × 1000. The supplied snapshot is the source of layout values; the live homepage confirms the hero. The live site has additional pricing content absent from the inspected snapshot. This is a portfolio adaptation rather than another studio's identity or business claims.

## 1. Layout Structure
Observed: centered maximum widths of 1440px and 1380px, 24px mobile and 32px desktop gutters. Implemented: centered hero and editor, two-column project gallery, five-column skill grid, responsive cards and footer columns. Editor sidebars collapse below tablet width.

## 2. Section Order
Snapshot: navigation, hero/editor, toolkit, introduction, featured works, services, approach, testimonials, FAQs, CTA/footer. Portfolio: navigation, hero/editor, text toolkit, introduction, works, skills, biography/experience, approach, certificates, FAQs, contact, CTA/footer. Verified certificates replace third-party testimonials. Studio pricing, ratings and client statistics are not attributed to Joshua.

## 3. Navigation
Observed: horizontal brand/navigation, theme control, pill contact CTA, compact mobile menu and a floating glass bar on scroll. Implemented: TJM and Joshua brand, portfolio anchors, theme control and contact CTA, with the floating desktop navigation. Works opens the spiral. Mobile menu closes on selection, Escape or desktop resize. Ctrl K retains quick navigation.

## 4. Typography
Observed source: Walsheim display, Geist body, Fraunces normal and italic accents. Local supplied font assets are used. Hero clamp 48px–92px with tight -0.06em tracking and line height 1. Section headings 38px–64px. Small screens reduce hero sizing to prevent overflow.

## 5. Color System
Observed: black background, white foreground, muted gray text, hairline borders, blue glow. Implemented dark theme: #000 background, #fff text, #9c9c9c muted, #242424 borders, #168cff accent. The light theme follows the HTML embedded in the XML and the live Visuvate light homepage inspected on 12 October 2026: white #fff, surfaces #f6f6f6 and #f1f1f1, cards #f0f0f0, black text, muted #5a5a5a, subtle #767676, border #0000001a, stronger border #0000002e, hairline #00000029 and navigation #fffc. The editor canvas is translucent white, without the invented blue border shadow or gray gradient. Blue hero bars use #0099ff. Forms use the source's translucent white glass/field colors, and the footer uses its #f6f6f6bf veil. Source gray and opacity values are retained rather than replaced with a previous portfolio palette. Layout, content and dark-theme colors remain unchanged.

## 6. Spacing and Layout Rhythm
Observed: hero padding clamp 120px–168px, 60px CTA/editor gap, section padding roughly 80px–136px. Implemented equivalent hero rhythm and responsive 70px–120px sections, 12px skill gaps and 24px gallery gaps.

## 7. Image Treatment
Actual existing portfolio screenshots populate the editor, curved spiral and gallery. Original profile.png remains the portrait. Supplied aurora textures remain in platform areas. The spiral and footer use the reference's animated WebGL blue light field, including its dark and light palettes. Screenshots preserve top-aligned cropping.

## 8. Cards and Content Blocks
Observed: editor chrome, 12px rounded hairline cards, interactive tabs and preview tools. Implemented: Pages/Layers/Assets selection, selectable project previews, desktop/mobile framing, zoom/reset, pause, collapse panels, real links. Skill cells, platform blocks, approach cards and certificate cards follow the reference's geometry. The reference's cylindrical WebGL mesh and shaders now render a scroll-driven helix of actual portfolio screenshots. Clicking a card opens its case study; keyboard buttons and the standard gallery provide accessible alternatives. A static image grid handles WebGL failure.

## 9. Buttons and CTAs
Observed: white pill primary, outlined secondary, 14px medium typography. Implemented paired 38px-high pill buttons with 130px minimum widths, matching primary/secondary hierarchy. Real Lucide interface icons and official Lucide legacy GitHub/LinkedIn icons are retained. FAQs use native accessible disclosure elements.

## 10. Overall Design Feel
A spacious studio composition in both themes: mixed-serif headings, restrained outlines, blue illumination, curved project previews and a large TJM footer mark. The initial five-panel curtain, staggered blurred character entrance, editor reveal and pulsing hero bars follow the reference. GSAP handles entrances and scroll reveals; Lenis handles desktop smooth scrolling and pauses for dialogs. Motion respects reduced-motion and the global pause setting. Canvas resolution is capped and rendering suspends offscreen or on hidden tabs. Content remains grounded in Joshua's portfolio.

Validation results are recorded in the delivery after browser review; this document does not assert accessibility or performance certification.

12 October light-theme and navigation verification: desktop 1440×1000 and mobile 390×844. The live reference's hero/editor and supplied HTML theme rules were inspected. Portfolio hero, Skills cards, About, spiral and footer were reviewed in light mode; mobile About has no page overflow. Header links expose aria-current, track scrolling with a 160px maximum reading marker, and update the URL using replaceState so scrolling does not create history entries. The Works link owns both spiral and gallery; supporting sections highlight their parent navigation group while retaining their own hashes. Home, About, Works, Skills, Experience, Certificates and Contact navigation, manual scrolling, mobile menu dismissal and direct #about reload were exercised. No browser errors were recorded. Lint and production build pass. Screenshots are saved in task artifacts.

The earlier static design was browser-verified at 320px, 768px and 1440px with no horizontal overflow, all anchors and all 11 certificates. Those results do not certify the new spiral. For this motion update, lint, seven tests and the production build pass. Two regression tests cover the initial coil frame, pause/resume, resource disposal and WebGL failure. Both palettes were inspected before final fixes; the first coil frame exposed a variable-shadowing error that was corrected and regression-tested. Final visual verification remains outstanding because browser screenshots fail even on the unchanged GitHub tab and fresh preview tabs fail to attach. No final screenshot or visual certification is claimed. A production ZIP is saved in the task artifacts; no hosting destination was selected and nothing was published. OAK and Harare Skate Club source projects were not edited by this redesign.
