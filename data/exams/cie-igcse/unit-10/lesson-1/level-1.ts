import { Question } from '../../../types';

// Water Treatment & Testing - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u10_l1_lv1_1-2026",
    question: "What colour change is observed when liquid water is added to anhydrous copper(II) sulfate?",
    options: [
      { text: "White to blue", isCorrect: true },
      { text: "Blue to pink" },
      { text: "Pink to blue" },
      { text: "Blue to white" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous copper(II) sulfate is a white solid that reacts with water to form blue hydrated copper(II) sulfate: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q345",
    createdAt: "2026-08-21T18:00:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_2-2026",
    question: "Which chemical reagent turns from blue to pink in the presence of water?",
    options: [
      { text: "Anhydrous cobalt(II) chloride paper", isCorrect: true },
      { text: "Anhydrous copper(II) sulfate" },
      { text: "Universal indicator paper" },
      { text: "Damp red litmus paper" }
    ],
    correctAnswer: 0,
    explanation: "* Anhydrous cobalt(II) chloride (CoCl₂) is blue and turns pink when hydrated (CoCl₂·6H₂O) by water.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q346",
    createdAt: "2026-08-21T18:05:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_3-2026",
    question: "How can a student prove experimentally that a colourless liquid is chemically PURE water rather than just containing water?",
    options: [
      { text: "Measure its boiling point; pure water boils sharply at exactly 100°C at 1 atm pressure", isCorrect: true },
      { text: "Add anhydrous copper(II) sulfate and observe a blue colour" },
      { text: "Dip blue cobalt(II) chloride paper and observe a pink colour" },
      { text: "Test with universal indicator to check if pH is exactly 7" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical tests (CuSO₄ or CoCl₂) only confirm the PRESENCE of water (even in impure mixtures).\n* To confirm PURITY, physical constants must be tested: pure water melts at exactly 0°C and boils at exactly 100°C at 1 atm.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q347",
    createdAt: "2026-08-21T18:10:00Z"
  },
  {
    id: "ex_ci_u10_l1_lv1_4-2026",
    question: "Why is chlorine gas added to water during the final stage of domestic water treatment?",
    options: [
      { text: "To kill harmful bacteria, pathogens, and microbes (sterilisation)", isCorrect: true },
      { text: "To filter out insoluble sand and gravel particles" },
      { text: "To remove dissolved odours and unpleasant tastes" },
      { text: "To adjust the pH of the water to neutral 7" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorination sterilises water by killing disease-causing microorganisms and bacteria before the water is piped to homes.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q348",
    createdAt: "2026-08-21T18:15:00Z"
  }
];
