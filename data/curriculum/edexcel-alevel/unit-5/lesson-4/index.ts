import { LessonPart } from '../../../registry';

export const lessonTitle = "Modern Analytical Techniques II";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 19: Modern Analytical Techniques II
This lesson covers the principles of chromatography, including paper chromatography, thin-layer chromatography (TLC), calculating $R_f$ values, HPLC, GC, GC-MS/HPLC-MS combinations, determining molecular structures using high-resolution mass spectrometry (HRMS), the core principles of NMR spectroscopy, $^{13}\text{C}$ NMR spectroscopy, low-resolution $^1\text{H}$ NMR spectroscopy, and high-resolution $^1\text{H}$ NMR spectroscopy with splitting patterns.
`;

export const parts: LessonPart[] = [
    {
        id: 'simple-chromatography-paper-tlc-u5-l4',
        title: 'Simple Chromatography (Paper & TLC)',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗂️ What is Chromatography?
> Chromatography is an analytical technique used to:
> * **Separate** components of a mixture.
> * **Identify** the components by considering how far they travel.
> * **Check purity** of synthesised organic compounds.
> 
> All types of chromatography depend on the partition of components between two phases:
> * **Stationary Phase:** The phase that does not move (a solid or a liquid supported on a solid).
> * **Mobile Phase:** The phase that moves through the stationary phase (a liquid or a gas).

> [!IMPORTANT]
> ### 🔬 Paper Chromatography
> * **Stationary Phase:** Water trapped in the cellulose fibres of the chromatography paper.
> * **Mobile Phase:** The solvent (either water or a mixture of organic compounds).
> * **Mechanism:** 
>   * Components partition between the mobile solvent and the stationary trapped water.
>   * A component that is **strongly attracted to the polar stationary phase** (polar components) but weakly attracted to the mobile phase will travel slowly and not go very far.
>   * A component that is **weakly attracted to the stationary phase** but strongly attracted to the mobile phase (non-polar components) will travel quickly and go a long way.
> * **Visualisation:** For colourless substances, the chromatogram can be visualised using **ultraviolet (UV) radiation** or by spraying with chemical reagents (e.g. ninhydrin for amino acids) to form coloured spots.

> [!IMPORTANT]
> ### 🔬 Thin-Layer Chromatography (TLC)
> * **Stationary Phase:** A thin layer of a solid adsorbent (usually **silica** $\\text{SiO₂}$ or **alumina** $\\text{Al₂O₃}$) coated on a sheet of glass or plastic.
> * **Mobile Phase:** Liquid solvent.
> * **Mechanism:** Adsorption onto the solid surface. Polar molecules adsorb strongly to the silica/alumina surface and move slowly.

> [!BOX]
> ### 🧮 Calculating $R_f$ Values
> The retardation factor ($R_f$) is a ratio used to identify substances:
> $$R_f = \\frac{\\text{distance travelled by component}}{\\text{distance travelled by solvent}}$$
> * **Properties of $R_f$:**
>   * It has **no units** because it is a ratio of two distances.
>   * The value is always **less than 1** (e.g. $0.35$).
>   * The distance is always measured from the **baseline** (the starting line where the spots were originally placed) to the centre of the component spot, and from the baseline to the **solvent front**.
>   * $R_f$ values depend on the specific solvent, stationary phase, and temperature used.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hexane Chromatography Behavior
> **Question:** Suggest why, in paper chromatography, the non-polar substance hexane has a high $R_f$ value.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Identify the stationary phase properties:** In paper chromatography, the stationary phase is water trapped in the paper fibres, which is highly polar.
>   2. **Identify the solute properties:** Hexane is a non-polar hydrocarbon.
>   3. **Explain the partition/attractions:** Hexane is non-polar, so it has very weak attractions (only London forces) to the polar water molecules of the stationary phase. Instead, it is highly soluble in and strongly attracted to the mobile solvent phase.
>   4. **Deduce travel distance:** Since it is barely retarded by the stationary phase, it travels almost as fast as the solvent front.
>   5. **Conclusion:** Therefore, it travels a long distance up the paper, resulting in a high $R_f$ value (close to 1.0).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating $R_f$ Values
> **Question:** Calculate the $R_f$ value of component X in the diagram.
> The ticks on the diagram baseline measure:
> * Baseline to spot X = 30 units (10 + 20)
> * Baseline to solvent front = 100 units (10 + 20 + 40 + 15 + 15)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Identify the baseline-to-solvent front distance:** Summing all intervals along the track:
>      $$\\text{Distance travelled by solvent} = 10 + 20 + 40 + 15 + 15 = 100\\text{ units}$$
>   2. **Identify the distance travelled by component X:**
>      $$\\text{Distance travelled by component X} = 10 + 20 = 30\\text{ units}$$
>   3. **Calculate the $R_f$ value:**
>      $$R_f = \\frac{\\text{distance travelled by X}}{\\text{distance travelled by solvent}} = \\frac{30}{100} = 0.30$$
>   4. **Conclusion:** The $R_f$ value of component X is $0.30$ (no units).
`,
        keyPoints: [
            'Chromatography separations rely on relative attractions of components between a mobile phase and a stationary phase.',
            'Rf values represent the ratio of solute travel distance to solvent travel distance, measured from the baseline.',
            'Rf values are unitless, always less than 1.0, and depend on the solvent and temperature.'
        ]
    },
    {
        id: 'chromatography-hplc-gc-ms-u5-l4',
        title: 'HPLC, GC & Chromatography-MS',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Column Chromatography
> * Column chromatography is a preparative technique used to separate larger quantities of mixtures.
> * The mobile phase (solvent) drips through a vertical tube packed with solid stationary phase (silica/alumina) by gravity.

> [!IMPORTANT]
> ### ⚡ High-Performance Liquid Chromatography (HPLC)
> * **High Pressure:** The solvent is forced through the column under high pressure (up to 400 atmospheres), rather than dripping by gravity.
> * **Small Particles:** The stationary phase particles are extremely small, providing a much larger surface area, leading to superior separation.
> * **Output Parameter:** **Retention Time** — the time taken for a component to travel from the injection port to the detector (detected by UV absorption).

> [!IMPORTANT]
> ### ⚡ Gas Chromatography (GC)
> * **Apparatus:** A thin metal column, several meters long, coiled inside an oven.
> * **Stationary Phase:** A solid or liquid coated onto the inside walls of the coiled column.
> * **Mobile Phase:** An **inert carrier gas** (nitrogen, helium, or argon).
> * **Peak Area:** The area under each peak on the gas chromatogram represents the relative concentration of that component.
> * **Retention Time Factors:** Depends on column temperature, flow rate of carrier gas, and the component\'s volatility and affinity for the stationary phase.

> [!IMPORTANT]
> ### 🧪 Combined Chromatography-Mass Spectrometry (GC-MS / HPLC-MS)
> * **Limitations of chromatography alone:** Chromatography is excellent at separating mixtures but cannot positively identify unknown compounds because different compounds can have identical retention times.
> * **The Hybrid Solution:** By coupling the separation power of GC or HPLC directly to a mass spectrometer (MS):
>   1. **Stage 1:** The mixture is injected and separated in the chromatograph.
>   2. **Stage 2:** As each component leaves the column at its unique retention time, it is directly channeled into the mass spectrometer.
>   3. **Stage 3:** The mass spectrometer records the mass spectrum (molecular ion and fragmentation pattern) of each component.
>   4. **Stage 4:** The spectra are compared against a database of known substances for positive identification.
> * **Applications:** GC-MS is used in forensics (crime scene evidence) and detecting banned performance-enhancing drugs in sports (e.g. nandrolone and 19-norandrosterone in athletes\' urine).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: HPLC-MS Functions
> **Question:** What is the main function of each technique in HPLC-MS?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Identify the role of HPLC:** HPLC is used to **separate** the complex mixture into its individual, pure components as they pass through the column at different rates.
>   2. **Identify the role of MS:** The Mass Spectrometer is used to **positively identify** each separated component as it exits the column by measuring its accurate mass ($m/z$ ratio) and fragmentation pattern.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: NANDROLONE Chemical Tests
> **Question:** Which of the two compounds nandrolone and 19-norandrosterone would you expect to react with: (a) bromine water, (b) 2,4-dinitrophenylhydrazine?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Bromine water:**
> >   1. Bromine water tests for the presence of carbon-carbon double bonds ($\\text{C=C}$).
> >   2. Looking at the structures, **nandrolone** has a double bond in the ring structure (alkene), whereas 19-norandrosterone has only single bonds in the rings.
> >   3. Therefore, **nandrolone** will react with bromine water, decolourising it.
> * **(b) 2,4-dinitrophenylhydrazine (2,4-DNPH):**
> >   1. 2,4-DNPH reacts with carbonyl groups (aldehydes or ketones) to form a coloured precipitate.
> >   2. Both nandrolone and 19-norandrosterone contain a ketone carbonyl group ($\\text{C=O}$) in their structures.
> >   3. Therefore, **both** compounds will react with 2,4-DNPH to yield a coloured precipitate.
`,
        keyPoints: [
            'HPLC uses high pressure to force solvent through a column packed with very small stationary phase particles.',
            'GC uses an inert carrier gas as the mobile phase to separate volatile components in a heated, coiled column.',
            'Chromatography-MS combines the separation power of chromatography with the positive identification power of mass spectrometry.'
        ]
    },
    {
        id: 'determining-structures-hrms-u5-l4',
        title: 'High Resolution Mass Spectrometry (HRMS)',
        type: 'text',
        content: `
> [!NOTE]
> ### 🎛️ Low Resolution vs High Resolution Mass Spectrometry
> * **Low Resolution Mass Spectrometry (LRMS):** Measures $m/z$ ratios to the nearest whole number or to one decimal place. This is useful for identifying simple isotopes and major fragments, but cannot distinguish between different molecules with the same integer molar mass.
> * **High Resolution Mass Spectrometry (HRMS):** Measures relative molecular masses to **four decimal places**. This allows positive identification of a compound\'s molecular formula solely from its accurate molecular ion peak ($M^+$), without needing other tests.

> [!IMPORTANT]
> ### ⚛️ Accurate Relative Atomic Masses
> Atomic masses are defined relative to carbon-12 taken as exactly $12.0000$. Due to nuclear binding energy variations, other elements do not have integer masses:
> 
> #### Table A: Accurate Atomic Masses of Common Elements
> | Element | Symbol | Accurate Atomic Mass |
> | :--- | :--- | :--- |
> | hydrogen | H | 1.0078 |
> | carbon | C | 12.0000 |
> | nitrogen | N | 14.0031 |
> | oxygen | O | 15.9949 |

> [!BOX]
> ### 📋 Distinguishing Molecules with Identical Integer Masses
> Let\'s consider three compounds with an integer relative molecular mass of $58$:
> 
> * **1. $\\text{C₄H₁₀}$ (butane):**
>   $$M_r = 4(12.0000) + 10(1.0078) = 58.0780$$
> * **2. $\\text{C₃H₆O}$ (propanal or propanone):**
>   $$M_r = 3(12.0000) + 6(1.0078) + 15.9949 = 58.0417$$
> * **3. $\\text{C₂H₆N₂}$ (1,2-diazaethene):**
>   $$M_r = 2(12.0000) + 6(1.0078) + 2(14.0031) = 58.0530$$
> 
> By running the unknown sample through HRMS:
> * If the peak is at $58.0417$, the compound has the formula $\\text{C₃H₆O}$.
> * *Note:* HRMS only determines the **molecular formula**, not the structural isomer. To distinguish propanal from propanone, fragmentation patterns or chemical tests (like Tollens\') are still required.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: Identifying Compounds by HRMS
> **Question:** Two compounds have the structures $\\text{CH₃CH₂CH₂CH₂NH₂}$ and $\\text{HN=CHCOOH}$. In a high resolution mass spectrum, one of these compounds has $M_r = 73.0812$. Explain how you can decide which compound it is. You do not need to show any working.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **1. Write molecular formulas:**
> >   * Butylamine ($\\text{CH₃CH₂CH₂CH₂NH₂}$) has the molecular formula $\\text{C₄H₁₁N}$.
> >   * $\\text{HN=CHCOOH}$ has the molecular formula $\\text{C₂H₃NO₂}$.
> * **2. Calculate accurate molecular masses:**
> >   * For $\\text{C₄H₁₁N}$: $4(12.0000) + 11(1.0078) + 14.0031 = 73.0889$
> >   * For $\\text{C₂H₃NO₂}$: $2(12.0000) + 3(1.0078) + 14.0031 + 2(15.9949) = 73.0163$
> * **3. Compare with observed value:** The observed value of $73.0812$ is extremely close to $73.0889$ (difference of only $0.0077$), but far from $73.0163$ (difference of $0.0649$).
> * **4. Conclusion:** Therefore, the compound with the mass of $73.0812$ must be **$\\text{CH₃CH₂CH₂CH₂NH₂}$**.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Distinguishing Diaminoethane vs Ethanoic Acid
> **Question:** A compound is thought to be either 1,2-diaminoethane or ethanoic acid. Its accurate $M_r$ value is $60.0213$. Which compound is it? Show your working.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Identify formulas of candidates:**
>      * 1,2-diaminoethane: $\\text{H₂NCH₂CH₂NH₂} \\rightarrow \\text{C₂H₈N₂}$
>      * Ethanoic acid: $\\text{CH₃COOH} \\rightarrow \\text{C₂H₄O₂}$
>   2. **Calculate accurate relative molecular masses:**
>      * **For 1,2-diaminoethane ($\\text{C₂H₈N₂}$):**
>        $$M_r = 2(12.0000) + 8(1.0078) + 2(14.0031) = 24.0000 + 8.0624 + 28.0062 = 60.0686$$
>      * **For ethanoic acid ($\\text{C₂H₄O₂}$):**
>        $$M_r = 2(12.0000) + 4(1.0078) + 2(15.9949) = 24.0000 + 4.0312 + 31.9898 = 60.0210$$
>   3. **Compare with the experimental value:** The experimental $M_r$ is $60.0213$.
>      * Difference for 1,2-diaminoethane: $|60.0213 - 60.0686| = 0.0473$
>      * Difference for ethanoic acid: $|60.0213 - 60.0210| = 0.0003$
>   4. **Conclusion:** Since the experimental mass is extremely close to the calculated mass of ethanoic acid, the compound is **ethanoic acid**.
`,
        keyPoints: [
            'HRMS measures relative molecular masses to four decimal places.',
            'It can distinguish between compounds with the same integer molecular mass by utilizing accurate atomic masses of C, H, O, and N.',
            'HRMS identifies the molecular formula but does not determine structural isomers.'
        ]
    },
    {
        id: 'principles-of-nmr-spectroscopy-u5-l4',
        title: 'Principles of NMR Spectroscopy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧲 What is NMR?
> Nuclear Magnetic Resonance (NMR) spectroscopy is a non-destructive technique used to determine the exact structures of organic molecules.
> * **How it works:** 
>   1. Nucleons (protons and neutrons) have spin. 
>   2. In nuclei with an **even number of nucleons** (e.g. $^{12}\\text{C}$ or $^{16}\\text{O}$), the spins cancel out. These nuclei are **NMR-inactive**.
>   3. In nuclei with an **odd number of nucleons** (e.g. $^{1}\\text{H}$ or $^{13}\\text{C}$), the spins do not cancel, giving the nucleus a net **residual spin** (acts like a tiny bar magnet).
>   4. When placed in an external magnetic field, these nuclei can align either with the field (lower energy state) or against the field (higher energy state).
>   5. Applying radio frequency radiation causes the nuclei to "flip" between these energy states. The energy absorbed is measured.

> [!IMPORTANT]
> ### 💧 Solvents in NMR Spectroscopy
> * **The Problem:** The compound being analysed must be dissolved in a solvent, but most solvents contain hydrogen atoms ($^{1}\\text{H}$) that would produce massive, overwhelming signals in proton NMR.
> * **The Solution:** Use **deuterated solvents**, where the common $^{1}\\text{H}$ isotope is replaced by deuterium ($^{2}\\text{H}$, or $\\text{D}$). 
>   * *Example:* Deuterated chloroform, **$\\text{CDCl₃}$**, is the commonest solvent. Deuterium has a different spin number and does not produce signals in the $^1\\text{H}$ NMR spectrum region.

> [!IMPORTANT]
> ### 🎯 Reference Standard: Tetramethylsilane (TMS)
> To calibrate the chemical shift scale, a small amount of **tetramethylsilane (TMS)**, $\\text{Si(CH₃)₄}$, is added to the sample as a reference standard:
> * **Why TMS?**
>   1. **Single Intense Peak:** All 12 hydrogen atoms are in exactly the same chemical environment, giving a single, very sharp, tall peak.
>   2. **Chemically Inert:** It is highly unreactive and will not react with the sample.
>   3. **Volatile:** It has a very low boiling point ($26.5^\\circ\\text{C}$), allowing it to be easily evaporated and removed to recover the sample.
>   4. **Upfield Peak:** Silicon is less electronegative than carbon, so the methyl protons in TMS are highly shielded. Its peak appears far to the right of almost all other organic signals.
>   * **Scale Anchor:** The TMS peak is assigned a chemical shift value of exactly **$\\delta = 0\\text{ ppm}$**.

> [!BOX]
> ### 🧮 Chemical Shift ($\\delta$)
> * **Chemical Shift:** The shift in resonance frequency of a nucleus relative to TMS, measured in parts per million (ppm).
> * **Environment Effect:** Electrons around a nucleus shield it from the magnetic field. Electronegative atoms (like oxygen or halogens) withdraw electron density (deshielding), shifting the signal to the left (downfield, higher $\\delta$ values).
>   * *Example:* Carbon in a ketone group ($\\text{-C-CO-C-}$) appears at $\\delta = 210\\text{ ppm}$, while carbon in an alcohol ($\\text{-C-OH}$) appears at $\\delta = 60\\text{ ppm}$.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: NMR Suitability of Nuclei
> **Question:** Some organic compounds contain these atoms: $^{16}\\text{O}$, $^{19}\\text{F}$, $^{32}\\text{S}$. Explain which of these are not suitable for use in NMR spectroscopy, and why.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Recall the nucleon rule:** A nucleus must have an odd number of nucleons (protons + neutrons) to have a net residual spin and be NMR-active.
>   2. **Analyze each atom:**
>      * **$^{16}\\text{O}$:** Has 16 nucleons (8 protons + 8 neutrons). Since 16 is an even number, the spins cancel out. It has zero net spin and is **not suitable**.
>      * **$^{32}\\text{S}$:** Has 32 nucleons (16 protons + 16 neutrons). Since 32 is an even number, the spins cancel out. It has zero net spin and is **not suitable**.
>      * **$^{19}\\text{F}$:** Has 19 nucleons (9 protons + 10 neutrons). Since 19 is an odd number, it has a net residual spin and **is suitable** for NMR.
>   3. **Conclusion:** $^{16}\\text{O}$ and $^{32}\\text{S}$ are not suitable for NMR spectroscopy because they possess even numbers of nucleons.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Water vs TMS as Reference
> **Question:** Suggest why water ($\\text{H₂O}$) is less suitable than TMS as a reference in NMR spectroscopy.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Compare proton quantity per molecule:** Water has only 2 hydrogen atoms per molecule, whereas TMS has 12. Therefore, TMS produces a much stronger signal per mole.
>   2. **Compare chemical shift position:** Water\'s peak is not far upfield and can easily overlap with sample signals. TMS\'s peak is far upfield ($\\delta = 0\\text{ ppm}$), away from almost all sample signals.
>   3. **Compare volatility and ease of recovery:** Water has a high boiling point ($100^\\circ\\text{C}$) and forms hydrogen bonds, making it very difficult to evaporate to recover the sample. TMS is highly volatile (boiling point $26.5^\\circ\\text{C}$) and is easily removed.
>   4. **Conclusion:** Water is less suitable because of lower signal intensity, potential signal overlap, and difficulty in evaporating the solvent to recover the sample.
`,
        keyPoints: [
            'NMR spectroscopy detects nuclei with an odd number of nucleons (like 1H and 13C) that possess residual spin.',
            'Deuterated solvents like CDCl3 are used to prevent solvent hydrogen atoms from interfering with the sample spectrum.',
            'TMS is used as a reference standard (δ = 0 ppm) because it is volatile, inert, and yields a single peak far upfield.'
        ]
    },
    {
        id: '13c-nmr-spectroscopy-u5-l4',
        title: '¹³C NMR Spectroscopy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗂️ What is Shown by a ¹³C NMR Spectrum?
> ¹³C NMR spectroscopy provides direct information about the carbon skeleton of organic molecules:
> * **Number of Peaks:** Tells us the number of **different chemical environments** of carbon atoms in the molecule (but not necessarily the total number of carbons, due to symmetry).
> * **Chemical Shift ($\\delta$):** Tells us the chemical environment of each carbon atom type by comparing its shift to database values.
> 
> Let\'s compare the two isomers of propanol (molecular formula $\\text{C₃H₈O}$):
> * **Propan-1-ol ($\\text{CH₃CH₂CH₂OH}$):** Has **3 peaks** (three different carbon environments: $-\\text{CH₃}$, $-\\text{CH₂}-$, and $-\\text{CH₂OH}$).
> * **Propan-2-ol ($\\text{CH₃CH(OH)CH₃}$):** Has **2 peaks** (two different carbon environments: the $-\\text{CH(OH)}-$ carbon, and the two equivalent $-\\text{CH₃}$ methyl groups which share the exact same chemical environment due to symmetry).

> [!IMPORTANT]
> ### 📊 Interpreting ¹³C Chemical Shifts
> 
> #### Table A: ¹³C Chemical Shift Ranges
> | Carbon Environment | Typical $\\delta$ range (ppm) |
> | :--- | :--- |
> | $\\text{C-C}$ (alkane) | $0 - 60$ |
> | $\\text{C-Cl}$ / $\\text{C-Br}$ (halogenoalkane) | $30 - 60$ |
> | $\\text{C-N}$ (amine) | $35 - 63$ |
> | $\\text{C-OH}$ (alcohol) | $55 - 75$ |
> | $\\text{C=C}$ (alkene) | $110 - 150$ |
> | $\\text{C-C}$ (arene benzene ring) | $120 - 160$ |
> | $\\text{-C-O}$ (ester or carboxylic acid) | $160 - 185$ |
> | $\\text{C=O}$ (aldehyde or ketone) | $190 - 220$ |

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: Predicting Peak Quantities (Worked Example 1)
> **Question:** Predict the number of peaks due to the carbon atoms in:
> (a) butane ($\\text{CH₃-CH₂-CH₂-CH₃}$)
> (b) 2-methylbutane ($\\text{(CH₃)₂CH-CH₂-CH₃}$)
> (c) 2,2-dimethylpropane ($\\text{(CH₃)₄C}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Butane:** Symmetrical molecule. The two terminal methyl ($-\\text{CH₃}$) groups are equivalent (1 environment), and the two central methylene ($-\\text{CH₂}-$) groups are equivalent (1 environment). Total: **2 peaks**.
> * **(b) 2-methylbutane:** The two left-hand methyl groups are equivalent (1 environment). The $-\\text{CH}-$ group is 1 environment. The $-\\text{CH₂}-$ group is 1 environment. The right-hand terminal $-\\text{CH₃}$ is in a different environment because it is bonded to a $-\\text{CH₂}-$. Total: **4 peaks**.
> * **(c) 2,2-dimethylpropane:** Symmetrical molecule. The four methyl groups are all equivalent (1 environment). The central quaternary carbon is 1 environment. Total: **2 peaks**.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Deducing Structure from Chemical Shifts (Worked Example 3)
> **Question:** A compound has the molecular formula $\\text{C₃H₆O}$ and its ¹³C NMR spectrum shows three peaks at $\\delta = 203\\text{ ppm}$, $37\\text{ ppm}$, and $6\\text{ ppm}$. Use the chemical shift chart to explain whether the compound\'s structure is propen-1-ol ($\\text{CH₂=CH-CH₂OH}$) or propanal ($\\text{CH₃-CH₂-CHO}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Analyze the 203 ppm peak:** This peak lies in the range of $190 - 220\\text{ ppm}$, which corresponds to a carbonyl group ($\\text{C=O}$) in an aldehyde or ketone.
>   2. **Analyze the 37 and 6 ppm peaks:** These lie in the alkane range ($0 - 60\\text{ ppm}$), representing simple saturated $\\text{C-C}$ carbons.
>   3. **Evaluate candidates:**
>      * **Propanal ($\\text{CH₃-CH₂-CHO}$):** Contains an aldehyde carbonyl carbon (expected $\\delta \\approx 200\\text{ ppm}$) and two saturated $\\text{C-C}$ carbons. This matches the spectrum perfectly.
>      * **Propen-1-ol ($\\text{CH₂=CH-CH₂OH}$):** Contains an alkene double bond ($\\text{C=C}$, expected peaks at $110 - 150\\text{ ppm}$) and an alcohol carbon ($\\text{C-OH}$, expected at $55 - 75\\text{ ppm}$). No peak is seen in these regions, and it has no carbonyl group.
>   4. **Conclusion:** The compound is **propanal**.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Alkanes Environments
> **Question:** Work out the number of different chemical environments for the carbon atoms in the first six straight-chain alkanes.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Methane (CH₄):** Has 1 carbon. **1 environment**.
>   2. **Ethane (CH₃CH₃):** Symmetrical. Both carbons are equivalent. **1 environment**.
>   3. **Propane (CH₃CH₂CH₃):** Symmetrical. Two terminal $-\\text{CH₃}$ (1 environment) and one central $-\\text{CH₂}-$ (1 environment). **2 environments**.
>   4. **Butane (CH₃CH₂CH₂CH₃):** Symmetrical. Two terminal $-\\text{CH₃}$ (1 environment) and two central $-\\text{CH₂}-$ (1 environment). **2 environments**.
>   5. **Pentane (CH₃CH₂CH₂CH₂CH₃):** Symmetrical. Two terminal $-\\text{CH₃}$ (1 env), two intermediate $-\\text{CH₂}-$ (1 env), and one central $-\\text{CH₂}-$ (1 env). **3 environments**.
>   6. **Hexane (CH₃CH₂CH₂CH₂CH₂CH₃):** Symmetrical. Two terminal $-\\text{CH₃}$ (1 env), two adjacent $-\\text{CH₂}-$ (1 env), and two central $-\\text{CH₂}-$ (1 env). **3 environments**.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 4: Aromatic Structure Deduction
> **Question:** An aromatic compound has the molecular formula $\\text{C₈H₈O₂}$. The compound contains both a phenol functional group and a ketone functional group. The ¹³C NMR spectrum of the compound shows peaks at $\\delta = 197\\text{ ppm}$, $155\\text{ ppm}$, $137\\text{ ppm}$, $131\\text{ ppm}$, $117\\text{ ppm}$, and $27\\text{ ppm}$. Use the spectrum to deduce the structure of the compound. Explain your reasoning.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Identify the functional groups from chemical shifts:**
>      * **$\\delta = 197\\text{ ppm}$:** Corresponds to a ketone carbonyl carbon ($\\text{C=O}$).
>      * **$\\delta = 27\\text{ ppm}$:** Corresponds to a saturated alkane carbon (specifically, the methyl group attached to the ketone, forming a $-\\text{CO-CH₃}$ acetyl group).
>      * **$\\delta = 155\\text{ ppm}$:** Corresponds to a benzene ring carbon bonded directly to the highly electronegative oxygen atom of the phenol group ($-\\text{C-OH}$).
>      * **$\\delta = 137, 131, 117\\text{ ppm}$:** Corresponds to the other carbons of the benzene ring.
>   2. **Determine the substitution pattern of the benzene ring:**
>      * The benzene ring has 6 carbons.
>      * There are 4 distinct peaks in the aromatic region ($117 - 155\\text{ ppm}$).
>      * For a disubstituted benzene ring to yield only 4 aromatic peaks, it must have a plane of symmetry, which occurs in a **para-disubstituted (1,4-disubstituted)** ring:
>        * Carbon-1 (bonded to $-\\text{OH}$): 1 peak (155 ppm)
>        * Carbon-4 (bonded to $-\\text{COCH₃}$): 1 peak (131 ppm)
>        * Carbons-2,6 (adjacent to $-\\text{OH}$): equivalent, yielding 1 peak (117 ppm)
>        * Carbons-3,5 (adjacent to $-\\text{COCH₃}$): equivalent, yielding 1 peak (137 ppm)
>   3. **Assemble the structure:** Combining a para-disubstituted benzene ring with a phenol group ($-\\text{OH}$) and an acetyl group ($-\\text{COCH₃}$) yields **4-hydroxyacetophenone** (also known as 1-(4-hydroxyphenyl)ethanone).
>   4. **Verify the molecular formula:** $\\text{HO-C₆H₄-COCH₃}$ contains 8 carbons, 8 hydrogens, and 2 oxygens, which exactly matches $\\text{C₈H₈O₂}$.
`,
        keyPoints: [
            '13C NMR peak count corresponds directly to the number of unique carbon environments in the molecule.',
            'Chemical shift values reflect the electron density around each carbon, deshielded carbons bonded to electronegative atoms appear downfield (higher δ).',
            'Symmetry within a molecule reduces the number of observed peaks because equivalent carbon atoms share environments.'
        ]
    },
    {
        id: 'low-resolution-1h-nmr-u5-l4',
        title: 'Low Resolution ¹H NMR Spectroscopy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗂️ What is Shown by a Low Resolution ¹H NMR Spectrum?
> Proton ($^{1}\\text{H}$) NMR provides detailed information about the hydrogen atoms in an organic molecule:
> * **Number of Peaks:** Indicates the number of **different chemical environments of hydrogen atoms (protons)** in the molecule.
> * **Positions of Peaks (Chemical Shift, $\\delta$):** Indicates the specific chemical environment of each proton group (refer to chemical shift database).
> * **Relative Peak Areas (Integration Trace):** The area under each peak (or the height of the step in the integration trace) is **directly proportional to the relative number of hydrogen atoms** in that specific environment.
> 
> Let\'s compare the two isomers of propanol (molecular formula $\\text{C₃H₈O}$):
> * **Propan-1-ol ($\\text{CH₃-CH₂-CH₂-OH}$):** Has 8 hydrogen atoms in 4 environments. Its spectrum shows **4 peaks** with an integration area ratio of **$3 : 2 : 2 : 1$**.
> * **Propan-2-ol ($\\text{CH₃-CH(OH)-CH₃}$):** Has 8 hydrogen atoms in 3 environments. Its spectrum shows **3 peaks** with an integration area ratio of **$6 : 1 : 1$** (the 6 equivalent methyl protons, 1 methine proton, and 1 hydroxyl proton).

> [!IMPORTANT]
> ### 📊 Interpreting ¹H Chemical Shifts
> 
> #### Table A: ¹H Chemical Shift Ranges
> | Proton Environment | Typical $\\delta$ range (ppm) |
> | :--- | :--- |
> | $\\text{H-C-C}$ (alkyl alkane) | $0.5 - 1.9$ |
> | $\\text{H-C-N}$ (amine or amide carbon) | $2.0 - 3.0$ |
> | $\\text{H-C-C=O}$ (carbon adjacent to carbonyl) | $2.0 - 2.6$ |
> | $\\text{H-C-halogen}$ (halogenoalkane carbon) | $2.5 - 4.5$ |
> | $\\text{H-C-O}$ (alcohol, ether, or ester carbon) | $3.0 - 4.2$ |
> | $\\text{-O-H}$ (alcohol hydroxyl proton) | $0.5 - 5.0$ (variable) |
> | $\\text{Ar-N-H}$ (phenylamine amino proton) | $3.0 - 5.0$ (variable) |
> | $\\text{H-C=C}$ (alkene proton) | $4.5 - 6.0$ |
> | $\\text{Ar-H}$ (arene benzene ring proton) | $6.0 - 9.0$ |
> | $\\text{CON-H}$ (amide proton) | $5.0 - 12.0$ (variable) |
> | $\\text{Ar-O-H}$ (phenol hydroxyl proton) | $4.0 - 12.0$ (variable) |
> | $\\text{-CHO}$ (aldehyde proton) | $9.0 - 10.0$ |
> | $\\text{-COOH}$ (carboxylic acid proton) | $10.0 - 12.0$ |
> 
> * **Trend in Halogenoalkanes:**
>   $$\\text{R₂CHF} > \\text{R₂CHCl} > \\text{R₂CHBr} > \\text{R₂CHI}$$
>   Highly electronegative fluorine deshields the adjacent protons the most, shifting their signal downfield to the highest $\\delta$ value.
> * **Trend in Alkanes:**
>   $$\\text{R₃CH} \\quad (\\text{tertiary}) > \\text{R₂CH₂} \\quad (\\text{secondary}) > \\text{RCH₃} \\quad (\\text{primary})$$

> [!IMPORTANT]
> ### 📋 Case Study: Distinguishing Butanal and Butanone (Molecular Formula $\\text{C₄H₈O}$)
> 
> * **Butanal ($\\text{CH₃CH₂CH₂CHO}$):**
>   * Has **4 peaks** with an integration area ratio of **$3 : 2 : 2 : 1$**.
>   * $\\delta = 9.8\\text{ ppm}$ (area 1, due to $-\\text{CHO}$ aldehyde proton).
>   * $\\delta = 2.4\\text{ ppm}$ (area 2, due to $-\\text{CH₂}-$ adjacent to carbonyl, $\\text{H-C-C=O}$).
>   * $\\delta = 1.6\\text{ ppm}$ (area 2, due to intermediate $-\\text{CH₂}-$).
>   * $\\delta = 1.0\\text{ ppm}$ (area 3, due to terminal $-\\text{CH₃}$ protons).
> * **Butanone ($\\text{CH₃COCH₂CH₃}$):**
>   * Has **3 peaks** with an integration area ratio of **$3 : 3 : 2$** (or $3:2:3$).
>   * $\\delta = 2.5\\text{ ppm}$ (area 2, due to $-\\text{CH₂}-$ adjacent to carbonyl, $\\text{H-C-C=O}$).
>   * $\\delta = 2.1\\text{ ppm}$ (area 3, due to $-\\text{CH₃}$ adjacent to carbonyl, $\\text{H-C-C=O}$).
>   * $\\delta = 1.1\\text{ ppm}$ (area 3, due to terminal $-\\text{CH₃}$ protons).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: Isomers of Pentane
> **Question:** Predict the number of peaks in the $^1\\text{H}$ NMR spectrum of each of the isomers of $\\text{C₅H₁₂}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Pentane ($\\text{CH₃CH₂CH₂CH₂CH₃}$):** Symmetrical. Two terminal $-\\text{CH₃}$ groups are equivalent (1 environment). Two adjacent $-\\text{CH₂}-$ groups are equivalent (1 environment). One central $-\\text{CH₂}-$ group is unique (1 environment). Total: **3 peaks**.
>   2. **2-Methylbutane ($\\text{(CH₃)₂CH-CH₂-CH₃}$):** Two left-hand methyl groups are equivalent (1 environment). One $-\\text{CH}-$ proton is unique (1 environment). One $-\\text{CH₂}-$ group is unique (1 environment). One right-hand terminal $-\\text{CH₃}$ is unique (1 environment). Total: **4 peaks**.
>   3. **2,2-Dimethylpropane ($\\text{(CH₃)₄C}$):** Highly symmetrical. All 12 hydrogen atoms in the four methyl groups are identical. Total: **1 peak**.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Integration Trace Limits
> **Question:** Why does an integration trace not always indicate the actual numbers of hydrogen atoms in a molecule?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Recall integration trace output:** The integration trace (or peak areas) only measures the relative ratios of protons in each chemical environment, expressing them in the **simplest integer ratio** (like $3:2:1$).
>   2. **Consider a symmetrical case:** A symmetrical molecule like hexane-2,5-dione ($\\text{CH₃COCH₂CH₂COCH₃}$, 10 hydrogens) might have 6 methyl protons and 4 methylene protons. Its integration trace ratio would simplify to $3:2$.
>   3. **Deduce requirements:** Without knowing the molecular formula (obtained from mass spectrometry), the integration trace alone cannot determine whether there are 5, 10, or 15 hydrogens.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Ethylamine vs Ethanamide
> **Question:** How would you easily decide from a $^1\\text{H}$ NMR spectrum whether a compound is ethylamine ($\\text{CH₃CH₂NH₂}$) or ethanamide ($\\text{CH₃CONH₂}$)?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Analyze ethylamine ($\\text{CH₃CH₂NH₂}$):**
>      * Contains 3 different proton environments: $-\\text{CH₃}$ (area 3), $-\\text{CH₂}-$ (area 2), and $-\\text{NH₂}$ (area 2).
>      * Expected spectrum: **3 peaks** with area ratio $3:2:2$.
>      * Chemical shifts: Alkyl protons appear at $\\delta = 0.5-1.9\\text{ ppm}$, and $-\\text{CH₂N}-$ appears at $\\delta = 2.0-3.0\\text{ ppm}$.
>   2. **Analyze ethanamide ($\\text{CH₃CONH₂}$):**
>      * Contains 2 different proton environments: $-\\text{CH₃}$ (area 3) and $-\\text{NH₂}$ (area 2).
>      * Expected spectrum: **2 peaks** with area ratio $3:2$.
>      * Chemical shifts: Amide $-\\text{NH₂}$ protons ($\\text{CON-H}$) appear far downfield as a broad peak at $\\delta = 5.0-12.0\\text{ ppm}$.
>   3. **Conclusion:**
>      * Ethylamine will show 3 peaks, while ethanamide will show 2 peaks.
>      * Furthermore, ethanamide will have a very characteristic downfield peak ($\\delta = 5.0-12.0\\text{ ppm}$) due to the amide protons, which is absent in ethylamine.
`,
        keyPoints: [
            'Low resolution 1H NMR peak count equals the number of unique proton environments in the molecule.',
            'Integration trace heights or peak areas represent the relative ratio of protons in each environment, not the absolute counts.',
            'Chemical shift values indicate the types of chemical environments, affected by adjacent electronegative atoms.'
        ]
    },
    {
        id: 'high-resolution-1h-nmr-u5-l4',
        title: 'High Resolution ¹H NMR Spectroscopy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🗂️ What is a Splitting Pattern?
> A high-resolution $^1\\text{H}$ NMR spectrum contains one extra feature not seen in low-resolution: the peaks are split into groups of smaller sub-peaks, called **multiplets**.
> * **Cause:** This splitting is caused by **spin-spin coupling** (magnetic interaction) between non-equivalent hydrogen atoms on adjacent (neighbouring) carbon atoms.
> 
> * **The $(n+1)$ Rule:**
>   If a carbon carrying hydrogen atoms has $n$ hydrogens on adjacent/neighbouring carbon atoms, its peak is split into **$n+1$** sub-peaks:
> 
> #### Table A: Multiplet Splitting Ratios (Pascal\'s Triangle)
> | $n$ (adjacent H) | $n+1$ (sub-peaks) | Multiplet Type | Ratio of Sub-Peak Areas |
> | :--- | :--- | :--- | :--- |
> | 0 | 1 | **singlet** | 1 |
> | 1 | 2 | **doublet** | $1 : 1$ |
> | 2 | 3 | **triplet** | $1 : 2 : 1$ |
> | 3 | 4 | **quartet** | $1 : 3 : 3 : 1$ |
> 
> * **Important Rule:** Protons on the same carbon atom (equivalent protons) do not split each other. Equivalent protons on adjacent carbons in completely symmetrical molecules also do not split each other.
>   * *Example:* In 1,2-dichloroethane ($\\text{CH₂Cl-CH₂Cl}$), all 4 protons are equivalent, yielding a single **singlet** peak (no splitting).
>   * *Example:* In 1,1-dichloroethane ($\\text{CHCl₂-CH₃}$), the $-\\text{CH₃}$ protons split the adjacent $-\\text{CH}-$ peak into a **quartet** ($n=3 \\rightarrow 4$), and the single $-\\text{CH}-$ proton splits the $-\\text{CH₃}$ peak into a **doublet** ($n=1 \\rightarrow 2$).

> [!IMPORTANT]
> ### 📋 Case Study: Analyzing High-Res Spectra
> 
> * **1. Butanone ($\\text{CH₃-CO-CH₂-CH₃}$):**
>   * The $-\\text{CH₃}$ protons adjacent to the carbonyl ($\\text{CH₃-CO-}$) have $n=0$ protons on the adjacent carbon. Thus, they yield a **singlet** peak.
>   * The $-\\text{CH₂}-$ protons have a $-\\text{CH₃}$ group next to them ($n=3$). Thus, they yield a **quartet** peak.
>   * The terminal $-\\text{CH₃}$ protons have a $-\\text{CH₂}-$ group next to them ($n=2$). Thus, they yield a **triplet** peak.
> * **2. 1-chloropropane ($\\text{CH₃-CH₂-CH₂-Cl}$):**
>   * The $-\\text{CH₃}$ group is next to a $-\\text{CH₂}-$ ($n=2$) $\\rightarrow$ **triplet**.
>   * The $-\\text{CH₂Cl}$ group is next to a $-\\text{CH₂}-$ ($n=2$) $\\rightarrow$ **triplet**.
>   * The middle $-\\text{CH₂}-$ group has 3 protons on one side and 2 on the other ($n=3+2=5$ adjacent protons) $\\rightarrow n+1 = 6 \\rightarrow$ **sextet**.

> [!BOX]
> ### 🔬 Worked Examples of Structure Deduction
> 
> * **Methyl Propanoate ($\\text{CH₃CH₂COOCH₃}$):**
>   * The terminal $-\\text{CH₃}$ is next to $-\\text{CH₂}-$ ($n=2$) $\\rightarrow$ **triplet** (area 3, $\\delta \\approx 1.2\\text{ ppm}$).
>   * The $-\\text{CH₂}-$ is next to $-\\text{CH₃}$ ($n=3$) $\\rightarrow$ **quartet** (area 2, $\\delta \\approx 2.4\\text{ ppm}$).
>   * The $-\\text{OCH₃}$ methyl is next to a carbonyl carbon with no protons ($n=0$) $\\rightarrow$ **singlet** (area 3, $\\delta \\approx 3.7\\text{ ppm}$).
> * **Ethyl Ethanoate ($\\text{CH₃COOCH₂CH₃}$):**
>   * The $-\\text{OCH₂}-$ is next to $-\\text{CH₃}$ ($n=3$) $\\rightarrow$ **quartet** (area 2, $\\delta \\approx 4.1\\text{ ppm}$).
>   * The $-\\text{CH₃}$ in the ethyl group is next to $-\\text{CH₂}-$ ($n=2$) $\\rightarrow$ **triplet** (area 3, $\\delta \\approx 1.3\\text{ ppm}$).
>   * The $-\\text{COCH₃}$ methyl is next to a carbonyl carbon with no protons ($n=0$) $\\rightarrow$ **singlet** (area 3, $\\delta \\approx 2.0\\text{ ppm}$).
> * **Methylpropanoic acid ($\\text{(CH₃)₂CH-COOH}$):**
>   * The carboxylic acid proton ($-\\text{COOH}$) has no adjacent protons ($n=0$) $\\rightarrow$ **singlet** (area 1, $\\delta \\approx 11.9\\text{ ppm}$).
>   * The central $-\\text{CH}-$ proton is next to 6 equivalent methyl protons ($n=6$) $\\rightarrow n+1 = 7 \\rightarrow$ **septet** (area 1, $\\delta \\approx 2.6\\text{ ppm}$).
>   * The two equivalent methyl groups ($-\\text{CH(CH₃)₂}$) are next to a $-\\text{CH}-$ ($n=1$) $\\rightarrow$ **doublet** (area 6, $\\delta \\approx 1.2\\text{ ppm}$).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing C₄H₈O₂ Structure
> **Question:** A compound has the molecular formula $\\text{C₄H₈O₂}$ (note: textbook writes $\\text{C₄H₈O}$ by typo). Its $^1\\text{H}$ NMR spectrum contains only three singlets, with chemical shift values of 4.0, 3.4, and 2.1 ppm. The integration trace shows the ratios $2:3:3$. What is its structure?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Analyze the chemical shifts and splitting:**
>      * **$\\delta = 2.1\\text{ ppm}$ (singlet, area 3):** Must be a methyl group next to a carbonyl carbon ($\\text{CH₃-CO-}$). It is a singlet, confirming no protons are on the adjacent carbonyl carbon.
>      * **$\\delta = 3.4\\text{ ppm}$ (singlet, area 3):** Must be a methyl group bonded to an electronegative oxygen ($\\text{CH₃-O-}$). It is a singlet, confirming no protons are on the adjacent oxygen.
>      * **$\\delta = 4.0\\text{ ppm}$ (singlet, area 2):** Must be a methylene group ($-\\text{CH₂}-$) flanked by highly deshielding groups (specifically, between the carbonyl and the ether oxygen: $-\\text{CO-CH₂-O-}$). It is a singlet, confirming no protons on adjacent carbons.
>   2. **Assemble the pieces:**
>      $$\\text{CH₃-CO-CH₂-O-CH₃} \\quad \\text{(1-methoxypropan-2-one)}$$
>   3. **Verify the structure:** The formula is $\\text{C₄H₈O₂}$, which matches the adjusted formula. The number of peaks (3 singlets) and integration ratio ($2:3:3$) match the experimental data perfectly.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Deducing C₅H₁₀O₂ Structure
> **Question:** A compound has the molecular formula $\\text{C₅H₁₀O₂}$. Its $^1\\text{H}$ NMR spectrum contains a singlet with a chemical shift of 2.3 ppm, a quartet (septet) with a chemical shift of 5.0 ppm, and a doublet with a chemical shift of 1.2 ppm. The integration trace shows the ratios $3:1:6$. What is its structure?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
>   1. **Analyze the chemical shifts and splitting:**
>      * **$\\delta = 1.2\\text{ ppm}$ (doublet, area 6):** Represents two equivalent methyl groups next to a single proton ($-\\text{CH(CH₃)₂}$).
>      * **$\\delta = 5.0\\text{ ppm}$ (multiplet/septet, area 1):** Represents a single proton ($-\\text{CH}-$) next to 6 equivalent methyl protons. Its exceptionally high downfield chemical shift ($\\delta = 5.0\\text{ ppm}$) indicates it is directly bonded to the ester oxygen ($-\\text{COO-CH(CH₃)₂}$).
>      * **$\\delta = 2.3\\text{ ppm}$ (singlet, area 3):** Represents a methyl group next to a carbonyl carbon ($\\text{CH₃-CO-}$). It is a singlet because the adjacent carbonyl carbon carries no protons.
>   2. **Assemble the pieces:**
>      $$\\text{CH₃-CO-O-CH(CH₃)₂} \\quad \\text{(isopropyl ethanoate / 1-methylethyl ethanoate)}$$
>   3. **Verify the molecular formula:** $\\text{C₅H₁₀O₂}$ is satisfied. The peak integration ($3:1:6$) and splitting match the proposed structure.
`,
        keyPoints: [
            'High-resolution proton NMR peaks are split by neighboring protons following the (n+1) rule.',
            'Equivalent protons do not cause splitting of each other.',
            'Combined analysis of peak integration, chemical shift, and splitting patterns allows full structure determination.'
        ]
    }
];
