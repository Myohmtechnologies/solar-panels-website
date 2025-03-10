'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhotoIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: HomeIcon },
  { name: 'Prospects', href: '/dashboard/prospects', icon: UsersIcon },
  { name: 'Statistiques', href: '/dashboard/statistics', icon: ChartBarIcon },
  { name: 'Blog', href: '/dashboard/blog', icon: DocumentTextIcon },
  { name: 'Réalisations', href: '/dashboard/realisations', icon: PhotoIcon },
  { name: 'Projets', href: '/dashboard/projets', icon: BriefcaseIcon },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:w-64 lg:flex-col">
      <div className="flex h-full flex-1 flex-col bg-gradient-to-br from-0B6291 to-d7f0fc text-white shadow-xl">
        {/* Logo */}
        <div className="flex h-20 flex-shrink-0 items-center justify-center px-4 py-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="My Ohm Technologies"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-1 flex-col overflow-y-auto py-6 px-3">
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                    ? 'bg-white text-[#0B6291] shadow-md'
                    : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      isActive ? 'text-[#ffb700]' : 'text-white group-hover:text-[#ffeb99]'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Déconnexion */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <Link 
              href="/logout" 
              className="group flex items-center px-4 py-3 text-sm font-medium rounded-xl text-white hover:bg-white/10 transition-all duration-200"
            >
              <ArrowLeftOnRectangleIcon className="mr-3 flex-shrink-0 h-5 w-5 text-white group-hover:text-[#ffeb99]" />
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
