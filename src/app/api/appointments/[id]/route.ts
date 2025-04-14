import { NextRequest, NextResponse } from 'next/server';
import { 
  getAppointmentById, 
  updateAppointment, 
  cancelAppointment,
  assignAppointmentToCommercial
} from '../../../../services/appointmentService';
import { verifyAdminToken, verifyCommercialToken } from '../../../../lib/auth';

// GET /api/appointments/[id] - Récupérer un rendez-vous spécifique
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const isAdmin = await verifyAdminToken(token);
    const commercialData = await verifyCommercialToken(token);
    
    if (!isAdmin && !commercialData) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 403 }
      );
    }

    // Récupérer le rendez-vous
    const result = await getAppointmentById(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    // Vérifier que le commercial a accès à ce rendez-vous
    if (commercialData && !isAdmin) {
      const appointment = result.appointment;
      if (appointment.commercial && appointment.commercial._id.toString() !== commercialData.id) {
        return NextResponse.json(
          { success: false, error: 'Non autorisé à accéder à ce rendez-vous' },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        appointment: result.appointment 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la récupération du rendez-vous:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération du rendez-vous' },
      { status: 500 }
    );
  }
}

// PUT /api/appointments/[id] - Mettre à jour un rendez-vous
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const isAdmin = await verifyAdminToken(token);
    const commercialData = await verifyCommercialToken(token);
    
    if (!isAdmin && !commercialData) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 403 }
      );
    }

    // Récupérer le rendez-vous actuel pour vérification
    const currentAppointment = await getAppointmentById(id);
    if (!currentAppointment.success) {
      return NextResponse.json(
        { success: false, error: currentAppointment.error },
        { status: 404 }
      );
    }

    // Vérifier que le commercial a accès à ce rendez-vous
    if (commercialData && !isAdmin) {
      const appointment = currentAppointment.appointment;
      if (appointment.commercial && appointment.commercial._id.toString() !== commercialData.id) {
        return NextResponse.json(
          { success: false, error: 'Non autorisé à modifier ce rendez-vous' },
          { status: 403 }
        );
      }
    }

    const body = await request.json();
    const { date, duration, status, notes, location } = body;

    // Les commerciaux ne peuvent mettre à jour que certains champs
    let updateData: any = {};
    if (isAdmin) {
      // L'admin peut tout mettre à jour
      if (date) updateData.date = new Date(date);
      if (duration !== undefined) updateData.duration = duration;
      if (status) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;
      if (location) updateData.location = location;
    } else {
      // Les commerciaux peuvent uniquement mettre à jour le statut et les notes
      if (status) updateData.status = status;
      if (notes !== undefined) updateData.notes = notes;
    }

    // Mettre à jour le rendez-vous
    const result = await updateAppointment(id, updateData);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Rendez-vous mis à jour avec succès',
        appointment: result.appointment 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la mise à jour du rendez-vous:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour du rendez-vous' },
      { status: 500 }
    );
  }
}

// DELETE /api/appointments/[id] - Annuler un rendez-vous
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Vérifier l'authentification (seul l'admin peut annuler des rendez-vous)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const isAdmin = await verifyAdminToken(token);
    
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Accès réservé aux administrateurs' },
        { status: 403 }
      );
    }

    // Extraire la raison de l'annulation si fournie
    const { searchParams } = new URL(request.url);
    const reason = searchParams.get('reason') || undefined;

    // Annuler le rendez-vous
    const result = await cancelAppointment(id, reason);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Rendez-vous annulé avec succès',
        appointment: result.appointment 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de l\'annulation du rendez-vous:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'annulation du rendez-vous' },
      { status: 500 }
    );
  }
}

// PATCH /api/appointments/[id]/assign - Assigner un rendez-vous à un commercial
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Vérifier l'authentification (seul l'admin peut assigner des rendez-vous)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const isAdmin = await verifyAdminToken(token);
    
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Accès réservé aux administrateurs' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { commercialId } = body;

    if (!commercialId) {
      return NextResponse.json(
        { success: false, error: 'ID du commercial requis' },
        { status: 400 }
      );
    }

    // Assigner le rendez-vous
    const result = await assignAppointmentToCommercial(id, commercialId);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Rendez-vous assigné avec succès',
        appointment: result.appointment 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de l\'assignation du rendez-vous:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'assignation du rendez-vous' },
      { status: 500 }
    );
  }
}
