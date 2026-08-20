import { Question } from '../../../types';

// Exothermic and Endothermic Reactions - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l1_lv2_1-2026",
    question: "In a calorimetry experiment, 50 cm³ of 1.0 mol/dm³ HCl is mixed with 50 cm³ of 1.0 mol/dm³ NaOH. The temperature rises by 6.5°C.\nWhat is the expected temperature rise if 25 cm³ of the same HCl solution is mixed with 25 cm³ of the same NaOH solution in an identical insulated cup?",
    options: [
      { text: "3.25°C" },
      { text: "6.5°C", isCorrect: true },
      { text: "13.0°C" },
      { text: "1.625°C" }
    ],
    correctAnswer: 1,
    explanation: "* Halving the volumes halves the moles of reactants reacting, so half the amount of heat energy ($q$) is released.\n* However, the total volume (and mass) of water being heated is also halved.\n* Since $\\Delta T = q / (m \\times c)$, halving both $q$ and $m$ keeps the temperature rise $\\Delta T$ unchanged at 6.5°C.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q109",
    createdAt: "2026-08-20T18:20:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_2-2026",
    question: "Which of the following describes the energy changes that occur during an exothermic reaction?",
    options: [
      { text: "Energy absorbed to break bonds is greater than energy released when new bonds form" },
      { text: "Energy released when new bonds form is greater than energy absorbed to break bonds", isCorrect: true },
      { text: "Bonds are broken in the products and formed in the reactants" },
      { text: "No bonds are broken, only new bonds are formed" }
    ],
    correctAnswer: 1,
    explanation: "* Bond breaking is an endothermic process (requires energy input).\n* Bond making is an exothermic process (releases energy).\n* In an exothermic reaction, the energy released when making new bonds in products exceeds the energy absorbed to break bonds in reactants.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q110",
    createdAt: "2026-08-20T18:25:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_3-2026",
    question: "A student investigated the temperature change for four reactions by mixing equal volumes of solutions in a polystyrene cup:\n* Reaction 1: Initial temp = 20°C, Final temp = 34°C\n* Reaction 2: Initial temp = 21°C, Final temp = 16°C\n* Reaction 3: Initial temp = 19°C, Final temp = 28°C\n* Reaction 4: Initial temp = 22°C, Final temp = 14°C\nWhich reaction absorbed the greatest amount of thermal energy per unit volume?",
    options: [
      { text: "Reaction 1" },
      { text: "Reaction 2" },
      { text: "Reaction 3" },
      { text: "Reaction 4", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Endothermic reactions absorb thermal energy and show a decrease in temperature ($\Delta T$ is negative).\n* For Reaction 2: Temperature drop $= 21 - 16 = 5^\\circ\\text{C}$.\n* For Reaction 4: Temperature drop $= 22 - 14 = 8^\\circ\\text{C}$.\n* Reaction 4 produced the largest temperature drop, meaning it absorbed the most thermal energy.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q111",
    createdAt: "2026-08-20T18:30:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv2_4-2026",
    question: "Why are polystyrene cups used instead of glass beakers in school calorimetry experiments?",
    options: [
      { text: "Polystyrene is a better thermal insulator and reduces heat loss to the surroundings", isCorrect: true },
      { text: "Polystyrene reacts with the acid to release extra heat" },
      { text: "Polystyrene has a higher density than glass" },
      { text: "Polystyrene speeds up the rate of reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Polystyrene contains trapped air pockets, making it an excellent thermal insulator.\n* It minimises heat exchange with the surroundings, providing more accurate temperature readings.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q112",
    createdAt: "2026-08-20T18:35:00Z"
  }
];
