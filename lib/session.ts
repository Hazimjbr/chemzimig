// Secure Session Management
// Uses JWT (HS256) to sign and verify session cookies
// This prevents cookie forgery - only the server can create valid tokens

import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

// ============================================
// TYPES
// ============================================

export interface SessionPayload extends JWTPayload {
    isAdmin: boolean;
    role: 'admin' | 'moderator' | 'student';
    email?: string;
    id: string;
    name?: string;
    grade?: string;
    track?: string;
}

// ============================================
// SECRET KEY
// ============================================

function getSecretKey(): Uint8Array {
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
        throw new Error(
            '[Session] SESSION_SECRET is not set in environment variables! ' +
            'Generate one with: openssl rand -base64 32'
        );
    }
    return new TextEncoder().encode(secret);
}

// ============================================
// CREATE (Sign)
// ============================================

/**
 * Creates a signed JWT token from session data.
 * Only the server can create these tokens because only it knows the secret.
 */
export async function createSessionToken(payload: Omit<SessionPayload, 'iat' | 'exp'>): Promise<string> {
    const secret = getSecretKey();

    const token = await new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d') // Token expires in 7 days
        .sign(secret);

    return token;
}

// ============================================
// VERIFY (Unsign)
// ============================================

/**
 * Verifies a JWT token and returns the payload.
 * Returns null if the token is invalid, expired, or tampered with.
 */
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
    try {
        const secret = getSecretKey();
        const { payload } = await jwtVerify(token, secret);
        return payload as SessionPayload;
    } catch {
        // Token is invalid, expired, or tampered with
        return null;
    }
}

// ============================================
// COOKIE HELPERS
// ============================================

export const SESSION_COOKIE_NAME = 'chemzim-session';

export function getSessionCookieOptions() {
    return {
        name: SESSION_COOKIE_NAME,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
    };
}

// ============================================
// SERVER-SIDE SESSION READER (for API Routes)
// ============================================

/**
 * Reads and verifies the session from cookies.
 * Use this in API routes to check who is making the request.
 * Returns the session payload or null if not authenticated.
 */
export async function getSessionFromCookies(): Promise<SessionPayload | null> {
    // Dynamic import to avoid issues in middleware (Edge runtime)
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

    if (!sessionCookie?.value) return null;

    return verifySessionToken(sessionCookie.value);
}
