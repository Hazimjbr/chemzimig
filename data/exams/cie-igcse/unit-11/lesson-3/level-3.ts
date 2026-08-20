import { Question } from '../../../types';

// Alcohols - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l3_lv3_1-2026",
    question: "What is the structural formula difference between the two alcohol isomers propan-1-ol and propan-2-ol?",
    options: [
      { text: "In propan-1-ol the –OH group is bonded to an end carbon (CH₃CH₂CH₂OH), while in propan-2-ol it is bonded to the middle carbon (CH₃CH(OH)CH₃)", isCorrect: true },
      { text: "Propan-1-ol has a C=C double bond whereas propan-2-ol does not" },
      { text: "Propan-2-ol has two separate –OH groups" },
      { text: "Propan-1-ol is a carboxylic acid" }
    ],
    correctAnswer: 0,
    explanation: "* Both have molecular formula C₃H₈O.\n* Propan-1-ol: $CH_3-CH_2-CH_2-OH$ (primary alcohol).\n* Propan-2-ol: $CH_3-CH(OH)-CH_3$ (secondary alcohol).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q415",
    createdAt: "2026-08-22T00:30:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv3_2-2026",
    question: "In a brewing experiment, 90.0 g of glucose ($M_r = 180$) is fermented completely by yeast: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.\nWhat is the maximum theoretical mass of ethanol ($M_r = 46$) that can be produced?",
    options: [
      { text: "46.0 g", isCorrect: true },
      { text: "92.0 g" },
      { text: "23.0 g" },
      { text: "18.0 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of glucose $= 90.0 / 180 = 0.50\\text{ mol}$.\n* From equation, 1 mole glucose yields 2 moles ethanol.\n* Moles of ethanol $= 0.50 \\times 2 = 1.0\\text{ mol}$.\n* Mass of ethanol $= 1.0 \\times 46 = 46.0\\text{ g}$.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q416",
    createdAt: "2026-08-22T00:35:00Z"
  }
];
