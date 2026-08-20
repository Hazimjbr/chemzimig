import { Question } from '../../../types';

// Alkenes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l2_lv3_1-2026",
    question: "When one mole of dodecane (C₁₂H₂₆) is cracked catalytically, one mole of an alkane X and two moles of ethene (C₂H₄) are produced.\nWhat is the formula of alkane X?",
    options: [
      { text: "C₈H₁₈", isCorrect: true },
      { text: "C₆H₁₄" },
      { text: "C₁₀H₂₂" },
      { text: "C₇H₁₆" }
    ],
    correctAnswer: 0,
    explanation: "* Cracking equation: C₁₂H₂₆ → X + 2C₂H₄.\n* Total carbons in 2 ethenes $= 2 \\times 2 = 4$; remaining carbons $= 12 - 4 = 8$.\n* Total hydrogens in 2 ethenes $= 2 \\times 4 = 8$; remaining hydrogens $= 26 - 8 = 18$.\n* Thus, X is octane (C₈H₁₈).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q407",
    createdAt: "2026-08-21T23:30:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv3_2-2026",
    question: "How many straight-chain alkene isomers with the molecular formula C₄H₈ exist (excluding branched isomers and cyclic structures)?",
    options: [
      { text: "2 (but-1-ene and but-2-ene)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* The two straight-chain positional isomers are:\n  1. But-1-ene: CH₂=CH–CH₂–CH₃\n  2. But-2-ene: CH₃–CH=CH–CH₃\n* (2-methylpropene is branched, and cyclobutane/methylcyclopropane are cyclic).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q408",
    createdAt: "2026-08-21T23:35:00Z"
  }
];
