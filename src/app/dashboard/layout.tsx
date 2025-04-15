'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  PhotoIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ReceiptRefundIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';


const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: HomeIcon },
  { name: 'Prospects', href: '/dashboard/leads', icon: UsersIcon },
  { name: 'Devis', href: '/dashboard/devis', icon: ReceiptRefundIcon },
  { name: 'Projets', href: '/dashboard/projets', icon: BriefcaseIcon },
  { name: 'Projets Terminés', href: '/dashboard/completed', icon: CheckCircleIcon },
  { name: 'Blog', href: '/dashboard/blog', icon: DocumentTextIcon },
  { name: 'Réalisations', href: '/dashboard/realisations', icon: PhotoIcon },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg text-[#0B6291]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {sidebarOpen && (
          <div className="fixed inset-0 z-40">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-72 bg-gradient-to-br from-[#0B6291] to-[#d7f0fc] pt-16 pb-4 z-50 text-white shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="My Ohm Technologies"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex-1 px-4 space-y-2 overflow-y-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                      ${pathname === item.href
                        ? 'bg-white text-[#0B6291] shadow-md'
                        : 'text-white hover:bg-white/10'
                      }
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      pathname === item.href ? 'text-[#ffb700]' : 'text-white group-hover:text-[#ffeb99]'
                    }`} />
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Déconnexion */}
              <div className="px-4 mt-6 pt-6 border-t border-white/20">
                <Link 
                  href="/logout" 
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-200"
                >
                  <ArrowLeftOnRectangleIcon className="mr-3 flex-shrink-0 h-5 w-5 text-white" />
                  Déconnexion
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <nav className="flex-1 flex flex-col min-h-0 bg-gradient-to-br from-[#0B6291] to-[#d7f0fc] text-white shadow-xl">
          <div className="flex h-20 flex-shrink-0 items-center justify-center px-4 py-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-dark.png"
                alt="My Ohm Technologies"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col px-3 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                  ${pathname === item.href
                    ? 'bg-white text-[#0B6291] shadow-md'
                    : 'text-white hover:bg-white/10'
                  }
                `}
              >
                <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${
                  pathname === item.href ? 'text-[#ffb700]' : 'text-white group-hover:text-[#ffeb99]'
                }`} />
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Déconnexion */}
          <div className="px-3 mt-6 pt-6 border-t border-white/20 mb-6">
            <Link 
              href="/logout" 
              className="group flex items-center px-4 py-3 text-sm font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-200"
            >
              <ArrowLeftOnRectangleIcon className="mr-3 flex-shrink-0 h-5 w-5 text-white group-hover:text-[#ffeb99]" />
              Déconnexion
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 h-full">
        <main className="h-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}