import React from 'react';

interface SchemaPreviewProps {
  schemaData: {
    schemaType: string;
    author: string;
    keywords: string[];
  };
  blogData: {
    title: string;
    description: string;
    mainImage: string;
    slug?: string;
  };
}

const SchemaPreview: React.FC<SchemaPreviewProps> = ({ schemaData, blogData }) => {
  const generateSchemaMarkup = () => {
    const baseUrl = "https://myohmtechnologies.com";
    const slug = blogData.slug || 
      blogData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    
    return {
      "@context": "https://schema.org",
      "@type": schemaData.schemaType,
      "headline": blogData.title,
      "description": blogData.description,
      "image": blogData.mainImage || `${baseUrl}/images/blog-default.jpg`,
      "author": {
        "@type": "Person",
        "name": schemaData.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "MyOhm Technologies",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/logo.png`
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${slug}`
      },
      "keywords": schemaData.keywords.join(", ")
    };
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-md font-medium text-gray-700 mb-3">Aperçu du Schema Markup</h3>
      <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-auto max-h-60 text-sm font-mono">
        <pre>{JSON.stringify(generateSchemaMarkup(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default SchemaPreview;
