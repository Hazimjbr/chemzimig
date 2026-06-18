import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "q_ed_u1_l1_lv3_so4_spectator",
    question: "A student mixes $50.0\\text{ cm}^3$ of $0.200\\text{ mol dm}^{-3}$ barium chloride solution, $\\text{BaCl}_2\\text{(aq)}$, with $150.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium sulfate solution, $\\text{Na}_2\\text{SO}_4\\text{(aq)}$. Barium sulfate precipitates according to the equation:\n$$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}$$\nCalculate the concentration of the remaining dissolved sulfate ions, $\\text{SO}_4^{2-}\\text{(aq)}$, in the solution after precipitation is complete. (Assume volumes are additive).",
    options: [
      { text: "0.0250 mol dm⁻³" },
      { text: "0.0500 mol dm⁻³" },
      { text: "0.0750 mol dm⁻³" },
      { text: "0.000 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "First, calculate the initial moles of reacting ions:\n\nMoles of $\\text{Ba}^{2+}$ from $\\text{BaCl}_2$:\n$n(\\text{Ba}^{2+}) = C \\times V = 0.200\\text{ mol dm}^{-3} \\times 0.0500\\text{ dm}^3 = 0.0100\\text{ mol}$\n\nMoles of $\\text{SO}_4^{2-}$ from $\\text{Na}_2\\text{SO}_4$:\n$n(\\text{SO}_4^{2-}) = C \\times V = 0.100\\text{ mol dm}^{-3} \\times 0.1500\\text{ dm}^3 = 0.0150\\text{ mol}$\n\nSince $\\text{Ba}^{2+}$ and $\\text{SO}_4^{2-}$ react in a 1:1 ratio, $\\text{Ba}^{2+}$ is the limiting reagent and will react completely.\n\nMoles of $\\text{SO}_4^{2-}$ remaining after precipitation:\n$n(\\text{SO}_4^{2-})_{\\text{remaining}} = 0.0150 - 0.0100 = 0.0050\\text{ mol}$\n\nNow, calculate the final total volume of the mixture:\n$V_{\\text{total}} = 50.0 + 150.0 = 200.0\\text{ cm}^3 = 0.2000\\text{ dm}^3$\n\nFinally, calculate the concentration of remaining dissolved $\\text{SO}_4^{2-}$ ions:\n$C = \\frac{n}{V} = \\frac{0.0050\\text{ mol}}{0.2000\\text{ dm}^3} = 0.0250\\text{ mol dm}^{-3}$\n\nSince all values in the question are given to 3 significant figures, the final concentration is reported as $0.0250\\text{ mol dm}^{-3}$ (3 significant figures).",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-06-18T13:40:00Z"
  }
];
