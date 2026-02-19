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
