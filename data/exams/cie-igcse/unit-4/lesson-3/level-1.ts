import { Question } from '../../../types';

// Electroplating - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u4_l3_lv1_1-2026",
    question: "When electroplating a steel spoon with copper, where should the spoon be placed?",
    options: [
      { text: "At the anode" },
      { text: "At the cathode", isCorrect: true },
      { text: "Dissolved in the electrolyte" },
      { text: "Suspended between the two electrodes" }
    ],
    correctAnswer: 1,
    explanation: "* In electroplating, the object to be coated (the steel spoon) is always made the negative electrode, which is the cathode.\n* Positive metal ions (Cu²⁺) are attracted to the cathode and gain electrons to deposit as metal on the object's surface.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q81",
    createdAt: "2026-08-20T16:00:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_2-2026",
    question: "In an experiment to electroplate a key with nickel, what material should be used for the anode?",
    options: [
      { text: "Steel" },
      { text: "Carbon (graphite)" },
      { text: "Pure nickel", isCorrect: true },
      { text: "Platinum" }
    ],
    correctAnswer: 2,
    explanation: "* In electroplating, the anode (positive electrode) must be made of the metal that is to be deposited.\n* To plate with nickel, a pure nickel anode is used, which dissolves during the process to replenish nickel ions in solution.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q82",
    createdAt: "2026-08-20T16:05:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_3-2026",
    question: "Which of the following is a common reason for electroplating metal objects?",
    options: [
      { text: "To make them dissolve faster" },
      { text: "To improve their electrical resistance" },
      { text: "To prevent corrosion and improve appearance", isCorrect: true },
      { text: "To increase their melting points" }
    ],
    correctAnswer: 2,
    explanation: "* Electroplating is widely used to coat cheaper, reactive metals with a thin layer of an unreactive/decorative metal (like chromium, silver, or gold).\n* This prevents rusting/corrosion and provides an attractive, shiny finish.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q83",
    createdAt: "2026-08-20T16:10:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv1_4-2026",
    question: "What type of electrolyte solution must be used when plating an iron ring with silver?",
    options: [
      { text: "Iron(II) sulfate solution" },
      { text: "Silver nitrate solution", isCorrect: true },
      { text: "Dilute sulfuric acid" },
      { text: "Sodium hydroxide solution" }
    ],
    correctAnswer: 1,
    explanation: "* The electrolyte solution used in electroplating must contain ions of the metal being plated.\n* To plate with silver, the solution must contain silver ions, such as aqueous silver nitrate (AgNO₃).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q84",
    createdAt: "2026-08-20T16:15:00Z"
  }
];
