import { NextRequest, NextResponse } from 'next/server';
import { createStudent, verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        // --- 1. Security Lockdown: Only Admins can call this
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.isAdmin) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized: Only the platform owner can create accounts.' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, username, password, grade, email } = body;

        if (!name || !username || !password || !grade) {
            return NextResponse.json(
                { success: false, error: 'Name, username, password, and grade are required' },
                { status: 400 }
            );
        }

        if (username.length < 3) {
            return NextResponse.json(
                { success: false, error: 'Username must be at least 3 characters' },
                { status: 400 }
            );
        }

        if (password.length < 4) {
            return NextResponse.json(
                { success: false, error: 'Password must be at least 4 characters' },
                { status: 400 }
            );
        }

        const result = await createStudent({
            username,
            passwordHash: password,
            name,
            email: email || '',
            grade,
        });

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Account created successfully' });
        }

        return NextResponse.json(
            { success: false, error: result.error },
            { status: 409 }
        );
    } catch (error) {
        console.error('[Join API] Error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error during registration' },
            { status: 500 }
        );
    }
}
