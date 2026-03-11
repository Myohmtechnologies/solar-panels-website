import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaCalendarAlt, FaUserTie } from 'react-icons/fa';

type Commercial = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  location?: {
    city?: string;
  };
};

type Lead = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
};

type AppointmentAssignmentProps = {
  leadId: string;
  leadData: Lead;
  onAssignmentComplete: () => void;
};

const AppointmentAssignment: React.FC<AppointmentAssignmentProps> = ({ 
  leadId, 
  leadData, 
  onAssignmentComplete 
}) => {
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCommercial, setSelectedCommercial] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [showForm, setShowForm] = useState(false);

  // Charger la liste des commerciaux
  useEffect(() => {
    const fetchCommercials = async () => {
      try {
        const response = await fetch('/api/commercials', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des commerciaux');
        }
        
        const data = await response.json();
        if (data.success && data.commercials) {
          setCommercials(data.commercials);
        }
      } catch (error) {
        console.error('Erreur:', error);
        toast.error('Impossible de charger la liste des commerciaux');
      }
    };

    if (showForm) {
      fetchCommercials();
    }
  }, [showForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCommercial || !appointmentDate || !appointmentTime) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setLoading(true);
    
    try {
      // Combiner la date et l'heure
      const dateTimeString = `${appointmentDate}T${appointmentTime}:00`;
      const appointmentDateTime = new Date(dateTimeString);
      
      // Créer le rendez-vous
      const createResponse = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify({
          lead: leadId,
          date: appointmentDateTime,
          notes,
          status: 'PENDING'
        })
      });
      
      if (!createResponse.ok) {
        throw new Error('Erreur lors de la création du rendez-vous');
      }
      
      const createData = await createResponse.json();
      
      if (!createData.success) {
        throw new Error(createData.error || 'Erreur lors de la création du rendez-vous');
      }
      
      // Assigner le rendez-vous au commercial
      const appointmentId = createData.appointment._id;
      
      const assignResponse = await fetch(`/api/appointments/${appointmentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify({
          commercialId: selectedCommercial
        })
      });
      
      if (!assignResponse.ok) {
        throw new Error('Erreur lors de l\'assignation du rendez-vous');
      }
      
      const assignData = await assignResponse.json();
      
      if (!assignData.success) {
        throw new Error(assignData.error || 'Erreur lors de l\'assignation du rendez-vous');
      }
      
      toast.success('Rendez-vous créé et assigné avec succès');
      
      // Réinitialiser le formulaire
      setSelectedCommercial('');
      setAppointmentDate('');
      setAppointmentTime('');
      setNotes('');
      setShowForm(false);
      
      // Appeler la fonction de callback
      onAssignmentComplete();
    } catch (error: any) {
      console.error('Erreur:', error);
      toast.error(error.message || 'Erreur lors de la création du rendez-vous');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaCalendarAlt /> Planifier un rendez-vous
        </button>
      ) : (
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-4 text-lg font-medium">Planifier un rendez-vous pour {leadData.name}</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Commercial <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedCommercial}
                  onChange={(e) => setSelectedCommercial(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Sélectionner un commercial</option>
                  {commercials.map((commercial) => (
                    <option key={commercial._id} value={commercial._id}>
                      {commercial.name} {commercial.location?.city ? `(${commercial.location.city})` : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Heure <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Création...' : (
                  <>
                    <FaUserTie /> Assigner le rendez-vous
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentAssignment;
