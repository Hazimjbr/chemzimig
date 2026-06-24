import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const src = path.join(process.cwd(), 'public/images/edexcel-alevel/unit-1/lesson-1/1.png');
        const dest = path.join(process.cwd(), 'public/images/edexcel-alevel/unit-1/deflection-paths.png');
        fs.copyFileSync(src, dest);
        const size = fs.statSync(dest).size;
        return NextResponse.json({ success: true, size });
    } catch (e: unknown) {
        return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
    }
}
