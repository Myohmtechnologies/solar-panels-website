'use client';

import { useState } from 'react';
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

const DashboardPage = () => {
  // Données fictives pour les statistiques
  const stats = [
    { name: 'Total Prospects', value: '115', icon: UserGroupIcon, color: 'from-blue-500 to-blue-600' },
    { name: 'Nouveaux leads', value: '12', icon: ArrowTrendingUpIcon, color: 'from-green-500 to-green-600' },
    { name: 'RDV cette semaine', value: '8', icon: CalendarDaysIcon, color: 'from-[#0B6291] to-[#d7f0fc]' },
    { name: 'Taux de conversion', value: '24%', icon: ChartBarIcon, color: 'from-purple-500 to-purple-600' },
  ];
  
  const recentActivity = [
    { client: 'Van Minden Cédric', action: 'Signature en cours', date: '24 janvier 2025', status: 'pending' },
    { client: 'Gael Melot', action: 'Devis envoyé', date: '22 janvier 2025', status: 'sent' },
    { client: 'Maurin Robert', action: 'Appel planifié', date: '4 février 2025', status: 'scheduled' },
    { client: 'Dupont Marie', action: 'Installation terminée', date: '15 janvier 2025', status: 'completed' },
  ];

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
          {stats.map((stat) => (
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
          ))}
        </div>
        
        {/* Graphique principal et activité récente */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Graphique principal */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Performance mensuelle</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-lg bg-[#ffeb99] text-[#0B6291] font-medium">Installations</button>
                <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium">Prospects</button>
              </div>
            </div>
            
            {/* Graphique fictif */}
            <div className="h-64 w-full bg-gradient-to-br from-[#ffeb99]/30 to-[#ffb700]/30 rounded-lg flex items-end justify-between px-4 pb-4">
              {[35, 45, 60, 50, 70, 85, 75, 65, 90, 80, 95, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-6 bg-gradient-to-t from-[#0B6291] to-[#d7f0fc] rounded-t-md" 
                    style={{ height: `${height * 0.6}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][index]}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Activité récente */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Activité récente</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    activity.status === 'sent' ? 'bg-blue-100 text-blue-600' :
                    activity.status === 'scheduled' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {
                      activity.status === 'pending' ? <CheckCircleIcon className="h-5 w-5" /> :
                      activity.status === 'sent' ? <CurrencyEuroIcon className="h-5 w-5" /> :
                      activity.status === 'scheduled' ? <PhoneIcon className="h-5 w-5" /> :
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
              ))}
            </div>
            <button className="mt-6 w-full py-2 bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Voir toutes les activités
            </button>
          </div>
        </div>
        
        {/* Projets en cours et objectifs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projets en cours */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Projets en cours</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">Installation {['Nice', 'Cannes', 'Antibes'][index]}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-[#ffeb99] text-[#0B6291] font-medium">
                      {['En cours', 'Planifié', 'En attente'][index]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Client: {['Dupont', 'Martin', 'Dubois'][index]} • {['3kWc', '6kWc', '9kWc'][index]}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] h-2 rounded-full" 
                      style={{ width: `${[75, 30, 50][index]}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Progression</span>
                    <span className="text-xs font-medium text-gray-700">{[75, 30, 50][index]}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Objectifs */}
          <div className="bg-gradient-to-br from-[#ffeb99] to-[#ffb700] rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[#0B6291] mb-6">Objectifs trimestriels</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#0B6291] font-medium">Installations</span>
                  <span className="text-[#0B6291] font-medium">18/25</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-[#0B6291] h-3 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#0B6291] font-medium">Nouveaux clients</span>
                  <span className="text-[#0B6291] font-medium">45/60</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-[#0B6291] h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#0B6291] font-medium">Chiffre d'affaires</span>
                  <span className="text-[#0B6291] font-medium">85%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div className="bg-[#0B6291] h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-3 bg-white text-[#0B6291] rounded-lg font-medium hover:bg-white/90 transition-colors shadow-md">
              Définir de nouveaux objectifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;