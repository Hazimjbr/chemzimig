import { Question } from '../../../types';

// Reacting Masses - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l3_lv2_1-2026",
    question: "Aluminum reacts with copper(II) oxide according to the equation:\n2Al + 3CuO → Al₂O₃ + 3Cu\nWhat mass of copper is produced when 5.4 g of aluminum reacts completely with excess copper(II) oxide?\n(Given: $A_r$ of Al = 27, Cu = 64)",
    options: [
      { text: "19.2 g", isCorrect: true },
      { text: "12.8 g" },
      { text: "6.4 g" },
      { text: "38.4 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Al $= 5.4 / 27 = 0.20\\text{ mol}$.\n* According to the balanced equation, 2 moles of Al produce 3 moles of Cu.\n* Therefore, moles of Cu produced $= 0.20 \\times (3 / 2) = 0.30\\text{ mol}$.\n* Mass of Cu produced $= 0.30 \\times 64 = 19.2\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q33",
    createdAt: "2026-08-20T11:50:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_2-2026",
    question: "Propane burns completely in oxygen: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O\nWhat mass of oxygen is required for the complete combustion of 4.4 g of propane?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "3.2 g" },
      { text: "16.0 g", isCorrect: true },
      { text: "8.0 g" },
      { text: "32.0 g" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of propane, C₃H₈ $= 4.4 / 44 = 0.10\\text{ mol}$ (where $M_r$ of C₃H₈ $= (3 \\times 12) + (8 \\times 1) = 44$).\n* From the equation, 1 mole of C₃H₈ requires 5 moles of O₂.\n* Moles of O₂ required $= 0.10 \\times 5 = 0.50\\text{ mol}$.\n* Mass of O₂ $= 0.50 \\times 32 = 16.0\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q34",
    createdAt: "2026-08-20T11:55:00Z"
  },
  {
    id: "ex_ci_u3_l3_lv2_3-2026",
    question: "What mass of anhydrous sodium carbonate is needed to prepare 14.2 g of sodium sulfate according to the reaction:\nNa₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂\n(Given: $M_r$ of Na₂CO₃ = 106, Na₂SO₄ = 142)",
    options: [
      { text: "10.6 g", isCorrect: true },
      { text: "21.2 g" },
      { text: "5.3 g" },
      { text: "14.2 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Na₂SO₄ produced $= 14.2 / 142 = 0.10\\text{ mol}$.\n* The molar ratio of Na₂CO₃ to Na₂SO₄ is 1:1.\n* Moles of Na₂CO₃ needed $= 0.10\\text{ mol}$.\n* Mass of Na₂CO₃ $= 0.10 \\times 106 = 10.6\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q35",
    createdAt: "2026-08-20T12:00:00Z"
  }
];
