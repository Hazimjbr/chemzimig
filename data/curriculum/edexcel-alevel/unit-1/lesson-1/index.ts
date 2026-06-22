import { LessonPart } from '../../../registry';

export const lessonTitle = "Formulae, Equations and Amount of Substance";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 1: Formulae, Equations and Amount of Substance
This lesson covers fundamental stoichiometry, empirical formulas, gas volumes, reacting masses, concentrations, yields, and atom economy.
`;

export const parts: LessonPart[] = [
    {
        id: 'the-mole-20260106',
        title: 'The Mole & Avogadro',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚛️ Fundamental Chemistry Concepts (Elements)
> An **element** is the simplest substance that contains only one type of atoms, and cannot be chemically broken down.
> 
> 1. **Nonmetals:**
>    * *Monoatomic elements (Group 0):* $\\text{He}$, $\\text{Ne}$, $\\text{Ar}$
>    * *Diatomic elements:* $\\text{H}_2$, $\\text{N}_2$, $\\text{O}_2$, $\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$
>    * *Polyatomic elements:* $\\text{P}_4$, $\\text{S}_8$
> 2. **Metals:** $\\text{Li}$, $\\text{Na}$, $\\text{K}$, etc.
> 3. **Metalloids:** $\\text{B}$, $\\text{Si}$, $\\text{Ge}$, etc.

> [!TIP]
> ### 🧪 Types of Species or Particles
> 1. **Atom:** The smallest part of an element that has its chemical properties.
>    * *Examples:* $\\text{He}$, $\\text{H}$, $\\text{Na}$
> 2. **Molecule:** A particle that consists of two or more atoms bonded covalently together.
>    * *Elements (same kind of atoms):* $\\text{H}_2$, $\\text{N}_2$, $\\text{O}_2$, $\\text{F}_2$, $\\text{Cl}_2$, $\\text{Br}_2$, $\\text{I}_2$, $\\text{P}_4$, $\\text{S}_8$
>    * *Compounds (different elements bonded):* $\\text{H}_2\\text{O}$, $\\text{H}_2\\text{SO}_4$, $\\text{CH}_4$
> 3. **Ion:** A charged chemical species formed by gaining or losing electrons.
>    * *Monoatomic ions:* $\\text{Li}^+$, $\\text{Na}^+$, $\\text{K}^+$, $\\text{Mg}^{2+}$, $\\text{Ca}^{2+}$, $\\text{Ba}^{2+}$, $\\text{Al}^{3+}$, $\\text{I}^-$, $\\text{Br}^-$, $\\text{Cl}^-$
>    * *Polyatomic ions:* $\\text{OH}^-$, $\\text{NH}_4^+$, $\\text{NO}_3^-$, $\\text{ClO}_4^-$, $\\text{SO}_4^{2-}$, $\\text{CO}_3^{2-}$, $\\text{PO}_4^{3-}$

> [!BOX]
> ### ⚖️ The Mole & Avogadro's Constant
> * **The Mole ($n$):** The standard SI unit for measuring the amount of a substance. One mole contains the same number of elementary particles as the number of carbon atoms in exactly $12\\text{ g}$ of carbon-12
> * **Avogadro's Constant ($L$):**
>   * $L = 6.02 \\times 10^{23}\\text{ particles mol}^{-1}$
>   * It represents the number of particles in one mole of any given substance.
>   * Exactly equals the number of carbon atoms in $12\\text{ g}$ of $^{12}\\text{C}$

> [!BOX]
> ### 📋 Common Ionic Groups (Polyatomic Ions)
> It is essential to memorize the formulas and charges of these common ionic groups:

| Name | Formula | Name | Formula |
| :--- | :---: | :--- | :---: |
| ammonium | $\\text{NH}_4^+$ | hydroxide | $\\text{OH}^-$ |
| nitrate | $\\text{NO}_3^-$ | peroxide | $\\text{O}_2^{2-}$ |
| nitrite | $\\text{NO}_2^-$ | carbonate | $\\text{CO}_3^{2-}$ |
| acetate | $\\text{CH}_3\\text{COO}^-$ | sulfate | $\\text{SO}_4^{2-}$ |
| cyanide | $\\text{CN}^-$ | sulfite | $\\text{SO}_3^{2-}$ |
| manganate(VII) / permanganate | $\\text{MnO}_4^-$ | phosphate | $\\text{PO}_4^{3-}$ |
| iodate | $\\text{IO}_3^-$ | phosphite | $\\text{PO}_3^{3-}$ |
| perchlorate | $\\text{ClO}_4^-$ | chromate(VI) / chromate | $\\text{CrO}_4^{2-}$ |
| chlorate | $\\text{ClO}_3^-$ | dichromate(VI) / dichromate | $\\text{Cr}_2\\text{O}_7^{2-}$ |


> [!IMPORTANT]
> ### 🧮 The Molar Calculation Formulas
> To convert between mass, moles, and particles, use these core relations:
> 
> $$\\text{n} = \\frac{\\text{m}}{\\text{Mr}} \\quad \\text{and} \\quad \\text{Number of Particles} = \\text{n} \\times \\text{L}$$
> 
> Where:
> * **$n$** = amount of substance in moles ($\\text{mol}$)
> * **$m$** = mass of substance in grams ($\\text{g}$)
> * **$Mr$** = molar mass ($\\text{g mol}^{-1}$)
> * **$L$** = Avogadro's Constant ($6.02 \\times 10^{23}\\text{ particles mol}^{-1}$)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Moles and Atoms (Helium)
> **Question:** Calculate the number of helium atoms in $4.00\\text{ g}$ of helium gas ($Ar(\\text{He}) = 4.00$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of moles ($n$):**
> > 
> >    $$n = \\frac{m}{Mr}$$
> > 
> >    $$n = \\frac{4.00\\text{ g}}{4.00\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
> > 
> > 2. **Multiply by Avogadro's Constant to find the number of particles:**
> > 
> >    $$\\text{Number of atoms} = n \\times L$$
> > 
> >    $$\\text{Number of atoms} = 1.00 \\times (6.02 \\times 10^{23}) = 6.02 \\times 10^{23}\\text{ atoms}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Mass from Particle Count (Carbon Dioxide)
> **Question:** Calculate the mass of $3.01 \\times 10^{22}$ molecules of carbon dioxide ($\\text{CO}_2$, $Mr = 44.0$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of moles ($n$):**
> > 
> >    $$n = \\frac{\\text{Number of molecules}}{L}$$
> > 
> >    $$n = \\frac{3.01 \\times 10^{22}}{6.02 \\times 10^{23}} = 0.050\\text{ mol}$$
> > 
> > 2. **Calculate the mass ($m$):**
> > 
> >    $$m = n \\times Mr$$
> > 
> >    $$m = 0.050\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 2.20\\text{ g}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Particle Comparison and Avogadro's Constant
> **Question:** Determine which of the following quantities is numerically equal to the Avogadro constant ($L$) and justify your answer:
> 1. Total number of ions in $1\\text{ mole}$ of sodium chloride, $\\text{NaCl}$
> 2. Total number of atoms in $1\\text{ mol}$ of hydrogen gas, $\\text{H}_2$
> 3. Total number of electrons in $1\\text{ mol}$ of helium gas, $\\text{He}$
> 4. Total number of molecules in $1\\text{ mol}$ of oxygen gas, $\\text{O}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Sodium Chloride ($\\text{NaCl}$):**
> >    * $1\\text{ mol}$ of $\\text{NaCl}$ consists of $1\\text{ mol}$ of $\\text{Na}^+$ and $1\\text{ mol}$ of $\\text{Cl}^-$
> >    * Total ions = $2\\text{ mol}$ ($2 \\times L$ ions).
> >    * This does not equal $L$
> > 
> > 2. **Analyze Hydrogen Gas ($\\text{H}_2$):**
> >    * Hydrogen gas is diatomic.
> >    * $1\\text{ mol}$ of $\\text{H}_2$ molecules contains $2\\text{ mol}$ of hydrogen atoms.
> >    * Total atoms = $2 \\times L$ atoms, which does not equal $L$
> > 
> > 3. **Analyze Helium Gas ($\\text{He}$):**
> >    * Helium has an atomic number of 2 (2 electrons per atom).
> >    * $1\\text{ mol}$ of $\\text{He}$ gas contains $2\\text{ mol}$ of electrons.
> >    * Total electrons = $2 \\times L$ electrons, which does not equal $L$
> > 
> > 4. **Analyze Oxygen Gas ($\\text{O}_2$):**
> >    * Oxygen gas consists of diatomic molecules.
> >    * $1\\text{ mol}$ of $\\text{O}_2$ gas contains exactly $1\\text{ mol}$ of $\\text{O}_2$ molecules.
> >    * Total molecules = $1 \\times L$ molecules, which is exactly equal to $L$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Systematic Nomenclature of Manganese Compounds
> **Question:** An ionic compound has the formula $\\text{Mg}(\\text{MnO}_4)_2$. Calculate the oxidation state of the transition metal and determine the correct systematic IUPAC name for this compound.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the constituent ions:**
> >    * Magnesium cation: $\\text{Mg}^{2+}$
> >    * Manganate/permanganate anion: $\\text{MnO}_4^-$
> > 
> > 2. **Calculate the oxidation state of Manganese ($x$) in the $\\text{MnO}_4^-$ ion:**
> >    * Oxygen has a standard oxidation state of $-2$
> >    * The sum of oxidation states in $\\text{MnO}_4^-$ equals its charge ($-1$):
> >      $$x + 4(-2) = -1$$
> >      $$x - 8 = -1$$
> >      $$x = +7$$
> > 
> > 3. **Derive the systematic IUPAC name:**
> >    * Manganese is in the $+7$ oxidation state, so the anion is named **manganate(VII)**.
> >    * Combining with Magnesium cation gives: **Magnesium manganate(VII)**. *(Note: Permanganate is the common/trivial name).*

> [!EXAMPLE]
> #### 📝 Worked Example 5: Writing Ionic Formulae
> **Question:** Determine the correct chemical formula for the compound **ammonium dichromate(VI)** by balancing the charges of its constituent ions.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the formula and charge of each constituent ion:**
> >    * Ammonium cation: $\\text{NH}_4^+$ (charge of $+1$)
> >    * Dichromate(VI) anion: $\\text{Cr}_2\\text{O}_7^{2-}$ (charge of $-2$)
> > 
> > 2. **Balance the charges to form a neutral compound:**
> >    * The total positive charge must balance the negative charge.
> >    * We need two ammonium ions ($2 \\times +1 = +2$) to balance one dichromate(VI) ion ($-2$).
> >    * Equation: $$2 \\times (+1) + 1 \\times (-2) = 0$$
> > 
> > 3. **Write the final chemical formula:**
> >    * Place the polyatomic ammonium ion inside parentheses with a subscript of 2.
> >    * Combine with the dichromate formula: **$(\\text{NH}_4)_2\\text{Cr}_2\\text{O}_7$**
`,
        keyPoints: [
            'One mole is exactly 6.02 × 10²³ particles.',
            'Molar mass (Mr) is calculated by adding relative atomic masses (Ar) of all atoms in a formula.'
        ],
        avogadroScale: true
    },
    {
        id: 'relative-masses-20260106',
        title: 'Relative Masses',
        type: 'text',
        content: `
> [!BOX]
> ### ⚖️ Relative Masses & Standards
> * **Mass Number:** Must be an **integer** because it represents the summation of protons and neutrons in the nucleus of an atom.
> * **Relative Atomic Mass ($Ar$):** The weighted mean (average) mass of an atom of an element compared with (related to) $\\frac{1}{12}$ of the mass of a carbon-12 atom.
>    * *Examples:* $Ar(\\text{H}) = 1$, $Ar(\\text{O}) = 16$. (Note: Relative masses have **no physical units** or are expressed in **amu** - atomic mass units).

> [!BOX]
> ### 💎 Why Carbon-12 is the Standard
> Carbon-12 ($^{12}\\text{C}$) is used as the international reference standard for relative atomic mass because:
> 1. It has a highly stable and constant relative abundance (whereas the isotopic abundance of other elements can vary).
> 2. Its atomic mass is mathematically defined as exactly $12$, which is very close to a whole number.

> [!BOX]
> ### 🔗 Relative Molecular and Formula Masses
> * **Relative Molecular Mass ($Mr$):** The average mass of a covalent molecule compared with (related to) $\\frac{1}{12}$ of the mass of a carbon-12 atom.
>    * *Examples:*
>       * $Mr(\\text{H}_2) = 2 \\times 1 = 2$ (no unit)
>       * $Mr(\\text{H}_2\\text{O}) = (2 \\times 1) + 16 = 18$ (no unit)
> * **Relative Formula Mass ($Mr$):** The average mass of giant ionic structures or giant covalent lattices compared with $\\frac{1}{12}$ of the mass of a carbon-12 atom.
>    * *Examples:*
>       * Ionic Compound: $Mr(\\text{Na}_2\\text{O}) = (2 \\times 23) + 16 = 62$ (no unit)
>       * Giant Covalent: $Mr(\\text{SiO}_2) = 28.1 + (2 \\times 16) = 60.1$ (no unit)

> [!BOX]
> ### ⚖️ Molar Mass
> * **Molar Mass ($M$ or $Mr$):** The mass of $1\\text{ mole}$ of a substance, expressed in grams per mole ($\\text{g mol}^{-1}$)
> * **The Molar Mass Equation:**
>   $$\\text{Molar Mass } (\\text{g mol}^{-1}) = \\frac{\\text{Mass } (\\text{g})}{\\text{Amount } (\\text{mol})}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Handling Water of Crystallization
> **Question:** Calculate the relative formula mass ($Mr$) of copper(II) sulfate pentahydrate ($\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$)  
> *(Relative atomic masses: $\\text{Cu} = 63.5, \\text{S} = 32.1, \\text{O} = 16.0, \\text{H} = 1.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the anhydrous $\\text{CuSO}_4$ part:**
> >    $$Mr(\\text{CuSO}_4) = 63.5 + 32.1 + (4 \\times 16.0) = 159.6$$
> > 
> > 2. **Calculate the water of crystallization part ($5\\text{H}_2\\text{O}$):**
> >    $$5 \\times Mr(\\text{H}_2\\text{O}) = 5 \\times [(2 \\times 1.0) + 16.0] = 5 \\times 18.0 = 90.0$$
> > 
> > 3. **Add the parts together:**
> >    $$Mr(\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}) = 159.6 + 90.0 = 249.6$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining Water of Crystallization from Experimental Data
> **Question:** Hydrated magnesium sulfate has the formula $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$. A student heated a sample in a crucible to remove the water of crystallization. Use the following experimental data to calculate the value of $x$ to the nearest whole number.  
> *(Given relative atomic masses: $\\text{Mg} = 24.3, \\text{S} = 32.1, \\text{O} = 16.0, \\text{H} = 1.0$)*
>
> | Measurement | Mass (g) |
> | :--- | :---: |
> | Mass of empty crucible | 21.21 |
> | Mass of crucible and hydrated magnesium sulfate before heating | 26.71 |
> | Mass of crucible and anhydrous magnesium sulfate after heating | 24.12 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of the anhydrous salt ($\\text{MgSO}_4$) obtained:**
> >    $$\\text{Mass of MgSO}_4 = 24.12\\text{ g} - 21.21\\text{ g} = 2.91\\text{ g}$$
> > 
> > 2. **Calculate the mass of the water of crystallization lost:**
> >    $$\\text{Mass of H}_2\\text{O} = 26.71\\text{ g} - 24.12\\text{ g} = 2.59\\text{ g}$$
> > 
> > 3. **Calculate the moles of anhydrous $\\text{MgSO}_4$ ($Mr = 120.4\\text{ g mol}^{-1}$):**
> >    $$n(\\text{MgSO}_4) = \\frac{m}{Mr} = \\frac{2.91\\text{ g}}{120.4\\text{ g mol}^{-1}} \\approx 0.02417\\text{ mol}$$
> > 
> > 4. **Calculate the moles of water lost ($Mr = 18.0\\text{ g mol}^{-1}$):**
> >    $$n(\\text{H}_2\\text{O}) = \\frac{m}{Mr} = \\frac{2.59\\text{ g}}{18.0\\text{ g mol}^{-1}} \\approx 0.1439\\text{ mol}$$
> > 
> > 5. **Find the simplest mole ratio of water to anhydrous salt ($x$):**
> >    $$x = \\frac{n(\\text{H}_2\\text{O})}{n(\\text{MgSO}_4)} = \\frac{0.1439\\text{ mol}}{0.02417\\text{ mol}} \\approx 5.95$$
> >    * Giving the answer to the nearest whole number: **$x = 6$**
> >    * The formula is **$\\text{MgSO}_4 \\cdot 6\\text{H}_2\\text{O}$**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating Ions in a Given Mass
> **Question:** How many ions are there in $284\\text{ g}$ of sodium sulfate, $\\text{Na}_2\\text{SO}_4$?  
> *(Take Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$, $Ar: \\text{Na}=23.0, \\text{S}=32.1, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the molar mass ($Mr$) of $\\text{Na}_2\\text{SO}_4$:**
> >    $$Mr = (2 \\times 23.0) + 32.1 + (4 \\times 16.0)$$
> >    $$Mr = 46.0 + 32.1 + 64.0 = 142.1\\text{ g mol}^{-1}$$
> > 
> > 2. **Calculate the number of moles ($n$) of $\\text{Na}_2\\text{SO}_4$:**
> >    $$n = \\frac{\\text{Mass}}{\\text{Molar Mass}}$$
> >    $$n = \\frac{284\\text{ g}}{142.1\\text{ g mol}^{-1}} \\approx 2.00\\text{ mol}$$
> > 
> > 3. **Determine the dissociation and number of ions:**
> >    * One formula unit of $\\text{Na}_2\\text{SO}_4$ contains $2\\text{ Na}^+$ ions and $1\\text{ SO}_4^{2-}$ ion.
> >    * Total ions per formula unit = $2 + 1 = 3$ ions.
> > 
> > 4. **Calculate the total number of ions:**
> >    $$\\text{Total ions} = \\text{Moles} \\times L \\times 3$$
> >    $$\\text{Total ions} = 2.00 \\times (6.02 \\times 10^{23}) \\times 3 = 3.612 \\times 10^{24}\\text{ ions}$$
> >    * Therefore, the answer is approximately $3.6 \\times 10^{24}\\text{ ions}$.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Reference Standard of Isotopes
> **Question:** The mass of a single isotope of an element is compared to which fraction of the mass of a carbon-12 atom?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the definition of relative atomic mass:**
> >    * Relative atomic mass is the average mass of an atom compared to $\\frac{1}{12}$ of the mass of an atom of carbon-12.
> > 
> > 2. **Identify the reference standard:**
> >    * The carbon-12 standard uses $\\frac{1}{12}$ as its foundational unit fraction.
> >    * Thus, the mass of any isotope is compared to **$\\frac{1}{12}$** of the mass of a carbon-12 atom.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Counting Atoms in Hydrated Compounds
> **Question:** Calculate the total number of oxygen atoms present in $0.100\\text{ mol}$ of copper(II) sulfate pentahydrate, $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the number of oxygen atoms per formula unit of $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$:**
> >    * The anhydrous salt ($\\text{CuSO}_4$) contains $4$ oxygen atoms.
> >    * The water of crystallization ($5\\text{H}_2\\text{O}$) contains $5 \\times 1 = 5$ oxygen atoms.
> >    * Total oxygen atoms per formula unit = $4 + 5 = 9$ oxygen atoms.
> > 
> > 2. **Calculate the moles of oxygen atoms in the sample:**
> >    $$\\text{Moles of O} = 0.100\\text{ mol of compound} \\times 9 = 0.900\\text{ mol of O atoms}$$
> > 
> > 3. **Calculate the total number of oxygen atoms:**
> >    $$\\text{Number of O atoms} = \\text{Moles of O} \\times L$$
> >    $$\\text{Number of O atoms} = 0.900 \\times (6.02 \\times 10^{23}) = 5.418 \\times 10^{23}\\text{ atoms}$$
`,
        keyPoints: [
            'Relative masses are relative and do not have physical units.',
            'Always add water of crystallization ($X \\cdot n\\text{H}_2\\text{O}$) rather than multiplying.'
        ],
        equationVisualizer: {
            reactants: [['CuSO₄', '#ef4444'], ['5H₂O', '#3b82f6']],
            products: [['CuSO₄·5H₂O', '#10b981']],
            description: "Anhydrous copper(II) sulfate (CuSO₄) reacts with 5 moles of water (H₂O) to form copper(II) sulfate pentahydrate (CuSO₄·5H₂O)"
        }
    },
    {
        id: 'chemical-equations-20260106',
        title: 'Chemical & Ionic Equations',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Chemical Equations Fundamentals
> Chemical equations are symbolic representations of chemical reactions where reactants are converted to products.
> 
> * **Reaction Arrows:**
>    * **Conventional arrow ($\rightarrow$):** Used for one-way (irreversible) reactions going to completion.
>    * **Reversible arrow ($\rightleftharpoons$):** Used for reversible reactions that can go in both directions and establish dynamic equilibrium.
> 
> * **State Symbols:**
>    * **(s):** Solid
>    * **(l):** Liquid
>    * **(g):** Gas
>    * **(aq):** Aqueous / Dissolved in water
> 
> * **Coefficient:** The number in front of chemical formulas in a balanced equation representing the number of moles of each reacting species.

> [!BOX]
> ### 💧 Hydrates & Water of Crystallization
> * **Hydrate:** A chemical compound containing chemically bound water molecules.
> * **Water of crystallization:** Water molecules that are chemically bonded into a crystalline structure in definite ratios.
> 
> #### 🔍 Two Tests for Water (Reversible Hydration Reactions)
> 1. **Cobalt(II) Chloride test:**
>    $$\\text{CoCl}_2\\text{(s)} + 6\\text{H}_2\\text{O(g)} \\rightleftharpoons \\text{CoCl}_2 \\cdot 6\\text{H}_2\\text{O(s)}$$
>    * **Anhydrous Cobalt(II) chloride:** Blue
>    * **Hydrated Cobalt(II) chloride:** Pink
> 
> 2. **Copper(II) Sulfate test:**
>    $$\\text{CuSO}_4\\text{(s)} + 5\\text{H}_2\\text{O(g)} \\rightleftharpoons \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O(s)}$$
>    * **Anhydrous Copper(II) sulfate:** White
>    * **Hydrated Copper(II) sulfate:** Blue

> [!BOX]
> ### ⚡ Ionic Equations
> * **Ionic Equation:** A simplified chemical equation showing only the species (atoms, molecules, or ions) that actively take part in the chemical reaction.
> * **Spectator ions:** Aqueous ions present on both sides of a chemical reaction that do not participate in the reaction itself and remain unchanged.
> 
> #### 📝 Rules to Write a Net Ionic Equation:
> 1. Write the complete balanced symbol equation.
> 2. Split only the **soluble aqueous ionic compounds** into their constituent ions. (Leave solids, liquids, gases, and weak electrolytes intact).
> 3. Identify and delete the **spectator ions** appearing identical on both sides of the equation.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Net Ionic Equation for a Precipitation Reaction
> **Question:** When aqueous solutions of barium chloride, $\\text{BaCl}_2\\text{(aq)}$, and sodium sulfate, $\\text{Na}_2\\text{SO}_4\\text{(aq)}$, are mixed together, a white precipitate of barium sulfate forms. Write the full balanced chemical equation and deduce the net ionic equation for this precipitation reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the full balanced molecular equation:**
> >    $$\\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)} + 2\\text{NaCl(aq)}$$
> > 
> > 2. **Dissociate all soluble ionic compounds (aq) into their constituent ions:**
> >    $$\\text{Ba}^{2+}\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} + 2\\text{Na}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)} + 2\\text{Na}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sodium ions ($2\\text{Na}^+$) and chloride ions ($2\\text{Cl}^-$) are identical on both sides of the equation
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}$$
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 2: Spectator Ions in Precipitation
> > **Question:** Write the full equation, net ionic equation, and determine the spectator ions in the reaction between aqueous potassium iodide, $\\text{KI(aq)}$, and aqueous silver nitrate, $\\text{AgNO}_3\\text{(aq)}$
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Write the balanced molecular equation:**
> > >    $$\\text{KI(aq)} + \\text{AgNO}_3\\text{(aq)} \\rightarrow \\text{KNO}_3\\text{(aq)} + \\text{AgI(s)}$$
> > > 
> > > 2. **Dissociate aqueous compounds into ions:**
> > >    $$\\text{K}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} + \\text{Ag}^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)} \\rightarrow \\text{K}^+\\text{(aq)} + \\text{NO}_3^-\\text{(aq)} + \\text{AgI(s)}$$
> > > 
> > > 3. **Identify spectator ions:**
> > >    * The ions $\\text{K}^+\\text{(aq)}$ and $\\text{NO}_3^-\\text{(aq)}$ remain in solution unchanged on both sides
> > >    * Spectator ions are $\\text{K}^+$ and $\\text{NO}_3^-$
> > > 
> > > 4. **Write the net ionic equation:**
> > >    $$\\text{Ag}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} \\rightarrow \\text{AgI(s)}$$
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 3: Acid-Carbonate Net Ionic Equation
> > **Question:** Write the full equation and deduce the net ionic equation for the reaction of hydroiodic acid, $\\text{HI(aq)}$, with solid sodium hydrogencarbonate, $\\text{NaHCO}_3\\text{(s)}$
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Write the molecular equation:**
> > >    $$\\text{HI(aq)} + \\text{NaHCO}_3\\text{(s)} \\rightarrow \\text{NaI(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$
> > > 
> > > 2. **Dissociate aqueous reactants and products:**
> > >    * Note: $\\text{NaHCO}_3\\text{(s)}$ is solid and $\\text{H}_2\\text{O(l)}$ is liquid, so they are not split
> > >    $$\\text{H}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} + \\text{NaHCO}_3\\text{(s)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{I}^-\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$
> > > 
> > > 3. **Cross out spectator ions:**
> > >    * Only iodide ion ($\\text{I}^-$) appears identical on both sides
> > > 
> > > 4. **Write the net ionic equation:**
> > >    $$\\text{H}^+\\text{(aq)} + \\text{NaHCO}_3\\text{(s)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$$
`,
        keyPoints: [
            'State symbols indicate the physical state of all reactants and products.',
            'Only split (aq) substances into ions; never split solids (s), liquids (l), or gases (g).',
            'Spectator ions must be identical in state and charge on both sides to be crossed out.'
        ],
        equationVisualizer: {
            reactants: [['CoCl₂ (blue)', '#3b82f6'], ['6H₂O', '#38bdf8']],
            products: [['CoCl₂·6H₂O (pink)', '#ec4899']],
            description: "Blue anhydrous cobalt(II) chloride reacts reversibly with water to form pink hydrated cobalt(II) chloride."
        }
    },
    {
        id: 'empirical-formulae-20260106',
        title: 'Empirical Formulae',
        type: 'text',
        content: `
> [!BOX]
> ### 🧬 Empirical & Molecular Formulae
> * **Empirical Formula:** The simplest whole-number ratio in which atoms combine to form a compound.
> * **Steps to Determine the Empirical Formula:**
>    * **Step 1:** Find the masses of each element that combine (in grams or percentage) by experiment.
>    * **Step 2:** Change masses into moles by dividing each mass by its relative atomic mass ($Ar$).
>    * **Step 3:** Calculate the ratio by dividing the number of moles of each element by the smallest mole value obtained.
>    * **Step 4:** If necessary, convert decimals into whole numbers to write the empirical formula subscripts.

> [!BOX]
> ### 📋 Molar Calculation Template Table
> Use this template structure to organize your calculations:

| Step / Property | Element A | Element B |
| :--- | :---: | :---: |
| Mass or % | $m_A$ or % of A | $m_B$ or % of B |
| Relative Atomic Mass ($Ar$) | $Ar(A)$ | $Ar(B)$ |
| Moles ($n = \\text{mass}/Ar$) | $n_A$ | $n_B$ |
| Ratio (divide by smallest) | Ratio $A$ | Ratio $B$ |
| Simplest Whole Number | Integer $A$ | Integer $B$ |

> [!BOX]
> ### 🧬 Molecular Formula Definition & Steps
> * **Molecular Formula:** The actual number of atoms of each element in a molecule of a compound (which is a multiplier version of the empirical formula).
> * **Formula:** $\\text{Molecular Formula} = (\\text{Empirical Formula}) \\times y$
> * **Steps to Determine the Molecular Formula:**
>    * **Step 1:** Determine the empirical formula of the compound.
>    * **Step 2:** Calculate the empirical formula mass ($Mr$ for EF).
>    * **Step 3:** Divide the relative molecular mass ($Mr$) of the compound by the empirical formula mass ($Mr$ of EF) to find the multiplier $y$


> [!EXAMPLE]
> #### 📝 Worked Example 1: Empirical & Molecular Formula of Compound X (Case 1)
> **Question:** Compound $X$ contains $54.54\\%$ carbon, $9.09\\%$ hydrogen, and $36.37\\%$ oxygen by mass, with a relative molecular mass of $88$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles ($n$):**
> >    * $\\text{C} = \\frac{54.54}{12.0} = 4.545\\text{ mol}$
> >    * $\\text{H} = \\frac{9.09}{1.0} = 9.090\\text{ mol}$
> >    * $\\text{O} = \\frac{36.37}{16.0} = 2.273\\text{ mol}$
> > 2. **Find Molar Ratio (divide by smallest value $2.273$):**
> >    * $\\text{C} = \\frac{4.545}{2.273} = 2$
> >    * $\\text{H} = \\frac{9.090}{2.273} = 4$
> >    * $\\text{O} = \\frac{2.273}{2.273} = 1$
> > 3. **Formulate Empirical Formula:** $\\text{C}_2\\text{H}_4\\text{O}$
> > 4. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{C}_2\\text{H}_4\\text{O}) = (2 \\times 12.0) + (4 \\times 1.0) + 16.0 = 44.0$
> > 5. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{88}{44.0} = 2$
> > 6. **Determine Molecular Formula:**
> >    * $(\\text{C}_2\\text{H}_4\\text{O}) \\times 2 = \\text{C}_4\\text{H}_8\\text{O}_2$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Empirical & Molecular Formula of Compound X (Case 2)
> **Question:** Compound $X$ contains $55.85\\%$ carbon, $6.97\\%$ hydrogen, and $37.18\\%$ oxygen by mass, with a relative molecular mass of $86$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate Moles ($n$):**
> >    * $\\text{C} = \\frac{55.85}{12.0} = 4.654\\text{ mol}$
> >    * $\\text{H} = \\frac{6.97}{1.0} = 6.970\\text{ mol}$
> >    * $\\text{O} = \\frac{37.18}{16.0} = 2.324\\text{ mol}$
> > 2. **Find Molar Ratio (divide by smallest value $2.324$):**
> >    * $\\text{C} = \\frac{4.654}{2.324} = 2$
> >    * $\\text{H} = \\frac{6.970}{2.324} = 3$
> >    * $\\text{O} = \\frac{2.324}{2.324} = 1$
> > 3. **Formulate Empirical Formula:** $\\text{C}_2\\text{H}_3\\text{O}$
> > 4. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{C}_2\\text{H}_3\\text{O}) = (2 \\times 12.0) + (3 \\times 1.0) + 16.0 = 43.0$
> > 5. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{86}{43.0} = 2$
> > 6. **Determine Molecular Formula:**
> >    * $(\\text{C}_2\\text{H}_3\\text{O}) \\times 2 = \\text{C}_4\\text{H}_6\\text{O}_2$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Empirical & Molecular Formula of Potassium Iodate (Case 3)
> **Question:** Compound $X$ contains $18.2\\%$ K, $59.4\\%$ I, and the rest is O, with a relative formula mass of $214$. Determine both its empirical and molecular formulas.  
> *(Relative atomic masses: $\\text{K}=39.1, \\text{I}=126.9, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find Oxygen Mass Percentage:**
> >    * $\%\\text{ O} = 100\\% - (18.2\\% + 59.4\\%) = 22.4\\%$
> > 2. **Calculate Moles ($n$):**
> >    * $\\text{K} = \\frac{18.2}{39.1} \\approx 0.465\\text{ mol}$
> >    * $\\text{I} = \\frac{59.4}{126.9} \\approx 0.468\\text{ mol}$
> >    * $\\text{O} = \\frac{22.4}{16.0} = 1.400\\text{ mol}$
> > 3. **Find Molar Ratio (divide by smallest value $0.465$):**
> >    * $\\text{K} = \\frac{0.465}{0.465} = 1$
> >    * $\\text{I} = \\frac{0.468}{0.465} \\approx 1$
> >    * $\\text{O} = \\frac{1.400}{0.465} \\approx 3$
> > 4. **Formulate Empirical Formula:** $\\text{KIO}_3$
> > 5. **Calculate Empirical Formula Mass ($Mr$ of EF):**
> >    * $Mr(\\text{KIO}_3) = 39.1 + 126.9 + (3 \\times 16.0) = 214$
> > 6. **Calculate Multiplier ($y$):**
> >    * $y = \\frac{214}{214} = 1$
> > 7. **Determine Molecular Formula:**
> >    * $(\\text{KIO}_3) \\times 1 = \\text{KIO}_3$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Determining Molecular Formula from Empirical Formula and Mr
> **Question:** A compound has the empirical formula $\\text{CH}_2\\text{O}$ and a relative molecular mass $Mr$ of $180$. What is the molecular formula of this compound?  
> *(Given relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the empirical formula mass ($Mr$ of EF) for $\\text{CH}_2\\text{O}$:**
> >    $$Mr = 12.0 + (2 \\times 1.0) + 16.0 = 30.0$$
> > 
> > 2. **Calculate the multiplier ratio ($y$):**
> >    $$y = \\frac{\\text{Relative Molecular Mass of Compound}}{\\text{Empirical Formula Mass}}$$
> >    $$y = \\frac{180}{30.0} = 6$$
> > 
> > 3. **Multiply the empirical formula subscripts by $y$:**
> >    $$\\text{Molecular Formula} = (\\text{CH}\\_2\\text{O}) \\times 6 = \\text{C}\\_6\\text{H}\\_\\{12\\}\\text{O}\\_6$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Empirical Formula from Combustion Analysis
> **Question:** An organic compound contains only carbon, hydrogen, and oxygen. Complete combustion of a sample of this compound produces carbon dioxide and water. Analysis shows that the compound contains $40.0\\%$ carbon and $6.7\\%$ hydrogen by mass. What is its empirical formula?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the percentage of Oxygen by mass in the sample:**
> >    $$\\%\\text{ O} = 100\\% - (\\%\\text{ C} + \\%\\text{ H})$$
> >    $$\\%\\text{ O} = 100\\% - (40.0\\% + 6.7\\%) = 53.3\\%$$
> > 
> > 2. **Calculate the number of moles ($n$) of each element in a $100\\text{ g}$ sample:**
> >    * $\\text{Carbon (C): } n = \\frac{40.0}{12.0} = 3.33\\text{ mol}$
> >    * $\\text{Hydrogen (H): } n = \\frac{6.7}{1.0} = 6.70\\text{ mol}$
> >    * $\\text{Oxygen (O): } n = \\frac{53.3}{16.0} = 3.33\\text{ mol}$
> > 
> > 3. **Divide by the simplest mole value ($3.33$) to find the simplest ratio:**
> >    * $\\text{Carbon (C): } \\frac{3.33}{3.33} = 1$
> >    * $\\text{Hydrogen (H): } \\frac{6.70}{3.33} \\approx 2$
> >    * $\\text{Oxygen (O): } \\frac{3.33}{3.33} = 1$
> > 
> > 4. **Formulate the empirical formula:**
> >    * The simplest whole-number ratio is $\\text{CH}_2\\text{O}$
> >    * Therefore, the empirical formula is **$\\text{CH}_2\\text{O}$**
`,
        keyPoints: [
            'Empirical formula is the simplified ratio.',
            'Molecular formula requires the total molar mass of the compound.'
        ],
        equationVisualizer: {
            reactants: [['C', '#f59e0b'], ['O₂', '#3b82f6']],
            products: [['CO₂', '#ef4444']],
            description: "1 mole of Carbon (C) reacts with 1 mole of Oxygen gas (O₂) to produce 1 mole of Carbon Dioxide (CO₂)."
        }
    },
    {
        id: 'acid-reactions-20260106',
        title: 'Reactions of Acids & Displacement',
        type: 'text',
        content: `
> [!BOX]
> ### ⚔️ Displacement Reactions
> A **displacement reaction** occurs when a more reactive element displaces a less reactive element from its chemical compounds.
> 
> * **Example:** Metals higher in the reactivity series displace hydrogen or copper from solutions.

> [!BOX]
> ### 🧪 Reactions of Acids
> Acids participate in highly exothermic reactions with various bases and metals:
> 
> 1. **Active Metals (Displacement & Redox):**
>    $$\\text{Active Metal(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Hydrogen(g)}$$
>    * *Condition:* The metal must be more reactive than hydrogen (e.g., Magnesium).
>    * *Equation:* $\\text{Mg(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{MgSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$
> 
> 2. **Metal Oxides & Hydroxides (Neutralization):**
>    $$\\text{Metal Oxide/Hydroxide(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)}$$
>    * *Condition:* Useful for unreactive metals less reactive than hydrogen (e.g., Copper).
>    * *Equation:* $\\text{CuO(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{CuSO}_4\\text{(aq)} + \\text{H}_2\\text{O(l)}$
> 
> 3. **Bases & Alkalis (Neutralization):**
>    $$\\text{Soluble Base(aq)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)}$$
>    * *Equation:* $\\text{NaOH(aq)} + \\text{HCl(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$
>    * *Net Ionic Equation:* $\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$
>    * *Ammonia Reaction:* $2\\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{(NH}_4)_2\\text{SO}_4\\text{(aq)}$
> 
> 4. **Carbonates (Neutralization):**
>    $$\\text{Metal Carbonate(s)} + \\text{Acid(aq)} \\rightarrow \\text{Salt(aq)} + \\text{Water(l)} + \\text{Carbon Dioxide(g)}$$
>    * *Equation:* $\\text{CaCO}_3\\text{(s)} + 2\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$
>    * *Gas Test:* Produced $\\text{CO}_2$ gas turns limewater cloudy/milky.

> [!BOX]
> ### ❄️ Precipitation & Double Salt Preparation
> * **Precipitation reaction:** A reaction producing an insoluble solid (precipitate) when two aqueous solutions are mixed.
> * **Double Salt Preparation:** Preparing compounds containing more than one simple salt in a combined structure, such as ammonium iron(II) sulfate:
>   $$\\text{Fe(s)} + 2\\text{NH}_3\\text{(aq)} + 2\\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{(NH}_4)_2\\text{Fe(SO}_4)_2\\text{(aq)} + \\text{H}_2\\text{(g)}$$

> [!BOX]
> ### 📋 Rules of Salt Solubility
> It is essential to memorize these solubility rules to predict precipitation reactions:

| Soluble Salts | Insoluble Salts |
| :--- | :--- |
| All Sodium to Cesium salts ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium salts ($\\text{NH}_4^+$) | None |
| All Nitrates ($\\text{NO}_3^-$) and Ethanoates ($\\text{CH}_3\\text{COO}^-$) | None |
| Most Halides ($\\text{Cl}^-$, $\\text{Br}^-$, $\\text{I}^-$) | Silver halides ($\\text{Ag}^+$), Lead halides ($\\text{Pb}^{2+}$), Mercury halides ($\\text{Hg}^+$) |
| Most Sulfates ($\\text{SO}_4^{2-}$) | Calcium to Barium sulfates ($\\text{Ca}^{2+}$ - $\\text{Ba}^{2+}$), Lead sulfate ($\\text{Pb}^{2+}$) |
| Sodium, Potassium, and Ammonium carbonates ($\\text{CO}_3^{2-}$), Sulfides ($\\text{S}^{2-}$) | Most other Carbonates and Sulfides |
| Sodium to Cesium ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium ($\\text{NH}_4^+$), Calcium to Barium ($\\text{Ca}^{2+}$ - $\\text{Ba}^{2+}$) hydroxides | Most other Hydroxides |
| Sodium to Cesium ($\\text{Na}^+$ - $\\text{Cs}^+$), Ammonium ($\\text{NH}_4^+$), Strontium to Barium ($\\text{Sr}^{2+}$ - $\\text{Ba}^{2+}$) oxides | Most other Oxides |

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Displacement Reactions
> **Question:** Deduce which of the following mixtures will result in a displacement reaction taking place, and write the full balanced symbol equation for any reaction that occurs:
> 1. $\\text{Cu(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)}$
> 2. $\\text{Fe(s)} + \\text{ZnSO}_4\\text{(aq)}$
> 3. $\\text{Zn(s)} + \\text{Pb(NO}_3)_2\\text{(aq)}$
> 4. $\\text{Ag(s)} + \\text{HCl(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze mixture 1 ($\\text{Cu} + \\text{H}_2\\text{SO}_4$):**
> >    * Copper is less reactive than hydrogen
> >    * No reaction occurs
> > 
> > 2. **Analyze mixture 2 ($\\text{Fe} + \\text{ZnSO}_4$):**
> >    * Iron is less reactive than zinc
> >    * No reaction occurs
> > 
> > 3. **Analyze mixture 3 ($\\text{Zn} + \\text{Pb(NO}_3)_2$):**
> >    * Zinc is more reactive than lead, so zinc displaces lead
> >    * Full equation: $\\text{Zn(s)} + \\text{Pb(NO}_3)_2\\text{(aq)} \\rightarrow \\text{Zn(NO}_3)_2\\text{(aq)} + \\text{Pb(s)}$
> > 
> > 4. **Analyze mixture 4 ($\\text{Ag} + \\text{HCl}$):**
> >    * Silver is less reactive than hydrogen
> >    * No reaction occurs

> [!EXAMPLE]
> #### 📝 Worked Example 2: Net Ionic Equation of an Acid-Metal Reaction
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction of zinc metal with dilute sulfuric acid, identifying any spectator ions
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{Zn(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{ZnSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$\\text{Zn(s)} + 2\\text{H}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} + \\text{H}_2\\text{(g)}$$
> > 
> > 3. **Identify spectator ions:**
> >    * Sulfate ions ($\\text{SO}_4^{2-}$) are identical in charge and state on both sides
> >    * Spectator ion: $\\text{SO}_4^{2-}$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{Zn(s)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{Zn}^{2+}\\text{(aq)} + \\text{H}_2\\text{(g)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Net Ionic Equation of an Acid-Thiosulfate Reaction
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction of aqueous sodium thiosulfate, $\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)}$, with dilute hydrochloric acid, $\\text{HCl(aq)}$, to form a yellow precipitate of sulfur, sulfur dioxide gas, and sodium chloride solution
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)} + 2\\text{HCl(aq)} \\rightarrow 2\\text{NaCl(aq)} + \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$2\\text{Na}^+\\text{(aq)} + \\text{S}_2\\text{O}_3^{2-}\\text{(aq)} + 2\\text{H}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} \\rightarrow 2\\text{Na}^+\\text{(aq)} + 2\\text{Cl}^-\\text{(aq)} + \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sodium ions ($2\\text{Na}^+$) and chloride ions ($2\\text{Cl}^-$) are identical on both sides
> >    * Spectator ions: $\\text{Na}^+$ and $\\text{Cl}^-$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{S}_2\\text{O}_3^{2-}\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{S(s)} + \\text{SO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Neutralization of an Insoluble Base
> **Question:** Write the full molecular equation and deduce the net ionic equation for the reaction of solid copper(II) oxide, $\\text{CuO(s)}$, with dilute sulfuric acid, $\\text{H}_2\\text{SO}_4\\text{(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{CuO(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{CuSO}_4\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate only soluble aqueous ionic compounds:**
> >    * Note: $\\text{CuO(s)}$ is solid and $\\text{H}_2\\text{O(l)}$ is liquid, so do not split them
> >    $$\\text{CuO(s)} + 2\\text{H}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify and cross out spectator ions:**
> >    * Sulfate ions ($\\text{SO}_4^{2-}$) are identical on both sides
> >    * Spectator ion: $\\text{SO}_4^{2-}$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{CuO(s)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{Cu}^{2+}\\text{(aq)} + \\text{H}_2\\text{O(l)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Net Ionic Equation of an Acid-Alkali Neutralization
> **Question:** Write the full chemical equation and deduce the net ionic equation for the reaction between aqueous sodium hydroxide, $\\text{NaOH(aq)}$, and dilute hydrochloric acid, $\\text{HCl(aq)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced molecular equation:**
> >    $$\\text{NaOH(aq)} + \\text{HCl(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 2. **Dissociate soluble aqueous ionic compounds (aq):**
> >    $$\\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
> > 
> > 3. **Identify spectator ions:**
> >    * Sodium ions ($\\text{Na}^+$) and chloride ions ($\\text{Cl}^-$) are spectator ions
> >    * Spectator ions: $\\text{Na}^+$ and $\\text{Cl}^-$
> > 
> > 4. **Write the net ionic equation:**
> >    $$\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{H}_2\\text{O(l)}$$
`,
        keyPoints: [
            'Displacement requires the reactant metal to be more reactive than the metal/hydrogen in solution.',
            'Acids react with carbonates to produce carbon dioxide gas, tested with limewater.',
            'Precipitation reactions occur when positive and negative ions of soluble salts combine to form an insoluble lattice.'
        ],
        equationVisualizer: {
            reactants: [['Mg(s)', '#f59e0b'], ['H₂SO₄(aq)', '#ef4444']],
            products: [['MgSO₄(aq)', '#10b981'], ['H₂(g)', '#38bdf8']],
            description: "Magnesium metal reacts exothermically with sulfuric acid to displace hydrogen gas and form magnesium sulfate."
        }
    },
    {
        id: 'salt-preparation-20260106',
        title: 'Preparation of Salts',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Soluble Salt Preparation
> The method chosen to prepare a soluble salt depends on whether the starting base is soluble (alkali) or insoluble.
> 
> #### 1. Excess Method (Method A): Used when starting with an insoluble reactant
> Add excess of pure metal (used for moderately reactive metals like $\\text{Mg}$, $\\text{Zn}$, $\\text{Fe}$ but excluding dangerous Group 1 metals), metal oxide, hydroxide, or carbonate:
> * **Step A:** Measure a suitable volume of acid into a beaker.
> * **Step B:** Add the metal, metal oxide, or carbonate in small portions while warming and stirring until fizzing stops and the solid stops disappearing (meaning the acid is fully neutralized and the base is in excess).
>   * *Example:* Adding black copper(II) oxide ($\\text{CuO}$) to dilute sulfuric acid. The solution turns blue as copper(II) sulfate ($\\text{CuSO}_4$) forms.
> * **Step C:** Filter the mixture to remove the excess unreacted solid.
> * **Step D:** Heat the filtrate (remaining solution) in an evaporating basin to the crystallization point (saturated solution).
> * **Step E:** Cover with filter paper and leave to cool slowly, allowing crystals to form.
> * **Step F:** Filter the crystals and dry them with filter paper or in a warm oven.
> 
> #### 2. Titration Method (Method B): Used when starting with a soluble alkali
> Since both reactants (acid and alkali) are clear liquids, we cannot visually see when the reaction is complete without an indicator:
> * **Step A:** Use a pipette to accurately measure $25.0\\text{ cm}^3$ of the alkali (e.g., $\\text{NaOH}$) into a conical flask.
> * **Step B:** Add a few drops of indicator (e.g., thymolphthalein which turns blue in base).
> * **Step C:** Fill a burette with the acid (e.g., $\\text{HCl}$) and record the initial reading.
> * **Step D:** Add the acid slowly to the conical flask while swirling until the indicator reaches its endpoint (colorless for thymolphthalein). Record the final volume.
> * **Step E:** Repeat the titration several times until concordant results are obtained (at least two results within $0.2\\text{ cm}^3$ or less).
> * **Step F:** Repeat the procedure without the indicator, mixing the exact volumes of acid and alkali calculated from the concordant runs.
> * **Step G:** Heat the resulting neutral solution to the crystallization point, leave to cool, filter the crystals, and dry them.

> [!BOX]
> ### 🧪 Insoluble Salt Preparation (Precipitation)
> Insoluble salts are prepared by reacting two soluble salt solutions together, producing a solid precipitate.
> 
> #### Experimental Procedure (for example, preparing Barium Sulfate):
> * **Step 1:** Prepare solutions of two soluble salts (e.g., barium chloride $\\text{BaCl}_2\\text{(aq)}$ and magnesium sulfate $\\text{MgSO}_4\\text{(aq)}$).
> * **Step 2:** Mix the two solutions together. A dense white precipitate of barium sulfate forms instantly.
> * **Step 3:** Filter the mixture. The insoluble barium sulfate precipitate is trapped on the filter paper.
> * **Step 4:** Rinse the residue (the precipitate) on the filter paper thoroughly with distilled water to wash away spectator ions.
> * **Step 5:** Place the clean precipitate in a warm oven to dry.
> 
> #### Net Ionic Equations of Common Precipitation Reactions:
> * **Barium Sulfate:**
>   $$\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)} \\quad \\text{(white precipitate)}$$
> * **Silver Chloride:**
>   $$\\text{Ag}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} \\rightarrow \\text{AgCl(s)} \\quad \\text{(white precipitate)}$$
> * **Lead(II) Iodide:**
>   $$\\text{Pb}^{2+}\\text{(aq)} + 2\\text{I}^-\\text{(aq)} \\rightarrow \\text{PbI}_2\\text{(s)} \\quad \\text{(yellow precipitate)}$$


> [!EXAMPLE]
> #### 📝 Worked Example 1: Reason for Excess Reactant in Salt Preparation
> **Question:** In the preparation of hydrated copper(II) sulfate crystals, an excess of copper(II) oxide is added to dilute sulfuric acid. Explain the reason for adding the copper(II) oxide in excess.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the limiting and excess reactants:**
> >    * Copper(II) oxide is added in excess, meaning sulfuric acid is the limiting reactant
> > 
> > 2. **Determine the chemical goal:**
> >    * The goal is to obtain pure copper(II) sulfate crystals free from acid impurities
> > 
> > 3. **Explain the role of the excess reactant:**
> >    * Adding excess copper(II) oxide ensures that all the sulfuric acid is completely neutralized and reacted
> >    * Unreacted copper(II) oxide is insoluble and can be easily filtered off, leaving a pure solution of copper(II) sulfate

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Mean Titre Volume from Titration Data
> **Question:** A student carries out a titration four times to find the volume of dilute hydrochloric acid, $\\text{HCl}$, needed to neutralize $25.0\\text{ cm}^3$ of sodium hydroxide, $\\text{NaOH}$, solution. The burette readings obtained are:
> * Run 1 (Rough): $24.50\\text{ cm}^3$
> * Run 2: $23.90\\text{ cm}^3$
> * Run 3: $24.10\\text{ cm}^3$
> * Run 4: $24.00\\text{ cm}^3$
> * Deduce the mean titre volume that the student should use for their calculations.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify concordant results:**
> >    * Concordant titres are within $0.20\\text{ cm}^3$ of each other
> >    * Run 1 ($24.50\\text{ cm}^3$) is rough and should be excluded
> >    * Run 2 ($23.90\\text{ cm}^3$), Run 3 ($24.10\\text{ cm}^3$), and Run 4 ($24.00\\text{ cm}^3$) are concordant as they all fall within a range of $0.20\\text{ cm}^3$
> > 
> > 2. **Calculate the average of the concordant results:**
> >    $$\\text{Mean Titre} = \\frac{23.90 + 24.10 + 24.00}{3} = 24.00\\text{ cm}^3$$
> > 
> > 3. **State the final titre volume:**
> >    * The student should use a mean titre of **$24.00\\text{ cm}^3$**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Reagents for Insoluble Salt Preparation
> **Question:** Identify two soluble starting reagents that can react to prepare a pure, dry sample of the insoluble salt lead(II) sulfate, $\\text{PbSO}_4$, and write the net ionic equation for the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify soluble sources of lead(II) and sulfate ions:**
> >    * All nitrates are soluble, so **lead(II) nitrate**, $\\text{Pb(NO}_3)_2\\text{(aq)}$, is a suitable soluble lead source
> >    * Sodium sulfate, $\\text{Na}_2\\text{SO}_4\\text{(aq)}$, or magnesium sulfate, $\\text{MgSO}_4\\text{(aq)}$, are soluble sulfate sources
> > 
> > 2. **Formulate the reaction equation:**
> >    $$\\text{Pb(NO}_3)_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{PbSO}_4\\text{(s)} + 2\\text{NaNO}_3\\text{(aq)}$$
> > 
> > 3. **Deduce the net ionic equation:**
> >    * Cross out spectator ions ($\\text{Na}^+$ and $\\text{NO}_3^-$)
> >    * Net ionic equation: **$\\text{Pb}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{PbSO}_4\\text{(s)}$**

> [!EXAMPLE]
> #### 📝 Worked Example 4: Controlling Crystallization Conditions
> **Question:** In the preparation of soluble salts, explain why the solution is heated only to the crystallization point (saturated solution) rather than being evaporated to complete dryness.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Consider water of crystallization:**
> >    * Many soluble salts contain water molecules chemically bound in their crystal lattices (hydrated salts)
> > 
> > 2. **Explain the effect of heating to dryness:**
> >    * Evaporating to complete dryness would drive off the water of crystallization, leaving an anhydrous powder instead of hydrated crystals
> > 
> > 3. **Explain the risk of thermal decomposition:**
> >    * Heating the dry salt directly can cause it to thermally decompose, ruining the product

> [!EXAMPLE]
> #### 📝 Worked Example 5: Preparing a Salt from Soluble Reactants
> **Question:** Outline the steps required to prepare a pure, dry sample of sodium chloride crystals starting from hydrochloric acid and sodium hydroxide solution, explaining why an indicator is used.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the purpose of the indicator:**
> >    * Since both starting reagents are colorless solutions, an indicator is needed to determine the exact neutralization endpoint
> > 
> > 2. **Perform the titration first:**
> >    * Titrate a fixed volume of sodium hydroxide with hydrochloric acid using an indicator until the neutral endpoint is reached
> > 
> > 3. **Prepare the salt without the indicator:**
> >    * Repeat the mixing using the exact volumes calculated from the titration, but without adding any indicator to prevent product contamination
> > 
> > 4. **Crystallize and dry the salt:**
> >    * Heat the resulting neutral solution to the crystallization point, allow to cool slowly to form crystals, filter, and dry with filter paper

`,
        keyPoints: [
            'Use the excess method when the starting base is insoluble; filter to remove excess solid.',
            'Use titration when both reactants are soluble; indicator must be removed or avoided for the final crystals.',
            'Always wash insoluble salts with distilled water to remove soluble impurities before drying.'
        ]
    },
    {
        id: 'solutions-concentrations-20260106',
        title: 'Solutions & Concentrations',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Solutions and Concentrations
> Concentration describes the amount of solute dissolved in a volume of solvent.
> 
> * **Molar Concentration Equation (Molarity):**
>   $$C\\text{ (mol dm}^{-3}) = \\frac{n\\text{ (mol)}}{V\\text{ (dm}^3)}$$
> 
> * **Mass Concentration Equation:**
>   $$\\text{Concentration (g dm}^{-3}) = \\frac{m\\text{ (g)}}{V\\text{ (dm}^3)}$$
> 
> * **Parts per Million (ppm):** Useful for extremely dilute solutions and gases:
>   $$\\text{Concentration (ppm)} = \\frac{\\text{Mass of Solute}}{\\text{Total Mass of Solution}} \\times 10^6$$
> 
> * *Conversion:* $1\\text{ dm}^3 = 1000\\text{ cm}^3$.

> [!BOX]
> ### 🧪 Titration Equivalence
> In acid-base titrations, at the neutralization endpoint:
> $$\\text{Moles of } \\text{H}^+ = \\text{Moles of } \\text{OH}^- \\quad \\text{or} \\quad M_1 V_1 = M_2 V_2$$
> *(Where $M$ is molar concentration and $V$ is volume, assuming a 1:1 reaction stoichiometry).*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Concentration Unit Conversion
> **Question:** A solution of sodium hydroxide, $\\text{NaOH}$, has a concentration of $0.200\\text{ mol dm}^{-3}$. Calculate the concentration of this solution in $\\text{g dm}^{-3}$.  
> *(Given molar mass: $\\text{NaOH} = 40.0\\text{ g mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the conversion formula:**
> >    $$\\text{Concentration in g dm}^{-3} = \\text{Concentration in mol dm}^{-3} \\times Mr(\\text{NaOH})$$
> > 
> > 2. **Calculate the concentration:**
> >    $$\\text{Concentration} = 0.200\\text{ mol dm}^{-3} \\times 40.0\\text{ g mol}^{-1} = 8.0\\text{ g dm}^{-3}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Expressing Gas Concentration in Parts per Million
> **Question:** A sample of a gaseous mixture contains $2.19\\%$ carbon dioxide by mass. Calculate the concentration of carbon dioxide in parts per million (ppm) by mass in this sample.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand percentage by mass:**
> >    * A percentage of $2.19\\%$ by mass means that in every $100\\text{ g}$ of the gas mixture, there are $2.19\\text{ g}$ of carbon dioxide
> > 
> > 2. **Recall the ppm concentration equation:**
> >    $$\\text{Concentration (ppm)} = \\frac{\\text{Mass of Solute}}{\\text{Total Mass of Mixture}} \\times 10^6$$
> > 
> > 3. **Substitute the values and calculate:**
> >    $$\\text{Concentration (ppm)} = \\frac{2.19\\text{ g}}{100\\text{ g}} \\times 10^6 = 2.19 \\times 10^4\\text{ ppm}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Mass from ppm Concentration
> **Question:** A solution of lead(II) nitrate has a concentration of $15\\text{ ppm}$ by mass. Calculate the mass of lead(II) nitrate, in kilograms, present in $400\\text{ g}$ of this solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the ppm mass formula:**
> >    $$\\text{ppm} = \\frac{\\text{Mass of solute (g)}}{\\text{Total mass of solution (g)}} \\times 10^6$$
> > 
> > 2. **Rearrange the formula to solve for the mass of solute:**
> >    $$\\text{Mass of solute (g)} = \\frac{\\text{ppm} \\times \\text{Total mass of solution (g)}}{10^6}$$
> > 
> > 3. **Calculate the mass of solute in grams:**
> >    $$\\text{Mass of solute} = \\frac{15 \\times 400\\text{ g}}{10^6} = 6.00 \\times 10^{-3}\\text{ g}$$
> > 
> > 4. **Convert the mass to kilograms:**
> >    $$\\text{Mass in kg} = \\frac{6.00 \\times 10^{-3}\\text{ g}}{1000} = 6.00 \\times 10^{-6}\\text{ kg}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Calculating Ions from Molar Concentration
> **Question:** How many ions are present in $30.0\\text{ cm}^3$ of $0.025\\text{ mol dm}^{-3}$ barium hydroxide, $\\text{Ba(OH)}_2$, solution?  
> *(Take Avogadro's constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of dissolved $\\text{Ba(OH)}_2$:**
> >    $$n(\\text{Ba(OH)}_2) = C \\times V$$
> >    $$n(\\text{Ba(OH)}_2) = 0.025\\text{ mol dm}^{-3} \\times \\left(\\frac{30.0}{1000}\\right)\\text{ dm}^3 = 7.50 \\times 10^{-4}\\text{ mol}$$
> > 
> > 2. **Determine the number of ions per formula unit:**
> >    * Barium hydroxide dissociates fully:
> >      $$\\text{Ba(OH)}_2\\text{(aq)} \\rightarrow \\text{Ba}^{2+}\\text{(aq)} + 2\\text{OH}^-\\text{(aq)}$$
> >    * One formula unit of $\\text{Ba(OH)}_2$ produces $3$ ions ($1 \\times \\text{Ba}^{2+}$ and $2 \\times \\text{OH}^-$)
> > 
> > 3. **Calculate the total moles of ions:**
> >    $$\\text{Total moles of ions} = 3 \\times n(\\text{Ba(OH)}_2) = 3 \\times (7.50 \\times 10^{-4}\\text{ mol}) = 2.25 \\times 10^{-3}\\text{ mol}$$
> > 
> > 4. **Calculate the total number of ions:**
> >    $$\\text{Number of ions} = \\text{Total moles of ions} \\times L$$
> >    $$\\text{Number of ions} = 2.25 \\times 10^{-3} \\times (6.02 \\times 10^{23}) = 1.35 \\times 10^{21}\\text{ ions}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Concentration from Titration Data
> **Question:** In a titration, $25.0\\text{ cm}^3$ of a solution of hydrochloric acid, $\\text{HCl}$, is neutralized exactly by $20.0\\text{ cm}^3$ of $0.156\\text{ mol dm}^{-3}$ sodium hydroxide, $\\text{NaOH}$, solution. Calculate the concentration of the hydrochloric acid solution.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\text{HCl(aq)} + \\text{NaOH(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$
> >    * The mole ratio of $\\text{HCl}$ to $\\text{NaOH}$ is 1:1
> > 
> > 2. **Calculate the moles of $\\text{NaOH}$ used:**
> >    $$n(\\text{NaOH}) = C \\times V = 0.156\\text{ mol dm}^{-3} \\times \\left(\\frac{20.0}{1000}\\right)\\text{ dm}^3 = 3.12 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Determine the moles of $\\text{HCl}$ reacted (1:1 ratio):**
> >    $$n(\\text{HCl}) = 3.12 \\times 10^{-3}\\text{ mol}$$
> > 
> > 4. **Calculate the concentration of the $\\text{HCl}$ solution:**
> >    $$C(\\text{HCl}) = \\frac{n}{V} = \\frac{3.12 \\times 10^{-3}\\text{ mol}}{\\left(\\frac{25.0}{1000}\\right)\\text{ dm}^3} = 0.125\\text{ mol dm}^{-3}$$

`,
        keyPoints: [
            '1 dm³ is exactly equal to 1000 cm³.',
            'To go from mol dm⁻³ to g dm⁻³, multiply by the molar mass.',
            'ppm calculations scale parts of solute against one million parts of solution.'
        ],
        equationVisualizer: {
            reactants: [['NaCl(s)', '#8b5cf6']],
            products: [['Na⁺(aq)', '#3b82f6'], ['Cl⁻(aq)', '#10b981']],
            description: "Solid Sodium Chloride (NaCl) dissociates in water into aqueous Sodium ions (Na⁺) and Chloride ions (Cl⁻)."
        }
    },
    {
        id: 'gas-volumes-20260106',
        title: 'Gas Volumes & Ideal Gas Equation',
        type: 'text',
        content: `
> [!BOX]
> ### 🎈 Gas Volumes & RTP vs STP
> The volume occupied by a gas depends on temperature and pressure, regardless of the chemical identity of the gas.
> 
> * **Standard Temperature and Pressure (STP):**
>    * *Conditions:* $0^\circ\\text{C}$ ($273.15\\text{ K}$) and $1\\text{ atm}$ ($101.3\\text{ kPa}$).
>    * *Avogadro's Law:* $1\\text{ mol}$ of any gas occupies **$22.4\\text{ dm}^3$** at STP.
> 
> * **Room Temperature and Pressure (RTP):**
>    * *Conditions:* $25^\circ\\text{C}$ ($298\\text{ K}$) and $1\\text{ atm}$ ($101.3\\text{ kPa}$).
>    * *Avogadro's Law:* $1\\text{ mol}$ of any gas occupies **$24.0\\text{ dm}^3$** at RTP.
> 
> * **Molar Gas Volume Calculation:**
>   $$\\text{Moles } (n) = \\frac{\\text{Volume at RTP } (\\text{dm}^3)}{24.0\\text{ dm}^3\\text{ mol}^{-1}}$$

> [!BOX]
> ### 🎈 The Ideal Gas Equation
> For gases outside standard room conditions, their state is governed by:
> 
>   $$P V = n R T$$
> 
> * **Where:**
>   * **$P$** = pressure in Pascals ($\\text{Pa}$)
>     * *Conversions:* $1\\text{ atm} = 101,325\\text{ Pa}$
>   * **$V$** = volume in cubic meters ($\\text{m}^3$)
>     * *Conversions:* $1\\text{ m}^3 = 10^3\\text{ dm}^3 = 10^6\\text{ cm}^3$
>   * **$T$** = temperature in Kelvin ($\\text{K}$)
>     * *Conversions:* $T(\\text{K}) = T(^\\circ\\text{C}) + 273$
>   * **$n$** = amount of substance ($\\text{mol}$)
>   * **$R$** = gas constant = $8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$
> 
> * **Extended Formulas & Density ($d$):**
>   Since $n = \\frac{m}{M_r}$, we can substitute moles into the equation:
>   $$P = \\frac{nRT}{V} = \\frac{mRT}{M_r V}$$
>   Using density $d = \\frac{m}{V}$ (mass per unit volume), we get:
>   $$P = \\frac{RTd}{M_r} \\implies M_r = \\frac{RTd}{P}$$
>   *Note: If density $d$ is in $\\text{g dm}^{-3}$ or $\\text{g cm}^{-3}$, it must be converted to $\\text{g m}^{-3}$ to remain compatible with SI units ($P$ in $\\text{Pa}$ and $R = 8.31$):*
>   $$d(\\text{g m}^{-3}) = d(\\text{g dm}^{-3}) \\times 1000$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Moles of Nitrogen Gas
> **Question:** A sample of nitrogen gas occupies $4.00 \\times 10^{-3}\\text{ m}^3$ at a pressure of $100\\text{ kPa}$ and a temperature of $27.0^\\circ\\text{C}$. Calculate the number of moles of nitrogen gas present.  
> *($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert pressure to Pascals (Pa):**
> >    $$P = 100\\text{ kPa} = 100 \\times 10^3\\text{ Pa} = 100,000\\text{ Pa}$$
> > 
> > 2. **Convert temperature to Kelvin (K):**
> >    $$T = 27.0^\\circ\\text{C} + 273 = 300\\text{ K}$$
> > 
> > 3. **Rearrange the Ideal Gas Equation to solve for $n$:**
> >    $$n = \\frac{PV}{RT}$$
> > 
> > 4. **Substitute the values and calculate:**
> >    $$n = \\frac{100,000\\text{ Pa} \\times 4.00 \\times 10^{-3}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 300\\text{ K}}$$
> >    $$n = \\frac{400}{2493} \\approx 0.160\\text{ mol}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Molar Mass of a Volatile Liquid
> **Question:** Compound X has a mass of $0.267\\text{ g}$ and vaporizes at $85.0^\\circ\\text{C}$ and $104\\text{ kPa}$, producing a gas sample with a volume of $98.0\\text{ cm}^3$. Calculate the molar mass ($M_r$) of compound X.  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert all values to standard SI units:**
> >    * Temperature: $T = 85.0 + 273 = 358\\text{ K}$
> >    * Pressure: $P = 104\\text{ kPa} = 104,000\\text{ Pa}$
> >    * Volume: $V = 98.0\\text{ cm}^3 = 98.0 \\times 10^{-6}\\text{ m}^3$
> > 
> > 2. **Calculate the moles of vaporized Compound X ($n$):**
> >    $$n = \\frac{PV}{RT}$$
> >    $$n = \\frac{104,000\\text{ Pa} \\times 98.0 \\times 10^{-6}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 358\\text{ K}}$$
> >    $$n = \\frac{10.192}{2974.98} \\approx 3.426 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Calculate the molar mass ($M_r$):**
> >    $$M_r = \\frac{m}{n}$$
> >    $$M_r = \\frac{0.267\\text{ g}}{3.426 \\times 10^{-3}\\text{ mol}} \\approx 77.9\\text{ g mol}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Identifying an Unknown Gas
> **Question:** When an evacuated glass bulb of volume $63.8\\text{ cm}^3$ is filled with an unknown gas at $24.0^\\circ\\text{C}$ and $99.5\\text{ kPa}$, the mass increases by $0.103\\text{ g}$. Deduce whether the gas is ammonia ($\\text{NH}_3$), nitrogen ($\\text{N}_2$), or argon ($\\text{Ar}$).  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$, Relative atomic masses: $\\text{H} = 1.0, \\text{N} = 14.0, \\text{Ar} = 39.9$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert all values to standard SI units:**
> >    * Volume: $V = 63.8\\text{ cm}^3 = 63.8 \\times 10^{-6}\\text{ m}^3$
> >    * Temperature: $T = 24.0 + 273 = 297\\text{ K}$
> >    * Pressure: $P = 99.5\\text{ kPa} = 99,500\\text{ Pa}$
> > 
> > 2. **Calculate the moles of gas inside the bulb ($n$):**
> >    $$n = \\frac{PV}{RT}$$
> >    $$n = \\frac{99,500\\text{ Pa} \\times 63.8 \\times 10^{-6}\\text{ m}^3}{8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 297\\text{ K}}$$
> >    $$n = \\frac{6.3481}{2468.07} \\approx 2.572 \\times 10^{-3}\\text{ mol}$$
> > 
> > 3. **Calculate the molar mass ($M_r$) of the gas:**
> >    $$M_r = \\frac{m}{n}$$
> >    $$M_r = \\frac{0.103\\text{ g}}{2.572 \\times 10^{-3}\\text{ mol}} \\approx 40.0\\text{ g mol}^{-1}$$
> > 
> > 4. **Compare with the expected molar masses of the candidate gases:**
> >    * Ammonia ($\\text{NH}_3$): $M_r = 14.0 + (3 \\times 1.0) = 17.0\\text{ g mol}^{-1}$
> >    * Nitrogen ($\\text{N}_2$): $M_r = 2 \\times 14.0 = 28.0\\text{ g mol}^{-1}$
> >    * Argon ($\\text{Ar}$): $M_r = 39.9\\text{ g mol}^{-1}$
> >    * The calculated molar mass of $40.0\\text{ g mol}^{-1}$ matches Argon ($\\text{Ar}$) extremely closely.
> >    * **Conclusion:** The gas is **argon**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing the Correct Expression for Moles
> **Question:** A sample of an ideal gas occupies a volume of $400\\text{ cm}^3$ at a temperature of $27^\\circ\\text{C}$ and a pressure of $1.01 \\times 10^5\\text{ Pa}$. Deduce the mathematical expression that gives the correct number of moles ($n$) of this gas.  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the variables and rearrange the Ideal Gas Equation:**
> >    * Formula: $PV = nRT \\implies n = \\frac{PV}{RT}$
> > 
> > 2. **Convert the units to SI standard equivalents:**
> >    * Pressure ($P$): Already in Pascals ($1.01 \\times 10^5\\text{ Pa}$).
> >    * Volume ($V$): Convert from $\\text{cm}^3$ to $\\text{m}^3$ by multiplying by $10^{-6}$.  
> >      $$V = 400 \\times 10^{-6}\\text{ m}^3$$
> >    * Temperature ($T$): Convert from $^\\circ\\text{C}$ to Kelvin ($\\text{K}$) by adding $273$.  
> >      $$T = 27 + 273\\text{ K}$$
> >    * Gas Constant ($R$): $8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$.
> > 
> > 3. **Substitute conversions back into the rearranged equation to form the final expression:**
> >    $$n = \\frac{1.01 \\times 10^5 \\times 400 \\times 10^{-6}}{8.31 \\times (27 + 273)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Calculating Gas Volume from Mass
> **Question:** Calculate the volume, in $\\text{dm}^3$, occupied by $10.0\\text{ g}$ of carbon dioxide gas ($\\text{CO}_2$, $M_r = 44.0$) at a pressure of $150\\text{ kPa}$ and a temperature of $50.0^\\circ\\text{C}$.  
> *($R = 8.31\\text{ J mol}^{-1}\\text{ K}^{-1}$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the amount of substance in moles ($n$):**
> >    $$n(\\text{CO}_2) = \\frac{m}{M_r} = \\frac{10.0\\text{ g}}{44.0\\text{ g mol}^{-1}} \\approx 0.2273\\text{ mol}$$
> > 
> > 2. **Convert pressure and temperature to SI standard units:**
> >    * Pressure: $P = 150\\text{ kPa} = 150,000\\text{ Pa}$
> >    * Temperature: $T = 50.0 + 273 = 323\\text{ K}$
> > 
> > 3. **Rearrange the Ideal Gas Equation to solve for volume ($V$):**
> >    $$V = \\frac{nRT}{P}$$
> > 
> > 4. **Calculate the volume in cubic meters ($\\text{m}^3$):**
> >    $$V = \\frac{0.2273\\text{ mol} \\times 8.31\\text{ J mol}^{-1}\\text{ K}^{-1} \\times 323\\text{ K}}{150,000\\text{ Pa}}$$
> >    $$V = \\frac{610.1}{150,000} \\approx 4.067 \\times 10^{-3}\\text{ m}^3$$
> > 
> > 5. **Convert the volume from $\\text{m}^3$ to $\\text{dm}^3$:**
> >    * Since $1\\text{ m}^3 = 1000\\text{ dm}^3$:
> >      $$V = 4.067 \\times 10^{-3} \\times 1000 = 4.07\\text{ dm}^3$$
`,
        keyPoints: [
            'In pV = nRT, volume MUST be converted to m³.',
            'Temperature MUST always be in Kelvin.',
            'Remember that 1 mole of gas takes 24 dm³ at RTP and 22.4 dm³ at STP.'
        ],
        gasLawSimulator: {
            law: 'boyle'
        }
    },
    {
        id: 'yield-economy-20260106',
        title: 'Yield & Atom Economy',
        type: 'text',
        content: `
> [!BOX]
> ### 📈 Percentage Yield, Purity & Solubility
> * **Percentage Yield:** Measures the efficiency of a chemical reaction.
>   $$\\%\\text{ Yield} = \\frac{\\text{Actual mass obtained (g)}}{\\text{Calculated (theoretical) mass (g)}} \\times 100\\%$$
> 
> * **Percentage Purity:** Measures the purity of a recovered product.
>   $$\\%\\text{ Purity} = \\frac{\\text{Mass of the pure product (g)}}{\\text{Mass of the impure product obtained (g)}} \\times 100\\%$$
> 
> * **Solubility:** The maximum amount of solute that can be dissolved in $100\\text{ g}$ of water (solvent) at a certain temperature.

> [!BOX]
> ### ⚠️ Reasons why Percentage Yield is less than 100%:
> * **Reason 1 - Product Loss:** Loss of product during transfer or purification steps (such as filtration or crystallization).
> * **Reason 2 - Side Reactions:** Reactants may react in unexpected ways to form different byproducts.
> * **Reason 3 - Reversible Reactions:** The reaction may reach equilibrium, preventing complete conversion of reactants to products.

> [!BOX]
> ### ♻️ Atom Economy
> * **Percentage Atom Economy (by mass):** Measures the proportion of reactant atoms that become part of the desired product.
>   $$\\%\\text{ Atom Economy} = \\frac{Mr(\\text{desired product}) \\times \\text{its coefficient}}{\\text{Total } Mr(\\text{all products or reactants}) \\times \\text{their coefficients}} \\times 100\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Percentage Yield
> **Question:** $12.0\\text{ g}$ of carbon reacts with excess oxygen to produce carbon dioxide:  
> $$\\text{C} + \\text{O}\\_2 \\rightarrow \\text{CO}\\_2$$  
> If the actual mass of carbon dioxide collected is $38.0\\text{ g}$, calculate the percentage yield.  
> *($Ar(\\text{C}) = 12.0, Mr(\\text{CO}\\_2) = 44.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the moles of carbon reactant:**
> >    $$n(\\text{C}) = \\frac{12.0\\text{ g}}{12.0\\text{ g mol}^{-1}} = 1.00\\text{ mol}$$
> > 
> > 2. **Determine the theoretical moles of $\\text{CO}\\_2$ (1:1 ratio):**
> >    $$n(\\text{CO}\\_2) = 1.00\\text{ mol}$$
> > 
> > 3. **Calculate the theoretical mass of $\\text{CO}\\_2$:**
> >    $$\\text{Theoretical Mass} = 1.00\\text{ mol} \\times 44.0\\text{ g mol}^{-1} = 44.0\\text{ g}$$
> > 
> > 4. **Calculate percentage yield:**
> >    $$\\%\\text{ Yield} = \\left(\\frac{38.0\\text{ g}}{44.0\\text{ g}}\\right) \\times 100 = 86.4\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Reacting Potassium Iodide with Lead(II) Nitrate
> **Question:** $20.0\\text{ cm}^3$ of $1.0\\text{ mol dm}^{-3}$ potassium iodide ($\\text{KI}$) solution is reacted with $10.0\\text{ cm}^3$ of $1.0\\text{ mol dm}^{-3}$ lead(II) nitrate ($\\text{Pb(NO}\\_3)\\_2$) solution.
> * **1.** Write a word equation for the reaction.
> * **2.** Write a symbol equation for the reaction.
> * **3.** Write a net ionic equation for the reaction.
> * **4.** Calculate the amount of moles of each reactant and product remaining at the end of the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the word equation:**
> >    $$\\text{Potassium iodide} + \\text{Lead(II) nitrate} \\rightarrow \\text{Lead(II) iodide} + \\text{Potassium nitrate}$$
> > 
> > 2. **Write the symbol equation (with state symbols):**
> >    $$2\\text{KI(aq)} + \\text{Pb(NO}\\_3)\\_2\\text{(aq)} \\rightarrow \\text{PbI}\\_2\\text{(s)} + 2\\text{KNO}\\_3\\text{(aq)}$$
> > 
> > 3. **Write the net ionic equation:**
> >    $$\\text{Pb}^{2+}\\text{(aq)} + 2\\text{I}^-\\text{(aq)} \\rightarrow \\text{PbI}\\_2\\text{(s)}$$
> > 
> > 4. **Calculate the initial moles of reactants:**
> >    * Moles of $\\text{KI} = C \\times V = 1.0\\text{ mol dm}^{-3} \\times 0.020\\text{ dm}^3 = 0.020\\text{ mol}$
> >    * Moles of $\\text{Pb(NO}\\_3)\\_2 = C \\times V = 1.0\\text{ mol dm}^{-3} \\times 0.010\\text{ dm}^3 = 0.010\\text{ mol}$
> > 
> > 5. **Determine the limiting reactant and reaction stoichiometry:**
> >    * From the balanced equation, $2\\text{ moles}$ of $\\text{KI}$ react with $1\\text{ mole}$ of $\\text{Pb(NO}\\_3)\\_2$.
> >    * Therefore, $0.020\\text{ mol}$ of $\\text{KI}$ reacts exactly with $0.010\\text{ mol}$ of $\\text{Pb(NO}\\_3)\\_2$.
> > 
> > 6. **Find the moles of all species remaining at the end:**
> >    * Moles of $\\text{KI} = 0\\text{ mol}$ (fully consumed)
> >    * Moles of $\\text{Pb(NO}\\_3)\\_2 = 0\\text{ mol}$ (fully consumed)
> >    * Moles of $\\text{PbI}\\_2\\text{ precipitate produced} = 0.010\\text{ mol}$
> >    * Moles of $\\text{KNO}\\_3\\text{ produced} = 0.020\\text{ mol}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Atom Economy of Ethanol Production
> **Question:** Glucose is fermented to produce ethanol and carbon dioxide:
> $$\\text{C}\\_6\\text{H}\\_\\{12\\}\\text{O}\\_6 \\rightarrow 2\\text{C}\\_2\\text{H}\\_5\\text{OH} + 2\\text{CO}\\_2$$
> Calculate the percentage atom economy by mass for the production of ethanol in this reaction.  
> *(Relative atomic masses: $\\text{C}=12.0, \\text{H}=1.0, \\text{O}=16.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the desired product:** Ethanol ($\\text{C}\\_2\\text{H}\\_5\\text{OH}$).
> > 
> > 2. **Calculate the molar mass ($Mr$) of the desired product:**
> >    $$Mr(\\text{C}\\_2\\text{H}\\_5\\text{OH}) = (2 \\times 12.0) + (5 \\times 1.0) + 16.0 + 1.0 = 46.0\\text{ g mol}^{-1}$$
> > 
> > 3. **Calculate the total mass of the desired product based on the coefficient (2):**
> >    $$\\text{Desired Mass} = 2 \\times 46.0 = 92.0\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate the total molar mass of the reactant (Glucose):**
> >    $$Mr(\\text{C}\\_6\\text{H}\\_\\{12\\}\\text{O}\\_6) = (6 \\times 12.0) + (12 \\times 1.0) + (6 \\times 16.0) = 180.0\\text{ g mol}^{-1}$$
> > 
> > 5. **Calculate the percentage atom economy:**
> >    $$\\%\\text{ Atom Economy} = \\frac{\\text{Desired Mass}}{\\text{Total Reactant Mass}} \\times 100\\%$$
> >    $$\\%\\text{ Atom Economy} = \\left(\\frac{92.0}{180.0}\\right) \\times 100 = 51.1\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Solubility of Barium Nitrate upon Cooling
> **Question:** $20\\text{ cm}^3$ of a saturated solution of barium nitrate at $80^\\circ\\text{C}$ (containing $20\\text{ g}$ of water) was cooled to $20^\\circ\\text{C}$, resulting in $9.32\\text{ g}$ of crystals precipitating. The solubility of barium nitrate is $3.74\\text{ g}$ per $100\\text{ g}$ of water at $20^\\circ\\text{C}$. Calculate the solubility of barium nitrate at $80^\\circ\\text{C}$ in $\\text{g}$ per $100\\text{ g}$ of water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of barium nitrate remaining dissolved at $20^\\circ\\text{C}$ in the $20\\text{ g}$ of water:**
> >    $$\\text{Solubility at } 20^\\circ\\text{C} = 3.74\\text{ g per } 100\\text{ g water}$$
> >    $$\\text{Mass dissolved in } 20\\text{ g water} = 3.74 \\times \\left(\\frac{20}{100}\\right) = 0.748\\text{ g}$$
> > 
> > 2. **Determine the total mass of barium nitrate dissolved in the solution initially at $80^\\circ\\text{C}$:**
> >    $$\\text{Initial Mass dissolved} = \\text{Mass remaining dissolved} + \\text{Mass precipitated}$$
> >    $$\\text{Initial Mass dissolved} = 0.748\\text{ g} + 9.32\\text{ g} = 10.068\\text{ g}$$
> > 
> > 3. **Calculate the solubility at $80^\\circ\\text{C}$ (scaled to $100\\text{ g}$ of water):**
> >    $$\\text{Solubility at } 80^\\circ\\text{C} = 10.068\\text{ g} \\times \\left(\\frac{100}{20}\\right) = 50.34\\text{ g per } 100\\text{ g water}$$
> >    *Therefore, the solubility of barium nitrate at $80^\\circ\\text{C}$ is approximately **$50.3\\text{ g}$ per $100\\text{ g}$ of water**.*

> [!EXAMPLE]
> #### 📝 Worked Example 5: Atom Economy of Iron Production
> **Question:** Calculate the percentage atom economy for producing iron from iron(III) oxide using carbon monoxide:  
> $$\\text{Fe}\\_2\\text{O}\\_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}\\_2$$  
> *(Relative atomic masses: $\\text{Fe} = 55.8, \\text{O} = 16.0, \\text{C} = 12.0$)*
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the desired product:** Iron (Fe).
> > 
> > 2. **Calculate the total mass of the desired product (using its coefficient 2):**
> >    $$\\text{Desired Product Mass} = 2 \\times Ar(\\text{Fe}) = 2 \\times 55.8 = 111.6\\text{ g mol}^{-1}$$
> > 
> > 3. **Calculate the total mass of all reactants:**
> >    $$\\text{Total Reactants} = Mr(\\text{Fe}_2\\text{O}_3) + [3 \\times Mr(\\text{CO})]$$
> >    $$Mr(\\text{Fe}_2\\text{O}_3) = (2 \\times 55.8) + (3 \\times 16.0) = 159.6\\text{ g mol}^{-1}$$
> >    $$3 \\times Mr(\\text{CO}) = 3 \\times (12.0 + 16.0) = 84.0\\text{ g mol}^{-1}$$
> >    $$\\text{Total Reactants Mass} = 159.6 + 84.0 = 243.6\\text{ g mol}^{-1}$$
> > 
> > 4. **Calculate the percentage atom economy:**
> >    $$\\%\\text{ Atom Economy} = \\left(\\frac{111.6}{243.6}\\right) \\times 100 = 45.8\\%$$
`,
        keyPoints: [
            'High yield does not necessarily mean high atom economy.',
            'Atom economy includes waste byproduct masses in the total reactants mass calculation.'
        ],
        equationVisualizer: {
            reactants: [['Fe₂O₃', '#ef4444'], ['3CO', '#f59e0b']],
            products: [['2Fe', '#10b981'], ['3CO₂', '#6b7280']],
            description: "1 mole of Iron(III) Oxide (Fe₂O₃) reacts with 3 moles of Carbon Monoxide (CO) to yield 2 moles of Iron (Fe) and 3 moles of Carbon Dioxide (CO₂)."
        }
    },
    {
        id: 'percentage-error-20260106',
        title: 'Experimental Uncertainty',
        type: 'text',
        content: `
> [!BOX]
> ### 🧮 Experimental Uncertainty & Percentage Error
> During practical laboratory work, every measuring instrument has an inherent limit of accuracy. This limit determines the uncertainty of the measurement.
> 
> * **Absolute Uncertainty:** The actual range of doubt in a measurement:
>   $$\\text{Absolute Uncertainty} = \\text{Apparatus accuracy} \\times \\text{Number of readings}$$
> 
> * **Percentage Uncertainty (Percentage Error):** Shows the uncertainty as a percentage of the total measurement:
>   $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Measurement value}} \\times 100\\%$$
> 
> * **Number of Readings Guide:**
>    * **1 reading:** Used when only one final value is read (e.g., volumetric pipette, measuring cylinder).
>    * **2 readings:** Used when a measurement is the difference between two readings (e.g., burette titration: initial and final volume; balance: mass of empty container and mass with sample; thermometer: initial and final temperature).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Percentage Error in a Titration
> **Question:** A sample of $25.0\\text{ cm}^3$ of $0.205\\text{ mol dm}^{-3}$ sulfuric acid was titrated with sodium hydroxide solution. The titre obtained was $14.60\\text{ cm}^3$
> What is the percentage error in the titre?
> [The burette is accurate to $0.05\\text{ cm}^3$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * A burette titre is calculated from the difference between two readings (the initial and final readings)
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since two readings are taken, we multiply the accuracy per reading by 2
> >    * $\\text{Absolute Uncertainty} = 0.05\\text{ cm}^3 \\times 2 = 0.10\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty in the titre:**
> >    $$\\text{Percentage Error} = \\frac{\\text{Absolute Uncertainty}}{\\text{Titre Value}} \\times 100\\%$$
> >    $$\\text{Percentage Error} = \\left(\\frac{0.10}{14.60}\\right) \\times 100 \\approx 0.68\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Percentage Error in Weighing by Difference
> **Question:** A student weighs a sample of sodium carbonate. The mass of the empty weighing bottle is $10.15\\text{ g}$. After adding the sample, the mass is $12.40\\text{ g}$
> Calculate the percentage uncertainty in the mass of the sodium carbonate.
> [The balance is accurate to $0.005\\text{ g}$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass of sodium carbonate:**
> >    * $\\text{Mass of sample} = 12.40\\text{ g} - 10.15\\text{ g} = 2.25\\text{ g}$
> > 
> > 2. **Determine the number of readings:**
> >    * The mass is obtained by difference, which requires two readings (the empty bottle and the bottle with sample)
> > 
> > 3. **Calculate the absolute uncertainty:**
> >    * $\\text{Absolute Uncertainty} = 2 \\times 0.005\\text{ g} = 0.010\\text{ g}$
> > 
> > 4. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.010}{2.25}\\right) \\times 100 \\approx 0.44\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Percentage Error in Temperature Change
> **Question:** In an enthalpy change experiment, the temperature of $50.0\\text{ cm}^3$ of water rises from $19.5^\\circ\\text{C}$ to $31.2^\\circ\\text{C}$
> Calculate the percentage uncertainty in this temperature change.
> [The thermometer is accurate to $0.1^\\circ\\text{C}$ per reading]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the temperature rise:**
> >    * $\\Delta T = 31.2^\\circ\\text{C} - 19.5^\\circ\\text{C} = 11.7^\\circ\\text{C}$
> > 
> > 2. **Determine the number of readings:**
> >    * Finding a temperature change requires measuring both the initial and maximum temperatures, which is 2 readings
> > 
> > 3. **Calculate the absolute uncertainty:**
> >    * $\\text{Absolute Uncertainty} = 2 \\times 0.1^\\circ\\text{C} = 0.2^\\circ\\text{C}$
> > 
> > 4. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.2}{11.7}\\right) \\times 100 \\approx 1.71\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Percentage Error in a Volumetric Pipette
> **Question:** A student uses a $25.0\\text{ cm}^3$ volumetric pipette to measure a sample of sodium hydroxide solution. Calculate the percentage uncertainty in this measurement.
> [The pipette is accurate to $0.06\\text{ cm}^3$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * Unlike a burette or balance, a volumetric pipette is calibrated to deliver a single fixed volume, which requires only 1 reading
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since only one reading is taken, the absolute uncertainty is equal to the accuracy of the pipette
> >    * $\\text{Absolute Uncertainty} = 0.06\\text{ cm}^3 \\times 1 = 0.06\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Volume Measured}} \\times 100\\%$$
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.06}{25.0}\\right) \\times 100 = 0.24\\%$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Percentage Error in a Measuring Cylinder
> **Question:** A student uses a $50.0\\text{ cm}^3$ measuring cylinder to measure a volume of dilute hydrochloric acid. Calculate the percentage uncertainty in this volume.
> [The measuring cylinder is accurate to $0.5\\text{ cm}^3$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of readings:**
> >    * A measuring cylinder is read once to determine the volume of liquid, which requires only 1 reading
> > 
> > 2. **Calculate the absolute uncertainty:**
> >    * Since only one reading is taken, the absolute uncertainty is equal to the accuracy of the measuring cylinder
> >    * $\\text{Absolute Uncertainty} = 0.5\\text{ cm}^3 \\times 1 = 0.5\\text{ cm}^3$
> > 
> > 3. **Calculate the percentage uncertainty:**
> >    $$\\text{Percentage Uncertainty} = \\frac{\\text{Absolute Uncertainty}}{\\text{Volume Measured}} \\times 100\\%$$
> >    $$\\text{Percentage Uncertainty} = \\left(\\frac{0.5}{50.0}\\right) \\times 100 = 1.0\\%$$
`,
        keyPoints: [
            'Always count the number of readings taken with the measuring instrument, such as two readings for a burette titration.',
            'To minimize percentage error, use larger measurements or higher accuracy apparatus.'
        ]
    }
];
