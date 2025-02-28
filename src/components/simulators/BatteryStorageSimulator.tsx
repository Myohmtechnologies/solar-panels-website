'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  BoltIcon, 
  CurrencyEuroIcon,
  ArrowPathIcon,
  SunIcon,
  MoonIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

// Define the installation size options
const INSTALLATION_SIZES = [
  { value: 3, label: '3 kW', production: 6400 },
  { value: 6, label: '6 kW', production: 12800 },
  { value: 9, label: '9 kW', production: 21600 }
];

// Define the battery capacity options
const BATTERY_CAPACITIES = [
  { value: 5, label: '5 kW' },
  { value: 10, label: '10 kW' },
  { value: 15, label: '15 kW' }
];

// Price constants
const ELECTRICITY_PRICE = 0.25; // €/kWh
const EDF_BUYBACK_PRICE = 0.13; // €/kWh
const DAY_CONSUMPTION_RATIO = 0.3; // 30% de la consommation pendant le jour
const NIGHT_CONSUMPTION_RATIO = 0.7; // 70% de la consommation pendant la nuit

// Calculate autoconsumption rate based on battery capacity
const getAutoconsumptionRate = (batteryCapacity: number) => {
  // Base autoconsumption rate without battery is 60%
  // With battery, it increases based on battery capacity
  const baseRate = 0.6; // 60% without battery
  const maxRate = 0.95; // Max 95% with large battery
  
  // Simple formula for demonstration - can be refined with real data
  const increaseFactor = batteryCapacity / 20; // Up to 0.75 for 15kW
  
  return Math.min(baseRate + increaseFactor, maxRate);
};

interface SimulationResult {
  // Consommation
  dayConsumption: number;
  nightConsumption: number;
  totalConsumption: number;
  monthlyProduction: number;
  
  // Facture initiale
  initialBill: number;
  
  // Scénario EDF OA
  edfOADayAutoConsumed: number;
  edfOASold: number;
  edfOANightBought: number;
  edfOASavings: number;
  edfOACosts: number;
  edfOANetSavings: number;
  edfOAFinalBill: number;
  
  // Scénario Batterie
  batteryDayAutoConsumed: number;
  batteryNightUsed: number;
  batteryNightBought: number;
  batterySold: number;
  batterySavings: number;
  batteryCosts: number;
  batteryNetSavings: number;
  batteryFinalBill: number;
  
  // Comparaison
  difference: number;
  differencePercentage: number;
  
  // Compatibilité avec l'ancien code
  edfOAAutoconsumption: number;
  batteryAutoconsumption: number;
}

const BatteryStorageSimulator = () => {
  // Form state
  const [monthlyBill, setMonthlyBill] = useState<number>(150);
  const [installationSize, setInstallationSize] = useState<number>(INSTALLATION_SIZES[1].value);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(BATTERY_CAPACITIES[1].value);
  
  // Results state
  const [results, setResults] = useState<SimulationResult | null>(null);
  
  // Calculate consumption in kWh from bill
  const calculateConsumption = (bill: number) => {
    return bill / ELECTRICITY_PRICE;
  };
  
  // Run simulation when inputs change
  useEffect(() => {
    if (monthlyBill > 0 && installationSize > 0 && batteryCapacity > 0) {
      runSimulation();
    }
  }, [monthlyBill, installationSize, batteryCapacity]);
  
  const runSimulation = () => {
    // Calcul de la consommation mensuelle en kWh
    const totalConsumption = calculateConsumption(monthlyBill);
    
    // Répartition jour/nuit de la consommation
    const dayConsumption = totalConsumption * DAY_CONSUMPTION_RATIO;
    const nightConsumption = totalConsumption * NIGHT_CONSUMPTION_RATIO;
    
    // Production mensuelle de l'installation
    const selectedInstallation = INSTALLATION_SIZES.find(size => size.value === installationSize);
    const monthlyProduction = selectedInstallation ? selectedInstallation.production / 12 : 0;
    
    // Facture initiale (avant installation solaire)
    const initialBill = monthlyBill;
    
    // Scénario EDF OA
    const edfOADayAutoConsumed = Math.min(dayConsumption, monthlyProduction);
    const edfOASold = Math.max(0, monthlyProduction - edfOADayAutoConsumed);
    const edfOANightBought = nightConsumption;
    
    // Revenus de la vente à EDF
    const edfOASaleIncome = edfOASold * EDF_BUYBACK_PRICE;
    // Coûts restants (achat d'électricité la nuit)
    const edfOACosts = edfOANightBought * ELECTRICITY_PRICE;
    // Économies nettes = facture initiale - coûts restants + revenus de la vente
    const edfOANetSavings = Math.min(initialBill, initialBill - edfOACosts + edfOASaleIncome);
    // Facture finale = facture initiale - économies nettes
    const edfOAFinalBill = Math.max(0, initialBill - edfOANetSavings);
    
    // Scénario avec batterie
    const batteryAutoconsumptionRate = getAutoconsumptionRate(batteryCapacity);
    const batteryDayAutoConsumed = Math.min(dayConsumption, monthlyProduction);
    const batteryExcess = Math.max(0, monthlyProduction - batteryDayAutoConsumed);
    
    // Énergie stockée dans la batterie (limitée par la capacité de la batterie)
    const maxBatteryStorage = batteryCapacity; // kWh que la batterie peut stocker
    const batteryStored = Math.min(batteryExcess, maxBatteryStorage);
    
    // Énergie utilisée depuis la batterie la nuit (limitée par ce qui est stocké)
    const batteryNightUsed = Math.min(nightConsumption, batteryStored);
    
    // Énergie achetée la nuit si la batterie ne suffit pas
    const batteryNightBought = nightConsumption - batteryNightUsed;
    
    // Surplus vendu à EDF (ce qui n'est ni autoconsommé ni stocké)
    const batterySold = Math.max(0, batteryExcess - batteryStored);
    
    // Revenus de la vente à EDF
    const batterySaleIncome = batterySold * EDF_BUYBACK_PRICE;
    // Coûts restants (achat d'électricité la nuit)
    const batteryCosts = batteryNightBought * ELECTRICITY_PRICE;
    // Économies nettes = facture initiale - coûts restants + revenus de la vente
    const batteryNetSavings = Math.min(initialBill, initialBill - batteryCosts + batterySaleIncome);
    // Facture finale = facture initiale - économies nettes
    const batteryFinalBill = Math.max(0, initialBill - batteryNetSavings);
    
    // Pour la compatibilité avec l'interface, calculons les valeurs d'économies par source
    const edfOASavings = edfOADayAutoConsumed * ELECTRICITY_PRICE;
    const batterySavings = (batteryDayAutoConsumed * ELECTRICITY_PRICE) + (batteryNightUsed * ELECTRICITY_PRICE);
    
    // Calcul de la différence et du pourcentage
    let difference = batteryNetSavings - edfOANetSavings;
    let differencePercentage = 0;
    
    // Si les deux factures finales sont à 0, il n'y a pas d'économies supplémentaires
    if (edfOAFinalBill === 0 && batteryFinalBill === 0) {
      difference = 0;
      differencePercentage = 0;
    } 
    // Si seulement la facture avec batterie est à 0, c'est 100% d'économies par rapport à EDF OA
    else if (batteryFinalBill === 0 && edfOAFinalBill > 0) {
      difference = edfOAFinalBill;
      differencePercentage = 100;
    }
    // Sinon, calcul normal
    else if (edfOANetSavings > 0) {
      differencePercentage = (difference / edfOANetSavings) * 100;
    }
    
    // Calcul des résultats finaux
    setResults({
      // Consommation
      dayConsumption,
      nightConsumption,
      totalConsumption,
      monthlyProduction,
      
      // Facture initiale
      initialBill,
      
      // Scénario EDF OA
      edfOADayAutoConsumed,
      edfOASold,
      edfOANightBought,
      edfOASavings,
      edfOACosts,
      edfOANetSavings,
      edfOAFinalBill,
      
      // Scénario Batterie
      batteryDayAutoConsumed,
      batteryNightUsed,
      batteryNightBought,
      batterySold,
      batterySavings,
      batteryCosts,
      batteryNetSavings,
      batteryFinalBill,
      
      // Comparaison
      difference,
      differencePercentage,
      
      // Compatibilité avec l'ancien code
      edfOAAutoconsumption: edfOADayAutoConsumed,
      batteryAutoconsumption: batteryDayAutoConsumed + batteryNightUsed
    });
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
  };
  
  // Format kWh
  const formatEnergy = (value: number) => {
    return `${value.toFixed(0)} kWh`;
  };
  
  // Format percentage
  const formatPercentage = (value: number) => {
    return `${value.toFixed(0)}%`;
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-br from-ffeb99 to-ffb700 p-6">
        <h3 className="text-2xl font-bold text-gray-900">Simulateur d'économies avec batterie</h3>
        <p className="text-gray-800 mt-2">
          Comparez vos économies jour/nuit avec et sans batterie de stockage
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Monthly Bill Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Facture mensuelle (€)
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CurrencyEuroIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="150"
                min="50"
                max="1000"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">€</span>
              </div>
            </div>
            {results && (
              <div className="flex justify-between text-sm text-gray-500">
                <span>Consommation:</span>
                <span>{formatEnergy(results.totalConsumption)}/mois</span>
              </div>
            )}
          </div>
          
          {/* Installation Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Taille de l'installation
            </label>
            <div className="grid grid-cols-3 gap-2">
              {INSTALLATION_SIZES.map((size) => (
                <button
                  key={size.value}
                  type="button"
                  className={`
                    py-2 px-3 border rounded-md text-sm font-medium 
                    ${installationSize === size.value 
                      ? 'bg-yellow-50 border-yellow-500 text-yellow-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'}
                  `}
                  onClick={() => setInstallationSize(size.value)}
                >
                  {size.label}
                </button>
              ))}
            </div>
            {results && (
              <div className="flex justify-between text-sm text-gray-500">
                <span>Production:</span>
                <span>{formatEnergy(results.monthlyProduction)}/mois</span>
              </div>
            )}
          </div>
          
          {/* Battery Capacity Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Capacité de la batterie
            </label>
            <div className="grid grid-cols-3 gap-2">
              {BATTERY_CAPACITIES.map((capacity) => (
                <button
                  key={capacity.value}
                  type="button"
                  className={`
                    py-2 px-3 border rounded-md text-sm font-medium 
                    ${batteryCapacity === capacity.value 
                      ? 'bg-yellow-50 border-yellow-500 text-yellow-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'}
                  `}
                  onClick={() => setBatteryCapacity(capacity.value)}
                >
                  {capacity.label}
                </button>
              ))}
            </div>
            {results && (
              <div className="flex justify-between text-sm text-gray-500">
                <span>Taux d'autoconsommation:</span>
                <span>{formatPercentage(getAutoconsumptionRate(batteryCapacity) * 100)}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Day/Night Consumption Visualization */}
        {results && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold mb-4">Répartition de votre consommation</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-yellow-100 rounded-full mr-3">
                  <SunIcon className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Consommation jour</div>
                  <div className="font-medium">{formatEnergy(results.dayConsumption)}/mois</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <MoonIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Consommation nuit</div>
                  <div className="font-medium">{formatEnergy(results.nightConsumption)}/mois</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Results Section */}
        {results && (
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Comparaison des scénarios</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* EDF OA Scenario */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-7 w-7 text-gray-700 mr-3" />
                  <h5 className="text-lg font-medium">Installation avec EDF OA</h5>
                </div>
                
                {/* Day Production */}
                <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <SunIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    <h6 className="font-medium text-yellow-800">Pendant la journée</h6>
                  </div>
                  
                  <div className="space-y-2 pl-7">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Production solaire:</span>
                      <span className="font-medium">{formatEnergy(results.monthlyProduction)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Autoconsommation directe:</span>
                      <span className="font-medium">{formatEnergy(results.edfOADayAutoConsumed)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Surplus vendu à EDF:</span>
                      <span className="font-medium">{formatEnergy(results.edfOASold)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-green-600">
                      <span>Économies jour:</span>
                      <span>{formatCurrency(results.edfOASavings)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Night Consumption */}
                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MoonIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h6 className="font-medium text-blue-800">Pendant la nuit</h6>
                  </div>
                  
                  <div className="space-y-2 pl-7">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Consommation nocturne:</span>
                      <span className="font-medium">{formatEnergy(results.nightConsumption)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Achat obligatoire à EDF:</span>
                      <span className="font-medium">{formatEnergy(results.edfOANightBought)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-red-600">
                      <span>Coûts nuit:</span>
                      <span>{formatCurrency(results.edfOACosts)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Économies nettes mensuelles:</span>
                  <span className="text-xl font-bold">{formatCurrency(results.edfOANetSavings)}</span>
                </div>
                
                <div className="mt-3 flex justify-between items-center text-sm">
                  <span className="text-gray-600">Facture initiale:</span>
                  <span className="font-medium">{formatCurrency(results.initialBill)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Facture finale:</span>
                  <span className="font-medium">{formatCurrency(Math.max(0, results.edfOAFinalBill))}</span>
                </div>
              </div>
              
              {/* Battery Scenario */}
              <div className="bg-white p-6 rounded-xl border border-yellow-200 shadow-md">
                <div className="flex items-center mb-4">
                  <BoltIcon className="h-7 w-7 text-yellow-600 mr-3" />
                  <h5 className="text-lg font-medium">Installation avec batterie</h5>
                </div>
                
                {/* Day Production */}
                <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <SunIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    <h6 className="font-medium text-yellow-800">Pendant la journée</h6>
                  </div>
                  
                  <div className="space-y-2 pl-7">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Production solaire:</span>
                      <span className="font-medium">{formatEnergy(results.monthlyProduction)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Autoconsommation directe:</span>
                      <span className="font-medium">{formatEnergy(results.batteryDayAutoConsumed)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Stocké dans la batterie:</span>
                      <span className="font-medium">{formatEnergy(results.batteryNightUsed)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Surplus vendu à EDF:</span>
                      <span className="font-medium">{formatEnergy(results.batterySold)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-green-600">
                      <span>Économies jour:</span>
                      <span>{formatCurrency(results.batterySavings)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Night Consumption */}
                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <MoonIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h6 className="font-medium text-blue-800">Pendant la nuit</h6>
                  </div>
                  
                  <div className="space-y-2 pl-7">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Consommation nocturne:</span>
                      <span className="font-medium">{formatEnergy(results.nightConsumption)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Énergie depuis batterie:</span>
                      <span className="font-medium">{formatEnergy(results.batteryNightUsed)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Achat à EDF si batterie vide:</span>
                      <span className="font-medium">{formatEnergy(results.batteryNightBought)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-red-600">
                      <span>Coûts nuit:</span>
                      <span>{formatCurrency(results.batteryCosts)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Économies nettes mensuelles:</span>
                  <span className="text-xl font-bold text-green-600">{formatCurrency(results.batteryNetSavings)}</span>
                </div>
                
                <div className="mt-3 flex justify-between items-center text-sm">
                  <span className="text-gray-600">Facture initiale:</span>
                  <span className="font-medium">{formatCurrency(results.initialBill)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Facture finale:</span>
                  <span className="font-medium">{formatCurrency(Math.max(0, results.batteryFinalBill))}</span>
                </div>
              </div>
            </div>
            
            {/* Comparison */}
            <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h5 className="text-lg font-semibold text-green-800 mb-2">Économies supplémentaires avec batterie</h5>
                  <p className="text-green-700">
                    Avec une batterie, vous utilisez votre propre électricité la nuit au lieu de la revendre à bas prix le jour pour la racheter plus cher la nuit.
                  </p>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600">
                    {results.difference > 0 
                      ? `+${formatCurrency(Math.min(results.difference, results.initialBill))}/mois`
                      : (results.batteryFinalBill === 0 && results.edfOAFinalBill === 0)
                        ? `${formatCurrency(results.batteryNetSavings)}/mois`
                        : `+${formatCurrency(0)}/mois`
                    }
                  </div>
                  <div className="text-sm text-green-700 flex items-center">
                    {results.differencePercentage > 0 ? (
                      <>
                        <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                        {formatPercentage(results.differencePercentage)} d'économies supplémentaires
                      </>
                    ) : (
                      <>
                        <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                        {results.batteryFinalBill === 0 && results.edfOAFinalBill === 0 
                          ? "100% d'économies dans les deux cas" 
                          : "Pas d'économies supplémentaires"
                        }
                      </>
                    )}
                  </div>
                  <div className="text-lg font-bold text-green-600 mt-2">
                    {results.difference > 0 
                      ? `${formatCurrency(Math.min(results.difference, results.initialBill) * 12)}/an`
                      : (results.batteryFinalBill === 0 && results.edfOAFinalBill === 0)
                        ? `${formatCurrency(results.batteryNetSavings * 12)}/an`
                        : `${formatCurrency(0)}/an`
                    }
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 flex items-center justify-center">
              <ArrowPathIcon className="h-4 w-4 mr-1" />
              Simulation basée sur les prix actuels: électricité {ELECTRICITY_PRICE}€/kWh, rachat EDF {EDF_BUYBACK_PRICE}€/kWh
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatteryStorageSimulator;