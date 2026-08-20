import { Question } from '../../../types';

// Air Quality & Climate - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u10_l3_lv2_1-2026",
    question: "How are oxides of nitrogen (NO and NO₂) formed in motor vehicle internal combustion engines?",
    options: [
      { text: "Atmospheric nitrogen (N₂) and oxygen (O₂) react together under the extremely high temperatures and sparks inside the cylinders", isCorrect: true },
      { text: "Nitrogen impurities in petrol burn during combustion" },
      { text: "Car exhausts react with rainwater" },
      { text: "Catalytic converters decompose air into nitrogen oxides" }
    ],
    correctAnswer: 0,
    explanation: "* Nitrogen gas is normally unreactive due to its strong triple bond.\n* Inside car engines, intense spark and high temperatures (~2000°C) provide the activation energy for N₂ and O₂ from air to react: N₂ + O₂ → 2NO.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q373",
    createdAt: "2026-08-21T20:20:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv2_2-2026",
    question: "Which chemical equation represents the simultaneous reduction of nitrogen monoxide and oxidation of carbon monoxide inside a vehicle catalytic converter?",
    options: [
      { text: "2CO(g) + 2NO(g) → 2CO₂(g) + N₂(g)", isCorrect: true },
      { text: "CO(g) + NO₂(g) → CO₂(g) + NO(g)" },
      { text: "C(s) + 2NO(g) → CO₂(g) + N₂(g)" },
      { text: "2CO(g) + O₂(g) → 2CO₂(g)" }
    ],
    correctAnswer: 0,
    explanation: "* Inside a catalytic converter (containing platinum, palladium, and rhodium catalysts), toxic CO is oxidised while toxic NO is reduced to harmless N₂ and CO₂: 2CO + 2NO → 2CO₂ + N₂.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q374",
    createdAt: "2026-08-21T20:25:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv2_3-2026",
    question: "In coal-fired power stations, how is sulfur dioxide (SO₂) gas removed from chimney emissions by Flue Gas Desulfurisation (FGD)?",
    options: [
      { text: "By spraying with a slurry of basic calcium carbonate (limestone) or calcium oxide to form calcium sulfite/sulfate", isCorrect: true },
      { text: "By cooling the flue gases until SO₂ condenses into solid ice" },
      { text: "By bubbling through concentrated hydrochloric acid" },
      { text: "By burning with excess methane gas" }
    ],
    correctAnswer: 0,
    explanation: "* Acidic SO₂ gas is scrubbed by reacting with basic calcium carbonate (CaCO₃) or quicklime (CaO): CaCO₃ + SO₂ → CaSO₃ + CO₂, preventing acid rain formation.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q375",
    createdAt: "2026-08-21T20:30:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv2_4-2026",
    question: "Which of the following describes the mechanism of the greenhouse effect in the Earth's atmosphere?",
    options: [
      { text: "The Earth's surface absorbs short-wavelength solar radiation and re-emits longer-wavelength infrared radiation, which is absorbed and re-radiated by greenhouse gases (CO₂ and CH₄)", isCorrect: true },
      { text: "Greenhouse gases reflect ultraviolet light directly back into space" },
      { text: "Greenhouse gases undergo nuclear fusion to generate heat in the troposphere" },
      { text: "Ozone absorbs visible light and turns into methane gas" }
    ],
    correctAnswer: 0,
    explanation: "* Short-wave UV and visible light from the sun penetrate the atmosphere and warm the Earth's surface.\n* The surface re-emits thermal energy as longer-wavelength infrared (IR) radiation.\n* Greenhouse gases (CO₂, CH₄, H₂O vapour) absorb this IR radiation and trap thermal energy in the atmosphere.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q376",
    createdAt: "2026-08-21T20:35:00Z"
  }
];
