import { Question } from '../../../types';

// Fertilisers & Ammonia - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u10_l2_lv2_1-2026",
    question: "The synthesis of ammonia is exothermic: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = -92 kJ/mol.\nWhy is an intermediate temperature of 450°C chosen rather than a low temperature of 50°C?",
    options: [
      { text: "At 50°C the rate of reaction is far too slow to be commercially viable, so 450°C is a compromise between acceptable yield and practical rate", isCorrect: true },
      { text: "At 50°C ammonia gas would decompose back into elements" },
      { text: "At 50°C the iron catalyst would melt" },
      { text: "At 450°C the percentage yield of ammonia is 100%" }
    ],
    correctAnswer: 0,
    explanation: "* Lower temperatures favour the exothermic forward reaction giving higher equilibrium yield, but collision rates are extremely slow.\n* 450°C represents an optimum compromise between a reasonable rate of reaching equilibrium and acceptable yield (~15% per pass).",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q361",
    createdAt: "2026-08-21T19:20:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_2-2026",
    question: "How is pure liquid ammonia separated from unreacted nitrogen and hydrogen gases in the Haber process?",
    options: [
      { text: "The gas mixture is cooled under pressure; ammonia condenses easily into a liquid due to its higher boiling point, and unreacted N₂/H₂ are recycled", isCorrect: true },
      { text: "The mixture is filtered through paper" },
      { text: "The mixture is passed over hot copper oxide" },
      { text: "Nitrogen and hydrogen dissolve in water while ammonia does not" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia (-33°C bp) condenses to a liquid under high pressure far more easily than N₂ (-196°C) and H₂ (-253°C).\n* Liquid ammonia is tapped off and the unreacted gases are recycled back into the reactor.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q362",
    createdAt: "2026-08-21T19:25:00Z"
  },
  {
    id: "ex_ci_u9_l2_lv2_3-2026",
    question: "Why should farmers NEVER add slaked lime (calcium hydroxide, Ca(OH)₂) and ammonium fertilisers (e.g. ammonium nitrate) to agricultural soil at the same time?",
    options: [
      { text: "The alkaline lime reacts with ammonium ions to release ammonia gas into the atmosphere, causing loss of vital nitrogen from the soil", isCorrect: true },
      { text: "The mixture explodes when exposed to sunlight" },
      { text: "Calcium hydroxide converts nitrate ions into poisonous cyanide" },
      { text: "The mixture turns the soil into insoluble rock" }
    ],
    correctAnswer: 0,
    explanation: "* Base + ammonium salt reaction: Ca(OH)₂ + 2NH₄NO₃ → Ca(NO₃)₂ + 2NH₃(g) + 2H₂O.\n* The valuable nitrogen is lost as escaping ammonia gas rather than being absorbed by plant roots.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q363",
    createdAt: "2026-08-21T19:30:00Z"
  },
  {
    id: "ex_ci_u10_l2_lv2_4-2026",
    question: "What is the correct sequence of events during eutrophication caused by excess fertiliser runoff into lakes?",
    options: [
      { text: "Algal bloom forms → blocks sunlight → aquatic plants die → aerobic bacteria decompose plants and consume dissolved O₂ → fish suffocate", isCorrect: true },
      { text: "Fertilisers poison fish directly → bacteria bloom → water evaporates" },
      { text: "Algae produce toxic acid → water turns acidic → plants dissolve" },
      { text: "Water boiling point rises → fish overheat → algae decompose" }
    ],
    correctAnswer: 0,
    explanation: "* Leached nitrates and phosphates trigger rapid surface algae growth (algal bloom).\n* Sunlight is blocked, killing submerged plants.\n* Decomposing aerobic bacteria multiply rapidly and deplete dissolved oxygen, suffocating fish and aquatic life.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q364",
    createdAt: "2026-08-21T19:35:00Z"
  }
];
