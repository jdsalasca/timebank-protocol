# Implementation Playbook

## 1. Intake

- Pick one `agent-ready` issue in active milestone.
- Validate acceptance criteria are measurable.

## 2. Design

- Define protocol rule impacts first.
- Draft API contract changes.
- Plan frontend views for coordinator/member impact.

## 3. Build

- Implement backend rule and endpoint changes.
- Update `packages/contracts/openapi.yaml`.
- Integrate frontend view/state.
- Update ledger examples and docs.

## 4. Verify

Run:

```bash
npm run balances
npm run build:web
```

Run Java build when local JDK is available:

```bash
cd apps/api-java
mvn -q -DskipTests package
```

## 5. Ship

- One focused PR per issue objective.
- Include sample request/response or ledger diff.
- Link issue and milestone.

## 6. Post-merge

- Update issue status labels.
- Confirm auto kanban refresh succeeded.
