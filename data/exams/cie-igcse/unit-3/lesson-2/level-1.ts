import { Question } from '../../../types';

// The Mole Concept - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv1_1-2026",
    question: "What is the mass of 0.50 moles of calcium carbonate, CaCO₃?\n(Given: $M_r$ of CaCO₃ = 100)",
    options: [
      { text: "50 g", isCorrect: true },
      { text: "100 g" },
      { text: "200 g" },
      { text: "25 g" }
    ],
    correctAnswer: 0,
    explanation: "* Formula: $\\text{Mass} = \\text{Moles} \\times M_r$.\n* Mass $= 0.50 \\times 100 = 50\\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q21",
    createdAt: "2026-08-20T10:50:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_2-2026",
    question: "How many moles of hydrogen atoms are there in 2.0 moles of methane, CH₄?",
    options: [
      { text: "2.0 moles" },
      { text: "4.0 moles" },
      { text: "8.0 moles", isCorrect: true },
      { text: "6.0 moles" }
    ],
    correctAnswer: 2,
    explanation: "* One mole of methane, CH₄, contains 4 moles of hydrogen atoms.\n* Therefore, 2.0 moles of CH₄ contains $2.0 \\times 4 = 8.0\\text{ moles}$ of hydrogen atoms.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q22",
    createdAt: "2026-08-20T10:55:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv1_3-2026",
    question: "Which quantity contains the largest number of moles of atoms?\n(Given: $A_r$ of H = 1, He = 4, C = 12, O = 16)",
    options: [
      { text: "4 g of helium gas, He" },
      { text: "12 g of carbon, C" },
      { text: "16 g of oxygen gas, O₂" },
      { text: "4 g of hydrogen gas, H₂", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Helium (He): 4 g / 4 = 1.0 mol of atoms.\n* Carbon (C): 12 g / 12 = 1.0 mol of atoms.\n* Oxygen gas (O₂): 16 g / 32 = 0.5 mol of molecules = 1.0 mol of atoms.\n* Hydrogen gas (H₂): 4 g / 2 = 2.0 mol of molecules = 4.0 mol of atoms.\n* 4 g of hydrogen gas has the largest number of moles of atoms.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q23",
    createdAt: "2026-08-20T11:00:00Z"
  }
];
