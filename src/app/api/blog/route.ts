import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';

// Fonction utilitaire pour vérifier si la requête provient du dashboard
const isDashboardRequest = (request: Request) => {
  const referer = request.headers.get('referer');
  return referer?.includes('/dashboard');
};

// GET /api/blog
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    const query = {
      search: searchParams.get('search') || undefined,
      category: searchParams.get('category') || undefined,
      tags: searchParams.get('tags')?.split(',') || undefined,
      status: (searchParams.get('status') as 'draft' | 'published' | 'archived') || 'published',
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 10,
      sortBy: searchParams.get('sortBy') || 'createdAt',
      sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc'
    };

    console.log('GET /api/blog - Query parameters:', query);

    const blogs = await BlogService.getAllBlogs(query);
    console.log('GET /api/blog - Found blogs:', blogs.blogs.length);
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blog
export async function POST(request: Request) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();

    // Définir le statut par défaut comme "published"
    if (!body.status) {
      body.status = 'published';
    }

    // Validation basique des données requises
    if (!body.title?.trim()) {
      return NextResponse.json(
        { error: 'Le titre est requis' },
        { status: 400 }
      );
    }

    if (!body.description?.trim()) {
      return NextResponse.json(
        { error: 'La description est requise' },
        { status: 400 }
      );
    }

    if (!body.mainImage) {
      return NextResponse.json(
        { error: 'L\'image principale est requise' },
        { status: 400 }
      );
    }

    const blog = await BlogService.createBlog(body);
    return NextResponse.json({ 
      message: 'Article créé avec succès',
      blog 
    }, { 
      status: 201 
    });
  } catch (error) {
    console.error('Error in createBlog:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création de l\'article' },
      { status: 500 }
    );
  }
}
