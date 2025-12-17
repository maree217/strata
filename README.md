# Strata

### See Every Layer of Your AI Portfolio

[![Deploy to Firebase](https://img.shields.io/badge/Deploy%20to-Firebase-FFCA28?logo=firebase)](https://console.firebase.google.com/)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?logo=google)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/maree217/strata?style=social)](https://github.com/maree217/strata/stargazers)

---

## The Problem

**95% of AI projects fail.** Not because the technology doesn't work—but because organisations treat AI like traditional projects.

Traditional projects end. AI doesn't.

| Traditional Project | AI Initiative |
|---------------------|---------------|
| Define → Build → Deploy → **Done** | Deploy → Monitor → Learn → Iterate → **Never done** |
| Success = delivery | Success = continuous improvement |
| Fixed scope | Evolving capability |
| One-time budget | Ongoing operations |

Most organisations have no way to see, track, or manage their AI initiatives as the **living capabilities** they are.

**Strata changes that.**

---

## What is Strata?

Strata is a framework and dashboard for managing AI initiatives—from a solo consultant tracking experiments to an enterprise managing 50+ AI systems.

**Built on Google Cloud & Firebase** for simplicity, scale, and cost-effectiveness.

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR AI PORTFOLIO                     │
├─────────────────────────────────────────────────────────┤
│  📊 Dashboard        │  See all initiatives at a glance │
│  🔄 Pipeline         │  Track ideas → experiments → live│
│  📈 Impact           │  Measure what's working          │
│  🤖 Gemini-Powered   │  AI-assisted documentation       │
│  ⚖️  Governance      │  Add compliance when you need it │
└─────────────────────────────────────────────────────────┘
```

---

## Tech Stack (Google Ecosystem)

| Component | Google Service | Why |
|-----------|----------------|-----|
| **Frontend** | React + Vite | Fast, modern, deployable anywhere |
| **Hosting** | Firebase Hosting | Free tier, global CDN, easy deploys |
| **Database** | Firestore | Serverless, real-time sync, scales to zero |
| **Auth** | Firebase Auth | Google SSO, email, enterprise IdP |
| **AI Generation** | Gemini API | Document generation, analysis |
| **AI Interaction** | Gemini Live API | Voice/multimodal conversations |
| **Functions** | Cloud Functions | Serverless backend when needed |
| **Storage** | Cloud Storage | Generated documents, exports |

**Cost:** Free tier covers most small-medium deployments. Pay-as-you-go scales.

---

## Start Where You Are

| Your Situation | Start Here | Time to Value |
|----------------|------------|---------------|
| "I want to understand AI portfolio thinking" | [Level 0: Learn](./get-started/level-0-understand) | 10 minutes |
| "I want to track my AI experiments" | [Level 1: Track](./get-started/level-1-track) | 5 minutes |
| "I want a visual dashboard" | [Level 2: Visualise](./get-started/level-2-visualize) | 15 minutes |
| "I need real data persistence" | [Level 3: Integrate](./get-started/level-3-integrate) | 1 hour |
| "I need compliance and governance" | [Level 4: Govern](./get-started/level-4-govern) | As needed |

---

## Quick Start

### Option A: Deploy to Firebase (Recommended)

```bash
# Clone the repo
git clone https://github.com/maree217/strata
cd strata/dashboard

# Install dependencies
npm install

# Login to Firebase
npm install -g firebase-tools
firebase login

# Initialise Firebase project
firebase init hosting
# Select: Create a new project or use existing
# Public directory: dist
# Single-page app: Yes

# Build and deploy
npm run build
firebase deploy
```

**Your dashboard is now live at:** `https://your-project.web.app`

### Option B: Run Locally First

```bash
git clone https://github.com/maree217/strata
cd strata/dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Option C: Use Templates Only (No Code)

- [AI Idea Canvas](./templates/idea-canvas.md) — Capture AI opportunities
- [Experiment Tracker](./templates/experiment-log.md) — Log what you're testing
- [ROI Calculator](./templates/roi-calculator.html) — Estimate business value

---

## Gemini AI Features

Strata integrates **Google's Gemini API** for AI-powered capabilities:

### Currently Implemented

| Feature | Gemini Model | Description |
|---------|--------------|-------------|
| **Annex IV Doc Generator** | `gemini-2.5-flash` | Auto-generate EU AI Act compliance documentation |
| **Streaming Output** | Gemini Streaming | Real-time document generation preview |

### Roadmap (Gemini APIs)

| Feature | API | Description |
|---------|-----|-------------|
| **Voice Portfolio Review** | Gemini Live API | Talk through your portfolio hands-free |
| **Initiative Analysis** | Gemini Pro | Analyse initiative health, suggest improvements |
| **Risk Assessment** | Gemini + Grounding | AI-powered risk classification |
| **Meeting Summaries** | Gemini Interaction API | Capture portfolio discussions |
| **Multimodal Input** | Gemini Vision | Upload diagrams, whiteboard photos |

### Setting Up Gemini

1. Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. Add to your environment:
   ```bash
   # .env.local
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. For production, use [Firebase environment config](https://firebase.google.com/docs/functions/config-env)

---

## The Philosophy

### Why "Strata"?

Strata means *layers*. Successful AI implementation has three layers:

```
┌─────────────────────────────────────────────────────────┐
│           LAYER 3: USER EXPERIENCE                       │
│           What people see and use                        │
│           Build LAST — requires the foundation           │
├─────────────────────────────────────────────────────────┤
│           LAYER 2: INTELLIGENCE                          │
│           Learning, memory, decisions                    │
│           Build SECOND — the brain                       │
├─────────────────────────────────────────────────────────┤
│           LAYER 1: INFRASTRUCTURE                        │
│           Reliable, secure, cost-effective               │
│           Build FIRST — the foundation                   │
└─────────────────────────────────────────────────────────┘
```

**Most AI projects fail because they start at Layer 3** (shiny demos) without Layers 1 and 2.

[Read the full philosophy →](./philosophy/three-layers.md)

---

## Architecture

### Level 2: Static Dashboard (Default)

```
┌──────────────┐     ┌──────────────────┐
│   Browser    │────▶│ Firebase Hosting │
│   (React)    │     │   (Static CDN)   │
└──────────────┘     └──────────────────┘
       │
       ▼
┌──────────────┐
│  Gemini API  │
│ (AI Studio)  │
└──────────────┘
```

**Cost:** Free (Firebase free tier + Gemini API free tier)

### Level 3: With Persistence

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Browser    │────▶│ Firebase Hosting │     │  Firestore  │
│   (React)    │     │   (Static CDN)   │────▶│ (Database)  │
└──────────────┘     └──────────────────┘     └─────────────┘
       │                                             │
       ▼                                             ▼
┌──────────────┐                           ┌─────────────────┐
│  Gemini API  │                           │ Firebase Auth   │
│ (AI Studio)  │                           │ (Google SSO)    │
└──────────────┘                           └─────────────────┘
```

**Cost:** ~$0-25/month for most organisations

### Level 4: Enterprise

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Browser    │────▶│ Firebase Hosting │────▶│  Firestore  │
└──────────────┘     └──────────────────┘     └─────────────┘
       │                    │                        │
       ▼                    ▼                        ▼
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│ Gemini APIs  │     │ Cloud Functions  │     │   BigQuery  │
│ (Full Suite) │     │ (Backend Logic)  │     │ (Analytics) │
└──────────────┘     └──────────────────┘     └─────────────┘
                            │
                            ▼
                     ┌─────────────────┐
                     │  Cloud Storage  │
                     │ (Documents/PDF) │
                     └─────────────────┘
```

---

## For Non-Technical Leaders

**You don't need to be technical to use Strata.**

### Week 1: Understand
- Read [Why AI Never Ends](./philosophy/why-ai-never-ends.md) (5 min)
- Download the [AI Idea Canvas](./templates/idea-canvas.md)
- List your current AI initiatives

### Week 2: Organise
- Use the [Prioritisation Matrix](./templates/prioritisation-matrix.md)
- Identify your top 3-5 priorities
- Share with your team

### Week 3: Visualise
- Ask your developer to deploy the dashboard (15 min)
- Or use the [Google Sheets template](./templates/google-sheets-tracker.md)
- Present at your next leadership meeting

### Week 4+: Iterate
- Update monthly
- Track what's working
- Add governance when needed

---

## What's Included

### Templates (No Code Required)

| Template | Format | Description |
|----------|--------|-------------|
| [AI Idea Canvas](./templates/idea-canvas.md) | Markdown/PDF | Capture AI opportunities |
| [Experiment Log](./templates/experiment-log.md) | Markdown | Track experiments |
| [Prioritisation Matrix](./templates/prioritisation-matrix.md) | Markdown | Score by value/effort |
| [Google Sheets Tracker](./templates/google-sheets-tracker.md) | Google Sheets | Full portfolio in a spreadsheet |
| [ROI Calculator](./templates/roi-calculator.html) | HTML | Interactive value estimation |

### Dashboard Features

| Feature | Level 2 | Level 3 | Level 4 |
|---------|---------|---------|---------|
| Portfolio overview | ✅ | ✅ | ✅ |
| Pipeline Kanban | ✅ | ✅ | ✅ |
| Department views | ✅ | ✅ | ✅ |
| Gemini doc generation | ✅ | ✅ | ✅ |
| Data persistence | — | ✅ | ✅ |
| Multi-user | — | ✅ | ✅ |
| Google SSO | — | ✅ | ✅ |
| EU AI Act compliance | — | — | ✅ |
| Audit trails | — | — | ✅ |
| BigQuery analytics | — | — | ✅ |

---

## Workshops

Ready-made materials for your team:

| Workshop | Duration | Materials |
|----------|----------|-----------|
| [Build Your AI Portfolio](./workshops/workshop-1-portfolio.md) | 30 min | Slides, templates |
| [Track AI Experiments](./workshops/workshop-2-experiments.md) | 45 min | Hands-on exercises |
| [Deploy Your Dashboard](./workshops/workshop-3-deploy.md) | 30 min | Step-by-step guide |

---

## Case Studies

| Organisation | Challenge | Outcome |
|--------------|-----------|---------|
| [Housing Association](./case-studies/housing-compliance.md) | Managing AI across 8,000 properties | 23% cost reduction |
| [Customer Service](./case-studies/customer-service.md) | 50K monthly queries | 50% effort reduction |
| [Financial Services](./case-studies/financial-services.md) | Loan processing delays | 70% faster decisions |

---

## Roadmap

### Now
- [x] Dashboard with 6 views
- [x] Gemini document generation
- [x] Firebase Hosting deployment

### Next
- [ ] Firestore integration (persistence)
- [ ] Firebase Auth (Google SSO)
- [ ] Gemini Live API (voice interaction)

### Future
- [ ] Cloud Functions (backend)
- [ ] BigQuery (analytics)
- [ ] Gemini Interaction API (meetings)
- [ ] Mobile PWA

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md).

**Quick contributions:**
- Star this repo if it helped you
- Share with someone managing AI initiatives
- Submit your organisation's case study
- Improve documentation

---

## About

**Strata** was created by [Ram Maree](https://linkedin.com/in/rammaree), an AI Solutions Architect helping organisations build AI capability—not just AI projects.

Built on:
- Google Cloud Platform & Firebase
- Google Gemini AI
- React + TypeScript + Vite
- Tailwind CSS

Informed by:
- Gartner AI Maturity Model
- McKinsey Strategic AI Framework
- MIT CISR Enterprise AI Research
- 10+ real-world implementations

---

## License

MIT License — use freely, contribute back.

---

## Get Started Now

**Ready in 15 minutes:**

1. ⭐ Star this repo
2. Clone and deploy to Firebase
3. Add your first AI initiative
4. Share with your team

```bash
git clone https://github.com/maree217/strata
cd strata/dashboard
npm install && npm run dev
```

**Questions?** [Open an issue](https://github.com/maree217/strata/issues) or [LinkedIn](https://linkedin.com/in/rammaree).

---

*Strata: See every layer of your AI portfolio.*
