# Stay Afloat website

The public home of **Stay Afloat — A very leaky holiday.**

- [Website](https://truizlop.github.io/StayAfloatWebsite/)
- [Privacy policy](https://truizlop.github.io/StayAfloatWebsite/privacy/)
- [Terms & conditions](https://truizlop.github.io/StayAfloatWebsite/terms/)
- [Support](https://truizlop.github.io/StayAfloatWebsite/support/)

## Development

This is a small, dependency-free static site. HTML, CSS, JavaScript and selected game media are authored directly at the repository root. Preview with `python3 -m http.server 4173` and open `http://localhost:4173`.

GitHub Pages deploys the root of `main`. `.nojekyll` preserves the authored site without a Jekyll build. Use relative internal URLs so both a local preview and the `/StayAfloatWebsite/` project path work. The custom 404 uses absolute canonical links so it works at arbitrary missing paths.

## Media and accessibility

The wordmark, icon and ship illustration are the game's own assets. Gameplay video is captured from the running native game, trimmed and compressed for the web. It is development footage, not a promise about a final release. See [media provenance](MEDIA.md).

Videos are muted, loop inline only when visible, stop when the tab is hidden, and have static posters. A shared control pauses all animation, including the decorative ship. OS reduced-motion preferences default to still images; visitors can explicitly play the clips. With JavaScript disabled, the posters and every page/link remain available. No analytics, cookies, third-party embeds, remote fonts or browser storage are added.

## Legal and store metadata

The privacy policy describes local saves, Apple/Game Center, RevenueCat purchases, Google AdMob/UMP, GitHub hosting and email support. Website terms preserve Apple's Standard EULA for the app licence. Keep these pages aligned with SDK configuration as the app changes. The site advertises development status; it does not claim an App Store release or offer an unavailable download.

The game source remains in a separate private repository. Website deployment does not submit or publish the iPhone app.

## Rights

Copyright © 2026 Tomás Ruiz López. All rights reserved. This public repository is not an open-source licence for the game, artwork, recordings or website. Third-party names belong to their respective owners.
