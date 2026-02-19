# Executable User Stories

## P0 Stories

### TBP-P0-001 Ledger Schema Hardening
- Persona: protocol maintainer.
- Problem: inconsistent transaction shape causes trust and accounting failures.
- Scope: strict schema validation, replay protection, shape rejection reasons.
- Acceptance criteria:
  - invalid ledger events are rejected with deterministic error codes,
  - duplicate transaction IDs cannot be applied twice,
  - schema version is included in validation output.
- Test plan: schema tests, replay attack fixtures, invalid payload tests.

### TBP-P0-002 Deterministic Balance Engine
- Persona: coordinator and auditor.
- Problem: balances cannot depend on mutable caches.
- Scope: recompute balances exclusively from raw ledger events.
- Acceptance criteria:
  - recomputation from same ledger always yields same balances,
  - balance endpoint includes calculation version metadata,
  - discrepancy detection between snapshots and recompute exists.
- Test plan: deterministic snapshots, large ledger fixtures, drift tests.

### TBP-P0-003 Immutable Event IDs
- Persona: audit team.
- Problem: mutable or missing identifiers break auditability.
- Scope: immutable IDs for transactions, confirmations, disputes, moderation actions.
- Acceptance criteria:
  - each event has stable ID and timestamp,
  - event lineage can be traced by API and export.
- Test plan: repository persistence tests and lineage checks.

### TBP-P0-004 Threshold Policy Enforcement
- Persona: community governance coordinators.
- Problem: negative balances can spiral without explicit policy.
- Scope: configurable threshold limits and recovery workflows.
- Acceptance criteria:
  - threshold violations are flagged with reason code,
  - recovery suggestions are surfaced in coordinator view,
  - policy version is attached to enforcement events.
- Test plan: threshold edge-case tests and policy switch tests.

### TBP-P0-005 Dispute and Confirmation Event Model
- Persona: participants and moderators.
- Problem: dispute handling is not structured end-to-end.
- Scope: first-class events + status transitions + audit references.
- Acceptance criteria:
  - completion requires confirmation state,
  - disputes produce explicit lifecycle states,
  - unresolved dispute count visible in dashboard data.
- Test plan: dispute flow integration tests.

### TBP-P0-006 Anti-Abuse Alerts
- Persona: risk moderator.
- Problem: suspicious debt and velocity patterns go unnoticed.
- Scope: anomaly flags for high-risk patterns.
- Acceptance criteria:
  - alerts include reason taxonomy,
  - alert thresholds configurable,
  - false positives can be marked with audit note.
- Test plan: anomaly fixture tests and threshold tuning tests.

### TBP-P0-007 Coordinator Dashboard v1
- Persona: community coordinator.
- Problem: no consolidated view of fairness and risk.
- Scope: fairness board + top unmet needs + aging queue.
- Acceptance criteria:
  - dashboard shows active members, debt concentration, unresolved disputes,
  - list supports filtering by category and urgency.
- Test plan: component tests and API integration tests.

### TBP-P0-008 Ledger Reproducibility Gate
- Persona: maintainers.
- Problem: silent protocol behavior drift.
- Scope: CI gate using golden ledger dataset.
- Acceptance criteria:
  - any drift in balances/flags fails CI,
  - diff output identifies changed members/events.
- Test plan: drift fixture + stable fixture.

## P1 Stories

### TBP-P1-001 Reputation Scoring and Explainability
### TBP-P1-002 Weekly Operations Digest Automation
### TBP-P1-003 Policy Metadata Versioning
### TBP-P1-004 Dispute Triage Workflow

## P2 Stories

### TBP-P2-001 Federation Contract Starter
### TBP-P2-002 Proof-of-Care Prototype
### TBP-P2-003 Offline-First Mobile Blueprint

## New Detailed Stories (Execution Pack Expansion)

### TBP-P1-005 Member Recovery Guidance Engine
- Goal: provide actionable steps for members under threshold.
- Acceptance: API returns recovery recommendations by policy profile.

### TBP-P1-006 Trust Explainability Timeline
- Goal: show why trust score changed over time.
- Acceptance: timeline endpoint with event-level factors and metadata.

### TBP-P1-007 Pilot Health Snapshot Export
- Goal: export weekly protocol health packet for coordinators.
- Acceptance: downloadable report includes fairness, disputes, and fulfillment metrics.

### TBP-P2-004 Policy Simulation Sandbox
- Goal: simulate threshold/reputation changes before applying.
- Acceptance: sandbox returns before/after distribution and risk deltas.

### TBP-P2-005 Low-Connectivity Mobile Workflow
- Goal: support field operations with intermittent connectivity.
- Acceptance: offline queue design + sync conflict policy documented.
