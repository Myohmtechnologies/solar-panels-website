'use client';

import { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CurrencyEuroIcon, 
  SunIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Lead, LeadStatus } from '@/types';

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState([
    { name: 'Total Prospects', value: '0', icon: UserGroupIcon, color: 'from-blue-500 to-blue-600' },
    { name: 'Nouveaux leads', value: '0', icon: ArrowTrendingUpIcon, color: 'from-green-500 to-green-600' },
    { name: 'RDV cette semaine', value: '0', icon: CalendarDaysIcon, color: 'from-[#0B6291] to-[#d7f0fc]' },
  ]);
  const [monthlyPerformance, setMonthlyPerformance] = useState<{
    commercial: number[];
    installation: number[];
  }>({ commercial: Array(12).fill(0), installation: Array(12).fill(0) });
  const [activeMetric, setActiveMetric] = useState<'commercial' | 'installation'>('commercial');
  
  const [recentActivity, setRecentActivity] = useState<{
    client: string;
    action: string;
    date: string;
    status: string;
  }[]>([]);
  
  // Fonction pour récupérer les leads depuis l'API
  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des leads');
      }
      const data = await response.json();
      const leadsData = data.data;
      setLeads(leadsData);
      updateStats(leadsData);
      updateRecentActivity(leadsData);
      updateMonthlyPerformance(leadsData);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fonction pour mettre à jour les performances mensuelles
  const updateMonthlyPerformance = (leads: Lead[]) => {
    // Initialiser des tableaux pour compter les rendez-vous commerciaux et les installations par mois
    const commercialData = Array(12).fill(0);
    const installationData = Array(12).fill(0);
    
    // Parcourir tous les leads
    leads.forEach(lead => {
      // Compter les rendez-vous commerciaux (statut RDV_SCHEDULED)
      if (lead.status === LeadStatus.RDV_SCHEDULED && lead.nextAction && 'plannedDate' in lead.nextAction && lead.nextAction.plannedDate) {
        const plannedDate = lead.nextAction.plannedDate;
        if (typeof plannedDate === 'string' || typeof plannedDate === 'number') {
          const appointmentDate = new Date(plannedDate);
          const month = appointmentDate.getMonth();
          commercialData[month]++;
        }
      }
      
      // Compter les installations (statut INSTALLATION)
      if (lead.status === LeadStatus.INSTALLATION) {
        // Utiliser la date de création comme approximation si nous n'avons pas de date d'installation spécifique
        const creationDate = new Date(lead.createdAt);
        const month = creationDate.getMonth();
        installationData[month]++;
      }
    });
    
    setMonthlyPerformance({
      commercial: commercialData,
      installation: installationData
    });
  };
  
  // Fonction pour mettre à jour l'activité récente
  const updateRecentActivity = (leads: Lead[]) => {
    // Trier les leads par date de création (les plus récents en premier)
    const sortedLeads = [...leads].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    
    // Prendre les 4 leads les plus récents
    const recentLeads = sortedLeads.slice(0, 4);
    
    // Convertir les leads en activités
    const activities = recentLeads.map(lead => {
      let action = 'Nouveau prospect';
      let status = 'new';
      
      // Déterminer l'action et le statut en fonction du statut du lead
      switch(lead.status) {
        case LeadStatus.CONTACTED:
          action = 'Contacté';
          status = 'sent';
          break;
        case LeadStatus.RDV_SCHEDULED:
          action = 'RDV planifié';
          status = 'scheduled';
          break;
        case LeadStatus.TECHNICAL_VISIT:
          action = 'Visite technique';
          status = 'scheduled';
          break;
        case LeadStatus.DEMARCHE_ADMINISTRATIF:
          action = 'Démarches administratives';
          status = 'pending';
          break;
        case LeadStatus.INSTALLATION:
          action = 'Installation en cours';
          status = 'pending';
          break;
        case LeadStatus.CONSUAL:
          action = 'Consuel en attente';
          status = 'pending';
          break;
        case LeadStatus.RACORDEMENT_EDF:
          action = 'Raccordement EDF';
          status = 'pending';
          break;
        case LeadStatus.COMPLETED:
          action = 'Installation terminée';
          status = 'completed';
          break;
        default:
          action = 'Nouveau prospect';
          status = 'new';
      }
      
      // Formater la date en français
      const date = new Date(lead.createdAt);
      const formattedDate = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      
      return {
        client: lead.name,
        action,
        date: formattedDate,
        status
      };
    });
    
    setRecentActivity(activities);
  };
  
  // Fonction pour mettre à jour les statistiques
  const updateStats = (leads: Lead[]) => {
    // Calculer le nombre total de prospects
    const totalProspects = leads.length;
    
    // Calculer le nombre de nouveaux leads (statut NEW)
    const newLeads = leads.filter(lead => lead.status === LeadStatus.NEW).length;
    
    // Calculer le nombre de RDV cette semaine
    const today = new Date();
    const currentDay = today.getDay(); // 0 = dimanche, 1 = lundi, etc.
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Si aujourd'hui est dimanche, on prend lundi dernier
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    // Compter uniquement les RDV fixés (status RDV_SCHEDULED) pour la semaine en cours
    const appointmentsThisWeek = leads.filter(lead => {
      if (lead.status === LeadStatus.RDV_SCHEDULED && lead.nextAction && 'plannedDate' in lead.nextAction && lead.nextAction.plannedDate) {
        // S'assurer que plannedDate est une chaîne ou un nombre avant de créer la date
        const plannedDate = lead.nextAction.plannedDate;
        if (typeof plannedDate === 'string' || typeof plannedDate === 'number') {
          const appointmentDate = new Date(plannedDate);
          return appointmentDate >= startOfWeek && appointmentDate <= endOfWeek;
        }
      }
      return false;
    }).length;
    
    // Mettre à jour les statistiques
    setStats([
      { name: 'Total Prospects', value: totalProspects.toString(), icon: UserGroupIcon, color: 'from-blue-500 to-blue-600' },
      { name: 'Nouveaux leads', value: newLeads.toString(), icon: ArrowTrendingUpIcon, color: 'from-green-500 to-green-600' },
      { name: 'RDV cette semaine', value: appointmentsThisWeek.toString(), icon: CalendarDaysIcon, color: 'from-[#0B6291] to-[#d7f0fc]' },
    ]);
  };
  
  // Charger les leads au chargement de la page
  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête du dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau de bord
          </h1>
          <p className="mt-2 text-gray-600">
            Bienvenue sur votre espace de gestion MyOhm Technologies
          </p>
        </div>
        
        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {isLoading ? (
            // Afficher des squelettes de chargement
            [...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 animate-pulse p-4 flex justify-between items-center h-24">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="bg-gray-300 rounded-full p-2 h-10 w-10"></div>
                </div>
              </div>
            ))
          ) : (
            // Afficher les statistiques réelles
            stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${stat.color} p-4 flex justify-between items-center`}>
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-75">{stat.name}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="bg-white/20 rounded-full p-2">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Graphique principal et activité récente */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Graphique principal */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Performance mensuelle</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setActiveMetric('commercial')}
                  className={`px-3 py-1 text-sm rounded-lg ${activeMetric === 'commercial' ? 'bg-[#ffeb99] text-[#0B6291]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium`}
                >
                  RDV Commercial
                </button>
                <button 
                  onClick={() => setActiveMetric('installation')}
                  className={`px-3 py-1 text-sm rounded-lg ${activeMetric === 'installation' ? 'bg-[#ffeb99] text-[#0B6291]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} font-medium`}
                >
                  Installations
                </button>
              </div>
            </div>
            
            {isLoading ? (
              // Afficher un squelette de chargement pour le graphique
              <div className="h-64 w-full bg-gray-100 rounded-lg animate-pulse flex items-end justify-between px-4 pb-4">
                {Array(12).fill(0).map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-6 bg-gray-200 rounded-t-md" 
                      style={{ height: `${Math.random() * 60}%` }}
                    ></div>
                    <div className="w-6 h-3 bg-gray-200 rounded mt-2"></div>
                  </div>
                ))}
              </div>
            ) : (
              // Graphique dynamique
              <div className="h-64 w-full bg-gradient-to-br from-[#ffeb99]/30 to-[#ffb700]/30 rounded-lg flex items-end justify-between px-4 pb-4">
                {monthlyPerformance[activeMetric].map((count, index) => {
                  // Calculer la hauteur relative (max 100%)
                  const maxCount = Math.max(...monthlyPerformance[activeMetric], 1); // Éviter la division par zéro
                  const heightPercentage = (count / maxCount) * 100;
                  
                  // Définir la couleur du graphique en fonction de la métrique active
                  const gradientColors = activeMetric === 'commercial' 
                    ? 'from-[#0B6291] to-[#d7f0fc]' 
                    : 'from-[#ffb700] to-[#ffeb99]';
                  
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex flex-col items-center justify-end h-[calc(60%)]">
                        {/* Afficher le nombre au-dessus de la barre si > 0 */}
                        {count > 0 && (
                          <span className="text-xs font-medium mb-1 text-gray-700">{count}</span>
                        )}
                        <div 
                          className={`w-6 bg-gradient-to-t ${gradientColors} rounded-t-md`} 
                          style={{ height: `${heightPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-2">{['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][index]}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Activité récente */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Activité récente</h2>
            <div className="space-y-4">
              {isLoading ? (
                // Afficher des squelettes de chargement
                [...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse mr-4"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                ))
              ) : recentActivity.length > 0 ? (
                // Afficher les activités réelles
                recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                      activity.status === 'sent' ? 'bg-blue-100 text-blue-600' :
                      activity.status === 'scheduled' ? 'bg-purple-100 text-purple-600' :
                      activity.status === 'new' ? 'bg-gray-100 text-gray-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {
                        activity.status === 'pending' ? <CheckCircleIcon className="h-5 w-5" /> :
                        activity.status === 'sent' ? <CurrencyEuroIcon className="h-5 w-5" /> :
                        activity.status === 'scheduled' ? <PhoneIcon className="h-5 w-5" /> :
                        activity.status === 'new' ? <UserGroupIcon className="h-5 w-5" /> :
                        <SunIcon className="h-5 w-5" />
                      }
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.client}</p>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-500">{activity.action}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Aucune activité
                <div className="text-center py-4 text-gray-500">
                  Aucune activité récente
                </div>
              )}
            </div>
            <button 
              onClick={() => window.location.href = '/dashboard/leads'}
              className="mt-6 w-full py-2 bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Voir tous les prospects
            </button>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default DashboardPage;