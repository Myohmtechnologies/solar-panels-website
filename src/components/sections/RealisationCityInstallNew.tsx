'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Realisation } from '@/types';

interface RealisationCityInstallNewProps {
  realisations: Realisation[];
}

export default function RealisationCityInstallNew({ realisations }: RealisationCityInstallNewProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const currentRealisation = realisations[selectedImage];

  if (!realisations || realisations.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {currentRealisation.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {currentRealisation.description}
          </p>
        </div>

        <div className="mt-12">
          {/* Image principale */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={currentRealisation.mainImage}
              alt={currentRealisation.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={selectedImage === 0}
            />
          </motion.div>

          {/* Spécifications du projet */}
          {currentRealisation.specifications && (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900">Puissance</h4>
                <p className="text-2xl font-bold text-yellow-600">{currentRealisation.specifications.puissance} kWc</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900">Panneaux</h4>
                <p className="text-2xl font-bold text-yellow-600">{currentRealisation.specifications.pannels}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900">Surface</h4>
                <p className="text-2xl font-bold text-yellow-600">{currentRealisation.specifications.surface} m²</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-gray-900">Économie/an</h4>
                <p className="text-2xl font-bold text-yellow-600">{currentRealisation.specifications.economie}€</p>
              </div>
            </div>
          )}

          {/* Galerie miniature */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {realisations.map((realisation, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg ${
                  selectedImage === index 
                    ? 'ring-4 ring-yellow-500' 
                    : 'ring-1 ring-gray-200'
                }`}
              >
                <Image
                  src={realisation.mainImage}
                  alt={realisation.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                />
                <div className={`absolute inset-0 bg-black/10 ${
                  selectedImage === index ? 'bg-opacity-0' : 'hover:bg-opacity-0'
                } transition-opacity`} />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
