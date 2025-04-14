'use client';

import React, { useState } from 'react';
import PhoningForm from '@/components/forms/PhoningForm';
import PhoningScheduler from '@/components/phoning/PhoningScheduler';
import { submitLead } from '@/services/leadService';

// Étapes du workflow
enum WorkflowStep {
  PROSPECT_INFO = 0,
  PROJECT_INFO = 1,
  APPOINTMENT_SCHEDULING = 2,
  CONFIRMATION = 3
}

export default function PhoningWorkflow() {
  // État pour suivre l'étape actuelle
  const [currentStep, setCurrentStep] = useState<WorkflowStep>(WorkflowStep.PROSPECT_INFO);
  
  // État pour stocker les données du prospect
  const [prospectData, setProspectData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    postalCode: '',
    notes: '',
    logementType: 'HOUSE',
    residentialStatus: 'OWNER',
    energyBill: '',
  });
  
  // État pour stocker les données du rendez-vous
  const [appointmentData, setAppointmentData] = useState<{
    commercialId: string;
    commercialName: string;
    date: string;
    time: string;
    duration: string;
  }>({
    commercialId: '',
    commercialName: '',
    date: '',
    time: '',
    duration: '3',
  });
  
  // États pour les messages
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Gérer les changements dans le formulaire du prospect
  const handleProspectDataChange = (field: string, value: string) => {
    setProspectData(prev => ({ ...prev, [field]: value }));
  };
  
  // Gérer les changements dans les données du rendez-vous
  const handleAppointmentDataChange = (field: string, value: string) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
  };
  
  // Passer à l'étape suivante
  const goToNextStep = () => {
    setCurrentStep(prev => {
      const nextStep = prev + 1;
      return nextStep <= WorkflowStep.CONFIRMATION ? nextStep : prev;
    });
  };
  
  // Revenir à l'étape précédente
  const goToPreviousStep = () => {
    setCurrentStep(prev => {
      const prevStep = prev - 1;
      return prevStep >= WorkflowStep.PROSPECT_INFO ? prevStep : prev;
    });
  };
  
  // Vérifier si les informations du prospect sont complètes
  const isProspectInfoComplete = () => {
    return prospectData.fullName.trim() !== '' && prospectData.phone.trim() !== '';
  };
  
  // Vérifier si les informations du projet sont complètes
  const isProjectInfoComplete = () => {
    // Ajoutez ici des validations supplémentaires si nécessaire
    return true;
  };
  
  // Vérifier si les informations du rendez-vous sont complètes
  const isAppointmentInfoComplete = () => {
    return (
      appointmentData.commercialId !== '' &&
      appointmentData.date !== '' &&
      appointmentData.time !== ''
    );
  };
  
  // Enregistrer le lead avec le rendez-vous
  const saveLead = async () => {
    if (!isProspectInfoComplete() || !isAppointmentInfoComplete()) {
      setError('Veuillez remplir toutes les informations requises');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Préparer les données du lead
      const leadData = {
        ...prospectData,
        email: `phoning_${Date.now()}@myohmtechnologies.com`, // Email généré automatiquement
        source: 'hero' as 'hero', // Utiliser un type valide pour la source
        notes: `[SOURCE: PHONING] ${prospectData.notes || ''}`,
        createdAt: new Date().toISOString(),
        // S'assurer que les informations du projet sont incluses
        logementType: prospectData.logementType || 'HOUSE',
        residentialStatus: prospectData.residentialStatus || 'OWNER',
        energyBill: prospectData.energyBill || '',
        // Ajouter les informations du rendez-vous
        nextAction: {
          type: 'RDV_SCHEDULED',
          commercialId: appointmentData.commercialId,
          plannedDate: new Date(`${appointmentData.date}T${appointmentData.time}`).toISOString(),
          duration: parseInt(appointmentData.duration) * 60, // Convertir en minutes
          notes: `Rendez-vous fixé par téléphone avec ${prospectData.fullName} - Commercial: ${appointmentData.commercialName}`
        }
      };
      
      console.log('Données du lead à envoyer:', leadData);
      
      // Envoyer les données à l'API
      const result = await submitLead(leadData);
      
      if (result.success) {
        setSuccess(true);
        setCurrentStep(WorkflowStep.CONFIRMATION);
        
        // Réinitialiser les formulaires après 5 secondes
        setTimeout(() => {
          setProspectData({
            fullName: '',
            phone: '',
            city: '',
            address: '',
            postalCode: '',
            notes: '',
            logementType: 'HOUSE',
            residentialStatus: 'OWNER',
            energyBill: '',
          });
          
          setAppointmentData({
            commercialId: '',
            commercialName: '',
            date: '',
            time: '',
            duration: '3',
          });
          
          setCurrentStep(WorkflowStep.PROSPECT_INFO);
          setSuccess(false);
        }, 5000);
      } else {
        setError(result.error || "Une erreur s'est produite lors de l'enregistrement du lead");
      }
    } catch (err) {
      console.error('Erreur lors de l\'enregistrement du lead:', err);
      setError("Une erreur s'est produite lors de l'enregistrement du lead");
    } finally {
      setLoading(false);
    }
  };
  
  // Gérer la sélection d'un créneau dans le planificateur
  const handleAppointmentSelected = (commercial: { _id: string, name: string }, date: string, time: string, duration: string) => {
    setAppointmentData({
      commercialId: commercial._id,
      commercialName: commercial.name,
      date,
      time,
      duration,
    });
  };
  
  return (
    <div className="space-y-8">
      {/* Indicateur d'étapes */}
      <div className="flex justify-between mb-8">
        {['Informations du prospect', 'Informations du projet', 'Planification du rendez-vous', 'Confirmation'].map((step, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              index < currentStep ? 'bg-blue-600 text-white' : 
              index === currentStep ? 'border-2 border-blue-600 text-blue-600' : 
              'border-2 border-gray-300 text-gray-400'
            }`}>
              {index < currentStep ? '✓' : index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
      
      {/* Messages d'erreur et de succès */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur ! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Succès ! </strong>
          <span className="block sm:inline">Le lead a été enregistré avec succès avec un rendez-vous planifié.</span>
        </div>
      )}
      
      {/* Contenu des étapes */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        {currentStep === WorkflowStep.PROSPECT_INFO && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Informations du prospect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom complet */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={prospectData.fullName}
                  onChange={(e) => handleProspectDataChange('fullName', e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Prénom et Nom"
                />
              </div>
              
              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={prospectData.phone}
                  onChange={(e) => handleProspectDataChange('phone', e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              
              {/* Ville */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  id="city"
                  value={prospectData.city}
                  onChange={(e) => handleProspectDataChange('city', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ville"
                />
              </div>
              
              {/* Code postal */}
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  id="postalCode"
                  value={prospectData.postalCode}
                  onChange={(e) => handleProspectDataChange('postalCode', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Code postal"
                />
              </div>
              
              {/* Adresse */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  value={prospectData.address}
                  onChange={(e) => handleProspectDataChange('address', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Adresse complète"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!isProspectInfoComplete()}
                className={`px-6 py-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all ${
                  !isProspectInfoComplete() ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                Suivant
              </button>
            </div>
          </div>
        )}
        
        {currentStep === WorkflowStep.PROJECT_INFO && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Informations sur le projet
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Type de logement */}
              <div>
                <label htmlFor="logementType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de logement
                </label>
                <select
                  id="logementType"
                  value={prospectData.logementType}
                  onChange={(e) => handleProspectDataChange('logementType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="HOUSE">Maison</option>
                  <option value="APARTMENT">Appartement</option>
                </select>
              </div>
              
              {/* Statut résidentiel */}
              <div>
                <label htmlFor="residentialStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Statut résidentiel
                </label>
                <select
                  id="residentialStatus"
                  value={prospectData.residentialStatus}
                  onChange={(e) => handleProspectDataChange('residentialStatus', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="OWNER">Propriétaire</option>
                  <option value="RENTER">Locataire</option>
                </select>
              </div>
              
              {/* Facture d'électricité */}
              <div>
                <label htmlFor="energyBill" className="block text-sm font-medium text-gray-700 mb-1">
                  Facture d'électricité mensuelle
                </label>
                <select
                  id="energyBill"
                  value={prospectData.energyBill}
                  onChange={(e) => handleProspectDataChange('energyBill', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sélectionner...</option>
                  <option value="LESS_THAN_100">Moins de 100€</option>
                  <option value="BETWEEN_100_AND_150">Entre 100€ et 150€</option>
                  <option value="BETWEEN_150_AND_200">Entre 150€ et 200€</option>
                  <option value="MORE_THAN_200">Plus de 200€</option>
                </select>
              </div>
            </div>
            
            {/* Notes */}
            <div className="mt-6">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes / Commentaires
              </label>
              <textarea
                id="notes"
                value={prospectData.notes}
                onChange={(e) => handleProspectDataChange('notes', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Informations complémentaires, remarques de l'agent..."
              ></textarea>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={goToPreviousStep}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 transition-all"
              >
                Retour
              </button>
              
              <button
                type="button"
                onClick={goToNextStep}
                disabled={!isProjectInfoComplete()}
                className={`px-6 py-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all ${
                  !isProjectInfoComplete() ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                Suivant
              </button>
            </div>
          </div>
        )}
        
        {currentStep === WorkflowStep.APPOINTMENT_SCHEDULING && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Planification du rendez-vous
            </h2>
            
            <div className="mb-6">
              <PhoningScheduler 
                onAppointmentSelected={handleAppointmentSelected}
                prospectInfo={{
                  name: prospectData.fullName,
                  address: `${prospectData.address}, ${prospectData.postalCode} ${prospectData.city}`.trim(),
                }}
              />
            </div>
            
            {appointmentData.commercialId && appointmentData.date && appointmentData.time && (
              <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded relative mb-4">
                <p className="font-medium">Rendez-vous sélectionné :</p>
                <p>Commercial : {appointmentData.commercialName}</p>
                <p>Date : {new Date(appointmentData.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p>Heure : {appointmentData.time}</p>
                <p>Durée : {appointmentData.duration} heure(s)</p>
              </div>
            )}
            
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={goToPreviousStep}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm hover:bg-gray-50 transition-all"
              >
                Retour
              </button>
              
              <button
                type="button"
                onClick={saveLead}
                disabled={!isAppointmentInfoComplete() || loading}
                className={`px-6 py-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all ${
                  !isAppointmentInfoComplete() || loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Enregistrement...' : 'Enregistrer le lead avec rendez-vous'}
              </button>
            </div>
          </div>
        )}
        
        {currentStep === WorkflowStep.CONFIRMATION && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Enregistrement réussi !
            </h2>
            
            <p className="text-gray-600 mb-6">
              Le lead a été enregistré avec succès avec un rendez-vous planifié pour le commercial {appointmentData.commercialName}.
            </p>
            
            <p className="text-sm text-gray-500">
              Vous allez être redirigé vers un nouveau formulaire dans quelques secondes...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
