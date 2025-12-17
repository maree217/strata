# Level 3: Integrate

**Time:** 1-2 hours
**Technical skill:** Comfortable with Firebase console
**Output:** Dashboard with real data persistence and authentication

---

## What You'll Add

Level 3 adds **persistence** and **multi-user support**:

| Feature | Level 2 | Level 3 |
|---------|---------|---------|
| Data storage | In code | Firestore database |
| Users | Single | Multiple with auth |
| Updates | Edit code & redeploy | Edit in dashboard |
| Sharing | View only | Collaborative |

---

## Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────┐
│   Browser    │────▶│ Firebase Hosting │────▶│  Firestore  │
│   (React)    │     │   (Static CDN)   │     │ (Database)  │
└──────────────┘     └──────────────────┘     └─────────────┘
       │                                             │
       ▼                                             ▼
┌──────────────┐                           ┌─────────────────┐
│  Gemini API  │                           │ Firebase Auth   │
│ (AI Studio)  │                           │ (Google SSO)    │
└──────────────┘                           └─────────────────┘
```

---

## Part 1: Set Up Firestore

### 1.1 Create Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (from Level 2)
3. Click **Build** → **Firestore Database**
4. Click **Create database**
5. Choose **Start in test mode** (we'll secure later)
6. Select a location close to your users

### 1.2 Create Collections

In Firestore, create these collections:

**Collection: `initiatives`**
```javascript
{
  id: "AI-001",
  name: "Customer Service Chatbot",
  department: "Support",
  owner: "jane.smith@company.com",
  stage: "beta",  // idea, discovery, alpha, beta, live
  riskLevel: "limited",  // minimal, limited, high, unacceptable
  status: "compliant",  // compliant, action_required, under_review
  description: "AI-powered chatbot for first-line customer support",
  valueScore: 4,
  effortScore: 3,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  createdBy: "user-uid"
}
```

**Collection: `departments`**
```javascript
{
  id: "support",
  name: "Customer Support",
  lead: "jane.smith@company.com",
  initiativeCount: 3
}
```

**Collection: `activities`**
```javascript
{
  id: auto-generated,
  initiativeId: "AI-001",
  type: "status_change",  // created, status_change, stage_change, comment
  message: "Moved to Beta",
  userId: "user-uid",
  userName: "Jane Smith",
  timestamp: Timestamp
}
```

---

## Part 2: Set Up Authentication

### 2.1 Enable Google Sign-In

1. In Firebase Console → **Build** → **Authentication**
2. Click **Get started**
3. Click **Sign-in method** tab
4. Enable **Google**
5. Add your project's email as support email
6. Save

### 2.2 Add Authorised Domains

1. Still in Authentication
2. Click **Settings** tab
3. Under **Authorised domains**, add:
   - `localhost`
   - `your-project.web.app`
   - `your-project.firebaseapp.com`
   - Any custom domain

---

## Part 3: Update the Dashboard

### 3.1 Install Firebase SDK

```bash
cd strata/dashboard
npm install firebase
```

### 3.2 Create Firebase Config

Create `src/config/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

### 3.3 Update Environment Variables

Add to `.env.local`:

```bash
# Existing
VITE_GEMINI_API_KEY=your_gemini_key

# New - get these from Firebase Console → Project Settings → General
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 3.4 Create Auth Hook

Create `src/hooks/useAuth.ts`:

```typescript
import { useState, useEffect } from 'react';
import { auth, googleProvider } from '../config/firebase';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signIn = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);

  return { user, loading, signIn, logOut };
}
```

### 3.5 Create Data Hook

Create `src/hooks/useInitiatives.ts`:

```typescript
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';

export function useInitiatives() {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'initiatives'),
      orderBy('updatedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setInitiatives(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const addInitiative = async (data) => {
    return addDoc(collection(db, 'initiatives'), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  };

  const updateInitiative = async (id, data) => {
    return updateDoc(doc(db, 'initiatives', id), {
      ...data,
      updatedAt: serverTimestamp()
    });
  };

  return { initiatives, loading, addInitiative, updateInitiative };
}
```

---

## Part 4: Secure Your Database

### 4.1 Firestore Security Rules

In Firebase Console → Firestore → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Only authenticated users can read/write
    match /initiatives/{initiativeId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null
        && get(/databases/$(database)/documents/initiatives/$(initiativeId)).data.createdBy == request.auth.uid;
    }

    match /departments/{departmentId} {
      allow read: if request.auth != null;
      allow write: if false; // Admin only via console
    }

    match /activities/{activityId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```

Click **Publish**.

---

## Part 5: Deploy

```bash
npm run build
firebase deploy
```

---

## Cost Estimate

| Service | Free Tier | Typical Cost |
|---------|-----------|--------------|
| Firestore | 1GB storage, 50K reads/day | £0 for most teams |
| Firebase Auth | Unlimited Google sign-in | £0 |
| Firebase Hosting | 10GB/month | £0 |
| Gemini API | 15 RPM | £0 |
| **Total** | | **£0-25/month** |

Most teams stay within free tier indefinitely.

---

## Testing Checklist

- [ ] Can sign in with Google
- [ ] Can see initiatives list
- [ ] Can add new initiative
- [ ] Can edit existing initiative
- [ ] Data persists after refresh
- [ ] Multiple users see same data
- [ ] Activity feed updates in real-time

---

## Troubleshooting

### "Permission denied" errors
- Check Firestore rules are published
- Verify user is signed in
- Check browser console for specific error

### Auth popup blocked
- Allow popups for your domain
- Or use `signInWithRedirect` instead

### Data not updating
- Check Firestore console for writes
- Verify collection names match exactly
- Check for typos in field names

---

## Next Steps

**Happy with basic multi-user?**
- You're set! Level 3 covers most team needs
- Add more users via Google Auth
- Monitor usage in Firebase Console

**Need enterprise features?**
- → [Level 4: Govern](../level-4-govern) — Add compliance, audit trails, SSO

---

*Level 3 complete. You now have a collaborative AI portfolio with real persistence.*

→ Next: [Level 4: Govern](../level-4-govern)
