import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u3_l1_lv2_1-2026",
    question: "A student performs a titration using a burette with an uncertainty of $\\pm 0.05\\text{ cm}^3$ per individual reading. If the initial burette reading was $1.50\\text{ cm}^3$ and the final reading was $26.50\\text{ cm}^3$ (titre $= 25.00\\text{ cm}^3$), what is the percentage apparatus uncertainty in this titre measurement?",
    options: [
      { text: "0.20%" },
      { text: "0.40%", isCorrect: true },
      { text: "0.80%" },
      { text: "2.00%" }
    ],
    correctAnswer: 1,
    explanation: "* Delivering a titre requires TWO readings (initial and final), so the total absolute uncertainty is $2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* $\\text{Percentage Uncertainty} = \\frac{\\text{Total Uncertainty}}{\\text{Measured Volume}} \\times 100 = \\frac{0.10}{25.00} \\times 100 = \\mathbf{0.40\\%}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q4",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_2-2026",
    question: "Why is a volumetric pipette or burette rinsed with the specific solution it will contain before use, whereas a conical flask is rinsed ONLY with deionized water?",
    options: [
      { text: "The conical flask is made of different glass" },
      { text: "Rinsing the pipette/burette with water would dilute the solution and alter its concentration; residual water in the conical flask does not change the total moles of analyte delivered by the pipette", isCorrect: true },
      { text: "Water reacts chemically with the conical flask" },
      { text: "Indicators only work in wet glass" }
    ],
    correctAnswer: 1,
    explanation: "* Water droplets inside a pipette or burette dilute the standard solution, altering its molarity.\n* In contrast, residual deionized water in the conical flask does not change the exact number of moles of acid/alkali transferred into it from the pipette.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q5",
    createdAt: "2026-08-25T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_3-2026",
    question: "When preparing a standard solution of a solid acid in a $250.0\\text{ cm}^3$ volumetric flask, which procedure ensures maximum quantitative transfer and accuracy?",
    options: [
      { text: "Weigh by difference, dissolve solid in beaker with minimal deionized water, transfer using a funnel, rinse beaker, rod, and funnel with washings into the flask, make up to mark, invert flask repeatedly", isCorrect: true },
      { text: "Pour dry solid directly into the volumetric flask through a dry funnel and fill to the neck with hot water" },
      { text: "Fill the flask with water first, then add the solid" },
      { text: "Boil the volumetric flask to speed up dissolution" }
    ],
    correctAnswer: 0,
    explanation: "* Quantitative transfer requires dissolving in a beaker first and including all rinsings (washings) of beaker, funnel, and stirring rod, making up dropwise to the graduation mark at eye level, and inverting $10-20$ times to ensure thorough mixing.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q3",
    createdAt: "2026-08-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_4-2026",
    question: "In the purification of a crude liquid halogenoalkane by liquid-liquid extraction, aqueous sodium hydrogencarbonate ($\\text{NaHCO}_3\\text{(aq)}$) is shaken with the organic layer. What is the chemical purpose of this wash?",
    options: [
      { text: "To dry the organic product" },
      { text: "To neutralize and remove residual acidic impurities (such as unreacted HBr or H₂SO₄), releasing CO₂ gas", isCorrect: true },
      { text: "To precipitate halogenoalkane crystals" },
      { text: "To oxidize unreacted alcohol" }
    ],
    correctAnswer: 1,
    explanation: "* Sodium hydrogencarbonate is a mild base that neutralizes acid contaminants: $\\text{H}^+ + \\text{HCO}_3^- \\rightarrow \\text{H}_2\\text{O} + \\text{CO}_2\\text{(g)}$, removing acids into the aqueous layer.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q5",
    createdAt: "2026-08-26T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_5-2026",
    question: "Why is an electrically heated mantle or water bath preferred over a direct Bunsen burner naked flame when heating organic reaction mixtures (e.g., in alcohol oxidation or esterification)?",
    options: [
      { text: "Bunsen flames are not hot enough" },
      { text: "Most organic compounds and solvents (such as ethanol, ethers, and alkanes) are highly volatile and flammable, presenting a severe fire risk with naked flames", isCorrect: true },
      { text: "Heating mantles neutralize chemical vapors" },
      { text: "Glassware cracks automatically in Bunsen flames" }
    ],
    correctAnswer: 1,
    explanation: "* Organic vapors are flammable and can ignite upon contact with an open flame; electric heating mantles or hot water/oil baths eliminate the ignition source.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q6",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_6-2026",
    question: "When setting up a distillation apparatus, where should the bulb of the thermometer be positioned accurately?",
    options: [
      { text: "Immersed completely in the boiling liquid mixture at the bottom of the flask" },
      { text: "Directly opposite the side-arm opening leading into the condenser (to measure the true temperature of the vapor entering the condenser)", isCorrect: true },
      { text: "At the very top of the still-head open to the air" },
      { text: "Inside the receiving beaker" }
    ],
    correctAnswer: 1,
    explanation: "* The thermometer bulb must be positioned level with the entry to the condenser side-arm so that it is bathed by the exiting vapor to record the accurate boiling point of the distillate fraction.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q4",
    createdAt: "2026-08-27T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_7-2026",
    question: "During a simple distillation, why is it essential to ensure that the distillation apparatus is NOT completely sealed or airtight at the receiver adapter end?",
    options: [
      { text: "To allow air into the distillate to cool it down" },
      { text: "A completely sealed system being heated will rapidly build up immense gas and vapor pressure, leading to an explosive shattering of the glassware", isCorrect: true },
      { text: "To let unreacted alcohol escape" },
      { text: "To prevent the thermometer from falling out" }
    ],
    correctAnswer: 1,
    explanation: "* Heating a completely closed/sealed glassware system results in dangerous pressure accumulation, which can cause catastrophic explosive failure of the glass joints.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q11",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_8-2026",
    question: "A student performs a thermochemical calorimetry experiment burning ethanol to heat $100.0\\text{ g}$ of water in a copper beaker. The experimental value of $\\Delta H_{\\text{comb}}$ obtained is significantly LESS exothermic than the accepted Data Booklet value. What is the major systematic error causing this discrepancy?",
    options: [
      { text: "The copper beaker had too high a heat capacity" },
      { text: "Significant heat losses to the surrounding air and incomplete combustion of the ethanol fuel (depositing black soot on the bottom of the beaker)", isCorrect: true },
      { text: "The ethanol absorbed too much moisture from the atmosphere" },
      { text: "The thermometer reading was too high" }
    ],
    correctAnswer: 1,
    explanation: "* Primary sources of error in spirit burner calorimetry include radiant heat loss to surroundings, draughts, heating the copper can, and incomplete combustion (soot formation) yielding less energy.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q12",
    createdAt: "2026-09-04T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_9-2026",
    question: "When measuring the initial rate of the 'disappearing cross' reaction between sodium thiosulfate and hydrochloric acid ($\text{Na}_2\text{S}_2\text{O}_3 + 2\text{HCl} \rightarrow 2\text{NaCl} + \text{SO}_2 + \text{S(s)} + \text{H}_2\text{O}$), how is the rate of reaction approximated?",
    options: [
      { text: "Rate ∝ Total time taken (t)" },
      { text: "Rate ∝ 1 / time taken (1/t) for the yellow sulfur precipitate to obscure the black cross", isCorrect: true },
      { text: "Rate ∝ Mass of beaker" },
      { text: "Rate ∝ Logarithm of volume" }
    ],
    correctAnswer: 1,
    explanation: "* Because a fixed amount of solid colloidal sulfur is required to obscure the black cross, the reaction rate is inversely proportional to time: $\\text{Rate} \\approx \\frac{1}{t}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q9",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_10-2026",
    question: "In the preparation of an organic solid by crystallization, why must the product crystals collected in a Büchner funnel under reduced pressure be washed with a small volume of ICE-COLD solvent rather than warm solvent?",
    options: [
      { text: "Ice-cold solvent freezes the filter paper" },
      { text: "Ice-cold solvent washes away soluble surface impurities while minimizing the re-dissolving and loss of the pure organic product crystals", isCorrect: true },
      { text: "Warm solvent would react with the porcelain funnel" },
      { text: "Ice-cold solvent turns the crystals into a liquid" }
    ],
    correctAnswer: 1,
    explanation: "* Washing with warm solvent would dissolve significant quantities of the recrystallized product, severely reducing percentage yield; ice-cold solvent removes mother liquor impurities with minimal dissolution.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q12",
    createdAt: "2026-09-05T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_11-2026",
    question: "How does a student distinguish experimentally between sodium chloride (NaCl(aq)) and sodium nitrate (NaNO₃(aq)) using a single reagent test?",
    options: [
      { text: "Add phenolphthalein indicator" },
      { text: "Add acidified silver nitrate solution (AgNO₃(aq)): NaCl produces a dense white precipitate of AgCl that dissolves in dilute ammonia, whereas NaNO₃ gives NO precipitate", isCorrect: true },
      { text: "Perform a flame test" },
      { text: "Add dilute hydrochloric acid" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{Cl}^-$ forms an insoluble white precipitate of $\\text{AgCl}$ with $\\text{Ag}^+$, whereas all nitrate ($\text{NO}_3^-$) salts are fully water-soluble, giving no precipitate.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q13",
    createdAt: "2026-09-06T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_12-2026",
    question: "During heating under reflux of an organic reaction mixture, why must a stopper NEVER be placed in the top of the upright Liebig condenser?",
    options: [
      { text: "To allow the cooling water to escape" },
      { text: "To prevent hazardous pressure build-up inside the closed apparatus as vapors heat and expand, which could blow the apparatus apart", isCorrect: true },
      { text: "To allow air to oxidize the products" },
      { text: "To enable quick addition of extra solvent" }
    ],
    correctAnswer: 1,
    explanation: "* Reflux condensers must remain open to the atmosphere at the top; vapors condense and drip back while allowing thermal expansion without dangerous pressure buildup.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q10",
    createdAt: "2026-09-06T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_13-2026",
    question: "A volumetric pipette has an uncertainty of $\\pm 0.06\\text{ cm}^3$. What is the percentage uncertainty when measuring exactly $25.0\\text{ cm}^3$ of solution using this pipette?",
    options: [
      { text: "0.24%", isCorrect: true },
      { text: "0.12%" },
      { text: "0.48%" },
      { text: "0.06%" }
    ],
    correctAnswer: 0,
    explanation: "* Percentage uncertainty $= \\frac{\\text{uncertainty}}{\\text{measured value}} \\times 100$.\n* Percentage uncertainty $= \\frac{0.06}{25.0} \\times 100 = \\mathbf{0.24\\%}$.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q14",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_14-2026",
    question: "When preparing $250\\text{ cm}^3$ of standard solution, why must the solute be dissolved in a beaker of distilled water first, rather than added directly to the volumetric flask?",
    options: [
      { text: "To prevent the flask from breaking due to heat of solution" },
      { text: "To ensure complete dissolution of the solid, as mixing in a narrow-necked volumetric flask is difficult and undissolved solid will lead to an inaccurate concentration", isCorrect: true },
      { text: "To filter out insoluble impurities" },
      { text: "To make sure the solution is alkaline" }
    ],
    correctAnswer: 1,
    explanation: "* Solid particles are hard to dissolve directly in the volumetric flask due to the narrow neck restricting efficient stirring.\n* Dissolving in a beaker first ensures a homogeneous solution before transferring.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q13",
    createdAt: "2026-09-14T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_15-2026",
    question: "Which of the following methods is most suitable for collecting a sample of hydrogen gas ($H_2$) in the laboratory?",
    options: [
      { text: "Downward delivery (upward displacement of air) because hydrogen is denser than air" },
      { text: "Upward delivery (downward displacement of air) or over water, because hydrogen is significantly less dense than air and virtually insoluble in water", isCorrect: true },
      { text: "In an open beaker left on the bench" },
      { text: "By condensing it into a cold trap at 0 °C" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen gas has a very low density ($M_r = 2$) and escapes upwards.\n* Therefore, it is collected by upward delivery (where the tube points up into an inverted test tube) or over water since it doesn't dissolve in it.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q11",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_16-2026",
    question: "How do Group 1 hydrogencarbonates (e.g., $NaHCO_3$) differ from Group 1 carbonates (excluding $Li_2CO_3$) upon heating?",
    options: [
      { text: "Carbonates decompose to form oxides, while hydrogencarbonates do not decompose" },
      { text: "Hydrogencarbonates readily decompose to release carbon dioxide and water vapor, whereas carbonates are thermally stable and do not decompose under Bunsen burner temperatures", isCorrect: true },
      { text: "Both decompose to release oxygen gas" },
      { text: "Hydrogencarbonates turn into solid sodium metal" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogencarbonates undergo thermal decomposition at relatively low temperatures:\n* $2\\text{NaHCO}_3\\text{(s)} \\rightarrow \\text{Na}_2\\text{CO}_3\\text{(s)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(g)}$.\n* Group 1 carbonates (like $\\text{Na}_2\\text{CO}_3$) are very stable and require extremely high temperatures to decompose.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q15",
    createdAt: "2026-09-15T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_17-2026",
    question: "When separating a mixture of trichloromethane (density $= 1.49\\text{ g cm}^{-3}$) and water (density $= 1.00\\text{ g cm}^{-3}$) in a separating funnel, which layer is the organic layer and where is it located?",
    options: [
      { text: "The organic layer is at the top because it contains organic compounds" },
      { text: "The organic layer is at the bottom because trichloromethane has a higher density than water", isCorrect: true },
      { text: "They form a single miscible phase and cannot be separated" },
      { text: "The organic layer turns into a gas and escapes" }
    ],
    correctAnswer: 1,
    explanation: "* Trichloromethane is immiscible with water and has a significantly higher density.\n* Consequently, it forms the lower layer in the separating funnel, which can be run off first.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Specimen Paper 1 Q14",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_18-2026",
    question: "During a simple distillation experiment, why must the thermometer bulb be positioned level with the side-arm of the distillation head rather than dipped into the boiling liquid?",
    options: [
      { text: "To prevent the thermometer from cracking in hot liquid" },
      { text: "To measure the exact temperature of the vapor entering the condenser, which corresponds to the boiling point of the distillate being collected", isCorrect: true },
      { text: "To ensure the thermometer is kept wet" },
      { text: "To measure the rate of boiling" }
    ],
    correctAnswer: 1,
    explanation: "* The purpose of the thermometer is to record the temperature of the vapor that is about to condense.\n* Dipping it into the liquid would measure the temperature of the boiling mixture (which may be higher due to impurities or superheating).",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Series Q12",
    createdAt: "2026-09-16T10:00:00Z"
  },
  {
    id: "ex_ed_u3_l1_lv2_19-2026",
    question: "A student prepares a standard solution by transferring a dissolved solid from a beaker to a volumetric flask. Why is it essential to wash the beaker with distilled water and transfer the washings to the flask?",
    options: [
      { text: "To clean the beaker for the next student" },
      { text: "To ensure that all of the solute is transferred to the volumetric flask, preventing a lower-than-expected concentration", isCorrect: true },
      { text: "To dilute the solution before mixing" },
      { text: "To lower the pH of the solution" }
    ],
    correctAnswer: 1,
    explanation: "* Any droplets of solution left on the walls of the beaker contain dissolved solute.\n* Rinsing the beaker multiple times and adding the washings to the volumetric flask guarantees quantitative transfer.",
    level: 2,
    topic: "edexcel-unit-3",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH13 / 2026 Paper 1 Q16",
    createdAt: "2026-09-17T10:00:00Z"
  }
];


