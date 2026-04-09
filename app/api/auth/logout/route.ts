import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('chemzim');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[Logout API] Error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
