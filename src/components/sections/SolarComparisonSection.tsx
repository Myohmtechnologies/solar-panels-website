'use client';

import { BoltIcon, FireIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const comparisonData = {
  photovoltaic: {
    title: "Panneaux Solaires Photovoltaïques",
    icon: BoltIcon,
    description: "Transforment la lumière du soleil en électricité",
    image: "/images/panneau-solaire-photovoltaique.jpg",
    advantages: [
      "Production d'électricité pour tous vos besoins",
      "Rentabilité assurée grâce aux aides de l'État",
      "Installation simple et peu encombrante",
      "Maintenance minimale"
    ],
    characteristics: [
      "Rendement : 21,3% avec nos panneaux JA Solar",
      "Production : environ 1450 kWh/kWc/an en PACA",
      "Durée de vie : 30+ ans",
      "Garantie : 25 ans sur la production"
    ],
    applications: [
      "Alimentation électrique de la maison",
      "Recharge de véhicules électriques",
      "Revente du surplus d'électricité",
      "Autoconsommation avec ou sans stockage"
    ]
  },
  thermal: {
    title: "Panneaux Solaires Thermiques",
    icon: FireIcon,
    description: "Chauffent directement l'eau par l'énergie solaire",
    image: "/images/panneaux-solaire-thermique.webp",
    advantages: [
      "Excellent rendement pour l'eau chaude",
      "Économies sur la facture de chauffage",
      "Technologie éprouvée et fiable",
      "Impact environnemental réduit"
    ],
    characteristics: [
      "Rendement : jusqu'à 80%",
      "Production : 350-450 kWh/m²/an",
      "Durée de vie : 20-25 ans",
      "Garantie : 10 ans en moyenne"
    ],
    applications: [
      "Eau chaude sanitaire",
      "Chauffage de piscine",
      "Chauffage par plancher chauffant",
      "Préchauffage de l'eau de chauffage"
    ]
  }
};

export default function SolarComparisonSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Quelle est la différence entre des panneaux solaires photovoltaïques et des panneaux solaires thermiques ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les spécificités de chaque technologie pour choisir celle qui correspond le mieux à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {Object.entries(comparisonData).map(([key, data]) => (
            <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* En-tête */}
              <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/90 p-3 rounded-xl">
                    <data.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{data.title}</h3>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-6">{data.description}</p>

                {/* Sections */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Avantages
                    </h4>
                    <ul className="grid gap-2">
                      {data.advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span className="text-gray-600">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Caractéristiques
                    </h4>
                    <ul className="grid gap-2">
                      {data.characteristics.map((characteristic, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span className="text-gray-600">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Applications
                    </h4>
                    <ul className="grid gap-2">
                      {data.applications.map((application, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                          <span className="text-gray-600">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note de conclusion */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Chez My ohm technologies, nous nous spécialisons dans les installations photovoltaïques, 
            qui offrent le meilleur retour sur investissement et la plus grande polyvalence d'utilisation 
            pour les propriétaires souhaitant réduire leur facture d'électricité.
          </p>
        </div>
      </div>
    </section>
  );
}
