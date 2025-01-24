const HomeSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert en installation de panneaux solaires et solutions photovoltaïques dans la région PACA",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Manosque",
          "postalCode": "04100",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "addressCountry": "FR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33492766858",
          "contactType": "numéro de Téléphone de l'entreprise"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61570633700519",
          "https://www.instagram.com/myohmtechnologies"
        ]
      },
      // Service Schema
      {
        "@type": "Service",
        "name": "Installation de Panneaux Solaires",
        "provider": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        },
        "areaServed": {
          "@type": "State",
          "name": "Provence-Alpes-Côte d'Azur"
        },
        "category": ["Panneaux Solaires", "Panneaux Photovoltaïques"],
        "description": "Installation professionnelle de panneaux solaires et solutions photovoltaïques pour particuliers et professionnels",
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
      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://myohmtechnologies.com",
        "url": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies - Expert en Panneaux Solaires",
        "description": "Découvrez votre expert en installations de panneaux photovoltaïques RGE. Simulez vos économies d'énergie, bénéficiez de solutions sur mesure dans les Alpes de Haute-Provence et toute la région PACA.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://myohmtechnologies.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
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

export default HomeSchemaMarkup;
