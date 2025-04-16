import { NextRequest, NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET /api/tasks
// Récupère les tâches d'un commercial pour une période donnée
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const commercialId = searchParams.get('commercialId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!commercialId) {
      return NextResponse.json({ success: false, error: 'ID du commercial requis' }, { status: 400 });
    }

    // Les dates sont maintenant optionnelles

    const client = await clientPromise;
    const db = client.db();
    
    // Requête pour trouver les tâches du commercial
    let query: any = {
      commercialId
    };
    
    // Ajouter les filtres de date si fournis
    if (startDate && endDate) {
      query.$or = [
        // Tâches qui commencent dans la plage de dates
        {
          start: {
            $gte: new Date(startDate).toISOString(),
            $lte: new Date(endDate + 'T23:59:59').toISOString()
          }
        },
        // Tâches qui se terminent dans la plage de dates
        {
          end: {
            $gte: new Date(startDate).toISOString(),
            $lte: new Date(endDate + 'T23:59:59').toISOString()
          }
        },
        // Tâches qui englobent complètement la plage de dates
        {
          start: { $lte: new Date(startDate).toISOString() },
          end: { $gte: new Date(endDate + 'T23:59:59').toISOString() }
        }
      ];
    }
    
    console.log('Recherche de tâches avec la requête:', JSON.stringify(query));
    
    // Récupérer les tâches
    const tasks = await db.collection('tasks').find(query).toArray();
    console.log(`Nombre de tâches trouvées: ${tasks.length}`);
    
    // Transformer les _id en chaînes
    const formattedTasks = tasks.map(task => ({
      ...task,
      _id: task._id.toString()
    }));
    
    return NextResponse.json({ success: true, tasks: formattedTasks });
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST /api/tasks
// Crée une nouvelle tâche
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Vérifier les champs obligatoires
    const { title, start, end, commercialId, commercialName, taskType } = body;
    
    if (!title || !start || !end || !commercialId || !taskType) {
      return NextResponse.json({ 
        success: false, 
        error: 'Champs manquants: titre, début, fin, ID du commercial et type de tâche sont requis' 
      }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db();
    
    // Créer la tâche
    const task = {
      title,
      description: body.description || '',
      start,
      end,
      commercialId,
      commercialName,
      taskType,
      status: body.status || 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const result = await db.collection('tasks').insertOne(task);
    
    return NextResponse.json({ 
      success: true, 
      task: { 
        ...task, 
        _id: result.insertedId.toString() 
      } 
    });
  } catch (error) {
    console.error('Erreur lors de la création de la tâche:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
