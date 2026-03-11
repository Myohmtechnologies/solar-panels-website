import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const alpesMaritimes: Department = {
  name: "Alpes-Maritimes",
  code: "06",
  cities: {
    nice: {
      name: "Nice",
      code: "06000",
      population: 342669,
      sunshineHours: 2800,
     
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Installation sur mesure adaptée à Nice",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      videoTestimonial: {
        videoUrl: "https://res.cloudinary.com/dz5sry4jz/video/upload/v1737742571/MyOhm-Testimonial_sd8nwb.mp4",
        clientName: "Philippe R.",
        savings: "2300€/an"
      },
      faq: [
        {
          question: "Pourquoi choisir des panneaux solaires à Nice ?",
          answer: "Nice bénéficie d'un ensoleillement exceptionnel, avec un climat idéal pour maximiser la production d'énergie solaire. Installer des panneaux solaires à Nice permet de produire une électricité propre et renouvelable tout en réduisant votre facture énergétique."
        },
        {
          question: "Quel est le prix moyen d'une installation photovoltaïque à Nice ?",
          answer: "Le prix moyen pour l'installation de panneaux solaires à Nice dépend de plusieurs facteurs, comme la puissance installée (en kWc), le type de panneaux photovoltaïques, et les spécificités de votre toiture. En général, les coûts varient entre 8 000 € et 15 000 €, avec des aides locales et nationales comme la prime à l'autoconsommation ou la TVA réduite."
        },
        {
          question: "Quelles sont les aides disponibles pour un projet solaire dans la région niçoise ?",
          answer: "Les habitants de la région de Nice peuvent bénéficier de plusieurs aides pour leur installation photovoltaïque, notamment : MaPrimeRénov' pour la rénovation énergétique, la prime à l'autoconsommation, et les subventions locales proposées par la Métropole Nice Côte d'Azur. Ces dispositifs permettent de réduire le coût initial et d'améliorer la rentabilité de votre projet."
        },
        {
          question: "Quels sont les avantages des panneaux photovoltaïques à Nice ?",
          answer: "Les panneaux photovoltaïques à Nice offrent plusieurs avantages : réduction de votre facture d'électricité, contribution à la transition énergétique avec une énergie propre, revente du surplus de production, et valorisation de votre patrimoine grâce à un habitat plus écologique."
        },
        {
          question: "Quelle est la durée de vie moyenne des panneaux solaires ?",
          answer: "Les panneaux solaires installés à Nice ont une durée de vie moyenne de 25 à 30 ans. Avec un entretien régulier et un installateur certifié RGE, vous pouvez garantir des performances optimales pendant toute cette période."
        },
        {
          question: "Pourquoi faire appel à un installateur certifié RGE à Nice ?",
          answer: "Faire appel à un installateur certifié RGE (Reconnu Garant de l'Environnement) garantit : une installation conforme aux normes, l'accès à des aides financières comme MaPrimeRénov', et une expertise locale adaptée aux spécificités climatiques de la Côte d'Azur."
        },
        {
          question: "Comment fonctionne l'autoconsommation avec des panneaux solaires ?",
          answer: "L'autoconsommation consiste à utiliser directement l'électricité produite par vos panneaux solaires pour alimenter votre maison. À Nice, grâce à l'ensoleillement élevé, vous pouvez couvrir une grande partie de vos besoins énergétiques, et revendre le surplus au réseau électrique via un contrat avec EDF ou un autre fournisseur."
        },
        {
          question: "Quelle puissance installer pour répondre aux besoins d'un foyer niçois ?",
          answer: "La puissance idéale pour une installation photovoltaïque dépend de la consommation électrique de votre foyer. En moyenne : une maison de 4 personnes nécessite environ 3 kWc, une maison avec équipements énergivores (chauffage électrique, piscine) peut nécessiter jusqu'à 6 kWc. Une étude personnalisée par un professionnel à Nice est essentielle pour dimensionner correctement votre installation."
        },
        {
          question: "Quels types de panneaux solaires sont les plus adaptés à Nice ?",
          answer: "À Nice, les panneaux solaires monocristallins sont souvent recommandés pour leur haut rendement et leur performance dans des conditions d'ensoleillement élevées. Les panneaux solaires thermiques, eux, sont idéaux pour produire de l'eau chaude sanitaire, réduisant ainsi votre consommation énergétique globale."
        },
        {
          question: "Comment entretenir ses panneaux photovoltaïques à Nice ?",
          answer: "L'entretien des panneaux photovoltaïques à Nice est simple et consiste principalement à : nettoyer les panneaux deux fois par an pour retirer la poussière et les débris, et vérifier régulièrement l'onduleur et les connexions électriques. Les entreprises spécialisées à Nice proposent également des contrats d'entretien pour garantir la longévité et les performances de votre système."
        }
      ],
      reviews: [
        {
          author: "Jean-Pierre M.",
          rating: 5,
          date: "2024-12-15",
          comment: "Installation parfaite, équipe très professionnelle",
          location: "Nice Centre"
        },
        {
          author: "David & Sarah",
          rating: 5,
          date: "2025-01-05",
          comment: "Super expérience avec My ohm technologies pour l’installation de mes panneaux solaires à Nice ! L’équipe a été très professionnelle du début à la fin. Je recommande sans hésiter !",
          location: "Nice Centre"
        }
      ],
      realisationsNew: [
        {
          _id: "nice1",
          title: "Nos réalisations de panneaux solaires à Nice",
          description: "Installation de panneaux solaires à Nice certifiée RGE",
          mainImage: '/images/installateur-de-panneaux-photovoltaiques-nice.jpeg',
          secondaryImage: '/images/installateur-rge-panneaux-solaire-nice.jpeg',
          date: "2024-01-15",
          city: "Nice",
          type: "Résidentiel",
          year: 2024,
          specifications: {
            puissance: 6.6,
            pannels: 18,
            surface: 36,
            economie: 1200
          }
        },
        {
          _id: "nice2",
          title: "Nos réalisations de panneaux solaires à Nice",
          description: "Installation de panneaux photovoltaiques à Nice",
          mainImage: '/images/installation-de-panneaux-solaire-nice.jpeg',
          secondaryImage: '/images/realisation-panneaux-solaire-nice.jpeg',
          date: "2023-12-20",
          city: "Nice",
          type: "Résidentiel",
          year: 2023,
          specifications: {
            puissance: 9.2,
            pannels: 26,
            surface: 52,
            economie: 1600
          }
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Nice (06) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Nice par un expert certifié RGE. Profitez de 2800h d'ensoleillement/an !",
        keywords: [
          "panneaux solaires nice",
          "installation solaire nice",
          "energie solaire nice",
          "installateur panneaux solaires nice"
        ]
      },
      seoContent: {
        title: "Optimisation énergétique grâce aux panneaux solaires : un choix durable et responsable",
        paragraphs: [
          "Dans un contexte où la réduction de l'impact environnemental et la transition énergétique occupent une place centrale, installer des panneaux solaires à Nice représente une solution innovante et efficace. En combinant des critères de qualité, de performance et de durabilité, cette démarche offre des avantages significatifs pour les particuliers et les collectivités, tout en répondant aux enjeux environnementaux actuels. Ce guide explore les multiples bénéfices de l'installation de panneaux solaires, en mettant en lumière les éléments clés tels que la certification, l'impact carbone, les solutions de financement, et l'accompagnement professionnel dans le sud de la France.",
          "Les panneaux solaires permettent de produire une électricité propre et renouvelable en exploitant l'énergie inépuisable du soleil. Grâce à un impact carbone réduit, cette solution énergétique contribue activement à la préservation de l'environnement tout en favorisant une diminution significative de l'empreinte écologique. À Nice, ville réputée pour son fort ensoleillement, les panneaux photovoltaïques sur toiture ou au sol offrent une production annuelle optimale, maximisant ainsi les bénéfices pour les utilisateurs.",
          "L'installation de panneaux solaires à Nice est un investissement à la fois rentable et durable. Avec des taux de rendement élevés et des systèmes comme le kit solaire ou le solaire thermique, il est possible de générer une électricité solaire qui alimente directement votre logement. Les particuliers peuvent également profiter de la revente de surplus au réseau, augmentant ainsi leurs revenus annuels et amortissant rapidement les coûts initiaux.",
          "Pour assurer la réussite de ce projet, le recours à une entreprise spécialisée est primordial. Un installateur de panneaux solaires photovoltaïques certifié garantit une mise en œuvre conforme aux normes, ainsi qu'une mise en service optimale. Ces professionnels qualifiés accompagnent leurs clients à chaque étape, de la conception du projet à son suivi post-installation.",
          "Les nombreuses aides gouvernementales et locales disponibles à Nice permettent de rendre ces solutions accessibles au plus grand nombre. Parmi elles, on retrouve : La prime à l'autoconsommation, les subventions locales proposées par la Métropole Nice Côte d'Azur, le crédit d'impôt pour la transition énergétique (CITE) et des dispositifs de TVA réduite, ainsi que des aides spéciales pour les installations de solaire thermique, adaptées à la production d'eau chaude.",
          "En optant pour une installation de panneaux solaires, les particuliers et les collectivités participent activement à la réduction des émissions de gaz à effet de serre. Le raccordement au réseau ou l'utilisation en autoconsommation contribue à une diminution de la dépendance aux énergies fossiles. De plus, ces solutions s'intègrent parfaitement dans le cadre d'une économie circulaire, favorisant un développement harmonieux et durable.",
          "L'installation de panneaux solaires à Nice est personnalisable en fonction des besoins spécifiques des clients. Qu'il s'agisse d'une maison individuelle, d'un espace public ou d'une collectivité, chaque projet est adapté en fonction de la taille, de l'orientation et de l'inclinaison de la toiture, afin de garantir un rendement maximal.",
          "Grâce à des équipements certifiés et à des contrats de maintenance fiables, les propriétaires peuvent bénéficier d'une tranquillité d'esprit à long terme. Les panneaux solaires modernes sont conçus pour résister aux conditions climatiques les plus extrêmes tout en offrant une longévité exceptionnelle.",
          "Les panneaux solaires sur toiture et les installations au sol à Nice représentent une opportunité unique pour contribuer activement à la transition énergétique. En choisissant des solutions adaptées et en faisant appel à des installateurs certifiés, les particuliers et les collectivités peuvent réduire leur dépendance énergétique tout en améliorant leur confort au quotidien.",
          "En conclusion, investir dans des panneaux solaires à Nice est un choix gagnant à tous les niveaux : économique, environnemental et pratique. Grâce à des outils performants, des certifications de qualité comme QualiPV, et un accompagnement sur mesure, chaque projet solaire devient une réussite durable. Pour en savoir plus, contactez dès maintenant un expert en photovoltaïque à Nice et bénéficiez d'un devis gratuit pour votre propre électricité verte et renouvelable."
        ]
      }
    },
    cannes: {
      name: "Cannes",
      code: "06029",
      population: 74285,
      sunshineHours: 2750,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Climat méditerranéen idéal",
        "Orientation optimale",
        "Rentabilité maximale"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Équipe locale expérimentée",
        "Suivi qualité garanti",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          date: "2023-11-20",
          comment: "Très satisfaite de l'installation, équipe professionnelle",
          location: "Cannes Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Cannes | Expert Certifié RGE",
        metaDescription: "✓ Installation de panneaux solaires à Cannes par des experts certifiés RGE. Profitez du climat méditerranéen !",
        keywords: [
          "panneaux solaires cannes",
          "installation solaire cannes",
          "energie solaire cannes",
          "installateur panneaux solaires cannes"
        ]
      }
    },
    antibes: {
      name: "Antibes",
      code: "06004",
      population: 74982,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Position géographique optimale",
        "Rentabilité garantie",
        "Économies importantes"
      ],
      keyPoints: [
        "Deuxième ville des Alpes-Maritimes",
        "Expertise locale reconnue",
        "Solutions adaptées au littoral",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Sophie M.",
          rating: 5,
          date: "2023-11-15",
          comment: "Très satisfaite de mon installation. Service impeccable et économies au rendez-vous.",
          location: "Antibes"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Antibes (06) | Installation & Devis",
        metaDescription: "Installation de panneaux solaires à Antibes. Experts locaux et devis personnalisé pour votre projet photovoltaïque.",
        keywords: ["panneaux solaires Antibes", "installation solaire 06", "photovoltaïque Antibes"],
        images: [
          {
            url: "https://example.com/antibes-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Antibes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    cagnesSurMer: {
      name: "Cagnes-sur-Mer",
      code: "06027",
      population: 49322,
      sunshineHours: 2800,
      solarAdvantages: [
        "Exposition maritime idéale",
        "Ensoleillement optimal",
        "Fort potentiel solaire",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Ville littorale dynamique",
        "Solutions adaptées au bord de mer",
        "Installateurs expérimentés",
        "Suivi technique complet"
      ],
      reviews: [
        {
          author: "Pierre L.",
          rating: 5,
          date: "2023-10-25",
          comment: "Installation rapide et efficace. Très satisfait du rendement.",
          location: "Cagnes-sur-Mer"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Cagnes-sur-Mer (06) | Installation",
        metaDescription: "Installation de panneaux solaires à Cagnes-sur-Mer. Experts en solutions solaires adaptées au climat méditerranéen.",
        keywords: ["panneaux solaires Cagnes-sur-Mer", "installation solaire 06", "photovoltaïque Cagnes"],
        images: [
          {
            url: "https://example.com/cagnes-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Cagnes-sur-Mer"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    leCannet: {
      name: "Le Cannet",
      code: "06030",
      population: 42454,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement exceptionnel",
        "Rentabilité optimale",
        "Économies significatives"
      ],
      keyPoints: [
        "Ville résidentielle attractive",
        "Solutions personnalisées",
        "Expertise technique locale",
        "Accompagnement complet"
      ],
      reviews: [
        {
          author: "Michel D.",
          rating: 5,
          date: "2023-11-05",
          comment: "Installation parfaite, équipe professionnelle. Très content du résultat.",
          location: "Le Cannet"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires au Cannet (06) | Devis",
        metaDescription: "Installation de panneaux solaires au Cannet. Profitez d'une expertise locale pour votre projet solaire.",
        keywords: ["panneaux solaires Le Cannet", "installation solaire 06", "photovoltaïque Le Cannet"],
        images: [
          {
            url: "https://example.com/le-cannet-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire au Cannet"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    menton: {
      name: "Menton",
      code: "06083",
      population: 28739,
      solarAdvantages: [
        "Microclimat exceptionnel",
        "Ensoleillement optimal",
        "Rendement solaire élevé",
        "Économies garanties"
      ],
      keyPoints: [
        "Ville du soleil",
        "Solutions adaptées au littoral",
        "Installateurs certifiés",
        "Suivi personnalisé"
      ],
      reviews: [
        {
          author: "Claire M.",
          rating: 5,
          date: "2023-10-15",
          comment: "Excellent service, installation soignée. Production solaire au top.",
          location: "Menton"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Menton (06) | Installation & Devis",
        metaDescription: "Installation de panneaux solaires à Menton. Profitez du microclimat exceptionnel pour votre production solaire.",
        keywords: ["panneaux solaires Menton", "installation solaire 06", "photovoltaïque Menton"],
        images: [
          {
            url: "https://example.com/menton-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Menton"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintLaurentDuVar: {
      name: "Saint-Laurent-du-Var",
      code: "06123",
      population: 28919,
      solarAdvantages: [
        "Exposition maritime favorable",
        "Ensoleillement optimal",
        "Fort potentiel solaire",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Ville côtière dynamique",
        "Solutions adaptées au littoral",
        "Expertise technique locale",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Laurent P.",
          rating: 5,
          date: "2023-11-20",
          comment: "Installation rapide et professionnelle. Très satisfait du service.",
          location: "Saint-Laurent-du-Var"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Saint-Laurent-du-Var (06)",
        metaDescription: "Installation de panneaux solaires à Saint-Laurent-du-Var. Profitez d'une exposition optimale pour votre production solaire.",
        keywords: ["panneaux solaires Saint-Laurent-du-Var", "installation solaire 06", "photovoltaïque Saint-Laurent"],
        images: [
          {
            url: "https://example.com/saint-laurent-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Laurent-du-Var"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    vallauris: {
      name: "Vallauris",
      code: "06155",
      population: 25865,
      solarAdvantages: [
        "Position géographique idéale",
        "Climat méditerranéen favorable",
        "Rendement optimal",
        "Économies significatives"
      ],
      keyPoints: [
        "Ville artistique du littoral",
        "Solutions sur mesure",
        "Installateurs qualifiés",
        "Suivi technique complet"
      ],
      reviews: [
        {
          author: "Sophie B.",
          rating: 5,
          date: "2023-10-30",
          comment: "Excellent travail, équipe professionnelle. Résultats au-delà des attentes.",
          location: "Vallauris"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Vallauris (06) | Installation & Devis",
        metaDescription: "Installation de panneaux solaires à Vallauris. Experts en solutions solaires adaptées à votre habitat.",
        keywords: ["panneaux solaires Vallauris", "installation solaire 06", "photovoltaïque Vallauris"],
        images: [
          {
            url: "https://example.com/vallauris-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Vallauris"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    mandelieuLaNapoule: {
      name: "Mandelieu-la-Napoule",
      code: "06079",
      population: 22714,
      solarAdvantages: [
        "Exposition méditerranéenne idéale",
        "Ensoleillement exceptionnel",
        "Rendement solaire optimal",
        "Économies importantes sur la facture énergétique"
      ],
      keyPoints: [
        "Station balnéaire prisée",
        "Solutions adaptées au littoral",
        "Expertise technique reconnue",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          date: "2023-11-15",
          comment: "Installation impeccable, équipe très professionnelle. Excellent suivi du projet.",
          location: "Mandelieu-la-Napoule"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Mandelieu-la-Napoule (06) | Installation & Devis",
        metaDescription: "Installation de panneaux solaires à Mandelieu-la-Napoule. Profitez d'une exposition méditerranéenne idéale pour votre production solaire.",
        keywords: ["panneaux solaires Mandelieu-la-Napoule", "installation solaire 06", "photovoltaïque Mandelieu"],
        images: [
          {
            url: "https://example.com/mandelieu-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Mandelieu-la-Napoule"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    vence: {
      name: "Vence",
      code: "06157",
      population: 18952,
      solarAdvantages: [
        "Situation géographique privilégiée",
        "Ensoleillement remarquable",
        "Performance énergétique optimale",
        "Retour sur investissement rapide"
      ],
      keyPoints: [
        "Cité historique et artistique",
        "Solutions sur mesure",
        "Installateurs qualifiés",
        "Suivi technique complet"
      ],
      reviews: [
        {
          author: "Marie L.",
          rating: 5,
          date: "2023-10-25",
          comment: "Très satisfaite de l'installation. Production solaire conforme aux prévisions.",
          location: "Vence"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Vence (06) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Vence. Experts en solutions solaires adaptées au patrimoine architectural.",
        keywords: ["panneaux solaires Vence", "installation solaire 06", "photovoltaïque Vence"],
        images: [
          {
            url: "https://example.com/vence-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Vence"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    villeneuveLoubet: {
      name: "Villeneuve-Loubet",
      code: "06161",
      population: 15020,
      solarAdvantages: [
        "Position littorale avantageuse",
        "Fort taux d'ensoleillement",
        "Excellente rentabilité",
        "Économies substantielles"
      ],
      keyPoints: [
        "Ville moderne et dynamique",
        "Solutions innovantes",
        "Expertise technique locale",
        "Accompagnement global"
      ],
      reviews: [
        {
          author: "Jean-Marc P.",
          rating: 5,
          date: "2023-11-10",
          comment: "Installation réalisée dans les règles de l'art. Équipe très compétente.",
          location: "Villeneuve-Loubet"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Villeneuve-Loubet (06) | Installation",
        metaDescription: "Installation de panneaux solaires à Villeneuve-Loubet. Profitez d'une position littorale idéale pour votre production solaire.",
        keywords: ["panneaux solaires Villeneuve-Loubet", "installation solaire 06", "photovoltaïque Villeneuve-Loubet"],
        images: [
          {
            url: "https://example.com/villeneuve-loubet-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Villeneuve-Loubet"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    mougins: {
      name: "Mougins",
      code: "06085",
      population: 17904,
      solarAdvantages: [
        "Situation géographique optimale",
        "Ensoleillement privilégié",
        "Rendement solaire élevé",
        "Économies significatives"
      ],
      keyPoints: [
        "Village d'art et de gastronomie",
        "Solutions sur mesure",
        "Installateurs qualifiés",
        "Suivi technique complet"
      ],
      reviews: [
        {
          author: "Pierre D.",
          rating: 5,
          date: "2023-11-08",
          comment: "Installation soignée et professionnelle. Très satisfait du résultat.",
          location: "Mougins"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Mougins (06) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Mougins. Profitez d'une situation géographique idéale pour votre production solaire.",
        keywords: ["panneaux solaires Mougins", "installation solaire 06", "photovoltaïque Mougins"],
        images: [
          {
            url: "https://example.com/mougins-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Mougins"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    beausoleil: {
      name: "Beausoleil",
      code: "06012",
      population: 13227,
      solarAdvantages: [
        "Position dominante avantageuse",
        "Ensoleillement remarquable",
        "Performance optimale",
        "Rentabilité attractive"
      ],
      keyPoints: [
        "Ville surplombant Monaco",
        "Solutions adaptées au terrain",
        "Expertise technique reconnue",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Sophie M.",
          rating: 5,
          date: "2023-10-20",
          comment: "Excellent service, installation parfaite. Je recommande vivement.",
          location: "Beausoleil"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Beausoleil (06) | Installation",
        metaDescription: "Installation de panneaux solaires à Beausoleil. Experts en solutions solaires adaptées à la topographie unique de la ville.",
        keywords: ["panneaux solaires Beausoleil", "installation solaire 06", "photovoltaïque Beausoleil"],
        images: [
          {
            url: "https://example.com/beausoleil-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Beausoleil"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    roquebruneCapMartin: {
      name: "Roquebrune-Cap-Martin",
      code: "06104",
      population: 12641,
      solarAdvantages: [
        "Exposition méditerranéenne exceptionnelle",
        "Ensoleillement optimal",
        "Rendement solaire maximal",
        "Économies garanties"
      ],
      keyPoints: [
        "Site remarquable du littoral",
        "Solutions haut de gamme",
        "Expertise technique pointue",
        "Accompagnement premium"
      ],
      reviews: [
        {
          author: "Marc L.",
          rating: 5,
          date: "2023-11-12",
          comment: "Installation de grande qualité. Équipe très professionnelle.",
          location: "Roquebrune-Cap-Martin"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Roquebrune-Cap-Martin (06)",
        metaDescription: "Installation de panneaux solaires à Roquebrune-Cap-Martin. Profitez d'une exposition méditerranéenne exceptionnelle.",
        keywords: ["panneaux solaires Roquebrune-Cap-Martin", "installation solaire 06", "photovoltaïque Roquebrune"],
        images: [
          {
            url: "https://example.com/roquebrune-cap-martin-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Roquebrune-Cap-Martin"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laTrinite: {
      name: "La Trinité",
      code: "06149",
      population: 10100,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement optimal",
        "Rendement solaire élevé",
        "Économies importantes"
      ],
      keyPoints: [
        "Ville dynamique",
        "Solutions adaptées",
        "Expertise locale",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Antoine R.",
          rating: 5,
          date: "2023-11-18",
          comment: "Très satisfait de l'installation. Service professionnel et efficace.",
          location: "La Trinité"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à La Trinité (06)",
        metaDescription: "Installation de panneaux solaires à La Trinité. Profitez d'une position géographique favorable pour votre production solaire.",
        keywords: ["panneaux solaires La Trinité", "installation solaire 06", "photovoltaïque La Trinité"],
        images: [
          {
            url: "https://example.com/la-trinite-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Trinité"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    carros: {
      name: "Carros",
      code: "06033",
      population: 11889,
      solarAdvantages: [
        "Situation géographique idéale",
        "Fort ensoleillement",
        "Performance optimale",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Zone industrielle dynamique",
        "Solutions industrielles et résidentielles",
        "Expertise technique reconnue",
        "Suivi complet"
      ],
      reviews: [
        {
          author: "Laurent V.",
          rating: 5,
          date: "2023-10-28",
          comment: "Installation professionnelle, équipe réactive et compétente.",
          location: "Carros"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Carros (06) | Installation & Devis",
        metaDescription: "Installation de panneaux solaires à Carros. Solutions adaptées aux particuliers et professionnels.",
        keywords: ["panneaux solaires Carros", "installation solaire 06", "photovoltaïque Carros"],
        images: [
          {
            url: "https://example.com/carros-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Carros"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    valbonne: {
      name: "Valbonne",
      code: "06152",
      population: 13070,
      solarAdvantages: [
        "Emplacement stratégique",
        "Ensoleillement remarquable",
        "Rendement optimal",
        "Économies substantielles"
      ],
      keyPoints: [
        "Technopole de Sophia Antipolis",
        "Solutions innovantes",
        "Expertise high-tech",
        "Accompagnement technique poussé"
      ],
      reviews: [
        {
          author: "Caroline B.",
          rating: 5,
          date: "2023-11-05",
          comment: "Installation high-tech parfaitement réalisée. Excellent suivi.",
          location: "Valbonne"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Valbonne (06)",
        metaDescription: "Installation de panneaux solaires à Valbonne. Solutions innovantes adaptées à la technopole de Sophia Antipolis.",
        keywords: ["panneaux solaires Valbonne", "installation solaire 06", "photovoltaïque Valbonne"],
        images: [
          {
            url: "https://example.com/valbonne-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Valbonne"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laColleSurLoup: {
      name: "La Colle-sur-Loup",
      code: "06044",
      population: 7919,
      solarAdvantages: [
        "Situation géographique privilégiée",
        "Ensoleillement optimal",
        "Performance énergétique optimale",
        "Rentabilité attractive"
      ],
      keyPoints: [
        "Village provençal authentique",
        "Solutions sur mesure",
        "Expertise locale",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "François M.",
          rating: 5,
          date: "2023-11-22",
          comment: "Installation parfaite, équipe à l'écoute. Très satisfait du résultat.",
          location: "La Colle-sur-Loup"
        }
      ],
      seo: {
        title: "Panneaux Solaires à La Colle-sur-Loup (06)",
        metaDescription: "Installation de panneaux solaires à La Colle-sur-Loup. Solutions adaptées au caractère provençal de la ville.",
        keywords: ["panneaux solaires La Colle-sur-Loup", "installation solaire 06", "photovoltaïque La Colle-sur-Loup"],
        images: [
          {
            url: "https://example.com/la-colle-sur-loup-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Colle-sur-Loup"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    biot: {
      name: "Biot",
      code: "06018",
      population: 9885,
      solarAdvantages: [
        "Exposition méditerranéenne idéale",
        "Ensoleillement remarquable",
        "Rendement optimal",
        "Économies significatives"
      ],
      keyPoints: [
        "Village d'artisans et d'artistes",
        "Solutions personnalisées",
        "Expertise technique reconnue",
        "Suivi complet"
      ],
      reviews: [
        {
          author: "Marie-Claire D.",
          rating: 5,
          date: "2023-10-18",
          comment: "Installation soignée et professionnelle. Excellent accompagnement.",
          location: "Biot"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Biot (06) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Biot. Profitez d'une exposition méditerranéenne idéale pour votre production solaire.",
        keywords: ["panneaux solaires Biot", "installation solaire 06", "photovoltaïque Biot"],
        images: [
          {
            url: "https://example.com/biot-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Biot"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    contes: {
      name: "Contes",
      code: "06048",
      population: 7322,
      solarAdvantages: [
        "Position géographique avantageuse",
        "Ensoleillement favorable",
        "Performance énergétique optimale",
        "Rentabilité intéressante"
      ],
      keyPoints: [
        "Village authentique",
        "Solutions adaptées",
        "Expertise locale",
        "Accompagnement sur mesure"
      ],
      reviews: [
        {
          author: "Jean-Paul L.",
          rating: 5,
          date: "2023-11-25",
          comment: "Très satisfait de l'installation. Service professionnel et efficace.",
          location: "Contes"
        }
      ],
      seo: {
        title: "Panneaux Solaires à Contes (06) | Installation",
        metaDescription: "Installation de panneaux solaires à Contes. Profitez d'une position géographique avantageuse pour votre production solaire.",
        keywords: ["panneaux solaires Contes", "installation solaire 06", "photovoltaïque Contes"],
        images: [
          {
            url: "https://example.com/contes-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Contes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laGaude: {
      name: "La Gaude",
      code: "06064",
      population: 6739,
      solarAdvantages: [
        "Situation dominante favorable",
        "Ensoleillement optimal",
        "Rendement solaire élevé",
        "Économies garanties"
      ],
      keyPoints: [
        "Village perché pittoresque",
        "Solutions sur mesure",
        "Expertise technique locale",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Catherine M.",
          rating: 5,
          date: "2023-11-15",
          comment: "Installation impeccable, équipe professionnelle. Très satisfaite.",
          location: "La Gaude"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à La Gaude (06)",
        metaDescription: "Installation de panneaux solaires à La Gaude. Profitez d'une situation dominante idéale pour votre production solaire.",
        keywords: ["panneaux solaires La Gaude", "installation solaire 06", "photovoltaïque La Gaude"],
        images: [
          {
            url: "https://example.com/la-gaude-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à La Gaude"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    }
  }
};

export default alpesMaritimes;
