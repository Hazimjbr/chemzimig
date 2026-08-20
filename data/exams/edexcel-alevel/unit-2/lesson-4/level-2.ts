import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l4_lv2_1-2026",
    question: "When the temperature of a gaseous reaction mixture is increased by only 10 K (e.g., from 300 K to 310 K), the rate of reaction approximately doubles. What is the fundamental reason for this dramatic rate increase according to the Maxwell-Boltzmann distribution?",
    options: [
      { text: "The total collision frequency between particles doubles" },
      { text: "The proportion of particles with kinetic energy greater than or equal to the activation energy (E ≥ E_a) increases significantly", isCorrect: true },
      { text: "The activation energy of the reaction is halved" },
      { text: "The enthalpy change of the reaction becomes twice as exothermic" }
    ],
    correctAnswer: 1,
    explanation: "* A 10 K temperature rise increases collision frequency by only about $1-2\\%$.\n* However, it broadens and shifts the Maxwell-Boltzmann curve to the right, dramatically increasing the area under the curve beyond $E_a$ (substantially increasing the fraction of collisions with $E \\ge E_a$).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q25",
    createdAt: "2026-08-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_2-2026",
    question: "For the industrial synthesis of ammonia via the Haber process:\n$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)} \\quad \\Delta H = -92\\text{ kJ mol}^{-1}$\nWhy is an intermediate temperature of 400–450 °C used industrially rather than a very low temperature (which gives higher theoretical equilibrium yield) or a very high temperature?",
    options: [
      { text: "Ammonia decomposes completely below 400 °C" },
      { text: "It provides an acceptable economic compromise between a reasonable rate of reaction and an acceptable equilibrium yield", isCorrect: true },
      { text: "Iron catalyst only works at exactly 450 °C" },
      { text: "Low temperature causes nitrogen to react with iron" }
    ],
    correctAnswer: 1,
    explanation: "* Because the forward reaction is exothermic, low temperature gives high equilibrium yield but an unacceptably slow rate.\n* A compromise temperature of $400-450\\text{ }^\\circ\\text{C}$ ensures a commercially viable rate of ammonia production in the presence of an iron catalyst.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q26",
    createdAt: "2026-08-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_3-2026",
    question: "At a given temperature, the equilibrium concentrations for the reaction $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$ are:\n$[\\text{SO}_2] = 0.20\\text{ mol dm}^{-3}$, $[\\text{O}_2] = 0.10\\text{ mol dm}^{-3}$, $[\\text{SO}_3] = 0.40\\text{ mol dm}^{-3}$.\nCalculate the numerical value and units of $K_c$.",
    options: [
      { text: "20.0 mol⁻¹ dm³" },
      { text: "40.0 mol⁻¹ dm³", isCorrect: true },
      { text: "40.0 mol dm⁻³" },
      { text: "10.0 dm⁶ mol⁻²" }
    ],
    correctAnswer: 1,
    explanation: "* $K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2[\\text{O}_2]} = \\frac{(0.40)^2}{(0.20)^2(0.10)} = \\frac{0.160}{0.040 \\times 0.10} = \\frac{0.160}{0.0040} = \\mathbf{40.0}$.\n* Units $= \\frac{(\\text{mol dm}^{-3})^2}{(\\text{mol dm}^{-3})^2(\\text{mol dm}^{-3})} = \\frac{1}{\\text{mol dm}^{-3}} = \\mathbf{\\text{mol}^{-1}\\text{ dm}^3}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q21",
    createdAt: "2026-08-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_4-2026",
    question: "How does the peak of the Maxwell-Boltzmann distribution curve change when the temperature of a gas sample is increased?",
    options: [
      { text: "The peak shifts to the right (higher energy) and becomes higher (taller)" },
      { text: "The peak shifts to the right (higher energy) and becomes lower (flatter)", isCorrect: true },
      { text: "The peak shifts to the left and becomes lower" },
      { text: "The peak remains at the exact same position" }
    ],
    correctAnswer: 1,
    explanation: "* At higher temperature, the average kinetic energy increases, so the most probable energy (peak position) shifts to the **right**.\n* Since the total area under the curve is fixed (constant number of particles), the peak must flatten and become **lower**.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q26",
    createdAt: "2026-08-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_5-2026",
    question: "In the reversible gaseous reaction: $\\text{PCl}_5\\text{(g)} \\rightleftharpoons \\text{PCl}_3\\text{(g)} + \\text{Cl}_2\\text{(g)} \\quad \\Delta H = +88\\text{ kJ mol}^{-1}$, which combination of conditions produces the MAXIMUM equilibrium yield of chlorine gas?",
    options: [
      { text: "High temperature and high pressure" },
      { text: "High temperature and low pressure", isCorrect: true },
      { text: "Low temperature and high pressure" },
      { text: "Low temperature and low pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Forward reaction is endothermic ($\Delta H > 0$), so **high temperature** shifts equilibrium to the right.\n* Reactants have 1 mole of gas; products have $1 + 1 = 2\\text{ moles}$ of gas, so **low pressure** shifts equilibrium to the right (towards more moles of gas).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q27",
    createdAt: "2026-08-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv2_6-2026",
    question: "What is the distinction between a homogeneous catalyst and a heterogeneous catalyst?",
    options: [
      { text: "A homogeneous catalyst is always solid, while heterogeneous is liquid" },
      { text: "A homogeneous catalyst is in the same physical phase as the reactants (e.g., aqueous acid catalyst in liquid esterification), whereas a heterogeneous catalyst is in a different physical phase (e.g., solid iron in gaseous Haber process)", isCorrect: true },
      { text: "Heterogeneous catalysts alter the equilibrium constant Kc" },
      { text: "Homogeneous catalysts are permanently consumed during the reaction" }
    ],
    correctAnswer: 1,
    explanation: "* Phase alignment defines catalyst type: homogeneous = same phase (creates soluble intermediates); heterogeneous = different phase (provides a solid active surface for gas/liquid adsorption and reaction).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q22",
    createdAt: "2026-08-08T10:00:00Z"
  }
];

