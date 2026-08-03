import { Question } from '../../../types';

export const level2Questions: Question[] = [
  {
    id: 'u4-l3-q1-l2-20260803',
    question: 'The standard total entropy change for a reaction is $\\Delta S^\\theta_{\\text{total}} = +24.93\\text{ J K}^{-1}\\text{mol}^{-1}$. Calculate the equilibrium constant $K$ at this temperature. ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$K = 0.049$' },
      { text: '$K = 3.00$' },
      { text: '$K = 20.1$' },
      { text: '$K = 62.1$' }
    ],
    correctAnswer: 2,
    explanation:
      '- Use $K = e^{\\Delta S^\\theta_{\\text{total}} / R}$.\n- $\\Delta S / R = 24.93 / 8.31 = 2.998 \\approx 3.00$.\n- $K = e^{3.00} \\approx 20.1$.\n- This moderate $K$ value indicates significant concentrations of both reactants and products at equilibrium.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q2-l2-20260803',
    question: 'For the reaction: $\\text{SO}_2(\\text{g}) + \\frac{1}{2}\\text{O}_2(\\text{g}) \\rightleftharpoons \\text{SO}_3(\\text{g})$, the standard total entropy change is $+238.3\\text{ J K}^{-1}\\text{mol}^{-1}$. Which of the following correctly describes the position of equilibrium?',
    options: [
      { text: '$K < 1$; equilibrium lies to the left, mainly SO2 and O2 present' },
      { text: '$K > 1$ but small; approximately equal amounts of reactants and products' },
      { text: '$K \\gg 1$; equilibrium lies far to the right, mainly SO3 present' },
      { text: '$K = 1$; exactly half converted to SO3' }
    ],
    correctAnswer: 2,
    explanation:
      '- Calculate $K = e^{238.3/8.31} = e^{28.67} \\approx 2.84 \\times 10^{12}$.\n- This enormously large $K$ value means equilibrium lies far to the right.\n- At equilibrium, almost all SO2 and O2 have been converted to SO3.\n- This is why the Contact Process for making H2SO4 is highly favourable thermodynamically.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q3-l2-20260803',
    question: 'A reaction has $\\Delta S^\\theta_{\\text{system}} = -35.0\\text{ J K}^{-1}\\text{mol}^{-1}$ and $\\Delta H^\\theta = -52.0\\text{ kJ mol}^{-1}$ at $298\\text{ K}$. Calculate $\\Delta S^\\theta_{\\text{total}}$.',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = -209.5\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +139.4\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +174.4\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -209.5\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- First calculate $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T = -(-52000) / 298 = +174.5\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- Then: $\\Delta S^\\theta_{\\text{total}} = \\Delta S^\\theta_{\\text{sys}} + \\Delta S^\\theta_{\\text{surr}} = -35.0 + 174.5 = +139.5 \\approx +139.4\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- Since $\\Delta S^\\theta_{\\text{total}} > 0$, the reaction is spontaneous at 298 K.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q4-l2-20260803',
    question: 'A reaction has $K = 1.00 \\times 10^{-5}$ at a given temperature. What is the standard total entropy change $\\Delta S^\\theta_{\\text{total}}$? ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}} = +95.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -95.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = +41.6\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S^\\theta_{\\text{total}} = -41.6\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 1,
    explanation:
      '- Use $\\Delta S^\\theta_{\\text{total}} = R \\ln K$.\n- $\\ln(1.00 \\times 10^{-5}) = \\ln(1) + \\ln(10^{-5}) = 0 + (-5 \\times 2.303) = -11.51$.\n- $\\Delta S^\\theta_{\\text{total}} = 8.31 \\times (-11.51) = -95.7 \\approx -95.6\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- The negative value confirms that equilibrium lies far to the left ($K \\ll 1$).',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q5-l2-20260803',
    question: 'Consider the Haber Process: $\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$, $\\Delta H^\\theta = -92\\text{ kJ mol}^{-1}$, $\\Delta S^\\theta_{\\text{system}} = -198\\text{ J K}^{-1}\\text{mol}^{-1}$. What happens to $\\Delta S^\\theta_{\\text{total}}$ as temperature increases?',
    options: [
      { text: '$\\Delta S^\\theta_{\\text{total}}$ increases because $\\Delta S^\\theta_{\\text{system}}$ increases with temperature' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ decreases because $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T$ becomes less positive as $T$ increases' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ stays constant because entropy does not depend on temperature' },
      { text: '$\\Delta S^\\theta_{\\text{total}}$ increases because the reaction becomes more exothermic at higher temperatures' }
    ],
    correctAnswer: 1,
    explanation:
      '- $\\Delta S^\\theta_{\\text{surr}} = -\\Delta H / T = -(-92000) / T = +92000/T$.\n- As $T$ increases, $\\Delta S^\\theta_{\\text{surr}}$ decreases (becomes less positive).\n- Since $\\Delta S^\\theta_{\\text{system}} \\approx -198\\text{ J K}^{-1}\\text{mol}^{-1}$ (approximately constant with temperature), $\\Delta S^\\theta_{\\text{total}}$ decreases.\n- This means $K$ decreases as temperature increases — consistent with Le Chatelier: raising temperature shifts equilibrium left for exothermic reactions.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q6-l2-20260803',
    question: 'An iron-silver ionic equilibrium: $\\text{Fe}^{2+}(\\text{aq}) + \\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Fe}^{3+}(\\text{aq}) + \\text{Ag(s)}$ has $\\Delta S^\\theta_{\\text{total}} = +47.64\\text{ J K}^{-1}\\text{mol}^{-1}$. Which statement is correct?',
    options: [
      { text: '$K < 1$; mostly Fe2+ and Ag+ at equilibrium' },
      { text: '$K \\approx 309$; equilibrium lies to the right, mostly Fe3+ and Ag formed' },
      { text: '$K \\approx 1$; equal amounts of all species at equilibrium' },
      { text: '$K = 47.64$; equilibrium constant equals the entropy change numerically' }
    ],
    correctAnswer: 1,
    explanation:
      '- $K = e^{\\Delta S^\\theta_{\\text{total}} / R} = e^{47.64/8.31} = e^{5.733} \\approx 308.8 \\approx 309$.\n- Since $K \\gg 1$, the equilibrium lies to the right.\n- At equilibrium, mostly Fe3+ ions and Ag metal are present.\n- A grey/shiny silver precipitate forms and the solution turns yellow/orange (Fe3+).',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q7-l2-20260803',
    question: 'The system entropy change for the reaction $\\text{Fe}^{2+}(\\text{aq}) + \\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Fe}^{3+}(\\text{aq}) + \\text{Ag(s)}$ is $\\Delta S^\\theta_{\\text{system}} = -208.3\\text{ J K}^{-1}\\text{mol}^{-1}$. Why is the system entropy change negative?',
    options: [
      { text: 'Because an endothermic reaction has a negative entropy change' },
      { text: 'Because the number of aqueous ions decreases: 2 ions become 1 ion, and a solid is formed' },
      { text: 'Because gas is being absorbed into the reaction mixture' },
      { text: 'Because silver metal has a higher entropy than silver ions' }
    ],
    correctAnswer: 1,
    explanation:
      '- Reactant side: 2 aqueous ions (Fe2+ and Ag+) — higher disorder.\n- Product side: only 1 aqueous ion (Fe3+) plus solid Ag — lower disorder.\n- Forming a solid from aqueous ions reduces the number of particles free to move, decreasing entropy.\n- Therefore $\\Delta S^\\theta_{\\text{system}}$ is negative.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q8-l2-20260803',
    question: 'For the methane reforming reaction: $\\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g}) \\rightleftharpoons \\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g})$, at a temperature where $K_p = 8.54$, calculate $\\Delta S_{\\text{total}}$. ($R = 8.31\\text{ J K}^{-1}\\text{mol}^{-1}$)',
    options: [
      { text: '$\\Delta S_{\\text{total}} = +17.8\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = -17.8\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = +70.9\\text{ J K}^{-1}\\text{mol}^{-1}$' },
      { text: '$\\Delta S_{\\text{total}} = +8.54\\text{ J K}^{-1}\\text{mol}^{-1}$' }
    ],
    correctAnswer: 0,
    explanation:
      '- Use $\\Delta S_{\\text{total}} = R \\ln K_p = 8.31 \\times \\ln(8.54)$.\n- $\\ln(8.54) = 2.145$.\n- $\\Delta S_{\\text{total}} = 8.31 \\times 2.145 = +17.8\\text{ J K}^{-1}\\text{mol}^{-1}$.\n- This small positive value indicates that equilibrium lies slightly to the right at this temperature.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q9-l2-20260803',
    question: 'Which of the following best explains why the thermodynamic equilibrium constant $K$ must be dimensionless?',
    options: [
      { text: 'Because $K$ is always calculated at standard pressure of 1 atm' },
      { text: 'Because each concentration or pressure is divided by its standard value (1 mol dm⁻³ or 1 atm), making the ratio unitless' },
      { text: 'Because all equilibrium constants are defined in terms of mole fractions' },
      { text: 'Because $K$ is derived from $\\Delta S$ which is always dimensionless' }
    ],
    correctAnswer: 1,
    explanation:
      '- In the thermodynamic derivation, each concentration term is expressed as a ratio relative to a standard concentration ($c^\\theta = 1\\text{ mol dm}^{-3}$) or standard pressure ($p^\\theta = 1\\text{ atm}$).\n- For example: $[A] / c^\\theta$ = a pure number.\n- Since each term in the $K$ expression is dimensionless, $K$ itself has no units.\n- Numerically, the values are unchanged because dividing by 1 does not alter the number.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  },
  {
    id: 'u4-l3-q10-l2-20260803',
    question: 'The CaCO₃ decomposition: $\\text{CaCO}_3(\\text{s}) \\rightarrow \\text{CaO(s)} + \\text{CO}_2(\\text{g})$, $\\Delta H^\\theta = +177.9\\text{ kJ mol}^{-1}$, $\\Delta S^\\theta_{\\text{system}} = +160.4\\text{ J K}^{-1}\\text{mol}^{-1}$. At which temperature does the reaction become spontaneous?',
    options: [
      { text: 'Above approximately $838\\text{ K}$ ($565\\text{ °C}$)' },
      { text: 'Above approximately $1109\\text{ K}$ ($836\\text{ °C}$)' },
      { text: 'Above approximately $55\\text{ K}$ ($-218\\text{ °C}$)' },
      { text: 'The reaction is always non-spontaneous as $\\Delta H > 0$' }
    ],
    correctAnswer: 1,
    explanation:
      '- The reaction is spontaneous when $\\Delta S_{\\text{total}} > 0$.\n- At the transition temperature $T$: $\\Delta S_{\\text{total}} = 0$, so $\\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} = 0$.\n- $\\Delta S_{\\text{surr}} = -\\Delta H/T$, so at the transition: $\\Delta S_{\\text{sys}} = \\Delta H / T$.\n- $T = \\Delta H / \\Delta S_{\\text{sys}} = 177900 / 160.4 \\approx 1109\\text{ K}$.\n- Above 1109 K, $\\Delta S_{\\text{total}} > 0$ and decomposition is spontaneous.',
    level: 2,
    topic: 'edexcel-unit-4',
    curriculum: 'edexcel-a2',
    paperType: 'mcq',
    createdAt: '2026-08-03',
    lessonNum: 6
  }
];
