'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import QuickLeadForm from '../forms/QuickLeadForm';

interface Props {
  region: string;
  departement: string;
  code: string;
  ensoleillement: string;
  potentielSolaire: string;
}

const TransactionalHero = ({ region, departement, code, ensoleillement, potentielSolaire }: Props) => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row lg:items-center">
      {/* Vidéo de fond */}
      <div className="relative h-[33vh] lg:h-auto lg:absolute lg:inset-0 -z-10">
        <video
          src="https://res.cloudinary.com/dz5sry4jz/video/upload/q_auto:eco,f_auto,c_scale,w_1280/societe-installation-de-panneaux-solaires"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay sur la vidéo */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Titre sur la vidéo - visible uniquement sur mobile */}
        <div className="absolute inset-0 flex items-center justify-center p-3 lg:hidden">
          <h1 className="text-xl md:text-4xl font-bold text-white text-center">
            Économisez jusqu&apos;à -70%
            <span className="block text-base md:text-2xl mt-1">
              sur vos factures d&apos;électricité
            </span>
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 w-full bg-gray-100 lg:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
            {/* Formulaire */}
            <div className="w-full lg:w-[500px] xl:w-[550px] lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Étude gratuite et sans engagement
                  </h2>
                  <p className="text-green-600 font-semibold text-lg">
                    Département {code} - {departement}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Un expert vous rappelle sous 24h
                  </p>
                </div>

                <QuickLeadForm />

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-6 mt-6">
                  <Image
                    src="/images/rge1.png"
                    alt="Certification RGE"
                    width={85}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/images/qualipv1.png"
                    alt="Certification QualiPV"
                    width={95}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/google.png"
                      alt="Google"
                      width={20}
                      height={20}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-lg font-medium text-gray-700">4,9/5</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Titre desktop */}
            <div className="hidden lg:block lg:w-[500px] xl:w-[600px] lg:order-2">
              <h1 className="text-6xl font-bold text-white">
                Installation Panneaux Solaires<br />
                <span className="text-green-400">{departement}</span>
              </h1>
              <p className="text-xl text-white md:text-2xl mb-6">
                Profitez d&apos;un ensoleillement exceptionnel de {ensoleillement} et économisez jusqu&apos;à <span className="text-green-400 font-bold">70%</span> sur votre facture d&apos;électricité !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionalHero;
