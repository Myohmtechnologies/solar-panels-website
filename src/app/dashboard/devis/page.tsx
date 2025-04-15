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

// Types pour les configurations
type ConfigurationType = "dualsun" | "bourgeois";
type PowerOption = "1kWc" | "2kWc" | "3kWc" | "4kWc" | "5kWc" | "6kWc" | "7kWc" | "8kWc" | "9kWc";

// Fonctions utilitaires pour les panneaux
const getPanelCount = (power: string): number => {
  const kw = parseInt(power.replace('kWc', ''));
  return kw * 2; // 2 panneaux par kWc
};

const getSurface = (power: string): number => {
  const panels = getPanelCount(power);
  return Math.round(panels * 1.7); // 1.7 m² par panneau
};

const getProduction = (power: string): number => {
  const kw = parseInt(power.replace('kWc', ''));
  return kw * 1200; // 1200 kWh par kWc
};

const formatPrice = (price: number): string => {
  return price.toLocaleString('fr-FR');
};

// Grille tarifaire des panneaux solaires pour les deux configurations
const PRICES: {
  installation: Record<ConfigurationType, Record<PowerOption, number>>
} = {
  installation: {
    dualsun: {
      "1kWc": 4990,
      "2kWc": 7490,
      "3kWc": 9890,
      "4kWc": 10445,
      "5kWc": 12082,
      "6kWc": 13627,
      "7kWc": 14991,
      "8kWc": 16627,
      "9kWc": 18173
    },
    bourgeois: {
      "1kWc": 3490,
      "2kWc": 6000,
      "3kWc": 8290,
      "4kWc": 9990,
      "5kWc": 12000,
      "6kWc": 13290,
      "7kWc": 14490,
      "8kWc": 16980,
      "9kWc": 17990
    }
  }
};

// Informations détaillées sur les équipements utilisés
type EquipmentInfo = {
  panels: {
    brand: string;
    model: string;
    warranty: string;
    origin: string;
    specs: Record<string, string>;
    certifications: string[];
    features?: string[];
  };
  inverter: {
    brand: string;
    model: string;
    warranty: string;
    origin: string;
    specs: Record<string, string>;
    features: string[];
    certifications?: string[];
  };
  mounting: {
    brand: string;
    model?: string;
    warranty?: string;
    origin: string;
    specs: Record<string, string>;
    features?: string[];
    certifications: string[];
  };
};

const EQUIPMENT_INFO: Record<ConfigurationType, EquipmentInfo> = {
  dualsun: {
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
  },
  bourgeois: {
    panels: {
      brand: "Bourgeois Global",
      model: "Premium Series",
      warranty: "25 ans",
      origin: "France",
      // Caractéristiques techniques détaillées
      specs: {
        power: "450W",
        efficiency: "20,5%",
        dimensions: "1700 x 1100 x 35 mm",
        weight: "20 kg",
        cells: "120 cellules monocristallines",
        maxVoltage: "40V",
        maxCurrent: "10A"
      },
      // Garanties et certifications
      certifications: [
        "Garantie de production linéaire sur 25 ans",
        "Garantie produit de 25 ans",
        "Certifié selon les normes IEC 61215 et IEC 61730",
        "Certification résistance au feu classe C",
        "Certifié faible PID (dégradation induite potentielle)"
      ]
    },
    inverter: {
      brand: "Bourgeois Global",
      model: "Onduleur intégré",
      warranty: "20 ans",
      origin: "France",
      // Caractéristiques techniques détaillées
      specs: {
        maxPower: "400W",
        compatibility: "Panneaux jusqu'à 450W",
        mpptRange: "25-40V",
        efficiency: "97%",
        protection: "IP65"
      },
      // Fonctionnalités avancées
      features: [
        "Système intégré aux panneaux",
        "Rendement: 97%",
        "Monitoring en temps réel",
        "Température de fonctionnement: -30°C à +60°C"
      ]
    },
    mounting: {
      brand: "Bourgeois Global",
      model: "Fixation Premium",
      warranty: "15 ans",
      origin: "France",
      // Caractéristiques techniques détaillées
      specs: {
        snowLoad: "4 kN/m²",
        windResistance: "2 kN/m²",
        inclination: "5° à 60°",
        compatibility: "Tous types de toitures",
        lifespan: "> 15 ans"
      },
      // Certifications
      certifications: [
        "Certification Eurocode 1 - Actions sur les structures",
        "Test en soufflerie",
        "Garantie produit de 15 ans",
        "Certification TÜV",
        "Conformité CE"
      ]
    }
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

// Données pour les panneaux solaires par puissance
const SOLAR_PANELS_PRICES = [
  { power: 1, panels: 2, surface: 4, price: 3990 },
  { power: 2, panels: 4, surface: 7, price: 6490 },
  { power: 3, panels: 6, surface: 11, price: 8790 },
  { power: 4, panels: 8, surface: 14, price: 10490 },
  { power: 5, panels: 10, surface: 17, price: 12490 },
  { power: 6, panels: 12, surface: 21, price: 13990 },
  { power: 7, panels: 14, surface: 24, price: 15490 },
  { power: 8, panels: 16, surface: 28, price: 17990 },
  { power: 9, panels: 18, surface: 31, price: 19490 }
];

const DevisPage = () => {
  // Fonction pour gérer les changements dans les données client
  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  // État pour la configuration de l'installation
  const [installationPower, setInstallationPower] = useState("3kWc");
  const [configurationType, setConfigurationType] = useState<ConfigurationType>("dualsun");

  // Calcul du prix total
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Gestion des changements de configuration
  const handleConfigChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Mise à jour du prix total lorsque la configuration change
  useEffect(() => {
    let price = 0;
    
    // Calcul du prix de l'installation selon la configuration choisie
    const powerOption = installationPower as PowerOption;
    const configType = configurationType;
    const installationPrice = PRICES.installation[configType][powerOption];
    price += installationPrice;
    
    // Ajout du prix de la batterie si sélectionnée
    if (config.batteryType === 'physical') {
      price += BATTERY_PRICES.physical[config.batteryCapacityIndex].price;
    } else if (config.batteryType === 'virtual') {
      price += BATTERY_PRICES.virtual.price;
    }
    
    // Application de la réduction
    price -= config.discount;
    
    // Calcul du prix total TTC
    // Appliquer 0% de TVA pour les installations de 1kW à 3kW, 10% pour les autres
    if (['1kWc', '2kWc', '3kWc'].includes(installationPower)) {
      // Pas de TVA
    } else {
      price = price * 1.1; // 10% de TVA
    }
    
    setTotalPrice(price);
  }, [config, installationPower, configurationType]);

// ...

        // Détails de l'installation
        const installationDetails = [
          ['Composant', 'Détails', 'Prix HT'],
          ['Panneaux solaires', `${getPanelCount(installationPower)} x ${EQUIPMENT_INFO[configurationType].panels.brand} ${EQUIPMENT_INFO[configurationType].panels.model}`, `${formatPrice(PRICES.installation[configurationType][installationPower] * 0.7)} €`],
          ['Micro-onduleurs', `${EQUIPMENT_INFO[configurationType].inverter.brand} ${EQUIPMENT_INFO[configurationType].inverter.model} - Garantie ${EQUIPMENT_INFO[configurationType].inverter.warranty} - Fabriqué en ${EQUIPMENT_INFO[configurationType].inverter.origin}`, 'Inclus'],
          ['Système de fixation', `${EQUIPMENT_INFO[configurationType].mounting.brand} ${EQUIPMENT_INFO[configurationType].mounting.model || ""}`, 'Inclus']
        ];

  // Fonction pour générer le PDF
  const generatePDF = () => {
    // Création du document PDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const today = new Date();
    
    // Préchargement du logo
    const logoImg = new Image();
    logoImg.src = '/images/logo.webp';
    
    // Fonction pour ajouter le logo au PDF
    const addLogoToPdf = () => {
      // Conversion du logo en base64
      const canvas = document.createElement('canvas');
      canvas.width = logoImg.width;
      canvas.height = logoImg.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(logoImg, 0, 0);
        const logoBase64 = canvas.toDataURL('image/png');
        
        // Ajout du logo au PDF
        doc.addImage(logoBase64, 'PNG', pageWidth - 60, 10, 40, 20);
      }
      
      addPdfContent();
    };
    
    // Fonction pour ajouter un en-tête de secours si le logo ne se charge pas
    const addFallbackHeader = () => {
      doc.setFontSize(18);
      doc.setTextColor(11, 98, 145); // #0B6291
      doc.text('MY OHM TECHNOLOGIES', 20, 20);
    };
    
    // Fonction pour dessiner une section dans le PDF
    const drawSection = (title: string, startY: number, items: {title: string, details: string[]}[]) => {
      doc.setFontSize(12);
      doc.setTextColor(11, 98, 145); // #0B6291
      doc.text(title, 20, startY);
      
      let y = startY + 8;
      
      items.forEach(item => {
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(item.title, 25, y);
        y += 5;
        
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        
        item.details.forEach(detail => {
          doc.text('• ' + detail, 30, y);
          y += 5;
        });
        
        y += 3;
      });
      
      return y;
    };
    
    // Fonction pour ajouter le contenu principal au PDF
    const addPdfContent = () => {
      // En-tête du devis
      doc.setFontSize(20);
      doc.setTextColor(11, 98, 145); // #0B6291
      doc.text('DEVIS INSTALLATION PHOTOVOLTAÏQUE', 20, 20);
      
      // Informations client
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(`Client: ${client.firstName} ${client.lastName}`, 20, 35);
      doc.text(`Adresse: ${client.address}, ${client.postalCode} ${client.city}`, 20, 42);
      doc.text(`Email: ${client.email} - Tél: ${client.phone}`, 20, 49);
      
      // Date et numéro de devis
      doc.text(`Date: ${today.toLocaleDateString('fr-FR')}`, pageWidth - 80, 35);
      doc.text(`Devis N°: ${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`, pageWidth - 80, 42);
      
      // Détails de l'installation
      const installationDetails = [
        ['Composant', 'Détails', 'Prix HT'],
        ['Panneaux solaires', `${getPanelCount(installationPower)} x ${EQUIPMENT_INFO[configurationType].panels.brand} ${EQUIPMENT_INFO[configurationType].panels.model}`, `${formatPrice(PRICES.installation[configurationType][installationPower as PowerOption] * 0.7)} €`],
        ['Micro-onduleurs', `${EQUIPMENT_INFO[configurationType].inverter.brand} ${EQUIPMENT_INFO[configurationType].inverter.model} - Garantie ${EQUIPMENT_INFO[configurationType].inverter.warranty} - Fabriqué en ${EQUIPMENT_INFO[configurationType].inverter.origin}`, 'Inclus'],
        ['Système de fixation', `${EQUIPMENT_INFO[configurationType].mounting.brand} ${EQUIPMENT_INFO[configurationType].mounting.model || ""}`, 'Inclus']
      ];
      
      // Ajout de la batterie si sélectionnée
      if (config.batteryType === 'physical') {
        installationDetails.push(['Batterie de stockage', BATTERY_PRICES.physical[config.batteryCapacityIndex].label, `${formatPrice(BATTERY_PRICES.physical[config.batteryCapacityIndex].price)} €`]);
      } else if (config.batteryType === 'virtual') {
        installationDetails.push(['Stockage virtuel', BATTERY_PRICES.virtual.label, `${formatPrice(BATTERY_PRICES.virtual.price)} €`]);
      }
      
      // Ajout de la réduction si applicable
      if (config.discount > 0) {
        installationDetails.push(['Réduction commerciale', '', `-${formatPrice(config.discount)} €`]);
      }
      
      // Calcul du total HT
      const powerOption = installationPower as PowerOption;
      let totalHT = PRICES.installation[configurationType][powerOption];
      if (config.batteryType === 'physical') {
        totalHT += BATTERY_PRICES.physical[config.batteryCapacityIndex].price;
      } else if (config.batteryType === 'virtual') {
        totalHT += BATTERY_PRICES.virtual.price;
      }
      totalHT -= config.discount;
      
      // Ajout des totaux
      installationDetails.push(['Total HT', '', `${formatPrice(totalHT)} €`]);
      
      // Appliquer 0% de TVA pour les installations de 1kW à 3kW, 10% pour les autres
      if (['1kWc', '2kWc', '3kWc'].includes(installationPower)) {
        installationDetails.push(['TVA (0%)', '', '0 €']);
        installationDetails.push(['Total TTC', '', `${formatPrice(totalHT)} €`]);
      } else {
        installationDetails.push(['TVA (10%)', '', `${formatPrice(totalHT * 0.1)} €`]);
        installationDetails.push(['Total TTC', '', `${formatPrice(totalHT * 1.1)} €`]);
      }
      
      // Création du tableau
      autoTable(doc, {
        startY: 60,
        head: [installationDetails[0]],
        body: installationDetails.slice(1),
        theme: 'grid',
        headStyles: { fillColor: [11, 98, 145], textColor: 255 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 'auto' },
          2: { cellWidth: 30, halign: 'right' }
        },
        foot: [['', 'Total TTC', `${formatPrice(['1kWc', '2kWc', '3kWc'].includes(installationPower) ? totalHT : totalHT * 1.1)} €`]],
        footStyles: { fillColor: [240, 240, 240], textColor: [11, 98, 145], fontStyle: 'bold' }
      });
      
      // Mentions légales
      const legalText = [
        "Devis valable 30 jours à compter de sa date d'émission.",
        "Conditions de paiement : 30% à la commande, solde à la fin des travaux.",
        "Délai d'exécution : 4 à 8 semaines après acceptation du devis et obtention des autorisations nécessaires.",
        `MY OHM TECHNOLOGIES - SIREN: ${COMPANY_INFO.siren} - TVA: ${COMPANY_INFO.tva}`
      ];
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(legalText.join('\n'), pageWidth / 2, doc.internal.pageSize.getHeight() - 20, { align: 'center' });
      
      // Ajout d'une seconde page avec les détails techniques
      doc.addPage();
      
      // En-tête de la seconde page
      doc.setFontSize(16);
      doc.setTextColor(11, 98, 145); // #0B6291
      doc.text('DÉTAILS TECHNIQUES DE L\'INSTALLATION', pageWidth / 2, 20, { align: 'center' });
      
      // Panneaux solaires
      let yPos = 30;
      yPos = drawSection(`Panneaux solaires ${EQUIPMENT_INFO[configurationType].panels.brand} ${EQUIPMENT_INFO[configurationType].panels.model}`, yPos, [
        {
          title: "Caractéristiques Techniques",
          details: EQUIPMENT_INFO[configurationType].panels.features || []
        },
        {
          title: "Garantie et Origine",
          details: [
            `Garantie produit: ${EQUIPMENT_INFO[configurationType].panels.warranty}`,
            `Pays de fabrication: ${EQUIPMENT_INFO[configurationType].panels.origin}`
          ]
        },
        {
          title: "Certifications",
          details: EQUIPMENT_INFO[configurationType].panels.certifications
        }
      ]);
      
      // Système de fixation
      yPos = drawSection(`Système de fixation ${EQUIPMENT_INFO[configurationType].mounting.brand}`, yPos, [
        {
          title: "Garantie et Origine",
          details: [
            `Garantie produit: ${EQUIPMENT_INFO[configurationType].mounting.warranty || "N/A"}`,
            `Pays de fabrication: ${EQUIPMENT_INFO[configurationType].mounting.origin}`
          ]
        },
        {
          title: "Certifications",
          details: EQUIPMENT_INFO[configurationType].mounting.certifications
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
            
            {/* Choix du type de configuration */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Type de configuration :</p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    configurationType === "dualsun"
                      ? 'bg-[#0B6291] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setConfigurationType("dualsun")}
                >
                  Dualsun + Enphase
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    configurationType === "bourgeois"
                      ? 'bg-[#0B6291] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setConfigurationType("bourgeois")}
                >
                  Full Bourgeois Global
                </button>
              </div>
            </div>
            
            {/* Choix de la puissance */}
            <p className="text-sm font-medium text-gray-700 mb-2">Puissance :</p>
            <div className="grid grid-cols-3 gap-3">
              {Object.keys(PRICES.installation.dualsun).map((power) => (
                <button
                  key={power}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    installationPower === power
                      ? 'bg-[#0B6291] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setInstallationPower(power)}
                >
                  <div className="flex flex-col items-center">
                    <span>{power}</span>
                    <span className="text-xs mt-1">
                      {['1kWc', '2kWc', '3kWc'].includes(power) 
                        ? `${formatPrice(PRICES.installation[configurationType][power as PowerOption])} € TTC` 
                        : `${formatPrice(PRICES.installation[configurationType][power as PowerOption] * 1.1)} € TTC`
                      }
                    </span>
                  </div>
                </button>
              ))}
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
                  <span className="font-medium">Installation panneaux solaires :</span> {installationPower} - 
                  {getPanelCount(installationPower)} panneaux - 
                  {getSurface(installationPower)} m²
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
