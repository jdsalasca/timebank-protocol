# Current Backlog (2026-02-19)

Operational backlog snapshot for immediate execution in Timebank Protocol.

## Current State

- Ledger core and balance computation baseline are present.
- Agent governance artifacts and quality workflows exist.
- Prioritized issue backlog is already seeded for community execution.

## Now (Next 7 Days)

1. Harden ledger invariants.
   - Enforce immutable event IDs and replay protection checks.
   - Add deterministic recomputation tests from raw events.
   - Validate negative-balance threshold enforcement paths.
2. Raise trust and anti-abuse baseline.
   - Add velocity anomaly detection for new members.
   - Add debt accumulation risk alerts and operator actions.
3. Improve coordinator execution visibility.
   - Add fairness/risk panel with top unmet needs and queue aging.
   - Publish explainability for balance and threshold decisions.
4. Protect delivery quality.
   - Ensure `npm run quality:quick` passes and is documented.
   - Add CI checks for reproducibility of ledger outputs.

## Next (7-21 Days)

1. Matching and operations workflows.
   - Skill + availability matching v1.
   - Request accepted/completion reminder automation.
2. Dispute and trust lifecycle.
   - First-class dispute events with triage workflow.
   - Member recovery guidance for negative-balance states.
3. Protocol transparency.
   - Versioned policy metadata and assumptions.
   - Monthly protocol health report generation.

## P0 Execution Queue (Agent Order)

1. `story:TBP-P0-001` harden ledger schema and replay protections.
2. `story:TBP-P0-002` implement deterministic balance recomputation.
3. `story:TBP-P0-004` add negative threshold policy enforcement.
4. `story:TBP-P0-006` ship anti-abuse anomaly alerts for debt velocity.
5. `story:TBP-P0-008` add reproducibility gate for ledger outputs.

## Definition of Ready for Any New Story

- Story ID exists in `docs/community/issue-backlog.md`.
- Acceptance criteria and validation commands are explicit.
- Contract and rollback notes are included.
- Owner lane assigned (backend, frontend, docs, ops).
