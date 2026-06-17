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

    // Skip auth check for public API auth endpoints
    if (pathname.startsWith('/api/auth/')) {
        return NextResponse.next();
    }

    // Identify paths that require protection
    const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
    const isDashboardRoute = pathname.startsWith('/dashboard');
    const isOlevelRoute = pathname.startsWith('/dashboard/curriculum/cie-igcse') || pathname.startsWith('/api/cie-igcse');
    const isAlevelRoute = pathname.startsWith('/dashboard/curriculum/cie-alevel') || pathname.startsWith('/api/cie-alevel');
    const isEdexcelRoute = pathname.startsWith('/dashboard/curriculum/edexcel-alevel') || pathname.startsWith('/api/edexcel-alevel');

    if (!isAdminRoute && !isDashboardRoute && !isOlevelRoute && !isAlevelRoute && !isEdexcelRoute) {
        return NextResponse.next();
    }

    // 1. Check signed JWT session cookie (The only source of truth now)
    const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME);
    let sessionPayload: any = null;

    if (sessionCookie?.value) {
        try {
            const secret = getSecretKey();
            const { payload } = await jwtVerify(sessionCookie.value, secret);
            sessionPayload = payload;
        } catch {
            // Invalid/expired/tampered token
        }
    }

    // Redirect to login if not authenticated
    if (!sessionPayload) {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json(
                { error: 'Unauthorized access' },
                { status: 401 }
            );
        }
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('returnUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    const { role, isAdmin, track } = sessionPayload;
    const isSystemAdmin = isAdmin === true || role === 'admin' || role === 'moderator';

    // 2. Admin Route Protection
    if (isAdminRoute && !isSystemAdmin) {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 3. O-Level Route Protection
    if (isOlevelRoute && !isSystemAdmin && track !== 'cie-igcse') {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 4. A-Level Route Protection
    if (isAlevelRoute && !isSystemAdmin && track !== 'cie-alevel') {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 5. Edexcel A-Level Route Protection
    if (isEdexcelRoute && !isSystemAdmin && track !== 'edexcel-alevel') {
        if (pathname.startsWith('/api/')) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/:path*', '/dashboard/:path*'],
};
