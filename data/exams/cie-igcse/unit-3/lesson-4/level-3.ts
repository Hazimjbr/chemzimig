import { Question } from '../../../types';

// Gas Volumes - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u3_l4_lv3_1-2026",
    question: "When 20 cm³ of propane (C₃H₈) is mixed with 120 cm³ of oxygen gas and ignited, complete combustion occurs:\nC₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)\nWhat is the total volume of gas remaining at room temperature and pressure (r.t.p.) after the reaction?\n(Assume water is liquid at r.t.p.; all gas volumes measured at r.t.p.)",
    options: [
      { text: "60 cm³" },
      { text: "80 cm³", isCorrect: true },
      { text: "120 cm³" },
      { text: "140 cm³" }
    ],
    correctAnswer: 1,
    explanation: "* Molar ratio is 1 C₃H₈ : 5 O₂ : 3 CO₂.\n* Propane is the limiting reactant: 20 cm³ of propane reacts with $20 \\times 5 = 100\\text{ cm}^3$ of oxygen gas.\n* Excess oxygen remaining $= 120 - 100 = 20\\text{ cm}^3$.\n* Volume of CO₂ gas produced $= 20 \\times 3 = 60\\text{ cm}^3$.\n* Water is liquid at r.t.p., so its volume is negligible.\n* Total gas volume remaining $= \\text{excess O}_2 + \\text{CO}_2 \\text{ produced} = 20 + 60 = 80\\text{ cm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q45",
    createdAt: "2026-08-20T12:50:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_2-2026",
    question: "A hydrocarbon gas has a density of 1.25 g/dm³ at r.t.p.\nWhat is the relative molecular mass ($M_r$) of this gas?\n(Given: Molar volume of gas $= 24\\text{ dm}^3\\text{/mol}$ at r.t.p.)",
    options: [
      { text: "16" },
      { text: "28" },
      { text: "30", isCorrect: true },
      { text: "44" }
    ],
    correctAnswer: 2,
    explanation: "* Density is the mass of 1 dm³ of gas.\n* The relative molecular mass ($M_r$) represents the mass of 1 mole of gas (which occupies 24 dm³ at r.t.p.).\n* $M_r = \\text{Density} \\times 24 = 1.25 \\times 24 = 30$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q46",
    createdAt: "2026-08-20T12:55:00Z"
  },
  {
    id: "ex_ci_u3_l4_lv3_3-2026",
    question: "When 100 cm³ of hydrogen gas is exploded with 40 cm³ of oxygen gas, water is formed:\n2H₂(g) + O₂(g) → 2H₂O(g)\nWhat is the total volume of gas remaining at $120°\\text{C}$ (at which water is a gas) and constant pressure?\n(All gas volumes measured under same temperature and pressure)",
    options: [
      { text: "100 cm³", isCorrect: true },
      { text: "80 cm³" },
      { text: "120 cm³" },
      { text: "60 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Reaction ratio is 2 H₂ : 1 O₂ : 2 H₂O(g).\n* Oxygen is limiting: 40 cm³ of O₂ reacts with $40 \\times 2 = 80\\text{ cm}^3$ of H₂.\n* Excess H₂ remaining $= 100 - 80 = 20\\text{ cm}^3$.\n* Volume of H₂O(g) produced $= 40 \\times 2 = 80\\text{ cm}^3$.\n* Since the temperature is $120\\text{ }^\\circ\\text{C}$, water is gaseous and must be counted.\n* Total volume of gas remaining $= \\text{excess H}_2 + \\text{H}_2\\text{O(g)} = 20 + 80 = 100\\text{ cm}^3$.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q47",
    createdAt: "2026-08-20T13:00:00Z"
  }
];
