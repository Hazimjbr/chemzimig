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
        `,
        keyPoints: [
            'All ions in a TOF spectrometer are accelerated to have the same kinetic energy.',
            'Velocity is inversely proportional to the square root of isotopic mass; lighter ions reach the detector first.',
            'The abundance signal corresponds to the current generated as ions hit the detector.'
        ]
    },
    {
        id: 'electronic-configurations-20260106',
        title: 'Electronic Configurations',
        type: 'text',
        content: `
### 3. Orbitals & Electronic Configurations
Electrons occupy specific regions of space called **atomic orbitals** within subshells.

* **Principal Quantum Shells ($n$):** Main energy levels ($n = 1, 2, 3, 4$).
* **Subshells:** Shells are divided into $s, p, d,$ and $f$ subshells.
* **Atomic Orbital:** A region of space where there is a high probability (usually $>95\\%$) of finding an electron. Each orbital can hold a **maximum of 2 electrons** with opposite spins.

| Subshell | Number of Orbitals | Maximum Electrons | Orbital Shape |
| :---: | :---: | :---: | :---: |
| **s** | $1$ | $2$ | Spherical |
| **p** | $3$ | $6$ | Dumbbell-shaped ($p_x, p_y, p_z$) |
| **d** | $5$ | $10$ | Complex |

#### 📐 Rules for Filling Orbitals:
1. **Aufbau Principle:** Electrons fill orbitals in order of increasing energy (e.g., $1s$ then $2s$, $2p$, $3s$, $3p$, $4s$, $3d$).
2. **Hund's Rule:** Electrons occupy degenerate (equal energy) orbitals singly before pairing up, keeping spins parallel to minimize electron-electron repulsion.
3. **Pauli Exclusion Principle:** Two electrons in the same orbital must have opposite spins.

⚠️ **Exceptions (Transition Elements Chromium & Copper):**
* **Chromium ($Z = 24$):** $[\\text{Ar}] 4s^1 3d^5$ (not $4s^2 3d^4$) to achieve a more stable half-filled $d$-subshell.
* **Copper ($Z = 29$):** $[\\text{Ar}] 4s^1 3d^{10}$ (not $4s^2 3d^9$) to achieve a more stable fully-filled $d$-subshell.

---

> [!EXAMPLE]
> #### 📝 Worked Example: Electronic Configuration of Ions
> **Question:** > Write the full electronic configuration for:
> 1. $\\text{S}^{2-}$ ion ($Z = 16$).
> 2. $\\text{Fe}^{2+}$ ion ($Z = 26$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > > > 1. **For $\\text{S}^{2-}$ ion:**
> >    * Neutral sulfur atom: $1s^2 2s^2 2p^6 3s^2 3p^4$
> >    * Sulfur gained 2 electrons to form $\\text{S}^{2-}$:
> >      $$\\text{S}^{2-} = 1s^2 2s^2 2p^6 3s^2 3p^6\\text{ (Noble gas configuration of Ar)}$$
> > 
> > 2. **For $\\text{Fe}^{2+}$ ion:**
> >    * Neutral iron atom: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$
> >    * **Rule:** Transition metals lose electrons from the $4s$ orbital **before** the $3d$ orbital.
> >    * Remove 2 electrons from the $4s$ shell:
> >      $$\\text{Fe}^{2+} = 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6\\text{ (or } [\\text{Ar}] 3d^6\\text{)}$$
        `,
        keyPoints: [
            'An orbital is a probability density map holding at most two paired electrons.',
            '4s is filled before 3d because it is at a lower energy level in neutral atoms.',
            '4s is lost before 3d when transition metal cations are formed.'
        ]
    },
    {
        id: 'ionization-energies-20260106',
        title: 'Ionization Energies',
        type: 'text',
        content: `
### 4. Ionization Energies
* **First Ionization Energy ($I_1$):** The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous $1+$ ions.
  $$\\text{X(g)} \\rightarrow \\text{X}^+\\text{(g)} + e^-$$
* **Second Ionization Energy ($I_2$):** The energy required to remove one mole of electrons from one mole of gaseous $1+$ ions to form one mole of gaseous $2+$ ions.
  $$\\text{X}^+\\text{(g)} \\rightarrow \\text{X}^{2+}\\text{(g)} + e^-$$

#### 📈 Periodic Trends in First Ionization Energy:
* **Down a Group:** Decreases. Nuclear charge increases, but atomic radius and electron shielding increase significantly. Outer electron is further from the nucleus and less strongly attracted.
* **Across a Period:** Generally increases. Nuclear charge increases, shielding remains constant, atomic radius decreases. Outer electron is more strongly attracted.

#### 🔍 Discontinuities (Evidence for Subshells in Period 3):
1. **Dip between Mg ($1s^2 2s^2 2p^6 3s^2$) and Al ($1s^2 2s^2 2p^6 3s^2 3p^1$):**
   * The outer electron in Al is in a $3p$ orbital, which is higher in energy and further from the nucleus than Mg's $3s$ orbital. It also experiences extra shielding from the $3s$ subshell, making it easier to remove.
2. **Dip between P ($[\\text{Ne}] 3s^2 3p^3$) and S ($[\\text{Ne}] 3s^2 3p^4$):**
   * P has three unpaired electrons in degenerate $3p$ orbitals ($3p_x^1 3p_y^1 3p_z^1$). S has one paired set of electrons in a $3p$ orbital ($3p_x^2 3p_y^1 3p_z^1$).
   * Mutual repulsion between the two paired electrons in the same orbital in sulfur makes the electron easier to remove.

---

> [!EXAMPLE]
> #### 📝 Worked Example: Interpreting Successive Ionization Energies
> **Question:** > The successive ionization energies (in $\\text{kJ mol}^{-1}$) of an element $\\text{Y}$ in Period 3 are:
> $I_1 = 789$, $I_2 = 1577$, $I_3 = 3232$, $I_4 = 4356$, $I_5 = 16091$, $I_6 = 19785$.  
> Identify element $\\text{Y}$ and justify your answer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > > > 1. **Look for the largest jump:**
> >    * $I_1 \\rightarrow I_2$: approx. $2\\times$ increase.
> >    * $I_2 \\rightarrow I_3$: approx. $2\\times$ increase.
> >    * $I_3 \\rightarrow I_4$: approx. $1.35\\times$ increase.
> >    * $I_4 \\rightarrow I_5$: huge increase ($4356 \\rightarrow 16091$), nearly $4\\times$ increase!
> > 2. **Interpret the jump:**
> >    * The large jump between $I_4$ and $I_5$ indicates that the 5th electron is removed from a shell closer to the nucleus (inner core shell).
> >    * This means element $\\text{Y}$ has **4 valence electrons** (Group 14).
> > 3. **Identify the element:**
> >    * Since $\\text{Y}$ is in Period 3 and Group 14, it must be **Silicon (Si)**.
        `,
        keyPoints: [
            'First ionization energy equations must always include gaseous state symbols (g).',
            'Successive ionization energies always increase because the remaining electrons are pulled closer by a constant positive nuclear charge.',
            'Dips in ionization energy across a period provide evidence for subshells and orbital electron pairing repulsion.'
        ]
    }
];
