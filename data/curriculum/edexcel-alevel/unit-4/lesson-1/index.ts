import { LessonPart } from '../../../registry';

export const lessonTitle = "Kinetics";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 11: Kinetics
This lesson covers reaction rates, orders of reaction, rate equations, continuous and initial rate experimental methods, reaction mechanisms, the rate-determining step, and the Arrhenius equation.
`;

export const parts: LessonPart[] = [
    {
        id: 'rate-equations-orders-u4-l1',
        title: 'Rate Equations & Reaction Orders',
        type: 'text',
        content: `
> [!NOTE]
> ### ⏱️ Rate of Reaction and Concentrations
> The rate of a chemical reaction is proportional to the concentration of reactants raised to a certain power.
> * **Rate of Reaction Definition:** The rate of reaction can be expressed in two ways:
>   1. How the concentration of a product increases with time:
>      $$\\\\text{Rate} = \\\\frac{d[\\\\text{product}]}{dt}$$
>   2. How the concentration of a reactant decreases with time:
>      $$\\\\text{Rate} = -\\\\frac{d[\\\\text{reactant}]}{dt}$$
>      *The negative sign shows that the concentration of the reactant is decreasing, ensuring the calculated rate has a positive value.*
> * **Rate Equation:** An expression showing how the rate of reaction relates to the concentrations of the reactants:
>   $$\\\\text{Rate} = k[\\\\text{A}]^x[\\\\text{B}]^y$$
> * **Rate Constant ($k$):** A proportionality constant that links reaction rate to concentrations at a specific temperature.
> * **Reaction Orders:** The powers ($x$ and $y$) to which the concentration terms are raised.
> 
> > [!WARNING]
> > ### ⚠️ Exam Order Limit
> > The values for orders of reaction in rate equations will only ever be $0$, $1$, or $2$ at International A Level.

> [!IMPORTANT]
> ### 🧮 Types of Reaction Orders
> 1. **Zero Order ($x = 0$):**
>    * The rate is independent of the reactant concentration.
>    * Tripling concentration has no effect on rate.
> 2. **First Order ($x = 1$):**
>    * The rate is directly proportional to the reactant concentration.
>    * Doubling concentration doubles the rate.
> 3. **Second Order ($x = 2$):**
>    * The rate is proportional to the square of the reactant concentration.
>    * Doubling concentration increases the rate by a factor of 4 ($2^2 = 4$).
> 4. **Overall Order:** The sum of all individual orders in the rate equation ($x + y$).

> [!BOX]
> ### 📋 Common Rate Constant Units
> Since the rate is always in $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$ and concentration is in $\\\\text{mol dm}^{-3}$, the units of $k$ depend on the overall order:
> * **Zero Order:** $k = \\\\text{Rate}$, units: $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$
> * **First Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}]}$, units: $\\\\text{s}^{-1}$
> * **Second Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}][\\\\text{B}]}$, units: $\\\\text{dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$
> * **Third Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}]^2[\\\\text{B}]}$, units: $\\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing Reaction Orders & Constant Units
> **Question:** A reaction has the rate equation $\\\\text{Rate} = k[\\\\text{NO}]^2[\\\\text{O}_2]$. Determine the overall order of the reaction and deduce the units of the rate constant $k$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the overall order:**
> >    * Order with respect to $\\\\text{NO}$ is 2
> >    * Order with respect to $\\\\text{O}_2$ is 1
> >    * Overall order = $2 + 1 = 3$
> > 
> > 2. **Deduce the units of $k$:**
> >    * Rearrange the rate equation:
> >      $$k = \\\\frac{\\\\text{Rate}}{[\\\\text{NO}]^2[\\\\text{O}_2]}$$
> >    * Substitute units:
> >      $$\\\\text{units} = \\\\frac{\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}}{(\\\\text{mol dm}^{-3})^2(\\\\text{mol dm}^{-3})} = \\\\frac{\\\\text{s}^{-1}}{(\\\\text{mol dm}^{-3})^2}$$
> >    * Simplify:
> >      $$\\\\text{units} = \\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$$
`,
        keyPoints: [
            'Reaction order can only be determined experimentally and cannot be predicted from the balanced equation stoichiometry.',
            'The value of the rate constant k changes with temperature but is independent of concentrations.'
        ],
        equationVisualizer: {
            reactants: [['NO', '#ef4444'], ['O₂', '#3b82f6']],
            products: [['NO₂', '#10b981']],
            description: "Nitrogen monoxide reacts with oxygen where the rate depends on [NO]² and [O₂]"
        }
    },
    {
        id: 'experimental-rates-u4-l1',
        title: 'Experimental Determination of Rates',
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Selecting and Justifying Experimental Techniques
> To follow a reaction, we must choose a technique based on the overall chemical equation and the physical states of the reactants and products:
> 
> 1. **Measuring Gas Volume Evolved:**
>    * **Justification:** Suitable if one of the products is a gas.
>    * **Apparatus:** Collected over water into a measuring cylinder or using a gas syringe. A gas syringe offers higher precision.
>    * **Example:** Reaction of calcium carbonate with hydrochloric acid:
>      $$\\\\text{CaCO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{CaCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> 
> 2. **Measuring Mass Change:**
>    * **Justification:** Suitable when a heavy gas escapes from the reaction flask.
>    * **Apparatus:** Reaction flask placed on a digital balance. A **cotton wool** plug is placed in the neck of the flask to prevent the loss of liquid spray.
>    * **Constraint:** Most precise when the gas evolved has a relatively high density (high relative molecular mass) like $\\\\text{CO}_2$. Low-density gases like hydrogen ($\\\\text{H}_2$) cause very small mass changes, making measurement uncertainties too significant.
> 
> 3. **Colorimetry (Monitoring Color Change):**
>    * **Justification:** Suitable when a colored species is formed or consumed.
>    * **Advantage:** Using a colorimeter provides quantitative, objective measurements and detects far more subtle changes than the human eye.
>    * **Example:** The reaction between propanone and iodine:
>      $$\\\\text{CH}_3\\\\text{COCH}_3\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COCH}_2\\\\text{I}\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} + \\\\text{I}^-\\\\text{(aq)}$$
>      *Note: Iodine ($\\\\text{I}_2$) is the only colored species present, so the decrease in its brown/yellow color is monitored.*
> 
> 4. **Analysis by Titration (Quenching):**
>    * **Justification:** Involves taking small samples (aliquots) at regular intervals.
>    * **Process:** The reaction in the aliquot is stopped or slowed to almost zero (**quenched**) by adding another substance or immersing it in an ice bath. The aliquot is then titrated to find the concentration.
>    * **Example (Propanone + Iodine):** Sodium hydrogen carbonate ($\\\\text{NaHCO}_3$) is added to the aliquot to remove the acid catalyst ($H^+$), effectively stopping the reaction. The remaining iodine is then titrated against a standard solution of sodium thiosulfate:
>      $$\\\\text{I}_2\\\\text{(aq)} + 2\\\\text{S}_2\\\\text{O}_3^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{I}^-\\\\text{(aq)} + \\\\text{S}_4\\\\text{O}_6^{2-}\\\\text{(aq)}$$
> 
> 5. **Measuring Electrical Conductivity:**
>    * **Justification:** Suitable when the total number or type of ions in solution changes during the reaction.
>    * **Example:**
>      $$5\\\\text{Br}^-\\\\text{(aq)} + \\\\text{BrO}_3^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 3\\\\text{Br}_2\\\\text{(aq)} + 3\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> 
> 6. **Other Physical Properties:**
>    * Includes changes in liquid volume (**dilatometry**), optical activity (**chirality/polarimetry**), and refractive index.
> 
> > [!WARNING]
> > ### ⚠️ Gas Collection Limitation
> > Reactions producing gases that are highly soluble in water, such as sulfur dioxide ($\\\\text{SO}_2$), cannot be followed using gas collection over water because the gas will dissolve. A gas syringe must be used.

> [!BOX]
> ### 📈 Concentration-Time Graphs
> Plotting concentration against time allows us to determine the order from the shape of the curve:
> * **Zero Order:** A straight line with a constant negative gradient. The half-life decreases as the concentration decreases.
> * **First Order:** A curve with a constant half-life ($t_{1/2}$).
> * **Second Order:** A steeper curve where the half-life increases (doubles) as concentration decreases.
> 
> * **Finding Instantaneous Rate:** The rate of reaction at any given time can be determined by drawing a tangent to the curve at that time and calculating its gradient ($\\\\text{Gradient} = \\\\frac{\\\\text{change in concentration}}{\\\\text{change in time}}$). For products (volume-time graph), the curve slopes upwards, and the rate is similarly found from the positive gradient.

> [!IMPORTANT]
> ### 🧮 Half-Life ($t_{1/2}$)
> * The half-life is the time taken for the reactant concentration to decrease to half of its initial value.
> * For a first-order reaction:
>   $$t_{1/2} = \\\\frac{\\\\ln 2}{k}$$
> * A constant half-life confirms a first-order reaction.

> [!BOX]
> ### 📊 Deducing Order from Rate-Concentration Graphs
> When using the initial-rate method with reciprocal of time ($1/t$) as a proxy for rate ($\\\\text{rate} \\\\propto 1/t$):
> * **Zero Order:** Plotting $1/t$ against $[\\\\text{A}]$ gives a horizontal line (rate is independent of concentration).
> * **First Order:** Plotting $1/t$ against $[\\\\text{A}]$ gives a straight line passing through the origin.
> * **Second Order:** Plotting $1/t$ against $[\\\\text{A}]$ gives a curve. To confirm second order, plot $1/t$ against $[\\\\text{A}]^2$, which yields a straight line passing through the origin.
> 
> > [!WARNING]
> > ### ⚠️ Check the Graph Axes!
> > Be extremely careful to check the units and labels on the axes of rate graphs. Graphs with the same shape can mean completely different things depending on the axes (e.g. concentration vs. time has a curve for first-order, but rate vs. concentration has a straight line for first-order).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Initial Rates Table Analysis
> **Question:** Determine the rate equation and rate constant for the reaction $\\\\text{A} + \\\\text{B} \\\\rightarrow \\\\text{Products}$ from the following data:
> 
> | Experiment | [A] (mol/dm³) | [B] (mol/dm³) | Initial Rate (mol/dm³/s) |
> | :---: | :---: | :---: | :---: |
> | 1 | 0.10 | 0.10 | 2.0 × 10⁻³ |
> | 2 | 0.20 | 0.10 | 4.0 × 10⁻³ |
> | 3 | 0.10 | 0.20 | 8.0 × 10⁻³ |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the order with respect to A:**
> >    * Compare Experiment 1 and 2: [B] is constant, [A] doubles ($0.10 \\\\rightarrow 0.20$).
> >    * The rate doubles ($2.0 \\\\times 10^{-3} \\\\rightarrow 4.0 \\\\times 10^{-3}$).
> >    * Therefore, the reaction is **first order** with respect to A.
> > 
> > 2. **Determine the order with respect to B:**
> >    * Compare Experiment 1 and 3: [A] is constant, [B] doubles ($0.10 \\\\rightarrow 0.20$).
> >    * The rate increases by a factor of 4 ($2.0 \\\\times 10^{-3} \\\\rightarrow 8.0 \\\\times 10^{-3}$).
> >    * Since $2^2 = 4$, the reaction is **second order** with respect to B.
> > 
> > 3. **Write the rate equation:**
> >    $$\\\\text{Rate} = k[\\\\text{A}][\\\\text{B}]^2$$
> > 
> > 4. **Calculate the rate constant ($k$):**
> >    * Use data from Experiment 1:
> >      $$2.0 \\\\times 10^{-3} = k(0.10)(0.10)^2$$
> >      $$2.0 \\\\times 10^{-3} = k(0.0010)$$
> >      $$k = 2.0\\\\text{ dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Justifying Experimental Techniques
> **Question:** Identify the most suitable experimental technique to follow the rate of each of the following reactions, and explain your choice:
> 
> 1. $\\\\text{Mg}\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$
> 2. $\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$
> 3. $\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI}\\\\text{(g)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Magnesium with acid:**
> >    * *Technique:* Measuring the volume of gas evolved using a gas syringe.
> >    * *Explanation:* $\\\\text{H}_2$ gas is produced. Measuring mass loss is unsuitable because $\\\\text{H}_2$ has a very low density, leading to negligible mass changes that fall within experimental uncertainty.
> > 
> > 2. **Ethyl ethanoate with sodium hydroxide:**
> >    * *Technique:* Electrical conductivity (or quenching and titrating $\\\\text{OH}^-$).
> >    * *Explanation:* The highly conductive $\\\\text{OH}^-$ ions are replaced by less conductive $\\\\text{CH}_3\\\\text{COO}^-$ ions, causing a measurable drop in electrical conductivity.
> > 
> > 3. **Hydrogen gas with iodine gas:**
> >    * *Technique:* Colorimetry.
> >    * *Explanation:* Iodine gas ($\\\\text{I}_2$) is purple, whereas the reactant $\\\\text{H}_2$ and product $\\\\text{HI}$ are colorless. The fading of the purple color can be monitored quantitatively.
`,
        keyPoints: [
            'Continuous monitoring yields concentration-time graphs, from which tangent gradients give rates.',
            'Initial rates method gives rate-concentration graphs directly.'
        ]
    },
    {
        id: 'reaction-mechanisms-rds-u4-l1',
        title: 'Reaction Mechanisms & Rate-Determining Step',
        type: 'text',
        content: `
> [!NOTE]
> ### ⛓️ Multi-Step Reactions & Mechanisms
> Most chemical reactions do not occur in a single collision. For example, consider the acidic redox reaction:
> $$\\\\text{MnO}_4^-\\\\text{(aq)} + 8\\\\text{H}^+\\\\text{(aq)} + 5\\\\text{Fe}^{2+}\\\\text{(aq)} \\\\rightarrow \\\\text{Mn}^{2+}\\\\text{(aq)} + 4\\\\text{H}_2\\\\text{O}\\\\text{(l)} + 5\\\\text{Fe}^{3+}\\\\text{(aq)}$$
> For this reaction to occur in a single step, $14$ particles would have to collide simultaneously, with the correct orientation and sufficient energy. The probability of this is statistically zero. Therefore, reactions proceed via a series of simple steps called a **reaction mechanism**.
> * **Elementary Step:** An individual step in a mechanism.
> * **Intermediate:** A species formed in one step and consumed in a subsequent step (does not appear in the overall balanced equation).
> * **Rate-Determining Step (RDS):** The slowest step in a reaction mechanism. It acts as a bottleneck and controls the overall rate.
> 
> > [!TIP]
> > ### 📋 The Student Notes Analogy
> > Imagine three students preparing study notes:
> > * **Student 1:** Collects sheets from 10 piles (**SLOW**).
> > * **Student 2:** Tidies the sheets (**FAST**).
> > * **Student 3:** Staples the sheets (**FAST**).
> > 
> > The overall rate of producing finished notes depends entirely on the speed of **Student 1**. The other students do nothing but wait for Student 1 to finish. Thus, Student 1 represents the rate-determining step.
 
 > [!IMPORTANT]
 > ### 🗮️ Rules for Connecting Mechanisms to Rate Equations
 > 1. **Reactant Presence:** All reactant species involved either in, or before, the rate-determining step have an effect on the rate and will appear in the rate equation.
 > 2. **Reaction Order:** The coefficients of reactants in the RDS (or steps preceding it) match the order of those reactants in the rate equation.
 > 3. **Species After RDS:** Species participating only in steps AFTER the RDS do not appear in the rate equation (or their concentration effect is negligible because they react in fast steps).
 > 4. **Species in Large Excess:** A reactant present in such a large excess that its concentration change is negligible will not have a measurable effect on the rate and won't appear in the rate equation.

> [!BOX]
> ### 📊 Reaction Energy Profiles: SN1 vs. SN2 Mechanisms
> The kinetic evidence of halogenoalkane hydrolysis directly distinguishes between two mechanism types:
> 
> 1. **Transition State vs. Intermediate:**
>    * **Intermediate:** A definite chemical species with a finite lifetime (e.g., carbocations, lifetime $\\\\approx 10^{-6}\\\\text{ s}$). Appears as an **energy minimum** (well) on a reaction profile.
>    * **Transition State:** An unstable arrangement of atoms at the **energy maximum** (peak) of a step. It has a negligible lifetime ($\\\\approx 10^{-15}\\\\text{ s}$, the time of molecular collision).
> 
> 2. **SN2 Hydrolysis (Primary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}][\\\\text{OH}^-]$ (Bimolecular)
>    * **Reaction Profile:** Shows a **single peak** (one transition state) representing the simultaneous nucleophilic attack and leaving group departure. No intermediate is formed.
>    * **Steric Crowding Effect:** Primary halogenoalkanes have small hydrogen atoms surrounding the central carbon, allowing the nucleophile to attack easily. In tertiary halogenoalkanes, three bulky alkyl groups cause steric hindrance/crowding, making the transition state highly unstable (higher $E_a$). Thus, SN2 rates increase in the order: $3^\\\\circ < 2^\\\\circ < 1^\\\\circ$.
> 
> 3. **SN1 Hydrolysis (Tertiary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}]$ (Unimolecular)
>    * **Reaction Profile:** Shows **two peaks** (two transition states) separated by a well (the carbocation intermediate minimum).
>    * **RDS Activation Energy:** The activation energy for the first step (ionization to form the carbocation) is much higher than the second step ($E_a(1) > E_a(2)$), making it the rate-determining step.
>    * **Inductive Effect:** Alkyl groups donate electrons towards the carbocation carbon, stabilizing the $3^\\\\circ$ carbocation intermediate far more than a $1^\\\\circ$ one. This dramatically lowers $E_a(1)$. Thus, SN1 rates increase in the order: $1^\\\\circ < 2^\\\\circ < 3^\\\\circ$.
> 
> *Secondary halogenoalkanes react via a mixture of both SN1 and SN2 mechanisms.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing a Mechanism from a Rate Equation
> **Question:** The reaction $\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)}$ has the experimental rate equation $\\\\text{Rate} = k[\\\\text{NO}_2]^2$. Explain why the following two-step mechanism is consistent with the rate equation:
> 
> * **Step 1 (slow):** $\\\\text{NO}_2 + \\\\text{NO}_2 \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO}$
> * **Step 2 (fast):** $\\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_2 + \\\\text{CO}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the rate-determining step:**
> >    * Step 1 is specified as the slow step, meaning it is the RDS.
> > 
> > 2. **Formulate the rate equation from the RDS:**
> >    * The reactants in Step 1 are two molecules of $\\\\text{NO}_2$
> >    * Therefore, the rate equation is:
> >      $$\\\\text{Rate} = k[\\\\text{NO}_2][\\\\text{NO}_2] = k[\\\\text{NO}_2]^2$$
> >    * This matches the experimentally determined rate equation.
> > 
> > 3. **Verify the overall stoichiometry:**
> >    * Add Step 1 and Step 2:
> >      $$2\\\\text{NO}_2 + \\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO} + \\\\text{NO}_2 + \\\\text{CO}_2$$
> >    * Cancel intermediate $\\\\text{NO}_3$ and one $\\\\text{NO}_2$ from both sides:
> >      $$\\\\text{NO}_2 + \\\\text{CO} \\\\rightarrow \\\\text{NO} + \\\\text{CO}_2$$
> >    * The mechanism yields the correct overall equation, proving it is consistent.
`,
        keyPoints: [
            'Intermediate species are never included in the final rate equation.',
            'A reactant that does not affect the rate (zero order) must react in a fast step after the RDS.'
        ],
        equationVisualizer: {
            reactants: [['NO₂', '#ef4444'], ['CO', '#3b82f6']],
            products: [['NO', '#10b981'], ['CO₂', '#f59e0b']],
            description: "The rate of this reaction is independent of CO concentration because CO reacts in a fast step after the RDS"
        }
    },
    {
        id: 'arrhenius-equation-u4-l1',
        title: 'Arrhenius Equation & Activation Energy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌡️ Effect of Temperature on Rate Constants
> Increasing the temperature increases the rate of reaction by increasing the rate constant $k$. There are two reasons for this:
> 1. **Fraction of Active Molecules (Major):** A significant increase in the fraction of molecules with energy equal to or greater than the activation energy ($E \\\\ge E_a$).
> 2. **Collision Frequency (Minor):** A small increase in the frequency of collisions between molecules as they move faster.
> 
> *The increase in the fraction of molecules with sufficient energy is by far the most significant factor, while the collision frequency effect is negligible and effectively ignored.*
> 
> * **The Arrhenius Equation:**
>   $$k = A e^{-\\\\frac{E_a}{RT}}$$
> * Where:
>   * **$k$** = Rate constant
>   * **$A$** = Arrhenius constant (pre-exponential factor, related to collision frequency and collision orientation)
>   * **$E_a$** = Activation energy (in $\\\\text{J mol}^{-1}$)
>   * **$R$** = Gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$T$** = Temperature (in $\\\\text{Kelvin}$)
> 
> * **Significance of the factor $e^{-\\\\frac{E_a}{RT}}$:** This term represents the fraction of collisions that possess energy equal to or greater than $E_a$. For a reaction with $E_a = 60\\\\text{ kJ mol}^{-1}$ at $298\\\\text{ K}$, this fraction is $\\\\approx 3 \\\\times 10^{-11}$ (only one in $3 \\\\times 10^{11}$ collisions has sufficient energy to react).
> 
> > [!TIP]
> > ### 💡 Effect of Activation Energy Magnitude
> > * Reactions with a **large $E_a$** are slow at room temperature, but their rate increases rapidly (highly sensitive) with an increase in temperature.
> > * Reactions with a **small $E_a$** are fast, but their rate does not increase as rapidly with temperature.
> > * Catalyzed reactions have smaller values of $E_a$.
> 
> > [!WARNING]
> > ### ⚠️ Exam Hint
> > You will always be given the Arrhenius equation if it is needed in an exam question.

> [!IMPORTANT]
> ### 🧮 Logarithmic Form of the Arrhenius Equation
> To analyze experimental data, we take the natural logarithm ($\\\\ln$) of both sides:
> 
> $$\\\\ln k = -\\\\frac{E_a}{RT} + \\\\ln A$$
> 
> This is in the form of a straight line equation ($y = mx + c$):
> * **$y$-axis:** $\\\\ln k$
> * **$x$-axis:** $\\\\frac{1}{T}$ (in $\\\\text{K}^{-1}$)
> * **Gradient ($m$):** $-\\\\frac{E_a}{R}$
> * **Intercept ($c$):** $\\\\ln A$
> 
> *Note: While it is assumed that both $E_a$ and $A$ remain constant over a range of temperatures, their small variations are insignificant compared to the overall temperature effect on the rate constant.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Activation Energy
> **Question:** An Arrhenius plot of $\\\\ln k$ against $\\\\frac{1}{T}$ yields a straight line with a gradient of $-1.20 \\\\times 10^4\\\\text{ K}$. Calculate the activation energy ($E_a$) of the reaction in $\\\\text{kJ mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the relationship between gradient and $E_a$:**
> >    $$\\\\text{Gradient} = -\\\\frac{E_a}{R}$$
> > 
> > 2. **Calculate $E_a$ in $\\\\text{J mol}^{-1}$:**
> >    $$-1.20 \\\\times 10^4 = -\\\\frac{E_a}{8.31}$$
> >    $$E_a = 1.20 \\\\times 10^4 \\\\times 8.31 = 9.972 \\\\times 10^4\\\\text{ J mol}^{-1}$$
> > 
> > 3. **Convert to $\\\\text{kJ mol}^{-1}$:**
> >    $$E_a = \\\\frac{9.972 \\\\times 10^4}{1000} = 99.7\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Always convert temperature to Kelvin (K) when using the Arrhenius equation.',
            'Ensure the units of Ea match the gas constant units (J/mol) before converting to kJ/mol.',
            'The exponential term represents the fraction of collisions with energy equal to or greater than the activation energy.'
        ]
    },
    {
        id: 'catalysis-autocatalysis-u4-l1',
        title: 'Activation Energy, Catalysis & Autocatalysis',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Activation Energy ($E_a$) and Transition States
> * **Activation Energy ($E_a$):** The minimum energy that colliding particles must possess for a reaction to occur.
> * **Transition State:** The unstable, high-energy state at the peak of the reaction profile diagram. Once reached, reactants can form products and release energy.
> * **Catalysts:** Substances that increase the reaction rate by providing an alternative reaction route with a lower activation energy, while remaining chemically unchanged at the end of the reaction.

> [!BOX]
> ### 🧪 Homogeneous vs. Heterogeneous Catalysis
> 
> 1. **Homogeneous Catalysts:**
>    * The catalyst is in the **same phase** as the reactants.
>    * **Example (Ozone depletion):** Chlorine radicals ($\\\\text{Cl}\\\\bullet$) in the gas phase catalyze the decomposition of ozone gas ($\\\\text{O}_3$):
>      $$\\\\text{Cl}\\\\bullet\\\\text{(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow \\\\text{ClO}\\\\bullet\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)}$$
>      $$\\\\text{ClO}\\\\bullet\\\\text{(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow 2\\\\text{O}_2\\\\text{(g)} + \\\\text{Cl}\\\\bullet\\\\text{(g)}$$
>    * **Example (Peroxydisulfate + Iodide):** Catalyzed by $\\\\text{Fe}^{2+}\\\\text{(aq)}$ or $\\\\text{Fe}^{3+}\\\\text{(aq)}$ ions in solution.
>      *Thermodynamic feasibility is predicted by $E^\\\\circ$ electrode potentials, but the kinetics are accelerated because both steps have lower activation energy than the uncatalyzed reaction.*
> 
> 2. **Heterogeneous Catalysts:**
>    * The catalyst is in a **different phase** from the reactants.
>    * **Mechanism (Adsorption, Reaction, Desorption):**
>      1. **Adsorption:** Reactant molecules are adsorbed onto active sites on the solid catalyst surface.
>      2. **Reaction:** Reactant bonds are weakened, and molecules are held in positions that enable them to react together.
>      3. **Desorption:** Product molecules leave the surface.
>    * **Industrial Examples:**
>      * **Haber Process:** Iron solid catalyst forms an *interstitial hydride* with hydrogen molecules, where hydrogen atoms are held in spaces between metal ions in the lattice, allowing them to react with adsorbed nitrogen.
>      * **Contact Process:** Solid vanadium(V) oxide ($\\\\text{V}_2\\\\text{O}_5$) catalyst.
>      * **Catalytic Converters:** Three-way catalytic converters in cars convert toxic gases.
>    * **Efficiency Factors:**
>      * **Poisoning:** Trace impurities block active sites (e.g., sulfur poisons nickel catalysts in alkene hydrogenation; lead poisons catalytic converters).
>      * **Promoters:** Additives that increase efficiency by producing active sites (e.g., $\\\\text{K}_2\\\\text{O}$ and $\\\\text{Al}_2\\\\text{O}_3$ in the Haber Process).

> [!BOX]
> ### 🔄 Autocatalysis
> * **Definition:** When one of the reaction products acts as a catalyst for the reaction.
> * **Example:** The oxidation of ethanedioic acid by manganate(VII) ions, catalyzed by the product manganese(II) ions ($\\\\text{Mn}^{2+}$):
>   $$5\\\\text{(COOH)}_2\\\\text{(aq)} + 2\\\\text{MnO}_4^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 10\\\\text{CO}_2\\\\text{(g)} + 2\\\\text{Mn}^{2+}\\\\text{(aq)} + 8\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> * **Autocatalytic Rate Curve:**
>   * **Initially slow:** There is no $\\\\text{Mn}^{2+}$ present to catalyze the reaction.
>   * **Speeds up:** As $\\\\text{Mn}^{2+}$ is produced, it catalyzes the reaction, causing a rapid increase in rate.
>   * **Slows down:** The rate decreases as reactant concentrations are depleted.
> 
> > [!WARNING]
> > ### ⚠️ Autocatalytic Graph Trap
> > Do not assume that every sigmoidal (S-shaped) rate curve represents autocatalysis. Similar shapes can be caused by:
> > 1. Strongly exothermic reactions (where heat released increases the rate).
> > 2. Slow initial penetration/wetting of a solid reactant surface by a liquid.
`,
        keyPoints: [
            'Homogeneous catalysts are in the same phase as reactants; heterogeneous catalysts are in a different phase.',
            'Heterogeneous catalysis involves adsorption of reactants onto active sites, reaction, and desorption of products.',
            'Catalytic poisoning occurs when impurities block active sites, whereas promoters increase the number of active sites.',
            'In autocatalysis, the reaction starts slowly, accelerates as the catalyst product forms, and then slows down as reactants are depleted.'
        ]
    }
];
