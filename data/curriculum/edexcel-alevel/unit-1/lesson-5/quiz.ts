export const lessonQuiz = [
  // ==========================
  // PART 1: ALKENE STRUCTURE & BONDING (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q1-EASY-20260627",
    question: "Which type of orbital overlap forms a $\\pi$ bond in alkenes?",
    options: [
      { text: "End-on overlap of s-orbitals" },
      { text: "Sideways overlap of parallel p-orbitals", isCorrect: true },
      { text: "End-on overlap of sp² orbitals" },
      { text: "Sideways overlap of d-orbitals" }
    ],
    explanation: "A $\\pi$ bond is formed by the lateral or sideways overlap of unhybridized, parallel p-orbitals on adjacent carbon atoms."
  },
  {
    id: "EDEXCEL-U1-L5-Q2-EASY-20260627",
    question: "What is the approximate bond angle around the carbon atoms in ethene?",
    options: [
      { text: "$90^\\circ$" },
      { text: "$109.5^\\circ$" },
      { text: "$120^\\circ$", isCorrect: true },
      { text: "$180^\\circ$" }
    ],
    explanation: "The carbons in ethene are trigonal planar (sp² hybridized) with three bonding regions, giving a bond angle of approximately $120^\\circ$."
  },
  {
    id: "EDEXCEL-U1-L5-Q3-MEDIUM-20260627",
    question: "Why is rotation restricted around a carbon-carbon double bond?",
    options: [
      { text: "The $\\sigma$ bond is too strong to permit rotation." },
      { text: "The sideways overlap of the $\\pi$ bond would be broken upon rotation.", isCorrect: true },
      { text: "Alkyl groups repel each other, locking the bond." },
      { text: "Hydrogen bonding locks the shape in place." }
    ],
    explanation: "Rotating around the double bond would require breaking the sideways overlap of the parallel p-orbitals forming the $\\pi$ bond, which requires substantial energy."
  },
  {
    id: "EDEXCEL-U1-L5-Q4-MEDIUM-20260627",
    question: "Which statement correctly compares a $\\sigma$ bond and a $\\pi$ bond in an alkene?",
    options: [
      { text: "The $\\sigma$ bond is weaker because of end-on overlap." },
      { text: "The $\\pi$ bond is stronger because of sideways overlap." },
      { text: "The $\\pi$ bond is weaker because sideways overlap is less effective than end-on overlap.", isCorrect: true },
      { text: "Both bonds are of equal strength." }
    ],
    explanation: "Sideways overlap of p-orbitals is less efficient than the direct end-on overlap of orbitals forming $\\sigma$ bonds, making the $\\pi$ bond weaker."
  },
  {
    id: "EDEXCEL-U1-L5-Q5-HARD-20260627",
    question: "How many $\\sigma$ and $\\pi$ bonds are present in a molecule of propene ($\\text{CH}_3\\text{CH=CH}_2$)?",
    options: [
      { text: "8 $\\sigma$ and 1 $\\pi$", isCorrect: true },
      { text: "7 $\\sigma$ and 1 $\\pi$" },
      { text: "8 $\\sigma$ and 2 $\\pi$" },
      { text: "9 $\\sigma$ and 0 $\\pi$" }
    ],
    explanation: "Propene has 2 C-C single bonds, 1 C=C double bond (1 $\\sigma$ + 1 $\\pi$), and 6 C-H single bonds. Total $\\sigma$ bonds = $2 + 1 + 6 = 8$. Total $\\pi$ bonds = 1."
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
    explanation: "Propene ($\\text{CH}_3\\text{CH=CH}_2$) has one carbon bonded to two identical hydrogen atoms. E/Z isomerism requires each carbon in the double bond to be attached to two different groups."
  },
  {
    id: "EDEXCEL-U1-L5-Q7-MEDIUM-20260627",
    question: "According to the CIP priority rules, which group has the highest priority?",
    options: [
      { text: "$\\text{-CH}_3$" },
      { text: "$\\text{-CH}_2\\text{CH}_3$" },
      { text: "$\\text{-OH}$", isCorrect: true },
      { text: "$\\text{-H}$" }
    ],
    explanation: "Priority is based on atomic number of the direct atom. Oxygen in $\\text{-OH}$ has atomic number 8, which is higher than Carbon in $\\text{-CH}_3$ and $\\text{-CH}_2\\text{CH}_3$ (6) and Hydrogen (1)."
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
      { text: "$\\text{CH}_3\\text{CH=C(CH}_3)_2$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH=CHCH}_2\\text{CH}_3$", isCorrect: true },
      { text: "$\\text{(CH}_3)_2\\text{C=CH}_2$" },
      { text: "$\\text{CH}_2\\text{=CHCH}_2\\text{CH}_3$" }
    ],
    explanation: "Hex-3-ene ($\\text{CH}_3\\text{CH}_2\\text{CH=CHCH}_2\\text{CH}_3$) has different groups on both carbons of the double bond (each has one -H and one $\\text{-CH}_2\\text{CH}_3$), allowing E/Z isomers."
  },

  // ==========================
  // PART 3: ADDITION REACTIONS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q11-EASY-20260627",
    question: "What reagent and catalyst are required to convert ethene into ethane?",
    options: [
      { text: "$\\text{H}_2\\text{O}$ with $\\text{H}_3\\text{PO}_4$ catalyst" },
      { text: "$\\text{H}_2$ with $\\text{Ni}$ catalyst at 150 °C", isCorrect: true },
      { text: "$\\text{HCl}$ at room temperature" },
      { text: "$\\text{H}_2\\text{O}$ with $\\text{Ni}$ catalyst" }
    ],
    explanation: "Conversion of an alkene to an alkane is hydrogenation, requiring hydrogen gas and a Nickel catalyst at $150^\\circ\\text{C}$."
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
    explanation: "The industrial hydration of ethene to produce ethanol utilizes a phosphoric(V) acid ($\\text{H}_3\\text{PO}_4$) catalyst absorbed on silica, at $300^\\circ\\text{C}$ and 60-70 atm."
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
    explanation: "The cyclic bromonium intermediate is attacked by nucleophiles. Available nucleophiles are $\\text{Br}^-$, $\\text{H}_2\\text{O}$, and $\\text{Cl}^-$, forming dibromoethane, bromoethanol, and bromochloroethane. $\\text{Cl}_2$ addition doesn't occur because there is no electrophilic chlorine source."
  },

  // ==========================
  // PART 4: ELECTROPHILIC ADDITION MECHANISM (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L5-Q16-EASY-20260627",
    question: "What is the first step in the mechanism of the reaction between ethene and HBr?",
    options: [
      { text: "Nucleophilic attack of $\\text{Br}^-$ on ethene" },
      { text: "Electrophilic attack of $\\text{H}^{\\delta+}$ on the C=C double bond", isCorrect: true },
      { text: "Homolytic fission of the H-Br bond" },
      { text: "Formation of a cyclic bromonium ion" }
    ],
    explanation: "The high electron density of the $\\pi$ double bond attacks the electrophilic $\\text{H}^{\\delta+}$ of the polar H-Br molecule."
  },
  {
    id: "EDEXCEL-U1-L5-Q17-MEDIUM-20260627",
    question: "How is a non-polar bromine molecule ($\\text{Br}_2$) able to act as an electrophile in reactions with alkenes?",
    options: [
      { text: "The high temperature breaks the Br-Br bond beforehand." },
      { text: "The electron-rich C=C bond repels and induces a dipole in $\\text{Br}_2$.", isCorrect: true },
      { text: "The solvent polarises the bromine molecule." },
      { text: "Bromine is inherently polar due to isotope effects." }
    ],
    explanation: "As $\\text{Br}_2$ approaches the electron-dense C=C double bond, the electrons in the Br-Br bond are repelled, inducing a dipole ($Br^{\\delta+} - Br^{\\delta-}$)."
  },
  {
    id: "EDEXCEL-U1-L5-Q18-MEDIUM-20260627",
    question: "In organic mechanisms, what does a curly arrow starting from a C=C double bond represent?",
    options: [
      { text: "The movement of a single electron to form a radical" },
      { text: "The movement of a pair of $\\pi$ electrons to form a covalent bond with an electrophile", isCorrect: true },
      { text: "The rotation of the C=C bond" },
      { text: "The heterolytic breaking of the $\\sigma$ bond" }
    ],
    explanation: "A curly arrow shows the movement of an electron pair. Starting from the C=C bond, it shows the $\\pi$ electron pair attacking the electrophile to form a new bond."
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
    question: "During electrophilic addition of HBr to ethene, what is the role of the bromide ion ($\\text{Br}^-$)?",
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
      { text: "Primary ($1^\\circ$)" },
      { text: "Secondary ($2^\\circ$)" },
      { text: "Tertiary ($3^\\circ$)", isCorrect: true },
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
    explanation: "Addition of H⁺ to carbon-1 forms a secondary carbocation, which is more stable than the primary carbocation. Attack of $\\text{Br}^-$ on carbon-2 yields 2-bromopropane as the major product."
  },
  {
    id: "EDEXCEL-U1-L5-Q23-MEDIUM-20260627",
    question: "Why is the E/Z naming system preferred over the cis/trans system for naming complex geometric isomers?",
    options: [
      { text: "The cis/trans system can only be used if there is a methyl group on each carbon of the double bond." },
      { text: "The E/Z system is based on Cahn-Ingold-Prelog priority rules, which uniquely identifies isomers even when all four groups attached to the C=C bond are different.", isCorrect: true },
      { text: "The cis/trans system cannot be used for alkenes with six or more carbon atoms." },
      { text: "The E/Z system applies only to cyclic alkenes." }
    ],
    explanation: "The cis/trans system is limited because it requires two identical groups (often hydrogen) to compare across the double bond. The E/Z system uses atomic number priority rules (CIP) to assign configuration, allowing it to uniquely name any alkene, regardless of whether the substituents are identical or different."
  },
  {
    id: "EDEXCEL-U1-L5-Q24-HARD-20260627",
    question: "Predict the major product when 2-methylbut-2-ene ($\\text{(CH}_3)_2\\text{C=CHCH}_3$) reacts with hydrogen chloride.",
    options: [
      { text: "2-chloro-2-methylbutane", isCorrect: true },
      { text: "2-chloro-3-methylbutane" },
      { text: "3-chloro-2-methylbutane" },
      { text: "1-chloro-2-methylbutane" }
    ],
    explanation: "Adding H⁺ to carbon-3 forms a tertiary carbocation ($\\text{(CH}_3)_2\\text{C}^+\\text{-CH}_2\\text{CH}_3$). Attack of $\\text{Cl}^-$ gives 2-chloro-2-methylbutane."
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
    explanation: "The minor product (1-bromobutane) is formed via the less stable primary carbocation intermediate ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2^+$)."
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
    explanation: "Cold dilute acidified $\\text{KMnO}_4$ oxidizes alkenes to diols. Ethene yields ethane-1,2-diol."
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
      { text: "$\\text{CO}_2$" },
      { text: "$\\text{Cl}_2$" },
      { text: "$\\text{HCl}$", isCorrect: true },
      { text: "$\\text{CO}$" }
    ],
    explanation: "PVC contains chlorine atoms. Burning it releases highly acidic, toxic hydrogen chloride ($\\text{HCl}$) gas."
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
    explanation: "Tetrafluoroethene ($\\text{CF}_2\\text{=CF}_2$) undergoes addition polymerisation to form polytetrafluoroethene (PTFE, commonly known as Teflon)."
  },
  {
    id: "EDEXCEL-U1-L5-Q31-MEDIUM-20260627",
    question: "Why does the incomplete combustion of an alkene release significantly less energy per mole of fuel compared to its complete combustion?",
    options: [
      { text: "Incomplete combustion requires a higher activation energy." },
      { text: "The carbon and hydrogen atoms in the fuel are only partially oxidized.", isCorrect: true },
      { text: "Water is not formed as a product in incomplete combustion." },
      { text: "The pi bond is not broken during incomplete combustion." }
    ],
    explanation: "Complete combustion fully oxidizes carbon to $\\text{CO}_2$ and hydrogen to $\\text{H}_2\\text{O}$, releasing the maximum enthalpy of combustion. Incomplete combustion leaves carbon partially oxidized as $\\text{CO}$ or unoxidized as soot (C), releasing less energy."
  },
  {
    id: "EDEXCEL-U1-L5-Q32-HARD-20260627",
    question: "What is the major organic product formed when propene reacts with iodine monochloride ($\\text{I-Cl}$)?",
    options: [
      { text: "1-chloro-2-iodopropane" },
      { text: "2-chloro-1-iodopropane", isCorrect: true },
      { text: "1,2-diiodopropane" },
      { text: "1,2-dichloropropane" }
    ],
    explanation: "Chlorine is more electronegative than iodine, creating a dipole of $\\text{I}^{\\delta+} - \\text{Cl}^{\\delta-}$. The electrophilic $\\text{I}^{\\delta+}$ adds to carbon-1 to form the more stable secondary carbocation at carbon-2. The nucleophilic $\\text{Cl}^-$ then attacks carbon-2, yielding 2-chloro-1-iodopropane."
  },
  {
    id: "EDEXCEL-U1-L5-Q33-HARD-20260627",
    question: "Waste gases containing hydrogen chloride ($\\text{HCl}$) from the incineration of PVC can be neutralized using a gas scrubber containing calcium hydroxide ($\\text{Ca(OH)}_2$). What is the balanced equation for this neutralization reaction?",
    options: [
      { text: "$\\text{Ca(OH)}_2 + \\text{HCl} \\rightarrow \\text{CaCl} + \\text{H}_2\\text{O}$" },
      { text: "$\\text{Ca(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$", isCorrect: true },
      { text: "$\\text{Ca(OH)}_2 + \\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O}$" },
      { text: "$\\text{Ca} + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2$" }
    ],
    explanation: "Calcium hydroxide is a diacidic base, reacting with two moles of hydrochloric acid to produce calcium chloride salt and two moles of water."
  },
  {
    id: "EDEXCEL-U1-L5-Q34-HARD-20260627",
    question: "According to the Cahn-Ingold-Prelog (CIP) priority rules, which of the following groups has the highest priority when attached to a C=C double bond carbon?",
    options: [
      { text: "$-\\text{CH}=\\text{CH}_2$" },
      { text: "$-\\text{CH}(\\text{CH}_3)_2$" },
      { text: "$-\\text{CH}_2\\text{NH}_2$" },
      { text: "$-\\text{CH}_2\\text{OH}$", isCorrect: true }
    ],
    explanation: "To determine CIP priority, compare atoms bonded directly to the C=C carbon. All four groups start with a carbon atom. Next, compare the atoms attached to this first carbon in order of decreasing atomic number: for $-\\text{CH}_2\\text{OH}$ it is (O, H, H); for $-\\text{CH}_2\\text{NH}_2$ it is (N, H, H); for $-\\text{CH}(\\text{CH}_3)_2$ it is (C, C, H); for $-\\text{CH}=\\text{CH}_2$, the double bond counts as bonding to two carbons, so it is (C, C, H). Comparing the highest atomic numbers at the first point of difference: O (8) in $-\\text{CH}_2\\text{OH}$ has the highest priority."
  },
  {
    id: "EDEXCEL-U1-L5-Q35-MEDIUM-20260627",
    question: "A manufacturer claims that a new polymer, synthesized from bio-ethene derived from fermented sugarcane ethanol, is entirely 'green'. Which of the following is a valid criticism of this claim based on Life Cycle Assessment (LCA)?",
    options: [
      { text: "Bio-poly(ethene) has a completely different chemical structure and is less stable than petrochemical poly(ethene)." },
      { text: "Sugarcane fermentation does not produce carbon dioxide during the ethanol production stage." },
      { text: "The cultivation, harvesting, transportation, and chemical processing of sugarcane consume significant fossil fuels.", isCorrect: true },
      { text: "Bio-poly(ethene) is highly biodegradable and therefore cannot be recycled alongside standard plastics." }
    ],
    explanation: "Although the monomer is derived from plants (which absorb CO2 via photosynthesis), the overall manufacturing process (fertilizers, harvesting, distillation, transport) requires energy that often comes from fossil fuels. Chemically, bio-poly(ethene) is identical to petrochemical poly(ethene) and is equally non-biodegradable."
  },
  {
    id: "EDEXCEL-U1-L5-Q36-MEDIUM-20260627",
    question: "What is the atom economy for the synthesis of 1,2-dibromoethane from ethene and bromine?",
    options: [
      { text: "50.0%" },
      { text: "75.0%" },
      { text: "100%", isCorrect: true },
      { text: "85.5%" }
    ],
    explanation: "Addition reactions have an atom economy of 100% because all reactant atoms are incorporated into the single desired product molecule, leaving no waste products."
  },
  {
    id: "EDEXCEL-U1-L5-Q37-HARD-20260627",
    question: "Cyclohexene contains a C=C double bond, but under normal conditions, it does not exist as E and Z stereoisomers. Which of the following is the correct explanation for this?",
    options: [
      { text: "The ring shape prevents any substituents from being attached to the double-bonded carbons." },
      { text: "The trans (E) isomer is extremely unstable because the six-membered ring is too small to accommodate the required geometry without excessive strain.", isCorrect: true },
      { text: "There is free rotation around the C=C double bond within cyclic systems." },
      { text: "Cyclohexene is a saturated hydrocarbon and therefore cannot show geometric isomerism." }
    ],
    explanation: "In small rings (usually fewer than 8 carbons), a trans (E) double bond introduces too much ring strain and cannot exist stably. Therefore, cyclohexene only exists as the cis (Z) isomer under normal conditions."
  },
  {
    id: "EDEXCEL-U1-L5-Q38-MEDIUM-20260627",
    question: "Which catalyst is used in the industrial polymerisation of ethene to produce poly(ethene)?",
    options: [
      { text: "Ziegler-Natta catalyst", isCorrect: true },
      { text: "Nickel catalyst" },
      { text: "Phosphoric acid catalyst" },
      { text: "Acidified potassium manganate(VII)" }
    ],
    explanation: "The industrial production of high-density poly(ethene) (HDPE) commonly uses a Ziegler-Natta catalyst (transition metal compound) at relatively low temperatures and pressures."
  },
  {
    id: "EDEXCEL-U1-L5-Q39-HARD-20260627",
    question: "When ethene reacts with bromine water, the major organic product formed is 2-bromoethanol ($\\text{CH}_2\\text{BrCH}_2\\text{OH}$) rather than 1,2-dibromoethane ($\\text{CH}_2\\text{BrCH}_2\\text{Br}$). What is the reason for this?",
    options: [
      { text: "Bromine water contains a much higher concentration of water molecules than bromide ions, and water acts as a competing nucleophile.", isCorrect: true },
      { text: "Water is a stronger electrophile than the bromine molecule." },
      { text: "The bromine molecule reacts with water to form hydrogen bromide, which then adds to the alkene." },
      { text: "The cyclic bromonium intermediate is unstable in non-polar solvents." }
    ],
    explanation: "In bromine water, the first step of electrophilic addition forms a cyclic bromonium ion intermediate. Because the concentration of water molecules ($\\\\text{H}_2\\\\text{O}$) in the aqueous solvent is vastly higher than that of the bromide ions ($\\\\text{Br}^-$) produced, water predominantly attacks the intermediate as the nucleophile, forming 2-bromoethanol."
  },
  {
    id: "EDEXCEL-U1-L5-Q40-HARD-20260627",
    question: "Which factor explains why tertiary carbocations form much more rapidly than primary carbocations during electrophilic addition?",
    options: [
      { text: "The activation energy is lower due to greater stabilization of the positive charge by the inductive effect of three alkyl groups.", isCorrect: true },
      { text: "The reactant alkene is less stable and thus reacts faster." },
      { text: "Primary carbocations require a base catalyst to form." },
      { text: "Tertiary carbocations form via homolytic bond fission." }
    ],
    explanation: "Tertiary carbocations are stabilized by the electron-donating inductive effect of three alkyl groups. This stabilization lowers the energy of the intermediate and the transition state leading to it, reducing the activation energy and increasing the rate of reaction."
  }
];
