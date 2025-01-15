import { Department } from "@/types/departments";
import { defaultSolarInstallationData as defaultSolarInstallation } from "../default-solar-installation";

const hautesAlpes: Department = {
  name: "Hautes-Alpes",
  code: "05",
  coverImage: {
    url: "/images/departments/hautes-alpes-cover.jpg",
    alt: "Montagnes enneigées des Hautes-Alpes avec panneaux solaires",
  },
  cities: {
    gap: {
      name: "Gap",
      code: "05061",
      population: 40761,
      sunshineHours: 2700,
      solarAdvantages: [
        "Ensoleillement alpin exceptionnel",
        "Position géographique privilégiée",
        "Climat montagnard favorable",
        "Fort potentiel de production"
      ],
      keyPoints: [
        "Ville alpine adaptée au solaire",
        "Expertise locale reconnue",
        "Aides régionales majorées",
        "Installation sur mesure"
      ],
      reviews: [
        {
          author: "François D.",
          rating: 5,
          date: "2023-12-12",
          comment: "Installation parfaite, équipe professionnelle. Production solaire excellente même en altitude.",
          location: "Gap Centre"
        },
        {
          author: "Marie-Hélène R.",
          rating: 5,
          date: "2023-11-25",
          comment: "Très satisfaite de l'installation. Service impeccable et rendement optimal.",
          location: "Les Fauvins"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires Gap (05) | Expert Certifié RGE 2025",
        metaDescription: "✓ Expert installation panneaux solaires à Gap. 2700h d'ensoleillement/an, installation certifiée RGE adaptée au climat alpin. Profitez des aides majorées ! Devis gratuit.",
        keywords: [
          "panneau solaire gap",
          "installation panneau solaire gap",
          "photovoltaique gap",
          "installation photovoltaique gap",
          "installateur photovoltaique gap",
          "panneau photovoltaique gap",
          "entreprise panneau solaire gap",
          "prix installation panneaux solaires gap"
        ],
        localBusiness: {
          "@type": "LocalBusiness",
          "name": "Installation Panneaux Solaires Gap",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gap",
            "postalCode": "05000",
            "addressRegion": "Hautes-Alpes",
            "addressCountry": "FR"
          }
        },
        faqSchema: [
          {
            question: "Quel est le coût d'une installation solaire à Gap ?",
            answer: "Le coût moyen d'une installation solaire à Gap varie entre 8000€ et 15000€. Les aides régionales PACA et départementales peuvent réduire ce coût jusqu'à 60% grâce au bonus montagne."
          },
          {
            question: "Quel est le potentiel solaire à Gap ?",
            answer: "Gap bénéficie d'un excellent ensoleillement avec 2700 heures de soleil par an. Sa position en altitude favorise un rendement optimal des panneaux solaires grâce à un air plus pur et des températures plus fraîches."
          },
          {
            question: "Quelles sont les aides disponibles à Gap ?",
            answer: "À Gap, vous pouvez bénéficier des aides nationales (MaPrimeRénov'), régionales PACA, du bonus montagne et des aides départementales. Les économies peuvent atteindre jusqu'à 8000€ sur votre installation."
          }
        ],
        images: [
          {
            url: "/images/cities/gap/installation-solaire-1.jpg",
            width: 1200,
            height: 630,
            alt: "Installation panneaux solaires à Gap"
          },
          {
            url: "/images/cities/gap/realisations-gap.jpg",
            width: 800,
            height: 600,
            alt: "Réalisations panneaux solaires Gap"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    briancon: {
      name: "Briançon",
      code: "05023",
      population: 10561,
      sunshineHours: 2550,
      solarAdvantages: [
        "Plus haute ville d'Europe",
        "Ensoleillement optimal en altitude",
        "Performance accrue par le froid",
        "Réflexion solaire amplifiée"
      ],
      keyPoints: [
        "Installation haute montagne",
        "Matériel résistant au gel",
        "Suivi technique régulier",
        "Maintenance adaptée"
      ],
      reviews: [
        {
          author: "Jean-Marc B.",
          rating: 5,
          comment: "Installation parfaitement adaptée aux conditions de haute montagne.",
          date: "2023-12-05",
          location: "Vieille Ville"
        },
        {
          author: "Sophie L.",
          rating: 5,
          comment: "Excellent rendement même en conditions hivernales.",
          date: "2023-11-20",
          location: "Cité Vauban"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Briançon",
          description: "Installation de 10 panneaux solaires sur maison de montagne",
          date: "2023-12-15",
          power: "5 kWc",
          location: "Quartier Sainte-Catherine",
          details: [
            "Installation optimisée pour conditions de montagne",
            "Production annuelle estimée : 6000 kWh",
            "Économies annuelles estimées : 1200€",
            "Réduction des émissions CO2 : 1.2 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Briançon : installation solaire en haute montagne",
        metaDescription: "Solutions solaires adaptées à Briançon. Profitez des avantages de l'altitude pour votre installation photovoltaïque.",
        keywords: ["installation solaire", "Briançon", "haute montagne", "énergie solaire"],
        images: [
          {
            url: "/images/cities/briancon-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Briançon"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    embrun: {
      name: "Embrun",
      code: "05046",
      population: 6404,
      sunshineHours: 2500,
      solarAdvantages: [
        "Climat méditerranéen d'altitude",
        "Exposition optimale",
        "Vue sur le lac de Serre-Ponçon",
        "Rendement solaire excellent"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements haute qualité",
        "Garantie montagne",
        "Support technique local"
      ],
      reviews: [
        {
          author: "Pierre D.",
          rating: 5,
          comment: "Installation impeccable avec une vue imprenable sur le lac.",
          date: "2023-12-08",
          location: "Centre historique"
        },
        {
          author: "Claire M.",
          rating: 5,
          comment: "Service professionnel et résultats au-delà des attentes.",
          date: "2023-11-25",
          location: "Quartier du Plan d'Eau"
        }
      ],
      seo: {
        title: "Embrun : installation solaire avec vue sur Serre-Ponçon",
        metaDescription: "Installation solaire à Embrun. Profitez du climat méditerranéen d'altitude pour optimiser votre production.",
        keywords: ["installation solaire", "Embrun", "Serre-Ponçon", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/embrun-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Embrun"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    laragneMonteglin: {
      name: "Laragne-Montéglin",
      code: "05070",
      population: 3585,
      sunshineHours: 2600,
      solarAdvantages: [
        "Climat favorable",
        "Exposition sud optimale",
        "Terrain adapté",
        "Rentabilité assurée"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Matériel certifié",
        "Suivi production",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Michel R.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-12-12",
          location: "Centre-ville"
        },
        {
          author: "Anne S.",
          rating: 5,
          comment: "Équipe professionnelle et efficace.",
          date: "2023-11-28",
          location: "Montéglin"
        },
        {
          author: "Pierre D.",
          rating: 5,
          comment: "Très satisfait de l'installation, équipe professionnelle.",
          date: "2023-12-01",
          location: "Centre-ville"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à La Bâtie-Neuve",
          description: "Installation de 8 panneaux solaires sur maison individuelle",
          date: "2023-12-10",
          power: "4 kWc",
          location: "Quartier des Vergers",
          details: [
            "Installation résidentielle performante",
            "Production annuelle estimée : 4800 kWh",
            "Économies annuelles estimées : 960€",
            "Réduction des émissions CO2 : 1 tonne/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        },
        {
          title: "Installation résidentielle à Laragne-Montéglin",
          description: "Installation de 8 panneaux solaires sur villa moderne",
          date: "2023-12-12",
          power: "4 kWc",
          location: "Quartier des Jardins",
          details: [
            "Installation résidentielle optimisée",
            "Production annuelle estimée : 4800 kWh",
            "Économies annuelles estimées : 960€",
            "Réduction des émissions CO2 : 1 tonne/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Laragne-Montéglin : installation solaire pour tous",
        metaDescription: "Installation solaire à Laragne-Montéglin. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "Laragne-Montéglin", "énergie renouvelable", "économies"],
        images: [
          {
            url: "/images/cities/laragne-monteglin-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Laragne-Montéglin"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    veynes: {
      name: "Veynes",
      code: "05179",
      population: 3238,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement optimal",
        "Économies importantes",
        "Impact écologique positif"
      ],
      keyPoints: [
        "Installation rapide",
        "Équipements performants",
        "Suivi technique",
        "Service client réactif"
      ],
      reviews: [
        {
          author: "François L.",
          rating: 5,
          comment: "Installation parfaite et équipe professionnelle.",
          date: "2023-12-07",
          location: "Centre-ville"
        },
        {
          author: "Marie-Claire D.",
          rating: 5,
          comment: "Très satisfaite du service et des économies réalisées.",
          date: "2023-11-22",
          location: "Quartier de la Gare"
        }
      ],
      seo: {
        title: "Veynes : installation solaire pour particuliers et professionnels",
        metaDescription: "Installation solaire à Veynes. Profitez d'un ensoleillement optimal pour réduire vos factures d'énergie.",
        keywords: ["installation solaire", "Veynes", "énergie renouvelable", "panneaux solaires"],
        images: [
          {
            url: "/images/cities/veynes-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Veynes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    chorges: {
      name: "Chorges",
      code: "05040",
      population: 3065,
      solarAdvantages: [
        "Vue sur le lac de Serre-Ponçon",
        "Exposition sud privilégiée",
        "Climat favorable",
        "Rentabilité optimale"
      ],
      keyPoints: [
        "Installation adaptée au terrain",
        "Matériel haute performance",
        "Suivi personnalisé",
        "Maintenance préventive"
      ],
      reviews: [
        {
          author: "Philippe M.",
          rating: 5,
          comment: "Installation parfaite avec vue sur le lac. Excellent travail !",
          date: "2023-12-13",
          location: "Les Balcons du Lac"
        },
        {
          author: "Catherine L.",
          rating: 5,
          comment: "Service professionnel et résultats impressionnants.",
          date: "2023-11-28",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Chorges : installation solaire avec vue sur Serre-Ponçon",
        metaDescription: "Installation solaire à Chorges. Profitez d'une exposition exceptionnelle pour optimiser votre production.",
        keywords: ["installation solaire", "Chorges", "Serre-Ponçon", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/chorges-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Chorges"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    batieNeuve: {
      name: "La Bâtie-Neuve",
      code: "05017",
      population: 2595,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement optimal",
        "Économies importantes",
        "Impact écologique positif"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements haute qualité",
        "Suivi production",
        "Service client réactif"
      ],
      reviews: [
        {
          author: "Jean-Paul R.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi technique.",
          date: "2023-12-11",
          location: "Centre-village"
        },
        {
          author: "Marie-Hélène D.",
          rating: 5,
          comment: "Installation soignée et équipe professionnelle.",
          date: "2023-11-26",
          location: "Les Vergers"
        },
        {
          author: "Thomas R.",
          rating: 5,
          comment: "Installation rapide et soignée, excellent suivi.",
          date: "2023-12-02",
          location: "Centre-ville"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à La Bâtie-Neuve",
          description: "Installation de 8 panneaux solaires sur maison individuelle",
          date: "2023-12-10",
          power: "4 kWc",
          location: "Quartier des Vergers",
          details: [
            "Installation résidentielle performante",
            "Production annuelle estimée : 4800 kWh",
            "Économies annuelles estimées : 960€",
            "Réduction des émissions CO2 : 1 tonne/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "La Bâtie-Neuve : installation solaire pour tous",
        metaDescription: "Installation solaire à La Bâtie-Neuve. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "La Bâtie-Neuve", "énergie renouvelable", "économies"],
        images: [
          {
            url: "/images/cities/batie-neuve-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à La Bâtie-Neuve"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    tallard: {
      name: "Tallard",
      code: "05170",
      population: 2312,
      solarAdvantages: [
        "Climat favorable",
        "Exposition optimale",
        "Rentabilité attractive",
        "Cadre historique"
      ],
      keyPoints: [
        "Installation respectueuse du patrimoine",
        "Matériel haute qualité",
        "Garantie décennale",
        "Support technique"
      ],
      reviews: [
        {
          author: "Bernard L.",
          rating: 5,
          comment: "Installation parfaitement intégrée au style architectural.",
          date: "2023-12-09",
          location: "Près du Château"
        },
        {
          author: "Sylvie P.",
          rating: 5,
          comment: "Excellent service et bon suivi technique.",
          date: "2023-11-24",
          location: "Centre historique"
        }
      ],
      seo: {
        title: "Tallard : installation solaire dans un cadre historique",
        metaDescription: "Installation solaire à Tallard. Alliance parfaite entre patrimoine et modernité énergétique.",
        keywords: ["installation solaire", "Tallard", "château", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/tallard-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Tallard"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    guillestre: {
      name: "Guillestre",
      code: "05065",
      population: 2292,
      solarAdvantages: [
        "Ensoleillement montagnard",
        "Position stratégique",
        "Économies substantielles",
        "Performance énergétique"
      ],
      keyPoints: [
        "Installation haute montagne",
        "Équipements adaptés",
        "Suivi régulier",
        "Maintenance spécialisée"
      ],
      reviews: [
        {
          author: "Michel B.",
          rating: 5,
          comment: "Installation parfaite malgré les conditions montagnardes.",
          date: "2023-12-12",
          location: "Centre-ville"
        },
        {
          author: "Anne-Marie F.",
          rating: 5,
          comment: "Très satisfaite du service et de la production.",
          date: "2023-11-27",
          location: "Route du Queyras"
        }
      ],
      seo: {
        title: "Guillestre : installation solaire en montagne",
        metaDescription: "Solutions solaires adaptées à Guillestre. Profitez des avantages de l'altitude pour votre installation.",
        keywords: ["installation solaire", "Guillestre", "montagne", "Queyras"],
        images: [
          {
            url: "/images/cities/guillestre-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Guillestre"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    argentiereBessee: {
      name: "L'Argentière-la-Bessée",
      code: "05006",
      population: 2267,
      solarAdvantages: [
        "Exposition montagnarde idéale",
        "Rendement optimisé",
        "Économies importantes",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation adaptée à l'altitude",
        "Matériel résistant",
        "Suivi technique",
        "Service client local"
      ],
      reviews: [
        {
          author: "Pierre V.",
          rating: 5,
          comment: "Installation réussie et production excellente même en hiver.",
          date: "2023-12-10",
          location: "Centre-ville"
        },
        {
          author: "Marie-Claude B.",
          rating: 5,
          comment: "Excellent service et installation soignée.",
          date: "2023-11-25",
          location: "Quartier de la Mine"
        },
        {
          author: "Michel L.",
          rating: 5,
          comment: "Installation industrielle parfaite, résultats au-delà des attentes.",
          date: "2023-12-03",
          location: "Zone Industrielle"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à L'Argentière-la-Bessée",
          description: "Installation de 14 panneaux solaires sur chalet",
          date: "2023-12-08",
          power: "7 kWc",
          location: "Quartier des Alpes",
          details: [
            "Installation résidentielle haute performance",
            "Production annuelle estimée : 8400 kWh",
            "Économies annuelles estimées : 1680€",
            "Réduction des émissions CO2 : 1.7 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "L'Argentière-la-Bessée : installation solaire en altitude",
        metaDescription: "Installation solaire à L'Argentière-la-Bessée. Profitez des avantages de la haute montagne.",
        keywords: ["installation solaire", "L'Argentière-la-Bessée", "montagne", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/argentiere-la-bessee-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à L'Argentière-la-Bessée"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintBonnetChampsaur: {
      name: "Saint-Bonnet-en-Champsaur",
      code: "05132",
      population: 2080,
      solarAdvantages: [
        "Exposition vallée du Champsaur",
        "Ensoleillement optimal",
        "Rendement élevé",
        "Impact environnemental positif"
      ],
      keyPoints: [
        "Installation montagne",
        "Matériel adapté",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Jacques M.",
          rating: 5,
          comment: "Installation parfaite et équipe très professionnelle.",
          date: "2023-12-14",
          location: "Centre-bourg"
        },
        {
          author: "Françoise D.",
          rating: 5,
          comment: "Excellent service et bon suivi technique.",
          date: "2023-11-29",
          location: "Route du Champsaur"
        }
      ],
      seo: {
        title: "Saint-Bonnet-en-Champsaur : installation solaire en montagne",
        metaDescription: "Installation solaire à Saint-Bonnet-en-Champsaur. Profitez des avantages du Champsaur pour votre production.",
        keywords: ["installation solaire", "Saint-Bonnet-en-Champsaur", "Champsaur", "montagne"],
        images: [
          {
            url: "/images/cities/saint-bonnet-champsaur-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Saint-Bonnet-en-Champsaur"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    rocheArnauds: {
      name: "La Roche-des-Arnauds",
      code: "05123",
      population: 1626,
      solarAdvantages: [
        "Position géographique favorable",
        "Ensoleillement de qualité",
        "Économies importantes",
        "Solution durable"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Équipements certifiés",
        "Suivi technique",
        "Service après-vente"
      ],
      reviews: [
        {
          author: "Robert L.",
          rating: 5,
          comment: "Très satisfait de l'installation et du rendement.",
          date: "2023-12-13",
          location: "Centre-village"
        },
        {
          author: "Martine B.",
          rating: 5,
          comment: "Service professionnel et résultats au rendez-vous.",
          date: "2023-11-28",
          location: "Les Arnauds"
        }
      ],
      seo: {
        title: "La Roche-des-Arnauds : installation solaire pour tous",
        metaDescription: "Installation solaire à La Roche-des-Arnauds. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "La Roche-des-Arnauds", "énergie renouvelable", "économies"],
        images: [
          {
            url: "/images/cities/roche-des-arnauds-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à La Roche-des-Arnauds"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintChaffrey: {
      name: "Saint-Chaffrey",
      code: "05133",
      population: 1515,
      solarAdvantages: [
        "Altitude favorable",
        "Exposition optimale",
        "Performance accrue",
        "Rentabilité attractive"
      ],
      keyPoints: [
        "Installation haute montagne",
        "Matériel résistant",
        "Suivi régulier",
        "Support technique"
      ],
      reviews: [
        {
          author: "Paul R.",
          rating: 5,
          comment: "Installation parfaite malgré l'altitude. Excellent travail !",
          date: "2023-12-12",
          location: "Serre Chevalier"
        },
        {
          author: "Sophie M.",
          rating: 5,
          comment: "Très satisfaite du service et de la production.",
          date: "2023-11-27",
          location: "Centre-station"
        },
        {
          author: "Claire M.",
          rating: 5,
          comment: "Installation parfaite pour notre gîte de montagne.",
          date: "2023-12-04",
          location: "Hameau du Soleil"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Saint-Chaffrey",
          description: "Installation de 6 panneaux solaires sur maison de montagne",
          date: "2023-12-13",
          power: "3 kWc",
          location: "Hameau du Soleil",
          details: [
            "Installation résidentielle montagne",
            "Production annuelle estimée : 3600 kWh",
            "Économies annuelles estimées : 720€",
            "Réduction des émissions CO2 : 0.8 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Saint-Chaffrey : installation solaire en altitude",
        metaDescription: "Installation solaire à Saint-Chaffrey. Profitez des avantages de la haute montagne.",
        keywords: ["installation solaire", "Saint-Chaffrey", "Serre Chevalier", "montagne"],
        images: [
          {
            url: "/images/cities/saint-chaffrey-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Saint-Chaffrey"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    villarSaintPancrace: {
      name: "Villar-Saint-Pancrace",
      code: "05183",
      population: 1449,
      solarAdvantages: [
        "Exposition montagnarde",
        "Ensoleillement optimal",
        "Économies substantielles",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation adaptée",
        "Équipements premium",
        "Suivi production",
        "Maintenance préventive"
      ],
      reviews: [
        {
          author: "Jean-Claude P.",
          rating: 5,
          comment: "Installation réussie et production excellente.",
          date: "2023-12-11",
          location: "Centre-village"
        },
        {
          author: "Marie-Pierre L.",
          rating: 5,
          comment: "Service impeccable et résultats conformes.",
          date: "2023-11-26",
          location: "Route de Briançon"
        }
      ],
      seo: {
        title: "Villar-Saint-Pancrace : installation solaire en montagne",
        metaDescription: "Installation solaire à Villar-Saint-Pancrace. Optimisez votre production en altitude.",
        keywords: ["installation solaire", "Villar-Saint-Pancrace", "montagne", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/villar-saint-pancrace-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Villar-Saint-Pancrace"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saulce: {
      name: "La Saulce",
      code: "05161",
      population: 1387,
      solarAdvantages: [
        "Position stratégique",
        "Ensoleillement favorable",
        "Rentabilité optimale",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Matériel certifié",
        "Suivi technique",
        "Service client"
      ],
      reviews: [
        {
          author: "Michel D.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-12-10",
          location: "Centre-ville"
        },
        {
          author: "Christine B.",
          rating: 5,
          comment: "Service professionnel et installation soignée.",
          date: "2023-11-25",
          location: "Route de Gap"
        }
      ],
      seo: {
        title: "La Saulce : installation solaire pour tous",
        metaDescription: "Installation solaire à La Saulce. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "La Saulce", "énergie renouvelable", "économies"],
        images: [
          {
            url: "/images/cities/la-saulce-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à La Saulce"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    valBuechMeouge: {
      name: "Val Buëch-Méouge",
      code: "05139",
      population: 1319,
      solarAdvantages: [
        "Exposition vallée du Buëch",
        "Ensoleillement optimal",
        "Rentabilité attractive",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation adaptée",
        "Matériel performant",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Philippe R.",
          rating: 5,
          comment: "Installation parfaite et équipe professionnelle.",
          date: "2023-12-09",
          location: "Ribiers"
        },
        {
          author: "Marie-Thérèse L.",
          rating: 5,
          comment: "Très satisfaite du service et des résultats.",
          date: "2023-11-24",
          location: "Antonaves"
        },
        {
          author: "Antoine P.",
          rating: 5,
          comment: "Installation impeccable sur notre maison de village.",
          date: "2023-12-05",
          location: "Centre Village"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Val Buëch-Méouge",
          description: "Installation de 6 panneaux solaires sur maison de village",
          date: "2023-12-11",
          power: "3 kWc",
          location: "Centre Village",
          details: [
            "Installation résidentielle compacte",
            "Production annuelle estimée : 3600 kWh",
            "Économies annuelles estimées : 720€",
            "Réduction des émissions CO2 : 0.8 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Val Buëch-Méouge : installation solaire en vallée",
        metaDescription: "Installation solaire à Val Buëch-Méouge. Profitez des avantages de la vallée du Buëch.",
        keywords: ["installation solaire", "Val Buëch-Méouge", "Buëch", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/val-buech-meouge-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Val Buëch-Méouge"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    serres: {
      name: "Serres",
      code: "05166",
      population: 1297,
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement favorable",
        "Économies importantes",
        "Solution durable"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi technique",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "Jean-Pierre M.",
          rating: 5,
          comment: "Installation soignée et équipe très compétente.",
          date: "2023-12-08",
          location: "Centre-ville"
        },
        {
          author: "Catherine D.",
          rating: 5,
          comment: "Service excellent et résultats probants.",
          date: "2023-11-23",
          location: "Route de Gap"
        }
      ],
      seo: {
        title: "Serres : installation solaire pour tous",
        metaDescription: "Installation solaire à Serres. Optimisez votre consommation énergétique.",
        keywords: ["installation solaire", "Serres", "énergie renouvelable", "économies"],
        images: [
          {
            url: "/images/cities/serres-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Serres"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    chateaurouxAlpes: {
      name: "Châteauroux-les-Alpes",
      code: "05036",
      population: 1212,
      solarAdvantages: [
        "Vue sur l'Embrunais",
        "Exposition optimale",
        "Rendement élevé",
        "Impact écologique"
      ],
      keyPoints: [
        "Installation montagne",
        "Matériel adapté",
        "Suivi production",
        "Support technique"
      ],
      reviews: [
        {
          author: "Laurent V.",
          rating: 5,
          comment: "Très satisfait de l'installation et du rendement.",
          date: "2023-12-07",
          location: "Centre-village"
        },
        {
          author: "Sylvie R.",
          rating: 5,
          comment: "Service professionnel et installation soignée.",
          date: "2023-11-22",
          location: "Les Côtes"
        }
      ],
      seo: {
        title: "Châteauroux-les-Alpes : installation solaire en montagne",
        metaDescription: "Installation solaire à Châteauroux-les-Alpes. Profitez d'une vue exceptionnelle et d'une énergie propre.",
        keywords: ["installation solaire", "Châteauroux-les-Alpes", "montagne", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/chateauroux-les-alpes-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Châteauroux-les-Alpes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    crots: {
      name: "Crots",
      code: "05044",
      population: 1136,
      solarAdvantages: [
        "Vue sur Serre-Ponçon",
        "Exposition favorable",
        "Rentabilité optimale",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Matériel haute qualité",
        "Suivi régulier",
        "Service client"
      ],
      reviews: [
        {
          author: "Bernard C.",
          rating: 5,
          comment: "Installation parfaite avec vue sur le lac.",
          date: "2023-12-06",
          location: "Les Balcons du Lac"
        },
        {
          author: "Monique L.",
          rating: 5,
          comment: "Très satisfaite du service et de la production.",
          date: "2023-11-21",
          location: "Centre-village"
        },
        {
          author: "Sophie B.",
          rating: 5,
          comment: "Installation collective réussie, économies significatives.",
          date: "2023-12-06",
          location: "Les Terrasses du Lac"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Crots",
          description: "Installation de 16 panneaux solaires sur villa moderne",
          date: "2023-12-09",
          power: "8 kWc",
          location: "Les Terrasses du Lac",
          details: [
            "Installation résidentielle moderne",
            "Production annuelle estimée : 9600 kWh",
            "Économies annuelles estimées : 1920€",
            "Réduction des émissions CO2 : 2 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Crots : installation solaire avec vue sur Serre-Ponçon",
        metaDescription: "Installation solaire à Crots. Profitez d'une vue exceptionnelle sur le lac de Serre-Ponçon.",
        keywords: ["installation solaire", "Crots", "Serre-Ponçon", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/crots-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Crots"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    vallouisePelvoux: {
      name: "Vallouise-Pelvoux",
      code: "05175",
      population: 1132,
      solarAdvantages: [
        "Cadre montagnard exceptionnel",
        "Exposition optimale",
        "Performance accrue",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation haute montagne",
        "Équipements résistants",
        "Suivi technique",
        "Maintenance adaptée"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          comment: "Installation parfaite malgré les conditions montagnardes.",
          date: "2023-12-05",
          location: "Vallouise"
        },
        {
          author: "Anne-Marie B.",
          rating: 5,
          comment: "Service excellent et rendement optimal.",
          date: "2023-11-20",
          location: "Pelvoux"
        }
      ],
      seo: {
        title: "Vallouise-Pelvoux : installation solaire en haute montagne",
        metaDescription: "Installation solaire à Vallouise-Pelvoux. Profitez des avantages de la haute montagne.",
        keywords: ["installation solaire", "Vallouise-Pelvoux", "haute montagne", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/vallouise-pelvoux-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Vallouise-Pelvoux"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    saintJeanSaintNicolas: {
      name: "Saint-Jean-Saint-Nicolas",
      code: "05145",
      population: 1075,
      solarAdvantages: [
        "Exposition Champsaur",
        "Ensoleillement optimal",
        "Économies durables",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation montagne",
        "Matériel adapté",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Michel P.",
          rating: 5,
          comment: "Installation réussie et production excellente.",
          date: "2023-12-04",
          location: "Saint-Jean"
        },
        {
          author: "Claire D.",
          rating: 5,
          comment: "Service professionnel et résultats conformes.",
          date: "2023-11-19",
          location: "Saint-Nicolas"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Saint-Jean-Saint-Nicolas",
          description: "Installation de 10 panneaux solaires sur maison traditionnelle",
          date: "2023-12-15",
          power: "5 kWc",
          location: "Quartier Saint-Nicolas",
          details: [
            "Installation résidentielle optimisée",
            "Production annuelle estimée : 6000 kWh",
            "Économies annuelles estimées : 1200€",
            "Réduction des émissions CO2 : 1.2 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Saint-Jean-Saint-Nicolas : installation solaire en montagne",
        metaDescription: "Installation solaire à Saint-Jean-Saint-Nicolas. Profitez des avantages du Champsaur.",
        keywords: ["installation solaire", "Saint-Jean-Saint-Nicolas", "Champsaur", "montagne"],
        images: [
          {
            url: "/images/cities/saint-jean-saint-nicolas-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Saint-Jean-Saint-Nicolas"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    savinesLeLac: {
      name: "Savines-le-Lac",
      code: "05164",
      population: 1095,
      solarAdvantages: [
        "Vue imprenable sur Serre-Ponçon",
        "Position privilégiée",
        "Rendement optimal",
        "Impact écologique"
      ],
      keyPoints: [
        "Installation sur mesure",
        "Équipements certifiés",
        "Suivi technique",
        "Maintenance régulière"
      ],
      reviews: [
        {
          author: "François B.",
          rating: 5,
          comment: "Installation parfaite avec vue sur le lac.",
          date: "2023-12-03",
          location: "Les Eygoires"
        },
        {
          author: "Marie-Claude P.",
          rating: 5,
          comment: "Très satisfaite du service et de la production.",
          date: "2023-11-18",
          location: "Centre-ville"
        },
        {
          author: "Marc D.",
          rating: 5,
          comment: "Installation parfaite pour notre camping, clients ravis.",
          date: "2023-12-07",
          location: "Camping du Lac"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Savines-le-Lac",
          description: "Installation de 12 panneaux solaires sur maison avec vue lac",
          date: "2023-12-07",
          power: "6 kWc",
          location: "Quartier du Lac",
          details: [
            "Installation résidentielle optimisée",
            "Production annuelle estimée : 7200 kWh",
            "Économies annuelles estimées : 1440€",
            "Réduction des émissions CO2 : 1.5 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Savines-le-Lac : installation solaire avec vue sur le lac",
        metaDescription: "Installation solaire à Savines-le-Lac. Profitez d'une vue exceptionnelle sur Serre-Ponçon.",
        keywords: ["installation solaire", "Savines-le-Lac", "Serre-Ponçon", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/savines-le-lac-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Savines-le-Lac"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    monetierLesBains: {
      name: "Le Monêtier-les-Bains",
      code: "05079",
      population: 1013,
      solarAdvantages: [
        "Altitude favorable",
        "Exposition optimale",
        "Performance accrue",
        "Solution durable"
      ],
      keyPoints: [
        "Installation haute montagne",
        "Matériel résistant",
        "Suivi production",
        "Support technique"
      ],
      reviews: [
        {
          author: "Jean-Luc M.",
          rating: 5,
          comment: "Installation parfaite malgré l'altitude.",
          date: "2023-12-02",
          location: "Centre-station"
        },
        {
          author: "Sophie T.",
          rating: 5,
          comment: "Service excellent et rendement optimal.",
          date: "2023-11-17",
          location: "Les Grands Bains"
        }
      ],
      seo: {
        title: "Le Monêtier-les-Bains : installation solaire en altitude",
        metaDescription: "Installation solaire au Monêtier-les-Bains. Profitez des avantages de la haute montagne.",
        keywords: ["installation solaire", "Le Monêtier-les-Bains", "Serre Chevalier", "montagne"],
        images: [
          {
            url: "/images/cities/monetier-les-bains-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires au Monêtier-les-Bains"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    salleLesAlpes: {
      name: "La Salle-les-Alpes",
      code: "05161",
      population: 924,
      solarAdvantages: [
        "Position montagnarde idéale",
        "Ensoleillement optimal",
        "Rentabilité attractive",
        "Impact environnemental"
      ],
      keyPoints: [
        "Installation haute altitude",
        "Équipements adaptés",
        "Suivi technique",
        "Maintenance spécialisée"
      ],
      reviews: [
        {
          author: "Robert N.",
          rating: 5,
          comment: "Installation réussie et production excellente.",
          date: "2023-12-01",
          location: "Serre Chevalier 1400"
        },
        {
          author: "Isabelle G.",
          rating: 5,
          comment: "Service professionnel et résultats conformes.",
          date: "2023-11-16",
          location: "Le Bez"
        }
      ],
      seo: {
        title: "La Salle-les-Alpes : installation solaire en station",
        metaDescription: "Installation solaire à La Salle-les-Alpes. Optimisez votre production en altitude.",
        keywords: ["installation solaire", "La Salle-les-Alpes", "Serre Chevalier", "montagne"],
        images: [
          {
            url: "/images/cities/salle-les-alpes-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à La Salle-les-Alpes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    },
    chabottes: {
      name: "Chabottes",
      code: "05031",
      population: 934,
      solarAdvantages: [
        "Exposition Champsaur",
        "Ensoleillement favorable",
        "Économies importantes",
        "Solution écologique"
      ],
      keyPoints: [
        "Installation personnalisée",
        "Matériel certifié",
        "Suivi production",
        "Service client"
      ],
      reviews: [
        {
          author: "Paul D.",
          rating: 5,
          comment: "Très satisfait de l'installation et du suivi.",
          date: "2023-11-30",
          location: "Centre-village"
        },
        {
          author: "Marie-France L.",
          rating: 5,
          comment: "Service impeccable et installation soignée.",
          date: "2023-11-15",
          location: "Les Estèves"
        },
        {
          author: "Jean-Paul R.",
          rating: 5,
          comment: "Installation municipale exemplaire, service impeccable.",
          date: "2023-12-08",
          location: "Centre Municipal"
        }
      ],
      recentInstallations: [
        {
          title: "Installation résidentielle à Chabottes",
          description: "Installation de 10 panneaux solaires sur maison traditionnelle",
          date: "2023-12-06",
          power: "5 kWc",
          location: "Centre Village",
          details: [
            "Installation résidentielle classique",
            "Production annuelle estimée : 6000 kWh",
            "Économies annuelles estimées : 1200€",
            "Réduction des émissions CO2 : 1.2 tonnes/an"
          ],
          images: [
            {
              url: "/images/installations/hautes-alpes-installation.jpg",
              alt: "Installation solaire résidentielle dans les Hautes-Alpes"
            }
          ]
        }
      ],
      seo: {
        title: "Chabottes : installation solaire en montagne",
        metaDescription: "Installation solaire à Chabottes. Profitez des avantages du Champsaur.",
        keywords: ["installation solaire", "Chabottes", "Champsaur", "énergie renouvelable"],
        images: [
          {
            url: "/images/cities/chabottes-solar.jpg",
            width: 800,
            height: 600,
            alt: "Installation panneaux solaires à Chabottes"
          }
        ]
      },
      solarInstallation: defaultSolarInstallation
    }
  }
};

export default hautesAlpes;
