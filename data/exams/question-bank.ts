import { Question } from "./types";
import { svgToken } from "../curriculum/svgToken";

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
    lessonNum: 1,
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
    explanation: "Doubling the pressure of a gaseous mixture doubles the concentration of all gas particles.\nSince the reaction is second order with respect to X ($2^2 = 4$) and zero order with respect to Y ($2^0 = 1$), the rate increases by a factor of $4 \\times 1 = 4$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
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
    explanation: "The rate-determining step is the slow step (Step 1), which involves only the reactant $\\text{RBr}$.\nTherefore, the reaction is unimolecular ($S_N1$), and the rate equation is $\\text{Rate} = k[\\text{RBr}]$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
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
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_5-20260719",
    question: "The reaction of acidified aqueous potassium iodide with hydrogen peroxide:\n\n$$2\\text{I}^-\\text{(aq)} + \\text{H}_2\\text{O}_2\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{I}_2\\text{(aq)} + 2\\text{H}_2\\text{O}\\text{(l)}$$\n\nis thought to involve three steps:\nStep 1 (slow): $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$\nStep 2 (fast): $\\text{OI}^- + \\text{H}^+ \\rightarrow \\text{HOI}$\nStep 3 (fast): $\\text{HOI} + \\text{H}^+ + \\text{I}^- \\rightarrow \\text{I}_2 + \\text{H}_2\\text{O}$\nWhich of the following conclusions **cannot** be deduced from this information?",
    options: [
      { text: "The acid is a catalyst." },
      { text: "The reaction is first order with respect to the iodide ion." },
      { text: "The rate-determining step is: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$" },
      { text: "The rate equation for the reaction is: rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$" }
    ],
    correctAnswer: 0,
    explanation: "Looking at the overall equation:\n$$2\\text{I}^- + \\text{H}_2\\text{O}_2 + 2\\text{H}^+ \\rightarrow \\text{I}_2 + 2\\text{H}_2\\text{O}$$\nSince $\\text{H}^+$ is consumed as a reactant in the overall reaction, it is not a catalyst (a catalyst must be regenerated at the end of the reaction).\nTherefore, conclusion A cannot be deduced (it is false).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_6-20260719",
    question: "Propanone and iodine react in acidic aqueous solution:\n\n$$\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COCH}_2\\text{I} + 2\\text{H}^+ + \\text{I}^-$$\n\nThe experimental rate equation is $\\text{Rate} = k[\\text{CH}_3\\text{COCH}_3][\\text{H}^+]$. At initial concentrations $[\\text{CH}_3\\text{COCH}_3] = 0.400\\text{ mol dm}^{-3}$ and $[\\text{H}^+] = 0.200\\text{ mol dm}^{-3}$, the initial rate of reaction was $1.43 \\times 10^{-6}\\text{ mol dm}^{-3}\\text{ s}^{-1}$. Calculate the value of the rate constant $k$, with units.",
    options: [
      { text: "$1.79 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$1.79 \\times 10^{-5}\\text{ s}^{-1}$" },
      { text: "$7.15 \\times 10^{-6}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$3.58 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "Using the rate equation:\n$k = \\text{Rate} / ([\\text{CH}_3\\text{COCH}_3][\\text{H}^+]) = 1.43 \\times 10^{-6} / (0.400 \\times 0.200) = 1.7875 \\times 10^{-5} \\approx 1.79 \\times 10^{-5}$.\nUnits: since the overall order is 2, the units of $k$ are $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
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
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_8-20260719",
    question: "Nitrogen dioxide, $\\text{NO}_2$, decomposes on heating:\n\n$$2\\text{NO}_2\\text{(g)} \\rightarrow 2\\text{NO(g)} + \\text{O}_2\\text{(g)}$$\n\nA plot of $\\ln k$ against $1/T$ yields a straight line with a gradient of $-13500\\text{ K}$. Calculate the activation energy ($E_a$) for this reaction in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "$112\\text{ kJ mol}^{-1}$" },
      { text: "$1.62\\text{ kJ mol}^{-1}$" },
      { text: "$13.5\\text{ kJ mol}^{-1}$" },
      { text: "$112000\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "The gradient of the Arrhenius plot is given by $m = -E_a/R$.\nRearranging: $E_a = -m \\times R = -(-13500) \\times 8.31 = 112185\\text{ J mol}^{-1}$.\nIn $\\text{kJ mol}^{-1}$, this is $112185 / 1000 = 112\\text{ kJ mol}^{-1}$ (to 3 significant figures).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: `<svg viewBox="0 0 500 450" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <defs>
    <pattern id="minorGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="0.5"/>
    </pattern>
    <pattern id="majorGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#minorGrid)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="60" y="30" width="410" height="360" fill="url(#majorGrid)" />
  <rect x="60" y="30" width="410" height="360" fill="none" stroke="#475569" stroke-width="1.5" />
  <g fill="#94a3b8" font-size="11" text-anchor="end" font-weight="500">
    <text x="50" y="34">9</text>
    <text x="50" y="74">8</text>
    <text x="50" y="114">7</text>
    <text x="50" y="154">6</text>
    <text x="50" y="194">5</text>
    <text x="50" y="234">4</text>
    <text x="50" y="274">3</text>
    <text x="50" y="314">2</text>
    <text x="50" y="354">1</text>
    <text x="50" y="394">0</text>
  </g>
  <g fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="500">
    <text x="60" y="412">1.0</text>
    <text x="128" y="412">1.1</text>
    <text x="197" y="412">1.2</text>
    <text x="265" y="412">1.3</text>
    <text x="333" y="412">1.4</text>
    <text x="402" y="412">1.5</text>
    <text x="470" y="412">1.6</text>
  </g>
  <text x="20" y="210" fill="#cbd5e1" font-size="12" font-weight="600" transform="rotate(-90 20 210)" text-anchor="middle">ln k</text>
  <text x="265" y="438" fill="#cbd5e1" font-size="12" font-weight="600" text-anchor="middle">1/T / 10⁻³ K⁻¹</text>
  <line x1="60" y1="50" x2="470" y2="374" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
  <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
    <!-- Point 1 -->
    <line x1="56" y1="46" x2="64" y2="54" />
    <line x1="64" y1="46" x2="56" y2="54" />
    <!-- Point 2 -->
    <line x1="124" y1="100" x2="132" y2="108" />
    <line x1="132" y1="100" x2="124" y2="108" />
    <!-- Point 3 -->
    <line x1="227" y1="181" x2="235" y2="189" />
    <line x1="235" y1="181" x2="227" y2="189" />
    <!-- Point 4 -->
    <line x1="308" y1="246" x2="316" y2="254" />
    <line x1="316" y1="246" x2="308" y2="254" />
    <!-- Point 5 -->
    <line x1="411" y1="327" x2="419" y2="335" />
    <line x1="419" y1="327" x2="411" y2="335" />
  </g>
</svg>`
  }
);

// N2O5 Decomposition Graph SVG
const n2o5DecayGraphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="auto" style="background:linear-gradient(135deg,#070f1e 0%,#0b1b35 100%);border-radius:16px;border:1px solid #1e293b;font-family:Inter,sans-serif">
  <!-- Grid Lines -->
  <!-- Horizontal Grid -->
  <line x1="80" y1="282" x2="950" y2="282" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="254" x2="950" y2="254" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="226" x2="950" y2="226" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="198" x2="950" y2="198" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="170" x2="950" y2="170" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="142" x2="950" y2="142" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="114" x2="950" y2="114" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="86" x2="950" y2="86" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="58" x2="950" y2="58" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="30" x2="950" y2="30" stroke="#1e293b" stroke-width="1" />

  <!-- Vertical Grid -->
  <line x1="167" y1="30" x2="167" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="254" y1="30" x2="254" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="341" y1="30" x2="341" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="428" y1="30" x2="428" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="515" y1="30" x2="515" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="602" y1="30" x2="602" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="689" y1="30" x2="689" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="776" y1="30" x2="776" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="863" y1="30" x2="863" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="950" y1="30" x2="950" y2="310" stroke="#1e293b" stroke-width="1" />

  <!-- Main Axes -->
  <line x1="80" y1="30" x2="80" y2="310" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="310" x2="950" y2="310" stroke="#475569" stroke-width="2" />

  <!-- Y-Axis Ticks & Labels -->
  <text x="70" y="314" font-size="12" fill="#94a3b8" text-anchor="end">0.0</text>
  <text x="70" y="286" font-size="12" fill="#94a3b8" text-anchor="end">0.2</text>
  <text x="70" y="258" font-size="12" fill="#94a3b8" text-anchor="end">0.4</text>
  <text x="70" y="230" font-size="12" fill="#94a3b8" text-anchor="end">0.6</text>
  <text x="70" y="202" font-size="12" fill="#94a3b8" text-anchor="end">0.8</text>
  <text x="70" y="174" font-size="12" fill="#94a3b8" text-anchor="end">1.0</text>
  <text x="70" y="146" font-size="12" fill="#94a3b8" text-anchor="end">1.2</text>
  <text x="70" y="118" font-size="12" fill="#94a3b8" text-anchor="end">1.4</text>
  <text x="70" y="90" font-size="12" fill="#94a3b8" text-anchor="end">1.6</text>
  <text x="70" y="62" font-size="12" fill="#94a3b8" text-anchor="end">1.8</text>
  <text x="70" y="34" font-size="12" fill="#94a3b8" text-anchor="end">2.0</text>
  <text x="30" y="170" font-size="12" fill="#e2e8f0" transform="rotate(-90 30 170)" text-anchor="middle">[N₂O₅] / mol dm⁻³</text>

  <!-- X-Axis Ticks & Labels -->
  <text x="80" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">0</text>
  <text x="167" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">10</text>
  <text x="254" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">20</text>
  <text x="341" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">30</text>
  <text x="428" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">40</text>
  <text x="515" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">50</text>
  <text x="602" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">60</text>
  <text x="689" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">70</text>
  <text x="776" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">80</text>
  <text x="863" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">90</text>
  <text x="950" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">100</text>
  <text x="515" y="350" font-size="12" fill="#e2e8f0" text-anchor="middle">Time / minutes</text>

  <!-- Curve -->
  <path d="M 80,30 L 123.5,81.7 L 167,123.8 L 210.5,158.2 L 254,186.2 L 297.5,209.2 L 341,227.9 L 384.5,243.1 L 428,255.5 L 471.5,265.6 L 515,273.8 L 558.5,280.5 L 602,286.0 L 645.5,290.4 L 689,294.1 L 732.5,297.0 L 776,299.4 L 819.5,301.4 L 863,303.0 L 906.5,304.3 L 950,305.4" fill="none" stroke="#38bdf8" stroke-width="3" />
</svg>`;

questionBank.push(
  {
    id: "q_kin_ed_n2o5_1-20260719",
    question: "The decomposition of nitrogen pentoxide is represented by:\n\n$$2\\text{N}_2\\text{O}_5\\text{(g)} \\rightarrow 2\\text{N}_2\\text{O}_4\\text{(g)} + \\text{O}_2\\text{(g)}$$\n\nUsing the concentration-time graph below, determine the values of the first two successive half-lives ($t_{1/2}$):",
    options: [
      { text: "First $t_{1/2} = 17\\text{ min}$; Second $t_{1/2} = 17\\text{ min}$" },
      { text: "First $t_{1/2} = 10\\text{ min}$; Second $t_{1/2} = 20\\text{ min}$" },
      { text: "First $t_{1/2} = 17\\text{ min}$; Second $t_{1/2} = 34\\text{ min}$" },
      { text: "First $t_{1/2} = 24\\text{ min}$; Second $t_{1/2} = 24\\text{ min}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The initial concentration is $2.0\\text{ mol dm}^{-3}$. Half of this value is $1.0\\text{ mol dm}^{-3}$. Reading from the graph, $[\\text{N}_2\\text{O}_5]$ reaches $1.0\\text{ mol dm}^{-3}$ at $17\\text{ minutes}$. Thus, the first half-life is $17\\text{ minutes}$.\n2. The second half-life is the time taken to drop from $1.0\\text{ mol dm}^{-3}$ to $0.5\\text{ mol dm}^{-3}$. Looking at the graph, the concentration is $0.5\\text{ mol dm}^{-3}$ at $34\\text{ minutes}$.\n3. The time interval is $34 - 17 = 17\\text{ minutes}$. Therefore, both successive half-lives are $17\\text{ minutes}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: n2o5DecayGraphSvg
  },
  {
    id: "q_kin_ed_n2o5_2-20260719",
    question: "Using the successive half-lives deduced from the $[\\text{N}_2\\text{O}_5]$ concentration-time graph, determine the order of the reaction with respect to $\\text{N}_2\\text{O}_5$:",
    options: [
      { text: "First order, because the successive half-lives are constant." },
      { text: "Second order, because the concentration decays exponentially." },
      { text: "Zero order, because the rate of reaction remains constant." },
      { text: "First order, because the half-life doubles over time." }
    ],
    correctAnswer: 0,
    explanation: "1. The successive half-lives for this reaction are constant at approximately $17\\text{ minutes}$.\n2. A constant half-life is the unique characteristic of a first-order reaction.\n3. Therefore, the reaction is first order with respect to $\\text{N}_2\\text{O}_5$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: n2o5DecayGraphSvg
  },
  {
    id: "q_kin_ed_n2o5_3-20260719",
    question: "Based on the $[\\text{N}_2\\text{O}_5]$ decay graph, calculate a value for the rate constant, $k$, for this reaction, specifying the correct units:",
    options: [
      { text: "$4.1 \\times 10^{-2}\\text{ min}^{-1}$" },
      { text: "$6.8 \\times 10^{-4}\\text{ min}^{-1}$" },
      { text: "$1.7 \\times 10^{-2}\\text{ dm}^3\\text{ mol}^{-1}\\text{ min}^{-1}$" },
      { text: "$2.4 \\times 10^{-2}\\text{ min}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. For a first-order reaction, the rate constant is related to the half-life by: $k = \\ln(2) / t_{1/2}$.\n2. Substituting the half-life $t_{1/2} = 17\\text{ minutes}$: $k = 0.693 / 17 \\approx 0.0408\\text{ min}^{-1}$.\n3. In scientific notation, this is $4.1 \\times 10^{-2}\\text{ min}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
  }
);

questionBank.push(
  {
    id: "q_eq_ed_pp_1-20260721",
    question: "For the equilibrium reaction:\n\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)} \\quad \\Delta H^\\theta = -92\\text{ kJ mol}^{-1}$$\n\nWhich change would affect both the value of the equilibrium constant, $K_p$, and the proportion of ammonia present at equilibrium?",
    options: [
      { text: "Adding a catalyst of finely divided iron" },
      { text: "Reducing the temperature at constant pressure" },
      { text: "Increasing the amount of nitrogen" },
      { text: "Increasing the pressure at constant temperature" }
    ],
    correctAnswer: 1,
    explanation: "1. The equilibrium constant $K_p$ is affected only by changes in temperature.\n2. Since the forward reaction is exothermic, reducing the temperature will shift the equilibrium position to the right, which increases the value of $K_p$ and increases the proportion of ammonia.\n3. Changes in pressure or concentration shift the equilibrium composition but do not alter the value of $K_p$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_2-20260721",
    question: "In a reversible chemical reaction, what is the effect of adding a catalyst on the rate constant $k_1$ for the forward reaction, the rate constant $k_{-1}$ for the backward reaction, and the equilibrium constant $K$?",
    options: [
      { text: "$k_1$ increases, $k_{-1}$ decreases, $K$ no effect" },
      { text: "$k_1$ increases, $k_{-1}$ decreases, $K$ increases" },
      { text: "$k_1$ increases, $k_{-1}$ increases, $K$ no effect" },
      { text: "$k_1$ increases, $k_{-1}$ increases, $K$ increases" }
    ],
    correctAnswer: 2,
    explanation: "1. A catalyst increases the rates of both the forward and reverse reactions by providing an alternative pathway with a lower activation energy.\n2. This increases both rate constants $k_1$ and $k_{-1}$ to the same extent.\n3. Since $K = k_1 / k_{-1}$, the equilibrium constant $K$ remains unaffected.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_3-20260721",
    question: "Hydrogen and iodine vapour exist in equilibrium with hydrogen iodide at a constant temperature in a gas syringe:\n\n$$\\text{H}_2\\text{(g)} + \\text{I}_2\\text{(g)} \\rightleftharpoons 2\\text{HI(g)}$$\n\nWhat will increase when the pressure is increased at constant temperature?",
    options: [
      { text: "The activation energy of the reaction" },
      { text: "The enthalpy change of the reaction" },
      { text: "$K_p$" },
      { text: "The partial pressure of hydrogen iodide" }
    ],
    correctAnswer: 3,
    explanation: "1. Increasing the pressure of a gaseous mixture increases the concentration and partial pressure of all component gases.\n2. The activation energy and enthalpy change are independent of pressure.\n3. $K_p$ is only affected by temperature and is constant here.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_4-20260721",
    question: "A nitrogen-hydrogen mixture, initially in a mole ratio of $1:3$, reaches equilibrium with ammonia when $50\\%$ of the nitrogen has reacted:\n\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$$\n\nIf the total pressure of the equilibrium mixture is $P$, what is the partial pressure of ammonia at equilibrium?",
    options: [
      { text: "$P/6$" },
      { text: "$P/4$" },
      { text: "$P/3$" },
      { text: "$P/2$" }
    ],
    correctAnswer: 2,
    explanation: "1. Start with $1\\text{ mol N}_2$ and $3\\text{ mol H}_2$ (total $4\\text{ mol}$).\n2. If $50\\%$ of $\\text{N}_2$ reacts, $0.5\\text{ mol N}_2$ remains. By stoichiometry, $1.5\\text{ mol H}_2$ reacts ($1.5\\text{ mol}$ remains) and $1.0\\text{ mol NH}_3$ forms.\n3. Total equilibrium moles = $0.5 + 1.5 + 1.0 = 3.0\\text{ mol}$.\n4. Mole fraction of $\\text{NH}_3 = 1.0 / 3.0 = 1/3$.\n5. Partial pressure of $\\text{NH}_3 = \\chi \\times P = P/3$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_5-20260721",
    question: "Nitrogen dioxide decomposes on heating according to the following equation:\n\n$$2\\text{NO}_2\\text{(g)} \\rightleftharpoons 2\\text{NO(g)} + \\text{O}_2\\text{(g)}$$\n\nWhen $4.0\\text{ mol}$ of nitrogen dioxide is put into a $1\\text{ dm}^3$ container and heated, the equilibrium mixture obtained contains $0.8\\text{ mol}$ of oxygen. What is the numerical expression for $K_c$ at the temperature of the experiment?",
    options: [
      { text: "$(0.8 \\times 0.8) / 2.4$" },
      { text: "$(0.8)^2 \\times 0.8 / 2.4$" },
      { text: "1.6 \\times 0.8 / (2.4)^2" },
      { text: "(1.6)^2 \\times 0.8 / (2.4)^2" }
    ],
    correctAnswer: 3,
    explanation: "1. Let volume $V = 1\\text{ dm}^3$. Initial moles: $\\text{NO}_2 = 4.0$, $\\text{NO} = 0$, $\\text{O}_2 = 0$.\n2. Equilibrium moles of $\\text{O}_2 = 0.8\\text{ mol}$. Change in $\\text{O}_2 = +0.8\\text{ mol}$.\n3. By stoichiometry ($2:2:1$): change in $\\text{NO} = +1.6\\text{ mol}$ and change in $\\text{NO}_2 = -1.6\\text{ mol}$.\n4. Equilibrium concentrations: $[\\text{NO}_2] = 2.4\\text{ mol dm}^{-3}$, $[\\text{NO}] = 1.6\\text{ mol dm}^{-3}$, $[\\text{O}_2] = 0.8\\text{ mol dm}^{-3}$.\n5. $K_c = [\\text{NO}]^2[\\text{O}_2] / [\\text{NO}_2]^2 = (1.6)^2 \\times 0.8 / (2.4)^2$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_ab_ed_pp_1-20260721",
    question: "In an acid–base titration, a $0.10\\text{ mol dm}^{-3}$ solution of a base is added to $25\\text{ cm}^3$ of a $0.10\\text{ mol dm}^{-3}$ solution of an acid. The pH starts at $1.0$ and rises gradually to about $2.0$ at $20\\text{ cm}^3$ added, before rising sharply between pH $3.0$ and $10.0$ near the equivalence point ($25\\text{ cm}^3$). Past $40\\text{ cm}^3$, the pH flattens out around $9.5$. Which titration does this curve represent?",
    options: [
      { text: "$\\text{CH}_3\\text{COOH(aq)}$ and $\\text{NH}_3\\text{(aq)}$" },
      { text: "$\\text{CH}_3\\text{COOH(aq)}$ and $\\text{KOH(aq)}$" },
      { text: "$\\text{HCl(aq)}$ and $\\text{NH}_3\\text{(aq)}$" },
      { text: "$\\text{HCl(aq)}$ and $\\text{KOH(aq)}$" }
    ],
    correctAnswer: 2,
    explanation: "1. The initial pH of the solution is $1.0$, which corresponds to a strong acid ($[\\text{H}^+] = 10^{-1.0} = 0.10\\text{ mol dm}^{-3}$). This rules out weak acids like ethanoic acid.\n2. The final pH after adding excess base approaches $9.5$, which is characteristic of a weak base like ammonia (a strong base like KOH would result in a pH close to $13$).\n3. Therefore, the curve represents the titration between a strong acid (HCl) and a weak base (\\text{NH}_3).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_2-20260721",
    question: "Hardness in water is determined by titrating a sample against a reagent that forms complex ions. The indicator for this titration requires the pH to be maintained at about $10$. Which mixture, in aqueous solution, could be used to maintain this pH?",
    options: [
      { text: "Ammonia and ammonium chloride" },
      { text: "Ammonium chloride and hydrochloric acid" },
      { text: "Sodium ethanoate and ethanoic acid" },
      { text: "Sodium hydroxide and sodium ethanoate" }
    ],
    correctAnswer: 0,
    explanation: "1. To maintain the pH at a constant alkaline value of about $10$, a basic buffer solution is required.\n2. A basic buffer consists of a weak base and its conjugate acid salt.\n3. Ammonia (\\text{NH}_3, weak base) and ammonium chloride (\\text{NH}_4\\text{Cl}, salt of conjugate acid) form a buffer solution that operates in the pH range of $9-11$.\n4. Ethanoate mixtures act as acidic buffers (pH $4-6$), while NaOH/sodium ethanoate is not a buffer system.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_3-20260721",
    question: "A $1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$ aqueous solution of a weak, monoprotic acid HA has a pH of $4.0$. What is the approximate $\\text{p}K_a$ value for the acid?",
    options: [
      { text: "$4.0$" },
      { text: "$6.0$" },
      { text: "$7.0$" },
      { text: "$8.0$" }
    ],
    correctAnswer: 1,
    explanation: "1. The pH is $4.0$, so the hydrogen ion concentration $[\\text{H}^+] = 10^{-\\text{pH}} = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.\n2. For a weak acid HA, using the simplified expression: $K_a = [\\text{H}^+]^2 / c$.\n3. Substituting the values: $K_a = (1.0 \\times 10^{-4})^2 / (1.0 \\times 10^{-2}) = 1.0 \\times 10^{-8} / 1.0 \\times 10^{-2} = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.\n4. Therefore, $\\text{p}K_a = -\\log_{10}(K_a) = 6.0$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_4-20260721",
    question: "In the nitrating mixture of concentrated nitric acid and concentrated sulfuric acid, the following equilibrium is established:\n\n$$\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{NO}_2^+ + 2\\text{HSO}_4^- + \\text{H}_3\\text{O}^+$$\n\nWhich statement correctly describes the role of the species in this equilibrium?",
    options: [
      { text: "$\\text{HNO}_3$ and $\\text{NO}_2^+$ are a conjugate acid–base pair" },
      { text: "The nitric acid acts as an oxidising agent" },
      { text: "The sulfuric acid acts as a proton donor (acid) and shifts equilibrium by protonating water" },
      { text: "The sulfuric acid acts as a base" }
    ],
    correctAnswer: 2,
    explanation: "1. Sulfuric acid is a stronger acid than nitric acid and donates protons, acting as an acid (proton donor). This rules out option D.\n2. Nitric acid accepts a proton to form $\\text{H}_2\\text{NO}_3^+$, which then loses water to form the nitronium ion (\\text{NO}_2^+). Thus, HNO_3 acts as a base.\n3. The water released is protonated by another molecule of sulfuric acid to form $\\text{H}_3\\text{O}^+$, acting as a dehydrating effect that shifts the equilibrium to the right.\n4. HNO_3 and NO_2^+ do not differ by a single proton and are not a conjugate pair. The reaction is a non-redox proton transfer, so nitric acid is not acting as an oxidiser.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_5-20260721",
    question: "A sales leaflet claims that 'applications of a solution of ammonium sulfate, which is acidic, improve the growth of acid-loving rhododendron bushes by increasing the availability of nitrogen and also by increasing the pH of the soil'. What is chemically incorrect about this statement?",
    options: [
      { text: "Aqueous ammonium sulfate is not acidic" },
      { text: "Ammonium sulfate does not dissolve in water" },
      { text: "Nitrogen must be in its oxidised nitrate form to act as a fertiliser" },
      { text: "The pH of the soil will be decreased, not increased" }
    ],
    correctAnswer: 3,
    explanation: "1. Ammonium sulfate ((\\text{NH}_4)_2\\text{SO}_4) is a salt of a strong acid (\\text{H}_2\\text{SO}_4) and a weak base (\\text{NH}_3).\n2. The ammonium ion undergoes hydrolysis in water, releasing protons and making the solution acidic: $\\text{NH}_4^+\\text{(aq)} \\rightleftharpoons \\text{NH}_3\\text{(aq)} + \\text{H}^+\\text{(aq)}$.\n3. Since the solution is acidic, applying it to the soil will decrease the soil's pH, making it more acidic (which benefits acid-loving plants), rather than increasing the pH.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6a-20260721",
    question: "A sample of fruit juice has a hydrogen ion concentration of $2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$. What is the pH of the fruit juice?",
    options: [
      { text: "$3.40$" },
      { text: "$3.60$" },
      { text: "$4.00$" },
      { text: "$4.60$" }
    ],
    correctAnswer: 1,
    explanation: "1. The formula for pH is: $\\text{pH} = -\\log_{10}[\\text{H}^+]$.\n2. Substituting the hydrogen ion concentration: $\\text{pH} = -\\log_{10}(2.50 \\times 10^{-4}) = 3.60$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6b-20260721",
    question: "A $25.0\\text{ cm}^3$ sample of fruit juice containing a monobasic acid HA is titrated against $0.0100\\text{ mol dm}^{-3}$ sodium hydroxide, requiring exactly $26.70\\text{ cm}^3$ of the base to reach the equivalence point. What is the concentration of HA in the fruit juice?",
    options: [
      { text: "0.00936 mol dm⁻³" },
      { text: "0.0107 mol dm⁻³" },
      { text: "0.00250 mol dm⁻³" },
      { text: "0.0125 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "1. The neutralisation reaction is: $\\text{HA} + \\text{NaOH} \\rightarrow \\text{NaA} + \\text{H}_2\\text{O}$ (1:1 ratio).\n2. Moles of NaOH used = $C \\times V = 0.0100\\text{ mol dm}^{-3} \\times 0.02670\\text{ dm}^3 = 2.67 \\times 10^{-4}\\text{ mol}$.\n3. Since the ratio is 1:1, moles of HA in $25.0\\text{ cm}^3 = 2.67 \\times 10^{-4}\\text{ mol}$.\n4. Concentration of HA = $\\text{moles} / \\text{volume} = 2.67 \\times 10^{-4}\\text{ mol} / 0.0250\\text{ dm}^3 = 0.01068\\text{ mol dm}^{-3} \\approx 0.0107\\text{ mol dm}^{-3}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6c-20260721",
    question: "A fruit juice contains a monobasic acid HA with total concentration $0.0107\\text{ mol dm}^{-3}$. Under the juice conditions, $[\\text{H}^+] = 2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$ and $K_a = 6.00 \\times 10^{-5}\\text{ mol dm}^{-3}$. What is the concentration of the undissociated acid HA?",
    options: [
      { text: "$1.04 \\times 10^{-3}\\text{ mol dm}^{-3}$" },
      { text: "$8.63 \\times 10^{-3}\\text{ mol dm}^{-3}$" },
      { text: "$1.04 \\times 10^{-2}\\text{ mol dm}^{-3}$" },
      { text: "$2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The dissociation equilibrium is $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, with $K_a = [\\text{H}^+][\\text{A}^-] / [\\text{HA}]$.\n2. The total concentration of the acid is $c = [\\text{HA}] + [\\text{A}^-] = 0.01068\\text{ mol dm}^{-3}$.\n3. Rearranging the $K_a$ expression gives: $[\\text{A}^-] = K_a \\times [\\text{HA}] / [\\text{H}^+] = (6.00 \\times 10^{-5} \\times [\\text{HA}]) / (2.50 \\times 10^{-4}) = 0.24 [\\text{HA}]$.\n4. Substituting this into the total concentration expression: $[\\text{HA}] + 0.24 [\\text{HA}] = 1.24 [\\text{HA}] = 0.01068\\text{ mol dm}^{-3}$.\n5. Solving for $[\\text{HA}]$ gives: $[\\text{HA}] = 0.01068 / 1.24 = 8.613 \\times 10^{-3}\\text{ mol dm}^{-3} \\approx 8.63 \\times 10^{-3}\\text{ mol dm}^{-3}$.\n6. (If assuming $[\\text{H}^+] = [\\text{A}^-]$, $[\\text{HA}] = [\\text{H}^+]^2 / K_a = 1.04 \\times 10^{-3}\\text{ mol dm}^{-3}$, but this is incorrect for the juice mixture because other species affect the pH).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_7-20260721",
    question: "A buffer solution is prepared by adding a solution of $1.00\\text{ mol dm}^{-3}$ sodium hydroxide to a sample of $1.00\\text{ mol dm}^{-3}$ ethanoic acid ($K_a = 1.70 \\times 10^{-5}\\text{ mol dm}^{-3}$ at this temperature) until exactly half of the amount of acid present has reacted. What is the pH of this buffer solution?",
    options: [
      { text: "$4.77$" },
      { text: "$5.07$" },
      { text: "$5.27$" },
      { text: "$7.00$" }
    ],
    correctAnswer: 0,
    explanation: "1. The reaction is: $\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$.\n2. When exactly half of the acid reacts, the concentration of unreacted weak acid $[\\text{CH}_3\\text{COOH}]$ equals the concentration of the conjugate base salt $[\\text{CH}_3\\text{COO}^-]$.\n3. This is the half-equivalence point. According to the Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log_{10}([\\text{salt}]/[\\text{acid}]) = \\text{p}K_a + \\log_{10}(1) = \\text{p}K_a$.\n4. $\\text{p}K_a = -\\log_{10}(1.70 \\times 10^{-5}) = 4.77$, so the pH is $4.77$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_8a-20260721",
    question: "The value of the ionic product of water, $K_w$, is $5.48 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $323\\text{ K}$ ($50^\\circ\\text{C}$). What is the pH of pure water at this temperature?",
    options: [
      { text: "$6.63$" },
      { text: "$7.00$" },
      { text: "$7.37$" },
      { text: "$14.00$" }
    ],
    correctAnswer: 0,
    explanation: "1. In pure water, $[\\text{H}^+] = [\\text{OH}^-]$ (it is neutral).\n2. Therefore, $K_w = [\\text{H}^+]^2 \\implies [\\text{H}^+] = \\sqrt{K_w}$.\n3. At $323\\text{ K}$, $[\\text{H}^+] = \\sqrt{5.48 \\times 10^{-14}} = 2.341 \\times 10^{-7}\\text{ mol dm}^{-3}$.\n4. $\\text{pH} = -\\log_{10}(2.341 \\times 10^{-7}) = 6.63$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_8b-20260721",
    question: "The ionic product of water, $K_w$, increases from $1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $298\\text{ K}$ to $5.48 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $323\\text{ K}$. What thermodynamic deduction can be made from this data?",
    options: [
      { text: "The dissociation of water is exothermic ($\\Delta H < 0$)" },
      { text: "The dissociation of water is endothermic ($\\Delta H > 0$)" },
      { text: "The entropy change of dissociation is negative ($\\Delta S < 0$)" },
      { text: "The reaction has reached completion at $323\\text{ K}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The dissociation of water is represented by: $\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$.\n2. As the temperature is increased, $K_w$ increases, meaning the equilibrium position shifts to the right, producing more ions.\n3. According to Le Chatelier's Principle, an increase in temperature shifts the equilibrium in the endothermic direction.\n4. Since increasing the temperature shifts this reaction to the right, the forward dissociation reaction must be endothermic ($\\Delta H^\\theta > 0$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_9a-20260721",
    question: "Consider the following two proton transfer equilibria that lie well to the right-hand side:\n\n1) $\\text{CH}_3\\text{COO}^- + \\text{HF} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{F}^-$\n2) $\\text{CH}_3\\text{COOH} + \\text{CN}^- \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{HCN}$\n\nWhat is the correct order of acid strength from strongest to weakest?",
    options: [
      { text: "$\\text{HF} > \\text{CH}_3\\text{COOH} > \\text{HCN}$" },
      { text: "$\\text{HCN} > \\text{CH}_3\\text{COOH} > \\text{HF}$" },
      { text: "$\\text{CH}_3\\text{COOH} > \\text{HF} > \\text{HCN}$" },
      { text: "$\\text{HF} > \\text{HCN} > \\text{CH}_3\\text{COOH}$" }
    ],
    correctAnswer: 0,
    explanation: "1. In equilibrium 1, HF donates a proton to $\\text{CH}_3\\text{COO}^-$. Since the equilibrium lies well to the right, HF is a stronger acid (better proton donor) than $\\text{CH}_3\\text{COOH}$.\n2. In equilibrium 2, $\\text{CH}_3\\text{COOH}$ donates a proton to $\\text{CN}^-$. Since this equilibrium lies well to the right, $\\text{CH}_3\\text{COOH}$ is a stronger acid than HCN.\n3. Combining these results gives the order: $\\text{HF} > \\text{CH}_3\\text{COOH} > \\text{HCN}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_9b-20260721",
    question: "Liquid ammonia undergoes self-ionisation according to the equation: $\\text{NH}_3 + \\text{NH}_3 \\rightleftharpoons \\text{NH}_4^+ + \\text{NH}_2^-$. How would ammonium chloride (\\text{NH}_4\\text{Cl}) and sodium amide (\\text{NaNH}_2) behave when dissolved in liquid ammonia?",
    options: [
      { text: "Ammonium chloride is basic; sodium amide is acidic" },
      { text: "Ammonium chloride is acidic; sodium amide is basic" },
      { text: "Both are neutral solutes" },
      { text: "Ammonium chloride is acidic; sodium amide is neutral" }
    ],
    correctAnswer: 1,
    explanation: "1. In liquid ammonia, the ammonium ion (\\text{NH}_4^+) is the conjugate acid (analogous to $\\text{H}_3\\text{O}^+$ in water), and the amide ion (\\text{NH}_2^-) is the conjugate base (analogous to $\\text{OH}^-$ in water).\n2. Dissolving $\\text{NH}_4\\text{Cl}$ increases the concentration of $\\text{NH}_4^+$, making the solution acidic.\n3. Dissolving $\\text{NaNH}_2$ increases the concentration of $\\text{NH}_2^-$, making the solution basic.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_10a-20260721",
    question: "Sulfurous acid, $\\text{H}_2\\text{SO}_3$, is a weak dibasic acid with first dissociation constant $K_{a1} = 1.20 \\times 10^{-2}\\text{ mol dm}^{-3}$ at $298\\text{ K}$. What is the approximate pH of a $0.500\\text{ mol dm}^{-3}$ solution of sulfurous acid?",
    options: [
      { text: "1.11" },
      { text: "1.92" },
      { text: "2.31" },
      { text: "3.11" }
    ],
    correctAnswer: 0,
    explanation: "1. Using the simplified expression $[\\text{H}^+] = \\sqrt{K_{a1} \\times c}$.\n2. Substituting the values: $[\\text{H}^+] = \\sqrt{1.20 \\times 10^{-2} \\times 0.500} = \\sqrt{6.00 \\times 10^{-3}} = 0.07746\\text{ mol dm}^{-3}$.\n3. $\\text{pH} = -\\log_{10}(0.07746) = 1.11$.\n4. (Solving the quadratic equation $K_a = [\\text{H}^+]^2 / (c - [\\text{H}^+])$ yields $[\\text{H}^+] = 0.0717\\text{ mol dm}^{-3}$, which gives a pH of $1.14$. Both methods show the pH is approximately $1.1$).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_10b-20260721",
    question: "Calculate the pH of a $0.500\\text{ mol dm}^{-3}$ solution of potassium hydroxide, KOH, at $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$).",
    options: [
      { text: "13.70" },
      { text: "14.00" },
      { text: "12.70" },
      { text: "13.30" }
    ],
    correctAnswer: 0,
    explanation: "1. KOH is a strong base and dissociates fully, so $[\\text{OH}^-] = 0.500\\text{ mol dm}^{-3}$.\n2. $\\text{pOH} = -\\log_{10}(0.500) = 0.301$.\n3. Since $\\text{pH} + \\text{pOH} = 14.00$ at $298\\text{ K}$: $\\text{pH} = 14.00 - 0.301 = 13.699 \\approx 13.70$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_11a-20260721",
    question: "Dilute hydrochloric acid is titrated into sodium carbonate solution, displaying two equivalence points: A (pH $\\approx 8.3$) and B (pH $\\approx 3.7$). Which indicators are most suitable to detect the endpoints at A and B respectively?",
    options: [
      { text: "Phenolphthalein for A, Methyl orange for B" },
      { text: "Methyl orange for A, Phenolphthalein for B" },
      { text: "Bromothymol blue for both endpoints" },
      { text: "Phenolphthalein for both endpoints" }
    ],
    correctAnswer: 0,
    explanation: "1. The first equivalence point A is in the alkaline region (pH $\\approx 8.3$). Phenolphthalein transition range ($8.2-10.0$) matches this endpoint.\n2. The second equivalence point B is in the acidic region (pH $\\approx 3.7$). Methyl orange transition range ($3.1-4.4$) matches this endpoint.\n3. Therefore, Phenolphthalein is used for the first stage and Methyl orange for the second stage.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_11b-20260721",
    question: "When titrating dilute hydrochloric acid with sodium carbonate solution, why is the change at the first equivalence point A (forming $\\text{NaHCO}_3$) more difficult to detect than the second equivalence point B (forming $\\text{CO}_2$)?",
    options: [
      { text: "The pH changes too rapidly at A" },
      { text: "The steep vertical section of the curve at A is much shorter and less vertical than at B" },
      { text: "The reaction at A is highly exothermic, affecting indicator color" },
      { text: "No indicator transitions in the pH range of A" }
    ],
    correctAnswer: 1,
    explanation: "1. Looking at the titration curve, the steep vertical section of the curve near equivalence point A is short and has a less steep slope than the vertical section near equivalence point B.\n2. Consequently, the pH changes more gradually per drop of acid added at A, making the indicator color transition less sharp and harder to see precisely.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);
