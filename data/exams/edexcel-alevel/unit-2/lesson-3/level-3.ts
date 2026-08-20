import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u2_l3_lv3_1-2026",
    question: "When solid potassium iodide (KI) reacts with concentrated sulfuric acid (H₂SO₄), a complex mixture of products is formed including purple iodine vapor, steamy acidic fumes, yellow solid sulfur, and a gas with a foul rotten-egg smell. What is the identity of the rotten-egg smelling gas, and what is the change in oxidation number of sulfur in forming it?",
    options: [
      { text: "SO₂; sulfur changes from +6 to +4" },
      { text: "H₂S (Hydrogen sulfide); sulfur changes from +6 in H₂SO₄ to -2 in H₂S (a change of -8)", isCorrect: true },
      { text: "SO₃; sulfur changes from +6 to +3" },
      { text: "S₈; sulfur changes from +6 to 0" }
    ],
    correctAnswer: 1,
    explanation: "* Iodide is a powerful reducing agent capable of reducing sulfuric acid through multiple steps: $\\text{SO}_4^{2-} (+6) \\rightarrow \\text{SO}_2 (+4) \\rightarrow \\text{S} (0) \\rightarrow \\text{H}_2\\text{S} (-2)$.\n* The toxic rotten-egg smelling gas is hydrogen sulfide ($\\text{H}_2\\text{S}$), involving an $8$-electron reduction.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q20",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_2-2026",
    question: "Balance the redox equation in acidic conditions for the oxidation of iron(II) ions by dichromate(VI) ions: $a\\text{Fe}^{2+} + b\\text{Cr}_2\\text{O}_7^{2-} + c\\text{H}^+ \\rightarrow d\\text{Fe}^{3+} + e\\text{Cr}^{3+} + f\\text{H}_2\\text{O}$. What are the stoichiometric coefficients $a, b,$ and $e$?",
    options: [
      { text: "a = 5, b = 1, e = 2" },
      { text: "a = 6, b = 1, e = 2", isCorrect: true },
      { text: "a = 6, b = 2, e = 1" },
      { text: "a = 3, b = 1, e = 2" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation half: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + \\text{e}^-$ (multiply by 6).\n* Reduction half: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{e}^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.\n* Combined: $6\\text{Fe}^{2+} + \\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ \\rightarrow 6\\text{Fe}^{3+} + 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$.\n* Therefore: $a = 6, b = 1, e = 2$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q21",
    createdAt: "2026-07-30T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_3-2026",
    question: "When chlorine gas is reacted with HOT, concentrated aqueous sodium hydroxide solution at 70 °C, disproportionation yields sodium chloride and compound Z. What is the systematic IUPAC name and oxidation state of chlorine in compound Z?",
    options: [
      { text: "Sodium chlorate(I), +1" },
      { text: "Sodium chlorate(III), +3" },
      { text: "Sodium chlorate(V) (NaClO₃), +5", isCorrect: true },
      { text: "Sodium perchlorate(VII), +7" }
    ],
    correctAnswer: 2,
    explanation: "* In hot concentrated $\\text{NaOH}$: $3\\text{Cl}_2 + 6\\text{NaOH} \\rightarrow 5\\text{NaCl} + \\text{NaClO}_3 + 3\\text{H}_2\\text{O}$.\n* Chlorine is oxidized from $0$ to **$+5$** in **sodium chlorate(V)** ($\\text{NaClO}_3$).",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q17",
    createdAt: "2026-07-31T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_4-2026",
    question: "Why does the thermal decomposition of lithium carbonate ($\text{Li}_2\text{CO}_3$) occur readily upon gentle heating, whereas all other Group 1 carbonates (e.g., Na₂CO₃, K₂CO₃) do NOT decompose under standard laboratory Bunsen heating?",
    options: [
      { text: "Lithium has a negative oxidation state" },
      { text: "The very small radius of the Li⁺ cation gives it an anomalously high charge density, enabling it to polarize and weaken the C–O bonds in the neighboring carbonate ion (diagonal relationship with magnesium)", isCorrect: true },
      { text: "Lithium carbonate is a molecular covalent gas" },
      { text: "Other Group 1 carbonates are liquids at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Li}^+$ is exceptionally small, conferring very high polarizing power that distorts $\\text{CO}_3^{2-}$ to decompose into $\\text{Li}_2\\text{O}$ and $\\text{CO}_2$, unlike larger $\\text{Na}^+$ and $\\text{K}^+$ ions.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q21",
    createdAt: "2026-07-31T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_5-2026",
    question: "A $25.0\\text{ cm}^3$ sample of hydrogen peroxide ($\\text{H}_2\\text{O}_2$) is titrated with acidified $0.0200\\text{ mol dm}^{-3}$ potassium manganate(VII), $\\text{KMnO}_4$. The reaction is: $2\\text{MnO}_4^- + 5\\text{H}_2\\text{O}_2 + 6\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 5\\text{O}_2 + 8\\text{H}_2\\text{O}$. Exactly $20.0\\text{ cm}^3$ of $\\text{KMnO}_4$ is required for complete reaction. Calculate the molar concentration of the $\\text{H}_2\\text{O}_2$ solution.",
    options: [
      { text: "0.0160 mol dm⁻³" },
      { text: "0.0400 mol dm⁻³", isCorrect: true },
      { text: "0.0800 mol dm⁻³" },
      { text: "0.1000 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{MnO}_4^- = 0.0200 \\times 0.0200 = 4.00 \\times 10^{-4}\\text{ mol}$.\n* Mole ratio $\\text{H}_2\\text{O}_2 : \\text{MnO}_4^- = 5 : 2$.\n* Moles of $\\text{H}_2\\text{O}_2 = (4.00 \\times 10^{-4}) \\times \\frac{5}{2} = 1.00 \\times 10^{-3}\\text{ mol}$.\n* Concentration of $\\text{H}_2\\text{O}_2 = \\frac{1.00 \\times 10^{-3}\\text{ mol}}{0.0250\\text{ dm}^3} = \\mathbf{0.0400\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q22",
    createdAt: "2026-08-01T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l3_lv3_6-2026",
    question: "Why is hydrochloric acid (HCl) NEVER used to acidify potassium manganate(VII) solutions in redox titrations?",
    options: [
      { text: "HCl neutralizes the manganate(VII) ion completely" },
      { text: "Manganate(VII) is a powerful enough oxidizing agent to oxidize chloride ions (Cl⁻) in HCl into toxic chlorine gas (Cl₂), causing an inaccurate titre value", isCorrect: true },
      { text: "HCl turns the purple solution into an insoluble blue solid" },
      { text: "HCl causes water to freeze at room temperature" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{MnO}_4^-$ has a higher standard electrode potential than the $\\text{Cl}_2/\\text{Cl}^-$ couple and would oxidize $\\text{Cl}^-$ to $\\text{Cl}_2$, consuming extra $\\text{KMnO}_4$ and creating dangerous chlorine gas.\n* Dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) must always be used instead.",
    level: 3,
    topic: "edexcel-unit-2",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q18",
    createdAt: "2026-08-01T10:00:00Z"
  }
];

