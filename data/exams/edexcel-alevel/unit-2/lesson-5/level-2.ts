import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l5_lv2_1-2026",
    question: "When 1-chlorobutane, 1-bromobutane, and 1-iodobutane are reacted separately with aqueous silver nitrate in ethanol at 50 °C, 1-iodobutane forms a precipitate of silver halide most rapidly, while 1-chlorobutane reacts slowest. What fundamental factor explains this order of reactivity?",
    options: [
      { text: "The C–Cl bond is more polar than the C–I bond" },
      { text: "Carbon-halogen bond enthalpy decreases down Group 7 (C–I is the weakest bond, requiring the lowest activation energy to break in the rate-determining step)", isCorrect: true },
      { text: "Iodine is a stronger oxidizing agent than chlorine" },
      { text: "Silver iodide is more soluble than silver chloride" }
    ],
    correctAnswer: 1,
    explanation: "* Although $\\text{C}-\\text{Cl}$ is the most polar bond, bond enthalpy is the deciding factor in nucleophilic substitution of halogenoalkanes.\n* $\\text{C}-\\text{I}$ bond enthalpy ($240\\text{ kJ mol}^{-1}$) is much lower than $\\text{C}-\\text{Cl}$ ($346\\text{ kJ mol}^{-1}$), allowing fastest cleavage.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q32",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_2-2026",
    question: "How can you synthesize an aldehyde in high yield from a primary alcohol using acidified potassium dichromate(VI)?",
    options: [
      { text: "Heat under reflux with an excess of acidified potassium dichromate(VI)" },
      { text: "Use an excess of alcohol, add acidified potassium dichromate(VI) dropwise, and IMMEDIATELY DISTIL OFF the aldehyde product as it forms (simple distillation)", isCorrect: true },
      { text: "Pass steam over a nickel catalyst" },
      { text: "React with concentrated aqueous sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "* Aldehydes have lower boiling points than alcohols and carboxylic acids because they cannot form hydrogen bonds.\n* Distilling off the aldehyde as soon as it forms prevents prolonged contact with the oxidizing agent and prevents further oxidation to the carboxylic acid.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q33",
    createdAt: "2026-08-16T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_3-2026",
    question: "What organic product is formed when secondary alcohol propan-2-ol is heated under reflux with acidified potassium dichromate(VI)?",
    options: [
      { text: "Propanal" },
      { text: "Propanoic acid" },
      { text: "Propanone (Acetone, a ketone)", isCorrect: true },
      { text: "Propene" }
    ],
    correctAnswer: 2,
    explanation: "* Secondary ($2^\\circ$) alcohols are oxidized by acidified $\\text{Cr}_2\\text{O}_7^{2-}$ specifically to **ketones** (propan-2-ol $\\rightarrow$ propanone).\n* Ketones cannot be oxidized further without breaking the carbon chain skeleton.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q27",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_4-2026",
    question: "Which of the following organic compounds will produce a sharp, intense absorption band at approximately 1715 cm⁻¹ and NO broad absorption band between 3200–3600 cm⁻¹ in its Infrared spectrum?",
    options: [
      { text: "Ethanol (CH₃CH₂OH)" },
      { text: "Ethanoic acid (CH₃COOH)" },
      { text: "Propanone (CH₃COCH₃, a ketone)", isCorrect: true },
      { text: "Hexane (C₆H₁₄)" }
    ],
    correctAnswer: 2,
    explanation: "* Ketones contain a carbonyl group ($\\text{C}=\\text{O}$ stretch at $\\sim 1715\\text{ cm}^{-1}$) and no hydroxyl group ($-\\text{OH}$), so the $3200-3600\\text{ cm}^{-1}$ region shows zero absorption.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q33",
    createdAt: "2026-08-17T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_5-2026",
    question: "In the reaction of bromoethane with excess ethanolic ammonia (NH₃) heated in a sealed copper tube under pressure, what is the principal organic product formed?",
    options: [
      { text: "Ethylamine (CH₃CH₂NH₂)", isCorrect: true },
      { text: "Ethanenitrile (CH₃CH₂CN)" },
      { text: "Ethanol (CH₃CH₂OH)" },
      { text: "Ethene (CH₂=CH₂)" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia acts as a nucleophile: $\\text{CH}_3\\text{CH}_2\\text{Br} + 2\\text{NH}_3 \\rightarrow \\text{CH}_3\\text{CH}_2\\text{NH}_2 + \\text{NH}_4\\text{Br}$.\n* Excess ammonia minimizes further nucleophilic attack by the ethylamine product.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q34",
    createdAt: "2026-08-18T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv2_6-2026",
    question: "Why is water pumped into the bottom of a Liebig condenser and exits from the top during reflux and distillation?",
    options: [
      { text: "To prevent thermal shock from cold water hitting hot glass" },
      { text: "To ensure the condenser jacket completely fills with water, preventing trapped air bubbles that would create hot spots and inefficient cooling", isCorrect: true },
      { text: "To increase the boiling point of the mixture" },
      { text: "To siphon off excess distillate" }
    ],
    correctAnswer: 1,
    explanation: "* Entering from the lowest point ensures water fills the condenser jacket against gravity, eliminating air pockets and maximizing thermal contact for efficient condensation.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q28",
    createdAt: "2026-08-18T10:00:00Z"
  }
];

