import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../modals/ContactModal';

type HouseSize = 'small' | 'medium' | 'large';
type BillRange = 'low' | 'medium' | 'high';

interface FormData {
  houseSize: HouseSize;
  monthlyBill: BillRange;
  orientation: string;
  showContactForm: boolean;
}

export default function PriceCalculator() {
  const [formData, setFormData] = useState<FormData>({
    houseSize: 'medium',
    monthlyBill: 'medium',
    orientation: 'sud',
    showContactForm: false
  });

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    type: 'success'
  });

  const houseSizes = [
    { value: 'small', label: 'Petite maison (< 100m²)', roofArea: '20-40m²' },
    { value: 'medium', label: 'Maison moyenne (100-150m²)', roofArea: '40-70m²' },
    { value: 'large', label: 'Grande maison (> 150m²)', roofArea: '70-120m²' }
  ];

  const billRanges = [
    { value: 'low', label: '60€ - 120€ / mois', range: '60-120' },
    { value: 'medium', label: '120€ - 200€ / mois', range: '120-200' },
    { value: 'high', label: '200€ et plus / mois', range: '200+' }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, showContactForm: true }));
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/solar-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...contactInfo
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      // Afficher le modal de succès
      setModalState({ isOpen: true, type: 'success' });
      
      // Réinitialisation du formulaire
      setFormData({
        houseSize: 'medium',
        monthlyBill: 'medium',
        orientation: 'sud',
        showContactForm: false
      });
      setContactInfo({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      setModalState({ isOpen: true, type: 'error' });
      console.error('Erreur:', error);
    }
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        title={modalState.type === 'success' ? "Estimation envoyée avec succès !" : "Une erreur est survenue"}
        message={modalState.type === 'success' 
          ? "Merci ! Votre estimation a été envoyée. Vérifiez votre boîte email pour plus de détails. Un expert MyOhm vous contactera dans les plus brefs délais."
          : "Nous n'avons pas pu envoyer votre estimation. Veuillez vérifier votre connexion internet et réessayer."}
        primaryButtonText={modalState.type === 'success' ? "Compris" : "Réessayer"}
        secondaryButtonText={modalState.type === 'error' ? "Annuler" : undefined}
      />
      {!formData.showContactForm ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Taille de la maison */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est la taille de votre maison ?
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {houseSizes.map(size => (
                  <div
                    key={size.value}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      formData.houseSize === size.value
                        ? 'border-FFDF64 bg-FFDF64/10'
                        : 'border-gray-200 hover:border-FFDF64'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, houseSize: size.value as HouseSize }))}
                  >
                    <h3 className="font-bold mb-2">{size.label}</h3>
                    <p className="text-sm text-gray-600">Surface de toit estimée : {size.roofArea}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facture mensuelle */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est votre facture d'électricité mensuelle ?
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {billRanges.map(bill => (
                  <div
                    key={bill.value}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      formData.monthlyBill === bill.value
                        ? 'border-FFDF64 bg-FFDF64/10'
                        : 'border-gray-200 hover:border-FFDF64'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, monthlyBill: bill.value as BillRange }))}
                  >
                    <h3 className="font-bold">{bill.label}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Orientation */}
            <div>
              <label className="block text-gray-700 font-semibold mb-4">
                Quelle est l'orientation principale de votre toit ?
              </label>
              <select
                value={formData.orientation}
                onChange={(e) => setFormData(prev => ({ ...prev, orientation: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
              >
                <option value="sud">Sud (Optimal)</option>
                <option value="est">Est</option>
                <option value="ouest">Ouest</option>
                <option value="nord">Nord</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-FFDF64 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Recevoir mon estimation personnalisée
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Recevez votre estimation détaillée par email
          </h3>
          <form onSubmit={handleSubmitContact} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nom complet</label>
              <input
                type="text"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                placeholder="jean.dupont@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Téléphone</label>
              <input
                type="tel"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-FFDF64"
                placeholder="06 12 34 56 78"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-FFDF64 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Recevoir mon estimation par email
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
