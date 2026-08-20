import { Question } from '../../../types';

// Uses of Metals & Rusting - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u9_l4_lv2_1-2026",
    question: "Why does galvanised iron (iron coated with a layer of zinc) continue to resist rusting even if the zinc coating is scratched and iron is exposed?",
    options: [
      { text: "Zinc is more reactive than iron and preferentially oxidises (sacrificial protection), sacrificing itself by losing electrons to protect the iron", isCorrect: true },
      { text: "Zinc forms an acidic gas that dissolves water" },
      { text: "Iron absorbs electrons from oxygen to protect zinc" },
      { text: "Scratched zinc forms an alloy that is completely inert" }
    ],
    correctAnswer: 0,
    explanation: "* Zinc is higher than iron in the reactivity series.\n* Zinc readily loses electrons: Zn → Zn²⁺ + 2e⁻.\n* These electrons flow to the iron, preventing Fe from oxidising into Fe²⁺/Fe³⁺ (sacrificial protection).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q330",
    createdAt: "2026-08-21T16:15:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_2-2026",
    question: "Which of the following rust prevention methods works SOLELY as a physical barrier to exclude oxygen and water?",
    options: [
      { text: "Painting an iron garden gate", isCorrect: true },
      { text: "Attaching magnesium blocks to an underground steel pipeline" },
      { text: "Attaching zinc anodes to a steel ship hull" },
      { text: "Galvanising a steel bucket with zinc" }
    ],
    correctAnswer: 0,
    explanation: "* Painting, greasing, and plastic coating act purely as barrier methods.\n* If the paint layer is scratched, the exposed iron will rust immediately (unlike sacrificial methods).",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q331",
    createdAt: "2026-08-21T16:20:00Z"
  },
  {
    id: "ex_ci_u9_l4_lv2_3-2026",
    question: "Why are overhead electrical power transmission cables made of an aluminium core surrounded by or reinforced with a steel cable?",
    options: [
      { text: "Aluminium provides high electrical conductivity and low density, while the steel core provides tensile strength to prevent sagging and breaking", isCorrect: true },
      { text: "Steel conducts electricity better than aluminium" },
      { text: "Aluminium protects the steel from direct sunlight" },
      { text: "Steel prevents birds from sitting on the cable" }
    ],
    correctAnswer: 0,
    explanation: "* Aluminium is a good electrical conductor and lightweight (low density), reducing weight on pylons.\n* Steel has very high tensile strength, providing structural support over long distances.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q332",
    createdAt: "2026-08-21T16:25:00Z"
  }
];
