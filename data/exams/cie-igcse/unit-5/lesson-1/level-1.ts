import { Question } from '../../../types';

// Exothermic and Endothermic Reactions - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l1_lv1_1-2026",
    question: "Which statement correctly describes an exothermic chemical reaction?",
    options: [
      { text: "Thermal energy is absorbed from the surroundings, causing temperature to decrease" },
      { text: "Thermal energy is released to the surroundings, causing temperature to increase", isCorrect: true },
      { text: "No energy transfer takes place between the reaction mixture and surroundings" },
      { text: "The temperature of the surroundings stays constant while chemical energy increases" }
    ],
    correctAnswer: 1,
    explanation: "* An exothermic reaction transfers thermal energy to the surroundings.\n* This release of heat results in an increase in the temperature of the reaction mixture and surroundings.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q105",
    createdAt: "2026-08-20T18:00:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv1_2-2026",
    question: "Which of the following processes is always endothermic?",
    options: [
      { text: "Combustion of methane gas" },
      { text: "Neutralisation of hydrochloric acid by sodium hydroxide" },
      { text: "Thermal decomposition of calcium carbonate", isCorrect: true },
      { text: "Respiration in living cells" }
    ],
    correctAnswer: 2,
    explanation: "* Thermal decomposition requires continuous heating and absorption of thermal energy to break down a compound (e.g. CaCO₃(s) → CaO(s) + CO₂(g)).\n* Combustion, neutralisation, and respiration are all exothermic reactions that release heat.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q106",
    createdAt: "2026-08-20T18:05:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv1_3-2026",
    question: "When solid ammonium chloride is dissolved in water in a beaker, the thermometer reading falls from 22°C to 15°C.\nWhat type of process is this and what is the sign of the enthalpy change (ΔH)?",
    options: [
      { text: "Endothermic; ΔH is negative" },
      { text: "Endothermic; ΔH is positive", isCorrect: true },
      { text: "Exothermic; ΔH is positive" },
      { text: "Exothermic; ΔH is negative" }
    ],
    correctAnswer: 1,
    explanation: "* A decrease in temperature indicates that heat is absorbed from the solution, meaning the process is endothermic.\n* For all endothermic changes, the enthalpy change is positive (+ΔH).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q107",
    createdAt: "2026-08-20T18:10:00Z"
  },
  {
    id: "ex_ci_u5_l1_lv1_4-2026",
    question: "Which of the following physical changes of state is exothermic?",
    options: [
      { text: "Melting of ice" },
      { text: "Boiling of water" },
      { text: "Freezing of liquid water to ice", isCorrect: true },
      { text: "Evaporation of ethanol" }
    ],
    correctAnswer: 2,
    explanation: "* Freezing and condensation are exothermic processes because particles lose kinetic energy and form intermolecular attractions, releasing heat to the surroundings.\n* Melting, boiling, and evaporation require heat input to overcome attractive forces, making them endothermic.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q108",
    createdAt: "2026-08-20T18:15:00Z"
  }
];
