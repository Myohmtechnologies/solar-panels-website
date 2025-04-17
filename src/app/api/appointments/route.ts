import { NextRequest, NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb';
import { verifyCommercialAuth } from '@/middleware/commercialAuth';

// GET /api/appointments
// Récupère les rendez-vous d'un commercial pour une période donnée
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let commercialId = searchParams.get('commercialId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const allCommercials = searchParams.get('allCommercials') === 'true';

    // Vérifier l'authentification si on ne spécifie pas de commercialId
    // ou si on demande tous les commerciaux (réservé aux admins)
    if (!commercialId || allCommercials) {
      const authResult = await verifyCommercialAuth(request);
      
      if (!authResult.success) {
        return NextResponse.json(
          { success: false, error: authResult.error },
          { status: authResult.status || 401 }
        );
      }
      
      // Vérifier que les informations du commercial sont disponibles
      if (!authResult.commercial) {
        return NextResponse.json(
          { success: false, error: 'Informations du commercial non disponibles' },
          { status: 500 }
        );
      }
      
      // Si on n'a pas spécifié de commercialId, utiliser celui du commercial connecté
      if (!commercialId) {
        commercialId = authResult.commercial._id;
      }
      
      // Si on demande tous les commerciaux, vérifier si l'utilisateur est admin
      if (allCommercials && authResult.commercial.role !== 'admin') {
        return NextResponse.json(
          { success: false, error: 'Accès non autorisé' },
          { status: 403 }
        );
      }
    }

    if (!startDate || !endDate) {
      return NextResponse.json({ success: false, error: 'Dates de début et de fin requises' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    
    // Requête pour trouver les leads avec des rendez-vous dans la plage de dates
    let query: any = {
      'nextAction.type': 'RDV_SCHEDULED',
      // Filtrer les rendez-vous qui commencent dans la plage de dates
      'nextAction.plannedDate': {
        $gte: new Date(startDate).toISOString(),
        $lte: new Date(endDate + 'T23:59:59').toISOString()
      }
    };
    
    // Si un commercialId est spécifié et qu'on ne demande pas tous les commerciaux,
    // filtrer par ce commercial
    if (commercialId && !allCommercials) {
      query.$or = [
        { 'nextAction.commercialId': commercialId },
        { 'nextAction.commercialId': '1' } // Pour les anciens rendez-vous qui utilisent l'ID '1'
      ];
    }
    
    console.log('Recherche de rendez-vous avec la requête:', JSON.stringify(query));
    
    // Récupérer les leads avec des rendez-vous
    const leads = await db.collection('leads').find(query).toArray();
    console.log(`Nombre de leads trouvés: ${leads.length}`);
    
    // Transformer les leads en rendez-vous
    const appointments = leads.map(lead => {
      // Extraire les informations du client
      let clientName = '';
      if (lead.firstName && lead.lastName) {
        clientName = `${lead.firstName} ${lead.lastName}`;
      } else if (lead.fullName) {
        clientName = lead.fullName;
      } else if (lead.name) {
        clientName = lead.name;
      } else {
        clientName = 'Client';
      }
      
      // Calculer l'heure de fin à partir de la durée si endDate n'est pas présent
      let endTime;
      if (lead.nextAction.endDate) {
        endTime = lead.nextAction.endDate;
      } else if (lead.nextAction.duration) {
        // Durée en minutes, convertir en millisecondes
        const durationMs = lead.nextAction.duration * 60 * 1000;
        const startTime = new Date(lead.nextAction.plannedDate);
        endTime = new Date(startTime.getTime() + durationMs).toISOString();
      } else {
        // Par défaut, ajouter 1 heure
        const startTime = new Date(lead.nextAction.plannedDate);
        endTime = new Date(startTime.getTime() + 60 * 60 * 1000).toISOString();
      }
      
      return {
        id: lead._id.toString(),
        title: clientName,
        start: lead.nextAction.plannedDate,
        end: endTime,
        location: lead.nextAction.location || '',
        description: lead.nextAction.description || '',
        leadId: lead._id.toString(),
        status: lead.status || 'SCHEDULED',
        type: lead.nextAction.type,
        duration: lead.nextAction.duration || 3,
        client: {
          name: clientName,
          phone: lead.phone || '',
          email: lead.email || ''
        },
        commercial: {
          id: lead.nextAction.commercialId,
          name: lead.nextAction.commercialName
        }
      };
    });
    
    console.log(`Nombre de rendez-vous trouvés: ${appointments.length}`);
    if (appointments.length > 0) {
      console.log('Premier rendez-vous:', JSON.stringify(appointments[0]));
    }
    
    return NextResponse.json({ 
      success: true, 
      appointments 
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erreur lors de la récupération des rendez-vous' 
    }, { status: 500 });
  }
}

// POST /api/appointments
// Crée un nouveau rendez-vous
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadId, commercialId, date, endDate, location, description, duration } = body;

    if (!leadId || !commercialId || !date) {
      return NextResponse.json({ 
        success: false, 
        error: 'ID du lead, ID du commercial et date sont requis' 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    
    // Récupérer les informations du commercial
    const commercial = await db.collection('commercials').findOne({ _id: commercialId });
    
    if (!commercial) {
      return NextResponse.json({ success: false, error: 'Commercial non trouvé' }, { status: 404 });
    }

    // Mettre à jour le lead avec les informations du rendez-vous
    const result = await db.collection('leads').updateOne(
      { _id: leadId },
      { 
        $set: {
          nextAction: {
            plannedDate: new Date(date).toISOString(),
            endDate: endDate || new Date(new Date(date).getTime() + (duration || 2) * 60 * 60 * 1000).toISOString(),
            commercialId,
            commercialName: commercial.name,
            location,
            description,
            duration: duration || 2, // Durée par défaut: 2 heures
            type: 'RDV_SCHEDULED',
            assignedTo: {
              commercialId,
              name: commercial.name,
              email: commercial.email,
              phone: commercial.phone || ''
            }
          },
          updatedAt: new Date().toISOString()
        } 
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ success: false, error: 'Lead non trouvé ou non modifié' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Rendez-vous créé avec succès' 
    });
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erreur lors de la création du rendez-vous' 
    }, { status: 500 });
  }
}