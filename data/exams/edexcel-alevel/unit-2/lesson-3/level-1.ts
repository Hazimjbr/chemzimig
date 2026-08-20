import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l3_lv1_1-2026",
    question: "What is the definition of oxidation in terms of electron transfer and oxidation number?",
    options: [
      { text: "Gain of electrons and a decrease in oxidation number" },
      { text: "Loss of electrons and an increase in oxidation number", isCorrect: true },
      { text: "Gain of protons" },
      { text: "Loss of neutrons" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation is defined as the loss of electrons (OIL: Oxidation Is Loss), which corresponds directly to an increase in the oxidation state/number of an element.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q15",
    createdAt: "2026-07-23T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_2-2026",
    question: "What is the oxidation state of sulfur in the sulfate ion, $\\text{SO}_4^{2-}$?",
    options: [
      { text: "+2" },
      { text: "+4" },
      { text: "+6", isCorrect: true },
      { text: "+8" }
    ],
    correctAnswer: 2,
    explanation: "* Let oxidation state of S be $x$.\n* Four oxygens contribute $4 \\times (-2) = -8$.\n* Total charge on ion $= -2 \\implies x - 8 = -2 \\implies x = \\mathbf{+6}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q16",
    createdAt: "2026-07-23T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_3-2026",
    question: "What color is observed in a flame test for potassium ions (K⁺)?",
    options: [
      { text: "Crimson red" },
      { text: "Lilac (pale purple)", isCorrect: true },
      { text: "Persistent golden yellow" },
      { text: "Apple-green" }
    ],
    correctAnswer: 1,
    explanation: "* Lithium gives crimson red, sodium gives intense yellow, and potassium ions produce a characteristic **lilac** flame.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q13",
    createdAt: "2026-07-24T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_4-2026",
    question: "What is the general trend in the thermal stability of Group 2 carbonates (e.g., MgCO₃, CaCO₃, SrCO₃, BaCO₃) descending down the group?",
    options: [
      { text: "Thermal stability decreases down the group" },
      { text: "Thermal stability increases down the group (decomposition temperature increases)", isCorrect: true },
      { text: "All Group 2 carbonates decompose at the exact same temperature" },
      { text: "They do not decompose upon heating" }
    ],
    correctAnswer: 1,
    explanation: "* Descending Group 2, cation radius increases while maintaining a $2+$ charge, decreasing cation charge density and polarizing power.\n* Less distortion of the $\\text{CO}_3^{2-}$ anion makes the carbonate more thermally stable, requiring higher temperatures to decompose.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q16",
    createdAt: "2026-07-24T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_5-2026",
    question: "What is the physical appearance and state of pure iodine (I₂) at room temperature and pressure?",
    options: [
      { text: "Pale yellow gas" },
      { text: "Reddish-brown volatile liquid" },
      { text: "Shiny dark grey/black crystalline solid", isCorrect: true },
      { text: "Colorless gas" }
    ],
    correctAnswer: 2,
    explanation: "* Chlorine is a greenish-yellow gas, bromine is a reddish-brown liquid, and iodine is a shiny dark grey/black crystalline solid that sublimes to form a purple vapor.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q17",
    createdAt: "2026-07-25T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_6-2026",
    question: "When aqueous chlorine is added to an aqueous solution of potassium iodide (KI), what observation is made?",
    options: [
      { text: "No visible change occurs" },
      { text: "A white precipitate of potassium chloride forms" },
      { text: "The colorless solution turns brown due to the displacement and formation of aqueous iodine (I₂)", isCorrect: true },
      { text: "A pungent choking green gas is evolved" }
    ],
    correctAnswer: 2,
    explanation: "* Chlorine is a stronger oxidizing agent than iodine, displacing iodide ions: $\\text{Cl}_2\\text{(aq)} + 2\\text{I}^-\\text{(aq)} \\rightarrow 2\\text{Cl}^-\\text{(aq)} + \\text{I}_2\\text{(aq)}$.\n* Liberated iodine dissolves to turn the solution brown.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q14",
    createdAt: "2026-07-25T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_7-2026",
    question: "Which reagent is used in qualitative analysis to test for halide ions (Cl⁻, Br⁻, I⁻) in aqueous solution?",
    options: [
      { text: "Acidified potassium manganate(VII)" },
      { text: "Dilute nitric acid followed by aqueous silver nitrate (AgNO₃)", isCorrect: true },
      { text: "Aqueous sodium hydroxide followed by heating" },
      { text: "Barium chloride solution" }
    ],
    correctAnswer: 1,
    explanation: "* Aqueous silver nitrate acidified with dilute $\\text{HNO}_3$ precipitates silver halides: white $\\text{AgCl}$, cream $\\text{AgBr}$, and yellow $\\text{AgI}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q17",
    createdAt: "2026-07-26T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv1_8-2026",
    question: "What is the trend in solubility of Group 2 sulfates (e.g., MgSO₄ to BaSO₄) descending down Group 2?",
    options: [
      { text: "Solubility increases down the group" },
      { text: "Solubility decreases down the group (MgSO₄ is soluble, BaSO₄ is completely insoluble)", isCorrect: true },
      { text: "All Group 2 sulfates are insoluble" },
      { text: "Solubility remains completely constant" }
    ],
    correctAnswer: 1,
    explanation: "* Down Group 2, sulfate solubility decreases.\n* $\\text{MgSO}_4$ is freely soluble in water, whereas barium sulfate ($\\text{BaSO}_4$) is practically insoluble and used as a radio-contrast agent and test for sulfate ions.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q18",
    createdAt: "2026-07-26T10:00:00Z"
  }
];

