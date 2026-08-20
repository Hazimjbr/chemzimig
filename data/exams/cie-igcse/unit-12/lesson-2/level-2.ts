import { Question } from '../../../types';

// Purification & Separation - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l2_lv2_1-2026",
    question: "Why must cold cooling water enter at the BOTTOM of a Liebig condenser jacket and exit at the TOP during distillation?",
    options: [
      { text: "To ensure the entire cooling jacket remains completely filled with cold water, preventing air pockets and maximizing condensation efficiency", isCorrect: true },
      { text: "To increase the boiling point of the liquid in the flask" },
      { text: "To prevent the distillate from reacting with atmospheric oxygen" },
      { text: "To push the vapour faster through the inner tube" }
    ],
    correctAnswer: 0,
    explanation: "* Entering from the bottom forces water to fill the entire condenser jacket against gravity, eliminating air bubbles and providing continuous maximum heat exchange.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q457",
    createdAt: "2026-08-22T05:20:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_2-2026",
    question: "In a paper chromatography experiment, the solvent front moves 10.0 cm from the baseline. A dye spot moves 6.5 cm from the baseline.\nWhat is the $R_f$ value of this dye?",
    options: [
      { text: "0.65", isCorrect: true },
      { text: "1.54" },
      { text: "0.35" },
      { text: "6.50" }
    ],
    correctAnswer: 0,
    explanation: "* $R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}} = \\frac{6.5\\text{ cm}}{10.0\\text{ cm}} = 0.65$.\n* (Note: $R_f$ values are dimensionless and must always be $\\le 1.0$).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q458",
    createdAt: "2026-08-22T05:25:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_3-2026",
    question: "Why is a 'locating agent' (such as ninhydrin spray) applied to a paper chromatogram after separating a mixture of colourless amino acids?",
    options: [
      { text: "To react chemically with the colourless amino acid spots, turning them into visible coloured spots for measurement", isCorrect: true },
      { text: "To dissolve the paper fibers" },
      { text: "To speed up the evaporation of the solvent front" },
      { text: "To measure the pH of each spot" }
    ],
    correctAnswer: 0,
    explanation: "* Many biochemical substances (like amino acids and sugars) are colourless and invisible on dry paper.\n* Spraying with a locating agent (ninhydrin) produces purple/pink coloured spots that can be seen and measured.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q459",
    createdAt: "2026-08-22T05:30:00Z"
  },
  {
    id: "ex_ci_u12_l2_lv2_4-2026",
    question: "In a fractional distillation apparatus, what is the role of the glass beads inside the fractionating column?",
    options: [
      { text: "To provide a large surface area for continuous repeated cycles of evaporation and condensation, separating liquids with close boiling points", isCorrect: true },
      { text: "To absorb all water vapour from the mixture" },
      { text: "To act as a chemical catalyst that cracks the vapours" },
      { text: "To prevent the thermometer from getting too hot" }
    ],
    correctAnswer: 0,
    explanation: "* Glass beads create a temperature gradient up the column with high surface area.\n* Higher-boiling vapours condense and drip back down, while the lower-boiling component reaches the top and distils over first.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q460",
    createdAt: "2026-08-22T05:35:00Z"
  }
];
