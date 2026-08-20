import { Question } from '../../../types';

// Measurement - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u12_l1_lv1_1-2026",
    question: "Which piece of laboratory apparatus is most suitable for accurately transferring exactly 25.0 cm³ of an alkali into a conical flask for a titration?",
    options: [
      { text: "A 25.0 cm³ volumetric pipette", isCorrect: true },
      { text: "A 50 cm³ beaker" },
      { text: "A 100 cm³ measuring cylinder" },
      { text: "A 250 cm³ conical flask" }
    ],
    correctAnswer: 0,
    explanation: "* A volumetric pipette is calibrated to deliver an exact fixed volume (such as 25.0 cm³) with high precision (±0.05 cm³).\n* Measuring cylinders and beakers are much less precise.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q441",
    createdAt: "2026-08-22T04:00:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv1_2-2026",
    question: "Which apparatus is used to deliver continuously variable, precisely measured volumes of liquid acid (to the nearest 0.05 cm³) during a titration?",
    options: [
      { text: "A burette", isCorrect: true },
      { text: "A dropping teat pipette" },
      { text: "A gas syringe" },
      { text: "A filter funnel" }
    ],
    correctAnswer: 0,
    explanation: "* A burette has fine graduations and a tap, allowing precise variable volume dispensing (typically 0.00 to 50.00 cm³).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q442",
    createdAt: "2026-08-22T04:05:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv1_3-2026",
    question: "Which apparatus is best suited for collecting and measuring the volume of gas evolved during a chemical reaction, regardless of whether the gas is soluble or insoluble in water?",
    options: [
      { text: "A graduated gas syringe", isCorrect: true },
      { text: "An inverted measuring cylinder filled with water" },
      { text: "A boiling tube with an open mouth" },
      { text: "A conical flask covered with filter paper" }
    ],
    correctAnswer: 0,
    explanation: "* A gas syringe collects dry or moist gas and measures its volume directly without gas loss, even for highly water-soluble gases (like $SO_2$ or $NH_3$).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q443",
    createdAt: "2026-08-22T04:10:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv1_4-2026",
    question: "Which method is most appropriate for collecting a dry sample of ammonia gas (NH₃), given that ammonia is less dense than air and extremely soluble in water?",
    options: [
      { text: "Upward delivery into an inverted gas jar (downward displacement of air)", isCorrect: true },
      { text: "Downward delivery into an upright gas jar (upward displacement of air)" },
      { text: "Collection over water in a pneumatic trough" },
      { text: "Filtration through filter paper" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia has a relative formula mass of 17 ($< 28.8$ for air), making it less dense than air.\n* Because it is highly water-soluble, it cannot be collected over water; it is collected dry by upward delivery into an upside-down container.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q444",
    createdAt: "2026-08-22T04:15:00Z"
  }
];
