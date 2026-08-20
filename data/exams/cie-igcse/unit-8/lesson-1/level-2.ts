import { Question } from '../../../types';

// Periodic Trends - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u8_l1_lv2_1-2026",
    question: "An element X has the electronic configuration 2,8,8,2.\nIn which Period and Group of the Periodic Table is element X located?",
    options: [
      { text: "Period 4, Group II", isCorrect: true },
      { text: "Period 2, Group IV" },
      { text: "Period 4, Group VIII" },
      { text: "Period 2, Group II" }
    ],
    correctAnswer: 0,
    explanation: "* The number of occupied electron shells is 4, so it is in Period 4.\n* The number of outer valence electrons is 2, so it is in Group II (specifically Calcium, Ca).",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q252",
    createdAt: "2026-08-21T08:15:00Z"
  },
  {
    id: "ex_ci_u8_l1_lv2_2-2026",
    question: "Why does the atomic radius decrease from sodium to chlorine across Period 3?",
    options: [
      { text: "Nuclear charge (number of protons) increases while shielding from inner shells remains approximately constant, pulling electrons closer", isCorrect: true },
      { text: "The number of occupied electron shells decreases across the period" },
      { text: "Non-metals have more neutrons which pull the electrons inwards" },
      { text: "Chlorine forms covalent bonds that compress the atom" }
    ],
    correctAnswer: 0,
    explanation: "* Across Period 3, protons are added to the nucleus (+11 in Na to +17 in Cl), increasing positive nuclear charge.\n* Electrons are added to the same third principal energy level with the same inner-shell shielding, so the stronger electrostatic pull draws the valence shell closer.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q253",
    createdAt: "2026-08-21T08:20:00Z"
  },
  {
    id: "ex_ci_u8_l1_lv2_3-2026",
    question: "Which of the following elements in Period 3 is a metalloid (semiconductor) with intermediate properties between metals and non-metals?",
    options: [
      { text: "Silicon (Si)", isCorrect: true },
      { text: "Sodium (Na)" },
      { text: "Aluminium (Al)" },
      { text: "Phosphorus (P)" }
    ],
    correctAnswer: 0,
    explanation: "* Silicon (Si) lies along the diagonal border between metals and non-metals; it is a metalloid with shiny physical appearance and electrical semiconductivity.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q254",
    createdAt: "2026-08-21T08:25:00Z"
  },
  {
    id: "ex_ci_u8_l1_lv2_4-2026",
    question: "Why do elements in the same group of the Periodic Table have very similar chemical properties?",
    options: [
      { text: "They have the same number of outer-shell electrons", isCorrect: true },
      { text: "They have the same number of protons" },
      { text: "They have the same atomic mass" },
      { text: "They have the same number of electron shells" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical reactivity is primarily determined by the loss, gain, or sharing of outer-shell valence electrons.\n* Elements in the same group have identical valence configurations, leading to analogous chemical reactions.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q255",
    createdAt: "2026-08-21T08:30:00Z"
  }
];
