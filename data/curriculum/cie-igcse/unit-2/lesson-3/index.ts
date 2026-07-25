import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Ions and Ionic Bonds";
export const lessonNumber = 3;

export const theoryMarkdown = `
## Ions and Ionic Bonds
This lesson covers the formation of ions, ionic bonding, the giant ionic lattice, and properties of ionic compounds.
`;

const ionicLatticeStableSvg = `
<svg viewBox="0 0 450 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="sodiumGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="chlorideGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </radialGradient>
  </defs>

  <rect width="450" height="250" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="12" />

  <text x="225" y="30" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Stable Giant Ionic Lattice (Alternating Charges)</text>

  <g stroke="#475569" stroke-width="1" stroke-dasharray="2 2">
    <line x1="100" y1="70" x2="350" y2="70" />
    <line x1="100" y1="115" x2="350" y2="115" />
    <line x1="100" y1="160" x2="350" y2="160" />
    <line x1="100" y1="205" x2="350" y2="205" />
    <line x1="100" y1="70" x2="100" y2="205" />
    <line x1="150" y1="70" x2="150" y2="205" />
    <line x1="200" y1="70" x2="200" y2="205" />
    <line x1="250" y1="70" x2="250" y2="205" />
    <line x1="300" y1="70" x2="300" y2="205" />
    <line x1="350" y1="70" x2="350" y2="205" />
  </g>

  <circle cx="100" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <g fill="#ffffff" font-size="8" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="100" y="73">-</text>
    <text x="150" y="73">+</text>
    <text x="200" y="73">-</text>
    <text x="250" y="73">+</text>
    <text x="300" y="73">-</text>
    <text x="350" y="73">+</text>
    <text x="100" y="118">+</text>
    <text x="150" y="118">-</text>
    <text x="200" y="118">+</text>
    <text x="250" y="118">-</text>
    <text x="300" y="118">+</text>
    <text x="350" y="118">-</text>
    <text x="100" y="163">-</text>
    <text x="150" y="163">+</text>
    <text x="200" y="163">-</text>
    <text x="250" y="163">+</text>
    <text x="300" y="163">-</text>
    <text x="350" y="163">+</text>
    <text x="100" y="208">+</text>
    <text x="150" y="208">-</text>
    <text x="200" y="208">+</text>
    <text x="250" y="208">-</text>
    <text x="300" y="208">+</text>
    <text x="350" y="208">-</text>
  </g>
</svg>
`;

const ionicLatticeCleavageSvg = `
<svg viewBox="0 0 450 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="sodiumGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="chlorideGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </radialGradient>
  </defs>

  <rect width="450" height="250" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="12" />

  <text x="225" y="30" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Applied Force Cleaves Crystal (Like Charges Repel)</text>

  <path d="M 60 70 L 110 70" stroke="#ef4444" stroke-width="4" fill="none" />
  <path d="M 110 65 L 120 70 L 110 75 Z" fill="#ef4444" />
  <text x="50" y="60" fill="#ef4444" font-size="10" font-weight="bold" font-family="system-ui, sans-serif">Force</text>

  <line x1="80" y1="137.5" x2="420" y2="137.5" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />

  <g stroke="#ef4444" stroke-width="1.5" fill="none">
    <path d="M 195 125 Q 200 137 205 125" />
    <path d="M 195 150 Q 200 138 205 150" />
    <path d="M 245 125 Q 250 137 255 125" />
    <path d="M 245 150 Q 250 138 255 150" />
    <path d="M 295 125 Q 300 137 305 125" />
    <path d="M 295 150 Q 300 138 295 150" />
  </g>

  <circle cx="150" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="70" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="400" cy="70" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="150" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="115" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="400" cy="115" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="160" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="160" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />

  <circle cx="100" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="150" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="200" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="250" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="300" cy="205" r="10" fill="url(#sodiumGrad)" stroke="#070f1e" stroke-width="0.5" />
  <circle cx="350" cy="205" r="16" fill="url(#chlorideGrad)" stroke="#070f1e" stroke-width="0.5" />

  <g fill="#ffffff" font-size="8" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="150" y="73">-</text>
    <text x="200" y="73">+</text>
    <text x="250" y="73">-</text>
    <text x="300" y="73">+</text>
    <text x="350" y="73">-</text>
    <text x="400" y="73">+</text>
    <text x="150" y="118">+</text>
    <text x="200" y="118">-</text>
    <text x="250" y="118">+</text>
    <text x="300" y="118">-</text>
    <text x="350" y="118">+</text>
    <text x="400" y="118">-</text>
    <text x="100" y="163">-</text>
    <text x="150" y="163">+</text>
    <text x="200" y="163">-</text>
    <text x="250" y="163">+</text>
    <text x="300" y="163">-</text>
    <text x="350" y="163">+</text>
    <text x="100" y="208">+</text>
    <text x="150" y="208">-</text>
    <text x="200" y="208">+</text>
    <text x="250" y="208">-</text>
    <text x="300" y="208">+</text>
    <text x="350" y="208">-</text>
  </g>
</svg>
`;

export const lessonParts: LessonPart[] = [
  {
    id: "ionic-formation",
    title: "Formation of Ions",
    type: "text",
    content: `
### ⚛️ How Ions are Formed

An **ion** is an electrically charged particle formed when an atom loses or gains electrons to achieve a stable, full outer shell of electrons (a noble gas configuration).

> [!NOTE]
> ### 📋 Cations vs. Anions
> * **Cation (Positive Ion):**
>   * Formed when a metal atom **loses** valence electrons.
>   * Since it has more protons than electrons, it carries a positive charge.
>   * *Example:* A sodium atom ($2.8.1$) loses 1 electron to form a sodium ion, $Na^+$ ($2.8$).
> * **Anion (Negative Ion):**
>   * Formed when a non-metal atom **gains** electrons.
>   * Since it has more electrons than protons, it carries a negative charge.
>   * *Example:* A chlorine atom ($2.8.7$) gains 1 electron to form a chloride ion, $Cl^-$ ($2.8.8$).
        `,
    keyPoints: [
      "Metals lose electrons to form positive cations.",
      "Non-metals gain electrons to form negative anions."
    ]
  },
  {
    id: "ionic-bonding-lattice",
    title: "The Ionic Bond & Lattice",
    type: "text",
    content: `
### ⚡ The Ionic Bond

> [!IMPORTANT]
> ### 🧮 Definition: Ionic Bonding
> **Ionic bonding** is the strong **electrostatic attraction** between oppositely charged ions (cations and anions) arranged in a giant 3D lattice structure.

#### 🏛️ The Giant Ionic Lattice
Ionic compounds do not exist as individual molecules. Instead, they form a **giant ionic lattice** where positive and negative ions are arranged in a regular, repeating three-dimensional grid.

\${svgToken(ionicLatticeStableSvg)}
        `,
    keyPoints: [
      "Ionic bonding is the electrostatic attraction between oppositely charged ions.",
      "Ionic compounds form a regular 3D giant lattice structure."
    ]
  },
  {
    id: "ionic-properties",
    title: "Properties of Ionic Compounds",
    type: "text",
    content: `
### 📋 Key Properties of Ionic Structures

The physical properties of ionic compounds are directly caused by the nature of the giant ionic lattice and the strong electrostatic forces holding it together.

> [!BOX]
> ### 🏛️ Physical Properties
> 1. **High Melting & Boiling Points:**
>    * The electrostatic attraction between oppositely charged ions is extremely strong.
>    * It requires a massive amount of thermal energy to break these forces throughout the giant lattice.
> 2. **Electrical Conductivity:**
>    * **Solid State:** Non-conductors (insulators), because the ions are locked in fixed positions in the lattice and cannot move.
>    * **Liquid (Molten/Aqueous):** Good conductors, because the lattice breaks down, freeing the ions to move and carry charge.
> 3. **Brittleness:**
>    * Ionic crystals are highly brittle and shatter when hit.
>    * Applying mechanical stress (a hammer blow) shifts layers of the lattice, aligning like charges next to each other ($+$ next to $+$, and $-$ next to $-$). The resulting strong electrostatic repulsion shatters the crystal apart.

\${svgToken(ionicLatticeCleavageSvg)}
        `,
    keyPoints: [
      "High melting points are due to strong electrostatic attractions.",
      "Ionic compounds conduct electricity only when molten or dissolved.",
      "Brittleness is caused by repulsion between like charges when layers slide."
    ]
  }
];
