'use client';

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckIcon,
  HomeIcon,
  KeyIcon,
  BoltIcon,
  SparklesIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  MapPinIcon,
  ChevronLeftIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import { simulatorEvents, conversionEvents, navigationEvents, formEvents } from '@/utils/analytics';
import SimulateurSchemaMarkup from '@/components/SimulateurSchemaMarkup';

type ServiceId = 'panneaux' | 'borne' | 'clim' | 'ballon' | 'electricite';
type AddressSuggestion = { fulltext?: string; label?: string; x?: number; y?: number };
type QuestionOption = { label: string; value: string; detail?: string };
type ServiceQuestion = { key: string; analyticsKey: string; title: string; subtitle: string; options: QuestionOption[] };

const energyBillOptions: QuestionOption[] = [
  { label: 'Moins de 85 € / mois', value: '<85€', detail: '≈ moins de 1 000 €/an' },
  { label: 'Entre 85 € et 165 € / mois', value: '85€-165€', detail: '≈ 1 000 € à 2 000 €/an' },
  { label: 'Plus de 165 € / mois', value: '>165€', detail: '≈ plus de 2 000 €/an' },
];

const serviceConfigs: Record<ServiceId, { label: string; projectType: string; icon: typeof SunIcon; questions: ServiceQuestion[] }> = {
  panneaux: {
    label: 'Panneaux solaires', projectType: 'SOLAR_PANELS', icon: SunIcon,
    questions: [{ key: 'energyBill', analyticsKey: 'energy_bill', title: 'Votre facture d’électricité ?', subtitle: 'Choisissez le montant moyen de votre facture mensuelle.', options: energyBillOptions }],
  },
  borne: {
    label: 'Borne de recharge', projectType: 'CHARGING_STATION', icon: BoltIcon,
    questions: [
      { key: 'chargingDistance', analyticsKey: 'charging_distance', title: 'Où souhaitez-vous faire installer votre borne de recharge ?', subtitle: 'La distance depuis le tableau électrique aide à évaluer les travaux nécessaires.', options: [
        { label: 'À proximité de mon tableau électrique', value: 'LESS_THAN_15M', detail: 'Distance courte de câble (moins de 15 mètres linéaires).' },
        { label: 'Ma borne sera éloignée de mon tableau', value: 'MORE_THAN_15M', detail: 'Distance longue nécessitant des travaux supplémentaires (plus de 15 mètres).' },
      ] },
      { key: 'vehicleStatus', analyticsKey: 'vehicle_status', title: 'Possédez-vous déjà votre véhicule électrique ou hybride rechargeable ?', subtitle: 'Cela nous aide à valider la compatibilité de recharge avec le constructeur de votre véhicule.', options: [
        { label: 'Oui', value: 'YES' },
        { label: 'Non, je l’ai commandé et attends d’être livré(e)', value: 'ORDERED' },
        { label: 'Non, il s’agit d’un projet', value: 'PLANNED' },
      ] },
    ],
  },
  clim: {
    label: 'Climatisation', projectType: 'AIR_CONDITIONING', icon: SparklesIcon,
    questions: [
      { key: 'climProject', analyticsKey: 'clim_project', title: 'Quel est votre projet de climatisation ?', subtitle: 'Dites-nous ce que vous souhaitez faire réaliser.', options: [
        { label: 'Installer une climatisation', value: 'INSTALL' },
        { label: 'Remplacer une installation existante', value: 'REPLACE' },
        { label: 'Autre demande', value: 'OTHER' },
      ] },
      { key: 'climSurface', analyticsKey: 'clim_surface', title: 'Quelle surface souhaitez-vous climatiser ?', subtitle: 'Une estimation suffit pour commencer.', options: [
        { label: 'Moins de 30 m²', value: '<30M2' },
        { label: 'Entre 30 et 60 m²', value: '30-60M2' },
        { label: 'Entre 60 et 100 m²', value: '60-100M2' },
        { label: 'Plus de 100 m²', value: '>100M2' },
      ] },
    ],
  },
  ballon: {
    label: 'Ballon d’eau chaude', projectType: 'WATER_HEATER', icon: FireIcon,
    questions: [{ key: 'waterHeaterCapacity', analyticsKey: 'water_heater_capacity', title: 'Quelle capacité souhaitez-vous pour votre ballon ?', subtitle: 'Si vous hésitez, choisissez « Je ne sais pas encore » ; nous vous conseillerons.', options: [
      { label: '50 litres', value: '50L' },
      { label: '100 litres', value: '100L' },
      { label: '150 litres', value: '150L' },
      { label: '200 litres', value: '200L' },
      { label: '300 litres', value: '300L' },
      { label: 'Je ne sais pas encore', value: 'UNKNOWN' },
    ] }],
  },
  electricite: {
    label: 'Électricité générale', projectType: 'ELECTRICAL_WORK', icon: WrenchScrewdriverIcon,
    questions: [
      { key: 'electricalWorkType', analyticsKey: 'electrical_work_type', title: 'Quel type de travaux souhaitez-vous ?', subtitle: 'Choisissez la demande qui correspond le mieux à votre projet.', options: [
        { label: 'Rénovation électrique', value: 'RENOVATION' },
        { label: 'Mise aux normes', value: 'UPGRADE' },
        { label: 'Ajout de prises ou d’éclairages', value: 'OUTLETS_LIGHTING' },
        { label: 'Dépannage', value: 'REPAIR' },
        { label: 'Autre demande', value: 'OTHER' },
      ] },
      { key: 'electricalScope', analyticsKey: 'electrical_scope', title: 'Quelle partie du logement est concernée ?', subtitle: 'Cela nous aide à comprendre l’ampleur de l’intervention.', options: [
        { label: 'Une pièce', value: 'ONE_ROOM' },
        { label: 'Plusieurs pièces', value: 'SEVERAL_ROOMS' },
        { label: 'Le tableau électrique', value: 'ELECTRICAL_PANEL' },
        { label: 'Tout le logement', value: 'WHOLE_HOME' },
      ] },
    ],
  },
};

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone);

function SimulateurContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get('prestation') as ServiceId | null;
  const serviceId: ServiceId = requestedService && requestedService in serviceConfigs ? requestedService : 'panneaux';
  const service = serviceConfigs[serviceId];
  const addressStep = service.questions.length + 3;
  const contactStep = addressStep + 1;
  const totalSteps = contactStep;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    residentialStatus: '', logementType: '', address: '', name: '', email: '', phone: '',
    isSubmitting: false, error: '',
  });
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [isSearchingAddress, setIsSearchingAddress] = useState(false);
  const [addressSelected, setAddressSelected] = useState(false);

  const currentQuestion = step >= 3 && step < addressStep ? service.questions[step - 3] : null;
  const currentContent = currentQuestion
    ? { title: currentQuestion.title, subtitle: currentQuestion.subtitle }
    : step === 1
      ? { title: 'Vous êtes…', subtitle: 'Pour commencer, quel est votre statut dans ce logement ?' }
      : step === 2
        ? { title: 'Vous habitez…', subtitle: 'Le type de logement nous aide à adapter votre estimation.' }
        : step === addressStep
          ? { title: 'Quelle est l’adresse de votre logement ?', subtitle: 'Pour situer votre projet et préparer une première estimation.' }
          : { title: 'Recevez votre estimation', subtitle: 'Laissez vos coordonnées et notre équipe vous recontactera pour étudier votre projet.' };

  useEffect(() => {
    navigationEvents.pageView('/simulator');
    simulatorEvents.simulatorStart(serviceId);
    simulatorEvents.stepView('property_type');
  }, [serviceId]);

  useEffect(() => {
    const query = form.address.trim();
    if (step !== addressStep || query.length < 4 || addressSelected) {
      setAddressSuggestions([]);
      setIsSearchingAddress(false);
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setIsSearchingAddress(true);
      try {
        const params = new URLSearchParams({ text: query, type: 'StreetAddress', maximumResponses: '5', terr: 'METROPOLE' });
        const response = await fetch(`https://data.geopf.fr/geocodage/completion/?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error('Recherche d’adresse indisponible');
        const data = await response.json();
        setAddressSuggestions(Array.isArray(data.results) ? data.results : []);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) setAddressSuggestions([]);
      } finally {
        if (!controller.signal.aborted) setIsSearchingAddress(false);
      }
    }, 300);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [addressSelected, addressStep, form.address, step]);

  const analyticsStepName = (stepNumber: number) => {
    if (stepNumber === 1) return 'property_type';
    if (stepNumber === 2) return 'equipment';
    if (stepNumber === addressStep) return 'address';
    if (stepNumber === contactStep) return 'contact';
    return service.questions[stepNumber - 3]?.analyticsKey || 'service_question';
  };

  const goToStep = (nextStep: number) => {
    simulatorEvents.stepView(analyticsStepName(nextStep));
    formEvents.formProgress('simulator', nextStep, totalSteps);
    setStep(nextStep);
  };

  const selectStatus = (status: 'OWNER' | 'TENANT') => {
    simulatorEvents.stepComplete('property_type', { residential_status: status });
    setForm((current) => ({ ...current, residentialStatus: status }));
    goToStep(2);
  };

  const selectHomeType = (homeType: 'HOUSE' | 'APARTMENT') => {
    simulatorEvents.stepComplete('equipment', { property_type: homeType });
    setForm((current) => ({ ...current, logementType: homeType }));
    goToStep(3);
  };

  const selectServiceAnswer = (question: ServiceQuestion, value: string) => {
    simulatorEvents.stepComplete(question.analyticsKey, { [question.key]: value });
    setAnswers((current) => ({ ...current, [question.key]: value }));
    goToStep(step + 1);
  };

  const formatAddressSuggestion = (suggestion: AddressSuggestion) => {
    const label = suggestion.fulltext || suggestion.label;
    if (!label) return '';
    const houseNumber = form.address.match(/^\s*(\d+\s*(?:bis|ter|quater)?)(?=\s|,)/i)?.[1]?.trim();
    return houseNumber && !/^\d/.test(label) ? `${houseNumber} ${label}` : label;
  };

  const selectAddress = (suggestion: AddressSuggestion) => {
    const address = formatAddressSuggestion(suggestion);
    if (!address) return;
    setAddressSuggestions([]);
    setAddressSelected(true);
    setForm((current) => ({ ...current, address }));
  };

  const continueFromAddress = () => {
    simulatorEvents.stepComplete('address', { address: form.address.trim() });
    goToStep(contactStep);
  };

  const goBack = () => {
    if (step > 1) goToStep(step - 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !validateEmail(form.email) || !validatePhone(form.phone)) {
      formEvents.formError('simulator_validation_error');
      setForm((current) => ({ ...current, error: 'Vérifiez votre nom, votre adresse e-mail et votre numéro de téléphone.' }));
      return;
    }

    setForm((current) => ({ ...current, isSubmitting: true, error: '' }));
    try {
      conversionEvents.simulatorConversion('complete', { property_type: form.logementType, energy_bill: answers.energyBill || '' });
      const structuredAnswers = service.questions.map((question) => {
        const value = answers[question.key] || '';
        const selectedOption = question.options.find((option) => option.value === value);
        return { question: question.title, answer: selectedOption ? `${selectedOption.label}${selectedOption.detail ? ` — ${selectedOption.detail}` : ''}` : value, value };
      });
      const simulatorData = {
        prestation: serviceId,
        prestationLabel: service.label,
        residentialStatus: form.residentialStatus,
        logementType: form.logementType,
        address: form.address.trim(),
        answers: structuredAnswers,
      };
      const lead = {
        name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), address: form.address.trim(),
        residentialStatus: form.residentialStatus, logementType: form.logementType,
        energyBill: answers.energyBill || null,
        source: 'simulator', projectType: service.projectType, simulatorData,
      };
      const response = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Une erreur est survenue lors de l’envoi.');

      const params = new URLSearchParams(window.location.search);
      sessionStorage.setItem('leadInfo', JSON.stringify({ name: form.name, type: 'simulator', service: serviceId, gclid: params.get('gclid'), source: params.get('utm_source') || 'direct' }));
      if (window.gtag && params.get('gclid')) {
        window.gtag('event', 'conversion', { send_to: 'AW-18287034089/FFX8CKXqk6EaEPPGpNM-', value: 100, currency: 'EUR' });
      }
      const redirect = new URL('/merci', window.location.origin);
      redirect.searchParams.set('source', 'simulator');
      redirect.searchParams.set('prestation', serviceId);
      ['gclid', 'utm_source', 'utm_medium', 'utm_campaign'].forEach((key) => {
        const value = params.get(key);
        if (value) redirect.searchParams.set(key, value);
      });
      window.location.href = redirect.toString();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur est survenue lors de l’envoi.';
      setForm((current) => ({ ...current, isSubmitting: false, error: message }));
      formEvents.formError('simulator_submission_error');
    }
  };

  const ServiceIcon = service.icon;
  const Choice = ({ title, detail, icon: Icon, onClick }: { title: string; detail?: string; icon: typeof HomeIcon; onClick: () => void }) => (
    <button type="button" onClick={onClick} className="group flex w-full items-center gap-4 rounded-2xl border border-[#116290]/10 bg-[#f5f9fb] p-3.5 text-left transition hover:border-[#116290]/30 hover:bg-white hover:shadow-[0_8px_24px_rgba(8,47,73,0.1)] sm:p-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffeb99] to-[#ffb700] text-[#0a3d5c] shadow-sm transition group-hover:scale-105"><Icon className="h-7 w-7" /></span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold text-[#102c40] sm:text-lg">{title}</span>
        {detail && <span className="mt-0.5 block text-sm text-gray-500">{detail}</span>}
      </span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#116290]/35 text-transparent transition group-hover:border-[#116290] group-hover:bg-[#116290] group-hover:text-white"><CheckIcon className="h-4 w-4" strokeWidth={3} /></span>
    </button>
  );

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f9fb] px-4 pb-8 pt-5 sm:px-6 sm:pt-7">
      <SimulateurSchemaMarkup />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#ffdf64]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-[#116290]/10 blur-3xl" />

      <header className="relative z-10 mx-auto flex h-14 w-full max-w-6xl items-center justify-center gap-3 sm:gap-4">
        <Link href="/" aria-label="MY OHM Technologies, accueil">
          <Image src="/images/logo.png" alt="MY OHM Technologies" width={190} height={70} className="h-10 w-auto sm:h-12" priority />
        </Link>
        <span aria-hidden="true" className="text-3xl font-light leading-none text-[#116290]/50">|</span>
        <span className="whitespace-nowrap text-lg font-extrabold tracking-tight text-[#102c40] sm:text-2xl">{service.label}</span>
      </header>

      <section className="relative z-10 mx-auto my-auto w-full max-w-3xl rounded-[2rem] border border-[#116290]/10 bg-white p-5 shadow-[0_22px_70px_rgba(8,47,73,0.12)] sm:p-8 md:p-10">
        {step > 1 && <button type="button" onClick={goBack} className="mb-4 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#f1f6f9] px-3 py-2 text-sm font-semibold text-[#116290] transition hover:bg-[#e5f0f6]" aria-label="Revenir à l’étape précédente"><ChevronLeftIcon className="h-4 w-4" /><span>Retour</span></button>}
        <div className="mb-7 flex items-center gap-3">
          <span className="shrink-0 rounded-full bg-[#f1f6f9] px-3 py-1.5 text-xs font-bold text-[#116290]">Étape {step} sur {totalSteps}</span>
          <div className="flex flex-1 gap-2" aria-label={`Étape ${step} sur ${totalSteps}`}>
            {Array.from({ length: totalSteps }, (_, index) => <span key={index} className={`h-2 flex-1 rounded-full ${index < step ? 'bg-gradient-to-r from-[#ffdf64] to-[#ffb700]' : 'bg-gray-200'}`} />)}
          </div>
          <span className="hidden text-xs font-medium text-gray-500 sm:block">Estimation gratuite</span>
        </div>

        <div className="mb-7">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#102c40] sm:text-4xl">{currentContent.title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">{currentContent.subtitle}</p>
        </div>

        <div className="space-y-3.5">
          {step === 1 && <>
            <Choice title="Propriétaire" detail="Je suis propriétaire de mon logement" icon={HomeIcon} onClick={() => selectStatus('OWNER')} />
            <Choice title="Locataire" detail="Je suis locataire de mon logement" icon={KeyIcon} onClick={() => selectStatus('TENANT')} />
          </>}

          {step === 2 && <>
            <Choice title="Une maison" detail="Individuelle ou mitoyenne" icon={HomeIcon} onClick={() => selectHomeType('HOUSE')} />
            <Choice title="Un appartement" detail="Dans une résidence ou un immeuble" icon={BuildingOffice2Icon} onClick={() => selectHomeType('APARTMENT')} />
          </>}

          {currentQuestion && currentQuestion.options.map((option) => (
            <Choice key={option.value} title={option.label} detail={option.detail} icon={ServiceIcon} onClick={() => selectServiceAnswer(currentQuestion, option.value)} />
          ))}

          {step === addressStep && <div className="space-y-4">
            <label htmlFor="simulator-address" className="block text-sm font-semibold text-[#102c40]">Adresse du logement
              <span className="relative mt-1.5 block">
                <MapPinIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#116290]" />
                <input id="simulator-address" value={form.address} onChange={(event) => { setAddressSelected(false); setForm((current) => ({ ...current, address: event.target.value })); }} autoComplete="street-address" placeholder="Ex. 12 rue des Lilas, Manosque" role="combobox" aria-autocomplete="list" aria-expanded={addressSuggestions.length > 0} aria-controls="simulator-address-suggestions" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#116290] focus:ring-4 focus:ring-[#116290]/10" />
              </span>
            </label>
            {isSearchingAddress && <p className="text-sm text-gray-500">Recherche des adresses…</p>}
            {addressSuggestions.length > 0 && <ul id="simulator-address-suggestions" role="listbox" className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              {addressSuggestions.map((suggestion, index) => {
                const label = formatAddressSuggestion(suggestion);
                if (!label) return null;
                return <li key={`${label}-${index}`} role="option" aria-selected="false">
                  <button type="button" onClick={() => selectAddress(suggestion)} className="flex w-full items-start gap-3 px-4 py-3 text-left text-sm text-[#102c40] transition hover:bg-[#f5f9fb]"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#116290]" />{label}</button>
                </li>;
              })}
            </ul>}
            <p className="rounded-xl bg-[#f5f9fb] px-4 py-3 text-xs leading-5 text-gray-600">Commencez à saisir votre adresse puis choisissez une suggestion. Les adresses sont proposées par la Base Adresse Nationale.</p>
            <button type="button" onClick={continueFromAddress} disabled={form.address.trim().length < 5} className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#116290] to-[#0a3d5c] px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">Continuer <ArrowRightIcon className="ml-2 h-5 w-5" /></button>
          </div>}

          {step === contactStep && <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-[#102c40]">Nom et prénom
                <input required minLength={2} value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} autoComplete="name" placeholder="Votre nom" className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#116290] focus:ring-4 focus:ring-[#116290]/10" />
              </label>
              <label className="block text-sm font-semibold text-[#102c40]">Téléphone
                <input required type="tel" value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} autoComplete="tel" placeholder="06 12 34 56 78" className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#116290] focus:ring-4 focus:ring-[#116290]/10" />
              </label>
            </div>
            <label className="block text-sm font-semibold text-[#102c40]">Adresse e-mail
              <input required type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} autoComplete="email" placeholder="vous@exemple.fr" className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-[#116290] focus:ring-4 focus:ring-[#116290]/10" />
            </label>
            {form.error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{form.error}</p>}
            <button type="submit" disabled={form.isSubmitting} className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#116290] to-[#0a3d5c] px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60">{form.isSubmitting ? 'Envoi en cours…' : 'Recevoir mon estimation'} {!form.isSubmitting && <ArrowRightIcon className="ml-2 h-5 w-5" />}</button>
          </form>}
        </div>

        {step === 1 && <p className="mt-6 text-center text-xs text-gray-500">Une estimation rapide, sans engagement.</p>}
      </section>

      <div className="relative z-10 mx-auto mt-5 w-full max-w-3xl px-3 pb-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold text-[#536577] sm:text-xs">
          <span className="inline-flex items-center gap-1.5"><SparklesIcon className="h-4 w-4 text-[#e9a900]" />100% gratuit</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheckIcon className="h-4 w-4 text-[#116290]" />Sans engagement</span>
          <span className="inline-flex items-center gap-1.5"><LockClosedIcon className="h-4 w-4 text-[#e9a900]" />Données protégées</span>
        </div>
        <p className="mx-auto mt-3 max-w-xl text-center text-xs leading-5 text-gray-500">En continuant, vous acceptez d’être recontacté par MY OHM Technologies concernant votre projet.</p>
      </div>
    </main>
  );
}

export default function SimulateurPage() {
  return (
    <Suspense fallback={<main className="flex min-h-screen items-start justify-center bg-[#f5f9fb] px-4 pt-8"><Image src="/images/logo.png" alt="MY OHM Technologies" width={190} height={70} className="h-11 w-auto" priority /></main>}>
      <SimulateurContent />
    </Suspense>
  );
}
