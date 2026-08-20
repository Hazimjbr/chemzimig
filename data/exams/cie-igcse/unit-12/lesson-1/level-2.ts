import { Question } from '../../../types';

// Measurement - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l1_lv2_1-2026",
    question: "Which drying agent MUST be used to dry moist basic ammonia gas (NH₃)?",
    options: [
      { text: "Solid calcium oxide (quicklime, CaO)", isCorrect: true },
      { text: "Concentrated sulfuric acid (conc. H₂SO₄)" },
      { text: "Phosphorus(V) oxide" },
      { text: "Dilute nitric acid" }
    ],
    correctAnswer: 0,
    explanation: "* Ammonia is basic ($NH_3$). If passed through concentrated sulfuric acid, it would react to form $(NH_4)_2SO_4$ salt instead of drying.\n* Basic calcium oxide (CaO) dries ammonia without reacting with it.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q445",
    createdAt: "2026-08-22T04:20:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv2_2-2026",
    question: "When measuring the volume of an aqueous solution in a burette or measuring cylinder, how should the student read the scale accurately?",
    options: [
      { text: "Position the eye horizontally level with the bottom of the curved liquid meniscus", isCorrect: true },
      { text: "Look down from above the top edge of the meniscus" },
      { text: "Look up from below the liquid level" },
      { text: "Read the top edge of the meniscus where liquid clings to the glass" }
    ],
    correctAnswer: 0,
    explanation: "* To avoid parallax error, the eye must be horizontally aligned with the bottom of the concave meniscus.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q446",
    createdAt: "2026-08-22T04:25:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv2_3-2026",
    question: "In an experiment monitoring the rate of reaction between calcium carbonate chips and dilute hydrochloric acid:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\nWhy is a loose plug of cotton wool placed in the neck of the conical flask on an electronic balance?",
    options: [
      { text: "To allow carbon dioxide gas to escape freely while preventing acid spray/droplets from splashing out and causing false mass loss", isCorrect: true },
      { text: "To stop carbon dioxide gas from escaping into the room" },
      { text: "To keep the reacting mixture warm" },
      { text: "To absorb oxygen from the surrounding air" }
    ],
    correctAnswer: 0,
    explanation: "* Cotton wool lets $CO_2$ gas escape unhindered while trapping liquid acid aerosol droplets thrown up by vigorous fizzing, ensuring the measured mass loss is due purely to gas evolution.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q447",
    createdAt: "2026-08-22T04:30:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv2_4-2026",
    question: "Which gas can be collected over water in a pneumatic trough because of its extremely low solubility in water?",
    options: [
      { text: "Hydrogen gas (H₂)", isCorrect: true },
      { text: "Ammonia gas (NH₃)" },
      { text: "Hydrogen chloride gas (HCl)" },
      { text: "Sulfur dioxide gas (SO₂)" }
    ],
    correctAnswer: 0,
    explanation: "* Hydrogen and oxygen are virtually insoluble in water, so they bubble through water into an inverted collection tube with zero dissolution loss.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q448",
    createdAt: "2026-08-22T04:35:00Z"
  }
];
