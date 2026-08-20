import { Question } from '../../../types';

// Identification of Ions and Gases - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l3_lv3_1-2026",
    question: "When aqueous sodium hydroxide is added to a green solution of chromium(III) ions (Cr³⁺), a grey-green precipitate forms which dissolves in excess NaOH to form a dark green solution.\nWhat observation is made when aqueous ammonia (NH₃) is added in EXCESS to a fresh sample of chromium(III) solution?",
    options: [
      { text: "A grey-green precipitate forms which is INSOLUBLE in excess aqueous ammonia", isCorrect: true },
      { text: "A grey-green precipitate forms which dissolves to give a colourless solution" },
      { text: "No precipitate is formed under any conditions" },
      { text: "A red-brown precipitate forms immediately" }
    ],
    correctAnswer: 0,
    explanation: "* With $Cr^{3+}$ ions:\n  - NaOH: Grey-green precipitate of $Cr(OH)_3$, soluble in excess NaOH to form dark green $[Cr(OH)_6]^{3-}$.\n  - Aqueous $NH_3$: Grey-green precipitate of $Cr(OH)_3$, insoluble in excess $NH_3$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q473",
    createdAt: "2026-08-22T06:40:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_2-2026",
    question: "Why MUST test solutions always be acidified with dilute NITRIC acid (HNO₃) rather than hydrochloric acid (HCl) or sulfuric acid (H₂SO₄) before testing for halide ions with aqueous silver nitrate?",
    options: [
      { text: "HCl contains chloride ions (Cl⁻) and H₂SO₄ contains sulfate ions (SO₄²⁻), both of which would form false-positive precipitates with silver ions (AgCl / Ag₂SO₄)", isCorrect: true },
      { text: "Nitric acid dissolves all silver halides instantly" },
      { text: "Hydrochloric acid causes silver nitrate to explode" },
      { text: "Sulfuric acid oxidises silver ions to silver oxide" }
    ],
    correctAnswer: 0,
    explanation: "* Acidifying removes interfering carbonate ($CO_3^{2-}$) and sulfite ($SO_3^{2-}$) ions that would precipitate with $Ag^+$.\n* Nitric acid must be used because its nitrate ion ($NO_3^-$) does not form precipitates with any cations.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q474",
    createdAt: "2026-08-22T06:45:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_3-2026",
    question: "A green solid X undergoes thermal decomposition to release a gas that turns limewater milky and leaves a black solid residue Y. Solid Y dissolves in dilute sulfuric acid to form a clear blue solution.\nWhat is the chemical identity of solid X?",
    options: [
      { text: "Copper(II) carbonate, CuCO₃", isCorrect: true },
      { text: "Iron(II) sulfate, FeSO₄" },
      { text: "Chromium(III) oxide, Cr₂O₃" },
      { text: "Nickel(II) nitrate, Ni(NO₃)₂" }
    ],
    correctAnswer: 0,
    explanation: "* Green solid X is copper(II) carbonate: CuCO₃(s) → CuO(s) + CO₂(g).\n* $CO_2$ turns limewater milky.\n* Black residue Y is copper(II) oxide (CuO), which reacts with $H_2SO_4$ to form blue $CuSO_4(aq)$ solution.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q475",
    createdAt: "2026-08-22T06:50:00Z"
  },
  {
    id: "ex_ci_u12_l3_lv3_4-2026",
    question: "When aqueous sodium hydroxide is added to a colourless solution of compound Z, NO precipitate forms even upon adding excess NaOH. When the mixture is heated gently, a pungent gas is evolved that turns damp red litmus paper blue.\nWhat cation is present in compound Z?",
    options: [
      { text: "Ammonium ion (NH₄⁺)", isCorrect: true },
      { text: "Calcium ion (Ca²⁺)" },
      { text: "Aluminium ion (Al³⁺)" },
      { text: "Zinc ion (Zn²⁺)" }
    ],
    correctAnswer: 0,
    explanation: "* $NH_4^+$ forms no precipitate with $OH^-$ ions because ammonia and water are formed in solution: NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l).\n* Gentle heating drives out volatile $NH_3$ gas, which turns damp red litmus blue.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q476",
    createdAt: "2026-08-22T06:55:00Z"
  }
];
