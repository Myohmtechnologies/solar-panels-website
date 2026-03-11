'use client';

import React from 'react';

const InfoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white py-2 px-4 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <p className="text-sm md:text-base font-medium flex items-center gap-2">
          <span className="animate-pulse">☀️</span>
          <span>
            <strong>Le showroom est fermé pour travaux jusqu&apos;au 31 mars</strong>, mais nous restons à votre entière disposition. L&apos;activité de l&apos;entreprise continue normalement.
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;
