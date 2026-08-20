import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l1_lv1_1-2026",
    question: "Which of the following describes an exothermic chemical reaction?",
    options: [
      { text: "Enthalpy of products is greater than enthalpy of reactants (ΔH is positive)" },
      { text: "Thermal energy is transferred from the system to the surroundings, causing the temperature of the surroundings to increase (ΔH is negative)", isCorrect: true },
      { text: "Chemical bonds are broken without forming any new bonds" },
      { text: "The reaction absorbs heat energy from the surroundings" }
    ],
    correctAnswer: 1,
    explanation: "* In an exothermic reaction, total enthalpy of reactants exceeds that of products.\n* Heat is released to the surroundings, resulting in a negative enthalpy change ($\\Delta H < 0$) and a temperature rise.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q1",
    createdAt: "2026-07-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_2-2026",
    question: "What are the standard conditions of temperature and pressure (STP / standard thermodynamic conditions) for measuring standard enthalpy changes (ΔH°)?",
    options: [
      { text: "273 K (0 °C) and 100 kPa (1 bar)" },
      { text: "298 K (25 °C) and 100 kPa (1 bar / 1 atm)", isCorrect: true },
      { text: "300 K and 200 kPa" },
      { text: "0 K and 100 kPa" }
    ],
    correctAnswer: 1,
    explanation: "* Standard thermodynamic enthalpy changes ($\\Delta H^\\theta$) are defined at a temperature of $298\\text{ K}$ ($25\\text{ }^\\circ\\text{C}$) and standard pressure of $100\\text{ kPa}$ (or $1\\text{ atm}$), with solutions at $1.00\\text{ mol dm}^{-3}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q2",
    createdAt: "2026-07-03T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_3-2026",
    question: "Which equation correctly represents the standard enthalpy change of formation (ΔH_f°) of liquid ethanol, C₂H₅OH(l)?",
    options: [
      { text: "2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)", isCorrect: true },
      { text: "2C(g) + 6H(g) + O(g) → C₂H₅OH(l)" },
      { text: "C₂H₄(g) + H₂O(l) → C₂H₅OH(l)" },
      { text: "4C(s) + 6H₂(g) + O₂(g) → 2C₂H₅OH(l)" }
    ],
    correctAnswer: 0,
    explanation: "* Standard enthalpy change of formation ($\\Delta H_f^\\theta$) is the enthalpy change when ONE mole of a compound is formed from its constituent elements in their standard states under standard conditions: $2\\text{C(s)} + 3\\text{H}_2\\text{(g)} + \\frac{1}{2}\\text{O}_2\\text{(g)} \\rightarrow \\text{C}_2\\text{H}_5\\text{OH(l)}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q1",
    createdAt: "2026-07-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_4-2026",
    question: "Which equation represents the standard enthalpy change of combustion (ΔH_c°) of methane gas, CH₄(g)?",
    options: [
      { text: "CH₄(g) + O₂(g) → CO(g) + 2H₂O(l)" },
      { text: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)", isCorrect: true },
      { text: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)" },
      { text: "2CH₄(g) + 4O₂(g) → 2CO₂(g) + 4H₂O(l)" }
    ],
    correctAnswer: 1,
    explanation: "* Standard enthalpy of combustion is the enthalpy change when ONE mole of a substance burns completely in excess oxygen under standard conditions, with all reactants and products in standard states (water must be liquid $\\text{H}_2\\text{O(l)}$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q2",
    createdAt: "2026-07-04T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_5-2026",
    question: "What formula is used to calculate the heat energy transferred ($q$) to or from a solution in a calorimetry experiment?",
    options: [
      { text: "q = m / (c × ΔT)" },
      { text: "q = m × c × ΔT", isCorrect: true },
      { text: "q = n × ΔH" },
      { text: "q = p × V" }
    ],
    correctAnswer: 1,
    explanation: "* Heat transferred is calculated using $q = mc\\Delta T$, where $m$ is the mass of solution, $c$ is the specific heat capacity (usually $4.18\\text{ J g}^{-1}\\text{ K}^{-1}$ for water), and $\\Delta T$ is the temperature change.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q3",
    createdAt: "2026-07-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_6-2026",
    question: "Why is the process of breaking a chemical covalent bond always endothermic (ΔH > 0)?",
    options: [
      { text: "Energy must be supplied to overcome the electrostatic attraction between the shared electrons and the nuclei of the bonded atoms", isCorrect: true },
      { text: "Bond breaking produces cold ions" },
      { text: "Electrons lose kinetic energy" },
      { text: "The surrounding pressure increases" }
    ],
    correctAnswer: 0,
    explanation: "* Chemical bonds are attractive electrostatic forces.\n* Overcoming these attractive forces always requires an input of energy ($\\text{Endothermic}, \\Delta H > 0$). Bond making releases energy ($\\text{Exothermic}$).",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q2",
    createdAt: "2026-07-05T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_7-2026",
    question: "What is Hess's Law?",
    options: [
      { text: "The total enthalpy change for a chemical reaction is independent of the route taken, provided the initial and final states are identical", isCorrect: true },
      { text: "The rate of a chemical reaction is proportional to temperature" },
      { text: "Enthalpy change depends on the type of catalyst used" },
      { text: "The volume of a gas is directly proportional to temperature at constant pressure" }
    ],
    correctAnswer: 0,
    explanation: "* Hess's Law states that the total enthalpy change accompanying a chemical transformation is constant and independent of the pathway or number of intermediate steps taken.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q3",
    createdAt: "2026-07-06T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l1_lv1_8-2026",
    question: "What is the standard enthalpy change of formation (ΔH_f°) for any pure chemical element in its standard physical state (e.g., O₂(g), C(graphite), Na(s))?",
    options: [
      { text: "-100 kJ mol⁻¹" },
      { text: "0 kJ mol⁻¹", isCorrect: true },
      { text: "+100 kJ mol⁻¹" },
      { text: "+298 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* By thermodynamic definition, the standard enthalpy of formation of an element in its most stable standard physical state is exactly **$0\\text{ kJ mol}^{-1}$**.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q4",
    createdAt: "2026-07-06T10:00:00Z"
  }
];

