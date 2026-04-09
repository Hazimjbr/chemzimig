// ===== ChemZim Exam Types =====
// Adapted for Cambridge IGCSE & A-Level Chemistry

/** Curriculum level */
export type CurriculumLevel = "igcse" | "as-level" | "a-level";

/** Paper type */
export type PaperType = "mcq" | "structured" | "practical";

/** Question difficulty */
export type DifficultyLevel = 1 | 2 | 3;

/** Game modes */
export type GameMode = "practice" | "timed" | "challenge";

/** IGCSE topic tags */
export type IGCSETopicTag =
  | "states-of-matter"
  | "atoms-elements"
  | "stoichiometry"
  | "electrochemistry"
  | "chemical-energetics"
  | "chemical-reactions"
  | "acids-bases-salts"
  | "periodic-table"
  | "metals"
  | "chemistry-environment"
  | "organic-chemistry"
  | "experimental-techniques";

/** A single option in a question */
export interface QuestionOption {
  text: string;
  isCorrect?: boolean;
}

/** A question in the exam bank */
export interface Question {
  id: string;
  /** The question text (supports KaTeX with $ delimiters) */
  question: string;
  /** Array of options */
  options: QuestionOption[];
  /** Index of the correct answer (0-based) */
  correctAnswer: number;
  /** Detailed explanation shown after answering */
  explanation: string;
  /** Difficulty level: 1 = Easy, 2 = Medium, 3 = Hard */
  level: DifficultyLevel;
  /** IGCSE topic tag */
  topic: IGCSETopicTag;
  /** Curriculum level */
  curriculum: CurriculumLevel;
  /** Paper type (default: mcq) */
  paperType?: PaperType;
  /** Source reference (e.g. "0620/22/M/J/23 Q15") */
  source?: string;
  /** Creation date */
  createdAt: string;
  /** Optional HTML table support */
  tableHtml?: string;
}

/** Exam configuration chosen by the user */
export interface ExamConfig {
  /** Selected topics */
  topics: IGCSETopicTag[];
  /** Difficulty level */
  level: DifficultyLevel;
  /** Number of questions */
  questionCount: number;
  /** Game mode */
  mode: GameMode;
  /** Time limit in minutes (for timed mode) */
  timeLimit?: number;
  /** Curriculum level */
  curriculum: CurriculumLevel;
}

/** A completed exam result */
export interface ExamResult {
  /** Unique result ID */
  id: string;
  /** Exam configuration */
  config: ExamConfig;
  /** Array of answered question IDs */
  answeredQuestions: AnsweredQuestion[];
  /** Total score (correct answers) */
  score: number;
  /** Total questions */
  total: number;
  /** Percentage score */
  percentage: number;
  /** XP earned */
  xpEarned: number;
  /** Time taken in seconds */
  timeTaken: number;
  /** Completion date */
  completedAt: string;
}

/** A single answered question */
export interface AnsweredQuestion {
  /** Question ID */
  questionId: string;
  /** Selected answer index */
  selectedAnswer: number;
  /** Whether the answer is correct */
  isCorrect: boolean;
  /** Time spent on this question (seconds) */
  timeSpent: number;
}

/** Level titles for gamification */
export const LEVEL_TITLES: Record<number, string> = {
  1: "Lab Assistant",
  2: "Lab Technician",
  3: "Chemistry Student",
  4: "Chemist",
  5: "Senior Chemist",
  6: "Research Chemist",
  7: "Research Fellow",
  8: "Associate Professor",
  9: "Professor",
  10: "Nobel Laureate",
};

/** XP requirements per level */
export const XP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
  5: 1000,
  6: 1500,
  7: 2200,
  8: 3000,
  9: 4000,
  10: 5500,
};

/** XP rewards per question */
export const XP_REWARDS = {
  correctAnswer: 10,
  perfectExam: 50,
  streakBonus: 5,
  firstTry: 3,
  speedBonus: 2,
} as const;

/** Difficulty labels */
export const DIFFICULTY_LABELS: Record<DifficultyLevel, string> = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
};

/** Mode labels */
export const MODE_LABELS: Record<GameMode, string> = {
  practice: "Practice Mode",
  timed: "Timed Exam",
  challenge: "Challenge Mode",
};
