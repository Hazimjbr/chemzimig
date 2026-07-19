import { Question } from "./types";

export const questionBank: Question[] = [
  // States of Matter
  {
    id: "q_som_1-20260106",
    question: "Which of the following describes the changes in arrangement and movement of particles when a liquid becomes a gas?",
    options: [
      { text: "Particles become closer together and move more slowly." },
      { text: "Particles become further apart and move more slowly." },
      { text: "Particles become closer together and move more freely." },
      { text: "Particles become further apart and move more freely." }
    ],
    correctAnswer: 3,
    explanation: "When a liquid turns into a gas (boiling/evaporation), the particles gain kinetic energy, overcome intermolecular forces, move further apart, and move more freely.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_som_2-20260106",
    question: "In which state of matter are the particles arranged in a regular, repeating pattern?",
    options: [
      { text: "Solid" },
      { text: "Liquid" },
      { text: "Gas" },
      { text: "Plasma" }
    ],
    correctAnswer: 0,
    explanation: "In a solid, particles are closely packed in a regular lattice arrangement and vibrate about fixed positions.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Atoms, Elements, and Compounds
  {
    id: "q_aec_1-20260106",
    question: "An atom has 11 protons, 12 neutrons, and 11 electrons. What is the nucleon number (mass number) of this atom?",
    options: [
      { text: "11" },
      { text: "12" },
      { text: "22" },
      { text: "23" }
    ],
    correctAnswer: 3,
    explanation: "The nucleon number (mass number) is the sum of protons and neutrons. $11 + 12 = 23$.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_aec_2-20260106",
    question: "Which type of bonding involves the sharing of electron pairs between non-metal atoms?",
    options: [
      { text: "Ionic bonding" },
      { text: "Covalent bonding" },
      { text: "Metallic bonding" },
      { text: "Hydrogen bonding" }
    ],
    correctAnswer: 1,
    explanation: "Covalent bonding occurs when non-metal atoms share pairs of electrons to achieve a full outer shell.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Stoichiometry
  {
    id: "q_stc_1-20260106",
    question: "What is the relative formula mass ($M_r$) of carbon dioxide ($CO_2$)? (Relative atomic masses: $C = 12$, $O = 16$)",
    options: [
      { text: "28" },
      { text: "32" },
      { text: "44" },
      { text: "56" }
    ],
    correctAnswer: 2,
    explanation: "The $M_r$ of $CO_2$ is calculated as: $12 + (2 \\times 16) = 12 + 32 = 44$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_stc_2-20260106",
    question: "How many moles of water ($H_2O$) are present in $36\\text{ g}$ of water? ($M_r$ of $H_2O = 18$)",
    options: [
      { text: "0.5 moles" },
      { text: "1 mole" },
      { text: "2 moles" },
      { text: "4 moles" }
    ],
    correctAnswer: 2,
    explanation: "$\\text{Moles} = \\frac{\\text{mass}}{M_r} = \\frac{36}{18} = 2\\text{ moles}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Electrochemistry
  {
    id: "q_elc_1-20260106",
    question: "During the electrolysis of molten lead(II) bromide, what is produced at the cathode (negative electrode)?",
    options: [
      { text: "Lead metal" },
      { text: "Bromine gas" },
      { text: "Hydrogen gas" },
      { text: "Oxygen gas" }
    ],
    correctAnswer: 0,
    explanation: "In molten lead(II) bromide ($PbBr_2$), the positive $Pb^{2+}$ ions are attracted to the cathode where they gain electrons to form lead metal ($Pb$).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemical Energetics
  {
    id: "q_ce_1-20260106",
    question: "Which statement about an exothermic reaction is correct?",
    options: [
      { text: "Energy is taken in from the surroundings and the temperature decreases." },
      { text: "Energy is given out to the surroundings and the temperature decreases." },
      { text: "Energy is taken in from the surroundings and the temperature increases." },
      { text: "Energy is given out to the surroundings and the temperature increases." }
    ],
    correctAnswer: 3,
    explanation: "In an exothermic reaction, thermal energy is transferred to the surroundings, causing the temperature of the reaction mixture and surroundings to increase.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemical Reactions
  {
    id: "q_cr_1-20260106",
    question: "Which change will increase the rate of reaction between a solid piece of marble (calcium carbonate) and hydrochloric acid?",
    options: [
      { text: "Using a larger piece of marble with the same total mass" },
      { text: "Decreasing the temperature of the acid" },
      { text: "Crushing the marble into smaller pieces" },
      { text: "Decreasing the concentration of the acid" }
    ],
    correctAnswer: 2,
    explanation: "Crushing the solid increases its surface area, allowing more frequent collisions between reacting particles, which increases the rate of reaction.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Acids, Bases and Salts
  {
    id: "q_abs_1-20260106",
    question: "Which ion is present in all aqueous acidic solutions?",
    options: [
      { text: "Hydroxide ion ($OH^-$)" },
      { text: "Hydrogen ion ($H^+$)" },
      { text: "Chloride ion ($Cl^-$)" },
      { text: "Sodium ion ($Na^+$)" }
    ],
    correctAnswer: 1,
    explanation: "Acids release hydrogen ions ($H^+$) when dissolved in water.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // The Periodic Table
  {
    id: "q_pt_1-20260106",
    question: "As you move down Group VII (the halogens) of the Periodic Table, what happens to their reactivity?",
    options: [
      { text: "It increases." },
      { text: "It decreases." },
      { text: "It remains the same." },
      { text: "They become unreactive." }
    ],
    correctAnswer: 1,
    explanation: "As you go down Group VII, the atoms become larger, and the outer electron shell is further from the nucleus. This makes it harder for the atom to gain an extra electron, so reactivity decreases.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Metals
  {
    id: "q_met_1-20260106",
    question: "Which of the following metals is extracted from its ore by heating with carbon?",
    options: [
      { text: "Aluminium" },
      { text: "Sodium" },
      { text: "Iron" },
      { text: "Potassium" }
    ],
    correctAnswer: 2,
    explanation: "Iron is less reactive than carbon, so it can be extracted from iron(III) oxide by reduction with carbon in a blast furnace. Metals more reactive than carbon (like Al, Na, K) require electrolysis.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemistry of the Environment
  {
    id: "q_env_1-20260106",
    question: "Which gas is the main component of clean, dry air?",
    options: [
      { text: "Oxygen" },
      { text: "Carbon dioxide" },
      { text: "Nitrogen" },
      { text: "Argon" }
    ],
    correctAnswer: 2,
    explanation: "Clean, dry air consists of approximately 78% nitrogen, 21% oxygen, with small amounts of argon, carbon dioxide, and other gases.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Organic Chemistry
  {
    id: "q_org_1-20260106",
    question: "What is the general formula for alkanes?",
    options: [
      { text: "$C_nH_{2n}$" },
      { text: "$C_nH_{2n+2}$" },
      { text: "$C_nH_{2n-2}$" },
      { text: "$C_nH_{2n+1}OH$" }
    ],
    correctAnswer: 1,
    explanation: "Alkanes are saturated hydrocarbons with the general formula $C_nH_{2n+2}$.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Experimental Techniques
  {
    id: "q_exp_1-20260106",
    question: "Which separation technique is most suitable for obtaining pure water from seawater?",
    options: [
      { text: "Filtration" },
      { text: "Crystallisation" },
      { text: "Simple distillation" },
      { text: "Fractional distillation" }
    ],
    correctAnswer: 2,
    explanation: "Simple distillation separates a solvent (water) from a solution (seawater) because water has a much lower boiling point than dissolved salts.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
];

// More States of Matter Questions
questionBank.push(
  {
    id: "q_som_3-20260106",
    question: "Which process describes a gas changing directly into a solid?",
    options: [
      { text: "Melting" },
      { text: "Condensation" },
      { text: "Deposition (or Desublimation)" },
      { text: "Sublimation" }
    ],
    correctAnswer: 2,
    explanation: "Deposition is the phase transition in which gas transforms into solid without passing through the liquid phase.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_som_4-20260106",
    question: "What happens to the kinetic energy of particles as a solid melts into a liquid at its melting point?",
    options: [
      { text: "It decreases." },
      { text: "It increases." },
      { text: "It remains constant." },
      { text: "It fluctuates." }
    ],
    correctAnswer: 2,
    explanation: "During a phase change (like melting), the temperature and the average kinetic energy of the particles remain constant. The added heat energy is used to overcome intermolecular forces.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Atoms, Elements, and Compounds Questions
questionBank.push(
  {
    id: "q_aec_3-20260106",
    question: "Isotopes of the same element have the same number of protons but a different number of...",
    options: [
      { text: "Electrons" },
      { text: "Neutrons" },
      { text: "Positrons" },
      { text: "Ions" }
    ],
    correctAnswer: 1,
    explanation: "Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, resulting in different mass numbers.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_aec_4-20260106",
    question: "What is the formula of the magnesium ion?",
    options: [
      { text: "$Mg^+$" },
      { text: "$Mg^{2+}$" },
      { text: "$Mg^-$" },
      { text: "$Mg^{2-}$" }
    ],
    correctAnswer: 1,
    explanation: "Magnesium is in Group II, so it loses its 2 outer shell electrons to achieve a full outer shell, forming a $2+$ ion.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Stoichiometry Questions
questionBank.push(
  {
    id: "q_stc_3-20260106",
    question: "What volume does $1\\text{ mole}$ of any gas occupy at room temperature and pressure (r.t.p)?",
    options: [
      { text: "$24\\text{ dm}^3$" },
      { text: "$22.4\\text{ dm}^3$" },
      { text: "$12\\text{ dm}^3$" },
      { text: "$48\\text{ dm}^3$" }
    ],
    correctAnswer: 0,
    explanation: "At r.t.p (approx. $20^\\circ\\text{C}$ and $1\\text{ atm}$), 1 mole of any gas occupies $24\\text{ dm}^3$ ($24,000\\text{ cm}^3$).",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_stc_4-20260106",
    question: "Calculate the percentage by mass of oxygen in water ($H_2O$). ($A_r$: $H = 1$, $O = 16$)",
    options: [
      { text: "33.3%" },
      { text: "88.9%" },
      { text: "11.1%" },
      { text: "50.0%" }
    ],
    correctAnswer: 1,
    explanation: "$M_r$ of $H_2O = 18$. Mass of oxygen = 16. $\\text{Percentage} = (16 / 18) \\times 100 = 88.9\\%$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Electrochemistry Questions
questionBank.push(
  {
    id: "q_elc_2-20260106",
    question: "During the electrolysis of concentrated aqueous sodium chloride, what is produced at the anode (positive electrode)?",
    options: [
      { text: "Sodium" },
      { text: "Oxygen" },
      { text: "Chlorine" },
      { text: "Hydrogen" }
    ],
    correctAnswer: 2,
    explanation: "In concentrated aqueous $NaCl$, chloride ions ($Cl^-$) are discharged at the anode to form chlorine gas ($Cl_2$) because they are in high concentration compared to hydroxide ions.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemical Energetics Questions
questionBank.push(
  {
    id: "q_ce_2-20260106",
    question: "If a reaction has a negative $\\Delta H$ (enthalpy change), it is...",
    options: [
      { text: "Endothermic" },
      { text: "Exothermic" },
      { text: "Reversible" },
      { text: "At equilibrium" }
    ],
    correctAnswer: 1,
    explanation: "A negative $\\Delta H$ means the products have less energy than the reactants because energy was released to the surroundings. This is an exothermic reaction.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemical Reactions
questionBank.push(
  {
    id: "q_cr_2-20260106",
    question: "What does a catalyst do in a chemical reaction?",
    options: [
      { text: "Increases the activation energy" },
      { text: "Provides an alternative pathway with higher activation energy" },
      { text: "Provides an alternative pathway with lower activation energy" },
      { text: "Increases the temperature of the reaction" }
    ],
    correctAnswer: 2,
    explanation: "A catalyst speeds up a chemical reaction by providing an alternative reaction pathway that requires a lower activation energy, without being consumed itself.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Acids, Bases and Salts
questionBank.push(
  {
    id: "q_abs_2-20260106",
    question: "Which of the following is a weak acid?",
    options: [
      { text: "Hydrochloric acid" },
      { text: "Sulfuric acid" },
      { text: "Nitric acid" },
      { text: "Ethanoic acid" }
    ],
    correctAnswer: 3,
    explanation: "Ethanoic acid is a weak acid because it only partially dissociates into ions in aqueous solution. The others are strong acids that fully dissociate.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Periodic Table
questionBank.push(
  {
    id: "q_pt_2-20260106",
    question: "Which group of elements are known as the noble gases and are unreactive?",
    options: [
      { text: "Group I" },
      { text: "Group VII" },
      { text: "Group VIII (or Group 0)" },
      { text: "Transition Elements" }
    ],
    correctAnswer: 2,
    explanation: "Group VIII elements are the noble gases. They are unreactive because they have a full outer shell of electrons.",
    level: 1,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Metals
questionBank.push(
  {
    id: "q_met_2-20260106",
    question: "Which metal is the most reactive?",
    options: [
      { text: "Iron" },
      { text: "Copper" },
      { text: "Potassium" },
      { text: "Calcium" }
    ],
    correctAnswer: 2,
    explanation: "Potassium is at the very top of the reactivity series, making it highly reactive, especially with water.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemistry of Environment
questionBank.push(
  {
    id: "q_env_2-20260106",
    question: "Which gas contributes most to global warming?",
    options: [
      { text: "Nitrogen" },
      { text: "Oxygen" },
      { text: "Carbon dioxide" },
      { text: "Argon" }
    ],
    correctAnswer: 2,
    explanation: "Carbon dioxide is a greenhouse gas that traps thermal energy in the Earth's atmosphere, contributing significantly to global warming.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Organic Chemistry
questionBank.push(
  {
    id: "q_org_2-20260106",
    question: "Which functional group is present in all alcohols?",
    options: [
      { text: "$-COOH$" },
      { text: "$-OH$" },
      { text: "$C=C$" },
      { text: "$-COO-$" }
    ],
    correctAnswer: 1,
    explanation: "Alcohols contain the hydroxyl ($-OH$) functional group.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);
questionBank.push(
  {
    id: "q_exp_2-20260106",
    question: "Which technique is used to separate a mixture of colored dyes in ink?",
    options: [
      { text: "Chromatography" },
      { text: "Distillation" },
      { text: "Filtration" },
      { text: "Evaporation" }
    ],
    correctAnswer: 0,
    explanation: "Paper chromatography is used to separate mixtures of soluble substances, such as different colored dyes in ink.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// Edexcel A-Level Unit 4: Kinetics Questions
questionBank.push(
  {
    id: "q_kin_ed_1-20260719",
    question: "An experiment is set up to measure the rate of hydrolysis of methyl ethanoate:\n\n$$\\text{CH}_3\\text{COOCH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{OH}$$\n\nThe hydrolysis is very slow in neutral aqueous solution, but when dilute hydrochloric acid is added, the reaction is faster. What is the function of the hydrochloric acid?",
    options: [
      { text: "To increase the reaction rate by acting as a catalyst" },
      { text: "To make sure that the reaction reaches equilibrium" },
      { text: "To maintain a constant pH during the reaction" },
      { text: "To dissolve the methyl ethanoate" }
    ],
    correctAnswer: 0,
    explanation: "Dilute hydrochloric acid provides $\\text{H}^+$ ions which act as a catalyst, offering an alternative pathway with a lower activation energy, thereby increasing the rate of hydrolysis.",
    level: 1,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_2-20260719",
    question: "For the gaseous reaction $2\\text{X(g)} + \\text{Y(g)} \\rightarrow \\text{Z(g)}$\nthe rate equation is: $\\text{Rate} = k[\\text{X}]^2[\\text{Y}]^0$\nIf the pressure in the reaction vessel is doubled at constant temperature, by what factor does the rate of reaction increase?",
    options: [
      { text: "2" },
      { text: "4" },
      { text: "8" },
      { text: "16" }
    ],
    correctAnswer: 1,
    explanation: "Doubling the pressure of a gaseous mixture doubles the concentration of all gas particles. Since the reaction is second order with respect to X ($2^2 = 4$) and zero order with respect to Y ($2^0 = 1$), the rate increases by a factor of $4 \\times 1 = 4$.",
    level: 2,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_3-20260719",
    question: "The alkaline hydrolysis of $\\text{RBr}$, where $\\text{RBr} = (\\text{CH}_3)_3\\text{CBr}$, takes place in two steps:\nStep 1 (slow): $\\text{RBr} \\rightarrow \\text{R}^+ + \\text{Br}^-$\nStep 2 (fast): $\\text{R}^+ + \\text{OH}^- \\rightarrow \\text{ROH}$\nWhich of the following rate equations is consistent with this mechanism?",
    options: [
      { text: "Rate = $k[\\text{OH}^-]$" },
      { text: "Rate = $k[\\text{RBr}]$" },
      { text: "Rate = $k[\\text{RBr}][\\text{OH}^-]$" },
      { text: "Rate = $k[\\text{R}^+][\\text{OH}^-]$" }
    ],
    correctAnswer: 1,
    explanation: "The rate-determining step is the slow step (Step 1), which involves only the reactant $\\text{RBr}$. Therefore, the reaction is unimolecular ($S_N1$), and the rate equation is $\\text{Rate} = k[\\text{RBr}]$.",
    level: 2,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_4-20260719",
    question: "The table below gives rate data for the reaction between X and Y at constant temperature:\n\n| Experiment | [X] / mol dm⁻³ | [Y] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: |\n| 1 | 0.3 | 0.2 | $4.0 \\times 10^{-4}$ |\n| 2 | 0.6 | 0.4 | $1.6 \\times 10^{-3}$ |\n| 3 | 0.6 | 0.8 | $6.4 \\times 10^{-3}$ |\n\nWhat is the rate equation for the reaction?",
    options: [
      { text: "Rate = $k[\\text{X}][\\text{Y}]^2$" },
      { text: "Rate = $k[\\text{X}]^2[\\text{Y}]$" },
      { text: "Rate = $k[\\text{X}]^2$" },
      { text: "Rate = $k[\\text{Y}]^2$" }
    ],
    correctAnswer: 3,
    explanation: "1. Compare Exp 2 & 3: [X] is constant, [Y] doubles ($0.4 \\rightarrow 0.8$). The rate increases by a factor of 4 ($1.6 \\times 10^{-3} \\rightarrow 6.4 \\times 10^{-3}$). Since $2^2 = 4$, the reaction is second order with respect to Y.\\n2. Compare Exp 1 & 2: both [X] and [Y] double. The rate increases by a factor of 4 ($4.0 \\times 10^{-4} \\rightarrow 1.6 \\times 10^{-3}$). Since the doubling of [Y] alone accounts for the 4-fold rate increase ($2^2 = 4$), the order with respect to X must be 0. Thus, Rate = $k[\\text{Y}]^2$.",
    level: 2,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_5-20260719",
    question: "The reaction of acidified aqueous potassium iodide with hydrogen peroxide: $2\\text{I}^-\\text{(aq)} + \\text{H}_2\\text{O}_2\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{I}_2\\text{(aq)} + 2\\text{H}_2\\text{O}\\text{(l)}$ is thought to involve three steps:\nStep 1 (slow): $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$\nStep 2 (fast): $\\text{OI}^- + \\text{H}^+ \\rightarrow \\text{HOI}$\nStep 3 (fast): $\\text{HOI} + \\text{H}^+ + \\text{I}^- \\rightarrow \\text{I}_2 + \\text{H}_2\\text{O}$\nWhich of the following conclusions **cannot** be deduced from this information?",
    options: [
      { text: "The acid is a catalyst." },
      { text: "The reaction is first order with respect to the iodide ion." },
      { text: "The rate-determining step is: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$" },
      { text: "The rate equation for the reaction is: rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$" }
    ],
    correctAnswer: 0,
    explanation: "Looking at the overall equation: $2\\text{I}^- + \\text{H}_2\\text{O}_2 + 2\\text{H}^+ \\rightarrow \\text{I}_2 + 2\\text{H}_2\\text{O}$. Since $\\text{H}^+$ is consumed as a reactant in the overall reaction, it is not a catalyst (a catalyst must be regenerated at the end of the reaction). Therefore, conclusion A cannot be deduced (it is false).",
    level: 2,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_6-20260719",
    question: "Propanone and iodine react in acidic aqueous solution: $\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COCH}_2\\text{I} + 2\\text{H}^+ + \\text{I}^-$. The experimental rate equation is $\\text{Rate} = k[\\text{CH}_3\\text{COCH}_3][\\text{H}^+]$. At initial concentrations $[\\text{CH}_3\\text{COCH}_3] = 0.400\\text{ mol dm}^{-3}$ and $[\\text{H}^+] = 0.200\\text{ mol dm}^{-3}$, the initial rate of reaction was $1.43 \\times 10^{-6}\\text{ mol dm}^{-3}\\text{ s}^{-1}$. Calculate the value of the rate constant $k$, with units.",
    options: [
      { text: "$1.79 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$1.79 \\times 10^{-5}\\text{ s}^{-1}$" },
      { text: "$7.15 \\times 10^{-6}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$3.58 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "Using the rate equation: $k = \\text{Rate} / ([\\text{CH}_3\\text{COCH}_3][\\text{H}^+]) = 1.43 \\times 10^{-6} / (0.400 \\times 0.200) = 1.43 \\times 10^{-6} / 0.080 = 1.7875 \\times 10^{-5} \\approx 1.79 \\times 10^{-5}$. Units: since the overall order is 2, the units of $k$ are $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_7-20260719",
    question: "A series of experiments on the reaction $\\text{A} + \\text{B} + \\text{C} \\rightarrow \\text{Products}$ yielded the following initial rate data:\n\n| Exp | [A] / mol dm⁻³ | [B] / mol dm⁻³ | [C] / mol dm⁻³ | Rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: | :---: |\n| 1 | 0.100 | 0.100 | 0.100 | $6.20 \\times 10^{-4}$ |\n| 2 | 0.100 | 0.200 | 0.100 | $6.20 \\times 10^{-4}$ |\n| 3 | 0.100 | 0.100 | 0.200 | $2.48 \\times 10^{-3}$ |\n| 4 | 0.200 | 0.100 | 0.100 | $1.24 \\times 10^{-3}$ |\n\nDeduce the rate equation and determine which reactant is unlikely to be in the rate-determining step.",
    options: [
      { text: "Rate = $k[\\text{A}][\\text{C}]^2$; B is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{A}]^2[\\text{C}]$; B is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{A}][\\text{B}][\\text{C}]$; C is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{C}]^2$; A and B are unlikely to be in the RDS." }
    ],
    correctAnswer: 0,
    explanation: "1. Compare Exp 1 & 2: doubling [B] has no effect on rate $\\rightarrow$ order wrt B is 0. Thus, B is not involved in the RDS.\\n2. Compare Exp 1 & 3: doubling [C] increases rate by a factor of 4 ($2.48 \\times 10^{-3} / 6.20 \\times 10^{-4} = 4$) $\\rightarrow$ order wrt C is 2.\\n3. Compare Exp 1 & 4: doubling [A] doubles rate ($1.24 \\times 10^{-3} / 6.20 \\times 10^{-4} = 2$) $\\rightarrow$ order wrt A is 1. Thus, Rate = $k[\\text{A}][\\text{C}]^2$.",
    level: 3,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_8-20260719",
    question: "Nitrogen dioxide, $\\text{NO}_2$, decomposes on heating: $2\\text{NO}_2\\text{(g)} \\rightarrow 2\\text{NO(g)} + \\text{O}_2\\text{(g)}$. A plot of $\\ln k$ against $1/T$ yields a straight line with a gradient of $-13500\\text{ K}$. Calculate the activation energy ($E_a$) for this reaction in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "$112\\text{ kJ mol}^{-1}$" },
      { text: "$1.62\\text{ kJ mol}^{-1}$" },
      { text: "$13.5\\text{ kJ mol}^{-1}$" },
      { text: "$112000\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "The gradient of the Arrhenius plot is given by $m = -E_a/R$. Rearranging: $E_a = -m \\times R = -(-13500) \\times 8.31 = 112185\\text{ J mol}^{-1}$. In $\\text{kJ mol}^{-1}$, this is $112185 / 1000 = 112\\text{ kJ mol}^{-1}$ (to 3 significant figures).",
    level: 3,
    topic: "edexcel-unit-4",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  }
);
