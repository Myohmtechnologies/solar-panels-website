import React from 'react';

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  embedUrl?: string;
  uploadDate: string;
  duration?: string; // Format: PT#M#S (ISO 8601)
}

/**
 * Composant VideoSchema qui génère un schéma JSON-LD pour les vidéos
 * selon le format Schema.org pour améliorer l'indexation par Google.
 * 
 * @param name - Titre de la vidéo
 * @param description - Description de la vidéo
 * @param thumbnailUrl - URL de la miniature de la vidéo
 * @param contentUrl - URL du fichier vidéo
 * @param embedUrl - URL d'intégration (optionnel)
 * @param uploadDate - Date de téléchargement au format YYYY-MM-DD
 * @param duration - Durée de la vidéo au format ISO 8601 (PT#M#S)
 */
const VideoSchema: React.FC<VideoSchemaProps> = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  embedUrl,
  uploadDate,
  duration
}) => {
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    contentUrl,
    ...(embedUrl && { embedUrl }),
    uploadDate,
    ...(duration && { duration })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
};

export default VideoSchema;
