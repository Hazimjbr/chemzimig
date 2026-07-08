import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Metallic Bonding";
export const lessonNumber = 5;

export const theoryMarkdown = `
## Metallic Bonding
This lesson covers the nature of metallic bonding, the giant metallic lattice, and the physical properties of metals.
`;

const metallicBondingSvg = `
<svg viewBox="0 0 600 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070f1e" />
      <stop offset="100%" stop-color="#0b1b35" />
    </linearGradient>
    <radialGradient id="cationGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </radialGradient>
    <radialGradient id="electronGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fdf089" />
      <stop offset="100%" stop-color="#ca8a04" />
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="600" height="250" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="1.5" rx="12" />

  <text x="300" y="30" fill="#f8fafc" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Giant Metallic Lattice: Positive Ions in a Sea of Delocalised Electrons</text>

  <g stroke="#070f1e" stroke-width="0.5">
    <circle cx="120" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="180" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="240" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="300" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="360" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="420" cy="80" r="16" fill="url(#cationGrad)" />
    <circle cx="480" cy="80" r="16" fill="url(#cationGrad)" />

    <circle cx="120" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="180" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="240" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="300" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="360" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="420" cy="135" r="16" fill="url(#cationGrad)" />
    <circle cx="480" cy="135" r="16" fill="url(#cationGrad)" />

    <circle cx="120" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="180" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="240" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="300" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="360" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="420" cy="190" r="16" fill="url(#cationGrad)" />
    <circle cx="480" cy="190" r="16" fill="url(#cationGrad)" />
  </g>

  <g fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">
    <text x="120" y="84">+</text>
    <text x="180" y="84">+</text>
    <text x="240" y="84">+</text>
    <text x="300" y="84">+</text>
    <text x="360" y="84">+</text>
    <text x="420" y="84">+</text>
    <text x="480" y="84">+</text>
    <text x="120" y="139">+</text>
    <text x="180" y="139">+</text>
    <text x="240" y="139">+</text>
    <text x="300" y="139">+</text>
    <text x="360" y="139">+</text>
    <text x="420" y="139">+</text>
    <text x="480" y="139">+</text>
    <text x="120" y="194">+</text>
    <text x="180" y="194">+</text>
    <text x="240" y="194">+</text>
    <text x="300" y="194">+</text>
    <text x="360" y="194">+</text>
    <text x="420" y="194">+</text>
    <text x="480" y="194">+</text>
  </g>

  <g fill="url(#electronGrad)" stroke="#854d0e" stroke-width="0.5" filter="url(#glow)">
    <circle cx="150" cy="80" r="4.5" />
    <circle cx="210" cy="80" r="4.5" />
    <circle cx="270" cy="80" r="4.5" />
    <circle cx="330" cy="80" r="4.5" />
    <circle cx="390" cy="80" r="4.5" />
    <circle cx="450" cy="80" r="4.5" />
    <circle cx="150" cy="135" r="4.5" />
    <circle cx="210" cy="135" r="4.5" />
    <circle cx="270" cy="135" r="4.5" />
    <circle cx="330" cy="135" r="4.5" />
    <circle cx="390" cy="135" r="4.5" />
    <circle cx="450" cy="135" r="4.5" />
    <circle cx="150" cy="190" r="4.5" />
    <circle cx="210" cy="190" r="4.5" />
    <circle cx="270" cy="190" r="4.5" />
    <circle cx="330" cy="190" r="4.5" />
    <circle cx="390" cy="190" r="4.5" />
    <circle cx="450" cy="190" r="4.5" />
    <circle cx="150" cy="105" r="4.5" />
    <circle cx="210" cy="105" r="4.5" />
    <circle cx="270" cy="105" r="4.5" />
    <circle cx="330" cy="105" r="4.5" />
    <circle cx="390" cy="105" r="4.5" />
    <circle cx="450" cy="105" r="4.5" />
    <circle cx="150" cy="160" r="4.5" />
    <circle cx="210" cy="160" r="4.5" />
    <circle cx="270" cy="160" r="4.5" />
    <circle cx="330" cy="160" r="4.5" />
    <circle cx="390" cy="160" r="4.5" />
    <circle cx="450" cy="160" r="4.5" />
  </g>

  <path d="M 120 45 L 120 64" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2 2" fill="none" />
  <circle cx="120" cy="64" r="1.5" fill="#38bdf8" />
  <text x="120" y="40" fill="#38bdf8" font-size="10" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Positive Metal Cation (+)</text>

  <path d="M 450 225 L 450 195" stroke="#fdf089" stroke-width="1" stroke-dasharray="2 2" fill="none" />
  <circle cx="450" cy="195" r="1.5" fill="#fdf089" />
  <text x="450" y="235" fill="#fdf089" font-size="10" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Mobile Delocalised Valence Electron (e-)</text>
</svg>
`;

export const lessonParts: LessonPart[] = [
    {
        id: "metallic-bonding-nature",
        title: "Nature of Metallic Bonding",
        type: "text",
        content: `
### 🪙 The Metallic Bond

Metals form giant, regular 3D lattice structures consisting of closely packed positive metal ions (cations) surrounded by a sea of mobile, free-moving valence electrons.

> [!IMPORTANT]
> ### 🧮 Definition: Metallic Bond
> A **metallic bond** is the strong electrostatic attraction between the giant lattice of positive metal ions (cations) and the surrounding **sea of delocalised valence electrons**.

#### 💡 What does "delocalised" mean?
Delocalised electrons are not bound to any single metal atom. Instead, they are free to move throughout the entire giant structure.

${svgToken(metallicBondingSvg)}
        `,
        keyPoints: [
            "Metallic bonds consist of positive metal cations in a sea of delocalised electrons.",
            "Electrostatic attraction between positive ions and mobile electrons holds the structure together."
        ]
    },
    {
        id: "metallic-properties",
        title: "Physical Properties of Metals",
        type: "text",
        content: `
### 📋 Key Properties of Metallic Structures

The presence of the giant lattice and the sea of mobile, delocalised electrons determines the physical properties of metals.

> [!BOX]
> ### 🏛️ Physical Properties
> 1. **High Melting & Boiling Points:**
>    * The electrostatic attractions in the metallic bond are strong.
>    * A large amount of thermal energy is required to overcome these bonds.
> 2. **Electrical Conductivity:**
>    * Excellent conductors of electricity in both solid and liquid states.
>    * The mobile, delocalised valence electrons are free to flow and carry electrical charge under a potential difference.
> 3. **Malleability and Ductility:**
>    * **Malleable:** Can be hammered into thin sheets without breaking.
>    * **Ductile:** Can be drawn/stretched into thin wires.
>    * *Explanation:* When a force is applied, the layers of positive ions slide over each other. The mobile delocalised sea of electrons shifts with them, maintaining the metallic bond and preventing the structure from breaking.
        `,
        keyPoints: [
            "Delocalised electrons carry electrical charge, making metals conductive.",
            "Sliding layers of cations shielded by mobile electrons make metals malleable and ductile.",
            "Strong metallic attractions result in high melting points."
        ]
    }
];
