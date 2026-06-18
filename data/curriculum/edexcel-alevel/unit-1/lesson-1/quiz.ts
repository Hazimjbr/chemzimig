export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY - 30% / 6 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-01",
    question: "Which of the following describes the term 'relative isotopic mass'?",
    options: [
      { text: "The average mass of an atom of an element compared to 1/12th the mass of an atom of (carbon-12).", isCorrect: false },
      { text: "The mass of an atom of an isotope compared to 1/12th the mass of an atom of (carbon-12).", isCorrect: true },
      { text: "The mass of a molecule compared to 1/12th the mass of an atom of (carbon-12).", isCorrect: false },
      { text: "The sum of the number of protons and neutrons in an isotope.", isCorrect: false }
    ],
    explanation: "Relative isotopic mass is defined as the mass of an individual atom of a specific isotope relative to 1/12th of the mass of an atom of (carbon-12).\n\nOption A refers to relative atomic mass ($Ar$).\nOption C refers to relative molecular/formula mass ($Mr$)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-02",
    question: "Calculate the relative formula mass ($Mr$) of ammonium sulfate, $(\\text{NH}_4)_2\\text{SO}_4$. ($Ar$: $\\text{N}=14.0$, $\\text{H}=1.0$, $\\text{S}=32.1$, $\\text{O}=16.0$)",
    options: [
      { text: "114.1", isCorrect: false },
      { text: "132.1", isCorrect: true },
      { text: "118.1", isCorrect: false },
      { text: "148.1", isCorrect: false }
    ],
    explanation: "The formula is $(\\text{NH}_4)_2\\text{SO}_4$.\n\nCalculate the sum of all atomic masses:\n$2 \\times [\\text{N} + (4 \\times \\text{H})] + \\text{S} + (4 \\times \\text{O})$\n$= 2 \\times [14.0 + 4.0] + 32.1 + (4 \\times 16.0)$\n$= 2 \\times [18.0] + 32.1 + 64.0$\n$= 36.0 + 32.1 + 64.0$\n$= 132.1$\n\nNote: Relative formula masses ($Mr$) calculated from atomic masses given to 1 decimal place should be reported to 1 decimal place ($132.1$, which corresponds to 4 significant figures)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-03",
    question: "Calculate the number of moles present in $10.0\\text{ g}$ of calcium carbonate, $\\text{CaCO}_3$. ($Mr = 100.1$)",
    options: [
      { text: "0.100 mol", isCorrect: true },
      { text: "1.00 mol", isCorrect: false },
      { text: "10.0 mol", isCorrect: false },
      { text: "0.0999 mol", isCorrect: false }
    ],
    explanation: "Use the formula $n = \\frac{m}{Mr}$:\n$n = \\frac{10.0\\text{ g}}{100.1\\text{ g mol}^{-1}}$\n$n = 0.099900099...\\text{ mol}$\n\nIn Edexcel exams, the final answer must match the number of significant figures of the least precise starting value.\nHere, $10.0\\text{ g}$ is given to 3 significant figures.\nRounding the final answer to 3 significant figures gives $0.100\\text{ mol}$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-04",
    question: "How many moles of solute are dissolved in $250.0\\text{ cm}^3$ of a $0.200\\text{ mol dm}^{-3}$ solution of sodium hydroxide, $\\text{NaOH}$?",
    options: [
      { text: "0.0500 mol", isCorrect: true },
      { text: "0.500 mol", isCorrect: false },
      { text: "0.050 mol", isCorrect: false },
      { text: "0.0800 mol", isCorrect: false }
    ],
    explanation: "Use the formula $n = C \\times V$:\n\nFirst, convert the volume to $\\text{dm}^3$:\n$V = \\frac{250.0}{1000} = 0.2500\\text{ dm}^3$\n\nNow calculate moles:\n$n = 0.200\\text{ mol dm}^{-3} \\times 0.2500\\text{ dm}^3$\n$n = 0.0500\\text{ mol}$\n\nThe initial concentration ($0.200\\text{ mol dm}^{-3}$) and volume ($250.0\\text{ cm}^3$) both have at least 3 significant figures.\nTherefore, the final answer must be quoted to 3 significant figures, which is $0.0500\\text{ mol}$ (not just $0.050$ or $0.05$)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-05",
    question: "Which of the following gases contains the fewest moles in a sample of exactly $1.00\\text{ g}$ of the substance?",
    options: [
      { text: "Helium, He", isCorrect: false },
      { text: "Methane, CH₄", isCorrect: false },
      { text: "Oxygen, O₂", isCorrect: false },
      { text: "Carbon dioxide, CO₂", isCorrect: true }
    ],
    explanation: "The formula is $n = \\frac{m}{Mr}$.\n\nFor a constant mass of $1.00\\text{ g}$ (3 significant figures), the gas with the largest molar mass ($Mr$) will have the fewest moles ($n$):\n\n$Mr(\\text{He}) = 4.0$\n$Mr(\\text{CH}_4) = 16.0$\n$Mr(\\text{O}_2) = 32.0$\n$Mr(\\text{CO}_2) = 44.0$\n\nSince $\\text{CO}_2$ has the highest molar mass, it yields the smallest number of moles: \n$n(\\text{CO}_2) = \\frac{1.00}{44.0} = 0.0227\\text{ mol}$ (rounded to 3 significant figures)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-EASY-20260618-06",
    question: "Calculate the mass of copper required to react completely with silver nitrate to produce $5.40\\text{ g}$ of silver according to the equation:\n$$\\text{Cu(s)} + 2\\text{AgNO}_3\\text{(aq)} \\rightarrow \\text{Cu(NO}_3)_2\\text{(aq)} + 2\\text{Ag(s)}$$\n($Ar$: $\\text{Cu}=63.5$, $\\text{Ag}=107.9$)",
    options: [
      { text: "1.59 g", isCorrect: true },
      { text: "3.18 g", isCorrect: false },
      { text: "1.588 g", isCorrect: false },
      { text: "0.794 g", isCorrect: false }
    ],
    explanation: "First, find the moles of silver produced:\n$n(\\text{Ag}) = \\frac{5.40}{107.9} = 0.050046...\\text{ mol}$\n\nFrom the balanced equation, the mole ratio of $\\text{Cu} : \\text{Ag}$ is $1 : 2$.\n\nCalculate moles of copper needed (keep the unrounded value in your calculator):\n$n(\\text{Cu}) = \\frac{0.050046...}{2} = 0.025023...\\text{ mol}$\n\nNow calculate mass of copper:\n$m(\\text{Cu}) = 0.025023... \\times 63.5 = 1.58896...\\text{ g}$\n\nSince the starting mass ($5.40\\text{ g}$) and $Ar$ values have 3 significant figures, round the final answer to 3 significant figures:\n$m(\\text{Cu}) = 1.59\\text{ g}$"
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM - 30% / 6 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-07",
    question: "The mass spectrum of a sample of element $X$ is shown below:\n\n$$\\begin{array}{c|c} \\text{m/z Ratio} & \\text{Relative Abundance (\\%)} \\\\ \\hline 24 & 79.0 \\\\ 25 & 10.0 \\\\ 26 & 11.0 \\end{array}$$\n\nCalculate the relative atomic mass of $X$ to 3 significant figures and identify the element.",
    options: [
      { text: "24.3 (Magnesium, Mg)", isCorrect: true },
      { text: "24.0 (Magnesium, Mg)", isCorrect: false },
      { text: "25.2 (Sodium, Na)", isCorrect: false },
      { text: "24.3 (Sodium, Na)", isCorrect: false }
    ],
    explanation: "Use the formula for Relative Atomic Mass ($Ar$):\n$Ar = \\frac{\\sum (\\text{isotopic mass} \\times \\text{abundance})}{\\text{total abundance}}$\n\nSubstitute the values from the table:\n$Ar = \\frac{(24 \\times 79.0) + (25 \\times 10.0) + (26 \\times 11.0)}{100}$\n$Ar = \\frac{1896 + 250 + 286}{100} = \\frac{2432}{100} = 24.32$\n\nTo 3 significant figures (matching the precision of the abundances given as $79.0\\%$, $10.0\\%$, and $11.0\\%$), $Ar = 24.3$.\n\nLooking at the periodic table, the element with $Ar = 24.3$ is Magnesium (Mg)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-08",
    question: "Calculate the total number of ions present in $2.65\\text{ g}$ of anhydrous sodium carbonate, $\\text{Na}_2\\text{CO}_3$. ($Mr(\\text{Na}_2\\text{CO}_3) = 106.0$, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)",
    options: [
      { text: "4.52 × 10²² ions", isCorrect: true },
      { text: "1.51 × 10²² ions", isCorrect: false },
      { text: "3.01 × 10²² ions", isCorrect: false },
      { text: "9.03 × 10²² ions", isCorrect: false }
    ],
    explanation: "First, calculate the number of moles of sodium carbonate:\n$n = \\frac{\\text{mass}}{Mr} = \\frac{2.65}{106.0} = 0.0250\\text{ mol}$\n\nEach formula unit of $\\text{Na}_2\\text{CO}_3$ dissociates into 3 ions:\n$\\text{Na}_2\\text{CO}_3 \\rightarrow 2\\text{Na}^+ + \\text{CO}_3^{2-}$\n\nSo, the total moles of ions is:\n$0.0250 \\times 3 = 0.0750\\text{ mol of ions}$\n\nNow calculate the number of ions using Avogadro's constant ($L$):\n$\\text{Number of ions} = 0.0750 \\times 6.02 \\times 10^{23} = 4.515 \\times 10^{22}\\text{ ions}$\n\nRounding to 3 significant figures (since $2.65\\text{ g}$ is given to 3 significant figures):\n$\\text{Number of ions} = 4.52 \\times 10^{22}\\text{ ions}$"
  },
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-09",
    question: "A volatile organic liquid with a mass of $0.346\\text{ g}$ was vaporized at a temperature of $67.0^\\circ\\text{C}$ and a pressure of $100.0\\text{ kPa}$. The volume of gas produced was $95.0\\text{ cm}^3$. Calculate the relative molecular mass ($Mr$) of the compound to 3 significant figures. ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)",
    options: [
      { text: "103", isCorrect: true },
      { text: "102.9", isCorrect: false },
      { text: "87.8", isCorrect: false },
      { text: "43.9", isCorrect: false }
    ],
    explanation: "Use the ideal gas equation $pV = nRT$ to find the moles ($n$):\n$n = \\frac{pV}{RT}$\n\nConvert units to SI base units:\n$p = 100.0\\text{ kPa} = 100{,}000\\text{ Pa}$ (4 significant figures)\n$V = 95.0\\text{ cm}^3 = 95.0 \\times 10^{-6}\\text{ m}^3$ (3 significant figures)\n$T = 67.0 + 273 = 340\\text{ K}$ (reported to 3 significant figures to match Edexcel conventions)\n\nSubstitute values without rounding:\n$n = \\frac{100{,}000 \\times 95.0 \\times 10^{-6}}{8.31 \\times 340}$\n$n = \\frac{9.50}{2825.4} = 0.00336235...\\text{ mol}$\n\nNow calculate the relative molecular mass ($Mr$):\n$Mr = \\frac{\\text{mass}}{n} = \\frac{0.346}{0.00336235...} = 102.904...$\n\nSince the starting values ($0.346\\text{ g}$ and $95.0\\text{ cm}^3$) are given to 3 significant figures, we round our final answer to 3 significant figures:\n$Mr = 103$ (represented as an integer since relative molecular mass does not carry units)."
  },
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-10",
    question: "A student diluted $25.0\\text{ cm}^3$ of $0.500\\text{ mol dm}^{-3}$ hydrochloric acid to a total volume of $250.0\\text{ cm}^3$ using distilled water. Calculate the concentration of the diluted acid to the correct number of significant figures.",
    options: [
      { text: "0.0500 mol dm⁻³", isCorrect: true },
      { text: "0.050 mol dm⁻³", isCorrect: false },
      { text: "0.05 mol dm⁻³", isCorrect: false },
      { text: "0.100 mol dm⁻³", isCorrect: false }
    ],
    explanation: "First, calculate the number of moles of solute in the initial solution:\n$n = C \\times V = 0.500\\text{ mol dm}^{-3} \\times \\frac{25.0}{1000}\\text{ dm}^3 = 0.0125\\text{ mol}$\n\nAfter dilution, the total volume is $250.0\\text{ cm}^3$ ($0.2500\\text{ dm}^3$):\n\nCalculate the new concentration:\n$C = \\frac{n}{V} = \\frac{0.0125\\text{ mol}}{0.2500\\text{ dm}^3} = 0.0500\\text{ mol dm}^{-3}$\n\nSince all values in the question ($25.0\\text{ cm}^3$, $0.500\\text{ mol dm}^{-3}$, and $250.0\\text{ cm}^3$) have at least 3 significant figures, the final concentration must be reported to 3 significant figures:\n$C = 0.0500\\text{ mol dm}^{-3}$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-11",
    question: "A student heated a hydrated magnesium sulfate sample in a crucible to determine its water of crystallization. The experimental results are shown in the table below:\n\n$$\\begin{array}{l|c} \\text{Measurement} & \\text{Mass (g)} \\\\ \\hline \\text{Mass of empty crucible} & 18.20 \\\\ \\text{Mass of crucible + hydrated salt} & 23.12 \\\\ \\text{Mass of crucible + anhydrous salt} & 20.60 \\end{array}$$\n\nUse this data to calculate the value of $x$ in $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$. ($Mr(\\text{MgSO}_4) = 120.0$, $Mr(\\text{H}_2\\text{O}) = 18.0$)",
    options: [
      { text: "7", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "5", isCorrect: false },
      { text: "10", isCorrect: false }
    ],
    explanation: "First, find the mass of the anhydrous salt:\n$\\text{Mass of } \\text{MgSO}_4 = 20.60 - 18.20 = 2.40\\text{ g}$ (3 significant figures)\n\nNext, find the mass of water lost:\n$\\text{Mass of water} = 23.12 - 20.60 = 2.52\\text{ g}$ (3 significant figures)\n\nCalculate the moles of anhydrous $\\text{MgSO}_4$:\n$n(\\text{MgSO}_4) = \\frac{2.40}{120.0} = 0.0200\\text{ mol}$ (3 significant figures)\n\nCalculate the moles of water:\n$n(\\text{H}_2\\text{O}) = \\frac{2.52}{18.0} = 0.140\\text{ mol}$ (3 significant figures)\n\nDivide both by the smallest mole value ($0.0200$):\n$\\text{Ratio} = \\frac{0.140}{0.0200} = 7.00$\n\nTherefore, the value of $x$ is the integer $7$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-MEDIUM-20260618-12",
    question: "Calculate the volume of carbon dioxide gas, in $\\text{dm}^3$, produced at room temperature and pressure (r.t.p.) when $5.00\\text{ g}$ of calcium carbonate reacts completely with excess hydrochloric acid.\n$$\\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$\n(Molar volume of gas at r.t.p. $= 24.0\\text{ dm}^3\\text{ mol}^{-1}$, $Mr(\\text{CaCO}_3) = 100.1$)",
    options: [
      { text: "1.20 dm³", isCorrect: true },
      { text: "2.40 dm³", isCorrect: false },
      { text: "1.2 dm³", isCorrect: false },
      { text: "1.200 dm³", isCorrect: false }
    ],
    explanation: "First, find the moles of $\\text{CaCO}_3$ reacting:\n$n(\\text{CaCO}_3) = \\frac{5.00\\text{ g}}{100.1\\text{ g mol}^{-1}} = 0.04995...\\text{ mol}$\n\nThe equation shows a $1:1$ mole ratio between $\\text{CaCO}_3$ and $\\text{CO}_2$.\n\nCalculate the moles of $\\text{CO}_2$ produced (unrounded):\n$n(\\text{CO}_2) = 0.04995...\\text{ mol}$\n\nNow calculate the volume of gas:\n$V = 0.04995... \\times 24.0 = 1.1988\\text{ dm}^3$\n\nSince the starting mass ($5.00\\text{ g}$) and molar volume ($24.0\\text{ dm}^3\\text{ mol}^{-1}$) have 3 significant figures, round the final answer to 3 significant figures:\n$V = 1.20\\text{ dm}^3$."
  },

  // ==========================================
  // LEVEL 3: CHALLENGE & UPPER LEVEL (HARD - 40% / 8 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-13",
    question: "A $2.00\\text{ g}$ sample of a mixture of copper(II) carbonate and copper(II) oxide was reacted with excess dilute hydrochloric acid. Only the carbonate reacts to produce $\\text{CO}_2$. The volume of carbon dioxide gas collected was $240.0\\text{ cm}^3$ at r.t.p. Calculate the percentage by mass of copper(II) carbonate in the mixture to 3 significant figures. ($Mr(\\text{CuCO}_3) = 123.5$, Molar volume at r.t.p. $= 24.0\\text{ dm}^3\\text{ mol}^{-1}$)",
    options: [
      { text: "61.8%", isCorrect: true },
      { text: "30.9%", isCorrect: false },
      { text: "61.75%", isCorrect: false },
      { text: "75.0%", isCorrect: false }
    ],
    explanation: "The equation for the reaction is:\n$$\\text{CuCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CuCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$\n\nFirst, calculate the moles of $\\text{CO}_2$ collected:\n$V(\\text{CO}_2) = 240.0\\text{ cm}^3 = 0.2400\\text{ dm}^3$\n$n(\\text{CO}_2) = \\frac{0.2400}{24.0} = 0.01000\\text{ mol}$\n\nFrom the stoichiometry, the moles of $\\text{CuCO}_3$ is also $0.01000\\text{ mol}$.\n\nCalculate the mass of $\\text{CuCO}_3$ in the sample:\n$m(\\text{CuCO}_3) = 0.01000 \\times 123.5 = 1.235\\text{ g}$\n\nCalculate the percentage by mass:\n$\\text{Percentage} = \\frac{1.235}{2.00} \\times 100 = 61.75\\%$\n\nSince the least precise starting number ($2.00\\text{ g}$) has 3 significant figures, we must report the final answer to 3 significant figures:\n$\\text{Percentage} = 61.8\\%$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-14",
    question: "A solution is made by mixing $50.0\\text{ cm}^3$ of $0.200\\text{ mol dm}^{-3}$ barium chloride solution with $150.0\\text{ cm}^3$ of $0.100\\text{ mol dm}^{-3}$ sodium sulfate solution. Barium sulfate precipitates out of the mixture. Calculate the concentration of the remaining sodium ions in the solution, assuming volumes are additive. Report your answer to 3 significant figures.",
    options: [
      { text: "0.150 mol dm⁻³", isCorrect: true },
      { text: "0.0750 mol dm⁻³", isCorrect: false },
      { text: "0.100 mol dm⁻³", isCorrect: false },
      { text: "0.200 mol dm⁻³", isCorrect: false }
    ],
    explanation: "First, identify the spectator ions that do not precipitate. Barium sulfate ($\\text{BaSO}_4$) is insoluble, so $\\text{Na}^+$ ions remain entirely in the solution as spectator ions.\n\nSince $\\text{Na}^+$ does not participate in the reaction, we can solve this simply as a dilution problem:\n\nInitial volume of $\\text{Na}_2\\text{SO}_4$ solution: $V_1 = 150.0\\text{ cm}^3 = 0.1500\\text{ dm}^3$\nInitial concentration of $\\text{Na}_2\\text{SO}_4$ solution: $C(\\text{Na}_2\\text{SO}_4) = 0.100\\text{ mol dm}^{-3}$\n\nEach formula unit of $\\text{Na}_2\\text{SO}_4$ contains 2 sodium ions:\n$C_1(\\text{Na}^+) = 0.100 \\times 2 = 0.200\\text{ mol dm}^{-3}$\n\nNow, calculate the final total volume of the mixture:\n$V_2 = 50.0\\text{ cm}^3 + 150.0\\text{ cm}^3 = 200.0\\text{ cm}^3 = 0.2000\\text{ dm}^3$\n\nUsing the dilution formula $C_1 V_1 = C_2 V_2$, solve for the final concentration $C_2$:\n$C_2 = \\frac{C_1 \\times V_1}{V_2}$\n$C_2 = \\frac{0.200\\text{ mol dm}^{-3} \\times 0.1500\\text{ dm}^3}{0.2000\\text{ dm}^3} = 0.150\\text{ mol dm}^{-3}$\n\nSince all values are given to 3 significant figures, the final concentration is reported as $0.150\\text{ mol dm}^{-3}$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-15",
    question: "An oxide of iron contains $72.3\\%$ iron and $27.7\\%$ oxygen by mass. What is the empirical formula of this iron oxide? ($Ar$: $\\text{Fe}=55.8$, $\\text{O}=16.0$)",
    options: [
      { text: "Fe₃O₄", isCorrect: true },
      { text: "FeO", isCorrect: false },
      { text: "Fe₂O₃", isCorrect: false },
      { text: "Fe₄O₅", isCorrect: false }
    ],
    explanation: "Step 1: Divide the percentage of each element by its relative atomic mass (using the 3 significant figures from the percentages):\n\nFor Fe: $\\frac{72.3}{55.8} = 1.2956...\\text{ mol}$\nFor O: $\\frac{27.7}{16.0} = 1.7312...\\text{ mol}$\n\nStep 2: Divide both values by the smaller number to find the ratio (do not round intermediate values):\n\nFe: $\\frac{1.2956...}{1.2956...} = 1$\nO: $\\frac{1.7312...}{1.2956...} = 1.336... \\approx 1\\frac{1}{3}$\n\nStep 3: Multiply by 3 to convert to whole integers:\n\nFe: $1 \\times 3 = 3$\nO: $\\frac{4}{3} \\times 3 = 4$\n\nTherefore, the empirical formula is $\\text{Fe}_3\\text{O}_4$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-16",
    question: "A sample of gas with a mass of $0.100\\text{ g}$ occupies a volume of $83.1\\text{ cm}^3$ at a temperature of $27.0^\\circ\\text{C}$ and a pressure of $1.00 \\times 10^5\\text{ Pa}$. A change in temperature causes the gas volume to double while the pressure is reduced to $4.00 \\times 10^4\\text{ Pa}$. Calculate the new temperature of the gas to 3 significant figures.",
    options: [
      { text: "240 K", isCorrect: true },
      { text: "480 K", isCorrect: false },
      { text: "120 K", isCorrect: false },
      { text: "300 K", isCorrect: false }
    ],
    explanation: "Use the combined gas law relation derived from $\\frac{pV}{T} = \\text{constant}$:\n$$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$$\n\nFirst, convert the initial temperature to Kelvin:\n$T_1 = 27.0 + 273 = 300\\text{ K}$\n\nSubstitute the known relationships into the equation, where $V_2 = 2V_1$:\n$$\\frac{1.00 \\times 10^5 \\times V_1}{300} = \\frac{4.00 \\times 10^4 \\times 2V_1}{T_2}$$\n\nCancel $V_1$ from both sides:\n$$\\frac{1.00 \\times 10^5}{300} = \\frac{8.00 \\times 10^4}{T_2}$$\n\nSolve for $T_2$:\n$$T_2 = \\frac{8.00 \\times 10^4 \\times 300}{1.00 \\times 10^5}$$\n$$T_2 = 240\\text{ K}$$\n\nSince all key initial parameters ($0.100\\text{ g}$, $83.1\\text{ cm}^3$, $27.0^\\circ\\text{C}$, $1.00 \\times 10^5\\text{ Pa}$, and $4.00 \\times 10^4\\text{ Pa}$) are specified to 3 significant figures, the final temperature must be reported to 3 significant figures:\n$$T_2 = 240\\text{ K}$$"
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-17",
    question: "Titanium is extracted from titanium(IV) chloride by reaction with sodium according to the equation:\n$$\\text{TiCl}_4\\text{(l)} + 4\\text{Na(s)} \\rightarrow \\text{Ti(s)} + 4\\text{NaCl(s)}$$\nIn an experiment, $9.50\\text{ g}$ of $\\text{TiCl}_4$ is reacted with $4.60\\text{ g}$ of sodium. Calculate the maximum theoretical yield of titanium to 3 significant figures. ($Ar$: $\\text{Na}=23.0$, $\\text{Ti}=47.9$, $\\text{Cl}=35.5$)",
    options: [
      { text: "2.40 g", isCorrect: true },
      { text: "4.80 g", isCorrect: false },
      { text: "2.396 g", isCorrect: false },
      { text: "1.20 g", isCorrect: false }
    ],
    explanation: "First, find the moles of each reactant to determine the limiting reagent:\n\n$Mr(\\text{TiCl}_4) = 47.9 + (4 \\times 35.5) = 189.9$\n$n(\\text{TiCl}_4) = \\frac{9.50}{189.9} = 0.050026...\\text{ mol}$\n\n$n(\\text{Na}) = \\frac{4.60}{23.0} = 0.2000...\\text{ mol}$\n\nCheck stoichiometric requirements:\nOne mole of $\\text{TiCl}_4$ requires 4 moles of $\\text{Na}$.\n$0.050026...\\text{ mol of } \\text{TiCl}_4$ requires exactly $0.050026... \\times 4 = 0.2001...\\text{ mol of } \\text{Na}$.\n\nComparing the moles of $\\text{Na}$ required ($0.2001...\\text{ mol}$) with the actual moles of $\\text{Na}$ available ($0.2000\\text{ mol}$), we find that sodium ($\\text{Na}$) is in very slight deficit (the limiting reagent).\n\nThe moles of titanium produced is determined by the limiting reagent ($\\text{Na}$):\n$n(\\text{Ti}) = \\frac{n(\\text{Na})}{4} = \\frac{0.2000}{4} = 0.05000\\text{ mol}$\n\nCalculate the mass of titanium:\n$m = 0.05000 \\times 47.9 = 2.395\\text{ g}$\n\nSince the starting masses ($9.50\\text{ g}$ and $4.60\\text{ g}$) have 3 significant figures, the final answer must be rounded to 3 significant figures:\n$m = 2.40\\text{ g}$"
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-18",
    question: "A student performs a titration using $25.00\\text{ cm}^3$ of an unknown monoprotic acid ($\\text{HA}$) and finds that it requires exactly $20.00\\text{ cm}^3$ of $0.125\\text{ mol dm}^{-3}$ barium hydroxide, $\\text{Ba(OH)}_2$, for complete neutralization. Calculate the concentration of the acid to the correct number of significant figures. \n$$\\text{Ba(OH)}_2\\text{(aq)} + 2\\text{HA(aq)} \\rightarrow \\text{BaA}_2\\text{(aq)} + 2\\text{H}_2\\text{O(l)}$$",
    options: [
      { text: "0.200 mol dm⁻³", isCorrect: true },
      { text: "0.100 mol dm⁻³", isCorrect: false },
      { text: "0.20 mol dm⁻³", isCorrect: false },
      { text: "0.400 text{ mol dm}^{-3}", isCorrect: false }
    ],
    explanation: "First, calculate the moles of barium hydroxide used:\n$n(\\text{Ba(OH)}_2) = C \\times V = 0.125\\text{ mol dm}^{-3} \\times \\frac{20.00}{1000}\\text{ dm}^3 = 0.002500\\text{ mol}$\n\nAccording to the equation, the mole ratio of $\\text{Ba(OH)}_2 : \\text{HA}$ is $1 : 2$.\n\nCalculate the moles of the acid neutralized:\n$n(\\text{HA}) = 2 \\times 0.002500 = 0.005000\\text{ mol}$\n\nCalculate the concentration of the acid:\n$C = \\frac{n}{V} = \\frac{0.005000\\text{ mol}}{0.02500\\text{ dm}^3} = 0.2000\\text{ mol dm}^{-3}$\n\nSince the concentration of the barium hydroxide ($0.125\\text{ mol dm}^{-3}$) has 3 significant figures, the final concentration of the acid must also be reported to 3 significant figures:\n$C = 0.200\\text{ mol dm}^{-3}$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-19",
    question: "Calculate the atom economy for the production of iron from iron(III) oxide by reaction with carbon monoxide according to the equation:\n$$\\text{Fe}_2\\text{O}_3\\text{(s)} + 3\\text{CO(g)} \\rightarrow 2\\text{Fe(s)} + 3\\text{CO}_2\\text{(g)}$$\n($Ar$: $\\text{Fe}=55.8$, $\\text{O}=16.0$, $\\text{C}=12.0$). Report your final answer to 3 significant figures.",
    options: [
      { text: "45.8%", isCorrect: true },
      { text: "54.2%", isCorrect: false },
      { text: "45.81%", isCorrect: false },
      { text: "91.6%", isCorrect: false }
    ],
    explanation: "Use the atom economy formula:\n$$\\text{Atom Economy} = \\frac{\\text{Total } Mr \\text{ of Desired Products}}{\\text{Total } Mr \\text{ of All Reactants}} \\times 100$$\n\nDesired product is Iron ($2\\text{Fe}$):\n$Mr(\\text{Desired}) = 2 \\times 55.8 = 111.6$\n\nReactants are $\\text{Fe}_2\\text{O}_3$ and $3\\text{CO}$:\n$Mr(\\text{Fe}_2\\text{O}_3) = (2 \\times 55.8) + (3 \\times 16.0) = 111.6 + 48.0 = 159.6$\n$Mr(3\\text{CO}) = 3 \\times (12.0 + 16.0) = 3 \\times 28.0 = 84.0$\nTotal mass of reactants $= 159.6 + 84.0 = 243.6$\n\nCalculate the atom economy:\n$$\\text{Atom Economy} = \\frac{111.6}{243.6} \\times 100 = 45.8128...\\%$$\n\nRounding to 3 significant figures gives $45.8\\%$."
  },
  {
    id: "EDEXCEL-AL-U1-L1-HARD-20260618-20",
    question: "A heating curve showing the mass loss of a hydrated cobalt(II) chloride sample over time is represented by the sequence of data below:\n\n$$\\begin{array}{l|c} \\text{Time of Heating (minutes)} & \\text{Mass of Anhydrous Salt Remaining (g)} \\\\ \\hline 0 & 4.76 \\\\ 5 & 3.80 \\\\ 10 & 2.95 \\\\ 15 & 2.60 \\\\ 20 & 2.60 \\end{array}$$\n\nGiven the starting formula was $M\\text{Cl}_2 \\cdot 6\\text{H}_2\\text{O}$, calculate the atomic mass of metal $M$ once constant mass is achieved at 15-20 minutes, and identify the transition metal $M$. ($Ar$: $\\text{Cl}=35.5$, $\\text{H}=1.0$, $\\text{O}=16.0$)",
    options: [
      { text: "59.0 (Cobalt, Co)", isCorrect: true },
      { text: "63.5 (Copper, Cu)", isCorrect: false },
      { text: "55.8 (Iron, Fe)", isCorrect: false },
      { text: "58.7 (Nickel, Ni)", isCorrect: false }
    ],
    explanation: "Looking at the data in the table, the heating reaches a constant mass of $2.60\\text{ g}$ at 15 minutes (verified at 20 minutes).\n\nFirst, find the mass of water lost:\n$\\text{Mass of water} = 4.76 - 2.60 = 2.16\\text{ g}$ (3 significant figures)\n\nCalculate the moles of water:\n$n(\\text{H}_2\\text{O}) = \\frac{2.16}{18.0} = 0.120\\text{ mol}$ (3 significant figures)\n\nFrom the formula $M\\text{Cl}_2 \\cdot 6\\text{H}_2\\text{O}$, the ratio of anhydrous salt to water is $1 : 6$.\n\nCalculate the moles of the anhydrous salt:\n$n(M\\text{Cl}_2) = \\frac{0.120}{6} = 0.0200\\text{ mol}$ (3 significant figures)\n\nCalculate the molar mass ($Mr$) of $M\\text{Cl}_2$:\n$Mr(M\\text{Cl}_2) = \\frac{\\text{mass}}{n} = \\frac{2.60\\text{ g}}{0.0200\\text{ mol}} = 130.0\\text{ g mol}^{-1}$ (4 significant figures)\n\nCalculate the atomic mass of metal $M$:\n$Ar(M) + (2 \\times 35.5) = 130.0$\n$Ar(M) + 71.0 = 130.0$\n$Ar(M) = 59.0$ (reported to 3 significant figures, matching the starting mass inputs)\n\nCobalt has an atomic mass of $58.9 \\approx 59.0$, which matches transition metal $M$."
  }
];
