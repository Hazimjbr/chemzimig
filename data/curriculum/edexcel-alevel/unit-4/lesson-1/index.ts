import { LessonPart } from '../../../registry';

export const lessonTitle = "Kinetics & Equilibria II";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 12: Kinetics & Equilibria II
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
> * **Rate Equation:** An expression showing how the rate of reaction relates to the concentrations of the reactants:
>   $$\\\\text{Rate} = k[\\\\text{A}]^x[\\\\text{B}]^y$$
> * **Rate Constant ($k$):** A proportionality constant that links reaction rate to concentrations at a specific temperature.
> * **Reaction Orders:** The powers ($x$ and $y$) to which the concentration terms are raised.

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
> ### 📊 Methods of Monitoring Reaction Rates
> We can determine reaction rates using either continuous monitoring (tracking progress over time) or the initial rates method.
> 
> 1. **Continuous Monitoring:**
>    * *Gas Volume:* Using a gas syringe for reactions producing a gas.
>    * *Mass Loss:* Placing the reaction mixture on a balance (for heavy gases like $\\\\text{CO}_2$).
>    * *Colorimetry:* Measuring absorbance change when a colored species is formed or consumed.
>    * *Electrical Conductivity:* For reactions producing or consuming ions.
>    * *Quenching & Titration:* Stopping the reaction in aliquots at intervals (e.g. by adding cold water or an inhibitor) and titrating.
> 2. **Initial Rates Method:**
>    * Measuring the time taken for a fixed, small amount of product to form.
>    * *Clock Reactions:* The reaction is timed until a distinct visual change occurs (e.g., starch turns blue-black in the iodine clock).

> [!BOX]
> ### 📈 Concentration-Time Graphs
> Plotting concentration against time allows us to determine the order from the shape of the curve:
> * **Zero Order:** A straight line with a constant negative gradient.
> * **First Order:** A curve with a constant half-life ($t_{1/2}$).
> * **Second Order:** A steeper curve where the half-life increases as concentration decreases.

> [!IMPORTANT]
> ### 🧮 Half-Life ($t_{1/2}$)
> * The half-life is the time taken for the reactant concentration to decrease to half of its initial value.
> * For a first-order reaction:
>   $$t_{1/2} = \\\\frac{\\\\ln 2}{k}$$
> * A constant half-life confirms a first-order reaction.

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
> Most organic and inorganic chemical reactions do not occur in a single collision. Instead, they proceed via a series of simple steps called a **reaction mechanism**.
> * **Elementary Step:** An individual step in a mechanism.
> * **Intermediate:** A species formed in one step and consumed in a subsequent step (does not appear in the overall balanced equation).
> * **Rate-Determining Step (RDS):** The slowest step in a reaction mechanism. It acts as a bottleneck and controls the overall rate.

> [!IMPORTANT]
> ### 🗮️ Rules for Connecting Mechanisms to Rate Equations
> 1. Reactants in the rate equation MUST appear in the rate-determining step (or in fast steps preceding it).
> 2. The coefficients of reactants in the RDS (or steps preceding it) match the order of those reactants in the rate equation.
> 3. Species participating only in steps AFTER the RDS do not appear in the rate equation.

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
> Increasing the temperature increases the kinetic energy of particles, which significantly increases the rate of reaction by increasing the rate constant $k$
> 
> * **The Arrhenius Equation:**
>   $$k = A e^{-\\\\frac{E_a}{RT}}$$
> * Where:
>   * **$k$** = Rate constant
>   * **$A$** = Arrhenius constant (pre-exponential factor, related to collision frequency and orientation)
>   * **$E_a$** = Activation energy (in $\\\\text{J mol}^{-1}$)
>   * **$R$** = Gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$T$** = Temperature (in $\\\\text{Kelvin}$)

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
            'Ensure the units of Ea match the gas constant units (J/mol) before converting to kJ/mol.'
        ]
    }
];
