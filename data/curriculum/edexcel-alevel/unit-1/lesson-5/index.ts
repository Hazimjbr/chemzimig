import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Alkenes";
export const lessonNumber = 5;

export const theoryMarkdown = `
# Topic 5: Alkenes
This lesson covers the structure and bonding of alkenes ($\\\\sigma$ and $\\\\pi$ bonds), geometric E/Z stereoisomerism (Cahn-Ingold-Prelog priority rules), electrophilic addition reactions and mechanisms (hydrogenation, halogenation, hydration, and hydrohalogenation), Markovnikov's rule based on carbocation stability, oxidation of alkenes to diols, and addition polymerisation including polymer disposal.
`;

export const parts: LessonPart[] = [
  {
    id: 'alkene-structure-bonding-20260627',
    title: 'Structure & Bonding in Alkenes',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Nature of the Carbon-Carbon Double Bond
> Alkenes are unsaturated hydrocarbons containing at least one carbon-carbon double bond (C=C). This double bond is comprised of two distinct types of covalent bonds:
> 
> * **Sigma ($\\\\sigma$) Bond:**
>    * Formed by the direct, end-on overlap of orbitals (sp² hybridized orbitals in ethene).
>    * The electron density is concentrated along the line directly connecting the two nuclei.
>    * This is a strong bond with free rotation.
> * **Pi ($\\\\pi$) Bond:**
>    * Formed by the lateral (sideways) overlap of unhybridized parallel p-orbitals on adjacent carbon atoms.
>    * The electron density is concentrated in two lobes, one above and one below the plane of the $\\\\sigma$ bond.
>    * It is weaker than the $\\\\sigma$ bond because sideways overlap is less effective than end-on overlap.
>    * The presence of the $\\\\pi$ bond prevents rotation around the C=C bond.

> [!IMPORTANT]
> ### 📐 Shape and Bond Angles
> * Around each carbon atom in a double bond, there are three regions of electron density (three $\\\\sigma$ bonds).
> * According to electron pair repulsion theory, these regions repel each other as far as possible, resulting in a **trigonal planar** geometry.
> * The bond angles are approximately **120 degrees**.
> * The molecule is completely planar around the C=C double bond.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Comparing Alkanes and Alkenes
> **Question:** Explain why the C=C double bond in ethene (C₂H₄) is stronger than the C-C single bond in ethane (C₂H₆), but is not twice as strong.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the bonding in both molecules:**
> >    * Ethane (C₂H₆) contains a single C-C bond, which is a $\\\\sigma$ bond.
> >    * Ethene (C₂H₄) contains a C=C double bond, which consists of one $\\\\sigma$ bond and one $\\\\pi$ bond.
> > 
> > 2. **Compare bond strengths:**
> >    * The double bond is stronger because it contains both a $\\\\sigma$ and a $\\\\pi$ bond, which requires more energy to break than a single $\\\\sigma$ bond alone.
> > 
> > 3. **Explain why it is not twice as strong:**
> >    * A $\\\\pi$ bond is weaker than a $\\\\sigma$ bond because sideways orbital overlap is less effective than end-on orbital overlap.
> >    * Therefore, the energy required to break the C=C bond ($\\\\sigma$ + $\\\\pi$) is less than twice the energy required to break a single C-C bond ($\\\\sigma$).

> [!EXAMPLE]
> #### 📝 Worked Example 2: Hybridisation & Bond Angles in Ethene
> **Question:** In a molecule of ethene ($\\\\text{C}_2\\\\text{H}_4$), what is the type of hybridisation shown by the carbon atoms, and what is the H-C-H bond angle?
> 
> * **A)** $sp^3$ hybridisation and $109.5^\\\\circ$
> * **B)** $sp^2$ hybridisation and $120^\\\\circ$
> * **C)** $sp$ hybridisation and $180^\\\\circ$
> * **D)** $sp^2$ hybridisation and $90^\\\\circ$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of electron density regions:**
> >    * Each carbon atom in ethene is bonded to two hydrogen atoms (via single $\\\\sigma$ bonds) and one carbon atom (via a double bond).
> >    * This gives 3 regions of electron density around each carbon atom.
> > 
> > 2. **Deduce hybridisation:**
> >    * 3 regions of electron density require 3 hybridised orbitals, which correspond to **$sp^2$ hybridisation**.
> > 
> > 3. **Determine geometry and bond angle:**
> >    * According to electron pair repulsion theory, 3 regions of electron density repel to a trigonal planar arrangement.
> >    * The ideal bond angle for a trigonal planar shape is **$120^\\\\circ$**.
> >    * Therefore, the correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Restricted Rotation and Pi Bonding
> **Question:** Which statement best explains why alkenes can form geometric (cis-trans) isomers while alkanes cannot?
> 
> * **A)** Alkenes have polar bonds, whereas alkanes are completely non-polar.
> * **B)** Alkenes have a planar structure, which allows groups to rotate freely.
> * **C)** The sideways overlap of p-orbitals forms a $\\\\pi$ bond that restricts rotation.
> * **D)** The $\\\\sigma$ bond in alkenes is twice as strong as the $\\\\sigma$ bond in alkanes.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand geometric isomerism requirements:**
> >    * Geometric isomerism requires two different groups attached to each carbon of the double bond and **restricted rotation** around that bond.
> > 
> > 2. **Analyze restricted rotation:**
> >    * The carbon-carbon double bond contains a $\\\\pi$ bond formed by the lateral (sideways) overlap of unhybridised p-orbitals.
> >    * For rotation to occur, this overlap must be broken (requiring high energy).
> >    * Thus, the $\\\\pi$ bond restricts rotation, keeping the attached groups locked in space.
> >    * Therefore, the correct option is **C**.


> [!EXAMPLE]
> #### 📝 Worked Example 4: Comparing Bond Lengths and Bond Enthalpies
> **Question:** Compare the carbon-carbon bond length and bond enthalpy of ethane (C₂H₆) and ethene (C₂H₄), and explain these differences.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare bond strength (bond enthalpy):**
> >    * Ethane has a C-C single bond with a lower bond enthalpy (~347 kJ/mol). Ethene has a C=C double bond with a higher bond enthalpy (~612 kJ/mol).
> >    * The C=C double bond contains two pairs of shared electrons (one σ and one π bond), which increases the electron density between the two carbon nuclei, requiring more energy to break.
> > 2. **Compare bond length:**
> >    * Ethane has a longer C-C bond (~0.154 nm), whereas ethene has a shorter C=C bond (~0.134 nm).
> >    * The increased negative charge density of the double bond creates a stronger electrostatic attraction between the positive carbon nuclei and the shared electrons, pulling the nuclei closer together.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Counting Sigma and Pi Bonds in Propene
> **Question:** Propene has the structural formula CH₃CH=CH₂. Deduce the total number of sigma (σ) and pi (π) bonds in a single molecule of propene.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the single bonds (Sigma σ bonds) from the displayed structure:**
> >    * There are 6 C-H single bonds (3 on the methyl group, 1 on the middle carbon, and 2 on the terminal CH₂ carbon).
> >    * There is 1 C-C single bond.
> >    * The C=C double bond consists of exactly 1 σ bond (and 1 π bond).
> >    * Total σ bonds = 6 + 1 + 1 = **8**.
> > > 2. **Count the double bonds (Pi π bonds):**
> > >    * The C=C double bond contains exactly 1 π bond formed by the sideways overlap of p-orbitals.
> > >    * Total π bonds = **1**.
> > > 3. **Conclusion:**
> > >    * Propene contains **8 σ bonds** and **1 π bond**.

`,
    keyPoints: [
      'A C=C double bond consists of one strong sigma (σ) bond and one weaker pi (π) bond.',
      'The pi (π) bond prevents rotation around the double bond, creating a rigid planar structure.',
      'Double-bonded carbon atoms exhibit a trigonal planar geometry with bond angles of approximately 120°.'
    ]
  },
  {
    id: 'stereoisomerism-ez-20260627',
    title: 'Stereoisomerism: E/Z Isomers',
    type: 'text',
    content: `
> [!NOTE]
> ### 🪞 What is Stereoisomerism?
> **Stereoisomers** are compounds with the same structural formula but a different arrangement of atoms in 3D space.
> 
> * **Geometric Isomerism:** A type of stereoisomerism that occurs in alkenes due to the **restricted rotation** around the carbon-carbon double bond.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="auto">
  <defs>
    <linearGradient id="bg-ez" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="360" rx="16" fill="url(#bg-ez)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Title -->
  <text x="500" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">cis / trans Geometric Isomers of But-2-ene (CH₃-CH=CH-CH₃)</text>
  <line x1="80" y1="48" x2="920" y2="48" stroke="#1e293b" stroke-width="1"/>

  <!-- ===== CIS PANEL ===== -->
  <rect x="40" y="68" width="420" height="262" rx="12" fill="#0f2040" stroke="#2563eb" stroke-width="1.5"/>
  <text x="250" y="98" text-anchor="middle" font-size="13" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">cis-but-2-ene</text>
  <text x="250" y="116" text-anchor="middle" font-size="10.5" fill="#94a3b8" font-family="Inter,sans-serif">Methyl groups on the SAME side</text>

  <!-- C=C double bond -->
  <line x1="200" y1="195" x2="300" y2="195" stroke="#60a5fa" stroke-width="3"/>
  <line x1="200" y1="202" x2="300" y2="202" stroke="#60a5fa" stroke-width="3"/>

  <!-- Left carbon -->
  <circle cx="200" cy="198" r="14" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="200" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">C</text>

  <!-- Right carbon -->
  <circle cx="300" cy="198" r="14" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="300" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">C</text>

  <!-- CIS: Both CH3 ABOVE -->
  <!-- Left CH3 (top-left diagonal) -->
  <line x1="200" y1="184" x2="148" y2="145" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="134" cy="137" r="22" fill="#0f2040" stroke="#475569" stroke-width="1.5"/>
  <text x="134" y="141" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- Right CH3 (top-right diagonal) -->
  <line x1="300" y1="184" x2="352" y2="145" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="366" cy="137" r="22" fill="#0f2040" stroke="#475569" stroke-width="1.5"/>
  <text x="366" y="141" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- CIS: H BELOW left -->
  <line x1="200" y1="212" x2="148" y2="251" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="140" cy="262" r="16" fill="#0f2040" stroke="#475569" stroke-width="1.5"/>
  <text x="140" y="267" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- CIS: H BELOW right -->
  <line x1="300" y1="212" x2="352" y2="251" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="360" cy="262" r="16" fill="#0f2040" stroke="#475569" stroke-width="1.5"/>
  <text x="360" y="267" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Same side arrow bracket -->
  <path d="M120 118 Q105 95 150 82 Q200 72 250 78 Q300 72 350 82 Q395 95 380 118" stroke="#34d399" stroke-width="2" fill="none" stroke-dasharray="5,3"/>
  <text x="250" y="64" text-anchor="middle" font-size="9.5" fill="#34d399" font-family="Inter,sans-serif">↑ Same side ↑</text>

  <!-- cis label at bottom -->
  <rect x="195" y="306" width="110" height="14" rx="7" fill="#1d4ed8"/>
  <text x="250" y="317" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">cis = same side (Latin)</text>

  <!-- ===== TRANS PANEL ===== -->
  <rect x="540" y="68" width="420" height="262" rx="12" fill="#1a0f20" stroke="#9333ea" stroke-width="1.5"/>
  <text x="750" y="98" text-anchor="middle" font-size="13" font-weight="700" fill="#c084fc" font-family="Inter,sans-serif">trans-but-2-ene</text>
  <text x="750" y="116" text-anchor="middle" font-size="10.5" fill="#94a3b8" font-family="Inter,sans-serif">Methyl groups on OPPOSITE sides</text>

  <!-- C=C double bond -->
  <line x1="700" y1="195" x2="800" y2="195" stroke="#c084fc" stroke-width="3"/>
  <line x1="700" y1="202" x2="800" y2="202" stroke="#c084fc" stroke-width="3"/>

  <!-- Left carbon -->
  <circle cx="700" cy="198" r="14" fill="#7e22ce" stroke="#e9d5ff" stroke-width="1.5"/>
  <text x="700" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">C</text>

  <!-- Right carbon -->
  <circle cx="800" cy="198" r="14" fill="#7e22ce" stroke="#e9d5ff" stroke-width="1.5"/>
  <text x="800" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">C</text>

  <!-- TRANS: Left CH3 ABOVE -->
  <line x1="700" y1="184" x2="648" y2="145" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="634" cy="137" r="22" fill="#1a0f20" stroke="#475569" stroke-width="1.5"/>
  <text x="634" y="141" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- TRANS: Right CH3 BELOW -->
  <line x1="800" y1="212" x2="852" y2="251" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="866" cy="262" r="22" fill="#1a0f20" stroke="#475569" stroke-width="1.5"/>
  <text x="866" y="267" text-anchor="middle" font-size="10" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- TRANS: Left H BELOW -->
  <line x1="700" y1="212" x2="648" y2="251" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="640" cy="262" r="16" fill="#1a0f20" stroke="#475569" stroke-width="1.5"/>
  <text x="640" y="267" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- TRANS: Right H ABOVE -->
  <line x1="800" y1="184" x2="852" y2="145" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="860" cy="137" r="16" fill="#1a0f20" stroke="#475569" stroke-width="1.5"/>
  <text x="860" y="141" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Opposite side diagonal arrow -->
  <line x1="620" y1="137" x2="880" y2="262" stroke="#f97316" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="680" y="285" text-anchor="middle" font-size="9.5" fill="#f97316" font-family="Inter,sans-serif">↙ Opposite sides ↗</text>

  <!-- trans label at bottom -->
  <rect x="695" y="306" width="110" height="14" rx="7" fill="#7e22ce"/>
  <text x="750" y="317" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">trans = across (Latin)</text>

  <!-- VS divider -->
  <circle cx="500" cy="200" r="22" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="500" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">vs</text>
  <line x1="500" y1="68" x2="500" y2="178" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="500" y1="222" x2="500" y2="330" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Footer note -->
  <text x="500" y="350" text-anchor="middle" font-size="9" fill="#475569" font-family="Inter,sans-serif">Both isomers share the same molecular formula C₄H₈ and structural formula, but differ in 3D spatial arrangement</text>
</svg>`)}

> [!BOX]
> ### 📋 Origin & Conditions for Geometric Isomerism
> Geometric isomerism occurs specifically because:
> 
> 1. **Restricted Rotation:** The presence of the **pi ($\\\\pi$) bond** prevents rotation around the C=C double bond. Rotating the bond would require breaking the sideways overlap of the p-orbitals, which requires significant energy.
> 2. **Different Groups Attached:** Each carbon atom of the C=C double bond must be attached to two different atoms or groups.
>    * *Critical Rule:* If either carbon atom in the C=C bond is attached to two identical groups (e.g. two hydrogen atoms or two methyl groups), the molecule **cannot** form geometric isomers, regardless of what is attached to the other carbon.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 260" width="100%" height="auto">
  <defs>
    <linearGradient id="bg2-ez" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="260" rx="16" fill="url(#bg2-ez)" stroke="#1e293b" stroke-width="1.5"/>
  <text x="500" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">Condition for Geometric Isomerism: Each C must have TWO DIFFERENT groups</text>
  <line x1="80" y1="44" x2="920" y2="44" stroke="#1e293b" stroke-width="1"/>

  <!-- CASE 1: CAN form isomers -->
  <rect x="40" y="56" width="420" height="188" rx="12" fill="#052e16" stroke="#16a34a" stroke-width="1.5"/>
  <text x="250" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif">✓ CAN form geometric isomers</text>

  <!-- Molecule: CHCl=CHBr -->
  <!-- C=C -->
  <line x1="200" y1="148" x2="300" y2="148" stroke="#4ade80" stroke-width="3"/>
  <line x1="200" y1="155" x2="300" y2="155" stroke="#4ade80" stroke-width="3"/>
  <circle cx="200" cy="151" r="13" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="200" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Inter,sans-serif">C</text>
  <circle cx="300" cy="151" r="13" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="300" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Inter,sans-serif">C</text>
  <!-- Groups on left C: H and Cl -->
  <line x1="200" y1="138" x2="155" y2="105" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="145" cy="97" r="18" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="145" y="102" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ef4444" font-family="Inter,sans-serif">Cl</text>
  <line x1="200" y1="164" x2="155" y2="197" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="145" cy="205" r="18" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="145" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- Groups on right C: Br and H -->
  <line x1="300" y1="138" x2="345" y2="105" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="355" cy="97" r="18" fill="#0f172a" stroke="#f97316" stroke-width="1.5"/>
  <text x="355" y="102" text-anchor="middle" font-size="10.5" font-weight="700" fill="#f97316" font-family="Inter,sans-serif">Br</text>
  <line x1="300" y1="164" x2="345" y2="197" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="355" cy="205" r="18" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="355" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- Labels -->
  <text x="145" y="233" text-anchor="middle" font-size="9" fill="#4ade80" font-family="Inter,sans-serif">2 different groups</text>
  <text x="355" y="233" text-anchor="middle" font-size="9" fill="#4ade80" font-family="Inter,sans-serif">2 different groups</text>
  <text x="250" y="233" text-anchor="middle" font-size="9.5" fill="#64748b" font-family="Inter,sans-serif">Example: CHCl=CHBr</text>

  <!-- CASE 2: CANNOT form isomers -->
  <rect x="540" y="56" width="420" height="188" rx="12" fill="#450a0a" stroke="#dc2626" stroke-width="1.5"/>
  <text x="750" y="80" text-anchor="middle" font-size="12" font-weight="700" fill="#f87171" font-family="Inter,sans-serif">✗ CANNOT form geometric isomers</text>

  <!-- Molecule: CH2=CHCl - left C has H,H (same) -->
  <!-- C=C -->
  <line x1="700" y1="148" x2="800" y2="148" stroke="#f87171" stroke-width="3"/>
  <line x1="700" y1="155" x2="800" y2="155" stroke="#f87171" stroke-width="3"/>
  <circle cx="700" cy="151" r="13" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="700" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Inter,sans-serif">C</text>
  <circle cx="800" cy="151" r="13" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="800" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Inter,sans-serif">C</text>
  <!-- Left C has H and H (SAME) -->
  <line x1="700" y1="138" x2="655" y2="105" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="645" cy="97" r="18" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="645" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="700" y1="164" x2="655" y2="197" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="645" cy="205" r="18" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="645" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- Right C: Cl and H -->
  <line x1="800" y1="138" x2="845" y2="105" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="855" cy="97" r="18" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="855" y="102" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ef4444" font-family="Inter,sans-serif">Cl</text>
  <line x1="800" y1="164" x2="845" y2="197" stroke="#94a3b8" stroke-width="1.8"/>
  <circle cx="855" cy="205" r="18" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
  <text x="855" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- Labels -->
  <rect x="600" y="219" width="100" height="15" rx="5" fill="#7f1d1d"/>
  <text x="650" y="230" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fca5a5" font-family="Inter,sans-serif">⚠ IDENTICAL groups!</text>
  <text x="855" y="233" text-anchor="middle" font-size="9" fill="#4ade80" font-family="Inter,sans-serif">2 different</text>
  <text x="750" y="233" text-anchor="middle" font-size="9.5" fill="#64748b" font-family="Inter,sans-serif">Example: CH₂=CHCl</text>

  <!-- VS divider -->
  <circle cx="500" cy="150" r="22" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="500" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">vs</text>
  <line x1="500" y1="56" x2="500" y2="125" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="500" y1="175" x2="500" y2="244" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`)}

> [!TIP]
> ### 🏷️ The cis-trans Naming System
> The **cis-trans** system is used when each carbon of the C=C double bond is bonded to a hydrogen atom and one other identical group (or when there are similar groups on each side):
> 
> * **Cis-isomer:** Similar atoms or groups are on the **same side** of the C=C double bond.
> * **Trans-isomer:** Similar atoms or groups are on **opposite sides** (across) the C=C double bond.

> [!IMPORTANT]
> ### 🧮 The E–Z Naming System (Cahn-Ingold-Prelog)
> When the groups attached to the double bond are not the same on each side, the **E-Z** system is used. Priorities are assigned to the two groups on each carbon based on **atomic number** (the atom directly bonded to the double-bonded carbon):
> 
> * **Z-Isomer (Zusammen - "together"):** Both groups with the **highest priority** (highest atomic number) are on the **same side** of the C=C double bond.
> * **E-Isomer (Entgegen - "opposite"):** The groups with the **highest priority** are on **opposite sides** of the C=C double bond.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 450" width="100%" height="auto">
  <defs>
    <linearGradient id="bg3-ez" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="450" rx="16" fill="url(#bg3-ez)" stroke="#1e293b" stroke-width="1.5"/>
  <text x="500" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">E/Z Nomenclature — Assigning CIP Priorities (Example: 1-bromo-1-chloropropene)</text>
  <line x1="80" y1="46" x2="920" y2="46" stroke="#1e293b" stroke-width="1"/>

  <!-- Step labels on the left -->
  <text x="60" y="100" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">STEP 1</text>
  <text x="60" y="113" text-anchor="middle" font-size="9" fill="#64748b" font-family="Inter,sans-serif">Assign</text>
  <text x="60" y="124" text-anchor="middle" font-size="9" fill="#64748b" font-family="Inter,sans-serif">priorities</text>

  <!-- LEFT CARBON box -->
  <rect x="100" y="62" width="320" height="140" rx="10" fill="#0d1f3a" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="260" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">Left Carbon — groups: Cl &amp; Br</text>

  <!-- Cl entry -->
  <rect x="118" y="92" width="130" height="42" rx="7" fill="#1e3a5f" stroke="#ef4444" stroke-width="1.2"/>
  <text x="183" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#f87171" font-family="Inter,sans-serif">— Cl (Chlorine)</text>
  <text x="183" y="127" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="Inter,sans-serif">Atomic No. = 17</text>
  <rect x="260" y="92" width="145" height="42" rx="7" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="332" y="110" text-anchor="middle" font-size="10.5" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif">Priority 1 ★ HIGH</text>
  <text x="332" y="127" text-anchor="middle" font-size="9" fill="#a3e635" font-family="Inter,sans-serif">17 &gt; 35? No… compare Br:</text>

  <!-- Br entry -->
  <rect x="118" y="142" width="130" height="42" rx="7" fill="#1e3a5f" stroke="#f97316" stroke-width="1.2"/>
  <text x="183" y="161" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">— Br (Bromine)</text>
  <text x="183" y="177" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="Inter,sans-serif">Atomic No. = 35</text>
  <rect x="260" y="142" width="145" height="42" rx="7" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="332" y="161" text-anchor="middle" font-size="10.5" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif">Priority 1 ★ HIGH</text>
  <text x="332" y="177" text-anchor="middle" font-size="9" fill="#a3e635" font-family="Inter,sans-serif">35 &gt; 17 → Br wins!</text>

  <!-- RIGHT CARBON box -->
  <rect x="580" y="62" width="330" height="140" rx="10" fill="#0d1f3a" stroke="#8b5cf6" stroke-width="1.2"/>
  <text x="745" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="#a78bfa" font-family="Inter,sans-serif">Right Carbon — groups: CH₃ &amp; H</text>

  <!-- CH3 entry -->
  <rect x="598" y="92" width="130" height="42" rx="7" fill="#2d1b69" stroke="#a78bfa" stroke-width="1.2"/>
  <text x="663" y="111" text-anchor="middle" font-size="10.5" font-weight="700" fill="#c4b5fd" font-family="Inter,sans-serif">— CH₃ (methyl)</text>
  <text x="663" y="127" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="Inter,sans-serif">C: Atomic No. = 6</text>
  <rect x="740" y="92" width="152" height="42" rx="7" fill="#14532d" stroke="#4ade80" stroke-width="1.5"/>
  <text x="816" y="110" text-anchor="middle" font-size="10.5" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif">Priority 1 ★ HIGH</text>
  <text x="816" y="127" text-anchor="middle" font-size="9" fill="#a3e635" font-family="Inter,sans-serif">6 &gt; 1 → CH₃ wins!</text>

  <!-- H entry -->
  <rect x="598" y="142" width="130" height="42" rx="7" fill="#1a1a2e" stroke="#475569" stroke-width="1.2"/>
  <text x="663" y="161" text-anchor="middle" font-size="10.5" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">— H (Hydrogen)</text>
  <text x="663" y="177" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="Inter,sans-serif">Atomic No. = 1</text>
  <rect x="740" y="142" width="152" height="42" rx="7" fill="#292929" stroke="#475569" stroke-width="1.2"/>
  <text x="816" y="161" text-anchor="middle" font-size="10.5" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">Priority 2 (lower)</text>
  <text x="816" y="177" text-anchor="middle" font-size="9" fill="#475569" font-family="Inter,sans-serif">Lowest atomic no.</text>

  <!-- ======= STRUCTURE DIAGRAM BELOW ======= -->
  <line x1="80" y1="220" x2="920" y2="220" stroke="#1e293b" stroke-width="1"/>
  <text x="60" y="310" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">STEP 2</text>
  <text x="60" y="323" text-anchor="middle" font-size="9" fill="#64748b" font-family="Inter,sans-serif">Determine</text>
  <text x="60" y="334" text-anchor="middle" font-size="9" fill="#64748b" font-family="Inter,sans-serif">E or Z</text>

  <!-- === Z ISOMER === -->
  <rect x="100" y="230" width="360" height="200" rx="10" fill="#0f2040" stroke="#2563eb" stroke-width="1.5"/>
  <text x="280" y="255" text-anchor="middle" font-size="12" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">Z-isomer (Zusammen = "together")</text>
  <!-- C=C -->
  <line x1="240" y1="327" x2="320" y2="327" stroke="#60a5fa" stroke-width="3"/>
  <line x1="240" y1="334" x2="320" y2="334" stroke="#60a5fa" stroke-width="3"/>
  <circle cx="240" cy="330" r="13" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="240" y="335" text-anchor="middle" font-size="9" fill="#fff" font-family="Inter,sans-serif">C</text>
  <circle cx="320" cy="330" r="13" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="320" y="335" text-anchor="middle" font-size="9" fill="#fff" font-family="Inter,sans-serif">C</text>
  <!-- Z: High priority SAME side (ABOVE) -->
  <!-- Left: Br above -->
  <line x1="240" y1="317" x2="195" y2="289" stroke="#f97316" stroke-width="2"/>
  <circle cx="182" cy="282" r="18" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="182" y="287" text-anchor="middle" font-size="10" font-weight="700" fill="#f97316" font-family="Inter,sans-serif">Br</text>
  <text x="156" y="285" text-anchor="end" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ HIGH</text>
  <!-- Left: Cl below -->
  <line x1="240" y1="343" x2="195" y2="371" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="182" cy="378" r="18" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="182" y="383" text-anchor="middle" font-size="10" font-weight="700" fill="#ef4444" font-family="Inter,sans-serif">Cl</text>
  <!-- Right: CH3 above -->
  <line x1="320" y1="317" x2="365" y2="289" stroke="#a78bfa" stroke-width="2"/>
  <circle cx="375" cy="282" r="20" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
  <text x="375" y="287" text-anchor="middle" font-size="9.5" font-weight="700" fill="#c4b5fd" font-family="Inter,sans-serif">CH₃</text>
  <text x="402" y="285" text-anchor="start" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ HIGH</text>
  <!-- Right: H below -->
  <line x1="320" y1="343" x2="365" y2="371" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="375" cy="378" r="14" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
  <text x="375" y="383" text-anchor="middle" font-size="10" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- Z bracket: same side arrow -->
  <path d="M182 272 Q280 252 375 272" stroke="#fbbf24" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <text x="280" y="242" text-anchor="middle" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ Both HIGH priority = same side → Z</text>

  <!-- === E ISOMER === -->
  <rect x="540" y="230" width="360" height="200" rx="10" fill="#1a0f20" stroke="#9333ea" stroke-width="1.5"/>
  <text x="720" y="255" text-anchor="middle" font-size="12" font-weight="700" fill="#c084fc" font-family="Inter,sans-serif">E-isomer (Entgegen = "opposite")</text>
  <!-- C=C -->
  <line x1="680" y1="327" x2="760" y2="327" stroke="#c084fc" stroke-width="3"/>
  <line x1="680" y1="334" x2="760" y2="334" stroke="#c084fc" stroke-width="3"/>
  <circle cx="680" cy="330" r="13" fill="#7e22ce" stroke="#e9d5ff" stroke-width="1.5"/>
  <text x="680" y="335" text-anchor="middle" font-size="9" fill="#fff" font-family="Inter,sans-serif">C</text>
  <circle cx="760" cy="330" r="13" fill="#7e22ce" stroke="#e9d5ff" stroke-width="1.5"/>
  <text x="760" y="335" text-anchor="middle" font-size="9" fill="#fff" font-family="Inter,sans-serif">C</text>
  <!-- E: High priority OPPOSITE sides -->
  <!-- Left: Br above -->
  <line x1="680" y1="317" x2="635" y2="289" stroke="#f97316" stroke-width="2"/>
  <circle cx="622" cy="282" r="18" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
  <text x="622" y="287" text-anchor="middle" font-size="10" font-weight="700" fill="#f97316" font-family="Inter,sans-serif">Br</text>
  <text x="596" y="285" text-anchor="end" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ HIGH</text>
  <!-- Left: Cl below -->
  <line x1="680" y1="343" x2="635" y2="371" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="622" cy="378" r="18" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="622" y="383" text-anchor="middle" font-size="10" font-weight="700" fill="#ef4444" font-family="Inter,sans-serif">Cl</text>
  <!-- Right: CH3 below (opposite to Br) -->
  <line x1="760" y1="343" x2="805" y2="371" stroke="#a78bfa" stroke-width="2"/>
  <circle cx="818" cy="378" r="20" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
  <text x="818" y="383" text-anchor="middle" font-size="9.5" font-weight="700" fill="#c4b5fd" font-family="Inter,sans-serif">CH₃</text>
  <text x="844" y="381" text-anchor="start" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ HIGH</text>
  <!-- Right: H above -->
  <line x1="760" y1="317" x2="805" y2="289" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="818" cy="282" r="14" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
  <text x="818" y="287" text-anchor="middle" font-size="10" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- E diagonal arrow -->
  <line x1="622" y1="282" x2="818" y2="378" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="720" y="242" text-anchor="middle" font-size="8.5" fill="#fbbf24" font-family="Inter,sans-serif">★ HIGH priorities on opposite sides → E</text>

  <!-- VS circle -->
  <circle cx="500" cy="330" r="22" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="500" y="335" text-anchor="middle" font-size="12" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">vs</text>
  <line x1="500" y1="230" x2="500" y2="305" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="500" y1="355" x2="500" y2="430" stroke="#1e293b" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Arrow from step 1 to step 2 -->
  <text x="500" y="215" text-anchor="middle" font-size="10" fill="#475569" font-family="Inter,sans-serif">▼ Now use priorities to decide E or Z ▼</text>
</svg>`)}

> [!BOX]
> ### 🍇 Practical Uses of Ethene
> Ethene is a highly important industrial chemical with three main practical uses:
> 
> 1. **Making Polymers:** Ethene undergoes addition polymerisation to produce poly(ethene) (polythene), widely used in packaging and plastic bags.
> 2. **Making Ethanol:** Hydration of ethene with steam in the presence of a phosphoric acid catalyst produces industrial ethanol (solvent and fuel).
> 3. **Ripening Fruit:** Ethene acts as a natural plant hormone that triggers and controls the ripening process in fruits (like bananas and tomatoes).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Assigning E/Z Names
> **Question:** Assign the E/Z nomenclature to the stereoisomer shown below:
> * Left Carbon: bonded to -Cl and -H
> * Right Carbon: bonded to -CH₃ and -CH₂CH₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the Left Carbon:**
> >    * Atom 1: Chlorine (atomic number 17)
> >    * Atom 2: Hydrogen (atomic number 1)
> >    * Priority: -Cl has higher priority than -H.
> > 
> > 2. **Analyze the Right Carbon:**
> >    * Group 1: -CH₃ (carbon bonded to 3 hydrogens)
> >    * Group 2: -CH₂CH₃ (carbon bonded to 1 carbon and 2 hydrogens)
> >    * Priority: Since both connect directly via carbon, we compare the next atoms. -CH₂CH₃ connects to a carbon, which has a higher atomic number than the hydrogens of -CH₃.
> >    * Priority: -CH₂CH₃ has higher priority than -CH₃.
> > 
> >    * If -Cl (high priority) and -CH₂CH₃ (high priority) are on the same side, it is the **Z-isomer** (Z-1-chloro-2-methylbut-1-ene).
> >    * If they are on opposite sides, it is the **E-isomer**.
> > 

> [!EXAMPLE]
> #### 📝 Worked Example 2: The cis-trans Naming System
> **Question:** A compound has two identical functional groups on the same side of a carbon-carbon double bond. According to the cis-trans naming system, how would this isomer be designated?
> 
> * **A)** Cis
> * **B)** E
> * **C)** Z
> * **D)** Trans
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the positions of the identical groups:**
> >    * The identical functional groups are on the same side of the C=C double bond.
> > 2. **Apply cis-trans rules:**
> >    * In the cis-trans system, 'cis' designates that identical or similar groups are on the same side. 'Trans' is for opposite sides.
> > 3. **Correct Answer:** **A**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Uses of Ethene
> **Question:** Which of the following is not a primary use of ethene?
> 
> * **A)** Manufacturing of polymers (e.g., polyethene).
> * **B)** Production of ethanol.
> * **C)** As a fuel in internal combustion engines.
> * **D)** Ripening of fruits.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluate options against known uses:**
> >    * A, B, and D are well-documented primary industrial and agricultural uses of ethene.
> >    * Ethene is not used as a fuel in internal combustion engines because it is highly volatile and less efficient/stable than liquid fuels like petrol or diesel.
> > 2. **Correct Answer:** **C**

> [!EXAMPLE]
> #### 📝 Worked Example 4: Meaning of Z in E-Z System
> **Question:** In the E-Z naming system, what does the "Z" designation signify?
> 
> * **A)** The two highest priority groups are on opposite sides of the double bond.
> * **B)** The two highest priority groups are on the same side of the double bond.
> * **C)** The molecule has a "zig-zag" shape.
> * **D)** The compound is saturated.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define E and Z nomenclature:**
> >    * 'Z' comes from the German word 'Zusammen', meaning 'together' (same side).
> >    * 'E' comes from the German word 'Entgegen', meaning 'opposite' (opposite sides).
> > 2. **Correct Answer:** **B**

> [!EXAMPLE]
> #### 📝 Worked Example 5: Assigning Priorities on Alkenes
> **Question:** Consider a compound with a C=C double bond where the two groups on one carbon are -H and -Cl, and the two groups on the other carbon are -CH₃ and -Br. To assign E or Z configuration, which atoms would you prioritize for comparison on each carbon?
> 
> * **A)** H and CH₃
> * **B)** Cl and Br
> * **C)** H and Br
> * **D)** Cl and CH₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine priority on the first carbon (bonded to H and Cl):**
> >    * Chlorine (atomic number 17) has a higher priority than hydrogen (atomic number 1). So, **Cl** is prioritized.
> > 2. **Determine priority on the second carbon (bonded to CH₃ and Br):**
> >    * Bromine (atomic number 35) has a higher priority than the carbon of the methyl group (atomic number 6). So, **Br** is prioritized.
> > 3. **Compare the prioritized groups:**
> > 4. **Correct Answer:** **B**

> [!EXAMPLE]
> #### 📝 Worked Example 6: Explaining Why a Molecule Does Not Show E/Z Isomerism
> **Question:** Explain why but-2-ene shows geometric (E/Z) isomerism, but but-1-ene does not.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the general criteria for geometric isomerism:**
> >    * There must be restricted rotation around the carbon-carbon double bond (due to the presence of a π bond).
> >    * Each carbon atom of the C=C double bond must be attached to two different groups.
> > 2. **Analyze the structure of but-2-ene (CH₃CH=CHCH₃):**
> >    * The double bond is between carbon-2 and carbon-3.
> >    * Carbon-2 is bonded to H and CH₃ (two different groups). Carbon-3 is bonded to H and CH₃ (two different groups).
> >    * Therefore, but-2-ene satisfies both conditions and shows E/Z isomerism.
> > 3. **Analyze the structure of but-1-ene (CH₂=CHCH₂CH₃):**
> >    * The double bond is between carbon-1 and carbon-2.
> >    * Carbon-1 is bonded to two identical hydrogen atoms (H and H).
> >    * Because carbon-1 is bonded to identical groups, but-1-ene cannot form geometric isomers.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Complex CIP Priority Assignment
> **Question:** Determine whether the stereoisomer described below has the E or Z configuration:
> * Left Carbon: bonded to a methyl group (-CH₃) and an ethyl group (-CH₂CH₃).
> * Right Carbon: bonded to a propyl group (-CH₂CH₂CH₃) and an isopropyl group (-CH(CH₃)₂).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine priority on the Left Carbon:**
> >    * Compare the first atoms: Both groups connect via a carbon atom.
> >    * Compare the next atoms: The carbon in -CH₃ is bonded to (H, H, H). The carbon in -CH₂CH₃ is bonded to (C, H, H).
> >    * Since carbon has a higher atomic number than hydrogen, the ethyl group (-CH₂CH₃) has higher priority.
> > 2. **Determine priority on the Right Carbon:**
> >    * Compare the first atoms: Both groups connect via a carbon atom.
> >    * Compare the next atoms: The carbon in the isopropyl group (-CH(CH₃)₂) is bonded to two carbons and one hydrogen (C, C, H). The carbon in the propyl group (-CH₂CH₂CH₃) is bonded to one carbon and two hydrogens (C, H, H).
> >    * Comparing the lists (C, C, H) vs (C, H, H): The second atom list of the isopropyl group contains a carbon atom which has a higher atomic number than the hydrogen in the propyl group list.
> >    * Therefore, the isopropyl group (-CH(CH₃)₂) has higher priority.
> > 3. **Deduce configuration:**
> >    * If the high-priority groups (ethyl on the left, isopropyl on the right) are on the same side of the double bond, it is the **Z-isomer**. If they are on opposite sides, it is the **E-isomer**.
`,
    keyPoints: [
      'Stereoisomers share the same structural formula but have a different arrangement of atoms in space.',
      'E/Z isomerism requires restricted rotation (C=C double bond) and two different groups attached to each carbon of the double bond.',
      'The Cahn-Ingold-Prelog (CIP) priority rules assign priority based on higher atomic numbers.'
    ]
  },
  {
    id: 'alkene-addition-reactions-20260627',
    title: 'Reactions of Alkenes',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Reactivity & Reactions of Alkenes
> Alkenes are **more reactive than alkanes** because they contain a carbon-carbon double bond ($\\\\text{C}=\\\\text{C}$). The double bond consists of a strong $\\\\sigma$ (sigma) bond and a **weak $\\\\pi$ (pi) bond**. This $\\\\pi$ bond has high electron density and is relatively weak, making it easy to break during chemical reactions.
> 
> 
> ### 🔥 1) Combustion of Alkenes
> Alkenes undergo combustion reactions when burned in oxygen. Like alkanes, the products depend on the availability of oxygen:
> 
> **a) Complete Combustion (Excess Oxygen):**
> * Occurs when there is an excess of oxygen, producing carbon dioxide ($\\\\text{CO}_2$) and water ($\\\\text{H}_2\\\\text{O}$).
> * Releases the **maximum amount of energy** (highly exothermic) because the fuel is fully oxidized.
> * *Equation:*
>   $$\\\\text{C}_2\\\\text{H}_4 + 3\\\\text{O}_2 \\\\rightarrow 2\\\\text{CO}_2 + 2\\\\text{H}_2\\\\text{O}$$
> 
> **b) Incomplete Combustion (Lack of Oxygen):**
> * Occurs when oxygen is limited, producing highly toxic carbon monoxide ($\\\\text{CO}$) or carbon soot (C), and water ($\\\\text{H}_2\\\\text{O}$).
> * Releases **significantly less energy** compared to complete combustion because the fuel is only partially oxidized.
> * *Equation:*
>   $$\\\\text{C}_2\\\\text{H}_4 + 2\\\\text{O}_2 \\\\rightarrow 2\\\\text{CO} + 2\\\\text{H}_2\\\\text{O}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Combustion of Ethene
> **Question:** Write a balanced symbol equation for the complete combustion of ethene.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reactants and products:**
> >    * Reactants: Ethene ($\\\\text{C}_2\\\\text{H}_4$) and oxygen ($\\\\text{O}_2$).
> >    * Products: Carbon dioxide ($\\\\text{CO}_2$) and water ($\\\\text{H}_2\\\\text{O}$).
> > 
> > 2. **Balance the equation:**
> >    * $\\\\text{C}_2\\\\text{H}_4 + 3\\\\text{O}_2 \\\\rightarrow 2\\\\text{CO}_2 + 2\\\\text{H}_2\\\\text{O}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Incomplete Combustion of Propene
> **Question:** Write a balanced symbol equation for the incomplete combustion of propene ($\\\\text{C}_3\\\\text{H}_6$) that produces carbon monoxide gas ($\\\\text{CO}$) and water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the unbalanced equation:**
> >    * $\\\\text{C}_3\\\\text{H}_6 + \\\\text{O}_2 \\\\rightarrow \\\\text{CO} + \\\\text{H}_2\\\\text{O}$
> > 
> > 2. **Balance the carbon atoms:**
> >    * There are 3 carbons on the left, so we need 3 $\\\\text{CO}$ on the right:
> >    * $\\\\text{C}_3\\\\text{H}_6 + \\\\text{O}_2 \\\\rightarrow 3\\\\text{CO} + \\\\text{H}_2\\\\text{O}$
> > 
> > 3. **Balance the hydrogen atoms:**
> >    * There are 6 hydrogens on the left, so we need 3 $\\\\text{H}_2\\\\text{O}$ on the right:
> >    * $\\\\text{C}_3\\\\text{H}_6 + \\\\text{O}_2 \\\\rightarrow 3\\\\text{CO} + 3\\\\text{H}_2\\\\text{O}$
> > 
> > 4. **Balance the oxygen atoms:**
> >    * The right side has 3 (from CO) + 3 (from H₂O) = 6 oxygen atoms.
> >    * Therefore, we need 3 $\\\\text{O}_2$ molecules on the left:
> >    * $\\\\text{C}_3\\\\text{H}_6 + 3\\\\text{O}_2 \\\\rightarrow 3\\\\text{CO} + 3\\\\text{H}_2\\\\text{O}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Flame Characteristics of Alkenes
> **Question:** When cyclohexene and cyclohexane are burned separately in air, cyclohexene burns with a much more smoky, sooty flame. Explain this observation in terms of their carbon-to-hydrogen ratio.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce their molecular formulas and C:H ratios:**
> >    * Cyclohexane: $\\\\text{C}_6\\\\text{H}_{12}$ (carbon-to-hydrogen ratio is 1:2 or 50.0%).
> >    * Cyclohexene: $\\\\text{C}_6\\\\text{H}_{10}$ (carbon-to-hydrogen ratio is 1:1.67 or 60.0%).
> > 
> > 2. **Relate to incomplete combustion:**
> >    * Alkenes like cyclohexene have a higher percentage of carbon by mass compared to alkanes with the same number of carbons.
> >    * Burning in air does not supply enough oxygen to fully oxidize this high carbon concentration, leading to incomplete combustion.
> >    * Unburnt carbon particles are released as black soot, resulting in a smoky flame.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deriving the General Equation for Alkene Combustion
> **Question:** Derive the general balanced symbol equation for the complete combustion of any acyclic alkene of molecular formula CₙH₂ₙ in terms of n.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the unbalanced general equation:**
> >    * CₙH₂ₙ + x O₂ → y CO₂ + z H₂O
> > 2. **Balance Carbon (C) atoms:**
> >    * There are n carbon atoms on the reactant side. To balance, we must have n molecules of carbon dioxide on the product side:
> >    * y = n
> > 3. **Balance Hydrogen (H) atoms:**
> >    * There are 2n hydrogen atoms on the reactant side. To balance, we must have n molecules of water on the product side:
> >    * z = n
> > 4. **Balance Oxygen (O) atoms:**
> >    * The product side now contains 2n oxygen atoms (from n CO₂) and n oxygen atoms (from n H₂O), making a total of 3n oxygen atoms.
> >    * Since each oxygen molecule is diatomic (O₂), we divide the total by 2 to find the coefficient of oxygen gas:
> >    * x = 1.5n (or 3n/2)
> > 5. **Write the final balanced general equation:**
> >    * CₙH₂ₙ + 1.5n O₂ → n CO₂ + n H₂O

`,
    keyPoints: [
      'Alkenes are highly reactive due to the weak pi (π) bond, which easily breaks during addition reactions.',
      'Alkenes undergo complete combustion to form carbon dioxide and water, or incomplete combustion to form carbon monoxide and soot.'
    ]
  },
  {
    id: 'electrophilic-addition-mechanism-20260627',
    title: 'Electrophilic Addition',
    type: 'text',
    equationVisualizer: {
      reactants: [
        ['CH₂=CH₂', '#38bdf8'],
        ['Br₂',       '#f97316']
      ],
      products: [
        ['CH\u2082BrCH\u2082Br', '#10b981']
      ],
      description: 'Electrophilic addition of Bromine (Br\u2082) across the C=C double bond of Ethene to form colourless 1,2-dibromoethane. This is the basis of the bromine water test for alkenes: the reddish-brown colour of Br\u2082 is decolourised as it reacts across the double bond.'
    },
    content: `
> [!NOTE]
> ### 🔄 2) Electrophilic Addition
> **Electrophilic Addition** is a reaction where two molecules react to form a single product. The electron-rich $\\\\pi$ bond in alkenes is easily attacked by electron-deficient species called **electrophiles**, converting unsaturated alkenes to saturated compounds.
> 
> * **General Definition:** $\\\\text{Alkene} + \\\\text{Reagent} \\\\rightarrow \\\\text{Single Saturated Product}$
 
> [!BOX]
> ### 📋 Key Addition Reactions (using Propene as Example)
> 
> **a) Hydrogenation (Adding hydrogen to form an alkane):**
> * *Reagents & Conditions:* Hydrogen gas ($\\\\text{H}_2$), heated in the presence of a **Nickel (Ni)** catalyst.
> * *Equation:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{H}_2 \\\\xrightarrow{\\\\text{Ni, heat}} \\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_3$$
> * **Industrial Application — Margarine Production:**
>   * Unsaturated vegetable oils (containing C=C double bonds) are **hardened** by reacting with excess hydrogen gas in the presence of a **finely divided nickel catalyst** at approximately **200 °C**.
>   * This converts the liquid unsaturated oils into solid or semi-solid saturated fats, producing **margarine** (and other solid cooking fats).
>   * The degree of hardening can be controlled by adjusting the amount of hydrogen used, allowing production of both soft-spread and hard-block margarine.
> 
> **b) Halogenation (Adding halogens to produce di-substituted halogenoalkanes):**
> * *Reagents & Conditions:* Halogen (e.g., $\\\\text{Cl}_2$ or $\\\\text{Br}_2$) at room temperature.
> * *Reaction with Chlorine:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{Cl}_2 \\\\rightarrow \\\\text{CH}_3\\\\text{CHClCH}_2\\\\text{Cl}$$
> * *Reaction with Bromine Liquid:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{Br}_2\\\\text{(l)} \\\\rightarrow \\\\text{CH}_3\\\\text{CHBrCH}_2\\\\text{Br}$$
> * *Reaction with Bromine Water (Alkene Test):*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{Br}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{Br} + \\\\text{HBr}$$
>   * *Observations:* The reddish-brown colour of the bromine water is **decolourised** (turns colourless). The mole ratio of reaction is **1:1**.
> 
> **c) Hydrohalogenation (Adding hydrogen halides to give mono-substituted halogenoalkanes):**
> * *Reagents & Conditions:* Hydrogen halide (e.g., $\\\\text{HCl}$, $\\\\text{HBr}$) at room temperature.
> * *Equation:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{HCl} \\\\rightarrow \\\\text{CH}_3\\\\text{CHClCH}_3$$
> 
> **d) Hydration via Steam (Industrial production of alcohols):**
> * *Reagents & Conditions:* Steam ($\\\\text{H}_2\\\\text{O(g)}$) at 300 °C, 60-70 atm pressure, in the presence of a **Phosphoric acid ($\\\\text{H}_3\\\\text{PO}_4$)** catalyst.
> * *Equation:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{H}_2\\\\text{O(g)} \\\\xrightarrow{\\\\text{H}_3\\\\text{PO}_4} \\\\text{CH}_3\\\\text{CH(OH)CH}_3$$
> 
> **e) Hydration via Concentrated Sulfuric Acid:**
> * *Reagents & Conditions:* Cold concentrated **Sulfuric acid ($\\\\text{H}_2\\\\text{SO}_4$)** catalyst, followed by adding water ($\\\\text{H}_2\\\\text{O(l)}$) and warming.
> * *Equation:*
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{H}_2\\\\text{O(l)} \\\\xrightarrow{\\\\text{conc. } \\\\text{H}_2\\\\text{SO}_4} \\\\text{CH}_3\\\\text{CH(OH)CH}_3$$

> [!IMPORTANT]
> ### 🧪 Electrophilic Addition Mechanism in Polar Molecules
> This mechanism describes how electrophiles react with the C=C double bond. Let's look at the mechanism for the reaction of propene with hydrogen bromide (HBr):
> 
> 1. **Polarisation of the Electrophile:**
>    * H-Br is polar because bromine is more electronegative than hydrogen: $\\\\text{H}^{\\\\delta+} - \\\\text{Br}^{\\\\delta-}$.
> 2. **Attack by the Double Bond:**
>    * A curly arrow starts from the C=C double bond ($\\\\pi$ electrons) and points to the hydrogen atom ($\\\\text{H}^{\\\\delta+}$) of HBr.
>    * The H-Br bond breaks heterolytically, with the electron pair moving to the bromine atom (represented by a curly arrow from the H-Br bond to Br).
> 3. **Formation of Carbocation Intermediate:**
>    * Hydrogen bonds to the end carbon (C1), leaving the middle carbon (C2) electron-deficient with a positive charge. This species is a secondary **carbocation** ($\\\\text{CH}_3\\\\text{CH}^+\\\\text{CH}_3$).
>    * A bromide ion ($\\\\text{Br}^-$) is formed.
> 4. **Nucleophilic Attack:**
>    * A curly arrow starts from a lone pair on the bromide ion ($\\\\text{Br}^-$) and points to the positively charged carbon atom of the carbocation.
>    * This forms the final C-Br bond, producing 2-bromopropane.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 380" width="100%" height="auto">
  <defs>
    <linearGradient id="bg-addition" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#2563eb"/>
    </marker>
  </defs>
  <rect width="1000" height="380" rx="16" fill="url(#bg-addition)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">Electrophilic Addition Mechanism of HBr to Propene</text>
  <line x1="80" y1="44" x2="920" y2="44" stroke="#1e293b" stroke-width="1"/>

  <!-- ==================== Reactants (Step 1) ==================== -->
  <!-- Propene -->
  <text x="110" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="180" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="128" y1="177" x2="172" y2="177" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="128" y1="183" x2="172" y2="183" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Hydrogens on C1 -->
  <line x1="102" y1="178" x2="82" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="68" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="102" y1="188" x2="82" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="68" y="216" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl on C2 -->
  <line x1="190" y1="168" x2="190" y2="145" stroke="#e2e8f0" stroke-width="2"/>
  <text x="180" y="138" font-size="14" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- Hydrogen on C2 -->
  <line x1="190" y1="192" x2="190" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="185" y="232" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- H-Br -->
  <text x="142" y="260" font-size="15" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="156" y1="256" x2="180" y2="256" stroke="#fb923c" stroke-width="2"/>
  <text x="186" y="260" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Dipoles -->
  <text x="142" y="244" font-size="10" fill="#38bdf8" font-family="Inter,sans-serif">δ+</text>
  <text x="190" y="244" font-size="10" fill="#f43f5e" font-family="Inter,sans-serif">δ-</text>

  <!-- Curly Arrow 1: C=C Double Bond to H(delta+) -->
  <path d="M150 190 Q120 220 134 256" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
  <!-- Curly Arrow 2: H-Br Bond to Br -->
  <path d="M168 256 Q178 244 188 250" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- ==================== Arrow 1 -> 2 ==================== -->
  <path d="M260 180 L320 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="290" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 1</text>

  <!-- ==================== Intermediate (Step 2) ==================== -->
  <!-- Carbocation intermediate -->
  <text x="370" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="440" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="388" y1="180" x2="432" y2="180" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Hydrogens on C1 (now CH3) -->
  <line x1="362" y1="178" x2="342" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="328" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="362" y1="188" x2="342" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="328" y="216" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="378" y1="168" x2="378" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="373" y="138" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl on C2 -->
  <line x1="448" y1="168" x2="448" y2="145" stroke="#e2e8f0" stroke-width="2"/>
  <text x="438" y="138" font-size="14" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- Hydrogen on C2 -->
  <line x1="448" y1="192" x2="448" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="443" y="232" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Positive charge on C2 -->
  <circle cx="465" cy="180" r="8" fill="#f43f5e"/>
  <text x="465" y="183" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">+</text>

  <!-- Bromide Ion (Br-) -->
  <circle cx="403" cy="261" r="1.5" fill="#fb923c"/>
  <circle cx="409" cy="261" r="1.5" fill="#fb923c"/>
  <text x="405" y="278" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="428" cy="274" r="7.5" fill="#10b981"/>
  <text x="428" y="278" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>

  <!-- Curly Arrow 3: Br- lone pair to C2(+) -->
  <path d="M406 256 Q390 220 436 186" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- ==================== Arrow 2 -> 3 ==================== -->
  <path d="M525 180 L585 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="555" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 2</text>

  <!-- ==================== Product (2-bromopropane) ==================== -->
  <text x="660" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="730" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="678" y1="180" x2="722" y2="180" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Hydrogens on C1 -->
  <line x1="652" y1="178" x2="632" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="618" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="652" y1="188" x2="632" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="618" y="216" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="668" y1="168" x2="668" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="663" y="138" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl on C2 -->
  <line x1="738" y1="168" x2="738" y2="145" stroke="#e2e8f0" stroke-width="2"/>
  <text x="728" y="138" font-size="14" fill="#e2e8f0" font-family="Inter,sans-serif">CH₃</text>

  <!-- Hydrogen on C2 -->
  <line x1="740" y1="178" x2="760" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="764" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Bromine on C2 -->
  <line x1="738" y1="192" x2="738" y2="225" stroke="#fb923c" stroke-width="2"/>
  <text x="730" y="242" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
</svg>`)}

> [!BOX]
> ### 🧪 Electrophilic Addition Mechanism in Non-Polar Molecules
> Halogenation (e.g., with non-polar $\\\\text{Br}_2$ or other non-polar molecules) starts through an induced dipole:
> 
> * **Polarisation:** The double bond (electron rich) in the alkene repels the bonding electrons in the non-polar bond or molecule (such as $\\\\text{H}_2$ or $\\\\text{Br}_2$), producing a dipole moment ($\\\\text{Br}^{\\\\delta+} - \\\\text{Br}^{\\\\delta-}$) which starts the reaction.
> * **Attack:** The double bond attacks the electrophilic $\\\\text{Br}^{\\\\delta+}$ atom, forming a cyclic bromonium ion (or a standard carbocation intermediate) and a halide ion ($\\\\text{Br}^-$).
> * **Curly Arrow Rules:** Remember, all curly arrows in these mechanisms MUST start from either a bond (representing bond fission) or from a lone pair of electrons.
> * **Final Attack:** A curly arrow starts from a lone pair on the bromide ion ($\\\\text{Br}^-$) and points to one of the carbons to form the 1,2-dihalogenoalkane.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 380" width="100%" height="auto">
  <defs>
    <linearGradient id="bg-halo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#2563eb"/>
    </marker>
  </defs>
  <rect width="1000" height="380" rx="16" fill="url(#bg-halo)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">Electrophilic Addition Mechanism of Br₂ to Ethene (Halogenation)</text>
  <line x1="80" y1="44" x2="920" y2="44" stroke="#1e293b" stroke-width="1"/>

  <!-- ==================== Reactants (Step 1) ==================== -->
  <!-- Ethene -->
  <text x="110" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="180" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="128" y1="177" x2="172" y2="177" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="128" y1="183" x2="172" y2="183" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Hydrogens on C1 -->
  <line x1="102" y1="178" x2="82" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="68" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="102" y1="188" x2="82" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="68" y="216" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Hydrogens on C2 -->
  <line x1="190" y1="178" x2="210" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="214" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="190" y1="188" x2="210" y2="204" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="214" y="216" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Bromine (Br-Br) -->
  <text x="142" y="260" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <line x1="150" y1="268" x2="150" y2="294" stroke="#fb923c" stroke-width="2"/>
  <text x="142" y="315" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Induced Dipoles -->
  <text x="165" y="258" font-size="10" fill="#38bdf8" font-family="Inter,sans-serif">δ+</text>
  <text x="165" y="313" font-size="10" fill="#f43f5e" font-family="Inter,sans-serif">δ-</text>

  <!-- Curly Arrow 1: C=C Double Bond to Br(delta+) -->
  <path d="M150 190 Q120 225 138 248" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
  <!-- Curly Arrow 2: Br-Br Bond to Br(delta-) -->
  <path d="M150 280 Q130 285 138 298" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- ==================== Arrow 1 -> 2 ==================== -->
  <path d="M260 180 L320 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="290" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 1</text>

  <!-- ==================== Intermediate (Step 2) ==================== -->
  <!-- Carbocation intermediate -->
  <text x="370" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="440" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="388" y1="180" x2="432" y2="180" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Bromine on C1 -->
  <line x1="378" y1="192" x2="378" y2="225" stroke="#fb923c" stroke-width="2"/>
  <text x="370" y="242" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Hydrogens on C1 -->
  <line x1="362" y1="178" x2="342" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="328" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="378" y1="168" x2="378" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="373" y="138" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Hydrogens on C2 -->
  <line x1="450" y1="178" x2="470" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="474" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="448" y1="168" x2="448" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="443" y="138" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Positive charge on C2 -->
  <circle cx="453" cy="192" r="8" fill="#f43f5e"/>
  <text x="453" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">+</text>

  <!-- Bromide Ion (Br-) -->
  <circle cx="428" cy="275" r="1.5" fill="#fb923c"/>
  <circle cx="434" cy="275" r="1.5" fill="#fb923c"/>
  <text x="430" y="292" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="453" cy="288" r="7.5" fill="#10b981"/>
  <text x="453" y="292" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>

  <!-- Curly Arrow 3: Br- lone pair to C2(+) -->
  <path d="M431 270 Q410 240 436 196" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- ==================== Arrow 2 -> 3 ==================== -->
  <path d="M525 180 L585 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="555" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 2</text>

  <!-- ==================== Product (1,2-dibromoethane) ==================== -->
  <text x="660" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="730" y="184" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="678" y1="180" x2="722" y2="180" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Bromine on C1 -->
  <line x1="668" y1="192" x2="668" y2="225" stroke="#fb923c" stroke-width="2"/>
  <text x="660" y="242" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Bromine on C2 -->
  <line x1="738" y1="168" x2="738" y2="135" stroke="#fb923c" stroke-width="2"/>
  <text x="730" y="125" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Hydrogens on C1 -->
  <line x1="652" y1="178" x2="632" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="618" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="668" y1="168" x2="668" y2="145" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="663" y="138" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Hydrogens on C2 -->
  <line x1="740" y1="178" x2="760" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="764" y="158" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="738" y1="192" x2="738" y2="225" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="733" y="242" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
</svg>`)}
> 
> > [!WARNING]
> > ### ⚠️ Curly Arrow Conventions
> > Always ensure that curly arrows start directly from a **bond** or a **lone pair of electrons**. Starting an arrow from an atom label or empty space is a common exam pitfall.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Reaction Products
> **Question:** Propene (CH₃CH=CH₂) is reacted with steam in the presence of a phosphoric acid catalyst. Write down the structural formulas of the two possible alcohol products.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction type:**
> >    * Reaction of an alkene with steam in the presence of an acid catalyst is **hydration**, adding -H and -OH across the double bond.
> > 
> > 2. **Deduce product 1 (addition of OH to carbon-2):**
> >    * Addition of -OH to the middle carbon and -H to the end carbon: CH₃CH(OH)CH₃
> >    * Name: Propan-2-ol
> > 
> > 3. **Deduce product 2 (addition of OH to carbon-1):**
> >    * Addition of -OH to the end carbon and -H to the middle carbon: CH₃CH₂CH₂OH
> >    * Name: Propan-1-ol

> [!EXAMPLE]
> #### 📝 Worked Example 2: Testing for Unsaturation
> **Question:** The reaction of an alkene with bromine water is a common test for unsaturation. What visible change occurs if an alkene is present?
> 
> * **A)** The solution turns purple.  
> * **B)** The reddish-brown color of bromine water disappears.  
> * **C)** A white precipitate forms.  
> * **D)** The solution becomes cloudy.  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand the reaction:**
> >    * Bromine water is a reddish-brown (or orange-brown) aqueous solution of molecular bromine.
> >    * When added to an alkene, bromine undergoes electrophilic addition across the C=C double bond, forming a colourless halogenated compound.
> > 
> > 2. **Deduce the observations:**
> >    * Because the free molecular bromine is consumed in the reaction, the reddish-brown color of the bromine water disappears (decolourises).
> >    * Therefore, the correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Drawing Curly Arrows
> **Question:** Describe what a curly arrow represents in an organic reaction mechanism and where it must start and end.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define the curly arrow:**
> >    * A curly arrow represents the movement of a **pair of electrons**.
> > 
> > 2. **Specify start and end points:**
> >    * The tail of the arrow **must start** from either a covalent bond (representing a pair of bonding electrons) or a lone pair of electrons.
> >    * The head of the arrow must point exactly to the atom that will receive the electron pair to form a new bond.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Hydrogenation of Propene
> **Question:** When propene reacts with hydrogen gas in the presence of a nickel catalyst and heat, what is the main product formed?
> 
> * **A)** Propane.
> * **B)** Propan-1-ol.
> * **C)** Propan-2-ol.
> * **D)** 1,2-dichloropropane.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction type:**
> >    * Reacting an alkene with hydrogen gas ($\\\\text{H}_2$) in the presence of a nickel catalyst and heat is a **hydrogenation** reaction.
> > 
> > 2. **Determine the addition product:**
> >    * Hydrogenation adds two hydrogen atoms across the $\\\\text{C}=\\\\text{C}$ double bond, converting the unsaturated alkene into a saturated alkane.
> >    * Propene ($\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2$) becomes propane ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_3$).
> > 
> > 3. **Correct Answer:** **A**

> [!EXAMPLE]
> #### 📝 Worked Example 5: Hydrohalogenation of But-2-ene
> **Question:** Symmetrical but-2-ene reacts with hydrogen chloride at room temperature. Write down the structural formula and IUPAC name of the organic product formed.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction type:**
> >    * Reacting an alkene with a hydrogen halide (HCl) is **hydrohalogenation**, where -H and -Cl are added across the C=C double bond.
> > 
> > 2. **Apply the addition to symmetrical but-2-ene ($\\\\text{CH}_3\\\\text{CH}=\\\\text{CHCH}_3$):**
> >    * Since the alkene is symmetrical, adding -H to one carbon and -Cl to the other carbon yields the same single product regardless of which carbon receives the chlorine.
> >    * The product is $\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH(Cl)CH}_3$.
> > 
> > 3. **Name the product:**
> >    * The longest carbon chain has 4 carbons (butane), and a chlorine substituent is on carbon-2.
> >    * IUPAC Name: 2-chlorobutane.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Halogenation of Ethene
> **Question:** Write a balanced chemical equation for the reaction of ethene with chlorine gas, using structural formulas for the organic molecules.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reactants and type of addition:**
> >    * Ethene ($\\\\text{CH}_2=\\\\text{CH}_2$) reacts with chlorine ($\\\\text{Cl}_2$) in a **halogenation** addition reaction.
> >    * Both chlorine atoms add across the C=C double bond, breaking the $\\\\pi$ bond.
> > 
> > 2. **Deduce the structure of the product:**
> >    * Adding a chlorine atom to each carbon of ethene yields 1,2-dichloroethane ($\\\\text{CH}_2\\\\text{ClCH}_2\\\\text{Cl}$).
> > 
> > 3. **Write the balanced equation:**
> >    * $\\\\text{CH}_2=\\\\text{CH}_2 + \\\\text{Cl}_2 \\\\rightarrow \\\\text{CH}_2\\\\text{ClCH}_2\\\\text{Cl}$

> [!EXAMPLE]
> #### 📝 Worked Example 7: Explaining the Bromine Water Reaction Products
> **Question:** When propene reacts with bromine water, a mixture of products is formed, with 1-bromopropan-2-ol being the major organic product. Explain why 1-bromopropan-2-ol is formed rather than 1,2-dibromopropane, and why the -OH group attaches to carbon-2.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the first step of addition:**
> >    * The electrophilic bromine molecule is polarized by the electron-rich C=C double bond. The double bond attacks the Br atom, forming a secondary carbocation intermediate (CH₃CH⁺CH₂Br) and a bromide ion (Br⁻).
> > 2. **Explain why the product contains -OH instead of -Br:**
> >    * The reaction takes place in aqueous solution (bromine water). Water molecules (H₂O) are present in a much higher concentration than bromide ions (Br⁻).
> >    * Therefore, a water molecule is much more likely to act as the nucleophile and attack the positive carbon of the carbocation intermediate, which then loses a proton (H⁺) to form the alcohol group (-OH).
> > 3. **Explain the regioselectivity (-OH on carbon-2):**
> >    * The secondary carbocation intermediate (CH₃CH⁺CH₂Br) is more stable than the primary carbocation intermediate (CH₃CH(Br)CH₂⁺) due to the electron-donating inductive effect of the alkyl group.
> >    * Thus, the water nucleophile attacks the more stable secondary carbocation at carbon-2, placing the -OH group on carbon-2 and the bromine atom on carbon-1.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Describing the Electrophilic Addition Mechanism
> **Question:** Describe the step-by-step mechanism for the reaction between ethene and hydrogen bromide (HBr). Outline the electron movements and state the type of bond fission that occurs.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Describe Step 1 (Polarisation and Electrophilic Attack):**
> >    * The H-Br molecule is polar (Hδ⁺-Brδ⁻) due to the electronegativity difference.
> >    * A curly arrow is drawn from the C=C double bond (electron-rich region) to the hydrogen atom (Hδ⁺).
> > 2. **Identify the bond fission:**
> >    * The H-Br bond breaks heterolytically, where both bonding electrons move to the bromine atom. This is shown by a curly arrow from the H-Br bond to the Br atom.
> >    * This forms a primary carbocation intermediate (CH₃CH₂⁺) and a bromide ion (Br⁻).
> > 3. **Describe Step 2 (Nucleophilic Attack):**
> >    * A curly arrow is drawn from a lone pair of electrons on the bromide ion (Br⁻) to the positively charged carbon atom of the carbocation.
> >    * This forms a new C-Br covalent bond, yielding the final product: bromoethane.

`,
    keyPoints: [
      'Electrophilic addition is initiated by the high electron density of the pi (π) bond attacking an electron-deficient electrophile.',
      'Curly arrows must start from an electron pair (bond or lone pair) and point directly to the electron-accepting atom.',
      'Non-polar molecules (like Br₂) are polarised as they approach the electron-rich double bond.'
    ]
  },
  {
    id: 'markovnikov-carbocation-stability-20260627',
    title: "Markovnikov's Rule & Carbocation Stability",
    type: 'text',
    content: `
> [!IMPORTANT]
> ### ⚖️ Symmetrical vs. Unsymmetrical Alkenes
> * **Symmetrical Alkene:** The groups attached to each C of the double bond are identical (e.g., ethene, but-2-ene). Reaction with HBr yields only **one** product.
> * **Unsymmetrical Alkene:** The groups attached to the double bond carbons are different (e.g., propene, but-1-ene). Reaction with HBr yields a mixture of **two** structural isomers.
> 
> > [!IMPORTANT]
> > ### 🧲 Carbocation Stability Order
> > Carbocations are classified by the number of alkyl groups attached to the positively charged carbon atom. A tertiary carbocation intermediate is more stable than a secondary carbocation (intermediate) due to the electron-donating inductive effect of more alkyl groups:
> > 
> > 1. **Primary ($1^{\\\\circ}$):** One alkyl group attached, e.g., $\\\\text{CH}_3\\\\text{CH}_2^+$. Least stable.
> > 2. **Secondary ($2^{\\\\circ}$):** Two alkyl groups attached, e.g., $(\\\\text{CH}_3)_2\\\\text{CH}^+$. More stable.
> > 3. **Tertiary ($3^{\\\\circ}$):** Three alkyl groups attached, e.g., $(\\\\text{CH}_3)_3\\\\text{C}^+$. Most stable.
> 
> [!NOTE]
> ### 📜 Markovnikov's Rule
> **Markovnikov’s rule:** When a protic acid (HX) is added to an asymmetric alkene, the acidic hydrogen (H⁺) attaches itself to the carbon having a greater number of hydrogen substituents whereas the halide (X⁻) group attaches itself to the carbon atom which has a greater number of alkyl substituents.
> * **Major Product:** Formed via the **more stable** carbocation intermediate.
> * **Minor Product:** Formed via the **less stable** carbocation intermediate.

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" width="100%" height="auto">
  <defs>
    <linearGradient id="bg-mech" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#070f1e"/>
      <stop offset="100%" stop-color="#0b1b35"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="480" rx="16" fill="url(#bg-mech)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Title -->
  <text x="500" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">Electrophilic Addition Mechanism of HBr to Propene (Markovnikov's Rule)</text>
  <line x1="80" y1="44" x2="920" y2="44" stroke="#1e293b" stroke-width="1"/>

  <!-- ==================== LEFT: REACTANTS ==================== -->
  <!-- Propene -->
  <!-- C1 (left) -->
  <text x="60" y="244" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <!-- C2 (middle) -->
  <text x="130" y="244" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <!-- C3 (methyl carbon, top right) -->
  <text x="195" y="194" font-size="16" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>

  <!-- Bonds in Propene -->
  <!-- C=C Double Bond -->
  <line x1="78" y1="237" x2="122" y2="237" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="78" y1="243" x2="122" y2="243" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- C2-C3 Single Bond -->
  <line x1="148" y1="234" x2="190" y2="198" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Hydrogens on C1 -->
  <line x1="52" y1="238" x2="32" y2="222" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="18" y="218" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="52" y1="248" x2="32" y2="264" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="18" y="276" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Hydrogen on C2 -->
  <line x1="140" y1="252" x2="152" y2="278" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="150" y="294" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Hydrogens on C3 (Methyl) -->
  <line x1="210" y1="184" x2="235" y2="169" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="240" y="167" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="195" y1="184" x2="175" y2="164" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="162" y="162" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="212" y1="198" x2="238" y2="214" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="242" y="226" font-size="14" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Electrophile: H-Br -->
  <text x="195" y="275" font-size="15" font-weight="700" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="212" y1="270" x2="242" y2="270" stroke="#fb923c" stroke-width="2"/>
  <text x="248" y="275" font-size="15" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>

  <!-- Dipoles -->
  <text x="195" y="256" font-size="10" fill="#38bdf8" font-family="Inter,sans-serif">δ+</text>
  <text x="250" y="256" font-size="10" fill="#f43f5e" font-family="Inter,sans-serif">δ-</text>

  <!-- Br Lone Pairs -->
  <circle cx="270" cy="265" r="1.5" fill="#fb923c"/>
  <circle cx="274" cy="265" r="1.5" fill="#fb923c"/>
  <circle cx="270" cy="275" r="1.5" fill="#fb923c"/>
  <circle cx="274" cy="275" r="1.5" fill="#fb923c"/>

  <!-- Curly Arrow 1: C=C Double Bond to H(delta+) -->
  <path d="M100 230 Q120 180 185 245" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
  <!-- Curly Arrow 2: H-Br Bond to Br -->
  <path d="M225 270 Q235 250 250 262" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>


  <!-- ==================== PATHWAY ARROWS (STEP 1) ==================== -->
  <!-- Upper Pathway -->
  <path d="M290 195 Q310 165 335 155" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
  <text x="325" y="135" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 1</text>
  <text x="325" y="147" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">Major path</text>

  <!-- Lower Pathway -->
  <path d="M290 285 Q310 315 335 325" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
  <text x="325" y="345" font-size="11" font-weight="700" fill="#a78bfa" font-family="Inter,sans-serif">step 1</text>
  <text x="325" y="357" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">Minor path</text>

  <text x="320" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#64748b" font-family="Inter,sans-serif">OR</text>


  <!-- ==================== MIDDLE: INTERMEDIATES ==================== -->
  <!-- ===== UPPER INTERMEDIATE: Secondary Carbocation ===== -->
  <!-- Backbone -->
  <text x="410" y="144" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="475" y="144" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="540" y="94" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="428" y1="140" x2="468" y2="140" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="492" y1="134" x2="535" y2="98" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Left H's (now CH3) -->
  <line x1="402" y1="138" x2="382" y2="122" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="370" y="118" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="402" y1="148" x2="382" y2="164" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="370" y="176" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <!-- New added H on C1 -->
  <line x1="418" y1="152" x2="418" y2="178" stroke="#34d399" stroke-width="1.8"/>
  <text x="413" y="192" font-size="13" font-weight="700" fill="#34d399" font-family="Inter,sans-serif">H</text>

  <!-- Carbocation on C2 (Middle C has +) -->
  <circle cx="488" cy="120" r="8.5" fill="#f43f5e"/>
  <text x="488" y="123" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">+</text>
  <line x1="485" y1="152" x2="497" y2="178" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="495" y="192" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl H's -->
  <line x1="555" y1="84" x2="580" y2="69" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="585" y="67" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="540" y1="84" x2="520" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="508" y="262" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="557" y1="98" x2="583" y2="114" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="587" y="126" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <text x="485" y="52" text-anchor="middle" font-size="10.5" fill="#60a5fa" font-weight="700" font-family="Inter,sans-serif">Secondary Carbocation (2°)</text>
  <text x="485" y="64" text-anchor="middle" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">More stable (2 alkyl groups)</text>

  <!-- Bromide Ion (Br-) -->
  <circle cx="528" cy="162" r="1.5" fill="#fb923c"/>
  <circle cx="528" cy="168" r="1.5" fill="#fb923c"/>
  <text x="535" y="169" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="558" cy="165" r="7.5" fill="#10b981"/>
  <text x="558" y="169" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>
  <!-- Curly Arrow 3: Br- lone pair to C2(+) -->
  <path d="M528 165 Q488 165 486 138" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>


  <!-- ===== LOWER INTERMEDIATE: Primary Carbocation ===== -->
  <!-- Backbone -->
  <text x="410" y="344" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="475" y="344" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="540" y="294" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="428" y1="340" x2="468" y2="340" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="492" y1="334" x2="535" y2="298" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Left C1 has Carbocation (+) -->
  <circle cx="423" cy="320" r="8.5" fill="#f43f5e"/>
  <text x="423" y="323" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff" font-family="Inter,sans-serif">+</text>
  <line x1="402" y1="338" x2="382" y2="322" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="370" y="318" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="402" y1="348" x2="382" y2="364" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="370" y="376" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Middle C2 has added H -->
  <line x1="485" y1="352" x2="497" y2="378" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="495" y="392" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="478" y1="332" x2="478" y2="306" stroke="#34d399" stroke-width="1.8"/>
  <text x="473" y="296" font-size="13" font-weight="700" fill="#34d399" font-family="Inter,sans-serif">H</text>

  <!-- Methyl H's -->
  <line x1="555" y1="284" x2="580" y2="269" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="585" y="267" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="540" y1="284" x2="520" y2="264" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="508" y="262" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="557" y1="298" x2="583" y2="314" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="587" y="326" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <text x="485" y="420" text-anchor="middle" font-size="10.5" fill="#a78bfa" font-weight="700" font-family="Inter,sans-serif">Primary Carbocation (1°)</text>
  <text x="485" y="432" text-anchor="middle" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">Less stable (1 alkyl group)</text>

  <!-- Bromide Ion (Br-) -->
  <circle cx="380" cy="393" r="1.5" fill="#fb923c"/>
  <circle cx="386" cy="393" r="1.5" fill="#fb923c"/>
  <text x="375" y="405" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="398" cy="401" r="7.5" fill="#10b981"/>
  <text x="398" y="405" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>
  <!-- Curly Arrow 4: Br- lone pair to C1(+) -->
  <path d="M383 393 Q423 393 414 346" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>


  <!-- ==================== STEP 2 ARROWS ==================== -->
  <path d="M625 140 L670 140" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="648" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 2</text>

  <path d="M625 340 L670 340" fill="none" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="648" y="332" text-anchor="middle" font-size="11" font-weight="700" fill="#a78bfa" font-family="Inter,sans-serif">step 2</text>


  <!-- ==================== RIGHT: PRODUCTS ==================== -->
  <!-- ===== UPPER PRODUCT: 2-bromopropane (Major) ===== -->
  <!-- Backbone -->
  <text x="730" y="144" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="795" y="144" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="860" y="94" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="748" y1="140" x2="788" y2="140" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="812" y1="134" x2="855" y2="98" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Left H's -->
  <line x1="722" y1="138" x2="702" y2="122" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="690" y="118" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="722" y1="148" x2="702" y2="164" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="690" y="176" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="738" y1="152" x2="738" y2="178" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="733" y="192" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Middle C2 has added Br (from bottom) -->
  <line x1="805" y1="152" x2="805" y2="178" stroke="#fb923c" stroke-width="2"/>
  <text x="798" y="194" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <!-- Middle H -->
  <line x1="805" y1="130" x2="805" y2="114" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="800" y="108" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl H's -->
  <line x1="875" y1="84" x2="900" y2="69" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="905" y="67" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="860" y1="84" x2="840" y2="64" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="828" y="262" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="877" y1="98" x2="903" y2="114" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="907" y="126" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Product Labels -->
  <rect x="740" y="200" width="130" height="20" rx="5" fill="#052e16" stroke="#16a34a" stroke-width="1"/>
  <text x="805" y="214" text-anchor="middle" font-size="11" font-weight="700" fill="#4ade80" font-family="Inter,sans-serif">MAJOR PRODUCT</text>


  <!-- ===== LOWER PRODUCT: 1-bromopropane (Minor) ===== -->
  <!-- Backbone -->
  <text x="730" y="344" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="795" y="344" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <text x="860" y="294" font-size="15" font-weight="700" fill="#e2e8f0" font-family="Inter,sans-serif">C</text>
  <line x1="748" y1="340" x2="788" y2="340" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="812" y1="334" x2="855" y2="298" stroke="#e2e8f0" stroke-width="2"/>

  <!-- Left C1 has added Br (from left) -->
  <line x1="722" y1="340" x2="702" y2="340" stroke="#fb923c" stroke-width="2"/>
  <text x="682" y="345" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <!-- Other C1 hydrogens -->
  <line x1="738" y1="332" x2="738" y2="306" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="733" y="296" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="738" y1="352" x2="738" y2="378" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="733" y="392" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Middle C2 hydrogens -->
  <line x1="805" y1="352" x2="805" y2="378" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="800" y="392" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="805" y1="330" x2="805" y2="306" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="800" y="296" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Methyl H's -->
  <line x1="875" y1="284" x2="900" y2="269" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="905" y="267" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="860" y1="284" x2="840" y2="264" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="828" y="262" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="877" y1="98" x2="903" y2="114" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="907" y="126" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <!-- Product Labels -->
  <rect x="740" y="400" width="130" height="20" rx="5" fill="#450a0a" stroke="#dc2626" stroke-width="1"/>
  <text x="805" y="414" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171" font-family="Inter,sans-serif">MINOR PRODUCT</text>

  <!-- Curly Arrow Definitions -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#2563eb"/>
    </marker>
  </defs>
</svg>`)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Major and Minor Products
> **Question:** Propene reacts with hydrogen bromide. Identify the major and minor products, explaining your choice in terms of carbocation stability.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the carbocation intermediates:**
> >    * If H⁺ adds to carbon-1: We get a secondary carbocation (CH₃-CH⁺-CH₃).
> >    * If H⁺ adds to carbon-2: We get a primary carbocation (CH₃-CH₂-CH₂⁺).
> > 
> > 2. **Compare stability:**
> >    * The secondary carbocation (CH₃-CH⁺-CH₃) has two electron-donating methyl groups stabilizing the positive charge.
> >    * The primary carbocation (CH₃-CH₂-CH₂⁺) has only one propyl group.
> >    * Therefore, the secondary carbocation is more stable.
> > 
> > 3. **Deduce products:**
> >    * **Major Product:** 2-bromopropane (formed via the more stable secondary carbocation).
> >    * **Minor Product:** 1-bromopropane (formed via the less stable primary carbocation).
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 2: Application of Markovnikov's Rule
> > **Question:** According to Markovnikov's rule, when HCl is added to propene, which carbon atom will the hydrogen atom predominantly attach to?
> > 
> > * **A)** The carbon atom with fewer hydrogen substituents.  
> > * **B)** The carbon atom with a greater number of alkyl substituents.  
> > * **C)** The carbon atom with more hydrogen substituents.  
> > * **D)** Either carbon atom of the double bond with equal probability.  
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Recall Markovnikov's rule:**
> > >    * When a protic acid (like HCl) is added to an unsymmetrical alkene, the hydrogen atom (H⁺) attaches to the carbon of the double bond that has the greater number of hydrogen substituents.
> > > 
> > > 2. **Apply to propene (CH₃-CH=CH₂):**
> > >    * Carbon-1 has 2 hydrogen atoms.
> > >    * Carbon-2 has 1 hydrogen atom.
> > >    * The hydrogen from HCl will predominantly attach to carbon-1 (the carbon with more hydrogen substituents), forming the more stable secondary carbocation intermediate.
> > >    * Therefore, the correct option is **C**.
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 3: Relative Carbocation Stability
> > **Question:** Which of the following carbocation intermediates is the most stable?
> > 
> > * **A)** Primary carbocation  
> > * **B)** Secondary carbocation  
> > * **C)** Methyl carbocation  
> > * **D)** Tertiary carbocation  
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Understand carbocation stability:**
> > >    * Carbocations are stabilized by the electron-donating inductive effect of surrounding alkyl groups.
> > >    * The positive charge is dispersed more effectively as the number of alkyl groups increases.
> > > 
> > > 2. **Compare stability:**
> > >    * Methyl (no alkyl groups) < Primary (1 alkyl group) < Secondary (2 alkyl groups) < Tertiary (3 alkyl groups).
> > >    * Tertiary carbocations are the most stable.
> > >    * Therefore, the correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Tertiary Carbocation Intermediate
> **Question:** 2-Methylpropene reacts with hydrogen bromide. Identify the IUPAC name of the major product and explain why it is formed in preference to the minor product.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce the two possible carbocation intermediates:**
> >    * Addition of $\\\\text{H}^+$ to carbon-1: forms a tertiary carbocation intermediate, $(\\\\text{CH}_3)_3\\\\text{C}^+$ (2-methylpropan-2-yl carbocation).
> >    * Addition of $\\\\text{H}^+$ to carbon-2: forms a primary carbocation intermediate, $(\\\\text{CH}_3)_2\\\\text{CHCH}_2^+$ (2-methylpropan-1-yl carbocation).
> > 
> > 2. **Compare stability:**
> >    * The tertiary carbocation is stabilized by three electron-donating methyl groups via the inductive effect.
> >    * The primary carbocation is stabilized by only one alkyl group.
> >    * Thus, the tertiary carbocation intermediate is much more stable and forms preferentially.
> > 
> > 3. **Identify the products:**
> >    * **Major Product:** 2-bromo-2-methylpropane (formed via the highly stable tertiary carbocation).
> >    * **Minor Product:** 1-bromo-2-methylpropane (formed via the less stable primary carbocation).

> [!EXAMPLE]
> #### 📝 Worked Example 5: Electrophilic Addition of Interhalogens
> **Question:** Propene reacts with iodine monochloride ($\\\\text{I}-\\\\text{Cl}$). Identify the major product formed and explain its formation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the polarity of the electrophile:**
> >    * Chlorine is more electronegative than iodine, so the $\\\\text{I}-\\\\text{Cl}$ molecule has a permanent dipole: $\\\\text{I}^{\\\\delta+} - \\\\text{Cl}^{\\\\delta-}$.
> >    * Therefore, the $\\\\text{I}^{\\\\delta+}$ atom acts as the electrophile.
> > 
> > 2. **Deduce the carbocation intermediate:**
> >    * $\\\\text{I}^+$ adds to carbon-1 (the carbon with more hydrogen atoms) to form the more stable secondary carbocation intermediate: $\\\\text{CH}_3\\\\text{CH}^+-\\\\text{CH}_2\\\\text{I}$.
> > 
> > 3. **Attack of the nucleophile:**
> >    * The nucleophilic chloride ion ($\\\\text{Cl}^-$) attacks the carbocation center at carbon-2.
> >    * The major product is **2-chloro-1-iodopropane**.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Explaining Carbocation Stability via the Inductive Effect
> **Question:** Explain, in terms of the inductive effect of alkyl groups, why a tertiary carbocation is more stable than a primary carbocation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Define the inductive effect of alkyl groups:**
> >    * Alkyl groups (such as methyl or ethyl groups) are electron-donating. They push negative electron density along the covalent bonds towards the positively charged carbon atom.
> > 2. **Explain positive charge dispersal:**
> >    * By donating electron density, alkyl groups help disperse (spread out) the positive charge on the carbon atom. Dispersing the charge stabilizes the carbocation intermediate.
> > 3. **Compare tertiary and primary carbocations:**
> >    * A tertiary carbocation has three electron-donating alkyl groups attached to the positive carbon, dispersing the charge very effectively.
> >    * In contrast, a primary carbocation has only one alkyl group attached, dispersing the charge much less effectively. Thus, tertiary carbocations are significantly more stable.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Predicting Hydration Products of But-1-ene
> **Question:** When but-1-ene (CH₃CH₂CH=CH₂) reacts with steam in the presence of a phosphoric acid catalyst, two different alcohols can be formed. Identify the IUPAC name of the major product, and draw the structure of the carbocation intermediate that leads to its formation.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the reaction type and electrophile:**
> >    * The reaction is hydration, where H⁺ (from the acid catalyst) acts as the electrophile.
> > 2. **Deduce the two possible carbocation intermediates:**
> >    * Addition of H⁺ to carbon-1 yields a secondary carbocation: CH₃CH₂CH⁺CH₃
> >    * Addition of H⁺ to carbon-2 yields a primary carbocation: CH₃CH₂CH₂CH₂⁺
> > 3. **Apply Markovnikov's rule and carbocation stability:**
> >    * The secondary carbocation (CH₃CH₂CH⁺CH₃) is more stable than the primary carbocation because it has two alkyl groups (methyl and ethyl) donating electron density to stabilize the positive charge.
> >    * Therefore, the reaction proceeds predominantly via this more stable secondary carbocation intermediate.
> > 4. **Deduce the major product:**
> >    * The nucleophilic water molecule (H₂O) attacks the secondary carbocation at carbon-2, forming **butan-2-ol** as the major product.
> >    * The intermediate carbocation structure is: CH₃CH₂CH⁺CH₃

`,
    keyPoints: [
      'Alkyl groups are electron-donating, stabilizing the carbocation intermediate via the inductive effect (3° > 2° > 1°).',
      'Markovnikov’s rule predicts that the major product is formed via the more stable carbocation intermediate.'
    ]
  },
  {
    id: 'oxidation-and-polymerisation-20260627',
    title: 'Oxidation & Addition Polymerisation',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 3) Oxidation of Alkenes to Diols
> Alkenes are oxidized by **cold, dilute, acidified (with $\\\\text{H}_2\\\\text{SO}_4$) potassium manganate(VII) solution** ($\\\\text{KMnO}_4$):
> 
> * **Reaction Details:** The double bond breaks and two hydroxyl (-OH) groups add across the C=C bond to form a **diol**.
> * **Oxidising Agent Roles:** Potassium manganate(VII) provides one of the oxygen atoms, and water from the aqueous solution provides the other oxygen atom.
> * **Observations:** The purple solution decolourises (turns colourless). This serves as a primary test for unsaturation.
> * **Equations for Propene Oxidation:**
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{KMnO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$$
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + [\\\\text{O}] + \\\\text{H}_2\\\\text{O}\\\\text{(l)} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$$

> [!IMPORTANT]
> ### 📦 4) Addition Polymerisation
> * **Polymer:** A large molecule (macromolecule) made by joining many small molecules together.
> * **Monomer:** A small molecule that can be joined with other small molecules to form a long chain unit (large molecule).
> * **Polymerisation:** The process of joining many small molecules together to form a large molecule.

> [!BOX]
> ### 📋 Common Addition Polymers
> | Polymer Name | Monomer Name | Polymerization Reaction |
> | :--- | :--- | :--- |
> | Polyethene | Ethene | nCH₂=CH₂ → -[CH₂-CH₂]ₙ- |
> | Polypropene | Propene | nCH₃CH=CH₂ → -[CH(CH₃)-CH₂]ₙ- |
> | Polybut-1-ene | But-1-ene | nCH₃CH₂CH=CH₂ → -[CH(CH₂CH₃)-CH₂]ₙ- |
> | Polybut-2-ene | But-2-ene | nCH₃CH=CHCH₃ → -[CH(CH₃)-CH(CH₃)]ₙ- |


> [!WARNING]
> ### ⚠️ Environmental Issues & Disposal of Polymers
> Addition polymers are saturated hydrocarbons, meaning they are chemically inert and **non-biodegradable**, causing landfill accumulation.
> 
> **Disposal Options:**
> 1. **Landfill:** Takes up valuable space and polymers do not decompose.
> 2. **Incineration (Burning):**
>    * Generates energy.
>    * Release greenhouse gases (CO₂).
>    * Burning halogenated polymers (like PVC) releases toxic hydrogen chloride (HCl) gas, requiring gas scrubbers to neutralize it.
> 3. **Recycling:** Conserves crude oil resources, but sorting and processing polymers is expensive and energy-intensive.
> 4. **Feedstock Recycling:** Breaking polymers down into chemical monomers to be reused as feedstock for other chemical processes.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Drawing Polymer Structures
> **Question:** Draw the monomer and the repeating unit of poly(propene).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the monomer structure:**
> >    * The monomer is propene (CH₃CH=CH₂). Draw it with the double bond carbons in the center and groups pointing up and down:
> >      * Carbon-1 bonded to -H and -H.
> >      * Carbon-2 bonded to -H and -CH₃.
> > 
> > 2. **Draw the repeating unit:**
> >    * Change the C=C double bond to a C-C single bond, and draw open bonds extending to the left and right:
> >      * -[CH₂-CH(CH₃)]-

> [!EXAMPLE]
> #### 📝 Worked Example 2: Identifying the Monomer from a Complex Polymer Section
> **Question:** A monomer Q can be polymerized to form R, a polymer used to improve the grip of car tyres. A section of R is shown below:
> 
> **-[CH₂-C(CH=CH₂)(CH₃)-CH₂-C(CH=CH₂)(CH₃)]-**
> 
> What is the IUPAC name of monomer Q?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the repeating unit:**
> >    * Look at the backbone of the section. The repeating unit consists of a 2-carbon segment: **-[CH₂-C(CH=CH₂)(CH₃)]-**.
> > 
> > 2. **Reconstruct the monomer:**
> >    * Replace the single bond in the repeating unit backbone with a double bond: **CH₂=C(CH=CH₂)(CH₃)**.
> >    * This is isoprene, which contains two double bonds (a diene).
> > 
> > 3. **Determine the systematic IUPAC name:**
> >    * The longest continuous carbon chain containing both double bonds has 4 carbons (buta-1,3-diene).
> >    * Number the chain from the end closest to the substituent to give the lowest numbers (1, 2, 3, 4).
> >    * There is a methyl substituent on carbon-2.
> >    * Therefore, the IUPAC name of Q is **2-methylbuta-1,3-diene**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating Repeating Units from Molecular Mass
> **Question:** A sample of polyisoprene has a relative molecular mass of 50252. Calculate the number of repeat units in this polymer sample.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the formula of the monomer/repeating unit:**
> >    * The monomer is isoprene (2-methylbuta-1,3-diene) with the molecular formula C₅H₈.
> > 
> > 2. **Calculate the relative formula mass (Mr) of the repeat unit:**
> >    * Mr = (5 × 12.0) + (8 × 1.0) = 60.0 + 8.0 = 68.0
> > 
> > 3. **Calculate the number of repeat units:**
> >    * Number of repeat units = Polymer Molecular Mass / Repeat Unit Mr
> >    * Number of units = 50252 / 68 = **739**

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying the Monomer from a Repeat Unit
> **Question:** What is the IUPAC name of the monomer that forms the repeat unit shown below?
> 
> **-[C(CH₃)₂-CH(CH₃)]-**
> 
> A) 1,1,2-trimethylethene  
> B) 1,1-dimethylpropene  
> C) 3-methylbut-2-ene  
> D) 2-methylbut-2-ene  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Reconstruct the monomer:**
> >    * Reintroduce the C=C double bond between the two carbon atoms in the repeat unit backbone: **(CH₃)₂C=CH(CH₃)**.
> > 
> > 2. **Determine the longest carbon chain containing the double bond:**
> >    * The longest chain has 4 carbon atoms, which makes the parent alkene **butene**.
> >    * Numbering the chain to give the double bond the lowest possible position gives **but-2-ene**.
> > 
> > 3. **Identify substituents:**
> >    * There is a methyl group at carbon-2: **2-methylbut-2-ene**.
> >    * Therefore, the correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Defining a Monomer
> **Question:** Which of the following statements best describes a monomer?
> 
> A) A large molecule formed by joining many small units.  
> B) A small molecule that can be joined with other small molecules to form a long chain.  
> C) A molecule that breaks down polymers.  
> D) A catalyst used in polymerization reactions.  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze each definition:**
> >    * **Option A** describes a *polymer* (macromolecule).
> >    * **Option B** describes the exact role of a *monomer* in polymerisation.
> >    * **Option C** describes a reactant in hydrolysis or degradation, not a monomer.
> >    * **Option D** describes a catalyst, which is not incorporated into the polymer chain.
> > 
> > 2. **Select the correct option:**
> >    * The correct option is **B**.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Oxidation of Alkenes to Diols
> **Question:** Propene reacts with cold, dilute, acidified potassium manganate(VII) solution. State the observation for this reaction and write the structural formula of the organic product.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce the reaction type and products:**
> >    * Reaction of an alkene with cold, dilute, acidified potassium manganate(VII) ($\\\\text{KMnO}_4$) is **oxidation to a diol** (two -OH groups add across the C=C bond).
> >    * Propene ($\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2$) forms propan-1,2-diol: $\\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$.
> > 
> > 2. **State the observation:**
> >    * Acidified potassium manganate(VII) is a purple solution.
> >    * When it oxidizes the alkene, the purple color decolourises to form a colorless solution.
> > 
> > 3. **Formulate the final answer:**
> >    * Observation: Purple solution decolourises (or turns colorless).
> >    * Product Structural Formula: $\\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$.

> [!EXAMPLE]
> #### 📝 Worked Example 7: Polymer Disposal and Environmental Hazards
> **Question:** Poly(chloroethene) (PVC) releases toxic hydrogen chloride ($\\\\text{HCl}$) gas when incinerated. Write an equation showing how calcium hydroxide, $\\\\text{Ca(OH)}_2$, can be used in waste gas scrubbers to neutralize this toxic emission.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the type of reaction:**
> >    * Hydrogen chloride ($\\\\text{HCl}$) is an acidic gas.
> >    * Calcium hydroxide ($\\\\text{Ca(OH)}_2$) is a basic compound (alkali).
> >    * The reaction is an acid-base neutralization producing a salt (calcium chloride) and water.
> > 
> > 2. **Deduce the products:**
> >    * Acid ($\\\\text{HCl}$) + Base ($\\\\text{Ca(OH)}_2$) $\\\\rightarrow$ Salt ($\\\\text{CaCl}_2$) + Water ($\\\\text{H}_2\\\\text{O}$).
> > 
> > 3. **Balance the equation:**
> >    * $\\\\text{Ca(OH)}_2 + 2\\\\text{HCl} \\\\rightarrow \\\\text{CaCl}_2 + 2\\\\text{H}_2\\\\text{O}$

> [!EXAMPLE]
> #### 📝 Worked Example 8: Drawing a Polymer Section showing Three Repeat Units
> **Question:** Draw a section of the polymer poly(propene) showing three repeat units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the repeat unit of poly(propene):**
> >    * The monomer is propene (CH₃-CH=CH₂).
> >    * The repeat unit is -[CH₂-CH(CH₃)]-.
> > 2. **Chain three repeat units together:**
> >    * Join three of these repeating units in a row, keeping the methyl groups attached to alternating carbon atoms:
> >    * -CH₂-CH(CH₃)-CH₂-CH(CH₃)-CH₂-CH(CH₃)-
> > 3. **Draw the final section with extension bonds:**
> >    * Place brackets around the structure with open-ended single bonds (extension bonds) passing through the brackets on both ends to represent the continuous polymer chain:
> >    * -[CH₂-CH(CH₃)-CH₂-CH(CH₃)-CH₂-CH(CH₃)]-

`,
    keyPoints: [
      'Alkenes are oxidized by cold, dilute, acidified KMnO₄ to form diols, causing the purple solution to decolourise.',
      'Addition polymerisation breaks the pi (π) bonds of monomer molecules to join them into long saturated chains.',
      'Addition polymers are chemically inert and non-biodegradable; burning halogenated polymers (like PVC) releases toxic hydrogen chloride (HCl) gas.'
    ]
  }
];
