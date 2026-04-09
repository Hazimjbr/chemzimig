import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Admin emails - must match lib/admin-config.ts
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

function isAdminEmail(email: string | null | undefined): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only protect admin and dashboard routes
    const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
    const isDashboardRoute = pathname.startsWith('/dashboard');

    if (!isAdminRoute && !isDashboardRoute) {
        return NextResponse.next();
    }

    // Check the chemzim session cookie
    const sessionCookie = request.cookies.get('chemzim');
    if (sessionCookie?.value) {
        try {
            const decoded = decodeURIComponent(sessionCookie.value);
            const session = JSON.parse(decoded);

            // Dashboard: any authenticated user
            if (isDashboardRoute && session?.id) {
                return NextResponse.next();
            }

            // Admin: must be admin role
            if (isAdminRoute && (session?.isAdmin === true || session?.role === 'admin')) {
                return NextResponse.next();
            }
        } catch {
            // Invalid cookie
        }
    }

    // Not authorized - redirect to login with return URL
    if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*', '/dashboard/:path*'],
};
