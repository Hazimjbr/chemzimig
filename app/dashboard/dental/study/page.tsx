'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  BookOpen, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  Lightbulb, 
  Filter, 
  Sparkles,
  RotateCcw,
  Trophy,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ALL_DENTAL_QUESTIONS, 
  DENTAL_CATEGORIES, 
  filterDentalQuestions, 
  recordDentalAnswer, 
  toggleDentalBookmark, 
  getDentalUserStats 
} from '@/lib/dental-store';
import { DentalQuestion, DentalCategory, DentalLevel, DentalUserStats } from '@/data/dental/types';
import { useGamification } from '@/contexts/GamificationContext';

export default function DentalStudyPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialFilter = searchParams.get('filter');

  const { addXP } = useGamification();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(initialFilter === 'bookmarks');
  const [onlyMistakes, setOnlyMistakes] = useState<boolean>(initialFilter === 'mistakes');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [filteredQuestions, setFilteredQuestions] = useState<DentalQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const [userStats, setUserStats] = useState<DentalUserStats>({
    answeredCount: 0,
    correctCount: 0,
    categoryStats: {},
    bookmarkedIds: [],
    mistakeIds: []
  });

  useEffect(() => {
    setUserStats(getDentalUserStats());
  }, []);

  // Update questions whenever filters change
  useEffect(() => {
    const list = filterDentalQuestions({
      category: selectedCategory,
      level: selectedLevel,
      onlyBookmarks,
      onlyMistakes,
      searchQuery
    });
    setFilteredQuestions(list);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  }, [selectedCategory, selectedLevel, onlyBookmarks, onlyMistakes, searchQuery]);

  const currentQuestion = filteredQuestions[currentIndex];
  const isBookmarked = currentQuestion ? userStats.bookmarkedIds.includes(currentQuestion.id) : false;

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(idx);
    setIsAnswered(true);
    setShowExplanation(true);

    const isCorrect = idx === currentQuestion.correctAnswer;
    const updatedStats = recordDentalAnswer(currentQuestion.id, currentQuestion.category, isCorrect);
    setUserStats(updatedStats);

    if (isCorrect) {
      addXP(15, 'Dental Question Answered');
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleRandom = () => {
    if (filteredQuestions.length <= 1) return;
    let rand = Math.floor(Math.random() * filteredQuestions.length);
    if (rand === currentIndex) rand = (rand + 1) % filteredQuestions.length;
    setCurrentIndex(rand);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    toggleDentalBookmark(currentQuestion.id);
    setUserStats(getDentalUserStats());
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface/60 border border-border p-4 sm:px-6 rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/dental"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Dental Study Mode</span>
            </h1>
            <p className="text-xs text-slate-400">
              {filteredQuestions.length} Questions matching criteria
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 transition-all"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Random Question</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface/40 border border-border p-4 rounded-2xl backdrop-blur-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          <Filter className="w-3.5 h-3.5 text-indigo-400" />
          <span>Filters</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-900/80 border border-border rounded-xl px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="All">All Specialties (6)</option>
            {DENTAL_CATEGORIES.map(cat => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </select>

          {/* Level Dropdown */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-slate-900/80 border border-border rounded-xl px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="All">All Difficulty Levels</option>
            <option value="Level 1">Level 1 (Core)</option>
            <option value="Level 2">Level 2 (Intermediate)</option>
            <option value="Level 3">Level 3 (Advanced)</option>
          </select>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setOnlyBookmarks(!onlyBookmarks)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              onlyBookmarks 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                : 'bg-white/5 text-slate-400 border-border hover:bg-white/10'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked ({userStats.bookmarkedIds.length})</span>
          </button>

          {/* Mistakes Toggle */}
          <button
            onClick={() => setOnlyMistakes(!onlyMistakes)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              onlyMistakes 
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' 
                : 'bg-white/5 text-slate-400 border-border hover:bg-white/10'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Mistakes ({userStats.mistakeIds.length})</span>
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-surface/30 border border-border rounded-3xl p-8 backdrop-blur-xl">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white">No questions found matching your filter criteria</h3>
          <p className="text-slate-400 text-sm mt-1">Try selecting a different specialty or clearing filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedLevel('All');
              setOnlyBookmarks(false);
              setOnlyMistakes(false);
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold hover:bg-indigo-500/30 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-indigo-400">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                {currentQuestion.category}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                {currentQuestion.level}
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-sky-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-surface/80 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden"
            >
              {/* Question Text */}
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                  {currentQuestion.question}
                </h2>
                <button
                  onClick={handleToggleBookmark}
                  className={`p-2.5 rounded-xl border transition-all shrink-0 ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 text-slate-400 border-border hover:bg-white/10 hover:text-white'
                  }`}
                  title={isBookmarked ? "Remove Bookmark" : "Save Bookmark"}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                </button>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt, idx) => {
                  let stateStyle = "bg-white/5 border-border hover:bg-white/10 text-slate-200";

                  if (isAnswered) {
                    if (idx === currentQuestion.correctAnswer) {
                      stateStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10";
                    } else if (idx === selectedOption) {
                      stateStyle = "bg-rose-500/20 border-rose-500/60 text-rose-300 font-bold";
                    } else {
                      stateStyle = "bg-white/5 border-border opacity-50 text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${stateStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm md:text-base leading-snug">{opt}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {idx === currentQuestion.correctAnswer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                          {idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Callout Box */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-6 border-t border-border space-y-3"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Clinical Explanation & Textbook Reference</span>
                  </div>

                  <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-5 backdrop-blur-md text-slate-200 text-sm leading-relaxed whitespace-pre-line shadow-inner">
                    {currentQuestion.explanation || "Detailed clinical rationale provided in Master Dentistry textbook."}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface/60 border border-border hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-slate-300 font-bold text-sm transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
              Use arrow buttons to navigate
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === filteredQuestions.length - 1}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:pointer-events-none text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
