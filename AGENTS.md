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

- Gemini execution guide: `GEMINI_INSTRUCTIONS.md`
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
- `docs/ideas.md`
- `docs/community/issue-backlog.md`
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

- Workflow: .github/workflows/agent-pr-hygiene.yml`n- Script: scripts/agent-pr-hygiene.mjs`n- PRs must include Story ID, verification evidence, and rollback plan.


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
