"use client";

import React, { useState } from 'react';
import { submitLead } from '@/services/leadService';

export default function PhoningForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    postalCode: '',
    notes: '',
    logementType: 'HOUSE', // Valeur par défaut
    residentialStatus: 'OWNER', // Valeur par défaut
    energyBill: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Utiliser l'API existante mais avec une source "phoning" dans les notes
      const result = await submitLead({
        ...formData,
        email: `phoning_${Date.now()}@myohmtechnologies.com`, // Email généré automatiquement
        source: 'hero', // Utiliser une source existante
        notes: `[SOURCE: PHONING] ${formData.notes || ''}`, // Ajouter l'information de source dans les notes
        createdAt: new Date().toISOString()
      });

      if (result.success) {
        setSuccess(true);
        // Réinitialiser le formulaire pour une nouvelle saisie
        setFormData({
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
        
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(result.error || "Une erreur s'est produite lors de l'enregistrement du lead");
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi du formulaire");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Informations du prospect
      </h2>
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Succès ! </strong>
          <span className="block sm:inline">Le lead a été enregistré avec succès.</span>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur ! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informations personnelles */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Prénom et Nom"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="06 XX XX XX XX"
          />
        </div>
        

        
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            Ville
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ville"
          />
        </div>
        
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
            Code postal
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Code postal"
          />
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Adresse complète"
          />
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Informations sur le projet
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="logementType" className="block text-sm font-medium text-gray-700 mb-1">
              Type de logement
            </label>
            <select
              id="logementType"
              name="logementType"
              value={formData.logementType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="HOUSE">Maison</option>
              <option value="APARTMENT">Appartement</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="residentialStatus" className="block text-sm font-medium text-gray-700 mb-1">
              Statut résidentiel
            </label>
            <select
              id="residentialStatus"
              name="residentialStatus"
              value={formData.residentialStatus}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="OWNER">Propriétaire</option>
              <option value="RENTER">Locataire</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="energyBill" className="block text-sm font-medium text-gray-700 mb-1">
              Facture d'électricité mensuelle
            </label>
            <select
              id="energyBill"
              name="energyBill"
              value={formData.energyBill}
              onChange={handleChange}
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
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
          Notes / Commentaires
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Informations complémentaires, remarques de l'agent..."
        ></textarea>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Enregistrement...' : 'Enregistrer le lead'}
        </button>
      </div>
    </form>
  );
}
