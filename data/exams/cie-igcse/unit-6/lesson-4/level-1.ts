import { Question } from '../../../types';

// Reversible Reactions and Equilibrium - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u6_l4_lv1_1-2026",
    question: "Which of the following describes a system at dynamic equilibrium in a closed container?",
    options: [
      { text: "The forward and reverse reactions have completely stopped" },
      { text: "The rate of the forward reaction equals the rate of the reverse reaction, and concentrations remain constant", isCorrect: true },
      { text: "The mass of products is exactly double the mass of reactants" },
      { text: "All reactants have been converted completely into products" }
    ],
    correctAnswer: 1,
    explanation: "* At dynamic equilibrium, both forward and reverse reactions continue at equal rates, so the concentrations of all reactants and products remain constant.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q182",
    createdAt: "2026-08-21T01:00:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv1_2-2026",
    question: "When water is added to white anhydrous copper(II) sulfate powder, what colour change is observed and what type of reaction occurs?",
    options: [
      { text: "Turns blue; exothermic reversible reaction", isCorrect: true },
      { text: "Turns pink; endothermic irreversible reaction" },
      { text: "Turns green; redox reaction" },
      { text: "Turns yellow; precipitation reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous copper(II) sulfate is white: CuSO₄(s) + 5H₂O(l) ⇌ CuSO₄·5H₂O(s) (hydrated, blue).\n* The forward hydration is an exothermic reversible reaction used as a chemical test for the presence of water.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q183",
    createdAt: "2026-08-21T01:05:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv1_3-2026",
    question: "What colour change occurs when cobalt(II) chloride paper is used to test for water?",
    options: [
      { text: "Turns from blue to pink", isCorrect: true },
      { text: "Turns from pink to blue" },
      { text: "Turns from white to blue" },
      { text: "Turns from colourless to purple" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous cobalt(II) chloride is blue.\n* When hydrated by water, it forms pink hydrated cobalt(II) chloride (CoCl₂·6H₂O).",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q184",
    createdAt: "2026-08-21T01:10:00Z"
  }
];
