import { Question } from '../../../types';

// Rate of Reaction - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u6_l1_lv2_1-2026",
    question: "A graph of the volume of hydrogen gas evolved against time is plotted for the reaction of zinc with excess dilute sulfuric acid.\nWhy is the slope of the curve steepest at the very beginning of the reaction ($t = 0$)?",
    options: [
      { text: "The acid has reached its highest temperature" },
      { text: "The concentration of acid and surface area of zinc are at their maximum values", isCorrect: true },
      { text: "The zinc has dissolved completely" },
      { text: "The activation energy is zero at the start" }
    ],
    correctAnswer: 1,
    explanation: "* At $t = 0$, the concentration of reactant ions (H⁺) is highest and the surface area of zinc is largest.\n* This produces the highest collision frequency, giving the maximum initial rate of reaction (steepest gradient).",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q156",
    createdAt: "2026-08-20T22:15:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv2_2-2026",
    question: "During a reaction producing oxygen gas, 60 cm³ of gas is collected in 30 seconds, and no further gas is produced after 30 seconds.\nWhat is the average rate of reaction over this 30-second period?",
    options: [
      { text: "0.5 cm³/s" },
      { text: "2.0 cm³/s", isCorrect: true },
      { text: "30 cm³/s" },
      { text: "1800 cm³/s" }
    ],
    correctAnswer: 1,
    explanation: "* Formula: $\\text{Average rate} = \\text{Total volume of gas produced} / \\text{Time taken}$.\n* Average rate $= 60\\text{ cm}^3 / 30\\text{ s} = 2.0\\text{ cm}^3\\text{/s}$.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q157",
    createdAt: "2026-08-20T22:20:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv2_3-2026",
    question: "How can the instantaneous rate of a chemical reaction at time $t = 20\\text{ s}$ be determined from a graph of product mass against time?",
    options: [
      { text: "Read the mass value directly from the y-axis at t = 20 s" },
      { text: "Divide the mass at t = 20 s by 20" },
      { text: "Draw a tangent to the curve at t = 20 s and calculate its gradient", isCorrect: true },
      { text: "Calculate the area under the curve up to t = 20 s" }
    ],
    correctAnswer: 2,
    explanation: "* The instantaneous rate of reaction at any specific time equals the gradient (slope) of the tangent drawn to the curve at that time point.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q158",
    createdAt: "2026-08-20T22:25:00Z"
  },
  {
    id: "ex_ci_u6_l1_lv2_4-2026",
    question: "A reaction produces a gas. On a graph of gas volume against time, how do you know the exact moment the reaction has stopped?",
    options: [
      { text: "When the curve crosses the x-axis" },
      { text: "When the curve becomes completely horizontal (gradient = 0)", isCorrect: true },
      { text: "When the gradient is at its maximum steepness" },
      { text: "When the volume reaches exactly 24 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* When one of the reactants is completely used up (limiting reactant), no more product gas is formed.\n* The volume remains constant and the curve becomes horizontal with a gradient of zero.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q159",
    createdAt: "2026-08-20T22:30:00Z"
  }
];
