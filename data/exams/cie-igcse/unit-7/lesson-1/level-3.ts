import { Question } from '../../../types';

// Acids and Bases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l1_lv3_1-2026",
    question: "What is the simplest ionic equation representing the neutralisation of any strong aqueous acid by a strong aqueous alkali?",
    options: [
      { text: "H⁺(aq) + OH⁻(aq) → H₂O(l)", isCorrect: true },
      { text: "Na⁺(aq) + Cl⁻(aq) → NaCl(s)" },
      { text: "2H⁺(aq) + O²⁻(s) → H₂O(l)" },
      { text: "H⁺(aq) + H₂O(l) → H₃O⁺(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* In any aqueous neutralization between strong acids and alkalis, the spectator ions (e.g. Na⁺ and Cl⁻) remain dissolved.\n* The only actual chemical change is: H⁺(aq) + OH⁻(aq) → H₂O(l).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q208",
    createdAt: "2026-08-21T03:35:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_2-2026",
    question: "A 25.0 cm³ sample of 0.100 mol/dm³ sulfuric acid (H₂SO₄) is titrated with 0.100 mol/dm³ potassium hydroxide (KOH).\nWhat volume of potassium hydroxide is required to reach the complete neutralisation endpoint?",
    options: [
      { text: "50.0 cm³", isCorrect: true },
      { text: "25.0 cm³" },
      { text: "12.5 cm³" },
      { text: "100.0 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* H₂SO₄ is a diprotic (dibasic) acid: H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O.\n* Moles of H₂SO₄ $= 0.025 \\times 0.100 = 0.0025\\text{ mol}$.\n* Moles of KOH needed $= 2 \\times 0.0025 = 0.0050\\text{ mol}$.\n* Volume of KOH $= 0.0050 / 0.100 = 0.050\\text{ dm}^3 = 50.0\\text{ cm}^3$.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q209",
    createdAt: "2026-08-21T03:40:00Z"
  },
  {
    id: "ex_ci_u7_l1_lv3_3-2026",
    question: "During a pH titration of 25 cm³ of 0.1 mol/dm³ HCl with 0.1 mol/dm³ NaOH:\nWhich statement correctly describes the change in pH around the equivalence point (25 cm³ of NaOH added)?",
    options: [
      { text: "There is a sharp, vertical rise in pH from approximately pH 3 to pH 11 with the addition of a single drop of NaOH", isCorrect: true },
      { text: "The pH increases uniformly in a straight line from pH 1 to pH 14" },
      { text: "The pH stays constant at pH 7 throughout the entire addition" },
      { text: "The pH suddenly drops from pH 12 to pH 2" }
    ],
    correctAnswer: 0,
    explanation: "* For strong acid - strong alkali titrations, the pH curve shows a steep vertical inflection near the equivalence point (roughly pH 3 to pH 11).\n* Because the pH is logarithmic, a tiny addition of alkali causes a massive change in hydrogen ion concentration.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q210",
    createdAt: "2026-08-21T03:45:00Z"
  }
];
