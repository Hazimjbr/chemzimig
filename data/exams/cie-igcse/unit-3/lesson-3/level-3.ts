import { Question } from '../../../types';

// Reacting Masses - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv3_1-2026",
    question: "A mixture of 8.0 g of hydrogen gas and 32.0 g of oxygen gas is ignited to form water:\n2H₂ + O₂ → 2H₂O\nWhat is the maximum mass of water that can be produced?\n(Given: $A_r$ of H = 1, O = 16)",
    options: [
      { text: "36.0 g", isCorrect: true },
      { text: "72.0 g" },
      { text: "40.0 g" },
      { text: "18.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate moles of each reactant:\n  * Moles of H₂ $= 8.0 / 2 = 4.0\\text{ mol}$.\n  * Moles of O₂ $= 32.0 / 32 = 1.0\\text{ mol}$.\n* According to the ratio, 2 moles of H₂ react with 1 mole of O₂. So 1.0 mole of O₂ reacts with 2.0 moles of H₂.\n* Oxygen is the limiting reactant, and hydrogen is in excess (2.0 moles remain unreacted).\n* Moles of H₂O formed = 2 × moles of limiting O₂ $= 2 \\times 1.0 = 2.0\\text{ mol}$.\n* Mass of H₂O $= 2.0 \\times 18 = 36.0\\text{ g}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q36",
    createdAt: "2026-08-20T12:05:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_2-2026",
    question: "Copper reacts with dilute nitric acid according to the equation:\n3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O\nIf 19.2 g of copper is added to a solution containing 0.60 moles of HNO₃, which reactant is the limiting reactant and how many moles of NO gas are produced?\n(Given: $A_r$ of Cu = 64)",
    options: [
      { text: "Cu is limiting; 0.20 mol of NO" },
      { text: "HNO₃ is limiting; 0.15 mol of NO", isCorrect: true },
      { text: "Cu is limiting; 0.10 mol of NO" },
      { text: "HNO₃ is limiting; 0.20 mol of NO" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Cu $= 19.2 / 64 = 0.30\\text{ mol}$. Moles of HNO₃ $= 0.60\\text{ mol}$.\n* Find the ratio of moles to coefficients:\n  * For Cu: $0.30 / 3 = 0.10$.\n  * For HNO₃: $0.60 / 8 = 0.075$.\n* Since $0.075 < 0.10$, HNO₃ is the limiting reactant.\n* Moles of NO gas formed $= 0.60 \\times (2 / 8) = 0.15\\text{ mol}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q37",
    createdAt: "2026-08-20T12:10:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv3_3-2026",
    question: "When 10.0 g of zinc reacts with 10.0 g of sulfur to form zinc sulfide (ZnS):\nZn + S → ZnS\nWhat mass of excess reactant remains unreacted at the end of the reaction?\n(Given: $A_r$ of Zn = 65, S = 32)",
    options: [
      { text: "5.1 g of sulfur", isCorrect: true },
      { text: "4.9 g of zinc" },
      { text: "6.8 g of sulfur" },
      { text: "3.2 g of zinc" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Zn $= 10.0 / 65 = 0.154\\text{ mol}$. Moles of S $= 10.0 / 32 = 0.3125\\text{ mol}$.\n* The reaction ratio is 1:1, so Zn is the limiting reactant (0.154 mol reacts with 0.154 mol of S).\n* Moles of excess sulfur remaining $= 0.3125 - 0.154 = 0.1585\\text{ mol}$.\n* Mass of excess sulfur remaining $= 0.1585 \\times 32 = 5.07\\text{ g} \\approx 5.1\\text{ g}$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q38",
    createdAt: "2026-08-20T12:15:00Z"
  }
];
