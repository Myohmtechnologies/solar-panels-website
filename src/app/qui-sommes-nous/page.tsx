"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  SunIcon, 
  SparklesIcon, 
  BuildingOfficeIcon,
  StarIcon,
  ShieldCheckIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';
import TechnologicalApproachSection from '@/components/sections/TechnologicalApproachSection';
import CompanyValuesSection from '@/components/sections/CompanyValuesSection';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section avec nouveau design */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f2f6fa to-e3e9f0 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <StarIcon className="w-8 h-8 text-FFDF64" />
              <h1 className="text-3xl font-bold text-gray-900">
                Qui Sommes-Nous
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section - Placeholder for your future image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                <Image
                  src="/images/solar-worker.jpg"
                  alt="Qui Sommes-Nous"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-100 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  MyOhm Technologies : Votre Partenaire Solaire
                </h2>
              
              </div>

              <div className="bg-f9fafb p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4 mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-FFDF64" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Notre Engagement</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Certifiés RGE, MY OHM vous permet de bénéficier des aides de l&apos;État et du rachat garanti par EDF pour vos projets photovoltaïques, que vous soyez particulier ou professionnel. 
                      Grâce à notre showroom et à la qualité de nos produits, nous avons su nous démarquer de la concurrence et sommes aujourd&apos;hui un acteur clé dans le domaine du solaire sur le bassin manosquin.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPinIcon className="w-6 h-6 text-FFDF64" />
                  <span>Bassin Manosquin, PACA</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Faites confiance à notre expertise pour concrétiser vos projets énergétiques. 
                  Contactez-nous ou venez visiter notre showroom pour découvrir toutes nos offres !
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-3 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contactez-Nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnologicalApproachSection />
      <CompanyValuesSection />
    </main>
  );
}
