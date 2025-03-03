'use client';

import { useState, useEffect } from 'react';
import {
  SunIcon,
  BoltIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/24/outline';

// Constants
const ELECTRICITY_PRICE = 0.25; // €/kWh
const BUYBACK_PRICE = 0.13; // €/kWh
const SOLAR_PRODUCTION_PER_KWC = 1200; // kWh/kWc/an en moyenne en France

// Battery options
const BATTERY_OPTIONS = [
  { capacity: 5, label: '5 kWh', autoconsumptionRate: 0.65 },
  { capacity: 10, label: '10 kWh', autoconsumptionRate: 0.80 },
  { capacity: 15, label: '15 kWh', autoconsumptionRate: 0.90 },
];

interface SimulationResult {
  monthlyBill: number;
  annualConsumption: number;
  annualProduction: number;
  
  // EDF OA
  edfOAAutoconsumption: number;
  edfOASoldEnergy: number;
  edfOABoughtEnergy: number;
  edfOAAnnualSavings: number;
  edfOAMonthlyBill: number;
  
  // Battery
  batteryAutoconsumption: number;
  batterySoldEnergy: number;
  batteryBoughtEnergy: number;
  batteryAnnualSavings: number;
  batteryMonthlyBill: number;
  
  // Difference
  additionalSavings: number;
  monthlyBillSavings: number;
}

const BatteryComparisonSimulator = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(150);
  const [installationSize, setInstallationSize] = useState<number>(6);
  const [selectedBattery, setSelectedBattery] = useState(BATTERY_OPTIONS[0]);
  const [results, setResults] = useState<SimulationResult | null>(null);

  const calculateSimulation = () => {
    // Conversion de la facture mensuelle en consommation annuelle
    const monthlyConsumption = monthlyBill / ELECTRICITY_PRICE;
    const annualConsumption = monthlyConsumption * 12;

    // Production solaire annuelle
    const annualProduction = installationSize * SOLAR_PRODUCTION_PER_KWC;

    // Scénario EDF OA (sans batterie)
    const edfOAAutoconsumptionRate = 0.30; // Taux moyen d'autoconsommation sans batterie
    const edfOAAutoconsumption = Math.min(annualProduction * edfOAAutoconsumptionRate, annualConsumption);
    const edfOASoldEnergy = annualProduction - edfOAAutoconsumption;
    const edfOABoughtEnergy = annualConsumption - edfOAAutoconsumption;
    
    const edfOAAnnualSavings = 
      (edfOAAutoconsumption * ELECTRICITY_PRICE) + // Économies sur l'autoconsommation
      (edfOASoldEnergy * BUYBACK_PRICE) - // Revenus de la vente
      (edfOABoughtEnergy * ELECTRICITY_PRICE); // Coût de l'électricité achetée

    const edfOAMonthlyBill = ((edfOABoughtEnergy * ELECTRICITY_PRICE) - (edfOASoldEnergy * BUYBACK_PRICE)) / 12;

    // Scénario avec batterie
    const batteryAutoconsumption = Math.min(annualProduction * selectedBattery.autoconsumptionRate, annualConsumption);
    const batterySoldEnergy = annualProduction - batteryAutoconsumption;
    const batteryBoughtEnergy = annualConsumption - batteryAutoconsumption;
    
    const batteryAnnualSavings = 
      (batteryAutoconsumption * ELECTRICITY_PRICE) + // Économies sur l'autoconsommation
      (batterySoldEnergy * BUYBACK_PRICE) - // Revenus de la vente
      (batteryBoughtEnergy * ELECTRICITY_PRICE); // Coût de l'électricité achetée

    const batteryMonthlyBill = ((batteryBoughtEnergy * ELECTRICITY_PRICE) - (batterySoldEnergy * BUYBACK_PRICE)) / 12;

    setResults({
      monthlyBill,
      annualConsumption,
      annualProduction,
      edfOAAutoconsumption,
      edfOASoldEnergy,
      edfOABoughtEnergy,
      edfOAAnnualSavings,
      edfOAMonthlyBill,
      batteryAutoconsumption,
      batterySoldEnergy,
      batteryBoughtEnergy,
      batteryAnnualSavings,
      batteryMonthlyBill,
      additionalSavings: batteryAnnualSavings - edfOAAnnualSavings,
      monthlyBillSavings: monthlyBill - batteryMonthlyBill
    });
  };

  useEffect(() => {
    calculateSimulation();
  }, [monthlyBill, installationSize, selectedBattery]);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Simulateur Solaire avec Batterie
        </h2>
        <p className="text-gray-600 text-lg">
          Comparez les économies entre une installation solaire classique et une installation avec batterie
        </p>
      </div>

      <div className="space-y-8">
        {/* Inputs */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configurez votre installation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Facture mensuelle */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Facture mensuelle actuelle
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full pl-4 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg font-medium"
                  min="50"
                  step="10"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-1 rounded-md">
                  <span className="text-gray-600 font-medium">€</span>
                </div>
              </div>
            </div>

            {/* Puissance installation */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Puissance installation
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={installationSize}
                  onChange={(e) => setInstallationSize(Number(e.target.value))}
                  className="w-full pl-4 pr-16 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg font-medium"
                  min="3"
                  max="9"
                  step="1"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 px-3 py-1 rounded-md">
                  <span className="text-gray-600 font-medium">kWc</span>
                </div>
              </div>
            </div>

            {/* Capacité batterie */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Capacité batterie
              </label>
              <div className="relative">
                <select
                  value={selectedBattery.capacity}
                  onChange={(e) => setSelectedBattery(BATTERY_OPTIONS.find(b => b.capacity === Number(e.target.value)) || BATTERY_OPTIONS[0])}
                  className="w-full pl-4 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg font-medium appearance-none"
                >
                  {BATTERY_OPTIONS.map((option) => (
                    <option key={option.capacity} value={option.capacity}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* EDF OA */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <SunIcon className="h-6 w-6 mr-2 text-yellow-500" />
                  EDF OA
                </h3>
                <span className="px-4 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
                  Installation Standard
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Autoconsommation</p>
                    <p className="text-lg font-semibold">{Math.round(results.edfOAAutoconsumption)} kWh/an</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Énergie vendue</p>
                    <p className="text-lg font-semibold">{Math.round(results.edfOASoldEnergy)} kWh/an</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">Facture actuelle</span>
                    <span className="text-lg font-semibold">{results.monthlyBill}€/mois</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Nouvelle facture</span>
                    <span className="text-xl font-bold text-green-600">{Math.round(results.edfOAMonthlyBill)}€/mois</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">Économies annuelles</p>
                  <p className="text-2xl font-bold text-green-600">{Math.round(results.edfOAAnnualSavings)}€</p>
                </div>
              </div>
            </div>

            {/* Battery */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BoltIcon className="h-6 w-6 mr-2 text-blue-500" />
                  Batterie {selectedBattery.label}
                </h3>
                <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  Installation Avancée
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Autoconsommation</p>
                    <p className="text-lg font-semibold">{Math.round(results.batteryAutoconsumption)} kWh/an</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Énergie vendue</p>
                    <p className="text-lg font-semibold">{Math.round(results.batterySoldEnergy)} kWh/an</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-gray-600">Facture actuelle</span>
                    <span className="text-lg font-semibold">{results.monthlyBill}€/mois</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600">Nouvelle facture</span>
                    <span className="text-xl font-bold text-green-600">{Math.round(results.batteryMonthlyBill)}€/mois</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">Économies annuelles</p>
                  <p className="text-2xl font-bold text-green-600">{Math.round(results.batteryAnnualSavings)}€</p>
                </div>
              </div>
            </div>

            {/* Additional Savings */}
            <div className="md:col-span-2 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm border border-green-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <CurrencyEuroIcon className="h-6 w-6 mr-2 text-green-500" />
                  Économies supplémentaires avec batterie
                </h3>
                <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Gain additionnel
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-2">Par mois</p>
                  <p className="text-3xl font-bold text-green-600">
                    +{Math.round(results.monthlyBillSavings)}€
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-2">Par an</p>
                  <p className="text-3xl font-bold text-green-600">
                    +{Math.round(results.additionalSavings)}€
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatteryComparisonSimulator;
