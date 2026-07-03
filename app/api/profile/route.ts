import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth-store-admin';
import { cookies } from 'next/headers';
import { getAdminFirestore } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('chemzim-session')?.value || cookieStore.get('chemzim')?.value;
        const session = await verifySession(sessionCookie);

        if (!session || !session.id) {
            return NextResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { image, lastStudiedLesson } = body;

        const db = getAdminFirestore();
        if (!db) {
            return NextResponse.json({ success: false, error: 'Database not initialized' }, { status: 500 });
        }

        const updateData: any = {};
        if (image !== undefined) {
            updateData.image = image;
        }
        if (lastStudiedLesson !== undefined) {
            updateData.lastStudiedLesson = lastStudiedLesson;
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ success: false, error: 'No data to update' }, { status: 400 });
        }

        // Update student document in Firestore
        await db.collection('students').doc(session.id).update(updateData);

        return NextResponse.json({
            success: true,
            updated: updateData
        });
    } catch (error: any) {
        console.error('[Profile API] Update error:', error);
        return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
    }
}
