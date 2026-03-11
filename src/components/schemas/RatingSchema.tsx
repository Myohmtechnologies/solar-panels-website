'use client';

import React from 'react';

interface RatingSchemaProps {
  businessName: string;
  city: string;
  region: string;
  ratingValue: number;
  reviewCount: number;
  reviews?: {
    author: string;
    rating: number;
    date: string;
    content: string;
  }[];
}

export default function RatingSchema({
  businessName,
  city,
  region,
  ratingValue,
  reviewCount,
  reviews = []
}: RatingSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": region,
      "addressCountry": "FR"
    },
    "priceRange": "€€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": review.date,
      "reviewBody": review.content
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
