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
                  MyOhm Technologies : Notre Histoire
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Fondée par Ali, un expert en électricité avec plus de 15 ans d'expérience, MyOhm Technologies est née d'une vision claire : 
                    démocratiser l'accès à l'énergie solaire tout en accélérant la transition écologique en France.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Fort de son expertise dans le domaine électrique, Ali a constaté un besoin croissant de solutions énergétiques durables et économiques. 
                    Cette observation l'a conduit à créer MyOhm Technologies, avec l'ambition d'offrir aux particuliers et aux entreprises 
                    une alternative concrète pour réduire significativement leurs factures d'électricité.
                  </p>
                </div>
              </div>

              <div className="bg-f9fafb p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4 mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-FFDF64" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Notre Expertise</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Après des mois de recherche et d'études approfondies, notre équipe a sélectionné les meilleurs composants du marché : 
                      des panneaux solaires Made in France, alliant performance et durabilité, couplés aux micro-onduleurs les plus performants 
                      pour maximiser votre production d'énergie.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <SparklesIcon className="w-5 h-5 text-FFDF64" />
                        <span className="text-gray-700">Certification RGE garantissant l'accès aux aides de l'État</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SparklesIcon className="w-5 h-5 text-FFDF64" />
                        <span className="text-gray-700">Partenariat avec EDF pour le rachat d'énergie</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SparklesIcon className="w-5 h-5 text-FFDF64" />
                        <span className="text-gray-700">Showroom pour découvrir nos solutions en conditions réelles</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPinIcon className="w-6 h-6 text-FFDF64" />
                  <span>Bassin Manosquin, PACA</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 mb-4">
                  Découvrez comment nous pouvons vous aider à réduire votre empreinte carbone tout en réalisant des économies substantielles. 
                  Venez échanger avec notre équipe d'experts dans notre showroom !
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
