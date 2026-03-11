# Configuration Google Analytics 4 (GA4)

## 1. Événements Personnalisés à Configurer

### Conversions
Dans GA4, marquer ces événements comme des conversions :
- `simulator_conversion` (avec `conversion_step: 'thank_you_page'`)
- `lead_generated`

### Entonnoir de Conversion
Créer un nouvel entonnoir de conversion avec ces étapes :
1. Vue page simulateur
2. Sélection type de propriété
3. Sélection facture énergie
4. Sélection équipements
5. Remplissage formulaire
6. Page de remerciement

## 2. Rapports Personnalisés

### Rapport Performance Simulateur
1. **Vue d'ensemble**
   - Taux de conversion global
   - Nombre de leads générés
   - Valeur moyenne des leads

2. **Analyse par Étape**
   - Taux d'abandon par étape
   - Temps moyen par étape
   - Taux de progression

3. **Analyse des Choix**
   - Types de propriété les plus sélectionnés
   - Tranches de factures d'énergie
   - Équipements populaires

### Rapport Qualité des Leads
1. **Sources de Trafic**
   - Canaux d'acquisition
   - Campagnes performantes
   - Pages d'entrée

2. **Comportement**
   - Temps moyen avant conversion
   - Nombre de sessions avant conversion
   - Pages vues avant conversion

## 3. Segments d'Audience

### Leads Qualifiés
Critères :
- A complété le simulateur
- A atteint la page de remerciement
- Valeur de lead = 100

### Abandons Simulateur
Critères :
- A commencé le simulateur
- N'a pas atteint la page de remerciement
- Dernière étape vue (pour analyse)

## 4. Alertes à Configurer

1. **Alertes de Performance**
   - Baisse significative du taux de conversion (-20% vs moyenne)
   - Augmentation des erreurs de formulaire
   - Baisse du taux de progression entre les étapes

2. **Alertes Techniques**
   - Erreurs de tracking
   - Temps de chargement anormal
   - Taux d'erreur formulaire élevé

## 5. Tableaux de Bord

### Dashboard Principal
Widgets à inclure :
1. Taux de conversion global (graphique temporel)
2. Entonnoir de conversion
3. Top 5 types de propriété
4. Distribution des factures d'énergie
5. Carte thermique des abandons
6. Qualité des leads par source

### Dashboard Technique
Widgets à inclure :
1. Erreurs de formulaire
2. Temps de chargement
3. Taux d'erreur par étape
4. Performance mobile vs desktop
