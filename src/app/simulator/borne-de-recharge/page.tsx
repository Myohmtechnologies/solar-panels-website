'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { BuildingOfficeIcon, HomeIcon, QuestionMarkCircleIcon, BoltIcon, BoltSlashIcon, CheckCircleIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type UserType = 'enterprise' | 'individual' | null;
type InstallationType = 'monophase' | 'triphase' | 'unknown' | null;
type MountType = 'wall' | 'stand' | null;

export default function ChargingStationSimulator() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [installationType, setInstallationType] = useState<InstallationType>(null);
  const [mountType, setMountType] = useState<MountType>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Calculate estimated price based on selections
  useEffect(() => {
    if (userType && installationType && mountType) {
      let basePrice = userType === 'enterprise' ? 1200 : 800;
      let installationMultiplier = installationType === 'triphase' ? 1.3 : 1;
      let mountMultiplier = mountType === 'stand' ? 1.2 : 1;
      
      const calculatedPrice = basePrice * installationMultiplier * mountMultiplier;
      setEstimatedPrice({
        min: Math.round(calculatedPrice * 0.9),
        max: Math.round(calculatedPrice * 1.1)
      });
    }
  }, [userType, installationType, mountType]);

  const goToNextStep = () => setStep(step + 1);
  const goToPreviousStep = () => setStep(step - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validation basique
    if (!formData.name || !formData.email || !formData.phone || !formData.postalCode) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          postalCode: formData.postalCode,
          projectType: 'CHARGING_STATION',
          source: 'CHARGING_STATION_SIMULATOR',
          notes: `Type d'utilisateur: ${userType}, Type d'installation: ${installationType}, Type de montage: ${mountType}, Message: ${formData.message}`,
          simulatorData: {
            userType,
            installationType,
            mountType,
            estimatedPrice
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      // Show success message before redirecting
      setShowSuccessMessage(true);
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/merci');
      }, 2000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Header avec logo comme dans /simulator */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-sm z-50 px-[10%] py-4 flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="w-auto h-auto"
            priority
          />
        </Link>
      </header>

      {/* Espace pour éviter que le contenu soit caché sous le header fixe */}
      <div className="pt-20"></div>

      {/* Indicateur de progression */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex justify-between items-center max-w-3xl mx-auto mb-6 relative">
          {/* Ligne de progression */}
          <div className="absolute h-1 bg-gray-200 left-0 right-0 top-4 -z-10"></div>
          <div 
            className="absolute h-1 bg-[#0f81ba] left-0 top-4 -z-10 transition-all duration-500"
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-[#0f81ba] text-white scale-110' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {stepNumber}
              </div>
              <div className={`text-xs ${step >= stepNumber ? 'text-[#0c3248]' : 'text-gray-400'} hidden sm:block`}>
                {stepNumber === 1 && 'Profil'}
                {stepNumber === 2 && 'Installation'}
                {stepNumber === 3 && 'Montage'}
                {stepNumber === 4 && 'Contact'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-6 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-gray-900 font-semibold leading-snug">
            Simulateur de borne de recharge
          </h1>
          {step > 1 && (
            <button
              onClick={goToPreviousStep}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Retour à l'étape précédente"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
        </div>

        <div className="mb-4 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Étape {step} sur 4
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {/* Étape 1: Type d'utilisateur */}
            {step === 1 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <motion.h1 variants={itemVariants} className="text-4xl font-bold text-[#0c3248] mb-4 text-center">
                  Simulateur de borne de recharge
                </motion.h1>
                <motion.p variants={itemVariants} className="text-[#0c3248]/80 text-xl mb-10 text-center">
                  Vous êtes...
                </motion.p>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setUserType('enterprise');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-8 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <BuildingOfficeIcon className="w-8 h-8 text-[#0f81ba] group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Une entreprise
                      </h3>
                      <p className="text-[#0c3248]/80 group-hover:text-white/90">
                        Installation pour votre entreprise ou vos employés
                      </p>
                      <ChevronRightIcon className="w-6 h-6 mx-auto mt-6 text-[#0f81ba] group-hover:text-white" />
                    </div>
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setUserType('individual');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-8 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <HomeIcon className="w-8 h-8 text-[#0f81ba] group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Un particulier
                      </h3>
                      <p className="text-[#0c3248]/80 group-hover:text-white/90">
                        Installation pour votre domicile
                      </p>
                      <ChevronRightIcon className="w-6 h-6 mx-auto mt-6 text-[#0f81ba] group-hover:text-white" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Étape 2: Type d'installation */}
            {step === 2 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0c3248] mb-4 text-center">
                  Votre installation électrique
                </motion.h2>
                <motion.p variants={itemVariants} className="text-[#0c3248]/80 text-xl mb-10 text-center">
                  Est-elle en monophasé ou triphasé ?
                </motion.p>
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setInstallationType('unknown');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-6 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <QuestionMarkCircleIcon className="w-7 h-7 text-[#0f81ba] group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Je ne sais pas
                      </h3>
                      <p className="text-sm text-[#0c3248]/80 group-hover:text-white/90">
                        Nous vous aiderons à le déterminer
                      </p>
                    </div>
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setInstallationType('monophase');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-6 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <BoltIcon className="w-7 h-7 text-[#0f81ba] group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Oui, monophasé
                      </h3>
                      <p className="text-sm text-[#0c3248]/80 group-hover:text-white/90">
                        Installation standard
                      </p>
                    </div>
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setInstallationType('triphase');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-6 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <BoltSlashIcon className="w-7 h-7 text-[#0f81ba] group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Non, triphasé
                      </h3>
                      <p className="text-sm text-[#0c3248]/80 group-hover:text-white/90">
                        Installation industrielle
                      </p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Étape 3: Type de montage */}
            {step === 3 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#0c3248] mb-4 text-center">
                  Type d'installation
                </motion.h2>
                <motion.p variants={itemVariants} className="text-[#0c3248]/80 text-xl mb-10 text-center">
                  Comment souhaitez-vous installer votre borne ?
                </motion.p>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setMountType('wall');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-8 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <Image 
                          src="/images/borne-de-recharge.png" 
                          alt="Installation murale" 
                          width={40} 
                          height={40}
                          className="group-hover:brightness-200"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Sur un mur
                      </h3>
                      <p className="text-[#0c3248]/80 group-hover:text-white/90">
                        Installation murale classique
                      </p>
                      <ChevronRightIcon className="w-6 h-6 mx-auto mt-6 text-[#0f81ba] group-hover:text-white" />
                    </div>
                  </motion.button>

                  <motion.button
                    variants={itemVariants}
                    onClick={() => {
                      setMountType('stand');
                      goToNextStep();
                    }}
                    className="group bg-white border-2 border-[#0f81ba] rounded-xl p-8 text-center hover:bg-[#0f81ba] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 rounded-full bg-[#0f81ba]/10 flex items-center justify-center group-hover:bg-white/20">
                        <Image 
                          src="/images/borne-de-recharge.png" 
                          alt="Installation sur pied" 
                          width={40} 
                          height={40}
                          className="group-hover:brightness-200"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-[#0c3248] group-hover:text-white">
                        Sur pied
                      </h3>
                      <p className="text-[#0c3248]/80 group-hover:text-white/90">
                        Installation sur support dédié
                      </p>
                      <ChevronRightIcon className="w-6 h-6 mx-auto mt-6 text-[#0f81ba] group-hover:text-white" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Étape 4: Formulaire */}
            {step === 4 && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
              >
                <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-[#0c3248] mb-4 text-center">
                  Finalisez votre demande
                </motion.h2>
                <motion.p variants={itemVariants} className="text-[#0c3248]/80 text-lg mb-6 sm:mb-8 text-center">
                  Recevez votre devis personnalisé gratuitement
                </motion.p>
                
                {/* Récapitulatif des choix */}
                <motion.div variants={itemVariants} className="mb-6 sm:mb-8 bg-[#f8fafc] rounded-lg p-4 border border-gray-100">
                  <h3 className="font-medium text-[#0c3248] mb-3 flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    Récapitulatif de votre projet
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#0c3248]/80">
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <div className="font-medium mb-2 text-[#0c3248]">Profil</div>
                      <div className="flex items-center">
                        {userType === 'enterprise' ? (
                          <BuildingOfficeIcon className="w-5 h-5 text-[#0f81ba] mr-2" />
                        ) : (
                          <HomeIcon className="w-5 h-5 text-[#0f81ba] mr-2" />
                        )}
                        {userType === 'enterprise' ? 'Entreprise' : 'Particulier'}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <div className="font-medium mb-2 text-[#0c3248]">Installation</div>
                      <div className="flex items-center">
                        {installationType === 'unknown' ? (
                          <QuestionMarkCircleIcon className="w-5 h-5 text-[#0f81ba] mr-2" />
                        ) : installationType === 'monophase' ? (
                          <BoltIcon className="w-5 h-5 text-[#0f81ba] mr-2" />
                        ) : (
                          <BoltSlashIcon className="w-5 h-5 text-[#0f81ba] mr-2" />
                        )}
                        {installationType === 'monophase' ? 'Monophasé' : 
                          installationType === 'triphase' ? 'Triphasé' : 
                          'À déterminer'}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <div className="font-medium mb-2 text-[#0c3248]">Montage</div>
                      <div className="flex items-center">
                        <Image 
                          src={mountType === 'wall' ? "/images/wall-mount.png" : "/images/stand-mount.png"}
                          alt={mountType === 'wall' ? "Montage mural" : "Montage sur pied"}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        {mountType === 'wall' ? 'Mural' : 'Sur pied'}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                      <div className="font-medium mb-2 text-[#0c3248]">Estimation</div>
                      <div className="flex items-center">
                        <CurrencyEuroIcon className="w-5 h-5 text-green-500 mr-2" />
                        {estimatedPrice.min} - {estimatedPrice.max} €
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Success message */}
                <AnimatePresence>
                  {showSuccessMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 flex items-center"
                    >
                      <CheckCircleIcon className="w-6 h-6 mr-3 text-green-500" />
                      <div>
                        <p className="font-medium">Demande envoyée avec succès!</p>
                        <p className="text-sm">Vous allez être redirigé vers la page de confirmation...</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-[#0c3248] font-medium text-sm">Nom complet</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border border-[#0c3248]/20 px-4 py-3 text-[#0c3248] focus:border-[#0f81ba] focus:ring-[#0f81ba] shadow-sm"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="text-[#0c3248] font-medium text-sm">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border border-[#0c3248]/20 px-4 py-3 text-[#0c3248] focus:border-[#0f81ba] focus:ring-[#0f81ba] shadow-sm"
                        required
                      />
                    </label>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-[#0c3248] font-medium text-sm">Téléphone</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border border-[#0c3248]/20 px-4 py-3 text-[#0c3248] focus:border-[#0f81ba] focus:ring-[#0f81ba] shadow-sm"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="text-[#0c3248] font-medium text-sm">Code postal</span>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border border-[#0c3248]/20 px-4 py-3 text-[#0c3248] focus:border-[#0f81ba] focus:ring-[#0f81ba] shadow-sm"
                        required
                      />
                    </label>
                  </motion.div>

                  <motion.label variants={itemVariants} className="block">
                    <span className="text-[#0c3248] font-medium text-sm">Message (optionnel)</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-[#0c3248]/20 px-4 py-3 text-[#0c3248] focus:border-[#0f81ba] focus:ring-[#0f81ba] shadow-sm"
                      rows={4}
                    />
                  </motion.label>

                  <motion.div variants={itemVariants} className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || showSuccessMessage}
                      className="w-full bg-[#0f81ba] text-white py-4 rounded-xl font-semibold hover:bg-[#0c3248] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                    </p>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-[#0c3248]/10 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          {new Date().getFullYear()} MY OHM Technologies - Installation de bornes de recharge
        </div>
      </footer>
    </main>
  );
}