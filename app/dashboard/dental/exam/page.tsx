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
  RotateCcw,
  Sparkles,
  Award,
  BarChart2,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ALL_DENTAL_QUESTIONS, DENTAL_CATEGORIES, recordDentalAnswer } from '@/lib/dental-store';
import { DentalQuestion, DentalCategory } from '@/data/dental/types';
import { useGamification } from '@/contexts/GamificationContext';

type ExamState = 'SETUP' | 'ACTIVE' | 'RESULTS';

export default function DentalExamPage() {
  const { addXP } = useGamification();

  // Setup options
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(20);

  // Active Exam state
  const [examState, setExamState] = useState<ExamState>('SETUP');
  const [examQuestions, setExamQuestions] = useState<DentalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // questionId -> optionIdx
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  // Timer countdown effect
  useEffect(() => {
    if (examState !== 'ACTIVE' || secondsRemaining <= 0) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examState, secondsRemaining]);

  const startExam = () => {
    let pool = ALL_DENTAL_QUESTIONS;
    if (selectedCategory !== 'All') {
      pool = pool.filter(q => q.category === selectedCategory);
    }

    // Shuffle and pick
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, pool.length));

    setExamQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setSecondsRemaining(timeLimitMinutes * 60);
    setExamState('ACTIVE');
  };

  const handleSelectOption = (optionIdx: number) => {
    if (!examQuestions[currentIndex]) return;
    const qId = examQuestions[currentIndex].id;
    setUserAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const finishExam = () => {
    setExamState('RESULTS');

    // Record stats & add XP
    let correct = 0;
    examQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) correct += 1;
      if (selected !== undefined) {
        recordDentalAnswer(q.id, q.category, isCorrect);
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

          <div className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl space-y-8 shadow-2xl">
            {/* Question Count Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                1. Select Number of Questions
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[20, 50, 100].map(count => (
                  <button
                    key={count}
                    onClick={() => {
                      setQuestionCount(count);
                      setTimeLimitMinutes(count === 20 ? 20 : count === 50 ? 50 : 90);
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      questionCount === count
                        ? 'bg-amber-500/20 border-amber-500/60 text-amber-400 font-bold shadow-lg shadow-amber-500/10'
                        : 'bg-white/5 border-border text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xl font-black">{count}</div>
                    <div className="text-xs text-slate-400 mt-1">Questions</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Specialty Focus Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                2. Select Specialty Focus
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-900/80 border border-border rounded-2xl p-4 text-sm font-semibold text-white focus:outline-none focus:border-amber-500"
              >
                <option value="All">Comprehensive Exam (All 6 Specialties)</option>
                {DENTAL_CATEGORIES.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Duration Notice */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-center gap-3 text-amber-300 text-xs">
              <Clock className="w-5 h-5 shrink-0 text-amber-400" />
              <span>
                Exam duration will be set to <strong>{timeLimitMinutes} minutes</strong> ({timeLimitMinutes * 60} seconds).
              </span>
            </div>

            {/* Start Button */}
            <button
              onClick={startExam}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
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
              onClick={finishExam}
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
    </div>
  );
}
