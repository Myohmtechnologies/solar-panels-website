import Image from 'next/image';

const StepsSection = () => {
  return (
    <div className="relative bg-gray-50 py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-F5F5F0 bg-opacity-80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Les &eacute;tapes cl&eacute;s d&apos;une installation</h2>
          <p className="text-green-700 font-medium">L&eacute;nergie solaire &agrave; votre port&eacute;e.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-FFDF64 mb-4">
              <Image src="/images/icone-telephone.svg" alt="Prise de contact" width={70} height={70} />
            </div>
            <h3 className="font-bold text-gray-900">&Eacute;tape 01</h3>
            <p className="text-gray-600">Prise de contact</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-AFC97E mb-4">
              <Image src="/images/Visite-technique.svg" alt="Visite technique" width={70} height={70} />
            </div>
            <h3 className="font-bold text-gray-900">&Eacute;tape 02</h3>
            <p className="text-gray-600">Visite technique</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-FFDF64 mb-4">
              <Image src="/images/dossier-administratif.svg" alt="Gestion administrative" width={70} height={70} />
            </div>
            <h3 className="font-bold text-gray-900">&Eacute;tape 03</h3>
            <p className="text-gray-600">Gestion administrative, de A &agrave; Z</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-AFC97E mb-4">
              <Image src="/images/installation.svg" alt="Installation panneaux" width={70} height={70} />
            </div>
            <h3 className="font-bold text-gray-900">&Eacute;tape 04</h3>
            <p className="text-gray-600">Installation des panneaux photovolta&iuml;ques</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 flex items-center justify-center rounded-full bg-FFDF64 mb-4">
              <Image src="/images/autoconsomation.svg" alt="Autoconsommation" width={70} height={70} />
            </div>
            <h3 className="font-bold text-gray-900">&Eacute;tape 05</h3>
            <p className="text-gray-600">Autoconsommation et &eacute;conomies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
