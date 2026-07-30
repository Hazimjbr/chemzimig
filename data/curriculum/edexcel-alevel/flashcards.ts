export interface Flashcard {
    id: string;
    question: string;
    answer: string;
    category?: string;
    topicId?: string;
    unitNum?: number;
    lessonNum?: number;
    difficulty?: 'easy' | 'medium' | 'hard';
    examinerTip?: string;
}

export const edexcelAlevelFlashcards: Flashcard[] = [
    // Unit 1 - Lesson 1: The Mole & Avogadro
    {
        id: 'ed-u1-l1-1',
        unitNum: 1,
        lessonNum: 1,
        category: 'Moles & Avogadro',
        question: 'What is Avogadro\'s Constant ($N_A$) value and unit?',
        answer: '$6.02 \\times 10^{23} \\text{ mol}^{-1}$',
        examinerTip: 'It represents the exact number of particles in one mole of any substance.'
    },
    {
        id: 'ed-u1-l1-2',
        unitNum: 1,
        lessonNum: 1,
        category: 'Moles & Avogadro',
        question: 'Define Relative Atomic Mass ($A_r$).',
        answer: 'The weighted average mass of an atom of an element relative to 1/12th the mass of a Carbon-12 atom.',
        examinerTip: 'Always include "weighted average" and reference Carbon-12.'
    },

    // Unit 1 - Lesson 2: Relative Masses
    {
        id: 'ed-u1-l2-1',
        unitNum: 1,
        lessonNum: 2,
        category: 'Relative Masses',
        question: 'Define Relative Molecular Mass ($M_r$).',
        answer: 'The average mass of a molecule compared to 1/12th the mass of an atom of Carbon-12.',
        examinerTip: 'Used for simple covalent molecules like $H_2O$ and $CO_2$.'
    },
    {
        id: 'ed-u1-l2-2',
        unitNum: 1,
        lessonNum: 2,
        category: 'Relative Masses',
        question: 'Define Relative Formula Mass ($M_r$).',
        answer: 'The sum of the relative atomic masses of atoms in a formula unit of an ionic compound.',
        examinerTip: 'Used for ionic networks like $NaCl$ where discrete molecules do not exist.'
    },

    // Unit 1 - Lesson 3: Chemical & Ionic Equations
    {
        id: 'ed-u1-l3-1',
        unitNum: 1,
        lessonNum: 3,
        category: 'Ionic Equations',
        question: 'What are Spectator Ions in an ionic equation?',
        answer: 'Ions that exist in the same state on both reactant and product sides without taking part in the chemical reaction.',
        examinerTip: 'Always omit spectator ions when writing a net ionic equation.'
    },

    // Unit 1 - Lesson 4: Empirical & Molecular Formulae
    {
        id: 'ed-u1-l4-1',
        unitNum: 1,
        lessonNum: 4,
        category: 'Empirical Formula',
        question: 'Define Empirical Formula.',
        answer: 'The simplest whole-number ratio of atoms of each element in a compound.',
        examinerTip: 'Calculate by dividing mass/percentage by Ar, then dividing by smallest mole value.'
    },

    // Unit 1 - Lesson 5: Reactions of Acids
    {
        id: 'ed-u1-l5-1',
        unitNum: 1,
        lessonNum: 5,
        category: 'Acids & Salts',
        question: 'What are the products of an Acid + Metal Carbonate reaction?',
        answer: '$\\text{Salt} + \\text{Water} + \\text{Carbon Dioxide}$',
        examinerTip: 'Effervescence (bubbling) indicates carbon dioxide gas evolution.'
    },

    // Unit 1 - Lesson 6: Preparation of Salts
    {
        id: 'ed-u1-l6-1',
        unitNum: 1,
        lessonNum: 6,
        category: 'Salts Preparation',
        question: 'Why is excess insoluble metal oxide added when preparing a soluble salt?',
        answer: 'To ensure all the acid is completely neutralized and reacted.',
        examinerTip: 'The excess insoluble solid is removed by filtration.'
    },

    // Unit 1 - Lesson 7: Solutions & Concentrations
    {
        id: 'ed-u1-l7-1',
        unitNum: 1,
        lessonNum: 7,
        category: 'Solutions & Concentrations',
        question: 'What is the formula for Concentration in $\\text{mol dm}^{-3}$?',
        answer: '$\\text{Concentration} = \\frac{\\text{Moles (mol)}}{\\text{Volume (dm}^3\\text{)}}$',
        examinerTip: 'To convert $\\text{cm}^3$ to $\\text{dm}^3$, divide by 1000.'
    },

    // Unit 1 - Lesson 8: Gas Volumes & Ideal Gas Law
    {
        id: 'ed-u1-l8-1',
        unitNum: 1,
        lessonNum: 8,
        category: 'Ideal Gas Law',
        question: 'What is the Ideal Gas Equation and its SI units?',
        answer: '$PV = nRT$ (where $P$ is in Pa, $V$ in $\\text{m}^3$, $T$ in Kelvin).',
        examinerTip: 'Critical unit conversions: $1 \\text{ m}^3 = 1000 \\text{ dm}^3$ and $T(\\text{K}) = \\text{°C} + 273$.'
    },

    // Unit 1 - Lesson 9: Yield & Atom Economy
    {
        id: 'ed-u1-l9-1',
        unitNum: 1,
        lessonNum: 9,
        category: 'Yield & Atom Economy',
        question: 'How is Percentage Yield calculated?',
        answer: '$\\text{\\% Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100$',
        examinerTip: 'Yield is affected by incomplete reactions, side reactions, or product loss during purification.'
    },

    // Unit 1 - Lesson 10: Experimental Uncertainty
    {
        id: 'ed-u1-l10-1',
        unitNum: 1,
        lessonNum: 10,
        category: 'Uncertainty',
        question: 'How do you calculate Percentage Uncertainty of a burette reading (2 readings)?',
        answer: '$\\text{\\% Uncertainty} = \\frac{2 \\times \\text{Uncertainty of Equipment}}{\\text{Measured Volume}} \\times 100$',
        examinerTip: 'Burettes require 2 readings (initial & final), so double the equipment uncertainty.'
    },

    // Unit 2 AS Flashcards (Energetics, Group Chem & Halogenoalkanes)
    // Lesson 1: Energetics & Enthalpy Changes
    {
        id: 'ed-u2-l1-1',
        unitNum: 2,
        lessonNum: 1,
        category: 'Energetics',
        question: 'Define Standard Enthalpy Change of Neutralisation ($\\Delta H_{neut}^\\ominus$).',
        answer: 'The enthalpy change when 1 mole of water is formed from the reaction of an acid with an alkali under standard conditions.',
        examinerTip: 'Neutralisation is ALWAYS exothermic (negative $\\Delta H$).'
    },
    {
        id: 'ed-u2-l1-2',
        unitNum: 2,
        lessonNum: 1,
        category: 'Energetics',
        question: 'What is Hess\'s Law?',
        answer: 'The total enthalpy change for a chemical reaction is independent of the route taken, provided initial and final conditions are the same.',
        examinerTip: 'Crucial for Indirect Enthalpy Calculations using cycles.'
    },

    // Lesson 2: Intermolecular Forces
    {
        id: 'ed-u2-l2-1',
        unitNum: 2,
        lessonNum: 2,
        category: 'Intermolecular Forces',
        question: 'Which elements must be bonded to Hydrogen to form Hydrogen Bonds?',
        answer: 'Fluorine (F), Oxygen (O), or Nitrogen (N) — due to high electronegativity and lone pairs.',
        examinerTip: 'Hydrogen bonding is the strongest type of intermolecular force.'
    },
    {
        id: 'ed-u2-l2-2',
        unitNum: 2,
        lessonNum: 2,
        category: 'Intermolecular Forces',
        question: 'How does increasing electron count affect London Dispersion Forces?',
        answer: 'More electrons lead to larger instantaneous dipoles, increasing London force strength and raising boiling points.',
        examinerTip: 'Explains why boiling point increases down the Halogen group ($F_2 < Cl_2 < Br_2 < I_2$).'
    },

    // Lesson 3: Redox & Group 1, 2, 7 Trends
    {
        id: 'ed-u2-l3-1',
        unitNum: 2,
        lessonNum: 3,
        category: 'Group Trends',
        question: 'What is the trend in thermal stability of Group 2 Carbonates down the group?',
        answer: 'Thermal stability INCREASES down the group (requires higher temperature to decompose).',
        examinerTip: 'Cation ionic radius increases down group, causing LESS charge density and LESS polarising power on the carbonate ion.'
    },
    {
        id: 'ed-u2-l3-2',
        unitNum: 2,
        lessonNum: 3,
        category: 'Halogen Reactions',
        question: 'What is observed when Chlorine gas is bubbled into Potassium Iodide ($KI$) solution?',
        answer: 'Solution turns BROWN due to formation of aqueous Iodine ($I_2$).',
        examinerTip: 'Chlorine is a stronger oxidising agent than Iodine and displaces $I^-$ ions.'
    },

    // Lesson 4: Halogenoalkanes
    {
        id: 'ed-u2-l4-1',
        unitNum: 2,
        lessonNum: 4,
        category: 'Halogenoalkanes',
        question: 'Which factor determines the reactivity rate of Halogenoalkanes: Bond Polarity or Bond Enthalpy?',
        answer: 'BOND ENTHALPY determines reactivity. C-I is weakest and reacts fastest; C-F is strongest and reacts slowest.',
        examinerTip: 'Despite C-F being most polar, C-I bond strength ($238 \\text{ kJ mol}^{-1}$) breaks easiest.'
    },
    {
        id: 'ed-u2-l4-2',
        unitNum: 2,
        lessonNum: 4,
        category: 'Halogenoalkanes',
        question: 'What mechanism occurs when 1-bromopropane reacts with aqueous $NaOH$?',
        answer: 'Nucleophilic Substitution ($S_N2$ mechanism).',
        examinerTip: 'Hydroxide ion ($OH^-$) acts as a nucleophile attacking the electron-deficient Carbon atom.'
    },

    // Unit 4 Flashcards
    {
        id: 'ed-u4-l1-1',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics',
        question: 'What is the definition of Overall Order of Reaction?',
        answer: 'The sum of the powers (orders) to which the reactant concentrations are raised in the rate equation.',
        examinerTip: 'Do not confuse overall order with the molecularity of an individual elementary step.'
    },
    {
        id: 'ed-u4-l1-2',
        unitNum: 4,
        lessonNum: 1,
        category: 'Kinetics',
        question: 'What are the units of rate constant (k) for a Zero-Order reaction?',
        answer: '$\\text{mol dm}^{-3} \\text{s}^{-1}$',
        examinerTip: 'Zero order means rate = k, so units of k equal units of rate.'
    }
];
