# lifetimesoft-web

Official website for [Lifetime Soft](https://www.lifetimesoft.com) — a SaaS platform for modern business.

Built with [Hono](https://hono.dev/) + JSX running on [Cloudflare Workers](https://workers.cloudflare.com/), styled with Tailwind CSS, and interactive via Alpine.js.

## Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Workers |
| Framework | Hono v4 |
| Templating | Hono JSX |
| Styling | Tailwind CSS (CDN) |
| Interactivity | Alpine.js |
| Language | TypeScript |

## Project Structure

```
src/
├── index.tsx           # Router & entry point
├── model/
│   ├── const.ts        # Global constants (static CDN path, etc.)
│   └── i18n.ts         # EN/TH translations
├── layout/
│   ├── layout.tsx      # Base HTML layout with SEO meta tags
│   ├── header.tsx      # Navigation header with language switcher
│   └── footer.tsx      # Footer with links
└── pages/
    ├── index.tsx        # Home page
    └── privacy-policy.tsx
```

## i18n

The site supports **English** (default) and **Thai**.

Language is resolved in this order:
1. `?lang=en` or `?lang=th` query parameter
2. `Accept-Language` request header
3. Falls back to `en`

All translations live in `src/model/i18n.ts`.

## Development

```bash
npm install
npm run dev
```

> Runs `wrangler dev src/index.tsx --remote`

## Deploy

```bash
npm run deploy
```

> Runs `wrangler deploy --minify src/index.tsx`

## Routes

| Route | Description |
|---|---|
| `GET /` | Home page |
| `GET /privacy-policy` | Privacy policy |
| `GET /robots.txt` | Robots file |
| `GET /sitemap.xml` | Sitemap |
| `GET /tiktokB5Y8JNBgcQjfoLd02fYkXvZz3oIiMQyx.txt` | TikTok domain verification |

## Links

- Website: https://www.lifetimesoft.com
- App: https://app.lifetimesoft.com
- Docs: https://docs.lifetimesoft.com
- YouTube: https://www.youtube.com/@LifeTimeSoft
- Facebook: https://www.facebook.com/lifetimesoftservice
- TikTok: https://www.tiktok.com/@lifetimesoftservice
