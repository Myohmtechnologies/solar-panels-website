interface SolarInstallationSchemaProps {
  cityName: string;
  cityCode: string;
  description: string;
  reviews?: Array<{
    author: string;
    rating: number;
    comment: string;
  }>;
}

export default function SolarInstallationSchema({ 
  cityName, 
  cityCode,
  description,
  reviews 
}: SolarInstallationSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://myohm.fr/${cityCode}#business`,
    "name": `MyOhm Technologies - Installation Panneaux Solaires ${cityName}`,
    "image": "/images/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "postalCode": cityCode,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "url": `https://myohm.fr/region/paca/departements/04-alpes-de-haute-provence/villes/${cityName.toLowerCase()}`,
    "telephone": "+33400000000",
    "priceRange": "€€€",
    "review": reviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.comment
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
