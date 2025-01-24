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
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "image": "https://myohmtechnologies.com/images/logo.png",
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
        "priceRange": "€€€"
      },
      // Service Schema
      {
        "@type": "Service",
        "name": `Installation Panneaux Solaires ${cityData.name}`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://myohmtechnologies.com"
        },
        "areaServed": {
          "@type": "City",
          "name": cityData.name
        },
        "description": cityData.description || `Installation de panneaux solaires à ${cityData.name} par My Ohm Technologies`,
        "category": ["panneaux Solaires", "panneaux Photovoltaïques "],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services d'installation de panneau solaire",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation de panneaux solaires résidentiels"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Installation de panneaux solaires commerciaux"
              }
            }
          ]
        }
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33492766858",
          "contactType": "numéro de Téléphone de l'entreprise"
        }
      },
      // AggregateRating Schema
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "@id": "https://myohmtechnologies.com"
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
