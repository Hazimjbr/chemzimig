import { Question } from '../../../types';

// Esters - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u11_l6_lv2_1-2026",
    question: "When propanoic acid (C₂H₅COOH) is heated with methanol (CH₃OH) in the presence of concentrated sulfuric acid catalyst, what is the IUPAC name and structure of the ester formed?",
    options: [
      { text: "Methyl propanoate (C₂H₅COOCH₃)", isCorrect: true },
      { text: "Propyl methanoate (HCOOC₃H₇)" },
      { text: "Ethyl ethanoate (CH₃COOC₂H₅)" },
      { text: "Methyl ethanoate (CH₃COOCH₃)" }
    ],
    correctAnswer: 0,
    explanation: "* The alcohol gives the first part of the name (methanol → methyl).\n* The carboxylic acid gives the second part (propanoic acid → propanoate).\n* The ester is methyl propanoate: C₂H₅COOCH₃.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q436",
    createdAt: "2026-08-22T03:15:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv2_2-2026",
    question: "An ester with the structural formula HCOOCH₂CH₂CH₃ has a sweet raspberry flavour.\nWhich carboxylic acid and alcohol were used to synthesize this ester?",
    options: [
      { text: "Methanoic acid (HCOOH) and propan-1-ol (CH₃CH₂CH₂OH)", isCorrect: true },
      { text: "Propanoic acid (CH₃CH₂COOH) and methanol (CH₃OH)" },
      { text: "Ethanoic acid (CH₃COOH) and ethanol (C₂H₅OH)" },
      { text: "Butanoic acid (C₃H₇COOH) and water (H₂O)" }
    ],
    correctAnswer: 0,
    explanation: "* Splitting at the ester link (–COO–):\n  - Left side: HCOO– originates from methanoic acid (HCOOH).\n  - Right side: –CH₂CH₂CH₃ originates from propan-1-ol (CH₃CH₂CH₂OH).\n* The ester is propyl methanoate.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q437",
    createdAt: "2026-08-22T03:20:00Z"
  },
  {
    id: "ex_ci_u11_l6_lv2_3-2026",
    question: "Why is water bath heating (or an electric heating mantle) used instead of an open Bunsen burner flame during the laboratory preparation of ethyl ethanoate?",
    options: [
      { text: "Ethanol, ethanoic acid, and ethyl ethanoate are highly volatile and flammable organic compounds that present a fire hazard near naked flames", isCorrect: true },
      { text: "Bunsen flames freeze the reacting mixture" },
      { text: "Open flames react with sulfuric acid to release ozone" },
      { text: "Water baths increase the atmospheric pressure" }
    ],
    correctAnswer: 0,
    explanation: "* Alcohols and esters have low boiling points, high vapour pressures, and are highly flammable. Heating in a warm water bath avoids the severe danger of igniting organic vapours.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q438",
    createdAt: "2026-08-22T03:25:00Z"
  }
];
