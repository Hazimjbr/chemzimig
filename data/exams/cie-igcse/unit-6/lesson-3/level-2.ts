import { Question } from '../../../types';

// Catalysts - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l3_lv2_1-2026",
    question: "Catalytic converters in car exhaust systems use transition metal catalysts (platinum, palladium, rhodium) to convert polluting gases into less harmful substances.\nWhich reaction is catalyzed in a catalytic converter?",
    options: [
      { text: "2CO + 2NO → 2CO₂ + N₂", isCorrect: true },
      { text: "CO₂ + H₂O → CH₄ + O₂" },
      { text: "SO₂ + NO₂ → SO₃ + NO" },
      { text: "2C + O₂ → 2CO" }
    ],
    correctAnswer: 0,
    explanation: "* Catalytic converters catalyze the redox reaction between carbon monoxide and nitrogen monoxide to form harmless carbon dioxide and nitrogen gas: 2CO + 2NO → 2CO₂ + N₂.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q176",
    createdAt: "2026-08-21T00:15:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_2-2026",
    question: "Which industrial process is correctly matched with its specific transition metal or compound catalyst?",
    options: [
      { text: "Haber process (ammonia synthesis) → Finely divided iron (Fe)", isCorrect: true },
      { text: "Contact process (sulfuric acid) → Nickel (Ni)" },
      { text: "Hydrogenation of vegetable oils → Vanadium(V) oxide (V₂O₅)" },
      { text: "Cracking of long-chain alkanes → Manganese(IV) oxide (MnO₂)" }
    ],
    correctAnswer: 0,
    explanation: "* The Haber process uses finely divided iron (Fe) as catalyst.\n* The Contact process uses vanadium(V) oxide (V₂O₅).\n* Hydrogenation of alkenes/vegetable oils uses nickel (Ni).\n* Cracking uses alumina / silica catalysts.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q177",
    createdAt: "2026-08-21T00:20:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv2_3-2026",
    question: "Why does the rate of an enzyme-catalyzed reaction drop dramatically to zero when the temperature is raised above 60°C?",
    options: [
      { text: "The activation energy of the reaction becomes too negative" },
      { text: "The tertiary protein structure of the enzyme is denatured, destroying its active site", isCorrect: true },
      { text: "The substrate molecules lose all kinetic energy" },
      { text: "The enzyme evaporates out of the solution" }
    ],
    correctAnswer: 1,
    explanation: "* High temperatures break the delicate hydrogen and ionic bonds holding the enzyme's three-dimensional shape.\n* The active site is permanently altered (denaturation), preventing substrate binding.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q178",
    createdAt: "2026-08-21T00:25:00Z"
  }
];
