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

  if (isDashboard || isThanksPage) {
    return children;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
