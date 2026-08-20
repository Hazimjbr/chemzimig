import { Question } from '../../../types';

// Atomic Structure - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l1_lv1_1-2026",
    question: "What are the relative electrical charges of a proton, a neutron, and an electron?",
    options: [
      { text: "Proton: +1; Neutron: 0; Electron: -1" },
      { text: "Proton: +1; Neutron: -1; Electron: 0" },
      { text: "Proton: 0; Neutron: +1; Electron: -1" },
      { text: "Proton: +1; Neutron: +1; Electron: -1" }
    ],
    correctAnswer: 0,
    explanation: "* Protons carry a single positive charge ($+1$).\n* Neutrons are electrically neutral with zero charge ($0$).\n* Electrons carry a single negative charge ($-1$).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q24",
    createdAt: "2026-04-15T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_2-2026",
    question: "An atom of sodium has a proton number (atomic number) of 11 and a nucleon number (mass number) of 23. How many neutrons does this atom contain in its nucleus?",
    options: [
      { text: "11" },
      { text: "12" },
      { text: "23" },
      { text: "34" }
    ],
    correctAnswer: 1,
    explanation: "* Nucleon number (mass number, $A$) = protons + neutrons.\n* Number of neutrons = $A - Z = 23 - 11 = 12\\text{ neutrons}$.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q26",
    createdAt: "2026-04-15T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_3-2026",
    question: "What is the maximum number of electrons that can occupy the first, second, and third electron shells in the Bohr model of an atom (for elements up to $Z = 20$)?",
    options: [
      { text: "2, 8, 8" },
      { text: "2, 6, 10" },
      { text: "8, 8, 8" },
      { text: "2, 4, 8" }
    ],
    correctAnswer: 0,
    explanation: "* The first inner shell holds a maximum of 2 electrons.\n* The second shell holds up to 8 electrons.\n* The third shell accommodates 8 valence electrons before calcium ($Z = 20$) starts filling the fourth shell ($2, 8, 8, 2$).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q18",
    createdAt: "2026-04-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_4-2026",
    question: "Which subatomic particles are located inside the central nucleus of an atom?",
    options: [
      { text: "Electrons and protons only" },
      { text: "Protons and neutrons only" },
      { text: "Neutrons and electrons only" },
      { text: "Protons, neutrons, and electrons all together" }
    ],
    correctAnswer: 1,
    explanation: "* The dense central nucleus contains the nucleons: positively charged protons and neutral neutrons.\n* Negatively charged electrons orbit the nucleus in surrounding electron shells.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q16",
    createdAt: "2026-04-16T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_5-2026",
    question: "What is the relative mass of an electron compared to a proton?",
    options: [
      { text: "1" },
      { text: "1/1840 (almost negligible)" },
      { text: "1840" },
      { text: "0.5" }
    ],
    correctAnswer: 1,
    explanation: "* Protons and neutrons both have a relative mass of approximately 1.\n* An electron has a relative mass of $1/1840$ (or roughly $0.00054$), which is considered negligible when calculating mass numbers.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q27",
    createdAt: "2026-04-21T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_6-2026",
    question: "What is the electronic configuration of a neutral magnesium atom ($Z = 12$)?",
    options: [
      { text: "2, 8, 2" },
      { text: "2, 10" },
      { text: "2, 8, 8, 2" },
      { text: "12" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium has 12 electrons.\n* The first shell takes 2 electrons, the second takes 8, and the remaining 2 occupy the valence shell: $2, 8, 2$.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q29",
    createdAt: "2026-04-21T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_7-2026",
    question: "Why is a neutral atom electrically uncharged overall?",
    options: [
      { text: "Neutrons neutralize all electrical charges" },
      { text: "The number of positively charged protons in the nucleus equals the number of negatively charged electrons in the shells" },
      { text: "Electrons lose their charge inside an atom" },
      { text: "The nucleus has zero total charge" }
    ],
    correctAnswer: 1,
    explanation: "* Each proton has a $+1$ charge and each electron has a $-1$ charge.\n* In any neutral atom, number of protons = number of electrons, so the opposite charges exactly cancel out to give zero net charge.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q20",
    createdAt: "2026-04-22T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l1_lv1_8-2026",
    question: "What determines the atomic number (proton number) and fundamental identity of an element?",
    options: [
      { text: "The number of neutrons in its nucleus" },
      { text: "The number of protons in its nucleus" },
      { text: "The total number of nucleons" },
      { text: "The number of electrons gained during bonding" }
    ],
    correctAnswer: 1,
    explanation: "* The atomic number ($Z$) is defined strictly as the number of protons in the nucleus.\n* Every atom of a given element has the same unique number of protons, which defines its chemical identity.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q18",
    createdAt: "2026-04-22T10:00:00Z"
  }
];


