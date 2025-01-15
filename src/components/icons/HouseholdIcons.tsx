export const CoupleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M16 8a5 5 0 1 1-5-5 5 5 0 0 1 5 5zm-7 5a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-3 3a3 3 0 0 0-3 3v1h16v-1a3 3 0 0 0-3-3H6z"/>
  </svg>
);

export const SmallFamilyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M16 8a5 5 0 1 1-5-5 5 5 0 0 1 5 5zm-7 5a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm7 7a3 3 0 0 0 3-3v-1H6v1a3 3 0 0 0 3 3h6zm-3-9a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/>
  </svg>
);

export const LargeFamilyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
    <path d="M16 8a5 5 0 1 1-5-5 5 5 0 0 1 5 5zm-7 5a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm7 7a3 3 0 0 0 3-3v-1H6v1a3 3 0 0 0 3 3h6zm-3-9a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-2 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
  </svg>
);

export const HouseholdSelector = ({ 
  consommation, 
  setConsommation, 
  calculateEconomies, 
  setEstimations 
}: {
  consommation: number;
  setConsommation: (value: number) => void;
  calculateEconomies: () => void;
  setEstimations: (value: any) => void;
}) => {
  const households = [
    { 
      icon: <CoupleIcon />, 
      label: '2 personnes', 
      value: 2500 
    },
    { 
      icon: <SmallFamilyIcon />, 
      label: '3 personnes', 
      value: 3500 
    },
    { 
      icon: <LargeFamilyIcon />, 
      label: '4 personnes', 
      value: 5000 
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {households.map((household) => (
        <button
          key={household.value}
          onClick={() => {
            setConsommation(household.value);
            const newEstimations = calculateEconomies();
            setEstimations(newEstimations);
          }}
          className={`
            flex flex-col items-center justify-center 
            p-4 rounded-2xl border-2 
            transition-all duration-300
            ${consommation === household.value 
              ? 'bg-FFDF64/20 border-FFDF64' 
              : 'bg-white/10 border-white/20 hover:bg-white/20'}
          `}
        >
          <div className={`
            mb-2 
            ${consommation === household.value 
              ? 'text-FFDF64' 
              : 'text-black/70'}
          `}>
            {household.icon}
          </div>
          <span className={`
            text-sm font-semibold 
            ${consommation === household.value 
              ? 'text-black' 
              : 'text-black/70'}
          `}>
            {household.label}
          </span>
        </button>
      ))}
    </div>
  );
};