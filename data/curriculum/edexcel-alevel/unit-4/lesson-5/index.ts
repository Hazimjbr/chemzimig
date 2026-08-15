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
${svgToken(chiralCentreSvg)}

${svgToken(achiralMoleculeSvg)}

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
> > ${svgToken(lacticAcidEnantiomersSvg)}
> > 

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
> #### 📝 Worked Example 1: SN2 Transition State
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

> [!EXAMPLE]
> #### 📝 Worked Example 2: SN1 Mechanism & Optical Inactivity
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
> 1. Give the IUPAC names for the two carbonyl isomers with the molecular formula $\\\\text{C}_4\\\\text{H}_8\\\\text{O}$.
> 2. Arrange the following compounds in order of increasing boiling temperature, explaining your reasoning: butane, butanal, butan-1-ol.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the isomers of $\\\\text{C}_4\\\\text{H}_8\\\\text{O}$:**
> >    * The 4-carbon chain aldehyde: **butanal** ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{CH}_2\\\\text{CHO}$)
> >    * The 4-carbon chain ketone: **butanone** ($\\\\text{CH}_3\\\\text{COCH}_2\\\\text{CH}_3$)
> > 2. **Arrange by boiling temperatures (lowest to highest):**
> >    * **butane < butanal < butan-1-ol**
> > 3. **Formulate the explanation based on intermolecular forces:**
> >    * **butane:** An alkane experiencing only weak London dispersion forces, requiring the least energy to overcome.
> >    * **butanal:** A polar carbonyl compound experiencing permanent dipole-dipole forces in addition to London forces, which are stronger than London forces alone.
> >    * **butan-1-ol:** An alcohol experiencing strong intermolecular hydrogen bonding (due to the polar $-\\\\text{OH}$ group) in addition to London forces, requiring the most energy to overcome.
 
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
> > 

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
> >      $$\\\\text{CH}_3\\\\text{CHO} + 2[\\\\text{Ag(NH}_3\\\\text{)}_2]^+ + 3\\\\text{OH}^- \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^- + 2\\\\text{Ag(s)} + 4\\\\text{NH}_3 + 2\\\\text{H}_2\\\\text{O}$$
> >   2. **Observation:** The metallic silver deposits on the inner glass wall of the test tube, so the **colourless solution forms a silver mirror** (or a grey/black precipitate).
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
> #### 📝 Worked Example 1: Displayed Formulas
> **Question:** Write the displayed formula for: (a) methanoic acid, (b) ethanedioic acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Methanoic acid (HCOOH):** Display one carbon atom bonded to double-bond oxygen, single-bond hydroxyl group, and single-bond hydrogen:
> >   $$\\text{H-C(=O)-OH}$$
> * **(b) Ethanedioic acid (HOOC-COOH):** Display two carbon atoms bonded together, each carrying a double-bonded oxygen and a hydroxyl group:
> >   $$\\text{HO-C(=O)-C(=O)-OH}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Hexanoic vs Ethanoic Solubility
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

> [!EXAMPLE]
> #### 📝 Worked Example 3: Methylpropanoic Acid Synthesis
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

> [!EXAMPLE]
> #### 📝 Worked Example 4: Methylpropanoic Acid Derivatives
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

> [!EXAMPLE]
> #### 📝 Worked Example 5: Naming Esters
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

> [!EXAMPLE]
> #### 📝 Worked Example 6: Propyl Butanoate Hydrolysis
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
> #### 📝 Worked Example 1: Propanoyl Chloride Reactions
> **Question:** Write the names of the organic products formed in the four similar reactions of propanoyl chloride with water, methanol, ammonia, and methylamine.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Propanoyl chloride + water:** Yields propanoic acid. Organic product: **propanoic acid**
> > 2. **Propanoyl chloride + methanol:** Yields methyl ester. Organic product: **methyl propanoate**
> > 3. **Propanoyl chloride + ammonia:** Yields primary amide. Organic product: **propanamide**
> > 4. **Propanoyl chloride + methylamine:** Yields N-substituted amide. Organic product: **N-methylpropanamide**

> [!EXAMPLE]
> #### 📝 Worked Example 2: Butanoyl Chloride Reactions
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
