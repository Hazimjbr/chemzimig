import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv2_1-2026",
    question: "A mixture contains solid sand (silicon dioxide, insoluble in water) and solid sodium chloride (soluble in water). Which sequence of laboratory techniques is used to obtain dry crystals of pure sodium chloride and dry sand?",
    options: [
      { text: "Add water $\\rightarrow$ filter $\\rightarrow$ wash and dry residue (sand) $\\rightarrow$ heat filtrate to crystallisation point $\\rightarrow$ cool and dry crystals (NaCl)" },
      { text: "Fractional distillation $\\rightarrow$ condensation $\\rightarrow$ filtration" },
      { text: "Chromatography $\\rightarrow$ evaporation $\\rightarrow$ magnetic separation" },
      { text: "Add acid $\\rightarrow$ neutralisation $\\rightarrow$ decantation" }
    ],
    correctAnswer: 0,
    explanation: "* Adding water dissolves the soluble sodium chloride while leaving the insoluble sand as a solid.\n* Filtration separates the solid sand (residue) on the filter paper from the sodium chloride solution (filtrate).\n* Evaporating the filtrate to saturation point, cooling to crystallise, and drying gives pure sodium chloride crystals.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q5",
    createdAt: "2026-05-11T10:00:00Z"
  }
];
