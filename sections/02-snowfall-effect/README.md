# Christmas/Winter Snowfall Effect

**Live reference:** [maxzoneclothing.com](https://maxzoneclothing.com/)

## What it is
A pure-CSS animated snowfall overlay added for the Christmas/winter
campaign, applied to specific parts of the site (homepage hero slideshow,
header, footer, mega menu, mobile menu drawer) using layered `.webp`
snowflake images and a `background-position` keyframe animation.

## How it works
- A `::after` pseudo-element is added to each targeted section via its
  Shopify section ID, positioned absolutely and layered above content
  (`pointer-events: none` so it never blocks clicks).
- Three `.webp` snow textures are layered via `background-image` and
  drift at different speeds/directions using one `@keyframes` animation,
  creating a parallax-like falling snow effect.
- Pasted into `base.css` — no template/schema changes needed, so it can be
  added/removed quickly each season.

## Tech
CSS (pseudo-elements, keyframe animation, multiple background layers),
Shopify asset files (`.webp`).

## Files
- [`snowfall-effect.css`](./snowfall-effect.css) — the effect code
- `assets/` — the snow1/snow2/snow3 `.webp` textures
- Screenshots — effect visible on homepage and footer
