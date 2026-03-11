import Link from 'next/link';

const SolarChoiceSection = () => {
  return (
    <div className="bg-gradient-to-br from-ffeb99 to-ffb700 py-16 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-4">
          Passez au solaire avec OHM Technologies
        </h2>
        <p className="text-black/80 mb-8">
          Sélectionnez votre situation pour voir vos économies:
        </p>

        {/* Choice Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          {/* Option 1: Maison */}
          <Link
            href="/simulateur?type=maison"
            className="flex items-center bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 bg-FFDF64/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-FFDF64"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20v-6h4v6m5-10h-3m4 0v10a1 1 0 01-1 1h-3m-10 0H5a1 1 0 01-1-1V10m-2 0l7-7 7 7m-9 14h4"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Une maison</div>
              <div className="text-sm text-AFC97E">Suivant</div>
            </div>
          </Link>

          {/* Option 2: Appartement */}
          <Link
            href="/simulateur?type=appartement"
            className="flex items-center bg-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-12 h-12 bg-AFC97E/20 rounded-full flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-AFC97E"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21v-6m0 0V9a2 2 0 00-2-2H3v6m0 0v6m7-6h5m1 0a1 1 0 011 1v6a1 1 0 01-1 1h-5m1 0v-6"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-black">Un appartement</div>
              <div className="text-sm text-FFDF64">Suivant</div>
            </div>
          </Link>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-6 text-sm text-black/80">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-AFC97E"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Estimation en 2 min
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-AFC97E"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Gratuit et sans engagement
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarChoiceSection;
