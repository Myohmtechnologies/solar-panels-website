const BatterieStockageSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://myohmtechnologies.com/batterie-de-stockage#service",
        "name": "Installation de Batteries de Stockage d'Énergie",
        "provider": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        },
        "description": "Installation professionnelle de batteries de stockage d'énergie solaire pour maximiser votre autoconsommation. Solutions adaptées aux particuliers et professionnels en région PACA.",
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur"
        },
        "category": ["Batterie de Stockage", "Énergie Solaire", "Autoconsommation"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solutions de stockage d'énergie",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation batterie résidentielle",
                "description": "Systèmes de stockage pour maisons individuelles avec panneaux solaires"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation batterie professionnelle",
                "description": "Solutions de stockage pour entreprises et bâtiments commerciaux"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Système hybride solaire + batterie",
                "description": "Installation complète de panneaux solaires avec système de stockage intégré"
              }
            }
          ]
        },
        "serviceType": "Installation et maintenance",
        "termsOfService": "Garantie fabricant + garantie installation",
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
      // Product Schema pour les batteries
      {
        "@type": "Product",
        "name": "Systèmes de Stockage d'Énergie",
        "description": "Batteries de stockage d'énergie solaire haute performance pour optimiser votre autoconsommation et réduire votre facture énergétique.",
        "category": "Équipement Énergétique",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "eligibleCustomerType": ["Particulier", "Professionnel"],
          "priceSpecification": {
            "@type": "PriceSpecification",
            "description": "Éligible aux aides de l'État et à la prime à l'autoconsommation"
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Capacité de stockage",
            "value": "De 2.5kWh à 15kWh selon les modèles"
          },
          {
            "@type": "PropertyValue",
            "name": "Technologie",
            "value": "Lithium-ion dernière génération"
          },
          {
            "@type": "PropertyValue",
            "name": "Durée de vie",
            "value": "Jusqu'à 10 ans"
          },
          {
            "@type": "PropertyValue",
            "name": "Garantie",
            "value": "10 ans"
          },
          {
            "@type": "PropertyValue",
            "name": "Compatibilité",
            "value": "Compatible avec tous types d'installations solaires"
          },
          {
            "@type": "PropertyValue",
            "name": "Monitoring",
            "value": "Application mobile de suivi en temps réel"
          }
        ]
      },
      // Organization Schema avec expertise spécifique
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert en solutions énergétiques : batteries de stockage, panneaux solaires et optimisation énergétique",
        "knowsAbout": [
          "Stockage d'énergie",
          "Batteries lithium-ion",
          "Autoconsommation solaire",
          "Optimisation énergétique",
          "Systèmes hybrides solaires"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "QualiPV",
            "description": "Certification pour l'installation de systèmes photovoltaïques"
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
              "@id": "https://myohmtechnologies.com/batterie-de-stockage",
              "name": "Batteries de Stockage"
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

export default BatterieStockageSchemaMarkup;
