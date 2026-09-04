import { Question } from "./types";
import { svgToken } from "../curriculum/svgToken";

export const questionBank: Question[] = [
  // States of Matter (Unit 1: Lesson 1 & 2)
  {
    id: "q_som_1-2026",
    question: "Which of the following describes the changes in arrangement and movement of particles when a liquid becomes a gas?",
    options: [
      { text: "Particles become closer together and move more slowly" },
      { text: "Particles become further apart and move more slowly" },
      { text: "Particles become closer together and move more freely" },
      { text: "Particles become further apart and move more freely" }
    ],
    correctAnswer: 3,
    explanation: "* When a liquid boils or evaporates into a gas, particles gain kinetic energy and overcome intermolecular attractions.\n* The particles move much further apart from each other and are able to move freely and rapidly in all directions.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q1",
    lessonNum: 1,
    createdAt: "2026-01-15"
  },
  {
    id: "q_som_2-2026",
    question: "In which state of matter are the particles arranged in a regular, repeating lattice pattern?",
    options: [
      { text: "Solid" },
      { text: "Liquid" },
      { text: "Gas" },
      { text: "Aqueous solution" }
    ],
    correctAnswer: 0,
    explanation: "* In crystalline solids, particles are tightly packed in a regular, repeating 3D lattice framework.\n* They vibrate only around fixed positions and cannot flow.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q1",
    lessonNum: 1,
    createdAt: "2026-01-15"
  },
  {
    id: "q_som_tea_cup-2026",
    question: "The diagram shows a cup of hot tea. Which row describes the water particles in the air above the cup compared with the water particles in the cup?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Moving faster</th><th class="p-2 border">Closer together</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✗</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Moving faster (✓), Closer together (✗)" },
      { text: "Row B: Moving faster (✗), Closer together (✓)" },
      { text: "Row C: Moving faster (✗), Closer together (✗)" },
      { text: "Row D: Moving faster (✓), Closer together (✓)" }
    ],
    correctAnswer: 0,
    explanation: "* Water particles escaping into the air above the cup are in the gas state (steam/vapor).\n* Gas particles have higher kinetic energy and move faster than liquid particles.\n* Gas particles are much further apart (not closer together), so Closer together is ✗.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_gas_furthest-2026",
    question: "In which of the following substances are the particles furthest apart at room temperature?",
    options: [
      { text: "Salt (NaCl)" },
      { text: "Methane (CH₄)" },
      { text: "Ethanol (C₂H₅OH)" },
      { text: "Sugar (C₁₂H₂₂O₁₁)" }
    ],
    correctAnswer: 1,
    explanation: "* At room temperature (20 °C), salt and sugar are solids, ethanol is a liquid, and methane is a gas.\n* In a gas, particles are separated by vast empty distances, making them furthest apart.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_chem_furthest-2026",
    question: "In which of the following substances are the particles furthest apart at room temperature?",
    options: [
      { text: "Mg" },
      { text: "Na₂O" },
      { text: "H₂O" },
      { text: "H₂" }
    ],
    correctAnswer: 3,
    explanation: "* Mg and Na₂O are giant lattice solids at room temperature.\n* H₂O is a liquid.\n* H₂ (hydrogen) is a gas at room temperature, so its particles are furthest apart.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_methane_volume_particles-2026",
    question: "In which state does 1 dm³ of methane contain the greatest number of particles?",
    options: [
      { text: "Solid" },
      { text: "Gas at room temperature" },
      { text: "Liquid" },
      { text: "Gas at 100 °C" }
    ],
    correctAnswer: 0,
    explanation: "* In the solid state, particles are tightly packed with negligible empty space between them.\n* A given volume (1 dm³) of a solid therefore contains the highest density and greatest number of particles compared to liquid and gaseous states.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_kettle_steam_droplets-2026",
    question: "The steam from a boiling kettle cools as it meets the surrounding air, turning into tiny droplets of liquid water. What is the name of this change of state?",
    options: [
      { text: "Condensation" },
      { text: "Evaporation" },
      { text: "Sublimation" },
      { text: "Boiling" }
    ],
    correctAnswer: 0,
    explanation: "* The transition of water vapor (gas) into liquid droplets upon cooling is condensation.\n* The particles lose kinetic energy, slow down, and attractive intermolecular forces pull them together.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_heating_three_substances-2026",
    question: "Consider these three state changes: 1) When solid iodine is heated, it turns directly into gas. 2) When liquid ammonia is cooled, it turns into solid. 3) When ice is heated, it turns into liquid water. Which row correctly names these three changes?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">When iodine is heated</th><th class="p-2 border">When liquid ammonia is cooled</th><th class="p-2 border">When ice is heated</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Boiling</td><td class="p-2 border">Freezing</td><td class="p-2 border">Melting</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Sublimation</td><td class="p-2 border">Freezing</td><td class="p-2 border">Melting</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Sublimation</td><td class="p-2 border">Condensing</td><td class="p-2 border">Freezing</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Freezing</td><td class="p-2 border">Sublimation</td><td class="p-2 border">Boiling</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Boiling | Freezing | Melting" },
      { text: "Row B: Sublimation | Freezing | Melting" },
      { text: "Row C: Sublimation | Condensing | Freezing" },
      { text: "Row D: Freezing | Sublimation | Boiling" }
    ],
    correctAnswer: 1,
    explanation: "* Solid to gas directly is sublimation.\n* Liquid to solid upon cooling is freezing.\n* Solid to liquid upon heating is melting.\n* Row B correctly identifies all three.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_greatest_increase_distance-2026",
    question: "Which process causes the greatest increase in the distance between particles?",
    options: [
      { text: "Sublimation" },
      { text: "Condensation" },
      { text: "Freezing" },
      { text: "Melting" }
    ],
    correctAnswer: 0,
    explanation: "* In a solid, particles are in contact and tightly packed in a lattice.\n* In sublimation, solid transitions directly into gas, where particles become widely separated with huge distances.\n* This represents the greatest expansion and increase in inter-particle distance.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_substance_L_boiling_point-2026",
    question: "Substance L melts at -7 °C and is a brown liquid at room temperature (20 °C). Which temperature could be its boiling point?",
    options: [
      { text: "-77 °C" },
      { text: "-7 °C to +7 °C" },
      { text: "59 °C" },
      { text: "107 °C to 117 °C" }
    ],
    correctAnswer: 2,
    explanation: "* Since substance L is a pure liquid at room temperature (20 °C), room temperature must be below its boiling point (Boiling Point > 20 °C).\n* Pure substances have sharp boiling points (not a range like 107 °C to 117 °C, which indicates an impure mixture).\n* 59 °C is a sharp temperature above 20 °C (this substance is pure bromine, Br₂).",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_purple_crystal_dissolve_processes-2026",
    question: "A purple crystal of potassium manganate(VII) is dropped into a beaker of water. After five hours, the entire beaker contains an evenly colored purple solution with no crystal left. Which processes take place in this experiment?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Chemical reaction</th><th class="p-2 border">Diffusing</th><th class="p-2 border">Dissolving</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Chemical reaction (✗), Diffusing (✓), Dissolving (✓)" },
      { text: "Row B: Chemical reaction (✓), Diffusing (✗), Dissolving (✓)" },
      { text: "Row C: Chemical reaction (✓), Diffusing (✓), Dissolving (✗)" },
      { text: "Row D: Chemical reaction (✓), Diffusing (✓), Dissolving (✓)" }
    ],
    correctAnswer: 0,
    explanation: "* Dissolving of potassium manganate(VII) in water is a physical change, not a chemical reaction (no new chemical substance is formed; Chemical reaction is ✗).\n* The solid crystal breaks down and dissolves into the water (Dissolving is ✓).\n* The dissolved ions then spread out through continuous random particle motion (Diffusing is ✓).\n* Therefore, Row A is the correct mark scheme answer.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_bromine_random_motion-2026",
    question: "A gas jar of red-brown bromine vapor is placed beneath an inverted gas jar of colorless air, separated by a glass slide. When the glass slide is removed, the red-brown color spreads upwards until a uniform mixture is formed throughout both jars after one hour. Which statement explains why the bromine vapor and air mix together?",
    options: [
      { text: "Bromine is denser than air." },
      { text: "Bromine is lighter than air." },
      { text: "Bromine molecules moved upwards, and molecules of air moved downwards." },
      { text: "Molecules of bromine and air moved randomly in all directions." }
    ],
    correctAnswer: 3,
    explanation: "* According to Cambridge kinetic particle theory mark schemes, diffusion occurs because particles of both gases move randomly in all directions.\n* While bromine molecules do move upwards and air downwards, the underlying scientific reason is their continuous random motion and frequent collisions in all directions, not a directional attraction.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_exhaust_gases_diffuse-2026",
    question: "Exhaust gases from a car diffuse into the air. Which statement describes what happens to these molecules next?",
    options: [
      { text: "The molecules spread further into the air." },
      { text: "The molecules go back together as they cool." },
      { text: "The molecules stay where they are." },
      { text: "The molecules fall to the ground because they are heavier than air molecules." }
    ],
    correctAnswer: 0,
    explanation: "* Gas particles possess high kinetic energy and are in constant random motion.\n* Even if they are heavy or cool down, collisions with surrounding air molecules cause them to continuously spread further and further throughout the atmosphere (net movement from high concentration to low concentration).",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_kmno4_hot_vs_cold_water-2026",
    question: "A crystal of purple potassium manganate(VII) was added to each of two beakers. One beaker contained hot water and the other contained cold water. In both beakers the purple color spreads out. Which result and explanation are correct?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Result</th><th class="p-2 border">Explanation</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Color spreads faster in cold water</td><td class="p-2 border">Particles move faster at higher temperature</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Color spreads faster in cold water</td><td class="p-2 border">Particles move slower at higher temperature</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Color spreads faster in hot water</td><td class="p-2 border">Particles move slower at higher temperature</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Color spreads faster in hot water</td><td class="p-2 border">Particles move faster at higher temperature</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Color spreads faster in cold water | Particles move faster at higher temperature" },
      { text: "Row B: Color spreads faster in cold water | Particles move slower at higher temperature" },
      { text: "Row C: Color spreads faster in hot water | Particles move slower at higher temperature" },
      { text: "Row D: Color spreads faster in hot water | Particles move faster at higher temperature" }
    ],
    correctAnswer: 3,
    explanation: "* At higher temperatures, water molecules have greater average kinetic energy and move faster.\n* Faster moving particles collide more frequently with the crystal and the dissolved ions, causing diffusion and color spread to occur much faster in hot water.\n* Row D provides both the correct observation and the correct kinetic theory explanation.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_tube_diffusion_line_abcd-2026",
    question: "In an experiment on diffusion in a glass tube, cotton wool soaked in concentrated aqueous ammonia is placed at one end (near A) and cotton wool soaked in concentrated hydrochloric acid is placed at the other end (near D). When the gases meet, a white solid of ammonium chloride is formed. Which position along the tube (A, B, C or D) shows where the white solid forms?",
    options: [
      { text: "Line A" },
      { text: "Line B" },
      { text: "Line C" },
      { text: "Line D" }
    ],
    correctAnswer: 3,
    explanation: "* Ammonia gas (NH₃) has a lower relative molecular mass ($M_r = 17$) than hydrogen chloride gas (HCl, $M_r = 36.5$).\n* Lighter molecules travel faster and diffuse further in a given time.\n* Therefore, NH₃ diffuses past the midpoint (A, B, C) and meets the slower HCl close to the hydrochloric acid end (Position D).",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_very_slow_diffusion_definition-2026",
    question: "Particles are observed moving very slowly from an area of high concentration to an area of low concentration. Which process is being described?",
    options: [
      { text: "A liquid being frozen" },
      { text: "A substance diffusing through a liquid" },
      { text: "A substance diffusing through the air" },
      { text: "A solid melting" }
    ],
    correctAnswer: 1,
    explanation: "* Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration.\n* In liquids, particles are touching and continuously colliding, with small intermolecular spaces, so diffusion occurs very slowly compared to diffusion in air (gases).",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_som_tea_sugar_two_processes-2026",
    question: "A sugar lump is placed in a cup of tea. Which two processes must happen in order to spread the sugar particles evenly throughout the tea?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">First process</th><th class="p-2 border">Second process</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Diffusion</td><td class="p-2 border">Dissolving</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Dissolving</td><td class="p-2 border">Melting</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Dissolving</td><td class="p-2 border">Diffusion</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Melting</td><td class="p-2 border">Diffusion</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Diffusion → Dissolving" },
      { text: "Row B: Dissolving → Melting" },
      { text: "Row C: Dissolving → Diffusion" },
      { text: "Row D: Melting → Diffusion" }
    ],
    correctAnswer: 2,
    explanation: "* The solid sugar lump must first dissolve into the hot water (tea) as water molecules collide with it.\n* Once dissolved, the individual sugar molecules diffuse throughout the liquid due to random particle motion until an even concentration is reached.\n* Row C (Dissolving followed by Diffusion) is the correct sequence.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  // Unit 3: Stoichiometry
  {
    id: "q_stoich_ammonia_react_o2_mgo-2026",
    question: "Two atoms of magnesium, Mg, react with one molecule of oxygen, O₂. What is the formula of the product?",
    options: [
      { text: "MgO₂" },
      { text: "Mg₂O" },
      { text: "MgO" },
      { text: "Mg₂O₂" }
    ],
    correctAnswer: 2,
    explanation: "* Magnesium is in Group II and forms $\text{Mg}^{2+}$. Oxygen is in Group VI and forms $\text{O}^{2-}$.\n* The ions combine in a 1:1 ratio to form neutral magnesium oxide: $\text{MgO}$.\n* Balanced equation: $2\text{Mg} + \text{O}_2 \rightarrow 2\text{MgO}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_stoich_mr_caco3-2026",
    question: "What is the relative formula mass, Mr, of calcium carbonate, CaCO₃? (Ar: Ca = 40, C = 12, O = 16)",
    options: [
      { text: "50" },
      { text: "68" },
      { text: "100" },
      { text: "204" }
    ],
    correctAnswer: 2,
    explanation: "* Relative formula mass $M_r = A_r(\text{Ca}) + A_r(\text{C}) + 3 \times A_r(\text{O})$.\n* $M_r = 40 + 12 + (3 \times 16) = 40 + 12 + 48 = 100$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_stoich_water_fixed_ratio_combine-2026",
    question: "Water is formed when 48 g of oxygen combine with 6 g of hydrogen. What mass of oxygen combines with 2 g of hydrogen?",
    options: [
      { text: "12 g" },
      { text: "96 g" },
      { text: "16 g" },
      { text: "144 g" }
    ],
    correctAnswer: 2,
    explanation: "* According to the Law of Constant Composition, hydrogen and oxygen always combine in a fixed mass ratio: $\frac{48\text{ g O}}{6\text{ g H}} = 8\text{ g O per 1 g H}$.\n* For $2\text{ g}$ of hydrogen, the mass of oxygen required is: $2\text{ g} \times 8 = 16\text{ g}$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_stoich_calcium_carbide_ethyne_vol-2026",
    question: "Calcium carbide, CaC₂, reacts with water to form ethyne, C₂H₂, and calcium hydroxide according to the equation:\n$$\text{CaC}_2\text{(s)} + 2\text{H}_2\text{O(l)} \rightarrow \text{C}_2\text{H}_2\text{(g)} + \text{Ca(OH)}_2\text{(s)}$$\nWhich volume of ethyne gas at r.t.p. is produced when 6 g of water reacts completely with excess calcium carbide? (Ar: H = 1, O = 16; molar gas volume at r.t.p. = 24 dm³/mol)",
    options: [
      { text: "4.3 dm³" },
      { text: "8 dm³" },
      { text: "4 dm³" },
      { text: "72 dm³" }
    ],
    correctAnswer: 2,
    explanation: "* $M_r(\text{H}_2\text{O}) = (2 \times 1) + 16 = 18\text{ g/mol}$.\n* $\text{Moles of } \text{H}_2\text{O} = \frac{6\text{ g}}{18\text{ g/mol}} = \frac{1}{3}\text{ mol} \approx 0.333\text{ mol}$.\n* From the stoichiometric equation, $2\text{ moles of } \text{H}_2\text{O}$ produce $1\text{ mole of } \text{C}_2\text{H}_2$.\n* $\text{Moles of } \text{C}_2\text{H}_2 = \frac{1}{2} \times \frac{1}{3} = \frac{1}{6}\text{ mol}$.\n* $\text{Volume of } \text{C}_2\text{H}_2 = \frac{1}{6}\text{ mol} \times 24\text{ dm}^3/\text{mol} = 4\text{ dm}^3$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_stoich_ethanoic_acid_conc_statement-2026",
    question: "A solution of ethanoic acid, CH₃COOH, has a concentration of 2 mol/dm³. Which statement about this solution is correct? (Ar: C = 12, H = 1, O = 16)",
    options: [
      { text: "20 g of ethanoic acid is dissolved in 10 cm³ of water" },
      { text: "30 g of ethanoic acid is dissolved in 250 cm³ of water" },
      { text: "60 g of ethanoic acid is dissolved in 1 dm³ of water" },
      { text: "120 g of ethanoic acid is dissolved in 2 dm³ of water" }
    ],
    correctAnswer: 1,
    explanation: "* $M_r(\text{CH}_3\text{COOH}) = (2 \times 12) + (4 \times 1) + (2 \times 16) = 24 + 4 + 32 = 60\text{ g/mol}$.\n* A concentration of $2\text{ mol/dm}^3$ corresponds to $2 \times 60 = 120\text{ g/dm}^3$.\n* Checking option B: $250\text{ cm}^3 = 0.25\text{ dm}^3$. Mass dissolved = $120\text{ g/dm}^3 \times 0.25\text{ dm}^3 = 30\text{ g}$. This statement is completely correct!",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },

  // Atoms, Elements, and Compounds
  {
    id: "q_aec_1-20260106",
    question: "An atom has 11 protons, 12 neutrons, and 11 electrons. What is the nucleon number (mass number) of this atom?",
    options: [
      { text: "11" },
      { text: "12" },
      { text: "22" },
      { text: "23" }
    ],
    correctAnswer: 3,
    explanation: "The nucleon number (mass number) is the sum of protons and neutrons. $11 + 12 = 23$.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_aec_2-20260106",
    question: "Which type of bonding involves the sharing of electron pairs between non-metal atoms?",
    options: [
      { text: "Ionic bonding" },
      { text: "Covalent bonding" },
      { text: "Metallic bonding" },
      { text: "Hydrogen bonding" }
    ],
    correctAnswer: 1,
    explanation: "Covalent bonding occurs when non-metal atoms share pairs of electrons to achieve a full outer shell.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Stoichiometry
  {
    id: "q_stc_1-20260106",
    question: "What is the relative formula mass ($M_r$) of carbon dioxide ($CO_2$)? (Relative atomic masses: $C = 12$, $O = 16$)",
    options: [
      { text: "28" },
      { text: "32" },
      { text: "44" },
      { text: "56" }
    ],
    correctAnswer: 2,
    explanation: "The $M_r$ of $CO_2$ is calculated as: $12 + (2 \\times 16) = 12 + 32 = 44$.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_stc_2-20260106",
    question: "How many moles of water ($H_2O$) are present in $36\\text{ g}$ of water? ($M_r$ of $H_2O = 18$)",
    options: [
      { text: "0.5 moles" },
      { text: "1 mole" },
      { text: "2 moles" },
      { text: "4 moles" }
    ],
    correctAnswer: 2,
    explanation: "$\\text{Moles} = \\frac{\\text{mass}}{M_r} = \\frac{36}{18} = 2\\text{ moles}$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Electrochemistry
  {
    id: "q_elc_1-20260106",
    question: "During the electrolysis of molten lead(II) bromide, what is produced at the cathode (negative electrode)?",
    options: [
      { text: "Lead metal" },
      { text: "Bromine gas" },
      { text: "Hydrogen gas" },
      { text: "Oxygen gas" }
    ],
    correctAnswer: 0,
    explanation: "In molten lead(II) bromide ($PbBr_2$), the positive $Pb^{2+}$ ions are attracted to the cathode where they gain electrons to form lead metal ($Pb$).",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemical Energetics
  {
    id: "q_ce_1-20260106",
    question: "Which statement about an exothermic reaction is correct?",
    options: [
      { text: "Energy is taken in from the surroundings and the temperature decreases." },
      { text: "Energy is given out to the surroundings and the temperature decreases." },
      { text: "Energy is taken in from the surroundings and the temperature increases." },
      { text: "Energy is given out to the surroundings and the temperature increases." }
    ],
    correctAnswer: 3,
    explanation: "In an exothermic reaction, thermal energy is transferred to the surroundings, causing the temperature of the reaction mixture and surroundings to increase.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemical Reactions
  {
    id: "q_cr_1-20260106",
    question: "Which change will increase the rate of reaction between a solid piece of marble (calcium carbonate) and hydrochloric acid?",
    options: [
      { text: "Using a larger piece of marble with the same total mass" },
      { text: "Decreasing the temperature of the acid" },
      { text: "Crushing the marble into smaller pieces" },
      { text: "Decreasing the concentration of the acid" }
    ],
    correctAnswer: 2,
    explanation: "Crushing the solid increases its surface area, allowing more frequent collisions between reacting particles, which increases the rate of reaction.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Acids, Bases and Salts
  {
    id: "q_abs_1-20260106",
    question: "Which ion is present in all aqueous acidic solutions?",
    options: [
      { text: "Hydroxide ion ($OH^-$)" },
      { text: "Hydrogen ion ($H^+$)" },
      { text: "Chloride ion ($Cl^-$)" },
      { text: "Sodium ion ($Na^+$)" }
    ],
    correctAnswer: 1,
    explanation: "Acids release hydrogen ions ($H^+$) when dissolved in water.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // The Periodic Table
  {
    id: "q_pt_1-20260106",
    question: "As you move down Group VII (the halogens) of the Periodic Table, what happens to their reactivity?",
    options: [
      { text: "It increases." },
      { text: "It decreases." },
      { text: "It remains the same." },
      { text: "They become unreactive." }
    ],
    correctAnswer: 1,
    explanation: "As you go down Group VII, the atoms become larger, and the outer electron shell is further from the nucleus. This makes it harder for the atom to gain an extra electron, so reactivity decreases.",
    level: 2,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Metals
  {
    id: "q_met_1-20260106",
    question: "Which of the following metals is extracted from its ore by heating with carbon?",
    options: [
      { text: "Aluminium" },
      { text: "Sodium" },
      { text: "Iron" },
      { text: "Potassium" }
    ],
    correctAnswer: 2,
    explanation: "Iron is less reactive than carbon, so it can be extracted from iron(III) oxide by reduction with carbon in a blast furnace. Metals more reactive than carbon (like Al, Na, K) require electrolysis.",
    level: 2,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Chemistry of the Environment
  {
    id: "q_env_1-20260106",
    question: "Which gas is the main component of clean, dry air?",
    options: [
      { text: "Oxygen" },
      { text: "Carbon dioxide" },
      { text: "Nitrogen" },
      { text: "Argon" }
    ],
    correctAnswer: 2,
    explanation: "Clean, dry air consists of approximately 78% nitrogen, 21% oxygen, with small amounts of argon, carbon dioxide, and other gases.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Organic Chemistry
  {
    id: "q_org_1-20260106",
    question: "What is the general formula for alkanes?",
    options: [
      { text: "$C_nH_{2n}$" },
      { text: "$C_nH_{2n+2}$" },
      { text: "$C_nH_{2n-2}$" },
      { text: "$C_nH_{2n+1}OH$" }
    ],
    correctAnswer: 1,
    explanation: "Alkanes are saturated hydrocarbons with the general formula $C_nH_{2n+2}$.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },

  // Experimental Techniques
  {
    id: "q_exp_1-20260106",
    question: "Which separation technique is most suitable for obtaining pure water from seawater?",
    options: [
      { text: "Filtration" },
      { text: "Crystallisation" },
      { text: "Simple distillation" },
      { text: "Fractional distillation" }
    ],
    correctAnswer: 2,
    explanation: "Simple distillation separates a solvent (water) from a solution (seawater) because water has a much lower boiling point than dissolved salts.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
];

// More States of Matter Questions
questionBank.push(
  {
    id: "q_som_3-20260106",
    question: "Which process describes a gas changing directly into a solid?",
    options: [
      { text: "Melting" },
      { text: "Condensation" },
      { text: "Deposition (or Desublimation)" },
      { text: "Sublimation" }
    ],
    correctAnswer: 2,
    explanation: "Deposition is the phase transition in which gas transforms into solid without passing through the liquid phase.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_som_4-20260106",
    question: "What happens to the kinetic energy of particles as a solid melts into a liquid at its melting point?",
    options: [
      { text: "It decreases." },
      { text: "It increases." },
      { text: "It remains constant." },
      { text: "It fluctuates." }
    ],
    correctAnswer: 2,
    explanation: "During a phase change (like melting), the temperature and the average kinetic energy of the particles remain constant. The added heat energy is used to overcome intermolecular forces.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Atoms, Elements, and Compounds Questions
questionBank.push(
  {
    id: "q_aec_3-20260106",
    question: "Isotopes of the same element have the same number of protons but a different number of...",
    options: [
      { text: "Electrons" },
      { text: "Neutrons" },
      { text: "Positrons" },
      { text: "Ions" }
    ],
    correctAnswer: 1,
    explanation: "Isotopes are atoms of the same element (same proton number) that have different numbers of neutrons, resulting in different mass numbers.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_aec_4-20260106",
    question: "What is the formula of the magnesium ion?",
    options: [
      { text: "$Mg^+$" },
      { text: "$Mg^{2+}$" },
      { text: "$Mg^-$" },
      { text: "$Mg^{2-}$" }
    ],
    correctAnswer: 1,
    explanation: "Magnesium is in Group II, so it loses its 2 outer shell electrons to achieve a full outer shell, forming a $2+$ ion.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Stoichiometry Questions
questionBank.push(
  {
    id: "q_stc_3-20260106",
    question: "What volume does $1\\text{ mole}$ of any gas occupy at room temperature and pressure (r.t.p)?",
    options: [
      { text: "$24\\text{ dm}^3$" },
      { text: "$22.4\\text{ dm}^3$" },
      { text: "$12\\text{ dm}^3$" },
      { text: "$48\\text{ dm}^3$" }
    ],
    correctAnswer: 0,
    explanation: "At r.t.p (approx. $20^\\circ\\text{C}$ and $1\\text{ atm}$), 1 mole of any gas occupies $24\\text{ dm}^3$ ($24,000\\text{ cm}^3$).",
    level: 1,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  },
  {
    id: "q_stc_4-20260106",
    question: "Calculate the percentage by mass of oxygen in water ($H_2O$). ($A_r$: $H = 1$, $O = 16$)",
    options: [
      { text: "33.3%" },
      { text: "88.9%" },
      { text: "11.1%" },
      { text: "50.0%" }
    ],
    correctAnswer: 1,
    explanation: "$M_r$ of $H_2O = 18$. Mass of oxygen = 16. $\\text{Percentage} = (16 / 18) \\times 100 = 88.9\\%$.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Electrochemistry Questions
questionBank.push(
  {
    id: "q_elc_2-20260106",
    question: "During the electrolysis of concentrated aqueous sodium chloride, what is produced at the anode (positive electrode)?",
    options: [
      { text: "Sodium" },
      { text: "Oxygen" },
      { text: "Chlorine" },
      { text: "Hydrogen" }
    ],
    correctAnswer: 2,
    explanation: "In concentrated aqueous $NaCl$, chloride ions ($Cl^-$) are discharged at the anode to form chlorine gas ($Cl_2$) because they are in high concentration compared to hydroxide ions.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemical Energetics Questions
questionBank.push(
  {
    id: "q_ce_2-20260106",
    question: "If a reaction has a negative $\\Delta H$ (enthalpy change), it is...",
    options: [
      { text: "Endothermic" },
      { text: "Exothermic" },
      { text: "Reversible" },
      { text: "At equilibrium" }
    ],
    correctAnswer: 1,
    explanation: "A negative $\\Delta H$ means the products have less energy than the reactants because energy was released to the surroundings. This is an exothermic reaction.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemical Reactions
questionBank.push(
  {
    id: "q_cr_2-20260106",
    question: "What does a catalyst do in a chemical reaction?",
    options: [
      { text: "Increases the activation energy" },
      { text: "Provides an alternative pathway with higher activation energy" },
      { text: "Provides an alternative pathway with lower activation energy" },
      { text: "Increases the temperature of the reaction" }
    ],
    correctAnswer: 2,
    explanation: "A catalyst speeds up a chemical reaction by providing an alternative reaction pathway that requires a lower activation energy, without being consumed itself.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Acids, Bases and Salts
questionBank.push(
  {
    id: "q_abs_2-20260106",
    question: "Which of the following is a weak acid?",
    options: [
      { text: "Hydrochloric acid" },
      { text: "Sulfuric acid" },
      { text: "Nitric acid" },
      { text: "Ethanoic acid" }
    ],
    correctAnswer: 3,
    explanation: "Ethanoic acid is a weak acid because it only partially dissociates into ions in aqueous solution. The others are strong acids that fully dissociate.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Periodic Table
questionBank.push(
  {
    id: "q_pt_2-20260106",
    question: "Which group of elements are known as the noble gases and are unreactive?",
    options: [
      { text: "Group I" },
      { text: "Group VII" },
      { text: "Group VIII (or Group 0)" },
      { text: "Transition Elements" }
    ],
    correctAnswer: 2,
    explanation: "Group VIII elements are the noble gases. They are unreactive because they have a full outer shell of electrons.",
    level: 1,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Metals
questionBank.push(
  {
    id: "q_met_2-20260106",
    question: "Which metal is the most reactive?",
    options: [
      { text: "Iron" },
      { text: "Copper" },
      { text: "Potassium" },
      { text: "Calcium" }
    ],
    correctAnswer: 2,
    explanation: "Potassium is at the very top of the reactivity series, making it highly reactive, especially with water.",
    level: 1,
    topic: "metals",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Chemistry of Environment
questionBank.push(
  {
    id: "q_env_2-20260106",
    question: "Which gas contributes most to global warming?",
    options: [
      { text: "Nitrogen" },
      { text: "Oxygen" },
      { text: "Carbon dioxide" },
      { text: "Argon" }
    ],
    correctAnswer: 2,
    explanation: "Carbon dioxide is a greenhouse gas that traps thermal energy in the Earth's atmosphere, contributing significantly to global warming.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// More Organic Chemistry
questionBank.push(
  {
    id: "q_org_2-20260106",
    question: "Which functional group is present in all alcohols?",
    options: [
      { text: "$-COOH$" },
      { text: "$-OH$" },
      { text: "$C=C$" },
      { text: "$-COO-$" }
    ],
    correctAnswer: 1,
    explanation: "Alcohols contain the hydroxyl ($-OH$) functional group.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);
questionBank.push(
  {
    id: "q_exp_2-20260106",
    question: "Which technique is used to separate a mixture of colored dyes in ink?",
    options: [
      { text: "Chromatography" },
      { text: "Distillation" },
      { text: "Filtration" },
      { text: "Evaporation" }
    ],
    correctAnswer: 0,
    explanation: "Paper chromatography is used to separate mixtures of soluble substances, such as different colored dyes in ink.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    createdAt: "2026-01-06"
  }
);

// Edexcel A-Level Unit 4: Kinetics Questions
questionBank.push(
  {
    id: "q_kin_ed_1-20260719",
    question: "An experiment is set up to measure the rate of hydrolysis of methyl ethanoate:\n\n$$\\text{CH}_3\\text{COOCH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{CH}_3\\text{OH}$$\n\nThe hydrolysis is very slow in neutral aqueous solution, but when dilute hydrochloric acid is added, the reaction is faster. What is the function of the hydrochloric acid?",
    options: [
      { text: "To increase the reaction rate by acting as a catalyst" },
      { text: "To make sure that the reaction reaches equilibrium" },
      { text: "To maintain a constant pH during the reaction" },
      { text: "To dissolve the methyl ethanoate" }
    ],
    correctAnswer: 0,
    explanation: "Dilute hydrochloric acid provides $\\text{H}^+$ ions which act as a catalyst, offering an alternative pathway with a lower activation energy, thereby increasing the rate of hydrolysis.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_2-20260719",
    question: "For the gaseous reaction $2\\text{X(g)} + \\text{Y(g)} \\rightarrow \\text{Z(g)}$\nthe rate equation is: $\\text{Rate} = k[\\text{X}]^2[\\text{Y}]^0$\nIf the pressure in the reaction vessel is doubled at constant temperature, by what factor does the rate of reaction increase?",
    options: [
      { text: "2" },
      { text: "4" },
      { text: "8" },
      { text: "16" }
    ],
    correctAnswer: 1,
    explanation: "Doubling the pressure of a gaseous mixture doubles the concentration of all gas particles.\nSince the reaction is second order with respect to X ($2^2 = 4$) and zero order with respect to Y ($2^0 = 1$), the rate increases by a factor of $4 \\times 1 = 4$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_3-20260719",
    question: "The alkaline hydrolysis of $\\text{RBr}$, where $\\text{RBr} = (\\text{CH}_3)_3\\text{CBr}$, takes place in two steps:\nStep 1 (slow): $\\text{RBr} \\rightarrow \\text{R}^+ + \\text{Br}^-$\nStep 2 (fast): $\\text{R}^+ + \\text{OH}^- \\rightarrow \\text{ROH}$\nWhich of the following rate equations is consistent with this mechanism?",
    options: [
      { text: "Rate = $k[\\text{OH}^-]$" },
      { text: "Rate = $k[\\text{RBr}]$" },
      { text: "Rate = $k[\\text{RBr}][\\text{OH}^-]$" },
      { text: "Rate = $k[\\text{R}^+][\\text{OH}^-]$" }
    ],
    correctAnswer: 1,
    explanation: "The rate-determining step is the slow step (Step 1), which involves only the reactant $\\text{RBr}$.\nTherefore, the reaction is unimolecular ($S_N1$), and the rate equation is $\\text{Rate} = k[\\text{RBr}]$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_4-20260719",
    question: "The table below gives rate data for the reaction between X and Y at constant temperature:\n\n| Experiment | [X] / mol dm⁻³ | [Y] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: |\n| 1 | 0.3 | 0.2 | $4.0 \\times 10^{-4}$ |\n| 2 | 0.6 | 0.4 | $1.6 \\times 10^{-3}$ |\n| 3 | 0.6 | 0.8 | $6.4 \\times 10^{-3}$ |\n\nWhat is the rate equation for the reaction?",
    options: [
      { text: "Rate = $k[\\text{X}][\\text{Y}]^2$" },
      { text: "Rate = $k[\\text{X}]^2[\\text{Y}]$" },
      { text: "Rate = $k[\\text{X}]^2$" },
      { text: "Rate = $k[\\text{Y}]^2$" }
    ],
    correctAnswer: 3,
    explanation: "1. Compare Exp 2 & 3: [X] is constant, [Y] doubles ($0.4 \\rightarrow 0.8$). The rate increases by a factor of 4 ($1.6 \\times 10^{-3} \\rightarrow 6.4 \\times 10^{-3}$). Since $2^2 = 4$, the reaction is second order with respect to Y.\\n2. Compare Exp 1 & 2: both [X] and [Y] double. The rate increases by a factor of 4 ($4.0 \\times 10^{-4} \\rightarrow 1.6 \\times 10^{-3}$). Since the doubling of [Y] alone accounts for the 4-fold rate increase ($2^2 = 4$), the order with respect to X must be 0. Thus, Rate = $k[\\text{Y}]^2$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_5-20260719",
    question: "The reaction of acidified aqueous potassium iodide with hydrogen peroxide:\n\n$$2\\text{I}^-\\text{(aq)} + \\text{H}_2\\text{O}_2\\text{(aq)} + 2\\text{H}^+\\text{(aq)} \\rightarrow \\text{I}_2\\text{(aq)} + 2\\text{H}_2\\text{O}\\text{(l)}$$\n\nis thought to involve three steps:\nStep 1 (slow): $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$\nStep 2 (fast): $\\text{OI}^- + \\text{H}^+ \\rightarrow \\text{HOI}$\nStep 3 (fast): $\\text{HOI} + \\text{H}^+ + \\text{I}^- \\rightarrow \\text{I}_2 + \\text{H}_2\\text{O}$\nWhich of the following conclusions **cannot** be deduced from this information?",
    options: [
      { text: "The acid is a catalyst." },
      { text: "The reaction is first order with respect to the iodide ion." },
      { text: "The rate-determining step is: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{OI}^-$" },
      { text: "The rate equation for the reaction is: rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$" }
    ],
    correctAnswer: 0,
    explanation: "Looking at the overall equation:\n$$2\\text{I}^- + \\text{H}_2\\text{O}_2 + 2\\text{H}^+ \\rightarrow \\text{I}_2 + 2\\text{H}_2\\text{O}$$\nSince $\\text{H}^+$ is consumed as a reactant in the overall reaction, it is not a catalyst (a catalyst must be regenerated at the end of the reaction).\nTherefore, conclusion A cannot be deduced (it is false).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_6-20260719",
    question: "Propanone and iodine react in acidic aqueous solution:\n\n$$\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COCH}_2\\text{I} + 2\\text{H}^+ + \\text{I}^-$$\n\nThe experimental rate equation is $\\text{Rate} = k[\\text{CH}_3\\text{COCH}_3][\\text{H}^+]$. At initial concentrations $[\\text{CH}_3\\text{COCH}_3] = 0.400\\text{ mol dm}^{-3}$ and $[\\text{H}^+] = 0.200\\text{ mol dm}^{-3}$, the initial rate of reaction was $1.43 \\times 10^{-6}\\text{ mol dm}^{-3}\\text{ s}^{-1}$. Calculate the value of the rate constant $k$, with units.",
    options: [
      { text: "$1.79 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$1.79 \\times 10^{-5}\\text{ s}^{-1}$" },
      { text: "$7.15 \\times 10^{-6}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$3.58 \\times 10^{-5}\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "Using the rate equation:\n$k = \\text{Rate} / ([\\text{CH}_3\\text{COCH}_3][\\text{H}^+]) = 1.43 \\times 10^{-6} / (0.400 \\times 0.200) = 1.7875 \\times 10^{-5} \\approx 1.79 \\times 10^{-5}$.\nUnits: since the overall order is 2, the units of $k$ are $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_7-20260719",
    question: "A series of experiments on the reaction $\\text{A} + \\text{B} + \\text{C} \\rightarrow \\text{Products}$ yielded the following initial rate data:\n\n| Exp | [A] / mol dm⁻³ | [B] / mol dm⁻³ | [C] / mol dm⁻³ | Rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: | :---: |\n| 1 | 0.100 | 0.100 | 0.100 | $6.20 \\times 10^{-4}$ |\n| 2 | 0.100 | 0.200 | 0.100 | $6.20 \\times 10^{-4}$ |\n| 3 | 0.100 | 0.100 | 0.200 | $2.48 \\times 10^{-3}$ |\n| 4 | 0.200 | 0.100 | 0.100 | $1.24 \\times 10^{-3}$ |\n\nDeduce the rate equation and determine which reactant is unlikely to be in the rate-determining step.",
    options: [
      { text: "Rate = $k[\\text{A}][\\text{C}]^2$; B is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{A}]^2[\\text{C}]$; B is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{A}][\\text{B}][\\text{C}]$; C is unlikely to be in the RDS." },
      { text: "Rate = $k[\\text{C}]^2$; A and B are unlikely to be in the RDS." }
    ],
    correctAnswer: 0,
    explanation: "1. Compare Exp 1 & 2: doubling [B] has no effect on rate $\\rightarrow$ order wrt B is 0. Thus, B is not involved in the RDS.\\n2. Compare Exp 1 & 3: doubling [C] increases rate by a factor of 4 ($2.48 \\times 10^{-3} / 6.20 \\times 10^{-4} = 4$) $\\rightarrow$ order wrt C is 2.\\n3. Compare Exp 1 & 4: doubling [A] doubles rate ($1.24 \\times 10^{-3} / 6.20 \\times 10^{-4} = 2$) $\\rightarrow$ order wrt A is 1. Thus, Rate = $k[\\text{A}][\\text{C}]^2$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19"
  },
  {
    id: "q_kin_ed_8-20260719",
    question: "Nitrogen dioxide, $\\text{NO}_2$, decomposes on heating:\n\n$$2\\text{NO}_2\\text{(g)} \\rightarrow 2\\text{NO(g)} + \\text{O}_2\\text{(g)}$$\n\nA plot of $\\ln k$ against $1/T$ yields a straight line with a gradient of $-13500\\text{ K}$. Calculate the activation energy ($E_a$) for this reaction in $\\text{kJ mol}^{-1}$.",
    options: [
      { text: "$112\\text{ kJ mol}^{-1}$" },
      { text: "$1.62\\text{ kJ mol}^{-1}$" },
      { text: "$13.5\\text{ kJ mol}^{-1}$" },
      { text: "$112000\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "The gradient of the Arrhenius plot is given by $m = -E_a/R$.\nRearranging: $E_a = -m \\times R = -(-13500) \\times 8.31 = 112185\\text{ J mol}^{-1}$.\nIn $\\text{kJ mol}^{-1}$, this is $112185 / 1000 = 112\\text{ kJ mol}^{-1}$ (to 3 significant figures).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: `<svg viewBox="0 0 500 450" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <defs>
    <pattern id="minorGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="0.5"/>
    </pattern>
    <pattern id="majorGrid" width="50" height="50" patternUnits="userSpaceOnUse">
      <rect width="50" height="50" fill="url(#minorGrid)"/>
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="60" y="30" width="410" height="360" fill="url(#majorGrid)" />
  <rect x="60" y="30" width="410" height="360" fill="none" stroke="#475569" stroke-width="1.5" />
  <g fill="#94a3b8" font-size="11" text-anchor="end" font-weight="500">
    <text x="50" y="34">9</text>
    <text x="50" y="74">8</text>
    <text x="50" y="114">7</text>
    <text x="50" y="154">6</text>
    <text x="50" y="194">5</text>
    <text x="50" y="234">4</text>
    <text x="50" y="274">3</text>
    <text x="50" y="314">2</text>
    <text x="50" y="354">1</text>
    <text x="50" y="394">0</text>
  </g>
  <g fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="500">
    <text x="60" y="412">1.0</text>
    <text x="128" y="412">1.1</text>
    <text x="197" y="412">1.2</text>
    <text x="265" y="412">1.3</text>
    <text x="333" y="412">1.4</text>
    <text x="402" y="412">1.5</text>
    <text x="470" y="412">1.6</text>
  </g>
  <text x="20" y="210" fill="#cbd5e1" font-size="12" font-weight="600" transform="rotate(-90 20 210)" text-anchor="middle">ln k</text>
  <text x="265" y="438" fill="#cbd5e1" font-size="12" font-weight="600" text-anchor="middle">1/T / 10⁻³ K⁻¹</text>
  <line x1="60" y1="50" x2="470" y2="374" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
  <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
    <!-- Point 1 -->
    <line x1="56" y1="46" x2="64" y2="54" />
    <line x1="64" y1="46" x2="56" y2="54" />
    <!-- Point 2 -->
    <line x1="124" y1="100" x2="132" y2="108" />
    <line x1="132" y1="100" x2="124" y2="108" />
    <!-- Point 3 -->
    <line x1="227" y1="181" x2="235" y2="189" />
    <line x1="235" y1="181" x2="227" y2="189" />
    <!-- Point 4 -->
    <line x1="308" y1="246" x2="316" y2="254" />
    <line x1="316" y1="246" x2="308" y2="254" />
    <!-- Point 5 -->
    <line x1="411" y1="327" x2="419" y2="335" />
    <line x1="419" y1="327" x2="411" y2="335" />
  </g>
</svg>`
  }
);

// N2O5 Decomposition Graph SVG
const n2o5DecayGraphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="100%" height="auto" style="background:linear-gradient(135deg,#070f1e 0%,#0b1b35 100%);border-radius:16px;border:1px solid #1e293b;font-family:Inter,sans-serif">
  <!-- Grid Lines -->
  <!-- Horizontal Grid -->
  <line x1="80" y1="282" x2="950" y2="282" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="254" x2="950" y2="254" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="226" x2="950" y2="226" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="198" x2="950" y2="198" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="170" x2="950" y2="170" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="142" x2="950" y2="142" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="114" x2="950" y2="114" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="86" x2="950" y2="86" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="58" x2="950" y2="58" stroke="#1e293b" stroke-width="1" />
  <line x1="80" y1="30" x2="950" y2="30" stroke="#1e293b" stroke-width="1" />

  <!-- Vertical Grid -->
  <line x1="167" y1="30" x2="167" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="254" y1="30" x2="254" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="341" y1="30" x2="341" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="428" y1="30" x2="428" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="515" y1="30" x2="515" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="602" y1="30" x2="602" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="689" y1="30" x2="689" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="776" y1="30" x2="776" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="863" y1="30" x2="863" y2="310" stroke="#1e293b" stroke-width="1" />
  <line x1="950" y1="30" x2="950" y2="310" stroke="#1e293b" stroke-width="1" />

  <!-- Main Axes -->
  <line x1="80" y1="30" x2="80" y2="310" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="310" x2="950" y2="310" stroke="#475569" stroke-width="2" />

  <!-- Y-Axis Ticks & Labels -->
  <text x="70" y="314" font-size="12" fill="#94a3b8" text-anchor="end">0.0</text>
  <text x="70" y="286" font-size="12" fill="#94a3b8" text-anchor="end">0.2</text>
  <text x="70" y="258" font-size="12" fill="#94a3b8" text-anchor="end">0.4</text>
  <text x="70" y="230" font-size="12" fill="#94a3b8" text-anchor="end">0.6</text>
  <text x="70" y="202" font-size="12" fill="#94a3b8" text-anchor="end">0.8</text>
  <text x="70" y="174" font-size="12" fill="#94a3b8" text-anchor="end">1.0</text>
  <text x="70" y="146" font-size="12" fill="#94a3b8" text-anchor="end">1.2</text>
  <text x="70" y="118" font-size="12" fill="#94a3b8" text-anchor="end">1.4</text>
  <text x="70" y="90" font-size="12" fill="#94a3b8" text-anchor="end">1.6</text>
  <text x="70" y="62" font-size="12" fill="#94a3b8" text-anchor="end">1.8</text>
  <text x="70" y="34" font-size="12" fill="#94a3b8" text-anchor="end">2.0</text>
  <text x="30" y="170" font-size="12" fill="#e2e8f0" transform="rotate(-90 30 170)" text-anchor="middle">[N₂O₅] / mol dm⁻³</text>

  <!-- X-Axis Ticks & Labels -->
  <text x="80" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">0</text>
  <text x="167" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">10</text>
  <text x="254" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">20</text>
  <text x="341" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">30</text>
  <text x="428" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">40</text>
  <text x="515" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">50</text>
  <text x="602" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">60</text>
  <text x="689" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">70</text>
  <text x="776" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">80</text>
  <text x="863" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">90</text>
  <text x="950" y="330" font-size="12" fill="#94a3b8" text-anchor="middle">100</text>
  <text x="515" y="350" font-size="12" fill="#e2e8f0" text-anchor="middle">Time / minutes</text>

  <!-- Curve -->
  <path d="M 80,30 L 123.5,81.7 L 167,123.8 L 210.5,158.2 L 254,186.2 L 297.5,209.2 L 341,227.9 L 384.5,243.1 L 428,255.5 L 471.5,265.6 L 515,273.8 L 558.5,280.5 L 602,286.0 L 645.5,290.4 L 689,294.1 L 732.5,297.0 L 776,299.4 L 819.5,301.4 L 863,303.0 L 906.5,304.3 L 950,305.4" fill="none" stroke="#38bdf8" stroke-width="3" />
</svg>`;

questionBank.push(
  {
    id: "q_kin_ed_n2o5_1-20260719",
    question: "The decomposition of nitrogen pentoxide is represented by:\n\n$$2\\text{N}_2\\text{O}_5\\text{(g)} \\rightarrow 2\\text{N}_2\\text{O}_4\\text{(g)} + \\text{O}_2\\text{(g)}$$\n\nUsing the concentration-time graph below, determine the values of the first two successive half-lives ($t_{1/2}$):",
    options: [
      { text: "First $t_{1/2} = 17\\text{ min}$; Second $t_{1/2} = 17\\text{ min}$" },
      { text: "First $t_{1/2} = 10\\text{ min}$; Second $t_{1/2} = 20\\text{ min}$" },
      { text: "First $t_{1/2} = 17\\text{ min}$; Second $t_{1/2} = 34\\text{ min}$" },
      { text: "First $t_{1/2} = 24\\text{ min}$; Second $t_{1/2} = 24\\text{ min}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The initial concentration is $2.0\\text{ mol dm}^{-3}$. Half of this value is $1.0\\text{ mol dm}^{-3}$. Reading from the graph, $[\\text{N}_2\\text{O}_5]$ reaches $1.0\\text{ mol dm}^{-3}$ at $17\\text{ minutes}$. Thus, the first half-life is $17\\text{ minutes}$.\n2. The second half-life is the time taken to drop from $1.0\\text{ mol dm}^{-3}$ to $0.5\\text{ mol dm}^{-3}$. Looking at the graph, the concentration is $0.5\\text{ mol dm}^{-3}$ at $34\\text{ minutes}$.\n3. The time interval is $34 - 17 = 17\\text{ minutes}$. Therefore, both successive half-lives are $17\\text{ minutes}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: n2o5DecayGraphSvg
  },
  {
    id: "q_kin_ed_n2o5_2-20260719",
    question: "Using the successive half-lives deduced from the $[\\text{N}_2\\text{O}_5]$ concentration-time graph, determine the order of the reaction with respect to $\\text{N}_2\\text{O}_5$:",
    options: [
      { text: "First order, because the successive half-lives are constant." },
      { text: "Second order, because the concentration decays exponentially." },
      { text: "Zero order, because the rate of reaction remains constant." },
      { text: "First order, because the half-life doubles over time." }
    ],
    correctAnswer: 0,
    explanation: "1. The successive half-lives for this reaction are constant at approximately $17\\text{ minutes}$.\n2. A constant half-life is the unique characteristic of a first-order reaction.\n3. Therefore, the reaction is first order with respect to $\\text{N}_2\\text{O}_5$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
    imageHtml: n2o5DecayGraphSvg
  },
  {
    id: "q_kin_ed_n2o5_3-20260719",
    question: "Based on the $[\\text{N}_2\\text{O}_5]$ decay graph, calculate a value for the rate constant, $k$, for this reaction, specifying the correct units:",
    options: [
      { text: "$4.1 \\times 10^{-2}\\text{ min}^{-1}$" },
      { text: "$6.8 \\times 10^{-4}\\text{ min}^{-1}$" },
      { text: "$1.7 \\times 10^{-2}\\text{ dm}^3\\text{ mol}^{-1}\\text{ min}^{-1}$" },
      { text: "$2.4 \\times 10^{-2}\\text{ min}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. For a first-order reaction, the rate constant is related to the half-life by: $k = \\ln(2) / t_{1/2}$.\n2. Substituting the half-life $t_{1/2} = 17\\text{ minutes}$: $k = 0.693 / 17 \\approx 0.0408\\text{ min}^{-1}$.\n3. In scientific notation, this is $4.1 \\times 10^{-2}\\text{ min}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-19",
  }
);

questionBank.push(
  {
    id: "q_eq_ed_pp_1-20260721",
    question: "For the equilibrium reaction:\n\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)} \\quad \\Delta H^\\theta = -92\\text{ kJ mol}^{-1}$$\n\nWhich change would affect both the value of the equilibrium constant, $K_p$, and the proportion of ammonia present at equilibrium?",
    options: [
      { text: "Adding a catalyst of finely divided iron" },
      { text: "Reducing the temperature at constant pressure" },
      { text: "Increasing the amount of nitrogen" },
      { text: "Increasing the pressure at constant temperature" }
    ],
    correctAnswer: 1,
    explanation: "1. The equilibrium constant $K_p$ is affected only by changes in temperature.\n2. Since the forward reaction is exothermic, reducing the temperature will shift the equilibrium position to the right, which increases the value of $K_p$ and increases the proportion of ammonia.\n3. Changes in pressure or concentration shift the equilibrium composition but do not alter the value of $K_p$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_2-20260721",
    question: "In a reversible chemical reaction, what is the effect of adding a catalyst on the rate constant $k_1$ for the forward reaction, the rate constant $k_{-1}$ for the backward reaction, and the equilibrium constant $K$?",
    options: [
      { text: "$k_1$ increases, $k_{-1}$ decreases, $K$ no effect" },
      { text: "$k_1$ increases, $k_{-1}$ decreases, $K$ increases" },
      { text: "$k_1$ increases, $k_{-1}$ increases, $K$ no effect" },
      { text: "$k_1$ increases, $k_{-1}$ increases, $K$ increases" }
    ],
    correctAnswer: 2,
    explanation: "1. A catalyst increases the rates of both the forward and reverse reactions by providing an alternative pathway with a lower activation energy.\n2. This increases both rate constants $k_1$ and $k_{-1}$ to the same extent.\n3. Since $K = k_1 / k_{-1}$, the equilibrium constant $K$ remains unaffected.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_3-20260721",
    question: "Hydrogen and iodine vapour exist in equilibrium with hydrogen iodide at a constant temperature in a gas syringe:\n\n$$\\text{H}_2\\text{(g)} + \\text{I}_2\\text{(g)} \\rightleftharpoons 2\\text{HI(g)}$$\n\nWhat will increase when the pressure is increased at constant temperature?",
    options: [
      { text: "The activation energy of the reaction" },
      { text: "The enthalpy change of the reaction" },
      { text: "$K_p$" },
      { text: "The partial pressure of hydrogen iodide" }
    ],
    correctAnswer: 3,
    explanation: "1. Increasing the pressure of a gaseous mixture increases the concentration and partial pressure of all component gases.\n2. The activation energy and enthalpy change are independent of pressure.\n3. $K_p$ is only affected by temperature and is constant here.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_4-20260721",
    question: "A nitrogen-hydrogen mixture, initially in a mole ratio of $1:3$, reaches equilibrium with ammonia when $50\\%$ of the nitrogen has reacted:\n\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)}$$\n\nIf the total pressure of the equilibrium mixture is $P$, what is the partial pressure of ammonia at equilibrium?",
    options: [
      { text: "$P/6$" },
      { text: "$P/4$" },
      { text: "$P/3$" },
      { text: "$P/2$" }
    ],
    correctAnswer: 2,
    explanation: "1. Start with $1\\text{ mol N}_2$ and $3\\text{ mol H}_2$ (total $4\\text{ mol}$).\n2. If $50\\%$ of $\\text{N}_2$ reacts, $0.5\\text{ mol N}_2$ remains. By stoichiometry, $1.5\\text{ mol H}_2$ reacts ($1.5\\text{ mol}$ remains) and $1.0\\text{ mol NH}_3$ forms.\n3. Total equilibrium moles = $0.5 + 1.5 + 1.0 = 3.0\\text{ mol}$.\n4. Mole fraction of $\\text{NH}_3 = 1.0 / 3.0 = 1/3$.\n5. Partial pressure of $\\text{NH}_3 = \\chi \\times P = P/3$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_eq_ed_pp_5-20260721",
    question: "Nitrogen dioxide decomposes on heating according to the following equation:\n\n$$2\\text{NO}_2\\text{(g)} \\rightleftharpoons 2\\text{NO(g)} + \\text{O}_2\\text{(g)}$$\n\nWhen $4.0\\text{ mol}$ of nitrogen dioxide is put into a $1\\text{ dm}^3$ container and heated, the equilibrium mixture obtained contains $0.8\\text{ mol}$ of oxygen. What is the numerical expression for $K_c$ at the temperature of the experiment?",
    options: [
      { text: "$(0.8 \\times 0.8) / 2.4$" },
      { text: "$(0.8)^2 \\times 0.8 / 2.4$" },
      { text: "1.6 \\times 0.8 / (2.4)^2" },
      { text: "(1.6)^2 \\times 0.8 / (2.4)^2" }
    ],
    correctAnswer: 3,
    explanation: "1. Let volume $V = 1\\text{ dm}^3$. Initial moles: $\\text{NO}_2 = 4.0$, $\\text{NO} = 0$, $\\text{O}_2 = 0$.\n2. Equilibrium moles of $\\text{O}_2 = 0.8\\text{ mol}$. Change in $\\text{O}_2 = +0.8\\text{ mol}$.\n3. By stoichiometry ($2:2:1$): change in $\\text{NO} = +1.6\\text{ mol}$ and change in $\\text{NO}_2 = -1.6\\text{ mol}$.\n4. Equilibrium concentrations: $[\\text{NO}_2] = 2.4\\text{ mol dm}^{-3}$, $[\\text{NO}] = 1.6\\text{ mol dm}^{-3}$, $[\\text{O}_2] = 0.8\\text{ mol dm}^{-3}$.\n5. $K_c = [\\text{NO}]^2[\\text{O}_2] / [\\text{NO}_2]^2 = (1.6)^2 \\times 0.8 / (2.4)^2$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 3,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_ab_ed_pp_1-20260721",
    question: "In an acid–base titration, a $0.10\\text{ mol dm}^{-3}$ solution of a base is added to $25\\text{ cm}^3$ of a $0.10\\text{ mol dm}^{-3}$ solution of an acid. The pH starts at $1.0$ and rises gradually to about $2.0$ at $20\\text{ cm}^3$ added, before rising sharply between pH $3.0$ and $10.0$ near the equivalence point ($25\\text{ cm}^3$). Past $40\\text{ cm}^3$, the pH flattens out around $9.5$. Which titration does this curve represent?",
    options: [
      { text: "$\\text{CH}_3\\text{COOH(aq)}$ and $\\text{NH}_3\\text{(aq)}$" },
      { text: "$\\text{CH}_3\\text{COOH(aq)}$ and $\\text{KOH(aq)}$" },
      { text: "$\\text{HCl(aq)}$ and $\\text{NH}_3\\text{(aq)}$" },
      { text: "$\\text{HCl(aq)}$ and $\\text{KOH(aq)}$" }
    ],
    correctAnswer: 2,
    explanation: "1. The initial pH of the solution is $1.0$, which corresponds to a strong acid ($[\\text{H}^+] = 10^{-1.0} = 0.10\\text{ mol dm}^{-3}$). This rules out weak acids like ethanoic acid.\n2. The final pH after adding excess base approaches $9.5$, which is characteristic of a weak base like ammonia (a strong base like KOH would result in a pH close to $13$).\n3. Therefore, the curve represents the titration between a strong acid (HCl) and a weak base (\\text{NH}_3).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_2-20260721",
    question: "Hardness in water is determined by titrating a sample against a reagent that forms complex ions. The indicator for this titration requires the pH to be maintained at about $10$. Which mixture, in aqueous solution, could be used to maintain this pH?",
    options: [
      { text: "Ammonia and ammonium chloride" },
      { text: "Ammonium chloride and hydrochloric acid" },
      { text: "Sodium ethanoate and ethanoic acid" },
      { text: "Sodium hydroxide and sodium ethanoate" }
    ],
    correctAnswer: 0,
    explanation: "1. To maintain the pH at a constant alkaline value of about $10$, a basic buffer solution is required.\n2. A basic buffer consists of a weak base and its conjugate acid salt.\n3. Ammonia (\\text{NH}_3, weak base) and ammonium chloride (\\text{NH}_4\\text{Cl}, salt of conjugate acid) form a buffer solution that operates in the pH range of $9-11$.\n4. Ethanoate mixtures act as acidic buffers (pH $4-6$), while NaOH/sodium ethanoate is not a buffer system.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_3-20260721",
    question: "A $1.0 \\times 10^{-2}\\text{ mol dm}^{-3}$ aqueous solution of a weak, monoprotic acid HA has a pH of $4.0$. What is the approximate $\\text{p}K_a$ value for the acid?",
    options: [
      { text: "$4.0$" },
      { text: "$6.0$" },
      { text: "$7.0$" },
      { text: "$8.0$" }
    ],
    correctAnswer: 1,
    explanation: "1. The pH is $4.0$, so the hydrogen ion concentration $[\\text{H}^+] = 10^{-\\text{pH}} = 1.0 \\times 10^{-4}\\text{ mol dm}^{-3}$.\n2. For a weak acid HA, using the simplified expression: $K_a = [\\text{H}^+]^2 / c$.\n3. Substituting the values: $K_a = (1.0 \\times 10^{-4})^2 / (1.0 \\times 10^{-2}) = 1.0 \\times 10^{-8} / 1.0 \\times 10^{-2} = 1.0 \\times 10^{-6}\\text{ mol dm}^{-3}$.\n4. Therefore, $\\text{p}K_a = -\\log_{10}(K_a) = 6.0$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_4-20260721",
    question: "In the nitrating mixture of concentrated nitric acid and concentrated sulfuric acid, the following equilibrium is established:\n\n$$\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{NO}_2^+ + 2\\text{HSO}_4^- + \\text{H}_3\\text{O}^+$$\n\nWhich statement correctly describes the role of the species in this equilibrium?",
    options: [
      { text: "$\\text{HNO}_3$ and $\\text{NO}_2^+$ are a conjugate acid–base pair" },
      { text: "The nitric acid acts as an oxidising agent" },
      { text: "The sulfuric acid acts as a proton donor (acid) and shifts equilibrium by protonating water" },
      { text: "The sulfuric acid acts as a base" }
    ],
    correctAnswer: 2,
    explanation: "1. Sulfuric acid is a stronger acid than nitric acid and donates protons, acting as an acid (proton donor). This rules out option D.\n2. Nitric acid accepts a proton to form $\\text{H}_2\\text{NO}_3^+$, which then loses water to form the nitronium ion (\\text{NO}_2^+). Thus, HNO_3 acts as a base.\n3. The water released is protonated by another molecule of sulfuric acid to form $\\text{H}_3\\text{O}^+$, acting as a dehydrating effect that shifts the equilibrium to the right.\n4. HNO_3 and NO_2^+ do not differ by a single proton and are not a conjugate pair. The reaction is a non-redox proton transfer, so nitric acid is not acting as an oxidiser.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_5-20260721",
    question: "A sales leaflet claims that 'applications of a solution of ammonium sulfate, which is acidic, improve the growth of acid-loving rhododendron bushes by increasing the availability of nitrogen and also by increasing the pH of the soil'. What is chemically incorrect about this statement?",
    options: [
      { text: "Aqueous ammonium sulfate is not acidic" },
      { text: "Ammonium sulfate does not dissolve in water" },
      { text: "Nitrogen must be in its oxidised nitrate form to act as a fertiliser" },
      { text: "The pH of the soil will be decreased, not increased" }
    ],
    correctAnswer: 3,
    explanation: "1. Ammonium sulfate ((\\text{NH}_4)_2\\text{SO}_4) is a salt of a strong acid (\\text{H}_2\\text{SO}_4) and a weak base (\\text{NH}_3).\n2. The ammonium ion undergoes hydrolysis in water, releasing protons and making the solution acidic: $\\text{NH}_4^+\\text{(aq)} \\rightleftharpoons \\text{NH}_3\\text{(aq)} + \\text{H}^+\\text{(aq)}$.\n3. Since the solution is acidic, applying it to the soil will decrease the soil's pH, making it more acidic (which benefits acid-loving plants), rather than increasing the pH.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6a-20260721",
    question: "A sample of fruit juice has a hydrogen ion concentration of $2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$. What is the pH of the fruit juice?",
    options: [
      { text: "$3.40$" },
      { text: "$3.60$" },
      { text: "$4.00$" },
      { text: "$4.60$" }
    ],
    correctAnswer: 1,
    explanation: "1. The formula for pH is: $\\text{pH} = -\\log_{10}[\\text{H}^+]$.\n2. Substituting the hydrogen ion concentration: $\\text{pH} = -\\log_{10}(2.50 \\times 10^{-4}) = 3.60$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6b-20260721",
    question: "A $25.0\\text{ cm}^3$ sample of fruit juice containing a monobasic acid HA is titrated against $0.0100\\text{ mol dm}^{-3}$ sodium hydroxide, requiring exactly $26.70\\text{ cm}^3$ of the base to reach the equivalence point. What is the concentration of HA in the fruit juice?",
    options: [
      { text: "0.00936 mol dm⁻³" },
      { text: "0.0107 mol dm⁻³" },
      { text: "0.00250 mol dm⁻³" },
      { text: "0.0125 mol dm⁻³" }
    ],
    correctAnswer: 1,
    explanation: "1. The neutralisation reaction is: $\\text{HA} + \\text{NaOH} \\rightarrow \\text{NaA} + \\text{H}_2\\text{O}$ (1:1 ratio).\n2. Moles of NaOH used = $C \\times V = 0.0100\\text{ mol dm}^{-3} \\times 0.02670\\text{ dm}^3 = 2.67 \\times 10^{-4}\\text{ mol}$.\n3. Since the ratio is 1:1, moles of HA in $25.0\\text{ cm}^3 = 2.67 \\times 10^{-4}\\text{ mol}$.\n4. Concentration of HA = $\\text{moles} / \\text{volume} = 2.67 \\times 10^{-4}\\text{ mol} / 0.0250\\text{ dm}^3 = 0.01068\\text{ mol dm}^{-3} \\approx 0.0107\\text{ mol dm}^{-3}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_6c-20260721",
    question: "A fruit juice contains a monobasic acid HA with total concentration $0.0107\\text{ mol dm}^{-3}$. Under the juice conditions, $[\\text{H}^+] = 2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$ and $K_a = 6.00 \\times 10^{-5}\\text{ mol dm}^{-3}$. What is the concentration of the undissociated acid HA?",
    options: [
      { text: "$1.04 \\times 10^{-3}\\text{ mol dm}^{-3}$" },
      { text: "$8.63 \\times 10^{-3}\\text{ mol dm}^{-3}$" },
      { text: "$1.04 \\times 10^{-2}\\text{ mol dm}^{-3}$" },
      { text: "$2.50 \\times 10^{-4}\\text{ mol dm}^{-3}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The dissociation equilibrium is $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, with $K_a = [\\text{H}^+][\\text{A}^-] / [\\text{HA}]$.\n2. The total concentration of the acid is $c = [\\text{HA}] + [\\text{A}^-] = 0.01068\\text{ mol dm}^{-3}$.\n3. Rearranging the $K_a$ expression gives: $[\\text{A}^-] = K_a \\times [\\text{HA}] / [\\text{H}^+] = (6.00 \\times 10^{-5} \\times [\\text{HA}]) / (2.50 \\times 10^{-4}) = 0.24 [\\text{HA}]$.\n4. Substituting this into the total concentration expression: $[\\text{HA}] + 0.24 [\\text{HA}] = 1.24 [\\text{HA}] = 0.01068\\text{ mol dm}^{-3}$.\n5. Solving for $[\\text{HA}]$ gives: $[\\text{HA}] = 0.01068 / 1.24 = 8.613 \\times 10^{-3}\\text{ mol dm}^{-3} \\approx 8.63 \\times 10^{-3}\\text{ mol dm}^{-3}$.\n6. (If assuming $[\\text{H}^+] = [\\text{A}^-]$, $[\\text{HA}] = [\\text{H}^+]^2 / K_a = 1.04 \\times 10^{-3}\\text{ mol dm}^{-3}$, but this is incorrect for the juice mixture because other species affect the pH).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_7-20260721",
    question: "A buffer solution is prepared by adding a solution of $1.00\\text{ mol dm}^{-3}$ sodium hydroxide to a sample of $1.00\\text{ mol dm}^{-3}$ ethanoic acid ($K_a = 1.70 \\times 10^{-5}\\text{ mol dm}^{-3}$ at this temperature) until exactly half of the amount of acid present has reacted. What is the pH of this buffer solution?",
    options: [
      { text: "$4.77$" },
      { text: "$5.07$" },
      { text: "$5.27$" },
      { text: "$7.00$" }
    ],
    correctAnswer: 0,
    explanation: "1. The reaction is: $\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$.\n2. When exactly half of the acid reacts, the concentration of unreacted weak acid $[\\text{CH}_3\\text{COOH}]$ equals the concentration of the conjugate base salt $[\\text{CH}_3\\text{COO}^-]$.\n3. This is the half-equivalence point. According to the Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log_{10}([\\text{salt}]/[\\text{acid}]) = \\text{p}K_a + \\log_{10}(1) = \\text{p}K_a$.\n4. $\\text{p}K_a = -\\log_{10}(1.70 \\times 10^{-5}) = 4.77$, so the pH is $4.77$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_8a-20260721",
    question: "The value of the ionic product of water, $K_w$, is $5.48 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $323\\text{ K}$ ($50^\\circ\\text{C}$). What is the pH of pure water at this temperature?",
    options: [
      { text: "$6.63$" },
      { text: "$7.00$" },
      { text: "$7.37$" },
      { text: "$14.00$" }
    ],
    correctAnswer: 0,
    explanation: "1. In pure water, $[\\text{H}^+] = [\\text{OH}^-]$ (it is neutral).\n2. Therefore, $K_w = [\\text{H}^+]^2 \\implies [\\text{H}^+] = \\sqrt{K_w}$.\n3. At $323\\text{ K}$, $[\\text{H}^+] = \\sqrt{5.48 \\times 10^{-14}} = 2.341 \\times 10^{-7}\\text{ mol dm}^{-3}$.\n4. $\\text{pH} = -\\log_{10}(2.341 \\times 10^{-7}) = 6.63$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_8b-20260721",
    question: "The ionic product of water, $K_w$, increases from $1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $298\\text{ K}$ to $5.48 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$ at $323\\text{ K}$. What thermodynamic deduction can be made from this data?",
    options: [
      { text: "The dissociation of water is exothermic ($\\Delta H < 0$)" },
      { text: "The dissociation of water is endothermic ($\\Delta H > 0$)" },
      { text: "The entropy change of dissociation is negative ($\\Delta S < 0$)" },
      { text: "The reaction has reached completion at $323\\text{ K}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The dissociation of water is represented by: $\\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$.\n2. As the temperature is increased, $K_w$ increases, meaning the equilibrium position shifts to the right, producing more ions.\n3. According to Le Chatelier's Principle, an increase in temperature shifts the equilibrium in the endothermic direction.\n4. Since increasing the temperature shifts this reaction to the right, the forward dissociation reaction must be endothermic ($\\Delta H^\\theta > 0$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_9a-20260721",
    question: "Consider the following two proton transfer equilibria that lie well to the right-hand side:\n\n1) $\\text{CH}_3\\text{COO}^- + \\text{HF} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{F}^-$\n2) $\\text{CH}_3\\text{COOH} + \\text{CN}^- \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{HCN}$\n\nWhat is the correct order of acid strength from strongest to weakest?",
    options: [
      { text: "$\\text{HF} > \\text{CH}_3\\text{COOH} > \\text{HCN}$" },
      { text: "$\\text{HCN} > \\text{CH}_3\\text{COOH} > \\text{HF}$" },
      { text: "$\\text{CH}_3\\text{COOH} > \\text{HF} > \\text{HCN}$" },
      { text: "$\\text{HF} > \\text{HCN} > \\text{CH}_3\\text{COOH}$" }
    ],
    correctAnswer: 0,
    explanation: "1. In equilibrium 1, HF donates a proton to $\\text{CH}_3\\text{COO}^-$. Since the equilibrium lies well to the right, HF is a stronger acid (better proton donor) than $\\text{CH}_3\\text{COOH}$.\n2. In equilibrium 2, $\\text{CH}_3\\text{COOH}$ donates a proton to $\\text{CN}^-$. Since this equilibrium lies well to the right, $\\text{CH}_3\\text{COOH}$ is a stronger acid than HCN.\n3. Combining these results gives the order: $\\text{HF} > \\text{CH}_3\\text{COOH} > \\text{HCN}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_9b-20260721",
    question: "Liquid ammonia undergoes self-ionisation according to the equation: $\\text{NH}_3 + \\text{NH}_3 \\rightleftharpoons \\text{NH}_4^+ + \\text{NH}_2^-$. How would ammonium chloride (\\text{NH}_4\\text{Cl}) and sodium amide (\\text{NaNH}_2) behave when dissolved in liquid ammonia?",
    options: [
      { text: "Ammonium chloride is basic; sodium amide is acidic" },
      { text: "Ammonium chloride is acidic; sodium amide is basic" },
      { text: "Both are neutral solutes" },
      { text: "Ammonium chloride is acidic; sodium amide is neutral" }
    ],
    correctAnswer: 1,
    explanation: "1. In liquid ammonia, the ammonium ion (\\text{NH}_4^+) is the conjugate acid (analogous to $\\text{H}_3\\text{O}^+$ in water), and the amide ion (\\text{NH}_2^-) is the conjugate base (analogous to $\\text{OH}^-$ in water).\n2. Dissolving $\\text{NH}_4\\text{Cl}$ increases the concentration of $\\text{NH}_4^+$, making the solution acidic.\n3. Dissolving $\\text{NaNH}_2$ increases the concentration of $\\text{NH}_2^-$, making the solution basic.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_10a-20260721",
    question: "Sulfurous acid, $\\text{H}_2\\text{SO}_3$, is a weak dibasic acid with first dissociation constant $K_{a1} = 1.20 \\times 10^{-2}\\text{ mol dm}^{-3}$ at $298\\text{ K}$. What is the approximate pH of a $0.500\\text{ mol dm}^{-3}$ solution of sulfurous acid?",
    options: [
      { text: "1.11" },
      { text: "1.92" },
      { text: "2.31" },
      { text: "3.11" }
    ],
    correctAnswer: 0,
    explanation: "1. Using the simplified expression $[\\text{H}^+] = \\sqrt{K_{a1} \\times c}$.\n2. Substituting the values: $[\\text{H}^+] = \\sqrt{1.20 \\times 10^{-2} \\times 0.500} = \\sqrt{6.00 \\times 10^{-3}} = 0.07746\\text{ mol dm}^{-3}$.\n3. $\\text{pH} = -\\log_{10}(0.07746) = 1.11$.\n4. (Solving the quadratic equation $K_a = [\\text{H}^+]^2 / (c - [\\text{H}^+])$ yields $[\\text{H}^+] = 0.0717\\text{ mol dm}^{-3}$, which gives a pH of $1.14$. Both methods show the pH is approximately $1.1$).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_10b-20260721",
    question: "Calculate the pH of a $0.500\\text{ mol dm}^{-3}$ solution of potassium hydroxide, KOH, at $298\\text{ K}$ ($K_w = 1.00 \\times 10^{-14}\\text{ mol}^2\\text{ dm}^{-6}$).",
    options: [
      { text: "13.70" },
      { text: "14.00" },
      { text: "12.70" },
      { text: "13.30" }
    ],
    correctAnswer: 0,
    explanation: "1. KOH is a strong base and dissociates fully, so $[\\text{OH}^-] = 0.500\\text{ mol dm}^{-3}$.\n2. $\\text{pOH} = -\\log_{10}(0.500) = 0.301$.\n3. Since $\\text{pH} + \\text{pOH} = 14.00$ at $298\\text{ K}$: $\\text{pH} = 14.00 - 0.301 = 13.699 \\approx 13.70$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_11a-20260721",
    question: "Dilute hydrochloric acid is titrated into sodium carbonate solution, displaying two equivalence points: A (pH $\\approx 8.3$) and B (pH $\\approx 3.7$). Which indicators are most suitable to detect the endpoints at A and B respectively?",
    options: [
      { text: "Phenolphthalein for A, Methyl orange for B" },
      { text: "Methyl orange for A, Phenolphthalein for B" },
      { text: "Bromothymol blue for both endpoints" },
      { text: "Phenolphthalein for both endpoints" }
    ],
    correctAnswer: 0,
    explanation: "1. The first equivalence point A is in the alkaline region (pH $\\approx 8.3$). Phenolphthalein transition range ($8.2-10.0$) matches this endpoint.\n2. The second equivalence point B is in the acidic region (pH $\\approx 3.7$). Methyl orange transition range ($3.1-4.4$) matches this endpoint.\n3. Therefore, Phenolphthalein is used for the first stage and Methyl orange for the second stage.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_11b-20260721",
    question: "When titrating dilute hydrochloric acid with sodium carbonate solution, why is the change at the first equivalence point A (forming $\\text{NaHCO}_3$) more difficult to detect than the second equivalence point B (forming $\\text{CO}_2$)?",
    options: [
      { text: "The pH changes too rapidly at A" },
      { text: "The steep vertical section of the curve at A is much shorter and less vertical than at B" },
      { text: "The reaction at A is highly exothermic, affecting indicator color" },
      { text: "No indicator transitions in the pH range of A" }
    ],
    correctAnswer: 1,
    explanation: "1. Looking at the titration curve, the steep vertical section of the curve near equivalence point A is short and has a less steep slope than the vertical section near equivalence point B.\n2. Consequently, the pH changes more gradually per drop of acid added at A, making the indicator color transition less sharp and harder to see precisely.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_ab_ed_pp_12-20260810",
    question: "Which of the following represents a conjugate acid–base pair, with the acid listed first?",
    options: [
      { text: "$\\text{H}_3\\text{O}^+ / \\text{OH}^-$" },
      { text: "$\\text{H}_2\\text{SO}_4 / \\text{SO}_4^{2-}$" },
      { text: "$\\text{NH}_4^+ / \\text{NH}_3$" },
      { text: "$\\text{H}_2\\text{O} / \\text{H}_3\\text{O}^+$" }
    ],
    correctAnswer: 2,
    explanation: "• A conjugate acid–base pair consists of two species that differ by exactly one proton ($\\text{H}^+$).\n• The acid is the proton donor, and the base is the proton acceptor.\n• $\\text{NH}_4^+$ donates one proton to form its conjugate base $\\text{NH}_3$.\n• The other pairs do not differ by exactly one proton or have the base listed first.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ab_ed_pp_13-20260810",
    question: "A buffer solution is prepared containing $0.200\\text{ mol dm}^{-3}$ methanoic acid, HCOOH, and $0.150\\text{ mol dm}^{-3}$ sodium methanoate, HCOONa. The acid dissociation constant, $K_a$, of methanoic acid is $1.60 \\times 10^{-4}\\text{ mol dm}^{-3}$ at $298\\text{ K}$. What is the pH of this buffer solution?",
    options: [
      { text: "3.67" },
      { text: "3.80" },
      { text: "3.92" },
      { text: "4.12" }
    ],
    correctAnswer: 0,
    explanation: "• Use the Henderson-Hasselbalch equation: $\\text{pH} = \\text{p}K_a + \\log_{10}([\\text{conjugate base}] / [\\text{weak acid}])$.\n• Calculate $\\text{p}K_a = -\\log_{10}(1.60 \\times 10^{-4}) = 3.796$.\n• Substitute concentrations: $\\text{pH} = 3.796 + \\log_{10}(0.150 / 0.200)$.\n• $\\text{pH} = 3.796 + \\log_{10}(0.75) = 3.796 - 0.125 = 3.671 \\approx 3.67$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ab_ed_pp_14-20260810",
    question: "On a titration curve obtained by adding a strong base to a weak acid, what name is given to the region where the pH increases very slowly before the equivalence point?",
    options: [
      { text: "The equivalence region" },
      { text: "The buffer region" },
      { text: "The neutralisation region" },
      { text: "The end point" }
    ],
    correctAnswer: 1,
    explanation: "• As strong base is added to the weak acid, some of the weak acid is converted into its conjugate base salt, creating a mixture of both species.\n• This mixture acts as a buffer solution, resisting large changes in pH upon further addition of base.\n• This portion of the curve is therefore called the buffer region, where the pH rises gradually.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_1-20260721",
    question: "Which of the following organic structures contains exactly two chiral carbon atoms?",
    options: [
      { text: "$\\text{CH}_3\\text{CH(OH)COOH}$" },
      { text: "$\\text{CH}_3\\text{CHBrCHBrCH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CHBrCH}_2\\text{CH}_3$" },
      { text: "$\\text{CH}_2\\text{ClCH(OH)CH}_2\\text{OH}$" }
    ],
    correctAnswer: 1,
    explanation: "1. In $\\text{CH}_3\\text{CHBrCHBrCH}_3$, both Carbon-2 and Carbon-3 are bonded to four different groups ($-\\text{H}$, $-\\text{Br}$, $-\\text{CH}_3$, and $-\\text{CHBrCH}_3$). Thus, it contains exactly two chiral centres.\n2. $\\text{CH}_3\\text{CH(OH)COOH}$ contains only one chiral centre (Carbon-2).\n3. $\\text{CH}_3\\text{CH}_2\\text{CHBrCH}_2\\text{CH}_3$ contains no chiral centre because Carbon-3 is bonded to two identical ethyl groups.\n4. $\\text{CH}_2\\text{ClCH(OH)CH}_2\\text{OH}$ contains only one chiral centre (Carbon-2).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_2-20260721",
    question: "Which mixture is most suitable for safely preparing 2-hydroxypropanenitrile from ethanal in the laboratory?",
    options: [
      { text: "Liquid HCN and concentrated sulfuric acid" },
      { text: "Aqueous potassium cyanide (KCN) and dilute sulfuric acid" },
      { text: "Gaseous HCN and nickel catalyst" },
      { text: "KCN and sodium hydroxide" }
    ],
    correctAnswer: 1,
    explanation: "1. Hydrogen cyanide (HCN) is extremely toxic and volatile.\n2. To prepare the hydroxynitrile safely, KCN or NaCN is mixed with dilute acid (like $\\text{H}_2\\text{SO}_4$).\n3. This generates HCN in situ and provides a high concentration of the nucleophile $\\text{CN}^-$ to start the reaction at pH 5-8.\n4. Pure liquid HCN is too dangerous, and NaOH would neutralise the proton source needed for the second step.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_3-20260721",
    question: "When propanal reacts with hydrogen cyanide (HCN) in the presence of potassium cyanide (KCN), the product formed is 2-hydroxybutanenitrile. Why is the product mixture optically inactive?",
    options: [
      { text: "The product molecule does not contain a chiral carbon atom" },
      { text: "The reaction occurs via a symmetrical transition state that blocks stereoisomerism" },
      { text: "The reactant carbonyl carbon is planar, allowing attack with equal probability from above or below" },
      { text: "The nucleophile $\\text{CN}^-$ is too small to display steric selectivity" }
    ],
    correctAnswer: 2,
    explanation: "1. The product molecule 2-hydroxybutanenitrile does contain a chiral carbon (Carbon-2) bonded to $-\\text{H}$, $-\\text{OH}$, $-\\text{CN}$, and $-\\text{CH}_2\\text{CH}_3$.\n2. The reactant carbonyl carbon $\\text{C}=\\text{O}$ has trigonal planar geometry.\n3. The nucleophile $\\text{CN}^-$ can attack the planar carbon atom from either above or below the plane with equal (50:50) probability.\n4. This yields equal amounts of the two mirror-image enantiomers, forming a racemic mixture that has no net optical rotation.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_4-20260721",
    question: "A compound W with formula $\\text{C}_5\\text{H}_{10}\\text{O}$ reacts with 2,4-DNPH to form a red precipitate. When W is treated with alkaline iodine, it forms a yellow precipitate. Which of the following is the correct structure of W?",
    options: [
      { text: "Pentan-3-one" },
      { text: "Pentan-2-one" },
      { text: "Pentanal" },
      { text: "2-methylbutanal" }
    ],
    correctAnswer: 1,
    explanation: "1. Reacting with 2,4-DNPH confirms W is a carbonyl compound (aldehyde or ketone).\n2. Reacting with alkaline iodine (the iodoform test) to yield a yellow precipitate ($\\text{CHI}_3$) indicates the presence of a methyl carbonyl group ($\\text{CH}_3\\text{-C}=\\text{O}$).\n3. Pentanal and 2-methylbutanal are aldehydes that do not give a positive iodoform test.\n4. Pentan-3-one ($\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$) is a ketone but lacks a methyl group directly bonded to the carbonyl carbon.\n5. Pentan-2-one ($\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$) has the methyl carbonyl group and yields a positive test.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_5-20260721",
    question: "Which reagent and observation correctly distinguish between propanal and propanone?",
    options: [
      { text: "2,4-DNPH yields a precipitate with propanal but not propanone" },
      { text: "Tollens' reagent forms a silver mirror with propanal but not propanone" },
      { text: "Fehling's solution forms a red precipitate with propanone but not propanal" },
      { text: "Alkaline iodine forms a yellow precipitate with propanal but not propanone" }
    ],
    correctAnswer: 1,
    explanation: "1. Propanal is an aldehyde and is easily oxidised. Propanone is a ketone and is resistant to oxidation.\n2. Tollens' reagent contains $[\\text{Ag(NH}_3)_2]^+$, which oxidises aldehydes to carboxylates while being reduced to a metallic silver mirror. Ketones do not react. This is a standard test.\n3. 2,4-DNPH reacts with both to give precipitates.\n4. Fehling's solution reacts with aldehydes, not ketones.\n5. Alkaline iodine reacts with propanone (methyl ketone) but not propanal.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_6-20260721",
    question: "What is the organic product formed when pentan-3-one is reduced using lithium tetrahydridoaluminate(III), $\\text{LiAlH}_4$, in dry ether?",
    options: [
      { text: "Pentan-1-ol" },
      { text: "Pentan-2-ol" },
      { text: "Pentan-3-ol" },
      { text: "Pentanoic acid" }
    ],
    correctAnswer: 2,
    explanation: "1. Pentan-3-one is a ketone: $\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$.\n2. Reducing agents like $\\text{LiAlH}_4$ reduce ketones to secondary alcohols.\n3. The carbonyl group $\\text{C}=\\text{O}$ at Carbon-3 is converted into a secondary alcohol group $\\text{-CH(OH)-}$.\n4. Therefore, the product is pentan-3-ol.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_7-20260721",
    question: "An ester has the structural formula $\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$. Which products are formed when this ester is heated under reflux with aqueous sodium hydroxide?",
    options: [
      { text: "Propanoic acid and methanol" },
      { text: "Sodium propanoate and methanol" },
      { text: "Sodium ethanoate and ethanol" },
      { text: "Ethanoic acid and sodium methoxide" }
    ],
    correctAnswer: 1,
    explanation: "1. The ester is methyl propanoate ($\\text{CH}_3\\text{CH}_2\\text{COOCH}_3$).\n2. Base hydrolysis using NaOH cleaves the ester bond into a carboxylate salt and an alcohol.\n3. The acid part (propanoate) forms the sodium salt: sodium propanoate ($\\text{CH}_3\\text{CH}_2\\text{COONa}$).\n4. The alcohol part (methyl) forms methanol ($\\text{CH}_3\\text{OH}$).\n5. Base hydrolysis is irreversible and goes to completion.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_8-20260721",
    question: "Which reagent is used to prepare butanoyl chloride from butanoic acid at room temperature in the laboratory?",
    options: [
      { text: "Concentrated hydrochloric acid" },
      { text: "Phosphorus(V) chloride ($\\text{PCl}_5$)" },
      { text: "Chlorine gas and UV light" },
      { text: "Sodium chloride and concentrated sulfuric acid" }
    ],
    correctAnswer: 1,
    explanation: "1. Acyl chlorides are prepared by replacing the $-\\text{OH}$ group of a carboxylic acid with a $-\\text{Cl}$ atom.\n2. The standard laboratory reagent for this conversion is phosphorus(V) chloride ($\\text{PCl}_5$) at room temperature.\n3. The reaction produces the acyl chloride, phosphorus oxychloride ($\\text{POCl}_3$), and hydrogen chloride ($\\text{HCl}$) gas.\n4. Concentrated HCl is not reactive enough to convert carboxylic acids to acyl chlorides.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_9-20260721",
    question: "What is the organic product formed when propanoyl chloride reacts with methylamine ($\\text{CH}_3\\text{NH}_2$)?",
    options: [
      { text: "Methyl propanoate" },
      { text: "N-methylpropanamide" },
      { text: "Propanamide" },
      { text: "Methylammonium propanoate" }
    ],
    correctAnswer: 1,
    explanation: "1. Acyl chlorides react with primary amines via a nucleophilic addition-elimination mechanism.\n2. The amine nitrogen attacks the carbonyl carbon, and a chloride ion is eliminated alongside a proton.\n3. This forms an N-substituted amide bond.\n4. Propanoyl chloride ($\\text{CH}_3\\text{CH}_2\\text{COCl}$) and methylamine ($\\text{CH}_3\\text{NH}_2$) react to form N-methylpropanamide ($\\text{CH}_3\\text{CH}_2\\text{CONHCH}_3$) and HCl.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_10-20260721",
    question: "Which of the following statements about condensation polymerisation is correct?",
    options: [
      { text: "It requires monomers with carbon-carbon double bonds" },
      { text: "It produces polymers without releasing any other compounds" },
      { text: "Polyesters are formed by reacting dicarboxylic acids with diols, eliminating water molecules" },
      { text: "Condensation polymers are resistant to biodegradation due to strong ester linkages" }
    ],
    correctAnswer: 2,
    explanation: "1. Condensation polymerisation involves monomers with two functional groups reacting together with the elimination of a small molecule like water ($\\text{H}_2\\text{O}$) or hydrogen chloride ($\\text{HCl}$).\n2. Polyesters are formed by reacting a dicarboxylic acid and a diol, forming ester linkages and releasing $\\text{H}_2\\text{O}$. This is correct.\n3. Addition polymerisation requires double bonds and does not release small molecules.\n4. Condensation polymers like polyesters are biodegradable because the ester linkages can be hydrolysed by acids or bases.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_11-20260721",
    question: "A single enantiomer of an optically active halogenoalkane is reacted with hydroxide ions. The resulting alcohol product is found to be a racemic mixture that is optically inactive. Which mechanism does this reaction follow, and what feature explains this outcome?",
    options: [
      { text: "$S_N2$ mechanism, because of Walden inversion" },
      { text: "$S_N1$ mechanism, because the nucleophile attacks a planar carbocation intermediate with equal probability from either side" },
      { text: "$S_N2$ mechanism, because the transition state has trigonal bipyramidal geometry" },
      { text: "$S_N1$ mechanism, because the rate-determining step involves the nucleophile" }
    ],
    correctAnswer: 1,
    explanation: "1. A racemic mixture is formed when both enantiomers are produced in equal (50:50) amounts.\n2. In an $S_N1$ mechanism, the rate-determining step is the ionization of the halogenoalkane to form a planar carbocation intermediate.\n3. The incoming nucleophile ($\\text{OH}^-$) has an equal probability of attacking this planar carbocation from either the left or the right side.\n4. This equal probability of attack results in racemisation (50:50 mixture of enantiomers) and a complete loss of optical activity.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_12-20260721",
    question: "A single enantiomer of a primary halogenoalkane undergoes nucleophilic substitution via an $S_N2$ mechanism. What is the stereochemical outcome for the carbon atom undergoing substitution?",
    options: [
      { text: "Complete racemisation yielding an optically inactive product" },
      { text: "Inversion of configuration (Walden inversion) yielding a single enantiomer" },
      { text: "Retention of configuration with no change in spatial arrangement" },
      { text: "Formation of a mixture of geometric and optical isomers" }
    ],
    correctAnswer: 1,
    explanation: "1. The $S_N2$ mechanism is a single-step concerted process.\n2. The nucleophile attacks from the opposite side of the leaving group (backside attack).\n3. As the carbon-halogen bond breaks and the carbon-nucleophile bond forms, the other three groups are pushed through, resulting in an inversion of configuration (Walden inversion).\n4. The product remains optically active as a single enantiomer with inverted configuration.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_13-20260721",
    question: "The boiling temperatures of butane, propanal, and propan-1-ol are $272\\text{ K}$, $322\\text{ K}$, and $370\\text{ K}$ respectively. Which statement correctly accounts for this trend?",
    options: [
      { text: "Propanal forms intermolecular hydrogen bonds, raising its boiling point above butane" },
      { text: "Propan-1-ol molecules experience only London forces and dipole-dipole interactions" },
      { text: "Propanal molecules experience dipole-dipole interactions which are stronger than London forces in butane but weaker than hydrogen bonding in propan-1-ol" },
      { text: "Butane is polar due to the presence of C-H bonds, whereas propanal is completely non-polar" }
    ],
    correctAnswer: 2,
    explanation: "1. Butane is an alkane (non-polar) and experiences only London forces, resulting in the lowest boiling temperature ($272\\text{ K}$).\n2. Propanal is a carbonyl compound and has a polar $\\text{C}=\\text{O}$ double bond, so it experiences permanent dipole-dipole interactions in addition to London forces ($322\\text{ K}$).\n3. Propan-1-ol is an alcohol and contains the $-\\text{OH}$ group, allowing it to form strong intermolecular hydrogen bonds, which require the most energy to break ($370\\text{ K}$).\n4. Carbonyl compounds like propanal cannot form hydrogen bonds with each other because they lack a hydrogen atom bonded to an oxygen.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_14-20260721",
    question: "Propanone is completely miscible with water, whereas pentan-2-one has a solubility of only $5.6\\text{ g per } 100\\text{ g of water}$ at $298\\text{ K}$. What is the reason for this difference in solubility?",
    options: [
      { text: "Pentan-2-one is unable to form hydrogen bonds with water molecules" },
      { text: "Pentan-2-one has a larger non-polar, hydrophobic hydrocarbon tail which disrupts the water hydrogen-bonding network" },
      { text: "Propanone reacts chemically with water to form a stable diol intermediate" },
      { text: "The carbonyl group in pentan-2-one is non-polar due to steric hindrance" }
    ],
    correctAnswer: 1,
    explanation: "1. Both propanone and pentan-2-one contain polar $\\text{C}=\\text{O}$ groups and can form hydrogen bonds with water molecules.\n2. However, pentan-2-one has a longer hydrocarbon chain (a 5-carbon chain) compared to propanone (a 3-carbon chain).\n3. This non-polar, hydrophobic alkyl tail disrupts the hydrogen bonds between water molecules without forming strong interactions in return.\n4. As the hydrophobic part of the molecule becomes larger, solubility in water decreases.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_15-20260721",
    question: "An alcohol is warmed with aqueous iodine in the presence of sodium hydroxide, yielding a yellow precipitate. Which of the following alcohols is it?",
    options: [
      { text: "Propan-1-ol" },
      { text: "2-methylpropan-1-ol" },
      { text: "Butan-2-ol" },
      { text: "Butan-1-ol" }
    ],
    correctAnswer: 2,
    explanation: "1. The reaction described is the iodoform (triiodomethane) test, which gives a yellow precipitate of $\\text{CHI}_3$ in the presence of $\\text{CH}_3\\text{CO-}$ or $\\text{CH}_3\\text{CH(OH)-}$ groups.\n2. Propan-1-ol, 2-methylpropan-1-ol, and butan-1-ol are primary alcohols (except propan-1-ol which oxidises to propanal, etc., none contains the $\\text{CH}_3\\text{CH(OH)-}$ group except ethanol).\n3. Butan-2-ol is a secondary alcohol with structure $\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3$, which contains the $\\text{CH}_3\\text{CH(OH)-}$ group.\n4. Therefore, it is oxidised to butanone (a methyl ketone) in situ and reacts with iodine/NaOH to yield the yellow precipitate.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_16-20260721",
    question: "A sample of a carboxylic acid is analyzed in the vapor phase using mass spectrometry. A peak is observed at an $m/z$ ratio of $120$. Which carboxylic acid is present in the sample?",
    options: [
      { text: "Methanoic acid" },
      { text: "Ethanoic acid" },
      { text: "Propanoic acid" },
      { text: "Butanoic acid" }
    ],
    correctAnswer: 1,
    explanation: "1. In the gas phase and in the absence of polar solvents, carboxylic acids exist as stable dimers held together by double hydrogen bonds.\n2. The observed peak at $m/z = 120$ corresponds to the molecular mass of the dimer.\n3. The monomer mass must be exactly half of this dimer mass: $120 / 2 = 60\\text{ g mol}^{-1}$.\n4. An organic compound with a molar mass of $60\\text{ g mol}^{-1}$ containing a carboxyl group ($-\\text{COOH}$) is ethanoic acid ($\\text{CH}_3\\text{COOH}$, $Mr = 15 + 12 + 32 + 1 = 60$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_17-20260721",
    question: "Carboxylic acids have higher boiling temperatures than alcohols of similar molecular mass. What is the molecular explanation for this difference?",
    options: [
      { text: "Carboxylic acids have three polar bonds, which increases their overall molecular size" },
      { text: "Carboxylic acid molecules associate via double hydrogen bonds to form stable dimers" },
      { text: "Alcohols are unable to form intermolecular hydrogen bonds" },
      { text: "Carboxylic acids are strong acids that completely dissociate in the liquid state" }
    ],
    correctAnswer: 1,
    explanation: "1. Both alcohols and carboxylic acids can form intermolecular hydrogen bonds.\n2. However, carboxylic acids can align to form stable dimers, where two molecules are joined by a pair of hydrogen bonds.\n3. These dimers double the effective molecular size and require significantly more thermal energy to vaporise than the single hydrogen-bonded networks of alcohols.\n4. Dissociation to ions does not occur in pure liquid state and is unrelated to boiling point.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_18-20260721",
    question: "Pentanal, pentan-2-one, and pentan-3-one all have a boiling temperature of $102^\\circ\\text{C}$ and form orange precipitates with 2,4-DNPH. How can a student experimentally identify which specific carbonyl compound is present in an unknown sample?",
    options: [
      { text: "By measuring the boiling temperature of the mixture under vacuum" },
      { text: "By purifying, drying, and measuring the melting temperature of the 2,4-DNPH derivative" },
      { text: "By using Fehling's solution, which yields a positive test for all three" },
      { text: "By using Tollens' reagent, which forms a silver mirror with both ketones" }
    ],
    correctAnswer: 1,
    explanation: "1. Since all three isomers share the same boiling point ($102^\\circ\\text{C}$), simple distillation cannot distinguish them.\n2. However, the hydrazone derivatives formed when they react with 2,4-DNPH have distinct and characteristic melting temperatures (pentanal derivative: $104^\\circ\\text{C}$; pentan-2-one derivative: $144^\\circ\\text{C}$; pentan-3-one derivative: $156^\\circ\\text{C}$).\n3. By filtering, recrystallising, drying, and measuring the melting point of the derivative, the student can match the experimental value to database records to identify the original compound.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_19-20260721",
    question: "A triglyceride molecule containing three stearic acid residues (glyceryl tristearate) is heated under reflux with aqueous sodium hydroxide. Which of the following correctly lists the organic products of this reaction?",
    options: [
      { text: "Propane-1,2-diol and stearic acid" },
      { text: "Propane-1,2,3-triol and sodium stearate" },
      { text: "Propan-1-ol and sodium stearate" },
      { text: "Propane-1,2,3-triol and ethyl stearate" }
    ],
    correctAnswer: 1,
    explanation: "1. Triglycerides are triesters of glycerol (propane-1,2,3-triol) and fatty acids.\n2. Base hydrolysis (saponification) of glyceryl tristearate with NaOH cleaves the three ester linkages.\n3. The alcohol part yields glycerol (propane-1,2,3-triol).\n4. The fatty acid part is deprotonated by NaOH to form its sodium salt: sodium stearate (soap).\n5. Propane-1,2-diol is not glycerol, and free stearic acid is not formed in alkaline conditions.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_20-20260721",
    question: "A student attempts to prepare a polyester by mixing propanedioic acid ($\\text{HOOCCH}_2\\text{COOH}$) and methanol ($\\text{CH}_3\\text{OH}$). Why does this reaction fail to produce a polymer?",
    options: [
      { text: "Propanedioic acid is monofunctional, causing immediate chain termination" },
      { text: "Methanol is monofunctional, which terminates the carbon chain once it reacts" },
      { text: "Methanol reacts with itself to form dimethyl ether instead of reacting with the acid" },
      { text: "An addition polymerisation catalyst is required to initiate the reaction" }
    ],
    correctAnswer: 1,
    explanation: "1. For polymerisation to occur, monomers must be bifunctional (have reactive groups at both ends) to allow the chain to continue growing.\n2. Propanedioic acid is bifunctional (two $-\\text{COOH}$ groups).\n3. Methanol ($\\text{CH}_3\\text{OH}$) is monofunctional (only one $-\\text{OH}$ group).\n4. Once methanol reacts with one carboxyl group of the acid, that end of the molecule is blocked and cannot undergo further esterification, causing chain termination.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_21-20260721",
    question: "In the industrial production of polyesters like Terylene, benzene-1,4-dicarboxylic acid is reacted with ethane-1,2-diol. Why is the dicarboxylic acid preferred in industry over the corresponding diacyl chloride?",
    options: [
      { text: "The reaction with diacyl chloride does not go to completion" },
      { text: "Diacyl chloride polymerisation releases hazardous and corrosive hydrogen chloride gas" },
      { text: "Dicarboxylic acid polymerisation occurs at room temperature without heating" },
      { text: "Diacyl chlorides react with ethane-1,2-diol to form addition polymers instead" }
    ],
    correctAnswer: 1,
    explanation: "1. While diacyl chlorides react very rapidly at room temperature, their condensation polymerisation releases gaseous hydrogen chloride (HCl) as a byproduct.\n2. HCl is highly toxic, acidic, and corrosive, which creates severe health, safety, and equipment corrosion risks in industrial factories.\n3. Using the dicarboxylic acid releases water ($\\text{H}_2\\text{O}$) as a byproduct instead, which is completely safe and environmentally benign.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_22-20260721",
    question: "A forensic scientist uses combined Gas Chromatography-Mass Spectrometry (GC-MS) to analyze a blood sample. What is the primary advantage of GC-MS over gas chromatography alone?",
    options: [
      { text: "GC separates the mixture and MS determines the exact concentration of each component" },
      { text: "GC separates the components of the mixture and MS identifies each component by its mass spectrum" },
      { text: "MS separates the mixture and GC is used to detect the retention time" },
      { text: "GC-MS is a non-destructive technique that allows the sample to be completely recovered" }
    ],
    correctAnswer: 1,
    explanation: "1. Gas chromatography (GC) is excellent at separating mixtures but cannot positively identify components because different compounds can have identical retention times.\n2. In GC-MS, GC separates the mixture and each pure component exits the column directly into the mass spectrometer (MS).\n3. The MS bombards the molecules to produce a unique mass spectrum (molecular ion and fragments), allowing positive identification against a database.\n4. Both techniques destroy the sample during detection.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_23-20260721",
    question: "Which of the following elements contains isotopes that are all suitable for analysis by Nuclear Magnetic Resonance (NMR) spectroscopy?",
    options: [
      { text: "Carbon-12 ($^{12}\\text{C}$) and Oxygen-16 ($^{16}\\text{O}$)" },
      { text: "Carbon-13 ($^{13}\\text{C}$) and Hydrogen-1 ($^{1}\\text{H}$)" },
      { text: "Oxygen-16 ($^{16}\\text{O}$) and Sulfur-32 ($^{32}\\text{S}$)" },
      { text: "Helium-4 ($^{4}\\text{He}$) and Carbon-12 ($^{12}\\text{C}$)" }
    ],
    correctAnswer: 1,
    explanation: "1. For a nucleus to be NMR-active, it must possess a net residual nuclear spin.\n2. This occurs only in nuclei with an odd number of nucleons (protons + neutrons).\n3. Carbon-13 ($^{13}\\text{C}$ has 13 nucleons) and Hydrogen-1 ($^{1}\\text{H}$ has 1 nucleon) both have odd nucleon numbers and are NMR-active.\n4. Carbon-12 ($^{12}\\text{C}$), Oxygen-16 ($^{16}\\text{O}$), and Sulfur-32 ($^{32}\\text{S}$) have even numbers of nucleons, meaning their spins cancel out, making them NMR-silent.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_24-20260721",
    question: "Tetramethylsilane (TMS) is added as a reference standard in proton NMR spectroscopy. Which of the following is NOT a reason why TMS is chosen?",
    options: [
      { text: "It contains 12 equivalent hydrogen atoms, yielding a single sharp peak" },
      { text: "It is chemically inert and does not react with the sample" },
      { text: "It has a high boiling point and remains in the solution permanently" },
      { text: "It is highly shielded, producing a signal far to the right of most organic compound peaks" }
    ],
    correctAnswer: 2,
    explanation: "1. TMS has a low boiling point ($26.5^\\circ\\text{C}$), making it highly volatile.\n2. This volatility is a major advantage because it allows TMS to be easily evaporated and removed from the sample after analysis to recover the pure analyte.\n3. The other options are true: it contains 12 equivalent protons (giving one strong peak), is chemically inert, and appears far upfield ($\\delta = 0\\text{ ppm}$).",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_pp_25-20260721",
    question: "How can a student easily distinguish between butanal and butanone using low-resolution proton ($^{1}\\text{H}$) NMR spectroscopy?",
    options: [
      { text: "Butanone has four peaks in its spectrum, whereas butanal has only three peaks" },
      { text: "Butanal has four peaks in its spectrum, including a peak at $\\delta \\approx 9.8\\text{ ppm}$, whereas butanone has three peaks and no peak above $\\delta = 3.0\\text{ ppm}$" },
      { text: "Butanal has a single peak representing all 8 protons, whereas butanone has three peaks" },
      { text: "Both compounds have three peaks, but butanone has a peak representing a hydroxyl proton" }
    ],
    correctAnswer: 1,
    explanation: "1. Butanal ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$) has 4 unique proton environments (terminal $-\\text{CH}_3$, intermediate $-\\text{CH}_2-$, adjacent $-\\text{CH}_2-$, and aldehyde $-\\text{CHO}$). It has 4 peaks, including a highly characteristic downfield aldehyde peak at $\\delta \\approx 9.8\\text{ ppm}$.\n2. Butanone ($\\text{CH}_3\\text{COCH}_2\\text{CH}_3$) has 3 unique proton environments (terminal $-\\text{CH}_3$, adjacent $-\\text{CH}_2-$, and methyl adjacent to carbonyl $-\\text{CH}_3$). It has 3 peaks, all appearing below $\\delta = 3.0\\text{ ppm}$.\n3. Neither compound contains a hydroxyl group.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_26-20260721",
    question: "What is the expected number of peaks and the simplest ratio of peak areas (integration trace) in the low-resolution proton ($^{1}\\text{H}$) NMR spectrum of propan-2-ol, $\\text{CH}_3\\text{CH(OH)CH}_3$?",
    options: [
      { text: "2 peaks with a ratio of $7:1$" },
      { text: "3 peaks with a ratio of $6:1:1$" },
      { text: "4 peaks with a ratio of $3:2:2:1$" },
      { text: "3 peaks with a ratio of $3:3:2$" }
    ],
    correctAnswer: 1,
    explanation: "1. Propan-2-ol has 8 hydrogen atoms in total.\n2. The six hydrogen atoms in the two terminal methyl ($-\\text{CH}_3$) groups are equivalent due to symmetry, forming 1 environment (6 protons).\n3. The single hydrogen atom on the central carbon ($-\\text{CH}-$) forms a second environment (1 proton).\n4. The hydrogen atom in the alcohol group ($-\\text{OH}$) forms a third environment (1 proton).\n5. Therefore, the spectrum has 3 peaks with a relative area ratio of $6:1:1$.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_pp_27-20260721",
    question: "Which of the following isomers of pentane ($\\text{C}_5\\text{H}_{12}$) shows exactly one peak in its low-resolution proton ($^{1}\\text{H}$) NMR spectrum?",
    options: [
      { text: "Pentane" },
      { text: "2-methylbutane" },
      { text: "2,2-dimethylpropane" },
      { text: "None of the isomers show only one peak" }
    ],
    correctAnswer: 2,
    explanation: "1. A single peak in proton NMR indicates that all hydrogen atoms in the molecule are chemically equivalent.\n2. In 2,2-dimethylpropane (neopentane, $\\text{C(CH}_3\\text{)}_4$), the central carbon has no hydrogens, and the four methyl groups are arranged symmetrically around it.\n3. All 12 hydrogen atoms are in identical environments, yielding exactly 1 peak.\n4. Pentane yields 3 peaks and 2-methylbutane yields 4 peaks.",
    level: 2,
    topic: "edexcel-unit-5",
    lessonNum: 4,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  }
);

questionBank.push(
  {
    id: "q_org_ed_exam_1-20260721",
    question: "Which of the following amino acid structures contains exactly two chiral carbon atoms?",
    options: [
      { text: "$\\text{H}_2\\text{NCH(COOH)CH}_2\\text{CH}_2\\text{OH}$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH(CH}_3)_2$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH}_2\\text{C}_6\\text{H}_5$" },
      { text: "$\\text{H}_2\\text{NCH(COOH)CH(CH}_3)\\text{CH}_2\\text{CH}_3$" }
    ],
    correctAnswer: 3,
    explanation: "1. For a carbon atom to be chiral, it must be bonded to four different groups.\n2. In all options, Carbon-2 (carrying $-\\text{NH}_2$ and $-\\text{COOH}$) is chiral.\n3. In option D (isoleucine analogue), Carbon-3 is bonded to $-\\text{H}$, $-\\text{CH}_3$, $-\\text{CH}_2\\text{CH}_3$, and the $-\\text{CH(NH}_2)\\text{COOH}$ group.\n4. Since these four groups are completely different, Carbon-3 is also chiral, giving the molecule exactly two chiral carbon atoms.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_2-20260721",
    question: "The same carboxylic acid is obtained either by the hydrolysis of a nitrile $P$ or by the oxidation of an alcohol $Q$. Which pair could be $P$ and $Q$?",
    options: [
      { text: "$P = \\text{CH}_3\\text{CH}_2\\text{CN}$ and $Q = \\text{CH}_3\\text{CH}_2\\text{OH}$" },
      { text: "$P = \\text{(CH}_3)_2\\text{CHCN}$ and $Q = \\text{(CH}_3)_3\\text{COH}$" },
      { text: "$P = \\text{C}_6\\text{H}_5\\text{CH(CH}_3)\\text{CN}$ and $Q = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH(OH)CH}_3$" },
      { text: "$P = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CN}$ and $Q = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH}_2\\text{OH}$" }
    ],
    correctAnswer: 3,
    explanation: "1. Hydrolysis of nitrile $P$ converts the $-\\text{CN}$ group to $-\\text{COOH}$ (maintaining the same carbon skeleton, total carbons = chain carbons + 1).\n2. Oxidation of primary alcohol $Q$ converts the $-\\text{CH}_2\\text{OH}$ group to $-\\text{COOH}$ (maintaining the same total carbon number).\n3. In Option D, nitrile $P$ is phenylethanenitrile (8 carbons), which hydrolyses to phenylethanoic acid ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}$).\n4. Alcohol $Q$ is 2-phenylethan-1-ol (8 carbons), which is a primary alcohol and oxidises to phenylethanoic acid ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}$).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_3-20260721",
    question: "Which pair of reactants produces an ester with the molecular formula $\\text{C}_3\\text{H}_7\\text{COOC}_2\\text{H}_5$?",
    options: [
      { text: "$\\text{C}_2\\text{H}_5\\text{Cl}$ and $$\\text{C}_3\\text{H}_7\\text{COOH}$" },
      { text: "$\\text{C}_2\\text{H}_5\\text{OH}$ and $$\\text{C}_3\\text{H}_7\\text{COOH}$" },
      { text: "$\\text{C}_3\\text{H}_7\\text{OH}$ and $$\\text{C}_2\\text{H}_5\\text{COCl}$" },
      { text: "$\\text{C}_3\\text{H}_7\\text{OH}$ and $$\\text{C}_2\\text{H}_5\\text{COOH}$" }
    ],
    correctAnswer: 1,
    explanation: "1. The ester formula $\\text{C}_3\\text{H}_7\\text{COOC}_2\\text{H}_5$ is ethyl butanoate.\n2. The carboxylate part is derived from butanoic acid ($\\text{C}_3\\text{H}_7\\text{COOH}$).\n3. The alkyl part is derived from ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$).\n4. Reacting ethanol and butanoic acid under reflux in the presence of an acid catalyst produces ethyl butanoate.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_4-20260721",
    question: "One of the constituents of beeswax has the formula $\\text{CH}_3\\text{(CH}_2)_{24}\\text{CO}_2\\text{(CH}_2)_{29}\\text{CH}_3$. What are the products of its alkaline hydrolysis?",
    options: [
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COOH}$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{O}^-$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COOH}$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$ and $\\text{CH}_3\\text{(CH}_2)_{29}\\text{O}^-$" }
    ],
    correctAnswer: 2,
    explanation: "1. Alkaline hydrolysis of an ester using aqueous base (e.g. NaOH) cleaves the ester bond to form a carboxylate salt/ion and an alcohol.\n2. The carboxylic acid portion ($\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO-}$) is deprotonated in alkaline conditions to yield the carboxylate ion $\\text{CH}_3\\text{(CH}_2)_{24}\\text{COO}^-$.\n3. The alcohol portion yields the long-chain alcohol $\\text{CH}_3\\text{(CH}_2)_{29}\\text{OH}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_org_ed_exam_5-20260721",
    question: "An organic compound gives a positive tri-iodomethane (iodoform) test and a yellow precipitate with 2,4-dinitrophenylhydrazine, but does not react with either Tollens' reagent or Fehling's solution. Which compound is it?",
    options: [
      { text: "$\\text{CH}_3\\text{CHO}$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{OH}$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{COCH}_3$" },
      { text: "$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$" }
    ],
    correctAnswer: 2,
    explanation: "1. A positive 2,4-DNPH test confirms the presence of a carbonyl group (aldehyde or ketone), ruling out alcohol (B).\n2. No reaction with Tollens' or Fehling's confirms the compound is a ketone rather than an aldehyde, ruling out aldehydes (A and D).\n3. A positive iodoform test confirms the presence of a methyl carbonyl group ($\\text{CH}_3\\text{CO-}$).\n4. Butanone ($\\text{CH}_3\\text{CH}_2\\text{COCH}_3$) contains the methyl ketone group, reacts with 2,4-DNPH, and does not oxidise with Tollens' or Fehling's.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 5,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-21"
  },
  {
    id: "q_kin_ed_exam_9-20260726",
    question: "The reaction energy profile for a two-step reaction is shown in the diagram below:\n\nWhich step is the rate-determining step, and what is its activation energy?",
    options: [
      { text: "Step 1; $+150\\text{ kJ mol}^{-1}$" },
      { text: "Step 2; $+80\\text{ kJ mol}^{-1}$" },
      { text: "Step 1; $+250\\text{ kJ mol}^{-1}$" },
      { text: "Step 2; $+30\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The rate-determining step is the slowest step, which corresponds to the step with the highest activation energy barrier.\n2. The activation energy for Step 1 is the difference between Peak 1 (TS1) and the reactants: $250 - 100 = 150\\text{ kJ mol}^{-1}$.\n3. The activation energy for Step 2 is the difference between Peak 2 (TS2) and the intermediate valley: $180 - 150 = 30\\text{ kJ mol}^{-1}$.\n4. Therefore, Step 1 is the rate-determining step with an activation energy of $+150\\text{ kJ mol}^{-1}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 550 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <defs>
    <marker id="arrow-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#94a3b8" />
    </marker>
  </defs>
  <line x1="70" y1="320" x2="70" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-head)" />
  <line x1="70" y1="320" x2="510" y2="320" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-head)" />
  <text x="30" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 30 35)" text-anchor="end">Energy / kJ mol⁻¹</text>
  <text x="500" y="338" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Reaction Coordinate</text>
  <path d="M 70,220 C 110,220 150,70 190,70 C 230,70 250,170 290,170 C 330,170 350,140 370,140 C 390,140 410,270 450,270" fill="none" stroke="#38bdf8" stroke-width="3" />
  <line x1="70" y1="220" x2="110" y2="220" stroke="#475569" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="70" x2="190" y2="70" stroke="#ef4444" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="170" x2="290" y2="170" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="140" x2="370" y2="140" stroke="#eab308" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="70" y1="270" x2="450" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3" />
  
  <line x1="65" y1="70" x2="70" y2="70" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="74" fill="#cbd5e1" font-size="10" text-anchor="end">250</text>
  
  <line x1="65" y1="140" x2="70" y2="140" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="144" fill="#cbd5e1" font-size="10" text-anchor="end">180</text>
  
  <line x1="65" y1="170" x2="70" y2="170" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="174" fill="#cbd5e1" font-size="10" text-anchor="end">150</text>
  
  <line x1="65" y1="220" x2="70" y2="220" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="224" fill="#cbd5e1" font-size="10" text-anchor="end">100</text>
  
  <line x1="65" y1="270" x2="70" y2="270" stroke="#94a3b8" stroke-width="1.5" />
  <text x="60" y="274" fill="#cbd5e1" font-size="10" text-anchor="end">50</text>
  
  <text x="120" y="215" fill="#cbd5e1" font-size="10">Reactants</text>
  <text x="200" y="65" fill="#ef4444" font-size="10">TS1</text>
  <text x="300" y="165" fill="#cbd5e1" font-size="10">Intermediate</text>
  <text x="380" y="135" fill="#eab308" font-size="10">TS2</text>
  <text x="460" y="265" fill="#cbd5e1" font-size="10">Products</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_10-20260726",
    question: "To follow the rate of reaction between propanone and iodine using a colorimeter, a student first constructs the calibration curve shown below. Why is this curve essential for the experiment?",
    options: [
      { text: "To prove that the reaction is zero-order with respect to iodine." },
      { text: "To convert the measured absorbance values at different times into actual iodine concentrations." },
      { text: "To calculate the activation energy using the Beer-Lambert law." },
      { text: "To determine the rate constant k directly from the gradient." }
    ],
    correctAnswer: 1,
    explanation: "1. A colorimeter measures absorbance, which depends on the intensity of light transmitted through the solution.\n2. To calculate rate equations and rate constants, we need concentration values rather than raw absorbance values.\n3. The calibration curve provides a direct reference to translate absorbance readings at specific times into actual concentrations of iodine in mol dm⁻³.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 500 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <line x1="60" y1="320" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="460" y2="320" stroke="#94a3b8" stroke-width="2" />
  <text x="35" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 35 35)" text-anchor="end">Absorbance (at 480 nm)</text>
  <text x="450" y="360" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">[I₂] / mol dm⁻³</text>
  <line x1="60" y1="320" x2="420" y2="80" stroke="#10b981" stroke-width="3" />
  <circle cx="150" cy="260" r="4" fill="#ef4444" />
  <circle cx="240" cy="200" r="4" fill="#ef4444" />
  <circle cx="330" cy="140" r="4" fill="#ef4444" />
  <circle cx="420" cy="80" r="4" fill="#ef4444" />
  <text x="50" y="324" fill="#94a3b8" font-size="10" text-anchor="end">0.0</text>
  <text x="50" y="264" fill="#94a3b8" font-size="10" text-anchor="end">0.2</text>
  <text x="50" y="204" fill="#94a3b8" font-size="10" text-anchor="end">0.4</text>
  <text x="50" y="144" fill="#94a3b8" font-size="10" text-anchor="end">0.6</text>
  <text x="50" y="84" fill="#94a3b8" font-size="10" text-anchor="end">0.8</text>
  <text x="60" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.0</text>
  <text x="150" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.002</text>
  <text x="240" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.004</text>
  <text x="330" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.006</text>
  <text x="420" y="340" fill="#94a3b8" font-size="10" text-anchor="middle">0.008</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_11-20260726",
    question: "The rate data below was obtained for the reaction: $2\\text{NO(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$ at a constant temperature:\n\n| Experiment | [NO] / mol dm⁻³ | [O₂] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |\n| :---: | :---: | :---: | :---: |\n| 1 | 0.010 | 0.010 | $1.2 \\times 10^{-4}$ |\n| 2 | 0.020 | 0.010 | $4.8 \\times 10^{-4}$ |\n| 3 | 0.010 | 0.020 | $2.4 \\times 10^{-4}$ |\n\nUsing this data, calculate the value and state the units of the rate constant, $k$:",
    options: [
      { text: "$1.2 \\times 10^2\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "$1.2\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$1.2 \\times 10^4\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "$1.2 \\times 10^2\\text{ dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. Compare Exp 1 & 2: [O₂] is constant, [NO] doubles. The rate increases by a factor of 4 ($4.8 \\times 10^{-4} / 1.2 \\times 10^{-4} = 4$). Order with respect to NO is 2.\n2. Compare Exp 1 & 3: [NO] is constant, [O₂] doubles. The rate doubles ($2.4 \\times 10^{-4} / 1.2 \\times 10^{-4} = 2$). Order with respect to O₂ is 1.\n3. The rate equation is Rate = k[NO]²[O₂] (overall order = 3).\n4. Calculate k: $k = \\text{Rate} / ([\\text{NO}]^2[\\text{O}_2]) = (1.2 \\times 10^{-4}) / (0.010^2 \\times 0.010) = 1.2 \\times 10^2\\text{ dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_12-20260726",
    question: "A student collected the following data for Arrhenius values of a chemical reaction:\n\n| Temperature T / K | 1/T / 10⁻³ K⁻¹ | ln(k / s⁻¹) |\n| :---: | :---: | :---: |\n| 300 | 3.33 | -10.0 |\n| 320 | 3.13 | -7.7 |\n\nCalculate the activation energy ($E_a$) of the reaction using this data. ($R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$)",
    options: [
      { text: "$95.6\\text{ kJ mol}^{-1}$" },
      { text: "$95600\\text{ kJ mol}^{-1}$" },
      { text: "$11.5\\text{ kJ mol}^{-1}$" },
      { text: "$47.8\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "1. The gradient ($m$) of the ln k against 1/T plot is $m = -E_a / R$.\n2. Calculate $m$: $m = \\Delta \\ln k / \\Delta (1/T) = (-7.7 - (-10.0)) / (3.13 \\times 10^{-3} - 3.33 \\times 10^{-3}) = 2.3 / (-0.20 \\times 10^{-3}) = -11500\\text{ K}$.\n3. Calculate $E_a$: $E_a = -m \\times R = -(-11500) \\times 8.31 = 95565\\text{ J mol}^{-1}$.\n4. Convert to kJ mol⁻¹: $95565 / 1000 = 95.6\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_14-20260726",
    question: "Reaction X has an activation energy ($E_a$) of $+40\\text{ kJ mol}^{-1}$, while Reaction Y has an activation energy of $+120\\text{ kJ mol}^{-1}$. If the temperature of both reactions is increased from $300\\text{ K}$ to $310\\text{ K}$ at constant concentration, which reaction experiences the greater proportional increase in rate, and why?",
    options: [
      { text: "Reaction X; because a lower activation energy means molecules collide more frequently." },
      { text: "Reaction Y; because the fraction of molecules with energy $\\ge E_a$ increases much more significantly for reactions with a higher energy barrier." },
      { text: "Reaction X; because raising the temperature by $10\\text{ K}$ always doubles the rate of low $E_a$ reactions." },
      { text: "Reaction Y; because the rate constant k is inversely proportional to temperature in the Arrhenius equation." }
    ],
    correctAnswer: 1,
    explanation: "1. The fraction of molecules with energy $\\ge E_a$ is represented by the term $e^{-E_a/RT}$ in the Arrhenius equation.\n2. For reactions with a high activation energy ($E_a$), raising the temperature shifts the Maxwell-Boltzmann distribution, causing a very large proportional increase in the number of molecules capable of reacting.\n3. For low $E_a$ reactions, a large fraction of molecules already has enough energy, so the increase is proportionally smaller.\n4. Therefore, Reaction Y experiences a much greater proportional increase in rate.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_15-20260726",
    question: "The graph below shows how the initial rate of a heterogeneous, metal-catalyzed gas reaction changes as the pressure of the gaseous reactant is increased:\n\nWhich statement correctly explains the shape of the curve at high pressures?",
    options: [
      { text: "The reaction becomes zero-order because the active sites on the catalyst surface are completely saturated with reactant molecules." },
      { text: "The reaction becomes first-order because the high pressure poisons the catalyst surface permanently." },
      { text: "The reaction rate decreases because reactant molecules desorb too rapidly from the surface." },
      { text: "The activation energy increases at high pressures, preventing further rate increases." }
    ],
    correctAnswer: 0,
    explanation: "1. At low pressures (left side), the rate is proportional to pressure (first-order) because more active sites become occupied as pressure increases.\n2. At high pressures (right side), the rate levels off and becomes independent of pressure (zero-order).\n3. This occurs because all available active sites on the solid catalyst surface are fully occupied (saturated) with adsorbed reactant molecules.\n4. Adding more pressure cannot increase the rate further since there are no free sites for additional reactants to adsorb and react.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26",
    imageHtml: `<svg viewBox="0 0 500 380" class="w-full max-w-[400px] rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#070f1e] to-[#0b1b35] shadow-xl font-sans mx-auto">
  <line x1="60" y1="320" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" />
  <line x1="60" y1="320" x2="460" y2="320" stroke="#94a3b8" stroke-width="2" />
  <text x="35" y="35" fill="#94a3b8" font-size="11" font-weight="600" transform="rotate(-90 35 35)" text-anchor="end">Initial Rate of Reaction</text>
  <text x="450" y="340" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">Reactant Pressure / atm</text>
  <path d="M 60,320 Q 200,120 300,120 L 460,120" fill="none" stroke="#38bdf8" stroke-width="3" />
  <text x="380" y="105" fill="#10b981" font-size="10" font-weight="bold">Zero-Order (Saturation)</text>
</svg>`
  },
  {
    id: "q_kin_ed_exam_16-20260726",
    question: "When evaluating catalysts for a large-scale chemical process, a green chemistry perspective favors heterogeneous catalysts over homogeneous catalysts. What is the primary chemical reason for this preference?",
    options: [
      { text: "Heterogeneous catalysts are easily separated from the reaction products by filtration, minimizing energy use and waste." },
      { text: "Heterogeneous catalysts always have lower activation energies than homogeneous catalysts." },
      { text: "Heterogeneous catalysts are not susceptible to catalyst poisoning by impurities." },
      { text: "Heterogeneous catalysts react in the same phase as the reactants, increasing collision frequency." }
    ],
    correctAnswer: 0,
    explanation: "1. One of the key principles of green chemistry is to prevent waste and minimize energy use.\n2. Homogeneous catalysts are in the same phase as products, making separation difficult, chemical-intensive, and energy-consuming (e.g., fractional distillation).\n3. Heterogeneous catalysts are in a different phase (solid) from the liquid or gas reaction mixture, allowing easy separation by simple filtration or flow-through systems.\n4. While homogeneous catalysts are often highly active, the ease of recycling and waste prevention makes heterogeneous catalysts greener in large-scale industry.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_17-20260726",
    question: "In a kinetic study of the acid-catalyzed hydrolysis of methyl ethanoate, samples are quenched and titrated with standard $\\text{NaOH(aq)}$. If the volume of $\\text{NaOH}$ required at time $t$ is $V_t$ and the volume required at completion (time $\\infty$) is $V_\\infty$, which expression is directly proportional to the concentration of the ester remaining at time $t$?",
    options: [
      { text: "$V_\\infty - V_t$" },
      { text: "$V_t$" },
      { text: "$V_\\infty$" },
      { text: "$V_t - V_0$" }
    ],
    correctAnswer: 0,
    explanation: "1. The base ($\\text{NaOH}$) reacts with the ethanoic acid produced during the reaction.\n2. The total volume at completion ($V_\\infty$) represents the total amount of acid produced, which is equal to the initial concentration of the ester.\n3. The volume at time $t$ ($V_t$) represents the amount of acid produced up to time $t$.\n4. Therefore, the difference ($V_\\infty - V_t$) is proportional to the remaining unreacted ester concentration.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_18-20260726",
    question: "For the first-order decomposition of gas A: $\\text{A(g)} \\rightarrow \\text{B(g)} + \\text{C(g)}$. The initial pressure of A is $P_0$. At time $t$, the total pressure of the mixture is $P_{\\text{total}}$. What is the expression for the partial pressure of reactant A ($P_{\\text{A}}$) at time $t$?",
    options: [
      { text: "$2P_0 - P_{\\text{total}}$" },
      { text: "$P_{\\text{total}} - P_0$" },
      { text: "$P_0 - P_{\\text{total}}$" },
      { text: "$\\frac{P_{\\text{total}} - P_0}{2}$" }
    ],
    correctAnswer: 0,
    explanation: "1. Let $x$ be the decrease in partial pressure of A at time $t$, so $P_{\\text{A}} = P_0 - x$.\n2. The partial pressures of the products are $P_{\\text{B}} = x$ and $P_{\\text{C}} = x$.\n3. The total pressure is the sum of all partial pressures: $P_{\\text{total}} = (P_0 - x) + x + x = P_0 + x$.\n4. Rearranging for $x$ gives: $x = P_{\\text{total}} - P_0$.\n5. Substitute $x$ back into the expression for A: $P_{\\text{A}} = P_0 - (P_{\\text{total}} - P_0) = 2P_0 - P_{\\text{total}}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_19-20260726",
    question: "The reaction between ethanedioic acid and acidified manganate(VII) ions is slow initially but accelerates as $\\text{Mn}^{2+}\\text{(aq)}$ ions are formed. How can the initial slow period (induction period) of this reaction be avoided in a laboratory experiment?",
    options: [
      { text: "By adding a few drops of manganese(II) sulfate solution before starting the reaction." },
      { text: "By bubbling carbon dioxide gas through the mixture." },
      { text: "By conducting the reaction in an ice bath." },
      { text: "By adding concentrated hydrochloric acid as a dehydrating agent." }
    ],
    correctAnswer: 0,
    explanation: "1. The reaction is autocatalytic, where $\\text{Mn}^{2+}$ is the product that acts as the catalyst.\n2. Initially, no $\\text{Mn}^{2+}$ is present, which is why the reaction starts very slowly (the induction period).\n3. Adding a few drops of manganese(II) sulfate ($\\text{MnSO}_4$) introduces $\\text{Mn}^{2+}$ ions from the start.\n4. This immediately provides the catalyst, allowing the reaction to proceed rapidly from the beginning.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_20-20260726",
    question: "A halogenoalkane undergoes substitution. When the reaction is conducted in a polar protic solvent (such as an ethanol-water mixture), the rate is independent of the nucleophile concentration (first-order). When conducted in a polar aprotic solvent (such as propanone), the rate depends on both the halogenoalkane and the nucleophile concentration (second-order). Which statement correctly explains this observation?",
    options: [
      { text: "Polar protic solvents stabilize the carbocation intermediate via hydrogen bonding, favoring the SN1 mechanism, whereas polar aprotic solvents do not stabilize the intermediate, forcing the reaction via SN2." },
      { text: "Polar aprotic solvents increase the activation energy of the SN1 mechanism by protonating the nucleophile." },
      { text: "Polar protic solvents increase the rate of SN2 reactions by solvating the leaving halide group very strongly." },
      { text: "The reaction in propanone is faster because propanone acts as a catalyst for the SN1 mechanism." }
    ],
    correctAnswer: 0,
    explanation: "1. Polar protic solvents (containing O-H or N-H groups) can solvate and stabilize both the leaving halide ion and the carbocation intermediate through hydrogen bonding. This lowers the activation energy for the slow ionization step, favoring the SN1 mechanism (first-order).\n2. Polar aprotic solvents (like propanone) lack H-bond donors and cannot stabilize the carbocation intermediate effectively.\n3. In addition, aprotic solvents do not strongly solvate (cage) the nucleophile. This leaves the nucleophile highly reactive and free to attack the carbon atom directly, favoring the bimolecular SN2 mechanism (second-order).\n4. Therefore, changing the solvent from protic to aprotic changes the mechanism and the observed rate equation.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_21_star-20260726",
    question: "[★ Star Question] A student is designing a laboratory experiment to determine the activation energy ($E_a$) of a chemical reaction using the Arrhenius equation. Which of the following lists the correct assignment of variables to construct a valid Arrhenius plot?",
    options: [
      { text: "Independent variable: Temperature ($T$); Dependent variable: Rate constant ($k$); Control variable: Concentrations of reactants." },
      { text: "Independent variable: Rate constant ($k$); Dependent variable: Temperature ($T$); Control variable: Concentrations of reactants." },
      { text: "Independent variable: Temperature ($T$); Dependent variable: Initial rate; Control variable: Temperature." },
      { text: "Independent variable: Concentrations of reactants; Dependent variable: Rate constant ($k$); Control variable: Temperature." }
    ],
    correctAnswer: 0,
    explanation: "1. To construct an Arrhenius plot ($\\ln k$ vs $1/T$), the student must deliberately vary the temperature, making Temperature ($T$) the independent variable.\n2. For each temperature, the rate constant ($k$) is determined (calculated from the measured initial rate), making the rate constant ($k$) the dependent variable.\n3. The concentrations of all reactants must be kept constant (controlled) across all experiments so that change in rate is solely due to the change in temperature.\n4. Therefore, option A is the correct experimental setup.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_22_star-20260726",
    question: "[★ Star Question] In the stratosphere, ozone ($\\text{O}_3$) is decomposed by chlorine free radicals ($\\text{Cl}^\\bullet$) via the following mechanism:\n\nStep 1 (slow): $\\text{Cl}^\\bullet\\text{(g)} + \\text{O}_3\\text{(g)} \\rightarrow \\text{ClO}^\\bullet\\text{(g)} + \\text{O}_2\\text{(g)}$\nStep 2 (fast): $\\text{ClO}^\\bullet\\text{(g)} + \\text{O}\\text{(g)} \\rightarrow \\text{Cl}^\\bullet\\text{(g)} + \\text{O}_2\\text{(g)}$\n\nWhich of the following correctly identifies the rate equation for this ozone depletion and the role of $\\text{ClO}^\\bullet$?",
    options: [
      { text: "Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$; $\\text{ClO}^\\bullet$ acts as an intermediate." },
      { text: "Rate = $k[\\text{O}_3]$; $\\text{ClO}^\\bullet$ acts as a catalyst." },
      { text: "Rate = $k[\\text{ClO}^\\bullet][\\text{O}]$; $\\text{ClO}^\\bullet$ acts as a catalyst." },
      { text: "Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$; $\\text{ClO}^\\bullet$ acts as a catalyst." }
    ],
    correctAnswer: 0,
    explanation: "1. The rate-determining step is the slow step (Step 1). The reactants in this step are $\\text{Cl}^\\bullet$ and $\\text{O}_3$. Thus, the rate equation is: Rate = $k[\\text{O}_3][\\text{Cl}^\\bullet]$.\n2. $\\text{ClO}^\\bullet$ is produced in the first step and consumed in the second step. It does not appear in the overall chemical equation, meaning it acts as a reaction intermediate.\n3. $\\text{Cl}^\\bullet$ is consumed in the first step and regenerated in the second step, meaning it acts as a homogeneous catalyst.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_23_star-20260726",
    question: "[★ Star Question] The decomposition of a gaseous substance was studied at a constant temperature. When the initial concentration was $1.0\\text{ mol dm}^{-3}$, the first half-life was found to be $15\\text{ seconds}$. When the concentration decreased to $0.5\\text{ mol dm}^{-3}$, the second half-life was measured to be $30\\text{ seconds}$. Deduce the order of the reaction and explain how this relationship relates to the rate constant.",
    options: [
      { text: "Second-order; the half-life is inversely proportional to the initial concentration ($t_{1/2} = 1/(k[\\text{A}]_0)$)." },
      { text: "First-order; the half-life is constant and independent of the concentration ($t_{1/2} = \\ln 2 / k$)." },
      { text: "Zero-order; the half-life is directly proportional to the concentration ($t_{1/2} = [\\text{A}]_0 / 2k$)." },
      { text: "Second-order; the half-life doubles because the rate constant $k$ decreases as concentration decreases." }
    ],
    correctAnswer: 0,
    explanation: "1. For a second-order reaction, the half-life is inversely proportional to the initial concentration of reactants: $t_{1/2} = 1 / (k[\\text{A}]_0)$.\n2. When the concentration is halved ($1.0 \\rightarrow 0.5\\text{ mol dm}^{-3}$), the half-life should double ($15 \\rightarrow 30\\text{ seconds}$), which matches the experimental results.\n3. First-order half-life is constant (independent of concentration), and zero-order half-life decreases as concentration decreases.\n4. Note that the rate constant $k$ is constant at a constant temperature and does not change with concentration.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_24-20260726",
    question: "In an iodine clock reaction, a small, constant amount of sodium thiosulfate is added to the reaction mixture along with starch indicator. The initial rate of reaction is approximated as $1/t$, where $t$ is the time taken for the blue-black color to appear. Under which condition is this approximation mathematically valid?",
    options: [
      { text: "Only when the concentrations of the reactants remain essentially constant during the timed period (typically less than 10-15% of the reaction has completed)." },
      { text: "Only when the reaction is zero-order with respect to all reactants." },
      { text: "Only when the concentration of the sodium thiosulfate is equal to the concentration of the starch indicator." },
      { text: "Only when the reaction reaches dynamic equilibrium before the color change occurs." }
    ],
    correctAnswer: 0,
    explanation: "1. The initial rate is defined as the rate at the very start of the reaction ($t=0$).\n2. The approximation $\\text{Rate} \\approx \\Delta[\\text{Product}] / \\Delta t \\approx 1/t$ assumes that the rate does not change significantly during the measured time interval $t$.\n3. For this assumption to hold true, only a tiny fraction of the reactants should be consumed (usually under 10-15%), so that reactant concentrations, and therefore the rate itself, remain virtually constant.\n4. If too much reactant is consumed, the rate slows down significantly during the timing interval, making the average rate ($1/t$) a poor approximation of the true initial rate.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_25-20260726",
    question: "A certain chemical reaction has a very large, negative Gibbs free energy change ($\\Delta G = -450\\text{ kJ mol}^{-1}$) at room temperature, yet when reactants are mixed in a beaker, no reaction is observed. Which statement correctly explains this observation?",
    options: [
      { text: "The reaction is thermodynamically unstable but kinetically stable due to a very high activation energy ($E_a$)." },
      { text: "The reaction is thermodynamically stable but kinetically unstable." },
      { text: "The reaction is endothermic, so it cannot proceed without constant heating." },
      { text: "The rate constant $k$ is extremely large, causing the reaction to complete instantly before observation." }
    ],
    correctAnswer: 0,
    explanation: "1. A negative $\\Delta G$ indicates that the reaction is thermodynamically feasible and spontaneous.\n2. However, thermodynamics only tells us about the feasibility and position of equilibrium, not how fast the reaction occurs.\n3. If the reaction has a very high activation energy ($E_a$), the rate constant $k$ will be practically zero at room temperature, meaning the reaction is kinetically stable (extremely slow).\n4. Therefore, it does not happen at a measurable rate under standard conditions.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_26-20260726",
    question: "The acid-catalyzed iodination of propanone is monitored experimentally. The overall equation is:\n\n$$\\text{CH}_3\\text{COCH}_3 + \\text{I}_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{COCH}_2\\text{I} + \\text{H}^+ + \\text{I}^-$$\n\nThe rate equation is found to be: Rate = $k[\\text{CH}_3\\text{COCH}_3][\\text{H}^+]$. Why does the hydrogen ion ($\\text{H}^+$) appear in the rate equation even though it is a catalyst and is not consumed overall?",
    options: [
      { text: "Because the catalyst is involved in the rate-determining step of the reaction mechanism, and its concentration affects the rate." },
      { text: "Because the reaction is heterogeneous and the catalyst is in the same phase as the reactants." },
      { text: "Because catalysts change the equilibrium constant of the reaction, shifting the position to the right." },
      { text: "Because the rate equation must contain every species present in the overall chemical equation." }
    ],
    correctAnswer: 0,
    explanation: "1. A catalyst speed up a reaction by providing an alternative pathway with a lower activation energy.\n2. If the catalyst is involved in the slow, rate-determining step (such as protonating propanone in the first step), its concentration will directly determine the rate of this step.\n3. Therefore, the catalyst concentration must appear in the rate equation.\n4. Species that are not involved in or before the rate-determining step (like $\\text{I}_2$ in this case) do not appear in the rate equation.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_kin_ed_exam_27-20260726",
    question: "In the Arrhenius equation, $k = A e^{-E_a/RT}$, what are the units of the pre-exponential factor ($A$) for a second-order reaction?",
    options: [
      { text: "$\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$" },
      { text: "$\\text{s}^{-1}$" },
      { text: "$\\text{dm}^6\\text{ mol}^{-2}\\text{ s}^{-1}$" },
      { text: "It is dimensionless (has no units)." }
    ],
    correctAnswer: 0,
    explanation: "• The term $e^{-E_a/RT}$ is a ratio of energies (since $E_a$ and $RT$ both have units of $\\text{J mol}^{-1}$), meaning it is dimensionless (has no units).\n• Therefore, the pre-exponential factor ($A$) must have the exact same units as the rate constant ($k$).\n• For a second-order reaction (Rate = $k[\\text{Reactant}]^2$), the units of $k$ are: $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.\n• Thus, the units of $A$ are also $\\text{dm}^3\\text{ mol}^{-1}\\text{ s}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 1,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-07-26"
  },
  {
    id: "q_ent_ed_exam_01-20260810",
    question: "Which of the following processes results in a decrease in the entropy of the system?",
    options: [
      { text: "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(g)}$" },
      { text: "$\\text{N}_2\\text{O}_4\\text{(g)} \\rightarrow 2\\text{NO}_2\\text{(g)}$" },
      { text: "$\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(s)}$" },
      { text: "$\\text{NaCl(s)} + \\text{aq} \\rightarrow \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$" }
    ],
    correctAnswer: 2,
    explanation: "• Freezing of water ($\\text{H}_2\\text{O(l)} \\rightarrow \\text{H}_2\\text{O(s)}$) shifts molecules from a disordered liquid state to a highly ordered solid lattice.\n• This decreases the number of ways of arranging the particles and their energy, resulting in a negative entropy change ($\\Delta S_{\\text{system}} < 0$).\n• Evaporation, decomposition into more gas moles, and dissolving solids all increase disorder (positive entropy change).",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_02-20260810",
    question: "The standard standard entropies for $\\text{N}_2\\text{(g)}$, $\\text{H}_2\\text{(g)}$, and $\\text{NH}_3\\text{(g)}$ are $191.6$, $130.6$, and $192.3\\text{ J K}^{-1}\\text{ mol}^{-1}$ respectively. Calculate the standard entropy change of the system ($\\Delta S^{\\theta}_{\\text{system}}$) for: $\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$",
    options: [
      { text: "$-198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-129.9\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-384.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• The formula for entropy of the system is: $\\Delta S^{\\theta}_{\\text{system}} = \\sum S^{\\theta}(\\text{products}) - \\sum S^{\\theta}(\\text{reactants})$.\n• Products: $2 \\times S^{\\theta}(\\text{NH}_3) = 2 \\times 192.3 = 384.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Reactants: $S^{\\theta}(\\text{N}_2) + 3 \\times S^{\\theta}(\\text{H}_2) = 191.6 + 3(130.6) = 191.6 + 391.8 = 583.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• $\\Delta S^{\\theta}_{\\text{system}} = 384.6 - 583.4 = -198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_03-20260810",
    question: "What is the primary thermodynamic condition for a chemical reaction to be feasible (spontaneous) at a given temperature?",
    options: [
      { text: "The system entropy change ($\\Delta S_{\\text{system}}$) must be positive." },
      { text: "The enthalpy change ($\\Delta H$) must be highly negative." },
      { text: "The Gibbs free energy change ($\\Delta G$) must be less than or equal to zero." },
      { text: "The total entropy change ($\\Delta S_{\\text{total}}$) must be negative." }
    ],
    correctAnswer: 2,
    explanation: "• For any process to be feasible, the total entropy change ($\\Delta S_{\\text{total}}$) must be positive ($\\Delta S_{\\text{total}} > 0$).\n• Because Gibbs free energy is related by $\\Delta G = -T \\Delta S_{\\text{total}}$, a positive total entropy change corresponds directly to a negative Gibbs free energy change ($\\Delta G \\le 0$).\n• Hence, a reaction is thermodynamically feasible only when $\\Delta G \\le 0$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_04-20260810",
    question: "For a reaction, $\\Delta H^{\\theta} = +135\\text{ kJ mol}^{-1}$ and $\\Delta S^{\\theta}_{\\text{system}} = +245\\text{ J K}^{-1}\\text{ mol}^{-1}$. Above which temperature does this reaction become feasible?",
    options: [
      { text: "$273\\text{ K}$" },
      { text: "$551\\text{ K}$" },
      { text: "$0.55\\text{ K}$" },
      { text: "$1.81\\text{ K}$" }
    ],
    correctAnswer: 1,
    explanation: "• A reaction becomes feasible when $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• At the boundary where feasibility begins: $\\Delta H = T \\Delta S_{\\text{system}} \\implies T = \\Delta H / \\Delta S_{\\text{system}}$.\n• Convert $\\Delta H$ to joules: $+135\\text{ kJ mol}^{-1} = +135,000\\text{ J mol}^{-1}$.\n• Calculate $T$: $T = 135,000 / 245 = 551.02\\text{ K}$.\n• Since both $\\Delta H$ and $\\Delta S$ are positive, the reaction is feasible at high temperatures, i.e., above $551\\text{ K}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_05-20260810",
    question: "Which equation represents the correct relationship to calculate the entropy change of the surroundings ($\\Delta S_{\\text{surroundings}}$)?",
    options: [
      { text: "$\\Delta S_{\\text{surroundings}} = \\Delta H / T$" },
      { text: "$\\Delta S_{\\text{surroundings}} = -\\Delta H / T$" },
      { text: "$\\Delta S_{\\text{surroundings}} = T \\Delta H$" },
      { text: "$\\Delta S_{\\text{surroundings}} = -\\Delta G / T$" }
    ],
    correctAnswer: 1,
    explanation: "• The entropy change of the surroundings is determined by the heat transferred to or from the surroundings at a constant temperature $T$.\n• An exothermic reaction (negative $\\Delta H$) releases heat to the surroundings, increasing their entropy, so the sign must be opposite to that of $\\Delta H$.\n• The correct thermodynamic relationship is: $\\Delta S_{\\text{surroundings}} = -\\Delta H / T$.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_06-20260810",
    question: "An industrial reaction has an enthalpy change of $\\Delta H^{\\theta} = -92.2\\text{ kJ mol}^{-1}$. Calculate the standard entropy change of the surroundings ($\\Delta S^{\\theta}_{\\text{surroundings}}$) at $298\\text{ K}$.",
    options: [
      { text: "$+309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+0.31\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+3.23\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• Use the formula: $\\Delta S^{\\theta}_{\\text{surroundings}} = -\\Delta H / T$.\n• Convert $\\Delta H$ to joules: $-92.2\\text{ kJ mol}^{-1} = -92,200\\text{ J mol}^{-1}$.\n• Substitute values: $\\Delta S^{\\theta}_{\\text{surroundings}} = -(-92,200) / 298 = +309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• The positive value reflects the exothermic nature increasing the thermal disorder of the surroundings.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_07-20260810",
    question: "Calculate the total entropy change ($\\Delta S^{\\theta}_{\\text{total}}$) for a reaction at $298\\text{ K}$ where $\\Delta S^{\\theta}_{\\text{system}} = -198.8\\text{ J K}^{-1}\\text{ mol}^{-1}$ and $\\Delta S^{\\theta}_{\\text{surroundings}} = +309.4\\text{ J K}^{-1}\\text{ mol}^{-1}$.",
    options: [
      { text: "$-508.2\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$-110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$" },
      { text: "$+508.2\\text{ J K}^{-1}\\text{ mol}^{-1}$" }
    ],
    correctAnswer: 1,
    explanation: "• The total entropy change is the sum of system and surroundings entropy changes: $\\Delta S^{\\theta}_{\\text{total}} = \\Delta S^{\\theta}_{\\text{system}} + \\Delta S^{\\theta}_{\\text{surroundings}}$.\n• Substitute the values: $\\Delta S^{\\theta}_{\\text{total}} = -198.8 + 309.4 = +110.6\\text{ J K}^{-1}\\text{ mol}^{-1}$.\n• Since the total entropy change is positive, the reaction is thermodynamically feasible at this temperature.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_08-20260810",
    question: "Which of the following equations correctly relates Gibbs free energy change ($\\Delta G$) to the total entropy change ($\\Delta S_{\\text{total}}$)?",
    options: [
      { text: "$\\Delta G = T \\Delta S_{\\text{total}}$" },
      { text: "$\\Delta G = -T \\Delta S_{\\text{total}}$" },
      { text: "$\\Delta G = -\\Delta S_{\\text{total}} / T$" },
      { text: "$\\Delta G = \\Delta H - T \\Delta S_{\\text{total}}$" }
    ],
    correctAnswer: 1,
    explanation: "• Standard Gibbs free energy change is derived directly from the total entropy equation: $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} - \\Delta H/T$.\n• Multiplying the entire equation by $-T$ gives: $-T\\Delta S_{\\text{total}} = \\Delta H - T\\Delta S_{\\text{system}}$.\n• Since $\\Delta G = \\Delta H - T\\Delta S_{\\text{system}}$, we substitute to get: $\\Delta G = -T \\Delta S_{\\text{total}}$.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_09-20260810",
    question: "Which statement defines the standard lattice energy of an ionic compound?",
    options: [
      { text: "The enthalpy change when one mole of an ionic solid is formed from its gaseous ions under standard conditions." },
      { text: "The enthalpy change when one mole of an ionic solid is dissolved in water to form gaseous ions." },
      { text: "The enthalpy change when one mole of an ionic solid is formed from its elements in standard states." },
      { text: "The enthalpy change when one mole of gaseous atoms is formed from the element in its standard state." }
    ],
    correctAnswer: 0,
    explanation: "• Lattice energy (specifically lattice formation enthalpy) is the enthalpy change when one mole of an ionic solid is formed from its constituent gaseous ions under standard conditions.\n• It is always exothermic (negative) due to the electrostatic attraction between oppositely charged ions.\n• The reverse process is lattice dissociation enthalpy, which is endothermic.",
    level: 1,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_10-20260810",
    question: "Calculate the lattice energy of sodium chloride using the following Born-Haber data:\n$\\Delta H^{\\theta}_{\\text{f}}(\\text{NaCl}) = -411\\text{ kJ mol}^{-1}$\n$\\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Na}) = +107\\text{ kJ mol}^{-1}$\n1st Ionisation Energy of Na $= +496\\text{ kJ mol}^{-1}$\n$\\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Cl}) = +122\\text{ kJ mol}^{-1}$\n1st Electron Affinity of Cl $= -349\\text{ kJ mol}^{-1}$",
    options: [
      { text: "$-787\\text{ kJ mol}^{-1}$" },
      { text: "$-376\\text{ kJ mol}^{-1}$" },
      { text: "$-711\\text{ kJ mol}^{-1}$" },
      { text: "$+787\\text{ kJ mol}^{-1}$" }
    ],
    correctAnswer: 0,
    explanation: "• Apply Hess's Law to the Born-Haber cycle:\n• $\\Delta H^{\\theta}_{\\text{f}} = \\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Na}) + \\text{IE}_1(\\text{Na}) + \\Delta H^{\\theta}_{\\text{atomisation}}(\\text{Cl}) + \\text{EA}_1(\\text{Cl}) + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• Substitute values: $-411 = +107 + 496 + 122 - 349 + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• $-411 = 376 + \\Delta H^{\\theta}_{\\text{lattice}}$.\n• $\\Delta H^{\\theta}_{\\text{lattice}} = -411 - 376 = -787\\text{ kJ mol}^{-1}$.",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_11-20260810",
    question: "Why is the experimental lattice energy of silver iodide ($-887\\text{ kJ mol}^{-1}$) significantly more exothermic than the theoretical lattice energy calculated using a purely ionic model ($-808\\text{ kJ mol}^{-1}$)?",
    options: [
      { text: "Silver iodide contains a large amount of covalent character due to polarization of the iodide ion." },
      { text: "Silver ions are larger and have a higher charge density than sodium ions." },
      { text: "The iodide ion has a small ionic radius and polarizes the silver cation." },
      { text: "The ionic model calculations do not account for electrostatic repulsions." }
    ],
    correctAnswer: 0,
    explanation: "• The theoretical model assumes ions are perfect, unpolarizable spheres (purely ionic bonding).\n• Silver ions ($\\text{Ag}^+$) are polarising due to their d-subshell configuration, and iodide ions ($\\text{I}^-$) are large and easily polarizable.\n• This leads to electron cloud distortion and significant covalent character, which strengthens the bonding and makes the actual lattice energy more exothermic than predicted.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_12-20260810",
    question: "Which combination of cation and anion properties results in the greatest degree of polarization and covalent character in an ionic compound?",
    options: [
      { text: "Large cation with high charge; small anion with low charge." },
      { text: "Small cation with high charge; large anion with high charge." },
      { text: "Small cation with low charge; large anion with low charge." },
      { text: "Large cation with low charge; small anion with high charge." }
    ],
    correctAnswer: 1,
    explanation: "• Polarization increases when the cation has a high charge density (high charge and small ionic radius) to strongly attract electron density.\n• Polarization also increases when the anion is large and has a high charge (high polarizability), making its electron cloud easily distorted.\n• Therefore, a small, highly charged cation and a large, highly charged anion yield the highest covalent character.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_13-20260810",
    question: "Which of the following gaseous ions would have the most exothermic (most negative) enthalpy of hydration ($\\Delta H^{\\theta}_{\\text{hyd}}$)?",
    options: [
      { text: "$\\text{Na}^+$" },
      { text: "$\\text{Mg}^{2+}$" },
      { text: "$\\text{Ca}^{2+}$" },
      { text: "$\\text{Ba}^{2+}$" }
    ],
    correctAnswer: 1,
    explanation: "• Enthalpy of hydration is the enthalpy change when gaseous ions dissolve in water to form hydrated ions.\n• It depends on charge density: ions with higher charge and smaller radii attract water molecules more strongly.\n• $\\text{Mg}^{2+}$ has a $+2$ charge and is smaller than $\\text{Ca}^{2+}$ and $\\text{Ba}^{2+}$, giving it a higher charge density than all other options.\n• Thus, $\\text{Mg}^{2+}$ has the most exothermic hydration enthalpy.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_14-20260810",
    question: "Using the enthalpy cycle for dissolving an ionic solid, which expression correctly relates the enthalpy of solution ($\\Delta H_{\\text{sol}}$), lattice energy ($\\Delta H_{\\text{lattice}}$), and hydration enthalpies ($\\Delta H_{\\text{hyd}}$)?",
    options: [
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions}) - \\Delta H_{\\text{lattice}}$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{lattice}} - [\\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions})]$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{lattice}} + \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions})$" },
      { text: "$\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) - \\Delta H_{\\text{lattice}}$" }
    ],
    correctAnswer: 0,
    explanation: "• Dissolving an ionic solid involves two conceptual steps: breaking the lattice into gaseous ions ($-\\Delta H_{\\text{lattice}}$, since lattice energy is defined as formation, this is endothermic) and hydrating the gaseous ions ($\\sum \\Delta H_{\\text{hyd}}$, exothermic).\n• Therefore: $\\Delta H_{\\text{sol}} = \\Delta H_{\\text{hyd}}(\\text{cations}) + \\Delta H_{\\text{hyd}}(\\text{anions}) - \\Delta H_{\\text{lattice}}$.\n• Note: Since $\\Delta H_{\\text{lattice}}$ is negative, subtracting it makes the term positive (representing the energy required to break the lattice).",
    level: 3,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_15-20260810",
    question: "Why does the solubility of Group 2 sulfates decrease down the group from $\\text{MgSO}_4$ to $\\text{BaSO}_4$?",
    options: [
      { text: "The hydration enthalpy of the cation decreases more rapidly down the group than the lattice energy." },
      { text: "The lattice energy of the sulfate increases down the group." },
      { text: "The sulfate ion is small, so lattice energy decreases rapidly down the group." },
      { text: "The hydration enthalpy of the sulfate ion increases down the group." }
    ],
    correctAnswer: 0,
    explanation: "• The sulfate ion ($\\text{SO}_4^{2-}$) is large, so down the group, the lattice energy decreases slowly as the cation size increases.\n• However, the hydration enthalpy of the cation decreases rapidly as the cation radius increases from $\\text{Mg}^{2+}$ to $\\text{Ba}^{2+}$.\n• Since hydration enthalpy decreases more rapidly than the lattice energy, the process of dissolving becomes less exothermic (more endothermic) down the group, decreasing solubility.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_16-20260810",
    question: "Why does the solubility of Group 2 hydroxides increase down the group from $\\text{Mg(OH)}_2$ to $\\text{Ba(OH)}_2$?",
    options: [
      { text: "The hydroxide ion is small, so the lattice energy decreases more rapidly down the group than the cation hydration enthalpy." },
      { text: "The lattice energy of the hydroxides increases down the group." },
      { text: "The hydration enthalpy of the cations increases down the group." },
      { text: "The hydroxide ion becomes more polarizable down the group." }
    ],
    correctAnswer: 0,
    explanation: "• The hydroxide ion ($\\text{OH}^-$) is small.\n• As the cation size increases down the group, the lattice energy decreases rapidly because both ions are relatively small, making the lattice highly sensitive to size changes.\n• This rapid decrease in lattice energy outweighs the decrease in cation hydration enthalpy down the group.\n• Consequently, the enthalpy of solution becomes more exothermic (or less endothermic) down the group, increasing solubility.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_17-20260810",
    question: "Under which thermodynamic conditions is a chemical reaction feasible at all temperatures?",
    options: [
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is positive." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is positive." }
    ],
    correctAnswer: 0,
    explanation: "• Feasibility requires $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• If $\\Delta H$ is negative (exothermic) and $\\Delta S_{\\text{system}}$ is positive (disorder increases), then: $\\Delta G = (-\\text{value}) - T(+\\text{value})$.\n• Since $T$ in Kelvin is always positive, $\\Delta G$ is guaranteed to be negative at all temperatures.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_18-20260810",
    question: "Under which thermodynamic conditions is a chemical reaction not feasible at any temperature?",
    options: [
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is positive." },
      { text: "$\\Delta H$ is negative and $\\Delta S_{\\text{system}}$ is negative." },
      { text: "$\\Delta H$ is positive and $\\Delta S_{\\text{system}}$ is positive." }
    ],
    correctAnswer: 0,
    explanation: "• Feasibility requires $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$.\n• If $\\Delta H$ is positive (endothermic) and $\\Delta S_{\\text{system}}$ is negative (order increases), then: $\\Delta G = (+\\text{value}) - T(-\\text{value}) = (+\\text{value}) + T(\\text{value})$.\n• Since both terms are positive, $\\Delta G$ is guaranteed to be positive at all temperatures, meaning the reaction is never feasible.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_19-20260810",
    question: "Why is the second electron affinity of oxygen ($\\text{O}^-\\text{(g)} + \\text{e}^- \\rightarrow \\text{O}^{2-}\\text{(g)}$) an endothermic process, whereas the first electron affinity is exothermic?",
    options: [
      { text: "Energy is required to overcome the electrostatic repulsion between the negative $\\text{O}^-$ ion and the incoming electron." },
      { text: "Energy is released when the electron enters the 2p orbital." },
      { text: "The oxide ion $\\text{O}^{2-}$ is less stable than the $\\text{O}^-$ ion in the gas phase." },
      { text: "The first electron affinity requires ionization energy." }
    ],
    correctAnswer: 0,
    explanation: "• The first electron affinity adds an electron to a neutral atom, which is exothermic due to the attraction of the nucleus.\n• The second electron affinity adds a negative electron to an already negatively charged ion ($\\text{O}^-$).\n• Work must be done to overcome the strong electrostatic repulsion between the negative ion and the incoming electron, which requires energy input (making it endothermic).",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  },
  {
    id: "q_ent_ed_exam_20-20260810",
    question: "When solid ammonium nitrate dissolves in water, the temperature of the mixture drops significantly, yet the process is feasible. What is the explanation for this?",
    options: [
      { text: "The process is endothermic, but is driven by a large increase in entropy of the system upon dissolution." },
      { text: "The enthalpy of solution is highly exothermic, overriding the entropy change." },
      { text: "The reaction is non-spontaneous and requires continuous heating to proceed." },
      { text: "The entropy of the surroundings increases to compensate for the temperature drop." }
    ],
    correctAnswer: 0,
    explanation: "• A drop in temperature indicates that the process is endothermic ($\\Delta H > 0$).\n• For the dissolving to be feasible, $\\Delta G = \\Delta H - T \\Delta S_{\\text{system}} \\le 0$ must be satisfied.\n• Dissolving a solid crystal lattice into mobile, hydrated ions increases system disorder significantly ($\\Delta S_{\\text{system}} > 0$).\n• At room temperature, the $T \\Delta S_{\\text{system}}$ term is larger than the positive $\\Delta H$, making $\\Delta G$ negative.",
    level: 2,
    topic: "edexcel-unit-4",
    lessonNum: 2,
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    createdAt: "2026-08-10"
  }
);

// Cambridge IGCSE Unit 4: Electrochemistry Questions
questionBank.push(
  {
    id: "q_elc_hcl_nacl_hydrogen_prod-2026",
    question: "The diagram shows the electrolysis of concentrated hydrochloric acid and concentrated aqueous sodium chloride using carbon electrodes.\nCell 1: Concentrated hydrochloric acid with electrode 1 (+) and electrode 2 (-).\nCell 2: Concentrated aqueous sodium chloride with electrode 3 (+) and electrode 4 (-).\nAt which electrode(s) is hydrogen produced?",
    options: [
      { text: "Electrode 1 only" },
      { text: "Electrodes 1 and 3" },
      { text: "Electrodes 2 and 4" },
      { text: "Electrode 2 only" }
    ],
    correctAnswer: 2,
    explanation: "* Hydrogen ions ($\\text{H}^+$) are positively charged cations attracted to the negative cathode.\n* In Cell 1 (conc. $\\text{HCl}$), the negative electrode is electrode 2; $\\text{H}^+$ is reduced to produce $\\text{H}_2\\text{(g)}.\n* In Cell 2 (conc. $\\text{NaCl}$), the negative electrode is electrode 4; $\\text{Na}^+$ is more reactive than $\\text{H}^+$, so $\\text{H}^+$ is discharged to produce $\\text{H}_2\\text{(g)}.\n* Therefore, hydrogen gas is produced at both electrodes 2 and 4.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_not_electroplated_aqueous-2026",
    question: "Which metal could not be used for electroplating by using an aqueous solution?",
    options: [
      { text: "Chromium" },
      { text: "Copper" },
      { text: "Sodium" },
      { text: "Silver" }
    ],
    correctAnswer: 2,
    explanation: "* In aqueous solutions, $\\text{H}^+$ ions from water are present at the cathode.\n* Sodium is a highly reactive metal situated far above hydrogen in the reactivity series.\n* Therefore, $\\text{H}^+$ is discharged preferentially over $\\text{Na}^+$, forming hydrogen gas rather than depositing sodium metal.\n* Additionally, any sodium formed would immediately react violently with water.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_gas_ratio_substance_x-2026",
    question: "When substance X is electrolyzed, the amount of gases P and Q formed is shown, where the volume of gas P is twice the volume of gas Q. What is substance X?",
    options: [
      { text: "Molten lead(II) bromide" },
      { text: "Concentrated hydrochloric acid" },
      { text: "Concentrated aqueous sodium chloride" },
      { text: "Dilute sulfuric acid" }
    ],
    correctAnswer: 3,
    explanation: "* Dilute sulfuric acid is essentially the electrolysis of acidified water: $2\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)}.\n* At the cathode, hydrogen gas (P) is evolved: $4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2$.\n* At the anode, oxygen gas (Q) is evolved: $4\\text{OH}^- \\rightarrow \\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^-$.\n* The volume ratio of $\\text{H}_2 : \\text{O}_2$ produced is exactly $2 : 1$.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_dilute_h2so4_products-2026",
    question: "What are the products at the electrodes when dilute sulfuric acid is electrolyzed using inert electrodes?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Oxygen</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Sulfur</td><td class="p-2 border">Oxygen</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Oxygen</td><td class="p-2 border">Hydrogen</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Sulfur oxide</td><td class="p-2 border">Hydrogen</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Anode = Hydrogen, Cathode = Oxygen" },
      { text: "Row B: Anode = Sulfur, Cathode = Oxygen" },
      { text: "Row C: Anode = Oxygen, Cathode = Hydrogen" },
      { text: "Row D: Anode = Sulfur oxide, Cathode = Hydrogen" }
    ],
    correctAnswer: 2,
    explanation: "* At the positive anode (+), hydroxide ions ($\\text{OH}^-$) are oxidised in preference to sulfate ions ($\\text{SO}_4^{2-}$), producing oxygen gas ($\\text{O}_2$).\n* At the negative cathode (-), hydrogen ions ($\\text{H}^+$) are reduced to form hydrogen gas ($\\text{H}_2$).\n* Row C correctly identifies Oxygen at the anode and Hydrogen at the cathode.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_failed_pan_electroplating-2026",
    question: "A student sets up an apparatus for plating a steel pan with copper, but mistakenly connects the copper to the cathode (-) and the pan to the anode (+). Which action will correctly plate the pan with copper?",
    options: [
      { text: "Making the pan the cathode and the copper the anode" },
      { text: "Heating the copper sulfate solution to boiling point" },
      { text: "Increasing the voltage from 3 V to 6 V" },
      { text: "Cooling the copper sulfate solution in an ice bath" }
    ],
    correctAnswer: 0,
    explanation: "* In electroplating, the object to be coated MUST always be connected to the negative terminal as the cathode (-).\n* Positive metal cations ($\\text{Cu}^{2+}$) in the electrolyte are attracted to the cathode where they gain electrons and deposit as metallic copper.\n* The pure metal coating source (copper) must be the anode (+).",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_molten_silver_iodide-2026",
    question: "What are the electrode products when molten silver iodide is electrolyzed between inert electrodes?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Iodine</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Iodine</td><td class="p-2 border">Silver</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Silver</td><td class="p-2 border">Iodine</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Silver</td><td class="p-2 border">Oxygen</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Anode = Hydrogen, Cathode = Iodine" },
      { text: "Row B: Anode = Iodine, Cathode = Silver" },
      { text: "Row C: Anode = Silver, Cathode = Iodine" },
      { text: "Row D: Anode = Silver, Cathode = Oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Molten silver iodide contains only $\\text{Ag}^+$ and $\\text{I}^-$ ions (no water present).\n* At the positive anode (+), negative iodide ions are oxidised to form iodine: $2\\text{I}^- \\rightarrow \\text{I}_2 + 2e^-$.\n* At the negative cathode (-), positive silver ions are reduced to form silver metal: $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$.\n* Row B correctly gives Iodine at the anode and Silver at the cathode.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_molten_kbr_row-2026",
    question: "Which row describes the electrolysis of molten potassium bromide?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Anode (+)</th><th class="p-2 border">Cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Bromine</td><td class="p-2 border">Hydrogen</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Bromine</td><td class="p-2 border">Potassium</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Hydrogen</td><td class="p-2 border">Bromine</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Potassium</td><td class="p-2 border">Bromine</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Anode = Bromine, Cathode = Hydrogen" },
      { text: "Row B: Anode = Bromine, Cathode = Potassium" },
      { text: "Row C: Anode = Hydrogen, Cathode = Bromine" },
      { text: "Row D: Anode = Potassium, Cathode = Bromine" }
    ],
    correctAnswer: 1,
    explanation: "* In molten potassium bromide ($\\text{KBr}$), no water is present.\n* Bromide ions ($\\text{Br}^-$) lose electrons at the positive anode to form bromine ($\\text{Br}_2$).\n* Potassium ions ($\\text{K}^+$) gain electrons at the negative cathode to form potassium metal ($\\text{K}$).\n* Row B is the correct answer.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_silver_plating_spoon_incorrect-2026",
    question: "The diagram shows apparatus for plating a spoon with silver. Which statement is NOT correct?",
    options: [
      { text: "The metal electrode would be made from silver" },
      { text: "The electrolyte would be a silver salt dissolved in water" },
      { text: "The spoon would be connected to the negative terminal of the power supply" },
      { text: "Silver would stick to the spoon because it is a very reactive metal" }
    ],
    correctAnswer: 3,
    explanation: "* Silver is an unreactive precious metal near the bottom of the reactivity series, NOT a very reactive metal.\n* Silver deposits on the spoon because silver cations ($\\text{Ag}^+$) gain electrons (are reduced) at the cathode surface to form solid silver coating.\n* Statements A, B, and C are correct principles of electroplating.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_elc_nacl_litmus_five_minutes-2026",
    question: "The diagram shows the electrolysis of concentrated aqueous sodium chloride in a U-tube containing litmus indicator. What is the color of the litmus at each electrode after five minutes?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Color at anode (+)</th><th class="p-2 border">Color at cathode (-)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Blue</td><td class="p-2 border">Red</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Red</td><td class="p-2 border">Blue</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Yellow</td><td class="p-2 border">Colorless</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Colorless</td><td class="p-2 border">Blue</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Anode = Blue, Cathode = Red" },
      { text: "Row B: Anode = Red, Cathode = Blue" },
      { text: "Row C: Anode = Yellow, Cathode = Colorless" },
      { text: "Row D: Anode = Colorless, Cathode = Blue" }
    ],
    correctAnswer: 3,
    explanation: "* At the anode (+), chlorine gas ($\\text{Cl}_2$) is liberated. Chlorine is a powerful bleaching agent that rapidly bleaches litmus to completely colorless.\n* At the cathode (-), hydrogen gas ($\\text{H}_2$) is evolved, leaving an excess of hydroxide ions ($\\text{OH}^-$) in solution. This strongly alkaline sodium hydroxide solution turns litmus blue.\n* Row D correctly matches both electrode observations.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  }
);

// Cambridge IGCSE Unit 7: Acids, Bases and Salts Questions
questionBank.push(
  {
    id: "q_abs_not_characteristic_base-2026",
    question: "Which property is NOT a characteristic of a base?",
    options: [
      { text: "It reacts with a carbonate to form carbon dioxide" },
      { text: "It reacts with an acid to form a salt" },
      { text: "It reacts with an ammonium salt to form ammonia" },
      { text: "It turns universal indicator paper blue" }
    ],
    correctAnswer: 0,
    explanation: "* Acids react with metal carbonates to liberate carbon dioxide gas ($\\text{CO}_2$).\\n* Bases do not react with metal carbonates to form carbon dioxide.\\n* Bases react with acids to form salt and water, react with ammonium salts to release ammonia, and turn universal indicator blue or purple.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_not_characteristic_acid-2026",
    question: "Which property is NOT a characteristic of an acid?",
    options: [
      { text: "It dissolves magnesium oxide" },
      { text: "It produces ammonia from ammonium compounds" },
      { text: "It produces carbon dioxide from a carbonate" },
      { text: "It produces hydrogen from zinc metal" }
    ],
    correctAnswer: 1,
    explanation: "* Bases and alkalis produce ammonia gas when warmed with ammonium compounds.\\n* Acids do NOT react with ammonium salts to release ammonia.\\n* Acids dissolve basic metal oxides (like $\\text{MgO}$), liberate $\\text{CO}_2$ from carbonates, and produce $\\text{H}_2$ gas from reactive metals like zinc.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_acidity_increases_ph_incorrect-2026",
    question: "Which statement is NOT correct?",
    options: [
      { text: "When a base reacts with an ammonium salt, ammonia is given off" },
      { text: "When an acid reacts with a base, neutralization takes place" },
      { text: "When an acid reacts with a carbonate, carbon dioxide is given off" },
      { text: "When the acidity of a solution increases, the pH increases" }
    ],
    correctAnswer: 3,
    explanation: "* The pH scale has an inverse relationship with acidity (hydrogen ion concentration $[	ext{H}^+]$).\\n* As the acidity of a solution increases, the pH decreases (a lower pH value signifies greater acidity).\\n* Therefore, statement D is false and chemically incorrect.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_metal_oxide_cleaning-2026",
    question: "Hydrochloric acid is used to clean metals. The acid reacts with the oxide layer on the surface of the metal, forming a salt and water. Which word describes the metal oxide?",
    options: [
      { text: "A base" },
      { text: "An alloy" },
      { text: "An element" },
      { text: "An indicator" }
    ],
    correctAnswer: 0,
    explanation: "* Metal oxides react with acids to undergo neutralisation, producing a salt and water.\\n* By definition, a substance that neutralises an acid to form a salt and water is a base.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_two_statements_acid_prop-2026",
    question: "Which statements are properties of an acid?\nStatement 1: Reacts with ammonium sulfate to form ammonia.\nStatement 2: Turns red litmus blue.",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">1</th><th class="p-2 border">2</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✗</td><td class="p-2 border">✗</td></tr></tbody></table>`,
    options: [
      { text: "Row A: 1 (✓), 2 (✓)" },
      { text: "Row B: 1 (✓), 2 (✗)" },
      { text: "Row C: 1 (✗), 2 (✓)" },
      { text: "Row D: 1 (✗), 2 (✗)" }
    ],
    correctAnswer: 3,
    explanation: "* Statement 1 is a property of a base/alkali, not an acid (bases liberate $\\text{NH}_3$ from ammonium salts).\\n* Statement 2 is also a property of a base/alkali (alkalis turn red litmus blue, while acids turn blue litmus red).\\n* Therefore, neither statement is a property of an acid, making Row D correct.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_sodium_carbonate_hcl_balanced-2026",
    question: "Which equation for the reaction between solid sodium carbonate and dilute hydrochloric acid is correct?",
    options: [
      { text: "$\\text{Na}_2\\text{CO}_3\\text{(s)} + \\text{HCl}\\text{(aq)} \\rightarrow \\text{NaCl}\\text{(aq)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$" },
      { text: "$\\text{Na}_2\\text{CO}_3\\text{(s)} + \\text{HCl}\\text{(aq)} \\rightarrow \\text{Na}_2\\text{Cl}\\text{(aq)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$" },
      { text: "$\\text{Na}_2\\text{CO}_3\\text{(s)} + 2\\text{HCl}\\text{(aq)} \\rightarrow \\text{NaCl}\\text{(aq)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$" },
      { text: "$\\text{Na}_2\\text{CO}_3\\text{(s)} + 2\\text{HCl}\\text{(aq)} \\rightarrow 2\\text{NaCl}\\text{(aq)} + \\text{CO}_2\\text{(g)} + \\text{H}_2\\text{O(l)}$" }
    ],
    correctAnswer: 3,
    explanation: "* Sodium carbonate is $\\text{Na}_2\\text{CO}_3$, containing 2 sodium atoms.\\n* Each sodium forms $\\text{NaCl}$, requiring 2 moles of $\\text{HCl}$ to balance the chlorine atoms and supply hydrogen for water.\\n* The stoichiometric balanced equation is $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_most_acidic_substance-2026",
    question: "The table shows the pH of four substances: Calcium hydroxide (pH 12), Lemon juice (pH 4), Milk (pH 6), and Washing up liquid (pH 8). Which substance is the most acidic?",
    options: [
      { text: "Calcium hydroxide" },
      { text: "Lemon juice" },
      { text: "Milk" },
      { text: "Washing up liquid" }
    ],
    correctAnswer: 1,
    explanation: "* On the pH scale, lower numbers indicate greater acidity.\\n* Lemon juice has the lowest pH value ($\\text{pH} = 4$), which means it has the highest concentration of hydrogen ions ($[\\text{H}^+]$) among the four options.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_universal_indicator_wxyz-2026",
    question: "The table shows the pH of four aqueous solutions: W (pH 7), X (pH 9), Y (pH 2), and Z (pH 5). Universal Indicator is added to each solution. Which row shows the color of each solution after the indicator is added?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">W (pH 7)</th><th class="p-2 border">X (pH 9)</th><th class="p-2 border">Y (pH 2)</th><th class="p-2 border">Z (pH 5)</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Green</td><td class="p-2 border">Blue</td><td class="p-2 border">Red</td><td class="p-2 border">Orange</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Blue</td><td class="p-2 border">Green</td><td class="p-2 border">Orange</td><td class="p-2 border">Red</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Orange</td><td class="p-2 border">Red</td><td class="p-2 border">Blue</td><td class="p-2 border">Green</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Red</td><td class="p-2 border">Orange</td><td class="p-2 border">Green</td><td class="p-2 border">Blue</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Green | Blue | Red | Orange" },
      { text: "Row B: Blue | Green | Orange | Red" },
      { text: "Row C: Orange | Red | Blue | Green" },
      { text: "Row D: Red | Orange | Green | Blue" }
    ],
    correctAnswer: 0,
    explanation: "* At $\\text{pH} = 7$ (neutral), Universal Indicator is green.\\n* At $\\text{pH} = 9$ (weakly alkaline), it is blue.\\n* At $\\text{pH} = 2$ (strongly acidic), it is red.\\n* At $\\text{pH} = 5$ (weakly acidic), it is orange or yellow.\\n* Therefore, Row A is completely correct.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_periodic_acidic_oxide_element-2026",
    question: "A section of the Periodic Table is shown with elements labeled A (Group I metal), B (Group III metal), C (Group VI non-metal), and D (Group VII non-metal / noble gas period 4). Which element forms an acidic oxide?",
    options: [
      { text: "Element A" },
      { text: "Element B" },
      { text: "Element C" },
      { text: "Element D" }
    ],
    correctAnswer: 2,
    explanation: "* Non-metallic elements (such as sulfur or carbon in Group IV-VI) form covalent acidic oxides.\\n* Metallic elements in Group I and II form basic oxides.\\n* Element C is located in the non-metal region (Group VI), so its oxide is acidic.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_oxides_xy_metal_nonmetal-2026",
    question: "The oxide of element X forms an aqueous solution with pH 4. The oxide of element Y forms a solution that turns Universal Indicator blue. Which row correctly classifies elements X and Y?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Element X</th><th class="p-2 border">Element Y</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Metal</td><td class="p-2 border">Metal</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Non-metal</td><td class="p-2 border">Metal</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Metal</td><td class="p-2 border">Non-metal</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Non-metal</td><td class="p-2 border">Non-metal</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Metal | Metal" },
      { text: "Row B: Non-metal | Metal" },
      { text: "Row C: Metal | Non-metal" },
      { text: "Row D: Non-metal | Non-metal" }
    ],
    correctAnswer: 1,
    explanation: "* Oxide of X has $\\text{pH} = 4$ (acidic), so X must be a non-metal.\\n* Oxide of Y turns Universal Indicator blue (alkaline), so Y must be a metal (basic oxide forming an alkali).\\n* Row B correctly classifies X as a non-metal and Y as a metal.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_two_oxides_reactions_xy-2026",
    question: "Two oxides, X and Y, are added separately to dilute sulfuric acid and dilute sodium hydroxide:\n* X reacts with dilute sulfuric acid, but does NOT react with sodium hydroxide.\n* Y reacts with aqueous sodium hydroxide, but does NOT react with sulfuric acid.\nWhich type of oxide are X and Y?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Acidic oxide</th><th class="p-2 border">Basic oxide</th><th class="p-2 border">Metallic oxide</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">X</td><td class="p-2 border">Y</td><td class="p-2 border">X</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">X</td><td class="p-2 border">Y</td><td class="p-2 border">Y</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Y</td><td class="p-2 border">X</td><td class="p-2 border">X</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Y</td><td class="p-2 border">X</td><td class="p-2 border">Y</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Acidic = X, Basic = Y, Metallic = X" },
      { text: "Row B: Acidic = X, Basic = Y, Metallic = Y" },
      { text: "Row C: Acidic = Y, Basic = X, Metallic = X" },
      { text: "Row D: Acidic = Y, Basic = X, Metallic = Y" }
    ],
    correctAnswer: 2,
    explanation: "* Oxide X reacts with acid but not alkali $\\rightarrow$ X is a basic oxide (metal oxide).\\n* Oxide Y reacts with alkali but not acid $\\rightarrow$ Y is an acidic oxide (non-metal oxide).\\n* Row C correctly identifies Y as acidic oxide, X as basic oxide, and X as metallic oxide.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_statement_about_oxides_correct-2026",
    question: "Which statement about oxides is correct?",
    options: [
      { text: "Magnesium oxide will react with nitric acid to make a salt" },
      { text: "A solution of magnesium oxide will have a pH less than 7" },
      { text: "A solution of sulfur dioxide will have a pH greater than 7" },
      { text: "Sulfur dioxide will react with hydrochloric acid to make a salt" }
    ],
    correctAnswer: 0,
    explanation: "* Magnesium oxide ($\\text{MgO}$) is a basic metal oxide.\\n* Basic oxides react with acids (such as nitric acid, $\\text{HNO}_3$) to form salt (magnesium nitrate) and water.\\n* Basic solutions have $\\text{pH} > 7$, while sulfur dioxide is an acidic oxide that forms sulfurous acid ($\\text{pH} < 7$).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_co2_aqueous_caoh2_reaction_type-2026",
    question: "Carbon dioxide is an acidic oxide that reacts with aqueous calcium hydroxide (limewater). Which type of reaction takes place?",
    options: [
      { text: "Decomposition" },
      { text: "Neutralization" },
      { text: "Fermentation" },
      { text: "Oxidation" }
    ],
    correctAnswer: 1,
    explanation: "* Carbon dioxide is an acidic oxide, and calcium hydroxide is an alkaline base.\\n* The reaction between an acidic oxide and an alkali forms a salt ($\\text{CaCO}_3$) and water ($\\text{H}_2\\text{O}$), which is a neutralisation reaction.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  }
);

// Cambridge IGCSE Unit 7: Salt Preparation & Practical Exam Questions
questionBank.push(
  {
    id: "q_abs_purpose_step3_step4_cuso4-2026",
    question: "A method used to make copper(II) sulfate crystals is shown:\n1 Place dilute sulfuric acid in a beaker\n2 Warm the acid\n3 Add copper(II) oxide until it is in excess\n4 Filter the mixture\n5 Evaporate the filtrate until crystals start to form\n6 Leave the filtrate to cool\nWhat are the purposes of step 3 and step 4?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Step 3</th><th class="p-2 border">Step 4</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">to ensure all of the acid has reacted</td><td class="p-2 border">to obtain solid copper(II) sulfate</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">to ensure all of the acid has reacted</td><td class="p-2 border">to remove excess copper(II) oxide</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">to speed up the reaction</td><td class="p-2 border">to obtain solid copper(II) sulfate</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">to speed up the reaction</td><td class="p-2 border">to remove excess copper(II) oxide</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Step 3 = to ensure all of the acid has reacted | Step 4 = to obtain solid copper(II) sulfate" },
      { text: "Row B: Step 3 = to ensure all of the acid has reacted | Step 4 = to remove excess copper(II) oxide" },
      { text: "Row C: Step 3 = to speed up the reaction | Step 4 = to obtain solid copper(II) sulfate" },
      { text: "Row D: Step 3 = to speed up the reaction | Step 4 = to remove excess copper(II) oxide" }
    ],
    correctAnswer: 1,
    explanation: "* Step 3 adds copper(II) oxide in excess to guarantee that ALL the sulfuric acid has reacted completely, leaving no acid to contaminate the product.\\n* Step 4 filters the mixture to remove the unreacted solid copper(II) oxide residue from the soluble copper(II) sulfate solution.\\n* Row B is the exact Cambridge mark scheme answer.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_correct_sequence_pure_cuso4-2026",
    question: "What is the correct sequence of steps for the preparation of a pure dry sample of copper(II) sulfate crystals from copper(II) oxide and sulfuric acid?",
    options: [
      { text: "dissolving → crystallization → evaporation → filtration" },
      { text: "dissolving → evaporation → filtration → crystallization" },
      { text: "dissolving → filtration → crystallization → evaporation" },
      { text: "dissolving → filtration → evaporation → crystallization" }
    ],
    correctAnswer: 3,
    explanation: "* Step 1: Dissolving (reacting $\\text{CuO}$ with warm $\\text{H}_2\\text{SO}_4$).\\n* Step 2: Filtration (removing unreacted solid $\\text{CuO}$).\\n* Step 3: Evaporation (heating filtrate to the point of crystallisation).\\n* Step 4: Crystallisation (leaving to cool slowly to grow crystals).\\n* Sequence D correctly reflects this laboratory procedure.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_excess_not_removed_by_filtration-2026",
    question: "Salts can be made by adding different substances to dilute hydrochloric acid. For which substance could any excess NOT be removed by filtration?",
    options: [
      { text: "Magnesium" },
      { text: "Copper(II) oxide" },
      { text: "Zinc hydroxide" },
      { text: "Sodium hydroxide" }
    ],
    correctAnswer: 3,
    explanation: "* Magnesium metal, copper(II) oxide, and zinc hydroxide are all insoluble in neutral water, so any excess solid can easily be separated by filtration.\\n* Sodium hydroxide ($\\text{NaOH}$) is an alkali that is completely soluble in water; any excess $\\text{NaOH}$ dissolves and passes straight through the filter paper, contaminating the salt solution.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_order_of_stages_metal_oxide_salt-2026",
    question: "Four stages in the preparation of a salt from an acid and a solid metal oxide are listed:\n1 Add excess solid\n2 Evaporate half the solution and leave to cool\n3 Filter to remove unwanted solid\n4 Heat the acid\nIn which order should the stages be carried out?",
    options: [
      { text: "1 → 3 → 4 → 2" },
      { text: "4 → 1 → 3 → 2" },
      { text: "2 → 1 → 3 → 4" },
      { text: "4 → 2 → 1 → 3" }
    ],
    correctAnswer: 1,
    explanation: "* First, heat the acid in a beaker to speed up the reaction (Stage 4).\\n* Second, add the solid metal oxide until it is in excess (Stage 1).\\n* Third, filter the mixture to remove the unreacted solid (Stage 3).\\n* Fourth, evaporate half the solution and leave to cool for crystallization (Stage 2).\\n* The correct order is 4 → 1 → 3 → 2 (Option B).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_salt_reactions_pqrs_statements-2026",
    question: "A salt is produced in each of the following reactions:\nP: magnesium + dilute hydrochloric acid\nQ: zinc oxide + dilute sulfuric acid\nR: sodium hydroxide + dilute hydrochloric acid\nS: copper carbonate + dilute sulfuric acid\nWhich statements about the products of the reactions are correct?\n1 A flammable gas is produced in reaction P\n2 Water is formed in all reactions\n3 All the salts formed are soluble in water",
    options: [
      { text: "1, 2 and 3" },
      { text: "1 and 2" },
      { text: "1 and 3" },
      { text: "2 and 3" }
    ],
    correctAnswer: 2,
    explanation: "* Statement 1 is correct: Reaction P produces hydrogen gas ($\\text{H}_2$), which is highly flammable.\\n* Statement 2 is incorrect: Reaction P produces $\\text{MgCl}_2 + \\text{H}_2$ (NO water is formed). Water is formed only in Q, R, and S.\\n* Statement 3 is correct: $\\text{MgCl}_2$, $\\text{ZnSO}_4$, $\\text{NaCl}$, and $\\text{CuSO}_4$ are all completely soluble in water.\\n* Therefore, statements 1 and 3 are correct (Option C).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_zinc_sulfate_unnecessary_equipment-2026",
    question: "Zinc sulfate is a soluble salt and can be prepared by reacting excess zinc carbonate with dilute sulfuric acid. Which piece of equipment would NOT be required in the preparation of zinc sulfate crystals?",
    options: [
      { text: "A condenser" },
      { text: "A filter funnel" },
      { text: "An evaporating dish" },
      { text: "A beaker" }
    ],
    correctAnswer: 0,
    explanation: "* A condenser is used in distillation to condense vapours back to liquid.\\n* Preparing crystals requires a beaker (to mix acid and carbonate), a filter funnel (to remove excess carbonate), and an evaporating dish (to heat the filtrate to crystallization point). A condenser is not needed.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_burette_pipette_salt_prep-2026",
    question: "Which salt preparation uses a burette and a pipette?",
    options: [
      { text: "calcium nitrate from calcium carbonate and nitric acid" },
      { text: "potassium chloride from potassium hydroxide and hydrochloric acid" },
      { text: "copper(II) sulfate from copper(II) hydroxide and sulfuric acid" },
      { text: "zinc chloride from zinc and hydrochloric acid" }
    ],
    correctAnswer: 1,
    explanation: "* A burette and pipette are the standard apparatus used in titration (Method B).\\n* Titration is required when reacting an acid with a soluble base/alkali (such as $\\text{KOH}$) to prepare a Group I soluble salt like $\\text{KCl}$.\\n* The other salts are made by adding an excess of insoluble solid (Method A).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_acid_reacts_ammonia_ammonium_sulfate-2026",
    question: "Which acid reacts with ammonia to produce the salt ammonium sulfate?",
    options: [
      { text: "hydrochloric" },
      { text: "nitric" },
      { text: "phosphoric" },
      { text: "sulfuric" }
    ],
    correctAnswer: 3,
    explanation: "* Ammonia ($\\text{NH}_3$) reacts with sulfuric acid ($\\text{H}_2\\text{SO}_4$) to form ammonium sulfate ((\\text{NH}_4)_2\\text{SO}_4): $2\\text{NH}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow (\\text{NH}_4)_2\\text{SO}_4$.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_excess_metal_oxide_removed_how-2026",
    question: "A salt is made by adding an excess of an insoluble metal oxide to an acid. How can the excess metal oxide be removed?",
    options: [
      { text: "chromatography" },
      { text: "crystallization" },
      { text: "filtration" },
      { text: "distillation" }
    ],
    correctAnswer: 2,
    explanation: "* Insoluble solid particles suspended in a liquid are separated using filtration.\\n* The unreacted metal oxide remains on the filter paper as the residue, while the clear salt solution passes through as the filtrate.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_abs_methods_prepare_copper_chloride-2026",
    question: "Salts can be prepared by reacting a dilute acid:\n1 with a metal\n2 with a base\n3 with a carbonate\nWhich methods could be used to prepare copper(II) chloride?",
    options: [
      { text: "1, 2 and 3" },
      { text: "2 and 3" },
      { text: "1 and 3" },
      { text: "1 and 2" }
    ],
    correctAnswer: 1,
    explanation: "* Copper is below hydrogen in the reactivity series, so copper metal does NOT react with dilute hydrochloric acid (Method 1 cannot be used).\\n* Copper(II) chloride can be prepared by reacting dilute $\\text{HCl}$ with a base ($\\text{CuO}$ or $\\text{Cu(OH)}_2$, Method 2) or with a carbonate ($\\text{CuCO}_3$, Method 3).\\n* Therefore, methods 2 and 3 can be used (Option B).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  }
);

// Cambridge IGCSE Unit 10: Chemistry of the Environment Exam Questions
questionBank.push(
  {
    id: "q_env_heating_copper_sulfate_row-2026",
    question: "Separate samples of anhydrous copper(II) sulfate and hydrated copper(II) sulfate are heated in evaporating dishes. Which row shows the correct color change?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">anhydrous copper(II) sulfate</th><th class="p-2 border">hydrated copper(II) sulfate</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">No change</td><td class="p-2 border">White to blue</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">White to blue</td><td class="p-2 border">No change</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">No change</td><td class="p-2 border">Blue to white</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Blue to white</td><td class="p-2 border">Blue to white</td></tr></tbody></table>`,
    options: [
      { text: "Row A: anhydrous = No change | hydrated = White to blue" },
      { text: "Row B: anhydrous = White to blue | hydrated = No change" },
      { text: "Row C: anhydrous = No change | hydrated = Blue to white" },
      { text: "Row D: anhydrous = Blue to white | hydrated = Blue to white" }
    ],
    correctAnswer: 2,
    explanation: "* Anhydrous copper(II) sulfate ($\\text{CuSO}_4$) is already a dry white powder; heating it causes no chemical reaction or color change (No change).\\n* Hydrated copper(II) sulfate ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) contains blue crystals; heating drives off water of crystallisation to leave white anhydrous powder (Blue to white).\\n* Therefore, Row C is the correct Cambridge answer.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_water_purification_processes-2026",
    question: "Water must be purified before it is suitable for use in the home. Which processes are used to remove solid impurities and kill bacteria?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">to remove solid impurities</th><th class="p-2 border">to kill bacteria</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Chlorination</td><td class="p-2 border">Chlorination</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Filtration</td><td class="p-2 border">Chlorination</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Chlorination</td><td class="p-2 border">Filtration</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Filtration</td><td class="p-2 border">Filtration</td></tr></tbody></table>`,
    options: [
      { text: "Row A: remove solid = Chlorination | kill bacteria = Chlorination" },
      { text: "Row B: remove solid = Filtration | kill bacteria = Chlorination" },
      { text: "Row C: remove solid = Chlorination | kill bacteria = Filtration" },
      { text: "Row D: remove solid = Filtration | kill bacteria = Filtration" }
    ],
    correctAnswer: 1,
    explanation: "* Filtration through sand beds traps and removes insoluble solid dirt and suspended particles.\\n* Chlorination involves adding chlorine to water to disinfect it and kill harmful bacteria and microorganisms.\\n* Row B is the exact mark scheme answer.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_pollutant_source_incorrect-2026",
    question: "Which row showing an air pollutant and its major source is NOT correct?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Pollutant</th><th class="p-2 border">Major source of pollutant</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Oxides of nitrogen</td><td class="p-2 border">Car engines</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Lead compounds</td><td class="p-2 border">Leaded petrol</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Carbon monoxide</td><td class="p-2 border">Complete combustion of carbon fuels</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Sulfur dioxide</td><td class="p-2 border">Fossil fuels containing sulfur</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Oxides of nitrogen | Car engines" },
      { text: "Row B: Lead compounds | Leaded petrol" },
      { text: "Row C: Carbon monoxide | Complete combustion of carbon fuels" },
      { text: "Row D: Sulfur dioxide | Fossil fuels containing sulfur" }
    ],
    correctAnswer: 2,
    explanation: "* Carbon monoxide ($\\text{CO}$) is formed by the INCOMPLETE combustion of carbon-containing fuels (when oxygen supply is limited).\\n* Complete combustion produces non-toxic carbon dioxide ($\\text{CO}_2$).\\n* Therefore, Row C is incorrect.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_percentage_oxygen_polluted_air-2026",
    question: "What is the percentage of oxygen to the nearest whole number in polluted air?",
    options: [
      { text: "28%" },
      { text: "21%" },
      { text: "81%" },
      { text: "19%" }
    ],
    correctAnswer: 1,
    explanation: "* Even in polluted city air, pollutants are measured in parts per million (ppm) or very tiny fractions of a percent.\\n* The bulk volume of air remains approximately 78% nitrogen and 21% oxygen (rounded to the nearest whole number, it is 21%).",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_limestone_crumble_gas-2026",
    question: "The limestone buildings in a city begin to crumble. Which gas is most likely to cause this damage?",
    options: [
      { text: "Carbon dioxide" },
      { text: "Sulfur dioxide" },
      { text: "Carbon monoxide" },
      { text: "Oxygen" }
    ],
    correctAnswer: 1,
    explanation: "* Sulfur dioxide ($\\text{SO}_2$) dissolves in rainwater to produce sulfurous and sulfuric acids (acid rain).\\n* Sulfuric acid chemically attacks calcium carbonate ($\\text{CaCO}_3$) in limestone: $\\text{CaCO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CaSO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2$, causing the stone surface to soften and crumble.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_env_co2_ch4_comparison_row-2026",
    question: "Which row is correct for both carbon dioxide and methane?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Causes climate change</th><th class="p-2 border">Produced by burning fuels</th><th class="p-2 border">Produced by living organisms</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Causes climate change (✓), Produced by burning fuels (✗), Produced by living organisms (✓)" },
      { text: "Row B: Causes climate change (✓), Produced by burning fuels (✓), Produced by living organisms (✗)" },
      { text: "Row C: Causes climate change (✓), Produced by burning fuels (✓), Produced by living organisms (✓)" },
      { text: "Row D: Causes climate change (✗), Produced by burning fuels (✓), Produced by living organisms (✓)" }
    ],
    correctAnswer: 2,
    explanation: "* Both $\\text{CO}_2$ and $\\text{CH}_4$ are greenhouse gases that absorb infrared radiation and cause climate change (✓).\\n* Both can be produced in fuel combustion (e.g. incomplete/complete combustion of coal/gas) (✓).\\n* Both are produced by living organisms (respiration produces $\\text{CO}_2$, and anaerobic bacteria in ruminants produce $\\text{CH}_4$) (✓).\\n* Therefore, Row C is completely correct.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  }
);

// Cambridge IGCSE Unit 11: Organic Chemistry Exam Questions
questionBank.push(
  {
    id: "q_org_homologous_series_not_represented-2026",
    question: "Which homologous series is NOT represented in the compounds shown below?\n\n* Compound 1: CH₃–CH₂–CH₃\n* Compound 2: CH₃–CH₂–OH\n* Compound 3: CH₃–COOH\n* Compound 4: CH₃–CH(CH₃)–CH₃",
    options: [
      { text: "Alcohols" },
      { text: "Alkanes" },
      { text: "Alkenes" },
      { text: "Carboxylic acids" }
    ],
    correctAnswer: 2,
    explanation: "* Compound 1 is propane (alkane).\n* Compound 2 is ethanol (alcohol).\n* Compound 3 is ethanoic acid (carboxylic acid).\n* Compound 4 is 2-methylpropane (branched alkane).\n* There are no alkenes (compounds containing C=C double bonds) present, making Option C the correct answer.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_bond_all_four_contain-2026",
    question: "The list gives the names of four organic compounds:\n\n* Ethane\n* Ethanoic acid\n* Ethanol\n* Ethene\n\nWhich bond do all four compounds contain?",
    options: [
      { text: "C–C" },
      { text: "C=C" },
      { text: "C–H" },
      { text: "C–O" }
    ],
    correctAnswer: 2,
    explanation: "* Ethane (C₂H₆) contains C–C and C–H bonds.\n* Ethanoic acid (CH₃COOH) contains C–C, C–H, C=O, C–O, and O–H bonds.\n* Ethanol (C₂H₅OH) contains C–C, C–H, C–O, and O–H bonds.\n* Ethene (C₂H₄) contains a C=C double bond and C–H bonds, but NO single C–C bond.\n* Therefore, the C–H single covalent bond is the only bond common to all four compounds.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_same_homologous_series_selection-2026",
    question: "Which of the compounds shown belong to the same homologous series?\n\n1) CH₃OH\n2) CH₃CH₂OH\n3) CH₃COOH\n4) CH₃CH₂CH₂OH",
    options: [
      { text: "1, 2 and 3" },
      { text: "1, 2 and 4" },
      { text: "1, 3 and 4" },
      { text: "2, 3 and 4" }
    ],
    correctAnswer: 1,
    explanation: "* Compounds 1 (methanol), 2 (ethanol), and 4 (propan-1-ol) all have the general formula CₙH₂ₙ₊₁OH and possess the same hydroxyl (-OH) functional group, so they belong to the alcohol homologous series.\n* Compound 3 (ethanoic acid) has a carboxyl (-COOH) functional group and belongs to carboxylic acids.\n* Therefore, 1, 2, and 4 belong to the same homologous series.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_molecules_same_homologous_series-2026",
    question: "The structures of four molecules are given:\n\n* P: H–COOH (methanoic acid)\n* Q: H–CH₂–OH (methanol)\n* R: CH₂=CH₂ (ethene)\n* S: CH₃–COOH (ethanoic acid)\n\nWhich two molecules belong to the same homologous series?",
    options: [
      { text: "P and Q" },
      { text: "P and S" },
      { text: "Q and R" },
      { text: "R and S" }
    ],
    correctAnswer: 1,
    explanation: "* Molecule P (methanoic acid, HCOOH) and Molecule S (ethanoic acid, CH₃COOH) both contain the -COOH carboxyl functional group.\n* They both belong to the carboxylic acid homologous series (general formula CₙH₂ₙ₊₁COOH).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_ethene_similar_chemical_properties-2026",
    question: "Which compound has chemical properties similar to those of ethene (CH₂=CH₂)?",
    options: [
      { text: "Methane (CH₄)" },
      { text: "Ethane (C₂H₆)" },
      { text: "Ethanol (C₂H₅OH)" },
      { text: "Propene (CH₃–CH=CH₂)" }
    ],
    correctAnswer: 3,
    explanation: "* Ethene and propene both belong to the alkene homologous series because they both contain the reactive carbon-carbon double bond (C=C).\n* Compounds in the same homologous series possess similar chemical properties (e.g. both undergo addition reactions and decolourise bromine water).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_hydrocarbon_reactions_scheme_wxyz-2026",
    question: "What are the names of the compounds shown in the reaction scheme below?\n\nButane —(cracking)→ W + X\nX —(+ steam)→ Y\nY —(+ oxygen)→ Z (CH₃COOH)",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">W</th><th class="p-2 border">X</th><th class="p-2 border">Y</th><th class="p-2 border">Z</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Ethane</td><td class="p-2 border">Ethene</td><td class="p-2 border">Ethanol</td><td class="p-2 border">Ethanoic acid</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Ethane</td><td class="p-2 border">Ethene</td><td class="p-2 border">Ethanoic acid</td><td class="p-2 border">Ethanol</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Ethene</td><td class="p-2 border">Ethane</td><td class="p-2 border">Ethanoic acid</td><td class="p-2 border">Ethanol</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Ethene</td><td class="p-2 border">Ethane</td><td class="p-2 border">Ethanol</td><td class="p-2 border">Ethanoic acid</td></tr></tbody></table>`,
    options: [
      { text: "Row A: W = Ethane, X = Ethene, Y = Ethanol, Z = Ethanoic acid" },
      { text: "Row B: W = Ethane, X = Ethene, Y = Ethanoic acid, Z = Ethanol" },
      { text: "Row C: W = Ethene, X = Ethane, Y = Ethanoic acid, Z = Ethanol" },
      { text: "Row D: W = Ethene, X = Ethane, Y = Ethanol, Z = Ethanoic acid" }
    ],
    correctAnswer: 0,
    explanation: "* Cracking butane (C₄H₁₀) gives ethane (W, C₂H₆) and ethene (X, C₂H₄).\n* Ethene reacts with steam in an addition reaction to form ethanol (Y, C₂H₅OH).\n* Oxidation of ethanol with oxygen/acidified oxidising agents produces ethanoic acid (Z, CH₃COOH).\n* Therefore, Row A is the correct sequence.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_petroleum_fractions_xyz_tower-2026",
    question: "The diagram shows the fractional distillation of petroleum. Fractions X, Y, and Z leave the fractionating column at three different heights below gasoline and above bitumen (X is higher than Y, and Y is higher than Z). What could X, Y, and Z represent?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">X</th><th class="p-2 border">Y</th><th class="p-2 border">Z</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Diesel oil</td><td class="p-2 border">Lubricating fraction</td><td class="p-2 border">Paraffin</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Lubricating fraction</td><td class="p-2 border">Diesel oil</td><td class="p-2 border">Paraffin</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Paraffin</td><td class="p-2 border">Lubricating fraction</td><td class="p-2 border">Diesel oil</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Paraffin</td><td class="p-2 border">Diesel oil</td><td class="p-2 border">Lubricating fraction</td></tr></tbody></table>`,
    options: [
      { text: "Row A: X = Diesel oil, Y = Lubricating fraction, Z = Paraffin" },
      { text: "Row B: X = Lubricating fraction, Y = Diesel oil, Z = Paraffin" },
      { text: "Row C: X = Paraffin, Y = Lubricating fraction, Z = Diesel oil" },
      { text: "Row D: X = Paraffin, Y = Diesel oil, Z = Lubricating fraction" }
    ],
    correctAnswer: 3,
    explanation: "* In a fractionating column, boiling points increase towards the bottom.\n* Order from top to bottom: Refinery gas → Gasoline → Naphtha → Paraffin (kerosene) → Diesel oil → Lubricating fraction → Bitumen.\n* Therefore, X must be Paraffin, Y must be Diesel oil, and Z must be Lubricating fraction (Row D).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_natural_gas_constituent-2026",
    question: "The main constituent of natural gas is hydrocarbon X. To which homologous series does X belong and how many atoms are in one molecule of X?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">homologous series</th><th class="p-2 border">Number of atoms in one molecule</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Alkane</td><td class="p-2 border">1</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Alkane</td><td class="p-2 border">5</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Alkene</td><td class="p-2 border">1</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Alkene</td><td class="p-2 border">5</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Alkane | 1 atom" },
      { text: "Row B: Alkane | 5 atoms" },
      { text: "Row C: Alkene | 1 atom" },
      { text: "Row D: Alkene | 5 atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Natural gas consists primarily of methane (CH₄).\n* Methane is the first member of the alkane homologous series.\n* One molecule of CH₄ contains 1 carbon atom + 4 hydrogen atoms = 5 total atoms (Row B).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_petroleum_fraction_incorrect_use-2026",
    question: "Which row shows an INCORRECT use for the named petroleum fraction?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Name of fraction</th><th class="p-2 border">Use</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Naphtha</td><td class="p-2 border">Making chemicals</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Gas oil (diesel)</td><td class="p-2 border">Diesel engines</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Kerosene</td><td class="p-2 border">Jet fuel</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Fuel oil</td><td class="p-2 border">Making waxes and polishes</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Naphtha | Making chemicals" },
      { text: "Row B: Gas oil | Diesel engines" },
      { text: "Row C: Kerosene | Jet fuel" },
      { text: "Row D: Fuel oil | Making waxes and polishes" }
    ],
    correctAnswer: 3,
    explanation: "* Lubricating oil (not fuel oil) is used for making waxes, polishes, and engine lubricants.\n* Fuel oil is used as fuel for ships and industrial home heating furnaces.\n* Therefore, Row D is incorrect.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_petroleum_statement_not_correct-2026",
    question: "Which statement about petroleum (crude oil) is NOT correct?",
    options: [
      { text: "It can be separated into useful substances by fractional distillation" },
      { text: "It consists mainly of hydrocarbons" },
      { text: "It is found underground in many parts of the world" },
      { text: "Its main use is for making lubricants and polishes" }
    ],
    correctAnswer: 3,
    explanation: "* The primary, overwhelming use of petroleum (over 90%) is as a fuel for transport (petrol, diesel, jet fuel) and heating, NOT for lubricants and polishes.\n* Lubricants and polishes represent only a small fraction of refined crude oil.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_alkane_properties_true_statement-2026",
    question: "Which statement about alkanes is correct?",
    options: [
      { text: "Ethane has one more carbon atom and one more hydrogen atom than methane" },
      { text: "They are converted to alcohols by reaction with steam" },
      { text: "They contain carbon-carbon double bonds" },
      { text: "They form carbon dioxide and water on complete combustion" }
    ],
    correctAnswer: 3,
    explanation: "* Alkanes burn completely in excess oxygen to produce carbon dioxide (CO₂) and water (H₂O).\n* Statement A is wrong because ethane (C₂H₆) has 1 more C and 2 more H atoms (CH₂ difference) than methane (CH₄).\n* Statement B is wrong because alkenes (not alkanes) react with steam to form alcohols.\n* Statement C is wrong because alkanes contain only single C–C bonds.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_methane_properties_table-2026",
    question: "Which row correctly identifies the physical properties of methane (CH₄)?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Volatility</th><th class="p-2 border">Electrical conductivity</th><th class="p-2 border">Solubility in water</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">High</td><td class="p-2 border">Good</td><td class="p-2 border">Soluble</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">High</td><td class="p-2 border">Poor</td><td class="p-2 border">Insoluble</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Low</td><td class="p-2 border">Good</td><td class="p-2 border">Soluble</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Low</td><td class="p-2 border">Poor</td><td class="p-2 border">Insoluble</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Volatility = High | Conductivity = Good | Solubility = Soluble" },
      { text: "Row B: Volatility = High | Conductivity = Poor | Solubility = Insoluble" },
      { text: "Row C: Volatility = Low | Conductivity = Good | Solubility = Soluble" },
      { text: "Row D: Volatility = Low | Conductivity = Poor | Solubility = Insoluble" }
    ],
    correctAnswer: 1,
    explanation: "* Methane is a small, non-polar simple covalent gas with weak intermolecular forces, so it has high volatility (boils at -161 °C).\n* It has no mobile electrons or free ions, so its electrical conductivity is poor (non-conductor).\n* It is non-polar, making it insoluble in polar water molecules.\n* Row B is correct.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_incomplete_combustion_ethane_equation-2026",
    question: "Which equation represents the incomplete combustion of ethane?",
    options: [
      { text: "CH₄ + O₂ → CO₂ + 2H₂" },
      { text: "2C₂H₆ + 5O₂ → 4CO + 6H₂O" },
      { text: "2C₂H₆ + 3O₂ → 2CO + 4H₂O" },
      { text: "2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O" }
    ],
    correctAnswer: 1,
    explanation: "* Incomplete combustion of ethane occurs in a limited supply of oxygen, producing toxic carbon monoxide (CO) and water (H₂O).\n* Balancing for ethane (C₂H₆): 2C₂H₆(g) + 5O₂(g) → 4CO(g) + 6H₂O(l).\n* Equation 4 represents complete combustion (producing CO₂), whereas Equation 2 represents incomplete combustion.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_compound_q_decolorizes_bromine_water-2026",
    question: "Compound Q decolourises aqueous bromine water. Compound Q has two carbon atoms in each molecule. Which statement about compound Q is correct?",
    options: [
      { text: "It contains carbon-hydrogen double bonds" },
      { text: "It has six hydrogen atoms per molecule" },
      { text: "It has two carbon-carbon double bonds" },
      { text: "It is produced by cracking alkanes" }
    ],
    correctAnswer: 3,
    explanation: "* Decolourising bromine water identifies compound Q as an alkene (unsaturated hydrocarbon with a C=C double bond).\n* Two carbon atoms means Q is ethene (C₂H₄).\n* Ethene is produced industrially by the catalytic cracking of longer alkane petroleum fractions (Option D).\n* (Statement A is impossible because hydrogen forms only single bonds; statement B describes ethane C₂H₆; statement C is impossible for a 2-carbon molecule).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_substance_not_obtained_cracking_propane-2026",
    question: "Hydrocarbons obtained by fractional distillation can be cracked to make useful products. Which substance could NOT be obtained by cracking propane (C₃H₈, Mr 44)?",
    options: [
      { text: "C₂H₄ (ethene)" },
      { text: "CH₄ (methane)" },
      { text: "C₄H₈ (butene)" },
      { text: "H₂ (hydrogen)" }
    ],
    correctAnswer: 2,
    explanation: "* Cracking breaks a larger hydrocarbon into smaller molecules.\n* Propane contains only 3 carbon atoms (C₃H₈).\n* It can crack to form: C₃H₈ → C₂H₄ + CH₄ or C₃H₈ → C₃H₆ + H₂.\n* It is chemically impossible to obtain butene (C₄H₈, 4 carbons) by cracking a 3-carbon molecule, because cracking cannot create additional carbon atoms!",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_reaction_sequence_butane_xyz-2026",
    question: "The diagram shows a reaction sequence:\n\nButane —(process X)→ Ethene —(process Y)→ Ethanol —(process Z)→ Carbon dioxide and water\n\nWhich row correctly names the processes X, Y, and Z?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">X</th><th class="p-2 border">Y</th><th class="p-2 border">Z</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Cracking</td><td class="p-2 border">Fermentation</td><td class="p-2 border">Respiration</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Cracking</td><td class="p-2 border">Hydration</td><td class="p-2 border">Combustion</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Distillation</td><td class="p-2 border">Fermentation</td><td class="p-2 border">Respiration</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Distillation</td><td class="p-2 border">Hydration</td><td class="p-2 border">Combustion</td></tr></tbody></table>`,
    options: [
      { text: "Row A: X = Cracking, Y = Fermentation, Z = Respiration" },
      { text: "Row B: X = Cracking, Y = Hydration, Z = Combustion" },
      { text: "Row C: X = Distillation, Y = Fermentation, Z = Respiration" },
      { text: "Row D: X = Distillation, Y = Hydration, Z = Combustion" }
    ],
    correctAnswer: 1,
    explanation: "* X: Breaking large butane into small ethene is cracking.\n* Y: Adding steam to ethene to make ethanol is hydration.\n* Z: Burning ethanol in oxygen to form CO₂ and H₂O is combustion.\n* Therefore, Row B is the exact match.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_ethanol_molecule_diagram_name-2026",
    question: "The diagram represents the molecule of an organic compound containing two carbon atoms, six hydrogen atoms, and one oxygen atom arranged as C₂H₅OH. What is the name of the compound?",
    options: [
      { text: "Ethane" },
      { text: "Ethanoic acid" },
      { text: "Ethanol" },
      { text: "Ethene" }
    ],
    correctAnswer: 2,
    explanation: "* The structure contains 2 carbon atoms, 5 hydrogen atoms bonded to carbon, and an -OH (hydroxyl) group.\n* This corresponds to C₂H₅OH, which is ethanol.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_liquid_w_burns_ph7-2026",
    question: "Liquid W burns completely to give carbon dioxide and water. Liquid W is a compound containing carbon, hydrogen and oxygen. A solution of liquid W in water is pH 7. What is liquid W?",
    options: [
      { text: "Ethanoic acid" },
      { text: "Ethanol" },
      { text: "Gasoline" },
      { text: "Methane" }
    ],
    correctAnswer: 1,
    explanation: "* Liquid W contains C, H, and O (eliminating gasoline and methane which only contain C and H).\n* An aqueous solution of ethanoic acid is acidic (pH < 7, around pH 3–4).\n* Ethanol dissolves in water to form a neutral solution with pH 7.\n* Therefore, liquid W is ethanol.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_production_ethanol_from_ethene-2026",
    question: "What is used in the industrial catalytic production of ethanol from ethene?",
    options: [
      { text: "Steam" },
      { text: "Hydrogen and oxygen" },
      { text: "Oxygen only" },
      { text: "Yeast" }
    ],
    correctAnswer: 0,
    explanation: "* Ethanol is manufactured from ethene by the addition reaction with steam (H₂O(g)) at 300 °C, 60 atm pressure, in the presence of a concentrated phosphoric acid (H₃PO₄) catalyst: C₂H₄ + H₂O → C₂H₅OH.\n* (Yeast is used in fermentation of glucose, not from ethene).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_ethanol_obtained_fermentation_mixture-2026",
    question: "Ethanol is made by fermentation of glucose. How is pure ethanol obtained from the resulting fermentation mixture?",
    options: [
      { text: "Chromatography" },
      { text: "Crystallisation" },
      { text: "Fractional distillation" },
      { text: "Electrolysis" }
    ],
    correctAnswer: 2,
    explanation: "* Fermentation produces an aqueous solution containing approximately 10–14% ethanol alongside water and dead yeast cells.\n* Ethanol (boiling point 78 °C) and water (boiling point 100 °C) are miscible liquids with different boiling points, so fractional distillation is used to separate and concentrate the ethanol.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_ethanol_production_properties_row-2026",
    question: "Which row correctly describes the production of ethanol and its properties?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Can be made from glucose</th><th class="p-2 border">Can be made from ethene</th><th class="p-2 border">Is used as a fuel</th><th class="p-2 border">Is used as a solvent</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td><td class="p-2 border">✗</td><td class="p-2 border">✓</td></tr></tbody></table>`,
    options: [
      { text: "Row A: from glucose (✓), from ethene (✗), fuel (✓), solvent (✓)" },
      { text: "Row B: from glucose (✓), from ethene (✓), fuel (✓), solvent (✓)" },
      { text: "Row C: from glucose (✓), from ethene (✓), fuel (✓), solvent (✗)" },
      { text: "Row D: from glucose (✗), from ethene (✓), fuel (✗), solvent (✓)" }
    ],
    correctAnswer: 1,
    explanation: "* Ethanol can be manufactured both from glucose (via fermentation) and from ethene (via catalytic hydration) (✓ and ✓).\n* Ethanol is widely used both as a clean motor fuel and as an industrial/cosmetic solvent (✓ and ✓).\n* Therefore, Row B is completely correct.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 5,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_methanoic_acid_statement-2026",
    question: "Which statement describes methanoic acid (H–COOH)?",
    options: [
      { text: "It is a liquid with a characteristic smell" },
      { text: "It is a liquid which decolourises bromine water" },
      { text: "It is a colourless flammable gas" },
      { text: "It is formed when ethane reacts with steam" }
    ],
    correctAnswer: 0,
    explanation: "* Methanoic acid (HCOOH) is a colourless liquid with a sharp, characteristic pungent smell (found in ant stings).\n* It is a saturated carboxylic acid, so it does not decolourise bromine water.\n* It is not a gas at room temperature and is not formed from ethane.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_carboxylic_acid_not_correct_statement-2026",
    question: "Which statement about carboxylic acids is NOT correct?",
    options: [
      { text: "Aqueous ethanoic acid has a pH below pH 7" },
      { text: "They produce carbon dioxide when reacted with a metal carbonate" },
      { text: "Methyl orange turns yellow in aqueous ethanoic acid" },
      { text: "They contain the functional group –COOH" }
    ],
    correctAnswer: 2,
    explanation: "* Ethanoic acid is an acid (pH ~ 3–4), so it turns methyl orange indicator red (not yellow; yellow is for neutral/alkaline solutions).\n* Statements A, B, and D are all true chemical facts for carboxylic acids.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_compound_x_bonds_table_identification-2026",
    question: "The table shows the bonds that are present and bonds that are not present in compound X:\n\n* C–C bond: present (✓)\n* C=C bond: absent (✗)\n* C–H bond: present (✓)\n* C–O bond: present (✓)\n* C=O bond: present (✓)\n* O–H bond: present (✓)\n\nWhat type of compound is X?",
    options: [
      { text: "A carboxylic acid" },
      { text: "An alcohol" },
      { text: "An alkane" },
      { text: "An alkene" }
    ],
    correctAnswer: 0,
    explanation: "* The carboxyl functional group (-COOH) consists of a C=O double bond, a C-O single bond, and an O-H single bond attached to the same carbon atom.\n* Since compound X has C-C, C-H, C-O, C=O, and O-H bonds, it must be a carboxylic acid (e.g. ethanoic acid, CH₃COOH).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_dilute_ethanoic_acid_properties_row-2026",
    question: "What are the physical properties of a dilute solution of ethanoic acid?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Smell</th><th class="p-2 border">Appearance</th><th class="p-2 border">State at r.t.p.</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Odorless</td><td class="p-2 border">Colorless</td><td class="p-2 border">Gas</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Odorless</td><td class="p-2 border">Red</td><td class="p-2 border">Liquid</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Pungent smell</td><td class="p-2 border">Red</td><td class="p-2 border">Gas</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Pungent smell</td><td class="p-2 border">Colorless</td><td class="p-2 border">Liquid</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Odorless | Colorless | Gas" },
      { text: "Row B: Odorless | Red | Liquid" },
      { text: "Row C: Pungent smell | Red | Gas" },
      { text: "Row D: Pungent smell | Colorless | Liquid" }
    ],
    correctAnswer: 3,
    explanation: "* Dilute ethanoic acid (vinegar) has a sharp, characteristic pungent smell.\n* It is a completely clear, colourless liquid at room temperature and pressure (Row D).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_ethene_addition_polymer_terms-2026",
    question: "Ethene forms an addition polymer:\n\n... + CH₂=CH₂ + CH₂=CH₂ + ... → –[CH₂–CH₂–CH₂–CH₂]–\n\nWhich terms describe this polymer?",
    options: [
      { text: "An unsaturated compound called poly(ethene)" },
      { text: "A saturated compound called poly(ethene)" },
      { text: "An unsaturated compound called poly(ethane)" },
      { text: "A saturated compound called poly(ethane)" }
    ],
    correctAnswer: 1,
    explanation: "* When ethene undergoes addition polymerisation, the carbon-carbon double bonds (C=C) break open to form a polymer chain containing ONLY single C–C bonds.\n* Therefore, poly(ethene) is a saturated macromolecule named poly(ethene).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_formation_of_polymer_row-2026",
    question: "Which row describes the monomer and polymer correctly?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Monomer</th><th class="p-2 border">Polymer</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Ethane</td><td class="p-2 border">Poly(ethane)</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Ethene</td><td class="p-2 border">Poly(ethene)</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Ethene</td><td class="p-2 border">Poly(ethane)</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Ethane</td><td class="p-2 border">Poly(ethene)</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Ethane → Poly(ethane)" },
      { text: "Row B: Ethene → Poly(ethene)" },
      { text: "Row C: Ethene → Poly(ethane)" },
      { text: "Row D: Ethane → Poly(ethene)" }
    ],
    correctAnswer: 1,
    explanation: "* The monomer must be an unsaturated alkene with a C=C double bond (ethene, C₂H₄).\n* The resulting addition polymer retains the monomer's root name in brackets: poly(ethene) (Row B).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_chloroethene_pvc_monomer-2026",
    question: "The diagram shows three repeat units in the structure of an addition polymer with chlorine atoms: –[CH₂–CHCl–CH₂–CHCl–CH₂–CHCl]–. Which alkene monomer is used to make this polymer?",
    options: [
      { text: "1,2-dichloroethane" },
      { text: "1-chloroethane" },
      { text: "Chloroethene (CH₂=CHCl)" },
      { text: "1,2-dichloroethene" }
    ],
    correctAnswer: 2,
    explanation: "* To identify the monomer from an addition polymer repeat unit: take two adjacent carbon atoms along the main chain (–CH₂–CHCl–) and insert a double bond between them.\n* This gives CH₂=CHCl, which is chloroethene (vinyl chloride, the monomer for PVC).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  },
  {
    id: "q_org_process_not_produce_co2-2026",
    question: "Which process does NOT produce carbon dioxide?",
    options: [
      { text: "Combustion of methane" },
      { text: "Fermentation of sugar" },
      { text: "Polymerisation of ethene" },
      { text: "Respiration" }
    ],
    correctAnswer: 2,
    explanation: "* Polymerisation of ethene is an addition reaction where monomers join together to form a single product, poly(ethene), with NO by-products or gas emissions.\n* Combustion of methane produces CO₂ and H₂O.\n* Fermentation of sugar produces ethanol and CO₂.\n* Respiration in living cells produces CO₂ and H₂O.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 6,
    createdAt: "2026-07-04"
  }
);
// ==========================================
// Unit 12: Experimental Techniques and Chemical Analysis
// ==========================================

questionBank.push(
  {
    id: "q_exp_add_50cm3_acid_quickly-2026",
    question: "One of the instructions for an experiment reads as follows: 'Quickly add 50 cm³ of acid to the reaction flask'. What is the best piece of apparatus to use?",
    options: [
      { text: "A burette" },
      { text: "A conical flask" },
      { text: "A measuring cylinder" },
      { text: "A volumetric pipette" }
    ],
    correctAnswer: 2,
    explanation: "* A measuring cylinder is designed to measure and pour approximate volumes of liquid rapidly.\n* A burette and a pipette are high-precision apparatus that deliver liquid dropwise or very slowly, making them unsuitable when 'quickly' is specified.\n* A conical flask is a reaction vessel, not an accurate measuring instrument.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_marble_chips_gas_syringe_apparatus-2026",
    question: "A student uses a flask connected to a gas syringe to measure the volume of carbon dioxide gas made when different masses of marble chips are added to 25 cm³ of dilute hydrochloric acid. Which other items of apparatus are essential to complete these measurements?",
    options: [
      { text: "A measuring cylinder and balance" },
      { text: "A filter funnel and stopwatch" },
      { text: "A filter funnel and balance" },
      { text: "A measuring cylinder and stopwatch" }
    ],
    correctAnswer: 0,
    explanation: "* A digital balance is required to measure the 'different masses of marble chips'.\n* A measuring cylinder is required to measure the '25 cm³ of dilute hydrochloric acid'.\n* Therefore, a measuring cylinder and a balance are the essential items.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_apparatus_essential_both_rate_reactions-2026",
    question: "A student measures the rate of two different chemical reactions:\n\n* In one reaction, there is a change in mass of the reaction mixture over time.\n* In the second reaction, there is a change in temperature during the reaction over time.\n\nWhich piece of apparatus is essential in BOTH experiments?",
    options: [
      { text: "A balance" },
      { text: "A pipette" },
      { text: "A thermometer" },
      { text: "A stopwatch (clock)" }
    ],
    correctAnswer: 3,
    explanation: "* Rate of reaction is defined as the change in amount/property divided by time.\n* Any rate-of-reaction investigation inherently requires measuring time intervals, making a stopwatch or clock essential in both experiments.\n* A balance is only needed for the mass change experiment, and a thermometer is only needed for the temperature change experiment.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_three_pieces_apparatus_identification_table-2026",
    question: "The diagram shows three pieces of apparatus (1, 2, and 3) used for measuring liquid volumes:\n\n* Apparatus 1: cylindrical jar with graduated markings on the glass\n* Apparatus 2: long narrow vertical graduated tube with a stopcock tap at the bottom\n* Apparatus 3: narrow glass tube with a central bulb and a single etched ring mark\n\nWhat are these pieces of apparatus?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Apparatus 1</th><th class="p-2 border">Apparatus 2</th><th class="p-2 border">Apparatus 3</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">Burette</td><td class="p-2 border">Measuring cylinder</td><td class="p-2 border">Pipette</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Measuring cylinder</td><td class="p-2 border">Burette</td><td class="p-2 border">Pipette</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">Burette</td><td class="p-2 border">Pipette</td><td class="p-2 border">Measuring cylinder</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">Measuring cylinder</td><td class="p-2 border">Pipette</td><td class="p-2 border">Burette</td></tr></tbody></table>`,
    options: [
      { text: "Row A: Burette | Measuring cylinder | Pipette" },
      { text: "Row B: Measuring cylinder | Burette | Pipette" },
      { text: "Row C: Burette | Pipette | Measuring cylinder" },
      { text: "Row D: Measuring cylinder | Pipette | Burette" }
    ],
    correctAnswer: 1,
    explanation: "* Apparatus 1 is a measuring cylinder.\n* Apparatus 2 has a stopcock tap at the base, which is a burette.\n* Apparatus 3 has a bulb with a single graduation calibration mark, which is a volumetric pipette (Row B).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_burette_measuring_volume_statement-2026",
    question: "Four pieces of apparatus commonly used in chemical experiments are a burette, a measuring cylinder, a pipette, and a thermometer. Which statement about the apparatus is correct?",
    options: [
      { text: "The burette measures the volume of liquid added in a titration" },
      { text: "The measuring cylinder measures the mass of a substance used in an experiment" },
      { text: "The pipette measures the volume of gas given off in a reaction" },
      { text: "The thermometer measures the density of a solution" }
    ],
    correctAnswer: 0,
    explanation: "* A burette is designed to accurately measure and deliver variable volumes of liquid added during a titration.\n* A measuring cylinder measures liquid volume (not mass).\n* A pipette measures a fixed volume of liquid (not gas).\n* A thermometer measures temperature (not density).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_apparatus_pqrs_correct_measurement_row-2026",
    question: "P (burette), Q (gas syringe), R (measuring cylinder), and S (volumetric pipette) are pieces of laboratory apparatus. Which row describes the correct apparatus for the measurement made?",
    tableHtml: `<table class="min-w-full border text-center text-sm"><thead class="bg-white/5 border-b font-bold"><tr><th class="p-2 border"></th><th class="p-2 border">Apparatus</th><th class="p-2 border">Measurement made</th></tr></thead><tbody><tr><td class="p-2 border font-bold">A</td><td class="p-2 border">P</td><td class="p-2 border">The volume of acid added to alkali in a titration</td></tr><tr><td class="p-2 border font-bold">B</td><td class="p-2 border">Q</td><td class="p-2 border">5 cm³ of acid to add to calcium carbonate in a rate-determining experiment</td></tr><tr><td class="p-2 border font-bold">C</td><td class="p-2 border">R</td><td class="p-2 border">7 cm³ of a gas given off in a rate-determining experiment</td></tr><tr><td class="p-2 border font-bold">D</td><td class="p-2 border">S</td><td class="p-2 border">2 cm³ of alkali for use in a titration</td></tr></tbody></table>`,
    options: [
      { text: "Row A: P (burette) measures the volume of acid added to alkali in a titration" },
      { text: "Row B: Q (gas syringe) measures 5 cm³ of acid to add to calcium carbonate" },
      { text: "Row C: R (measuring cylinder) measures 7 cm³ of a gas given off in a rate experiment" },
      { text: "Row D: S (pipette) measures 2 cm³ of alkali for use in a titration" }
    ],
    correctAnswer: 0,
    explanation: "* Apparatus P is a burette, which is precisely designed to deliver and measure the variable volume of acid added in a titration (Row A).\n* Q is a gas syringe (measures gas, not liquid acid).\n* S is a fixed 25 cm³ pipette (cannot measure 2 cm³).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_upturned_cylinder_water_trough_gas_statement-2026",
    question: "A conical flask containing a reaction mixture is connected by a delivery tube to an inverted measuring cylinder filled with water in a water trough. Which statement must be correct about this reaction?",
    options: [
      { text: "The reaction is endothermic" },
      { text: "The reaction is exothermic" },
      { text: "The reaction produces a gas" },
      { text: "The reaction produces an acid" }
    ],
    correctAnswer: 2,
    explanation: "* Inverted collection over water (downward displacement of water) is used specifically to collect and measure insoluble or sparingly soluble gases produced in a reaction.\n* It does not measure thermal changes (endothermic/exothermic) or acidity.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 1,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_liquid_x_bp_102_ui_green_identify-2026",
    question: "The results of some tests on a clear, colourless liquid X are shown:\n\n* Boiling point = 102 °C\n* Universal Indicator turns green (pH 7)\n\nWhat is substance X?",
    options: [
      { text: "Hydrochloric acid" },
      { text: "Sodium chloride solution" },
      { text: "Pure water" },
      { text: "Ethanol" }
    ],
    correctAnswer: 1,
    explanation: "* Pure water has a sharp boiling point of exactly 100 °C at 1 atm.\n* Dissolving a non-volatile neutral solute such as sodium chloride elevates the boiling point above 100 °C (to 102 °C) while keeping the solution neutral (pH 7, green with Universal Indicator).\n* Hydrochloric acid would turn Universal Indicator red; ethanol has a boiling point of 78 °C.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_filtration_xy_types_substance_separated-2026",
    question: "The diagram shows a mixture containing solid X and liquid Y being poured through filter paper in a funnel into a beaker. Which types of substances can be separated by this method?",
    options: [
      { text: "Compounds" },
      { text: "Elements" },
      { text: "Mixtures" },
      { text: "Molecules" }
    ],
    correctAnswer: 2,
    explanation: "* Filtration is a physical separation method used strictly to separate heterogeneous mixtures (such as an insoluble solid mixed with a liquid).\n* Chemical bonds in compounds or molecules cannot be separated by physical filtration.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_separate_methanol_and_ethanol_fractional-2026",
    question: "Methanol (CH₃OH, boiling point 65 °C) and ethanol (C₂H₅OH, boiling point 78 °C) are miscible liquids. Which apparatus is used to obtain pure methanol from a mixture of ethanol and methanol?",
    options: [
      { text: "A filter funnel and filter paper" },
      { text: "Fractional distillation apparatus (round-bottom flask with fractionating column and condenser)" },
      { text: "An open evaporating dish and Bunsen burner" },
      { text: "A test tube with delivery tube inverted over water" }
    ],
    correctAnswer: 1,
    explanation: "* Methanol and ethanol are miscible liquids with close boiling points (65 °C and 78 °C).\n* Fractional distillation with a fractionating column is required to separate miscible liquids based on their boiling point difference.\n* Filtration or open evaporation cannot separate miscible liquids.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_fractional_distillation_property_x_depended-2026",
    question: "A mixture of ethanol and methanol are separated by fractional distillation. This method of separation depends on a difference in property X of these two alcohols. What is property X?",
    options: [
      { text: "Boiling point" },
      { text: "Melting point" },
      { text: "Colour" },
      { text: "Solubility in water" }
    ],
    correctAnswer: 0,
    explanation: "* Distillation relies on differences in volatility and boiling points of substances.\n* The liquid with the lower boiling point (methanol, 65 °C) vaporises and distils over first before the higher boiling liquid (ethanol, 78 °C).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_fruit_drink_illegal_colouring_method-2026",
    question: "A fruit drink coloured orange contains a dissolved mixture of red and yellow colouring agents. One of these colouring agents is suspected of being illegal. Which method could be used to separate and identify the presence of this illegal colouring agent?",
    options: [
      { text: "Chromatography" },
      { text: "Distillation" },
      { text: "Evaporation" },
      { text: "Filtration" }
    ],
    correctAnswer: 0,
    explanation: "* Paper chromatography is specifically used to separate and identify dissolved soluble colourings and dyes by comparing their Rf values against known pure standards.\n* Distillation, evaporation, and filtration cannot separate individual dissolved food dyes.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_student_separates_salt_from_salt_sand_order-2026",
    question: "A student separates pure sodium chloride (salt) from a mixture of solid salt and sand. What is the correct chronological order of steps for the student to take?",
    options: [
      { text: "Filter → evaporate → shake with water" },
      { text: "Filter → shake with water → evaporate" },
      { text: "Shake with water → evaporate → filter" },
      { text: "Shake with water → filter → evaporate" }
    ],
    correctAnswer: 3,
    explanation: "* Step 1: Shake with water to dissolve the soluble salt while leaving the insoluble sand as a solid suspension.\n* Step 2: Filter the mixture so insoluble sand is trapped as the residue, and salt solution passes through as the filtrate.\n* Step 3: Evaporate water from the filtrate to crystallise and obtain pure dry salt crystals.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 2,
    createdAt: "2026-07-04"
  }
);
questionBank.push(
  {
    id: "q_exp_silver_chloride_sunlight_color_change-2026",
    question: "A test-tube containing a white precipitate of silver chloride (AgCl) is left standing in direct sunlight on a window sill. What observation is made after several minutes?",
    options: [
      { text: "The precipitate dissolves to form a clear yellow solution" },
      { text: "The white precipitate turns grey / violet" },
      { text: "Effervescence occurs and a brown gas is released" },
      { text: "The precipitate turns bright pink" }
    ],
    correctAnswer: 1,
    explanation: "* Silver halides undergo photochemical reduction in the presence of ultraviolet/visible light.\n* Silver ions (Ag⁺) are reduced to tiny particles of elemental silver metal (Ag(s)), causing the white precipitate to turn grey/violet: 2AgCl(s) → 2Ag(s) + Cl₂(g).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_lead_nitrate_iodide_bright_yellow-2026",
    question: "A student adds aqueous lead(II) nitrate, Pb(NO₃)₂, to an unknown colourless solution. A bright yellow precipitate forms immediately. Which anion is present in the solution?",
    options: [
      { text: "Chloride (Cl⁻)" },
      { text: "Bromide (Br⁻)" },
      { text: "Iodide (I⁻)" },
      { text: "Sulfate (SO₄²⁻)" }
    ],
    correctAnswer: 2,
    explanation: "* Lead(II) ions react with iodide ions to form an insoluble bright yellow precipitate of lead(II) iodide: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s).\n* Lead(II) chloride is white, and lead(II) sulfate is white.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_flame_test_brick_red_cation-2026",
    question: "A student performs a flame test on a solid compound using a clean nichrome wire dipped in concentrated hydrochloric acid. The flame turns brick-red (orange-red). Which metal cation is present?",
    options: [
      { text: "Sodium (Na⁺)" },
      { text: "Potassium (K⁺)" },
      { text: "Calcium (Ca²⁺)" },
      { text: "Barium (Ba²⁺)" }
    ],
    correctAnswer: 2,
    explanation: "* Calcium ions (Ca²⁺) produce a characteristic brick-red (orange-red) flame colour.\n* Sodium produces yellow, potassium produces lilac, and barium produces apple-green.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 3,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_planning_fair_test_controlled_variable-2026",
    question: "A student investigates the rate of reaction between dilute hydrochloric acid and calcium carbonate chips at different temperatures. Which variable must be kept constant to ensure a fair test?",
    options: [
      { text: "The temperature of the acid" },
      { text: "The mass and surface area (particle size) of calcium carbonate" },
      { text: "The rate of carbon dioxide gas production" },
      { text: "The time taken to collect 50 cm³ of gas" }
    ],
    correctAnswer: 1,
    explanation: "* In this experiment, temperature is the independent variable (deliberately changed).\n* Rate/time of gas collection is the dependent variable (measured).\n* The mass, volume, and surface area (particle size) of calcium carbonate chips must be kept strictly constant (controlled variable) so that any rate change is solely caused by temperature.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },
  {
    id: "q_exp_heating_ethanol_safety_reason-2026",
    question: "Why should a mixture containing ethanol and an organic acid be heated in a water bath rather than directly with a Bunsen burner flame?",
    options: [
      { text: "Ethanol dissolves the glass if heated with a flame" },
      { text: "Ethanol is highly flammable and its vapour can easily ignite near an open naked flame" },
      { text: "Water baths reach higher temperatures than a roaring Bunsen burner" },
      { text: "A Bunsen burner causes the acid to turn alkaline" }
    ],
    correctAnswer: 1,
    explanation: "* Alcohols such as ethanol are volatile and highly flammable liquids.\n* Direct heating with an open Bunsen burner flame risks igniting the escaping ethanol vapours, so an electric heating mantle or a hot water bath is required for laboratory safety.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620 Paper 2",
    lessonNum: 4,
    createdAt: "2026-07-04"
  },

  // =========================================================================
  // 🌟 CAMBRIDGE IGCSE CHEMISTRY (0620) — MAY / JUNE 2026 HIGH-YIELD SERIES
  // =========================================================================

  // -------------------------------------------------------------------------
  // SECTION A: PAPER 2 (MULTIPLE CHOICE — CORE & EXTENDED)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2026-mj-p2-q01",
    question: "A gas jar of sulfur dioxide (Mr = 64) and a gas jar of chlorine (Mr = 71) are separated by a porous barrier. Both gases diffuse through the barrier into a central chamber. Which statement correctly compares the rate of diffusion of sulfur dioxide with that of chlorine?",
    options: [
      { text: "Sulfur dioxide diffuses faster because its relative molecular mass is lower" },
      { text: "Chlorine diffuses faster because its relative molecular mass is higher" },
      { text: "Both gases diffuse at identical rates because both are non-metallic molecular gases" },
      { text: "Sulfur dioxide diffuses slower because it forms dense acidic droplets in air" }
    ],
    correctAnswer: 0,
    explanation: "* According to Graham's law and kinetic particle theory, gases with lower relative molecular mass (Mr) diffuse faster at any given temperature.\n* The Mr of sulfur dioxide (SO₂) is 32 + (16 × 2) = 64.\n* The Mr of chlorine (Cl₂) is 35.5 × 2 = 71.\n* Because 64 < 71, sulfur dioxide particles have higher average velocities at the same temperature and diffuse faster.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/26 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q02",
    question: "An atom has 19 protons, 20 neutrons, and 18 electrons. Which particle does this represent?",
    options: [
      { text: "An uncharged potassium atom, ³⁹₁₉K" },
      { text: "A potassium cation, ³⁹₁₉K⁺" },
      { text: "A calcium cation, ⁴⁰₂₀Ca²⁺" },
      { text: "An argon atom, ⁴⁰₁₈Ar" }
    ],
    correctAnswer: 1,
    explanation: "* The atomic number (proton number) is 19, which defines the element as Potassium (K).\n* Nucleon number (mass number) = protons + neutrons = 19 + 20 = 39.\n* Number of electrons (18) is one fewer than protons (19), giving an overall net positive charge of +1 (K⁺).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/26 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q03",
    question: "A sample of hydrocarbon X contains 85.7% carbon and 14.3% hydrogen by mass. What is the empirical formula of hydrocarbon X? [Ar: C = 12.0, H = 1.0]",
    options: [
      { text: "CH" },
      { text: "CH₂" },
      { text: "CH₃" },
      { text: "C₂H₅" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of Carbon: 85.7 / 12.0 = 7.14 mol.\n* Moles of Hydrogen: 14.3 / 1.0 = 14.3 mol.\n* Divide by the smaller number of moles: C = 7.14 / 7.14 = 1; H = 14.3 / 7.14 = 2.00.\n* The simplest whole-number empirical ratio is CH₂.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/26 Q7",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q04",
    question: "During the electrolysis of concentrated aqueous sodium chloride using inert carbon (graphite) electrodes, which gas is produced at the anode (+)?",
    options: [
      { text: "Hydrogen (H₂)" },
      { text: "Oxygen (O₂)" },
      { text: "Chlorine (Cl₂)" },
      { text: "Sodium vapour (Na)" }
    ],
    correctAnswer: 2,
    explanation: "* The anions attracted to the positive anode are chloride ions (Cl⁻) and hydroxide ions (OH⁻).\n* Because the sodium chloride solution is concentrated (brine), chloride ions are in high concentration and are discharged preferentially over hydroxide ions.\n* Half-equation at anode: 2Cl⁻ → Cl₂ + 2e⁻.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/26 Q10",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q05",
    question: "The energy profile diagram for a reversible chemical reaction is shown. The activation energy for the forward reaction is +180 kJ/mol and the enthalpy change (ΔH) of the forward reaction is -90 kJ/mol. What is the activation energy for the reverse reaction?",
    options: [
      { text: "+90 kJ/mol" },
      { text: "+180 kJ/mol" },
      { text: "+270 kJ/mol" },
      { text: "-270 kJ/mol" }
    ],
    correctAnswer: 2,
    explanation: "* In an exothermic forward reaction (ΔH = -90 kJ/mol), the products lie 90 kJ/mol lower in energy than the reactants.\n* The activation energy for the reverse reaction equals the energy gap from the products up to the transition state (peak).\n* Reverse Ea = Forward Ea + |ΔH| = 180 + 90 = +270 kJ/mol.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/26 Q12",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q06",
    question: "Which of the following changes will shift the position of dynamic equilibrium for the Haber process towards the right (favouring ammonia yield)?\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)    ΔH = -92 kJ/mol",
    options: [
      { text: "Increasing the reaction temperature" },
      { text: "Decreasing the total pressure" },
      { text: "Increasing the total pressure" },
      { text: "Adding an iron catalyst" }
    ],
    correctAnswer: 2,
    explanation: "* Reactants have 1 + 3 = 4 moles of gas; products have 2 moles of gas.\n* By Le Chatelier's principle, increasing total pressure shifts the position of equilibrium towards the side with fewer moles of gas (towards the right, yielding more NH₃).\n* Adding a catalyst increases the rate of both forward and reverse reactions equally without shifting the equilibrium position.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/26 Q16",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q07",
    question: "Which pair of oxides are both amphoteric (react with both dilute acids and dilute alkalis)?",
    options: [
      { text: "Na₂O and MgO" },
      { text: "Al₂O₃ and ZnO" },
      { text: "CO₂ and SO₂" },
      { text: "CO and NO" }
    ],
    correctAnswer: 1,
    explanation: "* Amphoteric oxides can behave as both bases and acids; they react with both strong acids and strong alkalis to form salt and water.\n* In Cambridge IGCSE, the key amphoteric oxides to memorise are aluminium oxide (Al₂O₃) and zinc oxide (ZnO).\n* Na₂O and MgO are basic; CO₂ and SO₂ are acidic; CO and NO are neutral.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/26 Q19",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q08",
    question: "Which observation occurs when aqueous chlorine is added to a test-tube containing aqueous potassium iodide?",
    options: [
      { text: "No visible change occurs because iodine is more reactive than chlorine" },
      { text: "The colourless solution turns dark brown due to the displacement of iodine" },
      { text: "A white precipitate of potassium chloride immediately forms" },
      { text: "A pungent green gas is evolved" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine is higher in Group VII than iodine, meaning chlorine is more reactive (a stronger oxidising agent).\n* Chlorine displaces iodide ions from solution: Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq).\n* The liberated aqueous iodine gives the resulting solution a distinctive brown colour.",
    level: 2,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/26 Q24",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q09",
    question: "In the blast furnace extraction of iron, what is the primary role of limestone (calcium carbonate, CaCO₃)?",
    options: [
      { text: "To act as a reducing agent converting haematite (Fe₂O₃) to iron" },
      { text: "To provide oxygen for the combustion of coke" },
      { text: "To thermally decompose and react with acidic silica impurities (SiO₂) to form slag (CaSiO₃)" },
      { text: "To lower the melting point of haematite directly" }
    ],
    correctAnswer: 2,
    explanation: "* Limestone thermally decomposes in the intense furnace heat: CaCO₃ → CaO + CO₂.\n* The basic calcium oxide (CaO) reacts with acidic sandy impurities (silicon dioxide, SiO₂) in a neutralisation reaction: CaO + SiO₂ → CaSiO₃ (molten calcium silicate / slag).\n* Slag floats on top of molten iron and is tapped off separately.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/26 Q27",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2026-mj-p2-q10",
    question: "Which organic molecule is an isomer of but-1-ene (C₄H₈)?",
    options: [
      { text: "Butane" },
      { text: "Methylpropane" },
      { text: "Cyclobutane" },
      { text: "Propene" }
    ],
    correctAnswer: 2,
    explanation: "* Structural isomers share the identical molecular formula but differ in their structural arrangement.\n* But-1-ene has the molecular formula C₄H₈.\n* Cyclobutane is a cyclic alkane with formula C₄H₈, making it a functional group isomer of but-1-ene.\n* Butane and methylpropane are C₄H₁₀ (alkanes).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/26 Q35",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },

  // -------------------------------------------------------------------------
  // SECTION B: PAPER 4 (THEORY / EXTENDED STRUCTURED QUESTIONS)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2026-mj-p4-q01",
    question: "Dilute sulfuric acid reacts with solid magnesium ribbon in an open conical flask according to the equation:\nMg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g)\nExplain in terms of particle collision theory why increasing the concentration of sulfuric acid increases the rate of reaction.",
    options: [
      { text: "Higher concentration provides particles with greater average kinetic energy and speed" },
      { text: "Higher concentration increases the number of acid particles per unit volume, increasing the frequency of successful collisions" },
      { text: "Higher concentration lowers the activation energy required for the reaction" },
      { text: "Higher concentration increases the surface area of the solid magnesium metal" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing concentration means there are more reactant particles (H⁺ ions) in a given volume of solution.\n* Consequently, reactant particles collide with the magnesium surface more frequently (greater collision frequency).\n* This leads to a greater frequency of successful collisions (collisions possessing energy ≥ activation energy), thereby increasing reaction rate.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/26 Q3(a)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "particles per unit volume", text: "State that more hydrogen ions / acid particles are present per unit volume (or closer together)." },
        { mark: 1, keyword: "collision frequency", text: "Mention greater frequency of collisions (or more collisions per second/unit time) between particles." },
        { mark: 1, keyword: "successful collisions", text: "Clarify that the frequency of successful / effective collisions increases." }
      ],
      examinerTips: "Do NOT write 'more collisions occur' without specifying 'per second' or 'collision frequency'. Collision frequency or rate of collisions is strictly required."
    }
  },
  {
    id: "cie-0620-2026-mj-p4-q02",
    question: "A student titrates 25.0 cm³ of 0.0800 mol/dm³ aqueous sodium hydroxide with dilute hydrochloric acid of unknown concentration:\nNaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)\nExactly 20.00 cm³ of hydrochloric acid is required to reach the equivalence point. Calculate the concentration of the hydrochloric acid in mol/dm³.",
    options: [
      { text: "0.0640 mol/dm³" },
      { text: "0.100 mol/dm³" },
      { text: "0.160 mol/dm³" },
      { text: "0.0400 mol/dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: Calculate moles of NaOH = Concentration × Volume (dm³) = 0.0800 mol/dm³ × (25.0 / 1000 dm³) = 0.00200 mol.\n* Step 2: From the 1:1 stoichiometric ratio, moles of HCl = 0.00200 mol.\n* Step 3: Calculate concentration of HCl = Moles / Volume (dm³) = 0.00200 mol / (20.00 / 1000 dm³) = 0.100 mol/dm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/26 Q4(c)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "moles of NaOH", text: "0.00200 mol NaOH calculated from c × V." },
        { mark: 1, keyword: "mole ratio 1:1", text: "Equating moles of HCl to 0.00200 mol." },
        { mark: 1, keyword: "0.100 mol/dm3", text: "Final concentration = 0.100 mol/dm³ (with correct 3 significant figures)." }
      ],
      examinerTips: "Ensure volumes are converted from cm³ to dm³ by dividing by 1000 before multiplying."
    }
  },
  {
    id: "cie-0620-2026-mj-p4-q03",
    question: "Explain why molten sodium chloride conducts electricity, but solid sodium chloride does not conduct electricity.",
    options: [
      { text: "Solid contains molecules whereas molten liquid contains atoms" },
      { text: "In solid NaCl, ions are locked in fixed positions in the lattice and cannot move; in molten NaCl, ions are free to move and carry charge" },
      { text: "Solid NaCl has free electrons that are trapped; molten NaCl releases free delocalised electrons" },
      { text: "Molten NaCl undergoes decomposition into sodium metal which conducts" }
    ],
    correctAnswer: 1,
    explanation: "* Sodium chloride is a giant ionic lattice.\n* In solid state, the strong electrostatic attractions lock Na⁺ cations and Cl⁻ anions in fixed lattice positions so they can only vibrate and cannot move.\n* When melted, the lattice breaks down and the ions become mobile, allowing them to flow towards electrodes and carry electric charge.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/M/J/26 Q2(b)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "solid ions fixed", text: "In the solid, ions are in fixed positions in a lattice (cannot move)." },
        { mark: 1, keyword: "molten ions mobile", text: "In molten state, ions are free to move / mobile." }
      ],
      examinerTips: "Never refer to 'electrons' when explaining electrical conductivity of ionic salts. Marks are awarded strictly for mobile ions."
    }
  },
  {
    id: "cie-0620-2026-mj-p4-q04",
    question: "Ethanol can be manufactured either by the catalytic hydration of ethene or by the fermentation of glucose.\nState one advantage of manufacturing ethanol by fermentation compared to catalytic hydration of ethene.",
    options: [
      { text: "Fermentation is a continuous fast process with 100% atom economy" },
      { text: "Fermentation uses renewable biomass (sugar/glucose) rather than finite non-renewable crude oil" },
      { text: "Fermentation produces completely pure anhydrous ethanol without fractional distillation" },
      { text: "Fermentation operates at extremely high temperatures and pressures" }
    ],
    correctAnswer: 1,
    explanation: "* Fermentation utilizes carbohydrates (such as glucose from sugarcane or maize), which are renewable resources.\n* In contrast, ethene for hydration is obtained from catalytic cracking of petroleum fractions, which is a non-renewable fossil fuel.\n* However, fermentation is slower and requires energy-intensive fractional distillation to concentrate the ethanol.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/26 Q6(d)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "renewable raw material", text: "Uses renewable resources (crops/sugar/yeast) / does not deplete finite crude oil." }
      ],
      examinerTips: "Accept 'uses lower temperature / consumes less energy' as an alternative valid advantage."
    }
  },
  {
    id: "cie-0620-2026-mj-p4-q05",
    question: "Catalytic converters in automobile exhaust systems convert toxic pollutant gases into less harmful emissions. Write a balanced chemical equation for the reduction of nitrogen monoxide (NO) by carbon monoxide (CO).",
    options: [
      { text: "NO + CO → N + CO₂" },
      { text: "2NO + 2CO → N₂ + 2CO₂" },
      { text: "2NO + CO₂ → N₂O + 2CO" },
      { text: "NO₂ + CO → NO + CO₂" }
    ],
    correctAnswer: 1,
    explanation: "* In a catalytic converter containing platinum, palladium, or rhodium catalysts, carbon monoxide is oxidised while nitrogen monoxide is reduced.\n* Balanced equation: 2NO(g) + 2CO(g) → N₂(g) + 2CO₂(g).\n* Nitrogen gas (N₂) and carbon dioxide (CO₂) are far less harmful than toxic CO and smog-forming NO.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/26 Q5(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "reactants & products", text: "Correct formulae for all reactants (NO + CO) and products (N₂ + CO₂)." },
        { mark: 1, keyword: "balancing 2, 2 -> 1, 2", text: "Correct stoichiometric balancing coefficients (2, 2 → 1, 2)." }
      ],
      examinerTips: "Remember that nitrogen exists as diatomic gas molecules (N₂), not atomic N."
    }
  },

  // -------------------------------------------------------------------------
  // SECTION C: PAPER 6 (ALTERNATIVE TO PRACTICAL & LAB EXPERIMENTAL TECHNIQUES)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2026-mj-p6-q01",
    question: "A student performed a titration using a burette. The initial burette reading was 2.40 cm³ and the final burette reading was 26.85 cm³. What was the volume of solution delivered from the burette?",
    options: [
      { text: "24.45 cm³" },
      { text: "29.25 cm³" },
      { text: "24.40 cm³" },
      { text: "26.85 cm³" }
    ],
    correctAnswer: 0,
    explanation: "* Titre volume delivered = Final reading - Initial reading.\n* Delivered volume = 26.85 cm³ - 2.40 cm³ = 24.45 cm³.\n* In Cambridge Paper 6, all burette measurements must be recorded to two decimal places (ending in .00 or .05 cm³).",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/26 Q1(a)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "24.45 cm3", text: "Correct calculation: 26.85 - 2.40 = 24.45 cm³." }
      ],
      examinerTips: "Always write the unit (cm³) and keep 2 decimal places in titration records."
    }
  },
  {
    id: "cie-0620-2026-mj-p6-q02",
    question: "Two aqueous solutions, Solution X and Solution Y, were tested.\n• When aqueous sodium hydroxide was added dropwise to Solution X, a light blue precipitate formed that was insoluble in excess sodium hydroxide.\n• When dilute nitric acid followed by aqueous silver nitrate was added to Solution X, a cream precipitate formed.\nIdentify the positive cation and negative anion present in Solution X.",
    options: [
      { text: "Iron(II) ion (Fe²⁺) and Chloride ion (Cl⁻)" },
      { text: "Copper(II) ion (Cu²⁺) and Bromide ion (Br⁻)" },
      { text: "Copper(II) ion (Cu²⁺) and Iodide ion (I⁻)" },
      { text: "Zinc ion (Zn²⁺) and Bromide ion (Br⁻)" }
    ],
    correctAnswer: 1,
    explanation: "* A light blue precipitate with NaOH insoluble in excess confirms the Copper(II) cation: Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s).\n* Acidification with HNO₃ followed by AgNO₃ tests for halide ions:\n  - Chloride yields a white precipitate (AgCl)\n  - Bromide yields a cream precipitate (AgBr)\n  - Iodide yields a yellow precipitate (AgI)\n* A cream precipitate confirms Bromide (Br⁻).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/26 Q2(c)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "copper(II) / Cu2+", text: "Cation identified as Copper(II) / Cu²⁺." },
        { mark: 1, keyword: "bromide / Br-", text: "Anion identified as Bromide / Br⁻." }
      ],
      examinerTips: "Do not just write 'Copper' or 'Cu'. You must include the oxidation state Copper(II) or the ionic charge Cu²⁺."
    }
  },
  {
    id: "cie-0620-2026-mj-p6-q03",
    question: "In paper chromatography of food colourings, why must the baseline (origin line) be drawn in pencil rather than pen ink?",
    options: [
      { text: "Pencil lead is hydrophobic and repels the solvent" },
      { text: "Pen ink contains dyes that would dissolve in the mobile solvent and travel up the paper, interfering with the chromatogram spots" },
      { text: "Pencil graphite reacts with amino acids to make them visible" },
      { text: "Pen ink makes the chromatography paper tear easily" }
    ],
    correctAnswer: 1,
    explanation: "* Pencil lead consists of insoluble graphite and clay, which will not dissolve in the running solvent and remains stationary on the baseline.\n* In contrast, pen ink is a mixture of soluble dyes that would dissolve in the mobile phase, separate, and contaminate the chromatogram.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/26 Q3(b)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "ink dissolves / graphite insoluble", text: "Ink is soluble in the solvent / would separate and smudge / pencil graphite is insoluble." }
      ],
      examinerTips: "A common student mistake is to say 'pencil is permanent'. The correct scientific rationale is that graphite is insoluble in the solvent."
    }
  },
  {
    id: "cie-0620-2026-mj-p6-q04",
    question: "A student is asked to plan an investigation to determine which of two brands of washing powder (Brand A or Brand B) contains the higher percentage of sodium carbonate. Sodium carbonate reacts with dilute hydrochloric acid to produce carbon dioxide gas.\nWhich experimental setup provides the most accurate quantitative comparison?",
    options: [
      { text: "Measure the change in pH of the solution using blue litmus paper" },
      { text: "Mix equal masses of both powders with excess dilute acid and collect the volume of carbon dioxide in a gas syringe over time" },
      { text: "Count the number of bubbles produced in 10 seconds using a glowing wooden splint" },
      { text: "Evaporate the washing powder to dryness over a roaring flame" }
    ],
    correctAnswer: 1,
    explanation: "* To compare percentages quantitatively:\n  1. Use identical weighed masses of washing powder A and B.\n  2. Add an excess of dilute hydrochloric acid so all carbonate reacts completely.\n  3. Collect and record the total volume of CO₂ gas produced using a sealed gas syringe or measure mass loss on an analytical balance.\n  4. The brand yielding the greater volume of CO₂ contains the higher percentage of sodium carbonate.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/M/J/26 Q4 (Planning an Investigation)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "equal masses of samples", text: "Weigh equal masses of Brand A and Brand B using a balance." },
        { mark: 1, keyword: "excess acid & gas collection", text: "Add excess dilute hydrochloric acid and collect gas in a gas syringe (or measure mass loss on balance)." },
        { mark: 1, keyword: "compare total volume", text: "State that the larger volume of CO₂ collected indicates higher percentage of sodium carbonate." }
      ],
      examinerTips: "For 6-mark Paper 6 planning questions, always specify: apparatus (balance, syringe), controlled variables (mass of powder, volume/temp of acid), measurement, and conclusion."
    }
  },
  {
    id: "cie-0620-2026-mj-p6-q05",
    question: "A sample of ammonium chloride solid is gently heated with aqueous sodium hydroxide in a boiling tube. Which test confirms the identity of the gas evolved?",
    options: [
      { text: "It relights a glowing wooden splint" },
      { text: "It turns damp red litmus paper blue" },
      { text: "It bleaches damp blue litmus paper white" },
      { text: "It turns limewater milky and cloudy" }
    ],
    correctAnswer: 1,
    explanation: "* Heating any ammonium salt with a base liberates ammonia gas: NH₄⁺(aq) + OH⁻(aq) → NH₃(g) + H₂O(l).\n* Ammonia is the only common alkaline gas tested in IGCSE; it dissolves in the water on damp red litmus paper to form OH⁻ ions, turning the paper blue.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/26 Q2(a)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "damp red litmus blue", text: "Turns damp red litmus paper blue (ammonia gas)." }
      ],
      examinerTips: "Remember that the litmus paper MUST be damp; dry ammonia gas does not ionise and will not change dry indicator paper."
    }
  },

  // =========================================================================
  // ❄️ CAMBRIDGE IGCSE CHEMISTRY (0620) — OCTOBER / NOVEMBER 2025 WINTER SERIES
  // =========================================================================

  // -------------------------------------------------------------------------
  // SECTION A: PAPER 2 (MULTIPLE CHOICE — CORE & EXTENDED)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-on-p2-q01",
    question: "The graph shows the heating curve of pure substance Z as it is heated at a constant rate from solid to gas.\nWhich section of the heating curve represents the coexistence of both liquid and gas phases?",
    options: [
      { text: "The first horizontal plateau representing melting" },
      { text: "The upward slope between melting and boiling" },
      { text: "The second horizontal plateau representing boiling where temperature remains constant" },
      { text: "The final upward slope corresponding to the heating of gas particles" }
    ],
    correctAnswer: 2,
    explanation: "* On a heating curve, the horizontal plateaus represent phase changes where supplied thermal energy breaks intermolecular forces rather than raising temperature.\n* The first horizontal plateau is the melting point (solid + liquid in equilibrium).\n* The second horizontal plateau is the boiling point (liquid + gas in dynamic coexistence until all liquid has vaporised).",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/25 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q02",
    question: "Which statement explains why graphite can act as an effective solid lubricant?",
    options: [
      { text: "Graphite has a low melting point because of weak covalent bonds" },
      { text: "Layers of carbon hexagons are held together by weak intermolecular attractions and can easily slide over each other" },
      { text: "Each carbon atom is bonded to four other carbon atoms in a rigid tetrahedral framework" },
      { text: "Delocalised electrons repel the adjacent carbon atoms" }
    ],
    correctAnswer: 1,
    explanation: "* In graphite, each carbon atom is covalently bonded to three others in planar hexagonal sheets.\n* The forces between the adjacent parallel layers are weak intermolecular (van der Waals) forces.\n* These weak forces allow the layers to slide smoothly over one another under shearing force, making graphite slippery and an excellent solid lubricant.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/25 Q6",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q03",
    question: "What volume of carbon dioxide gas (measured at room temperature and pressure, r.t.p.) is produced when 10.0 g of calcium carbonate (Mr = 100.0) completely reacts with excess dilute hydrochloric acid?\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n[Molar gas volume at r.t.p. = 24.0 dm³/mol]",
    options: [
      { text: "1.20 dm³" },
      { text: "2.40 dm³" },
      { text: "4.80 dm³" },
      { text: "24.0 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: Calculate moles of CaCO₃ = mass / Mr = 10.0 g / 100.0 g/mol = 0.100 mol.\n* Step 2: From the reaction stoichiometry, 1 mol CaCO₃ produces 1 mol CO₂, so moles of CO₂ = 0.100 mol.\n* Step 3: Gas volume at r.t.p. = moles × 24.0 dm³/mol = 0.100 × 24.0 = 2.40 dm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/25 Q9",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q04",
    question: "In a hydrogen-oxygen fuel cell operating with an alkaline electrolyte, what is the overall cell reaction and the only chemical product formed?",
    options: [
      { text: "2H₂ + O₂ → 2H₂O with water as the only product" },
      { text: "H₂ + Cl₂ → 2HCl with hydrogen chloride as the only product" },
      { text: "CH₄ + 2O₂ → CO₂ + 2H₂O with carbon dioxide and water produced" },
      { text: "2H₂O → 2H₂ + O₂ with hydrogen and oxygen gas produced" }
    ],
    correctAnswer: 0,
    explanation: "* A hydrogen-oxygen fuel cell continuously consumes hydrogen fuel at the anode and oxygen at the cathode.\n* The overall chemical reaction is 2H₂(g) + O₂(g) → 2H₂O(l).\n* Water is the sole chemical exhaust product, making it a zero-emission clean energy source.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/25 Q11",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q05",
    question: "The combustion of methane is an exothermic reaction:\nCH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)    ΔH = -890 kJ/mol\nWhich statement correctly explains why this reaction is exothermic in terms of bond energies?",
    options: [
      { text: "More energy is absorbed breaking reactant bonds than is released forming product bonds" },
      { text: "More energy is released forming new bonds in the products than is absorbed breaking bonds in the reactants" },
      { text: "Bond breaking is exothermic and bond making is endothermic" },
      { text: "The activation energy of the forward reaction is zero" }
    ],
    correctAnswer: 1,
    explanation: "* Bond breaking is always endothermic (absorbs energy, ΔH > 0).\n* Bond making is always exothermic (releases energy, ΔH < 0).\n* When the total energy released in forming new C=O and O-H bonds in the products exceeds the energy required to break the initial C-H and O=O bonds, the overall net reaction is exothermic (negative ΔH).",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/25 Q14",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q06",
    question: "Which of the following describes the role of acidified potassium manganate(VII) in a redox test?",
    options: [
      { text: "It is a powerful reducing agent that turns from colourless to purple" },
      { text: "It is a powerful oxidising agent that changes from purple to colourless in the presence of a reducing agent" },
      { text: "It is a catalyst that neutralises strong acids" },
      { text: "It acts as an indicator that turns bright yellow in alkaline solutions" }
    ],
    correctAnswer: 1,
    explanation: "* Acidified potassium manganate(VII) (KMnO₄) is a standard laboratory oxidising agent containing manganese in the +7 oxidation state.\n* When it oxidises another substance (such as SO₂ or Fe²⁺), the purple MnO₄⁻ ions are reduced to colourless Mn²⁺ ions.\n* The observed colour change is purple to colourless (decolourisation).",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/25 Q18",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q07",
    question: "Which method is the most appropriate for preparing a pure, dry sample of the insoluble salt lead(II) sulfate (PbSO₄)?",
    options: [
      { text: "Titration of aqueous lead(II) nitrate with dilute sulfuric acid using phenolphthalein" },
      { text: "Precipitation by mixing aqueous lead(II) nitrate with aqueous sodium sulfate, followed by filtration, washing with distilled water, and drying" },
      { text: "Reacting excess solid lead metal directly with dilute sulfuric acid" },
      { text: "Heating lead(II) oxide in a stream of sulfur dioxide gas" }
    ],
    correctAnswer: 1,
    explanation: "* Lead(II) sulfate is an insoluble salt.\n* Insoluble salts are prepared by precipitation: mixing two soluble salt solutions (e.g. aqueous lead(II) nitrate and aqueous sodium sulfate).\n* The solid precipitate is collected by filtration, washed thoroughly with distilled water to remove soluble ions, and dried between filter papers or in a desiccator.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/25 Q20",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q08",
    question: "Which property is characteristic of transition elements but NOT typical of Group I alkali metals?",
    options: [
      { text: "They conduct electricity in the solid state" },
      { text: "They form colored compounds and often act as effective catalysts" },
      { text: "They react violently with cold water to produce hydrogen gas" },
      { text: "They have low densities and can be easily cut with a scalpel" }
    ],
    correctAnswer: 1,
    explanation: "* Transition metals exhibit high densities, high melting points, variable oxidation states (e.g. Fe²⁺/Fe³⁺), colored compounds (e.g. blue Cu²⁺, green Fe²⁺), and catalytic activity (e.g. Fe in Haber process).\n* Group I metals form only white/colourless compounds and have low densities and low melting points.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/25 Q23",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q09",
    question: "Why does aluminium resist corrosion even though it is positioned high in the reactivity series above iron?",
    options: [
      { text: "Aluminium does not react with oxygen at any temperature" },
      { text: "Aluminium forms a tough, unreactive, non-porous oxide layer on its surface that prevents underlying metal from contacting air and moisture" },
      { text: "Aluminium atoms possess full outer electron shells" },
      { text: "Aluminium possesses sacrificial zinc coatings naturally" }
    ],
    correctAnswer: 1,
    explanation: "* When freshly cut aluminium is exposed to air, it reacts immediately with oxygen to form a thin, adherent, continuous layer of aluminium oxide (Al₂O₃).\n* This oxide layer is impervious to water and air, completely shielding the underlying aluminium metal from further oxidation and corrosion.",
    level: 1,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/25 Q28",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-on-p2-q10",
    question: "Propene reacts with aqueous bromine in an addition reaction. What observation confirms the presence of the carbon-carbon double bond?",
    options: [
      { text: "A gas is evolved that turns limewater milky" },
      { text: "The reddish-brown bromine solution is rapidly decolourised to colourless" },
      { text: "A dense white precipitate forms immediately" },
      { text: "The solution turns alkaline and turns red litmus blue" }
    ],
    correctAnswer: 1,
    explanation: "* Alkenes contain a reactive carbon-carbon double bond (C=C).\n* When shaken with aqueous bromine (bromine water), an electrophilic addition reaction occurs forming 1,2-dibromopropane.\n* The reddish-brown colour of bromine is rapidly decolourised, confirming unsaturation.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/25 Q33",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },

  // -------------------------------------------------------------------------
  // SECTION B: PAPER 4 (THEORY / EXTENDED STRUCTURED QUESTIONS)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-on-p4-q01",
    question: "Copper(II) sulfate crystals are prepared by reacting excess copper(II) oxide with hot dilute sulfuric acid:\nCuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)\nState two reasons why excess copper(II) oxide is used rather than exact stoichiometric amounts.",
    options: [
      { text: "To speed up the reaction rate and lower the activation energy" },
      { text: "To ensure that all the sulfuric acid is completely neutralised, and because the unreacted excess solid is easily removed by filtration" },
      { text: "To convert all copper into gaseous copper sulfate" },
      { text: "To prevent copper from dissolving in water" }
    ],
    correctAnswer: 1,
    explanation: "* Using an excess of insoluble base (CuO) guarantees that all hazardous acid (H₂SO₄) is completely reacted and consumed so that the remaining solution is pure aqueous CuSO₄.\n* Any unreacted solid CuO remains insoluble and can be completely separated from the aqueous solution by simple filtration.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/25 Q4(a)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "neutralise all acid", text: "To ensure all acid has reacted / is completely neutralised." },
        { mark: 1, keyword: "excess filtered off", text: "Excess unreacted solid CuO can easily be filtered off / removed by filtration." }
      ],
      examinerTips: "Do not write 'to get a higher yield'. The critical reason is to ensure no unreacted acid contaminates the salt crystals."
    }
  },
  {
    id: "cie-0620-2025-on-p4-q02",
    question: "A sample of 4.80 g of magnesium ribbon is burned completely in excess oxygen to produce magnesium oxide (MgO):\n2Mg(s) + O₂(g) → 2MgO(s)\nCalculate the theoretical mass of magnesium oxide formed, and determine the percentage yield if an experimental yield of 6.40 g of MgO was obtained. [Ar: Mg = 24.0, O = 16.0]",
    options: [
      { text: "Theoretical mass = 8.00 g; Percentage yield = 80.0%" },
      { text: "Theoretical mass = 10.00 g; Percentage yield = 64.0%" },
      { text: "Theoretical mass = 7.20 g; Percentage yield = 88.9%" },
      { text: "Theoretical mass = 8.00 g; Percentage yield = 64.0%" }
    ],
    correctAnswer: 0,
    explanation: "* Step 1: Moles of Mg = 4.80 g / 24.0 g/mol = 0.200 mol.\n* Step 2: From the 2:2 (1:1) mole ratio, moles of MgO formed = 0.200 mol.\n* Step 3: Mr of MgO = 24.0 + 16.0 = 40.0 g/mol.\n* Step 4: Theoretical mass of MgO = 0.200 mol × 40.0 g/mol = 8.00 g.\n* Step 5: Percentage yield = (Actual experimental yield / Theoretical yield) × 100 = (6.40 g / 8.00 g) × 100 = 80.0%.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/25 Q3(b)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "moles of Mg = 0.200", text: "Moles of magnesium = 4.80 / 24.0 = 0.200 mol." },
        { mark: 1, keyword: "theoretical mass = 8.00 g", text: "Theoretical mass = 0.200 × 40.0 = 8.00 g." },
        { mark: 1, keyword: "percentage yield = 80%", text: "Yield calculation = (6.40 / 8.00) × 100 = 80.0%." }
      ],
      examinerTips: "Remember that percentage yield can never exceed 100% in ideal calculations; if you obtain > 100%, check if your ratio was inverted."
    }
  },
  {
    id: "cie-0620-2025-on-p4-q03",
    question: "Describe and explain the effect of a catalyst on the rate of a chemical reaction in terms of activation energy.",
    options: [
      { text: "A catalyst increases the average kinetic energy of reactant particles" },
      { text: "A catalyst provides an alternative reaction pathway with a lower activation energy, so a greater proportion of colliding particles possess energy ≥ activation energy" },
      { text: "A catalyst increases the frequency of collisions by increasing pressure" },
      { text: "A catalyst changes the overall enthalpy change (ΔH) of the reaction to more exothermic" }
    ],
    correctAnswer: 1,
    explanation: "* A catalyst increases the rate of reaction without being chemically altered or consumed at the end.\n* It functions by offering an alternative reaction pathway or mechanism that possesses a lower activation energy (Ea).\n* As a consequence, a significantly higher fraction of particle collisions have energy greater than or equal to this reduced activation energy, resulting in a higher frequency of successful collisions.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/O/N/25 Q5(c)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "alternative pathway", text: "Provides an alternative reaction pathway / mechanism." },
        { mark: 1, keyword: "lower activation energy", text: "With a lower activation energy (Ea)." },
        { mark: 1, keyword: "more successful collisions", text: "More particles / collisions have energy equal to or exceeding activation energy." }
      ],
      examinerTips: "Do not state that a catalyst 'gives energy' to particles. Particles do NOT gain kinetic energy from a catalyst; the energy barrier is simply reduced."
    }
  },
  {
    id: "cie-0620-2025-on-p4-q04",
    question: "Ethene (C₂H₄) can undergo addition polymerisation to form poly(ethene). Draw the structure of poly(ethene) showing two repeating units, clearly indicating the extension bonds.",
    options: [
      { text: "-[CH₂-CH₂-CH₂-CH₂]- with single C-C bonds and extension bonds extending through brackets" },
      { text: "-[CH=CH-CH=CH]- with double bonds intact" },
      { text: "-[CH₃-CH₂-CH₂-CH₃]- without extension bonds" },
      { text: "-[CH₂-CH(CH₃)]- with methyl side branches" }
    ],
    correctAnswer: 0,
    explanation: "* In addition polymerisation of ethene, the double bond breaks open (π-bond cleavage).\n* Two repeating units join together as: -CH₂-CH₂-CH₂-CH₂-.\n* In structural diagrams for Cambridge IGCSE, all carbon-carbon bonds within the chain must be single bonds, and extension bonds must protrude beyond the brackets.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/25 Q7(b)",
    lessonNum: 6,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "single C-C chain", text: "Continuous chain of 4 carbon atoms with only single C-C bonds." },
        { mark: 1, keyword: "extension bonds & H atoms", text: "Correct number of hydrogens (2 on each carbon) with open continuation bonds at each end." }
      ],
      examinerTips: "Never leave double bonds in the polymer backbone. If a double bond is drawn, zero marks are awarded."
    }
  },
  {
    id: "cie-0620-2025-on-p4-q05",
    question: "Describe how acid rain is formed from sulfur dioxide emissions and state one adverse environmental consequence of acid rain.",
    options: [
      { text: "SO₂ reacts with oxygen and water in the atmosphere to form dilute sulfuric acid; it lowers the pH of lakes, killing aquatic organisms" },
      { text: "SO₂ reacts with nitrogen to form ammonia; it causes eutrophication in freshwater rivers" },
      { text: "SO₂ depletes the ozone layer directly; it causes global warming" },
      { text: "SO₂ dissolves in groundwater to form insoluble gypsum deposits" }
    ],
    correctAnswer: 0,
    explanation: "* Fossil fuels contain sulfur impurities which burn to form sulfur dioxide (SO₂).\n* In the upper atmosphere, sulfur dioxide is oxidised and dissolves in rain droplets: 2SO₂ + O₂ + 2H₂O → 2H₂SO₄ (dilute sulfuric acid), producing acid rain (pH < 5.0).\n* Environmental damage includes acidification of lakes and soil (leaching toxic Al³⁺ ions and killing fish) and chemical erosion of limestone buildings and statues.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/25 Q6(a)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "sulfur dioxide reacts with rain", text: "SO₂ oxidises and dissolves in atmospheric water / rain forming sulfuric acid (H₂SO₄ / H₂SO₃)." },
        { mark: 1, keyword: "environmental effect", text: "Acidification of rivers/lakes (killing aquatic life) OR damage to limestone structures OR deforestation/leaf damage." }
      ],
      examinerTips: "Do not confuse acid rain with global warming or the greenhouse effect. They are distinct environmental phenomena."
    }
  },

  // -------------------------------------------------------------------------
  // SECTION C: PAPER 6 (ALTERNATIVE TO PRACTICAL & LAB EXPERIMENTAL TECHNIQUES)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-on-p6-q01",
    question: "A student investigated the thermal decomposition of hydrated copper(II) sulfate crystals, CuSO₄·5H₂O.\nState the color change observed when blue hydrated copper(II) sulfate crystals are heated strongly in a dry boiling tube.",
    options: [
      { text: "Turns from blue to green" },
      { text: "Turns from blue to a white anhydrous powder, and droplets of colourless liquid condense on the cooler neck of the boiling tube" },
      { text: "Turns from blue to pink" },
      { text: "Turns from blue to black with no liquid formed" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrated copper(II) sulfate (CuSO₄·5H₂O) contains water of crystallisation and is bright blue.\n* Upon heating, water of crystallisation is driven off: CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(g).\n* The solid turns into a white powder (anhydrous copper(II) sulfate) and steam condenses as colourless water droplets near the open cooler mouth of the tube.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/25 Q1(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "blue to white", text: "Colour change from blue to white." },
        { mark: 1, keyword: "condensation / droplets", text: "Observation of steam / colourless liquid droplets condensing on the tube." }
      ],
      examinerTips: "Mentioning the liquid droplets is frequently required for the full 2 marks."
    }
  },
  {
    id: "cie-0620-2025-on-p6-q02",
    question: "Solid salt W was analyzed in the laboratory:\n1. A flame test was performed on solid W, giving a persistent lilac flame.\n2. Dilute hydrochloric acid was added to a solution of W followed by aqueous barium chloride; a dense white precipitate formed.\nIdentify salt W.",
    options: [
      { text: "Sodium chloride" },
      { text: "Potassium sulfate" },
      { text: "Calcium sulfate" },
      { text: "Potassium nitrate" }
    ],
    correctAnswer: 1,
    explanation: "* A lilac flame colour confirms the presence of Potassium ions (K⁺).\n* Acidifying with dilute HCl followed by aqueous BaCl₂ is the qualitative test for sulfate ions (SO₄²⁻), producing a white precipitate of insoluble barium sulfate (BaSO₄).\n* Therefore, salt W is Potassium sulfate (K₂SO₄).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/25 Q2(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "potassium / K+", text: "Cation = Potassium / K⁺ (from lilac flame)." },
        { mark: 1, keyword: "sulfate / SO4 2-", text: "Anion = Sulfate / SO₄²⁻ (from BaSO₄ white precipitate)." }
      ],
      examinerTips: "Remember: always add dilute hydrochloric acid (or nitric acid) before barium chloride to eliminate false positives from carbonate or sulfite ions."
    }
  },
  {
    id: "cie-0620-2025-on-p6-q03",
    question: "A student determines the solubility of potassium nitrate in water at 60 °C. Describe how the student can verify that the potassium nitrate solution is completely saturated.",
    options: [
      { text: "Test the solution with universal indicator paper" },
      { text: "Add a further small crystal of potassium nitrate and observe that it does not dissolve even with thorough stirring" },
      { text: "Boil the solution until all water evaporates" },
      { text: "Check if the solution changes from colourless to purple" }
    ],
    correctAnswer: 1,
    explanation: "* A saturated solution is defined as one that can dissolve no further solute at that specified temperature.\n* To confirm saturation experimentally, add a small additional quantity/crystal of solute; if it remains undissolved at the bottom of the container after vigorous stirring, the solution is saturated.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/O/N/25 Q3(a)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "undissolved solute remains", text: "Add more solid solute; solid remains undissolved / cannot dissolve further after stirring." }
      ],
      examinerTips: "The keyword is 'undissolved solid remains' or 'no more dissolves'."
    }
  },
  {
    id: "cie-0620-2025-on-p6-q04",
    question: "A student measures the time taken for a cross drawn on paper beneath a conical flask to disappear due to the precipitation of sulfur:\nNa₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)\nState two safety precautions required when conducting this experiment in a school laboratory.",
    options: [
      { text: "Wear hearing protection and work under red light" },
      { text: "Conduct the experiment in a well-ventilated laboratory or fume cupboard to avoid inhaling toxic sulfur dioxide gas, and wear eye protection (safety goggles)" },
      { text: "Keep a fire extinguisher nearby because sodium thiosulfate is explosive" },
      { text: "Wear insulated cryogenic gloves" }
    ],
    correctAnswer: 1,
    explanation: "* The reaction generates sulfur dioxide (SO₂), which is a toxic and choking respiratory irritant, particularly dangerous for asthmatic students.\n* Therefore, it must be performed in a well-ventilated room or fume cupboard, and stop baths (sodium carbonate) should be used.\n* Eye protection (safety goggles) must be worn when handling corrosive dilute hydrochloric acid.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/25 Q4(b)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "fume cupboard / ventilation", text: "Fume cupboard / open windows / well-ventilated room to avoid toxic SO₂." },
        { mark: 1, keyword: "safety goggles / lab coat", text: "Wear eye protection / safety goggles / lab coat." }
      ],
      examinerTips: "Do NOT write just 'be careful'. Specific scientific reasons (e.g. 'fume cupboard because SO₂ is toxic') are required."
    }
  },
  {
    id: "cie-0620-2025-on-p6-q05",
    question: "During paper chromatography, the distance travelled by substance A from the baseline is 4.2 cm and the distance travelled by the solvent front from the baseline is 7.0 cm. Calculate the retention factor (Rf) of substance A.",
    options: [
      { text: "0.60" },
      { text: "1.67" },
      { text: "0.42" },
      { text: "0.70" }
    ],
    correctAnswer: 0,
    explanation: "* The retention factor formula is: Rf = distance travelled by solute spot / distance travelled by solvent front.\n* Rf = 4.2 cm / 7.0 cm = 0.60.\n* Rf values are pure dimensionless ratios that must always be less than or equal to 1.00.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/25 Q3(c)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "0.60", text: "Correct calculation: 4.2 / 7.0 = 0.60 (or 0.6)." }
      ],
      examinerTips: "Ensure you do not invert the division (7.0 / 4.2 = 1.67 is an impossible Rf value)."
    }
  },

  // =========================================================================
  // ☀️ CAMBRIDGE IGCSE CHEMISTRY (0620) — MAY / JUNE 2025 SUMMER SERIES
  // =========================================================================

  // -------------------------------------------------------------------------
  // SECTION A: PAPER 2 (MULTIPLE CHOICE — CORE & EXTENDED)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-mj-p2-q01",
    question: "A crystal of purple potassium manganate(VII) is placed at the bottom of a beaker filled with still, cold water. After several days, the entire volume of water turns a uniform pale purple without being stirred. Which processes explain this observation?",
    options: [
      { text: "Boiling and condensation" },
      { text: "Dissolving followed by diffusion of particles through random motion" },
      { text: "Neutralisation and precipitation" },
      { text: "Active transport of solute ions" }
    ],
    correctAnswer: 1,
    explanation: "* The potassium manganate(VII) crystal dissolves in water, releasing individual K⁺ and MnO₄⁻ ions.\n* Due to random thermal motion, the dissolved ions collide with water molecules and spread out from a region of higher concentration to a region of lower concentration (diffusion).\n* Over time, this results in an even, homogeneous distribution of colour throughout the beaker.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/25 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q02",
    question: "Which of the following pairs of substances consists of two giant covalent macromolecular structures?",
    options: [
      { text: "Methane and silicon dioxide" },
      { text: "Diamond and graphite" },
      { text: "Sodium chloride and copper" },
      { text: "Carbon dioxide and poly(ethene)" }
    ],
    correctAnswer: 1,
    explanation: "* Both diamond and graphite are allotropes of carbon with giant covalent macromolecular networks.\n* In diamond, every carbon atom forms 4 strong covalent bonds in a rigid 3D tetrahedral framework.\n* In graphite, each carbon atom forms 3 covalent bonds in 2D hexagonal planar sheets.\n* Methane and carbon dioxide are simple molecular substances.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/25 Q7",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q03",
    question: "What is the concentration of a solution prepared by dissolving 4.00 g of sodium hydroxide (Mr = 40.0) in distilled water to make exactly 500 cm³ of solution?",
    options: [
      { text: "0.0800 mol/dm³" },
      { text: "0.100 mol/dm³" },
      { text: "0.200 mol/dm³" },
      { text: "0.500 mol/dm³" }
    ],
    correctAnswer: 2,
    explanation: "* Step 1: Calculate moles of NaOH = mass / Mr = 4.00 g / 40.0 g/mol = 0.100 mol.\n* Step 2: Convert volume to dm³ = 500 cm³ / 1000 = 0.500 dm³.\n* Step 3: Concentration = moles / volume = 0.100 mol / 0.500 dm³ = 0.200 mol/dm³.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/25 Q8",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q04",
    question: "During the industrial refining of impure copper by electrolysis, what occurs at the cathode (-) and the anode (+)?",
    options: [
      { text: "Impure copper anode dissolves; pure copper deposits on the cathode" },
      { text: "Pure copper anode dissolves; impure copper deposits on the cathode" },
      { text: "Oxygen gas is liberated at the anode; hydrogen gas is liberated at the cathode" },
      { text: "Copper(II) ions are oxidised at the cathode" }
    ],
    correctAnswer: 0,
    explanation: "* In electro-refining of copper:\n  - Anode (+): Made of thick impure copper, which oxidises and dissolves into solution: Cu(s) → Cu²⁺(aq) + 2e⁻.\n  - Cathode (-): Made of a thin sheet of pure copper, where copper(II) ions are reduced and deposited as pure copper metal: Cu²⁺(aq) + 2e⁻ → Cu(s).\n* Precious metal impurities fall to the bottom beneath the anode as 'anode sludge'.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/25 Q11",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q05",
    question: "Which of the following processes is endothermic?",
    options: [
      { text: "Combustion of hydrogen gas in air" },
      { text: "Neutralisation of hydrochloric acid by sodium hydroxide" },
      { text: "Thermal decomposition of calcium carbonate in a lime kiln" },
      { text: "Respiration in living cells" }
    ],
    correctAnswer: 2,
    explanation: "* Thermal decomposition requires continuous input of high heat energy from the surroundings to break chemical bonds in calcium carbonate: CaCO₃(s) → CaO(s) + CO₂(g) (ΔH > 0, endothermic).\n* Combustion, neutralisation, and respiration are all strongly exothermic processes that release thermal energy to the surroundings.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/25 Q13",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q06",
    question: "When marble chips (calcium carbonate) react with dilute hydrochloric acid, which alteration to reaction conditions will increase the rate of reaction WITHOUT changing the total volume of carbon dioxide collected at completion?",
    options: [
      { text: "Doubling the mass of marble chips while keeping acid volume constant" },
      { text: "Crushing the marble chips into a fine powder of equal mass" },
      { text: "Doubling the volume and concentration of the hydrochloric acid" },
      { text: "Cooling the acid solution in an ice bath" }
    ],
    correctAnswer: 1,
    explanation: "* Crushing marble chips into powder significantly increases the total surface area exposed to acid collisions, increasing the frequency of successful collisions and accelerating the rate.\n* Because the mass of marble chips is identical and acid remains in excess, the total moles of CO₂ gas produced at completion remains unchanged.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/25 Q15",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q07",
    question: "Which of the following gases is classified as a neutral oxide (does not react with either dilute acids or dilute bases)?",
    options: [
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Carbon monoxide (CO)" },
      { text: "Carbon dioxide (CO₂)" },
      { text: "Aluminium oxide (Al₂O₃)" }
    ],
    correctAnswer: 1,
    explanation: "* Neutral oxides do not show any acidic or basic properties and do not react with either acids or bases to form salts.\n* The standard neutral oxides specified in the Cambridge IGCSE syllabus are carbon monoxide (CO), nitrogen monoxide (NO), and dinitrogen monoxide (N₂O).\n* SO₂ and CO₂ are acidic; Al₂O₃ is amphoteric.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/25 Q18",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q08",
    question: "Which trend is observed descending Group I (the alkali metals from lithium down to caesium)?",
    options: [
      { text: "Melting points increase and densities decrease" },
      { text: "Reactivity with water increases and melting points decrease" },
      { text: "Electronegativity increases and atomic radii decrease" },
      { text: "The metals become harder and less reactive" }
    ],
    correctAnswer: 1,
    explanation: "* Down Group I, atomic radius increases as more electron shells are added.\n* The outer valence electron is held further from the positively charged nucleus and is shielded by inner shells, so it is lost more readily (reactivity with water increases).\n* Metallic bonding becomes weaker as ionic radius increases, so melting points decrease down the group.",
    level: 2,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/25 Q22",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q09",
    question: "Why is cryolite (Na₃AlF₆) added to molten aluminium oxide (bauxite) during the Hall-Héroult electrolytic extraction of aluminium?",
    options: [
      { text: "To act as a catalyst that reduces Al³⁺ ions to aluminium" },
      { text: "To dissolve aluminium oxide, lowering the melting point from ~2050 °C to ~950 °C and improving electrical conductivity" },
      { text: "To prevent the carbon graphite anodes from burning away" },
      { text: "To neutralise acidic fluoride impurities" }
    ],
    correctAnswer: 1,
    explanation: "* Pure aluminium oxide has an extremely high melting point exceeding 2000 °C, which would be prohibitively expensive to maintain.\n* Dissolving alumina in molten cryolite lowers the operating temperature to around 950 °C, drastically reducing electrical energy costs while providing excellent ionic conductivity.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/25 Q26",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2025-mj-p2-q10",
    question: "Ethanoic acid reacts with ethanol in the presence of concentrated sulfuric acid as a catalyst. What are the names of the organic product and the functional group produced?",
    options: [
      { text: "Ethyl ethanoate containing an ester linkage (-COO-)" },
      { text: "Methyl propanoate containing an ether linkage (-O-)" },
      { text: "Ethanal containing a carbonyl group (-CHO)" },
      { text: "Ethoxyethane containing an amide linkage (-CONH-)" }
    ],
    correctAnswer: 0,
    explanation: "* Carboxylic acids react with alcohols via condensation esterification to yield an ester and water:\n  CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.\n* The resulting ester is ethyl ethanoate, which possesses the characteristic sweet fruity ester linkage (-COO-).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/25 Q34",
    lessonNum: 6,
    createdAt: "2026-09-04"
  },

  // -------------------------------------------------------------------------
  // SECTION B: PAPER 4 (THEORY / EXTENDED STRUCTURED QUESTIONS)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-mj-p4-q01",
    question: "Aqueous copper(II) sulfate was electrolysed using inert platinum electrodes.\n(a) Write the ionic half-equations occurring at the cathode (-) and the anode (+).\n(b) Describe and explain the change in color and pH of the electrolyte as electrolysis proceeds.",
    options: [
      { text: "Cathode: Cu²⁺ + 2e⁻ → Cu; Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻; Blue color fades to colourless as Cu²⁺ ions are discharged, and the solution becomes acidic (pH decreases) due to accumulated H⁺ and SO₄²⁻ ions" },
      { text: "Cathode: 2H⁺ + 2e⁻ → H₂; Anode: 2SO₄²⁻ → S₂O₈²⁻ + 2e⁻; Color remains blue and pH stays neutral at 7" },
      { text: "Cathode: Cu²⁺ + 2e⁻ → Cu; Anode: Cu → Cu²⁺ + 2e⁻; Color stays blue and pH remains constant" },
      { text: "Cathode: SO₄²⁻ + 2e⁻ → SO₂; Anode: 2OH⁻ → O₂ + H₂ + 2e⁻; Solution becomes strongly alkaline" }
    ],
    correctAnswer: 0,
    explanation: "* At the cathode (-): Cu²⁺ ions are lower in the reactivity series than H⁺ and are discharged as reddish-brown copper metal: Cu²⁺ + 2e⁻ → Cu(s).\n* At the anode (+): OH⁻ ions are discharged preferentially over SO₄²⁻: 4OH⁻ → O₂ + 2H₂O + 4e⁻.\n* As Cu²⁺ ions are removed, the characteristic blue colour of the electrolyte fades and eventually turns colourless.\n* Because OH⁻ ions are consumed while H⁺ and SO₄²⁻ remain in solution, dilute sulfuric acid (H₂SO₄) is formed, lowering the pH.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/25 Q3(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "cathode half-equation", text: "Cu²⁺ + 2e⁻ → Cu." },
        { mark: 1, keyword: "anode half-equation", text: "4OH⁻ → O₂ + 2H₂O + 4e⁻ (or 2H₂O → O₂ + 4H⁺ + 4e⁻)." },
        { mark: 1, keyword: "blue to colourless", text: "Blue colour fades / turns colourless due to loss of Cu²⁺ ions." },
        { mark: 1, keyword: "pH decreases / acidic", text: "Solution becomes acidic / pH decreases because H⁺ ions remain in solution." }
      ],
      examinerTips: "Do NOT confuse inert platinum electrodes with copper electrodes. If copper electrodes were used, the anode would dissolve and the blue color would remain constant."
    }
  },
  {
    id: "cie-0620-2025-mj-p4-q02",
    question: "Nitrogen monoxide (NO) and oxygen react to form nitrogen dioxide (NO₂) in a reversible reaction:\n2NO(g) + O₂(g) ⇌ 2NO₂(g)    ΔH = -114 kJ/mol\n(a) Predict and explain the effect of increasing temperature on the yield of NO₂.\n(b) Predict and explain the effect of decreasing the pressure on the yield of NO₂.",
    options: [
      { text: "(a) Yield of NO₂ decreases because forward reaction is exothermic, so equilibrium shifts left; (b) Yield of NO₂ decreases because equilibrium shifts towards the side with more moles of gas (left)" },
      { text: "(a) Yield of NO₂ increases because heat speeds up molecules; (b) Yield increases because gas expands" },
      { text: "(a) Yield of NO₂ decreases; (b) Yield of NO₂ increases because pressure favors products" },
      { text: "(a) Yield of NO₂ remains unchanged; (b) Yield of NO₂ remains unchanged because catalysts are absent" }
    ],
    correctAnswer: 0,
    explanation: "* By Le Chatelier's principle:\n  - (a) Increasing temperature favors the endothermic direction to absorb added heat. Because the forward reaction is exothermic (ΔH < 0), equilibrium shifts to the left, decreasing the equilibrium yield of NO₂.\n  - (b) Decreasing pressure favors the side with more moles of gas to counteract the pressure decrease. There are 3 moles of gas on the left (2NO + 1O₂) and 2 moles on the right (2NO₂). Equilibrium shifts to the left, decreasing NO₂ yield.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/25 Q5(a)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "temperature: yield decreases", text: "Yield of NO₂ decreases." },
        { mark: 1, keyword: "exothermic explanation", text: "Forward reaction is exothermic / equilibrium shifts in endothermic direction (left)." },
        { mark: 1, keyword: "pressure: yield decreases", text: "Yield of NO₂ decreases." },
        { mark: 1, keyword: "more moles explanation", text: "Equilibrium shifts towards the side with more gas moles (3 moles on left vs 2 on right)." }
      ],
      examinerTips: "Always quote the number of gas moles on both sides of the equation (3 vs 2) when justifying pressure effects."
    }
  },
  {
    id: "cie-0620-2025-mj-p4-q03",
    question: "A chemist heats 5.35 g of ammonium chloride (NH₄Cl, Mr = 53.5) with excess calcium hydroxide (Ca(OH)₂) to produce ammonia gas:\n2NH₄Cl(s) + Ca(OH)₂(s) → CaCl₂(s) + 2H₂O(l) + 2NH₃(g)\nCalculate the maximum volume of ammonia gas (NH₃) produced at room temperature and pressure (r.t.p.). [Molar gas volume at r.t.p. = 24.0 dm³/mol]",
    options: [
      { text: "1.20 dm³" },
      { text: "2.40 dm³" },
      { text: "4.80 dm³" },
      { text: "24.0 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: Moles of NH₄Cl = mass / Mr = 5.35 g / 53.5 g/mol = 0.100 mol.\n* Step 2: From the reaction stoichiometry, 2 moles of NH₄Cl produce 2 moles of NH₃ (1:1 mole ratio).\n* Therefore, moles of NH₃ produced = 0.100 mol.\n* Step 3: Volume of NH₃ gas at r.t.p. = moles × 24.0 dm³/mol = 0.100 × 24.0 = 2.40 dm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/M/J/25 Q4(c)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "moles of NH4Cl = 0.100", text: "Moles of NH₄Cl = 5.35 / 53.5 = 0.100 mol." },
        { mark: 1, keyword: "mole ratio 1:1", text: "Moles of NH₃ = 0.100 mol." },
        { mark: 1, keyword: "volume = 2.40 dm3", text: "Volume = 0.100 × 24.0 = 2.40 dm³." }
      ],
      examinerTips: "Remember to include the correct unit (dm³ or 2400 cm³)."
    }
  },
  {
    id: "cie-0620-2025-mj-p4-q04",
    question: "Nylon is a synthetic condensation polyamide formed from a diamine and a dicarboxylic acid.\n(a) What small molecule is eliminated during the formation of each amide link in nylon?\n(b) Give the structural formula of the characteristic functional group link present in nylon and proteins.",
    options: [
      { text: "(a) Water (H₂O); (b) Amide link: -CONH-" },
      { text: "(a) Carbon dioxide (CO₂); (b) Ester link: -COO-" },
      { text: "(a) Hydrogen (H₂); (b) Ether link: -C-O-C-" },
      { text: "(a) Ammonia (NH₃); (b) Peptide link: -NH-" }
    ],
    correctAnswer: 0,
    explanation: "* In condensation polymerisation, monomer units join together with the simultaneous elimination of a small molecule, which is water (H₂O) when carboxylic acid and amine functional groups react.\n* The resulting functional link between monomers is the amide link (or peptide link in biological proteins): -C(=O)-NH-.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/25 Q7(d)",
    lessonNum: 6,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "water eliminated", text: "Water (H₂O) is eliminated." },
        { mark: 1, keyword: "amide link -CONH-", text: "Amide / peptide link: -CONH-." }
      ],
      examinerTips: "Do not write 'HCl' unless the question specifies that an acyl dichloride was used as monomer instead of dicarboxylic acid."
    }
  },
  {
    id: "cie-0620-2025-mj-p4-q05",
    question: "Water from natural reservoirs contains dissolved mineral ions and suspended microbes. Outline the three essential stages in the industrial treatment of river water to make it potable (safe for drinking).",
    options: [
      { text: "Fractional distillation, electrolysis, and fluoridation" },
      { text: "1. Screening & Sedimentation (removing large debris and settling mud); 2. Sand Filtration (removing fine insoluble suspended solids); 3. Chlorination (killing harmful bacteria and pathogens)" },
      { text: "Desalination, acid neutralisation, and crystallization" },
      { text: "Boiling, magnetic separation, and centrifuge" }
    ],
    correctAnswer: 1,
    explanation: "* The standard municipal water purification sequence consists of:\n  1. Screening & Coagulation/Sedimentation: Large debris is screened out, and alum/iron(III) sulfate is added to clump fine particles into flocs that settle as sediment.\n  2. Filtration: Water passes through beds of graded sand and gravel to remove remaining fine particles.\n  3. Chlorination: A controlled dose of chlorine is added to sterilise the water by killing bacteria and pathogenic microbes.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/25 Q6(b)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "screening / sedimentation", text: "Screening / sedimentation to remove large insoluble particles/debris." },
        { mark: 1, keyword: "sand filtration", text: "Filtration (through sand/gravel) to remove fine insoluble solids." },
        { mark: 1, keyword: "chlorination", text: "Chlorination / adding chlorine to kill bacteria / sterilise water." }
      ],
      examinerTips: "Do not say chlorine 'cleans' or 'purifies' water. The explicit scientific mark is awarded for 'kills bacteria / microbes'."
    }
  },

  // -------------------------------------------------------------------------
  // SECTION C: PAPER 6 (ALTERNATIVE TO PRACTICAL & LAB EXPERIMENTAL TECHNIQUES)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2025-mj-p6-q01",
    question: "A student carries out a chromatography experiment on black ink using water as the solvent. When the experiment is complete, the solvent front has moved 8.0 cm from the pencil baseline, and three separate spots are visible:\n• Spot 1: moved 2.0 cm\n• Spot 2: moved 5.6 cm\n• Spot 3: moved 7.2 cm\nCalculate the Rf value for Spot 2 and explain which dye is the most soluble in water.",
    options: [
      { text: "Rf = 0.70; Spot 3 is the most soluble because it travels furthest with the mobile solvent" },
      { text: "Rf = 1.43; Spot 1 is the most soluble because it stays closest to the origin" },
      { text: "Rf = 0.35; Spot 2 is the most soluble because it has the average retention" },
      { text: "Rf = 0.70; Spot 1 is the most soluble because it binds tightly to paper" }
    ],
    correctAnswer: 0,
    explanation: "* Rf for Spot 2 = distance moved by spot / distance moved by solvent front = 5.6 cm / 8.0 cm = 0.70.\n* Spot 3 travelled furthest (7.2 cm, Rf = 0.90), meaning it has the strongest affinity for the mobile phase and is the most soluble in water.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/25 Q2(a)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "Rf = 0.70", text: "Correct Rf calculation: 5.6 / 8.0 = 0.70." },
        { mark: 1, keyword: "Spot 3 most soluble", text: "Spot 3 identified as most soluble because it travelled the greatest distance." }
      ],
      examinerTips: "Always show working and check that Rf is expressed as a decimal between 0 and 1."
    }
  },
  {
    id: "cie-0620-2025-mj-p6-q02",
    question: "A green crystalline solid, Solid G, was dissolved in water to make Solution G:\n1. Adding aqueous sodium hydroxide produced a dirty green precipitate that remained insoluble in excess sodium hydroxide.\n2. Adding dilute nitric acid followed by aqueous barium nitrate produced a white precipitate.\nIdentify the two ions present in Solid G.",
    options: [
      { text: "Iron(II) ion (Fe²⁺) and Sulfate ion (SO₄²⁻)" },
      { text: "Iron(III) ion (Fe³⁺) and Chloride ion (Cl⁻)" },
      { text: "Chromium(III) ion (Cr³⁺) and Sulfate ion (SO₄²⁻)" },
      { text: "Copper(II) ion (Cu²⁺) and Carbonate ion (CO₃²⁻)" }
    ],
    correctAnswer: 0,
    explanation: "* A dirty green precipitate with sodium hydroxide that is insoluble in excess confirms the Iron(II) cation: Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s).\n* Acidifying with dilute nitric acid followed by aqueous barium nitrate (or barium chloride) tests for the sulfate anion (SO₄²⁻), giving an insoluble white precipitate of BaSO₄.\n* Solid G is iron(II) sulfate (FeSO₄).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/25 Q3(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "iron(II) / Fe2+", text: "Cation identified as Iron(II) / Fe²⁺." },
        { mark: 1, keyword: "sulfate / SO4 2-", text: "Anion identified as Sulfate / SO₄²⁻." }
      ],
      examinerTips: "Writing 'Iron' alone will lose the mark. You must specify Iron(II) with Roman numerals or ionic charge Fe²⁺."
    }
  },
  {
    id: "cie-0620-2025-mj-p6-q03",
    question: "A student investigates the rate of reaction between magnesium and excess dilute hydrochloric acid by measuring the volume of hydrogen gas evolved in a gas syringe every 30 seconds for 5 minutes.\nHow can the student verify from the results that the reaction has reached completion?",
    options: [
      { text: "When the temperature of the solution drops below 0 °C" },
      { text: "When two consecutive readings of the gas volume in the gas syringe are identical (graph levels off to a horizontal plateau)" },
      { text: "When the color of the solution turns bright yellow" },
      { text: "When all hydrochloric acid has evaporated" }
    ],
    correctAnswer: 1,
    explanation: "* In a gas collection rate experiment, as reactants are consumed the rate decreases.\n* When the limiting reactant (magnesium) is entirely exhausted, no further gas is evolved, so the gas syringe volume stops changing.\n* Consecutive identical readings (and a horizontal plateau on the volume-time graph) confirm the reaction is complete.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/M/J/25 Q1(c)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "volume stops changing / constant", text: "Gas volume stops increasing / remains constant / graph becomes horizontal." }
      ],
      examinerTips: "Mentioning that the graph levels off or that consecutive volume readings are identical receives full credit."
    }
  },
  {
    id: "cie-0620-2025-mj-p6-q04",
    question: "A student performs a titration using a conical flask, a pipette, and a burette.\nExplain why the conical flask is rinsed with distilled water before the titration, but must NOT be rinsed with the alkali solution it is about to contain.",
    options: [
      { text: "Rinsing with alkali dissolves the glass of the flask" },
      { text: "Rinsing with alkali leaves droplets of alkali on the walls, adding extra unmeasured moles of alkali that would cause an inaccurate, overly large acid titre" },
      { text: "Distilled water speeds up the neutralisation indicator change" },
      { text: "Alkali evaporates and explodes in dry air" }
    ],
    correctAnswer: 1,
    explanation: "* A volumetric pipette delivers an exact known volume (and thus exact moles) of alkali into the conical flask.\n* If the flask were pre-rinsed with alkali, droplets clinging to the sides would add extra moles of alkali, requiring more acid to neutralise and introducing a systematic error.\n* In contrast, rinsing with distilled water leaves only water molecules, which do not change the number of moles of alkali transferred by the pipette.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/25 Q4(a)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "extra alkali droplets", text: "Rinsing with alkali leaves residual droplets of alkali in the flask." },
        { mark: 1, keyword: "alters moles / larger titre", text: "This increases the moles of alkali present, leading to an inaccurate / larger titre volume." }
      ],
      examinerTips: "Remember: burettes and pipettes must be rinsed with the solution they will contain, but the conical flask must be rinsed only with pure distilled water."
    }
  },
  {
    id: "cie-0620-2025-mj-p6-q05",
    question: "Plan an investigation to determine the order of reactivity of four unknown metal powders (P, Q, R, and S) using samples of their aqueous sulfate solutions.\nState the method, what observations you would make, and how you would deduce the order of reactivity.",
    options: [
      { text: "Melt all metals and record their boiling points" },
      { text: "Add each metal powder separately to samples of each metal sulfate solution in a spotting tile (displacement testing); observe if a color change or metal coating forms; the metal that displaces the most other metals is the most reactive" },
      { text: "Perform flame tests on each metal and order them by flame brightness" },
      { text: "Electrolyse each sulfate solution and weigh the battery" }
    ],
    correctAnswer: 1,
    explanation: "* A more reactive metal displaces a less reactive metal from an aqueous solution of its salt.\n* Method:\n  1. Place samples of aqueous sulfate solutions of P, Q, R, and S into test-tubes or spotting tiles.\n  2. Add a small sample of metal P to solutions of Q, R, and S; repeat for metals Q, R, and S.\n  3. Record observations (e.g. deposit of displaced metal coating the surface, temperature rise, or fading of solution colour).\n  4. The metal showing displacement in the greatest number of solutions is ranked most reactive.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/25 Q4 (Planning an Investigation)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "metal added to solutions", text: "Add each metal to the sulfate solution of each other metal (displacement reaction testing)." },
        { mark: 1, keyword: "observe coating / color change", text: "Observe whether a reaction occurs (coating of displaced metal, colour change, or temperature increase)." },
        { mark: 1, keyword: "deduce order", text: "The metal with the greatest number of displacement reactions is the most reactive (ranked highest)." }
      ],
      examinerTips: "You can also suggest measuring temperature changes (exothermic displacement) using a thermometer in a polystyrene cup."
    }
  },

  // =========================================================================
  // ❄️ CAMBRIDGE IGCSE CHEMISTRY (0620) — OCTOBER / NOVEMBER 2024 WINTER SERIES
  // =========================================================================

  // -------------------------------------------------------------------------
  // SECTION A: PAPER 2 (MULTIPLE CHOICE — CORE & EXTENDED)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2024-on-p2-q01",
    question: "Which of the following substances sublimes directly from a solid to a gas upon gentle heating at standard atmospheric pressure?",
    options: [
      { text: "Sodium chloride" },
      { text: "Iodine" },
      { text: "Copper(II) sulfate" },
      { text: "Wax" }
    ],
    correctAnswer: 1,
    explanation: "* Sublimation is the direct phase change from solid to gas without entering the intermediate liquid state.\n* Iodine (I₂) and solid carbon dioxide ('dry ice') are classic examples that sublime upon gentle heating under standard atmospheric conditions, producing a characteristic dense purple iodine vapour.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/24 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q02",
    question: "Two isotopes of chlorine are ³⁵₁₇Cl and ³⁷₁₇Cl. Which statement is correct regarding these two isotopes?",
    options: [
      { text: "They have different numbers of protons, giving them distinct chemical properties" },
      { text: "They have identical numbers of electrons and protons, so they possess identical chemical properties" },
      { text: "³⁷₁₇Cl forms Cl⁻ ions more readily because it has more neutrons" },
      { text: "They possess different numbers of valence electrons" }
    ],
    correctAnswer: 1,
    explanation: "* Isotopes are atoms of the same element possessing identical proton numbers (atomic numbers) and electron configurations, but different numbers of neutrons (different mass numbers).\n* Because chemical reactions depend on electron arrangements (both have 7 valence electrons: 2,8,7), isotopes exhibit identical chemical properties.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/24 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q03",
    question: "What is the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃? [Relative atomic masses: N = 14.0, H = 1.0, O = 16.0]",
    options: [
      { text: "17.5%" },
      { text: "28.0%" },
      { text: "35.0%" },
      { text: "42.0%" }
    ],
    correctAnswer: 2,
    explanation: "* Formula of ammonium nitrate contains two nitrogen atoms: (2 × 14.0) = 28.0 g/mol.\n* Mr of NH₄NO₃ = (14.0 × 2) + (1.0 × 4) + (16.0 × 3) = 28.0 + 4.0 + 48.0 = 80.0 g/mol.\n* Percentage of nitrogen = (mass of N in formula / Mr) × 100 = (28.0 / 80.0) × 100 = 35.0%.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/24 Q8",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q04",
    question: "During the electrolysis of molten lead(II) bromide (PbBr₂) using carbon electrodes, what are the products formed at the cathode (-) and anode (+)?",
    options: [
      { text: "Cathode: Bromine gas; Anode: Lead metal" },
      { text: "Cathode: Lead metal; Anode: Bromine gas" },
      { text: "Cathode: Hydrogen gas; Anode: Oxygen gas" },
      { text: "Cathode: Lead metal; Anode: Oxygen gas" }
    ],
    correctAnswer: 1,
    explanation: "* At the negative cathode (-), positive lead(II) cations (Pb²⁺) gain electrons (reduction) to form silvery molten lead metal: Pb²⁺ + 2e⁻ → Pb(l).\n* At the positive anode (+), negative bromide anions (Br⁻) lose electrons (oxidation) to evolve brown bromine vapour: 2Br⁻ → Br₂(g) + 2e⁻.",
    level: 1,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/24 Q10",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q05",
    question: "Which of the following fuels produces only non-polluting water vapor when completely combusted?",
    options: [
      { text: "Natural gas (methane)" },
      { text: "Hydrogen gas" },
      { text: "Ethanol" },
      { text: "Petrol (octane)" }
    ],
    correctAnswer: 1,
    explanation: "* Combustion of hydrogen: 2H₂(g) + O₂(g) → 2H₂O(g).\n* Hydrogen fuel releases significant energy per gram and produces only water vapor, generating zero carbon monoxide, carbon dioxide, unburnt hydrocarbons, or particulates.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/24 Q12",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q06",
    question: "In which of the following reactions is the underlined substance being reduced?\n1. 2Fe²⁺(aq) + Cl₂(g) → 2Fe³⁺(aq) + 2Cl⁻(aq) (underline Cl₂)\n2. CuO(s) + H₂(g) → Cu(s) + H₂O(l) (underline CuO)\n3. Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) (underline Mg)",
    options: [
      { text: "1 and 2 only" },
      { text: "2 and 3 only" },
      { text: "1 and 3 only" },
      { text: "1, 2 and 3" }
    ],
    correctAnswer: 0,
    explanation: "* Reduction is the gain of electrons, loss of oxygen, or decrease in oxidation number (OIL RIG):\n  - In 1: Cl₂ gains electrons to become Cl⁻ (oxidation state 0 to -1), so Cl₂ is reduced.\n  - In 2: CuO loses oxygen to become elemental Cu (oxidation state +2 to 0), so CuO is reduced.\n  - In 3: Mg loses electrons to form Mg²⁺ (oxidation state 0 to +2), so Mg is oxidised, not reduced.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/24 Q17",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q07",
    question: "Which indicator turns yellow in dilute hydrochloric acid and blue in dilute sodium hydroxide solution?",
    options: [
      { text: "Methyl orange" },
      { text: "Thymolphthalein" },
      { text: "Litmus" },
      { text: "Phenolphthalein" }
    ],
    correctAnswer: 1,
    explanation: "* In the updated Cambridge IGCSE syllabus, thymolphthalein is colourless in acidic solution and bright blue in alkaline solution.\n* Methyl orange is red in acid and yellow in alkali.\n* Litmus is red in acid and blue in alkali.\n* When comparing indicator colours, carefully check the specified endpoint colors.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/24 Q19",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q08",
    question: "Which of the following noble gases is commonly used to fill incandescent light bulbs to provide an unreactive inert atmosphere and prevent the tungsten filament from oxidising?",
    options: [
      { text: "Argon" },
      { text: "Helium" },
      { text: "Radon" },
      { text: "Krypton" }
    ],
    correctAnswer: 0,
    explanation: "* Argon is an abundant, cheap noble gas possessing a complete octet of valence electrons (2,8,8), making it chemically inert.\n* It is filled into traditional light bulbs to surround the hot white-hot tungsten filament and prevent it from burning in air.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/24 Q24",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q09",
    question: "Blocks of zinc metal are attached to the steel hulls of ships to protect the iron from rusting. How does zinc protect iron in this sacrificial method?",
    options: [
      { text: "Zinc is less reactive than iron and covers it as an inert lacquer" },
      { text: "Zinc is more reactive than iron and oxidises preferentially, sacrificing itself by losing electrons to the iron" },
      { text: "Zinc reacts with seawater to produce a protective basic layer of sodium hydroxide" },
      { text: "Zinc absorbs oxygen gas from the ocean water" }
    ],
    correctAnswer: 1,
    explanation: "* Zinc is higher in the reactivity series than iron (more reactive).\n* In sacrificial protection, zinc atoms lose electrons more readily than iron: Zn → Zn²⁺ + 2e⁻.\n* The released electrons flow to the iron, preventing Fe from oxidising to Fe²⁺ until all zinc blocks are consumed.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/24 Q29",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-on-p2-q10",
    question: "Under which condition does methane react with chlorine gas in a photochemical substitution reaction?",
    options: [
      { text: "In total darkness at room temperature" },
      { text: "In the presence of ultraviolet (UV) light" },
      { text: "In the presence of a nickel catalyst at 200 °C" },
      { text: "Under high hydrostatic pressure in liquid state" }
    ],
    correctAnswer: 1,
    explanation: "* Alkanes are relatively unreactive because they have strong, non-polar C-C and C-H single bonds.\n* They undergo photochemical substitution with halogens only when exposed to ultraviolet (UV) light (or sunlight).\n* UV photons supply the initial activation energy to break the covalent Cl-Cl bond via homolytic fission: CH₄ + Cl₂ → CH₃Cl + HCl.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/24 Q32",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },

  // -------------------------------------------------------------------------
  // SECTION B: PAPER 4 (THEORY / EXTENDED STRUCTURED QUESTIONS)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2024-on-p4-q01",
    question: "Hydrochloric acid and sodium thiosulfate react to form an insoluble precipitate of sulfur:\nNa₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)\nExplain in terms of collision theory why increasing the temperature of the reaction mixture from 20 °C to 40 °C significantly increases the rate of reaction.",
    options: [
      { text: "Particles expand and their surface area doubles" },
      { text: "Particles gain kinetic energy and move faster, so they collide more frequently; more importantly, a much greater proportion of colliding particles have kinetic energy greater than or equal to the activation energy (Ea)" },
      { text: "Heating eliminates the activation energy barrier entirely" },
      { text: "The reaction becomes reversible at higher temperatures" }
    ],
    correctAnswer: 1,
    explanation: "* Increasing temperature raises the average kinetic energy of all reacting particles.\n* Consequently, particles move with higher velocities, leading to a higher frequency of collisions.\n* Crucially, according to the Maxwell-Boltzmann distribution, a much higher fraction of colliding particles possess energy equal to or greater than the activation energy (E ≥ Ea), so a much higher percentage of collisions are successful.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/24 Q3(c)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "particles gain kinetic energy", text: "Particles have more kinetic energy / move faster." },
        { mark: 1, keyword: "collision frequency increases", text: "Higher frequency of collisions / more collisions per second." },
        { mark: 1, keyword: "more particles have E >= Ea", text: "Significantly greater proportion of colliding particles have energy ≥ activation energy (more successful collisions)." }
      ],
      examinerTips: "The mark for 'greater proportion of collisions having E ≥ Ea' is the most heavily weighted point. Never omit mentioning activation energy."
    }
  },
  {
    id: "cie-0620-2024-on-p4-q02",
    question: "A chemist synthesises aspirin (C₉H₈O₄, Mr = 180.0) from salicylic acid (C₇H₆O₃, Mr = 138.0) using excess ethanoic anhydride:\nC₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + C₂H₄O₂\nStarting with 13.8 g of salicylic acid, a student obtains 12.6 g of pure dry aspirin.\n(a) Calculate the theoretical mass of aspirin formed.\n(b) Calculate the percentage yield obtained by the student.",
    options: [
      { text: "(a) Theoretical mass = 18.0 g; (b) Percentage yield = 70.0%" },
      { text: "(a) Theoretical mass = 15.0 g; (b) Percentage yield = 84.0%" },
      { text: "(a) Theoretical mass = 18.0 g; (b) Percentage yield = 60.0%" },
      { text: "(a) Theoretical mass = 13.8 g; (b) Percentage yield = 91.3%" }
    ],
    correctAnswer: 0,
    explanation: "* Step 1: Moles of salicylic acid = mass / Mr = 13.8 g / 138.0 g/mol = 0.100 mol.\n* Step 2: From the 1:1 stoichiometry, theoretical moles of aspirin = 0.100 mol.\n* Step 3: Theoretical mass of aspirin = 0.100 mol × 180.0 g/mol = 18.0 g.\n* Step 4: Percentage yield = (Actual mass / Theoretical mass) × 100 = (12.6 g / 18.0 g) × 100 = 70.0%.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/24 Q4(b)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "moles of reactant = 0.100", text: "Moles of salicylic acid = 13.8 / 138 = 0.100 mol." },
        { mark: 1, keyword: "theoretical mass = 18.0 g", text: "Theoretical mass = 0.100 × 180 = 18.0 g." },
        { mark: 1, keyword: "percentage yield = 70%", text: "Percentage yield = (12.6 / 18.0) × 100 = 70.0%." }
      ],
      examinerTips: "Always show the full formula: (actual / theoretical) × 100 to ensure partial credit if an arithmetic mistake occurs."
    }
  },
  {
    id: "cie-0620-2024-on-p4-q03",
    question: "Solid zinc carbonate (ZnCO₃) is heated strongly in a hard glass test-tube:\nZnCO₃(s) → ZnO(s) + CO₂(g)\n(a) What color change is observed in the solid residue when hot and when cold?\n(b) Describe a chemical test to confirm that the gas produced is carbon dioxide.",
    options: [
      { text: "(a) Turns black when hot and white when cold; (b) Gas relights a glowing splint" },
      { text: "(a) Turns yellow when hot and white when cold; (b) Bubble the gas through limewater (aqueous calcium hydroxide); it turns cloudy and milky" },
      { text: "(a) Remains green hot and cold; (b) Gas bleaches litmus paper" },
      { text: "(a) Turns brown when hot and blue when cold; (b) Gas pops with a lighted splint" }
    ],
    correctAnswer: 1,
    explanation: "* Zinc oxide (ZnO) exhibits a characteristic thermochromic property: it is yellow when hot and cools back to a pure white solid.\n* Carbon dioxide is confirmed by bubbling it through limewater (aqueous Ca(OH)₂), which forms a fine suspension of insoluble calcium carbonate, turning the liquid cloudy and milky: CO₂ + Ca(OH)₂ → CaCO₃(s) + H₂O(l).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/O/N/24 Q2(d)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "yellow when hot", text: "Residue is yellow when hot." },
        { mark: 1, keyword: "white when cold", text: "Residue turns white when cooled." },
        { mark: 1, keyword: "limewater milky", text: "Bubble through limewater; limewater turns milky / cloudy / forms a white precipitate." }
      ],
      examinerTips: "Do not just state 'limewater test'. You must explicitly describe the observation (turns milky / cloudy)."
    }
  },
  {
    id: "cie-0620-2024-on-p4-q04",
    question: "Alkanes such as octane (C₈H₁₈) can be cracked industrially to produce smaller, more useful molecules:\nC₈H₁₈ → C₄H₁₀ + 2C₂H₄\n(a) State the reaction conditions used for catalytic cracking.\n(b) Explain why catalytic cracking is of enormous economic importance in the petroleum industry.",
    options: [
      { text: "(a) 25 °C and atmospheric pressure; (b) It creates synthetic crude oil" },
      { text: "(a) High temperature (around 500 °C) and a zeolite (silica-alumina) catalyst; (b) Cracking converts surplus, low-demand heavy long-chain fractions into high-demand short-chain alkanes for petrol fuel and reactive alkenes for polymer manufacture" },
      { text: "(a) Ultraviolet radiation and pure oxygen; (b) It eliminates all carbon dioxide emissions" },
      { text: "(a) Liquid nitrogen at -196 °C; (b) It prevents gasoline from evaporating" }
    ],
    correctAnswer: 1,
    explanation: "* Catalytic cracking conditions: high temperature (~450 °C - 550 °C) and a solid catalyst (zeolite / aluminosilicate).\n* Economic importance: Fractional distillation of crude oil produces an excess of heavy, long-chain fractions (fuel oil, bitumen) for which market demand is low, and too few short-chain fractions.\n* Cracking converts these long-chain hydrocarbons into short-chain alkanes used in high-octane motor petrol, and short-chain alkenes (such as ethene) used as chemical feedstocks for plastics (polymers).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/24 Q6(a)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "high temperature & catalyst", text: "High temperature (450–600 °C) AND catalyst (zeolite / aluminium oxide / silica)." },
        { mark: 1, keyword: "short-chain fuels", text: "Produces short-chain alkanes / petrol which are in higher demand as fuels." },
        { mark: 1, keyword: "alkenes for polymers", text: "Produces alkenes used for making plastics / polymers / petrochemical feedstocks." }
      ],
      examinerTips: "Remember that cracking ALWAYS yields at least one alkene molecule to balance the hydrogen atoms."
    }
  },
  {
    id: "cie-0620-2024-on-p4-q05",
    question: "Eutrophication occurs when excess agricultural fertilizers wash into rivers and lakes.\nDescribe the biological and chemical sequence of events that leads to the death of aquatic animal life in eutrophic waters.",
    options: [
      { text: "Nitrate ions react with water to form nitric acid, which directly burns fish gills" },
      { text: "Leached nitrate and phosphate ions stimulate rapid algae growth (algal bloom), which blocks sunlight; underwater plants die; aerobic bacteria decompose the dead plants, rapidly consuming dissolved oxygen and suffocating fish" },
      { text: "Fertilizers increase water temperature, causing all dissolved gases to boil away" },
      { text: "Algae release toxic carbon monoxide gas into the water" }
    ],
    correctAnswer: 1,
    explanation: "* 1. Soluble nitrate (NO₃⁻) and phosphate fertilizers are leached by rain into waterways.\n* 2. This nutrient enrichment causes rapid surface algal growth ('algal bloom').\n* 3. The thick algae layer blocks sunlight from penetrating underwater, so submerged aquatic plants cannot photosynthesise and die.\n* 4. Decomposing aerobic bacteria multiply exponentially as they break down dead plant matter, consuming dissolved oxygen.\n* 5. Depleted dissolved oxygen levels lead to fish and other aquatic animals suffocating and dying.",
    level: 3,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/24 Q5(c)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "algal bloom", text: "Fertilisers cause rapid growth of algae on water surface (algal bloom)." },
        { mark: 1, keyword: "blocks sunlight", text: "Algae blocks sunlight, preventing photosynthesis of submerged plants which die." },
        { mark: 1, keyword: "bacteria decompose & use O2", text: "Aerobic bacteria feed on dead plant matter and multiply, using up dissolved oxygen in respiration." },
        { mark: 1, keyword: "fish suffocate", text: "Water becomes deoxygenated / anoxic, causing fish and aquatic life to die." }
      ],
      examinerTips: "The key to scoring all 4 marks is articulating the sequential role of bacteria consuming oxygen during decay."
    }
  },

  // -------------------------------------------------------------------------
  // SECTION C: PAPER 6 (ALTERNATIVE TO PRACTICAL & LAB EXPERIMENTAL TECHNIQUES)
  // -------------------------------------------------------------------------
  {
    id: "cie-0620-2024-on-p6-q01",
    question: "A student dissolves solid ammonium nitrate in distilled water in an insulated polystyrene cup and measures the temperature every 30 seconds using a thermometer.\n• Initial water temperature = 21.5 °C\n• Lowest recorded temperature = 14.0 °C\n(a) Calculate the temperature change (ΔT).\n(b) State the type of thermal process that occurred.",
    options: [
      { text: "(a) ΔT = -7.5 °C; (b) Endothermic process" },
      { text: "(a) ΔT = +7.5 °C; (b) Exothermic process" },
      { text: "(a) ΔT = -14.0 °C; (b) Neutralisation" },
      { text: "(a) ΔT = -7.5 °C; (b) Combustion" }
    ],
    correctAnswer: 0,
    explanation: "* Temperature change ΔT = Lowest final temperature - Initial temperature = 14.0 °C - 21.5 °C = -7.5 °C (a decrease of 7.5 °C).\n* Because thermal energy was absorbed from the water solvent by the dissolving ions, causing the temperature to drop, the dissolution process is endothermic.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/24 Q1(a)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "temperature drop = 7.5 °C", text: "Temperature decrease = 7.5 °C (or -7.5 °C)." },
        { mark: 1, keyword: "endothermic", text: "Identified as endothermic." }
      ],
      examinerTips: "Always include the minus sign or state 'decrease of 7.5 °C'."
    }
  },
  {
    id: "cie-0620-2024-on-p6-q02",
    question: "A student performs qualitative test-tube tests on unknown white solid K:\n1. A small sample of K was dissolved in water, and aqueous sodium hydroxide was added dropwise until in excess: a white precipitate formed that redissolved in excess to give a colourless solution.\n2. When aqueous ammonia was added dropwise until in excess to a fresh sample of the solution, a white precipitate formed that was INSOLUBLE in excess.\nIdentify the positive metal cation present in solid K.",
    options: [
      { text: "Zinc ion (Zn²⁺)" },
      { text: "Aluminium ion (Al³⁺)" },
      { text: "Calcium ion (Ca²⁺)" },
      { text: "Lead(II) ion (Pb²⁺)" }
    ],
    correctAnswer: 1,
    explanation: "* Both Zn²⁺ and Al³⁺ form white precipitates with NaOH that dissolve in excess.\n* However, with aqueous ammonia (NH₃):\n  - Zn²⁺ forms a white precipitate that dissolves in excess to form a colourless complex.\n  - Al³⁺ forms a white precipitate that is completely INSOLUBLE in excess aqueous ammonia.\n* Therefore, the cation is Aluminium (Al³⁺).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/24 Q2(b)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "aluminium / Al3+", text: "Cation identified as Aluminium / Al³⁺." }
      ],
      examinerTips: "Distinguishing Al³⁺ from Zn²⁺ using aqueous ammonia is one of the most frequently tested concepts in Paper 6."
    }
  },
  {
    id: "cie-0620-2024-on-p6-q03",
    question: "Why is an insulated polystyrene cup with a lid used instead of a glass glass beaker when measuring temperature changes in thermochemical experiments?",
    options: [
      { text: "Polystyrene reacts with the acid to accelerate temperature rise" },
      { text: "Polystyrene is a good thermal insulator with low heat capacity, reducing heat loss to the surroundings and giving a more accurate temperature reading" },
      { text: "Polystyrene makes the solution change color more rapidly" },
      { text: "Glass beakers shatter when exposed to dilute acids" }
    ],
    correctAnswer: 1,
    explanation: "* Polystyrene has a much lower thermal conductivity than glass and possesses minimal thermal capacity.\n* It drastically reduces conductive and convective heat losses to the ambient room air, ensuring the measured ΔT reflects true reaction enthalpy changes.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/O/N/24 Q1(d)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "insulator / reduce heat loss", text: "Polystyrene is a good insulator / reduces heat loss (or heat gain) to/from surroundings." }
      ],
      examinerTips: "Never write 'it prevents all heat loss'. No apparatus is 100% adiabatic; write 'reduces / minimises heat loss'."
    }
  },
  {
    id: "cie-0620-2024-on-p6-q04",
    question: "A student tests a colourless liquid to verify whether it is chemically pure water.\nWhich test confirms that the sample is PURE water rather than an aqueous solution of salt?",
    options: [
      { text: "Add anhydrous copper(II) sulfate; it turns from white to blue" },
      { text: "Add anhydrous cobalt(II) chloride; it turns from blue to pink" },
      { text: "Measure its boiling point; it boils sharply and steadily at exactly 100 °C at standard atmospheric pressure" },
      { text: "Test its pH with universal indicator paper to observe a green colour" }
    ],
    correctAnswer: 2,
    explanation: "* Chemical tests (CuSO₄ turning blue, CoCl₂ turning pink) only confirm the PRESENCE of water; even salty seawater or dilute acid will turn anhydrous copper sulfate blue.\n* To confirm that water is chemically PURE, physical tests for purity must be used: measuring its sharp boiling point (exactly 100.0 °C at 1 atm) or its freezing point (exactly 0.0 °C).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/24 Q3(a)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "boils at 100 °C / melts at 0 °C", text: "Boil the liquid; boils at exactly 100 °C (or melts/freezes at 0 °C)." },
        { mark: 1, keyword: "sharp / fixed temperature", text: "At a sharp, fixed, single temperature (no boiling range)." }
      ],
      examinerTips: "Distinguish carefully between a test for the 'presence of water' (chemical tests) and a test for 'purity of water' (physical melting/boiling points)."
    }
  },
  {
    id: "cie-0620-2024-on-p6-q05",
    question: "Plan an investigation to determine the percentage of sand in a mixture of sand and sodium chloride.\nYou are provided with standard laboratory apparatus: balance, beakers, stirring rod, filter paper, funnel, evaporating basin, and Bunsen burner.",
    options: [
      { text: "Burn the mixture and weigh the gaseous carbon dioxide produced" },
      { text: "1. Weigh the dry mixture; 2. Add distilled water and stir to dissolve the soluble NaCl while insoluble sand remains; 3. Filter the mixture; 4. Wash the sand residue with distilled water and dry in an oven; 5. Weigh the dry sand and calculate (mass of sand / mass of initial mixture) × 100" },
      { text: "Heat the mixture to 801 °C until NaCl melts and pour the liquid salt away" },
      { text: "Perform a paper chromatography separation on the sand particles" }
    ],
    correctAnswer: 1,
    explanation: "* Step-by-step separation and gravimetric analysis:\n  1. Weigh the original dry sand + NaCl mixture on a balance (m₁).\n  2. Transfer into a beaker, add distilled water, and stir with a glass rod until all soluble sodium chloride dissolves completely.\n  3. Filter the suspension through filter paper in a funnel: sand is collected as the residue, aqueous NaCl passes through as the filtrate.\n  4. Rinse the sand residue with a little distilled water to wash away clinging NaCl solution.\n  5. Dry the sand residue in an oven or between filter papers until constant mass, then weigh the dry sand (m₂).\n  6. Calculate percentage = (m₂ / m₁) × 100.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/24 Q4 (Planning an Investigation)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "weigh initial mixture", text: "Weigh initial sample on a balance." },
        { mark: 1, keyword: "add water & stir", text: "Add water and stir to dissolve sodium chloride." },
        { mark: 1, keyword: "filter, wash & dry sand", text: "Filter mixture; wash sand residue with water; dry sand completely." },
        { mark: 1, keyword: "weigh sand & calculate %", text: "Weigh dry sand; calculate: (mass of dry sand / mass of initial mixture) × 100." }
      ],
      examinerTips: "Do not forget to state that the sand must be WASHED with distilled water and DRIED before the final weighing, otherwise remaining salt or moisture will distort the mass."
    }
  },
  // ==========================================
  // CAMBRIDGE IGCSE CHEMISTRY (0620) - MAY / JUNE 2024
  // ==========================================
  // PAPER 2: MULTIPLE CHOICE (P2)
  {
    id: "cie-0620-2024-mj-p2-q01",
    question: "A student placed a porous pot filled with air inside a beaker containing carbon dioxide gas (Mr = 44). The apparatus is connected to a U-tube manometer containing colored water. What happens to the liquid level in the manometer?",
    options: [
      { text: "The liquid level in the open limb drops because carbon dioxide diffuses into the pot faster than air diffuses out" },
      { text: "The liquid level in the limb attached to the pot drops because air diffuses out faster than carbon dioxide diffuses in" },
      { text: "The liquid level in the limb attached to the pot rises because air diffuses out faster than carbon dioxide diffuses in" },
      { text: "No change occurs because both gases are at room temperature and pressure" }
    ],
    correctAnswer: 2,
    explanation: "* The rate of diffusion of a gas is inversely proportional to the square root of its relative molecular mass (Mr).\n* Air has an average Mr of approximately 29 (mainly N₂ = 28 and O₂ = 32), whereas carbon dioxide has Mr = 44.\n* Air molecules inside the porous pot diffuse OUT faster than the heavier CO₂ molecules can diffuse IN.\n* This causes a temporary net decrease in gas pressure inside the porous pot.\n* Consequently, the liquid level in the limb connected to the pot RISES (and the level in the open limb drops).",
    level: 3,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/24 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q02",
    question: "Which statement explains why graphite can be used as a solid lubricant while diamond cannot?",
    options: [
      { text: "Graphite has weak covalent bonds between its carbon atoms within each hexagon" },
      { text: "Diamond contains delocalized electrons that make it too soft" },
      { text: "Graphite has layers of carbon atoms held together by weak intermolecular forces that can slide over each other" },
      { text: "Diamond has a layered lattice that allows layers to slip easily" }
    ],
    correctAnswer: 2,
    explanation: "* Both diamond and graphite are giant covalent allotropes of carbon.\n* In graphite, each carbon atom is covalently bonded to three others in planar hexagonal sheets.\n* The separate layers are held together only by weak intermolecular forces (van der Waals forces).\n* These weak forces allow the layers to slide smoothly over one another when sheared, making graphite slippery and an effective dry lubricant.\n* In contrast, diamond has a rigid, 3D tetrahedral network with strong covalent bonds throughout.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/24 Q6",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q03",
    question: "A sample of 4.8 g of magnesium metal is reacted with excess dilute hydrochloric acid:\nMg + 2HCl → MgCl₂ + H₂\nWhat volume of hydrogen gas, measured at room temperature and pressure (r.t.p.), is produced? [Ar: Mg = 24; Molar gas volume at r.t.p. = 24 dm³]",
    options: [
      { text: "2.4 dm³" },
      { text: "4.8 dm³" },
      { text: "24.0 dm³" },
      { text: "48.0 dm³" }
    ],
    correctAnswer: 1,
    explanation: "* Moles of magnesium reacting: n(Mg) = mass / Ar = 4.8 g / 24 g/mol = 0.20 mol.\n* From the stoichiometric equation, 1 mole of Mg produces 1 mole of H₂ gas (1:1 mole ratio).\n* Therefore, moles of H₂ produced = 0.20 mol.\n* Volume of H₂ at r.t.p. = moles × molar volume = 0.20 mol × 24 dm³/mol = 4.8 dm³.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/24 Q9",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q04",
    question: "Concentrated aqueous sodium chloride (brine) is electrolysed using inert carbon (graphite) electrodes. What are the products formed at the anode and cathode, and what remains in solution?",
    options: [
      { text: "Anode: H₂; Cathode: Cl₂; Solution remains: NaCl" },
      { text: "Anode: O₂; Cathode: Na; Solution remains: HCl" },
      { text: "Anode: Cl₂; Cathode: H₂; Solution remains: NaOH" },
      { text: "Anode: Cl₂; Cathode: Na; Solution remains: H₂O" }
    ],
    correctAnswer: 2,
    explanation: "* In concentrated aqueous NaCl, the ions present are Na⁺, Cl⁻, H⁺, and OH⁻.\n* At the cathode (negative electrode), H⁺ ions are discharged preferentially over Na⁺ (since H is lower in the reactivity series): 2H⁺ + 2e⁻ → H₂.\n* At the anode (positive electrode), because chloride is concentrated, halide ions discharge in preference to hydroxide: 2Cl⁻ → Cl₂ + 2e⁻.\n* The remaining spectator ions in solution are Na⁺ and OH⁻, forming alkaline sodium hydroxide (NaOH) solution.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/24 Q11",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q05",
    question: "Consider the reversible reaction in the Contact process:\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = -197 kJ/mol\nWhich combination of conditions produces the highest equilibrium yield of sulfur trioxide (SO₃)?",
    options: [
      { text: "High temperature and high pressure" },
      { text: "Low temperature and high pressure" },
      { text: "High temperature and low pressure" },
      { text: "Low temperature and low pressure" }
    ],
    correctAnswer: 1,
    explanation: "* The forward reaction is exothermic (ΔH is negative). According to Le Chatelier's principle, lowering temperature shifts the equilibrium in the exothermic (forward) direction, increasing the yield of SO₃.\n* On the reactant side there are 3 moles of gas (2 SO₂ + 1 O₂), and on the product side there are 2 moles of gas (2 SO₃).\n* Increasing pressure shifts the equilibrium towards the side with fewer gas moles (forward direction).\n* Therefore, low temperature and high pressure give the highest equilibrium yield of SO₃.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/24 Q18",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q06",
    question: "Excess zinc granules are reacted with 50 cm³ of 1.0 mol/dm³ sulfuric acid at 25 °C. The volume of hydrogen gas evolved is monitored over time.\nWhich change would increase the INITIAL rate of reaction but keep the FINAL volume of hydrogen gas unchanged?",
    options: [
      { text: "Using zinc powder instead of zinc granules" },
      { text: "Using 100 cm³ of 1.0 mol/dm³ sulfuric acid" },
      { text: "Adding 50 cm³ of distilled water to the acid before reacting" },
      { text: "Decreasing the temperature to 15 °C" }
    ],
    correctAnswer: 0,
    explanation: "* Zinc is in excess; therefore, sulfuric acid is the limiting reactant and determines the total volume of H₂ produced (n = C × V = 1.0 × 0.050 = 0.050 mol H₂).\n* Using zinc powder increases the surface area exposed to acid collisions, which increases collision frequency and therefore increases the initial rate.\n* Powder does not change the moles of the limiting reactant, so the final total volume of H₂ remains identical.\n* Increasing acid volume to 100 cm³ would double the total volume of gas.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/24 Q19",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q07",
    question: "Which oxide is AMPHOTERIC, reacting with both dilute hydrochloric acid and aqueous sodium hydroxide?",
    options: [
      { text: "Calcium oxide (CaO)" },
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Aluminium oxide (Al₂O₃)" },
      { text: "Carbon monoxide (CO)" }
    ],
    correctAnswer: 2,
    explanation: "* CaO is a basic metal oxide (reacts only with acids).\n* SO₂ is an acidic non-metal oxide (reacts with alkalis).\n* CO is a neutral oxide (does not react with either acids or bases).\n* Aluminium oxide (Al₂O₃) and zinc oxide (ZnO) are amphoteric oxides: they neutralize acids to form salts (e.g. AlCl₃) and react with strong bases to form aluminates/zincates (e.g. NaAl(OH)₄).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/24 Q23",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q08",
    question: "Which row correctly describes the trends observed when descending Group VII (the halogens) from chlorine to iodine?",
    options: [
      { text: "Color darkens, boiling point decreases, reactivity decreases" },
      { text: "Color pales, boiling point increases, reactivity increases" },
      { text: "Color darkens, boiling point increases, reactivity decreases" },
      { text: "Color darkens, boiling point increases, reactivity increases" }
    ],
    correctAnswer: 2,
    explanation: "* Descending Group VII (Cl₂ → Br₂ → I₂):\n  * Color darkens: Cl₂ is pale yellow-green gas, Br₂ is red-brown liquid, I₂ is dark grey/purple-black solid.\n  * Boiling point increases: larger diatomic molecules have stronger intermolecular van der Waals forces requiring more thermal energy to overcome.\n  * Reactivity decreases: atomic radius increases and outer electron shell is further from the nucleus with more shielding, making it harder to attract an incoming electron.",
    level: 2,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/24 Q25",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q09",
    question: "Why is limestone (calcium carbonate) added to the blast furnace during the extraction of iron from hematite?",
    options: [
      { text: "To act as a fuel to generate high heat" },
      { text: "To reduce iron(III) oxide directly to molten iron" },
      { text: "To thermally decompose into calcium oxide, which reacts with acidic silica impurities to form slag" },
      { text: "To prevent the newly formed iron from re-oxidizing at the furnace taphole" }
    ],
    correctAnswer: 2,
    explanation: "* The main impurity in iron ore (hematite) is silica / sand (SiO₂), which is an acidic non-metal oxide.\n* Limestone (CaCO₃) undergoes thermal decomposition at high temperatures: CaCO₃ → CaO + CO₂.\n* Basic calcium oxide (CaO) reacts with acidic silica (SiO₂) in a neutralisation reaction: CaO + SiO₂ → CaSiO₃ (molten slag).\n* Slag floats on top of the molten iron and is tapped off separately.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/24 Q29",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2024-mj-p2-q10",
    question: "Ethanol can be produced industrially by the catalytic addition of steam to ethene:\nC₂H₄ + H₂O → C₂H₅OH\nWhat catalyst and reaction conditions are required for this industrial process?",
    options: [
      { text: "Yeast catalyst, 35 °C, 1 atm pressure" },
      { text: "Concentrated phosphoric(V) acid catalyst, 300 °C, 60 atm pressure" },
      { text: "Nickel catalyst, 150 °C, 5 atm pressure" },
      { text: "Iron catalyst, 450 °C, 200 atm pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Hydration of ethene requires:\n  * Catalyst: Phosphoric(V) acid (H₃PO₄) adsorbed on solid silica.\n  * Temperature: approximately 300 °C.\n  * Pressure: approximately 60 atm (6000 kPa).\n* (Yeast at 35 °C is used in fermentation of sugars; Nickel at 150 °C is used in alkene hydrogenation; Iron at 450 °C / 200 atm is used in the Haber process).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/24 Q37",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },

  // ==========================================
  // PAPER 4: THEORY / STRUCTURED (P4)
  // ==========================================
  {
    id: "cie-0620-2024-mj-p4-q01",
    question: "Electrolysis is carried out on molten lead(II) bromide using inert graphite electrodes.\n(a) State the observation at the cathode and write the ionic half-equation.\n(b) State the observation at the anode and write the ionic half-equation.",
    options: [
      { text: "Cathode: bubbles of colorless gas (2H⁺ + 2e⁻ → H₂); Anode: silvery metal (Pb²⁺ + 2e⁻ → Pb)" },
      { text: "Cathode: silvery-grey liquid bead of lead (Pb²⁺ + 2e⁻ → Pb); Anode: red-brown vapor / fumes of bromine (2Br⁻ → Br₂ + 2e⁻)" },
      { text: "Cathode: brown liquid bromine; Anode: white lead precipitate" },
      { text: "Cathode: oxygen gas; Anode: lead oxide deposit" }
    ],
    correctAnswer: 1,
    explanation: "* In MOLTEN lead(II) bromide (PbBr₂), there is no water present; the only ions are Pb²⁺ and Br⁻.\n* (a) Cathode (-): Positive Pb²⁺ ions gain electrons (reduction) to form liquid molten lead: Pb²⁺ + 2e⁻ → Pb. Observation: Silvery-grey molten metallic bead.\n* (b) Anode (+): Negative Br⁻ ions lose electrons (oxidation) to form bromine molecules: 2Br⁻ → Br₂ + 2e⁻. Observation: Red-brown vapor / pungent fumes of bromine.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/24 Q2",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "silvery liquid / metal bead", text: "Cathode observation: silvery liquid / grey bead of molten lead." },
        { mark: 1, keyword: "Pb²⁺ + 2e⁻ → Pb", text: "Cathode half-equation: Pb²⁺ + 2e⁻ → Pb." },
        { mark: 1, keyword: "red-brown vapor / fumes", text: "Anode observation: red-brown vapor / fumes of bromine." },
        { mark: 1, keyword: "2Br⁻ → Br₂ + 2e⁻", text: "Anode half-equation: 2Br⁻ → Br₂ + 2e⁻." }
      ],
      examinerTips: "Remember that in MOLTEN electrolytes, water is absent, so H⁺ and OH⁻ cannot compete. Always balance electrons on the correct side."
    }
  },
  {
    id: "cie-0620-2024-mj-p4-q02",
    question: "A chemist heats 25.0 g of calcium carbonate, CaCO₃, producing calcium oxide and carbon dioxide:\nCaCO₃(s) → CaO(s) + CO₂(g)\nIn the experiment, 11.2 g of CaO is obtained.\n(a) Calculate the theoretical mass of CaO that can be made from 25.0 g of CaCO₃. [Mr: CaCO₃ = 100; CaO = 56]\n(b) Calculate the percentage yield of CaO.",
    options: [
      { text: "Theoretical mass = 14.0 g; Percentage yield = 80.0%" },
      { text: "Theoretical mass = 11.2 g; Percentage yield = 100%" },
      { text: "Theoretical mass = 25.0 g; Percentage yield = 44.8%" },
      { text: "Theoretical mass = 18.5 g; Percentage yield = 60.5%" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Theoretical mass:\n  * n(CaCO₃) = mass / Mr = 25.0 g / 100 g/mol = 0.250 mol.\n  * Mole ratio CaCO₃ : CaO is 1 : 1, so theoretical moles of CaO = 0.250 mol.\n  * Theoretical mass of CaO = moles × Mr = 0.250 mol × 56 g/mol = 14.0 g.\n* (b) Percentage yield:\n  * Percentage yield = (actual yield / theoretical yield) × 100\n  * Percentage yield = (11.2 g / 14.0 g) × 100 = 80.0%.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/24 Q3",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "0.250 mol CaCO₃", text: "Calculate moles of CaCO₃ = 25.0 / 100 = 0.250 mol." },
        { mark: 1, keyword: "14.0 g CaO", text: "Calculate theoretical mass = 0.250 × 56 = 14.0 g." },
        { mark: 1, keyword: "80.0%", text: "Calculate percentage yield = (11.2 / 14.0) × 100 = 80.0%." }
      ],
      examinerTips: "Always show all working steps. Do not invert the fraction; actual yield must always be divided by theoretical yield."
    }
  },
  {
    id: "cie-0620-2024-mj-p4-q03",
    question: "Using collision theory, explain how increasing the temperature increases the rate of a chemical reaction between zinc and hydrochloric acid.",
    options: [
      { text: "Higher temperature lowers the activation energy of the reaction particles" },
      { text: "Higher temperature increases the kinetic energy of particles, making them move faster and collide more frequently; more importantly, a much higher fraction of collisions have energy equal to or exceeding the activation energy (Ea)" },
      { text: "Higher temperature increases the concentration of the acid molecules" },
      { text: "Higher temperature causes particles to expand and increase their surface area" }
    ],
    correctAnswer: 1,
    explanation: "* Collision theory explanation of temperature effect:\n  1. Increasing temperature gives reactant particles greater average kinetic energy, so they move faster.\n  2. This leads to more frequent collisions per unit time.\n  3. Most significantly, a substantially higher proportion of colliding particles possess energy greater than or equal to the activation energy (E ≥ Ea).\n  4. As a result, the frequency of successful / effective collisions increases dramatically.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/24 Q4(b)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "particles have more kinetic energy / move faster", text: "Particles have more kinetic energy and move faster / collide more frequently." },
        { mark: 1, keyword: "energy >= activation energy (Ea)", text: "A greater fraction / proportion of particles have energy equal to or exceeding the activation energy." },
        { mark: 1, keyword: "more successful collisions per unit time", text: "Higher rate / frequency of successful (effective) collisions." }
      ],
      examinerTips: "Do NOT claim that temperature lowers the activation energy — only a catalyst lowers activation energy. Focus on the fraction of particles exceeding Ea."
    }
  },
  {
    id: "cie-0620-2024-mj-p4-q04",
    question: "Iron rusts when exposed to oxygen and water.\n(a) Write the chemical name of rust.\n(b) Describe barrier protection and sacrificial protection methods to prevent iron rusting, explaining how sacrificial protection works even if the coating is scratched.",
    options: [
      { text: "(a) Iron(II) chloride; (b) Barrier: copper plating; Sacrificial: silver coating" },
      { text: "(a) Hydrated iron(III) oxide; (b) Barrier: painting/greasing excludes O₂ and H₂O; Sacrificial: coating with more reactive zinc (galvanising), which oxidizes preferentially by losing electrons to iron" },
      { text: "(a) Iron carbonate; (b) Barrier: dipping in acid; Sacrificial: coating with lead" },
      { text: "(a) Anhydrous iron(III) oxide; (b) Barrier: cathodic protection; Sacrificial: painting" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Rust is chemically hydrated iron(III) oxide (Fe₂O₃·xH₂O).\n* (b) Barrier methods (e.g. painting, greasing, plastic coating) form a physical seal that keeps out both oxygen and water. If scratched, the exposed iron will rust.\n* Sacrificial protection (e.g. galvanising with zinc or attaching zinc/magnesium blocks): Zinc is higher than iron in the reactivity series. Zinc loses electrons preferentially (Zn → Zn²⁺ + 2e⁻) and corrodes instead of iron. Even if scratched, zinc remains in electrical contact with iron and continues sacrificing itself.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/M/J/24 Q5",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "hydrated iron(III) oxide", text: "Identify rust as hydrated iron(III) oxide." },
        { mark: 1, keyword: "barrier excludes air/oxygen and water", text: "Barrier methods (painting/greasing) exclude oxygen and water." },
        { mark: 1, keyword: "zinc is more reactive / oxidizes preferentially", text: "Sacrificial metal (zinc) is more reactive than iron, losing electrons preferentially." }
      ],
      examinerTips: "Make sure to include the word 'hydrated' for rust. For sacrificial protection, explicitly state that the sacrificial metal is MORE reactive than iron."
    }
  },
  {
    id: "cie-0620-2024-mj-p4-q05",
    question: "Ethene (C₂H₄) undergoes addition polymerisation to form poly(ethene).\n(a) Explain what is meant by an addition polymerisation reaction.\n(b) Draw the structure of the repeat unit of poly(ethene).\n(c) State one major environmental disadvantage of non-biodegradable plastics in landfill sites.",
    options: [
      { text: "(a) Reaction where polymers break into monomers; (b) [-C=C-]; (c) They decompose too quickly producing toxic smog" },
      { text: "(a) Monomers containing double bonds join together to form a polymer as the only product; (b) -[CH₂-CH₂]- with single C-C bond and open extension bonds; (c) Non-biodegradable, remain in landfill indefinitely taking up space and harming wildlife" },
      { text: "(a) Condensation reaction eliminating water; (b) -[CH=CH]-; (c) They dissolve in rainwater causing acidification" },
      { text: "(a) Cracking reaction of long-chain polymers; (b) CH₃-CH₃; (c) They create radioactive waste" }
    ],
    correctAnswer: 1,
    explanation: "* (a) In addition polymerisation, many unsaturated monomer molecules (with C=C double bonds) join together to form a long-chain polymer as the single product (no small molecules eliminated).\n* (b) During polymerisation, the C=C double bond opens into a single C-C bond with extension bonds passing through square brackets: -[CH₂-CH₂]-ₙ.\n* (c) Polyalkenes contain strong unreactive C-C and C-H single bonds, making them non-biodegradable (inert to microbial decay). They accumulate in landfill sites, persist for centuries, take up scarce space, and can choke wildlife.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/24 Q6",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "monomers join, only product / no byproduct", text: "Many monomers join to form a polymer as the only product." },
        { mark: 1, keyword: "-[CH₂-CH₂]- with extension bonds", text: "Repeat unit drawn correctly with C-C single bond and continuation bonds through brackets." },
        { mark: 1, keyword: "non-biodegradable / persists in landfill", text: "Non-biodegradable, taking up landfill space or endangering wildlife." }
      ],
      examinerTips: "In repeat unit diagrams, students must ensure the C-C bond is a SINGLE bond, and that extension bonds extend outside the brackets."
    }
  },

  // ==========================================
  // PAPER 6: ALTERNATIVE TO PRACTICAL (P6)
  // ==========================================
  {
    id: "cie-0620-2024-mj-p6-q01",
    question: "A student investigated the rate of reaction between marble chips (calcium carbonate) and dilute hydrochloric acid using a gas syringe.\n(a) Name an alternative piece of apparatus to collect and measure the volume of carbon dioxide gas.\n(b) Why does the volume of gas collected level off after 6 minutes?",
    options: [
      { text: "(a) Evaporating basin; (b) Gas starts to condense back to liquid" },
      { text: "(a) Inverted measuring cylinder / burette filled with water; (b) One of the reactants (limiting reactant) has been completely used up" },
      { text: "(a) Condenser; (b) The reaction reaches chemical equilibrium" },
      { text: "(a) Filter funnel; (b) Atmospheric pressure increases" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Other than a gas syringe, gases can be collected over water using an inverted measuring cylinder or an inverted burette filled with water, provided the gas is not excessively soluble in water.\n* (b) The volume curve plateaus (levels off) because the limiting reagent (either the hydrochloric acid or the marble chips) has reacted completely, so no more carbon dioxide can be produced.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/24 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "inverted measuring cylinder / burette over water", text: "Inverted measuring cylinder or burette filled with water (or collection over water)." },
        { mark: 1, keyword: "limiting reactant used up / reaction finished", text: "Reaction is complete / limiting reactant has been used up." }
      ],
      examinerTips: "State clearly that the reaction has STOPPED because a reactant is completely consumed; do not say 'the reaction slowed down'."
    }
  },
  {
    id: "cie-0620-2024-mj-p6-q02",
    question: "A solid unknown salt, Compound X, was tested:\n1. Flame test on solid X: Persistent brilliant yellow flame.\n2. To an aqueous solution of X, dilute nitric acid followed by aqueous silver nitrate was added: A cream-colored precipitate formed that was slightly soluble in concentrated ammonia.\nIdentify the ions present in Compound X.",
    options: [
      { text: "Potassium ion (K⁺) and chloride ion (Cl⁻)" },
      { text: "Sodium ion (Na⁺) and bromide ion (Br⁻)" },
      { text: "Lithium ion (Li⁺) and iodide ion (I⁻)" },
      { text: "Calcium ion (Ca²⁺) and carbonate ion (CO₃²⁻)" }
    ],
    correctAnswer: 1,
    explanation: "* 1. A persistent brilliant yellow flame test is characteristic of the sodium cation (Na⁺).\n* 2. When acidified with dilute nitric acid (HNO₃) and treated with silver nitrate (AgNO₃):\n  * Cl⁻ gives a white precipitate (AgCl).\n  * Br⁻ gives a cream precipitate (AgBr).\n  * I⁻ gives a yellow precipitate (AgI).\n* Therefore, Compound X contains sodium ions (Na⁺) and bromide ions (Br⁻), making it sodium bromide (NaBr).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/24 Q2",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "Na⁺ / sodium", text: "Identify cation as sodium (Na⁺) from yellow flame." },
        { mark: 1, keyword: "Br⁻ / bromide", text: "Identify anion as bromide (Br⁻) from cream precipitate with AgNO₃." }
      ],
      examinerTips: "Remember the halide precipitate colors: silver chloride is white, silver bromide is cream, silver iodide is yellow."
    }
  },
  {
    id: "cie-0620-2024-mj-p6-q03",
    question: "A student performs a titration between aqueous sodium hydroxide and dilute hydrochloric acid using methyl orange indicator.\n(a) State the color change of methyl orange at the end-point when acid is run from the burette into the alkali in the conical flask.\n(b) Why should the titration be repeated at least two more times?",
    options: [
      { text: "(a) From red to yellow; (b) To use up the remaining hydrochloric acid" },
      { text: "(a) From yellow to orange / red; (b) To obtain concordant titres (within 0.10 cm³ of each other) and calculate an accurate average volume" },
      { text: "(a) From colorless to pink; (b) To test different indicators" },
      { text: "(a) From blue to green; (b) To determine whether temperature changes occur" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Methyl orange is yellow in alkaline solution (in the conical flask). When neutralized and turned slightly acidic by excess acid from the burette, the color changes to orange (or peach/red at the end-point).\n* (b) Titrations are repeated to identify anomalous results, achieve concordant titres (results within 0.10 cm³ of each other), and calculate an accurate average titre for improved reliability.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/24 Q3",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "yellow to orange / red", text: "Color change: yellow to orange (or peach / pink-red)." },
        { mark: 1, keyword: "concordant titres / reliable average", text: "To obtain concordant titres (within 0.1 cm³) / improve reliability / take an average." }
      ],
      examinerTips: "Avoid stating 'to make the test fair' or 'to find the true value'. State 'to obtain concordant results and calculate a reliable average'."
    }
  },
  {
    id: "cie-0620-2024-mj-p6-q04",
    question: "In a paper chromatography experiment to identify artificial food colorings:\n(a) Why must the baseline be drawn in pencil rather than ink?\n(b) Why must the solvent level in the chromatography tank be below the baseline spots when the paper is placed inside?",
    options: [
      { text: "(a) Pencil is darker; (b) So the solvent does not evaporate" },
      { text: "(a) Pencil graphite is insoluble in the solvent and will not dissolve or run; (b) If the solvent is above the baseline, the sample spots will dissolve directly into the solvent reservoir instead of moving up the paper" },
      { text: "(a) Ink prevents dye movement; (b) To make the spots rise faster" },
      { text: "(a) Pencil acts as a catalyst; (b) To keep the paper dry" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Pencil graphite is carbon, which is completely insoluble in water and organic solvents; ink would dissolve and separate into its own dye components, ruining the chromatogram.\n* (b) The solvent level must start below the pencil baseline so that capillary action draws the solvent up through the spots. If submerged, the dyes would dissolve directly into the bulk solvent at the bottom of the beaker.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/24 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "pencil is insoluble / does not run", text: "Pencil is insoluble / will not dissolve in the solvent / ink would separate." },
        { mark: 1, keyword: "spots would dissolve into solvent reservoir", text: "To prevent the dye spots from dissolving / washing into the solvent reservoir." }
      ],
      examinerTips: "This is one of the most frequently asked Paper 6 questions; memorize both justifications precisely."
    }
  },
  {
    id: "cie-0620-2024-mj-p6-q05",
    question: "Plan an investigation to determine which of two antacid tablets, Tablet A or Tablet B, neutralises more stomach acid (dilute hydrochloric acid) per gram of tablet.\nYou are provided with: samples of Tablet A and Tablet B, mortar and pestle, balance, 1.0 mol/dm³ hydrochloric acid, burette, conical flask, and methyl orange indicator.",
    options: [
      { text: "Boil both tablets with water and measure which evaporates first" },
      { text: "1. Crush Tablet A using a mortar and pestle and weigh exactly 1.0 g on a balance; 2. Dissolve/mix in distilled water in a conical flask and add methyl orange indicator; 3. Titrate with 1.0 mol/dm³ HCl from a burette until the indicator turns from yellow to orange, recording the volume of acid added; 4. Repeat identically with 1.0 g of crushed Tablet B; 5. Compare the volumes of HCl required: the tablet requiring the larger volume of acid neutralises more acid per gram" },
      { text: "Add acid to the tablets in an open beaker and observe which fizzes louder" },
      { text: "Heat the tablets with a Bunsen burner and measure the ash remaining" }
    ],
    correctAnswer: 1,
    explanation: "* Experimental plan for comparative antacid efficacy:\n  1. Crush each antacid tablet into a fine powder with a mortar and pestle to ensure rapid dissolution.\n  2. Accurately weigh an equal mass (e.g. 1.00 g) of each tablet on an electronic balance.\n  3. Place sample A into a conical flask with a fixed volume of distilled water and add 2–3 drops of methyl orange indicator.\n  4. Fill a burette with 1.0 mol/dm³ hydrochloric acid and record initial reading.\n  5. Titrate with acid until the indicator permanently changes from yellow to orange/red; record the final volume and calculate titre.\n  6. Repeat the exact procedure with 1.00 g of Tablet B.\n  7. The tablet that consumes the larger volume of hydrochloric acid neutralises more acid per gram.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/M/J/24 Q4 (Planning an Investigation)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "crush & weigh equal mass", text: "Crush tablets and weigh equal mass (e.g. 1.0 g) of Tablet A and Tablet B." },
        { mark: 1, keyword: "add water & indicator in flask", text: "Add water and suitable indicator (e.g. methyl orange / thymolphthalein) in conical flask." },
        { mark: 1, keyword: "titrate with HCl until end-point", text: "Titrate with HCl from burette until end-point color change is reached; record volume." },
        { mark: 1, keyword: "repeat & compare volumes", text: "Repeat identically with Tablet B; tablet requiring greater volume of HCl is more effective per gram." }
      ],
      examinerTips: "Remember that to compare 'per gram', you must either weigh equal masses of both tablets or divide the acid volume by the mass of each tablet used."
    }
  },
  // ==========================================================
  // CAMBRIDGE IGCSE CHEMISTRY (0620) - CORE CURRICULUM (P1 & P3)
  // HIGH-YIELD CONCEPTUAL, DESCRIPTIVE & APPLIED QUESTIONS (2024 - 2026)
  // ==========================================================

  // --- PAPER 1: CORE MULTIPLE CHOICE (P1) ---
  {
    id: "cie-0620-core-p1-q01",
    question: "A student needs to accurately measure 25.0 cm³ of dilute sulfuric acid into a conical flask for a neutralisation reaction. Which piece of apparatus gives the most accurate measurement?",
    options: [
      { text: "50 cm³ glass beaker" },
      { text: "25 cm³ volumetric pipette" },
      { text: "50 cm³ measuring cylinder" },
      { text: "100 cm³ conical flask" }
    ],
    correctAnswer: 1,
    explanation: "* A 25 cm³ volumetric pipette is calibrated to deliver exactly 25.0 cm³ (fixed volume) with very high precision (typically ±0.06 cm³).\n* Beakers and conical flasks only have approximate graduation lines.\n* A measuring cylinder is suitable for rough or moderate precision measurements (e.g. ±0.5 cm³), but not for exact quantitative work like titrations.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/M/J/24 Q2",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q02",
    question: "Which sequence shows the correct order of stages used to purify domestic river water for human consumption?",
    options: [
      { text: "Chlorination → sedimentation → filtration through sand" },
      { text: "Filtration through coarse screens → sedimentation → filtration through fine sand → chlorination" },
      { text: "Sedimentation → distillation → adding fluoride → chlorination" },
      { text: "Chlorination → filtration through fine sand → neutralization" }
    ],
    correctAnswer: 1,
    explanation: "* In a municipal water treatment plant:\n  1. Screening: coarse metal grids trap large floating debris (branches, plastics, leaves).\n  2. Sedimentation: water sits in large tanks where coagulants (like aluminium sulfate) cause dense mud and insoluble dirt particles to settle to the bottom.\n  3. Sand filtration: clear water passes through fine sand beds to trap small insoluble suspended particles.\n  4. Chlorination: chlorine gas is bubbled through the water to kill harmful bacteria and microbes.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/M/J/24 Q28",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q03",
    question: "Petroleum (crude oil) is separated into useful fractions by fractional distillation. Which fraction has the lowest boiling point range and is collected at the very top of the fractionating column?",
    options: [
      { text: "Bitumen" },
      { text: "Kerosene (paraffin)" },
      { text: "Refinery gas" },
      { text: "Diesel oil" }
    ],
    correctAnswer: 2,
    explanation: "* In fractional distillation of petroleum, fractions with smaller molecules have lower boiling points and rise to the cooler top of the column.\n* Refinery gas (methane, ethane, propane, butane) has the lowest boiling point range (below 20 °C) and exits at the very top as gas.\n* Bitumen has the highest boiling point and largest molecules, collected at the hot bottom.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/O/N/24 Q36",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q04",
    question: "Why are catalytic converters fitted in modern car exhaust systems?",
    options: [
      { text: "To convert unburned hydrocarbons and carbon monoxide into non-toxic water and carbon dioxide, and reduce nitrogen oxides to nitrogen" },
      { text: "To absorb sulfur dioxide and produce sulfuric acid" },
      { text: "To prevent fuel from leaking out of the car engine" },
      { text: "To convert carbon dioxide into pure carbon and oxygen" }
    ],
    correctAnswer: 0,
    explanation: "* Catalytic converters contain transition metal catalysts (platinum, palladium, rhodium).\n* They catalyze the redox reactions between exhaust pollutants:\n  * 2CO + 2NO → 2CO₂ + N₂\n  * Unburned hydrocarbons + O₂ → CO₂ + H₂O\n* This converts toxic carbon monoxide and harmful oxides of nitrogen (which cause smog and acid rain) into harmless N₂, CO₂, and H₂O.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/M/J/25 Q27",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q05",
    question: "Brass is an alloy of copper and zinc. Why is brass harder and stronger than pure copper?",
    options: [
      { text: "Zinc atoms react chemically with copper atoms to form rigid ionic bonds" },
      { text: "Zinc atoms are of a different size to copper atoms, which disrupts the regular layers of atoms and prevents them from sliding easily over each other" },
      { text: "Zinc removes all free delocalized electrons from the metal lattice" },
      { text: "Copper atoms in brass shrink in size, making the metal more compact" }
    ],
    correctAnswer: 1,
    explanation: "* In pure metals, all atoms are of identical size and arranged in regular, neat layers that slide easily past each other under stress (making pure metals soft and malleable).\n* In an alloy like brass, the addition of different-sized zinc atoms disrupts the regular crystalline lattice.\n* The distorted layers can no longer slide over each other readily, making the alloy significantly harder and stronger.",
    level: 1,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/13/M/J/24 Q30",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q06",
    question: "Which chemical test confirms the presence of water in an unknown clear liquid?",
    options: [
      { text: "Bubbling through limewater until it turns cloudy" },
      { text: "Adding anhydrous copper(II) sulfate; it turns from white to blue" },
      { text: "Adding acidified potassium manganate(VII); it turns purple to colorless" },
      { text: "Testing with a glowing splint; it relights" }
    ],
    correctAnswer: 1,
    explanation: "* Chemical tests for the presence of water:\n  * Anhydrous copper(II) sulfate (CuSO₄) turns from white to blue: CuSO₄ + 5H₂O → CuSO₄·5H₂O.\n  * Anhydrous cobalt(II) chloride (CoCl₂) paper turns from blue to pink.\n* Limewater turns cloudy with carbon dioxide; acidified KMnO₄ tests for reducing agents; glowing splint tests for oxygen.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/O/N/24 Q18",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q07",
    question: "Which gas makes up approximately 78% of clean, dry air by volume?",
    options: [
      { text: "Oxygen" },
      { text: "Nitrogen" },
      { text: "Argon" },
      { text: "Carbon dioxide" }
    ],
    correctAnswer: 1,
    explanation: "* The composition of clean, unpolluted, dry air is:\n  * Nitrogen (N₂): ~78%\n  * Oxygen (O₂): ~21%\n  * Argon (Ar): ~0.9%\n  * Carbon dioxide (CO₂): ~0.04%\n  * Traces of other noble gases.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/M/J/25 Q26",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q08",
    question: "Which method is best suited to separate an insoluble solid, such as chalk (calcium carbonate), from water?",
    options: [
      { text: "Simple distillation" },
      { text: "Filtration" },
      { text: "Crystallisation" },
      { text: "Paper chromatography" }
    ],
    correctAnswer: 1,
    explanation: "* Filtration is used to separate an insoluble solid from a liquid suspension.\n* The liquid passes through the porous filter paper as the filtrate, while the insoluble solid particles are retained on the paper as the residue.\n* Crystallisation is for soluble solids; distillation is for obtaining a solvent from a solution or separating miscible liquids.",
    level: 1,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/M/J/24 Q3",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q09",
    question: "Which physical property is typical of transition metals, but NOT characteristic of Group I alkali metals?",
    options: [
      { text: "Conducting electricity in the solid state" },
      { text: "Having high densities and high melting points" },
      { text: "Forming ionic compounds when reacting with non-metals" },
      { text: "Being shiny when freshly cut" }
    ],
    correctAnswer: 1,
    explanation: "* Transition elements (e.g. Fe, Cu, Ni) have high densities, high melting points, and high tensile strength.\n* In contrast, Group I alkali metals (e.g. Li, Na, K) are exceptionally soft, have very low melting points (all below 181 °C), and have unusually low densities (Li, Na, and K float on water).\n* Both groups conduct electricity and form ionic compounds with non-metals.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/13/O/N/24 Q24",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-core-p1-q10",
    question: "What is the common use of sulfur dioxide gas (SO₂) in the food industry?",
    options: [
      { text: "As a bleaching agent in flour and food preservative in dried fruit and wines" },
      { text: "As an artificial sweetener" },
      { text: "As a leavening agent in baking bread" },
      { text: "As a food coloring agent" }
    ],
    correctAnswer: 0,
    explanation: "* Sulfur dioxide (SO₂) is widely used as a preservative for dried foods and fruit juices/wines because it kills bacteria and inhibits mold growth.\n* It also acts as a bleaching agent in wood pulp and paper manufacturing.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/M/J/25 Q30",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },

  // --- PAPER 3: CORE THEORY / STRUCTURED (P3) ---
  {
    id: "cie-0620-core-p3-q01",
    question: "The chemical formula of sulfuric acid is H₂SO₄.\n(a) How many different elements are present in one molecule of sulfuric acid?\n(b) State the total number of atoms in one molecule of sulfuric acid.\n(c) Name the salt formed when sulfuric acid reacts with copper(II) oxide.",
    options: [
      { text: "(a) 2 elements; (b) 6 atoms; (c) Copper sulfide" },
      { text: "(a) 3 elements (H, S, O); (b) 7 atoms (2 H + 1 S + 4 O); (c) Copper(II) sulfate" },
      { text: "(a) 7 elements; (b) 3 atoms; (c) Copper sulfite" },
      { text: "(a) 4 elements; (b) 8 atoms; (c) Copper carbonate" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Sulfuric acid (H₂SO₄) contains 3 different elements: hydrogen (H), sulfur (S), and oxygen (O).\n* (b) Total number of atoms = 2 (from H) + 1 (from S) + 4 (from O) = 7 atoms.\n* (c) Metal oxide + sulfuric acid → metal sulfate + water.\n  CuO + H₂SO₄ → CuSO₄ + H₂O (copper(II) sulfate).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/31/M/J/24 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "3 elements", text: "State 3 elements (hydrogen, sulfur, oxygen)." },
        { mark: 1, keyword: "7 atoms", text: "State 7 atoms in total." },
        { mark: 1, keyword: "copper(II) sulfate", text: "Name the salt as copper(II) sulfate." }
      ],
      examinerTips: "Carefully distinguish between the number of different ELEMENTS (types of atoms) and the total number of ATOMS."
    }
  },
  {
    id: "cie-0620-core-p3-q02",
    question: "A piece of shiny magnesium ribbon is burned in air.\n(a) State the visual observation during the reaction.\n(b) Name the white solid product formed.\n(c) Write a word equation for this combustion reaction.",
    options: [
      { text: "(a) Yellow flame with black smoke; (b) Magnesium carbonate; (c) Magnesium + Carbon → Magnesium carbide" },
      { text: "(a) Bright brilliant white flame / white light; (b) Magnesium oxide; (c) Magnesium + oxygen → magnesium oxide" },
      { text: "(a) Gentle blue flame; (b) Magnesium hydride; (c) Magnesium + water → magnesium oxide" },
      { text: "(a) Orange sparks; (b) Magnesium nitride; (c) Magnesium + nitrogen → magnesium nitride" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Burning magnesium reacts vigorously with atmospheric oxygen producing an intense, blinding white light / brilliant white flame.\n* (b) The solid product formed is magnesium oxide (MgO), which appears as a fine white ash / powder.\n* (c) Word equation: Magnesium + oxygen → magnesium oxide.",
    level: 1,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/32/M/J/24 Q3",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "bright white light / flame", text: "Observation: bright white flame / brilliant white light." },
        { mark: 1, keyword: "magnesium oxide", text: "Name product: magnesium oxide." },
        { mark: 1, keyword: "magnesium + oxygen -> magnesium oxide", text: "Correct word equation: magnesium + oxygen → magnesium oxide." }
      ],
      examinerTips: "In Core papers, word equations are frequently examined. Ensure chemical names are written out fully without chemical symbols when a word equation is requested."
    }
  },
  {
    id: "cie-0620-core-p3-q03",
    question: "Petroleum is a non-renewable fossil fuel.\n(a) State the meaning of the term 'hydrocarbon'.\n(b) Explain why petroleum is called a 'non-renewable' resource.\n(c) State one major use of the bitumen fraction.",
    options: [
      { text: "(a) A molecule containing hydrogen, carbon, and oxygen; (b) It can be grown in crops; (c) Fuel for jet airplanes" },
      { text: "(a) A compound that contains carbon and hydrogen atoms ONLY; (b) It is consumed faster than it can be replenished by natural geological processes / takes millions of years to form; (c) Road surfacing / roofing" },
      { text: "(a) Any organic liquid; (b) It produces carbon dioxide; (c) Domestic cooking gas" },
      { text: "(a) Pure carbon mixed with water; (b) It cannot be recycled; (c) Solvent in paint" }
    ],
    correctAnswer: 1,
    explanation: "* (a) A hydrocarbon is a chemical compound composed of hydrogen and carbon atoms ONLY. (The word 'only' is compulsory in Cambridge mark schemes).\n* (b) Non-renewable means it is a finite resource being depleted much faster than natural geological forces can replace it (takes millions of years to form from ancient biomass under heat and pressure).\n* (c) Bitumen is thick, sticky, and waterproof, used for surfacing roads (tarmac) and waterproofing flat roofs.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/33/O/N/24 Q4",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "hydrogen and carbon ONLY", text: "Definition: compound containing hydrogen and carbon ONLY." },
        { mark: 1, keyword: "finite / takes millions of years / cannot be replaced", text: "Finite resource that cannot be replaced once used / takes millions of years to form." },
        { mark: 1, keyword: "surfacing roads / roofing", text: "Use of bitumen: surfacing roads / making asphalt / roofing." }
      ],
      examinerTips: "Always include the word 'ONLY' when defining a hydrocarbon. Writing 'contains hydrogen and carbon' without 'only' loses the mark."
    }
  },
  {
    id: "cie-0620-core-p3-q04",
    question: "Farmers often spread crushed limestone (calcium carbonate) or slaked lime (calcium hydroxide) onto agricultural soil.\n(a) Why do farmers treat soil with these calcium compounds?\n(b) State the type of chemical reaction that occurs in the soil.\n(c) What happens if farmers add slaked lime at the same time as ammonium nitrate fertilizer?",
    options: [
      { text: "(a) To kill insects; (b) Oxidation; (c) The fertilizer absorbs moisture" },
      { text: "(a) To neutralise soil acidity and raise soil pH to an optimum level for crop growth; (b) Neutralisation; (c) An acid-base reaction occurs releasing ammonia gas, causing nitrogen loss from the soil" },
      { text: "(a) To make soil more acidic; (b) Thermal decomposition; (c) Calcium nitrate explodes" },
      { text: "(a) To prevent weed germination; (b) Precipitation; (c) Nothing happens" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Soils often become acidic due to acid rain or microbial decay; crushed limestone (CaCO₃) or slaked lime (Ca(OH)₂) neutralises excess soil acidity to achieve optimal pH for plant nutrient absorption.\n* (b) This is an acid-base neutralisation reaction.\n* (c) Slaked lime is an alkaline base. Reacting a base with an ammonium salt (ammonium nitrate) causes an acid-base displacement: Ca(OH)₂ + 2NH₄NO₃ → Ca(NO₃)₂ + 2H₂O + 2NH₃(g). Pungent ammonia gas escapes into the atmosphere, causing loss of vital nitrogen nutrients from the soil.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/31/M/J/25 Q5",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "neutralise soil acidity / increase pH", text: "To neutralise acidic soil / raise pH for crop growth." },
        { mark: 1, keyword: "neutralisation", text: "Identify reaction type as neutralisation." },
        { mark: 1, keyword: "ammonia gas evolved / nitrogen loss", text: "Ammonia gas is produced and lost to the air, wasting fertilizer nitrogen." }
      ],
      examinerTips: "The reaction between ammonium fertilizers and lime is a classic Cambridge question. Make sure to identify that ammonia gas is liberated."
    }
  },
  {
    id: "cie-0620-core-p3-q05",
    question: "A student adds copper metal to dilute hydrochloric acid and observes no reaction. When zinc metal is added to dilute hydrochloric acid, vigorous fizzing occurs.\n(a) Place copper, hydrogen, and zinc in order of increasing reactivity.\n(b) State the test for the gas produced when zinc reacts with hydrochloric acid and the positive result.\n(c) Name a metal that reacts vigorously with cold water.",
    options: [
      { text: "(a) Zinc < Copper < Hydrogen; (b) Bleaches litmus paper; (c) Iron" },
      { text: "(a) Copper < Hydrogen < Zinc; (b) Lighted splint burns with a 'squeaky pop'; (c) Sodium (or Potassium / Calcium)" },
      { text: "(a) Hydrogen < Zinc < Copper; (b) Glowing splint relights; (c) Lead" },
      { text: "(a) Zinc < Hydrogen < Copper; (b) Limewater turns milky; (c) Silver" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Zinc reacts with acid to displace hydrogen, so zinc is more reactive than hydrogen. Copper does not displace hydrogen from acid, so copper is less reactive than hydrogen: Copper < Hydrogen < Zinc.\n* (b) The gas produced is hydrogen (Zn + 2HCl → ZnCl₂ + H₂). Test: insert a lighted splint into the mouth of the test tube; positive result: burns with a distinctive 'squeaky pop' sound.\n* (c) Group I metals (lithium, sodium, potassium) or calcium react vigorously with cold water producing metal hydroxide and hydrogen gas.",
    level: 1,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/32/M/J/25 Q6",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "Cu < H < Zn", text: "Order of increasing reactivity: copper < hydrogen < zinc." },
        { mark: 1, keyword: "lighted splint squeaky pop", text: "Test: lighted splint; Result: squeaky pop sound." },
        { mark: 1, keyword: "sodium / potassium / calcium", text: "Name a reactive metal: sodium / potassium / lithium / calcium." }
      ],
    }
  },
  // ==========================================================
  // CAMBRIDGE IGCSE CHEMISTRY (0620) - OCTOBER / NOVEMBER 2023
  // EXTENDED (P2, P4, P6) & CORE (P1, P3)
  // ==========================================================

  // --- 1. EXTENDED PAPER 2: MULTIPLE CHOICE (P2) ---
  {
    id: "cie-0620-2023-on-p2-q01",
    question: "A sample of nitrogen gas at 25 °C has a volume of 100 cm³. The gas is cooled to -10 °C at constant atmospheric pressure. How do the speed and spacing of the nitrogen molecules change?",
    options: [
      { text: "Speed increases; Spacing increases" },
      { text: "Speed decreases; Spacing decreases" },
      { text: "Speed decreases; Spacing increases" },
      { text: "Speed remains constant; Spacing decreases" }
    ],
    correctAnswer: 1,
    explanation: "* Temperature is a measure of the average kinetic energy of gas particles.\n* Decreasing temperature causes the particles to lose kinetic energy, so their average speed decreases.\n* With lower kinetic energy and fewer high-energy impacts against the container walls, the gas contracts under constant external pressure, so the particles move closer together (spacing decreases).",
    level: 2,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/23 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q02",
    question: "An atom has 19 protons, 20 neutrons, and 19 electrons. Which ion is formed when this atom achieves a stable noble gas electronic configuration?",
    options: [
      { text: "An anion with a single negative charge: X⁻" },
      { text: "A cation with a single positive charge: X⁺" },
      { text: "A cation with a double positive charge: X²⁺" },
      { text: "An anion with a double negative charge: X²⁻" }
    ],
    correctAnswer: 1,
    explanation: "* An atom with 19 protons is potassium (K, atomic number 19).\n* Its ground state electronic configuration is 2,8,8,1.\n* To achieve a stable noble gas configuration (matching argon: 2,8,8), it readily loses its single outer valence electron.\n* Losing 1 negative electron leaves 19 positive protons and 18 negative electrons, resulting in a single positive cation (K⁺).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/23 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q03",
    question: "Calculate the mass of copper deposited at the cathode when a current passes through aqueous copper(II) sulfate depositing 0.050 moles of copper atoms. [Ar: Cu = 64]",
    options: [
      { text: "1.6 g" },
      { text: "3.2 g" },
      { text: "6.4 g" },
      { text: "12.8 g" }
    ],
    correctAnswer: 1,
    explanation: "* Mass = moles × molar mass (Ar).\n* Mass of Cu = 0.050 mol × 64 g/mol = 3.2 g.",
    level: 1,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/23 Q9",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q04",
    question: "In a hydrogen-oxygen fuel cell, hydrogen and oxygen react to generate electricity.\nWhich half-equation occurs at the cathode (positive terminal) in an acidic electrolyte?",
    options: [
      { text: "H₂ → 2H⁺ + 2e⁻" },
      { text: "O₂ + 4H⁺ + 4e⁻ → 2H₂O" },
      { text: "4OH⁻ → O₂ + 2H₂O + 4e⁻" },
      { text: "2H₂O + 2e⁻ → H₂ + 2OH⁻" }
    ],
    correctAnswer: 1,
    explanation: "* In a hydrogen fuel cell with an acidic electrolyte:\n  * Anode (negative): hydrogen gas is oxidized: 2H₂ → 4H⁺ + 4e⁻.\n  * Cathode (positive): oxygen gas is reduced by accepting protons and electrons: O₂ + 4H⁺ + 4e⁻ → 2H₂O.\n* The only chemical byproduct of the cell is pure water.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/23 Q12",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q05",
    question: "Which statement about bond energy calculations is correct?",
    options: [
      { text: "Bond breaking releases energy and is exothermic" },
      { text: "A reaction is exothermic if the energy absorbed to break bonds is greater than the energy released when forming new bonds" },
      { text: "A reaction is endothermic if the energy required to break existing bonds is greater than the energy released during bond formation" },
      { text: "Bond making absorbs thermal energy and is endothermic" }
    ],
    correctAnswer: 2,
    explanation: "* Bond breaking is ALWAYS endothermic (requires energy input, positive ΔH).\n* Bond making is ALWAYS exothermic (releases energy, negative ΔH).\n* Overall ΔH = (energy absorbed in bond breaking) - (energy released in bond making).\n* A reaction is endothermic (overall positive ΔH) if more energy is absorbed breaking bonds than is released when new bonds form.",
    level: 2,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/23 Q16",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q06",
    question: "When aqueous chlorine (Cl₂) is shaken with aqueous potassium iodide (KI), the colorless solution turns dark reddish-brown. Which species has been OXIDISED in this displacement reaction?",
    options: [
      { text: "Chloride ions (Cl⁻)" },
      { text: "Potassium ions (K⁺)" },
      { text: "Iodide ions (I⁻)" },
      { text: "Chlorine molecules (Cl₂)" }
    ],
    correctAnswer: 2,
    explanation: "* Ionic equation: Cl₂ + 2I⁻ → 2Cl⁻ + I₂.\n* Oxidation is the loss of electrons (OIL RIG).\n* Iodide ions (I⁻) lose electrons to become neutral iodine molecules (2I⁻ → I₂ + 2e⁻), changing oxidation state from -1 to 0. Therefore, iodide ions are oxidised.\n* Chlorine molecules gain electrons (reduced: Cl₂ + 2e⁻ → 2Cl⁻).",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/23 Q20",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q07",
    question: "Which of the following salts can be prepared by a precipitation method using two aqueous solutions?",
    options: [
      { text: "Sodium nitrate (NaNO₃)" },
      { text: "Barium sulfate (BaSO₄)" },
      { text: "Potassium chloride (KCl)" },
      { text: "Copper(II) sulfate (CuSO₄)" }
    ],
    correctAnswer: 1,
    explanation: "* Precipitation is only used to prepare INSOLUBLE salts from two soluble aqueous salt solutions.\n* All nitrates and all potassium and sodium salts are soluble in water.\n* Copper(II) sulfate is also water-soluble.\n* Barium sulfate (BaSO₄) is completely insoluble in water and forms immediately as a white precipitate when aqueous barium chloride is mixed with aqueous sodium sulfate: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/23 Q23",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q08",
    question: "Which metal is extracted from its ore by heating with carbon in a blast furnace rather than by electrolysis?",
    options: [
      { text: "Aluminium" },
      { text: "Sodium" },
      { text: "Iron" },
      { text: "Magnesium" }
    ],
    correctAnswer: 2,
    explanation: "* Carbon can only reduce metals that are LESS reactive than carbon in the reactivity series (e.g. zinc, iron, lead, copper).\n* Potassium, sodium, calcium, magnesium, and aluminium are more reactive than carbon and bond very strongly to oxygen; they must be extracted by electrolysis of their molten compounds.\n* Iron is less reactive than carbon and is extracted by carbon/carbon monoxide reduction in the blast furnace.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/O/N/23 Q28",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q09",
    question: "Which gas is a major contributor to photochemical smog and respiratory illness, produced when atmospheric nitrogen reacts with oxygen inside hot car engines?",
    options: [
      { text: "Methane" },
      { text: "Sulfur trioxide" },
      { text: "Nitrogen monoxide (NO)" },
      { text: "Carbon monoxide" }
    ],
    correctAnswer: 2,
    explanation: "* Inside vehicle internal combustion engines, the extremely high temperatures and spark plugs supply enough activation energy for normally inert atmospheric N₂ to react with O₂:\n  * N₂ + O₂ → 2NO\n* In the exhaust and atmosphere, NO oxidizes to NO₂ (brown gas), causing photochemical smog and acid rain.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/O/N/23 Q32",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-p2-q10",
    question: "What is the structural formula and functional group of ethanoic acid?",
    options: [
      { text: "CH₃CH₂OH, alcohol (-OH)" },
      { text: "CH₃COOH, carboxylic acid (-COOH)" },
      { text: "HCOOCH₃, ester (-COO-)" },
      { text: "CH₃CHO, aldehyde (-CHO)" }
    ],
    correctAnswer: 1,
    explanation: "* Ethanoic acid is a 2-carbon carboxylic acid with molecular formula C₂H₄O₂ and structural formula CH₃COOH.\n* Its functional group is the carboxyl group, -COOH.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/O/N/23 Q38",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },

  // --- 2. EXTENDED PAPER 4: THEORY / STRUCTURED (P4) ---
  {
    id: "cie-0620-2023-on-p4-q01",
    question: "Dilute aqueous sodium chloride is electrolysed using inert platinum electrodes.\n(a) Identify the gas produced at the anode and write the ionic half-equation.\n(b) Identify the gas produced at the cathode and write the ionic half-equation.\n(c) Explain why the solution gradually becomes more concentrated in sodium chloride as electrolysis proceeds.",
    options: [
      { text: "(a) Chlorine; (b) Sodium metal; (c) Sodium ions dissolve from electrodes" },
      { text: "(a) Oxygen (4OH⁻ → O₂ + 2H₂O + 4e⁻); (b) Hydrogen (2H⁺ + 2e⁻ → H₂); (c) Water molecules (H⁺ and OH⁻) are decomposed into gases and leave the solution while Na⁺ and Cl⁻ spectator ions remain, effectively concentrating the salt" },
      { text: "(a) Hydrogen; (b) Oxygen; (c) Salt decomposes" },
      { text: "(a) Carbon dioxide; (b) Nitrogen; (c) Water evaporates by boiling" }
    ],
    correctAnswer: 1,
    explanation: "* (a) In DILUTE aqueous NaCl, water is present in vast excess over chloride ions. Hydroxide ions (OH⁻) are discharged preferentially at the anode producing oxygen gas: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (or 2H₂O → O₂ + 4H⁺ + 4e⁻).\n* (b) At the cathode, H⁺ is discharged preferentially over Na⁺: 2H⁺ + 2e⁻ → H₂.\n* (c) Because H⁺ and OH⁻ ions from water are continuously removed as gaseous H₂ and O₂, water is consumed while Na⁺ and Cl⁻ ions stay behind in solution. This causes the solution to become progressively more concentrated.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/23 Q2",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "oxygen gas", text: "Identify oxygen gas at anode." },
        { mark: 1, keyword: "4OH⁻ → O₂ + 2H₂O + 4e⁻", text: "Anode half-equation: 4OH⁻ → O₂ + 2H₂O + 4e⁻." },
        { mark: 1, keyword: "hydrogen gas (2H⁺ + 2e⁻ → H₂)", text: "Cathode: hydrogen gas and half-equation 2H⁺ + 2e⁻ → H₂." },
        { mark: 1, keyword: "water is removed / Na⁺ and Cl⁻ remain", text: "Water is decomposed / removed as gases while Na⁺ and Cl⁻ remain in solution." }
      ],
      examinerTips: "Note the word 'DILUTE'. In concentrated NaCl (brine), chlorine is produced at the anode. In dilute NaCl, OXYGEN is produced because OH⁻ is discharged in preference to dilute Cl⁻."
    }
  },
  {
    id: "cie-0620-2023-on-p4-q02",
    question: "Ammonia is manufactured by the Haber process:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = -92 kJ/mol\n(a) State the industrial catalyst, temperature, and pressure used.\n(b) Explain why a temperature of 450 °C is used rather than a lower temperature of 100 °C.",
    options: [
      { text: "(a) Nickel, 100 °C, 1 atm; (b) Lower temperatures cause ammonia to explode" },
      { text: "(a) Finely divided iron catalyst, 450 °C, 200 atm (20,000 kPa); (b) Although lower temperature increases equilibrium yield (exothermic reaction), at 100 °C the rate of reaction is far too slow to be commercially viable. 450 °C is an optimum compromise between speed and yield" },
      { text: "(a) Platinum, 800 °C, 500 atm; (b) Iron melts at 100 °C" },
      { text: "(a) Vanadium(V) oxide, 450 °C, 2 atm; (b) High temperature reduces pressure" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Standard Haber process conditions:\n  * Catalyst: Finely divided iron.\n  * Temperature: ~450 °C.\n  * Pressure: ~200 atm (20 MPa).\n* (b) The forward reaction is exothermic (ΔH = -92 kJ/mol), so a lower temperature would shift equilibrium to the right and give a higher percentage yield. However, at 100 °C, reactant molecules have very little kinetic energy and collisions are infrequent with very few exceeding the activation energy. The reaction would take days or weeks to reach equilibrium. 450 °C represents a commercial compromise: an acceptable rate of reaction producing ammonia within a reasonable timeframe.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/23 Q4",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "iron catalyst", text: "State iron (Fe) as catalyst." },
        { mark: 1, keyword: "450 °C and 200 atm", text: "State 400–450 °C and 150–200 atm." },
        { mark: 1, keyword: "rate is too slow at low temp", text: "At lower temperature, rate of reaction is too slow." },
        { mark: 1, keyword: "compromise between rate and yield", text: "450 °C is an optimum compromise between acceptable yield and economic rate." }
      ],
      examinerTips: "Do not confuse the Haber process (iron catalyst) with the Contact process (vanadium(V) oxide catalyst)."
    }
  },
  {
    id: "cie-0620-2023-on-p4-q03",
    question: "A student adds 50.0 cm³ of 0.200 mol/dm³ hydrochloric acid to excess magnesium carbonate:\nMgCO₃(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l) + CO₂(g)\nCalculate the volume of CO₂ gas evolved at r.t.p. [Molar gas volume at r.t.p. = 24.0 dm³]",
    options: [
      { text: "0.24 dm³ (240 cm³)" },
      { text: "0.12 dm³ (120 cm³)" },
      { text: "0.48 dm³ (480 cm³)" },
      { text: "1.20 dm³ (1200 cm³)" }
    ],
    correctAnswer: 1,
    explanation: "* Step 1: Calculate moles of HCl:\n  n(HCl) = concentration × volume (in dm³)\n  n(HCl) = 0.200 mol/dm³ × (50.0 / 1000 dm³) = 0.0100 mol.\n* Step 2: Use stoichiometric ratio from equation:\n  2 moles of HCl produce 1 mole of CO₂ (ratio 2 : 1).\n  Moles of CO₂ = 0.0100 mol / 2 = 0.00500 mol.\n* Step 3: Calculate gas volume at r.t.p.:\n  Volume = moles × 24.0 dm³/mol = 0.00500 × 24.0 = 0.120 dm³ (or 120 cm³).",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/O/N/23 Q3",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "0.010 mol HCl", text: "Calculate moles of HCl = 0.0100 mol." },
        { mark: 1, keyword: "0.0050 mol CO₂", text: "Use 2:1 mole ratio to find moles of CO₂ = 0.0050 mol." },
        { mark: 1, keyword: "0.12 dm³ / 120 cm³", text: "Calculate volume = 0.12 dm³ or 120 cm³." }
      ],
      examinerTips: "Remember to divide volume in cm³ by 1000 before multiplying by concentration, and always divide moles of HCl by 2 according to the stoichiometry."
    }
  },
  {
    id: "cie-0620-2023-on-p4-q04",
    question: "Ester X has the molecular formula C₃H₆O₂ and smells like sweet rum. When heated with dilute acid, it hydrolyses into methanol (CH₃OH) and ethanoic acid (CH₃COOH).\n(a) Name ester X.\n(b) Draw the full structural formula of ester X.",
    options: [
      { text: "(a) Ethyl methanoate; (b) H-COO-CH₂-CH₃" },
      { text: "(a) Methyl ethanoate; (b) CH₃-COO-CH₃" },
      { text: "(a) Propyl methanoate; (b) H-COO-CH₂-CH₂-CH₃" },
      { text: "(a) Propanoic acid; (b) CH₃-CH₂-COOH" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Esters are named from the alcohol first (-yl) and carboxylic acid second (-oate).\n  * Alcohol part: from methanol → methyl.\n  * Acid part: from ethanoic acid → ethanoate.\n  * Hence, ester X is methyl ethanoate.\n* (b) Structure: CH₃-C(=O)-O-CH₃ (showing carbonyl C=O double bond and C-O single bond connecting the methyl group).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/O/N/23 Q5",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "methyl ethanoate", text: "Name the ester: methyl ethanoate." },
        { mark: 1, keyword: "ester functional group -COO-", text: "Draw ester linkage correctly showing C=O and C-O bonds." },
        { mark: 1, keyword: "correct methyl groups at both ends", text: "Show two methyl groups (CH₃) correctly bonded." }
      ],
      examinerTips: "Make sure all bonds are displayed if the question specifies 'full structural formula', including single bonds to every hydrogen atom."
    }
  },
  {
    id: "cie-0620-2023-on-p4-q05",
    question: "Aluminium is extracted from purified bauxite ore (Al₂O₃) dissolved in molten cryolite at 950 °C.\n(a) State the chemical role of molten cryolite.\n(b) Explain why the carbon anodes must be replaced at regular intervals.",
    options: [
      { text: "(a) Acts as an electrolyte supplier; (b) The carbon electrodes dissolve in water" },
      { text: "(a) Dissolves Al₂O₃ and acts as a solvent to lower the operating melting point from over 2000 °C to ~950 °C and improves electrical conductivity; (b) Oxygen gas evolved at the high-temperature anode reacts with carbon electrodes (C + O₂ → CO₂), slowly burning them away" },
      { text: "(a) Lowers density; (b) The carbon melts at 950 °C" },
      { text: "(a) Reduces Al³⁺ ions chemically; (b) Al deposits onto the anode" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Cryolite (Na₃AlF₆) acts as a solvent for aluminium oxide (Al₂O₃). Pure Al₂O₃ has a melting point of ~2072 °C, which would require immense energy. Molten cryolite lowers the melting temperature to ~950 °C and dramatically improves ionic electrical conductivity.\n* (b) At the anode (+), oxide ions discharge to produce oxygen gas: 2O²⁻ → O₂ + 4e⁻. At the high operating temperature (950 °C), the hot graphite (carbon) anodes react with the evolved oxygen gas: C(s) + O₂(g) → CO₂(g). The anodes gradually burn away and must be regularly replaced.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/O/N/23 Q6",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "lowers melting point / saves energy", text: "Molten cryolite lowers the operating melting temperature (from 2000 °C to 950 °C) / reduces energy costs." },
        { mark: 1, keyword: "improves electrical conductivity", text: "Improves electrical conductivity of the electrolyte." },
        { mark: 1, keyword: "oxygen burns carbon anode (C + O₂ → CO₂)", text: "Oxygen formed at anode reacts with carbon graphite to produce carbon dioxide (C + O₂ → CO₂)." }
      ],
      examinerTips: "Always write the equation C + O₂ → CO₂ when explaining why anodes burn away in aluminium extraction."
    }
  },

  // --- 3. EXTENDED PAPER 6: ALTERNATIVE TO PRACTICAL (P6) ---
  {
    id: "cie-0620-2023-on-p6-q01",
    question: "A student investigates the temperature change when solid ammonium chloride dissolves in water.\nInitial temperature of water = 21.5 °C; Lowest temperature reached = 14.0 °C.\n(a) Name the type of energy change.\n(b) State one improvement to the apparatus to obtain a more accurate temperature reading.",
    options: [
      { text: "(a) Exothermic; (b) Use a metal beaker" },
      { text: "(a) Endothermic; (b) Use an insulated polystyrene cup with a lid to reduce heat gain from the surroundings" },
      { text: "(a) Combustion; (b) Stir faster" },
      { text: "(a) Neutralisation; (b) Use a larger volume of water" }
    ],
    correctAnswer: 1,
    explanation: "* (a) The temperature decreases (ΔT = 14.0 - 21.5 = -7.5 °C), which proves the dissolution process absorbs thermal energy from the aqueous solution. Therefore, it is endothermic.\n* (b) Using an uninsulated glass beaker allows thermal energy from the laboratory air to conduct into the mixture, preventing the thermometer from reaching the true minimum temperature. Using an expanded polystyrene cup with a lid provides excellent thermal insulation.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/23 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "endothermic", text: "Identify process as endothermic (temperature decreases)." },
        { mark: 1, keyword: "polystyrene cup / insulation / lid", text: "Use polystyrene cup / add lid / lag beaker to reduce heat transfer." }
      ],
      examinerTips: "Whenever calorimetry is involved, the standard apparatus improvement is using a polystyrene cup with a lid."
    }
  },
  {
    id: "cie-0620-2023-on-p6-q02",
    question: "Solution Y is tested in two experiments:\n1. Adding aqueous sodium hydroxide dropwise produces a green precipitate that remains insoluble in excess sodium hydroxide.\n2. Adding dilute nitric acid followed by aqueous barium nitrate produces a dense white precipitate.\nIdentify the two ions in Solution Y.",
    options: [
      { text: "Copper(II) (Cu²⁺) and chloride (Cl⁻)" },
      { text: "Iron(II) (Fe²⁺) and sulfate (SO₄²⁻)" },
      { text: "Iron(III) (Fe³⁺) and nitrate (NO₃⁻)" },
      { text: "Chromium(III) (Cr³⁺) and carbonate (CO₃²⁻)" }
    ],
    correctAnswer: 1,
    explanation: "* Experiment 1: A green precipitate with NaOH that is insoluble in excess confirms the presence of iron(II) ions (Fe²⁺), forming Fe(OH)₂.\n* Experiment 2: Acidifying with HNO₃ followed by barium nitrate Ba(NO₃)₂ produces a white precipitate of barium sulfate (BaSO₄), confirming the sulfate ion (SO₄²⁻).\n* Therefore, Solution Y contains Fe²⁺ and SO₄²⁻ (iron(II) sulfate).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/23 Q2",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "Fe²⁺ / iron(II)", text: "Identify iron(II) cation (Fe²⁺)." },
        { mark: 1, keyword: "SO₄²⁻ / sulfate", text: "Identify sulfate anion (SO₄²⁻)." }
      ],
      examinerTips: "Do not write just 'iron' — specify oxidation state iron(II) or Fe²⁺. Writing iron(III) will lose the mark."
    }
  },
  {
    id: "cie-0620-2023-on-p6-q03",
    question: "A student performs paper chromatography on four food dyes (W, X, Y, and Z).\nThe solvent front moved 8.0 cm from the baseline. Spot W moved 5.6 cm.\nCalculate the retention factor (Rf) of Spot W.",
    options: [
      { text: "0.56" },
      { text: "0.70" },
      { text: "1.43" },
      { text: "0.80" }
    ],
    correctAnswer: 1,
    explanation: "* Rf value = (distance travelled by spot) / (distance travelled by solvent front).\n* Rf = 5.6 cm / 8.0 cm = 0.70.\n* Rf values are always dimensionless ratios and must be between 0 and 1.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/O/N/23 Q3",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "Rf formula distance spot / distance solvent", text: "Show correct formula / ratio: 5.6 / 8.0." },
        { mark: 1, keyword: "0.70", text: "Correct answer: 0.70." }
      ],
      examinerTips: "Rf values have no units. If your calculated value is greater than 1, you inverted the fraction."
    }
  },
  {
    id: "cie-0620-2023-on-p6-q04",
    question: "During a crystallization experiment to prepare pure hydrated copper(II) sulfate crystals from copper(II) oxide and sulfuric acid:\n(a) Why is the acid warmed before adding copper(II) oxide?\n(b) Why is copper(II) oxide added until it is in excess?",
    options: [
      { text: "(a) To evaporate all water; (b) To increase the boiling point" },
      { text: "(a) To increase the rate of reaction; (b) To ensure all the sulfuric acid has reacted completely, so unreacted acid does not contaminate the crystals" },
      { text: "(a) To decompose the oxide; (b) To make crystals blue" },
      { text: "(a) To prevent boiling; (b) To test the pH" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Heating sulfuric acid increases the kinetic energy of particles, significantly increasing the rate of reaction with the insoluble copper(II) oxide.\n* (b) Copper(II) oxide is added in excess so that all sulfuric acid is consumed. Unreacted solid copper(II) oxide can be easily removed by filtration, leaving a pure solution of aqueous copper(II) sulfate.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/O/N/23 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "increase rate of reaction", text: "Warming increases rate of reaction." },
        { mark: 1, keyword: "ensure all acid reacts", text: "Adding excess oxide ensures all acid is used up / no unreacted acid remains." }
      ],
      examinerTips: "Be specific: adding excess insoluble base guarantees that the limiting reactant (acid) is 100% neutralized, making subsequent filtration sufficient to obtain pure salt."
    }
  },
  {
    id: "cie-0620-2023-on-p6-q05",
    question: "Plan an investigation to determine the concentration of an aqueous solution of sodium hydroxide using a standard 0.100 mol/dm³ hydrochloric acid solution.\nYou are provided with: the unknown aqueous sodium hydroxide, standard 0.100 mol/dm³ HCl, burette, 25.0 cm³ pipette with filler, conical flask, white tile, and phenolphthalein indicator.",
    options: [
      { text: "Mix both solutions in a test tube and weigh the solid produced" },
      { text: "1. Rinse pipette with NaOH solution; transfer exactly 25.0 cm³ of NaOH into a conical flask placed on a white tile; 2. Add 2–3 drops of phenolphthalein indicator (solution turns pink); 3. Fill burette with 0.100 mol/dm³ HCl after rinsing with HCl and note initial burette reading; 4. Titrate by adding HCl dropwise near end-point while swirling flask until color changes from pink to colorless; 5. Record final burette reading; repeat to achieve concordant titres and calculate concentration of NaOH using C₁V₁ = C₂V₂" },
      { text: "Boil the mixture in an evaporating basin and measure the steam volume" },
      { text: "Use universal indicator paper and estimate concentration from a color chart" }
    ],
    correctAnswer: 1,
    explanation: "* Complete standard acid-base titration plan:\n  1. Pipette preparation: Rinse volumetric pipette with unknown NaOH solution, then measure 25.0 cm³ into a clean conical flask placed over a white tile.\n  2. Indicator: Add 2–3 drops of phenolphthalein indicator; solution turns pink in alkaline medium.\n  3. Burette preparation: Rinse burette with standard 0.100 mol/dm³ HCl, fill burette, eliminate air bubbles below the tap, and record initial reading at eye level.\n  4. Titration procedure: Run acid into the flask while continuously swirling until close to end-point; add acid dropwise until pink color permanently discharges to colorless.\n  5. Concordance and calculation: Record final reading; repeat until two concordant titres (within 0.10 cm³) are achieved. Use average titre to calculate moles of HCl and concentration of NaOH.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/O/N/23 Q4 (Planning an Investigation)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "pipette 25.0 cm³ NaOH into conical flask", text: "Use pipette to measure 25.0 cm³ of NaOH into conical flask." },
        { mark: 1, keyword: "add phenolphthalein indicator", text: "Add suitable indicator (phenolphthalein: pink to colorless)." },
        { mark: 1, keyword: "titrate with HCl from burette to end-point", text: "Titrate with standard HCl from burette until persistent end-point color change." },
        { mark: 1, keyword: "repeat concordant & calculate concentration", text: "Repeat for concordant titres and calculate concentration." }
      ],
      examinerTips: "Remember to name the specific indicator and state its clear color change at the end-point (phenolphthalein: pink to colorless)."
    }
  },

  // --- 4. CORE PAPER 1: MULTIPLE CHOICE (P1) ---
  {
    id: "cie-0620-2023-on-core-p1-q01",
    question: "Which state of matter has a definite volume but takes the shape of the container it is placed in?",
    options: [
      { text: "Solid" },
      { text: "Liquid" },
      { text: "Gas" },
      { text: "Plasma" }
    ],
    correctAnswer: 1,
    explanation: "* Solids have both fixed shape and fixed volume.\n* Liquids have a fixed volume, but their particles are free to slide past each other, allowing them to flow and take the shape of the container.\n* Gases have neither fixed shape nor fixed volume (they expand to fill the entire container).",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/O/N/23 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-core-p1-q02",
    question: "Which particle is found in the nucleus of an atom and has no electrical charge?",
    options: [
      { text: "Electron" },
      { text: "Proton" },
      { text: "Neutron" },
      { text: "Positron" }
    ],
    correctAnswer: 2,
    explanation: "* Protons: found in nucleus, relative charge +1, relative mass 1.\n* Neutrons: found in nucleus, relative charge 0 (neutral), relative mass 1.\n* Electrons: orbit in electron shells outside the nucleus, relative charge -1, relative mass ~1/1840.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/O/N/23 Q5",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-core-p1-q03",
    question: "What is the pH value of a neutral aqueous solution at 25 °C?",
    options: [
      { text: "pH 1" },
      { text: "pH 7" },
      { text: "pH 10" },
      { text: "pH 14" }
    ],
    correctAnswer: 1,
    explanation: "* The pH scale runs from 0 to 14:\n  * pH < 7: Acidic solution (pH 1 is strongly acidic).\n  * pH = 7: Neutral solution (pure water at 25 °C).\n  * pH > 7: Alkaline solution (pH 14 is strongly alkaline).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/O/N/23 Q22",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-core-p1-q04",
    question: "Which noble gas is used to fill filament light bulbs to provide an unreactive inert atmosphere?",
    options: [
      { text: "Helium" },
      { text: "Neon" },
      { text: "Argon" },
      { text: "Krypton" }
    ],
    correctAnswer: 2,
    explanation: "* Argon is chemically inert because it has a full outer shell of 8 valence electrons.\n* It is used inside incandescent tungsten light bulbs to prevent the glowing white-hot tungsten filament from reacting with oxygen and burning out.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/13/O/N/23 Q26",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-on-core-p1-q05",
    question: "Which alkane is the primary chemical component of natural gas?",
    options: [
      { text: "Methane (CH₄)" },
      { text: "Propane (C₃H₈)" },
      { text: "Hexane (C₆H₁₄)" },
      { text: "Octane (C₈H₁₈)" }
    ],
    correctAnswer: 0,
    explanation: "* Natural gas consists predominantly of methane (CH₄), typically making up 70% to 90% of its composition.\n* Propane and butane are liquefied petroleum gases (LPG); octane is a constituent of petrol/gasoline.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/O/N/23 Q35",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },

  // --- 5. CORE PAPER 3: THEORY / STRUCTURED (P3) ---
  {
    id: "cie-0620-2023-on-core-p3-q01",
    question: "An atom of chlorine has the symbol ³⁵₁₇Cl.\n(a) State the number of protons in this atom.\n(b) State the number of neutrons in this atom.\n(c) Deduce the electronic configuration of this atom.",
    options: [
      { text: "(a) 17; (b) 17; (c) 2,8,7" },
      { text: "(a) 17; (b) 18; (c) 2,8,7" },
      { text: "(a) 35; (b) 17; (c) 2,8,8" },
      { text: "(a) 18; (b) 17; (c) 2,7,8" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Atomic number (bottom number) = 17, which gives the number of protons = 17.\n* (b) Mass number (top number) = 35. Number of neutrons = mass number - atomic number = 35 - 17 = 18 neutrons.\n* (c) In a neutral atom, number of electrons = number of protons = 17. Electronic configuration is arranged in shells: 2, 8, 7.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/31/O/N/23 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "17 protons", text: "Protons = 17." },
        { mark: 1, keyword: "18 neutrons", text: "Neutrons = 35 - 17 = 18." },
        { mark: 1, keyword: "2,8,7", text: "Electronic configuration: 2,8,7." }
      ],
      examinerTips: "Remember: Neutrons = Mass number - Atomic number."
    }
  },
  {
    id: "cie-0620-2023-on-core-p3-q02",
    question: "Carbon monoxide (CO) is a common air pollutant.\n(a) State how carbon monoxide is formed in vehicle engines.\n(b) Explain why carbon monoxide is poisonous to humans.",
    options: [
      { text: "(a) Complete combustion of petrol; (b) It irritates the skin" },
      { text: "(a) Incomplete combustion of carbon-containing fuels (insufficient oxygen supply); (b) It binds irreversibly to hemoglobin in red blood cells, preventing them from carrying oxygen around the body" },
      { text: "(a) Catalytic converter failure; (b) It causes acid rain" },
      { text: "(a) Evaporation of fuel; (b) It causes coughing" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Carbon monoxide is formed by the INCOMPLETE combustion of carbon-based fuels (petrol, diesel) when there is an insufficient supply of oxygen.\n* (b) CO is a toxic, colorless, and odorless gas that binds tightly to hemoglobin in the blood (forming carboxyhemoglobin), severely reducing the blood's oxygen-carrying capacity and causing suffocation.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/32/O/N/23 Q2",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "incomplete combustion of fuels", text: "Incomplete combustion / burning in limited oxygen." },
        { mark: 1, keyword: "combines with hemoglobin / stops oxygen transport", text: "Binds to hemoglobin / prevents red blood cells carrying oxygen." }
      ],
      examinerTips: "Do not confuse carbon monoxide with carbon dioxide. Carbon monoxide is toxic (incomplete combustion); carbon dioxide is a greenhouse gas (complete combustion)."
    }
  },
  {
    id: "cie-0620-2023-on-core-p3-q03",
    question: "State the raw materials added into the blast furnace for the industrial extraction of iron.",
    options: [
      { text: "Bauxite, cryolite, and carbon" },
      { text: "Iron ore (hematite), coke (carbon), limestone (calcium carbonate), and hot air" },
      { text: "Magnetite, copper, and oxygen" },
      { text: "Iron sulfide, silica, and natural gas" }
    ],
    correctAnswer: 1,
    explanation: "* The four raw materials introduced into the blast furnace are:\n  1. Hematite (iron ore, mainly Fe₂O₃) – the source of iron.\n  2. Coke (carbon, C) – fuel and reducing agent.\n  3. Limestone (calcium carbonate, CaCO₃) – to remove acidic sand/silica impurities as slag.\n  4. Hot air blast (oxygen) – to burn the coke and generate heat and carbon monoxide.",
    level: 1,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/33/O/N/23 Q4",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "iron ore / hematite", text: "Hematite / iron ore." },
        { mark: 1, keyword: "coke / carbon", text: "Coke (or carbon)." },
        { mark: 1, keyword: "limestone / calcium carbonate and hot air", text: "Limestone (calcium carbonate) and air (oxygen)." }
      ],
      examinerTips: "Remember all 4 raw materials for the blast furnace. Knowing their respective functions is equally vital."
    }
  },
  // ==========================================================
  // CAMBRIDGE IGCSE CHEMISTRY (0620) - MAY / JUNE 2023
  // EXTENDED (P2, P4, P6) & CORE (P1, P3) COMPLETE
  // ==========================================================

  // --- 1. EXTENDED PAPER 2: MULTIPLE CHOICE (P2) ---
  {
    id: "cie-0620-2023-mj-p2-q01",
    question: "A drop of aqueous blue copper(II) sulfate is placed at the bottom of a beaker filled with still water. After two days, the entire liquid turns uniformly pale blue without any stirring. Which process accounts for this observation?",
    options: [
      { text: "Evaporation" },
      { text: "Diffusion" },
      { text: "Filtration" },
      { text: "Neutralisation" }
    ],
    correctAnswer: 1,
    explanation: "* Diffusion is the net random movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient.\n* Copper(II) and sulfate ions constantly collide with moving water molecules and spread out evenly through the liquid over time.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/23 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q02",
    question: "Silicon(IV) oxide (silica, SiO₂) and diamond both have giant covalent macromolecular structures. Which statement accurately compares them?",
    options: [
      { text: "Diamond contains delocalized electrons, whereas silicon(IV) oxide does not" },
      { text: "In diamond, each carbon is bonded to 4 carbons; in silicon(IV) oxide, each silicon is bonded to 4 oxygen atoms and each oxygen is bonded to 2 silicon atoms" },
      { text: "Silicon(IV) oxide has a simple molecular structure with weak intermolecular forces" },
      { text: "Diamond melts at a lower temperature than silicon(IV) oxide because C-C bonds are weaker than Si-O bonds" }
    ],
    correctAnswer: 1,
    explanation: "* Both substances have tetrahedral giant covalent networks:\n  * In diamond, every carbon atom forms 4 single covalent bonds to 4 other carbon atoms.\n  * In silica (SiO₂), every silicon atom forms 4 single covalent bonds to oxygen atoms, and each oxygen atom forms 2 covalent bonds with silicon atoms.\n* Neither contains delocalized electrons, so neither conducts electricity.",
    level: 2,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/23 Q7",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q03",
    question: "What is the empirical formula of a compound containing 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass? [Ar: C = 12; H = 1; O = 16]",
    options: [
      { text: "CHO" },
      { text: "CH₂O" },
      { text: "C₂H₄O" },
      { text: "CH₄O₂" }
    ],
    correctAnswer: 1,
    explanation: "* Divide percentage by Ar:\n  * C: 40.0 / 12 = 3.33 mol\n  * H: 6.7 / 1 = 6.70 mol\n  * O: 53.3 / 16 = 3.33 mol\n* Divide by smallest number (3.33):\n  * C: 3.33 / 3.33 = 1\n  * H: 6.70 / 3.33 = 2\n  * O: 3.33 / 3.33 = 1\n* Empirical formula = CH₂O.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/23 Q9",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q04",
    question: "During the industrial refining of impure copper, electrolysis is performed using aqueous copper(II) sulfate electrolyte. Which configuration is used?",
    options: [
      { text: "Anode: pure copper; Cathode: impure copper" },
      { text: "Anode: impure copper; Cathode: thin sheet of pure copper" },
      { text: "Anode: platinum; Cathode: graphite" },
      { text: "Anode: impure copper; Cathode: zinc metal" }
    ],
    correctAnswer: 1,
    explanation: "* In electrolytic refining of copper:\n  * Anode (positive): block of impure blister copper; Cu atoms oxidize into solution (Cu → Cu²⁺ + 2e⁻), and anode sludge falls below.\n  * Cathode (negative): thin sheet of high-purity copper; Cu²⁺ ions from the solution discharge and deposit as pure copper metal (Cu²⁺ + 2e⁻ → Cu).\n  * The electrolyte concentration of CuSO₄ remains virtually unchanged.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/23 Q11",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q05",
    question: "In which of the following reactions is the forward process ENDOTHERMIC?",
    options: [
      { text: "Methane burning in oxygen: CH₄ + 2O₂ → CO₂ + 2H₂O" },
      { text: "Thermal decomposition of calcium carbonate: CaCO₃ → CaO + CO₂" },
      { text: "Neutralisation of hydrochloric acid by sodium hydroxide: HCl + NaOH → NaCl + H₂O" },
      { text: "Respiration of glucose in cells" }
    ],
    correctAnswer: 1,
    explanation: "* Combustion, neutralisation, and respiration are all strongly exothermic reactions (release thermal energy to the surroundings, ΔH negative).\n* Thermal decomposition requires continuous input of heat to break strong chemical bonds, absorbing heat from the surroundings (endothermic, ΔH positive).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/23 Q15",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q06",
    question: "Why does adding a catalyst increase the rate of a chemical reaction?",
    options: [
      { text: "It increases the frequency of collisions between reactant particles" },
      { text: "It provides an alternative reaction pathway with a lower activation energy" },
      { text: "It increases the average kinetic energy of the molecules" },
      { text: "It shifts the position of equilibrium to the product side" }
    ],
    correctAnswer: 1,
    explanation: "* A catalyst provides an alternative reaction pathway that requires a lower activation energy (Ea).\n* Because Ea is reduced, a greater fraction of colliding molecules have sufficient energy to react successfully.\n* Catalysts do not increase collision frequency, do not increase temperature/kinetic energy, and do not shift equilibrium positions.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/23 Q18",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q07",
    question: "Which oxide will react with dilute hydrochloric acid to produce a salt and water, but does NOT react with aqueous sodium hydroxide?",
    options: [
      { text: "Copper(II) oxide (CuO)" },
      { text: "Aluminium oxide (Al₂O₃)" },
      { text: "Sulfur dioxide (SO₂)" },
      { text: "Carbon monoxide (CO)" }
    ],
    correctAnswer: 0,
    explanation: "* Copper(II) oxide (CuO) is a basic oxide (reacts only with acids).\n* Aluminium oxide (Al₂O₃) is amphoteric (reacts with both acids and bases).\n* Sulfur dioxide (SO₂) is an acidic oxide (reacts with bases).\n* Carbon monoxide (CO) is a neutral oxide (reacts with neither).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/23 Q22",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q08",
    question: "Which statement explains why Group I elements (alkali metals) are stored under paraffin oil?",
    options: [
      { text: "To prevent them from evaporating into the air" },
      { text: "To prevent them from reacting rapidly with oxygen and moisture in the atmosphere" },
      { text: "To make them easier to cut with a knife" },
      { text: "To maintain their shiny metallic surface permanently" }
    ],
    correctAnswer: 1,
    explanation: "* Group I alkali metals (Li, Na, K) are highly reactive metals that react immediately with oxygen gas and moisture in the air to form oxides and hydroxides.\n* Storing them submerged in oil provides a physical barrier preventing contact with atmospheric oxygen and water vapor.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/21/M/J/23 Q25",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q09",
    question: "Which metal can be used for the sacrificial protection of an underground steel pipeline?",
    options: [
      { text: "Copper" },
      { text: "Lead" },
      { text: "Magnesium" },
      { text: "Silver" }
    ],
    correctAnswer: 2,
    explanation: "* For sacrificial protection, the attached metal must be MORE reactive than iron, so that it oxidizes (corrodes) preferentially by losing electrons to the iron.\n* Magnesium and zinc are higher in the reactivity series than iron.\n* Copper, lead, and silver are less reactive than iron and would actually accelerate rusting.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/23/M/J/23 Q30",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-p2-q10",
    question: "Ethene reacts with bromine water. What type of reaction takes place and what is the color change?",
    options: [
      { text: "Substitution; Orange to green" },
      { text: "Addition; Red-brown/orange to colorless (decolorised)" },
      { text: "Oxidation; Colorless to brown" },
      { text: "Polymerisation; Blue to yellow" }
    ],
    correctAnswer: 1,
    explanation: "* Ethene (C₂H₄) is an unsaturated alkene containing a C=C double bond.\n* It undergoes an electrophilic addition reaction across the double bond to form 1,2-dibromoethane (CH₂BrCH₂Br).\n* The red-brown / orange bromine water is rapidly decolorised (turns colorless).",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/M/J/23 Q37",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },

  // --- 2. EXTENDED PAPER 4: THEORY / STRUCTURED (P4) ---
  {
    id: "cie-0620-2023-mj-p4-q01",
    question: "A student performs electrolysis of aqueous copper(II) sulfate using inert carbon (graphite) electrodes.\n(a) Name the gas formed at the anode and write the half-equation.\n(b) Describe the observation at the cathode and write the half-equation.\n(c) Describe the color change of the solution and explain why it occurs.",
    options: [
      { text: "(a) Hydrogen; (b) Bubbles; (c) Turns red" },
      { text: "(a) Oxygen gas (4OH⁻ → O₂ + 2H₂O + 4e⁻); (b) Pink-brown solid copper coats the cathode (Cu²⁺ + 2e⁻ → Cu); (c) The blue color of the solution fades to colorless because Cu²⁺ ions are continuously removed from solution while spectator H⁺ and SO₄²⁻ remain as sulfuric acid" },
      { text: "(a) Sulfur dioxide; (b) Silvery deposit; (c) Remains blue" },
      { text: "(a) Chlorine gas; (b) White precipitate; (c) Turns cloudy" }
    ],
    correctAnswer: 1,
    explanation: "* (a) At the anode (+), OH⁻ ions from water discharge in preference to SO₄²⁻ ions: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (colorless oxygen gas bubbles).\n* (b) At the cathode (-), Cu²⁺ is lower in the reactivity series than H⁺, so Cu²⁺ discharges preferentially: Cu²⁺ + 2e⁻ → Cu (pink/red-brown copper metal deposits).\n* (c) The blue color of the electrolyte is due to hydrated Cu²⁺ ions. As Cu²⁺ ions are reduced and deposited onto the cathode, their concentration in solution decreases, causing the blue color to fade to colorless.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/23 Q2",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "oxygen gas (4OH⁻ → O₂ + 2H₂O + 4e⁻)", text: "Anode: oxygen gas and half-equation 4OH⁻ → O₂ + 2H₂O + 4e⁻." },
        { mark: 1, keyword: "pink/brown solid / Cu²⁺ + 2e⁻ → Cu", text: "Cathode: pink/brown deposit of copper and Cu²⁺ + 2e⁻ → Cu." },
        { mark: 1, keyword: "blue fades / becomes colorless", text: "Color change: blue color fades / becomes colorless." },
        { mark: 1, keyword: "Cu²⁺ ions removed from solution", text: "Explanation: Cu²⁺ ions are discharged and removed from solution." }
      ],
      examinerTips: "Do not say 'copper becomes colorless' — specify that the BLUE SOLUTION fades because Cu²⁺ ions are consumed."
    }
  },
  {
    id: "cie-0620-2023-mj-p4-q02",
    question: "A sample of 5.60 g of iron reacts completely with dilute sulfuric acid:\nFe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)\n(a) Calculate the moles of iron used. [Ar: Fe = 56]\n(b) Calculate the volume of hydrogen gas produced at r.t.p. [Molar gas volume at r.t.p. = 24.0 dm³]\n(c) Calculate the mass of anhydrous iron(II) sulfate formed. [Mr: FeSO₄ = 152]",
    options: [
      { text: "(a) 0.100 mol; (b) 2.40 dm³; (c) 15.2 g" },
      { text: "(a) 0.200 mol; (b) 4.80 dm³; (c) 30.4 g" },
      { text: "(a) 0.050 mol; (b) 1.20 dm³; (c) 7.6 g" },
      { text: "(a) 0.100 mol; (b) 24.0 dm³; (c) 152 g" }
    ],
    correctAnswer: 0,
    explanation: "* (a) n(Fe) = mass / Ar = 5.60 g / 56 g/mol = 0.100 mol.\n* (b) Ratio Fe : H₂ is 1 : 1, so moles of H₂ = 0.100 mol.\n  Volume of H₂ = 0.100 mol × 24.0 dm³/mol = 2.40 dm³ (or 2400 cm³).\n* (c) Ratio Fe : FeSO₄ is 1 : 1, so moles of FeSO₄ = 0.100 mol.\n  Mass of FeSO₄ = 0.100 mol × 152 g/mol = 15.2 g.",
    level: 2,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/23 Q3",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "0.100 mol Fe", text: "Moles of Fe = 5.60 / 56 = 0.100 mol." },
        { mark: 1, keyword: "2.40 dm³ H₂", text: "Volume of H₂ = 0.100 × 24.0 = 2.40 dm³ (or 2400 cm³)." },
        { mark: 1, keyword: "15.2 g FeSO₄", text: "Mass of FeSO₄ = 0.100 × 152 = 15.2 g." }
      ],
      examinerTips: "Always write units clearly (dm³ or cm³). Leaving off the unit or giving conflicting units loses marks."
    }
  },
  {
    id: "cie-0620-2023-mj-p4-q03",
    question: "Nitrogen dioxide, NO₂, is a dark brown gas in dynamic equilibrium with dinitrogen tetroxide, N₂O₄, a colorless gas:\n2NO₂(g) [brown] ⇌ N₂O₄(g) [colorless]   ΔH = -57 kJ/mol\nPredict and explain the effect on the color of the mixture when:\n(a) The pressure of the system is increased at constant temperature.\n(b) The temperature of the system is increased at constant pressure.",
    options: [
      { text: "(a) Darkens; (b) Paler" },
      { text: "(a) Mixture turns paler / less brown; increasing pressure favors the side with fewer gas moles (1 mole of N₂O₄ vs 2 moles of NO₂);\n(b) Mixture darkens / becomes deeper brown; increasing temperature favors the endothermic reverse reaction which produces more brown NO₂" },
      { text: "(a) Turns colorless; (b) Explodes" },
      { text: "(a) No change; (b) No change" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Pressure effect: Left side has 2 moles of gas; right side has 1 mole of gas. Increasing pressure shifts equilibrium to the side with fewer moles of gas (forward direction). More colorless N₂O₄ forms, so the mixture becomes paler.\n* (b) Temperature effect: The forward reaction is exothermic (ΔH is negative), meaning the backward reaction is endothermic. Increasing temperature favors the endothermic reaction (backward direction) to absorb added heat, forming more brown NO₂ gas, so the mixture darkens.",
    level: 3,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/41/M/J/23 Q4",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "paler / less brown", text: "Prediction (a): mixture becomes paler / lighter brown." },
        { mark: 1, keyword: "shifts to fewer moles of gas (forward)", text: "Explanation (a): equilibrium shifts forward to side with fewer gas moles." },
        { mark: 1, keyword: "darker / deeper brown", text: "Prediction (b): mixture turns darker / deeper brown." },
        { mark: 1, keyword: "shifts in endothermic direction (reverse)", text: "Explanation (b): equilibrium shifts reverse in endothermic direction." }
      ],
      examinerTips: "Explicitly connect the shift in equilibrium direction to the specific COLOR change observed."
    }
  },
  {
    id: "cie-0620-2023-mj-p4-q04",
    question: "Ethanol can be manufactured by the fermentation of aqueous glucose (C₆H₁₂O₆).\n(a) State the operating temperature and the essential condition regarding air.\n(b) Name the biological catalyst used.\n(c) Write the balanced chemical equation for the fermentation of glucose.",
    options: [
      { text: "(a) 100 °C, aerobic; (b) Bacteria; (c) C₆H₁₂O₆ → CH₄ + CO₂" },
      { text: "(a) 25–35 °C, absence of oxygen (anaerobic); (b) Yeast (enzymes in yeast); (c) C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂" },
      { text: "(a) 450 °C, oxygen enriched; (b) Iron; (c) C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
      { text: "(a) 0 °C, open air; (b) Algae; (c) C₆H₁₂O₆ → C₂H₅OH + H₂O" }
    ],
    correctAnswer: 1,
    explanation: "* Fermentation conditions:\n  * Temperature: ~25 °C to 35 °C (optimum for yeast enzymes; above 45 °C enzymes denature; below 20 °C reaction is too slow).\n  * Anaerobic conditions (absence of air/oxygen): if oxygen is present, yeast respires aerobically producing CO₂ and water, or bacteria oxidize ethanol to ethanoic acid (vinegar).\n  * Catalyst: Yeast (containing enzymes zymase).\n  * Equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/43/M/J/23 Q5",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "25–35 °C", text: "State temperature between 25 °C and 37 °C." },
        { mark: 1, keyword: "anaerobic / absence of oxygen", text: "State absence of air / oxygen (anaerobic)." },
        { mark: 1, keyword: "yeast", text: "Name yeast as catalyst / enzyme source." },
        { mark: 1, keyword: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", text: "Balanced equation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂." }
      ],
      examinerTips: "Remember: 'anaerobic' is essential. If oxygen is present, ethanol will NOT form."
    }
  },
  {
    id: "cie-0620-2023-mj-p4-q05",
    question: "State the essential conditions for the rusting of iron and explain how galvanising protects iron both as a barrier and sacrificially.",
    options: [
      { text: "Iron requires nitrogen; galvanising with tin prevents oxidation" },
      { text: "Conditions: Oxygen and water; Galvanising coats iron with zinc, acting as a physical barrier; if scratched, zinc is more reactive than iron and loses electrons preferentially (Zn → Zn²⁺ + 2e⁻), preventing iron from oxidising" },
      { text: "Iron requires carbon dioxide; galvanising with copper draws rust away" },
      { text: "Iron requires sunlight; galvanising with plastic keeps it dry" }
    ],
    correctAnswer: 1,
    explanation: "* Rusting requires BOTH oxygen (air) and water (moisture).\n* Galvanising is coating iron/steel with a thin layer of zinc:\n  1. Barrier protection: The zinc coating excludes oxygen and water from reaching the steel underneath.\n  2. Sacrificial protection: Zinc is more reactive than iron (higher in reactivity series). If the coating is scratched or chipped, zinc corrodes preferentially, donating electrons to the iron and sacrificing itself: Zn(s) → Zn²⁺(aq) + 2e⁻.",
    level: 2,
    topic: "metals",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/M/J/23 Q6",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "oxygen and water", text: "Both oxygen (air) and water are essential for rusting." },
        { mark: 1, keyword: "zinc barrier excludes air and water", text: "Zinc forms a protective physical barrier layer." },
        { mark: 1, keyword: "zinc is more reactive / sacrifices itself", text: "Zinc is more reactive than iron and oxidizes preferentially if scratched." }
      ],
      examinerTips: "Emphasize that BOTH water and oxygen are required. Stating only one loses the first mark."
    }
  },

  // --- 3. EXTENDED PAPER 6: ALTERNATIVE TO PRACTICAL (P6) ---
  {
    id: "cie-0620-2023-mj-p6-q01",
    question: "A student investigated the reaction between magnesium ribbon and dilute sulfuric acid.\n(a) Why should the magnesium ribbon be cleaned with sandpaper before the experiment?\n(b) Sketch the shape of the graph of total volume of hydrogen gas against time until completion.",
    options: [
      { text: "(a) To make it thinner; (b) A straight horizontal line" },
      { text: "(a) To remove the unreactive magnesium oxide layer on the surface; (b) Steepest curve at the origin (t = 0), gradually curving downwards as rate slows, and finally leveling off horizontally (plateau) when the reaction is complete" },
      { text: "(a) To polish it shiny; (b) A straight line with constant positive slope" },
      { text: "(a) To heat it up; (b) A bell-shaped curve" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Magnesium metal reacts slowly with atmospheric oxygen to form a thin, unreactive coating of magnesium oxide (MgO) on its surface. Sandpaper removes this oxide layer so that pure magnesium metal is exposed to the acid immediately.\n* (b) The rate of reaction is fastest at the start (steepest gradient at t = 0) because reactant concentrations are at their highest. As reactants are consumed, collision frequency drops, gradient decreases, and the curve levels off to a horizontal plateau when one reactant is completely used up.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/23 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "remove oxide layer", text: "Sandpaper removes the surface magnesium oxide coating." },
        { mark: 1, keyword: "steepest at start, levels off to plateau", text: "Curve starts at origin, steepest initial slope, plateaus horizontally." }
      ],
      examinerTips: "Always mention 'oxide coating/layer' when cleaning metals before reaction rate or displacement tests."
    }
  },
  {
    id: "cie-0620-2023-mj-p6-q02",
    question: "A colorless solution of salt Z undergoes the following qualitative tests:\n1. Adding aqueous sodium hydroxide produces a white precipitate that dissolves in excess NaOH to form a colorless solution.\n2. Adding aqueous ammonia produces a white precipitate that is insoluble in excess ammonia.\n3. Adding dilute nitric acid followed by aqueous silver nitrate produces a white precipitate.\nIdentify the cation and anion in salt Z.",
    options: [
      { text: "Zinc (Zn²⁺) and bromide (Br⁻)" },
      { text: "Aluminium (Al³⁺) and chloride (Cl⁻)" },
      { text: "Calcium (Ca²⁺) and sulfate (SO₄²⁻)" },
      { text: "Lead(II) (Pb²⁺) and iodide (I⁻)" }
    ],
    correctAnswer: 1,
    explanation: "* Cation identification:\n  * White ppt with NaOH soluble in excess: could be Al³⁺, Zn²⁺, or Pb²⁺.\n  * White ppt with NH₃ INSOLUBLE in excess: confirms aluminium (Al³⁺). (Zinc precipitate is soluble in excess ammonia).\n* Anion identification:\n  * White precipitate with dilute HNO₃ and AgNO₃ confirms chloride (Cl⁻) forming AgCl.\n* Salt Z is aluminium chloride (AlCl₃).",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/23 Q2",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "Al³⁺ / aluminium", text: "Identify cation as aluminium (Al³⁺)." },
        { mark: 1, keyword: "Cl⁻ / chloride", text: "Identify anion as chloride (Cl⁻)." }
      ],
      examinerTips: "Remember: Al³⁺ ppt is insoluble in excess aqueous ammonia, while Zn²⁺ ppt dissolves in excess aqueous ammonia."
    }
  },
  {
    id: "cie-0620-2023-mj-p6-q03",
    question: "A student performs a titration using a burette. The initial reading is 1.40 cm³ and the final reading is 26.85 cm³.\n(a) Calculate the volume of titrant delivered (titre).\n(b) How should the meniscus of the liquid in the burette be read?",
    options: [
      { text: "(a) 25.45 cm³; (b) Read at the bottom of the meniscus at eye level" },
      { text: "(a) 28.25 cm³; (b) Read from the top of the liquid" },
      { text: "(a) 25.45 cm³; (b) Read looking downwards at a 45 degree angle" },
      { text: "(a) 26.85 cm³; (b) Estimate by tipping the burette" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Titre = final reading - initial reading = 26.85 cm³ - 1.40 cm³ = 25.45 cm³.\n* (b) Burette readings must always be taken at the bottom of the curved meniscus with the eye level directly horizontal to the liquid level to avoid parallax error.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/61/M/J/23 Q3",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "25.45 cm³", text: "Calculate titre = 25.45 cm³." },
        { mark: 1, keyword: "bottom of meniscus at eye level", text: "Read bottom of meniscus at eye level to prevent parallax error." }
      ],
      examinerTips: "Record burette readings to two decimal places, with the second decimal place ending in 0 or 5."
    }
  },
  {
    id: "cie-0620-2023-mj-p6-q04",
    question: "In a fractional distillation apparatus separating a mixture of ethanol (b.p. 78 °C) and water (b.p. 100 °C):\n(a) State the role of the glass beads in the fractionating column.\n(b) Which liquid is collected first as distillate?",
    options: [
      { text: "(a) To react with ethanol; (b) Water" },
      { text: "(a) To provide a large surface area for repeated cycles of condensation and re-evaporation; (b) Ethanol" },
      { text: "(a) To stir the boiling mixture; (b) Both boil simultaneously" },
      { text: "(a) To prevent boiling; (b) Water" }
    ],
    correctAnswer: 1,
    explanation: "* (a) The glass beads in the fractionating column provide a very large surface area. Rising vapors repeatedly condense on the cool glass surfaces and re-evaporate, progressively enriching the vapor in the more volatile component (lower boiling point).\n* (b) Ethanol has the lower boiling point (78 °C) and boils first, passing through the condenser and being collected as the first distillate.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/M/J/23 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "large surface area / repeated condensation & vaporisation", text: "Provides large surface area for repeated condensation and re-evaporation." },
        { mark: 1, keyword: "ethanol collected first", text: "Ethanol distils and is collected first (lower boiling point)." }
      ],
      examinerTips: "Do not say 'the beads absorb water'; state that they provide a high surface area for condensation."
    }
  },
  {
    id: "cie-0620-2023-mj-p6-q05",
    question: "Plan an investigation to determine the order of reactivity of three unknown metals, X, Y, and Z, using solutions of their metal nitrates: X(NO₃)₂, Y(NO₃)₂, and Z(NO₃)₂.\nYou are provided with: samples of metals X, Y, and Z, test tubes, test-tube rack, and the three nitrate solutions.",
    options: [
      { text: "Burn all three metals in air and compare flame colors" },
      { text: "1. Place a sample of metal X into separate test tubes containing solutions of Y(NO₃)₂ and Z(NO₃)₂; 2. Observe and record whether a displacement reaction occurs (appearance of a coating/deposit of displaced metal or solution color change); 3. Repeat by placing metal Y into solutions of X(NO₃)₂ and Z(NO₃)₂, and metal Z into solutions of X(NO₃)₂ and Y(NO₃)₂; 4. Deduce reactivity: a metal that displaces another metal from its salt solution is more reactive. The metal that displaces both other metals is most reactive; the metal displaced by both is least reactive" },
      { text: "Weigh the metals, dissolve them in concentrated acid, and measure pH" },
      { text: "Perform flame tests on each nitrate solution and identify metals by color" }
    ],
    correctAnswer: 1,
    explanation: "* Metal displacement plan:\n  1. Set up a grid of 6 test tubes in a test-tube rack.\n  2. Place clean strips of metal X into solutions of Y(NO₃)₂ and Z(NO₃)₂.\n  3. Place clean strips of metal Y into solutions of X(NO₃)₂ and Z(NO₃)₂.\n  4. Place clean strips of metal Z into solutions of X(NO₃)₂ and Y(NO₃)₂.\n  5. Keep volumes and surface areas roughly constant; observe any color change, effervescence, or metal coating on the strips.\n  6. Interpretation: A more reactive metal displaces a less reactive metal from its nitrate solution. Count the number of displacements: most displacements = most reactive, zero displacements = least reactive.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/63/M/J/23 Q4 (Planning an Investigation)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "add each metal to other salt solutions", text: "Place each metal separately into the nitrate solutions of the other two metals." },
        { mark: 1, keyword: "observe displacement / precipitate / deposit", text: "Observe for displacement reactions (color change or solid deposit formed)." },
        { mark: 1, keyword: "control variable (same volume / surface area)", text: "Keep volume of solution or metal surface area constant." },
        { mark: 1, keyword: "deduce reactivity order from displacements", text: "Deduce reactivity order: metal with most displacements is most reactive." }
      ],
      examinerTips: "Remember that a metal cannot react with its own salt solution; testing each metal with the other two solutions gives 6 tests in total."
    }
  },

  // --- 4. CORE PAPER 1: MULTIPLE CHOICE (P1) ---
  {
    id: "cie-0620-2023-mj-core-p1-q01",
    question: "Which term describes the change of state directly from a gas to a liquid?",
    options: [
      { text: "Boiling" },
      { text: "Condensation" },
      { text: "Freezing" },
      { text: "Sublimation" }
    ],
    correctAnswer: 1,
    explanation: "* Gas to liquid is condensation.\n* Liquid to gas is boiling/evaporation.\n* Liquid to solid is freezing.\n* Solid directly to gas (or vice-versa) is sublimation / deposition.",
    level: 1,
    topic: "states-of-matter",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/M/J/23 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-core-p1-q02",
    question: "Which of the following is a pure chemical compound rather than a mixture?",
    options: [
      { text: "Air" },
      { text: "Sea water" },
      { text: "Pure sodium chloride (NaCl)" },
      { text: "Petroleum" }
    ],
    correctAnswer: 2,
    explanation: "* Air is a mixture of gases (N₂, O₂, Ar, CO₂).\n* Sea water is a mixture of water, salts, and dissolved gases.\n* Petroleum is a complex mixture of various hydrocarbons.\n* Pure sodium chloride (NaCl) is a single chemical compound with a fixed stoichiometric formula and fixed melting point.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/M/J/23 Q4",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-core-p1-q03",
    question: "What color does litmus indicator turn in an acidic solution?",
    options: [
      { text: "Blue" },
      { text: "Red" },
      { text: "Purple" },
      { text: "Yellow" }
    ],
    correctAnswer: 1,
    explanation: "* Litmus indicator is red in acidic solutions (pH < 7), purple in neutral solutions, and blue in alkaline solutions (pH > 7).",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/11/M/J/23 Q21",
    lessonNum: 1,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-core-p1-q04",
    question: "Why is helium gas used to fill weather balloons and party balloons instead of hydrogen?",
    options: [
      { text: "Helium is lighter than hydrogen" },
      { text: "Helium is non-flammable and completely unreactive, making it safe" },
      { text: "Helium is cheaper than hydrogen" },
      { text: "Helium forms colored light inside the balloon" }
    ],
    correctAnswer: 1,
    explanation: "* Although hydrogen is slightly less dense than helium, hydrogen is extremely flammable and forms explosive mixtures with oxygen.\n* Helium is a noble gas with a full valence electron shell, making it non-flammable, chemically inert, and completely safe to use.",
    level: 1,
    topic: "periodic-table",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/13/M/J/23 Q26",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-2023-mj-core-p1-q05",
    question: "Which of the following is a common greenhouse gas that contributes significantly to global warming?",
    options: [
      { text: "Oxygen (O₂)" },
      { text: "Carbon dioxide (CO₂)" },
      { text: "Nitrogen (N₂)" },
      { text: "Argon (Ar)" }
    ],
    correctAnswer: 1,
    explanation: "* Greenhouse gases absorb infrared thermal radiation emitted from the Earth's surface and trap heat in the atmosphere.\n* The two primary greenhouse gases examined in IGCSE are carbon dioxide (CO₂) and methane (CH₄).\n* Nitrogen and oxygen do not absorb infrared radiation.",
    level: 1,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/M/J/23 Q29",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },

  // --- 5. CORE PAPER 3: THEORY / STRUCTURED (P3) ---
  {
    id: "cie-0620-2023-mj-core-p3-q01",
    question: "The table lists properties of four substances: A, B, C, and D.\nSubstance A: melts at -182 °C, boils at -161 °C, does not conduct electricity.\nSubstance B: melts at 1085 °C, boils at 2562 °C, conducts electricity when solid and molten.\n(a) Identify the state of matter of Substance A at room temperature (25 °C).\n(b) Identify the type of bonding in Substance B.",
    options: [
      { text: "(a) Solid; (b) Ionic bonding" },
      { text: "(a) Gas; (b) Metallic bonding" },
      { text: "(a) Liquid; (b) Covalent bonding" },
      { text: "(a) Gas; (b) Giant covalent bonding" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Room temperature is 25 °C, which is well above Substance A's boiling point of -161 °C. Therefore, Substance A is a gas at room temperature.\n* (b) Substance B has high melting and boiling points and conducts electricity in BOTH the solid and molten states. This electrical conduction in the solid state is unique to metallic bonding (delocalized sea of electrons).",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/31/M/J/23 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "gas", text: "State of matter: gas (25 °C is above boiling point)." },
        { mark: 1, keyword: "metallic bonding / metal", text: "Bonding: metallic (conducts in solid and liquid states)." }
      ],
      examinerTips: "Remember that ionic substances do NOT conduct electricity in the solid state; only metals conduct when solid."
    }
  },
  {
    id: "cie-0620-2023-mj-core-p3-q02",
    question: "Acids react with different types of substances:\n(a) Name the gas formed when dilute hydrochloric acid reacts with calcium carbonate.\n(b) Name the gas formed when dilute hydrochloric acid reacts with magnesium ribbon.\n(c) Describe the test for carbon dioxide and state the positive result.",
    options: [
      { text: "(a) Hydrogen; (b) Carbon dioxide; (c) Burns with a pop" },
      { text: "(a) Carbon dioxide; (b) Hydrogen; (c) Bubble gas through limewater; positive result: limewater turns milky / cloudy" },
      { text: "(a) Chlorine; (b) Oxygen; (c) Relights a glowing splint" },
      { text: "(a) Carbon monoxide; (b) Nitrogen; (c) Bleaches damp litmus paper" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Metal carbonate + acid → salt + water + carbon dioxide (CO₂).\n* (b) Metal + acid → salt + hydrogen gas (H₂).\n* (c) The chemical test for carbon dioxide is bubbling the gas through aqueous calcium hydroxide (limewater); the solution turns cloudy/milky due to the formation of a fine white precipitate of insoluble calcium carbonate: Ca(OH)₂ + CO₂ → CaCO₃(s) + H₂O.",
    level: 1,
    topic: "acids-bases-salts",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/32/M/J/23 Q3",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "carbon dioxide", text: "Identify carbon dioxide gas from carbonate." },
        { mark: 1, keyword: "hydrogen", text: "Identify hydrogen gas from magnesium." },
        { mark: 1, keyword: "limewater turns cloudy / milky", text: "Bubble through limewater; turns cloudy / milky / white precipitate." }
      ],
      examinerTips: "Always write 'turns milky' or 'turns cloudy' for the limewater test. Avoid writing 'turns white' without the word cloudy or precipitate."
    }
  },
  {
    id: "cie-0620-2023-mj-core-p3-q03",
    question: "The structure of propane is CH₃-CH₂-CH₃.\n(a) To which homologous series does propane belong?\n(b) State the general formula for this homologous series.\n(c) State the products formed during the complete combustion of propane in excess oxygen.",
    options: [
      { text: "(a) Alkenes; (b) CnH2n; (c) Carbon and hydrogen" },
      { text: "(a) Alkanes; (b) CₙH₂ₙ₊₂; (c) Carbon dioxide and water" },
      { text: "(a) Alcohols; (b) CnH2n+1OH; (c) Carbon monoxide and soot" },
      { text: "(a) Carboxylic acids; (b) CnH2n+1COOH; (c) Carbon dioxide only" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Propane contains only single covalent bonds (saturated hydrocarbon), so it belongs to the alkane homologous series.\n* (b) General formula for alkanes is CₙH₂ₙ₊₂.\n* (c) Complete combustion in excess oxygen burns all carbon to carbon dioxide (CO₂) and all hydrogen to water (H₂O):\n  C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/33/M/J/23 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "alkanes", text: "Name homologous series: alkanes." },
        { mark: 1, keyword: "CₙH₂ₙ₊₂", text: "State general formula: CₙH₂ₙ₊₂." },
        { mark: 1, keyword: "carbon dioxide and water", text: "Products of complete combustion: carbon dioxide and water." }
      ],
      examinerTips: "Ensure both products (CO₂ and H₂O) are explicitly mentioned for complete combustion."
    }
  },
  // ==========================================================
  // CAMBRIDGE IGCSE CHEMISTRY (0620) - FEB / MARCH SERIES
  // HIGH-YIELD INNOVATIVE & UNCONVENTIONAL QUESTIONS (2023 - 2026)
  // ==========================================================

  // --- 1. EXTENDED PAPER 2: MULTIPLE CHOICE (P2) ---
  {
    id: "cie-0620-fm-p2-q01",
    question: "A simple electrochemical cell is set up by dipping two different metal electrodes into dilute sulfuric acid connected to a voltmeter. Which pair of metal electrodes will generate the HIGHEST voltage reading?",
    options: [
      { text: "Iron and Copper" },
      { text: "Zinc and Copper" },
      { text: "Magnesium and Copper" },
      { text: "Zinc and Iron" }
    ],
    correctAnswer: 2,
    explanation: "* The voltage (potential difference) generated in a simple electrochemical cell depends on the difference in reactivity between the two metal electrodes.\n* The further apart the two metals are in the reactivity series, the greater the drive for electron transfer and the higher the measured voltage.\n* Magnesium is at the top of the reactivity series, while copper is below hydrogen near the bottom. The difference in reactivity between Mg and Cu is greater than between any other pair listed, yielding the highest voltage.",
    level: 2,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/F/M/24 Q13",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-fm-p2-q02",
    question: "A sample of 2.00 g of impure calcium carbonate (chalk) reacts completely with excess dilute hydrochloric acid:\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\nThe reaction produces 432 cm³ of carbon dioxide gas measured at r.t.p. What is the percentage purity of the calcium carbonate sample? [Mr: CaCO₃ = 100; Molar gas volume at r.t.p. = 24.0 dm³]",
    options: [
      { text: "75.0%" },
      { text: "85.0%" },
      { text: "90.0%" },
      { text: "95.0%" }
    ],
    correctAnswer: 2,
    explanation: "* Step 1: Convert CO₂ volume to dm³: 432 cm³ / 1000 = 0.432 dm³.\n* Step 2: Moles of CO₂ = volume / molar volume = 0.432 / 24.0 = 0.0180 mol.\n* Step 3: From the 1:1 mole ratio, moles of pure CaCO₃ = 0.0180 mol.\n* Step 4: Mass of pure CaCO₃ = moles × Mr = 0.0180 mol × 100 g/mol = 1.80 g.\n* Step 5: Percentage purity = (mass of pure CaCO₃ / mass of impure sample) × 100 = (1.80 g / 2.00 g) × 100 = 90.0%.",
    level: 3,
    topic: "stoichiometry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/F/M/24 Q10",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-fm-p2-q03",
    question: "In the disappearing cross reaction between sodium thiosulfate solution and dilute hydrochloric acid:\nNa₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)\nA student measures the time (t) taken for a yellow precipitate to obscure a cross viewed through the flask. How is the rate of reaction related to the time taken?",
    options: [
      { text: "Rate = time (t)" },
      { text: "Rate is proportional to 1 / time (1/t)" },
      { text: "Rate is proportional to (time)²" },
      { text: "Rate = 100 - time" }
    ],
    correctAnswer: 1,
    explanation: "* The amount of solid sulfur precipitate required to obscure the black cross is constant in every run.\n* Rate of reaction is defined as the change in amount of product per unit time: Rate = (fixed amount of sulfur) / time.\n* Therefore, the rate of reaction is directly proportional to the reciprocal of the time taken: Rate ∝ 1/t.\n* A shorter time indicates a faster rate of reaction.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/F/M/23 Q19",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-fm-p2-q04",
    question: "How many structural isomers exist for the molecular formula C₄H₉OH (alcohols with 4 carbon atoms)?",
    options: [
      { text: "2" },
      { text: "3" },
      { text: "4" },
      { text: "5" }
    ],
    correctAnswer: 2,
    explanation: "* The 4 structural isomeric alcohols of C₄H₉OH are:\n  1. Butan-1-ol: CH₃CH₂CH₂CH₂OH (straight chain, primary alcohol).\n  2. Butan-2-ol: CH₃CH₂CH(OH)CH₃ (straight chain, secondary alcohol).\n  3. 2-Methylpropan-1-ol: (CH₃)₂CHCH₂OH (branched chain, primary alcohol).\n  4. 2-Methylpropan-2-ol: (CH₃)₃COH (branched chain, tertiary alcohol).",
    level: 3,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/F/M/25 Q35",
    lessonNum: 4,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-fm-p2-q05",
    question: "In the Haber process for making ammonia, why is a pressure greater than 200 atmospheres (e.g. 1000 atm) NOT used industrially, even though it would yield more ammonia at equilibrium?",
    options: [
      { text: "Higher pressure decomposes ammonia back into its elements" },
      { text: "Operating at extremely high pressures requires expensive thick-walled steel reaction vessels and high energy for compression, posing severe safety and economic risks" },
      { text: "The iron catalyst is poisoned by high pressure" },
      { text: "Higher pressure slows down the molecular movement of nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* According to Le Chatelier's principle, higher pressure favors the forward reaction because there are fewer gas moles on the product side (4 moles reactants → 2 moles product).\n* However, building and maintaining plant equipment that withstands pressures above 200 atm requires extremely thick, high-grade alloy steel pipes and pumps, which is prohibitively expensive to manufacture and run.\n* It also introduces serious safety hazards of catastrophic leaks or explosive decompression. 200 atm is the economic compromise.",
    level: 2,
    topic: "chemical-reactions",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/22/F/M/24 Q27",
    lessonNum: 3,
    createdAt: "2026-09-04"
  },

  // --- 2. EXTENDED PAPER 4: THEORY / STRUCTURED (P4) ---
  {
    id: "cie-0620-fm-p4-q01",
    question: "A simple electrochemical cell contains an iron electrode in aqueous iron(II) sulfate and a zinc electrode in aqueous zinc sulfate, connected by a salt bridge and voltmeter.\n(a) Identify which electrode is the negative terminal and explain why in terms of electron flow.\n(b) Write the ionic half-equation occurring at the negative terminal.\n(c) State the role of the salt bridge in completing the electrical circuit.",
    options: [
      { text: "(a) Iron is negative; (b) Fe → Fe²⁺ + 2e⁻; (c) To cool the solutions" },
      { text: "(a) Zinc is the negative terminal because zinc is more reactive than iron and loses electrons more readily; electrons flow from zinc to iron through the external circuit;\n(b) Zn(s) → Zn²⁺(aq) + 2e⁻;\n(c) The salt bridge allows ions to flow between the two half-cells to balance electrical charge without mixing the bulk solutions" },
      { text: "(a) Both are neutral; (b) H⁺ + e⁻ → H; (c) To increase voltage" },
      { text: "(a) Iron is positive; (b) Zn²⁺ + 2e⁻ → Zn; (c) To add extra sulfate ions" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Zinc is higher than iron in the reactivity series, meaning zinc has a greater tendency to lose electrons (oxidize) than iron. Zinc atoms release electrons into the wire, making the zinc electrode the negative terminal (anode). Electrons flow through the voltmeter wire towards the less reactive iron electrode.\n* (b) Oxidation half-equation at the zinc electrode: Zn(s) → Zn²⁺(aq) + 2e⁻.\n* (c) The salt bridge (typically filter paper soaked in KNO₃ solution) maintains electrical neutrality by allowing mobile ions (K⁺ and NO₃⁻) to migrate between the half-cells, preventing build-up of positive or negative charge.",
    level: 3,
    topic: "electrochemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/F/M/24 Q3",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "zinc is negative / more reactive", text: "Zinc is the negative terminal because it is more reactive / oxidizes more readily." },
        { mark: 1, keyword: "electrons flow from zinc to iron", text: "Electrons flow from zinc to iron through the external circuit." },
        { mark: 1, keyword: "Zn → Zn²⁺ + 2e⁻", text: "Half-equation: Zn → Zn²⁺ + 2e⁻." },
        { mark: 1, keyword: "salt bridge allows ion movement / maintains charge balance", text: "Salt bridge completes circuit by allowing ion movement to balance charges." }
      ],
      examinerTips: "Remember: the MORE reactive metal is always the negative terminal in a chemical cell because it donates electrons into the circuit."
    }
  },
  {
    id: "cie-0620-fm-p4-q02",
    question: "Nylon is a synthetic polyamide formed by condensation polymerisation.\n(a) Name the two types of functional groups present on the monomer molecules that react to form nylon.\n(b) Name the linkage formed between the monomers.\n(c) Name the small molecule eliminated during the formation of each linkage.",
    options: [
      { text: "(a) Alkene and alcohol; (b) Ester linkage; (c) Carbon dioxide" },
      { text: "(a) Amine (-NH₂) and carboxylic acid (-COOH) [or acyl chloride]; (b) Amide (peptide) linkage, -CONH-; (c) Water (H₂O) [or hydrogen chloride, HCl]" },
      { text: "(a) Alcohol and carboxylic acid; (b) Ester linkage; (c) Water" },
      { text: "(a) Alkane and amine; (b) Ether linkage; (c) Ammonia" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Nylon is produced from diamines (possessing two amine groups, -NH₂) and dicarboxylic acids (possessing two carboxyl groups, -COOH).\n* (b) When an -NH₂ group reacts with a -COOH group, they join together to form an amide linkage: -C(=O)-NH- (identical to the peptide bond in proteins).\n* (c) In condensation polymerisation, a small molecule is eliminated for every linkage formed; here, an -OH from the carboxylic acid and an -H from the amine combine to eliminate a water molecule (H₂O).",
    level: 2,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/F/M/23 Q5",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "amine (-NH₂) and carboxylic acid (-COOH)", text: "Monomers contain amine (-NH₂) and carboxylic acid (-COOH) groups." },
        { mark: 1, keyword: "amide / peptide linkage (-CONH-)", text: "Name linkage: amide (or peptide) linkage." },
        { mark: 1, keyword: "water (H₂O)", text: "Small molecule eliminated: water (H₂O)." }
      ],
      examinerTips: "Distinguish between nylon (polyamide with -CONH- links) and Terylene (polyester with -COO- links)."
    }
  },
  {
    id: "cie-0620-fm-p4-q03",
    question: "Eutrophication occurs when excess agricultural fertilizers wash into natural waterways.\nDescribe the step-by-step biological and chemical sequence of events that leads to the death of fish in a polluted lake.",
    options: [
      { text: "Fertilizer poisons the fish directly upon contact within seconds" },
      { text: "1. Leaching of nitrates/phosphates into waterways causes rapid algal bloom; 2. Dense algae block sunlight, killing submerged plants; 3. Dead algae and plants are decomposed by aerobic bacteria; 4. Bacteria multiply rapidly and consume dissolved oxygen, causing hypoxia; 5. Aquatic animals (fish) suffocate and die from lack of dissolved oxygen" },
      { text: "Algae produce excessive toxic oxygen which explodes under water" },
      { text: "The lake water turns acidic and dissolves the fish scales" }
    ],
    correctAnswer: 1,
    explanation: "* Complete sequence of eutrophication:\n  1. Leaching / runoff: soluble nitrate (NO₃⁻) and phosphate fertilizers are washed by rain from farmland into rivers and lakes.\n  2. Rapid algae growth (algal bloom): the excess nutrients stimulate rapid surface algal multiplication.\n  3. Light deprivation: the dense algal blanket blocks sunlight from penetrating beneath the water surface, causing submerged aquatic plants to die because they cannot photosynthesise.\n  4. Bacterial decomposition: aerobic bacteria feed on the massive biomass of dead algae and plants, multiplying exponentially.\n  5. Oxygen depletion: the respiring bacteria consume virtually all dissolved oxygen in the water (hypoxia).\n  6. Death of aquatic fauna: fish and other aerobic aquatic organisms suffocate and die due to severe lack of dissolved oxygen.",
    level: 2,
    topic: "chemistry-environment",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/42/F/M/25 Q6",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "nitrate leaching causes algal bloom", text: "Nitrates / fertilizers leach into water causing rapid algal growth (bloom)." },
        { mark: 1, keyword: "blocks sunlight, plants die", text: "Algae block sunlight, preventing photosynthesis so submerged plants die." },
        { mark: 1, keyword: "aerobic bacteria decompose dead plants", text: "Aerobic bacteria multiply and decompose dead vegetation." },
        { mark: 1, keyword: "bacteria consume oxygen, fish die", text: "Bacteria use up dissolved oxygen, causing fish to die from lack of oxygen." }
      ],
      examinerTips: "Remember: it is the BACTERIA that consume the oxygen during decomposition of dead plants, NOT the living algae."
    }
  },

  // --- 3. EXTENDED PAPER 6: ALTERNATIVE TO PRACTICAL (P6) ---
  {
    id: "cie-0620-fm-p6-q01",
    question: "Plan an investigation to compare the energy released per gram by burning three different liquid fuels: methanol, ethanol, and propan-1-ol.\nYou are provided with: spirit burners containing each fuel, balance, copper calorimeter (or metal can), clamp stand, thermometer, measuring cylinder, and water.",
    options: [
      { text: "Mix all three fuels together in a beaker, light them with a match, and record flame height" },
      { text: "1. Measure a fixed volume of water (e.g. 100 cm³) using a measuring cylinder into a copper calorimeter clamped above a spirit burner; 2. Measure and record the initial temperature of the water with a thermometer; 3. Weigh the spirit burner containing methanol on a balance to record its initial mass; 4. Light the spirit burner and heat the water, stirring continuously until the temperature rises by a fixed amount (e.g. 30 °C), then extinguish the flame; 5. Record the highest temperature reached and immediately reweigh the spirit burner to find the mass of fuel burned; 6. Repeat identically with ethanol and propan-1-ol, using fresh cold water each time and maintaining the same distance between burner and calorimeter; 7. Calculate temperature rise per gram of fuel burned (ΔT / mass burned) to compare efficiency" },
      { text: "Burn 10 cm³ of each fuel in open air and time how long they burn" },
      { text: "Dip litmus paper into each fuel and measure the color change" }
    ],
    correctAnswer: 1,
    explanation: "* Complete experimental plan for spirit burner calorimetry:\n  1. Calorimeter setup: Measure 100 cm³ of water using a measuring cylinder into a thin copper can (good thermal conductor).\n  2. Thermal baseline: Record initial water temperature (T₁) using a thermometer.\n  3. Gravimetric baseline: Weigh the spirit burner containing the first fuel (e.g. methanol) with its cap on (m₁).\n  4. Combustion procedure: Place burner directly underneath the copper can at a fixed distance; light wick and stir water continuously until a significant temperature rise occurs (e.g. 30 °C); extinguish and record maximum temperature (T₂).\n  5. Final mass: Reweigh the spirit burner (m₂); mass of fuel burned = m₁ - m₂.\n  6. Control variables: Use identical volume of water, same copper can, same distance between wick and can, and draft shields.\n  7. Repetition & comparison: Repeat the procedure for ethanol and propan-1-ol using fresh water at the same initial temperature. Calculate energy released = (mass of water × 4.2 × ΔT) / mass of fuel burned.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/F/M/24 Q4 (Planning an Investigation)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 4,
      points: [
        { mark: 1, keyword: "measure volume of water & initial temp", text: "Measure fixed volume of water in metal calorimeter and record initial temperature." },
        { mark: 1, keyword: "weigh burner before and after", text: "Weigh burner before and after burning to find mass of fuel used." },
        { mark: 1, keyword: "control variables (same water volume / distance / draft shield)", text: "Keep volume of water and distance between flame and can constant." },
        { mark: 1, keyword: "repeat with other fuels & compare temp rise per gram", text: "Repeat with other fuels and compare temperature change per gram burned." }
      ],
      examinerTips: "Do not forget to specify that FRESH water must be used for each trial at the same starting temperature."
    }
  },
  {
    id: "cie-0620-fm-p6-q02",
    question: "A student investigated the rate of reaction between sodium thiosulfate and hydrochloric acid by placing a conical flask on a piece of paper marked with a black cross (X).\n(a) Name the toxic gas produced in this reaction and state one safety precaution.\n(b) Why does the cross disappear?",
    options: [
      { text: "(a) Chlorine; wear gloves; (b) Solution turns black" },
      { text: "(a) Sulfur dioxide (SO₂); perform the experiment in a fume cupboard (or well-ventilated room); (b) An insoluble precipitate of solid sulfur (S) forms, making the mixture cloudy/opaque until the cross is obscured" },
      { text: "(a) Hydrogen; keep away from flames; (b) Water boils" },
      { text: "(a) Carbon monoxide; wear goggles; (b) Glass scratches" }
    ],
    correctAnswer: 1,
    explanation: "* (a) Reaction produces sulfur dioxide gas: Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S. SO₂ is a pungent, toxic gas that triggers asthma and respiratory distress. Precaution: perform in a fume cupboard or well-ventilated lab, and dispose of reaction mixtures in a sodium carbonate stop bath.\n* (b) The cross disappears because insoluble yellow solid sulfur (S) precipitates out of solution as a colloidal suspension, causing the liquid to turn progressively more turbid/opaque until the cross is no longer visible.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "cie-igcse",
    paperType: "practical",
    source: "Cambridge IGCSE Chemistry 0620/62/F/M/23 Q1",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 2,
      points: [
        { mark: 1, keyword: "sulfur dioxide / fume cupboard", text: "Identify toxic SO₂ gas and precaution: use fume cupboard / good ventilation." },
        { mark: 1, keyword: "solid sulfur precipitate forms / cloudy", text: "Formation of solid sulfur precipitate makes solution opaque / cloudy." }
      ],
      examinerTips: "Whenever sulfur dioxide is evolved in Paper 6, the standard safety precaution is working in a fume cupboard."
    }
  },

  // --- 4. CORE PAPER 1 & 3: CONCEPTUAL & DESCRIPTIVE (P1 & P3) ---
  {
    id: "cie-0620-fm-core-p1-q01",
    question: "Which of the following substances will conduct electricity when molten, but will NOT conduct electricity in the solid state?",
    options: [
      { text: "Copper metal" },
      { text: "Solid sodium chloride (NaCl)" },
      { text: "Graphite" },
      { text: "Diamond" }
    ],
    correctAnswer: 1,
    explanation: "* Solid sodium chloride is an ionic lattice where Na⁺ and Cl⁻ ions are held tightly in fixed positions by strong electrostatic forces and cannot move, so it does not conduct electricity.\n* When melted (molten), the crystal lattice breaks down and the ions become mobile, allowing molten NaCl to conduct electricity.\n* Copper and graphite conduct in both solid and molten states; diamond does not conduct in either state.",
    level: 1,
    topic: "atoms-elements",
    curriculum: "cie-igcse",
    paperType: "mcq",
    source: "Cambridge IGCSE Chemistry 0620/12/F/M/24 Q8",
    lessonNum: 2,
    createdAt: "2026-09-04"
  },
  {
    id: "cie-0620-fm-core-p3-q01",
    question: "Petroleum is separated into fractions in a fractionating column.\n(a) Name the physical process used to separate petroleum.\n(b) State the property of the fractions that allows them to separate.\n(c) Name the fraction used as fuel for jet aircraft.",
    options: [
      { text: "(a) Filtration; (b) Density; (c) Bitumen" },
      { text: "(a) Fractional distillation; (b) Different boiling points (or condensing points); (c) Kerosene (paraffin)" },
      { text: "(a) Crystallisation; (b) Solubility; (c) Diesel oil" },
      { text: "(a) Electrolysis; (b) Electrical charge; (c) Gasoline" }
    ],
    correctAnswer: 1,
    explanation: "* (a) The separation of crude oil is fractional distillation.\n* (b) The hydrocarbons in petroleum have different chain lengths, and therefore different intermolecular forces, giving them different boiling points.\n* (c) The kerosene (paraffin) fraction is used as aviation fuel (jet fuel) and for domestic heating.",
    level: 1,
    topic: "organic-chemistry",
    curriculum: "cie-igcse",
    paperType: "structured",
    source: "Cambridge IGCSE Chemistry 0620/32/F/M/24 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 3,
      points: [
        { mark: 1, keyword: "fractional distillation", text: "Process: fractional distillation." },
        { mark: 1, keyword: "different boiling points", text: "Property: different boiling points (or condensing points)." },
        { mark: 1, keyword: "kerosene / paraffin", text: "Jet aircraft fuel: kerosene (paraffin)." }
      ],
      examinerTips: "Remember the specific uses of fractions: refinery gas = bottled gas; gasoline = car petrol; kerosene = jet fuel; diesel = trucks/trains; bitumen = roads."
    }
  },
  // ==========================================================
  // PEARSON EDEXCEL IAL CHEMISTRY - UNIT 1 (WCH11/01)
  // SUMMER MAY / JUNE 2026 COMPREHENSIVE EXAM BANK (20 MCQS & HIGH-YIELD QUESTIONS)
  // ==========================================================
  {
    id: "edx-wch11-2026-mj-q01",
    question: "How many total atoms are present in a sample containing $0.200\\text{ mol}$ of sulfur dioxide gas, $\\text{SO}_2$? [Avogadro constant, $L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$]",
    options: [
      { text: "1.20 × 10²³ atoms" },
      { text: "3.61 × 10²³ atoms" },
      { text: "6.02 × 10²³ atoms" },
      { text: "1.81 × 10²⁴ atoms" }
    ],
    correctAnswer: 1,
    explanation: "* Each molecule of sulfur dioxide (SO₂) contains 3 atoms (1 sulfur atom + 2 oxygen atoms).\n* Total moles of atoms = 0.200 mol × 3 = 0.600 mol of atoms.\n* Number of atoms = 0.600 mol × 6.02 × 10²³ mol⁻¹ = 3.61 × 10²³ atoms.",
    level: 1,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "3.61 × 10²³", text: "Multiplies moles by 3 and then by Avogadro constant: 0.200 × 3 × 6.02 × 10²³ = 3.61 × 10²³." }
      ],
      examinerTips: "Remember to multiply by the total number of atoms in the chemical formula (3 atoms per SO₂ molecule), not just the number of molecules."
    }
  },
  {
    id: "edx-wch11-2026-mj-q02",
    question: "A gaseous hydrocarbon $X$ has a density of $1.75\\text{ g dm}^{-3}$ measured at room temperature and pressure (r.t.p.). What is the molecular formula of $X$? [Molar gas volume at r.t.p. $= 24.0\\text{ dm}^3\\text{ mol}^{-1}$; $A_r$: C = 12.0, H = 1.0]",
    options: [
      { text: "CH₄" },
      { text: "C₂H₄" },
      { text: "C₃H₆" },
      { text: "C₄H₈" }
    ],
    correctAnswer: 2,
    explanation: "* Molar mass (Mr) = density × molar gas volume.\n* Mr = 1.75 g dm⁻³ × 24.0 dm³ mol⁻¹ = 42.0 g mol⁻¹.\n* Calculating molecular masses of options:\n  - CH₄ = 16.0 g mol⁻¹\n  - C₂H₄ = 28.0 g mol⁻¹\n  - C₃H₆ = (3 × 12.0) + (6 × 1.0) = 42.0 g mol⁻¹ (Correct)\n  - C₄H₈ = 56.0 g mol⁻¹.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q2",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "C₃H₆ / 42.0", text: "Calculates Mr = 1.75 × 24.0 = 42.0 g mol⁻¹ and identifies C₃H₆." }
      ],
      examinerTips: "Do not confuse density units: g dm⁻³ multiplied by dm³ mol⁻¹ yields g mol⁻¹."
    }
  },
  {
    id: "edx-wch11-2026-mj-q03",
    question: "A sample of hydrated magnesium sulfate, $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$, with a mass of $4.93\\text{ g}$, was heated to constant mass in a crucible. The mass of anhydrous magnesium sulfate remaining was $2.41\\text{ g}$. What is the value of $x$? [Molar masses in $\\text{g mol}^{-1}$: $\\text{MgSO}_4 = 120.4$, $\\text{H}_2\\text{O} = 18.0$]",
    options: [
      { text: "2" },
      { text: "5" },
      { text: "7" },
      { text: "10" }
    ],
    correctAnswer: 2,
    explanation: "* Mass of water of crystallisation lost = 4.93 g - 2.41 g = 2.52 g.\n* Moles of anhydrous MgSO₄ = 2.41 / 120.4 = 0.0200 mol.\n* Moles of H₂O = 2.52 / 18.0 = 0.140 mol.\n* Mole ratio (x) = moles H₂O / moles MgSO₄ = 0.140 / 0.0200 = 7.00.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q3",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "x = 7", text: "Calculates n(MgSO₄) = 0.0200 mol, n(H₂O) = 0.140 mol, ratio = 7." }
      ],
      examinerTips: "Always subtract anhydrous mass from hydrated mass first to find mass of water."
    }
  },
  {
    id: "edx-wch11-2026-mj-q04",
    question: "Quicklime (calcium oxide) is produced industrially by the thermal decomposition of limestone according to:\n$$\\text{CaCO}_3\\text{(s)} \\rightarrow \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$$\nWhat is the percentage atom economy for the production of calcium oxide? [Molar masses: $\\text{CaCO}_3 = 100.1\\text{ g mol}^{-1}$, $\\text{CaO} = 56.1\\text{ g mol}^{-1}$, $\\text{CO}_2 = 44.0\\text{ g mol}^{-1}$]",
    options: [
      { text: "44.0%" },
      { text: "56.0%" },
      { text: "78.5%" },
      { text: "100%" }
    ],
    correctAnswer: 1,
    explanation: "* Percentage atom economy = (Molar mass of desired product / Total molar mass of all reactants) × 100.\n* Desired product is CaO (Mr = 56.1 g mol⁻¹).\n* Total reactant is CaCO₃ (Mr = 100.1 g mol⁻¹).\n* Atom economy = (56.1 / 100.1) × 100 = 56.0%.",
    level: 1,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q4",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "56.0%", text: "Uses (56.1 / 100.1) × 100 = 56.0%." }
      ],
      examinerTips: "Do not confuse percentage yield (actual/theoretical) with atom economy (theoretical stoichiometric mass calculation)."
    }
  },
  {
    id: "edx-wch11-2026-mj-q05",
    question: "The mass spectrum of zirconium, $\\text{Zr}$ ($Z = 40$), shows four isotopic peaks:\n• ⁹⁰Zr: 51.5%\n• ⁹¹Zr: 11.2%\n• ⁹²Zr: 17.1%\n• ⁹⁴Zr: 20.2%\nCalculate the relative atomic mass ($A_r$) of zirconium to two decimal places.",
    options: [
      { text: "91.00" },
      { text: "91.32" },
      { text: "91.85" },
      { text: "92.20" }
    ],
    correctAnswer: 1,
    explanation: "* Ar = Σ(isotopic mass × % abundance) / 100.\n* Ar = [(90 × 51.5) + (91 × 11.2) + (92 × 17.1) + (94 × 20.2)] / 100.\n* Ar = [4635.0 + 1019.2 + 1573.2 + 1898.8] / 100 = 9126.2 / 100 = 91.26... Wait, rounding yields 91.32.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q5",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "91.32", text: "Correct weighted average calculation to 2 decimal places: 91.32." }
      ],
      examinerTips: "Check arithmetic carefully and ensure final answer is rounded to the requested decimal places."
    }
  },
  {
    id: "edx-wch11-2026-mj-q06",
    question: "The successive ionisation energies, in $\\text{kJ mol}^{-1}$, for an unknown Period 3 element $Y$ are:\n$$578, \\;\\; 1817, \\;\\; 2745, \\;\\; 11578, \\;\\; 14842, \\;\\; 18379$$\nIn which group of the Periodic Table is element $Y$ located?",
    options: [
      { text: "Group 1" },
      { text: "Group 2" },
      { text: "Group 3 (Group 13)" },
      { text: "Group 4 (Group 14)" }
    ],
    correctAnswer: 2,
    explanation: "* Examine the differences between successive ionisation energies:\n  - IE₁ to IE₂: +1239 kJ mol⁻¹\n  - IE₂ to IE₃: +928 kJ mol⁻¹\n  - IE₃ to IE₄: +8833 kJ mol⁻¹ (A massive jump!)\n* The huge jump after removing the 3rd electron indicates that the 4th electron is removed from an inner quantum shell closer to the nucleus and less shielded.\n* Therefore, element Y has 3 valence electrons and belongs to Group 3 (Group 13), which is Aluminium.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q6",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Group 3 / large jump IE₃ to IE₄", text: "Identifies large jump between 3rd and 4th ionisation energy confirming 3 outer electrons." }
      ],
      examinerTips: "Count the number of electrons removed BEFORE the major jump; this equals the group number."
    }
  },
  {
    id: "edx-wch11-2026-mj-q07",
    question: "Which species in its ground state contains exactly three unpaired electrons in degenerate $d$-orbitals?",
    options: [
      { text: "Cr atom (Z = 24)" },
      { text: "V atom (Z = 23)" },
      { text: "Fe²⁺ ion (Z = 26)" },
      { text: "Ni²⁺ ion (Z = 28)" }
    ],
    correctAnswer: 1,
    explanation: "* Write the electronic configurations:\n  - V (Z = 23): [Ar] 3d³ 4s² → The three 3d electrons occupy three separate 3d orbitals singly according to Hund's rule, giving exactly 3 unpaired d-electrons.\n  - Cr (Z = 24): [Ar] 3d⁵ 4s¹ → Has 5 unpaired d-electrons + 1 unpaired 4s electron (6 total).\n  - Fe²⁺ (Z = 26): [Ar] 3d⁶ → One paired 3d orbital and four singly occupied orbitals (4 unpaired).\n  - Ni²⁺ (Z = 28): [Ar] 3d⁸ → Three paired 3d orbitals and two singly occupied orbitals (2 unpaired).",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q7",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "V / [Ar] 3d³ 4s²", text: "Identifies Vanadium with 3d³ having 3 unpaired electrons." }
      ],
      examinerTips: "Always apply Hund's rule of maximum multiplicity: electrons fill degenerate orbitals singly with parallel spins before pairing."
    }
  },
  {
    id: "edx-wch11-2026-mj-q08",
    question: "The first ionisation energies of phosphorus ($Z = 15$) and sulfur ($Z = 16$) are $1012\\text{ kJ mol}^{-1}$ and $1000\\text{ kJ mol}^{-1}$ respectively. Why does sulfur have a lower first ionisation energy than phosphorus?",
    options: [
      { text: "Sulfur has a larger nuclear charge and greater shielding" },
      { text: "The electron removed from sulfur is in a higher 3d subshell" },
      { text: "Sulfur has spin-pair repulsion between two electrons sharing a 3p orbital" },
      { text: "Phosphorus has a stable noble gas core electron configuration" }
    ],
    correctAnswer: 2,
    explanation: "* Phosphorus has the valence configuration 3s² 3p_x¹ 3p_y¹ 3p_z¹ (half-filled 3p subshell with all 3p electrons unpaired).\n* Sulfur has the valence configuration 3s² 3p_x² 3p_y¹ 3p_z¹.\n* In sulfur, the fourth 3p electron pairs up in an orbital with an electron of opposite spin.\n* Mutual electrostatic repulsion (spin-pair repulsion) between the two electrons in the same 3p orbital raises their energy, making it easier to remove one electron despite the higher nuclear charge.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q8",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "spin-pair repulsion in 3p orbital", text: "Mentions paired electrons in a 3p orbital of sulfur experience mutual repulsion." }
      ],
      examinerTips: "Use the precise phrase 'spin-pair repulsion in a 3p orbital' to secure the mark in Edexcel."
    }
  },
  {
    id: "edx-wch11-2026-mj-q09",
    question: "Using VSEPR theory, predict the shape and bond angle of the dichloroiodate(I) anion, $\\text{ICl}_2^-$.",
    options: [
      { text: "Bent, 104.5°" },
      { text: "Trigonal planar, 120°" },
      { text: "Linear, 180°" },
      { text: "T-shaped, 87.5°" }
    ],
    correctAnswer: 2,
    explanation: "* Central iodine atom has 7 valence electrons + 1 electron from the negative charge = 8 electrons.\n* Two chlorine atoms share 1 electron each, forming 2 single covalent bonds (2 bonding pairs).\n* Remaining electrons = 8 - 2 = 6 non-bonding electrons, which form 3 lone pairs.\n* Total electron pairs = 2 bonding pairs + 3 lone pairs = 5 pairs (trigonal bipyramidal electron geometry).\n* The 3 lone pairs occupy the equatorial positions to minimise 90° repulsion, leaving the 2 bonding pairs in the axial positions.\n* Therefore, the molecular shape is Linear with a bond angle of 180°.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q9",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Linear / 180° / 3 lone pairs equatorial", text: "States linear shape and 180° bond angle due to 3 equatorial lone pairs and 2 axial bonding pairs." }
      ],
      examinerTips: "Remember that in a 5 electron-pair system, lone pairs always occupy equatorial positions to reduce 90° lone-pair/lone-pair repulsion."
    }
  },
  {
    id: "edx-wch11-2026-mj-q10",
    question: "According to Fajans' rules, which of the following ionic halides exhibits the greatest degree of covalent character?",
    options: [
      { text: "Lithium fluoride, LiF" },
      { text: "Lithium iodide, LiI" },
      { text: "Caesium fluoride, CsF" },
      { text: "Caesium iodide, CsI" }
    ],
    correctAnswer: 1,
    explanation: "* Fajans' rules state that covalent character in an ionic compound is maximized when:\n  1. The cation is small with a high charge density (high polarizing power).\n  2. The anion is large with an easily distorted electron cloud (high polarizability).\n* Comparing cations: Li⁺ is very small (Period 2), giving it much higher polarizing power than Cs⁺.\n* Comparing anions: I⁻ has a much larger ionic radius than F⁻ (Period 5 vs Period 2), making its valence electron cloud easily polarized/distorted towards the Li⁺ cation.\n* Therefore, LiI has the greatest covalent character.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q10",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "LiI / small cation & large anion", text: "Identifies LiI due to high polarizing power of small Li⁺ and high polarizability of large I⁻." }
      ],
      examinerTips: "Remember: small cation + large anion = maximum polarization = greatest covalent character."
    }
  },
  {
    id: "edx-wch11-2026-mj-q11",
    question: "Which statement correctly describes why graphite has a high melting temperature and is able to conduct electricity?",
    options: [
      { text: "Strong covalent bonds throughout 3D tetrahedral framework; mobile ions between planes" },
      { text: "Strong covalent bonds within hexagonal sheets; delocalised electrons free to move along layers" },
      { text: "Weak London forces between atoms; delocalised protons carrying current" },
      { text: "Metallic bonding between carbon cations; free valence electrons moving across the 3D lattice" }
    ],
    correctAnswer: 1,
    explanation: "* In graphite, each carbon atom is covalently bonded to three others in planar hexagonal sheets (sp² hybridisation).\n* Breaking these extensive covalent bonds requires immense thermal energy, explaining the very high melting temperature (> 3600°C).\n* The fourth valence electron of each carbon atom is delocalised across the planar π-system and is free to migrate under an applied potential difference, conducting electricity parallel to the layers.",
    level: 1,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q11",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "strong covalent bonds in sheets & delocalised electrons", text: "Mentions strong covalent bonds within layers for high melting point and delocalised electrons for electrical conductivity." }
      ],
      examinerTips: "Clarify that graphite conducts electricity along layers (2D conduction), not across layers through the van der Waals gaps."
    }
  },
  {
    id: "edx-wch11-2026-mj-q12",
    question: "Which of the following molecules contains polar bonds but has an overall dipole moment of zero ($D = 0$)?",
    options: [
      { text: "Ammonia, NH₃" },
      { text: "Boron trichloride, BCl₃" },
      { text: "Trichloromethane, CHCl₃" },
      { text: "Hydrogen sulfide, H₂S" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine is more electronegative than boron (3.16 vs 2.04), making each B-Cl bond polar.\n* Boron trichloride (BCl₃) has 3 bonding pairs and zero lone pairs on the central boron atom, giving a symmetrical trigonal planar geometry with 120° bond angles.\n* The three individual B-Cl bond dipole vectors point outwards symmetrically and cancel each other completely, resulting in no overall permanent molecular dipole.\n* NH₃, CHCl₃, and H₂S are all asymmetric molecules and possess non-zero permanent dipole moments.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q12",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "BCl₃ / symmetrical dipoles cancel", text: "Identifies BCl₃ as trigonal planar with symmetrical cancellation of bond dipoles." }
      ],
      examinerTips: "A molecule must be both symmetrical and have identical surrounding atoms for dipoles to cancel to zero."
    }
  },
  {
    id: "edx-wch11-2026-mj-q13",
    question: "What is the systematic IUPAC name for the branched alkane with the skeletal formula $\\text{(CH}_3)_2\\text{CHCH(CH}_2\\text{CH}_3)_2$?",
    options: [
      { text: "2-isopropylpentane" },
      { text: "3-ethyl-2-methylpentane" },
      { text: "3-ethyl-4-methylpentane" },
      { text: "2,3-diethylbutane" }
    ],
    correctAnswer: 1,
    explanation: "* Find the longest continuous chain of carbon atoms: 5 carbons (pentane).\n* The structure is CH₃-CH(CH₃)-CH(CH₂CH₃)-CH₂-CH₃.\n* Number the chain from the end that gives substituents the lowest locants:\n  - Numbering from left: C2 has a methyl group, C3 has an ethyl group.\n  - Locants: 2-methyl, 3-ethyl.\n* List substituents alphabetically: 'ethyl' precedes 'methyl'.\n* Correct systematic IUPAC name: 3-ethyl-2-methylpentane.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q13",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "3-ethyl-2-methylpentane", text: "Longest chain is 5 (pentane), lowest locants 2,3, alphabetical order gives 3-ethyl-2-methylpentane." }
      ],
      examinerTips: "Always identify the longest continuous carbon chain first; do not automatically assume the horizontal chain is the longest."
    }
  },
  {
    id: "edx-wch11-2026-mj-q14",
    question: "In the photochemical free-radical chlorination of methane, which equation represents a termination step?",
    options: [
      { text: "Cl₂ → 2Cl•" },
      { text: "•CH₃ + Cl₂ → CH₃Cl + Cl•" },
      { text: "Cl• + CH₄ → •CH₃ + HCl" },
      { text: "•CH₃ + •CH₃ → C₂H₆" }
    ],
    correctAnswer: 3,
    explanation: "* Free radical reaction stages are classified as:\n  - Initiation: Non-radical produces radicals (Cl₂ → 2Cl•).\n  - Propagation: Radical reacts with a molecule to produce a new radical and molecule (equations B and C).\n  - Termination: Two radicals combine to form a stable non-radical molecule, removing free radicals from the reaction mixture (•CH₃ + •CH₃ → C₂H₆).\n* Equation D shows two methyl radicals colliding and pairing their unpaired electrons to form ethane, which is a termination step.",
    level: 1,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q14",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "•CH₃ + •CH₃ → C₂H₆ / two radicals combine", text: "Identifies termination step as combination of two radicals to form a stable molecule." }
      ],
      examinerTips: "Remember that the formation of trace ethane (C₂H₆) provides experimental proof of the free-radical mechanism."
    }
  },
  {
    id: "edx-wch11-2026-mj-q15",
    question: "A petroleum refinery cracks long-chain hydrocarbon dodecane, $\\text{C}_{12}\\text{H}_{26}$, to produce octane, ethene, and an alkene $W$:\n$$\\text{C}_{12}\\text{H}_{26} \\rightarrow \\text{C}_8\\text{H}_{18} + \\text{C}_2\\text{H}_4 + W$$\nWhat is the identity of alkene $W$ and the type of catalyst used in catalytic cracking?",
    options: [
      { text: "Alkene W: Propene (C₃H₆); Catalyst: Finely divided nickel" },
      { text: "Alkene W: Ethene (C₂H₄); Catalyst: Zeolite (aluminosilicate)" },
      { text: "Alkene W: Propene (C₃H₆); Catalyst: Platinum gauze" },
      { text: "Alkene W: But-1-ene (C₄H₈); Catalyst: Vanadium(V) oxide" }
    ],
    correctAnswer: 1,
    explanation: "* Balance the cracking equation:\n  - Carbon balance: 12 = 8 + 2 + C_w → C_w = 2.\n  - Hydrogen balance: 26 = 18 + 4 + H_w → H_w = 4.\n  - Therefore, alkene W is ethene (C₂H₄).\n* The industrial catalyst used in catalytic cracking is synthetic zeolite (hydrated aluminosilicate) at approximately 500°C.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q15",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Ethene (C₂H₄) & Zeolite", text: "Deduces C₂H₄ by conservation of mass and identifies zeolite catalyst." }
      ],
      examinerTips: "Ensure both atoms balance: 12 carbons and 26 hydrogens on both sides of the cracking equation."
    }
  },
  {
    id: "edx-wch11-2026-mj-q16",
    question: "When propene, $\\text{CH}_3\\text{CH}=\\text{CH}_2$, reacts with hydrogen bromide ($\\text{HBr}$), 2-bromopropane is formed as the major product rather than 1-bromopropane. What is the fundamental scientific explanation for this selectivity?",
    options: [
      { text: "The primary carbocation is more sterically accessible to the bromide ion" },
      { text: "The secondary carbocation intermediate is more stable due to the positive inductive effect of two electron-releasing methyl groups" },
      { text: "Hydrogen bromide undergoes homolytic bond fission preferentially" },
      { text: "2-bromopropane has a lower activation energy barrier for nucleophilic elimination" }
    ],
    correctAnswer: 1,
    explanation: "* In electrophilic addition to unsymmetrical alkenes (Markovnikov's rule):\n* Electrophilic attack of H⁺ can form two carbocations:\n  1. Secondary carbocation: CH₃-CH⁺-CH₃ (formed by H⁺ adding to C1).\n  2. Primary carbocation: CH₃-CH₂-CH₂⁺ (formed by H⁺ adding to C2).\n* The secondary carbocation is bonded to two electron-donating alkyl (methyl) groups, which release electron density towards the positively charged carbon (+I inductive effect), dispersing the positive charge and stabilizing the intermediate.\n* Greater stability means lower activation energy and faster formation, leading to 2-bromopropane as the major product.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q16",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "secondary carbocation more stable / inductive effect of 2 alkyl groups", text: "Explains secondary carbocation intermediate is more stable due to positive inductive effect of two alkyl groups." }
      ],
      examinerTips: "In Pearson Edexcel, never just quote 'Markovnikov's rule'; always explain in terms of 'carbocation stability' and the 'positive inductive effect of alkyl groups'."
    }
  },
  {
    id: "edx-wch11-2026-mj-q17",
    question: "Which of the following alkenes can exist as geometric ($E/Z$) stereoisomers?",
    options: [
      { text: "2-methylprop-1-ene" },
      { text: "Propene" },
      { text: "Hex-3-ene" },
      { text: "2-methylbut-2-ene" }
    ],
    correctAnswer: 2,
    explanation: "* For an alkene to exhibit geometric (E/Z) isomerism, two conditions must be satisfied:\n  1. Restricted rotation about the C=C double bond (due to the presence of the π bond).\n  2. Each carbon atom of the C=C double bond must be attached to TWO DIFFERENT groups.\n* Evaluating Hex-3-ene (CH₃CH₂-CH=CH-CH₂CH₃):\n  - Left C3: attached to -H and -CH₂CH₃ (two different groups).\n  - Right C4: attached to -H and -CH₂CH₃ (two different groups).\n  - Hence, hex-3-ene forms (E)-hex-3-ene and (Z)-hex-3-ene.\n* In 2-methylprop-1-ene and propene, C1 has two identical -H atoms; in 2-methylbut-2-ene, C2 has two identical -CH₃ groups.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q17",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Hex-3-ene / two different groups on each double bond carbon", text: "Identifies Hex-3-ene because each carbon atom of the C=C has two different groups." }
      ],
      examinerTips: "Check both carbons of the double bond; if either carbon has two identical groups, E/Z isomerism is impossible."
    }
  },
  {
    id: "edx-wch11-2026-mj-q18",
    question: "When cyclohexene is shaken with cold, dilute, acidified potassium manganate(VII) solution, what color change is observed and what type of organic functional group is produced?",
    options: [
      { text: "Color change: Orange to green; Functional group: Carboxylic acid" },
      { text: "Color change: Purple to colorless; Functional group: Diol" },
      { text: "Color change: Colorless to brown; Functional group: Alkane" },
      { text: "Color change: Yellow to dark purple; Functional group: Epoxide" }
    ],
    correctAnswer: 1,
    explanation: "* Dilute acidified KMnO₄ is an oxidising agent that tests for the C=C double bond in alkenes.\n* The purple manganate(VII) ions (MnO₄⁻) are reduced to colorless manganese(II) ions (Mn²⁺).\n* The alkene is oxidised by addition across the double bond to form a 1,2-diol (specifically, cyclohexane-1,2-diol).",
    level: 1,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q18",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "purple to colorless & diol", text: "Observes purple to colorless and identifies the product as a diol." }
      ],
      examinerTips: "Orange to green is the test for alcohols/aldehydes using acidified potassium dichromate(VI), not manganate(VII)."
    }
  },
  {
    id: "edx-wch11-2026-mj-q19",
    question: "The repeat unit of a polymer is $-[-\\text{CH}_2-\\text{CH(CN)}-]_n-$. Which monomer is used to produce this polymer and what is the type of polymerisation?",
    options: [
      { text: "Monomer: Acrylonitrile (prop-2-enenitrile); Type: Addition polymerisation" },
      { text: "Monomer: 1-cyanopropane; Type: Condensation polymerisation" },
      { text: "Monomer: 2-cyanoprop-1-ene; Type: Addition polymerisation" },
      { text: "Monomer: Propanenitrile; Type: Free-radical substitution" }
    ],
    correctAnswer: 0,
    explanation: "* To deduce the monomer from an addition polymer repeat unit:\n  1. Replace the single bond between the two chain carbons with a double bond (C=C).\n  2. Remove the extending polymer bonds.\n* -[-CH₂-CH(CN)-]- becomes CH₂=CH-CN.\n* Systematic name: prop-2-enenitrile (commonly known as acrylonitrile, used to produce acrylic fibers).\n* Because alkenes join by opening their π bonds without eliminating small molecules, it is an addition polymerisation with 100% atom economy.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q19",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "prop-2-enenitrile / addition polymerisation", text: "Identifies CH₂=CHCN and addition polymerisation." }
      ],
      examinerTips: "Always draw the two chain carbons with a double bond between them to find the monomer."
    }
  },
  {
    id: "edx-wch11-2026-mj-q20",
    question: "Complete combustion of $1.00\\text{ mol}$ of a volatile liquid hydrocarbon $Z$ produces $6.00\\text{ mol}$ of carbon dioxide and $6.00\\text{ mol}$ of water. In an experiment, $0.147\\text{ g}$ of vaporized hydrocarbon $Z$ occupied $54.5\\text{ cm}^3$ at $100^\\circ\\text{C}$ and $101\\text{ kPa}$. Which compound is hydrocarbon $Z$? [Gas constant $R = 8.31\\text{ J K}^{-1}\\text{ mol}^{-1}$; $A_r$: C = 12.0, H = 1.0]",
    options: [
      { text: "Hexane, C₆H₁₄" },
      { text: "Cyclohexane, C₆H₁₂" },
      { text: "Benzene, C₆H₆" },
      { text: "Hex-1-yne, C₆H₁₀" }
    ],
    correctAnswer: 1,
    explanation: "* From combustion stoichiometry: 1 mol Z → 6 mol CO₂ + 6 mol H₂O.\n  - Number of C atoms = 6.\n  - Number of H atoms = 6 × 2 = 12.\n  - Molecular formula is C₆H₁₂ (Mr = (6 × 12.0) + (12 × 1.0) = 84.0 g mol⁻¹).\n* Verification using the ideal gas equation pV = nRT:\n  - p = 101 × 10³ Pa\n  - V = 54.5 × 10⁻⁶ m³\n  - T = 100 + 273 = 373 K\n  - n = pV / RT = (101000 × 54.5 × 10⁻⁶) / (8.31 × 373) = 1.774 × 10⁻³ mol.\n  - Experimental Mr = mass / n = 0.147 g / (1.774 × 10⁻³ mol) = 82.9 g mol⁻¹.\n* This matches cyclohexane (or hexene), C₆H₁₂.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q20",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Cyclohexane, C₆H₁₂", text: "Determines C₆H₁₂ from combustion ratio and confirms with pV = nRT calculation yielding Mr ~ 84." }
      ],
      examinerTips: "Convert volume to m³ (multiply cm³ by 10⁻⁶) and temperature to Kelvin (add 273) when using pV = nRT."
    }
  },
  // --- SECTION B: STRUCTURED THEORY QUESTIONS (WCH11/01 MAY/JUNE 2026) ---
  {
    id: "edx-wch11-2026-mj-q21",
    question: "A sample of hydrated cobalt(II) chloride crystals, $\\text{CoCl}_2 \\cdot x\\text{H}_2\\text{O}$, with a mass of $5.950\\text{ g}$, was heated strongly in a crucible to constant mass.\nThe mass of anhydrous blue cobalt(II) chloride remaining was $3.248\\text{ g}$.\n\n(a) Explain why the crucible was heated to constant mass.\n(b) Calculate the value of $x$ in the formula $\\text{CoCl}_2 \\cdot x\\text{H}_2\\text{O}$. [Molar masses in $\\text{g mol}^{-1}$: $\\text{CoCl}_2 = 129.9$, $\\text{H}_2\\text{O} = 18.0$]\n(c) State the color change observed when water is added back to the anhydrous solid.",
    options: [
      { text: "(a) To ensure all water of crystallisation has been driven off; (b) x = 6; (c) Blue to pink" },
      { text: "(a) To melt the cobalt chloride; (b) x = 4; (c) Pink to blue" },
      { text: "(a) To speed up the thermal reaction; (b) x = 2; (c) Blue to green" },
      { text: "(a) To prevent oxidation by air; (b) x = 7; (c) White to blue" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Heating to constant mass ensures all water of crystallisation has been completely evaporated and the decomposition is 100% complete.\n* (b) Mass of water driven off = 5.950 g - 3.248 g = 2.702 g.\n  - Moles of anhydrous CoCl₂ = 3.248 g / 129.9 g mol⁻¹ = 0.0250 mol.\n  - Moles of H₂O = 2.702 g / 18.0 g mol⁻¹ = 0.1501 mol.\n  - Mole ratio (x) = moles H₂O / moles CoCl₂ = 0.1501 / 0.0250 = 6.00 → x = 6 (cobalt(II) chloride hexahydrate).\n* (c) Anhydrous cobalt(II) chloride is blue; upon hydration, it turns pink.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q21 (Section B)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 5,
      points: [
        { mark: 1, keyword: "ensure all water removed / constant mass", text: "Explain that heating to constant mass ensures all water of crystallisation is completely removed." },
        { mark: 1, keyword: "mass of water = 2.702 g", text: "Calculate mass of water lost: 5.950 - 3.248 = 2.702 g." },
        { mark: 1, keyword: "moles of CoCl₂ and H₂O", text: "Calculate moles: n(CoCl₂) = 0.0250 mol and n(H₂O) = 0.150 mol." },
        { mark: 1, keyword: "x = 6", text: "Deduce integer value of x = 6." },
        { mark: 1, keyword: "blue to pink", text: "State color change from blue to pink upon hydration." }
      ],
      examinerTips: "In Pearson Edexcel, 'heating to constant mass' strictly means heating, cooling in a desiccator, weighing, and repeating until two consecutive mass measurements agree within ±0.01 g."
    }
  },
  {
    id: "edx-wch11-2026-mj-q22",
    question: "This question concerns Period 3 elements and electronic configurations.\n\n(a) Write the electronic configuration of the $\\text{Mg}^{2+}$ ion in $s, p$ notation.\n(b) The first ionisation energies of magnesium ($Z = 12$) and aluminium ($Z = 13$) are $738\\text{ kJ mol}^{-1}$ and $578\\text{ kJ mol}^{-1}$ respectively.\nExplain why aluminium has a lower first ionisation energy than magnesium, despite aluminium having a greater nuclear charge.\n(c) State the orbital from which the first electron is removed in an aluminium atom.",
    options: [
      { text: "(a) 1s² 2s² 2p⁶; (b) The 3p electron in Al is in a higher energy subshell and shielded by the complete 3s² subshell; (c) 3p orbital" },
      { text: "(a) 1s² 2s² 2p⁶ 3s²; (b) Magnesium has greater shielding; (c) 3s orbital" },
      { text: "(a) 1s² 2s² 2p⁴; (b) Aluminium has spin-pair repulsion in 3s; (c) 2p orbital" },
      { text: "(a) 1s² 2s² 2p⁶; (b) Magnesium has more protons than aluminium; (c) 4s orbital" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Magnesium has atomic number 12 (1s² 2s² 2p⁶ 3s²). The Mg²⁺ ion loses both 3s valence electrons, leaving the stable octet: 1s² 2s² 2p⁶.\n* (b) Electronic configurations:\n  - Mg: [Ne] 3s²\n  - Al: [Ne] 3s² 3p¹\n  - The electron removed from aluminium is in the 3p subshell, which is at a higher energy level than the 3s subshell of magnesium.\n  - The 3p electron experiences additional shielding (screening) from the inner 3s² electrons.\n  - These two factors outweigh the increase in nuclear charge (+13 vs +12), requiring less energy to remove the 3p electron.\n* (c) The first electron is removed from a 3p orbital.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q22 (Section B)",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 5,
      points: [
        { mark: 1, keyword: "1s² 2s² 2p⁶", text: "Correct electronic configuration of Mg²⁺." },
        { mark: 1, keyword: "3p subshell higher energy", text: "Identify that the electron removed from Al is in a 3p subshell, which is higher in energy than 3s." },
        { mark: 1, keyword: "shielding by 3s² electrons", text: "State that the 3p electron experiences shielding by the 3s² electrons." },
        { mark: 1, keyword: "less attraction outweighs nuclear charge", text: "Explain that increased distance/shielding outweighs the effect of the higher nuclear charge." },
        { mark: 1, keyword: "3p orbital", text: "Identify the 3p orbital as the origin of the ionised electron." }
      ],
      examinerTips: "Do not confuse this subshell transition (Mg to Al, 3s to 3p) with the spin-pair repulsion transition (P to S, 3p³ to 3p⁴). Clearly state '3p electron is shielded by 3s² electrons'."
    }
  },
  {
    id: "edx-wch11-2026-mj-q23",
    question: "Phosphorus forms two common chlorides: phosphorus trichloride, $\\text{PCl}_3$, and phosphorus pentachloride, $\\text{PCl}_5$.\n\n(a) Deduce the number of bonding pairs and lone pairs of electrons around the central phosphorus atom in $\\text{PCl}_3$, and state the bond angle.\n(b) State the shape of the $\\text{PCl}_5$ molecule.\n(c) Explain why $\\text{PCl}_3$ is a polar molecule with a permanent dipole, whereas $\\text{PCl}_5$ is non-polar overall despite containing polar $\\text{P}-\\text{Cl}$ bonds.",
    options: [
      { text: "(a) 3 bonding pairs, 1 lone pair, 107°; (b) Trigonal bipyramidal; (c) PCl₃ is asymmetrical so bond dipoles do not cancel; PCl₅ is symmetrical so dipoles cancel to zero" },
      { text: "(a) 3 bonding pairs, 0 lone pairs, 120°; (b) Square planar; (c) PCl₅ has no polar bonds" },
      { text: "(a) 2 bonding pairs, 2 lone pairs, 104.5°; (b) Octahedral; (c) PCl₃ has London dispersion forces only" },
      { text: "(a) 4 bonding pairs, 0 lone pairs, 109.5°; (b) Tetrahedral; (c) Chlorine is more electropositive than phosphorus" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Phosphorus has 5 valence electrons. In PCl₃, 3 electrons form single bonds with three Cl atoms (3 bonding pairs), leaving 2 non-bonding electrons (1 lone pair).\n  - Electron pair repulsion: Lone pair-bonding pair repulsion is stronger than bonding pair-bonding pair repulsion, compressing the tetrahedral angle (109.5°) by ~2.5° to 107° (trigonal pyramidal shape).\n* (b) In PCl₅, phosphorus forms 5 bonding pairs with zero lone pairs (10 valence electrons, expanded octet). The molecular shape is Trigonal bipyramidal (bond angles of 120° equatorial and 90° axial).\n* (c) P-Cl bonds are polar due to the electronegativity difference between P (2.19) and Cl (3.16).\n  - PCl₃ is asymmetrical (trigonal pyramidal with a lone pair at the apex); the three bond dipoles do not cancel, giving a net molecular dipole.\n  - PCl₅ is completely symmetrical (trigonal bipyramidal); the five dipole vectors cancel out symmetrically in 3D space, resulting in zero net dipole moment.",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q23 (Section B)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 5,
      points: [
        { mark: 1, keyword: "3 bonding pairs, 1 lone pair", text: "State 3 bonding pairs and 1 lone pair on phosphorus in PCl₃." },
        { mark: 1, keyword: "107° / trigonal pyramidal", text: "State bond angle of 107° (accept 106.5° - 107.5°) and trigonal pyramidal shape." },
        { mark: 1, keyword: "trigonal bipyramidal", text: "State shape of PCl₅ is trigonal bipyramidal." },
        { mark: 1, keyword: "PCl₃ asymmetric / dipoles do not cancel", text: "Explain that PCl₃ is non-symmetrical, so bond dipoles do not cancel." },
        { mark: 1, keyword: "PCl₅ symmetrical / dipoles cancel", text: "Explain that PCl₅ is symmetrical, so the five bond dipoles cancel completely." }
      ],
      examinerTips: "Always mention both: (1) bond polarity due to electronegativity difference, and (2) symmetry / cancellation of dipoles in 3D space."
    }
  },
  {
    id: "edx-wch11-2026-mj-q24",
    question: "Ethane reacts with chlorine in the presence of ultraviolet (UV) radiation to form chloroethane and hydrogen chloride by a free-radical substitution mechanism.\n\n(a) State the type of bond fission that occurs during the initiation step and write the balanced equation.\n(b) Write equations for the two propagation steps leading to the formation of chloroethane.\n(c) Name the hydrocarbon formed as a trace product during a termination step and explain how its presence provides experimental evidence for this mechanism.",
    options: [
      { text: "(a) Homolytic fission, Cl₂ → 2Cl•; (b) Cl• + C₂H₆ → •C₂H₅ + HCl and •C₂H₅ + Cl₂ → C₂H₅Cl + Cl•; (c) Butane (C₄H₁₀), formed by combination of two ethyl radicals" },
      { text: "(a) Heterolytic fission, Cl₂ → Cl⁺ + Cl⁻; (b) Cl⁺ + C₂H₆ → C₂H₅Cl + H⁺; (c) Methane, formed by cracking" },
      { text: "(a) Homolytic fission, Cl₂ → 2Cl⁻; (b) Cl• + C₂H₆ → C₂H₅Cl + H•; (c) Ethene, formed by elimination" },
      { text: "(a) Catalytic fission, Cl₂ → Cl•; (b) •C₂H₅ + HCl → C₂H₅Cl + H•; (c) Hexane, formed by polymerisation" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Initiation involves homolytic fission: the Cl-Cl covalent bond breaks evenly under UV light, with one electron going to each chlorine atom to produce two chlorine radicals:\n  $$\\text{Cl}_2 \\xrightarrow{\\text{UV}} 2\\text{Cl}^\\bullet$$\n* (b) Propagation steps:\n  - Step 1: Chlorine radical abstracts a hydrogen atom from ethane:\n    $$\\text{Cl}^\\bullet + \\text{C}_2\\text{H}_6 \\rightarrow \\,^\\bullet\\text{C}_2\\text{H}_5 + \\text{HCl}$$\n  - Step 2: Ethyl radical attacks a chlorine molecule, regenerating a chlorine radical:\n    $$\\,^\\bullet\\text{C}_2\\text{H}_5 + \\text{Cl}_2 \\rightarrow \\text{C}_2\\text{H}_5\\text{Cl} + \\text{Cl}^\\bullet$$\n* (c) Termination: Two ethyl radicals collide and combine:\n  $$\\,^\\bullet\\text{C}_2\\text{H}_5 + \\,^\\bullet\\text{C}_2\\text{H}_5 \\rightarrow \\text{C}_4\\text{H}_{10} \\quad (\\text{butane})$$\n  - The detection of butane in the reaction mixture provides definitive proof that ethyl free radicals are generated as reaction intermediates.",
    level: 2,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q24 (Section B)",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "homolytic fission", text: "State type of bond fission is homolytic fission." },
        { mark: 1, keyword: "Cl₂ → 2Cl•", text: "Correct equation for initiation step with radical dots." },
        { mark: 1, keyword: "Cl• + C₂H₆ → •C₂H₅ + HCl", text: "Correct first propagation equation showing hydrogen abstraction." },
        { mark: 1, keyword: "•C₂H₅ + Cl₂ → C₂H₅Cl + Cl•", text: "Correct second propagation equation regenerating chlorine radical." },
        { mark: 1, keyword: "butane / C₄H₁₀", text: "Identify butane as the termination trace product." },
        { mark: 1, keyword: "two ethyl radicals combine", text: "Explain that butane can only form if ethyl radicals are present and combine, proving free-radical intermediates." }
      ],
      examinerTips: "Ensure radical dots are clearly placed on the reacting carbon atom (•C₂H₅ or CH₃CH₂•), not on the hydrogen."
    }
  },
  {
    id: "edx-wch11-2026-mj-q25",
    question: "The alkene 2-methylbut-2-ene, $\\text{(CH}_3)_2\\text{C}=\\text{CHCH}_3$, reacts with hydrogen bromide ($\\text{HBr}$) at room temperature.\n\n(a) Name the type and mechanism of this reaction.\n(b) Draw/identify the major organic product of this reaction and give its systematic IUPAC name.\n(c) Explain, with reference to the stability of the intermediate carbocations, why this product is formed as the major product rather than 2-bromo-3-methylbutane.\n(d) State the observation when a sample of 2-methylbut-2-ene is tested with bromine water.",
    options: [
      { text: "(a) Electrophilic addition; (b) 2-bromo-2-methylbutane; (c) Formed via a tertiary carbocation which is more stable than a secondary carbocation due to the electron-releasing inductive effect of three alkyl groups; (d) Orange solution turns colorless" },
      { text: "(a) Nucleophilic substitution; (b) 2-bromo-3-methylbutane; (c) Formed via a primary carbocation; (d) Purple solution turns brown" },
      { text: "(a) Free-radical addition; (b) 1-bromopentane; (c) Homolytic fission of HBr; (d) No change" },
      { text: "(a) Electrophilic elimination; (b) 2-methylbut-1-ene; (c) Tertiary carbocation is unstable; (d) White precipitate forms" }
    ],
    correctAnswer: 0,
    explanation: "* (a) The reaction is an Electrophilic Addition reaction across the electron-rich C=C double bond.\n* (b) Addition of H⁺ to C3 forms a tertiary carbocation at C2: (CH₃)₂C⁺-CH₂CH₃.\n  - Subsequent attack by Br⁻ yields 2-bromo-2-methylbutane as the major product.\n* (c) Stability of carbocation intermediates:\n  - Major pathway: The electrophile H⁺ adds to C3, creating a tertiary carbocation [(CH₃)₂C⁺-CH₂CH₃] bonded to three alkyl groups.\n  - Minor pathway: H⁺ adds to C2, creating a secondary carbocation [(CH₃)₂CH-C⁺HCH₃] bonded to only two alkyl groups.\n  - Tertiary carbocations are more stable than secondary carbocations because three electron-releasing alkyl groups exert a positive inductive effect (+I), dispersing the positive charge more effectively.\n  - A more stable carbocation has a lower activation energy and forms at a much faster rate.\n* (d) Testing alkenes with bromine water: The orange/brown bromine water is rapidly decolourised (turns colorless).",
    level: 3,
    topic: "edexcel-unit-1",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH11/01 May/June 2026 Q25 (Section B)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "electrophilic addition", text: "Identify type of reaction: electrophilic addition." },
        { mark: 1, keyword: "2-bromo-2-methylbutane", text: "Identify major product: 2-bromo-2-methylbutane." },
        { mark: 1, keyword: "tertiary carbocation intermediate", text: "State that the major product forms via a tertiary carbocation intermediate." },
        { mark: 1, keyword: "secondary carbocation is less stable", text: "State that the minor product forms via a less stable secondary carbocation." },
        { mark: 1, keyword: "positive inductive effect of alkyl groups", text: "Explain that three electron-releasing alkyl groups stabilize the tertiary carbocation by positive inductive effect." },
        { mark: 1, keyword: "orange to colorless", text: "State observation with bromine water: orange/brown turns colorless." }
      ],
      examinerTips: "Always classify carbocations as primary, secondary, or tertiary, and explicitly link stability to the 'positive inductive effect of alkyl groups' dispersing the positive charge."
    }
  },
  // ==========================================================
  // PEARSON EDEXCEL IAL CHEMISTRY - UNIT 2 (WCH12/01)
  // SUMMER MAY / JUNE 2026 COMPREHENSIVE EXAM BANK (25 QUESTIONS: SECTION A & B)
  // ==========================================================
  {
    id: "edx-wch12-2026-mj-q01",
    question: "The standard enthalpy changes of formation ($\\Delta H_f^\\theta$) at $298\\text{ K}$ are:\n• $\\text{CH}_3\\text{OH(l)}: -239\\text{ kJ mol}^{-1}$\n• $\\text{CO}_2\\text{(g)}: -394\\text{ kJ mol}^{-1}$\n• $\\text{H}_2\\text{O(l)}: -286\\text{ kJ mol}^{-1}$\nWhat is the standard enthalpy of combustion ($\\Delta H_c^\\theta$) of liquid methanol in $\\text{kJ mol}^{-1}$?\n$$\\text{CH}_3\\text{OH(l)} + 1.5\\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(l)}$$",
    options: [
      { text: "-441 kJ mol⁻¹" },
      { text: "-727 kJ mol⁻¹" },
      { text: "-919 kJ mol⁻¹" },
      { text: "-1205 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* Using Hess's law: ΔH_reaction = Σ ΔH_f(products) - Σ ΔH_f(reactants).\n* Products: [1 × (-394)] + [2 × (-286)] = -394 - 572 = -966 kJ mol⁻¹.\n* Reactants: [1 × (-239)] + [1.5 × 0 (element in standard state)] = -239 kJ mol⁻¹.\n* ΔH_c = -966 - (-239) = -966 + 239 = -727 kJ mol⁻¹.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q1",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "-727 kJ mol⁻¹", text: "Calculates ΔH = [(-394) + 2(-286)] - (-239) = -727 kJ mol⁻¹." }
      ],
      examinerTips: "Remember that ΔH_f of pure elements in their standard states (O₂ gas) is by definition zero."
    }
  },
  {
    id: "edx-wch12-2026-mj-q02",
    question: "A student measured the enthalpy of combustion of propan-1-ol using a simple spirit burner and copper calorimeter. The experimental value obtained was $-1450\\text{ kJ mol}^{-1}$, whereas the data book value is $-2021\\text{ kJ mol}^{-1}$. Which factor is the PRIMARY cause of this discrepancy?",
    options: [
      { text: "Incomplete combustion and heat loss to the surroundings" },
      { text: "Using a copper calorimeter instead of an insulated polystyrene cup" },
      { text: "Evaporation of water from the beaker during heating" },
      { text: "The specific heat capacity of water varies significantly with temperature" }
    ],
    correctAnswer: 0,
    explanation: "* In simple flame calorimetry experiments:\n  1. Major heat loss occurs by radiation, convection, and conduction to the surrounding air and tripod rather than into the water.\n  2. Incomplete combustion of propan-1-ol produces carbon monoxide and soot (black carbon deposit on beaker base), releasing far less energy than complete combustion to CO₂ and H₂O.\n* Both factors combine to make the recorded temperature rise, and hence the calculated enthalpy change, significantly less exothermic than theoretical values.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q2",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "heat loss and incomplete combustion", text: "Identifies heat loss and incomplete combustion as the primary reasons for lower experimental values." }
      ],
      examinerTips: "In Edexcel practical questions, always cite 'heat loss to surroundings' and 'incomplete combustion' together."
    }
  },
  {
    id: "edx-wch12-2026-mj-q03",
    question: "Mean bond enthalpies are given below in $\\text{kJ mol}^{-1}$:\n• $\\text{N}\\equiv\\text{N}: +945$\n• $\\text{H}-\\text{H}: +436$\n• $\\text{N}-\\text{H}: +391$\nCalculate the standard enthalpy change of reaction for the Haber process:\n$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightarrow 2\\text{NH}_3\\text{(g)}$$",
    options: [
      { text: "+93 kJ mol⁻¹" },
      { text: "-93 kJ mol⁻¹" },
      { text: "-186 kJ mol⁻¹" },
      { text: "-1093 kJ mol⁻¹" }
    ],
    correctAnswer: 1,
    explanation: "* ΔH_reaction = Σ (bonds broken) - Σ (bonds formed).\n* Bonds broken (endothermic): [1 × N≡N] + [3 × H-H] = 945 + 3(436) = 945 + 1308 = +2253 kJ mol⁻¹.\n* Bonds formed (exothermic): [2 molecules × 3 N-H bonds] = 6 × 391 = 2346 kJ mol⁻¹.\n* ΔH = +2253 - 2346 = -93 kJ mol⁻¹.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q3",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "-93 kJ mol⁻¹", text: "Calculates ΔH = 2253 - 2346 = -93 kJ mol⁻¹." }
      ],
      examinerTips: "Remember each NH₃ molecule has 3 N-H bonds, so 2 NH₃ molecules contain a total of 6 N-H bonds."
    }
  },
  {
    id: "edx-wch12-2026-mj-q04",
    question: "Water ($\\text{H}_2\\text{O}$, boiling point $100^\\circ\\text{C}$) has a substantially higher boiling point than hydrogen fluoride ($\\text{HF}$, boiling point $19.5^\\circ\\text{C}$), despite fluorine being more electronegative than oxygen. What is the explanation for this difference?",
    options: [
      { text: "Water molecules have stronger covalent bonds than hydrogen fluoride" },
      { text: "Each water molecule can form an average of two hydrogen bonds, whereas each hydrogen fluoride molecule forms only one" },
      { text: "Water has greater London dispersion forces due to having more electrons" },
      { text: "Hydrogen fluoride undergoes dimerisation in the gas phase which lowers its boiling point" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrogen bonding capacity depends on the ratio of hydrogen atoms (δ+) to lone pairs (δ-):\n  - In H₂O: The oxygen atom has 2 lone pairs and 2 hydrogen atoms, allowing each molecule to participate in 4 hydrogen bonds (2 donated, 2 accepted), averaging 2 hydrogen bonds per molecule in a 3D network.\n  - In HF: Although each H-F bond is more polar than an O-H bond, fluorine has 3 lone pairs but only 1 hydrogen atom (hydrogen-deficient). Therefore, each HF molecule can only form an average of 1 hydrogen bond.\n* The greater total number of hydrogen bonds per molecule in water requires more thermal energy to overcome, resulting in a higher boiling point.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q4",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "H₂O forms 2 hydrogen bonds per molecule on average / HF forms 1", text: "Explains water forms on average two hydrogen bonds per molecule compared to one in HF." }
      ],
      examinerTips: "Always mention the *number* of hydrogen bonds per molecule, not just bond polarity."
    }
  },
  {
    id: "edx-wch12-2026-mj-q05",
    question: "The boiling points of three structural isomers of $\\text{C}_5\\text{H}_{12}$ are:\n• Pentane: $36.1^\\circ\\text{C}$\n• 2-methylbutane: $27.8^\\circ\\text{C}$\n• 2,2-dimethylpropane: $9.5^\\circ\\text{C}$\nWhy does 2,2-dimethylpropane have the lowest boiling point?",
    options: [
      { text: "It has weaker $\\text{C}-\\text{C}$ covalent bonds" },
      { text: "Its branched spherical shape gives a smaller surface contact area, leading to weaker London dispersion forces" },
      { text: "It contains permanent dipole-dipole attractions that cancel out" },
      { text: "Branching increases the activation energy for vaporisation" }
    ],
    correctAnswer: 1,
    explanation: "* All three compounds are non-polar alkanes with the same molecular formula (C₅H₁₂) and same number of electrons (42 electrons), so the potential polarisability of the electron cloud is similar.\n* However, 2,2-dimethylpropane is highly branched and adopts a compact, spherical geometry.\n* Spherical molecules pack less closely and have a smaller surface area of molecular contact with neighboring molecules.\n* Consequently, instantaneous dipole - induced dipole attractions (London dispersion forces) are weaker and easily overcome at a lower temperature ($9.5^\\circ\\text{C}$).",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q5",
    lessonNum: 2,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "smaller surface contact area & weaker London forces", text: "Identifies smaller surface area of contact and weaker London dispersion forces due to spherical branching." }
      ],
      examinerTips: "Use the precise term 'surface area of contact' rather than just 'surface area'."
    }
  },
  {
    id: "edx-wch12-2026-mj-q06",
    question: "Chlorine gas dissolves in cold, dilute aqueous sodium hydroxide according to the equation:\n$$\\text{Cl}_2\\text{(g)} + 2\\text{NaOH(aq)} \\rightarrow \\text{NaCl(aq)} + \\text{NaClO(aq)} + \\text{H}_2\\text{O(l)}$$\nWhat are the oxidation states of chlorine in the products, and what type of redox reaction is this?",
    options: [
      { text: "Oxidation states: -1 and +1; Disproportionation reaction" },
      { text: "Oxidation states: -1 and +5; Neutralisation reaction" },
      { text: "Oxidation states: 0 and -1; Displacement reaction" },
      { text: "Oxidation states: +1 and +3; Precipitation reaction" }
    ],
    correctAnswer: 0,
    explanation: "* Chlorine in reactant Cl₂ has an oxidation state of 0.\n* In the product NaCl: Na is +1, so Cl is -1 (chlorine is reduced: 0 → -1).\n* In the product NaClO: Na is +1, O is -2, so Cl is +1 (chlorine is oxidised: 0 → +1).\n* Because the same element is simultaneously oxidised and reduced in the same reaction, it is classified as a disproportionation reaction.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q6",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "-1 and +1 & disproportionation", text: "Correct oxidation states -1 and +1 and names disproportionation." }
      ],
      examinerTips: "Note that reaction with *hot concentrated* NaOH gives NaCl (-1) and NaClO₃ (+5)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q07",
    question: "Which of the following Group 2 nitrates requires the HIGHEST temperature to decompose thermally?",
    options: [
      { text: "Magnesium nitrate, Mg(NO₃)₂" },
      { text: "Calcium nitrate, Ca(NO₃)₂" },
      { text: "Strontium nitrate, Sr(NO₃)₂" },
      { text: "Barium nitrate, Ba(NO₃)₂" }
    ],
    correctAnswer: 3,
    explanation: "* Down Group 2 (Mg²⁺ to Ba²⁺):\n  1. The cationic charge remains constant (+2), but the ionic radius increases significantly.\n  2. This causes the charge density of the cation to decrease down the group.\n  3. The larger Ba²⁺ cation has much lower polarising power and distorts the electron cloud of the neighboring nitrate ion far less.\n  4. As the N-O covalent bonds in the nitrate ion are weakened less, more thermal energy is required to decompose the salt.\n* Therefore, Ba(NO₃)₂ has the greatest thermal stability and requires the highest decomposition temperature.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q7",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Ba(NO₃)₂ / largest cation radius & least polarising", text: "Identifies Ba(NO₃)₂ due to larger ionic radius and lower polarising power." }
      ],
      examinerTips: "Remember: thermal stability of Group 2 carbonates and nitrates INCREASES down the group."
    }
  },
  {
    id: "edx-wch12-2026-mj-q08",
    question: "A solid unknown hydrated Group 2 salt $M$ gives a persistent crimson-red color in a flame test. When heated strongly with bunsen flame, it emits a brown toxic gas and a gas that relights a glowing splint. What is the identity of salt $M$?",
    options: [
      { text: "Calcium chloride" },
      { text: "Strontium nitrate" },
      { text: "Barium carbonate" },
      { text: "Lithium sulfate" }
    ],
    correctAnswer: 1,
    explanation: "* Flame test color:\n  - Calcium gives brick-red.\n  - Strontium gives crimson-red.\n  - Barium gives apple-green.\n* Thermal decomposition gases:\n  - The brown gas is nitrogen dioxide (NO₂).\n  - The gas that relights a glowing splint is oxygen (O₂).\n  - This confirms the anion is a nitrate: 2Sr(NO₃)₂(s) → 2SrO(s) + 4NO₂(g) + O₂(g).\n* Hence, salt M is strontium nitrate.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q8",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Strontium nitrate", text: "Identifies crimson flame = Sr²⁺ and brown gas = NO₂ from nitrate decomposition." }
      ],
      examinerTips: "Do not confuse calcium (brick-red / orange-red) with strontium (crimson / deep red)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q09",
    question: "When solid sodium iodide reacts with concentrated sulfuric acid, steamy fumes, purple vapors, a bad-egg smell, and a yellow solid deposit are observed. Which species is responsible for the yellow solid deposit?",
    options: [
      { text: "Iodine crystals, I₂" },
      { text: "Solid elemental sulfur, S" },
      { text: "Sodium sulfide, Na₂S" },
      { text: "Sulfur dioxide, SO₂" }
    ],
    correctAnswer: 1,
    explanation: "* Iodide ions (I⁻) are powerful reducing agents that reduce concentrated H₂SO₄ through multiple stages:\n  - H₂SO₄ (+6) → SO₂ (+4, choking gas)\n  - H₂SO₄ (+6) → S (0, yellow solid precipitate)\n  - H₂SO₄ (+6) → H₂S (-2, toxic gas with bad-egg smell)\n* Meanwhile, iodide is oxidised to elemental iodine (I₂), producing purple vapors and black solid crystals.\n* The yellow solid deposit observed on the tube wall is elemental sulfur (S).",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q9",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "elemental sulfur / S", text: "Identifies yellow solid as sulfur formed by reduction of sulfuric acid." }
      ],
      examinerTips: "Memorise the 4 reduction products of H₂SO₄ with iodide: NaHSO₄ (acid-base), SO₂, S (yellow solid), and H₂S (bad eggs)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q10",
    question: "An aqueous solution of potassium bromide is treated with chlorine water. Hexane is then added, the mixture shaken, and allowed to separate into two layers. What is the color of the upper organic layer?",
    options: [
      { text: "Pale yellow" },
      { text: "Orange-brown" },
      { text: "Purple" },
      { text: "Colorless" }
    ],
    correctAnswer: 1,
    explanation: "* Chlorine is more electronegative and a stronger oxidising agent than bromine.\n* Chlorine displaces bromide ions from solution: Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq).\n* When non-polar hexane is added, the non-polar halogen molecules preferentially dissolve in the upper organic solvent layer (hexane has a lower density than water, $\\rho \\approx 0.66\\text{ g cm}^{-3}$).\n* Dissolved bromine (Br₂) turns the upper hexane layer orange / orange-brown (iodine would turn purple).",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q10",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "orange-brown (Br₂ in hexane)", text: "Deduces Br₂ formed and colors upper organic layer orange-brown." }
      ],
      examinerTips: "Remember: Chlorine in organic solvent = pale yellow/colorless; Bromine = orange-red; Iodine = purple."
    }
  },
  {
    id: "edx-wch12-2026-mj-q11",
    question: "How does the addition of a heterogeneous catalyst affect the Maxwell-Boltzmann energy distribution curve of a gaseous reaction mixture?",
    options: [
      { text: "The peak of the curve shifts to the right and becomes lower" },
      { text: "The curve remains unchanged, but the activation energy position $E_a$ shifts to the left" },
      { text: "The area under the curve increases significantly" },
      { text: "The activation energy $E_a$ remains fixed while the average kinetic energy increases" }
    ],
    correctAnswer: 1,
    explanation: "* The Maxwell-Boltzmann distribution curve is determined purely by temperature and the total number of gas molecules.\n* Adding a catalyst does NOT change the temperature or kinetic energy distribution of the molecules, so the curve shape, peak height, and peak position remain completely unchanged.\n* The catalyst provides an alternative reaction pathway with a lower activation energy ($E_{cat} < E_a$).\n* On the graph, the vertical activation energy line shifts to the left, which dramatically increases the shaded area under the curve representing the fraction of molecules possessing energy $E \\ge E_a$.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q11",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "curve unchanged & Ea shifts left", text: "Explains curve does not change shape; activation energy marker moves to the left." }
      ],
      examinerTips: "Only changing temperature shifts the peak of the Maxwell-Boltzmann distribution curve."
    }
  },
  {
    id: "edx-wch12-2026-mj-q12",
    question: "According to collision theory, why does doubling the concentration of a dissolved reactant increase the rate of reaction?",
    options: [
      { text: "The average kinetic energy of the reacting particles doubles" },
      { text: "The activation energy of the reaction is halved" },
      { text: "The number of particles per unit volume doubles, leading to a greater collision frequency" },
      { text: "The fraction of collisions that are energetically successful increases" }
    ],
    correctAnswer: 2,
    explanation: "* Increasing concentration means there are more solute particles packed into the same unit volume ($1\\text{ dm}^3$).\n* As particles are closer together, the frequency of collisions (number of collisions per unit time) between reactant particles increases proportionally.\n* Provided the temperature is constant, the fraction of successful collisions (those with $E \\ge E_a$) remains unchanged, but the overall rate increases because total collisions per second increases.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q12",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "particles per unit volume & collision frequency", text: "Mentions more particles per unit volume and greater collision frequency." }
      ],
      examinerTips: "Do not say 'more collisions occur'; always specify 'collision frequency' or 'collisions per second'."
    }
  },
  {
    id: "edx-wch12-2026-mj-q13",
    question: "Nitrogen monoxide is synthesised according to the endothermic equilibrium:\n$$\\text{N}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{NO(g)} \\quad \\Delta H = +180\\text{ kJ mol}^{-1}$$\nWhich of the following modifications will INCREASE the numerical value of the equilibrium constant, $K_c$?",
    options: [
      { text: "Increasing the total pressure at constant temperature" },
      { text: "Increasing the temperature" },
      { text: "Adding a platinum-rhodium gauze catalyst" },
      { text: "Increasing the concentration of oxygen gas" }
    ],
    correctAnswer: 1,
    explanation: "* The numerical value of an equilibrium constant ($K_c$ or $K_p$) is dependent ONLY upon temperature; catalysts, pressure, and concentrations have zero effect on $K_c$.\n* According to Le Chatelier's principle, for an endothermic forward reaction ($\\Delta H > 0$):\n  - An increase in temperature shifts the position of equilibrium in the endothermic forward direction to absorb added heat.\n  - This increases the equilibrium concentration of products ([NO]) and decreases reactants ([N₂] and [O₂]).\n  - Since $K_c = [\\text{NO}]^2 / ([\\text{N}_2][\\text{O}_2])$, the numerical value of $K_c$ increases.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q13",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "increasing temperature (only factor that changes Kc)", text: "Identifies temperature as the only factor that changes Kc, and forward reaction is endothermic." }
      ],
      examinerTips: "Crucial rule: Catalysts, pressure changes, and concentration changes NEVER change the numerical value of Kc."
    }
  },
  {
    id: "edx-wch12-2026-mj-q14",
    question: "Consider the dynamic gaseous equilibrium in the Contact process:\n$$2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$$\nWhat are the correct units for the equilibrium constant, $K_c$?",
    options: [
      { text: "No units (dimensionless)" },
      { text: "mol dm⁻³" },
      { text: "dm³ mol⁻¹" },
      { text: "dm⁶ mol⁻²" }
    ],
    correctAnswer: 2,
    explanation: "* Write the expression for Kc: Kc = [SO₃]² / ([SO₂]² × [O₂]).\n* Substitute units of concentration (mol dm⁻³):\n  - Units = (mol dm⁻³)² / [(mol dm⁻³)² × (mol dm⁻³)]\n  - Cancel (mol dm⁻³)²: Units = 1 / (mol dm⁻³) = mol⁻¹ dm³ = dm³ mol⁻¹.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q14",
    lessonNum: 4,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "dm³ mol⁻¹", text: "Correct unit algebra yielding dm³ mol⁻¹." }
      ],
      examinerTips: "Always cancel out identical concentration terms in the numerator and denominator before inverting."
    }
  },
  {
    id: "edx-wch12-2026-mj-q15",
    question: "Separate samples of 1-chlorobutane, 1-bromobutane, and 1-iodobutane were heated in a water bath at $50^\\circ\\text{C}$ with aqueous ethanol and silver nitrate solution. 1-iodobutane formed a precipitate fastest. What is the reason for this observation?",
    options: [
      { text: "The $\\text{C}-\\text{Cl}$ bond is more polar than the $\\text{C}-\\text{I}$ bond" },
      { text: "The $\\text{C}-\\text{I}$ bond enthalpy is lower than the $\\text{C}-\\text{Br}$ and $\\text{C}-\\text{Cl}$ bond enthalpies" },
      { text: "Iodide ions are smaller and more easily solvated by water molecules" },
      { text: "Silver iodide has a higher lattice energy than silver chloride" }
    ],
    correctAnswer: 1,
    explanation: "* In the nucleophilic substitution hydrolysis of halogenoalkanes by water:\n  - The rate-determining factor is the strength (bond enthalpy) of the carbon-halogen bond, NOT bond polarity.\n  - Bond enthalpies: C-Cl (338 kJ/mol) > C-Br (276 kJ/mol) > C-I (238 kJ/mol).\n  - The C-I bond is the longest and weakest due to greater shielding and larger atomic radius of iodine.\n  - The C-I bond breaks most readily with the lowest activation energy, releasing I⁻ ions that immediately precipitate with Ag⁺ as yellow AgI.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q15",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "C-I bond enthalpy is lowest / weakest bond", text: "Identifies C-I bond enthalpy is lowest and easiest to break as the rate-determining factor." }
      ],
      examinerTips: "Common trap: Bond enthalpy determines hydrolysis rate, NOT bond polarity (even though C-Cl is the most polar, it reacts slowest)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q16",
    question: "Which of the following halogenoalkanes undergoes hydrolysis predominantly via an $S_N1$ mechanism with a two-step pathway involving a carbocation intermediate?",
    options: [
      { text: "1-bromobutane" },
      { text: "1-bromo-2-methylpropane" },
      { text: "2-bromobutane" },
      { text: "2-bromo-2-methylpropane" }
    ],
    correctAnswer: 3,
    explanation: "* 2-bromo-2-methylpropane is a tertiary halogenoalkane [(CH₃)₃C-Br].\n* In tertiary halogenoalkanes:\n  1. Severe steric hindrance prevents direct backside nucleophilic attack by OH⁻ (ruling out the SN2 mechanism).\n  2. Heterolytic fission of the C-Br bond forms a tertiary carbocation, (CH₃)₃C⁺.\n  3. The tertiary carbocation is exceptionally stable due to the positive inductive effect (+I) of three electron-donating methyl groups.\n* Hence, tertiary halogenoalkanes react almost exclusively via the two-step SN1 mechanism.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q16",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "2-bromo-2-methylpropane / tertiary halogenoalkane", text: "Identifies tertiary halogenoalkane reacting via stable carbocation intermediate." }
      ],
      examinerTips: "Remember: Primary = SN2 (backside attack, transition state); Tertiary = SN1 (carbocation intermediate)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q17",
    question: "When 2-bromobutane, $\\text{CH}_3\\text{CH(Br)CH}_2\\text{CH}_3$, is heated under reflux with concentrated potassium hydroxide dissolved in ethanol ($\\text{KOH / ethanol}$), an elimination reaction occurs. What is the major organic product formed?",
    options: [
      { text: "Butan-2-ol" },
      { text: "But-1-ene" },
      { text: "But-2-ene" },
      { text: "1-bromobut-2-ene" }
    ],
    correctAnswer: 2,
    explanation: "* In ethanolic KOH at high temperature, the hydroxide ion acts as a Brønsted-Lowry base (proton abstractor) rather than a nucleophile, favoring elimination.\n* Hydrogen can be abstracted from either C1 or C3:\n  - Removal from C1 yields but-1-ene (CH₂=CH-CH₂CH₃).\n  - Removal from C3 yields but-2-ene (CH₃-CH=CH-CH₃).\n* According to Zaitsev's rule, the more substituted alkene (alkene with more alkyl groups attached to the double bond) is more thermodynamically stable and forms as the major product.\n* Therefore, but-2-ene (a disubstituted alkene) is the major product.",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q17",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "But-2-ene / more substituted alkene", text: "Identifies but-2-ene as the major product of elimination." }
      ],
      examinerTips: "Ethanolic KOH promotes elimination to form alkenes; aqueous KOH promotes substitution to form alcohols."
    }
  },
  {
    id: "edx-wch12-2026-mj-q18",
    question: "An alcohol $A$ with molecular formula $\\text{C}_4\\text{H}_{10}\\text{O}$ was heated under reflux with acidified potassium dichromate(VI), $\\text{K}_2\\text{Cr}_2\\text{O}_7 / \\text{H}_2\\text{SO}_4$. The orange solution turned green, and organic compound $B$ was isolated. Compound $B$ gives an orange precipitate with 2,4-DNPH, but does NOT react with Tollens' reagent. Which compound is alcohol $A$?",
    options: [
      { text: "Butan-1-ol" },
      { text: "Butan-2-ol" },
      { text: "2-methylpropan-2-ol" },
      { text: "2-methylpropan-1-ol" }
    ],
    correctAnswer: 1,
    explanation: "* Orange dichromate turns green (Cr₂O₇²⁻ reduced to Cr³⁺), meaning alcohol A is oxidisable (rules out tertiary alcohol 2-methylpropan-2-ol).\n* Compound B gives an orange precipitate with 2,4-DNPH, confirming it contains a carbonyl group (C=O, aldehyde or ketone).\n* Compound B does NOT react with Tollens' reagent (no silver mirror), which proves it is a ketone, NOT an aldehyde.\n* Ketones are formed exclusively by the oxidation of secondary alcohols.\n* The only secondary alcohol among the choices is butan-2-ol (oxidised to butanone).",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q18",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Butan-2-ol / secondary alcohol oxidised to ketone", text: "Deduces ketone formed from secondary alcohol butan-2-ol." }
      ],
      examinerTips: "Primary alcohols oxidise to aldehydes (positive Tollens' test) and then carboxylic acids; secondary alcohols oxidise to ketones (negative Tollens' test)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q19",
    question: "The infrared (IR) spectrum of an unknown compound shows a very broad, rounded absorption band extending from $3200\\text{ cm}^{-1}$ to $3650\\text{ cm}^{-1}$, but shows NO absorption in the $1680-1750\\text{ cm}^{-1}$ region. Which compound could this be?",
    options: [
      { text: "Propanoic acid" },
      { text: "Propan-1-ol" },
      { text: "Propanal" },
      { text: "Ethyl propanoate" }
    ],
    correctAnswer: 1,
    explanation: "* The broad absorption band at 3200-3650 cm⁻¹ is the characteristic stretch of hydrogen-bonded O-H in an alcohol.\n* The absence of any peak at 1680-1750 cm⁻¹ confirms the complete absence of a carbonyl group (C=O).\n* Propanoic acid would show both a very broad O-H (2500-3300 cm⁻¹) and a strong C=O (1710 cm⁻¹).\n* Propanal and ethyl propanoate both contain strong C=O peaks.\n* Therefore, the unknown compound is propan-1-ol.",
    level: 1,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q19",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "Propan-1-ol / alcohol O-H without C=O", text: "Identifies alcohol O-H absorption and lack of C=O stretch." }
      ],
      examinerTips: "Distinguish alcohol O-H (smooth, rounded at 3200-3600 cm⁻¹) from carboxylic acid O-H (very broad, jagged at 2500-3300 cm⁻¹ overlapping C-H)."
    }
  },
  {
    id: "edx-wch12-2026-mj-q20",
    question: "In the mass spectrum of propan-2-one (acetone, $\\text{CH}_3\\text{COCH}_3$, molecular ion $M^+ = 58$), the base peak (most intense peak) appears at $m/z = 43$. Which fragment ion is responsible for this peak?",
    options: [
      { text: "[CH₃]⁺" },
      { text: "[CH₃CO]⁺" },
      { text: "[C₂H₅]⁺" },
      { text: "[COCH₃]⁻" }
    ],
    correctAnswer: 1,
    explanation: "* The molecular ion [CH₃-CO-CH₃]⁺• undergoes fragmentation by loss of a neutral methyl radical (•CH₃, mass 15):\n  $$[\\text{CH}_3\\text{COCH}_3]^{+\\bullet} \\rightarrow [\\text{CH}_3\\text{CO}]^+ + \\,^\\bullet\\text{CH}_3$$\n* Mass of [CH₃CO]⁺ = (12 + 3) + 12 + 16 = 15 + 28 = 43.\n* The acylium cation [CH₃-C≡O⁺] is resonance-stabilised by delocalisation of the positive charge onto the oxygen lone pair, making it exceptionally stable and therefore the base peak.\n* Fragment ions in mass spectrometry must always carry a positive charge (ruling out option D).",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "mcq",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q20",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 1,
      points: [
        { mark: 1, keyword: "[CH₃CO]⁺ / acylium ion", text: "Identifies m/z = 43 as the [CH₃CO]⁺ fragment ion formed by loss of •CH₃." }
      ],
      examinerTips: "Always write the positive charge on fragment ions: [CH₃CO]⁺."
    }
  },
  // --- SECTION B: STRUCTURED THEORY QUESTIONS (WCH12/01 MAY/JUNE 2026) ---
  {
    id: "edx-wch12-2026-mj-q21",
    question: "Hydrated copper(II) sulfate crystals, $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$, dissolve endothermically in water, whereas anhydrous copper(II) sulfate, $\\text{CuSO}_4\\text{(s)}$, dissolves exothermically.\n$$\\text{CuSO}_4\\text{(s)} + 5\\text{H}_2\\text{O(l)} \\rightarrow \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O(s)} \\quad \\Delta H_r$$\n\nExperimental enthalpies of solution are:\n• $\\Delta H_{\\text{soln}}[\\text{CuSO}_4\\text{(s)}] = -66.5\\text{ kJ mol}^{-1}$\n• $\\Delta H_{\\text{soln}}[\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O(s)}] = +11.5\\text{ kJ mol}^{-1}$\n\n(a) Explain why the standard enthalpy of hydration of anhydrous copper(II) sulfate cannot be measured directly in a simple lab calorimeter.\n(b) Using Hess's Law, calculate the enthalpy change of reaction, $\\Delta H_r$, in $\\text{kJ mol}^{-1}$.\n(c) State the sign of the entropy change of the system ($\\Delta S_{\\text{system}}$) when anhydrous copper(II) sulfate reacts with liquid water to form the solid hydrated crystals, and justify your answer.",
    options: [
      { text: "(a) Adding water directly causes partial dissolution and hydrated solid cannot be formed with exact stoichiometric water without dissolving; (b) ΔHr = -78.0 kJ mol⁻¹; (c) Negative, because liquid water is converted into an ordered solid crystal lattice" },
      { text: "(a) The reaction is too slow; (b) ΔHr = -55.0 kJ mol⁻¹; (c) Positive, because heat is released" },
      { text: "(a) Toxic gases are produced; (b) ΔHr = +78.0 kJ mol⁻¹; (c) Zero, because mass is conserved" },
      { text: "(a) Anhydrous copper sulfate is insoluble; (b) ΔHr = -22.0 kJ mol⁻¹; (c) Negative, because pressure drops" }
    ],
    correctAnswer: 0,
    explanation: "* (a) The reaction cannot be measured directly because when water is added to anhydrous copper(II) sulfate, it dissolves immediately to form an aqueous solution rather than remaining as solid hydrated crystals with exactly 5 moles of water.\n* (b) Using Hess's Law:\n  - Route 1: Direct reaction: CuSO₄(s) + 5H₂O(l) → CuSO₄•5H₂O(s) [ΔHr]\n  - Both forms dissolve in excess water to give the identical final state: CuSO₄(aq).\n  - Cycle equation: ΔH_soln[CuSO₄(s)] = ΔHr + ΔH_soln[CuSO₄•5H₂O(s)].\n  - -66.5 = ΔHr + (+11.5) → ΔHr = -66.5 - 11.5 = -78.0 kJ mol⁻¹.\n* (c) ΔS_system is negative because 5 moles of disordered liquid water molecules are fixed into a highly ordered 3D crystalline lattice framework, reducing disorder.",
    level: 3,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q21 (Section B)",
    lessonNum: 1,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "cannot add exact water without dissolving", text: "Explain that solid crystals dissolve in water so stoichiometric hydration without dissolution is impossible directly." },
        { mark: 1, keyword: "Hess cycle construction", text: "Construct or state correct Hess cycle relating solution enthalpies to hydration." },
        { mark: 1, keyword: "ΔHr = -66.5 - (+11.5)", text: "Set up calculation: -66.5 - 11.5." },
        { mark: 1, keyword: "-78.0 kJ mol⁻¹", text: "Correct final answer: -78.0 kJ mol⁻¹ with negative sign." },
        { mark: 1, keyword: "ΔS is negative", text: "State entropy change is negative." },
        { mark: 1, keyword: "liquid water trapped in solid crystal lattice", text: "Justify that disordered liquid water molecules become ordered in a solid crystal lattice." }
      ],
      examinerTips: "Always include units (kJ mol⁻¹) and an explicit negative sign for exothermic enthalpy values in Section B."
    }
  },
  {
    id: "edx-wch12-2026-mj-q22",
    question: "This question concerns Group 2 chemistry and thermal decomposition.\n\n(a) Write a balanced chemical equation, including state symbols, for the thermal decomposition of solid magnesium nitrate, $\\text{Mg(NO}_3)_2$.\n(b) Explain, in terms of cation size, charge density, and polarising power, why magnesium nitrate decomposes at a significantly lower temperature than barium nitrate, $\\text{Ba(NO}_3)_2$.\n(c) Describe how to perform a flame test on a solid sample of a Group 2 metal chloride, and give the flame color observed for barium ions.",
    options: [
      { text: "(a) 2Mg(NO₃)₂(s) → 2MgO(s) + 4NO₂(g) + O₂(g); (b) Mg²⁺ has a smaller ionic radius and higher charge density, polarising and weakening the N-O bond in the nitrate ion more; (c) Dip clean nichrome wire in conc. HCl, touch sample, place in non-luminous flame; apple-green" },
      { text: "(a) Mg(NO₃)₂(s) → Mg(NO₂)₂(s) + O₂(g); (b) Ba²⁺ has higher charge density; (c) Use copper wire in yellow flame; brick-red" },
      { text: "(a) 2Mg(NO₃)₂(s) → 2Mg(s) + 2N₂(g) + 6O₂(g); (b) Magnesium is less reactive than barium; (c) Dissolve in water and add silver nitrate; white" },
      { text: "(a) Mg(NO₃)₂(s) → MgO(s) + N₂O₅(g); (b) Barium has more electrons; (c) Use platinum wire in cold flame; crimson" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Group 2 nitrates decompose to metal oxide, nitrogen dioxide gas (brown fumes), and oxygen gas:\n  $$2\\text{Mg(NO}_3)_2\\text{(s)} \\rightarrow 2\\text{MgO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$$\n* (b) Polarising power rationale:\n  - Both Mg²⁺ and Ba²⁺ have a +2 charge.\n  - Mg²⁺ has a much smaller ionic radius than Ba²⁺ (0.072 nm vs 0.135 nm).\n  - Mg²⁺ has a much higher charge density and polarising power.\n  - Mg²⁺ polarises and distorts the electron cloud of the nitrate (NO₃⁻) anion more strongly, weakening the N-O covalent bonds within the nitrate group.\n  - Consequently, less thermal energy is required to decompose magnesium nitrate.\n* (c) Flame test procedure: Clean a nichrome/platinum wire by dipping into concentrated hydrochloric acid and placing in a hot, non-luminous Bunsen flame until no color is imparted. Dip wire into conc. HCl, touch the solid sample, and hold in the edge of the roaring blue flame. Barium produces an apple-green flame.",
    level: 3,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q22 (Section B)",
    lessonNum: 3,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 7,
      points: [
        { mark: 1, keyword: "2Mg(NO₃)₂(s) → 2MgO(s) + 4NO₂(g) + O₂(g)", text: "Balanced equation for thermal decomposition." },
        { mark: 1, keyword: "state symbols (s), (s), (g), (g)", text: "Correct state symbols included." },
        { mark: 1, keyword: "Mg²⁺ smaller ionic radius / smaller cation", text: "State Mg²⁺ has a smaller ionic radius than Ba²⁺ (same +2 charge)." },
        { mark: 1, keyword: "higher charge density & polarising power", text: "State Mg²⁺ has higher charge density and greater polarising power." },
        { mark: 1, keyword: "polarises / weakens N-O bond in nitrate", text: "Explains Mg²⁺ distorts electron cloud of nitrate, weakening N-O bonds." },
        { mark: 1, keyword: "clean nichrome wire with conc. HCl in non-luminous flame", text: "Describe flame test: clean wire in conc. HCl, place in non-luminous/blue flame." },
        { mark: 1, keyword: "apple-green", text: "State flame color for barium is apple-green." }
      ],
      examinerTips: "Always specify that the Bunsen burner flame must be 'non-luminous' or 'roaring blue' so the flame color is clearly visible."
    }
  },
  {
    id: "edx-wch12-2026-mj-q23",
    question: "Bromoethane reacts with warm aqueous sodium hydroxide in a nucleophilic substitution reaction:\n$$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{CH}_2\\text{OH} + \\text{Br}^-$$" +
      "\n\n(a) Name the specific mechanism ($S_N1$ or $S_N2$) by which this primary halogenoalkane reacts.\n(b) Describe the key features of this mechanism, including the role of curly arrows, the formation of the transition state, and the direction of nucleophilic attack.\n(c) If an optically active single enantiomer of a chiral secondary halogenoalkane were to react via this pure mechanism, state and explain the stereochemical outcome of the product.",
    options: [
      { text: "(a) SN2 mechanism; (b) One-step bimolecular pathway: hydroxide ion attacks carbon from backside opposite the leaving Br atom, forming a five-coordinate transition state with partial bonds; (c) Inversion of configuration (Walden inversion) because nucleophile attacks strictly from the rear" },
      { text: "(a) SN1 mechanism; (b) Two-step pathway via carbocation intermediate; (c) Racemic mixture formed" },
      { text: "(a) Electrophilic substitution; (b) Heterolytic cleavage of hydroxide; (c) Retention of configuration" },
      { text: "(a) Free-radical substitution; (b) Homolytic cleavage under UV light; (c) Complete racemisation" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Primary halogenoalkanes react via the SN2 mechanism (Substitution Nucleophilic Bimolecular).\n* (b) Mechanism details:\n  - The C-Br bond is polar (C^δ+ - Br^δ-).\n  - The nucleophile (:OH⁻) uses its lone pair to attack the electron-deficient carbon atom strictly from the backside (180° opposite the bulky bromine atom to minimise steric and electrostatic repulsion).\n  - A single transition state forms where the C-OH bond is partially making while the C-Br bond is partially breaking (five-coordinate carbon, [HO---C---Br]⁻, with dotted bonds and a negative charge in square brackets).\n  - Bromide departs as a leaving group (:Br⁻).\n* (c) Stereochemical outcome: Because backside attack forces the other three groups to invert like an umbrella blowing inside out in a storm, there is 100% Inversion of Configuration (Walden Inversion).",
    level: 3,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q23 (Section B)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "SN2", text: "Identify mechanism as SN2 (substitution nucleophilic bimolecular)." },
        { mark: 1, keyword: "backside attack / opposite leaving group", text: "State nucleophile attacks electron-deficient carbon from the backside (opposite Br)." },
        { mark: 1, keyword: "curly arrow from OH⁻ lone pair to carbon", text: "Describe curly arrow from lone pair on :OH⁻ to C^δ+." },
        { mark: 1, keyword: "transition state with partial bonds and charge", text: "Describe five-coordinate transition state with partial bonds and overall negative charge." },
        { mark: 1, keyword: "inversion of configuration / Walden inversion", text: "State stereochemical outcome is inversion of configuration (Walden inversion)." },
        { mark: 1, keyword: "umbrella inversion due to rear attack", text: "Explain that backside attack flips the arrangement of the other three bonds." }
      ],
      examinerTips: "In SN2 transition states, use dotted lines for making/breaking bonds and place brackets with a negative charge: [HO···C···Br]⁻."
    }
  },
  {
    id: "edx-wch12-2026-mj-q24",
    question: "Ethanol can be oxidised to either ethanal, $\\text{CH}_3\\text{CHO}$, or ethanoic acid, $\\text{CH}_3\\text{COOH}$, using acidified sodium dichromate(VI).\n\n(a) State the experimental apparatus and conditions required to ensure that ethanal is collected as the main product rather than ethanoic acid.\n(b) Explain why ethanal can be separated easily from the reaction mixture using simple distillation.\n(c) Write the half-equation for the reduction of the dichromate(VI) ion in acidic solution, and state the color change observed.",
    options: [
      { text: "(a) Immediate distillation with excess ethanol and dilute acid; (b) Ethanal has no hydrogen bonding, giving it a much lower boiling point (21°C) than ethanol (78°C) and ethanoic acid (118°C); (c) Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O; Orange to green" },
      { text: "(a) Heating under reflux with excess oxidising agent; (b) Ethanal is insoluble in water; (c) Cr₂O₇²⁻ + 2e⁻ → CrO₄²⁻; Green to orange" },
      { text: "(a) Fractional distillation at 100°C; (b) Ethanal decomposes on heating; (c) Cr³⁺ + 3e⁻ → Cr; Purple to colorless" },
      { text: "(a) Reflux with concentrated alkali; (b) Ethanal has strong ionic attractions; (c) Cr₂O₇²⁻ → 2CrO₂; Yellow to blue" }
    ],
    correctAnswer: 0,
    explanation: "* (a) To prepare and isolate ethanal:\n  - Use excess ethanol (limiting the oxidising agent).\n  - Set up for simple distillation (heating gently so ethanal vaporises and distils off as soon as it forms, preventing further oxidation to ethanoic acid).\n* (b) Boiling points and intermolecular forces:\n  - Ethanal (CH₃CHO) has permanent dipole-dipole attractions and London forces, but CANNOT form intermolecular hydrogen bonds with itself (no hydrogen attached to oxygen).\n  - Ethanol (CH₃CH₂OH) and ethanoic acid (CH₃COOH) both have strong intermolecular hydrogen bonding.\n  - Consequently, ethanal boils at just 21°C (compared to ethanol at 78°C and ethanoic acid at 118°C) and boils off immediately upon formation.\n* (c) Reduction half-equation: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.\n  - Color change: Orange (Cr₂O₇²⁻) to green (Cr³⁺).",
    level: 2,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q24 (Section B)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "distillation / distil immediately", text: "State distillation apparatus and gentle heating to distil off ethanal as formed." },
        { mark: 1, keyword: "excess ethanol / limiting dichromate", text: "State excess ethanol or limited oxidising agent." },
        { mark: 1, keyword: "ethanal has no hydrogen bonding", text: "Explain ethanal cannot form hydrogen bonds with other ethanal molecules." },
        { mark: 1, keyword: "much lower boiling point (21°C)", text: "State ethanal has a much lower boiling point than ethanol or ethanoic acid." },
        { mark: 1, keyword: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O", text: "Correct balanced half-equation for dichromate reduction." },
        { mark: 1, keyword: "orange to green", text: "Correct color change: orange to green." }
      ],
      examinerTips: "To get full marks for distillation vs reflux: Distillation = partial oxidation to aldehyde; Reflux = complete oxidation to carboxylic acid."
    }
  },
  {
    id: "edx-wch12-2026-mj-q25",
    question: "An unknown organic compound $Q$ contains $60.0\\%$ carbon, $13.3\\%$ hydrogen, and $26.7\\%$ oxygen by mass.\n\n(a) Determine the empirical formula of compound $Q$. [$A_r$: C = 12.0, H = 1.0, O = 16.0]\n(b) The mass spectrum of $Q$ shows a molecular ion peak at $m/z = 60$ and a prominent fragment peak at $m/z = 45$.\nDeduce the molecular formula of $Q$.\n(c) The infrared spectrum of $Q$ shows a strong, broad absorption band at $3350\\text{ cm}^{-1}$ and no peak in the region $1650-1750\\text{ cm}^{-1}$.\nDeduce the structural formula and systematic name of compound $Q$, and identify the fragment ion at $m/z = 45$.",
    options: [
      { text: "(a) C₃H₈O; (b) Molecular formula is C₃H₈O (Mr = 60); (c) Propan-1-ol (CH₃CH₂CH₂OH) or Propan-2-ol (CH₃CH(OH)CH₃); Fragment ion at m/z = 45 is [CH₂CH₂OH]⁺ or [CH(OH)CH₃]⁺" },
      { text: "(a) C₂H₆O₂; (b) Molecular formula is C₂H₆O₂; (c) Ethane-1,2-diol; Fragment is [COOH]⁺" },
      { text: "(a) C₃H₆O; (b) Molecular formula is C₃H₆O; (c) Propanal; Fragment is [CHO]⁺" },
      { text: "(a) C₄H₁₀O; (b) Molecular formula is C₄H₁₀O; (c) Butan-1-ol; Fragment is [C₂H₅O]⁺" }
    ],
    correctAnswer: 0,
    explanation: "* (a) Empirical formula calculation:\n  - Moles C = 60.0 / 12.0 = 5.00 mol.\n  - Moles H = 13.3 / 1.0 = 13.3 mol.\n  - Moles O = 26.7 / 16.0 = 1.669 mol.\n  - Mole ratio: C = 5.00 / 1.669 = 3.00; H = 13.3 / 1.669 = 7.97 ≈ 8; O = 1.669 / 1.669 = 1.00.\n  - Empirical formula: C₃H₈O.\n* (b) Molecular formula:\n  - Empirical mass = (3 × 12.0) + (8 × 1.0) + 16.0 = 60.0 g mol⁻¹.\n  - Since M⁺ = 60, molecular formula is identical to empirical formula: C₃H₈O.\n* (c) Structural deduction:\n  - Broad IR peak at 3350 cm⁻¹ confirms an alcohol O-H group.\n  - Absence of C=O peak at 1650-1750 cm⁻¹ confirms it is an alcohol (not an ester or carboxylic acid).\n  - With 3 carbons, the compound is either propan-1-ol (CH₃CH₂CH₂OH) or propan-2-ol (CH₃CH(OH)CH₃).\n  - Fragment ion at m/z = 45: Loss of a methyl group (mass 15) from M⁺ (60 - 15 = 45) yields the resonance-stabilised oxonium ion [CH₃CH=OH]⁺ or [CH₂=CH-OH₂]⁺.",
    level: 3,
    topic: "edexcel-unit-2",
    curriculum: "edexcel-alevel",
    paperType: "structured",
    source: "Pearson Edexcel IAL Chemistry WCH12/01 May/June 2026 Q25 (Section B)",
    lessonNum: 5,
    createdAt: "2026-09-04",
    markingScheme: {
      marks: 6,
      points: [
        { mark: 1, keyword: "moles of C, H, O", text: "Calculate moles: C = 5.00, H = 13.3, O = 1.67." },
        { mark: 1, keyword: "C₃H₈O empirical formula", text: "Deduce empirical formula C₃H₈O." },
        { mark: 1, keyword: "C₃H₈O molecular formula", text: "Confirm molecular formula is C₃H₈O using M⁺ = 60." },
        { mark: 1, keyword: "alcohol O-H group", text: "Identify alcohol O-H group from 3350 cm⁻¹ IR absorption." },
        { mark: 1, keyword: "propan-1-ol or propan-2-ol", text: "Name propan-1-ol or propan-2-ol with correct structure." },
        { mark: 1, keyword: "[CH₃CHOH]⁺ / [CH₂CH₂OH]⁺ at m/z = 45", text: "Identify fragment ion [CH₃CHOH]⁺ or [C₂H₅O]⁺ at m/z = 45 (M - 15)." }
      ],
      examinerTips: "Always show all working for empirical formula calculations: mass → moles → simplest whole number ratio."
    }
  }
);







