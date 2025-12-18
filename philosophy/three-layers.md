# The Three Layers

**Why most AI projects fail—and how to avoid it**

---

## The Pattern of Failure

Here's how most AI projects go:

**Month 1:** "Let's build an AI chatbot!"
**Month 3:** Team shows impressive demo
**Month 6:** IT struggles to deploy reliably
**Month 9:** Security raises concerns
**Month 12:** Project quietly shelved

**70-85% of AI projects fail to reach production.** (MIT CISR, McKinsey)

The pattern is consistent:
- Great demo
- Can't deploy reliably
- Costs explode
- Security issues emerge
- Project abandoned

**Why?** Because they started at the wrong layer.

---

## The Three Layers

Successful AI implementation has three layers—and they must be built in order:

```
┌─────────────────────────────────────────────────────────┐
│           LAYER 3: USER EXPERIENCE                       │
│           What people see and interact with              │
│           ─────────────────────────────────              │
│           Build LAST                                     │
│           Chatbots, dashboards, automations              │
└─────────────────────────────────────────────────────────┘
                          ↑
              (delivers value through)
                          ↑
┌─────────────────────────────────────────────────────────┐
│           LAYER 2: INTELLIGENCE                          │
│           The brain that learns and decides              │
│           ─────────────────────────────────              │
│           Build SECOND                                   │
│           Models, memory, reasoning                      │
└─────────────────────────────────────────────────────────┘
                          ↑
              (built on foundation of)
                          ↑
┌─────────────────────────────────────────────────────────┐
│           LAYER 1: INFRASTRUCTURE                        │
│           The foundation that makes it reliable          │
│           ─────────────────────────────────              │
│           Build FIRST                                    │
│           Servers, security, cost management             │
└─────────────────────────────────────────────────────────┘
```

---

## Layer 1: Infrastructure

**Build FIRST — The Foundation**

### What It Is

The reliable, secure, cost-effective platform that AI runs on:

- **Compute:** Servers, GPUs, cloud resources
- **Security:** Access control, encryption, compliance
- **Networking:** APIs, data pipelines, integrations
- **Operations:** Monitoring, logging, alerting
- **Cost Management:** Budgets, optimization, visibility

### Why Build It First

Without Layer 1:
- Systems are unreliable (outages, slow responses)
- Costs explode (no visibility or control)
- Security is an afterthought (breaches, compliance failures)
- Nothing else works consistently

### What Success Looks Like

| Metric | Target |
|--------|--------|
| Uptime | 99.9%+ |
| Response time | < 2 seconds |
| Cost visibility | 100% attributed |
| Security posture | Audit-ready |

### Google Cloud Components

| Component | Service |
|-----------|---------|
| Compute | Cloud Run, GKE, Cloud Functions |
| Storage | Cloud Storage, Firestore |
| Security | IAM, Secret Manager, VPC |
| Monitoring | Cloud Monitoring, Logging |
| Cost | Cloud Billing, Budgets |

---

## Layer 2: Intelligence

**Build SECOND — The Brain**

### What It Is

The learning, reasoning, and decision-making capabilities:

- **Models:** LLMs, classifiers, predictors
- **Memory:** Knowledge bases, vector stores, context
- **Data:** Pipelines, quality, governance
- **Logic:** Rules, guardrails, policies

### Why Build It Second

Layer 2 needs Layer 1 to:
- Run reliably (stable infrastructure)
- Scale appropriately (right resources)
- Stay secure (protected data)
- Be cost-effective (optimized compute)

Without Layer 1, Layer 2 is:
- Unreliable (can't deploy consistently)
- Expensive (no cost control)
- Risky (security gaps)

### What Success Looks Like

| Metric | Target |
|--------|--------|
| Model accuracy | > 90% (depends on use case) |
| Response relevance | > 85% user satisfaction |
| Data freshness | < 24 hours |
| Hallucination rate | < 5% |

### Google Cloud Components

| Component | Service |
|-----------|---------|
| Models | Vertex AI, Gemini API |
| Memory | Firestore, AlloyDB, Vector Search |
| Data | BigQuery, Dataflow, Pub/Sub |
| Training | Vertex AI Training |

---

## Layer 3: User Experience

**Build LAST — The Interface**

### What It Is

What users actually see and interact with:

- **Chatbots:** Conversational interfaces
- **Dashboards:** Visual displays of information
- **Automations:** Workflows that run automatically
- **Assistants:** Tools that help users work
- **APIs:** Programmatic access for other systems

### Why Build It Last

Layer 3 needs Layers 1 and 2 to:
- Work reliably (infrastructure)
- Be intelligent (models and data)
- Be secure (access control)
- Be cost-effective (optimization)

Building Layer 3 first creates:
- Great demos that can't scale
- User expectations that can't be met
- Technical debt that blocks progress

### What Success Looks Like

| Metric | Target |
|--------|--------|
| User adoption | > 70% |
| Task completion | > 85% |
| User satisfaction | > 4/5 |
| Time saved | > 30% |

### Google Cloud Components

| Component | Service |
|-----------|---------|
| Web Apps | Firebase Hosting, Cloud Run |
| Mobile | Firebase, Flutter |
| Chatbots | Dialogflow, Gemini |
| APIs | Apigee, Cloud Endpoints |

---

## Why Order Matters

### The Wrong Order (Most Projects)

```
Layer 3 First: "Let's build a chatbot!"
    ↓
"It works in demo but not production"
    ↓
"We need to rebuild the infrastructure"
    ↓
"This is going to cost way more than planned"
    ↓
Project fails or over-budget
```

### The Right Order

```
Layer 1 First: "Let's set up reliable infrastructure"
    ↓
Cost savings (30-50% typical)
Security baseline established
Operations ready
    ↓
Layer 2 Second: "Now let's build intelligence"
    ↓
Models deployed reliably
Data pipelines working
Knowledge captured
    ↓
Layer 3 Third: "Now let's deliver to users"
    ↓
Users get reliable, intelligent interfaces
Fast deployment (infrastructure ready)
Scalable from day one
```

---

## Timeline

| Layer | Duration | Investment | ROI |
|-------|----------|------------|-----|
| **Layer 1** | 1-3 months | £50-150K | 30-50% cost savings |
| **Layer 2** | 3-6 months | £100-300K | Enables Layer 3 |
| **Layer 3** | 2-4 months | £50-150K | User-visible value |
| **Total** | 6-12 months | £200-600K | 5-10x over 2 years |

**Key insight:** Layer 1 often pays for Layers 2 and 3 through cost savings.

---

## Why "Strata"?

The name comes from geology: **strata** are layers of rock, each built on the one below.

You can't have stable upper layers without solid foundation layers.

AI works the same way.

---

## Self-Assessment

Where is your organisation?

### Layer 1: Infrastructure
- [ ] We have reliable cloud infrastructure
- [ ] Costs are visible and attributed
- [ ] Security is audit-ready
- [ ] Operations are monitored
- [ ] We can deploy AI workloads

### Layer 2: Intelligence
- [ ] We have models in production
- [ ] Data pipelines are operational
- [ ] Knowledge is captured and accessible
- [ ] Model performance is monitored
- [ ] We can iterate and improve

### Layer 3: Experience
- [ ] Users interact with AI daily
- [ ] Adoption rate is > 70%
- [ ] User satisfaction is high
- [ ] Value is measurable
- [ ] We're continuously improving

**Mostly unchecked in Layer 1?** Start there.
**Layer 1 solid but Layer 2 weak?** Build intelligence.
**Layers 1-2 solid?** Now build user experiences.

---

## Common Anti-Patterns

### "Let's do a quick pilot"
Pilots without infrastructure become "permapilots"—never production-ready.

### "We'll fix infrastructure later"
Technical debt compounds. Later never comes.

### "Users need to see something"
Show them something built on solid foundations, not sand.

### "It works on my laptop"
Production is not your laptop. Build for production from day one.

---

## Key Takeaways

1. **Three layers:** Infrastructure → Intelligence → Experience
2. **Order matters:** Build from the bottom up
3. **Layer 1 first:** The foundation that makes everything else work
4. **Layer 2 second:** The brain that provides intelligence
5. **Layer 3 last:** The interface users see (built on solid foundations)
6. **Each layer enables the next:** Without lower layers, upper layers fail
7. **Cost savings fund progress:** Layer 1 often pays for Layers 2 and 3

---

*From [Strata AI Portfolio Framework](https://github.com/maree217/strata-ai-builder)*
