'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface Commercial {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  basedCity?: string;
}

interface Appointment {
  id: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  client: {
    name: string;
    phone: string;
    email: string;
  };
}

export default function CommercialDashboard() {
  const router = useRouter();
  const [commercial, setCommercial] = useState<Commercial | null>(null);
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier si le commercial est connecté
    const checkAuth = async () => {
      try {
        const storedCommercial = localStorage.getItem('commercial-data');
        
        if (!storedCommercial && !localStorage.getItem('commercial-token')) {
          router.push('/commercial/login');
          return;
        }
        
        if (storedCommercial) {
          setCommercial(JSON.parse(storedCommercial));
        } else {
          // Si on a un token mais pas les données du commercial, on les récupère
          const response = await fetch('/api/auth/commercial/me', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('commercial-token')}`
            }
          });
          
          if (!response.ok) {
            throw new Error('Session expirée');
          }
          
          const data = await response.json();
          if (data.success && data.commercial) {
            setCommercial(data.commercial);
            localStorage.setItem('commercial-data', JSON.stringify(data.commercial));
          } else {
            throw new Error('Impossible de récupérer vos informations');
          }
        }
        
        // Charger les rendez-vous à venir
        await fetchUpcomingAppointments();
      } catch (error: any) {
        console.error('Erreur d\'authentification:', error);
        toast.error(error.message || 'Session expirée, veuillez vous reconnecter');
        localStorage.removeItem('commercial-token');
        localStorage.removeItem('commercial-data');
        router.push('/commercial/login');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  const fetchUpcomingAppointments = async () => {
    try {
      if (!commercial?._id) return;
      
      const today = new Date();
      const startDate = today.toISOString().split('T')[0];
      
      // Date de fin = aujourd'hui + 7 jours
      const endDate = new Date(today);
      endDate.setDate(today.getDate() + 7);
      
      const response = await fetch(`/api/appointments?commercialId=${commercial._id}&startDate=${startDate}&endDate=${endDate.toISOString().split('T')[0]}`);
      
      if (!response.ok) {
        throw new Error('Impossible de charger les rendez-vous');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setUpcomingAppointments(data.appointments || []);
      } else {
        throw new Error(data.error || 'Erreur lors du chargement des rendez-vous');
      }
    } catch (error: any) {
      console.error('Erreur:', error);
      setError(error.message || 'Erreur lors du chargement des rendez-vous');
      toast.error(error.message || 'Erreur lors du chargement des rendez-vous');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* En-tête */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="My Ohm Technologies" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
            />
            <h1 className="ml-4 text-xl font-semibold text-gray-800">Espace Commercial</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {commercial && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Bonjour,</p>
                <p className="font-medium text-gray-800">{commercial.name}</p>
              </div>
            )}
            <button 
              onClick={() => {
                localStorage.removeItem('commercial-token');
                localStorage.removeItem('commercial-data');
                router.push('/commercial/login');
              }}
              className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b">
            <Link href="/commercial/dashboard" className="px-6 py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
              Tableau de bord
            </Link>
            <Link href="/commercial/appointments" className="px-6 py-4 text-gray-600 hover:text-gray-800 font-medium">
              Mes rendez-vous
            </Link>
          </div>
        </div>

        {/* Résumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Prochains rendez-vous</h2>
            <div className="text-3xl font-bold text-blue-600 mb-2">{upcomingAppointments.length}</div>
            <p className="text-gray-600">Pour les 7 prochains jours</p>
          </div>
          
          {commercial && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Mes informations</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">{commercial.name}</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-700">{commercial.email}</span>
                </div>
                {commercial.phone && (
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">{commercial.phone}</span>
                  </div>
                )}
                {commercial.basedCity && (
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-700">{commercial.basedCity}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h2>
            <div className="space-y-2">
              <Link href="/commercial/appointments" className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <span className="text-gray-700">Voir tous mes rendez-vous</span>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Liste des rendez-vous à venir */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Rendez-vous à venir</h2>
          </div>
          
          {error && (
            <div className="p-6 text-red-600">
              {error}
            </div>
          )}
          
          {upcomingAppointments.length === 0 && !error ? (
            <div className="p-6 text-center text-gray-500">
              Aucun rendez-vous prévu pour les 7 prochains jours
            </div>
          ) : (
            <div className="divide-y">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-6 hover:bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-medium text-gray-800">{appointment.title}</h3>
                      <div className="mt-2 flex items-center text-gray-600">
                        <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{formatDate(appointment.start)}</span>
                      </div>
                      <div className="mt-1 flex items-center text-gray-600">
                        <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{formatTime(appointment.start)} - {formatTime(appointment.end)}</span>
                      </div>
                      {appointment.location && (
                        <div className="mt-1 flex items-center text-gray-600">
                          <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{appointment.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-2">Informations client</h4>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{appointment.client.name}</span>
                        </div>
                        {appointment.client.phone && (
                          <div className="flex items-center">
                            <PhoneIcon className="h-4 w-4 text-gray-400 mr-2" />
                            <a href={`tel:${appointment.client.phone}`} className="text-sm text-blue-600 hover:underline">
                              {appointment.client.phone}
                            </a>
                          </div>
                        )}
                        {appointment.client.email && (
                          <div className="flex items-center">
                            <EnvelopeIcon className="h-4 w-4 text-gray-400 mr-2" />
                            <a href={`mailto:${appointment.client.email}`} className="text-sm text-blue-600 hover:underline">
                              {appointment.client.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {appointment.description && (
                    <div className="mt-4 bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-700">{appointment.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
