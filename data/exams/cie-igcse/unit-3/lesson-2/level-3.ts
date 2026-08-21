import { Question } from '../../../types';

// The Mole Concept - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l2_lv3_1-2026",
    question: "Which of the following contains the same number of molecules as 4 g of hydrogen gas, H₂?\n(Given: $A_r$ of H = 1, C = 12, N = 14, O = 16)",
    options: [
      { text: "16 g of methane, CH₄" },
      { text: "88 g of carbon dioxide, CO₂", isCorrect: true },
      { text: "28 g of nitrogen gas, N₂" },
      { text: "32 g of oxygen gas, O₂" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of molecules in 4 g of H₂ gas $= 4 / 2 = 2.0\\text{ mol}$.\n* Let's calculate the moles of molecules for each option:\n  * 16 g of CH₄ $= 16 / 16 = 1.0\\text{ mol}$.\n  * 88 g of CO₂ $= 88 / 44 = 2.0\\text{ mol}$.\n  * 28 g of N₂ $= 28 / 28 = 1.0\\text{ mol}$.\n  * 32 g of O₂ $= 32 / 32 = 1.0\\text{ mol}$.\n* Therefore, 88 g of carbon dioxide contains the same number of moles of molecules (and thus the same number of molecules) as 4 g of hydrogen gas.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q27",
    createdAt: "2026-08-20T11:20:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_2-2026",
    question: "A sample of gas with a mass of 1.4 g contains $3.0 \\times 10^{22}$ molecules.\nWhat is the relative molecular mass ($M_r$) of the gas?\n(Given: Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "14" },
      { text: "28", isCorrect: true },
      { text: "44" },
      { text: "70" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate the number of moles of gas: $\\text{Moles} = \\text{number of molecules} / L = (3.0 \\times 10^{22}) / (6.0 \\times 10^{23}) = 0.05\\text{ mol}$.\n* Calculate the relative molecular mass ($M_r$): $M_r = \\text{mass} / \\text{moles} = 1.4 / 0.05 = 28$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q28",
    createdAt: "2026-08-20T11:25:00Z"
  },
  {
    id: "ex_ci_u3_l2_lv3_3-2026",
    question: "Which sample contains the greatest number of atoms?\n(Given: $A_r$ of H = 1, C = 12, O = 16, Na = 23, S = 32, Fe = 56; Avogadro's constant, $L = 6.0 \\times 10^{23}$ per mole)",
    options: [
      { text: "2.0 g of hydrogen gas, H₂", isCorrect: true },
      { text: "5.6 g of iron, Fe" },
      { text: "9.8 g of sulfuric acid, H₂SO₄" },
      { text: "10.0 g of calcium carbonate, CaCO₃" }
    ],
    correctAnswer: 0,
    explanation: "* Calculate the number of moles of atoms for each sample:\n  * 2.0 g of H₂ $= 2.0 / 2 = 1.0\\text{ mol of H}_2\\text{ molecules} = 2.0\\text{ moles of atoms}$.\n  * 5.6 g of Fe $= 5.6 / 56 = 0.1\\text{ moles of Fe atoms}$.\n  * 9.8 g of H₂SO₄ $= 9.8 / 98 = 0.1\\text{ mol of H}_2\\text{SO}_4\\text{ molecules} \\times 7 = 0.7\\text{ moles of atoms}$.\n  * 10.0 g of CaCO₃ $= 10.0 / 100 = 0.1\\text{ mol of CaCO}_3\\text{ formula units} \\times 5 = 0.5\\text{ moles of atoms}$.\n* Therefore, 2.0 g of hydrogen gas contains the greatest number of atoms ($2.0 \\times L$ atoms).",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q29",
    createdAt: "2026-08-20T11:30:00Z"
  }
];
