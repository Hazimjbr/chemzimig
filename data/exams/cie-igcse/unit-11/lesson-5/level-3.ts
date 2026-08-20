import { Question } from '../../../types';

// Polymers - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u11_l5_lv3_1-2026",
    question: "A section of an addition polymer chain has the following structure:\n–CH₂–CH(CH₃)–CH₂–CH(CH₃)–CH₂–CH(CH₃)–\nWhat is the IUPAC name and formula of the monomer from which this polymer was synthesised?",
    options: [
      { text: "Propene (CH₂=CH–CH₃)", isCorrect: true },
      { text: "Ethene (CH₂=CH₂)" },
      { text: "But-2-ene (CH₃–CH=CH–CH₃)" },
      { text: "Methylpropane (CH₃–CH(CH₃)–CH₃)" }
    ],
    correctAnswer: 0,
    explanation: "* The repeat unit contains a 2-carbon backbone with a single methyl side branch: –[CH₂–CH(CH₃)]–.\n* Recreating the double bond between the two backbone carbons gives CH₂=CH–CH₃ (propene).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q431",
    createdAt: "2026-08-22T02:30:00Z"
  },
  {
    id: "ex_ci_u11_l5_lv3_2-2026",
    question: "When the natural condensation polymer starch (a complex carbohydrate) is heated with dilute hydrochloric acid catalyst, it undergoes hydrolysis.\nWhat is the single monosaccharide monomer product formed?",
    options: [
      { text: "Glucose (C₆H₁₂O₆)", isCorrect: true },
      { text: "Amino acids" },
      { text: "Ethanol" },
      { text: "Glycerol" }
    ],
    correctAnswer: 0,
    explanation: "* Starch and cellulose are natural polysaccharides (complex carbohydrates).\n* Acid hydrolysis breaks the glycosidic linkages between sugar units, reforming glucose monomers ($C_6H_{12}O_6$), which can be identified using chromatography or Benedict's test.",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q432",
    createdAt: "2026-08-22T02:35:00Z"
  }
];
