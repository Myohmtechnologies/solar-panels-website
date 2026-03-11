import { NextResponse } from 'next/server';
import { getGoogleCalendarClient } from '@/lib/googleCalendar';

export async function POST(request: Request) {
  try {
    // Extraire les données de la requête
    const body = await request.json();
    const { startDateTime, endDateTime, commercialId } = body;
    
    // Valider les paramètres requis
    if (!startDateTime || !endDateTime) {
      return NextResponse.json({ 
        success: false, 
        error: 'Les paramètres startDateTime et endDateTime sont requis' 
      }, { status: 400 });
    }
    
    // Initialiser le client Google Calendar
    const calendar = await getGoogleCalendarClient();
    
    // Vérifier les conflits d'horaire en utilisant l'API freeBusy
    const freeBusyRequest = {
      timeMin: new Date(startDateTime).toISOString(),
      timeMax: new Date(endDateTime).toISOString(),
      items: [
        { id: commercialId || 'primary' } // Utiliser le calendrier principal par défaut
      ]
    };
    
    const freeBusyResponse = await calendar.freebusy.query({
      requestBody: freeBusyRequest
    });
    
    // Extraire les périodes occupées
    const busyPeriods = freeBusyResponse.data.calendars?.[commercialId || 'primary']?.busy || [];
    
    // Vérifier s'il y a des conflits
    const isAvailable = busyPeriods.length === 0;
    
    // Retourner le résultat
    return NextResponse.json({ 
      success: true, 
      isAvailable,
      conflicts: busyPeriods
    });
  } catch (error) {
    console.error('Error checking calendar availability:', error);
    
    // Gérer les erreurs spécifiques
    if (error instanceof Error) {
      if (error.message.includes('credentials')) {
        return NextResponse.json({ 
          success: false, 
          error: 'Configuration Google Calendar manquante ou incorrecte' 
        }, { status: 500 });
      }
    }
    
    // Erreur générique
    return NextResponse.json({ 
      success: false, 
      error: 'Erreur lors de la vérification des disponibilités du calendrier' 
    }, { status: 500 });
  }
}
