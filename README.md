# Strata Dashboard

**AI Portfolio Management** — Track, measure, and manage your AI initiatives in one place.

[![GitHub stars](https://img.shields.io/github/stars/maree217/strata?style=social)](https://github.com/maree217/strata/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

![Dashboard Preview](./assets/dashboard-preview.png)

## What It Does

- **Portfolio View** — See all AI initiatives at a glance
- **Pipeline Tracking** — Move projects from Idea → Alpha → Beta → Live
- **Cost Monitoring** — Track spend across your AI portfolio (FinOps)
- **Compliance Docs** — Generate EU AI Act documentation with Gemini

## Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maree217/strata/tree/main/tools/dashboard)

Or run locally:

```bash
git clone https://github.com/maree217/strata
cd strata/tools/dashboard
npm install && npm run dev
```

Open [localhost:5173](http://localhost:5173)

---

## Toolkit & Resources

Templates and guides to go with the dashboard:

| Resource | Description |
|----------|-------------|
| [AI Idea Canvas](./tools/templates/idea-canvas.md) | Capture and evaluate AI opportunities |
| [Experiment Log](./tools/templates/experiment-log.md) | Track experiments and learnings |
| [Prioritisation Matrix](./tools/templates/prioritisation-matrix.md) | Score initiatives by value/effort |
| [Self-Assessment](./docs/framework/assessment.md) | 54-point AI maturity scorecard |

### Related Projects

- [UK Public Sector AI Solutions](https://github.com/maree217/uk-public-sector-ai-solutions) — Government-focused AI patterns
- [AI Capability Builder](https://aicapabilitybuilder.com) — Enterprise AI consulting

---

## Why This Approach Works

Most AI projects fail because teams build demos before foundations.

Strata follows a **three-layer architecture**:
1. **Infrastructure** first (costs, security, monitoring)
2. **Intelligence** second (data, ML ops, learning loops)
3. **Experience** last (chatbots, dashboards, automations)

Each layer funds the next. [Read the methodology →](./docs/philosophy/)

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS |
| Hosting | Vercel / Firebase |
| Database | Firestore (optional) |
| AI | Google Gemini API |

---

## Contributing

- **Star** to bookmark for later
- **Fork** to use the dashboard
- PRs welcome for templates and docs

---

## License

MIT — use freely.

---

Created by [Ram Maree](https://linkedin.com/in/rammaree) — helping organisations operationalise AI.
