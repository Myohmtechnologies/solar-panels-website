import ContactCTASection from '@/components/sections/ContactCTASection';
import ContactMapSection from '@/components/sections/ContactMapSection';

export const metadata = {
  title: 'Contact | MyOhm Technologies',
  description: 'Contactez MyOhm Technologies pour vos projets d\'installation de panneaux solaires photovoltaïques.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactCTASection />
      <ContactMapSection />
    </div>
  );
}
