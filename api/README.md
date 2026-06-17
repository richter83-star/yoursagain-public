# YoursAgain Client Service API

This folder defines the **public client-service API** that powers the homeowner
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

## Future

This API can be implemented as:
- A Next.js App Router API (`src/app/api/client/...`)
- A separate FastAPI service
- A thin wrapper over the operator dashboard's sanitized read model

For the MVP, the portal uses demo data. The API contract above is the target.
