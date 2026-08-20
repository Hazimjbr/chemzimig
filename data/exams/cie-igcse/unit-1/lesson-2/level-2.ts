import { Question } from '../../../types';

// Diffusion - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u1_l2_lv2_1-2026",
    question: "A perfume bottle is opened at the front corner of a large lecture hall with still air. After 3 minutes, students in the back row begin to smell the perfume. Which two processes allowed the fragrance to reach them?",
    options: [
      { text: "Filtration and neutralisation" },
      { text: "Evaporation of the liquid perfume followed by gas diffusion" },
      { text: "Condensation of vapor followed by osmosis" },
      { text: "Sublimation followed by Brownian motion" }
    ],
    correctAnswer: 1,
    explanation: "* Liquid perfume evaporates at room temperature into gaseous molecules.\n* The gaseous perfume molecules then undergo random collisions with air molecules, diffusing across the room down their concentration gradient.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q7",
    createdAt: "2026-03-12T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv2_2-2026",
    question: "Which of the following gases will diffuse at the fastest rate under identical conditions of temperature and pressure?",
    options: [
      { text: "Carbon dioxide (CO₂, $M_r = 44$)" },
      { text: "Oxygen (O₂, $M_r = 32$)" },
      { text: "Methane (CH₄, $M_r = 16$)" },
      { text: "Chlorine (Cl₂, $M_r = 71$)" }
    ],
    correctAnswer: 2,
    explanation: "* The rate of diffusion of a gas is inversely proportional to its relative molecular mass ($M_r$).\n* Methane (CH₄) has the lowest relative molecular mass ($M_r = 16$) among the choices, meaning its particles move with the highest average speed and diffuse fastest.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q9",
    createdAt: "2026-03-12T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv2_3-2026",
    question: "Two gas jars are separated by a glass plate. The lower jar contains heavy red-brown bromine vapor ($M_r = 160$) and the upper jar contains colorless air ($M_r \\approx 29$). When the glass plate is removed, what is observed after several hours?",
    options: [
      { text: "Bromine vapor remains in the bottom jar because it is heavier than air" },
      { text: "Both jars contain an identical uniform pale brown mixture throughout" },
      { text: "All air moves to the bottom jar and bromine floats to the top" },
      { text: "Bromine condenses into a liquid pool at the base of the lower jar" }
    ],
    correctAnswer: 1,
    explanation: "* Random kinetic motion causes particles of both gases to move in all directions regardless of gravity.\n* Continuous collisions distribute both bromine and air molecules uniformly across the total volume of both jars.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q7",
    createdAt: "2026-03-13T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv2_4-2026",
    question: "A cylinder containing equal volumes of helium gas (He, $A_r = 4$) and argon gas (Ar, $A_r = 40$) develops a microscopic leak. After 10 minutes, what will be the composition of the gas remaining inside the cylinder?",
    options: [
      { text: "It will contain more helium than argon" },
      { text: "It will contain more argon than helium" },
      { text: "It will contain equal amounts of helium and argon" },
      { text: "All gas will have escaped at identical rates" }
    ],
    correctAnswer: 1,
    explanation: "* Helium ($A_r = 4$) is much lighter than argon ($A_r = 40$) and diffuses (effuses) out of the leak significantly faster.\n* Consequently, helium escapes more quickly, leaving a higher proportion of slower-moving argon inside the cylinder.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q10",
    createdAt: "2026-03-18T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv2_5-2026",
    question: "In an experiment on diffusion, a student compares how fast ammonia gas (NH₃, $M_r = 17$) diffuses in air versus in a vacuum. What will the student observe?",
    options: [
      { text: "Ammonia diffuses much faster in a vacuum than in air" },
      { text: "Ammonia diffuses slower in a vacuum because there are no particles to carry it" },
      { text: "Ammonia diffuses at the exact same speed in both" },
      { text: "Ammonia cannot travel through a vacuum" }
    ],
    correctAnswer: 0,
    explanation: "* In air, diffusing ammonia particles constantly collide with nitrogen and oxygen molecules, bouncing in zigzag paths which slows their overall progress.\n* In a vacuum, there are no air molecules to collide with, so ammonia particles travel in unimpeded straight lines at hundreds of meters per second.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q12",
    createdAt: "2026-03-18T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l2_lv2_6-2026",
    question: "A piece of damp red litmus paper is placed at one end of a horizontal glass tube. Cotton wool soaked in concentrated aqueous ammonia is placed at the other end. What happens to the litmus paper and why?",
    options: [
      { text: "It turns blue immediately upon contact with the liquid" },
      { text: "It gradually turns blue from the side facing the cotton wool as basic NH₃ gas diffuses along the tube" },
      { text: "It turns red because NH₃ is an acidic gas" },
      { text: "It is bleached white by chlorine vapor" }
    ],
    correctAnswer: 1,
    explanation: "* Ammonia evaporates into alkaline $\\text{NH}_3$ gas which diffuses along the tube.\n* When it reaches the damp litmus paper, it dissolves in the water to form hydroxide ions ($\text{OH}^-$), turning the red litmus blue from the exposed edge inwards.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q7",
    createdAt: "2026-03-19T10:00:00Z"
  }
];


