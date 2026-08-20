import { Question } from '../../../types';

// Exothermic and Endothermic Reactions - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l1_lv3_1-2026",
    question: "When 0.050 moles of ethanol is burned in a spirit burner, it heats 100 g of water, causing its temperature to rise by 32.0°C.\nWhat is the molar enthalpy of combustion of ethanol?\n(Given: Specific heat capacity of water, $c = 4.2\\text{ J/(g}\\cdot^\\circ\\text{C)}$)",
    options: [
      { text: "-13.44 kJ/mol" },
      { text: "-268.8 kJ/mol", isCorrect: true },
      { text: "-537.6 kJ/mol" },
      { text: "+268.8 kJ/mol" }
    ],
    correctAnswer: 1,
    explanation: "* Calculate heat energy released: $q = m \\times c \\times \\Delta T = 100 \\times 4.2 \\times 32.0 = 13,440\\text{ J} = 13.44\\text{ kJ}$.\n* Calculate molar enthalpy of combustion: $\\Delta H = -q / n = -13.44 / 0.050 = -268.8\\text{ kJ/mol}$.\n* The negative sign indicates an exothermic combustion reaction.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q113",
    createdAt: "2026-08-20T18:40:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_2-2026",
    question: "A student dissolves 4.0 g of sodium hydroxide pellets (NaOH) in 100 cm³ of water. The temperature rises by 10.0°C.\nAssuming the density of the solution is 1.0 g/cm³ and $c = 4.2\\text{ J/(g}\\cdot^\\circ\\text{C)}$, what is the molar enthalpy of solution of NaOH?\n(Given: $M_r$ of NaOH = 40)",
    options: [
      { text: "-42.0 kJ/mol", isCorrect: true },
      { text: "-4.20 kJ/mol" },
      { text: "+42.0 kJ/mol" },
      { text: "-84.0 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Mass of solution $\\approx 100\\text{ g}$.\n* Heat released: $q = m \\times c \\times \\Delta T = 100 \\times 4.2 \\times 10.0 = 4200\\text{ J} = 4.20\\text{ kJ}$.\n* Moles of NaOH $= 4.0 / 40 = 0.10\\text{ mol}$.\n* Molar enthalpy of solution: $\\Delta H = -q / n = -4.20 / 0.10 = -42.0\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q114",
    createdAt: "2026-08-20T18:45:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_3-2026",
    question: "In a combustion experiment, the experimental value for the molar enthalpy of combustion of methanol is found to be significantly less exothermic than the theoretical value.\nWhich experimental error does NOT account for this discrepancy?",
    options: [
      { text: "Heat loss from the flame to the surrounding air" },
      { text: "Incomplete combustion forming carbon monoxide and soot" },
      { text: "Evaporation of methanol from the wick before the final mass was taken", isCorrect: true },
      { text: "Heat absorbed by the copper calorimeter that was not included in the calculation" }
    ],
    correctAnswer: 2,
    explanation: "* Evaporation of fuel before weighing causes the recorded mass of fuel burned to appear larger than it actually was, which makes the calculated heat per mole appear smaller, but it is an error in fuel measurement rather than missing heat.\n* Heat loss to air, incomplete combustion, and heat absorbed by the metal container directly explain why less heat is transferred to the water than theoretically predicted.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q115",
    createdAt: "2026-08-20T18:50:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv3_4-2026",
    question: "When 50.0 cm³ of 2.0 mol/dm³ sulfuric acid (H₂SO₄) is neutralised completely by 100.0 cm³ of 2.0 mol/dm³ sodium hydroxide (NaOH), 11.4 kJ of thermal energy is released.\nWhat is the molar enthalpy of neutralisation per mole of water formed?",
    options: [
      { text: "-114 kJ/mol" },
      { text: "-57 kJ/mol", isCorrect: true },
      { text: "-28.5 kJ/mol" },
      { text: "+57 kJ/mol" }
    ],
    correctAnswer: 1,
    explanation: "* Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.\n* Moles of H₂SO₄ $= 0.050 \\times 2.0 = 0.10\\text{ mol}$.\n* Moles of NaOH $= 0.100 \\times 2.0 = 0.20\\text{ mol}$.\n* Moles of H₂O formed $= 0.20\\text{ mol}$.\n* Enthalpy of neutralisation per mole of water formed $= -11.4\\text{ kJ} / 0.20\\text{ mol} = -57\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q116",
    createdAt: "2026-08-20T18:55:00Z"
  }
];
