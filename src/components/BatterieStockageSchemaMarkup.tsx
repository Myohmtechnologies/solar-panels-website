const BatterieStockageSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Service Schema
      {
        "@type": "Service",
        "@id": "https://www.myohmtechnologies.com/solutions/batterie-virtuelle#service",
        "name": "Batterie Virtuelle MyLight - Solution d'Autoconsommation Intelligente",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.myohmtechnologies.com"
        },
        "description": "Découvrez la batterie virtuelle MyLight, la solution innovante pour optimiser votre autoconsommation d'énergie solaire sans installation physique. Maximisez vos économies d'énergie avec notre technologie de stockage virtuel.",
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur"
        },
        "category": ["Batterie de Stockage", "Énergie Solaire", "Autoconsommation", "Autonomie Énergétique", "Système Photovoltaïque"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solutions de stockage d'énergie solaire",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation batterie résidentielle",
                "description": "Systèmes de stockage pour maisons individuelles avec panneaux solaires, permettant jusqu'à 90% d'autonomie énergétique"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation batterie professionnelle",
                "description": "Solutions de stockage pour entreprises et bâtiments commerciaux, optimisant la rentabilité de votre installation solaire"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Système hybride solaire + batterie",
                "description": "Installation complète de panneaux solaires avec système de stockage intégré pour une autonomie énergétique maximale"
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
            "urlTemplate": "https://www.myohmtechnologies.com/contact",
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
        "@id": "https://www.myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://www.myohmtechnologies.com",
        "logo": "https://www.myohmtechnologies.com/images/logo.png",
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
              "@id": "https://www.myohmtechnologies.com",
              "name": "Accueil"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.myohmtechnologies.com/batterie-de-stockage",
              "name": "Batteries de Stockage"
            }
          }
        ]
      },
      // Article Schema
      {
        "@type": "TechArticle",
        "@id": "https://www.myohmtechnologies.com/batterie-de-stockage#article",
        "headline": "Comment fonctionne une batterie de stockage solaire",
        "description": "Guide complet sur le fonctionnement des batteries de stockage d'énergie solaire, leur installation et leurs avantages pour l'autoconsommation.",
        "keywords": "batterie stockage solaire, fonctionnement batterie solaire, système stockage énergie, autoconsommation, autonomie énergétique",
        "datePublished": "2023-09-15",
        "dateModified": "2025-02-28",
        "author": {
          "@type": "Organization",
          "name": "MY OHM Technologies"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.myohmtechnologies.com"
        },
        "mainEntityOfPage": "https://www.myohmtechnologies.com/batterie-de-stockage",
        "articleSection": "Énergie Solaire"
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": "https://www.myohmtechnologies.com/batterie-de-stockage#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment fonctionne une batterie de stockage solaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Une batterie de stockage solaire fonctionne en 4 étapes principales : 1) Les panneaux solaires produisent de l'électricité pendant la journée, 2) Le surplus d'énergie non consommé immédiatement est stocké dans la batterie, 3) Le soir et la nuit, l'énergie stockée est utilisée pour alimenter votre maison, 4) Un système de gestion intelligent optimise les flux d'énergie entre production, stockage et consommation pour maximiser votre autonomie."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle économie peut-on réaliser avec une batterie de stockage ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Avec une batterie de stockage couplée à des panneaux solaires, vous pouvez réaliser jusqu'à 70% d'économies sur vos factures d'électricité. Le système permet d'atteindre jusqu'à 90% d'autonomie énergétique en stockant l'énergie produite pendant la journée pour l'utiliser lorsque vos panneaux ne produisent pas."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la durée de vie d'une batterie de stockage solaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les batteries de stockage solaire modernes ont une durée de vie moyenne de 10 à 15 ans. Nos solutions incluent des garanties fabricant allant jusqu'à 10 ans, assurant un fonctionnement optimal et une tranquillité d'esprit pour votre investissement."
            }
          },
          {
            "@type": "Question",
            "name": "Est-ce que l'installation d'une batterie de stockage est rentable ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, l'installation d'une batterie de stockage devient de plus en plus rentable avec l'augmentation des prix de l'électricité. Le retour sur investissement se situe généralement entre 7 et 10 ans, selon votre consommation et le dimensionnement de votre installation. De plus, vous bénéficiez d'une indépendance énergétique accrue et d'une protection contre les coupures de courant."
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
