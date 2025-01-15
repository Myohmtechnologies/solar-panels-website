import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

    // TODO: Sauvegarder les informations utilisateur dans une base de données
    console.log('Informations utilisateur reçues:', { fullName, email, phone });

    // Envoyer l'email avec le lien de téléchargement
    await sendEmail({
      to: email,
      subject: 'Votre guide des aides et subventions pour panneaux solaires',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #16a34a;">Bonjour ${fullName},</h1>
          
          <p>Merci d'avoir téléchargé notre guide sur les aides et subventions pour l'installation de panneaux solaires.</p>
          
          <p>Vous pouvez télécharger votre guide en cliquant sur le bouton ci-dessous :</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://myohmtechnologies.com/guides/aides-subventions-2024.pdf" 
               style="background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Télécharger le guide
            </a>
          </div>
          
          <p>Notre équipe vous contactera prochainement au ${phone} pour discuter de votre projet et répondre à toutes vos questions.</p>
          
          <p style="margin-top: 30px;">Cordialement,<br>L'équipe MyOhm Technologies</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Ce message a été envoyé par MyOhm Technologies.<br>
            Si vous n'êtes pas à l'origine de cette demande, veuillez ignorer cet email.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      pdfUrl: '/guides/aides-subventions-2024.pdf',
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
