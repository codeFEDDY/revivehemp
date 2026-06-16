## REVIVE HEMP — Neon Expanse Market

**Custom domain GitHub Pages site**: revivehemp.codefeddy.com

Immersive cyberpunk planetary storefront for Revive Hemp. Shop the same premium products from the original CODE FEDDY board, fully re-themed around the neon crater planet artwork so it feels like you are standing on the planet browsing the stalls.

## Live (after DNS + Pages)
https://revivehemp.codefeddy.com

## Products
The exact same Revive Hemp items from codefeddy.github.io/codeFEDDY with authentic 10% off FEDDY links.

## Setup for custom domain (Namecheap specific)
**Current status:** DNS record for revivehemp.codefeddy.com does not exist yet (nslookup returns non-existent domain). This is why you'll see "DNS check unsuccessful" in GitHub Pages settings.

### Exact steps for Namecheap (you have Namecheap)
1. Log into your Namecheap account.
2. On the left, click **Domain List**.
3. Find `codefeddy.com` and click **Manage**.
4. Click the **Advanced DNS** tab.
5. In the **Host Records** section, click **Add New Record**.
6. Fill exactly:
   - **Type**: `CNAME Record`
   - **Host**: `revivehemp`
   - **Value**: `codeFEDDY.github.io`
   - **TTL**: `Automatic`
7. Click the checkmark (✓) to add it.
8. Scroll to the bottom and click the green **Save All Changes** button.

**Important:**
- First check if any record already exists with Host = `revivehemp`. If yes, delete conflicting records (especially any URL Redirect, A, or wrong CNAME).
- Do **not** change the `@` (root) records — those are for codefeddy.com itself.
- The target **must** be `codeFEDDY.github.io` (your GitHub username), **not** `revivehemp.github.io`. Pointing it to the repo name won't work.

### After saving
- Wait 5-30 minutes (use https://dnschecker.org — search `revivehemp.codefeddy.com` and select CNAME).
- Verify locally: `nslookup -type=CNAME revivehemp.codefeddy.com 8.8.8.8`
- Go to the revivehemp repo Pages settings: https://github.com/codeFEDDY/revivehemp/settings/pages
- The error should clear. Enter `revivehemp.codefeddy.com` if not already, then check **Enforce HTTPS**.

The `CNAME` file in the repo is already correct (`revivehemp.codefeddy.com`).

The site is fully built with the planet theme from your image (https://imgur.com/a/ptrbue0), immersive effects, product tiles, etc.

## Local Development
Just open `index.html` in a browser. For a local server:
```bash
python -m http.server 8080
```

## Theme & Tech
- Full-bleed planet background (your provided artwork, cleaned and used as the immersive surface)
- Canvas starfield + drifting bioluminescent orbs
- Glassmorphism cards with neon cyan/purple/magenta glows matching the reference
- Subtle 3D tilt on desktop for holographic stall feel
- Scanline + atmospheric overlays
- Pure vanilla HTML/CSS/JS. Zero dependencies.
- Search, filters, copy code FEDDY, open with discount applied links (same functionality as the original board)

21+ • Shop responsibly. Links use the real revivehemp.store discount structure.

---

Made with ❤️ and neon for the Crater Planet collective.