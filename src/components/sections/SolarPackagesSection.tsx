'use client';

import Image from 'next/image';

interface SolarPackage {
  size: string;
  price: string;
  panels: number;
  features: string[];
  buttonColor: string;
  priceColor: string;
  bgGradient: string;
  iconColor: string;
  image: string;
}

const packages: SolarPackage[] = [
  {
    size: '3 kWc',
    price: '9 230 € TTC',
    panels: 6,
    features: [
      '6 panneaux photovoltaïques monocristallins (garantis 25 ans)',
      'Garantie main-d\'oeuvre et déplacements : 20 ans',
      '6 micro-onduleurs (garantis 25 ans)',
      'Suivi conso via l\'application'
    ],
    buttonColor: 'bg-gradient-to-r from-[#98B85C] to-[#87A44B] hover:from-[#87A44B] hover:to-[#769339]',
    priceColor: 'text-[#98B85C]',
    bgGradient: 'from-[#98B85C]/5 to-transparent',
    iconColor: '#98B85C',
    image: '/images/3kwh.png'
  },
  {
    size: '6 kWc',
    price: '13 930 € TTC',
    panels: 12,
    features: [
      '12 panneaux photovoltaïques monocristallins (garantis 25 ans)',
      'Garantie main-d\'oeuvre et déplacements : 20 ans',
      '12 micro-onduleurs (garantis 25 ans)',
      'Suivi conso via l\'application'
    ],
    buttonColor: 'bg-gradient-to-br from-ffeb99 to-ffb700 hover:from-ffb700 hover:to-ffeb99',
    priceColor: 'bg-gradient-to-br from-ffeb99 to-ffb700 bg-clip-text text-transparent',
    bgGradient: 'from-ffeb99/5 to-transparent',
    iconColor: '#ffb700',
    image: '/images/6kwh.png'
  },
  {
    size: '9 kWc',
    price: '18 450 € TTC',
    panels: 18,
    features: [
      '18 panneaux photovoltaïques monocristallins (garantis 25 ans)',
      'Garantie main-d\'oeuvre et déplacements : 20 ans',
      '18 micro-onduleurs (garantis 25 ans)',
      'Suivi conso via l\'application'
    ],
    buttonColor: 'bg-gradient-to-r from-[#7FB3C8] to-[#6EA2B7] hover:from-[#6EA2B7] hover:to-[#5D91A6]',
    priceColor: 'text-[#7FB3C8]',
    bgGradient: 'from-[#7FB3C8]/5 to-transparent',
    iconColor: '#7FB3C8',
    image: '/images/9kwh.png'
  }
];

export default function SolarPackagesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="nos-offres">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-gradient-to-br from-ffeb99/10 to-ffb700/10 px-4 py-2 rounded-full">
            <span className="bg-gradient-to-br from-ffeb99 to-ffb700 bg-clip-text text-transparent">⭐</span>
            <span className="text-sm font-semibold uppercase tracking-wide bg-gradient-to-br from-ffeb99 to-ffb700 bg-clip-text text-transparent">NOS OFFRES</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0B293D] mb-4">
            C'est simple, nous sommes
          </h2>
          <p className="text-4xl font-bold">
            <span className="bg-gradient-to-br from-ffeb99 to-ffb700 bg-clip-text text-transparent">les moins chers</span>
            <span className="text-[#0B293D]"> du marché.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.size}
              className={`relative bg-gradient-to-br ${pkg.bgGradient} rounded-3xl p-8 shadow-lg border border-gray-100 
                hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1
                ${index === 1 ? 'md:-mt-4' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-br from-ffeb99 to-ffb700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-24">
                  <Image
                    src={pkg.image}
                    alt={`Installation ${pkg.size}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-[#0B293D] mb-3">{pkg.size}</h3>
                <div className="flex flex-col items-center">
                  <p className={`text-3xl font-bold ${pkg.priceColor}`}>{pkg.price}</p>
                  <p className="text-sm text-gray-600 mt-2 bg-white/50 px-3 py-1 rounded-full">
                    Prime à l'autoconsommation déduite
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-[#0B293D] mb-4">Ce qui est inclus :</h4>
                <ul className="space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`${pkg.buttonColor} rounded-full p-1 mt-0.5`}>
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 
                  ${pkg.buttonColor} shadow-lg hover:shadow-xl transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${pkg.iconColor}`}
              >
                Je passe au solaire
              </button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Prix incluant la prime à l'autoconsommation reversée en une fois
          </p>
          <p className="text-xs text-gray-400">
            * Offres valables sous réserve d'éligibilité et de faisabilité technique
          </p>
        </div>
      </div>
    </section>
  );
}
