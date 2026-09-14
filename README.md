# Master Control — Studio Dashboard

Studio control plane for 6 apps: status, features done, marketing, links. See REGISTRY.json (source of truth).

## Dev
```
npm install
cp .env.example .env
npm run dev
```

## Rules
- Reads per-app status via API, never direct cross-DB reads.
- shadcn-style tables + status pills, responsive 360/768/1440, no 3D.
- Every change updates REGISTRY.json + docs/HANDOVER.md.
