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
