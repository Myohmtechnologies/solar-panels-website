type ReviewSchemaProps = {
  reviews: {
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished: string;
  }[];
  itemReviewed: {
    name: string;
    image?: string;
    description?: string;
  };
};

export function ReviewSchema({ reviews, itemReviewed }: ReviewSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: itemReviewed.name,
    image: itemReviewed.image || 'https://www.myohmtechnologies.com/images/logo.webp',
    description: itemReviewed.description || 'Installation de panneaux solaires photovoltaïques',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '544 avenue Frédéric Mistral',
      addressLocality: 'Manosque',
      postalCode: '04100',
      addressCountry: 'FR'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating,
        bestRating: '5'
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: calculateAverageRating(reviews),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function calculateAverageRating(reviews: { reviewRating: number }[]): string {
  if (reviews.length === 0) return '5';
  
  const sum = reviews.reduce((total, review) => total + review.reviewRating, 0);
  const average = sum / reviews.length;
  
  // Format to one decimal place
  return average.toFixed(1);
}
