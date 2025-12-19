# Visual Spec: Three-Layer Architecture Diagram

**Location:** README.md, philosophy/three-layer-architecture.md
**Type:** Technical Diagram / Infographic
**Dimensions:** 800x600px (responsive)

---

## Purpose

Explain the core Three-Layer Architecture concept visually. Show the build sequence and ROI at each layer.

---

## Content Elements

### The Three Layers

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   LAYER 3: EXPERIENCE                              5-10x ROI │
│   What people see and use                                    │
│   Build LAST                                                 │
│                                                              │
│   Examples:                                                  │
│   • Chatbots                                                 │
│   • Dashboards                                               │
│   • Automations                                              │
│   • User interfaces                                          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   LAYER 2: INTELLIGENCE                             2-4x ROI │
│   Learning, memory, decisions                                │
│   Build SECOND                                               │
│                                                              │
│   Examples:                                                  │
│   • Data pipelines                                           │
│   • ML operations                                            │
│   • Learning loops                                           │
│   • Vector storage                                           │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   LAYER 1: INFRASTRUCTURE                      30-50% savings│
│   Reliable, secure, cost-effective                           │
│   Build FIRST                                                │
│                                                              │
│   Examples:                                                  │
│   • Cost monitoring                                          │
│   • Security & access                                        │
│   • API management                                           │
│   • Audit trails                                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              +
┌─────────────────────────────────────────────────────────────┐
│   GOVERNANCE - Runs throughout all layers                    │
│   Compliance • Risk • Documentation • Review                 │
└─────────────────────────────────────────────────────────────┘
```

### Build Sequence Arrow

```
        ↑ BUILD LAST
        │
        │ BUILD SECOND
        │
        ↑ BUILD FIRST
```

### ROI Indicators

| Layer | ROI | Timeline |
|-------|-----|----------|
| Layer 1 | 30-50% cost savings | Months 1-3 |
| Layer 2 | 2-4x ROI | Months 3-6 |
| Layer 3 | 5-10x ROI | Months 6-9 |

---

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Layer 1 | Solid Blue | #3B82F6 |
| Layer 2 | Teal | #14B8A6 |
| Layer 3 | Purple | #8B5CF6 |
| Governance | Amber | #F59E0B |
| Arrows | Gray | #64748B |
| Background | Light | #F8FAFC |
| Text | Dark | #1E293B |

---

## Layout Options

### Option A: Stacked Boxes (Primary)
```
┌──────────────────────────┐
│      LAYER 3: UX         │ ← Purple
├──────────────────────────┤
│  LAYER 2: INTELLIGENCE   │ ← Teal
├──────────────────────────┤
│ LAYER 1: INFRASTRUCTURE  │ ← Blue
└──────────────────────────┘
      [GOVERNANCE]           ← Amber (bar underneath)
```

### Option B: Pyramid
```
         /\
        /  \    Layer 3
       /────\
      /      \  Layer 2
     /────────\
    /          \ Layer 1
   /────────────\
```

### Option C: Concentric Circles
```
        ┌─────────────┐
       │  ┌───────┐   │
       │ │ ┌───┐  │   │
       │ │ │ L1│  │   │  L1 = core
       │ │ └───┘  │   │  L2 = middle ring
       │  └───────┘   │  L3 = outer ring
        └─────────────┘
```

---

## Icons for Each Layer

### Layer 1: Infrastructure
- Server/database icon
- Shield (security)
- Dollar sign (cost)
- Lock (access)

### Layer 2: Intelligence
- Brain/neural network
- Data flow arrows
- Loop/refresh
- Chart trending up

### Layer 3: Experience
- User/person icon
- Chat bubble
- Dashboard/grid
- Magic wand/automation

### Governance
- Checkmark/clipboard
- Scale/balance
- Document
- Eye (oversight)

---

## Annotations

Add callout boxes with key insights:

```
┌────────────────────────────────┐
│ "Most projects fail because    │
│  they start at Layer 3"        │
│                    — Research  │
└────────────────────────────────┘
```

---

## Variations Needed

1. **Simple** - Just the three boxes + governance
2. **Detailed** - With examples and ROI
3. **Animated** - Build sequence animation (optional)
4. **Dark mode** version
5. **Icon-only** version (minimal)

---

## Text for Image Alt

```
Three-Layer Architecture: Layer 1 Infrastructure (build first, 30-50% savings), Layer 2 Intelligence (build second, 2-4x ROI), Layer 3 Experience (build last, 5-10x ROI), with Governance throughout
```
