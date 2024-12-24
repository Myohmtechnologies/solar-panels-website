type SchemaOrgProps = {
  name: string;
  description?: string;
  image?: string;
};

export function SchemaOrg({
  name,
  description = 'Solar panel installation services',
  image = '/images/logo.png'
}: SchemaOrgProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    image,
    url: 'https://myohmtechnologies.fr',
    telephone: '+33 9 87 65 43 21',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Rue de la Technologie',
      addressLocality: 'Paris',
      postalCode: '75001',
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
    serviceType: 'Solar Panel Installation'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
