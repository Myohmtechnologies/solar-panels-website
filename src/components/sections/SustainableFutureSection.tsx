import Image from "next/image";

const SustainableFutureSection = () => {
  return (
    <section className="bg-6C8D2F/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Construisons ensemble un avenir durable
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Découvrez comment l&apos;énergie solaire peut transformer votre maison en un foyer éco-responsable et économique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-6C8D2F rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Économies d&apos;énergie</h3>
              <p className="text-gray-600">Réduisez significativement vos factures d&apos;électricité</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-6C8D2F rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact environnemental</h3>
              <p className="text-gray-600">Contribuez à la réduction des émissions de CO2</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-6C8D2F rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Valeur immobilière</h3>
              <p className="text-gray-600">Augmentez la valeur de votre propriété</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableFutureSection;
