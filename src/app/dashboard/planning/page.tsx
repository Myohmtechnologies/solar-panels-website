'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  UserIcon, 
  MapPinIcon, 
  InformationCircleIcon, 
  CalendarIcon,
  PlusIcon,
  ChevronDownIcon,
  XMarkIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import '@/styles/calendar.css';

// Types
interface Commercial {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

interface Appointment {
  _id: string;
  title: string;
  start: string;
  end: string;
  commercialId: string;
  commercialName: string;
  leadId?: string;
  leadName?: string;
  address?: string;
  location?: string;
  status: string;
  color?: string;
  type: 'appointment' | 'task';
  description?: string;
  taskType?: string; // Type de tâche pour les événements de type 'task'
}

interface TaskFormData {
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
}

export default function PlanningPage() {
  const [commercials, setCommercials] = useState<Commercial[]>([]);
  const [selectedCommercial, setSelectedCommercial] = useState<Commercial | null>(null);
  const [selectedCommercialForTask, setSelectedCommercialForTask] = useState<Commercial | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [commercialAppointments, setCommercialAppointments] = useState<{[key: string]: Appointment[]}>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskFormData, setTaskFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '09:00',
    endTime: '10:00',
    type: 'door-to-door'
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const calendarRef = useRef<FullCalendar | null>(null);
  const calendarRefs = useRef<{[key: string]: FullCalendar | null}>({});
  const router = useRouter();

  // Charger la liste des commerciaux
  async function fetchCommercials() {
    try {
      const response = await fetch('/api/commercials');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des commerciaux');
      }
      
      const data = await response.json();
      return data.commercials || [];
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de charger les commerciaux');
      return [];
    }
  }
  
  // Récupérer les commerciaux au chargement
  useEffect(() => {
    async function fetchData() {
      try {
        const commercialsData = await fetchCommercials();
        setCommercials(commercialsData);
        
        if (commercialsData.length > 0) {
          setSelectedCommercial(commercialsData[0]);
          setSelectedCommercialForTask(commercialsData[0]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setError('Impossible de charger les données');
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // Récupérer les rendez-vous pour tous les commerciaux
  useEffect(() => {
    if (commercials.length > 0) {
      fetchAllAppointments();
    }
  }, [commercials]);

  async function fetchAllAppointments() {
    try {
      setLoading(true);
      
      const currentDate = new Date();
      const startOfMonthDate = startOfMonth(currentDate);
      const endOfMonthDate = endOfMonth(currentDate);
      
      // Formater les dates pour les requêtes API
      const startDateStr = format(startOfMonthDate, 'yyyy-MM-dd');
      const endDateStr = format(endOfMonthDate, 'yyyy-MM-dd');
      
      const appointmentsByCommercial: {[key: string]: Appointment[]} = {};
      
      await Promise.all(commercials.map(async (commercial) => {
        try {
          // Récupérer les rendez-vous
          const response = await fetch(`/api/appointments?commercialId=${commercial._id}&startDate=${startDateStr}&endDate=${endDateStr}`);
          
          if (!response.ok) {
            console.error(`Erreur HTTP ${response.status} pour les rendez-vous de ${commercial.name}`);
            throw new Error(`Erreur lors de la récupération des rendez-vous pour ${commercial.name}`);
          }
          
          const appointmentsData = await response.json();
          console.log(`Rendez-vous pour ${commercial.name}:`, appointmentsData);
          
          // Récupérer les tâches
          const tasksResponse = await fetch(`/api/tasks?commercialId=${commercial._id}&startDate=${startDateStr}&endDate=${endDateStr}`);
          
          if (!tasksResponse.ok) {
            console.error(`Erreur HTTP ${tasksResponse.status} pour les tâches de ${commercial.name}`);
            throw new Error(`Erreur lors de la récupération des tâches pour ${commercial.name}`);
          }
          
          const tasksData = await tasksResponse.json();
          console.log(`Tâches pour ${commercial.name}:`, tasksData);
          
          // Formater les rendez-vous
          const formattedAppointments = (appointmentsData.appointments || []).map((appointment: any) => ({
            _id: appointment.id || appointment._id,
            title: appointment.title || `Rendez-vous avec ${appointment.client?.name || 'Client'}`,
            start: appointment.start,
            end: appointment.end,
            type: 'appointment',
            description: appointment.description || '',
            address: appointment.location || '',
            leadName: appointment.client?.name || '',
            commercialName: appointment.commercial?.name || commercial.name,
            color: '#116290', // Bleu principal
            status: appointment.status || 'pending'
          }));
          
          // Formater les tâches
          const formattedTasks = (tasksData.tasks || []).map((task: any) => ({
            _id: task._id,
            title: task.title,
            start: task.start,
            end: task.end,
            type: 'task',
            description: task.description || '',
            address: '',
            leadName: '',
            commercialName: task.commercialName || commercial.name,
            taskType: task.taskType,
            color: getTaskColor(task.taskType),
            status: task.status || 'pending'
          }));
          
          // Stocker les événements pour ce commercial
          appointmentsByCommercial[commercial._id] = [...formattedAppointments, ...formattedTasks];
        } catch (err) {
          console.error(`Erreur pour ${commercial.name}:`, err);
          // Continuer avec les autres commerciaux même si un échoue
          appointmentsByCommercial[commercial._id] = [];
        }
      }));
      
      // Mettre à jour l'état
      setCommercialAppointments(appointmentsByCommercial);
      
      // Mettre à jour la liste complète pour la rétrocompatibilité
      const allAppointments = Object.values(appointmentsByCommercial).flat();
      setAppointments(allAppointments);
      
      setLoading(false);
      setError(null); // Réinitialiser l'erreur si tout s'est bien passé
      
    } catch (error) {
      console.error('Erreur globale:', error);
      setError('Impossible de récupérer les rendez-vous');
      setLoading(false);
    }
  }

  // Obtenir une couleur selon le type de tâche
  function getTaskColor(taskType: string): string {
    switch (taskType) {
      case 'door-to-door':
        return '#ffb700'; // Jaune principal du site
      case 'technical-visit':
        return '#0e8a5f'; // Vert
      case 'follow-up':
        return '#3182ce'; // Bleu clair
      case 'admin':
        return '#805ad5'; // Violet
      default:
        return '#6b7280'; // Gris
    }
  }

  // Gérer le clic sur une date du calendrier
  function handleDateClick(info: any, commercial: Commercial) {
    setSelectedDate(info.date);
    setSelectedCommercialForTask(commercial);
    setTaskFormData({
      ...taskFormData,
      date: format(info.date, 'yyyy-MM-dd'),
      startTime: '09:00',
      endTime: '10:00'
    });
    setShowTaskModal(true);
  }

  // Gérer le clic sur un événement du calendrier
  function handleEventClick(info: any) {
    const eventId = info.event.id;
    const eventType = info.event.extendedProps.type;
    
    if (eventType === 'appointment') {
      // Rediriger vers la page de détail du rendez-vous
      router.push(`/dashboard/appointments/${eventId}`);
    } else if (eventType === 'task') {
      // Afficher les détails de la tâche
      router.push(`/dashboard/planning/tasks/${eventId}`);
    }
  }

  // Gérer la soumission du formulaire de tâche
  async function handleTaskSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!selectedCommercialForTask) return;
    
    try {
      // Créer la date de début et de fin
      const startDate = `${taskFormData.date}T${taskFormData.startTime}:00`;
      const endDate = `${taskFormData.date}T${taskFormData.endTime}:00`;
      
      const taskData = {
        title: taskFormData.title,
        description: taskFormData.description,
        start: startDate,
        end: endDate,
        commercialId: selectedCommercialForTask._id,
        commercialName: selectedCommercialForTask.name,
        taskType: taskFormData.type,
        status: 'pending'
      };
      
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la création de la tâche');
      }
      
      // Fermer le modal et rafraîchir les données
      setShowTaskModal(false);
      fetchAllAppointments();
      
      // Réinitialiser le formulaire
      setTaskFormData({
        title: '',
        description: '',
        date: format(new Date(), 'yyyy-MM-dd'),
        startTime: '09:00',
        endTime: '10:00',
        type: 'door-to-door'
      });
      
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de créer la tâche');
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Planning des commerciaux</h1>
            <p className="text-gray-500">Gérez les rendez-vous et les tâches de vos commerciaux</p>
          </div>
          
          {/* Bouton d'ajout de tâche */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowTaskModal(true)}
              className="px-4 py-2.5 bg-[#116290] text-white rounded-lg hover:bg-[#0e5075] focus:outline-none focus:ring-2 focus:ring-[#116290] focus:ring-offset-2 shadow-sm transition-all duration-200 flex items-center justify-center"
            >
              <PlusIcon className="h-5 w-5 mr-1.5" />
              Ajouter une tâche
            </button>
          </div>
        </div>
        
        {/* Onglets des commerciaux */}
        <div className="mb-6 overflow-x-auto">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all' ? 'bg-[#116290] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Tous les commerciaux
            </button>
            
            {commercials.map((commercial) => (
              <button
                key={commercial._id}
                onClick={() => setActiveTab(commercial._id)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === commercial._id ? 'bg-[#116290] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {commercial.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Légende des couleurs */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Légende</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#116290] mr-2"></div>
              <span className="text-sm text-gray-600">Rendez-vous</span>
            </div>
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffb700] mr-2"></div>
              <span className="text-sm text-gray-600">Porte à porte</span>
            </div>
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#0e8a5f] mr-2"></div>
              <span className="text-sm text-gray-600">Visite technique</span>
            </div>
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#3182ce] mr-2"></div>
              <span className="text-sm text-gray-600">Suivi client</span>
            </div>
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#805ad5] mr-2"></div>
              <span className="text-sm text-gray-600">Administratif</span>
            </div>
          </div>
        </div>
        
        {/* Message d'erreur */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        {/* Calendriers */}
        {loading ? (
          <div className="flex justify-center items-center h-96 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#116290]"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Afficher tous les commerciaux ou seulement celui sélectionné */}
            {(activeTab === 'all' ? commercials : commercials.filter(c => c._id === activeTab)).map((commercial) => (
              <div key={commercial._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <UserIcon className="h-5 w-5 text-[#116290] mr-2" />
                      <h2 className="text-lg font-semibold text-gray-900">{commercial.name}</h2>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCommercialForTask(commercial);
                        setShowTaskModal(true);
                      }}
                      className="px-3 py-1.5 bg-[#116290] text-white rounded-lg hover:bg-[#0e5075] text-sm flex items-center"
                    >
                      <PlusIcon className="h-4 w-4 mr-1" />
                      Ajouter une tâche
                    </button>
                  </div>
                </div>
                
                <FullCalendar
                  ref={(el) => {
                    if (el) {
                      calendarRefs.current[commercial._id] = el;
                    }
                  }}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  initialView="timeGridWeek"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                  }}
                  events={commercialAppointments[commercial._id]?.map((appointment: Appointment) => ({
                    id: appointment._id,
                    title: appointment.title,
                    start: appointment.start,
                    end: appointment.end,
                    color: appointment.color,
                    extendedProps: {
                      type: appointment.type,
                      description: appointment.description,
                      address: appointment.address,
                      leadName: appointment.leadName,
                      commercialName: appointment.commercialName,
                      status: appointment.status,
                      taskType: appointment.taskType
                    },
                    // Attribut personnalisé pour le CSS
                    classNames: ['custom-event'],
                    // Attribut data-event-type pour le ciblage CSS
                    dataEventType: appointment.type === 'appointment' ? 'appointment' : (appointment.taskType || 'default')
                  })) || []}
                  eventContent={(eventInfo) => {
                    const isTimeGridView = eventInfo.view.type.includes('timeGrid');
                    const isDayGridView = eventInfo.view.type === 'dayGridMonth';
                    
                    return (
                      <div className={`overflow-hidden ${isTimeGridView ? 'p-2' : 'p-1'}`}>
                        <div className="font-semibold text-xs mb-0.5">{eventInfo.event.title}</div>
                        
                        {eventInfo.event.extendedProps.leadName && isTimeGridView && (
                          <div className="text-xs flex items-center text-white/90 mb-0.5">
                            <UserIcon className="h-3 w-3 mr-1 inline" />
                            {eventInfo.event.extendedProps.leadName}
                          </div>
                        )}
                        
                        {eventInfo.event.extendedProps.address && isTimeGridView && (
                          <div className="text-xs flex items-center text-white/90 mb-0.5">
                            <MapPinIcon className="h-3 w-3 mr-1 inline" />
                            <span className="truncate">{eventInfo.event.extendedProps.address}</span>
                          </div>
                        )}
                        
                        {eventInfo.event.extendedProps.description && isTimeGridView && (
                          <div className="text-xs flex items-start text-white/90">
                            <InformationCircleIcon className="h-3 w-3 mr-1 inline mt-0.5 flex-shrink-0" />
                            <span className="truncate">{eventInfo.event.extendedProps.description}</span>
                          </div>
                        )}
                        
                        {/* Version compacte pour la vue mensuelle */}
                        {isDayGridView && (eventInfo.event.extendedProps.address || eventInfo.event.extendedProps.leadName) && (
                          <div className="text-xs truncate text-white/90">
                            {eventInfo.event.extendedProps.leadName || eventInfo.event.extendedProps.address}
                          </div>
                        )}
                      </div>
                    );
                  }}
                  locale={frLocale}
                  firstDay={1}
                  allDaySlot={false}
                  slotMinTime="08:00:00"
                  slotMaxTime="20:00:00"
                  height="auto"
                  nowIndicator={true}
                  businessHours={{
                    daysOfWeek: [1, 2, 3, 4, 5], // Lundi au vendredi
                    startTime: '09:00',
                    endTime: '18:00',
                  }}
                  dateClick={(info) => handleDateClick(info, commercial)}
                  eventClick={handleEventClick}
                  dayMaxEvents={3}
                  moreLinkClick="popover"
                  eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Modal d'ajout de tâche */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-100 animate-fadeIn">
            <div className="flex items-center mb-6">
              <CalendarIcon className="h-6 w-6 text-[#116290] mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                {selectedDate 
                  ? `Ajouter une tâche pour le ${format(selectedDate, 'dd MMMM yyyy', { locale: fr })}`
                  : 'Ajouter une tâche'}
              </h2>
            </div>
            
            {/* Sélecteur de commercial */}
            <div className="mb-4">
              <label htmlFor="commercial-select" className="block text-sm font-medium text-gray-700 mb-1.5">
                Commercial
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="commercial-select"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-10 pr-10 appearance-none"
                  value={selectedCommercialForTask?._id || ''}
                  onChange={(e) => {
                    const selected = commercials.find(c => c._id === e.target.value);
                    setSelectedCommercialForTask(selected || null);
                  }}
                  required
                >
                  {commercials.map((commercial) => (
                    <option key={commercial._id} value={commercial._id}>
                      {commercial.name}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <form onSubmit={handleTaskSubmit}>
              <div className="mb-4">
                <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Titre de la tâche
                </label>
                <input
                  type="text"
                  id="task-title"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 px-3"
                  placeholder="Ex: Visite chez M. Dupont"
                  value={taskFormData.title}
                  onChange={(e) => setTaskFormData({ ...taskFormData, title: e.target.value })}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description
                </label>
                <textarea
                  id="task-description"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 px-3"
                  rows={3}
                  placeholder="Détails supplémentaires sur la tâche..."
                  value={taskFormData.description}
                  onChange={(e) => setTaskFormData({ ...taskFormData, description: e.target.value })}
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="task-date" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="task-date"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-10 pr-3"
                    value={taskFormData.date}
                    onChange={(e) => setTaskFormData({ ...taskFormData, date: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="task-start-time" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Heure de début
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ClockIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="task-start-time"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-10 pr-3"
                      value={taskFormData.startTime}
                      onChange={(e) => setTaskFormData({ ...taskFormData, startTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="task-end-time" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Heure de fin
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ClockIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="task-end-time"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-10 pr-3"
                      value={taskFormData.endTime}
                      onChange={(e) => setTaskFormData({ ...taskFormData, endTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="task-type" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Type de tâche
                </label>
                <div className="relative">
                  <select
                    id="task-type"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-3 pr-10 appearance-none"
                    value={taskFormData.type}
                    onChange={(e) => setTaskFormData({ ...taskFormData, type: e.target.value })}
                    required
                  >
                    <option value="door-to-door">Porte à porte</option>
                    <option value="technical-visit">Visite technique</option>
                    <option value="follow-up">Suivi client</option>
                    <option value="admin">Administratif</option>
                  </select>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                  onClick={() => setShowTaskModal(false)}
                >
                  Annuler
                </button>
                
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
