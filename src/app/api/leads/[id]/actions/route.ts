import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { LeadAction } from '@/types';
import { ObjectId } from 'mongodb';

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

    // Debug: Afficher la date reçue
    console.log('Date reçue du client:', nextAction?.plannedDate);
    console.log('Type de la date reçue:', typeof nextAction?.plannedDate);
    
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

    // Créer une date en préservant l'heure exacte
    function createExactDate(dateString: string): Date {
      const date = new Date(dateString);
      console.log('Date après création:', date.toISOString());
      console.log('Heure locale:', date.toLocaleTimeString('fr-FR'));
      console.log('Offset en minutes:', date.getTimezoneOffset());
      return date;
    }

    // Créer l'action
    const now = new Date();
    const actionData: Omit<LeadAction, '_id'> = {
      leadId: params.id,
      type: type as LeadAction['type'],
      status: 'PLANNED',
      date: now.toISOString(),
      notes,
      nextAction: nextAction ? {
        type: nextAction.type,
        plannedDate: createExactDate(nextAction.plannedDate).toISOString(),
        location: nextAction.location,
        description: nextAction.description
      } : undefined
    };

    console.log('Date stockée dans MongoDB:', actionData.nextAction?.plannedDate);
    
    const result = await db.collection('lead_actions').insertOne(actionData);
    
    // Créer l'action complète avec l'ID généré
    const action = { 
      ...actionData, 
      _id: result.insertedId.toString()
    };
    
    // Mettre à jour le lead
    await db.collection('leads').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          status,
          lastAction: action,
          nextAction: nextAction ? {
            type: nextAction.type,
            plannedDate: createExactDate(nextAction.plannedDate).toISOString(),
            location: nextAction.location,
            description: nextAction.description
          } : null,
          updatedAt: now.toISOString()
        }
      }
    );

    // Formater pour l'affichage
    const formattedAction = {
      ...action,
      nextAction: action.nextAction ? {
        ...action.nextAction,
        plannedDate: new Date(action.nextAction.plannedDate)
          .toLocaleString('fr-FR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Europe/Paris'
          })
      } : null
    };

    console.log('Date finale affichée:', formattedAction.nextAction?.plannedDate);
    
    return NextResponse.json({ 
      action: formattedAction,
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
      .find({ leadId: params.id })
      .sort({ date: -1 })
      .toArray();

    const formattedActions = actions.map(action => {
      console.log('Date lue de MongoDB:', action.nextAction?.plannedDate);
      
      return {
        ...action,
        nextAction: action.nextAction ? {
          ...action.nextAction,
          plannedDate: new Date(action.nextAction.plannedDate)
            .toLocaleString('fr-FR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: 'Europe/Paris'
            })
        } : null
      };
    });
    
    return NextResponse.json({ actions: formattedActions });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve lead actions', actions: [] }, 
      { status: 500 }
    );
  }
}
