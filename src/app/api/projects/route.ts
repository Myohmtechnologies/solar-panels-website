import { NextResponse } from 'next/server';
import { ProjectService } from '@/services/projectService';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const project = await ProjectService.createProject(data);
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/projects:', error);
    return NextResponse.json(
      { error: 'Error creating project' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const projects = await ProjectService.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in GET /api/projects:', error);
    return NextResponse.json(
      { error: 'Error fetching projects' },
      { status: 500 }
    );
  }
}
