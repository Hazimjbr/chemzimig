import { Question } from '../../../types';

// Alkenes - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u11_l2_lv2_1-2026",
    question: "Under what conditions does ethene react with steam (water vapour) to produce ethanol?\nC₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g)",
    options: [
      { text: "Temperature: 300°C, Pressure: 60 atm, Catalyst: concentrated phosphoric(V) acid (H₃PO₄)", isCorrect: true },
      { text: "Temperature: 100°C, Pressure: 1 atm, Catalyst: iron" },
      { text: "Temperature: 450°C, Pressure: 200 atm, Catalyst: vanadium(V) oxide" },
      { text: "Room temperature, Pressure: 1 atm, Catalyst: yeast" }
    ],
    correctAnswer: 0,
    explanation: "* The industrial hydration of ethene requires an addition reaction with steam at ~300°C, ~60 atm pressure, over a phosphoric(V) acid catalyst absorbed on silica.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q404",
    createdAt: "2026-08-21T23:15:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv2_2-2026",
    question: "What is the commercial application and condition for the catalytic hydrogenation of unsaturated vegetable oils containing C=C bonds?",
    options: [
      { text: "Hardening liquid vegetable oils into solid margarine by reacting with H₂ gas in the presence of a nickel catalyst at ~150°C", isCorrect: true },
      { text: "Converting oils into petrol using a silica catalyst" },
      { text: "Bleaching yellow oils using chlorine gas" },
      { text: "Fermenting plant oils into beer using yeast" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogenation adds hydrogen across C=C double bonds in polyunsaturated plant oils using a finely divided nickel (Ni) catalyst at 150–200°C, raising their melting point to produce semi-solid spreadable margarine.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q405",
    createdAt: "2026-08-21T23:20:00Z"
  },
  {
    id: "ex_ci_u11_l2_lv2_3-2026",
    question: "When propene (CH₃–CH=CH₂) reacts with liquid bromine (Br₂), what is the IUPAC name and structure of the single addition product formed?",
    options: [
      { text: "1,2-dibromopropane (CH₃–CHBr–CH₂Br)", isCorrect: true },
      { text: "1,3-dibromopropane" },
      { text: "2-bromopropane" },
      { text: "1,1-dibromopropane" }
    ],
    correctAnswer: 0,
    explanation: "* Bromine atoms add across the double bond between carbon-1 and carbon-2: CH₃–CH=CH₂ + Br₂ → CH₃–CHBr–CH₂Br (1,2-dibromopropane).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q406",
    createdAt: "2026-08-21T23:25:00Z"
  }
];
