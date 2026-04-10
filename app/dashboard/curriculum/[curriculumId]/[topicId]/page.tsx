import React from 'react';
import { allCurricula } from '@/data/curriculum';
import { questionBank } from '@/data/exams';
import Link from 'next/link';
import { ArrowLeft, BookOpen, BrainCircuit } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface TopicPageProps {
    params: Promise<{
        curriculumId: string;
        topicId: string;
    }>;
    searchParams: Promise<{
        tab?: string;
    }>;
}

export default async function TopicPage({ params, searchParams }: TopicPageProps) {
    const { curriculumId, topicId } = await params;
    const { tab = 'theory' } = await searchParams;

    const curriculum = allCurricula.find(c => c.id === curriculumId);
    const topic = curriculum?.topics.find(t => t.id === topicId);

    if (!curriculum || !topic) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-2xl font-bold text-white mb-2">Topic not found</h1>
                <Link href="/dashboard/curriculum" className="text-indigo-400 hover:text-indigo-300">
                    Return to Library
                </Link>
            </div>
        );
    }

    const topicQuestions = questionBank.filter(q => q.topic === topic.id);

    return (
        <div className="w-full max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href="/dashboard/curriculum"
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
                    href={`/dashboard/curriculum/${curriculumId}/${topicId}?tab=theory`}
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
                    href={`/dashboard/curriculum/${curriculumId}/${topicId}?tab=questions`}
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
                        {topic.theory ? (
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
                                {topic.theory}
                            </ReactMarkdown>
                        ) : (
                            <div className="text-center py-12">
                                <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                                <p className="text-slate-400">Theory content is currently being written for this topic.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="space-y-6">
                        {topicQuestions.length > 0 ? (
                            topicQuestions.map((q, idx) => (
                                <div key={q.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="text-white text-lg pt-1">
                                            {/* Note: In a real app we'd parse the question for KaTeX properly */}
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
