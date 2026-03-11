#!/bin/bash

# Répertoire de base
BASE_DIR="/Users/riadhmahieddine/myohmtechnologies/solar-panels-website/src"

# Fonction pour remplacer les entités HTML et les classes avec crochets
process_file() {
    local file="$1"
    
    # Remplacer les entités HTML
    sed -i '' "s/&#39;/'/g" "$file"
    sed -i '' 's/&quot;/"/g' "$file"
    
    # Remplacer les classes avec crochets
    sed -i '' 's/\[#\([^]]*\)\]/\1/g' "$file"
    
    # Remplacer les classes avec des interpolations
    sed -i '' 's/className={`\([^`]*\)`}/className="\1"/g' "$file"
    
    # Remplacer les interpolations de chaînes
    sed -i '' "s/\['\([^']*\)'\]/'\1'/g" "$file"
    
    echo "Processed $file"
}

# Trouver et traiter tous les fichiers .tsx et .ts
find "$BASE_DIR" -type f \( -name "*.tsx" -o -name "*.ts" \) | while read -r file; do
    process_file "$file"
done

echo "Correction terminée !"
