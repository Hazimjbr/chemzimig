import { Question } from '../../../types';

// Water Treatment & Testing - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u10_l1_lv2_1-2026",
    question: "Which of the following substances naturally dissolved in untreated river water is BENEFICIAL to aquatic life?",
    options: [
      { text: "Dissolved oxygen (O₂)", isCorrect: true },
      { text: "Lead(II) ions (Pb²⁺)" },
      { text: "Microplastics" },
      { text: "Raw untreated sewage" }
    ],
    correctAnswer: 0,
    explanation: "* Dissolved oxygen gas is essential for the respiration of fish and aquatic ecosystems.\n* In contrast, lead ions, microplastics, and sewage are hazardous pollutants.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q349",
    createdAt: "2026-08-21T18:20:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv2_2-2026",
    question: "In municipal water treatment plants, what is the primary function of passing filtered water through activated carbon (charcoal) beds?",
    options: [
      { text: "To adsorb dissolved organic compounds, traces of pesticides, and unpleasant tastes or odours", isCorrect: true },
      { text: "To kill all pathogenic bacteria and viruses" },
      { text: "To precipitate out dissolved sodium chloride" },
      { text: "To neutralize acidic rain in the water" }
    ],
    correctAnswer: 0,
    explanation: "* Activated carbon has a vast internal surface area with microscopic pores that adsorb dissolved chemical pollutants, pesticides, and foul-tasting organic molecules.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q350",
    createdAt: "2026-08-21T18:25:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv2_3-2026",
    question: "Which method is used in arid coastal regions to obtain pure potable water from seawater by forcing it through a semi-permeable membrane under high pressure?",
    options: [
      { text: "Desalination by reverse osmosis", isCorrect: true },
      { text: "Simple sedimentation" },
      { text: "Fractional distillation" },
      { text: "Chlorination and aeration" }
    ],
    correctAnswer: 0,
    explanation: "* Reverse osmosis applies high hydrostatic pressure to seawater, forcing water molecules across a selective semi-permeable membrane while blocking dissolved salt ions ($Na^+$, $Cl^-$).",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q351",
    createdAt: "2026-08-21T18:30:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv2_4-2026",
    question: "Why does adding a soluble non-volatile impurity (such as sodium chloride) to pure water alter its physical boiling and melting points?",
    options: [
      { text: "It elevates the boiling point above 100°C and depresses the melting point below 0°C", isCorrect: true },
      { text: "It decreases both the boiling and melting points" },
      { text: "It increases both the boiling and melting points" },
      { text: "It keeps the boiling point at 100°C but lowers the pH to 3" }
    ],
    correctAnswer: 0,
    explanation: "* Dissolved solutes disrupt crystal lattice formation (lowering freezing point below 0°C) and reduce vapour pressure (raising boiling point above 100°C), causing boiling/melting over a range.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q352",
    createdAt: "2026-08-21T18:35:00Z"
  }
];
