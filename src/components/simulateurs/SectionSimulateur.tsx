'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@/components/icons/CommonIcons';

interface SectionSimulateurProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  theme?: 'blue' | 'yellow' | 'green';
}

export default function SectionSimulateur({ 
  title = "Découvrez vos économies potentielles", 
  subtitle = "Calculez gratuitement combien vous pourriez économiser",
  ctaText = "Lancer la simulation",
  theme = 'blue'
}: SectionSimulateurProps) {
  const router = useRouter();
  const [codePostal, setCodePostal] = useState('');
  const [facture, setFacture] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Déterminer les classes CSS en fonction du thème
  const getBgClass = () => {
    switch(theme) {
      case 'yellow': return 'bg-gradient-to-r from-[#ffeb99] to-[#ffb700]';
      case 'green': return 'bg-gradient-to-r from-[#AFC97E]/80 to-[#AFC97E]';
      default: return 'bg-gradient-to-r from-[#0a3d5c] to-[#116290]';
    }
  };

  const getTextClass = () => {
    return theme === 'blue' ? 'text-white' : 'text-gray-900';
  };

  const getButtonClass = () => {
    switch(theme) {
      case 'yellow': return 'bg-[#116290] text-white';
      case 'green': return 'bg-[#0a3d5c] text-white';
      default: return 'bg-[#ffb700] text-gray-900';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Stocker les données dans sessionStorage
    sessionStorage.setItem('simulateur_codePostal', codePostal);
    sessionStorage.setItem('simulateur_facture', facture);
    
    // Rediriger vers la page de simulation complète
    router.push('/simulation-economie');
  };

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden ${getBgClass()}`}>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          {/* Texte */}
          <div className="flex-1">
            <h3 className={`text-2xl font-bold mb-2 ${getTextClass()}`}>{title}</h3>
            {subtitle && <p className={`${getTextClass()} opacity-90`}>{subtitle}</p>}
          </div>
          
          {/* Mini formulaire */}
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Code postal"
                  value={codePostal}
                  onChange={(e) => setCodePostal(e.target.value)}
                  className="w-full sm:w-32 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#ffb700]"
                  required
                />
              </div>
              <div>
                <select
                  value={facture}
                  onChange={(e) => setFacture(e.target.value)}
                  className="w-full sm:w-48 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#ffb700]"
                  required
                >
                  <option value="">Facture mensuelle</option>
                  <option value="50-100">50€ - 100€</option>
                  <option value="100-150">100€ - 150€</option>
                  <option value="150-200">150€ - 200€</option>
                  <option value="200-300">200€ - 300€</option>
                  <option value="300+">Plus de 300€</option>
                </select>
              </div>
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium ${getButtonClass()} hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>{ctaText}</span>
                <ArrowRightIcon className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
