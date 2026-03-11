// Imports des données de départements
export { alpesDeHauteProvence } from './04-alpes-de-haute-provence';
export { hautesAlpes } from './05-hautes-alpes';
export { alpesMaritimes } from './06-alpes-maritimes';
export { bouchesDuRhone } from './13-bouches-du-rhone';
export { varDepartment } from './83-var';
export { vaucluse } from './84-vaucluse';

// Dictionnaire pour un accès facile par code de département
export const departments = {
  '04': alpesDeHauteProvence,
  '05': hautesAlpes,
  '06': alpesMaritimes,
  '13': bouchesDuRhone,
  '83': varDepartment,
  '84': vaucluse
};
