import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { BlogService } from '@/services/blogService';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    // Récupérer les paramètres de recherche et de filtrage
    const { searchParams } = new URL(request.url);
    const query = {
      search: searchParams.get('search') || undefined,
      category: searchParams.get('category') || undefined,
      tags: searchParams.get('tags')?.split(',') || undefined,
      status: (searchParams.get('status') || undefined) as 'draft' | 'published' | 'archived',
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '50'), 
      sortBy: searchParams.get('sortBy') || 'createdAt',
      sortOrder: (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc'
    };

    console.log('Query params:', query);
    const result = await BlogService.getAllBlogs(query);
    console.log('API Response:', JSON.stringify(result, null, 2));
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la récupération des blogs',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const blog = await BlogService.createBlog(data);
    
    return NextResponse.json({
      message: "Blog créé avec succès",
      blog
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la création du blog',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Le paramètre slug est requis' },
        { status: 400 }
      );
    }

    const data = await request.json();
    const blog = await BlogService.updateBlog(slug, data);
    
    return NextResponse.json({
      message: "Blog mis à jour avec succès",
      blog
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la mise à jour du blog',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Le paramètre slug est requis' },
        { status: 400 }
      );
    }

    const success = await BlogService.deleteBlog(slug);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Blog non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      message: "Blog supprimé avec succès"
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la suppression du blog',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

// Route pour la recherche de blogs
export async function PATCH(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const action = searchParams.get('action');
    
    if (!slug || !action) {
      return NextResponse.json(
        { error: 'Les paramètres slug et action sont requis' },
        { status: 400 }
      );
    }

    let result;
    
    switch (action) {
      case 'status': {
        const data = await request.json();
        const { status } = data;
        
        if (!status || !['draft', 'published', 'archived'].includes(status)) {
          return NextResponse.json(
            { error: 'Statut invalide' },
            { status: 400 }
          );
        }
        
        result = await BlogService.updateBlogStatus(slug, status);
        break;
      }
        
      default:
        return NextResponse.json(
          { error: 'Action non supportée' },
          { status: 400 }
        );
    }
    
    return NextResponse.json({
      message: "Action effectuée avec succès",
      result
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'exécution de l\'action',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}