export const lessonQuiz = [
  // ==========================================
  // LEVEL 1: FOUNDATION (EASY - 2 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-EASY-20260708-01",
    question: "A chemical reaction has the rate equation: Rate = k[X][Y]². Which of the following statements is correct?",
    options: [
      { text: "The reaction is first order with respect to Y.", isCorrect: false },
      { text: "The reaction is second order overall.", isCorrect: false },
      { text: "Doubling the concentration of Y quadruples the rate of reaction.", isCorrect: true },
      { text: "Tripling the concentration of X increases the rate by a factor of nine.", isCorrect: false }
    ],
    explanation: "According to the rate equation, the reaction is second order with respect to Y. Therefore, doubling the concentration of Y increases the rate by a factor of 2² = 4 (quadrupled)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-EASY-20260708-02",
    question: "Deduce the units of the rate constant k for a reaction that is third-order overall.",
    options: [
      { text: "s⁻¹", isCorrect: false },
      { text: "dm³ mol⁻¹ s⁻¹", isCorrect: false },
      { text: "dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "mol² dm⁻⁶ s⁻¹", isCorrect: false }
    ],
    explanation: "For a third-order reaction, Rate = k[Reactant]³. \nRearranging gives k = Rate / [Reactant]³. \nSubstituting units: (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = s⁻¹ / (mol² dm⁻⁶) = dm⁶ mol⁻² s⁻¹"
  },

  // ==========================================
  // LEVEL 2: APPLICATION (MEDIUM - 3 Questions)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-03",
    question: "For the reaction A + B → C, doubling the concentration of A doubles the rate. Doubling the concentration of B has no effect on the rate. What is the rate equation for this reaction?",
    options: [
      { text: "Rate = k[A][B]", isCorrect: false },
      { text: "Rate = k[A]", isCorrect: true },
      { text: "Rate = k[A]²", isCorrect: false },
      { text: "Rate = k[B]", isCorrect: false }
    ],
    explanation: "Since doubling [A] doubles the rate, the order with respect to A is 1. Since changing [B] has no effect on the rate, the order with respect to B is 0. The rate equation is therefore Rate = k[A]¹[B]⁰, which simplifies to Rate = k[A]"
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-04",
    question: "The rate equation for the reaction between hydrogen and nitrogen monoxide is: Rate = k[NO]²[H₂]. Under certain conditions, [NO] = 0.15 mol dm⁻³ and [H₂] = 0.10 mol dm⁻³. If the rate of reaction is 1.8 × 10⁻⁴ mol dm⁻³ s⁻¹, calculate the value of the rate constant k",
    options: [
      { text: "0.080 dm⁶ mol⁻² s⁻¹", isCorrect: true },
      { text: "0.120 dm⁶ mol⁻² s⁻¹", isCorrect: false },
      { text: "0.012 dm⁶ mol⁻² s⁻¹", isCorrect: false },
      { text: "12.5 dm⁶ mol⁻² s⁻¹", isCorrect: false }
    ],
    explanation: "Rearranging the rate equation: k = Rate / ([NO]²[H₂]). \nSubstituting the given values: k = (1.8 × 10⁻⁴) / ((0.15)² × 0.10) \nk = (1.8 × 10⁻⁴) / (0.0225 × 0.10) = (1.8 × 10⁻⁴) / (2.25 × 10⁻³) = 0.080 dm⁶ mol⁻² s⁻¹"
  },
  {
    id: "EDEXCEL-AL-U4-L1-MEDIUM-20260708-05",
    question: "A multi-step reaction has the following proposed mechanism:\nStep 1 (slow): A + B → AB\nStep 2 (fast): AB + B → AB₂\nWhat is the expected rate equation based on this mechanism?",
    options: [
      { text: "Rate = k[A][B]", isCorrect: true },
      { text: "Rate = k[A][B]²", isCorrect: false },
      { text: "Rate = k[AB][B]", isCorrect: false },
      { text: "Rate = k[A]", isCorrect: false }
    ],
    explanation: "The rate-determining step is the slow step (Step 1). The reactants in Step 1 are A and B, each with a coefficient of 1. Therefore, the rate equation is directly deduced from this step: Rate = k[A][B]"
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD - 1 Question)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-06",
    question: "An Arrhenius plot of ln k against 1/T for a reaction has a gradient of -9620 K. Calculate the activation energy (Ea) of the reaction in kJ mol⁻¹. (R = 8.31 J K⁻¹ mol⁻¹)",
    options: [
      { text: "79.9 kJ mol⁻¹", isCorrect: true },
      { text: "1.16 kJ mol⁻¹", isCorrect: false },
      { text: "79900 kJ mol⁻¹", isCorrect: false },
      { text: "9.62 kJ mol⁻¹", isCorrect: false }
    ],
    explanation: "The gradient of an Arrhenius plot is equal to -Ea/R. \nTherefore, -9620 = -Ea / 8.31 \nEa = 9620 × 8.31 = 79942.2 J mol⁻¹ \nConverting to kJ mol⁻¹: 79942.2 / 1000 = 79.9 kJ mol⁻¹ (to 3 significant figures)"
  },

  // ==========================================
  // LEVEL 3: ANALYSIS (HARD - 1 Question)
  // ==========================================
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-07",
    question: "The alkaline hydrolysis of 2-chloro-2-methylpropane is found to be first order with respect to the halogenoalkane and zero order with respect to hydroxide ions. Which statement is correct regarding this reaction?",
    options: [
      { text: "It proceeds via an SN2 mechanism involving a transition state.", isCorrect: false },
      { text: "The rate-determining step is unimolecular and involves the slow ionization of the halogenoalkane.", isCorrect: true },
      { text: "Doubling the concentration of hydroxide ions doubles the reaction rate.", isCorrect: false },
      { text: "The reaction involves a transition state in square brackets containing both reactants.", isCorrect: false }
    ],
    explanation: "Since the reaction is first order with respect to (CH₃)₃CCl and zero order with respect to OH⁻, it is an SN1 (unimolecular) substitution reaction. The slow, rate-determining step is the unimolecular ionization of the tertiary halogenoalkane to form a carbocation intermediate."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-08",
    question: "The acid-catalyzed iodination of propanone has the rate equation: Rate = k[propanone][H⁺]. If deuterated propanone (CD₃COCD₃) is used instead of CH₃COCH₃, the rate of iodination is found to be slower. What does this kinetic isotope effect provide evidence for?",
    options: [
      { text: "Breaking the C-H (or C-D) bond occurs in the rate-determining step.", isCorrect: true },
      { text: "Iodine is directly involved in the rate-determining step.", isCorrect: false },
      { text: "The protonation of the carbonyl oxygen is the slow step of the reaction.", isCorrect: false },
      { text: "The reaction proceeds via an SN2 mechanism with a transition state.", isCorrect: false }
    ],
    explanation: "Deuterium (D) forms a stronger bond with carbon than hydrogen (H). Since the rate slows down when using deuterated propanone, this shows that C-H (or C-D) bond breaking occurs during the rate-determining step (which is the slow rearrangement of the protonated intermediate to form the enol)."
  },
  {
    id: "EDEXCEL-AL-U4-L1-HARD-20260708-09",
    question: "A student plots 1/t (representing rate) against the concentration of reactant [A]. The plot yields a straight line passing through the origin. What is the order of the reaction with respect to A, and what would a plot of 1/t against [A]² look like?",
    options: [
      { text: "First order; the plot of 1/t against [A]² would be a curve bending downwards.", isCorrect: true },
      { text: "Second order; the plot of 1/t against [A]² would be a straight line through the origin.", isCorrect: false },
      { text: "Zero order; the plot of 1/t against [A]² would be a horizontal line.", isCorrect: false },
      { text: "First order; the plot of 1/t against [A]² would be a horizontal line.", isCorrect: false }
    ],
    explanation: "A straight line through the origin for 1/t vs [A] indicates a first-order reaction. Since rate is proportional to [A]¹, a plot of rate against [A]² would be curved (bending downwards towards the x-axis) because the rate is not proportional to concentration squared."
  }
];
