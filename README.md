<p align="center">
  <img src="assets/logo.svg" alt="Timebank Protocol" width="760" />
</p>

# Timebank Protocol

Monorepo platform for mutual-aid economies where value is exchanged in verifiable hours.

## Official Stack

- Backend: Java 21 + Spring Boot
- Frontend: React + TypeScript + Vite
- Data: PostgreSQL (planned), JSON ledger MVP now
- Contracts: OpenAPI in `packages/contracts`

## Monorepo Layout

- `apps/api-java`: protocol services, ledger rules, reputation, anti-abuse
- `apps/web-react`: coordinator dashboard and member-facing flows
- `packages/contracts`: API and event contracts
- `infra`: local runtime and deployment assets
- `docs`: governance, ideas, and execution standards

## Quick start

### Current MVP scripts

```bash
npm install
npm run balances
```

### Web app

```bash
cd apps/web-react
npm install
npm run dev
```

### Java API

```bash
cd apps/api-java
./mvnw spring-boot:run
```

## Launch resources

- Demo GIF: `assets/demo.gif`
- Architecture GIF: `assets/architecture.gif`\n- Architecture SVG: `assets/stack-map.svg`
- Landing: `docs/index.html`
- Execution ideas: `docs/ideas.md`
- Agent playbook: `AGENTS.md`

## Vision

Create a portable, auditable social economy layer for communities.

## Visual Assets

- Brand kit: `assets/brand-kit.md`
- Mark: `assets/logo-mark.svg`
- Wordmark: `assets/logo-wordmark.svg`
- Banner SVG: `assets/banner.svg`
- Social card PNG: `assets/social-card.png`
- Logo PNG: `assets/logo-512.png`

## Docker Quickstart

- Dev (hot reload): `npm run docker:dev:up`
- Prod-like: `npm run docker:prod:up`
- Stop: `npm run docker:dev:down`

See full guide: `docs/DOCKER_CLAUDE.md` and `CLAUDE.md`.

## GHCR Quickstart

- Use prebuilt images: `npm run docker:ghcr:up`
- Stop GHCR deployment: `npm run docker:ghcr:down`
- CI image workflow: `.github/workflows/docker-images.yml`
