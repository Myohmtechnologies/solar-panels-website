import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { summary, description, startDateTime, endDateTime, attendeeEmail, location } = body;

    // Vérifier si les identifiants Google sont configurés
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN) {
      console.warn('Google Calendar credentials are not properly configured');
      return NextResponse.json({ 
        success: true, 
        warning: 'Calendar integration is not configured, event was not created'
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
      attendees: [
        { email: attendeeEmail }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // Rappel par email 24h avant
          { method: 'popup', minutes: 30 }, // Rappel popup 30 minutes avant
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Envoie des invitations par email
    });

    return NextResponse.json({ 
      success: true, 
      eventId: response.data.id,
      htmlLink: response.data.htmlLink 
    });

  } catch (error) {
    console.error('Error creating calendar event:', error);

    // Type guard to check if error is an object with response property
    if (
      error &&
      typeof error === 'object' &&
      'response' in error &&
      error.response &&
      typeof error.response === 'object' &&
      'data' in error.response &&
      error.response.data &&
      typeof error.response.data === 'object' &&
      'error' in error.response.data &&
      error.response.data.error === 'invalid_grant'
    ) {
      return NextResponse.json({
        success: true,
        warning: 'Could not create calendar event due to authentication issue'
      });
    }

    return NextResponse.json({ 
      success: false,
      error: 'Failed to create calendar event'
    });
  }
}
