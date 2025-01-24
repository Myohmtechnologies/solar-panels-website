const ContactSchemaMarkup = () => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // ContactPage Schema
      {
        "@type": "ContactPage",
        "@id": "https://myohmtechnologies.com/contact",
        "name": "Contactez My Ohm Technologies",
        "description": "Contactez-nous pour une installation de panneaux solaires. Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.",
        "url": "https://myohmtechnologies.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com"
        }
      },
      // Organization Schema avec informations de contact détaillées
      {
        "@type": "Organization",
        "@id": "https://myohmtechnologies.com",
        "name": "My Ohm Technologies",
        "url": "https://myohmtechnologies.com",
        "logo": "https://myohmtechnologies.com/images/logo.png",
        "description": "Expert en installation de panneaux solaires et solutions photovoltaïques RGE dans la région PACA",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rue Saint-Lazare",
          "addressLocality": "Manosque",
          "postalCode": "04100",
          "addressRegion": "Provence-Alpes-Côte d'Azur",
          "addressCountry": "FR"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+33492766858",
            "contactType": "Service client",
            "areaServed": "FR",
            "availableLanguage": "French",
            "contactOption": "TollFree"
          },
          {
            "@type": "ContactPoint",
            "email": "contact@myohmtechnologies.com",
            "contactType": "Email support",
            "availableLanguage": "French"
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61570633700519",
          "https://www.instagram.com/myohmtechnologies"
        ]
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://myohmtechnologies.com",
              "name": "Accueil"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://myohmtechnologies.com/contact",
              "name": "Contact"
            }
          }
        ]
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

export default ContactSchemaMarkup;
