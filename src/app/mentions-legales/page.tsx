export const metadata = {
  title: 'Mentions Légales | MyOhm Technologies',
  description: 'Mentions légales de MyOhm Technologies - Installation de panneaux solaires photovoltaïques',
};

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-gray-900">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations Légales</h2>
            <div className="text-gray-900">
              <p><strong>Raison sociale :</strong> MyOhm Technologies</p>
              <p><strong>Forme juridique :</strong> SASU</p>
              <p><strong>Capital social :</strong> 1 000 €</p>
              <p><strong>SIRET :</strong> 91760190800010</p>
              <p><strong>Siège social :</strong> 544 Avenue Frédéric Mistral, 04100 Manosque</p>
              <p><strong>Téléphone :</strong> 09 75 66 68 58</p>
              <p><strong>Email :</strong> contact@myohmtechnologies.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Représentant Légal</h2>
            <p className="text-gray-900">
              <strong>Président :</strong> M. Riadh MAHIEDDINE
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété Intellectuelle</h2>
            <p className="text-gray-900">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des Données Personnelles</h2>
            <p className="text-gray-900">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.
            </p>
            <p className="text-gray-900 mt-4">
              Pour exercer ce droit, vous pouvez nous contacter par email à l&apos;adresse : contact@myohmtechnologies.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Hébergement</h2>
            <div className="text-gray-900 mt-4">
              <p><strong>Société :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> https://vercel.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-900">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour plus d&apos;informations, veuillez consulter notre politique des cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Droit Applicable</h2>
            <p className="text-gray-900">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

export default MentionsLegales;
