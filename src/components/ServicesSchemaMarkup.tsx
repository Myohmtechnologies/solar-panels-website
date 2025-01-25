const ServicesSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://myohmtechnologies.com/services#installation",
        "name": "Installation Panneaux Solaires",
        "description": "Installation professionnelle de panneaux solaires photovoltaïques en PACA",
        "provider": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur",
          "containsPlace": [
            {
              "@type": "City",
              "name": "Marseille",
              "containedInPlace": {
                "@type": "State",
                "name": "Bouches-du-Rhône"
              }
            },
            {
              "@type": "City",
              "name": "Nice",
              "containedInPlace": {
                "@type": "State",
                "name": "Alpes-Maritimes"
              }
            },
            {
              "@type": "City",
              "name": "Toulon",
              "containedInPlace": {
                "@type": "State",
                "name": "Var"
              }
            }
          ]
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "7300",
          "highPrice": "25000",
          "offerCount": "3",
          "offers": [
            {
              "@type": "Offer",
              "name": "Installation 3kWc",
              "price": "7300",
              "description": "Installation complète 3kWc avec pose et raccordement",
              "priceValidUntil": "2025-12-31"
            },
            {
              "@type": "Offer",
              "name": "Installation 6kWc",
              "price": "12000",
              "description": "Installation complète 6kWc avec pose et raccordement",
              "priceValidUntil": "2025-12-31"
            },
            {
              "@type": "Offer",
              "name": "Installation 9kWc",
              "price": "16000",
              "description": "Installation complète 9kWc avec pose et raccordement",
              "priceValidUntil": "2025-12-31"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Pierre M."
            },
            "datePublished": "2024-01-15",
            "reviewBody": "Installation 6kWc parfaitement réalisée. Équipe professionnelle et efficace."
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sophie L."
            },
            "datePublished": "2024-01-10",
            "reviewBody": "Très satisfaite de mon installation 3kWc. Production conforme aux estimations."
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catalogue installations solaires",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Installations Résidentielles",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Starter 3kWc",
                    "description": "Idéal pour petite maison ou début d'autonomie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Confort 6kWc",
                    "description": "Pour maison moyenne avec bonne autonomie"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pack Premium 9kWc",
                    "description": "Maximum d'autonomie pour grande maison"
                  }
                }
              ]
            }
          ]
        },
        "serviceType": "Installation solaire photovoltaïque",
        "termsOfService": "Garantie 10 ans installation",
        "serviceOutput": {
          "@type": "Energy",
          "name": "Production électrique solaire"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com#organization",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://myohmtechnologies.com/images/logo.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "addressCountry": "FR"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "QualiPV",
            "description": "Certification pour l'installation de systèmes photovoltaïques"
          }
        ]
      },
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
              "@id": "https://myohmtechnologies.com/services",
              "name": "Services"
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

export default ServicesSchemaMarkup;
