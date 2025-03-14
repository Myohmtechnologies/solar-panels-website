import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { Lead } from '@/types';

// Fonction utilitaire pour vérifier si une chaîne est un ObjectId valide
function isValidObjectId(id: string): boolean {
  try {
    return ObjectId.isValid(id);
  } catch (error) {
    return false;
  }
}

// Fonction pour trouver un lead par son ID (gère à la fois les ObjectId et les chaînes)
async function findLeadById(db: any, id: string) {
  try {
    // Essayer d'abord avec ObjectId
    if (isValidObjectId(id)) {
      const lead = await db.collection('leads').findOne({ _id: new ObjectId(id) });
      if (lead) return lead;
    }
    
    // Si pas trouvé ou ID invalide, essayer avec l'ID comme chaîne
    const lead = await db.collection('leads').findOne({ _id: id });
    return lead;
  } catch (error) {
    console.error('Error finding lead:', error);
    return null;
  }
}

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;

  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    const data = await request.json();
    const { status, notes, nextAction } = data;

    // Validation des données
    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      );
    }

    // Si le statut passe à COMPLETED, on ajoute automatiquement une action de suivi annuel
    let updatedNextAction = nextAction;
    if (status === 'COMPLETED') {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      
      updatedNextAction = {
        type: 'ANNUAL_FOLLOWUP',
        plannedDate: oneYearFromNow.toISOString(),
        description: 'Suivi annuel de l\'installation',
      };
    }

    // Déterminer le filtre approprié selon le format de l'ID
    let filter = {};
    if (isValidObjectId(id)) {
      filter = { _id: new ObjectId(id) };
    } else {
      filter = { _id: id };
    }

    const result = await db.collection('leads').updateOne(
      filter,
      {
        $set: {
          status,
          notes,
          nextAction: updatedNextAction,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Récupérer le lead mis à jour
    const updatedLead = await findLeadById(db, id);

    return NextResponse.json({ lead: updatedLead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  console.log('GET lead with ID:', id);

  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const lead = await findLeadById(db, id);

    if (!lead) {
      console.error(`Lead not found with ID: ${id}`);
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
