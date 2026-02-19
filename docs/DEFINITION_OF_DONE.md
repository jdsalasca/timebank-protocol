# Definition of Done

An issue is Done only when all domains are complete.

## Backend

- Protocol logic implemented in Java services/controllers.
- Input validation and explicit error paths included.
- No ledger/trust logic only on frontend.

## Contracts

- OpenAPI updated for all response/request changes.
- Contract fields aligned with runtime payloads.

## Frontend

- Reads backend data and displays state correctly.
- Includes loading/error/empty behavior.
- Coordinator-facing messages are actionable.

## Docs and examples

- Rule changes documented.
- Examples updated with new fields/flows.

## Verification

- `npm run balances` passes.
- `npm run build:web` passes.
- Java build passes or blocker documented.

## Governance

- PR linked to issue.
- Priority/milestone/status labels consistent.
