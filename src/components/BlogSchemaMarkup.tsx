interface BlogPost {
  title: string;
  description: string;
  mainImage: string;
  author?: {
    name: string;
    image: string;
  } | string;
  publishDate?: string;
  modifiedDate?: string;
  slug: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  // Nouveaux champs SEO
  seoTitle?: string;
  seoDescription?: string;
  // Nouveaux champs Schema
  schemaType?: string;
  keywords?: string[];
}

interface BlogSchemaMarkupProps {
  blog: BlogPost;
}

const BlogSchemaMarkup = ({ blog }: BlogSchemaMarkupProps) => {
  // Valeurs par défaut pour l'auteur
  const defaultAuthor = {
    name: "My Ohm Technologies",
    image: "https://myohmtechnologies.com/images/logo.png"
  };

  // Récupérer le nom de l'auteur (peut être un objet ou une chaîne)
  const authorName = typeof blog.author === 'string' 
    ? blog.author 
    : blog.author?.name || defaultAuthor.name;
  
  // Récupérer l'image de l'auteur (si c'est un objet)
  const authorImage = typeof blog.author === 'object' && blog.author?.image 
    ? blog.author.image 
    : defaultAuthor.image;

  // Utiliser les mots-clés personnalisés ou les tags par défaut
  const keywords = blog.keywords && blog.keywords.length > 0 
    ? blog.keywords 
    : ["panneaux solaires", "énergie solaire", "photovoltaïque", "installation solaire"];

  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Article Schema
      {
        "@type": blog.schemaType || "Article",
        "@id": `https://myohmtechnologies.com/blog/${blog.slug}`,
        "headline": blog.seoTitle || blog.title,
        "description": blog.seoDescription || blog.description,
        "image": blog.mainImage || "https://myohmtechnologies.com/images/blog-default.jpg",
        "author": {
          "@type": "Person",
          "name": authorName,
          "image": authorImage
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://myohmtechnologies.com",
          "name": "My Ohm Technologies",
          "logo": {
            "@type": "ImageObject",
            "url": "https://myohmtechnologies.com/images/logo.png"
          }
        },
        "datePublished": blog.publishDate || blog.createdAt || new Date().toISOString(),
        "dateModified": blog.modifiedDate || blog.updatedAt || new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://myohmtechnologies.com/blog/${blog.slug}`
        },
        "articleSection": "Énergie Solaire",
        "keywords": keywords
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
              "@id": "https://myohmtechnologies.com/blog",
              "name": "Blog"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": `https://myohmtechnologies.com/blog/${blog.slug}`,
              "name": blog.title
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

export default BlogSchemaMarkup;
