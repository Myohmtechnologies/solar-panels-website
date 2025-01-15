'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  DocumentTextIcon,
  PhotoIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: HomeIcon },
  { name: 'Prospects', href: '/dashboard/prospects', icon: UsersIcon },
  { name: 'Calendrier', href: '/dashboard/calendar', icon: CalendarIcon },
  { name: 'Blog', href: '/dashboard/blog', icon: DocumentTextIcon },
  { name: 'Réalisations', href: '/dashboard/realisations', icon: PhotoIcon },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex min-h-0 flex-1 flex-col bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex h-16 flex-shrink-0 items-center px-4 border-b border-gray-200">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="My Ohm Technologies"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-4 py-3 text-sm font-medium rounded-md
                    ${isActive
                      ? 'bg-gray-100 text-6C8D2F'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? 'text-6C8D2F' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
