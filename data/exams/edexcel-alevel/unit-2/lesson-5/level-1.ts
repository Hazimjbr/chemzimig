import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: "ex_ed_u2_l5_lv1_1-2026",
    question: "What type of chemical reaction occurs when 1-bromobutane is heated under reflux with aqueous sodium hydroxide (NaOH) to form butan-1-ol?",
    options: [
      { text: "Electrophilic addition" },
      { text: "Nucleophilic substitution (hydrolysis)", isCorrect: true },
      { text: "Free-radical substitution" },
      { text: "Elimination" }
    ],
    correctAnswer: 1,
    explanation: "* The hydroxide ion ($:\\text{OH}^-$) acts as a nucleophile, donating its lone pair to attack the electron-deficient carbon ($^{\\delta+}\\text{C}$) and displacing the bromide leaving group in a nucleophilic substitution reaction.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q29",
    createdAt: "2026-08-12T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_2-2026",
    question: "Which of the following describes a primary (1°) alcohol?",
    options: [
      { text: "An alcohol in which the –OH group is attached to a carbon bonded to only ONE other carbon atom (or no other carbons as in methanol)", isCorrect: true },
      { text: "An alcohol in which the –OH group is attached to a carbon bonded to two other carbons" },
      { text: "An alcohol in which the –OH group is attached to a carbon bonded to three other carbons" },
      { text: "An aromatic alcohol containing a benzene ring" }
    ],
    correctAnswer: 0,
    explanation: "* In a primary ($1^\\circ$) alcohol, the carbon carrying the $-\\text{OH}$ group is attached directly to only one alkyl group (or zero in methanol), e.g., $\\text{CH}_3\\text{CH}_2\\text{OH}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q30",
    createdAt: "2026-08-12T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_3-2026",
    question: "What reagent and reaction conditions are required to eliminate hydrogen bromide from 2-bromopropane to form propene?",
    options: [
      { text: "Aqueous sodium hydroxide, cold" },
      { text: "Potassium hydroxide dissolved in ethanol (ethanolic KOH), heated under reflux", isCorrect: true },
      { text: "Acidified potassium dichromate(VI)" },
      { text: "Concentrated sulfuric acid at 0 °C" }
    ],
    correctAnswer: 1,
    explanation: "* When heated with ethanolic potassium hydroxide ($\\text{KOH}$ in ethanol), the hydroxide ion acts as a base (rather than a nucleophile), abstracting a proton to cause an **elimination** reaction yielding propene.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q25",
    createdAt: "2026-08-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_4-2026",
    question: "What observation confirms the successful oxidation of a primary alcohol by acidified potassium dichromate(VI), $\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$?",
    options: [
      { text: "The solution turns from purple to colorless" },
      { text: "The solution changes color from orange to green (due to reduction of Cr₂O₇²⁻ to Cr³⁺)", isCorrect: true },
      { text: "A white precipitate of silver chloride forms" },
      { text: "Brown fumes of NO₂ gas are evolved" }
    ],
    correctAnswer: 1,
    explanation: "* Orange dichromate(VI) ions ($\\text{Cr}_2\\text{O}_7^{2-}$, $\\text{Cr}^{6+}$) are reduced to green chromium(III) ions ($\\text{Cr}^{3+}$) when oxidizing primary or secondary alcohols.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q30",
    createdAt: "2026-08-13T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_5-2026",
    question: "Why are tertiary (3°) alcohols resistant to oxidation by acidified potassium dichromate(VI)?",
    options: [
      { text: "They are insoluble in sulfuric acid" },
      { text: "The carbon atom bonded to the –OH group has NO hydrogen atom attached to it, preventing the elimination of hydrogen required for oxidation without breaking C–C sigma bonds", isCorrect: true },
      { text: "They are strong reducing agents" },
      { text: "They have a low boiling point" }
    ],
    correctAnswer: 1,
    explanation: "* Oxidation of an alcohol requires the removal of the hydroxyl hydrogen and a hydrogen atom from the adjacent carbinol carbon.\n* Tertiary alcohols lack an $\\alpha$-hydrogen ($-\\text{C(CH}_3)_3\\text{OH}$), making them resistant to oxidation under mild conditions.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q31",
    createdAt: "2026-08-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_6-2026",
    question: "In Infrared (IR) spectroscopy, which characteristic absorption peak diagnostic of the broad O–H stretching vibration in alcohols is typically observed?",
    options: [
      { text: "Sharp peak at 1700–1750 cm⁻¹" },
      { text: "Broad absorption band at 3200–3600 cm⁻¹", isCorrect: true },
      { text: "Sharp peak at 2220–2260 cm⁻¹" },
      { text: "Peak at 600–800 cm⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* The $\\text{O}-\\text{H}$ stretch in alcohols appears as a prominent, broad absorption band centered between **$3200-3600\\text{ cm}^{-1}$** due to hydrogen bonding, easily distinguishable from the sharp carbonyl ($\\text{C}=\\text{O}$) peak at $\\sim 1700\\text{ cm}^{-1}$.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Series Q26",
    createdAt: "2026-08-14T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_7-2026",
    question: "In high-resolution mass spectrometry, what does the molecular ion peak (M⁺) represent?",
    options: [
      { text: "The most abundant fragment ion (base peak)" },
      { text: "The radical cation formed when an unfragmented complete molecule loses a single electron (M → M⁺• + e⁻), whose m/z value equals the relative molecular mass (Mr)", isCorrect: true },
      { text: "An ion that has lost a methyl group" },
      { text: "A doubly charged background artifact" }
    ],
    correctAnswer: 1,
    explanation: "* The molecular ion peak ($\text{M}^+$) represents the intact molecule stripped of one electron ($\\text{M} \\rightarrow \\text{M}^{+\\bullet} + \\text{e}^-$), providing the precise relative molecular mass ($M_r$) of the compound.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Specimen Paper 1 Q31",
    createdAt: "2026-08-15T10:00:00Z"
  },
  {
    id: "ex_ed_u2_l5_lv1_8-2026",
    question: "What reagent is used to convert an alcohol into a chloroalkane with the evolution of steamy white acidic fumes of hydrogen chloride (HCl) at room temperature?",
    options: [
      { text: "Phosphorus(V) chloride (PCl₅)", isCorrect: true },
      { text: "Aqueous sodium chloride (NaCl(aq))" },
      { text: "Dilute hydrochloric acid" },
      { text: "Chlorine water" }
    ],
    correctAnswer: 0,
    explanation: "* Solid phosphorus(V) chloride ($\\text{PCl}_5$) reacts vigorously with alcohols at room temperature: $\\text{ROH} + \\text{PCl}_5 \\rightarrow \\text{RCl} + \\text{POCl}_3 + \\text{HCl(g)}$.\n* Misty white fumes of $\\text{HCl}$ serve as a qualitative test for the $-\\text{OH}$ group.",
    level: 1,
    topic: "edexcel-unit-2",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Edexcel International A Level Chemistry WCH12 / 2026 Paper 1 Q32",
    createdAt: "2026-08-15T10:00:00Z"
  }
];

