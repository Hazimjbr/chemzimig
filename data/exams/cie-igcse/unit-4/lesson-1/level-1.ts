import { Question } from '../../../types';

// Electrolysis - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u4_l1_lv1_1-2026",
    question: "During the electrolysis of molten lead(II) bromide, PbBr₂, which product is formed at the cathode?",
    options: [
      { text: "Lead", isCorrect: true },
      { text: "Bromine" },
      { text: "Oxygen" },
      { text: "Hydrogen" }
    ],
    correctAnswer: 0,
    explanation: "* In electrolysis, the cathode is the negative electrode.\n* Molten lead(II) bromide contains Pb²⁺ ions and Br⁻ ions.\n* The positive lead ions (Pb²⁺) are attracted to the negative cathode, where they gain electrons to form lead metal (Pb).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q57",
    createdAt: "2026-08-20T14:00:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv1_2-2026",
    question: "What is the name of the positive electrode in an electrolysis cell?",
    options: [
      { text: "Cathode" },
      { text: "Anode", isCorrect: true },
      { text: "Electrolyte" },
      { text: "Cation" }
    ],
    correctAnswer: 1,
    explanation: "* In electrolysis, the positive electrode is called the anode.\n* The negative electrode is called the cathode.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q58",
    createdAt: "2026-08-20T14:05:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv1_3-2026",
    question: "Which of the following substances can conduct electricity by the movement of ions?",
    options: [
      { text: "Copper wire" },
      { text: "Graphite rod" },
      { text: "Molten sodium chloride", isCorrect: true },
      { text: "Liquid ethanol" }
    ],
    correctAnswer: 2,
    explanation: "* Molten sodium chloride contains free-moving Na⁺ and Cl⁻ ions that conduct electricity.\n* Copper and graphite conduct electricity via delocalised electrons.\n* Ethanol is a covalent molecular liquid and does not contain ions or free electrons.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q59",
    createdAt: "2026-08-20T14:10:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv1_4-2026",
    question: "What is observed at the anode during the electrolysis of molten lead(II) bromide?",
    options: [
      { text: "Silver grey shiny metal deposit" },
      { text: "Reddish-brown pungent fumes", isCorrect: true },
      { text: "Colourless gas that pops with a lighted splint" },
      { text: "Bubbles of a colourless gas that relights a glowing splint" }
    ],
    correctAnswer: 1,
    explanation: "* Bromide ions (Br⁻) move to the anode (positive electrode) and lose electrons to form bromine gas (Br₂).\n* Bromine gas is observed as reddish-brown fumes with a pungent smell.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q60",
    createdAt: "2026-08-20T14:15:00Z"
  }
];
