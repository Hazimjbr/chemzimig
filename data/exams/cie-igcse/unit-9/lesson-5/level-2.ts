import { Question } from '../../../types';

// Alloys - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u9_l5_lv2_1-2026",
    question: "Why is brass (an alloy of copper and zinc) significantly harder and stronger than pure copper?",
    options: [
      { text: "Zinc atoms have a different size to copper atoms, disrupting the regular layers of the lattice and preventing them from sliding easily over each other", isCorrect: true },
      { text: "Zinc forms strong covalent cross-links between copper atoms" },
      { text: "Zinc removes all delocalised electrons from copper" },
      { text: "Copper atoms turn into smaller positive ions in brass" }
    ],
    correctAnswer: 0,
    explanation: "* Pure copper has regular layers of identical sized atoms that slip and slide over each other easily under stress.\n* In brass, differently sized zinc atoms distort the lattice structure, making it much harder for layers to slide past each other.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q339",
    createdAt: "2026-08-21T17:15:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv2_2-2026",
    question: "How does increasing the percentage of carbon in plain carbon steel change its physical properties from mild steel (0.2% C) to high-carbon steel (1.5% C)?",
    options: [
      { text: "Hardness and strength increase, but malleability and ductility decrease (becomes more brittle)", isCorrect: true },
      { text: "It becomes softer and more flexible" },
      { text: "Its melting point becomes lower than room temperature" },
      { text: "It becomes completely immune to rusting" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing carbon content introduces more interstitial carbon atoms into the iron lattice, further pinning dislocations.\n* This makes high-carbon steel extremely hard and strong (ideal for cutting tools/drill bits), but less malleable and more brittle.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q340",
    createdAt: "2026-08-21T17:20:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv2_3-2026",
    question: "Why is pure copper preferred over brass for domestic electrical wiring?",
    options: [
      { text: "Pure copper has higher electrical conductivity and greater ductility than brass", isCorrect: true },
      { text: "Brass is an electrical insulator" },
      { text: "Pure copper is much harder and less flexible than brass" },
      { text: "Brass reacts violently with air" }
    ],
    correctAnswer: 0,
    explanation: "* In alloys, the irregular lattice scatters conduction electrons, slightly lowering electrical conductivity.\n* Pure copper has exceptionally high electrical conductivity and is ductile enough to be drawn into fine, flexible wires.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q341",
    createdAt: "2026-08-21T17:25:00Z"
  }
];
