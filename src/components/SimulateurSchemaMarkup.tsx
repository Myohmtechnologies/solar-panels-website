const SimulateurSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://myohmtechnologies.com/simulator#app",
        "name": "Simulateur d'Installation Solaire",
        "applicationCategory": "UtilityApplication",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "description": "Simulateur gratuit pour calculer le coût et la rentabilité de votre installation solaire. Prix à partir de 7300€, avec estimation des aides financières.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        },
        "featureList": [
          "Calcul personnalisé selon surface et consommation",
          "Estimation précise des coûts (à partir de 7300€)",
          "Calcul des aides (prime à l'autoconsommation jusqu'à 1710€)",
          "Simulation de production solaire sur 25 ans",
          "Calcul du retour sur investissement",
          "Export PDF du projet complet"
        ],
        "potentialAction": {
          "@type": "CalculateAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://myohmtechnologies.com/simulator",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
          },
          "result": {
            "@type": "PropertyValue",
            "name": "Résultat de simulation",
            "description": "Devis détaillé avec coûts, aides et rentabilité"
          }
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Calculateur Solaire My Ohm",
        "applicationCategory": "CalculatorApplication",
        "description": "Outil professionnel de simulation solaire avec estimation précise des coûts à partir de 7300€",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "7300",
          "highPrice": "25000",
          "priceCurrency": "EUR",
          "offerCount": "3",
          "offers": [
            {
              "@type": "Offer",
              "name": "Installation 3kWc",
              "price": "7300",
              "description": "Installation complète petite maison"
            },
            {
              "@type": "Offer",
              "name": "Installation 6kWc",
              "price": "12000",
              "description": "Installation complète maison moyenne"
            },
            {
              "@type": "Offer",
              "name": "Installation 9kWc",
              "price": "16000",
              "description": "Installation complète grande maison"
            }
          ]
        }
      },
      {
        "@type": "HowTo",
        "name": "Comment utiliser le simulateur solaire",
        "description": "Guide d'utilisation du simulateur avec estimation des coûts",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "minValue": "7300",
          "maxValue": "25000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Type de propriété",
            "text": "Sélectionnez votre type de logement (maison ou appartement)"
          },
          {
            "@type": "HowToStep",
            "name": "Consommation",
            "text": "Entrez votre consommation électrique annuelle"
          },
          {
            "@type": "HowToStep",
            "name": "Surface disponible",
            "text": "Indiquez la surface disponible pour les panneaux"
          },
          {
            "@type": "HowToStep",
            "name": "Résultats détaillés",
            "text": "Obtenez votre devis personnalisé avec prix, aides et rentabilité",
            "itemListElement": [
              {
                "@type": "HowToTip",
                "text": "Prix à partir de 7300€ pour une installation 3kWc"
              },
              {
                "@type": "HowToTip",
                "text": "Prime à l'autoconsommation jusqu'à 1710€"
              },
              {
                "@type": "HowToTip",
                "text": "TVA réduite à 10%"
              }
            ]
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le prix minimum d'une installation solaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les prix démarrent à 7300€ pour une installation de 3kWc, idéale pour une petite maison."
            }
          },
          {
            "@type": "Question",
            "name": "Quelles sont les aides disponibles ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez bénéficier de la prime à l'autoconsommation (jusqu'à 1710€), de la TVA réduite à 10% et d'une exonération de taxe foncière."
            }
          },
          {
            "@type": "Question",
            "name": "Le simulateur est-il gratuit ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, le simulateur est totalement gratuit et vous permet d'obtenir une estimation précise de votre projet solaire."
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

export default SimulateurSchemaMarkup;
