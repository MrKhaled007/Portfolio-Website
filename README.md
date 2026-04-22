# mohammed khaled — personal site

Personal portfolio for **Mohammed Khaled** — Junior Data Analyst / BI Developer / aspiring Data Scientist. A minimalist 90s-retro-tech-meets-modern-professional single-page site.

**Live:** _coming soon_

## Tech stack

- **HTML / CSS / JavaScript** — vanilla, no frameworks, no build step
- **Google Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (mono)
- **Vercel** — zero-config static deployment

No bundler, no npm dependencies, no trackers.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MrKhaled007/portfolio)

> Update the `repository-url` above to point to your own GitHub fork/repo.

### Manual deploy

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Leave everything at defaults — Vercel detects a static site and deploys in seconds.
4. (Optional) Attach your custom domain under **Project → Settings → Domains**.

## Local preview

No build step — just open the file, or serve it locally for proper relative paths:

```bash
# quickest
open index.html

# or, with a dev server
npx serve .
# → http://localhost:3000
```

## Project structure

```
/
├── index.html          ← markup, SEO, OG tags
├── styles.css          ← tokens, layout, responsive
├── script.js           ← typing, nav, reveal, mobile menu
├── favicon.svg         ← MK monogram
├── robots.txt          ← allow all
├── README.md           ← this file
└── public/
    └── cv.pdf          ← placeholder — swap in your real CV
```

## How to customize

Most edits live in three files:

| What you want to change | File | Where to look |
|---|---|---|
| Name, tagline, sections copy | `index.html` | Each `<section>` is clearly labelled with a comment header like `<!-- ──── ABOUT ──── -->` |
| Email / LinkedIn / GitHub | `index.html` | Search for `TODO: replace` |
| Projects | `index.html` | `<section id="work">` — two commented placeholder cards are ready for you |
| Skills | `index.html` | `<section id="skills">` — `<li class="tag">` entries |
| Certifications | `index.html` | `<section id="certs">` |
| Colors, fonts, spacing | `styles.css` | `:root { … }` — all tokens at the top |
| Typing phrase | `script.js` | `const phrase = '…'` |
| CV download | `public/cv.pdf` | Replace the placeholder file |
| OG preview image | `og-image.png` (root) | Add a 1200×630 PNG; meta tag already points to `/og-image.png` |

### Find-and-replace checklist before deploying

- [ ] `your@email.com` → real address
- [ ] `linkedin.com/in/...` → real slug
- [ ] GitHub repo links on project cards
- [ ] `https://your-domain.vercel.app/` in `<meta property="og:url">` and `robots.txt` sitemap line
- [ ] Drop `public/cv.pdf` in place
- [ ] Drop `og-image.png` at repo root (1200×630)

## Accessibility

- WCAG AA contrast across all text
- Visible `:focus-visible` states on every interactive element
- `prefers-reduced-motion` disables typing animation and scroll reveals
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Skip-to-content link for keyboard users

## License

Code is MIT. Content (copy, projects, bio) belongs to Mohammed Khaled.
