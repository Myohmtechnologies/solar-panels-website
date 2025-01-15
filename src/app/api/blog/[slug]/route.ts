import { NextRequest, NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';
import { isDashboardRequest } from '@/lib/auth';

// Récupérer un blog spécifique
export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const blog = await BlogService.getBlogBySlug(slug);

    if (!blog) {
      return NextResponse.json({ message: 'Blog non trouvé' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Erreur lors de la récupération du blog:', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}

// Mettre à jour un blog
export async function PUT(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    // Vérifier si c'est une requête du dashboard
    if (!isDashboardRequest(request)) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 403 });
    }

    const { slug } = params;
    const updateData = await request.json();

    const updatedBlog = await BlogService.updateBlogBySlug(slug, updateData);

    if (!updatedBlog) {
      return NextResponse.json({ message: 'Blog non trouvé' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du blog:', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}

// Supprimer un blog
export async function DELETE(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    // Vérifier si c'est une requête du dashboard
    if (!isDashboardRequest(request)) {
      return NextResponse.json({ message: 'Non autorisé' }, { status: 403 });
    }

    const { slug } = params;
    const deletedBlog = await BlogService.deleteBlogBySlug(slug);

    if (!deletedBlog) {
      return NextResponse.json({ message: 'Blog non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du blog:', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
