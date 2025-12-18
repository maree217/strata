# Level 2: Visualise

**Time:** 15 minutes
**Technical skill:** Can run `npm` commands (or ask someone who can)
**Output:** Live dashboard showing your AI portfolio

---

## What You'll Do

Deploy the Strata dashboard—a visual interface for your AI portfolio.

The dashboard includes:
- **Overview:** Key metrics at a glance
- **Pipeline:** Kanban view of initiatives by stage
- **Portfolio:** Searchable table of all systems
- **Compliance:** EU AI Act status and documentation
- **FinOps:** Cost tracking and trends
- **Reports:** Export and document generation

---

## Architecture

At Level 2, the dashboard runs with **static data** (no database yet):

```
┌──────────────────────────────────────────────────────┐
│                     Your Browser                      │
│                    ┌────────────┐                     │
│                    │   React    │                     │
│                    │ Dashboard  │                     │
│                    └─────┬──────┘                     │
│                          │                            │
│                          ▼                            │
│                    ┌────────────┐                     │
│                    │ Gemini API │                     │
│                    │ (AI Docs)  │                     │
│                    └────────────┘                     │
└──────────────────────────────────────────────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   Firebase Hosting    │
              │   (Static Files)      │
              └───────────────────────┘
```

**What this means:**
- Data is stored in the code (you edit to customize)
- Gemini generates compliance documents
- No backend or database needed
- Free to host on Firebase

---

## Option A: Deploy to Firebase (Recommended)

### Prerequisites
- Node.js 18+ installed
- Google account
- 15 minutes

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/maree217/strata-ai-builder
cd strata/dashboard

# 2. Install dependencies
npm install

# 3. Set up Gemini API key
cp .env.example .env.local
# Edit .env.local and add your Gemini API key from https://aistudio.google.com/apikey

# 4. Test locally first
npm run dev
# Open http://localhost:3000 to verify it works

# 5. Install Firebase CLI (if not installed)
npm install -g firebase-tools

# 6. Login to Firebase
firebase login

# 7. Initialise Firebase in this directory
firebase init hosting

# When prompted:
# - Create a new project OR select existing
# - Public directory: dist
# - Configure as single-page app: Yes
# - Set up automatic builds: No (for now)

# 8. Build the production version
npm run build

# 9. Deploy
firebase deploy

# 10. Done! Your URL will be shown:
# ✔ Hosting URL: https://your-project-id.web.app
```

### After Deployment

1. Visit your URL
2. Navigate through the dashboard
3. Try the Compliance → "Generate Documentation" feature
4. Share the URL with your team

---

## Option B: Run Locally Only

If you're not ready to deploy:

```bash
git clone https://github.com/maree217/strata-ai-builder
cd strata/dashboard
npm install

# Add Gemini API key
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local

npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customising the Dashboard

### Change the Data

The current dashboard uses example data. To add your own:

1. Open `src/pages/Portfolio.tsx`
2. Find the `systems` array
3. Replace with your initiatives:

```typescript
const systems = [
  {
    id: 'AI-001',
    name: 'Customer Service Chatbot',
    department: 'Support',
    riskLevel: RiskLevel.LIMITED,
    status: SystemStatus.COMPLIANT,
    owner: 'Jane Smith'
  },
  // Add more...
];
```

### Change the Branding

1. Open `src/components/Layout.tsx`
2. Update the header text and colors
3. Replace logo if needed

### Change the Departments

1. Open `src/pages/Dashboard.tsx`
2. Find `deptData` array
3. Replace with your departments

---

## Dashboard Pages

### 1. Dashboard (Overview)

![Dashboard](../../assets/dashboard-preview.png)

- **4 metric cards:** Total systems, active users, compliance alerts, API usage
- **Bar chart:** Systems by department
- **Line chart:** Usage trends
- **Activity feed:** Recent updates

### 2. Pipeline

![Pipeline](../../assets/pipeline-preview.png)

- **Kanban board:** Discovery → Alpha → Beta → Live
- **Cards:** Each initiative with department tag
- Drag-and-drop ready (with Level 3)

### 3. Portfolio

![Portfolio](../../assets/portfolio-preview.png)

- **Search:** Find initiatives quickly
- **Table:** All systems with risk level, status, owner
- **Filters:** By department, risk, status

### 4. Compliance

![Compliance](../../assets/compliance-preview.png)

- **Summary:** High-risk count, documentation status
- **Actions:** Outstanding compliance tasks
- **AI Generator:** Create Annex IV documents with Gemini

### 5. FinOps

![FinOps](../../assets/finops-preview.png)

- **Cost metrics:** Total spend, budget remaining
- **Trend chart:** Infrastructure vs API costs
- **Department breakdown:** Who's spending what

### 6. Reports

![Reports](../../assets/reports-preview.png)

- **Document library:** Compliance reports, board papers
- **Export:** Download as PDF
- **Generate:** AI-assisted report creation

---

## Using Gemini Features

### Document Generation

1. Go to **Compliance** page
2. Scroll to "AI-Powered Documentation Generator"
3. Select a system
4. Choose sections to generate
5. Click "Generate Documentation"
6. Watch real-time streaming output
7. Export when complete

### What Gets Generated

The Gemini integration creates **EU AI Act Annex IV** compliant documentation:

- System description and purpose
- Data governance practices
- Risk management approach
- Post-market monitoring plan
- Human oversight measures

---

## Troubleshooting

### "npm: command not found"

Install Node.js from [nodejs.org](https://nodejs.org/)

### "VITE_GEMINI_API_KEY is not defined"

Create `.env.local` file with your API key:
```
VITE_GEMINI_API_KEY=your_key_here
```

### Firebase deploy fails

- Check you're logged in: `firebase login`
- Check project is initialised: `firebase init hosting`
- Ensure `dist` folder exists: `npm run build`

### Blank page after deploy

- Check browser console for errors
- Verify `.env.local` was included in build
- Try clearing browser cache

---

## Next Steps

**Happy with static data?**
- Share the URL with your team
- Update the code monthly with new data
- Use for presentations and planning

**Ready for real persistence?**
- → [Level 3: Integrate](../level-3-integrate) — Add Firestore database

---

## Cost Estimate

| Service | Free Tier | Typical Usage |
|---------|-----------|---------------|
| Firebase Hosting | 10GB/month | More than enough |
| Gemini API | 15 requests/minute | Plenty for docs |
| **Total** | **£0/month** | Free for most teams |

---

*Level 2 complete. You now have a visual dashboard for your AI portfolio.*

→ Next: [Level 3: Integrate](../level-3-integrate)
