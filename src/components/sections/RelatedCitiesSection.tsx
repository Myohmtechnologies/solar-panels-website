import Link from 'next/link';
import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import alpesdehauteprovence from '@/app/data/departments/04-alpes-de-haute-provence';
import hautesalpes from '@/app/data/departments/05-hautes-alpes';
import alpesmaritimes from '@/app/data/departments/06-alpes-maritimes';
import var83 from '@/app/data/departments/83-var';
import vaucluse from '@/app/data/departments/84-vaucluse';

interface City {
  name: string;
  slug: string;
  departmentCode: string;
}

const departments = {
  '04': { data: alpesdehauteprovence, name: 'Alpes-de-Haute-Provence' },
  '05': { data: hautesalpes, name: 'Hautes-Alpes' },
  '06': { data: alpesmaritimes, name: 'Alpes-Maritimes' },
  '13': { data: bouchesdurhone, name: 'Bouches-du-Rhône' },
  '83': { data: var83, name: 'Var' },
  '84': { data: vaucluse, name: 'Vaucluse' }
};

// Fonction pour obtenir des villes aléatoires
const getRandomCities = (count: number = 6): City[] => {
  const allCities: City[] = [];
  
  Object.entries(departments).forEach(([code, { data }]) => {
    Object.entries(data.cities).forEach(([slug, cityData]) => {
      allCities.push({
        name: cityData.name,
        slug: slug,
        departmentCode: code
      });
    });
  });

  // Mélanger le tableau
  const shuffled = allCities.sort(() => 0.5 - Math.random());
  
  // Prendre les n premières villes
  return shuffled.slice(0, count);
};

export default function RelatedCitiesSection() {
  const randomCities = getRandomCities();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Installation de panneaux solaires en région PACA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {randomCities.map((city) => (
            <Link
              key={`${city.departmentCode}-${city.slug}`}
              href={`/region/paca/departements/${city.departmentCode}/villes/${city.slug}`}
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-gray-900 font-medium hover:text-FFDF64 transition-colors">
                {city.name}
              </div>
              <div className="text-sm text-gray-500">
                {departments[city.departmentCode as keyof typeof departments].name}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Découvrez nos installations de panneaux solaires dans toute la région PACA
          </p>
        </div>
      </div>
    </section>
  );
}
