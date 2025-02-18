'use client';

import { useState } from 'react';
import {
  BanknotesIcon,
  HomeIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface StateAidsSectionProps {
  ville: string;
}

const aids = [
  {
    id: 1,
    title: "TVA Réduite à 10%",
    description: "Bénéficiez d'une TVA réduite à 10% au lieu de 20% sur l'achat et l'installation de vos panneaux solaires.",
    conditions: [
      "Logement de plus de deux ans",
      "Installation par un professionnel certifié RGE",
      "Applicable sur le matériel et la main d'œuvre"
    ],
    icon: DocumentCheckIcon
  },
  {
    id: 2,
    title: "Prime à l'Autoconsommation",
    description: "Une aide financière directe couvrant entre 5% et 10% du coût total de votre installation, particulièrement avantageuse pour les petites installations.",
    details: [
      " 3 kWc :660 €/kWc",
      " 6 kWc : 960 €/kWc",
      " 9 kWc : 1440 €/kWc",

    ],
    icon: BanknotesIcon
  },
  {
    id: 3,
    title: "Tarif de Rachat Subventionné",
    description: "Vendez votre surplus d'électricité à un tarif avantageux garanti par l'État pendant 20 ans, assurant des revenus stables sur le long terme.",
    highlights: [
      "Contrat de 20 ans",
      "Tarif fixe garanti",
      "Productible solaire de 1 559 kWh/kWc en 2023",
      "Revenus complémentaires garantis"
    ],
    icon: ArrowTrendingUpIcon
  },
  {
    id: 4,
    title: "Exonération d'Impôts",
    description: "Pour les installations ≤ 3 kWc, profitez d'une exonération d'impôts sur les revenus générés par la vente de votre surplus d'électricité.",
    benefits: [
      "Aucune déclaration nécessaire",
      "Applicable aux petites installations",
      "Maximisation des bénéfices nets",
      "Cumul possible avec les autres aides"
    ],
    icon: HomeIcon
  },
];

export default function StateAidsSection({ ville }: StateAidsSectionProps) {
  const router = useRouter();

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quelles aides pour financer une installation solaire à {ville} ?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pour rendre l'investissement dans des panneaux solaires encore plus accessible et rentable, plusieurs aides et subventions sont disponibles. 
            Ces dispositifs peuvent alléger significativement le coût de votre installation photovoltaïque et vous permettre de profiter pleinement 
            du potentiel solaire de votre région.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {aids.map((aid) => (
            <div key={aid.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <aid.icon className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{aid.title}</h3>
                  <p className="text-gray-600 mb-4">{aid.description}</p>
                  
                  <ul className="space-y-2">
                    {(aid.conditions || aid.details || aid.highlights || aid.benefits || aid.info)?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg rounded-3xl p-12 backdrop-blur-lg">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Passez au solaire avec My ohm technologies</h3>
            <p className="text-gray-700 text-lg">
              Sélectionnez votre situation pour voir vos économies :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => router.push('/simulator?type=proprietaire')}
              className="group flex items-center justify-center gap-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-primary/20"
            >
              <HomeIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium">Je suis propriétaire</span>
            </button>

            <button
              onClick={() => router.push('/simulator?type=locataire')}
              className="group flex items-center justify-center gap-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-primary/20"
            >
              <BuildingLibraryIcon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium">Je suis locataire</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-8 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Estimation en 2 min
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Gratuit et sans engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
