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
  if (!cityName || !cityCode) {
    return null;
  }

  const getDepartmentFromPostalCode = (postalCode: string) => {
    const dept = postalCode.substring(0, 2);
    const deptMap: { [key: string]: string } = {
      '04': '04-alpes-de-haute-provence',
      '05': '05-hautes-alpes',
      '06': '06-alpes-maritimes',
      '13': '13-bouches-du-rhone',
      '83': '83-var',
      '84': '84-vaucluse'
    };
    return deptMap[dept] || '04-alpes-de-haute-provence';
  };

  const department = getDepartmentFromPostalCode(cityCode);
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://myohmtechnologies.com/${cityCode}#business`,
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
    "url": `https://myohmtechnologies.com/region/paca/departements/${department}/villes/${citySlug}`,
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
