import { Question } from '../../../types';

// The Mole Concept - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv2_1-2026",
    question: "How many molecules are present in 4.4 g of carbon dioxide, CO₂?\n(Given: $M_r$ of CO₂ = 44, Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "6.0 × 10²²", isCorrect: true },
      { text: "6.0 × 10²³" },
      { text: "1.2 × 10²³" },
      { text: "3.0 × 10²²" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate the number of moles of CO₂: $\\text{Moles} = \\text{Mass} / M_r = 4.4 / 44 = 0.10\\text{ mol}$.\n* Calculate number of molecules: $\\text{Molecules} = \\text{Moles} \\times L = 0.10 \\times (6.0 \\times 10^{23}) = 6.0 \\times 10^{22}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q24",
    createdAt: "2026-08-20T11:05:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_2-2026",
    question: "What is the total number of atoms in 0.20 moles of sulfur dioxide gas, SO₂?\n(Given: Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "1.2 × 10²³" },
      { text: "3.6 × 10²³", isCorrect: true },
      { text: "1.8 × 10²³" },
      { text: "6.0 × 10²²" }
    ],
    correctAnswer: 1,
    explanation: "* One molecule of SO₂ contains 3 atoms (1 sulfur, 2 oxygen).\n* Moles of atoms in 0.20 moles of SO₂ $= 0.20 \\times 3 = 0.60\\text{ moles of atoms}$.\n* Number of atoms $= 0.60 \\times L = 0.60 \\times (6.0 \\times 10^{23}) = 3.6 \\times 10^{23}$ atoms.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q25",
    createdAt: "2026-08-20T11:10:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv2_3-2026",
    question: "If a sample of ammonia gas, NH₃, contains $1.8 \\times 10^{23}$ molecules, what is the mass of this sample?\n(Given: $M_r$ of NH₃ = 17, Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "5.1 g", isCorrect: true },
      { text: "17.0 g" },
      { text: "8.5 g" },
      { text: "3.4 g" }
    ],
    correctAnswer: 0,
    explanation: "* Find the moles of NH₃: $\\text{Moles} = \\text{Molecules} / L = (1.8 \\times 10^{23}) / (6.0 \\times 10^{23}) = 0.30\\text{ mol}$.\n* Calculate the mass: $\\text{Mass} = \\text{Moles} \\times M_r = 0.30 \\times 17 = 5.1\\text{ g}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q26",
    createdAt: "2026-08-20T11:15:00Z"
  }
];
