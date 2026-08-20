import { Question } from '../../../types';

// Electroplating - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l3_lv2_1-2026",
    question: "When aqueous copper(II) sulfate is electrolysed using copper electrodes instead of carbon electrodes, what is observed at the anode?",
    options: [
      { text: "Oxygen gas bubbles off" },
      { text: "Copper anode dissolves and decreases in mass", isCorrect: true },
      { text: "Copper deposits on the anode" },
      { text: "Sulfate ions are discharged" }
    ],
    correctAnswer: 1,
    explanation: "* When active copper electrodes are used, the copper anode itself participates in the reaction.\n* Instead of discharging OH⁻ or SO₄²⁻ ions, copper atoms in the anode lose electrons to become Cu²⁺ ions: Cu(s) → Cu²⁺(aq) + 2e⁻.\n* Consequently, the copper anode dissolves and decreases in mass.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q85",
    createdAt: "2026-08-20T16:20:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv2_2-2026",
    question: "In the purification of copper by electrolysis, what are the compositions of the anode and cathode?",
    options: [
      { text: "Anode: Pure copper; Cathode: Impure copper" },
      { text: "Anode: Impure copper; Cathode: Pure copper", isCorrect: true },
      { text: "Anode: Carbon; Cathode: Pure copper" },
      { text: "Anode: Impure copper; Cathode: Carbon" }
    ],
    correctAnswer: 1,
    explanation: "* To purify copper, the positive anode is made of impure copper (which dissolves into solution).\n* The negative cathode is made of a thin sheet of pure copper, where pure Cu²⁺ ions deposit as pure copper metal.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q86",
    createdAt: "2026-08-20T16:25:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv2_3-2026",
    question: "During the electrolysis of aqueous copper(II) sulfate using copper electrodes, what happens to the intensity of the blue colour of the electrolyte?",
    options: [
      { text: "It fades until the solution becomes colourless" },
      { text: "It remains unchanged", isCorrect: true },
      { text: "It becomes darker blue" },
      { text: "It turns green" }
    ],
    correctAnswer: 1,
    explanation: "* Copper atoms dissolve at the anode: Cu(s) → Cu²⁺(aq) + 2e⁻.\n* Copper ions deposit at the cathode: Cu²⁺(aq) + 2e⁻ → Cu(s).\n* The rate at which Cu²⁺ ions enter the solution at the anode equals the rate at which they leave at the cathode.\n* Therefore, the concentration of Cu²⁺ ions remains constant, and the blue color intensity does not change.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q87",
    createdAt: "2026-08-20T16:30:00Z"
  },
  {
    id: "ex_ci_u4_l3_lv2_4-2026",
    question: "Which of the following correct half-equations represents the reaction occurring at the anode during the refining of copper?",
    options: [
      { text: "Cu²⁺ + 2e⁻ → Cu" },
      { text: "Cu → Cu²⁺ + 2e⁻", isCorrect: true },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" },
      { text: "2H₂O → O₂ + 4H⁺ + 4e⁻" }
    ],
    correctAnswer: 1,
    explanation: "* At the positive anode during copper refining, copper atoms from the impure anode lose electrons (oxidation) and dissolve as copper ions:\n  Cu(s) → Cu²⁺(aq) + 2e⁻.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q88",
    createdAt: "2026-08-20T16:35:00Z"
  }
];
