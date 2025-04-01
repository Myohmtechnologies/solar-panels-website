import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { Resend } from 'resend';

// Configuration de Resend pour l'envoi d'emails
const resend = new Resend(process.env.RESEND_API_KEY);

// Adresses email pour les notifications (utilisant des variables d'environnement)
// Les adresses peuvent être multiples, séparées par des virgules
const NOTIFICATION_EMAILS = {
  SIMULATOR: (process.env.SIMULATOR_LEADS_EMAIL || 'contact@myohmtechnologies.com').split(','),
  DEVIS: (process.env.DEVIS_LEADS_EMAIL || 'contact@myohmtechnologies.com').split(','),
};

// Stockage temporaire pour les leads en mode développement
const localLeads: any[] = [];

// Fonction pour envoyer un email de notification
async function sendLeadNotificationEmail(lead: any) {
  // Vérifier si la clé API Resend est configurée
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY manquante dans .env.local');
    return;
  }

  try {
    // Déterminer les adresses email de destination en fonction de la source du lead
    let toEmails = NOTIFICATION_EMAILS.DEVIS; // Par défaut
    if (lead.source === 'simulator' || lead.source === 'SIMULATOR') {
      toEmails = NOTIFICATION_EMAILS.SIMULATOR;
    }

    // Créer le contenu HTML de l'email
    const isSimulator = lead.source === 'simulator' || lead.source === 'SIMULATOR';
    const leadType = isSimulator ? 'Simulateur' : 'Devis';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nouveau Lead | MyOhm Technologies</title>
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
              Nouveau Lead ${leadType}
            </h1>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Un nouveau lead vient d'être créé. Voici les détails :
            </p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Informations du contact</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;"><strong>Nom :</strong> ${lead.name}</li>
                <li style="margin-bottom: 10px;"><strong>Email :</strong> <a href="mailto:${lead.email}" style="color: #116290;">${lead.email}</a></li>
                <li style="margin-bottom: 10px;"><strong>Téléphone :</strong> <a href="tel:${lead.phone}" style="color: #116290;">${lead.phone}</a></li>
                <li style="margin-bottom: 10px;"><strong>Source :</strong> ${lead.source}</li>
                <li style="margin-bottom: 10px;"><strong>Date :</strong> ${new Date(lead.createdAt).toLocaleString('fr-FR')}</li>
                ${lead.notes ? `<li style="margin-bottom: 10px;"><strong>Notes :</strong> ${lead.notes}</li>` : ''}
              </ul>
            </div>
            ${lead.simulatorData ? `
            <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Données du simulateur</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;"><strong>Type de logement :</strong> ${lead.simulatorData.logementType || 'Non spécifié'}</li>
                <li style="margin-bottom: 10px;"><strong>Équipement :</strong> ${lead.simulatorData.equipment || 'Non spécifié'}</li>
                <li style="margin-bottom: 10px;"><strong>Facture d'énergie :</strong> ${lead.simulatorData.energyBill || 'Non spécifié'}</li>
                <li style="margin-bottom: 10px;"><strong>Statut résidentiel :</strong> ${lead.simulatorData.residentialStatus || 'Non spécifié'}</li>
              </ul>
            </div>
            ` : ''}
            <div style="margin-top: 30px; text-align: center;">
              <a href="https://www.myohmtechnologies.com/admin/leads" 
                 style="display: inline-block; background: linear-gradient(to right, #116290, #0a3d5c); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Voir tous les leads
              </a>
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

    // Envoyer un email séparé à chaque destinataire
    const responses = await Promise.all(
      toEmails.map(async (email) => {
        console.log(`Envoi d'email de notification à: ${email}`);
        try {
          const response = await resend.emails.send({
            from: 'MyOhm Technologies <contact@myohmtechnologies.com>',
            to: email,
            subject: `Nouveau Lead ${lead.source === 'simulator' || lead.source === 'SIMULATOR' ? 'Simulateur' : 'Devis'} - ${lead.name}`,
            html: emailHtml,
          });
          console.log(`Email envoyé avec succès à ${email}:`, response);
          return { email, success: true, response };
        } catch (emailError) {
          console.error(`Erreur lors de l'envoi de l'email à ${email}:`, emailError);
          return { email, success: false, error: emailError };
        }
      })
    );

    console.log('Résultats des envois d\'emails:', responses);
    return responses;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de notification:', error);
    if (error instanceof Error) {
      console.error('Message d\'erreur:', error.message);
      console.error('Stack trace:', error.stack);
    }
    // Ne pas bloquer le processus si l'email échoue
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('API received body:', body);
    
    // Validation des données
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Les champs nom, email et téléphone sont requis' },
        { status: 400 }
      );
    }

    // Créer l'objet lead
    const leadData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address || null,
      city: body.city || null,
      postalCode: body.postalCode || null,
      projectType: body.projectType || 'SOLAR_PANELS',
      source: body.source || 'WEBSITE',
      notes: body.notes || '',
      createdAt: body.createdAt ? new Date(body.createdAt) : new Date(),
      status: 'NEW',
      // Données du simulateur
      simulatorData: body.source === 'simulator' ? {
        logementType: body.logementType,
        equipment: body.equipment,
        energyBill: body.energyBill,
        residentialStatus: body.residentialStatus
      } : null
    };

    try {
      // Essayer de se connecter à MongoDB
      const client = await clientPromise;
      const db = client.db('myohm');
      
      // Si la connexion réussit, enregistrer dans MongoDB
      const lead = await db.collection('leads').insertOne(leadData);
      console.log('Lead created successfully in MongoDB:', lead);
      
      // Envoyer l'email de notification (ne pas attendre la réponse pour ne pas bloquer)
      sendLeadNotificationEmail({...leadData, _id: lead.insertedId});
      
      return NextResponse.json(
        { success: true, data: lead },
        { status: 201 }
      );
    } catch (dbError) {
      // En cas d'erreur de connexion à MongoDB, stocker localement
      console.log('MongoDB connection failed, storing lead locally:', dbError);
      
      // Générer un ID factice
      const fakeId = Date.now().toString();
      const localLead = { 
        ...leadData, 
        _id: fakeId,
        insertedId: fakeId
      };
      
      // Stocker dans le tableau local
      localLeads.push(localLead);
      console.log('Lead stored locally. Total local leads:', localLeads.length);
      
      // Envoyer l'email de notification même pour les leads stockés localement
      sendLeadNotificationEmail(localLead);
      
      return NextResponse.json(
        { success: true, data: localLead, mode: 'local' },
        { status: 201 }
      );
    }
  } catch (error: unknown) {
    console.error('Erreur lors de la création du lead:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'enregistrement de vos informations' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    try {
      // Essayer de se connecter à MongoDB
      const client = await clientPromise;
      const db = client.db('myohm');
      
      // Si la connexion réussit, récupérer depuis MongoDB
      const leads = await db.collection('leads').find({}).toArray();
      
      return NextResponse.json(
        { success: true, data: leads },
        { status: 200 }
      );
    } catch (dbError) {
      // En cas d'erreur de connexion à MongoDB, retourner les leads locaux
      console.log('MongoDB connection failed, returning local leads:', dbError);
      
      return NextResponse.json(
        { success: true, data: localLeads, mode: 'local' },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    console.error('Erreur lors de la récupération des leads:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des leads' },
      { status: 500 }
    );
  }
}
