// Configuration des rapports personnalisés GA4
export const GA4_REPORTS = {
  // 1. Rapport de performance par source de trafic
  trafficSourceReport: {
    name: 'Performance par Source',
    dimensions: ['traffic_source', 'traffic_medium', 'campaign_city'],
    metrics: [
      'sessions',
      'conversions',
      'conversion_rate',
      'average_session_duration'
    ],
    filters: [
      {
        fieldName: 'traffic_source',
        operator: 'IN_LIST',
        values: ['google', 'organic', 'paid']
      }
    ]
  },

  // 2. Rapport de conversion par ville
  cityConversionReport: {
    name: 'Conversions par Ville',
    dimensions: ['campaign_city', 'traffic_source'],
    metrics: [
      'conversions',
      'conversion_value',
      'cost_per_conversion'
    ],
    filters: [
      {
        fieldName: 'campaign_city',
        operator: 'IN_LIST',
        values: ['aix-en-provence', 'nice', 'manosque', 'toulon', 'draguignan']
      }
    ]
  },

  // 3. Rapport de performance des simulateurs
  simulatorPerformanceReport: {
    name: 'Performance des Simulateurs',
    dimensions: ['simulator_type', 'campaign_city', 'traffic_source'],
    metrics: [
      'simulator_starts',
      'simulator_completions',
      'completion_rate',
      'lead_generation_rate'
    ]
  },

  // 4. Rapport d'attribution
  attributionReport: {
    name: "Modèle d'Attribution",
    dimensions: ['traffic_source', 'traffic_medium'],
    metrics: [
      'conversions',
      'conversion_value',
      'first_click_conversions',
      'last_click_conversions',
      'linear_conversions'
    ],
    attributionModel: 'data-driven'
  },

  // 5. Rapport ROI par campagne
  campaignROIReport: {
    name: 'ROI par Campagne',
    dimensions: ['campaign_name', 'campaign_city', 'traffic_source'],
    metrics: [
      'cost',
      'conversions',
      'conversion_value',
      'ROAS',
      'ROI'
    ],
    calculatedMetrics: [
      {
        name: 'ROAS',
        formula: 'conversion_value / cost',
        format: 'PERCENT'
      },
      {
        name: 'ROI',
        formula: '(conversion_value - cost) / cost',
        format: 'PERCENT'
      }
    ]
  }
};

// Configuration des explorations GA4
export const GA4_EXPLORATIONS = {
  // 1. Entonnoir de conversion par ville
  cityConversionFunnel: {
    name: 'Entonnoir de Conversion par Ville',
    technique: 'funnel_exploration',
    dimensions: ['campaign_city', 'traffic_source'],
    steps: [
      { event: 'page_view', name: 'Visite' },
      { event: 'simulator_start', name: 'Début Simulation' },
      { event: 'simulator_complete', name: 'Simulation Terminée' },
      { event: 'lead_form_submit', name: 'Formulaire Soumis' },
      { event: 'thank_you_page', name: 'Conversion Finale' }
    ]
  },

  // 2. Parcours utilisateur
  userJourney: {
    name: 'Parcours Utilisateur',
    technique: 'path_exploration',
    startingPoint: { event: 'first_visit' },
    dimensions: ['page_location', 'traffic_source'],
    metrics: ['users', 'conversion_rate']
  }
};

// Configuration des tableaux de bord
export const GA4_DASHBOARDS = {
  // 1. Tableau de bord performance marketing
  marketingDashboard: {
    name: 'Performance Marketing',
    widgets: [
      {
        type: 'scorecard',
        metric: 'conversions',
        comparison: 'previous_period'
      },
      {
        type: 'time_series',
        metrics: ['conversions', 'conversion_rate'],
        dimensions: ['date']
      },
      {
        type: 'bar',
        metrics: ['conversions'],
        dimensions: ['campaign_city']
      },
      {
        type: 'pie',
        metrics: ['conversions'],
        dimensions: ['traffic_source']
      }
    ]
  },

  // 2. Tableau de bord ROI
  roiDashboard: {
    name: 'ROI par Ville',
    widgets: [
      {
        type: 'scorecard',
        metric: 'ROAS',
        comparison: 'previous_period'
      },
      {
        type: 'table',
        dimensions: ['campaign_city'],
        metrics: ['cost', 'conversion_value', 'ROAS', 'ROI']
      }
    ]
  }
};

// Configuration des alertes
export const GA4_ALERTS = {
  // 1. Alerte de baisse de conversion
  conversionDropAlert: {
    name: 'Baisse des Conversions',
    metric: 'conversions',
    condition: 'is_lower_than',
    threshold: {
      value: 0.5, // -50%
      comparisonPeriod: 'previous_day'
    }
  },

  // 2. Alerte de coût par conversion élevé
  highCPAAlert: {
    name: 'CPA Élevé',
    metric: 'cost_per_conversion',
    condition: 'is_higher_than',
    threshold: {
      value: 100, // 100€
      comparisonPeriod: 'same_day_previous_week'
    }
  }
};

// Configuration des segments
export const GA4_SEGMENTS = {
  // 1. Segment trafic payant haute valeur
  highValuePaidTraffic: {
    name: 'Trafic Payant Haute Valeur',
    conditions: [
      {
        dimension: 'traffic_source',
        operator: 'EXACT',
        value: 'paid'
      },
      {
        metric: 'conversion_value',
        operator: 'GREATER_THAN',
        value: 50
      }
    ]
  },

  // 2. Segment trafic organique par ville
  organicTrafficByCity: {
    name: 'Trafic Organique par Ville',
    conditions: [
      {
        dimension: 'traffic_source',
        operator: 'EXACT',
        value: 'organic'
      },
      {
        dimension: 'campaign_city',
        operator: 'IN_LIST',
        values: ['aix-en-provence', 'nice', 'manosque', 'toulon', 'draguignan']
      }
    ]
  }
};
