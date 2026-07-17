export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-EASY-20260717-01",
    question: "Which of the following compounds is chiral and contains an asymmetric carbon atom?",
    options: [
      { text: "Propan-2-ol", isCorrect: false },
      { text: "Butan-2-ol", isCorrect: true },
      { text: "Butan-1-ol", isCorrect: false },
      { text: "Propanal", isCorrect: false }
    ],
    explanation: "Butan-2-ol (CH₃CH(OH)CH₂CH₃) has carbon-2 bonded to four different groups: -H, -OH, -CH₃, and -CH₂CH₃. Thus, it contains a chiral centre. Propan-2-ol, butan-1-ol, and propanal do not have any carbon bonded to four different groups."
  },
  {
    id: "EDEXCEL-AL-U4-L5-EASY-20260717-02",
    question: "Which reagent can be used to distinguish between aldehydes and ketones?",
    options: [
      { text: "2,4-dinitrophenylhydrazine (2,4-DNPH)", isCorrect: false },
      { text: "Tollens' reagent", isCorrect: true },
      { text: "Lithium tetrahydridoaluminate (LiAlH₄)", isCorrect: false },
      { text: "Phosphorus pentachloride (PCl₅)", isCorrect: false }
    ],
    explanation: "Tollens' reagent reacts only with aldehydes to form a silver mirror (aldehydes are oxidized, Ag⁺ is reduced to Ag). Ketones cannot be easily oxidized, so they show no reaction. 2,4-DNPH reacts with both to form orange precipitates."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260717-03",
    question: "Why does the nucleophilic addition of HCN to propanal result in a product that is optically inactive?",
    options: [
      { text: "The product does not contain a chiral carbon.", isCorrect: false },
      { text: "The nucleophile CN⁻ is symmetrical.", isCorrect: false },
      { text: "The carbonyl group is planar, allowing attack with equal probability from above or below.", isCorrect: true },
      { text: "The reaction occurs via an SN2 mechanism.", isCorrect: false }
    ],
    explanation: "The carbonyl group (C=O) is planar. The CN⁻ nucleophile can attack the electron-deficient carbon atom from above or below the plane with equal (50:50) probability. This forms equal amounts of the two enantiomers, creating a racemic mixture, which is optically inactive."
  },
  {
    id: "EDEXCEL-AL-U4-L5-MEDIUM-20260717-04",
    question: "What organic products are formed when ethyl benzoate is heated under reflux with aqueous sodium hydroxide?",
    options: [
      { text: "Benzoic acid and ethanol", isCorrect: false },
      { text: "Sodium benzoate and ethanol", isCorrect: true },
      { text: "Sodium benzoate and sodium ethoxide", isCorrect: false },
      { text: "Ethyl sodium carbonate and benzene", isCorrect: false }
    ],
    explanation: "Heating an ester with NaOH leads to base hydrolysis (saponification). The ester bond is cleaved. Since NaOH is a base, benzoic acid is deprotonated immediately to form its sodium salt. The products are sodium benzoate and ethanol."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L5-HARD-20260717-05",
    question: "A compound Y has the molecular formula C₃H₆O. It reacts with 2,4-DNPH to give an orange precipitate but does not react with Fehling's solution. When treated with iodine in alkaline solution, it yields a yellow precipitate. Identify Y.",
    options: [
      { text: "Propan-1-ol", isCorrect: false },
      { text: "Propanal", isCorrect: false },
      { text: "Propanone", isCorrect: true },
      { text: "Propanoic acid", isCorrect: false }
    ],
    explanation: "1. Y reacts with 2,4-DNPH: Y contains a carbonyl (C=O) group (eliminates propan-1-ol and propanoic acid).\n2. Y does not react with Fehling's: Y is a ketone, not an aldehyde (eliminates propanal).\n3. Y reacts with iodine/NaOH (Iodoform test): Y contains a methyl carbonyl group (CH₃-CO-).\nPropanone (CH₃COCH₃) is a ketone containing a methyl carbonyl group, fitting all tests."
  }
];
