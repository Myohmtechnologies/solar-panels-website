import { NextRequest, NextResponse } from 'next/server';
import { createCommercial } from '../../../../../services/commercialService';
import { verifyAdminToken } from '../../../../../lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la requête provient d'un administrateur
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
    const { name, email, password, phone, location } = body;

    // Vérifier les champs requis
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'Nom, email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Créer le commercial
    const result = await createCommercial({
      name,
      email,
      password,
      phone,
      location,
      active: true
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Commercial créé avec succès',
        commercial: result.commercial 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Erreur lors de la création du commercial:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la création du commercial' },
      { status: 500 }
    );
  }
}
