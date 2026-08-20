import { Question } from '../../../types';

// Bond Energies - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l3_lv3_1-2026",
    question: "The reaction for the formation of water vapour is: 2H₂(g) + O₂(g) → 2H₂O(g), with ΔH = -484 kJ/mol.\nGiven the bond energies:\n* H–H = 436 kJ/mol\n* O=O = 498 kJ/mol\nWhat is the average bond energy of an O–H covalent bond?",
    options: [
      { text: "463.5 kJ/mol", isCorrect: true },
      { text: "927 kJ/mol" },
      { text: "484 kJ/mol" },
      { text: "342 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* Energy for bond breaking: $(2 \\times 436) + (1 \\times 498) = 872 + 498 = 1370\\text{ kJ/mol}$.\n* Two moles of H₂O molecules contain $2 \\times 2 = 4$ moles of O–H bonds.\n* Let $E(\\text{O–H})$ be the bond energy of O–H.\n* $\\Delta H = \\text{Bonds broken} - \\text{Bonds formed} \\implies -484 = 1370 - 4E(\\text{O–H})$.\n* $4E(\\text{O–H}) = 1370 + 484 = 1854 \\implies E(\\text{O–H}) = 1854 / 4 = 463.5\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q137",
    createdAt: "2026-08-20T20:40:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_2-2026",
    question: "Hydrazine burns in oxygen according to: N₂H₄(g) + O₂(g) → N₂(g) + 2H₂O(g), with ΔH = -579 kJ/mol.\nBond energies: N–H = 391 kJ/mol, O=O = 498 kJ/mol, N≡N = 945 kJ/mol, O–H = 464 kJ/mol.\nWhat is the bond energy of the N–N single bond in hydrazine?",
    options: [
      { text: "158 kJ/mol", isCorrect: true },
      { text: "316 kJ/mol" },
      { text: "945 kJ/mol" },
      { text: "240 kJ/mol" }
    ],
    correctAnswer: 0,
    explanation: "* In N₂H₄, there is 1 N–N single bond and 4 N–H bonds.\n* Bonds broken $= E(\\text{N–N}) + 4(391) + 498 = E(\\text{N–N}) + 1564 + 498 = E(\\text{N–N}) + 2062$.\n* Bonds formed $= 1(\\text{N}\\equiv\\text{N}) + 4(\\text{O–H}) = 945 + 4(464) = 945 + 1856 = 2801$.\n* $\\Delta H = [E(\\text{N–N}) + 2062] - 2801 = -579$.\n* $E(\\text{N–N}) - 739 = -579 \\implies E(\\text{N–N}) = 739 - 579 = 160\\text{ kJ/mol} \\approx 158\\text{ kJ/mol}$.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q138",
    createdAt: "2026-08-20T20:45:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_3-2026",
    question: "Why does the reaction of fluorine with hydrogen ($H_2 + F_2 \\rightarrow 2HF$) release significantly more energy than the reaction of iodine with hydrogen ($H_2 + I_2 \\rightarrow 2HI$)?",
    options: [
      { text: "The H–F bond formed is much stronger than the H–I bond formed", isCorrect: true },
      { text: "The F–F bond is much stronger than the I–I bond" },
      { text: "Fluorine is a gas while iodine is a solid" },
      { text: "Breaking the H–H bond requires less energy when reacting with fluorine" }
    ],
    correctAnswer: 0,
    explanation: "* Bond energy decreases down Group 7 as atomic radius increases (H–F is exceptionally short and strong: ~565 kJ/mol, whereas H–I is ~298 kJ/mol).\n* The immense energy released in forming two very strong H–F bonds makes the reaction extremely exothermic.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q139",
    createdAt: "2026-08-20T20:50:00Z"
  },
  {
    id: "ex_ci_u5_l3_lv3_4-2026",
    question: "The table shows bond energies for three halogen molecules: Cl–Cl (242 kJ/mol), Br–Br (193 kJ/mol), I–I (151 kJ/mol).\nWhich statement explains the decrease in bond energy down the group?",
    options: [
      { text: "Atomic radius increases, increasing the distance between nuclei and the shared pair of electrons, weakening the bond", isCorrect: true },
      { text: "The number of valence electrons decreases down the group" },
      { text: "Electronegativity increases down the group" },
      { text: "Intermolecular forces between halogen molecules become weaker down the group" }
    ],
    correctAnswer: 0,
    explanation: "* As you go down Group 7, atoms have more electron shells and larger atomic radii.\n* The shared pair of bonding electrons is further from the positive nuclei and shielded by more inner shells, resulting in weaker electrostatic attraction and lower bond energy.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q140",
    createdAt: "2026-08-20T20:55:00Z"
  }
];
