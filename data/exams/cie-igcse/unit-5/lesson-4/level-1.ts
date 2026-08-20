import { Question } from '../../../types';

// Fuel and Hydrogen - Level 1 (Easy)
export const level1Questions: Question[] = [
  {
    id: "ex_ci_u5_l4_lv1_1-2026",
    question: "Which gas is released when fossil fuels containing sulfur impurities are burned?",
    options: [
      { text: "Carbon monoxide" },
      { text: "Sulfur dioxide", isCorrect: true },
      { text: "Methane" },
      { text: "Nitrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Sulfur impurities in fossil fuels react with atmospheric oxygen during combustion to form sulfur dioxide (SO₂), a major cause of acid rain.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q141",
    createdAt: "2026-08-20T21:00:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_2-2026",
    question: "What are the only two products formed during the complete combustion of a pure hydrocarbon fuel in excess oxygen?",
    options: [
      { text: "Carbon monoxide and water" },
      { text: "Carbon dioxide and water", isCorrect: true },
      { text: "Carbon and hydrogen" },
      { text: "Carbon dioxide and hydrogen" }
    ],
    correctAnswer: 1,
    explanation: "* Hydrocarbons contain only carbon and hydrogen atoms.\n* Complete combustion in excess oxygen produces carbon dioxide (CO₂) and water (H₂O).",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q142",
    createdAt: "2026-08-20T21:05:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_3-2026",
    question: "Why is hydrogen considered a cleaner fuel than petrol for motor vehicles?",
    options: [
      { text: "Its combustion releases only water vapour", isCorrect: true },
      { text: "It is a liquid at room temperature and easy to pump" },
      { text: "It is cheaper to extract from air than petrol from crude oil" },
      { text: "It releases less energy per gram than petrol" }
    ],
    correctAnswer: 0,
    explanation: "* Combustion of hydrogen produces only water ($2H_2 + O_2 \\rightarrow 2H_2O$) with zero emissions of carbon dioxide, carbon monoxide, particulates, or sulfur dioxide.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q143",
    createdAt: "2026-08-20T21:10:00Z"
  },
  {
    id: "ex_ci_u5_l4_lv1_4-2026",
    question: "Which of the following is a non-renewable fossil fuel?",
    options: [
      { text: "Wood" },
      { text: "Coal", isCorrect: true },
      { text: "Ethanol from sugar cane" },
      { text: "Biogas from manure" }
    ],
    correctAnswer: 1,
    explanation: "* Coal is a fossil fuel formed over millions of years from decaying plant material under high pressure and temperature; it is non-renewable.\n* Wood, bio-ethanol, and biogas are renewable biofuels.",
    level: 1,
    topic: "chemical-energetics",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q144",
    createdAt: "2026-08-20T21:15:00Z"
  }
];
