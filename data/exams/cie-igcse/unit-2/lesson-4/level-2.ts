import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv2_1-2026",
    question: "A molecule of nitrogen gas ($N_2$) contains a triple covalent bond ($N \\equiv N$). How many bonding electrons and how many non-bonding (lone pair) electrons are in a single $N_2$ molecule?",
    options: [
      { text: "6 bonding electrons (3 shared pairs) and 4 non-bonding electrons (2 lone pairs)" },
      { text: "3 bonding electrons and 7 non-bonding electrons" },
      { text: "6 bonding electrons and 8 non-bonding electrons" },
      { text: "2 bonding electrons and 6 non-bonding electrons" }
    ],
    correctAnswer: 0,
    explanation: "* A triple covalent bond consists of 3 shared pairs of electrons, meaning $3 \\times 2 = 6\\text{ bonding electrons}$.\n* Each nitrogen atom ($2, 5$) contributes 3 valence electrons to the triple bond, leaving 2 non-bonding electrons (1 lone pair) on each nitrogen atom ($2 \\times 2 = 4\\text{ non-bonding electrons}$).\n* Total valence electrons = $6 + 4 = 10\\text{ electrons}$.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q8",
    createdAt: "2026-05-17T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l4_lv2_2-2026",
    question: "Methane ($CH_4$) has a very low boiling point ($-161.5^\\circ\\text{C}$) and is a gas at room temperature. Which statement correctly explains why simple molecular substances have low melting and boiling points?",
    options: [
      { text: "The intermolecular forces between separate $CH_4$ molecules are weak and require relatively little thermal energy to overcome, even though the covalent $C-H$ bonds inside each molecule are strong" },
      { text: "The covalent bonds between carbon and hydrogen atoms break easily at low temperatures" },
      { text: "Carbon and hydrogen atoms lose their electrical charge when bonded" },
      { text: "Methane forms a giant covalent macromolecule that expands and evaporates easily" }
    ],
    correctAnswer: 0,
    explanation: "* In simple molecular structures, melting and boiling involve overcoming the weak attractive intermolecular forces between molecules.\n* The strong intra-molecular covalent bonds within the molecules remain completely intact during state changes.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q9",
    createdAt: "2026-05-17T10:00:00Z"
  }
];
