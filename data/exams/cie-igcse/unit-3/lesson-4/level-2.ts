import { Question } from '../../../types';

// Gas Volumes - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv2_1-2026",
    question: "Methane burns completely in oxygen: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)\nWhat volume of oxygen gas at r.t.p. is required to react completely with 12 dm³ of methane?\n(All volumes measured at r.t.p.)",
    options: [
      { text: "12 dm³" },
      { text: "24 dm³", isCorrect: true },
      { text: "6 dm³" },
      { text: "48 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* By Avogadro's law, equal volumes of gases contain equal number of moles under identical conditions.\n* Molar ratio of CH₄ to O₂ is 1:2.\n* Volume of O₂ required $= 2 \\times \\text{Volume of CH}_4 = 2 \\times 12 = 24\\text{ dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q42",
    createdAt: "2026-08-20T12:35:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_2-2026",
    question: "What volume of carbon dioxide gas at r.t.p. is produced when 10 g of calcium carbonate decomposes completely?\nCaCO₃(s) → CaO(s) + CO₂(g)\n(Given: $M_r$ of CaCO₃ = 100; Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "2.4 dm³", isCorrect: true },
      { text: "24 dm³" },
      { text: "1.2 dm³" },
      { text: "4.8 dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CaCO₃ $= 10 / 100 = 0.10\\text{ mol}$.\n* According to the equation, 1 mole of CaCO₃ produces 1 mole of CO₂ gas.\n* Moles of CO₂ produced $= 0.10\\text{ mol}$.\n* Volume of CO₂ gas $= 0.10 \\times 24 = 2.4\\text{ dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q43",
    createdAt: "2026-08-20T12:40:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv2_3-2026",
    question: "When 50 cm³ of ammonia is reacted with 50 cm³ of hydrogen chloride gas, ammonium chloride is formed:\nNH₃(g) + HCl(g) → NH₄Cl(s)\nWhat is the volume of gas remaining after the reaction is complete?\n(All gas volumes measured at r.t.p.)",
    options: [
      { text: "0 cm³", isCorrect: true },
      { text: "50 cm³" },
      { text: "100 cm³" },
      { text: "25 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* NH₃(g) and HCl(g) react in a 1:1 molar ratio.\n* Since both gases are added in equal volumes (50 cm³ each), they react completely with no excess of either gas.\n* Ammonium chloride (NH₄Cl) is a solid, so it does not occupy gas volume.\n* Therefore, the remaining gas volume is 0 cm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q44",
    createdAt: "2026-08-20T12:45:00Z"
  }
];
