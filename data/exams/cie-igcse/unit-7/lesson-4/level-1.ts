import { Question } from '../../../types';

// Identification of Ions and Gases - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u7_l4_lv1_1-2026",
    question: "Which test confirms the presence of carbon dioxide gas (CO₂)?",
    options: [
      { text: "Bubbling through limewater turns it milky / cloudy white", isCorrect: true },
      { text: "Relights a glowing splint" },
      { text: "Bleaches damp blue litmus paper white" },
      { text: "Pops with a lighted splint" }
    ],
    correctAnswer: 0,
    explanation: "* Carbon dioxide reacts with aqueous calcium hydroxide (limewater) to form a white precipitate of insoluble calcium carbonate: Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q230",
    createdAt: "2026-08-21T06:00:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv1_2-2026",
    question: "What colour flame is observed when a clean nichrome wire dipped in potassium chloride is placed in a non-luminous Bunsen burner flame?",
    options: [
      { text: "Lilac", isCorrect: true },
      { text: "Persistent yellow" },
      { text: "Crimson red" },
      { text: "Apple-green" }
    ],
    correctAnswer: 0,
    explanation: "* In flame tests:\n  - Potassium ($K^+$) gives a lilac flame.\n  - Sodium ($Na^+$) gives a yellow flame.\n  - Lithium ($Li^+$) gives a red flame.\n  - Calcium ($Ca^{2+}$) gives an orange-red flame.\n  - Copper ($Cu^{2+}$) gives a blue-green flame.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q231",
    createdAt: "2026-08-21T06:05:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv1_3-2026",
    question: "Which gas turns damp red litmus paper blue?",
    options: [
      { text: "Ammonia (NH₃)", isCorrect: true },
      { text: "Chlorine (Cl₂)" },
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Hydrogen chloride (HCl)" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia is the only common alkaline gas; it dissolves in the water on damp red litmus paper to form ammonium and hydroxide ions, turning the paper blue.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q232",
    createdAt: "2026-08-21T06:10:00Z"
  }
];
