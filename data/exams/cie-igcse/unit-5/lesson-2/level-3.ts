import { Question } from '../../../types';

// Energy Diagrams - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l2_lv3_1-2026",
    question: "The energy level of reactants for a reaction is +80 kJ/mol. The highest point on the energy curve is +210 kJ/mol, and the energy level of the products is +130 kJ/mol.\nWhat are the activation energy ($E_a$) and enthalpy change ($\\Delta H$) for this reaction?",
    options: [
      { text: "E_a = +130 kJ/mol, ΔH = +50 kJ/mol", isCorrect: true },
      { text: "E_a = +210 kJ/mol, ΔH = +50 kJ/mol" },
      { text: "E_a = +130 kJ/mol, ΔH = -50 kJ/mol" },
      { text: "E_a = +80 kJ/mol, ΔH = +130 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Activation energy: $E_a = \\text{Peak} - \\text{Reactants} = 210 - 80 = +130\\text{ kJ/mol}$.\n* Enthalpy change: $\\Delta H = \\text{Products} - \\text{Reactants} = 130 - 80 = +50\\text{ kJ/mol}$ (endothermic).",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q125",
    createdAt: "2026-08-20T19:40:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_2-2026",
    question: "A two-step catalyzed reaction has the following energy values:\n* Reactants = 0 kJ/mol\n* First transition state (Peak 1) = +45 kJ/mol\n* Intermediate = +15 kJ/mol\n* Second transition state (Peak 2) = +35 kJ/mol\n* Products = -60 kJ/mol\nWhich step is the rate-determining (slowest) step and what is the overall $\\Delta H$?",
    options: [
      { text: "Step 1 (activation energy = 45 kJ/mol); overall ΔH = -60 kJ/mol", isCorrect: true },
      { text: "Step 2 (activation energy = 35 kJ/mol); overall ΔH = -60 kJ/mol" },
      { text: "Step 1 (activation energy = 45 kJ/mol); overall ΔH = +60 kJ/mol" },
      { text: "Step 2 (activation energy = 20 kJ/mol); overall ΔH = -45 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* $E_a$ for Step 1 $= 45 - 0 = 45\\text{ kJ/mol}$.\n* $E_a$ for Step 2 $= 35 - 15 = 20\\text{ kJ/mol}$.\n* Step 1 has the higher activation energy barrier, making it the rate-determining (slowest) step.\n* The overall enthalpy change is $\\Delta H = \\text{Products} - \\text{Reactants} = -60 - 0 = -60\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q126",
    createdAt: "2026-08-20T19:45:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_3-2026",
    question: "In the presence of a catalyst, the activation energy of a reaction decreases by 25 kJ/mol.\nIf the uncatalyzed activation energy was 90 kJ/mol and the uncatalyzed ΔH was -40 kJ/mol, what are the catalyzed activation energy and catalyzed ΔH?",
    options: [
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -40 kJ/mol", isCorrect: true },
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -65 kJ/mol" },
      { text: "Catalyzed E_a = 115 kJ/mol, Catalyzed ΔH = -40 kJ/mol" },
      { text: "Catalyzed E_a = 65 kJ/mol, Catalyzed ΔH = -15 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Catalyzed $E_a = 90 - 25 = 65\\text{ kJ/mol}$.\n* A catalyst lowers the activation energy but has NO effect on the overall enthalpy change ($\\Delta H$).\n* Therefore, $\\Delta H$ remains $-40\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q127",
    createdAt: "2026-08-20T19:50:00Z"
  },
  {
    id: "ex_ci_u5_l2_lv3_4-2026",
    question: "Which statement correctly describes the transition state (activated complex) at the peak of a reaction pathway diagram?",
    options: [
      { text: "It is a stable compound that can be isolated and stored" },
      { text: "It is an unstable, high-energy arrangement of atoms where old bonds are breaking and new bonds are forming", isCorrect: true },
      { text: "It has less potential energy than both reactants and products" },
      { text: "It is only formed when an enzyme or catalyst is present" }
    ],
    correctAnswer: 1,
    explanation: "* The species at the maximum of the energy profile is the transition state / activated complex.\n* It is highly unstable, has maximum potential energy, and corresponds to the simultaneous breaking and making of chemical bonds.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q128",
    createdAt: "2026-08-20T19:55:00Z"
  }
];
