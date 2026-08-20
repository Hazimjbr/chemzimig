import { Question } from '../../../types';

// Preparation of Salts - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv1_1-2026",
    question: "Which of the following salts is completely insoluble in water at room temperature?",
    options: [
      { text: "Barium sulfate, BaSO₄", isCorrect: true },
      { text: "Sodium sulfate, Na₂SO₄" },
      { text: "Magnesium nitrate, Mg(NO₃)₂" },
      { text: "Ammonium chloride, NH₄Cl" }
    ],
    correctAnswer: 0,
    explanation: "* All nitrates, sodium, potassium, and ammonium salts are soluble.\n* Most sulfates are soluble, EXCEPT barium sulfate (BaSO₄), lead(II) sulfate (PbSO₄), and calcium sulfate (CaSO₄, sparingly).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q220",
    createdAt: "2026-08-21T05:00:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_2-2026",
    question: "Which experimental method is used to prepare pure, dry crystals of an insoluble salt like lead(II) iodide (PbI₂)?",
    options: [
      { text: "Precipitation by mixing two aqueous soluble salt solutions, filtering, washing the residue, and drying", isCorrect: true },
      { text: "Titration using an acid and an alkali with an indicator" },
      { text: "Adding excess insoluble metal oxide to acid and evaporating to dryness" },
      { text: "Fractional distillation of the acid mixture" }
    ],
    correctAnswer: 0,
    explanation: "* Insoluble salts are prepared by precipitation (mixing two soluble solutions, e.g. Pb(NO₃)₂ + 2KI → PbI₂(s) + 2KNO₃), followed by filtration, washing the residue with distilled water, and drying.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q221",
    createdAt: "2026-08-21T05:05:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv1_3-2026",
    question: "Which of the following salts is prepared by acid-alkali titration rather than by adding excess insoluble base to acid?",
    options: [
      { text: "Potassium chloride, KCl", isCorrect: true },
      { text: "Copper(II) sulfate, CuSO₄" },
      { text: "Magnesium chloride, MgCl₂" },
      { text: "Zinc nitrate, Zn(NO₃)₂" }
    ],
    correctAnswer: 0,
    explanation: "* Salts of Sodium, Potassium, and Ammonium (SPA salts) are prepared by titration because all reactants and products are soluble in water, so excess reactant cannot simply be filtered off.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q222",
    createdAt: "2026-08-21T05:10:00Z"
  }
];
