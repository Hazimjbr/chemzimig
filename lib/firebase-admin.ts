import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

// Singleton instances
let _adminApp: App | null = null;
let _adminAuth: Auth | null = null;
let _adminDb: Firestore | null = null;

function getAdminApp(): App {
    if (_adminApp) return _adminApp;

    if (getApps().length > 0) {
        _adminApp = getApps()[0];
        return _adminApp;
    }

    // Validate required environment variables
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
        throw new Error(
            '[Firebase Admin] Missing environment variables: ' +
            'FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, or FIREBASE_PRIVATE_KEY'
        );
    }

    const cleanedKey = privateKey.trim().replace(/^["']|["']$/g, '');
    let processedPrivateKey = cleanedKey;
    
    // If it doesn't look like a standard PEM key, assume it's Base64 encoded (Vercel Production)
    if (!cleanedKey.includes('-----BEGIN PRIVATE KEY-----')) {
        // Strip all whitespace/newlines that might have been copied from a wrapped terminal window
        const strictBase64 = cleanedKey.replace(/[\s\r\n]+/g, '');
        processedPrivateKey = Buffer.from(strictBase64, 'base64').toString('utf8');
    } else {
        // Fallback for Local Development (.env.local)
        processedPrivateKey = cleanedKey.replace(/\\n/g, '\n');
    }

    _adminApp = initializeApp({
        credential: cert({
            projectId,
            clientEmail,
            privateKey: processedPrivateKey,
        }),
    });

    console.log('[Firebase Admin] Initialized successfully');
    return _adminApp;
}

// --- Exported Helpers ---

export function getAdminAuth(): Auth {
    if (!_adminAuth) {
        _adminAuth = getAuth(getAdminApp());
    }
    return _adminAuth;
}

export function getAdminFirestore(): Firestore {
    if (!_adminDb) {
        _adminDb = getFirestore(getAdminApp());
    }
    return _adminDb;
}
