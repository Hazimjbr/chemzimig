import { Question } from '../../../types';

// Bond Energies - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv2_1-2026",
    question: "Using the bond energies below, calculate the enthalpy change (ΔH) for the reaction:\nH₂(g) + Cl₂(g) → 2HCl(g)\n(Bond energies: H–H = 436 kJ/mol, Cl–Cl = 242 kJ/mol, H–Cl = 431 kJ/mol)",
    options: [
      { text: "-184 kJ/mol", isCorrect: true },
      { text: "+184 kJ/mol" },
      { text: "-247 kJ/mol" },
      { text: "+247 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy absorbed in bond breaking: $(1 \\times 436) + (1 \\times 242) = 678\\text{ kJ/mol}$.\n* Energy released in bond forming: $2 \\times 431 = 862\\text{ kJ/mol}$.\n* $\\Delta H = \\text{Bonds broken} - \\text{Bonds formed} = 678 - 862 = -184\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q133",
    createdAt: "2026-08-20T20:20:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_2-2026",
    question: "The equation for the combustion of methane is:\nCH₄ + 2O₂ → CO₂ + 2H₂O\nGiven the bond energies:\n* C–H = 413 kJ/mol\n* O=O = 498 kJ/mol\n* C=O = 805 kJ/mol\n* O–H = 464 kJ/mol\nWhat is the enthalpy change of combustion (ΔH) for methane?",
    options: [
      { text: "-818 kJ/mol", isCorrect: true },
      { text: "+818 kJ/mol" },
      { text: "-652 kJ/mol" },
      { text: "-1024 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy for bond breaking $= (4 \\times 413) + (2 \\times 498) = 1652 + 996 = 2648\\text{ kJ/mol}$.\n* Energy from bond forming $= (2 \\times 805) + (4 \\times 464) = 1610 + 1856 = 3466\\text{ kJ/mol}$.\n* $\\Delta H = 2648 - 3466 = -818\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q134",
    createdAt: "2026-08-20T20:25:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_3-2026",
    question: "In the synthesis of ammonia: N₂ + 3H₂ → 2NH₃\nBond energies: N≡N = 945 kJ/mol, H–H = 436 kJ/mol, N–H = 391 kJ/mol.\nWhat is the enthalpy change (ΔH) for this reaction?",
    options: [
      { text: "-93 kJ/mol", isCorrect: true },
      { text: "+93 kJ/mol" },
      { text: "-1093 kJ/mol" },
      { text: "-45 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy to break bonds $= 945 + (3 \\times 436) = 945 + 1308 = 2253\\text{ kJ/mol}$.\n* Energy released forming bonds $= 6 \\times 391 = 2346\\text{ kJ/mol}$.\n* $\\Delta H = 2253 - 2346 = -93\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q135",
    createdAt: "2026-08-20T20:30:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv2_4-2026",
    question: "Hydrogenation of ethene occurs according to: C₂H₄ + H₂ → C₂H₆\nGiven the bond energies:\n* C=C = 612 kJ/mol\n* C–C = 348 kJ/mol\n* H–H = 436 kJ/mol\n* C–H = 413 kJ/mol\nWhat is the value of ΔH for this reaction?",
    options: [
      { text: "-126 kJ/mol", isCorrect: true },
      { text: "+126 kJ/mol" },
      { text: "-252 kJ/mol" },
      { text: "-58 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken: 1 C=C (612) + 1 H–H (436) = 1048 kJ/mol (C–H bonds present in both reactants and products can be cancelled or counted).\n* Bonds formed: 1 C–C (348) + 2 C–H (2 × 413 = 826) = 1174 kJ/mol.\n* $\\Delta H = 1048 - 1174 = -126\\text{ kJ/mol}$.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q136",
    createdAt: "2026-08-20T20:35:00Z"
  }
];
