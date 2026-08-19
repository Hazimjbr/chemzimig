import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "q_ed_u1_l1_lv3_so4_spectator-20260106",
    question: "A student mixes $50.0\\text{ cm}^3$ of $0.200\\text{ mol dm}^{-3}$ barium chloride solution, $\\text{BaCl}_2\\text{(aq)}$, with $150.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium sulfate solution, $\\text{Na}_2\\text{SO}_4\\text{(aq)}$. Barium sulfate precipitates according to the equation:\n$$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}$$\nCalculate the concentration of the remaining dissolved sulfate ions, $\\text{SO}_4^{2-}\\text{(aq)}$, in the solution after precipitation is complete. (Assume volumes are additive).",
    options: [
      { text: "0.0250 mol dm⁻³", isCorrect: true },
      { text: "0.0500 mol dm⁻³" },
      { text: "0.0750 mol dm⁻³" },
      { text: "0.000 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "First, calculate the initial moles of reacting ions:\n\nMoles of $\\text{Ba}^{2+}$ from $\\text{BaCl}_2$:\n$n(\\text{Ba}^{2+}) = C \\times V = 0.200\\text{ mol dm}^{-3} \\times 0.0500\\text{ dm}^3 = 0.0100\\text{ mol}$\n\nMoles of $\\text{SO}_4^{2-}$ from $\\text{Na}_2\\text{SO}_4$:\n$n(\\text{SO}_4^{2-}) = C \\times V = 0.100\\text{ mol dm}^{-3} \\times 0.1500\\text{ dm}^3 = 0.0150\\text{ mol}$\n\nSince $\\text{Ba}^{2+}$ and $\\text{SO}_4^{2-}$ react in a 1:1 ratio, $\\text{Ba}^{2+}$ is the limiting reagent and will react completely.\n\nMoles of $\\text{SO}_4^{2-}$ remaining after precipitation:\n$n(\\text{SO}_4^{2-})_{\\text{remaining}} = 0.0150 - 0.0100 = 0.0050\\text{ mol}$\n\nNow, calculate the final total volume of the mixture:\n$V_{\\text{total}} = 50.0 + 150.0 = 200.0\\text{ cm}^3 = 0.2000\\text{ dm}^3$\n\nFinally, calculate the concentration of remaining dissolved $\\text{SO}_4^{2-}$ ions:\n$C = \\frac{n}{V} = \\frac{0.0050\\text{ mol}}{0.2000\\text{ dm}^3} = 0.0250\\text{ mol dm}^{-3}$\n\nSince all values in the question are given to 3 significant figures, the final concentration is reported as $0.0250\\text{ mol dm}^{-3}$ (3 significant figures).",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-06-18T13:40:00Z"
  },
  {
    id: "q_ed_u1_l1_lv3_q3_h2_yield-20260819",
    question: "Hydrogen gas is manufactured from methane according to the overall reaction:\n$$\\\\text{CH}_4 + 2\\\\text{H}_2\\\\text{O} \\\\rightarrow 4\\\\text{H}_2 + \\\\text{CO}_2$$\nIn an industrial batch, $5.12\\\\text{ tonnes}$ of hydrogen gas were obtained starting from $13.6\\\\text{ tonnes}$ of methane. Calculate the percentage yield of hydrogen gas for this batch.\n*(Relative molar masses: $\\\\text{CH}_4 = 16.0\\\\text{ g mol}^{-1}, \\\\text{H}_2 = 2.0\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "37.6%" },
      { text: "42.5%" },
      { text: "54.4%" },
      { text: "75.3%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "Calculate moles of starting methane:\n$$n(\\\\text{CH}_4) = \\\\frac{13.6\\\\text{ tonnes}}{16.0\\\\text{ g mol}^{-1}} = 0.850\\\\text{ tonnes-mol}$$\nFrom the balanced equation, $1\\\\text{ mol of CH}_4$ produces $4\\\\text{ mol of H}_2$.\nTheoretical moles of $\\\\text{H}_2 = 4 \\\\times 0.850 = 3.40\\\\text{ tonnes-mol}$.\nTheoretical mass of $\\\\text{H}_2 = 3.40 \\\\times 2.0 = 6.80\\\\text{ tonnes}$.\n$$\\\\text{Percentage Yield} = \\\\frac{5.12\\\\text{ tonnes}}{6.80\\\\text{ tonnes}} \\\\times 100\\\\% = 75.29\\\\% \\\\approx 75.3\\\\%$$",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv3_q7c_mg_hcl_volume-20260819",
    question: "A $1.215\\\\text{ g}$ sample of magnesium metal is reacted with $60.0\\\\text{ cm}^3$ of $2.00\\\\text{ mol dm}^{-3}$ dilute hydrochloric acid according to:\n$$\\\\text{Mg(s)} + 2\\\\text{HCl(aq)} \\\\rightarrow \\\\text{MgCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$\nCalculate the volume of hydrogen gas produced, measured at r.t.p.\n*(Take $A_r(\\\\text{Mg}) = 24.3\\\\text{ g mol}^{-1}$ and molar volume of gas at r.t.p. $= 24.0\\\\text{ dm}^3\\\\text{ mol}^{-1}$)*",
    options: [
      { text: "0.60 dm³" },
      { text: "1.20 dm³", isCorrect: true },
      { text: "1.44 dm³" },
      { text: "2.40 dm³" }
    ],
    correctAnswer: 1,
    explanation: "Calculate initial moles of reactants:\n$n(\\\\text{Mg}) = \\\\frac{1.215\\\\text{ g}}{24.3\\\\text{ g mol}^{-1}} = 0.0500\\\\text{ mol}$\n$n(\\\\text{HCl}) = C \\\\times V = 2.00 \\\\times 0.0600 = 0.1200\\\\text{ mol}$\nFrom the equation ratio $1\\\\text{ Mg} : 2\\\\text{ HCl}$, $0.0500\\\\text{ mol}$ of $\\\\text{Mg}$ requires $0.1000\\\\text{ mol}$ of $\\\\text{HCl}$.\nTherefore, $\\\\text{Mg}$ is the limiting reagent and completely reacts.\nMoles of $\\\\text{H}_2$ gas produced $= 0.0500\\\\text{ mol}$.\n$$\\\\text{Volume of H}_2 = 0.0500\\\\text{ mol} \\\\times 24.0\\\\text{ dm}^3\\\\text{ mol}^{-1} = 1.20\\\\text{ dm}^3$$",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv3_q8b_nh4no3_n2o_vol-20260819",
    question: "When ammonium nitrate decomposes upon careful heating, dinitrogen monoxide gas and water are produced:\n$$\\\\text{NH}_4\\\\text{NO}_3\\\\text{(s)} \\\\rightarrow \\\\text{N}_2\\\\text{O(g)} + 2\\\\text{H}_2\\\\text{O(l)}$$\nCalculate the volume of $\\\\text{N}_2\\\\text{O}$ gas formed, measured at r.t.p., when $4.00\\\\text{ g}$ of ammonium nitrate is completely decomposed.\n*(Given $M_r(\\\\text{NH}_4\\\\text{NO}_3) = 80.0\\\\text{ g mol}^{-1}$ and molar volume at r.t.p. $= 24,000\\\\text{ cm}^3\\\\text{ mol}^{-1}$)*",
    options: [
      { text: "600 cm³" },
      { text: "1200 cm³", isCorrect: true },
      { text: "2400 cm³" },
      { text: "4800 cm³" }
    ],
    correctAnswer: 1,
    explanation: "Calculate moles of ammonium nitrate reactant:\n$$n(\\\\text{NH}_4\\\\text{NO}_3) = \\\\frac{4.00\\\\text{ g}}{80.0\\\\text{ g mol}^{-1}} = 0.0500\\\\text{ mol}$$\nFrom the 1:1 reaction mole ratio, theoretical moles of $\\\\text{N}_2\\\\text{O}$ gas formed $= 0.0500\\\\text{ mol}$.\n$$\\\\text{Volume of N}_2\\\\text{O} = 0.0500\\\\text{ mol} \\\\times 24,000\\\\text{ cm}^3\\\\text{ mol}^{-1} = 1200\\\\text{ cm}^3$$",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv3_q10_group2_metal_id-20260819",
    question: "A sample of $0.240\\\\text{ g}$ of a Group 2 metal ($\\\\text{M}$) is reacted with an excess of dilute hydrochloric acid:\n$$\\\\text{M(s)} + 2\\\\text{HCl(aq)} \\\\rightarrow \\\\text{MCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$\nThe hydrogen gas collected measures $230\\\\text{ cm}^3$ at r.t.p. Deduce the identity of the Group 2 metal.\n*(Assume molar volume of gas at r.t.p. $= 24,000\\\\text{ cm}^3\\\\text{ mol}^{-1}$)*",
    options: [
      { text: "Beryllium (Be)" },
      { text: "Magnesium (Mg)", isCorrect: true },
      { text: "Calcium (Ca)" },
      { text: "Strontium (Sr)" }
    ],
    correctAnswer: 1,
    explanation: "First, calculate moles of $\\\\text{H}_2$ gas collected:\n$$n(\\\\text{H}_2) = \\\\frac{230\\\\text{ cm}^3}{24,000\\\\text{ cm}^3\\\\text{ mol}^{-1}} = 0.009583\\\\text{ mol}$$\nFrom the $1:1$ stoichiometric ratio $\\\\text{M} : \\\\text{H}_2$, moles of metal $\\\\text{M} = 0.009583\\\\text{ mol}$.\nCalculate the relative atomic mass ($A_r$) of metal $\\\\text{M}$:\n$$A_r(\\\\text{M}) = \\\\frac{m}{n} = \\\\frac{0.240\\\\text{ g}}{0.009583\\\\text{ mol}} = 25.04\\\\text{ g mol}^{-1} \\\\approx 24.3\\\\text{ g mol}^{-1}$$\nLooking at Group 2 elements, $A_r = 24.3$ corresponds to **Magnesium (Mg)**.",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  },
  {
    id: "q_ed_u1_l1_lv3_q11b_nan3_naoh_conc-20260819",
    question: "Sodium azide decomposes on heating ($2\\\\text{NaN}_3\\\\text{(s)} \\\\rightarrow 2\\\\text{Na(l)} + 3\\\\text{N}_2\\\\text{(g)}$). A student completely decomposes $3.25\\\\text{ g}$ of $\\\\text{NaN}_3$, then reacts the recovered sodium metal with water to form $25.0\\\\text{ cm}^3$ of sodium hydroxide solution:\n$$2\\\\text{Na(s)} + 2\\\\text{H}_2\\\\text{O(l)} \\\\rightarrow 2\\\\text{NaOH(aq)} + \\\\text{H}_2\\\\text{(g)}$$\nCalculate the molar concentration of the resulting $\\\\text{NaOH(aq)}$ solution.\n*(Given $M_r(\\\\text{NaN}_3) = 65.0\\\\text{ g mol}^{-1}$)*",
    options: [
      { text: "0.50 mol dm⁻³" },
      { text: "1.00 mol dm⁻³" },
      { text: "2.00 mol dm⁻³", isCorrect: true },
      { text: "4.00 mol dm⁻³" }
    ],
    correctAnswer: 2,
    explanation: "First, calculate moles of $\\\\text{NaN}_3$ decomposed:\n$$n(\\\\text{NaN}_3) = \\\\frac{3.25\\\\text{ g}}{65.0\\\\text{ g mol}^{-1}} = 0.0500\\\\text{ mol}$$\nFrom $2\\\\text{NaN}_3 \\\\rightarrow 2\\\\text{Na}$, moles of $\\\\text{Na}$ produced $= 0.0500\\\\text{ mol}$.\nFrom $2\\\\text{Na} + 2\\\\text{H}_2\\\\text{O} \\\\rightarrow 2\\\\text{NaOH}$, moles of $\\\\text{NaOH}$ produced $= 0.0500\\\\text{ mol}$.\nFinally, calculate the concentration of $\\\\text{NaOH}$ in $25.0\\\\text{ cm}^3$ ($0.0250\\\\text{ dm}^3$):\n$$C = \\\\frac{n}{V} = \\\\frac{0.0500\\\\text{ mol}}{0.0250\\\\text{ dm}^3} = 2.00\\\\text{ mol dm}^{-3}$$",
    level: 3,
    topic: "edexcel-unit-1",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-19"
  }
];
