import { Question } from '../../../types';

// Measurement - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u12_l1_lv3_1-2026",
    question: "A student dispenses 20.0 cm³ of solution from a burette with an uncertainty of ±0.05 cm³ on each reading (initial and final readings).\nWhat is the total percentage uncertainty in this volume measurement?",
    options: [
      { text: "0.50%", isCorrect: true },
      { text: "0.25%" },
      { text: "1.00%" },
      { text: "0.05%" }
    ],
    correctAnswer: 0,
    explanation: "* Two readings are taken (initial and final), giving a combined maximum uncertainty of $2 \\times (\\pm 0.05) = \\pm 0.10\\text{ cm}^3$.\n* Percentage uncertainty $= (0.10 / 20.0) \\times 100\\% = 0.50\\%$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q449",
    createdAt: "2026-08-22T04:40:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_2-2026",
    question: "A student performs a titration but forgets to fill the space below the burette tap, leaving an air bubble. During the titration, the air bubble fills with liquid.\nHow does this systematic error affect the calculated concentration of the unknown acid in the flask?",
    options: [
      { text: "The recorded burette volume (titre) is larger than the true volume delivered, causing the calculated acid concentration to be overestimated", isCorrect: true },
      { text: "The calculated concentration is underestimated" },
      { text: "The error has no effect on the calculated concentration" },
      { text: "The endpoint color change is prevented from occurring" }
    ],
    correctAnswer: 0,
    explanation: "* The air bubble is replaced by liquid from the burette body, registering as extra volume on the scale without actually entering the flask.\n* A falsely high recorded titre implies more moles were delivered, overestimating the calculated concentration.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q450",
    createdAt: "2026-08-22T04:45:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_3-2026",
    question: "A gas X has a relative molecular mass ($M_r$) of 71 and is soluble in water.\nWhich laboratory arrangement is suitable for collecting a sample of pure, dry gas X?",
    options: [
      { text: "Pass gas X through concentrated sulfuric acid, then collect by downward delivery into an upright gas jar", isCorrect: true },
      { text: "Pass gas X through water, then collect by upward delivery into an inverted gas jar" },
      { text: "Pass gas X over solid calcium oxide, then collect over water" },
      { text: "Pass gas X through aqueous sodium hydroxide, then collect by downward delivery" }
    ],
    correctAnswer: 0,
    explanation: "* $M_r = 71$ (e.g. $Cl_2$), which is much denser than air ($M_r \\approx 28.8$), so it sinks (downward delivery into upright jar).\n* It is acidic/neutral, so it is dried using concentrated sulfuric acid without reacting.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q451",
    createdAt: "2026-08-22T04:50:00Z"
  },
  {
    id: "ex_ci_u12_l1_lv3_4-2026",
    question: "In a gas-evolution rate experiment, a gas syringe records 48 cm³ of gas produced in the first 20 seconds. The tangent drawn to the curve at time $t = 0\\text{ s}$ passes through the points $(0, 0)$ and $(10\\text{ s}, 36\\text{ cm}^3)$.\nWhat is the INITIAL rate of reaction?",
    options: [
      { text: "3.6 cm³/s", isCorrect: true },
      { text: "2.4 cm³/s" },
      { text: "1.8 cm³/s" },
      { text: "0.28 cm³/s" }
    ],
    correctAnswer: 0,
    explanation: "* Initial rate is the gradient of the tangent at $t = 0\\text{ s}$.\n* Gradient $= \\Delta V / \\Delta t = (36 - 0) / (10 - 0) = 3.6\\text{ cm}^3\\text{/s}$.",
    level: 3,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q452",
    createdAt: "2026-08-22T04:55:00Z"
  }
];
