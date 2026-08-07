import dentalQuestionsRaw from '@/data/dental/questions.json';
import { DentalQuestion, DentalCategory, DentalLevel, DentalUserStats } from '@/data/dental/types';

export const ALL_DENTAL_QUESTIONS: DentalQuestion[] = dentalQuestionsRaw as DentalQuestion[];

export const DENTAL_CATEGORIES: { name: DentalCategory; icon: string; description: string; color: string }[] = [
  { 
    name: 'General Dentistry', 
    icon: '🦷', 
    description: 'Core concepts, dental materials, epidemiology & ethics',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400'
  },
  { 
    name: 'Restorative & Endodontics', 
    icon: '🔬', 
    description: 'Operative dentistry, root canal treatment, pulp therapy',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
  },
  { 
    name: 'Oral Surgery & Pathology', 
    icon: '⚕️', 
    description: 'Exodontia, oral lesions, cysts, tumours & trauma',
    color: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400'
  },
  { 
    name: 'Prosthodontics & Radiology', 
    icon: '👑', 
    description: 'Crowns, bridges, dentures & radiographic interpretation',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400'
  },
  { 
    name: 'Periodontics', 
    icon: '🩺', 
    description: 'Gingival diseases, periodontal surgery, scaling & root planing',
    color: 'from-purple-500/20 to-violet-500/20 border-purple-500/30 text-purple-400'
  },
  { 
    name: 'Pharmacology & General Medicine', 
    icon: '💊', 
    description: 'Local anaesthesia, systemic conditions, drugs & emergencies',
    color: 'from-cyan-500/20 to-sky-500/20 border-cyan-500/30 text-cyan-400'
  }
];

const LOCAL_STORAGE_KEY = 'chemzim_dental_user_stats_v1';

export function getDentalUserStats(): DentalUserStats {
  if (typeof window === 'undefined') {
    return { answeredCount: 0, correctCount: 0, categoryStats: {}, bookmarkedIds: [], mistakeIds: [] };
  }
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return { answeredCount: 0, correctCount: 0, categoryStats: {}, bookmarkedIds: [], mistakeIds: [] };
    return JSON.parse(raw);
  } catch {
    return { answeredCount: 0, correctCount: 0, categoryStats: {}, bookmarkedIds: [], mistakeIds: [] };
  }
}

export function saveDentalUserStats(stats: DentalUserStats) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save dental stats', e);
  }
}

export function recordDentalAnswer(questionId: number, category: string, isCorrect: boolean) {
  const stats = getDentalUserStats();
  
  if (!stats.categoryStats[category]) {
    stats.categoryStats[category] = { answered: 0, correct: 0 };
  }
  
  stats.answeredCount += 1;
  stats.categoryStats[category].answered += 1;

  if (isCorrect) {
    stats.correctCount += 1;
    stats.categoryStats[category].correct += 1;
    stats.mistakeIds = stats.mistakeIds.filter(id => id !== questionId);
  } else {
    if (!stats.mistakeIds.includes(questionId)) {
      stats.mistakeIds.push(questionId);
    }
  }

  saveDentalUserStats(stats);
  return stats;
}

export function toggleDentalBookmark(questionId: number): boolean {
  const stats = getDentalUserStats();
  const index = stats.bookmarkedIds.indexOf(questionId);
  let isBookmarked = false;

  if (index >= 0) {
    stats.bookmarkedIds.splice(index, 1);
    isBookmarked = false;
  } else {
    stats.bookmarkedIds.push(questionId);
    isBookmarked = true;
  }

  saveDentalUserStats(stats);
  return isBookmarked;
}

export function filterDentalQuestions(options?: {
  category?: string;
  level?: string;
  onlyBookmarks?: boolean;
  onlyMistakes?: boolean;
  searchQuery?: string;
}): DentalQuestion[] {
  let list = ALL_DENTAL_QUESTIONS;
  const stats = getDentalUserStats();

  if (options?.category && options.category !== 'All') {
    list = list.filter(q => q.category === options.category);
  }

  if (options?.level && options.level !== 'All') {
    list = list.filter(q => q.level === options.level);
  }

  if (options?.onlyBookmarks) {
    list = list.filter(q => stats.bookmarkedIds.includes(q.id));
  }

  if (options?.onlyMistakes) {
    list = list.filter(q => stats.mistakeIds.includes(q.id));
  }

  if (options?.searchQuery) {
    const query = options.searchQuery.toLowerCase();
    list = list.filter(q => 
      q.question.toLowerCase().includes(query) || 
      q.explanation.toLowerCase().includes(query)
    );
  }

  return list;
}
