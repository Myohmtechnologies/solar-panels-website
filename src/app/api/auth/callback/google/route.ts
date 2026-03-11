import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const error = url.searchParams.get('error');

    if (error) {
      console.error('Google OAuth error:', error);
      return NextResponse.json({ 
        error: 'Authentication failed',
        details: error
      }, { status: 400 });
    }

    if (!code) {
      return NextResponse.json({ 
        error: 'No authentication code provided. Please start the authentication process at /api/auth/google'
      }, { status: 400 });
    }

    try {
      const { tokens } = await oauth2Client.getToken(code);
      
      if (!tokens.refresh_token) {
        return NextResponse.json({
          error: 'No refresh token received. Please revoke access and try again.',
          help: 'Go to https://myaccount.google.com/permissions to revoke access first'
        }, { status: 400 });
      }

      return NextResponse.json({ 
        message: 'Success! Your refresh token is:',
        refresh_token: tokens.refresh_token 
      });
    } catch (tokenError) {
      console.error('Error getting tokens:', tokenError);
      return NextResponse.json({ 
        error: 'Failed to get authentication tokens',
        details: tokenError instanceof Error ? tokenError.message : 'Unknown error'
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in callback handler:', error);
    return NextResponse.json({ 
      error: 'An error occurred during authentication'
    }, { status: 500 });
  }
}
