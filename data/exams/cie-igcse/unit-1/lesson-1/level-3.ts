import { Question } from '../../../types';

export const level3Questions: Question[] = [
  {
    id: "ex_ci_u1_l1_lv3_1",
    question: "Equal volumes of ammonia gas (NH3, Mr = 17) and hydrogen chloride gas (HCl, Mr = 36.5) are introduced at opposite ends of a long glass tube. A white ring of ammonium chloride forms. Where will the ring form and why?",
    options: [
      { text: "Exactly in the middle because both gases travel at the same speed" },
      { text: "Closer to the hydrogen chloride end because NH3 is lighter and diffuses faster" },
      { text: "Closer to the ammonia end because HCl is heavier and diffuses faster" },
      { text: "At the ammonia end because HCl cannot diffuse through air" }
    ],
    correctAnswer: 1,
    explanation: "Ammonia (Mr = 17) has a lower relative molecular mass than hydrogen chloride (Mr = 36.5). Lighter gas particles move and diffuse faster, so NH3 travels further than HCl in the same time, forming the white ring closer to the HCl end.",
    level: 3,
    topic: "states-of-matter",
    curriculum: "igcse",
    createdAt: "2026-06-16T12:00:00Z"
  }
];
