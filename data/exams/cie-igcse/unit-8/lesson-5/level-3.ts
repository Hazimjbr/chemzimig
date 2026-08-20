import { Question } from '../../../types';

// Group VIII/0 - Noble Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l5_lv3_1-2026",
    question: "Under identical temperature and pressure conditions, which noble gas diffuses through a porous membrane at the highest rate?",
    options: [
      { text: "Helium (He, $A_r = 4$)", isCorrect: true },
      { text: "Neon (Ne, $A_r = 20$)" },
      { text: "Argon (Ar, $A_r = 40$)" },
      { text: "Krypton (Kr, $A_r = 84$)" }
    ],
    correctAnswer: 0,
    explanation: "* According to Graham's Law of diffusion, the rate of diffusion of a gas is inversely proportional to the square root of its relative atomic/molecular mass ($M_r$).\n* Helium has the lowest $A_r$ (4), so its atoms have the highest average velocity and diffuse fastest.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q294",
    createdAt: "2026-08-21T12:30:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_2-2026",
    question: "Although noble gases are generally unreactive, heavier noble gases such as xenon (Xe) can form stable compounds with fluorine (e.g. XeF₄).\nWhy is xenon able to react with fluorine under specific conditions while helium cannot?",
    options: [
      { text: "Xenon has a much larger atomic radius with heavily shielded outer electrons that can be polarised/shared by highly electronegative fluorine", isCorrect: true },
      { text: "Xenon has only 2 electrons in its outer shell" },
      { text: "Xenon is a metal located in Period 5" },
      { text: "Xenon readily loses protons to fluorine atoms" }
    ],
    correctAnswer: 0,
    explanation: "* Xenon has 5 occupied shells; its outer electrons are far from the nucleus and loosely held (lower ionisation energy) compared to helium or neon.\n* The extremely electronegative fluorine can draw electron density and form covalent bonds with xenon.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q295",
    createdAt: "2026-08-21T12:35:00Z"
  },
  {
    id: "ex_ci_u8_l5_lv3_3-2026",
    question: "Which electronic configuration represents an isolated atom that does NOT form chemical bonds under standard conditions?",
    options: [
      { text: "2,8,8", isCorrect: true },
      { text: "2,8,7" },
      { text: "2,8,1" },
      { text: "2,8,6" }
    ],
    correctAnswer: 0,
    explanation: "* The electronic configuration 2,8,8 represents Argon (Ar), a Group VIII noble gas with a complete octet in its outer valence shell, making it completely stable and chemically inert.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q296",
    createdAt: "2026-08-21T12:40:00Z"
  }
];
