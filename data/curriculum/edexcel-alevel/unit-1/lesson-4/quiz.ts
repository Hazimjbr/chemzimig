export const lessonQuiz = [
  // ==========================
  // PART 1: FORMULAE & HOMOLOGOUS SERIES (10 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q1-EASY-20260627",
    question: "Which of the following describes the empirical formula of a compound?",
    options: [
      { text: "The actual number of atoms of each element in a molecule." },
      { text: "The simplest whole-number ratio of atoms of each element in a compound.", isCorrect: true },
      { text: "The algebraic formula describing a homologous series." },
      { text: "The minimal structural arrangement of atoms carbon-by-carbon." }
    ],
    explanation: "The empirical formula is defined as the simplest whole-number ratio of atoms of each element present in a compound, whereas the molecular formula shows the actual number of atoms of each element."
  },
  {
    id: "EDEXCEL-U1-L4-Q2-EASY-20260627",
    question: "What is the general formula for the homologous series of alkanes?",
    options: [
      { text: "$\\text{C}_n\\text{H}_{2n}$" },
      { text: "$\\text{C}_n\\text{H}_{2n+2}$", isCorrect: true },
      { text: "$\\text{C}_n\\text{H}_{2n-2}$" },
      { text: "$\\text{C}_n\\text{H}_{2n+1}\\text{OH}$" }
    ],
    explanation: "Alkanes are saturated hydrocarbons with the general formula $\\text{C}_n\\text{H}_{2n+2}$."
  },
  {
    id: "EDEXCEL-U1-L4-Q3-EASY-20260627",
    question: "Which of the following is a characteristic feature of a homologous series?",
    options: [
      { text: "Members have different functional groups." },
      { text: "Each successive member differs by a $\\text{-CH}_3\\text{-}$ unit." },
      { text: "Members have identical physical properties." },
      { text: "Members have similar chemical properties due to the same functional group.", isCorrect: true }
    ],
    explanation: "Members of a homologous series share the same functional group, giving them similar chemical properties. Successive members differ by a $\\text{-CH}_2\\text{-}$ unit."
  },
  {
    id: "EDEXCEL-U1-L4-Q4-MEDIUM-20260627",
    question: "An organic compound has the molecular formula $\\text{C}_6\\text{H}_{12}$. What is its empirical formula?",
    options: [
      { text: "$\\text{CH}$" },
      { text: "$\\text{CH}_2$", isCorrect: true },
      { text: "$\\text{C}_3\\text{H}_6$" },
      { text: "$\\text{C}_2\\text{H}_4$" }
    ],
    explanation: "Simplifying the molecular ratio of Carbon to Hydrogen (6:12) to the lowest whole-number ratio gives 1:2. Therefore, the empirical formula is $\\text{CH}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q5-MEDIUM-20260627",
    question: "Which representation shows only the carbon-carbon bonds as lines, omitting carbon-hydrogen bonds?",
    options: [
      { text: "Displayed formula" },
      { text: "Structural formula" },
      { text: "Skeletal formula", isCorrect: true },
      { text: "Molecular formula" }
    ],
    explanation: "A skeletal formula simplifies organic representations by showing only carbon-carbon bonds as lines, with carbon atoms assumed at vertices and ends. Hydrogens attached to carbons are omitted."
  },
  {
    id: "EDEXCEL-U1-L4-Q6-MEDIUM-20260627",
    question: "Determine the homologous series of the compound represented by the structural formula $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$.",
    options: [
      { text: "Alkane" },
      { text: "Halogenoalkane" },
      { text: "Alcohol", isCorrect: true },
      { text: "Carboxylic acid" }
    ],
    explanation: "The compound contains the hydroxyl group ($\\text{-OH}$), which is the characteristic functional group of the alcohol homologous series."
  },
  {
    id: "EDEXCEL-U1-L4-Q7-MEDIUM-20260627",
    question: "What is the general formula of a saturated monocarboxylic acid?",
    options: [
      { text: "$\\text{C}_n\\text{H}_{2n}\\text{O}$" },
      { text: "$\\text{C}_n\\text{H}_{2n}\\text{O}_2$", isCorrect: true },
      { text: "$\\text{C}_n\\text{H}_{2n+2}\\text{O}_2$" },
      { text: "$\\text{C}_n\\text{H}_{2n+1}\\text{O}$" }
    ],
    explanation: "Carboxylic acids have the general formula $\\text{C}_n\\text{H}_{2n+1}\\text{COOH}$ (or $\\text{C}_{n+1}\\text{H}_{2n+2}\\text{O}_2$), which simplifies to $\\text{C}_m\\text{H}_{2m}\\text{O}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q8-HARD-20260627",
    question: "An organic compound contains $82.8\\%$ carbon and $17.2\\%$ hydrogen by mass. What is its empirical formula? ($A_r$: $\\text{C}=12.0$, $\\text{H}=1.0$)",
    options: [
      { text: "$\\text{CH}_3$" },
      { text: "$\\text{C}_2\\text{H}_5$", isCorrect: true },
      { text: "$\\text{CH}_2$" },
      { text: "$\\text{C}_3\\text{H}_7$" }
    ],
    explanation: "Moles of C: $82.8 / 12.0 = 6.90\\text{ mol}$. Moles of H: $17.2 / 1.0 = 17.2\\text{ mol}$. Dividing by the smallest value ($6.90$) gives a C:H ratio of 1 : 2.49, which is approximately 1 : 2.5. Multiplying by 2 to obtain the simplest whole-number ratio gives a C:H ratio of 2:5, so the empirical formula is $\\text{C}_2\\text{H}_5$."
  },
  {
    id: "EDEXCEL-U1-L4-Q9-HARD-20260627",
    question: "Which of the following compounds belongs to the halogenoalkanes homologous series?",
    options: [
      { text: "$\\text{CH}_3\\text{COCl}$" },
      { text: "$\\text{CH}_2\\text{Cl}_2$", isCorrect: true },
      { text: "$\\text{C}_6\\text{H}_5\\text{Cl}$" },
      { text: "$\\text{HCl}$" }
    ],
    explanation: "Halogenoalkanes are formed when hydrogen atoms in an alkane are replaced by halogen atoms. $\\text{CH}_2\\text{Cl}_2$ (dichloromethane) fits this definition. $\\text{CH}_3\\text{COCl}$ is an acyl chloride."
  },
  {
    id: "EDEXCEL-U1-L4-Q10-EASY-20260627",
    question: "What functional group is present in the compound $\\text{CH}_3\\text{CH}_2\\text{COOH}$?",
    options: [
      { text: "Hydroxyl group" },
      { text: "Carbonyl group" },
      { text: "Carboxyl group", isCorrect: true },
      { text: "Ester link" }
    ],
    explanation: "The $\\text{-COOH}$ group is called the carboxyl group, which defines carboxylic acids like propanoic acid."
  },

  // ==========================
  // PART 2: IUPAC NOMENCLATURE (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q11-EASY-20260627",
    question: "What is the systematic IUPAC name for a straight-chain alkane with 5 carbon atoms?",
    options: [
      { text: "Butane" },
      { text: "Pentane", isCorrect: true },
      { text: "Hexane" },
      { text: "Propane" }
    ],
    explanation: "A 5-carbon alkane has the prefix 'pent-' and the suffix '-ane', giving the name pentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q12-MEDIUM-20260627",
    question: "Give the IUPAC name for the following molecule: $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_2\\text{CH}_3$.",
    options: [
      { text: "2-methylpentane", isCorrect: true },
      { text: "4-methylpentane" },
      { text: "1,1-dimethylbutane" },
      { text: "Methylhexane" }
    ],
    explanation: "The longest continuous carbon chain has 5 carbon atoms (pentane). Numbering from the left end gives the methyl branch the lowest position (carbon 2), resulting in 2-methylpentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q13-MEDIUM-20260627",
    question: "Which of the following compounds is named 2,2-dimethylpropane?",
    options: [
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)_2$" },
      { text: "$\\text{C(CH}_3)_4$", isCorrect: true },
      { text: "$\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$" }
    ],
    explanation: "2,2-dimethylpropane consists of a central carbon bonded to 4 methyl groups, giving a molecular formula of $\\text{C(CH}_3)_4$ (also known as neopentane)."
  },
  {
    id: "EDEXCEL-U1-L4-Q14-HARD-20260627",
    question: "What is the correct IUPAC name for the halogenoalkane $\\text{CH}_3\\text{CH}_2\\text{CH(Cl)CH(Br)CH}_3$?",
    options: [
      { text: "2-bromo-3-chloropentane", isCorrect: true },
      { text: "4-bromo-3-chloropentane" },
      { text: "3-chloro-2-bromopentane" },
      { text: "3-chloro-4-bromopentane" }
    ],
    explanation: "The longest chain is 5 carbons (pentane). Numbering from the right gives substituents the lowest numbers (2 and 3). Side chains are listed alphabetically: 'bromo' before 'chloro'. Thus: 2-bromo-3-chloropentane."
  },
  {
    id: "EDEXCEL-U1-L4-Q15-HARD-20260627",
    question: "What is the IUPAC name of the compound $\\text{CH}_3\\text{CH}_2\\text{C(CH}_3)_2\\text{CH(CH}_2\\text{CH}_3)\\text{CH}_3$?",
    options: [
      { text: "4-ethyl-3,3-dimethylpentane" },
      { text: "3-ethyl-2,2-dimethylpentane" },
      { text: "3,3,4-trimethylhexane", isCorrect: true },
      { text: "2,3,3-trimethylhexane" }
    ],
    explanation: "The longest continuous carbon chain has 6 carbons (hexane), starting from the ethyl branch on the right. Numbering from the left gives the substituents positions 3, 3, and 4. This yields 3,3,4-trimethylhexane."
  },

  // ==========================
  // PART 3: STRUCTURAL ISOMERISM (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q16-EASY-20260627",
    question: "What type of isomerism is shown by butane and methylpropane?",
    options: [
      { text: "Chain isomerism", isCorrect: true },
      { text: "Position isomerism" },
      { text: "Functional group isomerism" },
      { text: "Stereoisomerism" }
    ],
    explanation: "Butane and methylpropane have the same molecular formula ($\\text{C}_4\\text{H}_{10}$) but different arrangements of the carbon skeleton (branched vs. straight chain), which is chain isomerism."
  },
  {
    id: "EDEXCEL-U1-L4-Q17-MEDIUM-20260627",
    question: "How many structural isomers exist for the alkane with molecular formula $\\text{C}_5\\text{H}_{12}$?",
    options: [
      { text: "2" },
      { text: "3", isCorrect: true },
      { text: "4" },
      { text: "5" }
    ],
    explanation: "The three structural isomers of pentane ($\\text{C}_5\\text{H}_{12}$) are: 1. pentane (straight-chain), 2. 2-methylbutane, and 3. 2,2-dimethylpropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q18-MEDIUM-20260627",
    question: "Which of the following pairs represent functional group isomers?",
    options: [
      { text: "1-chlorobutane and 2-chlorobutane" },
      { text: "Propene and cyclopropane", isCorrect: true },
      { text: "Pentane and 2-methylbutane" },
      { text: "Ethanoic acid and ethanol" }
    ],
    explanation: "Propene (alkene) and cyclopropane (cycloalkane) both share the molecular formula $\\text{C}_3\\text{H}_6$ but contain different functional group types (double bond vs. cyclic single bonds)."
  },
  {
    id: "EDEXCEL-U1-L4-Q19-HARD-20260627",
    question: "How many structural isomers are there of the halogenoalkane $\\text{C}_3\\text{H}_7\\text{Cl}$?",
    options: [
      { text: "2", isCorrect: true },
      { text: "3" },
      { text: "4" },
      { text: "5" }
    ],
    explanation: "There are exactly 2 structural isomers of chloropropane: 1-chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$) and 2-chloropropane ($\\text{CH}_3\\text{CH(Cl)CH}_3$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q20-HARD-20260627",
    question: "Which type of isomerism is demonstrated by 1-bromobutane and 2-bromobutane?",
    options: [
      { text: "Chain isomerism" },
      { text: "Position isomerism", isCorrect: true },
      { text: "Functional group isomerism" },
      { text: "Stereoisomerism" }
    ],
    explanation: "Both molecules have a straight 4-carbon chain, but the bromine atom is attached to carbon-1 in one and carbon-2 in the other. This is position isomerism."
  },

  // ==========================
  // PART 4: BOND FISSION & REACTIONS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q21-EASY-20260627",
    question: "What is formed during the homolytic fission of a covalent bond?",
    options: [
      { text: "A cation and an anion" },
      { text: "Two cations" },
      { text: "Two free radicals", isCorrect: true },
      { text: "A double bond" }
    ],
    explanation: "Homolytic fission splits the shared electron pair equally, leaving each bonding atom with one unpaired electron to form two neutral free radicals."
  },
  {
    id: "EDEXCEL-U1-L4-Q22-MEDIUM-20260627",
    question: "Which of the following species acts as a nucleophile?",
    options: [
      { text: "$\\text{H}^+$" },
      { text: "$\\text{NO}_2^+$" },
      { text: "$\\text{AlCl}_3$" },
      { text: "$\\text{NH}_3$", isCorrect: true }
    ],
    explanation: "A nucleophile must have a lone pair of electrons to donate. Ammonia ($\\text{NH}_3$) has a lone pair on the nitrogen atom, whereas the others are electron-deficient electrophiles."
  },
  {
    id: "EDEXCEL-U1-L4-Q23-MEDIUM-20260627",
    question: "Which reaction class describes the conversion of ethene to bromoethane by reaction with hydrogen bromide?",
    options: [
      { text: "Substitution" },
      { text: "Elimination" },
      { text: "Addition", isCorrect: true },
      { text: "Hydrolysis" }
    ],
    explanation: "Reacting ethene (unsaturated) with HBr forms a single product, bromoethane (saturated). This is an addition reaction."
  },
  {
    id: "EDEXCEL-U1-L4-Q24-HARD-20260627",
    question: "In the heterolytic fission of the $\\text{C-Br}$ bond in bromomethane, which species are formed?",
    options: [
      { text: "$\\bullet\\text{CH}_3$ and $\\bullet\\text{Br}$" },
      { text: "$\\text{CH}_3^+$ and $\\text{Br}^-$", isCorrect: true },
      { text: "$\\text{CH}_3^-$ and $\\text{Br}^+$" },
      { text: "$\\text{CH}_4$ and $\\text{HBr}$" }
    ],
    explanation: "Bromine is more electronegative than carbon, so during heterolytic fission, bromine takes both bonding electrons, forming a bromide ion ($\\text{Br}^-$) and leaving a methyl carbocation ($\\text{CH}_3^+$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q25-HARD-20260627",
    question: "Which of the following correctly defines an electrophile?",
    options: [
      { text: "An electron pair donor" },
      { text: "An electron pair acceptor", isCorrect: true },
      { text: "A species with an unpaired electron" },
      { text: "A negatively charged ion" }
    ],
    explanation: "An electrophile is an electron-deficient species that accepts an electron pair to form a new covalent bond."
  },

  // ==========================
  // PART 5: ALKANES - SOURCES & COMBUSTION (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q26-EASY-20260627",
    question: "Which process is used to separate crude oil into fractions of similar boiling points?",
    options: [
      { text: "Catalytic cracking" },
      { text: "Fractional distillation", isCorrect: true },
      { text: "Reforming" },
      { text: "Thermal cracking" }
    ],
    explanation: "Fractional distillation separates crude oil based on the differing boiling points of its hydrocarbon components."
  },
  {
    id: "EDEXCEL-U1-L4-Q27-MEDIUM-20260627",
    question: "What is the primary product of reforming straight-chain alkanes in petroleum refining?",
    options: [
      { text: "Shorter alkenes for polymer synthesis" },
      { text: "Branched-chain and cyclic hydrocarbons", isCorrect: true },
      { text: "Sulfur dioxide emissions" },
      { text: "Hydrogen chloride gas" }
    ],
    explanation: "Reforming converts straight-chain alkanes into branched-chain and cyclic/aromatic hydrocarbons to increase fuel combustion efficiency (octane rating)."
  },
  {
    id: "EDEXCEL-U1-L4-Q28-MEDIUM-20260627",
    question: "Which gas is formed inside car engines due to the direct reaction of nitrogen and oxygen at high temperatures?",
    options: [
      { text: "$\\text{NO}$", isCorrect: true },
      { text: "$\\text{NH}_3$" },
      { text: "$\\text{HNO}_3$" },
      { text: "$\\text{N}_2\\text{O}$" }
    ],
    explanation: "The extreme temperatures inside combustion engines cause atmospheric nitrogen and oxygen to react directly to produce nitrogen monoxide gas ($\\text{NO}$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q29-HARD-20260627",
    question: "What equation represents the reaction occurring in a catalytic converter to remove both nitrogen monoxide and carbon monoxide?",
    options: [
      { text: "$\\text{NO} + \\text{CO} \\rightarrow \\text{CO}_2 + \\text{N}$" },
      { text: "$2\\text{NO} + 2\\text{CO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$", isCorrect: true },
      { text: "$\\text{NO}_2 + \\text{CO} \\rightarrow \\text{CO}_2 + \\text{NO}$" },
      { text: "$2\\text{NO}_2 + 4\\text{CO} \\rightarrow 4\\text{CO}_2 + \\text{N}_2$" }
    ],
    explanation: "The catalyst in a converter promotes the reaction between nitrogen monoxide and carbon monoxide to produce harmless nitrogen and carbon dioxide: $2\\text{NO} + 2\\text{CO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$."
  },
  {
    id: "EDEXCEL-U1-L4-Q30-HARD-20260627",
    question: "Which of the following is a key limitation of the free-radical substitution reaction of alkanes?",
    options: [
      { text: "It is an endothermic reaction that requires high pressures." },
      { text: "It yields a complex mixture of multi-substituted products and isomers, requiring separation.", isCorrect: true },
      { text: "It only occurs with gaseous fluorine." },
      { text: "The reaction cannot be terminated once initiated." }
    ],
    explanation: "Free-radical substitution is difficult to control; it leads to further substitutions (e.g. forming $\\text{CH}_2\\text{Cl}_2$ alongside $\\text{CH}_3\\text{Cl}$) and yields multiple structural isomers for longer-chain alkanes."
  },

  // ==========================
  // PART 6: HAZARDS, SAFETY & PICTOGRAMS (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q31-MEDIUM-20260627",
    question: "A student plans to heat cyclohexanol (flammable and volatile, boiling point $161^\\circ\\text{C}$) to prepare cyclohexene. Which heating method and safety precaution are most appropriate to minimize risk?",
    options: [
      { text: "Heating directly with a Bunsen burner in an open beaker." },
      { text: "Heating using an electric water bath in a sealed flask." },
      { text: "Heating using an electric heating mantle with a reflux condenser.", isCorrect: true },
      { text: "Heating with a Bunsen burner using a fractionating column." }
    ],
    explanation: "Cyclohexanol has a high boiling point ($161^\\circ\\text{C}$), so a water bath (which maxes at $100^\\circ\\text{C}$) cannot heat it effectively. An electric heating mantle is required. Since it is flammable and volatile, heating under reflux prevents the escape of flammable vapors, reducing the risk of fire."
  },
  {
    id: "EDEXCEL-U1-L4-Q32-MEDIUM-20260627",
    question: "A bottle of concentrated nitric acid ($\\text{HNO}_3$) is labeled with two GHS hazard pictograms. Which pair of pictograms must be present on this bottle?",
    options: [
      { text: "Flammable and Corrosive" },
      { text: "Oxidizing and Corrosive", isCorrect: true },
      { text: "Toxic and Explosive" },
      { text: "Environmental Hazard and Irritant" }
    ],
    explanation: "Nitric acid is a strong oxidizing agent (GHS03 - oxidizing) and causes severe chemical burns to skin and materials (GHS05 - corrosive). It is not flammable itself."
  },
  {
    id: "EDEXCEL-U1-L4-Q33-HARD-20260627",
    question: "Which of the following statements correctly distinguishes between hazard and risk in a laboratory experiment?",
    options: [
      { text: "A hazard is the probability of a chemical causing harm, while risk is the severity of that harm." },
      { text: "Diluting a concentrated acid decreases its hazard but does not affect its risk." },
      { text: "Hazard is an intrinsic property of a substance that cannot be changed, whereas risk depends on the specific conditions of use and can be managed.", isCorrect: true },
      { text: "Using safety goggles reduces the chemical hazard of a corrosive solution." }
    ],
    explanation: "Hazard is an intrinsic, fixed property of a substance (e.g., toxicity or flammability). Risk is the likelihood of that hazard causing harm under specific conditions, which can be minimized using safety precautions like PPE or scaling down."
  },
  {
    id: "EDEXCEL-U1-L4-Q34-MEDIUM-20260627",
    question: "During the laboratory preparation of a halogenoalkane, acidic waste gases are produced. Which method is most suitable for safely removing these acidic vapors from the fume cupboard exhaust?",
    options: [
      { text: "Passing the vapors through a basic scrubber containing calcium carbonate slurry.", isCorrect: true },
      { text: "Condensing the gases in a cold water bath." },
      { text: "Passing the gases over hot copper turnings." },
      { text: "Dissolving the gases in concentrated sulfuric acid." }
    ],
    explanation: "Acidic waste gases (such as $\\text{HCl}$ or $\\text{HBr}$) are neutralized by basic scrubbers containing alkaline compounds like $\\text{CaCO}_3$ or $\\text{NaOH}$ to form harmless salts."
  },
  {
    id: "EDEXCEL-U1-L4-Q35-HARD-20260627",
    question: "Concentrated nitric acid ($\\text{HNO}_3$) is stored in dark brown bottles. Which statement correctly explains the chemical reasoning for this storage method and its safety implications?",
    options: [
      { text: "Light accelerates the oxidation of nitric acid to nitrogen gas." },
      { text: "Light causes photochemical decomposition of $\\text{HNO}_3$ into toxic nitrogen dioxide ($\\text{NO}_2$) gas, increasing container pressure.", isCorrect: true },
      { text: "Dark glass prevents the acid from reacting with the silicon dioxide in the container." },
      { text: "Amber glass absorbs heat, preventing thermal decomposition of the acid." }
    ],
    explanation: "Nitric acid undergoes photochemical decomposition when exposed to light: $4\\text{HNO}_3 \\rightarrow 4\\text{NO}_2 + \\text{O}_2 + 2\\text{H}_2\\text{O}$. This produces toxic, brown $\\text{NO}_2$ gas and increases pressure inside the bottle. Dark brown glass blocks light to prevent this reaction."
  },

  // ==========================
  // PART 7: SUSTAINABILITY & ENVIRONMENTAL ISSUES (5 Questions)
  // ==========================
  {
    id: "EDEXCEL-U1-L4-Q36-MEDIUM-20260627",
    question: "Greenhouse gases trap heat in the atmosphere. Which physical process describes how greenhouse gases contribute to global warming?",
    options: [
      { text: "They absorb incoming short-wavelength UV radiation from the sun." },
      { text: "They absorb outgoing long-wavelength infrared radiation emitted by the Earth's surface.", isCorrect: true },
      { text: "They reflect visible light back to the Earth's surface." },
      { text: "They undergo exothermic decomposition when exposed to solar radiation." }
    ],
    explanation: "The Earth's surface absorbs solar energy (mostly UV and visible light) and re-radiates it as longer-wavelength infrared (IR) radiation. Greenhouse gases absorb this IR radiation, trapping heat in the atmosphere."
  },
  {
    id: "EDEXCEL-U1-L4-Q37-HARD-20260627",
    question: "Bioethanol is often described as carbon-neutral because the carbon dioxide released during its combustion is equal to the carbon dioxide absorbed during photosynthesis. Why is bioethanol not fully carbon-neutral in practice?",
    options: [
      { text: "Bioethanol releases more carbon dioxide per mole during combustion than is absorbed during glucose synthesis." },
      { text: "The fermentation of glucose is an anaerobic process that does not involve carbon dioxide." },
      { text: "Fossil fuels are consumed during crop cultivation, mechanical harvesting, transport, and the energy-intensive distillation process.", isCorrect: true },
      { text: "Photosynthesis by crops absorbs only carbon monoxide, not carbon dioxide." }
    ],
    explanation: "While the chemical equations for photosynthesis and combustion balance out in terms of carbon, the industrial process of cultivating crops, transporting them, and distilling ethanol requires energy that is currently derived from burning fossil fuels."
  },
  {
    id: "EDEXCEL-U1-L4-Q38-MEDIUM-20260627",
    question: "Biodiesel is produced from waste vegetable oils. What is the name of the chemical reaction used to convert triglycerides in vegetable oil into biodiesel (fatty acid methyl esters)?",
    options: [
      { text: "Transesterification", isCorrect: true },
      { text: "Fractional distillation" },
      { text: "Catalytic cracking" },
      { text: "Saponification" }
    ],
    explanation: "Biodiesel is produced via transesterification, where triglycerides react with an alcohol (usually methanol) in the presence of a catalyst (such as $\\text{NaOH}$) to yield fatty acid methyl esters (biodiesel) and glycerol."
  },
  {
    id: "EDEXCEL-U1-L4-Q39-MEDIUM-20260627",
    question: "Why is the incineration of poly(chloroethene) (PVC) more environmentally hazardous than the incineration of poly(ethene)?",
    options: [
      { text: "PVC undergoes incomplete combustion to form toxic carbon monoxide only." },
      { text: "The combustion of PVC releases corrosive and toxic hydrogen chloride ($\\text{HCl}$) gas.", isCorrect: true },
      { text: "PVC decomposes to release heavy metal catalysts like lead." },
      { text: "The C-C backbone of PVC is more resistant to thermal degradation." }
    ],
    explanation: "PVC contains chlorine atoms. When incinerated, it releases toxic and highly corrosive hydrogen chloride ($\\text{HCl}$) gas, which contributes to acid rain unless neutralized by alkaline scrubbers."
  },
  {
    id: "EDEXCEL-U1-L4-Q40-HARD-20260627",
    question: "Which of the following describes the process of 'feedstock recycling' of waste polymers?",
    options: [
      { text: "Sorting, washing, melting, and remolding the polymers into new plastic products." },
      { text: "Burning the polymers to generate steam for electricity production." },
      { text: "Breaking down the polymers using heat or chemical catalysts to recover monomers or raw chemicals.", isCorrect: true },
      { text: "Converting non-biodegradable polymers into biodegradable ones using bacteria." }
    ],
    explanation: "Feedstock recycling involves thermal or chemical depolymerization of waste plastics to recover their constituent monomers or raw chemical feedstocks, which can then be used to manufacture new polymers or other chemicals."
  },
  {
    id: "EDEXCEL-U1-L4-Q41-EASY-2026",
    question: "In 1828, Friedrich Wöhler disproved the theory of 'vitalism' by heating an inorganic compound to produce urea. What was this starting inorganic compound?",
    options: [
      { text: "Ammonium cyanate", isCorrect: true },
      { text: "Ammonium carbonate" },
      { text: "Urea nitrate" },
      { text: "Sodium cyanide" }
    ],
    explanation: "Friedrich Wöhler heated ammonium cyanate ($\\text{NH}_4\\text{CNO}$), which is an inorganic salt, and converted it into urea ($\\text{CO(NH}_2)_2$), an organic compound. This demonstrated that organic compounds do not require a living 'vital force' to be synthesized."
  },
  {
    id: "EDEXCEL-U1-L4-Q42-EASY-2026",
    question: "Which extremely strong, heat-resistant organic polymer was invented by organic chemist Stephanie Kwolek in the 1960s?",
    options: [
      { text: "Kevlar®", isCorrect: true },
      { text: "Nylon-6,6" },
      { text: "Teflon®" },
      { text: "Poly(ethene)" }
    ],
    explanation: "Stephanie Kwolek invented Kevlar® in 1965. It is a polyamide polymer with exceptional strength-to-weight ratio, widely used in body armour, safety gloves, and sports equipment."
  },
  {
    id: "EDEXCEL-U1-L4-Q43-MEDIUM-2026",
    question: "What are the molecular formulae of the two possible saturated hydrocarbons that contain exactly five carbon atoms?",
    options: [
      { text: "$\\text{C}_5\\text{H}_{12}$ and $\\text{C}_5\\text{H}_{10}$", isCorrect: true },
      { text: "$\\text{C}_5\\text{H}_{12}$ and $\\text{C}_5\\text{H}_8$" },
      { text: "$\\text{C}_5\\text{H}_{10}$ and $\\text{C}_5\\text{H}_8$" },
      { text: "$\\text{C}_5\\text{H}_{12}$ only" }
    ],
    explanation: "A saturated hydrocarbon containing only single bonds can either be an alkane chain ($\\text{C}_n\\text{H}_{2n+2}$) or a cyclic cycloalkane ($\\text{C}_n\\text{H}_{2n}$). For five carbons, these correspond to pentane ($\\text{C}_5\\text{H}_{12}$) and cyclopentane ($\\text{C}_5\\text{H}_{10}$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q44-MEDIUM-2026",
    question: "Explain why the actual 3D C-C-C bond angle in cyclobutane is much closer to 109.5° than the 90° angle seen in its 2D drawing.",
    options: [
      { text: "The carbon atoms are $sp^3$ hybridized, and the ring puckers in 3D to minimize eclipse strain and approach the tetrahedral angle", isCorrect: true },
      { text: "The carbon atoms are $sp^2$ hybridized, pushing the bonds to a planar arrangement" },
      { text: "The hydrogen atoms repel each other, widening the angle to exactly 120°" },
      { text: "Cyclobutane is planar, but the C-C bonds are bent due to coordinate bonding" }
    ],
    explanation: "Carbon atoms in cyclobutane are $sp^3$ hybridized, which ideally prefers a tetrahedral angle of 109.5°. To minimize ring strain and eclipse strain of C-H bonds, cyclobutane does not stay flat at 90°; it puckers slightly in 3D, keeping its internal angles close to tetrahedral (around 88°)."
  },
  {
    id: "EDEXCEL-U1-L4-Q45-MEDIUM-2026",
    question: "Why is sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) classified as a carbohydrate and not a hydrocarbon?",
    options: [
      { text: "It contains oxygen atoms in addition to carbon and hydrogen", isCorrect: true },
      { text: "It does not contain any carbon-hydrogen bonds" },
      { text: "It is an organic sugar compound" },
      { text: "It is a polymer of ethene monomers" }
    ],
    explanation: "A hydrocarbon is defined as a compound containing carbon and hydrogen atoms ONLY. Because sucrose contains oxygen atoms in its structure, it is classified as a carbohydrate (the suffix '-ate' indicates oxygen presence) and not a hydrocarbon."
  },
  {
    id: "EDEXCEL-U1-L4-Q46-MEDIUM-2026",
    question: "For which of the following compounds are the molecular formula and empirical formula identical?",
    options: [
      { text: "Chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$)", isCorrect: true },
      { text: "Butane ($\\text{C}_4\\text{H}_{10}$)" },
      { text: "Ethene ($\\text{C}_2\\text{H}_4$)" },
      { text: "Ethanoic acid ($\\text{C}_2\\text{H}_4\\text{O}_2$)" }
    ],
    explanation: "An empirical formula is the simplest whole-number ratio of atoms. In chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$), the ratio of C:H:Cl is 2:5:1, which cannot be simplified further. Therefore, its empirical and molecular formulae are identical."
  },
  {
    id: "EDEXCEL-U1-L4-Q47-HARD-2026",
    question: "An organic compound has the molecular formula $\\text{C}_3\\text{H}_7\\text{Cl}$. How many structural isomers can this formula represent?",
    options: [
      { text: "2", isCorrect: true },
      { text: "3" },
      { text: "4" },
      { text: "1" }
    ],
    explanation: "The molecular formula $\\text{C}_3\\text{H}_7\\text{Cl}$ represents exactly two positional isomers: 1-chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$) and 2-chloropropane ($\\text{CH}_3\\text{CHClCH}_3$)."
  },
  {
    id: "EDEXCEL-U1-L4-Q48-MEDIUM-2026",
    question: "A student writes down a formula as $\\text{CH}_3\\text{CH}_2\\text{Cl}$. What type of chemical formula is this?",
    options: [
      { text: "Structural formula", isCorrect: true },
      { text: "Displayed formula" },
      { text: "Skeletal formula" },
      { text: "Empirical formula" }
    ],
    explanation: "A structural formula shows the arrangement of atoms carbon-by-carbon without showing all the individual bonds explicitly. Thus, $\\text{CH}_3\\text{CH}_2\\text{Cl}$ is the structural formula of chloroethane."
  },
  {
    id: "EDEXCEL-U1-L4-Q49-MEDIUM-2026",
    question: "Which type of chemical formula represents butane as a simple zig-zag line showing only carbon-carbon bonds?",
    options: [
      { text: "Skeletal formula", isCorrect: true },
      { text: "Structural formula" },
      { text: "Displayed formula" },
      { text: "Molecular formula" }
    ],
    explanation: "A skeletal formula simplifies organic representations by showing only the carbon-carbon bonds as a zig-zag line, omitting the carbon and hydrogen atoms themselves (which are assumed at vertices and ends)."
  },
  {
    id: "EDEXCEL-U1-L4-Q50-HARD-2026",
    question: "Which statement is an essential requirement when drawing a displayed formula in an exam?",
    options: [
      { text: "Every single atom and every single bond (including C-H and O-H bonds) must be drawn explicitly with bond lines", isCorrect: true },
      { text: "Carbon-hydrogen bonds can be grouped together as $\\text{-CH}_3$ to save space" },
      { text: "Only double bonds must be shown with lines, while single bonds can be omitted" },
      { text: "The skeleton of the molecule must be represented as a zig-zag line" }
    ],
    explanation: "A displayed formula must show every atom and every single bond separately. Failing to draw the bond lines (e.g. grouping as $\\text{-CH}_3$ or writing $\\text{-OH}$ without the $\\text{-O-H}$ bond line) will result in loss of marks in Edexcel examinations."
  },
  {
    id: "EDEXCEL-U1-L4-Q51-MEDIUM-2026",
    question: "Why is the compound with structural formula $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_3$ systematically named methylpropane rather than 2-methylpropane?",
    options: [
      { text: "Because there is only one carbon position (carbon 2) where a methyl group can be attached to the propane chain without changing the parent chain length, making the locant '2-' redundant", isCorrect: true },
      { text: "Because IUPAC rules forbid the use of numbers for chains shorter than four carbons" },
      { text: "Because the compound has a circular structure where all carbons are equivalent" },
      { text: "Because the prefix methyl has priority and automatically assigns itself to carbon 1" }
    ],
    explanation: "In propane (3 carbons), a methyl group can only be attached to carbon-2. If it were attached to carbon-1 or carbon-3, it would extend the longest continuous carbon chain to 4 carbons, making the compound butane. Since carbon-2 is the only possible position for a branched methyl group in propane, the locant '2-' is omitted as it is redundant."
  },
  {
    id: "EDEXCEL-U1-L4-Q52-HARD-2026",
    question: "What is the correct systematic IUPAC name for the compound with structural formula $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_2\\text{CH}_3)\\text{CH(CH}_3)\\text{CH}_3$?",
    options: [
      { text: "3-ethyl-2-methylpentane", isCorrect: true },
      { text: "3-ethyl-4-methylpentane" },
      { text: "3-methyl-4-ethylpentane" },
      { text: "2-methyl-3-ethylpentane" }
    ],
    explanation: "Let's follow IUPAC rules:\n1. Longest continuous carbon chain containing the branches has 5 carbons (parent: pentane).\n2. Number from the end that gives the lowest locant set: numbering from right to left gives branches at positions 2 (methyl) and 3 (ethyl) -> locants **2, 3**. (Left-to-right numbering would give 3, 4, which is higher).\n3. Alphabetical ordering: 'ethyl' comes before 'methyl' (e before m).\n4. Combine: **3-ethyl-2-methylpentane**."
  },
  {
    id: "EDEXCEL-U1-L4-Q53-HARD-2026",
    question: "What is the correct systematic IUPAC name for the compound represented by the structural formula $\\text{CH}_2\\text{(Br)CH(OH)CH}_3$?",
    options: [
      { text: "1-bromopropan-2-ol", isCorrect: true },
      { text: "3-bromopropan-2-ol" },
      { text: "1-bromopropanol" },
      { text: "3-bromopropanol" }
    ],
    explanation: "In this compound, the principal functional group is the alcohol ($-\\text{OH}$), which determines the suffix '-ol' and has priority for numbering over the bromine substituent. The chain is numbered from right to left to give the $-\\text{OH}$ group the lowest possible number (carbon-2). The bromine atom is at carbon-1. Therefore, the name is **1-bromopropan-2-ol**."
  },
  {
    id: "EDEXCEL-U1-L4-Q54-MEDIUM-2026",
    question: "Why are no locants used in the systematic name of dimethylpropane, $\\text{CH}_3\\text{C(CH}_3)_2\\text{CH}_3$?",
    options: [
      { text: "Because both methyl groups must be attached to carbon 2 of the propane chain; attaching them elsewhere would extend the main chain, making locants redundant", isCorrect: true },
      { text: "Because dimethylpropane contains only carbon atoms with identical environments" },
      { text: "Because the prefix 'di-' indicates that the methyl groups are automatically placed at the ends of the chain" },
      { text: "Because it is an isomer of pentane and isomers do not require locants" }
    ],
    explanation: "In propane (3 carbons), the only carbon that can support two branches without extending the longest carbon chain (which would make it butane or pentane) is carbon-2. Therefore, both methyl groups must be attached to carbon-2. Because this is the only possible arrangement for dimethylpropane, writing '2,2-dimethylpropane' is unnecessary, and the locants are omitted."
  },
  {
    id: "EDEXCEL-U1-L4-Q55-HARD-2026",
    question: "What is the total number of structural isomers with the molecular formula $\\text{C}_4\\text{H}_8\\text{Cl}_2$?",
    options: [
      { text: "9", isCorrect: true },
      { text: "6" },
      { text: "8" },
      { text: "4" }
    ],
    explanation: "There are 9 structural isomers of $\\text{C}_4\\text{H}_8\\text{Cl}_2$:\n1. 6 isomers with a straight butane chain: 1,1-dichlorobutane, 2,2-dichlorobutane, 1,2-dichlorobutane, 1,3-dichlorobutane, 1,4-dichlorobutane, and 2,3-dichlorobutane.\n2. 3 isomers with a branched methylpropane chain: 1,1-dichloro-2-methylpropane, 1,2-dichloro-2-methylpropane, and 1,3-dichloro-2-methylpropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q56-HARD-2026",
    question: "Which of the following is NOT a possible cycloalkane isomer with the molecular formula $\\text{C}_5\\text{H}_{10}$?",
    options: [
      { text: "1,3-dimethylcyclobutane", isCorrect: true },
      { text: "methylcyclobutane" },
      { text: "1,2-dimethylcyclopropane" },
      { text: "ethylcyclopropane" }
    ],
    explanation: "Let's count the carbons for 1,3-dimethylcyclobutane:\n* Cyclobutane ring = 4 carbons\n* Two methyl groups = 2 carbons\nTotal carbons = 6 carbons ($\\text{C}_6\\text{H}_{12}$). Therefore, it is an isomer of $\\text{C}_6\\text{H}_{12}$, not $\\text{C}_5\\text{H}_{10}$. The valid cycloalkane isomers of $\\text{C}_5\\text{H}_{10}$ are cyclopentane, methylcyclobutane, 1,1-dimethylcyclopropane, 1,2-dimethylcyclopropane, and ethylcyclopropane."
  },
  {
    id: "EDEXCEL-U1-L4-Q57-MEDIUM-2026",
    question: "Consider the following reaction:\n$$\\text{CH}_3\\text{CHO} + \\text{HCN} \\rightarrow \\text{CH}_3\\text{CH(OH)CN}$$\nClassify the type of organic reaction occurring in this process.",
    options: [
      { text: "Addition", isCorrect: true },
      { text: "Substitution" },
      { text: "Oxidation" },
      { text: "Reduction" }
    ],
    explanation: "In this reaction, two reactant molecules (ethanal and hydrogen cyanide) combine to form a single product molecule (2-hydroxypropanenitrile). Since multiple reactants combine to form a single product species, this is classified as an addition reaction."
  },
  {
    id: "EDEXCEL-U1-L4-Q58-MEDIUM-2026",
    question: "When writing organic equations, why is the symbol $\\text{[O]}$ used to represent the oxidising agent instead of molecular oxygen ($\\text{O}_2$)?",
    options: [
      { text: "Using $\\text{O}_2$ implies that the reaction occurs using gaseous oxygen from the air, whereas $\\text{[O]}$ represents oxygen delivered from a chemical oxidising agent (like acidified dichromate)", isCorrect: true },
      { text: "Because $\\text{[O]}$ represents a spectator ion that does not participate in electron transfer" },
      { text: "Because molecular oxygen is a reducing agent in organic chemistry" },
      { text: "Because square brackets indicate that the reaction must occur under high pressure" }
    ],
    explanation: "The symbol $\\text{[O]}$ represents oxygen supplied by an oxidising agent (such as acidified potassium dichromate(VI)). Writing $\\text{O}_2$ would be incorrect because it indicates that combustion or reaction with atmospheric molecular oxygen is taking place, which involves completely different conditions and mechanisms."
  },
  {
    id: "EDEXCEL-U1-L4-Q59-MEDIUM-2026",
    question: "Which statement correctly defines an electrophile and describes its behavior in organic reactions?",
    options: [
      { text: "An electron-deficient species (electron-pair acceptor) that is attracted to and attacks regions of high electron density", isCorrect: true },
      { text: "An electron-rich species (electron-pair donor) that attacks positive or electron-deficient carbon atoms" },
      { text: "A neutral species containing an unpaired valence electron that attacks sigma bonds" },
      { text: "An ion that only reacts via homolytic fission" }
    ],
    explanation: "An electrophile ('electron-lover') is an electron-deficient species (such as a positive ion or a polar positive atom) that accepts an electron pair. It is attracted to and attacks areas of high electron density (such as a C=C double bond or a region carrying a partial negative charge)."
  },
  {
    id: "EDEXCEL-U1-L4-Q60-HARD-2026",
    question: "Which of the following equations represents the homolytic fission of a covalent bond in ethane?",
    options: [
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow 2\\text{CH}_3^\\bullet$", isCorrect: true },
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow \\text{CH}_3^+ + \\text{CH}_3^-$" },
      { text: "$\\text{CH}_3-\\text{CH}_3 + \\text{Cl}_2 \\rightarrow \\text{CH}_3-\\text{CH}_2\\text{Cl} + \\text{HCl}$" },
      { text: "$\\text{CH}_3-\\text{CH}_3 \\rightarrow \\text{C}_2\\text{H}_4 + \\text{H}_2$" }
    ],
    explanation: "Homolytic fission is the breaking of a covalent bond where each atom gets one of the shared bonding electrons. This produces neutral, highly reactive free radicals with unpaired electrons (represented by dots). For ethane, homolytic fission of the C-C bond yields two methyl free radicals: $\\text{CH}_3-\\text{CH}_3 \\rightarrow 2\\text{CH}_3^\\bullet$."
  }
];
