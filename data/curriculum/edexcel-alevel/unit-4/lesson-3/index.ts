import { LessonPart } from '../../../registry';

export const lessonTitle = "Topic 13: Chemical Equilibria";
export const lessonNumber = 3;

export const theoryMarkdown = `
# Topic 13: Chemical Equilibria
This lesson covers the quantitative aspects of chemical equilibria, including the deduction and calculation of the equilibrium constants $K_c$ and $K_p$ for both homogeneous and heterogeneous systems.
`;

export const parts: LessonPart[] = [
    {
        id: 'equilibrium-constant-kc-u4-l3',
        title: 'Equilibrium Constant Kc',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Homogeneous Reactions
> A **homogeneous reaction** is one in which all reactants and products are in the same physical phase. For example, all species are gases or all are dissolved in an aqueous solution:
> 
> * **Gaseous equilibrium:** $\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)}$
> * **Aqueous equilibrium:** $\\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$

> [!IMPORTANT]
> ### 🧮 The Concentration Equilibrium Constant ($K_c$)
> For a general homogeneous reversible reaction:
> $$w\\\\text{A} + x\\\\text{B} \\\\rightleftharpoons y\\\\text{C} + z\\\\text{D}$$
> 
> The equilibrium constant $K_c$ is expressed as:
> $$K_c = \\\\frac{[\\\\text{C}]^y [\\\\text{D}]^z}{[\\\\text{A}]^w [\\\\text{B}]^x}$$
> 
> Where:
> * Square brackets $[ \\\\ ]$ represent the molar concentration of each species **at equilibrium** in $\\\\text{mol dm}^{-3}$
> * The subscript 'c' denotes that the constant is calculated using concentrations.
> * The value of $K_c$ is constant at a given temperature, and is unaffected by changes in concentration, pressure, or the addition of a catalyst.

> [!BOX]
> ### 📋 Determining Units of $K_c$
> The units of $K_c$ depend on the stoichiometry of the reaction. We calculate the units by substituting $\\\\text{mol dm}^{-3}$ into the $K_c$ expression:
> * **Example 1:** For $\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$
>   $$K_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H}_2][\\\\text{I}_2]} \\\\implies \\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{(\\\\text{mol dm}^{-3})(\\\\text{mol dm}^{-3})} = \\\\text{no units}$$
> * **Example 2:** For $\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)}$
>   $$K_c = \\\\frac{[\\\\text{NH}_3]^2}{[\\\\text{N}_2][\\\\text{H}_2]^3} \\\\implies \\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{(\\\\text{mol dm}^{-3})(\\\\text{mol dm}^{-3})^3} = \\\\text{dm}^6\\\\text{ mol}^{-2}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Homogeneous Liquid System
> **Question:** $2.00\\\\text{ mol}$ of ethanoic acid and $2.00\\\\text{ mol}$ of ethanol are mixed and allowed to reach equilibrium with ethyl ethanoate and water at $298\\\\text{ K}$. At equilibrium, the amount of ethanoic acid remaining is found to be $0.67\\\\text{ mol}$. Calculate $K_c$ for the reaction at $298\\\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\\\text{CH}_3\\\\text{COOH(l)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O(l)}$$
> > 
> > 2. **Set up a mole table (ICE method) to determine equilibrium moles:**
> >    * **Initial moles:**
> >      * $\\\\text{CH}_3\\\\text{COOH} = 2.00\\\\text{ mol}$
> >      * $\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH} = 2.00\\\\text{ mol}$
> >      * $\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3 = 0\\\\text{ mol}$
> >      * $\\\\text{H}_2\\\\text{O} = 0\\\\text{ mol}$
> >    * **Change in moles:**
> >      * Ethanoic acid reacts: $-1.33\\\\text{ mol}$ (since $2.00 - 0.67 = 1.33$)
> >      * Ethanol reacts: $-1.33\\\\text{ mol}$ (due to $1:1$ ratio)
> >      * Products form: $+1.33\\\\text{ mol}$ each
> >    * **Equilibrium moles:**
> >      * $\\\\text{CH}_3\\\\text{COOH} = 0.67\\\\text{ mol}$
> >      * $\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH} = 0.67\\\\text{ mol}$
> >      * $\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3 = 1.33\\\\text{ mol}$
> >      * $\\\\text{H}_2\\\\text{O} = 1.33\\\\text{ mol}$
> > 
> > 3. **Convert moles to concentrations using total volume $V$ (in $\\\\text{dm}^3$):**
> >    * $[\\\\text{CH}_3\\\\text{COOH}] = \\\\frac{0.67}{V}$
> >    * $[\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}] = \\\\frac{0.67}{V}$
> >    * $[\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3] = \\\\frac{1.33}{V}$
> >    * $[\\\\text{H}_2\\\\text{O}] = \\\\frac{1.33}{V}$
> > 
> > 4. **Write the $K_c$ expression and substitute the concentrations:**
> >    $$K_c = \\\\frac{[\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3][\\\\text{H}_2\\\\text{O}]}{[\\\\text{CH}_3\\\\text{COOH}][\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}]}$$
> >    $$K_c = \\\\frac{(\\\\frac{1.33}{V}) (\\\\frac{1.33}{V})}{(\\\\frac{0.67}{V}) (\\\\frac{0.67}{V})} = \\\\frac{1.33 \\\\times 1.33}{0.67 \\\\times 0.67} = 3.94$$
> > 
> > 5. **Determine units:**
> >    * The volume terms $V$ cancel out completely.
> >    * Therefore, $K_c = 3.94$ (no units)

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Gaseous Homogeneous System
> **Question:** $0.100\\\\text{ mol}$ of $\\\\text{N}_2\\\\text{O}_4$ is placed into a closed $0.100\\\\text{ dm}^3$ flask and allowed to reach equilibrium with $\\\\text{NO}_2$ at $398\\\\text{ K}$. At equilibrium, there is $0.071\\\\text{ mol}$ of $\\\\text{N}_2\\\\text{O}_4$ present. Calculate $K_c$ for this reaction at $398\\\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the balanced chemical equation:**
> >    $$\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)}$$
> > 
> > 2. **Calculate equilibrium moles using the stoichiometric ratio:**
> >    * **Initial moles:** $\\\\text{N}_2\\\\text{O}_4 = 0.100\\\\text{ mol}$, $\\\\text{NO}_2 = 0\\\\text{ mol}$
> >    * **Change in moles:** $\\\\text{N}_2\\\\text{O}_4$ reacted = $-0.029\\\\text{ mol}$ ($0.100 - 0.071 = 0.029$)
> >    * **NO2 formed:** $+2 \\\\times 0.029 = +0.058\\\\text{ mol}$
> >    * **Equilibrium moles:** $\\\\text{N}_2\\\\text{O}_4 = 0.071\\\\text{ mol}$, $\\\\text{NO}_2 = 0.058\\\\text{ mol}$
> > 
> > 3. **Convert moles to concentrations using volume $V = 0.100\\\\text{ dm}^3$:**
> >    * $[\\\\text{N}_2\\\\text{O}_4] = \\\\frac{0.071\\\\text{ mol}}{0.100\\\\text{ dm}^3} = 0.71\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{NO}_2] = \\\\frac{0.058\\\\text{ mol}}{0.100\\\\text{ dm}^3} = 0.58\\\\text{ mol dm}^{-3}$
> > 
> > 4. **Calculate $K_c$ value and units:**
> >    $$K_c = \\\\frac{[\\\\text{NO}_2]^2}{[\\\\text{N}_2\\\\text{O}_4]} = \\\\frac{(0.58)^2}{0.71} = 0.474$$
> >    $$\\\\text{Units} = \\\\frac{(\\\\text{mol dm}^{-3})^2}{\\\\text{mol dm}^{-3}} = \\\\text{mol dm}^{-3}$$
> >    * Final answer: $K_c = 0.474\\\\text{ mol dm}^{-3}$

<br>

> [!NOTE]
> ### 🧪 Heterogeneous Reactions & Omissions
> A **heterogeneous reaction** is one in which reactants and products are in different phases.
> 
> **Important Rule:** The concentration of a pure solid or a pure liquid solvent at a given temperature is determined solely by its density, which remains constant. Because their concentrations do not change, they are **omitted** from the $K_c$ expression (their constant values are absorbed into the value of $K_c$):
> 
> * **Example 1:** Decomposition of Calcium Carbonate
>   $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightleftharpoons \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)}$$
>   * Since $\\\\text{CaCO}_3$ and $\\\\text{CaO}$ are solids, their concentrations are omitted:
>     $$K_c = [\\\\text{CO}_2\\\\text{(g)}]$$
> * **Example 2:** Iron reacting with steam
>   $$3\\\\text{Fe(s)} + 4\\\\text{H}_2\\\\text{O(g)} \\\\rightleftharpoons \\\\text{Fe}_3\\\\text{O}_4\\\\text{(s)} + 4\\\\text{H}_2\\\\text{(g)}$$
>   * Solids $\\\\text{Fe}$ and $\\\\text{Fe}_3\\\\text{O}_4$ are omitted:
>     $$K_c = \\\\frac{[\\\\text{H}_2\\\\text{(g)}]^4}{[\\\\text{H}_2\\\\text{O(g)}]^4}$$
> * **Example 3:** Self-ionization of water
>   $$\\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)}$$
>   * Pure liquid water is omitted:
>     $$K_c = [\\\\text{H}^+\\\\text{(aq)}][\\\\text{OH}^-\\\\text{(aq)}]$$
`,
        keyPoints: [
            'Only temperature changes the numerical value of Kc.',
            'Pure solids and pure liquid solvents are omitted from the Kc expression.',
            'ICE tables should always list initial moles, change in moles, and equilibrium moles before converting to concentration.'
        ],
        equationVisualizer: {
            reactants: [['N2O4', '#3b82f6']],
            products: [['NO2', '#ef4444']],
            description: "Thermal dissociation of dinitrogen tetroxide into nitrogen dioxide."
        }
    },
    {
        id: 'equilibrium-constant-kp-u4-l3',
        title: 'Equilibrium Constant Kp',
        type: 'text',
        content: `
> [!NOTE]
> ### 💨 Partial Pressures in Gaseous Systems
> For reversible reactions involving gases, we can express the amounts of reactants and products in terms of their **partial pressures** rather than concentrations:
> 
> * **Partial Pressure ($p_i$):** The pressure that an individual gas in a mixture would exert if it alone occupied the entire volume of the container.
> * **Mole Fraction ($\\\\chi_i$):** The ratio of the number of moles of a specific gas to the total number of moles of all gases present in the mixture:
>   $$\\\\chi_A = \\\\frac{\\\\text{moles of A}}{\\\\text{total moles of gas}}$$
> * **Calculating Partial Pressure:** Multiplying the mole fraction of a gas by the total pressure ($P_{\\\\text{total}}$) of the mixture:
>   $$p_A = \\\\chi_A \\\\times P_{\\\\text{total}}$$
> * **Total Pressure ($P$):** The sum of the individual partial pressures:
>   $$P_{\\\\text{total}} = p_A + p_B + p_C + \\\\dots$$

> [!IMPORTANT]
> ### 🧮 The Pressure Equilibrium Constant ($K_p$)
> For a general gaseous reaction:
> $$w\\\\text{A(g)} + x\\\\text{B(g)} \\\\rightleftharpoons y\\\\text{C(g)} + z\\\\text{D(g)}$$
> 
> The equilibrium constant $K_p$ is defined as:
> $$K_p = \\\\frac{(p_{\\\\text{C}})^y (p_{\\\\text{D}})^z}{(p_{\\\\text{A}})^w (p_{\\\\text{B}})^x}$$
> 
> Where:
> * $p_i$ represents the equilibrium partial pressure of each gas (usually in $\\\\text{atm}$ or $\\\\text{kPa}$)
> * Like $K_c$, the value of $K_p$ is constant at a constant temperature, and only changes when temperature changes.

> [!WARNING]
> ### 🛑 Critical Exam Hint: Notation for $K_p$
> You **MUST** use round brackets and the symbol $p$ for partial pressures in $K_p$ expressions (e.g., $(p_{\\\\text{CO}_2})$).
> 
> **Do NOT use square brackets** (e.g., $[\\\\text{CO}_2]$), as square brackets are reserved strictly for concentrations in $\\\\text{mol dm}^{-3}$. Using them in a $K_p$ expression will result in a loss of marks in exams.

> [!EXAMPLE]
> #### 📝 Worked Example: Calculating $K_p$ from Initial Moles
> **Question:** $1.00\\\\text{ mol}$ of $\\\\text{PCl₅}$ vapour is heated to $500\\\\text{ K}$ in a sealed vessel. The equilibrium mixture, at a total pressure of $6.00\\\\text{ atm}$, contains $0.60\\\\text{ mol}$ of chlorine gas. Calculate $K_p$ for the reaction at this temperature:
> $$\\\\text{PCl₅(g)} \\\\rightleftharpoons \\\\text{PCl₃(g)} + \\\\text{Cl₂(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set up an ICE mole table to find equilibrium moles:**
> >    * **Initial moles:**
> >      * $\\\\text{PCl₅} = 1.00\\\\text{ mol}$
> >      * $\\\\text{PCl₃} = 0\\\\text{ mol}$
> >      * $\\\\text{Cl₂} = 0\\\\text{ mol}$
> >      * **Total initial moles** = $1.00\\\\text{ mol}$
> >    * **Change in moles:**
> >      * $\\\\text{Cl₂}$ formed: $+0.60\\\\text{ mol}$
> >      * $\\\\text{PCl₃}$ formed: $+0.60\\\\text{ mol}$ ($1:1$ ratio)
> >      * $\\\\text{PCl₅}$ reacted: $-0.60\\\\text{ mol}$ ($1:1$ ratio)
> >    * **Equilibrium moles:**
> >      * $\\\\text{PCl₅} = 1.00 - 0.60 = 0.40\\\\text{ mol}$
> >      * $\\\\text{PCl₃} = 0.60\\\\text{ mol}$
> >      * $\\\\text{Cl₂} = 0.60\\\\text{ mol}$
> >      * **Total equilibrium moles** = $0.40 + 0.60 + 0.60 = 1.60\\\\text{ mol}$
> > 
> > 2. **Calculate the equilibrium mole fractions ($\\\\chi$):**
> >    * $\\\\chi(\\\\text{PCl₅}) = \\\\frac{0.40}{1.60} = 0.25$
> >    * $\\\\chi(\\\\text{PCl₃}) = \\\\frac{0.60}{1.60} = 0.375$
> >    * $\\\\chi(\\\\text{Cl₂}) = \\\\frac{0.60}{1.60} = 0.375$
> > 
> > 3. **Calculate partial pressures ($p = \\\\chi \\\\times P_{\\\\text{total}}$ where $P_{\\\\text{total}} = 6.00\\\\text{ atm}$):**
> >    * $p(\\\\text{PCl₅}) = 0.25 \\\\times 6.00 = 1.50\\\\text{ atm}$
> >    * $p(\\\\text{PCl₃}) = 0.375 \\\\times 6.00 = 2.25\\\\text{ atm}$
> >    * $p(\\\\text{Cl₂}) = 0.375 \\\\times 6.00 = 2.25\\\\text{ atm}$
> > 
> > 4. **Write the $K_p$ expression and substitute the values:**
> >    $$K_p = \\\\frac{p(\\\\text{PCl₃}) \\\\times p(\\\\text{Cl₂})}{p(\\\\text{PCl₅})}$$
> >    $$K_p = \\\\frac{2.25 \\\\times 2.25}{1.50} = 3.38$$
> > 
> > 5. **Determine units:**
> >    * $\\\\text{Units} = \\\\frac{\\\\text{atm} \\\\times \\\\text{atm}}{\\\\text{atm}} = \\\\text{atm}$
> >    * Final answer: $K_p = 3.38\\\\text{ atm}$

<br>

> [!BOX]
> ### 📋 Heterogeneous Gas Equilibria & Omissions
> For heterogeneous equilibria involving gases and other phases (solids or liquids), the partial pressures of any non-gaseous species are **omitted** from the $K_p$ expression:
> 
> * **Example 1: Solids and Gases**
>   $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightleftharpoons \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)}$$
>   * Since Calcium Carbonate and Calcium Oxide are solids, they have no partial pressure. The $K_p$ expression is:
>     $$K_p = p_{\\\\text{CO}_2\\\\text{(g)}}$$
>   * *Physical consequence:* At a given temperature, the equilibrium pressure of $\\\\text{CO}_2$ gas is a constant value, regardless of how much solid carbonate or oxide is present. For instance, at $1073\\\\text{ K}$, $K_p = 0.25\\\\text{ atm}$, meaning the pressure of $\\\\text{CO}_2$ will always reach $0.25\\\\text{ atm}$ at equilibrium.
> 
> * **Example 2: Liquids and Gases (Vapour Pressure)**
>   $$\\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{H}_2\\\\text{O(g)}$$
>   * Pure liquid water is omitted:
>     $$K_p = p_{\\\\text{H}_2\\\\text{O(g)}}$$
>   * Here, $K_p$ represents the **saturated vapour pressure** of water. At $298\\\\text{ K}$ ($25\\\\text{ }^\\\\circ\\\\text{C}$), $K_p = 0.03\\\\text{ atm}$, and at $373\\\\text{ K}$ ($100\\\\text{ }^\\\\circ\\\\text{C}$), $K_p = 1.00\\\\text{ atm}$ (boiling point).
`,
        keyPoints: [
            'Only gas-phase species are included in Kp expressions; solids and liquids are omitted.',
            'Always use round brackets and (p) symbols for Kp expressions, never square brackets.',
            'Kp is temperature-dependent only; changing pressure shifts the equilibrium position but does not change the Kp constant.'
        ]
    },
    {
        id: 'le-chatelier-kc-u4-l3',
        title: "Temperature & Equilibrium Constants",
        type: 'text',
        content: `
> [!NOTE]
> ### 🌡️ The Unique Effect of Temperature
> Unlike concentration, pressure, or catalysts—which do not change the values of $K_c$ and $K_p$—**temperature directly alters the value of the equilibrium constant**.
> 
> * For an **exothermic reaction** ($\\\\Delta H < 0$), the forward reaction releases heat. Increasing temperature shifts the equilibrium to the left, **decreasing** the value of $K$.
> * For an **endothermic reaction** ($\\\\Delta H > 0$), the forward reaction absorbs heat. Increasing temperature shifts the equilibrium to the right, **increasing** the value of $K$.

> [!BOX]
> ### 📊 Table A: Temperature Dependency of $K_p$
> The data below shows how temperature changes $K_p$ for an exothermic and an endothermic reaction:
> 
> * **Exothermic reaction:** $\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = -92.2\\\\text{ kJ mol}^{-1}$
> * **Endothermic reaction:** $\\\\text{N}_2\\\\text{O}_4\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO}_2\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = +57.2\\\\text{ kJ mol}^{-1}$
> 
> | Temperature (T / K) | Exothermic Kp | Endothermic Kp |
> | :--- | :--- | :--- |
> | 298 K | 6.76 × 10⁵ atm⁻² | 1.15 × 10⁻¹ atm |
> | 400 K | 4.07 × 10¹ atm⁻² | 4.79 × 10¹ atm |
> | 500 K | 3.55 × 10⁻² atm⁻² | 1.70 × 10³ atm |
> | 600 K | 1.66 × 10⁻³ atm⁻² | 1.78 × 10⁴ atm |
> 
> **Table B Summary:**
> * **Exothermic reaction:** Increasing temperature $\\\\implies K$ decreases; Decreasing temperature $\\\\implies K$ increases.
> * **Endothermic reaction:** Increasing temperature $\\\\implies K$ increases; Decreasing temperature $\\\\implies K$ decreases.

> [!IMPORTANT]
> ### 🧮 Quantitative Position Shift via $K$ Change
> In chemistry, we explain the shift in equilibrium position due to temperature *because* the value of the constant itself has changed.
> 
> Consider the exothermic formation of Hydrogen Iodide (Table C):
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)} \\\\quad \\\\Delta H^\\\\theta = -9\\\\text{ kJ mol}^{-1}$$
> 
> If we mix $1.00\\\\text{ mol}$ of $\\\\text{H}_2$ and $1.00\\\\text{ mol}$ of $\\\\text{I}_2$ in a $1\\\\text{ dm}^3$ vessel at different temperatures:
> 
> | Temperature (T / K) | Kc Value | Moles of H₂ (g) | Moles of I₂ (g) | Moles of HI (g) |
> | :--- | :--- | :--- | :--- | :--- |
> | 500 K | 160 | 0.14 mol | 0.14 mol | 1.72 mol |
> | 700 K | 54 | 0.21 mol | 0.21 mol | 1.58 mol |
> 
> * As temperature increases from $500\\\\text{ K}$ to $700\\\\text{ K}$, $K_c$ decreases from $160$ to $54$
> * To satisfy the new lower $K_c$ value, the concentrations of reactants must increase, and the products must decrease.
> * This shifts the equilibrium position to the left (the endothermic direction).

> [!EXAMPLE]
> #### 📝 Worked Example: Temperature & Equilibrium Shift
> **Question:** Nitrogen and oxygen gases react to form nitrogen(II) oxide:
> $$\\\\text{N}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NO(g)} \\\\quad \\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$$
> The equilibrium constant $K_c$ at $298\\\\text{ K}$ is $4.80 \\\\times 10^{-31}$. Explain the effect of heating the system to $2000\\\\text{ K}$ on:
> 1. The value of $K_c$
> 2. The proportion of $\\\\text{NO(g)}$ present at equilibrium.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction thermicity:**
> >    * The reaction is endothermic ($\\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$).
> > 
> > 2. **Deduce effect on $K_c$:**
> >    * For endothermic reactions, increasing the temperature increases the value of $K_c$. Therefore, at $2000\\\\text{ K}$, $K_c$ will be significantly **larger** than $4.80 \\\\times 10^{-31}$
> > 
> > 3. **Deduce effect on yield/proportion:**
> >    * Since $K_c$ increases, the ratio of products to reactants at equilibrium increases.
> >    * Therefore, the proportion of $\text{NO(g)}$ at equilibrium will be **higher** at $2000\text{ K}$ compared to $298\text{ K}$
`,
        keyPoints: [
            'Only temperature changes the numerical values of Kc and Kp.',
            'Exothermic reactions have lower K values at higher temperatures.',
            'Endothermic reactions have higher K values at higher temperatures.'
        ]
    },
    {
        id: 'reaction-quotient-u4-l3',
        title: "Reaction Quotient (Q vs K)",
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Reaction Quotient ($Q$)
> The **reaction quotient ($Q$)** is a measure of the relative amounts of products and reactants present in a reaction mixture at any given time.
> 
> * The mathematical expression for $Q_c$ (or $Q_p$) is identical to $K_c$ (or $K_p$).
> * The key difference is that the concentrations or partial pressures in $Q$ are **not necessarily at equilibrium**.
> * **At equilibrium:** $Q = K$
> * **If $Q < K$:** The reaction shifts to the **right** (products) to reach equilibrium.
> * **If $Q > K$:** The reaction shifts to the **left** (reactants) to reach equilibrium.

> [!IMPORTANT]
> ### 🧪 Concentration Changes & $Q_c$
> If the concentration of a reactant is increased, the denominator of the $Q_c$ expression increases, making $Q_c < K_c$.
> * To restore equilibrium, the system reacts to increase the numerator (products) and decrease the denominator (reactants) until $Q_c = K_c$ again.
> * This explains Le Chatelier's Principle quantitatively: concentration changes shift the position of equilibrium, but **$K_c$ remains constant**.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Constant Volume Shift
> **Question:** For the equilibrium: $\\\\text{H₂(g)} + \\\\text{I₂(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$
> Explain, using $Q_c$, the effect of suddenly increasing the concentration of $\\\\text{H₂}$ at constant temperature and volume.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write expressions for $K_c$ and $Q_c$:**
> >    $$K_c = \\\\frac{[\\\\text{HI}]^2\\\\text{(eq)}}{[\\\\text{H₂}]\\\\text{(eq)}[\\\\text{I₂}]\\\\text{(eq)}} \\\\quad Q_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H₂}][\\\\text{I₂}]}$$
> > 
> > 2. **Analyze the change:**
> >    * Suddenly increasing $[\\\\text{H₂}]$ increases the denominator of the $Q_c$ expression.
> >    * Therefore, the value of $Q_c$ decreases immediately: $Q_c < K_c$
> > 
> > 3. **Deduce direction of shift:**
> >    * For equilibrium to be re-established, $Q_c$ must increase to equal $K_c$
> >    * This requires the numerator $[\\\\text{HI}]^2$ to increase and the denominator to decrease.
> >    * Hence, the reaction shifts to the right (products side).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Constant Pressure Shift (Ideal Gas Expansion)
> **Question:** An equilibrium mixture of $\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightleftharpoons 2\\\\text{NH₃(g)}$ at constant temperature contains $0.510\\\\text{ mol } \\\\text{N₂}$, $0.197\\\\text{ mol } \\\\text{H₂}$, and $0.204\\\\text{ mol } \\\\text{NH₃}$ in a total volume of $1.00\\\\text{ dm}^3$ ($K_c = 10.7$).
> If $0.140\\\\text{ mol}$ of $\\\\text{N₂}$ gas is suddenly added to the mixture at **constant pressure and temperature**, calculate $Q_c$ and predict the direction of the equilibrium shift.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the new total moles of gas:**
> >    * Original total moles = $0.510 + 0.197 + 0.204 = 0.911\\\\text{ mol}$
> >    * New total moles = $0.911 + 0.140 = 1.051\\\\text{ mol}$
> > 
> > 2. **Calculate the new volume of the gas mixture:**
> >    * Since pressure and temperature are constant, volume is directly proportional to total moles ($V_2 = V_1 \\\\times \\\\frac{n_2}{n_1}$):
> >      $$V_2 = 1.00\\\\text{ dm}^3 \\\\times \\\\frac{1.051}{0.911} = 1.154\\\\text{ dm}^3$$
> > 
> > 3. **Calculate the new concentration of each gas immediately after addition:**
> >    * New moles of $\\\\text{N₂} = 0.510 + 0.140 = 0.650\\\\text{ mol}$
> >    * $[\\\\text{N₂}] = \\\\frac{0.650}{1.154} = 0.563\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{H₂}] = \\\\frac{0.197}{1.154} = 0.171\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{NH₃}] = \\\\frac{0.204}{1.154} = 0.177\\\\text{ mol dm}^{-3}$
> > 
> > 4. **Calculate $Q_c$:**
> >    $$Q_c = \\\\frac{[\\\\text{NH₃}]^2}{[\\\\text{N₂}][\\\\text{H₂}]^3} = \\\\frac{(0.177)^2}{(0.563) \\\\times (0.171)^3} = \\\\frac{0.0313}{0.563 \\\\times 0.00500} = 11.15$$
> > 
> > 5. **Compare $Q_c$ and $K_c$ and deduce direction:**
> >    * $Q_c = 11.15$, which is **greater** than $K_c = 10.7$ ($Q_c > K_c$)
> >    * To re-establish equilibrium, $Q_c$ must decrease.
> >    * This is achieved by shifting the equilibrium to the **left** (towards reactants).
> >    * *Note:* This counter-intuitive left shift occurs because the volume expansion (which decreases concentrations of all gases) has a greater effect on the numerator (which is squared) and the cubed reactant ($[\text{H₂}]^3$) than the simple addition of $\text{N₂}$.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Pressure Changes & $Q_p$
> **Question:** For the Haber process: $\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightleftharpoons 2\\\\text{NH₃(g)}$. Let the equilibrium partial pressures be $a$, $b$, and $c$ atm respectively, so $K_p = \\\\frac{c^2}{a b^3}$.
> Show mathematically, using $Q_p$, why doubling the total pressure of the system shifts the equilibrium to the right.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce new partial pressures immediately after doubling pressure:**
> >    * All partial pressures are doubled: $p(\\\\text{N₂}) = 2a$, $p(\\\\text{H₂}) = 2b$, and $p(\\\\text{NH₃}) = 2c$
> > 
> > 2. **Set up the $Q_p$ expression:**
> >    $$Q_p = \\\\frac{(2c)^2}{(2a)(2b)^3} = \\\\frac{4c^2}{16ab^3} = \\\\frac{1}{4} K_p$$
> > 
> > 3. **Analyze the shift:**
> >    * $Q_p = \\\\frac{1}{4} K_p < K_p$
> >    * To restore equilibrium, $Q_p$ must increase back to equal $K_p$
> >    * This requires the partial pressure of products (numerator) to increase.
> >    * Hence, the equilibrium shifts to the right (products side).

> [!CAUTION]
> ### 🛑 Summary of Catalyst Effects
> * A catalyst increases the rates of the forward and reverse reactions equally.
> * It does not appear in the overall stoichiometric equation and has no effect on the expression or value of $K_c$ or $K_p$.
> * Therefore, adding a catalyst does not shift the equilibrium position or change the equilibrium composition; it only decreases the time required to reach equilibrium.
`,
        keyPoints: [
            'Reaction quotient Q has the same mathematical form as K but uses non-equilibrium values.',
            'Adding a gas at constant pressure causes volume expansion, which can shift the equilibrium in unexpected directions.',
            'Pressure and concentration changes alter Q relative to K, driving the reaction to shift until Q equals K once more.'
        ]
    },
    {
        id: 'entropy-equilibrium-u4-l3',
        title: "Entropy & Equilibrium Constants",
        type: 'text',
        content: `
> [!NOTE]
> ### 🌀 Entropy and Spontaneity Recap
> Recall from thermodynamics that the total entropy change ($\\\\Delta S\\\\text{ total}$) determines the spontaneity of a chemical reaction:
> 
> * **Standard Entropy Equation:**
>   $$\\\\Delta S\\\\text{ total} = \\\\Delta S\\\\text{ system} + \\\\Delta S\\\\text{ surroundings}$$
> * **Surroundings Entropy:**
>   $$\\\\Delta S\\\\text{ surroundings} = -\\\\frac{\\\\Delta H}{T}$$
> * While system entropy changes very little with temperature (unless there is a phase change), $\\\\Delta S\\\\text{ surroundings}$ is highly sensitive to the absolute temperature $T$ (in Kelvin).
> * For all spontaneous processes, $\\\\Delta S\\\\text{ total} > 0$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Temperature effect on CaCO₃ decomposition
> **Question:** Calcium carbonate decomposes as follows:
> $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = +177.9\\\\text{ kJ mol}^{-1}$$
> The standard system entropy change is $\\\\Delta S^\\\\theta\\\\text{ system} = +160.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$.
> Calculate $\\\\Delta S^\\\\theta\\\\text{ total}$ at:
> 1. $293\\\\text{ K}$ ($20\\\\text{ }^\\\\circ\\\\text{C}$)
> 2. $1173\\\\text{ K}$ ($900\\\\text{ }^\\\\circ\\\\text{C}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **1. At $293\\\\text{ K}$:**
> >    * Calculate standard surroundings entropy:
> >      $$\\\\Delta S^\\\\theta\\\\text{ surroundings} = -\\\\frac{177900\\\\text{ J mol}^{-1}}{293\\\\text{ K}} = -607.2\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S^\\\\theta\\\\text{ total}(293\\\\text{ K}) = +160.4 + (-607.2) = -446.8\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * **Spontaneity:** Since $\\\\Delta S\\\\text{ total} < 0$, the reaction is non-spontaneous at room temperature.
> > 
> > **2. At $1173\\\\text{ K}$:**
> >    * Calculate standard surroundings entropy:
> >      $$\\\\Delta S^\\\\theta\\\\text{ surroundings} = -\\\\frac{177900\\\\text{ J mol}^{-1}}{1173\\\\text{ K}} = -151.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S^\\\\theta\\\\text{ total}(1173\\\\text{ K}) = +160.4 + (-151.7) = +8.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * **Spontaneity:** Since $\\\\Delta S\\\\text{ total} > 0$, the reaction is spontaneous at this high temperature.

<br>

> [!IMPORTANT]
> ### 🧮 Thermodynamic Connection: $\\\\Delta S^\\\\theta\\\\text{ total}$ and $K$
> For a reversible system that reaches equilibrium, the standard total entropy change is directly linked to the equilibrium constant ($K_c$ or $K_p$) by the equation:
> $$\\\\Delta S^\\\\theta\\\\text{ total} = R \\\\ln K$$
> 
> Where:
> * $R$ is the gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
> * $K$ is the thermodynamic equilibrium constant (which has no units)
> * By rearranging this equation, we can calculate the equilibrium constant:
>   $$K = e^{\\\\frac{\\\\Delta S^\\\\theta\\\\text{ total}}{R}}$$

> [!WARNING]
> ### 🛑 Learning Tip: Thermodynamic Constants vs Experimental Units
> * The mathematical values of $K$ in $\\\\Delta S\\\\text{ total} = R \\\\ln K$ must not have units.
> * To convert an experimental value of $K_p$ (in atm) or $K_c$ (in $\\\\text{mol dm}^{-3}$) into a thermodynamic constant, each partial pressure is divided by the standard pressure ($1\\\\text{ atm}$) and each concentration is divided by the standard concentration ($1\\\\text{ mol dm}^{-3}$).
> * Because this standard reference is 1, the numerical values remain unchanged, but they become dimensionless.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating $K$ from Entropy Data
> **Question:** The reaction to form sulfur trioxide from sulfur dioxide and oxygen has a standard total entropy change of $\\\\Delta S^\\\\theta\\\\text{ total} = +238.3\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$:
> $$\\\\text{SO}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons \\\\text{SO}_3\\\\text{(g)}$$
> Calculate the value of the equilibrium constant $K$ for this reaction ($R = 8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall the rearranged thermodynamic equation:**
> >    $$K = e^{\\\\frac{\\\\Delta S^\\\\theta\\\\text{ total}}{R}}$$
> > 
> > 2. **Substitute the given values:**
> >    $$K = e^{\\\\frac{238.3}{8.31}} = e^{28.676}$$
> > 
> > 3. **Solve for $K$:**
> >    $$K = 2.84 \\\\times 10^{12}$$
> >    * Note: The constant has no units.

> [!BOX]
> ### 📈 Position of Equilibrium and $K$ Value
> The magnitude of the equilibrium constant ($K$) and the sign of the standard total entropy change ($\\\\Delta S^\\\\theta\\\\text{ total}$) predict the extent of a reaction:
> 
> * **Large Positive $\\\\Delta S^\\\\theta\\\\text{ total}$ ($K \\\\gg 1$):**
>   * Equilibrium position lies far to the **right** (heavily favoring products). The reaction goes virtually to completion.
> * **Large Negative $\\\\Delta S^\\\\theta\\\\text{ total}$ ($K \\\\ll 1$):**
>   * Equilibrium position lies far to the **left** (heavily favoring reactants). The reaction barely starts.
> * **Intermediate $\\\\Delta S^\\\\theta\\\\text{ total}$ ($\\\\approx 0$ or $K \\\\approx 1$):**
>   * Significant amounts of both reactants and products are present at equilibrium.
`,
        keyPoints: [
            'Total entropy change and equilibrium constant are linked by standard thermodynamic equations.',
            'Standard system entropy changes very little with temperature, whereas surroundings entropy is heavily dependent on temperature.',
            'A large positive standard total entropy change indicates a reaction that goes nearly to completion with a large K.'
        ]
    }
];
