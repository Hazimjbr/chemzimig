import { getAdminAuth, getAdminFirestore } from '@/lib/firebase-admin';
import { isAdmin as checkAdminEmail } from '@/lib/admin-config';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { idToken } = body;

        if (!idToken) {
            return NextResponse.json({ success: false, error: 'Token is required' }, { status: 400 });
        }

        const auth = getAdminAuth();
        const decodedToken = await auth.verifyIdToken(idToken);
        const email = decodedToken.email;

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email missing from token' }, { status: 401 });
        }

        // --- Multi-Layer Admin Check ---
        let isAdmin = checkAdminEmail(email);

        // Check the user-created 'admin' collection in Firestore
        if (!isAdmin) {
            const db = getAdminFirestore();
            const adminDoc = await db.collection('admin').doc(email.toLowerCase()).get();
            if (adminDoc.exists && adminDoc.data()?.role === 'admin') {
                isAdmin = true;
            }
        }

        if (!isAdmin) {
            return NextResponse.json({ success: false, error: 'Unauthorized email' }, { status: 401 });
        }

        const sessionData = JSON.stringify({
            isAdmin: true,
            role: 'admin',
            email: email,
            id: decodedToken.uid,
            name: decodedToken.name || email.split('@')[0],
        });

        const response = NextResponse.json({
            success: true,
            user: {
                id: decodedToken.uid,
                email: email,
                name: decodedToken.name || email.split('@')[0],
                isAdmin: true,
                role: 'admin'
            }
        });

        response.cookies.set({
            name: 'chemzim',
            value: encodeURIComponent(sessionData),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        console.error('[VerifyToken API] Error:', error);
        return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
    }
}
