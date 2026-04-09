'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Hash } from 'lucide-react';
import { Topic } from '@/data/curriculum';

interface TopicCardProps {
    topic: Topic;
    index: number;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative bg-[#0a0a1f]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-indigo-500/50 hover:bg-[#0a0a1f]/80 transition-all duration-300"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] -z-10 group-hover:bg-indigo-500/10 transition-colors" />

            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-bold bg-gradient-to-br from-indigo-400 to-emerald-400 text-transparent bg-clip-text">
                        {topic.number}
                    </span>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-indigo-400 transition-colors">
                        {topic.title}
                    </h3>

                    {topic.subtopics && topic.subtopics.length > 0 && (
                        <div className="space-y-2 mt-4">
                            {topic.subtopics.map((sub, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                    <Hash className="w-3 h-3 text-emerald-500/70" />
                                    <span>{sub}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-indigo-400">View Questions</span>
                <ChevronRight className="w-4 h-4 text-indigo-400" />
            </div>
        </motion.div>
    );
};
