import { Question } from '../../../types';

// Periodic Trends - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l1_lv3_1-2026",
    question: "Why does silicon have the highest melting point of all elements in Period 3 (higher than sodium, magnesium, aluminium, and phosphorus)?",
    options: [
      { text: "Silicon has a giant covalent macromolecular structure with millions of strong covalent bonds that require massive energy to break", isCorrect: true },
      { text: "Silicon has the strongest metallic bonding due to 4 delocalised electrons" },
      { text: "Silicon contains ionic bonds between positive silicon ions and electrons" },
      { text: "Silicon has the highest molecular mass in Period 3" }
    ],
    correctAnswer: 0,
    explanation: "* Silicon forms a 3D giant tetrahedral covalent lattice (like diamond).\n* Breaking this lattice requires breaking very strong Si–Si covalent bonds throughout the entire structure, resulting in a very high melting point (~1414°C).",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q256",
    createdAt: "2026-08-21T08:35:00Z"
  },
  {
    id: "ex_ci_u8_l1_lv3_2-2026",
    question: "Across Period 3, the melting points of the non-metals follow the order: sulfur (S₈) > phosphorus (P₄) > chlorine (Cl₂) > argon (Ar).\nWhat is the explanation for this order?",
    options: [
      { text: "Larger molecules with more electrons have stronger instantaneous dipole (van der Waals) intermolecular forces", isCorrect: true },
      { text: "Covalent bonds within sulfur molecules are weaker than in argon atoms" },
      { text: "Sulfur forms metallic bonds in solid state" },
      { text: "Argon forms diatomic molecules that repel each other" }
    ],
    correctAnswer: 0,
    explanation: "* S₈ has 128 electrons, P₄ has 60 electrons, Cl₂ has 34 electrons, and Ar has 18 electrons.\n* As the molecular size and number of electrons increase, the strength of weak intermolecular attractions (van der Waals forces) increases, requiring more thermal energy to melt.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q257",
    createdAt: "2026-08-21T08:40:00Z"
  },
  {
    id: "ex_ci_u8_l1_lv3_3-2026",
    question: "An element Q forms an ionic chloride with the formula QCl₂ and a basic oxide QO. Element Q reacts vigorously with cold water to release hydrogen gas.\nWhich element could Q be?",
    options: [
      { text: "Calcium (Ca)", isCorrect: true },
      { text: "Potassium (K)" },
      { text: "Aluminium (Al)" },
      { text: "Sulfur (S)" }
    ],
    correctAnswer: 0,
    explanation: "* Forming QCl₂ and QO indicates an element in Group II with a +2 oxidation state (e.g. Ca²⁺).\n* Reaction with cold water confirms a reactive alkaline earth metal (Calcium: Ca + 2H₂O → Ca(OH)₂ + H₂).",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q258",
    createdAt: "2026-08-21T08:45:00Z"
  }
];
