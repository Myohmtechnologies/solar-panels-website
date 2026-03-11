import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Configuration de Resend pour l'envoi d'emails
const resend = new Resend(process.env.RESEND_API_KEY);

// Adresses email pour les notifications (utilisant des variables d'environnement)
const NOTIFICATION_EMAILS = {
  SIMULATOR: (process.env.SIMULATOR_LEADS_EMAIL || '').split(','),
  DEVIS: (process.env.DEVIS_LEADS_EMAIL || '').split(','),
};

export async function GET(req: Request) {
  try {
    // Créer le contenu HTML de l'email de test
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Test Email | MyOhm Technologies</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white;">
          <div style="background-color: #FFDF64; padding: 20px; text-align: center;">
            <img src="https://www.myohmtechnologies.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=85" 
                alt="MyOhm Technologies" 
                style="max-width: 200px; height: auto;">
          </div>
          <div style="padding: 30px;">
            <h1 style="color: #333; margin: 0 0 20px 0; font-size: 24px; text-align: center;">
              Email de Test
            </h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Ceci est un email de test pour vérifier que le système de notification fonctionne correctement.
            </p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Informations de configuration</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;"><strong>Emails Simulateur :</strong> ${NOTIFICATION_EMAILS.SIMULATOR.join(', ')}</li>
                <li style="margin-bottom: 10px;"><strong>Emails Devis :</strong> ${NOTIFICATION_EMAILS.DEVIS.join(', ')}</li>
                <li style="margin-bottom: 10px;"><strong>Date du test :</strong> ${new Date().toLocaleString('fr-FR')}</li>
              </ul>
            </div>
          </div>
          <div style="text-align: center; padding: 20px; background-color: #333; color: white;">
            <p style="margin: 0; font-size: 12px;">
              2025 MyOhm Technologies. Tous droits réservés.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Récupérer toutes les adresses email uniques
    const allEmails = [...new Set([...NOTIFICATION_EMAILS.SIMULATOR, ...NOTIFICATION_EMAILS.DEVIS])]; // Éliminer les doublons
    
    console.log('Tentative d\'envoi d\'email de test à:', allEmails.join(', '));
    
    // Envoyer un email séparé à chaque destinataire
    const responses = await Promise.all(
      allEmails.map(async (email) => {
        console.log(`Envoi d'email à: ${email}`);
        try {
          const response = await resend.emails.send({
            from: 'MyOhm Technologies <contact@myohmtechnologies.com>',
            to: email,
            subject: 'Test de notification email - MyOhm Technologies',
            html: emailHtml,
          });
          console.log(`Réponse pour ${email}:`, response);
          return { email, success: true, response };
        } catch (emailError) {
          console.error(`Erreur lors de l'envoi de l'email à ${email}:`, emailError);
          return { email, success: false, error: emailError };
        }
      })
    );

    console.log('Résultats des envois d\'emails:', responses);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email de test envoyé avec succès', 
        details: {
          simulatorEmails: NOTIFICATION_EMAILS.SIMULATOR,
          devisEmails: NOTIFICATION_EMAILS.DEVIS,
          responses
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de test:', error);
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email de test',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
