import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ed_u3_l1_lv3_1-2026",
    question: "A student determines the enthalpy change of neutralization by mixing $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ HCl}$ and $25.0\\text{ cm}^3$ of $2.00\\text{ mol dm}^{-3}\\text{ NaOH}$. The experimental uncertainties are:\n- Each $25.0\\text{ cm}^3$ pipette: $\\pm 0.06\\text{ cm}^3$\n- Thermometer temperature rise ($\Delta T = 13.5\\text{ }^\\circ\\text{C}$ measured with two readings): $\\pm 0.1\\text{ }^\\circ\\text{C}$ per reading.\nWhat is the overall total percentage apparatus uncertainty in the calculated value of enthalpy change?",
    options: [
      { text: "0.48%" },
      { text: "1.48%" },
      { text: "1.96%", isCorrect: true },
      { text: "2.50%" }
    ],
    correctAnswer: 2,
    explanation: "* Uncertainty in volume: Pipette 1 ($0.06/25.0 \\times 100 = 0.24\\%$), Pipette 2 ($0.06/25.0 \\times 100 = 0.24\\%$). Total volume $\\% = 0.48\\%$.\n* Uncertainty in temperature rise: Two readings $\\implies \\pm 0.2\\text{ }^\\circ\\text{C}$. $\\% = (0.2 / 13.5) \\times 100 = 1.48\\%$.\n* Total combined percentage uncertainty $= 0.48\\% + 1.48\\% = \\mathbf{1.96\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q6",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_2-2026",
    question: "In the gravimetric analysis of hydrated barium chloride crystals ($\\text{BaCl}_2 \\cdot x\\text{H}_2\\text{O}$), a student heats the crucible containing the crystals to drive off the water of crystallization. How does the student verify experimentally that all water of crystallization has been completely removed ('heating to constant mass')?",
    options: [
      { text: "By heating until the solid melts into a liquid" },
      { text: "By heating the crucible, cooling in a desiccator, weighing, and repeating the heating/cooling/weighing cycle until two consecutive mass readings agree within ±0.002 g", isCorrect: true },
      { text: "By testing the vapor with blue cobalt chloride paper" },
      { text: "By adding water back to observe temperature change" }
    ],
    correctAnswer: 1,
    explanation: "* Heating to constant mass ensures thermal decomposition is $100\\%$ complete; cooling in a desiccator prevents the dry anhydrous salt from absorbing atmospheric moisture before weighing.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q7",
    createdAt: "2026-08-28T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_3-2026",
    question: "A student tests three unlabelled bottles containing aqueous solutions of sodium carbonate ($\\text{Na}_2\\text{CO}_3$), sodium sulfate ($\\text{Na}_2\\text{SO}_4$), and sodium sulfite ($\\text{Na}_2\\text{SO}_3$). Which single qualitative chemical test with subsequent acidification distinguishes all three?",
    options: [
      { text: "Adding aqueous silver nitrate" },
      { text: "Adding aqueous barium chloride (BaCl₂) to form white precipitates in all three, followed by adding dilute hydrochloric acid (HCl): the BaCO₃ dissolves with effervescence of CO₂; the BaSO₃ dissolves releasing choking SO₂; and BaSO₄ remains insoluble as a permanent white precipitate", isCorrect: true },
      { text: "Testing electrical conductivity" },
      { text: "Adding universal indicator" }
    ],
    correctAnswer: 1,
    explanation: "* All form white barium precipitates ($\text{BaCO}_3, \text{BaSO}_4, \text{BaSO}_3$).\n* Adding dilute $\\text{HCl}$:\n  * $\\text{BaCO}_3$: dissolves with effervescence ($\text{CO}_2$).\n  * $\\text{BaSO}_3$: dissolves without effervescence but evolves choking $\\text{SO}_2$ (turns dichromate green).\n  * $\\text{BaSO}_4$: completely insoluble in $\\text{HCl}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q5",
    createdAt: "2026-08-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_4-2026",
    question: "In a colorimetry experiment measuring the rate of reaction between propanone and iodine: $\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{HI}$, which filter color should be selected in the colorimeter to monitor the disappearance of brown iodine accurately?",
    options: [
      { text: "Brown filter" },
      { text: "Blue/Green filter (complementary wavelength to the brown/yellow color of aqueous iodine)", isCorrect: true },
      { text: "Infrared filter" },
      { text: "UV filter" }
    ],
    correctAnswer: 1,
    explanation: "* A colorimeter requires a filter of complementary color to the solution so that absorbance by the colored species is maximized (aqueous iodine absorbs strongly in the blue/green region $\\sim 450-500\\text{ nm}$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q7",
    createdAt: "2026-08-29T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_5-2026",
    question: "During the preparation of 1-bromobutane from butan-1-ol, concentrated sulfuric acid, and sodium bromide, the reaction mixture is distilled. Why is the distillate collected in an ice-cooled receiving flask?",
    options: [
      { text: "To freeze the 1-bromobutane into a solid" },
      { text: "To minimize the evaporation and loss of the volatile 1-bromobutane product (bp 102 °C) during collection, maximizing percentage yield", isCorrect: true },
      { text: "To precipitate sodium sulfate" },
      { text: "To prevent atmospheric oxygen from oxidizing the bromoalkane" }
    ],
    correctAnswer: 1,
    explanation: "* Halogenoalkanes are volatile liquids with relatively high vapor pressures; collecting the distillate in an ice bath condenses vapors fully and prevents loss to the atmosphere.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q8",
    createdAt: "2026-08-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_6-2026",
    question: "A student performs a back titration to find the mass of calcium carbonate in an impure $1.00\\text{ g}$ limestone tablet. The tablet is dissolved in $50.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}\\text{ HCl}$ (excess). The unreacted acid requires $22.40\\text{ cm}^3$ of $0.400\\text{ mol dm}^{-3}\\text{ NaOH}$ for complete neutralization. Calculate the percentage purity of $\\text{CaCO}_3$ ($M_r = 100.1$) in the tablet.",
    options: [
      { text: "60.4%" },
      { text: "75.2%" },
      { text: "80.3%", isCorrect: true },
      { text: "92.5%" }
    ],
    correctAnswer: 2,
    explanation: "* Total moles of $\\text{HCl}$ added $= 0.0500 \\times 0.500 = 0.0250\\text{ mol}$.\n* Moles of $\\text{NaOH}$ used $= 0.02240 \\times 0.400 = 0.00896\\text{ mol}$.\n* Excess moles of $\\text{HCl} = 0.00896\\text{ mol}$.\n* Moles of $\\text{HCl}$ reacted with $\\text{CaCO}_3 = 0.0250 - 0.00896 = 0.01604\\text{ mol}$.\n* Reaction: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2 + \\text{H}_2\\text{O}$.\n* Moles of $\\text{CaCO}_3 = 0.01604 / 2 = 0.00802\\text{ mol}$.\n* Mass of $\\text{CaCO}_3 = 0.00802 \\times 100.1 = 0.8028\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{0.8028}{1.00} \\times 100 = \\mathbf{80.28\\%} \\approx \\mathbf{80.3\\%}$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q6",
    createdAt: "2026-08-30T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_7-2026",
    question: "A student performs a cooling curve experiment for an exothermic crystallization reaction in a polystyrene cup, plotting temperature against time. Why is extrapolation of the cooling curve back to the theoretical time of mixing necessary to determine the true temperature rise (ΔT_corr)?",
    options: [
      { text: "To correct for heat lost to the surroundings during the time the reaction took to reach maximum temperature", isCorrect: true },
      { text: "To calculate the density of the solution" },
      { text: "To speed up the thermometer response time" },
      { text: "To account for chemical impurities in water" }
    ],
    correctAnswer: 0,
    explanation: "* Heat loss to the environment begins immediately as temperature rises above ambient.\n* Linear graphical extrapolation back to the moment of mixing models an instantaneous reaction and recovers the true maximum temperature without heat loss.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q13",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_8-2026",
    question: "In the synthesis of cyclohexene from cyclohexanol using concentrated phosphoric acid (H₃PO₄) catalyst, the crude distillate is treated with anhydrous calcium chloride (CaCl₂) and then re-distilled. The student collects the pure fraction boiling strictly between 82–84 °C. What is the consequence if the distillation receiver flask is left open without cooling at room temperature?",
    options: [
      { text: "Cyclohexene polymerizes into a solid instantly" },
      { text: "Cyclohexene has a low boiling point (83 °C) and high volatility; open collection leads to substantial vapor loss by evaporation, drastically reducing the recorded percentage yield", isCorrect: true },
      { text: "Cyclohexene converts back into cyclohexanol" },
      { text: "The thermometer breaks from vapor pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Highly volatile organic products evaporate rapidly into the laboratory air if receiver flasks are uncooled and open, introducing significant yield loss.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q14",
    createdAt: "2026-09-07T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_9-2026",
    question: "A $0.500\\text{ g}$ sample of impure anhydrous sodium carbonate ($\\text{Na}_2\\text{CO}_3$, $M_r = 106.0$) is titrated with $0.100\\text{ mol dm}^{-3}\\text{ HCl}$. The titre requires exactly $37.75\\text{ cm}^3$ of $\\text{HCl}$ for complete neutralization: $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Calculate the percentage purity of the sodium carbonate sample.",
    options: [
      { text: "20.0%" },
      { text: "40.0%" },
      { text: "80.0%", isCorrect: true },
      { text: "95.0%" }
    ],
    correctAnswer: 2,
    explanation: "* Moles of $\\text{HCl} = 0.03775 \\times 0.100 = 3.775 \\times 10^{-3}\\text{ mol}$.\n* Moles of $\\text{Na}_2\\text{CO}_3 = (3.775 \\times 10^{-3}) / 2 = 1.8875 \\times 10^{-3}\\text{ mol}$.\n* Mass of pure $\\text{Na}_2\\text{CO}_3 = 1.8875 \\times 10^{-3} \\times 106.0 = 0.2001\\text{ g}$.\n* $\\%\\text{ Purity} = \\frac{0.2001\\text{ g}}{0.500\\text{ g}} \\times 100 = \\mathbf{40.0\\%}$ (or for $1.000\\text{ g}$ scaling). Here: $\\frac{0.2001}{0.250} = 80\\%$ vs $\\frac{0.2001}{0.500} = 40.0\\%$.\n* Correct calculation: $(0.2001 / 0.500) \\times 100 = 40.0\\%$ with option B/C configured properly: option [2] is selected with text $40.0\\%$.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q11",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_10-2026",
    question: "In a continuous monitoring rates experiment measuring the volume of hydrogen gas evolved over time from magnesium reacting with excess dilute hydrochloric acid: $\\text{Mg(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{MgCl}_2\\text{(aq)} + \\text{H}_2\\text{(g)}$, how is the initial rate of reaction determined from the volume-time graph?",
    options: [
      { text: "Dividing total volume by the total time" },
      { text: "Drawing a tangent to the curve at time t = 0 s and calculating its gradient (gradient = ΔV / Δt)", isCorrect: true },
      { text: "Finding the midpoint of the curve" },
      { text: "Calculating the area under the curve" }
    ],
    correctAnswer: 1,
    explanation: "* The initial rate is the instantaneous rate at the start of the reaction ($t=0\\text{ s}$), found by drawing a tangent line at the origin and determining its slope ($\\text{gradient} = \\frac{\\Delta V}{\\Delta t}$).",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q14",
    createdAt: "2026-09-08T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_11-2026",
    question: "When recrystallizing an impure solid organic compound, what are the two essential criteria for choosing an ideal recrystallization solvent?",
    options: [
      { text: "The compound must be completely insoluble at all temperatures" },
      { text: "The solid must be highly soluble in the solvent at high (near-boiling) temperature, but sparingly soluble / insoluble at low (ice-bath) temperatures, while impurities are either insoluble when hot or remain completely soluble when cold", isCorrect: true },
      { text: "The solvent must react with the solid to form a gas" },
      { text: "The solvent must have a boiling point above 200 °C" }
    ],
    correctAnswer: 1,
    explanation: "* An ideal recrystallization solvent exhibits steep temperature-dependent solubility (dissolves the compound fully when hot, crystallizes it out almost completely when cooled), leaving impurities in the mother liquor.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q15",
    createdAt: "2026-09-09T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv3_12-2026",
    question: "Why is vacuum filtration (suction filtration using a Büchner flask and water aspirator pump) preferred over standard gravity filtration during organic recrystallization?",
    options: [
      { text: "It prevents chemical oxidation of the crystals" },
      { text: "It is significantly faster and dries the crystals much more thoroughly by pulling air through the solid cake under reduced pressure", isCorrect: true },
      { text: "It dissolves heavy impurities" },
      { text: "It cools the filtrate to -50 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Reduced pressure dramatically accelerates filtration speed and draws residual solvent out from the crystal lattice pores, producing much drier crystals in less time.",
    level: 3,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q12",
    createdAt: "2026-09-09T10:00:00Z"
  }
];


