import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l1_lv2_1-2026",
    question: "In a coffee-cup calorimetry experiment, $50.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}\\text{ HCl}$ is neutralized by $50.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}\\text{ NaOH}$. The temperature of the mixture rises by $6.50\\text{ }^\\circ\\text{C}$. Assuming density of solution $= 1.00\\text{ g cm}^{-3}$ and $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$, calculate the molar enthalpy change of neutralization ($\\Delta H_{\\text{neut}}$) in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "-27.2 kJ mol⁻¹" },
      { text: "-54.3 kJ mol⁻¹", isCorrect: true },
      { text: "-108.7 kJ mol⁻¹" },
      { text: "+54.3 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Total mass of solution $m = 50.0 + 50.0 = 100.0\\text{ g}$.\n* Heat released $q = mc\\Delta T = 100.0 \\times 4.18 \\times 6.50 = 2717\\text{ J} = 2.717\\text{ kJ}$.\n* Moles of $\\text{H}_2\\text{O}$ formed $n = c \\times V = 1.00 \\times 0.0500 = 0.0500\\text{ mol}$.\n* $\\Delta H_{\\text{neut}} = -\\frac{q}{n} = -\\frac{2.717}{0.0500} = -54.34\\text{ kJ mol}^{-1} \\approx \\mathbf{-54.3\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q4",
    createdAt: "2026-07-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_2-2026",
    question: "Given the standard enthalpies of formation:\n$\\Delta H_f^\\circ[\\text{CO}_2\\text{(g)}] = -393.5\\text{ kJ mol}^{-1}$,\n$\\Delta H_f^\\circ[\\text{H}_2\\text{O(l)}] = -285.8\\text{ kJ mol}^{-1}$,\n$\\Delta H_f^\\circ[\\text{C}_2\\text{H}_6\\text{(g)}] = -84.7\\text{ kJ mol}^{-1}$.\nCalculate the standard enthalpy of combustion ($\\Delta H_c^\\circ$) of ethane, $\\text{C}_2\\text{H}_6\\text{(g)}$.",
    options: [
      { text: "-1559.7 kJ mol⁻¹", isCorrect: true },
      { text: "-1475.0 kJ mol⁻¹" },
      { text: "-764.0 kJ mol⁻¹" },
      { text: "-3119.4 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Combustion equation: $\\text{C}_2\\text{H}_6\\text{(g)} + 3.5\\text{O}_2\\text{(g)} \\rightarrow 2\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(l)}$.\n* $\\Delta H_c^\\circ = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$\n* $\\Delta H_c^\\circ = [2(-393.5) + 3(-285.8)] - [-84.7] = [-787.0 - 857.4] + 84.7 = -1644.4 + 84.7 = \\mathbf{-1559.7\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q5",
    createdAt: "2026-07-07T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_3-2026",
    question: "Using the mean bond enthalpy data below:\n$E(\\text{C}-\\text{C}) = 347\\text{ kJ mol}^{-1}$\n$E(\\text{C}=\\text{C}) = 612\\text{ kJ mol}^{-1}$\n$E(\\text{C}-\\text{H}) = 413\\text{ kJ mol}^{-1}$\n$E(\\text{H}-\\text{H}) = 436\\text{ kJ mol}^{-1}$\nCalculate the enthalpy change for the catalytic hydrogenation of ethene: $\\text{C}_2\\text{H}_4\\text{(g)} + \\text{H}_2\\text{(g)} \\rightarrow \\text{C}_2\\text{H}_6\\text{(g)}$.",
    options: [
      { text: "-124 kJ mol⁻¹", isCorrect: true },
      { text: "+124 kJ mol⁻¹" },
      { text: "-248 kJ mol⁻¹" },
      { text: "-537 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Bonds broken: $1 \\times (\\text{C}=\\text{C}) + 1 \\times (\\text{H}-\\text{H}) = 612 + 436 = +1048\\text{ kJ}$.\n* Bonds formed: $1 \\times (\\text{C}-\\text{C}) + 2 \\times (\\text{C}-\\text{H}) = 347 + 2(413) = 347 + 826 = 1173\\text{ kJ}$.\n* $\\Delta H = \\text{Bonds Broken} - \\text{Bonds Formed} = 1048 - 1173 = \\mathbf{-124\\text{ kJ mol}^{-1}}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q3",
    createdAt: "2026-07-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_4-2026",
    question: "Why do experimental values of enthalpy changes calculated using mean bond enthalpies often differ slightly from values calculated using standard enthalpies of formation?",
    options: [
      { text: "Mean bond enthalpies are measured in the solid state" },
      { text: "Mean bond enthalpies are averages calculated across a wide variety of different molecular environments and assume gaseous covalent species", isCorrect: true },
      { text: "Hess's Law is only an approximation" },
      { text: "Calorimeters always lose all their heat" }
    ],
    correctAnswer: 1,
    explanation: "* Mean bond enthalpies are averaged values obtained from many different chemical compounds in the gaseous state, whereas actual bond strengths vary depending on neighboring chemical environments.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q5",
    createdAt: "2026-07-08T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_5-2026",
    question: "In a spirit burner experiment to determine the enthalpy of combustion of liquid ethanol, which of the following is the most significant source of experimental error leading to a less negative calculated value of ΔH_c?",
    options: [
      { text: "The balance was too sensitive" },
      { text: "Significant heat loss to the surrounding air and incomplete combustion of the alcohol fuel", isCorrect: true },
      { text: "Water boiling away completely" },
      { text: "The specific heat capacity of water changing to zero" }
    ],
    correctAnswer: 1,
    explanation: "* Heat loss to the air/calorimeter draft and incomplete combustion (soot formation) mean less heat is absorbed by the water, yielding an experimental $\\Delta H_c$ value substantially lower (less exothermic) than the theoretical data value.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q6",
    createdAt: "2026-07-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv2_6-2026",
    question: "Why cannot the standard enthalpy change of formation of carbon monoxide ($\\text{C(s)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}$) be measured directly in a simple calorimeter?",
    options: [
      { text: "Carbon is unreactive towards oxygen" },
      { text: "Burning carbon in a limited oxygen supply inevitably forms an unpreventable mixture of both carbon monoxide (CO) and carbon dioxide (CO₂)", isCorrect: true },
      { text: "Carbon monoxide is a solid at room temperature" },
      { text: "The reaction is extremely endothermic" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon cannot be burned to form pure $\\text{CO}$ exclusively; some $\\text{CO}_2$ always forms simultaneously.\n* Therefore, $\\Delta H_f^\\circ[\\text{CO}]$ must be determined indirectly using Hess's Law and the enthalpies of combustion of $\\text{C}$ and $\\text{CO}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q4",
    createdAt: "2026-07-09T10:00:00Z"
  }
];

