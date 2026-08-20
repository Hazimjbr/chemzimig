import { Question } from '../../../types';

// Alkanes - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u11_l1_lv1_1-2026",
    question: "What is the general molecular formula for the homologous series of alkanes?",
    options: [
      { text: "CₙH₂ₙ₊₂", isCorrect: true },
      { text: "CₙH₂ₙ" },
      { text: "CₙH₂ₙ₋₂" },
      { text: "CₙH₂ₙ₊₁OH" }
    ],
    correctAnswer: 0,
    explanation: "* Alkanes are saturated hydrocarbons with the general formula CₙH₂ₙ₊₂ (e.g. methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q393",
    createdAt: "2026-08-21T22:00:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv1_2-2026",
    question: "Why are alkanes classified as 'saturated hydrocarbons'?",
    options: [
      { text: "They contain ONLY carbon and hydrogen atoms, and all carbon-carbon bonds are single covalent bonds", isCorrect: true },
      { text: "They contain double bonds saturated with water" },
      { text: "They are dissolved to their maximum saturation limit in water" },
      { text: "They contain oxygen atoms saturated with hydrogen" }
    ],
    correctAnswer: 0,
    explanation: "* 'Hydrocarbon' means composed exclusively of hydrogen and carbon.\n* 'Saturated' means all carbon-carbon bonds are single C–C covalent bonds (no C=C double or triple bonds).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q394",
    createdAt: "2026-08-21T22:05:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv1_3-2026",
    question: "Which petroleum fraction obtained from the fractional distillation of crude oil is correctly matched with its primary commercial use?",
    options: [
      { text: "Refinery gas → bottled gas for heating and cooking; Gasoline → fuel for cars (petrol)", isCorrect: true },
      { text: "Bitumen → fuel for aircraft jet engines" },
      { text: "Kerosene → surfacing roads and roofing" },
      { text: "Diesel oil → bottled camping gas" }
    ],
    correctAnswer: 0,
    explanation: "* Key fractions and uses:\n  - Refinery gas: bottled gas for heating/cooking.\n  - Gasoline (petrol): fuel in cars.\n  - Naphtha: feedstock for chemicals.\n  - Kerosene (paraffin): jet aircraft fuel.\n  - Diesel oil: fuel for diesel engines.\n  - Fuel oil: fuel for ships and power stations.\n  - Bitumen: surfacing roads.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q395",
    createdAt: "2026-08-21T22:10:00Z"
  }
];
