import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } = process.env;
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
      console.error('Google OAuth environment variables are not configured');
      return NextResponse.json(
        { error: 'Google OAuth is not configured on the server' },
        { status: 500 }
      );
    }

    const { google } = await import('googleapis');
    const oauth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REDIRECT_URI
    );
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/calendar'],
      prompt: 'consent'
    });

    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('Error creating Google OAuth URL:', error);
    return NextResponse.json(
      { error: 'Could not start Google authentication' },
      { status: 500 }
    );
  }
}
