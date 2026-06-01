export const seoConfig = {
  // Configuration générale du site
  defaultTitle: "Installation Panneaux Solaires en PACA | Expert Certifié RGE",
  titleTemplate: "%s | Expert Certifié RGE",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.myohmtechnologies.com/',
    site_name: 'MY OHM Technologies',
  },
  // Données structurées par défaut
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MY OHM Technologies",
    description: "Expert en installation de panneaux solaires, bornes de recharge, climatisation et électricité en région PACA.",
    url: "https://www.myohmtechnologies.com",
    logo: "https://www.myohmtechnologies.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33492766858",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French"
    },
    sameAs: [
      "https://www.facebook.com/myohmtechnologies",
      "https://www.linkedin.com/company/myohmtechnologies",
      "https://www.instagram.com/myohmtechnologies"
    ]
  },
  // Configuration des breadcrumbs
  breadcrumbSchema: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: []
  },
  // Données pour les articles de blog
  articleSchema: {
    "@context": "https://schema.org",
    "@type": "Article",
    publisher: {
      "@type": "Organization",
      name: "MY OHM Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://www.myohmtechnologies.com/images/logo.png"
      }
    }
  },
  // Configuration des reviews
  reviewSchema: {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Organization",
      name: "Installation Panneaux Solaires PACA"
    }
  }
};
