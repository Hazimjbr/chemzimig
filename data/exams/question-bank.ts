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
  },
  {
    id: "q_ab_ed_pp_12-20260810",
    question: "Which of the following represents a conjugate acid–base pair, with the acid listed first?",
    options: [
      { text: "$\\text{H}_3\\text{O}^+ / \\text{OH}^-$" },
      { text: "$\\text{H}_2\\text{SO}_4 / \\text{SO}_4^{2-}$" },
      { text: "$\\text{NH}_4^+ / \\text{NH}_3$" },
      { text: "$\\text{H}_2\\text{O} / \\text{H}_3\\text{O}^+$" }
    ],
    correctAnswer: 2,
    explanation: "• A conjugate acid–base pair consists of two species that differ by exactly one proton ($\\text{H}^+$).\n• The acid is the proton donor, and the base is the proton acceptor.\n• $\\text{NH}_4^+$ donates one proton to form its conjugate base $\\text{NH}_3$.\n• The other pairs do not differ by exactly one proton or have the base listed first.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ab_ed_pp_13-20260810",
    question: "A buffer solution is prepared containing $0.200\\text{ mol dm}^{-3}$ methanoic acid, HCOOH, and $0.150\\text{ mol dm}^{-3}$ sodium methanoate, HCOONa. The acid dissociation constant, $K_a$, of methanoic acid is $1.60 \\times 10^{-4}\\text{ mol dm}^{-3}$ at $298\\text{ K}$. What is the pH of this buffer solution?",
    options: [
      { text: "3.67" },
      { text: "3.80" },
      { text: "3.92" },
      { text: "4.12" }
    ],
    correctAnswer: 0,
    explanation: "• Use the Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log_{10}([\\text{conjugate base}] / [\\text{weak acid}])$.\n• Calculate $\\text{p}K_a = -\\log_{10}(1.60 \\times 10^{-4}) = 3.796$.\n• Substitute concentrations: $\\text{pH} = 3.796 + \\log_{10}(0.150 / 0.200)$.\n• $\\text{pH} = 3.796 + \\log_{10}(0.75) = 3.796 - 0.125 = 3.671 \\approx 3.67$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ab_ed_pp_14-20260810",
    question: "On a titration curve obtained by adding a strong base to a weak acid, what name is given to the region where the pH increases very slowly before the equivalence point?",
    options: [
      { text: "The equivalence region" },
      { text: "The buffer region" },
      { text: "The neutralisation region" },
      { text: "The end point" }
    ],
    correctAnswer: 1,
    explanation: "• As strong base is added to the weak acid, some of the weak acid is converted into its conjugate base salt, creating a mixture of both species.\n• This mixture acts as a buffer solution, resisting large changes in pH upon further addition of base.\n• This portion of the curve is therefore called the buffer region, where the pH rises gradually.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_1-20260721",
    question: "Which of the following organic structures contains exactly two chiral carbon atoms?",
    options: [
      { text: "$\\text{CH}_3\\text{CH(OH)COOH}$" },
      { text: "$\\text{CH}_3\\text{CHBrCHBrCH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CHBrCH}_2\\text{CH}_3$" },
      { text: "$\\text{CH}_2\\text{ClCH(OH)CH}_2\\text{OH}$" }
    ],
    correctAnswer: 1,
    explanation: "1. In $\\text{CH}_3\\text{CHBrCHBrCH}_3$, both Carbon-2 and Carbon-3 are bonded to four different groups ($-\\text{H}$, $-\\text{Br}$, $-\\text{CH}_3$, and $-\\text{CHBrCH}_3$). Thus, it contains exactly two chiral centres.\n2. $\\text{CH}_3\\text{CH(OH)COOH}$ contains only one chiral centre (Carbon-2).\n3. $\\text{CH}_3\\text{CH}_2\\text{CHBrCH}_2\\text{CH}_3$ contains no chiral centre because Carbon-3 is bonded to two identical ethyl groups.\n4. $\\text{CH}_2\\text{ClCH(OH)CH}_2\\text{OH}$ contains only one chiral centre (Carbon-2).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_2-20260721",
    question: "Which mixture is most suitable for safely preparing 2-hydroxypropanenitrile from ethanal in the laboratory?",
    options: [
      { text: "Liquid HCN and concentrated sulfuric acid" },
      { text: "Aqueous potassium cyanide (KCN) and dilute sulfuric acid" },
      { text: "Gaseous HCN and nickel catalyst" },
      { text: "KCN and sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "1. Hydrogen cyanide (HCN) is extremely toxic and volatile.\n2. To prepare the hydroxynitrile safely, KCN or NaCN is mixed with dilute acid (like $\\text{H}_2\\text{SO}_4$).\n3. This generates HCN in situ and provides a high concentration of the nucleophile $\\text{CN}^-$ to start the reaction at pH 5-8.\n4. Pure liquid HCN is too dangerous, and NaOH would neutralise the proton source needed for the second step.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_3-20260721",
    question: "When propanal reacts with hydrogen cyanide (HCN) in the presence of potassium cyanide (KCN), the product formed is 2-hydroxybutanenitrile. Why is the product mixture optically inactive?",
    options: [
      { text: "The product molecule does not contain a chiral carbon atom" },
      { text: "The reaction occurs via a symmetrical transition state that blocks stereoisomerism" },
      { text: "The reactant carbonyl carbon is planar, allowing attack with equal probability from above or below" },
      { text: "The nucleophile $\\text{CN}^-$ is too small to display steric selectivity" }
    ],
    correctAnswer: 2,
    explanation: "1. The product molecule 2-hydroxybutanenitrile does contain a chiral carbon (Carbon-2) bonded to $-\\text{H}$, $-\\text{OH}$, $-\\text{CN}$, and $-\\text{CH}_2\\text{CH}_3$.\n2. The reactant carbonyl carbon $\\text{C}=\\text{O}$ has trigonal planar geometry.\n3. The nucleophile $\\text{CN}^-$ can attack the planar carbon atom from either above or below the plane with equal (50:50) probability.\n4. This yields equal amounts of the two mirror-image enantiomers, forming a racemic mixture that has no net optical rotation.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_4-20260721",
    question: "A compound W with formula $\\text{C}_5\\text{H}_{10}\\text{O}$ reacts with 2,4-DNPH to form a red precipitate. When W is treated with alkaline iodine, it forms a yellow precipitate. Which of the following is the correct structure of W?",
    options: [
      { text: "Pentan-3-one" },
      { text: "Pentan-2-one" },
      { text: "Pentanal" },
      { text: "2-methylbutanal" }
    ],
    correctAnswer: 1,
    explanation: "1. Reacting with 2,4-DNPH confirms W is a carbonyl compound (aldehyde or ketone).\n2. Reacting with alkaline iodine (the iodoform test) to yield a yellow precipitate ($\\text{CHI}_3$) indicates the presence of a methyl carbonyl group ($\\text{CH}_3\\text{-C}=\\text{O}$).\n3. Pentanal and 2-methylbutanal are aldehydes that do not give a positive iodoform test.\n4. Pentan-3-one ($\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$) is a ketone but lacks a methyl group directly bonded to the carbonyl carbon.\n5. Pentan-2-one ($\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$) has the methyl carbonyl group and yields a positive test.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_5-20260721",
    question: "Which reagent and observation correctly distinguish between propanal and propanone?",
    options: [
      { text: "2,4-DNPH yields a precipitate with propanal but not propanone" },
      { text: "Tollens' reagent forms a silver mirror with propanal but not propanone" },
      { text: "Fehling's solution forms a red precipitate with propanone but not propanal" },
      { text: "Alkaline iodine forms a yellow precipitate with propanal but not propanone" }
    ],
    correctAnswer: 1,
    explanation: "1. Propanal is an aldehyde and is easily oxidised. Propanone is a ketone and is resistant to oxidation.\n2. Tollens' reagent contains $[\\text{Ag(NH}_3)_2]^+$, which oxidises aldehydes to carboxylates while being reduced to a metallic silver mirror. Ketones do not react. This is a standard test.\n3. 2,4-DNPH reacts with both to give precipitates.\n4. Fehling's solution reacts with aldehydes, not ketones.\n5. Alkaline iodine reacts with propanone (methyl ketone) but not propanal.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_6-20260721",
    question: "What is the organic product formed when pentan-3-one is reduced using lithium tetrahydridoaluminate(III), $\\text{LiAlH}_4$, in dry ether?",
    options: [
      { text: "Pentan-1-ol" },
      { text: "Pentan-2-ol" },
      { text: "Pentan-3-ol" },
      { text: "Pentanoic acid" }
    ],
    correctAnswer: 2,
    explanation: "1. Pentan-3-one is a ketone: $\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$.\n2. Reducing agents like $\\text{LiAlH}_4$ reduce ketones to secondary alcohols.\n3. The carbonyl group $\\text{C}=\\text{O}$ at Carbon-3 is converted into a secondary alcohol group $\\text{-CH(OH)-}$.\n4. Therefore, the product is pentan-3-ol.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_7-20260721",
    question: "An ester has the structural formula $\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$. Which products are formed when this ester is heated under reflux with aqueous sodium hydroxide?",
    options: [
      { text: "Propanoic acid and methanol" },
      { text: "Sodium propanoate and methanol" },
      { text: "Sodium ethanoate and ethanol" },
      { text: "Ethanoic acid and sodium methoxide" }
    ],
    correctAnswer: 1,
    explanation: "1. The ester is methyl propanoate ($\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$).\n2. Base hydrolysis using NaOH cleaves the ester bond into a carboxylate salt and an alcohol.\n3. The acid part (propanoate) forms the sodium salt: sodium propanoate ($\\text{CH}_3\\text{CH}_2\\text{COONa}$).\n4. The alcohol part (methyl) forms methanol ($\\text{CH}_3\\text{OH}$).\n5. Base hydrolysis is irreversible and goes to completion.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_8-20260721",
    question: "Which reagent is used to prepare butanoyl chloride from butanoic acid at room temperature in the laboratory?",
    options: [
      { text: "Concentrated hydrochloric acid" },
      { text: "Phosphorus(V) chloride ($\\text{PCl}_5$)" },
      { text: "Chlorine gas and UV light" },
      { text: "Sodium chloride and concentrated sulfuric acid" }
    ],
    correctAnswer: 1,
    explanation: "1. Acyl chlorides are prepared by replacing the $-\\text{OH}$ group of a carboxylic acid with a $-\\text{Cl}$ atom.\n2. The standard laboratory reagent for this conversion is phosphorus(V) chloride ($\\text{PCl}_5$) at room temperature.\n3. The reaction produces the acyl chloride, phosphorus oxychloride ($\\text{POCl}_3$), and hydrogen chloride ($\\text{HCl}$) gas.\n4. Concentrated HCl is not reactive enough to convert carboxylic acids to acyl chlorides.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_9-20260721",
    question: "What is the organic product formed when propanoyl chloride reacts with methylamine ($\\text{CH}_3\\text{NH}_2$)?",
    options: [
      { text: "Methyl propanoate" },
      { text: "N-methylpropanamide" },
      { text: "Propanamide" },
      { text: "Methylammonium propanoate" }
    ],
    correctAnswer: 1,
    explanation: "1. Acyl chlorides react with primary amines via a nucleophilic addition-elimination mechanism.\n2. The amine nitrogen attacks the carbonyl carbon, and a chloride ion is eliminated alongside a proton.\n3. This forms an N-substituted amide bond.\n4. Propanoyl chloride ($\\text{CH}_3\\text{CH}_2\\text{COCl}$) and methylamine ($\\text{CH}_3\\text{NH}_2$) react to form N-methylpropanamide ($\\text{CH}_3\\text{CH}_2\\text{CONHCH}_3$) and HCl.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_10-20260721",
    question: "Which of the following statements about condensation polymerisation is correct?",
    options: [
      { text: "It requires monomers with carbon-carbon double bonds" },
      { text: "It produces polymers without releasing any other compounds" },
      { text: "Polyesters are formed by reacting dicarboxylic acids with diols, eliminating water molecules" },
      { text: "Condensation polymers are resistant to biodegradation due to strong ester linkages" }
    ],
    correctAnswer: 2,
    explanation: "1. Condensation polymerisation involves monomers with two functional groups reacting together with the elimination of a small molecule like water ($\\text{H}_2\\text{O}$) or hydrogen chloride ($\\text{HCl}$).\n2. Polyesters are formed by reacting a dicarboxylic acid and a diol, forming ester linkages and releasing $\\text{H}_2\\text{O}$. This is correct.\n3. Addition polymerisation requires double bonds and does not release small molecules.\n4. Condensation polymers like polyesters are biodegradable because the ester linkages can be hydrolysed by acids or bases.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_11-20260721",
    question: "A single enantiomer of an optically active halogenoalkane is reacted with hydroxide ions. The resulting alcohol product is found to be a racemic mixture that is optically inactive. Which mechanism does this reaction follow, and what feature explains this outcome?",
    options: [
      { text: "$S_N2$ mechanism, because of Walden inversion" },
      { text: "$S_N1$ mechanism, because the nucleophile attacks a planar carbocation intermediate with equal probability from either side" },
      { text: "$S_N2$ mechanism, because the transition state has trigonal bipyramidal geometry" },
      { text: "$S_N1$ mechanism, because the rate-determining step involves the nucleophile" }
    ],
    correctAnswer: 1,
    explanation: "1. A racemic mixture is formed when both enantiomers are produced in equal (50:50) amounts.\n2. In an $S_N1$ mechanism, the rate-determining step is the ionization of the halogenoalkane to form a planar carbocation intermediate.\n3. The incoming nucleophile ($\\text{OH}^-$) has an equal probability of attacking this planar carbocation from either the left or the right side.\n4. This equal probability of attack results in racemisation (50:50 mixture of enantiomers) and a complete loss of optical activity.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_12-20260721",
    question: "A single enantiomer of a primary halogenoalkane undergoes nucleophilic substitution via an $S_N2$ mechanism. What is the stereochemical outcome for the carbon atom undergoing substitution?",
    options: [
      { text: "Complete racemisation yielding an optically inactive product" },
      { text: "Inversion of configuration (Walden inversion) yielding a single enantiomer" },
      { text: "Retention of configuration with no change in spatial arrangement" },
      { text: "Formation of a mixture of geometric and optical isomers" }
    ],
    correctAnswer: 1,
    explanation: "1. The $S_N2$ mechanism is a single-step concerted process.\n2. The nucleophile attacks from the opposite side of the leaving group (backside attack).\n3. As the carbon-halogen bond breaks and the carbon-nucleophile bond forms, the other three groups are pushed through, resulting in an inversion of configuration (Walden inversion).\n4. The product remains optically active as a single enantiomer with inverted configuration.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_13-20260721",
    question: "The boiling temperatures of butane, propanal, and propan-1-ol are $272\\text{ K}$, $322\\text{ K}$, and $370\\text{ K}$ respectively. Which statement correctly accounts for this trend?",
    options: [
      { text: "Propanal forms intermolecular hydrogen bonds, raising its boiling point above butane" },
      { text: "Propan-1-ol molecules experience only London forces and dipole-dipole interactions" },
      { text: "Propanal molecules experience dipole-dipole interactions which are stronger than London forces in butane but weaker than hydrogen bonding in propan-1-ol" },
      { text: "Butane is polar due to the presence of C-H bonds, whereas propanal is completely non-polar" }
    ],
    correctAnswer: 2,
    explanation: "1. Butane is an alkane (non-polar) and experiences only London forces, resulting in the lowest boiling temperature ($272\\text{ K}$).\n2. Propanal is a carbonyl compound and has a polar $\\text{C}=\\text{O}$ double bond, so it experiences permanent dipole-dipole interactions in addition to London forces ($322\\text{ K}$).\n3. Propan-1-ol is an alcohol and contains the $-\\text{OH}$ group, allowing it to form strong intermolecular hydrogen bonds, which require the most energy to break ($370\\text{ K}$).\n4. Carbonyl compounds like propanal cannot form hydrogen bonds with each other because they lack a hydrogen atom bonded to an oxygen.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_14-20260721",
    question: "Propanone is completely miscible with water, whereas pentan-2-one has a solubility of only $5.6\\text{ g per } 100\\text{ g of water}$ at $298\\text{ K}$. What is the reason for this difference in solubility?",
    options: [
      { text: "Pentan-2-one is unable to form hydrogen bonds with water molecules" },
      { text: "Pentan-2-one has a larger non-polar, hydrophobic hydrocarbon tail which disrupts the water hydrogen-bonding network" },
      { text: "Propanone reacts chemically with water to form a stable diol intermediate" },
      { text: "The carbonyl group in pentan-2-one is non-polar due to steric hindrance" }
    ],
    correctAnswer: 1,
    explanation: "1. Both propanone and pentan-2-one contain polar $\\text{C}=\\text{O}$ groups and can form hydrogen bonds with water molecules.\n2. However, pentan-2-one has a longer hydrocarbon chain (a 5-carbon chain) compared to propanone (a 3-carbon chain).\n3. This non-polar, hydrophobic alkyl tail disrupts the hydrogen bonds between water molecules without forming strong interactions in return.\n4. As the hydrophobic part of the molecule becomes larger, solubility in water decreases.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_15-20260721",
    question: "An alcohol is warmed with aqueous iodine in the presence of sodium hydroxide, yielding a yellow precipitate. Which of the following alcohols is it?",
    options: [
      { text: "Propan-1-ol" },
      { text: "2-methylpropan-1-ol" },
      { text: "Butan-2-ol" },
      { text: "Butan-1-ol" }
    ],
    correctAnswer: 2,
    explanation: "1. The reaction described is the iodoform (triiodomethane) test, which gives a yellow precipitate of $\\text{CHI}_3$ in the presence of $\\text{CH}_3\\text{CO-}$ or $\\text{CH}_3\\text{CH(OH)-}$ groups.\n2. Propan-1-ol, 2-methylpropan-1-ol, and butan-1-ol are primary alcohols (except propan-1-ol which oxidises to propanal, etc., none contains the $\\text{CH}_3\\text{CH(OH)-}$ group except ethanol).\n3. Butan-2-ol is a secondary alcohol with structure $\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$, which contains the $\\text{CH}_3\\text{CH(OH)-}$ group.\n4. Therefore, it is oxidised to butanone (a methyl ketone) in situ and reacts with iodine/NaOH to yield the yellow precipitate.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_16-20260721",
    question: "A sample of a carboxylic acid is analyzed in the vapor phase using mass spectrometry. A peak is observed at an $m/z$ ratio of $120$. Which carboxylic acid is present in the sample?",
    options: [
      { text: "Methanoic acid" },
      { text: "Ethanoic acid" },
      { text: "Propanoic acid" },
      { text: "Butanoic acid" }
    ],
    correctAnswer: 1,
    explanation: "1. In the gas phase and in the absence of polar solvents, carboxylic acids exist as stable dimers held together by double hydrogen bonds.\n2. The observed peak at $m/z = 120$ corresponds to the molecular mass of the dimer.\n3. The monomer mass must be exactly half of this dimer mass: $120 / 2 = 60\\text{ g mol}^{-1}$.\n4. An organic compound with a molar mass of $60\\text{ g mol}^{-1}$ containing a carboxyl group ($-\\text{COOH}$) is ethanoic acid ($\\text{CH}_3\\text{COOH}$, $Mr = 15 + 12 + 32 + 1 = 60$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_17-20260721",
    question: "Carboxylic acids have higher boiling temperatures than alcohols of similar molecular mass. What is the molecular explanation for this difference?",
    options: [
      { text: "Carboxylic acids have three polar bonds, which increases their overall molecular size" },
      { text: "Carboxylic acid molecules associate via double hydrogen bonds to form stable dimers" },
      { text: "Alcohols are unable to form intermolecular hydrogen bonds" },
      { text: "Carboxylic acids are strong acids that completely dissociate in the liquid state" }
    ],
    correctAnswer: 1,
    explanation: "1. Both alcohols and carboxylic acids can form intermolecular hydrogen bonds.\n2. However, carboxylic acids can align to form stable dimers, where two molecules are joined by a pair of hydrogen bonds.\n3. These dimers double the effective molecular size and require significantly more thermal energy to vaporise than the single hydrogen-bonded networks of alcohols.\n4. Dissociation to ions does not occur in pure liquid state and is unrelated to boiling point.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_18-20260721",
    question: "Pentanal, pentan-2-one, and pentan-3-one all have a boiling temperature of $102^\\circ\\text{C}$ and form orange precipitates with 2,4-DNPH. How can a student experimentally identify which specific carbonyl compound is present in an unknown sample?",
    options: [
      { text: "By measuring the boiling temperature of the mixture under vacuum" },
      { text: "By purifying, drying, and measuring the melting temperature of the 2,4-DNPH derivative" },
      { text: "By using Fehling's solution, which yields a positive test for all three" },
      { text: "By using Tollens' reagent, which forms a silver mirror with both ketones" }
    ],
    correctAnswer: 1,
    explanation: "1. Since all three isomers share the same boiling point ($102^\\circ\\text{C}$), simple distillation cannot distinguish them.\n2. However, the hydrazone derivatives formed when they react with 2,4-DNPH have distinct and characteristic melting temperatures (pentanal derivative: $104^\\circ\\text{C}$; pentan-2-one derivative: $144^\\circ\\text{C}$; pentan-3-one derivative: $156^\\circ\\text{C}$).\n3. By filtering, recrystallising, drying, and measuring the melting point of the derivative, the student can match the experimental value to database records to identify the original compound.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_19-20260721",
    question: "A triglyceride molecule containing three stearic acid residues (glyceryl tristearate) is heated under reflux with aqueous sodium hydroxide. Which of the following correctly lists the organic products of this reaction?",
    options: [
      { text: "Propane-1,2-diol and stearic acid" },
      { text: "Propane-1,2,3-triol and sodium stearate" },
      { text: "Propan-1-ol and sodium stearate" },
      { text: "Propane-1,2,3-triol and ethyl stearate" }
    ],
    correctAnswer: 1,
    explanation: "1. Triglycerides are triesters of glycerol (propane-1,2,3-triol) and fatty acids.\n2. Base hydrolysis (saponification) of glyceryl tristearate with NaOH cleaves the three ester linkages.\n3. The alcohol part yields glycerol (propane-1,2,3-triol).\n4. The fatty acid part is deprotonated by NaOH to form its sodium salt: sodium stearate (soap).\n5. Propane-1,2-diol is not glycerol, and free stearic acid is not formed in alkaline conditions.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_20-20260721",
    question: "A student attempts to prepare a polyester by mixing propanedioic acid ($\\text{HOOCCH}_2\\text{COOH}$) and methanol ($\\text{CH}_3\\text{OH}$). Why does this reaction fail to produce a polymer?",
    options: [
      { text: "Propanedioic acid is monofunctional, causing immediate chain termination" },
      { text: "Methanol is monofunctional, which terminates the carbon chain once it reacts" },
      { text: "Methanol reacts with itself to form dimethyl ether instead of reacting with the acid" },
      { text: "An addition polymerisation catalyst is required to initiate the reaction" }
    ],
    correctAnswer: 1,
    explanation: "1. For polymerisation to occur, monomers must be bifunctional (have reactive groups at both ends) to allow the chain to continue growing.\n2. Propanedioic acid is bifunctional (two $-\\text{COOH}$ groups).\n3. Methanol ($\\text{CH}_3\\text{OH}$) is monofunctional (only one $-\\text{OH}$ group).\n4. Once methanol reacts with one carboxyl group of the acid, that end of the molecule is blocked and cannot undergo further esterification, causing chain termination.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_21-20260721",
    question: "In the industrial production of polyesters like Terylene, benzene-1,4-dicarboxylic acid is reacted with ethane-1,2-diol. Why is the dicarboxylic acid preferred in industry over the corresponding diacyl chloride?",
    options: [
      { text: "The reaction with diacyl chloride does not go to completion" },
      { text: "Diacyl chloride polymerisation releases hazardous and corrosive hydrogen chloride gas" },
      { text: "Dicarboxylic acid polymerisation occurs at room temperature without heating" },
      { text: "Diacyl chlorides react with ethane-1,2-diol to form addition polymers instead" }
    ],
    correctAnswer: 1,
    explanation: "1. While diacyl chlorides react very rapidly at room temperature, their condensation polymerisation releases gaseous hydrogen chloride (HCl) as a byproduct.\n2. HCl is highly toxic, acidic, and corrosive, which creates severe health, safety, and equipment corrosion risks in industrial factories.\n3. Using the dicarboxylic acid releases water ($\\text{H}_2\\text{O}$) as a byproduct instead, which is completely safe and environmentally benign.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_22-20260721",
    question: "A forensic scientist uses combined Gas Chromatography-Mass Spectrometry (GC-MS) to analyze a blood sample. What is the primary advantage of GC-MS over gas chromatography alone?",
    options: [
      { text: "GC separates the mixture and MS determines the exact concentration of each component" },
      { text: "GC separates the components of the mixture and MS identifies each component by its mass spectrum" },
      { text: "MS separates the mixture and GC is used to detect the retention time" },
      { text: "GC-MS is a non-destructive technique that allows the sample to be completely recovered" }
    ],
    correctAnswer: 1,
    explanation: "1. Gas chromatography (GC) is excellent at separating mixtures but cannot positively identify components because different compounds can have identical retention times.\n2. In GC-MS, GC separates the mixture and each pure component exits the column directly into the mass spectrometer (MS).\n3. The MS bombards the molecules to produce a unique mass spectrum (molecular ion and fragments), allowing positive identification against a database.\n4. Both techniques destroy the sample during detection.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_23-20260721",
    question: "Which of the following elements contains isotopes that are all suitable for analysis by Nuclear Magnetic Resonance (NMR) spectroscopy?",
    options: [
      { text: "Carbon-12 ($^{12}\\text{C}$) and Oxygen-16 ($^{16}\\text{O}$)" },
      { text: "Carbon-13 ($^{13}\\text{C}$) and Hydrogen-1 ($^{1}\\text{H}$)" },
      { text: "Oxygen-16 ($^{16}\\text{O}$) and Sulfur-32 ($^{32}\\text{S}$)" },
      { text: "Helium-4 ($^{4}\\text{He}$) and Carbon-12 ($^{12}\\text{C}$)" }
    ],
    correctAnswer: 1,
    explanation: "1. For a nucleus to be NMR-active, it must possess a net residual nuclear spin.\n2. This occurs only in nuclei with an odd number of nucleons (protons + neutrons).\n3. Carbon-13 ($^{13}\\text{C}$ has 13 nucleons) and Hydrogen-1 ($^{1}\\text{H}$ has 1 nucleon) both have odd nucleon numbers and are NMR-active.\n4. Carbon-12 ($^{12}\\text{C}$), Oxygen-16 ($^{16}\\text{O}$), and Sulfur-32 ($^{32}\\text{S}$) have even numbers of nucleons, meaning their spins cancel out, making them NMR-silent.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_24-20260721",
    question: "Tetramethylsilane (TMS) is added as a reference standard in proton NMR spectroscopy. Which of the following is NOT a reason why TMS is chosen?",
    options: [
      { text: "It contains 12 equivalent hydrogen atoms, yielding a single sharp peak" },
      { text: "It is chemically inert and does not react with the sample" },
      { text: "It has a high boiling point and remains in the solution permanently" },
      { text: "It is highly shielded, producing a signal far to the right of most organic compound peaks" }
    ],
    correctAnswer: 2,
    explanation: "1. TMS has a low boiling point ($26.5^\\circ\\text{C}$), making it highly volatile.\n2. This volatility is a major advantage because it allows TMS to be easily evaporated and removed from the sample after analysis to recover the pure analyte.\n3. The other options are true: it contains 12 equivalent protons (giving one strong peak), is chemically inert, and appears far upfield ($\\delta = 0\\text{ ppm}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_25-20260721",
    question: "How can a student easily distinguish between butanal and butanone using low-resolution proton ($^{1}\\text{H}$) NMR spectroscopy?",
    options: [
      { text: "Butanone has four peaks in its spectrum, whereas butanal has only three peaks" },
      { text: "Butanal has four peaks in its spectrum, including a peak at $\\delta \\approx 9.8\\text{ ppm}$, whereas butanone has three peaks and no peak above $\\delta = 3.0\\text{ ppm}$" },
      { text: "Butanal has a single peak representing all 8 protons, whereas butanone has three peaks" },
      { text: "Both compounds have three peaks, but butanone has a peak representing a hydroxyl proton" }
    ],
    correctAnswer: 1,
    explanation: "1. Butanal ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$) has 4 unique proton environments (terminal $-\\text{CH}_3$, intermediate $-\\text{CH}_2-$, adjacent $-\\text{CH}_2-$, and aldehyde $-\\text{CHO}$). It has 4 peaks, including a highly characteristic downfield aldehyde peak at $\\delta \\approx 9.8\\text{ ppm}$.\n2. Butanone ($\\text{CH}_3\\text{COCH}_2\\text{CH}_3$) has 3 unique proton environments (terminal $-\\text{CH}_3$, adjacent $-\\text{CH}_2-$, and methyl adjacent to carbonyl $-\\text{CH}_3$). It has 3 peaks, all appearing below $\\delta = 3.0\\text{ ppm}$.\n3. Neither compound contains a hydroxyl group.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_26-20260721",
    question: "What is the expected number of peaks and the simplest ratio of peak areas (integration trace) in the low-resolution proton ($^{1}\\text{H}$) NMR spectrum of propan-2-ol, $\\text{CH}_3\\text{CH(OH)CH}_3$?",
    options: [
      { text: "2 peaks with a ratio of $7:1$" },
      { text: "3 peaks with a ratio of $6:1:1$" },
      { text: "4 peaks with a ratio of $3:2:2:1$" },
      { text: "3 peaks with a ratio of $3:3:2$" }
    ],
    correctAnswer: 1,
    explanation: "1. Propan-2-ol has 8 hydrogen atoms in total.\n2. The six hydrogen atoms in the two terminal methyl ($-\\text{CH}_3$) groups are equivalent due to symmetry, forming 1 environment (6 protons).\n3. The single hydrogen atom on the central carbon ($-\\text{CH}-$) forms a second environment (1 proton).\n4. The hydrogen atom in the alcohol group ($-\\text{OH}$) forms a third environment (1 proton).\n5. Therefore, the spectrum has 3 peaks with a relative area ratio of $6:1:1$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_27-20260721",
    question: "Which of the following isomers of pentane ($\\text{C}_5\\text{H}_{12}$) shows exactly one peak in its low-resolution proton ($^{1}\\text{H}$) NMR spectrum?",
    options: [
      { text: "Pentane" },
      { text: "2-methylbutane" },
      { text: "2,2-dimethylpropane" },
      { text: "None of the isomers show only one peak" }
    ],
    correctAnswer: 2,
    explanation: "1. A single peak in proton NMR indicates that all hydrogen atoms in the molecule are chemically equivalent.\n2. In 2,2-dimethylpropane (neopentane, $\\text{C(CH}_3\\text{)}_4$), the central carbon has no hydrogens, and the four methyl groups are arranged symmetrically around it.\n3. All 12 hydrogen atoms are in identical environments, yielding exactly 1 peak.\n4. Pentane yields 3 peaks and 2-methylbutane yields 4 peaks.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_exam_1-20260721",
    question: "Which of the following amino acid structures contains exactly two chiral carbon atoms?",
    options: [
      { text: "$\\text{H}_2\\text{NCH(COOH)CH}_2\\text{CH}_2\\text{OH}$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH(CH}_3)_2$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH}_2\\text{C}_6\\text{H}_5$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH(CH}_3)\\text{CH}_2\\text{CH}_3$" }
    ],
    correctAnswer: 3,
    explanation: "1. For a carbon atom to be chiral, it must be bonded to four different groups.\n2. In all options, Carbon-2 (carrying $-\\text{NH}_2$ and $-\\text{COOH}$) is chiral.\n3. In option D (isoleucine analogue), Carbon-3 is bonded to $-\\text{H}$, $-\\text{CH}_3$, $-\\text{CH}_2\\text{CH}_3$, and the $-\\text{CH(NH}_2)\\text{COOH}$ group.\n4. Since these four groups are completely different, Carbon-3 is also chiral, giving the molecule exactly two chiral carbon atoms.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_2-20260721",
    question: "The same carboxylic acid is obtained either by the hydrolysis of a nitrile $P$ or by the oxidation of an alcohol $Q$. Which pair could be $P$ and $Q$?",
    options: [
      { text: "$P = \\text{CH}_3\\text{CH}_2\\text{CN}$ and $Q = \\text{CH}_3\\text{CH}_2\\text{OH}$" },
      { text: "$P = \\text{(CH}_3)_2\\text{CHCN}$ and $Q = \\text{(CH}_3)_3\\text{COH}$" },
      { text: "$P = \\text{C}_6\\text{H}_5\\text{CH(CH}_3)\\text{CN}$ and $Q = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH(OH)CH}_3$" },
      { text: "$P = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CN}$ and $Q = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH}_2\\text{OH}$" }
    ],
    correctAnswer: 3,
    explanation: "1. Hydrolysis of nitrile $P$ converts the $-\\text{CN}$ group to $-\\text{COOH}$ (maintaining the same carbon skeleton, total carbons = chain carbons + 1).\n2. Oxidation of primary alcohol $Q$ converts the $-\\text{CH}_2\\text{OH}$ group to $-\\text{COOH}$ (maintaining the same total carbon number).\n3. In Option D, nitrile $P$ is phenylethanenitrile (8 carbons), which hydrolyses to phenylethanoic acid ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}$).\n4. Alcohol $Q$ is 2-phenylethan-1-ol (8 carbons), which is a primary alcohol and oxidises to phenylethanoic acid ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_3-20260721",
    question: "Which pair of reactants produces an ester with the molecular formula $\\text{C}_3\\text{H}_7\\text{COOC}_2\\text{H}_5$?",
    options: [
      { text: "$\\text{C}_2\\text{H}_5\\text{Cl}$ and $$\\text{C}_3\\text{H}_7\\text{COOH}$" },
      { text: "$\\text{C}_2\\text{H}_5\\text{OH}$ and $$\\text{C}_3\\text{H}_7\\text{COOH}$" },
      { text: "$\\text{C}_3\\text{H}_7\\text{OH}$ and $$\\text{C}_2\\text{H}_5\\text{COCl}$" },
      { text: "$\\text{C}_3\\text{H}_7\\text{OH}$ and $$\\text{C}_2\\text{H}_5\\text{COOH}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The ester formula $\\text{C}_3\\text{H}_7\\text{COOC}_2\\text{H}_5$ is ethyl butanoate.\n2. The carboxylate part is derived from butanoic acid ($\\text{C}_3\\text{H}_7\\text{COOH}$).\n3. The alkyl part is derived from ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$).\n4. Reacting ethanol and butanoic acid under reflux in the presence of an acid catalyst produces ethyl butanoate.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_4-20260721",
    question: "One of the constituents of beeswax has the formula $\\text{CH}_3\\text{(CH}_2)_{24}\\text{CO}_2\\text{(CH}_2)_{29}\\text{CH}_3$. What are the products of its alkaline hydrolysis?",
    options: [
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COOH}$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{O}^-$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COOH}$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{O}^-$" }
    ],
    correctAnswer: 2,
    explanation: "1. Alkaline hydrolysis of an ester using aqueous base (e.g. NaOH) cleaves the ester bond to form a carboxylate salt/ion and an alcohol.\n2. The carboxylic acid portion ($\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO-}$) is deprotonated in alkaline conditions to yield the carboxylate ion $\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$.\n3. The alcohol portion yields the long-chain alcohol $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_5-20260721",
    question: "An organic compound gives a positive tri-iodomethane (iodoform) test and a yellow precipitate with 2,4-dinitrophenylhydrazine, but does not react with either Tollens' reagent or Fehling's solution. Which compound is it?",
    options: [
      { text: "$\\text{CH}_3\\text{CHO}$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{COCH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$" }
    ],
    correctAnswer: 2,
    explanation: "1. A positive 2,4-DNPH test confirms the presence of a carbonyl group (aldehyde or ketone), ruling out alcohol (B).\n2. No reaction with Tollens' or Fehling's confirms the compound is a ketone rather than an aldehyde, ruling out aldehydes (A and D).\n3. A positive iodoform test confirms the presence of a methyl carbonyl group ($\\text{CH}_3\\text{CO-}$).\n4. Butanone ($\\text{CH}_3\\text{CH}_2\\text{COCH}_3$) contains the methyl ketone group, reacts with 2,4-DNPH, and does not oxidise with Tollens' or Fehling's.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_kin_ed_exam_9-20260726",
    question: "The reaction energy profile for a two-step reaction is shown in the diagram below:\n\nWhich step is the rate-determining step, and what is its activation energy?",
    options: [
      { text: "Step 1; $+150\\text{ kJ mol}^{-1}$" },
      { text: "Step 2; $+80\\text{ kJ mol}^{-1}$" },
      { text: "Step 1; $+250\\text{ kJ mol}^{-1}$" },
      { text: "Step 2; $+30\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The rate-determining step is the slowest step, which corresponds to the step with the highest activation energy barrier.\n2. The activation energy for Step 1 is the difference between Peak 1 (TS1) and the reactants: $250 - 100 = 150\\text{ kJ mol}^{-1}$.\n3. The activation energy for Step 2 is the difference between Peak 2 (TS2) and the intermediate valley: $180 - 150 = 30\\text{ kJ mol}^{-1}$.\n4. Therefore, Step 1 is the rate-determining step with an activation energy of $+150\\text{ kJ mol}^{-1}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 550 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <defs>
    <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <line x1="70" y1="320" x2="70" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-head)" />
  <line x1="70" y1="320" x2="510" y2="320" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="30" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 30 35)" text-anchor="end">Energy / kJ mol⁻¹</text>
  <text x="500" y="338" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Reaction Coordinate</text>
  <path d="M 70,220 C 110,220 150,70 190,70 C 230,70 250,170 290,170 C 330,170 350,140 370,140 C 390,140 410,270 450,270" fill="none" stroke="#38bdf8" stroke-width="3" />
  <line x1="70" y1="220" x2="110" y2="220" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="70" x2="190" y2="70" stroke="#ef4444" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="170" x2="290" y2="170" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="140" x2="370" y2="140" stroke="#eab308" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="270" x2="450" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3" />
  
  <line x1="65" y1="70" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="74" fill="#cbd5e1" font-size="10" text-anchor="end">250</text>
  
  <line x1="65" y1="140" x2="70" y2="140" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="144" fill="#cbd5e1" font-size="10" text-anchor="end">180</text>
  
  <line x1="65" y1="170" x2="70" y2="170" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="174" fill="#cbd5e1" font-size="10" text-anchor="end">150</text>
  
  <line x1="65" y1="220" x2="70" y2="220" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="224" fill="#cbd5e1" font-size="10" text-anchor="end">100</text>
  
  <line x1="65" y1="270" x2="70" y2="270" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="274" fill="#cbd5e1" font-size="10" text-anchor="end">50</text>
  
  <text x="120" y="215" fill="#cbd5e1" font-size="10">Reactants</text>
  <text x="200" y="65" fill="#ef4444" font-size="10">TS1</text>
  <text x="300" y="165" fill="#cbd5e1" font-size="10">Intermediate</text>
  <text x="380" y="135" fill="#eab308" font-size="10">TS2</text>
  <text x="460" y="265" fill="#cbd5e1" font-size="10">Products</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_10-20260726",
    question: "To follow the rate of reaction between propanone and iodine using a colorimeter, a student first constructs the calibration curve shown below. Why is this curve essential for the experiment?",
    options: [
      { text: "To prove that the reaction is zero-order with respect to iodine." },
      { text: "To convert the measured absorbance values at different times into actual iodine concentrations." },
      { text: "To calculate the activation energy using the Beer-Lambert law." },
      { text: "To determine the rate constant k directly from the gradient." }
    ],
    correctAnswer: 1,
    explanation: "1. A colorimeter measures absorbance, which depends on the intensity of light transmitted through the solution.\n2. To calculate rate equations and rate constants, we need concentration values rather than raw absorbance values.\n3. The calibration curve provides a direct reference to translate absorbance readings at specific times into actual concentrations of iodine in mol dm⁻³.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 500 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <line x1="60" y1="320" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="460" y2="320" stroke="#94a3b8" stroke-width="2" />
  <text x="35" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 35 35)" text-anchor="end">Absorbance (at 480 nm)</text>
  <text x="450" y="360" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">[I₂] / mol dm⁻³</text>
  <line x1="60" y1="320" x2="420" y2="80" stroke="#10b981" stroke-width="3" />
  <circle cx="150" cy="260" r="4" fill="#ef4444" />
  <circle cx="240" cy="200" r="4" fill="#ef4444" />
  <circle cx="330" cy="140" r="4" fill="#ef4444" />
  <circle cx="420" cy="80" r="4" fill="#ef4444" />
  <text x="50" y="324" fill="#94a3b8" font-size="10" text-anchor="end">0.0</text>
  <text x="50" y="264" fill="#94a3b8" font-size="10" text-anchor="end">0.2</text>
  <text x="50" y="204" fill="#94a3b8" font-size="10" text-anchor="end">0.4</text>
  <text x="50" y="144" fill="#94a3b8" font-size="10" text-anchor="end">0.6</text>
  <text x="50" y="84" fill="#94a3b8" font-size="10" text-anchor="end">0.8</text>
  <text x="60" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.0</text>
  <text x="150" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.002</text>
  <text x="240" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.004</text>
  <text x="330" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.006</text>
  <text x="420" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.008</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_11-20260726",
    question: "The rate data below was obtained for the reaction: $2\\text{NO(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$ at a constant temperature:\n\n| Experiment | [NO] / mol dm⁻³ | [O₂] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: |\n| 1 | 0.010 | 0.010 | $1.2 \\times 10^{-4}$ |\n| 2 | 0.020 | 0.010 | $4.8 \\times 10^{-4}$ |\n| 3 | 0.010 | 0.020 | $2.4 \\times 10^{-4}$ |\n\nUsing this data, calculate the value and state the units of the rate constant, $k$:",
    options: [
      { text: "$1.2 \\times 10^2\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "$1.2\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$1.2 \\times 10^4\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "$1.2 \\times 10^2\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. Compare Exp 1 & 2: [O₂] is constant, [NO] doubles. The rate increases by a factor of 4 ($4.8 \\times 10^{-4} / 1.2 \\times 10^{-4} = 4$). Order with respect to NO is 2.\n2. Compare Exp 1 & 3: [NO] is constant, [O₂] doubles. The rate doubles ($2.4 \\times 10^{-4} / 1.2 \\times 10^{-4} = 2$). Order with respect to O₂ is 1.\n3. The rate equation is Rate = k[NO]²[O₂] (overall order = 3).\n4. Calculate k: $k = \\text{Rate} / ([\\text{NO}]^2[\\text{O}_2]) = (1.2 \\times 10^{-4}) / (0.010^2 \\times 0.010) = 1.2 \\times 10^2\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_12-20260726",
    question: "A student collected the following data for Arrhenius values of a chemical reaction:\n\n| Temperature T / K | 1/T / 10⁻³ K⁻¹ | ln(k / s⁻¹) |\n| :---: | :---: | :---: |\n| 300 | 3.33 | -10.0 |\n| 320 | 3.13 | -7.7 |\n\nCalculate the activation energy ($E_a$) of the reaction using this data. ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)",
    options: [
      { text: "$95.6\\text{ kJ mol}^{-1}$" },
      { text: "$95600\\text{ kJ mol}^{-1}$" },
      { text: "$11.5\\text{ kJ mol}^{-1}$" },
      { text: "$47.8\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The gradient ($m$) of the ln k against 1/T plot is $m = -E_a / R$.\n2. Calculate $m$: $m = \\Delta \\ln k / \\Delta (1/T) = (-7.7 - (-10.0)) / (3.13 \\times 10^{-3} - 3.33 \\times 10^{-3}) = 2.3 / (-0.20 \\times 10^{-3}) = -11500\\text{ K}$.\n3. Calculate $E_a$: $E_a = -m \\times R = -(-11500) \\times 8.31 = 95565\\text{ J mol}^{-1}$.\n4. Convert to kJ mol⁻¹: $95565 / 1000 = 95.6\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_13-20260726",
    question: "A student plots the graph shown below during the kinetic investigation of the reaction: $\\text{2A} \\rightarrow \\text{Products}$.\n\nWhat is the overall order of the reaction with respect to A, and what does the gradient of the line represent?",
    options: [
      { text: "First order; the gradient represents $-k$" },
      { text: "Second order; the gradient represents $+k$" },
      { text: "Second order; the gradient represents $-k$" },
      { text: "Zero order; the gradient represents $+k$" }
    ],
    correctAnswer: 1,
    explanation: "1. For a second-order reaction (Rate = k[A]²), the integrated rate equation is: 1/[A] = kt + 1/[A]₀.\n2. A plot of 1/[A] against time (t) yields a straight line with a positive gradient.\n3. The positive gradient of this line is equal to the rate constant, +k.\n4. Plots of ln[A] vs time (which are linear for first-order reactions) have a negative gradient (-k).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 500 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <line x1="60" y1="320" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="460" y2="320" stroke="#94a3b8" stroke-width="2" />
  <text x="35" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 35 35)" text-anchor="end">1 / [A] / dm³ mol⁻¹</text>
  <text x="450" y="350" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Time / s</text>
  <line x1="60" y1="280" x2="420" y2="80" stroke="#38bdf8" stroke-width="3" />
  <text x="50" y="284" fill="#94a3b8" font-size="10" text-anchor="end">10</text>
  <text x="50" y="84" fill="#94a3b8" font-size="10" text-anchor="end">90</text>
  <text x="60" y="335" fill="#94a3b8" font-size="10" text-anchor="middle">0</text>
  <text x="420" y="335" fill="#94a3b8" font-size="10" text-anchor="middle">90</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_14-20260726",
    question: "Reaction X has an activation energy ($E_a$) of $+40\\text{ kJ mol}^{-1}$, while Reaction Y has an activation energy of $+120\\text{ kJ mol}^{-1}$. If the temperature of both reactions is increased from $300\\text{ K}$ to $310\\text{ K}$ at constant concentration, which reaction experiences the greater proportional increase in rate, and why?",
    options: [
      { text: "Reaction X; because a lower activation energy means molecules collide more frequently." },
      { text: "Reaction Y; because the fraction of molecules with energy $\\ge E_a$ increases much more significantly for reactions with a higher energy barrier." },
      { text: "Reaction X; because raising the temperature by $10\\text{ K}$ always doubles the rate of low $E_a$ reactions." },
      { text: "Reaction Y; because the rate constant k is inversely proportional to temperature in the Arrhenius equation." }
    ],
    correctAnswer: 1,
    explanation: "1. The fraction of molecules with energy $\\ge E_a$ is represented by the term $e^{-E_a/RT}$ in the Arrhenius equation.\n2. For reactions with a high activation energy ($E_a$), raising the temperature shifts the Maxwell-Boltzmann distribution, causing a very large proportional increase in the number of molecules capable of reacting.\n3. For low $E_a$ reactions, a large fraction of molecules already has enough energy, so the increase is proportionally smaller.\n4. Therefore, Reaction Y experiences a much greater proportional increase in rate.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_15-20260726",
    question: "The graph below shows how the initial rate of a heterogeneous, metal-catalyzed gas reaction changes as the pressure of the gaseous reactant is increased:\n\nWhich statement correctly explains the shape of the curve at high pressures?",
    options: [
      { text: "The reaction becomes zero-order because the active sites on the catalyst surface are completely saturated with reactant molecules." },
      { text: "The reaction becomes first-order because the high pressure poisons the catalyst surface permanently." },
      { text: "The reaction rate decreases because reactant molecules desorb too rapidly from the surface." },
      { text: "The activation energy increases at high pressures, preventing further rate increases." }
    ],
    correctAnswer: 0,
    explanation: "1. At low pressures (left side), the rate is proportional to pressure (first-order) because more active sites become occupied as pressure increases.\n2. At high pressures (right side), the rate levels off and becomes independent of pressure (zero-order).\n3. This occurs because all available active sites on the solid catalyst surface are fully occupied (saturated) with adsorbed reactant molecules.\n4. Adding more pressure cannot increase the rate further since there are no free sites for additional reactants to adsorb and react.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 500 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <line x1="60" y1="320" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="460" y2="320" stroke="#94a3b8" stroke-width="2" />
  <text x="35" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 35 35)" text-anchor="end">Initial Rate of Reaction</text>
  <text x="450" y="340" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Reactant Pressure / atm</text>
  <path d="M 60,320 Q 200,120 300,120 L 460,120" fill="none" stroke="#38bdf8" stroke-width="3" />
  <text x="380" y="105" fill="#10b981" font-size="10" font-weight="bold">Zero-Order (Saturation)</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_16-20260726",
    question: "When evaluating catalysts for a large-scale chemical process, a green chemistry perspective favors heterogeneous catalysts over homogeneous catalysts. What is the primary chemical reason for this preference?",
    options: [
      { text: "Heterogeneous catalysts are easily separated from the reaction products by filtration, minimizing energy use and waste." },
      { text: "Heterogeneous catalysts always have lower activation energies than homogeneous catalysts." },
      { text: "Heterogeneous catalysts are not susceptible to catalyst poisoning by impurities." },
      { text: "Heterogeneous catalysts react in the same phase as the reactants, increasing collision frequency." }
    ],
    correctAnswer: 0,
    explanation: "1. One of the key principles of green chemistry is to prevent waste and minimize energy use.\n2. Homogeneous catalysts are in the same phase as products, making separation difficult, chemical-intensive, and energy-consuming (e.g., fractional distillation).\n3. Heterogeneous catalysts are in a different phase (solid) from the liquid or gas reaction mixture, allowing easy separation by simple filtration or flow-through systems.\n4. While homogeneous catalysts are often highly active, the ease of recycling and waste prevention makes heterogeneous catalysts greener in large-scale industry.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_17-20260726",
    question: "In a kinetic study of the acid-catalyzed hydrolysis of methyl ethanoate, samples are quenched and titrated with standard $\\text{NaOH(aq)}$. If the volume of $\\text{NaOH}$ required at time $t$ is $V_t$ and the volume required at completion (time $\\infty$) is $V_\\infty$, which expression is directly proportional to the concentration of the ester remaining at time $t$?",
    options: [
      { text: "$V_\\infty - V_t$" },
      { text: "$V_t$" },
      { text: "$V_\\infty$" },
      { text: "$V_t - V_0$" }
    ],
    correctAnswer: 0,
    explanation: "1. The base ($\\text{NaOH}$) reacts with the ethanoic acid produced during the reaction.\n2. The total volume at completion ($V_\\infty$) represents the total amount of acid produced, which is equal to the initial concentration of the ester.\n3. The volume at time $t$ ($V_t$) represents the amount of acid produced up to time $t$.\n4. Therefore, the difference ($V_\\infty - V_t$) is proportional to the remaining unreacted ester concentration.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_18-20260726",
    question: "For the first-order decomposition of gas A: $\\text{A(g)} \\rightarrow \\text{B(g)} + \\text{C(g)}$. The initial pressure of A is $P_0$. At time $t$, the total pressure of the mixture is $P_{\\text{total}}$. What is the expression for the partial pressure of reactant A ($P_{\\text{A}}$) at time $t$?",
    options: [
      { text: "$2P_0 - P_{\\text{total}}$" },
      { text: "$P_{\\text{total}} - P_0$" },
      { text: "$P_0 - P_{\\text{total}}$" },
      { text: "$\\frac{P_{\\text{total}} - P_0}{2}$" }
    ],
    correctAnswer: 0,
    explanation: "1. Let $x$ be the decrease in partial pressure of A at time $t$, so $P_{\\text{A}} = P_0 - x$.\n2. The partial pressures of the products are $P_{\\text{B}} = x$ and $P_{\\text{C}} = x$.\n3. The total pressure is the sum of all partial pressures: $P_{\\text{total}} = (P_0 - x) + x + x = P_0 + x$.\n4. Rearranging for $x$ gives: $x = P_{\\text{total}} - P_0$.\n5. Substitute $x$ back into the expression for A: $P_{\\text{A}} = P_0 - (P_{\\text{total}} - P_0) = 2P_0 - P_{\\text{total}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_19-20260726",
    question: "The reaction between ethanedioic acid and acidified manganate(VII) ions is slow initially but accelerates as $\\text{Mn}^{2+}\\text{(aq)}$ ions are formed. How can the initial slow period (induction period) of this reaction be avoided in a laboratory experiment?",
    options: [
      { text: "By adding a few drops of manganese(II) sulfate solution before starting the reaction." },
      { text: "By bubbling carbon dioxide gas through the mixture." },
      { text: "By conducting the reaction in an ice bath." },
      { text: "By adding concentrated hydrochloric acid as a dehydrating agent." }
    ],
    correctAnswer: 0,
    explanation: "1. The reaction is autocatalytic, where $\\text{Mn}^{2+}$ is the product that acts as the catalyst.\n2. Initially, no $\\text{Mn}^{2+}$ is present, which is why the reaction starts very slowly (the induction period).\n3. Adding a few drops of manganese(II) sulfate ($\\text{MnSO}_4$) introduces $\\text{Mn}^{2+}$ ions from the start.\n4. This immediately provides the catalyst, allowing the reaction to proceed rapidly from the beginning.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_20-20260726",
    question: "A halogenoalkane undergoes substitution. When the reaction is conducted in a polar protic solvent (such as an ethanol-water mixture), the rate is independent of the nucleophile concentration (first-order). When conducted in a polar aprotic solvent (such as propanone), the rate depends on both the halogenoalkane and the nucleophile concentration (second-order). Which statement correctly explains this observation?",
    options: [
      { text: "Polar protic solvents stabilize the carbocation intermediate via hydrogen bonding, favoring the SN1 mechanism, whereas polar aprotic solvents do not stabilize the intermediate, forcing the reaction via SN2." },
      { text: "Polar aprotic solvents increase the activation energy of the SN1 mechanism by protonating the nucleophile." },
      { text: "Polar protic solvents increase the rate of SN2 reactions by solvating the leaving halide group very strongly." },
      { text: "The reaction in propanone is faster because propanone acts as a catalyst for the SN1 mechanism." }
    ],
    correctAnswer: 0,
    explanation: "1. Polar protic solvents (containing O-H or N-H groups) can solvate and stabilize both the leaving halide ion and the carbocation intermediate through hydrogen bonding. This lowers the activation energy for the slow ionization step, favoring the SN1 mechanism (first-order).\n2. Polar aprotic solvents (like propanone) lack H-bond donors and cannot stabilize the carbocation intermediate effectively.\n3. In addition, aprotic solvents do not strongly solvate (cage) the nucleophile. This leaves the nucleophile highly reactive and free to attack the carbon atom directly, favoring the bimolecular SN2 mechanism (second-order).\n4. Therefore, changing the solvent from protic to aprotic changes the mechanism and the observed rate equation.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_21_star-20260726",
    question: "[★ Star Question] A student is designing a laboratory experiment to determine the activation energy ($E_a$) of a chemical reaction using the Arrhenius equation. Which of the following lists the correct assignment of variables to construct a valid Arrhenius plot?",
    options: [
      { text: "Independent variable: Temperature ($T$); Dependent variable: Rate constant ($k$); Control variable: Concentrations of reactants." },
      { text: "Independent variable: Rate constant ($k$); Dependent variable: Temperature ($T$); Control variable: Concentrations of reactants." },
      { text: "Independent variable: Temperature ($T$); Dependent variable: Initial rate; Control variable: Temperature." },
      { text: "Independent variable: Concentrations of reactants; Dependent variable: Rate constant ($k$); Control variable: Temperature." }
    ],
    correctAnswer: 0,
    explanation: "1. To construct an Arrhenius plot ($\\ln k$ vs $1/T$), the student must deliberately vary the temperature, making Temperature ($T$) the independent variable.\n2. For each temperature, the rate constant ($k$) is determined (calculated from the measured initial rate), making the rate constant ($k$) the dependent variable.\n3. The concentrations of all reactants must be kept constant (controlled) across all experiments so that change in rate is solely due to the change in temperature.\n4. Therefore, option A is the correct experimental setup.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_22_star-20260726",
    question: "[★ Star Question] In the stratosphere, ozone ($\\text{O}_3$) is decomposed by chlorine free radicals ($\\text{Cl}^\\bullet$) via the following mechanism:\n\nStep 1 (slow): $\\text{Cl}^\\bullet\\text{(g)} + \\text{O}_3\\text{(g)} \\rightarrow \\text{ClO}^\\bullet\\text{(g)} + \\text{O}_2\\text{(g)}$\nStep 2 (fast): $\\text{ClO}^\\bullet\\text{(g)} + \\text{O}\\text{(g)} \\rightarrow \\text{Cl}^\\bullet\\text{(g)} + \\text{O}_2\\text{(g)}$\n\nWhich of the following correctly identifies the rate equation for this ozone depletion and the role of $\\text{ClO}^\\bullet$?",
    options: [
      { text: "Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$; $\\text{ClO}^\\bullet$ acts as an intermediate." },
      { text: "Rate = $k[\\text{O}_3]$; $\\text{ClO}^\\bullet$ acts as a catalyst." },
      { text: "Rate = $k[\\text{ClO}^\\bullet][\\text{O}]$; $\\text{ClO}^\\bullet$ acts as a catalyst." },
      { text: "Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$; $\\text{ClO}^\\bullet$ acts as a catalyst." }
    ],
    correctAnswer: 0,
    explanation: "1. The rate-determining step is the slow step (Step 1). The reactants in this step are $\\text{Cl}^\\bullet$ and $\\text{O}_3$. Thus, the rate equation is: Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$.\n2. $\\text{ClO}^\\bullet$ is produced in the first step and consumed in the second step. It does not appear in the overall chemical equation, meaning it acts as a reaction intermediate.\n3. $\\text{Cl}^\\bullet$ is consumed in the first step and regenerated in the second step, meaning it acts as a homogeneous catalyst.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_23_star-20260726",
    question: "[★ Star Question] The decomposition of a gaseous substance was studied at a constant temperature. When the initial concentration was $1.0\\text{ mol dm}^{-3}$, the first half-life was found to be $15\\text{ seconds}$. When the concentration decreased to $0.5\\text{ mol dm}^{-3}$, the second half-life was measured to be $30\\text{ seconds}$. Deduce the order of the reaction and explain how this relationship relates to the rate constant.",
    options: [
      { text: "Second-order; the half-life is inversely proportional to the initial concentration ($t_{1/2} = 1/(k[\\text{A}]_0)$)." },
      { text: "First-order; the half-life is constant and independent of the concentration ($t_{1/2} = \\ln 2 / k$)." },
      { text: "Zero-order; the half-life is directly proportional to the concentration ($t_{1/2} = [\\text{A}]_0 / 2k$)." },
      { text: "Second-order; the half-life doubles because the rate constant $k$ decreases as concentration decreases." }
    ],
    correctAnswer: 0,
    explanation: "1. For a second-order reaction, the half-life is inversely proportional to the initial concentration of reactants: $t_{1/2} = 1 / (k[\\text{A}]_0)$.\n2. When the concentration is halved ($1.0 \\rightarrow 0.5\\text{ mol dm}^{-3}$), the half-life should double ($15 \\rightarrow 30\\text{ seconds}$), which matches the experimental results.\n3. First-order half-life is constant (independent of concentration), and zero-order half-life decreases as concentration decreases.\n4. Note that the rate constant $k$ is constant at a constant temperature and does not change with concentration.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_24-20260726",
    question: "In an iodine clock reaction, a small, constant amount of sodium thiosulfate is added to the reaction mixture along with starch indicator. The initial rate of reaction is approximated as $1/t$, where $t$ is the time taken for the blue-black color to appear. Under which condition is this approximation mathematically valid?",
    options: [
      { text: "Only when the concentrations of the reactants remain essentially constant during the timed period (typically less than 10-15% of the reaction has completed)." },
      { text: "Only when the reaction is zero-order with respect to all reactants." },
      { text: "Only when the concentration of the sodium thiosulfate is equal to the concentration of the starch indicator." },
      { text: "Only when the reaction reaches dynamic equilibrium before the color change occurs." }
    ],
    correctAnswer: 0,
    explanation: "1. The initial rate is defined as the rate at the very start of the reaction ($t=0$).\n2. The approximation $\\text{Rate} \\approx \\Delta[\\text{Product}] / \\Delta t \\approx 1/t$ assumes that the rate does not change significantly during the measured time interval $t$.\n3. For this assumption to hold true, only a tiny fraction of the reactants should be consumed (usually under 10-15%), so that reactant concentrations, and therefore the rate itself, remain virtually constant.\n4. If too much reactant is consumed, the rate slows down significantly during the timing interval, making the average rate ($1/t$) a poor approximation of the true initial rate.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_25-20260726",
    question: "A certain chemical reaction has a very large, negative Gibbs free energy change ($\\Delta G = -450\\text{ kJ mol}^{-1}$) at room temperature, yet when reactants are mixed in a beaker, no reaction is observed. Which statement correctly explains this observation?",
    options: [
      { text: "The reaction is thermodynamically unstable but kinetically stable due to a very high activation energy ($E_a$)." },
      { text: "The reaction is thermodynamically stable but kinetically unstable." },
      { text: "The reaction is endothermic, so it cannot proceed without constant heating." },
      { text: "The rate constant $k$ is extremely large, causing the reaction to complete instantly before observation." }
    ],
    correctAnswer: 0,
    explanation: "1. A negative $\\Delta G$ indicates that the reaction is thermodynamically feasible and spontaneous.\n2. However, thermodynamics only tells us about the feasibility and position of equilibrium, not how fast the reaction occurs.\n3. If the reaction has a very high activation energy ($E_a$), the rate constant $k$ will be practically zero at room temperature, meaning the reaction is kinetically stable (extremely slow).\n4. Therefore, it does not happen at a measurable rate under standard conditions.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_26-20260726",
    question: "The acid-catalyzed iodination of propanone is monitored experimentally. The overall equation is:\n\n$$\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{H}^+ + \\text{I}^-$$\n\nThe rate equation is found to be: Rate = $k[\\text{CH}_3\\text{COCH}_3][\\text{H}^+]$. Why does the hydrogen ion ($\\text{H}^+$) appear in the rate equation even though it is a catalyst and is not consumed overall?",
    options: [
      { text: "Because the catalyst is involved in the rate-determining step of the reaction mechanism, and its concentration affects the rate." },
      { text: "Because the reaction is heterogeneous and the catalyst is in the same phase as the reactants." },
      { text: "Because catalysts change the equilibrium constant of the reaction, shifting the position to the right." },
      { text: "Because the rate equation must contain every species present in the overall chemical equation." }
    ],
    correctAnswer: 0,
    explanation: "1. A catalyst speed up a reaction by providing an alternative pathway with a lower activation energy.\n2. If the catalyst is involved in the slow, rate-determining step (such as protonating propanone in the first step), its concentration will directly determine the rate of this step.\n3. Therefore, the catalyst concentration must appear in the rate equation.\n4. Species that are not involved in or before the rate-determining step (like $\\text{I}_2$ in this case) do not appear in the rate equation.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_27-20260726",
    question: "In the Arrhenius equation, $k = A e^{-E_a/RT}$, what are the units of the pre-exponential factor ($A$) for a second-order reaction?",
    options: [
      { text: "$\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$\\text{s}^{-1}$" },
      { text: "$\\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "It is dimensionless (has no units)." }
    ],
    correctAnswer: 0,
    explanation: "• The term $e^{-E_a/RT}$ is a ratio of energies (since $E_a$ and $RT$ both have units of $\\text{J mol}^{-1}$), meaning it is dimensionless (has no units).\n• Therefore, the pre-exponential factor ($A$) must have the exact same units as the rate constant ($k$).\n• For a second-order reaction (Rate = $k[\\text{Reactant}]^2$), the units of $k$ are: $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.\n• Thus, the units of $A$ are also $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_ent_ed_exam_01-20260810",
    question: "Which of the following processes results in a decrease in the entropy of the system?",
    options: [
      { text: "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(g)}$" },
      { text: "$\\text{N}_2\\text{O}_4\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$" },
      { text: "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(s)}$" },
      { text: "$\\text{NaCl(s)} + \\text{aq} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$" }
    ],
    correctAnswer: 2,
    explanation: "• Freezing of water ($\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(s)}$) shifts molecules from a disordered liquid state to a highly ordered solid lattice.\n• This decreases the number of ways of arranging the particles and their energy, resulting in a negative entropy change ($\\Delta S_{\\text{system}} < 0$).\n• Evaporation, decomposition into more gas moles, and dissolving solids all increase disorder (positive entropy change).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_02-20260810",
    question: "The standard standard entropies for $\\text{N}_2\\text{(g)}$, $\\text{H}_2\\text{(g)}$, and $\\text{NH}_3\\text{(g)}$ are $191.6$, $130.6$, and $192.3\\text{ J K}^{-1}\\text{ mol}^{-1}$ respectively. Calculate the standard entropy change of the system ($\\Delta S^{\\theta}_{\\text{system}}$) for: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$",
    options: [
      { text: "$-198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-129.9\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-384.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• The formula for entropy of the system is: $\\Delta S^{\\theta}_{\\text{system}} = \\sum S^{\\theta}(\\text{products}) - \\sum S^{\\theta}(\\text{reactants})$.\n• Products: $2 \\times S^{\\theta}(\\text{NH}_3) = 2 \\times 192.3 = 384.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Reactants: $S^{\\theta}(\\text{N}_2) + 3 \\times S^{\\theta}(\\text{H}_2) = 191.6 + 3(130.6) = 191.6 + 391.8 = 583.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• $\\Delta S^{\\theta}_{\\text{system}} = 384.6 - 583.4 = -198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_03-20260810",
    question: "What is the primary thermodynamic condition for a chemical reaction to be feasible (spontaneous) at a given temperature?",
    options: [
      { text: "The system entropy change ($\\Delta S_{\\text{system}}$) must be positive." },
      { text: "The enthalpy change ($\\Delta H$) must be highly negative." },
      { text: "The Gibbs free energy change ($\\Delta G$) must be less than or equal to zero." },
      { text: "The total entropy change ($\\Delta S_{\\text{total}}$) must be negative." }
    ],
    correctAnswer: 2,
    explanation: "• For any process to be feasible, the total entropy change ($\\Delta S_{\\text{total}}$) must be positive ($\\Delta S_{\\text{total}} > 0$).\n• Because Gibbs free energy is related by $\\Delta G = -T \\Delta S_{\\text{total}}$, a positive total entropy change corresponds directly to a negative Gibbs free energy change ($\\Delta G \\le 0$).\n• Hence, a reaction is thermodynamically feasible only when $\\Delta G \\le 0$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_04-20260810",
    question: "For a reaction, $\\Delta H^{\\theta} = +135\\text{ kJ mol}^{-1}$ and $\\Delta S^{\\theta}_{\\text{system}} = +245\\text{ J K}^{-1}\\text{ mol}^{-1}$. Above which temperature does this reaction become feasible?",
    options: [
      { text: "$273\\text{ K}$" },
      { text: "$551\\text{ K}$" },
      { text: "$0.55\\text{ K}$" },
      { text: "$1.81\\text{ K}$" }
    ],
    correctAnswer: 1,
    explanation: "• A reaction becomes feasible when $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• At the boundary where feasibility begins: $\\Delta H = T \\Delta S_{\\text{system}} \\implies T = \\Delta H / \\Delta S_{\\text{system}}$.\n• Convert $\\Delta H$ to joules: $+135\\text{ kJ mol}^{-1} = +135,000\\text{ J mol}^{-1}$.\n• Calculate $T$: $T = 135,000 / 245 = 551.02\\text{ K}$.\n• Since both $\\Delta H$ and $\\Delta S$ are positive, the reaction is feasible at high temperatures, i.e., above $551\\text{ K}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_05-20260810",
    question: "Which equation represents the correct relationship to calculate the entropy change of the surroundings ($\\Delta S_{\\text{surroundings}}$)?",
    options: [
      { text: "$\\Delta S_{\\text{surroundings}} = \\Delta H / T$" },
      { text: "$\\Delta S_{\\text{surroundings}} = -\\Delta H / T$" },
      { text: "$\\Delta S_{\\text{surroundings}} = T \\Delta H$" },
      { text: "$\\Delta S_{\\text{surroundings}} = -\\Delta G / T$" }
    ],
    correctAnswer: 1,
    explanation: "• The entropy change of the surroundings is determined by the heat transferred to or from the surroundings at a constant temperature $T$.\n• An exothermic reaction (negative $\\Delta H$) releases heat to the surroundings, increasing their entropy, so the sign must be opposite to that of $\\Delta H$.\n• The correct thermodynamic relationship is: $\\Delta S_{\\text{surroundings}} = -\\Delta H / T$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_06-20260810",
    question: "An industrial reaction has an enthalpy change of $\\Delta H^{\\theta} = -92.2\\text{ kJ mol}^{-1}$. Calculate the standard entropy change of the surroundings ($\\Delta S^{\\theta}_{\\text{surroundings}}$) at $298\\text{ K}$.",
    options: [
      { text: "$+309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+0.31\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+3.23\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• Use the formula: $\\Delta S^{\\theta}_{\\text{surroundings}} = -\\Delta H / T$.\n• Convert $\\Delta H$ to joules: $-92.2\\text{ kJ mol}^{-1} = -92,200\\text{ J mol}^{-1}$.\n• Substitute values: $\\Delta S^{\\theta}_{\\text{surroundings}} = -(-92,200) / 298 = +309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• The positive value reflects the exothermic nature increasing the thermal disorder of the surroundings.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_07-20260810",
    question: "Calculate the total entropy change ($\\Delta S^{\\theta}_{\\text{total}}$) for a reaction at $298\\text{ K}$ where $\\Delta S^{\\theta}_{\\text{system}} = -198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$ and $\\Delta S^{\\theta}_{\\text{surroundings}} = +309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.",
    options: [
      { text: "$-508.2\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+508.2\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 1,
    explanation: "• The total entropy change is the sum of system and surroundings entropy changes: $\\Delta S^{\\theta}_{\\text{total}} = \\Delta S^{\\theta}_{\\text{system}} + \\Delta S^{\\theta}_{\\text{surroundings}}$.\n• Substitute the values: $\\Delta S^{\\theta}_{\\text{total}} = -198.8 + 309.4 = +110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Since the total entropy change is positive, the reaction is thermodynamically feasible at this temperature.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_08-20260810",
    question: "Which of the following equations correctly relates Gibbs free energy change ($\\Delta G$) to the total entropy change ($\\Delta S_{\\text{total}}$)?",
    options: [
      { text: "$\\Delta G = T \\Delta S_{\\text{total}}$" },
      { text: "$\\Delta G = -T \\Delta S_{\\text{total}}$" },
      { text: "$\\Delta G = -\\Delta S_{\\text{total}} / T$" },
      { text: "$\\Delta G = \\Delta H - T \\Delta S_{\\text{total}}$" }
    ],
    correctAnswer: 1,
    explanation: "• Standard Gibbs free energy change is derived directly from the total entropy equation: $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} - \\Delta H/T$.\n• Multiplying the entire equation by $-T$ gives: $-T\\Delta S_{\\text{total}} = \\Delta H - T\\Delta S_{\\text{system}}$.\n• Since $\\Delta G = \\Delta H - T\\Delta S_{\\text{system}}$, we substitute to get: $\\Delta G = -T \\Delta S_{\\text{total}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_09-20260810",
    question: "Which statement defines the standard lattice energy of an ionic compound?",
    options: [
      { text: "The enthalpy change when one mole of an ionic solid is formed from its gaseous ions under standard conditions." },
      { text: "The enthalpy change when one mole of an ionic solid is dissolved in water to form gaseous ions." },
      { text: "The enthalpy change when one mole of an ionic solid is formed from its elements in standard states." },
      { text: "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state." }
    ],
    correctAnswer: 0,
    explanation: "• Lattice energy (specifically lattice formation enthalpy) is the enthalpy change when one mole of an ionic solid is formed from its constituent gaseous ions under standard conditions.\n• It is always exothermic (negative) due to the electrostatic attraction between oppositely charged ions.\n• The reverse process is lattice dissociation enthalpy, which is endothermic.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_10-20260810",
    question: "Calculate the lattice energy of sodium chloride using the following Born-Haber data:\n$\\Delta H^{\\theta}_{\\text{f}}(\\text{NaCl}) = -411\\text{ kJ mol}^{-1}$\n$\\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Na}) = +107\\text{ kJ mol}^{-1}$\n1st Ionisation Energy of Na $= +496\\text{ kJ mol}^{-1}$\n$\\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Cl}) = +122\\text{ kJ mol}^{-1}$\n1st Electron Affinity of Cl $= -349\\text{ kJ mol}^{-1}$",
    options: [
      { text: "$-787\\text{ kJ mol}^{-1}$" },
      { text: "$-376\\text{ kJ mol}^{-1}$" },
      { text: "$-711\\text{ kJ mol}^{-1}$" },
      { text: "$+787\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• Apply Hess's Law to the Born-Haber cycle:\n• $\\Delta H^{\\theta}_{\\text{f}} = \\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Na}) + \\text{IE}_1(\\text{Na}) + \\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Cl}) + \\text{EA}_1(\\text{Cl}) + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• Substitute values: $-411 = +107 + 496 + 122 - 349 + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• $-411 = 376 + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• $\\Delta H^{\\theta}_{\\text{lattice}} = -411 - 376 = -787\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_11-20260810",
    question: "Why is the experimental lattice energy of silver iodide ($-887\\text{ kJ mol}^{-1}$) significantly more exothermic than the theoretical lattice energy calculated using a purely ionic model ($-808\\text{ kJ mol}^{-1}$)?",
    options: [
      { text: "Silver iodide contains a large amount of covalent character due to polarization of the iodide ion." },
      { text: "Silver ions are larger and have a higher charge density than sodium ions." },
      { text: "The iodide ion has a small ionic radius and polarizes the silver cation." },
      { text: "The ionic model calculations do not account for electrostatic repulsions." }
    ],
    correctAnswer: 0,
    explanation: "• The theoretical model assumes ions are perfect, unpolarizable spheres (purely ionic bonding).\n• Silver ions ($\\text{Ag}^+$) are polarising due to their d-subshell configuration, and iodide ions ($\\text{I}^-$) are large and easily polarizable.\n• This leads to electron cloud distortion and significant covalent character, which strengthens the bonding and makes the actual lattice energy more exothermic than predicted.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_12-20260810",
    question: "Which combination of cation and anion properties results in the greatest degree of polarization and covalent character in an ionic compound?",
    options: [
      { text: "Large cation with high charge; small anion with low charge." },
      { text: "Small cation with high charge; large anion with high charge." },
      { text: "Small cation with low charge; large anion with low charge." },
      { text: "Large cation with low charge; small anion with high charge." }
    ],
    correctAnswer: 1,
    explanation: "• Polarization increases when the cation has a high charge density (high charge and small ionic radius) to strongly attract electron density.\n• Polarization also increases when the anion is large and has a high charge (high polarizability), making its electron cloud easily distorted.\n• Therefore, a small, highly charged cation and a large, highly charged anion yield the highest covalent character.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_13-20260810",
    question: "Which of the following gaseous ions would have the most exothermic (most negative) enthalpy of hydration ($\\Delta H^{\\theta}_{\\text{hyd}}$)?",
    options: [
      { text: "$\\text{Na}^+$" },
      { text: "$\\text{Mg}^{2+}$" },
      { text: "$\\text{Ca}^{2+}$" },
      { text: "$\\text{Ba}^{2+}$" }
    ],
    correctAnswer: 1,
    explanation: "• Enthalpy of hydration is the enthalpy change when gaseous ions dissolve in water to form hydrated ions.\n• It depends on charge density: ions with higher charge and smaller radii attract water molecules more strongly.\n• $\\text{Mg}^{2+}$ has a $+2$ charge and is smaller than $\\text{Ca}^{2+}$ and $\\text{Ba}^{2+}$, giving it a higher charge density than all other options.\n• Thus, $\\text{Mg}^{2+}$ has the most exothermic hydration enthalpy.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_14-20260810",
    question: "Using the enthalpy cycle for dissolving an ionic solid, which expression correctly relates the enthalpy of solution ($\\Delta H_{\\text{sol}}$), lattice energy ($\\Delta H_{\\text{lattice}}$), and hydration enthalpies ($\\Delta H_{\\text{hyd}}$)?",
    options: [
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions}) - \\Delta H_{\\text{lattice}}$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{lattice}} - [\\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions})]$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{lattice}} + \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions})$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) - \\Delta H_{\\text{lattice}}$" }
    ],
    correctAnswer: 0,
    explanation: "• Dissolving an ionic solid involves two conceptual steps: breaking the lattice into gaseous ions ($-\\Delta H_{\\text{lattice}}$, since lattice energy is defined as formation, this is endothermic) and hydrating the gaseous ions ($\\sum \\Delta H_{\\text{hyd}}$, exothermic).\n• Therefore: $\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions}) - \\Delta H_{\\text{lattice}}$.\n• Note: Since $\\Delta H_{\\text{lattice}}$ is negative, subtracting it makes the term positive (representing the energy required to break the lattice).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_15-20260810",
    question: "Why does the solubility of Group 2 sulfates decrease down the group from $\\text{MgSO}_4$ to $\\text{BaSO}_4$?",
    options: [
      { text: "The hydration enthalpy of the cation decreases more rapidly down the group than the lattice energy." },
      { text: "The lattice energy of the sulfate increases down the group." },
      { text: "The sulfate ion is small, so lattice energy decreases rapidly down the group." },
      { text: "The hydration enthalpy of the sulfate ion increases down the group." }
    ],
    correctAnswer: 0,
    explanation: "• The sulfate ion ($\\text{SO}_4^{2-}$) is large, so down the group, the lattice energy decreases slowly as the cation size increases.\n• However, the hydration enthalpy of the cation decreases rapidly as the cation radius increases from $\\text{Mg}^{2+}$ to $\\text{Ba}^{2+}$.\n• Since hydration enthalpy decreases more rapidly than the lattice energy, the process of dissolving becomes less exothermic (more endothermic) down the group, decreasing solubility.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_16-20260810",
    question: "Why does the solubility of Group 2 hydroxides increase down the group from $\\text{Mg(OH)}_2$ to $\\text{Ba(OH)}_2$?",
    options: [
      { text: "The hydroxide ion is small, so the lattice energy decreases more rapidly down the group than the cation hydration enthalpy." },
      { text: "The lattice energy of the hydroxides increases down the group." },
      { text: "The hydration enthalpy of the cations increases down the group." },
      { text: "The hydroxide ion becomes more polarizable down the group." }
    ],
    correctAnswer: 0,
    explanation: "• The hydroxide ion ($\\text{OH}^-$) is small.\n• As the cation size increases down the group, the lattice energy decreases rapidly because both ions are relatively small, making the lattice highly sensitive to size changes.\n• This rapid decrease in lattice energy outweighs the decrease in cation hydration enthalpy down the group.\n• Consequently, the enthalpy of solution becomes more exothermic (or less endothermic) down the group, increasing solubility.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_17-20260810",
    question: "Under which thermodynamic conditions is a chemical reaction feasible at all temperatures?",
    options: [
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is positive." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is positive." }
    ],
    correctAnswer: 0,
    explanation: "• Feasibility requires $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• If $\\Delta H$ is negative (exothermic) and $\\Delta S_{\\text{system}}$ is positive (disorder increases), then: $\\Delta G = (-\\text{value}) - T(+\\text{value})$.\n• Since $T$ in Kelvin is always positive, $\\Delta G$ is guaranteed to be negative at all temperatures.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_18-20260810",
    question: "Under which thermodynamic conditions is a chemical reaction not feasible at any temperature?",
    options: [
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is positive." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is positive." }
    ],
    correctAnswer: 0,
    explanation: "• Feasibility requires $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• If $\\Delta H$ is positive (endothermic) and $\\Delta S_{\\text{system}}$ is negative (order increases), then: $\\Delta G = (+\\text{value}) - T(-\\text{value}) = (+\\text{value}) + T(\\text{value})$.\n• Since both terms are positive, $\\Delta G$ is guaranteed to be positive at all temperatures, meaning the reaction is never feasible.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_19-20260810",
    question: "Why is the second electron affinity of oxygen ($\\text{O}^-\\text{(g)} + \\text{e}^- \\rightarrow \\text{O}^{2-}\\text{(g)}$) an endothermic process, whereas the first electron affinity is exothermic?",
    options: [
      { text: "Energy is required to overcome the electrostatic repulsion between the negative $\\text{O}^-$ ion and the incoming electron." },
      { text: "Energy is released when the electron enters the 2p orbital." },
      { text: "The oxide ion $\\text{O}^{2-}$ is less stable than the $\\text{O}^-$ ion in the gas phase." },
      { text: "The first electron affinity requires ionization energy." }
    ],
    correctAnswer: 0,
    explanation: "• The first electron affinity adds an electron to a neutral atom, which is exothermic due to the attraction of the nucleus.\n• The second electron affinity adds a negative electron to an already negatively charged ion ($\\text{O}^-$).\n• Work must be done to overcome the strong electrostatic repulsion between the negative ion and the incoming electron, which requires energy input (making it endothermic).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_20-20260810",
    question: "When solid ammonium nitrate dissolves in water, the temperature of the mixture drops significantly, yet the process is feasible. What is the explanation for this?",
    options: [
      { text: "The process is endothermic, but is driven by a large increase in entropy of the system upon dissolution." },
      { text: "The enthalpy of solution is highly exothermic, overriding the entropy change." },
      { text: "The reaction is non-spontaneous and requires continuous heating to proceed." },
      { text: "The entropy of the surroundings increases to compensate for the temperature drop." }
    ],
    correctAnswer: 0,
    explanation: "• A drop in temperature indicates that the process is endothermic ($\\Delta H > 0$).\n• For the dissolving to be feasible, $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$ must be satisfied.\n• Dissolving a solid crystal lattice into mobile, hydrated ions increases system disorder significantly ($\\Delta S_{\\text{system}} > 0$).\n• At room temperature, the $T \\Delta S_{\\text{system}}$ term is larger than the positive $\\Delta H$, making $\\Delta G$ negative.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  }
)
