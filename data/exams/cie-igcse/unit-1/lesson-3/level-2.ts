import { Question } from '../../../types';

// Changes of State - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u1_l3_lv2_1-2026",
    question: "Substance X has a melting point of -114 °C and a boiling point of 78 °C. In what physical state does substance X exist at -50 °C and at 100 °C?",
    options: [
      { text: "At -50 °C: Solid; At 100 °C: Liquid" },
      { text: "At -50 °C: Liquid; At 100 °C: Gas" },
      { text: "At -50 °C: Gas; At 100 °C: Liquid" },
      { text: "At -50 °C: Solid; At 100 °C: Gas" }
    ],
    correctAnswer: 1,
    explanation: "* At -50 °C, the temperature is between the melting point (-114 °C) and boiling point (78 °C), so substance X is a liquid.\n* At 100 °C, the temperature is above the boiling point (78 °C), so substance X is a gas.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q13",
    createdAt: "2026-03-24T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv2_2-2026",
    question: "A heating curve is plotted for a pure solid sample as it is steadily heated until converted into gas. Which part of the graph represents a mixture of both solid and liquid phases present simultaneously?",
    options: [
      { text: "The initial upward sloping line from low temperature" },
      { text: "The first horizontal flat plateau region at the melting point" },
      { text: "The middle upward sloping line representing liquid warming" },
      { text: "The final upward sloping line representing gas heating" }
    ],
    correctAnswer: 1,
    explanation: "* At the first flat plateau (melting point), solid is continuously converting into liquid.\n* Both solid and liquid coexist in equilibrium until all solid has melted, while added heat energy overcomes lattice forces without raising temperature.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q15",
    createdAt: "2026-03-24T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv2_3-2026",
    question: "How does dissolving a non-volatile solute (such as sodium chloride) affect the melting point and boiling point of pure water?",
    options: [
      { text: "It raises both the melting point and the boiling point" },
      { text: "It lowers the melting point (freezing point depression) and raises the boiling point (boiling point elevation)" },
      { text: "It lowers both the melting point and the boiling point" },
      { text: "It does not affect either melting point or boiling point" }
    ],
    correctAnswer: 1,
    explanation: "* Impurities disrupt the formation of the solid crystal lattice, lowering the melting/freezing point below 0 °C.\n* Impurities also stabilize the liquid phase and reduce vapor pressure, requiring a higher temperature (> 100 °C) for boiling.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q11",
    createdAt: "2026-03-25T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv2_4-2026",
    question: "A closed container holds liquid diethyl ether at 20 °C. The air pressure above the liquid is measured as the temperature is raised. Why does the pressure inside the sealed container increase rapidly as temperature rises?",
    options: [
      { text: "Air molecules inside the container decompose into atoms" },
      { text: "More liquid molecules gain sufficient kinetic energy to overcome intermolecular forces and enter the gas phase, increasing vapor pressure alongside higher thermal collision frequencies" },
      { text: "The glass walls expand and compress the gas inside" },
      { text: "Ether molecules lose mass and accelerate towards the top" }
    ],
    correctAnswer: 1,
    explanation: "* Raising temperature shifts the Maxwell-Boltzmann energy distribution, allowing a larger fraction of liquid molecules to evaporate.\n* The increased number of gas molecules and their higher collision speeds significantly increase total pressure.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q16",
    createdAt: "2026-03-30T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv2_5-2026",
    question: "At high altitudes on top of Mount Everest, atmospheric pressure is much lower than at sea level. What effect does this lower atmospheric pressure have on the boiling point of pure water?",
    options: [
      { text: "Water boils at a higher temperature above 100 °C" },
      { text: "Water boils at a lower temperature below 100 °C (e.g. around 70 °C)" },
      { text: "Water no longer boils and converts directly from ice to steam" },
      { text: "Atmospheric pressure has no effect on boiling points" }
    ],
    correctAnswer: 1,
    explanation: "* Boiling occurs when vapor pressure of the liquid equals the surrounding atmospheric pressure.\n* In reduced atmospheric pressure, water molecules require less thermal energy to match external pressure, so boiling happens at a lower temperature.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q18",
    createdAt: "2026-03-30T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l3_lv2_6-2026",
    question: "Four pure substances have the following melting and boiling points:\n• W: mp -182 °C, bp -161 °C\n• X: mp -7 °C, bp 59 °C\n• Y: mp 801 °C, bp 1413 °C\n• Z: mp 115 °C, bp 445 °C\n\nWhich substance is a liquid at room temperature (25 °C)?",
    options: [
      { text: "Substance W" },
      { text: "Substance X" },
      { text: "Substance Y" },
      { text: "Substance Z" }
    ],
    correctAnswer: 1,
    explanation: "* At 25 °C, Substance W (-161 °C < 25 °C) is a gas.\n* Substance X has mp -7 °C < 25 °C < bp 59 °C, so it is a liquid.\n* Substances Y and Z have melting points well above 25 °C, so both are solids.",
    level: 2,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q11",
    createdAt: "2026-03-31T10:00:00Z"
  }
];


