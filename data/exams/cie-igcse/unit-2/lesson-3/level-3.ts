import { Question } from '../../../types';

// Ions and Ionic Bonds - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l3_lv3_1-2026",
    question: "Magnesium oxide ($MgO$) and sodium chloride ($NaCl$) both form giant ionic lattices. Why is the melting point of magnesium oxide ($2852^\\circ\\text{C}$) vastly higher than that of sodium chloride ($801^\\circ\\text{C}$)?",
    options: [
      { text: "$Mg^{2+}$ and $O^{2-}$ ions carry double the charge of $Na^+$ and $Cl^-$ ions, resulting in much stronger electrostatic attractions in the lattice that require significantly more thermal energy to break apart" },
      { text: "Magnesium oxide contains giant covalent macromolecular bonds rather than ionic bonds" },
      { text: "Sodium chloride molecules are simple covalent structures held by weak intermolecular forces" },
      { text: "Magnesium is a denser metal than sodium, which prevents the lattice from expanding" }
    ],
    correctAnswer: 0,
    explanation: "* Electrostatic attraction between ions is proportional to the product of their ionic charges ($q_1 \\times q_2$).\n* In $MgO$, the charges are $+2$ and $-2$ ($|q_1 q_2| = 4$), whereas in $NaCl$, the charges are $+1$ and $-1$ ($|q_1 q_2| = 1$).\n* The fourfold stronger ionic attractions in $MgO$ require far greater kinetic energy (higher temperature) to overcome and melt the crystal lattice.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q8",
    createdAt: "2026-05-15T10:00:00Z"
  }
];
