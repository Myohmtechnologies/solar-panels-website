interface BlogPost {
  title: string;
  description: string;
  mainImage: string;
  author: {
    name: string;
    image: string;
  };
  publishDate: string;
  modifiedDate: string;
  slug: string;
}

interface BlogSchemaMarkupProps {
  blog: BlogPost;
}

const BlogSchemaMarkup = ({ blog }: BlogSchemaMarkupProps) => {
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      // Article Schema
      {
        "@type": "Article",
        "@id": `https://myohmtechnologies.com/blog/${blog.slug}`,
        "headline": blog.title,
        "description": blog.description,
        "image": blog.mainImage || "https://myohmtechnologies.com/images/blog-default.jpg",
        "author": {
          "@type": "Person",
          "name": blog.author.name,
          "image": blog.author.image
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
        "datePublished": blog.publishDate,
        "dateModified": blog.modifiedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://myohmtechnologies.com/blog/${blog.slug}`
        },
        "articleSection": "Énergie Solaire",
        "keywords": ["panneaux solaires", "énergie solaire", "photovoltaïque", "installation solaire"]
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
