import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const isCalendarEnabled = 
  process.env.GOOGLE_CLIENT_ID && 
  process.env.GOOGLE_CLIENT_SECRET && 
  process.env.GOOGLE_REFRESH_TOKEN &&
  process.env.ENABLE_CALENDAR === 'true';

let calendar;
if (isCalendarEnabled) {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  } catch (error) {
    console.error('Failed to initialize Google Calendar:', error);
  }
}

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const headersList = headers();
    const start = headersList.get('x-start-date');
    const end = headersList.get('x-end-date');

    if (!start || !end) {
      return NextResponse.json({ 
        error: 'Start and end dates are required' 
      }, { status: 400 });
    }

    // Si le calendrier est désactivé ou non initialisé
    if (!isCalendarEnabled || !calendar) {
      console.warn('Calendar integration is not available');
      return NextResponse.json({ 
        events: [],
        warning: 'Calendar integration is not available'
      });
    }

    try {
      const response = await calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date(start).toISOString(),
        timeMax: new Date(end).toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      const events = response.data.items?.map(event => ({
        id: event.id,
        title: event.summary,
        start: event.start?.dateTime || event.start?.date,
        end: event.end?.dateTime || event.end?.date,
        className: event.description?.includes('commercial') ? 'event-rdv-commercial' : 'event-visite-technique',
        extendedProps: {
          type: event.description?.includes('commercial') ? 'rdv-commercial' : 'visite-technique',
          client: event.summary?.split('-')[1]?.trim() || 'Client',
          phone: event.description || 'Non renseigné',
          address: event.location || 'Non renseignée',
        }
      })) || [];

      return NextResponse.json({ events });
    } catch (calendarError) {
      console.error('Error fetching calendar events:', calendarError);
      return NextResponse.json({ 
        events: [],
        warning: 'Failed to fetch calendar events'
      });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ 
      error: process.env.NODE_ENV === 'production'
        ? 'An error occurred while processing your request'
        : error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
