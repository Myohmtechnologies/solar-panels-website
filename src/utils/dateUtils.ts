export function adjustDateToFrenchTimezone(date: string | Date): string {
  const inputDate = typeof date === 'string' ? new Date(date) : date;
  
  // On ne fait plus d'ajustement manuel du fuseau horaire
  // À la place, on utilise directement la date locale française
  return inputDate.toLocaleString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Paris'
  }).replace(/\//g, '-');
}

export function parseAndAdjustDate(dateString: string): Date {
  // Créer un objet Date en spécifiant explicitement le fuseau horaire français
  const [datePart, timePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-');
  const [hour, minute] = timePart ? timePart.split(':') : ['00', '00'];
  
  // Créer la date en spécifiant tous les composants
  const date = new Date(
    parseInt(year),
    parseInt(month) - 1, // Les mois sont 0-indexés en JavaScript
    parseInt(day),
    parseInt(hour),
    parseInt(minute)
  );
  
  return date;
}
