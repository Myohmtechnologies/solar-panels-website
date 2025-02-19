'use client';

import { useState } from 'react';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import QuoteModal from '@/components/modals/QuoteModal';

interface InstallationPricingSectionProps {
  ville: string;
}

const pricingData = [
  {
    title: "Pack Essentiel",
    power: "3 kWc",
    price: {
      original: "9 890€",
      final: "7 890€"
    },
    details: {
      surface: "15m²",
      production: "4 350 kWh/an",
      savings: "870€/an",
      panels: "6 panneaux"
    }
  },
  {
    title: "Pack Confort",
    power: "6 kWc",
    price: {
      original: "14 890€",
      final: "12 890€"
    },
    details: {
      surface: "30m²",
      production: "8 700 kWh/an",
      savings: "1 740€/an",
      panels: "12 panneaux"
    }
  },
  {
    title: "Pack Premium",
    power: "9 kWc",
    price: {
      original: "19 890€",
      final: "15 890€"
    },
    details: {
      surface: "45m²",
      production: "13 050 kWh/an",
      savings: "2 610€/an",
      panels: "18 panneaux"
    }
  },
  {
    title: "Pack Ultra",
    power: "12 kWc",
    price: {
      original: "30 890€",
      final: "19 890€"
    },
    details: {
      surface: "60m²",
      production: "17 400 kWh/an",
      savings: "3 480€/an",
      panels: "24 panneaux"
    }
  }
];

const services = [
  {
    title: "Étude Personnalisée Gratuite",
    description: "Analyse complète de votre toiture incluant l'exposition solaire, la structure, et une simulation 3D pour optimiser le placement des panneaux. Nous étudions également votre consommation électrique pour dimensionner parfaitement votre installation."
  },
  {
    title: "Équipements Premium",
    description: "Installation de panneaux DualSun FLASH 500 Half-Cut Glass-Glass TOPCon et de micro-onduleurs Enphase IQ8P, garantissant les meilleures performances du marché avec un rendement de 21,3% pour maximiser vos économies d'énergie. Garantie de 30 ans."
  },
  {
    title: "Installation Certifiée",
    description: "Nos installateurs certifiés RGE QualiPV assurent une pose dans les règles de l'art. Chaque installation est réalisée selon les plus hauts standards de qualité et de sécurité, avec un contrôle qualité rigoureux."
  },
  {
    title: "Accompagnement Complet",
    description: "Prise en charge totale des démarches administratives : demande d'aides, permis de construire si nécessaire, raccordement Enedis. Nous gérons tout pour vous, de A à Z."
  }
];

export default function InstallationPricingSection({ ville }: InstallationPricingSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState<typeof pricingData[0] | null>(null);

  const handleDevisClick = (pack: typeof pricingData[0]) => {
    setSelectedPack(pack);
    setIsModalOpen(true);
  };

  return (
    <>
      {selectedPack && (
        <QuoteModal 
          isOpen={isModalOpen} 
          closeModal={() => setIsModalOpen(false)}
          cityName={ville}
          estimations={{
            production: parseInt(selectedPack.details.production.replace(/[^0-9]/g, '')),
            totalAnnualSavings: parseInt(selectedPack.details.savings.replace(/[^0-9]/g, '')),
            systemSize: parseInt(selectedPack.power.replace(/[^0-9]/g, ''))
          }}
        />
      )}
      
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Quel est le prix d'une installation solaire à {ville} : estimation précise et détaillée
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Découvrez nos tarifs transparents et obtenez une estimation précise du coût de votre installation solaire. 
              Nos prix incluent le matériel premium, l'installation et un accompagnement complet pour maximiser vos économies d'énergie.
            </p>
          </div>

          {/* Tableau des prix */}
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-gray-700 mb-6">
              Voici une estimation précise du coût d'une installation solaire adaptée à vos besoins. 
              Les prix indiqués tiennent compte de toutes les aides gouvernementales et vous permettent 
              de visualiser concrètement vos futures économies d'énergie :
            </p>
            <div className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-br from-ffeb99 to-ffb700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">
                      Pack
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">
                      Prix Final
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">
                      Économies d'Énergie/An
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-black">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingData.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-FFDF64/10 flex items-center justify-center">
                            {index === 0 ? (
                              <CheckCircleIcon className="w-6 h-6 text-FFDF64" />
                            ) : index === 1 ? (
                              <CheckCircleIcon className="w-6 h-6 text-FFDF64" />
                            ) : index === 2 ? (
                              <CheckCircleIcon className="w-6 h-6 text-FFDF64" />
                            ) : (
                              <CheckCircleIcon className="w-6 h-6 text-FFDF64" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.power}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          {item.price.final}
                        </div>
                      
                        <span className="text-xs text-gray-500">Prix après aides</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-green-600">
                          {item.details.savings}
                          <span className="block text-xs text-gray-500">
                            en économies d'énergie
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDevisClick(item)}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-primary rounded-xl transition-all text-sm font-semibold hover:bg-black/90"
                        >
                          Devis gratuit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Note explicative sous le tableau */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-sm text-gray-600">
              * Les économies d'énergie sont calculées sur la base du tarif actuel de l'électricité et de son augmentation prévisionnelle. 
              Le coût final de votre installation peut varier en fonction de la configuration de votre toiture. 
              Contactez-nous pour une estimation précise personnalisée.
            </p>
          </div>

          {/* Services inclus */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Services premium inclus dans le coût de votre installation
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
              Pour garantir une installation optimale et maximiser vos économies d'énergie, 
              chaque projet bénéficie des services suivants, inclus dans le prix :
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    {service.title}
                  </h4>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-ffeb99 to-ffb700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Estimation précise gratuite pour votre projet solaire
              </h3>
              <p className="text-gray-700 mb-6">
                Nos experts analysent votre consommation et votre toiture pour vous proposer 
                une solution optimisée, maximisant vos économies d'énergie. Obtenez une estimation 
                précise du coût de votre installation et de votre retour sur investissement.
              </p>
              <Link 
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Demander un devis
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
