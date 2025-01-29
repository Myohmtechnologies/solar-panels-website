'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, SunIcon, BoltIcon, ArrowTrendingUpIcon, CurrencyEuroIcon, CloudIcon } from '@heroicons/react/24/outline';

interface CalculatorResult {
  annualSavingsMyLight: number;
  annualSavingsEdfOa: number;
  selfConsumptionRate: number;
  annualProduction: number;
  annualConsumptionKWh: number;
  annualBill: number;
  myLightROIYear: number;
  edfROIYear: number;
  installationPrice: number;
  additionalSavings: number;
  yearlyProjection: {
    year: number;
    myLightSavings: number;
    edfSavings: number;
    myLightRemaining: number;
    edfRemaining: number;
  }[];
  electricityPrice: number;
}

const EXAMPLE_CALCULATION = {
  monthlyBill: "200",
  roofOrientation: "sud",
  roofSlope: "30",
  results: {
    annualSavingsMyLight: 1680,
    annualSavingsEdfOa: 960,
    selfConsumptionRate: 75,
    annualProduction: 8400,
    myLightROIYear: 7,
    edfROIYear: 10,
    installationPrice: 14890,
    additionalSavings: 720,
    yearlyProjection: [
      {
        year: 1,
        myLightSavings: 1680,
        edfSavings: 960,
        myLightRemaining: 13110,
        edfRemaining: 14890
      },
      {
        year: 2,
        myLightSavings: 1730,
        edfSavings: 989,
        myLightRemaining: 11380,
        edfRemaining: 13901
      },
      {
        year: 3,
        myLightSavings: 1782,
        edfSavings: 1019,
        myLightRemaining: 9598,
        edfRemaining: 12882
      },
      {
        year: 4,
        myLightSavings: 1835,
        edfSavings: 1050,
        myLightRemaining: 7763,
        edfRemaining: 11832
      },
      {
        year: 5,
        myLightSavings: 1890,
        edfSavings: 1081,
        myLightRemaining: 5873,
        edfRemaining: 10751
      }
    ]
  }
};

export const MyLightCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(200);
  const [selectedInstallation, setSelectedInstallation] = useState<number>(6);
  const [roofOrientation, setRoofOrientation] = useState<string>('sud');
  const [roofSlope, setRoofSlope] = useState<string>('30');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CalculatorResult | null>(null);
  const [showExample, setShowExample] = useState(true);

  const installationOptions = [
    { 
      size: 3, 
      label: "3 kWc - Petite famille", 
      description: "Idéal pour un couple ou une petite famille", 
      price: 6890,
      production: 6400 // 3kWc × 1400 kWh/kWc
    },
    { 
      size: 6, 
      label: "6 kWc - Famille moyenne", 
      description: "Parfait pour une famille de 3-4 personnes", 
      price: 6890,
      production: 12800 // 6kWc × 1400 kWh/kWc
    },
    { 
      size: 9, 
      label: "9 kWc - Grande famille", 
      description: "Adapté pour une grande famille ou une grande maison", 
      price: 6890,
      production: 21600 // 9kWc × 1400 kWh/kWc
    }
  ];

  const ELECTRICITY_PRICE = 0.25; // Prix du kWh en euros

  const calculateSavings = (monthlyBill: number, installationSize: number) => {
    const orientationEfficiency: { [key: string]: number } = {
      sud: 1,
      sudest: 0.95,
      sudouest: 0.95,
      est: 0.85,
      ouest: 0.85,
    };

    const slopeEfficiency: { [key: string]: number } = {
      '0': 0.85,
      '15': 0.92,
      '30': 1,
      '45': 0.95,
      '60': 0.85,
    };

    const baseEfficiency = orientationEfficiency[roofOrientation] * slopeEfficiency[roofSlope];
    const installation = installationOptions.find(opt => opt.size === installationSize)!;
    
    // Calcul de la production annuelle ajustée selon l'orientation et la pente
    const annualProduction = Math.round(installation.production * baseEfficiency);
    
    // Calcul de la consommation annuelle en kWh et en euros
    const annualBill = monthlyBill * 12;
    const annualConsumptionKWh = Math.round(annualBill / ELECTRICITY_PRICE);

    // Calcul des économies basé sur la production et la consommation
    let myLightSavings, edfSavings;

    // Avec MyLight : 100% de l'énergie produite est consommée
    myLightSavings = Math.round(annualProduction * ELECTRICITY_PRICE);

    // Avec EDF OA :
    // - 60% de l'énergie est autoconsommée (économie au prix du kWh)
    // - 40% est revendue à EDF au tarif de rachat
    const edfAutoConsumption = annualProduction * 0.60;
    const edfInjection = annualProduction * 0.40;
    
    const EDF_BUYBACK_RATE = 0.13; // 10 centimes/kWh

    edfSavings = Math.round(
      (edfAutoConsumption * ELECTRICITY_PRICE) + // Économies sur l'autoconsommation
      (edfInjection * EDF_BUYBACK_RATE)         // Revente du surplus
    );

    // Calcul du temps de retour sur investissement
    const yearlyProjection = [];
    let cumulativeMyLight = 0;
    let cumulativeEDF = 0;
    let year = 0;
    let myLightROIYear = 0;
    let edfROIYear = 0;
    
    while ((cumulativeMyLight < installation.price || cumulativeEDF < installation.price) && year < 25) {
      const yearMyLightSavings = Math.round(myLightSavings * Math.pow(1.03, year));
      const yearEDFSavings = Math.round(edfSavings * Math.pow(1.03, year));
      
      cumulativeMyLight += yearMyLightSavings;
      cumulativeEDF += yearEDFSavings;

      if (cumulativeMyLight >= installation.price && myLightROIYear === 0) {
        myLightROIYear = year + 1;
      }
      if (cumulativeEDF >= installation.price && edfROIYear === 0) {
        edfROIYear = year + 1;
      }

      yearlyProjection.push({
        year: year + 1,
        myLightSavings: yearMyLightSavings,
        edfSavings: yearEDFSavings,
        myLightRemaining: Math.max(0, installation.price - cumulativeMyLight),
        edfRemaining: Math.max(0, installation.price - cumulativeEDF)
      });
      
      year++;
    }

    setResults({
      annualSavingsMyLight: myLightSavings,
      annualSavingsEdfOa: edfSavings,
      selfConsumptionRate: 100,
      annualProduction,
      annualConsumptionKWh,
      annualBill,
      myLightROIYear,
      edfROIYear,
      installationPrice: installation.price,
      additionalSavings: myLightSavings - edfSavings,
      yearlyProjection,
      electricityPrice: ELECTRICITY_PRICE
    });
    setShowResults(true);
  };

  const handleCalculate = () => {
    calculateSavings(monthlyBill, selectedInstallation);
  };

  const ResultCard = ({ title, value, icon: Icon, suffix = "€", description = "" }) => (
    <div className="bg-gradient-to-br from-ffeb99/10 to-white p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-[#ffb700] mr-2" />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-2xl font-bold text-[#232323]">{value.toLocaleString()}{suffix}</p>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
    </div>
  );

  const ComparisonTable = ({ data }) => (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Année</th>
            <th className="text-left p-2">My Light</th>
            <th className="text-left p-2">EDF OA</th>
            <th className="text-left p-2">Différence</th>
          </tr>
        </thead>
        <tbody>
          {data.myLight.map((value, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-ffeb99/10' : ''}>
              <td className="p-2">Année {index + 1}</td>
              <td className="p-2">{value.toLocaleString()}€</td>
              <td className="p-2">{data.edfOa[index].toLocaleString()}€</td>
              <td className="p-2 font-semibold text-[#ffb700]">
                +{(value - data.edfOa[index]).toLocaleString()}€
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white shadow-lg">
      <div className="space-y-8">
        {/* Inputs Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facture mensuelle actuelle (€)
            </label>
            <input
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ffeb99 focus:border-transparent transition-colors"
              placeholder="Exemple : 200€"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Orientation du toit
            </label>
            <select
              value={roofOrientation}
              onChange={(e) => setRoofOrientation(e.target.value)}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ffeb99 focus:border-transparent transition-colors"
            >
              <option value="sud">Sud</option>
              <option value="sudest">Sud-Est</option>
              <option value="sudouest">Sud-Ouest</option>
              <option value="est">Est</option>
              <option value="ouest">Ouest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pente du toit (degrés)
            </label>
            <select
              value={roofSlope}
              onChange={(e) => setRoofSlope(e.target.value)}
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ffeb99 focus:border-transparent transition-colors"
            >
              <option value="0">0° (Plat)</option>
              <option value="15">15°</option>
              <option value="30">30°</option>
              <option value="45">45°</option>
              <option value="60">60°</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taille de l'installation
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              {installationOptions.map((option) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedInstallation(option.size)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedInstallation === option.size
                      ? 'border-ffb700 bg-gradient-to-r from-ffeb99/20 to-ffb700/20'
                      : 'border-gray-200 hover:border-ffeb99'
                  }`}
                >
                  <h3 className="font-semibold text-[#232323]">{option.label}</h3>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  <p className="text-sm text-gray-600 mt-1">À partir de {option.price.toLocaleString('fr-FR')} €</p>
                  <p className="text-sm text-gray-600 mt-1">Production : {option.production} kWh/an</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-4 px-6 bg-gradient-to-r from-ffeb99 to-ffb700 text-[#232323] font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Calculer mes économies
          </button>
        </div>

        {/* Results Section */}
        {showResults && results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-center mb-6">Vos économies annuelles</h3>
              
              <div className="grid gap-6">
                {/* My Light vs EDF OA Comparison */}
                <div className="bg-gradient-to-br from-ffeb99/10 to-white p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                      <div>
                        <h4 className="font-semibold text-[#232323]">My Light</h4>
                        <p className="text-sm text-gray-600">Batterie virtuelle</p>
                      </div>
                      <span className="text-2xl font-bold text-ffb700">
                        {results.annualSavingsMyLight.toLocaleString('fr-FR')} €/an
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                      <div>
                        <h4 className="font-semibold text-[#232323]">EDF OA</h4>
                        <p className="text-sm text-gray-600">Revente classique</p>
                      </div>
                      <span className="text-2xl font-bold text-gray-700">
                        {results.annualSavingsEdfOa.toLocaleString('fr-FR')} €/an
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-ffeb99/20 to-ffb700/20">
                      <h4 className="font-semibold text-[#232323]">Économies supplémentaires</h4>
                      <span className="text-2xl font-bold text-ffb700">
                        +{results.additionalSavings.toLocaleString('fr-FR')} €/an
                      </span>
                    </div>
                  </div>
                </div>

                {/* Résumé de la consommation et production */}
                <div className="bg-gradient-to-br from-ffeb99/10 to-white p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-lg mb-4">Votre profil énergétique</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <div>
                          <h5 className="font-semibold text-[#232323]">Consommation annuelle</h5>
                          <p className="text-sm text-gray-600">Basée sur votre facture</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-700">{results.annualConsumptionKWh.toLocaleString('fr-FR')} kWh</span>
                          <p className="text-sm text-gray-600">{results.annualBill.toLocaleString('fr-FR')} €/an</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <div>
                          <h5 className="font-semibold text-[#232323]">Production annuelle</h5>
                          <p className="text-sm text-gray-600">Installation {selectedInstallation} kWc</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-ffb700">{results.annualProduction.toLocaleString('fr-FR')} kWh</span>
                          <p className="text-sm text-gray-600">{Math.round(results.annualProduction * results.electricityPrice).toLocaleString('fr-FR')} €/an</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Résumé de la rentabilité */}
                <div className="bg-gradient-to-br from-ffeb99/10 to-white p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-lg mb-4">Comparaison des temps de rentabilité</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <div>
                          <h5 className="font-semibold text-[#232323]">My Light</h5>
                          <p className="text-sm text-gray-600">Batterie virtuelle</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-ffb700">{results.myLightROIYear} ans</span>
                          <p className="text-sm text-gray-600">pour rentabiliser</p>
                        </div>
                      </div>
                      <div className="relative pt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-ffeb99 to-ffb700 h-2 rounded-full"
                            style={{ width: `${(results.myLightROIYear / 25) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <div>
                          <h5 className="font-semibold text-[#232323]">EDF OA</h5>
                          <p className="text-sm text-gray-600">Revente classique</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-700">{results.edfROIYear} ans</span>
                          <p className="text-sm text-gray-600">pour rentabiliser</p>
                        </div>
                      </div>
                      <div className="relative pt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gray-500 h-2 rounded-full"
                            style={{ width: `${(results.edfROIYear / 25) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Économisez {Math.round((results.edfROIYear - results.myLightROIYear) * 12)} mois de temps de retour sur investissement avec My Light !
                  </p>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-3 gap-4">
                  <ResultCard
                    title="Installation"
                    value={selectedInstallation}
                    icon={SunIcon}
                    suffix="kWc"
                    description="Puissance de votre installation"
                  />
                  <ResultCard
                    title="Production"
                    value={results.annualProduction}
                    icon={BoltIcon}
                    suffix="kWh/an"
                    description="Production annuelle estimée"
                  />
                  <ResultCard
                    title="Autoconsommation"
                    value={results.selfConsumptionRate}
                    icon={ChartBarIcon}
                    suffix="%"
                    description="Taux d'utilisation de votre production"
                  />
                  <ResultCard
                    title="Prix de l'installation"
                    value={results.installationPrice}
                    icon={CurrencyEuroIcon}
                    suffix="€"
                    description="Prix de l'installation"
                  />
                  <ResultCard
                    title="Temps de retour sur investissement My Light"
                    value={results.myLightROIYear}
                    icon={ArrowTrendingUpIcon}
                    suffix="ans"
                    description="Temps de retour sur investissement"
                  />
                  <ResultCard
                    title="Temps de retour sur investissement EDF OA"
                    value={results.edfROIYear}
                    icon={ArrowTrendingUpIcon}
                    suffix="ans"
                    description="Temps de retour sur investissement"
                  />
                  <ResultCard
                    title="Prix de l'électricité"
                    value={results.electricityPrice}
                    icon={CurrencyEuroIcon}
                    suffix="€/kWh"
                    description="Prix de l'électricité"
                  />
                </div>

                {/* Projection jusqu'à rentabilité */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Projection jusqu'à la rentabilité</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left py-2">Année</th>
                          <th className="text-right py-2">Économies My Light</th>
                          <th className="text-right py-2">Économies EDF OA</th>
                          <th className="text-right py-2">Reste à rentabiliser My Light</th>
                          <th className="text-right py-2">Reste à rentabiliser EDF OA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.yearlyProjection.map((projection) => (
                          <tr key={projection.year} className="border-t">
                            <td className="py-2">Année {projection.year}</td>
                            <td className="text-right text-ffb700 font-semibold">
                              {projection.myLightSavings.toLocaleString('fr-FR')} €
                            </td>
                            <td className="text-right text-gray-700 font-semibold">
                              {projection.edfSavings.toLocaleString('fr-FR')} €
                            </td>
                            <td className="text-right">
                              {projection.myLightRemaining > 0 
                                ? projection.myLightRemaining.toLocaleString('fr-FR') + ' €'
                                : <span className="text-green-600 font-semibold">Rentabilisé !</span>
                              }
                            </td>
                            <td className="text-right">
                              {projection.edfRemaining > 0 
                                ? projection.edfRemaining.toLocaleString('fr-FR') + ' €'
                                : <span className="text-green-600 font-semibold">Rentabilisé !</span>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Projection basée sur une augmentation annuelle des prix de l'électricité de 3%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
