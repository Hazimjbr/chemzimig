import { Question } from '../../../types';

export const level1Questions: Question[] = [
  {
    id: 'u4-l3-q1-l1-20260803',
    question: 'Which of the following correctly links the standard total entropy change to the equilibrium constant?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = R \\ln K$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = \\frac{R}{K}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = RT \\ln K$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -R \\ln K$' }
    ],
    correctAnswer: 0,
    explanation:
      '- The correct thermodynamic relationship is $\\Delta S^\\theta_{\\text{total}} = R \\ln K$.\n- Where $R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$ is the gas constant.\n- This can be rearranged to give $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q2-l1-20260803',
    question: 'A reaction has a large positive standard total entropy change ($\\Delta S^\\theta_{\\text{total}} \\gg 0$). What does this tell us about the equilibrium constant $K$?',
    options: [
      { text: '$K \\ll 1$ — reaction barely proceeds' },
      { text: '$K = 0$ — reaction does not proceed at all' },
      { text: '$K \\gg 1$ — reaction goes virtually to completion' },
      { text: '$K = 1$ — significant amounts of both reactants and products' }
    ],
    correctAnswer: 2,
    explanation:
      '- Since $\\Delta S^\\theta_{\\text{total}} = R \\ln K$, a large positive $\\Delta S^\\theta_{\\text{total}}$ means $\\ln K$ is large and positive.\n- Therefore $K \\gg 1$, and the equilibrium position lies far to the right.\n- The reaction goes virtually to completion.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q3-l1-20260803',
    question: 'Which of the following is the correct expression for the equilibrium constant $K$ in terms of the standard total entropy change?',
    options: [
      { text: '$K = e^{R / \\Delta S^\\theta_{\\text{total}}}$' },
      { text: '$K = e^{\\Delta S^\\theta_{\\text{total}} / R}$' },
      { text: '$K = \\ln(\\Delta S^\\theta_{\\text{total}} / R)$' },
      { text: '$K = R / \\Delta S^\\theta_{\\text{total}}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- Starting from $\\Delta S^\\theta_{\\text{total}} = R \\ln K$, divide both sides by $R$: $\\ln K = \\Delta S^\\theta_{\\text{total}} / R$.\n- Taking the exponential of both sides: $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q4-l1-20260803',
    question: 'For a reversible reaction at equilibrium, which statement about $\\Delta S^\\theta_{\\text{total}}$ is correct?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}}$ must always be positive for a reaction to reach equilibrium' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = 0$ at the exact equilibrium point' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ has no relationship to the equilibrium position' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ is always negative for reversible reactions' }
    ],
    correctAnswer: 1,
    explanation:
      '- At the equilibrium point, the forward and reverse rates are equal and the system has reached its maximum entropy.\n- At this point, the total entropy change for any infinitesimal shift in either direction is zero: $\\Delta S^\\theta_{\\text{total}} = 0$.\n- The standard entropy change $\\Delta S^\\theta_{\\text{total}}$ under standard conditions relates to how far equilibrium lies to one side, via $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q5-l1-20260803',
    question: 'A reaction has $\\Delta S^\\theta_{\\text{total}} = +57.4\\text{ J K}^{-1}\\text{mol}^{-1}$ and $R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$. What is the approximate value of $K$?',
    options: [
      { text: '$K \\approx 6.90$' },
      { text: '$K \\approx 57.4$' },
      { text: '$K \\approx 1030$' },
      { text: '$K \\approx 0.001$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Use the formula $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.\n- $\\Delta S^\\theta_{\\text{total}} / R = 57.4 / 8.31 = 6.91$.\n- $K = e^{6.91} \\approx 1003 \\approx 1030$.\n- This large $K$ value confirms the reaction proceeds nearly to completion.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q6-l1-20260803',
    question: 'A reaction is described as thermodynamically feasible but kinetically stable at room temperature. What does this mean?',
    options: [
      { text: 'The reaction has a negative $\\Delta S^\\theta_{\\text{total}}$ but a fast rate' },
      { text: 'The reaction has a positive $\\Delta S^\\theta_{\\text{total}}$ but requires energy input (e.g. a spark) to proceed' },
      { text: 'The reaction has $K < 1$ and a high activation energy' },
      { text: 'The reaction can only proceed in the reverse direction' }
    ],
    correctAnswer: 1,
    explanation:
      '- Thermodynamically feasible means $\\Delta S^\\theta_{\\text{total}} > 0$ (i.e. $K > 1$), so the reaction is energetically favourable.\n- Kinetically stable means the activation energy ($E_a$) is so high that the reaction does not proceed at a measurable rate at room temperature without a catalyst or ignition source.\n- Example: methane + oxygen mixture is stable at room temperature but combusts rapidly once ignited.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q7-l1-20260803',
    question: 'The entropy change of the surroundings is given by which expression?',
    options: [
      { text: '$\\Delta S_{\\text{surr}} = \\Delta H \\times T$' },
      { text: '$\\Delta S_{\\text{surr}} = +\\dfrac{\\Delta H}{T}$' },
      { text: '$\\Delta S_{\\text{surr}} = -\\dfrac{\\Delta H}{T}$' },
      { text: '$\\Delta S_{\\text{surr}} = \\Delta H - T\\Delta S_{\\text{sys}}$' }
    ],
    correctAnswer: 2,
    explanation:
      '- The surroundings entropy change is: $\\Delta S_{\\text{surr}} = -\\dfrac{\\Delta H}{T}$.\n- For an exothermic reaction ($\\Delta H < 0$), heat is released to the surroundings, increasing their entropy (positive $\\Delta S_{\\text{surr}}$).\n- For an endothermic reaction ($\\Delta H > 0$), heat is absorbed from the surroundings, decreasing their entropy (negative $\\Delta S_{\\text{surr}}$).',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q8-l1-20260803',
    question: 'For a spontaneous process, what must be true of the total entropy change?',
    options: [
      { text: '$\\Delta S_{\\text{total}} < 0$' },
      { text: '$\\Delta S_{\\text{total}} = 0$' },
      { text: '$\\Delta S_{\\text{total}} > 0$' },
      { text: '$\\Delta S_{\\text{total}}$ can have any value' }
    ],
    correctAnswer: 2,
    explanation:
      '- The second law of thermodynamics states that for a spontaneous (feasible) process, the total entropy of the universe must increase.\n- Therefore $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$.\n- If $\\Delta S_{\\text{total}} < 0$, the process is non-spontaneous; if $\\Delta S_{\\text{total}} = 0$, the system is at equilibrium.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q9-l1-20260803',
    question: 'The decomposition of calcium carbonate is endothermic ($\\Delta H > 0$). At what temperature range does this reaction become spontaneous?',
    options: [
      { text: 'Only at very low temperatures' },
      { text: 'Only when a catalyst is added' },
      { text: 'At all temperatures above the transition temperature where $\\Delta S_{\\text{total}} > 0$' },
      { text: 'Never — endothermic reactions cannot be spontaneous' }
    ],
    correctAnswer: 2,
    explanation:
      '- For an endothermic reaction, $\\Delta S_{\\text{surr}} = -\\Delta H / T$ is negative.\n- If the system entropy change $\\Delta S_{\\text{sys}}$ is positive (e.g. gas is produced), at high enough temperatures, $\\Delta S_{\\text{sys}}$ can outweigh the negative $\\Delta S_{\\text{surr}}$.\n- At the transition temperature, $\\Delta S_{\\text{total}} = 0$; above it, $\\Delta S_{\\text{total}} > 0$ and the reaction becomes spontaneous.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q10-l1-20260803',
    question: 'Which of the following reactions would have the largest positive $\\Delta S^\\theta_{\\text{system}}$?',
    options: [
      { text: '$\\text{NaCl(s)} \\rightarrow \\text{Na}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$' },
      { text: '$\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightarrow 2\\text{NH}_3(\\text{g})$' },
      { text: '$\\text{CaCO}_3(\\text{s}) \\rightarrow \\text{CaO(s)} + \\text{CO}_2(\\text{g})$' },
      { text: '$\\text{H}_2\\text{O(g)} \\rightarrow \\text{H}_2\\text{O(l)}$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Entropy increases with the number of gas moles and with changes from solid/liquid to gas.\n- Dissolving NaCl: moderate increase (ions disperse in water).\n- N2 + 3H2 → 2NH3: 4 moles gas → 2 moles gas — entropy DECREASES.\n- CaCO3(s) → CaO(s) + CO2(g): solid produces a gas — large entropy INCREASE.\n- H2O(g) → H2O(l): gas becomes liquid — entropy DECREASES.\n- Therefore CaCO3 decomposition has the largest positive $\\Delta S^\\theta_{\\text{system}}$.',
    level: 1,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  }
];
