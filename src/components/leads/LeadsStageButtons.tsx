'use client';

import { StageType } from '@/types';
import { useState } from 'react';

type ColorType = 'blue' | 'purple' | 'yellow' | 'orange' | 'green' | 'pink' | 'indigo';

interface StageButton {
  stage: StageType;
  label: string;
  count: number;
  color: ColorType;
}

const stageButtons: StageButton[] = [
  {
    stage: StageType.NOUVEAU_CLIENT,
    label: 'Nouveaux',
    count: 25,
    color: 'blue'
  },
  {
    stage: StageType.RDV_COMMERCIAL,
    label: 'RDV Commercial',
    count: 18,
    color: 'purple'
  },
  {
    stage: StageType.VISITE_TECHNIQUE,
    label: 'Visite Technique',
    count: 12,
    color: 'yellow'
  },
  {
    stage: StageType.DEMARCHES_ADMIN,
    label: 'Démarches Admin',
    count: 8,
    color: 'orange'
  },
  {
    stage: StageType.INSTALLATION,
    label: 'Installation',
    count: 5,
    color: 'green'
  },
  {
    stage: StageType.VALIDATION_CONSUEL,
    label: 'Consuel',
    count: 3,
    color: 'pink'
  },
  {
    stage: StageType.RACCORDEMENT,
    label: 'Raccordement',
    count: 2,
    color: 'indigo'
  }
];

const colorClasses: Record<ColorType, string> = {
  blue: 'bg-blue-100 text-blue-800 ring-blue-600/20 hover:bg-blue-200',
  purple: 'bg-purple-100 text-purple-800 ring-purple-600/20 hover:bg-purple-200',
  yellow: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20 hover:bg-yellow-200',
  orange: 'bg-orange-100 text-orange-800 ring-orange-600/20 hover:bg-orange-200',
  green: 'bg-green-100 text-green-800 ring-green-600/20 hover:bg-green-200',
  pink: 'bg-pink-100 text-pink-800 ring-pink-600/20 hover:bg-pink-200',
  indigo: 'bg-indigo-100 text-indigo-800 ring-indigo-600/20 hover:bg-indigo-200'
};

export default function LeadsStageButtons() {
  const [selectedStage, setSelectedStage] = useState<StageType | null>(null);

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3">
        {stageButtons.map((button) => (
          <button
            key={button.stage}
            onClick={() => setSelectedStage(button.stage)}
            className={`
              relative inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium
              ring-1 ring-inset transition-colors
              ${colorClasses[button.color]}
              ${selectedStage === button.stage ? 'ring-2' : ''}
            `}
          >
            {button.label}
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white px-2 py-0.5 text-xs font-medium">
              {button.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
