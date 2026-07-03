export const lessonQuiz = [
  // ==========================
  // PART 1: ALKENE STRUCTURE & BONDING (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q1-EASY-20260627",
    question: "Which type of orbital overlap forms a $\\\\pi$ bond in alkenes?",
    options: [
      { text: "End-on overlap of s-orbitals" },
      { text: "Sideways overlap of parallel p-orbitals", isCorrect: true },
      { text: "End-on overlap of sp² orbitals" },
      { text: "Sideways overlap of d-orbitals" }
    ],
    explanation: "A $\\\\pi$ bond is formed by the lateral or sideways overlap of unhybridized, parallel p-orbitals on adjacent carbon atoms."
  },
  {
    id: "EDEXCEL-U1-L5-Q2-EASY-20260627",
    question: "What is the approximate bond angle around the carbon atoms in ethene?",
    options: [
      { text: "$90^\\\\circ$" },
      { text: "$109.5^\\\\circ$" },
      { text: "$120^\\\\circ$", isCorrect: true },
      { text: "$180^\\\\circ$" }
    ],
    explanation: "The carbons in ethene are trigonal planar (sp² hybridized) with three bonding regions, giving a bond angle of approximately $120^\\\\circ$."
  },
  {
    id: "EDEXCEL-U1-L5-Q3-MEDIUM-20260627",
    question: "Why is rotation restricted around a carbon-carbon double bond?",
    options: [
      { text: "The $\\\\sigma$ bond is too strong to permit rotation." },
      { text: "The sideways overlap of the $\\\\pi$ bond would be broken upon rotation.", isCorrect: true },
      { text: "Alkyl groups repel each other, locking the bond." },
      { text: "Hydrogen bonding locks the shape in place." }
    ],
    explanation: "Rotating around the double bond would require breaking the sideways overlap of the parallel p-orbitals forming the $\\\\pi$ bond, which requires substantial energy."
  },
  {
    id: "EDEXCEL-U1-L5-Q4-MEDIUM-20260627",
    question: "Which statement correctly compares a $\\\\sigma$ bond and a $\\\\pi$ bond in an alkene?",
    options: [
      { text: "The $\\\\sigma$ bond is weaker because of end-on overlap." },
      { text: "The $\\\\pi$ bond is stronger because of sideways overlap." },
      { text: "The $\\\\pi$ bond is weaker because sideways overlap is less effective than end-on overlap.", isCorrect: true },
      { text: "Both bonds are of equal strength." }
    ],
    explanation: "Sideways overlap of p-orbitals is less efficient than the direct end-on overlap of orbitals forming $\\\\sigma$ bonds, making the $\\\\pi$ bond weaker."
  },
  {
    id: "EDEXCEL-U1-L5-Q5-HARD-20260627",
    question: "How many $\\\\sigma$ and $\\\\pi$ bonds are present in a molecule of propene ($\\\\text{CH}_3\\\\text{CH=CH}_2$)?",
    options: [
      { text: "8 $\\\\sigma$ and 1 $\\\\pi$", isCorrect: true },
      { text: "7 $\\\\sigma$ and 1 $\\\\pi$" },
      { text: "8 $\\\\sigma$ and 2 $\\\\pi$" },
      { text: "9 $\\\\sigma$ and 0 $\\\\pi$" }
    ],
    explanation: "Propene has 2 C-C single bonds, 1 C=C double bond (1 $\\\\sigma$ + 1 $\\\\pi$), and 6 C-H single bonds. Total $\\\\sigma$ bonds = $2 + 1 + 6 = 8$. Total $\\\\pi$ bonds = 1."
  },

  // ==========================
  // PART 2: STEREOISOMERISM (E/Z) (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q6-EASY-20260627",
    question: "Which of the following compounds does NOT show geometric (E/Z) isomerism?",
    options: [
      { text: "But-2-ene" },
      { text: "1,2-dichloroethene" },
      { text: "Propene", isCorrect: true },
      { text: "Pent-2-ene" }
    ],
    explanation: "Propene ($\\\\text{CH}_3\\\\text{CH=CH}_2$) has one carbon bonded to two identical hydrogen atoms. E/Z isomerism requires each carbon in the double bond to be attached to two different groups."
  },
  {
    id: "EDEXCEL-U1-L5-Q7-MEDIUM-20260627",
    question: "According to the CIP priority rules, which group has the highest priority?",
    options: [
      { text: "$\\\\text{-CH}_3$" },
      { text: "$\\\\text{-CH}_2\\\\text{CH}_3$" },
      { text: "$\\\\text{-OH}$", isCorrect: true },
      { text: "$\\\\text{-H}$" }
    ],
    explanation: "Priority is based on atomic number of the direct atom. Oxygen in $\\\\text{-OH}$ has atomic number 8, which is higher than Carbon in $\\\\text{-CH}_3$ and $\\\\text{-CH}_2\\\\text{CH}_3$ (6) and Hydrogen (1)."
  },
  {
    id: "EDEXCEL-U1-L5-Q8-MEDIUM-20260627",
    question: "What defines a Z-isomer in geometric nomenclature?",
    options: [
      { text: "The priority groups are on opposite sides of the double bond." },
      { text: "The priority groups are on the same side of the double bond.", isCorrect: true },
      { text: "The molecule has a symmetrical carbon skeleton." },
      { text: "The molecule contains identical substituents on all positions." }
    ],
    explanation: "Z-isomer (Zusammen, meaning 'together') has the higher priority groups on the same side of the C=C double bond."
  },
  {
    id: "EDEXCEL-U1-L5-Q9-HARD-20260627",
    question: "Which isomer is (E)-1-bromo-1-chloroprop-1-ene?",
    options: [
      { text: "High priority bromine and methyl groups are on opposite sides." },
      { text: "High priority bromine and methyl groups are on the same side.", isCorrect: true },
      { text: "High priority chlorine and hydrogen groups are on the same side." },
      { text: "Chlorine and bromine are on the same carbon, so priorities do not matter." }
    ],
    explanation: "On carbon-1, Bromine (35) has priority over Chlorine (17). On carbon-2, Methyl (12) has priority over Hydrogen (1). In the (E)-isomer, high priority groups must be opposite. Since Br and Methyl are opposite, it is (E)."
  },
  {
    id: "EDEXCEL-U1-L5-Q10-HARD-20260627",
    question: "Identify which molecule has E/Z stereoisomers.",
    options: [
      { text: "$\\\\text{CH}_3\\\\text{CH=C(CH}_3)_2$" },
      { text: "$\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH=CHCH}_2\\\\text{CH}_3$", isCorrect: true },
      { text: "$\\\\text{(CH}_3)_2\\\\text{C=CH}_2$" },
      { text: "$\\\\text{CH}_2\\\\text{=CHCH}_2\\\\text{CH}_3$" }
    ],
    explanation: "Hex-3-ene ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH=CHCH}_2\\\\text{CH}_3$) has different groups on both carbons of the double bond (each has one -H and one $\\\\text{-CH}_2\\\\text{CH}_3$), allowing E/Z isomers."
  },

  // ==========================
  // PART 3: ADDITION REACTIONS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q11-EASY-20260627",
    question: "What reagent and catalyst are required to convert ethene into ethane?",
    options: [
      { text: "$\\\\text{H}_2\\\\text{O}$ with $\\\\text{H}_3\\\\text{PO}_4$ catalyst" },
      { text: "$\\\\text{H}_2$ with $\\\\text{Ni}$ catalyst at 150 °C", isCorrect: true },
      { text: "$\\\\text{HCl}$ at room temperature" },
      { text: "$\\\\text{H}_2\\\\text{O}$ with $\\\\text{Ni}$ catalyst" }
    ],
    explanation: "Conversion of an alkene to an alkane is hydrogenation, requiring hydrogen gas and a Nickel catalyst at $150^\\\\circ\\\\text{C}$."
  },
  {
    id: "EDEXCEL-U1-L5-Q12-EASY-20260627",
    question: "What is observed when propene is shaken with bromine water?",
    options: [
      { text: "Solution turns from purple to colourless." },
      { text: "Solution turns from orange-brown to colourless.", isCorrect: true },
      { text: "A white precipitate is formed." },
      { text: "No visible change occurs." }
    ],
    explanation: "Alkenes react with bromine water in an addition reaction, decolourising the orange-brown bromine water to colourless."
  },
  {
    id: "EDEXCEL-U1-L5-Q13-MEDIUM-20260627",
    question: "Which catalyst is used in the industrial hydration of ethene to form ethanol?",
    options: [
      { text: "Nickel" },
      { text: "Phosphoric(V) acid", isCorrect: true },
      { text: "Platinum" },
      { text: "Zeolite" }
    ],
    explanation: "The industrial hydration of ethene to produce ethanol utilizes a phosphoric(V) acid ($\\\\text{H}_3\\\\text{PO}_4$) catalyst absorbed on silica, at $300^\\\\circ\\\\text{C}$ and 60-70 atm."
  },
  {
    id: "EDEXCEL-U1-L5-Q14-MEDIUM-20260627",
    question: "What is the product when but-2-ene reacts with hydrogen chloride?",
    options: [
      { text: "1-chlorobutane" },
      { text: "2-chlorobutane", isCorrect: true },
      { text: "1,2-dichlorobutane" },
      { text: "2,3-dichlorobutane" }
    ],
    explanation: "But-2-ene is a symmetrical alkene. Adding HCl across the double bond yields 2-chlorobutane as the only product."
  },
  {
    id: "EDEXCEL-U1-L5-Q15-HARD-20260627",
    question: "When ethene is reacted with bromine dissolved in aqueous sodium chloride, which product is NOT formed?",
    options: [
      { text: "1,2-dibromoethane" },
      { text: "2-bromoethanol" },
      { text: "1-bromo-2-chloroethane" },
      { text: "1,2-dichloroethane", isCorrect: true }
    ],
    explanation: "The cyclic bromonium intermediate is attacked by nucleophiles. Available nucleophiles are $\\\\text{Br}^-$, $\\\\text{H}_2\\\\text{O}$, and $\\\\text{Cl}^-$, forming dibromoethane, bromoethanol, and bromochloroethane. $\\\\text{Cl}_2$ addition doesn't occur because there is no electrophilic chlorine source."
  },

  // ==========================
  // PART 4: ELECTROPHILIC ADDITION MECHANISM (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q16-EASY-20260627",
    question: "What is the first step in the mechanism of the reaction between ethene and HBr?",
    options: [
      { text: "Nucleophilic attack of $\\\\text{Br}^-$ on ethene" },
      { text: "Electrophilic attack of $\\\\text{H}^{\\\\delta+}$ on the C=C double bond", isCorrect: true },
      { text: "Homolytic fission of the H-Br bond" },
      { text: "Formation of a cyclic bromonium ion" }
    ],
    explanation: "The high electron density of the $\\\\pi$ double bond attacks the electrophilic $\\\\text{H}^{\\\\delta+}$ of the polar H-Br molecule."
  },
  {
    id: "EDEXCEL-U1-L5-Q17-MEDIUM-20260627",
    question: "How is a non-polar bromine molecule ($\\\\text{Br}_2$) able to act as an electrophile in reactions with alkenes?",
    options: [
      { text: "The high temperature breaks the Br-Br bond beforehand." },
      { text: "The electron-rich C=C bond repels and induces a dipole in $\\\\text{Br}_2$.", isCorrect: true },
      { text: "The solvent polarises the bromine molecule." },
      { text: "Bromine is inherently polar due to isotope effects." }
    ],
    explanation: "As $\\\\text{Br}_2$ approaches the electron-dense C=C double bond, the electrons in the Br-Br bond are repelled, inducing a dipole ($Br^{\\\\delta+} - Br^{\\\\delta-}$)."
  },
  {
    id: "EDEXCEL-U1-L5-Q18-MEDIUM-20260627",
    question: "In organic mechanisms, what does a curly arrow starting from a C=C double bond represent?",
    options: [
      { text: "The movement of a single electron to form a radical" },
      { text: "The movement of a pair of $\\\\pi$ electrons to form a covalent bond with an electrophile", isCorrect: true },
      { text: "The rotation of the C=C bond" },
      { text: "The heterolytic breaking of the $\\\\sigma$ bond" }
    ],
    explanation: "A curly arrow shows the movement of an electron pair. Starting from the C=C bond, it shows the $\\\\pi$ electron pair attacking the electrophile to form a new bond."
  },
  {
    id: "EDEXCEL-U1-L5-Q19-HARD-20260627",
    question: "Which intermediate is formed when ethene reacts with bromine gas?",
    options: [
      { text: "A carbanion" },
      { text: "A carbocation", isCorrect: true },
      { text: "A free radical" },
      { text: "A transition state only" }
    ],
    explanation: "Ethene reacting with bromine forms a carbocation intermediate (often represented as a cyclic bromonium ion), which is subsequently attacked by the bromide nucleophile."
  },
  {
    id: "EDEXCEL-U1-L5-Q20-HARD-20260627",
    question: "During electrophilic addition of HBr to ethene, what is the role of the bromide ion ($\\\\text{Br}^-$)?",
    options: [
      { text: "Electrophile" },
      { text: "Nucleophile", isCorrect: true },
      { text: "Catalyst" },
      { text: "Free radical" }
    ],
    explanation: "The bromide ion has a negative charge and lone pairs, acting as a nucleophile (electron pair donor) to attack the positive carbocation intermediate."
  },

  // ==========================
  // PART 5: MARKOVNIKOV & CARBOCATION STABILITY (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q21-EASY-20260627",
    question: "Which of the following carbocations is the most stable?",
    options: [
      { text: "Primary ($1^\\\\circ$)" },
      { text: "Secondary ($2^\\\\circ$)" },
      { text: "Tertiary ($3^\\\\circ$)", isCorrect: true },
      { text: "Methyl carbocation" }
    ],
    explanation: "Tertiary carbocations are the most stable due to the positive inductive effect of three electron-donating alkyl groups."
  },
  {
    id: "EDEXCEL-U1-L5-Q22-MEDIUM-20260627",
    question: "What is the major product when propene reacts with hydrogen bromide?",
    options: [
      { text: "1-bromopropane" },
      { text: "2-bromopropane", isCorrect: true },
      { text: "1,2-dibromopropane" },
      { text: "1-bromopropene" }
    ],
    explanation: "Addition of H⁺ to carbon-1 forms a secondary carbocation, which is more stable than the primary carbocation. Attack of $\\\\text{Br}^-$ on carbon-2 yields 2-bromopropane as the major product."
  },
  {
    id: "EDEXCEL-U1-L5-Q23-MEDIUM-20260627",
    question: "Why do alkyl groups stabilize carbocations?",
    options: [
      { text: "They withdraw electron density via resonance." },
      { text: "They donate electron density via the inductive effect, spreading the positive charge.", isCorrect: true },
      { text: "They physically block water molecules from attacking." },
      { text: "They form hydrogen bonds with the solvent." }
    ],
    explanation: "Alkyl groups are electron-donating. Through the inductive effect, they push electron density toward the positive carbon, dispersing and stabilizing the charge."
  },
  {
    id: "EDEXCEL-U1-L5-Q24-HARD-20260627",
    question: "Predict the major product when 2-methylbut-2-ene ($\\\\text{(CH}_3)_2\\\\text{C=CHCH}_3$) reacts with hydrogen chloride.",
    options: [
      { text: "2-chloro-2-methylbutane", isCorrect: true },
      { text: "2-chloro-3-methylbutane" },
      { text: "3-chloro-2-methylbutane" },
      { text: "1-chloro-2-methylbutane" }
    ],
    explanation: "Adding H⁺ to carbon-3 forms a tertiary carbocation ($\\\\text{(CH}_3)_2\\\\text{C}^+\\\\text{-CH}_2\\\\text{CH}_3$). Attack of $\\\\text{Cl}^-$ gives 2-chloro-2-methylbutane."
  },
  {
    id: "EDEXCEL-U1-L5-Q25-HARD-20260627",
    question: "Which intermediate leads to the minor product in the reaction of but-1-ene with HBr?",
    options: [
      { text: "A primary carbocation", isCorrect: true },
      { text: "A secondary carbocation" },
      { text: "A tertiary carbocation" },
      { text: "A free radical" }
    ],
    explanation: "The minor product (1-bromobutane) is formed via the less stable primary carbocation intermediate ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_2\\\\text{CH}_2^+$)."
  },

  // ==========================
  // PART 6: OXIDATION & POLYMERISATION (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q26-EASY-20260627",
    question: "What is the product when ethene is oxidized by cold, dilute, acidified potassium manganate(VII)?",
    options: [
      { text: "Ethanol" },
      { text: "Ethane-1,2-diol", isCorrect: true },
      { text: "Ethanoic acid" },
      { text: "Carbon dioxide" }
    ],
    explanation: "Cold dilute acidified $\\\\text{KMnO}_4$ oxidizes alkenes to diols. Ethene yields ethane-1,2-diol."
  },
  {
    id: "EDEXCEL-U1-L5-Q27-MEDIUM-20260627",
    question: "What type of polymerisation reaction do alkenes undergo?",
    options: [
      { text: "Condensation polymerisation" },
      { text: "Addition polymerisation", isCorrect: true },
      { text: "Substitution polymerisation" },
      { text: "Elimination polymerisation" }
    ],
    explanation: "Alkenes join together without eliminating any small molecules, undergoing addition polymerisation."
  },
  {
    id: "EDEXCEL-U1-L5-Q28-MEDIUM-20260627",
    question: "Why are addition polymers non-biodegradable?",
    options: [
      { text: "They are highly polar and react too quickly with water." },
      { text: "They contain strong, non-polar C-C and C-H bonds that are not easily attacked by microbes.", isCorrect: true },
      { text: "They are unstable in air and release toxic gases." },
      { text: "They have low molecular masses." }
    ],
    explanation: "Addition polymers are saturated, non-polar hydrocarbons. Their inertness makes them resistant to chemical or microbial breakdown."
  },
  {
    id: "EDEXCEL-U1-L5-Q29-HARD-20260627",
    question: "Which toxic gas is released during the incineration of poly(chloroethene) (PVC)?",
    options: [
      { text: "$\\\\text{CO}_2$" },
      { text: "$\\\\text{Cl}_2$" },
      { text: "$\\\\text{HCl}$", isCorrect: true },
      { text: "$\\\\text{CO}$" }
    ],
    explanation: "PVC contains chlorine atoms. Burning it releases highly acidic, toxic hydrogen chloride ($\\\\text{HCl}$) gas."
  },
  {
    id: "EDEXCEL-U1-L5-Q30-HARD-20260627",
    question: "Which polymer is formed from the monomer tetrafluoroethene?",
    options: [
      { text: "PVC" },
      { text: "PTFE (Teflon)", isCorrect: true },
      { text: "Polystyrene" },
      { text: "Poly(ethene)" }
    ],
    explanation: "Tetrafluoroethene ($\\\\text{CF}_2\\\\text{=CF}_2$) undergoes addition polymerisation to form polytetrafluoroethene (PTFE, commonly known as Teflon)."
  }
];
