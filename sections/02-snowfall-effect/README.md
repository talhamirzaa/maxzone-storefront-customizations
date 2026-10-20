# Christmas/Winter Snowfall Effect

*Maxzone Clothing — custom feature, built December 2024*

![Snowfall effect on homepage](./screenshot-homepage-snowfall.png)
![Snowfall effect on footer](./screenshot-footer-snowfall.png)

## What it is
A pure-CSS animated snowfall overlay for a Christmas/winter campaign,
applied to specific parts of the site (homepage hero, header, footer,
mega menu, mobile menu drawer) using layered `.webp` snowflake images
and a `background-position` keyframe animation.

## How it works
- A `::after` pseudo-element is added to each targeted section (via its
  Shopify section ID), positioned above content with `pointer-events: none`
  so it never blocks clicks.
- Three `.webp` snow textures are layered via `background-image` and
  drift at different speeds/directions using one `@keyframes` animation.

## Tech
CSS (pseudo-elements, keyframe animation, multiple background layers),
Shopify asset files (`.webp`)

## Setup
1. Upload `snow1.webp`, `snow2.webp`, `snow3.webp` (from `assets/`) to
   Shopify under Settings → Files.
2. Paste the contents of `snowfall-effect.css` to the bottom of the
   theme's `base.css`.
3. Update the section/element IDs in the CSS to match the target theme's
   actual section IDs before activating each season.

## Files
- [`snowfall-effect.css`](./snowfall-effect.css) — the effect code
- `assets/` — the snow1/snow2/snow3 `.webp` textures
