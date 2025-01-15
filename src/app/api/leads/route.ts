import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const body = await req.json();
    
    // Validation des données
    if (!body.name || !body.email || !body.phone || !body.city) {
      return NextResponse.json(
        { error: 'Les champs nom, email, téléphone et ville sont requis' },
        { status: 400 }
      );
    }

    // Création du lead
    const lead = await db
      .collection('leads')
      .insertOne({
        name: body.name,
        email: body.email,
        phone: body.phone,
        city: body.city,
        projectType: body.projectType || 'SOLAR_PANELS',
        source: body.source || 'WEBSITE',
        notes: body.notes || '',
        createdAt: new Date(),
        status: 'NEW',
        // Ajout des données du simulateur si présentes
        simulatorData: body.source === 'simulator' ? {
          production: body.production,
          totalAnnualSavings: body.totalAnnualSavings,
          systemSize: body.systemSize
        } : null
      });

    return NextResponse.json(
      { success: true, data: lead },
      { status: 201 }
    );

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
    const client = await clientPromise;
    const db = client.db('myohm');

    const leads = await db
      .collection('leads')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json({ leads });
  } catch (error: unknown) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
