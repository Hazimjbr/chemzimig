import { Question } from '../../../types';

// Gas Volumes - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv1_1-2026",
    question: "What volume is occupied by 2.0 moles of carbon dioxide gas at room temperature and pressure (r.t.p.)?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "12 dm³" },
      { text: "24 dm³" },
      { text: "48 dm³", isCorrect: true },
      { text: "96 dm³" }
    ],
    correctAnswer: 2,
    explanation: "* Formula: $\\text{Volume of gas} = \\text{Moles} \\times 24\\text{ dm}^3$.\n* Volume $= 2.0 \\times 24 = 48\\text{ dm}^3$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q39",
    createdAt: "2026-08-20T12:20:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_2-2026",
    question: "How many moles of oxygen molecules are present in $6\\text{ dm}^3$ of oxygen gas at r.t.p.?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "0.25 mol", isCorrect: true },
      { text: "4.0 mol" },
      { text: "0.50 mol" },
      { text: "1.0 mol" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Moles} = \\text{Volume of gas} / 24\\text{ dm}^3$.\n* Moles $= 6 / 24 = 0.25\\text{ mol}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q40",
    createdAt: "2026-08-20T12:25:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv1_3-2026",
    question: "What volume is occupied by 14 g of nitrogen gas, N₂, at r.t.p.?\n(Given: $A_r$ of N = 14; Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "24 dm³" },
      { text: "12 dm³", isCorrect: true },
      { text: "6 dm³" },
      { text: "48 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of N₂ gas $= 14 / 28 = 0.50\\text{ mol}$ (since $M_r$ of N₂ $= 28$).\n* Volume $= 0.50 \\times 24 = 12\\text{ dm}^3$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q41",
    createdAt: "2026-08-20T12:30:00Z"
  }
];
