import { Question } from '../../../types';

// Electrolysis - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l1_lv2_1-2026",
    question: "Which equation represents the reaction occurring at the cathode during the electrolysis of molten sodium chloride?",
    options: [
      { text: "Na⁺ + e⁻ → Na", isCorrect: true },
      { text: "2Cl⁻ → Cl₂ + 2e⁻" },
      { text: "Na → Na⁺ + e⁻" },
      { text: "Cl₂ + 2e⁻ → 2Cl⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In molten sodium chloride, the sodium ions (Na⁺) migrate to the negative cathode.\n* At the cathode, reduction occurs as the Na⁺ ions gain electrons: Na⁺ + e⁻ → Na.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q61",
    createdAt: "2026-08-20T14:20:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_2-2026",
    question: "During the electrolysis of molten lead(II) bromide, what type of reaction takes place at the anode?",
    options: [
      { text: "Reduction" },
      { text: "Oxidation", isCorrect: true },
      { text: "Neutralisation" },
      { text: "Thermal decomposition" }
    ],
    correctAnswer: 1,
    explanation: "* At the anode (positive electrode), bromide ions lose electrons to form bromine gas: 2Br⁻ → Br₂ + 2e⁻.\n* Loss of electrons is defined as oxidation, so oxidation occurs at the anode.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q62",
    createdAt: "2026-08-20T14:25:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_3-2026",
    question: "Which of the following occurs during the electrolysis of molten lead(II) bromide, PbBr₂?\n1. Lead ions are oxidized\n2. Bromide ions are oxidized\n3. Reduction happens at the cathode",
    options: [
      { text: "1 and 3 only" },
      { text: "2 and 3 only", isCorrect: true },
      { text: "1 and 2 only" },
      { text: "1, 2 and 3" }
    ],
    correctAnswer: 1,
    explanation: "* Bromide ions lose electrons at the anode, which is oxidation (statement 2 is correct).\n* Lead ions gain electrons at the cathode, which is reduction (statement 3 is correct; statement 1 is incorrect because lead ions are reduced, not oxidized).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q63",
    createdAt: "2026-08-20T14:30:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv2_4-2026",
    question: "Which statement about electrolytes is correct?",
    options: [
      { text: "They conduct electricity in the solid state" },
      { text: "They are always covalent molecular substances" },
      { text: "They conduct electricity by the flow of free electrons" },
      { text: "They decompose when an electric current passes through them", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Electrolytes are ionic compounds that conduct electricity when molten or in aqueous solution.\n* They do not conduct in the solid state because ions are fixed in the lattice.\n* They conduct via mobile ions (not electrons) and decompose chemically during the process.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q64",
    createdAt: "2026-08-20T14:35:00Z"
  }
];
