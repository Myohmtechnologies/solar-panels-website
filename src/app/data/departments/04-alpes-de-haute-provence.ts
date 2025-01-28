import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const alpesDeHauteProvence: Department = {
  name: "Alpes-de-Haute-Provence",
  code: "04",
  cities: {
    manosque: {
      name: "Manosque",
      code: "04100",
      population: 22801,
      sunshineHours: 2800,
      heroImage: {
        url: '/images/hero-section-manosque.jpeg',
        alt: 'Vue panoramique de Manosque, ville idéale pour l\'installation de panneaux solaires'
      },
      neighborhoods: [
        "Centre-ville",
        "Les Plantiers",
        "Saint-Lazare",
        "La Rochette",
        "Les Serrets"
      ],
      localStatistics: {
        averageElectricityConsumption: "6500 kWh/an",
        solarPotential: "1350 kWh/kWc/an",
        co2Savings: "1.2 tonnes/an/installation"
      },
      solarAdvantages: [
        "Ensoleillement exceptionnel avec plus de 2800 heures par an",
        "Climat méditerranéen idéal pour le solaire",
        "Forte politique locale en faveur des énergies renouvelables",
        "Zone géographique optimale pour la production solaire",
        "Territoire engagé dans la transition énergétique",
        "Subventions locales attractives",
        "Réseau d'installateurs certifiés"
      ],
      reviews: [
        {
          author: "Jean-Pierre M.",
          location: "Centre-ville",
          comment: "Installation impeccable par l'équipe. Production supérieure aux estimations après 6 mois d'utilisation. Je recommande !",
          rating: 5,
          date: "2023-12-10"
        },
        {
          author: "Marie L.",
          location: "Les Plantiers",
          comment: "Très satisfaite du service et du suivi. L'équipe est professionnelle et à l'écoute.",
          rating: 5,
          date: "2023-11-25"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Manosque (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Manosque. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire manosque",
          "installation panneau solaire manosque",
          "photovoltaique manosque",
          "installation photovoltaique manosque",
          "installateur photovoltaique manosque",
          "panneau photovoltaique manosque",
          "entreprise panneau solaire manosque",
          "prix installation panneaux solaires manosque"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Manosque",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Manosque",
            "postalCode": "04100",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Pourquoi installer des panneaux solaires à Manosque ?",
            answer: "Manosque, située dans les Alpes de Haute-Provence, bénéficie d'un ensoleillement exceptionnel, ce qui en fait un lieu idéal pour une installation photovoltaïque. Les panneaux solaires permettent de produire de l'électricité propre et renouvelable, réduisant ainsi vos factures énergétiques tout en contribuant à la transition énergétique."
          },
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Manosque ?",
            answer: "Le coût d'une installation dépend de nombreux facteurs : la puissance installée (en kWh), le type de panneaux (photovoltaïques ou thermiques), et les besoins spécifiques de votre maison. Notre entreprise RGE propose des devis gratuits et des estimations précises pour un budget adapté à chaque projet."
          },
          {
            question: "Quels sont les avantages des panneaux solaires ?",
            answer: "Les panneaux solaires offrent plusieurs avantages : Réduction significative de vos factures d'électricité, rentabilité durable grâce à l'autoconsommation et au surplus d'électricité vendu, réduction de l'empreinte carbone grâce à l'énergie renouvelable, valorisation de votre maison en augmentant sa valeur à long terme."
          },
          {
            question: "Quels types de panneaux solaires sont disponibles ?",
            answer: "Nous proposons différents types de panneaux adaptés aux besoins de nos clients : Panneaux photovoltaïques pour produire de l'électricité, panneaux solaires thermiques pour chauffer l'eau ou alimenter un circuit de chauffage, systèmes hybrides combinant production électrique et chaleur."
          },
          {
            question: "Comment se déroule une installation de panneaux solaires à Manosque ?",
            answer: "L'installation suit plusieurs étapes : Étude de votre toiture et de votre consommation énergétique, pose des panneaux par une équipe d'experts qualifiés, raccordement au réseau électrique et mise en service, maintenance et suivi pour garantir des performances optimales sur le long terme."
          },
          {
            question: "Quelles aides sont disponibles pour une installation solaire ?",
            answer: "À Manosque, vous pouvez bénéficier d'aides financières telles que : MaPrimeRénov' pour la rénovation énergétique, les aides locales dans les Alpes de Haute-Provence, les primes à l'autoconsommation et le tarif de rachat pour le surplus d'électricité produite."
          },
          {
            question: "Combien d'électricité produit un système solaire à Manosque ?",
            answer: "La production dépend de la puissance installée et des conditions locales. À Manosque, l'ensoleillement permet une production photovoltaïque élevée, maximisant la rentabilité de votre installation. Par exemple, un système de 3 kWh peut produire en moyenne 4 000 kWh par an."
          },
          {
            question: "Quels services propose votre entreprise à Manosque ?",
            answer: "Nous proposons une large gamme de services : Installation de panneaux photovoltaïques et thermiques, entretien et maintenance des panneaux solaires, réparation et dépannage de panneaux, audit énergétique et rénovation globale, mise en conformité des installations existantes."
          },
          {
            question: "Pourquoi choisir une entreprise certifiée RGE à Manosque ?",
            answer: "Faire appel à une entreprise RGE garantit des travaux réalisés selon les normes, une qualité optimale, et l'accès à des aides financières. Nos installateurs certifiés RGE à Manosque assurent un suivi personnalisé pour chaque projet."
          },
          {
            question: "Comment choisir les panneaux solaires adaptés à votre maison ?",
            answer: "Le choix des panneaux dépend de la configuration de votre toit, de vos besoins en électricité et de votre budget. Nous réalisons une analyse sur mesure pour vous proposer la meilleure solution en termes de rendement, durabilité et coût."
          }
        ],
        images: [
          {
            url: "/images/cities/manosque/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Manosque"
          },
          {
            url: "/images/cities/manosque/realisations-manosque.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Manosque"
          }
        ]
      },
      realisationsNew: [
        {
          _id: "manosque1",
          title: "Nos réalisations de panneaux solaires à Manosque",
          description: "Installation de panneaux solaires à Manosque certifiée RGE",
          mainImage: '/images/installateur-rge-panneaux-solaire-manosque.jpg',
          secondaryImage: '/images/installateur-rge-panneaux-solaire-manosque.jpg',
          date: "2024-01-20",
          city: "Manosque",
          type: "Résidentiel",
          year: 2024,
          specifications: {
            puissance: 5.4,
            pannels: 14,
            surface: 28,
            economie: 920
          }
        },
       
      ],
      seoContent: {
        title: "Tout ce qu'il faut savoir sur l'installation photovoltaïque et les solutions énergétiques modernes",
        paragraphs: [
          "Les panneaux photovoltaïques sont devenus une solution incontournable pour réduire ses factures énergétiques tout en adoptant une démarche respectueuse de l'environnement. Grâce à l'expertise des entreprises spécialisées, il est désormais simple et rentable de passer à une énergie verte et propre. Ces installations permettent de produire de l'électricité renouvelable directement depuis le toit de votre maison, tout en bénéficiant d'un fonctionnement garanti et optimisé pour plusieurs décennies.",
          "Installer des panneaux photovoltaïques sur votre toit représente un investissement qui permet de réaliser des économies significatives sur vos factures. Les modules de dernière génération, conçus avec des technologies avancées, garantissent un rendement élevé et une durabilité optimale. Par exemple, le surplus d'électricité produit peut être stocké ou revendu au réseau, ce qui maximise la rentabilité de votre installation.",
          "En parallèle, les solutions solaires thermodynamiques, telles que les chauffe-eaux solaires et les pompes à chaleur, offrent une alternative efficace pour produire de l'eau chaude sanitaire ou alimenter un circuit de climatisation et de chauffage. Ces systèmes combinent efficacité énergétique et réduction d'empreinte carbone, tout en répondant aux besoins spécifiques des particuliers et des professionnels.",
          "Que ce soit pour une maison individuelle ou une industrie, les entreprises spécialisées, comme My ohm technologies, accompagnent les clients dans toutes les étapes de leur projet. Cela inclut la pose de panneaux photovoltaïques, l'isolation thermique, ou encore la mise en conformité d'une installation électrique. Une estimation précise est réalisée en amont pour garantir un budget maîtrisé et des résultats en adéquation avec les attentes.",
          "Les services d'installation de panneaux photovoltaïques incluent également l'entretien et le dépannage. Cela garantit une performance optimale tout au long de la durée de vie du système. Par exemple, un dépannage rapide en cas de panne sur un panneau solaire thermique ou une pompe à chaleur est assuré par des experts locaux qualifiés. De plus, des solutions innovantes, comme les systèmes de recharge pour véhicules électriques, s'intègrent parfaitement dans cette démarche énergétique globale.",
          "Les entreprises spécialisées, reconnues pour leur réputation et leur expertise, accompagnent leurs clients à chaque étape : Étude et conception du projet avec analyse de la faisabilité technique, pose et mise en service selon les normes en vigueur, et entretien régulier pour garantir le bon fonctionnement à long terme.",
          "En plus de réduire les factures, les panneaux photovoltaïques contribuent à la réduction des gaz à effet de serre. L'utilisation d'une énergie propre, comme celle produite par les panneaux solaires thermiques ou les systèmes photovoltaïques, est un atout majeur pour lutter contre le changement climatique. L'intégration de technologies telles que le stockage de l'énergie et les pompes à chaleur permet également d'optimiser l'efficacité énergétique.",
          "Faire appel à des installateurs certifiés RGE est essentiel pour garantir la qualité des travaux. Ces professionnels possèdent les compétences nécessaires pour intervenir sur différents modèles de panneaux et de systèmes solaires. Le respect des normes est également un point clé, notamment pour la mise en conformité d'une installation existante ou le dépannage d'un système solaire thermodynamique.",
          "Les entreprises proposent également des services complémentaires comme la pose de carrelage et travaux d'isolation thermique, la recherche de fuite et dépannage de chaudières, ainsi que la planification et réalisation de rénovations globales pour maximiser les économies d'énergie.",
          "En conclusion, investir dans le photovoltaïque ou les solutions solaires thermiques est un choix judicieux, tant pour les particuliers que pour les professionnels. Ces systèmes, garantis pour leur longévité et leur performance, permettent de réaliser des économies significatives tout en respectant l'environnement. Avec des produits de qualité, des garanties solides, et une expertise reconnue, l'installation de panneaux solaires représente une opportunité durable et rentable. Contactez une société de confiance pour bénéficier de conseils personnalisés et d'un service complet."
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    castellane: {
      name: "Castellane",
      code: "04039",
      population: 1500,
      neighborhoods: [
        "Centre Historique",
        "Le Roc",
        "Saint-Michel",
        "Les Angles",
        "Le Plan"
      ],
      localStatistics: {
        averageElectricityConsumption: "5800 kWh/an",
        solarPotential: "1320 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Position géographique privilégiée à 724m d'altitude",
        "Ensoleillement optimal toute l'année",
        "Zone climatique favorable aux installations solaires",
        "Territoire labellisé Petites Cités de Caractère",
        "Aides spécifiques aux monuments historiques",
        "Expertise locale en intégration paysagère"
      ],
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Castellane.",
          date: "2023-11-01",
          location: "Quartier des Lavandes"
        },
        {
          author: "Marc D.",
          rating: 5,
          comment: "Très professionnel, installation rapide et efficace. Je recommande !",
          date: "2023-12-01",
          location: "Centre Historique"
        }
      ],
      description: `Castellane, cité historique de 1500 habitants perchée à 724 mètres d'altitude au cœur du Parc naturel régional du Verdon, bénéficie d'une situation géographique exceptionnelle pour l'énergie solaire. Cette ville dynamique allie préservation du patrimoine et transition énergétique. Son climat privilégié et son engagement dans le développement durable en font un territoire idéal pour l'installation de panneaux solaires, avec une attention particulière portée à l'intégration paysagère.`,
      seoTitle: 'Installation Panneaux Solaires Castellane (04120) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Castellane. Profitez d\'une situation géographique optimale et d\'une expertise en intégration paysagère. Devis gratuit personnalisé.',
      seoKeywords: [
        'panneaux solaires Castellane',
        'installation photovoltaïque 04120',
        'énergie solaire Verdon',
        'installation solaire patrimoine',
        'aide panneaux solaires Castellane',
        'devis solaire Castellane',
        'MyOhm Technologies Castellane'
      ],
      solarInstallation: defaultSolarInstallation
    },
    valensole: {
      name: "Valensole",
      code: "04230",
      population: 3300,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Terrain favorable aux installations solaires",
        "Réduction de l'empreinte carbone",
        "Autonomie énergétique accrue"
      ],
      keyPoints: [
        "Expertise technique reconnue",
        "Solutions personnalisées",
        "Accompagnement administratif complet",
        "Performance garantie"
      ],
      reviews: [
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Service impeccable et installation soignée. Les panneaux s'intègrent parfaitement au paysage de Valensole.",
          date: "2023-11-01",
          location: "Quartier des Lavandes"
        },
        {
          author: "Pierre B.",
          rating: 5,
          comment: "Installation de qualité, équipe sérieuse et professionnelle.",
          date: "2023-10-01",
          location: "Route de Manosque"
        }
      ],
      seo: {
        title: "Valensole : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Valensole. ✦ Expert installation solaire ✦ Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Valensole", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/valensole-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Valensole"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "saint-laurent-du-verdon": {
      name: "Saint-Laurent-du-Verdon",
      code: "04170",
      population: 100,
      neighborhoods: [
        "Village",
        "Les Granges",
        "Le Plan",
        "Les Adrets"
      ],
      localStatistics: {
        averageElectricityConsumption: "4900 kWh/an",
        solarPotential: "1340 kWh/kWc/an",
        co2Savings: "1.0 tonnes/an/installation"
      },
      solarAdvantages: [
        "Exposition sud optimale",
        "Climat méditerranéen favorable",
        "Faible densité urbaine idéale pour les installations",
        "Zone rurale sans contraintes architecturales majeures",
        "Accompagnement personnalisé pour chaque projet",
        "Forte sensibilité écologique locale"
      ],
      description: `Saint-Laurent-du-Verdon, petit village authentique de 100 habitants, offre un cadre idéal pour l'installation de panneaux solaires. Sa situation privilégiée en Haute-Provence et sa faible densité urbaine permettent une optimisation maximale des installations solaires. Le village s'inscrit dans une démarche de développement durable, encourageant activement la transition énergétique de ses habitants.`,
      seoTitle: 'Installation Panneaux Solaires Saint-Laurent-du-Verdon (04500) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Saint-Laurent-du-Verdon. Bénéficiez d\'une exposition optimale et d\'un accompagnement personnalisé pour votre projet solaire. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Saint-Laurent-du-Verdon',
        'installation photovoltaïque 04500',
        'énergie solaire Verdon',
        'installation solaire rurale',
        'aide panneaux solaires Saint-Laurent',
        'devis solaire Saint-Laurent-du-Verdon',
        'MyOhm Technologies Verdon'
      ],
      solarInstallation: defaultSolarInstallation
    },
    "greoux-les-bains": {
      name: "Gréoux-les-Bains",
      code: "04094",
      population: 2584,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Position géographique idéale",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Installation sur mesure adaptée à Gréoux-les-Bains",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Jean-Pierre L.",
          rating: 5,
          date: "2023-12-10",
          comment: "Installation de panneaux solaires parfaite. L'équipe a été très professionnelle, je recommande !",
          location: "Gréoux Centre"
        },
        {
          author: "Marie F.",
          rating: 5,
          date: "2023-11-22",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service impeccable du début à la fin.",
          location: "Gréoux Nord"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Gréoux-les-Bains (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Gréoux-les-Bains par un installateur certifié RGE. 2800h d'ensoleillement/an, devis gratuit !",
        keywords: [
          // Variations panneaux solaires (pluriel)
          "panneaux solaires greoux les bains",
          "installation panneaux solaires greoux les bains",
          "installateur panneaux solaires greoux les bains",
          "aide panneaux solaires greoux les bains",
          
          // Variations panneau solaire (singulier)
          "panneau solaire greoux les bains",
          "installation panneau solaire greoux les bains",
          "installateur panneau solaire greoux les bains",
          
          // Variations photovoltaïque
          "installateur panneaux photovoltaïques greoux les bains",
          "installation panneaux photovoltaiques greoux les bains",
          "panneau photovoltaique greoux les bains",
          
          // Variations avec "de"
          "installation de panneaux solaires greoux les bains",
          "installation de panneau solaire greoux les bains",
          "installateur de panneaux solaires greoux les bains",
          "installateur de panneau solaire greoux les bains",
          
          // Variations prix/devis
          "prix panneaux solaires greoux les bains",
          "prix panneau solaire greoux les bains",
          "devis panneaux solaires greoux les bains",
          
          // Variations locales
          "energie solaire greoux les bains",
          "pose panneaux solaires greoux les bains",
          "entreprise solaire greoux les bains"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Gréoux-les-Bains",
          "description": "Expert en installation de panneaux solaires à Gréoux-les-Bains. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gréoux-les-Bains",
            "postalCode": "04800",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.7583",
            "longitude": "5.8861"
          },
          "url": "https://votresite.fr/greoux-les-bains",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Gréoux-les-Bains ?",
            answer: "Le coût d'une installation de panneaux solaires à Gréoux-les-Bains varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Gréoux-les-Bains ?",
            answer: "Un bon installateur de panneaux solaires à Gréoux-les-Bains doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Gréoux-les-Bains ?",
            answer: "En tant qu'installateur local à Gréoux-les-Bains, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles aides sont disponibles pour l'installation de panneaux solaires à Gréoux-les-Bains ?",
            answer: "À Gréoux-les-Bains, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      }
    },
    "esparron-de-verdon": {
      name: "Esparron-de-Verdon",
      code: "04081",
      population: 450,
      solarAdvantages: [
        "Situation géographique avantageuse",
        "Fort potentiel solaire",
        "Réduction des coûts énergétiques",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur-mesure",
        "Équipements certifiés",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Très satisfait de l'installation. L'équipe a su s'adapter au terrain.",
          date: "2023-11-01",
          location: "Vue sur le Lac"
        },
        {
          author: "Isabelle K.",
          rating: 5,
          comment: "Installation parfaite, équipe à l'écoute et professionnelle.",
          date: "2023-12-01",
          location: "Bord du Lac"
        }
      ],
      seo: {
        title: "Esparron-de-Verdon : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Esparron-de-Verdon. Réduisez votre empreinte carbone et vos coûts énergétiques.",
        keywords: ["installation solaire", "Esparron-de-Verdon", "énergie renouvelable", "solaire"],
        images: [
          {
            url: "https://example.com/esparron-de-verdon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Esparron-de-Verdon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "saint-etienne-les-orgues": {
      name: "Saint-Étienne-les-Orgues",
      code: "04178",
      population: 1200,
      neighborhoods: [
        "Centre Village",
        "Les Orgues",
        "Le Forest",
        "Les Tourettes",
        "Saint-Pons"
      ],
      localStatistics: {
        averageElectricityConsumption: "5200 kWh/an",
        solarPotential: "1310 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Situation au pied de la montagne de Lure",
        "Ensoleillement exceptionnel",
        "Climat montagnard favorable",
        "Engagement communal fort dans les énergies renouvelables",
        "Accompagnement technique spécialisé",
        "Solutions adaptées au climat montagnard"
      ],
      description: `Saint-Étienne-les-Orgues, village de 1200 habitants niché au pied de la montagne de Lure, bénéficie d'un ensoleillement remarquable. Sa position géographique unique et son climat montagnard offrent des conditions idéales pour l'installation de panneaux solaires. La commune s'engage activement dans la transition énergétique, proposant des solutions adaptées aux spécificités de son territoire.`,
      seoTitle: 'Installation Panneaux Solaires Saint-Étienne-les-Orgues (04230) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Saint-Étienne-les-Orgues. Solutions adaptées au climat montagnard, accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Saint-Étienne-les-Orgues',
        'installation photovoltaïque 04230',
        'énergie solaire montagne de Lure',
        'installation solaire montagne',
        'aide panneaux solaires Saint-Étienne',
        'devis solaire Saint-Étienne-les-Orgues',
        'MyOhm Technologies montagne'
      ],
      reviews: [
        {
          author: "Antoine R.",
          rating: 5,
          comment: "Installation parfaite et service client au top. Je recommande vivement !",
          date: "2023-12-01",
          location: "Quartier des Orgues"
        },
        {
          author: "Sylvie M.",
          rating: 5,
          comment: "Très contente de mon installation, économies au rendez-vous.",
          date: "2023-11-01",
          location: "Route de Lure"
        }
      ],
      seo: {
        title: "Saint-Étienne-les-Orgues : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Saint-Étienne-les-Orgues. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Saint-Étienne-les-Orgues", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/saint-etienne-les-orgues-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Étienne-les-Orgues"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    banon: {
      name: "Banon",
      code: "04018",
      population: 1000,
      solarAdvantages: [
        "Excellent taux d'ensoleillement",
        "Orientation favorable",
        "Économies substantielles",
        "Démarche écologique"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Matériel haute qualité",
        "Garanties constructeur",
        "Accompagnement personnalisé"
      ],
      reviews: [
        {
          author: "Marie F.",
          rating: 5,
          comment: "Excellente expérience avec l'équipe. Installation soignée et résultats au rendez-vous.",
          date: "2023-11-01",
          location: "Vieille Ville"
        },
        {
          author: "Paul D.",
          rating: 5,
          comment: "Service impeccable, équipe professionnelle. Je recommande !",
          date: "2023-12-01",
          location: "Route de Forcalquier"
        }
      ],
      seo: {
        title: "Banon : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Banon. Économisez sur votre facture d'électricité et contribuez à la transition énergétique.",
        keywords: ["installation solaire", "Banon", "énergie renouvelable", "économies d'énergie"],
        images: [
          {
            url: "https://example.com/banon-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Banon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    simianelarotonde: {
      name: "Simiane-la-Rotonde",
      code: "04209",
      population: 600,
      neighborhoods: [
        "Village Historique",
        "La Rotonde",
        "Les Chalps",
        "Le Plan",
        "Les Crottes"
      ],
      localStatistics: {
        averageElectricityConsumption: "5100 kWh/an",
        solarPotential: "1330 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      solarAdvantages: [
        "Village perché avec exposition optimale",
        "Architecture médiévale adaptée au solaire",
        "Expertise en intégration patrimoniale",
        "Accompagnement spécialisé monuments historiques",
        "Solutions sur-mesure pour bâtiments anciens",
        "Forte sensibilité écologique"
      ],
      description: `Simiane-la-Rotonde, village médiéval de 600 habitants, allie patrimoine historique et innovation énergétique. Son architecture unique et sa position dominante offrent des opportunités exceptionnelles pour l'installation de panneaux solaires. La commune s'engage dans une transition énergétique respectueuse de son patrimoine, avec des solutions adaptées aux contraintes architecturales.`,
      seoTitle: 'Installation Panneaux Solaires Simiane-la-Rotonde (04150) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Simiane-la-Rotonde. Solutions adaptées au patrimoine historique, intégration architecturale soignée. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Simiane-la-Rotonde',
        'installation photovoltaïque 04150',
        'énergie solaire patrimoine',
        'installation solaire village historique',
        'aide panneaux solaires Simiane',
        'devis solaire Simiane-la-Rotonde',
        'MyOhm Technologies patrimoine'
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          comment: "Installation parfaitement intégrée au style architectural de la ville.",
          date: "2023-12-10",
          location: "Vieille ville"
        },
        {
          author: "Sophie D.",
          rating: 5,
          comment: "Service excellent et résultats au rendez-vous.",
          date: "2023-11-20",
          location: "Route de la Rotonde"
        }
      ],
      seo: {
        title: "Simiane-la-Rotonde : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Simiane-la-Rotonde. Alliance parfaite entre patrimoine historique et énergie moderne.",
        keywords: ["installation solaire", "Simiane-la-Rotonde", "énergie renouvelable", "patrimoine"],
        images: [
          {
            url: "https://example.com/simiane-la-rotonde-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Simiane-la-Rotonde"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintMichelObservatoire: {
      name: "Saint-Michel-l'Observatoire",
      code: "04192",
      population: 1200,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement optimal",
        "Réduction empreinte carbone",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Installation discrète",
        "Respect des normes astronomiques",
        "Performance garantie",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Jean-Luc F.",
          rating: 5,
          comment: "Installation respectueuse du site astronomique. Excellent travail !",
          date: "2023-12-05",
          location: "Près de l'Observatoire"
        },
        {
          author: "Claire M.",
          rating: 5,
          comment: "Service professionnel et installation soignée.",
          date: "2023-11-25",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Saint-Michel-l'Observatoire : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Saint-Michel-l'Observatoire. Conjuguez astronomie et énergie solaire.",
        keywords: ["installation solaire", "Saint-Michel-l'Observatoire", "énergie renouvelable", "astronomie"],
        images: [
          {
            url: "https://example.com/saint-michel-observatoire-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Saint-Michel-l'Observatoire"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    oraison: {
      name: "Oraison",
      code: "04143",
      population: 5800,
      sunshineHours: 2700,
      solarAdvantages: [
        "Climat méditerranéen favorable",
        "Fort potentiel solaire",
        "Économies importantes",
        "Valorisation immobilière"
      ],
      keyPoints: [
        "Installation rapide",
        "Équipements certifiés",
        "Suivi de production",
        "SAV réactif"
      ],
      reviews: [
        {
          author: "Michel B.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi. Production au top !",
          date: "2023-12-08",
          location: "Les Oliviers"
        },
        {
          author: "Anne S.",
          rating: 5,
          comment: "Équipe professionnelle et résultats conformes aux attentes.",
          date: "2023-11-28",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Oraison : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Oraison. Profitez du climat méditerranéen pour optimiser votre production d'énergie.",
        keywords: ["installation solaire", "Oraison", "énergie renouvelable", "méditerranée"],
        images: [
          {
            url: "https://example.com/oraison-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Oraison"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laBrillanne: {
      name: "La Brillanne",
      code: "04033",
      population: 900,
      neighborhoods: [
        "Centre Village",
        "Les Granges",
        "Le Plan d'Eau",
        "Les Jardins",
        "La Durance"
      ],
      localStatistics: {
        averageElectricityConsumption: "5300 kWh/an",
        solarPotential: "1345 kWh/kWc/an",
        co2Savings: "1.15 tonnes/an/installation"
      },
      solarAdvantages: [
        "Situation privilégiée dans la vallée de la Durance",
        "Ensoleillement optimal toute l'année",
        "Terrain plat facilitant l'installation",
        "Proximité des services techniques",
        "Accompagnement administratif renforcé",
        "Solutions adaptées aux maisons individuelles"
      ],
      description: `La Brillanne, commune de 900 habitants située dans la vallée de la Durance, bénéficie d'une exposition solaire exceptionnelle. Sa topographie favorable et son climat méditerranéen en font un lieu idéal pour l'installation de panneaux solaires. La commune encourage activement la transition énergétique avec des solutions adaptées à son territoire.`,
      seoTitle: 'Installation Panneaux Solaires La Brillanne (04700) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à La Brillanne. Profitez d\'une situation géographique optimale et d\'un accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires La Brillanne',
        'installation photovoltaïque 04700',
        'énergie solaire Durance',
        'installation solaire vallée',
        'aide panneaux solaires La Brillanne',
        'devis solaire La Brillanne',
        'MyOhm Technologies Durance'
      ],
      solarInstallation: defaultSolarInstallation
    },
    annot: {
      name: "Annot",
      code: "04008",
      population: 1100,
      solarAdvantages: [
        "Situation géographique favorable",
        "Ensoleillement important",
        "Économies substantielles",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation adaptée au terrain",
        "Équipements de qualité",
        "Maintenance préventive",
        "Assistance client"
      ],
      reviews: [
        {
          author: "François R.",
          rating: 5,
          comment: "Très satisfait de l'installation. L'équipe a su s'adapter au terrain.",
          date: "2023-12-07",
          location: "Vieux Village"
        },
        {
          author: "Catherine M.",
          rating: 5,
          comment: "Installation soignée et service client attentif.",
          date: "2023-11-27",
          location: "Les Grès"
        }
      ],
      seo: {
        title: "Annot : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Annot. Profitez d'une solution énergétique durable et économique.",
        keywords: ["installation solaire", "Annot", "énergie renouvelable", "montagne"],
        images: [
          {
            url: "https://example.com/annot-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Annot"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    chaudronNotreDame: {
      name: "Chaudon-Norante",
      code: "04058",
      population: 200,
      solarAdvantages: [
        "Exposition favorable",
        "Potentiel solaire élevé",
        "Réduction des coûts",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements fiables",
        "Suivi personnalisé",
        "Service de proximité"
      ],
      reviews: [
        {
          author: "Robert D.",
          rating: 5,
          comment: "Installation parfaite malgré un terrain difficile. Bravo !",
          date: "2023-12-03",
          location: "Le Village"
        },
        {
          author: "Marie-Claire P.",
          rating: 5,
          comment: "Très contente du service et des résultats.",
          date: "2023-11-23",
          location: "Route de Digne"
        }
      ],
      seo: {
        title: "Chaudon-Norante : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Chaudon-Norante. Optez pour une énergie propre et économique.",
        keywords: ["installation solaire", "Chaudon-Norante", "énergie renouvelable", "rural"],
        images: [
          {
            url: "https://example.com/chaudon-norante-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Chaudon-Norante"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    barreme: {
      name: "Barrême",
      code: "04022",
      population: 800,
      neighborhoods: [
        "Centre Village",
        "Les Clues",
        "Saint-Jean",
        "Le Plan",
        "Les Graves"
      ],
      localStatistics: {
        averageElectricityConsumption: "5100 kWh/an",
        solarPotential: "1315 kWh/kWc/an",
        co2Savings: "1.05 tonnes/an/installation"
      },
      solarAdvantages: [
        "Village de moyenne montagne bien exposé",
        "Climat favorable aux installations solaires",
        "Expertise en solutions adaptées à l'altitude",
        "Accompagnement technique personnalisé",
        "Support pour les démarches administratives",
        "Solutions résistantes aux conditions climatiques"
      ],
      description: `Barrême, village de 800 habitants niché dans la vallée de l'Asse, offre un cadre idéal pour l'énergie solaire. Son altitude moyenne et son exposition privilégiée permettent une production solaire optimale. La commune s'engage dans la transition énergétique avec des solutions adaptées aux spécificités de son territoire montagnard.`,
      seoTitle: 'Installation Panneaux Solaires Barrême (04330) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Barrême. Solutions adaptées au climat de moyenne montagne, accompagnement personnalisé. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Barrême',
        'installation photovoltaïque 04330',
        'énergie solaire moyenne montagne',
        'installation solaire Barrême',
        'aide panneaux solaires Barrême',
        'devis solaire Barrême',
        'MyOhm Technologies montagne'
      ],
      reviews: [
        {
          author: "Bernard M.",
          rating: 5,
          comment: "Installation impeccable et équipe très professionnelle.",
          date: "2023-12-10",
          location: "Centre-ville"
        },
        {
          author: "Sylvie P.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-20",
          location: "Route de Digne"
        }
      ],
      seo: {
        title: "Barrême : installation solaire pour particuliers et professionnels",
        metaDescription: "Découvrez les avantages de l'installation solaire à Barrême. Profitez d'un ensoleillement exceptionnel pour réduire vos factures d'énergie.",
        keywords: ["installation solaire", "Barrême", "énergie renouvelable", "panneaux solaires"],
        images: [
          {
            url: "https://example.com/barreme-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Barrême"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    digneLesBains: {
      name: "Digne-les-Bains",
      code: "04070",
      population: 16182,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Position géographique idéale",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Installation sur mesure adaptée à Digne-les-Bains",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          date: "2023-12-11",
          comment: "Installation de panneaux solaires parfaite. L'équipe a été très professionnelle, je recommande !",
          location: "Digne Centre"
        },
        {
          author: "Isabelle M.",
          rating: 5,
          date: "2023-11-24",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service impeccable du début à la fin.",
          location: "Digne Nord"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Digne-les-Bains (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Digne-les-Bains par un installateur certifié RGE. 2800h d'ensoleillement/an, devis gratuit !",
        keywords: [
          // Variations panneaux solaires (pluriel)
          "panneaux solaires digne les bains",
          "installation panneaux solaires digne les bains",
          "installateur panneaux solaires digne les bains",
          "aide panneaux solaires digne les bains",
          
          // Variations panneau solaire (singulier)
          "panneau solaire digne les bains",
          "installation panneau solaire digne les bains",
          "installateur panneau solaire digne les bains",
          
          // Variations photovoltaïque
          "installateur panneaux photovoltaïques digne les bains",
          "installation panneaux photovoltaiques digne les bains",
          "panneau photovoltaique digne les bains",
          
          // Variations avec "de"
          "installation de panneaux solaires digne les bains",
          "installation de panneau solaire digne les bains",
          "installateur de panneaux solaires digne les bains",
          "installateur de panneau solaire digne les bains",
          
          // Variations prix/devis
          "prix panneaux solaires digne les bains",
          "prix panneau solaire digne les bains",
          "devis panneaux solaires digne les bains",
          
          // Variations locales
          "energie solaire digne les bains",
          "pose panneaux solaires digne les bains",
          "entreprise solaire digne les bains"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Digne-les-Bains",
          "description": "Expert en installation de panneaux solaires à Digne-les-Bains. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Digne-les-Bains",
            "postalCode": "04000",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.0925",
            "longitude": "6.2356"
          },
          "url": "https://votresite.fr/digne-les-bains",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Digne-les-Bains ?",
            answer: "Le coût d'une installation de panneaux solaires à Digne-les-Bains varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Digne-les-Bains ?",
            answer: "Un bon installateur de panneaux solaires à Digne-les-Bains doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Digne-les-Bains ?",
            answer: "En tant qu'installateur local à Digne-les-Bains, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles aides sont disponibles pour l'installation de panneaux solaires à Digne-les-Bains ?",
            answer: "À Digne-les-Bains, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      }
    },
    barcelonnette: {
      name: "Barcelonnette",
      code: "04019",
      population: 2800,
      solarAdvantages: [
        "Exposition montagnarde idéale",
        "Rendement optimisé en altitude",
        "Économies substantielles",
        "Performance énergétique"
      ],
      keyPoints: [
        "Installation adaptée au climat montagnard",
        "Matériel résistant",
        "Suivi régulier",
        "Maintenance préventive"
      ],
      reviews: [
        {
          author: "Jean-Paul M.",
          rating: 5,
          comment: "Installation parfaite malgré les conditions montagnardes.",
          date: "2023-12-08",
          location: "Centre-ville"
        },
        {
          author: "Hélène R.",
          rating: 5,
          comment: "Excellent service, équipe compétente et professionnelle.",
          date: "2023-11-18",
          location: "Les Alpes"
        }
      ],
      seo: {
        title: "Barcelonnette : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Barcelonnette. Profitez des avantages de l'altitude pour votre installation.",
        keywords: ["installation solaire", "Barcelonnette", "énergie renouvelable", "montagne"],
        images: [
          {
            url: "https://example.com/barcelonnette-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Barcelonnette"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    selonnet: {
      name: "Selonnet",
      code: "04205",
      population: 500,
      neighborhoods: [
        "Chef-Lieu",
        "Chabanon",
        "Les Agneliers",
        "Le Forest",
        "Les Martels"
      ],
      localStatistics: {
        averageElectricityConsumption: "5000 kWh/an",
        solarPotential: "1300 kWh/kWc/an",
        co2Savings: "1.0 tonnes/an/installation"
      },
      solarAdvantages: [
        "Station de montagne bien exposée",
        "Expertise en installations haute altitude",
        "Solutions adaptées aux conditions hivernales",
        "Accompagnement technique spécialisé montagne",
        "Support pour les aides spécifiques altitude",
        "Technologies résistantes au climat alpin"
      ],
      description: `Selonnet, station de montagne de 500 habitants, combine tourisme hivernal et engagement environnemental. Son altitude et son exposition offrent un potentiel solaire remarquable malgré les conditions climatiques alpines. La commune propose des solutions adaptées aux contraintes de la haute montagne, avec une expertise particulière en installations résistantes au climat rigoureux.`,
      seoTitle: 'Installation Panneaux Solaires Selonnet (04140) | Expert Photovoltaïque MyOhm',
      seoDescription: 'Expert en installation solaire à Selonnet. Solutions haute altitude, technologies adaptées aux conditions alpines. Devis gratuit.',
      seoKeywords: [
        'panneaux solaires Selonnet',
        'installation photovoltaïque 04140',
        'énergie solaire haute montagne',
        'installation solaire station ski',
        'aide panneaux solaires Selonnet',
        'devis solaire Selonnet',
        'MyOhm Technologies alpin'
      ],
      solarInstallation: defaultSolarInstallation
    },
    sisteron: {
      name: "Sisteron",
      code: "04209",
      population: 7500,
      sunshineHours: 2650,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Situation géographique idéale",
        "Économies importantes",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation rapide",
        "Matériel haut de gamme",
        "Garanties étendues",
        "Service client premium"
      ],
      reviews: [
        {
          author: "Michel R.",
          rating: 5,
          comment: "Installation parfaite, équipe professionnelle et efficace.",
          date: "2023-12-14",
          location: "La Citadelle"
        },
        {
          author: "Christine M.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-28",
          location: "Centre historique"
        }
      ],
      seo: {
        title: "Sisteron : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Sisteron. Profitez d'un ensoleillement optimal pour votre transition énergétique.",
        keywords: ["installation solaire", "Sisteron", "énergie renouvelable", "citadelle"],
        images: [
          {
            url: "https://example.com/sisteron-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Sisteron"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    villeneuve: {
      name: "Villeneuve",
      code: "04242",
      population: 4000,
      solarAdvantages: [
        "Exposition solaire optimale",
        "Terrain favorable",
        "Rentabilité attractive",
        "Démarche durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements performants",
        "Suivi personnalisé",
        "SAV réactif"
      ],
      reviews: [
        {
          author: "Pierre L.",
          rating: 5,
          comment: "Installation soignée et équipe très professionnelle.",
          date: "2023-12-11",
          location: "Centre-ville"
        },
        {
          author: "Sophie G.",
          rating: 5,
          comment: "Service impeccable et résultats conformes aux attentes.",
          date: "2023-11-22",
          location: "Les Jardins"
        }
      ],
      seo: {
        title: "Villeneuve : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Villeneuve. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "Villeneuve", "énergie renouvelable", "économies"],
        images: [
          {
            url: "https://example.com/villeneuve-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Villeneuve"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    pierrevert: {
      name: "Pierrevert",
      code: "04152",
      population: 3800,
      solarAdvantages: [
        "Climat méditerranéen favorable",
        "Ensoleillement optimal",
        "Économies significatives",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation professionnelle",
        "Matériel certifié",
        "Maintenance préventive",
        "Support technique"
      ],
      reviews: [
        {
          author: "François P.",
          rating: 5,
          comment: "Excellent travail, équipe sérieuse et efficace.",
          date: "2023-12-09",
          location: "Le Golf"
        },
        {
          author: "Marie-Anne B.",
          rating: 5,
          comment: "Installation rapide et soignée, très satisfaite.",
          date: "2023-11-19",
          location: "Les Vignes"
        }
      ],
      seo: {
        title: "Pierrevert : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Pierrevert. Profitez du climat méditerranéen pour optimiser votre production.",
        keywords: ["installation solaire", "Pierrevert", "énergie renouvelable", "golf"],
        images: [
          {
            url: "https://example.com/pierrevert-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Pierrevert"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    cereste: {
      name: "Céreste",
      code: "04045",
      population: 1300,
      solarAdvantages: [
        "Position géographique idéale",
        "Fort potentiel solaire",
        "Rentabilité optimale",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation adaptée",
        "Équipements fiables",
        "Suivi régulier",
        "Service client attentif"
      ],
      reviews: [
        {
          author: "Jacques R.",
          rating: 5,
          comment: "Installation parfaite et équipe très professionnelle.",
          date: "2023-12-13",
          location: "Vieux Village"
        },
        {
          author: "Isabelle M.",
          rating: 5,
          comment: "Très satisfaite du service et du suivi.",
          date: "2023-11-24",
          location: "Route de Apt"
        }
      ],
      seo: {
        title: "Céreste : installation solaire pour particuliers et professionnels",
        metaDescription: "Solutions solaires adaptées à Céreste. Optez pour une énergie propre et économique.",
        keywords: ["installation solaire", "Céreste", "énergie renouvelable", "Luberon"],
        images: [
          {
            url: "https://example.com/cereste-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Céreste"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    volx: {
      name: "Volx",
      code: "04245",
      population: 3100,
      solarAdvantages: [
        "Ensoleillement exceptionnel",
        "Situation favorable",
        "Économies durables",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Matériel premium",
        "Suivi de production",
        "Assistance technique"
      ],
      reviews: [
        {
          author: "Robert L.",
          rating: 5,
          comment: "Service impeccable et installation soignée.",
          date: "2023-12-07",
          location: "Les Collines"
        },
        {
          author: "Martine P.",
          rating: 5,
          comment: "Très contente de l'installation et des économies réalisées.",
          date: "2023-11-17",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Volx : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Volx. Profitez d'un ensoleillement optimal pour réduire vos factures d'énergie.",
        keywords: ["installation solaire", "Volx", "énergie renouvelable", "économies"],
        images: [
          {
            url: "https://example.com/volx-solaire.jpg",
            width: 800,
            height: 600,
            alt: "Installation solaire à Volx"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    forcalquier: {
      name: "Forcalquier",
      code: "04088",
      population: 4921,
      sunshineHours: 2750,
      solarAdvantages: [
        "Ensoleillement provençal optimal",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Ville provençale adaptée au solaire",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Philippe B.",
          rating: 5,
          date: "2023-12-05",
          comment: "Installation parfaite, équipe professionnelle. Production solaire excellente.",
          location: "Forcalquier Centre"
        },
        {
          author: "Marie-Claire D.",
          rating: 5,
          date: "2023-11-18",
          comment: "Très satisfaite de l'installation. Service impeccable et rendement optimal.",
          location: "Les Chambarels"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Forcalquier (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Forcalquier. 2750h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire forcalquier",
          "installation panneau solaire forcalquier",
          "photovoltaique forcalquier",
          "installation photovoltaique forcalquier",
          "installateur photovoltaique forcalquier",
          "panneau photovoltaique forcalquier",
          "entreprise panneau solaire forcalquier",
          "prix installation panneaux solaires forcalquier"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Forcalquier",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Forcalquier",
            "postalCode": "04300",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Forcalquier ?",
            answer: "Le coût moyen d'une installation solaire à Forcalquier varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Forcalquier ?",
            answer: "Forcalquier bénéficie d'un excellent ensoleillement avec 2750 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement énergétique."
          },
          {
            question: "Quelles sont les aides disponibles à Forcalquier ?",
            answer: "À Forcalquier, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/forcalquier/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Forcalquier"
          },
          {
            url: "/images/cities/forcalquier/realisations-forcalquier.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Forcalquier"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "chateau-arnoux-saint-auban": {
      name: "Château-Arnoux-Saint-Auban",
      code: "04049",
      population: 5200,
      sunshineHours: 2750,
      heroImage: {
        url: '/images/regions/bg-chateau-arnoux.webp',
        alt: 'Vue panoramique de Château-Arnoux-Saint-Auban et de la vallée de la Durance'
      },
      solarAdvantages: [
        "Ensoleillement optimal de la vallée de la Durance",
        "Position géographique privilégiée",
        "Territoire engagé dans la transition énergétique",
        "Fort potentiel de production solaire"
      ],
      reviews: [
        {
          author: "Philippe D.",
          rating: 5,
          date: "2023-12-15",
          comment: "Installation parfaite, équipe très professionnelle. Je suis ravi de ma production d'énergie solaire.",
          location: "Centre-ville"
        },
        {
          author: "Sophie M.",
          rating: 5,
          date: "2023-11-28",
          comment: "Excellent suivi du projet, de l'étude à l'installation. Je recommande vivement.",
          location: "Saint-Auban"
        }
      ],
      neighborhoods: [
        "Centre-ville",
        "Saint-Auban",
        "Les Salettes",
        "La Casse",
        "Le Plan"
      ],
      localStatistics: {
        averageElectricityConsumption: "6200 kWh/an",
        solarPotential: "1320 kWh/kWc/an",
        co2Savings: "1.1 tonnes/an/installation"
      },
      seo: {
        title: "Installation Panneaux Solaires Château-Arnoux-Saint-Auban (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Château-Arnoux-Saint-Auban par un installateur certifié RGE. 2750h d'ensoleillement/an, devis gratuit !",
        keywords: [
          // Variations panneaux solaires
          "panneaux solaires chateau arnoux saint auban",
          "installation panneaux solaires chateau arnoux",
          "panneaux solaires saint auban",
          "installation photovoltaique chateau arnoux",
          
          // Variations géographiques
          "energie solaire chateau arnoux",
          "energie solaire saint auban",
          "installation solaire durance",
          
          // Variations techniques
          "installateur panneaux solaires 04160",
          "pose panneaux solaires chateau arnoux",
          "devis panneaux solaires saint auban"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Château-Arnoux-Saint-Auban",
          "description": "Expert en installation de panneaux solaires à Château-Arnoux-Saint-Auban. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Château-Arnoux-Saint-Auban",
            "postalCode": "04160",
            "addressRegion": "Alpes-de-Haute-Provence",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.0833",
            "longitude": "6.0000"
          },
          "url": "https://votresite.fr/chateau-arnoux-saint-auban",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        }
      },
      regulations: [
        {
          title: "Zone de Protection",
          description: "Certaines zones de la commune sont soumises à des restrictions spécifiques. Consultez la mairie pour connaître les zones éligibles à l'installation de panneaux solaires.",
          icon: "MapPinIcon"
        },
        {
          title: "Réglementation Thermique",
          description: "Les installations doivent respecter les normes RT2012 et les spécifications du PLU local concernant l'intégration des panneaux solaires.",
          icon: "DocumentCheckIcon"
        },
        {
          title: "Normes de Sécurité",
          description: "Installation conforme aux normes NF C 15-100 et validation obligatoire par un bureau de contrôle pour la sécurité incendie.",
          icon: "ShieldCheckIcon"
        }
      ]
    },
    "saint-andre-les-alpes": {
      name: "Saint-André-les-Alpes",
      code: "04173",
      population: 1000,
      sunshineHours: 2700,
      solarAdvantages: [
        "Ensoleillement favorable avec 2700 heures par an",
        "Situation géographique idéale en altitude",
        "Territoire engagé dans la transition énergétique",
        "Subventions locales attractives",
        "Réseau d'installateurs qualifiés"
      ],
      neighborhoods: [
        "Centre-ville",
        "Le Plan",
        "Les Iscles",
        "La Gare",
        "Les Granges"
      ],
      solarInstallation: defaultSolarInstallation,
      seo: {
        title: "Installation Panneaux Solaires Saint-André-les-Alpes (04) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Saint-André-les-Alpes par un installateur certifié RGE. 2700h d'ensoleillement/an, devis gratuit !",
        keywords: [
          "panneaux solaires Saint-André-les-Alpes",
          "installation solaire Saint-André-les-Alpes",
          "énergie solaire Saint-André-les-Alpes",
          "installateur panneaux solaires Saint-André-les-Alpes",
          "pose panneaux solaires Saint-André-les-Alpes",
          "devis panneaux solaires Saint-André-les-Alpes",
          "prix panneaux solaires Saint-André-les-Alpes"
        ]
      }
    }
  }
};

export default alpesDeHauteProvence;
