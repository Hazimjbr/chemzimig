import React from 'react';
import { CurriculumView } from '@/components/ui/CurriculumView';
import { allCurricula } from '@/data/curriculum';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Curriculum | ChemZim',
    description: 'Explore the Cambridge IGCSE and AS/A Level Chemistry curriculum.',
};

export default function CurriculumPage() {
    return (
        <div className="w-full h-full min-h-[calc(100vh-120px)] relative">
            {/* Header Area */}
            <div className="mb-10 text-center md:text-left relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 shadow-inner shadow-indigo-500/20">
                    <span className="text-3xl">📚</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    The Library
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl">
                    Master your syllabus from the core principles to advanced concepts. Select your level to explore the curriculum.
                </p>
            </div>

            {/* Curriculum Viewer */}
            <CurriculumView curricula={allCurricula} />
        </div>
    );
}
