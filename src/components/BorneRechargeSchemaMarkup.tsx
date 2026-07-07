const BorneRechargeSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://myohmtechnologies.com/borne-de-recharge#service",
        "name": "Installation de Bornes de Recharge Électrique",
        "provider": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        },
        "description": "Installation professionnelle de bornes de recharge pour véhicules électriques par My Ohm Technologies. Solutions pour particuliers et professionnels en région PACA.",
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur"
        },
        "category": ["Borne de Recharge", "Mobilité Électrique"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services d'installation de bornes de recharge",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation borne de recharge particulier",
                "description": "Installation de bornes de recharge pour maisons individuelles"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation borne de recharge entreprise",
                "description": "Solutions de recharge pour flottes d'entreprises et parkings professionnels"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation borne de recharge copropriété",
                "description": "Installation de bornes de recharge en copropriété avec gestion intelligente"
              }
            }
          ]
        },
        "serviceType": "Installation et maintenance",
        "termsOfService": "Garantie fabricant + garantie installation",
        "additionalType": "https://schema.org/ElectricCarChargingStation",
        "potentialAction": {
          "@type": "QuoteAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://myohmtechnologies.com/contact",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
          },
          "result": {
            "@type": "Quote",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "description": "Devis gratuit et personnalisé"
            }
          }
        }
      },
      // Product Schema pour les bornes
      {
        "@type": "Product",
        "name": "Bornes de Recharge Électrique",
        "description": "Bornes de recharge pour véhicules électriques, compatibles avec tous types de véhicules. Installation professionnelle et service après-vente.",
        "category": "Équipement Électrique",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "eligibleCustomerType": ["Particulier", "Professionnel"],
          "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Éligible au crédit d'impôt et aux aides locales"
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Puissance disponible",
            "value": "3.7kW à 22kW"
          },
          {
            "@type": "PropertyValue",
            "name": "Compatibilité",
            "value": "Tous véhicules électriques"
          },
          {
            "@type": "PropertyValue",
            "name": "Installation",
            "value": "Par des professionnels certifiés"
          },
          {
            "@type": "PropertyValue",
            "name": "Garantie",
            "value": "2 ans minimum"
          }
        ]
      },
      // Organization Schema avec certifications
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert en solutions énergétiques : bornes de recharge, panneaux solaires et installations électriques",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "IRVE",
            "description": "Installation de bornes de recharge pour véhicules électriques"
          }
        ]
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://myohmtechnologies.com",
              "name": "Accueil"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://myohmtechnologies.com/borne-de-recharge",
              "name": "Bornes de Recharge"
            }
          }
        ]
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien coûte l'installation d'une borne de recharge pour voiture électrique ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le coût de l'installation d'une borne de recharge à domicile dépend du modèle choisi et de la configuration de votre installation électrique. Chez My Ohm Technologies, nos forfaits clés en main (matériel et pose inclus) débutent à partir de 1 240 € (aides de l'État et crédit d'impôt de 500 € déduits) pour notre Borne Ohme, à partir de 1 490 € pour la Wallbox Pulsar Plus, et à partir de 1 590 € pour le modèle Hager Witty."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est le meilleur emplacement pour installer ma borne de recharge à domicile ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'emplacement idéal dépend de l'accès à votre véhicule et de la distance par rapport à votre tableau électrique de répartition. En général, la borne est installée dans un garage fermé, sous un carport, ou sur un mur extérieur à proximité de la trappe de recharge de votre voiture. Nos techniciens qualifiés IRVE valident la position optimale lors de l'étude technique pour réduire la longueur des câbles et optimiser l'esthétique et le coût."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps prend l'installation d'une borne de recharge ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Une installation standard à domicile est rapide et prend généralement entre une demi-journée et une journée complète. Cela comprend la pose de la borne, le tirage du câble de puissance depuis votre tableau électrique, la pose des disjoncteurs et protections obligatoires dans votre tableau, ainsi que les tests de mise en service et la démonstration d'utilisation."
            }
          },
          {
            "@type": "Question",
            "name": "J'habite en maison, comment choisir ma borne de recharge ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le choix se fait en fonction de votre véhicule (puissance maximale acceptée en charge lente/rapide), de vos besoins quotidiens en autonomie, et de votre abonnement électrique. Pour la majorité des maisons individuelles, une borne de 7,4 kW en monophasé est recommandée. Elle permet de recharger complètement n'importe quel véhicule électrique durant la nuit. Si vous avez des panneaux solaires, optez pour une borne intelligente comme la borne Ohme qui maximise l'autoconsommation."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre une borne de recharge et une prise ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Une borne de recharge (wallbox) charge jusqu'à 10 fois plus rapidement qu'une prise domestique classique et offre une sécurité totale. Contrairement à une simple prise qui risque de surchauffer lors d'une charge longue de forte puissance, la borne dispose de protections électriques intégrées et communique activement avec le véhicule pour réguler la charge. De plus, elle offre des fonctions de programmation intelligente et de contrôle à distance absentes sur une prise standard."
            }
          },
          {
            "@type": "Question",
            "name": "Dois-je augmenter ma puissance souscrite pour recharger à domicile ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pas nécessairement. La plupart des abonnements domestiques (9 kVA ou 12 kVA) suffisent pour recharger un véhicule la nuit pendant les heures creuses, lorsque les autres appareils gourmands sont éteints. De plus, nos bornes intègrent un système de délestage dynamique : elles mesurent la consommation de votre maison en temps réel et ajustent automatiquement la charge de la voiture pour éviter de faire disjoncter votre installation."
            }
          },
          {
            "@type": "Question",
            "name": "Quel contrat d'électricité choisir pour recharger à domicile ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Il est fortement conseillé d'opter pour un contrat d'électricité avec option Heures Pleines / Heures Creuses, ou des offres spécifiques « spécial véhicule électrique » proposées par de nombreux fournisseurs. En programmant votre recharge pour qu'elle commence à partir de 22h ou minuit (heures creuses), vous divisez le coût de votre plein d'électricité par deux par rapport aux heures pleines de la journée."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};

export default BorneRechargeSchemaMarkup;
