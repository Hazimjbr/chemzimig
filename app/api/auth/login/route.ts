import { NextRequest, NextResponse } from 'next/server';
import { authenticateStudent, initializeAdmin } from '@/lib/auth-store-admin';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password, fingerprint, deviceInfo } = body;

        if (!username || !password) {
            return NextResponse.json(
                { success: false, error: 'Username and password are required' },
                { status: 400 }
            );
        }

        if (!fingerprint) {
            return NextResponse.json(
                { success: false, error: 'Device not recognized' },
                { status: 400 }
            );
        }

        // Get IP address
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        // Ensure admin exists
        await initializeAdmin();

        const result = await authenticateStudent(
            username,
            password,
            fingerprint,
            { ...deviceInfo, ipAddress }
        );

        if (result.success && result.student) {
            const safeStudent = {
                id: result.student.id,
                username: result.student.username,
                name: result.student.name,
                email: result.student.email,
                image: result.student.image,
                grade: result.student.grade,
                isAdmin: result.student.isAdmin || false,
                role: result.student.role || 'student',
            };

            const response = NextResponse.json({
                success: true,
                user: safeStudent,
            });

            // Set secure HttpOnly session cookie
            const sessionData = JSON.stringify({
                isAdmin: safeStudent.isAdmin,
                role: safeStudent.role,
                email: safeStudent.email,
                id: safeStudent.id
            });

            response.cookies.set({
                name: 'chemzim',
                value: encodeURIComponent(sessionData),
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7, // 7 days
            });

            return response;
        }

        return NextResponse.json({
            success: false,
            error: result.error,
            requiresDeviceApproval: result.requiresDeviceApproval,
            deviceRequestId: result.deviceRequestId,
        });
    } catch (error) {
        console.error('[Login API] Error:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected server error occurred' },
            { status: 500 }
        );
    }
}
