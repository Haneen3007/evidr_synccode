# EVIDR × Syn-Code — Implementation Plan

## Product direction

A premium technology partnership site that makes the relationship legible as a system: **EVIDR discovers and validates the opportunity; Syn-Code engineers the solution; together they turn an idea into a digital product.** The experience is intentionally closer to a technology company narrative than a conventional services landing page.

## Design system

- **Design movement:** cinematic systems editorial — a dark, quiet canvas with restrained electric accents, asymmetrical compositions, and interface-like precision.
- **Core principles:** signal over decoration; disciplined contrast; motion that explains relationships; generous negative space.
- **Color philosophy:** near-black graphite creates seriousness and lets the supplied blue/cyan marks own the interface. Electric cyan is reserved for collaboration and data flow; cool cobalt is used for technical depth; muted steel supports hierarchy.
- **Layout paradigm:** editorial split-planes and a central “connection rail” instead of a generic centered grid. Content enters from opposing edges, then converges around shared process sections.
- **Signature elements:** a thin animated partnership rail; numbered system labels; hairline borders and soft radial light fields that track section intent.
- **Interaction philosophy:** interactions should clarify focus and hierarchy. Hover states brighten the active company and de-emphasize the other; arrows and rails move only a few pixels; motion is quiet and reversible.
- **Animation:** 400–700ms page transitions, 0.5–0.8s blur/fade/y reveals, staggered typography, low-amplitude ambient drift, sequential process activation tied to scroll. Prefer transform/opacity and reduce to fades for reduced-motion users.
- **Typography system:** high-contrast editorial display for headlines (Georgia fallback with tight tracking) paired with a clean system sans for navigation, labels, and body copy. Uppercase micro-labels use generous tracking.
- **Brand essence:** a precision partnership for leaders who need the right product direction and the engineering rigor to ship it. Personality: **precise, optimistic, engineered**.
- **Brand voice:** direct, confident, evidence-led. Example lines: “Make the next move with evidence.” / “The distance between a signal and a shipped product.”
- **Wordmark & logo:** use the supplied EVIDR and Syn-Code marks as the primary identity anchors, always preserving their proportions and presenting them on intentional contrasting surfaces.
- **Signature brand color:** collaboration cyan `#45E4DC`, used as the connective signal rather than a blanket accent.

## Implementation approach

- Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React.
- Exactly three page routes: `/`, `/evidr`, `/syn-code`.
- `src/data/companies.ts` owns all company names, roles, services, capabilities, URLs, and supplied logo paths.
- Shared client components provide navbar, transitions, animated background, logo treatment, buttons, cards, process rail, social links, and footer.
- The supplied assets are used from project storage at `/manus-storage/...` with no distortion.
- No backend, database, or API. `public/manus-routes.json` is the canonical route manifest.
- Accessibility is built into semantic structure, focus styles, aria labels, keyboard navigation, and `prefers-reduced-motion` handling.

## Project structure

```text
app/
  layout.tsx             global metadata and shell
  globals.css            design tokens, background, responsive utilities
  page.tsx               partnership home
  evidr/page.tsx         EVIDR experience
  syn-code/page.tsx      Syn-Code experience
components/
  site-shell.tsx         shared client shell and page transitions
  navbar.tsx             responsive navigation and scroll state
  visual-system.tsx      animated background, logos, partnership rail
  ui.tsx                 buttons, reveal wrappers, labels
  process-section.tsx    scroll-driven 5-stage process
  company-card.tsx       home role cards
  company-hero.tsx       dedicated company hero layouts
  service-cards.tsx      EVIDR services and Syn-Code capabilities
  social-links.tsx       accessible external links and contact details
  footer.tsx             shared closeout
src/data/companies.ts     centralized content and links
public/manus-routes.json  exact route declarations
```
