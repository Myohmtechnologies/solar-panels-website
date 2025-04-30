import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';

// GET /api/blog/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID de blog manquant' },
        { status: 400 }
      );
    }

    const blog = await BlogService.getBlogById(id);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in getBlogById:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération du blog' },
      { status: 500 }
    );
  }
}

// Autres méthodes (PUT, DELETE) déjà implémentées dans le dossier id/route.ts
