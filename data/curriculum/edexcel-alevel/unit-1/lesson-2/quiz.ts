export const lessonQuiz = [
    {
        id: "EDEXCEL-U1-L2-Q1-EASY-20260106",
        question: "Which of the following describes the relationship between isotopes of the same element?",
        options: [
            { text: "They have the same mass number but different atomic numbers." },
            { text: "They have the same number of neutrons but different numbers of protons." },
            { text: "They have the same number of protons but different numbers of neutrons.", isCorrect: true },
            { text: "They have different chemical properties due to the difference in mass." }
        ],
        explanation: "Isotopes are atoms of the same element containing the same number of protons (atomic number) but a different number of neutrons (mass number), leading to different physical masses."
    },
    {
        id: "EDEXCEL-U1-L2-Q2-EASY-20260106",
        question: "How many protons, neutrons, and electrons are present in the phosphide ion ($^{31}_{15}\\text{P}^{3-}$)?",
        options: [
            { text: "15 protons, 16 neutrons, 15 electrons" },
            { text: "15 protons, 16 neutrons, 18 electrons", isCorrect: true },
            { text: "15 protons, 31 neutrons, 18 electrons" },
            { text: "16 protons, 15 neutrons, 18 electrons" }
        ],
        explanation: "Phosphorous has an atomic number of 15, so protons = 15. Neutrons = Mass number - Atomic number = 31 - 15 = 16. The 3- charge means it has gained 3 electrons, so electrons = 15 + 3 = 18."
    },
    {
        id: "EDEXCEL-U1-L2-Q3-MEDIUM-20260106",
        question: "Why do isotopes of carbon ($^{12}\\text{C}$ and $^{13}\\text{C}$) behave identically in chemical reactions?",
        options: [
            { text: "They have the same number of neutrons." },
            { text: "They have the same mass number." },
            { text: "They have the same number of valence electrons and electronic configuration.", isCorrect: true },
            { text: "Their nuclei have the same total mass." }
        ],
        explanation: "Chemical reactivity is determined by the number of outer shell electrons and their arrangements. Because carbon isotopes have identical electron configurations ($1s^2 2s^2 2p^2$), they have identical chemical properties."
    },
    {
        id: "EDEXCEL-U1-L2-Q4-MEDIUM-20260106",
        question: "Which of the following ions contains the largest number of neutrons?",
        options: [
            { text: "$^{37}\\text{Cl}^{-}$" },
            { text: "$^{39}\\text{K}^{+}$" },
            { text: "$^{40}\\text{Ca}^{2+}$" },
            { text: "$^{45}\\text{Sc}^{3+}$", isCorrect: true }
        ],
        explanation: "Neutrons = Mass Number (A) - Proton Number (Z). Let's calculate: \n- Cl (Z=17): 37 - 17 = 20 \n- K (Z=19): 39 - 19 = 20 \n- Ca (Z=20): 40 - 20 = 20 \n- Sc (Z=21): 45 - 21 = 24 neutrons. Scandium contains the most."
    },
    {
        id: "EDEXCEL-U1-L2-Q5-MEDIUM-20260106",
        question: "A species has 26 protons, 30 neutrons, and 24 electrons. What is the correct symbol for this species?",
        options: [
            { text: "$^{56}\\text{Fe}^{2+}$", isCorrect: true },
            { text: "$^{56}\\text{Fe}^{2-}$" },
            { text: "$^{56}\\text{Ni}^{2+}$" },
            { text: "$^{56}\\text{Cr}^{2-}$" }
        ],
        explanation: "26 protons corresponds to Iron (Fe). Mass number = Protons + Neutrons = 26 + 30 = 56. Since there are 24 electrons (which is 2 fewer than protons), the species has a 2+ charge ($^{56}\\text{Fe}^{2+}$)."
    },
    {
        id: "EDEXCEL-U1-L2-Q6-EASY-20260106",
        question: "What is the primary function of the flight tube in a Time-of-Flight (TOF) mass spectrometer?",
        options: [
            { text: "To ionise neutral atoms using high-energy electrons." },
            { text: "To accelerate ions to different kinetic energies." },
            { text: "To separate ions of different masses based on their velocity.", isCorrect: true },
            { text: "To detect the chemical structure of molecular ions." }
        ],
        explanation: "In a TOF mass spectrometer, all ions are accelerated to have the same kinetic energy. The flight tube allows them to drift and separate because lighter ions travel faster than heavier ones."
    },
    {
        id: "EDEXCEL-U1-L2-Q7-MEDIUM-20260106",
        question: "A sample of gallium consists of $^{69}\\text{Ga}$ and $^{71}\\text{Ga}$. If the relative atomic mass of this sample is 69.80, what is the percentage abundance of the $^{69}\\text{Ga}$ isotope?",
        options: [
            { text: "30.0%" },
            { text: "40.0%" },
            { text: "60.0%", isCorrect: true },
            { text: "70.0%" }
        ],
        explanation: "Let the abundance of $^{69}\\text{Ga}$ be $x\\%$. Then $^{71}\\text{Ga}$ is $(100 - x)\\%$. \n69.80 = [69x + 71(100 - x)] / 100 \n6980 = 69x + 7100 - 2x \n2x = 120 \nx = 60. Therefore, the abundance of $^{69}\\text{Ga}$ is 60.0%."
    },
    {
        id: "EDEXCEL-U1-L2-Q8-MEDIUM-20260106",
        question: "In a TOF mass spectrometer, two ions $^{24}\\text{Mg}^{+}$ and $^{25}\\text{Mg}^{+}$ enter the drift tube. Which statement is correct?",
        options: [
            { text: "$^{24}\\text{Mg}^{+}$ has more kinetic energy than $^{25}\\text{Mg}^{+}$." },
            { text: "$^{25}\\text{Mg}^{+}$ reaches the detector plate first." },
            { text: "Both ions travel at the exact same velocity." },
            { text: "$^{24}\\text{Mg}^{+}$ travels faster and reaches the detector first.", isCorrect: true }
        ],
        explanation: "Both ions are accelerated to have the same kinetic energy. Since $KE = \\frac{1}{2}mv^2$ and $^{24}\\text{Mg}^{+}$ has a smaller mass ($m$), it must have a higher velocity ($v$) and thus reaches the detector first."
    },
    {
        id: "EDEXCEL-U1-L2-Q9-HARD-20260106",
        question: "During electrospray ionisation in mass spectrometry, how is a positive molecular ion formed?",
        options: [
            { text: "The molecule is bombarded with high-speed electrons to knock out an electron." },
            { text: "The molecule gains a proton ($H^{+}$) from a charged needle solvent interface.", isCorrect: true },
            { text: "The molecule is bonded to a metal sodium cation." },
            { text: "The molecule loses a neutron due to high thermal radiation." }
        ],
        explanation: "Electrospray ionisation involves dissolving the sample in a volatile polar solvent and spraying it through a high-voltage capillary needle. The molecules gain a proton ($H^{+}$) from the solvent to form $MH^{+}$ ions."
    },
    {
        id: "EDEXCEL-U1-L2-Q10-EASY-20260106",
        question: "What is the maximum number of electrons that can occupy a single d-orbital?",
        options: [
            { text: "2", isCorrect: true },
            { text: "6" },
            { text: "10" },
            { text: "14" }
        ],
        explanation: "Regardless of the subshell type (s, p, d, or f), any single orbital can hold a maximum of 2 electrons with opposite spins, according to the Pauli Exclusion Principle."
    },
    {
        id: "EDEXCEL-U1-L2-Q11-MEDIUM-20260106",
        question: "Which of the following is the correct electronic configuration of a neutral copper ($Cu$) atom ($Z = 29$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^{11}$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10}$" }
        ],
        explanation: "Copper is an exception to the Aufbau principle. An electron is promoted from the $4s$ subshell to the $3d$ subshell to achieve a full, more stable $3d^{10}$ d-subshell arrangement ($[Ar] 4s^1 3d^{10}$)."
    },
    {
        id: "EDEXCEL-U1-L2-Q12-MEDIUM-20260106",
        question: "What is the correct electronic configuration of the iron(II) ion ($Fe^{2+}$, $Z = 26$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$" }
        ],
        explanation: "When transition metals form positive ions, they lose their $4s$ electrons before losing $3d$ electrons. Neutral iron is $[Ar] 4s^2 3d^6$, so removing two electrons gives the $Fe^{2+}$ configuration $[Ar] 3d^6$."
    },
    {
        id: "EDEXCEL-U1-L2-Q13-MEDIUM-20260106",
        question: "Degenerate orbitals are occupied singly with parallel spins before pairing occurs. This statement is known as:",
        options: [
            { text: "The Aufbau Principle" },
            { text: "Hund's Rule", isCorrect: true },
            { text: "The Pauli Exclusion Principle" },
            { text: "Avogadro's Hypothesis" }
        ],
        explanation: "Hund's Rule states that single electrons occupy degenerate orbitals (such as the three p-orbitals) with parallel spins first, before they begin pairing up. This minimizes electron-electron repulsion."
    },
    {
        id: "EDEXCEL-U1-L2-Q14-HARD-20260106",
        question: "Which of the following elements has the highest number of unpaired electrons in its ground state?",
        options: [
            { text: "Carbon ($C$, $Z=6$)" },
            { text: "Nitrogen ($N$, $Z=7$)" },
            { text: "Chromium ($Cr$, $Z=24$)", isCorrect: true },
            { text: "Iron ($Fe$, $Z=26$)" }
        ],
        explanation: "Let's check the configurations: \n- C: $[He] 2s^2 2p^2$ (2 unpaired electrons) \n- N: $[He] 2s^2 2p^3$ (3 unpaired electrons) \n- Fe: $[Ar] 4s^2 3d^6$ (4 unpaired electrons) \n- Cr: $[Ar] 4s^1 3d^5$ (6 unpaired electrons: 1 in 4s, 5 in 3d). Chromium has the most."
    },
    {
        id: "EDEXCEL-U1-L2-Q15-EASY-20260106",
        question: "Which of the following equations represents the first ionisation energy of oxygen?",
        options: [
            { text: "$\\text{O(g)} + e^{-} \\rightarrow \\text{O}^{-}\\text{(g)}$" },
            { text: "$\\text{O(g)} \\rightarrow \\text{O}^{+}\\text{(g)} + e^{-}$", isCorrect: true },
            { text: "$\\text{O}_{2}\\text{(g)} \\rightarrow 2\\text{O}^{+}\\text{(g)} + 2e^{-}$" },
            { text: "$\\text{O(s)} \\rightarrow \\text{O}^{+}\\text{(g)} + e^{-}$" }
        ],
        explanation: "The first ionisation energy is defined as the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions. Oxygen must be in gaseous state, $\\text{O(g)} \\rightarrow \\text{O}^{+}\\text{(g)} + e^{-}$."
    },
    {
        id: "EDEXCEL-U1-L2-Q16-MEDIUM-20260106",
        question: "Why does the first ionisation energy generally increase across Period 3 from sodium to argon?",
        options: [
            { text: "Atomic radius increases." },
            { text: "The shielding effect increases significantly." },
            { text: "The nuclear charge increases while shielding remains constant.", isCorrect: true },
            { text: "Electrons are removed from inner shells." }
        ],
        explanation: "Across a period, the nuclear charge increases (more protons) while the shielding effect remains approximately constant (electrons go into the same principal quantum shell). This pulls the outer electrons closer, making them harder to remove."
    },
    {
        id: "EDEXCEL-U1-L2-Q17-MEDIUM-20260106",
        question: "The first ionisation energy of aluminum ($Z = 13$) is lower than that of magnesium ($Z = 12$). Which statement explains this anomaly?",
        options: [
            { text: "Magnesium has a higher nuclear charge than aluminum." },
            { text: "Aluminum's outer electron is in a higher-energy 3p subshell and is more shielded.", isCorrect: true },
            { text: "Aluminum's outer electron experiences spin-pair repulsion in a 3s orbital." },
            { text: "Magnesium has a stable fully-filled 3p subshell." }
        ],
        explanation: "Magnesium's outer electron is in the $3s$ subshell. Aluminum's outer electron is in a $3p$ subshell, which is higher in energy and further from the nucleus than the $3s$ subshell. It also experiences shielding from the $3s^2$ electrons, making it easier to remove."
    },
    {
        id: "EDEXCEL-U1-L2-Q18-MEDIUM-20260106",
        question: "Why is the first ionisation energy of sulfur ($Z = 16$) lower than that of phosphorus ($Z = 15$)?",
        options: [
            { text: "Sulfur has a larger atomic radius than phosphorus." },
            { text: "Phosphorus has a stable fully-filled p-subshell." },
            { text: "Sulfur has spin-pair repulsion in one of its 3p orbitals.", isCorrect: true },
            { text: "Sulfur has more shielding electrons than phosphorus." }
        ],
        explanation: "Sulfur has four $3p$ electrons, meaning one of the $3p$ orbitals contains a paired set of electrons ($3p_x^2 3p_y^1 3p_z^1$). The electrostatic repulsion between these two paired electrons makes it easier to remove the outer electron in sulfur compared to the unpaired $3p$ electrons in phosphorus."
    },
    {
        id: "EDEXCEL-U1-L2-Q19-MEDIUM-20260106",
        question: "The successive ionisation energies (in $\\text{kJ mol}^{-1}$) of an element in Period 3 are: 578, 1817, 2745, 11577, 14842. In which group of the periodic table is this element located?",
        options: [
            { text: "Group 1" },
            { text: "Group 2" },
            { text: "Group 13 (3)", isCorrect: true },
            { text: "Group 14 (4)" }
        ],
        explanation: "Look at the jumps: $578 \\rightarrow 1817 \\rightarrow 2745 \\rightarrow 11577$. The massive jump occurs between the 3rd and 4th ionisation energies, indicating that the 4th electron is removed from an inner core shell. This shows there are 3 valence electrons, locating the element in Group 13 (Al)."
    },
    {
        id: "EDEXCEL-U1-L2-Q20-HARD-20260106",
        question: "Which of the following elements has the lowest first ionisation energy?",
        options: [
            { text: "Helium ($He$)" },
            { text: "Lithium ($Li$)" },
            { text: "Sodium ($Na$)" },
            { text: "Potassium ($K$)", isCorrect: true }
        ],
        explanation: "First ionisation energy decreases down Group 1. Potassium ($K$) is further down the group than lithium ($Li$) and sodium ($Na$). It has a larger atomic radius and more shielding shells, making its outer electron the most weakly attracted and easiest to remove."
    }
];
