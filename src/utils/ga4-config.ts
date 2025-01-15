// Configuration des rapports personnalisés GA4
export const GA4_CONFIG = {
  // Configuration des conversions
  conversions: {
    simulator: {
      name: 'Simulateur Solaire',
      steps: [
        { id: 'simulator_start', value: 0 },
        { id: 'simulator_complete', value: 50 },
        { id: 'simulator_thank_you', value: 100 }
      ]
    }
  },

  // Configuration des entonnoirs de conversion
  funnels: {
    simulator: {
      name: 'Entonnoir Simulateur',
      steps: [
        { name: 'Vue Simulateur', event: 'page_view', params: { page_path: '/simulator' } },
        { name: 'Type de Propriété', event: 'simulator_step_view', params: { step: 'property_type' } },
        { name: 'Facture Énergie', event: 'simulator_step_view', params: { step: 'energy_bill' } },
        { name: 'Équipements', event: 'simulator_step_view', params: { step: 'equipment' } },
        { name: 'Formulaire Contact', event: 'simulator_step_view', params: { step: 'contact' } },
        { name: 'Conversion', event: 'page_view', params: { page_path: '/merci' } }
      ]
    }
  },

  // Configuration des segments d'audience
  audiences: {
    qualified_leads: {
      name: 'Leads Qualifiés',
      conditions: [
        { event: 'simulator_conversion', params: { conversion_step: 'complete' } },
        { event: 'lead_generated', params: { lead_value: 100 } }
      ]
    },
    abandoned_simulator: {
      name: 'Abandons Simulateur',
      conditions: [
        { event: 'simulator_start' },
        { not: { event: 'simulator_conversion', params: { conversion_step: 'complete' } } }
      ]
    }
  },

  // Configuration des tableaux de bord personnalisés
  dashboards: {
    simulator_performance: {
      name: 'Performance Simulateur',
      cards: [
        {
          name: 'Taux de Conversion Global',
          metric: 'conversions',
          filter: { event: 'simulator_conversion', params: { conversion_step: 'thank_you_page' } }
        },
        {
          name: 'Taux d\'Abandon par Étape',
          metric: 'abandonment_rate',
          dimension: 'step'
        },
        {
          name: 'Types de Propriété Populaires',
          metric: 'count',
          dimension: 'property_type'
        },
        {
          name: 'Factures d\'Énergie Moyennes',
          metric: 'count',
          dimension: 'energy_bill'
        }
      ]
    }
  }
};
