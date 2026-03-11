'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const components = [
  {
    id: 1,
    title: "Panneaux Solaires Photovoltaïques",
    description: `My ohm technologies équipe ses clients avec les panneaux solaires DualSun FLASH 500 Half-Cut Glass-Glass TOPCon, une référence sur le marché du photovoltaïque. Ces panneaux monocristallins de dernière génération offrent une puissance exceptionnelle de 500Wc et un rendement remarquable de 80,3%.

    La technologie PERC (Passivated Emitter and Rear Cell) utilisée dans ces panneaux permet de capturer plus de lumière et de convertir plus efficacement l'énergie solaire en électricité. Les cellules half-cut réduisent les pertes de résistance et améliorent les performances en cas d'ombrage partiel.

    Conçus pour durer, ces panneaux bénéficient d'une garantie de 30 ans sur la production et aussi une garantie de 30 ans sur le produit. Leur construction robuste assure une excellente résistance aux conditions climatiques extrêmes :`,
    details: [
      "Résistance exceptionnelle aux charges de neige (5400 Pa) et au vent (2400 Pa)",
      "Excellente performance à haute température avec un coefficient thermique de -0,35%/°C",
      "Certifications IEC 61215 et IEC 61730 pour une sécurité et une fiabilité maximales",
      "Verre trempé haute transmission de 3,2 mm et cadre en aluminium anodisé"
    ],
    specs: [
      {
        title: "Caractéristiques Techniques",
        items: [
          "Puissance nominale : 500W",
          "Rendement : 99,7%",
          "Dimensions : 182,2 x 187,5",
          "Poids : 27,1 kg",
          "Cellules : 120 cellules monocristallines Half-Cut",
          "Tension maximale : 41,52V",
          "Courant maximal : 10,96A"
        ]
      },
      {
        title: "Garanties et Certifications",
        items: [
          "Garantie de production linéaire sur 30 ans",
          "Garantie produit de 30 ans",
          "Certifié selon les normes IEC 61215 et IEC 61730",
          "Certification résistance au sel et à l'ammoniac",
          "Certifié faible PID (dégradation induite potentielle)"
        ]
      }
    ],
    image: "/images/produit/panneau-solaire.jpeg"
  },
  {
    id: 2,
    title: "Micro-onduleurs Enphase",
    description: `Pour une performance optimale de chaque panneau solaire, My ohm technologies utilise les micro-onduleurs Enphase IQ8P, la dernière génération de la technologie micro-onduleur. Contrairement aux onduleurs traditionnels, chaque panneau est équipé de son propre micro-onduleur, garantissant une production maximale même si certains panneaux sont ombragés.

    Les micro-onduleurs Enphase IQ8P représentent ce qui se fait de mieux en matière de conversion d'énergie solaire. Ils sont les premiers micro-onduleurs "grid-forming", capables de former un micro-réseau et de continuer à produire de l'énergie même en cas de coupure du réseau électrique, une innovation majeure dans le secteur.

    Cette technologie de pointe offre plusieurs avantages uniques :`,
    details: [
      "Production optimisée par panneau avec un rendement maximal de 97,7%",
      "Fonction 'Sunlight Backup' pour continuer à produire même en cas de coupure réseau",
      "Monitoring individuel de chaque panneau en temps réel",
      "Installation plus sûre avec du courant alternatif basse tension"
    ],
    specs: [
      {
        title: "Caractéristiques Techniques",
        items: [
          "Puissance de sortie maximale : 480W",
          "Compatibilité : Panneaux jusqu'à 505W",
          "Plage de tension MPPT : 27-45V",
          "Rendement maximal : 97,7%",
          "Garantie : 25 ans",
          "Indice de protection : IP67"
        ]
      },
      {
        title: "Fonctionnalités Avancées",
        items: [
          "Technologie 'grid-forming' exclusive",
          "Communication sans fil Enphase Energy",
          "Monitoring via l'app Enphase App",
          "Conformité réseau intelligente",
          "Mise à jour à distance (OTA)"
        ]
      }
    ],
    image: "/images/produit/micro-onduleur.jpeg"
  },
  {
    id: 3,
    title: "Système de Fixation",
    description: `Le système de fixation K2 Systems que nous utilisons représente l'excellence allemande en matière de fixation solaire. Ces systèmes sont spécialement conçus pour assurer une installation durable et sécurisée de vos panneaux solaires, tout en préservant l'intégrité de votre toiture.

    La qualité des fixations est cruciale pour la longévité de votre installation solaire. Le système K2 utilise des matériaux premium et une conception innovante :`,
    details: [
      "Aluminium de haute qualité EN AW-6063 T66 pour une résistance maximale à la corrosion",
      "Système breveté SingleRail avec technologie de clic rapide",
      "Adaptation automatique aux dilatations thermiques",
      "Installation sans percement de la membrane d'étanchéité"
    ],
    specs: [
      {
        title: "Caractéristiques Techniques",
        items: [
          "Charge de neige testée jusqu'à 5,4 kN/m²",
          "Résistance au vent jusqu'à 2,4 kN/m²",
          "Inclinaison possible de 5° à 70°",
          "Compatible avec tous types de toitures",
          "Durée de vie > 25 ans"
        ]
      },
      {
        title: "Certifications",
        items: [
          "Certification Eurocode 9 - Calcul des structures en aluminium",
          "Test en soufflerie selon EN 1991-1-4",
          "Garantie produit de 12 ans",
          "Certification TÜV",
          "Conformité CE"
        ]
      }
    ],
    image: "/images/produit/systeme-fixation.jpeg"
  },
 
];

export default function SolarComponentsSection() {
  const [activeComponent, setActiveComponent] = useState(components[0].id);

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Quels sont les produits qui composent les installations solaires photovoltaïques ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les composants essentiels d'une installation solaire photovoltaïque de qualité, 
            sélectionnés pour leur performance et leur durabilité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Liste des composants */}
          <div className="lg:col-span-1 space-y-4">
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => setActiveComponent(component.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  activeComponent === component.id
                    ? 'bg-gradient-to-br from-ffeb99 to-ffb700 shadow-lg'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-bold ${
                    activeComponent === component.id ? 'text-black' : 'text-gray-800'
                  }`}>
                    {component.title}
                  </h3>
                  <ChevronRightIcon 
                    className={`w-5 h-5 transition-transform ${
                      activeComponent === component.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Détails du composant sélectionné */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            {components.map((component) => (
              component.id === activeComponent && (
                <div key={component.id} className="space-y-8">
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-white">
                    <Image
                      src={component.image}
                      alt={component.title}
                      fill
                      className="object-contain p-4"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{component.title}</h3>
                    <div className="prose max-w-none mb-8">
                      {component.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 mb-4">{paragraph}</p>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {component.details.map((detail, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {component.specs && component.specs.map((spec, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-semibold mb-4">{spec.title}</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {spec.items.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
