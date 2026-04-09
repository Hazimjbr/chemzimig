import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Admin emails - must match lib/admin-config.ts
const ADMIN_EMAILS = ['h75jbr@gmail.com'];

function isAdminEmail(email: string | null | undefined): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}

export async function middleware(request: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*', '/dashboard/:path*'],
};
