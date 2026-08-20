import { Question } from '../../../types';

// Purification & Separation - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l2_lv3_1-2026",
    question: "Why is two-dimensional (2D) paper chromatography used when a one-dimensional chromatogram fails to separate all components of a complex mixture of amino acids?",
    options: [
      { text: "Spots that have identical $R_f$ values in the first solvent can be resolved by turning the paper 90° and running with a different second solvent of different polarity", isCorrect: true },
      { text: "The second solvent oxidises all amino acids into gases" },
      { text: "It doubles the speed at which the solvent front advances" },
      { text: "It converts colourless spots directly into radioactive tracers" }
    ],
    correctAnswer: 0,
    explanation: "* Different solvents interact with different partition coefficients / affinities.\n* Components that co-elute (overlap) in solvent 1 will separate cleanly when developed perpendicularly in solvent 2.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q461",
    createdAt: "2026-08-22T05:40:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_2-2026",
    question: "What is the correct sequence of steps to separate pure, dry crystals of sand (SiO₂), sodium chloride (NaCl), and iron filings from a solid mixture of all three?",
    options: [
      { text: "1. Use a magnet to remove iron filings → 2. Add water and stir to dissolve NaCl → 3. Filter to separate sand residue → 4. Heat filtrate to crystallisation point and cool", isCorrect: true },
      { text: "1. Add water → 2. Distil mixture → 3. Use a magnet → 4. Filter" },
      { text: "1. Filter dry mixture → 2. Add acid to dissolve iron → 3. Evaporate" },
      { text: "1. Heat mixture to 1000°C to melt NaCl → 2. Pour off liquid" }
    ],
    correctAnswer: 0,
    explanation: "* Magnetic separation removes iron filings first.\n* Adding water dissolves soluble NaCl leaving insoluble sand.\n* Filtration separates sand as the residue.\n* Controlled crystallisation of the filtrate yields pure NaCl crystals.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q462",
    createdAt: "2026-08-22T05:45:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_3-2026",
    question: "In setting up a paper chromatography tank, what happens if the level of the solvent in the beaker is HIGHER than the pencil baseline on the paper?",
    options: [
      { text: "The sample spots will dissolve directly into the solvent in the beaker and wash away instead of traveling up the paper", isCorrect: true },
      { text: "The solvent front will stop moving immediately" },
      { text: "The $R_f$ values of all substances will double" },
      { text: "The pencil line will react with the solvent" }
    ],
    correctAnswer: 0,
    explanation: "* The solvent level must always be below the baseline so capillary action draws the solvent up through the spots, separating them upwards along the paper.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q463",
    createdAt: "2026-08-22T05:50:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv3_4-2026",
    question: "A solid sample is suspected to be impure benzoic acid. What experimental heating profile confirms that the sample is IMPURE?",
    options: [
      { text: "It begins melting below the pure literature melting point (122°C) and melts gradually over a wide temperature range (e.g. 114–119°C)", isCorrect: true },
      { text: "It melts sharply at exactly 122.0°C" },
      { text: "It boils sharply at 249°C without decomposing" },
      { text: "It dissolves in water at 20°C" }
    ],
    correctAnswer: 0,
    explanation: "* Pure substances melt sharply at one precise temperature.\n* Impurities disrupt the crystal lattice, causing the substance to melt at a lower temperature and over a broad temperature range.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q464",
    createdAt: "2026-08-22T05:55:00Z"
  }
];
