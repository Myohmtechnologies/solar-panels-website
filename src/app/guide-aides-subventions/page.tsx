import { metadata } from './metadata';
import ClientPage from './ClientPage';
import GuideAidesSchemaMarkup from '@/components/GuideAidesSchemaMarkup';

export { metadata };

export default function GuideAidesSubventionsPage() {
  return (
    <main className="bg-white">
      <GuideAidesSchemaMarkup />
      <ClientPage />
    </main>
  );
}