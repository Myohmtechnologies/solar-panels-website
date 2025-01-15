'use client';

import ChatBot from '@/components/ChatBot';
import RecentInstallations from '@/components/RecentInstallations';

interface CityLayoutProps {
  children: React.ReactNode;
}

export default function CityLayout({ children }: CityLayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background avec overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-ffeb99/20" />
        </div>
      </div>

      {/* ChatBot et RecentInstallations */}
      <ChatBot />
      <div className="hidden md:block">
        <RecentInstallations />
      </div>

      {/* Contenu de la page */}
      {children}
    </div>
  );
}
