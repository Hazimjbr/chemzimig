import React from 'react';
import { allCurricula } from '@/data/curriculum';
import { getLessonFromRegistry } from '@/data/curriculum/registry';
import { getSessionFromCookies } from '@/lib/session';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, ChevronRight, Clock, Star, Lock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lessons | ChemZim',
    description: 'Access your chemistry lessons and study materials.',
};

export default async function LessonsPage() {
    const session = await getSessionFromCookies();
    if (!session) {
        redirect('/login');
    }

    const { track, isAdmin, role } = session;
    const isSystemAdmin = isAdmin === true || role === 'admin' || role === 'moderator';

    // Get the curriculum based on track
    const curriculum = allCurricula.find(c => c.id === track) || (isSystemAdmin ? allCurricula[0] : null);

    if (!curriculum) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="text-6xl mb-6">⚠️</div>
                <h1 className="text-2xl font-bold text-white mb-2">No Curriculum Assigned</h1>
                <p className="text-slate-400 mb-6">Please contact administration to assign a curriculum track to your account.</p>
            </div>
        );
    }

    const trackName = curriculum.id;

    return (
        <div className="w-full max-w-6xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-10 text-center md:text-left relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 shadow-inner shadow-indigo-500/20">
                    <BookOpen className="w-8 h-8 text-indigo-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Your Chemistry Lessons
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl">
                    Select a lesson below to start learning. Follow the curriculum track designated for your level ({curriculum.title}).
                </p>
            </div>

            {/* Units and Lessons Grid */}
            <div className="space-y-10">
                {curriculum.topics.map((topic) => {
                    const availableLessonsCount = topic.subtopics?.filter((_, idx) => 
                        getLessonFromRegistry(trackName, topic.number, idx + 1) !== null
                    ).length || 0;

                    return (
                        <div key={topic.id} className="bg-[#0a0a1f]/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            Unit {topic.number}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            {availableLessonsCount} of {topic.subtopics?.length || 0} Lessons Available
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
                                </div>
                                <Link 
                                    href={`/dashboard/curriculum/${curriculum.id}/${topic.id}`}
                                    className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-white/10 w-fit"
                                >
                                    Explore Unit
                                </Link>
                            </div>

                            {/* Lessons List */}
                            <div className="grid gap-4">
                                {topic.subtopics && topic.subtopics.length > 0 ? (
                                    topic.subtopics.map((subtopic, index) => {
                                        const lessonNum = index + 1;
                                        const lessonData = getLessonFromRegistry(trackName, topic.number, lessonNum);
                                        const isAvailable = lessonData !== null;

                                        return (
                                            <div 
                                                key={index}
                                                className={`group flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all ${
                                                    isAvailable 
                                                        ? 'bg-[#050510]/55 border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.02]' 
                                                        : 'bg-white/[0.01] border-dashed border-white/5 opacity-60'
                                                }`}
                                            >
                                                <div className="flex items-center gap-4 min-w-0">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                                                        isAvailable 
                                                            ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                                                            : 'bg-white/5 text-slate-600 border border-white/5'
                                                    }`}>
                                                        {lessonNum}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h4 className={`font-semibold truncate text-base ${isAvailable ? 'text-white group-hover:text-indigo-300' : 'text-slate-500'}`}>
                                                            {subtopic}
                                                        </h4>
                                                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mt-1">
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="w-3.5 h-3.5" />
                                                                <span>15 min</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Star className="w-3.5 h-3.5 text-amber-500/60" />
                                                                <span>+25 XP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    {isAvailable ? (
                                                        <Link
                                                            href={`/dashboard/curriculum/${curriculum.id}/${topic.id}?tab=theory&lesson=${lessonNum}`}
                                                            className="flex items-center gap-2 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                                                        >
                                                            Study Lesson
                                                            <ChevronRight className="w-4 h-4" />
                                                        </Link>
                                                    ) : (
                                                        <div className="flex items-center gap-1 text-slate-600 text-xs font-semibold px-4 py-2">
                                                            <Lock className="w-3.5 h-3.5" />
                                                            <span>Locked</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="text-center py-6 text-slate-500 text-sm">
                                        No lessons defined for this unit.
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
