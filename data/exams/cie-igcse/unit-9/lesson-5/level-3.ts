import { Question } from '../../../types';

// Alloys - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l5_lv3_1-2026",
    question: "Why do alloys typically melt over a range of temperatures rather than at a single, sharp melting point?",
    options: [
      { text: "Alloys are mixtures containing atoms of different elements, each with different bonding energies across the lattice", isCorrect: true },
      { text: "Alloys contain impurities that decompose into gases before melting" },
      { text: "Alloys do not have metallic bonds" },
      { text: "The metals in an alloy evaporate before melting" }
    ],
    correctAnswer: 0,
    explanation: "* Pure elements and pure compounds have sharp, distinct melting points.\n* Because alloys are non-stoichiometric mixtures of different elements, bonds between different neighboring atoms break across a temperature range rather than at one fixed point.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q342",
    createdAt: "2026-08-21T17:30:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_2-2026",
    question: "A 10.0 g sample of brass (alloy of copper and zinc) is treated with excess dilute hydrochloric acid. The zinc reacts completely to produce 0.72 dm³ of hydrogen gas at r.t.p., while the copper remains unreacted.\nWhat is the percentage by mass of copper in this brass sample?\n(Given: $A_r$ of Zn = 65; Molar gas volume at r.t.p. = 24.0 dm³/mol)",
    options: [
      { text: "80.5%", isCorrect: true },
      { text: "19.5%" },
      { text: "65.0%" },
      { text: "35.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Only zinc reacts with HCl: Zn + 2HCl → ZnCl₂ + H₂.\n* Moles of H₂ $= 0.72 / 24.0 = 0.030\\text{ mol}$.\n* Moles of Zn $= 0.030\\text{ mol}$.\n* Mass of Zn $= 0.030 \\times 65 = 1.95\\text{ g}$.\n* Mass of Cu $= 10.0 - 1.95 = 8.05\\text{ g}$.\n* Percentage of Cu $= (8.05 / 10.0) \\times 100\\% = 80.5\\%$.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q343",
    createdAt: "2026-08-21T17:35:00Z"
  },
  {
    id: "ex_ci_u9_l5_lv3_3-2026",
    question: "Why is duralumin (an alloy containing ~95% aluminium, ~4% copper, plus traces of magnesium and manganese) used in aircraft construction instead of pure aluminium metal?",
    options: [
      { text: "Copper and magnesium atoms prevent dislocation gliding in the aluminium lattice, giving high tensile strength while retaining low density", isCorrect: true },
      { text: "Duralumin has a much higher density that stabilises the aircraft" },
      { text: "Pure aluminium dissolves in rain whereas duralumin does not" },
      { text: "Duralumin is transparent to radar waves" }
    ],
    correctAnswer: 0,
    explanation: "* Pure aluminium is too soft and ductile for aircraft structural airframes.\n* Alloying it with small percentages of copper and magnesium introduces lattice distortion and precipitate hardening, dramatically boosting tensile strength while preserving aluminium's low weight.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q344",
    createdAt: "2026-08-21T17:40:00Z"
  }
];
