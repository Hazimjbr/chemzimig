export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-01",
    question: "Which of the following changes results in a DECREASE in entropy?",
    options: [
      { text: "Dissolving a solid salt in water", isCorrect: false },
      { text: "Evaporation of a liquid to a gas", isCorrect: false },
      { text: "Condensation of a gas to form a liquid", isCorrect: true },
      { text: "Decomposition of one solid into two gases", isCorrect: false }
    ],
    explanation: "Condensation converts a gas (high entropy, very disordered) into a liquid (lower entropy, more ordered). All other options increase entropy:\n- Dissolving distributes ions throughout solution.\n- Evaporation converts ordered liquid to disordered gas.\n- Decomposition to gases increases the number of particles and disorder."
  },
  {
    id: "EDEXCEL-AL-U4-L2-EASY-20260708-02",
    question: "Under what condition is a reaction ALWAYS thermodynamically feasible (spontaneous), regardless of temperature?",
    options: [
      { text: "ΔH is positive and ΔS is positive", isCorrect: false },
      { text: "ΔH is negative and ΔS is negative", isCorrect: false },
      { text: "ΔH is negative and ΔS is positive", isCorrect: true },
      { text: "ΔH is positive and ΔS is negative", isCorrect: false }
    ],
    explanation: "From ΔG = ΔH - TΔS:\n- If ΔH < 0 (exothermic) and ΔS > 0 (entropy increases), then ΔG will always be negative (–  – T×(+) < 0).\n- This ensures ΔG < 0 at all temperatures, making the reaction always feasible."
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-03",
    question: "A reaction has ΔH° = +240 kJ mol⁻¹ and ΔS° = +600 J K⁻¹ mol⁻¹. At what minimum temperature does the reaction become thermodynamically feasible? (Give your answer in Kelvin)",
    options: [
      { text: "0.4 K", isCorrect: false },
      { text: "400 K", isCorrect: true },
      { text: "40 K", isCorrect: false },
      { text: "4000 K", isCorrect: false }
    ],
    explanation: "Set ΔG = 0 at the boundary of feasibility:\n0 = ΔH° - TΔS°\nT = ΔH° / ΔS°\nConvert ΔS° to kJ: ΔS° = 600/1000 = 0.600 kJ K⁻¹ mol⁻¹\nT = +240 / +0.600 = 400 K\nAbove 400 K, ΔG becomes negative and the reaction is feasible."
  },
  {
    id: "EDEXCEL-AL-U4-L2-MEDIUM-20260708-04",
    question: "Use the following data to calculate the lattice formation enthalpy of MgO:\nΔHf°(MgO) = -601 kJ mol⁻¹\nΔHat°(Mg) = +148 kJ mol⁻¹\nΔHat°(O) = +249 kJ mol⁻¹\nIE₁(Mg) = +738 kJ mol⁻¹\nIE₂(Mg) = +1451 kJ mol⁻¹\nEA₁(O) = -141 kJ mol⁻¹\nEA₂(O) = +798 kJ mol⁻¹",
    options: [
      { text: "-3844 kJ mol⁻¹", isCorrect: true },
      { text: "+3844 kJ mol⁻¹", isCorrect: false },
      { text: "-3243 kJ mol⁻¹", isCorrect: false },
      { text: "-601 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "Using the Born-Haber cycle:\nΔHlatt = ΔHf° - [ΔHat(Mg) + ΔHat(O) + IE₁ + IE₂ + EA₁ + EA₂]\nΔHlatt = -601 - [+148 + 249 + 738 + 1451 + (-141) + 798]\nΔHlatt = -601 - [3243]\nΔHlatt = -3844 kJ mol⁻¹\nThis very exothermic value reflects the high charges (+2/–2) and small ionic radii of Mg²⁺ and O²⁻."
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L2-HARD-20260708-05",
    question: "A reaction has ΔG° = -85.0 kJ mol⁻¹ at 298 K and ΔS° = +125 J K⁻¹ mol⁻¹. Calculate ΔH° for the reaction.",
    options: [
      { text: "-47.7 kJ mol⁻¹", isCorrect: true },
      { text: "+47.7 kJ mol⁻¹", isCorrect: false },
      { text: "-48250 kJ mol⁻¹", isCorrect: false },
      { text: "-122 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "Rearrange ΔG = ΔH - TΔS:\nΔH = ΔG + TΔS\nConvert ΔS°: 125/1000 = 0.125 kJ K⁻¹ mol⁻¹\nΔH = -85.0 + (298 × 0.125)\nΔH = -85.0 + 37.25\nΔH = -47.75 ≈ -47.7 kJ mol⁻¹ (to 3 significant figures)"
  }
];
