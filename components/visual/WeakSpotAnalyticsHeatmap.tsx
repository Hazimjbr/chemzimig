'use client';

import React, { useMemo, useState } from 'react';
import { 
    AlertTriangle, 
    TrendingUp, 
    BookOpen, 
    ChevronRight, 
    Sparkles, 
    Target, 
    CheckCircle2, 
    BarChart3,
    ArrowUpRight,
    Zap
} from 'lucide-react';
import Link from 'next/link';
import { useGamification, MistakeItem, SolvedQuestionStatus } from '@/contexts/GamificationContext';
import { allCurricula, Topic } from '@/data/curriculum';

export interface TopicWeakSpot {
    unitNumber: number;
    unitTitle: string;
    topicId: string;
    curriculumId: string;
    mistakesCount: number;
    totalAttempts: number;
    accuracyPercent: number;
    weaknessPercent: number; // 100 - accuracy
    severity: 'critical' | 'moderate' | 'stable';
    recommendedLessonNum: number;
    recommendedLessonTitle: string;
    subtopicsSummary: string[];
}

export function WeakSpotAnalyticsHeatmap() {
    const { mistakeInbox, solvedQuestions } = useGamification();
    const [selectedTab, setSelectedTab] = useState<'all' | 'critical' | 'moderate'>('all');

    // 1. Analyze mistakes & attempts by curriculum & unit
    const analytics = useMemo(() => {
        const mistakes = mistakeInbox || [];
        const solved = solvedQuestions || {};

        // Aggregate stats by unitKey: e.g. "cie-igcse-unit-3" or "edexcel-a2-unit-4"
        const unitStats: Record<string, {
            mistakes: number;
            totalAttempts: number;
            correctAttempts: number;
            unitNumber: number;
            curriculumId: string;
        }> = {};

        // First, extract data from solvedQuestions
        Object.entries(solved).forEach(([qId, data]) => {
            // Pattern: cie-igcse-u3-l2-q1 or edexcel-a2-unit-4-l1-q5 or custom id
            const match = qId.match(/^([a-z0-9\-]+?)-(?:u|unit-)(\d+)/i);
            if (match) {
                const curriculumTrack = match[1].toLowerCase();
                const unitNum = parseInt(match[2], 10);
                const key = `${curriculumTrack}-unit-${unitNum}`;

                if (!unitStats[key]) {
                    unitStats[key] = {
                        mistakes: 0,
                        totalAttempts: 0,
                        correctAttempts: 0,
                        unitNumber: unitNum,
                        curriculumId: curriculumTrack,
                    };
                }

                unitStats[key].totalAttempts += 1;
                if (data.isCorrect) {
                    unitStats[key].correctAttempts += 1;
                } else {
                    unitStats[key].mistakes += 1;
                }
            }
        });

        // Second, augment from mistakeInbox to ensure all recorded mistakes are weighted
        mistakes.forEach(m => {
            const match = m.questionId.match(/^([a-z0-9\-]+?)-(?:u|unit-)(\d+)/i);
            if (match) {
                const curriculumTrack = match[1].toLowerCase();
                const unitNum = parseInt(match[2], 10);
                const key = `${curriculumTrack}-unit-${unitNum}`;

                if (!unitStats[key]) {
                    unitStats[key] = {
                        mistakes: 0,
                        totalAttempts: 0,
                        correctAttempts: 0,
                        unitNumber: unitNum,
                        curriculumId: curriculumTrack,
                    };
                }

                // If not already counted in solved, add mistake count
                if (unitStats[key].mistakes === 0) {
                    unitStats[key].mistakes = m.wrongCount || 1;
                    unitStats[key].totalAttempts += m.wrongCount || 1;
                }
            }
        });

        // Translate aggregated unitStats into enriched TopicWeakSpot array
        const spots: TopicWeakSpot[] = [];

        Object.entries(unitStats).forEach(([key, stat]) => {
            // Resolve curriculum
            let matchedCurr = allCurricula.find(c => 
                c.id.toLowerCase().startsWith(stat.curriculumId) || 
                stat.curriculumId.startsWith(c.id.toLowerCase())
            );

            // Fallback for edexcel tracks
            if (!matchedCurr && stat.curriculumId.includes('edexcel')) {
                matchedCurr = allCurricula.find(c => 
                    stat.unitNumber >= 4 ? c.id.includes('a2') : c.id.includes('as')
                );
            }
            if (!matchedCurr) matchedCurr = allCurricula[0];

            // Resolve unit topic
            const topic = matchedCurr.topics.find(t => t.number === stat.unitNumber) || matchedCurr.topics[0];
            const unitTitle = topic ? topic.title : `Unit ${stat.unitNumber}`;

            const attempts = Math.max(stat.totalAttempts, stat.mistakes);
            const accuracy = attempts > 0 ? Math.round(((attempts - stat.mistakes) / attempts) * 100) : 100;
            const weakness = Math.max(0, 100 - accuracy);

            let severity: 'critical' | 'moderate' | 'stable' = 'stable';
            if (weakness >= 45 || stat.mistakes >= 4) {
                severity = 'critical';
            } else if (weakness >= 20 || stat.mistakes >= 2) {
                severity = 'moderate';
            }

            // Recommended Lesson calculation
            const subtopics = topic?.subtopics || [];
            const recommendedLessonNum = Math.min(subtopics.length || 1, Math.max(1, stat.mistakes % (subtopics.length || 1) + 1));
            const recommendedLessonTitle = subtopics[recommendedLessonNum - 1] || 'Core Foundation Review';

            spots.push({
                unitNumber: stat.unitNumber,
                unitTitle,
                topicId: topic ? topic.id : `unit-${stat.unitNumber}`,
                curriculumId: matchedCurr.id,
                mistakesCount: stat.mistakes,
                totalAttempts: attempts,
                accuracyPercent: accuracy,
                weaknessPercent: weakness,
                severity,
                recommendedLessonNum,
                recommendedLessonTitle,
                subtopicsSummary: subtopics.slice(0, 3)
            });
        });

        // If no user mistakes recorded yet, provide realistic mock starter units
        if (spots.length === 0) {
            const defaultCurr = allCurricula[0];
            defaultCurr.topics.slice(0, 4).forEach((t, idx) => {
                const subtopics = t.subtopics || [];
                const mockWeakness = idx === 0 ? 40 : idx === 1 ? 65 : 15;
                spots.push({
                    unitNumber: t.number,
                    unitTitle: t.title,
                    topicId: t.id,
                    curriculumId: defaultCurr.id,
                    mistakesCount: idx === 1 ? 4 : idx === 0 ? 2 : 0,
                    totalAttempts: 10,
                    accuracyPercent: 100 - mockWeakness,
                    weaknessPercent: mockWeakness,
                    severity: mockWeakness >= 50 ? 'critical' : mockWeakness >= 25 ? 'moderate' : 'stable',
                    recommendedLessonNum: 1,
                    recommendedLessonTitle: subtopics[0] || 'Core Concepts',
                    subtopicsSummary: subtopics.slice(0, 3)
                });
            });
        }

        // Sort: Critical & highest weakness first
        return spots.sort((a, b) => b.weaknessPercent - a.weaknessPercent);
    }, [mistakeInbox, solvedQuestions]);

    // Top Critical Focus Topic
    const topWeakSpot = useMemo(() => {
        return analytics.find(s => s.severity === 'critical') || analytics[0];
    }, [analytics]);

    // Filtered by active tab
    const filteredAnalytics = useMemo(() => {
        if (selectedTab === 'critical') return analytics.filter(s => s.severity === 'critical');
        if (selectedTab === 'moderate') return analytics.filter(s => s.severity === 'moderate');
        return analytics;
    }, [analytics, selectedTab]);

    return (
        <div className="w-full space-y-6">
            
            {/* Header with Title & Filter Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                        <BarChart3 className="w-6 h-6 text-indigo-400" />
                        <span>Diagnostic Weak Spot Radar</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                        Real-time AI vulnerability mapping based on your quiz & exam mistakes
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 w-fit backdrop-blur-md">
                    <button
                        onClick={() => setSelectedTab('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedTab === 'all' 
                                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20' 
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        All Topics ({analytics.length})
                    </button>
                    <button
                        onClick={() => setSelectedTab('critical')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedTab === 'critical' 
                                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20' 
                                : 'text-slate-400 hover:text-rose-400'
                        }`}
                    >
                        Needs Review ({analytics.filter(s => s.severity === 'critical').length})
                    </button>
                </div>
            </div>

            {/* Predictive Focus Alert Banner */}
            {topWeakSpot && topWeakSpot.weaknessPercent > 0 && (
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-500/15 via-rose-500/5 to-indigo-500/10 border border-rose-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl shadow-rose-500/5 backdrop-blur-xl">
                    <div className="flex items-start sm:items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0 shadow-inner shadow-rose-500/30">
                            <AlertTriangle className="w-6 h-6 animate-bounce" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300">
                                    Priority Revision Alert
                                </span>
                                <span className="text-xs text-rose-400/80 font-semibold">
                                    {topWeakSpot.weaknessPercent}% Error Vulnerability
                                </span>
                            </div>
                            <h4 className="text-base sm:text-lg font-black text-white">
                                {topWeakSpot.unitTitle}
                            </h4>
                            <p className="text-xs text-slate-300/80 mt-0.5">
                                Recommended Action: Master <strong>Lesson {topWeakSpot.recommendedLessonNum}: {topWeakSpot.recommendedLessonTitle}</strong>
                            </p>
                        </div>
                    </div>

                    <Link
                        href={`/dashboard/curriculum/${topWeakSpot.curriculumId}/${topWeakSpot.topicId}?tab=theory&lesson=${topWeakSpot.recommendedLessonNum}`}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-rose-500/20 transition-all active:scale-95 flex-shrink-0"
                    >
                        <Zap className="w-4 h-4" />
                        <span>Reinforce Lesson Now</span>
                    </Link>
                </div>
            )}

            {/* Heatmap Units Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAnalytics.map((spot, i) => {
                    const isCritical = spot.severity === 'critical';
                    const isModerate = spot.severity === 'moderate';

                    const borderStyle = isCritical 
                        ? 'border-rose-500/30 hover:border-rose-500/60 shadow-rose-500/5' 
                        : isModerate 
                            ? 'border-amber-500/30 hover:border-amber-500/60 shadow-amber-500/5' 
                            : 'border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-500/5';

                    const badgeStyle = isCritical 
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
                        : isModerate 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';

                    const progressColor = isCritical 
                        ? 'from-rose-500 to-red-600' 
                        : isModerate 
                            ? 'from-amber-500 to-orange-500' 
                            : 'from-emerald-500 to-teal-500';

                    return (
                        <div
                            key={i}
                            className={`rounded-3xl p-6 bg-gradient-to-br from-[#0c162c] via-[#091124] to-[#060c1a] border ${borderStyle} shadow-xl transition-all duration-300 flex flex-col justify-between group`}
                        >
                            <div>
                                {/* Header badge row */}
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                                        Unit {spot.unitNumber}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                                        {spot.weaknessPercent}% Weakness
                                    </span>
                                </div>

                                {/* Title */}
                                <h4 className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
                                    {spot.unitTitle}
                                </h4>

                                {/* Diagnostic Error Bar */}
                                <div className="space-y-1.5 my-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400">Concept Accuracy</span>
                                        <span className="font-mono font-bold text-white">{spot.accuracyPercent}%</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700`}
                                            style={{ width: `${spot.accuracyPercent}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Recommendation Card */}
                                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1 text-xs mb-4">
                                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                                        Suggested Review:
                                    </span>
                                    <div className="text-white font-bold truncate">
                                        Lesson {spot.recommendedLessonNum}: {spot.recommendedLessonTitle}
                                    </div>
                                </div>
                            </div>

                            {/* Card CTA */}
                            <Link
                                href={`/dashboard/curriculum/${spot.curriculumId}/${spot.topicId}?tab=theory&lesson=${spot.recommendedLessonNum}`}
                                className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-indigo-500 text-slate-300 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-indigo-500/40 mt-2 shadow-sm"
                            >
                                <span>Strengthen Topic</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
