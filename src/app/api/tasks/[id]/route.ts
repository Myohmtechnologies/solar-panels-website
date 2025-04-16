import { NextRequest, NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET /api/tasks/[id]
// Récupère les détails d'une tâche spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'ID de tâche invalide' }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db();
    
    const task = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
    
    if (!task) {
      return NextResponse.json({ success: false, error: 'Tâche non trouvée' }, { status: 404 });
    }
    
    // Transformer l'_id en chaîne
    const formattedTask = {
      ...task,
      _id: task._id.toString()
    };
    
    return NextResponse.json({ success: true, task: formattedTask });
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de la tâche:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}

// PATCH /api/tasks/[id]
// Met à jour une tâche existante
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'ID de tâche invalide' }, { status: 400 });
    }
    
    const body = await request.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    // Vérifier si la tâche existe
    const existingTask = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
    
    if (!existingTask) {
      return NextResponse.json({ success: false, error: 'Tâche non trouvée' }, { status: 404 });
    }
    
    // Préparer les données à mettre à jour
    const updateData: any = {
      updatedAt: new Date().toISOString()
    };
    
    // Ajouter les champs à mettre à jour
    const allowedFields = ['title', 'description', 'start', 'end', 'taskType', 'status'];
    allowedFields.forEach(field => {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    });
    
    // Mettre à jour la tâche
    await db.collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    // Récupérer la tâche mise à jour
    const updatedTask = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
    
    // Transformer l'_id en chaîne
    const formattedTask = {
      ...updatedTask,
      _id: updatedTask?._id.toString()
    };
    
    return NextResponse.json({ success: true, task: formattedTask });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la tâche:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE /api/tasks/[id]
// Supprime une tâche
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'ID de tâche invalide' }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db();
    
    // Vérifier si la tâche existe
    const existingTask = await db.collection('tasks').findOne({ _id: new ObjectId(id) });
    
    if (!existingTask) {
      return NextResponse.json({ success: false, error: 'Tâche non trouvée' }, { status: 404 });
    }
    
    // Supprimer la tâche
    await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
