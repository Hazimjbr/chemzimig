import { Question } from '../../../types';

// Alcohols - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u11_l3_lv2_1-2026",
    question: "What colour change is observed when ethanol is heated with acidified potassium manganate(VII) (KMnO₄) to oxidise it to ethanoic acid?",
    options: [
      { text: "Purple to colourless", isCorrect: true },
      { text: "Orange to green" },
      { text: "Colourless to pink" },
      { text: "Blue to red" }
    ],
    correctAnswer: 0,
    explanation: "* Acidified potassium manganate(VII) is a strong oxidising agent: $MnO_4^-$ (purple) is reduced to $Mn^{2+}$ (colourless) as ethanol (C₂H₅OH) is oxidised to ethanoic acid (CH₃COOH).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q412",
    createdAt: "2026-08-22T00:15:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv2_2-2026",
    question: "Comparing the industrial manufacture of ethanol by fermentation versus the direct catalytic hydration of ethene:\nWhich statement correctly identifies an ADVANTAGE of catalytic hydration?",
    options: [
      { text: "It is a fast, continuous process producing pure ethanol with a high yield", isCorrect: true },
      { text: "It uses renewable agricultural raw materials" },
      { text: "It operates at room temperature and standard atmospheric pressure" },
      { text: "It produces no greenhouse gases during energy generation" }
    ],
    correctAnswer: 0,
    explanation: "* Hydration of ethene is continuous, rapid, and yields pure ethanol without needing fractional distillation.\n* (In contrast, fermentation uses renewable crops and lower temperatures, but is a slow batch process producing impure dilute ethanol).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q413",
    createdAt: "2026-08-22T00:20:00Z"
  },
  {
    id: "ex_ci_u11_l3_lv2_3-2026",
    question: "What is the balanced equation for the complete combustion of ethanol in a clean supply of air?",
    options: [
      { text: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)", isCorrect: true },
      { text: "C₂H₅OH(l) + 2O₂(g) → 2CO₂(g) + 3H₂(g)" },
      { text: "2C₂H₅OH(l) + 5O₂(g) → 4CO₂(g) + 6H₂O(l)" },
      { text: "C₂H₅OH(l) + O₂(g) → CH₃COOH(aq) + H₂O(l)" }
    ],
    correctAnswer: 0,
    explanation: "* 1 mole of C₂H₅OH has 2 carbons (producing 2CO₂) and 6 hydrogens (producing 3H₂O).\n* Oxygen balance: $(2 \\times 2) + 3 = 7$ O atoms on right; subtracting 1 O from C₂H₅OH leaves 6 O atoms, needing 3O₂: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q414",
    createdAt: "2026-08-22T00:25:00Z"
  }
];
