'use client';

import { 
  CheckBadgeIcon, 
  BuildingOffice2Icon,
  PhoneIcon,
  SunIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchIcon
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const ShowroomSection = () => {
  const certifications = [
    { 
      src: '/images/logo-QualiPV-2024-RGE.png', 
      alt: 'Certification RGE',
      description: 'Reconnu Garant de l\'Environnement'
    },
    { 
      src: '/images/qualifelec.jpg', 
      alt: 'Certification QualiPV',
      description: 'Expert en Installation Photovoltaïque'
    },
    { 
      src: '/images/garantie-decennale-p2a-construction.webp', 
      alt: 'Garantie Décennale',
      description: 'Installation garantie 10 ans'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-f1f5f9 to-e2e8f0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Showroom Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
          <Image 
            src="/images/hero-local.jpeg" 
            alt="Showroom My Ohm Technologie" 
            width={800} 
            height={700} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Nos installations témoignent de notre expertise.</h3>
              <p className="text-sm">Découvrez nos solutions en conditions réelles.</p>
            </div>
          </div>
        </div>

        {/* Content Right Side */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <SunIcon className="w-12 h-12 text-FFDF64" />
              <h2 className="text-4xl font-bold text-gray-900">
                Pourquoi Nous Choisir ?
              </h2>
            </div>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start space-x-3">
                <WrenchIcon className="w-6 h-6 text-FFDF64 mt-1" />
                <p className="text-gray-700">Nos propres équipes d'installation, sans sous-traitance, pour une qualité garantie</p>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="w-6 h-6 text-FFDF64 mt-1" />
                <p className="text-gray-700">Experts certifiés en installation photovoltaïque</p>
              </div>
              <div className="flex items-start space-x-3">
                <UserGroupIcon className="w-6 h-6 text-FFDF64 mt-1" />
                <p className="text-gray-700">Une équipe locale dédiée à votre projet de A à Z</p>
              </div>
              <div className="flex items-start space-x-3">
                <BuildingOffice2Icon className="w-6 h-6 text-FFDF64 mt-1" />
                <p className="text-gray-700">Un showroom unique pour visualiser votre installation</p>
              </div>
            </div>
          </div>

          {/* Certifications avec descriptions */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nos Certifications</h3>
            <div className="grid grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement et CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <CheckBadgeIcon className="w-10 h-10 text-black" />
                <div>
                  <h4 className="font-bold text-black">Notre Engagement</h4>
                  <p className="text-black/80">
                    Une installation de qualité, un service premium, et un accompagnement personnalisé.
                  </p>
                </div>
              </div>
            </div>

            <Link 
              href="/contact"
              className="group flex items-center justify-center w-full px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Parler à un Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
