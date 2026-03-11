type SchemaOrgProps = {
  name: string;
  description?: string;
  image?: string;
};

export function SchemaOrg({
  name,
  description = 'Service d\'installations de panneaux solaires',
  image = '/images/logo.png'
}: SchemaOrgProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    image,
    url: 'https://www.myohmtechnologies.com',
    telephone: '+334 92 76 68 58',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '544 avenue Frédéric Mistral ',
      addressLocality: 'Manosque',
      postalCode: '04100',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    serviceType: 'installateur de panneaux solaires',
    priceRange: '7300€',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
