'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { 
  ArrowLeftIcon, 
  PencilIcon, 
  TrashIcon, 
  CheckIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  ChevronDownIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface Task {
  _id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  commercialId: string;
  commercialName: string;
  taskType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface TaskFormData {
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: string;
}

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    type: '',
    status: ''
  });
  
  const router = useRouter();
  
  // Charger les détails de la tâche
  useEffect(() => {
    async function fetchTaskDetails() {
      try {
        setLoading(true);
        const response = await fetch(`/api/tasks/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des détails de la tâche');
        }
        
        const data = await response.json();
        setTask(data.task);
        
        // Initialiser le formulaire avec les données de la tâche
        if (data.task) {
          const startDate = parseISO(data.task.start);
          const endDate = parseISO(data.task.end);
          
          setFormData({
            title: data.task.title,
            description: data.task.description || '',
            date: format(startDate, 'yyyy-MM-dd'),
            startTime: format(startDate, 'HH:mm'),
            endTime: format(endDate, 'HH:mm'),
            type: data.task.taskType,
            status: data.task.status
          });
        }
      } catch (error) {
        console.error('Erreur:', error);
        setError('Impossible de charger les détails de la tâche');
      } finally {
        setLoading(false);
      }
    }
    
    fetchTaskDetails();
  }, [params.id]);
  
  // Obtenir la couleur selon le type de tâche
  function getTaskColor(taskType: string): string {
    switch (taskType) {
      case 'door-to-door':
        return 'bg-[#ffb700]'; // Jaune principal du site
      case 'technical-visit':
        return 'bg-[#0e8a5f]'; // Vert
      case 'follow-up':
        return 'bg-[#3182ce]'; // Bleu clair
      case 'admin':
        return 'bg-[#805ad5]'; // Violet
      default:
        return 'bg-gray-500';
    }
  }
  
  // Obtenir le libellé du type de tâche
  function getTaskTypeLabel(taskType: string): string {
    switch (taskType) {
      case 'door-to-door':
        return 'Porte à porte';
      case 'technical-visit':
        return 'Visite technique';
      case 'follow-up':
        return 'Suivi client';
      case 'admin':
        return 'Administratif';
      default:
        return 'Autre';
    }
  }
  
  // Obtenir le libellé du statut
  function getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'À faire';
      case 'in-progress':
        return 'En cours';
      case 'completed':
        return 'Terminée';
      case 'cancelled':
        return 'Annulée';
      default:
        return 'Inconnu';
    }
  }
  
  // Marquer une tâche comme terminée
  async function markTaskAsCompleted() {
    if (!task) return;
    
    try {
      const response = await fetch(`/api/tasks/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'completed' }),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du statut de la tâche');
      }
      
      // Mettre à jour l'état local
      setTask({
        ...task,
        status: 'completed'
      });
      
      setFormData({
        ...formData,
        status: 'completed'
      });
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de mettre à jour le statut de la tâche');
    }
  }
  
  // Gérer la soumission du formulaire de modification
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!task) return;
    
    try {
      // Créer la date de début et de fin
      const startDate = `${formData.date}T${formData.startTime}:00`;
      const endDate = `${formData.date}T${formData.endTime}:00`;
      
      const updatedTask = {
        title: formData.title,
        description: formData.description,
        start: startDate,
        end: endDate,
        taskType: formData.type,
        status: formData.status
      };
      
      const response = await fetch(`/api/tasks/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de la tâche');
      }
      
      const data = await response.json();
      
      // Mettre à jour l'état local
      setTask(data.task);
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de mettre à jour la tâche');
    }
  }
  
  // Supprimer la tâche
  async function deleteTask() {
    try {
      const response = await fetch(`/api/tasks/${params.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de la tâche');
      }
      
      // Rediriger vers la page de planning
      router.push('/dashboard/planning');
    } catch (error) {
      console.error('Erreur:', error);
      setError('Impossible de supprimer la tâche');
    }
  }
  
  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6 flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </DashboardLayout>
    );
  }
  
  if (error) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="bg-red-50 p-4 rounded-md text-red-700 mb-4">
            {error}
          </div>
          <button
            onClick={() => router.push('/dashboard/planning')}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Retour au planning
          </button>
        </div>
      </DashboardLayout>
    );
  }
  
  if (!task) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="bg-yellow-50 p-4 rounded-md text-yellow-700 mb-4">
            Tâche non trouvée
          </div>
          <button
            onClick={() => router.push('/dashboard/planning')}
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Retour au planning
          </button>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <button
            onClick={() => router.push('/dashboard/planning')}
            className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200 font-medium"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1.5" />
            Retour au planning
          </button>
          
          <div className="flex flex-wrap gap-2">
            {task.status !== 'completed' && (
              <button
                onClick={markTaskAsCompleted}
                className="flex items-center px-4 py-2 bg-[#116290] text-white rounded-lg hover:bg-[#0e5075] transition-colors duration-200 shadow-sm"
              >
                <CheckIcon className="h-5 w-5 mr-1.5" />
                Marquer comme terminée
              </button>
            )}
            
            {!isEditing && (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-[#116290] text-white rounded-lg hover:bg-[#0e5075] transition-colors duration-200 shadow-sm"
                >
                  <PencilIcon className="h-5 w-5 mr-1.5" />
                  Modifier
                </button>
                
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
                >
                  <TrashIcon className="h-5 w-5 mr-1.5" />
                  Supprimer
                </button>
              </>
            )}
          </div>
        </div>
        
        {isEditing ? (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-6">
              <PencilIcon className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Modifier la tâche</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Titre de la tâche
                </label>
                <input
                  type="text"
                  id="task-title"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 px-3"
                  placeholder="Ex: Visite chez M. Dupont"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
                      value={formData.startTime}
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
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
                      value={formData.endTime}
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="task-type" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Type de tâche
                  </label>
                  <div className="relative">
                    <select
                      id="task-type"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-3 pr-10 appearance-none"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
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
                
                <div>
                  <label htmlFor="task-status" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Statut
                  </label>
                  <div className="relative">
                    <select
                      id="task-status"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2.5 pl-3 pr-10 appearance-none"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      required
                    >
                      <option value="pending">À faire</option>
                      <option value="in-progress">En cours</option>
                      <option value="completed">Terminée</option>
                      <option value="cancelled">Annulée</option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                  onClick={() => setIsEditing(false)}
                >
                  Annuler
                </button>
                
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#116290] text-white rounded-lg hover:bg-[#0e5075] focus:outline-none focus:ring-2 focus:ring-[#116290] focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full mr-3 ${getTaskColor(task.taskType)}`}></div>
                <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start">
                  <UserIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1.5">Commercial</h2>
                    <p className="text-gray-900 font-medium">{task.commercialName}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`h-5 w-5 rounded-md mr-3 flex-shrink-0 ${getTaskColor(task.taskType)} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{task.taskType.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1.5">Type de tâche</h2>
                    <p className="text-gray-900 font-medium">{getTaskTypeLabel(task.taskType)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1.5">Date et heure</h2>
                    <p className="text-gray-900 font-medium capitalize">
                      {format(parseISO(task.start), 'EEEE d MMMM yyyy', { locale: fr })}
                    </p>
                    <div className="flex items-center mt-1">
                      <ClockIcon className="h-4 w-4 text-gray-400 mr-1.5" />
                      <p className="text-gray-700">
                        {format(parseISO(task.start), 'HH:mm')} - {format(parseISO(task.end), 'HH:mm')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0 flex items-center justify-center">
                    <div className={`h-3 w-3 rounded-full ${
                      task.status === 'completed' ? 'bg-[#0e8a5f]' :
                      task.status === 'in-progress' ? 'bg-[#116290]' :
                      task.status === 'cancelled' ? 'bg-red-500' :
                      'bg-[#ffb700]'
                    }`}></div>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1.5">Statut</h2>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${
                      task.status === 'completed' ? 'bg-[#ecfdf5] text-[#0e8a5f]' :
                      task.status === 'in-progress' ? 'bg-[#f0f9ff] text-[#116290]' :
                      task.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-[#fff8e6] text-[#b45309]'
                    }`}>
                      {getStatusLabel(task.status)}
                    </span>
                  </div>
                </div>
              </div>
              
              {task.description && (
                <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h2 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">ℹ️</span> Description
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">{task.description}</p>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4 mt-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-gray-500">
                  <span className="flex items-center">
                    <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                    Créée le {format(parseISO(task.createdAt), 'dd/MM/yyyy à HH:mm')}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-3.5 w-3.5 mr-1" />
                    Dernière mise à jour le {format(parseISO(task.updatedAt), 'dd/MM/yyyy à HH:mm')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Modal de confirmation de suppression */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-100 animate-fadeIn">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Confirmer la suppression</h2>
                <p className="text-gray-600">Êtes-vous sûr de vouloir supprimer cette tâche ? Cette action est irréversible.</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium"
              >
                Annuler
              </button>
              
              <button
                onClick={deleteTask}
                className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm flex items-center"
              >
                <TrashIcon className="h-5 w-5 mr-1.5" />
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
