import { Question } from '../../../types';

// Hydrogen-Oxygen Fuel Cells - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u4_l4_lv2_1-2026",
    question: "Which of the following half-equations represents the oxidation reaction occurring at the negative electrode (anode) in a hydrogen-oxygen fuel cell?",
    options: [
      { text: "2H₂ → 4H⁺ + 4e⁻", isCorrect: true },
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O" },
      { text: "4H⁺ + 4e⁻ → 2H₂" },
      { text: "O₂ + 2H₂O + 4e⁻ → 4OH⁻" }
    ],
    correctAnswer: 0,
    explanation: "* In a hydrogen-oxygen fuel cell, hydrogen gas (H₂) is fed to the negative electrode (anode).\n* Hydrogen molecules undergo oxidation by losing electrons to form hydrogen ions:\n  2H₂ → 4H⁺ + 4e⁻.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q97",
    createdAt: "2026-08-20T17:20:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv2_2-2026",
    question: "A student sets up four simple cells using copper as one electrode and metals W, X, Y, and Z as the other electrode. The voltages and electron flows are recorded:\n* Cell 1 (Copper and W): 1.1 V; electrons flow from W to copper\n* Cell 2 (Copper and X): 0.5 V; electrons flow from X to copper\n* Cell 3 (Copper and Y): 0.2 V; electrons flow from copper to Y\n* Cell 4 (Copper and Z): 0.8 V; electrons flow from Z to copper\nWhat is the order of reactivity of the five metals, from most reactive to least reactive?",
    options: [
      { text: "W > Z > X > Copper > Y", isCorrect: true },
      { text: "Y > Copper > X > Z > W" },
      { text: "W > X > Z > Copper > Y" },
      { text: "Z > W > X > Copper > Y" }
    ],
    correctAnswer: 0,
    explanation: "* Electrons flow from the more reactive metal to the less reactive metal.\n* For W, X, and Z, electrons flow to copper, so W, X, and Z are more reactive than copper.\n* The voltage size shows how much more reactive they are: W (1.1 V) > Z (0.8 V) > X (0.5 V).\n* For Y, electrons flow from copper to Y, so Y is less reactive than copper.\n* Therefore, the reactivity order is: W > Z > X > Copper > Y.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q98",
    createdAt: "2026-08-20T17:25:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv2_3-2026",
    question: "What is the overall balanced chemical equation for the reaction that occurs in a hydrogen-oxygen fuel cell?",
    options: [
      { text: "2H₂ + O₂ → 2H₂O", isCorrect: true },
      { text: "H₂ + O₂ → H₂O₂" },
      { text: "2H₂O → 2H₂ + O₂" },
      { text: "NaOH + HCl → NaCl + H₂O" }
    ],
    correctAnswer: 0,
    explanation: "* The overall reaction in a hydrogen-oxygen fuel cell is the combination of hydrogen and oxygen gas to form water:\n  2H₂(g) + O₂(g) → 2H₂O(l).\n* This is the same chemical change as burning hydrogen, but the energy is released directly as electrical energy instead of heat.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q99",
    createdAt: "2026-08-20T17:30:00Z"
  },
  {
    id: "ex_ci_u4_l4_lv2_4-2026",
    question: "In a simple cell containing a zinc electrode, a copper electrode, and dilute sulfuric acid, which statement is correct?",
    options: [
      { text: "Zinc is the positive electrode" },
      { text: "Copper atoms dissolve into the solution as Cu²⁺ ions" },
      { text: "Hydrogen gas is evolved at the copper electrode", isCorrect: true },
      { text: "Electrons flow through the wire from copper to zinc" }
    ],
    correctAnswer: 2,
    explanation: "* Zinc is more reactive than copper, so it loses electrons and acts as the negative electrode (anode).\n* Electrons flow from zinc to copper through the external circuit.\n* At the copper electrode (positive electrode), H⁺ ions from the acid gain these electrons and are reduced to form hydrogen gas (H₂): 2H⁺ + 2e⁻ → H₂.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q100",
    createdAt: "2026-08-20T17:35:00Z"
  }
];
