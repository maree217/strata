# Asset Generation Prompts

Ready-to-use prompts for Gemini Image Creator and NotebookLM.

---

## 1. Hero Banner

**Prompt for Gemini Image:**
```
Create a modern, professional hero banner for a software product called "Strata".

The concept: Strata is an AI portfolio management framework. The name comes from geological strata (layers).

Visual requirements:
- Abstract representation of three horizontal layers, stacked
- Modern, clean, tech aesthetic
- Color palette: deep navy blue (#1e3a5f), teal accent (#00a3a6), white
- Subtle gradient or depth effect
- No text in the image (text will be overlaid)
- Dimensions: 1280x640 pixels
- Style: minimalist, corporate-friendly, not too playful
- Could include subtle geometric patterns or data visualization elements
```

---

## 2. Three-Layer Architecture Diagram

**Prompt for Gemini Image:**
```
Create a clean architecture diagram showing three stacked layers:

Top layer (Layer 3): "User Experience" - labeled "Build LAST"
Middle layer (Layer 2): "Intelligence" - labeled "Build SECOND"
Bottom layer (Layer 1): "Infrastructure" - labeled "Build FIRST"

Visual style:
- Modern, flat design
- Each layer slightly different shade (light to dark from top to bottom)
- Arrows showing data flow between layers
- Professional, suitable for executive presentations
- Colors: navy blue (#1e3a5f), teal (#00a3a6), lighter blues
- Clean sans-serif typography
- Dimensions: 800x600 pixels
```

---

## 3. AI Lifecycle Loop

**Prompt for Gemini Image:**
```
Create a circular lifecycle diagram showing continuous AI operations:

Stages in clockwise order:
1. Idea (lightbulb icon)
2. Discovery (magnifying glass)
3. Alpha (flask/experiment)
4. Beta (chart going up)
5. Live (rocket)
6. Monitor (dashboard)
7. Improve (gear/refresh)
→ Back to Monitor (continuous loop)

Visual style:
- Circular arrangement with arrows connecting each stage
- Modern, clean design
- Color: teal (#00a3a6) with navy (#1e3a5f) accents
- The loop between Monitor and Improve should be emphasized
- Text label: "AI Never Ends" in the center
- Dimensions: 800x800 pixels
```

---

## 4. Project vs Portfolio Comparison

**Prompt for Gemini Image:**
```
Create a side-by-side comparison infographic:

LEFT SIDE - "Project Thinking" (in red/amber tones):
- Linear arrow: Start → End
- Checkbox: "Done"
- Calendar with end date
- Single deliverable

RIGHT SIDE - "Portfolio Thinking" (in green/teal tones):
- Circular arrow: continuous
- Dashboard with metrics
- Ongoing calendar
- Multiple initiatives

Visual style:
- Clean split-screen design
- Clear visual contrast between the two approaches
- Modern iconography
- Dimensions: 1000x600 pixels
```

---

## 5. Level 2 Architecture (Static Dashboard)

**Prompt for Gemini Image:**
```
Create a simple architecture diagram showing:

User's Browser (React Dashboard)
    ↓
Firebase Hosting (Static CDN)
    ↓
Gemini API (AI Document Generation)

Visual style:
- Three boxes connected by arrows
- Include small icons: browser, cloud, AI chip
- Label "Level 2: Static Dashboard"
- Note: "Cost: Free tier"
- Clean, technical but accessible
- Dimensions: 800x400 pixels
```

---

## 6. Level 3 Architecture (With Persistence)

**Prompt for Gemini Image:**
```
Create an architecture diagram showing:

User's Browser (React)
    ↓
Firebase Hosting
    ↓ ↘
Gemini API    Firestore (Database)
                  ↓
              Firebase Auth (Google SSO)

Visual style:
- Boxes with connecting arrows
- Show data flow directions
- Include small icons for each service
- Label "Level 3: With Persistence"
- Note: "Cost: ~£0-25/month"
- Dimensions: 800x500 pixels
```

---

## 7. Level 4 Architecture (Enterprise)

**Prompt for Gemini Image:**
```
Create a comprehensive architecture diagram showing:

Top row: Browser → Firebase Hosting → Firestore
Middle row: Gemini APIs → Cloud Functions → BigQuery
Bottom row: Gemini Live → Identity Platform → Cloud Storage

All components connected appropriately showing:
- User authentication flow
- Data persistence
- AI processing
- Analytics pipeline
- Document storage

Visual style:
- Professional enterprise architecture diagram
- Group related services
- Show integration points
- Label "Level 4: Enterprise"
- Dimensions: 1000x700 pixels
```

---

## 8. Social Preview Card

**Prompt for Gemini Image:**
```
Create a GitHub social preview card for "Strata":

Content:
- "STRATA" as main text (large, bold)
- Tagline: "See Every Layer of Your AI Portfolio"
- Three key features as icons: Dashboard, Templates, Framework
- Abstract layered background similar to the hero banner
- GitHub star icon subtly included

Visual style:
- Professional, modern
- Colors: navy (#1e3a5f), teal (#00a3a6), white
- Clean typography
- Dimensions: exactly 1280x640 pixels
- Should look good as a thumbnail
```

---

## 9. Workshop Slide - Title

**Prompt for Gemini Image:**
```
Create a presentation title slide:

Title: "Build Your AI Portfolio"
Subtitle: "A 30-minute workshop"
Branding: "Strata" logo area (bottom right)

Visual style:
- Professional presentation style
- Abstract layered background
- Large, readable text
- Dimensions: 1920x1080 (16:9)
- Colors: navy background, white text, teal accents
```

---

## 10. Printable Idea Canvas Header

**Prompt for Gemini Image:**
```
Create a header/banner for a printable document:

Text: "AI Idea Canvas"
Subtitle: "Capture and evaluate AI opportunities"
Include: Strata branding, version number area

Visual style:
- Clean, print-friendly (not too dark)
- Professional document header
- Dimensions: 800x150 pixels
- Colors: navy (#1e3a5f), light background
```

---

## NotebookLM Prompts

### For Philosophy Summary
```
Summarize the "Why AI Never Ends" philosophy in 3 bullet points suitable for an infographic. Each point should be:
- Maximum 10 words
- Actionable insight
- Memorable
```

### For Framework Overview
```
Create a one-paragraph executive summary of the Three-Layer AI Framework that:
- Explains the concept in 50 words
- Mentions the build order (Infrastructure → Intelligence → Experience)
- Includes the key insight about why sequence matters
```

### For Workshop Talking Points
```
Generate 5 discussion questions for a workshop about AI portfolio management that:
- Provoke self-reflection
- Are suitable for non-technical leaders
- Can be answered in 2-3 sentences
```

---

## Tips for Best Results

### Gemini Image Creator
1. Be specific about dimensions
2. Include hex color codes
3. Mention "no text" if you'll overlay text later
4. Request "clean" and "professional" for business contexts
5. Iterate: refine prompts based on first results

### NotebookLM
1. Upload the markdown files as sources
2. Ask for summaries at specific lengths
3. Request "executive-friendly" language
4. Use it to generate alt-text for accessibility

### Screenshots
1. Run dashboard in Chrome
2. Use DevTools device toolbar for consistent sizing
3. Hide bookmarks bar
4. Use light mode for consistency
