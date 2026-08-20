import { Question } from '../../../types';

// Reacting Masses - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv1_1-2026",
    question: "Iron reacts with sulfur to form iron(II) sulfide: Fe + S → FeS\nWhat mass of iron(II) sulfide is produced when 5.6 g of iron reacts completely with excess sulfur?\n(Given: $A_r$ of Fe = 56, S = 32)",
    options: [
      { text: "5.6 g" },
      { text: "8.8 g", isCorrect: true },
      { text: "3.2 g" },
      { text: "11.2 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Fe $= 5.6 / 56 = 0.10\\text{ mol}$.\n* According to the equation, 1 mole of Fe produces 1 mole of FeS.\n* Moles of FeS $= 0.10\\text{ mol}$.\n* Mass of FeS $= 0.10 \\times (56 + 32) = 0.10 \\times 88 = 8.8\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q30",
    createdAt: "2026-08-20T11:35:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_2-2026",
    question: "Carbon burns in oxygen to form carbon dioxide: C + O₂ → CO₂\nWhat mass of carbon is needed to produce 22 g of carbon dioxide?\n(Given: $A_r$ of C = 12, O = 16)",
    options: [
      { text: "6 g", isCorrect: true },
      { text: "12 g" },
      { text: "3 g" },
      { text: "24 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CO₂ produced $= 22 / 44 = 0.50\\text{ mol}$.\n* According to the balanced equation, 1 mole of C produces 1 mole of CO₂.\n* Moles of carbon needed $= 0.50\\text{ mol}$.\n* Mass of carbon $= 0.50 \\times 12 = 6\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q31",
    createdAt: "2026-08-20T11:40:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv1_3-2026",
    question: "Calcium carbonate decomposes on heating: CaCO₃ → CaO + CO₂\nWhat mass of calcium oxide is formed when 50 g of calcium carbonate is completely decomposed?\n(Given: $M_r$ of CaCO₃ = 100, CaO = 56)",
    options: [
      { text: "56 g" },
      { text: "28 g", isCorrect: true },
      { text: "100 g" },
      { text: "14 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of CaCO₃ $= 50 / 100 = 0.50\\text{ mol}$.\n* The molar ratio of CaCO₃ to CaO is 1:1.\n* Moles of CaO produced $= 0.50\\text{ mol}$.\n* Mass of CaO $= 0.50 \\times 56 = 28\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q32",
    createdAt: "2026-08-20T11:45:00Z"
  }
];
