import { Question } from '../../../types';

// Extraction of Metals - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l3_lv3_1-2026",
    question: "During the electrolytic extraction of aluminium from molten Al₂O₃/cryolite, why do the graphite (carbon) anodes need to be replaced periodically?",
    options: [
      { text: "Oxygen gas released at the hot positive anodes reacts with the carbon, forming carbon dioxide gas and burning the anodes away", isCorrect: true },
      { text: "Aluminium metal coats the anodes and prevents current flow" },
      { text: "Cryolite dissolves the graphite anodes over time" },
      { text: "The anodes melt at the operating temperature of 950°C" }
    ],
    correctAnswer: 0,
    explanation: "* At the positive anode: 2O²⁻ → O₂ + 4e⁻.\n* At ~950°C, the liberated oxygen gas reacts with the carbon anode: C(s) + O₂(g) → CO₂(g), steadily consuming the graphite blocks.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q324",
    createdAt: "2026-08-21T15:35:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_2-2026",
    question: "What mass of pure iron (Fe, $A_r = 56$) can theoretically be extracted from 320 tonnes of pure hematite (Fe₂O₃, $M_r = 160$)?",
    options: [
      { text: "224 tonnes", isCorrect: true },
      { text: "112 tonnes" },
      { text: "160 tonnes" },
      { text: "280 tonnes" }
    ],
    correctAnswer: 0,
    explanation: "* Percentage of Fe in Fe₂O₃ $= (2 \\times 56 / 160) \\times 100\\% = (112 / 160) \\times 100\\% = 70\\%$.\n* Theoretical mass of Fe $= 0.70 \\times 320\\text{ tonnes} = 224\\text{ tonnes}$.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q325",
    createdAt: "2026-08-21T15:40:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv3_3-2026",
    question: "Which equation represents the cathodic half-reaction in the industrial extraction of aluminium?",
    options: [
      { text: "Al³⁺ + 3e⁻ → Al(l)", isCorrect: true },
      { text: "Al → Al³⁺ + 3e⁻" },
      { text: "2O²⁻ → O₂ + 4e⁻" },
      { text: "Al³⁺ + 3OH⁻ → Al(OH)₃" }
    ],
    correctAnswer: 0,
    explanation: "* At the negative graphite cathode (lining of the cell), aluminium ions gain electrons (reduction) to form molten aluminium: Al³⁺ + 3e⁻ → Al(l).",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q326",
    createdAt: "2026-08-21T15:45:00Z"
  }
];
