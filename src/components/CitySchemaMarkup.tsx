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
        "priceRange": "€€€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "ratingCount": "3068",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "Jean Martin"
            },
            "datePublished": "2024-12-15",
            "reviewBody": "Excellent service, installation rapide et professionnelle. Je recommande vivement !"
          },
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Person",
              "name": "Marie Dubois"
            },
            "datePublished": "2024-12-10",
            "reviewBody": "Très satisfaite de l'installation. L'équipe est compétente et à l'écoute."
          }
        ]
      },
      // Service Schema
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
        "description": cityData.description || `Installation de panneaux solaires à ${cityData.name} par My Ohm Technologies`,
        "category": ["Panneaux Solaires", "Panneaux Photovoltaïques"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "ratingCount": "3068",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://www.myohmtechnologies.com",
        "logo": "https://www.myohmtechnologies.com/images/logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33492766858",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French"]
        }
      },
      // AggregateRating Schema
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "@id": "https://www.myohmtechnologies.com"
        },
        "ratingValue": "4.9",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
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
