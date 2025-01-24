const SimulateurSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // WebApplication Schema
      {
        "@type": "WebApplication",
        "@id": "https://myohmtechnologies.com/simulator#app",
        "name": "Simulateur d'Aides Solaires",
        "applicationCategory": "UtilityApplication",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "description": "Simulateur gratuit pour calculer vos aides financières et économies potentielles pour votre installation de panneaux solaires.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        },
        "featureList": [
          "Calcul de la prime à l'autoconsommation",
          "Estimation des économies d'énergie",
          "Calcul du retour sur investissement",
          "Simulation de la production solaire",
          "Calcul des aides fiscales"
        ],
        "operatingSystem": "All",
        "permissions": "none",
        "softwareVersion": "1.0",
        "provider": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        }
      },
      // SoftwareApplication Schema
      {
        "@type": "SoftwareApplication",
        "name": "Calculateur Solaire My Ohm",
        "applicationCategory": "CalculatorApplication",
        "description": "Outil de simulation pour estimer le coût et la rentabilité de votre installation solaire, en prenant en compte toutes les aides disponibles.",
        "features": [
          "Interface intuitive",
          "Résultats instantanés",
          "Calculs personnalisés",
          "Export des résultats en PDF"
        ],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        }
      },
      // HowTo Schema pour l'utilisation du simulateur
      {
        "@type": "HowTo",
        "name": "Comment utiliser le simulateur solaire",
        "description": "Guide d'utilisation du simulateur d'aides et d'économies solaires",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Saisie des informations",
            "text": "Renseignez votre localisation et la surface disponible pour les panneaux"
          },
          {
            "@type": "HowToStep",
            "name": "Consommation électrique",
            "text": "Indiquez votre consommation électrique annuelle"
          },
          {
            "@type": "HowToStep",
            "name": "Type d'installation",
            "text": "Choisissez le type d'installation souhaité"
          },
          {
            "@type": "HowToStep",
            "name": "Résultats",
            "text": "Obtenez une estimation détaillée des aides et économies"
          }
        ],
        "tool": [
          "Navigateur web moderne",
          "Facture d'électricité"
        ]
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png"
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
              "@id": "https://myohmtechnologies.com/simulator",
              "name": "Simulateur"
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
