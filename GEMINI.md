# GEMINI.md - Timebank Protocol Context

## Project Overview

Timebank Protocol is a monorepo platform for verifiable hour-based mutual aid exchange.

- Backend: Java 21 + Spring Boot (`apps/api-java`)
- Frontend: React + TypeScript + Vite (`apps/web-react`)
- Contracts: OpenAPI in `packages/contracts/openapi.yaml`
- Core logic: deterministic ledger, policy thresholds, and trust controls

## Mission-Critical Constraints

- Canonical balances are backend-owned.
- Policy and anti-abuse rules must be explicit and auditable.
- Frontend renders protocol state; it does not define protocol truth.

## Required Quality Gates

- `npm run balances`
- `npm run build:web`
- `npm run backlog:current:check`
- `npm run agent:context:check`
- If Java backend changed: `mvn -q test` in `apps/api-java`
- Frontend-impacting changes must include Playwright CLI visual evidence (`output/playwright/*`)

## Anti-Regression Rules for Gemini

- Never commit generated artifacts (`dist`, `test-results`, screenshots, temp logs).
- Never add dependencies for convenience; only add when issue scope requires and justify in PR.
- Never change unrelated layers in same PR.
- Never ship malformed markdown or JSON.
- Never weaken checks (`skipTests`, bypass CI, incomplete verification evidence).
- Never ship frontend changes without Playwright CLI flow audit evidence.

## PR Summary Requirements

- Objective and story/issue ID
- Files changed by layer (backend/frontend/contracts/docs)
- Validation commands and outcomes
- Contract impact and migration impact
- Risks and rollback plan
