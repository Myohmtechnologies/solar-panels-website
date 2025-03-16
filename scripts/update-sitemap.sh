#!/bin/bash

# Script pour générer et déployer les sitemaps

echo "🌐 Génération des sitemaps pour MyOHM Technologies..."

# Créer le répertoire sitemaps s'il n'existe pas
mkdir -p public/sitemaps

# Exécuter le script de génération
npm run generate-sitemap

# Vérifier si la génération a réussi
if [ $? -eq 0 ]; then
  echo "✅ Sitemaps générés avec succès!"
  echo "📊 Statistiques:"
  
  # Compter le nombre de pages dans le sitemap principal
  MAIN_COUNT=$(grep -c "<url>" public/sitemap.xml)
  echo "- Sitemap principal: $MAIN_COUNT pages"
  
  # Compter le nombre de pages dans les sitemaps de départements
  TOTAL_DEPT_PAGES=0
  for DEPT in 04-alpes-de-haute-provence 05-hautes-alpes 06-alpes-maritimes 13-bouches-du-rhone 83-var 84-vaucluse; do
    if [ -f "public/sitemaps/sitemap-$DEPT.xml" ]; then
      DEPT_COUNT=$(grep -c "<url>" "public/sitemaps/sitemap-$DEPT.xml")
      echo "- Sitemap $DEPT: $DEPT_COUNT pages"
      TOTAL_DEPT_PAGES=$((TOTAL_DEPT_PAGES + DEPT_COUNT))
    fi
  done
  
  # Afficher le total
  TOTAL_PAGES=$((MAIN_COUNT + TOTAL_DEPT_PAGES))
  echo "📈 Total des pages indexées: $TOTAL_PAGES"
  
  echo ""
  echo "🔍 Pour soumettre vos sitemaps à Google:"
  echo "1. Connectez-vous à Google Search Console"
  echo "2. Sélectionnez votre propriété"
  echo "3. Allez dans 'Sitemaps' dans le menu latéral"
  echo "4. Soumettez l'URL: https://www.myohmtechnologies.com/sitemap-index.xml"
  
  # Rendre le sitemap accessible via un ping à Google
  echo ""
  echo "🔄 Ping de Google pour accélérer l'indexation..."
  curl -s "https://www.google.com/ping?sitemap=https://www.myohmtechnologies.com/sitemap-index.xml" > /dev/null
  echo "✅ Ping envoyé à Google!"
else
  echo "❌ Erreur lors de la génération des sitemaps"
fi
