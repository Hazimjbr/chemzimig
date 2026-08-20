import { Question } from '../../../types';

// Air Quality & Climate - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u10_l3_lv1_1-2026",
    question: "What are the approximate percentages by volume of nitrogen (N₂) and oxygen (O₂) in clean, dry air?",
    options: [
      { text: "78% Nitrogen, 21% Oxygen", isCorrect: true },
      { text: "50% Nitrogen, 50% Oxygen" },
      { text: "21% Nitrogen, 78% Oxygen" },
      { text: "90% Nitrogen, 9% Oxygen" }
    ],
    correctAnswer: 0,
    explanation: "* Clean, dry air contains approximately 78% nitrogen, 21% oxygen, ~0.9% argon, 0.04% carbon dioxide, and noble gases.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q369",
    createdAt: "2026-08-21T20:00:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv1_2-2026",
    question: "Which air pollutant is produced by the INCOMPLETE combustion of carbon-containing fossil fuels in car engines or faulty heaters?",
    options: [
      { text: "Carbon monoxide (CO)", isCorrect: true },
      { text: "Carbon dioxide (CO₂)" },
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Methane (CH₄)" }
    ],
    correctAnswer: 0,
    explanation: "* Incomplete combustion with limited oxygen supply produces toxic, colourless, and odourless carbon monoxide: 2C + O₂ → 2CO.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q370",
    createdAt: "2026-08-21T20:05:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv1_3-2026",
    question: "Why is carbon monoxide gas (CO) extremely dangerous and toxic to humans?",
    options: [
      { text: "It binds irreversibly to hemoglobin in red blood cells, blocking the transport of oxygen around the body", isCorrect: true },
      { text: "It causes acid burns in the lungs" },
      { text: "It decomposes into toxic chlorine gas" },
      { text: "It destroys white blood cells instantly" }
    ],
    correctAnswer: 0,
    explanation: "* Carbon monoxide binds with high affinity to hemoglobin forming carboxyhemoglobin, preventing oxygen from binding and leading to suffocation.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q371",
    createdAt: "2026-08-21T20:10:00Z"
  },
  {
    id: "ex_ci_u10_l3_lv1_4-2026",
    question: "Which gas produced during the combustion of fossil fuels containing sulfur impurities is a major cause of acid rain?",
    options: [
      { text: "Sulfur dioxide (SO₂)", isCorrect: true },
      { text: "Carbon monoxide (CO)" },
      { text: "Methane (CH₄)" },
      { text: "Argon (Ar)" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfur impurities in coal and petroleum burn to form sulfur dioxide: S + O₂ → SO₂.\n* In the atmosphere, SO₂ oxidises and dissolves in rainwater to form sulfuric acid (acid rain).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q372",
    createdAt: "2026-08-21T20:15:00Z"
  }
];
