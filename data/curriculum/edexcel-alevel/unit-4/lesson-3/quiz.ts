export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: RETRIEVE (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-01",
    question: "For the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the correct expression for Kc?",
    options: [
      { text: "Kc = [NH₃]² / ([N₂][H₂]³)", isCorrect: true },
      { text: "Kc = [N₂][H₂]³ / [NH₃]²", isCorrect: false },
      { text: "Kc = 2[NH₃] / ([N₂] + 3[H₂])", isCorrect: false },
      { text: "Kc = [NH₃] / ([N₂][H₂])", isCorrect: false }
    ],
    explanation: "* The Kc expression places product concentrations in the numerator and reactant concentrations in the denominator, each raised to the power of their stoichiometric coefficients.\n* Here, [NH₃] is squared, while [N₂] is raised to the power of 1 and [H₂] is cubed.\n* The units of Kc for this reaction are dm⁶ mol⁻² because Δn = 2 - (1 + 3) = -2."
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-02",
    question: "A reaction at equilibrium has Kc = 2.5 × 10⁻⁶. Which statement is correct?",
    options: [
      { text: "The equilibrium strongly favours the products.", isCorrect: false },
      { text: "The equilibrium strongly favours the reactants.", isCorrect: true },
      { text: "The concentrations of products and reactants are equal at equilibrium.", isCorrect: false },
      { text: "The reaction does not reach equilibrium.", isCorrect: false }
    ],
    explanation: "* A value of Kc ≪ 1 (much less than 1) indicates that the denominator of the Kc expression (reactants) is far larger than the numerator (products).\n* Therefore, the equilibrium position lies heavily to the left, strongly favouring the reactants."
  },

  // ==========================================
  // LEVEL 2: APPLY (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-03",
    question: "At equilibrium at 700 K, a mixture of 0.40 mol N₂, 1.20 mol H₂, and 0.80 mol NH₃ is present in a 2.0 dm³ container. Calculate Kc for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
    options: [
      { text: "3.70 dm⁶ mol⁻²", isCorrect: true },
      { text: "0.185 dm⁶ mol⁻²", isCorrect: false },
      { text: "5.40 dm⁶ mol⁻²", isCorrect: false },
      { text: "0.093 dm⁶ mol⁻²", isCorrect: false }
    ],
    explanation: "* First convert moles to concentrations by dividing by the volume V = 2.0 dm³:\n* [N₂] = 0.40 / 2.0 = 0.20 mol dm⁻³\n* [H₂] = 1.20 / 2.0 = 0.60 mol dm⁻³\n* [NH₃] = 0.80 / 2.0 = 0.40 mol dm⁻³\n* Substitute into the Kc expression: Kc = [NH₃]² / ([N₂][H₂]³)\n* Kc = (0.40)² / (0.20 × (0.60)³) = 0.16 / (0.20 × 0.216) = 0.16 / 0.0432 ≈ 3.70 dm⁶ mol⁻²"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-04",
    question: "The forward reaction of the Contact Process is exothermic: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Which change causes Kc to DECREASE?",
    options: [
      { text: "Increasing the pressure", isCorrect: false },
      { text: "Adding more SO₂ gas", isCorrect: false },
      { text: "Increasing the temperature", isCorrect: true },
      { text: "Adding a V₂O₅ catalyst", isCorrect: false }
    ],
    explanation: "* The numerical value of Kc is altered only by changes in temperature.\n* For an exothermic forward reaction, increasing the temperature causes the equilibrium to shift in the endothermic reverse direction to absorb heat.\n* This shift decreases the concentration of products and increases reactants, decreasing the value of Kc."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-22060708-06",
    question: "A dynamic equilibrium is set up between carbon monoxide, hydrogen, and methanol: CO(g) + 2H₂(g) ⇌ CH₃OH(g). The equilibrium concentrations are [CO] = 3.1 × 10⁻³ mol dm⁻³, [H₂] = 2.4 × 10⁻² mol dm⁻³, and [CH₃OH] = 2.6 × 10⁻⁵ mol dm⁻³. Calculate the value of Kc.",
    options: [
      { text: "14.6 dm⁶ mol⁻²", isCorrect: true },
      { text: "0.069 dm⁶ mol⁻²", isCorrect: false },
      { text: "349 dm⁶ mol⁻²", isCorrect: false },
      { text: "1.46 dm⁶ mol⁻²", isCorrect: false }
    ],
    explanation: "* The Kc expression for the reaction is: Kc = [CH₃OH] / ([CO][H₂]²)\n* Substitute the given equilibrium concentrations: Kc = (2.6 × 10⁻⁵) / ((3.1 × 10⁻³) × (2.4 × 10⁻²)²)\n* Kc = (2.6 × 10⁻⁵) / ((3.1 × 10⁻³) × (5.76 × 10⁻⁴))\n* Kc = (2.6 × 10⁻⁵) / (1.7856 × 10⁻⁶) ≈ 14.56 dm⁶ mol⁻²"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-08",
    question: "The reaction between carbon monoxide and chlorine to form phosgene is: CO(g) + Cl₂(g) ⇌ COCl₂(g). At equilibrium, the partial pressures are: p(CO) = 2.47 × 10⁻⁸ atm, p(Cl₂) = 2.47 × 10⁻⁸ atm, and p(COCl₂) = 4.08 × 10⁻¹⁰ atm. Calculate the value and units of Kp.",
    options: [
      { text: "6.69 × 10⁵ atm⁻¹", isCorrect: true },
      { text: "1.49 × 10⁻⁶ atm⁻¹", isCorrect: false },
      { text: "6.69 × 10⁵ (no units)", isCorrect: false },
      { text: "6.69 × 10⁵ atm", isCorrect: false }
    ],
    explanation: "* Write the Kp expression: Kp = p(COCl₂) / (p(CO) × p(Cl₂))\n* Substitute the equilibrium values: Kp = (4.08 × 10⁻¹⁰) / ((2.47 × 10⁻⁸) × (2.47 × 10⁻⁸))\n* Kp = (4.08 × 10⁻¹) / (6.101 × 10⁻¹⁶) ≈ 6.69 × 10⁵\n* Determine units: atm / (atm × atm) = atm⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-09",
    question: "When chlorine gas is heated, it dissociates: Cl₂(g) ⇌ 2Cl(g). At equilibrium, the partial pressure of Cl₂(g) is 0.84 atm and Cl(g) is 0.030 atm. Determine the mole fraction of Cl(g) at equilibrium.",
    options: [
      { text: "0.034", isCorrect: true },
      { text: "0.036", isCorrect: false },
      { text: "0.966", isCorrect: false },
      { text: "0.025", isCorrect: false }
    ],
    explanation: "* Total equilibrium pressure Ptotal = p(Cl₂) + p(Cl) = 0.84 + 0.030 = 0.87 atm\n* Mole fraction χ of Cl(g) = p(Cl) / Ptotal = 0.030 / 0.87 ≈ 0.034"
  },

  // ==========================================
  // LEVEL 3: ANALYZE (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-05",
    question: "At equilibrium at 500 K and a total pressure of 200 kPa, a gaseous mixture contains 0.25 mol N₂O₄ and 0.50 mol NO₂. Calculate Kp for: N₂O₄(g) ⇌ 2NO₂(g). Give units.",
    options: [
      { text: "267 kPa", isCorrect: true },
      { text: "133 kPa", isCorrect: false },
      { text: "66.7 kPa", isCorrect: false },
      { text: "0.50 kPa", isCorrect: false }
    ],
    explanation: "* Total gaseous moles = 0.25 + 0.50 = 0.75 mol\n* Mole fractions (χ): χ(N₂O₄) = 0.25 / 0.75 = 0.333, and χ(NO₂) = 0.50 / 0.75 = 0.667\n* Partial pressures (p = χ × Ptotal): p(N₂O₄) = 0.333 × 200 = 66.7 kPa, and p(NO₂) = 0.667 × 200 = 133.3 kPa\n* Kp = p(NO₂)² / p(N₂O₄) = (133.3)² / 66.7 = 17768.9 / 66.7 ≈ 266.7 kPa\n* Units: (kPa)² / kPa = kPa"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-07",
    question: "6.0 mol of ethanoic acid and 12.5 mol of ethanol are mixed and allowed to reach equilibrium in a flask of volume V dm³. At equilibrium, 1.0 mol of ethanoic acid remains. Calculate the value of Kc for this reaction.",
    options: [
      { text: "3.33", isCorrect: true },
      { text: "0.30", isCorrect: false },
      { text: "2.50", isCorrect: false },
      { text: "1.67", isCorrect: false }
    ],
    explanation: "* Write the equation: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O\n* Set up the ICE mole calculation:\n* Initial moles: acid = 6.0, ethanol = 12.5, ester = 0, water = 0\n* Reacted moles of acid = 6.0 - 1.0 = 5.0 mol\n* Equilibrium moles: acid = 1.0, ethanol = 12.5 - 5.0 = 7.5, ester = 5.0, water = 5.0\n* Convert to concentrations: [acid] = 1/V, [ethanol] = 7.5/V, [ester] = 5/V, [water] = 5/V\n* Substitute into Kc expression: Kc = ([ester][water]) / ([acid][ethanol]) = (5/V × 5/V) / (1/V × 7.5/V) = 25 / 7.5 ≈ 3.33 (no units as volume cancels)"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-10",
    question: "Sulfur dioxide and oxygen react: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). At 700 K, Kp for the reaction is 3.00 × 10⁴ atm⁻¹. At equilibrium, the partial pressure of SO₂ is 0.100 atm and O₂ is 0.500 atm. Calculate the percentage of SO₃ present in the equilibrium mixture.",
    options: [
      { text: "95.3%", isCorrect: true },
      { text: "85.2%", isCorrect: false },
      { text: "98.1%", isCorrect: false },
      { text: "90.0%", isCorrect: false }
    ],
    explanation: "* Write the Kp expression: Kp = (p(SO₃))² / ((p(SO₂))² × p(O₂))\n* Substitute the known values: 3.00 × 10⁴ = (p(SO₃))² / ((0.100)² × 0.500)\n* 3.00 × 10⁴ = (p(SO₃))² / 0.00500\n* (p(SO₃))² = 3.00 × 10⁴ × 0.00500 = 150\n* p(SO₃) = √150 ≈ 12.25 atm\n* Total pressure = p(SO₂) + p(O₂) + p(SO₃) = 0.100 + 0.500 + 12.25 = 12.85 atm\n* Percentage of SO₃ = (12.25 / 12.85) × 100% ≈ 95.3%"
  },
  {
    id: "EDEXCEL-AL-U4-L3-EASY-20260708-11",
    question: "The reaction between carbon monoxide and hydrogen forms methanol: CO(g) + 2H₂(g) ⇌ CH₃OH(g). When the reaction is carried out at a higher temperature, the value of Kc decreases. What does this indicate about the forward reaction?",
    options: [
      { text: "The forward reaction is exothermic.", isCorrect: true },
      { text: "The forward reaction is endothermic.", isCorrect: false },
      { text: "The enthalpy change of the reaction is zero.", isCorrect: false },
      { text: "The reaction is independent of temperature changes.", isCorrect: false }
    ],
    explanation: "* An increase in temperature shifts the equilibrium in the endothermic direction to absorb heat.\n* Since Kc decreases at higher temperatures, the equilibrium must have shifted to the left (reactants side).\n* This implies the reverse reaction is endothermic, so the forward reaction must be exothermic (ΔH < 0)."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-12",
    question: "For the reversible reaction: H₂(g) + I₂(g) ⇌ 2HI(g), an equilibrium mixture contains 0.14 mol H₂ at 500 K. When repeated with the same starting amounts at 700 K, the equilibrium amount of H₂ is greater than 0.14 mol. Explain what this tells us about the reaction.",
    options: [
      { text: "The forward reaction is exothermic.", isCorrect: true },
      { text: "The forward reaction is endothermic.", isCorrect: false },
      { text: "The rate of the forward reaction decreased at 700 K.", isCorrect: false },
      { text: "The total pressure of the system decreased at 700 K.", isCorrect: false }
    ],
    explanation: "* An increase in temperature from 500 K to 700 K resulted in more H₂ (reactant) at equilibrium, indicating a shift to the left.\n* Since high temperatures favor the endothermic direction, the reverse reaction must be endothermic.\n* Thus, the forward reaction is exothermic."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-13",
    question: "For the endothermic reaction: N₂(g) + O₂(g) ⇌ 2NO(g) (ΔH is positive), the equilibrium constant Kc at 298 K is 4.8 × 10⁻³¹. Predict the change in the proportion of NO(g) present at a temperature higher than 298 K.",
    options: [
      { text: "The proportion of NO(g) increases because Kc increases at higher temperatures.", isCorrect: true },
      { text: "The proportion of NO(g) decreases because Kc decreases at higher temperatures.", isCorrect: false },
      { text: "The proportion of NO(g) remains unchanged because pressure is constant.", isCorrect: false },
      { text: "The proportion of NO(g) decreases because high temperatures favor reactants.", isCorrect: false }
    ],
    explanation: "* For an endothermic reaction, raising the temperature shifts the equilibrium position to the right (products side).\n* This shift increases the value of Kc at higher temperatures.\n* A larger Kc value corresponds to a higher ratio of products to reactants, increasing the proportion of NO(g) at equilibrium."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-14",
    question: "For the equilibrium: CO(g) + 2H₂(g) ⇌ CH₃OH(g), state the effect of increasing pressure at constant temperature on the value of Kc and the position of equilibrium.",
    options: [
      { text: "Kc is unchanged; equilibrium shifts to the right.", isCorrect: true },
      { text: "Kc increases; equilibrium shifts to the right.", isCorrect: false },
      { text: "Kc is unchanged; equilibrium shifts to the left.", isCorrect: false },
      { text: "Kc decreases; equilibrium shifts to the left.", isCorrect: false }
    ],
    explanation: "* The value of Kc is temperature-dependent only, so it remains unchanged when pressure is increased.\n* Increasing the total pressure increases the concentrations of all species.\n* Since there are 3 moles of gas on the left (reactants) and only 1 mole of gas on the right (products), the reaction quotient Qc becomes smaller than Kc.\n* The equilibrium shifts to the right (products side) to restore Qc = Kc."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-15",
    question: "Ethanoic acid and ethanol react in the presence of a sulfuric acid catalyst: CH₃COOH(l) + CH₃CH₂OH(l) ⇌ CH₃COOCH₂CH₃(l) + H₂O(l). What occurs to the equilibrium composition if more sulfuric acid is added?",
    options: [
      { text: "The equilibrium composition remains unchanged.", isCorrect: true },
      { text: "The proportion of ethyl ethanoate increases.", isCorrect: false },
      { text: "The proportion of ethanoic acid increases.", isCorrect: false },
      { text: "The reaction shifts to the left.", isCorrect: false }
    ],
    explanation: "* Sulfuric acid acts as a catalyst in this reaction.\n* A catalyst increases the rates of the forward and reverse reactions by the same factor.\n* It has no effect on the equilibrium constant or the final equilibrium composition; it only helps the system reach equilibrium faster."
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-16",
    question: "A gaseous mixture is in equilibrium: H₂(g) + I₂(g) ⇌ 2HI(g). The mixture is compressed to half its volume and left to reach equilibrium at the original temperature. Explain the effect of this compression on the composition of the mixture.",
    options: [
      { text: "The composition remains unchanged because there are equal moles of gas on both sides.", isCorrect: true },
      { text: "The proportion of HI increases because compression favors the forward direction.", isCorrect: false },
      { text: "The proportion of H₂ increases because the reaction shifts to the left.", isCorrect: false },
      { text: "The value of Kc increases because concentrations doubled.", isCorrect: false }
    ],
    explanation: "* Halving the volume doubles the concentration of all gases.\n* Substitute these doubled values into the reaction quotient expression: Qc = (2[HI])² / (2[H₂] × 2[I₂]) = 4[HI]² / 4[H₂][I₂] = Qc.\n* Because there are equal moles of gas on both sides of the equation, the concentration multiplier cancels out completely.\n* Qc remains equal to Kc, so there is no shift in equilibrium and the moles of each gas remain unchanged."
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-17",
    question: "Methane reacts with steam: CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g) (ΔH = +206 kJ mol⁻¹). At a given temperature, the equilibrium constant Kp is 8.54. Calculate the standard total entropy change (ΔStotal) for this reaction (R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "+17.8 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "-17.8 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+71.0 J K⁻¹ mol⁻¹", isCorrect: false },
      { text: "+8.54 J K⁻¹ mol⁻¹", isCorrect: false }
    ],
    explanation: "* Use the thermodynamic equation: ΔStotal = R ln Kp\n* Substitute the given values: ΔStotal = 8.31 × ln(8.54)\n* ΔStotal = 8.31 × 2.1448 ≈ +17.8 J K⁻¹ mol⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-18",
    question: "Methane reacts with steam: CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g) (ΔH = +206 kJ mol⁻¹). Standard total entropy change is +17.8 J K⁻¹ mol⁻¹. Calculate the temperature at which this reaction reaches equilibrium (ΔSsystem = +225 J K⁻¹ mol⁻¹, R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "994 K", isCorrect: true },
      { text: "916 K", isCorrect: false },
      { text: "805 K", isCorrect: false },
      { text: "1150 K", isCorrect: false }
    ],
    explanation: "* The total entropy equation is: ΔStotal = ΔSsystem + ΔSsurroundings = ΔSsystem - ΔH / T\n* Substitute the known values: 17.8 = 225 - 206000 / T\n* Rearrange to solve for T: 206000 / T = 225 - 17.8 = 207.2\n* T = 206000 / 207.2 ≈ 994 K"
  },
  {
    id: "EDEXCEL-AL-U4-L3-MEDIUM-20260708-19",
    question: "For the aqueous reaction: Fe²⁺(aq) + Ag⁺(aq) ⇌ Fe³⁺(aq) + Ag(s), the standard total entropy change is +47.64 J K⁻¹ mol⁻¹. Calculate the value of the equilibrium constant Kc at 298 K (R = 8.31 J K⁻¹ mol⁻¹).",
    options: [
      { text: "309", isCorrect: true },
      { text: "123", isCorrect: false },
      { text: "5.73", isCorrect: false },
      { text: "54", isCorrect: false }
    ],
    explanation: "* Use the rearranged equation: Kc = e^(ΔStotal / R)\n* Substitute the values: Kc = e^(47.64 / 8.31) = e^5.733\n* Kc ≈ 309"
  },
  {
    id: "EDEXCEL-AL-U4-L3-HARD-20260708-20",
    question: "For the reaction: Fe²⁺(aq) + Ag⁺(aq) ⇌ Fe³⁺(aq) + Ag(s) (ΔSsystem = -208.3 J K⁻¹ mol⁻¹, ΔStotal = +47.64 J K⁻¹ mol⁻¹ at 298 K), calculate the standard enthalpy change ΔH for this reaction in kJ mol⁻¹.",
    options: [
      { text: "-76.3 kJ mol⁻¹", isCorrect: true },
      { text: "+76.3 kJ mol⁻¹", isCorrect: false },
      { text: "-38.2 kJ mol⁻¹", isCorrect: false },
      { text: "-62.1 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "* First, find surroundings entropy: ΔStotal = ΔSsystem + ΔSsurroundings\n* +47.64 = -208.3 + ΔSsurroundings ⟹ ΔSsurroundings = +255.94 J K⁻¹ mol⁻¹\n* Use the surroundings entropy equation: ΔSsurroundings = -ΔH / T\n* +255.94 = -ΔH / 298 ⟹ ΔH = -255.94 × 298 = -76270 J mol⁻¹ ≈ -76.3 kJ mol⁻¹"
  }
];
