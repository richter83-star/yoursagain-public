# Deployment

## Static export (simplest)

```bash
npm install
npm run build
```

Upload `dist/` to any static host (Cloudflare Pages, Netlify, GitHub Pages, S3).

Caveats:
- API routes and middleware are disabled.
- The client portal login uses demo cookie auth only.
- Security headers in `next.config.mjs` are ignored; configure them at the CDN/host level.

## Serverful deploy (recommended for portal)

Deploy to Vercel, Railway, or a self-hosted Node server.

1. Remove `output: "export"` from `next.config.mjs` if you want SSR/ISR.
2. Restore the API routes in `src/app/api/client/...` and `src/middleware.ts`.
3. Configure environment variables in `.env.local`.
4. Set security headers at the host level or rely on `next.config.mjs` headers.

## TLS

The production domain `yoursagain.net` currently uses a self-signed certificate.
Before launch, replace it with a valid certificate from Let's Encrypt or your host.

## Recommended production architecture

```
CDN / edge
  ├── yoursagain.net (marketing pages, static)
  └── portal.yoursagain.net (authenticated client portal, serverful)

Client Service API (separate service)
  └── reads from sanitized client_cases view, isolated from operator DB

Operator Dashboard (existing private app)
  └── operators update case status; changes propagate to client view
```
