import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Covalent Bonds";
export const lessonNumber = 4;

export const theoryMarkdown = `
## Covalent Bonds
This lesson covers the formation of covalent bonds, simple molecular structures, and giant covalent structures (macromolecules).
`;

const macromoleculesSvg = `
<svg viewBox="0 0 1000 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="carbonGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#475569" />
    </radialGradient>
    <radialGradient id="siliconGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#7c3aed" />
    </radialGradient>
    <radialGradient id="oxygenGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f87171" />
      <stop offset="100%" stop-color="#dc2626" />
    </radialGradient>
  </defs>

  <rect width="1000" height="380" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="2" rx="16" />

  <text x="200" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Diamond (Allotrope of Carbon)</text>
  <text x="500" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Graphite (Allotrope of Carbon)</text>
  <text x="800" y="40" fill="#38bdf8" font-size="14" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Silicon Dioxide (Quartz)</text>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="200" y1="190" x2="200" y2="120" />
    <line x1="200" y1="190" x2="140" y2="230" />
    <line x1="200" y1="190" x2="250" y2="230" />
    <line x1="200" y1="190" x2="230" y2="170" />
    <line x1="200" y1="120" x2="160" y2="80" />
    <line x1="200" y1="120" x2="240" y2="80" />
    <line x1="140" y1="230" x2="90" y2="220" />
    <line x1="140" y1="230" x2="150" y2="280" />
    <line x1="250" y1="230" x2="230" y2="280" />
    <line x1="250" y1="230" x2="300" y2="250" />
  </g>

  <circle cx="200" cy="190" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="200" cy="120" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="140" cy="230" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="250" cy="230" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="230" cy="170" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="160" cy="80" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="240" cy="80" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="90" cy="220" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="150" cy="280" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="230" cy="280" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="300" cy="250" r="12" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="200" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every Carbon atom bonded to 4 others</text>
  <text x="200" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">in a rigid 3D Tetrahedral lattice.</text>

  <g stroke="#475569" stroke-width="1.5" stroke-dasharray="3 3">
    <line x1="440" y1="120" x2="440" y2="210" />
    <line x1="490" y1="110" x2="490" y2="200" />
    <line x1="550" y1="120" x2="550" y2="210" />
    <line x1="500" y1="150" x2="500" y2="240" />
  </g>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="400" y1="140" x2="440" y2="120" />
    <line x1="440" y1="120" x2="490" y2="110" />
    <line x1="490" y1="110" x2="550" y2="120" />
    <line x1="550" y1="120" x2="500" y2="150" />
    <line x1="500" y1="150" x2="450" y2="160" />
    <line x1="450" y1="160" x2="400" y2="140" />
    <line x1="550" y1="120" x2="590" y2="110" />
    <line x1="590" y1="110" x2="630" y2="130" />
    <line x1="630" y1="130" x2="580" y2="150" />
    <line x1="580" y1="150" x2="500" y2="150" />
  </g>

  <g stroke="#94a3b8" stroke-width="2">
    <line x1="400" y1="230" x2="440" y2="210" />
    <line x1="440" y1="210" x2="490" y2="200" />
    <line x1="490" y1="200" x2="550" y2="210" />
    <line x1="550" y1="210" x2="500" y2="240" />
    <line x1="500" y1="240" x2="450" y2="250" />
    <line x1="450" y1="250" x2="400" y2="230" />
    <line x1="550" y1="210" x2="590" y2="200" />
    <line x1="590" y1="200" x2="630" y2="220" />
    <line x1="630" y1="220" x2="580" y2="240" />
    <line x1="580" y1="240" x2="500" y2="240" />
  </g>

  <circle cx="400" cy="140" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="440" cy="120" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="490" cy="110" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="550" cy="120" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="500" cy="150" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="450" cy="160" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="590" cy="110" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="630" cy="130" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="580" cy="150" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <circle cx="400" cy="230" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="440" cy="210" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="490" cy="200" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="550" cy="210" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="500" cy="240" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="450" cy="250" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="590" cy="200" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="630" cy="220" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="580" cy="240" r="8" fill="url(#carbonGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="500" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Carbon bonded to 3 others in flat layers.</text>
  <text x="500" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Weak forces and free electrons between layers.</text>

  <g stroke="#94a3b8" stroke-width="1.5">
    <line x1="800" y1="190" x2="800" y2="130" />
    <line x1="800" y1="190" x2="745" y2="225" />
    <line x1="800" y1="190" x2="845" y2="225" />
    <line x1="800" y1="190" x2="830" y2="175" />
    <line x1="800" y1="130" x2="770" y2="90" />
    <line x1="800" y1="130" x2="830" y2="90" />
    <line x1="745" y1="225" x2="700" y2="215" />
    <line x1="745" y1="225" x2="755" y2="270" />
    <line x1="845" y1="225" x2="830" y2="270" />
    <line x1="845" y1="225" x2="890" y2="245" />
  </g>

  <circle cx="800" cy="190" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="800" cy="130" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="745" cy="225" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="845" cy="225" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="175" r="7.5" fill="url(#oxygenGrad)" stroke="#0f172a" stroke-width="0.5" />

  <circle cx="770" cy="90" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="90" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="700" cy="215" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="755" cy="270" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="830" cy="270" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />
  <circle cx="890" cy="245" r="11" fill="url(#siliconGrad)" stroke="#0f172a" stroke-width="0.5" />

  <text x="800" y="330" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every Si (purple) bonded to 4 O (red).</text>
  <text x="800" y="348" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Every O bonded to 2 Si atoms.</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "covalent-bonding",
        title: "Covalent Bonding",
        type: "text",
        content: `
### 🤝 What is a Covalent Bond?

A **covalent bond** is formed when non-metal atoms share pairs of electrons to achieve stable, full outer shells.

> [!IMPORTANT]
> ### 🧮 Definition: Covalent Bond
> A **covalent bond** is the strong electrostatic attraction between the shared pair of electrons and the nuclei of the bonding atoms.

#### 📋 Single, Double and Triple Bonds:
* **Single Bond:** One shared pair of electrons (e.g. $H_2$, $Cl_2$, $H_2O$).
* **Double Bond:** Two shared pairs of electrons (e.g. $O_2$, $CO_2$).
* **Triple Bond:** Three shared pairs of electrons (e.g. $N_2$).
        `,
        keyPoints: [
            "Covalent bonds are formed by sharing electron pairs between non-metals.",
            "Bonding arises from the attraction between shared electrons and positive nuclei."
        ]
    },
    {
        id: "simple-molecular",
        title: "Simple Molecular Structures",
        type: "text",
        content: `
### 🧪 Simple Molecular Structures

Most covalent substances exist as **simple molecules** (like $H_2O$, $CO_2$, $CH_4$, $O_2$).

> [!NOTE]
> ### 📋 Key Properties:
> 1. **Low Melting & Boiling Points:**
>    * While the covalent bonds *inside* the molecules (intramolecular) are very strong, the forces *between* the molecules (**intermolecular forces**) are extremely weak.
>    * Very little thermal energy is needed to overcome these weak intermolecular forces to melt or boil the substance.
> 2. **Electrical Conductivity:**
>    * Poor conductors (insulators) in all states.
>    * There are no free-moving (delocalised) electrons or ions to carry electrical charge.
> 3. **Solubility:**
>    * Usually insoluble in polar water (unless they can form hydrogen bonds), but soluble in non-polar organic solvents.
        `,
        keyPoints: [
            "Simple molecules have low melting points due to weak intermolecular forces.",
            "They do not conduct electricity because they have no free charge carriers."
        ]
    },
    {
        id: "giant-covalent",
        title: "Giant Covalent Structures",
        type: "text",
        content: `
### 💎 Giant Covalent Structures (Macromolecules)

Some substances form giant three-dimensional networks of atoms joined by strong covalent bonds. These are called **macromolecules**.

> [!BOX]
> ### 📋 Allotropes of Carbon & Quartz
> * **Diamond:**
>   * Carbon atoms form 4 covalent bonds in a rigid tetrahedral structure.
>   * Extremely hard, high melting point, non-conductor of electricity.
> * **Graphite:**
>   * Carbon atoms form 3 covalent bonds in flat hexagonal layers.
>   * Soft and slippery (layers slide over each other due to weak forces).
>   * Conducts electricity because every carbon has 1 free, delocalised electron.
> * **Silicon Dioxide ($SiO_2$ / Quartz):**
>   * Each silicon atom bonds to 4 oxygen atoms, and each oxygen bonds to 2 silicon atoms.
>   * Strong, high melting point, non-conductor (similar properties to diamond).

\${svgToken(macromoleculesSvg)}
        `,
        keyPoints: [
            "Giant covalent structures have high melting points because strong covalent bonds must be broken.",
            "Graphite conducts electricity due to delocalised electrons; Diamond and Quartz do not."
        ]
    }
];
