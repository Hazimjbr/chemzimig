import { Question } from '../../../types';

// Formulae - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l1_lv1_1-2026",
    question: "What is the relative formula mass ($M_r$) of carbon dioxide, CO₂?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "28" },
      { text: "44", isCorrect: true },
      { text: "32" },
      { text: "56" }
    ],
    correctAnswer: 1,
    explanation: "* The formula of carbon dioxide is CO₂.\n* One molecule contains 1 carbon atom and 2 oxygen atoms.\n* $M_r = 12 + (2 \\times 16) = 44$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q11",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_2-2026",
    question: "Which of the following compounds has the highest relative formula mass ($M_r$)?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32)",
    options: [
      { text: "Water, H₂O" },
      { text: "Ammonia, NH₃" },
      { text: "Sodium hydroxide, NaOH" },
      { text: "Sulfur dioxide, SO₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* $M_r$ of H₂O $= (2 \\times 1) + 16 = 18$.\n* $M_r$ of NH₃ $= 14 + (3 \\times 1) = 17$.\n* $M_r$ of NaOH $= 23 + 16 + 1 = 40$.\n* $M_r$ of SO₂ $= 32 + (2 \\times 16) = 64$.\n* Therefore, SO₂ has the highest relative formula mass.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q12",
    createdAt: "2026-08-20T10:05:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv1_3-2026",
    question: "What is the relative formula mass ($M_r$) of ammonium sulfate, (NH₄)₂SO₄?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16, S = 32)",
    options: [
      { text: "114" },
      { text: "132", isCorrect: true },
      { text: "96" },
      { text: "128" }
    ],
    correctAnswer: 1,
    explanation: "* The formula (NH₄)₂SO₄ contains 2 nitrogen atoms, 8 hydrogen atoms, 1 sulfur atom, and 4 oxygen atoms.\n* $M_r = (2 \\times 14) + (8 \\times 1) + 32 + (4 \\times 16)$.\n* $M_r = 28 + 8 + 32 + 64 = 132$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q13",
    createdAt: "2026-08-20T10:10:00Z"
  }
];
