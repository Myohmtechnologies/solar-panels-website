export const metadata = {
  title: 'Politique des Cookies | MyOhm Technologies',
  description: 'Politique des cookies de MyOhm Technologies - Installation de panneaux solaires photovoltaïques',
};

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
  

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-gray-900">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique des Cookies</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Qu&apos;est-ce qu&apos;un Cookie ?</h2>
            <p className="text-gray-900">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d&apos;un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d&apos;autres paramètres.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types de Cookies Utilisés</h2>
            <div className="text-gray-900">
              <h3 className="text-xl font-medium mb-2">2.1 Cookies Essentiels</h3>
              <p className="mb-4">
                Ces cookies sont nécessaires au fonctionnement du site. Ils vous permettent d&apos;utiliser les principales fonctionnalités du site (par exemple l&apos;accès à votre compte).
              </p>

              <h3 className="text-xl font-medium mb-2">2.2 Cookies Analytiques</h3>
              <p className="mb-4">
                Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site (pages visitées, temps passé sur le site, etc.).
              </p>

              <h3 className="text-xl font-medium mb-2">2.3 Cookies de Fonctionnalité</h3>
              <p>
                Ces cookies permettent d&apos;améliorer votre expérience utilisateur en mémorisant vos préférences.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Durée de Conservation</h2>
            <p className="text-gray-900">
              Les cookies que nous utilisons peuvent être de deux types :
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-900">
              <li>Cookies de session : ces fichiers temporaires sont supprimés lorsque vous fermez votre navigateur</li>
              <li>Cookies persistants : ils restent sur votre appareil jusqu&apos;à leur expiration ou leur suppression manuelle</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Gestion des Cookies</h2>
            <p className="text-gray-900">
              Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous demander de les accepter ou non.
            </p>
            <div className="mt-4 text-gray-900">
              <p className="font-medium mb-2">Pour gérer les cookies, suivez les instructions de votre navigateur :</p>
              <ul className="list-disc pl-6">
                <li>Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
                <li>Firefox : Paramètres → Vie privée et sécurité → Cookies</li>
                <li>Safari : Préférences → Confidentialité</li>
                <li>Edge : Paramètres → Confidentialité et services → Cookies</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Impact du Refus des Cookies</h2>
            <p className="text-gray-900">
              Si vous refusez l&apos;enregistrement de cookies, ou si vous supprimez ceux qui y sont enregistrés, vous ne pourrez plus bénéficier d&apos;un certain nombre de fonctionnalités qui peuvent être nécessaires pour naviguer dans certains espaces de notre site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Mise à Jour de la Politique</h2>
            <p className="text-gray-900">
              Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-900">
              Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
            </p>
            <ul className="list-none mt-4 text-gray-900">
              <li>Email : contact@myohmtechnologies.com</li>
              <li>Téléphone : 09 75 66 68 58</li>
              <li>Adresse : 544 Av. Frédéric Mistral, 04100 Manosque</li>
            </ul>
            <p className="text-gray-900 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
