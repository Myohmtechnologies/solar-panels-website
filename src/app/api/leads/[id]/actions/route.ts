import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { LeadAction } from '@/types';
import { ObjectId } from 'mongodb';

// Fonction utilitaire pour vérifier si une chaîne est un ObjectId valide
function isValidObjectId(id: string): boolean {
  try {
    return ObjectId.isValid(id);
  } catch (error) {
    return false;
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
    const { type, status, notes, nextAction, devisPrice, devisNumber } = body;

    // Debug: Afficher la date reçue
    console.log('Date reçue du client:', nextAction?.plannedDate);
    console.log('Type de la date reçue:', typeof nextAction?.plannedDate);
    
    // Vérifier si le lead existe
    let leadFilter = {};
    if (isValidObjectId(params.id)) {
      leadFilter = { _id: new ObjectId(params.id) };
    } else {
      leadFilter = { _id: params.id };
    }
    
    const lead = await db.collection('leads').findOne(leadFilter);
    
    if (!lead) {
      console.error(`Lead not found with ID: ${params.id}`);
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Créer une date en préservant l'heure exacte
    function createExactDate(dateString?: string): Date {
      if (!dateString) return new Date();
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? new Date() : date;
    }

    // Créer l'action
    const now = new Date();
    const actionDate = body.date ? new Date(body.date) : now;
    const finalDate = isNaN(actionDate.getTime()) ? now : actionDate;

    const actionData: Omit<LeadAction, '_id'> = {
      leadId: params.id,
      type: (type as LeadAction['type']) || 'STATUS_CHANGE',
      status: 'PLANNED',
      date: finalDate.toISOString(),
      notes: notes || '',
      ...(devisPrice !== undefined && devisPrice !== '' ? { devisPrice } : {}),
      ...(devisNumber !== undefined && devisNumber !== '' ? { devisNumber } : {}),
      nextAction: nextAction && nextAction.plannedDate ? {
        type: nextAction.type || status,
        plannedDate: createExactDate(nextAction.plannedDate).toISOString(),
        location: nextAction.location,
        description: nextAction.description || notes || '',
        commercialId: nextAction.commercialId,
        commercialName: nextAction.commercialName,
        ...(nextAction.endDate && { endDate: nextAction.endDate }),
        ...(nextAction.duration && { duration: nextAction.duration }),
        ...(nextAction.assignedTo && { assignedTo: nextAction.assignedTo })
      } : {
        type: status,
        plannedDate: finalDate.toISOString(),
        description: notes || `Statut mis à jour : ${status}`
      }
    };

    console.log('Date stockée dans MongoDB:', actionData.nextAction?.plannedDate);
    
    const result = await db.collection('lead_actions').insertOne(actionData);
    
    // Créer l'action complète avec l'ID généré
    const action = { 
      ...actionData, 
      _id: result.insertedId.toString()
    };
    
    // Mettre à jour le lead dans MongoDB
    await db.collection('leads').updateOne(
      leadFilter,
      {
        $set: {
          status,
          lastAction: action,
          ...(notes ? { notes } : {}),
          ...(devisPrice !== undefined && devisPrice !== '' ? { devisPrice } : {}),
          ...(devisNumber !== undefined && devisNumber !== '' ? { devisNumber } : {}),
          nextAction: actionData.nextAction,
          updatedAt: now.toISOString()
        }
      }
    );

    // Formater pour l'affichage
    const formattedAction = {
      ...action,
      nextAction: action.nextAction ? {
        ...action.nextAction,
        plannedDate: action.nextAction.plannedDate
          ? new Date(action.nextAction.plannedDate).toLocaleString('fr-FR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: 'Europe/Paris'
            })
          : ''
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
      { error: 'Failed to create action', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

// GET /api/leads/[id]/actions
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log('GET actions for lead ID:', params.id);
  
  try {
    const client = await clientPromise;
    const db = client.db('myohm');
    const collection = db.collection('lead_actions');

    // Vérifier d'abord si le lead existe
    let leadFilter = {};
    if (isValidObjectId(params.id)) {
      leadFilter = { _id: new ObjectId(params.id) };
    } else {
      leadFilter = { _id: params.id };
    }
    
    const lead = await db.collection('leads').findOne(leadFilter);
    
    if (!lead) {
      console.error(`Lead not found with ID: ${params.id}`);
      return NextResponse.json(
        { error: 'Lead not found', actions: [] },
        { status: 404 }
      );
    }

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
      { error: 'Failed to retrieve lead actions', details: error instanceof Error ? error.message : String(error), actions: [] }, 
      { status: 500 }
    );
  }
}
