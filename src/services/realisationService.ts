import { MongoClient, ObjectId } from 'mongodb';
import { clientPromise } from '@/lib/mongodb';
import { Realisation } from '@/types';

export class RealisationService {
  private static async getCollection() {
    const client = await clientPromise as MongoClient;
    const db = client.db('myohm');
    return db.collection('realisations');
  }

  static async getAllRealisations(page = 1, limit = 10, filter?: {
    city?: string;
    type?: string;
    year?: number;
  }): Promise<{ realisations: Realisation[], pagination: { total: number, page: number, pages: number } }> {
    const collection = await this.getCollection();
    
    // Construire la requête en fonction des filtres
    const query: any = {};
    if (filter?.city) query.city = filter.city;
    if (filter?.type) query.type = filter.type;
    if (filter?.year) query.year = filter.year;

    const total = await collection.countDocuments(query);
    const realisations = (await collection
      .find(query)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()).map(doc => ({
        _id: doc._id.toString(),
        title: doc.title || '',
        description: doc.description || '',
        mainImage: doc.mainImage || '',
        secondaryImage: doc.secondaryImage,
        region: doc.region || '',
        city: doc.city || '',
        type: doc.type || '',
        year: doc.year || new Date().getFullYear(),
        date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
        specifications: doc.specifications || {
          puissance: 0,
          pannels: 0,
          surface: 0,
          orientation: '',
          economie: 0
        },
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: doc.updatedAt || new Date().toISOString()
      })) as Realisation[];

    return {
      realisations,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async getRealisationById(id: string): Promise<Realisation | null> {
    try {
      console.log('Fetching realisation with ID:', id);
      const collection = await this.getCollection();
      const doc = await collection.findOne({ _id: new ObjectId(id) });
      
      if (!doc) {
        console.log('No realisation found with ID:', id);
        return null;
      }
      
      console.log('Found realisation:', doc);
      
      return {
        _id: doc._id.toString(),
        title: doc.title || '',
        description: doc.description || '',
        mainImage: doc.mainImage || '',
        secondaryImage: doc.secondaryImage || '',
        region: doc.region || '',
        city: doc.city || '',
        type: doc.type || '',
        year: doc.year || new Date().getFullYear(),
        date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
        specifications: doc.specifications || {
          puissance: 0,
          pannels: 0,
          surface: 0,
          orientation: '',
          economie: 0
        },
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: doc.updatedAt || new Date().toISOString()
      };
    } catch (error) {
      console.error('Error in getRealisationById:', error);
      return null;
    }
  }

  static async getRealisationBySlug(slug: string): Promise<Realisation | null> {
    const collection = await this.getCollection();
    const realisation = await collection.findOne({ slug });
    
    if (!realisation) return null;

    return {
      _id: realisation._id.toString(),
      title: realisation.title,
      slug: realisation.slug,
      description: realisation.description,
      images: realisation.images || [],
      date: realisation.date,
      location: realisation.location,
      specifications: realisation.specifications,
      featured: realisation.featured,
      region: realisation.region,
      city: realisation.city,
      type: realisation.type
    };
  }

  private static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  static async createRealisation(data: Omit<Realisation, '_id' | 'slug'>): Promise<string> {
    const collection = await this.getCollection();
    const slug = this.generateSlug(data.title);
    
    // Vérifier si le slug existe déjà
    let finalSlug = slug;
    let counter = 1;
    while (await collection.findOne({ slug: finalSlug })) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }

    const result = await collection.insertOne({
      ...data,
      slug: finalSlug,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return result.insertedId.toString();
  }

  static async updateRealisation(id: string, updates: Partial<Realisation>): Promise<boolean> {
    const collection = await this.getCollection();
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updates,
          updatedAt: new Date()
        }
      }
    );

    return result.modifiedCount > 0;
  }

  static async deleteRealisation(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  static async getStats(): Promise<{
    totalRealisations: number,
    cities: string[],
    types: string[],
    yearlyStats: { year: number, count: number, totalPower: number }[]
  }> {
    const collection = await this.getCollection();
    
    const [totalCount, cities, types, yearlyStats] = await Promise.all([
      collection.countDocuments(),
      collection.distinct('city'),
      collection.distinct('type'),
      collection.aggregate([
        {
          $group: {
            _id: { $year: '$date' },
            count: { $sum: 1 },
            totalPower: { $sum: '$powerInstalled' }
          }
        },
        { $sort: { _id: -1 } }
      ]).toArray()
    ]);

    return {
      totalRealisations: totalCount,
      cities,
      types,
      yearlyStats: yearlyStats.map(stat => ({
        year: stat._id,
        count: stat.count,
        totalPower: stat.totalPower
      }))
    };
  }

  static async getFeaturedRealisations(limit = 6): Promise<Realisation[]> {
    const collection = await this.getCollection();
    
    const docs = await collection
      .find({ featured: true })
      .sort({ date: -1 })
      .limit(limit)
      .toArray();

    return docs.map(doc => ({
      _id: doc._id.toString(),
      title: doc.title || '',
      description: doc.description || '',
      mainImage: doc.mainImage || '',
      secondaryImage: doc.secondaryImage,
      region: doc.region || '',
      city: doc.city || '',
      type: doc.type || '',
      year: doc.year || new Date().getFullYear(),
      date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
      specifications: doc.specifications || {
        puissance: 0,
        pannels: 0,
        surface: 0,
        orientation: '',
        economie: 0
      },
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: doc.updatedAt || new Date().toISOString()
    })) as Realisation[];
  }

  static async searchRealisations(query: string): Promise<Realisation[]> {
    const collection = await this.getCollection();
    
    const docs = await collection
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { type: { $regex: query, $options: 'i' } },
          { city: { $regex: query, $options: 'i' } }
        ]
      })
      .sort({ date: -1 })
      .toArray();

    return docs.map(doc => ({
      _id: doc._id.toString(),
      title: doc.title || '',
      description: doc.description || '',
      mainImage: doc.mainImage || '',
      secondaryImage: doc.secondaryImage,
      region: doc.region || '',
      city: doc.city || '',
      type: doc.type || '',
      year: doc.year || new Date().getFullYear(),
      date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
      specifications: doc.specifications || {
        puissance: 0,
        pannels: 0,
        surface: 0,
        orientation: '',
        economie: 0
      },
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: doc.updatedAt || new Date().toISOString()
    })) as Realisation[];
  }

  static async toggleFeatured(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const realisation = await this.getRealisationById(id);
    
    if (!realisation) return false;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          featured: !realisation.featured,
          updatedAt: new Date()
        }
      }
    );

    return result.modifiedCount > 0;
  }

  static async getRealisationsByRegion(region: string): Promise<Realisation[]> {
    const collection = await this.getCollection();
    const docs = await collection
      .find({ region })
      .sort({ date: -1 })
      .toArray();

    return docs.map(doc => ({
      _id: doc._id.toString(),
      title: doc.title || '',
      description: doc.description || '',
      mainImage: doc.mainImage || '',
      secondaryImage: doc.secondaryImage,
      region: doc.region || '',
      city: doc.city || '',
      type: doc.type || '',
      year: doc.year || new Date().getFullYear(),
      date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
      specifications: doc.specifications || {
        puissance: 0,
        pannels: 0,
        surface: 0,
        orientation: '',
        economie: 0
      },
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: doc.updatedAt || new Date().toISOString()
    })) as Realisation[];
  }

  static async getRealisationsByCity(city: string): Promise<Realisation[]> {
    const collection = await this.getCollection();
    const docs = await collection
      .find({ city })
      .sort({ date: -1 })
      .toArray();

    return docs.map(doc => ({
      _id: doc._id.toString(),
      title: doc.title || '',
      description: doc.description || '',
      mainImage: doc.mainImage || '',
      secondaryImage: doc.secondaryImage,
      region: doc.region || '',
      city: doc.city || '',
      type: doc.type || '',
      year: doc.year || new Date().getFullYear(),
      date: doc.date ? new Date(doc.date).toISOString() : new Date().toISOString(),
      specifications: doc.specifications || {
        puissance: 0,
        pannels: 0,
        surface: 0,
        orientation: '',
        economie: 0
      },
      createdAt: doc.createdAt || new Date().toISOString(),
      updatedAt: doc.updatedAt || new Date().toISOString()
    })) as Realisation[];
  }

  // Méthodes utilitaires pour extraire les informations
  private static extractPuissanceFromTitle(title: string): number {
    const match = title.match(/(\d+(?:\.\d+)?)\s*kwc/i);
    return match ? parseFloat(match[1]) : 0;
  }

  private static extractSurfaceFromDescription(description: string): number {
    const match = description.match(/(\d+(?:\.\d+)?)\s*m2/i);
    return match ? parseFloat(match[1]) : 0;
  }

  private static calculateEconomie(puissance: number): number {
    // Estimation basée sur une production moyenne de 1200 kWh/kWc/an
    // et un prix moyen de l'électricité de 0.2€/kWh
    const productionAnnuelle = puissance * 1200;
    const prixKwh = 0.2;
    return Math.round(productionAnnuelle * prixKwh);
  }
}
