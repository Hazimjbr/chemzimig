export interface Topic {
  id: string;
  number: number;
  title: string;
  subtopics?: string[];
  theory?: string; // Markdown/HTML content for theoretical explanation
}

export interface CurriculumLevel {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: Topic[];
}

export const igcseCurriculum: CurriculumLevel = {
  id: "cie-igcse",
  code: "0620",
  title: "IGCSE Chemistry",
  description: "Cambridge IGCSE Chemistry (0620) — O-Level",
  topics: [
    {
      id: "states-of-matter",
      theory: "## States of Matter\n\nMatter exists in three main states: solid, liquid, and gas. The kinetic particle theory explains the properties of these states.\n\n### Solids\n- Particles are closely packed in a regular arrangement.\n- Particles vibrate about fixed positions.\n- Fixed volume and shape.\n\n### Liquids\n- Particles are closely packed but irregularly arranged.\n- Particles can slide past one another.\n- Fixed volume but take the shape of the container.\n\n### Gases\n- Particles are far apart and arranged randomly.\n- Particles move rapidly and freely in all directions.\n- No fixed volume or shape; they expand to fill the container.\n\n### Changes of State\n- **Melting:** Solid to liquid (requires heat).\n- **Boiling/Evaporation:** Liquid to gas (requires heat).\n- **Condensation:** Gas to liquid (releases heat).\n- **Freezing:** Liquid to solid (releases heat).\n- **Sublimation:** Solid directly to gas.",
      number: 1,
      title: "States of Matter",
      subtopics: [
        "Solids, liquids and gases",
        "Diffusion",
        "Changes of state",
        "Kinetic particle theory",
      ],
    },
    {
      id: "atoms-elements",
      theory: "## Atoms, Elements and Compounds\n\nAll substances are made of atoms.\n\n### Atomic Structure\n- **Protons:** Positively charged, located in the nucleus. Mass = 1.\n- **Neutrons:** Neutral, located in the nucleus. Mass = 1.\n- **Electrons:** Negatively charged, orbit the nucleus in shells. Mass = 1/1840.\n\n### Definitions\n- **Element:** A substance made of only one type of atom.\n- **Compound:** A substance containing two or more different elements chemically bonded together.\n- **Isotopes:** Atoms of the same element with the same proton number but different nucleon (mass) numbers.\n\n### Bonding\n- **Ionic Bonding:** Strong electrostatic attraction between oppositely charged ions (metal and non-metal).\n- **Covalent Bonding:** Sharing of electron pairs between non-metal atoms.",
      number: 2,
      title: "Atoms, Elements and Compounds",
      subtopics: [
        "Atomic structure",
        "Elements and compounds",
        "Ions and ionic bonds",
        "Covalent bonds",
        "Metallic bonding",
      ],
    },
    {
      id: "stoichiometry",
      number: 3,
      title: "Stoichiometry",
      subtopics: [
        "Formulae",
        "Relative atomic mass",
        "The mole concept",
        "Chemical equations",
        "Reacting masses",
      ],
    },
    {
      id: "electrochemistry",
      number: 4,
      title: "Electrochemistry",
      subtopics: [
        "Electrolysis",
        "Electrolytic cells",
        "Electroplating",
        "Hydrogen-oxygen fuel cells",
      ],
    },
    {
      id: "chemical-energetics",
      number: 5,
      title: "Chemical Energetics",
      subtopics: [
        "Exothermic and endothermic reactions",
        "Energy diagrams",
        "Bond energies",
        "Fuel and hydrogen",
      ],
    },
    {
      id: "chemical-reactions",
      number: 6,
      title: "Chemical Reactions",
      subtopics: [
        "Rate of reaction",
        "Collision theory",
        "Catalysts",
        "Reversible reactions and equilibrium",
        "Redox reactions",
      ],
    },
    {
      id: "acids-bases-salts",
      number: 7,
      title: "Acids, Bases and Salts",
      subtopics: [
        "Acids and bases",
        "pH scale and indicators",
        "Neutralisation",
        "Oxides",
        "Preparation of salts",
      ],
    },
    {
      id: "periodic-table",
      number: 8,
      title: "The Periodic Table",
      subtopics: [
        "Arrangement of elements",
        "Group I — Alkali metals",
        "Group VII — Halogens",
        "Group VIII/0 — Noble gases",
        "Transition elements",
      ],
    },
    {
      id: "metals",
      number: 9,
      title: "Metals",
      subtopics: [
        "Properties of metals",
        "Reactivity series",
        "Extraction of metals",
        "Uses of metals",
        "Alloys",
      ],
    },
    {
      id: "chemistry-environment",
      number: 10,
      title: "Chemistry of the Environment",
      subtopics: [
        "Water treatment",
        "Fertilisers",
        "Air quality and climate",
        "Carbon cycle",
      ],
    },
    {
      id: "organic-chemistry",
      number: 11,
      title: "Organic Chemistry",
      subtopics: [
        "Alkanes",
        "Alkenes",
        "Alcohols",
        "Carboxylic acids",
        "Polymers",
        "Esters",
      ],
    },
    {
      id: "experimental-techniques",
      number: 12,
      title: "Experimental Techniques and Chemical Analysis",
      subtopics: [
        "Measurement",
        "Purification and separation",
        "Identification of ions and gases",
        "Instrumental analysis",
      ],
    },
  ],
};

export const cieAsCurriculum: CurriculumLevel = {
  id: "cie-as",
  code: "9701",
  title: "CIE AS-Level Chemistry",
  description: "Cambridge International AS Level Chemistry covering physical, inorganic, and organic chemistry.",
  topics: [
    {
      id: "physical-chemistry",
      number: 1,
      title: "Physical Chemistry",
      subtopics: [
        "Atomic structure",
        "Atoms, molecules and stoichiometry",
        "Chemical bonding",
        "States of matter",
        "Chemical energetics",
        "Equilibria",
        "Reaction kinetics"
      ],
    },
    {
      id: "inorganic-chemistry",
      number: 2,
      title: "Inorganic Chemistry",
      subtopics: [
        "The Periodic Table: chemical periodicity",
        "Group 2",
        "Group 17",
      ],
    },
    {
      id: "organic-chemistry-as",
      number: 3,
      title: "Organic Chemistry",
      subtopics: [
        "An introduction to organic chemistry",
        "Hydrocarbons",
        "Halogen derivatives",
        "Hydroxy compounds",
      ],
    },
  ],
};

export const aLevelCurriculum: CurriculumLevel = {
  id: "cie-alevel",
  code: "9701",
  title: "CIE A-Level Chemistry",
  description: "Cambridge International A Level Chemistry covering advanced transition elements and analytical techniques.",
  topics: [
    {
      id: "physical-chemistry-a2",
      number: 1,
      title: "Advanced Physical Chemistry",
      subtopics: [
        "Electrochemistry",
        "Equilibria II",
        "Reaction kinetics II"
      ],
    },
    {
      id: "inorganic-chemistry-a2",
      number: 2,
      title: "Transition Elements",
      subtopics: [
        "An introduction to the chemistry of transition elements",
        "Nitrogen and sulfur"
      ],
    },
    {
      id: "organic-chemistry-a2",
      number: 3,
      title: "Advanced Organic Chemistry",
      subtopics: [
        "Carbonyl compounds",
        "Carboxylic acids and derivatives",
        "Nitrogen compounds",
        "Polymerisation",
        "Organic synthesis"
      ],
    },
    {
      id: "analysis",
      number: 4,
      title: "Analysis",
      subtopics: [
        "Analytical techniques"
      ],
    }
  ],
};

export const edexcelIgcseCurriculum: CurriculumLevel = {
  id: "edexcel-igcse",
  code: "4CH1",
  title: "Edexcel IGCSE Chemistry",
  description: "Pearson Edexcel International GCSE Chemistry covering core concepts.",
  topics: [
    {
      id: "principles-of-chemistry",
      number: 1,
      title: "Principles of Chemistry",
      subtopics: [
        "States of Matter",
        "Elements, Compounds & Mixtures",
        "Atomic Structure",
        "Chemical Formulae, Equations & Calculations"
      ]
    }
  ]
};

export const edexcelAsCurriculum: CurriculumLevel = {
  id: "edexcel-as",
  code: "XCH11",
  title: "Edexcel AS Chemistry",
  description: "Pearson Edexcel International AS Level Chemistry covering Units 1, 2, and 3.",
  topics: [
    {
      id: "edexcel-unit-1",
      number: 1,
      title: "Unit 1: Structure, Bonding & Intro Organic",
      subtopics: [
        "Topic 1: Formulae, Equations & Amount of Substance",
        "Topic 2: Atomic Structure & The Periodic Table",
        "Topic 3: Bonding & Structure",
        "Topic 4: Introductory Organic Chemistry & Alkanes",
        "Topic 5: Alkenes"
      ]
    },
    {
      id: "edexcel-unit-2",
      number: 2,
      title: "Unit 2: Energetics, Group Chem & Halogenoalkanes",
      subtopics: [
        "Topic 6: Energetics",
        "Topic 7: Intermolecular Forces",
        "Topic 8: Redox Chemistry & Groups 1, 2 and 7",
        "Topic 9: Kinetics & Equilibria I",
        "Topic 10: Organic Chemistry: Halogenoalkanes, Alcohols & Modern Analytical Techniques I"
      ]
    },
    {
      id: "edexcel-unit-3",
      number: 3,
      title: "Unit 3: Practical Skills in Chemistry I",
      subtopics: [
        "Topic 11: AS Practical Skills and Techniques"
      ]
    }
  ]
};

export const edexcelA2Curriculum: CurriculumLevel = {
  id: "edexcel-a2",
  code: "YCH11",
  title: "Edexcel A2 Chemistry",
  description: "Pearson Edexcel International A2 Level Chemistry covering Units 4, 5, and 6.",
  topics: [
    {
      id: "edexcel-unit-4",
      number: 4,
      title: "Unit 4: Rates, Equilibria & Further Organic",
      subtopics: [
        "Topic 12: Kinetics & Equilibria II",
        "Topic 13: Entropy & Energetics II",
        "Topic 14: Chemical Equilibria II",
        "Topic 15: Acid-Base Equilibria",
        "Topic 16: Organic Chemistry: Carbonyls, Carboxylic Acids & Chirality",
        "Topic 17: Organic Chemistry: Arenes, Amines, Amides & Amino Acids"
      ]
    },
    {
      id: "edexcel-unit-5",
      number: 5,
      title: "Unit 5: Transition Metals & Organic Nitrogen Chemistry",
      subtopics: [
        "Topic 18: Redox Equilibria",
        "Topic 19: Transition Metals & Their Chemistry",
        "Topic 20: Organic Chemistry: Arenes, Nitrogen Compounds & Synthesis",
        "Topic 21: Modern Analytical Techniques II"
      ]
    },
    {
      id: "edexcel-unit-6",
      number: 6,
      title: "Unit 6: Practical Skills in Chemistry II",
      subtopics: [
        "Topic 22: A2 Practical Skills and Techniques"
      ]
    }
  ]
};

export const allCurricula: CurriculumLevel[] = [
  igcseCurriculum,
  cieAsCurriculum,
  aLevelCurriculum,
  edexcelIgcseCurriculum,
  edexcelAsCurriculum,
  edexcelA2Curriculum
];
