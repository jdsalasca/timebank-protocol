# PR Review Checklist

## Scope

- [ ] PR targets one issue objective.
- [ ] No unrelated code path changes.

## Protocol integrity

- [ ] Canonical balance/trust logic in backend.
- [ ] Anti-abuse rule behavior is explicit.
- [ ] Rule changes documented with examples.

## Contracts and frontend

- [ ] OpenAPI updated.
- [ ] Frontend reflects contract accurately.
- [ ] Loading/error/empty states present.

## Verification

- [ ] `npm run balances`
- [ ] `npm run build:web`
- [ ] Java build (or blocker documented)

## Fairness and trust

- [ ] No hidden policy shifts.
- [ ] Alerts/messages are understandable.

## Release hygiene

- [ ] Docs updated.
- [ ] Issue references and labels updated.
