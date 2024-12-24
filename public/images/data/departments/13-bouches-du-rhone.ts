import { Department } from "../../types";
import { defaultSolarInstallation } from "../../default-solar-installation";

export const bouchesdurhone: Department = {
  name: "Bouches-du-Rhône",
  code: "13",
  coverImage: {
    url: "/images/departments/bouches-du-rhone-cover.jpg",
    alt: "Vue aérienne de Marseille et de la Méditerranée avec installations solaires",
  },
  cities: {
    "marseille": {
      name: "Marseille",
      code: "13055",
      population: 870731,
      solarAdvantages: [
        "Ensoleillement exceptionnel avec plus de 2800 heures par an",
        "Position idéale en bord de mer pour une exposition optimale",
        "Climat méditerranéen favorable à la production solaire",
        "Forte politique locale en faveur des énergies renouvelables"
      ],
      keyPoints: [
        "Ville la plus ensoleillée de France",
        "Fort potentiel de production solaire toute l'année",
        "Nombreux installateurs qualifiés disponibles",
        "Aides locales spécifiques pour le solaire"
      ],
      reviews: [
        {
          author: "Jean-Marc P.",
          rating: 5,
          date: "2023-11-15",
          comment: "Installation impeccable sur notre maison à Marseille. Production excellente grâce au soleil méditerranéen.",
          location: "Marseille 8e"
        },
        {
          author: "Sophie L.",
          rating: 4.5,
          date: "2023-10-20",
          comment: "Très satisfaite de mon installation. Le retour sur investissement est plus rapide que prévu grâce à l'ensoleillement optimal.",
          location: "Marseille 12e"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Marseille (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Marseille. Profitez du meilleur ensoleillement de France pour votre installation photovoltaïque. Devis gratuit et aides locales.",
        keywords: ["panneaux solaires Marseille", "installation solaire 13", "photovoltaïque Marseille", "énergie solaire Bouches-du-Rhône"],
        images: [
          {
            url: "/images/cities/marseille-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation de panneaux solaires à Marseille"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation de panneaux solaires à Marseille",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "8 500 €",
              type: "Résidentiel",
              description: "Idéal pour un appartement ou petite maison",
              highlight: false
            },
            {
              power: "6 kWc",
              price: "16 000 €",
              type: "Résidentiel+",
              description: "Parfait pour une maison familiale",
              highlight: true,
              badge: "Plus populaire"
            },
            {
              power: "9 kWc",
              price: "23 500 €",
              type: "Grande maison",
              description: "Pour les grandes propriétés",
              highlight: false
            }
          ],
          notes: [
            "Prix incluant la pose et le matériel",
            "Éligible aux aides de l'État et de la région",
            "Garantie 20 ans sur les panneaux"
          ],
          ctaText: "Demander un devis gratuit"
        },
        installers: [
          {
            name: "Soleil Méditerranée",
            certifications: ["QualiPV", "RGE"],
            description: "Expert en installation solaire depuis 15 ans à Marseille",
            experience: "Plus de 1000 installations réalisées"
          },
          {
            name: "Marseille Solar",
            certifications: ["QualiPV", "RGE", "Qualibat"],
            description: "Spécialiste du photovoltaïque en région PACA",
            experience: "12 ans d'expérience"
          }
        ]
      }
    },
    "aix-en-provence": {
      name: "Aix-en-Provence",
      code: "13001",
      population: 143097,
      solarAdvantages: [
        "Climat méditerranéen idéal pour le solaire",
        "Forte exposition solaire annuelle",
        "Politique locale favorable aux énergies vertes",
        "Zone urbaine avec fort potentiel solaire"
      ],
      keyPoints: [
        "Ville historique avec réglementation adaptée",
        "Nombreux toits bien orientés",
        "Support technique local disponible",
        "Aides municipales spécifiques"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          date: "2023-11-10",
          comment: "Installation parfaite, équipe professionnelle et résultats au-delà de nos attentes.",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Aix-en-Provence (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Aix-en-Provence. Profitez d'un ensoleillement optimal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Aix", "installation solaire Aix-en-Provence", "photovoltaïque 13"],
        images: [
          {
            url: "/images/cities/aix-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Panneaux solaires à Aix-en-Provence"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Aix-en-Provence",
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
              highlight: true,
              badge: "Recommandé"
            },
            {
              power: "9 kWc",
              price: "22 500 €",
              type: "Grande propriété"
            }
          ],
          notes: [
            "Prix tout compris installation incluse",
            "Éligible aux aides de l'État et de la région",
            "Garantie 20 ans sur les panneaux"
          ],
          ctaText: "Obtenir un devis personnalisé"
        },
        installers: [
          {
            name: "Solaire Provence",
            certifications: ["RGE", "QualiPV"],
            description: "Expert local en énergie solaire",
            experience: "10 ans d'expérience"
          }
        ]
      }
    },
    "arles": {
      name: "Arles",
      code: "13004",
      population: 52857,
      solarAdvantages: [
        "Fort ensoleillement annuel",
        "Territoire adapté aux installations solaires",
        "Patrimoine architectural compatible",
        "Soutien local aux énergies renouvelables"
      ],
      keyPoints: [
        "Ville historique avec zones adaptées",
        "Accompagnement technique local disponible",
        "Rentabilité optimale",
        "Installation respectueuse du patrimoine"
      ],
      reviews: [
        {
          author: "Pierre M.",
          rating: 5,
          date: "2023-11-10",
          comment: "Installation parfaite, équipe professionnelle et résultats au-delà de nos attentes.",
          location: "Centre-ville"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Arles (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Arles. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Arles", "installation solaire 13", "photovoltaïque Arles"],
        images: [
          {
            url: "/images/cities/arles-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Arles"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Arles",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
              type: "Résidentiel"
            },
            {
              power: "6 kWc",
              price: "15 000 €",
              type: "Résidentiel+",
              highlight: true
            }
          ],
          notes: [
            "Installation et matériel inclus",
            "Garanties constructeur",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Arles Solaire",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "martigues": {
      name: "Martigues",
      code: "13056",
      population: 49021,
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
        title: "Installation Panneaux Solaires à Martigues (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Martigues. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Martigues", "installation solaire 13", "photovoltaïque Martigues"],
        images: [
          {
            url: "/images/cities/martigues-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Martigues"
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
        "Rentabilité optimisée"
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
      population: 45528,
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
          author: "Thomas B.",
          rating: 4.9,
          date: "2023-11-05",
          comment: "Installation rapide et professionnelle. Équipe à l'écoute.",
          location: "Salon Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Salon-de-Provence (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Salon-de-Provence. Profitez du climat provençal pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Salon", "installation solaire 13", "photovoltaïque Salon-de-Provence"],
        images: [
          {
            url: "/images/cities/salon-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Salon-de-Provence"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Salon-de-Provence",
          headers: ["Puissance", "Prix", "Type d'installation"],
          rows: [
            {
              power: "3 kWc",
              price: "7 900 €",
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
            "Installation complète incluse",
            "Garanties fabricant",
            "Accompagnement administratif"
          ],
          ctaText: "Demander un devis"
        },
        installers: [
          {
            name: "Salon Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Expert en énergie solaire à Salon-de-Provence",
            experience: "9 ans d'expérience"
          }
        ]
      }
    },
    "istres": {
      name: "Istres",
      code: "13047",
      population: 43463,
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
      solarAdvantages: [
        "Position géographique idéale",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Politique locale favorable"
      ],
      keyPoints: [
        "Commune dynamique en transition énergétique",
        "Expertise technique disponible",
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
      solarAdvantages: [
        "Territoire en reconversion énergétique",
        "Fort ensoleillement annuel",
        "Zone industrielle avec potentiel",
        "Politique locale favorable"
      ],
      keyPoints: [
        "Ville minière en transition énergétique",
        "Support technique disponible",
        "Accompagnement personnalisé",
        "Rentabilité attractive"
      ],
      reviews: [
        {
          author: "Sylvie P.",
          rating: 4.8,
          date: "2023-09-20",
          comment: "Très satisfaite de l'installation. Production conforme aux prévisions.",
          location: "Gardanne Centre"
        }
      ],
      seo: {
        title: "Installation Panneaux Solaires à Gardanne (13) | Devis Gratuit",
        metaDescription: "Installation de panneaux solaires à Gardanne. Profitez du climat méditerranéen pour votre installation photovoltaïque. Devis gratuit.",
        keywords: ["panneaux solaires Gardanne", "installation solaire 13", "photovoltaïque Gardanne"],
        images: [
          {
            url: "/images/cities/gardanne-solar.jpg",
            width: 1200,
            height: 630,
            alt: "Installation solaire à Gardanne"
          }
        ]
      },
      solarInstallation: {
        installationCostsTable: {
          title: "Coûts d'installation solaire à Gardanne",
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
            name: "Gardanne Solar",
            certifications: ["RGE", "QualiPV"],
            description: "Spécialiste local du photovoltaïque",
            experience: "8 ans d'expérience"
          }
        ]
      }
    },
    "chateauneuf-les-martigues": {
      name: "Châteauneuf-les-Martigues",
      code: "13026",
      population: 18042,
      solarAdvantages: [
        "Position côtière avantageuse",
        "Ensoleillement méditerranéen optimal",
        "Zone résidentielle adaptée",
        "Aides locales attractives"
      ],
      keyPoints: [
        "Commune littorale en développement durable",
        "Expertise technique disponible",
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
