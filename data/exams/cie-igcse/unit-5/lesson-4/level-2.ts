import { Question } from '../../../types';

// Fuel and Hydrogen - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv2_1-2026",
    question: "Why is carbon monoxide (CO) produced during the incomplete combustion of hydrocarbon fuels dangerous to human health?",
    options: [
      { text: "It causes acid rain that corrodes lung tissue" },
      { text: "It binds irreversibly to hemoglobin in red blood cells, preventing oxygen transport", isCorrect: true },
      { text: "It is an explosive green gas that destroys respiratory enzymes" },
      { text: "It depletes the stratospheric ozone layer" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon monoxide is a colourless, odourless, toxic gas.\n* It binds strongly with hemoglobin to form carboxyhemoglobin, drastically reducing the blood's capacity to carry oxygen around the body.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q145",
    createdAt: "2026-08-20T21:20:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_2-2026",
    question: "Which of the following is a major disadvantage of using hydrogen as a fuel for passenger cars compared to petrol?",
    options: [
      { text: "Hydrogen releases toxic nitrogen dioxide gas when it burns" },
      { text: "Hydrogen requires bulky high-pressure storage tanks or cryogenic cooling", isCorrect: true },
      { text: "Hydrogen produces less energy per gram than petrol" },
      { text: "Hydrogen cannot react with oxygen in an electrochemical cell" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen has a very low density as a gas, meaning large volumes must be compressed under high pressure (350–700 bar) or liquefied at cryogenic temperatures (-253°C) for transport and storage.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q146",
    createdAt: "2026-08-20T21:25:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_3-2026",
    question: "The energy values released per gram of four fuels are:\n* Fuel P: 30 kJ/g\n* Fuel Q: 48 kJ/g\n* Fuel R: 142 kJ/g\n* Fuel S: 20 kJ/g\nWhich fuel is most likely to be hydrogen gas?",
    options: [
      { text: "Fuel P" },
      { text: "Fuel Q" },
      { text: "Fuel R", isCorrect: true },
      { text: "Fuel S" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen has the highest energy content per unit mass of any common chemical fuel (approx. 142 kJ/g), compared to petrol/methane (approx. 45–55 kJ/g) and coal/wood (20–30 kJ/g).",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q147",
    createdAt: "2026-08-20T21:30:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv2_4-2026",
    question: "Most industrial hydrogen is currently produced by steam reforming of natural gas: CH₄ + H₂O → CO + 3H₂.\nWhy does this method mean hydrogen fuel is not yet completely carbon-neutral?",
    options: [
      { text: "Methane is an unreactive noble gas" },
      { text: "The production process uses fossil fuel and produces carbon oxides as byproducts", isCorrect: true },
      { text: "The hydrogen gas produced is radioactive" },
      { text: "Steam reforming is an exothermic process that wastes heat" }
    ],
    correctAnswer: 1,
    explanation: "* Although burning hydrogen produces only water at the point of use, manufacturing it from fossil fuels (methane) releases carbon monoxide and carbon dioxide into the atmosphere.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q148",
    createdAt: "2026-08-20T21:35:00Z"
  }
];
