import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

// Firebase configuration - loaded from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Warn if critical keys are missing
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('[Firebase] Missing environment variables! Check .env.local');
}

// Check if Firebase is configured
export const isFirebaseConfigured = true;

// Lazy initialization
let _app: FirebaseApp | null = null;
let _db: Firestore | null = null;
let _auth: Auth | null = null;

function ensureInitialized(): FirebaseApp {
    if (_app) return _app;

    try {
        if (typeof window !== 'undefined') {
            console.log('[Firebase] Initialization attempt...');
            if (!firebaseConfig.apiKey) {
                console.error('[Firebase] API KEY IS MISSING ON CLIENT!');
            } else {
                console.log('[Firebase] API Key detected (starts with):', firebaseConfig.apiKey.substring(0, 5));
            }
        }
        
        if (getApps().length > 0) {
            _app = getApp();
        } else {
            _app = initializeApp(firebaseConfig);
        }

        console.log('[Firebase] App initialized successfully');
        return _app;
    } catch (error) {
        console.error('[Firebase] Initialization error:', error);
        throw error;
    }
}

// --- Exported Helpers ---

export function getFirebaseApp(): FirebaseApp {
    return ensureInitialized();
}

export function getFirestoreDB(): Firestore {
    if (!_db) {
        const app = ensureInitialized();
        _db = getFirestore(app);
    }
    return _db;
}

export function getAuthInstance(): Auth {
    if (!_auth) {
        const app = ensureInitialized();
        _auth = getAuth(app);
    }
    return _auth;
}

// Legacy exports - Now work on both server and client
// Using getter functions to ensure lazy initialization works in all environments
export const db = getFirestoreDB();
export const auth = getAuthInstance();
export default getFirebaseApp();
