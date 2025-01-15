import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const bouchesdurhone: Department = {
  name: "Bouches-du-Rhône",
  code: "13",
  coverImage: {
    url: "/images/departments/bouches-du-rhone-cover.jpg",
    alt: "Vue aérienne de Marseille et de la Méditerranée avec installations solaires"
  },
  cities: {
    "marseille": {
      name: "Marseille",
      code: "13055",
      population: 863310,
      sunshineHours: 2850,
      heroImage: {
        url: '/images/regions/bg-marseille.webp',
        alt: 'Vue panoramique de Marseille et de Notre-Dame de la Garde'
      },
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Installation sur mesure adaptée à Marseille",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Service après-vente réactif"
      ],
      reviews: [
        {
          author: "Thomas R.",
          rating: 5,
          date: "2023-12-20",
          comment: "Installation de panneaux solaires parfaite dans le 13008. Équipe très professionnelle, je recommande !",
          location: "Marseille 8ème"
        },
        {
          author: "Sophie M.",
          rating: 5,
          date: "2023-11-28",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service impeccable du début à la fin.",
          location: "Marseille 12ème"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Marseille (13) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Marseille par un installateur certifié RGE. 2800h d'ensoleillement/an, devis gratuit !",
        keywords: [
          "panneaux solaires marseille",
          "installation panneaux solaires marseille",
          "installateur panneaux solaires marseille",
          "aide panneaux solaires marseille",
          "panneau solaire marseille",
          "installation panneau solaire marseille",
          "installateur panneau solaire marseille",
          "panneaux solaires marseille 13008",
          "panneaux solaires marseille 13009",
          "panneaux solaires marseille 13012",
          "installateur panneaux photovoltaïques marseille",
          "installation panneaux photovoltaiques marseille",
          "panneau photovoltaique marseille",
          "installation de panneaux solaires marseille",
          "installation de panneau solaire marseille",
          "installateur de panneaux solaires marseille",
          "installateur de panneau solaire marseille",
          "prix panneaux solaires marseille",
          "prix panneau solaire marseille",
          "devis panneaux solaires marseille"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Marseille",
          "description": "Expert en installation de panneaux solaires à Marseille. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marseille",
            "postalCode": "13000",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.2965",
            "longitude": "5.3698"
          },
          "url": "https://votresite.fr/marseille",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Marseille ?",
            answer: "Le coût d'une installation de panneaux solaires à Marseille varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Marseille ?",
            answer: "Un bon installateur de panneaux solaires à Marseille doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Marseille ?",
            answer: "En tant qu'installateur local à Marseille, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles aides sont disponibles pour l'installation de panneaux solaires à Marseille ?",
            answer: "À Marseille, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "aix-en-provence": {
      name: "Aix-en-Provence",
      code: "13001",
      population: 143097,
      sunshineHours: 2800,
      description: "Expert RGE en installation de panneaux solaires à Aix-en-Provence. Plus de 500 installations réalisées, certification QualiPV et garantie décennale. Profitez d'un ensoleillement exceptionnel de 2800h/an et des aides locales pour votre projet solaire.",
      heroImage: {
        url: '/images/installation-de-panneaux-solaire-aix-en-provence.jpeg',
        alt: 'Installation de panneaux solaires à Aix-en-Provence par un expert RGE'
      },
      realisations: {
        title: "Nos réalisations de panneaux solaires à Aix-en-Provence",
        description: "Découvrez nos installations de panneaux solaires réalisées à Aix-en-Provence par nos experts certifiés RGE. Chaque projet est unique et adapté aux besoins spécifiques de nos clients.",
        images: [
          {
            url: '/images/installateur-de-panneaux-photovoltaiques-aix-en-provence.jpeg',
            alt: 'Installation professionnelle de panneaux photovoltaïques à Aix-en-Provence'
          },
          {
            url: '/images/installateur-rge-panneaux-solaire.jpeg',
            alt: 'Installateur RGE de panneaux solaires en action à Aix-en-Provence'
          },
          {
            url: '/images/installation-de-panneaux-solaire-aix-en-provence.jpeg',
            alt: 'Réalisation d\'une installation solaire complète à Aix-en-Provence'
          },
          {
            url: '/images/realisation-panneaux-solaire-aix-en-provence.jpeg',
            alt: 'Projet solaire terminé à Aix-en-Provence par notre équipe RGE'
          }
        ]
      },
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal avec 2800h/an",
        "Installation par des experts certifiés RGE",
        "Accompagnement personnalisé de A à Z",
        "Garantie décennale et suivi de production",
        "Aides locales et régionales avantageuses",
        "Retour sur investissement optimisé"
      ],
      keyPoints: [
        "Installation sur mesure par des experts RGE",
        "Expertise locale reconnue depuis 10 ans",
        "Aides régionales attractives jusqu'à 8000€",
        "Service après-vente premium"
      ],
      reviews: [
        {
          author: "Laurent P.",
          rating: 5,
          date: "2023-12-18",
          comment: "Installation de panneaux solaires impeccable par cette équipe RGE. Très professionnel du début à la fin, je recommande !",
          location: "Aix Centre"
        },
        {
          author: "Marie S.",
          rating: 5,
          date: "2023-11-30",
          comment: "Très satisfaite de mon installation. L'équipe certifiée RGE a fait un travail remarquable avec un excellent suivi.",
          location: "Aix Nord"
        }
      ],
      seo: {
        title: "Installateur Panneaux Solaires RGE Aix-en-Provence | Expert Certifié 2025",
        metaDescription: "✓ Installateur de panneaux solaires certifié RGE à Aix-en-Provence. 10 ans d'expertise, 500+ installations réussies, certification QualiPV. Devis gratuit personnalisé !",
        keywords: [
          // Variations RGE
          "installateur panneaux solaires RGE aix en provence",
          "installation panneaux solaires RGE aix en provence",
          "artisan RGE panneaux solaires aix en provence",
          "entreprise RGE solaire aix en provence",
          
          // Variations panneaux solaires (pluriel)
          "panneaux solaires aix en provence",
          "installation panneaux solaires aix en provence",
          "installateur panneaux solaires aix en provence",
          "pose panneaux solaires aix en provence",
          
          // Variations photovoltaïque
          "installation photovoltaique aix en provence",
          "installateur photovoltaique aix en provence",
          "panneaux photovoltaiques aix en provence",
          
          // Variations prix et devis
          "prix panneaux solaires aix en provence",
          "devis panneaux solaires aix en provence",
          "cout installation solaire aix en provence",
          
          // Variations géographiques
          "panneaux solaires 13100",
          "installation solaire bouches du rhone",
          "energie solaire aix en provence"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires RGE Aix-en-Provence",
          "description": "Expert certifié RGE en installation de panneaux solaires à Aix-en-Provence. Plus de 500 installations réussies, certification QualiPV et garantie décennale. Devis gratuit et personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Aix-en-Provence",
            "postalCode": "13100",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.5297",
            "longitude": "5.4474"
          },
          "url": "https://votresite.fr/aix-en-provence",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "43.5297",
              "longitude": "5.4474"
            },
            "geoRadius": "30000"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          },
          "priceRange": "€€€",
          "image": "/images/regions/bg-aix-en-provence.webp"
        },
        faqSchema: [
          {
            question: "Pourquoi choisir un installateur RGE pour ses panneaux solaires à Aix-en-Provence ?",
            answer: "Un installateur RGE (Reconnu Garant de l'Environnement) à Aix-en-Provence vous garantit une installation de qualité et l'accès aux aides de l'État comme MaPrimeRénov'. Notre certification RGE et QualiPV, associée à plus de 500 installations réussies, vous assure un travail professionnel et conforme aux normes."
          },
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Aix-en-Provence ?",
            answer: "Le coût d'une installation de panneaux solaires à Aix-en-Provence varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié RGE, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quelles sont les aides disponibles pour l'installation de panneaux solaires à Aix-en-Provence ?",
            answer: "À Aix-en-Provence, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov' (jusqu'à 4000€), la prime à l'autoconsommation (jusqu'à 380€/kWc), l'éco-PTZ (jusqu'à 50000€), et les aides régionales PACA. En tant qu'installateur RGE, nous vous accompagnons dans toutes vos démarches."
          },
          {
            question: "Combien de temps faut-il pour installer des panneaux solaires à Aix-en-Provence ?",
            answer: "En tant qu'installateur RGE local à Aix-en-Provence, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude technique, les démarches administratives et l'obtention des aides, est d'environ 2-3 mois."
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "arles": {
      name: "Arles",
      code: "13004",
      population: 52857,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement méditerranéen exceptionnel",
        "Position géographique privilégiée",
        "Climat favorable toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Ville historique adaptée au solaire",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "Jean-Marc P.",
          rating: 5,
          date: "2023-12-15",
          comment: "Installation impeccable, équipe très professionnelle. Production optimale grâce à l'excellent ensoleillement.",
          location: "Arles Centre"
        },
        {
          author: "Catherine L.",
          rating: 5,
          date: "2023-11-28",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service client au top et rendement excellent.",
          location: "Trinquetaille"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Arles (13) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Arles par un installateur certifié RGE. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire arles",
          "installation panneau solaire arles",
          "photovoltaique arles",
          "installation photovoltaique arles",
          "installateur photovoltaique arles",
          "panneau photovoltaique arles",
          "entreprise panneau solaire arles",
          "prix installation panneaux solaires arles"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Arles",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Arles",
            "postalCode": "13200",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Arles ?",
            answer: "Le coût moyen d'une installation solaire à Arles varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Arles ?",
            answer: "Arles bénéficie d'un ensoleillement exceptionnel avec 2800 heures de soleil par an, ce qui en fait un lieu idéal pour l'installation de panneaux solaires avec un excellent rendement."
          },
          {
            question: "Quelles aides sont disponibles à Arles ?",
            answer: "À Arles, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales des Bouches-du-Rhône. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/arles/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Arles"
          },
          {
            url: "/images/cities/arles/realisations-arles.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Arles"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "martigues": {
      name: "Martigues",
      code: "13056",
      population: 49021,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position côtière idéale pour l'ensoleillement",
        "Zone industrielle avec fort potentiel solaire",
        "Climat méditerranéen optimal",
        "Politique énergétique favorable"
      ],
      keyPoints: [
        "Ville industrielle en transition énergétique",
        "Fort potentiel de toitures industrielles",
        "Accompagnement technique local",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Laurent D.",
          rating: 4.8,
          date: "2023-09-15",
          comment: "Installation professionnelle sur notre maison à Martigues. Excellent suivi.",
          location: "Martigues Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Martigues (13) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Martigues. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          // Variations panneaux solaires (pluriel)
          "panneaux solaires martigues",
          "installation panneaux solaires martigues",
          "installateur panneaux solaires martigues",
          "aide panneaux solaires martigues",
          
          // Variations panneau solaire (singulier)
          "panneau solaire martigues",
          "installation panneau solaire martigues",
          "installateur panneau solaire martigues",
          
          // Variations photovoltaïque
          "installateur panneaux photovoltaïques martigues",
          "installation panneaux photovoltaiques martigues",
          "panneau photovoltaique martigues",
          
          // Variations avec "de"
          "installation de panneaux solaires martigues",
          "installation de panneau solaire martigues",
          "installateur de panneaux solaires martigues",
          "installateur de panneau solaire martigues",
          
          // Variations prix/devis
          "prix panneaux solaires martigues",
          "prix panneau solaire martigues",
          "devis panneaux solaires martigues"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Martigues",
          "description": "Expert en installation de panneaux solaires à Martigues. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Martigues",
            "postalCode": "13500",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.4062",
            "longitude": "5.0486"
          },
          "url": "https://votresite.fr/martigues",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Martigues ?",
            answer: "Le coût d'une installation de panneaux solaires à Martigues varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Martigues ?",
            answer: "Un bon installateur de panneaux solaires à Martigues doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Martigues ?",
            answer: "En tant qu'installateur local à Martigues, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles aides sont disponibles pour l'installation de panneaux solaires à Martigues ?",
            answer: "À Martigues, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Martigues",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "8 200 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 800 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "23 000 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Martigues Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire industrielle et résidentielle",
            experience: "12 ans d'expérience"
          }
        ]
      }
    },
    "aubagne": {
      name: "Aubagne",
      code: "13005",
      population: 46124,
      sunshineHours: 2750,
      solarAdvantages: [
        "Situation géographique privilégiée",
        "Ensoleillement optimal toute l'année",
        "Territoire adapté aux installations solaires",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Ville en développement durable",
        "Expertise locale disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Marie F.",
          rating: 4.7,
          date: "2023-10-12",
          comment: "Très satisfaite de notre installation. Production conforme aux prévisions.",
          location: "Aubagne Est"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Aubagne (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Aubagne. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Aubagne", "installation solaire 13", "photovoltaïque Aubagne"],
        images: [
          {
            url: "/images/cities/aubagne-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Aubagne"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Aubagne",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "8 100 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 500 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Aubagne Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "salon-de-provence": {
      name: "Salon-de-Provence",
      code: "13103",
      population: 46225,
      sunshineHours: 2800,
      heroImage: {
        url: '/images/regions/bg-salon-de-provence.webp',
        alt: 'Vue panoramique de Salon-de-Provence et de son château'
      },
      solarAdvantages: [
        "Excellent ensoleillement annuel",
        "Zone favorable aux installations solaires",
        "Politique locale encourageante",
        "Territoire adapté"
      ],
      keyPoints: [
        "Ville historique avec zones adaptées",
        "Support technique local",
        "Rentabilité attractive",
        "Aides spécifiques"
      ],
      reviews: [
        {
          author: "Michel R.",
          rating: 5,
          date: "2023-12-15",
          comment: "Installation de panneaux solaires parfaite. L'équipe a été très professionnelle, je recommande !",
          location: "Salon Centre"
        },
        {
          author: "Claire D.",
          rating: 5,
          date: "2023-11-28",
          comment: "Très satisfaite de mon installateur de panneaux solaires. Service impeccable du début à la fin.",
          location: "Salon Nord"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Salon-de-Provence (13) | Expert Certifié RGE 2025",
        metaDescription: "✓ Installation de panneaux solaires à Salon-de-Provence par un installateur certifié RGE. 2800h d'ensoleillement/an, devis gratuit !",
        keywords: [
          // Variations panneaux solaires (pluriel)
          "panneaux solaires salon de provence",
          "installation panneaux solaires salon de provence",
          "installateur panneaux solaires salon de provence",
          "aide panneaux solaires salon de provence",
          
          // Variations panneau solaire (singulier)
          "panneau solaire salon de provence",
          "installation panneau solaire salon de provence",
          "installateur panneau solaire salon de provence",
          
          // Variations courtes
          "panneaux solaires salon",
          "panneau solaire salon",
          "installation solaire salon",
          
          // Variations photovoltaïque
          "installateur panneaux photovoltaïques salon de provence",
          "installation panneaux photovoltaiques salon de provence",
          "panneau photovoltaique salon de provence",
          
          // Variations avec "de"
          "installation de panneaux solaires salon de provence",
          "installation de panneau solaire salon de provence",
          "installateur de panneaux solaires salon de provence",
          "installateur de panneau solaire salon de provence",
          
          // Variations prix/devis
          "prix panneaux solaires salon de provence",
          "prix panneau solaire salon de provence",
          "devis panneaux solaires salon de provence"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Salon-de-Provence",
          "description": "Expert en installation de panneaux solaires à Salon-de-Provence. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Salon-de-Provence",
            "postalCode": "13300",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.6426",
            "longitude": "5.0943"
          },
          "url": "https://votresite.fr/salon-de-provence",
          "telephone": "+33400000000",
          "openingHours": "Mo-Fr 09:00-18:00"
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation de panneaux solaires à Salon-de-Provence ?",
            answer: "Le coût d'une installation de panneaux solaires à Salon-de-Provence varie entre 8000€ et 15000€ selon la surface et la puissance. En tant qu'installateur certifié, nous vous aidons à obtenir toutes les aides disponibles qui peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Comment choisir son installateur de panneaux solaires à Salon-de-Provence ?",
            answer: "Un bon installateur de panneaux solaires à Salon-de-Provence doit être certifié RGE, avoir une expérience prouvée et proposer un service complet : étude personnalisée, installation professionnelle et suivi après-vente. Notre équipe répond à tous ces critères avec plus de 500 installations réussies dans la région."
          },
          {
            question: "Quel est le délai pour installer des panneaux solaires à Salon-de-Provence ?",
            answer: "En tant qu'installateur local à Salon-de-Provence, nous réalisons l'installation complète en 2 à 3 jours après validation du projet. Le délai total, incluant l'étude et les démarches administratives, est d'environ 2-3 mois."
          },
          {
            question: "Quelles aides sont disponibles pour l'installation de panneaux solaires à Salon-de-Provence ?",
            answer: "À Salon-de-Provence, vous pouvez bénéficier de plusieurs aides : MaPrimeRénov', la prime à l'autoconsommation, l'éco-PTZ, et les aides régionales PACA. Le montant total des aides peut atteindre jusqu'à 7500€ selon votre situation."
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "istres": {
      name: "Istres",
      code: "13047",
      population: 43463,
      sunshineHours: 2800,
      solarAdvantages: [
        "Territoire propice aux installations solaires",
        "Ensoleillement exceptionnel",
        "Zone industrielle avec fort potentiel",
        "Politique énergétique favorable"
      ],
      keyPoints: [
        "Ville moderne en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 4.8,
          date: "2023-10-18",
          comment: "Installation impeccable, équipe professionnelle. Très satisfait du rendement.",
          location: "Istres Nord"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Istres (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Istres. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Istres", "installation solaire 13", "photovoltaïque Istres"],
        images: [
          {
            url: "/images/cities/istres-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Istres"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Istres",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "8 000 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 500 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 800 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation et matériel inclus",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Istres Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle et industrielle",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "la-ciotat": {
      name: "La Ciotat",
      code: "13028",
      population: 35758,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position côtière idéale",
        "Ensoleillement optimal",
        "Territoire adapté aux installations solaires",
        "Politique locale favorable"
      ],
      keyPoints: [
        "Ville balnéaire en développement durable",
        "Support technique disponible",
        "Rentabilité attractive",
        "Aides spécifiques"
      ],
      reviews: [
        {
          author: "Sophie M.",
          rating: 4.9,
          date: "2023-09-25",
          comment: "Excellente expérience avec l'installateur. Production solaire au-delà de nos attentes.",
          location: "La Ciotat Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à La Ciotat (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à La Ciotat. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires La Ciotat", "installation solaire 13", "photovoltaïque La Ciotat"],
        images: [
          {
            url: "/images/cities/la-ciotat-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à La Ciotat"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à La Ciotat",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "8 100 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 600 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "La Ciotat Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "vitrolles": {
      name: "Vitrolles",
      code: "13117",
      population: 33919,
      sunshineHours: 2750,
      solarAdvantages: [
        "Zone industrielle avec fort potentiel",
        "Ensoleillement méditerranéen optimal",
        "Territoire propice aux installations solaires",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Ville industrielle en transition énergétique",
        "Expertise technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Marc L.",
          rating: 4.7,
          date: "2023-11-08",
          comment: "Installation rapide et professionnelle. Excellent suivi post-installation.",
          location: "Vitrolles Sud"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Vitrolles (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Vitrolles. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Vitrolles", "installation solaire 13", "photovoltaïque Vitrolles"],
        images: [
          {
            url: "/images/cities/vitrolles-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Vitrolles"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Vitrolles",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Vitrolles Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire industrielle et résidentielle",
            experience: "11 ans d'expérience"
          }
        ]
      }
    },
    "marignane": {
      name: "Marignane",
      code: "13054",
      population: 33793,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position géographique favorable",
        "Fort ensoleillement annuel",
        "Zone aéroportuaire avec potentiel solaire",
        "Politique énergétique innovante"
      ],
      keyPoints: [
        "Ville aéronautique en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "Jean-Paul M.",
          rating: 4.8,
          date: "2023-10-22",
          comment: "Installation professionnelle, équipe réactive et compétente.",
          location: "Marignane Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Marignane (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Marignane. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Marignane", "installation solaire 13", "photovoltaïque Marignane"],
        images: [
          {
            url: "/images/cities/marignane-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Marignane"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Marignane",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 950 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 400 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 600 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Marignane Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle et industrielle",
            experience: "9 ans d'expérience"
          }
        ]
      }
    },
    "miramas": {
      name: "Miramas",
      code: "13063",
      population: 26515,
      sunshineHours: 2800,
      solarAdvantages: [
        "Territoire adapté aux installations solaires",
        "Ensoleillement optimal",
        "Zone résidentielle propice",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Ville en développement durable",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Claire D.",
          rating: 4.7,
          date: "2023-09-30",
          comment: "Très satisfaite de l'installation. Équipe professionnelle et efficace.",
          location: "Miramas Ouest"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Miramas (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Miramas. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Miramas", "installation solaire 13", "photovoltaïque Miramas"],
        images: [
          {
            url: "/images/cities/miramas-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Miramas"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Miramas",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 800 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 100 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Miramas Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "7 ans d'expérience"
          }
        ]
      }
    },
    "les-pennes-mirabeau": {
      name: "Les Pennes-Mirabeau",
      code: "13071",
      population: 21835,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Commune dynamique en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Michel B.",
          rating: 4.9,
          date: "2023-11-12",
          comment: "Installation parfaite, suivi impeccable. Très content du rendement.",
          location: "Les Pennes Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires aux Pennes-Mirabeau (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires aux Pennes-Mirabeau. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Pennes-Mirabeau", "installation solaire 13", "photovoltaïque Pennes-Mirabeau"],
        images: [
          {
            url: "/images/cities/les-pennes-mirabeau-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire aux Pennes-Mirabeau"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire aux Pennes-Mirabeau",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 400 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Pennes Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "allauch": {
      name: "Allauch",
      code: "13002",
      population: 21146,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position en hauteur idéale",
        "Ensoleillement exceptionnel",
        "Territoire propice aux installations solaires",
        "Politique environnementale favorable"
      ],
      keyPoints: [
        "Village provençal en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "Antoine R.",
          rating: 4.9,
          date: "2023-10-28",
          comment: "Installation parfaite, équipe très professionnelle. Excellent rendement.",
          location: "Allauch Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Allauch (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Allauch. Profitez de l'ensoleillement optimal des collines pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Allauch", "installation solaire 13", "photovoltaïque Allauch"],
        images: [
          {
            url: "/images/cities/allauch-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Allauch"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Allauch",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Allauch Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "gardanne": {
      name: "Gardanne",
      code: "13041",
      population: 20705,
      sunshineHours: 2800,
      solarAdvantages: [
        "Ensoleillement méditerranéen optimal",
        "Position géographique favorable",
        "Climat idéal toute l'année",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Ville en transition énergétique",
        "Expertise locale reconnue",
        "Aides régionales attractives",
        "Installation personnalisée"
      ],
      reviews: [
        {
          author: "Patrick L.",
          rating: 5,
          date: "2023-12-12",
          comment: "Installation très professionnelle. Excellent suivi et rendement conforme aux prévisions.",
          location: "Gardanne Centre"
        },
        {
          author: "Sylvie D.",
          rating: 5,
          date: "2023-11-28",
          comment: "Très satisfaite de l'installation. Équipe sérieuse et à l'écoute.",
          location: "Gardanne Sud"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Gardanne (13) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Gardanne. 2800h d'ensoleillement/an, installation certifiée RGE. Profitez des aides locales ! Devis gratuit.",
        keywords: [
          "panneau solaire gardanne",
          "installation panneau solaire gardanne",
          "photovoltaique gardanne",
          "installation photovoltaique gardanne",
          "installateur photovoltaique gardanne",
          "panneau photovoltaique gardanne",
          "entreprise panneau solaire gardanne",
          "prix installation panneaux solaires gardanne"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Gardanne",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gardanne",
            "postalCode": "13120",
            "addressRegion": "Bouches-du-Rhône",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Gardanne ?",
            answer: "Le coût moyen d'une installation solaire à Gardanne varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 50%."
          },
          {
            question: "Quel est le potentiel solaire à Gardanne ?",
            answer: "Gardanne bénéficie d'un excellent ensoleillement avec 2800 heures de soleil par an, ce qui garantit une production optimale d'énergie solaire tout au long de l'année."
          },
          {
            question: "Quelles aides sont disponibles à Gardanne ?",
            answer: "À Gardanne, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, et départementales. Les économies peuvent atteindre jusqu'à 7500€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/gardanne/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Gardanne"
          },
          {
            url: "/images/cities/gardanne/realisations-gardanne.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Gardanne"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    "chateauneuf-les-martigues": {
      name: "Châteauneuf-les-Martigues",
      code: "13026",
      population: 18042,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position côtière avantageuse",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Commune littorale en développement durable",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Patrick L.",
          rating: 4.7,
          date: "2023-11-15",
          comment: "Installation rapide et soignée. Excellent suivi du projet.",
          location: "Châteauneuf Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Châteauneuf-les-Martigues (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Châteauneuf-les-Martigues. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Châteauneuf-les-Martigues", "installation solaire 13", "photovoltaïque Châteauneuf"],
        images: [
          {
            url: "/images/cities/chateauneuf-les-martigues-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Châteauneuf-les-Martigues"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Châteauneuf-les-Martigues",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 600 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Châteauneuf Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle",
            experience: "9 ans d'expérience"
          }
        ]
      }
    },
    "chateaurenard": {
      name: "Châteaurenard",
      code: "13027",
      population: 15839,
      sunshineHours: 2800,
      solarAdvantages: [
        "Territoire agricole avec fort potentiel",
        "Ensoleillement provençal optimal",
        "Zone rurale adaptée",
        "Politique locale favorable"
      ],
      keyPoints: [
        "Ville agricole en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "Robert M.",
          rating: 4.8,
          date: "2023-10-05",
          comment: "Installation professionnelle sur notre exploitation agricole. Excellent rendement.",
          location: "Châteaurenard Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Châteaurenard (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Châteaurenard. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Châteaurenard", "installation solaire 13", "photovoltaïque Châteaurenard"],
        images: [
          {
            url: "/images/cities/chateaurenard-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Châteaurenard"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Châteaurenard",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 800 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 100 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 400 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Châteaurenard Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire agricole et résidentielle",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "port-de-bouc": {
      name: "Port-de-Bouc",
      code: "13077",
      population: 17207,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position portuaire stratégique",
        "Ensoleillement méditerranéen optimal",
        "Zone industrialo-portuaire adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Ville portuaire en développement durable",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Marie-Claire D.",
          rating: 4.7,
          date: "2023-09-18",
          comment: "Très satisfaite de l'installation. Équipe professionnelle et efficace.",
          location: "Port-de-Bouc Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Port-de-Bouc (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Port-de-Bouc. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Port-de-Bouc", "installation solaire 13", "photovoltaïque Port-de-Bouc"],
        images: [
          {
            url: "/images/cities/port-de-bouc-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Port-de-Bouc"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Port-de-Bouc",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 850 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 200 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Port-de-Bouc Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "fos-sur-mer": {
      name: "Fos-sur-Mer",
      code: "13039",
      population: 15821,
      sunshineHours: 2800,
      solarAdvantages: [
        "Zone industrialo-portuaire majeure",
        "Ensoleillement méditerranéen optimal",
        "Fort potentiel de grandes installations",
        "Politique énergétique favorable"
      ],
      keyPoints: [
        "Ville industrielle en transition énergétique",
        "Expertise technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Laurent B.",
          rating: 4.9,
          date: "2023-11-02",
          comment: "Installation impeccable sur notre entrepôt. Production au-delà des attentes.",
          location: "Fos-sur-Mer Zone Industrielle"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Fos-sur-Mer (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Fos-sur-Mer. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Fos-sur-Mer", "installation solaire 13", "photovoltaïque Fos"],
        images: [
          {
            url: "/images/cities/fos-sur-mer-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Fos-sur-Mer"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Fos-sur-Mer",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Fos Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire industrielle et résidentielle",
            experience: "11 ans d'expérience"
          }
        ]
      }
    },
    "tarascon": {
      name: "Tarascon",
      code: "13108",
      population: 15128,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position stratégique en Provence",
        "Ensoleillement exceptionnel",
        "Zone historique adaptée",
        "Politique environnementale favorable"
      ],
      keyPoints: [
        "Ville historique en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "François L.",
          rating: 4.8,
          date: "2023-10-15",
          comment: "Installation parfaite, respectueuse du patrimoine historique. Excellent rendement.",
          location: "Tarascon Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Tarascon (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Tarascon. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Tarascon", "installation solaire 13", "photovoltaïque Tarascon"],
        images: [
          {
            url: "/images/cities/tarascon-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Tarascon"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Tarascon",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 800 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 100 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 400 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Tarascon Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle",
            experience: "9 ans d'expérience"
          }
        ]
      }
    },
    "bouc-bel-air": {
      name: "Bouc-Bel-Air",
      code: "13015",
      population: 14931,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position géographique privilégiée",
        "Ensoleillement optimal",
        "Zone résidentielle adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Commune résidentielle en développement durable",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Sophie V.",
          rating: 4.9,
          date: "2023-09-28",
          comment: "Très satisfaite de l'installation. Service impeccable et production optimale.",
          location: "Bouc-Bel-Air Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Bouc-Bel-Air (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Bouc-Bel-Air. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Bouc-Bel-Air", "installation solaire 13", "photovoltaïque Bouc-Bel-Air"],
        images: [
          {
            url: "/images/cities/bouc-bel-air-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Bouc-Bel-Air"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Bouc-Bel-Air",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Bouc Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "berre-letang": {
      name: "Berre-l'Étang",
      code: "13014",
      population: 13654,
      sunshineHours: 2800,
      solarAdvantages: [
        "Zone industrielle avec fort potentiel",
        "Ensoleillement méditerranéen optimal",
        "Territoire propice aux installations",
        "Politique énergétique favorable"
      ],
      keyPoints: [
        "Ville industrielle en transition énergétique",
        "Expertise technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Pierre D.",
          rating: 4.7,
          date: "2023-11-08",
          comment: "Installation rapide et professionnelle. Excellent suivi du projet.",
          location: "Berre Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Berre-l'Étang (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Berre-l'Étang. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Berre-l'Étang", "installation solaire 13", "photovoltaïque Berre"],
        images: [
          {
            url: "/images/cities/berre-letang-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Berre-l'Étang"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Berre-l'Étang",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 850 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 200 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Berre Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire industrielle et résidentielle",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "saint-martin-de-crau": {
      name: "Saint-Martin-de-Crau",
      code: "13097",
      population: 13557,
      sunshineHours: 2800,
      solarAdvantages: [
        "Vaste territoire avec fort potentiel",
        "Ensoleillement exceptionnel",
        "Zone rurale adaptée",
        "Politique environnementale favorable"
      ],
      keyPoints: [
        "Commune agricole en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimale"
      ],
      reviews: [
        {
          author: "Jean-Marc P.",
          rating: 4.8,
          date: "2023-10-20",
          comment: "Installation parfaite sur notre exploitation. Production solaire excellente.",
          location: "Saint-Martin Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Saint-Martin-de-Crau (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Saint-Martin-de-Crau. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Saint-Martin-de-Crau", "installation solaire 13", "photovoltaïque Saint-Martin"],
        images: [
          {
            url: "/images/cities/saint-martin-de-crau-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Saint-Martin-de-Crau"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Saint-Martin-de-Crau",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 800 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 100 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 400 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Saint-Martin Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire agricole et résidentielle",
            experience: "9 ans d'expérience"
          }
        ]
      }
    },
    "rognac": {
      name: "Rognac",
      code: "13081",
      population: 12587,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Ville en développement durable",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Marie T.",
          rating: 4.7,
          date: "2023-09-15",
          comment: "Très satisfaite de l'installation. Service professionnel et efficace.",
          location: "Rognac Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Rognac (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Rognac. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Rognac", "installation solaire 13", "photovoltaïque Rognac"],
        images: [
          {
            url: "/images/cities/rognac-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Rognac"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Rognac",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 850 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 200 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Rognac Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "7 ans d'expérience"
          }
        ]
      }
    },
    "saint-remy-de-provence": {
      name: "Saint-Rémy-de-Provence",
      code: "13100",
      population: 9893,
      sunshineHours: 2800,
      solarAdvantages: [
        "Cadre historique préservé",
        "Ensoleillement provençal optimal",
        "Zone touristique adaptée",
        "Politique patrimoniale favorable"
      ],
      keyPoints: [
        "Village provençal en transition énergétique",
        "Expertise technique locale",
        "Accompagnement personnalisé",
        "Rentabilité optimisée"
      ],
      reviews: [
        {
          author: "Philippe B.",
          rating: 4.9,
          date: "2023-11-10",
          comment: "Installation respectueuse du patrimoine. Excellent rendement solaire.",
          location: "Saint-Rémy Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Saint-Rémy-de-Provence (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Saint-Rémy-de-Provence. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Saint-Rémy", "installation solaire 13", "photovoltaïque Saint-Rémy-de-Provence"],
        images: [
          {
            url: "/images/cities/saint-remy-de-provence-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Saint-Rémy-de-Provence"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Saint-Rémy-de-Provence",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Saint-Rémy Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en installation solaire résidentielle",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "plan-de-cuques": {
      name: "Plan-de-Cuques",
      code: "13075",
      population: 11090,
      sunshineHours: 2800,
      solarAdvantages: [
        "Position privilégiée près de Marseille",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Politique locale favorable"
      ],
      keyPoints: [
        "Commune résidentielle en développement durable",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Catherine M.",
          rating: 4.8,
          date: "2023-10-25",
          comment: "Installation soignée et professionnelle. Très satisfaite du résultat.",
          location: "Plan-de-Cuques Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Plan-de-Cuques (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Plan-de-Cuques. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Plan-de-Cuques", "installation solaire 13", "photovoltaïque Plan-de-Cuques"],
        images: [
          {
            url: "/images/cities/plan-de-cuques-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Plan-de-Cuques"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Plan-de-Cuques",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 300 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Prix tout compris",
            "Garanties incluses",
            "Support technique local"
          ],
          ctaText: "Obtenir un devis"
        },
        installers: [
          {
            name: "Plan-de-Cuques Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    }
  }
};

export default bouchesdurhone;
