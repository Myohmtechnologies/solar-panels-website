import { NextRequest, NextResponse } from 'next/server';
import { RealisationService } from '@/services/realisationService';
import { Realisation } from '@/types';

// GET /api/realisations
export async function GET(request: NextRequest) {
  try {
    console.log('Début de la requête GET');
    const searchParams = request.nextUrl.searchParams;
    console.log('Paramètres de recherche:', searchParams);

    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const region = searchParams.get('region') || undefined;
    const city = searchParams.get('city') || undefined;
    const type = searchParams.get('type') || undefined;
    const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;

    console.log('Paramètres de pagination:', { page, limit });
    console.log('Filtres:', { region, city, type, year });

    // Si stats est demandé, retourner les stats
    if (searchParams.get('stats') === 'true') {
      console.log('Récupération des stats');
      const stats = await RealisationService.getStats();
      console.log('Stats récupérées:', stats);
      return NextResponse.json(stats);
    }

    // Si search est présent, retourner les résultats de recherche
    if (searchParams.has('search')) {
      console.log('Recherche de réalisations');
      const searchTerm = searchParams.get('search') || '';
      console.log('Terme de recherche:', searchTerm);
      const searchResults = await RealisationService.searchRealisations(searchTerm);
      console.log('Résultats de recherche:', searchResults);
      return NextResponse.json(searchResults);
    }

    console.log('Récupération de toutes les réalisations');
    const result = await RealisationService.getAllRealisations();
    console.log('Résultat:', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Erreur détaillée lors de la requête GET:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// POST /api/realisations
export async function POST(request: NextRequest) {
  try {
    console.log('Début de la création de réalisation');
    const realisationData: Omit<Realisation, '_id'> = await request.json();
    console.log('Données reçues:', realisationData);

    // Vérification des champs requis
    const requiredFields = ['title', 'description', 'mainImage', 'region', 'city', 'type', 'year', 'date'];
    const missingFields = requiredFields.filter(field => !realisationData[field as keyof typeof realisationData]);
    
    if (missingFields.length > 0) {
      console.error('Champs manquants:', missingFields);
      return NextResponse.json(
        { error: `Champs requis manquants: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    console.log('Création de la réalisation');
    const result = await RealisationService.createRealisation(realisationData);
    console.log('Réalisation créée avec succès:', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Erreur détaillée lors de la création:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    console.log('Début de la mise à jour de réalisation');
    const { id, ...updates } = await request.json();
    console.log('ID de la réalisation:', id);
    console.log('Mises à jour:', updates);

    if (!id) {
      console.error('ID manquant');
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    console.log('Mise à jour de la réalisation');
    const result = await RealisationService.updateRealisation(id, updates);
    console.log('Résultat de la mise à jour:', result);
    if (!result) {
      console.error('Réalisation non trouvée');
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    console.log('Mise à jour réussie');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur détaillée lors de la mise à jour:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    console.log('Début de la suppression de réalisation');
    const { id } = await request.json();
    console.log('ID de la réalisation:', id);

    if (!id) {
      console.error('ID manquant');
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    console.log('Suppression de la réalisation');
    const result = await RealisationService.deleteRealisation(id);
    console.log('Résultat de la suppression:', result);
    if (!result) {
      console.error('Réalisation non trouvée');
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    console.log('Suppression réussie');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur détaillée lors de la suppression:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
