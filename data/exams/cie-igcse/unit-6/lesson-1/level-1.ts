import { Question } from '../../../types';

// Rate of Reaction - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u6_l1_lv1_1-2026",
    question: "Which piece of apparatus is most suitable for measuring the volume of carbon dioxide gas produced over time during a reaction?",
    options: [
      { text: "Gas syringe", isCorrect: true },
      { text: "Pipette" },
      { text: "Burette" },
      { text: "Condenser" }
    ],
    correctAnswer: 0,
    explanation: "* A gas syringe is designed specifically to collect and accurately measure volumes of evolving gases over timed intervals.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q153",
    createdAt: "2026-08-20T22:00:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv1_2-2026",
    question: "Why does the total mass of a conical flask containing calcium carbonate and hydrochloric acid decrease as the reaction proceeds?",
    options: [
      { text: "Calcium chloride dissolves in water" },
      { text: "Carbon dioxide gas escapes from the open flask into the air", isCorrect: true },
      { text: "Hydrochloric acid evaporates quickly" },
      { text: "The temperature of the flask increases" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction equation is: CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g).\n* As the carbon dioxide gas is produced, it leaves the open flask, causing a measurable loss in mass over time.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q154",
    createdAt: "2026-08-20T22:05:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv1_3-2026",
    question: "In the reaction between sodium thiosulfate and hydrochloric acid, the rate of reaction is determined by measuring the time taken for a black cross under the beaker to disappear.\nWhich substance causes the solution to become cloudy?",
    options: [
      { text: "Sulfur dioxide" },
      { text: "Sodium chloride" },
      { text: "Solid sulfur precipitate", isCorrect: true },
      { text: "Water" }
    ],
    correctAnswer: 2,
    explanation: "* The equation is: Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + SO₂(g) + S(s).\n* Fine particles of insoluble yellow/white sulfur precipitate form in the solution, making it turbid and eventually obscuring the cross.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q155",
    createdAt: "2026-08-20T22:10:00Z"
  }
];
