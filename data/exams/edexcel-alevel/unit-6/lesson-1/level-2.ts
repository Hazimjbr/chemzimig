import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: "ex_ed_u6_l1_lv2_1-2026",
    question: "During the preparation and purification of an organic solid (such as aspirin or benzoic acid) by recrystallization, why is the crude solid dissolved in the MINIMUM volume of HOT solvent?",
    options: [
      { text: "To increase the temperature of the laboratory" },
      { text: "To ensure the solution is saturated at high temperature, maximizing the yield of pure crystals upon cooling and minimizing loss of product remaining dissolved in the cold filtrate", isCorrect: true },
      { text: "To prevent the solid from reacting with oxygen" },
      { text: "To completely evaporate the solvent instantly" }
    ],
    correctAnswer: 1,
    explanation: "* Using minimum hot solvent creates a saturated solution; when cooled in an ice bath, solubility drops drastically, precipitating the maximum mass of pure crystal product.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q4",
    createdAt: "2026-12-13T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_2-2026",
    question: "Why is a Buchner funnel and suction flask attached to a vacuum pump preferred over simple gravity filtration using a conical filter funnel when isolating recrystallized organic crystals?",
    options: [
      { text: "Suction filtration neutralizes acidic impurities" },
      { text: "Vacuum filtration provides vastly faster liquid-solid separation and pulls air through the crystal cake to yield much drier crystals", isCorrect: true },
      { text: "It prevents crystals from dissolving in hot solvent" },
      { text: "It eliminates the need for filter paper" }
    ],
    correctAnswer: 1,
    explanation: "* Reduced pressure below the Buchner funnel speeds up filtration by tenfold and draws air through the solid, efficiently removing mother liquor.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q5",
    createdAt: "2026-12-13T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_3-2026",
    question: "In the redox titration of iron(II) ions with standard acidified potassium manganate(VII): $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$, why must dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) be used for acidification rather than hydrochloric acid ($\\text{HCl}$) or nitric acid ($\\text{HNO}_3$)?",
    options: [
      { text: "Sulfuric acid is a catalyst for the reaction" },
      { text: "Chloride ions (Cl⁻) in HCl would be oxidized by MnO₄⁻ to toxic Cl₂ gas, giving an erroneously high titre; HNO₃ is an oxidizing agent that would oxidize Fe²⁺ prematurely", isCorrect: true },
      { text: "HCl dissolves the glass burette" },
      { text: "Sulfuric acid acts as the color indicator" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{MnO}_4^-$ has $E^\\ominus = +1.51\\text{ V}$, high enough to oxidize $\\text{Cl}^-$ to $\\text{Cl}_2$ ($E^\\ominus = +1.36\\text{ V}$), falsely consuming manganate; $\\text{SO}_4^{2-}$ is completely resistant to oxidation.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q3",
    createdAt: "2026-12-14T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_4-2026",
    question: "When measuring the potential difference of an electrochemical cell: $\\text{Zn(s)} | \\text{Zn}^{2+}\\text{(aq)} || \\text{Cu}^{2+}\\text{(aq)} | \\text{Cu(s)}$, what is the vital function of the potassium nitrate ($\\text{KNO}_3$) salt bridge?",
    options: [
      { text: "To allow electrons to flow directly through the liquid" },
      { text: "To complete the electrical circuit by allowing ions to migrate between half-cells, maintaining electrical neutrality without allowing the two bulk solutions to mix", isCorrect: true },
      { text: "To act as a catalyst for zinc oxidation" },
      { text: "To measure the pH of both solutions" }
    ],
    correctAnswer: 1,
    explanation: "* Ions ($\text{K}^+$ and $\text{NO}_3^-$) migrate through the agar gel to balance charge build-up, preventing polarization that would halt cell current.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q5",
    createdAt: "2026-12-14T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_5-2026",
    question: "In the continuous colorimetric monitoring of the iodine-propanone reaction: $\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{H}^+ + \\text{I}^-$, why is a blue or complementary green-blue filter chosen for the colorimeter?",
    options: [
      { text: "To prevent heat transfer to the cuvette" },
      { text: "Because brown/yellow aqueous iodine strongly absorbs blue/cyan wavelengths of light (400–480 nm), maximizing absorbance sensitivity according to the Beer-Lambert Law", isCorrect: true },
      { text: "To make the propanone glow under fluorescence" },
      { text: "To catalyze the iodination reaction" }
    ],
    correctAnswer: 1,
    explanation: "* A colorimeter filter must transmit the complementary wavelength to the solution color (yellow-brown solutions absorb blue light maximally), maximizing linear absorbance change with $[\text{I}_2]$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q6",
    createdAt: "2026-12-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_6-2026",
    question: "During the preparation of a liquid organic product (such as ethyl ethanoate or cyclohexene), the crude organic distillate in a separatory funnel is washed with aqueous sodium carbonate ($\\text{Na}_2\\text{CO}_3\\text{(aq)}$). Why must the stoppered funnel be inverted and vented repeatedly during shaking?",
    options: [
      { text: "To allow oxygen into the funnel" },
      { text: "To release the build-up of carbon dioxide gas (CO₂) pressure produced from the neutralization of acidic impurities (2H⁺ + CO₃²⁻ → H₂O + CO₂)", isCorrect: true },
      { text: "To evaporate the solvent" },
      { text: "To separate the layers faster" }
    ],
    correctAnswer: 1,
    explanation: "* Neutralization of acid residues generates $\\text{CO}_2$ gas, causing rapid pressure build-up that could blow the stopper out violently if not vented.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q4",
    createdAt: "2026-12-15T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_7-2026",
    question: "In the continuous gravimetric monitoring of the decomposition of calcium carbonate ($\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$) placed on a top-pan digital balance, why is a loose plug of cotton wool inserted into the neck of the conical flask?",
    options: [
      { text: "To prevent heat loss to the surroundings" },
      { text: "To allow the heavy CO₂ gas to escape freely while completely blocking acid spray/droplets from being carried out, preventing an exaggerated false mass loss", isCorrect: true },
      { text: "To absorb atmospheric moisture" },
      { text: "To trap CO₂ gas inside the flask" }
    ],
    correctAnswer: 1,
    explanation: "* Bubbles of effervescing gas throw up microscopic acid droplets. Cotton wool permits $\\text{CO}_2$ gas exit while catching aerosol spray.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q11",
    createdAt: "2026-12-23T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_8-2026",
    question: "Why is a water bath or electric heating mantle used rather than an open Bunsen burner flame when heating organic reaction mixtures containing ethanol or propanone?",
    options: [
      { text: "Organic reactions require very low temperatures" },
      { text: "Ethanol and propanone are highly flammable volatile organic liquids with low flashpoints; their vapors can ignite explosively if exposed to an open flame", isCorrect: true },
      { text: "Bunsen flames destroy glass flasks" },
      { text: "Electric mantles accelerate nuclear decay" }
    ],
    correctAnswer: 1,
    explanation: "* Flammable volatile solvents produce dense, flammable vapors that sink and ignite readily on contact with naked flames.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q12",
    createdAt: "2026-12-23T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_9-2026",
    question: "How is the end point of an EDTA complexometric titration for determining aqueous $\\text{Mg}^{2+}$ or $\\text{Ca}^{2+}$ water hardness detected using Eriochrome Black T (EBT) indicator at $pH = 10$?",
    options: [
      { text: "Color change from yellow to clear" },
      { text: "Color change from wine-red ([Mg-EBT] complex) to pure sky-blue (free uncomplexed EBT indicator when all Mg²⁺ is chelated by EDTA⁴⁻)", isCorrect: true },
      { text: "Formation of a dense white precipitate" },
      { text: "Evolution of gas bubbles" }
    ],
    correctAnswer: 1,
    explanation: "* $\\text{EDTA}^{4-}$ forms a stronger chelate with $\\text{Mg}^{2+}$ than EBT does, releasing free $\\text{EBT}^{2-}$, which is distinctly sky-blue at $pH = 10$.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q9",
    createdAt: "2026-12-24T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_10-2026",
    question: "What is the key experimental difference in apparatus setup between refluxing a reaction mixture and distilling the product?",
    options: [
      { text: "Reflux uses an open beaker, while distillation uses a closed test tube" },
      { text: "In reflux, the condenser is vertical (open to the air at the top) returning vapors to the flask; in distillation, the condenser is sloped downward with a thermometer and collection vessel to separate components by boiling point", isCorrect: true },
      { text: "Reflux requires ice, distillation requires high pressure" },
      { text: "Distillation does not use heat" }
    ],
    correctAnswer: 1,
    explanation: "* Reflux allows prolonged heating without loss of volatile reactants; distillation separates and collects the volatile fraction based on boiling point differences.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Specimen Paper 6 Q12",
    createdAt: "2026-12-24T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_11-2026",
    question: "Why is an ice-cold solvent used to wash recrystallized aspirin crystals on the Buchner funnel during vacuum filtration?",
    options: [
      { text: "To freeze the filter paper" },
      { text: "To wash away soluble mother liquor impurities adhering to the crystal surfaces while minimizing the dissolution and loss of purified crystal product", isCorrect: true },
      { text: "To catalyze crystal growth" },
      { text: "To convert aspirin into salicylic acid" }
    ],
    correctAnswer: 1,
    explanation: "* Organic solids have minimal solubility in ice-cold solvents; washing with warm solvent would dissolve and wash away significant amounts of the purified product.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Paper 6 Q13",
    createdAt: "2026-12-25T10:00:00Z"
  },
  {
    id: "ex_ed_u6_l1_lv2_12-2026",
    question: "When measuring enthalpy changes of neutralization in a simple polystyrene cup calorimeter, which of the following is the PRIMARY source of experimental uncertainty?",
    options: [
      { text: "Measuring cylinder graduation marks" },
      { text: "Heat exchange (loss) to the surroundings and the heat capacity of the polystyrene cup/thermometer not being fully accounted for", isCorrect: true },
      { text: "The color of the solutions" },
      { text: "Atmospheric pressure fluctuations" }
    ],
    correctAnswer: 1,
    explanation: "* Heat loss to the atmosphere and container absorption during the reaction are the dominant systematic errors, causing experimental $\\Delta H$ to be less exothermic than theoretical values.",
    level: 2,
    topic: "edexcel-unit-6",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH16 / 2026 Series Q10",
    createdAt: "2026-12-25T10:00:00Z"
  }
];


