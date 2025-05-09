'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image'; // Renommer l'import pour éviter les conflits
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { imageUrlToBase64 } from '@/utils/imageUtils';
import { saveQuote } from '@/utils/quoteStorage';
import { ConfigurationType, PowerOption, BatteryType } from '@/types/quote';
import { useRouter } from 'next/navigation';
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
  MinusIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

// Grille tarifaire des panneaux solaires
const PRICES = {
  installation: {
    dualsun_enphase: {
      1: 3990,
      2: 6890,
      3: 9490,
      4: 10990,
      5: 12490,
      6: 14290,
      7: 15490,
      8: 17490,
      9: 19490,
    },
    bourgeois_global: {
      1: 3290,
      2: 5690,
      3: 8490,
      4: 9990,
      5: 11490,
      6: 13490,
      7: 14990,
      8: 16290,
      9: 18490,
    }
  }
};

// Données techniques des panneaux solaires (communes aux deux configurations)
const SOLAR_PANELS_DATA = [
  { power: 1, panels: 2, surface: 4.42, production: 1700 },
  { power: 2, panels: 4, surface: 8.85, production: 3400 },
  { power: 3, panels: 6, surface: 13.27, production: 4800 },
  { power: 4, panels: 8, surface: 17.70, production: 6400 },
  { power: 5, panels: 10, surface: 22.11, production: 7900 },
  { power: 6, panels: 12, surface: 26.53, production: 9800 },
  { power: 7, panels: 14, surface: 30.96, production: 11200 },
  { power: 8, panels: 16, surface: 35.38, production: 12200 },
  { power: 9, panels: 18, surface: 39.80, production: 14400 },
];

// Informations détaillées sur les équipements utilisés
const EQUIPMENT_INFO = {
  dualsun_enphase: {
    name: "Pack Dualsun + Enphase",
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
      model: "",
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
  },
  bourgeois_global: {
    name: "Pack Full Bourgeois Global",
    panels: {
      brand: "Bourgeois Global",
      model: "Premium 500W",
      warranty: "25 ans",
      origin: "Europe",
      // Caractéristiques techniques détaillées
      specs: {
        power: "500W",
        efficiency: "98,5%",
        dimensions: "195,0 x 113,4 cm",
        weight: "27,1 kg",
        cells: "108 cellules monocristallines",
        maxVoltage: "40,5V",
        maxCurrent: "10,2A"
      },
      // Garanties et certifications
      certifications: [
        "Garantie de production linéaire sur 30 ans",
        "Garantie produit de 25 ans",
        "Certifié selon les normes IEC 61215 et IEC 61730",
        "Certification résistance aux intempéries"
      ]
    },
    inverter: {
      brand: "Bourgeois Global",
      model: "Onduleurs série BG-500",
      warranty: "25 ans",
      origin: "Europe",
      // Caractéristiques techniques détaillées
      specs: {
        maxPower: "670W",
        compatibility: "Panneaux jusqu'à 550W",
        mpptRange: "25-48V",
        efficiency: "98,2%",
        protection: "IP66"
      },
      // Fonctionnalités avancées
      features: [
        "Technologie Smart Grid",
        "Communication sans fil intégrée",
        "Monitoring via application mobile",
        "Mise à jour à distance",
        "Optimisation de production"
      ]
    },
    mounting: {
      brand: "Bourgeois Global",
      model: "BG-Mount",
      origin: "Europe",
      // Caractéristiques techniques détaillées
      specs: {
        snowLoad: "5,0 kN/m²",
        windResistance: "2,2 kN/m²",
        inclination: "10° à 65°",
        compatibility: "Tous types de toitures",
        lifespan: "> 20 ans"
      },
      // Certifications
      certifications: [
        "Certification Eurocode 9",
        "Test en soufflerie selon EN 1991",
        "Garantie produit de 25 ans",
        "Conformité CE"
      ]
    }
  }
};

// Prix des batteries de stockage
const BATTERY_PRICES = {
  physical: {
    fox: [
      { capacity: 5, price: 4490, label: "Batterie FOX 5kW" },
      { capacity: 10, price: 7490, label: "Batterie FOX 10kW" },
      { capacity: 15, price: 9490, label: "Batterie FOX 15kW" }
    ],
    enphase: [
      { capacity: 3, price: 6490, label: "Batterie Enphase 5kW" },
      { capacity: 6, price: 10490, label: "Batterie Enphase 10kW" },
      { capacity: 15, price: 15490, label: "Batterie Enphase 15kW" }
    ]
  },
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

// Fonctions utilitaires pour les calculs
const getPanelCount = (power: PowerOption): number => {
  const panelData = SOLAR_PANELS_DATA.find(item => item.power === power);
  return panelData?.panels || 0;
};

const getSurfaceArea = (power: PowerOption): number => {
  const panelData = SOLAR_PANELS_DATA.find(item => item.power === power);
  return panelData?.surface || 0;
};

const getProduction = (power: PowerOption): number => {
  const panelData = SOLAR_PANELS_DATA.find(item => item.power === power);
  return panelData?.production || 0;
};

// Fonction pour formater les prix
const formatPrice = (price: number): string => {
  return price.toLocaleString('fr-FR').replace(/\s/g, ' ');
};

const DevisPage = () => {
  const router = useRouter();
  
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
    configurationType: 'dualsun_enphase' as ConfigurationType, // Type de configuration
    installationPower: 3 as PowerOption, // 3kWc par défaut
    batteryType: 'none' as BatteryType, // 'none', 'physical', 'virtual'
    batteryBrand: 'fox' as 'fox' | 'enphase', // Marque de batterie (fox par défaut)
    batteryCapacityIndex: 0, // Pour les batteries physiques (5kW par défaut)
    discount: 0, // Réduction en euros
    exceptionalService: {
      description: '',
      price: 0
    }
  });

  // Calcul du prix total
  const [totalPrice, setTotalPrice] = useState(0);
  
  // État pour le message de succès
  const [successMessage, setSuccessMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Mise à jour du prix total lorsque la configuration change
  useEffect(() => {
    let price = PRICES.installation[config.configurationType][config.installationPower];
    
    // Ajout du prix de la batterie si sélectionnée
    if (config.batteryType === 'physical') {
      price += BATTERY_PRICES.physical[config.batteryBrand][config.batteryCapacityIndex].price;
    } else if (config.batteryType === 'virtual') {
      price += BATTERY_PRICES.virtual.price;
    }
    
    // Ajout du prix de la prestation exceptionnelle si renseignée
    if (config.exceptionalService.description && config.exceptionalService.price > 0) {
      price += config.exceptionalService.price;
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
    
    setIsGenerating(true);

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
    
    // Informations de l'entreprise (colonne gauche)
    const leftColumnX = 20;
    let currentY = 50;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text("MY OHM TECHNOLOGIES", leftColumnX, currentY);
    currentY += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text("544 Avenue Frédéric Mistral", leftColumnX, currentY);
    currentY += 6;
    doc.text("04100 MANOSQUE", leftColumnX, currentY);
    currentY += 6;
    doc.text("FRANCE", leftColumnX, currentY);
    currentY += 6;
    doc.text("Tel : +33 4 92 76 68 58", leftColumnX, currentY);
    currentY += 6;
    doc.text("contact@myohmtechnologies.com", leftColumnX, currentY);
    currentY += 6;
    doc.text(`N° SIRET : ${COMPANY_INFO.siret}`, leftColumnX, currentY);
    
    // Informations du client (colonne droite)
    const rightColumnX = pageWidth - 20;
    currentY = 50;
    
    doc.setFont('helvetica', 'bold');
    doc.text(`M. ${client.firstName} ${client.lastName}`.toUpperCase(), rightColumnX, currentY, { align: "right" });
    currentY += 6;
    
    doc.setFont('helvetica', 'normal');
    if (client.address) {
      doc.text(client.address, rightColumnX, currentY, { align: "right" });
      currentY += 6;
    }
    
    if (client.postalCode || client.city) {
      doc.text(`${client.postalCode || ''} ${client.city || ''}`.toUpperCase(), rightColumnX, currentY, { align: "right" });
      currentY += 6;
    }
    
    // Numéro de devis et date
    currentY = 100;
    const today = new Date();
    const devisNumber = `I-${today.getDate()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${Math.floor(Math.random() * 10)}`;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`DEVIS N° ${devisNumber}`, leftColumnX, currentY);
    currentY += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Le ${today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`, leftColumnX, currentY);
    
    // Détails de l'installation
    doc.setFontSize(12);
    doc.text("Détails de l'installation:", 20, 120);
    
    // Récupérer les données techniques pour la puissance sélectionnée
    const selectedPower = config.installationPower;
    const panelData = SOLAR_PANELS_DATA.find(item => item.power === selectedPower);
    const configurationType = config.configurationType;
    const equipmentInfo = EQUIPMENT_INFO[configurationType];
    
    // Créer un tableau pour les détails de l'installation (version simplifiée pour la première page)
    const installationDetails = [
      [
        'Désignation', 
        'Détails', 
        'Prix TTC'
      ]
    ];
    
    // Créer une entrée principale pour la solution complète
    let solutionTitle = `SOLUTION PREMIUM ${selectedPower} kWc :`;
    let solutionDetails = [
      `-${getPanelCount(selectedPower)} MODULES ${equipmentInfo.panels.brand.toUpperCase()} ${equipmentInfo.panels.model.toUpperCase()} HALF CUT GLASS GLASS TOPCON`,
      `-${getPanelCount(selectedPower)} MICRO ONDULEURS ${equipmentInfo.inverter.brand.toUpperCase()} ${equipmentInfo.inverter.model.toUpperCase()}`,
      `-1 COFFRET DE PROTECTION AC ${selectedPower}kWc`,
      `-1 PASSERELLE DE COMMUNICATION ENVOY-S METERED`,
      `-1 KIT DE FIXATION SUR TOITURE "${equipmentInfo.mounting.brand.toUpperCase()} SYSTEMS"`,
      `- DIVERS : CÂBLES, BOITES, VISSERIES, TUBE IRL, WAGOS...`
    ];
    
    // Ajouter la batterie si sélectionnée
    if (config.batteryType === 'physical') {
      const selectedBattery = BATTERY_PRICES.physical[config.batteryBrand][config.batteryCapacityIndex];
      const batteryBrandName = config.batteryBrand === 'fox' ? 'FOX' : 'ENPHASE';
      solutionDetails.push(`-1 BATTERIE DE STOCKAGE ${batteryBrandName} ${selectedBattery.capacity}kW`);
    } else if (config.batteryType === 'virtual') {
      solutionDetails.push(`-1 ${BATTERY_PRICES.virtual.label.toUpperCase()}`);
    }
    
    // Ajouter la solution complète au tableau
    installationDetails.push([
      solutionTitle,
      solutionDetails.join('\n'),
      `${formatPrice(PRICES.installation[configurationType][selectedPower])} €`
    ]);
    
    // Ajouter le prix de la batterie séparément si sélectionnée
    if (config.batteryType === 'physical') {
      const selectedBattery = BATTERY_PRICES.physical[config.batteryBrand][config.batteryCapacityIndex];
      const batteryBrandName = config.batteryBrand === 'fox' ? 'FOX' : 'ENPHASE';
      installationDetails.push([
        '',
        `BATTERIE DE STOCKAGE ${batteryBrandName} ${selectedBattery.capacity}kW`,
        `${selectedBattery.price.toLocaleString()} €`
      ]);
    } else if (config.batteryType === 'virtual') {
      installationDetails.push([
        '',
        'STOCKAGE VIRTUEL',
        `${BATTERY_PRICES.virtual.price.toLocaleString()} €`
      ]);
    }
    
    // Ajouter une section PRESTATIONS
    installationDetails.push([
      'PRESTATIONS :',
      `-DÉMARCHES ADMINISTRATIVES\n(DÉCLARATION PRÉALABLE, CONSUEL, DEMANDE DE RACCORDEMENT ENEDIS)\n\n-INSTALLATION PAR NOS ÉQUIPES QUALIFIÉES\n\nNUMÉRO QUALIPV : QPV/72020\nASSURANCE DÉCENNALE N°14004036 P 001-MAAF\n\n-MISE EN SERVICE ET NETTOYAGE FIN DE CHANTIER`,
      'Inclus'
    ]);
    
    // Ajouter la réduction si applicable
    if (config.discount > 0) {
      installationDetails.push([
        'REMISE COMMERCIALE',
        '',
        `-${config.discount.toLocaleString()} €`
      ]);
    }
    
    // Ajouter la prestation exceptionnelle si renseignée
    if (config.exceptionalService.description && config.exceptionalService.price > 0) {
      installationDetails.push([
        'PRESTATION EXCEPTIONNELLE',
        config.exceptionalService.description.toUpperCase(),
        `${config.exceptionalService.price.toLocaleString()} €`
      ]);
    }
    
    // Ne pas ajouter de ligne TOTAL TTC dans le tableau
    
    // Ajouter le tableau au document
    autoTable(doc, {
      startY: 125,
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
    
    // Titre de la page des spécifications techniques (plus grand)
    doc.setFontSize(16);
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
      // Vérifier si nous avons besoin d'une nouvelle page
      if (yPosition > doc.internal.pageSize.getHeight() - 60) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Fond de la section (plus visible)
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(15, yPosition, pageWidth - 30, 16, 2, 2, 'F');
      
      // Titre de la section
      doc.setFontSize(13); // Taille de texte augmentée pour les titres de section
      doc.setTextColor(11, 98, 145);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, yPosition + 11);
      
      // Contenu de la section
      let currentY = yPosition + 25; // Plus d'espace entre le titre et le contenu
      content.forEach((item: SectionItem) => {
        // Vérifier si nous avons besoin d'une nouvelle page
        if (currentY > doc.internal.pageSize.getHeight() - 40) {
          doc.addPage();
          currentY = 20;
        }
        
        // Titre de l'item
        doc.setFontSize(11); // Taille de texte augmentée pour les titres
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(70, 70, 70);
        doc.text(item.title, 20, currentY);
        currentY += 8; // Plus d'espace après le titre
        
        // Contenu de l'item
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10); // Taille de texte augmentée
        doc.setTextColor(0, 0, 0);
        
        // Afficher les détails sur une seule colonne pour plus de lisibilité
        const details = item.details;
        
        for (let i = 0; i < details.length; i++) {
          // Vérifier si nous avons besoin d'une nouvelle page
          if (currentY > doc.internal.pageSize.getHeight() - 30) {
            doc.addPage();
            currentY = 20;
          }
          
          doc.text(`• ${details[i]}`, 25, currentY);
          currentY += 7; // Plus d'espace entre les lignes
        }
        
        currentY += 5; // Plus d'espace entre les items
      });
      
      return currentY;
    };
    
    // Panneaux solaires
    let yPos = 30;
    const equipmentInfoPdf = EQUIPMENT_INFO[config.configurationType];
    
    yPos = drawSection(`Panneaux solaires ${equipmentInfoPdf.panels.brand} ${equipmentInfoPdf.panels.model}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Puissance nominale : ${equipmentInfoPdf.panels.specs.power}`,
          `Rendement : ${equipmentInfoPdf.panels.specs.efficiency}`,
          `Dimensions : ${equipmentInfoPdf.panels.specs.dimensions}`,
          `Poids : ${equipmentInfoPdf.panels.specs.weight}`,
          `Cellules : ${equipmentInfoPdf.panels.specs.cells}`,
          `Tension maximale : ${equipmentInfoPdf.panels.specs.maxVoltage}`,
          `Courant maximal : ${equipmentInfoPdf.panels.specs.maxCurrent}`
        ]
      },
      {
        title: "Garanties et Certifications",
        details: equipmentInfoPdf.panels.certifications
      }
    ]);
    
    // Micro-onduleurs
    yPos += 10;
    yPos = drawSection(`Onduleurs ${equipmentInfoPdf.inverter.brand} ${equipmentInfoPdf.inverter.model}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Puissance de sortie maximale : ${equipmentInfoPdf.inverter.specs.maxPower}`,
          `Compatibilité : ${equipmentInfoPdf.inverter.specs.compatibility}`,
          `Plage de tension MPPT : ${equipmentInfoPdf.inverter.specs.mpptRange}`,
          `Rendement maximal : ${equipmentInfoPdf.inverter.specs.efficiency}`,
          `Indice de protection : ${equipmentInfoPdf.inverter.specs.protection}`,
          `Garantie : ${equipmentInfoPdf.inverter.warranty}`
        ]
      },
      {
        title: "Fonctionnalités Avancées",
        details: equipmentInfoPdf.inverter.features
      }
    ]);
    
    // Système de fixation
    yPos += 10;
    yPos = drawSection(`Système de fixation ${equipmentInfoPdf.mounting.brand}`, yPos, [
      {
        title: "Caractéristiques Techniques",
        details: [
          `Charge de neige testée jusqu'à ${equipmentInfoPdf.mounting.specs.snowLoad}`,
          `Résistance au vent jusqu'à ${equipmentInfoPdf.mounting.specs.windResistance}`,
          `Inclinaison possible de ${equipmentInfoPdf.mounting.specs.inclination}`,
          `Compatible avec ${equipmentInfoPdf.mounting.specs.compatibility}`,
          `Durée de vie ${equipmentInfoPdf.mounting.specs.lifespan}`
        ]
      },
      {
        title: "Certifications",
        details: equipmentInfoPdf.mounting.certifications
      }
    ]);
    
    // Systèmes de monitoring - Section mise en évidence
    yPos += 15;
    
    // Vérifier si nous avons besoin d'une nouvelle page
    if (yPos > doc.internal.pageSize.getHeight() - 100) {
      doc.addPage();
      yPos = 30;
      
      // Ajouter un titre pour la nouvelle page
      doc.setFontSize(16);
      doc.setTextColor(11, 98, 145);
      doc.setFont('helvetica', 'bold');
      doc.text("SYSTÈMES DE MONITORING INCLUS", pageWidth / 2, 15, { align: "center" });
      
      // Ligne de séparation
      doc.setDrawColor(11, 98, 145);
      doc.setLineWidth(0.5);
      doc.line(20, 20, pageWidth - 20, 20);
    }
    
    // Fond spécial pour la section monitoring
    doc.setFillColor(230, 240, 250); // Bleu très clair pour mettre en évidence
    doc.roundedRect(15, yPos, pageWidth - 30, 18, 3, 3, 'F');
    
    // Titre de la section avec icône
    doc.setFontSize(14);
    doc.setTextColor(11, 98, 145);
    doc.setFont('helvetica', 'bold');
    doc.text(`SYSTÈMES DE MONITORING INCLUS`, 20, yPos + 12);
    
    yPos += 25;
    
    yPos = drawSection(`Monitoring Enphase`, yPos, [
      {
        title: "Caractéristiques principales",
        details: [
          "Visualisation en temps réel de la production des micro-onduleurs",
          "Suivi de performance détaillé par panneau",
          "Alertes automatiques en cas de dysfonctionnement",
          "Application mobile et interface web intuitive",
          "Historique de production détaillé avec graphiques",
          "Rapports de performance personnalisables"
        ]
      }
    ]);
    
    yPos += 15;
    
    yPos = drawSection(`Monitoring Horus Pro 2.0 S (Bourgeois Global)`, yPos, [
      {
        title: "Caractéristiques principales",
        details: [
          "Visualisation de la production des micro-onduleurs BOURGEOIS GLOBAL",
          "Suivi précis de la consommation électrique du foyer",
          "Analyse détaillée des données de production et consommation",
          "Interface utilisateur intuitive accessible sur tous supports",
          "Rapports mensuels automatiques par email",
          "Optimisation intelligente de l'autoconsommation"
        ]
      }
    ]);
    
    // Ajouter les mentions légales sur la dernière page
    // Vérifier sur quelle page nous sommes
    const currentPage = doc.internal.pages.length - 1; // Les pages commencent à l'index 1, mais l'array à 0
    doc.setPage(currentPage);
    
    // Mentions légales et conditions
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    const legalTextPage = [
      "Devis valable 30 jours à compter de sa date d'émission.",
      "Conditions de paiement : 30% à la commande, solde à la fin des travaux.",
      "Délai d'exécution : 4 à 8 semaines après acceptation du devis et obtention des autorisations nécessaires."
    ];
    
    // Positionner les mentions légales
    doc.text(legalTextPage.join("\n"), pageWidth / 2, doc.internal.pageSize.getHeight() - 30, { align: 'center' });
    
    // Pied de page (une seule ligne, en dernier)
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("MY OHM TECHNOLOGIES - SIREN: 917601908 - TVA: FR56917601908", pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
    
    // Ajouter le pied de page sur toutes les pages
    const totalPages = doc.internal.pages.length - 1; // -1 car la première page est à l'index 0 mais est vide
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} / ${totalPages}`, pageWidth - 20, doc.internal.pageSize.getHeight() - 10, { align: 'right' });
    }
    
      // Sauvegarder le PDF
      const clientName = `${client.lastName}_${client.firstName}`.replace(/\s+/g, '_').toLowerCase();
      const pdfFileName = `devis_myohm_${clientName}_${today.toISOString().split('T')[0]}.pdf`;
      doc.save(pdfFileName);
      
      // Sauvegarder le devis dans l'historique via l'API
      try {
        // Vérifier si la prestation exceptionnelle est renseignée
        const hasExceptionalService = config.exceptionalService && 
                                     config.exceptionalService.description && 
                                     config.exceptionalService.price > 0;
        
        console.log('Données du devis à sauvegarder:', {
          client,
          config,
          totalPrice,
          hasExceptionalService,
          exceptionalService: config.exceptionalService
        });
        
        // Créer une copie de la configuration pour la manipulation
        const configToSave: any = { ...config };
        
        // Si la prestation exceptionnelle n'est pas remplie, la supprimer complètement
        if (!hasExceptionalService) {
          delete configToSave.exceptionalService;
        }
        
        // Appel asynchrone pour sauvegarder le devis
        saveQuote({
          client,
          config: configToSave,
          totalPrice
        }).then(savedQuote => {
          console.log('Devis sauvegardé avec succès:', savedQuote);
          
          if (savedQuote && savedQuote._id) {
            setSuccessMessage(`Devis généré avec succès et sauvegardé dans l'historique (ID: ${savedQuote._id})`);
          } else {
            setSuccessMessage(`Devis généré avec succès`);
          }
          
          // Effacer le message après 5 secondes
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        }).catch(error => {
          console.error('Erreur lors de la sauvegarde du devis:', error);
        });
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du devis:', error);
      }
      
      setIsGenerating(false);
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
            
            {/* Sélection du type de configuration */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                <DocumentTextIcon className="h-5 w-5 inline mr-2 text-blue-500" />
                Type de configuration
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    config.configurationType === 'dualsun_enphase' 
                      ? 'border-[#0B6291] bg-[#d7f0fc]/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleConfigChange('configurationType', 'dualsun_enphase')}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-5 h-5 rounded-full border ${
                      config.configurationType === 'dualsun_enphase' 
                        ? 'bg-[#0B6291] border-[#0B6291]' 
                        : 'border-gray-300'
                    } flex items-center justify-center mr-2`}>
                      {config.configurationType === 'dualsun_enphase' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">{EQUIPMENT_INFO.dualsun_enphase.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">Panneaux Dualsun fabriqués en France avec micro-onduleurs Enphase</p>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer ${
                    config.configurationType === 'bourgeois_global' 
                      ? 'border-[#0B6291] bg-[#d7f0fc]/20' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleConfigChange('configurationType', 'bourgeois_global')}
                >
                  <div className="flex items-center mb-2">
                    <div className={`w-5 h-5 rounded-full border ${
                      config.configurationType === 'bourgeois_global' 
                        ? 'bg-[#0B6291] border-[#0B6291]' 
                        : 'border-gray-300'
                    } flex items-center justify-center mr-2`}>
                      {config.configurationType === 'bourgeois_global' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className="font-medium">{EQUIPMENT_INFO.bourgeois_global.name}</span>
                  </div>
                  <p className="text-sm text-gray-500">Solution complète Bourgeois Global avec onduleurs intégrés</p>
                </div>
              </div>
            </div>
            
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
                    {SOLAR_PANELS_DATA.map((option, index) => (
                      <tr 
                        key={index}
                        className={option.power === config.installationPower ? 'bg-[#ffeb99]/30' : 'hover:bg-gray-50'}
                      >
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{option.power} kWc</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{formatPrice(PRICES.installation[config.configurationType][option.power as PowerOption])} €</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.panels}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.surface} m²</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{option.production} kWh</td>
                        <td className="py-3 px-4 text-sm">
                          <button
                            onClick={() => handleConfigChange('installationPower', option.power)}
                            className={`w-5 h-5 rounded-full border ${
                              option.power === config.installationPower 
                                ? 'bg-[#0B6291] border-[#0B6291]' 
                                : 'border-gray-300'
                            } flex items-center justify-center`}
                          >
                            {option.power === config.installationPower && (
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
                  <p className="text-sm text-gray-500">Stockage Fox pour une autonomie énergétique</p>
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
                  <p className="text-sm text-gray-500">Boîtier MyLight pour stockage virtuel sur le réseau</p>
                  <p className="text-sm font-medium text-[#0B6291] mt-2">+ {BATTERY_PRICES.virtual.price.toLocaleString()} €</p>
                </div>
              </div>
              
              {/* Options de marque pour les batteries physiques */}
              {config.batteryType === 'physical' && (
                <div className="mt-4 border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-medium mb-3">Marque de batterie</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div 
                      className={`border rounded-lg p-3 cursor-pointer ${
                        config.batteryBrand === 'fox' 
                          ? 'border-[#0B6291] bg-white' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      onClick={() => handleConfigChange('batteryBrand', 'fox')}
                    >
                      <div className="flex items-center mb-1">
                        <div className={`w-4 h-4 rounded-full border ${
                          config.batteryBrand === 'fox' 
                            ? 'bg-[#0B6291] border-[#0B6291]' 
                            : 'border-gray-300'
                        } flex items-center justify-center mr-2`}>
                          {config.batteryBrand === 'fox' && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">Fox</span>
                      </div>
                      <p className="text-sm text-gray-500">Batteries de stockage Fox</p>
                    </div>
                    <div 
                      className={`border rounded-lg p-3 cursor-pointer ${
                        config.batteryBrand === 'enphase' 
                          ? 'border-[#0B6291] bg-white' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      onClick={() => handleConfigChange('batteryBrand', 'enphase')}
                    >
                      <div className="flex items-center mb-1">
                        <div className={`w-4 h-4 rounded-full border ${
                          config.batteryBrand === 'enphase' 
                            ? 'bg-[#0B6291] border-[#0B6291]' 
                            : 'border-gray-300'
                        } flex items-center justify-center mr-2`}>
                          {config.batteryBrand === 'enphase' && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">Enphase</span>
                      </div>
                      <p className="text-sm text-gray-500">Batteries de stockage Enphase</p>
                    </div>
                  </div>
                  
                  {/* Options de capacité pour les batteries Fox */}
                  {config.batteryBrand === 'fox' && (
                    <div>
                      <h4 className="font-medium mb-3">Capacité de la batterie Fox</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {BATTERY_PRICES.physical.fox.map((battery, index) => (
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
                  
                  {/* Options de capacité pour les batteries Enphase */}
                  {config.batteryBrand === 'enphase' && (
                    <div>
                      <h4 className="font-medium mb-3">Capacité de la batterie Enphase</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {BATTERY_PRICES.physical.enphase.map((battery, index) => (
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
            
            {/* Prestation exceptionnelle */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                <PlusIcon className="h-5 w-5 inline mr-2 text-purple-500" />
                Prestation exceptionnelle (optionnelle)
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description de la prestation
                  </label>
                  <input
                    type="text"
                    value={config.exceptionalService.description}
                    onChange={(e) => {
                      const newConfig = {
                        ...config,
                        exceptionalService: {
                          ...config.exceptionalService,
                          description: e.target.value
                        }
                      };
                      setConfig(newConfig);
                    }}
                    placeholder="Ex: Installation d'un système de monitoring avancé"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prix de la prestation (€)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={config.exceptionalService.price}
                      onChange={(e) => {
                        const newConfig = {
                          ...config,
                          exceptionalService: {
                            ...config.exceptionalService,
                            price: parseInt(e.target.value) || 0
                          }
                        };
                        setConfig(newConfig);
                      }}
                      className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B6291]"
                    />
                    <span className="ml-2 text-gray-700">€</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Laissez vide si aucune prestation supplémentaire n'est nécessaire.</p>
                </div>
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
                  <span className="font-medium">Configuration :</span> {EQUIPMENT_INFO[config.configurationType].name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Installation panneaux solaires :</span> {config.installationPower} kWc - 
                  {getPanelCount(config.installationPower)} panneaux - 
                  {getSurfaceArea(config.installationPower)} m²
                </p>
                
                {config.batteryType === 'physical' && (
                  <p className="text-gray-700">
                    <span className="font-medium">Batterie de stockage :</span> {BATTERY_PRICES.physical[config.batteryBrand][config.batteryCapacityIndex].label}
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
                
                {config.exceptionalService.description && config.exceptionalService.price > 0 && (
                  <p className="text-gray-700">
                    <span className="font-medium">Prestation exceptionnelle :</span> {config.exceptionalService.description} - {config.exceptionalService.price.toLocaleString()} €
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 flex flex-col items-end">
              <div className="text-3xl font-bold text-[#0B6291]">
                {totalPrice.toLocaleString()} € TTC
              </div>
              <p className="text-sm text-gray-500 mb-4">TVA incluse</p>
              
              <div className="flex flex-col items-end space-y-2">
                <button
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className={`flex items-center px-6 py-3 bg-gradient-to-r from-[#0B6291] to-[#d7f0fc] text-white rounded-lg font-medium hover:opacity-90 transition-opacity ${isGenerating ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                      Générer le devis PDF
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => router.push('/dashboard/devis/historique')}
                  className="flex items-center px-4 py-2 text-[#0B6291] border border-[#0B6291] rounded-lg font-medium hover:bg-[#d7f0fc]/20 transition-colors"
                >
                  <ClockIcon className="h-4 w-4 mr-2" />
                  Voir l'historique des devis
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Message de succès */}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default DevisPage;
