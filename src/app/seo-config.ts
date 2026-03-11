export const seoConfig = {
  // Configuration générale du site
  defaultTitle: "Installation Panneaux Solaires en PACA | Expert Certifié RGE",
  titleTemplate: "%s | Expert Certifié RGE",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votresite.fr/',
    site_name: 'Installation Panneaux Solaires PACA',
  },
  // Données structurées par défaut
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Installation Panneaux Solaires PACA",
    description: "Expert en installation de panneaux solaires en région PACA. Installation certifiée RGE, devis gratuit et accompagnement personnalisé.",
    url: "https://votresite.fr",
    logo: "https://votresite.fr/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33400000000",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French"
    },
    sameAs: [
      "https://www.facebook.com/votrepage",
      "https://www.linkedin.com/company/votrepage",
      "https://www.instagram.com/votrepage"
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
      name: "Installation Panneaux Solaires PACA",
      logo: {
        "@type": "ImageObject",
        url: "https://votresite.fr/logo.png"
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
