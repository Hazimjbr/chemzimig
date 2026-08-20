import { Question } from '../../../types';

// Hydrogen-Oxygen Fuel Cells - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u4_l4_lv1_1-2026",
    question: "What is the main chemical product formed in a hydrogen-oxygen fuel cell?",
    options: [
      { text: "Carbon dioxide" },
      { text: "Water", isCorrect: true },
      { text: "Hydrogen peroxide" },
      { text: "Sulfur dioxide" }
    ],
    correctAnswer: 1,
    explanation: "* In a hydrogen-oxygen fuel cell, hydrogen and oxygen react chemically to generate electricity.\n* The only chemical product of this reaction is water (H₂O), making it a clean energy source.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q93",
    createdAt: "2026-08-20T17:00:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv1_2-2026",
    question: "A simple cell consists of two metals dipped in an electrolyte. Which combination of metals produces the highest voltage?",
    options: [
      { text: "Copper and zinc", isCorrect: true },
      { text: "Copper and iron" },
      { text: "Copper and copper" },
      { text: "Copper and silver" }
    ],
    correctAnswer: 0,
    explanation: "* The voltage of a simple cell depends on the difference in reactivity between the two metals.\n* The greater the difference in reactivity, the higher the voltage produced.\n* Out of the given choices, the gap in reactivity between copper and zinc is the largest, resulting in the highest voltage.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q94",
    createdAt: "2026-08-20T17:05:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv1_3-2026",
    question: "What is a major advantage of using hydrogen-oxygen fuel cells instead of burning fossil fuels in power stations?",
    options: [
      { text: "They produce greenhouse gases slowly" },
      { text: "They do not produce carbon dioxide or acidic gases", isCorrect: true },
      { text: "Hydrogen is very easy and cheap to store as a gas" },
      { text: "They have a low efficiency compared to steam turbines" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen-oxygen fuel cells are highly efficient and produce only water as a byproduct.\n* Unlike fossil fuels, they do not release carbon dioxide (greenhouse gas) or acidic pollutants like sulfur dioxide and nitrogen oxides.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q95",
    createdAt: "2026-08-20T17:10:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv1_4-2026",
    question: "In a simple chemical cell, what is the direction of electron flow in the external circuit?",
    options: [
      { text: "From the more reactive metal to the less reactive metal", isCorrect: true },
      { text: "From the less reactive metal to the more reactive metal" },
      { text: "From the cathode to the anode" },
      { text: "From the positive terminal to the negative terminal" }
    ],
    correctAnswer: 0,
    explanation: "* In a simple cell, the more reactive metal loses electrons more readily and forms positive ions.\n* These electrons flow through the external wire to the less reactive metal.\n* Therefore, electron flow is from the more reactive metal (negative electrode) to the less reactive metal (positive electrode).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q96",
    createdAt: "2026-08-20T17:15:00Z"
  }
];
