import alpesDeHauteProvence from '@/app/data/departments/04-alpes-de-haute-provence';
import hautesAlpes from '@/app/data/departments/05-hautes-alpes';
import alpesMaritimes from '@/app/data/departments/06-alpes-maritimes';
import bouchesdurhone from '@/app/data/departments/13-bouches-du-rhone';
import var83 from '@/app/data/departments/83-var';
import vaucluse from '@/app/data/departments/84-vaucluse';

const departments = {
  '04': alpesDeHauteProvence,
  '05': hautesAlpes,
  '06': alpesMaritimes,
  '13': bouchesdurhone,
  '83': var83,
  '84': vaucluse,
};

export async function getCityData(citySlug: string) {
  // Parcourir tous les départements pour trouver la ville
  for (const [, department] of Object.entries(departments)) {
    const cities = department.cities;
    if (cities[citySlug]) {
      return cities[citySlug];
    }
  }
  return null;
}

export async function getAllCities() {
  const allCities = [];
  
  for (const [depCode, department] of Object.entries(departments)) {
    const cities = department.cities;
    for (const [citySlug, cityData] of Object.entries(cities)) {
      allCities.push({
        slug: citySlug,
        name: cityData.name,
        department: depCode,
        ...cityData,
      });
    }
  }
  
  return allCities;
}

export async function getCitiesByDepartment(depCode: string) {
  const department = departments[depCode];
  if (!department) return [];
  
  const cities = department.cities;
  return Object.entries(cities).map(([slug, data]) => ({
    slug,
    name: data.name,
    department: depCode,
    ...data,
  }));
}
