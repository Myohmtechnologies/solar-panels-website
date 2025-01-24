interface Realisation {
  title: string;
  description: string;
  images: string[];
  location: string;
  date: string;
  power?: string;
  type?: string;
  surface?: string;
  economie?: string;
  productionAnnuelle?: string;
  garantie?: string;
  review?: {
    author: string;
    rating: number;
    text: string;
  };
}

interface RealisationsSchemaMarkupProps {
  realisations: Realisation[];
}

const RealisationsSchemaMarkup = ({ realisations }: RealisationsSchemaMarkupProps) => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // CollectionPage Schema
      {
        "@type": "CollectionPage",
        "@id": "https://myohmtechnologies.com/nos-realisation",
        "name": "Nos Réalisations - Installations de Panneaux Solaires RGE",
        "description": "Découvrez nos réalisations d'installations de panneaux solaires par My Ohm Technologies, entreprise RGE dans la région PACA. Projets résidentiels et professionnels avec garanties.",
        "url": "https://myohmtechnologies.com/nos-realisation",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": realisations.map((real, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": real.title,
              "description": real.description,
              "image": real.images,
              "offers": {
                "@type": "Offer",
                "category": "Installation Panneaux Solaires",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "warranty": real.garantie || "Garantie 25 ans sur les panneaux",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Éligible aux aides de l'État"
                }
              },
              "brand": {
                "@type": "Brand",
                "name": "My Ohm Technologies",
                "slogan": "Expert en solutions photovoltaïques RGE"
              },
              "manufacturer": {
                "@type": "Organization",
                "@id": "https://myohmtechnologies.com",
                "certification": [
                  "RGE QualiPV",
                  "Qualibat"
                ]
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Puissance installée",
                  "value": real.power || "N/A",
                  "unitText": "kWc"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Type d'installation",
                  "value": real.type || "Installation solaire photovoltaïque"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Surface installée",
                  "value": real.surface || "N/A",
                  "unitText": "m²"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Production annuelle estimée",
                  "value": real.productionAnnuelle || "N/A",
                  "unitText": "kWh/an"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Économies annuelles estimées",
                  "value": real.economie || "N/A",
                  "unitText": "€/an"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Localisation",
                  "value": real.location
                },
                {
                  "@type": "PropertyValue",
                  "name": "Date d'installation",
                  "value": real.date
                }
              ],
              ...(real.review && {
                "review": {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": real.review.rating,
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": real.review.author
                  },
                  "reviewBody": real.review.text
                }
              })
            }
          }))
        }
      },
      // Organization Schema avec certifications
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert RGE en installation de panneaux solaires et solutions photovoltaïques dans la région PACA",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "RGE QualiPV",
            "validFrom": "2023"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Qualibat",
            "validFrom": "2023"
          }
        ],
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur"
        },
        "knowsAbout": [
          "Installation de panneaux solaires",
          "Énergie photovoltaïque",
          "Autoconsommation solaire",
          "Pompes à chaleur",
          "Batteries de stockage"
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
              "@id": "https://myohmtechnologies.com/nos-realisation",
              "name": "Nos Réalisations"
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

export default RealisationsSchemaMarkup;
