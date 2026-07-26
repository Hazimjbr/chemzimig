import { LessonPart } from '../../../registry';

export const lessonTitle = "Entropy and Energetics";
export const lessonNumber = 2;

export const theoryMarkdown = `
# Topic 12: Entropy and Energetics
This lesson covers entropy, Gibbs free energy, lattice enthalpy, Born-Haber cycles, enthalpy of solution, and Hess's Law applications.
`;

export const parts: LessonPart[] = [
    {
        id: 'entropy-spontaneous-u4-l2',
        title: 'Entropy & Chemical Reactions',
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
> ### 🧮 Entropy Change of a Reaction ($\\\\Delta S^\\\\theta\\\\text{(system)}$)
> The standard entropy change of the system is calculated from the standard molar entropies of products and reactants:
> $$\\\\Delta S^\\\\theta\\\\text{(system)} = \\\\sum S^\\\\theta\\\\text{(products)} - \\\\sum S^\\\\theta\\\\text{(reactants)}$$
> * **Positive $\\\\Delta S\\\\text{(system)}$:** Entropy increases (system becomes more disordered — favourable).
> * **Negative $\\\\Delta S\\\\text{(system)}$:** Entropy decreases (system becomes more ordered — unfavourable).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Entropy Change of System (CaCO₃ decomposition)
> **Question:** For the reaction $\\\\text{CaCO₃(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO₂(g)}$, use the data below to calculate the standard entropy change of the system ($\\\\Delta S^\\\\theta\\\\text{(system)}$).
> 
> | Substance | S° (J K⁻¹ mol⁻¹) |
> | :--- | :---: |
> | CaCO₃(s) | 92.9 |
> | CaO(s) | 39.8 |
> | CO₂(g) | 213.7 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the entropy equation:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = \\\\sum S^\\\\theta\\\\text{(products)} - \\\\sum S^\\\\theta\\\\text{(reactants)}$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = [S\\\\text{(CaO)} + S\\\\text{(CO₂)}] - S\\\\text{(CaCO₃)}$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = [39.8 + 213.7] - 92.9 = +160.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The positive $\\\\Delta S^\\\\theta\\\\text{(system)}$ is expected because one mole of gas ($\\\\text{CO₂}$) is produced from a solid reactant, significantly increasing disorder.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Entropy Change of System (Ammonia synthesis)
> **Question:** Calculate the standard entropy change of the system ($\\\\Delta S^\\\\theta\\\\text{(system)}$) for the reaction:
> $$\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightarrow 2\\\\text{NH₃(g)}$$
> Use the standard molar entropy values:
> * $S^\\\\theta\\\\text{[NH₃(g)]} = 192.3\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> * $S^\\\\theta\\\\text{[N₂(g)]} = 191.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> * $S^\\\\theta\\\\text{[H₂(g)]} = 130.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the equation for entropy change:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 2 \\\\times S^\\\\theta\\\\text{[NH₃(g)]} - \\\\left( S^\\\\theta\\\\text{[N₂(g)]} + 3 \\\\times S^\\\\theta\\\\text{[H₂(g)]} \\\\right)$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 2 \\\\times 192.3 - [191.6 + 3 \\\\times 130.6]$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 384.6 - [191.6 + 391.8]$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 384.6 - 583.4 = -198.8\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The negative $\\\\Delta S^\\\\theta\\\\text{(system)}$ value indicates that the system has become more ordered. This is expected because 4 moles of gaseous reactants combine to produce only 2 moles of gaseous product, leading to a decrease in molecular dispersal.

> [!BOX]
> ### 📊 Reactions Involving Changes of State
> Since standard entropy follows the order solid < liquid < gas, any reaction that generates gaseous products from solid or liquid reactants leads to a large positive entropy change of the system ($\\\\Delta S\\\\text{(system)} > 0$).
> 
> * **Example 1: Ammonium carbonate and ethanoic acid:**
>   $$\\\\text{2CH₃COOH(l)} + \\\\text{(NH₄)₂CO₃(s)} \\\\rightarrow \\\\text{2CH₃COONH₄(aq)} + \\\\text{H₂O(l)} + \\\\text{CO₂(g)}$$
>   * This reaction is endothermic (temperature falls during the reaction).
>   * Therefore, $\\\\Delta S\\\\text{(surroundings)}$ is negative.
>   * However, a gas ($\\\\text{CO₂}$) is produced from a liquid and a solid, which causes a massive increase in system entropy.
>   * The magnitude of $\\\\Delta S\\\\text{(system)}$ is greater than the negative $\\\\Delta S\\\\text{(surroundings)}$, making $\\\\Delta S\\\\text{(total)}$ positive and the reaction spontaneous at room temperature.
> 
> * **Example 2: Hydrated barium hydroxide and ammonium chloride:**
>   $$\\\\text{Ba(OH)₂·8H₂O(s)} + \\\\text{2NH₄Cl(s)} \\\\rightarrow \\\\text{BaCl₂(s)} + \\\\text{10H₂O(l)} + \\\\text{2NH₃(g)}$$
>   * This is a highly endothermic reaction that occurs spontaneously at room temperature.
>   * The driving force is the massive increase in system entropy ($\\\\Delta S\\\\text{(system)} > 0$) as two solid reactants turn into a solid, a liquid, and 2 moles of ammonia gas (13 moles of products in total from 3 moles of reactants).

> [!BOX]
> ### ⚖️ Reactions Involving Changes in Moles of Gas
> If a reaction does not involve a change of state but changes the number of gas molecules, the system entropy change is dominated by the gas molecules:
> * **More moles of gas on product side:** System entropy increases ($\\\\Delta S\\\\text{(system)} > 0$).
> * **Fewer moles of gas on product side:** System entropy decreases ($\\\\Delta S\\\\text{(system)} < 0$).
> * *Example: Combustion of magnesium:*
>   $$\\\\text{Mg(s)} + \\\\frac{1}{2}\\\\text{O₂(g)} \\\\rightarrow \\\\text{MgO(s)}$$
>   * 1.5 moles of reactants (solid and gas) form 1 mole of solid product.
>   * Since gas is consumed, $\\\\Delta S\\\\text{(system)}$ is negative.
>   * However, the reaction is highly exothermic, meaning $\\\\Delta S\\\\text{(surroundings)}$ is large and positive, outweighing the negative system entropy, so $\\\\Delta S\\\\text{(total)} > 0$ and the reaction is spontaneous.
`,
        keyPoints: [
            'Entropy is a state function, like enthalpy, so the path of the reaction does not matter.',
            'Gases have much higher molar entropies than liquids or solids due to greater molecular freedom.',
            'Changes in the number of gas molecules or states of matter are the primary factors determining system entropy changes.'
        ]
    },
    {
        id: 'entropy-surroundings-total-u4-l2',
        title: 'Total Entropy & Spontaneity',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌍 Entropy of the Surroundings ($\\\\Delta S_{\\\\text{surroundings}}$)
> The entropy of the surroundings depends on the heat transferred into or out of the surroundings from the reaction system:
> * In an **exothermic reaction**, heat energy is released to the surroundings. This increases the thermal motion of the surroundings molecules, leading to an **increase** in surroundings entropy.
> * In an **endothermic reaction**, heat energy is absorbed from the surroundings. This decreases the surroundings' thermal motion, leading to a **decrease** in surroundings entropy.
> 
> This is expressed mathematically as:
> $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{\\\\Delta H^\\\\theta}{T}$$
> * **$\\\\Delta H^\\\\theta$** is the enthalpy change of the system in $\\\\text{J mol}^{-1}$
> * **$T$** is the temperature in Kelvin

> [!IMPORTANT]
> ### 🧮 Total Entropy Change ($\\\\Delta S_{\\\\text{total}}$)
> The Second Law of Thermodynamics states that for any spontaneous (feasible) process, the total entropy change must be positive:
> $$\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta S^\\\\theta\\\\text{(system)} + \\\\Delta S^\\\\theta\\\\text{(surroundings)}$$
> $$\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta S^\\\\theta\\\\text{(system)} - \\\\frac{\\\\Delta H^\\\\theta}{T}$$
> * **$\\\\Delta S_{\\\\text{total}} > 0$:** The reaction is thermodynamically feasible (spontaneous).
> * **$\\\\Delta S_{\\\\text{total}} < 0$:** The reaction is not feasible under these conditions.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Surroundings Entropy Change (Water synthesis)
> **Question:** Calculate the surroundings entropy change ($\\\\Delta S^\\\\theta\\\\text{(surroundings)}$) at $298\\\\text{ K}$ when one mole of hydrogen gas is burned in oxygen to form water:
> $$\\\\text{H₂(g)} + \\\\frac{1}{2}\\\\text{O₂(g)} \\\\rightarrow \\\\text{H₂O(l)} \\\\quad \\\\Delta H^\\\\theta = -286\\\\text{ kJ mol}^{-1}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert enthalpy change to $\\\\text{J mol}^{-1}$:**
> >    $$\\\\Delta H^\\\\theta = -286 \\\\times 1000 = -286000\\\\text{ J mol}^{-1}$$
> > 
> > 2. **Apply the surroundings formula:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{\\\\Delta H^\\\\theta}{T}$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{-286000}{298} = +959.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1} \\\\approx +960\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The positive surroundings entropy change reflects that this is a highly exothermic reaction. Heat released to the surroundings increases the thermal chaos of the surrounding air molecules.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Total Entropy Change (Water synthesis)
> **Question:** Using the data from the previous example, and knowing that the system entropy change ($\\\\Delta S^\\\\theta\\\\text{(system)}$) for the synthesis of water is $-163.2\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$, calculate the total entropy change ($\\\\Delta S^\\\\theta\\\\text{(total)}$) at $298\\\\text{ K}$ and state whether the reaction is feasible.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the total entropy equation:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta S^\\\\theta\\\\text{(system)} + \\\\Delta S^\\\\theta\\\\text{(surroundings)}$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(total)} = -163.2 + 960 = +796.8\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Conclusion:** Since $\\\\Delta S^\\\\theta\\\\text{(total)}$ is positive ($+796.8 > 0$), the reaction is thermodynamically feasible. The large positive surroundings entropy change more than compensates for the negative system entropy change.

> [!BOX]
> ### 🛡️ Thermodynamic vs. Kinetic Stability
> If a reaction has a positive total entropy change ($\\\\Delta S_{\\\\text{total}} > 0$), it is **thermodynamically feasible**. However, it might not happen at all at room temperature:
> * **Thermodynamic Stability:** Relates to the feasibility based on entropy and energy change.
> * **Kinetic Stability:** Relates to the rate of reaction and activation energy.
> * *Example:* The combustion of methane:
>   $$\\\\text{CH₄(g)} + 2\\\\text{O₂(g)} \\\\rightarrow \\\\text{CO₂(g)} + 2\\\\text{H₂O(l)} \\\\quad \\\\Delta S^\\\\theta\\\\text{(total)} = +2.95\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$$
>   * This reaction is thermodynamically feasible and spontaneous.
>   * Methane and oxygen do not react when mixed at room temperature until ignited by a spark.
>   * Methane is thermodynamically unstable relative to its products, but it is **kinetically stable** because it has a very high activation energy barrier.

> [!BOX]
> ### 🌡️ The Role of Temperature on Feasibility
> The surroundings entropy change is directly dependent on temperature ($\\\\Delta S_{\\\\text{surroundings}} = -\\\\Delta H / T$):
> * At **higher temperatures**, the surroundings term $- \\\\Delta H / T$ becomes smaller in magnitude.
> * Therefore, the surroundings contribution to the total entropy change decreases at high temperatures.
> * This means that for exothermic reactions (where surroundings term is positive), increasing temperature actually makes the reaction less feasible.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Why Does Water Freeze?
> **Question:** Water freezes to ice according to the equation: $\\\\text{H₂O(l)} \\\\rightarrow \\\\text{H₂O(s)} \\\\quad \\\\Delta H = -6010\\\\text{ J mol}^{-1}$.
> The system entropy values are: $S^\\\\theta\\\\text{[H₂O(l)]} = 69.9\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$ and $S^\\\\theta\\\\text{[H₂O(s)]} = 47.9\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$.
> Show by calculation whether water will freeze spontaneously at $+5\\\\text{ °C}$ ($278\\\\text{ K}$) and at $-5\\\\text{ °C}$ ($268\\\\text{ K}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the system entropy change ($\\\\Delta S\\\\text{(system)}$):**
> >    $$\\\\Delta S\\\\text{(system)} = S\\\\text{(ice)} - S\\\\text{(water)}$$
> >    $$\\\\Delta S\\\\text{(system)} = 47.9 - 69.9 = -22.0\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 2. **Calculate feasibility at $+5\\\\text{ °C}$ ($278\\\\text{ K}$):**
> >    * Calculate surroundings entropy change:
> >      $$\\\\Delta S\\\\text{(surroundings)} = -\\\\frac{-6010}{278} = +21.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S\\\\text{(total)} = -22.0 + 21.6 = -0.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * *Conclusion:* Since $\\\\Delta S\\\\text{(total)}$ is negative, freezing is not spontaneous at $+5\\\\text{ °C}$
> > 
> > 3. **Calculate feasibility at $-5\\\\text{ °C}$ ($268\\\\text{ K}$):**
> >    * Calculate surroundings entropy change:
> >      $$\\\\Delta S\\\\text{(surroundings)} = -\\\\frac{-6010}{268} = +22.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S\\\\text{(total)} = -22.0 + 22.4 = +0.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * *Conclusion:* Since $\\\\Delta S\\\\text{(total)}$ is positive, freezing is spontaneous at $-5\\\\text{ °C}$
`,
        keyPoints: [
            'Always convert enthalpy change (ΔH) to J mol⁻¹ before calculating surroundings entropy change.',
            'For a reaction to be feasible, the total entropy change must be positive, even if the system entropy change is negative.',
            'A reaction may be thermodynamically feasible but fail to occur due to kinetic constraints (high activation energy).'
        ]
    },
    {
        id: 'gibbs-free-energy-u4-l2',
        title: 'Gibbs Free Energy & Equilibrium',
        type: 'text',
        content: `
> [!BOX]
> ### ⚡ Gibbs Free Energy ($G$)
> The **Gibbs Free Energy** ($G$) combines both enthalpy and entropy into a single criterion for predicting whether a reaction is thermodynamically feasible (spontaneous) under constant temperature and pressure.
> 
> It is derived directly from the total entropy equation by multiplying by $-T$:
> $$-T\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta\\\\text{(system)}$$
> We define:
> $$\\\\Delta G^\\\\theta = -T\\\\Delta S^\\\\theta\\\\text{(total)}$$

> [!IMPORTANT]
> ### 🧮 Gibbs Free Energy Equation
> $$\\\\Delta G^\\\\theta = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> 
> Where:
> * **$\\\\Delta G^\\\\theta$** = Standard Gibbs free energy change ($\\\\text{kJ mol}^{-1}$)
> * **$\\\\Delta H^\\\\theta$** = Standard enthalpy change ($\\\\text{kJ mol}^{-1}$)
> * **$T$** = Temperature ($\\\\text{Kelvin}$)
> * **$\\\\Delta S^\\\\theta$** = Standard entropy change of the system ($\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$ — note: **convert** from J!)
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
> **Question:** A reaction has $\\\\Delta H^\\\\theta = -286\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = -163\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate $\\\\Delta G^\\\\theta$ at $298\\\\text{ K}$ and determine whether the reaction is feasible.
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
> >    $$\\\\Delta G^\\\\theta = -286 + 48.57 = -237.4\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Feasibility:** Since $\\\\Delta G^\\\\theta$ is **negative**, the reaction is thermodynamically feasible at $298\\\\text{ K}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Finding Temperature for Feasibility
> **Question:** A reaction has $\\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = +360\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate the minimum temperature for the reaction to become thermodynamically feasible.
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

> [!NOTE]
> ### 🔗 The Thermodynamic Link to Equilibrium
> The standard Gibbs Free Energy change ($\\\\Delta G^\\\\theta$) represents the feasibility of a reaction starting with all reactants and products in their standard states. It is directly linked to the position of equilibrium and the equilibrium constant ($K$).
> 
> * **Thermodynamic Link:**
>   $$\\\\Delta G^\\\\theta = -RT \\\\ln K$$
>   * **$R$** is the gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$T$** is the temperature in Kelvin
>   * **$K$** is the thermodynamic equilibrium constant ($K_c$ or $K_p$)
>   * **$\\\\ln K$** is the natural logarithm of the equilibrium constant

> [!IMPORTANT]
> ### 🧮 Interpreting the Relationship
> 1. **Large Negative $\\\\Delta G^\\\\theta$ ($\\\\Delta G^\\\\theta < -30\\\\text{ kJ mol}^{-1}$):**
>    * $\\\\ln K$ must be positive and large.
>    * $K \\\\gg 1$, indicating that equilibrium lies heavily to the right (products are highly favoured).
>    * The reaction essentially goes to completion.
> 2. **Large Positive $\\\\Delta G^\\\\theta$ ($\\\\Delta G^\\\\theta > +30\\\\text{ kJ mol}^{-1}$):**
>    * $\\\\ln K$ must be negative and large.
>    * $K \\\\ll 1$, indicating that equilibrium lies heavily to the left (reactants are favoured).
>    * The reaction does not occur to any measurable extent.
> 3. **$\\\\Delta G^\\\\theta \\\\approx 0$:**
>    * $\\\\ln K \\\\approx 0$, meaning $K \\\\approx 1$
>    * Reactants and products are present in similar concentrations at equilibrium.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating K from Gibbs Free Energy
> **Question:** A reaction has a standard Gibbs Free Energy change ($\\\\Delta G^\\\\theta$) of $-5.80\\\\text{ kJ mol}^{-1}$ at $298\\\\text{ K}$. Calculate the value of the equilibrium constant $K$ at this temperature.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert $\\\\Delta G^\\\\theta$ to $\\\\text{J mol}^{-1}$:**
> >    $$\\\\Delta G^\\\\theta = -5.80 \\\\times 1000 = -5800\\\\text{ J mol}^{-1}$$
> > 
> > 2. **Apply the thermodynamic link equation:**
> >    $$\\\\Delta G^\\\\theta = -RT \\\\ln K$$
> >    $$-5800 = -(8.31 \\\\times 298) \\\\ln K$$
> >    $$-5800 = -2476.38 \\\\ln K$$
> > 
> > 3. **Solve for $\\\\ln K$:**
> >    $$\\\\ln K = \\\\frac{-5800}{-2476.38} = 2.342$$
> > 
> > 4. **Calculate $K$ using the exponential function ($e^x$):**
> >    $$K = e^{2.342} = 10.4$$
> > 
> > 5. **Conclusion:** Since $K = 10.4$ (which is greater than 1), the products are favoured at equilibrium.
`,
        keyPoints: [
            'A negative ΔG guarantees thermodynamic feasibility, but does not mean the reaction is fast (kinetically controlled).',
            'At the temperature where ΔG = 0, the reaction is at equilibrium and both T·ΔS and ΔH are equal.',
            'Ensure ΔG° is converted to J mol⁻¹ when using the R value of 8.31 J K⁻¹ mol⁻¹ in standard thermodynamic calculations.',
            'A reaction with a negative ΔG° will have an equilibrium constant K greater than 1.'
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
> 
> * **Example:** Standard lattice energy of $\\\\text{NaCl}$ is $-780\\\\text{ kJ mol}^{-1}$. For $\\\\text{MgCl₂}$, it is $-2526\\\\text{ kJ mol}^{-1}$ due to higher ionic charge on magnesium ($+2$) and more cation-anion interactions.

> [!BOX]
> ### 📋 Factors Affecting Lattice Enthalpy
> 1. **Ionic Charge:** Higher charges on the ions result in stronger electrostatic forces of attraction, releasing more energy when the lattice forms (more exothermic lattice energy).
> 2. **Ionic Radius (Distance between ion centres):** Smaller ions can pack closer together, which increases the electrostatic attraction and makes the lattice energy more exothermic.
> 
> | Compound | Inter-ionic Distance (nm) | Charges on Ions | Lattice Energy (kJ mol⁻¹) |
> | :--- | :---: | :---: | :---: |
> | LiF | 0.207 | +1, -1 | -1031 |
> | NaF | 0.235 | +1, -1 | -918 |
> | CaF₂ | 0.233 | +2, -1 | -2630 |
> | Li₂O | 0.214 | +1, -2 | -2814 |
> | MgO | 0.212 | +2, -2 | -3791 |
> | Al₂O₃ | 0.193 | +3, -2 | -15504 |

> [!BOX]
> ### 📋 Definitions for Born-Haber Cycle Steps
> 1. **Enthalpy of Atomisation ($\\\\Delta H_{\\\\text{at}}^\\\\theta$):** Enthalpy change when **one mole of gaseous atoms** is formed from the element in its standard state.
> 2. **First Ionisation Energy ($IE_1$):** Energy to remove the first electron from one mole of gaseous atoms.
> 3. **Second Ionisation Energy ($IE_2$):** Energy to remove the second electron from one mole of gaseous +1 ions.
> 4. **Electron Affinity ($EA$):** Energy change when one mole of gaseous atoms gains one electron to form gaseous anions.
>    * **Note:** $1\\\\text{st } EA$ is always **exothermic** (negative) because the electron is attracted to the nucleus.
>    * **Note:** $2\\\\text{nd } EA$ is always **endothermic** (positive) because energy is required to overcome the electrostatic repulsion between the negative anion and the incoming electron.
> 5. **Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):** Enthalpy change when one mole of compound is formed from elements in standard states.

> [!IMPORTANT]
> ### 🧮 Born-Haber Cycle (Hess's Law)
> By Hess's Law, the sum of all enthalpy changes around the Born-Haber cycle must equal zero:
> $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{metal}) + \\\\Delta H_{\\\\text{at}}(\\\\text{non-metal}) + IE_1 + EA + \\\\Delta H_{\\\\text{latt}}^\\\\theta$$

> [!BOX]
> ### 📊 Born-Haber Cycle Diagram for NaCl
> Below is the energy level diagram representing the Born-Haber cycle for sodium chloride. Endothermic steps go upwards, and exothermic steps go downwards:
> 
> ![Born-Haber Cycle for NaCl](/images/lessons/born_haber_nacl.svg)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Lattice Enthalpy for NaCl
> **Question:** Use the data below to calculate the lattice formation enthalpy of sodium chloride ($\\\\Delta H_{\\\\text{latt}}^\\\\theta$):
>
> | Enthalpy Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | ΔHf° (NaCl) | -411 |
> | ΔHat° (Na) | +108 |
> | ΔHat° (Cl) | +122 |
> | IE₁ (Na) | +496 |
> | EA₁ (Cl) | -349 |
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

> [!BOX]
> ### 🛡️ Theoretical vs. Experimental Lattice Energy
> Lattice energy can also be calculated theoretically using electrostatic theory, assuming the compound consists of purely spherical ions acting as point charges:
> * **Purely Ionic Model:** If the experimental lattice energy (Born-Haber cycle) and theoretical lattice energy agree closely, the bonding is almost **purely ionic** (e.g. NaCl, KI).
> * **Covalent Character:** If the experimental value is significantly **more exothermic** (more negative) than the theoretical value, it indicates the presence of **covalent character**:
>   * Covalent character strengthens the bonding, meaning more energy is released when the lattice forms.
>   * This occurs due to **polarisation** of the anion by the cation.
> * **Fajan\'s Rules for Polarisation:**
>   * **Cation:** High charge and small ionic radius (high charge density) increase polarizing power.
>   * **Anion:** High charge and large ionic radius make it more polarizable (its electron cloud is easily distorted).
>   * **Example:** AgI has significant covalent character because $\\\\text{Ag}^+$ is highly polarizing and $\\\\text{I}^-$ is large and easily polarized.

> [!BOX]
> ### ❓ The Thermodynamic Mystery of CaO
> It requires much less energy to form the $+1$ and $-1$ ions ($\\\\text{Ca}^+$ and $\\\\text{O}^-$) than to form the $+2$ and $-2$ ions ($\\\\text{Ca}^{2+}$ and $\\\\text{O}^{2-}$):
> * First Ionisation Energy of Ca: $+590\\\\text{ kJ mol}^{-1}$
> * Second Ionisation Energy of Ca: $+1735\\\\text{ kJ mol}^{-1}$ (almost triple!)
> * First Electron Affinity of O: $-141\\\\text{ kJ mol}^{-1}$ (exothermic)
> * Second Electron Affinity of O: $+798\\\\text{ kJ mol}^{-1}$ (highly endothermic!)
> 
> Therefore, why does calcium oxide exist as $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ rather than $\\\\text{Ca}^+\\\\text{(g)}\\\\text{O}^-\\\\text{(g)}$?

> [!BOX]
> ### 🧮 Comparing the Enthalpy Cycles
> Let's look at the overall standard enthalpy changes of formation calculated for both options:
> 
> 1. **For Calcium(I) Oxide ($\\\\text{Ca⁺O⁻(s)}$):**
>    * Gaseous ions: $\\\\text{Ca}^+\\\\text{(g)} + \\\\text{O}^-\\\\text{(g)}$
>    * Estimated lattice energy of formation: $-650\\\\text{ kJ mol}^{-1}$ (since charges are $+1/-1$)
>    * Standard Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):
>      $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Ca}) + IE_1(\\\\text{Ca}) + \\\\Delta H_{\\\\text{at}}(\\\\text{O}) + EA_1(\\\\text{O}) + \\\\Delta H_{\\\\text{latt}}(\\\\text{Ca}^+\\\\text{O}^-)$$
>      $$\\\\Delta H_f^\\\\theta = +178 + 590 + 249 - 141 - 650 = +226\\\\text{ kJ mol}^{-1}$$
>    * *Note:* Since $\\\\Delta H_f^\\\\theta$ is **endothermic**, the compound is thermodynamically unstable relative to its elements.
> 
> 2. **For Calcium(II) Oxide ($\\\\text{Ca²⁺O²⁻(s)}$):**
>    * Gaseous ions: $\\\\text{Ca}^{2+}\\\\text{(g)} + \\\\text{O}^{2-}\\\\text{(g)}$
>    * Born-Haber lattice energy of formation: $-3401\\\\text{ kJ mol}^{-1}$ (due to $+2/-2$ charges)
>    * Standard Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):
>      $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Ca}) + IE_1(\\\\text{Ca}) + IE_2(\\\\text{Ca}) + \\\\Delta H_{\\\\text{at}}(\\\\text{O}) + EA_1(\\\\text{O}) + EA_2(\\\\text{O}) + \\\\Delta H_{\\\\text{latt}}(\\\\text{Ca}^{2+}\\\\text{O}^{2-})$$
>      $$\\\\Delta H_f^\\\\theta = +178 + 590 + 1735 + 249 - 141 + 798 - 3401 = -635\\\\text{ kJ mol}^{-1}$$
>    * *Note:* This is a highly **exothermic process**, making $\\\\text{CaO}$ highly stable.

> [!IMPORTANT]
> ### 💡 The Conclusion
> The extra energy required to form the highly charged $\\\\text{Ca}^{2+}$ and $\\\\text{O}^{2-}$ ions is **more than compensated for** by the much larger (more exothermic) lattice energy of the $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ lattice ($-3401$ vs $-650\\\\text{ kJ mol}^{-1}$). This makes $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ energetically far more favourable than $\\\\text{Ca}^+\\\\text{O}^-$.
`,
        keyPoints: [
            'Lattice enthalpy becomes more exothermic (more negative) as ionic charges increase or ionic radii decrease.',
            'The Born-Haber cycle uses Hess\'s Law to determine lattice enthalpies which cannot be measured directly.',
            'Although forming doubly-charged ions requires much more energy, the resulting lattice is extremely stable, making oxides like CaO highly exothermic and thermodynamically stable.'
        ],
        equationVisualizer: {
            reactants: [['Na⁺(g)', '#f97316'], ['Cl⁻(g)', '#22c55e']],
            products: [['NaCl(s)', '#6366f1']],
            description: "Formation of the ionic lattice of NaCl from gaseous ions releases lattice enthalpy"
        }
    },
    {
        id: 'polarisation-covalent-character-u4-l2',
        title: 'Polarisation & Covalent Character',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Experimental vs. Theoretical Lattice Energies
> A comparison of the experimental lattice energy value (Born-Haber cycle) with the theoretical value (electrostatic theory) indicates the degree of covalent character in an ionic bond:
> * **Purely Ionic Model:** Theoretical calculations assume that ions are perfectly spherical point charges in contact, with no distortion of electron density.
> * **Covalent Bonding Evidence:** If the experimental lattice energy is significantly **more exothermic** (more negative) than the theoretical value, it indicates that the bonding has significant **covalent character**, which strengthens the bond beyond pure electrostatic attraction.
> 
> | Compound | Experimental Lattice Energy (kJ mol⁻¹) | Theoretical Lattice Energy (kJ mol⁻¹) | Percentage Difference |
> | :--- | :---: | :---: | :---: |
> | NaF | -918 | -912 | 0.66% |
> | NaCl | -780 | -770 | 1.30% |
> | NaBr | -742 | -735 | 0.95% |
> | AgF | -958 | -920 | 4.13% |
> | AgCl | -905 | -833 | 8.64% |
> | AgBr | -891 | -816 | 9.19% |

> [!BOX]
> ### 🌌 Polarisation of Anions (Fajan's Rules)
> Covalent character arises when the positive charge of the cation attracts the outer electrons of the anion, pulling them towards itself and distorting the anion's electron cloud.
> 
> ![Polarisation of Anions](/images/lessons/polarisation_anions.svg)

> 
> Polarisation is increased by:
> 1. **High charge and small size of the cation:** A small cation with a high charge (e.g. $\\\\text{Mg}^{2+}$ or $\\\\text{Al}^{3+}$) has a very **high charge density**, giving it high polarizing power.
>    $$\\\\text{Charge density} \\\\propto \\\\frac{\\\\text{charge}}{r^2}$$
> 2. **High charge and large size of the anion:** A large anion (e.g. $\\\\text{I}^-$) has its outer electrons far from the nucleus, shielded by inner shells. This makes the electron cloud highly **polarisable** (easily distorted).

> [!BOX]
> ### 🔬 Case Study: The Covalency of Silver Compounds (d¹⁰ configuration)
> Even though $\\\\text{Ag}^+$ has a lower charge density than $\\\\text{Na}^+$ (due to its larger ionic radius: $0.126\\\\text{ nm}$ for $\\\\text{Ag}^+$ vs $0.095\\\\text{ nm}$ for $\\\\text{Na}^+$), silver halides exhibit **far greater covalent character** than sodium halides:
> * Na⁺ has a **$1s^2 2s^2 2p^6$** noble gas electronic configuration.
> * Ag⁺ has a **$[\\\\text{Kr}] 4d^{10}$** electronic configuration.
> * **Shielding Effect:** The outer $d^{10}$ shell of silver is much less effective at shielding the positive nuclear charge than the $p^6$ shell of sodium.
> * Consequently, the silver nucleus exerts a much stronger electrostatic pull on the anion's electron cloud, leading to significantly greater polarisation and covalent character.
> * For the same reason, **zinc compounds** ($\\\\text{Zn}^{2+}$ which has a $d^{10}$ shell) also exhibit high covalent character.
`,
        keyPoints: [
            'Cation polarizing power increases with high charge and small ionic radius (high charge density).',
            'Anion polarisability increases with high charge and large ionic radius.',
            'Cations with d¹⁰ outer configurations (like Ag⁺ and Zn²⁺) have poorer shielding, resulting in unexpectedly high polarizing power.'
        ]
    },
    {
        id: 'enthalpy-solution-u4-l2',
        title: 'Enthalpy of Solution & Dissolving Process',
        type: 'text',
        content: `
> [!NOTE]
> ### 💧 Enthalpy of Solution ($\\\\Delta H_{\\\\text{sol}}^\\\\theta$)
> The standard enthalpy of solution is the enthalpy change when **one mole** of solute dissolves in excess water to form an infinitely dilute solution:
> $$\\\\text{NaCl(s)} \\\\rightarrow \\\\text{Na}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{sol}}^\\\\theta$$
> * Can be exothermic or endothermic depending on the relative magnitudes of lattice enthalpy and hydration enthalpy.
> * **Infinite Dilution:** It is important to specify infinite dilution because as solution becomes more diluted, the ions move further apart (endothermic) and also become more hydrated (exothermic). Infinite dilution is the point where further dilution has no measurable effect on enthalpy.

> [!BOX]
> ### 🌊 Enthalpy of Hydration ($\\\\Delta H_{\\\\text{hyd}}^\\\\theta$)
> The enthalpy of hydration is the enthalpy change when **one mole of gaseous ions** dissolves in excess water to form an infinitely dilute solution:
> $$\\\\text{Na}^+\\\\text{(g)} \\\\xrightarrow{\\\\text{water}} \\\\text{Na}^+\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{hyd}}^\\\\theta$$
> * Always **exothermic** (negative) as ion-dipole interactions with water release energy.
> * **Attraction:** Oxygen atoms ($\\\\delta^-$) in water are attracted to cations, and hydrogen atoms ($\\\\delta^+$) are attracted to anions (or form hydrogen bonds with them).
> * **Factors Affecting Hydration Enthalpy:**
>   1. **Ionic Charge:** Hydration enthalpy is much more negative for doubly charged ions (e.g. $\\\\text{Mg}^{2+}$ is $-1920\\\\text{ kJ mol}^{-1}$) than singly charged ions (e.g. $\\\\text{Na}^+$ is $-406\\\\text{ kJ mol}^{-1}$) due to stronger electrostatic attraction to water.
>   2. **Ionic Radius:** Decreases down a group (becomes less negative) because larger ions have a lower charge density and weaker attraction to water.
> 
> | Ion | Ionic Radius (nm) | Hydration Enthalpy (kJ mol⁻¹) |
> | :--- | :---: | :---: |
> | Na⁺ | 0.102 | -406 |
> | K⁺ | 0.138 | -322 |
> | Rb⁺ | 0.149 | -301 |
> | Mg²⁺ | 0.072 | -1920 |
> | Ca²⁺ | 0.100 | -1650 |
> | Sr²⁺ | 0.113 | -1480 |
> | Cl⁻ | 0.180 | -363 |
> | Br⁻ | 0.195 | -335 |
> | I⁻ | 0.215 | -293 |

> [!IMPORTANT]
> ### 🧮 Enthalpy Cycle for Solution
> Using Hess's Law, the relationship between lattice enthalpy, hydration enthalpies, and enthalpy of solution is best shown by an energy level cycle:
> $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = -\\\\Delta H_{\\\\text{latt}}\\\\text{(formation)}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{cation}) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{anion})$$
> 
> ![Dissolution Enthalpy Cycle of NaCl](/images/lessons/dissolution_cycle_nacl.svg)


> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Enthalpy of Solution for NaCl
> **Question:** Calculate the enthalpy of solution for $\\\\text{NaCl}$ given the following data:
>
> | Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | Lattice dissociation enthalpy of NaCl | +788 |
> | ΔHhyd° (Na⁺) | -406 |
> | ΔHhyd° (Cl⁻) | -363 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the enthalpy cycle:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = \\\\Delta H_{\\\\text{latt}}\\\\text{(dissociation)}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Na}^+) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Cl}^-)$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = (+788) + (-406) + (-363)$$
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = +788 - 769 = +19\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The slightly endothermic value indicates the lattice is slightly stronger than the combined hydration enthalpies. NaCl still dissolves because entropy increases significantly.

> [!BOX]
> ### 🧼 Why Do Some Solids Dissolve? (Entropy & Enthalpy balance)
> When an ionic solid dissolves in water, the total entropy change is:
> $$\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} - \\\\frac{\\\\Delta H_{\\\\text{sol}}}{T}$$
> * **Entropy of System ($\\\\Delta S_{\\\\text{system}}$):** Usually positive because the highly ordered lattice structure is broken down, although the water molecules become slightly more ordered around the hydrated ions (reducing water entropy).
> * **Example: Dissolving Ammonium Nitrate ($\\\\text{NH₄NO₃}$):**
>   $$\\\\text{NH₄NO₃(s)} \\\\rightarrow \\\\text{NH₄⁺(aq)} + \\\\text{NO₃⁻(aq)} \\\\quad \\\\Delta H_{\\\\text{sol}} = +25.8\\\\text{ kJ mol}^{-1}$$
>   * $\\\\Delta S_{\\\\text{system}} = +108.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * $\\\\Delta S_{\\\\text{surroundings}} = -\\\\frac{+25800}{298} = -86.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * $\\\\Delta S_{\\\\text{total}} = +108.7 - 86.6 = +22.1\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * Since $\\\\Delta S_{\\\\text{total}}$ is positive, ammonium nitrate dissolves spontaneously at $298\\\\text{ K}$ despite being endothermic.

> [!BOX]
> ### 📋 Table A: Thermodynamic data for dissolving ionic solids at 298 K
> | Ionic Solid | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | ΔSsys (J K⁻¹ mol⁻¹) | ΔStotal (J K⁻¹ mol⁻¹) | Solubility |
> | :--- | :---: | :---: | :---: | :---: | :---: |
> | NaCl | +4 | -13 | +43 | +30 | soluble |
> | NH₄Cl | +15 | -50 | +167 | +117 | soluble |
> | AgCl | +66 | -221 | +33 | -188 | insoluble |
> | MgSO₄ | -91 | +305 | -213 | +92 | soluble |
> | CuSO₄ | -73 | +245 | -192 | +53 | soluble |
> | CaSO₄ | -18 | +60 | -145 | -85 | insoluble |
`,
        keyPoints: [
            'Enthalpy of hydration is always exothermic because water molecules form ion-dipole interactions with the dissolved ions.',
            'Solubilities of ionic solids are determined by the balance of enthalpy of solution and system entropy changes.'
        ]
    },
    {
        id: 'group2-solubility-trends-u4-l2',
        title: 'Group 2 Solubility Trends',
        type: 'text',
        content: `
> [!NOTE]
> ### 📉 Solubility Trends in Group 2 Compounds
> In Group 2, the solubility of hydroxides and sulfates follows opposite trends down the group:
> * **Metal Hydroxides:** Solubility **increases** down the group.
> * **Metal Sulfates:** Solubility **decreases** down the group.
> 
> We can explain these trends quantitatively using the thermodynamic changes involved in dissolving these compounds.

> [!BOX]
> ### 🧪 Solubility of Group 2 Metal Hydroxides
> | Hydroxide | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | Hydrated Cation | Cation Entropy (J K⁻¹ mol⁻¹) |
> | :--- | :---: | :---: | :---: | :---: |
> | Mg(OH)₂ | +3 | -10 | Mg²⁺(aq) | -138 |
> | Ca(OH)₂ | -16 | +54 | Ca²⁺(aq) | -53 |
> | Sr(OH)₂ | -46 | +154 | Sr²⁺(aq) | -33 |
> | Ba(OH)₂ | -52 | +174 | Ba²⁺(aq) | +10 |
> 
> * **Explanation of the Trend:**
>   1. As you go down Group 2, cation size increases, so both lattice enthalpy and hydration enthalpy decrease.
>   2. Because the hydroxide ion ($\\\\text{OH}^-$) is small, the lattice enthalpy decreases faster than the cation hydration enthalpy.
>   3. Consequently, the enthalpy of solution ($\\\\Delta H_{\\\\text{sol}}^\\\\theta$) becomes **more exothermic** (more negative) down the group, which increasingly favours dissolving.
>   4. In addition, larger cations have a weaker ordering effect on surrounding water molecules. Therefore, the standard entropy of the hydrated cation increases (becomes less negative/more positive) down the group, which also increasingly favours dissolving.
>   5. Both factors cause the solubility of Group 2 hydroxides to increase down the group.

> [!BOX]
> ### 🧪 Solubility of Group 2 Metal Sulfates
> | Sulfate | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | Hydrated Cation | Cation Entropy (J K⁻¹ mol⁻¹) |
> | :--- | :---: | :---: | :---: | :---: |
> | MgSO₄ | -91 | +305 | Mg²⁺(aq) | -138 |
> | CaSO₄ | -18 | +60 | Ca²⁺(aq) | -53 |
> | SrSO₄ | -9 | +30 | Sr²⁺(aq) | -33 |
> | BaSO₄ | +19 | -63 | Ba²⁺(aq) | +10 |
> 
> * **Explanation of the Trend:**
>   1. The sulfate ion ($\\\\text{SO₄}^{2-}$) is very large.
>   2. As cation size increases down the group, the lattice enthalpy decreases very little because the large sulfate anion dominates the lattice structure.
>   3. However, the hydration enthalpy of the cation decreases significantly because the charge density of the cation drops.
>   4. Consequently, the enthalpy of solution ($\\\\Delta H_{\\\\text{sol}}^\\\\theta$) becomes **less exothermic** (more endothermic) down the group, which opposes dissolving.
>   5. Although the entropy of the hydrated cation becomes less negative down the group, this positive effect is much smaller than the unfavourable change in enthalpy of solution.
>   6. Therefore, the total entropy change ($\\\\Delta S^\\\\theta\\\\text{(total)}$) becomes less positive/more negative, causing the solubility of sulfates to decrease down the group.
`,
        keyPoints: [
            'For small anions like OH⁻, lattice enthalpy decreases faster than hydration enthalpy down the group, increasing solubility.',
            'For large anions like SO₄²⁻, lattice enthalpy changes very little while hydration enthalpy drops significantly down the group, decreasing solubility.'
        ]
    }
];
