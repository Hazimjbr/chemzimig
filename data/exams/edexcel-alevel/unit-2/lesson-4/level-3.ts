import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l4_lv3_1-2026",
    question: "In an esterification reaction, $1.00\\text{ mol}$ of ethanoic acid and $1.00\\text{ mol}$ of ethanol are mixed in a sealed tube at $298\\text{ K}$. At equilibrium, $0.667\\text{ mol}$ of ethyl ethanoate is present: $\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$. Calculate the numerical value of $K_c$.",
    options: [
      { text: "0.25" },
      { text: "2.00" },
      { text: "4.00", isCorrect: true },
      { text: "8.00" }
    ],
    correctAnswer: 2,
    explanation: "* Equilibrium moles:\n  * $[\\text{ester}] = 0.667\\text{ mol}$\n  * $[\\text{water}] = 0.667\\text{ mol}$\n  * $[\\text{acid}] = 1.00 - 0.667 = 0.333\\text{ mol}$\n  * $[\\text{alcohol}] = 1.00 - 0.667 = 0.333\\text{ mol}$\n* $K_c = \\frac{0.667 \\times 0.667}{0.333 \\times 0.333} = \\left(\\frac{2/3}{1/3}\\right)^2 = 2^2 = \\mathbf{4.00}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q27",
    createdAt: "2026-08-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_2-2026",
    question: "For the exothermic reaction: $2\\text{NO}_2\\text{(g, brown)} \\rightleftharpoons \\text{N}_2\\text{O}_4\\text{(g, colorless)} \\quad \\Delta H = -57\\text{ kJ mol}^{-1}$. A sealed syringe containing this equilibrium mixture is suddenly compressed to half its initial volume. What color change is observed instantaneously, and then as the new equilibrium is established?",
    options: [
      { text: "Instantly turns darker brown (due to increased concentration), then gradually pales (as equilibrium shifts right to fewer moles of gas)", isCorrect: true },
      { text: "Instantly turns completely colorless and remains colorless" },
      { text: "Instantly turns paler, then darkens" },
      { text: "No visible change occurs at any point" }
    ],
    correctAnswer: 0,
    explanation: "* Instantaneously upon compression, all concentrations double ($[\\text{NO}_2]$ increases), immediately deepening the brown color.\n* Over time, by Le Chatelier's principle, increased pressure drives the system to the right ($2\\text{ moles} \\rightarrow 1\\text{ mole}$) forming colorless $\\text{N}_2\\text{O}_4$, so the mixture partially pales to its new equilibrium.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q28",
    createdAt: "2026-08-09T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_3-2026",
    question: "A reaction has an activation energy of $E_a = +55.0\\text{ kJ mol}^{-1}$ and an enthalpy change of $\\Delta H = -25.0\\text{ kJ mol}^{-1}$. What is the activation energy ($E_a'$) for the REVERSE reaction?",
    options: [
      { text: "+30.0 kJ mol⁻¹" },
      { text: "+55.0 kJ mol⁻¹" },
      { text: "+80.0 kJ mol⁻¹", isCorrect: true },
      { text: "-80.0 kJ mol⁻¹" }
    ],
    correctAnswer: 2,
    explanation: "* For an exothermic reaction: $E_{a,\\text{reverse}} = E_{a,\\text{forward}} + |\\Delta H|$.\n* $E_{a,\\text{reverse}} = 55.0 + 25.0 = \\mathbf{+80.0\\text{ kJ mol}^{-1}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q23",
    createdAt: "2026-08-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_4-2026",
    question: "In the Contact process for sulfuric acid: $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)} \\quad \\Delta H = -197\\text{ kJ mol}^{-1}$, why is an atmospheric pressure of only 1–2 atm employed commercially rather than a very high pressure?",
    options: [
      { text: "High pressure causes sulfur trioxide to decompose" },
      { text: "The equilibrium yield of SO₃ is already extremely high (over 98%) at 1–2 atm, so the high financial costs of constructing and maintaining high-pressure vessels are economically unjustified", isCorrect: true },
      { text: "Vanadium(V) oxide catalyst only operates at 1 atm" },
      { text: "Oxygen liquefies at higher pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Although high pressure favors product formation, the equilibrium conversion of $\\text{SO}_2$ to $\\text{SO}_3$ is already $>98\\%$ at $1-2\\text{ atm}$.\n* The marginal gain in yield cannot justify the massive capital equipment and safety costs of high-pressure compressors.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q28",
    createdAt: "2026-08-10T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_5-2026",
    question: "How does heterogeneous catalysis operate at a molecular level (the 5-stage adsorption-reaction-desorption model)?",
    options: [
      { text: "Reactants dissolve into the bulk crystal lattice of the metal" },
      { text: "Reactant molecules are ADSORBED onto active surface sites, chemical bonds are weakened to lower activation energy, the reaction occurs on the surface, and product molecules DESORB away", isCorrect: true },
      { text: "The catalyst donates electrons permanently to form ionic intermediates" },
      { text: "The catalyst increases the pressure inside the gas phase" }
    ],
    correctAnswer: 1,
    explanation: "* Steps: (1) Diffusion to surface $\\rightarrow$ (2) **Adsorption** onto active sites (weakening bonds) $\\rightarrow$ (3) Surface reaction $\\rightarrow$ (4) **Desorption** of products $\\rightarrow$ (5) Diffusion away, leaving active sites free for new reactant molecules.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q29",
    createdAt: "2026-08-11T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l4_lv3_6-2026",
    question: "When $0.400\\text{ mol}$ of $\\text{A}$ and $0.400\\text{ mol}$ of $\\text{B}$ are placed in a $2.00\\text{ dm}^3$ sealed container and allowed to equilibrate: $\\text{A(g)} + \\text{B(g)} \\rightleftharpoons 2\\text{C(g)}$. At equilibrium, $0.600\\text{ mol}$ of $\\text{C}$ is present. What is the value of $K_c$?",
    options: [
      { text: "9.0" },
      { text: "16.0" },
      { text: "36.0", isCorrect: true },
      { text: "72.0" }
    ],
    correctAnswer: 2,
    explanation: "* Mole of $\\text{C}$ formed $= 0.600\\text{ mol}$.\n* Moles of $\\text{A}$ and $\\text{B}$ consumed $= 0.600 / 2 = 0.300\\text{ mol}$.\n* Equilibrium moles: $n(\\text{A}) = 0.400 - 0.300 = 0.100\\text{ mol}$, $n(\\text{B}) = 0.100\\text{ mol}$, $n(\\text{C}) = 0.600\\text{ mol}$.\n* Since total moles of gas on both sides are equal ($1+1 = 2$), the volume terms cancel out:\n* $K_c = \\frac{(0.600)^2}{(0.100)(0.100)} = \\frac{0.360}{0.0100} = \\mathbf{36.0}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q24",
    createdAt: "2026-08-11T10:00:00Z"
  }
];

