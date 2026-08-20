import { Question } from '../../../types';

// Air Quality & Climate - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u10_l3_lv3_1-2026",
    question: "Inside a three-way catalytic converter, which equation represents the complete oxidation of unburnt fuel hydrocarbons (represented as octane, C₈H₁₈)?",
    options: [
      { text: "2C₈H₁₈(g) + 25O₂(g) → 16CO₂(g) + 18H₂O(g)", isCorrect: true },
      { text: "C₈H₁₈(g) + 8O₂(g) → 8CO(g) + 9H₂(g)" },
      { text: "C₈H₁₈(g) + 4NO₂(g) → 8CO₂(g) + 2N₂(g) + 9H₂(g)" },
      { text: "C₈H₁₈(g) + 8O₂(g) → 8C(s) + 9H₂O(g)" }
    ],
    correctAnswer: 0,
    explanation: "* In a three-way catalytic converter, platinum and palladium catalyse the complete oxidation of unburnt volatile hydrocarbons into non-toxic carbon dioxide and water vapour: 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q377",
    createdAt: "2026-08-21T20:40:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv3_2-2026",
    question: "How does acid rain (containing dissolved sulfuric and nitric acids) damage aquatic ecosystems even in lakes without direct carbonate geology?",
    options: [
      { text: "Acidic water leaches toxic aluminium ions (Al³⁺) from surrounding soil into lakes, which damage fish gills and cause fish death", isCorrect: true },
      { text: "Acid rain causes all water in the lake to freeze at room temperature" },
      { text: "Acid rain removes dissolved nitrogen gas needed for fish gills" },
      { text: "Acid rain neutralises all algae, eliminating all bacteria" }
    ],
    correctAnswer: 0,
    explanation: "* When soil pH drops below ~4.5 due to acid rain, insoluble aluminium minerals dissolve into soluble $Al^{3+}$ ions.\n* Toxic aqueous $Al^{3+}$ leaches into lakes, precipitating on fish gills and causing suffocation.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q378",
    createdAt: "2026-08-21T20:45:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv3_3-2026",
    question: "What chemical reaction causes ocean acidification as atmospheric carbon dioxide concentrations rise?",
    options: [
      { text: "CO₂(g) dissolves in seawater to form carbonic acid (H₂CO₃), which dissociates to release H⁺ ions that react with and deplete carbonate ions (CO₃²⁻) needed for coral shells", isCorrect: true },
      { text: "CO₂ oxidises sodium chloride into chlorine gas" },
      { text: "CO₂ reacts with water to precipitate solid calcium metal" },
      { text: "CO₂ decomposes seawater into hydrogen and oxygen gases" }
    ],
    correctAnswer: 0,
    explanation: "* CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq).\n* Increased $H^+$ concentration lowers ocean pH and reacts with carbonate ions ($H^+ + CO_3^{2-} \\rightarrow HCO_3^-$), preventing corals and shellfish from forming calcium carbonate shells.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q379",
    createdAt: "2026-08-21T20:50:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv3_4-2026",
    question: "Why is methane (CH₄) considered a significantly more potent greenhouse gas than carbon dioxide (CO₂), even though it is present in much lower atmospheric concentrations?",
    options: [
      { text: "A molecule of methane has a much higher Global Warming Potential (GWP) because its C–H bonds absorb infrared radiation far more effectively than CO₂", isCorrect: true },
      { text: "Methane stays in the atmosphere for millions of years without decomposing" },
      { text: "Methane reacts with nitrogen to form nitrous oxide" },
      { text: "Methane reflects visible sunlight towards the Earth's surface" }
    ],
    correctAnswer: 0,
    explanation: "* Over a 20-year timescale, methane's Global Warming Potential is ~28–36 times greater than that of CO₂ due to its high efficiency at absorbing IR radiation at characteristic wavelengths.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q380",
    createdAt: "2026-08-21T20:55:00Z"
  }
];
