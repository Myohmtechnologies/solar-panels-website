// Script pour créer les commerciaux Ali Abed et Rudy Salatnia
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// Connexion à MongoDB
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI non défini dans les variables d\'environnement');
    }
    
    await mongoose.connect(uri);
    console.log('Connexion à MongoDB établie');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error.message);
    process.exit(1);
  }
};

// Définition du modèle Commercial
const CommercialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Veuillez fournir un email valide'],
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
  },
  phone: {
    type: String,
    trim: true,
  },
  location: {
    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

// Définir le modèle
const Commercial = mongoose.models.Commercial || mongoose.model('Commercial', CommercialSchema);

// Fonction pour créer un commercial
const createCommercial = async (commercialData) => {
  try {
    // Vérifier si l'email existe déjà
    const existingCommercial = await Commercial.findOne({ email: commercialData.email });
    if (existingCommercial) {
      console.log(`Un commercial avec l'email ${commercialData.email} existe déjà`);
      return null;
    }
    
    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    commercialData.password = await bcrypt.hash(commercialData.password, salt);
    
    // Créer le commercial
    const commercial = new Commercial(commercialData);
    await commercial.save();
    
    console.log(`Commercial ${commercial.name} créé avec succès`);
    return commercial;
  } catch (error) {
    console.error('Erreur lors de la création du commercial:', error.message);
    return null;
  }
};

// Fonction principale
const main = async () => {
  try {
    await connectDB();
    
    // Données pour Ali Abed
    const aliAbed = {
      name: 'Ali Abed',
      email: 'ali.abed@myohmtechnologies.com',
      password: 'password123', // À changer en production
      phone: '0612345678',
      location: {
        city: 'Paris',
        postalCode: '75001',
      },
      active: true
    };
    
    // Données pour Rudy Salatnia
    const rudySalatnia = {
      name: 'Rudy Salatnia',
      email: 'rudy.salatnia@myohmtechnologies.com',
      password: 'password123', // À changer en production
      phone: '0687654321',
      location: {
        city: 'Lyon',
        postalCode: '69001',
      },
      active: true
    };
    
    // Créer les commerciaux
    await createCommercial(aliAbed);
    await createCommercial(rudySalatnia);
    
    console.log('Opération terminée');
    process.exit(0);
  } catch (error) {
    console.error('Erreur:', error.message);
    process.exit(1);
  }
};

// Exécuter la fonction principale
main();
