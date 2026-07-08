import { LessonPart } from '../../../registry';

export const lessonTitle = "Acid-Base Equilibria";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 15: Acid-Base Equilibria
This lesson covers the Brønsted-Lowry acid-base theory, pH calculations for strong and weak acids and bases, the ionic product of water (Kw), Ka and pKa, and buffer solutions.
`;

export const parts: LessonPart[] = [
    {
        id: 'bronsted-lowry-ph-u4-l4',
        title: 'Brønsted-Lowry Theory & pH',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Brønsted-Lowry Acid-Base Theory
> * **Brønsted-Lowry Acid:** A proton ($\\\\text{H}^+$) **donor**.
> * **Brønsted-Lowry Base:** A proton ($\\\\text{H}^+$) **acceptor**.
> * **Conjugate Acid-Base Pair:** Two species that differ by a single proton ($\\\\text{H}^+$).
>   * When an acid donates a $\\\\text{H}^+$, it forms its **conjugate base**.
>   * When a base accepts a $\\\\text{H}^+$, it forms its **conjugate acid**.
> 
> Example: $\\\\text{CH}_3\\\\text{COOH} + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COO}^- + \\\\text{H}_3\\\\text{O}^+$
>    * Acid 1: $\\\\text{CH}_3\\\\text{COOH}$ / Conjugate Base 1: $\\\\text{CH}_3\\\\text{COO}^-$
>    * Base 2: $\\\\text{H}_2\\\\text{O}$ / Conjugate Acid 2: $\\\\text{H}_3\\\\text{O}^+$

> [!IMPORTANT]
> ### 🧮 The pH Scale
> pH is defined as the negative logarithm (base 10) of the hydrogen ion concentration:
> $$\\\\text{pH} = -\\\\log_{10}[\\\\text{H}^+]$$
> 
> Rearranging to find $[\\\\text{H}^+]$ from pH:
> $$[\\\\text{H}^+] = 10^{-\\\\text{pH}}$$
> 
> **pH of Strong Acids:** Strong acids fully dissociate, so $[\\\\text{H}^+]$ = initial acid concentration:
> $$\\\\text{HCl(aq)} \\\\rightarrow \\\\text{H}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)}$$
> * For $0.10\\\\text{ mol dm}^{-3}$ HCl: $[\\\\text{H}^+] = 0.10\\\\text{ mol dm}^{-3}$
> * $\\\\text{pH} = -\\\\log(0.10) = 1.00$

> [!BOX]
> ### 🌡️ The Ionic Product of Water ($K_w$)
> Water undergoes slight self-ionisation:
> $$\\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{OH}^-\\\\text{(aq)}$$
> $$K_w = [\\\\text{H}^+][\\\\text{OH}^-]$$
> * At $298\\\\text{ K}$: $K_w = 1.00 \\\\times 10^{-14}\\\\text{ mol}^2\\\\text{ dm}^{-6}$
> * At $298\\\\text{ K}$, pure water: $[\\\\text{H}^+] = [\\\\text{OH}^-] = 1.00 \\\\times 10^{-7}\\\\text{ mol dm}^{-3}$, giving $\\\\text{pH} = 7.00$
> * $K_w$ increases with temperature (self-ionisation is endothermic), so neutral pH decreases below 7 at higher temperatures.

> [!IMPORTANT]
> ### 🧮 pH of Strong Bases
> For a strong base like $\\\\text{NaOH}$ that fully dissociates:
> $$[\\\\text{OH}^-] = [\\\\text{NaOH}]$$
> 
> Use $K_w$ to find $[\\\\text{H}^+]$, then calculate pH:
> $$[\\\\text{H}^+] = \\\\frac{K_w}{[\\\\text{OH}^-]}$$
> $$\\\\text{pH} = -\\\\log[\\\\text{H}^+]$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: pH of a Strong Base
> **Question:** Calculate the pH of $0.050\\\\text{ mol dm}^{-3}$ sodium hydroxide solution at $298\\\\text{ K}$ ($K_w = 1.00 \\\\times 10^{-14}\\\\text{ mol}^2\\\\text{ dm}^{-6}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\\\text{OH}^-]$** (NaOH fully dissociates):
> >    $$[\\\\text{OH}^-] = 0.050\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Find $[\\\\text{H}^+]$ using $K_w$:**
> >    $$[\\\\text{H}^+] = \\\\frac{K_w}{[\\\\text{OH}^-]} = \\\\frac{1.00 \\\\times 10^{-14}}{0.050} = 2.00 \\\\times 10^{-13}\\\\text{ mol dm}^{-3}$$
> > 
> > 3. **Calculate pH:**
> >    $$\\\\text{pH} = -\\\\log(2.00 \\\\times 10^{-13}) = 12.70$$
`,
        keyPoints: [
            'Strong acids (HCl, H₂SO₄, HNO₃) fully dissociate — [H⁺] equals the acid concentration.',
            'pOH + pH = 14 only at 298 K (when Kw = 1.00 × 10⁻¹⁴).'
        ]
    },
    {
        id: 'weak-acids-ka-pka-u4-l4',
        title: 'Weak Acids, Ka & pKa',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔬 Weak Acids and Partial Dissociation
> Weak acids only partially dissociate in aqueous solution, establishing an equilibrium:
> $$\\\\text{HA(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{A}^-\\\\text{(aq)}$$
> 
> The **acid dissociation constant** $K_a$ describes this equilibrium:
> $$K_a = \\\\frac{[\\\\text{H}^+][\\\\text{A}^-]}{[\\\\text{HA}]}$$
> 
> * **Units:** $\\\\text{mol dm}^{-3}$
> * **Large $K_a$:** Strong acid (highly dissociated).
> * **Small $K_a$:** Weak acid (poorly dissociated).

> [!IMPORTANT]
> ### 🧮 pKa
> $$\\\\text{p}K_a = -\\\\log_{10}K_a \\\\quad \\\\Leftrightarrow \\\\quad K_a = 10^{-\\\\text{p}K_a}$$
> * **Lower pKa** = stronger acid (higher $K_a$, more dissociated).
> * **Higher pKa** = weaker acid.

> [!BOX]
> ### 📋 Assumptions for Weak Acid pH Calculation
> To simplify pH calculations for weak acids, we make two assumptions:
> 1. The amount of $\\\\text{HA}$ that dissociates is **negligible** compared to the initial concentration.
>    * This means $[\\\\text{HA}]_{\\\\text{eq}} \\\\approx [\\\\text{HA}]_{\\\\text{initial}} = c$
> 2. The contribution of $[\\\\text{H}^+]$ from water self-ionisation is negligible.
>    * This means $[\\\\text{H}^+] = [\\\\text{A}^-]$
> 
> These assumptions give the simplified formula:
> $$[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$$
> 
> Where $c$ = initial concentration of the weak acid.

> [!EXAMPLE]
> #### 📝 Worked Example 1: pH of a Weak Acid
> **Question:** Calculate the pH of $0.100\\\\text{ mol dm}^{-3}$ ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$), given $K_a = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the simplified weak acid formula:**
> >    $$[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$$
> >    $$[\\\\text{H}^+] = \\\\sqrt{1.74 \\\\times 10^{-5} \\\\times 0.100}$$
> >    $$[\\\\text{H}^+] = \\\\sqrt{1.74 \\\\times 10^{-6}} = 1.319 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Calculate pH:**
> >    $$\\\\text{pH} = -\\\\log(1.319 \\\\times 10^{-3}) = 2.88$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Finding Ka from pH
> **Question:** A $0.200\\\\text{ mol dm}^{-3}$ solution of a weak acid HA has a pH of $3.35$. Calculate $K_a$ for this acid
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\\\text{H}^+]$ from pH:**
> >    $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-3.35} = 4.467 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$$
> > 
> > 2. **Use the assumption $[\\\\text{H}^+] = [\\\\text{A}^-]$ and apply $K_a$ expression:**
> >    $$K_a = \\\\frac{[\\\\text{H}^+]^2}{[\\\\text{HA}]} = \\\\frac{(4.467 \\\\times 10^{-4})^2}{0.200}$$
> >    $$K_a = \\\\frac{1.995 \\\\times 10^{-7}}{0.200} = 9.97 \\\\times 10^{-7}\\\\text{ mol dm}^{-3}$$
`,
        keyPoints: [
            'The approximation [H⁺] = √(Ka × c) is only valid if the degree of dissociation is less than 5% of the initial concentration.',
            'pKa = pH only when a weak acid is exactly half-neutralised (i.e. in a buffer where [HA] = [A⁻]).'
        ]
    },
    {
        id: 'buffer-solutions-u4-l4',
        title: 'Buffer Solutions',
        type: 'text',
        content: `
> [!NOTE]
> ### 🛡️ What is a Buffer Solution?
> A **buffer solution** resists changes in pH when small amounts of acid or base are added to it.
> 
> **Acidic buffer:** A mixture of a weak acid (HA) and its conjugate base salt ($\\\\text{A}^-$).
> * Example: Ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) + sodium ethanoate ($\\\\text{CH}_3\\\\text{COONa}$)
> 
> **Basic buffer:** A mixture of a weak base and its conjugate acid salt.
> * Example: Ammonia ($\\\\text{NH}_3$) + ammonium chloride ($\\\\text{NH}_4\\\\text{Cl}$)

> [!TIP]
> ### 🧪 How an Acidic Buffer Works
> **The key equilibrium:**
> $$\\\\text{HA(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{A}^-\\\\text{(aq)}$$
> 
> The buffer contains a **large reservoir** of both HA and A⁻:
> * **When acid is added ($\\\\text{H}^+$ added):**
>   * The large reserve of $\\\\text{A}^-$ (conjugate base) reacts with the added $\\\\text{H}^+$:
>     $$\\\\text{A}^-\\\\text{(aq)} + \\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{HA(aq)}$$
>   * The equilibrium shifts left, converting $\\\\text{H}^+$ to $\\\\text{HA}$, so pH barely changes.
> * **When base is added ($\\\\text{OH}^-$ added):**
>   * The large reserve of $\\\\text{HA}$ reacts with the added $\\\\text{OH}^-$:
>     $$\\\\text{HA(aq)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{A}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)}$$
>   * The equilibrium shifts right, consuming $\\\\text{OH}^-$, so pH barely changes.

> [!IMPORTANT]
> ### 🧮 Henderson-Hasselbalch Equation
> The pH of a buffer solution can be calculated using:
> $$\\\\text{pH} = \\\\text{p}K_a + \\\\log\\\\left(\\\\frac{[\\\\text{A}^-]}{[\\\\text{HA}]}\\\\right)$$
> 
> Or equivalently (derived from $K_a$ expression using the approximation):
> $$[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{HA}]}{[\\\\text{A}^-]}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Buffer pH
> **Question:** A buffer solution contains $0.300\\\\text{ mol dm}^{-3}$ ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$) and $0.150\\\\text{ mol dm}^{-3}$ sodium ethanoate ($\\\\text{CH}_3\\\\text{COONa}$). Calculate the pH of the buffer. ($K_a(\\\\text{CH}_3\\\\text{COOH}) = 1.74 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the concentrations of the acid (HA) and conjugate base (A⁻):**
> >    * $[\\\\text{HA}] = [\\\\text{CH}_3\\\\text{COOH}] = 0.300\\\\text{ mol dm}^{-3}$
> >    * $[\\\\text{A}^-] = [\\\\text{CH}_3\\\\text{COO}^-] = 0.150\\\\text{ mol dm}^{-3}$ (from the fully dissociated salt)
> > 
> > 2. **Apply the buffer equation:**
> >    $$[\\\\text{H}^+] = K_a \\\\times \\\\frac{[\\\\text{HA}]}{[\\\\text{A}^-]}$$
> >    $$[\\\\text{H}^+] = 1.74 \\\\times 10^{-5} \\\\times \\\\frac{0.300}{0.150}$$
> >    $$[\\\\text{H}^+] = 1.74 \\\\times 10^{-5} \\\\times 2.00 = 3.48 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$$
> > 
> > 3. **Calculate pH:**
> >    $$\\\\text{pH} = -\\\\log(3.48 \\\\times 10^{-5}) = 4.46$$
`,
        keyPoints: [
            'A buffer only works effectively when both [HA] and [A⁻] are present in significant amounts (not just one).',
            'When [HA] = [A⁻] in a buffer, pH = pKa — this is the half-equivalence point in a titration.'
        ]
    }
];
