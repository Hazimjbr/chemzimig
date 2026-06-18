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
import { useGamification } from '@/contexts/GamificationContext';

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

const renderTextWithMath = (children: React.ReactNode): React.ReactNode => {
    if (!children) return null;
    
    if (typeof children !== 'string') {
        if (Array.isArray(children)) {
            return (
                <React.Fragment>
                    {children.map((child, idx) => 
                        typeof child === 'string' ? <React.Fragment key={idx}>{renderTextWithMath(child)}</React.Fragment> : child
                    )}
                </React.Fragment>
            );
        }
        return children;
    }

    if (children.includes('[NOWRAP:')) {
        const parts = children.split(/\[NOWRAP:(.*?)\]/g);
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return (
                            <span key={i} className="inline-block whitespace-nowrap">
                                {renderTextWithMath(part)}
                            </span>
                        );
                    }
                    return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }
    
    if (children.includes('$$')) {
        const parts = children.split('$$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <BlockMath key={i} math={part} />;
                    }
                    return <React.Fragment key={i}>{renderTextWithMath(part)}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }

    if (children.includes('$')) {
        const parts = children.split('$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <InlineMath key={i} math={part} />;
                    }
                    return <React.Fragment key={i}>{part}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }
    
    return children;
};

const formatTrailingSymbolsAndUnits = (text: string): string => {
    if (!text) return text;
    
    // 1. Manually parenthesized expressions followed by a period at the end of sentences/lines.
    // e.g. (NaCl). or ($...$). or (g mol⁻¹).
    const parenthesizedRegex = /\(([^)]+?)\)\./g;

    // 2. Specific units at the end of sentences/lines: mol⁻¹, g mol⁻¹, dm³, cm³, m³, kPa, Pa, K, mol, g
    const unitRegex = /\b(mol⁻¹|g\s*mol⁻¹|dm³|cm³|m³|kPa|Pa|K|mol|g)\./g;
    
    // 3. Chemical formulas/symbols: e.g. NaCl., CO2., H2O., He.
    const chemRegex = /\b(NaCl|CO₂|CO_2|H₂O|H_2O|He|O₂|O_2|H₂|H_2|Fe|CuSO₄|CuSO_4|Fe₂O₃|Fe_2O_3|CO)\./g;
    
    // 4. Numbers at the end of a sentence/line (excluding list prefixes or labels, and not followed by a digit to avoid decimal points).
    const numberRegex = /(?<!^|\n|#\s|##\s|###\s|####\s|\bLesson\s|\bTopic\s)\b(\d+(?:\.\d+)?)\.(?!\d)/g;
    
    // 5. Inline math ending with a number/unit/symbol followed by a period.
    const mathRegex = /\$([^\$]+?(?:\d+|mol|g|dm³|cm³|m³|Pa|kPa|K|NaCl|CO_2|H_2O|Fe|atoms|molecules))\$\./g;

    let processed = text;
    processed = processed.replace(parenthesizedRegex, '[NOWRAP:($1).]');
    processed = processed.replace(unitRegex, '[NOWRAP:($1).]');
    processed = processed.replace(chemRegex, '[NOWRAP:($1).]');
    processed = processed.replace(mathRegex, '[NOWRAP:($$1).]');
    processed = processed.replace(/\b(carbon)-(\d+)\./gi, '[NOWRAP:$1-($2).]');
    processed = processed.replace(numberRegex, '[NOWRAP:($1).]');
    
    return processed;
};

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

    // Gamification hooks
    const { completeLesson, addXP } = useGamification();

    // State for interactive lesson player
    const [currentPartIndex, setCurrentPartIndex] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Interactive Quiz State
    const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
    const [quizFirstAttempts, setQuizFirstAttempts] = useState<Record<number, boolean>>({});
    const [quizActiveIndex, setQuizActiveIndex] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Reset part index and quiz states when changing lessons
    useEffect(() => {
        setCurrentPartIndex(0);
        setCompleted(false);
        setQuizAnswers({});
        setQuizFirstAttempts({});
        setQuizActiveIndex(0);
        setQuizCompleted(false);
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
    const rawPartsList = lessonData?.parts || [];
    const lessonQuiz = lessonData?.quiz || [];
    
    const partsList = [...rawPartsList];
    if (hasParts && lessonQuiz.length > 0) {
        partsList.push({
            id: 'interactive-quiz',
            title: 'Test Your Knowledge 📝',
            type: 'quiz',
            content: '',
        });
    }
    const currentPart = partsList[currentPartIndex];

    const handleNext = () => {
        if (currentPartIndex < partsList.length - 1) {
            setCurrentPartIndex(prev => prev + 1);
        } else {
            setCompleted(true);
            completeLesson(`${curriculumId}-${topicId}-lesson-${currentLessonNum}`);
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

    const handleSelectOption = (questionIdx: number, optionIdx: number) => {
        if (quizAnswers[questionIdx] !== undefined) return;
        const question = lessonQuiz[questionIdx];
        const isCorrect = question.options[optionIdx].isCorrect;
        setQuizAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
        
        const isFirstAttempt = quizFirstAttempts[questionIdx] === undefined;
        if (isFirstAttempt) {
            setQuizFirstAttempts(prev => ({ ...prev, [questionIdx]: isCorrect }));
            if (isCorrect) {
                addXP(5);
            }
        }
    };

    const handleNextQuizQuestion = () => {
        if (quizActiveIndex < lessonQuiz.length - 1) {
            setQuizActiveIndex(prev => prev + 1);
        }
    };

    const allQuestionsAnswered = Object.keys(quizAnswers).length === lessonQuiz.length;
    const isNextDisabled = currentPart?.id === 'interactive-quiz' && !allQuestionsAnswered;
    const progress = hasParts ? ((currentPartIndex + 1) / partsList.length) * 100 : 100;

    return (
        <div className="w-full max-w-none h-full flex flex-col overflow-hidden pb-0">
            {/* Header - Sticky at top */}
            <div className="flex-shrink-0 bg-[#060615] border-b border-white/10 py-2.5 mb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link
                        href={`/dashboard/curriculum?track=${curriculumId}`}
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors mb-1 text-[10px] font-semibold"
                    >
                        <ArrowLeft className="w-2.5 h-2.5" />
                        Back to Library
                    </Link>
                    <h1 className="text-lg md:text-xl font-bold text-white leading-tight">
                        {topic.number}. {topic.title}
                    </h1>
                    <p className="text-emerald-400 font-medium text-[10px] mt-0.5">
                        {curriculum.title}
                    </p>
                </div>
            </div>

            {/* Content Area - Immersive layout with independent column scrolls */}
            <div className="bg-[#0a0a1f]/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col flex-1 min-h-[350px]">
                    {/* Interactive Lesson Player (Slide-by-slide) */}
                    {hasParts ? (
                            <div className="flex flex-1 overflow-hidden h-full">
                                {/* Sidebar list of lesson parts - Independently scrollable */}
                                <aside className="w-64 flex-shrink-0 border-r border-white/10 overflow-y-auto p-5 bg-white/[0.02] hidden md:block">
                                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Lesson Parts</h3>
                                    <div className="flex flex-col gap-2">
                                        {partsList.map((part, idx) => (
                                            <button
                                                key={part.id}
                                                onClick={() => {
                                                    setCurrentPartIndex(idx);
                                                    setCompleted(false);
                                                }}
                                                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                                                    currentPartIndex === idx
                                                        ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400'
                                                        : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                            >
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                                                    currentPartIndex === idx ? 'border-indigo-400 text-indigo-400' : 'border-slate-600 text-slate-500'
                                                }`}>
                                                    {idx + 1}
                                                </div>
                                                <span className="truncate flex-1">{part.title}</span>
                                                {idx < currentPartIndex && <CheckCircle size={12} className="text-emerald-500 ml-auto" />}
                                            </button>
                                        ))}
                                    </div>
                                </aside>

                                {/* Active Slide Content Area - Independently scrollable */}
                                <div className="flex-1 flex flex-col overflow-hidden">
                                    {/* Scrollable Container */}
                                    <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
                                        {/* Progress Bar inside card */}
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden flex-shrink-0">
                                            <div 
                                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>

                                        {/* Title Header with TextToSpeech */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-4 rounded-xl border border-white/10 flex-shrink-0">
                                            <div>
                                                <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Part {currentPartIndex + 1} of {partsList.length}</span>
                                                <h2 className="text-lg font-bold text-white mt-0.5">{currentPart.title}</h2>
                                            </div>
                                            {currentPart.id !== 'interactive-quiz' && (
                                                <TextToSpeech text={currentPart.content} title={currentPart.title} />
                                            )}
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
                                        {currentPart.id === 'interactive-quiz' ? (
                                            (() => {
                                                const activeQuestion = lessonQuiz[quizActiveIndex];
                                                const selectedIdx = quizAnswers[quizActiveIndex];
                                                const isAnswered = selectedIdx !== undefined;
                                                
                                                return (
                                                    <div className="flex flex-col gap-6">
                                                        {allQuestionsAnswered && (
                                                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center animate-fade-in-up">
                                                                <div className="text-emerald-400 font-bold text-sm">🏆 Quiz Completed!</div>
                                                                <div className="text-slate-300 text-xs mt-1">
                                                                    You answered {Object.values(quizFirstAttempts).filter(Boolean).length} of {lessonQuiz.length} questions correctly on the first attempt.
                                                                    <span className="block mt-1 font-semibold text-emerald-400">Click 'Finish Lesson' below to collect your +25 XP!</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div className="flex flex-col gap-2 bg-white/5 px-4 py-3 rounded-xl border border-white/10 text-xs font-semibold">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-slate-400">Question {quizActiveIndex + 1} of {lessonQuiz.length}</span>
                                                                <span className="text-emerald-400 font-bold">First Attempt Correct: {Object.values(quizFirstAttempts).filter(Boolean).length} / {lessonQuiz.length}</span>
                                                            </div>
                                                            {activeQuestion.id && (
                                                                <div className="text-[10px] text-indigo-400/80 font-mono border-t border-white/5 pt-1.5 mt-0.5">
                                                                    ID: {activeQuestion.id}
                                                                </div>
                                                            )}
                                                        </div>
                                                            
                                                            <div className="text-white text-lg font-medium leading-relaxed my-2">
                                                                {renderTextWithMath(activeQuestion.question)}
                                                            </div>
                                                            
                                                            <div className="grid grid-cols-1 gap-3.5">
                                                                {activeQuestion.options.map((opt, oIdx) => {
                                                                    const isSelected = selectedIdx === oIdx;
                                                                    const isCorrect = opt.isCorrect;
                                                                    
                                                                    let optionStyle = "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20";
                                                                    
                                                                    if (isAnswered) {
                                                                        if (isCorrect) {
                                                                            optionStyle = "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 font-medium";
                                                                        } else if (isSelected) {
                                                                            optionStyle = "bg-rose-500/10 border-rose-500/50 text-rose-400 font-medium";
                                                                        } else {
                                                                            optionStyle = "bg-white/[0.02] border-white/5 text-slate-500 opacity-60";
                                                                        }
                                                                    }
                                                                    
                                                                    return (
                                                                        <button
                                                                            key={oIdx}
                                                                            disabled={isAnswered}
                                                                            onClick={() => handleSelectOption(quizActiveIndex, oIdx)}
                                                                            className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between ${optionStyle} ${!isAnswered ? 'cursor-pointer' : ''}`}
                                                                        >
                                                                            <span>{String.fromCharCode(65 + oIdx)}. {opt.text}</span>
                                                                            {isAnswered && isCorrect && <span className="text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md">Correct</span>}
                                                                            {isAnswered && isSelected && !isCorrect && <span className="text-rose-400 text-xs font-bold bg-rose-500/10 px-2 py-0.5 rounded-md">Incorrect</span>}
                                                                        </button>
                                                                    );
                                                                })}
                                                            </div>
                                                            
                                                            <div className="flex justify-between items-center gap-4 mt-6 border-t border-white/5 pt-4">
                                                                <button
                                                                    disabled={quizActiveIndex === 0}
                                                                    onClick={() => setQuizActiveIndex(prev => prev - 1)}
                                                                    className="bg-white/5 hover:bg-white/10 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/10 transition-all text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                                                                >
                                                                    <ChevronLeft className="w-3.5 h-3.5" />
                                                                    Previous Question
                                                                </button>
                                                                
                                                                <button
                                                                    disabled={quizActiveIndex === lessonQuiz.length - 1}
                                                                    onClick={handleNextQuizQuestion}
                                                                    className="bg-white/5 hover:bg-white/10 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/10 transition-all text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
                                                                >
                                                                    Next Question
                                                                    <ChevronRight className="w-3.5 h-3.5" />
                                                                </button>
                                                            </div>
                                                            
                                                            {isAnswered && activeQuestion.explanation && (
                                                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-4 animate-fade-in-up">
                                                                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1.5 block">Explanation</span>
                                                                    <div className="text-indigo-300 text-sm leading-relaxed flex flex-col gap-1">
                                                                        {activeQuestion.explanation.split('\n').map((line: string, lineIdx: number) => (
                                                                            line.trim() === '' 
                                                                                ? <div key={lineIdx} className="h-2" /> 
                                                                                : <div key={lineIdx}>{renderTextWithMath(line)}</div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })()
                                            ) : (
                                            // Standard Lesson Player Slide Content
                                            <>
                                                <ReactMarkdown
                                                    components={{
                                                        p: ({node, children, ...props}) => <div className="text-slate-300 leading-relaxed mb-4" {...props}>{renderTextWithMath(children)}</div>,
                                                        h2: ({node, children, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props}>{renderTextWithMath(children)}</h2>,
                                                        h3: ({node, children, ...props}) => <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-3" {...props}>{renderTextWithMath(children)}</h3>,
                                                        ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6" {...props} />,
                                                        li: ({node, children, ...props}) => <li className="marker:text-indigo-500" {...props}>{renderTextWithMath(children)}</li>,
                                                        strong: ({node, children, ...props}) => <strong className="text-white font-semibold" {...props}>{renderTextWithMath(children)}</strong>,
                                                        em: ({node, children, ...props}) => <em {...props}>{renderTextWithMath(children)}</em>,
                                                    }}
                                                >
                                                    {formatTrailingSymbolsAndUnits(currentPart.content)}
                                                </ReactMarkdown>

                                                {/* Key Points */}
                                                {currentPart.keyPoints && currentPart.keyPoints.length > 0 && (
                                                    <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5 mt-6">
                                                        <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Key Study Points</h4>
                                                        <ul className="space-y-2.5">
                                                            {currentPart.keyPoints.map((point, i) => (
                                                                <li key={i} className="flex gap-2.5 items-start text-sm text-slate-300">
                                                                    <span className="text-indigo-400 mt-0.5">•</span>
                                                                    <span>{renderTextWithMath(formatTrailingSymbolsAndUnits(point))}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    {/* Dynamic reaction animator for specific stoichiometry or acid-base topics */}
                                    {(topicId.includes('stoichiometry') || topicId.includes('acid') || topicId.includes('unit-1')) && currentPart.id === 'the-mole' && (
                                        <EquationAnimator 
                                            reactants={[['2H₂', '#ef4444'], ['O₂', '#3b82f6']]}
                                            products={[['2H₂O', '#10b981']]}
                                            description="2 moles of Hydrogen gas (H₂) react with 1 mole of Oxygen gas (O₂) to produce 2 moles of Water (H₂O)."
                                        />
                                    )}

                                    </div>

                                    {/* Sticky Navigation Footer */}
                                    <div className="flex justify-between items-center gap-4 py-2.5 px-5 border-t border-white/10 bg-white/[0.02] flex-shrink-0">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentPartIndex === 0}
                                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            disabled={isNextDisabled}
                                            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-indigo-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            {currentPartIndex === partsList.length - 1 ? 'Finish Lesson' : 'Next Part'}
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Classic Single Page Scroll (Fallback for simple markdown lessons) - scrollable layout */
                            <div className="flex-1 overflow-y-auto p-6 md:p-10">
                                {theoryContent ? (
                                    <>
                                        <ReactMarkdown
                                            components={{
                                                p: ({node, children, ...props}) => <div className="text-slate-300 leading-relaxed mb-4" {...props}>{renderTextWithMath(children)}</div>,
                                                h2: ({node, children, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props}>{renderTextWithMath(children)}</h2>,
                                                h3: ({node, children, ...props}) => <h3 className="text-xl font-semibold text-indigo-300 mt-6 mb-3" {...props}>{renderTextWithMath(children)}</h3>,
                                                ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6" {...props} />,
                                                li: ({node, children, ...props}) => <li className="marker:text-indigo-500" {...props}>{renderTextWithMath(children)}</li>,
                                                strong: ({node, children, ...props}) => <strong className="text-white font-semibold" {...props}>{renderTextWithMath(children)}</strong>,
                                                em: ({node, children, ...props}) => <em {...props}>{renderTextWithMath(children)}</em>,
                                            }}
                                        >
                                            {formatTrailingSymbolsAndUnits(theoryContent)}
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
                            </div>
                        )}
            </div>
        </div>
    );
}
