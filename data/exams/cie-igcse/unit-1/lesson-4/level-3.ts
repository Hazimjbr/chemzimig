import { Question } from '../../../types';

// Kinetic Particle Theory - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l4_lv3_1-2026",
    question: "According to kinetic theory, why does the pressure of a real gas deviate from ideal gas behavior at extremely high pressures and very low temperatures?",
    options: [
      { text: "Gas particles start disintegrating into subatomic quarks" },
      { text: "At high pressure, particle volume becomes significant compared to total volume; at low temperature, intermolecular attractive forces pull particles together and reduce wall impact forces" },
      { text: "Gravitational attraction between gas particles becomes infinitely strong" },
      { text: "Particles lose all kinetic energy at high pressure" }
    ],
    correctAnswer: 1,
    explanation: "* Ideal gas assumptions state that particles have zero volume and exert no attractive forces.\n* Under high pressure, the volume occupied by the particles themselves is no longer negligible.\n* At low temperatures, slow-moving particles feel intermolecular attractions, reducing the force of collisions with the container walls.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q20",
    createdAt: "2026-04-07T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv3_2-2026",
    question: "A rigid flask contains nitrogen gas at 27 °C (300 K) with a pressure of 100 kPa. If the flask is heated to 327 °C (600 K), what will be the new pressure inside the flask, and what is the kinetic justification?",
    options: [
      { text: "100 kPa because volume is fixed" },
      { text: "200 kPa because absolute temperature has doubled, doubling average kinetic energy and wall collision force/frequency (Gay-Lussac's Law)" },
      { text: "1211 kPa because Celsius temperature increased twelve-fold" },
      { text: "50 kPa because particles escape through the glass" }
    ],
    correctAnswer: 1,
    explanation: "* Pressure is directly proportional to absolute temperature in Kelvin ($P_1/T_1 = P_2/T_2$).\n* Converting to Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 327 + 273 = 600\\text{ K}$.\n* Since $T$ doubles, average kinetic energy doubles, increasing both collision frequency and momentum exchange to produce $P_2 = 200\\text{ kPa}$.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q22",
    createdAt: "2026-04-07T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv3_3-2026",
    question: "Two flasks of identical volume contain equal masses of neon gas (Ne, $A_r = 20$) and argon gas (Ar, $A_r = 40$) at the exact same temperature. Which statement accurately compares the number of particles, average kinetic energy, and pressure in the two flasks?",
    options: [
      { text: "Argon has more particles, higher average kinetic energy, and double the pressure of neon" },
      { text: "Both gases have the same average kinetic energy; the neon flask contains twice as many atoms and exerts double the pressure of the argon flask" },
      { text: "Both flasks contain the same number of atoms and exert identical pressure" },
      { text: "Neon atoms have higher kinetic energy because they are lighter" }
    ],
    correctAnswer: 1,
    explanation: "* At the same temperature, particles of all gases have the identical average kinetic energy ($\\text{KE} = \\frac{1}{2}mv^2$).\n* Because neon has half the molar mass of argon ($20\\text{ vs }40$), an equal mass of neon contains twice as many moles (atoms) as argon ($n = m/M_r$).\n* By Avogadro's Law and ideal gas behavior, double the number of particles in the same volume at the same temperature exerts exactly double the pressure.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q13",
    createdAt: "2026-04-08T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv3_4-2026",
    question: "A sample of gas in a flexible balloon has a volume of 500 cm³ at 27 °C (300 K). If the gas is cooled to -73 °C (200 K) under constant atmospheric pressure, what is the new volume of the balloon, and how does kinetic theory explain this?",
    options: [
      { text: "333.3 cm³; slower-moving particles hit the interior walls with less force and frequency, allowing external atmospheric pressure to compress the balloon until pressures balance (Charles's Law)" },
      { text: "750 cm³; particles expand to occupy empty spaces" },
      { text: "500 cm³; volume is unaffected by temperature under constant pressure" },
      { text: "100 cm³; particles freeze instantly into a tiny solid crystal" }
    ],
    correctAnswer: 0,
    explanation: "* By Charles's Law ($V_1/T_1 = V_2/T_2$), $V_2 = 500 \\times (200 / 300) = 333.3\\text{ cm}^3$.\n* Cooling reduces the average kinetic energy of the particles, lowering the internal impact force against the walls. The constant external pressure compresses the balloon until the internal collision frequency per unit area increases to match the external pressure.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Specimen Paper 2 Q23",
    createdAt: "2026-04-13T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv3_5-2026",
    question: "Which of the following graphs of pressure ($P$) against temperature in Celsius ($T\\text{ in }^\\circ\\text{C}$) correctly represents the behavior of a fixed mass of gas at constant volume?",
    options: [
      { text: "A straight line passing directly through the origin (0, 0)" },
      { text: "A straight line with positive slope that extrapolates backwards to cut the temperature axis at -273 °C" },
      { text: "A downward curving hyperbola asymptotic to both axes" },
      { text: "A horizontal line independent of temperature" }
    ],
    correctAnswer: 1,
    explanation: "* Pressure is directly proportional to absolute temperature in Kelvin ($P \\propto T_K$).\n* When plotted against Celsius temperature, the linear relationship $P = k(T_{^\\circ\\text{C}} + 273)$ gives a positive straight line that intercepts the zero-pressure axis at Absolute Zero ($-273.15\\text{ }^\\circ\\text{C}$).",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q25",
    createdAt: "2026-04-13T10:00:00Z"
  },
  {
    id: "ex_ci_u1_l4_lv3_6-2026",
    question: "A mixture of helium (He, $A_r = 4$) and sulfur dioxide (SO₂, $M_r = 64$) is kept in a container at thermal equilibrium at 25 °C. Which statement is correct regarding the root-mean-square speed ($v_{\\text{rms}}$) and kinetic energy of the helium atoms compared to the sulfur dioxide molecules?",
    options: [
      { text: "Both gases have the exact same average kinetic energy, but helium atoms move 4 times faster on average ($v_{\\text{rms}}$ is 4 times greater)" },
      { text: "Helium atoms have 16 times more kinetic energy because they are lighter" },
      { text: "SO₂ molecules have higher average kinetic energy because they have greater mass" },
      { text: "Both gases have identical speeds and identical masses" }
    ],
    correctAnswer: 0,
    explanation: "* At the same temperature, all gases have the identical average kinetic energy: $\\text{KE} = \\frac{1}{2}m v^2$.\n* Because $\\text{KE}_{\\text{He}} = \\text{KE}_{\\text{SO}_2}$, $\\frac{1}{2}(4)v_{\\text{He}}^2 = \\frac{1}{2}(64)v_{\\text{SO}_2}^2$, so $v_{\\text{He}}/v_{\\text{SO}_2} = \\sqrt{64/4} = \\sqrt{16} = 4$.\n* Helium atoms travel 4 times faster on average than $\\text{SO}_2$ molecules.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 21 Q17",
    createdAt: "2026-04-14T10:00:00Z"
  }
];


