import { Question } from '../../../types';

// Elements, Compounds and Mixtures - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l2_lv3_1-2026",
    question: "A student mixes iron filings and yellow sulfur powder in a test tube. When strongly heated with a Bunsen burner, a vigorous exothermic reaction continues even after removing the heat, forming a black solid product (iron(II) sulfide, $FeS$). Which evidence proves that a chemical compound was synthesized rather than a physical mixture?",
    options: [
      { text: "The product cannot be separated using a bar magnet, and it reacts with dilute hydrochloric acid to produce smelly hydrogen sulfide gas ($H_2S$) rather than flammable hydrogen gas ($H_2$)" },
      { text: "The sulfur powder in the product can easily dissolve in liquid carbon disulfide ($CS_2$)" },
      { text: "The mass of the black solid is half of the combined initial masses of iron and sulfur" },
      { text: "The black solid has variable melting temperatures depending on how long it was heated" }
    ],
    correctAnswer: 0,
    explanation: "* In a mixture, iron retains its magnetic property and reacts with $HCl$ to give $H_2(g)$ ($Fe + 2HCl \\rightarrow FeCl_2 + H_2$).\n* In the compound $FeS$, iron is chemically bonded to sulfur in a $1:1$ atomic ratio. It is non-magnetic and reacts with acid to give toxic $H_2S(g)$ ($FeS + 2HCl \\rightarrow FeCl_2 + H_2S$), demonstrating completely new chemical properties.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q5",
    createdAt: "2026-05-12T10:00:00Z"
  }
];
