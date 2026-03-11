import { NextRequest, NextResponse } from 'next/server';
import { verifyCommercialAuth } from '@/middleware/commercialAuth';

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification du commercial
    const authResult = await verifyCommercialAuth(request);
    
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: authResult.error },
        { status: authResult.status || 401 }
      );
    }
    
    // Retourner les informations du commercial
    return NextResponse.json({
      success: true,
      commercial: authResult.commercial
    });
  } catch (error: any) {
    console.error('Erreur lors de la récupération des informations du commercial:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
