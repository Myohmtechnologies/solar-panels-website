'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FaCalendarCheck, FaCalendarTimes, FaSpinner, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

type Appointment = {
  _id: string;
  lead: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  date: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'PENDING';
  notes?: string;
  location?: {
    address?: string;
    city?: string;
    postalCode?: string;
  };
};

export default function CommercialAppointmentsPage() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('SCHEDULED');

  // Vérifier l'authentification
  useEffect(() => {
    const token = localStorage.getItem('commercial-token');
    if (!token) {
      router.push('/commercial/login');
    }
  }, [router]);

  // Charger les rendez-vous
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('commercial-token');
        
        if (!token) {
          throw new Error('Non authentifié');
        }
        
        const response = await fetch(`/api/appointments?status=${statusFilter}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des rendez-vous');
        }
        
        const data = await response.json();
        
        if (data.success && data.appointments) {
          setAppointments(data.appointments);
        } else {
          throw new Error(data.error || 'Erreur lors de la récupération des rendez-vous');
        }
      } catch (error: any) {
        console.error('Erreur:', error);
        setError(error.message || 'Erreur lors de la récupération des rendez-vous');
        toast.error(error.message || 'Erreur lors de la récupération des rendez-vous');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [statusFilter]);

  // Mettre à jour le statut d'un rendez-vous
  const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('commercial-token');
      
      if (!token) {
        throw new Error('Non authentifié');
      }
      
      const response = await fetch(`/api/appointments/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          status: newStatus
        })
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du rendez-vous');
      }
      
      const data = await response.json();
      
      if (data.success) {
        toast.success('Statut du rendez-vous mis à jour avec succès');
        
        // Mettre à jour la liste des rendez-vous
        setAppointments(appointments.map(appointment => 
          appointment._id === appointmentId 
            ? { ...appointment, status: newStatus as any } 
            : appointment
        ));
        
        // Fermer le modal de détails
        setSelectedAppointment(null);
      } else {
        throw new Error(data.error || 'Erreur lors de la mise à jour du rendez-vous');
      }
    } catch (error: any) {
      console.error('Erreur:', error);
      toast.error(error.message || 'Erreur lors de la mise à jour du rendez-vous');
    }
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Obtenir la classe de couleur en fonction du statut
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SCHEDULED':
        return 'bg-blue-100 text-blue-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Obtenir le libellé du statut en français
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'SCHEDULED':
        return 'Planifié';
      case 'COMPLETED':
        return 'Terminé';
      case 'CANCELLED':
        return 'Annulé';
      case 'PENDING':
        return 'En attente';
      default:
        return status;
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Mes Rendez-vous</h1>
      
      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setStatusFilter('SCHEDULED')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            statusFilter === 'SCHEDULED' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Planifiés
        </button>
        <button
          onClick={() => setStatusFilter('COMPLETED')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            statusFilter === 'COMPLETED' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Terminés
        </button>
        <button
          onClick={() => setStatusFilter('CANCELLED')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            statusFilter === 'CANCELLED' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Annulés
        </button>
        <button
          onClick={() => setStatusFilter('')}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            statusFilter === '' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Tous
        </button>
      </div>
      
      {/* Chargement */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <FaSpinner className="w-8 h-8 text-blue-600 animate-spin" />
          <span className="ml-2 text-lg">Chargement des rendez-vous...</span>
        </div>
      )}
      
      {/* Erreur */}
      {error && !loading && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
          <p>{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-sm font-medium underline"
          >
            Réessayer
          </button>
        </div>
      )}
      
      {/* Liste des rendez-vous */}
      {!loading && !error && appointments.length === 0 && (
        <div className="p-8 text-center bg-gray-100 rounded-md">
          <p className="text-lg text-gray-600">
            Aucun rendez-vous {statusFilter ? getStatusLabel(statusFilter).toLowerCase() : ''} trouvé.
          </p>
        </div>
      )}
      
      {!loading && !error && appointments.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Prospect</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Statut</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="font-medium">{appointment.lead.name}</div>
                    <div className="text-sm text-gray-600">{appointment.lead.email}</div>
                  </td>
                  <td className="p-3">
                    {formatDate(appointment.date)}
                  </td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                      {getStatusLabel(appointment.status)}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedAppointment(appointment)}
                      className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {/* Modal de détails du rendez-vous */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Détails du rendez-vous</h2>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">Informations du prospect</h3>
                <div className="p-4 bg-gray-100 rounded-md">
                  <div className="flex items-center mb-2">
                    <FaUser className="mr-2 text-gray-600" />
                    <span className="font-medium">{selectedAppointment.lead.name}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaEnvelope className="mr-2 text-gray-600" />
                    <span>{selectedAppointment.lead.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-gray-600" />
                    <span>{selectedAppointment.lead.phone}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-medium">Détails du rendez-vous</h3>
                <div className="p-4 bg-gray-100 rounded-md">
                  <div className="mb-2">
                    <span className="font-medium">Date:</span> {formatDate(selectedAppointment.date)}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Statut:</span> 
                    <span className={`ml-2 inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedAppointment.status)}`}>
                      {getStatusLabel(selectedAppointment.status)}
                    </span>
                  </div>
                  {selectedAppointment.location && (
                    <div className="mb-2">
                      <span className="font-medium">Adresse:</span> 
                      <div className="mt-1 text-sm">
                        {selectedAppointment.location.address && <div>{selectedAppointment.location.address}</div>}
                        {selectedAppointment.location.city && selectedAppointment.location.postalCode && (
                          <div>{selectedAppointment.location.postalCode} {selectedAppointment.location.city}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {selectedAppointment.notes && (
              <div className="mt-4">
                <h3 className="mb-2 text-lg font-medium">Notes</h3>
                <div className="p-4 bg-gray-100 rounded-md">
                  <p>{selectedAppointment.notes}</p>
                </div>
              </div>
            )}
            
            <div className="flex gap-2 mt-6">
              {selectedAppointment.status === 'SCHEDULED' && (
                <>
                  <button
                    onClick={() => updateAppointmentStatus(selectedAppointment._id, 'COMPLETED')}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    <FaCalendarCheck /> Marquer comme terminé
                  </button>
                  <button
                    onClick={() => updateAppointmentStatus(selectedAppointment._id, 'CANCELLED')}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    <FaCalendarTimes /> Annuler
                  </button>
                </>
              )}
              {selectedAppointment.status === 'CANCELLED' && (
                <button
                  onClick={() => updateAppointmentStatus(selectedAppointment._id, 'SCHEDULED')}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  <FaCalendarCheck /> Replanifier
                </button>
              )}
              <button
                onClick={() => setSelectedAppointment(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
