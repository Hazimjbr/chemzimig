import { Question } from '../../../types';

// Identification of Ions and Gases - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u7_l4_lv2_1-2026",
    question: "When aqueous sodium hydroxide is added dropwise to a solution containing iron(II) ions (Fe²⁺), what is observed?",
    options: [
      { text: "A green precipitate forms, which is insoluble in excess sodium hydroxide and turns red-brown at the surface on standing in air", isCorrect: true },
      { text: "A red-brown precipitate forms immediately, which dissolves in excess to give a yellow solution" },
      { text: "A light blue precipitate forms, which dissolves in excess to give a dark blue solution" },
      { text: "A white precipitate forms, which is completely soluble in excess sodium hydroxide" }
    ],
    correctAnswer: 0,
    explanation: "* Fe²⁺ forms a green precipitate of Fe(OH)₂ with NaOH(aq), insoluble in excess.\n* On standing in air, atmospheric oxygen oxidises iron(II) hydroxide to red-brown iron(III) hydroxide: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q233",
    createdAt: "2026-08-21T06:15:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv2_2-2026",
    question: "An aqueous solution of salt Y is tested:\n1. Acidified with dilute nitric acid, then aqueous silver nitrate is added → A cream precipitate forms.\n2. Aqueous sodium hydroxide added dropwise → Light blue precipitate, insoluble in excess.\nWhat is the identity of salt Y?",
    options: [
      { text: "Copper(II) bromide, CuBr₂", isCorrect: true },
      { text: "Copper(II) chloride, CuCl₂" },
      { text: "Iron(II) bromide, FeBr₂" },
      { text: "Copper(II) iodide, CuI₂" }
    ],
    correctAnswer: 0,
    explanation: "* Cream precipitate with AgNO₃ confirms bromide ions (AgBr).\n* Light blue precipitate with NaOH insoluble in excess confirms copper(II) ions ($Cu^{2+}$).\n* Salt Y is copper(II) bromide (CuBr₂).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q234",
    createdAt: "2026-08-21T06:20:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv2_3-2026",
    question: "Which reagent and observation confirm the presence of sulfate ions (SO₄²⁻) in an aqueous solution?",
    options: [
      { text: "Add dilute nitric acid followed by aqueous barium nitrate → A white precipitate forms", isCorrect: true },
      { text: "Add aqueous sodium hydroxide and warm → Ammonia gas evolved" },
      { text: "Add dilute hydrochloric acid followed by aqueous silver nitrate → A yellow precipitate forms" },
      { text: "Add acidified potassium manganate(VII) → Purple turns colourless" }
    ],
    correctAnswer: 0,
    explanation: "* To test for sulfate ions (SO₄²⁻), acidify with dilute nitric acid (to remove interfering carbonate or sulfite ions), then add barium nitrate or barium chloride solution.\n* A dense white precipitate of barium sulfate (BaSO₄) forms.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q235",
    createdAt: "2026-08-21T06:25:00Z"
  },
  {
    id: "ex_ci_u7_l4_lv2_4-2026",
    question: "How can aluminium ions (Al³⁺) and zinc ions (Zn²⁺) in solution be distinguished using aqueous ammonia (NH₃(aq))?",
    options: [
      { text: "Both give a white precipitate; with excess NH₃, the precipitate of Zn²⁺ dissolves while the precipitate of Al³⁺ remains insoluble", isCorrect: true },
      { text: "Al³⁺ gives a white precipitate while Zn²⁺ gives no precipitate" },
      { text: "Zn²⁺ gives a blue precipitate while Al³⁺ gives a green precipitate" },
      { text: "Al³⁺ dissolves in excess NH₃ while Zn²⁺ remains insoluble" }
    ],
    correctAnswer: 0,
    explanation: "* Both Al³⁺ and Zn²⁺ form white precipitates of metal hydroxides with aqueous ammonia.\n* However, in excess NH₃(aq), Zn(OH)₂ dissolves to give a colourless complex solution, whereas Al(OH)₃ remains insoluble in excess ammonia.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q236",
    createdAt: "2026-08-21T06:30:00Z"
  }
];
