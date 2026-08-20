import { Question } from '../../../types';

// Electrolysis - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u4_l1_lv3_1-2026",
    question: "Which statement best explains why molten calcium chloride conducts electricity, but solid calcium chloride does not?",
    options: [
      { text: "Solid calcium chloride contains covalent bonds, while molten calcium chloride contains ionic bonds" },
      { text: "Ions in solid calcium chloride are held in fixed positions in a lattice and cannot move, whereas in molten state they are free to move", isCorrect: true },
      { text: "Electrons are delocalised in molten calcium chloride but are fixed in the solid state" },
      { text: "Solid calcium chloride contains molecules, whereas molten calcium chloride contains atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Calcium chloride is an ionic compound in both solid and molten states.\n* In the solid state, ions are locked in fixed positions within the giant ionic lattice and cannot carry electrical charge.\n* When melted, the lattice breaks down and the ions (Ca²⁺ and Cl⁻) are free to migrate to the electrodes, conducting electricity.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q65",
    createdAt: "2026-08-20T14:40:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv3_2-2026",
    question: "When molten aluminum oxide, Al₂O₃, is electrolysed using carbon electrodes, what gas is formed at the anode and what happens to the anode over time?",
    options: [
      { text: "Oxygen gas is formed; the anode remains unchanged" },
      { text: "Carbon dioxide gas is formed; the anode burns away", isCorrect: true },
      { text: "Oxygen gas is formed; the anode reacts with oxygen and burns away" },
      { text: "Carbon dioxide gas is formed; the anode remains unchanged" }
    ],
    correctAnswer: 1,
    explanation: "* Oxygen ions (O²⁻) lose electrons at the anode to form oxygen gas (O₂).\n* At high operating temperatures, the carbon (graphite) anodes react with the oxygen produced: C(s) + O₂(g) → CO₂(g).\n* This produces carbon dioxide gas and causes the anode to burn away, requiring periodic replacement.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q66",
    createdAt: "2026-08-20T14:45:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv3_3-2026",
    question: "In the industrial extraction of aluminum by the electrolysis of alumina dissolved in molten cryolite, what is the main purpose of using cryolite?",
    options: [
      { text: "To act as a catalyst for the reduction of aluminum ions" },
      { text: "To lower the melting point of alumina and improve conductivity", isCorrect: true },
      { text: "To prevent the carbon electrodes from burning away" },
      { text: "To protect the molten aluminum from oxidation by air" }
    ],
    correctAnswer: 1,
    explanation: "* Pure alumina (Al₂O₃) has a very high melting point (around 2000°C), which makes melting it directly extremely expensive.\n* Alumina dissolves in molten cryolite at a much lower temperature (around 950°C), lowering the energy cost and increasing electrical conductivity.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q67",
    createdAt: "2026-08-20T14:50:00Z"
  },
  {
    id: "ex_ci_u4_l1_lv3_4-2026",
    question: "If 1.0 mole of electrons is passed through separate electrolysis cells containing molten PbBr₂ and molten Al₂O₃, what is the ratio of moles of Pb to moles of Al deposited at the respective cathodes?",
    options: [
      { text: "1:1" },
      { text: "2:3" },
      { text: "3:2", isCorrect: true },
      { text: "3:1" }
    ],
    correctAnswer: 2,
    explanation: "* Half-equation for lead: Pb²⁺ + 2e⁻ → Pb. So 1 mol of electrons produces 0.5 mol of Pb.\n* Half-equation for aluminum: Al³⁺ + 3e⁻ → Al. So 1 mol of electrons produces 1/3 mol of Al.\n* Ratio of moles of Pb to Al $= 0.5 : (1/3) = 1/2 : 1/3 = 3 : 2$.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q68",
    createdAt: "2026-08-20T14:55:00Z"
  }
];
