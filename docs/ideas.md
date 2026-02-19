# ideas.md

## Vision

Make mutual aid scalable and trustworthy through an open, auditable time-credit protocol.

## Strategic Outcome

- More people can exchange help even without cash.
- Communities coordinate support faster and with less friction.
- Trust grows through transparent, fair protocol rules.

## Priority Matrix (Now / Next / Later)

## Now (0-30 days)

- Ledger format hardening:
  - strict transaction schema
  - unique tx validation
  - replay protection basics
- Core balance engine v1:
  - deterministic calculations
  - threshold policy checks
- Simple coordinator report:
  - top contributors
  - members below threshold
  - unresolved disputes count
- Contribution UX basics:
  - service categories
  - matching by skill tags

## Next (30-90 days)

- Messaging workflows:
  - request accepted notification
  - completion reminder
  - pending confirmation alerts
- Reputation model v1:
  - on-time completion score
  - confirmation reliability
  - dispute behavior signal
- Dashboard v2:
  - network health index
  - service demand heatmap
  - transaction velocity trend
- Anti-abuse controls:
  - suspicious pattern flags
  - rapid debt accumulation alerts

## Later (90-180 days)

- Cross-community interoperability:
  - federation between local timebanks
  - optional trust bridges
- Governance module:
  - policy voting by community
  - transparent rule-change log
- Mobile-first field app:
  - low-connectivity mode
  - offline transaction signing

## High-Impact Modules

- Ledger Core
- Matching Engine
- Reputation Engine
- Community Operations Dashboard
- Messaging and Reminder Relay
- Governance and Policy Toolkit

## Messaging Features (Engagement and Reliability)

- "Need posted" confirmation
- "Volunteer matched" notification
- "Please confirm completion" nudges
- "Community weekly impact" digest
- "Urgent needs" broadcast mode

## Dashboard Ideas

- Network Health:
  - active members this week
  - completion rate
  - dispute ratio
- Fairness Board:
  - contribution distribution
  - debt concentration alerts
- Impact Board:
  - hours exchanged by category
  - people supported estimate

## Top Problem Lists

- Weekly top unmet needs
- Most requested services by neighborhood
- Longest waiting requests
- Most repeated dispute causes

## Matching and Coordination Ideas

- skill + availability matching
- distance-aware local matching
- urgency-aware queue
- "buddy mode" for first-time participants

## Anti-Abuse and Trust Ideas

- velocity limits for new members
- two-party confirmations for high-hour exchanges
- flagged pattern review queue
- temporary trust caps until reputation matures

## Pilot Program Ideas

- Pilot A: neighborhood support collective (30-80 members)
- Pilot B: university student mutual-aid network
- Pilot C: local NGO volunteer exchange

## Metrics for Real Impact

- total hours exchanged per month
- percentage of requests fulfilled within target time
- member retention after 60 days
- dispute resolution median time

## Open Source Growth Ideas

- timebank starter template for local communities
- public pilot reports and case studies
- contributor recognition board
- protocol translation packs (ES/EN/PT)

## Prioritized Backlog (Execution Order)

1. Schema validation and ledger hardening
2. Reputation events and anti-abuse alerts
3. Matching engine prototype
4. Coordinator dashboard
5. Messaging relay integration
6. Federation support

## Big Bet Experiments

- "Time Wallet": portable identity + balance passport.
- "Community Credit Insurance": risk pool for high-demand periods.
- "Proof-of-Care": verifiable attestations for recurring support.

## Risks and Mitigations

- Risk: protocol complexity hurts adoption.
  Mitigation: simple defaults + layered advanced options.
- Risk: abuse by bad actors.
  Mitigation: thresholds, alerts, moderator workflows.
- Risk: low engagement after onboarding.
  Mitigation: reminders, recognition loops, visible impact reports.

## Implementation Blueprint (Java + React Monorepo)

### Backend (Java)

- LedgerController + validation services
- ReputationService + event processing
- MatchingService + ranking explainability
- AlertService for anti-abuse and coordinator actions

### Frontend (React)

- Coordinator dashboard
- Member trust and balance views
- Matching queue monitor
- Weekly impact digest view

### Data and Contracts

- OpenAPI for service contracts
- JSON ledger examples as regression baseline
- Versioned policy metadata for threshold changes

## Additional High-Impact Ideas

- verified completion attestations
- trust circles for local micro-communities
- multilingual member onboarding assistant
- fairness heatmap by zone and service category
- offline-first mobile check-in mode

## Detailed Execution Assets

- Story catalog: `docs/agent/user-stories.md`
- Process diagrams: `docs/agent/process-flows.md`
- System design: `docs/agent/system-design.md`
- Delivery checklists: `docs/agent/execution-checklists.md`

## Additional High-Impact Initiatives

### P0 Additions

- Trust and risk panel for coordinator decision support.
- Ledger event reason taxonomy for disputes and moderation.
- Member recovery guidance for negative balance states.
- Data-quality monitor for malformed transaction sources.

### P1 Additions

- Reputation explainability cards in dashboard.
- Community operations digest with unresolved risk sections.
- Protocol health score report automation.
- Coordinator incident-response runbook.

### P2 Additions

- Federation trust bridge policies.
- Policy simulation sandbox.
- Proof-of-care public verification layer.
