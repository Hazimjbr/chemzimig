import { Question } from '../../../types';

// Collision Theory - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u6_l2_lv1_1-2026",
    question: "According to collision theory, what two conditions must be met for a collision between reactant particles to result in a chemical reaction?",
    options: [
      { text: "Particles must collide with energy greater than or equal to the activation energy ($E_a$) and with the correct orientation", isCorrect: true },
      { text: "Particles must collide at the speed of light and in a vacuum" },
      { text: "Particles must have equal masses and opposite electrical charges" },
      { text: "Particles must collide in the presence of an enzyme with zero kinetic energy" }
    ],
    correctAnswer: 0,
    explanation: "* For a successful (effective) collision, colliding particles must possess energy equal to or greater than the activation energy ($E_a$) and collide with correct spatial orientation.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q163",
    createdAt: "2026-08-20T23:00:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv1_2-2026",
    question: "Why does powdered magnesium react much faster with hydrochloric acid than a solid magnesium ribbon of the same mass?",
    options: [
      { text: "Powdered magnesium has a lower activation energy" },
      { text: "Powdered magnesium has a greater surface area exposed for collisions", isCorrect: true },
      { text: "Powdered magnesium contains more energetic particles" },
      { text: "Powdered magnesium acts as a catalyst" }
    ],
    correctAnswer: 1,
    explanation: "* Breaking a solid into smaller pieces or powder drastically increases the total surface area.\n* More reactant particles are exposed to collide per second, increasing the collision frequency.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q164",
    createdAt: "2026-08-20T23:05:00Z"
  },
  {
    id: "ex_ci_u6_l2_lv1_3-2026",
    question: "How does increasing the concentration of a solution increase the rate of reaction?",
    options: [
      { text: "It increases the number of particles per unit volume, increasing collision frequency", isCorrect: true },
      { text: "It decreases the activation energy of the reaction" },
      { text: "It increases the average kinetic energy of the particles" },
      { text: "It increases the molecular weight of the reactants" }
    ],
    correctAnswer: 0,
    explanation: "* Increasing concentration means there are more reactant particles crowded into the same volume of solution.\n* The frequency of collisions between particles per unit time increases.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q165",
    createdAt: "2026-08-20T23:10:00Z"
  }
];
