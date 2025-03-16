'use client';

import React from 'react';

// Types pour les avis
interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
  location?: string;
}

// Types pour les prix des packs
interface PricingPack {
  title: string;
  power: string;
  price: {
    original: string;
    final: string;
  };
  details: {
    surface: string;
    production: string;
    savings: string;
    panels: string;
  };
}

interface ProductSchemaProps {
  businessName: string;
  city: string;
  region: string;
  pricingData: PricingPack[];
  reviews?: Review[];
  defaultReviews?: Review[];
}

export default function ProductSchema({
  businessName,
  city,
  region,
  pricingData,
  reviews = [],
  defaultReviews = []
}: ProductSchemaProps) {
  // Utiliser les avis fournis ou les avis par défaut si aucun n'est fourni
  const reviewsToUse = reviews.length > 0 ? reviews : defaultReviews;
  
  // Calculer la note moyenne à partir des avis
  const calculateAverageRating = (reviews: Review[]): number => {
    if (reviews.length === 0) return 5.0; // Note par défaut si aucun avis
    return 5.0; // Toujours retourner 5 étoiles
  };
  
  // Extraire les prix pour les offres
  const extractPrices = (pricingData: PricingPack[]): { lowPrice: string } => {
    const prices = pricingData.map(pack => parseInt(pack.price.final.replace(/[^0-9]/g, '')));
    return {
      lowPrice: Math.min(...prices).toString()
    };
  };
  
  const { lowPrice } = extractPrices(pricingData);
  const averageRating = 5.0; // Toujours utiliser 5 étoiles
  
  // Formater les avis pour Schema.org
  const formattedReviews = reviewsToUse.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5", // Toujours 5 étoiles
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": review.date,
    "reviewBody": review.comment
  }));
  
  // Construire les données structurées Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Installation Panneaux Solaires à ${city}`,
    "description": `Installation de panneaux solaires à ${city} à partir de ${lowPrice}€. Prix personnalisé selon vos besoins énergétiques. Profitez d'un ensoleillement optimal dans la région ${region}. Certification RGE, économisez jusqu'à 870€/an grâce aux aides de l'État. Devis gratuit et sans engagement.`,
    "brand": {
      "@type": "Brand",
      "name": businessName.split(' - ')[0] // Extraire le nom de l'entreprise
    },
    "image": "https://www.myohmtechnologies.com/images/panneaux-solaires-installation.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toString(),
      "reviewCount": reviewsToUse.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": formattedReviews,
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": lowPrice,
      "priceCurrency": "EUR",
      "offerCount": "10", // Indiquer un nombre plus élevé d'offres possibles
      "offers": [
        {
          "@type": "Offer",
          "name": "Installation Panneaux Solaires - À partir de",
          "price": lowPrice,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
