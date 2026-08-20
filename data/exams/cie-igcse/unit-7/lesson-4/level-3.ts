import { Question } from '../../../types';

// Identification of Ions and Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l4_lv3_1-2026",
    question: "A student tests an unknown salt solution Z:\n1. Sodium hydroxide and aluminium foil are added, and the mixture is warmed gently. A gas is evolved that turns damp red litmus paper blue.\n2. When aqueous sodium hydroxide is added dropwise, a green precipitate forms which dissolves in excess NaOH to form a green solution.\nWhich ions are present in salt Z?",
    options: [
      { text: "Chromium(III) ions (Cr³⁺) and nitrate ions (NO₃⁻)", isCorrect: true },
      { text: "Iron(II) ions (Fe²⁺) and ammonium ions (NH₄⁺)" },
      { text: "Iron(II) ions (Fe²⁺) and nitrate ions (NO₃⁻)" },
      { text: "Copper(II) ions (Cu²⁺) and carbonate ions (CO₃²⁻)" }
    ],
    correctAnswer: 0,
    explanation: "* Warming with NaOH and aluminium foil reduces nitrate ions (NO₃⁻) to ammonia gas (turns red litmus blue).\n* Cr³⁺ reacts with NaOH to give a grey-green precipitate of Cr(OH)₃ that dissolves in excess NaOH to form a dark green solution.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q237",
    createdAt: "2026-08-21T06:35:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_2-2026",
    question: "How can sulfate ions (SO₄²⁻) and sulfite ions (SO₃²⁻) in separate test-tubes be distinguished experimentally?",
    options: [
      { text: "Add dilute hydrochloric acid and warm; sulfite produces sulfur dioxide gas (turns acidified KMnO₄ colourless), while sulfate produces no gas", isCorrect: true },
      { text: "Add aqueous barium nitrate; only sulfate forms a white precipitate" },
      { text: "Add aqueous silver nitrate; only sulfite forms a yellow precipitate" },
      { text: "Add aluminium foil and sodium hydroxide; only sulfate produces ammonia" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfite ions react with dilute acids upon warming to release sulfur dioxide gas: SO₃²⁻(aq) + 2H⁺(aq) → SO₂(g) + H₂O(l).\n* SO₂ is a reducing gas that decolourises acidified potassium manganate(VII).\n* Sulfate ions do not react with dilute acid to produce gas.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q238",
    createdAt: "2026-08-21T06:40:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv3_3-2026",
    question: "Why MUST dilute nitric acid (HNO₃) be added before aqueous silver nitrate (AgNO₃) when testing for halide ions (Cl⁻, Br⁻, I⁻)?",
    options: [
      { text: "To react with and remove any carbonate ions (CO₃²⁻) which would otherwise form a false-positive white precipitate of silver carbonate", isCorrect: true },
      { text: "To oxidise chloride ions to chlorine gas" },
      { text: "To act as a catalyst for silver halide precipitate formation" },
      { text: "To increase the solubility of silver chloride" }
    ],
    correctAnswer: 0,
    explanation: "* Carbonate ions react with Ag⁺ to form insoluble white silver carbonate (Ag₂CO₃), mimicking silver chloride.\n* Acidifying with HNO₃ decomposes carbonates into CO₂ and water (2H⁺ + CO₃²⁻ → H₂O + CO₂), preventing false positives.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q239",
    createdAt: "2026-08-21T06:45:00Z"
  }
];
