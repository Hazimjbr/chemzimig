import { Question } from '../../../types';

// Collision Theory - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l2_lv3_1-2026",
    question: "On an energy distribution curve showing the number of molecules with a given kinetic energy at temperature T₁ and a higher temperature T₂:\nWhich statement correctly describes the curve at the higher temperature T₂?",
    options: [
      { text: "The peak shifts to the right and becomes lower, and the area under the curve to the right of $E_a$ increases significantly", isCorrect: true },
      { text: "The peak shifts to the left and becomes higher, while $E_a$ decreases" },
      { text: "The peak stays at the same position but the total area under the curve doubles" },
      { text: "The peak shifts to the right and becomes higher, while $E_a$ shifts to the left" }
    ],
    correctAnswer: 0,
    explanation: "* At higher temperature, average kinetic energy increases, shifting the distribution peak to the right (higher energy) and lowering its height so total area (number of particles) remains constant.\n* The shaded area to the right of $E_a$ (particles with energy $\\ge E_a$) increases substantially, leading to a much higher frequency of successful collisions.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q170",
    createdAt: "2026-08-20T23:35:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_2-2026",
    question: "Two molecules with total kinetic energy greater than $E_a$ collide but fail to react.\nWhat is the most likely explanation for why no reaction occurs?",
    options: [
      { text: "The molecules did not collide with the correct orientation in space", isCorrect: true },
      { text: "The temperature of the reaction mixture was too high" },
      { text: "The activation energy suddenly increased during the collision" },
      { text: "The reaction is endothermic" }
    ],
    correctAnswer: 0,
    explanation: "* Having $E \\ge E_a$ is necessary but not sufficient on its own.\n* The reactive parts/functional groups of the colliding molecules must also collide with the proper steric alignment/orientation to allow bond breaking and bond making to occur.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q171",
    createdAt: "2026-08-20T23:40:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv3_3-2026",
    question: "An experiment is carried out between 1.0 g of calcium carbonate and 50 cm³ of 1.0 mol/dm³ HCl.\nIn Experiment 1: Large marble chips at 20°C.\nIn Experiment 2: Small marble chips at 30°C.\nWhich statement comparing Experiment 2 to Experiment 1 is correct?",
    options: [
      { text: "Experiment 2 has a higher initial rate and finishes faster, but produces the same final volume of CO₂", isCorrect: true },
      { text: "Experiment 2 produces a larger final volume of CO₂ because of higher temperature" },
      { text: "Experiment 2 has a lower activation energy than Experiment 1" },
      { text: "Experiment 2 has a slower initial rate because small chips dissolve too quickly" }
    ],
    correctAnswer: 0,
    explanation: "* Smaller chips (larger surface area) and higher temperature both increase the rate of reaction, so Experiment 2 is much faster initially and completes in less time.\n* Since the quantities of reactants are unchanged, the total moles of CO₂ produced at completion remain the same.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q172",
    createdAt: "2026-08-20T23:45:00Z"
  }
];
