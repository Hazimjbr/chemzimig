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

---

#### 📝 Worked Example 1: Calculating Moles and Atoms
**Question:** Calculate the number of helium atoms in $4.00\\text{ g}$ of helium gas ($Ar(\\text{He}) = 4.00$).

**Step-by-step Solution:**
1. **Find the number of moles ($n$):**
   $$n = \\frac{m}{Mr} = \\frac{4.00\\text{ g}}{4.00\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
2. **Multiply by Avogadro's Constant to find the number of particles:**
   $$\\text{Number of atoms} = n \\times L = 1.00 \\times (6.02 \\times 10^{23}) = 6.02 \\times 10^{23}\\text{ atoms}$$

#### 📝 Worked Example 2: Calculating Mass from Particle Count
**Question:** Calculate the mass of $3.01 \\times 10^{22}$ molecules of carbon dioxide ($\\text{CO}_2$, $Mr = 44.0$).

**Step-by-step Solution:**
1. **Find the number of moles ($n$):**
   $$n = \\frac{\\text{Number of molecules}}{L} = \\frac{3.01 \\times 10^{22}}{6.02 \\times 10^{23}} = 0.050\\text{ mol}$$
2. **Calculate the mass ($m$):**
   $$m = n \\times Mr = 0.050\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 2.20\\text{ g}$$
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

---

#### 📝 Worked Example: Handling Water of Crystallization
**Question:** Calculate the relative formula mass ($Mr$) of copper(II) sulfate pentahydrate ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$).  
*(Relative atomic masses: $\\text{Cu} = 63.5, \\text{S} = 32.1, \\text{O} = 16.0, \\text{H} = 1.0$)*

**Step-by-step Solution:**
1. **Calculate the anhydrous $\\text{CuSO}_4$ part:**
   $$Mr(\\text{CuSO}_4) = 63.5 + 32.1 + (4 \\times 16.0) = 159.6$$
2. **Calculate the water of crystallization part ($5\\text{H}_2\\text{O}$):**
   $$5 \\times Mr(\\text{H}_2\\text{O}) = 5 \\times [(2 \\times 1.0) + 16.0] = 5 \\times 18.0 = 90.0$$
3. **Add the parts together:**
   $$Mr(\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}) = 159.6 + 90.0 = 249.6$$
        `,
        keyPoints: [
            'Relative masses are relative and do not have physical units.',
            'Always add water of crystallization ($X \\cdot n\\text{H}_2\\text{O}$) rather than multiplying.'
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

---

#### 📝 Worked Example: Calculating Empirical & Molecular Formula
**Question:** A compound contains $40.0\\%$ carbon, $6.7\\%$ hydrogen, and $53.3\\%$ oxygen by mass. Its molar mass is $180\\text{ g mol}^{-1}$. Determine both its empirical and molecular formulas.  
*(Relative atomic masses: $\\text{C} = 12.0, \\text{H} = 1.0, \\text{O} = 16.0$)*

**Step-by-step Solution:**
1. **Find the moles of each element in $100\\text{ g}$ of compound:**
   * **Carbon:** $\\frac{40.0}{12.0} = 3.33\\text{ mol}$
   * **Hydrogen:** $\\frac{6.7}{1.0} = 6.70\\text{ mol}$
   * **Oxygen:** $\\frac{53.3}{16.0} = 3.33\\text{ mol}$
2. **Divide by the smallest value ($3.33$):**
   * **Carbon:** $\\frac{3.33}{3.33} = 1$
   * **Hydrogen:** $\\frac{6.70}{3.33} \\approx 2$
   * **Oxygen:** $\\frac{3.33}{3.33} = 1$
   * **Empirical Formula:** $\\text{CH}_2\\text{O}$
3. **Determine the molecular formula:**
   * **Empirical formula mass:** $12.0 + (2 \\times 1.0) + 16.0 = 30.0\\text{ g mol}^{-1}$
   * **Multiplier ($y$):** $y = \\frac{180}{30.0} = 6$
   * **Molecular Formula:** $(\\text{CH}_2\\text{O}) \\times 6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$
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
* *Note: 1 dm³ = 1000 cm³.*

---

#### 📝 Worked Example: Solution Concentration & Conversions
**Question:** Calculate the concentration in $\\text{mol dm}^{-3}$ and $\\text{g dm}^{-3}$ of a solution made by dissolving $5.85\\text{ g}$ of sodium chloride ($\\text{NaCl}$, $Mr = 58.5$) in water to make $250\\text{ cm}^3$ of solution.

**Step-by-step Solution:**
1. **Calculate the moles of $\\text{NaCl}$:**
   $$n = \\frac{m}{Mr} = \\frac{5.85\\text{ g}}{58.5\\text{ g mol}^{-1}} = 0.100\\text{ mol}$$
2. **Convert the volume to $\\text{dm}^3$:**
   $$V = \\frac{250\\text{ cm}^3}{1000} = 0.250\\text{ dm}^3$$
3. **Calculate concentration in $\\text{mol dm}^{-3}$ ($C$):**
   $$C = \\frac{n}{V} = \\frac{0.100\\text{ mol}}{0.250\\text{ dm}^3} = 0.400\\text{ mol dm}^{-3}$$
4. **Calculate concentration in $\\text{g dm}^{-3}$:**
   $$\\text{Concentration } (\\text{g dm}^{-3}) = \\text{Concentration } (\\text{mol dm}^{-3}) \\times Mr$$
   $$\\text{Concentration } (\\text{g dm}^{-3}) = 0.400 \\times 58.5 = 23.4\\text{ g dm}^{-3}$$
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

---

#### 📝 Worked Example: Using pV = nRT
**Question:** A sample of nitrogen gas occupies $4.00 \\times 10^{-3}\\text{ m}^3$ at a pressure of $100\\text{ kPa}$ and a temperature of $27.0^\\circ\\text{C}$. Calculate the number of moles of nitrogen gas present.  
*($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)*

**Step-by-step Solution:**
1. **Convert pressure to Pa (SI Unit):**
   $$100\\text{ kPa} = 100 \\times 10^3\\text{ Pa} = 100,000\\text{ Pa}$$
2. **Convert temperature to Kelvin:**
   $$T = 27.0^\\circ\\text{C} + 273 = 300\\text{ K}$$
3. **Rearrange the Ideal Gas Equation to solve for $n$:**
   $$n = \\frac{pV}{RT}$$
4. **Substitute values and calculate:**
   $$n = \\frac{100,000\\text{ Pa} \\times 4.00 \\times 10^{-3}\\text{ m}^3}{8.31 \\times 300\\text{ K}}$$
   $$n = \\frac{400}{2493} \\approx 0.160\\text{ mol}$$
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

---

#### 📝 Worked Example 1: Percentage Yield
**Question:** $12.0\\text{ g}$ of carbon reacts with excess oxygen to produce carbon dioxide:  
$$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$$  
If the actual mass of carbon dioxide collected is $38.0\\text{ g}$, calculate the percentage yield.  
*($Ar(\\text{C}) = 12.0, Mr(\\text{CO}_2) = 44.0$)*

**Step-by-step Solution:**
1. **Calculate the moles of carbon reactant:**
   $$n(\\text{C}) = \\frac{12.0\\text{ g}}{12.0\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
2. **Determine the theoretical moles of $\\text{CO}_2$ (1:1 ratio):**
   $$n(\\text{CO}_2) = 1.00\\text{ mol}$$
3. **Calculate the theoretical mass of $\\text{CO}_2$:**
   $$\\text{Theoretical Mass} = 1.00\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 44.0\\text{ g}$$
4. **Calculate percentage yield:**
   $$\\%\\text{ Yield} = \\left(\\frac{38.0\\text{ g}}{44.0\\text{ g}}\\right) \\times 100 = 86.4\\%$$

#### 📝 Worked Example 2: Atom Economy
**Question:** Calculate the percentage atom economy for producing iron from iron(III) oxide using carbon monoxide:  
$$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$$  
*(Relative atomic masses: $\\text{Fe} = 55.8, \\text{O} = 16.0, \\text{C} = 12.0$)*

**Step-by-step Solution:**
1. **Identify the desired product:** Iron (Fe).
2. **Calculate the total mass of desired product:**
   $$\\text{Desired Product Mass} = 2 \\times Ar(\\text{Fe}) = 2 \\times 55.8 = 111.6\\text{ g mol}^{-1}$$
3. **Calculate the total mass of all reactants:**
   $$\\text{Total Reactants} = Mr(\\text{Fe}_2\\text{O}_3) + [3 \\times Mr(\\text{CO})]$$
   $$Mr(\\text{Fe}_2\\text{O}_3) = (2 \\times 55.8) + (3 \\times 16.0) = 159.6$$
   $$3 \\times Mr(\\text{CO}) = 3 \\times (12.0 + 16.0) = 84.0$$
   $$\\text{Total Reactants Mass} = 159.6 + 84.0 = 243.6\\text{ g mol}^{-1}$$
4. **Calculate % Atom Economy:**
   $$\\%\\text{ Atom Economy} = \\left(\\frac{111.6}{243.6}\\right) \\times 100 = 45.8\\%$$
        `,
        keyPoints: [
            'High yield does not necessarily mean high atom economy.',
            'Atom economy includes waste byproduct masses in the total reactants mass calculation.'
        ]
    }
];
