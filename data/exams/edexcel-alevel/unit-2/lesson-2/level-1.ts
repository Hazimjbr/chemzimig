import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l2_lv1_1-2026",
    question: "Which of the following is the origin of London dispersion forces (instantaneous dipole - induced dipole interactions)?",
    options: [
      { text: "Electrostatic attraction between oppositely charged full ionic species" },
      { text: "Random, continuous fluctuations in electron cloud density around an atom or molecule creating a temporary instantaneous dipole, which induces an opposite dipole in an adjacent molecule", isCorrect: true },
      { text: "The sharing of a lone pair of electrons to form a coordinate bond" },
      { text: "Electrons moving through a delocalized metal lattice" }
    ],
    correctAnswer: 1,
    explanation: "* London dispersion forces arise in all atoms and molecules due to the unsymmetrical movement of electrons at any given instant, creating temporary dipoles that induce dipoles in neighboring molecules.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q8",
    createdAt: "2026-07-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_2-2026",
    question: "Which of the following intermolecular forces is generally the strongest under comparable molecular size?",
    options: [
      { text: "London dispersion forces" },
      { text: "Permanent dipole-dipole attractions" },
      { text: "Hydrogen bonding", isCorrect: true },
      { text: "Gravitational forces" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen bonding is the strongest type of intermolecular attraction, occurring when hydrogen is directly bonded to a highly electronegative atom (N, O, or F).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q9",
    createdAt: "2026-07-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_3-2026",
    question: "Which of the following molecules can form hydrogen bonds between its own molecules in the pure liquid state?",
    options: [
      { text: "CH₄" },
      { text: "H₂S" },
      { text: "CH₃OH (Methanol)", isCorrect: true },
      { text: "CH₃OCH₃ (Dimethyl ether)" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen bonding requires a hydrogen atom covalently bonded directly to Nitrogen, Oxygen, or Fluorine (with available lone pairs).\n* Methanol contains an $-\\text{O}-\\text{H}$ group, allowing intermolecular hydrogen bonding.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q7",
    createdAt: "2026-07-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_4-2026",
    question: "Why does the boiling point of the noble gases increase systematically down Group 0 (He < Ne < Ar < Kr < Xe)?",
    options: [
      { text: "Nuclear charge decreases down the group" },
      { text: "The number of electrons per atom increases, increasing the polarizability of the electron cloud and leading to stronger London dispersion forces", isCorrect: true },
      { text: "They form covalent bonds with each other in the liquid state" },
      { text: "Helium forms hydrogen bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Down Group 0, atoms have more electrons and larger electron clouds.\n* The electron cloud is more easily polarized, resulting in stronger instantaneous dipole-induced dipole (London dispersion) forces that require more thermal energy to overcome.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q9",
    createdAt: "2026-07-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_5-2026",
    question: "Which of the following compounds has permanent dipole-dipole attractions between its molecules but CANNOT form hydrogen bonds between its own molecules?",
    options: [
      { text: "HF" },
      { text: "H₂O" },
      { text: "HCl", isCorrect: true },
      { text: "NH₃" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen chloride ($\\text{HCl}$) is a polar molecule ($^{\\delta+}\\text{H}-\\text{Cl}^{\\delta-}$), so it experiences permanent dipole-dipole attractions.\n* However, Chlorine is not electronegative or small enough to support true hydrogen bonding.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q10",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_6-2026",
    question: "Why is water (H₂O) a liquid at room temperature while hydrogen sulfide (H₂S) is a gas, despite H₂S having a greater molecular mass ($M_r = 34.1$ vs $18.0$)?",
    options: [
      { text: "H₂S has stronger London forces" },
      { text: "Water molecules are held together by extensive intermolecular hydrogen bonds, which require substantially more energy to break than the weaker dipole-dipole and London forces in H₂S", isCorrect: true },
      { text: "H₂S is an ionic solid at high temperature" },
      { text: "Water contains covalent triple bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Oxygen is much more electronegative than sulfur, enabling water to form strong intermolecular hydrogen bonds (two lone pairs and two $\\text{O}-\\text{H}$ bonds per molecule forming a 3D network), giving it an anomalously high boiling point.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q8",
    createdAt: "2026-07-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_7-2026",
    question: "Why does solid ice have a lower density than liquid water at 0 °C (allowing ice to float)?",
    options: [
      { text: "Ice contains trapped air bubbles" },
      { text: "In ice, hydrogen bonds hold water molecules in a rigid, open tetrahedral lattice with large spaces; upon melting, the open structure collapses and molecules pack more closely together", isCorrect: true },
      { text: "Liquid water has covalent bonds whereas ice does not" },
      { text: "Water expands upon cooling because electrons expand" }
    ],
    correctAnswer: 1,
    explanation: "* In ice, each water molecule participates in 4 hydrogen bonds in a regular open tetrahedral lattice.\n* When ice melts, some hydrogen bonds break, allowing water molecules to tumble into the open voids and pack closer together, making liquid water denser than ice.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q10",
    createdAt: "2026-07-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l2_lv1_8-2026",
    question: "Why are non-polar organic alkanes like hexane insoluble in water?",
    options: [
      { text: "Hexane molecules react violently with water" },
      { text: "Hexane cannot form hydrogen bonds with water; the weak London attractions between hexane and water cannot overcome the strong hydrogen bonds between water molecules", isCorrect: true },
      { text: "Water molecules are non-polar" },
      { text: "Hexane is a solid at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Dissolving hexane would require breaking strong hydrogen bonds between water molecules without releasing sufficient energy from weak hexane-water London interactions, making the dissolution energetically unfavorable.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q11",
    createdAt: "2026-07-16T10:00:00Z"
  }
];

