import { Question } from '../../../types';

// Group VII - Halogens - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u8_l3_lv2_1-2026",
    question: "When chlorine water (Cl₂(aq)) is added to a colourless solution of potassium bromide (KBr(aq)), what colour change is observed?",
    options: [
      { text: "The solution turns from colourless to orange/red-brown due to the formation of aqueous bromine", isCorrect: true },
      { text: "The solution turns from colourless to purple due to iodine gas" },
      { text: "A white precipitate of potassium chloride forms" },
      { text: "No reaction occurs and the solution remains colourless" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorine is more reactive than bromine and displaces bromide ions from solution: Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq).\n* The liberated aqueous bromine gives the solution an orange to red-brown colour.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q272",
    createdAt: "2026-08-21T10:15:00Z"
  },
  {
    id: "ex_ci_u8_l3_lv2_2-2026",
    question: "Which of the following mixtures will result in a displacement reaction taking place?",
    options: [
      { text: "Bromine water added to aqueous sodium iodide", isCorrect: true },
      { text: "Iodine solution added to aqueous sodium chloride" },
      { text: "Bromine water added to aqueous potassium chloride" },
      { text: "Iodine solution added to aqueous potassium bromide" }
    ],
    correctAnswer: 0,
    explanation: "* A more reactive halogen displaces a less reactive halide ion.\n* Since reactivity order is Cl > Br > I:\n  - Br₂ can displace I⁻ (forming brown I₂).\n  - I₂ cannot displace Cl⁻ or Br⁻, and Br₂ cannot displace Cl⁻.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q273",
    createdAt: "2026-08-21T10:20:00Z"
  },
  {
    id: "ex_ci_u8_l3_lv2_3-2026",
    question: "Astatine (At) is the element below iodine in Group VII.\nWhich prediction about astatine is most likely correct?",
    options: [
      { text: "It is a black solid that is less reactive than iodine", isCorrect: true },
      { text: "It is a pale yellow gas that is more reactive than fluorine" },
      { text: "It will displace chlorine from sodium chloride" },
      { text: "It exists as monatomic atoms at room temperature" }
    ],
    correctAnswer: 0,
    explanation: "* Following Group VII trends:\n  - Physical state becomes solid with darker colour (black solid).\n  - Reactivity decreases down the group, so At is less reactive than I.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q274",
    createdAt: "2026-08-21T10:25:00Z"
  },
  {
    id: "ex_ci_u8_l3_lv2_4-2026",
    question: "When chlorine gas is bubbled through aqueous sodium iodide, what is the ionic equation for the reaction?",
    options: [
      { text: "Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)", isCorrect: true },
      { text: "Cl⁻(aq) + I₂(aq) → Cl₂(aq) + 2I⁻(aq)" },
      { text: "2Na⁺(aq) + Cl₂(aq) → 2NaCl(s)" },
      { text: "Cl₂(aq) + I₂(aq) → 2ICl(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* Spectator sodium ions ($Na^+$) do not participate in the redox transfer.\n* The ionic equation is: Cl₂ + 2I⁻ → 2Cl⁻ + I₂.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q275",
    createdAt: "2026-08-21T10:30:00Z"
  }
];
