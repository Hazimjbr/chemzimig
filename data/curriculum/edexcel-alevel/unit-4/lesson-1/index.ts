import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Kinetics";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 11: Kinetics
This lesson covers reaction rates, orders of reaction, rate equations, continuous and initial rate experimental methods, reaction mechanisms, the rate-determining step, and the Arrhenius equation.
`;

const gasCollectionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Experimental Gas Collection Techniques</text>
  <g transform="translate(40, 40)">
    <text x="180" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">Gas Syringe Method (High Precision)</text>
    <path d="M 80,240 L 110,140 L 110,115 L 140,115 L 140,140 L 170,240 Z" fill="none" stroke="#94a3b8" stroke-width="2" />
    <path d="M 85,235 L 165,235 L 155,200 L 95,200 Z" fill="#38bdf8" fill-opacity="0.1" />
    <circle cx="110" cy="220" r="3" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="140" cy="210" r="2" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="125" cy="230" r="4" fill="#38bdf8" fill-opacity="0.7" />
    <text x="125" y="190" fill="#94a3b8" font-size="11" text-anchor="middle">Reaction Mixture</text>
    <rect x="108" y="108" width="34" height="10" fill="#a16207" rx="2" />
    <path d="M 125,112 L 125,85 L 220,85 L 220,105 L 240,105" fill="none" stroke="#94a3b8" stroke-width="2" />
    <rect x="240" y="90" width="120" height="30" rx="3" fill="none" stroke="#94a3b8" stroke-width="2" />
    <line x1="260" y1="90" x2="260" y2="95" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="280" y1="90" x2="280" y2="95" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="300" y1="90" x2="300" y2="95" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="320" y1="90" x2="320" y2="95" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="340" y1="90" x2="340" y2="95" stroke="#94a3b8" stroke-width="1.5" />
    <rect x="300" y="95" width="100" height="20" rx="2" fill="#3b82f6" fill-opacity="0.3" stroke="#3b82f6" stroke-width="1.5" />
    <line x1="400" y1="105" x2="430" y2="105" stroke="#3b82f6" stroke-width="3" />
    <line x1="430" y1="90" x2="430" y2="120" stroke="#3b82f6" stroke-width="3" />
    <rect x="241" y="92" width="58" height="26" fill="#10b981" fill-opacity="0.2" />
    <text x="270" y="108" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Gas</text>
    <text x="125" y="270" fill="#f8fafc" font-size="11" text-anchor="middle">Conical Flask</text>
    <text x="320" y="145" fill="#f8fafc" font-size="11" text-anchor="middle">Gas Syringe</text>
  </g>
  <g transform="translate(520, 40)">
    <text x="200" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">Collection Over Water (Low Solubility Gases)</text>
    <path d="M 60,240 L 90,140 L 90,115 L 120,115 L 120,140 L 150,240 Z" fill="none" stroke="#94a3b8" stroke-width="2" />
    <path d="M 65,235 L 145,235 L 135,200 L 75,200 Z" fill="#38bdf8" fill-opacity="0.1" />
    <circle cx="90" cy="220" r="3" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="120" cy="210" r="2" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="105" cy="230" r="4" fill="#38bdf8" fill-opacity="0.7" />
    <rect x="88" y="108" width="34" height="10" fill="#a16207" rx="2" />
    <path d="M 105,112 L 105,85 L 210,85 L 210,245 L 260,245 L 260,210" fill="none" stroke="#94a3b8" stroke-width="2" />
    <rect x="180" y="200" width="180" height="60" rx="4" fill="none" stroke="#3b82f6" stroke-width="2" />
    <rect x="181" y="215" width="178" height="44" fill="#3b82f6" fill-opacity="0.2" />
    <rect x="240" y="90" width="40" height="135" fill="none" stroke="#94a3b8" stroke-width="2" />
    <ellipse cx="260" cy="90" rx="20" ry="6" fill="none" stroke="#94a3b8" stroke-width="2" />
    <line x1="240" y1="110" x2="248" y2="110" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="240" y1="130" x2="248" y2="130" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="240" y1="150" x2="248" y2="150" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="240" y1="170" x2="248" y2="170" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="240" y1="190" x2="248" y2="190" stroke="#94a3b8" stroke-width="1.5" />
    <rect x="241" y="91" width="38" height="49" fill="#10b981" fill-opacity="0.2" />
    <rect x="241" y="140" width="38" height="75" fill="#3b82f6" fill-opacity="0.3" />
    <circle cx="260" cy="155" r="3" fill="#f8fafc" fill-opacity="0.8" />
    <circle cx="258" cy="175" r="4" fill="#f8fafc" fill-opacity="0.8" />
    <circle cx="262" cy="195" r="2" fill="#f8fafc" fill-opacity="0.8" />
    <text x="105" y="270" fill="#f8fafc" font-size="11" text-anchor="middle">Conical Flask</text>
    <text x="320" y="270" fill="#f8fafc" font-size="11" text-anchor="middle">Water Trough</text>
    <text x="260" y="70" fill="#f8fafc" font-size="11" text-anchor="middle">Inverted Cylinder</text>
  </g>
</svg>`;

const colorimeterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="35" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Colorimeter Optical Path and Components</text>
  <line x1="160" y1="140" x2="280" y2="140" stroke="#f1f5f9" stroke-width="4" />
  <polygon points="340,140 460,110 460,170" fill="url(#rainbow)" opacity="0.4" />
  <line x1="340" y1="140" x2="480" y2="140" stroke="#10b981" stroke-width="3" />
  <line x1="480" y1="140" x2="520" y2="140" stroke="#10b981" stroke-width="3" />
  <line x1="560" y1="140" x2="680" y2="140" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 1" />
  <defs>
    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="20%" stop-color="#f97316" />
      <stop offset="40%" stop-color="#eab308" />
      <stop offset="60%" stop-color="#22c55e" />
      <stop offset="80%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
  </defs>
  <g transform="translate(80, 70)">
    <circle cx="40" cy="70" r="25" fill="#eab308" fill-opacity="0.2" />
    <path d="M 30,85 C 20,75 20,60 30,50 C 40,40 50,40 60,50 C 70,60 70,75 60,85 L 55,90 L 55,95 L 45,95 L 45,90 Z" fill="none" stroke="#eab308" stroke-width="2.5" />
    <line x1="45" y1="98" x2="55" y2="98" stroke="#eab308" stroke-width="3" />
    <circle cx="50" cy="70" r="10" fill="none" stroke="#eab308" stroke-width="1.5" />
    <text x="50" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">1 Light Source</text>
    <text x="50" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Provides white light</text>
  </g>
  <g transform="translate(260, 70)">
    <polygon points="60,45 20,115 100,115" fill="none" stroke="#38bdf8" stroke-width="2.5" />
    <text x="60" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">2 Prism</text>
    <text x="60" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Selects specific wavelength</text>
  </g>
  <g transform="translate(460, 70)">
    <rect x="20" y="40" width="40" height="90" rx="3" fill="none" stroke="#94a3b8" stroke-width="2" />
    <rect x="23" y="55" width="34" height="72" fill="#f97316" fill-opacity="0.25" />
    <text x="40" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">3 Cuvette</text>
    <text x="40" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Iodine sample absorbs light</text>
    <text x="8" y="115" fill="#10b981" font-size="10" font-weight="bold">I₀</text>
    <text x="70" y="115" fill="#10b981" font-size="10" font-weight="bold">I</text>
  </g>
  <g transform="translate(640, 70)">
    <rect x="20" y="45" width="60" height="70" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2" />
    <circle cx="50" cy="80" r="12" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.5" />
    <text x="50" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">4 Detector</text>
    <text x="50" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Measures transmitted light I</text>
  </g>
  <g transform="translate(800, 70)">
    <rect x="10" y="50" width="100" height="60" rx="6" fill="#020617" stroke="#334155" stroke-width="2" />
    <text x="60" y="90" fill="#10b981" font-size="20" font-family="monospace" font-weight="bold" text-anchor="middle">0.65</text>
    <text x="60" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">5 Digital Display</text>
    <text x="60" y="165" fill="#94a3b8" font-size="10" text-anchor="middle">Absorbance = log(I₀ / I)</text>
  </g>
</svg>`;

const massLossSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Continuous Mass Loss Measurement</text>
  <g transform="translate(100, 40)">
    <rect x="250" y="230" width="300" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="2" />
    <rect x="330" y="242" width="140" height="26" rx="3" fill="#020617" stroke="#475569" />
    <text x="400" y="260" fill="#10b981" font-size="16" font-family="monospace" text-anchor="middle" font-weight="bold">245.82 g</text>
    <path d="M 350,230 L 385,120 L 385,90 L 415,90 L 415,120 L 450,230 Z" fill="none" stroke="#94a3b8" stroke-width="2" />
    <path d="M 355,225 L 445,225 L 435,185 L 365,185 Z" fill="#38bdf8" fill-opacity="0.1" />
    <circle cx="380" cy="210" r="3" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="410" cy="200" r="2" fill="#38bdf8" fill-opacity="0.7" />
    <circle cx="395" cy="215" r="4" fill="#38bdf8" fill-opacity="0.7" />
    <text x="400" y="170" fill="#94a3b8" font-size="11" text-anchor="middle">Reaction Mixture</text>
    <path d="M 378,90 Q 368,80 383,75 Q 400,70 417,75 Q 432,80 422,90 Z" fill="#e2e8f0" fill-opacity="0.85" stroke="#cbd5e1" stroke-width="1" />
    <path d="M 395,65 Q 385,45 395,25" fill="none" stroke="#f59e0b" stroke-dasharray="3 3" stroke-width="1.5" />
    <path d="M 405,65 Q 415,45 405,25" fill="none" stroke="#f59e0b" stroke-dasharray="3 3" stroke-width="1.5" />
    <line x1="370" y1="80" x2="220" y2="80" stroke="#475569" stroke-width="1" />
    <circle cx="370" cy="80" r="3" fill="#475569" />
    <text x="210" y="75" fill="#f8fafc" font-size="11" text-anchor="end" font-weight="600">Cotton Wool Plug</text>
    <text x="210" y="92" fill="#94a3b8" font-size="10" text-anchor="end">Allows gas to escape but prevents</text>
    <text x="210" y="107" fill="#94a3b8" font-size="10" text-anchor="end">loss of liquid spray/droplets</text>
    <line x1="530" y1="255" x2="630" y2="255" stroke="#475569" stroke-width="1" />
    <circle cx="530" cy="255" r="3" fill="#475569" />
    <text x="640" y="250" fill="#f8fafc" font-size="11" text-anchor="start" font-weight="600">Digital Balance</text>
    <text x="640" y="267" fill="#94a3b8" font-size="10" text-anchor="start">Records decrease in mass as</text>
    <text x="640" y="282" fill="#94a3b8" font-size="10" text-anchor="start">gas (such as CO₂) escapes</text>
    <rect x="520" y="70" width="220" height="90" rx="5" fill="#ef4444" fill-opacity="0.05" stroke="#ef4444" stroke-opacity="0.2" />
    <text x="535" y="90" fill="#ef4444" font-size="11" font-weight="bold">⚠️ Density Constraints</text>
    <text x="535" y="110" fill="#94a3b8" font-size="10">Effective for high-density gases</text>
    <text x="535" y="125" fill="#f8fafc" font-size="10" font-weight="600">like CO₂ (M = 44.0)</text>
    <text x="535" y="145" fill="#94a3b8" font-size="10">Ineffective for light H₂ gas</text>
  </g>
</svg>`;

const disappearingCrossSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Disappearing Cross Method (Initial Rate Setup)</text>
  <g transform="translate(150, 40)">
    <text x="100" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">Start of Reaction (t = 0)</text>
    <rect x="0" y="210" width="200" height="40" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5" />
    <line x1="85" y1="222" x2="115" y2="238" stroke="#000" stroke-width="4.5" stroke-linecap="round" />
    <line x1="115" y1="222" x2="85" y2="238" stroke="#000" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 50,220 L 80,120 L 80,95 L 120,95 L 120,120 L 150,220 Z" fill="none" stroke="#f8fafc" stroke-width="2.5" />
    <path d="M 55,215 L 145,215 L 135,170 L 65,170 Z" fill="#38bdf8" fill-opacity="0.05" />
    <path d="M 60,70 Q 75,90 95,94" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2" />
    <text x="50" y="65" fill="#38bdf8" font-size="10" font-weight="bold">Add Acid</text>
    <text x="100" y="275" fill="#f8fafc" font-size="11" text-anchor="middle">Cross is clearly visible</text>
    <text x="100" y="292" fill="#94a3b8" font-size="10" text-anchor="middle">Solution is transparent</text>
  </g>
  <g transform="translate(550, 40)">
    <text x="100" y="20" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="600">End of Reaction (Cross Obscured)</text>
    <rect x="0" y="210" width="200" height="40" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5" />
    <path d="M 50,220 L 80,120 L 80,95 L 120,95 L 120,120 L 150,220 Z" fill="none" stroke="#f8fafc" stroke-width="2.5" />
    <path d="M 52,218 L 148,218 L 135,170 L 65,170 Z" fill="#eab308" fill-opacity="0.75" />
    <circle cx="80" cy="200" r="2" fill="#fef08a" />
    <circle cx="100" cy="190" r="3" fill="#fef08a" />
    <circle cx="120" cy="210" r="2.5" fill="#fef08a" />
    <circle cx="70" cy="180" r="3" fill="#fef08a" />
    <circle cx="130" cy="185" r="2" fill="#fef08a" />
    <text x="100" y="275" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Cross is completely obscured</text>
    <text x="100" y="292" fill="#94a3b8" font-size="10" text-anchor="middle">Colloidal sulfur precipitate forms</text>
  </g>
</svg>`;

const kineticsDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b" />
    </marker>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Kinetics Graph Dashboard: Reaction Orders Summary</text>
  <g transform="translate(10, 0)">
    <rect x="30" y="55" width="280" height="28" rx="6" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-opacity="0.2" />
    <text x="170" y="73" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">Zero Order (Rate = k)</text>
    <g transform="translate(0, 20)">
      <line x1="50" y1="230" x2="170" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="50" y1="230" x2="50" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="175" y="234" fill="#94a3b8" font-size="10">Time</text>
      <text x="45" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">[A]</text>
      <text x="110" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Concentration vs Time</text>
      <line x1="50" y1="125" x2="155" y2="230" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
    </g>
    <g transform="translate(150, 20)">
      <line x1="40" y1="230" x2="160" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="40" y1="230" x2="40" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="165" y="234" fill="#94a3b8" font-size="10">[A]</text>
      <text x="35" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">Rate</text>
      <text x="100" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Rate vs Concentration</text>
      <line x1="40" y1="150" x2="145" y2="150" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" />
    </g>
  </g>
  <g transform="translate(340, 0)">
    <rect x="20" y="55" width="280" height="28" rx="6" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-opacity="0.2" />
    <text x="160" y="73" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">First Order (Rate = k[A])</text>
    <g transform="translate(0, 20)">
      <line x1="40" y1="230" x2="160" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="40" y1="230" x2="40" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="165" y="234" fill="#94a3b8" font-size="10">Time</text>
      <text x="35" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">[A]</text>
      <text x="100" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Concentration vs Time</text>
      <path d="M 40,125 Q 75,225 145,228" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
    </g>
    <g transform="translate(150, 20)">
      <line x1="30" y1="230" x2="150" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="30" y1="230" x2="30" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="155" y="234" fill="#94a3b8" font-size="10">[A]</text>
      <text x="25" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">Rate</text>
      <text x="90" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Rate vs Concentration</text>
      <line x1="30" y1="230" x2="135" y2="125" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
    </g>
  </g>
  <g transform="translate(670, 0)">
    <rect x="10" y="55" width="280" height="28" rx="6" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-opacity="0.2" />
    <text x="150" y="73" text-anchor="middle" fill="#3b82f6" font-size="13" font-weight="bold">Second Order (Rate = k[A]²)</text>
    <g transform="translate(0, 20)">
      <line x1="30" y1="230" x2="150" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="30" y1="230" x2="30" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="155" y="234" fill="#94a3b8" font-size="10">Time</text>
      <text x="25" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">[A]</text>
      <text x="90" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Concentration vs Time</text>
      <path d="M 30,125 Q 45,220 135,229" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" />
    </g>
    <g transform="translate(140, 20)">
      <line x1="20" y1="230" x2="140" y2="230" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="20" y1="230" x2="20" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="145" y="234" fill="#94a3b8" font-size="10">[A]</text>
      <text x="15" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">Rate</text>
      <text x="80" y="250" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">Rate vs Concentration</text>
      <path d="M 20,230 Q 60,225 125,125" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" />
    </g>
  </g>
</svg>`;

const activationEnergyProfileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 380" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="profilearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="doublearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 5 0 L 0 10 L 10 10 z" fill="#ef4444" />
    </marker>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Reaction Energy Profile: Activation Energy &amp; Enthalpy Change</text>
  
  <g transform="translate(150, 50)">
    <!-- Axes -->
    <line x1="50" y1="270" x2="50" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#profilearrow)" />
    <line x1="50" y1="270" x2="750" y2="270" stroke="#94a3b8" stroke-width="2" marker-end="url(#profilearrow)" />
    
    <text x="30" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 30 35)" text-anchor="end">Potential energy</text>
    <text x="740" y="285" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Extent of reaction</text>

    <!-- Dashed Reference Lines -->
    <!-- Reactant Level at y = 170 -->
    <line x1="50" y1="170" x2="480" y2="170" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4" />
    
    <!-- Product Level at y = 230 -->
    <line x1="50" y1="230" x2="680" y2="230" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4" />

    <!-- Reaction Path Curve (Exothermic) -->
    <!-- Reactants: (100, 170) -> Transition State Peak: (380, 80) -> Products: (600, 230) -->
    <path d="M 50,170 L 150,170 C 230,170 300,80 380,80 C 460,80 500,230 600,230 L 700,230" fill="none" stroke="#38bdf8" stroke-width="3" />

    <!-- Labels for Reactants and Products -->
    <text x="100" y="155" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">A + B</text>
    <text x="650" y="215" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">C + D</text>
    <text x="380" y="65" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Transition state</text>
    <circle cx="380" cy="80" r="4" fill="#ef4444" />

    <!-- Activation Energy Ea Arrow (Between Reactants at 170 and Peak at 80) -->
    <line x1="380" y1="170" x2="380" y2="85" stroke="#ef4444" stroke-width="2" marker-end="url(#profilearrow)" />
    <line x1="380" y1="85" x2="380" y2="165" stroke="#ef4444" stroke-width="2" marker-end="url(#profilearrow)" />
    <text x="395" y="130" fill="#ef4444" font-size="12" font-weight="bold">Ea</text>

    <!-- Enthalpy Change Delta H Arrow (Between Reactants at 170 and Products at 230) -->
    <line x1="320" y1="175" x2="320" y2="225" stroke="#f59e0b" stroke-width="2" marker-end="url(#profilearrow)" marker-start="url(#profilearrow)" />
    <text x="335" y="205" fill="#f59e0b" font-size="12" font-weight="bold">ΔH</text>
  </g>
</svg>`;

const halfLifeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="halflifearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b" />
    </marker>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">First-Order Reaction: Constant Half-Life Curve</text>
  <g transform="translate(100, 40)">
    <!-- Axes -->
    <line x1="80" y1="260" x2="80" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#halflifearrow)" />
    <line x1="80" y1="260" x2="820" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#halflifearrow)" />
    <text x="60" y="35" fill="#94a3b8" font-size="11" font-weight="600">[A] / mol dm⁻³</text>
    <text x="830" y="265" fill="#94a3b8" font-size="11" font-weight="600">Time / s</text>

    <!-- Grid lines -->
    <line x1="80" y1="60" x2="800" y2="60" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="110" x2="800" y2="110" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="160" x2="800" y2="160" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />
    <line x1="80" y1="210" x2="800" y2="210" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 2" />

    <!-- Y-axis scale -->
    <text x="70" y="64" fill="#94a3b8" font-size="10" text-anchor="end">120</text>
    <text x="70" y="114" fill="#94a3b8" font-size="10" text-anchor="end">60</text>
    <text x="70" y="164" fill="#94a3b8" font-size="10" text-anchor="end">30</text>
    <text x="70" y="214" fill="#94a3b8" font-size="10" text-anchor="end">15</text>

    <!-- Curve: Exponential decay y = 60 + 200 * exp(-x/144.3) -->
    <!-- Start at (80, 60), half-life is 200px (100 seconds) -->
    <path d="M 80,60 C 180,110 280,160 480,210 C 580,222 680,230 780,235" fill="none" stroke="#10b981" stroke-width="3" />

    <!-- Half-life 1 indicators -->
    <line x1="280" y1="110" x2="280" y2="260" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="110" x2="280" y2="110" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="280" y="275" fill="#ef4444" font-size="10" text-anchor="middle">100</text>

    <!-- Half-life 2 indicators -->
    <line x1="480" y1="160" x2="480" y2="260" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="160" x2="480" y2="160" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="480" y="275" fill="#ef4444" font-size="10" text-anchor="middle">200</text>

    <!-- Half-life 3 indicators -->
    <line x1="680" y1="210" x2="680" y2="260" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <line x1="80" y1="210" x2="680" y2="210" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 4" />
    <text x="680" y="275" fill="#ef4444" font-size="10" text-anchor="middle">300</text>

    <!-- Horizontal double-ended arrows for constant t1/2 -->
    <g stroke="#38bdf8" stroke-width="1.5" fill="none">
      <path d="M 85,110 L 275,110" />
      <path d="M 285,160 L 475,160" />
      <path d="M 485,210 L 675,210" />
    </g>
    <circle cx="80" cy="60" r="4" fill="#10b981" />
    <circle cx="280" cy="110" r="4" fill="#ef4444" />
    <circle cx="480" cy="160" r="4" fill="#ef4444" />
    <circle cx="680" cy="210" r="4" fill="#ef4444" />

    <text x="580" y="200" fill="#38bdf8" font-size="10" font-weight="600" text-anchor="middle">t₁/₂ = 100 s</text>
  </g>
</svg>`;

const reactionEnergyProfilesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 380" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="energyarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
    <marker id="bluearrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6" />
    </marker>
  </defs>
  <text x="50%" y="25" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Reaction Energy Profiles: SN1 vs. SN2 Mechanisms</text>
  
  <g transform="translate(15, 35)">
    <rect x="5" y="5" width="465" height="325" rx="8" fill="#1e293b" fill-opacity="0.2" stroke="#334155" stroke-width="1" />
    <text x="237" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">SN2 Mechanism (Primary Halogenoalkane)</text>
    
    <line x1="45" y1="290" x2="45" y2="40" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#energyarrow)" />
    <line x1="45" y1="290" x2="445" y2="290" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#energyarrow)" />
    <text x="30" y="45" fill="#94a3b8" font-size="9" transform="rotate(-90 30 45)" text-anchor="end">ENERGY</text>
    <text x="435" y="305" fill="#94a3b8" font-size="9" text-anchor="end">REACTION COORDINATE</text>

    <line x1="45" y1="220" x2="200" y2="220" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="45" y1="170" x2="330" y2="170" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />

    <path d="M 45,220 L 100,220 C 140,220 170,80 200,80 C 230,80 260,170 330,170 L 420,170" fill="none" stroke="#38bdf8" stroke-width="3" />

    <path d="M 60,195 L 75,205 L 90,195 L 105,205" fill="none" stroke="#ef4444" stroke-width="2" />
    <line x1="105" y1="205" x2="120" y2="190" stroke="#10b981" stroke-width="2" />
    <text x="123" y="188" fill="#10b981" font-size="9" font-weight="bold">Cl</text>
    <text x="75" y="180" fill="#10b981" font-size="9" font-weight="bold">+ OH-</text>

    <text x="300" y="50" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">Transition state</text>
    <path d="M 180,32 L 174,32 L 174,68 L 180,68" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 240,32 L 246,32 L 246,68 L 240,68" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <text x="250" y="36" fill="#94a3b8" font-size="10" font-weight="bold">-</text>

    <path d="M 185,52 L 198,42 L 210,52" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="210" y1="52" x2="225" y2="38" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2 2" />
    <text x="228" y="36" fill="#10b981" font-size="9" font-weight="bold">Cl</text>
    <line x1="210" y1="52" x2="210" y2="68" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2 2" />
    <text x="210" y="77" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">OH</text>

    <path d="M 345,150 L 360,160 L 375,150 L 390,160" fill="none" stroke="#ef4444" stroke-width="2" />
    <line x1="390" y1="160" x2="400" y2="150" stroke="#10b981" stroke-width="2" />
    <text x="402" y="148" fill="#10b981" font-size="9" font-weight="bold">OH</text>
    <text x="415" y="160" fill="#10b981" font-size="9" font-weight="bold">+ Cl-</text>

    <line x1="200" y1="220" x2="200" y2="85" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bluearrow)" />
    <text x="180" y="145" fill="#f8fafc" font-size="11" font-weight="bold">Ea</text>
  </g>

  <g transform="translate(510, 35)">
    <rect x="5" y="5" width="465" height="325" rx="8" fill="#1e293b" fill-opacity="0.2" stroke="#334155" stroke-width="1" />
    <text x="237" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">SN1 Mechanism (Tertiary Halogenoalkane)</text>
    
    <line x1="45" y1="290" x2="45" y2="40" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#energyarrow)" />
    <line x1="45" y1="290" x2="445" y2="290" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#energyarrow)" />
    <text x="30" y="45" fill="#94a3b8" font-size="9" transform="rotate(-90 30 45)" text-anchor="end">ENERGY</text>
    <text x="435" y="305" fill="#94a3b8" font-size="9" text-anchor="end">REACTION COORDINATE</text>

    <line x1="45" y1="210" x2="190" y2="210" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="45" y1="145" x2="290" y2="145" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />
    <line x1="45" y1="260" x2="410" y2="260" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />

    <path d="M 45,210 L 90,210 C 120,210 135,65 150,65 C 165,65 200,145 230,145 C 260,145 275,100 290,100 C 305,100 340,260 390,260 L 430,260" fill="none" stroke="#10b981" stroke-width="3" />

    <path d="M 60,195 L 75,185 L 90,195" fill="none" stroke="#ef4444" stroke-width="1.5" />
    <line x1="75" y1="185" x2="75" y2="170" stroke="#ef4444" stroke-width="1.5" />
    <line x1="75" y1="185" x2="90" y2="175" stroke="#10b981" stroke-width="2" />
    <text x="93" y="173" fill="#10b981" font-size="9" font-weight="bold">Cl</text>
    <text x="50" y="155" fill="#10b981" font-size="9" font-weight="bold">+ OH-</text>

    <text x="150" y="36" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Transition state 1</text>
    <path d="M 140,58 L 150,51 L 160,58" fill="none" stroke="#ef4444" stroke-width="1.2" />
    <line x1="150" y1="51" x2="150" y2="43" stroke="#ef4444" stroke-width="1.2" />
    <line x1="150" y1="51" x2="162" y2="45" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2" />
    <text x="165" y="43" fill="#10b981" font-size="8" font-weight="bold">Cl</text>

    <text x="230" y="165" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Intermediate</text>
    <path d="M 220,132 L 230,125 L 240,132" fill="none" stroke="#ef4444" stroke-width="1.5" />
    <line x1="230" y1="125" x2="230" y2="115" stroke="#ef4444" stroke-width="1.5" />
    <text x="235" y="123" fill="#ef4444" font-size="9" font-weight="bold">+</text>
    <text x="200" y="110" fill="#10b981" font-size="8" font-weight="bold">+ OH- + Cl-</text>

    <text x="290" y="60" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Transition state 2</text>
    <path d="M 280,95 L 290,88 L 300,95" fill="none" stroke="#ef4444" stroke-width="1.2" />
    <line x1="290" y1="88" x2="290" y2="80" stroke="#ef4444" stroke-width="1.2" />
    <line x1="290" y1="88" x2="300" y2="82" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2" />
    <text x="302" y="80" fill="#10b981" font-size="8" font-weight="bold">OH</text>

    <path d="M 390,245 L 400,238 L 410,245" fill="none" stroke="#ef4444" stroke-width="2" />
    <line x1="400" y1="238" x2="400" y2="228" stroke="#ef4444" stroke-width="2" />
    <line x1="400" y1="238" x2="412" y2="232" stroke="#10b981" stroke-width="2" />
    <text x="414" y="228" fill="#10b981" font-size="9" font-weight="bold">OH</text>
    <text x="425" y="250" fill="#10b981" font-size="9" font-weight="bold">+ Cl-</text>

    <line x1="150" y1="210" x2="150" y2="70" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bluearrow)" />
    <text x="155" y="125" fill="#f8fafc" font-size="10" font-weight="bold">Ea1</text>
    <text x="155" y="138" fill="#f8fafc" font-size="8" font-weight="bold">slow step</text>

    <line x1="290" y1="145" x2="290" y2="105" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bluearrow)" />
    <text x="305" y="122" fill="#f8fafc" font-size="10" font-weight="bold">Ea2</text>
    <text x="315" y="133" fill="#f8fafc" font-size="8" font-weight="bold">fast step</text>
  </g>
</svg>`;

const maxwellBoltzmannSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="boltzmannarrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b" />
    </marker>
    <!-- Shaded area patterns -->
    <pattern id="diagonalHatch1" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#10b981" stroke-width="2" opacity="0.4" />
    </pattern>
    <pattern id="diagonalHatch2" width="10" height="10" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#f59e0b" stroke-width="2" opacity="0.4" />
    </pattern>
  </defs>
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Maxwell-Boltzmann Energy Distribution & Catalysis</text>
  
  <g transform="translate(100, 40)">
    <!-- Axes -->
    <line x1="50" y1="260" x2="50" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#boltzmannarrow)" />
    <line x1="50" y1="260" x2="850" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#boltzmannarrow)" />
    <text x="30" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 30 35)" text-anchor="end">Fraction of Molecules</text>
    <text x="840" y="275" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Energy (E)</text>

    <!-- Shaded Areas under curves for Ea and Ea(cat) -->
    <!-- Ea uncatalyzed at T (550px) -->
    <!-- Ea catalyzed (380px) -->
    <path d="M 380,260 L 380,126 Q 440,110 500,85 Q 580,50 680,30 Q 750,20 800,260 Z" fill="url(#diagonalHatch1)" />
    <path d="M 550,260 L 550,68 Q 630,45 710,25 Q 780,15 800,260 Z" fill="url(#diagonalHatch2)" />

    <!-- Curve 1 at Temperature T (steeper, peaks early) -->
    <path d="M 50,260 C 100,60 200,60 300,120 C 400,180 500,220 800,240" fill="none" stroke="#3b82f6" stroke-width="3" />
    <text x="210" y="80" fill="#3b82f6" font-size="11" font-weight="bold">T</text>

    <!-- Curve 2 at Temperature T + 10 K (flatter, peaks later) -->
    <path d="M 50,260 C 130,120 250,120 350,150 C 450,180 550,200 800,230" fill="none" stroke="#ef4444" stroke-width="3" />
    <text x="310" y="130" fill="#ef4444" font-size="11" font-weight="bold">T + 10 K</text>

    <!-- Activation Energy Limits -->
    <!-- Uncatalyzed Ea -->
    <line x1="550" y1="40" x2="550" y2="260" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" />
    <text x="555" y="55" fill="#f59e0b" font-size="11" font-weight="bold">E_a (uncatalyzed)</text>

    <!-- Catalyzed Ea -->
    <line x1="380" y1="40" x2="380" y2="260" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 2" />
    <text x="385" y="55" fill="#10b981" font-size="11" font-weight="bold">E_a (catalyzed)</text>

    <!-- Legend/Notes -->
    <rect x="580" y="120" width="200" height="90" rx="4" fill="#070f1e" stroke="#1e293b" stroke-width="1.5" />
    <text x="590" y="140" fill="#10b981" font-size="10" font-weight="bold">■ Extra molecules reacting</text>
    <text x="590" y="155" fill="#10b981" font-size="9">with catalyst at T</text>
    
    <text x="590" y="180" fill="#ef4444" font-size="10" font-weight="bold">■ Molecules reacting at</text>
    <text x="590" y="195" fill="#ef4444" font-size="9">higher temperature T+10K</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
    {
        id: 'experimental-rates-u4-l1',
        title: 'Experimental Determination of Rates',
        type: 'text',
        content: `
> [!NOTE]
> ### 📋 Selecting and Justifying Experimental Techniques
> To follow a reaction, we must choose an analytical technique based on the chemical nature of the species involved, their state symbols, and their physical properties.
> 
> Here are the key methods categorized by their experimental approaches:

> [!BOX]
> ### 🧪 Measuring Gas Volume Evolved
> * **Justification:** Suitable if one of the products is a gas.
> * **Apparatus & Selection:**
>   * **Gas Syringe:** Preferred for high precision.
>   * **Collection over Water (inverted measuring cylinder):** Suitable only for gases with low solubility in water (such as $\\text{O}_2$ and $\\text{H}_2$).
> * **Example:** Reaction of calcium carbonate with hydrochloric acid:
>   $$\\text{CaCO}_3\\text{(s)} + 2\\text{HCl}\\text{(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O}\\text{(l)} + \\text{CO}_2\\text{(g)}$$
> 
> ${svgToken(gasCollectionSvg)}

> 
> > [!WARNING]
> > ### ⚠️ Gas Collection Limitation
> > Reactions producing gases that are highly soluble in water, such as sulfur dioxide ($\\text{SO}_2$), cannot be followed using gas collection over water because the gas will dissolve. A gas syringe must be used.

> [!BOX]
> ### 🎨 Continuous Colorimetry Monitoring
> * **Justification:** Suitable when a reactant or product in solution is colored (e.g., brown aqueous iodine, $\\text{I}_2\\text{(aq)}$) and changes in concentration over time. A colorimeter measures light absorbance.
> * **Advantages:** Provides objective, quantitative, and continuous measurements of concentration change.
> * **Example:** Reaction of propanone with iodine:
>   $$\\text{CH}_3\\text{COCH}_3\\text{(aq)} + \\text{I}_2\\text{(aq)} \\rightarrow \\text{CH}_3\\text{COCH}_2\\text{I}\\text{(aq)} + \\text{H}^+\\text{(aq)} + \\text{I}^-\\text{(aq)}$$
>   *Here, iodine is the only colored species, so we track its color intensity decay.*
> 
> ${svgToken(colorimeterSvg)}


> [!BOX]
> ### ⚖️ Quenching and Chemical Titration
> * **Process:** Taking samples (aliquots) of the reaction mixture at regular intervals, stopping or slowing the reaction immediately (**quenching**), and then titrating the sample to determine reactant/product concentration.
> * **Quenching Techniques:**
>   1. Rapid cooling in an ice-water bath.
>   2. Adding a chemical that neutralizes/reacts with the catalyst or one of the reactants.
> * **Example (Propanone-Iodine Reaction):** Sodium hydrogen carbonate ($\text{NaHCO}_3$) is added to neutralize the acid catalyst ($\text{H}^+$), effectively quenching the reaction. The remaining iodine is then titrated against standard sodium thiosulfate:
>   $$\\text{I}_2\\text{(aq)} + 2\\text{S}_2\\text{O}_3^{2-}\\text{(aq)} \\rightarrow 2\\text{I}^-\\text{(aq)} + \\text{S}_4\\text{O}_6^{2-}\\text{(aq)}$$

> [!BOX]
> ### ⚖️ Measuring Mass Change
> * **Justification:** Suitable if a heavy gas (e.g. $\\text{CO}_2$) escapes from the flask. A cotton wool plug allows gas to escape but prevents loss of liquid droplets.
> * **Constraint:** Highly precise for high relative molecular mass gases like $\\text{CO}_2$ ($M_r = 44.0$). Ineffective for very light gases like $\\text{H}_2$ ($M_r = 2.0$) due to large measurement uncertainties.
> 
> ${svgToken(massLossSvg)}

> [!BOX]
> ### ⏱️ Disappearing Cross Method
> * **Justification:** Suitable for reactions that produce an insoluble solid precipitate that makes the solution cloudy.
> * **Example:** Sodium thiosulfate and hydrochloric acid:
>   $$\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)} + 2\\text{HCl}\\text{(aq)} \\rightarrow 2\\text{NaCl}\\text{(aq)} + \\text{SO}_2\\text{(g)} + \\text{S}\\text{(s)} + \\text{H}_2\\text{O}\\text{(l)}$$
> 
> ${svgToken(disappearingCrossSvg)}

> [!BOX]
> ### 📋 Other Physical Monitoring Methods
> For other reactions, specific physical properties can be monitored continuously:
> 
> 1. **Electrical Conductivity:**
>    * **Justification:** Suitable if the concentration or mobility of ions in solution changes during the reaction, causing a drop/increase in conductivity.
>    * **Example:**
>      $$5\\text{Br}^-\\text{(aq)} + \\text{BrO}_3^-\\text{(aq)} + 6\\text{H}^+\\text{(aq)} \\rightarrow 3\\text{Br}_2\\text{(aq)} + 3\\text{H}_2\\text{O}\\text{(l)}$$
> 
> 2. **pH Measurement:**
>    * **Justification:** Suitable for reactions where the concentration of hydrogen ions ($\\text{H}^+$) changes significantly.
>    * **Apparatus:** A digital pH probe or meter.
> 
> 3. **Other Physical Properties (Dilatometry):**
>    * **Dilatometry:** Monitors minute changes in volume during liquid reactions.


> [!EXAMPLE]
> #### 📝 Worked Example 1: Justifying Experimental Techniques
> **Question:** Identify the most suitable experimental technique to follow the rate of each of the following reactions, and explain your choice:
> 1. Magnesium with acid:
>    $$\\\\text{Mg}\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$$
> 2. Hydrolysis of ethyl ethanoate:
>    $$\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$$
> 3. Reaction of hydrogen and iodine:
>    $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI}\\\\text{(g)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Magnesium with acid:**
> >    * *Technique:* Measuring the volume of gas evolved using a gas syringe.
> >    * *Explanation:* $\\\\text{H}_2$ gas is produced. Measuring mass loss is unsuitable because $\\\\text{H}_2$ has a very low density, leading to negligible mass changes that fall within experimental uncertainty.
> > 
> > 2. **Ethyl ethanoate with sodium hydroxide:**
> >    * *Technique:* Electrical conductivity (or quenching and titrating $\\\\text{OH}^-$).
> >    * *Explanation:* The highly conductive $\\\\text{OH}^-$ ions are replaced by less conductive $\\\\text{CH}_3\\\\text{COO}^-$ ions, causing a measurable drop in electrical conductivity.
> > 
> > 3. **Hydrogen gas with iodine gas:**
> >    * *Technique:* Colorimetry.
> >    * *Explanation:* Iodine gas ($\\\\text{I}_2$) is purple, whereas the reactant $\\\\text{H}_2$ and product $\\\\text{HI}$ are colorless. The fading of the purple color can be monitored quantitatively.


> [!EXAMPLE]
> #### 📝 Worked Example 2: Evaluating Experimental Design & Systematic Errors
> **Question:** In an experiment to follow the rate of carbon dioxide evolution from the reaction of calcium carbonate with hydrochloric acid:
> $$\\\\text{CaCO}_3\\\\text{(s)} + 2\\\\text{HCl}\\\\text{(aq)} \\\\rightarrow \\\\text{CaCl}_2\\\\text{(aq)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> A student evaluates two possible experimental setups:
> * **Setup A:** Adding calcium carbonate chips to the flask, then pouring HCl from a measuring cylinder and quickly sealing the flask with a rubber bung connected to a gas syringe.
> * **Setup B:** Using a divided flask (or suspending the solid in a small tube above the acid using a thread), sealing the flask first, and then tilting/shaking it to mix the reactants and start the reaction.
> 
> 1. Explain the major source of systematic error in **Setup A** and how it affects the recorded rate.
> 2. Explain how **Setup B** eliminates this error.
> 3. Suggest one advantage of using a gas syringe over gas collection over water if the laboratory temperature fluctuates during the experiment.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Systematic error in Setup A:**
> >    * *Source:* Gas loss occurs during the delay between pouring the acid and sealing the rubber bung.
> >    * *Effect on rate:* The measured volume of carbon dioxide will be lower than the true volume, resulting in an underestimated initial reaction rate.
> > 
> > 2. **Mitigation in Setup B:**
> >    * *Explanation:* By keeping reactants separate until the apparatus is fully sealed, no gas can escape when the reaction is initiated by tilting/shaking. This ensures all evolved gas is captured.
> > 
> > 3. **Advantage of Gas Syringe:**
> >    * *Explanation:* Carbon dioxide gas is partially soluble in water. Temperature fluctuations affect gas solubility in water (solubility decreases as temperature increases), which would introduce unpredictable errors in gas volume measurements over water. A gas syringe avoids water contact entirely.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Chemical Selection for Quenching
> **Question:** In the acid-catalyzed hydrolysis of an ester:
> $$\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{H}_2\\\\text{O}\\\\text{(l)} \\\\xrightarrow{\\\\text{H}^+\\\\text{(aq)}} \\\\text{CH}_3\\\\text{COOH}\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$$
> Aliquots (samples) of the reaction mixture are withdrawn at regular intervals to determine the concentration of ethanoic acid produced by titration with sodium hydroxide ($\\\\text{NaOH}$).
> 
> Before titrating, each aliquot must be quenched. A student suggests quenching the mixture by adding an excess of a strong alkali, sodium hydroxide ($\\\\text{NaOH}$), to neutralize the acid catalyst ($\\\\text{H}^+$).
> 
> Evaluate the student\'s suggestion, explaining why it is unsuitable, and suggest a correct alternative chemical method to quench the reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Evaluation of the student\'s suggestion:**
> >    * *Verdict:* The suggestion is highly unsuitable.
> >    * *Reasoning:* Adding a strong alkali like $\\\\text{NaOH}$ would catalyze and cause rapid alkaline hydrolysis (saponification) of the remaining unreacted ester. This would destroy the ester and change the concentration of ethanoic acid, introducing a massive error.
> > 
> > 2. **Correct alternative chemical method:**
> >    * *Method:* Quench by adding sodium hydrogencarbonate ($\\\\text{NaHCO}_3$).
> >    * *Reasoning:* $\\\\text{NaHCO}_3$ is a weak base. It is strong enough to completely neutralize the acid catalyst ($\\\\text{H}^+$) and stop the reaction, but too weak to cause alkaline hydrolysis of the ester.

> [!EXAMPLE]
> #### 📝 Worked Example 4: Comparing Monitoring Techniques
> **Question:** Consider the reaction between peroxodisulfate ions and iodide ions:
> $$\\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
> 
> 1. Suggest two different continuous physical methods that could be used to monitor the rate of this reaction.
> 2. For each method, justify your choice by referencing the species involved.
> 3. State which method is easier to set up in a standard school laboratory and why.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Method 1: Electrical Conductivity**
> >    * *Justification:* There is a change in the total number/charge of ions in solution. The reactants have a total ionic charge of $-4$ ($\\\\text{S}_2\\\\text{O}_8^{2-}$ and $2\\\\text{I}^-$), whereas the products have a total ionic charge of $-2$ ($2\\\\text{SO}_4^{2-}$). This decrease in charge density leads to a measurable drop in conductivity over time.
> > 
> > 2. **Method 2: Colorimetry**
> >    * *Justification:* Iodine ($\\\\text{I}_2$) is produced, which has a distinct brown/yellow color in aqueous solution. The reactants are colorless. The increase in color intensity (absorbance) can be monitored continuously.
> > 
> > 3. **Comparison and Feasibility:**
> >    * *Verdict:* Colorimetry is preferred and easier.
> >    * *Reasoning:* Colorimetry directly measures the concentration of a single product ($\\\\text{I}_2$) without interference. Conductivity can be affected by spectator ions (e.g., $\\\\text{Na}^+$ or $\\\\text{K}^+$ associated with the reactants) and temperature fluctuations, making calibration more complex.

> [!EXAMPLE]
> #### 📝 Worked Example 5: Iodine Clock Reaction Mechanics
> **Question:** In the Landolt "Iodine Clock" reaction, peroxodisulfate and iodide ions react to produce iodine. A small, fixed amount of sodium thiosulfate ($\\\\text{Na}_2\\\\text{S}_2\\\\text{O}_3$) and starch indicator are added to the initial mixture:
> $$\\\\text{Reaction 1 (Slow): } \\\\text{S}_2\\\\text{O}_8^{2-}\\\\text{(aq)} + 2\\\\text{I}^-\\\\text{(aq)} \\\\rightarrow 2\\\\text{SO}_4^{2-}\\\\text{(aq)} + \\\\text{I}_2\\\\text{(aq)}$$
> $$\\\\text{Reaction 2 (Fast): } \\\\text{I}_2\\\\text{(aq)} + 2\\\\text{S}_2\\\\text{O}_3^{2-}\\\\text{(aq)} \\\\rightarrow 2\\\\text{I}^-\\\\text{(aq)} + \\\\text{S}_4\\\\text{O}_6^{2-}\\\\text{(aq)}$$
> 
> 1. Explain why the solution remains colorless for a period of time and then suddenly turns blue-black.
> 2. Explain why this setup allows the calculation of the initial rate of reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Delayed color change mechanism:**
> >    * *Explanation:* Iodine ($\\\\text{I}_2$) produced by the slow Reaction 1 is immediately reduced back to colorless iodide ions ($\\\\text{I}^-$) by the rapid Reaction 2. As long as thiosulfate ions ($\\\\text{S}_2\\\\text{O}_3^{2-}$) are present, no free iodine can accumulate. Once all thiosulfate is completely consumed, free iodine accumulates and immediately reacts with starch to form the dark blue-black complex.
> > 
> > 2. **Justification for Initial Rate calculation:**
> >    * *Explanation:* The amount of thiosulfate added is very small relative to the reactants (less than 10%). The blue-black color appears when only a tiny fraction of the reactants has reacted. Therefore, the rate ($\\\\frac{1}{t}$) represents the initial rate before reactant concentrations change significantly.

> [!EXAMPLE]
> #### 📝 Worked Example 6: Colorimeter Filter Selection
> **Question:** A student uses a colorimeter to follow the rate of a reaction that produces bromine gas dissolved in water ($\\\\text{Br}_2\\\\text{(aq)}$), which is orange-brown.
> 
> 1. State the color of the filter that should be selected for the colorimeter.
> 2. Explain your choice of filter.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Filter Selection:**
> >    * *Verdict:* A blue filter (or complementary color filter around $470\\\\text{ nm}$) should be selected.
> > 
> > 2. **Explanation:**
> >    * *Reasoning:* An orange-brown solution appears orange because it transmits orange light and absorbs its complementary color, which is blue. Selecting a blue filter ensures maximum absorbance of light by the bromine molecules, leading to the highest sensitivity and accuracy in the absorbance readings.
> 
> [!IMPORTANT]
> ### 🧮 Concentration-Time Graphs & Half-Life ($t_{1/2}$)
> Plotting reactant concentration against time gives a curve from which we can determine the reaction order and half-life:
> * **Half-Life ($t_{1/2}$):** The time taken for the concentration of a reactant to fall to half of its initial value.
> * **First-Order Half-Life:** For a first-order reaction, the half-life is constant and is independent of the initial concentration:
>   $$t_{1/2} = \frac{\ln 2}{k}$$
>   *As shown in the graph below, the time taken for $[A]$ to decrease from $120$ to $60$ is $100\text{ s}$, from $60$ to $30$ is another $100\text{ s}$, and from $30$ to $15$ is also $100\text{ s}$. This constant half-life of $100\text{ s}$ confirms a first-order reaction.*
> 
> ${svgToken(halfLifeSvg)}
`,
        keyPoints: [
            'Continuous monitoring yields concentration-time graphs, from which tangent gradients at t = 0 give initial rates.',
            'Quenching stops reactions by rapid cooling or chemical neutralization; weak bases (like NaHCO3) are used to neutralize acid catalysts without causing side-hydrolysis of esters.',
            'In colorimetry, a filter matching the complementary color of the solution (e.g., a blue filter for an orange-brown bromine solution) must be chosen to ensure maximum light absorbance.',
            'Clock reactions use a small, limiting reagent to delay color change, allowing the calculation of initial rate (1/t) before reactant concentrations change significantly.'
        ]
    },
    {
        id: 'rate-equations-orders-u4-l1',
        title: 'Rate Equations & Reaction Orders',
        type: 'text',
        content: `
> [!NOTE]
> ### ⏱️ Rate of Reaction and Concentrations
> The rate of a chemical reaction is proportional to the concentration of reactants raised to a certain power.
> * **Rate of Reaction Definition:** The rate of reaction can be expressed in two ways:
>   1. How the concentration of a product increases with time:
>      $$\\\\text{Rate} = \\\\frac{d[\\\\text{product}]}{dt}$$
>   2. How the concentration of a reactant decreases with time:
>      $$\\\\text{Rate} = -\\\\frac{d[\\\\text{reactant}]}{dt}$$
> *    *The negative sign shows that the concentration of the reactant is decreasing, ensuring the calculated rate has a positive value.*
> * **Stoichiometry and Relative Rates:** For any general chemical reaction:
>   $$a\\\\text{A} + b\\\\text{B} \\\\rightarrow c\\\\text{C} + d\\\\text{D}$$
>   The rate of reaction is related to the rate of change of concentration of any reactant or product by dividing by its stoichiometric coefficient:
>   $$\\\\text{Rate} = -\\\\frac{1}{a}\\\\frac{d[\\\\text{A}]}{dt} = -\\\\frac{1}{b}\\\\frac{d[\\\\text{B}]}{dt} = +\\\\frac{1}{c}\\\\frac{d[\\\\text{C}]}{dt} = +\\\\frac{1}{d}\\\\frac{d[\\\\text{D}]}{dt}$$
>   *Reactants carry negative signs (being consumed), while products carry positive signs (being formed). This ensures the overall rate of reaction is always a single, positive value regardless of which species is monitored.*


> [!EXAMPLE]
> #### 📝 Worked Example 1: Stoichiometry and Reaction Rates
> **Question:** In the industrial synthesis of ammonia:
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)}$$
> At a specific instant during the reaction, hydrogen gas is reacting at a rate of $0.150\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$.
> 
> 1. Write the mathematical expressions relating the rate of reaction to the changes in concentration of all three species over time.
> 2. Calculate the rate of consumption of nitrogen gas ($\\\\text{N}_2$) at this instant.
> 3. Calculate the rate of formation of ammonia gas ($\\\\text{NH}_3$) at this instant.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Mathematical rate expressions:**
> >    * *Equation:*
> >      $$\\\\text{Rate} = -\\\\frac{d[\\\\text{N}_2]}{dt} = -\\\\frac{1}{3}\\\\frac{d[\\\\text{H}_2]}{dt} = +\\\\frac{1}{2}\\\\frac{d[\\\\text{NH}_3]}{dt}$$
> > 
> > 2. **Calculate the rate of consumption of nitrogen ($\\\\text{N}_2$):**
> >    * *Reasoning:* From the equation stoichiometry, $1\\\\text{ mol}$ of $\\\\text{N}_2$ is consumed for every $3\\\\text{ mol}$ of $\\\\text{H}_2$.
> >    * *Calculation:*
> >      $$\\\\text{Rate of consumption of N}_2 = \\\\frac{1}{3} \\\\times \\\\text{Rate of consumption of H}_2$$
> >      $$\\\\text{Rate} = \\\\frac{1}{3} \\\\times 0.150 = 0.050\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$$
> > 3. **Calculate the rate of formation of ammonia ($\\\\text{NH}_3$):**
> >    * *Reasoning:* $2\\\\text{ mol}$ of $\\\\text{NH}_3$ are formed for every $3\\\\text{ mol}$ of $\\\\text{H}_2$ consumed.
> >    * *Calculation:*
> >      $$\\\\text{Rate of formation of NH}_3 = \\\\frac{2}{3} \\\\times \\\\text{Rate of consumption of H}_2$$
> >      $$\\\\text{Rate} = \\\\frac{2}{3} \\\\times 0.150 = 0.100\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Average Reaction Rate
> **Question:** The decomposition of hydrogen peroxide was monitored by measuring its concentration over time:
> $$2\\\\text{H}_2\\\\text{O}_2\\\\text{(aq)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O}\\\\text{(l)} + \\\\text{O}_2\\\\text{(g)}$$
> At $t = 0\\\\text{ s}$, the concentration of $\\\\text{H}_2\\\\text{O}_2$ was $2.00\\\\text{ mol dm}^{-3}$. After $120\\\\text{ s}$, the concentration dropped to $1.40\\\\text{ mol dm}^{-3}$.
> 
> Calculate the average rate of decomposition of $\\\\text{H}_2\\\\text{O}_2$ during this $120$-second time interval, and state its units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the average rate formula:**
> >    * *Equation:*
> >      $$\\\\text{Average Rate} = -\\\\frac{\\\\Delta[\\\\text{H}_2\\\\text{O}_2]}{\\\\Delta t} = -\\\\frac{[\\\\text{H}_2\\\\text{O}_2]\\\\text{ (final)} - [\\\\text{H}_2\\\\text{O}_2]\\\\text{ (initial)}}{t\\\\text{ (final)} - t\\\\text{ (initial)}}$$
> > 
> > 2. **Substitute values and calculate:**
> >    * *Calculation:*
> >      $$\\\\text{Average Rate} = -\\\\frac{1.40 - 2.00}{120 - 0} = -\\\\frac{-0.60}{120}$$
> >      $$\\\\text{Average Rate} = 0.0050\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1} \\\\text{ (or } 5.0 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}\\\\text{)}$$

> [!IMPORTANT]
> ### 🧮 The Rate Equation and Reaction Orders
> * **Rate Equation:** An expression showing how the rate of reaction relates to the concentrations of the reactants:
>   $$\\text{Rate} = k[\\text{A}]^x\\text[\\text{B}]^y$$
> * **Rate Constant ($k$):** A proportionality constant that links reaction rate to concentrations at a specific temperature.
> * **Reaction Orders:** The powers ($x$ and $y$) to which the concentration terms are raised.
>   * *The order with respect to a reactant indicates the number of species (atoms, molecules, or ions) of that reactant involved in the rate-determining step (RDS) of the reaction mechanism.*
> 
> > [!WARNING]
> > ### ⚠️ Exam Order Limit
> > The values for orders of reaction in rate equations will only ever be $0$, $1$, or $2$ at International A Level.


> [!IMPORTANT]
> ### 🧮 Types of Reaction Orders
> 1. **Zero Order ($x = 0$):**
>    * The rate is independent of the reactant concentration.
>    * Tripling concentration has no effect on rate.
> 2. **First Order ($x = 1$):**
>    * The rate is directly proportional to the reactant concentration.
>    * Doubling concentration doubles the rate.
> 3. **Second Order ($x = 2$):**
>    * The rate is proportional to the square of the reactant concentration.
>    * Doubling concentration increases the rate by a factor of 4 ($2^2 = 4$).
> 4. **Overall Order:** The sum of all individual orders in the rate equation ($x + y$).
> 
> ${svgToken(kineticsDashboardSvg)}


> [!BOX]
> ### 📋 Common Rate Constant Units
> Since the rate is always in $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$ and concentration is in $\\\\text{mol dm}^{-3}$, the units of $k$ depend on the overall order:
> * **Zero Order:** $k = \\\\text{Rate}$, units: $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$
> * **First Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}]}$, units: $\\\\text{s}^{-1}$
> * **Second Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}][\\\\text{B}]}$, units: $\\\\text{dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$
> * **Third Order:** $k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}]^2[\\\\text{B}]}$, units: $\\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 3: Deducing Reaction Orders & Constant Units
> **Question:** A reaction has the rate equation $\\\\text{Rate} = k[\\\\text{NO}]^2[\\\\text{O}_2]$. Determine the overall order of the reaction and deduce the units of the rate constant $k$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Determine the overall order:**
> >    * Order with respect to $\\\\text{NO}$ is 2
> >    * Order with respect to $\\\\text{O}_2$ is 1
> >    * Overall order = $2 + 1 = 3$
> > 
> > 2. **Deduce the units of $k$:**
> >    * Rearrange the rate equation:
> >      $$k = \\\\frac{\\\\text{Rate}}{[\\\\text{NO}]^2[\\\\text{O}_2]}$$
> >    * Substitute units:
> >      $$\\\\text{units} = \\\\frac{\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}}{(\\\\text{mol dm}^{-3})^2(\\\\text{mol dm}^{-3})} = \\\\frac{\\\\text{s}^{-1}}{(\\\\text{mol dm}^{-3})^2}$$
> >    * Simplify:
> >      $$\\\\text{units} = \\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$$

> [!EXAMPLE]
> #### 📝 Worked Example 4: Deducing Rate Equation & Constant from Table Data
> **Question:** The reaction between compounds $\\\\text{A}$ and $\\\\text{B}$ was studied, and the following initial rates were obtained at a constant temperature:
> 
> * **Experiment 1:** $[\\\\text{A}] = 0.100\\\\text{ mol dm}^{-3}$, $[\\\\text{B}] = 0.100\\\\text{ mol dm}^{-3}$, $\\\\text{Initial Rate} = 2.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$
> * **Experiment 2:** $[\\\\text{A}] = 0.200\\\\text{ mol dm}^{-3}$, $[\\\\text{B}] = 0.100\\\\text{ mol dm}^{-3}$, $\\\\text{Initial Rate} = 8.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$
> * **Experiment 3:** $[\\\\text{A}] = 0.100\\\\text{ mol dm}^{-3}$, $[\\\\text{B}] = 0.200\\\\text{ mol dm}^{-3}$, $\\\\text{Initial Rate} = 4.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}\\\\text{ s}^{-1}$
> 
> 1. Deduce the order of reaction with respect to $\\\\text{A}$, showing your reasoning.
> 2. Deduce the order of reaction with respect to $\\\\text{B}$, showing your reasoning.
> 3. Write the rate equation for this reaction.
> 4. Calculate the value of the rate constant $k$, and state its units.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Deduce order with respect to A:**
> >    * *Reasoning:* Compare Experiment 1 and Experiment 2 where $[\\\\text{B}]$ is kept constant at $0.100\\\\text{ mol dm}^{-3}$. As $[\\\\text{A}]$ is doubled (from $0.100$ to $0.200$), the rate increases by a factor of 4 (from $2.00 \\\\times 10^{-3}$ to $8.00 \\\\times 10^{-3}$).
> >    * *Mathematical relation:* Since $2^{\\\\text{order}} = 4$, the order with respect to $\\\\text{A}$ is 2 (Second Order).
> > 
> > 2. **Deduce order with respect to B:**
> >    * *Reasoning:* Compare Experiment 1 and Experiment 3 where $[\\\\text{A}]$ is kept constant at $0.100\\\\text{ mol dm}^{-3}$. As $[\\\\text{B}]$ is doubled (from $0.100$ to $0.200$), the rate doubles (from $2.00 \\\\times 10^{-3}$ to $4.00 \\\\times 10^{-3}$).
> >    * *Mathematical relation:* Since $2^{\\\\text{order}} = 2$, the order with respect to $\\\\text{B}$ is 1 (First Order).
> > 
> > 3. **Write the rate equation:**
> >    * *Equation:*
> >      $$\\\\text{Rate} = k[\\\\text{A}]^2[\\\\text{B}]$$
> > 
> > 4. **Calculate rate constant k and units:**
> >    * *Calculation:* Rearrange the rate equation using data from Experiment 1:
> >      $$k = \\\\dfrac{\\\\text{Rate}}{[\\\\text{A}]^2[\\\\text{B}]} = \\\\dfrac{2.00 \\\\times 10^{-3}}{(0.100)^2 \\\\times (0.100)}$$
> >      $$k = \\\\dfrac{2.00 \\\\times 10^{-3}}{0.010 \\\\times 0.100} = \\\\dfrac{2.00 \\\\times 10^{-3}}{1.00 \\\\times 10^{-3}} = 2.00$$
> >    * *Units:*
> >      $$\\\\text{Units} = \\\\dfrac{\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}}{(\\\\text{mol dm}^{-3})^2 \\\\times (\\\\text{mol dm}^{-3})} = \\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$$
> >      *Final answer:* $k = 2.00\\\\text{ dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 5: Predicting Concentration Change Effects on Rate
> **Question:** A chemical reaction has the rate equation:
> $$\\\\text{Rate} = k[\\\\text{X}]^2[\\\\text{Y}]^0[\\\\text{Z}]^1$$
> 
> Predict the factor by which the rate of reaction changes if:
> 1. The concentration of $\\\\text{X}$ is doubled, while $[\\\\text{Y}]$ and $[\\\\text{Z}]$ are kept constant.
> 2. The concentration of $\\\\text{Y}$ is doubled, while $[\\\\text{X}]$ and $[\\\\text{Z}]$ are kept constant.
> 3. The concentration of $\\\\text{X}$ is doubled, the concentration of $\\\\text{Y}$ is tripled, and the concentration of $\\\\text{Z}$ is halved.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Doubling [X] only:**
> >    * *Reasoning:* The reaction is second order with respect to $\\\\text{X}$ ($[\\\\text{X}]^2$).
> >    * *Effect:* The rate changes by $2^2 = 4$. Therefore, the rate increases by a factor of 4.
> > 
> > 2. **Doubling [Y] only:**
> >    * *Reasoning:* The reaction is zero order with respect to $\\\\text{Y}$ ($[\\\\text{Y}]^0$).
> >    * *Effect:* The rate is independent of $[\\\\text{Y}]$. Therefore, the rate remains unchanged (factor of 1).
> > 
> > 3. **Doubling [X], tripling [Y], and halving [Z]:**
> >    * *Reasoning:* The reaction is second order for $\\\\text{X}$, zero order for $\\\\text{Y}$, and first order for $\\\\text{Z}$.
> >    * *Calculation:*
> >      $$\\\\text{Rate factor} = (2)^2 \\\\times (3)^0 \\\\times \\\\left(\\\\frac{1}{2}\\\\right)^1$$
> >      $$\\\\text{Rate factor} = 4 \\\\times 1 \\\\times \\\\frac{1}{2} = 2$$
> >      *Final answer:* The overall rate of reaction doubles (increases by a factor of 2).
`,
        keyPoints: [
            'Reaction orders can only be determined experimentally (e.g. using initial rates table data) and cannot be predicted from the balanced equation stoichiometry.',
            'The rate constant k links reaction rate to concentrations at a specific temperature; its value is constant at a constant temperature but increases as temperature rises.',
            'The units of k vary depending on the overall order of the reaction and are deduced by rearranging the rate equation.',
            'Average rate of reaction is calculated by dividing the change in reactant/product concentration by the time interval (\\\\Delta[C]/\\\\Delta t).',
            'Predicting the effect of changing concentration on rate involves raising the change factor to the power of the reactant order (e.g., doubling concentration for a second-order reactant increases rate by 2^2 = 4).'
        ],
        equationVisualizer: {
            reactants: [['NO', '#ef4444'], ['O₂', '#3b82f6']],
            products: [['NO₂', '#10b981']],
            description: "Nitrogen monoxide reacts with oxygen where the rate depends on [NO]² and [O₂]"
        }
    },
    {
        id: 'reaction-mechanisms-rds-u4-l1',
        title: 'Reaction Mechanisms & Rate-Determining Step',
        type: 'text',
        content: `
> [!NOTE]
> ### ⛓️ Multi-Step Reactions & Mechanisms
> Most chemical reactions do not occur in a single collision. For example, consider the acidic redox reaction:
> $$\\\\text{MnO}_4^-\\\\text{(aq)} + 8\\\\text{H}^+\\\\text{(aq)} + 5\\\\text{Fe}^{2+}\\\\text{(aq)} \\\\rightarrow \\\\text{Mn}^{2+}\\\\text{(aq)} + 4\\\\text{H}_2\\\\text{O}\\\\text{(l)} + 5\\\\text{Fe}^{3+}\\\\text{(aq)}$$
> For this reaction to occur in a single step, $14$ particles would have to collide simultaneously, with the correct orientation and sufficient energy. The probability of this is statistically zero. Therefore, reactions proceed via a series of simple steps called a **reaction mechanism**.
> * **Elementary Step:** An individual step in a mechanism.
> * **Intermediate:** A species formed in one step and consumed in a subsequent step (does not appear in the overall balanced equation).
> * **Rate-Determining Step (RDS):** The slowest step in a reaction mechanism. It acts as a bottleneck and controls the overall rate.
> 
> > [!BOX]
> > ### 🔬 Elementary vs. Non-Elementary Reactions
> > * **Elementary Reaction:** A reaction that occurs via a single collision between reactant particles.
> >   * *Rate Deduction:* The rate equation can be deduced directly from its stoichiometric coefficients:
> >     $$x\\\\text{A} + y\\\\text{B} \\\\rightarrow \\\\text{AB} \\\\implies \\\\text{Rate} = k[\\\\text{A}]^x[\\\\text{B}]^y$$
> >   * *Example:*
> >     $$\\\\text{NO(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow \\\\text{NO}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{NO}][\\\\text{O}_3]$$
> > 
> > * **Non-Elementary Reaction:** A reaction that takes place through a series of elementary steps (a reaction mechanism).
> >   * *Rate Deduction:* The rate equation cannot be predicted from the stoichiometry of the overall equation and must be determined experimentally.
> >   * *Example 1:*
> >     $$2\\\\text{N}_2\\\\text{O}_5\\\\text{(g)} \\\\rightarrow 4\\\\text{NO}_2\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{N}_2\\\\text{O}_5]$$
> >     *Mechanism:*
> >     1. $\\\\text{N}_2\\\\text{O}_5 \\\\rightarrow \\\\text{NO}_2 + \\\\text{NO}_3$ (Slow / RDS)
> >     2. $\\\\text{NO}_2 + \\\\text{NO}_3 \\\\rightarrow \\\\text{NO}_2 + \\\\text{NO} + \\\\text{O}_2$ (Fast)
> >     3. $\\\\text{NO} + \\\\text{NO}_3 \\\\rightarrow 2\\\\text{NO}_2$ (Fast)
> >   * *Example 2:*
> >     $$\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)} \\\\implies \\\\text{Rate} = k[\\\\text{NO}_2]^2$$
> >     *Mechanism:*
> >     1. $\\\\text{NO}_2 + \\\\text{NO}_2 \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO}$ (Slow / RDS)
> >     2. $\\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_2 + \\\\text{CO}_2$ (Fast)
> 
> > [!TIP]
> > ### 📋 The Student Notes Analogy
> > Imagine three students preparing study notes:
> > * **Student 1:** Collects sheets from 10 piles (**SLOW**).
> > * **Student 2:** Tidies the sheets (**FAST**).
> > * **Student 3:** Staples the sheets (**FAST**).
> > 
> > The overall rate of producing finished notes depends entirely on the speed of **Student 1**. The other students do nothing but wait for Student 1 to finish. Thus, Student 1 represents the rate-determining step.
> 
> > [!TIP]
> > ### 🧮 Theoretical Example of RDS
> > Consider a multi-step reaction:
> > $$\\\\text{A} + \\\\text{B} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$$
> > If the experimentally determined rate equation is:
> > $$\\\\text{Rate} = k[\\\\text{A}]^m[\\\\text{B}]^n$$
> > This tells us that species $\\\\text{A}$ and $\\\\text{B}$ must be involved in or before the rate-determining step, while reactant $\\\\text{C}$ participates only in a subsequent fast step.
> > * **Step 1 (Slow / RDS):** $\\\\text{A} + \\\\text{B} \\\\rightarrow \\\\text{Z}$
> > * **Step 2 (Fast):** $\\\\text{Z} + \\\\text{C} \\\\rightarrow \\\\text{D} + \\\\text{E}$
> 
>  > [!IMPORTANT]
>  > ### 🗮️ Rules for Connecting Mechanisms to Rate Equations
>  > 1. **Reactant Presence:** All reactant species involved either in, or before, the rate-determining step have an effect on the rate and will appear in the rate equation.
>  > 2. **Reaction Order:** The coefficients of reactants in the RDS (or steps preceding it) match the order of those reactants in the rate equation.
>  > 3. **Species After RDS:** Species participating only in steps AFTER the RDS do not appear in the rate equation (or their concentration effect is negligible because they react in fast steps).
>  > 4. **Species in Large Excess:** A reactant present in such a large excess that its concentration change is negligible will not have a measurable effect on the rate and won't appear in the rate equation.

> [!BOX]
> ### 📊 Reaction Energy Profiles: SN1 vs. SN2 Mechanisms
> The kinetic evidence of halogenoalkane hydrolysis directly distinguishes between two mechanism types:
> 
> 1. **Transition State vs. Intermediate:**
>    * **Intermediate:** A definite chemical species with a finite lifetime (e.g., carbocations, lifetime $\\\\approx 10^{-6}\\\\text{ s}$). Appears as an **energy minimum** (well) on a reaction profile.
>    * **Transition State:** An unstable arrangement of atoms at the **energy maximum** (peak) of a step. It has a negligible lifetime ($\\\\approx 10^{-15}\\\\text{ s}$, the time of molecular collision).
> 
> 2. **SN2 Hydrolysis (Primary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}][\\\\text{OH}^-]$ (Bimolecular)
>    * **Reaction Profile:** Shows a **single peak** (one transition state) representing the simultaneous nucleophilic attack and leaving group departure. No intermediate is formed.
>    * **Steric Crowding Effect:** Primary halogenoalkanes have small hydrogen atoms surrounding the central carbon, allowing the nucleophile to attack easily. In tertiary halogenoalkanes, three bulky alkyl groups cause steric hindrance/crowding, making the transition state highly unstable (higher $E_a$). Thus, SN2 rates increase in the order: $3^\\\\circ < 2^\\\\circ < 1^\\\\circ$.
> 
> 3. **SN1 Hydrolysis (Tertiary Halogenoalkanes):**
>    * **Rate Equation:** $\\\\text{Rate} = k[\\\\text{RHal}]$ (Unimolecular)
>    * **Reaction Profile:** Shows **two peaks** (two transition states) separated by a well (the carbocation intermediate minimum).
>    * **RDS Activation Energy:** The activation energy for the first step (ionization to form the carbocation) is much higher than the second step ($E_a(1) > E_a(2)$), making it the rate-determining step.
>    * **Inductive Effect:** Alkyl groups donate electrons towards the carbocation carbon, stabilizing the $3^\\\\circ$ carbocation intermediate far more than a $1^\\\\circ$ one. This dramatically lowers $E_a(1)$. Thus, SN1 rates increase in the order: $1^\\\\circ < 2^\\\\circ < 3^\\\\circ$.
> 
> *Secondary halogenoalkane hydrolysis proceeds via a mixture of both SN1 and SN2 mechanisms.*
> 
> ${svgToken(reactionEnergyProfilesSvg)}

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing a Mechanism from a Rate Equation
> **Question:** The reaction $\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)}$ has the experimental rate equation $\\\\text{Rate} = k[\\\\text{NO}_2]\\\^2 . $ Explain why the following two-step mechanism is consistent with the rate equation:
> 
> * **Step 1 (slow):** $\\\\text{NO}_2 + \\\\text{NO}_2 \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO}$
> * **Step 2 (fast):** $\\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_2 + \\\\text{CO}_2$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Identify the rate-determining step:**
> >    * Step 1 is specified as the slow step, meaning it is the RDS.
> > 
> > 2. **Formulate the rate equation from the RDS:**
> >    * The reactants in Step 1 are two molecules of $\\\\text{NO}_2$
> >    * Therefore, the rate equation is:
> >      $$\\\\text{Rate} = k[\\\\text{NO}_2][\\\\text{NO}_2] = k[\\\\text{NO}_2]^2$$
> >    * This matches the experimentally determined rate equation.
> > 
> > 3. **Verify the overall stoichiometry:**
> >    * Add Step 1 and Step 2:
> >      $$2\\\\text{NO}_2 + \\\\text{NO}_3 + \\\\text{CO} \\\\rightarrow \\\\text{NO}_3 + \\\\text{NO} + \\\\text{NO}_2 + \\\\text{CO}_2$$
> >    * Cancel intermediate $\\\\text{NO}_3$ and one $\\\\text{NO}_2$ from both sides:
> >      $$\\\\text{NO}_2 + \\\\text{CO} \\\\rightarrow \\\\text{NO} + \\\\text{CO}_2$$
> >    * The mechanism yields the correct overall equation, proving it is consistent.
`,
        keyPoints: [
            'Intermediate species are never included in the final rate equation.',
            'A reactant that does not affect the rate (zero order) must react in a fast step after the RDS.'
        ],
        equationVisualizer: {
            reactants: [['NO₂', '#ef4444'], ['CO', '#3b82f6']],
            products: [['NO', '#10b981'], ['CO₂', '#f59e0b']],
            description: "The rate of this reaction is independent of CO concentration because CO reacts in a fast step after the RDS"
        }
    },
    {
        id: 'arrhenius-equation-u4-l1',
        title: 'Arrhenius Equation & Activation Energy',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌡️ Effect of Temperature on Rate Constants
> Increasing the temperature increases the rate of reaction by increasing the rate constant $k$. There are two reasons for this:
> 1. **Fraction of Active Molecules (Major):** A significant increase in the fraction of molecules with energy equal to or greater than the activation energy ($E \\\\ge E_a$).
> 2. **Collision Frequency (Minor):** A small increase in the frequency of collisions between molecules as they move faster.
> 
> *The increase in the fraction of molecules with sufficient energy is by far the most significant factor, while the collision frequency effect is negligible and effectively ignored.*
> 
> * **The Arrhenius Equation:**
>   $$k = A e^{-\\\\frac{E_a}{RT}}$$
> * Where:
>   * **$k$** = Rate constant
>   * **$A$** = Arrhenius constant (pre-exponential factor, related to collision frequency and collision orientation)
>   * **$E_a$** = Activation energy (in $\\\\text{J mol}^{-1}$)
>   * **$R$** = Gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$T$** = Temperature (in $\\\\text{Kelvin}$)
> 
> * **Significance of the factor $e^{-\\\\frac{E_a}{RT}}$:** This term represents the fraction of collisions that possess energy equal to or greater than $E_a$. For a reaction with $E_a = 60\\\\text{ kJ mol}^{-1}$ at $298\\\\text{ K}$, this fraction is $\\\\approx 3 \\\\times 10^{-11}$ (only one in $3 \\\\times 10^{11}$ collisions has sufficient energy to react).
> 
> > [!TIP]
> > ### 💡 Effect of Activation Energy Magnitude
> > * Reactions with a **large $E_a$** are slow at room temperature, but their rate increases rapidly (highly sensitive) with an increase in temperature.
> > * Reactions with a **small $E_a$** are fast, but their rate does not increase as rapidly with temperature.
> > * Catalyzed reactions have smaller values of $E_a$.
> 
> > [!WARNING]
> > ### ⚠️ Exam Hint
> > You will always be given the Arrhenius equation if it is needed in an exam question.
> 
> ${svgToken(maxwellBoltzmannSvg)}
> 
> [!IMPORTANT]
> ### 🧮 Logarithmic Form of the Arrhenius Equation
> To analyze experimental data, we take the natural logarithm ($\\\\ln$) of both sides:
> 
> $$\\\\ln k = -\\\\frac{E_a}{RT} + \\\\ln A$$
> 
> This is in the form of a straight line equation ($y = mx + c$):
> * **$y$-axis:** $\\\\ln k$
> * **$x$-axis:** $\\\\frac{1}{T}$ (in $\\\\text{K}^{-1}$)
> * **Gradient ($m$):** $-\\\\frac{E_a}{R}$
> * **Intercept ($c$):** $\\\\ln A$
> 
> *Note: While it is assumed that both $E_a$ and $A$ remain constant over a range of temperatures, their small variations are insignificant compared to the overall temperature effect on the rate constant.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Activation Energy
> **Question:** An Arrhenius plot of $\\\\ln k$ against $\\\\frac{1}{T}$ yields a straight line with a gradient of $-1.20 \\\\times 10^4\\\\text{ K}$. Calculate the activation energy ($E_a$) of the reaction in $\\\\text{kJ mol}^{-1}$ ($R = 8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **State the relationship between gradient and $E_a$:**
> >    $$\\\\text{Gradient} = -\\\\frac{E_a}{R}$$
> > 
> > 2. **Calculate $E_a$ in $\\\\text{J mol}^{-1}$:**
> >    $$-1.20 \\\\times 10^4 = -\\\\frac{E_a}{8.31}$$
> >    $$E_a = 1.20 \\\\times 10^4 \\\\times 8.31 = 9.972 \\\\times 10^4\\\\text{ J mol}^{-1}$$
> > 
> > 3. **Convert to $\\\\text{kJ mol}^{-1}$:**
> >    $$E_a = \\\\frac{9.972 \\\\times 10^4}{1000} = 99.7\\\\text{ kJ mol}^{-1}$$
`,
        keyPoints: [
            'Always convert temperature to Kelvin (K) when using the Arrhenius equation.',
            'Ensure the units of Ea match the gas constant units (J/mol) before converting to kJ/mol.',
            'The exponential term represents the fraction of collisions with energy equal to or greater than the activation energy.'
        ]
    },
    {
        id: 'catalysis-autocatalysis-u4-l1',
        title: 'Activation Energy, Catalysis & Autocatalysis',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Activation Energy ($E_a$) and Transition States
> * **Activation Energy ($E_a$):** The minimum energy that colliding particles must possess for a reaction to occur.
> * **Transition State:** The unstable, high-energy state at the peak of the reaction profile diagram. Once reached, reactants can form products and release energy.
> * **Catalysts:** Substances that increase the reaction rate by providing an alternative reaction route with a lower activation energy, while remaining chemically unchanged at the end of the reaction.
> 
> ${svgToken(activationEnergyProfileSvg)}

> [!BOX]
> ### 🧪 Homogeneous vs. Heterogeneous Catalysis
> 
> 1. **Homogeneous Catalysts:**
>    * The catalyst is in the **same phase** as the reactants.
>    * **Example (Ozone depletion):** Chlorine radicals ($\\\\text{Cl}\\\\bullet$) in the gas phase catalyze the decomposition of ozone gas ($\\\\text{O}_3$):
>      $$\\\\text{Cl}\\\\bullet\\\\text{(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow \\\\text{ClO}\\\\bullet\\\\text{(g)} + \\\\text{O}_2\\\\text{(g)}$$
>      $$\\\\text{ClO}\\\\bullet\\\\text{(g)} + \\\\text{O}_3\\\\text{(g)} \\\\rightarrow 2\\\\text{O}_2\\\\text{(g)} + \\\\text{Cl}\\\\bullet\\\\text{(g)}$$
>    * **Example (Peroxydisulfate + Iodide):** Catalyzed by $\\\\text{Fe}^{2+}\\\\text{(aq)}$ or $\\\\text{Fe}^{3+}\\\\text{(aq)}$ ions in solution.
>      *Thermodynamic feasibility is predicted by $E^\\\\circ$ electrode potentials, but the kinetics are accelerated because both steps have lower activation energy than the uncatalyzed reaction.*
> 
> 2. **Heterogeneous Catalysts:**
>    * The catalyst is in a **different phase** from the reactants.
>    * **Mechanism (Adsorption, Reaction, Desorption):**
>      1. **Adsorption:** Reactant molecules are adsorbed onto active sites on the solid catalyst surface.
>      2. **Reaction:** Reactant bonds are weakened, and molecules are held in positions that enable them to react together.
>      3. **Desorption:** Product molecules leave the surface.
>    * **Industrial Examples:**
>      * **Haber Process:** Iron solid catalyst forms an *interstitial hydride* with hydrogen molecules, where hydrogen atoms are held in spaces between metal ions in the lattice, allowing them to react with adsorbed nitrogen.
>      * **Contact Process:** Solid vanadium(V) oxide ($\\\\text{V}_2\\\\text{O}_5$) catalyst.
>      * **Catalytic Converters:** Three-way catalytic converters in cars convert toxic gases.
>    * **Efficiency Factors:**
>      * **Poisoning:** Trace impurities block active sites (e.g., sulfur poisons nickel catalysts in alkene hydrogenation; lead poisons catalytic converters).
>      * **Promoters:** Additives that increase efficiency by producing active sites (e.g., $\\\\text{K}_2\\\\text{O}$ and $\\\\text{Al}_2\\\\text{O}_3$ in the Haber Process).

> [!BOX]
> ### 🔄 Autocatalysis
> * **Definition:** When one of the reaction products acts as a catalyst for the reaction.
> * **Example:** The oxidation of ethanedioic acid by manganate(VII) ions, catalyzed by the product manganese(II) ions ($\\\\text{Mn}^{2+}$):
>   $$5\\\\text{(COOH)}_2\\\\text{(aq)} + 2\\\\text{MnO}_4^-\\\\text{(aq)} + 6\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow 10\\\\text{CO}_2\\\\text{(g)} + 2\\\\text{Mn}^{2+}\\\\text{(aq)} + 8\\\\text{H}_2\\\\text{O}\\\\text{(l)}$$
> * **Autocatalytic Rate Curve:**
>   * **Initially slow:** There is no $\\\\text{Mn}^{2+}$ present to catalyze the reaction.
>   * **Speeds up:** As $\\\\text{Mn}^{2+}$ is produced, it catalyzes the reaction, causing a rapid increase in rate.
>   * **Slows down:** The rate decreases as reactant concentrations are depleted.
> 
> > [!WARNING]
> > ### ⚠️ Autocatalytic Graph Trap
> > Do not assume that every sigmoidal (S-shaped) rate curve represents autocatalysis. Similar shapes can be caused by:
> > 1. Strongly exothermic reactions (where heat released increases the rate).
> > 2. Slow initial penetration/wetting of a solid reactant surface by a liquid.
`,
        keyPoints: [
            'Homogeneous catalysts are in the same phase as reactants; heterogeneous catalysts are in a different phase.',
            'Heterogeneous catalysis involves adsorption of reactants onto active sites, reaction, and desorption of products.',
            'Catalytic poisoning occurs when impurities block active sites, whereas promoters increase the number of active sites.',
            'In autocatalysis, the reaction starts slowly, accelerates as the catalyst product forms, and then slows down as reactants are depleted.'
        ]
    }
];
