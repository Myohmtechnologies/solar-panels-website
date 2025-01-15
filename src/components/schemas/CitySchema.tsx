import React from 'react';

interface LocalBusiness {
  "@type": "LocalBusiness";
  name: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CitySchemaProps {
  city: {
    name: string;
    postalCode?: string;
    region?: string;
    localBusiness?: LocalBusiness;
    faqSchema?: FAQItem[];
  };
}

export const CitySchema: React.FC<CitySchemaProps> = ({ city }) => {
  const schemas = [];

  // Add LocalBusiness Schema if available
  if (city.localBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      ...city.localBusiness,
    });
  }

  // Add FAQ Schema if available
  if (city.faqSchema && city.faqSchema.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faqSchema.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  if (schemas.length === 0) {
    return null;
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default CitySchema;
