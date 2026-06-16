import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Admin emails - must match lib/admin-config.ts
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

const SESSION_COOKIE_NAME = 'chemzim-session';

function isAdminEmail(email: string | null | undefined): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}

function getSecretKey(): Uint8Array {
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
        console.error('[Middleware] SESSION_SECRET is not set!');
        return new TextEncoder().encode('fallback-do-not-use-in-production');
    }
    return new TextEncoder().encode(secret);
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ============ CSRF Protection for ALL API mutation requests ============
    if (pathname.startsWith('/api/') && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
        const origin = request.headers.get('origin');
        const host = request.headers.get('host');

        // Allow requests with no origin (server-to-server, same-origin navigations)
        if (origin) {
            const allowedOrigins = [
                `http://${host}`,
                `https://${host}`,
                'http://localhost:3001',
                'https://chemzim.vercel.app',
            ];

            if (!allowedOrigins.includes(origin)) {
                return NextResponse.json(
                    { error: 'Forbidden - invalid origin' },
                    { status: 403 }
                );
            }
        }
    }

    // ============ Admin route protection ============
    if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
        return NextResponse.next();
    }

    // 1. Check signed JWT session cookie (The only source of truth now)
    const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);
    if (sessionCookie?.value) {
        try {
            const secret = getSecretKey();
            const { payload } = await jwtVerify(sessionCookie.value, secret);

            // Verify admin claims from the SIGNED token (cannot be forged)
            if (payload.isAdmin === true || payload.role === 'admin' || payload.role === 'moderator') {
                return NextResponse.next();
            }
        } catch {
            // Invalid/expired/tampered token - fall through to deny
        }
    }

    // 2. Fallback: NextAuth JWT (if configured)
    try {
        const { getToken } = await import('next-auth/jwt');
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        });
        if (token?.email && isAdminEmail(token.email)) {
            return NextResponse.next();
        }
    } catch {
        // next-auth not available
    }

    // Not authorized - redirect pages to home, return 401 for API routes
    if (pathname.startsWith('/api/admin')) {
        return NextResponse.json(
            { error: 'Unauthorized access' },
            { status: 401 }
        );
    }

    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ['/admin/:path*', '/api/:path*'],
};
