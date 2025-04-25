import React from 'react';

interface SEOPreviewProps {
  title: string;
  metaDescription: string;
  url?: string;
}

const SEOPreview: React.FC<SEOPreviewProps> = ({ 
  title, 
  metaDescription, 
  url = "myohmtechnologies.com › blog › votre-article" 
}) => {
  return (
    <div className="max-w-xl border border-gray-200 p-4 rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Aperçu dans Google</h3>
      <div className="font-medium text-blue-800 text-xl truncate">
        {title || "Titre de l'article"} | MyOhm Technologies
      </div>
      <div className="text-green-700 text-sm">
        {url}
      </div>
      <div className="text-gray-600 text-sm line-clamp-2 mt-1">
        {metaDescription || "Ajoutez une méta-description pour voir l'aperçu de votre article dans les résultats de recherche Google."}
      </div>
    </div>
  );
};

export default SEOPreview;
