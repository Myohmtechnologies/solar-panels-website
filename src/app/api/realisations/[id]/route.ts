import { NextResponse } from 'next/server';
import { RealisationService } from '@/services/realisationService';
import type { Realisation } from '@/types';

// GET /api/realisations/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const realisation = await RealisationService.getRealisationById(params.id);

    if (!realisation) {
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(realisation);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error fetching realisation' },
      { status: 500 }
    );
  }
}

// PUT /api/realisations/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updates: Partial<Realisation> = await request.json();
    const success = await RealisationService.updateRealisation(params.id, updates);

    if (!success) {
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Realisation updated successfully' 
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error updating realisation' },
      { status: 500 }
    );
  }
}

// DELETE /api/realisations/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const success = await RealisationService.deleteRealisation(params.id);

    if (!success) {
      return NextResponse.json(
        { error: 'Realisation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Realisation deleted successfully' 
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Error deleting realisation' },
      { status: 500 }
    );
  }
}
