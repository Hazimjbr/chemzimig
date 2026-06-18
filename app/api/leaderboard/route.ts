import { NextRequest, NextResponse } from 'next/server';
import { getAdminFirestore } from '@/lib/firebase-admin';

// Helper to generate mock data in English
const generateMockData = (count: number) => {
    const names = [
        "Abdullah Hazim", "Mohammad Al-Jaber", "Khalil Badarin", "Ahmed Alsaudi",
        "Sarah Ahmed", "Omar Youssef", "Noor Al-Huda", "Karim Abdullah",
        "Layla Hassan", "Yasmin Samir", "Zaid Tariq", "Mariam Said", "Youssef Omar",
        "Hibatullah", "Mustafa Kamil", "Rana Mahmoud", "Khaled Yehia", "Faisal Al-Anzi",
        "Jana Al-Qahtani", "Saad Al-Mutairi", "Rima Al-Fayez", "Fahad Al-Shammari"
    ];

    const avatars = [
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Aneka",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Zack",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Milo",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Willow",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Jasper",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Aria",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Finn",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Maya",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Omar",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Ali",
        "https://api.dicebear.com/7.x/adventurer/svg?seed=Noor",
        null, null
    ];

    const titles = [
        "Lab Bomber", "Atom Sniper", "Chem Wizard", "Acid Destroyer",
        "Reaction King", "Mad Professor", "Explosive Expert", "Trophy Hunter",
        "Sole Survivor", "Precision Master", "Nuclear Chemist", "Chemistry Legend"
    ];

    return Array.from({ length: count }).map((_, i) => ({
        rank: i + 1,
        id: `mock-user-${i}`,
        name: names[i % names.length],
        title: titles[Math.floor(Math.random() * titles.length)],
        avatar: avatars[i % avatars.length] || null,
        xp: Math.floor(15000 * Math.pow(0.95, i)),
        level: Math.floor(20 * Math.pow(0.95, i)) + 1,
        streak: Math.floor(Math.random() * 50) + 1,
        completedLessons: Math.floor(Math.random() * 30) + 5,
        labAccuracy: Math.floor(Math.random() * 30) + 70,
        experimentsCompleted: Math.floor(Math.random() * 20) + 1,
    }));
};

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const limitCount = parseInt(searchParams.get('limit') || '50');
        const period = searchParams.get('period') || 'all';

        interface LeaderboardEntry {
            rank: number;
            id: string;
            name: string;
            title?: string;
            avatar: string | null;
            xp: number;
            level: number;
            streak: number;
            completedLessons: number;
            labAccuracy?: number;
            experimentsCompleted?: number;
        }

        let leaderboard: LeaderboardEntry[] = [];

        try {
            const db = getAdminFirestore();
            if (db) {
                const snapshot = await db.collection('students')
                    .orderBy('xp', 'desc')
                    .limit(limitCount)
                    .get();

                if (!snapshot.empty) {
                    leaderboard = snapshot.docs.map((doc, index) => {
                        const data = doc.data();
                        return {
                            rank: index + 1,
                            id: `player-${index + 1}`, // Hide real Firestore ID from public API
                            name: data.name || 'Student',
                            title: data.title || '',
                            avatar: data.avatar || null,
                            xp: data.xp || 0,
                            level: data.level || 1,
                            streak: data.streak?.currentStreak || 0,
                            completedLessons: data.completedLessons?.length || 0,
                            labAccuracy: typeof data.labAccuracy === 'number' ? data.labAccuracy : undefined,
                            experimentsCompleted: typeof data.experimentsCompleted === 'number' ? data.experimentsCompleted : undefined
                        };
                    });
                }
            }
        } catch (dbError) {
            console.warn('Database fetch failed, falling back to mock data', dbError);
        }

        // If DB has users, but less than 10, fill the rest with mock data for aesthetic display
        if (leaderboard.length > 0 && leaderboard.length < 10) {
            const lowestRealXP = leaderboard[leaderboard.length - 1].xp || 1000;
            const needed = 10 - leaderboard.length;
            const mocks = generateMockData(needed).map((m, idx) => ({
                ...m,
                id: `mock-fill-${idx}`,
                xp: Math.max(100, Math.floor(lowestRealXP * Math.pow(0.85, idx + 1))),
                level: Math.max(1, Math.floor((lowestRealXP * Math.pow(0.85, idx + 1)) / 1000) + 1)
            }));
            
            // Merge and sort by XP (if we want real users to compete naturally)
            const merged = [...leaderboard, ...mocks].sort((a, b) => b.xp - a.xp);
            
            // Re-rank
            leaderboard = merged.map((entry, index) => ({
                ...entry,
                rank: index + 1
            }));
        } else if (leaderboard.length === 0) {
            // Fallback to Mock Data if DB is empty or failed
            leaderboard = generateMockData(limitCount);
        }

        // SERVER-SIDE SORTING for Mad Scientist mode
        if (period === 'mad-scientist') {
            leaderboard = leaderboard
                .sort((a, b) => {
                    const aAccuracy = a.labAccuracy ?? -1;
                    const bAccuracy = b.labAccuracy ?? -1;
                    const accuracyDiff = bAccuracy - aAccuracy;
                    if (accuracyDiff !== 0) return accuracyDiff;
                    return (b.experimentsCompleted ?? 0) - (a.experimentsCompleted ?? 0);
                })
                .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
        }

        return NextResponse.json({
            success: true,
            leaderboard,
            total: leaderboard.length,
            sortedBy: period === 'mad-scientist' ? 'labAccuracy' : 'xp'
        });
    } catch (error) {
        console.error('Leaderboard API error:', error);
        return NextResponse.json({
            success: true,
            leaderboard: generateMockData(50),
            total: 50
        });
    }
}
