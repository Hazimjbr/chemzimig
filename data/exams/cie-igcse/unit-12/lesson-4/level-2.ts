import { Question } from '../../../types';

// Instrumental Analysis - Level 2 (Medium)
export const level2Questions: Question[] = [
  {
    id: "ex_ci_u12_l4_lv2_1-2026",
    question: "A solution containing two different metal ions is analysed using flame emission spectroscopy. Which statement describes how the instrument can identify both metal ions and determine their respective concentrations?",
    options: [
      { text: "The emission spectrum of the mixture shows the unique line wavelengths of both ions for identification, and the intensity of the light emitted at those wavelengths is proportional to their concentration", isCorrect: true },
      { text: "The instrument measures the pH change when the metal ions are burned in the flame" },
      { text: "The instrument separates the ions by their density in the burner chamber before vaporization" },
      { text: "The instrument measures the total heat absorbed by the sample, which is identical for all metal ions" }
    ],
    correctAnswer: 0,
    explanation: "* Flame emission spectroscopy produces a line spectrum for each metal ion, acting as a unique fingerprint.\n* The concentration of each ion is determined by measuring the intensity (brightness) of the light emitted at its specific wavelengths.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q481",
    createdAt: "2026-08-22T08:00:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_2-2026",
    question: "A student is investigating the rate of reaction between calcium carbonate and dilute hydrochloric acid by measuring the volume of carbon dioxide gas produced. Which experimental error would result in a lower-than-expected volume of gas being recorded in the gas syringe?",
    options: [
      { text: "There is a loose connection between the delivery tube and the conical flask, allowing gas to escape", isCorrect: true },
      { text: "The acid used is slightly more concentrated than the labeled value" },
      { text: "The student reads the volume at the top of the plunger meniscus instead of the bottom" },
      { text: "The temperature of the room increases during the reaction, causing gas expansion" }
    ],
    correctAnswer: 0,
    explanation: "* Gas leaks in the delivery setup or container connection directly allow the produced gas to escape into the atmosphere instead of entering the gas syringe, leading to lower measured gas volumes.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q482",
    createdAt: "2026-08-22T08:05:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_3-2026",
    question: "During an acid-base titration, which procedure would introduce a systematic error that increases the calculated concentration of the acid being analyzed?",
    options: [
      { text: "Rinsing the conical flask with the sodium hydroxide solution before adding the acid", isCorrect: true },
      { text: "Rinsing the burette with the acid before filling it" },
      { text: "Reading the initial burette volume from eye-level to prevent parallax error" },
      { text: "Using a pipette to measure the exact volume of alkali added to the flask" }
    ],
    correctAnswer: 0,
    explanation: "* Rinsing the conical flask with sodium hydroxide leaves excess alkali residue behind, meaning more acid from the burette will be required to reach the endpoint, resulting in a higher calculated concentration of the acid.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q483",
    createdAt: "2026-08-22T08:10:00Z"
  },
  {
    id: "ex_ci_u12_l4_lv2_4-2026",
    question: "A forensic scientist uses gas chromatography (GC) coupled with a mass spectrometer (MS) to analyze a complex liquid mixture. How do the two parts of this instrumental setup work together to analyze the mixture?",
    options: [
      { text: "The gas chromatograph separates the components of the mixture, and the mass spectrometer identifies each separated component", isCorrect: true },
      { text: "The mass spectrometer separates the mixture, and the gas chromatograph measures the boiling point" },
      { text: "The gas chromatograph vaporises the sample, while the mass spectrometer burns it to produce a flame" },
      { text: "Both parts perform the same analysis to confirm the color and density of the sample" }
    ],
    correctAnswer: 0,
    explanation: "* Gas chromatography is an advanced separation technique that separates the components of a volatile mixture.\n* As each component leaves the column, it enters the mass spectrometer, which determines its molecular mass and structure for identification.",
    level: 2,
    topic: "experimental-techniques",
    curriculum: "igcse",
    paperType: "mcq",
    source: "CIE IGCSE Chemistry 0620 / 2026 Paper 2 Q484",
    createdAt: "2026-08-22T08:15:00Z"
  }
];
