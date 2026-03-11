import { NextResponse } from 'next/server';
import { sendCalculationEmail } from '@/services/emailService';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name, result } = data;

    await sendCalculationEmail(email, name, result);

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
