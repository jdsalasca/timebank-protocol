# GEMINI_INSTRUCTIONS.md

## Objective

Implement roadmap issues with protocol-grade reliability for Timebank Protocol.

## Product context

Timebank Protocol enables communities to exchange support using verifiable hour credits.

## Mandatory stack

- Backend: Java 21 + Spring Boot
- Frontend: React + TypeScript + Vite
- Contracts: OpenAPI in `packages/contracts/openapi.yaml`
- Data shape: JSON ledger now, PostgreSQL-ready later

## Work execution protocol (required)

1. Select one issue labeled `agent-ready`.
2. Read before coding:
   - `AGENTS.md`
   - `docs/STACK.md`
   - `docs/MONOREPO.md`
   - `docs/ideas.md`
   - `docs/kanban.md`
3. Create branch: `feat/<issue-number>-<short-slug>`.
4. Implement in order:
   - backend protocol rule
   - contract update
   - frontend integration
   - docs/example update
5. Verify and open PR with structured summary.

## Non-negotiable protocol rules

- Canonical balances must be backend-computed.
- Anti-abuse checks must be explicit and configurable.
- Ledger calculations must be deterministic.
- Any rule change must be documented with sample data.
- Frontend cannot become source of truth for trust logic.

## Required PR summary format

- Issue: `#<number>`
- Scope: backend | frontend | contracts | docs
- Protocol changes: rule(s) added/modified
- API changes: endpoints and payloads
- Data impact: ledger/event schema changes
- Verification: commands + outcomes
- Risks: fairness, abuse, or migration concerns

## Quality gates before merge

- Core script passes (`npm run balances`)
- Frontend build passes (`npm run build:web`)
- Java tests pass (`mvn -q test`)
- OpenAPI matches implementation
- Docs/examples updated for rule changes

## Critical anti-patterns (must avoid)

- Do not commit generated files (`dist`, `test-results`, screenshots, local artifacts).
- Do not add dependencies unless explicitly needed by the issue and justified in PR.
- Do not mix unrelated objectives in one PR.
- Do not modify docs with malformed escape sequences.
- Do not break valid JSON in config files.
- Do not skip tests or bypass required checks.

## Safety and fairness constraints

- Prevent silent debt/threshold policy changes.
- Keep alert reasons clear and inspectable.
- Preserve traceability of moderation and policy actions.

## When blocked

Post blocker details in issue comment with:

- exact blocker
- attempted alternatives
- minimal decision required

## Container CI/CD

- Workflow: `.github/workflows/docker-images.yml`
- On PR: builds API/Web images and runs smoke tests.
- On push to `main/develop`: publishes API/Web images to GHCR.
- Tags include `sha-*`, branch tags, and `latest` on default branch.
