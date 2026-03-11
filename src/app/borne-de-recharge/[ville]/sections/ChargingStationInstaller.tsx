import { 
  CheckCircleIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  UserGroupIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ChargingStationInstallerProps {
  cityName: string;
}

const criteria = [
  {
    title: "Une équipe de professionnels certifiés IRVE",
    description: "MY OHM Technologies est certifiée IRVE, garantissant des installations de qualité conformes aux normes. Cette certification est essentielle pour bénéficier des aides gouvernementales et régionales.",
    icon: ShieldCheckIcon,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Une équipe qui respecte les lois d'installation",
    description: "Notre expertise garantit le respect strict des normes électriques et des règles spécifiques aux bornes de recharge. Une installation non conforme compromettrait votre garantie et la sécurité de votre installation.",
    icon: CheckCircleIcon,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Une entreprise qui vous respecte et répond à vos questions",
    description: "Chez MY OHM Technologies, nous privilégions un dialogue de confiance. Notre équipe d'experts est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet d'installation.",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Un plan détaillé du service",
    description: "Nous vous proposons un accompagnement transparent, du devis initial jusqu'à la mise en service. Notre processus d'installation est clairement expliqué pour vous garantir une installation en toute sérénité.",
    icon: DocumentTextIcon,
    color: "bg-orange-50 text-orange-600",
  }
];

const guarantees = [
  {
    title: "Garantie décennale",
    description: "Toutes nos installations sont couvertes par une garantie décennale",
    icon: ShieldCheckIcon,
  },
  {
    title: "Support technique",
    description: "Une équipe technique disponible pour répondre à vos besoins",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Service client",
    description: "Un service client réactif et à votre écoute",
    icon: UserGroupIcon,
  },
  {
    title: "Conseil personnalisé",
    description: "Des solutions adaptées à vos besoins spécifiques",
    icon: ChatBubbleLeftRightIcon,
  }
];

const advantages = [
  "Installation par des professionnels certifiés",
  "Garantie décennale",
  "Service après-vente réactif",
  "Devis gratuit et personnalisé",
  "Accompagnement dans vos démarches administratives",
  "Suivi de projet dédié"
];

export default function ChargingStationInstaller({ cityName }: ChargingStationInstallerProps) {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c3248] mb-6">
            Installation de votre borne de recharge à {cityName}
          </h2>
          <p className="text-[#0c3248]/90 text-xl">
            Faites confiance à nos experts pour une installation professionnelle et sécurisée
          </p>
        </div>

        {/* Section "Pourquoi nous choisir" */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-[#0c3248] mb-12 text-center">
            Pourquoi nous choisir ?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne de gauche : Arguments et certifications */}
            <div className="space-y-12">
              {/* Liste des avantages */}
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#0f81ba] flex-shrink-0" />
                    <span className="text-lg text-[#0c3248]">{advantage}</span>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-[#0c3248]">
                  Nos certifications
                </h4>
                <div className="flex flex-wrap gap-8 items-center">
                  <Image
                    src="/images/images.jpeg"
                    alt="Certification"
                    width={280}
                    height={120}
                    className="object-contain"
                  />
                  <Image
                    src="/images/garantie-decennale-p2a-construction.webp"
                    alt="Garantie décennale"
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-[#0f81ba] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#0c3248] transition-all duration-300">
                Demander un devis gratuit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Colonne de droite : Photo du showroom */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/local-my-ohm-technologies.jpg"
                alt="Notre showroom"
                width={600}
                height={300}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Notre showroom</h4>
                <p>Venez découvrir nos solutions de recharge en situation réelle</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
} 