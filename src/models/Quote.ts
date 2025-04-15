import mongoose, { Schema } from 'mongoose';

// Définir explicitement le schéma pour la prestation exceptionnelle
const ExceptionalServiceSchema = new Schema({
  description: { type: String },
  price: { type: Number }
}, { _id: false }); // Désactiver l'ID automatique pour ce sous-document

// Schéma pour les données client
const ClientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  address: { type: String },
  postalCode: { type: String },
  city: { type: String }
}, { _id: false });

// Schéma pour la configuration du devis
const ConfigSchema = new Schema({
  configurationType: { 
    type: String, 
    enum: ['dualsun_enphase', 'bourgeois_global'], 
    required: true 
  },
  installationPower: { 
    type: Number, 
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    required: true 
  },
  batteryType: { 
    type: String, 
    enum: ['none', 'physical', 'virtual'], 
    required: true 
  },
  batteryCapacityIndex: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  exceptionalService: ExceptionalServiceSchema
}, { _id: false, strict: false }); // Désactiver strict mode pour accepter les champs non définis

// Schéma principal pour le devis
const QuoteSchema = new Schema({
  client: ClientSchema,
  config: ConfigSchema,
  totalPrice: { type: Number, required: true },
  pdfUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { strict: false }); // Désactiver strict mode pour le schéma principal

// Ajouter un hook pre-save pour déboguer
QuoteSchema.pre('save', function(next) {
  console.log('Saving quote with config:', this.config);
  next();
});

// Vérifier si le modèle existe déjà pour éviter les erreurs de redéfinition
export default mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);
