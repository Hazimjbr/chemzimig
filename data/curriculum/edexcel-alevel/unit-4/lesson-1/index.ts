import { LessonPart } from '../../../registry';

export const lessonTitle = "Kinetics";
export const lessonNumber = 1;

export const theoryMarkdown = `
# Topic 11: Kinetics
This lesson covers reaction rates, orders of reaction, rate equations, continuous and initial rate experimental methods, reaction mechanisms, the rate-determining step, and the Arrhenius equation.
`;

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
> \${svgToken(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
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
</svg>\`)}
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
> \${svgToken(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
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
</svg>\`)}

> [!BOX]
> ### ⚖️ Quenching and Chemical Titration
> * **Process:** Taking samples (aliquots) of the reaction mixture at regular intervals, stopping or slowing the reaction immediately (**quenching**), and then titrating the sample to determine reactant/product concentration.
> * **Quenching Techniques:**
>   1. Rapid cooling in an ice-water bath.
>   2. Adding a chemical that neutralizes/reacts with the catalyst or one of the reactants.
> * **Example (Propanone-Iodine Reaction):** Sodium hydrogen carbonate ($\\text{NaHCO}_3$) is added to neutralize the acid catalyst ($H^+$), effectively quenching the reaction. The remaining iodine is then titrated against standard sodium thiosulfate:
>   $$\\text{I}_2\\text{(aq)} + 2\\text{S}_2\\text{O}_3^{2-}\\text{(aq)} \\rightarrow 2\\text{I}^-\\text{(aq)} + \\text{S}_4\\text{O}_6^{2-}\\text{(aq)}$$

> [!BOX]
> ### 📋 Other Physical Monitoring Methods
> For other reactions, specific physical properties can be monitored continuously:
> 
> 1. **Measuring Mass Change:**
>    * **Justification:** Suitable if a heavy gas (e.g. $\\text{CO}_2$) escapes from the flask. A cotton wool plug allows gas to escape but prevents loss of liquid droplets.
>    * **Constraint:** Highly precise for high relative molecular mass gases like $\\text{CO}_2$ ($M_r = 44.0$). Ineffective for very light gases like $\\text{H}_2$ ($M_r = 2.0$) due to large measurement uncertainties.
> 
> \${svgToken(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
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
</svg>\`)}
> 
> 2. **Disappearing Cross Method:**
>    * **Justification:** Suitable for reactions that produce an insoluble solid precipitate that makes the solution cloudy.
>    * **Example:** Sodium thiosulfate and hydrochloric acid:
>      $$\\text{Na}_2\\text{S}_2\\text{O}_3\\text{(aq)} + 2\\text{HCl}\\text{(aq)} \\rightarrow 2\\text{NaCl}\\text{(aq)} + \\text{SO}_2\\text{(g)} + \\text{S}\\text{(s)} + \\text{H}_2\\text{O}\\text{(l)}$$
> 
> \${svgToken(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
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
</svg>\`)}
> 
> 3. **Electrical Conductivity:**
>    * **Justification:** Suitable if the concentration or mobility of ions in solution changes during the reaction, causing a drop/increase in conductivity.
>    * **Example:**
>      $$5\\text{Br}^-\\text{(aq)} + \\text{BrO}_3^-\\text{(aq)} + 6\\text{H}^+\\text{(aq)} \\rightarrow 3\\text{Br}_2\\text{(aq)} + 3\\text{H}_2\\text{O}\\text{(l)}$$
> 
> 4. **pH Measurement:**
>    * **Justification:** Suitable for reactions where the concentration of hydrogen ions ($\\text{H}^+$) changes significantly.
>    * **Apparatus:** A digital pH probe or meter.
> 
> 5. **Other Physical Properties:**
>    * **Polarimetry:** Monitors optical activity if the chirality of a reactant/product changes.
>    * **Dilatometry:** Monitors minute changes in volume during liquid reactions.
> [!EXAMPLE]
> #### 📝 Worked Example 2: Justifying Experimental Techniques
> **Question:** Identify the most suitable experimental technique to follow the rate of each of the following reactions, and explain your choice:
> 
> 1. $\\\\text{Mg}\\\\text{(s)} + 2\\\\text{H}^+\\\\text{(aq)} \\\\rightarrow \\\\text{Mg}^{2+}\\\\text{(aq)} + \\\\text{H}_2\\\\text{(g)}$
> 2. $\\\\text{CH}_3\\\\text{COOCH}_2\\\\text{CH}_3\\\\text{(l)} + \\\\text{OH}^-\\\\text{(aq)} \\\\rightarrow \\\\text{CH}_3\\\\text{COO}^-\\\\text{(aq)} + \\\\text{CH}_3\\\\text{CH}_2\\\\text{OH}\\\\text{(aq)}$
> 3. $\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI}\\\\text{(g)}$
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
`,
        keyPoints: [
            'Continuous monitoring yields concentration-time graphs, from which tangent gradients give rates.',
            'Initial rates method gives rate-concentration graphs directly.'
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
>      *The negative sign shows that the concentration of the reactant is decreasing, ensuring the calculated rate has a positive value.*
> * **Rate Equation:** An expression showing how the rate of reaction relates to the concentrations of the reactants:
>   $$\\\\text{Rate} = k[\\\\text{A}]^x[\\\\text{B}]^y$$
> * **Rate Constant ($k$):** A proportionality constant that links reaction rate to concentrations at a specific temperature.
> * **Reaction Orders:** The powers ($x$ and $y$) to which the concentration terms are raised.
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

> [!BOX]
> ### 📋 Common Rate Constant Units
> Since the rate is always in $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$ and concentration is in $\\\\text{mol dm}^{-3}$, the units of $k$ depend on the overall order:
> * **Zero Order:** $k = \\\\text{Rate}$, units: $\\\\text{mol dm}^{-3}\\\\text{ s}^{-1}$
> * **First Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}]}$, units: $\\\\text{s}^{-1}$
> * **Second Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}][\\\\text{B}]}$, units: $\\\\text{dm}^3\\\\text{ mol}^{-1}\\\\text{ s}^{-1}$
> * **Third Order:** $k = \\\\frac{\\\\text{Rate}}{[\\\\text{A}]^2[\\\\text{B}]}$, units: $\\\\text{dm}^6\\\\text{ mol}^{-2}\\\\text{ s}^{-1}$

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing Reaction Orders & Constant Units
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
`,
        keyPoints: [
            'Reaction order can only be determined experimentally and cannot be predicted from the balanced equation stoichiometry.',
            'The value of the rate constant k changes with temperature but is independent of concentrations.'
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
> > [!TIP]
> > ### 📋 The Student Notes Analogy
> > Imagine three students preparing study notes:
> > * **Student 1:** Collects sheets from 10 piles (**SLOW**).
> > * **Student 2:** Tidies the sheets (**FAST**).
> > * **Student 3:** Staples the sheets (**FAST**).
> > 
> > The overall rate of producing finished notes depends entirely on the speed of **Student 1**. The other students do nothing but wait for Student 1 to finish. Thus, Student 1 represents the rate-determining step.
 
 > [!IMPORTANT]
 > ### 🗮️ Rules for Connecting Mechanisms to Rate Equations
 > 1. **Reactant Presence:** All reactant species involved either in, or before, the rate-determining step have an effect on the rate and will appear in the rate equation.
 > 2. **Reaction Order:** The coefficients of reactants in the RDS (or steps preceding it) match the order of those reactants in the rate equation.
 > 3. **Species After RDS:** Species participating only in steps AFTER the RDS do not appear in the rate equation (or their concentration effect is negligible because they react in fast steps).
 > 4. **Species in Large Excess:** A reactant present in such a large excess that its concentration change is negligible will not have a measurable effect on the rate and won't appear in the rate equation.

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
> *Secondary halogenoalkanes react via a mixture of both SN1 and SN2 mechanisms.*

> [!EXAMPLE]
> #### 📝 Worked Example 1: Deducing a Mechanism from a Rate Equation
> **Question:** The reaction $\\\\text{NO}_2\\\\text{(g)} + \\\\text{CO(g)} \\\\rightarrow \\\\text{NO(g)} + \\\\text{CO}_2\\\\text{(g)}$ has the experimental rate equation $\\\\text{Rate} = k[\\\\text{NO}_2]^2$. Explain why the following two-step mechanism is consistent with the rate equation:
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
