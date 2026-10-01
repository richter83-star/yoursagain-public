# Deployment

## Before the first production deploy
1. Fill every required field in `src/lib/site.ts` (entity, address, phone, email,
   attorney/firm). `npm run build` **refuses to build** until they are set.
2. Work through `CLAIMS.md` and confirm or reword each claim.

## Docker (Coolify / VPS) — recommended
```bash
docker build -t yoursagain-public .
docker run -p 8080:80 yoursagain-public
```
The image builds the static export and serves it with `nginx.conf`, which:
- redirects plain-HTTP requests (via `X-Forwarded-Proto`) to HTTPS,
- sends HSTS, CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy,
- uses relative redirects so trailing-slash redirects never drop to HTTP,
- caches hashed assets for a year.

TLS terminates at the proxy in front (Coolify/Traefik). In Coolify, also enable
"Force HTTPS" for the domain.

## Leads
The contact form inserts into `public.site_leads` in the Supabase project
"Dracanus" (`ohapewokvylhzuwcqdgn`) using the public publishable key. Anonymous
users can only INSERT (no reads). View leads in Supabase → Table editor →
`site_leads`. Migrations are in `supabase/migrations/`.

Note: free-tier Supabase projects pause after a period of inactivity. If the
form ever fails, it tells the visitor nothing was saved and shows phone/email.
Consider a paid plan or a weekly keep-alive, and an email alert on new rows
(Supabase Database Webhook → n8n).

## Local preview with placeholders
```bash
ALLOW_INCOMPLETE_SITE=1 npm run build   # writes dist/
```
