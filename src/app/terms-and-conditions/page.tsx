import Link from 'next/link';

export const metadata = {
  title: 'Conditions Générales | MyOhm Technologies',
  description: "Conditions générales d'utilisation des services de MyOhm Technologies.",
};

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales d&apos;Utilisation</h1>
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-green prose-lg mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales</h1>
            
            <p className="text-gray-600">
              Bienvenue sur le site <strong>MyOhm Technologies</strong>. En utilisant notre site, vous acceptez les conditions
              générales ci-dessous. Veuillez les lire attentivement avant d&apos;utiliser nos services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Acceptation des Conditions</h2>
            <p className="text-gray-600">
              En accédant à notre site Web et en utilisant nos services, vous acceptez d&apos;être lié par les présentes conditions.
              Si vous n&apos;êtes pas d&apos;accord avec une partie de ces conditions, vous ne devez pas utiliser notre site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Services Offerts</h2>
            <p className="text-gray-600">
              <strong>MyOhm Technologies</strong> fournit des services d&apos;installation de panneaux photovoltaïques. Nos services comprennent :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Étude personnalisée de vos besoins énergétiques</li>
              <li>Installation de panneaux solaires photovoltaïques</li>
              <li>Maintenance et suivi des installations</li>
              <li>Conseil en optimisation énergétique</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Propriété Intellectuelle</h2>
            <p className="text-gray-600">
              Tout le contenu présent sur ce site est protégé par des droits d&apos;auteur et appartient à MyOhm Technologies.
              La reproduction ou l&apos;utilisation non autorisée de ce contenu est strictement interdite.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Limitation de Responsabilité</h2>
            <p className="text-gray-600">
              Bien que nous nous efforcions de fournir des informations exactes, MyOhm Technologies ne peut garantir
              l&apos;exactitude complète des informations présentées sur le site. Les estimations et simulations sont fournies
              à titre indicatif.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Protection des Données</h2>
            <p className="text-gray-600">
              Vos données personnelles sont traitées conformément à notre{' '}
              <Link href="/privacy-policy" className="text-6C8D2F hover:underline">
                politique de confidentialité
              </Link>
              . Pour plus d&apos;informations sur l&apos;utilisation des cookies, consultez notre{' '}
              <Link href="/cookie-policy" className="text-6C8D2F hover:underline">
                politique des cookies
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <address className="not-italic text-gray-600">
                <strong className="text-gray-900">MyOhm Technologies</strong>
                <br />
                544 Av. Frédéric Mistral
                <br />
                04100 Manosque
                <br />
                Tél : <a href="tel:0975666858" className="text-6C8D2F">09 75 66 68 58</a>
                <br />
                Email : <a href="mailto:contact@myohmtechnologies.com" className="text-6C8D2F">contact@myohmtechnologies.com</a>
                <br />
                <span className="mt-2 block">
                  SIRET : <strong>91760190800010</strong>
                </span>
              </address>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
