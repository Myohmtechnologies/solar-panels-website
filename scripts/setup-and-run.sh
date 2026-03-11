#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Configuration et démarrage du système de gestion des rendez-vous ===${NC}"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js n'est pas installé. Veuillez l'installer avant de continuer.${NC}"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo -e "${RED}npm n'est pas installé. Veuillez l'installer avant de continuer.${NC}"
    exit 1
fi

# Installation des dépendances
echo -e "${YELLOW}Installation des dépendances...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}Erreur lors de l'installation des dépendances.${NC}"
    exit 1
fi
echo -e "${GREEN}Dépendances installées avec succès.${NC}"

# Créer les commerciaux
echo -e "${YELLOW}Création des commerciaux...${NC}"
node scripts/create-commercials.js
if [ $? -ne 0 ]; then
    echo -e "${RED}Erreur lors de la création des commerciaux.${NC}"
    exit 1
fi
echo -e "${GREEN}Commerciaux créés avec succès.${NC}"

# Démarrer le serveur
echo -e "${YELLOW}Démarrage du serveur...${NC}"
echo -e "${GREEN}Le serveur est accessible à l'adresse: http://localhost:3000${NC}"
echo -e "${YELLOW}Informations de connexion pour les commerciaux:${NC}"
echo -e "${GREEN}Ali Abed: ali.abed@myohmtechnologies.com / password123${NC}"
echo -e "${GREEN}Rudy Salatnia: rudy.salatnia@myohmtechnologies.com / password123${NC}"
echo -e "${YELLOW}Interface commerciale: http://localhost:3000/commercial/login${NC}"

npm run dev
