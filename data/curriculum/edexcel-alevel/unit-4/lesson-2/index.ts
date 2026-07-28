import { LessonPart } from '../../../registry';
import { svgToken } from '../../../svgToken';

export const lessonTitle = "Entropy and Energetics";
export const lessonNumber = 2;

export const theoryMarkdown = `
# Topic 12: Entropy and Energetics
This lesson covers entropy, Gibbs free energy, lattice enthalpy, Born-Haber cycles, enthalpy of solution, and Hess's Law applications.
`;

const reactionEnergyProfilesSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" class="w-full h-auto rounded-lg" style="background: linear-gradient(to bottom right, #070f1e, #0b1b35); border: 1px solid #1e293b; font-family: system-ui, -apple-system, sans-serif;">
  <defs>
    <marker id="axis-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
    </marker>
    <marker id="arrow-red-down" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-blue-up" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
    </marker>
    <marker id="dot-grey" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="3.5" fill="#64748b" />
    </marker>
  </defs>
  
  <text x="50%" y="30" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="bold">Reaction Energy Profiles</text>
  
  <!-- Left Panel: Exothermic Reaction -->
  <g transform="translate(60, 40)">
    <text x="180" y="20" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">Exothermic Reaction</text>
    
    <!-- Axes -->
    <path d="M 40,240 L 40,40" stroke="#94a3b8" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="20" y="140" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 20 140)">Energy (H)</text>
    
    <path d="M 40,240 L 340,240" stroke="#94a3b8" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="190" y="260" fill="#94a3b8" font-size="11" text-anchor="middle">Reaction Progression</text>
    
    <!-- Curve (Reactants at 170, Peak at 70, Products at 220) -->
    <path d="M 40,170 L 110,170 C 150,170 160,70 190,70 C 220,70 230,220 270,220 L 330,220" fill="none" stroke="#ef4444" stroke-width="3" />
    
    <!-- Dotted lines for levels -->
    <line x1="110" y1="170" x2="230" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    <line x1="200" y1="220" x2="280" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    <line x1="130" y1="70" x2="190" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    
    <!-- Arrows -->
    <!-- Ea (Green arrow with dot at the reactant line, pointing up to the peak line) -->
    <line x1="140" y1="170" x2="140" y2="70" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" marker-start="url(#dot-grey)" />
    <text x="155" y="125" fill="#10b981" font-size="11" font-weight="bold">Ea</text>
    
    <!-- ΔH (Red arrow starting at the reactant line and pointing down to the product line) -->
    <line x1="210" y1="170" x2="210" y2="220" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red-down)" />
    <text x="160" y="195" fill="#ef4444" font-size="11" font-weight="bold">ΔH &lt; 0</text>
    
    <text x="75" y="160" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Reactants</text>
    <text x="300" y="210" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Products</text>
  </g>
  
  <!-- Right Panel: Endothermic Reaction -->
  <g transform="translate(560, 40)">
    <text x="180" y="20" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">Endothermic Reaction</text>
    
    <!-- Axes -->
    <path d="M 40,240 L 40,40" stroke="#94a3b8" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="20" y="140" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 20 140)">Energy (H)</text>
    
    <path d="M 40,240 L 340,240" stroke="#94a3b8" stroke-width="2" marker-end="url(#axis-arrow)" />
    <text x="190" y="260" fill="#94a3b8" font-size="11" text-anchor="middle">Reaction Progression</text>
    
    <!-- Curve (Reactants at 220, Peak at 70, Products at 170) -->
    <path d="M 40,220 L 110,220 C 150,220 160,70 190,70 C 220,70 230,170 270,170 L 330,170" fill="none" stroke="#3b82f6" stroke-width="3" />
    
    <!-- Dotted lines for levels -->
    <line x1="110" y1="220" x2="230" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    <line x1="200" y1="170" x2="280" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    <line x1="130" y1="70" x2="190" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3" />
    
    <!-- Arrows -->
    <!-- Ea (Green arrow with dot at the reactant line, pointing up to the peak line) -->
    <line x1="140" y1="220" x2="140" y2="70" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" marker-start="url(#dot-grey)" />
    <text x="155" y="150" fill="#10b981" font-size="11" font-weight="bold">Ea</text>
    
    <!-- ΔH (Blue arrow starting at the reactant line and pointing up to the product line) -->
    <line x1="210" y1="220" x2="210" y2="170" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue-up)" />
    <text x="160" y="195" fill="#3b82f6" font-size="11" font-weight="bold">ΔH &gt; 0</text>
    
    <text x="75" y="210" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Reactants</text>
    <text x="300" y="160" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Products</text>
  </g>
</svg>`;

export const parts: LessonPart[] = [
    {
        id: 'energetics-enthalpy-review-u4-l2',
        title: 'Introduction: Chemical Energetics Review',
        type: 'text',
        content: `
> [!NOTE]
> ### ⚡ Chemical Energetics and Enthalpy
> **Chemical Energetics** focuses on the transfer of thermal energy during chemical reactions. 
> 
> * **Enthalpy ($H$):** The heat content of a system at constant pressure. We cannot measure absolute enthalpy, only the change in enthalpy during a process.
> * **Enthalpy Change ($\\\\Delta H$):** The transfer of thermal energy between a reaction system and its surroundings:
>   $$\\\\Delta H = H_{\\\\text{products}} - H_{\\\\text{reactants}}$$
>   $$\\\\Delta H = \\\\text{energy in} - \\\\text{energy out}$$

> [!BOX]
> ### 🔥 Exothermic Reactions
> **Exothermic reactions** transfer thermal energy from the system to the surroundings.
> 
> 1. **Direction of Heat Flow:** Reactants $\\\\rightarrow$ Products $+$ Energy
> 2. **Surroundings Temperature:** The temperature of the surroundings increases.
> 3. **Energy Levels:** Products have lower energy than the reactants.
> 4. **Energetic Stability:** Products are more **energetically stable** than reactants.
> 5. **Temperature Favorability:** Low temperatures favor exothermic reactions.
> 6. **Enthalpy Change Sign:** $\\\\Delta H$ has a **negative** sign ($\\\\Delta H &lt; 0$).
> 7. **Reaction Initiation:** Some reactions occur spontaneously without heating, while others need initial heat to break the first bonds, after which the energy released sustains the reaction.
> 
> **Common Examples:**
> * Iron and sulphur:
>   $$\\\\text{Fe(s)} + \\\\text{S(s)} \\\\rightarrow \\\\text{FeS(s)} \\\\quad \\\\Delta H = -2100\\\\text{ kJ}$$
> * Quicklime and water:
>   $$\\\\text{CaO(s)} + \\\\text{H}_2\\\\text{O(l)} \\\\rightarrow \\\\text{Ca(OH)}_2\\\\text{(aq)} + \\\\text{energy}$$
> * Precipitation:
>   $$\\\\text{AgNO}_3\\\\text{(aq)} + \\\\text{NaCl(aq)} \\\\rightarrow \\\\text{NaNO}_3\\\\text{(aq)} + \\\\text{AgCl(s)} \\\\quad \\\\text{(white precipitate)}$$
> * Neutralization of acids by alkalis.
> * Combustion of fuels.
> * Bond making processes:
>   $$\\\\text{H} + \\\\text{H} \\\\rightarrow \\\\text{H-H} + \\\\text{energy}$$

> [!BOX]
> ### ❄️ Endothermic Reactions
> **Endothermic reactions** absorb thermal energy from the surroundings into the system.
> 
> 1. **Direction of Heat Flow:** Reactants $+$ Energy $\\\\rightarrow$ Products
> 2. **Surroundings Temperature:** The temperature of the surroundings decreases.
> 3. **Energy Levels:** Products have higher energy than the reactants.
> 4. **Energetic Stability:** Reactants are more **energetically stable** than products.
> 5. **Temperature Favorability:** High temperatures favor endothermic reactions.
> 6. **Enthalpy Change Sign:** $\\\\Delta H$ has a **positive** sign ($\\\\Delta H &gt; 0$).
> 7. **Reaction Initiation:** Continuous heat must be supplied until the reaction is complete.
> 
> **Common Examples:**
> * Thermal decomposition of calcium carbonate:
>   $$\\\\text{CaCO}_3\\\\text{(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO}_2\\\\text{(g)} \\\\quad \\\\Delta H = +178\\\\text{ kJ}$$
> * Barium hydroxide and ammonium chloride:
>   $$\\\\text{Ba(OH)}_2\\\\text{(aq)} + 2\\\\text{NH}_4\\\\text{Cl(s)} + \\\\text{energy} \\\\rightarrow \\\\text{BaCl}_2\\\\text{(aq)} + 2\\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NH}_3\\\\text{(g)}$$
> * Photosynthesis.
> * Cooking food.
> * Citric acid and sodium hydrogencarbonate.
> * Sports injury cold packs.
> * Bond breaking processes:
>   $$\\\\text{H-H} + \\\\text{energy} \\\\rightarrow \\\\text{H} + \\\\text{H}$$

${svgToken(reactionEnergyProfilesSvg)}

> [!BOX]
> ### 📈 Reaction Energy Profile Diagrams
> * **Activation Energy ($E_a$):** The minimum energy colliding particles must possess for a reaction to occur. This is the energy barrier shown as a peak.
> * **Exothermic curve:** Starts higher (reactants) and ends lower (products).
> * **Endothermic curve:** Starts lower (reactants) and ends higher (products).

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 1: Enthalpy Change Calculation & Classification
> **Question:** A reaction converting nitrogen dioxide to dinitrogen tetroxide has the following enthalpy values:
> * $H_{\\\\text{reactants}} = 33.18\\\\text{ kJ mol}^{-1}$
> * $H_{\\\\text{products}} = 9.16\\\\text{ kJ mol}^{-1}$
> 
> 1. Calculate the enthalpy change ($\\\\Delta H$) for the reaction.
> 2. Classify the reaction as exothermic or endothermic.
> 3. State whether the reactants or products are more energetically stable.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the Enthalpy Change:**
> >    $$\\\\Delta H = H_{\\\\text{products}} - H_{\\\\text{reactants}}$$
> >    $$\\\\Delta H = 9.16 - 33.18 = -24.02\\\\text{ kJ mol}^{-1}$$
> > 
> > 2. **Classify the Reaction:**
> >    Since $\\\\Delta H$ is negative ($-24.02\\\\text{ kJ mol}^{-1}$), the reaction is **exothermic**
> > 
> > 3. **Identify Energetic Stability:**
> >    In an exothermic reaction, the products have lower energy than the reactants, which makes the **products** more energetically stable than the reactants.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 2: Energy Changes in Bond Processes
> **Question:** Identify whether bond breaking or bond making is happening in each of the following equations, and classify them as exothermic or endothermic:
> 
> 1. $\\\\text{Cl-Cl} \\\\rightarrow \\\\text{Cl} + \\\\text{Cl}$
> 2. $\\\\text{Na}^+\\\\text{(g)} + \\\\text{Cl}^-\\\\text{(g)} \\\\rightarrow \\\\text{NaCl(s)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze Equation 1:**
> >    * Process: A single chlorine-chlorine bond is broken to form two individual chlorine atoms.
> >    * Classification: **Endothermic** (requires energy input to overcome the attractive force of the bond).
> > 
> > 2. **Analyze Equation 2:**
> >    * Process: Gaseous ions form ionic bonds to produce solid sodium chloride.
> >    * Classification: **Exothermic** (bond making releases energy).
`,
        keyPoints: [
            'Enthalpy change represents the difference between the enthalpy of products and reactants.',
            'Exothermic reactions release heat energy to the surroundings, leading to a negative enthalpy change (ΔH < 0).',
            'Endothermic reactions absorb heat energy from the surroundings, leading to a positive enthalpy change (ΔH > 0).',
            'Products of exothermic reactions are more energetically stable because they exist at a lower potential energy level.'
        ]
    },
    {
        id: 'entropy-spontaneous-u4-l2',
        title: 'Entropy & Chemical Reactions',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌀 Spontaneous Processes
> A **spontaneous process** is a chemical or physical change that occurs naturally without the need for continuous external intervention (such as heating or electrical input).
> 
> **Common Examples:**
> * **Freezing water:** Spontaneous at low temperatures (such as $-20\\\\text{ °C}$)
> * **Diffusion:** The mixing of two unreactive gases in a closed container.
> * **Rusting:** Iron reacting with water and oxygen over time.

> [!BOX]
> ### 🌌 The Second Law of Thermodynamics
> The Second Law governs the direction of spontaneous changes in the universe:
> 
> 1. **Entropy Increase:** In any spontaneous process, the total entropy (randomness or disorder) of an isolated system and its surroundings always increases.
> 2. **Energy Quality and Dispersal:** Energy spontaneously tends to flow from being localized or concentrated to becoming more dispersed or spread out among available microstates (quantized energy states at the microscopic level).
> 3. **Heat Engines and Directionality:**
>    * Heat cannot spontaneously flow from a colder object to a hotter object without the input of external work.
>    * No heat engine can convert $100\\\\%$ of thermal energy into useful work.

> [!NOTE]
> ### 🌀 Entropy (S)
> **Entropy** ($S$) is a fundamental thermodynamic property of matter.
> 
> * **Disorder:** It measures the degree of disorder or randomness within a system.
> * **Energy Dispersal:** It describes the ways in which energy is dispersed (distributed among available energy quanta).
> * **Units:** Measured in $\\\\text{J K}^{-1}$ or $\\\\text{J K}^{-1}\\\\text{ mol}^{-1}$ for molar entropy.

> [!IMPORTANT]
> ### 🧮 Microstates & The Boltzmann Formula
> At a microscopic level, entropy is directly related to the number of microstates (ways energy and particles can be arranged):
> $$\\\\text{S} = k \\\\ln \\\\text{W}$$
> 
> Where:
> * **$k$** = The Boltzmann constant ($1.38 \\\\times 10^{-23}\\\\text{ J K}^{-1}$)
> * **$W$** = The number of possible ways to arrange molecules and distribute energy (microstates)

> [!BOX]
> ### ❄️ The Third Law of Thermodynamics
> The **Third Law of Thermodynamics** states that the entropy of a perfect crystal at absolute zero ($0\\\\text{ K}$) is zero.
> 
> * **Perfect Crystal:** The internal lattice structure is perfectly ordered and identical throughout the substance, with zero vibration.
> * **Microstate Analysis:** In a perfect crystal at $0\\\\text{ K}$, there is only one possible arrangement ($W = 1$).
> * **Mathematical Proof:** Since $\\\\ln(1) = 0$, substituting this into the Boltzmann formula yields:
>   $$S = k \\\\ln(1) = 0$$

> [!TIP]
> ### 🧪 Key Trends in Entropy
> 1. **Physical States:** Entropy increases as substances transition toward more disordered states where particles have more freedom of movement:
>    $$S_{\\\\text{solid}} &lt; S_{\\\\text{liquid}} &lt; S_{\\\\text{gas}}$$
>    * *Example:* The standard molar entropy of solid water is much lower than gaseous water:
>      * $S^\\\\theta\\\\text{[H}_2\\\\text{O(s)]} = 48\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>      * $S^\\\\theta\\\\text{[H}_2\\\\text{O(g)]} = 189\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> 2. **Temperature:** Increasing the temperature provides more energy quanta, which significantly increases the number of ways that energy can be distributed among the particles.
> 3. **Number of Particles:** Reactions that result in an increase in the number of moles (particularly gaseous moles) lead to a positive $\\\\Delta S_{\\\\text{system}}$ due to the increased number of possible arrangements.

> [!IMPORTANT]
> ### 🧮 Entropy Change of a Reaction ($\\\\Delta S^\\\\theta\\\\text{(system)}$)
> The standard entropy change of the system is calculated from the standard molar entropies of products and reactants:
> $$\\\\Delta S^\\\\theta\\\\text{(system)} = \\\\sum S^\\\\theta\\\\text{(products)} - \\\\sum S^\\\\theta\\\\text{(reactants)}$$
> * **Positive $\\\\Delta S\\\\text{(system)}$:** Entropy increases (system becomes more disordered — favourable).
> * **Negative $\\\\Delta S\\\\text{(system)}$:** Entropy decreases (system becomes more ordered — unfavourable).

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Entropy Change of System (CaCO₃ decomposition)
> **Question:** For the reaction $\\\\text{CaCO₃(s)} \\\\rightarrow \\\\text{CaO(s)} + \\\\text{CO₂(g)}$, use the data below to calculate the standard entropy change of the system ($\\\\Delta S^\\\\theta\\\\text{(system)}$).
> 
> | Substance | S° (J K⁻¹ mol⁻¹) |
> | :--- | :---: |
> | CaCO₃(s) | 92.9 |
> | CaO(s) | 39.7 |
> | CO₂(g) | 213.6 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the entropy equation:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = \\\\sum S^\\\\theta\\\\text{(products)} - \\\\sum S^\\\\theta\\\\text{(reactants)}$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = [S\\\\text{(CaO)} + S\\\\text{(CO₂)}] - S\\\\text{(CaCO₃)}$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = [39.7 + 213.6] - 92.9 = +160.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The positive $\\\\Delta S^\\\\theta\\\\text{(system)}$ is expected because one mole of gas ($\\\\text{CO₂}$) is produced from a solid reactant, significantly increasing disorder.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Entropy Change of System (Ammonia synthesis)
> **Question:** Calculate the standard entropy change of the system ($\\\\Delta S^\\\\theta\\\\text{(system)}$) for the reaction:
> $$\\\\text{N₂(g)} + 3\\\\text{H₂(g)} \\\\rightarrow 2\\\\text{NH₃(g)}$$
> Use the standard molar entropy values:
> * $S^\\\\theta\\\\text{[NH₃(g)]} = 192.3\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> * $S^\\\\theta\\\\text{[N₂(g)]} = 191.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> * $S^\\\\theta\\\\text{[H₂(g)]} = 130.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Write the equation for entropy change:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 2 \\\\times S^\\\\theta\\\\text{[NH₃(g)]} - \\\\left( S^\\\\theta\\\\text{[N₂(g)]} + 3 \\\\times S^\\\\theta\\\\text{[H₂(g)]} \\\\right)$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 2 \\\\times 192.3 - [191.6 + 3 \\\\times 130.6]$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 384.6 - [191.6 + 391.8]$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 384.6 - 583.4 = -198.8\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The negative $\\\\Delta S^\\\\theta\\\\text{(system)}$ value indicates that the system has become more ordered. This is expected because 4 moles of gaseous reactants combine to produce only 2 moles of gaseous product, leading to a decrease in molecular dispersal.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 3: Boltzmann Formula and the Third Law
> **Question:** 
> 1. Use the Boltzmann formula to calculate the absolute entropy of a perfectly ordered system with only $1$ possible microstate ($W = 1$).
> 2. Explain why raising the temperature of a perfect crystal from $0\\\\text{ K}$ to $298\\\\text{ K}$ increases its entropy.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate entropy for $W = 1$:**
> >    * Boltzmann formula: $S = k \\\\ln W$
> >    * Substitute values: $S = (1.38 \\\\times 10^{-23}) \\\\times \\\\ln(1) = 0\\\\text{ J K}^{-1}$
> > 
> > 2. **Explain temperature effect:**
> >    * At $0\\\\text{ K}$, particles have no thermal motion or vibration, resulting in a single arrangement ($W = 1$).
> >    * Raising the temperature provides energy quanta to the crystal lattice, causing the particles to vibrate.
> >    * This energy distribution increases the number of available microstates ($W &gt; 1$), thereby increasing the entropy.

> [!BOX]
> ### 📊 Reactions Involving Changes of State
> Since standard entropy follows the order solid < liquid < gas, any reaction that generates gaseous products from solid or liquid reactants leads to a large positive entropy change of the system ($\\\\Delta S\\\\text{(system)} > 0$).
> 
> * **Example 1: Ammonium carbonate and ethanoic acid:**
>   $$\\\\text{2CH₃COOH(l)} + \\\\text{(NH₄)₂CO₃(s)} \\\\rightarrow \\\\text{2CH₃COONH₄(aq)} + \\\\text{H₂O(l)} + \\\\text{CO₂(g)}$$
>   * This reaction is endothermic (temperature falls during the reaction).
>   * Therefore, $\\\\Delta S\\\\text{(surroundings)}$ is negative.
>   * However, a gas ($\\\\text{CO₂}$) is produced from a liquid and a solid, which causes a massive increase in system entropy.
>   * The magnitude of $\\\\Delta S\\\\text{(system)}$ is greater than the negative $\\\\Delta S\\\\text{(surroundings)}$, making $\\\\Delta S\\\\text{(total)}$ positive and the reaction spontaneous at room temperature.
> 
> * **Example 2: Hydrated barium hydroxide and ammonium chloride:**
>   $$\\\\text{Ba(OH)₂·8H₂O(s)} + \\\\text{2NH₄Cl(s)} \\\\rightarrow \\\\text{BaCl₂(s)} + \\\\text{10H₂O(l)} + \\\\text{2NH₃(g)}$$
>   * This is a highly endothermic reaction that occurs spontaneously at room temperature.
>   * The driving force is the massive increase in system entropy ($\\\\Delta S\\\\text{(system)} > 0$) as two solid reactants turn into a solid, a liquid, and 2 moles of ammonia gas (13 moles of products in total from 3 moles of reactants).

> [!BOX]
> ### ⚖️ Reactions Involving Changes in Moles of Gas
> If a reaction does not involve a change of state but changes the number of gas molecules, the system entropy change is dominated by the gas molecules:
> * **More moles of gas on product side:** System entropy increases ($\\\\Delta S\\\\text{(system)} > 0$).
> * **Fewer moles of gas on product side:** System entropy decreases ($\\\\Delta S\\\\text{(system)} < 0$).
> * *Example: Combustion of magnesium:*
>   $$\\\\text{Mg(s)} + \\\\frac{1}{2}\\\\text{O₂(g)} \\\\rightarrow \\\\text{MgO(s)}$$
>   * 1.5 moles of reactants (solid and gas) form 1 mole of solid product.
>   * Since gas is consumed, $\\\\Delta S\\\\text{(system)}$ is negative.
>   * However, the reaction is highly exothermic, meaning $\\\\Delta S\\\\text{(surroundings)}$ is large and positive, outweighing the negative system entropy, so $\\\\Delta S\\\\text{(total)} > 0$ and the reaction is spontaneous.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 4: Entropy Changes in Reactions Involving Changes of State
> **Question:** Hydrated barium hydroxide and solid ammonium chloride react endothermically according to the following equation:
> $$\\\\text{Ba(OH)}_2\\\\cdot8\\\\text{H}_2\\\\text{O(s)} + 2\\\\text{NH}_4\\\\text{Cl(s)} \\\\rightarrow \\\\text{BaCl}_2\\\\text{(s)} + 10\\\\text{H}_2\\\\text{O(l)} + 2\\\\text{NH}_3\\\\text{(g)}$$
> Explain, in terms of entropy changes of the system and surroundings, why this reaction is spontaneous at room temperature even though it is highly endothermic.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Analyze the system entropy change ($\\\\Delta S_{\\\\text{system}}$):**
> >    * On the reactant side, there are $3$ moles of highly ordered solids.
> >    * On the product side, there are $13$ moles of products, consisting of $1$ mole of solid, $10$ moles of liquid water, and $2$ moles of ammonia gas.
> >    * Transitioning from solid reactants to liquid and gaseous products results in a massive increase in disorder, so $\\\\Delta S_{\\\\text{system}}$ is large and positive.
> > 
> > 2. **Analyze the surroundings entropy change ($\\\\Delta S_{\\\\text{surroundings}}$):**
> >    * Since the reaction is highly endothermic ($\\\\Delta H &gt; 0$), it absorbs heat from the surroundings.
> >    * This decreases the thermal energy of the surroundings, making $\\\\Delta S_{\\\\text{surroundings}}$ negative.
> > 
> > 3. **Combine to evaluate spontaneity ($\\\\Delta S_{\\\\text{total}}$):**
> >    * For a reaction to be spontaneous, the total entropy change must be positive: $\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}} &gt; 0$
> >    * Because the positive increase in system entropy ($\\\\Delta S_{\\\\text{system}}$) is extremely large, it easily outweighs the negative surroundings entropy change ($\\\\Delta S_{\\\\text{surroundings}}$), resulting in a positive total entropy change.

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 5: Entropy Changes in Reactions Involving Moles of Gas
> **Question:** Predict the sign of the system entropy change ($\\\\Delta S_{\\\\text{system}}$) for the combustion of magnesium, and explain your answer:
> $$\\\\text{Mg(s)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{MgO(s)}$$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Compare physical states of reactants and products:**
> >    * Reactants consist of $1$ mole of solid magnesium ($\\\\text{Mg}$) and $0.5$ moles of gaseous oxygen ($\\\\text{O}_2$)
> >    * Products consist of $1$ mole of solid magnesium oxide ($\\\\text{MgO}$)
> > 
> > 2. **Identify the change in gaseous moles:**
> >    * Gaseous reactants = $0.5$ moles.
> >    * Gaseous products = $0$ moles.
> >    * The reaction involves a net consumption of gas (from $0.5$ moles to $0$ moles).
> > 
> > 3. **Determine the sign of $\\\\Delta S_{\\\\text{system}}$:**
> >    * Because gas molecules have much higher entropy than solids, consuming gas molecules significantly reduces the disorder of the system.
> >    * Therefore, the system entropy change is negative ($\\\\Delta S_{\\\\text{system}} < 0$)
 
&nbsp;
 
> [!EXAMPLE]
> #### 📝 Worked Example 6: Qualitative Predictions of System Entropy Change
> **Question:** Predict whether there is likely to be an increase, a decrease, or no change in the entropy of the system in each of the following reactions. In each case, give your reasons:
> 
> 1. $\\\\text{CuSO}_4\\\\cdot 5\\\\text{H}_2\\\\text{O(s)} \\\\rightarrow \\\\text{CuSO}_4\\\\text{(s)} + 5\\\\text{H}_2\\\\text{O(l)}$
> 
> 2. $\\\\text{HCl(g)} + \\\\text{NH}_3\\\\text{(g)} \\\\rightarrow \\\\text{NH}_4\\\\text{Cl(s)}$
> 
> 3. $\\\\text{SO}_2\\\\text{(g)} + \\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} \\\\rightarrow \\\\text{SO}_3\\\\text{(g)}$
> 
> 4. $\\\\text{Co(H}_2\\\\text{O)}_6^{2+}\\\\text{(aq)} + \\\\text{EDTA}^{2-}\\\\text{(aq)} \\\\rightarrow \\\\text{Co(EDTA)(aq)} + 6\\\\text{H}_2\\\\text{O(l)}$
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Dehydration of copper sulfate:**
> >    * **Prediction:** Increase in entropy ($\\\\Delta S_{\\\\text{system}} > 0$)
> >    * **Reason:** A solid reactant breaks down into a solid product and several moles of liquid ($5$ moles of $\\\\text{H}_2\\\\text{O}$). Liquids have a much higher degree of freedom and energy dispersal than solids, leading to an increase in system entropy.
> > 
> > 2. **Formation of ammonium chloride:**
> >    * **Prediction:** Decrease in entropy ($\\\\Delta S_{\\\\text{system}} < 0$)
> >    * **Reason:** Two moles of gas react to form a single mole of solid. Gases have maximum entropy, while solids have minimal entropy; thus, the disorder and energy dispersal decrease significantly.
> > 
> > 3. **Oxidation of sulfur dioxide:**
> >    * **Prediction:** Decrease in entropy ($\\\\Delta S_{\\\\text{system}} < 0$)
> >    * **Reason:** There is a reduction in the total number of moles of gas from $1.5$ moles on the reactant side to $1$ mole on the product side, resulting in a decrease in the available microstates and spatial distribution of gaseous particles.
> > 
> > 4. **Complexation with EDTA (The Chelate Effect):**
> >    * **Prediction:** Increase in entropy ($\\\\Delta S_{\\\\text{system}} > 0$)
> >    * **Reason:** Two aqueous reactant species react to form seven product species ($1$ complex ion + $6$ free water molecules). The significant increase in the number of free particles in solution increases the system entropy.
 
&nbsp;
 
> [!EXAMPLE]
> #### 📝 Worked Example 7: Entropy Change in the $\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI(g)}$ Reaction
> **Question:** This question is about the following reaction:
> $$\\\\text{H}_2\\\\text{(g)} + \\\\text{I}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{HI(g)}$$
> 
> 1. State why you might predict that the entropy change in the system ($\\\\Delta S_{\\\\text{system}}$) for this reaction is zero.
> 
> 2. The actual standard system entropy change ($\\\\Delta S^\\\\theta_{\\\\text{system}}$) for this reaction is $+22\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Explain why the system entropy change for this reaction is not zero.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Predicting zero entropy change:**
> >    * You might predict it to be zero because there is **no change in the total number of moles of gas** from reactants to products ($2$ moles of gas $\\\\rightarrow 2$ moles of gas).
> > 
> > 2. **Explaining the non-zero actual entropy change:**
> >    * The actual system entropy change is positive ($+22\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$) because different molecules ($\\\\text{HI}$) have different chemical structures, different vibrational modes, and more available microstates compared to the homonuclear diatomic molecules ($\\\\text{H}_2$ and $\\\\text{I}_2$), giving a slightly higher overall molar entropy.
> >    * Furthermore, the total entropy change ($\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}}$) will not be zero because it depends on both this positive system entropy change and the heat exchanged with the surroundings (enthalpy of reaction, which changes surroundings entropy).
`,
        keyPoints: [
            'Entropy is a state function, like enthalpy, so the path of the reaction does not matter.',
            'Gases have much higher molar entropies than liquids or solids due to greater molecular freedom.',
            'Changes in the number of gas molecules or states of matter are the primary factors determining system entropy changes.'
        ]
    },
    {
        id: 'entropy-surroundings-total-u4-l2',
        title: 'Total Entropy & Spontaneity',
        type: 'text',
        content: `
> [!NOTE]
> ### 🌍 System vs. Surroundings
> * **System:** The specific chemical species (reactants and products) taking part in the chemical reaction.
> * **Surroundings:** Everything else in the universe other than the reaction system (such as the solvent, the container, or the air).

> [!BOX]
> ### 🌌 The Second Law of Thermodynamics (Total Entropy)
> The Second Law dictates that for a process to be spontaneous (feasible), the total entropy change of the universe must increase:
> $$\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}} &gt; 0$$
> 
> * **$\\\\Delta S_{\\\\text{total}} &gt; 0$:** The reaction is feasible (spontaneous).
> * **$\\\\Delta S_{\\\\text{total}} &lt; 0$:** The reaction is not feasible under standard conditions.

> [!NOTE]
> ### 🌍 Entropy of the Surroundings ($\\\\Delta S_{\\\\text{surroundings}}$)
> The surroundings act as a reservoir for heat exchanged during a reaction:
> $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{\\\\Delta H^\\\\theta}{T}$$
> 
> * **Exothermic Reactions ($\\\\Delta H &lt; 0$):**
>   1. Heat is released to the surroundings.
>   2. The kinetic energy and motion of the surroundings particles increase.
>   3. Surroundings entropy change is positive ($\\\\Delta S_{\\\\text{surroundings}} &gt; 0$).
> 
> * **Endothermic Reactions ($\\\\Delta H &gt; 0$):**
>   1. Heat is absorbed from the surroundings.
>   2. The kinetic energy and motion of the surroundings particles decrease.
>   3. Surroundings entropy change is negative ($\\\\Delta S_{\\\\text{surroundings}} &lt; 0$).

> [!WARNING]
> ### ⚠️ Crucial Exam Note — Unit Matching
> Enthalpy change ($\\\\Delta H$) is usually measured in **kJ mol⁻¹**, whereas entropy values are in **J K⁻¹ mol⁻¹**. You MUST convert $\\\\Delta H$ from $\\\\text{kJ mol}^{-1}$ to $\\\\text{J mol}^{-1}$ (by multiplying by 1000) before calculating surroundings entropy change, otherwise the units will not match.

> [!BOX]
> ### 📋 Spontaneity Conditions Summary Table
> | ΔS(total) | ΔS(system) | ΔS(surroundings) | Conditions |
> | :---: | :---: | :---: | :--- |
> | $+$ | $+$ | $+$ | |
> | $+$ | $+$ | $-$ | ΔS(system) > ΔS(surroundings) |
> | $+$ | $-$ | $+$ | ΔS(system) < ΔS(surroundings) |
> | $-$ | $-$ | $-$ | |
> | $-$ | $+$ | $-$ | ΔS(system) < ΔS(surroundings) |
> | $-$ | $-$ | $+$ | ΔS(system) > ΔS(surroundings) |

> [!BOX]
> ### 🏭 Application: The Haber Process
> For the exothermic synthesis of ammonia:
> $$\\\\text{N}_2\\\\text{(g)} + 3\\\\text{H}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{NH}_3\\\\text{(g)}$$
> 
> 1. **Enthalpy Sign:** The reaction is exothermic, so $\\\\Delta H$ is negative.
> 2. **Temperature Effect:** At high temperatures, the surroundings term $-\\\\frac{\\\\Delta H}{T}$ becomes smaller in magnitude, making it less positive.
> 3. **Feasibility Result:** Consequently, $\\\\Delta S_{\\\\text{total}}$ becomes more negative (or less positive), making the reaction less feasible at high temperatures. This shifts the equilibrium position to the left, decreasing the equilibrium constant ($K_p$).

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Surroundings Entropy Change (Water synthesis)
> **Question:** Hydrogen gas is burned in oxygen to form liquid water at $298\\\\text{ K}$ according to the following equation:
> $$\\\\frac{1}{2}\\\\text{O}_2\\\\text{(g)} + \\\\text{H}_2\\\\text{(g)} \\\\rightarrow \\\\text{H}_2\\\\text{O(l)} \\\\quad \\\\Delta H = -286\\\\text{ kJ mol}^{-1}$$
> Calculate the standard surroundings entropy change ($\\\\Delta S^\\\\theta\\\\text{(surroundings)}$).
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert enthalpy change to $\\\\text{J mol}^{-1}$:**
> >    $$\\\\Delta H^\\\\theta = -286 \\\\times 1000 = -286000\\\\text{ J mol}^{-1}$$
> > 
> > 2. **Apply the surroundings formula:**
> >    $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{\\\\Delta H^\\\\theta}{T}$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(surroundings)} = -\\\\frac{-286000}{298} = +959.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1} \\\\approx +960\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$

&nbsp;

> [!EXAMPLE]
> #### 📝 Worked Example 2: Calculating Total Entropy Change (Water synthesis)
> **Question:** Using the data from the previous example and the table below, calculate the standard system entropy change ($\\\\Delta S^\\\\theta\\\\text{(system)}$) and the total entropy change ($\\\\Delta S^\\\\theta\\\\text{(total)}$) for the synthesis of water at $298\\\\text{ K}$:
> 
> | Substance | S° (J K⁻¹ mol⁻¹) |
> | :--- | :---: |
> | H₂(g) | 130.6 |
> | O₂(g) | 205 |
> | H₂O(l) | 69.9 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the system entropy change ($\\\\Delta S^\\\\theta\\\\text{(system)}$):**
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = S^\\\\theta\\\\text{[H}_2\\\\text{O(l)]} - \\\\left( S^\\\\theta\\\\text{[H}_2\\\\text{(g)]} + \\\\frac{1}{2}\\\\text{S}^\\\\theta\\\\text{[O}_2\\\\text{(g)]} \\\\right)$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(system)} = 69.9 - (130.6 + \\\\frac{1}{2} \\\\times 205) = -163.2\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 2. **Calculate the total entropy change ($\\\\Delta S^\\\\theta\\\\text{(total)}$):**
> >    $$\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta S^\\\\theta\\\\text{(system)} + \\\\Delta S^\\\\theta\\\\text{(surroundings)}$$
> >    $$\\\\Delta S^\\\\theta\\\\text{(total)} = -163.2 + 960 = +796.8\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 3. **Conclusion:** Since $\\\\Delta S^\\\\theta\\\\text{(total)}$ is positive ($+796.8 &gt; 0$), the reaction is thermodynamically spontaneous.

&nbsp;

> [!BOX]
> ### 🛡️ Thermodynamic vs. Kinetic Stability
> To predict whether a reaction will actually happen, we must separate its thermodynamic feasibility from its kinetic rate:
> 
> * **Spontaneous (Thermodynamically Feasible):** A reaction that has a positive total entropy change ($\\\\Delta S_{\\\\text{total}} > 0$). This occurs naturally without continuous external intervention once initiated.
> * **Kinetically Stable:** A reaction that is thermodynamically feasible but does not occur at a measurable rate because it has a very high activation energy ($E_a$) barrier.
> 
> **Example: Combustion of Methane**
> $$\\\\text{CH}_4\\\\text{(g)} + 2\\\\text{O}_2\\\\text{(g)} \\\\rightarrow 2\\\\text{H}_2\\\\text{O(l)} + \\\\text{CO}_2\\\\text{(g)}$$
> * **$\\\\Delta H^\\\\theta$** = $-890.3\\\\text{ kJ mol}^{-1}$
> * **$\\\\Delta S_{\\\\text{total}}$** = $+2.95\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$
> * *Explanation:* Despite being thermodynamically unstable (highly spontaneous and feasible), a mixture of methane and oxygen is kinetically stable at room temperature. It requires a spark to overcome the activation energy barrier ($E_a$) before the reaction can proceed.
 
> [!BOX]
> ### 🌡️ Temperature Dependence of Surroundings Entropy
> The increase in entropy resulting from supplying a certain amount of heat to an object depends on the temperature of the system:
> * Supplying the same amount of heat to a cold substance will increase its entropy **more** than supplying it to a hotter substance.
> * This explains why the temperature $T$ is in the denominator of the surroundings entropy formula:
>   $$\\\\Delta S_{\\\\text{surroundings}} = -\\\\frac{\\\\Delta H}{T}$$
 
&nbsp;
 
> [!EXAMPLE]
> #### 📝 Worked Example 3: Spontaneity of Freezing Water
> **Question:** Water freezes to ice according to the following equation:
> $$\\\\text{H}_2\\\\text{O(l)} \\\\rightarrow \\\\text{H}_2\\\\text{O(s)} \\\\quad \\\\Delta H = -6010\\\\text{ J mol}^{-1}$$
> Use the data in the table below to calculate whether water will freeze spontaneously at $+5\\\\text{ °C}$ ($278\\\\text{ K}$) and at $-5\\\\text{ °C}$ ($268\\\\text{ K}$).
> 
> | Substance | S° (J K⁻¹ mol⁻¹) |
> | :--- | :---: |
> | H₂O(l) | 69.9 |
> | H₂O(s) | 47.9 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Calculate the system entropy change ($\\\\Delta S_{\\\\text{system}}$):**
> >    $$\\\\Delta S_{\\\\text{system}} = S^\\\\theta\\\\text{[H}_2\\\\text{O(s)]} - S^\\\\theta\\\\text{[H}_2\\\\text{O(l)]}$$
> >    $$\\\\Delta S_{\\\\text{system}} = 47.9 - 69.9 = -22.0\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 2. **Calculate spontaneity at $-5\\\\text{ °C}$ ($268\\\\text{ K}$):**
> >    * Calculate surroundings entropy change:
> >      $$\\\\Delta S_{\\\\text{surroundings}} = -\\\\frac{-6010}{268} = +22.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}}$$
> >      $$\\\\Delta S_{\\\\text{total}} = -22.0 + 22.4 = +0.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * *Conclusion:* Since $\\\\Delta S_{\\\\text{total}} > 0$, freezing is spontaneous at $-5\\\\text{ °C}$
> > 
> > 3. **Calculate spontaneity at $+5\\\\text{ °C}$ ($278\\\\text{ K}$):**
> >    * Calculate surroundings entropy change:
> >      $$\\\\Delta S_{\\\\text{surroundings}} = -\\\\frac{-6010}{278} = +21.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * Calculate total entropy change:
> >      $$\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}}$$
> >      $$\\\\Delta S_{\\\\text{total}} = -22.0 + 21.6 = -0.4\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$$
> >    * *Conclusion:* Since $\\\\Delta S_{\\\\text{total}} < 0$, freezing is not spontaneous at $+5\\\\text{ °C}$
`,
        keyPoints: [
            'Always convert enthalpy change (ΔH) to J mol⁻¹ before calculating surroundings entropy change.',
            'For a reaction to be feasible, the total entropy change must be positive, even if the system entropy change is negative.',
            'A reaction may be thermodynamically feasible but fail to occur due to kinetic constraints (high activation energy).'
        ]
    },
    {
        id: 'gibbs-free-energy-u4-l2',
        title: 'Gibbs Free Energy & Equilibrium',
        type: 'text',
        content: `
> [!BOX]
> ### ⚡ Gibbs Free Energy ($G$)
> The **Gibbs Free Energy** ($G$) combines both enthalpy and entropy into a single criterion for predicting whether a reaction is thermodynamically feasible (spontaneous) under constant temperature and pressure.
> 
> It is derived directly from the total entropy equation by multiplying by $-T$:
> $$-T\\\\Delta S^\\\\theta\\\\text{(total)} = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta\\\\text{(system)}$$
> We define:
> $$\\\\Delta G^\\\\theta = -T\\\\Delta S^\\\\theta\\\\text{(total)}$$

> [!IMPORTANT]
> ### 🧮 Gibbs Free Energy Equation
> $$\\\\Delta G^\\\\theta = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> 
> Where:
> * **$\\\\Delta G^\\\\theta$** = Standard Gibbs free energy change ($\\\\text{kJ mol}^{-1}$)
> * **$\\\\Delta H^\\\\theta$** = Standard enthalpy change ($\\\\text{kJ mol}^{-1}$)
> * **$T$** = Temperature ($\\\\text{Kelvin}$)
> * **$\\\\Delta S^\\\\theta$** = Standard entropy change of the system ($\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$ — note: **convert** from J!)
> 
> **Feasibility Criterion:**
> * **$\\\\Delta G < 0$:** Reaction is thermodynamically feasible (spontaneous).
> * **$\\\\Delta G = 0$:** System is at equilibrium.
> * **$\\\\Delta G > 0$:** Reaction is not feasible under these conditions.

> [!WARNING]
> ### ⚠️ Common Pitfall — Unit Conversion
> $\\\\Delta H^\\\\theta$ is usually given in **kJ mol⁻¹** while $\\\\Delta S^\\\\theta$ is in **J K⁻¹ mol⁻¹**. You MUST convert $\\\\Delta S^\\\\theta$ to **kJ K⁻¹ mol⁻¹** by dividing by 1000 before substituting into the Gibbs equation, otherwise the calculation will be wrong by a factor of 1000.

> [!EXAMPLE]
> #### 📝 Worked Example 1: Gibbs Free Energy Calculation
> **Question:** A reaction has $\\\\Delta H^\\\\theta = -286\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = -163\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate $\\\\Delta G^\\\\theta$ at $298\\\\text{ K}$ and determine whether the reaction is feasible.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert $\\\\Delta S^\\\\theta$ to $\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$:**
> >    $$\\\\Delta S^\\\\theta = \\\\frac{-163}{1000} = -0.163\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$$
> > 
> > 2. **Apply the Gibbs equation:**
> >    $$\\\\Delta G^\\\\theta = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> >    $$\\\\Delta G^\\\\theta = -286 - (298 \\\\times -0.163)$$
> >    $$\\\\Delta G^\\\\theta = -286 + 48.57 = -237.4\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Feasibility:** Since $\\\\Delta G^\\\\theta$ is **negative**, the reaction is thermodynamically feasible at $298\\\\text{ K}$

> [!EXAMPLE]
> #### 📝 Worked Example 2: Finding Temperature for Feasibility
> **Question:** A reaction has $\\\\Delta H^\\\\theta = +180\\\\text{ kJ mol}^{-1}$ and $\\\\Delta S^\\\\theta = +360\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$. Calculate the minimum temperature for the reaction to become thermodynamically feasible.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Set $\\\\Delta G = 0$ at the boundary of feasibility:**
> >    $$0 = \\\\Delta H^\\\\theta - T\\\\Delta S^\\\\theta$$
> >    $$T = \\\\frac{\\\\Delta H^\\\\theta}{\\\\Delta S^\\\\theta}$$
> > 
> > 2. **Substitute values (converting $\\\\Delta S^\\\\theta$ to $\\\\text{kJ K}^{-1}\\\\text{ mol}^{-1}$):**
> >    $$\\\\Delta S^\\\\theta = \\\\frac{+360}{1000} = +0.360\\\\text{ kJ K}^{-1}\\\\text{ mol}^{-1}$$
> >    $$T = \\\\frac{+180}{+0.360} = 500\\\\text{ K}$$
> > 
> > 3. **Conclusion:** Above $500\\\\text{ K}$, $\\\\Delta G$ becomes negative and the reaction is feasible.

> [!NOTE]
> ### 🔗 The Thermodynamic Link to Equilibrium
> The standard Gibbs Free Energy change ($\\\\Delta G^\\\\theta$) represents the feasibility of a reaction starting with all reactants and products in their standard states. It is directly linked to the position of equilibrium and the equilibrium constant ($K$).
> 
> * **Thermodynamic Link:**
>   $$\\\\Delta G^\\\\theta = -RT \\\\ln K$$
>   * **$R$** is the gas constant ($8.31\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$)
>   * **$T$** is the temperature in Kelvin
>   * **$K$** is the thermodynamic equilibrium constant ($K_c$ or $K_p$)
>   * **$\\\\ln K$** is the natural logarithm of the equilibrium constant

> [!IMPORTANT]
> ### 🧮 Interpreting the Relationship
> 1. **Large Negative $\\\\Delta G^\\\\theta$ ($\\\\Delta G^\\\\theta < -30\\\\text{ kJ mol}^{-1}$):**
>    * $\\\\ln K$ must be positive and large.
>    * $K \\\\gg 1$, indicating that equilibrium lies heavily to the right (products are highly favoured).
>    * The reaction essentially goes to completion.
> 2. **Large Positive $\\\\Delta G^\\\\theta$ ($\\\\Delta G^\\\\theta > +30\\\\text{ kJ mol}^{-1}$):**
>    * $\\\\ln K$ must be negative and large.
>    * $K \\\\ll 1$, indicating that equilibrium lies heavily to the left (reactants are favoured).
>    * The reaction does not occur to any measurable extent.
> 3. **$\\\\Delta G^\\\\theta \\\\approx 0$:**
>    * $\\\\ln K \\\\approx 0$, meaning $K \\\\approx 1$
>    * Reactants and products are present in similar concentrations at equilibrium.

> [!EXAMPLE]
> #### 📝 Worked Example 3: Calculating K from Gibbs Free Energy
> **Question:** A reaction has a standard Gibbs Free Energy change ($\\\\Delta G^\\\\theta$) of $-5.80\\\\text{ kJ mol}^{-1}$ at $298\\\\text{ K}$. Calculate the value of the equilibrium constant $K$ at this temperature.
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Convert $\\\\Delta G^\\\\theta$ to $\\\\text{J mol}^{-1}$:**
> >    $$\\\\Delta G^\\\\theta = -5.80 \\\\times 1000 = -5800\\\\text{ J mol}^{-1}$$
> > 
> > 2. **Apply the thermodynamic link equation:**
> >    $$\\\\Delta G^\\\\theta = -RT \\\\ln K$$
> >    $$-5800 = -(8.31 \\\\times 298) \\\\ln K$$
> >    $$-5800 = -2476.38 \\\\ln K$$
> > 
> > 3. **Solve for $\\\\ln K$:**
> >    $$\\\\ln K = \\\\frac{-5800}{-2476.38} = 2.342$$
> > 
> > 4. **Calculate $K$ using the exponential function ($e^x$):**
> >    $$K = e^{2.342} = 10.4$$
> > 
> > 5. **Conclusion:** Since $K = 10.4$ (which is greater than 1), the products are favoured at equilibrium.
`,
        keyPoints: [
            'A negative ΔG guarantees thermodynamic feasibility, but does not mean the reaction is fast (kinetically controlled).',
            'At the temperature where ΔG = 0, the reaction is at equilibrium and both T·ΔS and ΔH are equal.',
            'Ensure ΔG° is converted to J mol⁻¹ when using the R value of 8.31 J K⁻¹ mol⁻¹ in standard thermodynamic calculations.',
            'A reaction with a negative ΔG° will have an equilibrium constant K greater than 1.'
        ]
    },
    {
        id: 'lattice-enthalpy-u4-l2',
        title: 'Lattice Enthalpy & Born-Haber Cycles',
        type: 'text',
        content: `
> [!NOTE]
> ### 🔗 Lattice Enthalpy
> **Lattice Formation Enthalpy:** The standard enthalpy change when **one mole** of an ionic lattice is formed from its gaseous ions under standard conditions.
> $$\\\\text{Na}^+\\\\text{(g)} + \\\\text{Cl}^-\\\\text{(g)} \\\\rightarrow \\\\text{NaCl(s)} \\\\quad \\\\Delta H_{\\\\text{latt}}^\\\\theta$$
> * Lattice formation enthalpy is always **exothermic** (negative) as the ionic lattice is more stable.
> * **Lattice Dissociation Enthalpy** is equal in magnitude but **endothermic** (positive) — the reverse process.
> 
> * **Example:** Standard lattice energy of $\\\\text{NaCl}$ is $-780\\\\text{ kJ mol}^{-1}$. For $\\\\text{MgCl₂}$, it is $-2526\\\\text{ kJ mol}^{-1}$ due to higher ionic charge on magnesium ($+2$) and more cation-anion interactions.

> [!BOX]
> ### 📋 Factors Affecting Lattice Enthalpy
> 1. **Ionic Charge:** Higher charges on the ions result in stronger electrostatic forces of attraction, releasing more energy when the lattice forms (more exothermic lattice energy).
> 2. **Ionic Radius (Distance between ion centres):** Smaller ions can pack closer together, which increases the electrostatic attraction and makes the lattice energy more exothermic.
> 
> | Compound | Inter-ionic Distance (nm) | Charges on Ions | Lattice Energy (kJ mol⁻¹) |
> | :--- | :---: | :---: | :---: |
> | LiF | 0.207 | +1, -1 | -1031 |
> | NaF | 0.235 | +1, -1 | -918 |
> | CaF₂ | 0.233 | +2, -1 | -2630 |
> | Li₂O | 0.214 | +1, -2 | -2814 |
> | MgO | 0.212 | +2, -2 | -3791 |
> | Al₂O₃ | 0.193 | +3, -2 | -15504 |

> [!BOX]
> ### 📋 Definitions for Born-Haber Cycle Steps
> 1. **Enthalpy of Atomisation ($\\\\Delta H_{\\\\text{at}}^\\\\theta$):** Enthalpy change when **one mole of gaseous atoms** is formed from the element in its standard state.
> 2. **First Ionisation Energy ($IE_1$):** Energy to remove the first electron from one mole of gaseous atoms.
> 3. **Second Ionisation Energy ($IE_2$):** Energy to remove the second electron from one mole of gaseous +1 ions.
> 4. **Electron Affinity ($EA$):** Energy change when one mole of gaseous atoms gains one electron to form gaseous anions.
>    * **Note:** $1\\\\text{st } EA$ is always **exothermic** (negative) because the electron is attracted to the nucleus.
>    * **Note:** $2\\\\text{nd } EA$ is always **endothermic** (positive) because energy is required to overcome the electrostatic repulsion between the negative anion and the incoming electron.
> 5. **Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):** Enthalpy change when one mole of compound is formed from elements in standard states.

> [!IMPORTANT]
> ### 🧮 Born-Haber Cycle (Hess's Law)
> By Hess's Law, the sum of all enthalpy changes around the Born-Haber cycle must equal zero:
> $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{metal}) + \\\\Delta H_{\\\\text{at}}(\\\\text{non-metal}) + IE_1 + EA + \\\\Delta H_{\\\\text{latt}}^\\\\theta$$

> [!BOX]
> ### 📊 Born-Haber Cycle Diagram for NaCl
> Below is the energy level diagram representing the Born-Haber cycle for sodium chloride. Endothermic steps go upwards, and exothermic steps go downwards:
> 
> ![Born-Haber Cycle for NaCl](/images/lessons/born_haber_nacl.svg)

> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Lattice Enthalpy for NaCl
> **Question:** Use the data below to calculate the lattice formation enthalpy of sodium chloride ($\\\\Delta H_{\\\\text{latt}}^\\\\theta$):
>
> | Enthalpy Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | ΔHf° (NaCl) | -411 |
> | ΔHat° (Na) | +108 |
> | ΔHat° (Cl) | +122 |
> | IE₁ (Na) | +496 |
> | EA₁ (Cl) | -349 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the Born-Haber equation:**
> >    $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Na}) + \\\\Delta H_{\\\\text{at}}(\\\\text{Cl}) + IE_1(\\\\text{Na}) + EA_1(\\\\text{Cl}) + \\\\Delta H_{\\\\text{latt}}^\\\\theta$$
> > 
> > 2. **Rearrange to find $\\\\Delta H_{\\\\text{latt}}^\\\\theta$:**
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = \\\\Delta H_f^\\\\theta - [\\\\Delta H_{\\\\text{at}}(\\\\text{Na}) + \\\\Delta H_{\\\\text{at}}(\\\\text{Cl}) + IE_1(\\\\text{Na}) + EA_1(\\\\text{Cl})]$$
> > 
> > 3. **Substitute values:**
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = -411 - [+108 + 122 + 496 + (-349)]$$
> >    $$\\\\Delta H_{\\\\text{latt}}^\\\\theta = -411 - [+377] = -788\\\\text{ kJ mol}^{-1}$$

> [!BOX]
> ### 🛡️ Theoretical vs. Experimental Lattice Energy
> Lattice energy can also be calculated theoretically using electrostatic theory, assuming the compound consists of purely spherical ions acting as point charges:
> * **Purely Ionic Model:** If the experimental lattice energy (Born-Haber cycle) and theoretical lattice energy agree closely, the bonding is almost **purely ionic** (e.g. NaCl, KI).
> * **Covalent Character:** If the experimental value is significantly **more exothermic** (more negative) than the theoretical value, it indicates the presence of **covalent character**:
>   * Covalent character strengthens the bonding, meaning more energy is released when the lattice forms.
>   * This occurs due to **polarisation** of the anion by the cation.
> * **Fajan\'s Rules for Polarisation:**
>   * **Cation:** High charge and small ionic radius (high charge density) increase polarizing power.
>   * **Anion:** High charge and large ionic radius make it more polarizable (its electron cloud is easily distorted).
>   * **Example:** AgI has significant covalent character because $\\\\text{Ag}^+$ is highly polarizing and $\\\\text{I}^-$ is large and easily polarized.

> [!BOX]
> ### ❓ The Thermodynamic Mystery of CaO
> It requires much less energy to form the $+1$ and $-1$ ions ($\\\\text{Ca}^+$ and $\\\\text{O}^-$) than to form the $+2$ and $-2$ ions ($\\\\text{Ca}^{2+}$ and $\\\\text{O}^{2-}$):
> * First Ionisation Energy of Ca: $+590\\\\text{ kJ mol}^{-1}$
> * Second Ionisation Energy of Ca: $+1735\\\\text{ kJ mol}^{-1}$ (almost triple!)
> * First Electron Affinity of O: $-141\\\\text{ kJ mol}^{-1}$ (exothermic)
> * Second Electron Affinity of O: $+798\\\\text{ kJ mol}^{-1}$ (highly endothermic!)
> 
> Therefore, why does calcium oxide exist as $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ rather than $\\\\text{Ca}^+\\\\text{(g)}\\\\text{O}^-\\\\text{(g)}$?

> [!BOX]
> ### 🧮 Comparing the Enthalpy Cycles
> Let's look at the overall standard enthalpy changes of formation calculated for both options:
> 
> 1. **For Calcium(I) Oxide ($\\\\text{Ca⁺O⁻(s)}$):**
>    * Gaseous ions: $\\\\text{Ca}^+\\\\text{(g)} + \\\\text{O}^-\\\\text{(g)}$
>    * Estimated lattice energy of formation: $-650\\\\text{ kJ mol}^{-1}$ (since charges are $+1/-1$)
>    * Standard Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):
>      $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Ca}) + IE_1(\\\\text{Ca}) + \\\\Delta H_{\\\\text{at}}(\\\\text{O}) + EA_1(\\\\text{O}) + \\\\Delta H_{\\\\text{latt}}(\\\\text{Ca}^+\\\\text{O}^-)$$
>      $$\\\\Delta H_f^\\\\theta = +178 + 590 + 249 - 141 - 650 = +226\\\\text{ kJ mol}^{-1}$$
>    * *Note:* Since $\\\\Delta H_f^\\\\theta$ is **endothermic**, the compound is thermodynamically unstable relative to its elements.
> 
> 2. **For Calcium(II) Oxide ($\\\\text{Ca²⁺O²⁻(s)}$):**
>    * Gaseous ions: $\\\\text{Ca}^{2+}\\\\text{(g)} + \\\\text{O}^{2-}\\\\text{(g)}$
>    * Born-Haber lattice energy of formation: $-3401\\\\text{ kJ mol}^{-1}$ (due to $+2/-2$ charges)
>    * Standard Enthalpy of Formation ($\\\\Delta H_f^\\\\theta$):
>      $$\\\\Delta H_f^\\\\theta = \\\\Delta H_{\\\\text{at}}(\\\\text{Ca}) + IE_1(\\\\text{Ca}) + IE_2(\\\\text{Ca}) + \\\\Delta H_{\\\\text{at}}(\\\\text{O}) + EA_1(\\\\text{O}) + EA_2(\\\\text{O}) + \\\\Delta H_{\\\\text{latt}}(\\\\text{Ca}^{2+}\\\\text{O}^{2-})$$
>      $$\\\\Delta H_f^\\\\theta = +178 + 590 + 1735 + 249 - 141 + 798 - 3401 = -635\\\\text{ kJ mol}^{-1}$$
>    * *Note:* This is a highly **exothermic process**, making $\\\\text{CaO}$ highly stable.

> [!IMPORTANT]
> ### 💡 The Conclusion
> The extra energy required to form the highly charged $\\\\text{Ca}^{2+}$ and $\\\\text{O}^{2-}$ ions is **more than compensated for** by the much larger (more exothermic) lattice energy of the $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ lattice ($-3401$ vs $-650\\\\text{ kJ mol}^{-1}$). This makes $\\\\text{Ca}^{2+}\\\\text{O}^{2-}$ energetically far more favourable than $\\\\text{Ca}^+\\\\text{O}^-$.
`,
        keyPoints: [
            'Lattice enthalpy becomes more exothermic (more negative) as ionic charges increase or ionic radii decrease.',
            'The Born-Haber cycle uses Hess\'s Law to determine lattice enthalpies which cannot be measured directly.',
            'Although forming doubly-charged ions requires much more energy, the resulting lattice is extremely stable, making oxides like CaO highly exothermic and thermodynamically stable.'
        ],
        equationVisualizer: {
            reactants: [['Na⁺(g)', '#f97316'], ['Cl⁻(g)', '#22c55e']],
            products: [['NaCl(s)', '#6366f1']],
            description: "Formation of the ionic lattice of NaCl from gaseous ions releases lattice enthalpy"
        }
    },
    {
        id: 'polarisation-covalent-character-u4-l2',
        title: 'Polarisation & Covalent Character',
        type: 'text',
        content: `
> [!NOTE]
> ### 🧪 Experimental vs. Theoretical Lattice Energies
> A comparison of the experimental lattice energy value (Born-Haber cycle) with the theoretical value (electrostatic theory) indicates the degree of covalent character in an ionic bond:
> * **Purely Ionic Model:** Theoretical calculations assume that ions are perfectly spherical point charges in contact, with no distortion of electron density.
> * **Covalent Bonding Evidence:** If the experimental lattice energy is significantly **more exothermic** (more negative) than the theoretical value, it indicates that the bonding has significant **covalent character**, which strengthens the bond beyond pure electrostatic attraction.
> 
> | Compound | Experimental Lattice Energy (kJ mol⁻¹) | Theoretical Lattice Energy (kJ mol⁻¹) | Percentage Difference |
> | :--- | :---: | :---: | :---: |
> | NaF | -918 | -912 | 0.66% |
> | NaCl | -780 | -770 | 1.30% |
> | NaBr | -742 | -735 | 0.95% |
> | AgF | -958 | -920 | 4.13% |
> | AgCl | -905 | -833 | 8.64% |
> | AgBr | -891 | -816 | 9.19% |

> [!BOX]
> ### 🌌 Polarisation of Anions (Fajan's Rules)
> Covalent character arises when the positive charge of the cation attracts the outer electrons of the anion, pulling them towards itself and distorting the anion's electron cloud.
> 
> ![Polarisation of Anions](/images/lessons/polarisation_anions.svg)

> 
> Polarisation is increased by:
> 1. **High charge and small size of the cation:** A small cation with a high charge (e.g. $\\\\text{Mg}^{2+}$ or $\\\\text{Al}^{3+}$) has a very **high charge density**, giving it high polarizing power.
>    $$\\\\text{Charge density} \\\\propto \\\\frac{\\\\text{charge}}{r^2}$$
> 2. **High charge and large size of the anion:** A large anion (e.g. $\\\\text{I}^-$) has its outer electrons far from the nucleus, shielded by inner shells. This makes the electron cloud highly **polarisable** (easily distorted).

> [!BOX]
> ### 🔬 Case Study: The Covalency of Silver Compounds (d¹⁰ configuration)
> Even though $\\\\text{Ag}^+$ has a lower charge density than $\\\\text{Na}^+$ (due to its larger ionic radius: $0.126\\\\text{ nm}$ for $\\\\text{Ag}^+$ vs $0.095\\\\text{ nm}$ for $\\\\text{Na}^+$), silver halides exhibit **far greater covalent character** than sodium halides:
> * Na⁺ has a **$1s^2 2s^2 2p^6$** noble gas electronic configuration.
> * Ag⁺ has a **$[\\\\text{Kr}] 4d^{10}$** electronic configuration.
> * **Shielding Effect:** The outer $d^{10}$ shell of silver is much less effective at shielding the positive nuclear charge than the $p^6$ shell of sodium.
> * Consequently, the silver nucleus exerts a much stronger electrostatic pull on the anion's electron cloud, leading to significantly greater polarisation and covalent character.
> * For the same reason, **zinc compounds** ($\\\\text{Zn}^{2+}$ which has a $d^{10}$ shell) also exhibit high covalent character.
`,
        keyPoints: [
            'Cation polarizing power increases with high charge and small ionic radius (high charge density).',
            'Anion polarisability increases with high charge and large ionic radius.',
            'Cations with d¹⁰ outer configurations (like Ag⁺ and Zn²⁺) have poorer shielding, resulting in unexpectedly high polarizing power.'
        ]
    },
    {
        id: 'enthalpy-solution-u4-l2',
        title: 'Enthalpy of Solution & Dissolving Process',
        type: 'text',
        content: `
> [!NOTE]
> ### 💧 Enthalpy of Solution ($\\\\Delta H_{\\\\text{sol}}^\\\\theta$)
> The standard enthalpy of solution is the enthalpy change when **one mole** of solute dissolves in excess water to form an infinitely dilute solution:
> $$\\\\text{NaCl(s)} \\\\rightarrow \\\\text{Na}^+\\\\text{(aq)} + \\\\text{Cl}^-\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{sol}}^\\\\theta$$
> * Can be exothermic or endothermic depending on the relative magnitudes of lattice enthalpy and hydration enthalpy.
> * **Infinite Dilution:** It is important to specify infinite dilution because as solution becomes more diluted, the ions move further apart (endothermic) and also become more hydrated (exothermic). Infinite dilution is the point where further dilution has no measurable effect on enthalpy.

> [!BOX]
> ### 🌊 Enthalpy of Hydration ($\\\\Delta H_{\\\\text{hyd}}^\\\\theta$)
> The enthalpy of hydration is the enthalpy change when **one mole of gaseous ions** dissolves in excess water to form an infinitely dilute solution:
> $$\\\\text{Na}^+\\\\text{(g)} \\\\xrightarrow{\\\\text{water}} \\\\text{Na}^+\\\\text{(aq)} \\\\quad \\\\Delta H_{\\\\text{hyd}}^\\\\theta$$
> * Always **exothermic** (negative) as ion-dipole interactions with water release energy.
> * **Attraction:** Oxygen atoms ($\\\\delta^-$) in water are attracted to cations, and hydrogen atoms ($\\\\delta^+$) are attracted to anions (or form hydrogen bonds with them).
> * **Factors Affecting Hydration Enthalpy:**
>   1. **Ionic Charge:** Hydration enthalpy is much more negative for doubly charged ions (e.g. $\\\\text{Mg}^{2+}$ is $-1920\\\\text{ kJ mol}^{-1}$) than singly charged ions (e.g. $\\\\text{Na}^+$ is $-406\\\\text{ kJ mol}^{-1}$) due to stronger electrostatic attraction to water.
>   2. **Ionic Radius:** Decreases down a group (becomes less negative) because larger ions have a lower charge density and weaker attraction to water.
> 
> | Ion | Ionic Radius (nm) | Hydration Enthalpy (kJ mol⁻¹) |
> | :--- | :---: | :---: |
> | Na⁺ | 0.102 | -406 |
> | K⁺ | 0.138 | -322 |
> | Rb⁺ | 0.149 | -301 |
> | Mg²⁺ | 0.072 | -1920 |
> | Ca²⁺ | 0.100 | -1650 |
> | Sr²⁺ | 0.113 | -1480 |
> | Cl⁻ | 0.180 | -363 |
> | Br⁻ | 0.195 | -335 |
> | I⁻ | 0.215 | -293 |

> [!IMPORTANT]
> ### 🧮 Enthalpy Cycle for Solution
> Using Hess's Law, the relationship between lattice enthalpy, hydration enthalpies, and enthalpy of solution is best shown by an energy level cycle:
> $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = -\\\\Delta H_{\\\\text{latt}}\\\\text{(formation)}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{cation}) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{anion})$$
> 
> ![Dissolution Enthalpy Cycle of NaCl](/images/lessons/dissolution_cycle_nacl.svg)


> [!EXAMPLE]
> #### 📝 Worked Example 1: Calculating Enthalpy of Solution for NaCl
> **Question:** Calculate the enthalpy of solution for $\\\\text{NaCl}$ given the following data:
>
> | Term | Value (kJ mol⁻¹) |
> | :--- | :---: |
> | Lattice dissociation enthalpy of NaCl | +788 |
> | ΔHhyd° (Na⁺) | -406 |
> | ΔHhyd° (Cl⁻) | -363 |
> 
> > [!TIP]
> > **🔑 Step-by-step Solution:**
> > 
> > 1. **Apply the enthalpy cycle:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = \\\\Delta H_{\\\\text{latt}}\\\\text{(dissociation)}^\\\\theta + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Na}^+) + \\\\Delta H_{\\\\text{hyd}}^\\\\theta(\\\\text{Cl}^-)$$
> > 
> > 2. **Substitute values:**
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = (+788) + (-406) + (-363)$$
> >    $$\\\\Delta H_{\\\\text{sol}}^\\\\theta = +788 - 769 = +19\\\\text{ kJ mol}^{-1}$$
> > 
> > 3. **Interpretation:** The slightly endothermic value indicates the lattice is slightly stronger than the combined hydration enthalpies. NaCl still dissolves because entropy increases significantly.

> [!BOX]
> ### 🧼 Why Do Some Solids Dissolve? (Entropy & Enthalpy balance)
> When an ionic solid dissolves in water, the total entropy change is:
> $$\\\\Delta S_{\\\\text{total}} = \\\\Delta S_{\\\\text{system}} - \\\\frac{\\\\Delta H_{\\\\text{sol}}}{T}$$
> * **Entropy of System ($\\\\Delta S_{\\\\text{system}}$):** Usually positive because the highly ordered lattice structure is broken down, although the water molecules become slightly more ordered around the hydrated ions (reducing water entropy).
> * **Example: Dissolving Ammonium Nitrate ($\\\\text{NH₄NO₃}$):**
>   $$\\\\text{NH₄NO₃(s)} \\\\rightarrow \\\\text{NH₄⁺(aq)} + \\\\text{NO₃⁻(aq)} \\\\quad \\\\Delta H_{\\\\text{sol}} = +25.8\\\\text{ kJ mol}^{-1}$$
>   * $\\\\Delta S_{\\\\text{system}} = +108.7\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * $\\\\Delta S_{\\\\text{surroundings}} = -\\\\frac{+25800}{298} = -86.6\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * $\\\\Delta S_{\\\\text{total}} = +108.7 - 86.6 = +22.1\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$
>   * Since $\\\\Delta S_{\\\\text{total}}$ is positive, ammonium nitrate dissolves spontaneously at $298\\\\text{ K}$ despite being endothermic.

> [!BOX]
> ### 📋 Table A: Thermodynamic data for dissolving ionic solids at 298 K
> | Ionic Solid | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | ΔSsys (J K⁻¹ mol⁻¹) | ΔStotal (J K⁻¹ mol⁻¹) | Solubility |
> | :--- | :---: | :---: | :---: | :---: | :---: |
> | NaCl | +4 | -13 | +43 | +30 | soluble |
> | NH₄Cl | +15 | -50 | +167 | +117 | soluble |
> | AgCl | +66 | -221 | +33 | -188 | insoluble |
> | MgSO₄ | -91 | +305 | -213 | +92 | soluble |
> | CuSO₄ | -73 | +245 | -192 | +53 | soluble |
> | CaSO₄ | -18 | +60 | -145 | -85 | insoluble |
`,
        keyPoints: [
            'Enthalpy of hydration is always exothermic because water molecules form ion-dipole interactions with the dissolved ions.',
            'Solubilities of ionic solids are determined by the balance of enthalpy of solution and system entropy changes.'
        ]
    },
    {
        id: 'group2-solubility-trends-u4-l2',
        title: 'Group 2 Solubility Trends',
        type: 'text',
        content: `
> [!NOTE]
> ### 📉 Solubility Trends in Group 2 Compounds
> In Group 2, the solubility of hydroxides and sulfates follows opposite trends down the group:
> * **Metal Hydroxides:** Solubility **increases** down the group.
> * **Metal Sulfates:** Solubility **decreases** down the group.

> [!BOX]
> ### 🧪 Solubility of Group 2 Metal Hydroxides
> | Hydroxide | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | Hydrated Cation | Cation Entropy (J K⁻¹ mol⁻¹) |
> | :--- | :---: | :---: | :---: | :---: |
> | Mg(OH)₂ | +3 | -10 | Mg²⁺(aq) | -138 |
> | Ca(OH)₂ | -16 | +54 | Ca²⁺(aq) | -53 |
> | Sr(OH)₂ | -46 | +154 | Sr²⁺(aq) | -33 |
> | Ba(OH)₂ | -52 | +174 | Ba²⁺(aq) | +10 |
> 
> * **Explanation of the Trend:**
>   1. **Enthalpy Factor:** Down the group, $\\\\Delta_{\\\\text{sol}}H^\\\\theta$ becomes **more negative** (more exothermic) because the small size of the hydroxide ion ($\\\\text{OH}^-$) causes lattice enthalpy to decrease faster than the cation hydration enthalpy. This means $\\\\Delta S^\\\\theta_{\\\\text{surroundings}}$ becomes **more positive**, which favours solubility.
>   2. **Entropy Factor:** Larger cations have a weaker ordering effect on surrounding water molecules. Therefore, the standard entropy of the hydrated cation becomes **less negative** (more positive down the group), increasing $\\\\Delta S^\\\\theta_{\\\\text{system}}$, which also favours solubility.
>   3. **Conclusion:** Since both the enthalpy and entropy factors favour dissolution, the solubility of Group 2 metal hydroxides **increases** down the group (from $\\\\text{Mg(OH)}_2$ to $\\\\text{Ba(OH)}_2$).

> [!BOX]
> ### 🧪 Solubility of Group 2 Metal Sulfates
> | Sulfate | ΔHsol (kJ mol⁻¹) | ΔSsurr (J K⁻¹ mol⁻¹) | Hydrated Cation | Cation Entropy (J K⁻¹ mol⁻¹) |
> | :--- | :---: | :---: | :---: | :---: |
> | MgSO₄ | -91 | +305 | Mg²⁺(aq) | -138 |
> | CaSO₄ | -18 | +60 | Ca²⁺(aq) | -53 |
> | SrSO₄ | -9 | +30 | Sr²⁺(aq) | -33 |
> | BaSO₄ | +19 | -63 | Ba²⁺(aq) | +10 |
> 
> * **Explanation of the Trend:**
>   1. **Enthalpy Factor:** Down the group, $\\\\Delta_{\\\\text{sol}}H^\\\\theta$ becomes **less negative** (shifting toward endothermic) because the sulfate ion ($\\\\text{SO}_4^{2-}$) is very large, causing lattice enthalpy to decrease very little while cation hydration enthalpy drops significantly. This makes $\\\\Delta S^\\\\theta_{\\\\text{surroundings}}$ **less positive**, which favours insolubility.
>   2. **Entropy Factor:** Although the cation hydration entropy becomes **more positive** down the group (favouring solubility), the decrease in surroundings entropy ($\\\\Delta S^\\\\theta_{\\\\text{surroundings}}$) is much larger than the increase in system entropy ($\\\\Delta S^\\\\theta_{\\\\text{system}}$).
>   3. **Conclusion:** The dominant enthalpy/surroundings factor overrides the system entropy, causing the solubility of Group 2 metal sulfates to **decrease** down the group (from $\\\\text{MgSO}_4$ to $\\\\text{BaSO}_4$).
`,
        keyPoints: [
            'For small anions like OH⁻, lattice enthalpy decreases faster than hydration enthalpy down the group, increasing solubility.',
            'For large anions like SO₄²⁻, lattice enthalpy changes very little while hydration enthalpy drops significantly down the group, decreasing solubility.'
        ]
    }
];
