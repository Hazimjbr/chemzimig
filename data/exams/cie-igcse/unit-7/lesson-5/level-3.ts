import { Question } from '../../../types';

// Strong and Weak Acids and Bases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l5_lv3_1-2026",
    question: "Which statement correctly distinguishes between the 'strength' and 'concentration' of an acidic solution?",
    options: [
      { text: "Strength refers to the fraction of acid molecules dissociated into ions in water, while concentration refers to the amount of acid dissolved per unit volume", isCorrect: true },
      { text: "Strength is measured in mol/dm³, while concentration is measured on the pH scale" },
      { text: "A concentrated acid is always a strong acid" },
      { text: "A dilute acid always has a higher pH than a weak acid" }
    ],
    correctAnswer: 0,
    explanation: "* Acid strength is an intrinsic property describing the degree of ionisation in water (strong = complete, weak = partial).\n* Concentration describes the amount of acid solute dissolved in a given volume of solution (concentrated = many moles/dm³, dilute = few moles/dm³).\n* For instance, 10 mol/dm³ ethanoic acid is a concentrated weak acid, while 0.001 mol/dm³ HCl is a dilute strong acid.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q246",
    createdAt: "2026-08-21T07:30:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_2-2026",
    question: "In the reversible proton-transfer reaction: NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\nWhich species act as Brønsted–Lowry bases in the forward and reverse directions, respectively?",
    options: [
      { text: "Forward base: NH₃; Reverse base: OH⁻", isCorrect: true },
      { text: "Forward base: H₂O; Reverse base: NH₄⁺" },
      { text: "Forward base: NH₃; Reverse base: NH₄⁺" },
      { text: "Forward base: H₂O; Reverse base: OH⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In the forward reaction, NH₃ accepts a proton from H₂O to form NH₄⁺ (NH₃ is the base).\n* In the reverse reaction, OH⁻ accepts a proton from NH₄⁺ to reform H₂O (OH⁻ is the base).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q247",
    createdAt: "2026-08-21T07:35:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv3_3-2026",
    question: "A 20.0 cm³ sample of vinegar containing ethanoic acid (CH₃COOH) requires 24.0 cm³ of 0.50 mol/dm³ sodium hydroxide (NaOH) for complete neutralisation.\nWhat is the concentration of ethanoic acid in the vinegar in g/dm³?\n(Given: $M_r$ of CH₃COOH = 60)",
    options: [
      { text: "36.0 g/dm³", isCorrect: true },
      { text: "0.60 g/dm³" },
      { text: "18.0 g/dm³" },
      { text: "72.0 g/dm³" }
    ],
    correctAnswer: 0,
    explanation: "* Equation: CH₃COOH + NaOH → CH₃COONa + H₂O.\n* Moles of NaOH $= 0.024 \\times 0.50 = 0.012\\text{ mol}$.\n* Moles of CH₃COOH $= 0.012\\text{ mol}$.\n* Concentration of CH₃COOH in mol/dm³ $= 0.012 / 0.020 = 0.60\\text{ mol/dm}^3$.\n* Concentration in g/dm³ $= 0.60 \\times 60 = 36.0\\text{ g/dm}^3$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q248",
    createdAt: "2026-08-21T07:40:00Z"
  }
];
