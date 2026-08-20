import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l5_lv3_1-2026",
    question: "Hydrolysis of 2-bromo-2-methylpropane (a tertiary halogenoalkane) with aqueous sodium hydroxide proceeds via an S_N1 mechanism. What is the rate-determining step in this mechanism?",
    options: [
      { text: "Simultaneous attack of hydroxide ion from behind while bromide leaves" },
      { text: "Slow heterolytic fission of the C–Br bond to generate a planar, relatively stable tertiary carbocation intermediate ((CH₃)₃C⁺) and a bromide ion", isCorrect: true },
      { text: "Proton transfer to form water" },
      { text: "Homolytic fission producing methyl radicals" }
    ],
    correctAnswer: 1,
    explanation: "* In the $S_N1$ mechanism, the rate-determining (slow) step is unimolecular ($r = k[\\text{tertiary halogenoalkane}]$): $\\text{(CH}_3)_3\\text{C}-\\text{Br} \\xrightarrow{\\text{slow}} \\text{(CH}_3)_3\\text{C}^+ + \\text{Br}^-$.\n* The planar tertiary carbocation is stabilized by the positive inductive electron release of three methyl groups.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q34",
    createdAt: "2026-08-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_2-2026",
    question: "When primary halogenoalkane 1-bromobutane reacts with aqueous hydroxide ions via an S_N2 mechanism with a chiral carbon center, what stereochemical outcome is observed at the reaction center?",
    options: [
      { text: "Complete racemization (50% inversion, 50% retention)" },
      { text: "Complete Walden inversion of configuration (100% inversion) due to nucleophilic backside attack opposite the leaving group", isCorrect: true },
      { text: "Complete retention of configuration" },
      { text: "Loss of optical activity through free radical dimerization" }
    ],
    correctAnswer: 1,
    explanation: "* In the concerted $S_N2$ mechanism, the nucleophile attacks the carbon atom directly from the back ($180^\\circ$ opposite the departing leaving group) through a trigonal bipyramidal transition state, causing full **Walden inversion**.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q35",
    createdAt: "2026-08-19T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_3-2026",
    question: "An unknown organic compound with molecular formula $\\text{C}_3\\text{H}_6\\text{O}$ gives a positive orange precipitate with 2,4-dinitrophenylhydrazine (2,4-DNPH), but gives NO reaction (no silver mirror) with Tollens' reagent. What is the systematic IUPAC name of this compound?",
    options: [
      { text: "Propanal" },
      { text: "Propan-1-ol" },
      { text: "Propanone", isCorrect: true },
      { text: "Prop-2-en-1-ol" }
    ],
    correctAnswer: 2,
    explanation: "* A positive 2,4-DNPH test indicates a carbonyl compound (aldehyde or ketone).\n* Negative Tollens' reagent test eliminates aldehydes.\n* Therefore, the 3-carbon carbonyl is the ketone **propanone** ($\\text{CH}_3\\text{COCH}_3$).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q29",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_4-2026",
    question: "The mass spectrum of an unknown alcohol shows a molecular ion peak at $m/z = 60$ and a prominent base peak at $m/z = 31$. What is the identity of the alcohol, and what fragment corresponds to $m/z = 31$?",
    options: [
      { text: "Propan-2-ol; fragment is [CH₃CH(OH)]⁺" },
      { text: "Propan-1-ol; fragment is the hydroxymethyl cation [CH₂OH]⁺", isCorrect: true },
      { text: "Ethanol; fragment is [C₂H₅]⁺" },
      { text: "Butan-1-ol; fragment is [OCH₃]⁺" }
    ],
    correctAnswer: 1,
    explanation: "* Molecular mass $M_r = 60$ corresponds to $\\text{C}_3\\text{H}_8\\text{O}$ (propan-1-ol or propan-2-ol).\n* In primary alcohols, alpha-cleavage yields the resonance-stabilized hydroxymethyl cation: $[\\text{CH}_2=\\text{OH}]^+$ at $m/z = 12 + 2 + 16 + 1 = \\mathbf{31}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q35",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_5-2026",
    question: "In the preparation and purification of a liquid halogenoalkane (e.g., 1-bromobutane), anhydrous calcium chloride ($\\text{CaCl}_2$) or anhydrous magnesium sulfate ($\\text{MgSO}_4$) is added to the organic layer before final distillation. What is the chemical purpose of this step?",
    options: [
      { text: "To act as a catalyst for distillation" },
      { text: "To act as a drying agent, removing trace residual water from the organic product until the cloudy liquid turns completely clear", isCorrect: true },
      { text: "To neutralize acidic impurities" },
      { text: "To precipitate unreacted alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Anhydrous inorganic salts hydrate by binding residual dissolved water molecules into solid crystalline hydrates, turning the cloudy organic phase into a clear, dry liquid ready for pure distillation.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q36",
    createdAt: "2026-08-20T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv3_6-2026",
    question: "The high-resolution mass spectrum of an organic compound containing chlorine exhibits two molecular ion peaks: $M^+$ at $m/z = 78$ and $[M+2]^+$ at $m/z = 80$ in an exact $3 : 1$ intensity ratio. What is the molecular formula of this compound?",
    options: [
      { text: "C₂H₅Cl", isCorrect: true },
      { text: "C₃H₇Cl" },
      { text: "CH₃Cl" },
      { text: "C₄H₉Cl" }
    ],
    correctAnswer: 0,
    explanation: "* The $3:1$ doublet ratio between $M^+$ and $[M+2]^+$ is diagnostic of a single chlorine atom ($^{35}\\text{Cl} : ^{37}\\text{Cl} \\approx 75\\% : 25\\% = 3 : 1$).\n* For chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$): $M_r(^{35}\\text{Cl}) = 2(12) + 5(1) + 35 = 24 + 5 + 35 = \\mathbf{78}$, and $M_r(^{37}\\text{Cl}) = \\mathbf{80}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q30",
    createdAt: "2026-08-20T10:00:00Z"
  }
];

