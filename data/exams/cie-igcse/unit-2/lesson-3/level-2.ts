import { Question } from '../../../types';

// Ions and Ionic Bonds - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u2_l3_lv2_1-2026",
    question: "An element X from Group II reacts with an element Y from Group VII. What is the correct empirical formula of the ionic compound formed, and what are the charges on the respective ions?",
    options: [
      { text: "Formula: $\\text{XY}_2$; Ions: $\\text{X}^{2+}$ and $\\text{Y}^-$" },
      { text: "Formula: $\\text{XY}$; Ions: $\\text{X}^+$ and $\\text{Y}^-$" },
      { text: "Formula: $\\text{X}_2\\text{Y}$; Ions: $\\text{X}^+$ and $\\text{Y}^{2-}$" },
      { text: "Formula: $\\text{X}_2\\text{Y}_7$; Ions: $\\text{X}^{7+}$ and $\\text{Y}^{2-}$" }
    ],
    correctAnswer: 0,
    explanation: "* Group II elements have 2 valence electrons and lose them to form $+2$ cations ($\\text{X}^{2+}$).\n* Group VII elements have 7 valence electrons and gain 1 electron to form $-1$ anions ($\\text{Y}^-$).\n* To form a neutral ionic compound with zero net charge, 1 $\\text{X}^{2+}$ ion pairs with 2 $\\text{Y}^-$ ions, giving the empirical formula $\\text{XY}_2$ (e.g. $MgCl_2$, $CaF_2$).",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q6",
    createdAt: "2026-05-14T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l3_lv2_2-2026",
    question: "Why does solid sodium chloride ($NaCl$) act as an electrical insulator, whereas molten sodium chloride and aqueous sodium chloride conduct electricity readily?",
    options: [
      { text: "In the solid state, ions are locked in fixed positions in the rigid 3D lattice and cannot move; in molten and aqueous states, the ions are mobile and free to move toward the electrodes to carry electric charge" },
      { text: "Solid sodium chloride contains only neutral atoms, but melting creates charged ions" },
      { text: "Electrons flow freely through liquid sodium chloride but are absorbed in the solid" },
      { text: "Melting sodium chloride turns it into a metallic lattice with a sea of delocalised electrons" }
    ],
    correctAnswer: 0,
    explanation: "* Electrical conduction in ionic compounds requires mobile charged particles.\n* In solid ionic lattices, $Na^+$ and $Cl^-$ ions are held rigidly by strong electrostatic forces and can only vibrate in place.\n* When melted or dissolved in water, the lattice is broken down, allowing $Na^+$ cations and $Cl^-$ anions to move freely and conduct electric current.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q7",
    createdAt: "2026-05-14T10:00:00Z"
  }
];
