import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { LeadAction } from '@/types';
import { ObjectId } from 'mongodb';

// GET /api/leads/[id]/actions
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    const collection = db.collection('lead_actions');

    const actions = await collection
      .find({ leadId: new ObjectId(params.id) })
      .sort({ date: -1 })
      .toArray();
    
    return NextResponse.json(actions);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve lead actions' }, 
      { status: 500 }
    );
  }
}

// POST /api/leads/[id]/actions
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    
    const body = await request.json();
    const { type, status, notes, nextAction } = body;
    
    // Vérifier si le lead existe
    const lead = await db
      .collection('leads')
      .findOne({ _id: new ObjectId(params.id) });
    
    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Créer l'action
    const actionData: Omit<LeadAction, '_id'> = {
      leadId: params.id,
      type,
      status,
      date: new Date().toISOString(),
      notes,
      nextAction
    };
    
    const result = await db.collection('lead_actions').insertOne(actionData);
    
    // Créer l'action complète avec l'ID généré
    const action = { ...actionData, _id: result.insertedId.toString() };
    
    // Mettre à jour le lead avec le nouveau statut et la prochaine action
    await db.collection('leads').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          status,
          lastAction: action,
          nextAction: nextAction || null
        }
      }
    );
    
    return NextResponse.json({ 
      action,
      message: 'Action created successfully'
    });
    
  } catch (error) {
    console.error('Error creating action:', error);
    return NextResponse.json(
      { error: 'Failed to create action' },
      { status: 500 }
    );
  }
}
