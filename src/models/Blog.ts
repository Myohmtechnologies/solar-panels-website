import mongoose from 'mongoose';

// Supprimer le modèle s'il existe déjà
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

const BlogSectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this section'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide the description for this section']
  },
  imageUrl: {
    type: String,
    required: false
  },
  order: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this blog post'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide the description for this blog post']
  },
  mainImage: {
    type: String,
    required: [true, 'Please provide a main image for this blog post']
  },
  sections: {
    type: [BlogSectionSchema],
    required: true,
    default: []
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function(tags: string[]) {
        return tags.length <= 5; // Maximum 5 tags par blog
      },
      message: 'Un blog ne peut pas avoir plus de 5 tags'
    }
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this blog post'],
    enum: ['solaire', 'energie', 'environnement', 'technologie', 'actualites'],
    default: 'actualites'
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    default: function(this: any) {
      return this.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
  },
  // Type d'article pour le maillage interne
  articleType: {
    type: String,
    enum: ['pilier', 'niche', 'standard'],
    default: 'standard',
    required: true
  },
  // Pour les articles de niche, référence à leur article pilier
  pilierParent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: false
  },
  // Pour les articles piliers, liste des articles de niche liés
  articlesNicheLies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  // Nouveaux champs SEO
  seoTitle: {
    type: String,
    maxlength: [60, 'Le titre SEO ne peut pas dépasser 60 caractères']
  },
  seoDescription: {
    type: String,
    maxlength: [160, 'La description SEO ne peut pas dépasser 160 caractères']
  },
  // Champs Schema Markup
  schemaType: {
    type: String,
    enum: ['Article', 'BlogPosting', 'NewsArticle', 'TechArticle'],
    default: 'BlogPosting'
  },
  author: {
    type: String,
    default: 'MyOhm Technologies'
  },
  keywords: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index pour la recherche full-text
BlogSchema.index({
  title: 'text',
  description: 'text',
  'sections.title': 'text',
  'sections.description': 'text',
  tags: 'text'
});

// Middleware pour mettre à jour updatedAt avant la sauvegarde
BlogSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  
  // Générer le slug si non fourni
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  next();
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
