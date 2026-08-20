import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv3_1-2026",
    question: "Tetrachloromethane ($CCl_4$) and silicon(IV) oxide ($SiO_2$) both contain Group IV elements bonded covalently to non-metals. Why is $CCl_4$ a volatile liquid with a low boiling point ($76.7^\\circ\\text{C}$), whereas $SiO_2$ (quartz) is an extremely hard solid with a very high melting point ($1710^\\circ\\text{C}$)?",
    options: [
      { text: "$CCl_4$ consists of simple discrete molecules held by weak intermolecular forces, whereas $SiO_2$ is a giant macromolecular covalent lattice where every silicon atom is bonded to 4 oxygen atoms by strong covalent bonds extending in 3 dimensions throughout the entire structure" },
      { text: "$CCl_4$ has ionic bonding between $C^{4+}$ and $Cl^-$ ions while $SiO_2$ has metallic bonding" },
      { text: "Silicon is a metal with a sea of delocalised electrons while carbon is a non-metal" },
      { text: "The covalent $C-Cl$ bond is much weaker than standard intermolecular forces" }
    ],
    correctAnswer: 0,
    explanation: "* $CCl_4$ has a simple molecular structure: only weak intermolecular attractions between molecules need to be broken to boil it, requiring little energy.\n* $SiO_2$ has a giant covalent macromolecular structure (similar to diamond): melting requires breaking millions of strong covalent $Si-O$ bonds throughout the 3D lattice, requiring enormous thermal energy.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 23 Q10",
    createdAt: "2026-05-18T10:00:00Z"
  }
];
