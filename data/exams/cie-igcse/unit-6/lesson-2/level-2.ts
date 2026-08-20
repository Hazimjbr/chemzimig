import { Question } from '../../../types';

// Collision Theory - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l2_lv2_1-2026",
    question: "A 10°C increase in temperature often roughly doubles the rate of a chemical reaction.\nWhat is the PRIMARY reason for this significant increase in rate?",
    options: [
      { text: "The collision frequency between particles increases slightly" },
      { text: "A significantly larger fraction of colliding particles have energy greater than or equal to the activation energy ($E_a$)", isCorrect: true },
      { text: "The activation energy of the reaction is reduced by half" },
      { text: "The concentration of reactants doubles" }
    ],
    correctAnswer: 1,
    explanation: "* Although temperature slightly increases the speed of particles (collision frequency increases by only ~2%), its main effect is giving more particles kinetic energy $\\ge E_a$.\n* This drastically increases the proportion of collisions that are successful.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q166",
    createdAt: "2026-08-20T23:15:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv2_2-2026",
    question: "For a gaseous reaction: 2SO₂(g) + O₂(g) → 2SO₃(g)\nHow does increasing the pressure of the gas mixture increase the rate of reaction?",
    options: [
      { text: "It compresses the gas molecules, increasing the number of particles per unit volume and increasing collision frequency", isCorrect: true },
      { text: "It increases the average kinetic energy of the gas molecules" },
      { text: "It decreases the activation energy of the gas molecules" },
      { text: "It causes the molecules to ionize into plasma" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing pressure reduces the volume occupied by gases, crowding molecules closer together (higher concentration per unit volume).\n* This leads to more frequent collisions per second, increasing the rate of reaction.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q167",
    createdAt: "2026-08-20T23:20:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv2_3-2026",
    question: "Which row correctly matches the factor with its primary effect on collision theory?",
    options: [
      { text: "Increasing concentration → Increases collision frequency only", isCorrect: true },
      { text: "Increasing temperature → Decreases activation energy" },
      { text: "Adding a catalyst → Increases the kinetic energy of particles" },
      { text: "Increasing surface area → Increases fraction of particles with E ≥ Ea" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing concentration only increases collision frequency (does not alter kinetic energy or $E_a$).\n* Temperature increases both kinetic energy and the fraction with $E \\ge E_a$.\n* A catalyst lowers activation energy $E_a$.\n* Surface area only increases collision frequency.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q168",
    createdAt: "2026-08-20T23:25:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv2_4-2026",
    question: "Why can flour dust in a flour mill pose a serious explosion risk?",
    options: [
      { text: "Flour acts as an acidic catalyst" },
      { text: "Fine flour particles have an extremely large total surface area exposed to oxygen in the air, allowing rapid combustion", isCorrect: true },
      { text: "Flour spontaneously decomposes endothermically" },
      { text: "Flour lowers the activation energy of combustion to zero" }
    ],
    correctAnswer: 1,
    explanation: "* Combustible powders (like flour or coal dust) suspended in air have massive surface area-to-volume ratios.\n* A small spark can initiate an extremely fast, exothermic combustion chain reaction resulting in an explosion.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q169",
    createdAt: "2026-08-20T23:30:00Z"
  }
];
