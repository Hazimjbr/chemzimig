import { Question } from '../../../types';

// Instrumental Analysis - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l4_lv3_1-2026",
    question: "A student performs a titration to find the concentration of a sulfuric acid solution. The student uses a pipette to measure 25.0 cm³ of sodium hydroxide into a flask, but the pipette has a chip at the tip that retains a small drop of liquid.\nWhat is the effect of this error on the calculated concentration of the sulfuric acid?",
    options: [
      { text: "The calculated concentration of sulfuric acid will be lower than the true value, because less acid is needed to neutralise the smaller volume of sodium hydroxide that was delivered", isCorrect: true },
      { text: "The calculated concentration of sulfuric acid will be higher than the true value, because more acid is needed to neutralise the sodium hydroxide" },
      { text: "The calculated concentration will be unaffected because the indicator only detects pH changes" },
      { text: "The titration volume will double because the sodium hydroxide concentration increases" }
    ],
    correctAnswer: 0,
    explanation: "* The chip retains sodium hydroxide, so the actual volume delivered to the flask is less than 25.0 cm³.\n* Less acid is required to reach the endpoint.\n* Since the calculation assumes exactly 25.0 cm³ of NaOH was neutralised by this smaller volume of acid, the calculated concentration of the acid is underestimated (lower).",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q485",
    createdAt: "2026-08-22T08:20:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_2-2026",
    question: "A sample of water is suspected to contain tiny traces of copper(II) ions (Cu²⁺) and sodium ions (Na⁺). Why is flame emission spectroscopy preferred over adding aqueous sodium hydroxide to identify the copper(II) ions in this sample?",
    options: [
      { text: "The concentration of copper(II) ions may be below the detection limit of the precipitation reaction, whereas spectroscopy is sensitive enough to detect trace concentrations", isCorrect: true },
      { text: "Sodium hydroxide would react violently with the sodium ions, masking the copper precipitate" },
      { text: "Flame emission spectroscopy completely destroys the sodium ions, allowing only copper to be observed" },
      { text: "Precipitation reactions only work for transition metals in their elemental state" }
    ],
    correctAnswer: 0,
    explanation: "* Trace amounts of metal ions (very low concentrations) will not produce a visible precipitate with sodium hydroxide.\n* Flame emission spectroscopy has a very low detection limit (high sensitivity), allowing it to identify trace concentrations of multiple ions simultaneously by their emission spectra.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q486",
    createdAt: "2026-08-22T08:25:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_3-2026",
    question: "In an experiment to determine the formula of a metal oxide, a student records the following mass measurements (each with uncertainty ±0.01 g):\n- Mass of crucible = 20.00 g\n- Mass of crucible + metal = 22.50 g\n- Mass of crucible + metal oxide = 22.90 g\nWhat is the absolute uncertainty in the calculated mass of oxygen that reacted with the metal?",
    options: [
      { text: "±0.02 g", isCorrect: true },
      { text: "±0.01 g" },
      { text: "±0.03 g" },
      { text: "±0.00 g" }
    ],
    correctAnswer: 0,
    explanation: "* The mass of oxygen = (crucible + metal oxide) − (crucible + metal) = 22.90 − 22.50 = 0.40 g.\n* When subtracting two measurements, their absolute uncertainties add: 0.01 + 0.01 = ±0.02 g.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q487",
    createdAt: "2026-08-22T08:30:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv3_4-2026",
    question: "A student is measuring the volume of oxygen gas collected over water in an inverted measuring cylinder. If the water level inside the cylinder is HIGHER than the water level in the trough when the student reads the volume, how does this error affect the recorded gas volume?",
    options: [
      { text: "The recorded volume is an overestimate, because the gas inside the cylinder is at below-atmospheric pressure and has expanded to fill a larger volume than it would at atmospheric pressure", isCorrect: true },
      { text: "The water levels do not affect the gas volume because water is incompressible" },
      { text: "A higher water level inside the cylinder increases gravity acting on the gas, compressing it" },
      { text: "The gas will dissolve in the water at a faster rate, reducing the measured volume to zero" }
    ],
    correctAnswer: 0,
    explanation: "* When the water level inside the cylinder is higher than outside, the pressure inside is less than atmospheric pressure.\n* Since pressure is lower, the gas expands (Boyle's Law: P₁V₁ = P₂V₂), causing the student to record a volume that is larger than the true value at atmospheric pressure.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q488",
    createdAt: "2026-08-22T08:35:00Z"
  }
];
