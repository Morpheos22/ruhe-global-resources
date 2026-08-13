# RUHE Global Resources — Modern Website

A modern, reactive rebuild of [ruhegr.com](https://ruhegr.com), migrated off WordPress onto a Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui stack.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (display headings)

## Brand palette

| Token              | Hex       | Usage                            |
| ------------------ | --------- | -------------------------------- |
| `ruhe-navy`        | `#0b1f3a` | Primary text, dark sections      |
| `ruhe-navy-deep`   | `#081627` | Hero overlay, footer, top bar    |
| `ruhe-gold`        | `#c8a35a` | Accent, CTAs, eyebrows            |
| `ruhe-gold-light`  | `#e8d3a3` | Hover state for gold elements    |
| `ruhe-ivory`       | `#f7f5f0` | Soft section backgrounds         |
| `ruhe-slate`       | `#5b6472` | Muted body text                  |

## Sections

1. **Hero** — sticky header, ICEF accreditation chip, dual CTAs, brand emblem
2. **Services** — 6 core service cards + 8-item detailed services strip
3. **About** — company story, founder card, pull quote
4. **Why Us** — 4 value pillars
5. **Regions** — Europe / North America / Rest of the World
6. **Stats** — animated counters (study visas, ratings, etc.)
7. **Testimonials** — video testimonial + 2 verified client cards
8. **Blog** — 3 latest article previews
9. **Careers** — 4 open roles
10. **Contact** — call-back form (POST `/api/contact`) + contact details
11. **Footer** — brand, link columns, socials, office hours

## Local development

```bash
bun install
bun run dev    # http://localhost:3000
bun run lint
```

## Deployment

The project is configured for Vercel. Push to the `main` branch of the linked GitHub repo and Vercel will auto-deploy.

## License

© RUHE Global Resources. All rights reserved.
