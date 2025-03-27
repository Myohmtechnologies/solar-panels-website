import { City } from '@/types';

interface CitySchemaMarkupProps {
  cityData: City;
  departmentName: string;
}

const CitySchemaMarkup = ({ cityData, departmentName }: CitySchemaMarkupProps) => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": "https://www.myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://www.myohmtechnologies.com",
        "image": "https://www.myohmtechnologies.com/images/logo.png",
        "description": `Installation de panneaux solaires à ${cityData.name} - My Ohm Technologies, votre expert en énergie solaire`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityData.name,
          "postalCode": cityData.code,
          "addressRegion": departmentName,
          "addressCountry": "FR"
        },
        "areaServed": {
          "@type": "City",
          "name": cityData.name
        },
        "telephone": "+33413680384",
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "ratingCount": "78",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Installation Panneaux Solaires ${cityData.name}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation Panneaux Photovoltaïques",
                "description": `Installation complète de panneaux solaires à ${cityData.name}. Simulation gratuite disponible sur notre site.`,
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://www.myohmtechnologies.com"
                },
                "url": "https://www.myohmtechnologies.com/simulator"
              },
              "availability": "https://schema.org/InStock",
              "url": "https://www.myohmtechnologies.com/simulator",
              "actionPlatform": "https://www.myohmtechnologies.com/simulator",
              "potentialAction": {
                "@type": "Action",
                "name": "Simulation gratuite",
                "target": "https://www.myohmtechnologies.com/simulator",
                "url": "https://www.myohmtechnologies.com/simulator"
              },
              "description": "Simulation gratuite - Calculez vos économies"
            }
          ]
        },
        "review": cityData.reviews?.map(review => ({
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "datePublished": review.date,
          "reviewBody": review.comment,
          "publisher": {
            "@type": "Organization",
            "name": "My Ohm Technologies"
          }
        })) || []
      },
      // Service Schema avec focus informationnel
      {
        "@type": "Service",
        "name": `Guide Installation Panneaux Solaires ${cityData.name}`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.myohmtechnologies.com"
        },
        "areaServed": {
          "@type": "City",
          "name": cityData.name
        },
        "description": `Guide complet sur l'installation de panneaux solaires à ${cityData.name}. Découvrez les aides, subventions et le processus d'installation.`,
        "category": ["Guide Solaire", "Aides et Subventions"],
        "serviceType": "Information et Conseil"
      },
      // Service Schema avec focus transactionnel
      {
        "@type": "Service",
        "name": `Installation Panneaux Solaires ${cityData.name}`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.myohmtechnologies.com"
        },
        "areaServed": {
          "@type": "City",
          "name": cityData.name
        },
        "description": cityData.description || `Installation professionnelle de panneaux solaires à ${cityData.name}. Devis gratuit et installation par des experts certifiés RGE. Simulation d'économies gratuite disponible.`,
        "category": ["Installation Solaire", "Panneaux Photovoltaïques"],
        "serviceType": "Installation",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://www.myohmtechnologies.com/simulator",
          "actionPlatform": "https://www.myohmtechnologies.com/simulator",
          "potentialAction": {
            "@type": "Action",
            "name": "Simulation gratuite",
            "target": "https://www.myohmtechnologies.com/simulator",
            "url": "https://www.myohmtechnologies.com/simulator"
          },
          "description": "Simulation gratuite - Calculez vos économies"
        }
      },
      // FAQ Schema
      {
        "@type": "FAQPage",
        "mainEntity": cityData.seo?.faqSchema?.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        })) || []
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

export default CitySchemaMarkup;
