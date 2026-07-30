# IONOS DNS Setup — survivalarsenal.com → Vercel

**Use CNAME records (NOT A records).** Vercel's IP pool changes; CNAMEs auto-update.

## Before You Start

1. Push this repo to GitHub: https://github.com/areli703/survival-arsenal
2. Import it in Vercel: https://vercel.com/new → select repo → Deploy
3. Once deployed, Vercel gives you a `survival-arsenal-XXX.vercel.app` URL
4. In Vercel: **Project → Settings → Domains → Add `survivalarsenal.com`**
5. Vercel will show you the exact DNS records to add (these match below)

## IONOS DNS Records to Add

**Login:** https://my.ionos.com → Domains → survivalarsenal.com → DNS

### 1. DELETE existing records (if any)
- Delete any A record for `@` pointing to 216.24.57.1 (Base44)
- Delete any A record for `www`
- Delete any CNAME for `www`

### 2. ADD these records

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 |
| **A** | `@` (or leave blank) | `76.76.21.21` | 3600 |

**Important:** Some IONOS interfaces don't allow CNAME on root domain (`@`). If yours doesn't:
- Use the **A record** with IP `76.76.21.21` for the root domain
- Use the **CNAME** for `www`

### 3. (Optional but recommended) Add these for reliability

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `_domainconnect` | `_domainconnect.ionos.com` | 3600 |

(Only if IONOS prompts for it during domain verification.)

## Wait for Propagation

- IONOS usually propagates in **5-30 minutes**
- Some ISPs cache for up to 24 hours
- Check status: `dig survivalarsenal.com` or https://dnschecker.org

## Verify

Once propagation is done:

```bash
curl -I https://survivalarsenal.com
# Should return 200 OK from Vercel
```

In Vercel dashboard, the domain should show a green ✓ check.

## Troubleshooting

**"Domain not resolving"**
- Wait longer (up to 24h)
- Verify DNS with `dig survivalarsenal.com` → should show 76.76.21.21
- Check IONOS saved records correctly (no typos)

**"SSL certificate error"**
- Vercel auto-issues Let's Encrypt certs
- Takes 5-10 min after DNS resolves
- Vercel will show status in Domains tab

**"CNAME on root not allowed"**
- Use A record: `76.76.21.21` for root
- Or use ALIAS/ANAME record if IONOS supports it (modern IONOS does)

## Once Live

- Visit https://survivalarsenal.com
- Test Buy Now buttons (currently placeholder links — replace with Stripe Payment Links)
- Update DNS in IONOS if you want to add subdomains later (e.g., `admin.survivalarsenal.com`)
