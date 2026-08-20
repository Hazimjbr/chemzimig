import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u6_l1_lv3_1-2026",
    question: "A student performs a redox back titration to determine the percentage purity of a sample of impure iron wire ($M_r[\\text{Fe}] = 55.85\\text{ g mol}^{-1}$). A $1.400\\text{ g}$ sample of wire is dissolved in excess dilute sulfuric acid to form $\\text{Fe}^{2+}\\text{(aq)}$, and the solution is made up to $250.0\\text{ cm}^3$ in a volumetric flask. A $25.0\\text{ cm}^3$ aliquot requires exactly $24.20\\text{ cm}^3$ of $0.0200\\text{ mol dm}^{-3}$ $\\text{KMnO}_4$ for complete oxidation ($\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$). Calculate the percentage purity of iron in the wire.",
    options: [
      { text: "85.2%" },
      { text: "96.5%", isCorrect: true },
      { text: "98.9%" },
      { text: "92.1%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{MnO}_4^-$ in titre $= 0.02420 \\times 0.0200 = 4.84 \\times 10^{-4}\\text{ mol}$.\n* Moles of $\\text{Fe}^{2+}$ in $25.0\\text{ cm}^3 = 5 \\times (4.84 \\times 10^{-4}) = 2.420 \\times 10^{-3}\\text{ mol}$.\n* Total moles of $\\text{Fe}^{2+}$ in $250.0\\text{ cm}^3 = 2.420 \\times 10^{-3} \\times 10 = 0.02420\\text{ mol}$.\n* Mass of pure $\\text{Fe} = 0.02420\\text{ mol} \\times 55.85\\text{ g mol}^{-1} = 1.3516\\text{ g}$.\n* $\\text{Percentage purity} = \\frac{1.3516\\text{ g}}{1.400\\text{ g}} \\times 100\\% = \\mathbf{96.54\\%} \\approx \\mathbf{96.5\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q6",
    createdAt: "2026-12-16T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_2-2026",
    question: "In the synthesis of aspirin (acetylsalicylic acid, $M_r = 180.15\\text{ g mol}^{-1}$) from 2-hydroxybenzoic acid (salicylic acid, $M_r = 138.12\\text{ g mol}^{-1}$) and ethanoic anhydride ($M_r = 102.09\\text{ g mol}^{-1}$), $6.90\\text{ g}$ of salicylic acid reacts with excess anhydride to produce $6.75\\text{ g}$ of pure recrystallized aspirin. Calculate the percentage yield of the preparation.",
    options: [
      { text: "67.5%" },
      { text: "75.0%", isCorrect: true },
      { text: "82.4%" },
      { text: "97.8%" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of salicylic acid $= \\frac{6.90\\text{ g}}{138.12\\text{ g mol}^{-1}} = 0.04996\\text{ mol}$.\n* Theoretical maximum mass of aspirin $= 0.04996\\text{ mol} \\times 180.15\\text{ g mol}^{-1} = 9.000\\text{ g}$.\n* $\\text{Percentage yield} = \\frac{\\text{Actual mass}}{\\text{Theoretical mass}} \\times 100\\% = \\frac{6.75\\text{ g}}{9.00\\text{ g}} \\times 100\\% = \\mathbf{75.0\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q7",
    createdAt: "2026-12-16T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_3-2026",
    question: "During a pH titration of $25.0\\text{ cm}^3$ of an unknown weak organic acid with $0.100\\text{ mol dm}^{-3}$ $\\text{NaOH}$, the equivalence point is reached after adding exactly $30.0\\text{ cm}^3$ of base. At a base volume of $15.0\\text{ cm}^3$ (the half-equivalence point), the measured $pH$ is $4.86$. What is the acid dissociation constant ($K_a$) and initial concentration of the weak acid?",
    options: [
      { text: "K_a = 1.38 × 10⁻⁵ mol dm⁻³; [HA] = 0.120 mol dm⁻³", isCorrect: true },
      { text: "K_a = 1.00 × 10⁻⁴ mol dm⁻³; [HA] = 0.083 mol dm⁻³" },
      { text: "K_a = 4.86 × 10⁻⁵ mol dm⁻³; [HA] = 0.100 mol dm⁻³" },
      { text: "K_a = 1.38 × 10⁻³ mol dm⁻³; [HA] = 0.240 mol dm⁻³" }
    ],
    correctAnswer: 0,
    explanation: "* At half-equivalence: $pH = pK_a = 4.86 \\implies K_a = 10^{-4.86} = \\mathbf{1.38 \\times 10^{-5}\\text{ mol dm}^{-3}}$.\n* At equivalence: $n(\\text{HA}) = n(\\text{NaOH}) = 0.0300 \\times 0.100 = 0.00300\\text{ mol}$.\n* Initial $[\\text{HA}] = \\frac{0.00300\\text{ mol}}{0.0250\\text{ dm}^3} = \\mathbf{0.120\\text{ mol dm}^{-3}}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q5",
    createdAt: "2026-12-17T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_4-2026",
    question: "In an experiment to determine the activation energy ($E_a$) of the reaction between peroxodisulfate and iodide ions ($\text{S}_2\text{O}_8^{2-} + 2\text{I}^- \rightarrow 2\text{SO}_4^{2-} + \text{I}_2$) using an iodine clock with sodium thiosulfate, how is the initial rate of reaction ($r_0$) related to the measured clock reaction time ($t$)?",
    options: [
      { text: "Rate is proportional to time: Rate ∝ t" },
      { text: "Rate is inversely proportional to time: Rate = 1 / t (since a fixed amount of iodine is consumed by a constant volume of thiosulfate before the blue-black starch color appears)", isCorrect: true },
      { text: "Rate = ln t" },
      { text: "Rate = t²" }
    ],
    correctAnswer: 1,
    explanation: "* In a clock reaction, the time $t$ taken for a fixed amount of product ($\Delta [\text{I}_2]$) to be trapped by a fixed aliquot of thiosulfate means $\\text{Rate} = \\frac{\\Delta [\\text{I}_2]}{t} \\propto \\mathbf{\\frac{1}{t}}$. Plotting $\\ln(1/t)$ vs $1/T$ yields gradient $= -\\frac{E_a}{R}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q7",
    createdAt: "2026-12-17T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_5-2026",
    question: "A transition metal complex $\\text{Cr(H}_2\\text{O)}_6\\text{Cl}_3$ can exist as three hydrate isomers. When an aqueous solution containing $0.0100\\text{ mol}$ of one isomer is treated with excess aqueous silver nitrate ($\\text{AgNO}_3$), exactly $2.868\\text{ g}$ of silver chloride ($\\text{AgCl}$, $M_r = 143.32\\text{ g mol}^{-1}$) is precipitated immediately. Which coordination formula represents this isomer?",
    options: [
      { text: "[Cr(H₂O)₆]Cl₃ (precipitates 3 mol AgCl per mol complex)" },
      { text: "[Cr(H₂O)₅Cl]Cl₂·H₂O (precipitates exactly 2 mol AgCl per mol complex)", isCorrect: true },
      { text: "[Cr(H₂O)₄Cl₂]Cl·2H₂O (precipitates 1 mol AgCl per mol complex)" },
      { text: "[Cr(H₂O)₃Cl₃]·3H₂O (precipitates zero AgCl)" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of $\\text{AgCl} = \\frac{2.868\\text{ g}}{143.32\\text{ g mol}^{-1}} = 0.0200\\text{ mol}$.\n* Molar ratio: $\\frac{n(\\text{AgCl})}{n(\\text{Complex})} = \\frac{0.0200}{0.0100} = \\mathbf{2.00}$.\n* This proves there are exactly **2 free chloride counter-ions** outside the coordination sphere: $\\mathbf{[\\text{Cr(H}_2\\text{O)}_5\\text{Cl}]\\text{Cl}_2\\cdot\\text{H}_2\\text{O}}$ (pentaaquachlorochromium(III) chloride monohydrate).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q8",
    createdAt: "2026-12-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_6-2026",
    question: "When carrying out an organic liquid purification by fractional distillation, why is the thermometer bulb placed EXACTLY adjacent to the side-arm entrance of the condenser rather than immersed in the boiling liquid?",
    options: [
      { text: "To prevent the thermometer from cracking" },
      { text: "To accurately measure the true temperature of the exiting vapor condensing into the side-arm, ensuring that only the desired pure fraction is collected at its true boiling point", isCorrect: true },
      { text: "To increase the rate of boiling" },
      { text: "To measure atmospheric pressure" }
    ],
    correctAnswer: 1,
    explanation: "* The vapor passing into the side-arm represents the distillate being collected; measuring vapor temperature at this exact junction confirms the identity and purity of the collecting fraction.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q6",
    createdAt: "2026-12-18T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_7-2026",
    question: "A student determines the percentage of copper in a brass alloy sample ($M_r[\\text{Cu}] = 63.55\\text{ g mol}^{-1}$). A $2.540\\text{ g}$ sample of brass is dissolved in concentrated nitric acid, neutralized, and made up to $250.0\\text{ cm}^3$. Excess potassium iodide is added to a $25.0\\text{ cm}^3$ portion, liberating iodine: $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow 2\\text{CuI(s)} + \\text{I}_2$. The liberated iodine requires $20.00\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium thiosulfate ($2\\text{S}_2\\text{O}_3^{2-} + \\text{I}_2 \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2\\text{I}^-$) to reach the starch endpoint. Calculate the mass percentage of copper in the brass alloy.",
    options: [
      { text: "40.0%" },
      { text: "50.0%" },
      { text: "63.6%" },
      { text: "50.04%", isCorrect: true }
    ],
    correctAnswer: 3,
    explanation: "* Moles of $\\text{S}_2\\text{O}_3^{2-} = 0.02000 \\times 0.100 = 2.00 \\times 10^{-3}\\text{ mol}$.\n* Stoichiometry: $2\\text{mol Cu}^{2+} \\equiv 1\\text{mol I}_2 \\equiv 2\\text{mol S}_2\\text{O}_3^{2-} \\implies n(\\text{Cu}^{2+}) = n(\\text{S}_2\\text{O}_3^{2-}) = 2.00 \\times 10^{-3}\\text{ mol}$ in $25.0\\text{ cm}^3$.\n* Total moles in $250\\text{ cm}^3 = 2.00 \\times 10^{-3} \\times 10 = 0.0200\\text{ mol}$.\n* Mass of $\\text{Cu} = 0.0200\\text{ mol} \\times 63.55\\text{ g mol}^{-1} = 1.271\\text{ g}$.\n* $\\text{Percentage} = \\frac{1.271\\text{ g}}{2.540\\text{ g}} \\times 100\\% = \\mathbf{50.04\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q13",
    createdAt: "2026-12-26T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_8-2026",
    question: "In an experiment measuring the rate of iodide oxidation by hydrogen peroxide ($\text{H}_2\text{O}_2 + 2\text{I}^- + 2\text{H}^+ \rightarrow \text{I}_2 + 2\text{H}_2\text{O}$), when the concentration of $\text{H}_2\text{O}_2$ is doubled while holding all other concentrations constant, the reaction time ($t$) decreases from $80.0\\text{ s}$ to $40.0\\text{ s}$. When the concentration of $\text{I}^-$ is doubled at constant $[\text{H}_2\text{O}_2]$, the time decreases from $80.0\\text{ s}$ to $20.0\\text{ s}$. What is the overall order of reaction?",
    options: [
      { text: "First order overall" },
      { text: "Second order overall" },
      { text: "Third order overall (Rate = k[H₂O₂]¹[I⁻]²)", isCorrect: true },
      { text: "Zero order overall" }
    ],
    correctAnswer: 2,
    explanation: "* Rate $\\propto \\frac{1}{t}$.\n* Doubling $[\text{H}_2\text{O}_2]$ halves $t \\implies$ Rate doubles ($2^1$) $\\implies$ 1st order in $[\text{H}_2\text{O}_2]$.\n* Doubling $[\text{I}^-]$ reduces $t$ by factor of 4 ($80 \\rightarrow 20\\text{ s}$) $\\implies$ Rate quadruples ($2^2 = 4$) $\\implies$ 2nd order in $[\text{I}^-]$.\n* $\\text{Overall order} = 1 + 2 = \\mathbf{3}$ (Rate $= k[\\text{H}_2\\text{O}_2][\\text{I}^-]^2$).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q14",
    createdAt: "2026-12-26T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_9-2026",
    question: "A crystalline hydrated salt of nickel chloride $\\text{NiCl}_2\\cdot x\\text{H}_2\\text{O}$ is analyzed. A $2.379\\text{ g}$ sample of the green crystals is dissolved in water and treated with excess dimethylglyoxime in ammoniacal solution, producing a red precipitate of $[\\text{Ni(dmg)}_2]$ of dry mass $2.889\\text{ g}$ ($M_r[\\text{Ni(dmg)}_2] = 288.91\\text{ g mol}^{-1}$; $M_r[\\text{NiCl}_2] = 129.60\\text{ g mol}^{-1}$; $M_r[\\text{H}_2\\text{O}] = 18.02\\text{ g mol}^{-1}$). Determine the integer value of $x$ in the hydrated salt formula.",
    options: [
      { text: "x = 2" },
      { text: "x = 4" },
      { text: "x = 6 (NiCl₂·6H₂O)", isCorrect: true },
      { text: "x = 7" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of Ni complex $= \\frac{2.889\\text{ g}}{288.91\\text{ g mol}^{-1}} = 0.0100\\text{ mol} = n(\\text{NiCl}_2\\cdot x\\text{H}_2\\text{O})$.\n* Molar mass of hydrate $= \\frac{2.379\\text{ g}}{0.0100\\text{ mol}} = 237.9\\text{ g mol}^{-1}$.\n* Mass of water in 1 mole $= 237.9 - 129.60 = 108.3\\text{ g}$.\n* $x = \\frac{108.3}{18.02} = \\mathbf{6.01} \\approx \\mathbf{6}$ (nickel(II) chloride hexahydrate).",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q11",
    createdAt: "2026-12-27T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_10-2026",
    question: "A student performs a thermometric titration of $50.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}$ $\\text{HCl}$ with $2.00\\text{ mol dm}^{-3}$ $\\text{NaOH}$ in a polystyrene cup, plotting temperature versus volume of $\\text{NaOH}$ added. Why are the pre-equivalence and post-equivalence cooling lines extrapolated to find the maximum theoretical temperature rise ($\Delta T_{\\text{max}}$)?",
    options: [
      { text: "To eliminate errors caused by burette parallax" },
      { text: "To correct for continuous heat loss from the calorimeter to the surroundings that occurs while adding the titrant and measuring temperatures", isCorrect: true },
      { text: "To account for chemical evaporation of water" },
      { text: "Because temperature changes quadratically" }
    ],
    correctAnswer: 1,
    explanation: "* Linear extrapolation of the heating and cooling curves back to the exact neutralization time compensates for heat lost to surroundings, yielding an accurate maximum temperature rise $\\Delta T_{\\text{max}}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q14",
    createdAt: "2026-12-27T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_11-2026",
    question: "In the quantitative analysis of an unknown transition metal solution, addition of aqueous sodium hydroxide produces a pale green precipitate $\\text{A}$, which dissolves in excess $\\text{NaOH}$ to give a deep green solution $\\text{B}$. When hydrogen peroxide ($\\text{H}_2\\text{O}_2$) is added to solution $\\text{B}$ and heated, a bright yellow solution $\\text{C}$ is formed. Acidification of $\\text{C}$ with dilute sulfuric acid turns the solution orange ($\\text{D}$). Identify species $\\text{B}$, $\\text{C}$, and $\\text{D}$.",
    options: [
      { text: "B = [Fe(OH)₆]⁴⁻, C = FeO₄²⁻, D = Fe³⁺" },
      { text: "B = [Cr(OH)₆]³⁻ (or [Cr(OH)₄]⁻), C = CrO₄²⁻ (chromate(VI), yellow), D = Cr₂O₇²⁻ (dichromate(VI), orange)", isCorrect: true },
      { text: "B = [Cu(OH)₄]²⁻, C = CuO, D = Cu²⁺" },
      { text: "B = [Ni(OH)₄]²⁻, C = NiO₂, D = Ni²⁺" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cr}^{3+}$ is amphoteric: $\\text{Cr(OH)}_3\\text{(s)} + 3\\text{OH}^- \\rightarrow [\\text{Cr(OH)}_6]^{3-}\\text{(aq (dark green))}$.\n* Oxidation with alkaline $\\text{H}_2\\text{O}_2$: $2[\\text{Cr(OH)}_6]^{3-} + 3\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{CrO}_4^{2-}\\text{(aq (yellow))} + 2\\text{OH}^- + 8\\text{H}_2\\text{O}$.\n* Acidification shifts equilibrium to orange dichromate: $2\\text{CrO}_4^{2-} + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-}\\text{(aq (orange))} + \\text{H}_2\\text{O}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q15",
    createdAt: "2026-12-28T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv3_12-2026",
    question: "When determining the percentage uncertainty in a titration where a $50.00\\text{ cm}^3$ burette with an uncertainty of $\\pm 0.05\\text{ cm}^3$ per reading gives an initial reading of $1.10\\text{ cm}^3$ and a final reading of $24.70\\text{ cm}^3$, what is the total percentage apparatus uncertainty for the titre volume?",
    options: [
      { text: "0.21%" },
      { text: "0.42%", isCorrect: true },
      { text: "0.85%" },
      { text: "1.00%" }
    ],
    correctAnswer: 1,
    explanation: "* Titre volume $= 24.70 - 1.10 = 23.60\\text{ cm}^3$.\n* Two readings taken (initial and final), so total absolute uncertainty $= 2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* $\\text{Percentage uncertainty} = \\frac{0.10\\text{ cm}^3}{23.60\\text{ cm}^3} \\times 100\\% = \\mathbf{0.4237\\%} \\approx \\mathbf{0.42\\%}$.",
    level: 3,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q12",
    createdAt: "2026-12-28T10:00:00Z"
  }
];


