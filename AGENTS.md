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
