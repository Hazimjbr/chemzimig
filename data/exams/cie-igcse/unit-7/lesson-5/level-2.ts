import { Question } from '../../../types';

// Strong and Weak Acids and Bases - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u7_l5_lv2_1-2026",
    question: "A 0.10 mol/dm³ solution of hydrochloric acid (HCl) has a pH of 1.0, while a 0.10 mol/dm³ solution of ethanoic acid (CH₃COOH) has a pH of 2.9.\nWhich statement correctly explains this difference in pH?",
    options: [
      { text: "HCl is completely dissociated into H⁺ ions, giving a higher [H⁺], whereas CH₃COOH is only partially dissociated", isCorrect: true },
      { text: "HCl has a higher concentration of solute particles than CH₃COOH" },
      { text: "Ethanoic acid is more concentrated than hydrochloric acid" },
      { text: "Ethanoic acid is an alkali rather than an acid" }
    ],
    correctAnswer: 0,
    explanation: "* Both solutions have the same molar concentration (0.10 mol/dm³).\n* Because HCl is a strong acid, it dissociates 100%, producing a much higher concentration of H⁺ ions (lower pH) than weak ethanoic acid.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q243",
    createdAt: "2026-08-21T07:15:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv2_2-2026",
    question: "Why does 1.0 mol/dm³ hydrochloric acid conduct electricity significantly better than 1.0 mol/dm³ ethanoic acid?",
    options: [
      { text: "Hydrochloric acid contains a much higher concentration of mobile ions in solution", isCorrect: true },
      { text: "Hydrochloric acid contains free delocalised electrons" },
      { text: "Ethanoic acid is a covalent gas with no water present" },
      { text: "Hydrochloric acid has a higher density than ethanoic acid" }
    ],
    correctAnswer: 0,
    explanation: "* Electrical conductivity in aqueous electrolytes depends on the concentration of mobile ions.\n* Full dissociation of HCl yields a higher ionic concentration than partial dissociation of CH₃COOH.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q244",
    createdAt: "2026-08-21T07:20:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv2_3-2026",
    question: "Equal masses of magnesium ribbon are added to separate beakers containing 50 cm³ of 0.1 mol/dm³ HCl and 50 cm³ of 0.1 mol/dm³ CH₃COOH.\nWhich statement comparing the two reactions is correct?",
    options: [
      { text: "The reaction with HCl fizzes more vigorously initially, but both reactions eventually produce the exact same total volume of hydrogen gas", isCorrect: true },
      { text: "The reaction with HCl produces twice the total volume of hydrogen gas compared to CH₃COOH" },
      { text: "The reaction with CH₃COOH is faster because it contains more hydrogen atoms per molecule" },
      { text: "Magnesium does not react with ethanoic acid" }
    ],
    correctAnswer: 0,
    explanation: "* HCl has a higher initial [H⁺], giving a faster initial rate (more vigorous effervescence).\n* Because the volumes and concentrations of monoprotic acids are equal (equal moles of available acid), the total moles and volume of H₂ produced at completion are identical.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q245",
    createdAt: "2026-08-21T07:25:00Z"
  }
];
