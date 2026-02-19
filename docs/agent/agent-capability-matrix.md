# Agent Capability Matrix

Defines the minimum capability baseline for Codex/Gemini agents.

## Capability Lanes

1. `backend-java`
- Spring Boot API/protocol changes.
- Ledger invariants and deterministic trust logic.
- Test coverage with `mvn -q test`.

2. `frontend-react`
- React/TypeScript UX implementation.
- Accessibility and responsive behavior.
- Visual validation using Playwright CLI.

3. `contracts-governance`
- OpenAPI and policy-metadata consistency.
- Contract drift prevention between API and UI.
- Backward-compatibility notes and migration impact.

4. `docs-operations`
- Story updates, decision rationale, and operator notes.
- Backlog maintenance and runbook hygiene.
- PR evidence completeness.

5. `quality-security-fairness`
- Reproducible checks and CI signal integrity.
- Security and abuse safeguards.
- Fairness and explainability controls.

## Mandatory Capability Checklist

Before closing a task, agents must confirm:

- Lane(s) affected are explicitly listed in PR.
- Validation commands were executed and reported.
- Risk/rollback is documented.
- UX evidence is attached when frontend is touched.
