import { allCurricula, CurriculumLevel, Topic } from '@/data/curriculum';
import { questionBank, Question } from '@/data/exams';
import { SolvedQuestionStatus, MistakeItem } from '@/contexts/GamificationContext';

export interface TopicDiagnostic {
  curriculumId: string;
  unitNumber: number;
  unitTitle: string;
  topicId: string;
  totalAttempts: number;
  correctAttempts: number;
  mistakesCount: number;
  accuracyPercent: number;
  weaknessPercent: number; // 100 - accuracy
  status: 'mastered' | 'proficient' | 'moderate' | 'critical' | 'unassessed';
  recommendedLessonNum: number;
  recommendedLessonTitle: string;
  subtopics: string[];
}

export interface StudentDiagnosticReport {
  overallAccuracy: number;
  readinessIndex: number;
  totalAttempts: number;
  totalMistakes: number;
  masteredUnitsCount: number;
  criticalUnitsCount: number;
  diagnostics: TopicDiagnostic[];
  topWeakSpots: TopicDiagnostic[];
  activeCurriculum: CurriculumLevel;
}

// Cambridge canonical unit mapping fallback
const CAMBRIDGE_TOPIC_MAP: Record<string, number> = {
  'states-of-matter': 1,
  'atoms-elements': 2,
  'stoichiometry': 3,
  'electrochemistry': 4,
  'chemical-energetics': 5,
  'chemical-reactions': 6,
  'acids-bases-salts': 7,
  'periodic-table': 8,
  'metals': 9,
  'chemistry-environment': 10,
  'organic-chemistry': 11,
  'experimental-techniques': 12
};

// Fast lookup map for all questions in questionBank
let questionCache: Map<string, Question> | null = null;
function getQuestionMap(): Map<string, Question> {
  if (!questionCache) {
    questionCache = new Map();
    questionBank.forEach(q => {
      questionCache!.set(q.id, q);
    });
  }
  return questionCache;
}

/**
 * Resolves the unit number and track for any given question ID or data
 */
export function resolveQuestionUnit(questionId: string): { track: string; unitNumber: number; lessonNum?: number } | null {
  // 1. Direct cache check from questionBank
  const map = getQuestionMap();
  const q = map.get(questionId);

  if (q) {
    let track = (q.curriculum || 'cie-igcse').toLowerCase();
    if (track === 'igcse') track = 'cie-igcse';
    if (track === 'a-level') track = 'cie-alevel';
    if (track === 'as-level') track = 'cie-as';

    let unitNumber: number | undefined = undefined;

    // Check if topic is a direct edexcel unit
    const topicStr = (q.topic || '').toLowerCase();
    const matchEdxUnit = topicStr.match(/edexcel-unit-(\d+)/);
    if (matchEdxUnit) {
      unitNumber = parseInt(matchEdxUnit[1], 10);
      if (track === 'edexcel-alevel') {
        track = unitNumber >= 4 ? 'edexcel-a2' : 'edexcel-as';
      }
    } else if (CAMBRIDGE_TOPIC_MAP[topicStr]) {
      unitNumber = CAMBRIDGE_TOPIC_MAP[topicStr];
    }

    // Try regex on question ID if not resolved
    if (!unitNumber) {
      const matchId = questionId.match(/_u(\d+)_/i) || questionId.match(/-(?:u|unit-)(\d+)/i);
      if (matchId) {
        unitNumber = parseInt(matchId[1], 10);
      }
    }

    if (unitNumber) {
      return { track, unitNumber, lessonNum: q.lessonNum };
    }
  }

  // 2. Fallback heuristic pattern matching on question ID
  // e.g. "ex_ci_u2_l3_lv1_1-2026" or "cie-igcse-unit-3" or "edexcel-a2-unit-5"
  const mModular = questionId.match(/^ex_([a-z]{2})_u(\d+)_l(\d+)/i);
  if (mModular) {
    const code = mModular[1].toLowerCase();
    const unitNumber = parseInt(mModular[2], 10);
    const lessonNum = parseInt(mModular[3], 10);
    let track = 'cie-igcse';
    if (code === 'ed') {
      track = unitNumber >= 4 ? 'edexcel-a2' : 'edexcel-as';
    } else if (code === 'ca') {
      track = 'cie-alevel';
    }
    return { track, unitNumber, lessonNum };
  }

  const matchGeneral = questionId.match(/^([a-z0-9\-]+?)-(?:u|unit-)(\d+)/i);
  if (matchGeneral) {
    const track = matchGeneral[1].toLowerCase();
    const unitNumber = parseInt(matchGeneral[2], 10);
    return { track, unitNumber };
  }

  // Check som, atom, stoich prefixes
  if (questionId.startsWith('q_som_')) return { track: 'cie-igcse', unitNumber: 1 };
  if (questionId.startsWith('q_atom_') || questionId.startsWith('q_elem_')) return { track: 'cie-igcse', unitNumber: 2 };
  if (questionId.startsWith('q_stoich_') || questionId.startsWith('q_mole_')) return { track: 'cie-igcse', unitNumber: 3 };
  if (questionId.startsWith('q_elec_')) return { track: 'cie-igcse', unitNumber: 4 };
  if (questionId.startsWith('q_ener_')) return { track: 'cie-igcse', unitNumber: 5 };
  if (questionId.startsWith('q_rate_') || questionId.startsWith('q_react_')) return { track: 'cie-igcse', unitNumber: 6 };
  if (questionId.startsWith('q_acid_')) return { track: 'cie-igcse', unitNumber: 7 };
  if (questionId.startsWith('q_ptable_')) return { track: 'cie-igcse', unitNumber: 8 };
  if (questionId.startsWith('q_metal_')) return { track: 'cie-igcse', unitNumber: 9 };
  if (questionId.startsWith('q_env_')) return { track: 'cie-igcse', unitNumber: 10 };
  if (questionId.startsWith('q_org_')) return { track: 'cie-igcse', unitNumber: 11 };
  if (questionId.startsWith('q_exp_')) return { track: 'cie-igcse', unitNumber: 12 };

  return null;
}

/**
 * Analyzes student question history and produces a structured diagnostic report
 */
export function analyzeStudentDiagnostics(
  solved: Record<string, SolvedQuestionStatus> = {},
  mistakes: MistakeItem[] = [],
  userTrack: string = 'cie-igcse'
): StudentDiagnosticReport {
  // Normalize student curriculum track
  let track = userTrack.toLowerCase().trim();
  if (track === 'igcse') track = 'cie-igcse';
  if (track === 'as level' || track === 'as-level') track = 'cie-as';
  if (track === 'a2 level' || track === 'a level' || track === 'a-level') track = 'cie-alevel';
  if (track === 'edexcel-alevel') track = 'edexcel-as';

  const activeCurriculum = allCurricula.find(c => c.id.toLowerCase().startsWith(track)) || allCurricula[0];

  // Map each unit in the active curriculum
  const unitStats: Record<number, {
    totalAttempts: number;
    correctAttempts: number;
    mistakesCount: number;
    mistakeLessons: number[];
  }> = {};

  activeCurriculum.topics.forEach(t => {
    unitStats[t.number] = {
      totalAttempts: 0,
      correctAttempts: 0,
      mistakesCount: 0,
      mistakeLessons: []
    };
  });

  // Aggregate from solvedQuestions
  Object.entries(solved).forEach(([qId, data]) => {
    const resolved = resolveQuestionUnit(qId);
    if (!resolved) return;

    // Check if belongs to current curriculum (or general track matching)
    if (unitStats[resolved.unitNumber]) {
      unitStats[resolved.unitNumber].totalAttempts += (data.attemptsCount || 1);
      if (data.isCorrect) {
        unitStats[resolved.unitNumber].correctAttempts += 1;
      } else {
        unitStats[resolved.unitNumber].mistakesCount += 1;
        if (resolved.lessonNum) {
          unitStats[resolved.unitNumber].mistakeLessons.push(resolved.lessonNum);
        }
      }
    }
  });

  // Augment with mistakes in Leitner inbox
  mistakes.forEach(m => {
    const resolved = resolveQuestionUnit(m.questionId);
    if (!resolved) return;

    if (unitStats[resolved.unitNumber]) {
      if (unitStats[resolved.unitNumber].mistakesCount === 0) {
        unitStats[resolved.unitNumber].mistakesCount += m.wrongCount || 1;
        unitStats[resolved.unitNumber].totalAttempts = Math.max(
          unitStats[resolved.unitNumber].totalAttempts,
          unitStats[resolved.unitNumber].mistakesCount
        );
      }
      if (resolved.lessonNum && !unitStats[resolved.unitNumber].mistakeLessons.includes(resolved.lessonNum)) {
        unitStats[resolved.unitNumber].mistakeLessons.push(resolved.lessonNum);
      }
    }
  });

  let grandTotalAttempts = 0;
  let grandTotalCorrect = 0;
  let grandTotalMistakes = 0;

  const diagnostics: TopicDiagnostic[] = activeCurriculum.topics.map(topic => {
    const stat = unitStats[topic.number] || {
      totalAttempts: 0,
      correctAttempts: 0,
      mistakesCount: 0,
      mistakeLessons: []
    };

    grandTotalAttempts += stat.totalAttempts;
    grandTotalCorrect += stat.correctAttempts;
    grandTotalMistakes += stat.mistakesCount;

    const hasAttempts = stat.totalAttempts > 0;
    const accuracy = hasAttempts ? Math.round((stat.correctAttempts / stat.totalAttempts) * 100) : 0;
    const weakness = hasAttempts ? Math.max(0, 100 - accuracy) : 0;

    let status: TopicDiagnostic['status'] = 'unassessed';
    if (hasAttempts) {
      if (accuracy >= 85 && stat.mistakesCount === 0) {
        status = 'mastered';
      } else if (accuracy >= 70) {
        status = 'proficient';
      } else if (accuracy >= 50) {
        status = 'moderate';
      } else {
        status = 'critical';
      }
    }

    const subtopics = topic.subtopics || [];
    // Identify most needed lesson for review
    let recLessonNum = 1;
    if (stat.mistakeLessons.length > 0) {
      // most frequent mistake lesson
      recLessonNum = stat.mistakeLessons[0];
    } else if (stat.mistakesCount > 0) {
      recLessonNum = Math.min(stat.mistakesCount + 1, Math.max(1, subtopics.length));
    }
    const recLessonTitle = subtopics[recLessonNum - 1] || 'Core Concepts & Principles';

    return {
      curriculumId: activeCurriculum.id,
      unitNumber: topic.number,
      unitTitle: topic.title,
      topicId: topic.id,
      totalAttempts: stat.totalAttempts,
      correctAttempts: stat.correctAttempts,
      mistakesCount: stat.mistakesCount,
      accuracyPercent: accuracy,
      weaknessPercent: weakness,
      status,
      recommendedLessonNum: recLessonNum,
      recommendedLessonTitle: recLessonTitle,
      subtopics
    };
  });

  // Top weak spots sorted by weakness percent descending
  const topWeakSpots = diagnostics
    .filter(d => d.totalAttempts > 0 && d.weaknessPercent > 0)
    .sort((a, b) => b.weaknessPercent - a.weaknessPercent);

  const overallAccuracy = grandTotalAttempts > 0 ? Math.round((grandTotalCorrect / grandTotalAttempts) * 100) : 0;
  
  // Readiness index weights overall accuracy and coverage of syllabus topics
  const assessedCount = diagnostics.filter(d => d.totalAttempts > 0).length;
  const coverageRatio = diagnostics.length > 0 ? (assessedCount / diagnostics.length) : 0;
  const readinessIndex = grandTotalAttempts > 0 
    ? Math.round((overallAccuracy * 0.7) + (coverageRatio * 100 * 0.3))
    : 0;

  const masteredUnitsCount = diagnostics.filter(d => d.status === 'mastered').length;
  const criticalUnitsCount = diagnostics.filter(d => d.status === 'critical').length;

  return {
    overallAccuracy,
    readinessIndex,
    totalAttempts: grandTotalAttempts,
    totalMistakes: grandTotalMistakes,
    masteredUnitsCount,
    criticalUnitsCount,
    diagnostics,
    topWeakSpots,
    activeCurriculum
  };
}
