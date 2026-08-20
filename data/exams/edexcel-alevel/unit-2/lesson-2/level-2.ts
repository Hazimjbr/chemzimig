import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l2_lv2_1-2026",
    question: "Water (H₂O) has a boiling point of 100 °C, while hydrogen fluoride (HF) has a boiling point of only 19.5 °C, despite HF having a stronger individual hydrogen bond (due to fluorine's higher electronegativity). What accounts for water's higher boiling point?",
    options: [
      { text: "HF is an ionic compound" },
      { text: "Each water molecule forms an average of 2 hydrogen bonds per molecule (using its 2 lone pairs and 2 δ+ hydrogens), forming an extensive 3D network, whereas HF forms an average of only 1 hydrogen bond per molecule (limited by its single hydrogen atom)", isCorrect: true },
      { text: "Water has more electrons than HF" },
      { text: "Fluorine does not possess lone pairs" }
    ],
    correctAnswer: 1,
    explanation: "* In HF, each molecule has 3 lone pairs but only 1 $\\text{H}$ atom, limiting the network to an average of 1 hydrogen bond per molecule in linear chains.\n* Water has a $1:1$ ratio of lone pairs to $\\text{H}$ atoms (2 of each), allowing on average 2 hydrogen bonds per molecule (4 per molecule in ice), creating a vastly more cohesive 3D network.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q11",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_2-2026",
    question: "Which of the following compounds has the highest boiling point?",
    options: [
      { text: "Propane (CH₃CH₂CH₃, Mr = 44)" },
      { text: "Methoxymethane (CH₃OCH₃, Mr = 46)" },
      { text: "Ethanal (CH₃CHO, Mr = 44)" },
      { text: "Ethanol (CH₃CH₂OH, Mr = 46)", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Propane relies solely on weak London dispersion forces ($bp = -42\\text{ }^\\circ\\text{C}$).\n* Methoxymethane and ethanal experience permanent dipole-dipole attractions ($bp = -24\\text{ }^\\circ\\text{C}$ and $+20\\text{ }^\\circ\\text{C}$).\n* Ethanol possesses strong intermolecular **hydrogen bonding** ($-\\text{OH}$ group), giving it the highest boiling point ($bp = 78.4\\text{ }^\\circ\\text{C}$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q12",
    createdAt: "2026-07-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_3-2026",
    question: "Why does the boiling point of the hydrogen halides increase in the order: $\\text{HCl} (-85\\text{ }^\\circ\\text{C}) < \\text{HBr} (-67\\text{ }^\\circ\\text{C}) < \\text{HI} (-35\\text{ }^\\circ\\text{C})$?",
    options: [
      { text: "The permanent dipole moment increases from HCl to HI" },
      { text: "Increasing number of electrons and molecular size from HCl to HI increases polarizability, making London dispersion forces significantly stronger and dominant over the decreasing dipole-dipole attractions", isCorrect: true },
      { text: "HI forms hydrogen bonds in the liquid state" },
      { text: "HCl has a giant ionic lattice" }
    ],
    correctAnswer: 1,
    explanation: "* Although permanent dipole moment decreases from $\\text{HCl}$ to $\\text{HI}$ (due to falling electronegativity difference), the number of electrons increases from 18 to 36 to 54.\n* The resulting increase in London dispersion forces easily outweighs the decrease in dipole forces.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q9",
    createdAt: "2026-07-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_4-2026",
    question: "Why is propan-1-ol completely miscible with water, whereas hexan-1-ol has very low solubility in water?",
    options: [
      { text: "Hexan-1-ol is an ionic salt" },
      { text: "In hexan-1-ol, the large non-polar hydrophobic hydrocarbon chain disrupts the hydrogen-bonded water structure without forming enough compensating attractions, outweighing the hydrophilic effect of the single –OH group", isCorrect: true },
      { text: "Propan-1-ol cannot form hydrogen bonds" },
      { text: "Hexan-1-ol reacts with water to produce toxic gas" }
    ],
    correctAnswer: 1,
    explanation: "* In short-chain alcohols (propan-1-ol), the hydrophilic $-\\text{OH}$ group forms strong hydrogen bonds with water that dominate the molecule.\n* In long-chain alcohols (hexan-1-ol), the large non-polar alkyl chain is hydrophobic and cannot interact favorably with water, greatly reducing solubility.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q12",
    createdAt: "2026-07-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_5-2026",
    question: "Which of the following physical properties of water is a direct consequence of its extensive intermolecular hydrogen bonding network?",
    options: [
      { text: "High surface tension and high specific heat capacity", isCorrect: true },
      { text: "Zero electrical resistance at room temperature" },
      { text: "Low enthalpy of vaporization" },
      { text: "High compressibility" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogen bonding gives water an unusually high surface tension (molecules at the surface are pulled inward by strong cohesive forces) and a high specific heat capacity ($4.18\\text{ J g}^{-1}\\text{ K}^{-1}$) as heat energy is absorbed breaking hydrogen bonds.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q13",
    createdAt: "2026-07-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv2_6-2026",
    question: "When a charged rod (e.g., electrostatic plastic rod) is held near a thin stream of liquid from a burette, which of the following liquids will be deflected significantly towards the rod?",
    options: [
      { text: "Hexane (C₆H₁₄)" },
      { text: "Tetrachloromethane (CCl₄)" },
      { text: "Trichloromethane (CHCl₃)", isCorrect: true },
      { text: "Cyclohexane (C₆H₁₂)" }
    ],
    correctAnswer: 2,
    explanation: "* Polar molecules align their permanent dipoles in the non-uniform electric field of a charged rod and are attracted towards it.\n* Trichloromethane ($\\text{CHCl}_3$) is polar (net dipole moment towards chlorine), whereas $\\text{CCl}_4$, hexane, and cyclohexane are non-polar and show no significant deflection.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q10",
    createdAt: "2026-07-19T10:00:00Z"
  }
];

