'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { RegionData } from '@/config/seo';
import { regions } from '@/config/seo';
import { 
  SunIcon, 
  MapPinIcon 
} from '@heroicons/react/24/solid';

interface RegionMapSectionProps {
  region: string;
}

const RegionMapSection = ({ region }: RegionMapSectionProps) => {
  const regionData = regions.find(r => r.name === region || r.name === 'Provence-Alpes-Côte d\'Azur');

  if (!regionData) return null;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#f1f6f9] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#116290]">
            Proximité et expertise locale
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Nos zones d’<span className="text-[#116290]">intervention</span> en région PACA
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ffb700] to-[#116290]" />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Nos équipes interviennent dans les six départements de la région pour vous accompagner dans votre projet énergétique.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Map Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image
            src='/images/Carte-region.svg'
            alt="section region"
            width={800}
            height={700}
            className="w-full h-full object-cover"
          />
        
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <SunIcon className="w-12 h-12 text-FFDF64" />
              <h3 className="text-3xl font-bold text-gray-900">
              Potentiel Solaire
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            La région {regionData.name} est la {regionData.sunshineRank} région la plus ensoleillée de France ! Y installer des panneaux solaires est donc à la fois une démarche écologique et un investissement rentable.
          </p>

          <div className="grid md:grid-cols- gap-4">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
            <SunIcon className="w-8 h-8 text-FFDF64" />
              <div>
                <span className="font-semibold text-gray-800">{regionData.sunshineHours} heures</span>
                <span className="ml-2 text-gray-600">d&apos;ensoleillement par an</span>
              </div>
            </div>
           
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-10 h-10 text-black" />
              <div>
                <h4 className="font-bold text-black">Départements Couverts</h4>
                <ul className="text-black/80 list-disc list-inside">
                  {regionData.departments.map((department, index) => (
                    <li key={index}>{department.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link 
            href="/region/paca" 
            className="mt-6 block w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            Découvrir Votre Région
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default RegionMapSection;
