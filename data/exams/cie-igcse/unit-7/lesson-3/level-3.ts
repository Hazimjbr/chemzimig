import { Question } from '../../../types';

// Preparation of Salts - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv3_1-2026",
    question: "Why does the reaction between solid calcium carbonate and dilute sulfuric acid quickly stop, even when plenty of calcium carbonate and acid remain?",
    options: [
      { text: "An insoluble layer of calcium sulfate (CaSO₄) forms on the surface of the carbonate, preventing further acid contact", isCorrect: true },
      { text: "Sulfuric acid decomposes completely into sulfur dioxide gas" },
      { text: "Calcium carbonate turns into unreactive diamond" },
      { text: "Carbon dioxide gas creates high pressure that stops the reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Calcium sulfate is sparingly soluble/insoluble in water.\n* It precipitates as a protective crust (passivation layer) covering the remaining unreacted CaCO₃ solid, halting the reaction rapidly.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q227",
    createdAt: "2026-08-21T05:35:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_2-2026",
    question: "A student prepares hydrated copper(II) sulfate crystals (CuSO₄·5H₂O, $M_r = 250$) from 8.0 g of copper(II) oxide (CuO, $M_r = 80$).\nIf the actual yield of crystals obtained is 18.75 g, what is the percentage yield?",
    options: [
      { text: "75.0%", isCorrect: true },
      { text: "50.0%" },
      { text: "90.0%" },
      { text: "25.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CuO $= 8.0 / 80 = 0.10\\text{ mol}$.\n* Theoretical moles of CuSO₄·5H₂O $= 0.10\\text{ mol}$.\n* Theoretical mass of CuSO₄·5H₂O $= 0.10 \\times 250 = 25.0\\text{ g}$.\n* Percentage yield $= (18.75 / 25.0) \\times 100\\% = 75.0\\%$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q228",
    createdAt: "2026-08-21T05:40:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv3_3-2026",
    question: "When 4.99 g of hydrated copper(II) sulfate (CuSO₄·xH₂O) is heated strongly to constant mass, 3.19 g of white anhydrous copper(II) sulfate (CuSO₄, $M_r = 159.5$) remains.\nWhat is the value of $x$ in the formula of the hydrated salt?\n(Given: $M_r$ of H₂O = 18)",
    options: [
      { text: "5", isCorrect: true },
      { text: "2" },
      { text: "7" },
      { text: "10" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of water lost $= 4.99 - 3.19 = 1.80\\text{ g}$.\n* Moles of CuSO₄ $= 3.19 / 159.5 = 0.020\\text{ mol}$.\n* Moles of H₂O $= 1.80 / 18 = 0.100\\text{ mol}$.\n* Mole ratio (H₂O : CuSO₄) $= 0.100 / 0.020 = 5 \\implies x = 5$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q229",
    createdAt: "2026-08-21T05:45:00Z"
  }
];
