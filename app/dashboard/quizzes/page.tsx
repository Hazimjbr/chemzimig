'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula } from '@/data/curriculum';
import { questionBank } from '@/data/exams';
import { generateExam, calculateXP } from '@/data/exams/exam-generator';
import { Question, DifficultyLevel, GameMode, IGCSETopicTag } from '@/data/exams/types';
import { 
    Trophy, Play, CheckCircle2, XCircle, ArrowRight, RefreshCw, 
    Clock, HelpCircle, Check, BookOpen, AlertCircle
} from 'lucide-react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Simple KaTeX parser for questions and options
const LaTeXText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    const parts = text.split('$');
    return (
        <span>
            {parts.map((part, i) => {
                if (i % 2 === 1) {
                    return <InlineMath key={i} math={part} />;
                }
                return part;
            })}
        </span>
    );
};

export default function QuizzesPage() {
    const { user } = useAuth();
    const { addXP } = useGamification();
    const [step, setStep] = useState<'config' | 'playing' | 'result'>('config');

    // Configuration state
    const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>(1);
    const [selectedMode, setSelectedMode] = useState<GameMode>('practice');
    const [questionCount, setQuestionCount] = useState<number>(10);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    // Active quiz state
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timeStart, setTimeStart] = useState<number>(0);
    const [timeTaken, setTimeTaken] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; selectedAnswer: number; isCorrect: boolean }>>([]);

    // Get student curriculum track
    const curriculum = useMemo(() => {
        const track = user?.track || (user?.grade?.toLowerCase().includes('edexcel') ? 'edexcel-alevel' : (user?.grade === 'AS Level' || user?.grade === 'A2 Level' || user?.grade === 'IB' ? 'cie-alevel' : 'cie-igcse'));
        return allCurricula.find(c => c.id === track) || allCurricula[0];
    }, [user]);

    // Select all topics by default when curriculum changes
    useEffect(() => {
        if (curriculum) {
            setSelectedTopics(curriculum.topics.map(t => t.id));
        }
    }, [curriculum]);

    // Filtered available questions in total for config help
    const availableQuestions = useMemo(() => {
        const curriculumId = curriculum.id;
        return questionBank.filter(q => 
            q.curriculum === curriculumId && 
            selectedTopics.includes(q.topic) && 
            q.level === selectedLevel
        );
    }, [curriculum, selectedTopics, selectedLevel]);

    const handleTopicToggle = (topicId: string) => {
        setSelectedTopics(prev => 
            prev.includes(topicId) 
                ? prev.filter(id => id !== topicId) 
                : [...prev, topicId]
        );
    };

    const handleStartQuiz = () => {
        if (selectedTopics.length === 0) return;

        // Generate questions from the pool
        const config = {
            topics: selectedTopics as IGCSETopicTag[],
            level: selectedLevel,
            questionCount,
            mode: selectedMode,
            curriculum: curriculum.id as any
        };

        const quizQuestions = generateExam(questionBank, config);
        
        if (quizQuestions.length === 0) {
            alert("No questions found matching the selected criteria. Try changing the difficulty level or selecting more topics.");
            return;
        }

        setQuestions(quizQuestions);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        setScore(0);
        setUserAnswers([]);
        setTimeStart(Date.now());
        setStep('playing');
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null || isAnswerSubmitted) return;

        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setUserAnswers(prev => [...prev, {
            questionId: currentQuestion.id,
            selectedAnswer,
            isCorrect
        }]);

        setIsAnswerSubmitted(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswerSubmitted(false);
        } else {
            // End of quiz
            const totalTime = Math.floor((Date.now() - timeStart) / 1000);
            setTimeTaken(totalTime);

            // Calculate and award XP
            const earnedXP = calculateXP(score, questions.length, selectedLevel, totalTime, selectedMode === 'timed' ? 600 : undefined);
            if (addXP && earnedXP > 0) {
                addXP(earnedXP);
            }

            setStep('result');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto pb-20">
            {step === 'config' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    {/* Header */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6 shadow-inner shadow-amber-500/20">
                            <Trophy className="w-8 h-8 text-amber-500" />
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Practice Quizzes</h1>
                        <p className="text-slate-400">Configure your session, select your topics, and challenge yourself.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Config Panel */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Topics Selection */}
                            <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-indigo-400" />
                                    Select Topics
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {curriculum.topics.map(topic => {
                                        const isChecked = selectedTopics.includes(topic.id);
                                        return (
                                            <button
                                                key={topic.id}
                                                onClick={() => handleTopicToggle(topic.id)}
                                                className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${
                                                    isChecked 
                                                        ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-inner' 
                                                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                            >
                                                <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                                                    isChecked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-white/20'
                                                }`}>
                                                    {isChecked && <Check className="w-3.5 h-3.5" />}
                                                </div>
                                                <span className="text-sm font-semibold truncate">{topic.title}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Options */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Difficulty */}
                                <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6">
                                    <h3 className="text-base font-bold text-white mb-4">Difficulty</h3>
                                    <div className="flex gap-2">
                                        {([1, 2, 3] as DifficultyLevel[]).map(l => (
                                            <button
                                                key={l}
                                                onClick={() => setSelectedLevel(l)}
                                                className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                                                    selectedLevel === l
                                                        ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-400'
                                                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                                                }`}
                                            >
                                                {l === 1 ? 'Easy' : l === 2 ? 'Medium' : 'Hard'}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Questions Count */}
                                <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6">
                                    <h3 className="text-base font-bold text-white mb-4">Questions</h3>
                                    <div className="flex gap-2">
                                        {[5, 10, 15, 20].map(count => (
                                            <button
                                                key={count}
                                                onClick={() => setQuestionCount(count)}
                                                className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${
                                                    questionCount === count
                                                        ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-400'
                                                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                                                }`}
                                            >
                                                {count}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary / Action Panel */}
                        <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-fit space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">Quiz Overview</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Curriculum:</span>
                                        <span className="text-white font-semibold">{curriculum.title}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Topics Selected:</span>
                                        <span className="text-white font-semibold">{selectedTopics.length}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Difficulty:</span>
                                        <span className="text-indigo-400 font-bold">{selectedLevel === 1 ? 'Easy' : selectedLevel === 2 ? 'Medium' : 'Hard'}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Available Qs:</span>
                                        <span className="text-white font-semibold">{availableQuestions.length}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleStartQuiz}
                                disabled={selectedTopics.length === 0 || availableQuestions.length === 0}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-indigo-500/20 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                <Play className="w-5 h-5" />
                                Start Practice Quiz
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === 'playing' && questions.length > 0 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    {/* Progress */}
                    <div className="quiz-header bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-indigo-400">Question {currentQuestionIndex + 1} of {questions.length}</span>
                            <div className="quiz-progress-bar w-32 h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                <div 
                                    className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Practice Mode</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-10 space-y-8">
                        <div className="quiz-content-area flex flex-col gap-6">
                            <div className="quiz-question-panel text-xl md:text-2xl font-semibold text-white leading-relaxed">
                                <LaTeXText text={questions[currentQuestionIndex].question} />
                            </div>

                            {/* Options Grid */}
                            <div className="quiz-options-panel grid gap-3">
                                {questions[currentQuestionIndex].options.map((option, idx) => {
                                    const isSelected = selectedAnswer === idx;
                                    const isCorrect = idx === questions[currentQuestionIndex].correctAnswer;
                                    
                                    let cardStyle = "bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5";
                                    if (isSelected) {
                                        cardStyle = "bg-indigo-500/10 border-indigo-500/40 text-indigo-300";
                                    }
                                    if (isAnswerSubmitted) {
                                        if (isCorrect) {
                                            cardStyle = "bg-emerald-500/10 border-emerald-500/40 text-emerald-400";
                                        } else if (isSelected) {
                                            cardStyle = "bg-rose-500/10 border-rose-500/40 text-rose-400";
                                        } else {
                                            cardStyle = "bg-white/[0.01] border-white/5 text-slate-600 opacity-60";
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            disabled={isAnswerSubmitted}
                                            onClick={() => setSelectedAnswer(idx)}
                                            className={`w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border text-left transition-all ${cardStyle}`}
                                        >
                                            <span className="font-medium text-base">
                                                <span className="mr-3 font-bold text-slate-500">{String.fromCharCode(65 + idx)}.</span>
                                                <LaTeXText text={option.text} />
                                            </span>
                                            {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                                            {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Explanation Box */}
                        {isAnswerSubmitted && questions[currentQuestionIndex].explanation && (
                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-5 md:p-6 text-indigo-300 text-sm animate-in fade-in duration-300">
                                <span className="font-bold text-indigo-400 uppercase tracking-wider text-xs mb-2 block">Explanation</span>
                                <LaTeXText text={questions[currentQuestionIndex].explanation} />
                            </div>
                        )}

                        {/* Actions */}
                        <div className="quiz-nav-buttons flex justify-end pt-4 border-t border-white/5">
                            {!isAnswerSubmitted ? (
                                <button
                                    onClick={handleSubmitAnswer}
                                    disabled={selectedAnswer === null}
                                    className="flex items-center gap-2 bg-indigo-500 disabled:opacity-40 text-white px-8 py-4 rounded-xl font-bold transition-all disabled:cursor-not-allowed hover:bg-indigo-600"
                                >
                                    Check Answer
                                </button>
                            ) : (
                                <button
                                    onClick={handleNextQuestion}
                                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95"
                                >
                                    {currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Next Question'}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {step === 'result' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    {/* Score Card */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-8 md:p-12 text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 mb-2">
                            <Trophy className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Quiz Completed!</h2>
                            <p className="text-slate-400 mt-2 text-base">Great job practicing your chemistry skills.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-6 border-t border-white/5">
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">Score</span>
                                <span className="text-2xl font-black text-white">{score} / {questions.length}</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">Accuracy</span>
                                <span className="text-2xl font-black text-indigo-400">{Math.round((score / questions.length) * 100)}%</span>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <span className="text-xs text-slate-500 block mb-1">XP Earned</span>
                                <span className="text-2xl font-black text-amber-500">+{score * 10} XP</span>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-center gap-4">
                            <button
                                onClick={() => setStep('config')}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Configure New Quiz
                            </button>
                            <button
                                onClick={handleStartQuiz}
                                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-indigo-500/20"
                            >
                                Retry Same Quiz
                            </button>
                        </div>
                    </div>

                    {/* Question Review List */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Review Questions</h3>
                        {questions.map((q, idx) => {
                            const ans = userAnswers.find(ua => ua.questionId === q.id);
                            const isCorrect = ans?.isCorrect || false;

                            return (
                                <div key={q.id} className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-6 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                                            isCorrect ? 'bg-emerald-500/25 text-emerald-400' : 'bg-rose-500/25 text-rose-400'
                                        }`}>
                                            {idx + 1}
                                        </div>
                                        <div className="text-white font-medium text-lg pt-0.5">
                                            <LaTeXText text={q.question} />
                                        </div>
                                    </div>

                                    <div className="grid gap-2 pl-12">
                                        {q.options.map((opt, optIdx) => {
                                            const isCorrectAnswer = optIdx === q.correctAnswer;
                                            const isUserChoice = optIdx === ans?.selectedAnswer;

                                            let optStyle = "bg-white/[0.01] border-white/5 text-slate-400";
                                            if (isCorrectAnswer) {
                                                optStyle = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
                                            } else if (isUserChoice) {
                                                optStyle = "bg-rose-500/10 border-rose-500/20 text-rose-400";
                                            }

                                            return (
                                                <div key={optIdx} className={`p-3 rounded-xl border text-sm ${optStyle}`}>
                                                    <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                                                    <LaTeXText text={opt.text} />
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {q.explanation && (
                                        <div className="pl-12">
                                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4 text-indigo-300 text-xs leading-relaxed">
                                                <span className="font-bold text-indigo-400 uppercase tracking-wider text-[10px] mb-1 block">Explanation</span>
                                                <LaTeXText text={q.explanation} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
