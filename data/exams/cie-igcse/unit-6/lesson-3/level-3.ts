import { Question } from '../../../types';

// Catalysts - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l3_lv3_1-2026",
    question: "How does a solid transition metal catalyst accelerate a gaseous reaction at the molecular level?",
    options: [
      { text: "Gas molecules adsorb onto the metal surface, weakening internal bonds and lowering the activation energy for reaction", isCorrect: true },
      { text: "The metal transfers electrons to the gas molecules permanently to form solid metal salts" },
      { text: "The metal raises the kinetic temperature of the gases without consuming energy" },
      { text: "The metal increases the volume occupied by the gas molecules" }
    ],
    correctAnswer: 0,
    explanation: "* In heterogeneous catalysis, reactant molecules adsorb onto active sites on the metal surface.\n* This stretches and weakens their chemical bonds, providing an alternative reaction pathway with a significantly lower activation energy ($E_a$).",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q179",
    createdAt: "2026-08-21T00:30:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_2-2026",
    question: "Why does the presence of lead compounds in petrol 'poison' the platinum catalytic converter in a car?",
    options: [
      { text: "Lead reacts with platinum to lower its melting point" },
      { text: "Lead atoms bind strongly and irreversibly to active sites on the platinum surface, blocking reactant gases from adsorbing", isCorrect: true },
      { text: "Lead neutralizes carbon monoxide into carbon" },
      { text: "Lead acts as an inhibitor by raising the temperature of exhaust gases" }
    ],
    correctAnswer: 1,
    explanation: "* Catalyst poisoning occurs when an impurity (such as lead) binds strongly and irreversibly to the active catalytic sites.\n* This permanently prevents the pollutant gases (CO, NO, unburned hydrocarbons) from adsorbing and reacting.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q180",
    createdAt: "2026-08-21T00:35:00Z"
  },
  {
    id: "ex_ci_u6_l3_lv3_3-2026",
    question: "On a Maxwell-Boltzmann energy distribution diagram, how is the effect of adding a catalyst shown?",
    options: [
      { text: "The curve shifts to the right and becomes broader" },
      { text: "The activation energy line ($E_a$) shifts to the left, increasing the shaded area of particles that can react", isCorrect: true },
      { text: "The activation energy line ($E_a$) shifts to the right, decreasing the energy barrier" },
      { text: "The entire area under the curve increases" }
    ],
    correctAnswer: 1,
    explanation: "* The distribution curve of molecular kinetic energies is unchanged (since temperature is constant).\n* A catalyst lowers the activation energy, shifting the $E_a$ vertical line to the left.\n* As a result, a much larger proportion of the particles have energy $\\ge E_{a\\text{,cat}}$, increasing reaction rate.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q181",
    createdAt: "2026-08-21T00:40:00Z"
  }
];
