# CODEX.md

## Codex Execution Contract (Timebank Protocol)

This file defines mandatory behavior for Codex-based implementation agents.

## Mission Alignment

- Keep ledger and trust rules deterministic, explainable, and auditable.
- Preserve backend ownership of canonical balances and protocol invariants.
- Prefer small, reviewable changes with explicit rollback.
- Follow `docs/agent/agent-capability-matrix.md` and `docs/agent/ux-quality-bar.md`.

## Non-Negotiable Rules

- One objective per PR.
- No generated artifacts in commits (`dist`, `test-results`, screenshots, temp output files).
- No dependency additions unless explicitly required by the issue.
- No hidden or undocumented API/policy changes.
- No CI weakening (never skip tests in backend validation).
- No malformed docs/config (invalid JSON, broken markdown formatting).
- Frontend-impacting PRs must include Playwright CLI visual evidence.

## Required Pre-Push Verification

- `npm run quality:quick`
- `npm run backlog:current:check`
- `npm run agent:context:check`
- If Java backend changed: run `mvn -q test` in `apps/api-java`
- If frontend changed: run Playwright CLI flow audit and attach evidence paths

## Scope Discipline

- Backend issue: avoid unrelated frontend redesign.
- Docs/backlog issue: avoid runtime behavior changes.
- CI issue: avoid product logic changes unless needed for fix.

## PR Evidence Template

- Objective:
- Files changed:
- Validation commands executed:
- Contract/policy impact:
- Risks:
- Rollback:
- UX Evidence (Playwright):
