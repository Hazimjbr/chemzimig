import { Question } from '../../../types';

// Oxides - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u7_l2_lv3_1-2026",
    question: "Which sequence correctly shows the trend in acid-base character of Period 3 oxides from left to right across the Periodic Table (Na₂O → MgO → Al₂O₃ → SiO₂ → P₄O₁₀ → SO₃)?",
    options: [
      { text: "Strongly basic → Basic → Amphoteric → Weakly acidic → Strongly acidic", isCorrect: true },
      { text: "Acidic → Amphoteric → Basic → Neutral" },
      { text: "Amphoteric → Basic → Neutral → Acidic" },
      { text: "Neutral → Basic → Amphoteric → Acidic" }
    ],
    correctAnswer: 0,
    explanation: "* Period 3 elements transition from metallic to non-metallic across the period:\n  - Na₂O and MgO are basic oxides.\n  - Al₂O₃ is an amphoteric oxide.\n  - SiO₂, P₄O₁₀, and SO₃ are acidic oxides with acidity increasing to the right.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q217",
    createdAt: "2026-08-21T04:30:00Z"
  },
  {
    id: "ex_ci_u7_l2_lv3_2-2026",
    question: "Silicon dioxide (SiO₂) is insoluble in water and dilute hydrochloric acid, but dissolves when heated with hot concentrated sodium hydroxide.\nWhat does this chemical behaviour prove about silicon dioxide?",
    options: [
      { text: "It is an acidic giant covalent oxide", isCorrect: true },
      { text: "It is a basic ionic oxide" },
      { text: "It is a neutral simple molecular oxide" },
      { text: "It is an amphoteric transition metal oxide" }
    ],
    correctAnswer: 0,
    explanation: "* SiO₂ reacts with strong bases (like hot NaOH) to form sodium silicate (Na₂SiO₃) and water: SiO₂ + 2NaOH → Na₂SiO₃ + H₂O.\n* This reaction with a base proves that SiO₂ is an acidic oxide, despite being insoluble in water due to its giant covalent lattice.",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q218",
    createdAt: "2026-08-21T04:35:00Z"
  },
  {
    id: "ex_ci_u7_l2_lv3_3-2026",
    question: "Which of the following balanced chemical equations correctly represents the reaction of aluminium oxide acting as an acid when reacting with aqueous sodium hydroxide?",
    options: [
      { text: "Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)", isCorrect: true },
      { text: "Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)" },
      { text: "Al₂O₃(s) + 2NaOH(aq) → 2NaAlO₂(s) + H₂(g)" },
      { text: "Al₂O₃(s) + 3H₂O(l) → 2Al(OH)₃(s)" }
    ],
    correctAnswer: 0,
    explanation: "* When reacting with a strong alkali, Al₂O₃ acts as an acidic oxide, forming sodium aluminate / sodium tetrahydroxoaluminate: Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄].\n* (Reaction with HCl demonstrates its basic behaviour).",
    level: 3,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q219",
    createdAt: "2026-08-21T04:40:00Z"
  }
];
