import ContactCTASection from '@/components/sections/ContactCTASection';
import ContactMapSection from '@/components/sections/ContactMapSection';
import ContactSchemaMarkup from '@/components/ContactSchemaMarkup';

export const metadata = {
  title: 'Contact | MyOhm Technologies',
  description: 'Contactez MyOhm Technologies pour vos projets d\'installation de panneaux solaires photovoltaïques.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactSchemaMarkup />
      <div className="min-h-screen">
        <ContactCTASection />
        <ContactMapSection />
      </div>
    </main>
  );
}
