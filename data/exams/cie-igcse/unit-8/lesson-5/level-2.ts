import { Question } from '../../../types';

// Group VIII/0 - Noble Gases - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u8_l5_lv2_1-2026",
    question: "Why is argon gas used in traditional filament incandescent light bulbs and in inert shield welding?",
    options: [
      { text: "Argon provides an inert atmosphere that prevents the hot tungsten filament or molten metal from reacting with oxygen and burning", isCorrect: true },
      { text: "Argon conducts electricity better than air" },
      { text: "Argon glows with a bright green light when heated" },
      { text: "Argon acts as a reducing agent that converts metal oxides back into metals" }
    ],
    correctAnswer: 0,
    explanation: "* At the high operating temperatures of light bulbs or arc welding, hot metals react instantly with oxygen in air.\n* Unreactive argon creates an inert blanket protecting the metal from oxidation.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q291",
    createdAt: "2026-08-21T12:15:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv2_2-2026",
    question: "Which trend is observed in the physical properties of the noble gases down Group VIII from helium to xenon?",
    options: [
      { text: "Boiling points increase and density increases", isCorrect: true },
      { text: "Boiling points decrease and density decreases" },
      { text: "They become coloured diatomic gases" },
      { text: "They form acidic solutions in water" }
    ],
    correctAnswer: 0,
    explanation: "* Down Group VIII:\n  - Atomic mass and number of electrons per atom increase, increasing atomic density.\n  - Intermolecular (van der Waals) forces between atoms become stronger, raising the boiling point (He boils at -269°C, Xe boils at -108°C).",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q292",
    createdAt: "2026-08-21T12:20:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv2_3-2026",
    question: "Which noble gas produces a distinctive reddish-orange glow when high voltage electricity passes through it in glowing advertising signs?",
    options: [
      { text: "Neon (Ne)", isCorrect: true },
      { text: "Helium (He)" },
      { text: "Argon (Ar)" },
      { text: "Radon (Rn)" }
    ],
    correctAnswer: 0,
    explanation: "* When electricity passes through low-pressure neon gas, electrons are excited and emit reddish-orange light upon returning to lower energy levels (used in 'neon signs').",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q293",
    createdAt: "2026-08-21T12:25:00Z"
  }
];
