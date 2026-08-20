import { Question } from '../../../types';

// Purification & Separation - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u12_l2_lv1_1-2026",
    question: "Which separation technique is used to separate an insoluble solid (such as sand or calcium carbonate) from an aqueous solution?",
    options: [
      { text: "Filtration", isCorrect: true },
      { text: "Simple distillation" },
      { text: "Paper chromatography" },
      { text: "Fractional distillation" }
    ],
    correctAnswer: 0,
    explanation: "* Filtration traps insoluble solid particles (the residue) on filter paper while the liquid passes through (the filtrate).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q453",
    createdAt: "2026-08-22T05:00:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv1_2-2026",
    question: "Why MUST the starting baseline in paper chromatography always be drawn with a graphite pencil instead of an ink pen?",
    options: [
      { text: "Pencil graphite is insoluble in chromatography solvents and will not dissolve or run up the paper with the spots", isCorrect: true },
      { text: "Ink reacts violently with the paper" },
      { text: "Pencil absorbs all the dyes from the sample" },
      { text: "Ink causes the solvent to evaporate instantly" }
    ],
    correctAnswer: 0,
    explanation: "* Ink contains soluble dyes that would dissolve in the mobile phase solvent and separate into interfering colored spots, ruining the chromatogram.\n* Graphite (pencil) is insoluble and remains fixed at the origin.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q454",
    createdAt: "2026-08-22T05:05:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv1_3-2026",
    question: "Which apparatus setup is used to obtain pure liquid water from a solution of copper(II) sulfate?",
    options: [
      { text: "Simple distillation (distillation flask connected to a Liebig condenser)", isCorrect: true },
      { text: "Evaporation to dryness in an evaporating basin" },
      { text: "Separating funnel" },
      { text: "Filtration through filter paper" }
    ],
    correctAnswer: 0,
    explanation: "* Simple distillation evaporates the volatile solvent (water) and condenses its vapour back into pure liquid in a Liebig condenser, leaving non-volatile solid solute behind.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q455",
    createdAt: "2026-08-22T05:10:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv1_4-2026",
    question: "What is the correct procedure to obtain large, well-formed hydrated crystals of copper(II) sulfate from its aqueous solution?",
    options: [
      { text: "Heat the solution to the crystallisation point (until saturated), then allow it to cool slowly at room temperature", isCorrect: true },
      { text: "Boil the solution vigorously until all liquid water is completely evaporated to dryness" },
      { text: "Freeze the solution in an ice bath" },
      { text: "Add concentrated hydrochloric acid to precipitate crystals" }
    ],
    correctAnswer: 0,
    explanation: "* Heating to saturation and allowing slow cooling gives large pure hydrated crystals (CuSO₄·5H₂O).\n* Evaporating completely to dryness destroys water of crystallisation and leaves a powdery anhydrous solid contaminated with impurities.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q456",
    createdAt: "2026-08-22T05:15:00Z"
  }
];
