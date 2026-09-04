// ===== Official Grade Boundaries Engine =====
// Covers Cambridge (CIE 0620 IGCSE, 9701 AS/A Level)
// and Pearson Edexcel (IAL Chemistry Units 1-6, IGCSE 4CH1)

export interface GradeThreshold {
  grade: string;
  minPercent: number;
  label: string;
  color: string;
  badgeBg: string;
  description: string;
}

export interface ExamPaperProfile {
  id: string;
  title: string;
  board: 'cambridge' | 'edexcel';
  curriculumTrack: string; // 'cie-igcse' | 'edexcel-as' | 'edexcel-a2'
  paperCode: string;
  paperName: string;
  paperType?: 'mcq' | 'structured' | 'practical';
  defaultQuestionCount: number;
  durationMinutes: number;
  totalMarks: number;
  instructions: string[];
  gradeScale: 'letters' | 'numbers'; // 'letters' for A*-U, 'numbers' for 9-1
  thresholds: GradeThreshold[];
}

export const EXAM_PROFILES: Record<string, ExamPaperProfile> = {
  // 1. Cambridge IGCSE Chemistry 0620 - Paper 2 (Extended MCQ)
  'cie-0620-p2': {
    id: 'cie-0620-p2',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/22',
    paperName: 'Paper 2 Multiple Choice (Extended)',
    paperType: 'mcq',
    defaultQuestionCount: 40,
    durationMinutes: 45,
    totalMarks: 40,
    instructions: [
      'There are forty questions on this paper. Answer all questions.',
      'For each question there are four possible answers A, B, C and D.',
      'Choose the one you consider correct and select it on the screen.',
      'Each correct answer will score one mark. A mark will not be deducted for a wrong answer.',
      'You may use a calculator and the interactive Periodic Table provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 85, label: 'Grade A* (Exceptional)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of core & extended chemistry concepts.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Excellent command of concepts and quantitative relationships.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong knowledge of definitions, reactions and trends.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Good / Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid understanding of fundamental chemistry principles.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D (Satisfactory)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory basic knowledge with some conceptual gaps.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E (Sufficient)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum pass standard. Needs intensive review.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below minimum passing threshold.' },
    ]
  },

  // 2. Cambridge IGCSE Chemistry 0620 - Paper 4 (Theory / Structured)
  'cie-0620-p4': {
    id: 'cie-0620-p4',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/42',
    paperName: 'Paper 4 Theory & Structured Written Exam',
    paperType: 'structured',
    defaultQuestionCount: 15,
    durationMinutes: 75,
    totalMarks: 50,
    instructions: [
      'Authentic Written Paper: Write your answers directly in the provided response areas.',
      'Your responses are automatically evaluated against the official Cambridge mark scheme keywords and scientific terminology.',
      'Show all calculation steps and include correct state symbols and units where appropriate.',
      'Detailed mark allocation, examiner tips, and official model answers will be provided in your final performance report.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Top Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Flawless recall, precise scientific keywords, and high mathematical accuracy.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive coverage of core chemical mechanisms and explanations.' },
      { grade: 'B',  minPercent: 58, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong conceptual understanding with minor terminology omissions.' },
      { grade: 'C',  minPercent: 48, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Satisfactory mastery of fundamental structured questions.' },
      { grade: 'D',  minPercent: 38, label: 'Grade D (Basic)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass with several key definitions omitted.' },
      { grade: 'E',  minPercent: 28, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for Paper 4.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below passing threshold.' },
    ]
  },

  // 3. Cambridge IGCSE Chemistry 0620 - Paper 6 (Alternative to Practical)
  'cie-0620-p6': {
    id: 'cie-0620-p6',
    title: 'Cambridge IGCSE Chemistry (0620)',
    board: 'cambridge',
    curriculumTrack: 'cie-igcse',
    paperCode: '0620/62',
    paperName: 'Paper 6 Alternative to Practical Written Paper',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 60,
    totalMarks: 40,
    instructions: [
      'Laboratory & Experimental Investigation Paper.',
      'Answer written questions on apparatus readings, qualitative tests (cations/anions/gases), and experimental planning.',
      'State specific laboratory apparatus, controlled variables, and observations with exact precipitate colors.',
      'Evaluated using official Cambridge Paper 6 mark schemes and investigation criteria.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 84, label: 'Grade A*', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Flawless qualitative analysis and experimental design.' },
      { grade: 'A',  minPercent: 72, label: 'Grade A', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Precise apparatus reading and rigorous control of variables.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound experimental logic and correct reagent identification.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Standard pass on laboratory techniques.' },
      { grade: 'D',  minPercent: 40, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass.' },
      { grade: 'E',  minPercent: 30, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 2. Pearson Edexcel IAL Chemistry Unit 1 - Section A (MCQs)
  'edexcel-ial-u1': {
    id: 'edexcel-ial-u1',
    title: 'Pearson Edexcel IAL Chemistry (AS)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH11/01',
    paperName: 'Unit 1: Structure, Bonding and Introduction to Organic Chemistry',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'This examination simulates Section A of Pearson Edexcel WCH11/01.',
      'Answer all questions. Select one option (A, B, C or D) for each question.',
      'Each question carries 1 mark. No negative marking is applied.',
      'Refer to the official Edexcel Periodic Table & Data Formulae provided on the toolbar.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 75, label: 'Grade A (Top AS Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'High UMS standard (80%+ UMS equivalent for AS).' },
      { grade: 'B',  minPercent: 65, label: 'Grade B (Very Good)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong command of energetics, bonding and organic mechanisms.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C (Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Competent application of chemistry principles.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for Unit 1.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable score to achieve AS qualification credit.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Insufficient score for certification.' },
    ]
  },

  // 3. Pearson Edexcel IAL Chemistry Unit 2 - Section A (MCQs)
  'edexcel-ial-u2': {
    id: 'edexcel-ial-u2',
    title: 'Pearson Edexcel IAL Chemistry (AS)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH12/01',
    paperName: 'Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols',
    defaultQuestionCount: 20,
    durationMinutes: 30,
    totalMarks: 20,
    instructions: [
      'Simulates Section A (Multiple Choice) for Pearson Edexcel Unit 2.',
      'Answer all questions. Select one response for each question.',
      'Each question carries 1 mark. Manage your time efficiently.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 75, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Top tier AS performance.' },
      { grade: 'B',  minPercent: 65, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Very good performance across redox & group chemistry.' },
      { grade: 'C',  minPercent: 55, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound foundational knowledge.' },
      { grade: 'D',  minPercent: 45, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Satisfactory grasp of main trends.' },
      { grade: 'E',  minPercent: 35, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Unclassified performance.' },
    ]
  },

  // 4. Pearson Edexcel IAL Chemistry Unit 3 - Practical Skills in Chemistry I
  'edexcel-ial-u3': {
    id: 'edexcel-ial-u3',
    title: 'Pearson Edexcel IAL Chemistry (AS Practical)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-as',
    paperCode: 'WCH13/01',
    paperName: 'Unit 3: Practical Skills in Chemistry I',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Written practical examination assessing Core Practicals 1 to 8.',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A',  minPercent: 70, label: 'Grade A', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding laboratory technique, precise observations, and accurate error analysis.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Strong experimental reasoning and correct apparatus identification.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Sound understanding of standard laboratory procedures.' },
      { grade: 'D',  minPercent: 44, label: 'Grade D', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for AS Practical Skills.' },
      { grade: 'E',  minPercent: 36, label: 'Grade E', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 5. Pearson Edexcel IAL Chemistry Unit 4 & 5 (A2)
  'edexcel-ial-a2': {
    id: 'edexcel-ial-a2',
    title: 'Pearson Edexcel IAL Chemistry (A2 Level)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH14/01',
    paperName: 'Unit 4 & 5: Kinetics, Equilibria and Advanced Organic Chemistry',
    defaultQuestionCount: 25,
    durationMinutes: 40,
    totalMarks: 25,
    instructions: [
      'Advanced A2 Mock Exam covering Units 4 and 5.',
      'Tests advanced concepts including Arrhenius kinetics, buffer systems, and transition metals.',
      'A* grade is achievable on full A2 qualification with 90%+ UMS.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 86, label: 'Grade A* (Top A2 Tier)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Mastery of advanced A2 mathematical and mechanistic chemistry.' },
      { grade: 'A',  minPercent: 74, label: 'Grade A (Excellent)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'High-level synthesis and mathematical accuracy.' },
      { grade: 'B',  minPercent: 62, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Good understanding of thermodynamic and kinetic models.' },
      { grade: 'C',  minPercent: 52, label: 'Grade C (Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core A2 pass.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Marginal pass.' },
      { grade: 'E',  minPercent: 32, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum acceptable standard for A2.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Below grading standard.' },
    ]
  },

  // 6. Pearson Edexcel IAL Chemistry Unit 6 - Practical Skills in Chemistry II
  'edexcel-ial-u6': {
    id: 'edexcel-ial-u6',
    title: 'Pearson Edexcel IAL Chemistry (A2 Practical)',
    board: 'edexcel',
    curriculumTrack: 'edexcel-a2',
    paperCode: 'WCH16/01',
    paperName: 'Unit 6: Practical Skills in Chemistry II',
    paperType: 'practical',
    defaultQuestionCount: 15,
    durationMinutes: 80,
    totalMarks: 50,
    instructions: [
      'Written practical examination assessing A2 Core Practicals 9 to 16.',
      'Answer all questions. Show working in all mathematical calculations with units.',
      'Responses are evaluated against official Pearson Edexcel A2 practical mark scheme keywords and procedures.',
      'Refer to the Periodic Table and Data Formulae provided.'
    ],
    gradeScale: 'letters',
    thresholds: [
      { grade: 'A*', minPercent: 82, label: 'Grade A* (Exceptional A2 Practical)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Outstanding mastery of advanced organic synthesis, kinetics, and transition metal analysis.' },
      { grade: 'A',  minPercent: 70, label: 'Grade A (Top A2 Tier)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Comprehensive experimental reasoning and quantitative precision.' },
      { grade: 'B',  minPercent: 60, label: 'Grade B (Very Good)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong understanding of recrystallisation, redox titrations, and spectroscopy.' },
      { grade: 'C',  minPercent: 50, label: 'Grade C (Standard Pass)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Solid core knowledge of standard laboratory techniques.' },
      { grade: 'D',  minPercent: 42, label: 'Grade D (Pass)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Basic threshold pass for A2 Practical Skills.' },
      { grade: 'E',  minPercent: 34, label: 'Grade E (Minimum Pass)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Minimum passing mark.' },
      { grade: 'U',  minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Ungraded.' },
    ]
  },

  // 5. Pearson Edexcel International GCSE (4CH1) - 9 to 1 grading
  'edexcel-igcse-4ch1': {
    id: 'edexcel-igcse-4ch1',
    title: 'Pearson Edexcel International GCSE (4CH1)',
    board: 'edexcel',
    curriculumTrack: 'cie-igcse',
    paperCode: '4CH1/1C',
    paperName: 'Chemistry Paper 1C & 2C Comprehensive Mock',
    defaultQuestionCount: 30,
    durationMinutes: 40,
    totalMarks: 30,
    instructions: [
      'Graded using the official Pearson 9–1 scale.',
      'Grade 9 and 8 represent A* standard, Grade 7 is A, Grade 4 is standard pass (C).',
      'Answer all questions and observe the strict time limit.'
    ],
    gradeScale: 'numbers',
    thresholds: [
      { grade: '9', minPercent: 88, label: 'Grade 9 (Highest Performance)', color: '#10b981', badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', description: 'Exceptional performance, beyond standard A*.' },
      { grade: '8', minPercent: 78, label: 'Grade 8 (High A*)', color: '#06b6d4', badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30', description: 'Equal to solid A* performance.' },
      { grade: '7', minPercent: 68, label: 'Grade 7 (Grade A)', color: '#3b82f6', badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', description: 'Strong command of syllabus, equivalent to Grade A.' },
      { grade: '6', minPercent: 58, label: 'Grade 6 (High Grade B)', color: '#8b5cf6', badgeBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30', description: 'Good performance across quantitative and qualitative chemistry.' },
      { grade: '5', minPercent: 48, label: 'Grade 5 (Strong Pass / High C)', color: '#f59e0b', badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30', description: 'Recognised as a strong pass.' },
      { grade: '4', minPercent: 40, label: 'Grade 4 (Standard Pass / Grade C)', color: '#f97316', badgeBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30', description: 'Standard benchmark pass mark.' },
      { grade: '3', minPercent: 30, label: 'Grade 3 (Grade D equivalent)', color: '#eab308', badgeBg: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', description: 'Below standard pass.' },
      { grade: 'U', minPercent: 0,  label: 'Grade U (Ungraded)', color: '#ef4444', badgeBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30', description: 'Did not meet minimum threshold.' },
    ]
  }
};

/**
 * Calculates the exact grade, percentage, and distance to next higher grade
 */
export function calculateGrade(score: number, total: number, profileId: string): {
  percentage: number;
  grade: string;
  threshold: GradeThreshold;
  nextThreshold?: {
    grade: string;
    marksNeeded: number;
    percentNeeded: number;
  };
  isTopGrade: boolean;
} {
  const profile = EXAM_PROFILES[profileId] || EXAM_PROFILES['cie-0620-p2'];
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // Sorted from highest minPercent to lowest
  const sortedThresholds = [...profile.thresholds].sort((a, b) => b.minPercent - a.minPercent);

  let awardedThreshold = sortedThresholds[sortedThresholds.length - 1]; // default to lowest (U)
  let awardedIndex = sortedThresholds.length - 1;

  for (let i = 0; i < sortedThresholds.length; i++) {
    if (percentage >= sortedThresholds[i].minPercent) {
      awardedThreshold = sortedThresholds[i];
      awardedIndex = i;
      break;
    }
  }

  const isTopGrade = awardedIndex === 0;
  let nextThreshold: { grade: string; marksNeeded: number; percentNeeded: number } | undefined = undefined;

  if (!isTopGrade && awardedIndex > 0) {
    const nextTarget = sortedThresholds[awardedIndex - 1];
    const targetMarks = Math.ceil((nextTarget.minPercent / 100) * total);
    const marksNeeded = Math.max(1, targetMarks - score);
    const percentNeeded = nextTarget.minPercent - percentage;
    nextThreshold = {
      grade: nextTarget.grade,
      marksNeeded,
      percentNeeded
    };
  }

  return {
    percentage,
    grade: awardedThreshold.grade,
    threshold: awardedThreshold,
    nextThreshold,
    isTopGrade
  };
}
