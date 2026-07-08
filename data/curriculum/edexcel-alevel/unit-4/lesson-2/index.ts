import { LessonPart } from '../../../registry';

export const lessonTitle = "Entropy & Energetics II";
export const lessonNumber = 2;

export const theoryMarkdown = `
# Topic 13: Entropy & Energetics II
This lesson covers entropy, Gibbs free energy, lattice enthalpy, Born-Haber cycles, enthalpy of solution, and Hess's Law applications.
`;

export const parts: LessonPart[] = [
    {
        id: 'entropy-spontaneous-u4-l2',
        title: 'Entropy & Spontaneous Reactions',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌀 Entropy (S)
> **Entropy** is a measure of the degree of disorder or randomness in a system. Systems naturally tend to move towards states of higher entropy (greater disorder).
> 
> * **Units:** $\\\\text{J K}^{-1}\\\\text{ mol}^{-1}$
> * **Absolute Entropy:** Unlike enthalpy, absolute values of entropy can be measured (entropy of a perfect crystal at 0 K is zero — the Third Law of Thermodynamics).

> [!TIP]
> ### 🧪 Factors That Increase Entropy
> 1. **Change of state:** Entropy increases as matter becomes less ordered:
>    $$S(\\\\text{solid}) < S(\\\\text{liquid}) < S(\\\\text{gas})$$
> 2. **Dissolution:** Dissolving a solid in water increases entropy (ions become dispersed).
> 3. **Increasing moles of gas:** When the number of moles of gas increases in a reaction.
> 4. **Increasing temperature:** Higher temperature = more thermal motion and disorder.

> [!IMPORTANT]
> ### 🧮 Entropy Change of a Reaction ($\\\\Delta S$)
> The standard entropy change of a reaction is calculated from the standard molar entropies of products and reactants:
> $$\\\\Delta S^\\\\theta_{\\\\text{rxn}} = \\\\sum S^\\\\theta(\\\\text{products}) - \\\\sum S^\\\\theta(\\\\text{reactants})$$
> * **Positive $\\\\Delta S$:** Entropy increases (system becomes more disordered — favourable).
> * **Negative $\\\\Delta S$:** Entropy decreases (system becomes more ordered — unfavourable).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Entropy Change
> **Question:** For the reaction $\\\\text{CaCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)}$, use the data below to calculate the standard entropy change ($\\\\Delta S^\\\\theta$).
> 
> | Substance | $S^\\\\theta$ ($\\\\text{J K}^{-1}\\\\text{ mol}^{-1}$) |
> | :--- | :---: |
> | $\\\\text{CaCO}_3\\\\text{(s)}$ | 92.9 |
> | $\\\\text{CaO(s)}$ | 39.8 |
> | $\\\\text{CO}_2\\\\text{(g)}$ | 213.7 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the entropy equation:**
> >    $$\\\\Delta S^\\\\theta = \\\\sum S^\\\\theta(\\\\text{products}) - \\\\sum S^\\\\theta(\\\\text{reactants})$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta = [S(\\\\text{CaO}) + S(\\\\text{CO}_2)] - S(\\\\text{CaCO}_3)$$
> >    $$\\\\Delta S^\\\\theta = [39.8 + 213.7] - 92.9 = +160.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The positive $\\\\Delta S^\\\\theta$ is expected because one mole of gas ($\\\\text{CO}_2$) is produced, significantly increasing disorder.
`,
        keyPoints: [
            'Entropy is a state function, like enthalpy, so the path of the reaction does not matter.',
            'Gases have much higher molar entropies than liquids or solids due to greater molecular freedom.'
        ]
    },
    {
        id: 'gibbs-free-energy-u4-l2',
        title: 'Gibbs Free Energy & Feasibility',
        type: 'text',
        content: `
> [!BOX]
> ### ⚡ Gibbs Free Energy ($G$)
> The **Gibbs Free Energy** ($G$) combines both enthalpy and entropy into a single criterion for predicting whether a reaction is thermodynamically feasible (spontaneous) under constant temperature and pressure.

> [!IMPORTANT]
> ### 🧮 Gibbs Free Energy Equation
> $$\\\\Delta G^\\\\theta = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> 
> Where:
> * **$\\\\Delta G^\\\\theta$** = Standard Gibbs free energy change ($\\\\text{kJ mol}^{-1}$)
> * **$\\\\Delta H^\\\\theta$** = Standard enthalpy change ($\\\\text{kJ mol}^{-1}$)
> * **$T$** = Temperature ($\\\\text{Kelvin}$)
> * **$\\\\Delta S^\\\\theta$** = Standard entropy change ($\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$ — note: **convert** from J!)
> 
> **Feasibility Criterion:**
> * **$\\\\Delta G < 0$:** Reaction is thermodynamically feasible (spontaneous).
> * **$\\\\Delta G = 0$:** System is at equilibrium.
> * **$\\\\Delta G > 0$:** Reaction is not feasible under these conditions.

> [!WARNING]
> ### ⚠️ Common Pitfall — Unit Conversion
> $\\\\Delta H^\\\\theta$ is usually given in **kJ mol⁻¹** while $\\\\Delta S^\\\\theta$ is in **J K⁻¹ mol⁻¹**. You MUST convert $\\\\Delta S^\\\\theta$ to **kJ K⁻¹ mol⁻¹** by dividing by 1000 before substituting into the Gibbs equation, otherwise the calculation will be wrong by a factor of 1000.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Gibbs Free Energy Calculation
> **Question:** A reaction has $\\\\Delta H^\\\\theta = -286\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = -163\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate $\\\\Delta G^\\\\theta$ at $298\\\\text{ K}$ and determine whether the reaction is feasible
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert $\\\\Delta S^\\\\theta$ to $\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$:**
> >    $$\\\\Delta S^\\\\theta = \\\\frac{-163}{1000} = -0.163\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 2. **Apply the Gibbs equation:**
> >    $$\\\\Delta G^\\\\theta = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> >    $$\\\\Delta G^\\\\theta = -286 - (298 \\\\times -0.163)$$
> >    $$\\\\Delta G^\\\\theta = -286 + 48.57 = -237\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Feasibility:** Since $\\\\Delta G^\\\\theta = -237\\\\text{ kJ mol}^{-1}$, which is **negative**, the reaction is thermodynamically feasible at $298\\\\text{ K}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Finding Temperature for Feasibility
> **Question:** A reaction has $\\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = +360\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate the minimum temperature for the reaction to become thermodynamically feasible
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set $\\\\Delta G = 0$ at the boundary of feasibility:**
> >    $$0 = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> >    $$T = \\\\frac{\\\\Delta H^\\\\theta}{\\\\Delta S^\\\\theta}$$
> > 
> > 2. **Substitute values (converting $\\\\Delta S^\\\\theta$ to $\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$):**
> >    $$\\\\Delta S^\\\\theta = \\\\frac{+360}{1000} = +0.360\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$$
> >    $$T = \\\\frac{+180}{+0.360} = 500\\\\text{ K}$$
> > 
> > 3. **Conclusion:** Above $500\\\\text{ K}$, $\\\\Delta G$ becomes negative and the reaction is feasible.
`,
        keyPoints: [
            'A negative ΔG guarantees thermodynamic feasibility, but does not mean the reaction is fast (kinetically controlled).',
            'At the temperature where ΔG = 0, the reaction is at equilibrium and both T·ΔS and ΔH are equal.'
        ]
    },
    {
        id: 'lattice-enthalpy-u4-l2',
        title: 'Lattice Enthalpy & Born-Haber Cycles',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔗 Lattice Enthalpy
> **Lattice Formation Enthalpy:** The standard enthalpy change when **one mole** of an ionic lattice is formed from its gaseous ions under standard conditions.
> $$\\\\text{Na}^+\\\\text{(g)} + \\\\text{Cl}^-\\\\text{(g)} \\\\rightarrow \\\\text{NaCl(s)} \\\\quad \\\\Delta H_{\\\\text{latt}}^\\\\theta$$
> * Lattice formation enthalpy is always **exothermic** (negative) as the ionic lattice is more stable.
> * **Lattice Dissociation Enthalpy** is equal in magnitude but **endothermic** (positive) — the reverse process.

> [!BOX]
> ### 📋 Definitions for Born-Haber Cycle Steps
> 1. **Enthalpy of Atomisation ($\\\\Delta H_{\\\\text{at}}^\\\\theta$):** Enthalpy change when **one mole of gaseous atoms** is formed from the element in its standard state.
> 2. **First Ionisation Energy ($IE_1$):** Energy to remove the first electron from one mole of gaseous atoms.
> 3. **Second Ionisation Energy ($IE_2$):** Energy to remove the second electron from one mole of gaseous +1 ions.
> 4. **Electron Affinity ($EA$):** Energy change when one mole of gaseous atoms gains one electron to form gaseous anions.
> 5. **Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):** Enthalpy change when one mole of compound is formed from elements in standard states.

> [!IMPORTANT]
> ### 🧮 Born-Haber Cycle (Hess's Law)
> By Hess's Law, the sum of all enthalpy changes around the Born-Haber cycle must equal zero:
> $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{metal}) + \\\\Delta H_{\\\\text{at}}(\\\\text{non-metal}) + IE_1 + EA + \\\\Delta H_{\\\\text{latt}}^\\\\theta$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Lattice Enthalpy for NaCl
> **Question:** Use the following data to calculate the lattice formation enthalpy of sodium chloride ($\\\\Delta H_{\\\\text{latt}}^\\\\theta$):
>
> | Enthalpy Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | $\\\\Delta H_f^\\\\theta\\\\text{(NaCl)}$ | -411 |
> | $\\\\Delta H_{\\\\text{at}}^\\\\theta\\\\text{(Na)}$ | +108 |
> | $\\\\Delta H_{\\\\text{at}}^\\\\theta\\\\text{(Cl)}$ | +122 |
> | $IE_1\\\\text{(Na)}$ | +496 |
> | $EA_1\\\\text{(Cl)}$ | -349 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the Born-Haber equation:**
> >    $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Na}) + \\\\Delta H_{\\\\text{at}}(\\\\text{Cl}) + IE_1(\\\\text{Na}) + EA_1(\\\\text{Cl}) + \\\\Delta H_{\\\\text{latt}}^\\\\theta$$
> > 
> > 2. **Rearrange to find $\\\\Delta H_{\\\\text{latt}}^\\\\theta$:**
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = \\\\Delta H_f^\\\\theta - [\\\\Delta H_{\\\\text{at}}(\\\\text{Na}) + \\\\Delta H_{\\\\text{at}}(\\\\text{Cl}) + IE_1(\\\\text{Na}) + EA_1(\\\\text{Cl})]$$
> > 
> > 3. **Substitute values:**
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = -411 - [+108 + 122 + 496 + (-349)]$$
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = -411 - [+377] = -788\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Lattice enthalpy becomes more exothermic (more negative) as ionic charges increase or ionic radii decrease.',
            'The Born-Haber cycle is a Hess\'s Law diagram \u2014 the total enthalpy change is the same regardless of route.'
        ],
        equationVisualizer: {
            reactants: [['Na⁺(g)', '#f97316'], ['Cl⁻(g)', '#22c55e']],
            products: [['NaCl(s)', '#6366f1']],
            description: "Formation of the ionic lattice of NaCl from gaseous ions releases lattice enthalpy"
        }
    },
    {
        id: 'enthalpy-solution-u4-l2',
        title: 'Enthalpy of Solution & Hydration',
        type: 'text',
        content: `
> [!NOTE]
> ### 💧 Enthalpy of Solution ($\\\\Delta H_{\\\\text{sol}}^\\\\theta$)
> The standard enthalpy of solution is the enthalpy change when **one mole** of solute dissolves in excess water to form an infinitely dilute solution:
> $$\\\\text{NaCl(s)} \\\\rightarrow \\\\text{Na}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{sol}}^\\\\theta$$
> * Can be exothermic or endothermic depending on the relative magnitudes of lattice enthalpy and hydration enthalpy.

> [!BOX]
> ### 🌊 Enthalpy of Hydration ($\\\\Delta H_{\\\\text{hyd}}^\\\\theta$)
> The enthalpy of hydration is the enthalpy change when **one mole of gaseous ions** dissolves in excess water:
> $$\\\\text{Na}^+\\\\text{(g)} \\\\xrightarrow{\\\\text{water}} \\\\text{Na}^+\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{hyd}}^\\\\theta$$
> * Always **exothermic** (negative) as ion-dipole interactions with water release energy.
> * More exothermic for smaller, more highly charged ions (stronger electrostatic attraction to water).

> [!IMPORTANT]
> ### 🧮 Enthalpy Cycle for Solution
> Using Hess's Law:
> $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = -\\\\Delta H_{\\\\text{latt(formation)}}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{cation}) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{anion})$$
> Or equivalently:
> $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = \\\\Delta H_{\\\\text{latt(dissociation)}}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{cation}) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{anion})$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Enthalpy of Solution
> **Question:** Calculate the enthalpy of solution for $\\\\text{NaCl}$ given the following data:
>
> | Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | Lattice dissociation enthalpy of NaCl | +788 |
> | $\\\\Delta H_{\\\\text{hyd}}^\\\\theta\\\\text{(Na}^+\\\\text{)}$ | -406 |
> | $\\\\Delta H_{\\\\text{hyd}}^\\\\theta\\\\text{(Cl}^-\\\\text{)}$ | -363 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the enthalpy cycle:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = \\\\Delta H_{\\\\text{latt(dissociation)}}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Na}^+) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Cl}^-)$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = (+788) + (-406) + (-363)$$
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = +788 - 769 = +19\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The slightly endothermic value indicates the lattice is slightly stronger than the combined hydration enthalpies. NaCl still dissolves because entropy increases significantly.
`,
        keyPoints: [
            'Enthalpy of hydration is always exothermic because water molecules form ion-dipole interactions with the dissolved ions.',
            'Whether a substance dissolves spontaneously depends on ΔG, which includes both enthalpy and entropy contributions.'
        ]
    }
];
