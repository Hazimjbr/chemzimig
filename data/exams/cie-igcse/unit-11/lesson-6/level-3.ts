import { Question } from '../../../types';

// Esters - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l6_lv3_1-2026",
    question: "When ethyl ethanoate (CH₃COOC₂H₅) is heated under reflux with aqueous sodium hydroxide (alkaline hydrolysis / saponification), what are the two organic products formed?",
    options: [
      { text: "Sodium ethanoate (CH₃COONa) and ethanol (C₂H₅OH)", isCorrect: true },
      { text: "Ethanoic acid (CH₃COOH) and sodium ethoxide (C₂H₅ONa)" },
      { text: "Sodium methanoate (HCOONa) and propan-1-ol" },
      { text: "Ethene (C₂H₄) and sodium carbonate (Na₂CO₃)" }
    ],
    correctAnswer: 0,
    explanation: "* Base hydrolysis of an ester: Ester + NaOH → Carboxylate salt + Alcohol.\n* CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH (irreversible saponification).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q439",
    createdAt: "2026-08-22T03:30:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv3_2-2026",
    question: "How many ester isomers exist with the molecular formula C₃H₆O₂?",
    options: [
      { text: "2 (Methyl ethanoate and Ethyl methanoate)", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "4" }
    ],
    correctAnswer: 0,
    explanation: "* For C₃H₆O₂, the two possible esters are:\n  1. Methyl ethanoate: CH₃COOCH₃\n  2. Ethyl methanoate: HCOOCH₂CH₃\n* (Note: Propanoic acid C₂H₅COOH is a carboxylic acid isomer, not an ester).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q440",
    createdAt: "2026-08-22T03:35:00Z"
  }
];
