import { Question } from '../../../types';

// Electrolytic Cells - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l2_lv3_1-2026",
    question: "When a dilute solution of sodium chloride is electrolysed using inert electrodes, what are the products formed at the cathode and anode, and what happens to the concentration of the sodium chloride electrolyte over time?",
    options: [
      { text: "Cathode: Hydrogen; Anode: Oxygen; Concentration increases", isCorrect: true },
      { text: "Cathode: Sodium; Anode: Chlorine; Concentration decreases" },
      { text: "Cathode: Hydrogen; Anode: Chlorine; Concentration increases" },
      { text: "Cathode: Hydrogen; Anode: Oxygen; Concentration decreases" }
    ],
    correctAnswer: 0,
    explanation: "* In dilute NaCl, H⁺ ions are discharged at the cathode to form H₂ gas.\n* Hydroxide ions (OH⁻) are discharged at the anode to form O₂ gas.\n* Since H⁺ and OH⁻ ions are removed (which is equivalent to removing water, H₂O) while Na⁺ and Cl⁻ ions remain in the cell, the overall concentration of sodium chloride increases over time.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q77",
    createdAt: "2026-08-20T15:40:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_2-2026",
    question: "During the electrolysis of dilute aqueous copper(II) sulfate using carbon electrodes, what is observed in the electrolyte solution as the reaction proceeds?",
    options: [
      { text: "The blue colour of the solution fades until it becomes colourless", isCorrect: true },
      { text: "The blue colour of the solution becomes darker blue" },
      { text: "The solution remains blue and unchanged" },
      { text: "A white precipitate forms in the solution" }
    ],
    correctAnswer: 0,
    explanation: "* The blue colour of the aqueous copper(II) sulfate solution is due to the presence of hydrated copper(II) ions, Cu²⁺.\n* As electrolysis proceeds, Cu²⁺ ions are discharged at the cathode to form copper metal (Cu), depleting the concentration of Cu²⁺ in solution.\n* Consequently, the blue colour fades until the solution becomes colourless (and acidic due to remaining H⁺ and SO₄²⁻ ions).",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q78",
    createdAt: "2026-08-20T15:45:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_3-2026",
    question: "In the electrolysis of concentrated sodium chloride solution, what is the ratio of the volume of gas produced at the cathode to the volume of gas produced at the anode under the same temperature and pressure?",
    options: [
      { text: "1:1", isCorrect: true },
      { text: "2:1" },
      { text: "1:2" },
      { text: "1:8" }
    ],
    correctAnswer: 0,
    explanation: "* Cathode reaction: 2H⁺ + 2e⁻ → H₂(g). Thus, 2 moles of electrons produce 1 mole of hydrogen gas.\n* Anode reaction: 2Cl⁻ → Cl₂(g) + 2e⁻. Thus, 2 moles of electrons produce 1 mole of chlorine gas.\n* The molar ratio of H₂ to Cl₂ is 1:1, so the volume ratio is also 1:1.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q79",
    createdAt: "2026-08-20T15:50:00Z"
  },
  {
    id: "ex_ci_u4_l2_lv3_4-2026",
    question: "A student electrolyses four different aqueous solutions using carbon electrodes. Which solution does NOT produce oxygen gas at the anode?",
    options: [
      { text: "Dilute sulfuric acid" },
      { text: "Concentrated hydrochloric acid", isCorrect: true },
      { text: "Dilute sodium chloride" },
      { text: "Dilute copper(II) sulfate" }
    ],
    correctAnswer: 1,
    explanation: "* Dilute sulfuric acid, dilute sodium chloride, and dilute copper(II) sulfate all contain OH⁻ ions that are preferentially discharged to produce oxygen gas (O₂) at the anode.\n* Concentrated hydrochloric acid has a high concentration of Cl⁻ ions, which are preferentially discharged over OH⁻, yielding chlorine gas (Cl₂) instead of oxygen.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q80",
    createdAt: "2026-08-20T15:55:00Z"
  }
];
