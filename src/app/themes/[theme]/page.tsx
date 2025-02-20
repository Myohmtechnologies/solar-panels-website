import React from 'react';
import CitySchema from '@/components/schemas/CitySchema';
import { getCityData } from '@/lib/city';

interface ThemePageProps {
  params: {
    theme: string;
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const cityData = await getCityData(params.theme);

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-800">Ville non trouvée</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <CitySchema city={cityData} />
      {/* Vous pouvez ajouter d'autres composants ici si nécessaire */}
    </main>
  );
}

export async function generateMetadata({ params }: ThemePageProps) {
  const cityData = await getCityData(params.theme);

  if (!cityData) {
    return {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez n\'existe pas.',
    };
  }

  return {
    title: cityData.seo.title,
    description: cityData.seo.metaDescription,
    keywords: cityData.seo.keywords.join(', '),
  };
}
