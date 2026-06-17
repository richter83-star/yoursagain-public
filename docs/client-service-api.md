# YoursAgain Client Service API

This document defines the public client-service API that powers the homeowner
portal on yoursagain.net. It is deliberately separate from the internal
operator dashboard and the OSINT autopilot backend.

## Isolation principles

1. The client-service only returns data scoped to the authenticated client.
2. It never exposes operator notes, OSINT sources, other clients, or internal
   deal IDs.
3. All responses are read-only from the client perspective. State changes
   (messages, document requests) are logged and reviewed by a human.
4. Every request is audit-logged.

## Endpoints

### `POST /auth/login`

Request:
```json
{
  "email": "client@example.com",
  "caseReference": "YA-2026-TX-01482",
  "otpOrPassword": "..."
}
```

Response:
```json
{
  "accessToken": "...",
  "refreshToken": "...",
  "expiresAt": "..."
}
```

### `POST /auth/refresh`

Refresh access token.

### `GET /cases`

List cases for the authenticated client.

Response:
```json
{
  "cases": [
    {
      "reference": "YA-2026-TX-01482",
      "maskedPropertyAddress": "7421 Oak R*** Blvd, Au****, TX",
      "status": "Filing",
      "statusLabel": "Claim Filed",
      "openedAt": "2026-03-12",
      "estimatedRecoveryLow": 127000,
      "estimatedRecoveryHigh": 154000,
      "nextStep": "Awaiting county response to demand letter.",
      "nextDeadline": "2026-07-15"
    }
  ]
}
```

### `GET /cases/:reference`

Full case details, documents, and messages for one case.

### `GET /cases/:reference/documents`

List documents.

### `GET /cases/:reference/messages`

List messages from the case team.

### `POST /cases/:reference/messages`

Send a message to the case team. Creates a pending message; human review before
final response.

## Implementation

Because `next export` disables API routes and middleware, the production public
site should be paired with a small backend service that implements this API.
Options:

1. **Next.js on a serverful host (Vercel, Railway, self-hosted Node)**
   - Keep App Router API routes under `src/app/api/client/...`
   - Middleware at `src/middleware.ts` protects `/portal/dashboard`
   - This is the simplest path if you want to keep everything in one repo.

2. **Separate FastAPI service**
   - Matches the OSINT autopilot stack style.
   - Stronger isolation: public site cannot accidentally touch operator DB.

3. **Static export + edge functions**
   - Keep the marketing site static on a CDN.
   - Host the portal as a separate authenticated app or use Vercel/Cloudflare
     edge functions for the API.
