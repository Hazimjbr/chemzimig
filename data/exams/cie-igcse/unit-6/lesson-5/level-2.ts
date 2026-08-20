import { Question } from '../../../types';

// Redox Reactions - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l5_lv2_1-2026",
    question: "What is the oxidation state of manganese in potassium manganate(VII), KMnO₄?",
    options: [
      { text: "+7", isCorrect: true },
      { text: "+6" },
      { text: "+4" },
      { text: "+2" }
    ],
    correctAnswer: 0,
    explanation: "* In KMnO₄, K has an oxidation state of +1 and each O has -2.\n* Let $x$ be the oxidation state of Mn: $(+1) + x + 4(-2) = 0 \\implies 1 + x - 8 = 0 \\implies x = +7$.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q195",
    createdAt: "2026-08-21T02:15:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_2-2026",
    question: "When acidified aqueous potassium manganate(VII) is added to a solution containing a reducing agent (such as aqueous iron(II) sulfate or sulfur dioxide), what colour change is observed?",
    options: [
      { text: "Purple to colourless", isCorrect: true },
      { text: "Colourless to purple" },
      { text: "Orange to green" },
      { text: "Brown to colourless" }
    ],
    correctAnswer: 0,
    explanation: "* Acidified potassium manganate(VII) is a powerful oxidising agent that contains deep purple MnO₄⁻ ions.\n* When it reacts with a reducing agent, MnO₄⁻ is reduced to almost colourless Mn²⁺ ions.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q196",
    createdAt: "2026-08-21T02:20:00Z"
  },
  {
    id: "ex_ci_u6_l5_lv2_3-2026",
    question: "When aqueous potassium iodide (KI) is added to a solution containing an oxidising agent (such as chlorine water or acidified hydrogen peroxide), what colour change takes place?",
    options: [
      { text: "Colourless to red-brown", isCorrect: true },
      { text: "Purple to colourless" },
      { text: "Blue to pink" },
      { text: "Yellow to dark green" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium iodide contains colourless iodide ions (I⁻).\n* An oxidising agent oxidises I⁻ to aqueous iodine (I₂), turning the solution red-brown (or dark blue if starch indicator is present).",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q197",
    createdAt: "2026-08-21T02:25:00Z"
  }
];
