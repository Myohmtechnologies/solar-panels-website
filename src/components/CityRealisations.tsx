import React from 'react';
import { WatermarkedImage } from './WatermarkedImage';
import styles from './CityRealisations.module.css';

interface CityRealisationsProps {
  realisations: {
    title: string;
    description?: string;
    images: {
      url: string;
      alt: string;
    }[];
  };
}

const CityRealisations: React.FC<CityRealisationsProps> = ({ realisations }) => {
  return (
    <section className={styles.realisationsSection}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">{realisations.title}</h2>
        {realisations.description && (
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {realisations.description}
          </p>
        )}
        <div className={styles.imageGrid}>
          {realisations.images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <WatermarkedImage
                src={image.url}
                alt={image.alt}
                width={600}
                height={400}
                className={styles.realisationImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityRealisations;
