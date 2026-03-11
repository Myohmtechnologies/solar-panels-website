const GuideAidesSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Guide/HowTo Schema
      {
        "@type": "HowTo",
        "@id": "https://myohmtechnologies.com/guide-aides-subventions#guide",
        "name": "Guide des Aides et Subventions pour l'Énergie Solaire 2024",
        "description": "Guide complet des aides financières pour l'installation de panneaux solaires : prime à l'autoconsommation, TVA réduite et exonérations fiscales.",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "description": "Montant des aides pouvant aller jusqu'à plusieurs milliers d'euros"
        },
        "potentialAction": [
          {
            "@type": "UseAction",
            "name": "Simuler vos aides",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://myohmtechnologies.com/simulator",
              "description": "Simulateur gratuit pour calculer vos aides et économies"
            }
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Prime à l'Autoconsommation",
            "text": "Prime valable jusqu'au 31 janvier 2025 avec trois niveaux : 660€ pour 3 kWc, 1440€ pour 6 kWc, et 1710€ pour 9 kWc. Cette aide est directement déduite de votre facture.",
            "url": "https://myohmtechnologies.com/guide-aides-subventions#prime-autoconsommation"
          },
          {
            "@type": "HowToStep",
            "name": "TVA Réduite",
            "text": "Bénéficiez d'une TVA à taux réduit de 10% sur votre installation solaire pour votre résidence principale. Cette réduction s'applique à l'ensemble des travaux d'installation.",
            "url": "https://myohmtechnologies.com/guide-aides-subventions#tva-reduite"
          },
          {
            "@type": "HowToStep",
            "name": "Exonération Fiscale",
            "text": "Profitez d'une exonération de taxe foncière pendant 5 à 15 ans selon votre commune. Cette exonération doit être demandée auprès de votre centre des impôts.",
            "url": "https://myohmtechnologies.com/guide-aides-subventions#exoneration-fiscale"
          }
        ],
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Documents nécessaires",
            "text": "Avis d'imposition, devis détaillé, certificat RGE de l'installateur"
          }
        ],
        "tool": [
          "Simulateur d'aides en ligne",
          "Calculateur d'économies",
          "Guide des démarches administratives"
        ]
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le montant de la prime à l'autoconsommation en 2024 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La prime à l'autoconsommation est valable jusqu'au 31 janvier 2025 avec les montants suivants : 660€ pour une installation de 3 kWc, 1440€ pour 6 kWc, et 1710€ pour 9 kWc."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est le taux de TVA applicable pour l'installation de panneaux solaires ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Une TVA réduite à 10% est applicable pour les installations de panneaux solaires sur les résidences principales, permettant des économies substantielles sur le coût total de l'installation."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les avantages fiscaux liés aux panneaux solaires ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez bénéficier d'une exonération de taxe foncière pendant une durée de 5 à 15 ans selon les collectivités locales. Cette exonération constitue un avantage fiscal supplémentaire significatif."
            }
          },
          {
            "@type": "Question",
            "name": "Les aides sont-elles cumulables entre elles ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, vous pouvez cumuler plusieurs aides : la prime à l'autoconsommation, la TVA réduite et l'exonération de taxe foncière sont compatibles entre elles, maximisant ainsi vos économies."
            }
          }
        ]
      },
      // Article Schema
      {
        "@type": "Article",
        "headline": "Guide Complet des Aides et Subventions pour l'Énergie Solaire 2024",
        "description": "Découvrez toutes les aides financières disponibles pour vos projets d'énergie solaire : MaPrimeRénov', prime à l'autoconsommation, aides régionales et plus encore.",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-25",
        "author": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com",
          "name": "My Ohm Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://myohmtechnologies.com/images/logo.png"
          }
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert en solutions énergétiques et accompagnement dans vos démarches d'aides et subventions"
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
              "@id": "https://myohmtechnologies.com/guide-aides-subventions",
              "name": "Guide des Aides et Subventions"
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

export default GuideAidesSchemaMarkup;
