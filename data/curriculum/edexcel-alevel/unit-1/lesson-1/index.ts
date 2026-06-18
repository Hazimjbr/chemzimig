import { LessonPart } from '../../../registry';

export const lessonTitle = "Formulae, Equations & Amount of Substance";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 1: Formulae, Equations & Amount of Substance
This lesson covers fundamental stoichiometry, empirical formulas, gas volumes, reacting masses, concentrations, yields, and atom economy.
`;

export const parts: LessonPart[] = [
    {
        id: 'the-mole',
        title: 'The Mole & Avogadro',
        type: 'text',
        content: `
### 1. The Mole & Avogadro's Constant
The **mole** is the standard SI unit of amount of substance.

* **Definition:** One mole is the amount of substance that contains as many elementary particles (atoms, molecules, ions, or electrons) as there are atoms in exactly 12 grams of carbon-12.
* **Avogadro's Constant (L):** 6.02 × 10²³ mol⁻¹.

### The Key Formula:
**n = m / Mr**

Where:
* **n** = amount of substance in moles (mol)
* **m** = mass of substance in grams (g)
* **Mr** = molar mass of substance in grams per mole (g mol⁻¹)
        `,
        keyPoints: [
            'One mole is exactly 6.02 × 10²³ particles.',
            'Molar mass (Mr) is calculated by adding relative atomic masses (Ar) of all atoms in a formula.'
        ]
    },
    {
        id: 'relative-masses',
        title: 'Relative Masses',
        type: 'text',
        content: `
### 2. Relative Masses
All atomic and molecular masses are calculated relative to carbon-12.

* **Relative Atomic Mass (Ar):** The weighted average mass of an atom of an element compared with 1/12th of the mass of an atom of carbon-12.
* **Relative Molecular Mass (Mr):** The weighted average mass of a molecule compared with 1/12th of the mass of an atom of carbon-12.
* **Relative Formula Mass (Mr):** Used for giant ionic structures (like NaCl) where distinct molecules do not exist.
        `,
        keyPoints: [
            'Masses are relative and do not have physical units.',
            'Carbon-12 is the standard reference standard.'
        ]
    },
    {
        id: 'empirical-formulae',
        title: 'Empirical Formulae',
        type: 'text',
        content: `
### 3. Empirical & Molecular Formulae
* **Empirical Formula:** The simplest whole-number ratio of atoms of each element in a compound.
* **Molecular Formula:** The actual number of atoms of each element in a molecule of a compound.

**Molecular Formula = (Empirical Formula) × y**
**y = Molar Mass of Compound / Molar Mass of Empirical Formula**

### How to Calculate Empirical Formula:
1. Divide the mass or percentage of each element by its Ar to find moles.
2. Divide all mole values by the smallest mole value.
3. Convert fractions to whole numbers (e.g. 1.5 × 2 = 3).
        `,
        keyPoints: [
            'Empirical formula is the simplified ratio.',
            'Molecular formula requires the total molar mass of the compound.'
        ]
    },
    {
        id: 'solutions-concentrations',
        title: 'Solutions & Concentrations',
        type: 'text',
        content: `
### 4. Solutions and Concentrations
Concentration describes the amount of solute dissolved in a volume of solvent.

### Key Formulae:
**C = n / V**

Where:
* **C** = concentration (mol dm⁻³)
* **n** = amount of substance (mol)
* **V** = volume of solution (dm³)
* *Note: 1 dm³ = 1000 cm³. If volume is in cm³, use:*
  **C = (n × 1000) / V (in cm³)**

### Mass Concentration:
**Concentration (g dm⁻³) = Concentration (mol dm⁻³) × Mr**
        `,
        keyPoints: [
            '1 dm³ is exactly equal to 1000 cm³.',
            'To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.'
        ]
    },
    {
        id: 'gas-volumes',
        title: 'Ideal Gas Equation',
        type: 'text',
        content: `
### 5. Gas Volumes & The Ideal Gas Equation
At room temperature and pressure (RTP: 298 K, 100 kPa):
* **Molar Gas Volume:** 1 mole of any gas occupies 24 dm³.
  **n = V (in dm³) / 24**

### The Ideal Gas Equation:
**pV = nRT**

Where:
* **p** = pressure in Pascals (Pa)
* **V** = volume in cubic meters (m³) *(Note: 1 m³ = 1000 dm³ = 1,000,000 cm³)*
* **n** = number of moles (mol)
* **R** = Ideal Gas Constant = 8.31 J K⁻¹ mol⁻¹
* **T** = temperature in Kelvin (K) *(T (K) = T (°C) + 273)*
        `,
        keyPoints: [
            'In pV = nRT, volume MUST be converted to m³.',
            'Temperature MUST always be in Kelvin.'
        ]
    },
    {
        id: 'yield-economy',
        title: 'Yield & Atom Economy',
        type: 'text',
        content: `
### 6. Percentage Yield & Atom Economy
Green Chemistry principles aim to reduce chemical waste and optimize reactivities.

* **Percentage Yield:** Measures the efficiency of a chemical reaction.
  **% Yield = (Actual Yield / Theoretical Yield) × 100**

* **Atom Economy:** Measures the efficiency of reactant atom utilization.
  **% Atom Economy = (Molar Mass of Desired Product / Total Molar Mass of all Reactants) × 100**
        `,
        keyPoints: [
            'High yield does not necessarily mean high atom economy.',
            'Atom economy includes waste byproduct masses in the total reactants mass calculation.'
        ]
    }
];
