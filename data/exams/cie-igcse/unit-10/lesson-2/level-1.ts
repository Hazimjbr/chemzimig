import { Question } from '../../../types';

// Fertilisers & Ammonia - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u10_l2_lv1_1-2026",
    question: "Which three essential plant nutrient elements are supplied by 'NPK' commercial fertilisers?",
    options: [
      { text: "Nitrogen (N), Phosphorus (P), and Potassium (K)", isCorrect: true },
      { text: "Sodium (Na), Phosphorus (P), and Krypton (K)" },
      { text: "Nitrogen (N), Lead (Pb), and Potassium (K)" },
      { text: "Nickel (Ni), Platinum (Pt), and Potassium (K)" }
    ],
    correctAnswer: 0,
    explanation: "* NPK fertilisers provide:\n  - Nitrogen (N) for protein synthesis and green leaf growth.\n  - Phosphorus (P) for root growth and energy transfer.\n  - Potassium (K) for disease resistance, flowers, and fruit development.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q357",
    createdAt: "2026-08-21T19:00:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv1_2-2026",
    question: "What are the raw material sources of nitrogen (N₂) and hydrogen (H₂) used in the industrial Haber process to make ammonia?",
    options: [
      { text: "Nitrogen from the air (fractional distillation); Hydrogen from natural gas (methane reacted with steam)", isCorrect: true },
      { text: "Nitrogen from burning coal; Hydrogen from electrolysis of air" },
      { text: "Nitrogen from ammonia decomposition; Hydrogen from water" },
      { text: "Nitrogen from limestone; Hydrogen from petroleum fractional distillation" }
    ],
    correctAnswer: 0,
    explanation: "* Nitrogen gas is extracted directly from air via fractional distillation of liquid air.\n* Hydrogen gas is obtained from methane (natural gas) by steam reforming: CH₄ + H₂O → CO + 3H₂.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q358",
    createdAt: "2026-08-21T19:05:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv1_3-2026",
    question: "What are the standard industrial operating conditions for the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
    options: [
      { text: "Temperature: 450°C, Pressure: 200 atm (20,000 kPa), Catalyst: Iron", isCorrect: true },
      { text: "Temperature: 100°C, Pressure: 1 atm, Catalyst: Copper" },
      { text: "Temperature: 1000°C, Pressure: 500 atm, Catalyst: Nickel" },
      { text: "Temperature: 450°C, Pressure: 1 atm, Catalyst: Vanadium(V) oxide" }
    ],
    correctAnswer: 0,
    explanation: "* The compromise conditions for the Haber process are:\n  - Temperature: ~450°C\n  - Pressure: ~200 atm (200 bar)\n  - Catalyst: Finely divided iron (Fe).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q359",
    createdAt: "2026-08-21T19:10:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv1_4-2026",
    question: "When an ammonium salt (such as ammonium chloride, NH₄Cl) is warmed with aqueous sodium hydroxide, what gas is evolved?",
    options: [
      { text: "Ammonia gas (NH₃), which turns damp red litmus paper blue", isCorrect: true },
      { text: "Chlorine gas (Cl₂), which bleaches litmus paper" },
      { text: "Hydrogen gas (H₂), which pops with a lighted splint" },
      { text: "Nitrogen dioxide gas (NO₂), which is brown and acidic" }
    ],
    correctAnswer: 0,
    explanation: "* Any ammonium salt reacts with strong alkali upon warming to displace ammonia: NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l).\n* Pungent alkaline ammonia gas turns damp red litmus paper blue.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q360",
    createdAt: "2026-08-21T19:15:00Z"
  }
];
