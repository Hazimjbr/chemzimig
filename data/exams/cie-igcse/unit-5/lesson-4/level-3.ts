import { Question } from '../../../types';

// Fuel and Hydrogen - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv3_1-2026",
    question: "The molar enthalpies of combustion for hydrogen and octane (C₈H₁₈) are -286 kJ/mol and -5470 kJ/mol, respectively.\nWhat are the energy values released per gram of hydrogen and octane?\n(Given: $A_r$ of H = 1, C = 12)",
    options: [
      { text: "Hydrogen = 143.0 kJ/g; Octane = 48.0 kJ/g", isCorrect: true },
      { text: "Hydrogen = 286.0 kJ/g; Octane = 48.0 kJ/g" },
      { text: "Hydrogen = 143.0 kJ/g; Octane = 683.8 kJ/g" },
      { text: "Hydrogen = 71.5 kJ/g; Octane = 24.0 kJ/g" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r$ of H₂ $= 2 \\times 1 = 2\\text{ g/mol}$. Energy per gram $= 286 / 2 = 143.0\\text{ kJ/g}$.\n* $M_r$ of octane, C₈H₁₈ $= (8 \\times 12) + (18 \\times 1) = 96 + 18 = 114\\text{ g/mol}$. Energy per gram $= 5470 / 114 = 48.0\\text{ kJ/g}$.\n* Hydrogen delivers about 3 times more energy per gram than octane.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q149",
    createdAt: "2026-08-20T21:40:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_2-2026",
    question: "Why does a hydrogen-oxygen fuel cell operate at a higher electrical efficiency than a conventional internal combustion engine burning hydrogen gas?",
    options: [
      { text: "A fuel cell converts chemical energy directly into electrical energy without converting it into thermal and mechanical energy first", isCorrect: true },
      { text: "A fuel cell uses liquid oxygen instead of gaseous air" },
      { text: "A fuel cell eliminates the activation energy completely" },
      { text: "A fuel cell produces hydrogen peroxide instead of water" }
    ],
    correctAnswer: 0,
    explanation: "* Heat engines (like combustion engines) are limited by thermodynamic cycle losses (heat dissipation to cooling water and exhaust gases).\n* Fuel cells convert chemical bond energy directly into electrical work via redox half-reactions with minimal heat loss.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q150",
    createdAt: "2026-08-20T21:45:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_3-2026",
    question: "Green hydrogen is produced by the electrolysis of water powered entirely by solar energy: 2H₂O(l) → 2H₂(g) + O₂(g).\nWhich statement about this process is correct?",
    options: [
      { text: "The electrolysis reaction is endothermic and absorbs electrical energy from renewable sources", isCorrect: true },
      { text: "The process produces carbon dioxide gas at the cathode" },
      { text: "The enthalpy change (ΔH) for the electrolysis of water is negative" },
      { text: "The energy required to decompose water is less than the energy released when the resulting hydrogen is burned" }
    ],
    correctAnswer: 0,
    explanation: "* Splitting water into its elements is the reverse of combustion and is an endothermic process requiring electrical energy input ($+\\Delta H$).\n* By conservation of energy, the theoretical energy input equals the energy released when hydrogen burns.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q151",
    createdAt: "2026-08-20T21:50:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv3_4-2026",
    question: "When 1.0 kg of each of the following fuels is completely combusted, which fuel releases the greatest mass of carbon dioxide (CO₂) into the atmosphere?\n(Given: $A_r$ of H = 1, C = 12, O = 16)",
    options: [
      { text: "Methane, CH₄ (75% C by mass)" },
      { text: "Propane, C₃H₈ (81.8% C by mass)" },
      { text: "Anthracite coal (approx. 92% C by mass)", isCorrect: true },
      { text: "Hydrogen gas, H₂" }
    ],
    correctAnswer: 2,
    explanation: "* The mass of CO₂ emitted is directly proportional to the carbon content by mass of the fuel.\n* Anthracite coal has the highest carbon fraction (~92%), producing the most CO₂ per kg burned (~3.37 kg CO₂/kg coal).\n* Hydrogen contains 0% carbon and produces 0 kg of CO₂.",
    level: 3,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q152",
    createdAt: "2026-08-20T21:55:00Z"
  }
];
