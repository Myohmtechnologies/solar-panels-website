import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BlogCTA = () => {
  return (
    <div className="bg-gradient-to-br from-6C8D2F to-[#86af3b] text-white p-8 rounded-xl shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl text-black font-bold mb-6">
          Prêt à réduire vos factures d&apos;électricité ?
        </h3>
        
        <p className="text-lg mb-8 text-black">
          Nos experts sont là pour vous accompagner dans votre projet d&apos;installation solaire.
          Obtenez une estimation gratuite en quelques minutes !
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-black">Installation Rapide</h4>
            <p className="text-sm text-black">Installation professionnelle en 2-3 jours</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-black">Économies Garanties</h4>
            <p className="text-sm text-black">Jusqu&apos;à 70% sur votre facture</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-FFDF64 text-6C8D2F px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Demander un devis gratuit
          </Link>
          
          <a
            href="tel:+33000000000"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="h-5 w-5" />
            Appelez-nous
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCTA;
