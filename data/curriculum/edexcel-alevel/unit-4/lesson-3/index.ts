import { LessonPart } from '../../../registry';

export const lessonTitle = "Chemical Equilibria II";
export const lessonNumber = 3;

export const theoryMarkdown = `
# Topic 14: Chemical Equilibria II
This lesson covers the equilibrium constant Kc and Kp, the relationship between Kp and Kc, and how equilibrium is affected by changing conditions via Le Chatelier's Principle applied quantitatively.
`;

export const parts: LessonPart[] = [
    {
        id: 'equilibrium-constant-kc-u4-l3',
        title: 'Equilibrium Constant Kc',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚖️ Dynamic Equilibrium
> At dynamic equilibrium, the rate of the forward reaction equals the rate of the reverse reaction. The concentrations of all species remain constant (though not necessarily equal).
> 
> * Equilibrium can only be established in a **closed system** (no matter entering or leaving).

> [!IMPORTANT]
> ### 🧮 The Equilibrium Constant $K_c$
> For a general equilibrium: $a\\\\text{A} + b\\\\text{B} \\\\rightleftharpoons c\\\\text{C} + d\\\\text{D}$
> 
> The equilibrium constant in terms of concentration is:
> $$K_c = \\\\frac{[\\\\text{C}]^c[\\\\text{D}]^d}{[\\\\text{A}]^a[\\\\text{B}]^b}$$
> 
> Where square brackets $[ \\ ]$ represent molar concentrations at equilibrium in $\\\\text{mol dm}^{-3}$.
> 
> **Key Properties of $K_c$:**
> * **Temperature dependent:** $K_c$ only changes when temperature changes.
> * **Not affected by:** concentration changes, pressure changes, or catalysts.
> * **Large $K_c$ ($K_c \\\\gg 1$):** Equilibrium lies to the right (products favoured).
> * **Small $K_c$ ($K_c \\\\ll 1$):** Equilibrium lies to the left (reactants favoured).

> [!BOX]
> ### 📋 Units of $K_c$
> Units of $K_c$ depend on the number of moles on each side of the equation. Define $\\\\Delta n = (c + d) - (a + b)$:
> * $\\\\Delta n = 0$: $K_c$ has no units.
> * $\\\\Delta n = 1$: Units are $\\\\text{mol dm}^{-3}$.
> * $\\\\Delta n = -1$: Units are $\\\\text{dm}^3\\\\text{ mol}^{-1}$.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating $K_c$
> **Question:** At equilibrium, a reaction mixture contains $[\\\\text{H}_2] = 0.200\\\\text{ mol dm}^{-3}$, $[\\\\text{I}_2] = 0.200\\\\text{ mol dm}^{-3}$, and $[\\\\text{HI}] = 1.60\\\\text{ mol dm}^{-3}$. Calculate $K_c$ for the equilibrium:
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{HI(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the $K_c$ expression:**
> >    $$K_c = \\\\frac{[\\\\text{HI}]^2}{[\\\\text{H}_2][\\\\text{I}_2]}$$
> > 
> > 2. **Substitute equilibrium concentrations:**
> >    $$K_c = \\\\frac{(1.60)^2}{(0.200)(0.200)} = \\\\frac{2.56}{0.040} = 64.0$$
> > 
> > 3. **Check units:** $\\\\Delta n = 2 - (1+1) = 0$, so $K_c$ has **no units**.
> > 
> > 4. **Interpretation:** $K_c = 64.0 \\\\gg 1$, so equilibrium lies to the right; HI is the dominant species.
`,
        keyPoints: [
            'Only temperature changes the value of Kc.',
            'Pure solids and pure liquids are not included in the Kc expression as their concentrations are constant.'
        ]
    },
    {
        id: 'equilibrium-constant-kp-u4-l3',
        title: 'Equilibrium Constant Kp',
        type: 'text',
        content: `
> [!NOTE]
> ### 💨 Partial Pressure and Mole Fractions
> For gaseous equilibria, equilibrium can be expressed in terms of **partial pressures**.
> 
> * **Partial Pressure ($p_i$):** The pressure that a gas would exert if it alone occupied the entire volume.
>   $$p_i = \\\\chi_i \\\\times P_{\\\\text{total}}$$
> * **Mole Fraction ($\\\\chi_i$):** The ratio of moles of species $i$ to the total moles of all gases.
>   $$\\\\chi_i = \\\\frac{n_i}{n_{\\\\text{total}}}$$
> * **Total Pressure:** $P_{\\\\text{total}} = \\\\sum p_i$

> [!IMPORTANT]
> ### 🧮 The Equilibrium Constant $K_p$
> For $a\\\\text{A}\\\\text{(g)} + b\\\\text{B}\\\\text{(g)} \\\\rightleftharpoons c\\\\text{C}\\\\text{(g)} + d\\\\text{D}\\\\text{(g)}$:
> $$K_p = \\\\frac{(p_\\\\text{C})^c (p_\\\\text{D})^d}{(p_\\\\text{A})^a (p_\\\\text{B})^b}$$
> 
> Units of $K_p$ depend on $\\\\Delta n = (c + d) - (a + b)$:
> * $\\\\Delta n = 0$: No units.
> * $\\\\Delta n = +1$: Units = $\\\\text{Pa}$ or $\\\\text{kPa}$ or $\\\\text{atm}$ depending on units used for pressure.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating $K_p$ from Mole Data
> **Question:** At equilibrium, a mixture of $\\\\text{N}_2\\\\text{(g)}$, $\\\\text{H}_2\\\\text{(g)}$, and $\\\\text{NH}_3\\\\text{(g)}$ contains 0.5 mol $\\\\text{N}_2$, 1.5 mol $\\\\text{H}_2$, and 1.0 mol $\\\\text{NH}_3$ at a total pressure of $300\\\\text{ kPa}$. Calculate $K_p$ for the equilibrium:
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{NH}_3\\\\text{(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate total moles:**
> >    $$n_{\\\\text{total}} = 0.5 + 1.5 + 1.0 = 3.0\\\\text{ mol}$$
> > 
> > 2. **Calculate mole fractions:**
> >    $$\\\\chi(\\\\text{N}_2) = \\\\frac{0.5}{3.0} = \\\\frac{1}{6} \\\\quad \\\\chi(\\\\text{H}_2) = \\\\frac{1.5}{3.0} = \\\\frac{1}{2} \\\\quad \\\\chi(\\\\text{NH}_3) = \\\\frac{1.0}{3.0} = \\\\frac{1}{3}$$
> > 
> > 3. **Calculate partial pressures:**
> >    $$p(\\\\text{N}_2) = \\\\frac{1}{6} \\\\times 300 = 50\\\\text{ kPa}$$
> >    $$p(\\\\text{H}_2) = \\\\frac{1}{2} \\\\times 300 = 150\\\\text{ kPa}$$
> >    $$p(\\\\text{NH}_3) = \\\\frac{1}{3} \\\\times 300 = 100\\\\text{ kPa}$$
> > 
> > 4. **Write $K_p$ expression and substitute:**
> >    $$K_p = \\\\frac{(p_{\\\\text{NH}_3})^2}{(p_{\\\\text{N}_2})(p_{\\\\text{H}_2})^3}$$
> >    $$K_p = \\\\frac{(100)^2}{(50)(150)^3} = \\\\frac{10000}{50 \\\\times 3375000} = \\\\frac{10000}{168750000} = 5.93 \\\\times 10^{-5}\\\\text{ kPa}^{-2}$$
`,
        keyPoints: [
            'For Kp, use partial pressures in the same units (Pa, kPa, or atm) consistently throughout the calculation.',
            'Kp = Kc × (RT)^Δn, where Δn is the change in moles of gas.'
        ]
    },
    {
        id: 'le-chatelier-kc-u4-l3',
        title: "Le Chatelier's Principle & K",
        type: 'text',
        content: `
> [!BOX]
> ### 📊 How Changes Affect Equilibrium Position and K Values
> | Change | Effect on Position | Effect on $K$ |
> | :--- | :--- | :--- |
> | Increase concentration of reactant | Shifts right (towards products) | No change |
> | Decrease concentration of product | Shifts right (towards products) | No change |
> | Increase pressure (decrease volume) | Shifts towards fewer moles of gas | No change |
> | Increase temperature (exothermic rxn) | Shifts left (towards reactants) | $K$ decreases |
> | Increase temperature (endothermic rxn) | Shifts right (towards products) | $K$ increases |
> | Add catalyst | Faster equilibrium reached | No change |

> [!CAUTION]
> ### 🛑 Key Distinction
> **Catalysts** do not change the equilibrium position or the value of $K$. They only increase the rate at which equilibrium is reached by providing an alternative reaction pathway with a lower activation energy.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Effects on $K_c$
> **Question:** The following equilibrium is exothermic in the forward direction:
> $$2\\\\text{SO}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\rightleftharpoons 2\\\\text{SO}_3\\\\text{(g)} \\\\quad \\\\Delta H^\\\\theta = -196\\\\text{ kJ mol}^{-1}$$
> (a) Predict how $K_c$ changes when the temperature is increased.
> (b) Predict how $K_c$ changes when a vanadium(V) oxide catalyst is added.
> (c) Predict how $K_c$ changes when the pressure is doubled.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Effect of increased temperature:**
> >    * The forward reaction is exothermic ($\\\\Delta H^\\\\theta = -196\\\\text{ kJ mol}^{-1}$).
> >    * Increasing temperature shifts the equilibrium to the left (the endothermic direction, favoring $\\\\text{SO}_2$ and $\\\\text{O}_2$).
> >    * Equilibrium shifts left means fewer products and more reactants, so $K_c$ **decreases**.
> > 
> > **(b) Effect of a catalyst:**
> >    * A catalyst only speeds up the forward and reverse reactions equally.
> >    * It does not alter the equilibrium position or concentrations at equilibrium.
> >    * Therefore, $K_c$ is **unchanged**.
> > 
> > **(c) Effect of increased pressure:**
> >    * There are 3 moles of gas on the left ($2 + 1$) and 2 moles of gas on the right.
> >    * Increased pressure shifts equilibrium to the right (towards fewer moles of gas), increasing $[\\\\text{SO}_3]$.
> >    * However, pressure does **not** change the value of $K_c$ itself.
`,
        keyPoints: [
            'Kc only changes when temperature changes — never with concentration, pressure, or catalyst changes.',
            'For exothermic reactions, increasing temperature decreases Kc; for endothermic reactions, increasing temperature increases Kc.'
        ]
    }
];
