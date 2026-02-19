# CLAUDE.md

## Objective

Run, test, and deploy Timebank Protocol reliably with Docker.

## Canonical Commands

### Dev mode

```bash
docker compose -f infra/docker-compose.yml -f infra/docker-compose.dev.yml up --build
```

### Prod-like mode

```bash
docker compose -f infra/docker-compose.yml up --build -d
```

### Stop

```bash
docker compose -f infra/docker-compose.yml -f infra/docker-compose.dev.yml down
```

## Verification Checklist

- API: `http://localhost:8082/actuator/health`
- Web: `http://localhost:3003` (prod-like) or `http://localhost:5174` (dev)
- If web cannot reach API, check `VITE_API_BASE_URL` and nginx `/api` proxy.

## Constraints

- Do not move ledger/trust logic to frontend.
- Do not deploy with failing health checks.
- Keep compose files as single source of runtime truth.

## GHCR Deployment

Use published images from GitHub Container Registry:

```bash
API_IMAGE=ghcr.io/jdsalasca/timebank-protocol-api:latest \
WEB_IMAGE=ghcr.io/jdsalasca/timebank-protocol-web:latest \
docker compose -f infra/docker-compose.yml -f infra/docker-compose.ghcr.yml up -d
```

Or via npm script:

```bash
npm run docker:ghcr:up
```
