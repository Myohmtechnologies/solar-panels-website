import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  secondaryImages: [{
    type: String,
    required: true,
  }],
  specifications: {
    surface: String,
    orientation: String,
    panneaux: String,
    production: String,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  powerCapacity: {
    type: Number,
    required: true,
  },
  clientType: {
    type: String,
    enum: ['Particulier', 'Professionnel'],
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

// Créer le slug à partir du titre
projectSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }
  next();
});

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
