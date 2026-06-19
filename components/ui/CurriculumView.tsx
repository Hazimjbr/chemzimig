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

interface CurriculumViewProps {
    curricula: CurriculumLevel[];
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ curricula }) => {
    const searchParams = useSearchParams();
    const trackParam = searchParams.get('track');
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
                <div className="flex flex-wrap gap-2 bg-[#0a0a1f]/80 p-2 rounded-2xl border border-white/10 w-fit backdrop-blur-md">
                    {curricula.map((curr) => (
                        <button
                            key={curr.id}
                            onClick={() => setActiveTab(curr.id)}
                            className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                                activeTab === curr.id ? 'text-white' : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            {activeTab === curr.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/50 rounded-xl"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span>{curr.title}</span>
                                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
                                    {curr.code}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* View Mode Selector */}
                <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl w-fit backdrop-blur-md self-end sm:self-auto">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            viewMode === 'grid' 
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
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
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
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
                            {/* Curriculum Headers */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">{activeCurriculum.title}</h2>
                                <p className="text-slate-400">{activeCurriculum.description}</p>
                            </div>

                            {/* View Modes Render */}
                            {viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {activeCurriculum.topics.map((topic, index) => (
                                        <TopicCard key={topic.id} topic={topic} index={index} curriculumId={activeCurriculum.id} />
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {activeCurriculum.topics.map((topic) => {
                                        const availableLessonsCount = topic.subtopics?.filter((_, idx) => 
                                            getLessonFromRegistry(activeCurriculum.id, topic.number, idx + 1) !== null
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
                                                        href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}`}
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
                                                            const lessonData = getLessonFromRegistry(activeCurriculum.id, topic.number, lessonNum);
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
                                                                                href={`/dashboard/curriculum/${activeCurriculum.id}/${topic.id}?tab=theory&lesson=${lessonNum}`}
                                                                                className="flex items-center gap-2 bg-indigo-500/10 hover:bg-indigo-50 text-indigo-400 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-indigo-500/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
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
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
