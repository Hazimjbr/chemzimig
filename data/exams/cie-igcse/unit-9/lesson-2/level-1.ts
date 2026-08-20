import { Question } from '../../../types';

// Reactivity Series - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u9_l2_lv1_1-2026",
    question: "Which of the following lists metals in order of DECREASING chemical reactivity (most reactive first)?",
    options: [
      { text: "Potassium > Magnesium > Zinc > Iron > Copper", isCorrect: true },
      { text: "Copper > Iron > Zinc > Magnesium > Potassium" },
      { text: "Magnesium > Potassium > Copper > Zinc > Iron" },
      { text: "Iron > Zinc > Magnesium > Potassium > Copper" }
    ],
    correctAnswer: 0,
    explanation: "* The reactivity series in descending order is: K > Na > Ca > Mg > Al > (C) > Zn > Fe > (H) > Cu > Ag > Au.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q307",
    createdAt: "2026-08-21T14:00:00Z"
  },
  {
    id: "ex_ci_u9_l2_lv1_2-2026",
    question: "When magnesium ribbon is placed into a blue solution of copper(II) sulfate, what is observed?",
    options: [
      { text: "The blue colour fades to colourless and a pink-brown solid coats the magnesium", isCorrect: true },
      { text: "A gas is evolved with no colour change in the solution" },
      { text: "No reaction takes place" },
      { text: "A white precipitate of copper metal floats on top" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium is more reactive than copper and displaces it: Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s).\n* Blue Cu²⁺ ions are consumed forming colourless MgSO₄, while pink-brown copper metal is deposited.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q308",
    createdAt: "2026-08-21T14:05:00Z"
  },
  {
    id: "ex_ci_u9_l2_lv1_3-2026",
    question: "Which metal occurs native (uncombined as a free element) in the Earth's crust due to its extreme unreactivity?",
    options: [
      { text: "Gold (Au)", isCorrect: true },
      { text: "Aluminium (Al)" },
      { text: "Calcium (Ca)" },
      { text: "Sodium (Na)" }
    ],
    correctAnswer: 0,
    explanation: "* Unreactive metals at the bottom of the reactivity series (such as gold and platinum) do not react with atmospheric oxygen or water, existing native in nature.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q309",
    createdAt: "2026-08-21T14:10:00Z"
  }
];
