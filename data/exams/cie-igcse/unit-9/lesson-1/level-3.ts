import { Question } from '../../../types';

// Properties of Metals - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u9_l1_lv3_1-2026",
    question: "Why does aluminium have a higher melting point and greater electrical conductivity than sodium in Period 3?",
    options: [
      { text: "Each aluminium atom contributes 3 delocalised electrons and has a smaller, higher-charged cation (Al³⁺), creating much stronger metallic electrostatic attractions", isCorrect: true },
      { text: "Aluminium has more electron shells than sodium" },
      { text: "Sodium forms covalent bonds while aluminium forms metallic bonds" },
      { text: "Aluminium has a lower atomic mass than sodium" }
    ],
    correctAnswer: 0,
    explanation: "* Metallic bond strength depends on cation charge density and the number of delocalised electrons per atom.\n* Al³⁺ has charge +3 and 3 mobile electrons per atom in a smaller radius than Na⁺ (charge +1, 1 electron), resulting in vastly stronger metallic bonding.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q304",
    createdAt: "2026-08-21T13:35:00Z"
  },
  {
    id: "ex_ci_u9_l1_lv3_2-2026",
    question: "Equal 1.00 g samples of magnesium ($A_r = 24$) and zinc ($A_r = 65$) are reacted separately with excess dilute hydrochloric acid.\nWhich statement correctly compares the total volume of hydrogen gas produced at r.t.p.?",
    options: [
      { text: "Magnesium produces more than double the volume of hydrogen gas produced by zinc", isCorrect: true },
      { text: "Zinc produces more hydrogen gas because it is denser" },
      { text: "Both 1.00 g samples produce the exact same volume of hydrogen gas" },
      { text: "Zinc does not produce any hydrogen gas" }
    ],
    correctAnswer: 0,
    explanation: "* Moles of Mg in 1.0 g $= 1 / 24 = 0.0417\\text{ mol} \\implies 0.0417\\text{ mol H}_2$ (1000 cm³).\n* Moles of Zn in 1.0 g $= 1 / 65 = 0.0154\\text{ mol} \\implies 0.0154\\text{ mol H}_2$ (369 cm³).\n* Because Mg has a much lower atomic mass, 1.0 g contains far more moles of metal, yielding over 2.7 times the volume of H₂.",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q305",
    createdAt: "2026-08-21T13:40:00Z"
  },
  {
    id: "ex_ci_u9_l1_lv3_3-2026",
    question: "What is the correct ionic equation with state symbols for the reaction between zinc granules and dilute sulfuric acid?",
    options: [
      { text: "Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g)", isCorrect: true },
      { text: "Zn(s) + SO₄²⁻(aq) → ZnSO₄(s) + 2e⁻" },
      { text: "Zn²⁺(aq) + 2H⁺(aq) → Zn(s) + H₂(g)" },
      { text: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + 2H⁺(aq)" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfate ions ($SO_4^{2-}$) are spectator ions.\n* The ionic equation represents the oxidation of zinc atoms by hydrogen ions: Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g).",
    level: 3,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q306",
    createdAt: "2026-08-21T13:45:00Z"
  }
];
