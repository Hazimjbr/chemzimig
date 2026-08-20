import { Question } from '../../../types';

// Electrolytic Cells - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u4_l2_lv1_1-2026",
    question: "When concentrated aqueous sodium chloride is electrolysed using inert electrodes, what gas is produced at the cathode?",
    options: [
      { text: "Sodium" },
      { text: "Chlorine" },
      { text: "Hydrogen", isCorrect: true },
      { text: "Oxygen" }
    ],
    correctAnswer: 2,
    explanation: "* Concentrated aqueous sodium chloride contains Na⁺, H⁺, Cl⁻, and OH⁻ ions.\n* At the negative cathode, both Na⁺ and H⁺ ions are attracted.\n* Since hydrogen is lower than sodium in the reactivity series, H⁺ ions are preferentially discharged to form hydrogen gas (H₂).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q69",
    createdAt: "2026-08-20T15:00:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv1_2-2026",
    question: "During the electrolysis of dilute sulfuric acid using inert electrodes, what is formed at the anode?",
    options: [
      { text: "Hydrogen gas" },
      { text: "Oxygen gas", isCorrect: true },
      { text: "Sulfur dioxide gas" },
      { text: "Sulfur solid" }
    ],
    correctAnswer: 1,
    explanation: "* Dilute sulfuric acid contains H⁺, OH⁻, and SO₄²⁻ ions.\n* At the positive anode, OH⁻ and SO₄²⁻ ions are attracted.\n* Hydroxide ions (OH⁻) are discharged more easily than sulfate ions, forming oxygen gas (O₂) and water.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q70",
    createdAt: "2026-08-20T15:05:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv1_3-2026",
    question: "Which ions are present in dilute aqueous copper(II) sulfate solution?",
    options: [
      { text: "Cu²⁺ and SO₄²⁻ only" },
      { text: "Cu²⁺, SO₄²⁻, H⁺, and OH⁻", isCorrect: true },
      { text: "Cu²⁺, SO₄²⁻, and H⁺ only" },
      { text: "Cu²⁺, SO₄²⁻, and OH⁻ only" }
    ],
    correctAnswer: 1,
    explanation: "* The solution contains copper(II) sulfate, which dissolves to give Cu²⁺ and SO₄²⁻ ions.\n* Water also partially dissociates to yield H⁺ and OH⁻ ions.\n* Therefore, all four ions are present in the solution.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q71",
    createdAt: "2026-08-20T15:10:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv1_4-2026",
    question: "What is observed at the anode during the electrolysis of concentrated hydrochloric acid using inert electrodes?",
    options: [
      { text: "Bubbles of a green pungent gas", isCorrect: true },
      { text: "Bubbles of a colourless odourless gas" },
      { text: "Reddish-brown liquid layer" },
      { text: "A pink solid deposit" }
    ],
    correctAnswer: 0,
    explanation: "* Concentrated hydrochloric acid contains a high concentration of chloride ions (Cl⁻).\n* Chloride ions are preferentially discharged at the anode to form chlorine gas (Cl₂).\n* Chlorine is a pale green-yellow gas with a sharp, pungent choking smell.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q72",
    createdAt: "2026-08-20T15:15:00Z"
  }
];
