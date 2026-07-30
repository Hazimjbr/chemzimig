'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CurriculumLevel } from '@/data/curriculum';
import { useSearchParams } from 'next/navigation';
import { TopicCard } from './TopicCard';
import Link from 'next/link';
import { 
    LayoutGrid, 
    List, 
    Clock, 
    Star, 
    Lock, 
    ChevronRight 
} from 'lucide-react';
import { getLessonFromRegistry } from '@/data/curriculum/registry';
import { CurriculumJourney3D } from './CurriculumJourney3D';
import { StudentCommandCenter } from './StudentCommandCenter';

interface CurriculumViewProps {
    curricula: CurriculumLevel[];
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ curricula }) => {
    const searchParams = useSearchParams();
    const trackParam = searchParams.get('track');

    if (!curricula || curricula.length === 0) {
        return (
            <div className="w-full text-center py-12 text-slate-400 bg-surface/40 backdrop-blur-md border border-border rounded-3xl">
                <span className="text-3xl mb-4 block">🔍</span>
                <p className="font-semibold text-foreground mb-2">No Curriculum Available</p>
                <p className="text-sm">There are no courses matching your track. Please contact your administrator.</p>
            </div>
        );
    }

    const defaultTab = curricula.some(c => c.id === trackParam) ? (trackParam || curricula[0].id) : curricula[0].id;
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    React.useEffect(() => {
        if (trackParam && curricula.some(c => c.id === trackParam)) {
            setActiveTab(trackParam);
        }
    }, [trackParam, curricula]);

    const activeCurriculum = curricula.find(c => c.id === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Tabs & View Mode Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                {/* Curriculum Tabs */}
                <div className="flex flex-wrap gap-2 bg-surface p-2 rounded-2xl border border-border w-fit backdrop-blur-md">
                    {curricula.map((curr) => (
                        <button
                            key={curr.id}
                            onClick={() => setActiveTab(curr.id)}
                            className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                                activeTab === curr.id ? 'text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                            }`}
                        >
                            {activeTab === curr.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/30 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span>{curr.title}</span>
                                <span className="text-xs bg-background px-2 py-0.5 rounded-md text-slate-500">
                                    {curr.code}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* View Mode Selector */}
                <div className="flex bg-surface border border-border p-1 rounded-xl w-fit backdrop-blur-md self-end sm:self-auto">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            viewMode === 'grid' 
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                        title="Grid Cards View"
                    >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>Grid</span>
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            viewMode === 'list' 
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                        title="Detailed Lessons View"
                    >
                        <List className="w-3.5 h-3.5" />
                        <span>List View</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${activeTab}-${viewMode}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                >
                    {activeCurriculum && (
                        <div>
                            {/* Student Command Center (Gamification Hub) */}
                            <StudentCommandCenter 
                                curriculumTitle={activeCurriculum.title} 
                                curriculumId={activeCurriculum.id}
                            />

                            {/* Curriculum Headers */}
                            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-1">{activeCurriculum.title}</h2>
                                    <p className="text-muted">{activeCurriculum.description}</p>
                                </div>
                            </div>

                            {/* View Modes Render */}
                            {viewMode === 'grid' ? (
                                <CurriculumJourney3D 
                                    topics={activeCurriculum.topics} 
                                    curriculumId={activeCurriculum.id} 
                                />
                            ) : (
                                <div className="space-y-8">
                                    {activeCurriculum.topics.map((topic) => {
                                        const availableLessonsCount = topic.subtopics?.filter((_, idx) => 
                                            getLessonFromRegistry(activeCurriculum.id, topic.number, idx + 1) !== null
                                        ).length || 0;

                                        return (
                                            <div key={topic.id} className="bg-surface backdrop-blur-md border border-border rounded-3xl p-6 md:p-8">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6 mb-6">
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                                                                Unit {topic.number}
                                                            </span>
                                                            <span className="text-xs text-slate-500">
                                                                {availableLessonsCount} of {topic.subtopics?.length || 0} Lessons Available
                                                            </span>
                                                        </div>
                                                        <h2 className="text-2xl font-bold text-foreground">{topic.title}</h2>
                                                    </div>
                                                    <Link 
                                                        href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}`}
                                                        className="inline-flex items-center justify-center bg-surface hover:bg-surface-hover text-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-border w-fit"
                                                    >
                                                        Explore Unit
                                                    </Link>
                                                </div>

                                                {/* Lessons List */}
                                                <div className="grid gap-4">
                                                    {topic.subtopics && topic.subtopics.length > 0 ? (
                                                        topic.subtopics.map((subtopic, index) => {
                                                            const lessonNum = index + 1;
                                                            const lessonData = getLessonFromRegistry(activeCurriculum.id, topic.number, lessonNum);
                                                            const isAvailable = lessonData !== null;

                                                            return (
                                                                <div 
                                                                    key={index}
                                                                    className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-5 rounded-2xl border transition-all ${
                                                                        isAvailable 
                                                                            ? 'bg-surface border-border hover:border-indigo-500/30 hover:bg-indigo-500/[0.02]' 
                                                                            : 'bg-surface/20 border-dashed border-border opacity-60'
                                                                    }`}
                                                                >
                                                                    <div className="flex items-start sm:items-center gap-3 md:gap-4 min-w-0 flex-1">
                                                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-xs md:text-sm ${
                                                                            isAvailable 
                                                                                ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20' 
                                                                                : 'bg-background text-slate-500 border border-border'
                                                                        }`}>
                                                                            {lessonNum}
                                                                        </div>
                                                                        <div className="min-w-0 flex-1">
                                                                            <h4 className={`font-semibold text-sm md:text-base break-words ${isAvailable ? 'text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-300' : 'text-slate-500'}`}>
                                                                                {subtopic}
                                                                            </h4>
                                                                            <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-semibold text-slate-500 mt-1">
                                                                                <div className="flex items-center gap-1">
                                                                                    <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />
                                                                                    <span>15 min</span>
                                                                                </div>
                                                                                <div className="flex items-center gap-1">
                                                                                    <Star className="w-3 md:w-3.5 h-3 md:h-3.5 text-amber-500/60" />
                                                                                    <span>+25 XP</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="self-end sm:self-auto flex-shrink-0">
                                                                        {isAvailable ? (
                                                                            <Link
                                                                                href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}?tab=theory&lesson=${lessonNum}`}
                                                                                className="flex items-center justify-center gap-1.5 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-500 dark:text-indigo-400 hover:text-white px-3.5 py-1.5 md:px-4 md:py-2 rounded-xl text-[11px] md:text-xs font-bold transition-all border border-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] w-full sm:w-auto"
                                                                            >
                                                                                Study Lesson
                                                                                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
