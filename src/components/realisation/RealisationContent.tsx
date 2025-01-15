'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ChartBarIcon, BoltIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Realisation } from '@/types';

interface RealisationContentProps {
  realisation: Realisation;
}

export default function RealisationContent({ realisation }: RealisationContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-sm"
    >
      {/* Bouton retour */}
      <Link
        href="/nos-realisation"
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6 group transition-colors duration-200"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
        Retour aux réalisations
      </Link>

      {/* En-tête */}
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          {realisation.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 mr-2 text-FFDF64" />
            <time dateTime={realisation.date.toString()}>
              {new Date(realisation.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
              })}
            </time>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2 text-FFDF64" />
            {realisation.city}
          </div>
          <span className="relative rounded-full bg-gradient-to-br from-ffeb99 to-ffb700 px-3 py-1.5 font-medium text-gray-900">
            {realisation.type}
          </span>
        </div>
      </div>

      {/* Grille d'images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={realisation.mainImage}
            alt={realisation.title}
            fill
            className="object-cover"
          />
        </div>
        {realisation.secondaryImage && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={realisation.secondaryImage}
              alt={`${realisation.title} - Image secondaire`}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Contenu en deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Description */}
        <div className="prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description du projet</h2>
          <p className="text-gray-700 leading-relaxed">{realisation.description}</p>
        </div>

        {/* Spécifications techniques */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Caractéristiques techniques</h2>
          {realisation.specifications && (
            <dl className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-200">
                <dt className="flex items-center text-gray-600">
                  <BoltIcon className="h-5 w-5 mr-2 text-FFDF64" />
                  Puissance installée
                </dt>
                <dd className="font-semibold text-gray-900">{realisation.specifications.puissance} kWc</dd>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-200">
                <dt className="flex items-center text-gray-600">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                  Nombre de panneaux
                </dt>
                <dd className="font-semibold text-gray-900">{realisation.specifications.pannels}</dd>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-200">
                <dt className="flex items-center text-gray-600">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                  Surface
                </dt>
                <dd className="font-semibold text-gray-900">{realisation.specifications.surface} m²</dd>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-200">
                <dt className="flex items-center text-gray-600">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-FFDF64" />
                  Économie annuelle
                </dt>
                <dd className="font-semibold text-gray-900">{realisation.specifications.economie} €</dd>
              </div>
            </dl>
          )}
        </div>
      </div>
    </motion.div>
  );
}
