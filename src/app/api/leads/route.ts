import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';

// Stockage temporaire pour les leads en mode développement
const localLeads: any[] = [];

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
