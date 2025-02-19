import { NextResponse } from 'next/server';
import { sendLeadNotificationEmail } from '@/services/emailService';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await sendLeadNotificationEmail(data);

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de l\'envoi de l\'email' 
      },
      { status: 500 }
    );
  }
}
