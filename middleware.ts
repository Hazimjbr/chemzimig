import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Admin emails - must match lib/admin-config.ts
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

const SESSION_COOKIE_NAME = 'chemzim-session';

// Simple in-memory rate limiting map
const rateLimits = new Map<string, { count: number; resetTime: number }>();

// Helper function to handle rate limiting
function checkRateLimit(key: string, limit: number, windowMs: number): { allowed: boolean; remaining: number; reset: number } {
    const now = Date.now();
    const limitRecord = rateLimits.get(key);

    if (!limitRecord || now > limitRecord.resetTime) {
        const resetTime = now + windowMs;
        rateLimits.set(key, { count: 1, resetTime });
        return { allowed: true, remaining: limit - 1, reset: resetTime };
    }

    if (limitRecord.count >= limit) {
        return { allowed: false, remaining: 0, reset: limitRecord.resetTime };
    }

    limitRecord.count += 1;
    return { allowed: true, remaining: limit - limitRecord.count, reset: limitRecord.resetTime };
}

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

    // ============ Rate Limiting ============
    if (pathname.startsWith('/api/')) {
        const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || '127.0.0.1';
        
        let limit = 60; // 60 requests
        let windowMs = 60 * 1000; // 1 minute
        let rateLimitKey = `${ip}:general`;

        if (pathname.startsWith('/api/auth/')) {
            limit = 15; // 15 attempts
            windowMs = 15 * 60 * 1000; // 15 minutes
            rateLimitKey = `${ip}:auth`;
        }

        const { allowed, remaining, reset } = checkRateLimit(rateLimitKey, limit, windowMs);

        if (!allowed) {
            const retryAfter = Math.ceil((reset - Date.now()) / 1000);
            return new NextResponse(
                JSON.stringify({ error: 'Too many requests. Please try again later.' }),
                {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json',
                        'Retry-After': String(retryAfter),
                        'X-RateLimit-Limit': String(limit),
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': String(Math.ceil(reset / 1000))
                    }
                }
            );
        }
    }

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
