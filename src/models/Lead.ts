import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Veuillez fournir un email valide'],
  },
  phone: {
    type: String,
    required: [true, 'Le numéro de téléphone est requis'],
    trim: true,
  },
  residentialStatus: {
    type: String,
    enum: ['OWNER', 'RENTER'],
    required: true,
  },
  logementType: {
    type: String,
    enum: ['HOUSE', 'APARTMENT'],
    required: true,
  },
  energyBill: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['NEW', 'CONTACTED', 'DEVIS_ENVOYE', 'COMPLETED', 'INSTALLATION', 'QUALIFIED', 'CONVERTED', 'LOST', 'RDV_SCHEDULED', 'SECOND_RDV', 'TECHNICAL_VISIT', 'DEMARCHE_ADMINISTRATIF', 'CONSUAL', 'RACORDEMENT_EDF', 'NOT_INTERESTED'],
    default: 'NEW',
  }
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
