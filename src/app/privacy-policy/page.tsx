export const metadata = {
  title: 'Politique de Confidentialité | MyOhm Technologies',
  description: 'Politique de confidentialité de MyOhm Technologies - Installation de panneaux solaires photovoltaïques',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
    

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-gray-900">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-900">
              MyOhm Technologies s&apos;engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Collecte des Informations</h2>
            <p className="text-gray-900">
              Nous collectons les informations que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-900">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale</li>
              <li>Informations relatives à votre projet solaire</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des Informations</h2>
            <p className="text-gray-900">
              Nous utilisons vos informations personnelles pour :
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-900">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous fournir les services demandés</li>
              <li>Améliorer nos services</li>
              <li>Vous contacter concernant votre projet</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des Données</h2>
            <p className="text-gray-900">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vos Droits</h2>
            <p className="text-gray-900">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-900">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-900">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez contrôler l&apos;utilisation des cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-900">
              Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter :
            </p>
            <ul className="list-none mt-4 text-gray-900">
              <li>Email : contact@myohmtechnologies.com</li>
              <li>Téléphone : 09 75 66 68 58</li>
              <li>Adresse : 544 Av. Frédéric Mistral, 04100 Manosque</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications</h2>
            <p className="text-gray-900">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur notre site web.
            </p>
            <p className="text-gray-900 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
