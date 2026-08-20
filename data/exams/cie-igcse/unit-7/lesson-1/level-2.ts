import { Question } from '../../../types';

// Acids and Bases - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u7_l1_lv2_1-2026",
    question: "What are the colours of methyl orange indicator and thymolphthalein indicator in dilute hydrochloric acid and dilute sodium hydroxide?",
    options: [
      { text: "Methyl orange: red in acid, yellow in alkali; Thymolphthalein: colourless in acid, blue in alkali", isCorrect: true },
      { text: "Methyl orange: yellow in acid, red in alkali; Thymolphthalein: blue in acid, colourless in alkali" },
      { text: "Methyl orange: red in acid, blue in alkali; Thymolphthalein: pink in acid, blue in alkali" },
      { text: "Methyl orange: orange in acid, green in alkali; Thymolphthalein: yellow in acid, blue in alkali" }
    ],
    correctAnswer: 0,
    explanation: "* According to the 2026 CIE IGCSE syllabus:\n  - Methyl orange is red in acidic solution and yellow in alkaline solution.\n  - Thymolphthalein is colourless in acidic solution and blue in alkaline solution.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q204",
    createdAt: "2026-08-21T03:15:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv2_2-2026",
    question: "A farmer finds that the soil in a field is too acidic (pH 4.8) for growing crops.\nWhich substance can be added to the soil to neutralize the acidity without making it excessively alkaline?",
    options: [
      { text: "Calcium hydroxide (slaked lime) or calcium carbonate (limestone)", isCorrect: true },
      { text: "Sodium hydroxide pellets" },
      { text: "Ammonium sulfate" },
      { text: "Concentrated sulfuric acid" }
    ],
    correctAnswer: 0,
    explanation: "* Calcium oxide (quicklime), calcium hydroxide (slaked lime), and calcium carbonate (limestone) are bases that neutralize excess soil acidity safely without causing extreme caustic alkalinity.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q205",
    createdAt: "2026-08-21T03:20:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv2_3-2026",
    question: "When excess solid copper(II) carbonate is added to dilute nitric acid, which three products are formed?",
    options: [
      { text: "Copper(II) nitrate, water, and carbon dioxide", isCorrect: true },
      { text: "Copper(II) nitrate, hydrogen, and carbon monoxide" },
      { text: "Copper(II) sulfate, water, and carbon dioxide" },
      { text: "Copper(II) oxide, nitrogen dioxide, and oxygen" }
    ],
    correctAnswer: 0,
    explanation: "* The general reaction is: $\\text{Metal carbonate} + \\text{Acid} \\rightarrow \\text{Salt} + \\text{Water} + \\text{Carbon dioxide}$.\n* CuCO₃(s) + 2HNO₃(aq) → Cu(NO₃)₂(aq) + H₂O(l) + CO₂(g).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q206",
    createdAt: "2026-08-21T03:25:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv2_4-2026",
    question: "Why does adding slaked lime (Ca(OH)₂) at the same time as ammonium nitrate fertiliser to soil reduce the effectiveness of the fertiliser?",
    options: [
      { text: "They react to produce ammonia gas which escapes into the air, wasting nitrogen", isCorrect: true },
      { text: "Slaked lime oxidises ammonium ions to nitrate ions immediately" },
      { text: "Calcium ions precipitate ammonium ions as an insoluble solid" },
      { text: "The soil becomes too cold for plant roots due to an endothermic reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Alkalis react with ammonium salts when mixed to displace ammonia gas: Ca(OH)₂ + 2NH₄NO₃ → Ca(NO₃)₂ + 2H₂O + 2NH₃(g).\n* The escaped ammonia gas causes a significant loss of essential nitrogen fertiliser from the soil.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q207",
    createdAt: "2026-08-21T03:30:00Z"
  }
];
