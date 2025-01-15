import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const SCOPES = 'https://www.googleapis.com/auth/calendar';

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export async function createCalendarEvent(
  summary: string,
  description: string,
  startDateTime: string,
  endDateTime: string,
  attendeeEmail?: string
) {
  try {
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const event = {
      summary,
      description,
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
          { method: 'email', minutes: 24 * 60 }, // 24 hours
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Send email notifications to attendees
    });

    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}
