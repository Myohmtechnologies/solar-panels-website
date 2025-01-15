import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { Lead } from '@/types';

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

    const result = await db.collection('leads').updateOne(
      { _id: new ObjectId(id) },
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
    const updatedLead = await db.collection('leads').findOne({
      _id: new ObjectId(id)
    });

    return NextResponse.json({ lead: updatedLead });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = await context.params;

  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const lead = await db.collection('leads').findOne({
      _id: new ObjectId(id),
    });

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    );
  }
}
