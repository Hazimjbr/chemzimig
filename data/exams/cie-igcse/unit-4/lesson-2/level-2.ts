import { Question } from '../../../types';

// Electrolytic Cells - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l2_lv2_1-2026",
    question: "What is the ionic half-equation for the reaction occurring at the cathode during the electrolysis of dilute aqueous copper(II) sulfate using inert electrodes?",
    options: [
      { text: "Cu²⁺ + 2e⁻ → Cu", isCorrect: true },
      { text: "2H⁺ + 2e⁻ → H₂" },
      { text: "Cu → Cu²⁺ + 2e⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" }
    ],
    correctAnswer: 0,
    explanation: "* Aqueous copper(II) sulfate contains Cu²⁺ and H⁺ ions attracted to the cathode.\n* Copper is lower than hydrogen in the reactivity series, meaning Cu²⁺ ions are discharged preferentially.\n* Reduction occurs as Cu²⁺ gains two electrons to deposit copper metal: Cu²⁺ + 2e⁻ → Cu.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q73",
    createdAt: "2026-08-20T15:20:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_2-2026",
    question: "Which of the following represents the correct anode half-equation for the electrolysis of dilute sodium chloride solution?",
    options: [
      { text: "2Cl⁻ → Cl₂ + 2e⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻", isCorrect: true },
      { text: "Na⁺ + e⁻ → Na" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 1,
    explanation: "* In a dilute solution of sodium chloride, the concentration of chloride ions (Cl⁻) is very low.\n* Therefore, hydroxide ions (OH⁻) from water dissociation are discharged preferentially at the anode.\n* The oxidation half-equation is: 4OH⁻ → O₂ + 2H₂O + 4e⁻.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q74",
    createdAt: "2026-08-20T15:25:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_3-2026",
    question: "During the electrolysis of concentrated aqueous sodium chloride (the chlor-alkali process), what are the three useful products formed?",
    options: [
      { text: "Sodium, chlorine, and oxygen" },
      { text: "Hydrogen, chlorine, and sodium hydroxide", isCorrect: true },
      { text: "Sodium, chlorine, and hydrogen" },
      { text: "Hydrogen, oxygen, and sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine gas (Cl₂) is produced at the anode.\n* Hydrogen gas (H₂) is produced at the cathode.\n* Sodium ions (Na⁺) and hydroxide ions (OH⁻) remain behind in the solution, forming sodium hydroxide (NaOH).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q75",
    createdAt: "2026-08-20T15:30:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv2_4-2026",
    question: "Which of the following describes the change in pH of the electrolyte during the electrolysis of concentrated aqueous sodium chloride?",
    options: [
      { text: "The pH remains neutral at 7" },
      { text: "The pH decreases and the solution becomes acidic" },
      { text: "The pH increases and the solution becomes alkaline", isCorrect: true },
      { text: "The pH decreases to 0" }
    ],
    correctAnswer: 2,
    explanation: "* As H⁺ ions are discharged at the cathode to form H₂ gas and Cl⁻ ions are discharged at the anode to form Cl₂ gas, Na⁺ and OH⁻ ions remain in the solution.\n* The accumulation of hydroxide ions (OH⁻) makes the solution alkaline, raising the pH.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q76",
    createdAt: "2026-08-20T15:35:00Z"
  }
];
