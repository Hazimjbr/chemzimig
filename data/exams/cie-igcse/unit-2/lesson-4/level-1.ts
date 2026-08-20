import { Question } from '../../../types';

// Simple Molecules and Covalent Bonds - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u2_l4_lv1_1-2026",
    question: "How many single covalent bonds (shared pairs of valence electrons) are present in one molecule of ammonia ($NH_3$)?",
    options: [
      { text: "3 single covalent bonds (and 1 lone pair of electrons on the nitrogen atom)" },
      { text: "1 triple covalent bond" },
      { text: "4 single covalent bonds" },
      { text: "2 double covalent bonds" }
    ],
    correctAnswer: 0,
    explanation: "* Nitrogen ($Z = 7$, electronic configuration $2, 5$) needs 3 electrons to complete its valence octet.\n* Each of the 3 hydrogen atoms shares 1 electron with nitrogen, forming 3 single covalent $N-H$ bonds.\n* The remaining 2 outer electrons on nitrogen form 1 non-bonding lone pair.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q7",
    createdAt: "2026-05-16T10:00:00Z"
  }
];
