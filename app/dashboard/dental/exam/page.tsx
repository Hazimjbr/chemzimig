'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  Award,
  BarChart2,
  Lock,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ALL_DENTAL_QUESTIONS, DENTAL_CATEGORIES, recordDentalAnswer, extractAllChapters } from '@/lib/dental-store';
import { DentalQuestion, DentalCategory } from '@/data/dental/types';
import { useGamification } from '@/contexts/GamificationContext';
import { useAuth } from '@/contexts/AuthContext';

type ExamState = 'SETUP' | 'ACTIVE' | 'RESULTS';

export default function DentalExamPage() {
  const { addXP } = useGamification();
  const { user } = useAuth();
  const hasFullAccess = user?.isAdmin || user?.grade === 'dentistry';

  // Setup options
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [allChapters, setAllChapters] = useState<string[]>([]);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(15);
  const [onlyNew, setOnlyNew] = useState<boolean>(false);

  // Load chapters on mount
  useEffect(() => {
    setAllChapters(extractAllChapters());
  }, []);

  // Active Exam state
  const [examState, setExamState] = useState<ExamState>('SETUP');
  const [examQuestions, setExamQuestions] = useState<DentalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // questionId -> optionIdx
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  // Timer countdown effect
  useEffect(() => {
    if (examState !== 'ACTIVE' || secondsRemaining <= 0 || timeLimitMinutes === 9999) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimeUp(true);
          finishExam(true); // pass true to indicate it was auto-submitted on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, secondsRemaining, timeLimitMinutes]);

  const startExam = () => {
    if (!hasFullAccess) return; // Prevent starting if trial

    let pool = ALL_DENTAL_QUESTIONS;
    if (selectedCategory !== 'All') {
      pool = pool.filter(q => q.category === selectedCategory);
    }
    
    if (selectedChapter !== 'All') {
      pool = pool.filter(q => q.explanation.includes(selectedChapter));
    }

    if (onlyNew) {
      pool = pool.filter(q => q.id >= 1075);
    }

    if (pool.length === 0) {
      alert("No questions found matching this custom configuration! Try selecting a different category or chapter.");
      return;
    }

    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, pool.length));

    setExamQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setIsTimeUp(false);
    
    if (timeLimitMinutes === 9999) {
      setSecondsRemaining(999999); // Untimed
    } else {
      setSecondsRemaining(timeLimitMinutes * 60);
    }
    setExamState('ACTIVE');
  };

  const handleSelectOption = (optionIdx: number) => {
    if (!examQuestions[currentIndex]) return;
    const qId = examQuestions[currentIndex].id;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const finishExam = (wasTimeout = false) => {
    setExamState('RESULTS');
    if (wasTimeout) {
      setIsTimeUp(true);
    }

    // Record stats & add XP
    let correct = 0;
    examQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) {
        correct += 1;
        recordDentalAnswer(q.id, q.category, true);
      } else {
        // Either wrong answer or unanswered due to timeout -> record as mistake!
        recordDentalAnswer(q.id, q.category, false);
      }
    });

    // XP calculation: 10 XP per correct answer + 50 bonus for completing exam
    const earnedXP = (correct * 10) + 50;
    addXP(earnedXP, `Dental Exam Completed (${correct}/${examQuestions.length})`);
  };

  // Calculate score
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = examQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const scorePct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* 🔒 IF TRIAL USER: Display Gilded Lock Screen Immediately */}
      {!hasFullAccess ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/dental"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-400" />
                <span>Dental Exam Simulator</span>
              </h1>
              <p className="text-xs text-slate-400">
                Unlock exam simulator for ORE/MFDs/MJDF prep
              </p>
            </div>
          </div>

          <div className="bg-surface/80 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-2xl shadow-xl shadow-indigo-500/10">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Exam Simulator Locked</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
                The full exam simulator requires an active Premium Dental subscription. Contact Hazim Jaber to unlock.
              </p>
            </div>

            {/* Features list */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 text-left space-y-3 max-w-sm mx-auto text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Simulate 20, 50, or 100 question mock exams</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Real-time countdown timer integration</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Full ORE / MFDs score breakdown & history</span>
              </div>
            </div>

            <div className="pt-2 max-w-sm mx-auto">
              <a
                href="https://t.me/dentistry_mcqs_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Activation from Admin</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ----------------- STATE 1: SETUP ----------------- */}
          {examState === 'SETUP' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard/dental"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-amber-400" />
                    <span>Dental Exam Simulator</span>
                  </h1>
                  <p className="text-xs text-slate-400">
                    Configure your exam session (MFDs, MJDF & ORE style)
                  </p>
                </div>
              </div>

              <div className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl space-y-6 shadow-2xl animate-in fade-in duration-500">
                {/* Question Count Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    1. Select Number of Questions
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[10, 20, 30, 50, 100].map(count => (
                      <button
                        key={count}
                        onClick={() => {
                          setQuestionCount(count);
                          setTimeLimitMinutes(count === 10 ? 10 : count === 20 ? 20 : count === 30 ? 30 : count === 50 ? 50 : 90);
                        }}
                        className={`py-3 px-1 rounded-xl border text-center transition-all ${
                          questionCount === count
                            ? 'bg-amber-500/20 border-amber-500/60 text-amber-400 font-bold shadow-lg shadow-amber-500/10'
                            : 'bg-white/5 border-border text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-base font-black">{count}</div>
                        <div className="text-[9px] text-slate-500 mt-0.5">MCQs</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specialty Focus Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    2. Specialty Focus (Optional)
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">Comprehensive Exam (All 6 Specialties)</option>
                    {DENTAL_CATEGORIES.map(cat => (
                      <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Chapter Focus Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    3. Chapter Focus (Optional)
                  </label>
                  <select
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(e.target.value)}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">All Chapters / Topics</option>
                    {allChapters.map(ch => (
                      <option key={ch} value={ch}>{ch}</option>
                    ))}
                  </select>
                </div>

                {/* Custom Time Limit */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white uppercase tracking-wider block">
                    4. Select Time Limit
                  </label>
                  <select
                    value={timeLimitMinutes}
                    onChange={(e) => setTimeLimitMinutes(Number(e.target.value))}
                    className="w-full bg-slate-900/80 border border-border rounded-xl p-3 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value={5}>5 Minutes (Sprint)</option>
                    <option value={10}>10 Minutes</option>
                    <option value={15}>15 Minutes</option>
                    <option value={20}>20 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes (Standard)</option>
                    <option value={90}>90 Minutes</option>
                    <option value={9999}>Untimed (Relaxed Study Mode)</option>
                  </select>
                </div>

                {/* Master Extra Questions Only Toggle */}
                <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="space-y-0.5">
                    <label className="text-xs font-bold text-white block">
                      Newly Extracted Questions Only (Master Extra)
                    </label>
                    <span className="text-[10px] text-slate-500 block">
                      Limit this exam session to only the {ALL_DENTAL_QUESTIONS.filter(q => q.id >= 1075).length} custom questions extracted from Master Dentistry books.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOnlyNew(!onlyNew)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer ${
                      onlyNew ? 'bg-amber-500' : 'bg-slate-800'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        onlyNew ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Duration Notice */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-center gap-3 text-amber-300 text-xs">
                  <Clock className="w-5 h-5 shrink-0 text-amber-400" />
                  <span>
                    {timeLimitMinutes === 9999 ? (
                      <span>Exam simulator will run in <strong>Untimed Study Mode</strong>. Take your time!</span>
                    ) : (
                      <span>Exam duration will be set to <strong>{timeLimitMinutes} minutes</strong> ({timeLimitMinutes * 60} seconds).</span>
                    )}
                  </span>
                </div>

                {/* Start Button */}
                <button
                  onClick={startExam}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Start Exam Now 🚀
                </button>
              </div>
            </div>
          )}

          {/* ----------------- STATE 2: ACTIVE EXAM ----------------- */}
          {examState === 'ACTIVE' && examQuestions[currentIndex] && (
            <div className="space-y-6">
              {/* Header & Timer */}
              <div className="flex items-center justify-between bg-surface/80 border border-border p-4 px-6 rounded-2xl backdrop-blur-xl">
                <div className="text-sm font-bold text-white">
                  Question {currentIndex + 1} of {examQuestions.length}
                </div>

                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-extrabold border ${
                  secondsRemaining < 300 
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' 
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(secondsRemaining)}</span>
                </div>

                <button
                  onClick={() => finishExam(false)}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 text-xs font-bold transition-all"
                >
                  Submit Exam
                </button>
              </div>

              {/* Question Card */}
              <div className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                  {examQuestions[currentIndex].question}
                </h2>

                <div className="space-y-3">
                  {examQuestions[currentIndex].options.map((opt, idx) => {
                    const currentQId = examQuestions[currentIndex].id;
                    const isSelected = userAnswers[currentQId] === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold shadow-lg shadow-amber-500/10'
                            : 'bg-white/5 border-border text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="w-7 h-7 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm md:text-base leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question Palette & Nav */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface/60 border border-border hover:bg-white/10 disabled:opacity-30 text-slate-300 font-bold text-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Number Palette */}
                <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
                  {examQuestions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isCurrent = idx === currentIndex;

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                          isCurrent
                            ? 'bg-amber-500 text-slate-950 font-black ring-2 ring-amber-400'
                            : isAnswered
                            ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/40'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                  disabled={currentIndex === examQuestions.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ----------------- STATE 3: RESULTS ----------------- */}
          {examState === 'RESULTS' && (
            <div className="space-y-6 text-center">
              <div className="bg-surface/80 border border-border rounded-3xl p-8 md:p-12 backdrop-blur-xl space-y-6 shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto text-4xl shadow-xl shadow-amber-500/20">
                  🏆
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl font-extrabold text-white">Exam Completed!</h2>
                  <p className="text-slate-400 text-sm">
                    Here is your performance summary for this exam session.
                  </p>
                </div>

                {isTimeUp && (
                  <div className="bg-rose-500/10 border border-rose-500/25 text-rose-400 rounded-2xl p-4 text-xs font-semibold max-w-md mx-auto flex items-center gap-3 text-left animate-in fade-in slide-in-from-top-3 duration-300">
                    <Clock className="w-5 h-5 shrink-0 text-rose-500" />
                    <div>
                      <p className="font-extrabold text-sm mb-0.5">⏰ Time's Up!</p>
                      <p className="text-slate-400 font-medium leading-relaxed">Your exam was automatically submitted. All unanswered questions were marked incorrect and added to your Mistakes Bank.</p>
                    </div>
                  </div>
                )}

                {/* Score Ring / Badge */}
                <div className="inline-flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md min-w-[200px]">
                  <div className="text-4xl font-black text-amber-400">{scorePct}%</div>
                  <div className="text-xs text-slate-400 mt-1">
                    {correctCount} out of {totalQuestions} Correct
                  </div>
                </div>

                {/* Status Message */}
                <div className="max-w-md mx-auto">
                  {scorePct >= 70 ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-emerald-300 text-sm font-semibold">
                      🎉 Outstanding! You passed the exam simulation threshold (70%+).
                    </div>
                  ) : (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-amber-300 text-sm font-semibold">
                      💪 Keep practicing! Re-visit Study Mode to strengthen weak topics.
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button
                    onClick={() => setExamState('SETUP')}
                    className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all"
                  >
                    Take Another Exam 🔄
                  </button>
                  <Link
                    href="/dashboard/dental/study"
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all"
                  >
                    Back to Study Mode 📚
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
