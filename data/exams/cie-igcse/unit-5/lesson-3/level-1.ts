import { Question } from '../../../types';

// Bond Energies - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv1_1-2026",
    question: "Which statement correctly describes bond breaking and bond making in a chemical reaction?",
    options: [
      { text: "Bond breaking is exothermic and bond making is endothermic" },
      { text: "Bond breaking is endothermic and bond making is exothermic", isCorrect: true },
      { text: "Both bond breaking and bond making are exothermic" },
      { text: "Both bond breaking and bond making are endothermic" }
    ],
    correctAnswer: 1,
    explanation: "* Energy must be supplied/absorbed to overcome the electrostatic attraction between atoms and break chemical bonds (endothermic).\n* Energy is released when new chemical bonds form between atoms (exothermic).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q129",
    createdAt: "2026-08-20T20:00:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_2-2026",
    question: "The bond energy of an H–H single covalent bond is 436 kJ/mol.\nWhat amount of energy is absorbed when 2.0 moles of H–H bonds are completely broken into separate hydrogen atoms?",
    options: [
      { text: "218 kJ" },
      { text: "436 kJ" },
      { text: "872 kJ", isCorrect: true },
      { text: "1744 kJ" }
    ],
    correctAnswer: 2,
    explanation: "* Energy absorbed $= \\text{Moles of bonds} \\times \\text{Bond energy}$.\n* Energy absorbed $= 2.0 \\times 436 = 872\\text{ kJ}$.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q130",
    createdAt: "2026-08-20T20:05:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_3-2026",
    question: "What formula is used to calculate the overall enthalpy change (ΔH) of a reaction from bond energies?",
    options: [
      { text: "ΔH = (energy released in bond making) - (energy absorbed in bond breaking)" },
      { text: "ΔH = (energy absorbed in bond breaking) - (energy released in bond making)", isCorrect: true },
      { text: "ΔH = (energy of products) + (energy of reactants)" },
      { text: "ΔH = (activation energy) / (molar mass of reactants)" }
    ],
    correctAnswer: 1,
    explanation: "* The overall enthalpy change is calculated as:\n  $\\Delta H = \\Sigma(\\text{bond energies of bonds broken}) - \\Sigma(\\text{bond energies of bonds formed})$.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q131",
    createdAt: "2026-08-20T20:10:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv1_4-2026",
    question: "In the synthesis of hydrogen chloride: H₂ + Cl₂ → 2HCl\nWhich bonds are broken and which bonds are formed?",
    options: [
      { text: "Bonds broken: 1 H–H and 1 Cl–Cl; Bonds formed: 2 H–Cl", isCorrect: true },
      { text: "Bonds broken: 2 H–Cl; Bonds formed: 1 H–H and 1 Cl–Cl" },
      { text: "Bonds broken: 1 H–H; Bonds formed: 1 H–Cl and 1 Cl–Cl" },
      { text: "Bonds broken: 2 H–H and 2 Cl–Cl; Bonds formed: 1 H–Cl" }
    ],
    correctAnswer: 0,
    explanation: "* Reactants are H–H and Cl–Cl, so one mole of H–H bonds and one mole of Cl–Cl bonds are broken.\n* Products are 2 HCl molecules, meaning two moles of H–Cl single bonds are formed.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q132",
    createdAt: "2026-08-20T20:15:00Z"
  }
];
