## REVIVE HEMP — Neon Expanse Market

**Immersive GitHub Pages storefront** for Revive Hemp at the custom domain `revivehemp.codefeddy.com`.

Walk the glowing surface markets of Aurora-7. Browse the same premium Revive product tiles featured on [codefeddy.github.io](https://codefeddy.github.io), but fully re-themed around the official neon cyberpunk planet artwork.

## Live Site
https://revivehemp.codefeddy.com

## Setup Custom Domain (revivehemp.codefeddy.com)

### 1. DNS Configuration (at your DNS provider for codefeddy.com)
Create a CNAME record:
- **Name/Host**: `revivehemp`
- **Value/Target**: `codeFEDDY.github.io.` (include the trailing dot)
- TTL: as low as possible (or default)

This is a *subdomain* of your existing `codefeddy.com` custom domain.

### 2. GitHub Repo Configuration
1. Go to https://github.com/codeFEDDY/revivehemp/settings/pages
2. Under "Custom domain", enter exactly: `revivehemp.codefeddy.com`
3. Click **Save**.
4. Check the box for **Enforce HTTPS** once the certificate is issued (may take a few minutes).

GitHub will automatically create the required DNS TXT validation records if needed (for the apex it may differ, but for subdomains CNAME is standard).

The `CNAME` file in this repo is already present with `revivehemp.codefeddy.com`.

### 3. Verify
After DNS propagates (can be 5-60 minutes, sometimes longer), visit https://revivehemp.codefeddy.com

## Features
- Exact same 7 Revive Hemp products with authentic discount links (`FEDDY` → 10% off)
- Fully functional product tiles: live search, category filters, sort, one-click **COPY CODE**, and **OPEN WITH FEDDY APPLIED** links
- Sleekest possible implementation of a "you are on the planet" experience:
  - Full-bleed custom planet background (derived from reference art)
  - Canvas starfield + drifting bioluminescent orbs
  - Glassmorphism cards with neon cyan/purple/magenta glows matching the source image
  - Subtle 3D tilt on desktop for holographic stall feel
  - Scanline + atmospheric overlays
- Pure vanilla HTML/CSS/JS. Zero dependencies. Blazing fast on GitHub Pages.
- Responsive. Accessible. Keyboard friendly (`/` focuses search).

## Local Development
Just open `index.html` in a browser. For a local server:
```bash
python -m http.server 8080
```

## Theme
- Visual language 100% derived from https://imgur.com/a/ptrbue0 (cyberpunk astronaut on glowing crater planet with neon swirls)
- Product data & discount behavior mirrored from CODE FEDDY
- Built for maximum immersion with the sleekest lightweight web tech

21+ • Shop responsibly. All sales through official Revive Hemp channels.

---

Made with ❤️ and neon for the Crater Planet collective.