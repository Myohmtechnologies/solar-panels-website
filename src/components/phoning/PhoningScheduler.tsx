'use client';

import React, { useState, useEffect } from 'react';
import { format, addDays, startOfWeek, addHours, isToday, parseISO, differenceInHours } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Commercial {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

interface Appointment {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  client?: {
    name: string;
  };
}

const DAYS_OF_WEEK = ['LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.', 'DIM.'];
const HOURS = Array.from({ length: 11 }, (_, i) => i + 9); // 9h à 19h

interface PhoningSchedulerProps {
  onAppointmentSelected?: (commercial: Commercial, date: string, time: string, duration: string) => void;
  prospectInfo?: {
    name: string;
    address: string;
  };
}

export default function PhoningScheduler({ onAppointmentSelected, prospectInfo }: PhoningSchedulerProps = {}) {
  // États pour les commerciaux
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [selectedCommercial, setSelectedCommercial] = useState<Commercial | null>(null);
  
  // États pour le lead sélectionné
  const [selectedLead, setSelectedLead] = useState<any>(null);
  
  // États pour le calendrier
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // États pour la sélection manuelle
  const [manualDate, setManualDate] = useState<string>('');
  const [manualTime, setManualTime] = useState<string>('');
  const [appointmentDuration, setAppointmentDuration] = useState<string>('3');
  
  // États pour les messages
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  
  // Charger la liste des commerciaux au chargement du composant
  useEffect(() => {
    loadCommercials();
  }, []);
  
  // Charger les commerciaux
  const loadCommercials = async () => {
    try {
      const response = await fetch('/api/commercials');
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && Array.isArray(data.commercials)) {
        setCommercials(data.commercials);
        if (data.commercials.length > 0) {
          setSelectedCommercial(data.commercials[0]);
        }
      } else {
        // Si l'API ne renvoie pas de commerciaux, utiliser des données par défaut
        const defaultCommercials = [
          {
            _id: '1',
            name: 'Ali Abed',
            email: 'ali.abed@myohmtechnologies.com',
            phone: '06 12 34 56 78'
          },
          {
            _id: '2',
            name: 'Rudy Salatnia',
            email: 'rudy.salatnia@myohmtechnologies.com',
            phone: '06 98 76 54 32'
          }
        ];
        
        setCommercials(defaultCommercials);
        setSelectedCommercial(defaultCommercials[0]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des commerciaux:', error);
      
      // En cas d'erreur, utiliser des données par défaut
      const defaultCommercials = [
        {
          _id: '1',
          name: 'Ali Abed',
          email: 'ali.abed@myohmtechnologies.com',
          phone: '06 12 34 56 78'
        },
        {
          _id: '2',
          name: 'Rudy Salatnia',
          email: 'rudy.salatnia@myohmtechnologies.com',
          phone: '06 98 76 54 32'
        }
      ];
      
      setCommercials(defaultCommercials);
      setSelectedCommercial(defaultCommercials[0]);
    }
  };
  
  // Charger les rendez-vous du commercial sélectionné
  useEffect(() => {
    if (selectedCommercial) {
      loadAppointments();
    }
  }, [selectedCommercial, currentWeekStart]);
  
  // Charger les rendez-vous
  const loadAppointments = async () => {
    if (!selectedCommercial) return;
    
    setLoading(true);
    try {
      const startDate = format(currentWeekStart, 'yyyy-MM-dd');
      const endDate = format(addDays(currentWeekStart, 6), 'yyyy-MM-dd');
      
      console.log(`Chargement des rendez-vous pour ${selectedCommercial.name} du ${startDate} au ${endDate}`);
      
      const response = await fetch(`/api/appointments?commercialId=${selectedCommercial._id}&startDate=${startDate}&endDate=${endDate}`);
      
      if (!response.ok) {
        console.error(`Erreur lors de la récupération des rendez-vous: ${response.status}`);
        setAppointments([]);
        setLoading(false);
        return;
      }
      
      const data = await response.json();
      
      console.log('Réponse de l\'API appointments:', data);
      
      if (data.success) {
        console.log(`${data.appointments.length} rendez-vous reçus:`, data.appointments);
        setAppointments(data.appointments || []);
      } else {
        console.log('Aucun rendez-vous reçu');
        setAppointments([]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des rendez-vous:', error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Vérifier si un créneau est occupé et déterminer la position du créneau dans le rendez-vous
  const isSlotOccupied = (day: Date, hour: number): { appointment: Appointment | null, isFirstHour: boolean, isSecondHour: boolean } => {
    const slotDate = format(day, 'yyyy-MM-dd');
    const slotStart = new Date(`${slotDate}T${hour}:00:00`);
    const slotEnd = new Date(`${slotDate}T${hour + 1}:00:00`);
    
    for (const appointment of appointments) {
      const appointmentStart = new Date(appointment.start);
      const appointmentEnd = new Date(appointment.end);
      
      // Vérifier si le créneau est dans la plage du rendez-vous
      if (
        (slotStart >= appointmentStart && slotStart < appointmentEnd) ||
        (slotEnd > appointmentStart && slotEnd <= appointmentEnd) ||
        (slotStart <= appointmentStart && slotEnd >= appointmentEnd)
      ) {
        // Déterminer s'il s'agit du premier créneau du rendez-vous
        const isFirstHour = hour === appointmentStart.getHours() ||
          (day.getDate() === appointmentStart.getDate() && hour === 9 && appointmentStart.getHours() < 9);
        
        // Déterminer s'il s'agit du deuxième créneau du rendez-vous
        const isSecondHour = !isFirstHour && (
          (hour === appointmentStart.getHours() + 1) ||
          (appointmentStart.getHours() === 23 && hour === 0 && day.getDate() === appointmentStart.getDate() + 1) ||
          (day.getDate() === appointmentStart.getDate() && hour === 10 && appointmentStart.getHours() < 9)
        );
        
        return { appointment, isFirstHour, isSecondHour };
      }
    }
    
    return { appointment: null, isFirstHour: false, isSecondHour: false };
  };
  
  // Gérer la sélection d'un créneau
  const handleSlotSelect = (day: Date, hour: number) => {
    const dateStr = format(day, 'yyyy-MM-dd');
    const timeStr = `${hour}:00`;
    
    setSelectedDate(dateStr);
    setSelectedTime(timeStr);
    
    // Mettre à jour les champs manuels également
    setManualDate(dateStr);
    setManualTime(timeStr);
    
    // Notifier le composant parent si la fonction de callback est fournie
    if (selectedCommercial && onAppointmentSelected) {
      onAppointmentSelected(selectedCommercial, dateStr, timeStr, appointmentDuration);
    }
  };
  
  // Naviguer vers la semaine précédente
  const goToPreviousWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, -7));
  };
  
  // Naviguer vers la semaine suivante
  const goToNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7));
  };
  
  // Naviguer vers aujourd'hui
  const goToToday = () => {
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }));
  };
  
  // Déterminer la couleur du rendez-vous en fonction de l'heure
  const getAppointmentColor = (appointment: Appointment) => {
    const appointmentHour = new Date(appointment.start).getHours();
    
    // Rendez-vous du matin (avant 12h)
    if (appointmentHour < 12) {
      return 'bg-gradient-to-r from-[#116290] to-[#0a3d5c]';
    }
    
    // Rendez-vous de l'après-midi (12h-17h)
    if (appointmentHour >= 12 && appointmentHour < 17) {
      return 'bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-black';
    }
    
    // Rendez-vous du soir (après 17h)
    return 'bg-gradient-to-r from-[#ff8008] to-[#ffc837]';
  };
  
  // Planifier un rendez-vous
  const scheduleAppointment = async () => {
    // Si nous avons un callback pour la sélection de rendez-vous, nous n'avons pas besoin d'appeler l'API ici
    if (onAppointmentSelected) {
      const date = manualDate || selectedDate;
      const time = manualTime || selectedTime;
      
      if (!date || !time || !selectedCommercial) {
        setError("Veuillez sélectionner une date, une heure et un commercial");
        return;
      }
      
      // Notifier le composant parent
      onAppointmentSelected(selectedCommercial, date, time, appointmentDuration);
      return;
    }
    
    // Comportement original pour la compatibilité avec l'existant
    if (!selectedLead) {
      setError("Veuillez sélectionner un lead");
      return;
    }
    
    if (!selectedCommercial) {
      setError("Veuillez sélectionner un commercial");
      return;
    }
    
    const date = manualDate || selectedDate;
    const time = manualTime || selectedTime;
    
    if (!date || !time) {
      setError("Veuillez sélectionner une date et une heure");
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const leadId = selectedLead._id;
      
      // Créer l'action pour le lead
      const plannedDate = new Date(`${date}T${time}`);
      const durationInMinutes = parseInt(appointmentDuration) * 60; // Convertir en minutes
      
      const leadAction = {
        type: 'RDV_SCHEDULED',
        commercialId: selectedCommercial._id,
        plannedDate: plannedDate.toISOString(),
        duration: durationInMinutes,
        notes: `Rendez-vous fixé par téléphone`
      };
      
      // Envoyer l'action à l'API
      const leadResponse = await fetch(`/api/leads/${leadId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadAction),
      });
      
      if (!leadResponse.ok) {
        throw new Error('Erreur lors de la création du rendez-vous');
      }
      
      const leadData = await leadResponse.json();
      
      if (leadData.success || leadData.action) {
        setSuccess(true);
        
        // Recharger les rendez-vous
        loadAppointments();
        
        // Réinitialiser les sélections
        setSelectedDate('');
        setSelectedTime('');
        setManualDate('');
        setManualTime('');
        
        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(leadData.error || "Une erreur s'est produite lors de la mise à jour du lead");
      }
    } catch (error) {
      console.error('Erreur lors de la planification du rendez-vous:', error);
      setError("Une erreur s'est produite lors de la planification du rendez-vous");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Planificateur de rendez-vous
      </h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Erreur ! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Succès ! </strong>
          <span className="block sm:inline">Le rendez-vous a été planifié avec succès.</span>
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-medium text-blue-800 mb-4">
          Sélectionner un commercial
        </h3>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {commercials.map((commercial) => (
            <button
              key={commercial._id}
              type="button"
              onClick={() => setSelectedCommercial(commercial)}
              className={`px-4 py-3 border ${selectedCommercial?._id === commercial._id ? 'bg-blue-700 text-white' : 'bg-white text-gray-800'} rounded-md text-center font-medium hover:bg-blue-50 transition-colors`}
            >
              {commercial.name}
            </button>
          ))}
        </div>
      </div>
      
      {selectedCommercial && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendrier - occupe 2/3 de la page */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Planning de {selectedCommercial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {format(currentWeekStart, 'd', { locale: fr })} - {format(addDays(currentWeekStart, 6), 'd MMM yyyy', { locale: fr })}
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={goToPreviousWeek}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  &lt;
                </button>
                <button
                  type="button"
                  onClick={goToToday}
                  className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Aujourd'hui
                </button>
                <button
                  type="button"
                  onClick={goToNextWeek}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  &gt;
                </button>
              </div>
              
              <div className="flex mb-2 space-x-2">
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md"
                >
                  Mois
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md"
                >
                  Semaine
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md"
                >
                  Jour
                </button>
              </div>
              
              {/* Grille des créneaux */}
              <div className="border rounded-md overflow-hidden shadow-md">
                {/* En-têtes des jours */}
                <div className="grid grid-cols-8 border-b">
                  <div className="p-1 text-center font-medium bg-gray-50 border-r"></div>
                  {Array.from({ length: 7 }, (_, i) => {
                    const day = addDays(currentWeekStart, i);
                    return (
                      <div
                        key={i}
                        className={`p-2 text-center font-medium ${isToday(day) ? 'bg-blue-50' : 'bg-gray-50'} border-r`}
                      >
                        <div className="text-xs font-bold">{DAYS_OF_WEEK[i]}</div>
                        <div className="text-xs">{format(day, 'dd/MM', { locale: fr })}</div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Créneaux horaires */}
                {HOURS.map((hour) => (
                  <div key={hour} className="grid grid-cols-8 border-b last:border-b-0">
                    <div className="p-1 text-center border-r bg-gray-50 text-xs font-medium">
                      {hour}:00
                    </div>
                    {Array.from({ length: 7 }, (_, i) => {
                      const day = addDays(currentWeekStart, i);
                      const { appointment: occupiedSlot, isFirstHour, isSecondHour } = isSlotOccupied(day, hour);
                      const isSelected = selectedDate === format(day, 'yyyy-MM-dd') && selectedTime === `${hour}:00`;
                      
                      return (
                        <div
                          key={i}
                          className={`p-1 border-r cursor-pointer relative ${isSelected ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-50'}`}
                          style={{ height: '60px' }}
                          onClick={() => !occupiedSlot && handleSlotSelect(day, hour)}
                        >
                          {occupiedSlot && (
                            <div 
                              className={`absolute inset-0 rounded-md shadow-md overflow-hidden ${isFirstHour ? 'z-10' : ''} ${getAppointmentColor(occupiedSlot)}`}
                              style={{
                                top: isFirstHour ? '0' : 'auto',
                                height: isFirstHour ? `${Math.ceil((new Date(occupiedSlot.end).getTime() - new Date(occupiedSlot.start).getTime()) / (1000 * 60 * 60)) * 60}px` : '60px',
                                display: !isFirstHour && !isSecondHour ? 'none' : 'block',
                                overflow: 'visible'
                              }}
                            >
                              {isFirstHour && (
                                <div className={`flex flex-col h-full p-2 ${new Date(occupiedSlot.start).getHours() < 12 || new Date(occupiedSlot.start).getHours() >= 17 ? 'text-white' : 'text-black'}`}>
                                  <div className="flex justify-between items-center">
                                    <div className="font-medium text-xs">
                                      {format(new Date(occupiedSlot.start), 'dd/MM HH:mm')}
                                    </div>
                                    <div className="text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                      {Math.ceil((new Date(occupiedSlot.end).getTime() - new Date(occupiedSlot.start).getTime()) / (1000 * 60 * 60))}h
                                    </div>
                                  </div>
                                  <div className="font-medium text-sm mt-1 leading-tight">
                                    {occupiedSlot.client?.name || occupiedSlot.title || 'Client'}
                                  </div>
                                  {occupiedSlot.location && (
                                    <div className="text-xs mt-1 leading-tight">
                                      {(() => {
                                        const postalCodeMatch = occupiedSlot.location.match(/\b(\d{5})\b/);
                                        const postalCode = postalCodeMatch ? postalCodeMatch[1] : '';
                                        
                                        const cityMatch = occupiedSlot.location.match(/\b\d{5}\s+([\w\s-]+)/);
                                        const city = cityMatch && cityMatch[1] ? cityMatch[1].trim() : '';
                                        
                                        if (postalCode && city) {
                                          return (
                                            <>
                                              <span className="font-bold">{postalCode}</span> {city.substring(0, 10)}
                                            </>
                                          );
                                        } else if (postalCode) {
                                          return <span className="font-bold">{postalCode}</span>;
                                        } else {
                                          return occupiedSlot.location.substring(0, 15);
                                        }
                                      })()}
                                    </div>
                                  )}
                                </div>
                              )}
                              {!isFirstHour && (
                                <div className="absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white opacity-70" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sélection manuelle - occupe 1/3 de la page */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-blue-800 mb-4">
              Sélection manuelle
            </h3>
            <div className="space-y-6">
              {/* Date et heure du rendez-vous */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date et heure du rendez-vous
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Date</label>
                    <input
                      type="date"
                      value={manualDate}
                      onChange={(e) => setManualDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Heure</label>
                    <input
                      type="time"
                      value={manualTime}
                      onChange={(e) => setManualTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Durée du rendez-vous */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Durée du rendez-vous
                </label>
                <select
                  value={appointmentDuration}
                  onChange={(e) => setAppointmentDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1">1 heure</option>
                  <option value="2">2 heures</option>
                  <option value="3">3 heures</option>
                  <option value="4">4 heures</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Sélection du lead et planification - uniquement visible en mode autonome */}
      {!onAppointmentSelected && (
        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ID du lead
            </label>
            <input
              type="text"
              value={selectedLead?._id || ''}
              onChange={(e) => setSelectedLead({ _id: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Entrez l'ID du lead"
            />
          </div>
          
          <div className="flex space-x-4">
            {selectedDate && selectedTime && (
              <button
                type="button"
                onClick={() => selectedLead && scheduleAppointment()}
                disabled={loading || !selectedLead}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Planification en cours...' : 'Planifier via calendrier'}
              </button>
            )}
            
            {manualDate && manualTime && (
              <button
                type="button"
                onClick={() => selectedLead && scheduleAppointment()}
                disabled={loading || !selectedLead}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Planification en cours...' : 'Planifier manuellement'}
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Si nous avons des informations sur le prospect, les afficher */}
      {prospectInfo && prospectInfo.name && (
        <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded relative">
          <p className="font-medium">Prospect sélectionné :</p>
          <p>{prospectInfo.name}</p>
          {prospectInfo.address && <p>{prospectInfo.address}</p>}
          {selectedCommercial && (
            <div className="mt-2 pt-2 border-t border-blue-200">
              <p className="font-medium">Commercial sélectionné :</p>
              <p>{selectedCommercial.name}</p>
            </div>
          )}
        </div>
      )}
      
      {!onAppointmentSelected && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={scheduleAppointment}
            disabled={loading}
            className={`px-6 py-3 bg-gradient-to-r from-[#116290] to-[#0a3d5c] text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Planification...' : 'Planifier le rendez-vous'}
          </button>
        </div>
      )}
    </div>
  );
}