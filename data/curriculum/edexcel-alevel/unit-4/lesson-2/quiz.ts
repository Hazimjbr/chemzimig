export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-01",
    question: "Which of the following changes results in a DECREASE in entropy?",
    options: [
      { text: "Dissolving a solid salt in water", isCorrect: false },
      { text: "Evaporation of a liquid to a gas", isCorrect: false },
      { text: "Condensation of a gas to form a liquid", isCorrect: true },
      { text: "Decomposition of one solid into two gases", isCorrect: false }
    ],
    explanation: "- Condensation converts a gas (highly disordered, high entropy) into a liquid (more ordered, lower entropy).\n- Dissolving distributes ions throughout the solution, increasing disorder.\n- Evaporation converts an ordered liquid to a disordered gas.\n- Decomposition of a solid to gases increases the number of particles and disorder."
  },
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-02",
    question: "Under what condition is a reaction ALWAYS thermodynamically feasible (spontaneous), regardless of temperature?",
    options: [
      { text: "ΔH is positive and ΔS is positive", isCorrect: false },
      { text: "ΔH is negative and ΔS is negative", isCorrect: false },
      { text: "ΔH is negative and ΔS is positive", isCorrect: true },
      { text: "ΔH is positive and ΔS is negative", isCorrect: false }
    ],
    explanation: "- According to the Gibbs Free Energy equation, ΔG = ΔH - TΔS.\n- For a reaction to be feasible, ΔG must be negative (ΔG < 0).\n- If ΔH is negative (exothermic) and ΔS is positive (entropy increases), both terms contribute to a negative ΔG at any temperature (negative - positive = negative)."
  },
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-03",
    question: "How does the entropy of the system change when ammonium nitrate crystals dissolve in water?",
    options: [
      { text: "It remains the same.", isCorrect: false },
      { text: "It decreases, because the hydrated ions are more ordered in the solution than they are in the crystal.", isCorrect: false },
      { text: "It increases, because the ions in the crystal become hydrated in the solution.", isCorrect: false },
      { text: "It increases, because the ions are arranged more randomly in the solution than they are in the crystal.", isCorrect: true }
    ],
    explanation: "- Dissolving breaks down the highly ordered, rigid solid lattice structure.\n- The ions become free to move and disperse throughout the solvent.\n- This increase in physical dispersal results in a large positive change in system entropy (ΔSsystem > 0)."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-04",
    question: "A reaction has ΔH° = +240 kJ mol⁻¹ and ΔS° = +600 J K⁻¹ mol⁻¹. At what minimum temperature does the reaction become thermodynamically feasible? (Give your answer in Kelvin)",
    options: [
      { text: "0.4 K", isCorrect: false },
      { text: "400 K", isCorrect: true },
      { text: "40 K", isCorrect: false },
      { text: "4000 K", isCorrect: false }
    ],
    explanation: "- Set ΔG = 0 at the boundary of feasibility: 0 = ΔH° - TΔS°.\n- Rearrange the equation to find temperature: T = ΔH° / ΔS°.\n- Convert ΔS° to kJ K⁻¹ mol⁻¹: ΔS° = 600 / 1000 = 0.600 kJ K⁻¹ mol⁻¹.\n- Calculate the temperature: T = +240 / 0.600 = 400 K.\n- Above 400 K, the TΔS term outweighs the ΔH term, making ΔG negative."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-05",
    question: "Use the following data to calculate the lattice formation enthalpy of MgO:\nΔHf°(MgO) = -601 kJ mol⁻¹\nΔHat°(Mg) = +148 kJ mol⁻¹\nΔHat°(O) = +249 kJ mol⁻¹\nIE₁(Mg) = +738 kJ mol⁻¹\nIE₂(Mg) = +1451 kJ mol⁻¹\nEA₁(O) = -141 kJ mol⁻¹\nEA₂(O) = +798 kJ mol⁻¹",
    options: [
      { text: "-3844 kJ mol⁻¹", isCorrect: true },
      { text: "+3844 kJ mol⁻¹", isCorrect: false },
      { text: "-3243 kJ mol⁻¹", isCorrect: false },
      { text: "-601 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Using the Born-Haber cycle formula: ΔHf° = ΔHat(Mg) + ΔHat(O) + IE₁ + IE₂ + EA₁ + EA₂ + ΔHlatt.\n- Rearrange to solve for lattice formation enthalpy: ΔHlatt = ΔHf° - [ΔHat(Mg) + ΔHat(O) + IE₁ + IE₂ + EA₁ + EA₂].\n- Substitute the values: ΔHlatt = -601 - [+148 + 249 + 738 + 1451 + (-141) + 798].\n- Calculate the total: ΔHlatt = -601 - [3243] = -3844 kJ mol⁻¹.\n- This highly exothermic value is due to the large +2 and -2 ionic charges and small ionic radii of Mg²⁺ and O²⁻."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-06",
    question: "A reaction has ΔH° = -196.0 kJ mol⁻¹ at 298 K. Calculate the entropy change of the surroundings (ΔSsurroundings) in J K⁻¹ mol⁻¹.",
    options: [
      { text: "+658 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "-658 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+0.658 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "-0.658 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Apply the surroundings entropy formula: ΔSsurroundings = -ΔH° / T.\n- Convert ΔH° to J mol⁻¹: -196.0 × 1000 = -196000 J mol⁻¹.\n- Substitute values: ΔSsurroundings = -(-196000) / 298.\n- Calculate: ΔSsurroundings = +657.7 ≈ +658 J K⁻¹ mol⁻¹.\n- The positive sign indicates that releasing heat to the surroundings increases the surroundings' disorder."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-07",
    question: "The table shows the lattice energies of rubidium fluoride, RbF, and caesium chloride, CsCl:\nRbF = -783 kJ mol⁻¹\nCsCl = -661 kJ mol⁻¹\nWhich is the most likely lattice energy value of caesium fluoride, CsF?",
    options: [
      { text: "-647 kJ mol⁻¹", isCorrect: false },
      { text: "-747 kJ mol⁻¹", isCorrect: true },
      { text: "-847 kJ mol⁻¹", isCorrect: false },
      { text: "-947 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Caesium fluoride (CsF) has a smaller anion (F⁻) than caesium chloride (CsCl), meaning CsF must have a more exothermic lattice energy than CsCl (more negative than -661 kJ mol⁻¹).\n- However, CsF has a larger cation (Cs⁺) than rubidium fluoride (RbF), meaning CsF must have a less exothermic lattice energy than RbF (less negative than -783 kJ mol⁻¹).\n- Therefore, the lattice energy of CsF must lie between -783 and -661 kJ mol⁻¹, pointing to -747 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-08",
    question: "Which statement is true for the exothermic reaction: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)?",
    options: [
      { text: "ΔH is positive", isCorrect: false },
      { text: "ΔSsurroundings is positive", isCorrect: true },
      { text: "ΔSsystem is negative", isCorrect: false },
      { text: "ΔStotal is negative", isCorrect: false }
    ],
    explanation: "- For an exothermic reaction, the system releases heat energy to the surroundings.\n- The entropy change of the surroundings is calculated by ΔSsurroundings = -ΔH / T.\n- Since ΔH is negative, -ΔH is positive, which makes the surroundings entropy change positive."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-09",
    question: "Calcium carbonate decomposes in an endothermic reaction when heated: CaCO₃(s) → CaO(s) + CO₂(g). What are the signs of the entropy changes ΔSsystem and ΔSsurroundings?",
    options: [
      { text: "ΔSsystem = +, ΔSsurroundings = +", isCorrect: false },
      { text: "ΔSsystem = +, ΔSsurroundings = -", isCorrect: true },
      { text: "ΔSsystem = -, ΔSsurroundings = +", isCorrect: false },
      { text: "ΔSsystem = -, ΔSsurroundings = -", isCorrect: false }
    ],
    explanation: "- System entropy (ΔSsystem) is positive (+) because a gas molecule (CO₂) is produced from a solid reactant, increasing randomness.\n- Surroundings entropy (ΔSsurroundings = -ΔH / T) is negative (-) because the reaction is endothermic (ΔH > 0), absorbing thermal energy from the surroundings."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-15",
    question: "Given the reaction: MgCO₃(s) → MgO(s) + CO₂(g) with ΔH° = +117 kJ mol⁻¹ and molar entropies:\nS°[MgCO₃(s)] = 65.7 J K⁻¹ mol⁻¹\nS°[MgO(s)] = 27.0 J K⁻¹ mol⁻¹\nS°[CO₂(g)] = 214.0 J K⁻¹ mol⁻¹\nCalculate the minimum temperature at which magnesium carbonate decomposes spontaneously.",
    options: [
      { text: "667 K", isCorrect: true },
      { text: "175 K", isCorrect: false },
      { text: "1500 K", isCorrect: false },
      { text: "540 K", isCorrect: false }
    ],
    explanation: "- Calculate the system entropy change: ΔSsystem = S°(MgO) + S°(CO₂) - S°(MgCO₃) = 27.0 + 214.0 - 65.7 = +175.3 J K⁻¹ mol⁻¹.\n- Convert ΔSsystem to kJ K⁻¹ mol⁻¹: +175.3 / 1000 = 0.1753 kJ K⁻¹ mol⁻¹.\n- Set ΔG = 0 for the spontaneity threshold: T = ΔH° / ΔSsystem = 117 / 0.1753 ≈ 667.4 K.\n- Above 667.4 K, the reaction becomes spontaneous."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-10",
    question: "A reaction has ΔG° = -85.0 kJ mol⁻¹ at 298 K and ΔS° = +125 J K⁻¹ mol⁻¹. Calculate ΔH° for the reaction.",
    options: [
      { text: "-47.7 kJ mol⁻¹", isCorrect: true },
      { text: "+47.7 kJ mol⁻¹", isCorrect: false },
      { text: "-48250 kJ mol⁻¹", isCorrect: false },
      { text: "-122 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Rearrange the Gibbs equation to solve for enthalpy change: ΔH = ΔG + TΔS.\n- Convert ΔS° to kJ K⁻¹ mol⁻¹: 125 / 1000 = 0.125 kJ K⁻¹ mol⁻¹.\n- Substitute values: ΔH = -85.0 + (298 × 0.125).\n- Calculate: ΔH = -85.0 + 37.25 = -47.75 ≈ -47.7 kJ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-11",
    question: "The theoretical lattice energy of AgI is -736 kJ mol⁻¹ (based on a purely ionic model), whereas its experimental lattice energy from a Born-Haber cycle is -887 kJ mol⁻¹. What is the explanation for this discrepancy?",
    options: [
      { text: "Ag⁺ has high polarizing power and distorts the electron cloud of the large, polarizable I⁻ ion, introducing significant covalent character.", isCorrect: true },
      { text: "I⁻ is highly polarizing and polarizes the Ag⁺ cation, making the lattice weaker.", isCorrect: false },
      { text: "AgI has purely ionic bonding, and the discrepancy is due to experimental errors in measuring hydration enthalpies.", isCorrect: false },
      { text: "The theoretical calculation assumes covalent bonding while Born-Haber assumes ionic bonding.", isCorrect: false }
    ],
    explanation: "- Theoretical lattice energy calculations assume a purely ionic model with spherical ions acting as point charges.\n- Ag⁺ is polarizing, and I⁻ is a large, highly polarizable anion.\n- The polarization of the iodide electron cloud by the silver cation introduces covalent character into the bonding.\n- Covalent character strengthens the bond, releasing more energy, which makes the experimental lattice energy significantly more exothermic than the theoretical model."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-12",
    question: "At 298 K, a reaction has a standard Gibbs Free Energy change (ΔG°) of -15.0 kJ mol⁻¹. Calculate the thermodynamic equilibrium constant K for this reaction. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "426", isCorrect: true },
      { text: "2.35 × 10⁻³", isCorrect: false },
      { text: "1.01", isCorrect: false },
      { text: "6.05", isCorrect: false }
    ],
    explanation: "- Apply the thermodynamic link formula: ΔG° = -RT ln K.\n- Convert ΔG° to J mol⁻¹: -15.0 × 1000 = -15000 J mol⁻¹.\n- Rearrange to solve for ln K: ln K = -ΔG° / (R × T).\n- Substitute values: ln K = -(-15000) / (8.31 × 298) = 15000 / 2476.38 = 6.0573.\n- Solve for K using the exponential function: K = e^(6.0573) ≈ 426."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-13",
    question: "The table shows the ionic radii and charges for six different ions:\nJ⁺: 0.14 nm | L⁺: 0.18 nm | M²⁺: 0.15 nm\nX⁻: 0.14 nm | Y⁻: 0.18 nm | Z²⁻: 0.15 nm\nWhat is the order of magnitude of the lattice energies of the ionic solids JX, LY, and MZ, listing the most exothermic first?",
    options: [
      { text: "JX > LY > MZ", isCorrect: false },
      { text: "JX > MZ > LY", isCorrect: false },
      { text: "MZ > JX > LY", isCorrect: true },
      { text: "MZ > LY > JX", isCorrect: false }
    ],
    explanation: "- Lattice energy is proportional to the product of charges divided by the sum of ionic radii.\n- MZ has charges of +2 and -2 (product of 4), while JX and LY have charges of +1 and -1 (product of 1), making MZ by far the most exothermic.\n- Comparing JX and LY: JX has smaller ions (0.14 + 0.14 = 0.28 nm) than LY (0.18 + 0.18 = 0.36 nm), so JX is more exothermic than LY."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-14",
    question: "Why do calcium and chlorine react together to form CaCl₂(s) rather than CaCl(s)?",
    options: [
      { text: "Less energy is required to remove one electron from the calcium atom than to remove two electrons.", isCorrect: false },
      { text: "More energy is released in forming chloride ions from chlorine molecules in the formation of CaCl₂(s) than in the formation of CaCl(s).", isCorrect: false },
      { text: "The lattice energy of CaCl(s) is less exothermic than the lattice energy of CaCl₂(s).", isCorrect: true },
      { text: "When CaCl(s) is formed from its elements, more energy is released than when CaCl₂(s) is formed from its elements.", isCorrect: false }
    ],
    explanation: "- Standard lattice energy is proportional to the charges on the ions.\n- In CaCl₂, calcium exists as Ca²⁺, which forms a much more exothermic lattice with Cl⁻ than the Ca⁺ ion in CaCl.\n- This massive difference in lattice energy releases far more energy, completely compensating for the additional energy needed to remove the second electron from calcium."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-16",
    question: "Using standard molar entropies:\nH₂(g) = 131.0 J K⁻¹ mol⁻¹\nO₂(g) = 205.0 J K⁻¹ mol⁻¹\nH₂O(l) = 69.9 J K⁻¹ mol⁻¹\nAnd standard enthalpy of combustion: ΔH° = -285.5 kJ mol⁻¹.\nCalculate the total standard entropy change (ΔStotal°) for the combustion of one mole of hydrogen at 298 K.",
    options: [
      { text: "+795 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "-164 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+958 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "-1122 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Calculate the system entropy change: ΔSsystem = S°[H₂O(l)] - (S°[H₂(g)] + 0.5 × S°[O₂(g)]) = 69.9 - (131.0 + 102.5) = -163.6 J K⁻¹ mol⁻¹.\n- Calculate the surroundings entropy change: ΔSsurroundings = -ΔH° / T = -(-285500) / 298 = +958.1 J K⁻¹ mol⁻¹.\n- Calculate the total entropy change: ΔStotal = ΔSsystem + ΔSsurroundings = -163.6 + 958.1 = +794.5 ≈ +795 J K⁻¹ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-17",
    question: "Ammonia synthesis: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) has ΔH°(700 K) = -110.2 kJ mol⁻¹ and ΔStotal°(700 K) = -78.7 J K⁻¹ mol⁻¹. Calculate the system entropy change (ΔSsystem°) for this reaction at 700 K.",
    options: [
      { text: "-236 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "+157 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "-78.7 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+78.7 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "- Calculate the surroundings entropy change at 700 K: ΔSsurroundings = -ΔH° / T = -(-110200) / 700 = +157.43 J K⁻¹ mol⁻¹.\n- Since ΔStotal = ΔSsystem + ΔSsurroundings, rearrange to solve for system entropy: ΔSsystem = ΔStotal - ΔSsurroundings.\n- Substitute values: ΔSsystem = -78.7 - 157.43 = -236.13 ≈ -236 J K⁻¹ mol⁻¹."
  },
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-18",
    question: "Based on experimental and theoretical lattice energy comparisons, which of the following compounds has the greatest percentage difference between the two values, indicating the greatest degree of covalent character?",
    options: [
      { text: "NaF (Exp: -918, Theo: -912)", isCorrect: false },
      { text: "NaI (Exp: -705, Theo: -687)", isCorrect: false },
      { text: "AgF (Exp: -958, Theo: -920)", isCorrect: false },
      { text: "AgI (Exp: -889, Theo: -778)", isCorrect: true }
    ],
    explanation: "- NaF has a percentage difference of: (918-912)/912 ≈ 0.66%.\n- NaI has a percentage difference of: (705-687)/687 ≈ 2.62%.\n- AgF has a percentage difference of: (958-920)/920 ≈ 4.13%.\n- AgI has a percentage difference of: (889-778)/778 ≈ 14.27%.\n- The large 14.27% difference in AgI indicates significant covalent character due to polarization of the large, polarizable I⁻ ion by the polarizing Ag⁺ cation."
  }
];
