# COREMOD — System Ready.

> We Build. We Fix. You Play.

Official website for **CoreMod** — PC repair, custom builds, and remote tech support based in Thailand.

Live at: `https://coremod-tech.github.io`

---

## Stack

- Pure HTML / CSS / JS — no frameworks
- Hosted on GitHub Pages (free, static)
- Contact form via [Web3Forms](https://web3forms.com) API

---

## Structure

```
CoreMod-Tech.github.io/
├── index.html          # Single-page site
├── css/
│   └── style.css       # All styles — terminal/cyberpunk theme
├── js/
│   └── script.js       # Animations, i18n, form, scroll logic
└── images/
    ├── LogoV1nobg.png  # Logo (transparent) — used as favicon + hero
    ├── LogoV1.png      # Logo with background
    └── CoverV1.png     # Cover image
```

---

## Features

- Thai / English language toggle (persists via localStorage)
- Terminal boot sequence animation on hero
- Glitch effect on title
- Scroll-triggered fade-in on all cards
- Active nav highlight on scroll
- Working contact form (Web3Forms API)
- CRT scanline overlay
- Fully responsive (mobile hamburger menu)

---

## Setup

**1. Clone the repo**
```bash
git clone https://github.com/CoreMod-Tech/CoreMod-Tech.github.io.git
cd CoreMod-Tech.github.io
```

**2. Open locally**

Just open `index.html` in a browser — no build step needed.

**3. Enable the contact form**

- Go to [web3forms.com](https://web3forms.com)
- Enter `coremod.tech@gmail.com` → get free access key
- Replace in `index.html`:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

---

## Deploy

Push to `main` branch — GitHub Pages auto-deploys.

```bash
git add .
git commit -m "update site"
git push
```

---

## Contact

- Email: coremod.tech@gmail.com
- Line: @059qaouj
- Facebook: [facebook.com/CoreModTech](https://www.facebook.com/CoreModTech/)

---

## License

Copyright (c) 2025 CoreMod-Tech. All rights reserved.

This project is **not open source**. Source code is publicly visible on GitHub for hosting purposes only. No part of this code may be copied, modified, distributed, or reused without prior written permission from the owner.

See [LICENSE](./LICENSE) for full terms.
