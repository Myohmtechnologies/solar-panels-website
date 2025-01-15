interface LocalStatisticsProps {
  statistics: {
    averageElectricityConsumption: string;
    solarPotential: string;
    co2Savings: string;
  };
  cityName: string;
}

export default function LocalStatistics({ statistics, cityName }: LocalStatisticsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Statistiques Solaires à {cityName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Consommation Électrique Moyenne</h3>
            <p className="text-2xl text-primary">{statistics.averageElectricityConsumption}</p>
            <p className="text-gray-600 mt-2">par foyer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Potentiel Solaire</h3>
            <p className="text-2xl text-primary">{statistics.solarPotential}</p>
            <p className="text-gray-600 mt-2">production moyenne</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Réduction CO2</h3>
            <p className="text-2xl text-primary">{statistics.co2Savings}</p>
            <p className="text-gray-600 mt-2">impact environnemental</p>
          </div>
        </div>
      </div>
    </section>
  );
}
