import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality";
export const lessonNumber = 5;

export const theoryMarkdown = `
# Topic 15: Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality
This lesson covers structural isomerism vs stereoisomerism, chirality, optical activity, polarimetry, the stereochemical outcomes of SN1 and SN2 reaction mechanisms, carbonyl compounds (bonding, physical properties, redox, chemical tests, and addition mechanisms), carboxylic acids (bonding, nomenclature, dimerisation, preparations, and reactions), esters (nomenclature, smells, and saponification), acyl chlorides, and polyesters (condensation polymerisation).
`;

const polarisationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Unpolarized vs. Plane-Polarized Light</text>
  
  <!-- Left Side: Unpolarized Light representation -->
  <g transform="translate(100, 180)">
    <!-- Light source representation -->
    <circle cx="-30" cy="0" r="15" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2" />
    <circle cx="-30" cy="0" r="5" fill="#fff" />
    <!-- Starburst arrows for unpolarized light -->
    <path d="M 30,0 L 90,0 M 60,-30 L 60,30 M 39,-21 L 81,21 M 39,21 L 81,-21" stroke="#94a3b8" stroke-width="2" />
    <path d="M 90,0 L 85,-4 L 85,4 Z M 60,30 L 56,25 L 64,25 Z M 60,-30 L 56,-25 L 64,-25 Z M 81,21 L 76,22 L 80,16 Z M 81,-21 L 76,-22 L 80,-16 Z" fill="#94a3b8" />
    <text x="60" y="50" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Oscillates in all planes</text>
    <text x="60" y="65" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Unpolarized Light</text>
  </g>
  
  <!-- Middle: Light waves propagation -->
  <g transform="translate(250, 180)">
    <!-- Horizontal wave (blue, unpolarized component) -->
    <path d="M 0,0 Q 30,50 60,0 T 120,0 T 180,0 T 240,0" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-opacity="0.4" />
    <!-- Vertical wave (yellow/orange, which will pass) -->
    <path d="M 0,0 Q 30,-60 60,0 T 120,0 T 180,0 T 240,0" fill="none" stroke="#f59e0b" stroke-width="2.5" />
    
    <text x="120" y="-70" fill="#f59e0b" font-size="11" text-anchor="middle">Vertical Wave Component</text>
    <text x="120" y="70" fill="#0ea5e9" font-size="11" text-anchor="middle" fill-opacity="0.7">Horizontal Wave Component</text>
  </g>
  
  <!-- The Filter -->
  <g transform="translate(500, 70)">
    <!-- 3D grid filter -->
    <rect x="0" y="0" width="40" height="220" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2" />
    <!-- Slits -->
    <line x1="20" y1="10" x2="20" y2="210" stroke="#f8fafc" stroke-width="3" stroke-dasharray="10 6" />
    <text x="20" y="240" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Polarizing Filter</text>
    <text x="20" y="255" fill="#94a3b8" font-size="10" text-anchor="middle">(Vertical Slits)</text>
  </g>
  
  <!-- Right Side: Plane polarized light wave -->
  <g transform="translate(560, 180)">
    <!-- Only vertical wave continues -->
    <path d="M 0,0 Q 30,-60 60,0 T 120,0 T 180,0 T 240,0" fill="none" stroke="#f59e0b" stroke-width="2.5" />
    <!-- Blue wave is blocked -->
    <path d="M 0,0 L 20,0" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="2 2" stroke-opacity="0.3" />
    
    <text x="120" y="-70" fill="#f59e0b" font-size="11" text-anchor="middle">Oscillates in a single plane</text>
    <text x="120" y="50" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Plane-Polarized Light</text>
  </g>
</svg>`;

const polarimeterSetupSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Polarimeter Instrumental Setup</text>
  
  <!-- Axis line connecting everything -->
  <line x1="50" y1="180" x2="900" y2="180" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 5" />
  
  <!-- 1. Monochromatic Light Source -->
  <g transform="translate(100, 180)">
    <circle cx="0" cy="0" r="25" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="2" />
    <path d="M -8,-8 L 8,8 M -8,8 L 8,-8 M -12,0 L 12,0 M 0,-12 L 0,12" stroke="#f59e0b" stroke-width="2" />
    <circle cx="0" cy="0" r="6" fill="#fff" />
    <text x="0" y="45" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Light Source</text>
    <text x="0" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">(Monochromatic)</text>
  </g>
  
  <!-- Arrow -->
  <path d="M 160,180 L 190,180" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 2. Polarizer -->
  <g transform="translate(240, 180)">
    <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <!-- vertical lines to indicate polarizer slits -->
    <line x1="0" y1="-25" x2="0" y2="25" stroke="#f8fafc" stroke-width="2" />
    <line x1="-10" y1="-20" x2="-10" y2="20" stroke="#475569" stroke-width="1" />
    <line x1="10" y1="-20" x2="10" y2="20" stroke="#475569" stroke-width="1" />
    <text x="0" y="45" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Polarizer</text>
    <text x="0" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">(Produces polarised light)</text>
  </g>
  
  <!-- Arrow -->
  <path d="M 300,180 L 330,180" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 3. Sample Tube -->
  <g transform="translate(450, 180)">
    <!-- The cylinder container -->
    <rect x="-80" y="-20" width="160" height="40" rx="5" fill="#1e293b" fill-opacity="0.6" stroke="#94a3b8" stroke-width="2" />
    <rect x="-70" y="-15" width="140" height="30" rx="3" fill="#10b981" fill-opacity="0.15" />
    <!-- Rotating arrow inside indicating optical activity -->
    <path d="M -30,-5 Q 0,-15 30,-5" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#curve-arrow)" />
    <text x="0" y="35" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Sample Tube</text>
    <text x="0" y="48" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Optically Active Solution</text>
    <text x="0" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">(Rotates plane of light)</text>
  </g>
  
  <!-- Arrow -->
  <path d="M 570,180 L 600,180" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 4. Analyzer -->
  <g transform="translate(680, 180)">
    <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <!-- rotated slit by angle alpha (e.g. 30 deg) -->
    <line x1="-13" y1="-22" x2="13" y2="22" stroke="#f59e0b" stroke-width="2.5" />
    <text x="0" y="45" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Analyzer</text>
    <text x="0" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">(Rotated to detect angle &amp; direction)</text>
    <!-- Angle alpha display -->
    <path d="M 0,-30 A 30 30 0 0 1 15,-26" fill="none" stroke="#f59e0b" stroke-width="1.5" />
    <text x="18" y="-35" fill="#f59e0b" font-size="10" font-weight="bold">α</text>
  </g>
  
  <!-- Arrow -->
  <path d="M 740,180 L 770,180" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  
  <!-- 5. Viewer -->
  <g transform="translate(830, 180)">
    <!-- Eye shape -->
    <path d="M -20,0 C -10,-15 10,-15 20,0 C 10,15 -10,15 -20,0 Z" fill="none" stroke="#f8fafc" stroke-width="2" />
    <circle cx="0" cy="0" r="6" fill="#38bdf8" />
    <circle cx="0" cy="0" r="2.5" fill="#000" />
    <text x="0" y="45" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Viewer</text>
    <text x="0" y="60" fill="#94a3b8" font-size="9" text-anchor="middle">(Sees max brightness at angle α)</text>
  </g>
  
  <!-- Definitions for arrows -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#94a3b8" />
    </marker>
    <marker id="curve-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
  </defs>
</svg>`;

const chiralVsAchiralSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <!-- Vertical separator dividing Chiral and Achiral -->
  <line x1="500" y1="20" x2="500" y2="340" stroke="#1e293b" stroke-width="2" />
  
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
  
  <!-- Right Side: Achiral Molecules -->
  <g transform="translate(500, 0)">
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
>    * *Geometric Isomerism ($E$-$Z$ / $cis$-$trans$):* Arises due to restricted rotation about a double bond (e.g., \\\\text{C}=\\\\text{C}).
>    * *Optical Isomerism (Chirality):* Arises in molecules containing a chiral centre, resulting in non-superimposable mirror images.

> [!IMPORTANT]
> ### 🪞 Chirality & Optical Activity
> * **Optical Activity:** The ability of a compound to rotate the plane of plane-polarised light.
> * **Chiral Centre (Asymmetric Carbon):** A carbon atom bonded to **four different atoms or groups of atoms**. It is denoted with an asterisk (*). The presence of a chiral centre results in a molecule that lacks a plane of symmetry (asymmetric).
> * **Enantiomers (Optical Isomers):** Optical isomers that are non-superimposable mirror images of each other. They rotate the plane of polarised light by equal angles in opposite directions.
> * **Properties of Enantiomers:**
>    * *Physical Properties:* Identical (melting point, boiling point, density, etc.) **except** they rotate plane-polarised light in opposite directions (e.g., $+60^{\\\\circ}$ and $-60^{\\\\circ}$).
>    * *Chemical Properties:* Identical **except** when reacting with other chiral molecules (e.g., chiral enzymes or receptors in biological systems).
> * **Racemic Mixture (Racemate):** An equimolar mixture containing equal amounts (50:50 ratio) of both enantiomers. It is **optically inactive** because the opposite rotations cancel each other out.
> 
> > [!TIP]
> > ### ✏️ Exam Technique: Drawing Optical Isomers
> > 1. **Always use 3D wedge/dash representation:** Draw structures using tetrahedral shape representation (two lines in the plane, one wedge pointing towards you, and one dashed line pointing away from you).
> > 2. **Identify the chiral carbon:** Clearly mark the asymmetric carbon atom with an asterisk (*).
> > 3. **Draw the mirror image:** Draw a vertical mirror plane, and construct the second enantiomer as a reflected image of the first.
> 
${svgToken(chiralVsAchiralSvg)}

> [!BOX]
> ### 🔬 Plane-Polarised Light & Polarimetry
> * **Plane-Polarised Light:** Monochromatic light (light of a single frequency) whose waves oscillate in a single plane. Unpolarised light oscillates in all planes perpendicular to the direction of travel.
> * **Polarizer:** A filter that converts unpolarised light into plane-polarised light.
> * **Analyzer:** A second filter rotated to detect the angle and direction of optical rotation.
> * **Polarimeter Setup:** The sequence of components in a polarimeter measurement:
>   $$\\\\text{Monochromatic Light Source} \\\\rightarrow \\\\text{Polarizer} \\\\rightarrow \\\\text{Sample Tube} \\\\rightarrow \\\\text{Analyser} \\\\rightarrow \\\\text{Viewer}$$
>   * *Dextrorotatory ($+$):* Clockwise rotation of the plane of light.
>   * *Laevorotatory ($-$):* Anticlockwise rotation of the plane of light.
> 
${svgToken(polarisationSvg)}

${svgToken(polarimeterSetupSvg)}

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
> * **1. $\\\\text{CBr₂ClF}$:** The central carbon atom is bonded to two bromine atoms. Since they are identical, there are only three different groups attached. Thus, there is **no chiral centre**.
> * **2. $\\\\text{CH₃CHBrCH₂CH₃}$:** Carbon-2 is bonded to $-\\\\text{H}$, $-\\\\text{Br}$, $-\\\\text{CH₃}$, and $-\\\\text{CH₂CH₃}$. Since these four groups are entirely different, Carbon-2 is a **chiral centre**: $\\\\text{CH₃C}^{\\\\ast}\\\\text{HBrCH₂CH₃}$
> * **3. $\\\\text{CH₃CH₂CHBrCH₂CH₃}$:** Carbon-3 is bonded to $-\\\\text{H}$, $-\\\\text{Br}$, and two identical ethyl ($-\\\\text{CH₂CH₃}$) groups. Thus, there is **no chiral centre**.
> * **4. $\\\\text{CH₃CH₂CHBrCHBrCH₃}$:**
>    * Carbon-3 is bonded to $-\\\\text{H}$, $-\\\\text{Br}$, $-\\\\text{CH₂CH₃}$, and $-\\\\text{CHBrCH₃}$. These four groups are different, so Carbon-3 is a **chiral centre**.
>    * Carbon-4 is bonded to $-\\\\text{H}$, $-\\\\text{Br}$, $-\\\\text{CH₃}$, and $-\\\\text{CH₂CHBrCH₂CH₃}$. These four groups are different, so Carbon-4 is also a **chiral centre**.

<br>

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

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Analyzing Enantiomer Mixtures
> **Question:** A dextrorotatory enantiomer has an optical rotation of $+43^{\\\\circ}$. A mixture of this enantiomer and its laevorotatory enantiomer has a rotation of $-10^{\\\\circ}$. What does this information indicate about the composition of this mixture?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce whether the mixture is racemic:** Since the net optical rotation is not $0^{\\\\circ}$, the mixture is **not racemic** (it is not equimolar).
> > 2. **Deduce which enantiomer is in excess:** Since the net observed rotation is negative ($-10^{\\\\circ}$), the mixture contains an **excess of the laevorotatory ($-$) enantiomer**.
> > 3. **Optional Quantitative Analysis (Calculating exact percentages):**
> >    * Let $x$ be the mole fraction of the laevorotatory enantiomer, and $(1-x)$ be the fraction of the dextrorotatory enantiomer.
> >    * Net rotation: $x(-43) + (1-x)(+43) = -10$
> >    * $-43x + 43 - 43x = -10 \\\\implies -86x = -53 \\\\implies x \\\\approx 0.616$ (or $61.6\%$)
> >    * Dextrorotatory fraction = $1 - 0.616 = 0.384$ (or $38.4\%$)
> >    * Thus, the mixture consists of approximately $61.6\%$ of the laevorotatory enantiomer and $38.4\%$ of the dextrorotatory enantiomer.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Drawing 3D Enantiomers of Lactic Acid
> **Question:** Draw the 3D tetrahedral structures of the two enantiomers of 2-hydroxypropanoic acid (lactic acid) to show they are non-superimposable mirror images.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the chiral carbon and its four groups:**
> >    * The central carbon (Carbon-2) is bonded to four different groups: $-\\\\text{H}$, $-\\\\text{CH}_3$, $-\\\\text{OH}$, and $-\\\\text{COOH}$
> > 2. **Draw the first enantiomer in 3D:**
> >    * Place the chiral carbon in the centre.
> >    * Draw two bonds in the plane of the paper (e.g. $-\\\\text{COOH}$ pointing up, $-\\\\text{CH}_3$ pointing down-left).
> >    * Draw a wedge for a group pointing towards you (e.g. $-\\\\text{OH}$ pointing down-right).
> >    * Draw a dashed bond for a group pointing away (e.g. $-\\\\text{H}$ pointing back).
> > 3. **Draw the mirror plane:**
> >    * Draw a vertical dashed line to represent the mirror.
> > 4. **Draw the reflected mirror image:**
> >    * Reflect the structure on the other side of the mirror plane so that the groups face the mirror (e.g. $-\\\\text{OH}$ wedge points down-left towards the mirror, $-\\\\text{CH}_3$ points down-right away from the mirror).

${svgToken(lacticAcidEnantiomersSvg)}

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Chiral Centres in Amino Acids
> **Question:** Alanine is an amino acid with the structural formula $\\\\text{CH}_3\\\\text{CH(NH}_2\\\\text{)COOH}$. Identify the chiral centre in alanine and explain why it is chiral.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze each carbon atom in the molecule:**
> >    * **Carbon-1 (carboxylic acid carbon):** Part of the $-\\\\text{COOH}$ group. It has a double bond to oxygen, so it is only bonded to three groups. It cannot be chiral.
> >    * **Carbon-3 (methyl carbon):** Part of the $-\\\\text{CH}_3$ group. It is bonded to three identical hydrogen atoms, so it cannot be chiral.
> >    * **Carbon-2 (alpha carbon):** Bonded to four distinct groups: $-\\\\text{H}$, $-\\\\text{CH}_3$, $-\\\\text{NH}_2$, and $-\\\\text{COOH}$
> > 2. **Formulate the explanation:**
> >    * Carbon-2 is the chiral centre because it is bonded to four different atoms or groups of atoms.
> >    * This asymmetric arrangement means the molecule lacks a plane of symmetry, resulting in two non-superimposable mirror images (enantiomers).
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
> ### ⚛️ The $S_N2$ Mechanism & Stereochemical Inversion
> The $S_N2$ mechanism operates primarily for primary halogenoalkanes:
> * **Bimolecular:** The rate-determining step involves both the nucleophile (e.g. $\\text{OH}^-$) and the halogenoalkane.
> * **Backside Attack:** The nucleophile attacks the carbon atom from the opposite side of the leaving group (the halogen atom) to minimize electrostatic repulsion.
> * **Transition State:** A high-energy intermediate forms where both the incoming nucleophile and leaving halogen are partially bonded to the carbon:
>   $$\\text{[HO} \\cdots \\text{C(R)(H)(R\')} \\cdots \\text{Br]}^-$$
> * **Walden Inversion:** As the carbon-halogen bond breaks and the carbon-nucleophile bond forms, the other three groups attached to the carbon atom are pushed through, inverting the configuration (like an umbrella turning inside out in a gale).
> * **Optical Activity Outcome:** If the reactant is a single optically active enantiomer, the product will be a **single enantiomer with inverted configuration** (Walden inversion). The optical activity is retained but the direction of rotation may change.

> [!IMPORTANT]
> ### ⚛️ The $S_N1$ Mechanism & Racemisation
> The $S_N1$ mechanism operates primarily for tertiary halogenoalkanes:
> * **Step 1: Carbocation Formation (Rate-Determining):** The carbon-halogen bond breaks heterolytically, releasing a halide ion and forming a carbocation intermediate:
>   $$\\text{R₃C-Br} \\rightarrow \\text{R₃C}^+ + \\text{Br}^-$$
> * **Planar Intermediate:** The carbocation intermediate ($\\text{R₃C}^+$) has a **planar** trigonal geometry around the positively charged carbon atom.
> * **Step 2: Nucleophilic Attack:** The nucleophile can attack the planar carbon atom from either the left or the right side.
> * **Equal Probability:** Because the carbocation is planar, there is an **equal (50:50) probability** of attack from either side.
> * **Optical Activity Outcome:** If the starting halogenoalkane is a single optically active enantiomer, nucleophilic attack yields equal quantities of both enantiomers, forming a **racemic mixture**.
> * **Loss of Activity:** The product is **optically inactive** (racemisation has occurred).

> [!EXAMPLE]
> #### 📝 Worked Example 1: SN2 Transition State (Checkpoint Q1)
> **Question:** 2-Bromobutane and cyanide ions react together by an $S_N2$ mechanism. Draw the structure of the transition state formed in this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify groups on Carbon-2:** Carbon-2 is bonded to: $-\\text{H}$, $-\\text{CH₃}$, $-\\text{CH₂CH₃}$, and $-\\text{Br}$.
> > 2. **Set up the transition state layout:**
> >    * Place the central carbon in the middle.
> >    * Use dashed lines to show the partial bond to the incoming nucleophile ($-\\text{CN}$) and the leaving group ($-\\text{Br}$).
> >    * Arrange the other three groups ($-\\text{H}$, $-\\text{CH₃}$, $-\\text{CH₂CH₃}$) vertically and in a planar arrangement perpendicular to the nucleophile-leaving group axis.
> >    * Wrap the entire structure in square brackets with a negative charge outside:
> >      $$\\left[ \\text{NC} \\cdots \\text{C(H)(CH₃)(CH₂CH₃)} \\cdots \\text{Br} \\right]^-$$

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: SN1 Mechanism & Optical Inactivity (Checkpoint Q2)
> **Question:** 2-Bromopropane and cyanide ions react together by an $S_N1$ mechanism. Explain why there is no change in optical activity in this reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the starting material:** 2-bromopropane has the structure $\\text{CH₃CHBrCH₃}$.
> > 2. **Check for chirality:** The central carbon atom is bonded to two identical methyl ($-\\text{CH₃}$) groups. Thus, it does not contain a chiral centre and is **achiral**.
> > 3. **Explain optical activity:** Since the starting material 2-bromopropane is achiral, it has no optical activity.
> > 4. **Explain product chirality:** The product 2-methylpropanenitrile ($\\text{(CH₃)₂CHCN}$) is also achiral and optically inactive.
> > 5. **Conclusion:** Because both the reactant and the product are achiral, there is no change in optical activity (the mixture remains optically inactive throughout).
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
> #### 📝 Worked Example 1: Displayed Formulas (Checkpoint Q1)
> **Question:** Write the displayed formula for: (a) propanal, (b) propanone.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Propanal (CH₃CH₂CHO):** Display a 3-carbon chain. Carbon-1 carries double-bonded oxygen and single-bonded hydrogen:
> >   $$\\text{H-C(H)(H)-C(H)(H)-C(=O)-H}$$
> * **(b) Propanone (CH₃COCH₃):** Display a 3-carbon chain. Carbon-2 (middle carbon) carries double-bonded oxygen, flanked by two methyl groups:
> >   $$\\text{H-C(H)(H)-C(=O)-C(H)(H)-H}$$

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Solubility Explanation (Checkpoint Q2)
> **Question:** Draw a diagram and explain why propanone is soluble in water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. **Identify the solvent and solute:** Water is $\\text{H₂O}$, propanone is $\\text{(CH₃)₂C=O}$.
> 2. **Specify the polarities:** Oxygen of propanone carries a partial negative charge ($\\text{O}^{\\delta-}$). Hydrogen of water carries a partial positive charge ($\\text{H}^{\\delta+}$).
> 3. **Explain the attraction:** A hydrogen bond forms between the lone pairs on the carbonyl oxygen atom ($\u200B^{\\delta-}$) and the hydrogen atom ($\u200B^{\\delta+}$) of the water molecule.
> 4. **Diagram layout:**
>    $$\\text{(CH₃)₂C=O}^{\\delta-} \\cdots \\text{H}^{\\delta+}\\text{-O-H}$$
>    The dotted line represents the strong hydrogen bond. This interaction releases enough energy to allow propanone to dissolve in water.
`,
        keyPoints: [
            'Aldehydes carry terminal carbonyl groups; ketones carry internal carbonyl groups.',
            'Carbonyl double bonds are highly polar, causing dipole-dipole attractions that raise boiling points above those of alkanes.',
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
> Because the carbonyl bond is polarised ($\\text{C}^{\\delta+} = \\text{O}^{\\delta-}$), nucleophiles attack the electron-deficient carbon. This is the basis of **nucleophilic addition** reactions in carbonyls.

> [!IMPORTANT]
> ### ⚛️ Nucleophilic Addition Mechanism with HCN
> Aldehydes and ketones react with hydrogen cyanide ($\\text{HCN}$) to form **hydroxynitriles**.
> * **Reaction Conditions:** $\\text{HCN}$ is highly toxic, so it is prepared *in situ* using sodium/potassium cyanide ($\\text{NaCN}$/$\\text{KCN}$) and dilute sulfuric acid ($\\text{H₂SO₄}$) at pH 5-8.
> * **Nucleophile:** Cyanide ion ($\\text{CN}^-$), acting as the nucleophile.
> * **The Reaction Mechanism:**
>   1. **Step 1:** The nucleophile $\\text{CN}^-$ attacks the electrophilic carbon $\\text{C}^{\\delta+}$ from its lone pair, causing the $\\pi$-bond electrons of the $\\text{C}=\\text{O}$ to migrate onto the oxygen atom.
>   2. A tetrahedral intermediate is formed with a negatively charged oxygen ($\\text{:O}^-$):
>      $$\\text{R-C(CN)(R\')-O}^-$$
>   3. **Step 2:** The oxygen intermediate abstracts a proton ($\\text{H}^+$) from a hydrogen cyanide molecule ($\\text{HCN}$) to form the hydroxyl group ($-\\text{OH}$), reforming the $\\text{CN}^-$ catalyst:
>      $$\\text{R-C(CN)(R\')-O}^- + \\text{HCN} \\rightarrow \\text{R-C(OH)(CN)-R\'} + \\text{CN}^-$$
> 
> **Reaction Equations:**
> * **Addition to propanal:**
>   $$\\text{CH₃CH₂CHO} + \\text{HCN} \\rightarrow \\text{CH₃CH₂CH(OH)CN} \\quad \\text{(2-hydroxybutanenitrile)}$$
> * **Addition to butanone:**
>   $$\\text{CH₃COCH₂CH₃} + \\text{HCN} \\rightarrow \\text{CH₃C(CN)(OH)CH₂CH₃} \\quad \\text{(2-hydroxy-2-methylbutanenitrile)}$$

> [!WARNING]
> ### 🪞 Planar Carbonyls & Racemic Mixtures
> If we start with an unsymmetrical carbonyl compound (such as propanal or phenylethanone), the product hydroxynitrile contains a chiral carbon.
> * **Planar Geometry:** The carbonyl group $\\\\text{C}=\\\\text{O}$ is **planar** (trigonal planar arrangement with $120^{\\\\circ}$ bond angles around the carbonyl carbon).
> * **Equal Probability:** The nucleophile $\\text{CN}^-$ can attack the planar carbon atom from **above or below the plane with equal (50:50) probability**.
> * **Racemic Product:** Because attack from above yields one enantiomer, and attack from below yields the mirror image, equal amounts of both enantiomers are formed.
> * **Optical Inactivity:** This 50:50 mixture is called a **racemic mixture** (or racemate). It is optically inactive because the clockwise rotation of light by one enantiomer is exactly cancelled out by the anticlockwise rotation of the other.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydroxynitriles Products (Checkpoint Q1)
> **Question:** What are the names of the organic products of these reactions?
> (a) methanal + hydrogen cyanide $\\rightarrow$
> (b) propanone + hydrogen cyanide $\\rightarrow$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) methanal + hydrogen cyanide:**
> >   1. Methanal is $\\text{HCHO}$. The addition product is $\\text{CH₂(OH)CN}$.
> >   2. Longest carbon chain containing the nitrile carbon has 2 carbons $\\rightarrow$ **ethanenitrile**.
> >   3. Carbon-2 has a hydroxyl group.
> >   4. Product name: **2-hydroxyethanenitrile** (also known as hydroxyacetonitrile).
> * **(b) propanone + hydrogen cyanide:**
> >   1. Propanone is $\\text{CH₃COCH₃}$. The addition product is $\\text{(CH₃)₂C(OH)CN}$.
> >   2. Longest carbon chain is 3 carbons $\\rightarrow$ **propanenitrile**.
> >   3. Carbon-2 has a methyl and a hydroxyl group.
> >   4. Product name: **2-hydroxy-2-methylpropanenitrile**

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Double Precipitate Test Deduction (Checkpoint Q2)
> **Question:** Compound X reacts with 2,4-dinitrophenylhydrazine and with iodine in aqueous alkali in separate tests. In both cases, a coloured precipitate forms. Explain which of these could be compound X: propanal, propan-1-ol, propan-2-ol, propanone.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. **Analyze 2,4-DNPH test:** Only carbonyl compounds (aldehydes and ketones) form a coloured (orange/yellow) precipitate. This limits candidates to: **propanal** and **propanone** (alcohols like propan-1-ol and propan-2-ol do not react).
> 2. **Analyze Iodine/alkali (iodoform) test:** Only compounds containing the methyl carbonyl ($\\text{CH₃C=O}$) or methyl alcohol ($\\text{CH₃CH(OH)-}$) groups form a yellow precipitate.
>    * Propanal ($\\text{CH₃CH₂CHO}$) is an aldehyde but does not contain a methyl group directly bonded to the carbonyl carbon (negative test).
>    * Propanone ($\\text{CH₃COCH₃}$) contains the methyl carbonyl group (positive test).
> 3. **Conclusion:** Therefore, compound X must be **propanone** as it is the only compound that reacts positively with both reagents.
> 
> <br>
> 
> > [!EXAMPLE]
> > #### 📝 Worked Example 3: Optical Inactivity of Ethanal & HCN Addition Product
> > **Question:** Explain why the reaction of ethanal ($\\\\text{CH}_3\\\\text{CHO}$) with HCN (in the presence of KCN) produces an optically inactive mixture.
> > 
> > > [!TIP]
> > > **🔑 Step-by-step Solution:**
> > > 
> > > 1. **Identify the geometry of the reactant carbonyl group:**
> > >    * The carbonyl group ($\\\\text{C}=\\\\text{O}$) in ethanal has a trigonal planar shape around the carbonyl carbon atom.
> > > 2. **Analyze the nucleophilic attack probability:**
> > >    * The cyanide ion nucleophile ($:\\\\text{CN}^-$) can attack the planar carbonyl carbon with equal probability from either above or below the plane (50:50 ratio).
> > > 3. **Explain the stereochemical outcome:**
> > >    * Because the reactant has different groups attached to the carbonyl carbon ($-\\\\text{H}$ and $-\\\\text{CH}_3$), the addition of $-\\\\text{CN}$ creates a chiral centre.
> > >    * Attack from above yields one enantiomer, while attack from below yields the mirror-image enantiomer.
> > > 4. **Conclude on optical activity:**
> > >    * An equimolar (50:50) mixture of the two enantiomers is formed, which is a racemic mixture.
> > >    * The racemic mixture is optically inactive because the clockwise rotation of plane-polarised light by one enantiomer is exactly cancelled out by the anticlockwise rotation of the other.
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
> Carbonyl compounds are reduced to alcohols using **lithium tetrahydridoaluminate(III)** (lithium aluminium hydride, $\\text{LiAlH₄}$) dissolved in dry ether.
> * **Reducing Agent Representation:** Represented as $2[\\text{H}]$ in equations.
> * **Reduction of Aldehydes to Primary Alcohols:**
>   $$\\text{CH₃CH₂CHO} + 2[\\text{H}] \\rightarrow \\text{CH₃CH₂CH₂OH} \\quad \\text{(propanal } \\rightarrow \\text{ propan-1-ol)}$$
> * **Reduction of Ketones to Secondary Alcohols:**
>   $$\\text{CH₃COCH₂CH₃} + 2[\\text{H}] \\rightarrow \\text{CH₃CH(OH)CH₂CH₃} \\quad \\text{(butanone } \\rightarrow \\text{ butan-2-ol)}$$

> [!IMPORTANT]
> ### 🧪 Oxidation Reactions (Aldehydes to Carboxylic Acids)
> Four key reagents are used to perform and test these oxidation pathways (represented as $[\\text{O}]$):
> 
> #### Table A: Oxidation Reagents & Observations
> | Reagent | Colour Change with Aldehydes | Notes / Chemical Reaction |
> | :--- | :--- | :--- |
> | Acidified Potassium Dichromate(VI) | orange solution $\\rightarrow$ green solution | $\\text{Cr}^{6+}$ reduced to $\\text{Cr}^{3+}$. Under reflux: $\\text{RCHO} + [\\text{O}] \\rightarrow \\text{RCOOH}$. |
> | Fehling\'s Solution | deep blue solution $\\rightarrow$ red-brown precipitate | $\\text{Cu}^{2+}$ complex reduced to copper(I) oxide: $\\text{Cu₂O(s)}$. |
> | Benedict\'s Solution | deep blue solution $\\rightarrow$ red-brown precipitate | Uses copper(II) citrate instead of tartrate. Same reaction. |
> | Tollens\' Reagent | colourless solution $\\rightarrow$ silver mirror | Contains ammoniacal silver nitrate $[\\text{Ag(NH₃)₂}]^+$. $\\text{Ag}^+$ reduced to $\\text{Ag(s)}$. |
> 
> * **Ketones Reaction:** None of these reagents react with ketones (no colour changes observed, Tollens' remains colourless).

> [!BOX]
> ### 🧪 Triiodomethane (Iodoform) Reaction
> * **Reagent:** Iodine ($\\text{I₂}$) in aqueous sodium hydroxide ($\\text{NaOH}$).
> * **Target Group:** Specifically tests for the methyl carbonyl group:
>   $$\\text{CH₃-C=O}$$
> * **Positive Result:** A **yellow precipitate** of triiodomethane ($\\text{CHI₃}$) forms, accompanied by a distinct antiseptic smell.
> * **Solute Range:** Ethanal is the only aldehyde that gives a positive result. All methyl ketones (propanone, butanone, pentan-2-one) react positively. Pentan-3-one is negative.
> * **Alcohol Classification:** Alcohols containing the $\\text{CH₃CH(OH)-}$ group also give a positive test because they are oxidised by the iodine/alkali mixture to methyl carbonyls in situ.
> 
> #### Table B: Iodoform Test Results for Alcohols
> | Alcohol | Structure | Oxidation Product | Test Result |
> | :--- | :--- | :--- | :--- |
> | ethanol | $\\text{CH₃CH₂OH}$ | $\\text{CH₃CHO}$ | positive |
> | propan-1-ol | $\\text{CH₃CH₂CH₂OH}$ | $\\text{CH₃CH₂CHO}$ | negative |
> | propan-2-ol | $\\text{CH₃CH(OH)CH₃}$ | $\\text{CH₃COCH₃}$ | positive |
> | butan-1-ol | $\\text{CH₃CH₂CH₂CH₂OH}$ | $\\text{CH₃CH₂CH₂CHO}$ | negative |
> | butan-2-ol | $\\text{CH₃CH(OH)CH₂CH₃}$ | $\\text{CH₃COCH₂CH₃}$ | positive |
> | 2-methylpropan-1-ol | $\\text{(CH₃)₂CHCH₂OH}$ | $\\text{(CH₃)₂CHCHO}$ | negative |

> [!BOX]
> ### 🔬 Characterisation using 2,4-DNPH Derivatives
> The reaction between 2,4-dinitrophenylhydrazine (Brady's reagent) and aldehydes/ketones forms a **2,4-dinitrophenylhydrazone derivative**:
> $$\\text{Ar-NH-NH₂} + \\text{O=C(R)(R\')} \\rightarrow \\text{Ar-NH-N=C(R)(R\')} + \\text{H₂O}$$
> * **Derivative Identification:** Individual carbonyl compounds can be identified by matching the experimental melting point of their purified 2,4-DNPH derivative to database values.
> 
> #### Table C: Boiling Temperatures vs. Derivative Melting Temperatures
> | Carbonyl Compound | Boiling Temperature ($^{\\\\circ}\\\\text{C}$) | Melting Temperature of 2,4-DNPH Derivative ($^{\\\\circ}\\\\text{C}$) |
> | :--- | :--- | :--- |
> | pentanal | 102 | 104 |
> | pentan-2-one | 102 | 144 |
> | pentan-3-one | 102 | 156 |
> 
> * **Significance:** Although pentanal, pentan-2-one, and pentan-3-one all have identical boiling points ($102^{\\\\circ}\\\\text{C}$), they can be easily distinguished and identified by measuring the melting points of their derivatives ($104^{\\\\circ}\\\\text{C}$, $144^{\\\\circ}\\\\text{C}$, and $156^{\\\\circ}\\\\text{C}$ respectively).

> [!EXAMPLE]
> #### 📝 Worked Example 1: Redox Products (Checkpoint Q1)
> **Question:** What are the names of the organic products of these reactions?
> (a) The reduction of $\\text{CH₃CH₂CH₂CHO}$.
> (b) The oxidation of $\\text{CH₃CH₂CH₂CH₂CHO}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Reduction of $\\text{CH₃CH₂CH₂CHO}$ (butanal):**
> >   1. Aldehydes are reduced to primary alcohols.
> >   2. A 4-carbon chain aldehyde is reduced to a 4-carbon primary alcohol.
> >   3. Product name: **butan-1-ol**
> * **(b) Oxidation of $\\text{CH₃CH₂CH₂CH₂CHO}$ (pentanal):**
> >   1. Aldehydes are oxidised to carboxylic acids.
> >   2. A 5-carbon chain aldehyde is oxidised to a 5-carbon carboxylic acid.
> >   3. Product name: **pentanoic acid**

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Observations in Redox Tests (Checkpoint Q2)
> **Question:** What colour changes would be observed in these tests?
> (a) Heating a mixture of propanone and acidified potassium dichromate(VI).
> (b) Heating a mixture of ethanal and Tollens\' reagent.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Propanone + Acidified Potassium Dichromate(VI):**
> >   1. Propanone is a ketone. Ketones resist oxidation under these conditions.
> >   2. Therefore, no reaction occurs, and the solution **remains orange** (no colour change).
> * **(b) Ethanal + Tollens\' Reagent:**
> >   1. Ethanal is an aldehyde and is easily oxidised to ethanoic acid.
> >   2. Tollens\' reagent containing $[\\text{Ag(NH₃)₂}]^+$ is reduced to metallic silver.
> >   3. Therefore, the **colourless solution forms a silver mirror** on the inside of the test tube (or a grey precipitate forms).
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
> ### 📝 Nomenclature of Carboxylic Acids & Esters
> * **Carboxylic Acids:** Functional group $-\\text{COOH}$. Suffix **-oic acid**.
> * **Esters:** Functional group $-\\text{COOR\'}$. Naming consists of two words:
>   * *First word:* Alkyl group joined to the oxygen (from the alcohol).
>   * *Second word:* Carboxylate group (from the carboxylic acid).
> 
> #### Table A: Nomenclature of Esters
> | Structural Formula | IUPAC Name | Common Name |
> | :--- | :--- | :--- |
> | $\\text{HCOOCH₃}$ | methyl methanoate | methyl formate |
> | $\\text{CH₃COOCH₃}$ | methyl ethanoate | methyl acetate |
> | $\\text{HCOOCH₂CH₃}$ | ethyl methanoate | ethyl formate |
> | $\\text{CH₃COOCH₂CH₃}$ | ethyl ethanoate | ethyl acetate |
> | $\\text{CH₃COOCH₂CH₂CH₃}$ | propyl ethanoate | propyl acetate |
> 
> #### Table B: Displayed and Skeletal Formulae of Esters
> Shows the structural chains flanking the $-\\text{COO}-$ link.

> [!IMPORTANT]
> ### ⚛️ Bonding & Physical Properties of Esters
> * **No Intermolecular Hydrogen Bonding:** Esters are colourless, volatile liquids with relatively low melting/boiling points. Because all hydrogen atoms are bonded directly to carbon atoms, hydrogen bonding between ester molecules is impossible.
> * **Pleasant Smells & Uses:** Many esters have pleasant, sweet smells of fruits and flowers and are used in perfumes, food flavourings, solvents, and biofuels:
>   * **pentyl ethanoate:** smells of pears
>   * **3-methylbutyl ethanoate:** smells of bananas
>   * **methyl butanoate:** smells of apples
>   * **benzyl ethanoate:** smells of apples and pears

> [!BOX]
> ### 💧 Hydrolysis of Esters
> Esters undergo hydrolysis to break back down into their corresponding acids/alcohols:
> * **1. Acid Hydrolysis:** Reversible, slow reaction. Heated under reflux with dilute acid (e.g. $\\text{H₂SO₄}$):
>   $$\\text{CH₃COOCH₂CH₃} + \\text{H₂O} \\rightleftharpoons \\text{CH₃COOH} + \\text{CH₃CH₂OH} \\quad \\text{(forms ethanoic acid + ethanol)}$$
> * **2. Base Hydrolysis (Saponification):** Irreversible, complete reaction. Heated under reflux with aqueous alkali (e.g. $\\text{NaOH}$):
>   $$\\text{CH₃CH₂COOCH₃} + \\text{NaOH} \\rightarrow \\text{CH₃CH₂COO}^- + \\text{Na}^+ + \\text{CH₃OH} \\quad \\text{(sodium propanoate + methanol)}$$
>   * Adding dilute acid converts the salt to propanoic acid: $\\text{CH₃CH₂COO}^- + \\text{H}^+ \\rightarrow \\text{CH₃CH₂COOH}$.
> * **Saponification of Triglycerides (Soap-making):** Triglycerides (triesters found in vegetable oils/animal fats) react with $\\text{NaOH}$ to yield **glycerol** (propane-1,2,3-triol) and **soaps** (sodium carboxylate salts of long-chain fatty acids like sodium stearate):
>   $$\\\\text{Triglyceride} + 3\\\\text{NaOH} \\\\rightarrow \\\\text{propane-1,2,3-triol (glycerol)} + 3\\\\text{C₁₇H₃₅COO}^-\\\\text{Na}^+ \\\\text{ (sodium stearate)}$$

> [!BOX]
> ### 🧪 Preparation of Carboxylic Acids
> Carboxylic acids can be synthesized in the laboratory via two main pathways:
> 
> * **1. Oxidation of Primary Alcohols or Aldehydes:**
>    * Heated under reflux with **acidified potassium dichromate(VI)** ($\\text{Cr₂O₇}^{2-}/\\text{H}^+$).
>    * Alcohols first oxidise to aldehydes, which immediately oxidise to carboxylic acids in situ.
>    * *Example (from propan-1-ol):*
>      $$\\text{CH₃CH₂CH₂OH} + 2[\\text{O}] \\rightarrow \\text{CH₃CH₂COOH} + \\text{H₂O}$$
>    * *Example (from propanal):*
>      $$\\text{CH₃CH₂CHO} + [\\text{O}] \\rightarrow \\text{CH₃CH₂COOH}$$
>    * *Purification:* Fractional distillation is used to isolate pure carboxylic acid.
> * **2. Hydrolysis of Nitriles (RCN):**
>    * Nitriles are heated under reflux with either dilute acid or aqueous alkali:
>    * **Acid Hydrolysis:** Yields a carboxylic acid and an ammonium salt directly:
>      $$\\text{CH₃CH₂CN} + \\text{H}^+ + 2\\text{H₂O} \\rightarrow \\text{CH₃CH₂COOH} + \\text{NH₄}^+$$
>    * **Alkaline Hydrolysis:** Yields a carboxylate salt and ammonia gas:
>      $$\\text{CH₃CH₂CN} + \\text{OH}^- + \\text{H₂O} \\rightarrow \\text{CH₃CH₂COO}^- + \\text{NH₃}$$
>      * Adding dilute acid (like HCl) converts the carboxylate ion to the carboxylic acid:
>        $$\\text{CH₃CH₂COO}^- + \\text{H}^+ \\rightarrow \\text{CH₃CH₂COOH}$$

> [!BOX]
> ### 🧪 Reactions of Carboxylic Acids
> * **1. Reduction:** Reduced directly to **primary alcohols** using **lithium tetrahydridoaluminate(III)** ($\\text{LiAlH₄}$) in dry ether ($4[\\text{H}]$):
>   $$\\text{CH₃CH₂CH₂COOH} + 4[\\text{H}] \\rightarrow \\text{CH₃CH₂CH₂CH₂OH} + \\text{H₂O} \\quad \\text{(butanoic acid } \\rightarrow \\text{ butan-1-ol)}$$
>   * *Note:* The reaction cannot be stopped at the aldehyde stage because aldehydes are more easily reduced than carboxylic acids.
> * **2. Neutralisation:** Weak acids that react with bases (like NaOH) to form ionic carboxylate salts:
>   $$\\text{CH₃COOH} + \\text{NaOH} \\rightarrow \\text{CH₃COO}^-\\text{Na}^+ + \\text{H₂O} \\quad \\text{(Sodium ethanoate)}$$
> * **3. Halogenation (Acyl Chloride Formation):** Reacts vigorously with **phosphorus(V) chloride** ($\\text{PCl₅}$) under anhydrous conditions at room temperature:
>   $$\\text{CH₃CH₂COOH} + \\text{PCl₅} \\rightarrow \\text{CH₃CH₂COCl} + \\text{POCl₃} + \\text{HCl(g)}$$
>   * Misty fumes of HCl gas escape, and fractional distillation is used to separate the acyl chloride product from liquid $\\text{POCl₃}$.
> * **4. Esterification:** Slow, reversible reaction with alcohols in the presence of concentrated sulfuric acid ($\\text{H₂SO₄}$) catalyst under reflux:
>   $$\\text{HCOOH} + \\text{CH₃CH₂OH} \\rightleftharpoons \\text{HCOOCH₂CH₃} + \\text{H₂O} \\quad \\text{(forms ethyl methanoate)}$$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Displayed Formulas (Checkpoint Q1)
> **Question:** Write the displayed formula for: (a) methanoic acid, (b) ethanedioic acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Methanoic acid (HCOOH):** Display one carbon atom bonded to double-bond oxygen, single-bond hydroxyl group, and single-bond hydrogen:
> >   $$\\text{H-C(=O)-OH}$$
> * **(b) Ethanedioic acid (HOOC-COOH):** Display two carbon atoms bonded together, each carrying a double-bonded oxygen and a hydroxyl group:
> >   $$\\text{HO-C(=O)-C(=O)-OH}$$

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Hexanoic vs Ethanoic Solubility (Checkpoint Q2)
> **Question:** Explain why hexanoic acid is much less soluble than ethanoic acid in water.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the functional groups:** Both acids contain the polar $-\\text{COOH}$ group which can form hydrogen bonds with water.
> > 2. **Analyze the alkyl tail:**
> >    * Ethanoic acid has a small methyl ($-\\text{CH₃}$) tail.
> >    * Hexanoic acid has a much larger, hydrophobic pentyl ($-\\text{CH₂CH₂CH₂CH₂CH₃}$) tail.
> > 3. **Explain the solubility difference:** The large non-polar pentyl tail of hexanoic acid disrupts the hydrogen bonding network of water without forming strong interactions, making hexanoic acid much less soluble in water.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Methylpropanoic Acid Synthesis (Checkpoint Q1)
> **Question:** Write equations for the preparation of methylpropanoic acid:
> (a) by the oxidation of an alcohol.
> (b) by the hydrolysis of a nitrile.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Oxidation of an alcohol:**
> >   1. The starting alcohol must have the same carbon skeleton (methylpropane skeleton) with a primary alcohol group at the end: **2-methylpropan-1-ol** ($\\text{(CH₃)₂CHCH₂OH}$).
> >   2. React with acidified potassium dichromate(VI) ($2[\\text{O}]$):
> >      $$\\text{(CH₃)₂CHCH₂OH} + 2[\\text{O}] \\rightarrow \\text{(CH₃)₂CHCOOH} + \\text{H₂O}$$
> * **(b) Hydrolysis of a nitrile:**
> >   1. The starting nitrile is **methylpropanenitrile** ($\\text{(CH₃)₂CHCN}$).
> >   2. Using acid hydrolysis:
> >      $$\\text{(CH₃)₂CHCN} + \\text{H}^+ + 2\\text{H₂O} \\rightarrow \\text{(CH₃)₂CHCOOH} + \\text{NH₄}^+$$

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 4: Methylpropanoic Acid Derivatives (Checkpoint Q2)
> **Question:** Write an equation for the conversion of methylpropanoic acid:
> (a) into an acyl chloride.
> (b) into a methyl ester.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Conversion into an acyl chloride (halogenation):**
> >   1. React with phosphorus(V) chloride ($\\text{PCl₅}$) under anhydrous conditions:
> >      $$\\text{(CH₃)₂CHCOOH} + \\text{PCl₅} \\rightarrow \\text{(CH₃)₂CHCOCl} + \\text{POCl₃} + \\text{HCl}$$
> * **(b) Conversion into a methyl ester (esterification):**
> >   1. React with methanol ($\\text{CH₃OH}$) in the presence of concentrated $\\text{H₂SO₄}$ catalyst under reflux:
> >      $$\\text{(CH₃)₂CHCOOH} + \\text{CH₃OH} \\rightleftharpoons \\text{(CH₃)₂CHCOOCH₃} + \\text{H₂O}$$

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 5: Naming Esters (Checkpoint Q1)
> **Question:** What are the names of these esters?
> (a) $\\text{CH₃CH₂COOCH₂CH₂CH₃}$
> (b) $\\text{(CH₃)₂CHCOOCH₃}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) $\\text{CH₃CH₂COOCH₂CH₂CH₃}$:**
> >   1. The alkyl group joined to O is a propyl group (3 carbons: $-\\text{CH₂CH₂CH₃}$).
> >   2. The carboxylate part joined to C has 3 carbons ($\\text{CH₃CH₂COO-}$), which is propanoate.
> >   3. Ester name: **propyl propanoate**
> * **(b) $\\text{(CH₃)₂CHCOOCH₃}$:**
> >   1. The alkyl group joined to O is a methyl group ($-\\text{CH₃}$).
> >   2. The carboxylate part joined to C has a methylpropane skeleton ($\\text{(CH₃)₂CHCOO-}$), which is 2-methylpropanoate.
> >   3. Ester name: **methyl 2-methylpropanoate** (or methyl methylpropanoate).

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 6: Propyl Butanoate Hydrolysis (Checkpoint Q2)
> **Question:** Write equations for the hydrolysis of propyl butanoate in:
> (a) acidic conditions.
> (b) alkaline conditions.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Hydrolysis in acidic conditions:**
> >   1. Propyl butanoate is $\\text{CH₃CH₂CH₂COOCH₂CH₂CH₃}$.
> >   2. Reacts reversibly with water in the presence of acid catalyst:
> >      $$\\text{CH₃CH₂CH₂COOCH₂CH₂CH₃} + \\text{H₂O} \\rightleftharpoons \\text{CH₃CH₂CH₂COOH} + \\text{CH₃CH₂CH₂OH}$$
> >   3. Products are **butanoic acid** and **propan-1-ol**.
> * **(b) Hydrolysis in alkaline conditions:**
> >   1. Reacts completely with sodium hydroxide:
> >      $$\\text{CH₃CH₂CH₂COOCH₂CH₂CH₃} + \\text{NaOH} \\rightarrow \\text{CH₃CH₂CH₂COONa} + \\text{CH₃CH₂CH₂OH}$$
> >   2. Products are **sodium butanoate** and **propan-1-ol**.
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
> ### 🧪 Preparation and Reactivity of Acyl Chlorides
> Acyl chlorides contain the functional group $-\\text{COCl}$:
> * **Preparation:** Synthesised by reacting a carboxylic acid with phosphorus(V) chloride ($\\text{PCl₅}$) at room temperature:
>   $$\\text{RCOOH} + \\text{PCl₅} \\rightarrow \\text{RCOCl} + \\text{POCl₃} + \\text{HCl(g)}$$
>   * White misty fumes of hydrogen chloride ($\\text{HCl}$) gas are evolved.
> * **Reactivity:** Much more reactive than carboxylic acids because the chloride ion ($-\\text{Cl}$) is a much better leaving group than the hydroxyl group ($-\\text{OH}$).
> 
> #### Table A: Displayed and Skeletal Formulae of Acyl Chlorides
> | Name | Displayed Formula | Skeletal Formula |
> | :--- | :--- | :--- |
> | ethanoyl chloride | $\\text{CH₃-C(=O)-Cl}$ | $\\text{CH₃COCl}$ |
> | propanoyl chloride | $\\text{CH₃CH₂-C(=O)-Cl}$ | $\\text{CH₃CH₂COCl}$ |
> | butanoyl chloride | $\\text{CH₃CH₂CH₂-C(=O)-Cl}$ | $\\text{CH₃CH₂CH₂COCl}$ |

> [!IMPORTANT]
> ### ⚡ Nucleophilic Addition-Elimination Reactions
> Acyl chlorides undergo rapid addition-elimination reactions at room temperature without the need for catalysts due to their highly electron-deficient carbonyl carbon bonded to two highly electronegative atoms (oxygen and chlorine):
> 
> * **1. Reaction with Water (Hydrolysis):** Vigorous reaction producing a carboxylic acid and misty fumes of $\\text{HCl}$ gas:
>   $$\\text{CH₃COCl} + \\text{H₂O} \\rightarrow \\text{CH₃COOH} + \\text{HCl(g)}$$
> * **2. Reaction with Alcohols (Esterification):** Vigorous reaction producing an ester and $\\text{HCl}$ gas:
>   $$\\text{CH₃COCl} + \\text{CH₃CH₂OH} \\rightarrow \\text{CH₃COOCH₂CH₃} + \\text{HCl(g)}$$
> * **3. Reaction with Ammonia:** Reacts to form a primary amide and $\\text{HCl}$. The basic ammonia immediately reacts with the acidic $\\text{HCl}$ byproduct to form solid ammonium chloride:
>   $$\\text{CH₃COCl} + \\text{NH₃} \\rightarrow \\text{CH₃CONH₂} + \\text{HCl(g)}$$
>   $$\\text{NH₃} + \\text{HCl(g)} \\rightarrow \\text{NH₄Cl(s)}$$
>   * *Combined Equation:*
>     $$\\text{CH₃COCl} + 2\\text{NH₃} \\rightarrow \\text{CH₃CONH₂} + \\text{NH₄Cl(s)}$$
> * **4. Reaction with Primary Amines:** Reacts to form an N-substituted amide and $\\text{HCl}$ gas:
>   $$\\text{CH₃COCl} + \\text{CH₃NH₂} \\rightarrow \\text{CH₃CONHCH₃} + \\text{HCl(g)} \\quad \\text{(forms N-methylethanamide)}$$
> * **5. Reaction with Secondary Amines:** Reacts to form an N,N-disubstituted amide:
>   $$\\text{CH₃COCl} + \\text{(CH₃)₂NH} \\rightarrow \\text{CH₃CON(CH₃)₂} + \\text{HCl(g)} \\quad \\text{(forms N,N-dimethylethanamide)}$$
> * **Tertiary Amines:** Do **not** react with acyl chlorides because they lack a hydrogen atom bonded to the nitrogen, meaning they cannot eliminate $\\text{HCl}$.

> [!IMPORTANT]
> ### ⛓️ Condensation Polymerisation
> * **Addition Polymerisation:** Monomers contain $\\text{C=C}$ double bonds. The bonds open up to link monomers together, and no other product molecules are formed.
> * **Condensation Polymerisation:** Monomers contain reactive functional groups at both ends. When two monomer units link together, a small molecule (usually water or hydrogen chloride) is eliminated. Typically involves two different bifunctional monomers (e.g., dicarboxylic acid + diol).

> [!IMPORTANT]
> ### ⛓️ Polyester Formation (e.g. Terylene / PET)
> * **Monomers:**
>   * Diol: **ethane-1,2-diol** ($\\text{HO-CH₂-CH₂-OH}$)
>   * Dicarboxylic acid: **benzene-1,4-dicarboxylic acid** (terephthalic acid, $\\text{HOOC-C₆H₄-COOH}$)
> * **Reaction:** Carboxyl $-\\text{COOH}$ groups react with hydroxyl $-\\text{OH}$ groups, eliminating $\\text{H₂O}$ molecules to form ester linkages:
>   $$n\\\\text{HOOC-C₆H₄-COOH} + n\\\\text{HO-CH₂CH₂-OH} \\\\rightarrow \\\\text{[-CO-C₆H₄-CO-O-CH₂CH₂-O-]}_n + 2n\\\\text{H₂O}$$
> * **Alternative Monomer (Diacyl Chloride):** We can also use benzene-1,4-dioyl chloride ($\\text{ClOC-C₆H₄-COCl}$) instead of the dicarboxylic acid. The reaction occurs in the same way, but eliminates **hydrogen chloride ($\\text{HCl}$)** instead of water.
> * **Industrial Choice (Dicarboxylic Acid vs Diacyl Chloride):** Dicarboxylic acids are preferred in industry to avoid the release of toxic, corrosive $\\text{HCl}$ gas, which poses high health, safety, and environmental risks.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Propanoyl Chloride Reactions (Checkpoint Q1)
> **Question:** Write the names of the organic products formed in the four similar reactions of propanoyl chloride with water, methanol, ammonia, and methylamine.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Propanoyl chloride + water:** Yields propanoic acid. Organic product: **propanoic acid**
> > 2. **Propanoyl chloride + methanol:** Yields methyl ester. Organic product: **methyl propanoate**
> > 3. **Propanoyl chloride + ammonia:** Yields primary amide. Organic product: **propanamide**
> > 4. **Propanoyl chloride + methylamine:** Yields N-substituted amide. Organic product: **N-methylpropanamide**

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 2: Butanoyl Chloride Reactions (Checkpoint Q2)
> **Question:** Write an equation for butanoyl chloride reacting with:
> (a) propan-1-ol
> (b) ethylamine
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Butanoyl chloride + propan-1-ol:**
> >   $$\\text{CH₃CH₂CH₂COCl} + \\text{CH₃CH₂CH₂OH} \\rightarrow \\text{CH₃CH₂CH₂COOCH₂CH₂CH₃} + \\text{HCl}$$
> >   * Product: **propyl butanoate**
> * **(b) Butanoyl chloride + ethylamine:**
> >   $$\\text{CH₃CH₂CH₂COCl} + \\text{CH₃CH₂NH₂} \\rightarrow \\text{CH₃CH₂CH₂CONHCH₂CH₃} + \\text{HCl}$$
> >   * Product: **N-ethylbutanamide**

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 3: Polymerisation Limits 
> **Question:** Why is it not possible to make a polymer by reacting together molecules of $\\text{HOOCCH₂COOH}$ and $\\text{CH₃OH}$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze monomer functionality:**
> >    * $\\text{HOOCCH₂COOH}$ (propanedioic acid) is bifunctional (has two carboxyl groups, one at each end).
> >    * $\\text{CH₃OH}$ (methanol) is monofunctional (has only one hydroxyl group).
> 2. **Explain the outcome:** Once methanol reacts with one of the carboxyl groups, the chain terminates because there is no second hydroxyl group on that end to react with another acid molecule. Polymerisation requires both monomers to be bifunctional to allow the chain to grow from both ends.

<br>

> [!EXAMPLE]
> #### 📝 Worked Example 4: Polymer Repeat Unit Drawing
> **Question:** Draw the repeat unit of the polymer formed between molecules of $\\text{HOOCCOOH}$ and $\\text{CH₃CH(OH)CH(OH)CH₃}$.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the monomers:**
> >    * Dicarboxylic acid: $\\text{HOOCCOOH}$ (ethanedioic acid).
> >    * Diol: $\\text{CH₃CH(OH)CH(OH)CH₃}$ (butane-2,3-diol).
> 2. **Determine ester linkage formation:** The $-\\text{OH}$ groups of the diol lose $-\\text{H}$ and the $-\\text{COOH}$ groups of the acid lose $-\\text{OH}$, forming water.
> 3. **Draft the repeat unit:** Link the carbonyls of the acid to the oxygens of the diol:
>    $$\\\\text{[-CO-CO-O-CH(CH₃)-CH(CH₃)-O-]}_n$$
`,
        keyPoints: [
            'Acyl chlorides undergo nucleophilic addition-elimination reactions, releasing HCl gas.',
            'Acyl chlorides are preferred over carboxylic acids for ester synthesis in the laboratory because the reaction goes to completion at room temp.',
            'Condensation polymerisation eliminates a small molecule (like H₂O or HCl) to form ester linkages.',
            'Primary amines react with acyl chlorides to form N-substituted amides, while secondary amines form N,N-disubstituted amides. Tertiary amines do not react.',
            'Bifunctional monomers are required for polymerisation. Monofunctional species cause chain termination.',
            'Industrially, dicarboxylic acids are preferred over diacyl chlorides to avoid releasing toxic and corrosive HCl gas.'
        ]
    }
];
