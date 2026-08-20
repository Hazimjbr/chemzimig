import { Question } from '../../../types';

// Transition Elements - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u8_l4_lv3_1-2026",
    question: "How do transition metal catalysts (such as platinum in catalytic converters or Fe in the Haber process) increase reaction rates?",
    options: [
      { text: "They provide an alternative reaction pathway with a lower activation energy ($E_a$)", isCorrect: true },
      { text: "They increase the average kinetic energy of the reacting particles" },
      { text: "They increase the frequency of particle collisions without changing the activation energy" },
      { text: "They shift the position of dynamic equilibrium towards the products" }
    ],
    correctAnswer: 0,
    explanation: "* Catalysts lower the activation energy by providing an alternate mechanistic route (often involving adsorption onto the metal surface and variable oxidation states), so a higher proportion of collisions have $E \\ge E_a$.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q285",
    createdAt: "2026-08-21T11:30:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_2-2026",
    question: "Both potassium and copper are metals in Period 4.\nWhich pair of statements correctly compares their chemical reactivity with cold water and dilute hydrochloric acid?",
    options: [
      { text: "Potassium reacts vigorously with cold water; Copper does not react with cold water or dilute hydrochloric acid", isCorrect: true },
      { text: "Copper reacts vigorously with cold water; Potassium is unreactive" },
      { text: "Both potassium and copper react rapidly with dilute hydrochloric acid releasing hydrogen" },
      { text: "Neither potassium nor copper reacts with cold water" }
    ],
    correctAnswer: 0,
    explanation: "* Potassium is a Group I alkali metal with very high reactivity (reacts violently with water).\n* Copper is a transition metal below hydrogen in the reactivity series, so it does not displace H₂ from cold water or dilute non-oxidising acids like HCl.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q286",
    createdAt: "2026-08-21T11:35:00Z"
  },
  {
    id: "ex_ci_u8_l4_lv3_3-2026",
    question: "Zinc ($Zn$) forms only $Zn^{2+}$ ions and its compounds (e.g. $ZnSO_4$, $ZnO$) are white solids that dissolve in water to give colourless solutions.\nWhy does zinc exhibit these atypical properties compared to typical transition elements like iron or copper?",
    options: [
      { text: "Zinc has a completely filled d-subshell in both its metallic atom and $Zn^{2+}$ ion, preventing d-d electronic transitions and variable oxidation states", isCorrect: true },
      { text: "Zinc has no d-electrons in its atomic structure" },
      { text: "Zinc is an alkali metal located in Group I" },
      { text: "Zinc forms giant covalent networks rather than ionic compounds" }
    ],
    correctAnswer: 0,
    explanation: "* Transition metals show colour and variable valency due to partially filled d-orbitals.\n* Zinc has a full $3d^{10}$ subshell in its atom and $Zn^{2+}$ ion, which is why it has a single oxidation state (+2) and forms colourless/white compounds.",
    level: 3,
    topic: "periodic-table",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q287",
    createdAt: "2026-08-21T11:40:00Z"
  }
];
