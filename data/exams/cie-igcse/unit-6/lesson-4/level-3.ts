import { Question } from '../../../types';

// Reversible Reactions and Equilibrium - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u6_l4_lv3_1-2026",
    question: "In the industrial Haber process for manufacturing ammonia:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = -92 kJ/mol\nA compromise temperature of 450°C and a pressure of 200 atmospheres are used.\nWhy is a temperature of 450°C chosen rather than 100°C or 900°C?",
    options: [
      { text: "At 100°C the reaction is too slow to be economical, while at 900°C the equilibrium yield of ammonia is too low", isCorrect: true },
      { text: "At 100°C the iron catalyst melts, and at 900°C nitrogen turns into a liquid" },
      { text: "At 450°C the activation energy becomes zero" },
      { text: "At 450°C the reaction becomes endothermic and absorbs waste heat" }
    ],
    correctAnswer: 0,
    explanation: "* Lower temperatures favor higher equilibrium yield (since forward reaction is exothermic), but the rate is impractically slow.\n* Higher temperatures give very fast rates, but lower the equilibrium yield significantly.\n* 450°C is an optimal compromise giving acceptable yield in an acceptable time frame.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q189",
    createdAt: "2026-08-21T01:35:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_2-2026",
    question: "In the Contact process: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = -196 kJ/mol\nA moderate pressure of only 1–2 atmospheres is used industrially rather than 200 atmospheres.\nWhy is a very high pressure NOT used?",
    options: [
      { text: "The equilibrium yield of SO₃ is already over 98% at 1–2 atm, so expensive high-pressure equipment is unnecessary", isCorrect: true },
      { text: "High pressure causes SO₂ to decompose into solid sulfur" },
      { text: "High pressure shifts the equilibrium to the left" },
      { text: "Vanadium(V) oxide catalyst is inactivated at high pressures" }
    ],
    correctAnswer: 0,
    explanation: "* At 450°C and 1–2 atm, the conversion of SO₂ to SO₃ is already ~98%.\n* Building and maintaining high-pressure vessels would incur massive capital and safety costs with virtually no extra yield gain.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q190",
    createdAt: "2026-08-21T01:40:00Z"
  },
  {
    id: "ex_ci_u6_l4_lv3_3-2026",
    question: "A closed equilibrium mixture of 2NO₂(g) (brown) ⇌ N₂O₄(g) (colourless) is suddenly compressed to half its original volume.\nWhat is the immediate visual observation, followed by the subsequent change until a new equilibrium is established?",
    options: [
      { text: "The mixture immediately becomes darker brown, and then gradually turns paler brown", isCorrect: true },
      { text: "The mixture immediately turns completely colourless, then turns dark brown" },
      { text: "The mixture immediately turns pale brown, then becomes permanently colourless" },
      { text: "No immediate change occurs, but the mixture turns darker over time" }
    ],
    correctAnswer: 0,
    explanation: "* Halving volume doubles the concentration of all gas molecules instantly, making the brown color initially darker.\n* Then, by Le Chatelier's principle, the system responds to the increased pressure by shifting to the side with fewer gas molecules (right, forming colourless N₂O₄), so the mixture gradually pales to a new equilibrium.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q191",
    createdAt: "2026-08-21T01:45:00Z"
  }
];
