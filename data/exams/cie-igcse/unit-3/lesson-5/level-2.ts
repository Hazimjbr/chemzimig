import { Question } from '../../../types';

// Concentrations, Yield & Purity - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l5_lv2_1-2026",
    question: "What is the concentration of a solution containing 14.8 g of calcium hydroxide, Ca(OH)₂, dissolved in 500 cm³ of water?\n(Given: $M_r$ of Ca(OH)₂ = 74)",
    options: [
      { text: "0.20 mol/dm³" },
      { text: "0.40 mol/dm³", isCorrect: true },
      { text: "0.10 mol/dm³" },
      { text: "0.80 mol/dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Convert volume to dm³: $500\\text{ cm}^3 = 0.50\\text{ dm}^3$.\n* Moles of Ca(OH)₂ $= 14.8 / 74 = 0.20\\text{ mol}$.\n* Concentration $= 0.20 / 0.50 = 0.40\\text{ mol/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q51",
    createdAt: "2026-08-20T13:20:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_2-2026",
    question: "What volume of 2.0 mol/dm³ hydrochloric acid, HCl, contains 0.10 moles of the acid?",
    options: [
      { text: "50 cm³", isCorrect: true },
      { text: "100 cm³" },
      { text: "20 cm³" },
      { text: "200 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Volume in dm}^3 = \\text{Moles} / \\text{Concentration}$.\n* Volume $= 0.10 / 2.0 = 0.05\\text{ dm}^3$.\n* Convert to cm³: $0.05 \\times 1000 = 50\\text{ cm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q52",
    createdAt: "2026-08-20T13:25:00Z"
  },
  {
    id: "ex_ci_u3_l5_lv2_3-2026",
    question: "What is the concentration in g/dm³ of a sulfuric acid solution (H₂SO₄) with a concentration of 0.050 mol/dm³?\n(Given: $M_r$ of H₂SO₄ = 98)",
    options: [
      { text: "4.9 g/dm³", isCorrect: true },
      { text: "9.8 g/dm³" },
      { text: "2.45 g/dm³" },
      { text: "49.0 g/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Concentration in g/dm}^3 = \\text{Concentration in mol/dm}^3 \\times M_r$.\n* Concentration $= 0.050 \\times 98 = 4.9\\text{ g/dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q53",
    createdAt: "2026-08-20T13:30:00Z"
  }
];
