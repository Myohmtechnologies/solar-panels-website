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
  ArrowLeftOnRectangleIcon,
  HandThumbDownIcon,
  EnvelopeIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const directNavigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: HomeIcon },
  { name: 'Leads', href: '/dashboard/leads', icon: UsersIcon },
  { name: 'Messages de contact', href: '/dashboard/contacts', icon: EnvelopeIcon },
  { name: 'Prospects perdus', href: '/dashboard/not-interested', icon: HandThumbDownIcon },
];

const navigationGroups = [
  {
    name: 'Suivi commercial',
    icon: BriefcaseIcon,
    items: [
      { name: 'Devis', href: '/dashboard/devis', icon: ReceiptRefundIcon },
      { name: 'Historique des devis', href: '/dashboard/devis/historique', icon: ClockIcon },
      { name: 'Planning', href: '/dashboard/planning', icon: BriefcaseIcon },
      { name: 'Projets terminés', href: '/dashboard/completed', icon: CheckCircleIcon },
    ],
  },
  {
    name: 'Contenus',
    icon: PhotoIcon,
    items: [
      { name: 'Blog', href: '/dashboard/blog', icon: DocumentTextIcon },
      { name: 'Réalisations', href: '/dashboard/realisations', icon: PhotoIcon },
    ],
  },
];

function isPathActive(pathname: string, href: string) {
  return href === '/dashboard'
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const renderNavigation = (mobile = false) => (
    <>
      <div className="space-y-1">
        {directNavigation.map((item) => {
          const active = isPathActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => mobile && setSidebarOpen(false)}
              aria-current={active ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? 'bg-[#edf5f8] font-semibold text-[#0b6291]'
                  : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`h-[18px] w-[18px] shrink-0 ${active ? 'text-[#0b6291]' : 'text-slate-400'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-3 space-y-1">
        {navigationGroups.map((group) => {
          const active = group.items.some((item) => isPathActive(pathname, item.href));
          const expanded = expandedGroups[group.name] ?? active;

          return (
            <section key={group.name}>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpandedGroups((current) => ({ ...current, [group.name]: !expanded }))}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                  active || expanded
                    ? 'bg-[#f5f7f8] text-slate-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <group.icon className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                <span className="flex-1">{group.name}</span>
                <ChevronDownIcon className={`h-4 w-4 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
              </button>

              {expanded && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-slate-200 pl-3">
                  {group.items.map((item) => {
                    const itemActive = isPathActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => mobile && setSidebarOpen(false)}
                        aria-current={itemActive ? 'page' : undefined}
                        className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-colors ${
                          itemActive
                            ? 'bg-[#edf5f8] font-semibold text-[#0b6291]'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <item.icon className={`h-4 w-4 shrink-0 ${itemActive ? 'text-[#0b6291]' : 'text-slate-400'}`} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <div className="mt-auto border-t border-slate-200 pt-3">
        <Link
          href="/dashboard/settings"
          onClick={() => mobile && setSidebarOpen(false)}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            isPathActive(pathname, '/dashboard/settings')
              ? 'bg-[#edf5f8] text-[#0b6291]'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <Cog6ToothIcon className="h-[18px] w-[18px] shrink-0" />
          <span>Paramètres</span>
        </Link>
        <Link
          href="/logout"
          className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-700"
        >
          <ArrowLeftOnRectangleIcon className="h-[18px] w-[18px] shrink-0" />
          <span>Déconnexion</span>
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <button
        type="button"
        aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={sidebarOpen}
        className="fixed left-4 top-4 z-[60] rounded-lg border border-slate-200 bg-white p-2 text-[#0b6291] shadow-sm lg:hidden"
        onClick={() => setSidebarOpen((open) => !open)}
      >
        {sidebarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
      </button>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-slate-950/35"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative flex h-full w-[min(19rem,86vw)] flex-col border-r border-slate-200 bg-white shadow-2xl">
            <div className="flex h-[76px] shrink-0 items-center border-b border-slate-100 px-5">
              <Link href="/" className="inline-flex items-center" onClick={() => setSidebarOpen(false)}>
                <Image src="/images/logo.png" alt="My Ohm Technologies" width={154} height={48} priority className="h-10 w-auto object-contain object-left" />
              </Link>
            </div>
            <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 py-4">
              {renderNavigation(true)}
            </nav>
          </aside>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-[76px] shrink-0 items-center border-b border-slate-100 px-5">
          <Link href="/" className="inline-flex items-center">
            <Image src="/images/logo.png" alt="My Ohm Technologies" width={154} height={48} priority className="h-10 w-auto object-contain object-left" />
          </Link>
        </div>
        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-3 py-4">
          {renderNavigation()}
        </nav>
      </aside>

      <main className="min-h-screen pt-16 lg:ml-64 lg:pt-0">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
