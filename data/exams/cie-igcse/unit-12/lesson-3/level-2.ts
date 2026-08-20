import { Question } from '../../../types';

// Identification of Ions and Gases - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l3_lv2_1-2026",
    question: "Both aluminium ions (Al³⁺) and zinc ions (Zn²⁺) form a white precipitate that dissolves in excess aqueous sodium hydroxide.\nHow can a student definitively distinguish between aqueous Al³⁺ and Zn²⁺ using aqueous ammonia (NH₃)?",
    options: [
      { text: "Add aqueous ammonia: Zn²⁺ forms a white precipitate that DISSOLVES in excess NH₃, whereas the white precipitate with Al³⁺ is INSOLUBLE in excess NH₃", isCorrect: true },
      { text: "Al³⁺ gives a bright yellow flame test whereas Zn²⁺ gives a green flame" },
      { text: "Zn²⁺ forms a red precipitate with ammonia while Al³⁺ forms a blue precipitate" },
      { text: "Al³⁺ bleaches litmus paper while Zn²⁺ does not" }
    ],
    correctAnswer: 0,
    explanation: "* With aqueous $NH_3$:\n  - $Al^{3+}$: White precipitate of $Al(OH)_3$, insoluble in excess $NH_3$.\n  - $Zn^{2+}$: White precipitate of $Zn(OH)_2$, soluble in excess $NH_3$ forming a colourless solution containing $[Zn(NH_3)_4]^{2+}$.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q469",
    createdAt: "2026-08-22T06:20:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv2_2-2026",
    question: "What reagents and observations confirm the presence of nitrate ions (NO₃⁻) in an unknown solid or solution?",
    options: [
      { text: "Add aqueous sodium hydroxide (NaOH) and aluminium foil, then warm gently: ammonia gas is evolved which turns damp red litmus paper blue", isCorrect: true },
      { text: "Add acidified barium nitrate: a dense white precipitate forms" },
      { text: "Add dilute hydrochloric acid: effervescence of carbon dioxide occurs" },
      { text: "Add silver nitrate: a dark purple solution is produced" }
    ],
    correctAnswer: 0,
    explanation: "* In alkaline conditions, aluminium metal reduces nitrate ions ($NO_3^-$) to ammonia gas ($NH_3$): 8Al + 3NO₃⁻ + 5OH⁻ + 18H₂O → 3NH₃ + 8[Al(OH)₄]⁻.\n* The escaping alkaline $NH_3$ gas turns damp red litmus paper blue.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q470",
    createdAt: "2026-08-22T06:25:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv2_3-2026",
    question: "How can a chemist distinguish between a sulfite salt (containing SO₃²⁻) and a sulfate salt (containing SO₄²⁻)?",
    options: [
      { text: "Add dilute hydrochloric acid and warm: sulfite produces sulfur dioxide gas (SO₂) which turns acidified potassium manganate(VII) from purple to colourless, while sulfate produces no gas", isCorrect: true },
      { text: "Sulfate reacts with acid to give hydrogen gas while sulfite gives oxygen" },
      { text: "Sulfite forms a yellow precipitate with silver nitrate while sulfate forms a red precipitate" },
      { text: "Sulfate dissolves in ethanol while sulfite does not" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfite ($SO_3^{2-}$) reacts with dilute acid: SO₃²⁻ + 2H⁺ → SO₂ + H₂O.\n* $SO_2$ gas is a reducing agent that reduces purple $KMnO_4$ to colourless $Mn^{2+}$.\n* Sulfate ($SO_4^{2-}$) is already fully oxidised and does not produce gas with acid.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q471",
    createdAt: "2026-08-22T06:30:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv2_4-2026",
    question: "When damp blue litmus paper is placed into a gas jar of chlorine gas (Cl₂), what sequential colour changes take place?",
    options: [
      { text: "It turns red first (acidic reaction with moisture to form HCl and HClO), and is then rapidly bleached white", isCorrect: true },
      { text: "It turns dark blue and then black" },
      { text: "It turns green and remains green" },
      { text: "It turns bright yellow without bleaching" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorine dissolves in moisture on the paper: Cl₂ + H₂O → HCl(aq) + HClO(aq).\n* The acids turn blue litmus red, then chloric(I) acid (HClO) oxidises the dye, bleaching it completely white.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q472",
    createdAt: "2026-08-22T06:35:00Z"
  }
];
