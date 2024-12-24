'use client';

import { 
  CheckBadgeIcon, 
  BuildingOffice2Icon, 
  StarIcon 
} from '@heroicons/react/24/solid';
import Image from 'next/image';

const ShowroomSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f1f5f9 to-e2e8f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Showroom Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/showroom-my-ohm.png" 
            alt="Showroom My Ohm Technologie" 
            width={800} 
            height={700} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Notre showroom &apos;à Manosque</h3>
              <p className="text-sm">Un espace dédié à l&apos;innovation solaire</p>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <CheckBadgeIcon className="w-12 h-12 text-FFDF64" />
            <h2 className="text-3xl font-bold text-gray-900">
              MY OHM Technologie
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Certifiés RGE, MY OHM vous permet de bénéficier des aides de l&apos;État et du rachat garanti par EDF pour vos projets photovoltaïques, que vous soyez particulier ou professionnel.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Grâce à notre showroom et à la qualité de nos produits, nous avons su nous démarquer de la concurrence et sommes aujourd&apos;hui un acteur clé dans le domaine du solaire sur le bassin manosquin.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
              <BuildingOffice2Icon className="w-8 h-8 text-FFDF64" />
              <span className="font-semibold text-gray-800">Showroom Local</span>
            </div>
            <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
              <StarIcon className="w-8 h-8 text-FFDF64" />
              <span className="font-semibold text-gray-800">Expertise Reconnue</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl">
            <div className="flex items-center space-x-4">
              <CheckBadgeIcon className="w-10 h-10 text-black" />
              <div>
                <h4 className="font-bold text-black">Notre Engagement</h4>
                <p className="text-black/80">
                  Faites confiance à notre expertise pour concrétiser vos projets énergétiques. Contactez-nous ou venez visiter notre showroom pour découvrir toutes nos offres !
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Visiter Notre Showroom
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
