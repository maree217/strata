# Workshop 1: Build Your AI Portfolio

**Duration:** 30-45 minutes
**Audience:** Leaders, managers, anyone managing AI initiatives
**Output:** A structured view of your organisation's AI activities

---

## Overview

In this workshop, you'll:
1. Discover AI activities you didn't know you had
2. Capture them in a structured format
3. Prioritise what to focus on
4. Leave with a shareable portfolio view

---

## Pre-Workshop Preparation

**Facilitator:** Send this message to participants 24 hours before:

> Before tomorrow's workshop, think about:
> - What AI tools are people in your team using? (ChatGPT, Copilot, etc.)
> - Are there any AI experiments or pilots running?
> - What AI ideas have been suggested but not started?
> - What AI is actually in production?
>
> You don't need to research—just come with what's top of mind.

---

## Workshop Agenda

### Part 1: The Mindset Shift (10 minutes)

**Key message:** AI isn't a project. It's a capability you operate.

**Discussion points:**
- How many AI "projects" have you seen that were deployed and then forgotten?
- What happened to them?
- Why do 95% of AI pilots fail?

**The insight:**
```
Traditional: Idea → Build → Deploy → DONE
AI Reality:  Idea → Build → Deploy → Monitor → Improve → Monitor → ...
```

**Ask:** "Who owns AI after it's deployed in your organisation?"

(Usually: awkward silence, or "IT?" or "Nobody?")

---

### Part 2: Discovery (10 minutes)

**Activity:** Capture everything AI-related in your organisation.

**Instructions:**
1. Give everyone sticky notes (or shared doc for remote)
2. Set a 5-minute timer
3. Write down EVERY AI activity you know about:
   - Tools people use (ChatGPT, Copilot, Jasper...)
   - Experiments running
   - Ideas floating around
   - Things in production
   - Vendor demos seen
4. One item per sticky note
5. Don't filter—capture everything

**Facilitator tip:** Prompt with categories:
- "What about marketing? Sales? HR? Finance? Operations?"
- "Any chatbots? Any automations? Any analytics?"
- "What are vendors pitching you?"

**Expected output:** 15-50 items (most teams are surprised how many)

---

### Part 3: Categorise (5 minutes)

**Activity:** Group items by stage.

**Create columns:**

| 💡 Idea | 🔬 Discovery | 🧪 Alpha | 📊 Beta | 🚀 Live |
|---------|--------------|----------|---------|---------|
| Just an idea | Exploring feasibility | Building prototype | Testing with users | In production |

**Instructions:**
1. Read each sticky note aloud
2. Team agrees on stage
3. Place in appropriate column
4. If unclear, discuss briefly (max 30 seconds per item)

---

### Part 4: Prioritise (10 minutes)

**Activity:** Score the top 10 items.

**Instructions:**
1. Select the 10 most important items (vote if needed)
2. For each, score:

| Factor | Score | Description |
|--------|-------|-------------|
| Value | 1-5 | Business impact (5 = transformational) |
| Effort | 1-5 | Implementation difficulty (5 = very hard) |
| Risk | 1-5 | What could go wrong (5 = very risky) |

3. Calculate priority: **Value - (Effort + Risk) / 2**

**Quick scoring guide:**

| Value Score | Meaning |
|-------------|---------|
| 5 | Game-changer for the business |
| 4 | Significant efficiency or revenue |
| 3 | Meaningful improvement |
| 2 | Nice to have |
| 1 | Minimal impact |

| Effort Score | Meaning |
|--------------|---------|
| 5 | 6+ months, significant investment |
| 4 | 3-6 months, dedicated team |
| 3 | 1-3 months, moderate resources |
| 2 | Weeks, small team |
| 1 | Days, existing tools |

| Risk Score | Meaning |
|------------|---------|
| 5 | Regulatory, safety, or reputation risk |
| 4 | Significant technical or adoption risk |
| 3 | Moderate uncertainty |
| 2 | Low risk, well understood |
| 1 | Almost no risk |

---

### Part 5: Capture (5 minutes)

**Activity:** Document the portfolio.

**Option A: Simple table**

Copy this to a shared doc:

| ID | Name | Stage | Owner | Value | Effort | Risk | Priority |
|----|------|-------|-------|-------|--------|------|----------|
| AI-001 | | | | | | | |
| AI-002 | | | | | | | |
| ... | | | | | | | |

**Option B: Deploy the dashboard**

If you have 15 extra minutes:
```bash
git clone https://github.com/maree217/strata-ai-builder
cd strata/dashboard
npm install && npm run dev
```

Then add your initiatives to the code.

---

### Part 6: Next Steps (5 minutes)

**Assign actions:**

1. **Portfolio Owner:** Who will maintain this view?
   - Name: ________________
   - Review frequency: Monthly / Bi-weekly

2. **Top Priority:** What's the #1 initiative to focus on?
   - Name: ________________
   - Owner: ________________
   - Next action: ________________

3. **Follow-up meeting:** When will we review progress?
   - Date: ________________

---

## Facilitator Notes

### Common Questions

**"What if we don't know the value or effort?"**
Estimate. It's better to have a rough score than no score. You'll refine over time.

**"What about AI that's embedded in tools we already use?"**
Include it! Copilot in Office, AI in Salesforce—these count as AI initiatives.

**"This seems like a lot of AI activities"**
That's normal. Most organisations have 3-5x more AI activity than they realise. That's why portfolio management matters.

**"Who should own the portfolio?"**
Someone with visibility across departments. Often: CTO office, digital transformation lead, or strategy team.

### Red Flags to Watch For

- **No "Live" items:** Organisation may be stuck in pilot purgatory
- **All items low-scored:** May need better ideas or clearer business cases
- **No owners assigned:** Nothing will progress without ownership
- **Too many high priorities:** Need tougher prioritisation

---

## Materials Needed

- Sticky notes (physical or digital like Miro/Mural)
- Shared document for capturing results
- Timer
- This workshop guide

---

## Follow-Up Resources

- [AI Idea Canvas](../templates/idea-canvas.md) — Deep-dive on individual initiatives
- [Experiment Log](../templates/experiment-log.md) — Track experiments
- [Deploy the Dashboard](../get-started/level-2-visualize/) — Visual portfolio
- [Why AI Never Ends](../philosophy/why-ai-never-ends.md) — The philosophy

---

## Workshop Feedback

After the workshop, ask:

1. Did you discover AI activities you didn't know about? (Yes/No)
2. Do you have a clearer picture of your AI portfolio? (1-5)
3. What was most valuable about this session?
4. What would you improve?

---

*Workshop from [Strata AI Portfolio Framework](https://github.com/maree217/strata-ai-builder)*
