'use client';

import React, { useState } from 'react';
import { 
  BoltIcon,
  SunIcon,
  ArrowTrendingUpIcon,
  CurrencyEuroIcon,
  ArrowRightIcon,
  LightBulbIcon,
  Battery100Icon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface SimulationResult {
  monthlyProduction: number;
  edfOAAutoConsumed: number;
  edfOASold: number;
  edfOAAutoSavings: number;
  edfOASaleIncome: number;
  edfOATotalSavings: number;
  batteryAutoConsumed: number;
  batterySold: number;
  batteryAutoSavings: number;
  batterySaleIncome: number;
  batteryTotalSavings: number;
  additionalSavings: number;
  additionalSavingsPercentage: number;
}

const ELECTRICITY_PRICE = 0.205;
const BUYBACK_PRICE = 0.12;
const EDF_OA_AUTOCONSUMPTION_RATE = 0.6;
const BATTERY_AUTOCONSUMPTION_RATE = 0.9;

const INSTALLATION_SIZES = [
  { value: 3, label: '3 kWc', production: 5000 },
  { value: 6, label: '6 kWc', production: 8000 },
  { value: 9, label: '9 kWc', production: 14000 },
];

const BATTERY_CAPACITIES = [
  { value: 5, label: '5 kWh' },
  { value: 10, label: '10 kWh' },
  { value: 15, label: '15 kWh' },
];

const BatterySimulator = () => {
  const [consumption, setConsumption] = useState<number>(10000);
  const [installationSize, setInstallationSize] = useState<number>(6);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(10);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<SimulationResult | null>(null);

  const handleSimulate = () => {
    const selectedInstallation = INSTALLATION_SIZES.find(size => size.value === installationSize);
    const monthlyProduction = selectedInstallation ? selectedInstallation.production / 12 : 0;
    
    const edfOAAutoConsumed = monthlyProduction * EDF_OA_AUTOCONSUMPTION_RATE;
    const edfOASold = monthlyProduction * (1 - EDF_OA_AUTOCONSUMPTION_RATE);
    
    const edfOAAutoSavings = edfOAAutoConsumed * ELECTRICITY_PRICE;
    const edfOASaleIncome = edfOASold * BUYBACK_PRICE;
    const edfOATotalSavings = edfOAAutoSavings + edfOASaleIncome;
    
    const batteryAutoConsumed = monthlyProduction * BATTERY_AUTOCONSUMPTION_RATE;
    const batterySold = monthlyProduction * (1 - BATTERY_AUTOCONSUMPTION_RATE);
    
    const batteryAutoSavings = batteryAutoConsumed * ELECTRICITY_PRICE;
    const batterySaleIncome = batterySold * BUYBACK_PRICE;
    const batteryTotalSavings = batteryAutoSavings + batterySaleIncome;
    
    const additionalSavings = batteryTotalSavings - edfOATotalSavings;
    const additionalSavingsPercentage = (additionalSavings / edfOATotalSavings) * 100;
    
    setResults({
      monthlyProduction,
      edfOAAutoConsumed,
      edfOASold,
      edfOAAutoSavings,
      edfOASaleIncome,
      edfOATotalSavings,
      batteryAutoConsumed,
      batterySold,
      batteryAutoSavings,
      batterySaleIncome,
      batteryTotalSavings,
      additionalSavings,
      additionalSavingsPercentage
    });
    setShowResults(true);
  };

  const formatEnergy = (value: number): string => `${Math.round(value)} kWh`;
  const formatCurrency = (value: number): string => `${Math.round(value)}€/mois`;
  const formatPercentage = (value: number): string => `${Math.round(value)}%`;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Simulateur d'économies
        </h3>
        <p className="text-gray-600">
          Calculez vos économies avec une installation solaire et une batterie
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 divide-y divide-gray-200">
          <div className="p-6 hover:bg-blue-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <LightBulbIcon className="w-6 h-6 text-blue-600" />
                </div>
                <label className="block text-base font-medium text-gray-900">
                  Consommation annuelle
                </label>
              </div>
              <div className="flex items-center space-x-2 bg-white shadow-sm border border-blue-200 rounded-md px-3 py-2">
                <input
                  type="number"
                  value={consumption}
                  onChange={(e) => setConsumption(Number(e.target.value))}
                  className="block w-32 border-0 p-0 focus:ring-0 sm:text-sm"
                  placeholder="10000"
                />
                <span className="text-sm font-medium text-gray-700">kWh</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 hover:bg-blue-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <SunIcon className="w-6 h-6 text-blue-600" />
                </div>
                <label className="block text-base font-medium text-gray-900">
                  Taille de l'installation
                </label>
              </div>
              <div className="bg-white shadow-sm border border-blue-200 rounded-md">
                <select
                  value={installationSize}
                  onChange={(e) => setInstallationSize(Number(e.target.value))}
                  className="block w-48 border-0 bg-transparent py-2 pl-3 pr-10 focus:ring-0 sm:text-sm"
                >
                  {INSTALLATION_SIZES.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label} ({Math.round(size.production / 12)} kWh/mois)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="p-6 hover:bg-blue-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Battery100Icon className="w-6 h-6 text-blue-600" />
                </div>
                <label className="block text-base font-medium text-gray-900">
                  Capacité de la batterie
                </label>
              </div>
              <div className="bg-white shadow-sm border border-blue-200 rounded-md">
                <select
                  value={batteryCapacity}
                  onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                  className="block w-32 border-0 bg-transparent py-2 pl-3 pr-10 focus:ring-0 sm:text-sm"
                >
                  {BATTERY_CAPACITIES.map((capacity) => (
                    <option key={capacity.value} value={capacity.value}>
                      {capacity.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleSimulate}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#116290] rounded-md hover:bg-[#0d4e73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#116290] shadow-md hover:shadow-lg transition-all"
          >
            Calculer mes économies
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
      
      {showResults && results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Résultats de la simulation
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-medium text-gray-900 mb-4">
                  Sans batterie (EDF OA)
                </h5>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Autoconsommation</dt>
                    <dd className="font-medium">{formatEnergy(results.edfOAAutoConsumed)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Revente</dt>
                    <dd className="font-medium">{formatEnergy(results.edfOASold)}</dd>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <dt className="text-gray-900 font-medium">Économies totales</dt>
                    <dd className="font-bold text-green-600">{formatCurrency(results.edfOATotalSavings)}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-900 mb-4">
                  Avec batterie
                </h5>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Autoconsommation</dt>
                    <dd className="font-medium">{formatEnergy(results.batteryAutoConsumed)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Revente</dt>
                    <dd className="font-medium">{formatEnergy(results.batterySold)}</dd>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <dt className="text-gray-900 font-medium">Économies totales</dt>
                    <dd className="font-bold text-green-600">{formatCurrency(results.batteryTotalSavings)}</dd>
                  </div>
                </dl>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Économies supplémentaires avec batterie</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.additionalSavings)} ({formatPercentage(results.additionalSavingsPercentage)})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BatterySimulator;
