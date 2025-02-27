import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqItems: FaqItem[];
}

export default function FaqSchema({ faqItems }: FaqSchemaProps) {
  // Si aucun élément FAQ n'est fourni, ne rien rendre
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
