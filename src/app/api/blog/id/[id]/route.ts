import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { BlogService } from '@/services/blogService';

interface Params {
  params: {
    id: string;
  };
}

// Fonction utilitaire pour vérifier si la requête provient du dashboard
const isDashboardRequest = (request: NextRequest) => {
  const referer = request.headers.get('referer');
  return referer?.includes('/dashboard');
};

// GET /api/blog/id/[id]
export async function GET(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    const blog = await BlogService.getBlogById(params.id);
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in getBlogById:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT /api/blog/id/[id]
export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const updatedBlog = await BlogService.updateBlog(params.id, body);
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error in updateBlog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/id/[id]
export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  if (!isDashboardRequest(request)) {
    return NextResponse.json(
      { error: 'Accès non autorisé' },
      { status: 403 }
    );
  }

  try {
    await BlogService.deleteBlog(params.id);
    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error in deleteBlog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
