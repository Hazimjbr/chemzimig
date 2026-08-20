import { Question } from '../../../types';

// Reactivity Series - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l2_lv3_1-2026",
    question: "In the highly exothermic Thermite reaction used to weld railway tracks:\n2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(l)\nWhich statement correctly explains why this reaction takes place?",
    options: [
      { text: "Aluminium has a higher affinity for oxygen because it forms stronger ionic bonds with oxide ions than iron does", isCorrect: true },
      { text: "Iron is more reactive than aluminium and oxidises it" },
      { text: "Aluminium acts as an oxidising agent" },
      { text: "Iron(III) oxide provides electrons to reduce aluminium" }
    ],
    correctAnswer: 0,
    explanation: "* Aluminium is higher in the reactivity series than iron, meaning it has a stronger tendency to lose electrons and form stable oxide bonds (higher enthalpy of formation of Al₂O₃).\n* Aluminium reduces Fe₂O₃ to molten iron while being oxidised to Al₂O₃.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q314",
    createdAt: "2026-08-21T14:35:00Z"
  },
  {
    id: "ex_ci_u9_l2_lv3_2-2026",
    question: "In a displacement reaction between zinc metal and aqueous copper(II) sulfate: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\nWhy does zinc displace copper ions from solution?",
    options: [
      { text: "Zinc atoms lose electrons more readily (have a greater tendency to form positive ions) than copper atoms", isCorrect: true },
      { text: "Copper atoms lose electrons more readily than zinc atoms" },
      { text: "Zinc ions are smaller than copper ions" },
      { text: "Copper sulfate has a higher melting point than zinc sulfate" }
    ],
    correctAnswer: 0,
    explanation: "* Reactivity of a metal is defined by its ability to lose valence electrons to form positive cations.\n* Zinc has a greater oxidation tendency, transferring electrons to Cu²⁺ ions: Zn → Zn²⁺ + 2e⁻ (oxidation) and Cu²⁺ + 2e⁻ → Cu (reduction).",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q315",
    createdAt: "2026-08-21T14:40:00Z"
  },
  {
    id: "ex_ci_u9_l2_lv3_3-2026",
    question: "Excess iron powder is added to 250 cm³ of 0.20 mol/dm³ copper(II) sulfate solution.\nWhat is the maximum mass of pure copper ($A_r = 64$) displaced?\nFe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
    options: [
      { text: "3.20 g", isCorrect: true },
      { text: "6.40 g" },
      { text: "1.60 g" },
      { text: "0.05 g" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of CuSO₄ $= 0.250\\text{ dm}^3 \\times 0.20\\text{ mol/dm}^3 = 0.050\\text{ mol}$.\n* Stoichiometry is 1 : 1, so moles of Cu displaced $= 0.050\\text{ mol}$.\n* Mass of Cu $= 0.050 \\times 64 = 3.20\\text{ g}$.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q316",
    createdAt: "2026-08-21T14:45:00Z"
  }
];
