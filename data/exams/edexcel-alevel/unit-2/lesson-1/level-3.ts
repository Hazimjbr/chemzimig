import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l1_lv3_1-2026",
    question: "Using the following thermochemical data:\n(1) $\\text{C(graphite)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} \\quad \\Delta H_1 = -393.5\\text{ kJ mol}^{-1}$\n(2) $\\text{CO(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} \\quad \\Delta H_2 = -283.0\\text{ kJ mol}^{-1}$\nCalculate the standard enthalpy change of formation of carbon monoxide: $\\text{C(graphite)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}$.",
    options: [
      { text: "-676.5 kJ mol⁻¹" },
      { text: "-110.5 kJ mol⁻¹", isCorrect: true },
      { text: "+110.5 kJ mol⁻¹" },
      { text: "-283.0 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Target equation: $\\text{C(s)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{CO(g)}$.\n* By Hess's Law, target $= \\text{Equation (1)} - \\text{Equation (2)}$.\n* $\\Delta H_f^\\circ[\\text{CO}] = \\Delta H_1 - \\Delta H_2 = -393.5 - (-283.0) = -393.5 + 283.0 = \\mathbf{-110.5\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q6",
    createdAt: "2026-07-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv3_2-2026",
    question: "An experiment is carried out to determine the enthalpy of solution of anhydrous copper(II) sulfate: $\\text{CuSO}_4\\text{(s)} + \\text{aq} \\rightarrow \\text{CuSO}_4\\text{(aq)}$. $7.98\\text{ g}$ of $\\text{CuSO}_4$ ($M_r = 159.6$) is added to $50.0\\text{ g}$ of water in a polystyrene cup. The temperature rises by $15.8\\text{ }^\\circ\\text{C}$. Taking $c = 4.18\\text{ J g}^{-1}\\text{ K}^{-1}$ and total mass $= 57.98\\text{ g}$, calculate $\\Delta H_{\\text{soln}}$ in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "-33.0 kJ mol⁻¹" },
      { text: "-66.0 kJ mol⁻¹" },
      { text: "-76.6 kJ mol⁻¹", isCorrect: true },
      { text: "+76.6 kJ mol⁻¹" }
    ],
    correctAnswer: 2,
    explanation: "* Heat evolved $q = mc\\Delta T = 57.98\\text{ g} \\times 4.18\\text{ J g}^{-1}\\text{ K}^{-1} \\times 15.8\\text{ K} = 3829.2\\text{ J} = 3.829\\text{ kJ}$.\n* Moles of $\\text{CuSO}_4$ $n = \\frac{7.98}{159.6} = 0.0500\\text{ mol}$.\n* $\\Delta H_{\\text{soln}} = -\\frac{q}{n} = -\\frac{3.829}{0.0500} = \\mathbf{-76.58\\text{ kJ mol}^{-1}} \\approx \\mathbf{-76.6\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q7",
    createdAt: "2026-07-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv3_3-2026",
    question: "Using the standard enthalpies of combustion:\n$\\Delta H_c^\\circ[\\text{C(s)}] = -393.5\\text{ kJ mol}^{-1}$\n$\\Delta H_c^\\circ[\\text{H}_2\\text{(g)}] = -285.8\\text{ kJ mol}^{-1}$\n$\\Delta H_c^\\circ[\\text{C}_3\\text{H}_8\\text{(g)}] = -2219.2\\text{ kJ mol}^{-1}$\nCalculate the standard enthalpy of formation ($\\Delta H_f^\\circ$) of propane, $\\text{C}_3\\text{H}_8\\text{(g)}$.",
    options: [
      { text: "-104.5 kJ mol⁻¹", isCorrect: true },
      { text: "+104.5 kJ mol⁻¹" },
      { text: "-1539.9 kJ mol⁻¹" },
      { text: "-2898.5 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Formation equation: $3\\text{C(s)} + 4\\text{H}_2\\text{(g)} \\rightarrow \\text{C}_3\\text{H}_8\\text{(g)}$.\n* $\\Delta H_f^\\circ = \\sum \\Delta H_c^\\circ(\\text{reactants}) - \\sum \\Delta H_c^\\circ(\\text{products})$\n* $\\Delta H_f^\\circ = [3(-393.5) + 4(-285.8)] - [-2219.2] = [-1180.5 - 1143.2] + 2219.2 = -2323.7 + 2219.2 = \\mathbf{-104.5\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q5",
    createdAt: "2026-07-11T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv3_4-2026",
    question: "In an accurate bomb calorimetry experiment, a cooling curve correction (temperature vs. time graph) is plotted before and after combustion. What is the fundamental scientific purpose of extrapolating the cooling curve back to the time of ignition?",
    options: [
      { text: "To increase the activation energy of the reaction" },
      { text: "To determine the theoretical maximum temperature rise that would occur if no heat had been lost to the surrounding environment during the course of the reaction", isCorrect: true },
      { text: "To measure the rate of evaporation of the water" },
      { text: "To calculate the volume of gas produced" }
    ],
    correctAnswer: 1,
    explanation: "* Heat loss to the surroundings begins immediately as the temperature starts rising.\n* By extrapolating the linear cooling line back to the exact time of ignition (or maximum reaction rate), we compensate for heat losses and determine the true uncorrected $\\Delta T_{\\text{max}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q7",
    createdAt: "2026-07-11T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv3_5-2026",
    question: "Given the thermochemical cycle data:\n$\\Delta H_1 = \\Delta H_{\\text{soln}}[\\text{CuSO}_4\\text{(s)}] = -66.5\\text{ kJ mol}^{-1}$\n$\\Delta H_2 = \\Delta H_{\\text{soln}}[\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O(s)}] = +11.5\\text{ kJ mol}^{-1}$\nCalculate the enthalpy change of hydration ($\\Delta H_{\\text{hyd}}$) for: $\\text{CuSO}_4\\text{(s)} + 5\\text{H}_2\\text{O(l)} \\rightarrow \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O(s)}$.",
    options: [
      { text: "-78.0 kJ mol⁻¹", isCorrect: true },
      { text: "-55.0 kJ mol⁻¹" },
      { text: "+55.0 kJ mol⁻¹" },
      { text: "+78.0 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* Constructing the Hess cycle where both solid hydrates dissolve into the same $\\text{CuSO}_4\\text{(aq)}$ solution:\n* $\\Delta H_{\\text{hyd}} + \\Delta H_2 = \\Delta H_1 \\implies \\Delta H_{\\text{hyd}} = \\Delta H_1 - \\Delta H_2$.\n* $\\Delta H_{\\text{hyd}} = -66.5 - (+11.5) = \\mathbf{-78.0\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q8",
    createdAt: "2026-07-12T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv3_6-2026",
    question: "The standard enthalpy change for the reaction $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$ is $-92.2\\text{ kJ mol}^{-1}$. Given that the bond enthalpies of $\\text{N}\\equiv\\text{N}$ and $\\text{H}-\\text{H}$ are $945\\text{ kJ mol}^{-1}$ and $436\\text{ kJ mol}^{-1}$ respectively, calculate the mean bond enthalpy of the $\\text{N}-\\text{H}$ bond in ammonia.",
    options: [
      { text: "391 kJ mol⁻¹", isCorrect: true },
      { text: "436 kJ mol⁻¹" },
      { text: "782 kJ mol⁻¹" },
      { text: "1173 kJ mol⁻¹" }
    ],
    correctAnswer: 0,
    explanation: "* $\\Delta H = \\sum E(\\text{bonds broken}) - \\sum E(\\text{bonds formed})$.\n* Bonds broken: $1 \\times (\\text{N}\\equiv\\text{N}) + 3 \\times (\\text{H}-\\text{H}) = 945 + 3(436) = 945 + 1308 = +2253\\text{ kJ}$.\n* Bonds formed: $2 \\times 3 \\times E(\\text{N}-\\text{H}) = 6 E(\\text{N}-\\text{H})$.\n* $-92.2 = 2253 - 6 E(\\text{N}-\\text{H}) \\implies 6 E(\\text{N}-\\text{H}) = 2253 + 92.2 = 2345.2\\text{ kJ}$.\n* $E(\\text{N}-\\text{H}) = \\frac{2345.2}{6} = 390.87\\text{ kJ mol}^{-1} \\approx \\mathbf{391\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q6",
    createdAt: "2026-07-12T10:00:00Z"
  }
];

