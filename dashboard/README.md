# Strata Dashboard: The AI Builder's OS

The visual interface for your strategic AI portfolio. Featuring the **Launchpad**—your starting point for rapid AI prototyping and portfolio mastery.

---

## Quick Start

```bash
# Clone and enter the dashboard
git clone https://github.com/maree217/strata-ai-builder
cd strata-ai-builder/dashboard

# Install dependencies
npm install

# Add your Gemini API key (Required for Launchpad & Compliance)
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Experience the Layers

| Feature | Layer | Description |
|------|-------|-------------|
| **Launchpad** | Layer 3 | Rapid prototyping and roadmap generation |
| **Dashboard** | Layer 3 | Operational metrics and strategic oversight |
| **Pipeline** | Layer 2 | High-level engineering orchestration (Idea → Live) |
| **FinOps** | Layer 1 | Infrastructure cost tracking and ROI |
| **Compliance** | Layer 1 | Risk management (EU AI Act ready) |

---

## 🚀 The Launchpad

The Launchpad is designed for non-technical users and busy builders. It allows you to:
1.  Understand the **Three-Layer Architecture**.
2.  Input a business prompt.
3.  Receive an AI-generated implementation roadmap immediately.

---

## Deployment

Deploy your professional AI management service to **Firebase Hosting** in under 5 minutes:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting # Select: dist, Yes (SPA)
npm run build
firebase deploy
```

---

*Part of the [Strata AI Builder OS](https://github.com/maree217/strata-ai-builder)*

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| AI | Google Gemini API |

---

## Environment Variables

Create `.env.local`:

```bash
# Required for AI document generation
VITE_GEMINI_API_KEY=your_api_key_here

# Optional: Firebase (for Level 3+)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

---

## Deploy to Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialise (select Hosting, dist folder, SPA)
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

Your dashboard will be live at `https://your-project.web.app`.

---

## Customisation

### Change the Data

Edit `src/pages/Portfolio.tsx`:

```typescript
const systems = [
  {
    id: 'AI-001',
    name: 'Your Initiative Name',
    department: 'Your Department',
    riskLevel: RiskLevel.LIMITED,
    status: SystemStatus.COMPLIANT,
    owner: 'Owner Name'
  },
  // Add more...
];
```

### Change Departments

Edit `src/pages/Dashboard.tsx`:

```typescript
const deptData = [
  { name: 'Your Dept 1', systems: 12 },
  { name: 'Your Dept 2', systems: 8 },
  // Add more...
];
```

### Change Branding

Edit `src/components/Layout.tsx` for:
- Header text
- Navigation items
- Footer content

Edit `tailwind.config.js` for:
- Brand colors
- Fonts

---

## Project Structure

```
dashboard/
├── components/
│   └── Layout.tsx          # Main layout wrapper
├── pages/
│   ├── Dashboard.tsx       # Overview
│   ├── Pipeline.tsx        # Kanban board
│   ├── Portfolio.tsx       # Systems table
│   ├── Compliance.tsx      # EU AI Act + doc gen
│   ├── FinOps.tsx          # Cost tracking
│   └── Reports.tsx         # Documents
├── services/
│   └── gemini.ts           # Gemini API integration
├── App.tsx                 # Router
├── index.tsx               # Entry point
├── types.ts                # TypeScript types
└── styles.css              # Tailwind directives
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Troubleshooting

### Blank page
- Check browser console for errors
- Verify `.env.local` exists with valid API key

### Gemini not working
- Verify API key is correct
- Check you have API access at [AI Studio](https://aistudio.google.com/)
- Check console for specific error messages

### Build fails
- Run `npm install` again
- Clear `node_modules` and reinstall
- Check TypeScript errors

---

## Next Steps

- [Level 3: Add Firestore](../get-started/level-3-integrate/) for data persistence
- [Level 4: Add governance](../get-started/level-4-govern/) for enterprise features

---

*Part of [Strata AI Portfolio Framework](https://github.com/maree217/strata-ai-builder)*
