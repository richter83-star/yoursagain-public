# YoursAgain Public Site

Public-facing marketing site + secure client portal for YoursAgain.

## Scope

- Marketing pages: Home, About, Process, FAQ, Contact, Eligibility
- Client portal: login + case status dashboard
- Strictly isolated from the internal operator dashboard and OSINT backend.

## Tech stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Lucide icons

## Security notes

- `next.config.mjs` sets strict security headers (CSP, frame options, etc.).
  Note: headers are only applied by a serverful host; static export strips them.
- Client portal currently uses demo cookie auth. Production requires real
  auth (password + MFA or magic links), row-level data filtering, and audit
  logging.
- No operator data, OSINT tools, or other clients are exposed.
- See `docs/client-service-api.md` for the production portal API contract.

## Development

```bash
npm install
npm run dev
```

Serves on `http://localhost:3000`.

## Build

```bash
npm run build
```

Static export is written to `dist/`.

## Visual assets

See `ASSETS.md` for Higgsfield generation commands. Place generated images in
`public/images/`.
