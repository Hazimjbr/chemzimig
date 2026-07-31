import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Atomic Structure & The Periodic Table";
export const lessonNumber = 2;




export const theoryMarkdown = `
# Topic 2: Atomic Structure & The Periodic Table
This lesson covers subatomic particles, mass spectrometry, relative isotopic and atomic masses, electronic configurations (s, p, d orbitals), and trends in first ionization energies.
`;

export const parts: LessonPart[] = [
  {
    id: 'subatomic-particles-20260106',
    title: 'Subatomic Particles & Isotopes',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Fundamental Subatomic Particles
> All atoms (except $^1_1\\text{H}$) consist of three sub-particles. The mass of these particles is measured in atomic mass units because they are very light
> 
> | Particle | Symbol | Site | Relative Mass | Charge |
> | :--- | :---: | :--- | :---: | :---: |
> | Proton | $p$ | Center of atom (nucleus) | $1$ unit | $+1$ |
> | Neutron | $n$ | Center of atom (nucleus) | $1$ unit | none |
> | Electron | $e$ | Around the nucleus | $\\frac{1}{1840}$ | $-1$ |

> [!IMPORTANT]
> ### 🧮 Atomic and Mass Numbers
> * **Atomic number (proton number $Z$):** Number of protons in the nucleus of an atom. It uniquely identifies any atom ($p = e$ in a neutral atom)
> * **Charge Neutrality:** Any atom has zero net charge because it has the same number of protons and electrons
> * **Nucleon number (mass number $A$):** The total number of protons and neutrons in the nucleus of an atom
> * **Whole Numbers:** The mass number of an isotope is always a whole number because it is the sum of protons and neutrons in the nucleus of one atom of the isotopes

> [!TIP]
> ### 🧪 Isotopes and Chemical Reactivity
> * **Isotopes:** Atoms of the same element (same proton number), with different numbers of neutrons
> * **Chemical Properties:** Isotopes have the same chemical properties because they have the same electronic configuration (structure) or number of electrons in the outer shell electrons (valence $e^-$)
> * **Physical Properties:** Isotopes have slightly different physical properties (e.g. density, rate of diffusion) due to their difference in mass
> * **Relative Atomic Mass ($A_r$):** Weighted mean mass of an atom of an element compared to $\\frac{1}{12}$ the mass of carbon-12

> [!EXAMPLE]
> #### 📝 Worked Example 1: Particles in a Neutral Atom
> **Question:** Determine the number of protons, neutrons, and electrons in a neutral atom of Calcium-40 ($^{40}_{20}\\text{Ca}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify atomic and mass numbers:**
> >    * Atomic number ($Z$) = $20$
> >    * Mass number ($A$) = $40$
> > 2. **Calculate subatomic particles:**
> >    * Protons = $Z = 20$
> >    * Neutrons = $A - Z = 40 - 20 = 20$
> >    * Electrons = Protons (since it is a neutral atom) = $20$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Particles in an Ion
> **Question:** Determine the number of protons, neutrons, and electrons in a Calcium ion ($^{40}_{20}\\text{Ca}^{2+}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify numbers and charge:**
> >    * Protons = $20$ (proton count never changes in chemical reactions)
> >    * Neutrons = $A - Z = 40 - 20 = 20$
> > 2. **Calculate electrons:**
> >    * The $+2$ charge indicates a loss of 2 electrons
> >    * Electrons = Protons $-$ Charge = $20 - 2 = 18$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Particles in a Negative Isotopic Ion
> **Question:** Determine the number of protons, neutrons, and electrons in a Chloride ion formed from the Chlorine-37 isotope ($^{37}_{17}\\text{Cl}^-$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify atomic and mass numbers:**
> >    * Atomic number ($Z$) = $17$
> >    * Mass number ($A$) = $37$
> > 2. **Calculate protons and neutrons:**
> >    * Protons = $17$
> >    * Neutrons = $A - Z = 37 - 17 = 20$
> > 3. **Calculate electrons:**
> >    * The $-1$ charge indicates a gain of 1 electron
> >    * Electrons = Protons $+$ Charge magnitude = $17 + 1 = 18$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing Chemical Symbol from Subatomic Particles
> **Question:** An ion has a mass number of $56$, a charge of $+3$, and contains $23$ electrons. Deduce the complete chemical symbol for this ion, including the atomic number, mass number, and charge
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the atomic number (proton number, $Z$):**
> >    * For a positive ion (cation): $\\\\text{Charge} = \\\\text{Protons} - \\\\text{Electrons}$
> >    * $+3 = \\\\text{Protons} - 23 \\\\implies \\\\text{Protons} = 23 + 3 = 26$
> >    * The atomic number ($Z$) is **26**
> > 
> > 2. **Identify the element using the Periodic Table:**
> >    * The element with atomic number $26$ is Iron (Fe)
> > 
> > 3. **Determine the number of neutrons:**
> >    * $\\\\text{Neutrons} = A - Z = 56 - 26 = 30$
> > 
> > 4. **Write the complete chemical symbol:**
> >    * Write the mass number ($56$) as a superscript and the atomic number ($26$) as a subscript on the left of the chemical symbol
> >    * Include the charge ($3+$) as a superscript on the right: **$^{56}_{26}\\\\text{Fe}^{3+}$**

> [!EXAMPLE]
> #### 📝 Worked Example 5: Explaining Physical Differences between Isotopes
> **Question:** State and explain why a sample of gas containing the Chlorine-37 isotope, $^{37}\\\\text{Cl}_2$, diffuses more slowly than a sample containing the Chlorine-35 isotope, $^{35}\\\\text{Cl}_2$, at the same temperature
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the relative molecular masses of both gas molecules:**
> >    * $Mr(^{35}\\\\text{Cl}_2) = 2 \\\\times 35.0 = 70.0$
> >    * $Mr(^{37}\\\\text{Cl}_2) = 2 \\\\times 37.0 = 74.0$
> > 
> > 2. **Relate molecular mass to rate of physical diffusion:**
> >    * At any given temperature, all gas molecules share the same average kinetic energy ($KE = \\\\frac{1}{2}mv^2$)
> >    * Consequently, molecules with a larger mass ($m$) must travel at a lower average velocity ($v$)
> >    * Since $^{37}\\\\text{Cl}_2$ molecules are heavier ($Mr = 74.0$) than $^{35}\\\\text{Cl}_2$ molecules ($Mr = 70.0$), they move slower at the same temperature and therefore diffuse at a lower rate
`,
    keyPoints: [
      'Protons and neutrons occupy the dense central nucleus.',
      'Isotopes share identical electronic structures, resulting in identical chemical reactivity.',
      'Cations are formed by losing electrons; anions are formed by gaining electrons.'
    ]
  },
  {
    id: 'mass-spectrometry-20260106',
    title: 'Mass Spectrometry',
    type: 'text',
    massSpecSimulator: true,
    content: `
> [!NOTE]
> ### ⚙️ Principles of Mass Spectrometry
> A **Mass Spectrometer** is a highly sensitive analytical instrument. The operation of a mass spectrometer follows five key steps:
> 
> 1. **Vaporisation:** The sample must be in a gaseous state so that the particles can move freely and fast
> 2. **Ionisation:** Vaporised particles are bombarded with high-energy electrons from an electron gun. This knocks off one or more electrons from the gaseous particles to form positive ions
> 3. **Acceleration:** Gaseous positive ions are accelerated by an electric field (potential difference) to give all ions the same kinetic energy, causing them to travel in straight paths
> 4. **Deflection:** The accelerated ions are deflected by a magnetic field. The degree of deflection depends on the mass-to-charge ratio ($m/z$) of each ion
> 5. **Detection:** Deflected ions hit a metallic detector plate, generating an electric current. The size of the current is directly proportional to the abundance of each isotope

> [!IMPORTANT]
> ### 🧪 Ionisation Equations & Vacuum Conditions
> * **Single Ionisation ($1+$ Ions):**
>   $$\\text{M(g)} + e^- \\rightarrow \\text{M}^+\\text{(g)} + 2e^-$$
> * **Double Ionisation ($2+$ Ions):**
>   $$\\text{M(g)} + e^- \\rightarrow \\text{M}^{2+}\\text{(g)} + 3e^-$$
> * **Deflection Proportion:** The degree of deflection is inversely proportional to the mass-to-charge ratio ($m/z$). Ions with a smaller $m/z$ (lighter/more charged) deflect more, while ions with a larger $m/z$ (heavier/less charged) deflect less
> * **Vacuum Requirement:** The entire system must operate under a high vacuum to prevent gaseous ions from colliding with air particles, which would deflect them from their path and form false peaks on the spectrum

> [!BOX]
> ### 📋 Key Applications & Uses of Mass Spectrometry
> Mass spectrometers are widely used across research, medicine, and space exploration:
> 
> 1. **Isotopic Analysis:** Determine the exact mass and relative abundance of each isotope of an element
> 2. **Structure Determination:** Determine the relative molecular mass ($M_r$) of a compound to identify its structure
> 3. **Archaeological Dating:** Determine the age of fossils or human remains (Radioactive carbon dating)
> 4. **Drug & Sports Testing:** Detect illegal use of anabolic steroids in sports or measure alcohol blood levels
> 5. **Space Analysis:** Analyse materials brought back from space missions
> 6. **Pharmaceutical Quality Control:** Identify breakdown products of drugs and verify whether the desired compound has been successfully synthesised
> 7. **Drug Discovery:** Identify molecules from biological samples with potential therapeutic activity


> [!NOTE]
> ### 📊 Understanding Mass Spectra
> * **Relative Isotopic Mass:** The mass of an individual atom of a particular isotope relative to $\\frac{1}{12}$ of the mass of an atom of carbon-12
> * **Molecular (Parent) Ion Peak ($M$ peak):**
>   1. The peak with the highest $m/z$ ratio in the mass spectrum of a molecular compound
>   2. Located at the far right of the spectrum, it represents the relative molecular mass ($M_r$) of the intact molecule
> * **Fragment Ion Peaks:** The peaks with smaller $m/z$ values represent fragment ions formed when the molecular ion breaks down. The positively charged species detected can be positive atoms, molecules, or molecular fragments
> * **The $M+1$ Peak:** In large organic compounds (like ethyl benzoate), a very small peak is observed at $m/z = M+1$. This is caused by the naturally occurring carbon-13 isotope ($1.11\%$) present in the molecules

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="barAmber" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>
  </defs>

  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#grid)" rx="8" />

  <!-- Title -->
  <text x="500" y="30" fill="#c7d2fe" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Typical Mass Spectrum of an Organic Compound</text>

  <!-- Y-Axis Grid Lines & Labels -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.5">
    <line x1="100" y1="50" x2="900" y2="50" stroke-dasharray="4 4" />
    <line x1="100" y1="100" x2="900" y2="100" stroke-dasharray="4 4" />
    <line x1="100" y1="150" x2="900" y2="150" stroke-dasharray="4 4" />
    <line x1="100" y1="200" x2="900" y2="200" stroke-dasharray="4 4" />
    <line x1="100" y1="250" x2="900" y2="250" stroke-dasharray="4 4" />
  </g>

  <g fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="end">
    <text x="90" y="54">100</text>
    <text x="90" y="104">80</text>
    <text x="90" y="154">60</text>
    <text x="90" y="204">40</text>
    <text x="90" y="254">20</text>
    <text x="90" y="304">0</text>
  </g>

  <!-- Axes -->
  <line x1="100" y1="40" x2="100" y2="300" stroke="#475569" stroke-width="2" />
  <line x1="100" y1="300" x2="920" y2="300" stroke="#475569" stroke-width="2" />

  <!-- Axis Titles -->
  <text x="45" y="170" fill="#94a3b8" font-size="12" font-weight="600" transform="rotate(-90,45,170)" text-anchor="middle" font-family="system-ui, sans-serif">Relative Intensity (%)</text>
  <text x="510" y="342" fill="#94a3b8" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">m/z (Mass-to-Charge Ratio)</text>

  <!-- X-Axis Labels -->
  <g fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="225" y="318">25</text>
    <text x="350" y="318">50</text>
    <text x="475" y="318">75</text>
    <text x="600" y="318">100</text>
    <text x="725" y="318">125</text>
    <text x="850" y="318">150</text>
  </g>

  <!-- Spectrum Peaks -->
  <!-- Fragment Peak at m/z = 39 (x=295) height=10% (y=275) -->
  <line x1="295" y1="300" x2="295" y2="275" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 51 (x=355) height=20% (y=250) -->
  <line x1="355" y1="300" x2="355" y2="250" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 77 (x=485) height=40% (y=200) -->
  <line x1="485" y1="300" x2="485" y2="200" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Base Peak at m/z = 105 (x=625) height=100% (y=50) -->
  <line x1="625" y1="300" x2="625" y2="50" stroke="url(#barAmber)" stroke-width="4" stroke-linecap="round" />
  <!-- Fragment Peak at m/z = 120 (x=700) height=15% (y=262.5) -->
  <line x1="700" y1="300" x2="700" y2="262.5" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" />
  <!-- Molecular Ion Peak (M) at m/z = 150 (x=850) height=25% (y=237.5) -->
  <line x1="850" y1="300" x2="850" y2="237.5" stroke="#ef4444" stroke-width="4" stroke-linecap="round" />
  <!-- M+1 Peak at m/z = 151 (x=855) height=2.5% (y=293.75) -->
  <line x1="855" y1="300" x2="855" y2="293.75" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round" />

  <!-- Label Annotations -->
  <!-- Base Peak Label -->
  <g font-family="system-ui, sans-serif" font-size="11">
    <text x="635" y="70" fill="#fbbf24" font-weight="700">Base Peak (100% abundance)</text>
    <text x="635" y="85" fill="#94a3b8">The most intense/stable peak in the spectrum</text>
    <path d="M 630 75 L 627 75" stroke="#fbbf24" stroke-width="1" marker-end="url(#arrow)" />

    <!-- Fragment Peaks Label -->
    <text x="375" y="145" fill="#60a5fa" font-weight="700">Fragment Ion Peaks</text>
    <text x="375" y="160" fill="#94a3b8">Formed when the molecular ion breaks down</text>
    <path d="M 430 168 L 475 190" stroke="#94a3b8" stroke-width="1" fill="none" marker-end="url(#arrow)" />
    <path d="M 400 168 L 362 235" stroke="#94a3b8" stroke-width="1" fill="none" marker-end="url(#arrow)" />

    <!-- Molecular Ion Peak (M) Label -->
    <text x="690" y="215" fill="#f87171" font-weight="700" text-anchor="end">Molecular Ion Peak (M)</text>
    <text x="690" y="230" fill="#94a3b8" text-anchor="end">Represents the intact molecule (Mr = 150)</text>
    <path d="M 695 225 L 840 242" stroke="#f87171" stroke-width="1" fill="none" marker-end="url(#arrow)" />

    <!-- M+1 Peak Label -->
    <text x="880" y="270" fill="#f43f5e" font-weight="700">M+1 Peak</text>
    <text x="880" y="285" fill="#94a3b8">Due to natural 13C abundance</text>
    <path d="M 875 280 L 858 293" stroke="#f43f5e" stroke-width="1" fill="none" marker-end="url(#arrow)" />
  </g>
</svg>`)}

> [!BOX]
> ### 🧪 Isotopic Patterns & Chlorine Spectrum
> * **Chlorine Isotopic Abundance:** In nature, Chlorine exists as $^{35}\\text{Cl}$ (approximately $75\\%$ abundance) and $^{37}\\text{Cl}$ (approximately $25\\%$ abundance), showing a ratio of $3:1$
> * **Diatomic Chlorine ($\\text{Cl}_2$) Pattern:** In the mass spectrum of chlorine gas ($\\text{Cl}_2$), three molecular ion peaks appear at $m/z = 70$ ($^{35}\\text{Cl}_2^+$), $72$ ($^{35}\\text{Cl}^{37}\\text{Cl}^+$), and $74$ ($^{37}\\text{Cl}_2^+$)
> * **Peak Height Ratios:** The relative heights of these molecular ion peaks ($\\text{Cl}_2$) are approximately in a **$9:6:1$ ratio** (calculated from the probability $(3:1) \\times (3:1)$), though in reality it deviates slightly due to exact isotopic percentages

${svgToken(`<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg,#070f1e 0%,#0b1b35 100%);border-radius:16px;border:1px solid #1e293b;font-family:Inter,sans-serif">
  <defs>
    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <!-- Axes -->
  <line x1="80" y1="30" x2="80" y2="205" stroke="#475569" stroke-width="1.5"/>
  <line x1="80" y1="205" x2="660" y2="205" stroke="#475569" stroke-width="1.5"/>
  <!-- Y-axis label -->
  <text x="20" y="120" fill="#94a3b8" font-size="11" transform="rotate(-90,20,120)" text-anchor="middle">Relative abundance</text>
  <!-- X-axis label -->
  <text x="370" y="240" fill="#94a3b8" font-size="11" text-anchor="middle">m/z</text>
  <!-- Title -->
  <text x="370" y="20" fill="#c7d2fe" font-size="12" text-anchor="middle" font-weight="600">Mass Spectrum of Cl&#x2082; — Isotopic Pattern (9:6:1)</text>
  <!-- Bar m/z=70 height 9/9=100% => 160px -->
  <rect x="175" y="45" width="60" height="160" fill="url(#barGrad)" rx="4"/>
  <text x="205" y="40" fill="#a5b4fc" font-size="11" text-anchor="middle">9</text>
  <text x="205" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">70</text>
  <text x="205" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2075;Cl&#x2082;&#x207A;</text>
  <!-- Bar m/z=72 height 6/9 => ~107px -->
  <rect x="325" y="98" width="60" height="107" fill="url(#barGrad)" rx="4"/>
  <text x="355" y="93" fill="#a5b4fc" font-size="11" text-anchor="middle">6</text>
  <text x="355" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">72</text>
  <text x="355" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2075;Cl&#x00B3;&#x2077;Cl&#x207A;</text>
  <!-- Bar m/z=74 height 1/9 => ~18px -->
  <rect x="475" y="187" width="60" height="18" fill="url(#barGrad)" rx="4"/>
  <text x="505" y="182" fill="#a5b4fc" font-size="11" text-anchor="middle">1</text>
  <text x="505" y="222" fill="#cbd5e1" font-size="11" text-anchor="middle">74</text>
  <text x="505" y="234" fill="#64748b" font-size="9" text-anchor="middle">&#x00B3;&#x2077;Cl&#x2082;&#x207A;</text>
</svg>`)}



> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Relative Atomic Mass (Ar)
> **Question:** A sample of neon consists of three isotopes: $^{20}\\text{Ne}$ (abundance $90.9\\%$), $^{21}\\text{Ne}$ (abundance $0.3\\%$), and $^{22}\\text{Ne}$ (abundance $8.8\\%$). Calculate the relative atomic mass (Ar) of this neon sample to 2 decimal places
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the weighted average formula:**
> >    $$A_r = \\frac{\\sum (\\text{Isotopic Mass} \\times \\text{Percentage Abundance})}{100}$$
> > 2. **Substitute values:**
> >    $$A_r = \\frac{(20 \\times 90.9) + (21 \\times 0.3) + (22 \\times 8.8)}{100}$$
> >    $$A_r = \\frac{1818.0 + 6.3 + 193.6}{100} = \\frac{2017.9}{100} = 20.179$$
> > 3. **Round to 2 decimal places:**
> >    $$A_r = 20.18\\text{ (no units)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Properties of Isotopes & Spectrometry Deflection
> **Question:** Explain why isotopes of an element have the same chemical properties but deflect differently in a mass spectrometer
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Chemical Properties (Outer Shells):**
> >    * Isotopes have the same number of protons and electrons, resulting in identical electronic configurations (they are isoelectronic)
> >    * Since chemical reactions depend entirely on the arrangement of outer-shell valence electrons, they exhibit identical chemical properties
> > 2. **Physical Deflection (m/z values):**
> >    * Isotopes have different numbers of neutrons, resulting in different isotopic masses
> >    * Because mass spectrometer deflection depends on the mass-to-charge ratio ($m/z$), the different masses (and thus different $m/z$ values) cause the isotopes to deflect differently in the magnetic field under the same conditions

> [!EXAMPLE]
> #### 📝 Worked Example 3: Subatomic Ion Deflection Paths
> **Question:** Four $\\text{X}$ ions ($^{54}\\text{X}^{2+}$, $^{56}\\text{X}^{2+}$, $^{54}\\text{X}^{+}$, $^{56}\\text{X}^{+}$) are present in a stream of gaseous ions inside a mass spectrometer. Which of these ions will follow paths 1–4 shown in the diagram?
> 
> ${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="magnetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
  </defs>
  
  <rect width="1000" height="360" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#grid)" rx="8" />

  <rect x="250" y="60" width="180" height="240" fill="#1e293b" fill-opacity="0.2" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4" rx="10" />
  <text x="340" y="50" fill="#94a3b8" font-size="12" font-weight="600" text-anchor="middle" font-family="system-ui, sans-serif">MAGNETIC FIELD (B)</text>
  <text x="340" y="80" fill="#475569" font-size="10" text-anchor="middle" font-family="system-ui, sans-serif">Field Direction (into page ⊗)</text>

  <g stroke="#334155" stroke-width="1.5" fill="none">
    <circle cx="280" cy="110" r="6" /><line x1="276" y1="106" x2="284" y2="114" /><line x1="284" y1="106" x2="276" y2="114" />
    <circle cx="340" cy="110" r="6" /><line x1="336" y1="106" x2="344" y2="114" /><line x1="344" y1="106" x2="336" y2="114" />
    <circle cx="400" cy="110" r="6" /><line x1="396" y1="106" x2="404" y2="114" /><line x1="404" y1="106" x2="396" y2="114" />
    <circle cx="280" cy="170" r="6" /><line x1="276" y1="166" x2="284" y2="174" /><line x1="284" y1="166" x2="276" y2="174" />
    <circle cx="340" cy="170" r="6" /><line x1="336" y1="166" x2="344" y2="174" /><line x1="344" y1="166" x2="336" y2="174" />
    <circle cx="400" cy="170" r="6" /><line x1="396" y1="166" x2="404" y2="174" /><line x1="404" y1="166" x2="396" y2="174" />
    <circle cx="280" cy="230" r="6" /><line x1="276" y1="226" x2="284" y2="234" /><line x1="284" y1="226" x2="276" y2="234" />
    <circle cx="340" cy="230" r="6" /><line x1="336" y1="226" x2="344" y2="234" /><line x1="344" y1="226" x2="336" y2="234" />
    <circle cx="400" cy="230" r="6" /><line x1="396" y1="226" x2="404" y2="234" /><line x1="404" y1="226" x2="396" y2="234" />
  </g>

  <g fill="url(#magnetGrad)" stroke="#475569" stroke-width="1.5">
    <rect x="50" y="120" width="15" height="50" rx="2" />
    <rect x="50" y="190" width="15" height="50" rx="2" />
    <rect x="120" y="120" width="15" height="55" rx="2" />
    <rect x="120" y="185" width="15" height="55" rx="2" />
  </g>
  <text x="85" y="105" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="system-ui, sans-serif">Slits Align Beam</text>

  <line x1="20" y1="170" x2="135" y2="170" stroke="#f1f5f9" stroke-width="2" stroke-dasharray="3 3" />
  <line x1="135" y1="170" x2="250" y2="170" stroke="#f1f5f9" stroke-width="2.5" />
  <polygon points="250,170 242,165 242,175" fill="#f1f5f9" />
  <text x="70" y="265" fill="#e2e8f0" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Stream of Ions</text>
  <text x="70" y="280" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">(2+ and 1+ charges)</text>

  <path d="M 250 170 C 350 170, 500 170, 850 185" fill="none" stroke="#60a5fa" stroke-width="3" />
  <path d="M 250 170 C 350 170, 480 175, 820 220" fill="none" stroke="#34d399" stroke-width="3" />
  <path d="M 250 170 C 340 170, 430 190, 720 290" fill="none" stroke="#fbbf24" stroke-width="3" />
  <path d="M 250 170 C 330 170, 410 190, 680 310" fill="none" stroke="#f87171" stroke-width="3" />

  <circle cx="850" cy="185" r="5" fill="#60a5fa" />
  <text x="865" y="189" fill="#60a5fa" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 1</text>
  <circle cx="820" cy="220" r="5" fill="#34d399" />
  <text x="835" y="224" fill="#34d399" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 3</text>
  <circle cx="720" cy="290" r="5" fill="#fbbf24" />
  <text x="735" y="294" fill="#fbbf24" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 2</text>
  <circle cx="680" cy="310" r="5" fill="#f87171" />
  <text x="695" y="314" fill="#f87171" font-size="12" font-weight="bold" font-family="system-ui, sans-serif">Path 4</text>

  <rect x="680" y="25" width="280" height="120" fill="#0f172a" fill-opacity="0.7" stroke="#1e293b" stroke-width="1.5" rx="6" />
  <text x="820" y="45" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle" font-family="system-ui, sans-serif">Deflection vs. m/z Ratio</text>
  
  <text x="700" y="70" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 1: Least Deflection (m/z = 56)</text>
  <text x="700" y="88" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 3: Moderate Deflection (m/z = 54)</text>
  <text x="700" y="106" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 2: High Deflection (m/z = 28)</text>
  <text x="700" y="124" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Path 4: Most Deflection (m/z = 27)</text>
  
  <circle cx="692" cy="67" r="3" fill="#60a5fa" />
  <circle cx="692" cy="85" r="3" fill="#34d399" />
  <circle cx="692" cy="103" r="3" fill="#fbbf24" />
  <circle cx="692" cy="121" r="3" fill="#f87171" />
</svg>`)}
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the mass-to-charge ratio ($m/z$) for each ion:**
> >    * $^{54}\\text{X}^{2+} \\implies m/z = 54 / 2 = 27$
> >    * $^{56}\\text{X}^{2+} \\implies m/z = 56 / 2 = 28$
> >    * $^{54}\\text{X}^{+} \\implies m/z = 54 / 1 = 54$
> >    * $^{56}\\text{X}^{+} \\implies m/z = 56 / 1 = 56$
> > 2. **Understand the deflection principle:**
> >    * The degree of deflection in a magnetic field is inversely proportional to $m/z$
> >    * Smaller $m/z$ values deflect MORE (bend more sharply downwards)
> >    * Larger $m/z$ values deflect LESS (follow a wider/flatter curvature)
> > 3. **Match ions to paths:**
> >    * **Path 4 (Most Deflection):** $^{54}\\text{X}^{2+}$ (smallest $m/z = 27$)
> >    * **Path 2 (Second Most):** $^{56}\\text{X}^{2+}$ ($m/z = 28$)
> >    * **Path 3 (Third Most):** $^{54}\\text{X}^{+}$ ($m/z = 54$)
> >    * **Path 1 (Least Deflection):** $^{56}\\text{X}^{+}$ (largest $m/z = 56$)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Organic Fragmentation of Propanone
> **Question:** In the mass spectrum of propanone ($\\text{CH}_3\\text{COCH}_3$), major peaks are observed at $m/z = 58$, $43$, and $15$. Identify the species responsible for each of these peaks and write the equation for the formation of the fragment ion at $m/z = 43$ from the molecular ion
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the molecular ion peak (M):**
> >    * The peak at $m/z = 58$ corresponds to the relative molecular mass of propanone ($12 \\times 3 + 1 \\times 6 + 16 = 58$)
> >    * The species is the molecular ion: $[\\text{CH}_3\\text{COCH}_3]^+$
> > 2. **Identify the fragment peaks:**
> >    * $m/z = 15$ corresponds to the methyl group fragment: $[\\text{CH}_3]^+$
> >    * $m/z = 43$ corresponds to the remaining acylium ion fragment: $[\\text{CH}_3\\text{CO}]^+$ (since $58 - 15 = 43$)
> >    * **Note:** All detected species in a mass spectrometer must carry a positive charge
> > 3. **Write the fragmentation equation:**
> >    * Gaseous molecular ion breaks down to form a positive ion fragment and a neutral radical:
> >      $$[\\text{CH}_3\\text{COCH}_3]^+(\\text{g}) \\rightarrow [\\text{CH}_3\\text{CO}]^+(\\text{g}) + \\cdot\\text{CH}_3(\\text{g})$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Isotopic Peak Patterns of Bromine (Br₂)
> **Question:** Bromine has two naturally occurring isotopes: $^{79}\text{Br}$ (abundance $50.7\%$) and $^{81}\text{Br}$ (abundance $49.3\%$), which can be approximated as a $1:1$ ratio. Describe the expected molecular ion peaks in the mass spectrum of diatomic bromine gas ($\text{Br}_2$) and deduce their relative peak height ratio
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce possible isotopic combinations for $\text{Br}_2$:**
> >    * Combination 1: $^{79}\text{Br} - ^{79}\text{Br} \implies m/z = 79 + 79 = 158$
> >    * Combination 2: $^{79}\text{Br} - ^{81}\text{Br}$ or $^{81}\text{Br} - ^{79}\text{Br} \implies m/z = 79 + 81 = 160$
> >    * Combination 3: $^{81}\text{Br} - ^{81}\text{Br} \implies m/z = 81 + 81 = 162$
> > 2. **Calculate the probability of each combination (using $1:1$ ratio):**
> >    * Probability of $^{158}\text{Br}_2^+ = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
> >    * Probability of $^{160}\text{Br}_2^+ = 2 \times \left(\frac{1}{2} \times \frac{1}{2}\right) = \frac{1}{2}$
> >    * Probability of $^{162}\text{Br}_2^+ = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$
> > 3. **Deduce peak height ratio:**
> >    * Converting probabilities ($\frac{1}{4} : \frac{2}{4} : \frac{1}{4}$) gives a simplified ratio:
> >      $$\text{Ratio of peaks (158 : 160 : 162)} = 1:2:1$$

> [!EXAMPLE]
> #### 📝 Worked Example 6: Time-of-Flight (TOF) Mass Calculations
> **Question:** In a Time-of-Flight (TOF) mass spectrometer, all ions are accelerated to have the same kinetic energy ($KE$). An ion of $^{79}\text{Br}^+$ has a flight time of $2.73 \times 10^{-5}\text{ s}$ to travel along a drift tube of length $d$. Calculate the flight time, in seconds, of a $^{81}\text{Br}^+$ ion traveling through the same drift tube under the same conditions. Give your answer to 3 significant figures
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce the relationship between flight time ($t$) and isotopic mass ($m$):**
> >    * Kinetic energy is constant for all accelerated ions: $KE = \frac{1}{2}mv^2$
> >    * Since velocity is distance over time ($v = \frac{d}{t}$), we can substitute: $KE = \frac{1}{2}m\left(\frac{d}{t}\right)^2 \implies t = d\sqrt{\frac{m}{2KE}}$
> >    * Since the drift tube length ($d$) and kinetic energy ($KE$) are constant, flight time is directly proportional to the square root of the mass ($t \propto \sqrt{m}$):
> >      $$\frac{t_1}{t_2} = \sqrt{\frac{m_1}{m_2}}$$
> > 
> > 2. **Rearrange the formula to solve for the flight time of the heavier $^{81}\text{Br}^+$ ion ($t_2$):**
> >    $$t_2 = t_1 \times \sqrt{\frac{m_2}{m_1}}$$
> > 
> > 3. **Substitute the values and calculate the final flight time:**
> >    * Let $t_1 = 2.73 \times 10^{-5}\text{ s}$, $m_1 = 79$ (mass of $^{79}\text{Br}^+$), and $m_2 = 81$ (mass of $^{81}\text{Br}^+$)
> >    $$t_2 = (2.73 \times 10^{-5}\text{ s}) \times \sqrt{\frac{81}{79}}$$
> >    $$t_2 = (2.73 \times 10^{-5}\text{ s}) \times 1.0126 = 2.76 \times 10^{-5}\text{ s}$$
         `,
    keyPoints: [
      'All ions in a TOF spectrometer are accelerated to have the same kinetic energy.',
      'Velocity is inversely proportional to the square root of isotopic mass; lighter ions reach the detector first.',
      'The abundance signal corresponds to the current generated as ions hit the detector.'
    ]
  },
  {
    id: 'electronic-configurations-20260106',
    title: 'Electronic Configurations & Periodic Trends',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Principal Quantum Shells and Sublevels
> * **Quantum Shells (Main Energy Levels):** Represented by the principal quantum number $n$ ($n = 1, 2, 3, 4$). Each shell can hold a maximum of $2n^2$ electrons
> * **Sublevels:** Each main quantum shell is made up of sublevels of different energies. These are designated as $s$, $p$, $d$, and $f$ subshells
> * **Sublevels and Orbitals:** Each sublevel is made up of one or more orbitals of the same energy (degenerate orbitals)
> * **Valence Electrons:** The electrons in the outermost shell. Valence electrons determine the chemical properties of an element since each atom likes to achieve an electronic configuration similar to the closest noble gas by losing, gaining, or sharing electrons

> [!IMPORTANT]
> ### 🧮 Orbitals and Filling Sequence
> * **Orbital:** A region within an atom where there is a high probability (usually $>95\%$) of finding an electron. Each orbital can hold up to $2$ electrons with opposite spins
> * **s orbital:** One spherical orbital per shell, present in all shells
> * **p orbitals:** Three dumbbell-shaped orbitals ($p_x, p_y, p_z$) orientated along perpendicular axes, present from $n \\\\ge 2$

${svgToken(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="100%">
  <defs>
    <linearGradient id="orbBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <linearGradient id="orbSGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="orbPPos" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="orbPNeg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
    <pattern id="orbGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.3"/>
    </pattern>
  </defs>

  <rect width="1000" height="360" fill="url(#orbBg)" stroke="#1e293b" stroke-width="2" rx="8" />
  <rect width="1000" height="360" fill="url(#orbGrid)" rx="8" />

  <text x="500" y="30" fill="#c7d2fe" font-size="14" font-weight="700" text-anchor="middle" font-family="system-ui, sans-serif">Shapes and Spatial Orientation of s and p Orbitals</text>

  <!-- 1. s ORBITAL -->
  <g>
    <line x1="200" y1="90" x2="200" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="100" y1="180" x2="300" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="130" y1="250" x2="270" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="200" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="308" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="276" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <circle cx="200" cy="180" r="55" fill="url(#orbSGrad)" opacity="0.85" />
    <text x="200" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">s Orbital</text>
    <text x="200" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Spherical &amp; Non-directional</text>
  </g>

  <!-- 2. px ORBITAL -->
  <g>
    <line x1="450" y1="90" x2="450" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="350" y1="180" x2="550" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="380" y1="250" x2="520" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="450" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="558" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="526" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <g transform="rotate(-45, 450, 180)">
      <ellipse cx="415" cy="180" rx="38" ry="22" fill="url(#orbPPos)" opacity="0.85" />
      <ellipse cx="485" cy="180" rx="38" ry="22" fill="url(#orbPNeg)" opacity="0.85" />
    </g>
    <text x="450" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">x</tspan> Orbital</text>
    <text x="450" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along x-axis</text>
  </g>

  <!-- 3. py ORBITAL -->
  <g>
    <line x1="700" y1="90" x2="700" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="600" y1="180" x2="800" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="630" y1="250" x2="770" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="700" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="808" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="776" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <ellipse cx="660" cy="180" rx="38" ry="22" fill="url(#orbPPos)" opacity="0.85" />
    <ellipse cx="740" cy="180" rx="38" ry="22" fill="url(#orbPNeg)" opacity="0.85" />
    <text x="700" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">y</tspan> Orbital</text>
    <text x="700" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along y-axis</text>
  </g>

  <!-- 4. pz ORBITAL -->
  <g>
    <line x1="900" y1="90" x2="900" y2="270" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="800" y1="180" x2="1000" y2="180" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <line x1="830" y1="250" x2="970" y2="110" stroke="#475569" stroke-width="1.5" opacity="0.5" stroke-dasharray="2 2" />
    <text x="900" y="82" fill="#64748b" font-size="10" font-family="system-ui, sans-serif" text-anchor="middle">z</text>
    <text x="1008" y="184" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">y</text>
    <text x="976" y="108" fill="#64748b" font-size="10" font-family="system-ui, sans-serif">x</text>
    <ellipse cx="900" cy="140" rx="22" ry="38" fill="url(#orbPPos)" opacity="0.85" />
    <ellipse cx="900" cy="220" rx="22" ry="38" fill="url(#orbPNeg)" opacity="0.85" />
    <text x="900" y="295" fill="#c7d2fe" font-size="13" font-weight="700" font-family="system-ui, sans-serif" text-anchor="middle">p<tspan dy="3" font-size="9">z</tspan> Orbital</text>
    <text x="900" y="315" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Lobe alignment along z-axis</text>
  </g>
</svg>`)}

> * **Energy Sequence:** Electrons fill orbitals in order of increasing energy:
>   $$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6 5s^2 4d^{10} 5p^6 6s^2 4f^{14} 5d^{10} 6p^6 7s^2 5f^{14} 6d^{10} 7p^6 8s^2$$
> * **Model Development:** The electronic structure model has been developed from:
>    * Successive ionization energies of an element, which provide evidence for the existence of quantum shells and the group to which the element belongs
>    * First ionization energy of successive elements, which provides evidence for electron sub-shells

> [!TIP]
> ### 🧪 Rules for Filling Orbitals
> * **Aufbau Principle:** Electrons fill orbitals of lowest energy first (e.g., $1s$ before $2s$, $2s$ before $2p$)
> * **Pauli Exclusion Principle:** An atomic orbital can hold a maximum of two electrons, and these two electrons must have opposite spins
> * **Hund's Rule:** For degenerate orbitals (orbitals of the same energy, like the three $2p$ orbitals), electrons will fill them singly with parallel spins before pairing up to minimize electron-electron repulsion

> [!WARNING]
> ### ⚠️ Anomalous Electronic Configurations
> Transition metals fill orbitals starting from lower to higher energy. However, Chromium ($Z = 24$) and Copper ($Z = 29$) have anomalous configurations because half-filled or completely filled $d$-subshells are exceptionally stable:
> * **Chromium ($^{52}\\_{ 24}\\text{Cr}$):** Expected [Ar] $4s^2 3d^4$ → actual configuration is [Ar] $4s^1 3d^5$
> * **Copper ($^{63}\\_{ 29}\\text{Cu}$):** Expected [Ar] $4s^2 3d^9$ → actual configuration is [Ar] $4s^1 3d^{10}$
> 
> *Note:* When transition metals form ions, they always lose the $4s$ electrons before the $3d$ electrons.

> [!BOX]
> ### 📋 Periodic Table Blocks and Structure
> * **Blocks:** The Periodic Table is divided into $s$, $p$, $d$, and $f$ blocks depending on which subshell contains the outer valence electrons
> * **Period Number:** Indicates the number of quantum energy shells containing electrons
> * **Group Number:** Indicates the number of electrons in the outer shell (valence electrons)
> * **Shielding Effect:** The repulsion between filled inner (core) shells and the furthest (outer) valence electrons, which reduces the nuclear attraction felt by the outer electrons

> [!NOTE]
> ### 📏 Factors Determining Atomic Radius
> Three key factors determine atomic radius (in order of priority):
> 
> 1. **Outer Shell Number (Quantum Shells):** As the number of quantum shells increases, the shielding shells increase, which increases the atomic radius:
>    * e.g. $^{23}\\_{ 11}\\text{Na}$ (2,8,1) > $^{7}\\_{ 3}\\text{Li}$ (2,1)
> 2. **Nuclear Charge (Proton Number):** For species with the same shielding, as the nuclear charge increases, the electrostatic attraction between the nucleus and the valence electrons becomes stronger, decreasing the atomic radius:
>    * e.g. $^{23}\\_{ 11}\\text{Na} > {}^{24}\\_{ 12}\\text{Mg}$
> 3. **Electron Number (Repulsion):** For species with the same nuclear charge (isotopes or ions), as the number of electrons increases, the electron-electron repulsion increases, which increases the volume (radius):
>    * e.g. $^{35.5}\\_{ 17}\\text{Cl}^- > {}^{35.5}\\_{ 17}\\text{Cl}$

> [!IMPORTANT]
> ### ⚖️ Definitions and Radius Trends
> * **Bond Length:** The average distance between the nuclei of two covalently bonded atoms
> * **Atomic Radius:** Half the distance between two nuclei of two similar atoms in a diatomic molecule
> * **Attraction Strength:** As the atomic radius decreases, the attraction forces between the nucleus and electrons increase
> * **Periodic Trend (Across a Period):** Atomic radius decreases across a period because the nuclear charge increases (more protons) while electron shielding remains constant
> * **Group Trend (Down a Group):** Atomic radius increases down a group because the number of quantum shells increases

> [!BOX]
> ### 📋 Ionic Radius Trends
> * **Positive Ions (Cations):** Cations are smaller than their parent atoms because they have fewer shells or have the same number of protons but fewer shielding electrons:
>   * e.g. $^{23}\\_{ 11}\\text{Na}$ (2,8,1) > $^{23}\\_{ 11}\\text{Na}^+$ (2,8)
> * **Cations with Higher Charge:** A cation with a higher charge is smaller than one with a lower charge because it has the same proton number, same shielding, but less electron repulsion:
>   * e.g. $^{56}\\_{ 26}\\text{Fe}^{2+} > {}^{56}\\_{ 26}\\text{Fe}^{3+}$
> * **Negative Ions (Anions):** Anions are larger than their parent atoms because they have the same proton number but increased electron repulsion:
>   * e.g. $^{35.5}\\_{ 17}\\text{Cl}^- > {}^{35.5}\\_{ 17}\\text{Cl}$
> * **Isoelectronic Ions:** Ions that have the same number of electrons (same electronic configuration):
>   * e.g. $\\text{Na}^+$, $\\text{F}^-$, $\\text{Mg}^{2+}$, $\\text{O}^{2-}$
>   * For these ions, radius decreases as nuclear charge (proton number) increases: $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+}$
> 
> ---

> [!EXAMPLE]
> #### 📝 Worked Example 1: Electronic Configuration of Chromium
> **Question:** Write the full electronic configuration of a Chromium atom ($^{52}\\_{ 24}\\text{Cr}$) and explain why it is anomalous
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the number of electrons:**
> >    * Chromium has an atomic number of $24$, meaning a neutral atom has $24$ electrons
> > 2. **Apply the Aufbau principle and identify the anomaly:**
> >    * Following regular filling, the expected configuration is $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$
> >    * However, having a half-filled $d$-subshell ($3d^5$) is more stable than a partially filled $3d^4$ subshell
> > 3. **Write the actual configuration:**
> >    * One electron from $4s$ is promoted to $3d$ to achieve two half-filled subshells:
> >      * Cr = $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparing Ionic Radii of Isoelectronic Species
> **Question:** Arrange the following isoelectronic species in order of decreasing radius: $\\text{O}^{2-}$, $\\text{F}^-$, $\\text{Na}^+$, $\\text{Mg}^{2+}$ and justify your arrangement
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Count the number of electrons and protons for each ion:**
> >    * All four ions have $10$ electrons (isoelectronic)
> >    * $\\text{O}^{2-}$ has $8$ protons
> >    * $\\text{F}^-$ has $9$ protons
> >    * $\\text{Na}^+$ has $11$ protons
> >    * $\\text{Mg}^{2+}$ has $12$ protons
> > 2. **Analyze the nuclear charge effect:**
> >    * As proton number increases, nuclear charge increases while shielding remains the same (all have $10$ core/valence electrons in $1s^2 2s^2 2p^6$)
> >    * A stronger nuclear charge pulls the electrons closer, decreasing the radius
> > 3. **Order by decreasing radius (largest to smallest):**
> >    * $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+ > \\text{Mg}^{2+}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Unpaired Electrons in Transition Metal Ions
> **Question:** Identify which of the following transition metal ions contains the greatest number of unpaired electrons in its ground state: $\\text{Cr}^{3+}$, $\\text{Fe}^{2+}$, $\\text{Fe}^{3+}$, or $\\text{Ni}^{2+}$ (Atomic numbers: $\\text{Cr} = 24$, $\\text{Fe} = 26$, $\\text{Ni} = 28$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configuration of the neutral atoms:**
> >    * $\\text{Cr} = [\\text{Ar}] 4s^1 3d^5$ (anomalous stability)
> >    * $\\text{Fe} = [\\text{Ar}] 4s^2 3d^6$
> >    * $\\text{Ni} = [\\text{Ar}] 4s^2 3d^8$
> > 2. **Remove electrons to form the cations (losing $4s$ electrons first):**
> >    * $\\text{Cr}^{3+}$: Lose one $4s$ and two $3d$ electrons $\\implies [\\text{Ar}] 3d^3$
> >    * $\\text{Fe}^{2+}$: Lose two $4s$ electrons $\\implies [\\text{Ar}] 3d^6$
> >    * $\\text{Fe}^{3+}$: Lose two $4s$ and one $3d$ electron $\\implies [\\text{Ar}] 3d^5$
> >    * $\\text{Ni}^{2+}$: Lose two $4s$ electrons $\\implies [\\text{Ar}] 3d^8$
> > 3. **Apply Hund's rule to find the number of unpaired electrons in the $3d$ subshell:**
> >    * $3d^3$: 3 unpaired electrons (singly occupied orbitals)
> >    * $3d^6$: 4 unpaired electrons (1 pair, 4 singly occupied orbitals)
> >    * $3d^5$: 5 unpaired electrons (5 singly occupied orbitals)
> >    * $3d^8$: 2 unpaired electrons (3 pairs, 2 singly occupied orbitals)
> >    * Therefore, the ion with the greatest number of unpaired electrons is $\\text{Fe}^{3+}$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Electronic Configuration of Copper(II) Ion
> **Question:** Deduce the correct electronic configuration of the $\\text{Cu}^{2+}$ ion in its ground state (Atomic number: $\\text{Cu} = 29$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configuration of a neutral Copper atom:**
> >    * A neutral Copper atom has 29 electrons. Due to the extra stability of a fully-filled $3d$ subshell, its configuration is:
> >      $$\\text{Cu} = 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$$
> > 2. **Apply the rule for transition metal ion formation:**
> >    * When transition metals form ions, electrons are always lost from the $4s$ subshell before the $3d$ subshell
> > 3. **Remove two electrons to form the $2+$ ion:**
> >    * We remove the single electron from the $4s$ orbital and one electron from the $3d$ orbitals:
> >      $$\\text{Cu}^{2+} = 1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Occupied Orbitals in a Sulfur Atom
> **Question:** Determine how many orbitals contain at least one electron in a ground-state Sulfur atom, $\\text{S}$ (Atomic number $Z = 16$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the full electronic configuration of Sulfur:**
> >    * Sulfur has 16 electrons:
> >      $$\\text{S} = 1s^2 2s^2 2p^6 3s^2 3p^4$$
> > 2. **Break down the orbitals in each subshell:**
> >    * The $1s$ subshell has 1 orbital containing 2 electrons
> >    * The $2s$ subshell has 1 orbital containing 2 electrons
> >    * The $2p$ subshell has 3 orbitals containing 6 electrons
> >    * The $3s$ subshell has 1 orbital containing 2 electrons
> > 3. **Apply Hund's rule to the $3p$ subshell:**
> >    * The $3p$ subshell contains 4 electrons distributed across 3 orbitals
> >    * According to Hund's rule, electrons fill degenerate orbitals singly first before pairing:
> >      * 1 orbital contains a pair of electrons
> >      * 2 orbitals each contain a single unpaired electron
> >      * Thus, all 3 orbitals in the $3p$ subshell contain at least one electron
> > 4. **Calculate the total number of occupied orbitals:**
> >    * Total occupied orbitals = $1 \\text{ (from } 1s) + 1 \\text{ (from } 2s) + 3 \\text{ (from } 2p) + 1 \\text{ (from } 3s) + 3 \\text{ (from } 3p)$
> >    * This gives a total of 9 occupied orbitals

> [!EXAMPLE]
> #### 📝 Worked Example 6: Explaining the Trend in Atomic Radius Across Period 3
> **Question:** Describe and explain the trend in atomic radius for the elements across Period 3 from Sodium (Na) to Argon (Ar)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the general trend across the period:**
> >    * Atomic radius decreases across Period 3 from Sodium to Argon
> > 
> > 2. **Explain the effect of nuclear charge:**
> >    * Across Period 3, the number of protons in the nucleus increases (nuclear charge increases from $+11$ in Na to $+18$ in Ar)
> > 
> > 3. **Explain the shielding effect:**
> >    * The outer-shell valence electrons are added to the same principal quantum shell ($n=3$), which means the shielding effect remains approximately constant across the period
> > 
> > 4. **Combine these factors to explain the final attraction:**
> >    * Because the nuclear charge increases while the shielding remains constant, the electrostatic attraction between the positive nucleus and the negative outer-shell electrons becomes stronger
> >    * This stronger pull draws the outer electrons closer to the nucleus, resulting in a smaller atomic radius
 
> [!EXAMPLE]
> #### 📝 Worked Example 7: Deducing Electronic Configuration from Period and Group
> **Question:** An element is located in Period 4 and Group 15 of the Periodic Table. Identify the block of this element and write its condensed (noble gas) electronic configuration
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the block of the element:**
> >    * Elements in Groups 13–18 have their outermost valence electrons in the $p$ sublevel
> >    * Therefore, this element belongs to the **p-block**
> > 
> > 2. **Identify the element and the nearest preceding noble gas:**
> >    * The element in Period 4, Group 15 is Arsenic (As, Atomic number $Z = 33$)
> >    * The nearest preceding noble gas is Argon ([Ar] with 18 electrons)
> > 
> > 3. **Distribute the remaining electrons:**
> >    * The remaining $15$ electrons ($33 - 18 = 15$) are filled into the $4s$, $3d$, and $4p$ subshells:
> >      * $4s$ is filled first: $4s^2$ (2 electrons)
> >      * $3d$ is filled next: $3d^{10}$ (10 electrons)
> >      * The remaining electrons fill the $4p$ subshell: $4p^3$ (3 electrons)
> > 
> > 4. **Write the condensed configuration:**
> >    * As = **[Ar] $4s^2 3d^{10} 4p^3$** (or **[Ar] $3d^{10} 4s^2 4p^3$**)
`,
    keyPoints: [
      'An orbital is a probability density map holding at most two paired electrons.',
      '4s is filled before 3d because it is at a lower energy level in neutral atoms.',
      '4s is lost before 3d when transition metal cations are formed.'
    ]
  },
  {
    id: 'ionization-energies-20260106',
    title: 'Ionization Energies & Periodic Trends',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚡ Evidence for Electronic Structure
> The modern model of the atom and its electronic structure was developed based on key experimental evidence:
> 
> 1. **Successive Ionization Energies:** The energy patterns when removing electrons one by one from an element provide direct evidence for the existence of quantum shells (energy levels) and the specific group to which the element belongs
> 2. **First Ionization Energies of Successive Elements:** The trends across periods and groups provide direct evidence for the existence of electron sub-shells ($s$, $p$, $d$, and $f$ orbitals)

> [!IMPORTANT]
> ### 🧮 What is Ionization Energy?
> **Ionization Energy ($I.E.$):** The amount of energy required (an endothermic process, $\\\\Delta H > 0$) to completely remove the most loosely bound (outermost) electron from each gaseous atom/ion in one mole to form one mole of positive gaseous ions.
> 
> * **First Ionization Energy ($I_1$):** Energy required to remove one electron from each atom in one mole of gaseous atoms to form one mole of gaseous $1+$ ions:
>   $$\\\\text{Cl(g)} \\\\rightarrow \\\\text{Cl}^+\\\\text{(g)} + e^-$$
> * **Second Ionization Energy ($I_2$):** Energy required to remove one electron from each $1+$ ion in one mole of gaseous ions to form one mole of gaseous $2+$ ions:
>   $$\\\\text{Br}^+\\\\text{(g)} \\\\rightarrow \\\\text{Br}^{2+}\\\\text{(g)} + e^-$$
> * **Third Ionization Energy ($I_3$):** Energy required to remove one electron from each $2+$ ion in one mole of gaseous ions to form one mole of gaseous $3+$ ions:
>   $$\\\\text{K}^{2+}\\\\text{(g)} \\\\rightarrow \\\\text{K}^{3+}\\\\text{(g)} + e^-$$

> [!TIP]
> ### 🧪 Rules for Ionizing Atoms
> When writing configurations or determining which electron is lost:
> 
> 1. **Representative Elements ($s$ and $p$ blocks):** Start removing electrons from the last occupied orbital (the highest energy level)
> 2. **Transition Metals ($d$ block):** **Always** remove electrons from the outer $4s$ orbital first, and only then from the $3d$ orbitals

> [!NOTE]
> ### 📈 Successive Ionization Energy Patterns
> * **Gradual/Steady Rise:** Successive ionization energies of an element always increase gradually because the remaining electrons are pulled closer by a constant nuclear charge (more protons than electrons, resulting in a smaller ionic radius and increased electrostatic attraction)
> * **Quantum Shell Jumps:** A massive, sharp jump in ionization energy occurs when an electron is removed from a lower principal quantum shell ($n-1$), which is much closer to the nucleus and experiences far less shielding
> * **Logarithmic Scale:** Because successive ionization energies span an extremely large range of values, they are managed and plotted using a logarithmic scale (e.g. $\\\\log_{10} I.E.$)

> [!BOX]
> ### 📋 Electronegativity
> * **Definition:** The relative ability of an atom in a covalent bond to attract the shared pair of electrons towards itself
> * **Periodic Trends:** Electronegativity increases across a period (due to increasing nuclear charge and decreasing atomic size) and increases going up a group (due to less shielding and smaller atomic size)
> * **Highest Electronegativity Order:** $\\\\text{F} > \\\\text{O} > \\\\text{Cl} > \\\\text{N} > \\\\text{Br} > \\\\text{I}$

---

> [!NOTE]
> ### 📈 Periodic Trends in First Ionization Energy
> 1. **Down a Group (Decreases):**
>    * The atomic radius increases as the number of quantum shells increases
>    * Shielding from inner shells increases significantly
>    * The outer electron is further from the nucleus, weakening the electrostatic attraction forces and making it easier to remove
> 2. **Across a Period (Increases):**
>    * The nuclear charge increases (more protons in the nucleus)
>    * The atomic radius decreases (electrons are pulled closer)
>    * Shielding remains relatively constant because electrons are added to the same outer quantum shell
>    * Consequently, the electrostatic attraction between the nucleus and outer electrons increases, requiring more energy to remove an electron

> [!WARNING]
> ### ⚠️ Key Anomalies in First Ionization Energy
> While first ionization energy generally increases across a period, there are two distinct dips (anomalies) that provide evidence for sub-shells and orbital filling:
> 
> 1. **Group 2 vs Group 3 Dip (e.g. Be vs B, and Mg vs Al):**
>    * **Boron ($1s^2 2s^2 2p^1$)** has a lower first ionization energy than **Beryllium ($1s^2 2s^2$)**
>    * **Reason:** The outer electron of Boron is in a $2p$ sub-shell, which is higher in energy and experiences additional shielding from the filled $2s^2$ sub-shell, making it easier to remove than Beryllium's $2s$ electron
>    * This also applies to **Magnesium** ($3s^2$) and **Aluminium** ($3s^2 3p^1$) in Period 3
> 2. **Group 5 vs Group 6 Dip (e.g. N vs O, and P vs S):**
>    * **Oxygen ($1s^2 2s^2 2p^4$)** has a lower first ionization energy than **Nitrogen ($1s^2 2s^2 2p^3$)**
>    * **Reason:** Nitrogen has a stable half-filled $2p$ sub-shell with singly occupied orbitals ($2p_x^1 2p_y^1 2p_z^1$). In Oxygen, two electrons must pair up in a single $2p$ orbital ($2p_x^2 2p_y^1 2p_z^1$), generating **spin-pair repulsion** which makes the outer electron easier to remove
>    * This also applies to **Phosphorus** ($3p^3$) and **Sulfur** ($3p^4$) in Period 3

---

> [!IMPORTANT]
> ### 🧱 Physical Structure of Elements and Compounds
> The structure of elements and compounds determines their physical properties:
> 
> #### 1. Structure of Elements (Across Period 2 & 3):
> * **Giant Metallic Lattice:** Metals (Group I to III, e.g. $\\\\text{Li}$, $\\\\text{Be}$, $\\\\text{Na}$, $\\\\text{Mg}$, $\\\\text{Al}$) form giant structures held by metallic bonding (delocalized electrons)
> * **Giant Covalent Lattice:** Carbon (diamond/graphite), Silicon, and Boron (which forms a giant covalent lattice) form giant covalent structures with strong, directional covalent bonds throughout the lattice
> * **Simple Covalent Molecules:** Non-metals (Group V to VII, e.g. $\\\\text{P}_4$, $\\\\text{S}_8$, $\\\\text{Cl}_2$, $\\\\text{O}_2$, $\\\\text{N}_2$, $\\\\text{F}_2$) exist as individual molecules held together by weak intermolecular London forces
> * **Monoatomic Elements:** Noble gases (Group VIII/0, e.g. $\\\\text{He}$, $\\\\text{Ne}$, $\\\\text{Ar}$) exist as single, unbonded atoms held by extremely weak London forces
> 
> #### 2. Structure of Compounds:
> * **Ionic Bonding (Metal + Non-metal):** Formed when metals lose electrons and non-metals gain electrons to achieve stable octets (except Boron and Beryllium compounds, which tend to be covalent due to high charge density)
> * **Covalent Bonding (Non-metal + Non-metal/Semi-metal):** Formed by the sharing of valence electron pairs

> [!TIP]
> ### 🌡️ Melting and Boiling Point Trends
> Melting and boiling points depend on the type of structure and strength of bonding forces:
> 
> 1. **Across a Period (Period 2 & 3):**
>    * **Group I to III (Metals):** MP and BP increase because the number of delocalized electrons per atom increases and the ionic charge increases, resulting in stronger metallic bonding attraction
>    * **Group IV (C or Si):** Peaks dramatically (maximum MP/BP) because they form giant covalent lattices. Breaking the strong, extensive covalent bonds requires massive thermal energy
>    * **Group V to VIII (Non-metals & Noble gases):** MP and BP drop sharply because they have simple molecular (or monoatomic) structures. Melting only requires overcoming weak London forces, which need very little energy. Within simple molecules, the MP/BP depends on size: $\\\\text{S}_8 > \\\\text{P}_4 > \\\\text{Cl}_2 > \\\\text{Ar}$
> 2. **Down Non-metallic Groups (Increases):**
>    * The total number of electrons in the molecules increases, which increases the strength of temporary dipoles and thus the strength of London forces between molecules
> 3. **Down Metallic Groups (Decreases):**
>    * The atomic radius increases, placing the delocalized valence electrons further away from the positive metal nuclei, which weakens the metallic bond

---

> [!EXAMPLE]
> #### 📝 Worked Example 1: Interpreting Successive Ionization Energies
> **Question:** The successive ionization energies (in $\\\\text{kJ mol}^{-1}$) of a Period 3 element $\\\\text{Y}$ are: $I_1 = 789$, $I_2 = 1577$, $I_3 = 3232$, $I_4 = 4356$, $I_5 = 16091$, $I_6 = 19785$
> Identify element $\\\\text{Y}$ and justify your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze successive differences to find the largest jump:**
> >    * $I_1 \\\\rightarrow I_2$: approx. $2\\\\times$ increase
> >    * $I_2 \\\\rightarrow I_3$: approx. $2\\\\times$ increase
> >    * $I_3 \\\\rightarrow I_4$: approx. $1.35\\\\times$ increase
> >    * $I_4 \\\\rightarrow I_5$: huge jump ($4356 \\\\rightarrow 16091$), which is a nearly $4\\\\times$ increase
> > 2. **Determine the number of valence electrons:**
> >    * The sharp increase between $I_4$ and $I_5$ indicates that the fifth electron is removed from a shell closer to the nucleus (inner core shell)
> >    * Therefore, the element has 4 valence electrons, placing it in Group 14 (Group IV)
> > 3. **Identify the element:**
> >    * The Period 3 element in Group 14 is Silicon (Si)

> [!EXAMPLE]
> #### 📝 Worked Example 2: Explaining first ionization energy exceptions
> **Question:** Explain why the first ionization energy of Oxygen is lower than that of Nitrogen, despite Oxygen having a greater nuclear charge
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configurations:**
> >    * Nitrogen ($Z = 7$): $1s^2 2s^2 2p^3$ (or $1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$)
> >    * Oxygen ($Z = 8$): $1s^2 2s^2 2p^4$ (or $1s^2 2s^2 2p_x^2 2p_y^1 2p_z^1$)
> > 2. **Compare orbital occupancy:**
> >    * Nitrogen has a stable, half-filled $2p$ sub-shell where each of the three $2p$ orbitals contains a single unpaired electron
> >    * Oxygen has four electrons in the $2p$ sub-shell, meaning one of the $2p$ orbitals must contain a pair of electrons
> > 3. **Analyze electron-electron interaction:**
> >    * The paired electrons in the same $2p$ orbital in Oxygen experience spin-pair repulsion
> >    * This repulsion makes it easier to remove one of these paired electrons from Oxygen than an unpaired electron from Nitrogen

> [!EXAMPLE]
> #### 📝 Worked Example 3: Melting Point Trends of Period 3 Elements
> **Question:** Explain the difference in melting points between Silicon ($1687\\\\text{ K}$) and Phosphorus ($317\\\\text{ K}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the structure and bonding of Silicon:**
> >    * Silicon has a giant covalent lattice structure
> >    * Each Silicon atom is covalently bonded to four other Silicon atoms in a tetrahedral arrangement
> >    * Melting Silicon requires breaking many strong, directional covalent bonds throughout the entire structure, which requires a large amount of energy
> > 2. **Identify the structure and bonding of Phosphorus:**
> >    * Phosphorus exists as simple molecular $\\\\text{P}_4$ molecules
> >    * In the solid state, these molecules are held together only by weak intermolecular London forces (instantaneous dipole-induced dipole attractions)
> >    * Melting Phosphorus only requires overcoming these weak London forces between molecules, leaving the strong covalent bonds within the $\\\\text{P}_4$ molecules intact
> > 3. **Conclude the comparison:**
> >    * Much less thermal energy is required to overcome the weak London forces in Phosphorus than to break the strong covalent bonds in Silicon, explaining why Silicon has a significantly higher melting point

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying periodic table block from ion electronic structure
> **Question:** A stable ion $W^{3+}$ contains 18 electrons. Determine the block in the periodic table where element $W$ is located.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find the number of electrons in the neutral atom:**
> >    * The ion has a $3+$ charge, which means the neutral atom has lost 3 electrons
> >    * Number of electrons in neutral atom $W = 18 + 3 = 21$
> > 2. **Identify the atomic number and element:**
> >    * Since atomic number is the number of protons (equal to electrons in a neutral atom), $Z = 21$
> >    * Element 21 is Scandium (Sc)
> > 3. **Determine the block based on electronic configuration:**
> >    * The electronic configuration of Scandium is $[\\\\text{Ar}] 4s^2 3d^1$
> >    * Since the highest energy subshell being filled is the $3d$ subshell, element $W$ belongs to the **d-block**

> [!EXAMPLE]
> #### 📝 Worked Example 5: Melting Point Difference of Group 4 Elements (Carbon vs Silicon)
> **Question:** Both carbon (diamond) and silicon form giant covalent lattices in Group 14 (Group IV). However, the melting temperature of carbon ($3550^\\circ\\text{C}$) is significantly higher than that of silicon ($1414^\\circ\\text{C}$). What is the primary reason for this difference?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare atomic sizes of Carbon and Silicon:**
> >    * Carbon is in Period 2 and has a smaller atomic radius than Silicon, which is in Period 3
> > 
> > 2. **Analyze the effect on covalent bond strength:**
> >    * Because the Carbon atoms are smaller, the shared electron pairs in the $\text{C-C}$ bond are closer to the nuclei, resulting in stronger electrostatic attraction forces
> >    * Therefore, $\text{C-C}$ covalent bonds are shorter and significantly stronger than $\text{Si-Si}$ covalent bonds
> > 
> > 3. **Relate bond strength to melting point:**
> >    * Since the giant covalent lattice of diamond is held together by these stronger and shorter $\text{C-C}$ bonds, much more thermal energy is required to break them compared to the weaker $\text{Si-Si}$ bonds in silicon, leading to a much higher melting point

> [!EXAMPLE]
> #### 📝 Worked Example 6: Writing Successive Ionization Energy Equations
> **Question:** Write the chemical equation, including state symbols, representing the second ionization energy of Magnesium (Mg)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Understand the definition of Second Ionization Energy:**
> >    * It is the energy required to remove one electron from each $1+$ ion in one mole of gaseous ions to form one mole of gaseous $2+$ ions
> > 
> > 2. **Identify reactants and products:**
> >    * Reactant: Gaseous Magnesium cation, $\text{Mg}^+\text{(g)}$
> >    * Products: Gaseous Magnesium $2+$ cation, $\text{Mg}^{2+}\text{(g)}$, and the removed electron, $e^-$
> > 
> > 3. **Write the balanced chemical equation:**
> >    $$\\\\text{Mg}^+\\\\text{(g)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(g)} + e^-$$
> >    * *Warning:* Writing $\\\\text{Mg(g)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(g)} + 2e^-$ is incorrect as this represents the sum of the first and second ionization energies

> [!EXAMPLE]
> #### 📝 Worked Example 7: Explaining Ionization Energy Dip between Group 2 and Group 13
> **Question:** Explain why the first ionization energy of Aluminium (Al, $I_1 = 578\\\\text{ kJ mol}^{-1}$) is lower than that of Magnesium (Mg, $I_1 = 738\\\\text{ kJ mol}^{-1}$), despite Aluminium having a greater nuclear charge
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the electronic configurations of both elements:**
> >    * Magnesium ($Z = 12$): $1s^2 2s^2 2p^6 3s^2$
> >    * Aluminium ($Z = 13$): $1s^2 2s^2 2p^6 3s^2 3p^1$
> > 
> > 2. **Compare the orbitals of the outer-shell electrons being removed:**
> >    * For Magnesium, the outermost electron is removed from the $3s$ subshell
> >    * For Aluminium, the outermost electron is removed from the $3p$ subshell
> > 
> > 3. **Analyze energy level and shielding differences:**
> >    * The $3p$ subshell is at a higher energy level than the $3s$ subshell, meaning the electron is further from the nucleus
> >    * The $3p^1$ electron in Aluminium also experiences additional shielding from the inner filled $3s^2$ subshell
> > 
> > 4. **Conclude the comparison:**
> >    * Due to the higher energy level and increased shielding, the electrostatic attraction between the positive nucleus and the outer $3p$ electron is weaker in Aluminium, making it easier to remove than the outer $3s$ electron in Magnesium
`,
    keyPoints: [
      'First ionization energy equations must always include gaseous state symbols (g).',
      'Successive ionization energies always increase because the remaining electrons are pulled closer by a constant positive nuclear charge.',
      'Dips in ionization energy across a period provide evidence for subshells and orbital electron pairing repulsion.'
    ]
  }
];
