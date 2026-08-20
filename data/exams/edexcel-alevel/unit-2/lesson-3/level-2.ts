import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u2_l3_lv2_1-2026",
    question: "When chlorine reacts with cold, dilute aqueous sodium hydroxide, what type of redox reaction takes place, and what are the chlorine-containing products formed?",
    options: [
      { text: "Thermal decomposition forming NaCl and O₂" },
      { text: "Disproportionation reaction forming sodium chloride (NaCl, oxidation state -1) and sodium chlorate(I) (NaClO, oxidation state +1)", isCorrect: true },
      { text: "Complete oxidation forming sodium chlorate(V) (NaClO₃)" },
      { text: "Precipitation forming insoluble Cl₂O" }
    ],
    correctAnswer: 1,
    explanation: "* In cold dilute $\\text{NaOH}$: $\\text{Cl}_2 + 2\\text{NaOH} \\rightarrow \\text{NaCl} + \\text{NaClO} + \\text{H}_2\\text{O}$.\n* Chlorine is simultaneously reduced from $0$ to $-1$ in $\\text{NaCl}$ and oxidized from $0$ to $+1$ in $\\text{NaClO}$ (a **disproportionation** reaction used to manufacture household bleach).",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q18",
    createdAt: "2026-07-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_2-2026",
    question: "When solid sodium bromide (NaBr) reacts with concentrated sulfuric acid (H₂SO₄), brown fumes are evolved alongside a choking gas that turns damp blue litmus paper red. What are the identity of these gases?",
    options: [
      { text: "Br₂ (brown fumes) and SO₂ (choking gas)", isCorrect: true },
      { text: "HBr (brown fumes) and H₂S (choking gas)" },
      { text: "NO₂ and CO₂" },
      { text: "Br₂ and H₂" }
    ],
    correctAnswer: 0,
    explanation: "* $\\text{H}_2\\text{SO}_4$ protonates $\\text{NaBr}$ to form $\\text{HBr}$ (misty fumes), but bromide is a strong enough reducing agent to reduce $\\text{H}_2\\text{SO}_4$ to sulfur dioxide ($\\text{SO}_2$), while bromide is oxidized to bromine ($\\text{Br}_2$, orange-brown fumes): $2\\text{HBr} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Br}_2 + \\text{SO}_2 + 2\\text{H}_2\\text{O}$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q19",
    createdAt: "2026-07-27T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_3-2026",
    question: "Why does the reducing ability of halide ions increase down Group 7: $\\text{F}^- < \\text{Cl}^- < \\text{Br}^- < \\text{I}^-$?",
    options: [
      { text: "Iodide has the highest electronegativity" },
      { text: "Down Group 7, ionic radius increases and electron shielding increases; the outermost electron is further from the nucleus and less tightly held, making it easier to lose (oxidize)", isCorrect: true },
      { text: "Fluoride ions form covalent networks" },
      { text: "Iodide ions have fewer protons" }
    ],
    correctAnswer: 1,
    explanation: "* Larger halide ions hold their outer shell electrons less tightly due to greater distance from the nucleus and greater shielding, lowering the energy needed to donate an electron and act as a reducing agent.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q15",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_4-2026",
    question: "A student performs confirmatory tests on silver halide precipitates using aqueous ammonia (NH₃). Which result correctly identifies silver bromide (AgBr)?",
    options: [
      { text: "Dissolves readily in dilute aqueous NH₃" },
      { text: "Insoluble in dilute aqueous NH₃, but dissolves in concentrated aqueous NH₃", isCorrect: true },
      { text: "Completely insoluble in both dilute and concentrated aqueous NH₃" },
      { text: "Turns black immediately upon adding NH₃" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{AgCl}$ dissolves in dilute $\\text{NH}_3\\text{(aq)}$.\n* $\\text{AgBr}$ is insoluble in dilute $\\text{NH}_3$, but dissolves in **concentrated $\\text{NH}_3\\text{(aq)}$** to form the soluble complex $[\\text{Ag(NH}_3)_2]^+$.\n* $\\text{AgI}$ is insoluble in both dilute and concentrated $\\text{NH}_3$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q19",
    createdAt: "2026-07-28T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_5-2026",
    question: "What products are formed during the thermal decomposition of anhydrous magnesium nitrate, $\\text{Mg(NO}_3)_2\\text{(s)}$?",
    options: [
      { text: "Magnesium nitrite (Mg(NO₂)₂) and oxygen only" },
      { text: "Magnesium oxide (MgO), brown toxic nitrogen dioxide gas (NO₂), and oxygen gas (O₂)", isCorrect: true },
      { text: "Magnesium metal, nitrogen gas, and ozone" },
      { text: "Magnesium nitride and water" }
    ],
    correctAnswer: 1,
    explanation: "* All Group 2 nitrates decompose completely upon heating: $2\\text{Mg(NO}_3)_2\\text{(s)} \\rightarrow 2\\text{MgO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$.\n* $\\text{NO}_2$ is visible as brown fumes.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q20",
    createdAt: "2026-07-29T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv2_6-2026",
    question: "Why does the solubility of Group 2 hydroxides (e.g., Mg(OH)₂ to Ba(OH)₂) increase descending down the group?",
    options: [
      { text: "Lattice enthalpy decreases much more rapidly down the group than hydration enthalpy of the cations", isCorrect: true },
      { text: "Hydration enthalpy increases rapidly down the group" },
      { text: "Barium hydroxide is a covalent network" },
      { text: "Magnesium hydroxide has zero lattice energy" }
    ],
    correctAnswer: 0,
    explanation: "* For hydroxides (small anion $\\text{OH}^-$), lattice enthalpy decreases more steeply than hydration enthalpy as cation radius increases, making $\\Delta H_{\\text{soln}}$ more exothermic / less endothermic and increasing solubility from sparingly soluble $\\text{Mg(OH)}_2$ to highly soluble $\\text{Ba(OH)}_2$.",
    level: 2,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q16",
    createdAt: "2026-07-29T10:00:00Z"
  }
];

