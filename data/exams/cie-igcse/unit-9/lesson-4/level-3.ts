import { Question } from '../../../types';

// Uses of Metals & Rusting - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l4_lv3_1-2026",
    question: "Why does an aluminium object NOT continuously corrode away like iron, even though aluminium is a more reactive metal than iron?",
    options: [
      { text: "Aluminium oxide (Al₂O₃) forms an impermeable, tightly adherent non-porous layer that seals the surface, whereas rust is porous and flakes off, exposing fresh iron to corrosion", isCorrect: true },
      { text: "Aluminium metal reacts with atmospheric nitrogen to form a protective polymer" },
      { text: "Aluminium has no mobile electrons on its surface" },
      { text: "Iron forms a volatile oxide that evaporates" }
    ],
    correctAnswer: 0,
    explanation: "* Al₂O₃ has a crystal volume nearly identical to aluminium, adhering tightly and forming an airtight barrier that stops further oxidation.\n* In contrast, iron rust (Fe₂O₃·xH₂O) is brittle and porous, continually flaking away to expose fresh underlying metal until the iron is completely destroyed.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q333",
    createdAt: "2026-08-21T16:30:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv3_2-2026",
    question: "In an experiment to measure the percentage of oxygen in air, 100 cm³ of air is trapped in a gas syringe over wet iron wool. After several days, the iron wool turns rusty and the gas volume decreases to a constant value.\nWhat is the final volume of gas remaining in the syringe at r.t.p.?",
    options: [
      { text: "79 cm³", isCorrect: true },
      { text: "21 cm³" },
      { text: "50 cm³" },
      { text: "100 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Air contains approximately 21% oxygen by volume.\n* Rusting consumes all the oxygen ($100 \\times 0.21 = 21\\text{ cm}^3$), leaving the unreactive nitrogen and noble gases ($100 - 21 = 79\\text{ cm}^3$).",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q334",
    createdAt: "2026-08-21T16:35:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv3_3-2026",
    question: "In electroplating a steel spoon with a protective and decorative layer of silver:\nWhich electrode arrangement and electrolyte must be used?",
    options: [
      { text: "Cathode: steel spoon; Anode: pure silver rod; Electrolyte: aqueous silver nitrate", isCorrect: true },
      { text: "Cathode: pure silver rod; Anode: steel spoon; Electrolyte: dilute sulfuric acid" },
      { text: "Cathode: steel spoon; Anode: carbon rod; Electrolyte: molten silver chloride" },
      { text: "Cathode: copper spoon; Anode: platinum rod; Electrolyte: silver oxide solid" }
    ],
    correctAnswer: 0,
    explanation: "* The object to be plated is always the CATHODE (negative electrode) where $Ag^+$ ions gain electrons: Ag⁺ + e⁻ → Ag(s).\n* The ANODE (positive electrode) is pure silver which dissolves to replenish ions: Ag(s) → Ag⁺ + e⁻.\n* The electrolyte is an aqueous solution containing $Ag^+$ ions.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q335",
    createdAt: "2026-08-21T16:40:00Z"
  }
];
