import { Question } from '../../../types';

// Alkanes - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u11_l1_lv2_1-2026",
    question: "Methane reacts with chlorine gas in the presence of ultraviolet (UV) light: CH₄ + Cl₂ → CH₃Cl + HCl.\nWhat is the specific role of ultraviolet light in this photochemical substitution reaction?",
    options: [
      { text: "It provides photochemical energy to break the Cl–Cl covalent bond by homolytic fission, generating reactive chlorine free radicals (Cl•)", isCorrect: true },
      { text: "It acts as a physical filter to remove water vapour" },
      { text: "It turns methane into a positively charged carbocation" },
      { text: "It cools the gas mixture to prevent an explosion" }
    ],
    correctAnswer: 0,
    explanation: "* Alkanes are generally unreactive.\n* UV light supplies sufficient photon energy ($h\\nu$) to break the relatively weak Cl–Cl bond (initiation step), forming two chlorine free radicals ($Cl\\bullet$) with unpaired electrons.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q396",
    createdAt: "2026-08-21T22:15:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv2_2-2026",
    question: "As the number of carbon atoms per molecule increases in the straight-chain alkane series from methane (CH₄) to decane (C₁₀H₂₂), how do their physical properties change?",
    options: [
      { text: "Boiling point increases, viscosity increases, and flammability decreases", isCorrect: true },
      { text: "Boiling point decreases, viscosity decreases, and flammability increases" },
      { text: "Boiling point increases, but viscosity and flammability remain identical" },
      { text: "Volatility increases, and density decreases" }
    ],
    correctAnswer: 0,
    explanation: "* Longer alkane molecules have larger surface areas and more electrons, resulting in stronger attractive intermolecular forces.\n* Stronger intermolecular forces lead to higher boiling points, higher viscosity (more thick/syrupy), and lower volatility/flammability.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q397",
    createdAt: "2026-08-21T22:20:00Z"
  },
  {
    id: "ex_ci_u11_l1_lv2_3-2026",
    question: "Which of the following pairs of compounds are structural isomers of each other?",
    options: [
      { text: "Butane (CH₃CH₂CH₂CH₃) and 2-methylpropane (CH₃CH(CH₃)CH₃)", isCorrect: true },
      { text: "Methane (CH₄) and ethane (C₂H₆)" },
      { text: "Propane (C₃H₈) and propene (C₃H₆)" },
      { text: "Ethanol (C₂H₅OH) and ethanoic acid (CH₃COOH)" }
    ],
    correctAnswer: 0,
    explanation: "* Structural isomers have the SAME molecular formula (both are C₄H₁₀) but DIFFERENT structural formulas / carbon chain arrangements.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q398",
    createdAt: "2026-08-21T22:25:00Z"
  }
];
