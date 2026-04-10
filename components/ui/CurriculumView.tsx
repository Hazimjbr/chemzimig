'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CurriculumLevel } from '@/data/curriculum';
import { TopicCard } from './TopicCard';

interface CurriculumViewProps {
    curricula: CurriculumLevel[];
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ curricula }) => {
    const [activeTab, setActiveTab] = useState(curricula[0].id);

    const activeCurriculum = curricula.find(c => c.id === activeTab);

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex space-x-2 mb-8 bg-[#0a0a1f]/80 p-2 rounded-2xl border border-white/10 w-fit backdrop-blur-md">
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

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeCurriculum && (
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">{activeCurriculum.title}</h2>
                                <p className="text-slate-400">{activeCurriculum.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {activeCurriculum.topics.map((topic, index) => (
                                    <TopicCard key={topic.id} topic={topic} index={index} curriculumId={activeCurriculum.id} />
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
