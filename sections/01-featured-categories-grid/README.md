# Featured Categories Grid

**Live reference:** [maxzoneclothing.com](https://maxzoneclothing.com/)

## What it is
A custom Shopify section that renders a **responsive grid** of featured
collections/categories, each as an image card with a title, optional
subtitle and optional badge. Dawn (Shopify's default theme) does not ship
a section like this, so it was built from scratch to let merchandisers
curate and reorder featured categories directly from the theme editor.

## Why it was needed
- Dawn's built-in "Collection list" section only offers a slider/carousel
  layout — there was no way to display categories as a clean, fixed **grid**.
- The store needed independent column counts for desktop, tablet and
  mobile, driven entirely from theme settings (no code edits needed per
  campaign).

## Key features
- **Grid, not a slider** — fully responsive CSS grid that reflows based on
  screen size.
- **Per-breakpoint column control** — desktop, tablet and mobile column
  counts are each configurable via the theme editor (`range` settings),
  applied through CSS custom properties set in JS.
- **Repeatable blocks** — merchandisers add/reorder/remove category cards
  (image, title, subtitle, link, badge) without touching code, up to 12
  blocks.
- **Responsive images** — `srcset`/`sizes` generated from a fixed width
  list so each breakpoint loads an appropriately sized image.
- **Badges** — optional label per card (e.g. "New", "Sale") with dark /
  light / brand color styles.
- **Overlay styles** — title/subtitle can render below the image or as a
  solid/gradient overlay on top of it, fully theme-editor configurable.
- **Hover effects** — configurable zoom and saturation on hover.
- Safari-specific CSS fixes included (`grid-gap` fallback,
  `-webkit-mask-image` for border-radius on images).

## Tech
Shopify Liquid, theme editor schema (settings + blocks), CSS Grid, vanilla
JavaScript (for applying responsive column counts via CSS variables).

## Files
- [`featured-categories.liquid`](./featured-categories.liquid) — full
  section code (markup, styles, schema)
- `output-screenshot.png` — live output on the storefront

## Result
Used on the Maxzone homepage ("Featured Collections") to showcase product
categories (Smart Tech Polo, Old Money, Basics, 365 Shorts, etc.) in a
clean, responsive grid across all screen sizes.
