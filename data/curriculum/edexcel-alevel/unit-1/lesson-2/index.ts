import { LessonPart } from '../../../registry';

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
### 1. Subatomic Particles & Isotopes
Atoms are composed of three primary subatomic particles: **protons**, **neutrons**, and **electrons**.

| Particle | Relative Mass | Relative Charge | Position |
| :--- | :---: | :---: | :--- |
| Proton ($p$) | $1$ | $+1$ | Nucleus |
| Neutron ($n$) | $1$ | $0$ | Nucleus |
| Electron ($e$) | $\\frac{1}{1840}$ | $-1$ | Orbitals / Shells |

* **Atomic Number ($Z$):** The number of protons in the nucleus of an atom. This defines the identity of the element.
* **Mass Number ($A$):** The total number of protons and neutrons in the nucleus of an atom.
* **Isotopes:** Atoms of the same element with the same number of protons (atomic number) but a different number of neutrons (mass number).

#### 🧪 Chemical vs. Physical Properties of Isotopes:
* **Chemical Properties:** Isotopes have the **same** chemical properties because they have the same number of electrons and the same electronic configuration. Chemical reactions depend on outer-shell electrons.
* **Physical Properties:** Isotopes have **different** physical properties (e.g., density, melting point, boiling point, rate of diffusion) because they have different masses due to the different number of neutrons.

---

#### 📝 Worked Example 1: Particles in Atoms and Ions
**Question:** Determine the number of protons, neutrons, and electrons in:
1. A neutral atom of Calcium-40 ($^{40}_{20}\\text{Ca}$).
2. A Calcium ion ($^{40}_{20}\\text{Ca}^{2+}$).

**Step-by-step Solution:**
1. **For neutral $^{40}_{20}\\text{Ca}$:**
   * Protons ($Z$) = $20$
   * Neutrons = $A - Z = 40 - 20 = 20$
   * Electrons = Protons (since it is neutral) = $20$

2. **For $^{40}_{20}\\text{Ca}^{2+}$ ion:**
   * Protons ($Z$) = $20$ (unchanged in chemical ions)
   * Neutrons = $A - Z = 40 - 20 = 20$
   * Electrons = Protons $-$ Charge = $20 - 2 = 18$ (loss of 2 valence electrons)
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
### 2. Mass Spectrometry & Relative Atomic Mass
A **Time-of-Flight (TOF) Mass Spectrometer** is an analytical instrument used to determine the relative isotopic masses and relative abundances of isotopes in a sample.

#### ⚙️ The Stages of TOF Mass Spectrometry:
1. **Ionisation:** 
   * *Electrospray Ionisation:* solute dissolved in volatile solvent and injected through a charged needle at high voltage, gaining a proton ($M + \\text{H}^+ \\rightarrow MH^+$). Used for large organic molecules.
   * *Electron Impact Ionisation:* vaporised sample bombarded with high-energy electrons from an electron gun, knocking off one electron ($M \\rightarrow M^+ + e^-$). Used for elements and small molecules.
2. **Acceleration:** Ions are accelerated by an electric field to give all ions the **same kinetic energy** ($KE = \\frac{1}{2}mv^2$).
3. **Ion Drift / Flight Tube:** Ions enter a field-free drift tube. Because they have the same $KE$, lighter ions travel at higher velocities than heavier ions. Time of flight is proportional to the square root of mass ($t \\propto \\sqrt{m}$).
4. **Detection:** Ions reach a detector plate, where they gain electrons, generating an electrical current. The size of the current is proportional to the abundance of that specific ion.

---

> [!EXAMPLE]
> #### 📝 Worked Example: Calculating Relative Atomic Mass ($Ar$)
> **Question:** > A sample of neon consists of three isotopes: $^{20}\\text{Ne}$ (abundance $90.9\\%$), $^{21}\\text{Ne}$ (abundance $0.3\\%$), and $^{22}\\text{Ne}$ (abundance $8.8\\%$). Calculate the relative atomic mass ($Ar$) of this neon sample to 2 decimal places.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > > > 1. **Use the weighted average formula:**
> >    $$Ar = \\frac{\\sum (\\text{Isotopic Mass} \\times \\text{Percentage Abundance})}{100}$$
> > 2. **Substitute values:**
> >    $$Ar = \\frac{(20 \\times 90.9) + (21 \\times 0.3) + (22 \\times 8.8)}{100}$$
> >    $$Ar = \\frac{1818.0 + 6.3 + 193.6}{100} = \\frac{2017.9}{100} = 20.179$$
> > 3. **Round to 2 decimal places:**
> >    $$Ar = 20.18\\text{ (no units)}$$
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
