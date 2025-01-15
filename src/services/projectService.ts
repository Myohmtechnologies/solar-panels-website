import { Project } from '@/models/Project';
import { dbConnect } from '@/lib/mongodb';

interface ProjectData {
  title: string;
  description?: string;
  status?: 'draft' | 'active' | 'completed';
  clientName?: string;
  location?: string;
  installationDetails?: {
    panelType?: string;
    capacity?: number;
    orientation?: string;
  };
  // Ajoutez d'autres champs selon vos besoins
}

export class ProjectService {
  static async createProject(projectData: ProjectData) {
    try {
      await dbConnect();
      const project = new Project(projectData);
      await project.save();
      return project;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

  static async getProjects() {
    try {
      await dbConnect();
      return await Project.find().sort({ createdAt: -1 });
    } catch (error) {
      console.error('Error getting projects:', error);
      throw error;
    }
  }

  static async getProjectBySlug(slug: string) {
    try {
      await dbConnect();
      return await Project.findOne({ slug });
    } catch (error) {
      console.error('Error getting project by slug:', error);
      throw error;
    }
  }

  static async updateProject(id: string, projectData: Partial<ProjectData>) {
    try {
      await dbConnect();
      return await Project.findByIdAndUpdate(id, projectData, { new: true });
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  }

  static async deleteProject(id: string) {
    try {
      await dbConnect();
      return await Project.findByIdAndDelete(id);
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  }
}
