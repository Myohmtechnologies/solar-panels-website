import { NextRequest, NextResponse } from 'next/server';
import { 
  getCommercialById, 
  updateCommercial, 
  deactivateCommercial 
} from '../../../../services/commercialService';
import { verifyAdminToken, verifyCommercialToken } from '../../../../lib/auth';

// GET /api/commercials/[id] - Récupérer un commercial spécifique
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
    
    // Seul l'admin ou le commercial lui-même peut voir ses informations
    if (!isAdmin && (!commercialData || commercialData.id !== id)) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 403 }
      );
    }

    // Récupérer le commercial
    const result = await getCommercialById(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        commercial: result.commercial 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la récupération du commercial:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération du commercial' },
      { status: 500 }
    );
  }
}

// PUT /api/commercials/[id] - Mettre à jour un commercial
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
    
    // Seul l'admin ou le commercial lui-même peut mettre à jour ses informations
    if (!isAdmin && (!commercialData || commercialData.id !== id)) {
      return NextResponse.json(
        { success: false, error: 'Non autorisé' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, email, password, phone, location, active } = body;

    // Préparer les données de mise à jour
    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = password;
    if (phone !== undefined) updateData.phone = phone;
    if (location) updateData.location = location;
    
    // Seul l'admin peut modifier le statut actif
    if (isAdmin && active !== undefined) {
      updateData.active = active;
    }

    // Mettre à jour le commercial
    const result = await updateCommercial(id, updateData);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Commercial mis à jour avec succès',
        commercial: result.commercial 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la mise à jour du commercial:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la mise à jour du commercial' },
      { status: 500 }
    );
  }
}

// DELETE /api/commercials/[id] - Désactiver un commercial
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    // Vérifier l'authentification (seul l'admin peut désactiver des commerciaux)
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

    // Désactiver le commercial (nous ne supprimons pas réellement)
    const result = await deactivateCommercial(id);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: result.message
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la désactivation du commercial:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la désactivation du commercial' },
      { status: 500 }
    );
  }
}
