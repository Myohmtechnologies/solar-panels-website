'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isThanksPage = pathname?.startsWith('/merci');
  const isSimulationEconomie = pathname?.startsWith('/simulation-economie');
  const isDevisPanneauxSolaires = pathname?.startsWith('/devis-panneaux-solaires');

  if (isDashboard || isThanksPage || isSimulationEconomie || isDevisPanneauxSolaires) {
    return children;
  }

  const isHome = pathname === '/';

  return (
    <>
      <Header />
      <main className={`min-h-screen ${isHome ? '' : 'pt-32 md:pt-28'}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
