'use client';

import { useState, useEffect } from 'react';
import { HouseholdSelector } from './HouseholdSelector';
import QuoteModal from '../modals/QuoteModal';

interface SimulatorProps {
  cityName: string;
  sunshineHours?: number;
  defaultOrientation?: string;
}

interface Estimations {
  production: number;
  totalAnnualSavings: number;
  roi: number;
  co2Reduction: number;
}

export default function SolarSimulator({ cityName, sunshineHours = 2800, defaultOrientation = 'sud' }: SimulatorProps) {
  const [consommation, setConsommation] = useState(3500);
  const [systemSize, setSystemSize] = useState(3);
  const [orientation, setOrientation] = useState(defaultOrientation);
  const [estimations, setEstimations] = useState<Estimations>({
    production: 0,
    totalAnnualSavings: 0,
    roi: 0,
    co2Reduction: 0
  });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const calculateEconomies = () => {
    // Facteurs d'orientation
    const orientationFactors: { [key: string]: number } = {
      'sud': 1,
      'sud-est': 0.95,
      'sud-ouest': 0.95,
      'est': 0.85,
      'ouest': 0.85
    };

    // Prix du kWh en France (2024)
    const pricePerKwh = 0.2516; // Tarif réglementé EDF au 1er février 2024
    
    // Calcul de la production annuelle
    const productionPerKwc = sunshineHours * 0.75; // Rendement réel avec pertes système
    const production = Math.round(systemSize * productionPerKwc * (orientationFactors[orientation] || 1));
    
    // Calcul du taux d'autoconsommation en fonction de la consommation
    let autoconsommation;
    if (production <= consommation * 0.5) {
      autoconsommation = 0.95; // 95% si production inférieure à 50% de la consommation
    } else if (production <= consommation * 0.7) {
      autoconsommation = 0.85; // 85% si production entre 50% et 70% de la consommation
    } else {
      autoconsommation = 0.75; // 75% si production supérieure à 70% de la consommation
    }
    
    // Calcul des économies annuelles
    const energieAutoconsommee = production * autoconsommation;
    const energieRevendue = production * (1 - autoconsommation);
    const prixReventeKwh = 0.13; // Prix de revente EDF OA
    
    const economiesAutoconsommation = energieAutoconsommee * pricePerKwh;
    const revenusRevente = energieRevendue * prixReventeKwh;
    const totalAnnualSavings = Math.round(economiesAutoconsommation + revenusRevente);
    
    // Calcul du coût et du retour sur investissement
    const prixParKwc = systemSize <= 3 ? 3000 : 2800; // Prix dégressif au kWc
    const systemCost = systemSize * prixParKwc;
    const aideEtat = Math.min(2000, systemCost * 0.10); // Aide de l'État 2024
    const coutFinal = systemCost - aideEtat;
    
    const roi = Math.ceil(coutFinal / totalAnnualSavings);
    
    // Calcul de la réduction de CO2 (moyenne française)
    const co2Reduction = Math.round(production * 0.0571 * 100) / 100; // 57.1g CO2/kWh en France

    return {
      production,
      totalAnnualSavings,
      roi,
      co2Reduction
    };
  };

  // Calcul initial et mise à jour
  useEffect(() => {
    const newEstimations = calculateEconomies();
    setEstimations(newEstimations);
  }, [consommation, systemSize, orientation, sunshineHours]); // Ajout de sunshineHours comme dépendance

  return (
    <section id="simulator-section" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-black font-extrabold mb-8 border-b-4 border-black/20 pb-4 text-center">
          Simulateur Économique Personnalisé pour {cityName}
        </h2>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs Column */}
            <div>
              <div className="mb-6">
                <label className="block text-black font-semibold mb-4">
                  Consommation annuelle du foyer
                </label>
                <HouseholdSelector
                  consommation={consommation}
                  setConsommation={setConsommation}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="systemSize" className="block text-black font-semibold mb-2">
                  Puissance de l'installation
                </label>
                <select
                  id="systemSize"
                  value={systemSize}
                  onChange={(e) => setSystemSize(parseInt(e.target.value))}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-FFDF64"
                >
                  <option value="3">3 kWc - Petite installation</option>
                  <option value="6">6 kWc - Installation moyenne</option>
                  <option value="9">9 kWc - Grande installation</option>
                </select>
                <p className="mt-2 text-sm text-black/70">
                  {systemSize === 3 && "Idéal pour un couple ou un petit foyer"}
                  {systemSize === 6 && "Recommandé pour une famille de 3-4 personnes"}
                  {systemSize === 9 && "Adapté pour une grande famille ou une forte consommation"}
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="orientation" className="block text-black font-semibold mb-2">
                  Orientation de la toiture
                </label>
                <select
                  id="orientation"
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-FFDF64"
                >
                  <option value="sud">Sud (Optimal)</option>
                  <option value="sud-est">Sud-Est</option>
                  <option value="sud-ouest">Sud-Ouest</option>
                  <option value="est">Est</option>
                  <option value="ouest">Ouest</option>
                </select>
              </div>
            </div>

            {/* Results Column */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                Estimation Économique
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-black font-semibold">Production estimée</span>
                  <span className="text-black font-bold">{estimations.production.toLocaleString()} kWh/an</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-semibold">Économie annuelle</span>
                  <span className="text-black font-bold">{estimations.totalAnnualSavings.toLocaleString()} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-semibold">Retour sur investissement</span>
                  <span className="text-black font-bold">{estimations.roi} ans</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-semibold">Réduction CO₂</span>
                  <span className="text-black font-bold">{estimations.co2Reduction} tonnes/an</span>
                </div>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full mt-6 bg-gradient-to-br from-ffeb99 to-ffb700 backdrop-blur-lg text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Demander un devis personnalisé
              </button>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        closeModal={() => setIsQuoteModalOpen(false)}
        cityName={cityName}
        estimations={{
          production: estimations.production,
          totalAnnualSavings: estimations.totalAnnualSavings,
          systemSize
        }}
      />
    </section>
  );
}
