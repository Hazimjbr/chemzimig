import { Question } from '../../../types';

// Hydrogen-Oxygen Fuel Cells - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l4_lv3_1-2026",
    question: "In an alkaline hydrogen-oxygen fuel cell, potassium hydroxide (KOH) solution is used as the electrolyte. Which ionic equation represents the reaction taking place at the positive electrode (cathode)?",
    options: [
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻", isCorrect: true },
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O" },
      { text: "2H₂O + 2e⁻ → H₂ + 2OH⁻" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In alkaline conditions, oxygen gas is reduced at the positive cathode by reacting with water and gaining electrons to form hydroxide ions:\n  O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq).",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q101",
    createdAt: "2026-08-20T17:40:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_2-2026",
    question: "A simple cell is made by connecting a magnesium electrode and a copper electrode in dilute sulfuric acid.\nWhich of the following changes would result in a DECREASE in the cell voltage?",
    options: [
      { text: "Replacing the copper electrode with zinc", isCorrect: true },
      { text: "Replacing the magnesium electrode with calcium" },
      { text: "Replacing the copper electrode with silver" },
      { text: "Increasing the concentration of the sulfuric acid electrolyte" }
    ],
    correctAnswer: 0,
    explanation: "* The voltage of a simple cell depends on the gap in reactivity between the two metals.\n* Magnesium is highly reactive, and copper is unreactive. The gap is large.\n* Zinc is more reactive than copper (closer to magnesium), so replacing copper with zinc reduces the gap in reactivity between the two electrodes, thus decreasing the voltage.\n* Replacing magnesium with calcium (more reactive) or copper with silver (less reactive) increases the reactivity gap, which would increase the voltage.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q102",
    createdAt: "2026-08-20T17:45:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_3-2026",
    question: "In an acidic hydrogen-oxygen fuel cell (using phosphoric acid electrolyte), which half-equation represents the reduction reaction occurring at the positive electrode (cathode)?",
    options: [
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", isCorrect: true },
      { text: "2H₂O → O₂ + 4H⁺ + 4e⁻" },
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻" },
      { text: "2H⁺ + 2e⁻ → H₂" }
    ],
    correctAnswer: 0,
    explanation: "* In acidic conditions, hydrogen ions (H⁺) are present in high concentration in the electrolyte.\n* Oxygen gas reacts with H⁺ ions and gains electrons (reduction) at the cathode to form water:\n  O₂ + 4H⁺ + 4e⁻ → 2H₂O.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q103",
    createdAt: "2026-08-20T17:50:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv3_4-2026",
    question: "Which statement about hydrogen-oxygen fuel cells is NOT correct?",
    options: [
      { text: "They run continuously as long as fuel and oxygen are supplied" },
      { text: "They release energy directly as electrical energy" },
      { text: "They are electrochemical cells that convert chemical energy to electrical energy" },
      { text: "They store a large amount of chemical energy within the cell like a primary battery", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Unlike primary or secondary batteries, fuel cells do not store chemical reactants within the cell.\n* Reactants (hydrogen and oxygen/air) are fed into the cell continuously from an external source, allowing them to run indefinitely without recharging as long as the fuel is supplied.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q104",
    createdAt: "2026-08-20T17:55:00Z"
  }
];
