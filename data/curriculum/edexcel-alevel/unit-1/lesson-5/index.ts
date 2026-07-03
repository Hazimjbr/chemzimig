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
> >    * To assign E/Z, we look at the positions of the highest priority groups, which are **Cl** and **Br**.
> > 4. **Correct Answer:** **B**
`,
    keyPoints: [
      'Stereoisomers share the same structural formula but have a different arrangement of atoms in space.',
      'E/Z isomerism requires restricted rotation (C=C double bond) and two different groups attached to each carbon of the double bond.',
      'The Cahn-Ingold-Prelog (CIP) priority rules assign priority based on higher atomic numbers.'
    ]
  },
  {
    id: 'alkene-addition-reactions-20260627',
    title: 'Addition Reactions of Alkenes',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Reactivity & Reactions of Alkenes
> Alkenes are **more reactive than alkanes** because they contain a carbon-carbon double bond ($\\\\text{C}=\\\\text{C}$). The double bond consists of a strong $\\\\sigma$ (sigma) bond and a **weak $\\\\pi$ (pi) bond**. This $\\\\pi$ bond has high electron density and is relatively weak, making it easy to break during chemical reactions.
> 
> ---
> 
> ### 🔥 1) Combustion of Alkenes
> Alkenes undergo combustion reactions when burned in oxygen. Like alkanes, the products depend on the availability of oxygen:
> 
> **a) Complete Combustion (Excess Oxygen):**
> * Occurs when there is an excess of oxygen, producing carbon dioxide ($\\\\text{CO}_2$) and water ($\\\\text{H}_2\\\\text{O}$).
> * *Equation:*
>   $$\\\\text{C}_2\\\\text{H}_4 + 3\\\\text{O}_2 \\\\rightarrow 2\\\\text{CO}_2 + 2\\\\text{H}_2\\\\text{O}$$
> 
> **b) Incomplete Combustion (Lack of Oxygen):**
> * Occurs when oxygen is limited, producing highly toxic carbon monoxide ($\\\\text{CO}$) or carbon soot (C), and water ($\\\\text{H}_2\\\\text{O}$).
> * *Equation:*
>   $$\\\\text{C}_2\\\\text{H}_4 + 2\\\\text{O}_2 \\\\rightarrow 2\\\\text{CO} + 2\\\\text{H}_2\\\\text{O}$$
> 
> ---
> 
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
> #### 📝 Worked Example 3: Application of Markovnikov's Rule
> **Question:** According to Markovnikov's rule, when HCl is added to propene, which carbon atom will the hydrogen atom predominantly attach to?
> 
> * **A)** The carbon atom with fewer hydrogen substituents.  
> * **B)** The carbon atom with a greater number of alkyl substituents.  
> * **C)** The carbon atom with more hydrogen substituents.  
> * **D)** Either carbon atom of the double bond with equal probability.  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Recall Markovnikov's rule:**
> >    * When a protic acid (like HCl) is added to an unsymmetrical alkene, the hydrogen atom (H⁺) attaches to the carbon of the double bond that has the greater number of hydrogen substituents.
> > 
> > 2. **Apply to propene (CH₃-CH=CH₂):**
> >    * Carbon-1 has 2 hydrogen atoms.
> >    * Carbon-2 has 1 hydrogen atom.
> >    * The hydrogen from HCl will predominantly attach to carbon-1 (the carbon with more hydrogen substituents), forming the more stable secondary carbocation intermediate.
> >    * Therefore, the correct option is **C**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Relative Carbocation Stability
> **Question:** Which of the following carbocation intermediates is the most stable?
> 
> * **A)** Primary carbocation  
> * **B)** Secondary carbocation  
> * **C)** Methyl carbocation  
> * **D)** Tertiary carbocation  
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand carbocation stability:**
> >    * Carbocations are stabilized by the electron-donating inductive effect of surrounding alkyl groups.
> >    * The positive charge is dispersed more effectively as the number of alkyl groups increases.
> > 
> > 2. **Compare stability:**
> >    * Methyl (no alkyl groups) < Primary (1 alkyl group) < Secondary (2 alkyl groups) < Tertiary (3 alkyl groups).
> >    * Tertiary carbocations are the most stable.
> >    * Therefore, the correct option is **D**.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Bromine Water Addition Mechanism
> **Question:** When propene reacts with aqueous bromine (bromine water), the major product obtained is 1-bromopropan-2-ol, CH₃CH(OH)CH₂Br, while 1,2-dibromopropane is only formed as a minor product. Explain this observation by referring to the steps of the mechanism.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Step 1 - Carbocation formation:**
> >    * The pi (π) electrons of the C=C double bond attack the electrophilic bromine atom in the induced dipole Br⁺-Br⁻. This forms a carbocation intermediate and releases a bromide ion (Br⁻).
> > 
> > 2. **Step 2 - Nucleophilic competition:**
> >    * The carbocation intermediate is electron-deficient and can be attacked by any available nucleophile in the solution, which in this case includes both the newly formed bromide ions (Br⁻) and water molecules (H₂O).
> > 
> > 3. **Step 3 - Concentration effect:**
> >    * Since the reaction takes place in an aqueous solution, the concentration of H₂O molecules is much higher than the concentration of Br⁻ ions. This makes the nucleophilic attack by H₂O on the carbocation much more frequent, resulting in the major product 1-bromopropan-2-ol.
`,
    keyPoints: [
      'Alkenes undergo addition reactions where the weaker pi (π) bond breaks to form two new sigma (σ) bonds.',
      'Bromine water turns from orange-brown to colourless in the presence of an alkene, serving as a test for unsaturation.',
      'Hydration of alkenes with steam requires a phosphoric(V) acid catalyst at high temperature and pressure to produce alcohols.'
    ]
  },
  {
    id: 'electrophilic-addition-mechanism-20260627',
    title: "Electrophilic Addition & Markovnikov's Rule",
    type: 'text',
    content: `
> [!IMPORTANT]
> ### 🔄 Electrophilic Addition Mechanism
> This mechanism describes how electrophiles react with the C=C double bond. Let's look at the mechanism for the reaction of ethene with hydrogen bromide (HBr):
> 
> 1. **Polarisation of the Electrophile:**
>    * H-Br is polar because bromine is more electronegative than hydrogen: $\\\\text{H}^{\\\\delta+} - \\\\text{Br}^{\\\\delta-}$.
> 2. **Attack by the Double Bond:**
>    * A curly arrow starts from the C=C double bond ($\\\\pi$ electrons) and points to the hydrogen atom ($\\\\text{H}^{\\\\delta+}$) of HBr.
>    * The H-Br bond breaks heterolytically, with the electron pair moving to the bromine atom (represented by a curly arrow from the H-Br bond to Br).
> 3. **Formation of Carbocation Intermediate:**
>    * Hydrogen bonds to one of the carbon atoms, leaving the other carbon electron-deficient with a positive charge. This species is a **carbocation** ($\\\\text{CH}_3\\\\text{CH}_2^+$).
>    * A bromide ion ($\\\\text{Br}^-$) is formed.
> 4. **Nucleophilic Attack:**
>    * A curly arrow starts from a lone pair on the bromide ion ($\\\\text{Br}^-$) and points to the positively charged carbon atom of the carbocation.
>    * This forms the final C-Br bond, producing bromoethane.


> [!BOX]
> ### 🧪 Halogenation & Induced Dipoles in Non-Polar Molecules
> Halogenation (e.g., with non-polar $\\\\text{Br}_2$ or other non-polar molecules) starts through an induced dipole:
> 
> * **Polarisation:** The double bond (electron rich) in the alkene repels the bonding electrons in the non-polar bond or molecule (such as $\\\\text{H}_2$ or $\\\\text{Br}_2$), producing a dipole moment ($\\\\delta^+ - \\\\delta^-$) which starts the reaction.
> * **Attack:** The double bond attacks the electrophilic $\\\\text{Br}^{\\\\delta+}$ atom, forming a cyclic bromonium ion (or a standard carbocation intermediate) and a halide ion ($\\\\text{Br}^-$).
> * **Curly Arrow Rules:** Remember, all curly arrows in these mechanisms MUST start from either a bond (representing bond fission) or from a lone pair of electrons.
> * **Final Attack:** A curly arrow starts from a lone pair on the bromide ion ($\\\\text{Br}^-$) and points to one of the carbons to form the 1,2-dihalogenoalkane.
> 
> > [!WARNING]
> > ### ⚠️ Curly Arrow Conventions
> > Always ensure that curly arrows start directly from a **bond** or a **lone pair of electrons**. Starting an arrow from an atom label or empty space is a common exam pitfall.

> [!IMPORTANT]
> ### ⚖️ Symmetrical vs. Unsymmetrical Alkenes
> * **Symmetrical Alkene:** The groups attached to each C of the double bond are identical (e.g., ethene, but-2-ene). Reaction with HBr yields only **one** product.
> * **Unsymmetrical Alkene:** The groups attached to the double bond carbons are different (e.g., propene, but-1-ene). Reaction with HBr yields a mixture of **two** structural isomers.
> 
> > [!IMPORTANT]
> > ### 🧲 Carbocation Stability Order
> > Carbocations are classified by the number of alkyl groups attached to the positively charged carbon atom. A tertiary carbocation intermediate is more stable than a secondary carbocation (intermediate) due to the electron-donating inductive effect of more alkyl groups, which is more stable than a primary carbocation:
> > 
> > 1. **Primary ($1^{\\\\circ}$):** One alkyl group attached, e.g., $\\\\text{CH}_3\\\\text{CH}_2^+$. Least stable.
> > 2. **Secondary ($2^{\\\\circ}$):** Two alkyl groups attached, e.g., $(\\\\text{CH}_3)_2\\\\text{CH}^+$. More stable.
> > 3. **Tertiary ($3^{\\\\circ}$):** Three alkyl groups attached, e.g., $(\\\\text{CH}_3)_3\\\\text{C}^+$. Most stable.
> > 
> > **Why are alkyl groups stabilizing?**
> > Alkyl groups are electron-donating. They push electron density towards the positively charged carbon atom (called the **inductive effect**), spreading and minimizing the positive charge and stabilizing the intermediate.
> 
> > [!NOTE]
> > ### 📜 Markovnikov's Rule
> > **Markovnikov’s rule:** When a protic acid (HX) is added to an asymmetric alkene, the acidic hydrogen (H⁺) attaches itself to the carbon having a greater number of hydrogen substituents whereas the halide (X⁻) group attaches itself to the carbon atom which has a greater number of alkyl substituents.
> > 
> > * **Major Product:** Formed via the **more stable** carbocation intermediate.
> > * **Minor Product:** Formed via the **less stable** carbocation intermediate.

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
  <path d="M280 200 Q310 150 350 140" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
  <text x="325" y="150" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 1</text>
  <text x="325" y="162" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">Major path</text>

  <!-- Lower Pathway -->
  <path d="M280 280 Q310 330 350 340" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arrow)"/>
  <text x="325" y="330" font-size="11" font-weight="700" fill="#a78bfa" font-family="Inter,sans-serif">step 1</text>
  <text x="325" y="342" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">Minor path</text>

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
  <text x="508" y="62" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
  <line x1="557" y1="98" x2="583" y2="114" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="587" y="126" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

  <text x="485" y="52" text-anchor="middle" font-size="10.5" fill="#60a5fa" font-weight="700" font-family="Inter,sans-serif">Secondary Carbocation (2°)</text>
  <text x="485" y="64" text-anchor="middle" font-size="9" fill="#94a3b8" font-family="Inter,sans-serif">More stable (2 alkyl groups)</text>

  <!-- Bromide Ion (Br-) -->
  <rect x="525" y="152" width="40" height="25" rx="5" fill="#1e1e38" stroke="#fb923c" stroke-width="1"/>
  <text x="535" y="169" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="558" cy="165" r="7.5" fill="#10b981"/>
  <text x="558" y="169" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>
  <!-- Curly Arrow 3: Br- lone pair to C2(+) -->
  <path d="M525 165 Q488 165 488 136" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>


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
  <rect x="365" y="388" width="40" height="25" rx="5" fill="#1e1e38" stroke="#fb923c" stroke-width="1"/>
  <text x="375" y="405" font-size="14" font-weight="700" fill="#fb923c" font-family="Inter,sans-serif">Br</text>
  <circle cx="398" cy="401" r="7.5" fill="#10b981"/>
  <text x="398" y="405" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter,sans-serif">-</text>
  <!-- Curly Arrow 4: Br- lone pair to C1(+) -->
  <path d="M410 401 Q423 401 423 336" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>


  <!-- ==================== STEP 2 ARROWS ==================== -->
  <path d="M620 140 L690 140" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="655" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa" font-family="Inter,sans-serif">step 2</text>

  <path d="M620 340 L690 340" fill="none" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="655" y="332" text-anchor="middle" font-size="11" font-weight="700" fill="#a78bfa" font-family="Inter,sans-serif">step 2</text>


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
  <text x="828" y="62" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>
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
  <line x1="877" y1="298" x2="903" y2="314" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="907" y="326" font-size="13" fill="#94a3b8" font-family="Inter,sans-serif">H</text>

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
> #### 📝 Worked Example 1: Drawing Curly Arrows
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
> #### 📝 Worked Example 2: Predicting Major and Minor Products
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

> [!EXAMPLE]
> #### 📝 Worked Example 3: Hydrogenation of Propene
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

`,
    keyPoints: [
      'Electrophilic addition is initiated by the high electron density of the pi (π) bond attacking an electron-deficient electrophile.',
      'Curly arrows must start from an electron pair (bond or lone pair) and point directly to the electron-accepting atom.',
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
> ### 🧪 Oxidation of Alkenes to Diols
> Alkenes are oxidized by **cold, dilute, acidified (with $\\\\text{H}_2\\\\text{SO}_4$) potassium manganate(VII) solution** ($\\\\text{KMnO}_4$):
> 
> * **Reaction Details:** The double bond breaks and two hydroxyl (-OH) groups add across the C=C bond to form a **diol**.
> * **Oxidising Agent Roles:** Potassium manganate(VII) provides one of the oxygen atoms, and water from the aqueous solution provides the other oxygen atom.
> * **Observations:** The purple solution decolourises (turns colourless). This serves as a primary test for unsaturation.
> * **Equations for Propene Oxidation:**
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + \\\\text{KMnO}_4\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$$
>   $$\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 + [\\\\text{O}] + \\\\text{H}_2\\\\text{O}\\\\text{(l)} \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_2\\\\text{OH}$$
> 
> > [!IMPORTANT]
> > ### 📦 Addition Polymerisation Definitions
> > * **Polymer:** A large molecule (macromolecule) made by joining many small molecules together.
> > * **Monomer:** A small molecule that can be joined with other small molecules to form a long chain unit (large molecule).
> > * **Polymerisation:** The process of joining many small molecules together to form a large molecule.
> 
> > [!BOX]
> > ### 📋 Common Addition Polymers
> > | Polymer Name | Monomer Name | Polymerization Reaction |
> > | :--- | :--- | :--- |
> > | **Polyethene** | Ethene | $n\\\\text{CH}_2=\\\\text{CH}_2 \\\\rightarrow -[\\\\text{CH}_2-\\\\text{CH}_2]_n-$ |
> > | **Polypropene** | Propene | $n\\\\text{CH}_3\\\\text{CH}=\\\\text{CH}_2 \\\\rightarrow -[\\\\text{CH(CH}_3)-\\\\text{CH}_2]_n-$ |
> > | **Polybut-1-ene** | But-1-ene | $n\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}=\\\\text{CH}_2 \\\\rightarrow -[\\\\text{CH(CH}_2\\\\text{CH}_3)-\\\\text{CH}_2]_n-$ |
> > | **Polybut-2-ene** | But-2-ene | $n\\\\text{CH}_3\\\\text{CH}=\\\\text{CHCH}_3 \\\\rightarrow -[\\\\text{CH(CH}_3)-\\\\text{CH(CH}_3)]_n-$ |


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
> 
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
> 
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
> 
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
> 
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
`,
    keyPoints: [
      'Alkenes are oxidized by cold, dilute, acidified KMnO₄ to form diols, causing the purple solution to decolourise.',
      'Addition polymerisation breaks the pi (π) bonds of monomer molecules to join them into long saturated chains.',
      'Addition polymers are chemically inert and non-biodegradable; burning halogenated polymers (like PVC) releases toxic hydrogen chloride (HCl) gas.'
    ]
  }
];
