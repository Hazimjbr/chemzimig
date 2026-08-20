import { Question } from '../../../types';

// Redox Reactions - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l5_lv3_1-2026",
    question: "When chlorine gas is bubbled into cold dilute aqueous sodium hydroxide: Cl₂ + 2NaOH → NaCl + NaClO + H₂O\nWhat happens to the oxidation state of chlorine in this reaction?",
    options: [
      { text: "It is simultaneously oxidised from 0 to +1 in NaClO and reduced from 0 to -1 in NaCl (disproportionation)", isCorrect: true },
      { text: "It is only reduced from 0 to -1" },
      { text: "It is only oxidised from 0 to +1" },
      { text: "Its oxidation state remains 0 in all products" }
    ],
    correctAnswer: 0,
    explanation: "* In Cl₂, chlorine has oxidation state 0.\n* In NaCl, Cl has oxidation state -1 (reduction).\n* In NaClO, Cl has oxidation state +1 (oxidation).\n* When the same element is simultaneously oxidised and reduced, the reaction is called a disproportionation redox reaction.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q198",
    createdAt: "2026-08-21T02:30:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_2-2026",
    question: "Which of the following chemical reactions is NOT a redox reaction?",
    options: [
      { text: "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", isCorrect: true },
      { text: "2Mg(s) + CO₂(g) → 2MgO(s) + C(s)" },
      { text: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)" },
      { text: "2FeCl₂(aq) + Cl₂(g) → 2FeCl₃(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* In the precipitation reaction AgNO₃ + NaCl → AgCl + NaNO₃, all ions retain their exact oxidation states (Ag⁺ is +1, Na⁺ is +1, Cl⁻ is -1, N in NO₃⁻ is +5, O is -2).\n* The others all involve changes in oxidation numbers (electron transfers).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q199",
    createdAt: "2026-08-21T02:35:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv3_3-2026",
    question: "Consider the ionic half-equation: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\nWhat change in oxidation state does each chromium atom undergo?",
    options: [
      { text: "Reduced from +6 to +3", isCorrect: true },
      { text: "Reduced from +7 to +3" },
      { text: "Oxidised from +3 to +6" },
      { text: "Reduced from +12 to +3" }
    ],
    correctAnswer: 0,
    explanation: "* In dichromate Cr₂O₇²⁻: $2x + 7(-2) = -2 \\implies 2x - 14 = -2 \\implies 2x = +12 \\implies x = +6$.\n* In Cr³⁺, the oxidation state is +3.\n* Each chromium atom gains 3 electrons and decreases in oxidation number from +6 to +3 (reduction).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q200",
    createdAt: "2026-08-21T02:40:00Z"
  }
];
