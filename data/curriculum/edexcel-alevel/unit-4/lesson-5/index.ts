import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality";
export const lessonNumber = 5;

export const theoryMarkdown = `
# Topic 15: Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality
This lesson covers structural isomerism vs stereoisomerism, chirality, optical activity, polarimetry, the stereochemical outcomes of SN1 and SN2 reaction mechanisms, carbonyl compounds (bonding, physical properties, redox, chemical tests, and addition mechanisms), carboxylic acids (bonding, nomenclature, dimerisation, preparations, and reactions), esters (nomenclature, smells, and saponification), acyl chlorides, and polyesters (condensation polymerisation).
`;

const polarisationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 410" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <!-- Gradients -->
    <linearGradient id="sourceGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="filterGlass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="slitGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Title Badge -->
  <rect x="310" y="14" width="380" height="30" rx="15" fill="#1e293b" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
  <text x="500" y="34" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold" letter-spacing="0.5">UNPOLARISED VS. PLANE-POLARISED LIGHT</text>
  
  <!-- Optical Central Axis Line -->
  <line x1="50" y1="150" x2="950" y2="150" stroke="#334155" stroke-width="1.8" stroke-dasharray="6 4" />
  
  <!-- 1. Light Source (Unpolarised) -->
  <g transform="translate(85, 150)">
    <circle cx="0" cy="0" r="30" fill="#f59e0b" fill-opacity="0.1" filter="url(#neonGlow)"/>
    <circle cx="0" cy="0" r="20" fill="url(#sourceGlow2)" stroke="#fef08a" stroke-width="1.5"/>
    <circle cx="0" cy="0" r="5" fill="#ffffff"/>
    <text x="0" y="44" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">Light Source</text>
    <text x="0" y="58" fill="#fbbf24" font-size="10" text-anchor="middle">(Unpolarised)</text>
  </g>

  <!-- 2. Unpolarised Wave Vector Cross-Section -->
  <g transform="translate(195, 150)">
    <circle cx="0" cy="0" r="34" fill="#0f172a" fill-opacity="0.8" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 3"/>
    
    <!-- Multi-directional vectors -->
    <line x1="0" y1="-30" x2="0" y2="30" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" filter="url(#neonGlow)"/>
    <polygon points="0,-33 -3,-26 3,-26" fill="#f59e0b"/>
    <polygon points="0,33 -3,26 3,26" fill="#f59e0b"/>
    
    <line x1="-30" y1="0" x2="30" y2="0" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/>
    <polygon points="-33,0 -26,-3 -26,3" fill="#0ea5e9"/>
    <polygon points="33,0 26,-3 26,3" fill="#0ea5e9"/>
    
    <line x1="-21" y1="-21" x2="21" y2="21" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="-21" y1="21" x2="21" y2="-21" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>

    <text x="0" y="48" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Oscillations</text>
    <text x="0" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">In all perpendicular planes</text>
  </g>
  
  <!-- Wave propagation arrow -->
  <path d="M 245,150 L 275,150" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />

  <!-- 3. Dual Wave Demonstration (Before Filter) -->
  <g transform="translate(285, 150)">
    <path d="M 0,0 C 25,24 45,24 70,0 C 95,-24 115,-24 140,0 C 165,24 185,24 210,0" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.85" />
    <path d="M 0,0 C 25,-44 45,-44 70,0 C 95,44 115,44 140,0 C 165,-44 185,-44 210,0" fill="none" stroke="#f59e0b" stroke-width="3" filter="url(#neonGlow)" />
    
    <!-- Wave Labels -->
    <rect x="40" y="-72" width="140" height="20" rx="4" fill="#0f172a" fill-opacity="0.85" stroke="#f59e0b" stroke-width="1"/>
    <text x="110" y="-58" fill="#fbbf24" font-size="9.5" font-weight="bold" text-anchor="middle">▲ Vertical Component</text>
    
    <rect x="40" y="54" width="140" height="20" rx="4" fill="#0f172a" fill-opacity="0.85" stroke="#0ea5e9" stroke-width="1"/>
    <text x="110" y="68" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">► Horizontal Component</text>
  </g>
  
  <!-- 4. Polarizing Filter (Polaroid Sheet) -->
  <g transform="translate(515, 55)">
    <rect x="0" y="0" width="38" height="190" rx="6" fill="url(#filterGlass)" stroke="#38bdf8" stroke-width="2" />
    <rect x="3" y="4" width="32" height="182" rx="4" fill="#0284c7" fill-opacity="0.08" />
    
    <line x1="12" y1="10" x2="12" y2="180" stroke="url(#slitGlow)" stroke-width="2" stroke-linecap="round"/>
    <line x1="19" y1="8" x2="19" y2="182" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round" filter="url(#neonGlow)"/>
    <line x1="26" y1="10" x2="26" y2="180" stroke="url(#slitGlow)" stroke-width="2" stroke-linecap="round"/>

    <text x="19" y="210" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">Polarising Filter</text>
    <text x="19" y="225" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">(Transmission Axis)</text>
    <text x="19" y="239" fill="#94a3b8" font-size="9.5" text-anchor="middle">Blocks horizontal wave</text>
  </g>
  
  <!-- 5. Single Plane-Polarised Wave (After Filter) -->
  <g transform="translate(575, 150)">
    <path d="M 0,0 C 25,-44 45,-44 70,0 C 95,44 115,44 140,0 C 165,-44 185,-44 210,0" fill="none" stroke="#f59e0b" stroke-width="3" filter="url(#neonGlow)" />
    <line x1="0" y1="0" x2="25" y2="0" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="3 3" stroke-opacity="0.6"/>
  </g>

  <!-- 6. Plane-Polarised Vector Cross-Section -->
  <g transform="translate(860, 150)">
    <circle cx="0" cy="0" r="34" fill="#0f172a" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.5"/>
    
    <line x1="0" y1="-30" x2="0" y2="30" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" filter="url(#neonGlow)"/>
    <polygon points="0,-33 -3,-26 3,-26" fill="#f59e0b"/>
    <polygon points="0,33 -3,26 3,26" fill="#f59e0b"/>

    <text x="0" y="48" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Plane-Polarised</text>
    <text x="0" y="62" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Single Vertical Plane</text>
    <text x="0" y="76" fill="#94a3b8" font-size="9.5" text-anchor="middle">Electric field oscillates ↕ only</text>
  </g>

  <!-- Bottom Comparison Card (Separate Box with full breathing room) -->
  <rect x="40" y="315" width="920" height="78" rx="8" fill="#070f1e" fill-opacity="0.95" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="338" fill="#38bdf8" font-size="11.5" font-weight="bold">📌 Key Takeaway for Edexcel Chemistry:</text>
  <text x="60" y="358" fill="#e2e8f0" font-size="11">• <tspan fill="#fbbf24" font-weight="bold">Unpolarised Light:</tspan> Wave vibrations occur in <tspan fill="#38bdf8" font-weight="bold">all perpendicular planes</tspan> to the direction of wave travel.</text>
  <text x="60" y="376" fill="#e2e8f0" font-size="11">• <tspan fill="#fbbf24" font-weight="bold">Plane-Polarised Light:</tspan> Wave vibrations occur in <tspan fill="#34d399" font-weight="bold">one single plane only</tspan> (vertical, horizontal, or angled).</text>
</svg>`;

const polarimeterSetupSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 420" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <!-- Gradients -->
    <linearGradient id="lampGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="1"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="tubeLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#064e3b" stop-opacity="0.85"/>
      <stop offset="50%" stop-color="#059669" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="glassReflection" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="unpolarizedBeam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="polarizedBeam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="rotatedBeam" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0.4"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Title Badge -->
  <rect x="330" y="14" width="340" height="30" rx="15" fill="#1e293b" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
  <text x="500" y="34" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold" letter-spacing="0.5">POLARIMETER INSTRUMENTAL SETUP</text>
  
  <!-- Optical Rail / Base Axis -->
  <line x1="60" y1="145" x2="930" y2="145" stroke="#334155" stroke-width="2" stroke-dasharray="6 4" />
  
  <!-- 1. Monochromatic Light Source -->
  <g transform="translate(90, 145)">
    <circle cx="0" cy="0" r="32" fill="#f59e0b" fill-opacity="0.12" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="22" fill="url(#lampGlow)" stroke="#fef08a" stroke-width="1.5"/>
    <path d="M -9,-9 L 9,9 M -9,9 L 9,-9 M -12,0 L 12,0 M 0,-12 L 0,12" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="5" fill="#ffffff"/>
    
    <circle cx="0" cy="0" r="28" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2 3"/>
    
    <text x="0" y="46" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">1. Light Source</text>
    <text x="0" y="60" fill="#fbbf24" font-size="10" text-anchor="middle">(Sodium D, λ=589nm)</text>
    <text x="0" y="74" fill="#94a3b8" font-size="9.5" text-anchor="middle">Oscillates in all planes</text>
  </g>
  
  <!-- Beam 1 -->
  <path d="M 125,140 L 205,140 L 205,150 L 125,150 Z" fill="url(#unpolarizedBeam)"/>
  <path d="M 145,132 L 185,158 M 145,158 L 185,132 M 165,128 L 165,162" stroke="#f59e0b" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M 195,145 L 210,145" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />

  <!-- 2. Polarizing Filter -->
  <g transform="translate(245, 145)">
    <circle cx="0" cy="0" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="28" fill="#1e293b" stroke="#0284c7" stroke-width="1"/>
    
    <line x1="0" y1="-26" x2="0" y2="26" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" filter="url(#glow)"/>
    <line x1="-10" y1="-22" x2="-10" y2="22" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.5"/>
    <line x1="10" y1="-22" x2="10" y2="22" stroke="#38bdf8" stroke-width="1.2" stroke-opacity="0.5"/>

    <text x="0" y="46" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">2. Polariser</text>
    <text x="0" y="60" fill="#38bdf8" font-size="10" text-anchor="middle">(Fixed Vertical Slit)</text>
    <text x="0" y="74" fill="#94a3b8" font-size="9.5" text-anchor="middle">Produces polarised light</text>
  </g>

  <!-- Beam 2 -->
  <path d="M 285,142 L 350,142 L 350,148 L 285,148 Z" fill="url(#polarizedBeam)"/>
  <g transform="translate(315, 145)">
    <line x1="0" y1="-18" x2="0" y2="18" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    <polygon points="0,-20 -3,-14 3,-14" fill="#38bdf8"/>
    <polygon points="0,20 -3,14 3,14" fill="#38bdf8"/>
  </g>
  <path d="M 335,145 L 352,145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- 3. Sample Tube -->
  <g transform="translate(470, 145)">
    <rect x="-105" y="-26" width="210" height="52" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
    <rect x="-98" y="-20" width="196" height="40" rx="5" fill="url(#tubeLiquid)"/>
    <rect x="-98" y="-20" width="196" height="40" rx="5" fill="url(#glassReflection)"/>
    
    <rect x="-110" y="-30" width="12" height="60" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <rect x="98" y="-30" width="12" height="60" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    
    <path d="M -70,0 Q -35,-22 0,0 T 70,0" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="3 2"/>
    <path d="M -20,-7 A 16 16 0 0 1 22,6" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#curve-arrow)"/>
    
    <text x="0" y="46" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">3. Sample Tube</text>
    <text x="0" y="60" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Chiral Enantiomer Solution</text>
    <text x="0" y="74" fill="#94a3b8" font-size="9.5" text-anchor="middle">Rotates plane of light by angle α</text>
  </g>

  <!-- Beam 3 -->
  <path d="M 585,142 L 655,142 L 655,148 L 585,148 Z" fill="url(#rotatedBeam)"/>
  <g transform="translate(620, 145) rotate(32)">
    <line x1="0" y1="-18" x2="0" y2="18" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
    <polygon points="0,-20 -3,-14 3,-14" fill="#c084fc"/>
    <polygon points="0,20 -3,14 3,14" fill="#c084fc"/>
  </g>
  <path d="M 640,145 L 658,145" stroke="#c084fc" stroke-width="2" marker-end="url(#arrow)" />

  <!-- 4. Rotatable Analyser Filter -->
  <g transform="translate(710, 145)">
    <circle cx="0" cy="0" r="36" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <line x1="0" y1="-36" x2="0" y2="-30" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="0" y1="36" x2="0" y2="30" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="-36" y1="0" x2="-30" y2="0" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="36" y1="0" x2="30" y2="0" stroke="#e2e8f0" stroke-width="1.5"/>
    
    <line x1="0" y1="-28" x2="0" y2="28" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    
    <g transform="rotate(32)">
      <line x1="0" y1="-28" x2="0" y2="28" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" filter="url(#glow)"/>
      <circle cx="0" cy="0" r="3.5" fill="#ffffff"/>
    </g>

    <path d="M 0,-24 A 24 24 0 0 1 13,-20" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="20" y="-26" fill="#f59e0b" font-size="12" font-weight="bold">+α</text>

    <text x="0" y="46" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">4. Analyser</text>
    <text x="0" y="60" fill="#c084fc" font-size="10" text-anchor="middle">(Rotated Filter)</text>
    <text x="0" y="74" fill="#94a3b8" font-size="9.5" text-anchor="middle">Rotated to match new angle α</text>
  </g>

  <!-- Arrow to Viewer -->
  <path d="M 760,145 L 825,145" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#arrow)" />

  <!-- 5. Observer / Detector -->
  <g transform="translate(880, 145)">
    <path d="M -24,0 C -12,-16 12,-16 24,0 C 12,16 -12,16 -24,0 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="0" cy="0" r="9" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
    <circle cx="0" cy="0" r="4" fill="#030712"/>
    <circle cx="-2.5" cy="-2.5" r="1.8" fill="#ffffff"/>

    <text x="0" y="46" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">5. Observer / Viewer</text>
    <text x="0" y="60" fill="#38bdf8" font-size="10" text-anchor="middle">(Detector / Eye)</text>
    <text x="0" y="74" fill="#94a3b8" font-size="9.5" text-anchor="middle">Max light at angle α</text>
  </g>

  <!-- Bottom Legend Box with large comfortable padding -->
  <rect x="40" y="270" width="920" height="125" rx="8" fill="#070f1e" fill-opacity="0.95" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="295" fill="#38bdf8" font-size="12" font-weight="bold">🔑 Key Principles of Polarimetry:</text>
  
  <text x="60" y="320" fill="#e2e8f0" font-size="11">• <tspan fill="#fbbf24" font-weight="bold">Dextrorotatory (+ / d):</tspan> Rotates the plane of polarised light <tspan fill="#34d399" font-weight="bold">clockwise</tspan>.</text>
  <text x="60" y="342" fill="#e2e8f0" font-size="11">• <tspan fill="#fbbf24" font-weight="bold">Laevorotatory (− / l):</tspan> Rotates the plane of polarised light <tspan fill="#f43f5e" font-weight="bold">anticlockwise</tspan> by an equal angle for pure enantiomers.</text>
  <text x="60" y="364" fill="#e2e8f0" font-size="11">• <tspan fill="#a855f7" font-weight="bold">Racemic Mixture (50:50):</tspan> Net rotation is <tspan fill="#38bdf8" font-weight="bold">0°</tspan> (optically inactive as opposite rotations cancel).</text>
  <text x="60" y="386" fill="#e2e8f0" font-size="11">• <tspan fill="#a855f7" font-weight="bold">Specific Rotation:</tspan> $[\alpha] = \frac{\alpha}{c \times l}$ (standardised property of a chiral compound).</text>

  <!-- Markers -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
    <marker id="curve-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#10b981" />
    </marker>
  </defs>
</svg>`;

const chiralCentreSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Side: Chiral Molecules -->
  <g transform="translate(0, 0)">
    <text x="250" y="30" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">CHIRAL CENTRE (Asymmetric Carbon)</text>
    <text x="250" y="50" text-anchor="middle" fill="#94a3b8" font-size="10">Non-superimposable mirror images (lacks plane of symmetry)</text>
    
    <!-- Mirror Plane Line -->
    <line x1="250" y1="80" x2="250" y2="280" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="250" y="73" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">MIRROR</text>
    
    <!-- Left Enantiomer: CHFClBr -->
    <g transform="translate(130, 180)">
      <!-- Carbon Center -->
      <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
      <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C*</text>
      
      <!-- H (top) -->
      <line x1="0" y1="-14" x2="0" y2="-55" stroke="#f8fafc" stroke-width="2" />
      <circle cx="0" cy="-55" r="10" fill="#475569" />
      <text x="0" y="-51" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- F (left) -->
      <line x1="-14" y1="0" x2="-55" y2="0" stroke="#f8fafc" stroke-width="2" />
      <circle cx="-55" cy="0" r="12" fill="#10b981" />
      <text x="-55" y="4" fill="#fff" font-size="10" text-anchor="middle">F</text>
      
      <!-- Cl (wedge down-right) -->
      <path d="M 8,-11 L 35,-45 L 43,-38 Z" fill="#3b82f6" />
      <circle cx="39" cy="-41" r="12" fill="#3b82f6" />
      <text x="39" y="-37" fill="#fff" font-size="10" text-anchor="middle">Cl</text>
      
      <!-- Br (dash down-left) -->
      <line x1="-8" y1="11" x2="-35" y2="45" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3" />
      <circle cx="-35" cy="45" r="14" fill="#ef4444" />
      <text x="-35" y="49" fill="#fff" font-size="10" text-anchor="middle">Br</text>
    </g>
    
    <!-- Right Enantiomer (Mirror reflection) -->
    <g transform="translate(370, 180)">
      <!-- Carbon Center -->
      <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
      <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C*</text>
      
      <!-- H (top) -->
      <line x1="0" y1="-14" x2="0" y2="-55" stroke="#f8fafc" stroke-width="2" />
      <circle cx="0" cy="-55" r="10" fill="#475569" />
      <text x="0" y="-51" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- F (right) -->
      <line x1="14" y1="0" x2="55" y2="0" stroke="#f8fafc" stroke-width="2" />
      <circle cx="55" cy="0" r="12" fill="#10b981" />
      <text x="55" y="4" fill="#fff" font-size="10" text-anchor="middle">F</text>
      
      <!-- Cl (wedge down-left) -->
      <path d="M -8,-11 L -35,-45 L -43,-38 Z" fill="#3b82f6" />
      <circle cx="-39" cy="-41" r="12" fill="#3b82f6" />
      <text x="-39" y="-37" fill="#fff" font-size="10" text-anchor="middle">Cl</text>
      
      <!-- Br (dash down-right) -->
      <line x1="8" y1="11" x2="35" y2="45" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3" />
      <circle cx="35" cy="45" r="14" fill="#ef4444" />
      <text x="35" y="49" fill="#fff" font-size="10" text-anchor="middle">Br</text>
    </g>
    
    <!-- Cannot be superimposed text -->
    <path d="M 220,310 L 280,310" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="250" y="325" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">CANNOT BE SUPERIMPOSED</text>
  </g>
</svg>`;

const achiralMoleculeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Right Side: Achiral Molecules -->
  <g transform="translate(0, 0)">
    <text x="250" y="30" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">ACHIRAL MOLECULE</text>
    <text x="250" y="50" text-anchor="middle" fill="#94a3b8" font-size="10">Superimposable mirror images (possesses plane of symmetry)</text>
    
    <!-- Mirror Plane Line -->
    <line x1="250" y1="80" x2="250" y2="280" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="250" y="73" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">MIRROR</text>
    
    <!-- Left Achiral: CH2ClF -->
    <g transform="translate(130, 180)">
      <!-- Carbon Center -->
      <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
      <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C</text>
      
      <!-- H (top) -->
      <line x1="0" y1="-14" x2="0" y2="-55" stroke="#f8fafc" stroke-width="2" />
      <circle cx="0" cy="-55" r="10" fill="#475569" />
      <text x="0" y="-51" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- H (left) -->
      <line x1="-14" y1="0" x2="-55" y2="0" stroke="#f8fafc" stroke-width="2" />
      <circle cx="-55" cy="0" r="10" fill="#475569" />
      <text x="-55" y="4" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- Cl (wedge down-right) -->
      <path d="M 8,-11 L 35,-45 L 43,-38 Z" fill="#3b82f6" />
      <circle cx="39" cy="-41" r="12" fill="#3b82f6" />
      <text x="39" y="-37" fill="#fff" font-size="10" text-anchor="middle">Cl</text>
      
      <!-- F (dash down-left) -->
      <line x1="-8" y1="11" x2="-35" y2="45" stroke="#10b981" stroke-width="3" stroke-dasharray="3 3" />
      <circle cx="-35" cy="45" r="12" fill="#10b981" />
      <text x="-35" y="49" fill="#fff" font-size="10" text-anchor="middle">F</text>
    </g>
    
    <!-- Right Achiral (Mirror reflection) -->
    <g transform="translate(370, 180)">
      <!-- Carbon Center -->
      <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
      <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C</text>
      
      <!-- H (top) -->
      <line x1="0" y1="-14" x2="0" y2="-55" stroke="#f8fafc" stroke-width="2" />
      <circle cx="0" cy="-55" r="10" fill="#475569" />
      <text x="0" y="-51" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- H (right) -->
      <line x1="14" y1="0" x2="55" y2="0" stroke="#f8fafc" stroke-width="2" />
      <circle cx="55" cy="0" r="10" fill="#475569" />
      <text x="55" y="4" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
      
      <!-- Cl (wedge down-left) -->
      <path d="M -8,-11 L -35,-45 L -43,-38 Z" fill="#3b82f6" />
      <circle cx="-39" cy="-41" r="12" fill="#3b82f6" />
      <text x="-39" y="-37" fill="#fff" font-size="10" text-anchor="middle">Cl</text>
      
      <!-- F (dash down-right) -->
      <line x1="8" y1="11" x2="35" y2="45" stroke="#10b981" stroke-width="3" stroke-dasharray="3 3" />
      <circle cx="35" cy="45" r="12" fill="#10b981" />
      <text x="35" y="49" fill="#fff" font-size="10" text-anchor="middle">F</text>
    </g>
    
    <!-- Can be superimposed text -->
    <path d="M 220,310 L 280,310" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="250" y="325" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">CAN BE SUPERIMPOSED (180° Rotation)</text>
  </g>
</svg>`;

const lacticAcidEnantiomersSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Optical Isomers of Lactic Acid (2-hydroxypropanoic acid)</text>
  
  <!-- Mirror Plane Line -->
  <line x1="500" y1="60" x2="500" y2="300" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="500" y="53" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">MIRROR PLANE</text>
  
  <!-- Left Enantiomer -->
  <g transform="translate(250, 180)">
    <!-- Carbon Center -->
    <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
    <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C*</text>
    
    <!-- COOH (pointing straight up) -->
    <line x1="0" y1="-14" x2="0" y2="-60" stroke="#f8fafc" stroke-width="2" />
    <rect x="-25" y="-80" width="50" height="20" rx="4" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1" />
    <text x="0" y="-66" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">COOH</text>
    
    <!-- CH3 (pointing down-left) -->
    <line x1="-10" y1="10" x2="-45" y2="45" stroke="#f8fafc" stroke-width="2" />
    <rect x="-70" y="45" width="40" height="20" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1" />
    <text x="-50" y="59" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- OH (wedge pointing down-right - towards viewer) -->
    <path d="M 10,10 L 40,45 L 48,37 Z" fill="#ef4444" />
    <circle cx="44" cy="41" r="14" fill="#ef4444" />
    <text x="44" y="45" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">OH</text>
    
    <!-- H (dashed line pointing back-right - away from viewer) -->
    <line x1="8" y1="-8" x2="45" y2="-45" stroke="#a855f7" stroke-width="3" stroke-dasharray="3 3" />
    <circle cx="45" cy="-45" r="12" fill="#a855f7" />
    <text x="45" y="-41" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">H</text>
    
    <text x="0" y="100" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">(+) Lactic Acid</text>
  </g>
  
  <!-- Right Enantiomer (Mirror Image) -->
  <g transform="translate(750, 180)">
    <!-- Carbon Center -->
    <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f8fafc" stroke-width="2" />
    <text x="0" y="4" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">C*</text>
    
    <!-- COOH (pointing straight up) -->
    <line x1="0" y1="-14" x2="0" y2="-60" stroke="#f8fafc" stroke-width="2" />
    <rect x="-25" y="-80" width="50" height="20" rx="4" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1" />
    <text x="0" y="-66" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">COOH</text>
    
    <!-- CH3 (pointing down-right) -->
    <line x1="10" y1="10" x2="45" y2="45" stroke="#f8fafc" stroke-width="2" />
    <rect x="30" y="45" width="40" height="20" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1" />
    <text x="50" y="59" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- OH (wedge pointing down-left - towards viewer/mirror) -->
    <path d="M -10,10 L -40,45 L -48,37 Z" fill="#ef4444" />
    <circle cx="-44" cy="41" r="14" fill="#ef4444" />
    <text x="-44" y="45" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">OH</text>
    
    <!-- H (dashed line pointing back-left - away from viewer) -->
    <line x1="-8" y1="-8" x2="-45" y2="-45" stroke="#a855f7" stroke-width="3" stroke-dasharray="3 3" />
    <circle cx="-45" cy="-45" r="12" fill="#a855f7" />
    <text x="-45" y="-41" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">H</text>
    <text x="0" y="100" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">(-) Lactic Acid</text>
  </g>
  
  <text x="50%" y="330" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="bold">NON-SUPERIMPOSABLE MIRROR IMAGES</text>
</svg>`;

const sn2StereochemistrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 430" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Header Badge -->
  <rect x="25" y="20" width="450" height="50" rx="6" fill="#38bdf8" fill-opacity="0.1" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.3" />
  <text x="250" y="40" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">SN2 Mechanism (Concerted Inversion)</text>
  <text x="250" y="56" text-anchor="middle" fill="#94a3b8" font-size="9.5">Primary &amp; Secondary Halogenoalkanes (Walden Inversion)</text>

  <!-- 1. Reactant + Backside Attack (x: 40..170, y: 190) -->
  <g>
    <!-- Nucleophile HO- -->
    <text x="35" y="194" fill="#10b981" font-size="13" font-weight="bold">HO⁻</text>
    <!-- Attack curved arrow -->
    <path d="M 60,182 Q 80,168 100,182" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#arrow-green)" />
    
    <!-- Central Carbon -->
    <circle cx="112" cy="190" r="12" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
    <text x="112" y="194" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- CH3 (up) -->
    <line x1="112" y1="178" x2="112" y2="148" stroke="#f8fafc" stroke-width="1.5" />
    <text x="112" y="142" fill="#f8fafc" font-size="10" text-anchor="middle">CH₃</text>
    
    <!-- H (dash down-left) -->
    <line x1="104" y1="198" x2="88" y2="222" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="84" y="234" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
    
    <!-- F (wedge down-right) -->
    <path d="M 119,198 L 134,222 L 142,216 Z" fill="#38bdf8" />
    <text x="138" y="234" fill="#38bdf8" font-size="10" text-anchor="middle">F</text>
    
    <!-- Leaving group Br (red) -->
    <line x1="124" y1="190" x2="152" y2="190" stroke="#ef4444" stroke-width="2" />
    <text x="162" y="194" fill="#ef4444" font-size="11" font-weight="bold">Br</text>
  </g>
  
  <!-- Arrow to Transition State -->
  <path d="M 182,190 L 208,190" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 2. Transition State (x: 215..315, y: 190) -->
  <g>
    <!-- Brackets -->
    <path d="M 222,135 L 212,135 L 212,245 L 222,245" fill="none" stroke="#94a3b8" stroke-width="1.5" />
    <path d="M 297,135 L 307,135 L 307,245 L 297,245" fill="none" stroke="#94a3b8" stroke-width="1.5" />
    <text x="322" y="140" fill="#f8fafc" font-size="14" font-weight="bold">⁻</text>
    
    <!-- Partial bond HO··· -->
    <text x="218" y="194" fill="#10b981" font-size="10" font-weight="bold">HO</text>
    <line x1="236" y1="190" x2="250" y2="190" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2.5 2" />
    
    <!-- Central Carbon -->
    <circle cx="260" cy="190" r="10" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
    <text x="260" y="194" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- Partial bond ···Br -->
    <line x1="270" y1="190" x2="284" y2="190" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2.5 2" />
    <text x="288" y="194" fill="#ef4444" font-size="10" font-weight="bold">Br</text>
    
    <!-- Planar vertical groups -->
    <line x1="260" y1="180" x2="260" y2="150" stroke="#f8fafc" stroke-width="1.5" />
    <text x="260" y="144" fill="#f8fafc" font-size="10" text-anchor="middle">CH₃</text>
    
    <line x1="254" y1="198" x2="244" y2="222" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="240" y="234" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
    
    <path d="M 266,198 L 276,222 L 283,217 Z" fill="#38bdf8" />
    <text x="280" y="234" fill="#38bdf8" font-size="10" text-anchor="middle">F</text>
    
    <!-- Label under TS -->
    <text x="260" y="270" fill="#94a3b8" font-size="9.5" font-weight="bold" text-anchor="middle">Transition State</text>
  </g>
  
  <!-- Arrow to Product -->
  <path d="M 322,190 L 348,190" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 3. Inverted Product (x: 355..470, y: 190) -->
  <g>
    <!-- HO group bonded -->
    <text x="352" y="194" fill="#10b981" font-size="11" font-weight="bold">HO</text>
    <line x1="372" y1="190" x2="388" y2="190" stroke="#10b981" stroke-width="1.8" />
    
    <!-- Central Carbon -->
    <circle cx="398" cy="190" r="10" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
    <text x="398" y="194" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- CH3 (up) -->
    <line x1="398" y1="180" x2="398" y2="148" stroke="#f8fafc" stroke-width="1.5" />
    <text x="398" y="142" fill="#f8fafc" font-size="10" text-anchor="middle">CH₃</text>
    
    <!-- Inverted F (wedge down-left) -->
    <path d="M 392,198 L 377,222 L 384,226 Z" fill="#38bdf8" />
    <text x="376" y="238" fill="#38bdf8" font-size="10" text-anchor="middle">F</text>
    
    <!-- Inverted H (dash down-right) -->
    <line x1="404" y1="198" x2="420" y2="222" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="424" y="234" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
    
    <!-- Leaving Br- -->
    <text x="437" y="194" fill="#ef4444" font-size="10" font-weight="bold">+ Br⁻</text>
  </g>
  
  <!-- Bottom Result Badge -->
  <rect x="25" y="365" width="450" height="38" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1" stroke-opacity="0.4" />
  <text x="250" y="388" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">100% Inversion (Single Optically Active Enantiomer)</text>
  
  <!-- Definitions -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#10b981" />
    </marker>
  </defs>
</svg>`;

const sn1StereochemistrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 430" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Header Badge -->
  <rect x="25" y="20" width="450" height="50" rx="6" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.3" />
  <text x="250" y="40" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="bold">SN1 Mechanism (Planar Intermediate &amp; Racemisation)</text>
  <text x="250" y="56" text-anchor="middle" fill="#94a3b8" font-size="9.5">Tertiary &amp; Secondary Halogenoalkanes (Two-Step Pathway)</text>

  <!-- 1. Step 1: Reactant (x: 55, y: 190) -->
  <g transform="translate(0, -10)">
    <circle cx="55" cy="200" r="10" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
    <text x="55" y="204" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- CH3 (up) -->
    <line x1="55" y1="190" x2="55" y2="158" stroke="#f8fafc" stroke-width="1.5" />
    <text x="55" y="152" fill="#f8fafc" font-size="10" text-anchor="middle">CH₃</text>
    
    <!-- H (dash down-left) -->
    <line x1="49" y1="208" x2="38" y2="230" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
    <text x="35" y="242" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
    
    <!-- F (wedge down-right) -->
    <path d="M 61,208 L 72,230 L 79,225 Z" fill="#38bdf8" />
    <text x="75" y="242" fill="#38bdf8" font-size="10" text-anchor="middle">F</text>
    
    <!-- Br leaving (red) -->
    <line x1="65" y1="200" x2="88" y2="200" stroke="#ef4444" stroke-width="2" />
    <text x="94" y="204" fill="#ef4444" font-size="11" font-weight="bold">Br</text>
  </g>
  
  <!-- Step 1 Arrow -->
  <g transform="translate(0, -10)">
    <path d="M 110,200 L 138,200" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
    <text x="124" y="190" fill="#94a3b8" font-size="8.5" text-anchor="middle">Slow (r.d.s)</text>
    <text x="124" y="215" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">− Br⁻</text>
  </g>
  
  <!-- 2. Step 1 Product: Planar Carbocation Intermediate (x: 185, y: 190) -->
  <g transform="translate(0, -10)">
    <circle cx="185" cy="200" r="13" fill="#1e293b" stroke="#fbbf24" stroke-width="1.8" />
    <text x="185" y="204" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">C⁺</text>
    
    <!-- Planar Trigonal (120 deg) -->
    <line x1="185" y1="187" x2="185" y2="155" stroke="#f8fafc" stroke-width="1.5" />
    <text x="185" y="149" fill="#f8fafc" font-size="10" text-anchor="middle">CH₃</text>
    
    <line x1="174" y1="208" x2="154" y2="228" stroke="#f8fafc" stroke-width="1.5" />
    <text x="150" y="238" fill="#f8fafc" font-size="10" text-anchor="middle">H</text>
    
    <line x1="196" y1="208" x2="216" y2="228" stroke="#38bdf8" stroke-width="1.5" />
    <text x="220" y="238" fill="#38bdf8" font-size="10" text-anchor="middle">F</text>
    
    <!-- Label -->
    <text x="185" y="260" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">Planar Intermediate</text>
    <text x="185" y="272" fill="#94a3b8" font-size="8" text-anchor="middle">(Equal attack 50:50)</text>
  </g>
  
  <!-- 3. Two-Way Attack Paths & Products -->
  <!-- (A) Front Face Attack (Top Branch) -->
  <g transform="translate(0, -10)">
    <path d="M 205,188 Q 235,140 275,135" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#arrow-green)" />
    <text x="245" y="125" fill="#10b981" font-size="8.5" font-weight="bold">HO⁻ Attack (50%)</text>
    
    <!-- Top Product (Inverted Enantiomer) -->
    <g transform="translate(340, 135)">
      <text x="-32" y="4" fill="#10b981" font-size="10" font-weight="bold">HO</text>
      <line x1="-14" y1="0" x2="-2" y2="0" stroke="#10b981" stroke-width="1.5" />
      <circle cx="8" cy="0" r="9" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
      <text x="8" y="4" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">C</text>
      
      <line x1="8" y1="-9" x2="8" y2="-28" stroke="#f8fafc" stroke-width="1.5" />
      <text x="8" y="-33" fill="#f8fafc" font-size="9" text-anchor="middle">CH₃</text>
      
      <path d="M 3,6 L -8,20 L -2,24 Z" fill="#38bdf8" />
      <text x="-5" y="32" fill="#38bdf8" font-size="9" text-anchor="middle">F</text>
      
      <line x1="13" y1="6" x2="24" y2="20" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
      <text x="26" y="28" fill="#f8fafc" font-size="9" text-anchor="middle">H</text>
      
      <text x="50" y="2" fill="#38bdf8" font-size="9.5" font-weight="bold">(+) Enantiomer</text>
      <text x="50" y="14" fill="#94a3b8" font-size="8">(50% yield)</text>
    </g>
  </g>
  
  <!-- (B) Back Face Attack (Bottom Branch) -->
  <g transform="translate(0, -10)">
    <path d="M 185,213 Q 240,300 265,265" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#arrow-green)" />
    <text x="245" y="292" fill="#10b981" font-size="8.5" font-weight="bold">HO⁻ Attack (50%)</text>
    
    <!-- Bottom Product (Retained Enantiomer) -->
    <g transform="translate(340, 265)">
      <circle cx="8" cy="0" r="9" fill="#1e293b" stroke="#f8fafc" stroke-width="1.5" />
      <text x="8" y="4" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">C</text>
      
      <line x1="8" y1="-9" x2="8" y2="-28" stroke="#f8fafc" stroke-width="1.5" />
      <text x="8" y="-33" fill="#f8fafc" font-size="9" text-anchor="middle">CH₃</text>
      
      <line x1="17" y1="0" x2="29" y2="0" stroke="#10b981" stroke-width="1.5" />
      <text x="33" y="4" fill="#10b981" font-size="10" font-weight="bold">OH</text>
      
      <path d="M 13,6 L 24,20 L 18,24 Z" fill="#38bdf8" />
      <text x="21" y="32" fill="#38bdf8" font-size="9" text-anchor="middle">F</text>
      
      <line x1="3" y1="6" x2="-8" y2="20" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2 2" />
      <text x="-10" y="28" fill="#f8fafc" font-size="9" text-anchor="middle">H</text>
      
      <text x="62" y="2" fill="#fbbf24" font-size="9.5" font-weight="bold">(-) Enantiomer</text>
      <text x="62" y="14" fill="#94a3b8" font-size="8">(50% yield)</text>
    </g>
  </g>
  
  <!-- Bottom Result Badge -->
  <rect x="25" y="365" width="450" height="38" rx="6" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.4" />
  <text x="250" y="388" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">50:50 Racemic Mixture (Net 0° Rotation → Optically Inactive)</text>

  <!-- Definitions -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#10b981" />
    </marker>
  </defs>
</svg>`;

const propanalDisplayedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 180" class="w-full max-w-[320px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Methyl Carbon (C3) -->
  <text x="80" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  <text x="40" y="95" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="50" y1="90" x2="70" y2="90" stroke="#94a3b8" stroke-width="2" />
  
  <text x="80" y="45" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="80" y1="52" x2="80" y2="80" stroke="#94a3b8" stroke-width="2" />
  
  <text x="80" y="145" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="80" y1="102" x2="80" y2="130" stroke="#94a3b8" stroke-width="2" />
  
  <!-- C-C Bond -->
  <line x1="92" y1="90" x2="148" y2="90" stroke="#94a3b8" stroke-width="2" />

  <!-- Middle Carbon (C2) -->
  <text x="160" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  <text x="160" y="45" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="160" y1="52" x2="160" y2="80" stroke="#94a3b8" stroke-width="2" />
  
  <text x="160" y="145" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="160" y1="102" x2="160" y2="130" stroke="#94a3b8" stroke-width="2" />
  
  <!-- C-C Bond -->
  <line x1="172" y1="90" x2="228" y2="90" stroke="#94a3b8" stroke-width="2" />

  <!-- Carbonyl Carbon (C1) -->
  <text x="240" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  
  <!-- C=O Bond -->
  <line x1="237" y1="80" x2="237" y2="52" stroke="#ef4444" stroke-width="2" />
  <line x1="243" y1="80" x2="243" y2="52" stroke="#ef4444" stroke-width="2" />
  <text x="240" y="45" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">O</text>
  
  <!-- C-H Bond -->
  <line x1="252" y1="90" x2="308" y2="90" stroke="#94a3b8" stroke-width="2" />
  <text x="318" y="95" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
</svg>`;

const nucleophilicAdditionStep1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 250" class="w-full max-w-[720px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Side: Reactants -->
  <g transform="translate(15, 10)">
    <!-- CN- Nucleophile with explicit lone pair on C -->
    <circle cx="48" cy="120" r="2" fill="#38bdf8" />
    <circle cx="48" cy="128" r="2" fill="#38bdf8" />
    <text x="68" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">NC</text>
    <text x="86" y="112" fill="#38bdf8" font-size="14" font-weight="bold">⁻</text>
    <text x="68" y="152" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Nucleophile</text>
    
    <!-- Curved attack arrow from C lone pair to C=O carbon -->
    <path d="M 88,120 Q 140,85 182,110" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#arrow-yellow)" />
    <text x="135" y="85" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Nucleophilic Attack</text>

    <!-- Ethanal Carbonyl Carbon -->
    <text x="195" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">C</text>
    <text x="195" y="100" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">δ⁺</text>
    
    <!-- H (top left) -->
    <line x1="186" y1="112" x2="160" y2="78" stroke="#94a3b8" stroke-width="2.2" />
    <text x="150" y="70" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
    
    <!-- CH3 (bottom left) -->
    <line x1="186" y1="134" x2="160" y2="168" stroke="#94a3b8" stroke-width="2.2" />
    <text x="145" y="185" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- C=O Double Bond -->
    <line x1="210" y1="118" x2="255" y2="118" stroke="#ef4444" stroke-width="2.5" />
    <line x1="210" y1="126" x2="255" y2="126" stroke="#ef4444" stroke-width="2.5" />
    
    <!-- Oxygen atom of C=O with lone pairs and partial charge -->
    <text x="272" y="129" fill="#ef4444" font-size="18" font-weight="bold" text-anchor="middle">O</text>
    <text x="272" y="100" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">δ⁻</text>
    <!-- Carbonyl Oxygen Lone pairs (two pairs) -->
    <circle cx="272" cy="142" r="2" fill="#ef4444" />
    <circle cx="280" cy="142" r="2" fill="#ef4444" />
    <circle cx="286" cy="120" r="2" fill="#ef4444" />
    <circle cx="286" cy="128" r="2" fill="#ef4444" />
    
    <!-- Curved arrow showing pi-electrons breaking to oxygen -->
    <path d="M 230,114 Q 250,98 268,110" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
  </g>
  
  <!-- Step 1 Reaction Arrow -->
  <g transform="translate(325, 10)">
    <line x1="0" y1="124" x2="65" y2="124" stroke="#94a3b8" stroke-width="2.2" marker-end="url(#arrow-gray)" />
    <text x="32" y="110" fill="#94a3b8" font-size="13" text-anchor="middle" font-weight="bold">Step 1</text>
    <text x="32" y="148" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">Slow (r.d.s)</text>
  </g>
  
  <!-- Right Side: Tetrahedral Intermediate -->
  <g transform="translate(425, 10)">
    <!-- Central Carbon -->
    <text x="140" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- NC joined (left) -->
    <line x1="126" y1="124" x2="82" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    <text x="60" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">NC</text>
    
    <!-- H (top) -->
    <line x1="140" y1="112" x2="140" y2="70" stroke="#94a3b8" stroke-width="2.2" />
    <text x="140" y="60" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
    
    <!-- CH3 (bottom) -->
    <line x1="140" y1="135" x2="140" y2="175" stroke="#94a3b8" stroke-width="2.2" />
    <text x="140" y="195" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- C-O single bond -->
    <line x1="154" y1="124" x2="198" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    
    <!-- Intermediate negative Oxygen with 3 lone pairs -->
    <text x="216" y="129" fill="#ef4444" font-size="18" font-weight="bold" text-anchor="middle">O</text>
    <text x="232" y="112" fill="#ef4444" font-size="15" font-weight="bold">⁻</text>
    
    <!-- Three lone pairs on intermediate O- -->
    <circle cx="212" cy="108" r="2" fill="#ef4444" />
    <circle cx="220" cy="108" r="2" fill="#ef4444" />
    <circle cx="212" cy="140" r="2" fill="#ef4444" />
    <circle cx="220" cy="140" r="2" fill="#ef4444" />
    <circle cx="230" cy="120" r="2" fill="#ef4444" />
    <circle cx="230" cy="128" r="2" fill="#ef4444" />
    
    <text x="140" y="225" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Tetrahedral Intermediate</text>
  </g>
  
  <!-- Definitions for Arrows -->
  <defs>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
  </defs>
</svg>`;

const nucleophilicAdditionStep2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 250" class="w-full max-w-[760px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Side: Proton Transfer -->
  <g transform="translate(10, 10)">
    <!-- Intermediate Carbon -->
    <text x="120" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- NC -->
    <line x1="106" y1="124" x2="62" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    <text x="40" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">NC</text>
    
    <!-- H (top) -->
    <line x1="120" y1="112" x2="120" y2="70" stroke="#94a3b8" stroke-width="2.2" />
    <text x="120" y="60" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
    
    <!-- CH3 (bottom) -->
    <line x1="120" y1="135" x2="120" y2="175" stroke="#94a3b8" stroke-width="2.2" />
    <text x="120" y="195" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- C-O -->
    <line x1="134" y1="124" x2="178" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    <text x="195" y="129" fill="#ef4444" font-size="18" font-weight="bold" text-anchor="middle">O</text>
    <text x="210" y="112" fill="#ef4444" font-size="15" font-weight="bold">⁻</text>
    
    <!-- Lone pair on O- attacking H-CN -->
    <circle cx="210" cy="120" r="2" fill="#ef4444" />
    <circle cx="210" cy="128" r="2" fill="#ef4444" />
    
    <!-- Curved attack arrow from O- lone pair to H of HCN -->
    <path d="M 212,124 Q 250,95 282,115" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#arrow-yellow)" />
    <text x="250" y="90" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Proton Transfer</text>
    
    <!-- HCN Reactant Molecule with dipoles -->
    <text x="295" y="129" fill="#f8fafc" font-size="17" font-weight="bold" text-anchor="middle">H</text>
    <text x="295" y="102" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">δ⁺</text>
    
    <line x1="306" y1="124" x2="334" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    
    <text x="352" y="129" fill="#f8fafc" font-size="17" font-weight="bold" text-anchor="middle">CN</text>
    <text x="352" y="102" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">δ⁻</text>
    
    <!-- Curved arrow showing H-CN bond breaking to CN -->
    <path d="M 320,118 Q 332,102 344,115" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
  </g>
  
  <!-- Step 2 Reaction Arrow -->
  <g transform="translate(410, 10)">
    <line x1="0" y1="124" x2="60" y2="124" stroke="#94a3b8" stroke-width="2.2" marker-end="url(#arrow-gray)" />
    <text x="30" y="110" fill="#94a3b8" font-size="13" text-anchor="middle" font-weight="bold">Step 2</text>
    <text x="30" y="148" fill="#10b981" font-size="12" text-anchor="middle" font-weight="bold">Fast</text>
  </g>
  
  <!-- Right Side: Final Products -->
  <g transform="translate(500, 10)">
    <!-- Central C -->
    <text x="100" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- NC -->
    <line x1="86" y1="124" x2="48" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    <text x="30" y="129" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">NC</text>
    
    <!-- H -->
    <line x1="100" y1="112" x2="100" y2="70" stroke="#94a3b8" stroke-width="2.2" />
    <text x="100" y="60" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
    
    <!-- CH3 -->
    <line x1="100" y1="135" x2="100" y2="175" stroke="#94a3b8" stroke-width="2.2" />
    <text x="100" y="195" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- C-OH bond -->
    <line x1="114" y1="124" x2="148" y2="124" stroke="#94a3b8" stroke-width="2.2" />
    <text x="168" y="129" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">OH</text>
    
    <!-- Regenerated :CN- Catalyst -->
    <text x="218" y="129" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">+ :CN⁻</text>
    <text x="218" y="152" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">(Catalyst regenerated)</text>
  </g>
  
  <!-- Definitions for Arrows -->
  <defs>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
  </defs>
</svg>`;

const dnphReactionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 200" class="w-full max-w-[780px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Title Badge -->
  <text x="460" y="22" text-anchor="middle" fill="#38bdf8" font-size="11.5" font-weight="bold">Brady's Test: Condensation Reaction of 2,4-DNPH with Carbonyl Compound</text>

  <!-- 1. Left Reactant: 2,4-Dinitrophenylhydrazine -->
  <g transform="translate(0, 10)">
    <!-- O2N at C4 (far left) -->
    <text x="30" y="104" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="end">O₂N</text>
    <line x1="34" y1="100" x2="62" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    
    <!-- Mathematically Regular Benzene Ring (R = 38px, all 6 sides equal) -->
    <polygon points="95,62 128,81 128,119 95,138 62,119 62,81" fill="none" stroke="#f8fafc" stroke-width="2" />
    <circle cx="95" cy="100" r="21.5" fill="none" stroke="#f8fafc" stroke-width="1.5" />
    
    <!-- NO2 at C2 (top right) -->
    <line x1="128" y1="81" x2="144" y2="65" stroke="#94a3b8" stroke-width="1.8" />
    <text x="148" y="61" fill="#f43f5e" font-size="12" font-weight="bold">NO₂</text>
    
    <!-- Hydrazine Group (-NH-NH2) at C1 -->
    <line x1="128" y1="100" x2="152" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="162" y="104" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">N</text>
    <line x1="162" y1="110" x2="162" y2="124" stroke="#94a3b8" stroke-width="1.5" />
    <text x="162" y="136" fill="#f8fafc" font-size="11" text-anchor="middle">H</text>
    
    <line x1="172" y1="100" x2="192" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="210" y="104" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">NH₂</text>
  </g>

  <!-- Plus Sign -->
  <text x="245" y="114" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">+</text>

  <!-- 2. Carbonyl Reactant (Propanal) -->
  <g transform="translate(265, 10)">
    <text x="15" y="104" fill="#f43f5e" font-size="14" font-weight="bold">O</text>
    <line x1="28" y1="96" x2="48" y2="96" stroke="#94a3b8" stroke-width="2" />
    <line x1="28" y1="102" x2="48" y2="102" stroke="#94a3b8" stroke-width="2" />
    
    <text x="56" y="104" fill="#f8fafc" font-size="14" font-weight="bold">C</text>
    <line x1="56" y1="110" x2="56" y2="125" stroke="#94a3b8" stroke-width="1.5" />
    <text x="56" y="137" fill="#f8fafc" font-size="11" text-anchor="middle">H</text>
    
    <line x1="66" y1="95" x2="85" y2="82" stroke="#94a3b8" stroke-width="1.8" />
    <text x="115" y="80" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CH₂CH₃</text>
  </g>

  <!-- 3. Reaction Arrow -->
  <g transform="translate(405, 10)">
    <line x1="0" y1="100" x2="45" y2="100" stroke="#f59e0b" stroke-width="2.2" marker-end="url(#arrow-amber)" />
    <text x="22" y="90" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">- H₂O</text>
  </g>

  <!-- 4. Product: 2,4-Dinitrophenylhydrazone Derivative -->
  <g transform="translate(480, 10)">
    <!-- O2N at C4 (left) -->
    <text x="30" y="104" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="end">O₂N</text>
    <line x1="34" y1="100" x2="62" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    
    <!-- Regular Benzene Ring (relative center = 95, 100) -->
    <polygon points="95,62 128,81 128,119 95,138 62,119 62,81" fill="none" stroke="#f8fafc" stroke-width="2" />
    <circle cx="95" cy="100" r="21.5" fill="none" stroke="#f8fafc" stroke-width="1.5" />
    
    <!-- NO2 at C2 (top right) -->
    <line x1="128" y1="81" x2="144" y2="65" stroke="#94a3b8" stroke-width="1.8" />
    <text x="148" y="61" fill="#f43f5e" font-size="12" font-weight="bold">NO₂</text>
    
    <!-- N-H link at C1 -->
    <line x1="128" y1="100" x2="152" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="162" y="104" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">N</text>
    <line x1="162" y1="110" x2="162" y2="124" stroke="#94a3b8" stroke-width="1.5" />
    <text x="162" y="136" fill="#f8fafc" font-size="11" text-anchor="middle">H</text>
    
    <!-- N=C Double Bond -->
    <line x1="172" y1="96" x2="194" y2="96" stroke="#38bdf8" stroke-width="1.8" />
    <line x1="172" y1="104" x2="194" y2="104" stroke="#38bdf8" stroke-width="1.8" />
    <text x="204" y="104" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">N</text>
    
    <line x1="214" y1="100" x2="234" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="244" y="104" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
    
    <!-- Attachments to C (H down, CH2CH3 up) -->
    <line x1="244" y1="110" x2="244" y2="125" stroke="#94a3b8" stroke-width="1.5" />
    <text x="244" y="137" fill="#f8fafc" font-size="11" text-anchor="middle">H</text>
    
    <line x1="252" y1="92" x2="270" y2="78" stroke="#94a3b8" stroke-width="1.8" />
    <text x="300" y="76" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">CH₂CH₃</text>
  </g>

  <!-- + H2O Product -->
  <text x="830" y="114" fill="#f8fafc" font-size="13.5" font-weight="bold" text-anchor="middle">+ H₂O</text>

  <!-- Bottom Result Banner -->
  <rect x="170" y="168" width="580" height="24" rx="4" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5" />
  <text x="460" y="184" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Bright Yellow / Orange Crystalline Precipitate (2,4-dinitrophenylhydrazone derivative)</text>

  <defs>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
  </defs>
</svg>`;

const stereochemicalAttackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 340" class="w-full max-w-[900px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Side: Planar Carbonyl & Above/Below Attack -->
  <g transform="translate(10, 50)">
    <!-- Carbonyl Group (Trigonal Planar representation) -->
    <text x="150" y="115" fill="#f8fafc" font-size="18" font-weight="bold" text-anchor="middle">C</text>
    <text x="150" y="90" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">δ⁺</text>
    
    <!-- C=O Double Bond -->
    <line x1="165" y1="110" x2="210" y2="110" stroke="#94a3b8" stroke-width="2.5" />
    <line x1="165" y1="118" x2="210" y2="118" stroke="#94a3b8" stroke-width="2.5" />
    <text x="225" y="119" fill="#ef4444" font-size="18" font-weight="bold" text-anchor="middle">O</text>
    <text x="225" y="90" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">δ⁻</text>
    
    <!-- Planar Carbonyl plane representation (dashed outline) -->
    <polygon points="90,60 260,60 230,170 60,170" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4,4" />
    <text x="160" y="162" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Trigonal Planar Plane</text>
    
    <!-- CH3 (Out of plane - Wedge representation) -->
    <polygon points="138,122 100,148 105,152" fill="#38bdf8" />
    <text x="85" y="162" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CH₃</text>
    
    <!-- H (Into plane - Dash representation) -->
    <line x1="138" y1="108" x2="110" y2="85" stroke="#f8fafc" stroke-width="2" stroke-dasharray="3,3" />
    <text x="100" y="78" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>

    <!-- Attack 1: From ABOVE the plane -->
    <path d="M 150,35 Q 130,55 142,90" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3,2" marker-end="url(#arrow-yellow)" />
    <!-- Nucleophile CN- (above) -->
    <text x="142" y="27" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">NC:</text>
    <text x="156" y="20" fill="#38bdf8" font-size="10" font-weight="bold">⁻</text>
    <text x="120" y="42" fill="#fbbf24" font-size="10" font-weight="bold">Attack from Above (50%)</text>
    
    <!-- Attack 2: From BELOW the plane -->
    <path d="M 150,195 Q 130,175 142,140" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="3,2" marker-end="url(#arrow-yellow)" />
    <!-- Nucleophile CN- (below) -->
    <text x="142" y="212" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">NC:</text>
    <text x="156" y="205" fill="#38bdf8" font-size="10" font-weight="bold">⁻</text>
    <text x="120" y="190" fill="#fbbf24" font-size="10" font-weight="bold">Attack from Below (50%)</text>
  </g>
  
  <!-- Right arrows pointing to Enantiomers (diverging y-pathway) -->
  <g transform="translate(290, 50)">
    <!-- Pointing up-right to Enantiomer A -->
    <path d="M 0,90 Q 30,70 60,40" fill="none" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-gray)" />
    <!-- Pointing down-right to Enantiomer B -->
    <path d="M 0,130 Q 30,150 60,180" fill="none" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow-gray)" />
  </g>
  
  <!-- Right Side: Vertically Stacked Enantiomer Products -->
  <g transform="translate(400, 15)">
    <!-- Enantiomer A (Top Product) -->
    <g transform="translate(30, 0)">
      <text x="90" y="60" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
      <!-- CN pointing up -->
      <line x1="90" y1="46" x2="90" y2="24" stroke="#94a3b8" stroke-width="2" />
      <text x="90" y="18" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CN</text>
      <!-- OH pointing down -->
      <line x1="90" y1="66" x2="90" y2="85" stroke="#94a3b8" stroke-width="2" />
      <text x="90" y="98" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">OH</text>
      <!-- Wedge CH3 -->
      <polygon points="82,62 55,75 58,79" fill="#38bdf8" />
      <text x="45" y="86" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CH₃</text>
      <!-- Dash H -->
      <line x1="98" y1="58" x2="120" y2="72" stroke="#f8fafc" stroke-width="1.8" stroke-dasharray="3,3" />
      <text x="126" y="82" fill="#f8fafc" font-size="12" text-anchor="middle">H</text>
      
      <text x="155" y="64" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="start">Enantiomer A (50%)</text>
    </g>

    <!-- Enantiomer B (Bottom Product) -->
    <g transform="translate(30, 130)">
      <text x="90" y="60" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
      <!-- CN pointing up -->
      <line x1="90" y1="46" x2="90" y2="24" stroke="#94a3b8" stroke-width="2" />
      <text x="90" y="18" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CN</text>
      <!-- OH pointing down -->
      <line x1="90" y1="66" x2="90" y2="85" stroke="#94a3b8" stroke-width="2" />
      <text x="90" y="98" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">OH</text>
      <!-- Dash CH3 (swapped for optical isomerism) -->
      <line x1="82" y1="58" x2="60" y2="72" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3,3" />
      <text x="50" y="84" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CH₃</text>
      <!-- Wedge H -->
      <polygon points="98,62 125,75 122,79" fill="#f8fafc" />
      <text x="135" y="86" fill="#f8fafc" font-size="12" text-anchor="middle">H</text>
      
      <text x="155" y="64" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="start">Enantiomer B (50%)</text>
    </g>
    
    <!-- Equimolar Racemic Mixture Label -->
    <rect x="-10" y="270" width="300" height="26" rx="4" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1" stroke-opacity="0.4" />
    <text x="140" y="287" fill="#34d399" font-size="11.5" font-weight="bold" text-anchor="middle">50:50 Racemic Mixture (Optically Inactive)</text>
  </g>
  
  <defs>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#fbbf24" />
    </marker>
    <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
  </defs>
</svg>`;

const propanoneDisplayedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 180" class="w-full max-w-[320px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Left Carbon (C1) -->
  <text x="80" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  <text x="40" y="95" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="50" y1="90" x2="70" y2="90" stroke="#94a3b8" stroke-width="2" />
  
  <text x="80" y="45" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="80" y1="52" x2="80" y2="80" stroke="#94a3b8" stroke-width="2" />
  
  <text x="80" y="145" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="80" y1="102" x2="80" y2="130" stroke="#94a3b8" stroke-width="2" />
  
  <!-- C-C Bond -->
  <line x1="92" y1="90" x2="148" y2="90" stroke="#94a3b8" stroke-width="2" />

  <!-- Middle Carbonyl Carbon (C2) -->
  <text x="160" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  
  <!-- C=O Bond -->
  <line x1="157" y1="80" x2="157" y2="52" stroke="#ef4444" stroke-width="2" />
  <line x1="163" y1="80" x2="163" y2="52" stroke="#ef4444" stroke-width="2" />
  <text x="160" y="45" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">O</text>
  
  <!-- C-C Bond -->
  <line x1="172" y1="90" x2="228" y2="90" stroke="#94a3b8" stroke-width="2" />

  <!-- Right Carbon (C3) -->
  <text x="240" y="95" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
  <text x="280" y="95" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="252" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="2" />
  
  <text x="240" y="45" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="240" y1="52" x2="240" y2="80" stroke="#94a3b8" stroke-width="2" />
  
  <text x="240" y="145" fill="#f8fafc" font-size="14" text-anchor="middle">H</text>
  <line x1="240" y1="102" x2="240" y2="130" stroke="#94a3b8" stroke-width="2" />
</svg>`;

const propanoneSolubilitySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" class="w-full max-w-[440px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Propanone Molecule -->
  <g transform="translate(40, 20)">
    <!-- Central Carbon -->
    <text x="55" y="100" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">C</text>
    <text x="40" y="100" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>
    
    <!-- Methyl Groups -->
    <text x="55" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
    <line x1="55" y1="52" x2="55" y2="82" stroke="#94a3b8" stroke-width="1.8" />
    
    <text x="55" y="155" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">CH₃</text>
    <line x1="55" y1="108" x2="55" y2="138" stroke="#94a3b8" stroke-width="1.8" />
    
    <!-- C=O bond -->
    <line x1="68" y1="96" x2="114" y2="96" stroke="#94a3b8" stroke-width="2" />
    <line x1="68" y1="102" x2="114" y2="102" stroke="#94a3b8" stroke-width="2" />
    
    <!-- Carbonyl Oxygen -->
    <text x="128" y="105" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">O</text>
    <text x="128" y="130" fill="#ef4444" font-size="11" text-anchor="middle">δ-</text>
    
    <!-- Lone pair (below O) -->
    <circle cx="125" cy="115" r="1.5" fill="#f8fafc" />
    <circle cx="131" cy="115" r="1.5" fill="#f8fafc" />
    
    <!-- Lone pair (to the right of O, initiating hydrogen bond) -->
    <text x="148" y="105" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">:</text>
  </g>
  
  <!-- Hydrogen Bond (Straight horizontal dashed line) -->
  <line x1="202" y1="120" x2="295" y2="120" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
  
  <!-- "Hydrogen bond" label and arrow pointing to it -->
  <text x="245" y="32" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">(Hydrogen bond)</text>
  <path d="M 245,45 Q 248,72 248,98" fill="none" stroke="#f59e0b" stroke-width="1" />
  <path d="M 248,100 L 245,94 L 251,94 Z" fill="#f59e0b" />
  
  <!-- Water Molecule (collinear H-O aligned with hydrogen bond) -->
  <g transform="translate(310, 20)">
    <!-- Hydrogen bonded to oxygen -->
    <text x="10" y="105" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H</text>
    <text x="10" y="122" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>
    
    <!-- Covalent O-H bond (aligned horizontally on y=100) -->
    <line x1="22" y1="100" x2="62" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    
    <!-- Oxygen of Water -->
    <text x="75" y="100" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">O</text>
    <text x="96" y="122" fill="#ef4444" font-size="11" text-anchor="middle">δ-</text>
    
    <!-- Lone pair to the right of Water Oxygen -->
    <text x="90" y="100" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">:</text>
    
    <!-- Lone pair on top of Water Oxygen -->
    <circle cx="72" cy="82" r="1.5" fill="#f8fafc" />
    <circle cx="78" cy="82" r="1.5" fill="#f8fafc" />
    
    <!-- Second O-H covalent bond (pointing down-left) -->
    <line x1="72" y1="108" x2="57" y2="140" stroke="#94a3b8" stroke-width="1.8" />
    <text x="50" y="155" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H</text>
    <text x="72" y="155" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>
  </g>
</svg>`;

const carboxylateDelocalisationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 260" class="w-full max-w-[860px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="curly-arrow-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
      <path d="M 1 1.5 L 9 5 L 1 8.5 z" fill="#f43f5e" />
    </marker>
    <marker id="arrow-hybrid" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#94a3b8" />
    </marker>
  </defs>

  <text x="50%" y="26" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Carboxylate Ion Resonance &amp; Delocalisation (RCOO⁻)</text>
  
  <!-- ============ STRUCTURE 1 (Left Form) ============ -->
  <g transform="translate(35, 52)">
    <!-- R - C skeleton -->
    <text x="20" y="82" fill="#f8fafc" font-size="18" font-weight="bold">R</text>
    <line x1="42" y1="76" x2="72" y2="76" stroke="#94a3b8" stroke-width="2.2" />
    <text x="82" y="82" fill="#f8fafc" font-size="18" font-weight="bold">C</text>
    
    <!-- C=O Double Bond (Top) -->
    <line x1="96" y1="64" x2="128" y2="34" stroke="#f43f5e" stroke-width="2.2" />
    <line x1="102" y1="70" x2="134" y2="40" stroke="#f43f5e" stroke-width="2.2" />
    <text x="140" y="32" fill="#f43f5e" font-size="18" font-weight="bold">O</text>
    
    <!-- Lone pairs on Top O: 2 pairs -->
    <circle cx="140" cy="10" r="1.9" fill="#f43f5e" />
    <circle cx="148" cy="10" r="1.9" fill="#f43f5e" />
    <circle cx="160" cy="24" r="1.9" fill="#f43f5e" />
    <circle cx="160" cy="32" r="1.9" fill="#f43f5e" />
    
    <!-- C-O⁻ Single Bond (Bottom) -->
    <line x1="98" y1="84" x2="130" y2="114" stroke="#38bdf8" stroke-width="2.2" />
    <text x="140" y="130" fill="#38bdf8" font-size="18" font-weight="bold">O</text>
    <text x="156" y="112" fill="#38bdf8" font-size="16" font-weight="bold">−</text>
    
    <!-- Lone pairs on Bottom O⁻: 3 pairs -->
    <circle cx="160" cy="122" r="1.9" fill="#38bdf8" />
    <circle cx="160" cy="130" r="1.9" fill="#38bdf8" />
    <circle cx="140" cy="144" r="1.9" fill="#38bdf8" />
    <circle cx="148" cy="144" r="1.9" fill="#38bdf8" />
    <circle cx="122" cy="134" r="2.2" fill="#f43f5e" />
    <circle cx="128" cy="140" r="2.2" fill="#f43f5e" />
    
    <!-- Curved Arrow 1 -->
    <path d="M 112,135 Q 92,126 104,96" fill="none" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#curly-arrow-red)" />
    <!-- Curved Arrow 2 -->
    <path d="M 112,50 Q 110,24 134,16" fill="none" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#curly-arrow-red)" />
  </g>
  
  <!-- ============ RESONANCE DOUBLE ARROW ============ -->
  <g transform="translate(230, 128)">
    <line x1="5" y1="0" x2="50" y2="0" stroke="#f59e0b" stroke-width="2.5" />
    <path d="M 0,0 L 10,-5.5 L 10,5.5 Z" fill="#f59e0b" />
    <path d="M 55,0 L 45,-5.5 L 45,5.5 Z" fill="#f59e0b" />
  </g>
  
  <!-- ============ STRUCTURE 2 (Middle Form) ============ -->
  <g transform="translate(315, 52)">
    <!-- R - C skeleton -->
    <text x="20" y="82" fill="#f8fafc" font-size="18" font-weight="bold">R</text>
    <line x1="42" y1="76" x2="72" y2="76" stroke="#94a3b8" stroke-width="2.2" />
    <text x="82" y="82" fill="#f8fafc" font-size="18" font-weight="bold">C</text>
    
    <!-- C-O⁻ Single Bond (Top) -->
    <line x1="98" y1="68" x2="130" y2="38" stroke="#38bdf8" stroke-width="2.2" />
    <text x="140" y="32" fill="#38bdf8" font-size="18" font-weight="bold">O</text>
    <text x="156" y="14" fill="#38bdf8" font-size="16" font-weight="bold">−</text>
    
    <!-- Lone pairs on Top O⁻: 3 pairs -->
    <circle cx="160" cy="24" r="1.9" fill="#38bdf8" />
    <circle cx="160" cy="32" r="1.9" fill="#38bdf8" />
    <circle cx="140" cy="10" r="1.9" fill="#38bdf8" />
    <circle cx="148" cy="10" r="1.9" fill="#38bdf8" />
    <circle cx="122" cy="18" r="2.2" fill="#f43f5e" />
    <circle cx="128" cy="12" r="2.2" fill="#f43f5e" />
    
    <!-- C=O Double Bond (Bottom) -->
    <line x1="96" y1="88" x2="128" y2="118" stroke="#f43f5e" stroke-width="2.2" />
    <line x1="102" y1="82" x2="134" y2="112" stroke="#f43f5e" stroke-width="2.2" />
    <text x="140" y="130" fill="#f43f5e" font-size="18" font-weight="bold">O</text>
    
    <!-- Lone pairs on Bottom O: 2 pairs -->
    <circle cx="140" cy="144" r="1.9" fill="#f43f5e" />
    <circle cx="148" cy="144" r="1.9" fill="#f43f5e" />
    <circle cx="160" cy="122" r="1.9" fill="#f43f5e" />
    <circle cx="160" cy="130" r="1.9" fill="#f43f5e" />
    
    <!-- Curved Arrow 1 -->
    <path d="M 112,17 Q 92,26 104,56" fill="none" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#curly-arrow-red)" />
    <!-- Curved Arrow 2 -->
    <path d="M 112,102 Q 110,128 134,136" fill="none" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#curly-arrow-red)" />
  </g>
  
  <!-- ============ ARROW TO HYBRID ============ -->
  <g transform="translate(520, 128)">
    <line x1="0" y1="0" x2="48" y2="0" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-hybrid)" />
  </g>

  <!-- ============ RESONANCE HYBRID (Right Form) ============ -->
  <g transform="translate(600, 52)">
    <text x="20" y="82" fill="#f8fafc" font-size="18" font-weight="bold">R</text>
    <line x1="42" y1="76" x2="72" y2="76" stroke="#94a3b8" stroke-width="2.2" />
    <text x="82" y="82" fill="#f8fafc" font-size="18" font-weight="bold">C</text>
    <text x="82" y="100" fill="#38bdf8" font-size="11" font-weight="bold">δ⁺</text>
    
    <!-- Solid sigma + dashed pi to Top O -->
    <line x1="98" y1="66" x2="128" y2="36" stroke="#10b981" stroke-width="2" />
    <line x1="104" y1="60" x2="134" y2="30" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3" />
    <text x="140" y="32" fill="#10b981" font-size="18" font-weight="bold">O</text>
    <text x="158" y="16" fill="#10b981" font-size="13" font-weight="bold">δ⁻</text>
    
    <!-- Solid sigma + dashed pi to Bottom O -->
    <line x1="98" y1="86" x2="128" y2="116" stroke="#10b981" stroke-width="2" />
    <line x1="104" y1="92" x2="134" y2="122" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3" />
    <text x="140" y="130" fill="#10b981" font-size="18" font-weight="bold">O</text>
    <text x="158" y="136" fill="#10b981" font-size="13" font-weight="bold">δ⁻</text>

    <!-- Delocalised pi cloud arc -->
    <path d="M 134,40 Q 110,76 134,112" fill="none" stroke="#10b981" stroke-width="1.8" stroke-dasharray="2.5 2.5" />

    <!-- Central Negative Charge (-) -->
    <text x="145" y="84" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">−</text>
  </g>
  
  <!-- Footer Badge -->
  <rect x="180" y="210" width="500" height="32" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1" stroke-opacity="0.3" />
  <text x="50%" y="231" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">Equal C−O bond lengths &amp; negative charge split evenly (−½ on each oxygen)</text>
</svg>`;

const carboxylicAcidDimerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 220" class="w-full max-w-[620px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Hydrogen-Bonded Carboxylic Acid Dimer (Ethanoic Acid Dimer)</text>

  <g transform="translate(40, 45)">
    <!-- Left Molecule (Ethanoic acid) -->
    <!-- Methyl CH3 -->
    <text x="30" y="75" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="30" y1="80" x2="30" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="30" y="145" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="30" y1="118" x2="30" y2="132" stroke="#94a3b8" stroke-width="1.8" />
    <text x="0" y="114" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="10" y1="110" x2="20" y2="110" stroke="#94a3b8" stroke-width="1.8" />
    <text x="30" y="115" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    
    <line x1="42" y1="110" x2="72" y2="110" stroke="#94a3b8" stroke-width="2" />
    <text x="85" y="115" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>

    <!-- Top: C=O -->
    <line x1="82" y1="98" x2="82" y2="70" stroke="#ef4444" stroke-width="2" />
    <line x1="88" y1="98" x2="88" y2="70" stroke="#ef4444" stroke-width="2" />
    <text x="85" y="60" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="70" y="55" fill="#ef4444" font-size="11">δ-</text>

    <!-- Bottom: C-O-H -->
    <line x1="85" y1="122" x2="85" y2="142" stroke="#38bdf8" stroke-width="2" />
    <text x="85" y="158" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="70" y="165" fill="#ef4444" font-size="11">δ-</text>
    <line x1="97" y1="154" x2="125" y2="154" stroke="#94a3b8" stroke-width="1.8" />
    <text x="135" y="158" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">H</text>
    <text x="135" y="172" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>

    <!-- Hydrogen Bonds (Dotted lines) -->
    <!-- Top H-bond: O(left)...H-O(right) -->
    <line x1="100" y1="56" x2="190" y2="56" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 4" />
    <!-- Bottom H-bond: H(left)...O(right) -->
    <line x1="147" y1="154" x2="235" y2="154" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 4" />

    <!-- Right Molecule (Inverted Ethanoic acid) -->
    <text x="200" y="60" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">H</text>
    <text x="200" y="45" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>
    <line x1="210" y1="56" x2="238" y2="56" stroke="#94a3b8" stroke-width="1.8" />
    <text x="250" y="60" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="265" y="55" fill="#ef4444" font-size="11">δ-</text>
    <line x1="250" y1="70" x2="250" y2="98" stroke="#38bdf8" stroke-width="2" />

    <text x="250" y="158" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="265" y="165" fill="#ef4444" font-size="11">δ-</text>
    <line x1="247" y1="145" x2="247" y2="122" stroke="#ef4444" stroke-width="2" />
    <line x1="253" y1="145" x2="253" y2="122" stroke="#ef4444" stroke-width="2" />

    <text x="250" y="115" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    <line x1="262" y1="110" x2="292" y2="110" stroke="#94a3b8" stroke-width="2" />
    <text x="305" y="115" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>

    <!-- Methyl CH3 on right -->
    <text x="305" y="75" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="305" y1="80" x2="305" y2="100" stroke="#94a3b8" stroke-width="1.8" />
    <text x="305" y="145" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="305" y1="118" x2="305" y2="132" stroke="#94a3b8" stroke-width="1.8" />
    <text x="335" y="114" fill="#f8fafc" font-size="15" text-anchor="middle">H</text>
    <line x1="315" y1="110" x2="325" y2="110" stroke="#94a3b8" stroke-width="1.8" />
  </g>
  <text x="50%" y="195" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">Stable Dimer: Explains High Boiling Point &amp; Mass Spec Peak at m/z = 120</text>
</svg>`;

const carboxylicAcidWaterHbondsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 230" class="w-full max-w-[680px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="28" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Carboxylic Acid Hydrogen Bonding with Water</text>

  <g transform="translate(180, 50)">
    <!-- Ethanoic Acid Molecule -->
    <text x="40" y="95" fill="#f8fafc" font-size="16" font-weight="bold">CH₃</text>
    <line x1="75" y1="90" x2="105" y2="90" stroke="#94a3b8" stroke-width="2" />
    <text x="115" y="95" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>

    <!-- C=O Top -->
    <line x1="112" y1="78" x2="112" y2="52" stroke="#ef4444" stroke-width="2" />
    <line x1="118" y1="78" x2="118" y2="52" stroke="#ef4444" stroke-width="2" />
    <text x="115" y="42" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="96" y="38" fill="#ef4444" font-size="11">δ-</text>

    <!-- C-O-H Bottom -->
    <line x1="115" y1="102" x2="115" y2="125" stroke="#38bdf8" stroke-width="2" />
    <text x="115" y="140" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="96" y="145" fill="#ef4444" font-size="11">δ-</text>
    <line x1="126" y1="135" x2="152" y2="135" stroke="#94a3b8" stroke-width="1.8" />
    <text x="162" y="140" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">H</text>
    <text x="162" y="155" fill="#38bdf8" font-size="11" text-anchor="middle">δ+</text>

    <!-- Water 1: H-O-H hydrogen-bonded to C=O -->
    <line x1="128" y1="38" x2="200" y2="38" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 4" />
    <text x="210" y="42" fill="#f8fafc" font-size="15" font-weight="bold">H</text>
    <text x="210" y="26" fill="#38bdf8" font-size="11">δ+</text>
    <line x1="222" y1="38" x2="245" y2="38" stroke="#94a3b8" stroke-width="1.8" />
    <text x="255" y="42" fill="#38bdf8" font-size="15" font-weight="bold">O</text>
    <line x1="262" y1="44" x2="278" y2="60" stroke="#94a3b8" stroke-width="1.8" />
    <text x="285" y="70" fill="#f8fafc" font-size="15">H</text>

    <!-- Water 2: H-O-H hydrogen-bonded from Acid O-H -->
    <line x1="174" y1="135" x2="240" y2="135" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 4" />
    <text x="252" y="140" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <text x="252" y="122" fill="#ef4444" font-size="11" text-anchor="middle">δ-</text>
    <line x1="260" y1="130" x2="278" y2="115" stroke="#94a3b8" stroke-width="1.8" />
    <text x="285" y="115" fill="#f8fafc" font-size="15">H</text>
    <line x1="260" y1="142" x2="278" y2="155" stroke="#94a3b8" stroke-width="1.8" />
    <text x="285" y="165" fill="#f8fafc" font-size="15">H</text>
  </g>
  <text x="50%" y="205" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Both C=O and O-H groups form hydrogen bonds with water (Fully miscible for C1–C4)</text>
</svg>`;

const methanoicAcidDisplayedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" class="w-full max-w-[340px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <g transform="translate(40, 20)">
    <text x="40" y="105" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">H</text>
    <line x1="52" y1="100" x2="98" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="110" y="105" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    
    <line x1="107" y1="88" x2="107" y2="48" stroke="#ef4444" stroke-width="2" />
    <line x1="113" y1="88" x2="113" y2="48" stroke="#ef4444" stroke-width="2" />
    <text x="110" y="38" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    
    <line x1="122" y1="100" x2="162" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="175" y="105" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <line x1="188" y1="100" x2="218" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="230" y="105" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
  </g>
  <text x="50%" y="175" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">Methanoic Acid (HCOOH)</text>
</svg>`;

const ethanedioicAcidDisplayedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 210" class="w-full max-w-[420px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <g transform="translate(30, 25)">
    <text x="20" y="105" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
    <line x1="32" y1="100" x2="62" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="75" y="105" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <line x1="88" y1="100" x2="128" y2="100" stroke="#94a3b8" stroke-width="2" />
    
    <text x="140" y="105" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    <line x1="137" y1="88" x2="137" y2="48" stroke="#ef4444" stroke-width="2" />
    <line x1="143" y1="88" x2="143" y2="48" stroke="#ef4444" stroke-width="2" />
    <text x="140" y="38" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    
    <line x1="152" y1="100" x2="208" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="220" y="105" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    
    <line x1="217" y1="112" x2="217" y2="152" stroke="#ef4444" stroke-width="2" />
    <line x1="223" y1="112" x2="223" y2="152" stroke="#ef4444" stroke-width="2" />
    <text x="220" y="170" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    
    <line x1="232" y1="100" x2="272" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="285" y="105" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>
    <line x1="298" y1="100" x2="328" y2="100" stroke="#94a3b8" stroke-width="2" />
    <text x="340" y="105" fill="#f8fafc" font-size="16" text-anchor="middle">H</text>
  </g>
  <text x="50%" y="185" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold">Ethanedioic Acid (HOOC-COOH)</text>
</svg>`;

const polyesterRepeatUnitSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 200" class="w-full max-w-[500px] h-auto mx-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="26" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Polymer Repeat Unit: Ethanedioic acid + Butane-2,3-diol</text>

  <g transform="translate(30, 40)">
    <!-- Left bracket and extending bond -->
    <text x="10" y="80" fill="#94a3b8" font-size="28" font-weight="bold">[</text>
    <line x1="20" y1="75" x2="45" y2="75" stroke="#38bdf8" stroke-width="2" />

    <!-- C1=O (from ethanedioic acid) -->
    <text x="55" y="80" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    <line x1="55" y1="65" x2="55" y2="40" stroke="#ef4444" stroke-width="2" />
    <line x1="61" y1="65" x2="61" y2="40" stroke="#ef4444" stroke-width="2" />
    <text x="58" y="32" fill="#ef4444" font-size="15" font-weight="bold" text-anchor="middle">O</text>
    
    <line x1="67" y1="75" x2="98" y2="75" stroke="#94a3b8" stroke-width="2" />

    <!-- C2=O (from ethanedioic acid) -->
    <text x="110" y="80" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">C</text>
    <line x1="110" y1="65" x2="110" y2="40" stroke="#ef4444" stroke-width="2" />
    <line x1="116" y1="65" x2="116" y2="40" stroke="#ef4444" stroke-width="2" />
    <text x="113" y="32" fill="#ef4444" font-size="15" font-weight="bold" text-anchor="middle">O</text>

    <!-- Ester linkage oxygen (O-1) -->
    <line x1="122" y1="75" x2="152" y2="75" stroke="#38bdf8" stroke-width="2" />
    <text x="165" y="80" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>

    <!-- CH(CH3) (C2 of diol) -->
    <line x1="178" y1="75" x2="208" y2="75" stroke="#94a3b8" stroke-width="2" />
    <text x="225" y="80" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">CH</text>
    <line x1="225" y1="62" x2="225" y2="42" stroke="#94a3b8" stroke-width="1.8" />
    <text x="225" y="34" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">CH₃</text>

    <!-- CH(CH3) (C3 of diol) -->
    <line x1="242" y1="75" x2="278" y2="75" stroke="#94a3b8" stroke-width="2" />
    <text x="295" y="80" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">CH</text>
    <line x1="295" y1="62" x2="295" y2="42" stroke="#94a3b8" stroke-width="1.8" />
    <text x="295" y="34" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">CH₃</text>

    <!-- Ester linkage oxygen (O-2) -->
    <line x1="312" y1="75" x2="342" y2="75" stroke="#38bdf8" stroke-width="2" />
    <text x="355" y="80" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">O</text>

    <!-- Extending bond and right bracket -->
    <line x1="368" y1="75" x2="395" y2="75" stroke="#38bdf8" stroke-width="2" />
    <text x="400" y="80" fill="#94a3b8" font-size="28" font-weight="bold">]</text>
    <text x="412" y="92" fill="#38bdf8" font-size="14" font-weight="bold">n</text>
  </g>
  
  <text x="50%" y="175" text-anchor="middle" fill="#10b981" font-size="11.5" font-weight="bold">Repeat Unit: [-C(=O)-C(=O)-O-CH(CH₃)-CH(CH₃)-O-]n</text>
</svg>`;

export const parts: LessonPart[] = [
  {
    id: 'chirality-optical-isomerism-u4-l5',
    title: 'Chirality & Optical Activity',
    type: 'text',
    content: `
> [!NOTE]
> ### 🗂️ Different Types of Isomerism
> Isomerism is broadly divided into two main categories:
> * **Structural Isomerism:** Compounds with the same molecular formula but different structural formulae. This includes:
>    * *Chain Isomerism:* Different branching patterns in the carbon skeleton.
>    * *Position Isomerism:* Functional group attached to different carbon atoms.
>    * *Functional Group Isomerism:* Different functional groups present (e.g., aldehydes vs ketones).
> * **Stereoisomerism:** Compounds with the same structural formula but their atoms are arranged differently in three dimensions:
>    * *Geometric Isomerism ($E$-$Z$ / $cis$-$trans$):* Arises due to restricted rotation about a double bond (e.g., $\\\\text{C}=\\\\text{C}$).
>    * *Optical Isomerism (Chirality):* Arises in molecules containing a chiral centre, resulting in non-superimposable mirror images.

> [!IMPORTANT]
> ### 🪞 Chirality & Optical Activity
> * **Optical Activity:** The ability of a compound to rotate the plane of plane-polarised light.
> * **Chiral Centre (Asymmetric Carbon):** A carbon atom bonded to **four different atoms or groups of atoms**. It is denoted with an asterisk (*). The presence of a chiral centre results in a molecule that lacks a plane of symmetry (asymmetric).
> * **Enantiomers (Optical Isomers):** Optical isomers that are non-superimposable mirror images of each other. They rotate the plane of polarised light by equal angles in opposite directions.
> * **Properties of Enantiomers:**
>    * *Physical Properties:* Identical (melting point, boiling point, density, etc.) **except** they rotate plane-polarised light in opposite directions (e.g., $+60°$ and $-60°$).
>    * *Chemical Properties:* Identical **except** when reacting with other chiral molecules (e.g., chiral enzymes or receptors in biological systems).
> * **Racemic Mixture (Racemate):** An equimolar mixture containing equal amounts (50:50 ratio) of both enantiomers. It is **optically inactive** because the opposite rotations cancel each other out.
> 
> > [!TIP]
> > ### ✏️ Exam Technique: Drawing Optical Isomers
> > 1. **Always use 3D wedge/dash representation:** Draw structures using tetrahedral shape representation (two lines in the plane, one wedge pointing towards you, and one dashed line pointing away from you).
> > 2. **Identify the chiral carbon:** Clearly mark the asymmetric carbon atom with an asterisk (*).
> > 3. **Draw the mirror image:** Draw a vertical mirror plane, and construct the second enantiomer as a reflected image of the first.
> 
> ${svgToken(chiralCentreSvg)}
> 
> ${svgToken(achiralMoleculeSvg)}

> [!BOX]
> ### 🔬 Plane-Polarised Light & Polarimetry
> * **Plane-Polarised Light:** Monochromatic light (light of a single frequency) whose waves oscillate in a single plane. Unpolarised light oscillates in all planes perpendicular to the direction of travel.
> * **Polarizer:** A filter that converts unpolarised light into plane-polarised light.
> * **Analyzer:** A second filter rotated to detect the angle and direction of optical rotation.
> * **Polarimeter Setup:** The sequence of components in a polarimeter measurement:
>   $$\\\\text{Monochromatic Light Source} \\\\rightarrow \\\\text{Polarizer} \\\\rightarrow \\\\text{Sample Tube} \\\\rightarrow \\\\text{Analyser} \\\\rightarrow \\\\text{Viewer}$$
>   * *Dextrorotatory ($+$):* Clockwise rotation of the plane of light.
>   * *Laevorotatory ($-$):* Anticlockwise rotation of the plane of light.
> ${svgToken(polarisationSvg)}
> 
> ${svgToken(polarimeterSetupSvg)}

> [!TIP]
> ### ⏱️ Optical Activity as a Kinetic Tool
> * **Tracking Reaction Rates:** Measuring changes in optical rotation over time using a **polarimeter** (polarimetry) can be used to track the rate of a reaction.
>    * This is highly useful because it allows continuous tracking in real-time without disturbing or quenching the reaction mixture.
> * **Determining Reaction Order:** Plotting optical rotation against time allows kinetic analysis (e.g., determining half-lives or drawing tangent lines to calculate initial rates) to determine the reaction order.

> [!BOX]
> ### 🍇 History & Tartaric Acid
> In the 19th century, Louis Pasteur studied tartaric acid (produced during grape fermentation) and noticed it was optically active (rotated polarised light).
> However, chemically synthesized tartaric acid was optically inactive.
> Pasteur manually separated the crystals of synthesized tartaric acid under a microscope into two types of crystals that were mirror images of each other.
> He dissolved each type separately and found that one rotated light clockwise, and the other rotated light anticlockwise, proving the existence of enantiomers and explaining that synthesized tartaric acid was a **racemic mixture**.
> 
> **Structures of Tartaric Acid Enantiomers:**
> $$\\\\text{HOOC-C}^{\\\\ast}\\\\text{H(OH)-C}^{\\\\ast}\\\\text{H(OH)-COOH}$$

> [!BOX]
> ### 📋 Analyzing Chirality in Organic Structures
> Let's analyze the following structures to determine if they possess chiral centres:
> 
> * **1. CBr₂ClF:** The central carbon atom is bonded to two bromine atoms. Since they are identical, there are only three different groups attached. Thus, there is **no chiral centre**.
> * **2. CH₃CHBrCH₂CH₃:** Carbon-2 is bonded to -H, -Br, -CH₃, and -CH₂CH₃. Since these four groups are entirely different, Carbon-2 is a **chiral centre**: **CH₃C\*HBrCH₂CH₃**
> * **3. CH₃CH₂CHBrCH₂CH₃:** Carbon-3 is bonded to -H, -Br, and two identical ethyl (-CH₂CH₃) groups. Thus, there is **no chiral centre**.
> * **4. CH₃CH₂CHBrCHBrCH₃:**
>    * Carbon-3 is bonded to -H, -Br, -CH₂CH₃, and -CHBrCH₃. These four groups are different, so Carbon-3 is a **chiral centre**.
>    * Carbon-4 is bonded to -H, -Br, -CH₃, and -CH₂CHBrCH₂CH₃. These four groups are different, so Carbon-4 is also a **chiral centre**.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Polariser
> **Question:** Outline how a polariser works.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. Unpolarised monochromatic light oscillates in all planes perpendicular to its direction of travel.
> > 2. A polariser consists of a material (like Polaroid) containing aligned long-chain molecules.
> > 3. It absorbs all components of light oscillations except those oscillating in a single specific plane.
> > 4. Consequently, only light oscillating in that single plane passes through, yielding plane-polarised light.

> [!EXAMPLE]
> #### 📝 Worked Example 2: Analyzing Enantiomer Mixtures
> **Question:** A dextrorotatory enantiomer has an optical rotation of $+43°$. A mixture of this enantiomer and its laevorotatory enantiomer has a rotation of $-10°$. What does this information indicate about the composition of this mixture?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce whether the mixture is racemic:** Since the net optical rotation is not $0°$, the mixture is **not racemic** (it is not an equimolar 50:50 mixture).
> > 2. **Deduce which enantiomer is in excess:** Since the net observed rotation is negative ($-10°$), the mixture contains an **excess of the laevorotatory ($-$) enantiomer**.
> > 3. **Quantitative Analysis (Calculating exact percentages):**
> >    * Let $x$ be the mole fraction of the laevorotatory enantiomer, and $(1-x)$ be the fraction of the dextrorotatory enantiomer.
> >    * Net rotation equation:
> >      $$x(-43) + (1-x)(+43) = -10$$
> >    * Solving for $x$:
> >      $$-43x + 43 - 43x = -10 \\\\implies -86x = -53 \\\\implies x \\\\approx 0.616 \\\\text{ (61.6\\%)}$$
> >    * Dextrorotatory fraction:
> >      $$1 - 0.616 = 0.384 \\\\text{ (38.4\\%)}$$
> >    * Thus, the mixture consists of approximately **61.6% of the laevorotatory enantiomer** and **38.4% of the dextrorotatory enantiomer**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Drawing 3D Enantiomers of Lactic Acid
> **Question:** Draw the 3D tetrahedral structures of the two enantiomers of 2-hydroxypropanoic acid (lactic acid) to show they are non-superimposable mirror images.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the chiral carbon and its four groups:**
> >    * The central carbon (Carbon-2) is bonded to four different groups: -H, -CH₃, -OH, and -COOH
> > 2. **Draw the first enantiomer in 3D:**
> >    * Place the chiral carbon in the centre.
> >    * Draw two bonds in the plane of the paper (-COOH pointing up, -CH₃ pointing down-left).
> >    * Draw a wedge for a group pointing towards you (-OH pointing down-right).
> >    * Draw a dashed bond for a group pointing away (-H pointing back).
> > 3. **Draw the mirror plane:**
> >    * Draw a vertical dashed line to represent the mirror.
> > 4. **Draw the reflected mirror image:**
> >    * Reflect the structure on the other side of the mirror plane so that the groups face the mirror (-OH wedge points down-left towards the mirror, -CH₃ points down-right away from the mirror).
> > 
> > ${svgToken(lacticAcidEnantiomersSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Chiral Centres in Amino Acids
> **Question:** Alanine is an amino acid with the structural formula CH₃CH(NH₂)COOH. Identify the chiral centre in alanine and explain why it is chiral.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze each carbon atom in the molecule:**
> >    * **Carbon-1 (carboxylic acid carbon):** Part of the -COOH group. It has a double bond to oxygen, so it is only bonded to three groups. It cannot be chiral.
> >    * **Carbon-3 (methyl carbon):** Part of the -CH₃ group. It is bonded to three identical hydrogen atoms, so it cannot be chiral.
> >    * **Carbon-2 (alpha carbon):** Bonded to four distinct groups: -H, -CH₃, -NH₂, and -COOH
> > 2. **Formulate the explanation:**
> >    * Carbon-2 is the chiral centre because it is bonded to four different atoms or groups of atoms.
> >    * This asymmetric arrangement means the molecule lacks a plane of symmetry, resulting in two non-superimposable mirror images (enantiomers).

> [!EXAMPLE]
> #### 📝 Worked Example 5: Chirality in Cyclic Molecules (Menthol & Cyclohexanes)
> **Question:** Consider the molecule 1-chloro-2-methylcyclohexane.
> 1) Determine the number of chiral centres in this molecule.
> 2) Explain how to test whether a ring carbon is a chiral centre by tracing paths around the ring.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Carbon-1 (bonded to -Cl):**
> >    * Group 1: -H
> >    * Group 2: -Cl
> >    * Group 3 (Clockwise pathway around ring): -CH(CH₃)-CH₂-CH₂-CH₂-CH₂-
> >    * Group 4 (Anticlockwise pathway around ring): -CH₂-CH₂-CH₂-CH₂-CH(CH₃)-
> >    * Since the clockwise and anticlockwise pathways around the ring encounter substituents at different positions, the two pathways are different. Thus, **Carbon-1 is a chiral centre**.
> > 2. **Analyze Carbon-2 (bonded to -CH₃):**
> >    * Group 1: -H
> >    * Group 2: -CH₃
> >    * Group 3 (Clockwise path): -CH₂-CH₂-CH₂-CH₂-CH(Cl)-
> >    * Group 4 (Anticlockwise path): -CH(Cl)-CH₂-CH₂-CH₂-CH₂-
> >    * Since the two ring pathways are different, **Carbon-2 is also a chiral centre**.
> > 3. **Analyze Carbons 3, 4, 5, and 6:**
> >    * Each of these ring carbons is bonded to two identical hydrogen atoms (-CH₂-), so none of them can be chiral centres.
> > 4. **Conclusion:** 1-chloro-2-methylcyclohexane contains exactly **2 chiral centres** (Carbon-1 and Carbon-2).

> [!EXAMPLE]
> #### 📝 Worked Example 6: Internal Symmetry & Meso Compounds
> **Question:** A sample of (2R,3S)-tartaric acid has two chiral carbon atoms with the structure HOOC-C*H(OH)-C*H(OH)-COOH, yet it is completely optically inactive and cannot be resolved into separate enantiomers. Explain why this molecule is optically inactive.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the molecular symmetry:**
> >    * Although the molecule contains two asymmetric chiral carbons (Carbon-2 and Carbon-3), both carbons are bonded to the exact same four groups (-H, -OH, -COOH, and -CH(OH)COOH).
> >    * The (2R,3S) stereoisomer has an **internal plane of symmetry** (mirror plane) passing directly between Carbon-2 and Carbon-3.
> > 2. **Explain the optical inactivity (Internal Compensation):**
> >    * The top half of the molecule is the exact mirror image of the bottom half.
> >    * The clockwise rotation of plane-polarised light caused by one chiral centre is exactly cancelled by the equal and opposite anticlockwise rotation caused by the other chiral centre within the same molecule (known as internal compensation).
> > 3. **Identify the isomer type:**
> >    * Such a stereoisomer is called a **meso compound** (meso-tartaric acid). Meso compounds are achiral overall despite having chiral centres.
`,
    keyPoints: [
      'A polariser converts unpolarised light into plane-polarised light by absorbing oscillations in all but one plane.',
      'A polarimeter measures the angle of rotation of plane-polarised light.',
      'An excess of one enantiomer over another results in a net optical rotation corresponding to the dominant isomer.',
      'Optical activity can be used as a kinetic tool to track reaction rates and determine reaction order by monitoring changes in optical rotation over time using a polarimeter.'
    ]
  },
  {
    id: 'optical-activity-reaction-mechanisms-u4-l5',
    title: 'Optical Activity & Reaction Mechanisms',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚡ Nucleophilic Substitution Mechanisms
> Nucleophilic substitution reactions of halogenoalkanes can proceed via two primary mechanisms:
> * **$S_N2$ (Substitution Nucleophilic Bimolecular):** A single-step mechanism where bond-forming and bond-breaking occur simultaneously.
> * **$S_N1$ (Substitution Nucleophilic Unimolecular):** A two-step mechanism involving the formation of a carbocation intermediate.
> * **Secondary Halogenoalkanes:** Can react via both $S_N1$ and $S_N2$ pathways, depending on the solvent, nucleophile concentration, and structure.
> * **Stereochemical Evidence:** The change in optical activity of the reactants and products provides definitive evidence of the reaction mechanism.

${svgToken(sn2StereochemistrySvg)}

${svgToken(sn1StereochemistrySvg)}

> [!IMPORTANT]
> ### ⚛️ The SN2 Mechanism & Stereochemical Inversion
> The SN2 mechanism operates primarily for primary halogenoalkanes:
> * **Bimolecular:** The rate-determining step involves both the nucleophile (e.g. $\\\\text{OH}^-$) and the halogenoalkane.
> * **Backside Attack:** The nucleophile attacks the carbon atom from the opposite side of the leaving group (the halogen atom) to minimize electrostatic repulsion.
> * **Transition State:** A high-energy intermediate forms where both the incoming nucleophile and leaving halogen are partially bonded to the carbon:
>   $$\\\\left[ \\\\text{HO} \\\\cdots \\\\text{C(R)(H)(R\\')} \\\\cdots \\\\text{Br} \\\\right]^-$$
> * **Walden Inversion:** As the carbon-halogen bond breaks and the carbon-nucleophile bond forms, the other three groups attached to the carbon atom are pushed through, inverting the configuration (like an umbrella turning inside out in a gale).
> * **Optical Activity Outcome:** If the reactant is a single optically active enantiomer, the product will be a **single enantiomer with inverted configuration** (Walden inversion). The optical activity is retained but the direction of rotation may change.

> [!IMPORTANT]
> ### ⚛️ The SN1 Mechanism & Racemisation
> The SN1 mechanism operates primarily for tertiary halogenoalkanes:
> * **Step 1: Carbocation Formation (Rate-Determining):** The carbon-halogen bond breaks heterolytically, releasing a halide ion and forming a carbocation intermediate:
>   $$\\\\text{R}_3\\\\text{C-Br} \\\\rightarrow \\\\text{R}_3\\\\text{C}^+ + \\\\text{Br}^-$$
> * **Planar Intermediate:** The carbocation intermediate ($\\\\text{R}_3\\\\text{C}^+$) has a **planar** trigonal geometry around the positively charged carbon atom.
> * **Equal Probability:** Because the carbocation is planar, there is an **equal (50:50) probability** of attack from either side.
> * **Optical Activity Outcome:** If the starting halogenoalkane is a single optically active enantiomer, nucleophilic attack yields equal quantities of both enantiomers, forming a **racemic mixture**.
> * **Loss of Activity:** The product is **optically inactive** (racemisation has occurred).

> [!EXAMPLE]
> #### 📝 Worked Example 1: SN2 Transition State
> **Question:** 2-Bromobutane and cyanide ions react together by an SN2 mechanism. Draw the structure of the transition state formed in this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify groups on Carbon-2:** Carbon-2 is bonded to: -H, -CH₃, -CH₂CH₃, and -Br
> > 2. **Set up the transition state layout:**
> >    * Place the central carbon in the middle.
> >    * Use dashed lines to show the partial bond to the incoming nucleophile (-CN) and the leaving group (-Br).
> >    * Arrange the other three groups (-H, -CH₃, -CH₂CH₃) in a planar arrangement perpendicular to the nucleophile-leaving group axis.
> >    * Wrap the entire structure in square brackets with a negative charge:
> >      $$\\\\left[ \\\\text{NC} \\\\cdots \\\\text{C(H)(CH}_3\\\\text{)(CH}_2\\\\text{CH}_3\\\\text{)} \\\\cdots \\\\text{Br} \\\\right]^-$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: SN1 Mechanism & Achiral Reactant
> **Question:** 2-Bromopropane and cyanide ions react together by an SN1 mechanism. Explain why there is no change in optical activity in this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the starting material:** 2-bromopropane has the structure CH₃CHBrCH₃.
> > 2. **Check for chirality:** The central carbon atom is bonded to two identical methyl (-CH₃) groups. Thus, it does not contain a chiral centre and is **achiral**.
> > 3. **Explain optical activity:** Since the starting material 2-bromopropane is achiral, it has no optical activity.
> > 4. **Explain product chirality:** The product 2-methylpropanenitrile ((CH₃)₂CHCN) is also achiral and optically inactive.
> > 5. **Conclusion:** Because both the reactant and the product are achiral, there is no change in optical activity (the mixture remains optically inactive throughout).

> [!EXAMPLE]
> #### 📝 Worked Example 3: SN1 Hydrolysis of an Optically Active Tertiary Halogenoalkane
> **Question:** A single enantiomer of (R)-3-bromo-3-methylhexane is hydrolysed with aqueous sodium hydroxide.
> 1) Describe the structure of the intermediate formed in the rate-determining step.
> 2) Explain why the resulting alcohol product mixture shows zero optical activity.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Describe the carbocation intermediate:**
> >    * In the slow rate-determining step, the C-Br bond breaks heterolytically, releasing a Br⁻ ion.
> >    * This forms a tertiary carbocation intermediate: **[CH₃C⁺(C₂H₅)C₃H₇]**.
> >    * The central positively charged carbon has three bonding pairs of electrons and no lone pairs, adopting a **trigonal planar geometry** (bond angles of 120°).
> > 2. **Explain racemisation and optical inactivity:**
> >    * The planar carbocation can be attacked by the hydroxide nucleophile (:OH⁻) from either the top face or the bottom face with **equal 50:50 probability**.
> >    * Attack from one side yields the (R)-alcohol enantiomer, while attack from the opposite side yields the (S)-alcohol enantiomer.
> >    * Equal amounts of both enantiomers form, producing a **racemic mixture** (racemate).
> >    * The equal and opposite optical rotations of the two enantiomers cancel each other out, making the mixture completely **optically inactive**.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing Reaction Mechanism from Polarimetry Data
> **Question:** An organic chemist investigates the alkaline hydrolysis of an optically pure chiral halogenoalkane sample that has an initial optical rotation of +32.0°.
> * **Experiment A (Polar aprotic solvent):** The final product has an optical rotation of -26.5°.
> * **Experiment B (Polar protic solvent):** The final product has an optical rotation of 0.0°.
> 
> Deduce and justify the nucleophilic substitution mechanism operating in each experiment.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Experiment A (Rotation = -26.5°):**
> >    * **Deduction:** **SN2 Mechanism**.
> >    * **Justification:** The product remains optically active with an inverted configuration (**Walden inversion**). Backside attack by the nucleophile in a single concerted step inverts the tetrahedral geometry without forming a planar intermediate, retaining a single enantiomer.
> > 2. **Analyze Experiment B (Rotation = 0.0°):**
> >    * **Deduction:** **SN1 Mechanism**.
> >    * **Justification:** Complete loss of optical activity indicates **racemisation**. The reaction proceeds via a planar carbocation intermediate, allowing equal 50:50 attack from both faces to produce an equimolar racemic mixture.
`,
    keyPoints: [
      'SN2 reactions of chiral halogenoalkanes result in optical inversion (Walden inversion).',
      'SN1 reactions of chiral halogenoalkanes result in racemisation due to nucleophilic attack on a planar carbocation intermediate.',
      'A reaction mechanism can be deduced by observing whether the optical activity of a single enantiomer is inverted or lost.'
    ]
  },
  {
    id: 'carbonyl-compounds-nomenclature-properties-u4-l5',
    title: 'Carbonyl Compounds: Nomenclature, Bonding & Physical Properties',
    type: 'text',
    content: `
> [!NOTE]
> ### 📝 Nomenclature of Carbonyls
> Carbonyl compounds contain the carbonyl group $\\text{C}=\\text{O}$ and are divided into:
> * **Aldehydes (RCHO):** Suffix **-al**. The carbonyl carbon is always numbered as Carbon-1 in the chain. No locant number is needed.
> * **Ketones (RCOR\'):** Suffix **-one**. A locant number is needed for chains of 5 or more carbons to specify the position of the $\\text{C}=\\text{O}$ group.
> 
> #### Table A: Nomenclature of Aldehydes
> | Structural Formula | IUPAC Name | Common Name |
> | :--- | :--- | :--- |
> | $\\text{HCHO}$ | methanal | formaldehyde |
> | $\\text{CH₃CHO}$ | ethanal | acetaldehyde |
> | $\\text{CH₃CH₂CHO}$ | propanal | propionaldehyde |
> | $\\text{(CH₃)₂CHCHO}$ | methylpropanal | isobutyraldehyde |
> | $\\text{CH₃CH₂CH₂CHO}$ | butanal | butyraldehyde |
> | $\\text{C₆H₅CHO}$ | benzenecarbaldehyde | benzaldehyde |
> 
> #### Table B: Nomenclature of Ketones
> | Structural Formula | IUPAC Name | Common Name |
> | :--- | :--- | :--- |
> | $\\text{CH₃COCH₃}$ | propanone | acetone |
> | $\\text{CH₃COCH₂CH₃}$ | butanone | methyl ethyl ketone |
> | $\\text{CH₃COCH₂CH₂CH₃}$ | pentan-2-one | methyl propyl ketone |
> | $\\text{CH₃CH₂COCH₂CH₃}$ | pentan-3-one | diethyl ketone |
> | $\\text{(CH₃)₂CHCOCH₃}$ | 3-methylbutan-2-one | methyl isopropyl ketone |

> [!IMPORTANT]
> ### ⚛️ Carbonyl Bonding: Comparison with Alkenes
> * **Alkenes (C=C):** Composed of one $\\sigma$ and one $\\pi$ bond. Since the two carbon atoms are identical, the double bond is **non-polar** and the electron density in the $\\pi$ bond is evenly distributed.
> * **Carbonyls (C=O):** Composed of one $\\sigma$ and one $\\pi$ bond. However, because oxygen is significantly more electronegative than carbon, the bond is **highly polar**:
>   $$\\text{C}^{\\delta+} = \\text{O}^{\\delta-}$$
>   * *Electron Density:* The electron density in the carbonyl $\\pi$ bond is unevenly distributed, being shifted significantly closer to the oxygen atom.

> [!BOX]
> ### 🌡️ Physical Properties: Boiling Temperature Trends
> * **Intermolecular Forces:** Carbonyl compounds experience **permanent dipole-dipole interactions** and London forces.
> * **No Hydrogen Bonding:** Unlike alcohols, carbonyls **do not form intermolecular hydrogen bonds** because all their hydrogen atoms are bonded directly to carbon atoms, not to electronegative oxygen atoms.
> * **Homologous Series Comparison:**
>   * For compounds of similar molar mass: **Alkanes < Carbonyls < Alcohols**
>   * *Alkanes* only have London forces (weakest).
>   * *Carbonyls* have dipole-dipole interactions (intermediate).
>   * *Alcohols* have strong hydrogen bonding (strongest, highest boiling points).
>   * At room temperature, methanal is a gas, whereas other simple carbonyls are volatile liquids.

> [!BOX]
> ### 💧 Solubility in Water
> * **Hydrogen Bond Formation:** Although carbonyl molecules cannot hydrogen-bond with *each other*, they **can form hydrogen bonds with water molecules** (between the $\\delta-$ oxygen of the carbonyl and the $\\delta+$ hydrogen of water).
> * **Chain Length Effect:** The lower (shorter chain) aldehydes and ketones (methanal, ethanal, propanone) are completely soluble in water.
> * **Tail-Off:** As the carbon chain length increases, solubility **decreases** rapidly. This is because the non-polar, hydrophobic hydrocarbon tail of the molecule becomes larger and disrupts the hydrogen bonding network of water.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Displayed Formulas
> **Question:** Write the displayed formula for:
> 1. Propanal
> 2. Propanone
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Definition of Displayed Formula:**
> >    * A displayed formula shows all the atoms and all the covalent bonds present in a molecule (every single $\\text{C-H}$, $\\text{C-C}$, and the $\\text{C=O}$ double bond must be explicitly drawn)
> > 2. **Propanal (CH₃CH₂CHO):**
> >    * In propanal, the carbonyl carbon is at the end of the chain (Carbon-1) bonded to a hydrogen atom and a double-bonded oxygen atom.
> > 
> > ${svgToken(propanalDisplayedSvg)}
> > 
> > 3. **Propanone (CH₃COCH₃):**
> >    * In propanone, the carbonyl carbon is the central carbon (Carbon-2) bonded to two methyl groups ($-\\text{CH}_3$) and a double-bonded oxygen atom.
> > 
> > ${svgToken(propanoneDisplayedSvg)}
> 


> [!EXAMPLE]
> #### 📝 Worked Example 2: Solubility Explanation
> **Question:** Draw a diagram and explain why propanone is soluble in water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain the solubility of propanone in water:**
> >    * Although propanone cannot form intermolecular hydrogen bonds with itself (because it has no hydrogen atom directly attached to an electronegative oxygen), it has a polar carbonyl group ($\\text{C}^{\\delta+}=\\text{O}^{\\delta-}$).
> >    * The lone pairs of electrons on the carbonyl oxygen atom can accept hydrogen bonds from the partially positive hydrogen atoms ($\\text{H}^{\\delta+}$) of surrounding water molecules.
> >    * This favorable interaction releases enough hydration energy to allow small ketone molecules to mix completely with water.
> > 2. **Key Mark Scheme Requirements for Full Marks:**
> >    * **Lone Pair:** At least one lone pair of electrons clearly shown on the oxygen atom of the propanone molecule ($:\\text{O}$).
> >    * **Dipoles / Partial Charges:** Correct dipoles shown on both the $\\text{C=O}$ bond ($\\text{C}^{\\delta+}=\\text{O}^{\\delta-}$) and the $\\text{O-H}$ bond of water ($\\text{O}^{\\delta-}-\\text{H}^{\\delta+}$).
> >    * **Hydrogen Bond Representation:** The hydrogen bond is drawn as a dashed/dotted line ($\\cdots$) starting directly from the lone pair on the carbonyl oxygen to the partially positive hydrogen ($\\text{H}^{\\delta+}$) of the water molecule.
> > 
> > ${svgToken(propanoneSolubilitySvg)}
> 

> [!EXAMPLE]
> #### 📝 Worked Example 3: Nomenclature & Boiling Temperature Trends
> **Question:** 
> 1. Give the IUPAC names for the two carbonyl isomers with the molecular formula C₄H₈O.
> 2. Arrange the following compounds in order of increasing boiling temperature, explaining your reasoning: butane, butanal, butan-1-ol.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the isomers of C₄H₈O:**
> >    * The 4-carbon chain aldehyde: **butanal** (CH₃CH₂CH₂CHO)
> >    * The 4-carbon chain ketone: **butanone** (CH₃COCH₂CH₃)
> > 2. **Arrange by boiling temperatures (lowest to highest):**
> >    * **butane < butanal < butan-1-ol**
> > 3. **Formulate the explanation based on intermolecular forces:**
> >    * **butane:** An alkane experiencing only weak London dispersion forces, requiring the least energy to overcome.
> >    * **butanal:** A polar carbonyl compound experiencing permanent dipole-dipole forces in addition to London forces, which are stronger than London forces alone.
> >    * **butan-1-ol:** An alcohol experiencing strong intermolecular hydrogen bonding (due to the polar -OH group) in addition to London forces, requiring the most energy to overcome.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Systematic Carbonyl Isomers & Chirality (C₅H₁₀O)
> **Question:** 
> 1. Draw the structural formulas and state the IUPAC names for the three isomeric ketones with the molecular formula C₅H₁₀O.
> 2. There are four isomeric aldehydes with the molecular formula C₅H₁₀O. State their IUPAC names and identify which of these aldehydes contains a chiral centre, clearly justifying your choice.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the three ketone isomers of C₅H₁₀O:**
> >    * **Pentan-2-one:** CH₃COCH₂CH₂CH₃ (straight chain, C=O on Carbon-2).
> >    * **Pentan-3-one:** CH₃CH₂COCH₂CH₃ (straight chain, C=O on Carbon-3, symmetrical).
> >    * **3-Methylbutan-2-one:** CH₃COCH(CH₃)₂ (branched chain ketone).
> > 2. **Identify the four aldehyde isomers of C₅H₁₀O:**
> >    * **Pentanal:** CH₃CH₂CH₂CH₂CHO (straight-chain aldehyde).
> >    * **2-Methylbutanal:** CH₃CH₂CH(CH₃)CHO (methyl branch on Carbon-2).
> >    * **3-Methylbutanal:** (CH₃)₂CHCH₂CHO (methyl branch on Carbon-3).
> >    * **2,2-Dimethylpropanal:** (CH₃)₃CCHO (two methyl branches on Carbon-2).
> > 3. **Identify and justify the chiral aldehyde:**
> >    * **Chiral Isomer:** **2-methylbutanal** (CH₃CH₂C\*H(CH₃)CHO).
> >    * **Justification:** Carbon-2 is bonded to **four completely different groups**:
> >      * Group 1: -H (hydrogen atom)
> >      * Group 2: -CH₃ (methyl group)
> >      * Group 3: -CHO (aldehyde functional group)
> >      * Group 4: -CH₂CH₃ (ethyl group)
> >    * Because Carbon-2 has four different substituents, it forms an asymmetric chiral centre that exhibits optical isomerism (enantiomerism).
`,
    keyPoints: [
      'Aldehydes carry terminal carbonyl groups; ketones carry internal carbonyl groups.',
      'Carbonyl double bonds are highly polar, causing dipole-dipole attractions that raise boiling points.',
      'Lower carbonyls are water-soluble due to hydrogen bonding between the carbonyl oxygen and water molecules.'
    ]
  },
  {
    id: 'carbonyl-compounds-nucleophilic-addition-u4-l5',
    title: 'Nucleophilic Addition Mechanism with HCN',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Reactivity of the Polar Carbonyl Group
> Because the carbonyl bond is polarised ($\\\\text{C}^{\\\\delta+} = \\\\text{O}^{\\\\delta-}$), nucleophiles attack the electron-deficient carbon. This is the basis of **nucleophilic addition** reactions in carbonyls.

> [!IMPORTANT]
> ### ⚛️ Nucleophilic Addition with Hydrogen Cyanide (HCN)
> Aldehydes and ketones react with hydrogen cyanide (HCN) to form **hydroxynitriles**.
> * **Reagents / Conditions:** HCN in the presence of KCN (aqueous alkaline solution).
> * **Role of KCN Catalyst:** HCN is a weak acid and dissociates poorly. KCN provides a high concentration of cyanide nucleophiles (CN⁻) to act as a catalyst and initiate the attack.
> * **Product Type:** Hydroxy nitriles (the carbon chain increases by 1 carbon).
>   * **Ethanal + HCN:** CH₃CHO + HCN → CH₃CH(OH)CN (2-hydroxypropanenitrile)
>   * **Propanal + HCN:** CH₃CH₂CHO + HCN → CH₃CH₂CH(OH)CN (2-hydroxybutanenitrile)
>   * **Butanone + HCN:** CH₃COCH₂CH₃ + HCN → CH₃C(CN)(OH)CH₂CH₃ (2-hydroxy-2-methylbutanenitrile)
> * **Two-Step Reaction Mechanism (e.g. with Ethanal):**
>   1. **Step 1 (Slow / RDS):** The lone pair on the carbon of CN⁻ attacks the partially positive carbonyl carbon ($\\\\text{C}^{\\\\delta+}=\\\\text{O}^{\\\\delta-}$). The C=O $\pi$-bond breaks, moving electrons to oxygen to form a tetrahedral intermediate (with a negative charge on oxygen).
> 
> ${svgToken(nucleophilicAdditionStep1Svg)}
> 
>   2. **Step 2 (Fast):** The negative intermediate attacks a hydrogen atom on an HCN molecule, forming the -OH group and regenerating the CN⁻ catalyst.
> 
> ${svgToken(nucleophilicAdditionStep2Svg)}

> [!WARNING]
> ### 🪞 Stereochemical Evidence (Optical Inactivity)
> If we start with an unsymmetrical carbonyl compound (such as propanal or ethanal), the product hydroxynitrile contains a chiral carbon.
> * **Planar Geometry:** The carbonyl group C=O has a **trigonal planar** arrangement around the carbonyl carbon atom.
> * **Equal Probability:** The nucleophile CN⁻ can attack the planar carbon atom from **above or below the plane with equal (50:50) probability**.
> 
> > ${svgToken(stereochemicalAttackSvg)}
> 
> * **Racemic Product:** Because attack from above yields one enantiomer, and attack from below yields the mirror image, equal amounts of both enantiomers are formed.
> * **Optical Inactivity:** This 50:50 mixture is called a **racemic mixture** (or racemate). It is optically inactive because the clockwise rotation of light by one enantiomer is exactly cancelled out by the anticlockwise rotation of the other.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydroxynitriles Products & Naming Rules
> **Question:** What are the names of the organic products of these reactions?
> * **(a)** methanal + hydrogen cyanide →
> * **(b)** propanone + hydrogen cyanide →
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) methanal + hydrogen cyanide:**
> >   1. **Reaction Equation:** HCHO + HCN → HO-CH₂-CN
> >   2. **Chain Length:** Adding the cyanide group increases the longest continuous carbon chain to 2 carbons, forming a derivative of ethane (**ethanenitrile**). Carbon-1 is always the nitrile carbon (-C≡N).
> >   3. **Substituent:** Carbon-2 carries the hydroxyl group (-OH), which is named using the prefix *hydroxy-*.
> >   4. **Name:** **2-hydroxyethanenitrile** (or hydroxyethanenitrile).
> > * **(b) propanone + hydrogen cyanide:**
> >   1. **Reaction Equation:** CH₃COCH₃ + HCN → CH₃-C(OH)(CN)-CH₃
> >   2. **Chain Length:** The longest continuous carbon chain containing the nitrile group consists of 3 carbons (**propanenitrile**). Carbon-1 is the nitrile carbon.
> >   3. **Substituents:** Carbon-2 carries both a *hydroxy-* group and a *methyl-* group.
> >   4. **Naming Rule:** Alphabetical order of prefixes puts *hydroxy-* before *methyl-*.
> >   5. **Name:** **2-hydroxy-2-methylpropanenitrile**

> [!EXAMPLE]
> #### 📝 Worked Example 2: Double Precipitate Test Deduction
> **Question:** Compound X reacts with 2,4-dinitrophenylhydrazine and with iodine in aqueous alkali in separate tests. In both cases, a coloured precipitate forms. Explain which of these could be compound X: propanal, propan-1-ol, propan-2-ol, propanone.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **2,4-Dinitrophenylhydrazine (2,4-DNPH) Test:**
> >    * Forms a bright orange/yellow precipitate only with carbonyl compounds (aldehydes and ketones containing a C=O group).
> >    * This eliminates propan-1-ol and propan-2-ol (alcohols do not react with 2,4-DNPH).
> >    * The remaining candidates are propanal and propanone.
> > 2. **Iodine in aqueous alkali (Triiodomethane / Iodoform Test):**
> >    * Forms a pale-yellow precipitate of triiodomethane (CHI₃) only in the presence of a methyl carbonyl group (CH₃C=O) or a CH₃CH(OH)- group.
> >    * Propanone (CH₃COCH₃) contains the required CH₃C=O group and gives a positive result.
> >    * Propanal (CH₃CH₂CHO) lacks this group and gives a negative result (no precipitate).
> > 3. **Conclusion:**
> >    * Propanone is the only compound from the list that forms a precipitate in both independent tests. Therefore, compound X is **propanone**.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Optical Inactivity of Ethanal & HCN Addition Product
> **Question:** Explain why the reaction of ethanal (CH₃CHO) with HCN (in the presence of KCN) produces an optically inactive mixture.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the geometry of the reactant carbonyl group:**
> >    * The carbonyl group (C=O) in ethanal has a trigonal planar shape around the carbonyl carbon atom.
> > 2. **Analyze the nucleophilic attack probability:**
> >    * The cyanide ion nucleophile (:CN⁻) can attack the planar carbonyl carbon with equal probability from either above or below the plane (50:50 ratio).
> > 3. **Explain the stereochemical outcome:**
> >    * Because the reactant has different groups attached to the carbonyl carbon (-H and -CH₃), the addition of -CN creates a chiral centre.
> >    * Attack from above yields one enantiomer, while attack from below yields the mirror-image enantiomer.
> > 4. **Conclude on optical activity:**
> >    * An equimolar (50:50) mixture of the two enantiomers is formed, which is a racemic mixture.
> >    * The racemic mixture is optically inactive because the clockwise rotation of plane-polarised light by one enantiomer is exactly cancelled out by the anticlockwise rotation of the other.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Role of KCN Catalyst & Reaction Conditions
> **Question:**
> * **(a)** Explain why the addition reaction of hydrogen cyanide to a carbonyl compound is extremely slow when pure HCN is used alone.
> * **(b)** Explain why potassium cyanide (KCN) is added to the reaction mixture, and why a slightly alkaline pH (pH ≈ 8) is maintained.
> * **(c)** State a safety hazard associated with using HCN gas.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) Reason for slow reaction with pure HCN alone:**
> >   1. **Acid Weakness:** HCN is a very weak acid and dissociates only partially in aqueous solution: HCN ⇌ H⁺ + :CN⁻
> >   2. **Low Nucleophile Concentration:** Pure HCN produces an extremely low concentration of cyanide ion nucleophiles (:CN⁻), making the initial rate-determining attack (Step 1) exceptionally slow.
> > * **(b) Role of KCN and pH control:**
> >   1. **KCN Role:** Potassium cyanide is an ionic salt that fully dissociates in water (KCN → K⁺ + :CN⁻), providing a high initial concentration of :CN⁻ nucleophiles to catalyse the reaction.
> >   2. **Alkaline pH Control:** Maintaining a slightly alkaline pH (pH ≈ 8) ensures sufficient :CN⁻ ions are present without consuming all un-dissociated HCN molecules needed for the proton transfer in Step 2.
> > * **(c) Safety Hazard:**
> >   * **Toxicity:** HCN is an extremely toxic, poisonous gas. Using KCN in aqueous solution avoids handling gaseous HCN directly and minimizes risk.
`,
    keyPoints: [
      'HCN addition mechanism is catalysed by CN⁻, which is regenerated in the second step.',
      'The reaction adds one carbon to the carbon chain and forms a hydroxynitrile.',
      'Planar C=O groups lead to equal probability nucleochemical attack from above/below, yielding racemic mixtures.'
    ]
  },
  {
    id: 'carbonyls-oxidation-reduction-tests-u4-l5',
    title: 'Redox Reactions & Chemical Tests of Carbonyls',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧮 Redox Trends in Carbonyl Chemistry
> * **Aldehydes:** Easily oxidised to carboxylic acids and reduced to primary alcohols.
> * **Ketones:** Easily reduced to secondary alcohols, but highly resistant to oxidation because breaking carbon-carbon bonds is thermodynamically unfavourable.

> [!IMPORTANT]
> ### 🧪 Reduction Reactions (Carbonyls to Alcohols)
> Carbonyl compounds are reduced to alcohols using **lithium tetrahydridoaluminate(III)** (lithium aluminium hydride, $\\\\text{LiAlH}_4$) dissolved in dry ether.
> * **Reducing Agent Representation:** Represented as $2[\\\\text{H}]$ in equations.
> * **Reduction of Aldehydes to Primary Alcohols:**
>   $$\\\\text{CH}_3\\\\text{CH}_2\\\\text{CHO} + 2[\\\\text{H}] \\\\rightarrow \\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_2\\\\text{OH} \\\\quad \\\\text{(propanal } \\\\rightarrow \\\\text{ propan-1-ol)}$$
> * **Reduction of Ketones to Secondary Alcohols:**
>   $$\\\\text{CH}_3\\\\text{COCH}_3 + 2[\\\\text{H}] \\\\rightarrow \\\\text{CH}_3\\\\text{CH(OH)CH}_3 \\\\quad \\\\text{(propanone } \\\\rightarrow \\\\text{ propan-2-ol)}$$

> [!IMPORTANT]
> ### 🧪 Oxidation Reactions (Aldehydes to Carboxylic Acids)
> Four key reagents are used to perform and test these oxidation pathways (represented as $[\\\\text{O}]$):
> 
> #### Table A: Oxidation Reagents & Observations
> | Reagent | Colour Change with Aldehydes | Notes / Chemical Reaction |
> | :--- | :--- | :--- |
> | Acidified Potassium Dichromate(VI) | orange solution → green solution | Cr⁶⁺ reduced to Cr³⁺. Under reflux: RCHO + [O] → RCOOH. |
> | Fehling's Solution | deep blue solution → red-brown precipitate | Cu²⁺ complex reduced to copper(I) oxide: Cu₂O(s). |
> | Benedict's Solution | deep blue solution → red-brown precipitate | Uses copper(II) citrate instead of tartrate. Same reaction. |
> | Tollens' Reagent | colourless solution → silver mirror | Contains ammoniacal silver nitrate [Ag(NH₃)₂]⁺. Ag⁺ reduced to Ag(s). |
> 
> * **Ketones Reaction:** None of these reagents react with ketones (no colour changes observed, Tollens' remains colourless).

> [!BOX]
> ### 🧪 Practical Safety Note: Heating Method
> * **Water Bath Heating:** Carbonyl compounds are **highly flammable** liquids. Therefore, all reactions must be heated using a water bath (or electric heating mantle), **never over a naked flame**, to prevent ignition of flammable vapours.

> [!BOX]
> ### 🧪 Triiodomethane (Iodoform) Reaction
> * **Reagent:** Iodine ($\\\\text{I}_2$) in aqueous sodium hydroxide ($\\\\text{NaOH}$).
> * **Target Group:** Specifically tests for the methyl carbonyl group:
>   $$\\\\text{CH}_3\\\\text{-C=O}$$
> * **Positive Result:** A **pale-yellow precipitate** of triiodomethane ($\\\\text{CHI}_3$) forms, accompanied by a distinct antiseptic smell.
> * **Propanal vs Propanone distinction:**
>   * **Propanone:** Gives a positive iodoform test (forms a pale-yellow precipitate) because it contains the active methyl carbonyl ($\\\\text{CH}_3\\\\text{C=O}$) group.
>   * **Propanal:** Gives a negative iodoform test (no precipitate) because it lacks the $\\\\text{CH}_3\\\\text{C=O}$ group.
>   * **Alcohol Classification:** Alcohols containing the $\\\\text{CH}_3\\\\text{CH(OH)}-$ group also give a positive test because they are oxidised by the iodine/alkali mixture to methyl carbonyls in situ.
> 
> #### Table B: Iodoform Test Results for Alcohols
> | Alcohol | Structure | Oxidation Product | Test Result |
> | :--- | :--- | :--- | :--- |
> | ethanol | CH₃CH₂OH | CH₃CHO | positive |
> | propan-1-ol | CH₃CH₂CH₂OH | CH₃CH₂CHO | negative |
> | propan-2-ol | CH₃CH(OH)CH₃ | CH₃COCH₃ | positive |
> | butan-1-ol | CH₃CH₂CH₂CH₂OH | CH₃CH₂CH₂CHO | negative |
> | butan-2-ol | CH₃CH(OH)CH₂CH₃ | CH₃COCH₂CH₃ | positive |
> | 2-methylpropan-1-ol | (CH₃)₂CHCH₂OH | (CH₃)₂CHCHO | negative |

> [!BOX]
> ### 🔬 Characterisation using 2,4-DNPH Derivatives
> The reaction between 2,4-dinitrophenylhydrazine (Brady's reagent) and aldehydes/ketones forms a **yellow/orange/red crystalline precipitate** (2,4-dinitrophenylhydrazone derivative):
> $$\\\\text{Ar-NH-NH}_2 + \\\\text{O=C(R)(R')} \\\\rightarrow \\\\text{Ar-NH-N=C(R)(R')} + \\\\text{H}_2\\\\text{O}$$
> 
> ${svgToken(dnphReactionSvg)}
> 
> * **Identification Pathway:**
>   1. Filter the crystalline precipitate.
>   2. Purify it via **recrystallisation**.
>   3. Measure its melting temperature.
>   4. Compare the measured melting point against data tables to identify the specific carbonyl compound.
> 
> #### Table C: Boiling Temperatures vs. Derivative Melting Temperatures
> | Carbonyl Compound | Boiling Temperature (°C) | Melting Temperature of 2,4-DNPH Derivative (°C) |
> | :--- | :--- | :--- |
> | pentanal | 102 | 104 |
> | pentan-2-one | 102 | 144 |
> | pentan-3-one | 102 | 156 |
> 
> * **Significance:** Although pentanal, pentan-2-one, and pentan-3-one all have identical boiling points ($102^{\\\\circ}\\\\text{C}$), they can be easily distinguished and identified by measuring the melting points of their derivatives ($104^{\\\\circ}\\\\text{C}$, $144^{\\\\circ}\\\\text{C}$, and $156^{\\\\circ}\\\\text{C}$ respectively).
> 

> [!EXAMPLE]
> #### 📝 Worked Example 1: Redox Products & Equations
> **Question:** What are the names of the organic products of these reactions?
> (a) The reduction of CH₃CH₂CH₂CHO.
> (b) The oxidation of CH₃CH₂CH₂CH₂CHO.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) Reduction of CH₃CH₂CH₂CHO (butanal):**
> >   1. **Reaction Equation:** CH₃CH₂CH₂CHO + 2[H] → CH₃CH₂CH₂CH₂OH
> >   2. **Reactant Type:** Butanal is a 4-carbon aldehyde. Aldehydes undergo reduction (using LiAlH₄ in dry ether) to form primary alcohols.
> >   3. **Mechanism:** The carbonyl group (-CHO) is converted into a primary alcohol group (-CH₂OH), producing a 4-carbon primary alcohol.
> >   4. **Product name:** **butan-1-ol**
> > * **(b) Oxidation of CH₃CH₂CH₂CH₂CHO (pentanal):**
> >   1. **Reaction Equation:** CH₃CH₂CH₂CH₂CHO + [O] → CH₃CH₂CH₂CH₂COOH
> >   2. **Reactant Type:** Pentanal is a 5-carbon aldehyde. Aldehydes are easily oxidised (using acidified potassium dichromate(VI)) to carboxylic acids.
> >   3. **Mechanism:** The aldehyde group (-CHO) is oxidised to a carboxyl group (-COOH), producing a 5-carbon carboxylic acid.
> >   4. **Product name:** **pentanoic acid**

> [!EXAMPLE]
> #### 📝 Worked Example 2: Observations in Redox Tests
> **Question:** What colour changes would be observed in these tests?
> (a) Heating a mixture of propanone and acidified potassium dichromate(VI).
> (b) Heating a mixture of ethanal and Tollens' reagent.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) Propanone + Acidified Potassium Dichromate(VI):**
> >   1. **Reasoning:** Propanone (CH₃COCH₃) is a ketone. Ketones lack a hydrogen atom directly bonded to the carbonyl carbon, making them resistant to oxidation by acidified potassium dichromate(VI) under these conditions.
> >   2. **Observation:** Since no reaction occurs, the orange dichromate(VI) ions (Cr₂O₇²⁻) are not reduced to green chromium(III) ions (Cr³⁺). The solution **remains orange** (no colour change).
> > * **(b) Ethanal + Tollens' Reagent:**
> >   1. **Reasoning:** Ethanal (CH₃CHO) is an aldehyde and readily oxidises to ethanoic acid. In doing so, it reduces the diamminesilver(I) complex ions [Ag(NH₃)₂]⁺ present in Tollens' reagent to metallic silver (Ag):
> >      $$CH_3CHO + 2[Ag(NH_3)_2]^+ + 3OH^- \rightarrow CH_3COO^- + 2Ag(s) + 4NH_3 + 2H_2O$$
> >   2. **Observation:** The metallic silver deposits on the inner glass wall of the test tube, so the **colourless solution forms a silver mirror** (or a grey/black precipitate).

> [!EXAMPLE]
> #### 📝 Worked Example 3: The Triiodomethane (Iodoform) Reaction
> **Question:** Predict whether each of the following compounds gives a positive triiodomethane test when warmed with iodine in aqueous sodium hydroxide: ethanal, pentan-3-one, propan-2-ol.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze each compound for the required structural group:**
> >    * **Ethanal (CH₃CHO):** Contains the methyl carbonyl group (CH₃C=O). **Positive result**.
> >    * **Pentan-3-one (CH₃CH₂COCH₂CH₃):** Carbonyl carbon is bonded to two ethyl groups (-CH₂CH₃) with no methyl group adjacent to C=O. **Negative result**.
> >    * **Propan-2-ol (CH₃CH(OH)CH₃):** Contains the secondary alcohol group CH₃CH(OH)- which is oxidised in situ by the alkaline iodine to propanone (CH₃COCH₃). **Positive result**.
> > 2. **Reaction equation for ethanal:**
> >    $$CH_3CHO + 3I_2 + 4NaOH \rightarrow HCOONa + CHI_3(s) + 3NaI + 3H_2O$$
> > 3. **Observation:** A **pale-yellow precipitate** of triiodomethane (CHI₃) forms with a characteristic antiseptic smell.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Unknown Carbonyls via 2,4-DNPH Derivatives
> **Question:** A colorless liquid Y has the molecular formula C₅H₁₀O and a boiling point of 102°C. 
> * Liquid Y forms an orange crystalline precipitate with 2,4-dinitrophenylhydrazine.
> * Liquid Y gives a negative result with Tollens' reagent and a positive result with iodine in aqueous alkali.
> * Outline the laboratory procedure to purify and identify liquid Y using its 2,4-DNPH derivative, and deduce its identity.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce functional group and structure:**
> >    * **Orange precipitate with 2,4-DNPH:** Confirms Y is an aldehyde or ketone.
> >    * **Negative Tollens' test:** Proves Y is a **ketone** (not an aldehyde).
> >    * **Positive Iodoform test:** Proves Y contains a methyl carbonyl group (CH₃C=O).
> >    * **Molecular formula C₅H₁₀O:** The only 5-carbon methyl ketone is **pentan-2-one** (CH₃COCH₂CH₂CH₃) or 3-methylbutan-2-one. (Its straight-chain boiling point of 102°C corresponds to pentan-2-one).
> > 2. **Experimental procedure to confirm identity:**
> >    * **Filtration:** Filter off the solid orange precipitate using suction filtration (Buchner funnel).
> >    * **Recrystallisation (Purification):** Dissolve the crude solid in a minimum volume of hot solvent, cool the solution slowly to allow crystals to reform, and filter the pure crystals.
> >    * **Melting Point Determination:** Dry the purified crystals and determine their melting point accurately using a melting point apparatus (capillary tube method).
> >    * **Data Table Comparison:** Compare the measured melting point of the derivative against published data values to confirm the exact compound.
`,
    keyPoints: [
      'LiAlH₄ reduces aldehydes to primary alcohols and ketones to secondary alcohols.',
      'Aldehydes give positive colour changes with Tollens\', Fehling\', Benedict\', and dichromate solutions; ketones do not.',
      'Brady\'s derivatives show distinct melting points, allowing identification of carbonyls with identical boiling points.'
    ]
  },
  {
    id: 'carboxylic-acids-esters-u4-l5',
    title: 'Carboxylic Acids & Esters',
    type: 'text',
    content: `
> [!NOTE]
> ### ⚛️ Structure, Bonding & Delocalisation in Carboxylic Acids
> * **Carboxyl Functional Group ($-\\\\text{COOH}$):** Consists of a carbonyl group ($\\\\text{C}=\\\\text{O}$) and a hydroxyl group ($-\\\\text{OH}$) attached to the very same carbon atom.
> * **Three Polar Bonds:** Contains three polar covalent bonds:
>   $$\\\\text{C}^{\\\\delta+} = \\\\text{O}^{\\\\delta-}, \\\\quad \\\\text{C}^{\\\\delta+} - \\\\text{O}^{\\\\delta-}, \\\\quad \\\\text{and } \\\\text{O}^{\\\\delta-} - \\\\text{H}^{\\\\delta+}$$
> * **Carboxylate Ion Resonance ($\\\\text{RCOO}^-$):** When a carboxylic acid donates a proton ($\\\\text{H}^+$) in water, it forms a carboxylate ion:
>   $$\\\\text{RCOOH} + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{RCOO}^- + \\\\text{H}_3\\\\text{O}^+$$
>   * The negative charge and the $\\\\pi$-electron density are **delocalised evenly** across both oxygen atoms and the central carbon atom.
>   * As a result, both $\\\\text{C-O}$ bond lengths in the carboxylate ion are **completely equal in length and bond strength** (intermediate between single and double bonds, with a net charge of $-\\\\frac{1}{2}$ on each oxygen).
> 
> ${svgToken(carboxylateDelocalisationSvg)}

> [!BOX]
> ### 🌡️ Physical Properties & Dimerisation
> * **Boiling Temperatures:** Carboxylic acids have **significantly higher boiling points** than alkanes, carbonyls, or alcohols of similar molar mass due to extensive intermolecular hydrogen bonding.
> * **Dimer Formation:** In pure liquid state or in non-polar organic solvents, carboxylic acids form stable **hydrogen-bonded dimers** held together by two hydrogen bonds per pair of molecules.
> 
> ${svgToken(carboxylicAcidDimerSvg)}
> 
> * **Mass Spectrometry Exam Tip:** In mass spectrometry, ethanoic acid shows a prominent molecular ion peak at $m/z = 120$, corresponding to the dimer ion $[\\\\text{CH}_3\\\\text{COOH}]_2^+$.

> [!BOX]
> ### 💧 Water Solubility Trends
> * **Short-Chain Acids ($C_1 - C_4$):** Small-chain carboxylic acids (methanoic, ethanoic, propanoic, and butanoic) are **completely miscible with water** because they form multiple hydrogen bonds with water molecules (both at $\\\\text{C}=\\\\text{O} \\\\cdots \\\\text{H-O}$ and $\\\\text{O-H} \\\\cdots \\\\text{O}$).
> 
> ${svgToken(carboxylicAcidWaterHbondsSvg)}
> 
> * **Chain Length Effect:** Solubility decreases rapidly as carbon chain length increases. The non-polar hydrophobic hydrocarbon tail becomes larger and disrupts the hydrogen-bonded water network without forming sufficient intermolecular attractions to compensate.

> [!BOX]
> ### 🧪 Laboratory Preparation of Carboxylic Acids
> * **1. Oxidation of Primary Alcohols or Aldehydes:**
>   * Reagents / Conditions: Acidified potassium dichromate(VI) ($\\\\text{K}_2\\\\text{Cr}_2\\\\text{O}_7 / \\\\text{H}_2\\\\text{SO}_4$), heated under reflux.
>   * *Primary Alcohol:* $\\\\text{RCH}_2\\\\text{OH} + 2[\\\\text{O}] \\\\rightarrow \\\\text{RCOOH} + \\\\text{H}_2\\\\text{O}$
>   * *Aldehyde:* $\\\\text{RCHO} + [\\\\text{O}] \\\\rightarrow \\\\text{RCOOH}$
> * **2. Hydrolysis of Nitriles ($\\\\text{R-CN}$):**
>   * *Acidic Hydrolysis:* Heated under reflux with dilute acid (e.g. $\\\\text{HCl(aq)}$):
>     $$\\\\text{RCN} + \\\\text{H}^+ + 2\\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{RCOOH} + \\\\text{NH}_4^+$$
>   * *Alkaline Hydrolysis:* Heated under reflux with aqueous alkali (e.g. $\\\\text{NaOH(aq)}$), followed by acidification:
>     $$\\\\text{RCN} + \\\\text{OH}^- + \\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{RCOO}^- + \\\\text{NH}_3$$
>     $$\\\\text{RCOO}^- + \\\\text{H}^+ \\\\rightarrow \\\\text{RCOOH}$$

> [!BOX]
> ### 🧪 Chemical Reactions of Carboxylic Acids
> * **1. Reduction:**
>   * Reagents / Conditions: Lithium tetrahydridoaluminate(III) ($\\\\text{LiAlH}_4$) in dry ether at room temperature.
>   * Reduced directly to $1^\\\\circ$ primary alcohols ($4[\\\\text{H}]$):
>     $$\\\\text{RCOOH} + 4[\\\\text{H}] \\\\rightarrow \\\\text{RCH}_2\\\\text{OH} + \\\\text{H}_2\\\\text{O}$$
> * **2. Neutralisation / Salt Formation:**
>   * *With Alkalis:* $\\\\text{CH}_3\\\\text{COOH} + \\\\text{NaOH} \\\\rightarrow \\\\text{CH}_3\\\\text{COONa} + \\\\text{H}_2\\\\text{O}$
>   * *With Carbonates:* $2\\\\text{RCOOH} + \\\\text{Na}_2\\\\text{CO}_3 \\\\rightarrow 2\\\\text{RCOONa} + \\\\text{CO}_2 + \\\\text{H}_2\\\\text{O}$ (effervescence of $\\\\text{CO}_2$ gas).
> * **3. Halogenation (Acyl Chloride Synthesis):**
>   * Reagents / Conditions: Phosphorus(V) chloride ($\\\\text{PCl}_5$) under anhydrous conditions at room temperature (vigorous reaction).
>   * Equation: $\\\\text{RCOOH} + \\\\text{PCl}_5 \\\\rightarrow \\\\text{RCOCl} + \\\\text{POCl}_3 + \\\\text{HCl}$
>   * Observations: Misty fumes of hydrogen chloride ($\\\\text{HCl}$) gas.
> * **4. Esterification:**
>   * Reagents / Conditions: Alcohol with concentrated sulfuric acid ($\\\\text{conc. H}_2\\\\text{SO}_4$) catalyst, heated under reflux.
>   * Reversible equilibrium reaction:
>     $$\\\\text{RCOOH} + \\\\text{R'OH} \\\\rightleftharpoons \\\\text{RCOOR'} + \\\\text{H}_2\\\\text{O}$$

> [!BOX]
> ### 🧪 Carboxylic Acid Derivatives & Hydrolysis
> * **Acyl Chlorides ($\\\\text{RCOCl}$):** Highly reactive; react vigorously at room temperature with evolution of steamy/misty fumes of $\\\\text{HCl(g)}$:
>   * *With Water:* $\\\\text{RCOCl} + \\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{RCOOH} + \\\\text{HCl}$
>   * *With Alcohols:* $\\\\text{RCOCl} + \\\\text{R'OH} \\\\rightarrow \\\\text{RCOOR'} + \\\\text{HCl}$ (irreversible, high yield)
>   * *With Ammonia:* $\\\\text{RCOCl} + 2\\\\text{NH}_3 \\\\rightarrow \\\\text{RCONH}_2 + \\\\text{NH}_4\\\\text{Cl}$ (forms primary amide)
>   * *With Primary Amines:* $\\\\text{RCOCl} + 2\\\\text{R'NH}_2 \\\\rightarrow \\\\text{RCONHR'} + \\\\text{R'NH}_3^+ \\\\text{Cl}^-$ (forms secondary amide)
> * **Hydrolysis of Esters ($\\\\text{RCOOR'}$):**
>   * *Acidic Hydrolysis:* Reversible, heated under reflux with dilute acid ($\\\\text{HCl} / \\\\text{H}_2\\\\text{SO}_4$):
>     $$\\\\text{RCOOR'} + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{RCOOH} + \\\\text{R'OH}$$
>   * *Alkaline Hydrolysis (Saponification):* Non-reversible, heated under reflux with aqueous alkali ($\\\\text{NaOH}$):
>     $$\\\\text{RCOOR'} + \\\\text{OH}^- \\\\rightarrow \\\\text{RCOO}^- + \\\\text{R'OH}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Displayed Formulas
> **Question:** Write the displayed formula for:
> 1) methanoic acid
> 2) ethanedioic acid
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Methanoic Acid (HCOOH):**
> >    * Consists of a single carbon atom bonded to a hydrogen atom, a double-bonded oxygen atom, and a hydroxyl group (-OH).
> > 
> > ${svgToken(methanoicAcidDisplayedSvg)}
> > 
> > 2. **Ethanedioic Acid (HOOC-COOH):**
> >    * A dicarboxylic acid consisting of two directly bonded carbon atoms, each attached to a double-bonded oxygen and a hydroxyl group.
> > 
> > ${svgToken(ethanedioicAcidDisplayedSvg)}
> 

> [!EXAMPLE]
> #### 📝 Worked Example 2: Comparative Solubility Explanation
> **Question:** Explain why hexanoic acid is much less soluble than ethanoic acid in water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare non-polar carbon chain lengths:**
> >    * Hexanoic acid has a much longer non-polar hydrocarbon (alkyl) chain (-C₅H₁₁) than ethanoic acid (-CH₃).
> > 2. **Analyze interaction with water molecules:**
> >    * This large hydrophobic chain disrupts the hydrogen bonding network between water molecules without forming sufficient intermolecular attractions to compensate.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Synthesis Equations for Methylpropanoic Acid
> **Question:** Write equations for the preparation of methylpropanoic acid:
> 1) By the oxidation of an alcohol.
> 2) By the hydrolysis of a nitrile.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Oxidation of an alcohol:**
> >    * Alcohol used: 2-methylpropan-1-ol, (CH₃)₂CHCH₂OH
> >    * Equation:
> >      $$(CH_3)₂CHCH₂OH + 2[O] → (CH_3)₂CHCOOH + H₂O$$
> 2. **Hydrolysis of a nitrile:**
>    * Nitrile used: 2-methylpropanenitrile, (CH₃)₂CHCN
>    * Equation (Acidic Hydrolysis):
>      $$(CH_3)₂CHCN + H^+ + 2H₂O → (CH_3)₂CHCOOH + NH₄^+$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Conversions of Methylpropanoic Acid
> **Question:** Write an equation for the conversion of methylpropanoic acid:
> 1) Into an acyl chloride.
> 2) Into a methyl ester.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Into an acyl chloride:**
> >    * Reagent: Phosphorus(V) chloride (PCl₅) under anhydrous conditions.
> >    * Product: 2-methylpropanoyl chloride
> >    * Equation:
> >      $$(CH_3)₂CHCOOH + PCl₅ → (CH_3)₂CHCOCl + POCl₃ + HCl$$
> 2. **Into a methyl ester:**
> >    * Reagent: Methanol (CH₃OH) with concentrated H₂SO₄ catalyst.
> >    * Product: methyl 2-methylpropanoate
> >    * Equation:
> >      $$(CH_3)₂CHCOOH + CH₃OH ⇌ (CH_3)₂CHCOOCH₃ + H₂O$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Chemical Identification Test
> **Question:** How could you distinguish chemically between separate samples of propanoic acid and propan-1-ol? State the reagent used and the observations for each sample.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Choose a suitable reagent:**
> >    * Sodium hydrogencarbonate (NaHCO₃(aq)) or sodium carbonate (Na₂CO₃(aq)).
> > 2. **State the observation for propanoic acid:**
> >    * Effervescence/fizzing occurs as carbon dioxide gas is produced:
> >      $$CH₃CH₂COOH + NaHCO₃ → CH₃CH₂COONa + CO₂ + H₂O$$
> > 3. **State the observation for propan-1-ol:**
> >    * No reaction and no visible change (no effervescence).

> [!EXAMPLE]
> #### 📝 Worked Example 6: Esterification Reaction & Naming
> **Question:** Write a balanced equation for the reaction of ethanoic acid with propan-2-ol in the presence of a concentrated sulfuric acid catalyst. Give the name of the organic product.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the equation:**
> >    $$CH₃COOH + CH₃CH(OH)CH₃ ⇌ CH₃COOCH(CH₃)₂ + H₂O$$
> 2. **Name the ester product:**
> >    * The alkyl group from the alcohol is **isopropyl** (or 1-methylethyl).
> >    * The carboxylate group from the acid is **ethanoate**.
> >    * Product name: **isopropyl ethanoate** (or propan-2-yl ethanoate)

> [!EXAMPLE]
> #### 📝 Worked Example 7: Mass Spectrometry Peak Explanation
> **Question:** In the mass spectrum of pure ethanoic acid, a weak molecular ion peak is observed at $m/z = 120$. Explain why this peak occurs.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Explain dimerisation:** Ethanoic acid molecules form stable dimers in the liquid and gaseous states held together by double hydrogen bonds.
> > 2. **Calculate the molar mass:** A single ethanoic acid molecule has a molecular formula of C₂H₄O₂ ($M_r = 60$). The dimer [CH₃COOH]₂ has a molecular mass of 120.
> > 3. **Identify the molecular ion:** The peak at $m/z = 120$ corresponds to the ionized dimer [(CH₃COOH)₂]⁺.
`,
    keyPoints: [
      'Carboxylic acids form stable dimers via double hydrogen bonding, raising boiling points.',
      'Carboxylate ions exhibit resonance symmetry with two identical carbon-oxygen bonds.',
      'Solubility decreases with chain length as the hydrophobic tail size increases.',
      'Esters lack intermolecular hydrogen bonds but can hydrogen-bond with water.',
      'Acidic hydrolysis of esters is reversible, whereas alkaline hydrolysis (saponification) goes to completion.'
    ]
  },
  {
    id: 'acyl-chlorides-condensation-polymers-u4-l5',
    title: 'Acyl Chlorides & Condensation Polymerisation',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Reactivity of Acyl Chlorides (RCOCl)
> Acyl chlorides contain the functional group -COCl:
> * **Preparation:** Synthesised by reacting a carboxylic acid with phosphorus(V) chloride (PCl₅) at room temperature under anhydrous conditions:
>   $$RCOOH + PCl_5 \\rightarrow RCOCl + POCl_3 + HCl(g)$$
>   * Misty fumes of hydrogen chloride (HCl) gas are evolved.
> * **Reactivity Explanation:** The carbonyl carbon in RCOCl is attached to **two strongly electronegative atoms** (oxygen and chlorine):
>   $$C^{\\delta+} = O^{\\delta-} \\quad \\text{and } C^{\\delta+} - Cl^{\\delta-}$$
>   * This creates a highly electron-deficient carbon centre ($C^{\\delta+}$) that is readily attacked by nucleophiles containing oxygen ($:OH_2, :OH^-, R'OH$) or nitrogen ($:NH_3, R'NH_2, R'_2NH$) lone pairs.
>   * Because Cl⁻ is a very stable leaving group, acyl chlorides undergo rapid nucleophilic addition-elimination reactions at room temperature without requiring heating or acid catalysts.

> [!IMPORTANT]
> ### ⚡ Stoichiometry with Nitrogen Nucleophiles
> When reacting acyl chlorides with nitrogen nucleophiles, two moles of the amine/ammonia are consumed per mole of acyl chloride because the released HCl is an acid and reacts with the basic amine to form an ammonium salt:
> 
> * **1. With Ammonia (Primary Amide + Ammonium Chloride):**
>   $$RCOCl + 2NH_3 \\rightarrow RCONH_2 + NH_4^+Cl^-$$
> * **2. With Primary Amines (N-Substituted Secondary Amide + Alkylammonium Chloride):**
>   $$RCOCl + 2R'NH_2 \\rightarrow RCONHR' + R'NH_3^+Cl^-$$
> * **3. With Secondary Amines (N,N-Disubstituted Tertiary Amide + Dialkylammonium Chloride):**
>   $$RCOCl + 2R'_2NH \\rightarrow RCONR'_2 + R'_2NH_2^+Cl^-$$
> * **4. Tertiary Amines (R'₃N):** Cannot react because the nitrogen atom has **no hydrogen atom to lose** to eliminate HCl.

> [!BOX]
> ### 🌺 Esters: Properties & Uses
> * **Physical Properties:** Esters are volatile, colourless liquids with characteristic pleasant fruity/sweet odors.
> * **Uses:** Widely used as food flavourings, perfumes, organic solvents (e.g. ethyl ethanoate as nail polish remover), and plasticisers.
> * **Saponification (Alkaline Hydrolysis of Triglycerides):**
>   * Vegetable oils and animal fats are triesters of glycerol (propane-1,2,3-triol) and long-chain fatty acids (e.g. stearic acid, C₁₇H₃₅COOH).
>   * Heating a triester with aqueous sodium hydroxide (NaOH) produces:
>     1. Propane-1,2,3-triol (glycerol).
>     2. Sodium carboxylate salts (soaps), e.g. sodium stearate (C₁₇H₃₅COONa).
>   $$\text{Triester} + 3NaOH \rightarrow \text{Propane-1,2,3-triol} + 3RCOONa$$

> [!IMPORTANT]
> ### ⛓️ Polyesters & Condensation Polymerisation
> * **Condensation Polymerisation Definition:** The formation of a polymer where two different bifunctional monomers react together with the simultaneous elimination of a small molecule (such as H₂O or HCl) at each linkage.
> * **Monomer Requirements:** Monomers must be **difunctional** (contain two reactive functional groups at opposite ends, e.g. a dicarboxylic acid / diacyl chloride and a diol).
> * **Terylene (PET):** Formed from benzene-1,4-dicarboxylic acid (terephthalic acid) and ethane-1,2-diol:
>   $$n(HOOC-C_6H_4-COOH) + n(HO-CH_2CH_2-OH) \rightarrow [-OC-C_6H_4-CO-O-CH_2CH_2-O-]_n + (2n-1)H_2O$$
> 
> > [!WARNING]
> > ### 🏭 Industrial Comparison: Dicarboxylic Acids vs. Diacyl Chlorides
> > * **Diacyl Chlorides (ClOC-R-COCl):** React much faster at room temperature with high, irreversible yields. However, they produce highly **corrosive and toxic HCl gas** as a byproduct and are significantly more expensive to manufacture.
> > * **Dicarboxylic Acids (HOOC-R-COOH):** Slower reaction requiring heating with an acid catalyst. However, they produce non-toxic **water (H₂O)** as a byproduct, making them much safer, environmentally friendly, and cheaper for large-scale industrial production.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Products of Propanoyl Chloride Reactions
> **Question:** Name the organic products formed in the reactions of propanoyl chloride (CH₃CH₂COCl) with:
> 1) Water
> 2) Methanol
> 3) Ammonia
> 4) Methylamine
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **With water:** Hydrolysis yields propanoic acid. Organic product: **propanoic acid**
> > 2. **With methanol:** Esterification yields methyl propanoate. Organic product: **methyl propanoate**
> > 3. **With ammonia:** Reaction yields primary amide. Organic product: **propanamide**
> > 4. **With methylamine:** Reaction yields N-substituted secondary amide. Organic product: **N-methylpropanamide**

> [!EXAMPLE]
> #### 📝 Worked Example 2: Equations for Reactions of Butanoyl Chloride
> **Question:** Write balanced equations for the reactions of butanoyl chloride (CH₃CH₂CH₂COCl) with:
> 1) propan-1-ol
> 2) ethylamine
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **With propan-1-ol:**
> >    $$CH_3CH_2CH_2COCl + CH_3CH_2CH_2OH \rightarrow CH_3CH_2CH_2COOCH_2CH_2CH_3 + HCl$$
> >    * Organic product name: **propyl butanoate**
> > 2. **With ethylamine (Note stoichiometry 1:2):**
> >    $$CH_3CH_2CH_2COCl + 2CH_3CH_2NH_2 \rightarrow CH_3CH_2CH_2CONHCH_2CH_3 + CH_3CH_2NH_3^+Cl^-$$
> >    * Organic product name: **N-ethylbutanamide**

> [!EXAMPLE]
> #### 📝 Worked Example 3: Naming Esters
> **Question:** Name the following esters:
> 1) CH₃CH₂COOCH₂CH₂CH₃
> 2) (CH₃)₂CHCOOCH₃
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **CH₃CH₂COOCH₂CH₂CH₃:**
> >    * Alkyl group attached to O: propyl (-CH₂CH₂CH₃).
> >    * Carboxylate group attached to C: propanoate (CH₃CH₂COO-).
> >    * IUPAC Name: **propyl propanoate**
> > 2. **(CH₃)₂CHCOOCH₃:**
> >    * Alkyl group attached to O: methyl (-CH₃).
> >    * Carboxylate group attached to C: 2-methylpropanoate ((CH₃)₂CHCOO-).
> >    * IUPAC Name: **methyl 2-methylpropanoate**

> [!EXAMPLE]
> #### 📝 Worked Example 4: Hydrolysis Equations of Propyl Butanoate
> **Question:** Write equations for the hydrolysis of propyl butanoate (CH₃CH₂CH₂COOCH₂CH₂CH₃) under:
> 1) Acidic conditions
> 2) Alkaline conditions
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Acidic Hydrolysis (Reversible):**
> >    $$CH_3CH_2CH_2COOCH_2CH_2CH_3 + H_2O \rightleftharpoons CH_3CH_2CH_2COOH + CH_3CH_2CH_2OH$$
> > 2. **Alkaline Hydrolysis (Irreversible):**
> >    $$CH_3CH_2CH_2COOCH_2CH_2CH_3 + OH^- \rightarrow CH_3CH_2CH_2COO^- + CH_3CH_2CH_2OH$$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Polymerisation Limitations
> **Question:** Why is it not possible to make a polymer by reacting HOOCCH₂COOH and CH₃OH?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze monomer functionality:** Methanol (CH₃OH) is a monofunctional alcohol containing only one -OH group.
> > 2. **Explain chain termination:** Once both carboxyl ends of propanedioic acid react with methanol, a simple diester (dimethyl propanedioate) is formed and chain growth stops completely.
> > 3. **State monomer requirement:** Condensation polymerisation requires bifunctional monomers at both ends to allow continuous propagation.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Polymer Repeat Unit Structure
> **Question:** Draw the repeat unit of the polymer formed between HOOCCOOH (ethanedioic acid) and CH₃CH(OH)CH(OH)CH₃ (butane-2,3-diol).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify eliminated groups:** Carboxyl -COOH loses -OH and hydroxyl -OH loses -H to release water.
> > 2. **Link monomer residues:** Combine the dicarbonyl residue (-C(=O)-C(=O)-) with the diol residue (-O-CH(CH₃)-CH(CH₃)-O-).
> > 3. **Write structural repeat unit:**
> >    $$[-C(=O)-C(=O)-O-CH(CH_3)-CH(CH_3)-O-]_n$$
> 
> ${svgToken(polyesterRepeatUnitSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 7: Nucleophilic Addition-Elimination Mechanism
> **Question:** Outline the key steps in the mechanism for the reaction of ethanoyl chloride (CH₃COCl) with water to form ethanoic acid and hydrogen chloride. Explain why this reaction occurs spontaneously at room temperature.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Step 1: Nucleophilic Attack (Addition):**
> >    * The carbonyl carbon is strongly electron-deficient ($C^{\delta+}$) due to electron withdrawal by both the oxygen and chlorine atoms.
> >    * A lone pair of electrons on the oxygen atom of water ($:OH_2$) attacks the carbonyl carbon, breaking the $C=O$ $\pi$ bond and pushing electrons onto the oxygen atom to form a tetrahedral intermediate ($-O^-$).
> > 2. **Step 2: Elimination & Regeneration of Carbonyl (C=O):**
> >    * The lone pair on the oxygen atom reforms the $C=O$ double bond, expelling the chloride ion (Cl⁻) as a stable leaving group.
> > 3. **Step 3: Deprotonation:**
> >    * Loss of a proton ($H^+$) from the protonated oxygen yields the neutral ethanoic acid molecule (CH₃COOH) and releases HCl(g).
> > 4. **Reason for spontaneous reaction:**
> >    * The high electronegativity of both O and Cl makes the carbonyl carbon exceptionally reactive towards nucleophiles, and Cl⁻ is an excellent leaving group, yielding a very low activation energy.

> [!EXAMPLE]
> #### 📝 Worked Example 8: Saponification Equation for a Triglyceride
> **Question:** Write a balanced equation for the complete alkaline hydrolysis (saponification) of glyceryl tristearate ((C₁₇H₃₅COO)₃C₃H₅) using aqueous sodium hydroxide. Name the organic products formed.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the stoichiometry:**
> >    * Glyceryl tristearate is a triester containing three ester bonds; therefore, 1 mole of triester reacts with exactly **3 moles** of NaOH.
> > 2. **Write the balanced chemical equation:**
> >    $$(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \rightarrow C_3H_5(OH)_3 + 3C_{17}H_{35}COONa$$
> > 3. **Name the organic products:**
> >    * C₃H₅(OH)₃: **propane-1,2,3-triol** (glycerol).
> >    * C₁₇H₃₅COONa: **sodium stearate** (soap).

> [!EXAMPLE]
> #### 📝 Worked Example 9: Deducing Monomers from a Polyester Chain
> **Question:** A sample of a biodegradable polyester has the following repeat unit:
> $$[-O-CH(CH_3)-CO-]_n$$
> 1) Deduce whether this polymer is formed from one monomer or two different monomers.
> 2) Draw the structural formula and give the IUPAC name of the monomer(s) used.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the monomer type:**
> >    * The repeat unit contains both an alcohol oxygen end (-O-) and an acyl/carbonyl end (-CO-) within the same continuous unit.
> >    * Therefore, it is formed from **a single monomer** that contains both a hydroxyl group (-OH) and a carboxyl group (-COOH) in the same molecule (a hydroxycarboxylic acid).
> > 2. **Reconstruct the monomer formula:**
> >    * Add -H to the oxygen end and -OH to the carbonyl end:
> >      $$HO-CH(CH_3)-COOH$$
> > 3. **Give the IUPAC name:**
> >    * Main chain has 3 carbons with -COOH at Carbon-1 and -OH at Carbon-2.
> >    * IUPAC Name: **2-hydroxypropanoic acid** (commonly known as lactic acid; the polymer is poly(lactic acid) or PLA).
`,
    keyPoints: [
      'Acyl chlorides undergo nucleophilic addition-elimination reactions, releasing HCl gas.',
      'Reactions of acyl chlorides with nitrogen nucleophiles consume 2 moles of amine per mole of acyl chloride.',
      'Saponification converts triglycerides into glycerol and soap (sodium carboxylates).',
      'Condensation polymerisation eliminates a small molecule (H₂O or HCl) to form polyesters.',
      'Bifunctional monomers are strictly required for polymerisation; monofunctional monomers cause chain termination.',
      'Industrially, dicarboxylic acids are preferred over diacyl chlorides to avoid releasing toxic and corrosive HCl gas.'
    ]
  }
];
