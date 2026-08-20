import { Question } from '../../../types';

// Formulae - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l1_lv2_1-2026",
    question: "A compound has the empirical formula CH₂ and a relative molecular mass ($M_r$) of 84.\nWhat is the molecular formula of this compound?\n(Given: $A_r$ of C = 12, H = 1)",
    options: [
      { text: "CH₂" },
      { text: "C₃H₆" },
      { text: "C₅H₁₀" },
      { text: "C₆H₁₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* The empirical formula mass of CH₂ is $12 + (2 \\times 1) = 14$.\n* Divide the relative molecular mass by the empirical mass: $84 / 14 = 6$.\n* Multiply the subscripts in the empirical formula by 6: $\\text{C}_{(1 \\times 6)}\\text{H}_{(2 \\times 6)} = \\text{C}_6\\text{H}_{12}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q14",
    createdAt: "2026-08-20T10:15:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_2-2026",
    question: "An oxide of phosphorus contains 43.6% phosphorus by mass.\nWhat is the empirical formula of this phosphorus oxide?\n(Given: $A_r$ of P = 31, O = 16)",
    options: [
      { text: "PO" },
      { text: "PO₂" },
      { text: "P₂O₃" },
      { text: "P₂O₅", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Percentage of oxygen by mass $= 100 - 43.6 = 56.4\\%$.\n* Calculate moles of each: Moles of P $= 43.6 / 31 = 1.41$; Moles of O $= 56.4 / 16 = 3.525$.\n* Divide by the smallest mole value (1.41): P $= 1.41 / 1.41 = 1$; O $= 3.525 / 1.41 = 2.5$.\n* Multiply by 2 to get whole numbers: P = 2, O = 5. Therefore, the empirical formula is P₂O₅.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q15",
    createdAt: "2026-08-20T10:20:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_3-2026",
    question: "Which formula represents a compound containing the highest percentage of nitrogen by mass?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16)",
    options: [
      { text: "NH₃", isCorrect: true },
      { text: "NO" },
      { text: "NO₂" },
      { text: "NH₄NO₃" }
    ],
    correctAnswer: 0,
    explanation: "* NH₃: Percentage of N $= (14 / 17) \\times 100\\% = 82.4\\%$.\n* NO: Percentage of N $= (14 / 30) \\times 100\\% = 46.7\\%$.\n* NO₂: Percentage of N $= (14 / 46) \\times 100\\% = 30.4\\%$.\n* NH₄NO₃: Percentage of N $= (28 / 80) \\times 100\\% = 35.0\\%$.\n* Ammonia (NH₃) has the highest percentage of nitrogen by mass.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q16",
    createdAt: "2026-08-20T10:25:00Z"
  },
  {
    id: "ex_ci_u3_l1_lv2_4-2026",
    question: "What is the empirical formula of a compound that consists of 27.3% carbon and 72.7% oxygen by mass?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "CO" },
      { text: "CO₂", isCorrect: true },
      { text: "C₂O" },
      { text: "CO₃" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate moles of each element: Moles of C $= 27.3 / 12 = 2.275$; Moles of O $= 72.7 / 16 = 4.544$.\n* Find the simplest ratio by dividing by the smallest value (2.275): C $= 2.275 / 2.275 = 1$; O $= 4.544 / 2.275 = 2$.\n* The simplest whole number ratio is 1 C : 2 O. Therefore, the empirical formula is CO₂.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q17",
    createdAt: "2026-08-20T10:30:00Z"
  }
];
