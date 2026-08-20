import { Question } from '../../../types';

// Preparation of Salts - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u7_l3_lv2_1-2026",
    question: "In the preparation of copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid, why is copper(II) oxide added in EXCESS to the warm acid?",
    options: [
      { text: "To ensure that all the sulfuric acid is completely neutralised and used up", isCorrect: true },
      { text: "To speed up the evaporation of water during crystallisation" },
      { text: "To act as a catalyst for crystal formation" },
      { text: "To increase the solubility of copper(II) sulfate in cold water" }
    ],
    correctAnswer: 0,
    explanation: "* Excess insoluble base (CuO) ensures 100% of the limiting sulfuric acid reacts.\n* The unreacted excess solid CuO is easily removed by filtration, leaving a pure aqueous solution of copper(II) sulfate.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q223",
    createdAt: "2026-08-21T05:15:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_2-2026",
    question: "After filtering out excess copper(II) oxide, how are large, hydrated crystals of copper(II) sulfate (CuSO₄·5H₂O) obtained from the filtrate?",
    options: [
      { text: "Heat to crystallisation point (saturation), allow to cool slowly, filter crystals, and dry between filter papers", isCorrect: true },
      { text: "Boil the solution continuously until all water has completely evaporated" },
      { text: "Freeze the solution at -20°C and sublimate the ice" },
      { text: "Add concentrated hydrochloric acid to precipitate anhydrous white CuSO₄" }
    ],
    correctAnswer: 0,
    explanation: "* Evaporating to dryness would decompose the salt into anhydrous powder.\n* Gently heating to saturation (crystallisation point, tested on a cold glass rod), followed by slow cooling, produces large hydrated crystals which are then dried gently between filter papers.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q224",
    createdAt: "2026-08-21T05:20:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_3-2026",
    question: "A student wants to prepare pure crystals of sodium sulfate by titration.\nWhy is the experiment first carried out using an indicator, and then repeated under identical conditions WITHOUT the indicator?",
    options: [
      { text: "To obtain an unpolluted salt solution free from indicator dye before crystallising", isCorrect: true },
      { text: "The indicator evaporates during heating and destroys the glassware" },
      { text: "The indicator reacts irreversibly with sulfuric acid to form a gas" },
      { text: "The indicator lowers the solubility of sodium sulfate" }
    ],
    correctAnswer: 0,
    explanation: "* Indicators (like methyl orange or phenolphthalein) are organic dyes that would contaminate the final salt crystals.\n* Once exact titration volumes are established, repeating without indicator yields an uncontaminated solution.",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q225",
    createdAt: "2026-08-21T05:25:00Z"
  },
  {
    id: "ex_ci_u7_l3_lv2_4-2026",
    question: "Which two soluble compounds should be chosen to prepare an insoluble precipitate of lead(II) chloride (PbCl₂)?",
    options: [
      { text: "Lead(II) nitrate solution and sodium chloride solution", isCorrect: true },
      { text: "Lead metal and dilute hydrochloric acid" },
      { text: "Lead(II) oxide solid and sodium chloride solution" },
      { text: "Lead(II) carbonate and chlorine gas" }
    ],
    correctAnswer: 0,
    explanation: "* Precipitation requires two soluble reactants.\n* Lead(II) nitrate (all nitrates are soluble) and sodium chloride (all sodium salts are soluble) react: Pb(NO₃)₂(aq) + 2NaCl(aq) → PbCl₂(s) + 2NaNO₃(aq).",
    level: 2,
    topic: "acids-bases-salts",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q226",
    createdAt: "2026-08-21T05:30:00Z"
  }
];
