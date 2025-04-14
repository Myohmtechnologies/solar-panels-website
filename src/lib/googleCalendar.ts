import { google } from 'googleapis';

// Initialisation du client OAuth2 pour Google Calendar
export async function getGoogleCalendarClient() {
  try {
    // Vérifier si les variables d'environnement nécessaires sont définies
    if (
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.GOOGLE_REFRESH_TOKEN
    ) {
      throw new Error('Google Calendar credentials are missing in environment variables');
    }

    // Journaliser les informations de configuration (sans les valeurs sensibles)
    console.log('Google Calendar configuration:', {
      clientIdExists: !!process.env.GOOGLE_CLIENT_ID,
      clientSecretExists: !!process.env.GOOGLE_CLIENT_SECRET,
      refreshTokenExists: !!process.env.GOOGLE_REFRESH_TOKEN,
      redirectUriExists: !!process.env.GOOGLE_REDIRECT_URI
    });

    // Créer un client OAuth2
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI || 'https://myohmtechnologies.com'
    );

    // Configurer les credentials avec le refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    // Créer et retourner l'instance de l'API Calendar
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    
    // Vérifier que le client fonctionne en faisant un appel simple
    try {
      // Tester l'accès au calendrier avec un appel simple
      await calendar.calendarList.list({ maxResults: 1 });
      console.log('Google Calendar client successfully initialized and tested');
    } catch (testError) {
      console.error('Google Calendar API test failed:', testError);
      throw new Error(`Google Calendar API test failed: ${testError instanceof Error ? testError.message : 'Unknown error'}`);
    }
    
    return calendar;
  } catch (error) {
    console.error('Failed to initialize Google Calendar client:', error);
    throw error;
  }
}

// Fonction pour générer des créneaux disponibles
export function generateAvailableSlots(
  busySlots: Array<{ start: string; end: string }>,
  startDate: string,
  endDate: string,
  workingHours = { start: 8, end: 18 },
  slotDurationHours = 3
) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const availableSlots = [];

  // Boucle sur chaque jour dans la plage de dates
  const currentDate = new Date(start);
  while (currentDate <= end) {
    // Ignorer les week-ends (0 = dimanche, 6 = samedi)
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Créer des créneaux pour les heures de travail avec des intervalles de 3 heures
      // Par exemple: 8h-11h, 11h-14h, 14h-17h
      for (let hour = workingHours.start; hour <= workingHours.end - slotDurationHours; hour += slotDurationHours) {
        // Créer un créneau de 3 heures
        const slotStart = new Date(currentDate);
        slotStart.setHours(hour, 0, 0, 0);
        
        const slotEnd = new Date(currentDate);
        slotEnd.setHours(hour + slotDurationHours, 0, 0, 0);
        
        // Vérifier si ce créneau est disponible (non occupé par un événement existant)
        const isAvailable = !busySlots.some(busy => {
          const busyStart = new Date(busy.start);
          const busyEnd = new Date(busy.end);
          
          // Vérifier si le créneau chevauche un événement occupé
          return (
            (slotStart >= busyStart && slotStart < busyEnd) || // Le début du créneau est pendant un événement
            (slotEnd > busyStart && slotEnd <= busyEnd) || // La fin du créneau est pendant un événement
            (slotStart <= busyStart && slotEnd >= busyEnd) || // Le créneau englobe complètement un événement
            (slotStart >= busyStart && slotEnd <= busyEnd) // Le créneau est entièrement contenu dans un événement
          );
        });
        
        // Si le créneau est disponible, l'ajouter à la liste
        if (isAvailable) {
          const startHour = hour.toString().padStart(2, '0');
          const endHour = (hour + slotDurationHours).toString().padStart(2, '0');
          
          availableSlots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            title: `${startHour}h-${endHour}h`,
            extendedProps: {
              formattedTime: `${startHour}h-${endHour}h`
            }
          });
        }
      }
    }
    
    // Passer au jour suivant
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return availableSlots;
}

// Fonction pour formater les événements du calendrier
export function formatCalendarEvents(events: any[]) {
  return events.map(event => {
    // Extraire les informations client du titre ou de la description
    let clientName = '';
    let clientCity = '';
    
    // Essayer d'extraire les informations du titre
    const title = event.summary || '';
    const description = event.description || '';
    
    // Rechercher un motif comme "RDV avec [Nom]" ou "RDV: [Nom] ([Ville])"
    const clientMatch = title.match(/RDV(?:\s+avec|\s*:)\s+([^(]+)(?:\s*\(([^)]+)\))?/);
    if (clientMatch) {
      clientName = clientMatch[1]?.trim() || '';
      clientCity = clientMatch[2]?.trim() || '';
    }
    
    // Si pas d'information dans le titre, chercher dans la description
    if (!clientName && description) {
      // Chercher des motifs comme "Client: [Nom]" et "Ville: [Ville]"
      const nameMatch = description.match(/Client\s*:\s*([^\n]+)/);
      const cityMatch = description.match(/Ville\s*:\s*([^\n]+)/);
      
      if (nameMatch) clientName = nameMatch[1].trim();
      if (cityMatch) clientCity = cityMatch[1].trim();
    }
    
    return {
      id: event.id,
      title: event.summary || 'Occupé',
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      location: event.location,
      description: event.description,
      clientInfo: {
        name: clientName || 'Client',
        city: clientCity || ''
      },
      // Ajouter d'autres propriétés si nécessaire
    };
  });
}
