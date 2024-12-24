import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  SunIcon 
} from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-232323 to-1a1a1a text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Colonne Entreprise */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <SunIcon className="w-10 h-10 text-FFDF64" />
            <h3 className="text-2xl font-bold">MY OHM</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Experts en solutions solaires, nous accompagnons les particuliers et les entreprises dans leur transition énergétique avec des technologies innovantes et durables.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="https://www.facebook.com/myohmtechnologies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-AFC97E hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              href="https://www.instagram.com/myohmtechnologies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-AFC97E hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link 
              href="https://www.tiktok.com/@myohmtechnologies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-AFC97E hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.14-.13z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Colonne Liens Rapides */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <SunIcon className="w-6 h-6 text-FFDF64" />
            <span>Liens Rapides</span>
          </h4>
          <ul className="space-y-3">
            {[
              { name: "Accueil", href: "/" },
              { name: "Simulateur", href: "/simulator" },
              { name: "Conditions Générales", href: "/terms-and-conditions" },
              { name: "Politique de Confidentialité ", href: "/privacy-policy" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-AFC97E transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne Coordonnées */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <SunIcon className="w-6 h-6 text-FFDF64" />
            <span>Contactez-nous</span>
          </h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-6 h-6 text-FFDF64" />
              <span className="text-gray-400 text-sm">
                544 Av. Frédéric Mistral, 04100 Manosque
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-6 h-6 text-FFDF64" />
              <span className="text-gray-400 text-sm">04 92 76 68 58</span>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-FFDF64" />
              <span className="text-gray-400 text-sm">contact@myohmtechnologies.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()} MY OHM Technologies. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
