import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Acid-Base Equilibria";
export const lessonNumber = 4;

export const theoryMarkdown = `
# Topic 14: Acid-Base Equilibria
This lesson covers the Brønsted-Lowry acid-base theory, pH calculations for strong and weak acids and bases, the ionic product of water (Kw), Ka and pKa, and buffer solutions.
`;

const protonTransferSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="15" font-weight="bold">Brønsted-Lowry Proton Transfer &amp; Conjugate Pairs</text>
  
  <g transform="translate(100, 80)">
    <rect x="0" y="20" width="160" height="80" rx="8" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2" />
    <text x="80" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">CH₃COOH</text>
    <text x="80" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Ethanoic Acid</text>
    <text x="80" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ACID 1</text>
    
    <text x="200" y="65" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">+</text>
    
    <rect x="240" y="20" width="160" height="80" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="2" />
    <text x="320" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H₂O</text>
    <text x="320" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Water</text>
    <text x="320" y="85" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">BASE 2</text>
  </g>
  
  <g transform="translate(500, 80)">
    <text x="0" y="55" fill="#f59e0b" font-size="24" text-anchor="middle">⇌</text>
    <path d="M -180,10 Q -50,-40 80,10" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" marker-end="url(#arrow)" />
    <text x="-50" y="-20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Proton Transfer (H⁺)</text>
  </g>
  
  <g transform="translate(600, 80)">
    <rect x="0" y="20" width="160" height="80" rx="8" fill="#3b82f6" fill-opacity="0.1" stroke="#3b82f6" stroke-dasharray="4 4" stroke-width="2" />
    <text x="80" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">CH₃COO⁻</text>
    <text x="80" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Ethanoate Ion</text>
    <text x="80" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CONJUGATE BASE 1</text>
    
    <text x="200" y="65" fill="#f8fafc" font-size="20" font-weight="bold" text-anchor="middle">+</text>
    
    <rect x="240" y="20" width="160" height="80" rx="8" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-dasharray="4 4" stroke-width="2" />
    <text x="320" y="45" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">H₃O⁺</text>
    <text x="320" y="65" fill="#94a3b8" font-size="11" text-anchor="middle">Hydronium Ion</text>
    <text x="320" y="85" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">CONJUGATE ACID 2</text>
  </g>

  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
    </marker>
  </defs>
  
  <path d="M 180,180 C 180,240 680,240 680,180" fill="none" stroke="#3b82f6" stroke-width="2" />
  <rect x="380" y="205" width="240" height="20" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1" />
  <text x="500" y="219" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">Conjugate Acid-Base Pair 1 (differs by 1 H⁺)</text>

  <path d="M 420,180 C 420,300 920,300 920,180" fill="none" stroke="#10b981" stroke-width="2" />
  <rect x="620" y="265" width="240" height="20" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1" />
  <text x="740" y="279" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Conjugate Acid-Base Pair 2 (differs by 1 H⁺)</text>
</svg>`;

const titrationCurvesDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 410" class="w-full h-auto rounded-lg flex-shrink-0" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <text x="490" y="24" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">pH Titration Curves &amp; Indicator Transition Ranges</text>

  <!-- ===== PANEL 1: Strong Acid / Strong Base ===== -->
  <g transform="translate(10, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Strong Acid / Strong Base</text>

    <!-- Indicator bands (within plot area x=42..210, y=40..310) -->
    <!-- Phenolphthalein 8.2-10.0 → y=310-(8.2/14)*270=310-157.9=152.1 to y=310-(10/14)*270=310-192.9=117.1 -->
    <rect x="42" y="117" width="168" height="36" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-dasharray="3 2" stroke-width="0.8"/>
    <text x="44" y="130" fill="#fca5a5" font-size="8" font-weight="bold">Phenolphthalein (8.2 – 10.0)</text>
    <!-- Methyl Orange 3.1-4.4 → y=310-(3.1/14)*270=310-59.8=250.2 to y=310-(4.4/14)*270=310-84.9=225.1 -->
    <rect x="42" y="225" width="168" height="26" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-dasharray="3 2" stroke-width="0.8"/>
    <text x="44" y="241" fill="#fcd34d" font-size="8" font-weight="bold">Methyl Orange (3.1 – 4.4)</text>

    <!-- Axes: plot area x=42..210, y=40..310 -->
    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <!-- Y-axis labels (pH 0-14, every 2) -->
    <!-- y = 310 - (pH/14)*270 -->
    <text x="38" y="313" fill="#94a3b8" font-size="7" text-anchor="end">0</text>
    <text x="38" y="275" fill="#94a3b8" font-size="7" text-anchor="end">2</text>
    <text x="38" y="236" fill="#94a3b8" font-size="7" text-anchor="end">4</text>
    <text x="38" y="194" fill="#94a3b8" font-size="7" text-anchor="end">6</text>
    <text x="38" y="175" fill="#94a3b8" font-size="7" text-anchor="end">7</text>
    <text x="38" y="156" fill="#94a3b8" font-size="7" text-anchor="end">8</text>
    <text x="38" y="117" fill="#94a3b8" font-size="7" text-anchor="end">10</text>
    <text x="38" y="78" fill="#94a3b8" font-size="7" text-anchor="end">12</text>
    <text x="38" y="43" fill="#94a3b8" font-size="7" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="9" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <!-- X-axis labels (0,10,20,25,30,40,50) -->
    <!-- x = 42 + (vol/50)*168 -->
    <text x="42" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">0</text>
    <text x="76" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">10</text>
    <text x="109" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">20</text>
    <text x="126" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">25</text>
    <text x="143" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">30</text>
    <text x="176" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">40</text>
    <text x="210" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">50</text>
    <text x="126" y="333" fill="#94a3b8" font-size="8" text-anchor="middle">Vol / cm³</text>

    <!-- Guide grid: pH=7 at y=175, vol=25 at x=126 -->
    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Red equivalence dashed lines: vol=25 (pH=7) → x=126, y=175 -->
    <line x1="42" y1="175" x2="126" y2="175" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="175" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <!-- CURVE: Strong Acid/Strong Base. pH 1→7(sharp)→12.2 -->
    <!-- vol=0,pH=1 → y=310-(1/14)*270=290.7≈291 -->
    <!-- vol=24,pH=3.09 → y=310-(3.09/14)*270=250.5≈251, x=42+(24/50)*168=122.6≈123 -->
    <!-- vol=24.9,pH=4.08 → x=125.7, y=310-78.7=231.3≈231 -->
    <!-- vol=25,pH=7 → x=126, y=175 -->
    <!-- vol=25.1,pH=9.92 → x=126.3, y=310-191.2=118.8≈119 -->
    <!-- vol=26,pH=10.91 → x=129.4, y=310-210.4=99.6≈100 -->
    <!-- vol=30,pH=11.68 → x=143, y=310-225.3=84.7≈85 -->
    <!-- vol=50,pH=12.22 → x=210, y=310-235.7=74.3≈74 -->
    <path d="M 42,291 C 76,288 109,278 123,251 C 124.5,238 125,205 126,175 C 126.5,145 127,119 130,100 C 137,85 176,75 210,74" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Equivalence dot -->
    <circle cx="126" cy="175" r="4" fill="#ef4444"/>
    <text x="132" y="172" fill="#ef4444" font-size="8" font-weight="bold">pH=7, V=25 cm³</text>

    <text x="114" y="348" fill="#38bdf8" font-size="9.5" text-anchor="middle" font-weight="600">Vertical section: pH 3 → 11</text>
  </g>

  <!-- ===== PANEL 2: Strong Acid / Weak Base ===== -->
  <g transform="translate(253, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="bold">Strong Acid / Weak Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="38" y="313" fill="#94a3b8" font-size="7" text-anchor="end">0</text>
    <text x="38" y="275" fill="#94a3b8" font-size="7" text-anchor="end">2</text>
    <text x="38" y="236" fill="#94a3b8" font-size="7" text-anchor="end">4</text>
    <text x="38" y="194" fill="#94a3b8" font-size="7" text-anchor="end">6</text>
    <text x="38" y="175" fill="#94a3b8" font-size="7" text-anchor="end">7</text>
    <text x="38" y="156" fill="#94a3b8" font-size="7" text-anchor="end">8</text>
    <text x="38" y="117" fill="#94a3b8" font-size="7" text-anchor="end">10</text>
    <text x="38" y="78" fill="#94a3b8" font-size="7" text-anchor="end">12</text>
    <text x="38" y="43" fill="#94a3b8" font-size="7" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="9" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">0</text>
    <text x="76" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">10</text>
    <text x="109" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">20</text>
    <text x="126" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">25</text>
    <text x="143" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">30</text>
    <text x="176" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">40</text>
    <text x="210" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">50</text>
    <text x="126" y="333" fill="#94a3b8" font-size="8" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Equivalence at pH≈5.2 → y=310-(5.2/14)*270=310-100.3=209.7≈210 -->
    <line x1="42" y1="210" x2="126" y2="210" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="210" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <!-- CURVE: Strong Acid/Weak Base. pH 1→5.2(less sharp)→8.5 -->
    <!-- vol=0,pH=1 → y=291 -->
    <!-- vol=24,pH=2.9 → x=122.6, y=310-(2.9/14)*270=255.9≈256 -->
    <!-- vol=25,pH=5.2 → x=126, y=210 -->
    <!-- vol=26,pH=7.0 → x=129.4, y=175 -->
    <!-- vol=30,pH=8.0 → x=143, y=310-154.3=155.7≈156 -->
    <!-- vol=50,pH=9.0 → x=210, y=310-173.6=136.4≈136 -->
    <path d="M 42,291 C 76,287 109,272 123,256 C 124.5,246 125,228 126,210 C 127,192 128,177 130,168 C 137,152 176,139 210,136" fill="none" stroke="#fb7185" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="210" r="4" fill="#ef4444"/>
    <text x="132" y="208" fill="#ef4444" font-size="8" font-weight="bold">pH &lt; 7</text>

    <text x="114" y="348" fill="#fb7185" font-size="9.5" text-anchor="middle" font-weight="600">Vertical section: pH 3 → 7</text>
  </g>

  <!-- ===== PANEL 3: Weak Acid / Strong Base ===== -->
  <g transform="translate(496, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">Weak Acid / Strong Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="38" y="313" fill="#94a3b8" font-size="7" text-anchor="end">0</text>
    <text x="38" y="275" fill="#94a3b8" font-size="7" text-anchor="end">2</text>
    <text x="38" y="236" fill="#94a3b8" font-size="7" text-anchor="end">4</text>
    <text x="38" y="194" fill="#94a3b8" font-size="7" text-anchor="end">6</text>
    <text x="38" y="175" fill="#94a3b8" font-size="7" text-anchor="end">7</text>
    <text x="38" y="156" fill="#94a3b8" font-size="7" text-anchor="end">8</text>
    <text x="38" y="117" fill="#94a3b8" font-size="7" text-anchor="end">10</text>
    <text x="38" y="78" fill="#94a3b8" font-size="7" text-anchor="end">12</text>
    <text x="38" y="43" fill="#94a3b8" font-size="7" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="9" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">0</text>
    <text x="76" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">10</text>
    <text x="109" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">20</text>
    <text x="126" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">25</text>
    <text x="143" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">30</text>
    <text x="176" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">40</text>
    <text x="210" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">50</text>
    <text x="126" y="333" fill="#94a3b8" font-size="8" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Equivalence at pH≈8.87 → y=310-(8.87/14)*270=310-170.9=139.1≈139 -->
    <line x1="42" y1="139" x2="126" y2="139" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="139" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <!-- CURVE: Weak Acid/Strong Base. Starts pH≈2.87 (buffer region is flatter) -->
    <!-- vol=0,pH=2.87 → y=310-(2.87/14)*270=254.7≈255 -->
    <!-- vol=12.5,pH=4.76(pKa) → x=42+(12.5/50)*168=84, y=310-(4.76/14)*270=218.1≈218 -->
    <!-- vol=20,pH=5.4 → x=109, y=310-(5.4/14)*270=206.0≈206 -->
    <!-- vol=24,pH=6.2 → x=122.6, y=310-(6.2/14)*270=190.5≈191 -->
    <!-- vol=25,pH=8.87 → x=126, y=139 -->
    <!-- vol=26,pH=11.3 → x=129.4, y=310-(11.3/14)*270=92.3≈92 -->
    <!-- vol=30,pH=11.96 → x=143, y=310-(11.96/14)*270=79.5≈80 -->
    <!-- vol=50,pH=12.5 → x=210, y=310-(12.5/14)*270=69.4≈69 -->
    <path d="M 42,255 C 76,240 109,211 122,191 C 124,179 125,160 126,139 C 127,118 128,92 130,84 C 137,76 176,70 210,69" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="139" r="4" fill="#ef4444"/>
    <text x="132" y="137" fill="#ef4444" font-size="8" font-weight="bold">pH &gt; 7</text>

    <text x="114" y="348" fill="#34d399" font-size="9.5" text-anchor="middle" font-weight="600">Vertical section: pH 7 → 11</text>
  </g>

  <!-- ===== PANEL 4: Weak Acid / Weak Base ===== -->
  <g transform="translate(739, 38)">
    <rect x="0" y="0" width="228" height="355" rx="8" fill="#0f172a" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>
    <text x="114" y="20" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">Weak Acid / Weak Base</text>

    <line x1="42" y1="310" x2="210" y2="310" stroke="#64748b" stroke-width="1.5"/>
    <line x1="42" y1="310" x2="42" y2="40" stroke="#64748b" stroke-width="1.5"/>

    <text x="38" y="313" fill="#94a3b8" font-size="7" text-anchor="end">0</text>
    <text x="38" y="275" fill="#94a3b8" font-size="7" text-anchor="end">2</text>
    <text x="38" y="236" fill="#94a3b8" font-size="7" text-anchor="end">4</text>
    <text x="38" y="194" fill="#94a3b8" font-size="7" text-anchor="end">6</text>
    <text x="38" y="175" fill="#94a3b8" font-size="7" text-anchor="end">7</text>
    <text x="38" y="156" fill="#94a3b8" font-size="7" text-anchor="end">8</text>
    <text x="38" y="117" fill="#94a3b8" font-size="7" text-anchor="end">10</text>
    <text x="38" y="78" fill="#94a3b8" font-size="7" text-anchor="end">12</text>
    <text x="38" y="43" fill="#94a3b8" font-size="7" text-anchor="end">14</text>
    <text x="12" y="175" fill="#94a3b8" font-size="9" text-anchor="middle" transform="rotate(-90,12,175)">pH</text>

    <text x="42" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">0</text>
    <text x="76" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">10</text>
    <text x="109" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">20</text>
    <text x="126" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">25</text>
    <text x="143" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">30</text>
    <text x="176" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">40</text>
    <text x="210" y="321" fill="#94a3b8" font-size="7" text-anchor="middle">50</text>
    <text x="126" y="333" fill="#94a3b8" font-size="8" text-anchor="middle">Vol / cm³</text>

    <line x1="42" y1="175" x2="210" y2="175" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>
    <line x1="126" y1="310" x2="126" y2="40" stroke="#334155" stroke-width="0.8" stroke-dasharray="3 3"/>

    <!-- Inflection near pH=7 → x=126, y=175 (dashed, not a true sharp equivalence) -->
    <line x1="42" y1="175" x2="126" y2="175" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>
    <line x1="126" y1="175" x2="126" y2="310" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 2.5"/>

    <!-- CURVE: Weak Acid/Weak Base. Gradual S, no sharp section -->
    <!-- vol=0,pH=2.87 → y=255 -->
    <!-- vol=25,pH=7.0 → x=126, y=175 (gentle inflection) -->
    <!-- vol=50,pH=9.5 → x=210, y=310-(9.5/14)*270=127.1≈127 -->
    <path d="M 42,255 C 76,242 109,217 126,175 C 143,133 176,128 210,127" fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="126" cy="175" r="4" fill="#ef4444"/>
    <text x="132" y="172" fill="#ef4444" font-size="8" font-weight="bold">Inflection ~7</text>

    <text x="114" y="348" fill="#f43f5e" font-size="9.5" text-anchor="middle" font-weight="bold">No Vertical Section!</text>
  </g>
</svg>`;



export const parts: LessonPart[] = [
  {
    id: 'bronsted-lowry-ph-u4-l4',
    title: 'Brønsted-Lowry Theory & pH',
    type: 'text',
    content: `
${svgToken(protonTransferSvg)}

> [!NOTE]
> ### 🧪 Brønsted-Lowry Acid-Base Theory
> Johannes Nicolaus Brønsted and Thomas Martin Lowry independently proposed a theory defining acids and bases by how they react with each other:
> 
> * **Brønsted-Lowry Acid:** A substance that can donate a proton — a **proton donor** (hydrogen ion, $\\text{H}^+$)
>   * *Example:* The ammonium ion ($\\text{NH}_4^+$) acts as a proton donor.
> * **Brønsted-Lowry Base:** A substance that can accept a proton — a **proton acceptor**
>   * *Examples:* The hydroxide ion ($\\text{OH}^-$), acetate ion ($\\text{CH}_3\\text{COO}^-$), carbonate ion ($\\text{CO}_3^{2-}$), and phosphate ion ($\\text{PO}_4^{3-}$) act as proton acceptors.
> * **Proton Transfer:** Acid-base reactions involve the transfer of a proton from an acid to a base.
> * **Lone Pairs:** To accept a proton, a base must contain an atom with a lone pair of electrons to form a dative covalent bond with the incoming proton.

> [!IMPORTANT]
> ### 👥 Conjugate Acid-Base Pairs
> A conjugate pair consists of two species that differ by exactly one proton.
> When a Brønsted-Lowry acid donates a proton, it forms a species that can accept a proton in the reverse reaction. This species is called its **conjugate base**.
> Similarly, when a base accepts a proton, it forms its **conjugate acid**.
> 
> **Example 1: Ethanoic acid in water**
> $$\\text{CH}_3\\text{COOH(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{CH}_3\\text{COO}^-\\text{(aq)} + \\text{H}_3\\text{O}^+\\text{(aq)}$$
> * **Acid 1:** $\\text{CH}_3\\text{COOH}$ (Ethanoic acid) — The species that donates the proton.
> * **Base 1:** $\\text{CH}_3\\text{COO}^-$ (Ethanoate ion) — The conjugate base formed after the acid donates its proton.
> * **Base 2 / Acid 2:** In aqueous solution, the free proton $\\text{H}^+\\text{(aq)}$ reacts with the solvent water $\\text{H}_2\\text{O(l)}$. Thus, water acts as **Base 2** and the resulting hydronium ion $\\text{H}_3\\text{O}^+$ acts as **Acid 2**
> 
> **Example 2: Ammonia in water**
> $$\\text{NH₃(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{NH₄}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> * **Forward Reaction:** $\\text{H₂O}$ donates a proton to $\\text{NH₃}$, so $\\text{H₂O}$ is the acid and $\\text{NH₃}$ is the base.
> * **Reverse Reaction:** $\\text{NH₄}^+$ donates a proton to $\\text{OH}^-$, so $\\text{NH₄}^+$ is the conjugate acid and $\\text{OH}^-$ is the conjugate base.
> * **Pairs:** Conjugate pair 1 is $\\text{NH₄}^+$ / $\\text{NH₃}$; Conjugate pair 2 is $\\text{H₂O}$ / $\\text{OH}^-$

> [!BOX]
> ### 🌀 Amphiprotic vs Amphoteric
> Some substances can act as both acids and bases:
> 
> * **Amphoteric:** Any substance that can react as both an acid and a base (e.g., aluminium oxide $\\text{Al₂O₃}$ reacts with both acids and bases, though it does not transfer protons in all cases)
> * **Amphiprotic:** A substance that can *both* donate and accept protons (e.g., water $\\text{H₂O}$, hydrogen carbonate $\\text{HCO₃}^-$, and hydrogen sulfate $\\text{HSO₄}^-$)
> * **Key Rule:** All amphiprotic substances are amphoteric, but not all amphoteric substances are amphiprotic.

> [!IMPORTANT]
> ### 🧮 Acid-Base Proticity (Monoprotic vs Polyprotic)
> * **Monoprotic (Monobasic) Acids:** Can donate only one proton per molecule (e.g., $\\text{HCl}$, $\\text{HNO₃}$)
> * **Diprotic (Dibasic) Acids:** Can donate two protons per molecule, dissociating in two sequential steps (e.g., sulfuric acid, $\\text{H₂SO₄}$):
>   * **Step 1:** $\\text{H₂SO₄(aq)} \\rightarrow \\text{H}^+\\text{(aq)} + \\text{HSO₄}^-\\text{(aq)}$ (Fully dissociated)
>   * **Step 2:** $\\text{HSO₄}^-\\text{(aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{SO₄}^{2-}\\text{(aq)}$ (Partially dissociated)
> * **Diprotic (Diacidic) Bases:** Can accept up to two protons per formula unit (e.g., carbonate ion, $\\text{CO₃}^{2-}$):
>   * **Step 1:** $\\text{CO₃}^{2-}\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{HCO₃}^-\\text{(aq)}$
>   * **Step 2:** $\\text{HCO₃}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightleftharpoons \\text{H₂CO₃(aq)}$

> [!BOX]
> ### 🧪 Nitric Acid as a Base (The Nitrating Mixture)
> In organic chemistry, benzene undergoes nitration using a mixture of concentrated sulfuric acid and concentrated nitric acid. In this mixture:
> $$\\text{H₂SO₄} + \\text{HNO₃} \\rightleftharpoons \\text{HSO₄}^- + \\text{H₂NO₃}^+$$
> 
> * **Acid 1:** $\\text{H₂SO₄}$ (acts as an acid because it donates a proton to nitric acid)
> * **Base 2:** Concentrated nitric acid, $\\text{HNO₃}$
> * **Conjugate Base 1:** $\\text{HSO₄}^-$
> * **Conjugate Acid 2:** $\\text{H₂NO₃}^+$ (which subsequently dissociates to form the $\\text{NO₂}^+$ electrophile)

> [!IMPORTANT]
> ### 🧮 Strong vs Weak Acids & The pH Scale
> * **Strong Acids:** Almost completely dissociated in aqueous solution:
>   $$\\\\text{HCl(aq)} \\\\rightarrow \\\\text{H}^+\\\\text{aq} + \\\\text{Cl}^-\\\\text{aq}$$
>   * For strong acids like $\\\\text{HCl}$, $[\\\\text{H}^+] = [\\\\text{HCl}]$
> * **Weak Acids:** Only partially dissociated (typically less than 10%) in aqueous solution:
>   $$\\\\text{CH₃COOH(aq)} \\\\rightleftharpoons \\\\text{CH₃COO}^-\\\\text{aq} + \\\\text{H}^+\\\\text{aq}$$
> * **The pH Formulas:**
>   $$\\\\text{pH} = -\\\\log_{10}[\\\\text{H}^+] \\\\quad \\\\Leftrightarrow \\\\quad [\\\\text{H}^+] = 10^{-\\\\text{pH}}$$
> * **The pOH Relationship:**
>   $$\\\\text{pOH} = -\\\\log_{10}[\\\\text{OH}^-] \\\\quad \\\\Leftrightarrow \\\\quad [\\\\text{OH}^-] = 10^{-\\\\text{pOH}}$$
>   * At $298\\\\text{ K}$, the relationship is: $\\\\text{pH} + \\\\text{pOH} = 14$
> * **Strong Bases Concentration Relation:**
>   * E.g., for a strong dibasic base like $\\\\text{Mg(OH)₂}$, each mole yields two moles of hydroxide ions:
>     $$[\\\\text{OH}^-] = 2 \\\\times [\\\\text{Mg(OH)₂}]$$

> [!BOX]
> ### 🌡️ The Ionic Product of Water ($K_w$)
> Water self-ionises:
> $$\\text{H₂O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$
> $$K_w = [\\text{H}^+\\text{(aq)}][\\text{OH}^-\\text{(aq)}]$$
> 
> * **At 298 K:** $K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$, giving neutral $\\text{pH} = 7.00$
> * **$pK_w$ relation:** $\\text{p}K_w = -\\log_{10}K_w = 14.00\\text{ (at } 298\\text{ K)}$
> 
> #### Table B: Values of Kw and pKw at Various Temperatures
> | Temperature (T / K) | Kw / mol² dm⁻⁶ | pKw | Neutral pH |
> | :--- | :--- | :--- | :--- |
> | 273 K | $1.14 \\times 10^{-15}$ | $14.94$ | $7.47$ |
> | 283 K | $2.93 \\times 10^{-15}$ | $14.53$ | $7.27$ |
> | 288 K | $4.52 \\times 10^{-15}$ | $14.34$ | $7.17$ |
> | 293 K | $6.81 \\times 10^{-15}$ | $14.17$ | $7.08$ |
> | 298 K | $1.00 \\times 10^{-14}$ | $14.00$ | $7.00$ |
> | 303 K | $1.47 \\times 10^{-14}$ | $13.83$ | $6.92$ |
> | 308 K | $2.31 \\times 10^{-14}$ | $13.68$ | $6.84$ |
> | 313 K | $2.92 \\times 10^{-14}$ | $13.53$ | $6.77$ |
> 
> * **Physical meaning:** Since water self-ionisation is an **endothermic** process, increasing temperature shifts the equilibrium to the right, raising $K_w$ and yielding a higher concentration of both $\\text{H}^+$ and $\\text{OH}^-$ ions. Thus, neutral water at higher temperatures has a pH **less than 7.00**

> [!BOX]
> ### 🔬 pH and Activity & Concentrated Acids
> * **pH and Activity:** In concentrated acid solutions, effective concentration (activity) is lower than actual concentration due to ion interactions. E.g., $1.00\\text{ mol dm}^{-3}$ HCl has active $[\\text{H}^+] = 0.81\\text{ mol dm}^{-3}$ (pH = 0.09)
> * Concentrated acids can have negative pH (e.g., pH of $-0.74$ for $10.00\\text{ mol dm}^{-3}$ HCl that is 55% dissociated)

> [!EXAMPLE]
> #### 📝 Worked Example 1: pH of a Strong Base
> **Question:** Calculate pH of $0.0500\\text{ mol dm}^{-3}$ KOH at $298\\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{OH}^-] = 0.0500\\text{ mol dm}^{-3}$
> > 2. $[\\text{H}^+] = \\frac{K_w}{[\\text{OH}^-]} = \\frac{1.00 \\times 10^{-14}}{0.0500} = 2.00 \\times 10^{-13}\\text{ mol dm}^{-3}$
> > 3. $\\text{pH} = -\\log(2.00 \\times 10^{-13}) = 12.70$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Conjugate Acids
> **Question:** Give the formula of the conjugate acid of:
> * (a) $\\text{CH₃COO}^-$
> * (b) $\\text{CH₃NH₂}$
> * (c) $\\text{HSO₄}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{CH₃COO}^- + \\text{H}^+ \\rightarrow \\text{CH₃COOH}$ (Adding $\\text{H}^+$ to the acetate/ethanoate ion forms ethanoic/acetic acid)
> > * (b) $\\text{CH₃NH₂} + \\text{H}^+ \\rightarrow \\text{CH₃NH₃}^+$ (Adding $\\text{H}^+$ to methylamine forms the methylammonium ion)
> > * (c) $\\text{HSO₄}^- + \\text{H}^+ \\rightarrow \\text{H₂SO₄}$ (Adding $\\text{H}^+$ to hydrogen sulfate forms sulfuric acid)

> [!EXAMPLE]
> #### 📝 Worked Example 3: Conjugate Bases
> **Question:** Give conjugate base of:
> * (a) $\\text{HClO₄}$
> * (b) $\\text{H₃O}^+$
> * (c) $\\text{HSO₄}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\text{ClO₄}^-$ (Removing $\\text{H}^+$ from perchloric acid forms the perchlorate ion)
> > * (b) $\\text{H₂O}$ (Removing $\\text{H}^+$ from the hydronium ion leaves water)
> > * (c) $\\text{SO₄}^{2-}$ (Removing $\\text{H}^+$ from hydrogen sulfate forms the sulfate ion)

> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Conjugate Pairs
> **Question:** Identify the conjugate acid-base pairs and the species acting as Brønsted-Lowry acids in the forward and reverse directions:
> * (a) $\\text{H₂CO₃} + \\text{H₂O} \\rightleftharpoons \\text{HCO₃}^- + \\text{H₃O}^+$
> * (b) $\\text{HCO₃}^- + \\text{H₂O} \\rightleftharpoons \\text{CO₃}^{2-} + \\text{H₃O}^+$
> * (c) $\\text{CH₃COOH} + \\text{HNO₃} \\rightleftharpoons \\text{CH₃COOH₂}^+ + \\text{NO₃}^-$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a)** Conjugate pairs: ($\\text{H₂CO₃}$ / $\\text{HCO₃}^-$) and ($\\text{H₃O}^+$ / $\\text{H₂O}$)
> >   * Brønsted-Lowry Acids: $\\text{H₂CO₃}$ (forward) and $\\text{H₃O}^+$ (reverse)
> > * **(b)** Conjugate pairs: ($\\text{HCO₃}^-$ / $\\text{CO₃}^{2-}$) and ($\\text{H₃O}^+$ / $\\text{H₂O}$)
> >   * Brønsted-Lowry Acids: $\\text{HCO₃}^-$ (forward) and $\\text{H₃O}^+$ (reverse)
> > * **(c)** Conjugate pairs: ($\\text{HNO₃}$ / $\\text{NO₃}^-$) and ($\\text{CH₃COOH₂}^+$ / $\\text{CH₃COOH}$)
> >   * Brønsted-Lowry Acids: $\\text{HNO₃}$ (forward) and $\\text{CH₃COOH₂}^+$ (reverse)

> [!EXAMPLE]
> #### 📝 Worked Example 5: Explaining Acid-Base Reactions
> **Question:** Explain why the reaction $\\text{NH₄}^+ + \\text{NH₂}^- \\rightarrow 2\\text{NH₃}$ may be described as a Brønsted-Lowry acid-base reaction.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Proton Transfer:** It involves a proton ($\\text{H}^+$) transfer.
> > 2. **Ammonium Ion:** $\\text{NH₄}^+$ acts as the acid by donating a proton to $\\text{NH₂}^-$
> > 3. **Amide Ion:** $\\text{NH₂}^-$ acts as the base by accepting the proton, producing two molecules of ammonia ($\\text{NH₃}$)

> [!EXAMPLE]
> #### 📝 Worked Example 6: pH of Strong Monobasic Acids (A)
> **Question:** Calculate the pH of:
> * (a) $0.00100\\text{ mol dm}^{-3}$ HCl
> * (b) $0.0500\\text{ mol dm}^{-3}$ $\\text{HNO₃}$
> * (c) $0.150\\text{ mol dm}^{-3}$ HBr
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) Since HCl fully dissociates, $[\\text{H}^+] = 0.00100\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.00100) = 3.00$
> > * (b) Since $\\text{HNO₃}$ fully dissociates, $[\\text{H}^+] = 0.0500\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.0500) = 1.30$
> > * (c) Since HBr fully dissociates, $[\\text{H}^+] = 0.150\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.150) = 0.82$

> [!EXAMPLE]
> #### 📝 Worked Example 7: pH of Strong Monoprotic Acids (B) (Checkpoint Q1)
> **Question:** Calculate the pH of:
> * (a) $0.0100\\\\text{ mol dm}^{-3}$ HI
> * (b) $0.500\\\\text{ mol dm}^{-3}$ $\\\\text{HNO₃}$
> * (c) $0.00405\\\\text{ mol dm}^{-3}$ HCl
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * (a) $\\\\text{pH} = -\\\\log_{10}(0.0100) = 2.00$
> > * (b) $\\\\text{pH} = -\\\\log_{10}(0.500) = 0.30$
> > * (c) $\\\\text{pH} = -\\\\log_{10}(0.00405) = 2.39$

> [!EXAMPLE]
> #### 📝 Worked Example 8: pH of Concentrated Partially Dissociated Acid
> **Question:** Calculate pH of $10.00\\text{ mol dm}^{-3}$ HCl, 55% dissociated
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 0.55 \\times 10.00 = 5.50\\text{ mol dm}^{-3}$
> > 2. $\\text{pH} = -\\log(5.50) = -0.74$

> [!EXAMPLE]
> #### 📝 Worked Example 9: Calculating [H⁺] from pH
> **Question:** Calculate $[\\text{H}^+]$ for solution of pH 4.80
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 10^{-4.80} = 1.58 \\times 10^{-5}\\text{ mol dm}^{-3}$

> [!EXAMPLE]
> #### 📝 Worked Example 10: pH of a Mixture of Strong Acid and Base (Checkpoint Q2)
> **Question:** Calculate pH of mixture of $20.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ HCl and $5.0\\text{ cm}^3$ of $1.00\\text{ mol dm}^{-3}$ NaOH
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $\\text{Moles H}^+ = 1.00 \\times 0.0200 = 0.0200\\text{ mol}$, moles $\\text{OH}^- = 1.00 \\times 0.0050 = 0.0050\\text{ mol}$
> > 2. $\\text{Excess H}^+ = 0.0200 - 0.0050 = 0.0150\\text{ mol}$
> > 3. $\\text{Total Volume} = 20.0 + 5.0 = 25.0\\text{ cm}^3 = 0.0250\\text{ dm}^3$
> > 4. $[\\text{H}^+] = \\frac{0.0150}{0.0250} = 0.600\\text{ mol dm}^{-3} \\implies \\text{pH} = -\\log_{10}(0.600) = 0.22$

> [!IMPORTANT]
> ### 🧮 Calculating the pH of a Dibasic Acid
> Sulfuric acid ($\text{H₂SO₄}$) dissociates:
> * $\text{Stage 1: H₂SO₄(aq)} \rightarrow \text{H}^+\text{(aq)} + \text{HSO₄}^-\text{(aq)}$ (100% dissociated)
> * $\text{Stage 2: HSO₄}^-\text{(aq)} \rightleftharpoons \text{H}^+\text{(aq)} + \text{SO₄}^{2-}\text{(aq)}$ ($K_a = 0.0100\text{ mol dm}^{-3}$)
> 
> For a $0.500\text{ mol dm}^{-3}$ solution of $\text{H₂SO₄}$:
> 1. Stage 1 yields $[\text{H}^+] = 0.500\text{ mol dm}^{-3}$ and $[\text{HSO₄}^-] = 0.500\text{ mol dm}^{-3}$
> 2. Let $x$ be the Stage 2 $\text{H}^+$ concentration:
>    $$K_a = \frac{(0.500 + x)x}{0.500 - x} = 0.0100$$
> 3. Solving the quadratic gives $x = 0.0098\text{ mol dm}^{-3}$
> 4. Total $[\text{H}^+] = 0.5098\text{ mol dm}^{-3} \implies \text{pH} = -\log(0.5098) = 0.293$

> [!EXAMPLE]
> #### 📝 Worked Example 11: pH of Water at Different Temperatures (Checkpoint Q1)
> **Question:** Calculate water pH at (i) $298\text{ K}$ and (ii) $293\text{ K}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(i) At $298\text{ K}$:** $[\text{H}^+] = 1.00 \times 10^{-7}\text{ mol dm}^{-3} \implies \text{pH} = 7.00$
> > * **(ii) At $293\text{ K}$:** $[\text{H}^+] = \sqrt{6.81 \times 10^{-15}} = 8.252 \times 10^{-8}\text{ mol dm}^{-3} \implies \text{pH} = 7.08$
> > * **Neutrality:** Since $[\text{H}^+] = [\text{OH}^-]$ holds true at all temperatures in pure water, it remains neutral.
> > * **Endothermic nature:** Heating water from $293\text{ K}$ to $298\text{ K}$ increases $K_w$. According to Le Chatelier's Principle, this shifts the equilibrium to the endothermic direction. Hence, self-ionisation is endothermic.

> [!EXAMPLE]
> #### 📝 Worked Example 12: pH of Strong Bases (Checkpoint Q2)
> **Question:** Calculate the pH at $298\text{ K}$ of: (a) $0.0100$ NaOH, (b) $0.0500$ Ca(OH)2, (c) $0.0315$ KOH
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) NaOH:** $[\text{OH}^-] = 0.0100 \implies \text{pOH} = 2.00 \implies \text{pH} = 12.00$
> > * **(b) $\text{Ca(OH)₂}$:** Releases 2 moles of hydroxide: $[\text{OH}^-] = 0.100 \implies \text{pOH} = 1.00 \implies \text{pH} = 13.00$
> > * **(c) KOH:** $[\text{OH}^-] = 0.0315 \implies \text{pOH} = 1.50 \implies \text{pH} = 12.50$
`,
    keyPoints: [
      'A Brønsted-Lowry acid is a proton donor; a base is a proton acceptor.',
      'Conjugate acid-base pairs differ by exactly one H⁺ ion.',
      'Amphiprotic substances can both donate and accept protons.',
      'Strong acids dissociate fully, whereas weak acids dissociate partially.'
    ],
    equationVisualizer: {
      reactants: [['HCl', '#3b82f6'], ['H₂O', '#10b981']],
      products: [['H₃O⁺', '#ef4444'], ['Cl⁻', '#f59e0b']],
      description: "Proton transfer from hydrochloric acid to water to form hydronium and chloride ions."
    }
  },
  {
    id: 'weak-acids-ka-pka-u4-l4',
    title: 'Weak Acids, Ka & pKa',
    type: 'text',
    content: `
> [!NOTE]
> ### 🧪 Strong vs. Weak Electrolytes
> * **Strong Electrolytes:** Dissociate fully in aqueous solution.
>   * *Examples:* Fully dissociated ions from strong acids/bases, such as the hydroxide ion ($\\\\text{OH}^-$), chloride ion ($\\\\text{Cl}^-$), and nitrate ion ($\\\\text{NO}_3^-$)
> * **Weak Electrolytes:** Dissociate only partially in aqueous solution, establishing an equilibrium.
>   * *Example:* Ethanoic acid ($\\\\text{CH}_3\\\\text{COOH}$). In a $0.1\\\\text{ mol dm}^{-3}$ solution, only approximately 1% of the molecules are present as ions.
 
> [!IMPORTANT]
> ### 🧮 Derivation of the Acid Dissociation Constant ($K_a$)
> For a weak acid dissociation in water:
> $$\\\\text{HA(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{A}^-\\\\text{(aq)} + \\\\text{H}_3\\\\text{O}^+\\\\text{(aq)}$$
> 
> The initial equilibrium expression ($K_c$) is:
> $$K_c = \\\\frac{[\\\\text{H}_3\\\\text{O}^+][\\\\text{A}^-]}{[\\\\text{HA}][\\\\text{H}_2\\\\text{O}]}$$
> 
> Since the concentration of water is vast ($\\\\approx 55.6\\\\text{ mol dm}^{-3}$) and remains effectively constant, it is incorporated into the equilibrium constant ($K_a = K_c \\\\times [\\\\text{H}_2\\\\text{O}]$):
> $$K_a = \\\\frac{[\\\\text{H}_3\\\\text{O}^+][\\\\text{A}^-]}{[\\\\text{HA}]}$$
> 
> * **pKa and Acid Strength:**
>   $$\\\\text{p}K_a = -\\\\log_{10}K_a \\\\quad \\\\Leftrightarrow \\\\quad K_a = 10^{-\\\\text{p}K_a}$$
>   * A larger $K_a$ value indicates a stronger acid (greater dissociation).
>   * Conversely, a smaller $\\\\text{p}K_a$ value indicates a stronger acid.
 
> [!IMPORTANT]
> ### 🧮 Weak Acid Calculation Assumptions
> To calculate the pH of a weak acid HA of initial concentration $c$, we make two key simplifying assumptions:
> 
> 1. **Negligible water contribution:** We assume all H⁺ ions come solely from HA (the auto-ionisation of water is negligible), so:
>    $$[\\\\text{H}^+] \\\\approx [\\\\text{A}^-]$$ (at equilibrium)
> 2. **Negligible dissociation:** We assume the amount of HA that dissociates is extremely small compared to the initial concentration (undissociated HA is effectively unchanged), so:
>    $$[\\\\text{HA}] \\\\approx c$$ (at equilibrium)
> 
> Combining these into the $K_a$ expression gives:
> $$K_a = \\\\frac{[\\\\text{H}^+]^2}{c} \\\\implies [\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$$

> [!BOX]
> ### 📊 Table A: Weak Monobasic Organic Acids (at 298 K)
> | Name of Acid | Formula of Acid | Ka / mol dm⁻³ | pKa |
> | :--- | :--- | :--- | :--- |
> | propanoic acid | CH₃CH₂COOH | 1.35 × 10⁻⁵ | 4.87 |
> | ethanoic acid | CH₃COOH | 1.74 × 10⁻⁵ | 4.76 |
> | benzoic acid | C₆H₅COOH | 6.31 × 10⁻⁵ | 4.20 |
> | methanoic acid | HCOOH | 1.60 × 10⁻⁴ | 3.80 |
> | chloroethanoic acid | CH₂ClCOOH | 1.38 × 10⁻³ | 2.86 |
> | dichloroethanoic acid | CHCl₂COOH | 5.13 × 10⁻² | 1.29 |
> | trichloroethanoic acid | CCl₃COOH | 2.24 × 10⁻¹ | 0.65 |

> [!BOX]
> ### 📊 Comparing Solutions via pH
> Measuring pH of equimolar ($0.100\\\\text{ mol dm}^{-3}$) solutions at $298\\\\text{ K}$ demonstrates relative strengths of acids, bases, and salts:
> 
> **Acid Strengths:**
> * $\\\\text{HCl}$ (strong, pH = 1.00) $\\\\rightarrow$ $\\\\text{CHCl₂COOH}$ (pH = 1.14) $\\\\rightarrow$ $\\\\text{CH₂ClCOOH}$ (pH = 1.93) $\\\\rightarrow$ $\\\\text{HCOOH}$ (pH = 2.38) $\\\\rightarrow$ $\\\\text{CH₃COOH}$ (pH = 2.87) $\\\\rightarrow$ $\\\\text{CH₃CH₂COOH}$ (pH = 2.93)
> * **Rule:** The higher the pH, the weaker the acid.
> 
> **Base Strengths:**
> * $\\\\text{NH₃}$ (weak base, pH = 11.13) $\\\\rightarrow$ $\\\\text{CH₃NH₂}$ (pH = 11.82) $\\\\rightarrow$ $\\\\text{NaOH}$ (strong base, pH = 13.00)
> * **Rule:** The higher the pH, the stronger the base.

> [!IMPORTANT]
> ### 📋 Salt Hydrolysis
> Salts formed from weak acids or weak bases are not neutral because their ions react with water. The pH of an aqueous salt solution ($0.100\\\\text{ mol dm}^{-3}$) at $298\\\\text{ K}$ depends on the acid-base nature of its parent species:
> 
> * **Strong Acid + Strong Base (Neutral, pH = 7.00):** E.g., \\\\text{NaCl}, \\\\text{KNO₃}. Neither ion hydrolyses water.
> * **Weak Acid + Strong Base (Alkaline, pH > 7):** Conjugate base hydrolyses water.
>   * *Acetate Hydrolysis:* The acetate ion reacts with water to produce hydroxide ($\\\\text{OH}^-$) ions:
>     $$\\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{COOH(aq)} + \\\\text{OH}^-\\\\text{(aq)}$$
> * **Strong Acid + Weak Base (Acidic, pH < 7):** Conjugate acid hydrolyses water.
>   * *Ammonium Hydrolysis:* The ammonium ion reacts with water to produce hydronium ($\\\\text{H}_3\\\\text{O}^+$) ions:
>     $$\\\\text{NH}_{4}^+\\\\text{(aq)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightleftharpoons \\\\text{NH}_{3}\\\\text{(> ### 📉 Effect of Dilution on pH
> * **Strong Acids:** pH increases by exactly **1.0 unit** for each 10-fold dilution (e.g. $0.100\\\\text{ mol dm}^{-3}$ HCl pH = 1.00; diluted to $0.0100$ pH = 2.00)
>   * *Dilution Limit:* A $1.00 \\\\times 10^{-8}\\\\text{ mol dm}^{-3}$ solution of HCl is not pH 8.00. Water self-ionisation contributes $1.00 \\\\times 10^{-7}\\\\text{ mol dm}^{-3}$ $\\\\text{H}^+$, keeping pH close to 7.00 ($\\\\approx 6.98$)
> * **Weak Acids:** pH increases by approximately **0.5 units** for each 10-fold dilution (e.g. $0.100\\\\text{ mol dm}^{-3}$ ethanoic acid pH = 2.88; diluted to $0.0100$ pH = 3.38)
>   * *Proof:* Since $[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times c}$, dividing $c$ by 10 divides $[\\\\text{H}^+]$ by $\\\\sqrt{10}$. Taking negative logarithms: $\\\\log_{10}(\\\\sqrt{10}) = 0.5$ units.
 
> [!BOX]
> ### 🧪 Core Practical 11 (CP11): Finding Experimental Ka
> We can determine $K_a$ by dissolving benzoic acid in water, diluting to $250\\\\text{ cm}^3$, and measuring pH:
> 
> * **Sample Results:**
>   * Mass of benzoic acid = $0.49\\\\text{ g}$
>   * pH of $250\\\\text{ cm}^3$ solution = $3.00$
> * **Analysis of Results:**
>   1. Molar mass of benzoic acid = $122\\\\text{ g mol}^{-1}$
>   2. Moles of acid = $\\\\frac{0.49}{122} = 4.016 \\\\times 10^{-3}\\\\text{ mol}$
>   3. Concentration $c = \\\\frac{4.016 \\\\times 10^{-3}}{0.250} = 1.607 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$
>   4. $[\\\\text{H}^+] = 10^{-3.00} = 1.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
>   5. $K_a = \\\\frac{[\\\\text{H}^+]^2}{c} = 6.22 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
 
> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Ka of a Weak Acid from pH
> **Question:** The pH of an aqueous solution of a weak acid, $\\\\text{HA}$, of concentration $0.0305\\\\text{ mol dm}^{-3}$ is $4.97$. Calculate the dissociation constant, $K_a$, for this weak acid
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\\\text{H}^+]$ from pH:**
> >    $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-4.97} = 1.0715 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$$
> > 2. **Use the weak acid expression:**
> >    $$K_a = \\\\frac{[\\\\text{H}^+]^2}{[\\\\text{HA}]} = \\\\frac{(1.0715 \\\\times 10^{-5})^2}{0.0305} = 3.76 \\\\times 10^{-9}\\\\text{ mol dm}^{-3}$$
 
> [!EXAMPLE]
> #### 📝 Worked Example 2: pH of Weak Monobasic Acids
> **Question:** Calculate the pH of each of the following aqueous solutions of weak monobasic acids. Give your answers to two decimal places:
> (a) $0.100\\\\text{ mol dm}^{-3}$ $\\\\text{HCOOH}$ [$K_a(\\\\text{HCOOH}) = 1.60 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$]
> (b) $1.00\\\\text{ mol dm}^{-3}$ $\\\\text{HF}$ [$K_a(\\\\text{HF}) = 5.62 \\\\times 10^{-4}\\\\text{ mol dm}^{-3}$]
> (c) $0.505\\\\text{ mol dm}^{-3}$ $\\\\text{NH}_4\\\\text{Cl}$ [$K_a(\\\\text{NH}_4^+) = 5.62 \\\\times 10^{-10}\\\\text{ mol dm}^{-3}$]
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) HCOOH:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{K_a \\\\times [\\\\text{HA}]} = \\\\sqrt{(1.60 \\\\times 10^{-4}) \\\\times 0.100} = 4.00 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(4.00 \\\\times 10^{-3}) = 2.40$
> > * **(b) HF:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{(5.62 \\\\times 10^{-4}) \\\\times 1.00} = 2.37 \\\\times 10^{-2}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(2.37 \\\\times 10^{-2}) = 1.63$
> > * **(c) $\\\\text{NH}_4\\\\text{Cl}$:**
> >   1. $[\\\\text{H}^+] = \\\\sqrt{(5.62 \\\\times 10^{-10}) \\\\times 0.505} = 1.685 \\\\times 10^{-5}\\\\text{ mol dm}^{-3}$
> >   2. $\\\\text{pH} = -\\\\log_{10}(1.685 \\\\times 10^{-5}) = 4.77$
 
> [!EXAMPLE]
> #### 📝 Worked Example 3: Salt Hydrolysis Prediction
> **Question:** Predict whether aqueous solutions of the following salts will be neutral, acidic, or alkaline. Justify your answers:
> (a) Ammonium nitrate, $\\\\text{NH}_4\\\\text{NO}_3$
> (b) Potassium propanoate, $\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOK}$
> (c) Sodium nitrate, $\\\\text{NaNO}_3$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > * **(a) Ammonium nitrate ($\\\\text{NH}_4\\\\text{NO}_3$): Acidic**
> >   * Justification: It is formed from a weak base ($\\\\text{NH}_3$) and a strong acid ($\\\\text{HNO}_3$). The cation $\\\\text{NH}_4^+$ undergoes hydrolysis to produce hydrogen ions ($\\\\text{NH}_4^+ \\\\rightleftharpoons \\\\text{NH}_3 + \\\\text{H}^+$), while $\\\\text{NO}_3^-$ is a spectator ion.
> > * **(b) Potassium propanoate ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOK}$): Alkaline**
> >   * Justification: It is formed from a strong base ($\\\\text{KOH}$) and a weak acid ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COOH}$). The anion $\\\\text{CH}_3\\\\text{CH}_2\\\\text{COO}^-$ hydrolyses to produce hydroxide ions ($\\\\text{CH}_3\\\\text{CH}_2\\\\text{COO}^- + \\\\text{H}_2\\\\text{O} \\\\rightleftharpoons \\\\text{CH}_3\\\\text{CH}_2\\\\text{COOH} + \\\\text{OH}^-$), while $\\\\text{K}^+$ is a spectator ion.
> > * **(c) Sodium nitrate ($\\\\text{NaNO}_3$): Neutral**
> >   * Justification: It is formed from a strong base ($\\\\text{NaOH}$) and a strong acid ($\\\\text{HNO}_3$). Neither ion ($\\\\text{Na}^+$ or $\\\\text{NO}_3^-$) undergoes hydrolysis.
 
> [!EXAMPLE]
> #### 📝 Worked Example 4: Experimental Ka of Chloroethanoic Acid
> **Question:** Calculate $K_a$ for chloroethanoic acid from the following data. $1.89\\\\text{ g}$ of chloroethanoic acid was dissolved in $50\\\\text{ cm}^3$ of water and the solution was diluted to $250\\\\text{ cm}^3$ in a volumetric flask. The pH of this solution was $1.99$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate molar mass of chloroethanoic acid ($\\\\text{CH}_2\\\\text{ClCOOH}$):**
> >    $$M_r = 12.01 \\\\times 2 + 1.01 \\\\times 3 + 35.45 + 16.00 \\\\times 2 = 94.48\\\\text{ g mol}^{-1}$$
> > 2. **Calculate initial concentration of the acid ($[\\\\text{HA}]$):**
> >    $$\\\\text{Moles} = \\\\frac{1.89\\\\text{ g}}{94.48\\\\text{ g mol}^{-1}} = 0.0200\\\\text{ mol}$$
> >    $$[\\\\text{HA}] = \\\\frac{0.0200\\\\text{ mol}}{0.250\\\\text{ dm}^3} = 0.0800\\\\text{ mol dm}^{-3}$$
> > 3. **Calculate $[\\\\text{H}^+]$ from pH:**
> >    $$[\\\\text{H}^+] = 10^{-\\\\text{pH}} = 10^{-1.99} = 0.01023\\\\text{ mol dm}^{-3}$$
> > 4. **Calculate $K_a$:**
> >    * *Method A (using simplified denominator $[\\\\text{HA}]$):*
> >      $$K_a = \\\\frac{[\\\\text{H}^+]^2}{[\\\\text{HA}]} = \\\\frac{(0.01023)^2}{0.0800} = 1.31 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
> >    * *Method B (using precise denominator $[\\\\text{HA}] - [\\\\text{H}^+]$):*
> >      $$K_a = \\\\frac{(0.01023)^2}{0.0800 - 0.01023} = 1.50 \\\\times 10^{-3}\\\\text{ mol dm}^{-3}$$
 
> [!EXAMPLE]
> #### 📝 Worked Example 5: Predicting pH of Ammonium Methanoate
> **Question:** What information is required in order to make a prediction about the pH of an aqueous solution of ammonium methanoate, $\\\\text{HCOONH}_4$?
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Required Values:** You need the acid dissociation constant of methanoic acid ($K_a$ of $\\\\text{HCOOH}$) and the base dissociation constant of ammonia ($K_b$ of $\\\\text{NH}_3$), or the $K_a$ of the ammonium ion ($\\\\text{NH}_4^+$).
> > 2. **Comparison Logic:** Comparing $K_a(\\\\text{HCOOH})$ and $K_a(\\\\text{NH}_4^+)$ determines the pH outcome:
> >    * If $K_a(\\\\text{HCOOH}) > K_a(\\\\text{NH}_4^+)$, the solution is slightly acidic.
> >    * If $K_a(\\\\text{HCOOH}) < K_a(\\\\text{NH}_4^+)$, the solution is alkaline.
`,
    keyPoints: [
      'Ka is the acid dissociation constant and is temperature-dependent.',
      'pKa is a logarithmic index of Ka, where lower pKa indicates a stronger acid.',
      'The simplified formula [H⁺] = √(Ka × c) assumes negligible dissociation of HA.'
    ]
  },
  {
    id: 'titrations-indicators-u4-l4',
    title: 'Titrations & Indicators',
    type: 'text',
    content: `
${svgToken(titrationCurvesDashboardSvg)}

> [!NOTE]
> ### 📊 Acid-Base Titrations & Equivalence Point
> * **Equivalence Point:**
>   1. The point during a titration (strong base with strong/weak acid, or strong acid with strong/weak base) where the quantity of added titrant is chemically equivalent to the quantity of the substance being titrated.
>   2. In an acid-base titration, it occurs when the moles of $\text{H}^+$ ions completely equal the moles of $\text{OH}^-$ ions ($n_{\text{acid}} = n_{\text{base}}$), resulting in a complete neutralization of the solution.
> * **End Point:** The point in a titration where the indicator undergoes a complete colour change.
> * **Neutralisation vs Equivalence:** The equivalence point is **only pH 7.00** for strong acid-strong base titrations. For weak-strong combinations, the pH at equivalence is determined by salt hydrolysis and is either above or below 7.00.

> [!IMPORTANT]
> ### 📈 The Four pH Titration Curves & Profiles
> pH curves plot the pH of the solution against the volume of acid/base added from the burette:
> 
> 1. **Strong Acid / Strong Base:**
>    * Large vertical section spanning **pH 3–11**
>    * Equivalence point at **pH 7.00**
> 2. **Strong Acid / Weak Base:**
>    * Vertical section in the acidic region (**pH 3–7**)
>    * Equivalence point **< pH 7.00**
> 3. **Weak Acid / Strong Base:**
>    * Vertical section in the basic region (**pH 7–11**)
>    * Equivalence point **> pH 7.00**
> 4. **Weak Acid / Weak Base:**
>    * **No vertical section exists.** This makes it impossible to select a suitable indicator as there is no rapid pH change at the equivalence point.
 
> [!BOX]
> ### 🧪 Indicator Theory
> An indicator is a weak acid ($\\\\text{HIn}$) that has a different colour from its conjugate base ($\\\\text{In}^-$):
> $$\\\\text{HIn(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{In}^-\\\\text{(aq)}$$
> 
> The indicator constant is defined as:
> $$K_{\\\\text{In}} = \\\\frac{[\\\\text{H}^+][\\\\text{In}^-]}{[\\\\text{HIn}]}$$
> 
> * **End Point:** At the end point of the titration, the indicator is halfway through its colour change, meaning $[\\\\text{HIn}] = [\\\\text{In}^-]$.
> * Therefore, $[\\\\text{H}^+] = K_{\\\\text{In}}$, and the **pH at colour change is equal to $\\\\text{p}K_{\\\\text{In}}$**.
> * **Colour Range:** Colour change occurs over a pH range of approximately $\\\\text{pH} = \\\\text{p}K_{\\\\text{In}} \\\\pm 1.0$
> 
> #### Table C: Common Acid-Base Indicators
> | Indicator | pKIn | pH Range | Acid Colour (HIn) | Base Colour (In⁻) |
> | :--- | :--- | :--- | :--- | :--- |
> | Methyl orange | $3.70$ | $3.10-4.40$ | red | yellow |
> | Bromophenol blue | $4.00$ | $2.80-4.60$ | yellow | blue |
> | Bromothymol blue | $7.00$ | $6.00-7.60$ | yellow | blue |
> | Phenol red | $7.90$ | $6.80-8.40$ | yellow | red |
> | Phenolphthalein | $9.30$ | $8.20-10.00$ | colourless | red |
> 
> **Choosing an Indicator:**
> * An indicator is suitable only if its entire pH transition range lies within the **steep vertical section** of the pH titration curve.
 
> [!IMPORTANT]
> ### 🧮 Titration Curves with Diprotic Acids
> A diprotic acid ($\\\\text{H₂X}$) dissociates in two stages:
> $$\\\\text{H₂X(aq)} \\\\rightarrow \\\\text{H}^+\\\\text{(aq)} + \\\\text{HX}^-\\\\text{(aq)}$$
> $$\\\\text{HX}^-\\\\text{(aq)} \\\\rightleftharpoons \\\\text{H}^+\\\\text{(aq)} + \\\\text{X}^{2-}\\\\text{(aq)}$$
> 
> * **Two Equivalence Points:** The titration curve of a diprotic acid with a strong base exhibits two distinct equivalence points.
> * **Stoichiometric Volumes:** The volume of base required to reach the second equivalence point is exactly **twice** the volume required to reach the first equivalence point.
>   * *Step 1:* $\\\\text{H₂X} + \\\\text{NaOH} \\\\rightarrow \\\\text{NaHX} + \\\\text{H₂O}$ (volume $V_1$)
>   * *Step 2:* $\\\\text{NaHX} + \\\\text{NaOH} \\\\rightarrow \\\\text{Na₂X} + \\\\text{H₂O}$ (volume $V_2 = 2 V_1$)
 
> [!EXAMPLE]
> #### 📝 Worked Example 1: Hydrochloric Acid & Ammonia Titration (Checkpoint Q1)
> **Question:** Ammonia titrated with HCl. Equivalence occurs at $15.0\\text{ cm}^3$ HCl.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Weak base evidence:**
> > * The pH of the mixture past the equivalence point flattens out around pH 10 to 11.
> > * If it were a strong base, the pH would continue rising to 13 or 14.
> > 
> > **(b) Ammonia concentration calculation:**
> > 1. Write the balanced equation: $\\\\text{HCl} + \\\\text{NH₃} \\\\rightarrow \\\\text{NH₄Cl}$ (1:1 ratio)
> > 2. Moles of HCl = $C \\\\times V = 0.0200 \\\\times 0.0250 = 5.00 \\\\times 10^{-4}\\\\text{ mol}$
> > 3. Moles of NH₃ reacting = $5.00 \\\\times 10^{-4}\\\\text{ mol}$
> > 3. Moles of NH₃ reacting = $5.00 \\times 10^{-4}\\text{ mol}$
> > 4. Concentration of NH₃ = $5.00 \\times 10^{-4} / 0.0150 = 0.0333\\text{ mol dm}^{-3}$
> > 
> > **(c) Suitable indicator:**
> * Only **Methyl red** (range 4.2-6.3) falls completely within this vertical region.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Weak Acid-Strong Base Titration Curve (Checkpoint Q2)
> **Question:** Describe ethanoic acid titration with NaOH.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Weak acid pH:**
> > * $[\\text{H}^+] = \\sqrt{K_a \\times c} = 1.319 \\times 10^{-3}\\text{ mol dm}^{-3} \\implies \\text{pH} = 2.88$
> > 
> > **(b) Titration Curve Description:**
> > * Start: pH begins at 2.88.
> > * Equivalence Point: Occurs at exactly $25.0\\text{ cm}^3$ NaOH added, where the pH rises steeply and the midpoint is alkaline ($\\text{pH} \\approx 8.7$)
> > * End: Past $25.0\\text{ cm}^3$, the curve flattens out, approaching a pH of $\approx 12.5$ after $50.0\\text{ cm}^3$ is added.
> > 
> > **(c) Differences with dilute acid ($0.0500$ mol dm⁻³):**
> * 1. The starting pH will be higher ($3.03$ instead of $2.88$).
> * 2. The volume of NaOH required to reach equivalence will be halved ($12.5$ cm3).
`,
    keyPoints: [
      'Equivalence point pH is determined by salt hydrolysis and depends on acid/base strengths.',
      'An indicator is suitable only if its transition range lies within the steep vertical section of the titration curve.',
      'Diprotic acids display two distinct equivalence points on their pH titration curves.'
    ]
  },
  {
    id: 'buffer-solutions-u4-l4',
    title: 'Buffer Solutions',
    type: 'text',
    content: `
> [!NOTE]
> ### 🛡️ What is a Buffer Solution?
> A **buffer solution** minimizes the change in pH when small amounts of acid or base are added to it:
> 
> * **Acidic Buffer:** Prepared by mixing a weak acid (HA) with its conjugate base salt ($\\text{A}^-$), e.g., ethanoic acid ($\\text{CH₃COOH}$) and sodium ethanoate ($\\text{CH₃COONa}$). It maintains a pH less than 7.00.
> * **Basic Buffer:** Prepared by mixing a weak base and its conjugate acid salt, e.g., ammonia ($\\text{NH₃}$) and ammonium chloride ($\\text{NH₄Cl}$). It maintains a pH greater than 7.00.

> [!IMPORTANT]
> ### ⚙️ How Buffer Action Works
> **1. Acidic Buffer (e.g., $\\text{CH₃COOH}$ / $\\text{CH₃COO}^-$):**
> * **Reaction equilibria:**
>   * $\\text{CH₃COOH(aq)} \\rightleftharpoons \\text{CH₃COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$ (Slight dissociation, large reservoir of $\\text{CH₃COOH}$)
>   * $\\text{CH₃COONa(aq)} \\rightarrow \\text{CH₃COO}^-\\text{(aq)} + \\text{Na}^+\\text{(aq)}$ (Complete dissociation, large reservoir of $\\text{CH₃COO}^-$)
> * **When acid ($\\text{H}^+$) is added:**
>   $$\\text{CH₃COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{CH₃COOH(aq)}$$
> * **When base ($\\text{OH}^-$) is added:**
>   $$\\text{CH₃COOH(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{CH₃COO}^-\\text{(aq)} + \\text{H₂O(l)}$$
> 
> **2. Basic Buffer (e.g., $\\text{NH₃}$ / $\\text{NH₄}^+$):**
> * **Reaction equilibrium:** $\\text{NH₄}^+\\text{(aq)} \\rightleftharpoons \\text{NH₃(aq)} + \\text{H}^+\\text{(aq)}$
> * **When acid ($\\text{H}^+$) is added:** $\\text{NH₃(aq)} + \\text{H}^+\\text{(aq)} \\rightarrow \\text{NH₄}^+\\text{(aq)}$
> * **When base ($\\text{OH}^-$) is added:** $\\text{NH₄}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\rightarrow \\text{NH₃(aq)} + \\text{H₂O(l)}$

> [!BOX]
> ### 🧮 Mathematical Proof of Buffer Efficiency
> Imagine $1.00\\text{ dm}^3$ of buffer made by mixing equal volumes of $1.00\\text{ mol dm}^{-3}$ ethanoic acid and $1.00\\text{ mol dm}^{-3}$ sodium ethanoate.
> * Due to equal volume mixing, both concentrations are halved to $0.500\\text{ mol dm}^{-3}$ each.
> * Initial pH ($K_a = 1.74 \\times 10^{-5}$):
>   $$[\\text{H}^+] = K_a \\times \\frac{[\\text{acid}]}{[\\text{salt}]} = 1.74 \\times 10^{-5} \\implies \\text{pH} = 4.76$$
> 
> Now add $1.00 \\times 10^{-2}\\text{ mol}$ of HCl ($0.0100\\text{ mol}$ $\\text{H}^+$) to the buffer:
> * The added $\\text{H}^+$ reacts with $\\text{CH₃COO}^-$:
>   * Moles of $\\text{CH₃COOH}$ increases: $0.510\\text{ mol}$
>   * Moles of $\\text{CH₃COO}^-$ decreases: $0.490\\text{ mol}$
> * New $[\\text{H}^+]$ calculation:
>   $$[\\text{H}^+] = 1.74 \\times 10^{-5} \\times \\frac{0.510}{0.490} = 1.81 \\times 10^{-5}\\text{ mol dm}^{-3} \\implies \\text{pH} = 4.74$$
> * The pH dropped by only **0.02 units** (from 4.76 to 4.74)!
> * **Comparison:** Adding $0.0100\\text{ mol}$ of HCl to $1.00\\text{ dm}^3$ of pure water changes pH from 7.00 to 2.00 (a drop of **5.00 units**).

> [!BOX]
> ### 🧮 Henderson-Hasselbalch Equation
> Taking negative logarithms of the rearranged $K_a$ equation yields:
> $$\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{salt}]}{[\\text{acid}]}\\right)$$
> * For a basic buffer: $\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{base}]}{[\\text{conjugate acid}]}\\right)$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Preparing an Acidic Buffer of Specific pH
> **Question:** Prepare pH 5.00 buffer using ethanoic acid and sodium ethanoate.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Find $[\\text{H}^+]$ from target pH:**
> >    $$[\\text{H}^+] = 10^{-5.00} = 1.00 \\times 10^{-5}\\text{ mol dm}^{-3}$$
> > 2. **Substitute into rearranged Ka expression:**
> >    $$[\\text{H}^+] = K_a \\times \\frac{[\\text{acid}]}{[\\text{salt}]}$$
> > 3. **Solve for the ratio:**
> >    $$\\frac{[\\text{acid}]}{[\\text{salt}]} = 0.575$$
> * Therefore, we mix in ratio of $0.575$ of acid for every $1.00$ of salt.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Preparing a Basic Buffer of Specific pH
> **Question:** Mix NH3 and NH4Cl for pH 9.80 buffer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. $[\\text{H}^+] = 1.585 \\times 10^{-10}\\text{ mol dm}^{-3}$
> > 2. $\\frac{[\\text{NH₃}]}{[\\text{NH₄}^+]} = \\frac{K_a}{[\\text{H}^+]} = 3.56$
> * We mix **3.56 volumes of ammonia** with **1 volume of ammonium chloride**.

> [!BOX]
> ### 🩸 Biological Buffers: Blood pH Control
> * Arterial blood plasma pH must be kept between **7.35 and 7.45**.
> * **The Primary Blood Buffer:** Carbonic acid ($\\text{H₂CO₃}$) and hydrogen carbonate ion ($\\text{HCO₃}^-$):
>   $$\\text{H₂CO₃(aq)} \\rightleftharpoons \\text{HCO₃}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$$
> * **Respiration Connection:** Carbonic acid is in equilibrium with dissolved carbon dioxide:
>   $$\\text{CO₂(g)} \\rightleftharpoons \\text{CO₂(aq)} + \\text{H₂O(l)} \\rightleftharpoons \\text{H₂CO₃(aq)}$$

> [!BOX]
> ### 🍎 Buffers in Food Preservation
> * Spoilage bacteria thrive near neutral pH (6.6 to 7.5) and are restricted below 4.4.
> * **Buffer Capacity:** A measure of the amount of acid or base required to change the pH of a solution significantly.
> * Jams and preserves use citric acid and sodium citrate buffer systems.



> [!EXAMPLE]
> #### 📝 Worked Example 3: Methanoic Acid Buffer (Checkpoint Q1)
> **Question:** Define buffer.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Definition:** A buffer solution minimizes pH changes when small amounts of acid/base are added.
> * **(b) Mechanism:** HCOOH is weak acid and HCOOK provides $\\text{HCOO}^-$.
>   * Added $\\text{H}^+$: $\\text{HCOO}^- + \\text{H}^+ \\rightarrow \\text{HCOOH}$
>   * Added $\\text{OH}^-$: $\\text{HCOOH} + \\text{OH}^- \\rightarrow \\text{HCOO}^- + \\text{H₂O}$
> * **(c) Common ion effect:** Adding solid salt shifts equilibrium left, increasing pH slightly.
> * **(d) Calculation:** Ratio is 2.0. $[\\text{H}^+] = 1.79 \\times 10^{-4} \\times 2.0 = 3.58 \\times 10^{-4}\\text{ mol dm}^{-3} \\implies \\text{pH} = 3.45$



> [!EXAMPLE]
> #### 📝 Worked Example 4: Identifying Buffer Solutions (Checkpoint Q2)
> **Question:** Identify Solution A vs B.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **Solution A:** Mixing leaves excess $\\text{CH₃COOH}$ and forms salt, so it is a buffer.
> * **Solution B:** All acid reacts with NaOH, no weak acid remains, so it is not a buffer.



> [!EXAMPLE]
> #### 📝 Worked Example 5: Basic Buffer Salt Concentration (Checkpoint Q3)
> **Question:** NH3 + NH4Cl pH 9.55 buffer. Calculate NH4Cl used.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. $[\\text{H}^+] = 10^{-9.55} = 2.818 \\times 10^{-10}\\text{ mol dm}^{-3}$
> 2. $[\\text{NH₃}]_{\\text{eq}} = 0.100\\text{ mol dm}^{-3}$
> 3. $[\\text{NH₄}^+] = 0.05014\\text{ mol dm}^{-3}$ in mixture.
> 4. Initial concentration of salt used = $0.100\\text{ mol dm}^{-3}$.



> [!EXAMPLE]
> #### 📝 Worked Example 6: Benzoic Acid Buffer Calculation (Checkpoint Q4)
> **Question:** 12.20 g benzoic acid and 7.20 g sodium benzoate in 1.00 dm3.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> 1. Moles of acid = $0.100\\text{ mol}$, moles of salt = $0.0500\\text{ mol}$.
> 2. $\\text{pH} = 4.20 + \\log_{10}\\left(\\frac{0.0500}{0.100}\\right) = 3.90$



> [!EXAMPLE]
> #### 📝 Worked Example 7: Liquid Ammonia Auto-Dissociation (Checkpoint Q5)
> **Question:** Ammonia auto-dissociation and solute classification.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * **(a) Amphoteric:** One ammonia molecule behaves as acid (donates proton) and another as base (accepts proton).
> * **(b) Classifications:** (i) Acidic, (ii) Basic, (iii) Basic.
`,
    keyPoints: [
      'Buffers require a reservoir of both weak acid/base and its conjugate salt.',
      'Henderson-Hasselbalch allows direct calculation of buffer pH from concentrations.',
      'When acid and salt concentrations are equal, pH equals pKa.'
    ]
  },
  {
    id: 'buffer-titrations-ka-u4-l4',
    title: 'Ka from pH Curves',
    type: 'text',
    content: `
> [!NOTE]
> ### 📊 Buffer Action during a Titration
> In the titration curve of a weak acid with a strong base:
> * Initial: There is a small rapid initial pH rise of about $1.5$ pH units when the strong base is first added.
> * Buffer range: Following this initial rise, the curve shows a very gradual slope called the **buffer range**.
> * In this range, there is a considerable concentration of both weak acid (HA) and conjugate base (A⁻), displaying buffer action.

> [!IMPORTANT]
> ### 🧮 Determining Ka from a pH Titration Curve
> At the **half-equivalence point**:
> 1. The point during the titration of a weak acid (or weak base) where exactly half of the original analyte has been neutralized by the titrant.
> 2. The point where half of the acid has been neutralized.
> 3. At this specific point, $[\text{HA}] = [\text{A}^-]$. Substituting this into the $K_a$ expression reveals that:
>    $$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]} \implies \text{pH} = \text{p}K_a$$
> 4. This is the standard experimental method for determining the $K_a$ of an unknown weak acid.
> * *Exam Hint:* Always use the term **half-equivalence point** and NOT half-neutralisation point when determining p$K_a$ of a weak acid.

> [!BOX]
> ### 🧪 Alternative Half-Volume Method (Practical Skills CP11)
> We can measure $pK_a$ directly using this experimental method:
> 1. Pipette $25.0\\text{ cm}^3$ of weak acid into a conical flask and add a few drops of phenolphthalein indicator.
> 2. Titrate against sodium hydroxide until the end point colour is obtained. Note the volume required ($V_{\\text{eq}}$).
> 3. Pipette a fresh $25.0\\text{ cm}^3$ sample of the weak acid and add exactly **half the volume** of sodium hydroxide ($\\frac{V_{\\text{eq}}}{2}$). Do NOT add indicator.
> 4. Measure the pH of this mixture using a calibrated pH meter. The measured pH is equal to the p$K_a$ value of the acid.



> [!EXAMPLE]
> #### 📝 Worked Example 1: Ringed Region on HCl-Ammonia Titration Curve (Checkpoint Q1)
> **Question:** A student titrates hydrochloric acid into ammonia solution.
> (a) Name the type of solution formed in the ringed region at the start of the titration.
> (b) Explain how you deduced your answer to part (a).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > **(a) Solution type:**
> > * A **buffer solution** (consisting of the weak base ammonia, NH₃, and its conjugate acid salt ammonium chloride, NH₄Cl).
> > 
> > **(b) Explanation:**
> * The ringed region is before the equivalence point, where only some of the ammonia has reacted with HCl. This creates a mixture containing both unreacted weak base and conjugate acid. This mixture resists changes in pH, resulting in a very gradual slope.



> [!EXAMPLE]
> #### 📝 Worked Example 2: Determining pKa from Curve (Checkpoint Q2)
> **Question:** A titration curve of a weak acid shows an equivalence point at $15.0\\\\text{ cm}^3$ NaOH added. The pH at the half-equivalence point ($7.5\\\\text{ cm}^3$ NaOH added) is $4.50$. Determine the $pK_a$ value for the acid.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> * 1. **Identify the half-equivalence volume:**
>      $$\\\\text{Volume} = \\\\frac{15.0}{2} = 7.5\\\\text{ cm}^3$$
> * 2. **Locate the pH at this volume:**
>      * From the titration curve, the pH when $7.5\\text{ cm}^3$ NaOH is added is $4.50$.
> * 3. **State the relationship:**
>      * At the half-equivalence point, $[\\text{acid}] = [\\text{salt}]$, so $\\text{pH} = \\text{p}K_a$.
> * Therefore, $\\text{p}K_a = 4.50$.
`,
    keyPoints: [
      'At the half-equivalence point of a weak acid-strong base titration, pH equals pKa.',
      'The half-volume method is a practical way of determining pKa by measuring the pH of a half-neutralised mixture.',
      'The buffer region on a pH titration curve corresponds to the flat portion where both HA and A⁻ coexist.'
    ]
  }
];
