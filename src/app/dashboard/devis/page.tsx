'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image'; // Renommer l'import pour éviter les conflits
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { imageUrlToBase64 } from '@/utils/imageUtils';
import { 
  DocumentTextIcon, 
  UserIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  BoltIcon,
  BanknotesIcon,
  ArrowDownTrayIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline';

// Grille tarifaire des panneaux solaires
const SOLAR_PANELS_PRICES = [
  { power: 1, price: 4990, panels: 2, surface: 4.42, production: 1700 },
  { power: 2, price: 7490, panels: 4, surface: 8.85, production: 3400 },
  { power: 3, price: 9890, panels: 6, surface: 13.27, production: 4500 },
  { power: 4, price: 11490, panels: 8, surface: 17.70, production: 6000 },
  { power: 5, price: 13290, panels: 10, surface: 22.11, production: 7500 },
  { power: 6, price: 14990, panels: 12, surface: 26.53, production: 9000 },
  { power: 7, price: 16490, panels: 14, surface: 30.96, production: 10400 },
  { power: 8, price: 18290, panels: 16, surface: 35.38, production: 11400 },
  { power: 9, price: 19990, panels: 18, surface: 39.80, production: 12800 },
];

// Informations détaillées sur les équipements utilisés
const EQUIPMENT_INFO = {
  panels: {
    brand: "Dualsun",
    model: "Flash 500 Half-Cut Black",
    warranty: "30 ans",
    origin: "France",
    // Caractéristiques techniques détaillées
    specs: {
      power: "500W",
      efficiency: "99,7%",
      dimensions: "182,2 x 187,5 cm",
      weight: "27,1 kg",
      cells: "120 cellules monocristallines Half-Cut",
      maxVoltage: "41,52V",
      maxCurrent: "10,96A"
    },
    // Garanties et certifications
    certifications: [
      "Garantie de production linéaire sur 30 ans",
      "Garantie produit de 30 ans",
      "Certifié selon les normes IEC 61215 et IEC 61730",
      "Certification résistance au sel et à l'ammoniac",
      "Certifié faible PID (dégradation induite potentielle)"
    ]
  },
  inverter: {
    brand: "Enphase",
    model: "Micro-onduleurs IQ8P",
    warranty: "25 ans",
    origin: "USA",
    // Caractéristiques techniques détaillées
    specs: {
      maxPower: "480W",
      compatibility: "Panneaux jusqu'à 505W",
      mpptRange: "27-45V",
      efficiency: "97,7%",
      protection: "IP67"
    },
    // Fonctionnalités avancées
    features: [
      "Technologie 'grid-forming' exclusive",
      "Communication sans fil Enphase Energy",
      "Monitoring via l'app Enphase App",
      "Conformité réseau intelligente",
      "Mise à jour à distance (OTA)"
    ]
  },
  mounting: {
    brand: "K2 Systems",
    origin: "Allemagne",
    // Caractéristiques techniques détaillées
    specs: {
      snowLoad: "5,4 kN/m²",
      windResistance: "2,4 kN/m²",
      inclination: "5° à 70°",
      compatibility: "Tous types de toitures",
      lifespan: "> 25 ans"
    },
    // Certifications
    certifications: [
      "Certification Eurocode 9 - Calcul des structures en aluminium",
      "Test en soufflerie selon EN 1991-1-4",
      "Garantie produit de 25 ans",
      "Certification TÜV",
      "Conformité CE"
    ]
  }
};

// Prix des batteries de stockage
const BATTERY_PRICES = {
  physical: [
    { capacity: 5, price: 5000, label: "Batterie Huawei 5kW" },
    { capacity: 10, price: 8000, label: "Batterie Huawei 10kW" },
    { capacity: 15, price: 11000, label: "Batterie Huawei 15kW" }
  ],
  virtual: { price: 3000, label: "Boîtier AC (stockage virtuel)" }
};

// Informations de l'entreprise
const COMPANY_INFO = {
  name: "MY OHM TECHNOLOGIES",
  siren: "917601908",
  siret: "91760190800028",
  tva: "FR56917601908",
  address: "544 AVENUE FREDERIC MISTRAL, 04100 MANOSQUE France"
};

const DevisPage = () => {
  // État pour les données du client
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  });

  // État pour la configuration du devis
  const [config, setConfig] = useState({
    powerIndex: 2, // 3kWc par défaut (index 2)
    batteryType: 'none', // 'none', 'physical', 'virtual'
    batteryCapacityIndex: 0, // Pour les batteries physiques (5kW par défaut)
    discount: 0, // Réduction en euros
  });

  // Calcul du prix total
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Mise à jour du prix total lorsque la configuration change
  useEffect(() => {
    let price = SOLAR_PANELS_PRICES[config.powerIndex].price;
    
    // Ajout du prix de la batterie si sélectionnée
    if (config.batteryType === 'physical') {
      price += BATTERY_PRICES.physical[config.batteryCapacityIndex].price;
    } else if (config.batteryType === 'virtual') {
      price += BATTERY_PRICES.virtual.price;
    }
    
    // Application de la réduction
    price -= config.discount;
    
    setTotalPrice(price);
  }, [config]);

  // Gestion des changements dans les données du client
  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient(prev => ({ ...prev, [name]: value }));
  };

  // Gestion des changements dans la configuration
  const handleConfigChange = (field: string, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  // Génération du devis en PDF
  const generatePDF = async () => {
    // Vérifier si les informations client essentielles sont présentes
    if (!client.firstName || !client.lastName || !client.phone) {
      alert("Veuillez remplir au moins le nom, prénom et téléphone du client avant de générer le devis");
      return;
    }

    // Créer un nouveau document PDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Utiliser le logo PNG existant
    // Créer un élément image pour charger le logo
    const logoImg = new window.Image();
    logoImg.crossOrigin = 'Anonymous';
    logoImg.src = window.location.origin + '/images/logo.png';
    
    // Fonction pour ajouter le logo au PDF
    const addLogoToPdf = () => {
      try {
        // Créer un canvas pour convertir l'image
        const canvas = document.createElement('canvas');
        canvas.width = logoImg.width;
        canvas.height = logoImg.height;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Dessiner l'image sur le canvas
          ctx.drawImage(logoImg, 0, 0, logoImg.width, logoImg.height);
          
          // Convertir le canvas en base64
          const dataUrl = canvas.toDataURL('image/png');
          
          // Ajouter l'image au PDF
          doc.addImage(
            dataUrl,
            'PNG',
            (pageWidth - 80) / 2, // Centrer horizontalement
            10, // Position Y
            80, // Largeur
            30  // Hauteur
          );
          
          // Continuer avec le reste du PDF
          addPdfContent();
        }
      } catch (error) {
        console.error('Erreur lors de l\'ajout du logo:', error);
        // En cas d'erreur, utiliser le fallback et continuer
        addFallbackHeader();
        addPdfContent();
      }
    };
    
    // Fonction de secours pour l'en-tête
    const addFallbackHeader = () => {
      // Créer un en-tête avec le nom de l'entreprise
      doc.setFillColor(11, 98, 145); // #0B6291 - Bleu de MY OHM
      doc.roundedRect(15, 10, pageWidth - 30, 30, 3, 3, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(255, 255, 255);
      doc.text("MY OHM TECHNOLOGIES", pageWidth / 2, 28, { align: "center" });
    };
    
    // Fonction pour ajouter le contenu du PDF après l'en-tête
    const addPdfContent = () => {
    
    // Sous-titre
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("DEVIS INSTALLATION PANNEAUX SOLAIRES", pageWidth / 2, 50, { align: "center" });
    
    // Date du devis
    const today = new Date();
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${today.toLocaleDateString()}`, pageWidth - 20, 65, { align: "right" });
    doc.text(`Référence: DEVIS-${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 1000)}`, pageWidth - 20, 70, { align: "right" });
    
    // Informations de l'entreprise
    doc.setFontSize(10);
    doc.text("MY OHM TECHNOLOGIES", 20, 65);
    doc.text("SIREN: " + COMPANY_INFO.siren, 20, 75);
    doc.text("SIRET: " + COMPANY_INFO.siret, 20, 80);
    doc.text("TVA: " + COMPANY_INFO.tva, 20, 85);
    doc.text(COMPANY_INFO.address, 20, 90);
    
    // Informations du client
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Informations client:", 20, 105);
    doc.setFontSize(10);
    doc.text(`${client.firstName} ${client.lastName}`, 20, 115);
    if (client.email) doc.text(`Email: ${client.email}`, 20, 120);
    doc.text(`Téléphone: ${client.phone}`, 20, 125);
    if (client.address) {
      doc.text(`Adresse: ${client.address}`, 20, 130);
      if (client.postalCode || client.city) {
        doc.text(`${client.postalCode || ''} ${client.city || ''}`, 20, 135);
      }
    }
    
    // Détails de l'installation
    doc.setFontSize(12);
    doc.text("Détails de l'installation:", 20, 150);
    
    // Tableau des détails
    const selectedPower = SOLAR_PANELS_PRICES[config.powerIndex];
    
    // Créer un tableau pour les détails de l'installation (version simplifiée pour la première page)
    const installationDetails = [
      [
        'Description', 
        'Détails', 
        'Prix TTC'
      ],
      [
        `Installation panneaux solaires ${selectedPower.power} kWc`, 
        `${selectedPower.panels} panneaux ${EQUIPMENT_INFO.panels.brand} ${EQUIPMENT_INFO.panels.model} - ${selectedPower.surface} m² - ${selectedPower.production} kWh/an`,
        `${selectedPower.price.toLocaleString()} €`
      ],
      [
        `Micro-onduleurs`, 
        `${EQUIPMENT_INFO.inverter.brand} ${EQUIPMENT_INFO.inverter.model} - Garantie ${EQUIPMENT_INFO.inverter.warranty} - Fabriqué aux ${EQUIPMENT_INFO.inverter.origin}`,
        `Inclus`
      ],
      [
        `Système de fixation`, 
        `${EQUIPMENT_INFO.mounting.brand} - Fabriqué en ${EQUIPMENT_INFO.mounting.origin}`,
        `Inclus`
      ]
    ];
    
    // Ajouter la batterie si sélectionnée
    if (config.batteryType === 'physical') {
      const selectedBattery = BATTERY_PRICES.physical[config.batteryCapacityIndex];
      installationDetails.push([
        `Batterie de stockage Huawei ${selectedBattery.capacity} kW`,
        `Stockage physique d'énergie`,
        `${selectedBattery.price.toLocaleString()} €`
      ]);
    } else if (config.batteryType === 'virtual') {
      installationDetails.push([
        BATTERY_PRICES.virtual.label,
        `Stockage virtuel sur le réseau`,
        `${BATTERY_PRICES.virtual.price.toLocaleString()} €`
      ]);
    }
    
    // Ajouter la réduction si applicable
    if (config.discount > 0) {
      installationDetails.push([
        'Réduction commerciale',
        '',
        `-${config.discount.toLocaleString()} €`
      ]);
    }
    
    // Ne pas ajouter de ligne TOTAL TTC dans le tableau
    
    // Ajouter le tableau au document
    autoTable(doc, {
      startY: 155,
      head: [installationDetails[0]],
      body: installationDetails.slice(1),
      theme: 'grid',
      headStyles: { fillColor: [11, 98, 145], textColor: [255, 255, 255] },
      styles: { halign: 'left', fontSize: 10 },
      columnStyles: { 
        0: { cellWidth: 50 },
        1: { cellWidth: 'auto' },
        2: { halign: 'right', cellWidth: 30 }
      },
      // Formater les cellules pour éviter les espaces indésirables et gérer les sauts de ligne
      didParseCell: function(data) {
        // Remplacer les espaces insécables par des espaces normaux pour les prix
        if (data.column.index === 2 && data.cell.text && data.cell.text[0]) {
          if (typeof data.cell.text[0] === 'string') {
            data.cell.text[0] = data.cell.text[0].replace(/\s/g, ' ');
          }
        }
        
        // Gérer les sauts de ligne dans la colonne des détails
        if (data.column.index === 1 && data.cell.text) {
          // Convertir le texte avec \n en tableau pour les sauts de ligne
          if (typeof data.cell.text[0] === 'string' && data.cell.text[0].includes('\n')) {
            data.cell.text = data.cell.text[0].split('\n');
          }
        }
      }
    });
    
    // Récupérer la position Y finale du tableau et ajouter un espace
    // Utiliser la méthode getLastAutoTable() qui est plus fiable
    let finalY = 200; // Position par défaut si le tableau n'est pas généré correctement
    
    try {
      // @ts-ignore - L'API jspdf-autotable expose cette méthode
      const lastTable = doc.lastAutoTable;
      if (lastTable && lastTable.finalY) {
        finalY = lastTable.finalY + 20;
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de la position du tableau:', error);
    }
    
    // Formater le prix total
    const prixTTCFormatted = totalPrice.toLocaleString('fr-FR').replace(/\s/g, ' ') + ' €';
    
    // Afficher uniquement le prix total TTC en grand et en bleu
    doc.setFontSize(18);
    doc.setTextColor(11, 98, 145); // Bleu MY OHM
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL TTC: ${prixTTCFormatted}`, pageWidth - 20, finalY + 10, { align: 'right' });
    
    // Ajouter les conditions de paiement et délais en bas de page
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const legalTextPage1 = [
      "Devis valable 30 jours à compter de sa date d'émission.",
      "Conditions de paiement : 30% à la commande, solde à la fin des travaux.",
      "Délai d'exécution : 4 à 8 semaines après acceptation du devis et obtention des autorisations nécessaires.",
      `MY OHM TECHNOLOGIES - SIREN: ${COMPANY_INFO.siren} - TVA: ${COMPANY_INFO.tva}`
    ];
    
    doc.text(legalTextPage1.join("\n"), pageWidth / 2, doc.internal.pageSize.getHeight() - 20, { align: 'center' });
    
    // Ajouter une nouvelle page pour les détails techniques
    doc.addPage();
    
    // Titre de la page des spécifications techniques (plus compact)
    doc.setFontSize(14);
    doc.setTextColor(11, 98, 145); // Bleu MY OHM
    doc.setFont('helvetica', 'bold');
    doc.text("SPÉCIFICATIONS TECHNIQUES DÉTAILLÉES", pageWidth / 2, 15, { align: "center" });
    
    // Ligne de séparation
    doc.setDrawColor(11, 98, 145);
    doc.setLineWidth(0.5);
    doc.line(20, 20, pageWidth - 20, 20);
    
    // Panneaux solaires - Section
    type SectionItem = {
      title: string;
      details: string[];
    };
    
    const drawSection = (title: string, yPosition: number, content: SectionItem[]): number => {
      // Fond de la section (plus compact)
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(15, yPosition, pageWidth - 30, 14, 2, 2, 'F');
      
      // Titre de la section
      doc.setFontSize(11); // Taille de texte réduite pour les titres de section
      doc.setTextColor(11, 98, 145);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, yPosition + 10);
      
      // Contenu de la section
      let currentY = yPosition + 22; // Réduit l'espace entre le titre et le contenu
      content.forEach((item: SectionItem) => {
        // Titre de l'item
        doc.setFontSize(9); // Taille de texte encore plus réduite pour les titres
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(70, 70, 70);
        doc.text(item.title, 20, currentY);
        currentY += 6; // Moins d'espace après le titre
        
        // Contenu de l'item
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8); // Taille de texte encore plus réduite
        doc.setTextColor(0, 0, 0);
        
        // Afficher les détails sur deux colonnes pour gagner de la place
        const details = item.details;
        const midPoint = Math.ceil(details.length / 2);
        
        for (let i = 0; i < midPoint; i++) {
          // Première colonne
          doc.text(`• ${details[i]}`, 25, currentY);
          
          // Deuxième colonne (si elle existe)
          if (i + midPoint < details.length) {
            doc.text(`• ${details[i + midPoint]}`, pageWidth / 2 + 5, currentY);
          }
          
          currentY += 5; // Espacement très réduit entre les lignes
        }
        
        currentY += 3; // Espace minimal entre les items
      });
      
      return currentY;
    };
    
    // Panneaux solaires
    let yPos = 30;
    yPos = drawSection(`Panneaux solaires ${EQUIPMENT_INFO.panels.brand} ${EQUIPMENT_INFO.panels.model}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Puissance nominale : ${EQUIPMENT_INFO.panels.specs.power}`,
          `Rendement : ${EQUIPMENT_INFO.panels.specs.efficiency}`,
          `Dimensions : ${EQUIPMENT_INFO.panels.specs.dimensions}`,
          `Poids : ${EQUIPMENT_INFO.panels.specs.weight}`,
          `Cellules : ${EQUIPMENT_INFO.panels.specs.cells}`,
          `Tension maximale : ${EQUIPMENT_INFO.panels.specs.maxVoltage}`,
          `Courant maximal : ${EQUIPMENT_INFO.panels.specs.maxCurrent}`
        ]
      },
      {
        title: "Garanties et Certifications",
        details: EQUIPMENT_INFO.panels.certifications
      }
    ]);
    
    // Micro-onduleurs
    yPos += 10;
    yPos = drawSection(`Micro-onduleurs ${EQUIPMENT_INFO.inverter.brand} ${EQUIPMENT_INFO.inverter.model}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Puissance de sortie maximale : ${EQUIPMENT_INFO.inverter.specs.maxPower}`,
          `Compatibilité : ${EQUIPMENT_INFO.inverter.specs.compatibility}`,
          `Plage de tension MPPT : ${EQUIPMENT_INFO.inverter.specs.mpptRange}`,
          `Rendement maximal : ${EQUIPMENT_INFO.inverter.specs.efficiency}`,
          `Indice de protection : ${EQUIPMENT_INFO.inverter.specs.protection}`,
          `Garantie : ${EQUIPMENT_INFO.inverter.warranty}`
        ]
      },
      {
        title: "Fonctionnalités Avancées",
        details: EQUIPMENT_INFO.inverter.features
      }
    ]);
    
    // Système de fixation
    yPos += 10;
    drawSection(`Système de fixation ${EQUIPMENT_INFO.mounting.brand}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Charge de neige testée jusqu'à ${EQUIPMENT_INFO.mounting.specs.snowLoad}`,
          `Résistance au vent jusqu'à ${EQUIPMENT_INFO.mounting.specs.windResistance}`,
          `Inclinaison possible de ${EQUIPMENT_INFO.mounting.specs.inclination}`,
          `Compatible avec ${EQUIPMENT_INFO.mounting.specs.compatibility}`,
          `Durée de vie ${EQUIPMENT_INFO.mounting.specs.lifespan}`
        ]
      },
      {
        title: "Certifications",
        details: EQUIPMENT_INFO.mounting.certifications
      }
    ]);
    
    // Mentions légales et conditions (placées plus haut pour éviter la superposition)
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const legalTextPage2 = [
      "Devis valable 30 jours à compter de sa date d'émission.",
      "Conditions de paiement : 30% à la commande, solde à la fin des travaux.",
      "Délai d'exécution : 4 à 8 semaines après acceptation du devis et obtention des autorisations nécessaires.",
      `MY OHM TECHNOLOGIES - SIREN: ${COMPANY_INFO.siren} - TVA: ${COMPANY_INFO.tva}`
    ];
    
    doc.text(legalTextPage2.join("\n"), pageWidth / 2, doc.internal.pageSize.getHeight() - 35, { align: 'center' });
    
    // Pied de page de la seconde page
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("MY OHM TECHNOLOGIES - Documentation technique confidentielle", pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
    
      // Sauvegarder le PDF
      const clientName = `${client.lastName}_${client.firstName}`.replace(/\s+/g, '_').toLowerCase();
      doc.save(`devis_myohm_${clientName}_${today.toISOString().split('T')[0]}.pdf`);
    };
    
    // Vérifier si l'image est déjà chargée
    if (logoImg.complete) {
      addLogoToPdf();
    } else {
      // Si l'image n'est pas encore chargée, ajouter un gestionnaire d'événement
      logoImg.onload = addLogoToPdf;
      logoImg.onerror = () => {
        console.error('Erreur lors du chargement du logo');
        addFallbackHeader();
        addPdfContent();
      };
      
      // Définir un délai pour fallback au cas où l'image ne se charge pas
      setTimeout(() => {
        if (!logoImg.complete) {
          addFallbackHeader();
          addPdfContent();
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête du devis */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Création de devis
            </h1>
            <p className="mt-2 text-gray-600">
              Panneaux solaires, batteries de stockage et accessoires
            </p>
          </div>
          <div className="relative h-16 w-40">
            <NextImage 
              src="/images/logo.webp" 
              alt="MY OHM TECHNOLOGIES" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informations client */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <UserIcon className="h-5 w-5 mr-2 text-[#0B6291]" />
              Informations client
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={client.firstName}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={client.lastName}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <EnvelopeIcon className="h-4 w-4 inline mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={client.email}
                  onChange={handleClientChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <PhoneIcon className="h-4 w-4 inline mr-1" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={client.phone}
                  onChange={handleClientChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <MapPinIcon className="h-4 w-4 inline mr-1" />
                  Adresse
                </label>
                <input
                  type="text"
                  name="address"
                  value={client.address}
                  onChange={handleClientChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={client.postalCode}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                  <input
                    type="text"
                    name="city"
                    value={client.city}
                    onChange={handleClientChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Configuration du devis */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <DocumentTextIcon className="h-5 w-5 mr-2 text-[#0B6291]" />
              Configuration de l'installation
            </h2>
            
            {/* Sélection de la puissance */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                <BoltIcon className="h-5 w-5 inline mr-2 text-yellow-500" />
                Puissance de l'installation
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puissance</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix TTC</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nb panneaux</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surface</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Production</th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sélection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {SOLAR_PANELS_PRICES.map((option, index) => (
                      <tr 
                        key={index}
                        className={index === config.powerIndex ? 'bg-[#ffeb99]/30' : 'hover:bg-gray-50'}
                      >
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{option.power} kWc</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.price.toLocaleString()} €</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.panels}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.surface} m²</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.production} kWh</td>
                        <td className="py-3 px-4 text-sm">
                          <button
                            onClick={() => handleConfigChange('powerIndex', index)}
                            className={`w-5 h-5 rounded-full border ${
                              index === config.powerIndex 
                                ? 'bg-[#0B6291] border-[#0B6291]' 
                                : 'border-gray-300'
                            } flex items-center justify-center`}
                          >
                            {index === config.powerIndex && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Options de batterie */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                <BoltIcon className="h-5 w-5 inline mr-2 text-yellow-500" />
                Batterie de stockage
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    config.batteryType === 'none' 
                      ? 'border-[#0B6291] bg-[#d7f0fc]/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleConfigChange('batteryType', 'none')}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-5 h-5 rounded-full border ${
                      config.batteryType === 'none' 
                        ? 'bg-[#0B6291] border-[#0B6291]' 
                        : 'border-gray-300'
                    } flex items-center justify-center mr-2`}>
                      {config.batteryType === 'none' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">Sans batterie</span>
                  </div>
                  <p className="text-sm text-gray-500">Installation standard sans stockage d'énergie</p>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    config.batteryType === 'physical' 
                      ? 'border-[#0B6291] bg-[#d7f0fc]/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleConfigChange('batteryType', 'physical')}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-5 h-5 rounded-full border ${
                      config.batteryType === 'physical' 
                        ? 'bg-[#0B6291] border-[#0B6291]' 
                        : 'border-gray-300'
                    } flex items-center justify-center mr-2`}>
                      {config.batteryType === 'physical' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">Batterie physique</span>
                  </div>
                  <p className="text-sm text-gray-500">Stockage Huawei pour une autonomie énergétique</p>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    config.batteryType === 'virtual' 
                      ? 'border-[#0B6291] bg-[#d7f0fc]/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleConfigChange('batteryType', 'virtual')}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-5 h-5 rounded-full border ${
                      config.batteryType === 'virtual' 
                        ? 'bg-[#0B6291] border-[#0B6291]' 
                        : 'border-gray-300'
                    } flex items-center justify-center mr-2`}>
                      {config.batteryType === 'virtual' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">Stockage virtuel</span>
                  </div>
                  <p className="text-sm text-gray-500">Boîtier AC pour stockage virtuel sur le réseau</p>
                  <p className="text-sm font-medium text-[#0B6291] mt-2">+ {BATTERY_PRICES.virtual.price.toLocaleString()} €</p>
                </div>
              </div>
              
              {/* Options de capacité pour les batteries physiques */}
              {config.batteryType === 'physical' && (
                <div className="mt-4 border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-medium mb-3">Capacité de la batterie Huawei</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {BATTERY_PRICES.physical.map((battery, index) => (
                      <div 
                        key={index}
                        className={`border rounded-lg p-3 cursor-pointer ${
                          config.batteryCapacityIndex === index 
                            ? 'border-[#0B6291] bg-white' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        onClick={() => handleConfigChange('batteryCapacityIndex', index)}
                      >
                        <div className="flex items-center mb-1">
                          <div className={`w-4 h-4 rounded-full border ${
                            config.batteryCapacityIndex === index 
                              ? 'bg-[#0B6291] border-[#0B6291]' 
                              : 'border-gray-300'
                          } flex items-center justify-center mr-2`}>
                            {config.batteryCapacityIndex === index && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className="font-medium">{battery.capacity} kW</span>
                        </div>
                        <p className="text-sm text-gray-500">{battery.label}</p>
                        <p className="text-sm font-medium text-[#0B6291] mt-1">+ {battery.price.toLocaleString()} €</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Réduction commerciale */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                <BanknotesIcon className="h-5 w-5 inline mr-2 text-green-500" />
                Réduction commerciale
              </h3>
              
              <div className="flex items-center">
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-l-md"
                  onClick={() => {
                    if (config.discount > 0) {
                      handleConfigChange('discount', config.discount - 100);
                    }
                  }}
                >
                  <MinusIcon className="h-5 w-5" />
                </button>
                <input
                  type="number"
                  value={config.discount}
                  onChange={(e) => handleConfigChange('discount', parseInt(e.target.value) || 0)}
                  className="w-24 text-center px-3 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                />
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-r-md"
                  onClick={() => handleConfigChange('discount', config.discount + 100)}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
                <span className="ml-2 text-gray-700">€</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Récapitulatif et actions */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Récapitulatif du devis</h2>
              <div className="text-sm text-gray-600 mb-4">
                <p>{COMPANY_INFO.name} - SIREN : {COMPANY_INFO.siren} - SIRET : {COMPANY_INFO.siret}</p>
                <p>TVA : {COMPANY_INFO.tva} - {COMPANY_INFO.address}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Installation panneaux solaires :</span> {SOLAR_PANELS_PRICES[config.powerIndex].power} kWc - 
                  {SOLAR_PANELS_PRICES[config.powerIndex].panels} panneaux - 
                  {SOLAR_PANELS_PRICES[config.powerIndex].surface} m²
                </p>
                
                {config.batteryType === 'physical' && (
                  <p className="text-gray-700">
                    <span className="font-medium">Batterie de stockage :</span> {BATTERY_PRICES.physical[config.batteryCapacityIndex].label}
                  </p>
                )}
                
                {config.batteryType === 'virtual' && (
                  <p className="text-gray-700">
                    <span className="font-medium">Stockage virtuel :</span> {BATTERY_PRICES.virtual.label}
                  </p>
                )}
                
                {config.discount > 0 && (
                  <p className="text-gray-700">
                    <span className="font-medium">Réduction commerciale :</span> -{config.discount.toLocaleString()} €
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 flex flex-col items-end">
              <div className="text-3xl font-bold text-[#0B6291]">
                {totalPrice.toLocaleString()} € TTC
              </div>
              <p className="text-sm text-gray-500 mb-4">TVA incluse</p>
              
              <button
                onClick={generatePDF}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Générer le devis PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisPage;
