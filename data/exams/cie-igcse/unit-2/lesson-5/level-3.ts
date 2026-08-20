import { Question } from '../../../types';

// Giant Covalent Structures and Metallic Bonding - Level 3 (Hard)
export const level3Questions: Question[] = [
  {
    id: "ex_ci_u2_l5_lv3_1-2026",
    question: "Metals are malleable and ductile (can be hammered into sheets and drawn into wires without shattering) and conduct electricity in both solid and liquid states. Which row correctly explains both of these properties based on metallic lattice theory?",
    options: [
      { text: "Malleability: Layers of positive metal cations can slide past one another without breaking the non-directional metallic bond; Electrical conductivity: Delocalised electrons are free to move randomly and drift towards the positive terminal when a voltage is applied" },
      { text: "Malleability: Metal atoms compress and shrink when struck; Electrical conductivity: Positive metal ions flow through the wire" },
      { text: "Malleability: Covalent bonds stretch and reform; Electrical conductivity: Protons carry the electric charge" },
      { text: "Malleability: Metallic bonds are weak intermolecular attractions; Electrical conductivity: Mobile electrons evaporate through the lattice" }
    ],
    correctAnswer: 0,
    explanation: "* In metallic bonding, positive cations are arranged in regular layers. When force is applied, the layers of ions slide over each other while the surrounding delocalised electron cloud continuously maintains the electrostatic bond, preventing fracture (malleability/ductility).\n* Mobile delocalised valence electrons are free to drift through the lattice, carrying thermal energy and electric current efficiently in both solid and molten phases.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Paper 22 Q11",
    createdAt: "2026-05-21T10:00:00Z"
  },
  {
    id: "ex_ci_u2_l5_lv3_2-2026",
    question: "Why does graphite conduct electricity whereas diamond is an electrical insulator, even though both substances are pure allotropic forms of elemental carbon?",
    options: [
      { text: "In graphite, each carbon atom forms only 3 covalent bonds with neighbouring atoms, leaving 1 unbonded valence electron per atom that becomes delocalised and free to move throughout the layers; in diamond, all 4 outer electrons form localized single covalent bonds with no mobile charge carriers" },
      { text: "Graphite has charged carbon ions ($C^{4+}$) while diamond has neutral atoms" },
      { text: "Diamond absorbs electrical current and converts it entirely into heat energy" },
      { text: "Graphite forms temporary ionic bonds when connected to an electrical circuit" }
    ],
    correctAnswer: 0,
    explanation: "* Carbon has 4 valence electrons.\n* In graphite, $sp^2$ hybridization means each carbon bonds to 3 others in planar hexagonal rings. The fourth valence electron is delocalised over the layer, enabling electrical conductivity.\n* In diamond, $sp^3$ hybridization bonds each carbon to 4 others tetrahedrally, fixing all electrons in localised $\\sigma$-bonds with zero electrical conductivity.",
    level: 3,
    topic: "atoms-elements",
    curriculum: "igcse",
    source: "Cambridge IGCSE Chemistry 0620 / 2026 Series Q12",
    createdAt: "2026-05-21T10:00:00Z"
  }
];
