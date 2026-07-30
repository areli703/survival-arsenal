# Survival Arsenal

Static React storefront for survivalarsenal.com. Built with Vite + React + Tailwind.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy

Push to GitHub, import repo in Vercel. Auto-deploys on push.

## Stack

- Vite + React 18
- Tailwind CSS (army green + accent orange theme)
- React Router (SPA)
- Stripe Payment Links (set in `src/data/products.js`)

## Custom Domain

1. Vercel project → Settings → Domains → add `survivalarsenal.com` (and `www.survivalarsenal.com`)
2. Vercel shows DNS records to add at IONOS
3. Add records at IONOS DNS settings
4. Wait 5-30 min for propagation

## Products

10 verified products sourced from AliExpress + market-validated against Amazon (July 30, 2026).
See: `vault/Crafted Matrix Agency/Clients/Research — Survival Arsenal Dropship Shortlist v2 — 20260730.md`

## Checkout

Stripe Payment Links. Each product has a `stripe_link` field in `src/data/products.js`.
Replace placeholder URLs with real Stripe Payment Links once account is set up.
