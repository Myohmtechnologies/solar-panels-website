import { dbConnect } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export interface BlogSection {
  title: string;
  description: string;
  imageUrl?: string;
  order: number;
}

export interface BlogPost {
  _id?: string;
  title: string;
  description: string;
  mainImage: string;
  sections: BlogSection[];
  tags?: string[];
  category?: string;
  status?: 'draft' | 'published' | 'archived';
  slug?: string;
  author?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface BlogQuery {
  search?: string;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'published' | 'archived';
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export class BlogService {
  static async getAllBlogs(query: BlogQuery = {}) {
    try {
      await dbConnect();
      
      const {
        search,
        category,
        tags,
        status,
        page = 1,
        limit = 50,
        sortBy = 'createdAt',
        sortOrder = 'desc'
      } = query;

      const skip = (page - 1) * limit;
      
      // Construire la requête
      const filter: any = {};
      
      // Ajouter le filtre de status seulement s'il est spécifié
      if (status) {
        filter.status = status;
      }
      
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      if (category) {
        filter.category = category;
      }

      if (tags && tags.length > 0) {
        filter.tags = { $in: tags };
      }

      console.log('MongoDB Filter:', filter); // Pour le débogage

      // Exécuter la requête
      const blogs = await Blog
        .find(filter)
        .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
        .skip(skip)
        .limit(limit)
        .select('title description mainImage category tags status slug author createdAt')
        .lean();

      const total = await Blog.countDocuments(filter);

      console.log(`Found ${blogs.length} blogs out of ${total} total`); // Pour le débogage

      return {
        blogs,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit)
        }
      };
    } catch (error) {
      console.error('Error in getAllBlogs:', error);
      throw error;
    }
  }

  static async createBlog(blogData: BlogPost) {
    try {
      await dbConnect();

      // Validation des données requises
      if (!blogData.title) {
        throw new Error('Le titre est requis');
      }
      if (!blogData.description) {
        throw new Error('La description est requise');
      }
      if (!blogData.mainImage) {
        throw new Error('L\'image principale est requise');
      }

      // Création du slug unique
      const slug = await this.generateUniqueSlug(blogData.title);

      // Création du blog avec les données validées
      const blog = await Blog.create({
        ...blogData,
        slug,
        status: blogData.status || 'draft',
        createdAt: new Date()
      });

      return blog;
    } catch (error) {
      console.error('Error in createBlog:', error);
      if (error instanceof Error) {
        throw new Error(`Erreur lors de la création du blog: ${error.message}`);
      }
      throw new Error('Erreur inconnue lors de la création du blog');
    }
  }

  static async getBlogBySlug(slug: string) {
    try {
      await dbConnect();

      const blog = await Blog.findOne({ slug });

      return blog ? blog.toObject() : null;
    } catch (error) {
      console.error('Erreur lors de la récupération du blog:', error);
      throw error;
    }
  }

  static async getBlogById(id: string) {
    try {
      await dbConnect();
      return await Blog.findById(id).lean();
    } catch (error) {
      console.error('BlogService: Erreur lors de la récupération du blog:', error);
      throw error;
    }
  }

  static async updateBlog(id: string, blogData: Partial<BlogPost>) {
    try {
      await dbConnect();
      
      // Si le titre est modifié, générer un nouveau slug
      if (blogData.title) {
        blogData.slug = await this.generateUniqueSlug(blogData.title);
      }

      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        { 
          ...blogData,
          updatedAt: new Date()
        },
        { new: true }
      ).lean();

      if (!updatedBlog) {
        throw new Error('Blog non trouvé');
      }

      return updatedBlog;
    } catch (error) {
      console.error('Error in updateBlog:', error);
      throw error;
    }
  }

  static async deleteBlog(id: string) {
    try {
      await dbConnect();
      const deletedBlog = await Blog.findByIdAndDelete(id).lean();
      
      if (!deletedBlog) {
        throw new Error('Blog non trouvé');
      }

      return deletedBlog;
    } catch (error) {
      console.error('Error in deleteBlog:', error);
      throw error;
    }
  }

  static async updateBlogBySlug(slug: string, updateData: Partial<BlogPost>) {
    try {
      await dbConnect();

      // Trouver le blog par son slug
      const blog = await Blog.findOne({ slug });

      if (!blog) {
        return null; // Blog non trouvé
      }

      // Mettre à jour les champs
      Object.assign(blog, updateData);
      blog.updatedAt = new Date();

      // Sauvegarder et retourner le blog mis à jour
      await blog.save();
      return blog.toObject();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du blog:', error);
      throw error;
    }
  }

  static async deleteBlogBySlug(slug: string) {
    try {
      await dbConnect();

      // Supprimer le blog et retourner le blog supprimé
      const deletedBlog = await Blog.findOneAndDelete({ slug });

      return deletedBlog;
    } catch (error) {
      console.error('Erreur lors de la suppression du blog:', error);
      throw error;
    }
  }

  private static async generateUniqueSlug(title: string): Promise<string> {
    const baseSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    let slug = baseSlug;
    let counter = 1;
    
    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    return slug;
  }

  static async updateBlogStatus(slug: string, status: 'draft' | 'published' | 'archived') {
    try {
      await dbConnect();
      const blog = await Blog.findOneAndUpdate(
        { slug },
        { status },
        { new: true }
      ).lean();

      if (!blog) {
        throw new Error('Blog non trouvé');
      }

      return blog;
    } catch (error) {
      console.error('BlogService: Erreur lors de la mise à jour du statut:', error);
      throw error;
    }
  }

  static async searchBlogs(searchTerm: string) {
    try {
      await dbConnect();
      return await Blog.find(
        { $text: { $search: searchTerm } },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
      .lean();
    } catch (error) {
      console.error('BlogService: Erreur lors de la recherche:', error);
      throw error;
    }
  }

  static async getPopularTags(limit = 10) {
    try {
      await dbConnect();
      return await Blog.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: limit }
      ]);
    } catch (error) {
      console.error('BlogService: Erreur lors de la récupération des tags:', error);
      throw error;
    }
  }
}
