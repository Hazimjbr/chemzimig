import { NextRequest, NextResponse } from 'next/server';
import { getAllStudents, verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';
import { getAdminFirestore } from '@/lib/firebase-admin';

const STUDENTS_COLLECTION = 'students';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.isAdmin) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const allStudents = await getAllStudents();
        // Return students sorted by creation or name, removing password hashes
        const safeStudents = allStudents
            .filter(s => !s.isAdmin) // don't list admin users here
            .map(s => ({
                ...s,
                passwordHash: undefined,
            }))
            .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

        return NextResponse.json({
            success: true,
            students: safeStudents,
        });
    } catch (error) {
        console.error('Students fetch API error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.isAdmin) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { action, studentId } = body;

        if (!studentId) {
            return NextResponse.json(
                { success: false, error: 'Student ID is required' },
                { status: 400 }
            );
        }

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Firestore not initialized' }, { status: 500 });
        }

        const studentRef = db.collection(STUDENTS_COLLECTION).doc(studentId);
        const studentSnap = await studentRef.get();

        if (!studentSnap.exists) {
            return NextResponse.json({ success: false, error: 'Student not found' }, { status: 404 });
        }

        if (action === 'toggle-active') {
            const current = studentSnap.data()?.isActive ?? true;
            await studentRef.update({ isActive: !current });
            return NextResponse.json({ success: true, isActive: !current });
        }

        if (action === 'delete') {
            await studentRef.delete();
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Students action API error:', error);
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        );
    }
}
