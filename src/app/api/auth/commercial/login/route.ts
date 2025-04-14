import { NextRequest, NextResponse } from 'next/server';
import { authenticateCommercial } from '../../../../../services/commercialService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Vérifier les champs requis
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    // Authentifier le commercial
    const result = await authenticateCommercial(email, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 401 }
      );
    }

    // Créer la réponse avec le token dans un cookie
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Authentification réussie',
        commercial: result.commercial 
      },
      { status: 200 }
    );

    // Ajouter le token dans un cookie sécurisé
    response.cookies.set({
      name: 'commercial-token',
      value: result.token!,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Erreur lors de la connexion:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la connexion' },
      { status: 500 }
    );
  }
}
