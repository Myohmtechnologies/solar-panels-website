'use client';

import { Dispatch, SetStateAction } from 'react';

interface HouseholdSelectorProps {
  consommation: number;
  setConsommation: Dispatch<SetStateAction<number>>;
}

const householdTypes = [
  { personnes: '2', consommation: 3500, description: 'Couple' },
  { personnes: '3', consommation: 4500, description: 'Petite famille' },
  { personnes: '4', consommation: 6000, description: 'Famille' },
  { personnes: '5+', consommation: 7500, description: 'Grande famille' },
];

export function HouseholdSelector({ consommation, setConsommation }: HouseholdSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {householdTypes.map((household) => (
        <button
          key={household.personnes}
          onClick={() => setConsommation(household.consommation)}
          className={`p-4 rounded-xl border transition-all ${
            consommation === household.consommation
              ? 'border-FFDF64 bg-FFDF64/10'
              : 'border-white/20 bg-white/10 hover:border-FFDF64/50'
          }`}
        >
          <h3 className="font-semibold text-black">{household.personnes} personnes</h3>
          <p className="text-sm text-black/70">{household.description}</p>
          <p className="text-sm font-medium text-black mt-1">
            {household.consommation} kWh/an
          </p>
        </button>
      ))}
    </div>
  );
}
