# Page Preloader

*Maxzone Clothing — custom feature, built February 2025*

![Preloader demo](./preloader-demo.png)

## What it is
A blurred full-screen preloader overlay with a centered logo, shown
briefly while a page loads before revealing the content underneath. Built
as a reusable section so it can be added to every page or to specific
pages only.

## How it works
- A fixed, full-viewport overlay with a semi-transparent white background
  and a `backdrop-filter: blur` applies the frosted-glass effect over the
  page content behind it.
- The logo image scales down responsively on tablet and mobile.
- A `setTimeout` removes the preloader from the DOM ~1.5s after load.

## Tech
Shopify Liquid (section), CSS (`backdrop-filter`, responsive sizing),
vanilla JavaScript

## Setup
1. Add `preloader.liquid` to the theme's `sections/` folder.
2. Add `{% section 'preloader' %}` inside the `<body>` tag of
   `theme.liquid` (add it to specific page templates only if it's not
   meant to run site-wide).
3. Upload the preloader logo/gif as a theme asset and make sure its
   filename matches the one referenced in the code
   (`logo-only_load.gif`).

## Where used
Currently active on the homepage only.

## Files
- [`preloader.liquid`](./preloader.liquid) — full section code
