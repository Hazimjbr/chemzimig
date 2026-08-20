import { Question } from '../../../types';

// Alkanes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l1_lv3_1-2026",
    question: "A 20 cm³ sample of gaseous propane (C₃H₈) is completely burned in 150 cm³ of oxygen gas. After cooling to room temperature, the remaining gas mixture is shaken with excess aqueous sodium hydroxide.\nWhat is the final volume of gas remaining?\n(All gas volumes measured at r.t.p.; C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l))",
    options: [
      { text: "50 cm³", isCorrect: true },
      { text: "60 cm³" },
      { text: "110 cm³" },
      { text: "20 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles/volume ratio: 1 volume C₃H₈ reacts with 5 volumes O₂ to produce 3 volumes CO₂.\n* 20 cm³ C₃H₈ reacts with $20 \\times 5 = 100\\text{ cm}^3$ of O₂, leaving $150 - 100 = 50\\text{ cm}^3$ of unreacted O₂.\n* Volume of CO₂ produced $= 20 \\times 3 = 60\\text{ cm}^3$.\n* Aqueous NaOH absorbs all acidic CO₂ (60 cm³), leaving only 50 cm³ of excess O₂.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q399",
    createdAt: "2026-08-21T22:30:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv3_2-2026",
    question: "When methane reacts with an excess of chlorine gas in the presence of intense ultraviolet light over a prolonged period, what is the ultimate fully substituted organic product formed?",
    options: [
      { text: "Tetrachloromethane (CCl₄)", isCorrect: true },
      { text: "Chloromethane (CH₃Cl)" },
      { text: "Trichloromethane / Chloroform (CHCl₃)" },
      { text: "Hexachloroethane (C₂Cl₆)" }
    ],
    correctAnswer: 0,
    explanation: "* Excess chlorine drives successive substitution reactions:\n  1. CH₄ + Cl₂ → CH₃Cl + HCl\n  2. CH₃Cl + Cl₂ → CH₂Cl₂ + HCl\n  3. CH₂Cl₂ + Cl₂ → CHCl₃ + HCl\n  4. CHCl₃ + Cl₂ → CCl₄ + HCl (fully substituted tetrachloromethane).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q400",
    createdAt: "2026-08-21T22:35:00Z"
  }
];
