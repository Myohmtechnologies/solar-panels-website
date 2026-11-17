import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const services = [
  { name: 'Panneaux solaires', href: '/panneaux-solaire' },
  { name: 'Batterie de stockage', href: '/batterie-de-stockage' },
  { name: 'Borne de recharge', href: '/borne-de-recharge' },
  { name: 'Climatisation', href: '/climatisation' },
  { name: 'Électricité générale', href: '/electricite-generale' },
  { name: 'Ballon d’eau chaude', href: '/installation-ballon-eau-chaude' },
];

const regions = [
  { name: 'Région PACA', href: '/region/paca' },
  { name: 'Bouches-du-Rhône (13)', href: '/region/paca/departements/13-bouches-du-rhone' },
  { name: 'Vaucluse (84)', href: '/region/paca/departements/84-vaucluse' },
  { name: 'Var (83)', href: '/region/paca/departements/83-var' },
  { name: 'Alpes-Maritimes (06)', href: '/region/paca/departements/06-alpes-maritimes' },
  { name: 'Alpes-de-Haute-Provence (04)', href: '/region/paca/departements/04-alpes-de-haute-provence/' },
  { name: 'Hautes-Alpes (05)', href: '/region/paca/departements/05-hautes-alpes' },
];

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Simulateur', href: '/simulator' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/#faq' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1BQoBr1EoT/?mibextid=wwXIfr',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/myohmtechnologies',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@my.ohm.technologi?_t=ZN-8tpgX1bUSoA&_r=1',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.14-.13z',
  },
];

const Footer = () => (
  <footer className="bg-white px-4 py-6 md:px-8 md:py-8 lg:px-12">
    <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] border border-[#1683ad]/30 bg-gradient-to-br from-[#082f49] via-[#0d5578] to-[#07314b] px-6 py-10 text-white shadow-[0_18px_55px_rgba(8,47,73,0.18)] sm:px-9 md:px-12 md:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-36 h-80 w-80 rounded-full bg-[#ffdf64]/10 blur-3xl" />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1.1fr_1.15fr_1.1fr] lg:gap-x-9">
        <div>
          <Link href="/" aria-label="MY OHM Technologies, accueil" className="inline-flex">
            <Image src="/images/logo-dark.png" alt="MY OHM Technologies" width={200} height={80} className="h-auto w-[190px]" />
          </Link>
          <p className="mt-4 max-w-xs text-sm font-medium leading-6 text-white/75">
            Votre énergie, notre expertise. Des solutions durables pour votre maison en région PACA.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="rounded-full border border-white/25 bg-white/5 p-2.5 text-[#ffdf64] transition hover:border-[#ffdf64]/70 hover:bg-[#ffdf64]/10">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={social.path} /></svg>
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Nos services" links={services} />
        <FooterColumn title="Liens utiles" links={quickLinks} />
        <FooterColumn title="Nos zones d’intervention" links={regions} />

        <div>
          <h3 className="mb-5 text-base font-bold text-white">Contactez-nous</h3>
          <address className="space-y-4 not-italic">
            <p className="flex items-start gap-2.5 text-sm leading-5 text-white/75">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#ffdf64]" />
              <span>544 Av. Frédéric Mistral,<br />04100 Manosque</span>
            </p>
            <a href="tel:+33492766858" className="flex items-center gap-2.5 text-sm text-white/75 transition hover:text-[#ffdf64]">
              <PhoneIcon className="h-4 w-4 shrink-0 text-[#ffdf64]" />04 92 76 68 58
            </a>
            <a href="mailto:contact@myohmtechnologies.com" className="flex items-start gap-2.5 text-sm leading-5 text-white/75 transition hover:text-[#ffdf64]">
              <EnvelopeIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#ffdf64]" />
              <span className="break-all">contact@myohmtechnologies.com</span>
            </a>
          </address>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MY OHM Technologies. Tous droits réservés.</p>
        <nav aria-label="Informations légales" className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/mentions-legales" className="transition hover:text-[#ffdf64]">Mentions légales</Link>
          <Link href="/terms-and-conditions" className="transition hover:text-[#ffdf64]">Conditions générales</Link>
          <Link href="/privacy-policy" className="transition hover:text-[#ffdf64]">Confidentialité</Link>
        </nav>
      </div>
    </div>
  </footer>
);

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-base font-bold text-white">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm leading-5 text-white/70 transition-colors hover:text-[#ffdf64]">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
