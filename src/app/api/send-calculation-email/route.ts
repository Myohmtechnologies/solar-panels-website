import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Créer l'instance Resend côté serveur
const resend = new Resend(process.env.RESEND_API_KEY);

// Adresse email de notification
const NOTIFICATION_EMAIL = 'rmahieddine04@gmail.com';

// Templates HTML pour l'email
const headerHtml = `
  <div style="background-color: #FFDF64; padding: 20px; text-align: center;">
    <img src="https://www.myohmtechnologies.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=85" 
         alt="MyOhm Technologies" 
         style="max-width: 200px; height: auto;">
  </div>
`;

const contactSectionHtml = `
  <div style="text-align: center; margin-top: 30px;">
    <img src="https://www.myohmtechnologies.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=85" 
         alt="MyOhm Expert" 
         style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px;">
    <p style="color: #666; margin: 10px 0;">
      Notre équipe est à votre disposition :
    </p>
    <p style="margin: 5px 0;">
      <a href="tel:0492766858" style="color: #333; text-decoration: none; font-weight: bold;">
        📞 04 92 76 68 58
      </a>
    </p>
    <p style="margin: 5px 0;">
      <a href="mailto:contact@myohmtechnologies.com" style="color: #333; text-decoration: none; font-weight: bold;">
        ✉️ contact@myohmtechnologies.com
      </a>
    </p>
  </div>
`;

export async function POST(request: Request) {
  try {
    const { email, name, phone, result } = await request.json();

    if (!email || !name || !result) {
      return NextResponse.json(
        { error: 'Email, name et result sont requis' },
        { status: 400 }
      );
    }

    // Email pour le client
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Votre estimation solaire | MyOhm Technologies</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white;">
          ${headerHtml}
          <div style="padding: 30px;">
            <h1 style="color: #333; margin: 0 0 20px 0; font-size: 24px; text-align: center;">
              Votre estimation solaire personnalisée
            </h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Bonjour ${name},<br><br>
              Voici le résultat de votre simulation pour l'installation de panneaux solaires :
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Vous avez oublier un un chiffre lors de la saisi de votre numéro de téléphone 061512251 ?
              merci de nous contacter au 04 92 76 68 58 .
            </p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Détails de l'estimation</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;">💰 <strong>Économies estimées :</strong> ${result.savings}€/an</li>
                <li style="margin-bottom: 10px;">⚡ <strong>Production estimée :</strong> ${result.production} kWh/an</li>
                <li style="margin-bottom: 10px;">🌱 <strong>Réduction CO2 :</strong> ${result.co2} tonnes/an</li>
              </ul>
            </div>
            ${contactSectionHtml}
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

    // Email pour l'administrateur
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nouvelle simulation de prix</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; margin-bottom: 20px;">Nouvelle simulation de prix</h1>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Informations du client</h2>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Nom :</strong> ${name}</li>
              <li style="margin-bottom: 10px;"><strong>Email :</strong> ${email}</li>
              <li style="margin-bottom: 10px;"><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</li>
            </ul>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333; margin-top: 0;">Détails de la simulation</h2>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Économies estimées :</strong> ${result.savings}€/an</li>
              <li style="margin-bottom: 10px;"><strong>Production estimée :</strong> ${result.production} kWh/an</li>
              <li style="margin-bottom: 10px;"><strong>Réduction CO2 :</strong> ${result.co2} tonnes/an</li>
            </ul>
          </div>
        </div>
      </body>
      </html>
    `;

    // Envoi de l'email au client
    const clientResponse = await resend.emails.send({
      from: 'MyOhm Technologies <onboarding@resend.dev>',
      to: email,
      subject: 'Votre estimation solaire personnalisée | MyOhm Technologies',
      html: clientEmailHtml,
    });

    // Envoi de l'email de notification à l'administrateur
    const adminResponse = await resend.emails.send({
      from: 'MyOhm Technologies <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      subject: `Nouvelle simulation de prix - ${name}`,
      html: adminEmailHtml,
    });

    return NextResponse.json({ 
      success: true, 
      clientId: clientResponse.id,
      adminId: adminResponse.id
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
