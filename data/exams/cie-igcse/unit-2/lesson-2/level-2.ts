import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv2_1-2026",
    question: "A mixture contains solid sand (silicon dioxide, insoluble in water) and solid sodium chloride (soluble in water). Which sequence of laboratory techniques is used to obtain dry crystals of pure sodium chloride and dry sand?",
    options: [
      { text: "Add water → filter → wash and dry residue (sand) → heat filtrate to crystallisation point → cool and dry crystals (NaCl)" },
      { text: "Fractional distillation → condensation → filtration" },
      { text: "Chromatography → evaporation → magnetic separation" },
      { text: "Add acid → neutralisation → decantation" }
    ],
    correctAnswer: 0,
    explanation: "* Adding water dissolves the soluble sodium chloride while leaving the insoluble sand as a solid.\n* Filtration separates the solid sand (residue) on the filter paper from the sodium chloride solution (filtrate).\n* Evaporating the filtrate to saturation point, cooling to crystallise, and drying gives pure sodium chloride crystals.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q5",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_2-impurity-mp-bp",
    question: "Pure water melts at 0 °C and boils at 100 °C. What could be the melting point and boiling point of water containing a dissolved impurity?",
    options: [
      { text: "Melting point: +3 °C ; Boiling point: 96 °C" },
      { text: "Melting point: +3 °C ; Boiling point: 104 °C" },
      { text: "Melting point: -3 °C ; Boiling point: 96 °C" },
      { text: "Melting point: -3 °C ; Boiling point: 104 °C" }
    ],
    correctAnswer: 3,
    explanation: "* The presence of an impurity causes depression of the freezing/melting point below 0 °C (-3 °C).\n* The presence of an impurity causes elevation of the boiling point above 100 °C (104 °C).\n* Both transitions occur gradually over a temperature range rather than at a sharp fixed point.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q2",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l2_lv2_3-classifying-table",
    question: "In which row are the three substances correctly classified?",
    options: [
      { text: "Element: Water ; Compound: Sulfur ; Mixture: Brass" },
      { text: "Element: Sulfur ; Compound: Brass ; Mixture: Water" },
      { text: "Element: Brass ; Compound: Sulfur ; Mixture: Water" },
      { text: "Element: Sulfur ; Compound: Water ; Mixture: Brass" }
    ],
    correctAnswer: 3,
    explanation: "* Sulfur consists of identical S atoms and cannot be broken down chemically, so it is an element.\n* Water consists of H and O chemically combined in a fixed 2:1 ratio (H₂O), so it is a compound.\n* Brass is an alloy of copper and zinc mixed physically in variable proportions without chemical bonds, so it is a mixture.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q4",
    lessonNum: 2,
    createdAt: "2026-05-11T10:00:00Z"
  }
];

