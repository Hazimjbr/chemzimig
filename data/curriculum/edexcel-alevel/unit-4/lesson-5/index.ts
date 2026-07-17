import { LessonPart } from '../../../registry';

export const lessonTitle = "Topic 16: Carbonyls, Carboxylic Acids & Chirality";
export const lessonNumber = 5;

export const theoryMarkdown = `
# Topic 16: Carbonyls, Carboxylic Acids & Chirality
This lesson covers the chemistry of carbonyl compounds (aldehydes and ketones), carboxylic acids, esters, acyl chlorides, and the concept of optical isomerism (chirality).
`;

export const parts: LessonPart[] = [
    {
        id: 'chirality-optical-isomerism-u4-l5',
        title: 'Chirality & Optical Isomerism',
        type: 'text',
        content: `
> [!NOTE]
> ### 🪞 Chirality & Enantiomers
> **Chiral molecules** exist as two non-superimposable mirror images known as **enantiomers** (optical isomers).
> * **Asymmetric Carbon Atom (Chiral Centre):** A carbon atom bonded to **four different groups**. It is represented with an asterisk ($*$).
> * **Optical Activity:** Enantiomers are chemically identical in most aspects, but they rotate the plane of plane-polarised light in opposite directions (one clockwise, the other anticlockwise).

> [!IMPORTANT]
> ### 🧪 Racemic Mixtures
> A **racemic mixture** (or racemate) contains equal amounts (a 50:50 ratio) of both enantiomers.
> * A racemic mixture is **optically inactive** (does not rotate plane-polarised light) because the opposite rotations cancel each other out.
> * Racemic mixtures often form in reactions where a planar nucleophile attacks a planar double bond (like $\\\\text{C}=\\\\text{O}$) with equal probability from above or below.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Identifying Chiral Centres
> **Question:** Identify the chiral centre in butan-2-ol and draw the 3D structures of its enantiomers
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the structural formula of butan-2-ol:**
> >    $$\\\\text{CH}_3 - \\\\text{CH(OH)} - \\\\text{CH}_2 - \\\\text{CH}_3$$
> > 
> > 2. **Find the carbon bonded to 4 different groups:**
> >    * Carbon-2 is bonded to:
> >      1. $-\\\\text{H}$
> >      2. $-\\\\text{OH}$
> >      3. $-\\\\text{CH}_3$ (methyl)
> >      4. $-\\\\text{CH}_2\\\\text{CH}_3$ (ethyl)
> >    * Therefore, Carbon-2 is the chiral centre: $\\\\text{CH}_3 - \\\\text{C}^*\\\\text{H(OH)} - \\\\text{CH}_2 - \\\\text{CH}_3$
> > 
> > 3. **Draw the 3D tetrahedral representations:**
> >    Use wedges and dashes to show the mirror images showing tetrahedral geometry around the chiral carbon.
`,
        keyPoints: [
            'A chiral carbon must have four single bonds to four entirely different atoms or groups of atoms.',
            'A racemic mixture is optically inactive because the clockwise rotation from one enantiomer cancels the anticlockwise rotation from the other.'
        ]
    },
    {
        id: 'carbonyl-compounds-nucleophilic-addition-u4-l5',
        title: 'Carbonyl Compounds & Nucleophilic Addition',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Aldehydes and Ketones
> Both contain the carbonyl group ($\\\\text{C}=\\\\text{O}$):
> * **Aldehydes:** The carbonyl carbon is bonded to at least one hydrogen atom ($\\\\text{R-CHO}$).
> * **Ketones:** The carbonyl carbon is bonded to two carbon groups ($\\\\text{R-CO-R\'}$).

> [!IMPORTANT]
> ### ⚛️ Nucleophilic Addition Mechanism with HCN
> The carbonyl $\\\\text{C}=\\\\text{O}$ bond is highly polar due to the electronegativity of oxygen ($\\\\text{C}^{\\\\delta+} = \\\\text{O}^{\\\\delta-}$). Nucleophiles attack the electron-deficient carbonyl carbon.
> 
> **Reaction with $\\\\text{HCN}$ (in the presence of $\\\\text{KCN}$):**
> * **Reagent:** $\\\\text{KCN}$ and dilute acid (to generate $\\\\text{HCN}$ safely in situ).
> * **Nucleophile:** $\\\\text{CN}^-$ (cyanide ion).
> * **Product:** Hydroxynitrile.
> * **Mechanism:**
>   1. $\\\\text{CN}^-$ attacks the $\\\\text{C}^{\\\\delta+}$ carbon, breaking the $\\\\text{C}=\\\\text{O}$ $\\\\pi$-bond.
>   2. The intermediate oxygen anion ($\\\\text{:O}^-$) is protonated by $\\\\text{H}^+$ or $\\\\text{H}_2\\\\text{O}$ to form an $-\\\\text{OH}$ group.

> [!WARNING]
> ### ⚠️ Optical Activity of Products
> If the starting aldehyde/ketone is unsymmetrical, nucleophilic addition creates a chiral carbon. Because the carbonyl group is **planar** around the carbon atom, the nucleophile can attack with equal probability from either side, resulting in a **racemic mixture** which is optically inactive.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Nucleophilic Addition Product
> **Question:** Write the equation and name the organic product formed when propanal reacts with HCN in the presence of KCN
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the structures of reactants:**
> >    * Propanal: $\\\\text{CH}_3\\\\text{CH}_2\\\\text{CHO}$
> >    * Nucleophile: $\\\\text{CN}^-$
> > 
> > 2. **Formulate the addition product:**
> >    * The $\\\\text{CN}$ group attaches to the carbonyl carbon, and the oxygen becomes an $\\\\text{OH}$ group:
> >      $$\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH(OH)CN}$$
> > 
> > 3. **Name the product:**
> >    * The longest carbon chain contains 4 carbons (including the nitrile carbon).
> >    * Carbon-1 is the nitrile carbon.
> >    * Product name: **2-hydroxybutanenitrile**
`,
        keyPoints: [
            'HCN is highly toxic, so KCN is used with an acid buffer to provide CN⁻ nucleophiles safely.',
            'Nucleophilic addition to unsymmetrical carbonyls always yields a racemic mixture because of the planar carbonyl group.'
        ]
    },
    {
        id: 'carbonyls-oxidation-reduction-tests-u4-l5',
        title: 'Oxidation, Reduction & Chemical Tests',
        type: 'text',
        content: `
> [!BOX]
> ### 🧪 Chemical Tests to Distinguish Carbonyls
> 
> 1. **2,4-dinitrophenylhydrazine (2,4-DNPH / Brady\'s Reagent):**
>    * Reacts with **both** aldehydes and ketones to form a bright **orange/yellow precipitate**.
>    * The precipitate can be purified by recrystallisation, and its melting temperature measured and compared to database values to identify the specific carbonyl.
> 
> 2. **Tollens\' Reagent ([Ag(NH₃)₂]⁺):**
>    * Aldehydes are oxidised to carboxylic acids; silver ions ($\\\\text{Ag}^+$) are reduced to metallic silver, forming a **silver mirror**.
>    * Ketones show **no change**.
> 
> 3. **Fehling\'s / Benedict\'s Solution:**
>    * Aldehydes are oxidised; blue copper(II) ions ($\\\\text{Cu}^{2+}$) are reduced to a **red precipitate** of copper(I) oxide ($\\\\text{Cu}_2\\\\text{O}$).
>    * Ketones show **no change**.
> 
> 4. **Triiodomethane (Iodoform) Test ($\\\\text{I}_2$ / $\\\\text{NaOH}$):**
>    * Tests for methyl carbonyls ($\\\\text{R-CO-CH}_3$) or methyl alcohols ($\\\\text{R-CH(OH)-CH}_3$).
>    * Positive result: **Yellow crystalline precipitate** of triiodomethane ($\\\\text{CHI}_3$) with an antiseptic smell.

> [!IMPORTANT]
> ### 🧮 Oxidation and Reduction Reactions
> * **Oxidation:** Aldehydes are easily oxidised to carboxylic acids using acidified potassium dichromate(VI) ($\\\\text{Cr}_2\\\\text{O}_7^{2-}/\\\\text{H}^+$), changing color from orange to green. Ketones resist oxidation.
> * **Reduction:** Carbonyls are reduced using $\\\\text{LiAlH}_4$ in dry ether (represented as $[\\\\text{H}]$):
>   * Aldehyde $\\\\rightarrow$ **Primary Alcohol**
>   * Ketone $\\\\rightarrow$ **Secondary Alcohol**

> [!EXAMPLE]
> #### 📝 Worked Example 1: Distinguishing Unknown Carbonyls
> **Question:** An unknown compound X gives an orange precipitate with 2,4-DNPH but does not form a silver mirror with Tollens\' reagent. Suggest the chemical family of X and a test to identify it
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Interpret the 2,4-DNPH test:**
> >    * Orange precipitate confirms X contains a carbonyl group ($\\\\text{C}=\\\\text{O}$). It is either an aldehyde or a ketone.
> > 
> > 2. **Interpret the Tollens\' reagent test:**
> >    * No silver mirror indicates X cannot be easily oxidised. Therefore, X is a **ketone**.
> > 
> > 3. **Determine how to identify the specific ketone:**
> >    * Filter, wash, and recrystallise the orange precipitate from 2,4-DNPH.
> >    * Measure its melting temperature and compare it to database values of known ketone derivatives.
`,
        keyPoints: [
            'Tollens\' reagent must be freshly prepared and contains the complex ion [Ag(NH₃)₂]⁺.',
            'LiAlH₄ is a powerful reducing agent that must be used in dry solvent because it reacts violently with water.'
        ]
    },
    {
        id: 'carboxylic-acids-esters-acyl-chlorides-u4-l5',
        title: 'Carboxylic Acids, Esters & Acyl Chlorides',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Carboxylic Acids & Derivatives
> * **Carboxylic Acids ($\\\\text{R-COOH}$):** Weak acids that react with bases, carbonates, and metals.
> * **Esters ($\\\\text{R-COOR\'}$):** Sweet-smelling compounds used in perfumes and food flavourings.
> * **Acyl Chlorides ($\\\\text{R-COCl}$):** Highly reactive derivatives used in organic synthesis.

> [!IMPORTANT]
> ### 🧮 Key Reactions & Preparations
> 1. **Esterification:** Carboxylic acid + Alcohol $\\\\rightleftharpoons$ Ester + Water (catalysed by concentrated $\\\\text{H}_2\\\\text{SO}_4$).
> 2. **Acyl Chloride Formation:** Carboxylic acid + $\\\\text{PCl}_5$ (or $\\\\text{SOCl}_2$) $\\\\rightarrow$ Acyl Chloride + $\\\\text{POCl}_3$ + $\\\\text{HCl(g)}$.
>    * White misty fumes of $\\\\text{HCl}$ gas confirm the presence of an $-\\\\text{OH}$ group.
> 3. **Hydrolysis of Esters:**
>    * **Acid Hydrolysis:** Ester + Water $\\\\rightleftharpoons$ Carboxylic Acid + Alcohol (reversible).
>    * **Base Hydrolysis (Saponification):** Ester + NaOH $\\\\rightarrow$ Sodium Carboxylate Salt + Alcohol (one-way/complete).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Ester Hydrolysis
> **Question:** Write the equation for the base hydrolysis of ethyl propanoate with sodium hydroxide and name the products
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the formula of ethyl propanoate:**
> >    $$\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOCH}_2\\\\text{CH}_3$$
> > 
> > 2. **React with sodium hydroxide:**
> >    The ester bond is cleaved by $\\\\text{NaOH}$:
> >    $$\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOCH}_2\\\\text{CH}_3 + \\\\text{NaOH} \\\\rightarrow \\\\text{CH}_3\\\\text{CH}_2\\\\text{COONa} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}$$
> > 
> > 3. **Name the products:**
> >    * $\\\\text{CH}_3\\\\text{CH}_2\\\\text{COONa}$: **Sodium propanoate**
> >    * $\\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}$: **Ethanol**
`,
        keyPoints: [
            'Acyl chlorides react vigorously with alcohols and water at room temp without catalysts, making them excellent synthetics.',
            'Base hydrolysis of an ester goes to completion because the carboxylate ion cannot react with the alcohol.'
        ]
    }
];
