import { Question } from '../../../types';

// Extraction of Metals - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u9_l3_lv2_1-2026",
    question: "What is the main reducing agent that reduces iron(III) oxide (Fe₂O₃) to molten iron in the upper zones of the Blast Furnace?",
    options: [
      { text: "Carbon monoxide gas (CO)", isCorrect: true },
      { text: "Solid calcium carbonate (CaCO₃)" },
      { text: "Carbon dioxide gas (CO₂)" },
      { text: "Molten slag (CaSiO₃)" }
    ],
    correctAnswer: 0,
    explanation: "* Although coke (C) is the initial source, it reacts with CO₂ to form carbon monoxide: C + CO₂ → 2CO.\n* Gaseous CO is the primary reducing agent that reduces iron ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q320",
    createdAt: "2026-08-21T15:15:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_2-2026",
    question: "How does limestone remove sandy impurities (silicon dioxide, SiO₂) in the blast furnace to form molten slag?",
    options: [
      { text: "Limestone thermally decomposes to basic calcium oxide (CaO), which reacts with acidic SiO₂ to form molten calcium silicate (CaSiO₃)", isCorrect: true },
      { text: "Limestone dissolves silica into water vapour" },
      { text: "Limestone oxidises silicon dioxide into pure silicon" },
      { text: "Limestone acts as an electrode that attracts sand particles" }
    ],
    correctAnswer: 0,
    explanation: "* Limestone decomposes: CaCO₃(s) → CaO(s) + CO₂(g).\n* Basic CaO neutralises acidic silica: CaO(s) + SiO₂(s) → CaSiO₃(l) (molten slag, which floats on dense molten iron).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q321",
    createdAt: "2026-08-21T15:20:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_3-2026",
    question: "Why is molten cryolite (Na₃AlF₆) added to purified aluminium oxide (Al₂O₃) during the Hall–Héroult electrolytic extraction?",
    options: [
      { text: "To dissolve alumina, dramatically lowering the melting point from ~2045°C to ~950°C and improving electrical conductivity", isCorrect: true },
      { text: "To prevent the carbon anodes from burning away" },
      { text: "To increase the boiling point of aluminium metal" },
      { text: "To neutralise acidic fumes of fluorine gas" }
    ],
    correctAnswer: 0,
    explanation: "* Pure alumina melts at over 2045°C, requiring enormous energy.\n* Dissolving it in molten cryolite lowers the working temperature to ~950°C, drastically saving energy costs and providing good electrical conductivity.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q322",
    createdAt: "2026-08-21T15:25:00Z"
  },
  {
    id: "ex_ci_u9_l3_lv2_4-2026",
    question: "Which of the following is an economic and environmental advantage of recycling aluminium cans compared to extracting new aluminium from bauxite ore?",
    options: [
      { text: "Recycling uses only about 5% of the energy required for primary extraction from bauxite, conserving fossil fuels and bauxite reserves", isCorrect: true },
      { text: "Recycled aluminium is stronger than newly extracted aluminium" },
      { text: "Recycling eliminates the need for any melting process" },
      { text: "Recycled aluminium does not form an oxide coating" }
    ],
    correctAnswer: 0,
    explanation: "* Recycling aluminium consumes ~95% less energy than extracting it from bauxite via electrolysis, greatly cutting electricity costs, mining impact, and greenhouse emissions.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q323",
    createdAt: "2026-08-21T15:30:00Z"
  }
];
