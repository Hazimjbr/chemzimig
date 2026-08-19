import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "q_ed_u1_l1_lv2_q1_o2_molecules-20260819",
    question: "How many molecules of oxygen are present in a $1.00\\\\text{ g}$ sample of oxygen gas, $\\\\text{O}_2$?\n*(Avogadro constant $L = 6.02 \\\\times 10^{23}\\\\text{ mol}^{-1}$, $M_r(\\\\text{O}_2) = 32.0\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "1.88 × 10²²", isCorrect: true },
      { text: "3.76 × 10²²" },
      { text: "9.63 × 10²⁴" },
      { text: "1.93 × 10²⁵" }
    ],
    correctAnswer: 0,
    explanation: "First, calculate the moles of $\\\\text{O}_2$ molecules:\n$$n(\\\\text{O}_2) = \\\\frac{1.00\\\\text{ g}}{32.0\\\\text{ g mol}^{-1}} = 0.03125\\\\text{ mol}$$\nNext, multiply by Avogadro's constant ($L$):\n$$\\\\text{Molecules} = 0.03125 \\\\times (6.02 \\\\times 10^{23}) = 1.88125 \\\\times 10^{22} \\\\approx 1.88 \\\\times 10^{22}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q2_nacl_conc-20260819",
    question: "What is the molar concentration, in $\\\\text{mol dm}^{-3}$, of a solution of sodium chloride containing $4.27\\\\text{ g}$ of $\\\\text{NaCl}$ dissolved in $300\\\\text{ cm}^3$ of solution?\n*(Molar mass $\\\\text{NaCl} = 58.5\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "0.0219 mol dm⁻³" },
      { text: "0.243 mol dm⁻³", isCorrect: true },
      { text: "4.11 mol dm⁻³" },
      { text: "45.7 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "First, calculate the moles of $\\\\text{NaCl}$ solute:\n$$n(\\\\text{NaCl}) = \\\\frac{4.27\\\\text{ g}}{58.5\\\\text{ g mol}^{-1}} = 0.07299\\\\text{ mol}$$\nNext, convert volume to $\\\\text{dm}^3$ and calculate concentration:\n$$V = \\\\frac{300}{1000} = 0.300\\\\text{ dm}^3$$\n$$C = \\\\frac{n}{V} = \\\\frac{0.07299\\\\text{ mol}}{0.300\\\\text{ dm}^3} = 0.2433\\\\text{ mol dm}^{-3} \\\\approx 0.243\\\\text{ mol dm}^{-3}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q4_li2co3_atom_economy-20260819",
    question: "Lithium carbonate is manufactured according to the reaction equation:\n$$2\\\\text{Li}_2\\\\text{O}_2 + 2\\\\text{CO}_2 \\\\rightarrow 2\\\\text{Li}_2\\\\text{CO}_3 + \\\\text{O}_2$$\nCalculate the percentage atom economy for the production of lithium carbonate in this reaction.\n*(Relative atomic masses: $\\\\text{Li} = 6.9, \\\\text{C} = 12.0, \\\\text{O} = 16.0$)*",
    options: [
      { text: "58.9%" },
      { text: "62.1%" },
      { text: "69.8%" },
      { text: "82.2%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "First, calculate $M_r(\\\\text{Li}_2\\\\text{CO}_3) = (2 \\\\times 6.9) + 12.0 + (3 \\\\times 16.0) = 73.8\\\\text{ g mol}^{-1}$.\nMass of desired product $= 2 \\\\times 73.8 = 147.6\\\\text{ g mol}^{-1}$.\nMass of byproduct $\\\\text{O}_2 = 32.0\\\\text{ g mol}^{-1}$.\nTotal product mass $= 147.6 + 32.0 = 179.6\\\\text{ g mol}^{-1}$.\n$$\\\\text{Atom Economy} = \\\\frac{147.6}{179.6} \\\\times 100\\\\% = 82.18\\\\% \\\\approx 82.2\\\\%$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q6_agcl_precipitate_mass-20260819",
    question: "A solution containing $0.040\\\\text{ mol}$ of silver nitrate ($\\\\text{AgNO}_3$) is added to a solution containing $0.060\\\\text{ mol}$ of sodium chloride ($\\\\text{NaCl}$). The reaction equation is:\n$$\\\\text{AgNO}_3\\\\text{(aq)} + \\\\text{NaCl(aq)} \\\\rightarrow \\\\text{AgCl(s)} + \\\\text{NaNO}_3\\\\text{(aq)}$$\nWhat mass of silver chloride precipitate, $\\\\text{AgCl(s)}$, is formed?\n*(Given $M_r(\\\\text{AgCl}) = 143.4\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "5.74 g", isCorrect: true },
      { text: "7.17 g" },
      { text: "8.60 g" },
      { text: "14.3 g" }
    ],
    correctAnswer: 0,
    explanation: "Since $\\\\text{AgNO}_3$ and $\\\\text{NaCl}$ react in a 1:1 mole ratio, $\\\\text{AgNO}_3$ ($0.040\\\\text{ mol}$) is the limiting reagent and completely reacts.\nMoles of $\\\\text{AgCl}$ precipitate formed $= 0.040\\\\text{ mol}$.\n$$\\\\text{Mass of AgCl} = 0.040\\\\text{ mol} \\\\times 143.4\\\\text{ g mol}^{-1} = 5.736\\\\text{ g} \\\\approx 5.74\\\\text{ g}$$",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv2_q9d_pcl_empirical-20260819",
    question: "A chloride of phosphorus contains $30.39\\\\%$ phosphorus and $69.61\\\\%$ chlorine by mass. Deduce its molecular formula and systematic name if its relative formula mass is $207.8\\\\text{ g mol}^{-1}$.\n*(Relative atomic masses: $\\\\text{P} = 31.0, \\\\text{Cl} = 35.5$)*",
    options: [
      { text: "Phosphorus trichloride (PCl₃)" },
      { text: "Phosphorus pentachloride (PCl₅)" },
      { text: "Diphosphorus tetrachloride (P₂Cl₄)", isCorrect: true },
      { text: "Phosphorus monochloride (PCl)" }
    ],
    correctAnswer: 2,
    explanation: "First, calculate moles of each element:\n$n(\\\\text{P}) = \\\\frac{30.39}{31.0} = 0.9803\\\\text{ mol}$\n$n(\\\\text{Cl}) = \\\\frac{69.61}{35.5} = 1.9608\\\\text{ mol}$\nSimplest mole ratio $\\\\text{P} : \\\\text{Cl} = 1 : 2 \\\\implies$ Empirical formula is $\\\\text{PCl}_2$ ($M_{\\\\text{emp}} = 31.0 + 71.0 = 102.0$).\nMultiplier $y = \\\\frac{207.8}{102.0} = 2.04 \\\\approx 2$.\nMolecular formula $= (\\\\text{PCl}_2) \\\\times 2 = \\\\text{P}_2\\\\text{Cl}_4$ (Diphosphorus tetrachloride).",
    level: 2,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  }
];
