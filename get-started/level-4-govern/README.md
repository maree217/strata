# Level 4: Govern

**Time:** Variable (depends on requirements)
**Technical skill:** Developer + compliance knowledge
**Output:** Enterprise-grade AI governance platform

---

## When You Need Level 4

Level 4 is for organisations that need:

| Requirement | Example |
|-------------|---------|
| **Regulatory compliance** | EU AI Act, sector-specific rules |
| **Enterprise SSO** | Azure AD, Okta, SAML |
| **Audit trails** | Who did what, when |
| **Role-based access** | Different views for different roles |
| **Data residency** | Specific geographic requirements |
| **Advanced analytics** | BigQuery integration |

**If you don't have these requirements, Level 3 is sufficient.**

---

## Architecture

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
       │                    │                        │
       ▼                    ▼                        ▼
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Gemini Live │     │ Identity Platform│     │Cloud Storage│
│  (Voice/RT)  │     │ (Enterprise SSO) │     │ (Documents) │
└──────────────┘     └──────────────────┘     └─────────────┘
```

---

## EU AI Act Compliance

### Risk Classification

The EU AI Act classifies AI systems into four categories:

| Level | Description | Requirements | Examples |
|-------|-------------|--------------|----------|
| **Unacceptable** | Banned | Cannot deploy | Social scoring, manipulative AI |
| **High-Risk** | Strict requirements | Full documentation, human oversight, CE marking | HR screening, credit scoring, medical diagnostics |
| **Limited Risk** | Transparency rules | Disclose AI use to users | Chatbots, deepfakes |
| **Minimal Risk** | No specific rules | General best practices | Spam filters, games |

### Strata Compliance Features

#### 1. Risk Classification Tool

Each initiative is classified by risk level with guidance:

```typescript
interface ComplianceStatus {
  riskLevel: 'minimal' | 'limited' | 'high' | 'unacceptable';
  annexIVComplete: boolean;
  humanOversightDefined: boolean;
  dataGovernanceApproved: boolean;
  lastAuditDate: Date;
  nextAuditDue: Date;
}
```

#### 2. Annex IV Documentation Generator

Gemini-powered generation of required technical documentation:

- General description of the AI system
- Detailed description of system elements
- Description of monitoring, functioning, and control
- Risk management system description
- Data governance measures
- Post-market monitoring plan
- Human oversight measures

#### 3. Audit Trail

Every action is logged:

```typescript
interface AuditEntry {
  timestamp: Date;
  userId: string;
  userName: string;
  action: string;
  resourceType: 'initiative' | 'document' | 'setting';
  resourceId: string;
  changes: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];
  ipAddress: string;
  userAgent: string;
}
```

---

## Enterprise Authentication

### Option 1: Google Cloud Identity Platform

Supports SAML, OIDC, and enterprise IdPs.

1. Enable Identity Platform in Firebase Console
2. Configure your IdP (Azure AD, Okta, etc.)
3. Update Firebase auth configuration

### Option 2: Azure AD via SAML

```typescript
// Configure SAML provider
import { SAMLAuthProvider } from 'firebase/auth';

const provider = new SAMLAuthProvider('saml.your-provider');
signInWithPopup(auth, provider);
```

### Option 3: Custom Claims for Roles

```typescript
// In Cloud Function
import { getAuth } from 'firebase-admin/auth';

export const setUserRole = functions.https.onCall(async (data, context) => {
  // Verify admin
  if (!context.auth?.token.admin) {
    throw new functions.https.HttpsError('permission-denied', 'Not admin');
  }

  // Set custom claims
  await getAuth().setCustomUserClaims(data.uid, {
    role: data.role,  // 'admin' | 'editor' | 'viewer'
    department: data.department
  });
});
```

---

## Role-Based Access

### Roles

| Role | Can View | Can Edit | Can Delete | Can Admin |
|------|----------|----------|------------|-----------|
| **Viewer** | All | — | — | — |
| **Editor** | All | Own dept | — | — |
| **Manager** | All | Own dept | Own dept | — |
| **Admin** | All | All | All | Yes |

### Implementation

```typescript
// Firestore rules with roles
match /initiatives/{initiativeId} {
  allow read: if request.auth != null;

  allow create: if request.auth != null
    && request.auth.token.role in ['editor', 'manager', 'admin'];

  allow update: if request.auth != null
    && (request.auth.token.role == 'admin'
        || (request.auth.token.role in ['editor', 'manager']
            && resource.data.department == request.auth.token.department));

  allow delete: if request.auth != null
    && (request.auth.token.role == 'admin'
        || (request.auth.token.role == 'manager'
            && resource.data.department == request.auth.token.department));
}
```

---

## Analytics with BigQuery

### Export Firestore to BigQuery

1. Enable BigQuery in GCP Console
2. Enable Firestore BigQuery extension
3. Configure export schedule

### Example Queries

**Initiatives by stage over time:**
```sql
SELECT
  DATE(updatedAt) as date,
  stage,
  COUNT(*) as count
FROM `your-project.firestore_export.initiatives`
GROUP BY date, stage
ORDER BY date
```

**Compliance status summary:**
```sql
SELECT
  riskLevel,
  status,
  COUNT(*) as count,
  AVG(valueScore) as avg_value
FROM `your-project.firestore_export.initiatives`
GROUP BY riskLevel, status
```

---

## Cloud Functions for Backend Logic

### Function Examples

**Auto-classify risk level:**
```typescript
export const classifyRisk = functions.firestore
  .document('initiatives/{initiativeId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // Simple rule-based classification
    let riskLevel = 'minimal';

    if (data.usesPersonalData && data.automatesDecisions) {
      riskLevel = 'high';
    } else if (data.userFacing) {
      riskLevel = 'limited';
    }

    await snap.ref.update({
      riskLevel,
      classifiedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });
```

**Generate compliance report:**
```typescript
export const generateComplianceReport = functions.https
  .onCall(async (data, context) => {
    // Verify permissions
    if (!context.auth?.token.role in ['manager', 'admin']) {
      throw new functions.https.HttpsError('permission-denied');
    }

    // Get initiatives
    const initiatives = await admin.firestore()
      .collection('initiatives')
      .where('riskLevel', '==', 'high')
      .get();

    // Generate with Gemini
    const report = await generateWithGemini(initiatives.docs);

    // Store in Cloud Storage
    const file = bucket.file(`reports/${Date.now()}-compliance.pdf`);
    await file.save(report);

    return { url: await file.getSignedUrl({ expires: '24h' }) };
  });
```

---

## Document Storage

### Cloud Storage Structure

```
gs://your-project.appspot.com/
├── documents/
│   ├── initiatives/
│   │   ├── AI-001/
│   │   │   ├── annex-iv.pdf
│   │   │   ├── risk-assessment.pdf
│   │   │   └── audit-2024-01.pdf
│   ├── reports/
│   │   ├── quarterly-2024-q1.pdf
│   │   └── board-paper-2024-03.pdf
│   └── templates/
│       └── annex-iv-template.docx
```

### Security Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /documents/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
        && request.auth.token.role in ['editor', 'manager', 'admin'];
    }
  }
}
```

---

## Gemini Advanced Features

### Gemini Live API (Voice)

Enable voice-based portfolio reviews:

```typescript
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Create live session
const session = await ai.live.connect({
  model: 'gemini-2.0-flash-exp',
  systemInstruction: `You are an AI portfolio assistant.
    Help users review their AI initiatives, understand compliance
    requirements, and make prioritisation decisions.`
});

// Handle voice input
session.on('audio', async (audio) => {
  const response = await session.send(audio);
  // Play response audio
});
```

### Gemini for Analysis

Use Gemini to analyse portfolio health:

```typescript
const analysis = await ai.generateContent({
  model: 'gemini-pro',
  contents: [{
    role: 'user',
    parts: [{
      text: `Analyse this AI portfolio for risks and opportunities:
        ${JSON.stringify(initiatives)}

        Provide:
        1. Overall health assessment
        2. Top 3 risks
        3. Top 3 opportunities
        4. Recommended next actions`
    }]
  }]
});
```

---

## Deployment Checklist

- [ ] Firestore security rules updated for roles
- [ ] Cloud Functions deployed
- [ ] Identity Platform configured
- [ ] BigQuery export enabled
- [ ] Cloud Storage rules set
- [ ] Audit logging enabled
- [ ] Backup schedule configured
- [ ] Monitoring alerts set up
- [ ] Compliance documentation complete

---

## Cost Estimate

| Service | Typical Enterprise Usage |
|---------|--------------------------|
| Firestore | £10-50/month |
| Cloud Functions | £5-20/month |
| BigQuery | £5-30/month |
| Cloud Storage | £1-10/month |
| Identity Platform | £0-50/month |
| Gemini API | £20-100/month |
| **Total** | **£50-250/month** |

---

## Support

Level 4 implementations often benefit from professional support.

**Need help?**
- [Open an issue](https://github.com/maree217/strata/issues)
- [Book a consultation](https://linkedin.com/in/rammaree)

---

*Level 4 complete. You now have enterprise-grade AI governance.*
