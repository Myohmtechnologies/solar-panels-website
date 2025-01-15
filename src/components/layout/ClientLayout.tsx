'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderAndFooter = pathname.startsWith('/dashboard') || pathname === '/merci' || pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!hideHeaderAndFooter && <Header />}
      <main className="flex-grow overflow-x-hidden">{children}</main>
      {!hideHeaderAndFooter && <Footer />}
    </div>
  );
}
