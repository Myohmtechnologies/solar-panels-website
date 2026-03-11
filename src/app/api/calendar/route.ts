import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Vérification de l'environnement et des credentials
const isCalendarEnabled = 
  process.env.GOOGLE_CLIENT_ID && 
  process.env.GOOGLE_CLIENT_SECRET && 
  process.env.GOOGLE_REFRESH_TOKEN &&
  process.env.ENABLE_CALENDAR === 'true';

console.log('Calendar Integration Status:', {
  isEnabled: isCalendarEnabled,
  hasClientId: !!process.env.GOOGLE_CLIENT_ID,
  hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
  hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
  enableCalendar: process.env.ENABLE_CALENDAR,
});

let calendar;
if (isCalendarEnabled) {
  try {
    console.log('Initializing Google Calendar with credentials');
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    console.log('Google Calendar initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Google Calendar:', error);
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received calendar event request');
    const body = await request.json();
    console.log('Request body:', body);
    const { summary, description, startDateTime, endDateTime, attendeeEmail, location } = body;

    // Validation des données requises
    if (!summary || !startDateTime || !endDateTime) {
      console.error('Missing required fields:', { summary, startDateTime, endDateTime });
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Si le calendrier est désactivé ou non initialisé
    if (!isCalendarEnabled || !calendar) {
      console.warn('Calendar integration is not available', { isCalendarEnabled, hasCalendar: !!calendar });
      return NextResponse.json({ 
        success: true, 
        warning: 'Calendar integration is not available. Event will be saved without calendar integration.'
      });
    }

    const event = {
      summary,
      description,
      location,
      start: {
        dateTime: startDateTime,
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Europe/Paris',
      },
      attendees: attendeeEmail ? [{ email: attendeeEmail }] : undefined,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
      transparency: 'opaque',
      visibility: 'private',
      colorId: '1'
    };

    console.log('Attempting to create calendar event:', event);

    try {
      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
        sendUpdates: 'all',
      });

      console.log('Calendar event created successfully:', response.data);

      if (!response.data || !response.data.id) {
        throw new Error('Invalid response from Google Calendar API');
      }

      return NextResponse.json({ 
        success: true, 
        eventId: response.data.id,
        htmlLink: response.data.htmlLink 
      });
    } catch (calendarError) {
      console.error('Detailed error creating calendar event:', {
        error: calendarError,
        message: calendarError.message,
        code: calendarError.code,
        errors: calendarError.errors
      });
      // En production, on continue même si le calendrier échoue
      return NextResponse.json({ 
        success: true,
        warning: 'Event saved but calendar integration failed',
        error: calendarError.message
      });
    }
  } catch (error) {
    console.error('Global error in calendar API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
