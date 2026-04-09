export interface Topic {
  id: string;
  number: number;
  title: string;
  subtopics?: string[];
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
