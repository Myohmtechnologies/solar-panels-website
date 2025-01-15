import { Region } from './types';
import { alpesDeHauteProvence } from './departments/04-alpes-de-haute-provence';
import { hautesAlpes } from './departments/05-hautes-alpes';
import { alpesMaritimes } from './departments/06-alpes-maritimes';
import { var83 } from './departments/83-var';

export const paca: Region = {
  name: "Provence-Alpes-Côte d'Azur",
  code: "93",
  departments: {
    "04": alpesDeHauteProvence,
    "05": hautesAlpes,
    "06": alpesMaritimes,
    "83": var83
  }
};

// Helpers pour accéder facilement aux données
export const getDepartment = (code: string) => paca.departments[code];
export const getCity = (departmentCode: string, citySlug: string) => {
  const department = getDepartment(departmentCode);
  return department?.cities[citySlug];
};

// Export des types
export * from './types';
