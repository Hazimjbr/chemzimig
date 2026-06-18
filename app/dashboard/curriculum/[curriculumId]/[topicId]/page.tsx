'use client';

import React, { use, useState, useEffect } from 'react';
import { allCurricula } from '@/data/curriculum';
import { questionBank } from '@/data/exams';
import Link from 'next/link';
import { ArrowLeft, BookOpen, BrainCircuit, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import confetti from 'canvas-confetti';

import { getLessonFromRegistry } from '@/data/curriculum/registry';
import TextToSpeech from '@/components/visual/TextToSpeech';
import LessonNotes from '@/components/visual/LessonNotes';
import EquationAnimator from '@/components/visual/EquationAnimator';

interface TopicPageProps {
    params: Promise<{
        curriculumId: string;
        topicId: string;
    }>;
    searchParams: Promise<{
        tab?: string;
        lesson?: string;
    }>;
}

export default function TopicPage({ params, searchParams }: TopicPageProps) {
    const { curriculumId, topicId } = use(params);
    const { tab = 'theory', lesson = '1' } = use(searchParams);

    const curriculum = allCurricula.find(c => c.id === curriculumId);
    const topic = curriculum?.topics.find(t => t.id === topicId);

    const track = curriculumId;
    const currentLessonNum = parseInt(lesson, 10);
    const lessonData = getLessonFromRegistry(track, topic?.number || 1, currentLessonNum);
    const theoryContent = lessonData ? lessonData.theory : (topic ? topic.theory : '');

    const topicQuestions = questionBank.filter(q => q.topic === (topic?.id || ''));

    // State for interactive lesson player
    const [currentPartIndex, setCurrentPartIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Reset part index when changing lessons
    useEffect(() => {
        setCurrentPartIndex(0);
        setCompleted(false);
    }, [lesson]);

    if (!curriculum || !topic) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <h1 className="text-2xl font-bold text-white mb-2">Topic not found</h1>
                <Link href="/dashboard/curriculum" className="text-indigo-400 hover:text-indigo-300">
                    Return to Library
                </Link>
            </div>
        );
    }

    const hasParts = lessonData && lessonData.parts && lessonData.parts.length > 0;
    const partsList = lessonData?.parts || [];
    const currentPart = partsList[currentPartIndex];

    const handleNext = () => {
        if (currentPartIndex < partsList.length - 1) {
            setCurrentPartIndex(prev => prev + 1);
        } else {
            setCompleted(true);
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
            });
        }
    };

    const handlePrev = () => {
        if (currentPartIndex > 0) {
            setCurrentPartIndex(prev => prev - 1);
            setCompleted(false);
        }
    };

    const progress = hasParts ? ((currentPartIndex + 1) / partsList.length) * 100 : 100;

    return (
        <div className="w-full max-w-6xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href={`/dashboard/curriculum?track=${curriculumId}`}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Library
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {topic.number}. {topic.title}
                </h1>
                <p className="text-emerald-400 font-medium">
                    {curriculum.title}
                </p>
            </div>

            {/* Tabs */}
            <div className="flex space-x-2 border-b border-white/10 mb-8">
                <Link
                    href={`/dashboard/curriculum/${curriculumId}/${topicId}?tab=theory&lesson=${lesson}`}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                        tab === 'theory'
                            ? 'text-indigo-400 border-indigo-400'
                            : 'text-slate-400 border-transparent hover:text-white'
                    }`}
                >
                    <BookOpen className="w-5 h-5" />
                    Theory
                </Link>
                <Link
                    href={`/dashboard/curriculum/${curriculumId}/${topicId}?tab=questions&lesson=${lesson}`}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                        tab === 'questions'
                            ? 'text-emerald-400 border-emerald-400'
                            : 'text-slate-400 border-transparent hover:text-white'
                    }`}
                >
                    <BrainCircuit className="w-5 h-5" />
                    Questions ({topicQuestions.length})
                </Link>
            </div>

            {/* Content Area */}
            <div className="bg-[#0a0a1f]/60 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10">
                {tab === 'theory' ? (
                    <div className="prose prose-invert prose-indigo max-w-none">
                        {/* Lesson-level selector */}
                        {topic.subtopics && topic.subtopics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/5 pb-5">
                                {topic.subtopics.map((sub, idx) => {
                                    const lessonNum = idx + 1;
                                    const hasLessonContent = getLessonFromRegistry(track, topic.number, lessonNum) !== null;
                                    return hasLessonContent ? (
                                        <Link
                                            key={idx}
                                            href={`/dashboard/curriculum/${curriculumId}/${topicId}?tab=theory&lesson=${lessonNum}`}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                                currentLessonNum === lessonNum
                                                    ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 shadow-inner shadow-indigo-500/5'
                                                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                                            }`}
                                        >
                                            Lesson {lessonNum}: {sub}
                                        </Link>
                                    ) : (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 rounded-xl text-xs font-bold transition-all border bg-white/[0.02] border-dashed border-white/5 text-slate-600 cursor-not-allowed"
                                        >
                                            Lesson {lessonNum}: {sub}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Interactive Lesson Player (Slide-by-slide) */}
                        {hasParts ? (
                            <div className="flex flex-col lg:flex-row gap-8 mt-5">
                                {/* Sidebar list of lesson parts */}
                                <aside className="w-full lg:w-64 flex-shrink-0 bg-white/5 p-5 rounded-2xl border border-white/10 h-fit">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Lesson Parts</h3>
                                    <div className="flex flex-col gap-2">
                                        {partsList.map((part, idx) => (
                                            <button
                                                key={part.id}
                                                onClick={() => {
                                                    setCurrentPartIndex(idx);
                                                    setCompleted(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3 cursor-pointer ${
                                                    currentPartIndex === idx
                                                        ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-400'
                                                        : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                            >
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                                                    currentPartIndex === idx ? 'border-indigo-400 text-indigo-400' : 'border-slate-600 text-slate-500'
                                                }`}>
                                                    {idx + 1}
                                                </div>
                                                <span className="truncate flex-1">{part.title}</span>
                                                {idx < currentPartIndex && <CheckCircle size={14} className="text-emerald-500 ml-auto" />}
                                            </button>
                                        ))}
                                    </div>
                                </aside>

                                {/* Active Slide Content Area */}
                                <div className="flex-1 flex flex-col gap-6">
                                    {/* Progress Bar inside card */}
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>

                                    {/* Title Header with TextToSpeech */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <div>
                                            <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Part {currentPartIndex + 1} of {partsList.length}</span>
                                            <h2 className="text-xl font-bold text-white mt-1">{currentPart.title}</h2>
                                        </div>
                                        <TextToSpeech text={currentPart.content} title={currentPart.title} />
                                    </div>

                                    {/* Completion Card */}
                                    {completed && (
                                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center animate-fade-in-up">
                                            <span className="text-3xl">🎉</span>
                                            <h3 className="text-lg font-bold text-emerald-400 mt-2">Lesson Completed!</h3>
                                            <p className="text-slate-400 text-sm mt-1">Excellent work completing this lesson. You have earned +25 XP!</p>
                                        </div>
                                    )}

                                    {/* Slide Main Content */}
                                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
                                        <ReactMarkdown
                                            components={{
                                                p: ({node, ...props}) => <p className="text-slate-300 leading-relaxed mb-4" {...props} />,
                                                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
                                                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-3" {...props} />,
                                                ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6" {...props} />,
                                                li: ({node, ...props}) => <li className="marker:text-indigo-500" {...props} />,
                                                strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
                                            }}
                                        >
                                            {currentPart.content}
                                        </ReactMarkdown>

                                        {/* Key Points */}
                                        {currentPart.keyPoints && currentPart.keyPoints.length > 0 && (
                                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5 mt-6">
                                                <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Key Study Points</h4>
                                                <ul className="space-y-2.5">
                                                    {currentPart.keyPoints.map((point, i) => (
                                                        <li key={i} className="flex gap-2.5 items-start text-sm text-slate-300">
                                                            <span className="text-indigo-400 mt-0.5">•</span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Dynamic reaction animator for specific stoichiometry or acid-base topics */}
                                    {(topicId.includes('stoichiometry') || topicId.includes('acid') || topicId.includes('unit-1')) && currentPart.id === 'the-mole' && (
                                        <EquationAnimator 
                                            reactants={[['HCl', '#ef4444'], ['NaOH', '#3b82f6']]}
                                            products={[['NaCl', '#10b981'], ['H₂O', '#6366f1']]}
                                        />
                                    )}

                                    {/* Navigation buttons */}
                                    <div className="flex justify-between items-center gap-4 mt-2">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentPartIndex === 0}
                                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
                                        >
                                            {currentPartIndex === partsList.length - 1 ? 'Finish Lesson' : 'Next Part'}
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Lesson Notes Section */}
                                    <div className="border-t border-white/10 pt-8 mt-10">
                                        <h3 className="text-lg font-bold text-white mb-4">📝 Study Notes</h3>
                                        <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Classic Single Page Scroll (Fallback for simple markdown lessons) */
                            <>
                                {theoryContent ? (
                                    <>
                                        <ReactMarkdown
                                            components={{
                                                p: ({node, ...props}) => <p className="text-slate-300 leading-relaxed mb-4" {...props} />,
                                                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
                                                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-3" {...props} />,
                                                ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6" {...props} />,
                                                li: ({node, ...props}) => <li className="marker:text-indigo-500" {...props} />,
                                                strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
                                            }}
                                        >
                                            {theoryContent}
                                        </ReactMarkdown>

                                        {/* Lesson Notes Section */}
                                        <div className="border-t border-white/10 pt-8 mt-10">
                                            <h3 className="text-lg font-bold text-white mb-4">📝 Study Notes</h3>
                                            <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-12">
                                        <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                                        <p className="text-slate-400">Theory content is currently being written for this topic.</p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ) : (
                    /* Questions list tab */
                    <div className="space-y-6">
                        {topicQuestions.length > 0 ? (
                            topicQuestions.map((q, idx) => (
                                <div key={q.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="text-white text-lg pt-1">
                                            {q.question}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-12">
                                        {q.options.map((opt, optIdx) => (
                                            <div
                                                key={optIdx}
                                                className={`p-3 rounded-xl border ${
                                                    optIdx === q.correctAnswer
                                                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                        : 'bg-white/5 border-white/10 text-slate-300'
                                                }`}
                                            >
                                                {String.fromCharCode(65 + optIdx)}. {opt.text}
                                            </div>
                                        ))}
                                    </div>
                                    {q.explanation && (
                                        <div className="mt-6 pl-12">
                                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-indigo-300 text-sm">
                                                <span className="font-bold text-indigo-400 uppercase tracking-wider text-xs mb-1 block">Explanation</span>
                                                {q.explanation}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <BrainCircuit className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                                <p className="text-slate-400">No questions available for this topic yet.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
