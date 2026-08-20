import { Question } from '../../../types';

// Carboxylic Acids - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l4_lv3_1-2026",
    question: "A 25.0 cm³ sample of vinegar containing ethanoic acid is titrated with 0.100 mol/dm³ aqueous sodium hydroxide.\nIf 37.5 cm³ of NaOH is required for complete neutralisation: CH₃COOH + NaOH → CH₃COONa + H₂O,\nwhat is the concentration of ethanoic acid in the vinegar sample?",
    options: [
      { text: "0.150 mol/dm³", isCorrect: true },
      { text: "0.067 mol/dm³" },
      { text: "0.300 mol/dm³" },
      { text: "0.075 mol/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of NaOH $= 0.0375\\text{ dm}^3 \\times 0.100\\text{ mol/dm}^3 = 0.00375\\text{ mol}$.\n* Stoichiometric ratio of CH₃COOH : NaOH is 1 : 1.\n* Moles of CH₃COOH $= 0.00375\\text{ mol}$.\n* Concentration of CH₃COOH $= 0.00375 / 0.0250 = 0.150\\text{ mol/dm}^3$.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q423",
    createdAt: "2026-08-22T01:30:00Z"
  },
  {
    id: "ex_ci_u11_l4_lv3_2-2026",
    question: "Which two structural formulas represent carboxylic acid isomers sharing the molecular formula C₄H₈O₂?",
    options: [
      { text: "Butanoic acid (CH₃CH₂CH₂COOH) and 2-methylpropanoic acid (CH₃CH(CH₃)COOH)", isCorrect: true },
      { text: "Propanoic acid (CH₃CH₂COOH) and ethanoic acid (CH₃COOH)" },
      { text: "Ethyl ethanoate and methyl propanoate" },
      { text: "Butan-1-ol and butan-2-ol" }
    ],
    correctAnswer: 0,
    explanation: "* Both butanoic acid (straight-chain) and 2-methylpropanoic acid (branched) are carboxylic acids containing the –COOH group with identical formula C₄H₈O₂.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q424",
    createdAt: "2026-08-22T01:35:00Z"
  }
];
