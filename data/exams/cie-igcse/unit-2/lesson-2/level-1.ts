import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv1_1-2026",
    question: "Which row correctly compares an element, a compound, and a mixture?",
    options: [
      { text: "Element: Contains only one type of atom; Compound: Two or more elements chemically combined; Mixture: Two or more substances physically mixed" },
      { text: "Element: Can be broken down chemically; Compound: Contains only one element; Mixture: Has a fixed boiling point" },
      { text: "Element: Contains two types of atoms; Compound: Easily separated by filtration; Mixture: Formed with energy release" },
      { text: "Element: Has varying composition; Compound: Physically mixed; Mixture: Contains only non-metals" }
    ],
    correctAnswer: 0,
    explanation: "* An element consists of only one type of atom (e.g. $O_2$, $Fe$) and cannot be broken down into simpler substances by chemical means.\n* A compound contains two or more elements chemically bonded in a fixed ratio (e.g. $H_2O$, $NaCl$).\n* A mixture contains two or more substances that are not chemically joined and can be separated by physical methods (e.g. air, salt water).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q4",
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv1_2-2026",
    question: "Brass is an alloy made of copper and zinc. Why is brass classified as a mixture rather than a compound?",
    options: [
      { text: "The copper and zinc atoms are chemically bonded in a fixed, constant ratio" },
      { text: "The proportions of copper and zinc can vary and their atoms are not chemically combined together" },
      { text: "Brass has a sharp, fixed melting point like pure copper" },
      { text: "Brass can only be separated into copper and zinc by an electrolytic chemical reaction" }
    ],
    correctAnswer: 1,
    explanation: "* Alloys are physical mixtures of a metal with other elements (metals or carbon).\n* In brass, copper and zinc atoms are mixed without chemical bonds in variable proportions, retaining their individual chemical characteristics.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q4",
    createdAt: "2026-05-10T10:00:00Z"
  }
];
