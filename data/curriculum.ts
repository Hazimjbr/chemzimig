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
  id: "igcse",
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

export const aLevelCurriculum: CurriculumLevel = {
  id: "a-level",
  code: "9701",
  title: "AS & A Level Chemistry",
  description: "Cambridge International AS & A Level Chemistry (9701)",
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
        "Electrochemistry",
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
        "An introduction to the chemistry of transition elements",
        "Nitrogen and sulfur"
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

export const allCurricula: CurriculumLevel[] = [igcseCurriculum, aLevelCurriculum];
