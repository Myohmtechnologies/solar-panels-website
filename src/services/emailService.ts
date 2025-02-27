import { Resend } from 'resend';

// Déplacer la création de l'instance Resend dans une fonction
const getResendClient = () => {
  if (typeof window !== 'undefined') return null; // Ne pas créer le client côté client
  
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY manquante dans .env.local');
    console.error('👉 Créez un fichier .env.local à la racine du projet avec :');
    console.error('RESEND_API_KEY=re_votre_cle_api');
    console.error('Obtenez votre clé sur https://resend.com');
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

interface LeadData {
  houseSize: 'small' | 'medium' | 'large';
  monthlyBill: 'low' | 'medium' | 'high';
  orientation: string;
  name: string;
  email: string;
  phone: string;
}

const houseSizes = {
  small: 'Petite maison (< 100m²)',
  medium: 'Maison moyenne (100-150m²)',
  large: 'Grande maison (> 150m²)'
};

const billRanges = {
  low: '60€ - 120€ / mois',
  medium: '120€ - 200€ / mois',
  high: '200€ et plus / mois'
};

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

export async function sendLeadNotificationEmail(leadData: LeadData) {
  const resend = getResendClient();
  if (!resend) return null;

  const projectSummaryHtml = `
    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #333; margin: 0 0 15px 0;">Récapitulatif de votre projet</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px;">🏠 <strong>Type de maison :</strong> ${houseSizes[leadData.houseSize]}</li>
        <li style="margin-bottom: 10px;">💡 <strong>Facture actuelle :</strong> ${billRanges[leadData.monthlyBill]}</li>
        <li style="margin-bottom: 10px;">🧭 <strong>Orientation :</strong> ${leadData.orientation}</li>
      </ul>
    </div>
  `;

  const clientEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Votre estimation MyOhm Technologies</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        ${headerHtml}
        <div style="padding: 30px;">
          <h1 style="color: #333; margin: 0 0 20px 0; font-size: 24px; text-align: center;">
            Merci pour votre demande d'estimation, ${leadData.name} !
          </h1>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Nous avons bien reçu votre demande d'estimation pour l'installation de panneaux solaires. 
            Un expert MyOhm vous contactera dans les plus brefs délais.
          </p>
          ${projectSummaryHtml}
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

  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nouveau lead - Installation Panneaux Solaires</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; margin-bottom: 20px;">Nouveau lead - Installation Panneaux Solaires</h1>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Informations du client</h2>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Nom :</strong> ${leadData.name}</li>
            <li style="margin-bottom: 10px;"><strong>Email :</strong> ${leadData.email}</li>
            <li style="margin-bottom: 10px;"><strong>Téléphone :</strong> ${leadData.phone}</li>
          </ul>
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #333; margin-top: 0;">Détails du projet</h2>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Type de maison :</strong> ${houseSizes[leadData.houseSize]}</li>
            <li style="margin-bottom: 10px;"><strong>Facture actuelle :</strong> ${billRanges[leadData.monthlyBill]}</li>
            <li style="margin-bottom: 10px;"><strong>Orientation :</strong> ${leadData.orientation}</li>
          </ul>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Email au client
    const clientResponse = await resend.emails.send({
      from: 'MyOhm Technologies <onboarding@resend.dev>',
      to: leadData.email,
      subject: 'Votre estimation solaire personnalisée | MyOhm Technologies',
      html: clientEmailHtml,
    });

    // Email à l'administrateur
    const adminResponse = await resend.emails.send({
      from: 'MyOhm Technologies <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nouveau lead - Installation Panneaux Solaires - ${leadData.name}`,
      html: adminEmailHtml
    });

    return { clientResponse, adminResponse };
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    throw error;
  }
}

export async function sendCalculationEmail(email: string, name: string, result: any) {
  const resend = getResendClient();
  if (!resend) return null;

  const emailHtml = `
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

  try {
    const response = await resend.emails.send({
      from: 'MyOhm Technologies <onboarding@resend.dev>',
      to: email,
      subject: 'Votre estimation solaire personnalisée | MyOhm Technologies',
      html: emailHtml,
    });

    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}
