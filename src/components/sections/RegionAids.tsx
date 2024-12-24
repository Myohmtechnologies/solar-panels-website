'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { RegionData } from '@/config/seo';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  region: RegionData;
}

const RegionAids = ({ region }: Props) => {
  const allAids = [...region.aids.regional, ...region.aids.local];

  if (allAids.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Aides disponibles en {region.name}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Découvrez les aides régionales et locales pour votre installation solaire
              </p>
            </div>

            <div className="space-y-6">
              {allAids.map((aid, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {aid.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{aid.description}</p>
                  <div className="bg-green-100 text-green-800 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Montant: {aid.amount}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Conditions d&apos;éligibilité:</h4>
                    <ul className="space-y-2">
                      {aid.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <Image
              src="/images/regions/solar-aids.webp"
              alt={`Aides panneaux solaires ${region.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl"
              priority={false}
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionAids;
