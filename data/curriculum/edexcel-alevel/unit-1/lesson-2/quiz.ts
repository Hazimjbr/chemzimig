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
        question: "How many protons, neutrons, and electrons are present in the phosphide ion (${}^{31}_{15}\\text{P}^{3-}$)?",
        options: [
            { text: "15 protons, 16 neutrons, 15 electrons" },
            { text: "15 protons, 16 neutrons, 18 electrons", isCorrect: true },
            { text: "15 protons, 31 neutrons, 18 electrons" },
            { text: "16 protons, 15 neutrons, 18 electrons" }
        ],
        explanation: "Phosphorus has an atomic number of 15, so protons = 15. Neutrons = Mass number - Atomic number = 31 - 15 = 16. The 3- charge means it has gained 3 electrons, so electrons = 15 + 3 = 18"
    },
    {
        id: "EDEXCEL-U1-L2-Q3-MEDIUM-20260106",
        question: "Why do isotopes of carbon (${}^{12}\\text{C}$ and ${}^{13}\\text{C}$) behave identically in chemical reactions?",
        options: [
            { text: "They have the same number of neutrons." },
            { text: "They have the same mass number." },
            { text: "They have the same number of valence electrons and electronic configuration.", isCorrect: true },
            { text: "Their nuclei have the same total mass." }
        ],
        explanation: "Chemical reactivity is determined by the number of outer shell electrons and their arrangements. Because carbon isotopes have identical electron configurations ($1s^2 2s^2 2p^2$), they have identical chemical properties"
    },
    {
        id: "EDEXCEL-U1-L2-Q4-MEDIUM-20260106",
        question: "Which of the following ions contains the largest number of neutrons?",
        options: [
            { text: "${}^{37}\\text{Cl}^{-}$" },
            { text: "${}^{39}\\text{K}^{+}$" },
            { text: "${}^{40}\\text{Ca}^{2+}$" },
            { text: "${}^{45}\\text{Sc}^{3+}$", isCorrect: true }
        ],
        explanation: "Neutrons = Mass Number (A) - Proton Number (Z). Let's calculate:\n- ${}^{37}\\text{Cl}^-$ (Z=17): 37 - 17 = 20\n- ${}^{39}\\text{K}^+$ (Z=19): 39 - 19 = 20\n- ${}^{40}\\text{Ca}^{2+}$ (Z=20): 40 - 20 = 20\n- ${}^{45}\\text{Sc}^{3+}$ (Z=21): 45 - 21 = 24 neutrons. Scandium contains the most"
    },
    {
        id: "EDEXCEL-U1-L2-Q5-MEDIUM-20260106",
        question: "A species has 26 protons, 30 neutrons, and 24 electrons. What is the correct symbol for this species?",
        options: [
            { text: "${}^{56}\\text{Fe}^{2+}$", isCorrect: true },
            { text: "${}^{56}\\text{Fe}^{2-}$" },
            { text: "${}^{56}\\text{Ni}^{2+}$" },
            { text: "${}^{56}\\text{Cr}^{2-}$" }
        ],
        explanation: "26 protons corresponds to Iron (Fe). Mass number = Protons + Neutrons = 26 + 30 = 56. Since there are 24 electrons (which is 2 fewer than protons), the species has a 2+ charge (${}^{56}\\text{Fe}^{2+}$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q6-EASY-20260106",
        question: "What is the function of the magnetic field in the mass spectrometer described in the lesson?",
        options: [
            { text: "To accelerate the positive ions to high speeds." },
            { text: "To vaporise the sample before ionisation." },
            { text: "To deflect the accelerated positive ions based on their mass-to-charge ratio.", isCorrect: true },
            { text: "To detect the abundance of the isotopes." }
        ],
        explanation: "In this mass spectrometer, the magnetic field is used in the deflection stage to bend the path of the accelerated positive ions. The degree of deflection is determined by the mass-to-charge ($m/z$) ratio of each ion."
    },
    {
        id: "EDEXCEL-U1-L2-Q7-MEDIUM-20260106",
        question: "A sample of gallium consists of ${}^{69}\\text{Ga}$ and ${}^{71}\\text{Ga}$. If the relative atomic mass of this sample is 69.80, what is the percentage abundance of the ${}^{69}\\text{Ga}$ isotope?",
        options: [
            { text: "30.0%" },
            { text: "40.0%" },
            { text: "60.0%", isCorrect: true },
            { text: "70.0%" }
        ],
        explanation: "Let the abundance of ${}^{69}\\text{Ga}$ be $x\\%$. Then ${}^{71}\\text{Ga}$ is $(100 - x)\\%$.\n69.80 = [69x + 71(100 - x)] / 100\n6980 = 69x + 7100 - 71x\n-2x = -120\nx = 60. Therefore, the abundance of ${}^{69}\\text{Ga}$ is 60.0%"
    },
    {
        id: "EDEXCEL-U1-L2-Q8-MEDIUM-20260106",
        question: "Which of the following factors determines the degree of deflection of an ion in the magnetic field of the mass spectrometer?",
        options: [
            { text: "Only the charge of the ion." },
            { text: "Both the mass and the charge of the ion (mass-to-charge ratio).", isCorrect: true },
            { text: "Only the mass of the ion." },
            { text: "The chemical reactivity of the element." }
        ],
        explanation: "The amount of deflection depends on the mass-to-charge ratio ($m/z$). Ions with a smaller $m/z$ (lighter ions or those with a higher charge) are deflected more, while ions with a larger $m/z$ (heavier ions or those with a lower charge) are deflected less."
    },
    {
        id: "EDEXCEL-U1-L2-Q9-HARD-20260106",
        question: "How are positive ions formed during the ionisation stage in the mass spectrometer?",
        options: [
            { text: "The vaporised sample is bombarded with high-energy electrons from an electron gun to knock off one or more electrons.", isCorrect: true },
            { text: "The sample gains protons from a volatile polar solvent." },
            { text: "The sample reacts with a gaseous catalyst to produce positive ions." },
            { text: "The sample loses protons due to high-voltage electric discharge." }
        ],
        explanation: "In the ionisation stage of the mass spectrometer, vaporised gaseous particles are bombarded with high-energy electrons. This collision knocks off one or more electrons from the atoms or molecules, forming positive ions (typically $\\text{M}^+$)."
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
        question: "Which of the following is the correct electronic configuration of a neutral copper ($\\text{Cu}$) atom ($Z = 29$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^{10}$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^{11}$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10}$" }
        ],
        explanation: "Copper is an exception to the Aufbau principle. An electron is promoted from the $4s$ subshell to the $3d$ subshell to achieve a full, more stable $3d^{10}$ d-subshell arrangement ($[\\text{Ar}] 4s^1 3d^{10}$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q12-MEDIUM-20260106",
        question: "What is the correct electronic configuration of the iron(II) ion ($\\text{Fe}^{2+}$, $Z = 26$)?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^4$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^6$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$" }
        ],
        explanation: "When transition metals form positive ions, they lose their $4s$ electrons before losing $3d$ electrons. Neutral iron is $[\\text{Ar}] 4s^2 3d^6$, so removing two electrons gives the $\\text{Fe}^{2+}$ configuration $[\\text{Ar}] 3d^6$"
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
            { text: "Carbon ($\\text{C}$, $Z=6$)" },
            { text: "Nitrogen ($\\text{N}$, $Z=7$)" },
            { text: "Chromium ($\\text{Cr}$, $Z=24$)", isCorrect: true },
            { text: "Iron ($\\text{Fe}$, $Z=26$)" }
        ],
        explanation: "Let's check the configurations:\n- C: $[\\text{He}] 2s^2 2p^2$ (2 unpaired electrons)\n- N: $[\\text{He}] 2s^2 2p^3$ (3 unpaired electrons)\n- Fe: $[\\text{Ar}] 4s^2 3d^6$ (4 unpaired electrons)\n- Cr: $[\\text{Ar}] 4s^1 3d^5$ (6 unpaired electrons: 1 in 4s, 5 in 3d). Chromium has the most"
    },
    {
        id: "EDEXCEL-U1-L2-Q15-EASY-20260106",
        question: "Which of the following equations represents the first ionisation energy of oxygen?",
        options: [
            { text: "$\\text{O}_{(g)} + e^- \\rightarrow \\text{O}^-_{(g)}$" },
            { text: "$\\text{O}_{(g)} \\rightarrow \\text{O}^+_{(g)} + e^-$", isCorrect: true },
            { text: "$\\text{O}_{2(g)} \\rightarrow 2\\text{O}^+_{(g)} + 2e^-$" },
            { text: "$\\text{O}_{(s)} \\rightarrow \\text{O}^+_{(g)} + e^-$" }
        ],
        explanation: "The first ionisation energy is defined as the energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions. Oxygen must be in gaseous state, $\\text{O}_{(g)} \\rightarrow \\text{O}^+_{(g)} + e^-$"
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
        explanation: "Magnesium's outer electron is in the $3s$ subshell. Aluminum's outer electron is in a $3p$ subshell, which is higher in energy and further from the nucleus than the $3s$ subshell. It also experiences shielding from the $3s^2$ electrons, making it easier to remove"
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
        explanation: "Sulfur has four $3p$ electrons, meaning one of the $3p$ orbitals contains a paired set of electrons ($3p_x^2 3p_y^1 3p_z^1$). The electrostatic repulsion between these two paired electrons makes it easier to remove the outer electron in sulfur compared to the unpaired $3p$ electrons in phosphorus"
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
        explanation: "Look at the jumps: $578 \\rightarrow 1817 \\rightarrow 2745 \\rightarrow 11577$. The massive jump occurs between the 3rd and 4th ionisation energies, indicating that the 4th electron is removed from an inner core shell. This shows there are 3 valence electrons, locating the element in Group 13 (Al)"
    },
    {
        id: "EDEXCEL-U1-L2-Q20-HARD-20260106",
        question: "Which of the following elements has the lowest first ionisation energy?",
        options: [
            { text: "Helium ($\\text{He}$)" },
            { text: "Lithium ($\\text{Li}$)" },
            { text: "Sodium ($\\text{Na}$)" },
            { text: "Potassium ($\\text{K}$)", isCorrect: true }
        ],
        explanation: "First ionisation energy decreases down Group 1. Potassium ($\\text{K}$) is further down the group than lithium ($\\text{Li}$) and sodium ($\\text{Na}$). It has a larger atomic radius and more shielding shells, making its outer electron the most weakly attracted and easiest to remove"
    },
    {
        id: "EDEXCEL-U1-L2-Q21-HARD-20260106",
        question: "Which of the following lists the elements phosphorus, sulfur, chlorine, and argon in order of decreasing melting temperature?",
        options: [
            { text: "$\\text{S} > \\text{P} > \\text{Cl} > \\text{Ar}$", isCorrect: true },
            { text: "$\\text{P} > \\text{S} > \\text{Cl} > \\text{Ar}$" },
            { text: "$\\text{Ar} > \\text{Cl} > \\text{P} > \\text{S}$" },
            { text: "$\\text{S} > \\text{Cl} > \\text{P} > \\text{Ar}$" }
        ],
        explanation: "Sulfur exists as $\\text{S}_8$ molecules, phosphorus as $\\text{P}_4$ molecules, chlorine as $\\text{Cl}_2$ molecules, and argon as monoatomic $\\text{Ar}$ atoms. The strength of London dispersion forces increases with the number of electrons per molecule. Since $\\text{S}_8$ has 128 electrons, $\\text{P}_4$ has 60, $\\text{Cl}_2$ has 34, and $\\text{Ar}$ has 18, the melting temperatures follow the order $\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2 > \\text{Ar}$"
    },
    {
        id: "EDEXCEL-U1-L2-Q22-HARD-20260106",
        question: "Both carbon (diamond) and silicon form giant covalent lattices in Group 14. However, the melting temperature of carbon ($3550^\\circ\\text{C}$) is significantly higher than that of silicon ($1414^\\circ\\text{C}$). What is the primary reason for this difference?",
        options: [
            { text: "Carbon forms stronger London forces between its molecules than silicon." },
            { text: "Silicon atoms have more shielding, which completely prevents covalent bonding." },
            { text: "Carbon forms a giant lattice while silicon forms simple molecular structures." },
            { text: "The $\\text{C-C}$ covalent bonds are shorter and stronger than $\\text{Si-Si}$ bonds due to the smaller atomic radius of carbon", isCorrect: true }
        ],
        explanation: "Both elements form giant covalent lattices. Carbon has a smaller atomic radius than silicon. Because the carbon atoms are smaller, the shared electron pairs in the $\\text{C-C}$ bond are closer to the nuclei, resulting in shorter and stronger covalent bonds. Breaking these stronger bonds requires more energy, leading to a much higher melting point"
    },
    {
        id: "EDEXCEL-U1-L2-Q23-HARD-20260106",
        question: "A stable ion $\\text{W}^{3+}$ contains 18 electrons. In which block of the periodic table is element $\\text{W}$ found?",
        options: [
            { text: "s-block" },
            { text: "p-block" },
            { text: "d-block", isCorrect: true },
            { text: "f-block" }
        ],
        explanation: "A 3+ ion with 18 electrons comes from a neutral atom with $18 + 3 = 21$ electrons. Element 21 is Scandium (Sc), which has the configuration $[\\text{Ar}] 4s^2 3d^1$. The highest energy subshell being filled is the $3d$ subshell, so Scandium is in the d-block"
    },
    {
        id: "EDEXCEL-U1-L2-Q24-HARD-20260106",
        question: "The species $\\text{N}^{3-}$, $\\text{O}^{2-}$, $\\text{F}^-$, and $\\text{Na}^+$ all have the same electronic configuration. Which of the following lists these species in order of increasing ionic radius (smallest first)?",
        options: [
            { text: "$\\text{F}^- < \\text{Na}^+ < \\text{O}^{2-} < \\text{N}^{3-}$" },
            { text: "$\\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^- < \\text{Na}^+$" },
            { text: "$\\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$", isCorrect: true },
            { text: "$\\text{Na}^+ < \\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^-$" }
        ],
        explanation: "These species are isoelectronic (all have 10 electrons: $1s^2 2s^2 2p^6$). As the proton number (nuclear charge) increases, the electrostatic attraction between the nucleus and the electrons becomes stronger, pulling them closer and decreasing the ionic radius. The proton numbers are: $\\text{Na}^+ = 11$, $\\text{F}^- = 9$, $\\text{O}^{2-} = 8$, $\\text{N}^{3-} = 7$. Thus, the smallest is $\\text{Na}^+$ and the largest is $\\text{N}^{3-}$, giving the order: $\\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$"
    },
    {
        id: "EDEXCEL-U1-L2-Q25-HARD-20260106",
        question: "What is the correct electronic configuration of the $\\text{Cu}^{2+}$ ion in its ground state?",
        options: [
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^8$" },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$", isCorrect: true },
            { text: "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^9$" }
        ],
        explanation: "A neutral copper atom has the anomalous configuration $[\\text{Ar}] 4s^1 3d^{10}$. When transition metals form ions, they lose their $4s$ electrons first. To form the $\\text{Cu}^{2+}$ ion, we remove the 1 electron from the $4s$ orbital and then 1 electron from the $3d$ subshell, resulting in $[\\text{Ar}] 3d^9$, or $1s^2 2s^2 2p^6 3s^2 3p^6 3d^9$"
    },
    {
        id: "EDEXCEL-U1-L2-Q26-HARD-20260106",
        question: "A graph of successive ionisation energies (log scale) against ionisation number for an element in Period 3 shows a major jump between the 2nd and 3rd ionisation energies, and another major jump between the 10th and 11th ionisation energies. What is the element?",
        options: [
            { text: "Magnesium", isCorrect: true },
            { text: "Sodium" },
            { text: "Aluminium" },
            { text: "Silicon" }
        ],
        explanation: "The first major jump is between $I_2$ and $I_3$, indicating 2 valence electrons (Group 2). The second major jump is between $I_{10}$ and $I_{11}$, indicating that the 11th electron is removed from the innermost shell ($1s^2$). A Period 3 element in Group 2 is Magnesium ($Z = 12$, configuration $[\\text{Ne}] 3s^2$)"
    },
    {
        id: "EDEXCEL-U1-L2-Q27-HARD-20260106",
        question: "Which of the following metal chlorides has the greatest covalent character due to cation polarization?",
        options: [
            { text: "$\\text{NaCl}$" },
            { text: "$\\text{MgCl}_2$" },
            { text: "$\\text{AlCl}_3$", isCorrect: true },
            { text: "$\\text{CaCl}_2$" }
        ],
        explanation: "As the charge on the metal cation increases ($\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+}$) and its ionic radius decreases, its polarizing power increases. The highly polarizing $\\text{Al}^{3+}$ ion distorts the electron cloud of the chloride ion towards itself, giving $\\text{AlCl}_3$ significant covalent character"
    },
    {
        id: "EDEXCEL-U1-L2-Q28-HARD-20260106",
        question: "Why does the melting point of Group 2 metals generally decrease down the group?",
        options: [
            { text: "The number of delocalised electrons per atom decreases down the group." },
            { text: "The metallic bonding weakens because the metal ions increase in size, increasing the distance between the nuclei and delocalised electrons", isCorrect: true },
            { text: "The elements change structure from giant metallic to simple molecular." },
            { text: "The ionisation energy increases, making it harder to delocalise electrons." }
        ],
        explanation: "Down Group 2, the number of delocalised electrons per metal atom remains the same (2 electrons). However, the ionic radius of the metal cation increases. The electrostatic attraction between the positive nuclei and the delocalised valence electrons weakens because they are further apart, decreasing the melting point"
    },
    {
        id: "EDEXCEL-U1-L2-Q29-HARD-20260106",
        question: "A Period 4 d-block element has successive ionisation energies where a large jump is observed between $I_3$ and $I_4$. What is the element?",
        options: [
            { text: "Potassium" },
            { text: "Calcium" },
            { text: "Scandium", isCorrect: true },
            { text: "Titanium" }
        ],
        explanation: "Scandium has 3 valence electrons ($4s^2 3d^1$). The first three electrons are relatively easy to remove. The 4th electron ($I_4$) must be removed from the inner core $[\\text{Ar}]$ configuration, causing a very large jump in ionisation energy"
    },
    {
        id: "EDEXCEL-U1-L2-Q30-HARD-20260106",
        question: "Which of the following lists the elements in order of increasing first ionisation energy?",
        options: [
            { text: "$\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$", isCorrect: true },
            { text: "$\\text{Mg} < \\text{Al} < \\text{P} < \\text{S}$" },
            { text: "$\\text{Al} < \\text{Mg} < \\text{P} < \\text{S}$" },
            { text: "$\\text{Mg} < \\text{Al} < \\text{S} < \\text{P}$" }
        ],
        explanation: "Generally, first ionisation energy increases across a period due to increasing nuclear charge and decreasing atomic size. However, there are two exceptions: 1. $\\text{Al}$ ($3s^2 3p^1$) is lower than $\\text{Mg}$ ($3s^2$) because the outer electron is in a higher energy $3p$ subshell. 2. $\\text{S}$ ($3p^4$) is lower than $\\text{P}$ ($3p^3$) due to spin-pair repulsion in sulfur's orbital. This gives the order: $\\text{Al} < \\text{Mg} < \\text{S} < \\text{P}$"
    }
];
