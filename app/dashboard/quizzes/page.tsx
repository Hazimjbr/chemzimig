'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGamification } from '@/contexts/GamificationContext';
import { allCurricula } from '@/data/curriculum';
import { questionBank, examsRegistry } from '@/data/exams';
import { curriculumRegistry } from '@/data/curriculum/registry';
import { 
    Trophy, Play, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RefreshCw, 
    Clock, HelpCircle, Check, BookOpen, AlertCircle, Layers, Settings, Compass, Sliders,
    Flag, LayoutGrid, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { sanitizeKatex } from '@/lib/katex-sanitizer';

interface LocalQuestion {
    source: 'quiz' | 'exam';
    id: string;
    question: string;
    options: { text: string; isCorrect?: boolean }[];
    correctAnswerIndex: number;
    explanation?: string;
    level: string; // 'Easy' | 'Medium' | 'Hard'
    rawLevel: number; // 1 | 2 | 3
    track: string;
    trackId: string;
    unitTitle: string;
    rawUnitId: string;
    lessonTitle: string;
    rawLessonNum: number;
    imageHtml?: string;
}

const renderTextWithMath = (text: string): React.ReactNode => {
    if (!text) return null;
    
    if (text.includes('$$')) {
        const parts = text.split('$$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <BlockMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <span key={i}>{renderTextWithMath(part)}</span>;
                })}
            </React.Fragment>
        );
    }

    if (text.includes('$')) {
        const parts = text.split('$');
        return (
            <React.Fragment>
                {parts.map((part, i) => {
                    if (i % 2 === 1) {
                        return <InlineMath key={i} math={sanitizeKatex(part)} />;
                    }
                    return <span key={i}>{part}</span>;
                })}
            </React.Fragment>
        );
    }
    
    return text;
};

const renderQuestionContent = (text: string): React.ReactNode => {
    if (!text) return null;
    
    const cleanText = text.replace(/\\n/g, '\n');
    const lines = cleanText.split('\n');
    
    if (cleanText.includes('|')) {
        const elements: React.ReactNode[] = [];
        let tableRows: string[][] = [];
        let inTable = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('|')) {
                inTable = true;
                const cells = line.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
                if (cells.every(c => c.startsWith(':') || c.startsWith('-') || c.endsWith(':') || c === '')) {
                    continue;
                }
                tableRows.push(cells);
            } else {
                if (inTable && tableRows.length > 0) {
                    const headers = tableRows[0];
                    const bodyRows = tableRows.slice(1);
                    elements.push(
                        <div key={`table-${i}`} className="overflow-x-auto my-4 rounded-xl border border-white/10 max-w-full">
                            <table className="min-w-full text-center border-collapse">
                                <thead className="bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                                    <tr>
                                        {headers.map((h, idx) => (
                                            <th key={idx} className="p-3">
                                                {renderTextWithMath(h)}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm">
                                    {bodyRows.map((row, rIdx) => (
                                        <tr key={rIdx}>
                                            {row.map((cell, cIdx) => (
                                                <td key={cIdx} className="p-3 text-slate-300">
                                                    {renderTextWithMath(cell)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                    tableRows = [];
                    inTable = false;
                }
                if (line !== '') {
                    elements.push(
                        <div key={`line-${i}`} className="mb-2">
                            {renderTextWithMath(line)}
                        </div>
                    );
                }
            }
        }
        
        if (inTable && tableRows.length > 0) {
            const headers = tableRows[0];
            const bodyRows = tableRows.slice(1);
            elements.push(
                <div key="table-end" className="overflow-x-auto my-4 rounded-xl border border-white/10 max-w-full">
                    <table className="min-w-full text-center border-collapse">
                        <thead className="bg-white/5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <tr>
                                {headers.map((h, idx) => (
                                    <th key={idx} className="p-3">
                                        {renderTextWithMath(h)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-sm">
                            {bodyRows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="p-3 text-slate-300">
                                            {renderTextWithMath(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        
        return <div className="flex flex-col">{elements}</div>;
    }
    
    return (
        <div className="flex flex-col gap-1.5">
            {lines.map((line, idx) => (
                line.trim() === ''
                    ? <div key={idx} className="h-2" />
                    : <div key={idx}>{renderTextWithMath(line)}</div>
            ))}
        </div>
    );
};

const resolveCurriculumTitle = (id: string, unitId: string): string => {
    const cleanId = id.toLowerCase().trim();
    const cleanUnit = unitId.toLowerCase().trim();

    if (cleanId === 'cie-igcse' || cleanId === 'igcse') return 'Cambridge IGCSE';
    if (cleanId === 'cie-as') return 'Cambridge AS-Level';
    if (cleanId === 'cie-alevel' || cleanId === 'cie-a2') return 'Cambridge A-Level';
    if (cleanId === 'edexcel-igcse') return 'Edexcel IGCSE';
    if (cleanId === 'edexcel-as') return 'Edexcel AS-Level';
    if (cleanId === 'edexcel-a2') return 'Edexcel A2-Level';
    
    if (cleanId === 'edexcel-alevel') {
        if (cleanUnit.includes('unit-4') || cleanUnit.includes('unit-5') || cleanUnit.includes('unit-6') || cleanUnit.includes('u4') || cleanUnit.includes('u5') || cleanUnit.includes('u6')) {
            return 'Edexcel A2-Level';
        }
        return 'Edexcel AS-Level';
    }
    
    return id;
};

const resolveUnitTitle = (unitId: string, trackId: string): string => {
    if (/^\d+\./.test(unitId)) return unitId;
    
    const cleanUnitId = unitId.toLowerCase().trim();
    let cleanTrackId = trackId.toLowerCase().trim();
    
    if (cleanTrackId === 'igcse') cleanTrackId = 'cie-igcse';
    if (cleanTrackId === 'cie-alevel' || cleanTrackId === 'cie-a2') cleanTrackId = 'cie-alevel';
    
    let curriculum = allCurricula.find(c => c.id.toLowerCase() === cleanTrackId);
    if (!curriculum && (cleanTrackId === 'edexcel-alevel' || cleanTrackId === 'edexcel-as' || cleanTrackId === 'edexcel-a2')) {
        if (cleanUnitId.includes('unit-4') || cleanUnitId.includes('unit-5') || cleanUnitId.includes('unit-6') || cleanUnitId.includes('u4') || cleanUnitId.includes('u5') || cleanUnitId.includes('u6')) {
            curriculum = allCurricula.find(c => c.id === 'edexcel-a2');
        } else {
            curriculum = allCurricula.find(c => c.id === 'edexcel-as');
        }
    }
    
    if (curriculum) {
        const matchNum = cleanUnitId.match(/unit-(\d+)/) || cleanUnitId.match(/u(\d+)/);
        if (matchNum) {
            const num = parseInt(matchNum[1], 10);
            const topic = curriculum.topics.find(t => t.number === num);
            if (topic) {
                if (/^unit\s+\d+:/i.test(topic.title)) {
                    return topic.title;
                }
                return `Unit ${topic.number}: ${topic.title}`;
            }
        }
        
        const topicById = curriculum.topics.find(t => t.id === cleanUnitId);
        if (topicById) {
            if (/^unit\s+\d+:/i.test(topicById.title)) {
                return topicById.title;
            }
            return `Unit ${topicById.number}: ${topicById.title}`;
        }
    }
    
    return unitId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

export default function QuizzesPage() {
    const { user } = useAuth();
    const { addXP, solvedQuestions, saveQuestionAttempts } = useGamification();

    const [allQuestions, setAllQuestions] = useState<LocalQuestion[]>([]);
    
    // Multi-step states
    const [step, setStep] = useState<'mode-select' | 'config' | 'playing' | 'result'>('mode-select');
    const [selectedMode, setSelectedMode] = useState<'comprehensive' | 'unit' | 'lesson' | 'custom'>('comprehensive');
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'new' | 'incorrect' | 'correct'>('new');
    
    // Configuration states
    const [selectedSource, setSelectedSource] = useState<'all' | 'exam' | 'quiz'>('all');
    const [selectedUnit, setSelectedUnit] = useState<string>('all');
    const [selectedLesson, setSelectedLesson] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [questionCount, setQuestionCount] = useState<number>(10);
    const [selectedCustomUnits, setSelectedCustomUnits] = useState<string[]>([]);

    // Active gameplay states
    const [questions, setQuestions] = useState<LocalQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [timeStart, setTimeStart] = useState<number>(0);
    const [timeTaken, setTimeTaken] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<Array<{ questionId: string; selectedAnswer: number; isCorrect: boolean }>>([]);

    // Free-navigation exam states
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [flagged, setFlagged] = useState<Set<number>>(new Set());
    const [showDashboard, setShowDashboard] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [showFinishConfirm, setShowFinishConfirm] = useState<boolean>(false);

    const [hasSavedSession, setHasSavedSession] = useState<boolean>(false);

    // Live elapsed timer during exam
    useEffect(() => {
        if (step !== 'playing' || !timeStart) return;
        const interval = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - timeStart) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [step, timeStart]);

    // Save session state to sessionStorage
    useEffect(() => {
        if (step === 'playing' && questions.length > 0) {
            sessionStorage.setItem('chemzim_quiz_session', JSON.stringify({
                questions,
                currentQuestionIndex,
                answers,
                flagged: Array.from(flagged),
                timeStart
            }));
        } else if (step === 'result' || step === 'mode-select') {
            sessionStorage.removeItem('chemzim_quiz_session');
        }
    }, [step, questions, currentQuestionIndex, answers, flagged, timeStart]);

    // Check for saved session on mount
    useEffect(() => {
        const saved = sessionStorage.getItem('chemzim_quiz_session');
        if (saved) {
            setHasSavedSession(true);
        }
    }, []);

    const handleResumeSession = () => {
        const saved = sessionStorage.getItem('chemzim_quiz_session');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                setQuestions(data.questions || []);
                setCurrentQuestionIndex(data.currentQuestionIndex || 0);
                setAnswers(data.answers || {});
                setFlagged(new Set(data.flagged || []));
                setTimeStart(data.timeStart || Date.now());
                setSelectedAnswer(null);
                setIsAnswerSubmitted(false);
                setScore(0);
                setUserAnswers([]);
                setStep('playing');
            } catch (e) {
                console.error('Failed to parse saved session:', e);
            }
        }
        setHasSavedSession(false);
    };

    const handleDiscardSession = () => {
        sessionStorage.removeItem('chemzim_quiz_session');
        setHasSavedSession(false);
    };

    // 1. Build and map all questions on mount
    useEffect(() => {
        const staticExamQuestions: LocalQuestion[] = questionBank.map(q => {
            const unitTitle = resolveUnitTitle(q.topic, q.curriculum);
            const track = resolveCurriculumTitle(q.curriculum, q.topic);
            const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
            
            let trackId = q.curriculum.toLowerCase().trim();
            if (trackId === 'igcse') trackId = 'cie-igcse';
            if (trackId === 'cie-alevel' || trackId === 'cie-a2') trackId = 'cie-alevel';
            if (trackId === 'edexcel-alevel') {
                if (q.topic.includes('unit-4') || q.topic.includes('unit-5') || q.topic.includes('unit-6') || q.topic.includes('u4') || q.topic.includes('u5') || q.topic.includes('u6')) {
                    trackId = 'edexcel-a2';
                } else {
                    trackId = 'edexcel-as';
                }
            }

            return {
                source: 'exam',
                id: q.id,
                question: q.question,
                options: q.options.map((opt, idx) => ({
                    text: opt.text,
                    isCorrect: idx === q.correctAnswer
                })),
                correctAnswerIndex: q.correctAnswer,
                explanation: q.explanation,
                level,
                rawLevel: q.level,
                track,
                trackId,
                unitTitle,
                rawUnitId: q.topic,
                lessonTitle: 'Exam Practice Bank',
                rawLessonNum: 0,
                imageHtml: q.imageHtml
            };
        });

        const modularExamQuestions: LocalQuestion[] = [];
        Object.entries(examsRegistry).forEach(([curriculumId, unitRegistry]) => {
            Object.entries(unitRegistry).forEach(([unitNumKey, lessonRegistry]) => {
                const unitNumber = parseInt(unitNumKey, 10);
                const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
                const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
                
                let trackId = curriculumId.toLowerCase().trim();
                if (trackId === 'edexcel-alevel') {
                    if (unitNumber >= 4) {
                        trackId = 'edexcel-a2';
                    } else {
                        trackId = 'edexcel-as';
                    }
                }
                
                Object.entries(lessonRegistry).forEach(([lessonNumKey, questions]) => {
                    const lessonNumber = parseInt(lessonNumKey, 10);
                    const registryKey = `${curriculumId}-unit-${unitNumber}`;
                    const curriculumLesson = curriculumRegistry[registryKey]?.[lessonNumber];
                    const lessonTitle = curriculumLesson 
                        ? `${lessonNumber}. ${curriculumLesson.title}` 
                        : `Lesson ${lessonNumber}`;
                        
                    questions.forEach(q => {
                        const level = q.level === 1 ? 'Easy' : q.level === 2 ? 'Medium' : 'Hard';
                        modularExamQuestions.push({
                            source: 'exam',
                            id: q.id,
                            question: q.question,
                            options: q.options.map((opt, idx) => ({
                                text: opt.text,
                                isCorrect: idx === q.correctAnswer
                            })),
                            correctAnswerIndex: q.correctAnswer,
                            explanation: q.explanation,
                            level,
                            rawLevel: q.level,
                            track,
                            trackId,
                            unitTitle,
                            rawUnitId: `unit-${unitNumber}`,
                            lessonTitle,
                            rawLessonNum: lessonNumber
                        });
                    });
                });
            });
        });

        const modularIds = new Set(modularExamQuestions.map(q => q.id));
        const filteredStatic = staticExamQuestions.filter(q => !modularIds.has(q.id));

        const quizQuestions: LocalQuestion[] = [];
        Object.entries(curriculumRegistry).forEach(([registryKey, unitLessons]) => {
            const match = registryKey.match(/^(.+)-unit-(\d+)$/);
            if (!match) return;
            const curriculumId = match[1];
            const unitNumber = parseInt(match[2], 10);
            
            const unitTitle = resolveUnitTitle(`unit-${unitNumber}`, curriculumId);
            const track = resolveCurriculumTitle(curriculumId, `unit-${unitNumber}`);
            
            let trackId = curriculumId.toLowerCase().trim();
            if (trackId === 'edexcel-alevel') {
                if (unitNumber >= 4) {
                    trackId = 'edexcel-a2';
                } else {
                    trackId = 'edexcel-as';
                }
            }
            
            Object.entries(unitLessons).forEach(([lessonNumKey, lessonItem]) => {
                const lessonNumber = parseInt(lessonNumKey, 10);
                const lessonQuiz = lessonItem.quiz || [];
                
                lessonQuiz.forEach((q, idx) => {
                    const isCorrectIndex = q.options.findIndex((opt: any) => opt.isCorrect);
                    let level = 'Medium';
                    let rawLevel = 2;
                    if (q.id && q.id.includes('EASY')) { level = 'Easy'; rawLevel = 1; }
                    else if (q.id && q.id.includes('HARD')) { level = 'Hard'; rawLevel = 3; }
                    
                    quizQuestions.push({
                        source: 'quiz',
                        id: q.id || `${curriculumId}-u${unitNumber}-l${lessonNumber}-q${idx}`,
                        question: q.question,
                        options: q.options.map((opt: any) => ({
                            text: opt.text,
                            isCorrect: opt.isCorrect
                        })),
                        correctAnswerIndex: isCorrectIndex !== -1 ? isCorrectIndex : 0,
                        explanation: q.explanation,
                        level,
                        rawLevel,
                        track,
                        trackId,
                        unitTitle,
                        rawUnitId: `unit-${unitNumber}`,
                        lessonTitle: `${lessonNumber}. ${lessonItem.title}`,
                        rawLessonNum: lessonNumber
                    });
                });
            });
        });

        setAllQuestions([...filteredStatic, ...modularExamQuestions, ...quizQuestions]);
    }, []);

    // 2. Identify student track ID and active curriculum object
    const studentTrackId = useMemo(() => {
        const track = user?.track || (user?.grade?.toLowerCase().includes('edexcel') ? 'edexcel-as' : (user?.grade === 'AS Level' ? 'cie-as' : (user?.grade === 'A2 Level' || user?.grade === 'IB' || user?.grade === 'A Level' ? 'cie-alevel' : 'cie-igcse')));
        
        let normalized = track.toLowerCase().trim();
        if (normalized === 'igcse') normalized = 'cie-igcse';
        
        if (normalized === 'edexcel-alevel') {
            const grade = (user?.grade || '').toLowerCase();
            if (grade.includes('a2') || grade.includes('a level') || grade.includes('alevel') || grade.includes('unit 4') || grade.includes('unit 5') || grade.includes('unit 6')) {
                return 'edexcel-a2';
            }
            return 'edexcel-as';
        }
        
        return normalized;
    }, [user]);

    const activeCurriculum = useMemo(() => {
        return allCurricula.find(c => c.id.startsWith(studentTrackId)) || allCurricula[0];
    }, [studentTrackId]);

    // 3. Dynamic Lists and selections matching active curriculum ONLY
    const unitsList = useMemo(() => {
        return activeCurriculum.topics.map(t => {
            if (/^unit\s+\d+:/i.test(t.title)) {
                return t.title;
            }
            return `Unit ${t.number}: ${t.title}`;
        });
    }, [activeCurriculum]);

    const lessonsList = useMemo(() => {
        return Array.from(new Set(
            allQuestions
                .filter(q => q.trackId === studentTrackId &&
                             (selectedSource === 'all' || q.source === selectedSource) &&
                             (selectedUnit === 'all' || q.unitTitle === selectedUnit))
                .map(q => q.lessonTitle)
        )).filter(title => title !== 'Exam Practice Bank');
    }, [allQuestions, studentTrackId, selectedUnit, selectedSource]);

    // 4. Reset config when mode changes
    const handleModeSelect = (mode: 'comprehensive' | 'unit' | 'lesson' | 'custom') => {
        setSelectedMode(mode);
        setSelectedSource('all');
        setSelectedUnit('all');
        setSelectedLesson('all');
        setSelectedLevel('all');
        setSelectedCustomUnits([]);
        setSelectedFilter('new');
        setStep('config');
    };

    // 4b. Filter memos for smart filters
    const filteredPool = useMemo(() => {
        let pool = allQuestions.filter(q => q.trackId === studentTrackId);

        // Filter by source
        if (selectedSource !== 'all') {
            pool = pool.filter(q => q.source === selectedSource);
        }

        // Mode specific filtering
        if (selectedMode === 'unit') {
            if (selectedUnit !== 'all') {
                pool = pool.filter(q => q.unitTitle === selectedUnit);
            }
        } else if (selectedMode === 'lesson') {
            if (selectedUnit !== 'all') {
                pool = pool.filter(q => q.unitTitle === selectedUnit);
            }
            if (selectedLesson !== 'all') {
                pool = pool.filter(q => q.lessonTitle === selectedLesson);
            }
        } else if (selectedMode === 'custom') {
            if (selectedCustomUnits.length > 0) {
                pool = pool.filter(q => selectedCustomUnits.includes(q.unitTitle));
            }
        }

        // Difficulty filtering
        if (selectedLevel !== 'all') {
            pool = pool.filter(q => q.level.toLowerCase() === selectedLevel.toLowerCase());
        }

        return pool;
    }, [allQuestions, studentTrackId, selectedSource, selectedMode, selectedUnit, selectedLesson, selectedCustomUnits, selectedLevel]);

    const filterCounts = useMemo(() => {
        const all = filteredPool.length;
        const newCount = filteredPool.filter(q => !solvedQuestions[q.id]).length;
        const incorrect = filteredPool.filter(q => solvedQuestions[q.id] && !solvedQuestions[q.id].isCorrect).length;
        const correct = filteredPool.filter(q => solvedQuestions[q.id] && solvedQuestions[q.id].isCorrect).length;

        return { all, new: newCount, incorrect, correct };
    }, [filteredPool, solvedQuestions]);

    const activeFilteredQuestions = useMemo(() => {
        if (selectedFilter === 'new') {
            return filteredPool.filter(q => !solvedQuestions[q.id]);
        }
        if (selectedFilter === 'incorrect') {
            return filteredPool.filter(q => solvedQuestions[q.id] && !solvedQuestions[q.id].isCorrect);
        }
        if (selectedFilter === 'correct') {
            return filteredPool.filter(q => solvedQuestions[q.id] && solvedQuestions[q.id].isCorrect);
        }
        return filteredPool;
    }, [filteredPool, selectedFilter, solvedQuestions]);

    // 5. Generate and start the exam
    const handleStartExam = () => {
        const pool = activeFilteredQuestions;

        if (pool.length === 0) {
            alert("No questions found matching your criteria. Please adjust your selections.");
            return;
        }

        // Shuffle questions
        const shuffled = [...pool].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

        // Shuffle options for each question
        const finalized = selected.map(q => {
            const originalCorrectText = q.options[q.correctAnswerIndex]?.text;
            const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
            const newIndex = shuffledOptions.findIndex(o => o.text === originalCorrectText);
            return {
                ...q,
                options: shuffledOptions,
                correctAnswerIndex: newIndex !== -1 ? newIndex : 0
            };
        });

        setQuestions(finalized);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
        setScore(0);
        setUserAnswers([]);
        setAnswers({});
        setFlagged(new Set());
        setShowDashboard(false);
        setShowFinishConfirm(false);
        setElapsedTime(0);
        setTimeStart(Date.now());
        setStep('playing');
    };

    // Format elapsed time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Navigate to a specific question
    const handleNavigateTo = (index: number) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestionIndex(index);
        }
    };

    // Toggle flag for current question
    const handleToggleFlag = (index: number) => {
        setFlagged(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    // Select answer for current question (free navigation — doesn't advance)
    const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    };

    // Count stats for the dashboard
    const answeredCount = Object.keys(answers).length;
    const flaggedCount = flagged.size;
    const unansweredCount = questions.length - answeredCount;

    // Finish exam — calculate all scores at once
    const handleFinishExam = () => {
        setShowFinishConfirm(false);
        setShowDashboard(false);

        let finalScore = 0;
        const finalUserAnswers: Array<{ questionId: string; selectedAnswer: number; isCorrect: boolean }> = [];
        const finalAttempts: Array<{ questionId: string; difficulty: number; isCorrect: boolean }> = [];

        questions.forEach((q, idx) => {
            const selectedOpt = answers[idx];
            const isCorrect = selectedOpt !== undefined && selectedOpt === q.correctAnswerIndex;
            if (isCorrect) finalScore++;

            finalUserAnswers.push({
                questionId: q.id,
                selectedAnswer: selectedOpt !== undefined ? selectedOpt : -1,
                isCorrect
            });
            finalAttempts.push({
                questionId: q.id,
                difficulty: q.rawLevel || 1,
                isCorrect
            });
        });

        setScore(finalScore);
        setUserAnswers(finalUserAnswers);
        setTimeTaken(Math.floor((Date.now() - timeStart) / 1000));

        // Add XP
        const earnedXP = finalScore * 15;
        if (addXP && earnedXP > 0) {
            addXP(earnedXP);
        }

        // Save question solved status
        saveQuestionAttempts(finalAttempts);

        setStep('result');
    };

    return (
        <div className="w-full max-w-5xl mx-auto pb-20 font-sans text-white">
            {hasSavedSession && (
                <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0b0b1a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10 space-y-6 text-center animate-in scale-in duration-250">
                        <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto text-indigo-400">
                            <Clock className="w-8 h-8 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Unfinished Quiz Detected</h3>
                            <p className="text-sm text-slate-400">
                                You have an incomplete quiz session. Would you like to resume where you left off?
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleDiscardSession}
                                className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm text-slate-300 transition-all"
                            >
                                Discard
                            </button>
                            <button
                                onClick={handleResumeSession}
                                className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Step Indicator Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Exam Designer</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                        Select a style, configure the curriculum details, and challenge your knowledge.
                    </p>
                </div>
                
                {/* Step Indicators */}
                <div className="hidden md:flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-2xl">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'mode-select' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>1. Mode</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'config' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>2. Config</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'playing' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>3. Test</span>
                    <span className="text-slate-700 text-xs">/</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${step === 'result' ? 'bg-indigo-500 text-white' : 'text-slate-500'}`}>4. Review</span>
                </div>
            </div>

            {/* STEP 1: MODE SELECT */}
            {step === 'mode-select' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <Compass className="w-12 h-12 text-indigo-400 mx-auto animate-pulse" />
                        <h2 className="text-2xl md:text-3xl font-extrabold">Choose Your Exam Mode</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Currently building exams for your registered curriculum: <strong className="text-indigo-400">{activeCurriculum.title}</strong>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <button 
                            onClick={() => handleModeSelect('comprehensive')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Comprehensive Exam</h3>
                                <p className="text-slate-400 text-sm">Test your knowledge across all units and lessons in the curriculum.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('unit')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Unit Exam</h3>
                                <p className="text-slate-400 text-sm">Focus strictly on one full unit at a specific difficulty level.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('lesson')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                                <Trophy className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Lesson Exam</h3>
                                <p className="text-slate-400 text-sm">Focus strictly on a single lesson's quiz and exam questions.</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => handleModeSelect('custom')}
                            className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-left transition-all group flex flex-col justify-between h-56"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Sliders className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Custom Exam</h3>
                                <p className="text-slate-400 text-sm">Choose multiple units, question source types, and difficulty level.</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 2: CONFIGURATION */}
            {step === 'config' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
                    
                    {/* Filter Inputs Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Settings className="w-5 h-5 text-indigo-400" />
                                Configure Selections
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                {/* A. Source Type */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Question Source</label>
                                    <div className="flex flex-col gap-2 bg-[#050515]/80 p-1.5 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'all', label: 'Mixed (Exam & Quiz)', icon: '🧪' },
                                            { id: 'exam', label: 'Exams Only', icon: '📝' },
                                            { id: 'quiz', label: 'Quizzes Only', icon: '📖' }
                                        ].map(src => {
                                            const isActive = selectedSource === src.id;
                                            return (
                                                <button
                                                    key={src.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedSource(src.id as any);
                                                        setSelectedLesson('all');
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                                                        isActive
                                                            ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-inner'
                                                            : 'bg-white/[0.01] border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                                                    }`}
                                                >
                                                    <span className="text-base">{src.icon}</span>
                                                    <span>{src.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* B. Difficulty */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Difficulty Level</label>
                                    <div className="flex flex-col gap-2 bg-[#050515]/80 p-1.5 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'all', label: 'All Difficulties', icon: '⚖️' },
                                            { id: 'easy', label: 'Easy', icon: '🟢' },
                                            { id: 'medium', label: 'Medium', icon: '🟡' },
                                            { id: 'hard', label: 'Hard', icon: '🔴' }
                                        ].map(lvl => {
                                            const isActive = selectedLevel === lvl.id;
                                            return (
                                                <button
                                                    key={lvl.id}
                                                    type="button"
                                                    onClick={() => setSelectedLevel(lvl.id)}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                                                        isActive
                                                            ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-inner'
                                                            : 'bg-white/[0.01] border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                                                    }`}
                                                >
                                                    <span className="text-base">{lvl.icon}</span>
                                                    <span>{lvl.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Smart Filtering */}
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Question Filtering</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#050515]/80 p-1 border border-white/5 rounded-2xl">
                                        {[
                                            { id: 'new', label: 'Unanswered', count: filterCounts.new },
                                            { id: 'incorrect', label: 'Answered Incorrectly', count: filterCounts.incorrect },
                                            { id: 'correct', label: 'Answered Correctly', count: filterCounts.correct },
                                            { id: 'all', label: 'All Questions', count: filterCounts.all }
                                        ].map(tab => {
                                            const isActive = selectedFilter === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setSelectedFilter(tab.id as any)}
                                                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                                                        isActive
                                                            ? 'bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 shadow-lg'
                                                            : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02] border border-transparent'
                                                    }`}
                                                >
                                                    <span>{tab.label}</span>
                                                    <span className={`text-[10px] font-medium opacity-80 ${isActive ? 'text-indigo-400' : 'text-slate-600'}`}>
                                                        ({tab.count})
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {activeFilteredQuestions.length === 0 && (
                                    <div className="sm:col-span-2 bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 flex items-start gap-3 text-rose-300 text-sm">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="font-bold">No questions match this filter!</p>
                                            <p className="text-xs text-rose-400/90">
                                                Try changing your filter settings, selecting another topic, or switching to "All Questions" to practice.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedFilter('all')}
                                                className="mt-2 text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 px-3 py-1.5 rounded-lg transition-colors text-white"
                                            >
                                                Switch to All Questions
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* C. Unit selection if applicable */}
                                {(selectedMode === 'unit' || selectedMode === 'lesson') && (
                                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select Target Unit</label>
                                        <select 
                                            value={selectedUnit}
                                            onChange={e => {
                                                setSelectedUnit(e.target.value);
                                                setSelectedLesson('all');
                                            }}
                                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                                        >
                                            <option value="all">Choose a Unit...</option>
                                            {unitsList.map(unit => (
                                                <option key={unit} value={unit}>{unit}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {/* D. Lesson selection if applicable */}
                                {selectedMode === 'lesson' && (
                                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select Lesson</label>
                                        <select 
                                            value={selectedLesson}
                                            onChange={e => setSelectedLesson(e.target.value)}
                                            className="bg-[#0b0b1a] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none text-slate-300 w-full"
                                        >
                                            <option value="all">All Lessons in Unit</option>
                                            {lessonsList.map(lesson => (
                                                <option key={lesson} value={lesson}>{lesson}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            {/* E. Custom Units Selection Checkboxes */}
                            {selectedMode === 'custom' && (
                                <div className="space-y-3 pt-4 border-t border-white/5">
                                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select Units to Include</label>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {unitsList.map(unit => {
                                            const isChecked = selectedCustomUnits.includes(unit);
                                            return (
                                                <button
                                                    key={unit}
                                                    onClick={() => {
                                                        setSelectedCustomUnits(prev => 
                                                            prev.includes(unit) ? prev.filter(u => u !== unit) : [...prev, unit]
                                                        );
                                                    }}
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
                                                    <span className="text-sm font-semibold truncate">{unit}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* F. Question Count Buttons */}
                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Number of Questions</label>
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

                    {/* Summary Sidebar Column */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-fit space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">Exam Overview</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Curriculum:</span>
                                    <span className="text-white font-semibold">{activeCurriculum.title}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Mode:</span>
                                    <span className="text-indigo-400 font-bold capitalize">{selectedMode} Exam</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Source:</span>
                                    <span className="text-white font-semibold">
                                        {selectedSource === 'all' ? 'Mixed' : selectedSource === 'exam' ? 'Exams' : 'Quizzes'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Difficulty:</span>
                                    <span className="text-white font-semibold capitalize">{selectedLevel === 'all' ? 'All levels' : selectedLevel}</span>
                                </div>
                                <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
                                    <span className="text-slate-400">Available:</span>
                                    <span className="text-indigo-400 font-bold">{activeFilteredQuestions.length} Questions</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleStartExam}
                                disabled={activeFilteredQuestions.length === 0}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-indigo-500/20 hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            >
                                <Play className="w-5 h-5" />
                                Start Exam
                            </button>

                            <button
                                onClick={() => setStep('mode-select')}
                                className="w-full text-center text-xs text-slate-500 hover:text-white py-2 transition-colors"
                            >
                                Back to Mode Select
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 3: GAMEPLAY — Free Navigation */}
            {step === 'playing' && questions.length > 0 && (
                <div className="space-y-4 animate-in fade-in duration-500">

                    {/* Top Bar: Timer + Controls */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-3 md:p-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowFinishConfirm(true)}
                                className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 hover:border-rose-500/40 text-rose-400 text-xs font-bold rounded-xl transition-all"
                            >
                                Finish
                            </button>
                            <button
                                onClick={() => setShowDashboard(true)}
                                className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold rounded-xl transition-all"
                            >
                                <LayoutGrid className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Dashboard</span>
                            </button>
                        </div>

                        <span className="text-sm font-bold text-slate-400">
                            {currentQuestionIndex + 1} / {questions.length}
                        </span>

                        <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm font-mono font-bold text-indigo-300 tabular-nums">{formatTime(elapsedTime)}</span>
                        </div>
                    </div>

                    {/* Horizontal Question Navigator Bar */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-2xl p-3 md:p-4">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap">
                            {questions.map((_, idx) => {
                                const isCurrent = idx === currentQuestionIndex;
                                const isAnswered = answers[idx] !== undefined;
                                const isFlagged = flagged.has(idx);

                                let circleStyle = 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 hover:text-white';
                                if (isCurrent) {
                                    circleStyle = 'bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/30 scale-110';
                                } else if (isFlagged && isAnswered) {
                                    circleStyle = 'bg-amber-500/20 border-amber-500/40 text-amber-400';
                                } else if (isFlagged) {
                                    circleStyle = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                                } else if (isAnswered) {
                                    circleStyle = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleNavigateTo(idx)}
                                        className={`relative w-9 h-9 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-200 ${circleStyle}`}
                                    >
                                        {idx + 1}
                                        {isFlagged && (
                                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border border-[#0a0a1f] flex items-center justify-center">
                                                <Flag className="w-1.5 h-1.5 text-white" />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-500">
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" /> Current</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 inline-block" /> Answered</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 inline-block" /> Flagged</span>
                            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-white/10 inline-block" /> Unanswered</span>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-6 md:p-10 space-y-6">
                        {/* Flag for Review */}
                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold px-3 py-1 rounded-lg ${
                                questions[currentQuestionIndex].level === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                questions[currentQuestionIndex].level === 'Hard' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                                {questions[currentQuestionIndex].level}
                            </span>
                            <button
                                onClick={() => handleToggleFlag(currentQuestionIndex)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                                    flagged.has(currentQuestionIndex)
                                        ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <Flag className="w-3.5 h-3.5" />
                                {flagged.has(currentQuestionIndex) ? 'Flagged for Review' : 'Flag for Review'}
                            </button>
                        </div>

                        {/* Question Text */}
                        <div className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                            {renderQuestionContent(questions[currentQuestionIndex].question)}
                        </div>

                        {questions[currentQuestionIndex].imageHtml && (
                            <div className="my-4 max-w-full overflow-x-auto flex justify-center" dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].imageHtml }} />
                        )}

                        {/* Options */}
                        <div className="grid gap-3">
                            {questions[currentQuestionIndex].options.map((option, idx) => {
                                const isSelected = answers[currentQuestionIndex] === idx;
                                
                                let cardStyle = 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5';
                                if (isSelected) {
                                    cardStyle = 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300 ring-1 ring-indigo-500/20';
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectAnswer(currentQuestionIndex, idx)}
                                        className={`w-full flex items-center p-4 md:p-5 rounded-2xl border text-left transition-all ${cardStyle}`}
                                    >
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0 ${
                                            isSelected ? 'bg-indigo-500 text-white' : 'bg-white/5 text-slate-500 border border-white/10'
                                        }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="font-medium text-base">
                                            {renderTextWithMath(option.text)}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <button
                                onClick={() => handleNavigateTo(currentQuestionIndex - 1)}
                                disabled={currentQuestionIndex === 0}
                                className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Previous
                            </button>

                            <span className="text-xs text-slate-500 font-medium">
                                {answeredCount}/{questions.length} answered
                                {flaggedCount > 0 && <span className="text-amber-500 ml-2">• {flaggedCount} flagged</span>}
                            </span>

                            {currentQuestionIndex < questions.length - 1 ? (
                                <button
                                    onClick={() => handleNavigateTo(currentQuestionIndex + 1)}
                                    className="flex items-center gap-2 px-5 py-3 bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 rounded-xl font-bold text-sm transition-all"
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowFinishConfirm(true)}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                                >
                                    Finish Exam
                                    <CheckCircle2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Question Dashboard Modal */}
                    {showDashboard && (
                        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-[#0b0b1a] border border-white/10 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl shadow-black/50 space-y-6 animate-in scale-in duration-250 max-h-[80vh] overflow-y-auto">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <LayoutGrid className="w-5 h-5 text-indigo-400" />
                                        Question Dashboard
                                    </h3>
                                    <button onClick={() => setShowDashboard(false)} className="text-slate-500 hover:text-white transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Stats Summary */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-emerald-400">{answeredCount}</span>
                                        <span className="text-[10px] text-emerald-400/70 block">Answered</span>
                                    </div>
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-amber-400">{flaggedCount}</span>
                                        <span className="text-[10px] text-amber-400/70 block">Flagged</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                                        <span className="text-lg font-black text-slate-300">{unansweredCount}</span>
                                        <span className="text-[10px] text-slate-500 block">Unanswered</span>
                                    </div>
                                </div>

                                {/* Question Grid */}
                                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                                    {questions.map((_, idx) => {
                                        const isAnswered = answers[idx] !== undefined;
                                        const isFlagged = flagged.has(idx);
                                        const isCurrent = idx === currentQuestionIndex;

                                        let style = 'bg-white/5 border-white/10 text-slate-500';
                                        if (isCurrent) {
                                            style = 'bg-indigo-500 border-indigo-400 text-white ring-2 ring-indigo-500/30';
                                        } else if (isFlagged && isAnswered) {
                                            style = 'bg-amber-500/20 border-amber-500/40 text-amber-400';
                                        } else if (isFlagged) {
                                            style = 'bg-amber-500/15 border-amber-500/30 text-amber-400';
                                        } else if (isAnswered) {
                                            style = 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => { handleNavigateTo(idx); setShowDashboard(false); }}
                                                className={`relative w-full aspect-square rounded-xl border flex items-center justify-center text-sm font-bold transition-all hover:scale-105 ${style}`}
                                            >
                                                {idx + 1}
                                                {isFlagged && (
                                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setShowDashboard(false)}
                                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-slate-300 transition-all"
                                >
                                    Continue Exam
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Finish Confirmation Modal */}
                    {showFinishConfirm && (
                        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <div className="bg-[#0b0b1a] border border-indigo-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl shadow-indigo-500/10 space-y-6 text-center animate-in scale-in duration-250">
                                <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Submit Exam?</h3>
                                    <div className="text-sm text-slate-400 space-y-1">
                                        <p>You have answered <strong className="text-white">{answeredCount}</strong> out of <strong className="text-white">{questions.length}</strong> questions.</p>
                                        {unansweredCount > 0 && (
                                            <p className="text-amber-400">
                                                ⚠️ {unansweredCount} question{unansweredCount > 1 ? 's' : ''} still unanswered!
                                            </p>
                                        )}
                                        {flaggedCount > 0 && (
                                            <p className="text-amber-400">
                                                🚩 {flaggedCount} question{flaggedCount > 1 ? 's' : ''} flagged for review.
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setShowFinishConfirm(false)}
                                        className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-sm text-slate-300 transition-all"
                                    >
                                        Continue Exam
                                    </button>
                                    <button
                                        onClick={handleFinishExam}
                                        className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90 active:scale-95"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* STEP 4: RESULTS */}
            {step === 'result' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="bg-[#0a0a1f]/60 border border-white/5 rounded-3xl p-8 md:p-12 text-center space-y-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 mb-2">
                            <Trophy className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Exam Completed!</h2>
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
                                <span className="text-2xl font-black text-amber-500">+{score * 15} XP</span>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-center gap-4">
                            <button
                                onClick={() => setStep('mode-select')}
                                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Configure New Exam
                            </button>
                            <button
                                onClick={handleStartExam}
                                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-indigo-500/20"
                            >
                                Retry Same Exam
                            </button>
                        </div>
                    </div>

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
                                            {renderTextWithMath(q.question)}
                                        </div>
                                    </div>

                                    <div className="grid gap-2 pl-12">
                                        {q.options.map((opt, optIdx) => {
                                            const isCorrectAnswer = optIdx === q.correctAnswerIndex;
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
                                                    {renderTextWithMath(opt.text)}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {q.explanation && (
                                        <div className="pl-12">
                                            <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-4 text-indigo-300 text-xs leading-relaxed">
                                                <span className="font-bold text-indigo-400 uppercase tracking-wider text-[10px] mb-1 block">Explanation</span>
                                                <div className="flex flex-col gap-1">
                                                    {(() => {
                                                        const clean = q.explanation
                                                            .replace(/\\n/g, '\n')
                                                            .replace(/(?:\s+|\n)*(?=\d+\.\s+[A-Z\u0600-\u06FF])/g, '\n')
                                                            .replace(/(?:\s+|\n)*(?=[•\*]\s+)/g, '\n');
                                                        return clean.split('\n').map((line, lineIdx) => (
                                                            line.trim() === ''
                                                                ? <div key={lineIdx} className="h-2" />
                                                                : <div key={lineIdx}>{renderTextWithMath(line)}</div>
                                                        ));
                                                    })()}
                                                </div>
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
