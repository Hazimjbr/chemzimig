import { LessonPart } from '../../../registry';

export const lessonTitle = "Topic 14: Acid-Base Equilibria";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 14: Acid-Base Equilibria
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
> Johannes Nicolaus Brønsted and Thomas Martin Lowry independently proposed a theory defining acids and bases by how they react with each other:
> 
> * **Brønsted-Lowry Acid:** A substance that can donate a proton — a **proton donor** (hydrogen ion, $\\text{H}^+$)
> * **Brønsted-Lowry Base:** A substance that can accept a proton — a **proton acceptor**
> * **Proton Transfer:** Acid-base reactions involve the transfer of a proton from an acid to a base.
> * **Lone Pairs:** To accept a proton, a base must contain an atom with a lone pair of electrons to form a dative covalent bond with the incoming proton.

> [!IMPORTANT]
> ### 👥 Conjugate Acid-Base Pairs
> When a Brønsted-Lowry acid donates a proton, it forms a species that can accept a proton in the reverse reaction. This species is called its **conjugate base**.
> Similarly, when a base accepts a proton, it forms its **conjugate acid**.
> Two species that differ by a single proton ($\\text{H}^+$) are called a **conjugate acid-base pair**.
> 
> **Example 1: Hydrochloric acid in water**
> $$\\text{HCl(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{H₃O}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$
> * **Forward Reaction:** $\\text{HCl}$ donates a proton to $\\text{H₂O}$, so $\\text{HCl}$ is the acid and $\\text{H₂O}$ is the base.
> * **Reverse Reaction:** $\\text{H₃O}^+$ donates a proton to $\\text{Cl}^-$, so $\\text{H₃O}^+$ is the conjugate acid and $\\text{Cl}^-$ is the conjugate base.
> * **Pairs:** Conjugate pair 1 is $\\text{HCl}$ / $\\text{Cl}^-$; Conjugate pair 2 is $\\text{H₃O}^+$ / $\\text{H₂O}$
> 
> **Example 2: Ammonia in water**
> $$\\text{NH₃(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{NH₄}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> * **Forward Reaction:** $\\text{H₂O}$ donates a proton to $\\text{NH₃}$, so $\\text{H₂O}$ is the acid and $\\text{NH₃}$ is the base.
> * **Reverse Reaction:** $\\text{NH₄}^+$ donates a proton to $\\text{OH}^-$, so $\\text{NH₄}^+$ is the conjugate acid and $\\text{OH}^-$ is the conjugate base.
> * **Pairs:** Conjugate pair 1 is $\\text{NH₄}^+$ / $\\text{NH₃}$; Conjugate pair 2 is $\\text{H₂O}$ / $\\text{OH}^-$

> [!BOX]
> ### 🌀 Amphiprotic vs Amphoteric
> Some substances can act as both acids and bases:
> 
> * **Amphoteric:** Any substance that can react as both an acid and a base (e.g., aluminium oxide $\\text{Al₂O₃}$ reacts with both acids and bases, though it does not transfer protons in all cases)
> * **Amphiprotic:** A substance that can *both* donate and accept protons (e.g., water $\\text{H₂O}$, hydrogen carbonate $\\text{HCO₃}^-$, and hydrogen sulfate $\\text{HSO₄}^-$)
> * **Key Rule:** All amphiprotic substances are amphoteric, but not all amphoteric substances are amphiprotic.

> [!IMPORTANT]
> ### 🧮 Acid-Base Proticity (Monoprotic vs Polyprotic)
> * **Monoprotic (Monobasic) Acids:** Can donate only one proton per molecule (e.g., $\\text{HCl}$, $\\text{HNO₃}$)
> * **Diprotic (Dibasic) Acids:** Can donate two protons per molecule, dissociating in two sequential steps (e.g., sulfuric acid, $\\text{H₂SO₄}$):
>   * **Step 1:** $\\text{H₂SO₄(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{HSO₄}^-\\text{(aq)}$ (Fully dissociated)
>   * **Step 2:** $\\text{HSO₄}^-\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{SO₄}^{2-}\\text{(aq)}$ (Partially dissociated)
> * **Diprotic (Diacidic) Bases:** Can accept up to two protons per formula unit (e.g., carbonate ion, $\\text{CO₃}^{2-}$):
>   * **Step 1:** $\\text{CO₃}^{2-}\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{HCO₃}^-\\text{(aq)}$
>   * **Step 2:** $\\text{HCO₃}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightleftharpoons \\text{H₂CO₃(aq)}$

> [!BOX]
> ### 🧪 Nitric Acid as a Base (The Nitrating Mixture)
> In organic chemistry, benzene undergoes nitration using a mixture of concentrated sulfuric acid and concentrated nitric acid. In this mixture:
> $$\\text{H₂SO₄} + \\text{HNO₃} \\rightleftharpoons \\text{HSO₄}^- + \\text{H₂NO₃}^+$$
> 
> * **Acid 1:** $\\text{H₂SO₄}$ (acts as an acid because it donates a proton to nitric acid)
> * **Base 2:** Concentrated nitric acid, $\\text{HNO₃}$
> * **Conjugate Base 1:** $\\text{HSO₄}^-$
> * **Conjugate Acid 2:** $\\text{H₂NO₃}^+$ (which subsequently dissociates to form the $\\text{NO₂}^+$ electrophile)

> [!IMPORTANT]
> ### 🧮 Strong vs Weak Acids & The pH Scale
> * **Strong Acids:** Almost completely dissociated in aqueous solution:
>   $$\\text{HCl(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$
>   * For strong acids, $[\\text{H}^+] = \\text{acid concentration}$
> * **Weak Acids:** Only partially dissociated (typically less than 10%) in aqueous solution:
>   $$\\text{CH₃COOH(aq)} \\rightleftharpoons \\text{CH₃COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$$
> * **The pH Formula:**
>   $$\\text{pH} = -\\log_{10}[\\text{H}^+] \\quad \\Leftrightarrow \\quad [\\text{H}^+] = 10^{-\\text{pH}}$$

> [!BOX]
> ### 🌡️ The Ionic Product of Water ($K_w$)
> Water self-ionises:
> $$\\text{H₂O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> $$K_w = [\\text{H}^+\\text{(aq)}][\\text{OH}^-\\text{(aq)}]$$
> 
> * **At 298 K:** $K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$, giving neutral $\\text{pH} = 7.00$
> * **$pK_w$ relation:** $\\text{p}K_w = -\\log_{10}K_w = 14.00\\text{ (at } 298\\text{ K)}$
> 
> #### Table B: Values of Kw and pKw at Various Temperatures
> | Temperature (T / K) | Kw / mol² dm⁻⁶ | pKw | Neutral pH |
> | :--- | :--- | :--- | :--- |
> | 273 K | $1.14 \\times 10^{-15}$ | $14.94$ | $7.47$ |
> | 283 K | $2.93 \\times 10^{-15}$ | $14.53$ | $7.27$ |
> | 288 K | $4.52 \\times 10^{-15}$ | $14.34$ | $7.17$ |
> | 293 K | $6.81 \\times 10^{-15}$ | $14.17$ | $7.08$ |
> | 298 K | $1.00 \\times 10^{-14}$ | $14.00$ | $7.00$ |
> | 303 K | $1.47 \\times 10^{-14}$ | $13.83$ | $6.92$ |
> | 308 K | $2.31 \\times 10^{-14}$ | $13.68$ | $6.84$ |
> | 313 K | $2.92 \\times 10^{-14}$ | $13.53$ | $6.77$ |
> 
> * **Physical meaning:** Since water self-ionisation is an **endothermic** process, increasing temperature shifts the equilibrium to the right, raising $K_w$ and yielding a higher concentration of both $\\text{H}^+$ and $\\text{OH}^-$ ions. Thus, neutral water at higher temperatures has a pH **less than 7.00**.

> [!BOX]
> ### 🔬 pH and Activity & Concentrated Acids
> * **pH and Activity:** In concentrated acid solutions, effective concentration (activity) is lower than actual concentration due to ion interactions. E.g., $1.00\\text{ mol dm}^{-3}$ HCl has active $[\\text{H}^+] = 0.81\\text{ mol dm}^{-3}$ (pH = 0.09).
> * Concentrated acids can have negative pH (e.g., pH of $-0.74$ for $10.00\\text{ mol dm}^{-3}$ HCl that is 55% dissociated).

> [!EXAMPLE]
> #### 📝 Worked Example 1: pH of a Strong Base
> **Question:** Calculate pH of $0.0500\\text{ mol dm}^{-3}$ KOH at $298\\text{ K}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{OH}^-] = 0.0500\\text{ mol dm}^{-3}$
> > 2. $[\\text{H}^+] = \\frac{K_w}{[\\text{OH}^-]} = \\frac{1.00 \\times 10^{-14}}{0.0500} = 2.00 \\times 10^{-13}\\text{ mol dm}^{-3}$
> > 3. $\\text{pH} = -\\log(2.00 \\times 10^{-13}) = 12.70$



> [!EXAMPLE]
> #### 📝 Worked Example 2: Conjugate Acids
> **Question:** Give the formula of the conjugate acid of: (a) $\\text{CH₃COO}^-$, (b) $\\text{CH₃NH₂}$, (c) $\\text{HSO₄}^-$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{CH₃COO}^- + \\text{H}^+ \\rightarrow \\text{CH₃COOH}$
> * (b) $\\text{CH₃NH₂} + \\text{H}^+ \\rightarrow \\text{CH₃NH₃}^+$
> * (c) $\\text{HSO₄}^- + \\text{H}^+ \\rightarrow \\text{H₂SO₄}$



> [!EXAMPLE]
> #### 📝 Worked Example 3: Conjugate Bases
> **Question:** Give conjugate base of: (a) $\\text{HClO₄}$, (b) $\\text{H₃O}^+$, (c) $\\text{HSO₄}^-$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{ClO₄}^-$
> * (b) $\\text{H₂O}$
> * (c) $\\text{SO₄}^{2-}$



> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Conjugate Pairs
> **Question:** Identify conjugate pairs.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{H₂CO₃}$ / $\\text{HCO₃}^-$ (conjugate acid-base pair 1) and $\\text{H₃O}^+$ / $\\text{H₂O}$ (conjugate acid-base pair 2)
> * (b) $\\text{HCO₃}^-$ / $\\text{CO₃}^{2-}$ (conjugate acid-base pair 1) and $\\text{H₃O}^+$ / $\\text{H₂O}$ (conjugate acid-base pair 2)
> * (c) $\\text{HNO₃}$ / $\\text{NO₃}^-$ (conjugate acid-base pair 1) and $\\text{CH₃COOH₂}^+$ / $\\text{CH₃COOH}$ (conjugate acid-base pair 2)



> [!EXAMPLE]
> #### 📝 Worked Example 5: Explaining Acid-Base Reactions
> **Question:** Explain why $\\text{NH₄}^+ + \\text{NH₂}^- \\rightarrow 2\\text{NH₃}$ is an acid-base reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $\\text{NH₄}^+$ donates a proton, acting as a Brønsted-Lowry acid.
> 2. $\\text{NH₂}^-$ accepts a proton, acting as a Brønsted-Lowry base.
> 3. Since proton transfer is involved, this is an acid-base reaction.



> [!EXAMPLE]
> #### 📝 Worked Example 6: pH of Strong Monoprotic Acids (Checkpoint Q1)
> **Question:** Calculate the pH of: (a) $0.0100\\text{ mol dm}^{-3}$ HI, (b) $0.500\\text{ mol dm}^{-3}$ $\\text{HNO₃}$, (c) $0.00405\\text{ mol dm}^{-3}$ HCl.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{pH} = -\\log_{10}(0.0100) = 2.00$
> * (b) $\\text{pH} = -\\log_{10}(0.500) = 0.30$
> * (c) $\\text{pH} = -\\log_{10}(0.00405) = 2.39$



> [!EXAMPLE]
> #### 📝 Worked Example 7: pH of Concentrated Partially Dissociated Acid
> **Question:** Calculate pH of $10.00\\text{ mol dm}^{-3}$ HCl, 55% dissociated.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 0.55 \\times 10.00 = 5.50\\text{ mol dm}^{-3}$
> 2. $\\text{pH} = -\\log(5.50) = -0.74$



> [!EXAMPLE]
> #### 📝 Worked Example 8: Calculating [H⁺] from pH
> **Question:** Calculate $[\\text{H}^+]$ for solution of pH 4.80.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. $[\\text{H}^+] = 10^{-4.80} = 1.58 \\times 10^{-5}\\text{ mol dm}^{-3}$



> [!EXAMPLE]
> #### 📝 Worked Example 9: pH of a Mixture of Strong Acid and Base (Checkpoint Q2)
> **Question:** Calculate pH of mixture of $20.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ HCl and $5.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ NaOH.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. $\\text{Moles H}^+ = 1.00 \\times 0.0200 = 0.0200\\text{ mol}$, moles $\\text{OH}^- = 1.00 \\times 0.0050 = 0.0050\\text{ mol}$.
> 2. $\\text{Excess H}^+ = 0.0200 - 0.0050 = 0.0150\\text{ mol}$.
> 3. $\\text{Total Volume} = 20.0 + 5.0 = 25.0\\text{ cm}^3 = 0.0250\\text{ dm}^3$.
> 4. $[\\text{H}^+] = \\frac{0.0150}{0.0250} = 0.600\\text{ mol dm}^{-3} \\rightleftharpoons \\text{pH} = -\\log_{10}(0.600) = 0.22$



> [!IMPORTANT]
> ### 🧮 Calculating the pH of a Dibasic Acid
> Sulfuric acid ($\\text{H₂SO₄}$) dissociates:
> * $\\text{Stage 1: H₂SO₄(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{HSO₄}^-\\text{(aq)}$ (100% dissociated)
> * $\\text{Stage 2: HSO₄}^-\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{SO₄}^{2-}\\text{(aq)}$ ($K_a = 0.0100\\text{ mol dm}^{-3}$)
> 
> For a $0.500\\text{ mol dm}^{-3}$ solution of $\\text{H₂SO₄}$:
> 1. Stage 1 yields $[\\text{H}^+] = 0.500\\text{ mol dm}^{-3}$ and $[\\text{HSO₄}^-] = 0.500\\text{ mol dm}^{-3}$
> 2. Let $x$ be the Stage 2 $\\text{H}^+$ concentration:
>    $$K_a = \\frac{(0.500 + x)x}{0.500 - x} = 0.0100$$
> 3. Solving the quadratic gives $x = 0.0098\\text{ mol dm}^{-3}$
> 4. Total $[\\text{H}^+] = 0.5098\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log(0.5098) = 0.293$



> [!EXAMPLE]
> #### 📝 Worked Example 10: pH of Water at Different Temperatures (Checkpoint Q1)
> **Question:** Calculate water pH at (i) $298\\text{ K}$ and (ii) $293\\text{ K}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(i) At $298\\text{ K}$:** $[\\text{H}^+] = 1.00 \\times 10^{-7}\\text{ mol dm}^{-3} \\implies \\text{pH} = 7.00$
> * **(ii) At $293\\text{ K}$:** $[\\text{H}^+] = \\sqrt{6.81 \\times 10^{-15}} = 8.252 \\times 10^{-8}\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log(8.252 \\times 10^{-8}) = 7.08$
> * **Neutrality:** Since $[\\text{H}^+] = [\\text{OH}^-]$ holds true at all temperatures in pure water, it remains neutral.
> * **Endothermic nature:** Heating water from $293\\text{ K}$ to $298\\text{ K}$ increases $K_w$. According to Le Chatelier's Principle, this shifts the equilibrium to the endothermic direction. Hence, self-ionisation is endothermic.



> [!EXAMPLE]
> #### 📝 Worked Example 11: pH of Strong Bases (Checkpoint Q2)
> **Question:** Calculate the pH at $298\\text{ K}$ of: (a) $0.0100$ NaOH, (b) $0.0500$ Ca(OH)2, (c) $0.0315$ KOH.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) NaOH:** $[\\text{OH}^-] = 0.0100 \\implies \\text{pOH} = 2.00 \\implies \\text{pH} = 12.00$
> * **(b) $\\text{Ca(OH)₂}$:** Releases 2 moles of hydroxide: $[\\text{OH}^-] = 0.100 \\implies \\text{pOH} = 1.00 \\implies \\text{pH} = 13.00$
> * **(c) KOH:** $[\\text{OH}^-] = 0.0315 \\implies \\text{pOH} = 1.50 \\implies \\text{pH} = 12.50$
`,
        keyPoints: [
            'A Brønsted-Lowry acid is a proton donor; a base is a proton acceptor.',
            'Conjugate acid-base pairs differ by exactly one H⁺ ion.',
            'Amphiprotic substances can both donate and accept protons.',
            'Strong acids dissociate fully, whereas weak acids dissociate partially.'
        ],
        equationVisualizer: {
            reactants: [['HCl', '#3b82f6'], ['H₂O', '#10b981']],
            products: [['H₃O⁺', '#ef4444'], ['Cl⁻', '#f59e0b']],
            description: "Proton transfer from hydrochloric acid to water to form hydronium and chloride ions."
        }
    },
    {
        id: 'weak-acids-ka-pka-u4-l4',
        title: 'Weak Acids, Ka & pKa',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔬 Weak Acids and Partial Dissociation
> Weak acids only partially dissociate in aqueous solution, establishing an equilibrium:
> $$\\text{HA(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{A}^-\\text{(aq)}$$
> 
> The **acid dissociation constant** $K_a$ describes this equilibrium:
> $$K_a = \\frac{[\\text{H}^+\\text{(aq)}][\\text{A}^-\\text{(aq)}]}{[\\text{HA(aq)}]}$$
> 
> * **Units:** $\\text{mol dm}^{-3}$
> * **Large $K_a$:** Stronger acid (more dissociated).
> * **Small $K_a$:** Weaker acid (less dissociated).
> 
> **Standard pKa Definition:**
> $$\\text{p}K_a = -\\log_{10}K_a \\quad \\Leftrightarrow \\quad K_a = 10^{-\\text{p}K_a}$$
> * **Lower pKa** = stronger acid.
> * **Higher pKa** = weaker acid.

> [!BOX]
> ### 📊 Table A: Weak Monobasic Organic Acids (at 298 K)
> | Name of Acid | Formula of Acid | Ka / mol dm⁻³ | pKa |
> | :--- | :--- | :--- | :--- |
> | propanoic acid | $\\text{CH₃CH₂COOH}$ | $1.35 \\times 10^{-5}$ | $4.87$ |
> | ethanoic acid | $\\text{CH₃COOH}$ | $1.74 \\times 10^{-5}$ | $4.76$ |
> | benzoic acid | $\\text{C₆H₅COOH}$ | $6.31 \\times 10^{-5}$ | $4.20$ |
> | methanoic acid | $\\text{HCOOH}$ | $1.60 \\times 10^{-4}$ | $3.80$ |
> | chloroethanoic acid | $\\text{CH₂ClCOOH}$ | $1.38 \\times 10^{-3}$ | $2.86$ |
> | dichloroethanoic acid | $\\text{CHCl₂COOH}$ | $5.13 \\times 10^{-2}$ | $1.29$ |
> | trichloroethanoic acid | $\\text{CCl₃COOH}$ | $2.24 \\times 10^{-1}$ | $0.65$ |

> [!IMPORTANT]
> ### 🧮 Assumptions for Weak Acid pH Calculations
> To calculate the pH of a weak acid HA of initial concentration $c$, we make two key simplifying assumptions:
> 
> 1. **Negligible dissociation:** We assume the amount of HA that dissociates is extremely small compared to the initial concentration, so:
>    $$[\\text{HA}]_{\\text{eq}} \\approx c$$
> 2. **Negligible water contribution:** We assume all $\\text{H}^+$ ions come solely from HA, so:
>    $$[\\text{H}^+] = [\\text{A}^-]$$
> 
> Combining these into the $K_a$ expression gives:
> $$K_a = \\frac{[\\text{H}^+]^2}{c} \\implies [\\text{H}^+] = \\sqrt{K_a \\times c}$$
> 
> * **Learning Tip:** This simplified approximation is only valid when $K_a$ is very small. If the acid is relatively strong or very dilute, dissociation is not negligible, and the quadratic equation $K_a = [\\text{H}^+]^2 / (c - [\\text{H}^+])$ must be solved.

> [!BOX]
> ### 📊 Comparing Solutions via pH
> Measuring pH of equimolar ($0.100\\text{ mol dm}^{-3}$) solutions at $298\\text{ K}$ demonstrates relative strengths of acids, bases, and salts:
> 
> **Acid Strengths:**
> * $\\text{HCl}$ (strong, pH = 1.00) $\\rightarrow$ $\\text{CHCl₂COOH}$ (pH = 1.14) $\\rightarrow$ $\\text{CH₂ClCOOH}$ (pH = 1.93) $\\rightarrow$ $\\text{HCOOH}$ (pH = 2.38) $\\rightarrow$ $\\text{CH₃COOH}$ (pH = 2.87) $\\rightarrow$ $\\text{CH₃CH₂COOH}$ (pH = 2.93)
> * **Rule:** The higher the pH, the weaker the acid.
> 
> **Base Strengths:**
> * $\\text{NH₃}$ (weak base, pH = 11.13) $\\rightarrow$ $\\text{CH₃NH₂}$ (pH = 11.82) $\\rightarrow$ $\\text{NaOH}$ (strong base, pH = 13.00)
> * **Rule:** The higher the pH, the stronger the base.

> [!IMPORTANT]
> ### 📋 Salt Hydrolysis
> The pH of an aqueous salt solution ($0.100\\text{ mol dm}^{-3}$) at $298\\text{ K}$ depends on the acid-base nature of its parent species:
> 
> | Salt Type | Example | pH | Explanation |
> | :--- | :--- | :--- | :--- |
> | Strong Acid + Strong Base | $\\text{NaCl}$, $\\text{KNO₃}$ | $7.00$ | Neutral. Neither ion hydrolyses water. |
> | Weak Acid + Strong Base | $\\text{CH₃COONa}$ | $8.88$ | Alkaline. Conjugate base hydrolyses water: $\\text{CH₃COO}^- + \\text{H₂O} \\rightleftharpoons \\text{CH₃COOH} + \\text{OH}^-$ |
> | Strong Acid + Weak Base | $\\text{NH₄Cl}$ | $5.13$ | Acidic. Conjugate acid dissociates: $\\text{NH₄}^+ \\rightleftharpoons \\text{NH₃} + \\text{H}^+$ |
> | Weak Acid + Weak Base | $\\text{CH₃COONH₄}$ | $7.00$ | Neutral (since $K_a = K_b = 1.74 \\times 10^{-5}$) |

> [!BOX]
> ### 📉 Effect of Dilution on pH
> * **Strong Acids:** pH increases by exactly **1.0 unit** for each 10-fold dilution (e.g. $0.100\\text{ mol dm}^{-3}$ HCl pH = 1.00; diluted to $0.0100$ pH = 2.00).
>   * *Dilution Limit:* A $1.00 \\times 10^{-8}\\text{ mol dm}^{-3}$ solution of HCl is not pH 8.00. Water self-ionisation contributes $1.00 \\times 10^{-7}\\text{ mol dm}^{-3}$ $\\text{H}^+$, keeping pH close to 7.00 ($\\approx 6.98$).
> * **Weak Acids:** pH increases by approximately **0.5 units** for each 10-fold dilution (e.g. $0.100\\text{ mol dm}^{-3}$ ethanoic acid pH = 2.88; diluted to $0.0100$ pH = 3.38).
>   * *Proof:* Since $[\\text{H}^+] = \\sqrt{K_a \\times c}$, dividing $c$ by 10 divides $[\\text{H}^+]$ by $\\sqrt{10}$. Taking negative logarithms: $\\log_{10}(\\sqrt{10}) = 0.5$ units.

> [!BOX]
> ### 🧪 Core Practical 11 (CP11): Finding Experimental Ka
> We can determine $K_a$ by dissolving benzoic acid in water, diluting to $250\\text{ cm}^3$, and measuring pH:
> 
> * **Sample Results:**
>   * Mass of benzoic acid = $0.49\\text{ g}$
>   * pH of $250\\text{ cm}^3$ solution = $3.00$
> * **Analysis of Results:**
>   1. Molar mass of benzoic acid = $122\\text{ g mol}^{-1}$
>   2. Moles of acid = $\\frac{0.49}{122} = 4.016 \\times 10^{-3}\\text{ mol}$
>   3. Concentration $c = \\frac{4.016 \\times 10^{-3}}{0.250} = 1.607 \\times 10^{-2}\\text{ mol dm}^{-3}$
>   4. $[\\text{H}^+] = 10^{-3.00} = 1.00 \\times 10^{-3}\\text{ mol dm}^{-3}$
>   5. $K_a = \\frac{[\\text{H}^+]^2}{c} = 6.22 \\times 10^{-5}\\text{ mol dm}^{-3}$



> [!EXAMPLE]
> #### 📝 Worked Example 5: Salt Hydrolysis Prediction (Checkpoint Q1 & Q2)
> **Question:** Predict salt neutrality.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) $\\text{NH₄NO₃}$:** **Acidic** (salt of a strong acid $\\text{HNO₃}$ and a weak base; the ammonium ion undergoes partial dissociation: $\\text{NH₄}^+\\text{(aq)} \\rightleftharpoons \\text{NH₃(aq)} + \\text{H}^+\\text{(aq)}$).
> * **(b) $\\text{CH₃COOK}$:** **Alkaline** (salt of weak acid and strong base).
> * **(c) $\\text{NaCl}$:** **Neutral** (salt of strong acid and strong base).



> [!EXAMPLE]
> #### 📝 Worked Example 6: Experimental Ka of Chloroethanoic Acid (Checkpoint Q3)
> **Question:** Calculate $K_a$ for chloroethanoic acid from $1.89\\text{ g}$ dissolved in $50\\text{ cm}^3$ and diluted to $250\\text{ cm}^3$ (pH = 1.99).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. Molar mass of chloroethanoic acid = $94.5\\text{ g mol}^{-1}$
> > 2. Moles of acid = $0.0200\\text{ mol} \\implies c = 0.0800\\text{ mol dm}^{-3}$
> > 3. $[\\text{H}^+] = 10^{-1.99} = 0.01023\\text{ mol dm}^{-3}$
> > 4. $K_a$ (precise) = $\\frac{(0.01023)^2}{0.0800 - 0.01023} = 1.50 \\times 10^{-3}\\text{ mol dm}^{-3}$
`,
        keyPoints: [
            'Ka is the acid dissociation constant and is temperature-dependent.',
            'pKa is a logarithmic index of Ka, where lower pKa indicates a stronger acid.',
            'The simplified formula [H⁺] = √(Ka × c) assumes negligible dissociation of HA.'
        ]
    },
    {
        id: 'titrations-indicators-u4-l4',
        title: 'Titrations & Indicators',
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Acid-Base Titrations & Equivalence Point
> * **Equivalence Point:** The point in a titration where the acid and base have reacted together in the exact stoichiometric proportions.
> * **End Point:** The point in a titration where the indicator undergoes a complete colour change.
> * **Neutralisation vs Equivalence:** The equivalence point is **only pH 7.00** for strong acid-strong base titrations. For weak-strong combinations, the pH at equivalence is determined by salt hydrolysis and is either above or below 7.00.

> [!IMPORTANT]
> ### 📈 The Four pH Titration Curves
> pH curves plot the pH of the solution against the volume of acid/base added from the burette:
> 
> 1. **Strong Acid - Strong Base (e.g. adding HCl to NaOH):**
>    * Start pH is very high ($\\approx 13-14$).
>    * Equivalence point is at exactly **pH 7.00**.
>    * Curve has a very large vertical section (pH range 11.3 to 2.7).
> 2. **Weak Acid - Strong Base (e.g. adding ethanoic acid to NaOH):**
>    * Start pH is high ($\\approx 13-14$).
>    * Equivalence point is **pH > 7** ($\\approx 8-9$) due to alkaline salt hydrolysis.
>    * Curve has a smaller vertical section (pH range 10 to 7).
>    * Past equivalence, it acts as a buffer solution.
> 3. **Strong Acid - Weak Base (e.g. adding HCl to NH₃):**
>    * Start pH is moderately high ($\\approx 10-11$).
>    * Equivalence point is **pH < 7** ($\\approx 5-6$) due to acidic salt hydrolysis.
>    * Curve has a smaller vertical section (pH range 7 to 4).
> 4. **Weak Acid - Weak Base (e.g. adding ethanoic acid to NH₃):**
>    * No steep vertical section; instead, it has a point of inflection.
>    * No chemical indicator can be used. Titration must be followed using temperature (thermometric) or conductivity measurements.

> [!BOX]
> ### 🧪 Indicator Theory
> An indicator is a weak acid ($\\text{HIn}$) that has a different colour from its conjugate base ($\\text{In}^-$):
> $$\\text{HIn(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{In}^-\\text{(aq)}$$
> 
> The indicator constant is defined as:
> $$K_{\\text{In}} = \\frac{[\\text{H}^+][\\text{In}^-]}{[\\text{HIn}]}$$
> 
> * **End Point:** At the end point of the titration, the indicator is halfway through its colour change, meaning $[\\text{HIn}] = [\\text{In}^-]$.
> * Therefore, $[\\text{H}^+] = K_{\\text{In}}$, and the **pH at colour change is equal to $\\text{p}K_{\\text{In}}$**.
> * **Colour Range:** Colour change occurs over a pH range of approximately $\\text{pH} = \\text{p}K_{\\text{In}} \\pm 1.0$
> 
> #### Table C: Common Acid-Base Indicators
> | Indicator | pKIn | pH Range | Acid Colour (HIn) | Base Colour (In⁻) |
> | :--- | :--- | :--- | :--- | :--- |
> | Methyl orange | $3.70$ | $3.10-4.40$ | red | yellow |
> | Bromophenol blue | $4.00$ | $2.80-4.60$ | yellow | blue |
> | Bromothymol blue | $7.00$ | $6.00-7.60$ | yellow | blue |
> | Phenol red | $7.90$ | $6.80-8.40$ | yellow | red |
> | Phenolphthalein | $9.30$ | $8.20-10.00$ | colourless | red |
> 
> **Choosing an Indicator:**
> * An indicator is suitable only if its entire pH transition range lies within the **steep vertical section** of the pH titration curve.

> [!IMPORTANT]
> ### 🧮 Titration Curves with Diprotic Acids
> A diprotic acid ($\\text{H₂X}$) dissociates in two stages:
> $$\\text{H₂X(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{HX}^-\\text{(aq)}$$
> $$\\text{HX}^-\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{X}^{2-}\\text{(aq)}$$
> 
> * **Two Equivalence Points:** The titration curve of a diprotic acid with a strong base exhibits two distinct equivalence points.
> * **Stoichiometric Volumes:** The volume of base required to reach the second equivalence point is exactly **twice** the volume required to reach the first equivalence point.
>   * *Step 1:* $\\text{H₂X} + \\text{NaOH} \\rightarrow \\text{NaHX} + \\text{H₂O}$ (volume $V_1$)
>   * *Step 2:* $\\text{NaHX} + \\text{NaOH} \\rightarrow \\text{Na₂X} + \\text{H₂O}$ (volume $V_2 = 2 V_1$)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydrochloric Acid & Ammonia Titration (Checkpoint Q1)
> **Question:** Ammonia titrated with HCl. Equivalence occurs at $15.0\\text{ cm}^3$ HCl.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Weak base evidence:**
> > * The pH of the mixture past the equivalence point flattens out around pH 10 to 11.
> > * If it were a strong base, the pH would continue rising to 13 or 14.
> > 
> > **(b) Ammonia concentration calculation:**
> > 1. Write the balanced equation: $\\text{HCl} + \\text{NH₃} \\rightarrow \\text{NH₄Cl}$ (1:1 ratio)
> > 2. Moles of HCl = $C \\times V = 0.0200 \\times 0.0250 = 5.00 \\times 10^{-4}\\text{ mol}$
> > 3. Moles of NH₃ reacting = $5.00 \\times 10^{-4}\\text{ mol}$
> > 4. Concentration of NH₃ = $5.00 \\times 10^{-4} / 0.0150 = 0.0333\\text{ mol dm}^{-3}$
> > 
> > **(c) Suitable indicator:**
> * Only **Methyl red** (range 4.2-6.3) falls completely within this vertical region.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Weak Acid-Strong Base Titration Curve (Checkpoint Q2)
> **Question:** Describe ethanoic acid titration with NaOH.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Weak acid pH:**
> > * $[\\text{H}^+] = \\sqrt{K_a \\times c} = 1.319 \\times 10^{-3}\\text{ mol dm}^{-3} \\implies \\text{pH} = 2.88$
> > 
> > **(b) Titration Curve Description:**
> > * Start: pH begins at 2.88.
> > * Equivalence Point: Occurs at exactly $25.0\\text{ cm}^3$ NaOH added, where the pH rises steeply and the midpoint is alkaline ($\\text{pH} \\approx 8.7$)
> > * End: Past $25.0\\text{ cm}^3$, the curve flattens out, approaching a pH of $\approx 12.5$ after $50.0\\text{ cm}^3$ is added.
> > 
> > **(c) Differences with dilute acid ($0.0500$ mol dm⁻³):**
> * 1. The starting pH will be higher ($3.03$ instead of $2.88$).
> * 2. The volume of NaOH required to reach equivalence will be halved ($12.5$ cm3).
`,
        keyPoints: [
            'Equivalence point pH is determined by salt hydrolysis and depends on acid/base strengths.',
            'An indicator is suitable only if its transition range lies within the steep vertical section of the titration curve.',
            'Diprotic acids display two distinct equivalence points on their pH titration curves.'
        ]
    },
    {
        id: 'buffer-solutions-u4-l4',
        title: 'Buffer Solutions',
        type: 'text',
        content: `
> [!NOTE]
> ### 🛡️ What is a Buffer Solution?
> A **buffer solution** minimizes the change in pH when small amounts of acid or base are added to it:
> 
> * **Acidic Buffer:** Prepared by mixing a weak acid (HA) with its conjugate base salt ($\\text{A}^-$), e.g., ethanoic acid ($\\text{CH₃COOH}$) and sodium ethanoate ($\\text{CH₃COONa}$). It maintains a pH less than 7.00.
> * **Basic Buffer:** Prepared by mixing a weak base and its conjugate acid salt, e.g., ammonia ($\\text{NH₃}$) and ammonium chloride ($\\text{NH₄Cl}$). It maintains a pH greater than 7.00.

> [!IMPORTANT]
> ### ⚙️ How Buffer Action Works
> **1. Acidic Buffer (e.g., $\\text{CH₃COOH}$ / $\\text{CH₃COO}^-$):**
> * **Reaction equilibria:**
>   * $\\text{CH₃COOH(aq)} \\rightleftharpoons \\text{CH₃COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$ (Slight dissociation, large reservoir of $\\text{CH₃COOH}$)
>   * $\\text{CH₃COONa(aq)} \\rightarrow \\text{CH₃COO}^-\\text{(aq)} + \\text{Na}^+\\text{(aq)}$ (Complete dissociation, large reservoir of $\\text{CH₃COO}^-$)
> * **When acid ($\\text{H}^+$) is added:**
>   $$\\text{CH₃COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{CH₃COOH(aq)}$$
> * **When base ($\\text{OH}^-$) is added:**
>   $$\\text{CH₃COOH(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{CH₃COO}^-\\text{(aq)} + \\text{H₂O(l)}$$
> 
> **2. Basic Buffer (e.g., $\\text{NH₃}$ / $\\text{NH₄}^+$):**
> * **Reaction equilibrium:** $\\text{NH₄}^+\\text{(aq)} \\rightleftharpoons \\text{NH₃(aq)} + \\text{H}^+\\text{(aq)}$
> * **When acid ($\\text{H}^+$) is added:** $\\text{NH₃(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{NH₄}^+\\text{(aq)}$
> * **When base ($\\text{OH}^-$) is added:** $\\text{NH₄}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{NH₃(aq)} + \\text{H₂O(l)}$

> [!BOX]
> ### 🧮 Mathematical Proof of Buffer Efficiency
> Imagine $1.00\\text{ dm}^3$ of buffer made by mixing equal volumes of $1.00\\text{ mol dm}^{-3}$ ethanoic acid and $1.00\\text{ mol dm}^{-3}$ sodium ethanoate.
> * Due to equal volume mixing, both concentrations are halved to $0.500\\text{ mol dm}^{-3}$ each.
> * Initial pH ($K_a = 1.74 \\times 10^{-5}$):
>   $$[\\text{H}^+] = K_a \\times \\frac{[\\text{acid}]}{[\\text{salt}]} = 1.74 \\times 10^{-5} \\implies \\text{pH} = 4.76$$
> 
> Now add $1.00 \\times 10^{-2}\\text{ mol}$ of HCl ($0.0100\\text{ mol}$ $\\text{H}^+$) to the buffer:
> * The added $\\text{H}^+$ reacts with $\\text{CH₃COO}^-$:
>   * Moles of $\\text{CH₃COOH}$ increases: $0.510\\text{ mol}$
>   * Moles of $\\text{CH₃COO}^-$ decreases: $0.490\\text{ mol}$
> * New $[\\text{H}^+]$ calculation:
>   $$[\\text{H}^+] = 1.74 \\times 10^{-5} \\times \\frac{0.510}{0.490} = 1.81 \\times 10^{-5}\\text{ mol dm}^{-3} \\implies \\text{pH} = 4.74$$
> * The pH dropped by only **0.02 units** (from 4.76 to 4.74)!
> * **Comparison:** Adding $0.0100\\text{ mol}$ of HCl to $1.00\\text{ dm}^3$ of pure water changes pH from 7.00 to 2.00 (a drop of **5.00 units**).

> [!BOX]
> ### 🧮 Henderson-Hasselbalch Equation
> Taking negative logarithms of the rearranged $K_a$ equation yields:
> $$\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{salt}]}{[\\text{acid}]}\\right)$$
> * For a basic buffer: $\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{base}]}{[\\text{conjugate acid}]}\\right)$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Preparing an Acidic Buffer of Specific pH
> **Question:** Prepare pH 5.00 buffer using ethanoic acid and sodium ethanoate.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\text{H}^+]$ from target pH:**
> >    $$[\\text{H}^+] = 10^{-5.00} = 1.00 \\times 10^{-5}\\text{ mol dm}^{-3}$$
> > 2. **Substitute into rearranged Ka expression:**
> >    $$[\\text{H}^+] = K_a \\times \\frac{[\\text{acid}]}{[\\text{salt}]}$$
> > 3. **Solve for the ratio:**
> >    $$\\frac{[\\text{acid}]}{[\\text{salt}]} = 0.575$$
> * Therefore, we mix in ratio of $0.575$ of acid for every $1.00$ of salt.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Preparing a Basic Buffer of Specific pH
> **Question:** Mix NH3 and NH4Cl for pH 9.80 buffer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 1.585 \\times 10^{-10}\\text{ mol dm}^{-3}$
> > 2. $\\frac{[\\text{NH₃}]}{[\\text{NH₄}^+]} = \\frac{K_a}{[\\text{H}^+]} = 3.56$
> * We mix **3.56 volumes of ammonia** with **1 volume of ammonium chloride**.

> [!BOX]
> ### 🩸 Biological Buffers: Blood pH Control
> * Arterial blood plasma pH must be kept between **7.35 and 7.45**.
> * **The Primary Blood Buffer:** Carbonic acid ($\\text{H₂CO₃}$) and hydrogen carbonate ion ($\\text{HCO₃}^-$):
>   $$\\text{H₂CO₃(aq)} \\rightleftharpoons \\text{HCO₃}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$$
> * **Respiration Connection:** Carbonic acid is in equilibrium with dissolved carbon dioxide:
>   $$\\text{CO₂(g)} \\rightleftharpoons \\text{CO₂(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{H₂CO₃(aq)}$$

> [!BOX]
> ### 🍎 Buffers in Food Preservation
> * Spoilage bacteria thrive near neutral pH (6.6 to 7.5) and are restricted below 4.4.
> * **Buffer Capacity:** A measure of the amount of acid or base required to change the pH of a solution significantly.
> * Jams and preserves use citric acid and sodium citrate buffer systems.



> [!EXAMPLE]
> #### 📝 Worked Example 3: Methanoic Acid Buffer (Checkpoint Q1)
> **Question:** Define buffer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Definition:** A buffer solution minimizes pH changes when small amounts of acid/base are added.
> * **(b) Mechanism:** HCOOH is weak acid and HCOOK provides $\\text{HCOO}^-$.
>   * Added $\\text{H}^+$: $\\text{HCOO}^- + \\text{H}^+ \\rightarrow \\text{HCOOH}$
>   * Added $\\text{OH}^-$: $\\text{HCOOH} + \\text{OH}^- \\rightarrow \\text{HCOO}^- + \\text{H₂O}$
> * **(c) Common ion effect:** Adding solid salt shifts equilibrium left, increasing pH slightly.
> * **(d) Calculation:** Ratio is 2.0. $[\\text{H}^+] = 1.79 \\times 10^{-4} \\times 2.0 = 3.58 \\times 10^{-4}\\text{ mol dm}^{-3} \\implies \\text{pH} = 3.45$



> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Buffer Solutions (Checkpoint Q2)
> **Question:** Identify Solution A vs B.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **Solution A:** Mixing leaves excess $\\text{CH₃COOH}$ and forms salt, so it is a buffer.
> * **Solution B:** All acid reacts with NaOH, no weak acid remains, so it is not a buffer.



> [!EXAMPLE]
> #### 📝 Worked Example 5: Basic Buffer Salt Concentration (Checkpoint Q3)
> **Question:** NH3 + NH4Cl pH 9.55 buffer. Calculate NH4Cl used.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. $[\\text{H}^+] = 10^{-9.55} = 2.818 \\times 10^{-10}\\text{ mol dm}^{-3}$
> 2. $[\\text{NH₃}]_{\\text{eq}} = 0.100\\text{ mol dm}^{-3}$
> 3. $[\\text{NH₄}^+] = 0.05014\\text{ mol dm}^{-3}$ in mixture.
> 4. Initial concentration of salt used = $0.100\\text{ mol dm}^{-3}$.



> [!EXAMPLE]
> #### 📝 Worked Example 6: Benzoic Acid Buffer Calculation (Checkpoint Q4)
> **Question:** 12.20 g benzoic acid and 7.20 g sodium benzoate in 1.00 dm3.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. Moles of acid = $0.100\\text{ mol}$, moles of salt = $0.0500\\text{ mol}$.
> 2. $\\text{pH} = 4.20 + \\log_{10}\\left(\\frac{0.0500}{0.100}\\right) = 3.90$



> [!EXAMPLE]
> #### 📝 Worked Example 7: Liquid Ammonia Auto-Dissociation (Checkpoint Q5)
> **Question:** Ammonia auto-dissociation and solute classification.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Amphoteric:** One ammonia molecule behaves as acid (donates proton) and another as base (accepts proton).
> * **(b) Classifications:** (i) Acidic, (ii) Basic, (iii) Basic.
`,
        keyPoints: [
            'Buffers require a reservoir of both weak acid/base and its conjugate salt.',
            'Henderson-Hasselbalch allows direct calculation of buffer pH from concentrations.',
            'When acid and salt concentrations are equal, pH equals pKa.'
        ]
    },
    {
        id: 'buffer-titrations-ka-u4-l4',
        title: 'Ka from pH Curves',
        type: 'text',
        content: `
> [!NOTE]
> ### 📊 Buffer Action during a Titration
> In the titration curve of a weak acid with a strong base:
> * Initial: There is a small rapid initial pH rise of about $1.5$ pH units when the strong base is first added.
> * Buffer range: Following this initial rise, the curve shows a very gradual slope called the **buffer range**.
> * In this range, there is a considerable concentration of both weak acid (HA) and conjugate base (A⁻), displaying buffer action.

> [!IMPORTANT]
> ### 🧮 Determining Ka from a pH Titration Curve
> At the **half-equivalence point** (the point where exactly half the volume of base required to reach equivalence has been added):
> * Exactly half the weak acid HA has been converted into the salt (A⁻).
> * Therefore, $[\\text{salt}] = [\\text{acid}]$, meaning the ratio $\\frac{[\\text{salt}]}{[\\text{acid}]} = 1$
> * Substituting into the Henderson-Hasselbalch equation:
>   $$\\text{pH} = \\text{p}K_a + \\log_{10}(1) = \\text{p}K_a$$
> * Hence, **the pH at the half-equivalence point is equal to the p$K_a$ of the weak acid**.
> * From p$K_a$, we calculate $K_a = 10^{-\\text{p}K_a}$.
> * *Exam Hint:* Always use the term **half-equivalence point** and NOT half-neutralisation point when determining p$K_a$ of a weak acid.

> [!BOX]
> ### 🧪 Alternative Half-Volume Method (Practical Skills CP11)
> We can measure $pK_a$ directly using this experimental method:
> 1. Pipette $25.0\\text{ cm}^3$ of weak acid into a conical flask and add a few drops of phenolphthalein indicator.
> 2. Titrate against sodium hydroxide until the end point colour is obtained. Note the volume required ($V_{\\text{eq}}$).
> 3. Pipette a fresh $25.0\\text{ cm}^3$ sample of the weak acid and add exactly **half the volume** of sodium hydroxide ($\\frac{V_{\\text{eq}}}{2}$). Do NOT add indicator.
> 4. Measure the pH of this mixture using a calibrated pH meter. The measured pH is equal to the p$K_a$ value of the acid.



> [!EXAMPLE]
> #### 📝 Worked Example 1: Ringed Region on HCl-Ammonia Titration Curve (Checkpoint Q1)
> **Question:** A student titrates hydrochloric acid into ammonia solution.
> (a) Name the type of solution formed in the ringed region at the start of the titration.
> (b) Explain how you deduced your answer to part (a).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Solution type:**
> > * A **buffer solution** (consisting of the weak base ammonia, NH₃, and its conjugate acid salt ammonium chloride, NH₄Cl).
> > 
> > **(b) Explanation:**
> * The ringed region is before the equivalence point, where only some of the ammonia has reacted with HCl. This creates a mixture containing both unreacted weak base and conjugate acid. This mixture resists changes in pH, resulting in a very gradual slope.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining pKa from Curve (Checkpoint Q2)
> **Question:** A titration curve of a weak acid shows an equivalence point at $15.0\\\\text{ cm}^3$ NaOH added. The pH at the half-equivalence point ($7.5\\\\text{ cm}^3$ NaOH added) is $4.50$. Determine the $pK_a$ value for the acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * 1. **Identify the half-equivalence volume:**
>      $$\\\\text{Volume} = \\\\frac{15.0}{2} = 7.5\\\\text{ cm}^3$$
> * 2. **Locate the pH at this volume:**
>      * From the titration curve, the pH when $7.5\\text{ cm}^3$ NaOH is added is $4.50$.
> * 3. **State the relationship:**
>      * At the half-equivalence point, $[\\text{acid}] = [\\text{salt}]$, so $\\text{pH} = \\text{p}K_a$.
> * Therefore, $\\text{p}K_a = 4.50$.
`,
        keyPoints: [
            'At the half-equivalence point of a weak acid-strong base titration, pH equals pKa.',
            'The half-volume method is a practical way of determining pKa by measuring the pH of a half-neutralised mixture.',
            'The buffer region on a pH titration curve corresponds to the flat portion where both HA and A⁻ coexist.'
        ]
    }
];
