import { Question } from '../../../types';

// Strong and Weak Acids and Bases - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u7_l5_lv1_1-2026",
    question: "What is the definition of a strong acid in aqueous solution?",
    options: [
      { text: "An acid that completely ionises / dissociates in aqueous solution to produce H⁺ ions", isCorrect: true },
      { text: "An acid that contains very little water and a high concentration of solute" },
      { text: "An acid that only partially ionises in aqueous solution" },
      { text: "An acid that cannot react with reactive metals" }
    ],
    correctAnswer: 0,
    explanation: "* A strong acid (e.g. HCl, HNO₃, H₂SO₄) completely dissociates into ions in water: $\\text{HCl}(aq) \\rightarrow \\text{H}^+(aq) + \\text{Cl}^-(aq)$.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q240",
    createdAt: "2026-08-21T07:00:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv1_2-2026",
    question: "Which of the following is an example of a weak organic acid?",
    options: [
      { text: "Ethanoic acid (vinegar), CH₃COOH", isCorrect: true },
      { text: "Hydrochloric acid, HCl" },
      { text: "Nitric acid, HNO₃" },
      { text: "Sulfuric acid, H₂SO₄" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanoic acid (CH₃COOH) is a weak carboxylic acid that only partially dissociates into ions in water: CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q241",
    createdAt: "2026-08-21T07:05:00Z"
  },
  {
    id: "ex_ci_u7_l5_lv1_3-2026",
    question: "In the Brønsted–Lowry theory, what are an acid and a base defined as?",
    options: [
      { text: "An acid is a proton ($H^+$) donor; a base is a proton ($H^+$) acceptor", isCorrect: true },
      { text: "An acid is a proton acceptor; a base is a proton donor" },
      { text: "An acid is an electron donor; a base is an electron acceptor" },
      { text: "An acid is an oxygen donor; a base is an oxygen acceptor" }
    ],
    correctAnswer: 0,
    explanation: "* Under Brønsted–Lowry acid-base theory:\n  - An acid is a proton (H⁺) donor.\n  - A base is a proton (H⁺) acceptor.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q242",
    createdAt: "2026-08-21T07:10:00Z"
  }
];
