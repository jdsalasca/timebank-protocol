# AGENTS.md

## Mission

Timebank Protocol enables trustworthy mutual-aid economies where hours are the unit of value.

## Product Principles

- Fairness first: protocol must protect participants from abuse.
- Simplicity wins: communities should understand rules without legal complexity.
- Verifiable trust: every transfer should be auditable.
- Inclusion by design: low-tech communities must be able to participate.
- Human dignity: protocol should reinforce reciprocity, not punishment.

## Engineering Standards

- Ledger operations must be deterministic.
- Every transaction must have immutable identifiers.
- Balance computation must be reproducible from raw ledger only.
- Policy thresholds must be explicit and versioned.
- Preserve portability: JSON-first and tool-agnostic data model.

## Protocol Safety

- Enforce non-negative hours per transaction.
- Apply configurable negative balance limits.
- Track confirmations and disputes as first-class events.
- Prevent double-spend via unique transaction constraints.
- Keep moderation actions fully logged.

## Quality Gates

- Every rule change includes an example ledger.
- Add regression scenario for abuse edge cases.
- Scripts must fail loudly on invalid transaction shape.
- Keep policy assumptions documented in `docs/DECISIONS.md`.

## UX and Community Design

- Explain balances and debt clearly.
- Show "how to recover" when member is below threshold.
- Reward contribution visibility, not only debt visibility.
- Provide coordinator-friendly summaries for local groups.

## Collaboration Workflow

- Strategic ideas in `docs/ideas.md`
- Protocol decisions in `docs/DECISIONS.md`
- Implementation as linked issues and focused PRs
- Label changes by risk: `protocol-critical`, `fairness`, `anti-abuse`

## Labels Convention

- `protocol-critical`: touches core ledger invariants.
- `fairness`: affects participation equity.
- `anti-abuse`: fraud prevention and trust controls.
- `pilot-ready`: deployable in a real community trial.

## Release Checklist

- Ledger script validates full sample dataset.
- Negative threshold enforcement test passes.
- Known failure modes documented.
- Pilot playbook updated.

## North-Star Metrics

- active members exchanging hours monthly
- successful service completions ratio
- dispute rate per 100 transactions
- average time for members to return to healthy balance

## Monorepo Implementation Contract

- v1 stack is fixed: Java backend + React frontend.
- Ledger invariants and trust scoring are backend-owned.
- Frontend must never compute canonical balances.
- Every issue should map to backend, contract, and UI impacts.

## Agent Handoff Template

When closing an issue, agents must provide:

- backend modules changed
- frontend flows changed
- contract files updated
- sample ledger/event before vs after
- risk notes and mitigation
## Agent Operations

- Agent hard rules: `.agentic-rules`
- Gemini project context: `GEMINI.md`
- Gemini execution guide: `GEMINI_INSTRUCTIONS.md`
- Codex execution contract: `CODEX.md`
- Playwright visual protocol: `docs/agent/playwright-visual-protocol.md`
- Playbook: `docs/IMPLEMENTATION_PLAYBOOK.md`
- Definition of Done: `docs/DEFINITION_OF_DONE.md`
- PR checklist: `docs/PR_REVIEW_CHECKLIST.md`
- System prompt: `docs/agent/SYSTEM_PROMPT.md`
## Excellence Pack

- Engineering standards: `docs/ENGINEERING_STANDARDS.md`
- Backend standards: `docs/BACKEND_EXCELLENCE.md`
- UX standards: `docs/UX_EXCELLENCE.md`
- Test strategy: `docs/TEST_STRATEGY.md`
- Security baseline: `docs/SECURITY_BASELINE.md`
- Observability guide: `docs/OBSERVABILITY.md`
- ADR template: `docs/architecture/ADR_TEMPLATE.md`
- Agent gate script: `scripts/agent-gate.mjs`
- Agent gate CI: `.github/workflows/agent-gate.yml`
- Execution brief template: `docs/agent/EXECUTION_BRIEF_TEMPLATE.md`
## Release Excellence

- Release policy: `docs/RELEASE_POLICY.md`
- Changelog: `docs/CHANGELOG.md`
- Quality gate script: `scripts/release-quality-gate.mjs`
- CI workflow: `.github/workflows/release-quality-gate.yml`

## Required Agent Context (Read First)

Before implementing any issue, read:

- `AGENTS.md`
- `.agentic-rules`
- `GEMINI.md`
- `GEMINI_INSTRUCTIONS.md`
- `CODEX.md`
- `docs/agent/playwright-visual-protocol.md`
- `docs/agent/agent-capability-matrix.md`
- `docs/agent/ux-quality-bar.md`
- `docs/ideas.md`
- `docs/community/issue-backlog.md`
- `docs/community/current-backlog.md`
- `docs/agent/README.md`
- `docs/agent/user-stories.md`
- `docs/agent/process-flows.md`
- `docs/agent/system-design.md`
- `docs/agent/execution-checklists.md`

## Mandatory Delivery Rules

- One primary objective per PR.
- Include backend + contract + frontend impact notes.
- Include explicit acceptance criteria and test evidence.
- Never merge with failing CI.
- Keep canonical balances backend-owned; frontend rendering only.

## AI Failure Patterns and Guardrails (Mandatory)

These rules were added from recurring AI-generated mistakes in this repository.

- Do not commit generated artifacts:
  - `apps/web-react/dist/*`
  - `apps/web-react/test-results/*`
  - `*.png` and `*.jpg` screenshots generated during tests/audits
  - temporary logs and local cache files
- Do not introduce hidden dependency churn:
  - never add test or UI tooling dependencies unless the issue explicitly requires it
  - if a dependency is added, justify it in PR summary
- Do not mutate files outside scope:
  - if the task is docs/backlog, do not modify runtime code
  - if the task is backend-only, do not redesign frontend styles
- Do not weaken quality gates:
  - no `-DskipTests` for backend validation in CI
  - no bypass of required checks
- Do not ship malformed markdown/json:
  - never commit escaped newline literals like `` `n `` as documentation bullets
  - ensure `package.json` remains valid JSON with no trailing literal escape text
- Do not mix unrelated work:
  - avoid bundling UI redesign + backend + docs automation in one PR unless requested
  - keep one objective and one rollback path

## Hard Validation Before Push

Run these before push:

- `npm run quality:quick`
- `npm run backlog:current:check`
- `npm run agent:context:check`

If backend Java files changed, also run:

- `mvn -q test` in `apps/api-java`

If frontend files changed, also run:

- `npm run agent:ux:pw -- open http://localhost:5173 --headed`
- `npm run agent:ux:pw -- snapshot`
- `npm run agent:ux:pw -- screenshot output/playwright/<name>.png`

## Execution Governance Rules (Expanded)

- Every ledger rule change must include invariant and replay tests.
- Every trust score change must expose explainability fields.
- Every fairness dashboard update must include intervention guidance.
- Every moderation flow must preserve immutable audit records.
- Every release must communicate participant impact in plain language.

## Docker Runtime Baseline

- Local and deployment runtime must be defined in `infra/docker-compose.yml`.
- Development overrides must be defined in `infra/docker-compose.dev.yml`.
- Frontend API target must be configurable via `VITE_API_BASE_URL`.
- Health checks are required before considering deployment successful.

## Agent PR Hygiene Workflow

- Workflow: `.github/workflows/agent-pr-hygiene.yml`
- Script: `scripts/agent-pr-hygiene.mjs`
- PRs must include Story ID, verification evidence, and rollback plan.


## Agent Input Pack

Use these inputs before implementation:

- `docs/agent/prompt-library.md`
- `docs/agent/quality-rubric.md`
- `docs/agent/test-scenario-pack.md`
- `docs/agent/failure-playbook.md`
- `docs/agent/change-risk-matrix.md`
- `docs/agent/agent-handshake-protocol.md`
- `docs/agent/backlog-expansion-seeds.md`

## Agent Evaluation Gate

- Workflow: `.github/workflows/agent-evaluation.yml`
- Script: `scripts/agent-evaluate-pr.mjs`
- Minimum score default: `8/12`
- PRs below threshold must be revised before merge.

## Agent Quality Review Workflow

- Workflow: `.github/workflows/agent-quality-review.yml`
- Trigger: weekly + manual
- Source: `docs/metrics-history.md`
- Output: one issue per week with trends and action checklist.

## Technical and Functional Input Pack

Required references before implementation:

- `docs/agent/functional-requirements.md`
- `docs/agent/technical-requirements.md`
- `docs/agent/integration-test-matrix.md`
- `docs/agent/security-abuse-checklist.md`
## Agent Context Check

- Workflow: `.github/workflows/agent-context-check.yml`
- Script: `scripts/agent-context-check.mjs`
- Purpose: fail PRs missing mandatory technical/functional agent context.

## Domain Decision Governance

- Pack: docs/agent/domain-decision-pack.md
- ADR index: docs/architecture/decision-index.md
- Gate: .github/workflows/contract-adr-gate.yml
- Script: scripts/check-contract-adr.mjs
- Rule: contract changes require ADR updates in the same PR.
