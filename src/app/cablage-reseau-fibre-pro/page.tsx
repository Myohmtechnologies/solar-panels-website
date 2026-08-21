'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  WifiIcon,
  ServerIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  CommandLineIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import ContactCTASection from '@/components/sections/ContactCTASection';
import CablageReseauModal from '@/components/modals/CablageReseauModal';

const stats = [
  { label: 'Prises RJ45 Certifiées', value: '4 800+' },
  { label: 'Mètres de Fibre Posés', value: '12 500m+' },
  { label: 'Baies de Brassage Câblées', value: '180+' },
  { label: 'Taux de Fiabilité Réseau', value: '99.99%' }
];

const coreServices = [
  {
    title: 'Câblage Structuré RJ45 (Cat 6a / 7 / 8)',
    description: 'Tirage de câbles cuivre à haut débit pour vos postes de travail, téléphones IP, bornes Wi-Fi et caméras. Pose de goulottes, de prises RJ45 murales et repérage systématique.',
    benefits: [
      'Câbles blindés (S/FTP) anti-interférences',
      'Débits garantis jusqu\'à 10 Gbits/s',
      'Intégration esthétique dans vos locaux',
      'Matériel professionnel certifié'
    ],
    icon: WifiIcon
  },
  {
    title: 'Raccordement & Soudure Fibre Optique',
    description: 'Déploiement de liaisons optiques multimodes (OM3/OM4) ou monomodes (OS2) pour connecter vos différents sous-répartiteurs ou bâtiments sans aucune perte de débit.',
    benefits: [
      'Soudure par fusion haute précision',
      'Liaisons inter-bâtiments très longue distance',
      'Raccordement de tiroirs optiques en baie',
      'Immune aux perturbations électriques'
    ],
    icon: ServerIcon
  },
  {
    title: 'Certification de Réseau Fluke Networks',
    description: 'Chaque prise et fibre installée fait l\'objet d\'un test de recette avec un certificateur Fluke officiel. Nous vous remettons le rapport complet validant la conformité aux normes ISO/IEC.',
    benefits: [
      'Garantie de performance physique des liens',
      'Détection des défauts de diaphonie et affaiblissement',
      'Rapport PDF détaillé port par port',
      'Indispensable pour la garantie décennale'
    ],
    icon: ClipboardDocumentCheckIcon
  },
  {
    title: 'Audit & Audit de Baie (Nettoyage de Baie)',
    description: 'Une baie de brassage désorganisée nuit à la maintenance. Nous réorganisons vos baies existantes, remplaçons les cordons défectueux, étiquetons les câbles et optimisons le flux d\'air.',
    benefits: [
      'Diminution des pannes dues à la surchauffe',
      'Facilité de dépannage pour vos équipes IT',
      'Remplacement par des jarretières sur-mesure',
      'Intervention en horaires décalés pour zéro coupure'
    ],
    icon: WrenchScrewdriverIcon
  }
];

const steps = [
  {
    num: '01',
    title: 'Audit & Étude des Plans',
    desc: 'Analyse de vos locaux, des plans de masse, du nombre de collaborateurs et des besoins en débits pour concevoir l\'architecture réseau idéale.'
  },
  {
    num: '02',
    title: 'Tirage & Pose des Infrastructures',
    desc: 'Pose des chemins de câbles, goulottes et tirage des câbles réseau cuivre et optiques dans le respect des rayons de courbure obligatoires.'
  },
  {
    num: '03',
    title: 'Équipement & Brassage',
    desc: 'Montage des baies de brassage, raccordement des connecteurs femelles RJ45, tiroirs optiques, et raccordement propre des jarretières.'
  },
  {
    num: '04',
    title: 'Tests, Certification & Recette',
    desc: 'Tests de tous les liens à l\'aide de nos certificateurs Fluke, étiquetage réglementaire des prises et remise du dossier de recette.'
  }
];

const testimonials = [
  {
    name: 'Olivier D.',
    location: 'Sophia Antipolis',
    role: 'Directeur des Systèmes d\'Information',
    company: 'Entreprise Tech (80 postes)',
    text: 'My Ohm Technologies a câblé l\'ensemble de nos nouveaux bureaux en Cat 6a. Le travail sur la baie de brassage 42U est d\'une propreté exemplaire, et le cahier de recette Fluke nous a été remis dès le lendemain. Un vrai travail de pro.',
    stars: 5,
    tag: 'Câblage Cat 6a & Baie 42U'
  },
  {
    name: 'Sarah M.',
    location: 'Toulon',
    role: 'Gérante d\'Établissement Hôtelier',
    company: 'Complexe Hôtelier & Résidence',
    text: 'Nous devions relier trois bâtiments distincts en fibre optique monomode pour étendre notre réseau Wi-Fi client. L\'équipe a réalisé les soudures de fibre et installé les tiroirs optiques très proprement. Le débit est ultra-stable partout.',
    stars: 5,
    tag: 'Fibre Optique Monomode'
  },
  {
    name: 'Dr. Thomas B.',
    location: 'Marseille (8e)',
    role: 'Médecin Coordinateur',
    company: 'Centre Médical Pluridisciplinaire',
    text: 'Installation de 35 prises RJ45 blindées pour nos équipements d\'imagerie et postes médicaux. Travail soigné, aucune goulotte apparente disgracieuse et respect strict des normes de sécurité.',
    stars: 5,
    tag: 'Réseau Santé & Sécurité'
  },
  {
    name: 'Laurent V.',
    location: 'Manosque',
    role: 'Directeur de Site Industriel',
    company: 'Site de Production & Logistique',
    text: 'Câblage en grande hauteur avec nacelle dans notre atelier de production. Les techniciens sont certifiés et ont parfaitement protégé les câbles dans des chemins de câbles métalliques.',
    stars: 5,
    tag: 'Câblage Industriel CACES'
  },
  {
    name: 'Émilie R.',
    location: 'Nice',
    role: 'Fondatrice & Gestionnaire',
    company: 'Espace de Coworking (400 m²)',
    text: 'Déploiement de 12 bornes Wi-Fi 6 professionnelles en PoE et brassage complet de notre baie. Nos 60 coworkers ont désormais une connexion sans fil ultra-rapide sans aucune micro-coupure.',
    stars: 5,
    tag: 'Wi-Fi 6 Haute Densité'
  },
  {
    name: 'Marc A.',
    location: 'Aix-en-Provence',
    role: 'Expert-Comptable Associé',
    company: 'Cabinet d\'Audit & Conseil',
    text: 'Notre ancienne baie était un véritable plat de spaghettis. My Ohm a réalisé un nettoyage de baie de nuit : remplacement des cordons, étiquetage clair et remise au propre. Zéro impact sur notre journée de travail.',
    stars: 5,
    tag: 'Nettoyage & Audit de Baie'
  },
  {
    name: 'Julien P.',
    location: 'Avignon',
    role: 'Responsable d\'Exploitation',
    company: 'Concession Automobile',
    text: 'Création du réseau pour le showroom commercial et l\'atelier mécanique, incluant le raccordement de 16 caméras IP. Équipe ponctuelle, dynamique et devis respecté au centime près.',
    stars: 5,
    tag: 'Réseau & Vidéosurveillance IP'
  },
  {
    name: 'Claire D.',
    location: 'Cannes',
    role: 'Directrice d\'Établissement',
    company: 'Campus & École Privée',
    text: 'Mise en place du réseau informatique pour 4 salles de classe numériques et la salle des professeurs. Le test Fluke a confirmé un débit maximal sur chaque prise. Nous recommandons sans hésiter.',
    stars: 5,
    tag: 'Certification Fluke Réseau'
  },
  {
    name: 'Antoine G.',
    location: 'Marseille',
    role: 'Directeur d\'Agence',
    company: 'Studio de Création & Post-production',
    text: 'Nos serveurs NAS nécessitaient des transferts très lourds. My Ohm nous a installé un réseau 10 Gbits/s en Cat 7 avec switchs managés. Nos temps de rendu et d\'échange de rushs 4K ont été divisés par 5.',
    stars: 5,
    tag: 'Réseau 10 Gbits/s Cat 7'
  },
  {
    name: 'Philippe B.',
    location: 'Cavaillon',
    role: 'Directeur Logistique',
    company: 'Plateforme de Distribution',
    text: 'Liaison fibre de 350 mètres entre nos bureaux administratifs et le quai d\'expédition. Soudure par fusion irréprochable et dossier technique complet fourni. Des experts très compétents.',
    stars: 5,
    tag: 'Liaison Fibre Longue Distance'
  }
];

const faqs = [
  {
    question: 'Quelle catégorie de câble réseau choisir pour mes locaux professionnels ?',
    answer: 'Pour la majorité des entreprises, nous recommandons le câble Catégorie 6A (Cat 6a) blindé S/FTP. Il supporte des débits allant jusqu\'à 10 Gbits/s sur une distance de 100 mètres et est parfaitement adapté pour la téléphonie IP, le transfert de gros fichiers et le Wi-Fi 6/7. Pour les liaisons de serveurs à serveurs de très haute performance, la catégorie 8 peut être envisagée sur de courtes distances.'
  },
  {
    question: 'Qu\'est-ce que la certification Fluke Networks et pourquoi est-elle nécessaire ?',
    answer: 'La certification avec un appareil Fluke Networks consiste à tester physiquement chaque câble installé sous des conditions de fréquence extrêmes. Ce test mesure l\'affaiblissement du signal, la diaphonie (interférences entre paires) et la longueur exacte du câble. Elle garantit que l\'installation respecte strictement les normes internationales (NF EN 50173) et qu\'aucun câble n\'est plié ou défectueux. Ce rapport de test vous est fourni et sert de garantie de bon fonctionnement.'
  },
  {
    question: 'Réalisez-vous les interventions en dehors des heures de bureau ?',
    answer: 'Oui, tout à fait. Nous comprenons qu\'une coupure réseau en pleine journée peut paralyser votre activité commerciale. C\'est pourquoi nous pouvons planifier les opérations critiques de coupure, de transfert de baie de brassage ou d\'audit de réseau en soirée ou durant le week-end afin de garantir un impact nul sur le travail de vos collaborateurs.'
  },
  {
    question: 'Proposez-vous le câblage pour les caméras de sécurité et bornes Wi-Fi (PoE) ?',
    answer: 'Absolument. Nos câblages réseaux prennent totalement en charge la technologie PoE (Power over Ethernet). Cela permet d\'alimenter électriquement vos téléphones IP, vos bornes Wi-Fi professionnelles et vos caméras de vidéosurveillance directement à travers le câble réseau RJ45, évitant ainsi d\'avoir à installer des prises électriques supplémentaires près de chaque appareil.'
  },
  {
    question: 'Quelle est la différence entre la fibre optique Monomode et Multimode ?',
    answer: 'La fibre Multimode (OM3/OM4) utilise plusieurs rayons de lumière pour transmettre les données et est idéale pour les courtes distances (jusqu\'à 400m), comme les connexions internes dans un bâtiment ou un data center. La fibre Monomode (OS2) utilise un seul rayon laser très précis et permet des liaisons à très haut débit sur des dizaines de kilomètres sans perte, ce qui est parfait pour relier des sites industriels ou des bâtiments distants.'
  },
  {
    question: 'Quelles garanties offrez-vous sur vos installations de câblage ?',
    answer: 'Toutes nos installations de câblage informatique et de fibre optique sont couvertes par notre Garantie Décennale (assurance décennale). De plus, l\'utilisation de composants certifiés de grandes marques (Nexans, Legrand, Schneider) nous permet d\'offrir des garanties constructeur allant jusqu\'à 20 ans sur les liens câblés une fois la recette Fluke validée.'
  },
  {
    question: 'Pouvez-vous intervenir dans des entrepôts ou des locaux industriels de grande hauteur ?',
    answer: 'Oui. Nos techniciens qualifiés possèdent les habilitations nécessaires (CACES pour l\'utilisation de nacelles élévatrices) pour intervenir dans des environnements complexes comme des entrepôts logistiques, des usines ou des hangars. Nous adaptons la protection des câbles (tubes en acier, goulottes industrielles) pour résister aux environnements sévères.'
  }
];

export default function CablageReseauFibreProPage() {
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const openExpertModal = () => setIsExpertModalOpen(true);
  const closeExpertModal = () => setIsExpertModalOpen(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#116290]/5" />
          <div className="absolute inset-0 opacity-5 bg-grid-gray/10" style={{ backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-900"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#116290]/10 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-[#116290] animate-pulse" />
                <span className="text-[#116290] text-sm font-semibold tracking-wide uppercase">Réseaux d'Entreprise & Fibre - PACA</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight mb-6">
                Câblage Informatique & Raccordement Fibre
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Garantissez la vitesse, la sécurité et la stabilité de votre réseau local. Tirage de câbles cuivre Catégorie 6a/7/8, raccordement de fibre optique, pose de baies de brassage et certification Fluke.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openExpertModal}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-ffeb99 to-ffb700 text-black rounded-full font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
                >
                  Estimer mon projet réseau
                  <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+33492766858"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#116290]/20 text-[#116290] rounded-full font-bold text-lg hover:bg-[#116290]/5 transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  04 92 76 68 58
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-4"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-square md:aspect-[4/3] w-full border border-gray-100">
                <Image
                  src="/images/cablage-reseau-pro.jpg"
                  alt="Câblage réseau informatique et baie de brassage professionnelle"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#116290] mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
              Nos Solutions Câblage & Fibre Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous concevons des infrastructures physiques robustes adaptées aux exigences de débit et de sécurité de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#116290]/10 flex items-center justify-center text-[#116290] mb-6">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-[#ffb700] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={openExpertModal}
                  className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-[#116290] hover:text-white hover:border-[#116290] active:scale-[0.98] transition-all text-xs text-center"
                >
                  Faire une demande d'étude
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Steps Section */}
      <section className="py-20 lg:py-28 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
              Méthodologie de Déploiement Réseau
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un déploiement rigoureux pour garantir le respect des normes et la performance maximale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                <span className="text-5xl font-black text-gray-100 absolute top-4 right-4">{step.num}</span>
                <h3 className="text-base font-bold text-gray-950 mb-3 mt-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-yellow-500/10 rounded-full mb-4">
              <span className="text-yellow-700 font-bold text-xs uppercase tracking-wider">Avis Clients Vérifiés Google 5.0 ★</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
              Ils Nous Font Confiance en Région PACA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients professionnels pour qui nous avons déployé et certifié le réseau informatique.
            </p>
          </div>
        </div>

        {/* Animated Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing px-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 45,
                ease: 'linear'
              }
            }}
            whileHover={{ transition: { duration: 0 } }}
          >
            {[...testimonials, ...testimonials].map((test, index) => (
              <div
                key={index}
                className="w-[320px] sm:w-[380px] flex-shrink-0 bg-gray-50/80 hover:bg-white p-7 rounded-3xl border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#116290]/10 text-[#116290] rounded-full">
                      {test.tag}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{test.location}</span>
                  </div>

                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(test.stars)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">{test.name}</h4>
                    <p className="text-gray-500 text-xs">{test.role}</p>
                    <p className="text-gray-400 text-[11px] font-medium">{test.company}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#116290]/10 flex items-center justify-center text-[#116290] font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-950 mb-4">
              Questions Fréquentes Câblage & Réseau Pro
            </h2>
            <p className="text-base text-gray-600">
              Des réponses claires pour aborder sereinement votre projet de raccordement d\'entreprise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50/50 transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-gray-950 text-base sm:text-lg leading-snug pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold transition-transform duration-300">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage & Internal Linking Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Zones d'intervention PACA */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#116290]/10 rounded-full mb-4">
                <span className="text-[#116290] font-bold text-xs uppercase tracking-wider">Intervention Rapide</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4">
                Déploiement Réseau dans Toute la Région PACA
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Nos équipes de techniciens réseau et électriciens qualifiés interviennent sous 48h sur vos sites professionnels, bureaux, cliniques et entrepôts dans l'ensemble des départements du Sud :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { dept: '13 - Bouches-du-Rhône', cities: 'Marseille, Aix-en-Provence, Aubagne, Arles' },
                  { dept: '83 - Var', cities: 'Toulon, La Seyne, Fréjus, Draguignan' },
                  { dept: '06 - Alpes-Maritimes', cities: 'Nice, Cannes, Antibes, Sophia Antipolis' },
                  { dept: '04 - Alpes-de-Haute-Provence', cities: 'Manosque, Digne-les-Bains, Sisteron' },
                  { dept: '84 - Vaucluse', cities: 'Avignon, Cavaillon, Orange, Pertuis' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-bold text-gray-900 text-xs text-[#116290] mb-0.5">{item.dept}</p>
                    <p className="text-gray-500 text-[11px]">{item.cities}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prestations Complémentaires Pro (Maillage Interne) */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ffb700]/10 rounded-full mb-4">
                <span className="text-yellow-700 font-bold text-xs uppercase tracking-wider">Solutions Globales Pro</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4">
                Nos Autres Expertises pour Entreprises
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Profitez d'un interlocuteur unique pour l'ensemble de vos infrastructures techniques et énergétiques :
              </p>
              <div className="space-y-4">
                <Link
                  href="/electricite-generale"
                  className="block p-4 rounded-2xl bg-gray-50 hover:bg-[#116290]/5 border border-gray-100 hover:border-[#116290]/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#116290] transition-colors">
                        ⚡ Électricité Générale Tertiaire & Tableaux
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        Rénovation de tableaux électriques, équilibrage triphasé, éclairage LED de bureaux.
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#116290] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </div>
                </Link>

                <Link
                  href="/borne-de-recharge"
                  className="block p-4 rounded-2xl bg-gray-50 hover:bg-[#116290]/5 border border-gray-100 hover:border-[#116290]/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#116290] transition-colors">
                        🔌 Bornes de Recharge IRVE Flotte d'Entreprise
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        Installation de bornes pour véhicules électriques de société et parkings clients.
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#116290] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </div>
                </Link>

                <Link
                  href="/panneaux-solaire"
                  className="block p-4 rounded-2xl bg-gray-50 hover:bg-[#116290]/5 border border-gray-100 hover:border-[#116290]/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#116290] transition-colors">
                        ☀️ Photovoltaïque & Autoconsommation Entreprise
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        Réduisez les charges électriques de vos bâtiments avec une toiture solaire pro.
                      </p>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#116290] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactCTASection />
      </div>

      {/* Modal Câblage Réseau Pro */}
      <CablageReseauModal isOpen={isExpertModalOpen} onClose={closeExpertModal} />

      {/* JSON-LD Structured Data Schema for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                'name': 'Câblage Informatique & Raccordement Fibre Optique Pro',
                'provider': {
                  '@type': 'LocalBusiness',
                  'name': 'My Ohm Technologies',
                  'telephone': '+33492766858',
                  'url': 'https://www.myohmtechnologies.com',
                  'areaServed': [
                    { '@type': 'AdministrativeArea', 'name': "Provence-Alpes-Côte d'Azur" },
                    { '@type': 'AdministrativeArea', 'name': 'Bouches-du-Rhône' },
                    { '@type': 'AdministrativeArea', 'name': 'Var' },
                    { '@type': 'AdministrativeArea', 'name': 'Alpes-Maritimes' },
                    { '@type': 'AdministrativeArea', 'name': 'Alpes-de-Haute-Provence' },
                    { '@type': 'AdministrativeArea', 'name': 'Vaucluse' }
                  ]
                },
                'description': 'Installation et certification de câblage informatique RJ45 Cat 6a/7/8 et raccordement de fibre optique monomode et multimode pour entreprises en région PACA.'
              },
              {
                '@type': 'FAQPage',
                'mainEntity': faqs.map(faq => ({
                  '@type': 'Question',
                  'name': faq.question,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
    </main>
  );
}
